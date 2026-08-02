"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import EventsSection from "@/components/EventsSection";

function EventsBody() {
  return (
    <>
      <EventsSection />
      <div className="page-actions" style={{ marginBottom: "60px" }}>
        <BackHomeLink />
      </div>
    </>
  );
}

export default function EventsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="What's On" title="EVENTS" description="Hands-on workshops, study jams, and campus hackathons happening at TinkerHub SNGCE — past, present, and upcoming." />
      <EventsBody />
    </PageShell>
  );
}
