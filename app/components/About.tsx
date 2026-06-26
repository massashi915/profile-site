"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--brand-l)",
        padding: "88px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="sec-eyebrow">About</div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: 見出し */}
          <div>
            <h2
              style={{
                fontFamily: "var(--jp)",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                letterSpacing: "-.025em",
                color: "var(--ink)",
                lineHeight: 1.4,
                marginBottom: "1.5rem",
              }}
            >
              現場経験と対話から生まれた、
              <br />
              実務に効くテクノロジー支援。
            </h2>

            <div
              style={{
                width: 40,
                height: 2,
                background: "linear-gradient(90deg, var(--brand), var(--teal))",
                borderRadius: 999,
                marginBottom: "2rem",
              }}
            />

            <div
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--brand-l)",
                borderRadius: 14,
                padding: "24px",
                boxShadow: "var(--shadow)",
              }}
            >
              <dl className="space-y-4">
                {[
                  { label: "対応領域", value: "LINE Bot / 業務自動化 / AI活用ツール / SaaS開発" },
                  { label: "主な支援先", value: "中小企業・個人事業主・スタートアップ" },
                  { label: "SNS運用", value: "Instagram「埼玉コレクト」18,000フォロワー（チーム運用中）" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: ".56rem",
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "var(--subtle)",
                        minWidth: 96,
                        marginBottom: 4,
                        paddingTop: 2,
                      }}
                    >
                      {item.label}
                    </dt>
                    <dd style={{ fontSize: ".88rem", color: "var(--ink-s)", lineHeight: 1.7 }}>
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: 本文 */}
          <div style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.85 }} className="space-y-6">
            <p>
              飲食業をはじめ、さまざまな現場で事業に携わってきました。
              その経験の中で300人以上の経営者の方々と共に事業を組み立て、
              対話を重ねてきたことが、今の仕事の土台になっています。
            </p>
            <p>
              コロナを機にDXの世界へ転身。以来、中小企業・個人事業主・スタートアップの方々を中心に、
              LINE Bot・業務自動化システム・AI活用ツールの設計・開発・導入支援を行っています。
            </p>
            <p>
              技術の提案の前に「どこがボトルネックになっているか」を一緒に見つけることを
              大切にしています。
              AIが得意なこと・人間にしかできないことを明確に切り分けてご提案できること、
              それが私の持ち味です。
            </p>

            <div
              style={{
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--brand-l)",
              }}
            >
              <a
                href="https://www.instagram.com/saitama_collect_m/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: ".82rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @saitama_collect_m（埼玉コレクト）
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
