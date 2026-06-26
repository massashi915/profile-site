export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", padding: "40px 0 52px" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          style={{
            fontFamily: "var(--display)",
            fontWeight: 500,
            fontSize: "1.1rem",
            letterSpacing: ".06em",
            color: "rgba(255,255,255,.5)",
          }}
        >
          Kishino Masashi
        </p>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: ".54rem",
            letterSpacing: ".14em",
            color: "rgba(255,255,255,.3)",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Freelance Engineer / 業務自動化・AI活用支援
        </p>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: ".54rem",
            letterSpacing: ".08em",
            color: "rgba(255,255,255,.3)",
          }}
        >
          &copy; {new Date().getFullYear()} Kishino Masashi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
