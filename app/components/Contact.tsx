"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Formspree エンドポイント（後でIDを差し替える）
    const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
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
    <section id="contact" className="bg-slate-900 py-28 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-400 uppercase">Contact</span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              まずは、お気軽に<br />ご相談ください。
            </h2>
            <p className="text-slate-400 text-sm leading-8 mb-8">
              「こんなことできる？」という段階でのご連絡も歓迎しています。
              現状の課題をヒアリングした上で、最適な方法をご提案します。
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                "業務の自動化・効率化を検討している",
                "LINE Botの導入を考えている",
                "AIをどう使えばいいか整理したい",
                "SaaS・管理システムの開発を依頼したい",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: フォーム */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">送信が完了しました</p>
                <p className="text-slate-400 text-sm">2〜3営業日以内にご返信いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "お名前", type: "text", placeholder: "山田 太郎", required: true },
                  { id: "company", label: "会社名・屋号", type: "text", placeholder: "株式会社○○", required: false },
                  { id: "email", label: "メールアドレス", type: "email", placeholder: "example@email.com", required: true },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs text-slate-400 mb-2 tracking-wide">
                      {field.label}{field.required && <span className="text-blue-400 ml-1">*</span>}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-400 mb-2 tracking-wide">
                    ご相談内容 <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="現在の課題やご要望をご記入ください。"
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-4 rounded transition-colors"
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
