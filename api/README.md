# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting Started" guide here:
https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### ディレクトリ構成

- routes/
  - プレゼンテーション層: ルーティング周りを記述
- application/
  - アプリケーション層: 下層の処理を利用するサービス類を記述
- domain/
  - ドメイン層: ビジネスロジックを記述
- infrastructure/
  - インフラストラクチャ層: 永続化・外部サービスを記述
- static/
  - 静的ファイルを置く
