import { useState } from "react";
import { Check, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StepKey = "received" | "reviewing" | "scheduled" | "completed";
type StepState = "done" | "current" | "upcoming";

interface TimelineStep {
  key: StepKey;
  number: number;
  state: StepState;
}

const TIMELINE_STEPS: TimelineStep[] = [
  { key: "received", number: 1, state: "done" },
  { key: "reviewing", number: 2, state: "current" },
  { key: "scheduled", number: 3, state: "upcoming" },
  { key: "completed", number: 4, state: "upcoming" },
];

export const RequestTimeline = () => {
  const { t } = useTranslation();
  const [selectedStep, setSelectedStep] = useState<StepKey>("reviewing");

  const currentStepNumber =
    TIMELINE_STEPS.find((step) => step.state === "current")?.number ?? 1;

  return (
    <Card className="bg-bg-surface shadow-card border border-border">
      <CardHeader className="space-y-3">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <CardTitle className="font-semibold text-text-primary text-base">
            {t("dashboard.user.tracking.timeline.title")}
          </CardTitle>
          <span className="bg-primary-light px-2.5 py-0.5 border border-primary-border rounded-full font-medium text-primary text-xs">
            {t("dashboard.user.tracking.timeline.stepProgress", {
              current: currentStepNumber,
              total: TIMELINE_STEPS.length,
            })}
          </span>
        </div>
        <div className="bg-bg-subtle rounded-full w-full h-1.5 overflow-hidden">
          <div
            className="bg-primary rounded-full h-full transition-all"
            style={{
              width: `${(currentStepNumber / TIMELINE_STEPS.length) * 100}%`,
            }}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Desktop horizontal stepper */}
        <ol className="hidden sm:grid sm:grid-cols-4 gap-2">
          {TIMELINE_STEPS.map((step, index) => {
            const isSelected = selectedStep === step.key;
            const isLeftFilled = index > 0 && step.state !== "upcoming";
            const isRightFilled =
              index < TIMELINE_STEPS.length - 1 && step.state === "done";

            return (
              <li key={step.key} className="flex flex-col items-center">
                <div className="relative flex justify-center items-center w-full">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className={`top-1/2 right-1/2 left-0 absolute h-0.5 -translate-y-1/2 ${
                        isLeftFilled ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                  {index < TIMELINE_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`top-1/2 right-0 left-1/2 absolute h-0.5 -translate-y-1/2 ${
                        isRightFilled ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedStep(step.key)}
                    aria-current={step.state === "current" ? "step" : undefined}
                    aria-pressed={isSelected}
                    className={`relative z-10 flex justify-center items-center rounded-full size-9 font-semibold text-xs transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      step.state === "done"
                        ? "bg-primary text-text-inverse hover:bg-primary-hover"
                        : step.state === "current"
                          ? "bg-primary text-text-inverse ring-4 ring-primary-light hover:bg-primary-hover"
                          : "bg-bg-subtle border border-border text-text-muted hover:border-primary-border hover:text-text-primary"
                    } ${isSelected ? "outline-2 outline-offset-2 outline-primary/40" : ""}`}
                  >
                    {step.state === "done" ? (
                      <Check className="size-4" />
                    ) : step.state === "current" ? (
                      <Clock className="size-4" />
                    ) : (
                      <span>{step.number}</span>
                    )}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedStep(step.key)}
                  className="mt-3 px-1 text-center cursor-pointer"
                >
                  <p
                    className={`text-xs leading-snug ${
                      step.state === "upcoming"
                        ? "font-medium text-text-muted"
                        : "font-semibold text-text-primary"
                    }`}
                  >
                    {t(`dashboard.user.tracking.timeline.steps.${step.key}.title`)}
                  </p>
                  <p className="mt-0.5 text-[11px] text-text-muted">
                    {t(`dashboard.user.tracking.timeline.steps.${step.key}.time`)}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>

        {/* Mobile vertical stepper */}
        <ol className="flex flex-col sm:hidden">
          {TIMELINE_STEPS.map((step, index) => {
            const isSelected = selectedStep === step.key;
            const isLast = index === TIMELINE_STEPS.length - 1;

            return (
              <li key={step.key} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setSelectedStep(step.key)}
                    aria-current={step.state === "current" ? "step" : undefined}
                    aria-pressed={isSelected}
                    className={`flex justify-center items-center rounded-full size-8 font-semibold text-xs shrink-0 cursor-pointer ${
                      step.state === "done"
                        ? "bg-primary text-text-inverse"
                        : step.state === "current"
                          ? "bg-primary text-text-inverse ring-4 ring-primary-light"
                          : "bg-bg-subtle border border-border text-text-muted"
                    }`}
                  >
                    {step.state === "done" ? (
                      <Check className="size-3.5" />
                    ) : step.state === "current" ? (
                      <Clock className="size-3.5" />
                    ) : (
                      <span>{step.number}</span>
                    )}
                  </button>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={`my-1 w-0.5 flex-1 min-h-5 ${
                        step.state === "done" ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedStep(step.key)}
                  className="pb-4 text-left cursor-pointer"
                >
                  <p
                    className={`text-sm leading-snug ${
                      step.state === "upcoming"
                        ? "font-medium text-text-muted"
                        : "font-semibold text-text-primary"
                    }`}
                  >
                    {t(`dashboard.user.tracking.timeline.steps.${step.key}.title`)}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t(`dashboard.user.tracking.timeline.steps.${step.key}.time`)}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="bg-primary-light/60 px-4 py-3 border border-primary-border/60 rounded-xl">
          <p className="font-semibold text-primary text-xs">
            {t(`dashboard.user.tracking.timeline.steps.${selectedStep}.title`)}
          </p>
          <p className="mt-0.5 text-text-body text-xs leading-relaxed">
            {t(`dashboard.user.tracking.timeline.steps.${selectedStep}.detail`)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
