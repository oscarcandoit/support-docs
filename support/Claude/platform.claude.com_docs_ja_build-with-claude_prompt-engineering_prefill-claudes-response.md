---
url: "https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prefill-claudes-response"
title: "Claude の応答を事前入力してより大きな出力制御を実現 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ja/home)

- [開発者ガイド](https://platform.claude.com/docs/ja/intro)
- [APIリファレンス](https://platform.claude.com/docs/ja/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [リソース](https://platform.claude.com/docs/ja/resources/overview)
- [リリースノート](https://platform.claude.com/docs/ja/release-notes/overview)

日本語

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fja%2Fbuild-with-claude%2Fprompt-engineering%2Fprefill-claudes-response)

Search...

⌘K

最初のステップ

[Claudeの紹介](https://platform.claude.com/docs/ja/intro) [クイックスタート](https://platform.claude.com/docs/ja/get-started)

モデルと価格

[モデル概要](https://platform.claude.com/docs/ja/about-claude/models/overview) [モデルの選択](https://platform.claude.com/docs/ja/about-claude/models/choosing-a-model) [Claude 4.5の新機能](https://platform.claude.com/docs/ja/about-claude/models/whats-new-claude-4-5) [Claude 4.5への移行](https://platform.claude.com/docs/ja/about-claude/models/migrating-to-claude-4) [モデルの廃止予定](https://platform.claude.com/docs/ja/about-claude/model-deprecations) [価格](https://platform.claude.com/docs/ja/about-claude/pricing)

Claudeで構築

[機能概要](https://platform.claude.com/docs/ja/build-with-claude/overview) [Messages APIの使用](https://platform.claude.com/docs/ja/build-with-claude/working-with-messages) [コンテキストウィンドウ](https://platform.claude.com/docs/ja/build-with-claude/context-windows) [プロンプトのベストプラクティス](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/claude-4-best-practices)

機能

[プロンプトキャッシング](https://platform.claude.com/docs/ja/build-with-claude/prompt-caching) [コンテキスト編集](https://platform.claude.com/docs/ja/build-with-claude/context-editing) [拡張思考](https://platform.claude.com/docs/ja/build-with-claude/extended-thinking) [エフォート](https://platform.claude.com/docs/ja/build-with-claude/effort) [ストリーミングメッセージ](https://platform.claude.com/docs/ja/build-with-claude/streaming) [バッチ処理](https://platform.claude.com/docs/ja/build-with-claude/batch-processing) [引用](https://platform.claude.com/docs/ja/build-with-claude/citations) [多言語サポート](https://platform.claude.com/docs/ja/build-with-claude/multilingual-support) [トークンカウント](https://platform.claude.com/docs/ja/build-with-claude/token-counting) [埋め込み](https://platform.claude.com/docs/ja/build-with-claude/embeddings) [ビジョン](https://platform.claude.com/docs/ja/build-with-claude/vision) [PDFサポート](https://platform.claude.com/docs/ja/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/ja/build-with-claude/files) [検索結果](https://platform.claude.com/docs/ja/build-with-claude/search-results) [構造化出力](https://platform.claude.com/docs/ja/build-with-claude/structured-outputs)

ツール

[概要](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/overview) [ツール使用の実装方法](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/implement-tool-use) [細粒度ツールストリーミング](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/fine-grained-tool-streaming) [Bashツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/bash-tool) [コード実行ツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/code-execution-tool) [プログラマティックツール呼び出し](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/programmatic-tool-calling) [コンピュータ使用ツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/computer-use-tool) [テキストエディタツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/text-editor-tool) [Webフェッチツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/web-fetch-tool) [Web検索ツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/web-search-tool) [メモリツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/memory-tool) [ツール検索ツール](https://platform.claude.com/docs/ja/agents-and-tools/tool-use/tool-search-tool)

エージェントスキル

[概要](https://platform.claude.com/docs/ja/agents-and-tools/agent-skills/overview) [クイックスタート](https://platform.claude.com/docs/ja/agents-and-tools/agent-skills/quickstart) [ベストプラクティス](https://platform.claude.com/docs/ja/agents-and-tools/agent-skills/best-practices) [APIでスキルを使用](https://platform.claude.com/docs/ja/build-with-claude/skills-guide)

エージェントSDK

[概要](https://platform.claude.com/docs/ja/agent-sdk/overview) [クイックスタート](https://platform.claude.com/docs/ja/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/ja/agent-sdk/typescript) [TypeScript V2（プレビュー）](https://platform.claude.com/docs/ja/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/ja/agent-sdk/python) [移行ガイド](https://platform.claude.com/docs/ja/agent-sdk/migration-guide)

ガイド

APIのMCP

[MCPコネクタ](https://platform.claude.com/docs/ja/agents-and-tools/mcp-connector) [リモートMCPサーバー](https://platform.claude.com/docs/ja/agents-and-tools/remote-mcp-servers)

サードパーティプラットフォーム上のClaude

[Amazon Bedrock](https://platform.claude.com/docs/ja/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/ja/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/ja/build-with-claude/claude-on-vertex-ai)

プロンプトエンジニアリング

[概要](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/overview) [プロンプトジェネレータ](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prompt-generator) [プロンプトテンプレートを使用](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prompt-templates-and-variables) [プロンプト改善ツール](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prompt-improver) [明確で直接的に](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/be-clear-and-direct) [例を使用（マルチショットプロンプティング）](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/multishot-prompting) [Claudeに考えさせる（CoT）](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/chain-of-thought) [XMLタグを使用](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/use-xml-tags) [Claudeに役割を与える（システムプロンプト）](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/system-prompts) [Claudeの応答を事前入力](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prefill-claudes-response) [複雑なプロンプトをチェーン](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/chain-prompts) [長いコンテキストのヒント](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/long-context-tips) [拡張思考のヒント](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/extended-thinking-tips)

テストと評価

[成功基準を定義](https://platform.claude.com/docs/ja/test-and-evaluate/define-success) [テストケースを開発](https://platform.claude.com/docs/ja/test-and-evaluate/develop-tests) [評価ツールの使用](https://platform.claude.com/docs/ja/test-and-evaluate/eval-tool) [レイテンシの削減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-latency)

ガードレールを強化

[ハルシネーションを削減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [出力の一貫性を向上](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/increase-consistency) [ジェイルブレイクを軽減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [ストリーミング拒否](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [プロンプトリークを削減](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Claudeをキャラクターに保つ](https://platform.claude.com/docs/ja/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

管理とモニタリング

[Admin API概要](https://platform.claude.com/docs/ja/build-with-claude/administration-api) [使用状況とコストAPI](https://platform.claude.com/docs/ja/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/ja/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

プロンプトエンジニアリング

Claudeの応答を事前入力

プロンプトエンジニアリング

# Claude の応答を事前入力してより大きな出力制御を実現

Copy page

Claude の応答を事前入力して、出力をより細かく制御する方法を学びます。

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

事前入力は非拡張思考モードでのみ利用可能です。現在、拡張思考ではサポートされていません。

Claude を使用する場合、`Assistant` メッセージを事前入力することで応答をガイドする独特の機能があります。この強力なテクニックにより、Claude のアクションを指示し、前置きをスキップし、JSON や XML などの特定の形式を強制し、ロールプレイシナリオでキャラクターの一貫性を保つことさえできます。

Claude が期待通りに動作していない場合がありますが、いくつかの事前入力された文は Claude のパフォーマンスを大幅に向上させることができます。少しの事前入力は大きな効果があります！

## Claude の応答を事前入力する方法

事前入力するには、`Assistant` メッセージに目的の初期テキストを含めます（Claude の応答は `Assistant` メッセージが終わるところから続きます）:

```
import anthropic

client = anthropic.Anthropic()
response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[\
        {"role": "user", "content": "What is your favorite color?"},\
        {"role": "assistant", "content": "As an AI assistant, I don't have a favorite color, But if I had to pick, it would be green because"}  # Prefill here\
    ]
)
```

事前入力コンテンツは末尾の空白で終わることはできません。`"As an AI assistant, I "` のような事前入力（末尾にスペースがある）はエラーになります。

### 例

#### 例 1: 出力形式の制御と前置きのスキップ

**パワーユーザーのヒント**: `{` を事前入力すると、Claude は前置きをスキップして JSON オブジェクトを直接出力するようになります。これはより清潔で、より簡潔で、プログラムが追加処理なしで解析しやすくなります。
特定のスキーマに準拠する保証された JSON 出力については、事前入力の代わりに [構造化出力](https://platform.claude.com/docs/ja/build-with-claude/structured-outputs) の使用を検討してください。構造化出力により、Claude の応答が常に定義された JSON スキーマと一致することが保証され、厳密な形式準拠が必要な本番アプリケーションに最適です。

### 例: 事前入力なしの構造化データ抽出

### 例: 事前入力ありの構造化データ抽出

#### 例 2: ロールプレイシナリオでキャラクターを維持する

**ロールプレイのヒント**: 括弧で囲まれた `[ROLE_NAME]` を事前入力すると、より長く複雑な会話でも Claude がキャラクターを保つことができます。これは `system` パラメータのロールプロンプティングと組み合わせると特に強力です。

### 例: ロールプロンプティングなしでキャラクターを維持

### 例: ロールプロンプティングありでキャラクターを維持

* * *

[メッセージの操作\\
\\
事前入力およびその他の Messages API パターンのさらに多くの例を参照してください。](https://platform.claude.com/docs/ja/build-with-claude/working-with-messages) [プロンプトライブラリ\\
\\
様々なタスクとユースケースのためのキュレーションされたプロンプトの選択から着想を得てください。](https://platform.claude.com/docs/ja/resources/prompt-library/library) [GitHub プロンプティングチュートリアル\\
\\
ドキュメントに記載されているプロンプトエンジニアリングの概念をカバーする例が豊富なチュートリアル。](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Google Sheets プロンプティングチュートリアル\\
\\
インタラクティブなスプレッドシートを使用したプロンプトエンジニアリングチュートリアルの軽量版。](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [Claude の応答を事前入力する方法](https://platform.claude.com/docs/ja/build-with-claude/prompt-engineering/prefill-claudes-response#claude)

[Claude Docs home page](https://platform.claude.com/docs)

[X (Twitter)](https://x.com/claudeai)[LinkedIn](https://www.linkedin.com/showcase/claude)[Instagram](https://instagram.com/claudeai)

### Solutions

- [AI agents](https://claude.com/solutions/agents)
- [Code modernization](https://claude.com/solutions/code-modernization)
- [Coding](https://claude.com/solutions/coding)
- [Customer support](https://claude.com/solutions/customer-support)
- [Education](https://claude.com/solutions/education)
- [Financial services](https://claude.com/solutions/financial-services)
- [Government](https://claude.com/solutions/government)
- [Life sciences](https://claude.com/solutions/life-sciences)

### Partners

- [Amazon Bedrock](https://claude.com/partners/amazon-bedrock)
- [Google Cloud's Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Company

- [Anthropic](https://www.anthropic.com/company)
- [Careers](https://www.anthropic.com/careers)
- [Economic Futures](https://www.anthropic.com/economic-futures)
- [Research](https://www.anthropic.com/research)
- [News](https://www.anthropic.com/news)
- [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)
- [Security and compliance](https://trust.anthropic.com/)
- [Transparency](https://www.anthropic.com/transparency)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Help and security

- [Availability](https://www.anthropic.com/supported-countries)
- [Status](https://status.anthropic.com/)
- [Support](https://support.claude.com/)
- [Discord](https://www.anthropic.com/discord)

### Terms and policies

- [Privacy policy](https://www.anthropic.com/legal/privacy)
- [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)
- [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)
- [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)
- [Usage policy](https://www.anthropic.com/legal/aup)

Ask Docs
![Chat avatar](https://platform.claude.com/docs/images/book-icon-light.svg)

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)