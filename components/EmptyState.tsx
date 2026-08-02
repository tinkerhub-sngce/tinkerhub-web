"use client";

import React from "react";

interface EmptyStateProps {
  title: string;
  description: string;
}

/** Shared fallback for sections whose data collections are intentionally empty. */
export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/empty-states/welcome-to-the-void.png" alt="Welcome to the void" />
      <div className="empty-state__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
