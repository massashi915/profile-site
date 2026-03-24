import Header from "../components/Header";
import Works from "../components/Works";
import Footer from "../components/Footer";

const RESUME_PDF = "https://drive.google.com/file/d/1r_qvcfqFZiPID-Kiak3AMLu4wyO_VHFM/view?usp=drivesdk";
const RIREKISHO_PDF = "https://drive.google.com/file/d/1zHkt97h-fYoIWAjEG4wL6YlhHKT3P7O6/view?usp=drivesdk";

const skills = [
  {
    category: "AI・生成AI",
    items: ["Claude (Anthropic) API", "OpenAI API", "RAG設計・構築", "LLMプロダクト開発", "Claude Code（AI-native開発）"],
  },
  {
    category: "フロントエンド / SaaS",
    items: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
  },
  {
    category: "バックエンド・自動化",
    items: ["Google Apps Script", "LINE Bot", "n8n", "Node.js", "GCP（Cloud Run / Cloud Scheduler）"],
  },
  {
    category: "インフラ・デプロイ",
    items: ["Vercel", "GCP", "AWS", "Azure", "Docker", "GitHub Actions"],
  },
  {
    category: "Web・デザイン",
    items: ["WordPress", "STUDIO", "Canva", "Illustrator", "Photoshop"],
  },
  {
    category: "SNS・コンテンツ",
    items: ["Instagram運用（1.8万フォロワー）", "TikTok", "YouTube Shorts", "LINE公式アカウント"],
  },
];

const career = [
  {
    period: "1997年〜2017年",
    role: "飲食業（有限会社きしの / 株式会社べにがま）",
    desc: "調理師・店長・新規事業立上げ。従業員12名のマネジメント、300人超の経営者との対話を通じ現場課題を構造的に把握する力を養う。",
  },
  {
    period: "2017年〜現在",
    role: "個人事業（Web制作・AI開発支援）",
    desc: "WordPress制作からスタートし、GAS・LINE Bot・RAGプロダクト開発へと専門領域を拡張。AIを使った業務自動化を中小企業・個人事業主向けに提供。",
  },
  {
    period: "2022年〜現在",
    role: "埼玉コレクトM（Instagram運用）",
    desc: "埼玉ローカルメディアをゼロから立ち上げ、現在1.8万フォロワー。外部委託者と2名体制でコンテンツ制作・チェック・投稿を運用中。",
  },
  {
    period: "2024年〜現在",
    role: "Signal Craft（自社SaaS）開発・運用",
    desc: "起業家・個人発信者向けのAIコンテンツ生成SaaS。Next.js / Supabase / Claude API / Google画像生成API / Stripe を活用。設計・開発・運用・マーケティングを一人推進（AI-native開発スタイル）。",
  },
];

export default function RecruitPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-50 opacity-40 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase mb-4 md:mb-6">
                採用担当者の方へ
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-3 leading-tight">
                KISHINO<br />MASASHI
              </h1>
              <p className="text-sm md:text-base text-slate-500 font-medium tracking-widest mb-6 md:mb-10">
                生成AI活用 ・ プロダクト開発 ・ AI導入設計
              </p>

              <div className="w-12 h-0.5 bg-blue-500 mb-6 md:mb-8" />

              <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed mb-2 md:mb-4">
                現場を知るAI-nativeエンジニアが、
              </p>
              <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed mb-6 md:mb-10">
                チームの課題を仕組みで解きます。
              </p>

              <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-md">
                飲食事業の現場経験と300人超の経営者との対話を土台に、
                生成AI・業務自動化・SaaS開発を独学で習得。
                Claude APIを中心としたAI-native開発スタイルで
                複数のプロダクトを設計・運用しています。
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={RESUME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white text-sm font-medium px-8 py-4 rounded hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  職務経歴書（PDF）
                </a>
                <a
                  href="#works"
                  className="inline-flex items-center justify-center border border-slate-300 text-slate-700 text-sm font-medium px-8 py-4 rounded hover:border-slate-500 transition-colors"
                >
                  制作実績を見る
                </a>
              </div>
            </div>

            {/* Right: 求職ステータスカード */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="bg-slate-900 rounded-lg px-6 py-5 shadow-md">
                <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase mb-3">Status</p>
                <div className="space-y-3">
                  {[
                    { label: "希望職種", value: "生成AIエンジニア / AI導入設計コンサルタント" },
                    { label: "希望勤務地", value: "埼玉・東京（リモート可）" },
                    { label: "就業形態", value: "正社員 / 業務委託" },
                    { label: "開始時期", value: "応相談" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-xs text-slate-400 min-w-24 pt-0.5">{item.label}</span>
                      <span className="text-sm text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {[
                { num: "01", label: "AI-native開発", sub: "Claude Code・生成AI設計・RAG構築" },
                { num: "02", label: "SaaS開発・運用", sub: "Next.js / Supabase / Stripe / Vercel" },
                { num: "03", label: "業務自動化設計", sub: "LINE Bot / GAS / n8n / Cloud Run" },
                { num: "04", label: "現場ヒアリング力", sub: "300人超の経営者との対話経験" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-center gap-5 bg-white border border-slate-100 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl font-bold text-slate-200 leading-none">{item.num}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
          </div>
        </section>

        {/* Career / About */}
        <section id="about" className="bg-white py-16 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8 md:mb-14">
              <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Career</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-snug mb-6">
                  現場経験を土台に、<br />
                  AIで仕組みをつくる。
                </h2>
                <div className="w-10 h-0.5 bg-blue-500 mb-8" />
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-6">
                  <dl className="space-y-4">
                    {[
                      { label: "生年月日", value: "1978年9月15日（満47歳）" },
                      { label: "居住地", value: "埼玉県（毛呂山町）" },
                      { label: "開発スタイル", value: "AI-native（Claude Code中心）" },
                      { label: "強み", value: "設計・要件定義・プロダクト推進" },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                        <dt className="text-xs font-semibold text-slate-400 tracking-wider uppercase min-w-28 mb-1 sm:mb-0 pt-0.5">
                          {item.label}
                        </dt>
                        <dd className="text-sm text-slate-700">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
                  <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3">転職の背景</p>
                  <p className="text-sm text-slate-600 leading-7">
                    フリーランスとして生成AIプロダクトを複数設計・運用してきた経験から、
                    よりチームで大きな課題に取り組む環境への転換を決意しました。
                    AI-native開発の実践者として、組織の中でAI活用を推進できるポジションを希望しています。
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {career.map((c, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      {i < career.length - 1 && <div className="w-px flex-1 bg-slate-200 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-xs font-semibold text-blue-600 tracking-wider mb-1">{c.period}</p>
                      <p className="text-sm font-bold text-slate-900 mb-2">{c.role}</p>
                      <p className="text-sm text-slate-500 leading-7">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-slate-50 py-16 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8 md:mb-14">
              <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Skills</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              保有スキル・技術スタック
            </h2>
            <p className="text-sm text-slate-500 mb-10 max-w-xl leading-relaxed">
              構想・設計・要件定義・プロダクト推進が主な担当領域です。
              実装にはClaude Codeを中心としたAI支援開発スタイルを採用しています。
            </p>

            {/* Vibe Coding 説明ブロック */}
            <div className="bg-white border border-blue-100 rounded-xl p-8 mb-12 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 mb-3">開発スタイルについて（Vibe Coding / AI-native開発）</p>
                  <p className="text-sm text-slate-600 leading-7 mb-4">
                    私の開発スタイルは「AIと対話しながらプロダクトをつくる」Vibe Codingです。
                    コードをゼロから書く従来型の開発ではなく、<strong className="text-slate-800">構想・設計・要件定義・品質判断を自分が担い、
                    実装はClaude Codeに指示を出しながら進めます。</strong>
                  </p>
                  <p className="text-sm text-slate-600 leading-7 mb-4">
                    このスタイルで自社SaaS（Signal Craft）を一人で設計・開発・運用し、
                    Next.js / Supabase / Stripe / Google画像生成API / Claude API を組み合わせた
                    フルスタックのプロダクトを動かし続けています。
                    「何を作るか」「どう設計するか」「何が足りないか」を言語化する力が、
                    AI活用の精度を決めます。
                  </p>
                  <p className="text-sm text-slate-500 leading-7">
                    プロダクトを現場で設計・運用し続けてきた構想力・課題発見力・推進力が強みです。
                    AI時代のエンジニア職において、即日から価値を発揮できる実践的なスキルセットを持っています。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((s) => (
                <div
                  key={s.category}
                  className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
                >
                  <p className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-4">{s.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Works */}
        <Works />

        {/* Resume Download */}
        <section id="resume" className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8 md:mb-14">
              <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Documents</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              応募書類
            </h2>
            <p className="text-sm text-slate-500 mb-10 max-w-xl leading-relaxed">
              最新の職務経歴書・履歴書はPDFでご確認いただけます。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/cc-company-report/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 group flex items-center gap-6 bg-slate-800 border border-slate-700 rounded-xl px-8 py-7 shadow-sm hover:shadow-md transition-shadow mb-2"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-base mb-1">AIエージェント管理ダッシュボード</p>
                  <p className="text-slate-400 text-sm">cc-company — 17体のAIエージェントを統括するシステムのステータスレポート</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 bg-slate-900 rounded-xl px-8 py-7 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-base mb-1">職務経歴書</p>
                  <p className="text-slate-400 text-sm">岸野昌史 — 最新版（PDF）</p>
                </div>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </a>

              <a
                href={RIREKISHO_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 bg-white border border-slate-200 rounded-xl px-8 py-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-slate-900 font-bold text-base mb-1">履歴書</p>
                  <p className="text-slate-400 text-sm">岸野昌史 — 最新版（PDF）</p>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-50 py-16 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8 md:mb-14">
              <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Contact</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                採用・面談のご連絡はこちら
              </h2>
              <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                カジュアル面談・書類選考・ご質問など、お気軽にご連絡ください。
                通常2営業日以内にご返信いたします。
              </p>

              <div className="space-y-4">
                {[
                  { label: "メール", value: "wakuwaku.work.915@gmail.com", href: "mailto:wakuwaku.work.915@gmail.com" },
                  { label: "ポートフォリオ", value: "profile-site-hazel.vercel.app", href: "https://profile-site-hazel.vercel.app" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 bg-white border border-slate-100 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase min-w-24">{item.label}</span>
                    <span className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">{item.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
