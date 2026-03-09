export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-50 opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left: テキスト */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase mb-4 md:mb-6">
            Freelance Engineer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-3 leading-tight">
            KISHINO<br />MASASHI
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium tracking-widest mb-6 md:mb-10">
            業務自動化 ・ AI活用支援
          </p>

          <div className="w-12 h-0.5 bg-blue-500 mb-6 md:mb-8" />

          <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed mb-2 md:mb-4">
            事業の現場を知るエンジニアが、
          </p>
          <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed mb-6 md:mb-10">
            業務の詰まりを仕組みで解きます。
          </p>

          <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-md">
            飲食業をはじめ様々な現場での事業経験と、
            300人以上の経営者との対話から生まれた
            「現場目線の業務自動化・AI活用支援」を提供しています。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#works"
              className="inline-flex items-center justify-center bg-slate-800 text-white text-sm font-medium px-8 py-4 rounded hover:bg-slate-700 transition-colors"
            >
              制作実績を見る
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-slate-300 text-slate-700 text-sm font-medium px-8 py-4 rounded hover:border-slate-500 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>

        {/* Right: キーワードカード */}
        <div className="hidden md:flex flex-col gap-4">
          {[
            { num: "01", label: "LINE Bot 開発", sub: "受付・集客・キャラクター型など" },
            { num: "02", label: "業務自動化システム", sub: "見積もり・投稿生成・ワークフロー" },
            { num: "03", label: "AI活用ツール設計", sub: "現場に合わせた実装・導入支援" },
            { num: "04", label: "SaaS UI / 管理画面", sub: "使いやすいインターフェース設計" },
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

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
}
