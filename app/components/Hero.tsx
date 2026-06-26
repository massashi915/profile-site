"use client";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(900px 500px at 80% -5%, rgba(22,102,190,.09), transparent 60%),
          radial-gradient(600px 400px at -5% 90%, rgba(10,155,136,.06), transparent 55%),
          var(--bg)
        `,
      }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(22,102,190,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(22,102,190,.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* Left: テキスト */}
        <div>
          {/* Eyebrow */}
          <div className="sec-eyebrow mb-6" style={{ marginBottom: 24 }}>
            Freelance Engineer
          </div>

          <h1
            style={{
              fontFamily: "var(--jp)",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)",
              letterSpacing: "-.02em",
              color: "var(--ink)",
              lineHeight: 1.12,
              marginBottom: "0.5rem",
            }}
          >
            KISHINO
            <br />
            <span style={{ color: "var(--brand)" }}>MASASHI</span>
          </h1>

          <p
            style={{
              fontSize: ".78rem",
              color: "var(--muted)",
              fontFamily: "var(--mono)",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
          >
            業務自動化 ・ AI活用支援
          </p>

          <div
            style={{
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, var(--brand), var(--teal))",
              borderRadius: 999,
              marginBottom: "2rem",
            }}
          />

          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--ink-s)",
              lineHeight: 1.7,
              marginBottom: "0.5rem",
            }}
          >
            事業の現場を知るエンジニアが、
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 500,
              color: "var(--ink-s)",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            業務の詰まりを仕組みで解きます。
          </p>

          <p
            style={{
              fontSize: ".88rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              maxWidth: 420,
              marginBottom: "2.5rem",
            }}
          >
            飲食業をはじめ様々な現場での事業経験と、
            300人以上の経営者との対話から生まれた
            「現場目線の業務自動化・AI活用支援」を提供しています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--brand)",
                color: "#fff",
                fontSize: ".88rem",
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: 8,
                textDecoration: "none",
                border: "2px solid var(--brand)",
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
              制作実績を見る
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--brand)",
                fontSize: ".88rem",
                fontWeight: 700,
                padding: "13px 28px",
                borderRadius: 8,
                textDecoration: "none",
                border: "2px solid var(--brand-l)",
                background: "transparent",
                transition: "border-color .2s, background .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--brand)";
                e.currentTarget.style.background = "var(--brand-s)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--brand-l)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* Right: DX 実績カード */}
        <div className="hidden md:flex flex-col gap-4">
          {[
            {
              tag: "DX実績 #01",
              label: "勤怠承認DX",
              sub: "Slack Bot × 勤怠承認自動化",
              desc: "申請〜承認〜差戻しをSlack上で完結。人事工数を大幅削減。",
              href: "https://signal-arc-lp.vercel.app/slack-bot.html",
              accent: "var(--brand)",
              accentS: "var(--brand-s)",
              accentL: "var(--brand-l)",
            },
            {
              tag: "DX実績 #02",
              label: "DBログインOTP化DX",
              sub: "セキュリティ強化 × DB認証刷新",
              desc: "共有PWから個人OTPへ。インシデントリスクを排除しコンプライアンス対応。",
              href: "https://slide-tools.vercel.app/outputs/shared-pw-to-individual-lp/",
              accent: "var(--teal)",
              accentS: "var(--teal-s)",
              accentL: "var(--teal-l)",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "var(--surface)",
                border: "1px solid var(--brand-l)",
                borderRadius: 14,
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "var(--shadow)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              {/* Top bar */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${item.accent}, var(--brand-b))` }} />
              <div style={{ padding: "18px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".52rem",
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: item.accent,
                    }}
                  >
                    {item.tag}
                  </span>
                  <svg style={{ width: 13, height: 13, color: "var(--subtle)", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p style={{ fontSize: ".7rem", color: "var(--subtle)", marginBottom: 4, letterSpacing: ".02em" }}>
                  {item.sub}
                </p>
                <p style={{ fontSize: ".95rem", fontFamily: "var(--jp)", fontWeight: 900, color: "var(--ink)", marginBottom: 8, letterSpacing: "-.01em" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: ".76rem", color: "var(--muted)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}

          {/* Signal Craft mini */}
          <a
            href="https://www.signal-craft.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "var(--ink)",
              borderRadius: 14,
              padding: "16px 20px",
              textDecoration: "none",
              transition: "transform .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-1px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                <p style={{ fontSize: ".88rem", fontWeight: 700, color: "#fff" }}>Signal Craft</p>
                <span style={{ fontFamily: "var(--mono)", fontSize: ".52rem", letterSpacing: ".1em", background: "var(--brand-s)", color: "var(--brand)", border: "1px solid var(--brand-l)", padding: "1px 7px", borderRadius: 999 }}>
                  自社SaaS
                </span>
              </div>
              <p style={{ fontSize: ".72rem", color: "var(--subtle)" }}>AIがあなたの声を学ぶコンテンツ生成</p>
            </div>
            <svg style={{ width: 14, height: 14, color: "var(--muted)", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        style={{ color: "var(--subtle)" }}
      >
        <span style={{ fontFamily: "var(--mono)", fontSize: ".5rem", letterSpacing: ".24em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, var(--brand-l), transparent)",
          }}
        />
      </div>
    </section>
  );
}
