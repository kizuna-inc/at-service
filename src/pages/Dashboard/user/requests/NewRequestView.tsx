import {
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Mic,
  Plus,
  Save,
  Square,
  Trash2,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { showDemoAlert } from "@/modules/demoAlert";

type ReportMethod = "text" | "voice";
type DeviceType =
  | "wheelchair"
  | "screenReader"
  | "brailleDisplay"
  | "voiceKit"
  | "keyboard"
  | "other";

interface AttachedImage {
  id: string;
  name: string;
  sizeBytes: number;
  previewUrl: string;
}

const TOTAL_STEPS = 5;
const MAX_DESCRIPTION_LENGTH = 500;
const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png"]);

const DEVICE_TYPES: DeviceType[] = [
  "wheelchair",
  "screenReader",
  "brailleDisplay",
  "voiceKit",
  "keyboard",
  "other",
];

const formatFileSize = (bytes: number): string => {
  const mb = bytes / (1024 * 1024);
  if (mb >= 0.1) {
    return `${mb.toFixed(1)} MB`;
  }
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
};

const formatDuration = (totalSeconds: number): string => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

export const NewRequestView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const objectUrlsRef = useRef<Set<string>>(new Set());
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordingTimerRef = useRef<number | null>(null);
  const audioUrlRef = useRef<string | null>(null);

  const [method, setMethod] = useState<ReportMethod>("text");
  const [deviceType, setDeviceType] = useState<DeviceType>("wheelchair");
  const [description, setDescription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<AttachedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  const stopStreamAndTimer = () => {
    if (recordingTimerRef.current !== null) {
      window.clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
  };

  useEffect(() => {
    const urls = objectUrlsRef.current;
    return () => {
      if (recordingTimerRef.current !== null) {
        window.clearInterval(recordingTimerRef.current);
      }
      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
      for (const url of urls) {
        URL.revokeObjectURL(url);
      }
      urls.clear();
    };
  }, []);

  const methods: {
    key: ReportMethod;
    icon: typeof FileText;
  }[] = [
    { key: "text", icon: FileText },
    { key: "voice", icon: Mic },
  ];

  const startRecording = async () => {
    if (
      !navigator.mediaDevices?.getUserMedia ||
      typeof MediaRecorder === "undefined"
    ) {
      setError(t("dashboard.user.pages.requests.form.voice.micError"));
      return;
    }

    setError("");
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
      setAudioUrl(null);
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, {
          type: recorder.mimeType || "audio/webm",
        });
        const nextUrl = URL.createObjectURL(blob);
        audioUrlRef.current = nextUrl;
        setAudioUrl(nextUrl);
        stopStreamAndTimer();
        setIsRecording(false);
      };

      recorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);
      recordingTimerRef.current = window.setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } catch {
      stopStreamAndTimer();
      setIsRecording(false);
      setError(t("dashboard.user.pages.requests.form.voice.micError"));
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const removeRecording = () => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    setAudioUrl(null);
    setRecordingSeconds(0);
  };

  const addFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const accepted: AttachedImage[] = [];
    let hasInvalid = false;

    for (const file of Array.from(files)) {
      if (
        !ALLOWED_IMAGE_TYPES.has(file.type) ||
        file.size > MAX_FILE_SIZE_BYTES
      ) {
        hasInvalid = true;
        continue;
      }

      const previewUrl = URL.createObjectURL(file);
      objectUrlsRef.current.add(previewUrl);
      accepted.push({
        id: crypto.randomUUID(),
        name: file.name,
        sizeBytes: file.size,
        previewUrl,
      });
    }

    if (hasInvalid) {
      setError(t("dashboard.user.pages.requests.form.fileError"));
    } else {
      setError("");
    }

    if (accepted.length > 0) {
      setAttachments((prev) => [...prev, ...accepted]);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target) {
        URL.revokeObjectURL(target.previewUrl);
        objectUrlsRef.current.delete(target.previewUrl);
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const hasAttachments = attachments.length > 0;
  const isDescriptionRequired = method === "text" && !hasAttachments;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasDescription = Boolean(description.trim());
    const hasVoice = method === "voice" && Boolean(audioUrl);

    if (!hasDescription && !hasVoice && !hasAttachments) {
      setError(t("dashboard.user.pages.requests.form.validationError"));
      return;
    }

    setError("");
    showDemoAlert();
  };

  return (
    <div className="space-y-4">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => navigate("/dashboard/user/requests")}
        className="hover:bg-primary-light -ml-2 text-text-primary cursor-pointer"
      >
        <ArrowLeft className="size-4" />
        <span>{t("dashboard.user.pages.requests.form.backToList")}</span>
      </Button>

      <Card className="bg-bg-surface shadow-card border border-border">
        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="space-y-7 py-3">
            {/* Step progress bar & Save Draft */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-medium text-text-muted text-xs whitespace-nowrap">
                {t("dashboard.user.pages.requests.form.stepProgress", {
                  current: 1,
                  total: TOTAL_STEPS,
                })}
              </span>
              <div
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
                className="flex-1 gap-1.5 grid grid-cols-5 min-w-32"
              >
                {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                  <span
                    key={index}
                    className={`rounded-full h-2 ${
                      index === 0 ? "bg-primary" : "bg-bg-subtle"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium text-text-muted text-xs">20%</span>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={showDemoAlert}
                className="hover:bg-primary-light border-border-input text-text-primary cursor-pointer"
              >
                <Save className="size-4" />
                <span>
                  {t("dashboard.user.pages.requests.form.saveDraft")}
                </span>
              </Button>
            </div>

            {/* Header */}
            <div>
              <h1 className="font-bold text-text-primary text-2xl">
                {t("dashboard.user.pages.requests.form.title")}
              </h1>
              <p className="mt-1 text-text-muted text-sm">
                {t("dashboard.user.pages.requests.form.subtitle")}
              </p>
            </div>

            {/* Report method selector cards */}
            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
              {methods.map((item) => {
                const Icon = item.icon;
                const active = method === item.key;

                return (
                  <button
                    key={item.key}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setMethod(item.key)}
                    className={`relative flex flex-col items-center gap-1.5 p-5 border rounded-xl text-center transition-colors cursor-pointer ${
                      active
                        ? "border-primary bg-primary-light/40"
                        : "border-border bg-bg-surface hover:border-primary/50"
                    }`}
                  >
                    {active && (
                      <span className="top-2.5 right-2.5 absolute flex justify-center items-center bg-primary rounded-full size-5 text-text-inverse">
                        <Check className="size-3.5" />
                      </span>
                    )}
                    <Icon
                      className={`size-6 ${
                        active ? "text-primary" : "text-text-primary"
                      }`}
                    />
                    <span className="mt-1 font-semibold text-text-primary text-sm">
                      {t(
                        `dashboard.user.pages.requests.form.methods.${item.key}.title`,
                      )}
                    </span>
                    <span className="text-text-muted text-xs">
                      {t(
                        `dashboard.user.pages.requests.form.methods.${item.key}.desc`,
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {error && (
              <Alert
                variant="destructive"
                className="bg-danger-bg-hover border-danger-border text-danger-text"
              >
                <AlertCircle className="size-4" />
                <AlertDescription className="text-danger-text">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* Form rows */}
            <div className="space-y-5">
              <div className="items-center gap-3 grid grid-cols-1 md:grid-cols-[180px_1fr]">
                <Label
                  htmlFor="request-device-type"
                  className="text-text-primary"
                >
                  <span>
                    {t("dashboard.user.pages.requests.form.deviceTypeLabel")}
                  </span>
                  <span className="text-danger-text">*</span>
                </Label>
                <select
                  id="request-device-type"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value as DeviceType)}
                  className="bg-bg-surface px-3 py-2.5 border border-border-input rounded-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 w-full text-text-primary text-sm"
                >
                  {DEVICE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {t(`dashboard.user.pages.requests.form.devices.${type}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="items-start gap-3 grid grid-cols-1 md:grid-cols-[180px_1fr]">
                <Label
                  htmlFor="request-details"
                  className="pt-2 text-text-primary"
                >
                  <span>
                    {t("dashboard.user.pages.requests.form.descriptionLabel")}
                  </span>
                  {isDescriptionRequired && (
                    <span className="text-danger-text">*</span>
                  )}
                </Label>
                <div className="space-y-3">
                  {method === "voice" && (
                    <div className="space-y-3 bg-bg-subtle/60 p-4 border border-border rounded-xl">
                      <div className="flex flex-wrap justify-between items-center gap-3">
                        <div className="flex items-center gap-2.5">
                          {!isRecording ? (
                            <Button
                              type="button"
                              onClick={() => void startRecording()}
                              className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                            >
                              <Mic className="size-4" />
                              <span>
                                {t(
                                  "dashboard.user.pages.requests.form.voice.startRecording",
                                )}
                              </span>
                            </Button>
                          ) : (
                            <Button
                              type="button"
                              onClick={stopRecording}
                              className="bg-danger-text hover:bg-danger-text/90 text-text-inverse cursor-pointer"
                            >
                              <Square className="size-4" />
                              <span>
                                {t(
                                  "dashboard.user.pages.requests.form.voice.stopRecording",
                                )}
                              </span>
                            </Button>
                          )}

                          {isRecording && (
                            <span className="flex items-center gap-2 font-medium text-danger-text text-sm">
                              <span
                                aria-hidden="true"
                                className="bg-danger-text rounded-full size-2.5 animate-pulse"
                              />
                              <span>
                                {t(
                                  "dashboard.user.pages.requests.form.voice.recordingStatus",
                                )}
                              </span>
                              <span className="tabular-nums">
                                {formatDuration(recordingSeconds)}
                              </span>
                            </span>
                          )}
                        </div>

                        {audioUrl && !isRecording && (
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={removeRecording}
                            className="hover:bg-danger-bg-hover border-danger-border text-danger-text hover:text-danger-text cursor-pointer"
                          >
                            <Trash2 className="size-4" />
                            <span>
                              {t(
                                "dashboard.user.pages.requests.form.voice.removeRecording",
                              )}
                            </span>
                          </Button>
                        )}
                      </div>

                      {audioUrl && !isRecording && (
                        <div className="space-y-1.5">
                          <p className="font-medium text-text-primary text-xs">
                            {t(
                              "dashboard.user.pages.requests.form.voice.recordedLabel",
                            )}{" "}
                            ({formatDuration(recordingSeconds)})
                          </p>
                          <audio controls src={audioUrl} className="w-full" />
                        </div>
                      )}
                    </div>
                  )}

                  <div className="relative">
                    <textarea
                      id="request-details"
                      required={isDescriptionRequired}
                      rows={4}
                      maxLength={MAX_DESCRIPTION_LENGTH}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={t(
                        "dashboard.user.pages.requests.form.descriptionPlaceholder",
                      )}
                      className="bg-bg-surface px-3 py-2.5 pb-7 border border-border-input rounded-lg outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 w-full text-text-primary placeholder:text-muted-foreground text-sm resize-y"
                    />
                    <span className="right-3 bottom-2.5 absolute text-text-muted text-xs pointer-events-none">
                      {description.length}/{MAX_DESCRIPTION_LENGTH}
                    </span>
                  </div>
                </div>
              </div>

              <div className="items-start gap-3 grid grid-cols-1 md:grid-cols-[180px_1fr]">
                <div className="space-y-0.5 pt-1">
                  <p className="font-medium text-text-primary text-sm">
                    {t("dashboard.user.pages.requests.form.attachmentsLabel")}{" "}
                    <span className="font-normal text-text-muted text-xs">
                      {t("dashboard.user.pages.requests.form.optionalTag")}
                    </span>
                  </p>
                  <p className="text-text-muted text-xs">
                    {t("dashboard.user.pages.requests.form.fileTypesHint")}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t("dashboard.user.pages.requests.form.fileSizeHint")}
                  </p>
                </div>

                <div className="flex flex-wrap items-start gap-3">
                  {attachments.map((file) => (
                    <div key={file.id} className="space-y-1 w-28">
                      <div className="relative border border-border rounded-lg size-24 overflow-hidden">
                        <img
                          src={file.previewUrl}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeAttachment(file.id)}
                          aria-label={t(
                            "dashboard.user.pages.requests.form.removeFileAria",
                          )}
                          className="top-1.5 right-1.5 absolute flex justify-center items-center bg-brand-navy/80 hover:bg-brand-navy rounded-full size-5 text-text-inverse cursor-pointer"
                        >
                          <X className="size-3" />
                        </button>
                      </div>
                      <p className="font-medium text-text-primary text-xs truncate">
                        {file.name}
                      </p>
                      <p className="text-text-muted text-xs">
                        {formatFileSize(file.sizeBytes)}
                      </p>
                    </div>
                  ))}

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        fileInputRef.current?.click();
                      }
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`flex flex-col justify-center items-center gap-1 p-3 border-2 border-dashed rounded-lg w-36 h-24 text-center transition-colors cursor-pointer ${
                      isDragging
                        ? "border-primary bg-primary-light/40"
                        : "border-border-input hover:border-primary"
                    }`}
                  >
                    <span className="flex justify-center items-center bg-text-muted/80 rounded-full size-6 text-text-inverse">
                      <Plus className="size-3.5" />
                    </span>
                    <span className="font-medium text-text-primary text-xs">
                      {t("dashboard.user.pages.requests.form.addFile")}
                    </span>
                    <span className="text-text-muted text-[11px]">
                      {t("dashboard.user.pages.requests.form.dragDropHint")}
                    </span>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png"
                    multiple
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
              >
                <span>{t("dashboard.user.pages.requests.form.submit")}</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};
