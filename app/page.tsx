"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import { usePageShell } from "@/components/PageShell";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import DreamReality from "@/components/DreamReality";
import ActionPlan from "@/components/ActionPlan";
import StatsStrip from "@/components/StatsStrip";
import Spotlight from "@/components/Spotlight";
import EventsSection from "@/components/EventsSection";
import CoreTeam from "@/components/CoreTeam";
import GetInvolved from "@/components/GetInvolved";

function HomeBody() {
  const { openContact } = usePageShell();

  return (
    <>
      <Marquee linkHref="/study-jam" linkText="EXPLORE STUDY JAMS ⚡" />

      <Hero />

      <DreamReality />

      <ActionPlan />

      <StatsStrip />

      <Spotlight />

      <EventsSection />

      <CoreTeam />

      <GetInvolved onOpenContact={openContact} />
    </>
  );
}

export default function Home() {
  return (
    <PageShell>
      <HomeBody />
    </PageShell>
  );
}
