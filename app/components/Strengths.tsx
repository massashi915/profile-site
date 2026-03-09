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
    <section id="strengths" className="bg-slate-50 py-16 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Strengths</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
          私が提供できる、3つの強み。
        </h2>
        <p className="text-sm text-slate-500 mb-8 md:mb-14 max-w-xl leading-relaxed">
          技術スキルだけでなく、現場経験・対話力・運用知見を組み合わせた
          トータルな支援が特長です。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((s) => (
            <div
              key={s.number}
              className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-bold text-slate-100 block mb-6 leading-none">
                {s.number}
              </span>
              <h3 className="text-base font-bold text-slate-900 mb-4 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-7 mb-6">{s.body}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full"
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
