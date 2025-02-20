# Fujita Portfolio

このプロジェクトは、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)でブートストラップされた[Next.js](https://nextjs.org)プロジェクトです。

## はじめに

開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
pnpm install
pnpm dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開いて、結果を確認できます。

`app/page.tsx`を編集することで、ページを編集できます。ファイルを編集するとページが自動的に更新されます。

このプロジェクトでは、[Geist](https://vercel.com/font)という新しいフォントファミリーを自動的に最適化して読み込むために、[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)を使用しています。

## コードのフォーマット

コードのフォーマットを行うには、以下のコマンドを実行してください。

```bash
pnpm format
```

`biome`を使用してコードのフォーマットを行います。

## Huskyによる自動フック

このプロジェクトでは、Huskyを使用してGitフックを管理しています。`pnpm install`を実行すると、Huskyが自動的にセットアップされ、プッシュ時に自動的にフォーマットが実行されます。

## 詳細情報

Next.jsについて詳しく知りたい場合は、以下のリソースを参照してください。

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学べます。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsのチュートリアルです。

Next.jsのGitHubリポジトリもチェックしてみてください。フィードバックや貢献を歓迎します！

## Vercelでのデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作成者であるVercelプラットフォームを使用することです。

詳細については、[Next.jsのデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)を参照してください。
