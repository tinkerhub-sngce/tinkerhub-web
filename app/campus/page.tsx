"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import BackHomeLink from "@/components/BackHomeLink";
import LocalImage from "@/components/LocalImage";
import campusHubData from "@/data/campus_hub.json";
import previousCoreTeamData from "@/data/previousCoreTeam.json";

type TeamMember =
  | (typeof campusHubData.categories)[number]["members"][number]
  | (typeof previousCoreTeamData.members)[number];

function MemberCard({ member, idx }: { member: TeamMember; idx: number }) {
  return (
    <div
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
          <a href={member.github} target="_blank" rel="noreferrer" className="team-social-link">
            GitHub ↗
          </a>
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="team-social-link">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function CampusTeamSection() {
  const { categories } = campusHubData;

  return (
    <div style={{ padding: "0 6vw" }}>
      {categories.map((cat) => (
        <div key={cat.id} style={{ marginBottom: "60px" }}>
          {/* Category header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              paddingTop: "48px",
              borderTop: "2px solid var(--ink)",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-special)",
                fontSize: "0.78rem",
                fontWeight: "bold",
                background: cat.color,
                padding: "4px 12px",
                border: "1.5px solid var(--ink)",
                borderRadius: "4px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {cat.eyebrow}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "0.01em",
              }}
            >
              {cat.label}
            </h2>
            <span
              style={{
                fontFamily: "var(--font-special)",
                fontSize: "0.75rem",
                color: "var(--gray)",
                marginLeft: "auto",
                whiteSpace: "nowrap",
              }}
            >
              {cat.members.length} member{cat.members.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Members grid */}
          <div className="core-team-grid">
            {cat.members.map((member, idx) => (
              <MemberCard key={member.id} member={member} idx={idx} />
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginBottom: "60px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            paddingTop: "48px",
            borderTop: "2px solid var(--ink)",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-special)",
              fontSize: "0.78rem",
              fontWeight: "bold",
              background: previousCoreTeamData.color,
              padding: "4px 12px",
              border: "1.5px solid var(--ink)",
              borderRadius: "4px",
              whiteSpace: "nowrap",
            }}
          >
            {previousCoreTeamData.year} ARCHIVE
          </span>
          <h2
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
            }}
          >
            {previousCoreTeamData.label}
          </h2>
          <span
            style={{
              fontFamily: "var(--font-special)",
              fontSize: "0.75rem",
              color: "var(--gray)",
              marginLeft: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {previousCoreTeamData.members.length} members
          </span>
        </div>

        <div className="core-team-grid">
          {previousCoreTeamData.members.map((member, idx) => (
            <MemberCard key={member.id} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CampusActions() {
  return (
    <div className="page-actions" style={{ paddingBottom: "60px" }}>
      <a
        href="mailto:tinkerhub.in.sngce@gmail.com"
        className="btn btn--solid btn--lg"
      >
        Connect to the team ✉️
      </a>
      <BackHomeLink />
    </div>
  );
}

export default function CampusPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SNGCE Chapter"
        title="CAMPUS HUB"
        description="SNG College of Engineering (SNGCE) Kadayiruppu campus chapter is run by passionate student makers, mentors, and innovators across engineering streams."
      />
      <CampusTeamSection />
      <CampusActions />
    </PageShell>
  );
}
