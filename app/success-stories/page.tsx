"use client";

import React from "react";
import BackHomeLink from "@/components/BackHomeLink";
import PageHeader from "@/components/PageHeader";
import PageShell from "@/components/PageShell";
import SuccessStories from "@/components/SuccessStories";
import linksData from "@/data/links.json";

function SuccessStoriesBody() {
  return (
    <>
      <SuccessStories />
      <div className="page-actions" style={{ marginBottom: "60px" }}>
        <a
          href={linksData.forms.successStory}
          className="btn btn--solid btn--lg"
        >
          Share your story ✦
        </a>
        <BackHomeLink />
      </div>
    </>
  );
}

export default function SuccessStoriesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Stories"
        title="SUCCESS STORIES"
        description="The makers, moments, and tiny breakthroughs that grow into a stronger TinkerHub SNGCE community."
      />
      <SuccessStoriesBody />
    </PageShell>
  );
}
