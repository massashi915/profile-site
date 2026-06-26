"use client";
import { useState, useEffect } from "react";

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "勤怠承認DX", href: "https://signal-arc-lp.vercel.app/slack-bot.html", external: true },
  { label: "DBログインOTP化DX", href: "https://slide-tools.vercel.app/outputs/shared-pw-to-individual-lp/", external: true },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: 62,
        background: scrolled
          ? "rgba(242,248,254,.95)"
          : "rgba(242,248,254,.80)",
        backdropFilter: "saturate(1.6) blur(12px)",
        WebkitBackdropFilter: "saturate(1.6) blur(12px)",
        borderBottom: "1px solid var(--brand-l)",
        boxShadow: scrolled ? "0 1px 12px rgba(10,30,60,.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand logo — Cormorant */}
        <a
          href="#"
          style={{
            fontFamily: "var(--display)",
            fontWeight: 500,
            fontSize: "1.3rem",
            letterSpacing: ".06em",
            color: "var(--ink)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--brand)",
              boxShadow: "0 0 0 3px var(--brand-s)",
              animation: "pulse-dot 2.4s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          Kishino Masashi
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: ".78rem",
                color: link.external ? "var(--brand)" : "var(--muted)",
                textDecoration: "none",
                letterSpacing: ".06em",
                transition: "color .2s",
                fontWeight: link.external ? 500 : 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = link.external ? "var(--brand)" : "var(--muted)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: ".78rem",
              fontWeight: 700,
              background: "var(--brand)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 6,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(22,102,190,.28)",
              transition: "background .2s, transform .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--brand-d)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--brand)";
              e.currentTarget.style.transform = "none";
            }}
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-6 h-0.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "var(--ink)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "var(--ink)" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "var(--bg)",
            borderTop: "1px solid var(--brand-l)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: ".88rem",
                color: link.external ? "var(--brand)" : "var(--ink-s)",
                textDecoration: "none",
                fontWeight: link.external ? 500 : 400,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: ".88rem",
              fontWeight: 700,
              background: "var(--brand)",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 6,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            お問い合わせ
          </a>
        </div>
      )}

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 3px var(--brand-s); }
          50% { box-shadow: 0 0 0 5px var(--brand-l); }
        }
      `}</style>
    </header>
  );
}
