"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const FORMSPREE_ID = "mlgpgjoe";
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, var(--brand-d) 0%, var(--brand) 50%, var(--teal) 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-6" style={{ position: "relative" }}>
        <div
          className="sec-eyebrow"
          style={{ color: "rgba(255,255,255,.7)", marginBottom: 16 }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 2,
              background: "rgba(255,255,255,.5)",
              borderRadius: 999,
            }}
          />
          Contact
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--jp)",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-.025em",
                color: "#fff",
                lineHeight: 1.35,
                marginBottom: "1.5rem",
              }}
            >
              まずは、お気軽に<br />ご相談ください。
            </h2>
            <p
              style={{
                fontSize: ".88rem",
                color: "rgba(255,255,255,.78)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              「こんなことできる？」という段階でのご連絡も歓迎しています。
              現状の課題をヒアリングした上で、最適な方法をご提案します。
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "業務の自動化・効率化を検討している",
                "Slack Bot・LINE Botの導入を考えている",
                "AIをどう使えばいいか整理したい",
                "SaaS・管理システムの開発を依頼したい",
                "セキュリティDX・認証刷新を相談したい",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    fontSize: ".84rem",
                    color: "rgba(255,255,255,.78)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      marginTop: 6,
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.6)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: フォーム */}
          <div>
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  padding: "48px 0",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(10,155,136,.25)",
                    border: "1px solid var(--teal-l)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <svg style={{ width: 24, height: 24, color: "var(--teal-l)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p style={{ color: "#fff", fontWeight: 700, marginBottom: 8 }}>送信が完了しました</p>
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".84rem" }}>2〜3営業日以内にご返信いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { id: "name", label: "お名前", type: "text", placeholder: "山田 太郎", required: true },
                  { id: "company", label: "会社名・屋号", type: "text", placeholder: "株式会社○○", required: false },
                  { id: "email", label: "メールアドレス", type: "email", placeholder: "example@email.com", required: true },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: ".54rem",
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.6)",
                        marginBottom: 8,
                      }}
                    >
                      {field.label}
                      {field.required && <span style={{ color: "var(--brand-b)", marginLeft: 4 }}>*</span>}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,.1)",
                        border: "1px solid rgba(255,255,255,.2)",
                        borderRadius: 8,
                        padding: "12px 16px",
                        fontSize: ".88rem",
                        color: "#fff",
                        outline: "none",
                        transition: "border-color .2s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,.2)")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: ".54rem",
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.6)",
                      marginBottom: 8,
                    }}
                  >
                    ご相談内容 <span style={{ color: "var(--brand-b)" }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="現在の課題やご要望をご記入ください。"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,.1)",
                      border: "1px solid rgba(255,255,255,.2)",
                      borderRadius: 8,
                      padding: "12px 16px",
                      fontSize: ".88rem",
                      color: "#fff",
                      outline: "none",
                      resize: "none",
                      transition: "border-color .2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,.2)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "#fff",
                    color: "var(--brand-d)",
                    fontSize: ".88rem",
                    fontWeight: 700,
                    padding: "14px",
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    transition: "background .2s, transform .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--brand-s)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
