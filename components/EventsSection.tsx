"use client";

import React, { useState } from "react";
import eventsData from "@/data/events.json";
import previousEventsData from "@/data/previous_events.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface EventsSectionProps {
  onRegister: (eventName: string) => void;
}

type FilterType = "all" | "current" | "upcoming" | "previous";

export default function EventsSection({ onRegister }: EventsSectionProps) {
  const [filter, setFilter] = useState<FilterType>("all");
  const sectionRef = useScrollReveal<HTMLElement>();

  const filteredEvents =
    filter === "previous"
      ? previousEventsData
      : eventsData.filter((event) => {
          if (filter === "current") return event.status === "current";
          if (filter === "upcoming") return event.status === "upcoming";
          return true;
        });

  const completedEventsByYear = previousEventsData.reduce<
    Record<string, Array<(typeof previousEventsData)[number]>>
  >((groups, event) => {
    const year = String(event.year);
    (groups[year] ??= []).push(event);
    return groups;
  }, {});

  const filterButtons: { key: FilterType; label: string; activeColor: string }[] = [
    { key: "all", label: `ALL (${eventsData.length})`, activeColor: "var(--ink)" },
    { key: "current", label: "🔴 CURRENT", activeColor: "var(--pink)" },
    { key: "upcoming", label: "📅 UPCOMING", activeColor: "var(--lime)" },
    { key: "previous", label: "🕒 PREVIOUS", activeColor: "var(--lavender)" },
  ];

  return (
    <section className="ref reveal" id="events" ref={sectionRef}>
      <div className="eyebrow">03 — What&apos;s Next &amp; Current</div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginTop: "6px" }}>
        <h2 className="ref-title" style={{ marginTop: 0 }}>Campus Activities &amp; Events</h2>

        <div style={{ display: "inline-flex", gap: "8px", background: "#f0f0f0", padding: "4px", borderRadius: "999px", border: "1.5px solid var(--ink)", flexWrap: "wrap" }}>
          {filterButtons.map(({ key, label, activeColor }) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "0.8rem",
                padding: "6px 16px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: filter === key ? (key === "all" ? "var(--ink)" : activeColor) : "transparent",
                color: filter === key && key === "all" ? "#fff" : "var(--ink)",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {filter === "previous" ? (
        <div style={{ marginTop: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span style={{
              fontFamily: "var(--font-special)",
              fontSize: "0.8rem",
              background: "var(--lavender)",
              padding: "4px 12px",
              border: "1.5px solid var(--ink)",
              borderRadius: "4px",
              fontWeight: "bold"
            }}>
              📚 Event History — {previousEventsData.length} past events
            </span>
          </div>
          {Object.entries(completedEventsByYear)
            .sort(([firstYear], [secondYear]) => Number(secondYear) - Number(firstYear))
            .map(([year, events]) => (
              <div key={year} className="event-year-group">
                <div className="event-year-group__header">
                  <span className="event-year-group__year">{year}</span>
                  <span className="event-year-group__label">
                    {events.length} completed event{events.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="events-grid">
                  {events.map((ev) => (
                    <div
                      key={ev.id}
                      className="event-card prev-event-card"
                      style={{ background: "#F7F7F7", border: "2px solid #bbb", opacity: 0.92 }}
                    >
                      <div className="spot-pin" style={{ top: "-8px", right: "20px", left: "auto", background: "linear-gradient(135deg, #ccc, #888)" }}></div>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <div className="event-date-badge" style={{ margin: 0, background: "var(--lavender)" }}>{ev.date}</div>
                          <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", fontWeight: "bold", padding: "3px 8px", borderRadius: "4px", border: "1px solid var(--ink)", background: "#e0e0e0", color: "var(--ink)" }}>
                            ✅ COMPLETED
                          </span>
                        </div>

                        <h3 style={{ color: "#333" }}>{ev.title}</h3>
                        <p style={{ fontWeight: 600, color: "var(--gray)", fontSize: "0.82rem", marginBottom: "6px" }}>
                          📍 {ev.location}
                        </p>
                        <p>{ev.desc}</p>
                      </div>

                      <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "var(--font-special)", fontSize: "0.75rem", color: "var(--gray)" }}>{ev.category}</span>
                        {ev.highlight ? (
                          <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", background: "var(--lavender)", padding: "3px 8px", border: "1px solid var(--ink)", borderRadius: "4px", fontWeight: "bold" }}>
                            ⭐ {ev.outcome}
                          </span>
                        ) : (
                          <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", color: "var(--gray)" }}>{ev.outcome}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="events-grid" style={{ marginTop: "32px" }}>
          {filteredEvents.map((ev) => {
            const e = ev as (typeof eventsData)[number];
            return (
              <div
                className="event-card"
                key={e.id}
                style={{
                  border: e.status === "current" ? "2.5px solid var(--ink)" : "2px solid var(--ink)",
                  background: e.status === "current" ? "#FFFDF4" : "#FFFFFF"
                }}
              >
                <div className="spot-pin" style={{ top: "-8px", right: "20px", left: "auto" }}></div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div className="event-date-badge" style={{ margin: 0 }}>{e.date}</div>
                    <span
                      style={{
                        fontFamily: "var(--font-special)",
                        fontSize: "0.72rem",
                        fontWeight: "bold",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        border: "1px solid var(--ink)",
                        background: e.status === "current" ? "var(--pink)" : "var(--lime)",
                        color: "var(--ink)"
                      }}
                    >
                      {e.statusBadge}
                    </span>
                  </div>

                  <h3>{e.title}</h3>
                  <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.82rem", marginBottom: "6px" }}>
                    📍 {e.location}
                  </p>
                  <p>{e.desc}</p>
                </div>

                <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-special)", fontSize: "0.75rem", color: "var(--gray)" }}>
                    {e.category}
                  </span>
                  <button
                    type="button"
                    className="event-btn"
                    onClick={() => onRegister(e.title)}
                  >
                    Register ↗
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
