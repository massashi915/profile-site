---
name: add-work-entry
description: Works セクションに新しい実績カードを追加するためのスキル。app/components/Works.tsx の works 配列への項目追加、画像配置、README 変更履歴の追記、ビルド検証、コミットまでを一連の手順で行う。ユーザーが「実績を追加」「Works に追加」「新しいプロジェクトをポートフォリオに載せて」等と依頼したときに起動する。
---

# add-work-entry

`app/components/Works.tsx` の Works セクションに実績を1件追加するための標準手順。

## 事前にユーザーから聞く情報

次の項目が揃っていなければ、**AskUserQuestion** でまとめて確認する。推測で埋めない。

必須:
- `id`（英小文字・ハイフンのみ、例: `flipbook`）
- `category`（短い日本語、例: `LINE Bot / 管理画面`）
- `title`（表示名）
- `description`（2〜3文、実務成果を含める）
- `tags`（3〜5個、既存タグと表記揃える: `Next.js` / `LINE Bot` / `AI` など）
- `status`（`live` / `client` / `private` / `development` のいずれか）

任意:
- `demoUrl`（公開URL または `/cc-company-report/index.html` のような内部パス）
- `demoNote`（`PW: demo2024` など補足）
- `images`（1枚以上推奨。`public/images/works/` 配下のパス）

## 手順

### 1. 追加先を決める

- **通常カード** → `app/components/Works.tsx` の `works` 配列末尾に追加
- **Featured（最上段の大きなカード）に昇格** → `featured` 定数を差し替え。昇格は明示的な指示があったときのみ。

### 2. 画像を配置（画像がある場合）

- 配置先: `/home/user/profile-site/public/images/works/`
- ファイル名規約: `{id}-{用途}.{ext}` （例: `matoi-dashboard.png`, `rakumado-line-1.jpg`）
- 参照パスは `/images/works/xxx.png`（先頭スラッシュ、`public/` は書かない）
- 複数枚ある場合は表示順を意識して配列に並べる（`ImageSlider` がこの順で再生）

### 3. works 配列へ追記

既存エントリのシェイプに厳密に合わせる。型は Works.tsx 内でインラインに定義されているため、キー名・`as const` の付け方を既存に合わせること。

```ts
{
  id: "xxx",
  category: "カテゴリ",
  title: "タイトル",
  description: "説明...",
  tags: ["Tag1", "Tag2"],
  status: "live" as const,   // as const を忘れない
  demoUrl: "",               // なければ空文字
  demoNote: "",              // なければ空文字
  images: [] as string[],    // 空配列のときは as string[] を付ける
},
```

注意点:
- `images` が空のときは `[] as string[]` とする（既存コードに合わせた型推論のため）
- `status: "xxx" as const` は必須
- 末尾カンマを付ける（既存スタイル）

### 4. README 変更履歴を追記

`README.md` の `## 変更履歴` セクションの先頭（最新が上）に今日の日付で追記する。

```md
### YYYY-MM-DD
- **変更ファイル**: `app/components/Works.tsx`, `public/images/works/xxx.png`
- **内容**: {title} を Works に追加
- **理由**: {なぜ追加するか}
```

日付は実際の today の日付を使う（環境コンテキストの `currentDate` を参照）。

### 5. 検証

以下を順に実行し、エラーがあれば修正する:

```bash
npm run lint
npm run build
```

ビルドが通ること、lint エラーが出ないことを確認。画像を追加した場合は `public/images/works/` に実ファイルが存在することも確認。

### 6. コミット

既存のコミットメッセージ様式に合わせる（`feat:` / `fix:` プレフィックス + 日本語本文）。例:

```
feat: {title}をWorksに追加
```

`git add` は変更ファイルを明示的に指定する（`-A` や `.` は使わない）。

```bash
git add app/components/Works.tsx README.md public/images/works/xxx.png
git commit -m "feat: xxxをWorksに追加"
```

### 7. プッシュ

現在のブランチにプッシュする。`-u origin <branch>` を付ける。

## やらないこと

- ユーザー確認なしに `featured` を差し替える
- ID の重複（既存の `id` と衝突していないか確認する）
- 既存エントリの順序入れ替え（追加指示がない限り末尾 append）
- 画像のリサイズ・変換（ユーザーが渡した画像をそのまま配置）
- `statusLabel` 定数の変更（新しい status 値を増やす場合は別途相談）

## 完了時の報告フォーマット

ユーザーへの最終メッセージは次の形で簡潔に:

- 追加した id / title / status
- 配置した画像のパス（あれば）
- ビルド・lint の結果（✅/‼️）
- コミットハッシュ・プッシュ先ブランチ
