"use client";

const strengths = [
  {
    number: "01",
    title: "現場視点のヒアリング力",
    body: "経営者・事業者として積み重ねてきた対話の経験から、「現場の言葉」で課題を掘り下げます。技術よりも先に、本当に必要なものを一緒に整理します。",
    tags: ["課題整理", "ボトルネック発見", "要件定義"],
  },
  {
    number: "02",
    title: "AI × 自動化の実装力",
    body: "LINE Bot・チャットボット・自動投稿生成・自動見積もりなど、AIを実務レベルで動かす設計・実装を行います。「動くAI活用」を提供します。",
    tags: ["LINE Bot", "AI活用", "システム開発"],
  },
  {
    number: "03",
    title: "運用まで見据えた設計",
    body: "Instagram「埼玉コレクト」（18,000フォロワー）をチームで運用してきた経験から、作って終わりではなく「続けられる仕組み」を重視した設計をします。",
    tags: ["SNS運用", "チーム運営", "継続設計"],
  },
];

export default function Strengths() {
  return (
    <section
      id="strengths"
      style={{
        background: "var(--bg-1)",
        borderTop: "1px solid var(--brand-l)",
        padding: "88px 0",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="sec-eyebrow">Strengths</div>

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
          私が提供できる、3つの強み。
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
          技術スキルだけでなく、現場経験・対話力・運用知見を組み合わせた
          トータルな支援が特長です。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((s) => (
            <div
              key={s.number}
              className="sa-card"
              style={{
                paddingTop: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top gradient bar */}
              <div
                style={{
                  height: 4,
                  background: "linear-gradient(90deg, var(--brand), var(--teal))",
                  marginLeft: -28,
                  marginRight: -28,
                  marginBottom: 28,
                  marginTop: 0,
                }}
              />

              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "2rem",
                  fontWeight: 500,
                  color: "var(--brand-l)",
                  display: "block",
                  marginBottom: "1.25rem",
                  lineHeight: 1,
                }}
              >
                {s.number}
              </span>

              <h3
                style={{
                  fontFamily: "var(--jp)",
                  fontWeight: 900,
                  fontSize: "1rem",
                  color: "var(--ink)",
                  marginBottom: "1rem",
                  lineHeight: 1.5,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: ".82rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {s.body}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: ".56rem",
                      letterSpacing: ".1em",
                      background: "var(--brand-s)",
                      color: "var(--brand)",
                      border: "1px solid var(--brand-l)",
                      padding: "3px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
