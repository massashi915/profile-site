export default function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションラベル */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-xs font-semibold tracking-[0.3em] text-blue-600 uppercase">About</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: 見出し */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              現場経験と対話から生まれた、<br />
              実務に効く<br />
              テクノロジー支援。
            </h2>
            <div className="w-10 h-0.5 bg-blue-500 mb-8" />
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-6">
              <dl className="space-y-4">
                {[
                  { label: "対応領域", value: "LINE Bot / 業務自動化 / AI活用ツール / SaaS開発" },
                  { label: "主な支援先", value: "中小企業・個人事業主・スタートアップ" },
                  { label: "SNS運用", value: "Instagram「埼玉コレクト」18,000フォロワー（チーム運用中）" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="text-xs font-semibold text-slate-400 tracking-wider uppercase min-w-24 mb-1 sm:mb-0 pt-0.5">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-slate-700">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right: 本文 */}
          <div className="space-y-6 text-slate-600 text-sm leading-8">
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

            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://www.instagram.com/saitama_collect_m/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
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
