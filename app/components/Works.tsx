import Image from "next/image";

const works = [
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
    demoNote: "",
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
    demoNote: "",
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
    demoNote: "",
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
    demoNote: "",
    images: [] as string[],
  },
];

const statusLabel = {
  live:    { label: "稼働中",          color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  client:  { label: "クライアント専用", color: "bg-blue-50 text-blue-600 border-blue-200" },
  private: { label: "プライベート運用", color: "bg-violet-50 text-violet-600 border-violet-200" },
  development: { label: "開発中",      color: "bg-amber-50 text-amber-600 border-amber-200" },
};

export default function Works() {
  return (
    <section id="works" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">Works</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          制作・開発実績
        </h2>
        <p className="text-sm text-slate-500 mb-14 max-w-xl leading-relaxed">
          現場のボトルネックを起点に設計した、実務で稼働するシステムです。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => {
            const status = statusLabel[work.status];
            const hasImages = work.images.length > 0;

            return (
              <div
                key={work.id}
                className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col"
              >
                {/* スクショ（あれば表示） */}
                {hasImages && (
                  <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                    <Image
                      src={work.images[0]}
                      alt={work.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {work.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 flex gap-1">
                        {work.images.map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/50"}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* カードヘッダー */}
                <div className="bg-slate-50 px-6 py-5 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-400 mb-1 tracking-wide">{work.category}</p>
                      <h3 className="text-sm font-bold text-slate-800 leading-snug">{work.title}</h3>
                    </div>
                    <span className={`shrink-0 text-xs border px-2.5 py-1 rounded-full font-medium ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                </div>

                {/* 説明 */}
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <p className="text-sm text-slate-500 leading-7 mb-5 flex-1">{work.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {work.demoUrl ? (
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={work.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded hover:border-slate-400 transition-colors self-start"
                      >
                        デモを見る
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      {work.demoNote && (
                        <p className="text-xs text-slate-400">{work.demoNote}</p>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-slate-300">
                      {work.status === "client"  ? "※ ご依頼者様限定でログイン提供" : ""}
                      {work.status === "private" ? "※ 自社運用中" : ""}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Coming Soon */}
          {["自動受付ボット", "楽する窓口"].map((title) => (
            <div
              key={title}
              className="border border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-start justify-between bg-slate-50/50"
            >
              <div>
                <span className="text-xs bg-slate-100 text-slate-400 px-2.5 py-1 rounded-full font-medium">Coming Soon</span>
                <h3 className="text-sm font-bold text-slate-400 mt-4">{title}</h3>
              </div>
              <p className="text-xs text-slate-300 mt-6">準備中</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
