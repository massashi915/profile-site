"use client";
import ImageSlider from "./ImageSlider";

/* ─── DX Featured 2件 ─────────────────────────────── */
const dxFeatured = [
  {
    id: "slack-approval",
    eyebrow: "DX実績 #01",
    category: "Slack Bot × 勤怠承認自動化",
    title: "勤怠承認DX",
    description:
      "Slack 上のボタン操作だけで勤怠申請から承認・差戻しが完結。承認経路の自動ルーティング・エラー検知・一覧ダッシュボードまでをワンシステムで提供し、人事担当者の月次工数を大幅に削減した業務自動化DX。",
    tags: ["Slack Bot", "Node.js", "勤怠管理API", "承認フロー自動化"],
    url: "https://signal-arc-lp.vercel.app/slack-bot.html",
    urlLabel: "DX詳細ページを見る",
    accent: "var(--brand)",
    accentS: "var(--brand-s)",
    accentL: "var(--brand-l)",
  },
  {
    id: "db-otp",
    eyebrow: "DX実績 #02",
    category: "セキュリティ強化 × DB認証刷新",
    title: "DBログインワンタイムパス化DX",
    description:
      "全員で使い回す共有パスワード運用からの脱却。個人単位のワンタイムパスワード発行・失効管理・アクセスログ記録をシステム化し、セキュリティインシデントリスクを排除。コンプライアンス要件への対応を実現。",
    tags: ["OTP認証", "アクセス管理", "セキュリティDX", "ログ記録"],
    url: "https://slide-tools.vercel.app/outputs/shared-pw-to-individual-lp/",
    urlLabel: "DX詳細ページを見る",
    accent: "var(--teal)",
    accentS: "var(--teal-s)",
    accentL: "var(--teal-l)",
  },
];

/* ─── Signal Craft（自社SaaS） ───────────────────── */
const featured = {
  id: "signal-craft",
  category: "コンテンツ生成 SaaS",
  title: "Signal Craft",
  url: "https://www.signal-craft.net",
  description:
    "起業家・個人クリエイターのための、AIがあなたの声を学ぶコンテンツ生成プラットフォーム。31問のインタビューであなたの思想・言語・価値観をAIが習得し、note・X・Instagram・LinkedIn向けの本物のコンテンツを自動生成。使えば使うほど精度が上がる成長型AIシステム。",
  tags: ["Next.js", "AI", "SaaS", "マルチプラットフォーム", "自動生成"],
  pricing: [
    { plan: "Free", price: "¥0", highlight: false },
    { plan: "Pro", price: "¥4,980/月", highlight: true },
    { plan: "Business", price: "¥14,800/月", highlight: false },
  ],
};

/* ─── その他実績 ──────────────────────────────────── */
const works = [
  {
    id: "futuremind-recruit",
    category: "業務自動化システム",
    title: "採用業務自動化（FUTUREMIND）",
    description:
      "HERP・SmartHR・求人ボックス・Airwork・ジョブメドレー・Gmail・Google カレンダーをNode.js/API/スクレイピングで統合。Slack UIのボタン操作1つで採用24業務が半自動〜全自動で完結する常時稼働型システムを構築。",
    tags: ["Node.js", "Slack Bot", "HERP", "SmartHR", "API統合", "業務自動化"],
    status: "client" as const,
    demoUrl: "",
    images: [] as string[],
  },
  {
    id: "flipbook",
    category: "SaaS Platform",
    title: "Flipbook Platform",
    description:
      "紙媒体・PDFをWebで美しく配信・管理できるSaaSプラットフォーム。閲覧トラッキング・管理画面・API連携を備えたエンドツーエンドのシステム。",
    tags: ["Next.js", "Node.js", "Docker", "Cloud Run"],
    status: "live" as const,
    demoUrl: "https://flipbook-admin-y7rnmjhj3a-an.a.run.app",
    demoNote: "PW: demo2024",
    images: ["/images/works/flipbook-dashboard.png"],
  },
  {
    id: "matoi",
    category: "コンテンツ生成システム",
    title: "MATOIシステム",
    description:
      "思想・判断・現場知見をObsidianで蓄積し、AIが自動でnote記事・YouTube Shorts台本に展開する統合プラットフォーム。ワークフロー監視・AI生成・設定管理を一画面で完結。",
    tags: ["Next.js", "AI", "Dify", "n8n", "自動化"],
    status: "private" as const,
    demoUrl: "",
    images: [
      "/images/works/matoi-dashboard.png",
      "/images/works/matoi-ai.png",
      "/images/works/matoi-workflow.png",
      "/images/works/matoi-settings.png",
    ],
  },
  {
    id: "hikitsuke",
    category: "LINE Bot / 管理画面",
    title: "引き付けBot & 管理システム",
    description:
      "キャラクターを模したチャットボットがユーザーのニーズに応じてコンテンツを提供。チラシ読み込みによるSNS投稿自動生成と管理画面による一元管理を実現。公開一晩で40登録を達成。",
    tags: ["LINE Bot", "AI", "管理画面", "Cloud Run"],
    status: "client" as const,
    demoUrl: "",
    images: ["/images/works/hikitsuke-admin.png"],
  },
  {
    id: "otegime",
    category: "LINE Bot",
    title: "楽する受付ボット",
    description:
      "コンサル事業者の問い合わせ・受付業務をLINE上で完全自動化。初回ヒアリングから情報収集・案内までをボットが担い、担当者の対応コストを大幅に削減。",
    tags: ["LINE Bot", "自動化", "Cloud Run"],
    status: "live" as const,
    demoUrl: "",
    images: ["/images/works/rakumado-line-3.jpg", "/images/works/rakumado-line-1.jpg", "/images/works/rakumado-line-2.jpg"],
  },
  {
    id: "mitsumori",
    category: "業務自動化ツール",
    title: "自動見積もりツール",
    description:
      "LINE上でのヒアリングから見積もり提示までをワンストップで完結。担当者が不在でも、見込み顧客への初回見積もりをリアルタイムで提供できる仕組み。",
    tags: ["LINE Bot", "自動見積もり", "業務効率化"],
    status: "live" as const,
    demoUrl: "",
    images: [] as string[],
  },
  {
    id: "agent-kit",
    category: "OSS / AIエージェントキット",
    title: "agent-kit",
    description:
      "自社業務設計に実際に使っている19のAIエージェントをポータブルパッケージとして公開。bash install.sh 1コマンドで任意のMacに展開できる設計。テンプレート方式で絶対パス依存を排除し、チームや顧客への配布にも対応。",
    tags: ["Claude Code", "Shell Script", "AIエージェント", "OSS"],
    status: "live" as const,
    demoUrl: "https://github.com/signal-arc-coder-masashi/agent-kit",
    demoNote: "GitHub で見る",
    images: [] as string[],
  },
];

const statusLabel = {
  live:    { label: "稼働中",          bg: "var(--ok-s)",   color: "var(--ok)",   border: "var(--ok-l)" },
  client:  { label: "クライアント専用", bg: "var(--brand-s)", color: "var(--brand)", border: "var(--brand-l)" },
  private: { label: "プライベート運用", bg: "#F0EBF8",        color: "#7C3AED",      border: "#C4B5FD" },
  development: { label: "開発中",      bg: "var(--send-s)", color: "var(--send)", border: "var(--send-l)" },
};

export default function Works() {
  return (
    <section
      id="works"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--brand-l)",
        padding: "88px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="sec-eyebrow">Works</div>

        <h2
          style={{
            fontFamily: "var(--jp)",
            fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            letterSpacing: "-.025em",
            color: "var(--ink)",
            marginBottom: "1rem",
          }}
        >
          制作・開発実績
        </h2>
        <p
          style={{
            fontSize: ".88rem",
            color: "var(--muted)",
            lineHeight: 1.85,
            maxWidth: 480,
            marginBottom: "3.5rem",
          }}
        >
          現場のボトルネックを起点に設計した、実務で稼働するシステムです。
        </p>

        {/* ── DX Featured 2件 ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {dxFeatured.map((dx) => (
            <a
              key={dx.id}
              href={dx.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--surface)",
                border: "1px solid var(--brand-l)",
                borderRadius: 16,
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "var(--shadow)",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lift)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  height: 4,
                  background: `linear-gradient(90deg, ${dx.accent}, var(--teal))`,
                }}
              />

              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Eyebrow */}
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: ".54rem",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: dx.accent,
                    marginBottom: 12,
                  }}
                >
                  {dx.eyebrow}
                </div>

                <p
                  style={{
                    fontSize: ".7rem",
                    color: "var(--subtle)",
                    marginBottom: 6,
                    letterSpacing: ".04em",
                  }}
                >
                  {dx.category}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--jp)",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    color: "var(--ink)",
                    marginBottom: 14,
                    letterSpacing: "-.02em",
                  }}
                >
                  {dx.title}
                </h3>

                <p
                  style={{
                    fontSize: ".84rem",
                    color: "var(--muted)",
                    lineHeight: 1.85,
                    marginBottom: 20,
                    flex: 1,
                  }}
                >
                  {dx.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {dx.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: ".56rem",
                        letterSpacing: ".1em",
                        background: dx.accentS,
                        color: dx.accent,
                        border: `1px solid ${dx.accentL}`,
                        padding: "3px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: ".78rem",
                    fontWeight: 700,
                    color: dx.accent,
                  }}
                >
                  {dx.urlLabel}
                  <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Signal Craft（自社SaaS Featured） ── */}
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginBottom: "3rem",
            borderRadius: 18,
            overflow: "hidden",
            background: "var(--ink)",
            boxShadow: "var(--shadow-lift)",
            textDecoration: "none",
            transition: "transform .2s, box-shadow .2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 40px rgba(10,30,60,.32)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "var(--shadow-lift)";
          }}
        >
          <div className="grid md:grid-cols-5">
            {/* Left */}
            <div className="md:col-span-3" style={{ padding: "40px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: ".56rem",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "var(--brand-b)",
                  }}
                >
                  Featured Product
                </span>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: ".56rem",
                    letterSpacing: ".1em",
                    border: "1px solid var(--ok-l)",
                    color: "var(--ok)",
                    padding: "2px 10px",
                    borderRadius: 999,
                  }}
                >
                  稼働中
                </span>
              </div>

              <p style={{ fontSize: ".7rem", color: "var(--subtle)", marginBottom: 6 }}>
                {featured.category}
              </p>
              <h3
                style={{
                  fontFamily: "var(--jp)",
                  fontWeight: 900,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#fff",
                  marginBottom: 16,
                  letterSpacing: "-.02em",
                }}
              >
                {featured.title}
              </h3>

              <p style={{ fontSize: ".84rem", color: "rgba(255,255,255,.7)", lineHeight: 1.85, marginBottom: 20 }}>
                {featured.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".56rem",
                      letterSpacing: ".1em",
                      background: "rgba(255,255,255,.08)",
                      color: "rgba(255,255,255,.7)",
                      padding: "3px 10px",
                      borderRadius: 6,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 料金プラン */}
              <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                {featured.pricing.map((p) => (
                  <div
                    key={p.plan}
                    style={{
                      borderRadius: 10,
                      padding: "10px 16px",
                      textAlign: "center",
                      background: p.highlight ? "rgba(22,102,190,.3)" : "rgba(255,255,255,.05)",
                      border: p.highlight ? "1px solid var(--brand-b)" : "1px solid rgba(255,255,255,.1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: ".54rem",
                        letterSpacing: ".12em",
                        color: p.highlight ? "var(--brand-b)" : "var(--subtle)",
                        marginBottom: 4,
                      }}
                    >
                      {p.plan}
                    </p>
                    <p style={{ fontSize: ".82rem", fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
                      {p.price}
                    </p>
                  </div>
                ))}
              </div>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  color: "var(--ink)",
                  fontSize: ".82rem",
                  fontWeight: 700,
                  padding: "10px 20px",
                  borderRadius: 8,
                }}
              >
                サービスを見る
                <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>

            {/* Right: スクリーンショット */}
            <div
              className="md:col-span-2"
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "10px 16px",
                  background: "rgba(255,255,255,.04)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  flexShrink: 0,
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,100,100,.6)" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,200,0,.6)" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(0,200,100,.6)" }} />
                <span style={{ marginLeft: 12, fontSize: ".62rem", color: "var(--subtle)", fontFamily: "var(--mono)" }}>
                  signal-craft.net
                </span>
              </div>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <img
                  src="/images/works/signal-craft-top.png"
                  alt="Signal Craft スクリーンショット"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          </div>
        </a>

        {/* ── その他実績グリッド ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {works.map((work) => {
            const status = statusLabel[work.status];
            const hasImages = work.images.length > 0;

            return (
              <div
                key={work.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--brand-l)",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: "var(--shadow)",
                  display: "flex",
                  flexDirection: "column",
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
                {hasImages && <ImageSlider images={work.images} title={work.title} />}

                <div
                  style={{
                    background: "var(--surface-2)",
                    padding: "16px 20px",
                    borderBottom: "1px solid var(--brand-l)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                    <div>
                      <p style={{ fontSize: ".62rem", color: "var(--subtle)", marginBottom: 4, letterSpacing: ".04em" }}>
                        {work.category}
                      </p>
                      <h3 style={{ fontFamily: "var(--jp)", fontWeight: 900, fontSize: ".9rem", color: "var(--ink)", lineHeight: 1.4 }}>
                        {work.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "var(--mono)",
                        fontSize: ".52rem",
                        letterSpacing: ".08em",
                        background: status.bg,
                        color: status.color,
                        border: `1px solid ${status.border}`,
                        padding: "3px 10px",
                        borderRadius: 999,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {status.label}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: 16, flex: 1 }}>
                    {work.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: ".52rem",
                          letterSpacing: ".08em",
                          background: "var(--brand-s)",
                          color: "var(--brand)",
                          border: "1px solid var(--brand-l)",
                          padding: "2px 8px",
                          borderRadius: 999,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {work.demoUrl ? (
                    <a
                      href={work.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: ".72rem",
                        fontWeight: 700,
                        color: "var(--brand)",
                        border: "1px solid var(--brand-l)",
                        padding: "7px 14px",
                        borderRadius: 7,
                        textDecoration: "none",
                        alignSelf: "flex-start",
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
                      デモを見る
                      <svg style={{ width: 12, height: 12 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span style={{ fontSize: ".7rem", color: "var(--subtle)" }}>
                      {work.status === "client"  ? "※ ご依頼者様限定でログイン提供" : ""}
                      {work.status === "private" ? "※ 自社運用中" : ""}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
