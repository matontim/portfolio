import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <main className="main">
      <section className="panel" style={{ width: "100%" }}>
        <div className="panel-header">
          <h2>404 — ARTICLE NOT FOUND</h2>
        </div>
        <div style={{ padding: "40px 24px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "4rem",
              fontWeight: 700,
              color: "var(--color-ink)",
              margin: "0 0 8px",
              letterSpacing: "0.05em",
              opacity: 0.15,
            }}
          >
            ∇
          </p>
          <h3
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "var(--color-ink)",
              margin: "0 0 12px",
            }}
          >
            This page could not be found.
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--teal)",
              maxWidth: "420px",
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            The article you're looking for may have been moved, renamed, or
            never existed in this edition of the encyclopedia.
          </p>
          <hr className="panel-divider" style={{ marginBottom: "24px" }} />
          <Link href="/" className="nav-button">
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}