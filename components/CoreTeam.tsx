"use client";

import React from "react";
import coreTeamData from "@/data/coreTeam.json";
import LocalImage from "./LocalImage";

interface CoreTeamProps {
  /** Override the small label above the title. Defaults to the home-page label. */
  eyebrow?: string;
  /** Override the section title. Defaults to the home-page title. */
  title?: string;
  /** Override the section id (for in-page anchors). */
  id?: string;
}

export default function CoreTeam({
  eyebrow = "04 — Leadership",
  title = "SNGCE Core Chapter Team",
  id = "team",
}: CoreTeamProps) {
  return (
    <section className="ref" id={id}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="ref-title">{title}</h2>

      <div className="core-team-grid">
        {coreTeamData.map((member, idx) => (
          <div
            key={member.id}
            className="spot-card"
            style={{
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transform: idx % 2 === 0 ? "rotate(-1deg)" : "rotate(1.2deg)",
              padding: "24px 20px",
            }}
          >
            <div className="spot-pin"></div>

            <LocalImage
              src={member.image}
              alt={member.name}
              gradient={member.gradient}
              className="team-avatar"
            />

            <div className="spot-body" style={{ textAlign: "center" }}>
              <div className="tag">{member.tag}</div>
              <h4 style={{ fontSize: "1.7rem", margin: "4px 0" }}>{member.name}</h4>
              <p
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                  marginBottom: "4px",
                }}
              >
                {member.role}
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--gray)", marginBottom: "8px" }}>
                📍 {member.dept}
              </p>
              <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: "1.4" }}>
                {member.bio}
              </p>

              <div className="team-socials">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="team-social-link"
                >
                  GitHub ↗
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="team-social-link"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
