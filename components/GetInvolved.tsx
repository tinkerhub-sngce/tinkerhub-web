"use client";

import React, { useState } from "react";
import whatsappData from "@/data/whatsapp.json";
import discordData from "@/data/discord.json";

interface GetInvolvedProps {
  onOpenContact: (reason: string) => void;
}

export default function GetInvolved({ onOpenContact }: GetInvolvedProps) {
  const [discordClicked, setDiscordClicked] = useState(false);

  function handleDiscordClick() {
    if (discordData.status === "coming_soon") {
      setDiscordClicked(true);
      setTimeout(() => setDiscordClicked(false), 3500);
    }
  }

  return (
    <section className="ref" id="get-involved">
      <div className="eyebrow">05 — Get Involved</div>
      <h2 className="ref-title">Join the Movement</h2>

      <div className="get-involved-grid">
        {/* Donate & Fund */}
        <div className="gi-card">
          <div className="badge">BE KIND.</div>
          <h3>Donate &amp; Fund</h3>
          <p>Support student hardware kits, study jam snacks, and hackathon prizes for campus makers.</p>
          <a
            href="#donate"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Donate & Sponsor");
            }}
          >
            Sponsor Campus Chapter ↗
          </a>
        </div>

        {/* Volunteer & Mentor */}
        <div className="gi-card">
          <div className="badge">GIVE BACK.</div>
          <h3>Volunteer &amp; Mentor</h3>
          <p>Share your technical expertise as a study jam mentor or campus event coordinator.</p>
          <a
            href="#volunteer"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Volunteer / Mentor");
            }}
          >
            Apply as Mentor ↗
          </a>
        </div>

        {/* Start a Project */}
        <div className="gi-card">
          <div className="badge">BUILD TOGETHER.</div>
          <h3>Start a Project</h3>
          <p>Have an idea for a campus project or study track? Lead a build crew with TinkerHub support.</p>
          <a
            href="#project"
            className="gi-link"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact("Start a Campus Project");
            }}
          >
            Propose a Project ↗
          </a>
        </div>

        {/* WhatsApp Community — from whatsapp.json */}
        <div className="gi-card gi-card--whatsapp">
          <div className="badge" style={{ color: "#25D366" }}>COMMUNITY.</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.8rem" }}>💬</span>
            <h3 style={{ margin: 0 }}>WhatsApp Community</h3>
          </div>
          <p style={{ marginTop: "10px" }}>{whatsappData.description}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
            <span style={{
              fontFamily: "var(--font-special)",
              fontSize: "0.72rem",
              background: "#e8fdf0",
              border: "1px solid #25D366",
              padding: "2px 8px",
              borderRadius: "4px",
              fontWeight: "bold",
              color: "#1a8c4e"
            }}>
              {whatsappData.stats}
            </span>
          </div>
          <a
            href={whatsappData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gi-link"
            style={{ marginTop: "14px", display: "inline-flex", borderColor: "#25D366", color: "#1a8c4e" }}
          >
            {whatsappData.cta} ↗
          </a>
        </div>

        {/* Discord — from discord.json */}
        <div className="gi-card gi-card--discord">
          <div className="badge" style={{ color: "#5865F2" }}>CONNECT.</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "1.8rem" }}>🎮</span>
            <h3 style={{ margin: 0 }}>Discord Server</h3>
          </div>
          <p style={{ marginTop: "10px" }}>{discordData.description}</p>
          <div style={{ position: "relative", marginTop: "14px" }}>
            <button
              type="button"
              className="gi-link"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: discordData.status === "coming_soon" ? "var(--gray)" : "var(--ink)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: "2px solid currentColor",
              }}
              onClick={handleDiscordClick}
            >
              {discordData.cta}
              <span style={{
                fontFamily: "var(--font-special)",
                fontSize: "0.68rem",
                background: "var(--lavender)",
                padding: "1px 6px",
                borderRadius: "3px",
                border: "1px solid var(--ink)",
                fontWeight: "bold",
                color: "var(--ink)"
              }}>
                {discordData.badge}
              </span>
            </button>
            {discordClicked && (
              <div className="discord-toast">
                {discordData.comingSoonMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
