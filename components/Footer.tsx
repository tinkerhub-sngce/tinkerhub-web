"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", fontSize: "0.9rem" }}>
        <Link href="/" style={{ color: "#fff", textDecoration: "underline" }}>Home</Link>
        <Link href="/study-jam" style={{ color: "#fff", textDecoration: "underline" }}>Study Jams</Link>
        <Link href="/events" style={{ color: "#fff", textDecoration: "underline" }}>Events</Link>
        <Link href="/spotlight" style={{ color: "#fff", textDecoration: "underline" }}>Spotlight</Link>
        <Link href="/success-stories" style={{ color: "#fff", textDecoration: "underline" }}>Success Stories</Link>
        <Link href="/campus" style={{ color: "#fff", textDecoration: "underline" }}>Campus Hub</Link>
        <Link href="/resources" style={{ color: "#fff", textDecoration: "underline" }}>Resource Hub</Link>
        <Link href="/whatsapp" style={{ color: "#fff", textDecoration: "underline" }}>WhatsApp</Link>
        <Link href="/discord" style={{ color: "#fff", textDecoration: "underline" }}>Discord</Link>
      </div>
      <div>
        crafted @ <span>tinkerhub sngce</span> • inspired by tinkerhub.org &amp; hoomans co. • <a href="mailto:tinkerhub.in.sngce@gmail.com" style={{ color: "#fff", textDecoration: "underline" }}>tinkerhub.in.sngce@gmail.com</a>
      </div>
    </footer>
  );
}
