"use client";

import React from "react";
import successStories from "@/data/successStories.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** A data-driven collection of the small moments that create maker momentum. */
export default function SuccessStories() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="success-stories ref reveal" id="stories" ref={sectionRef}>
      <div className="success-stories__intro">
        <div className="eyebrow">Made at SNGCE</div>
        <h2 className="ref-title">Every start counts.</h2>
        <p>
          These are the moments that matter: a first commit, a brave question,
          a workshop that becomes a habit, and people who keep showing up for one another.
        </p>
      </div>

      <div className="success-stories__grid">
        {successStories.map((story) => (
          <article
            className="success-story-card"
            key={story.id}
            style={{ "--story-accent": story.accent } as React.CSSProperties}
          >
            <div className="success-story-card__topline">
              <span className="success-story-card__number">[{story.number}]</span>
              <span aria-hidden="true" className="success-story-card__emoji">{story.emoji}</span>
            </div>
            <p className="success-story-card__category">{story.category}</p>
            <h3>{story.title}</h3>
            <p className="success-story-card__story">{story.story}</p>
            <p className="success-story-card__highlight">“{story.highlight}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}
