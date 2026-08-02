"use client";

import React, { useState } from "react";
import eventsData from "@/data/events.json";
import previousEventsData from "@/data/previous_events.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FilterType = "all" | "current" | "upcoming" | "previous";

export default function EventsSection() {
  const [filter, setFilter] = useState<FilterType>("all");
  const sectionRef = useScrollReveal<HTMLElement>();

  const currentEvents = eventsData.filter(
    (e) => e.status.toLowerCase() === "current" || e.status.toLowerCase() === "active"
  );
  const upcomingEvents = eventsData.filter(
    (e) => e.status.toLowerCase() === "upcoming"
  );
  const activeEventsCount = eventsData.length;

  const filterButtons: { key: FilterType; label: string; count: number; activeBg: string; activeColor: string }[] = [
    { key: "all", label: "ALL", count: activeEventsCount, activeBg: "var(--ink)", activeColor: "#fff" },
    { key: "current", label: "🔴 CURRENT", count: currentEvents.length, activeBg: "var(--pink)", activeColor: "var(--ink)" },
    { key: "upcoming", label: "📅 UPCOMING", count: upcomingEvents.length, activeBg: "var(--lime)", activeColor: "var(--ink)" },
    { key: "previous", label: "🕒 PREVIOUS", count: previousEventsData.length, activeBg: "var(--lavender)", activeColor: "var(--ink)" },
  ];

  const completedEventsByYear = previousEventsData.reduce<
    Record<string, Array<(typeof previousEventsData)[number]>>
  >((groups, event) => {
    const year = String(event.year);
    (groups[year] ??= []).push(event);
    return groups;
  }, {});

  const renderActiveEvents = (eventsList: typeof eventsData) => (
    <div className="events-grid" style={{ marginTop: "28px" }}>
      {eventsList.map((ev) => {
        const status = ev.status.toLowerCase();
        const isCurrent = status === "current" || status === "active";
        return (
          <div
            className="event-card reveal-scale visible"
            key={ev.id}
            style={{
              border: "2.5px solid var(--ink)",
              background: isCurrent ? "#FFFDF4" : "#FFFFFF",
              boxShadow: "6px 6px 0 var(--ink)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div className="spot-pin" style={{ top: "-8px", right: "20px", left: "auto" }}></div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div className="event-date-badge" style={{ margin: 0 }}>{ev.date}</div>
                <span
                  className={isCurrent ? "badge-pulse" : undefined}
                  style={{
                    fontFamily: "var(--font-special)",
                    fontSize: "0.72rem",
                    fontWeight: "bold",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    border: "1.5px solid var(--ink)",
                    background: isCurrent ? "var(--pink)" : "var(--lime)",
                    color: "var(--ink)"
                  }}
                >
                  {ev.statusBadge}
                </span>
              </div>

              <h3>{ev.title}</h3>
              <p style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.85rem", margin: "6px 0 8px" }}>
                📍 {ev.location}
              </p>
              <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: "1.5" }}>{ev.desc}</p>
            </div>

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1.5px dashed #ddd" }}>
              <span style={{ fontFamily: "var(--font-special)", fontSize: "0.78rem", fontWeight: "bold", color: "var(--ink)" }}>
                🏷️ {ev.category}
              </span>
              <a
                className="event-btn"
                href={ev.registrationUrl}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                Register ↗
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderPastEvents = () => (
    <div style={{ marginTop: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <span style={{
          fontFamily: "var(--font-special)",
          fontSize: "0.82rem",
          background: "var(--lavender)",
          padding: "6px 14px",
          border: "2px solid var(--ink)",
          borderRadius: "4px",
          fontWeight: "bold",
          boxShadow: "3px 3px 0 var(--ink)"
        }}>
          📚 Chapter Event History — {previousEventsData.length} Completed Events
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
                  style={{ background: "#F7F7F7", border: "2px solid var(--ink)", opacity: 0.95 }}
                >
                  <div className="spot-pin" style={{ top: "-8px", right: "20px", left: "auto", background: "linear-gradient(135deg, #ccc, #888)" }}></div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <div className="event-date-badge" style={{ margin: 0, background: "var(--lavender)" }}>{ev.date}</div>
                      <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", fontWeight: "bold", padding: "3px 8px", borderRadius: "4px", border: "1px solid var(--ink)", background: "#e0e0e0", color: "var(--ink)" }}>
                        ✅ COMPLETED
                      </span>
                    </div>

                    <h3 style={{ color: "#222" }}>{ev.title}</h3>
                    <p style={{ fontWeight: 600, color: "var(--gray)", fontSize: "0.82rem", margin: "4px 0 6px" }}>
                      📍 {ev.location}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "var(--gray)", lineHeight: "1.45" }}>{ev.desc}</p>
                  </div>

                  <div style={{ marginTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px", borderTop: "1.5px dashed #ccc" }}>
                    <span style={{ fontFamily: "var(--font-special)", fontSize: "0.75rem", color: "var(--ink)", fontWeight: "bold" }}>{ev.category}</span>
                    {ev.highlight ? (
                      <span style={{ fontFamily: "var(--font-special)", fontSize: "0.72rem", background: "var(--lime)", padding: "3px 8px", border: "1.5px solid var(--ink)", borderRadius: "4px", fontWeight: "bold" }}>
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
  );

  return (
    <section className="ref reveal" id="events" ref={sectionRef}>
      <div className="eyebrow">03 — What&apos;s Next &amp; Current</div>

      <div className="events-section__heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginTop: "6px" }}>
        <h2 className="ref-title" style={{ marginTop: 0 }}>Campus Activities &amp; Events</h2>

        {/* TAB FILTER CONTROLS */}
        <div className="event-filter-tabs" style={{ display: "inline-flex", gap: "8px", background: "#f4f4f4", padding: "6px", borderRadius: "999px", border: "2px solid var(--ink)", flexWrap: "wrap" }}>
          {filterButtons.map(({ key, label, count, activeBg, activeColor }) => {
            const isSelected = filter === key;
            return (
              <button
                key={key}
                type="button"
                className="event-filter-tab"
                onClick={() => setFilter(key)}
                aria-pressed={isSelected}
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.03em",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  border: isSelected ? "2px solid var(--ink)" : "2px solid transparent",
                  cursor: "pointer",
                  background: isSelected ? activeBg : "transparent",
                  color: isSelected ? activeColor : "var(--ink)",
                  boxShadow: isSelected ? "3px 3px 0 var(--ink)" : "none",
                  transform: isSelected ? "translate(-1px, -1px)" : "none",
                  transition: "all 0.15s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  userSelect: "none",
                }}
              >
                <span style={{ pointerEvents: "none" }}>{label}</span>
                <span
                  style={{
                    pointerEvents: "none",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: "999px",
                    background: isSelected ? (key === "all" ? "var(--lime)" : "var(--ink)") : "#ddd",
                    color: isSelected ? (key === "all" ? "var(--ink)" : "#fff") : "var(--ink)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER CONTENT */}
      {filter === "all" && (
        renderActiveEvents(eventsData)
      )}

      {filter === "upcoming" && (
        upcomingEvents.length > 0 ? (
          renderActiveEvents(upcomingEvents)
        ) : (
          <div style={{ marginTop: "28px", padding: "32px", border: "2.5px dashed var(--ink)", borderRadius: "6px", textAlign: "center", background: "#fff" }}>
            <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.4rem" }}>No Upcoming Events Announced Yet</h3>
            <p style={{ color: "var(--gray)", marginTop: "6px", fontSize: "0.9rem" }}>Check back soon or explore our past events history!</p>
            <button
              type="button"
              onClick={() => setFilter("previous")}
              className="btn btn--outline btn--sm"
              style={{ marginTop: "16px" }}
            >
              View {previousEventsData.length} Past Events ↗
            </button>
          </div>
        )
      )}

      {filter === "current" && (
        currentEvents.length > 0 ? (
          renderActiveEvents(currentEvents)
        ) : (
          <div style={{ marginTop: "28px", padding: "36px 24px", border: "2.5px solid var(--ink)", borderRadius: "6px", textAlign: "center", background: "#FFFDF4", boxShadow: "6px 6px 0 var(--pink)" }}>
            <div style={{ fontSize: "2.2rem", marginBottom: "8px" }}>⚡</div>
            <h3 style={{ fontFamily: "var(--font-anton)", fontSize: "1.5rem" }}>No Live Event In Session Right Now</h3>
            <p style={{ color: "var(--gray)", marginTop: "6px", fontSize: "0.92rem", maxWidth: "520px", margin: "8px auto 0" }}>
              Our next study jam is scheduled! Explore upcoming events or browse our chapter&apos;s past {previousEventsData.length} events.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={() => setFilter("upcoming")}
                className="btn btn--solid btn--sm"
              >
                📅 View Upcoming Event ({upcomingEvents.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("previous")}
                className="btn btn--outline btn--sm"
              >
                🕒 View Event History ({previousEventsData.length})
              </button>
            </div>
          </div>
        )
      )}

      {filter === "previous" && renderPastEvents()}
    </section>
  );
}
