"use client";

import { useState } from "react";

export default function RefreshEventsButton() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [message, setMessage] = useState("");

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setMessage("");

    try {
      const response = await fetch("/api/events/clear-cache");
      const data = await response.json();

      if (data.success) {
        setMessage("✅ Cache cleared! Refreshing page...");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setMessage("❌ Failed to clear cache");
        setIsRefreshing(false);
      }
    } catch (error) {
      setMessage("❌ Error clearing cache");
      setIsRefreshing(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      <button
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isRefreshing ? "Refreshing..." : "🔄 Refresh Events"}
      </button>
      {message && <span className="text-sm text-slate-600">{message}</span>}
    </div>
  );
}
