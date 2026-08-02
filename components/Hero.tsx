"use client";

import React from "react";
import Link from "next/link";
import spotlightsData from "@/data/spotlights.json";
import { usePageShell } from "./PageShell";
import LocalImage from "./LocalImage";

const makerOfTheMonth = spotlightsData.find(
  (spotlight) => spotlight.tag.toLowerCase() === "maker of the month"
);

const POLAROIDS = [
  ...(makerOfTheMonth
    ? [{
        position: "card-1" as const,
        label: makerOfTheMonth.tag,
        by: makerOfTheMonth.name,
        src: makerOfTheMonth.image,
        gradient: makerOfTheMonth.gradient ?? makerOfTheMonth.bg,
        emoji: makerOfTheMonth.emoji,
      }]
    : []),
  {
    position: "card-2" as const,
    label: "Campus Chapter",
    by: "SNGCE Kadayiruppu",
    src: "/images/hero/campus.jpg",
    gradient: "linear-gradient(135deg, #C6FF00, #2E4B00)",
    emoji: "🏫",
    rounded: true as const,
  },
];

export default function Hero() {
  const { openNav } = usePageShell();

  return (
    <section className="hero">
      <button
        type="button"
        className="index-pill"
        onClick={openNav}
        aria-label="Open Navigation"
      >
        <span>INDEX ☰</span>
      </button>

      <div className="h-sub">
        THE SPACE BETWEEN <i className="serif-italic" style={{ textTransform: "lowercase", fontSize: "1.15em", color: "var(--pink-vivid)" }}>&amp; beyond</i>
      </div>

      <h1 className="pixel-headline">
        DREAM<span className="amp">&amp;</span>
        <br />
        REALITY
      </h1>

      <p className="desc">
        TinkerHub SNGCE is a vibrant student maker community at SNG College of Engineering — empowering students with hands-on skills, study jams, open source culture, and peer-to-peer learning.
      </p>

      <div className="hero-actions" style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", margin: "24px 0 20px" }}>
        <Link className="btn btn--solid btn--lg" href="/study-jam">Study Jams ⚡</Link>
        <Link className="btn btn--outline btn--lg" href="/events">Explore Events ↗</Link>
        <Link className="btn btn--outline btn--lg" href="/resources">Resource Hub 📚</Link>
        <Link className="btn btn--outline btn--lg" style={{ borderColor: "#25D366", color: "#1a8c4e" }} href="/whatsapp">Join WhatsApp 💬</Link>
      </div>

      <p className="fine">
        SNGCE Chapter • Affiliated with TinkerHub Foundation Kerala (Reg No KKD/CA/478/2016)
      </p>

      {POLAROIDS.map((p) => (
        <div key={p.position} className={`decor ${p.position}`}>
          <div className="card">
            <div className="pin"></div>
            <div className="sunburst"></div>
            <LocalImage
              src={p.src}
              alt={p.label}
              gradient={p.gradient}
              emoji={p.emoji}
              shape={p.rounded ? "rounded" : "square"}
              className="photo-circle"
              style={p.rounded ? { borderRadius: "6px" } : undefined}
            />
            <div className="cap">
              {p.label}
            </div>
            <div className="by">{p.by}</div>
          </div>
        </div>
      ))}

      <div className="dot pink" style={{ top: "10px", left: "44%" }}></div>
      <div className="dot lav" style={{ bottom: "40px", right: "38%" }}></div>
    </section>
  );
}
