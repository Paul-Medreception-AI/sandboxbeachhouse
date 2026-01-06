"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: any[]) => void;
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string;
  eventCategory?: string;
  eventLabel?: string;
};

export default function TrackedLink({
  eventName = "vrbo_click",
  eventCategory = "booking",
  eventLabel,
  onClick,
  target,
  rel,
  ...props
}: TrackedLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    try {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({
        event: eventName,
        event_category: eventCategory,
        event_label: eventLabel,
        link_url: props.href,
      });

      window.gtag?.("event", eventName, {
        event_category: eventCategory,
        event_label: eventLabel,
      });
    } catch {
      // ignore
    }

    onClick?.(e);
  }

  return (
    <a
      {...props}
      target={target ?? "_blank"}
      rel={rel ?? "noopener noreferrer"}
      onClick={handleClick}
    />
  );
}
