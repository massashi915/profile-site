# KISHINO MASASHI - Portfolio Site

フリーランスエンジニア / 業務自動化・AI活用支援のポートフォリオサイトです。

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (Hosting)

## 変更履歴

### 2026-06-28
- **変更ファイル**: `app/globals.css`, `app/layout.tsx`, `app/components/Header.tsx`, `app/components/Hero.tsx`, `app/components/About.tsx`, `app/components/Strengths.tsx`, `app/components/Works.tsx`, `app/components/Contact.tsx`, `app/components/Footer.tsx`
- **内容**: Signal Arc デザインシステム（#F2F8FE ライトベース）を全面適用。フォントを Noto Sans JP 900 + IBM Plex Mono + Cormorant 3体制に変更。Works セクションを勤怠承認DX・DBログインOTP化DX を Featured 最上位に再構成。Header nav に DX 2案件の外部リンクを追加。Contact を brand グラデーション CTA に変更。
- **理由**: Signal Arc ブランドデザインとの統一、DX 実績を前面に出したポートフォリオ再構成のため

### 2026-03-23
- **変更ファイル**: `app/components/Works.tsx`, `app/recruit/page.tsx`
- **内容**: cc-company AIエージェント管理ダッシュボード（レポートHTML）をpublic/cc-company-report/に配置し、Worksとリクルートページにリンクを追加
- **理由**: cc-company/report/index.htmlをポートフォリオに反映し、共有可能URLを提供するため
