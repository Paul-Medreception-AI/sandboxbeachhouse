"use client";

import { useEffect } from "react";

export default function PerfMeasureGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("performance" in window)) return;

    const perf = window.performance;
    if (typeof perf.measure !== "function") return;

    const original = perf.measure.bind(perf) as (...args: unknown[]) => void;

    perf.measure = ((...args: unknown[]) => {
      try {
        original(...args);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : typeof err === "string"
              ? err
              : "";

        if (message.toLowerCase().includes("negative time stamp")) {
          return;
        }

        throw err;
      }
    }) as unknown as Performance["measure"];

    return () => {
      perf.measure = original as unknown as Performance["measure"];
    };
  }, []);

  return null;
}
