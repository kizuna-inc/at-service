import { useEffect, useState } from "react";
import {
  Accessibility,
  Contrast,
  Mic,
  RotateCcw,
  Type,
  Volume2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

type TextSize = "normal" | "large" | "xlarge";
type ToggleKey = "highContrast" | "screenReader" | "voiceControl";

interface A11yPreferences {
  textSize: TextSize;
  highContrast: boolean;
  screenReader: boolean;
  voiceControl: boolean;
}

const A11Y_STORAGE_KEY = "a11yPreferences";

const DEFAULT_PREFERENCES: A11yPreferences = {
  textSize: "normal",
  highContrast: false,
  screenReader: false,
  voiceControl: false,
};

const FONT_SIZE_MAP: Record<TextSize, string> = {
  normal: "100%",
  large: "112.5%",
  xlarge: "125%",
};

const loadPreferences = (): A11yPreferences => {
  const raw = localStorage.getItem(A11Y_STORAGE_KEY);
  if (!raw) return DEFAULT_PREFERENCES;

  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) {
      return DEFAULT_PREFERENCES;
    }

    const record = parsed as Record<string, unknown>;
    const textSize: TextSize =
      record.textSize === "large" || record.textSize === "xlarge"
        ? record.textSize
        : "normal";

    return {
      textSize,
      highContrast: Boolean(record.highContrast),
      screenReader: Boolean(record.screenReader),
      voiceControl: Boolean(record.voiceControl),
    };
  } catch {
    return DEFAULT_PREFERENCES;
  }
};

export const AccessibilityMenu = () => {
  const { t } = useTranslation();
  const [prefs, setPrefs] = useState<A11yPreferences>(loadPreferences);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = FONT_SIZE_MAP[prefs.textSize];

    if (prefs.highContrast) {
      root.dataset.contrast = "high";
    } else {
      delete root.dataset.contrast;
    }

    if (prefs.screenReader) {
      root.dataset.screenReader = "true";
    } else {
      delete root.dataset.screenReader;
    }

    if (prefs.voiceControl) {
      root.dataset.voiceControl = "true";
    } else {
      delete root.dataset.voiceControl;
    }

    localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const textSizeOptions: { value: TextSize; label: string }[] = [
    { value: "normal", label: t("a11y.textNormal") },
    { value: "large", label: t("a11y.textLarge") },
    { value: "xlarge", label: t("a11y.textXLarge") },
  ];

  const toggleOptions: {
    key: ToggleKey;
    label: string;
    badgeClass: string;
    icon: typeof Contrast;
  }[] = [
    {
      key: "highContrast",
      label: t("a11y.highContrast"),
      badgeClass: "bg-a11y-contrast",
      icon: Contrast,
    },
    {
      key: "screenReader",
      label: t("a11y.screenReader"),
      badgeClass: "bg-a11y-screenreader",
      icon: Volume2,
    },
    {
      key: "voiceControl",
      label: t("a11y.voiceControl"),
      badgeClass: "bg-a11y-voice",
      icon: Mic,
    },
  ];

  const handleTextSizeChange = (textSize: TextSize, label: string) => {
    setPrefs((prev) => ({ ...prev, textSize }));
    setAnnouncement(`${t("a11y.textSize")}: ${label}`);
  };

  const handleToggle = (key: ToggleKey, label: string) => {
    setPrefs((prev) => {
      const next = !prev[key];
      setAnnouncement(`${label}: ${next ? t("a11y.on") : t("a11y.off")}`);
      return { ...prev, [key]: next };
    });
  };

  const handleReset = () => {
    setPrefs(DEFAULT_PREFERENCES);
    setAnnouncement(`${t("a11y.title")}: ${t("a11y.reset")}`);
  };

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t("a11y.title")}
            className="hover:bg-brand-navy-hover text-text-inverse hover:text-text-inverse cursor-pointer"
          />
        }
      >
        <Accessibility className="size-4" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="space-y-3 bg-bg-surface p-4 border border-border w-72 text-text-body"
      >
        <PopoverHeader className="flex-row justify-between items-center">
          <PopoverTitle className="font-semibold text-text-primary">
            {t("a11y.title")}
          </PopoverTitle>
          <Button
            type="button"
            variant="ghost"
            size="xs"
            onClick={handleReset}
            className="text-text-muted hover:text-text-primary cursor-pointer"
          >
            <RotateCcw className="size-3" />
            <span>{t("a11y.reset")}</span>
          </Button>
        </PopoverHeader>

        <div className="space-y-2 pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="flex justify-center items-center bg-a11y-textsize rounded-full size-6 text-text-inverse">
              <Type className="size-3.5" />
            </span>
            <span className="font-medium text-text-primary text-xs">
              {t("a11y.textSize")}
            </span>
          </div>
          <div className="gap-1.5 grid grid-cols-3">
            {textSizeOptions.map((option) => {
              const active = prefs.textSize === option.value;
              return (
                <Button
                  key={option.value}
                  type="button"
                  variant={active ? "default" : "outline"}
                  size="xs"
                  aria-pressed={active}
                  onClick={() => handleTextSizeChange(option.value, option.label)}
                  className={
                    active
                      ? "bg-primary hover:bg-primary-hover text-text-inverse cursor-pointer"
                      : "border-border-input hover:bg-primary-light text-text-primary cursor-pointer"
                  }
                >
                  {option.label}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-1.5 pt-2 border-t border-border">
          {toggleOptions.map((item) => {
            const Icon = item.icon;
            const active = prefs[item.key];
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={active}
                onClick={() => handleToggle(item.key, item.label)}
                className={`flex justify-between items-center px-2.5 py-2 border rounded-lg w-full text-left transition-colors cursor-pointer ${
                  active
                    ? "bg-primary-light border-primary-border"
                    : "bg-bg-surface hover:bg-bg-subtle border-border"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`flex justify-center items-center rounded-full size-6 text-text-inverse ${item.badgeClass}`}
                  >
                    <Icon className="size-3.5" />
                  </span>
                  <span className="font-medium text-text-primary text-xs">
                    {item.label}
                  </span>
                </span>
                <span
                  className={`px-2 py-0.5 rounded font-medium text-[11px] ${
                    active
                      ? "bg-primary text-text-inverse"
                      : "bg-bg-subtle text-text-muted"
                  }`}
                >
                  {active ? t("a11y.on") : t("a11y.off")}
                </span>
              </button>
            );
          })}
        </div>

        <span role="status" aria-live="polite" className="sr-only">
          {announcement}
        </span>
      </PopoverContent>
    </Popover>
  );
};
