"use client";

import React from "react";
import actionPlanData from "@/data/actionPlan.json";
import linksData from "@/data/links.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ActionPlan() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="ref reveal" id="action-plan" ref={sectionRef}>
      <div className="eyebrow">02 — Roadmap</div>
      <h2 className="ref-title">SNGCE Campus Action Plan</h2>

      <div className="action-list">
        {actionPlanData.map((s) => (
          <div className="action-row" key={s.num}>
            <div className="action-num">{s.num}</div>
            <div className="action-content">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="action-links">
                {s.links.map((link, idx) => {
                  const href = "form" in link
                    ? linksData.forms[link.form as keyof typeof linksData.forms]
                    : link.href;

                  return (
                    <a key={idx} href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
