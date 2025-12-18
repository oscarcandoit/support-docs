---
url: "https://platform.claude.com/docs/ja/agent-sdk/hooks"
title: "フックを使用してエージェントの動作をインターセプトして制御する - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ja/home)

- [開発者ガイド](https://platform.claude.com/docs/ja/intro)
- [APIリファレンス](https://platform.claude.com/docs/ja/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [リソース](https://platform.claude.com/docs/ja/resources/overview)
- [リリースノート](https://platform.claude.com/docs/ja/release-notes/overview)

日本語

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fja%2Fagent-sdk%2Fhooks)

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

[ストリーミング入力](https://platform.claude.com/docs/ja/agent-sdk/streaming-vs-single-mode) [権限の処理](https://platform.claude.com/docs/ja/agent-sdk/permissions) [フックで実行を制御](https://platform.claude.com/docs/ja/agent-sdk/hooks) [セッション管理](https://platform.claude.com/docs/ja/agent-sdk/sessions) [SDKの構造化出力](https://platform.claude.com/docs/ja/agent-sdk/structured-outputs) [エージェントSDKのホスティング](https://platform.claude.com/docs/ja/agent-sdk/hosting) [AIエージェントの安全なデプロイ](https://platform.claude.com/docs/ja/agent-sdk/secure-deployment) [システムプロンプトの変更](https://platform.claude.com/docs/ja/agent-sdk/modifying-system-prompts) [SDKのMCP](https://platform.claude.com/docs/ja/agent-sdk/mcp) [カスタムツール](https://platform.claude.com/docs/ja/agent-sdk/custom-tools) [SDKのサブエージェント](https://platform.claude.com/docs/ja/agent-sdk/subagents) [SDKのスラッシュコマンド](https://platform.claude.com/docs/ja/agent-sdk/slash-commands) [SDKのエージェントスキル](https://platform.claude.com/docs/ja/agent-sdk/skills) [コストと使用状況の追跡](https://platform.claude.com/docs/ja/agent-sdk/cost-tracking) [ToDoリスト](https://platform.claude.com/docs/ja/agent-sdk/todo-tracking) [SDKのプラグイン](https://platform.claude.com/docs/ja/agent-sdk/plugins)

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

ガイド

フックで実行を制御

ガイド

# フックを使用してエージェントの動作をインターセプトして制御する

Copy page

フックを使用して、実行の重要なポイントでエージェントの動作をインターセプトしてカスタマイズする

Copy page

フックを使用すると、エージェント実行の重要なポイントでインターセプトして、検証、ログ記録、セキュリティ制御、またはカスタムロジックを追加できます。フックを使用すると、以下のことができます：

- **危険な操作をブロック** する：破壊的なシェルコマンドや不正なファイルアクセスなど、実行前に危険な操作をブロックします
- **ログと監査**：コンプライアンス、デバッグ、またはアナリティクスのために、すべてのツール呼び出しをログして監査します
- **入力と出力を変換** する：データをサニタイズしたり、認証情報を注入したり、ファイルパスをリダイレクトします
- **人間の承認を要求** する：データベース書き込みやAPI呼び出しなどの機密アクションに対して人間の承認を要求します
- **セッションライフサイクルを追跡** する：状態を管理し、リソースをクリーンアップし、通知を送信します

フックには2つの部分があります：

1. **コールバック関数**：フックが発火したときに実行されるロジック
2. **フック設定**：SDKにどのイベントをフックするか（例：`PreToolUse`）、どのツールをマッチするかを指示します

次の例は、エージェントが`.env`ファイルを変更するのをブロックします。まず、ファイルパスをチェックするコールバックを定義し、次にそれを`query()`に渡して、Write または Edit ツール呼び出しの前に実行します：

Python

```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, HookMatcher

# ツール呼び出しの詳細を受け取るフックコールバックを定義する
async def protect_env_files(input_data, tool_use_id, context):
    # ツールの入力引数からファイルパスを抽出する
    file_path = input_data['tool_input'].get('file_path', '')
    file_name = file_path.split('/')[-1]

    # .envファイルをターゲットにしている場合、操作をブロックする
    if file_name == '.env':
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Cannot modify .env files'
            }
        }

    # 空のオブジェクトを返して操作を許可する
    return {}

async def main():
    async for message in query(
        prompt="Update the database configuration",
        options=ClaudeAgentOptions(
            hooks={
                # PreToolUseイベントのフックを登録する
                # マッチャーはWrite と Edit ツール呼び出しのみにフィルタリングする
                'PreToolUse': [HookMatcher(matcher='Write|Edit', hooks=[protect_env_files])]
            }
        )
    ):
        print(message)

asyncio.run(main())
```

これは`PreToolUse`フックです。ツール実行前に実行され、ロジックに基づいて操作をブロックまたは許可できます。このガイドの残りの部分では、利用可能なすべてのフック、その設定オプション、および一般的なユースケースのパターンについて説明します。

## 利用可能なフック

SDKは、エージェント実行のさまざまなステージのフックを提供します。一部のフックは両方のSDKで利用可能ですが、他のフックはTypeScript専用です。これはPython SDKがそれらをサポートしていないためです。

| フックイベント | Python SDK | TypeScript SDK | トリガーされるもの | 使用例 |
| --- | --- | --- | --- | --- |
| `PreToolUse` | はい | はい | ツール呼び出しリクエスト（ブロックまたは変更可能） | 危険なシェルコマンドをブロック |
| `PostToolUse` | はい | はい | ツール実行結果 | すべてのファイル変更を監査証跡にログ |
| `PostToolUseFailure` | いいえ | はい | ツール実行失敗 | ツールエラーを処理またはログ |
| `UserPromptSubmit` | はい | はい | ユーザープロンプト送信 | プロンプトに追加コンテキストを注入 |
| `Stop` | はい | はい | エージェント実行停止 | 終了前にセッション状態を保存 |
| `SubagentStart` | いいえ | はい | サブエージェント初期化 | 並列タスク生成を追跡 |
| `SubagentStop` | はい | はい | サブエージェント完了 | 並列タスクの結果を集約 |
| `PreCompact` | はい | はい | 会話圧縮リクエスト | 要約前に完全なトランスクリプトをアーカイブ |
| `PermissionRequest` | いいえ | はい | パーミッションダイアログが表示される | カスタムパーミッション処理 |
| `SessionStart` | いいえ | はい | セッション初期化 | ログとテレメトリを初期化 |
| `SessionEnd` | いいえ | はい | セッション終了 | 一時的なリソースをクリーンアップ |
| `Notification` | いいえ | はい | エージェントステータスメッセージ | エージェントステータス更新をSlackまたはPagerDutyに送信 |

## 一般的なユースケース

フックは多くの異なるシナリオを処理するのに十分な柔軟性があります。以下は、カテゴリ別に整理された最も一般的なパターンの一部です。

セキュリティ

セキュリティ

ログ記録

ログ記録

ツールインターセプション

ツールインターセプション

認可

認可

- 危険なコマンドをブロック（`rm -rf /`、破壊的なSQL など）
- 書き込み操作前にファイルパスを検証
- ツール使用のための許可リスト/ブロックリストを適用

## フックを設定する

エージェントのフックを設定するには、`query()`を呼び出すときに`options.hooks`パラメータでフックを渡します：

Python

```
async for message in query(
    prompt="Your prompt",
    options=ClaudeAgentOptions(
        hooks={
            'PreToolUse': [HookMatcher(matcher='Bash', hooks=[my_callback])]
        }
    )
):
    print(message)
```

`hooks`オプションは辞書（Python）またはオブジェクト（TypeScript）です。ここで：

- **キー** は [フックイベント名](https://platform.claude.com/docs/ja/agent-sdk/hooks#available-hooks)（例：`'PreToolUse'`、`'PostToolUse'`、`'Stop'`）です
- **値** は [マッチャー](https://platform.claude.com/docs/ja/agent-sdk/hooks#matchers) の配列で、各マッチャーはオプションのフィルタパターンと [コールバック関数](https://platform.claude.com/docs/ja/agent-sdk/hooks#callback-function-inputs) を含みます

フックコールバック関数は、イベントについての [入力データ](https://platform.claude.com/docs/ja/agent-sdk/hooks#input-data) を受け取り、 [レスポンス](https://platform.claude.com/docs/ja/agent-sdk/hooks#callback-outputs) を返して、エージェントに操作を許可、ブロック、または変更するよう指示します。

### マッチャー

マッチャーを使用して、どのツールがコールバックをトリガーするかをフィルタリングします：

| オプション | 型 | デフォルト | 説明 |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | ツール名をマッチするための正規表現パターン。組み込みツールには`Bash`、`Read`、`Write`、`Edit`、`Glob`、`Grep`、`WebFetch`、`Task`などが含まれます。MCPツールはパターン`mcp__<server>__<action>`を使用します。 |
| `hooks` | `HookCallback[]` | - | 必須。パターンがマッチしたときに実行するコールバック関数の配列 |
| `timeout` | `number` | `60` | タイムアウト（秒単位）。外部APIを呼び出すフックの場合は増加させます |

可能な限り`matcher`パターンを使用して特定のツールをターゲットにします。`'Bash'`のマッチャーはBashコマンドのみで実行され、パターンを省略するとすべてのツール呼び出しに対してコールバックが実行されます。マッチャーはツール名でのみフィルタリングすることに注意してください。ファイルパスまたは他の引数でフィルタリングするには、コールバック内で`tool_input.file_path`をチェックします。

マッチャーはツールベースのフック（`PreToolUse`、`PostToolUse`、`PostToolUseFailure`、`PermissionRequest`）にのみ適用されます。`Stop`、`SessionStart`、`Notification`などのライフサイクルフックの場合、マッチャーは無視され、そのタイプのすべてのイベントに対してフックが発火します。

\*\*ツール名の発見：\*\*セッション開始時の初期システムメッセージの`tools`配列をチェックするか、マッチャーなしでフックを追加してすべてのツール呼び出しをログします。

**MCPツール命名：** MCPツールは常に`mcp__`で始まり、その後にサーバー名とアクション：`mcp__<server>__<action>`が続きます。例えば、`playwright`という名前のサーバーを設定する場合、そのツールは`mcp__playwright__browser_screenshot`、`mcp__playwright__browser_click`などという名前になります。サーバー名は`mcpServers`設定で使用するキーから来ます。

この例は、マッチャーを使用して`PreToolUse`イベントが発火したときにファイル変更ツールのみでフックを実行します：

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(matcher='Write|Edit', hooks=[validate_file_path])\
        ]
    }
)
```

### コールバック関数の入力

すべてのフックコールバックは3つの引数を受け取ります：

1. **入力データ**（`dict` / `HookInput`）：イベント詳細。フィールドについては [入力データ](https://platform.claude.com/docs/ja/agent-sdk/hooks#input-data) を参照してください
2. **ツール使用ID**（`str | None` / `string | null`）：`PreToolUse`と`PostToolUse`イベントを相関させます
3. **コンテキスト**（`HookContext`）：TypeScriptでは、キャンセル用の`signal`プロパティ（`AbortSignal`）を含みます。`fetch()`などの非同期操作にこれを渡して、フックがタイムアウトした場合に自動的にキャンセルされるようにします。Pythonでは、この引数は将来の使用のために予約されています。

### 入力データ

フックコールバックの最初の引数には、イベントに関する情報が含まれています。フィールド名はSDK全体で同じです（両方ともsnake\_caseを使用）。

**すべてのフックタイプに存在する共通フィールド：**

| フィールド | 型 | 説明 |
| --- | --- | --- |
| `hook_event_name` | `string` | フックタイプ（`PreToolUse`、`PostToolUse`など） |
| `session_id` | `string` | 現在のセッション識別子 |
| `transcript_path` | `string` | 会話トランスクリプトへのパス |
| `cwd` | `string` | 現在の作業ディレクトリ |

**フック固有フィールド** はフックタイプによって異なります。TSでマークされた項目はTypeScript SDKでのみ利用可能です：

| フィールド | 型 | 説明 | フック |
| --- | --- | --- | --- |
| `tool_name` | `string` | 呼び出されるツールの名前 | PreToolUse、PostToolUse、PostToolUseFailureTS、PermissionRequestTS |
| `tool_input` | `object` | ツールに渡される引数 | PreToolUse、PostToolUse、PostToolUseFailureTS、PermissionRequestTS |
| `tool_response` | `any` | ツール実行から返された結果 | PostToolUse |
| `error` | `string` | ツール実行失敗からのエラーメッセージ | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | 失敗が割り込みによって引き起こされたかどうか | PostToolUseFailureTS |
| `prompt` | `string` | ユーザーのプロンプトテキスト | UserPromptSubmit |
| `stop_hook_active` | `boolean` | ストップフックが現在処理中かどうか | Stop、SubagentStop |
| `agent_id` | `string` | サブエージェントの一意の識別子 | SubagentStartTS、SubagentStopTS |
| `agent_type` | `string` | サブエージェントのタイプ/ロール | SubagentStartTS |
| `agent_transcript_path` | `string` | サブエージェントの会話トランスクリプトへのパス | SubagentStopTS |
| `trigger` | `string` | 圧縮をトリガーしたもの：`manual`または`auto` | PreCompact |
| `custom_instructions` | `string` | 圧縮用に提供されたカスタム指示 | PreCompact |
| `permission_suggestions` | `array` | ツールの推奨パーミッション更新 | PermissionRequestTS |
| `source` | `string` | セッションの開始方法：`startup`、`resume`、`clear`、または`compact` | SessionStartTS |
| `reason` | `string` | セッションが終了した理由：`clear`、`logout`、`prompt_input_exit`、`bypass_permissions_disabled`、または`other` | SessionEndTS |
| `message` | `string` | エージェントからのステータスメッセージ | NotificationTS |
| `notification_type` | `string` | 通知のタイプ：`permission_prompt`、`idle_prompt`、`auth_success`、または`elicitation_dialog` | NotificationTS |
| `title` | `string` | エージェントによって設定されたオプションのタイトル | NotificationTS |

以下のコードは、`tool_name`と`tool_input`を使用して各ツール呼び出しの詳細をログするフックコールバックを定義しています：

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### コールバック出力

コールバック関数は、SDKに続行方法を指示するオブジェクトを返します。操作を変更せずに許可するには、空のオブジェクト`{}`を返します。操作をブロック、変更、またはコンテキストを追加するには、`hookSpecificOutput`フィールドを含む決定を含むオブジェクトを返します。

**トップレベルフィールド**（`hookSpecificOutput`の外）：

| フィールド | 型 | 説明 |
| --- | --- | --- |
| `continue` | `boolean` | このフック後にエージェントが続行するかどうか（デフォルト：`true`） |
| `stopReason` | `string` | `continue`が`false`の場合に表示されるメッセージ |
| `suppressOutput` | `boolean` | トランスクリプトからstdoutを非表示にする（デフォルト：`false`） |
| `systemMessage` | `string` | Claudeが見るための会話に注入されるメッセージ |

**`hookSpecificOutput`内のフィールド**：

| フィールド | 型 | フック | 説明 |
| --- | --- | --- | --- |
| `hookEventName` | `string` | すべて | 必須。現在のイベントをマッチするために`input.hook_event_name`を使用します |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | ツールが実行されるかどうかを制御します |
| `permissionDecisionReason` | `string` | PreToolUse | 決定についてClaudeに表示される説明 |
| `updatedInput` | `object` | PreToolUse | 変更されたツール入力（`permissionDecision: 'allow'`が必要） |
| `additionalContext` | `string` | PostToolUse、UserPromptSubmit、SessionStartTS、SubagentStartTS | 会話に追加されるコンテキスト |

この例は`/etc`ディレクトリへの書き込み操作をブロックしながら、Claudeに安全なファイルプラクティスについて思い出させるシステムメッセージを注入します：

Python

```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data['tool_input'].get('file_path', '')

    if file_path.startswith('/etc'):
        return {
            # トップレベルフィールド：会話にガイダンスを注入する
            'systemMessage': 'Remember: system directories like /etc are protected.',
            # hookSpecificOutput：操作をブロックする
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Writing to /etc is not allowed'
            }
        }
    return {}
```

#### パーミッション決定フロー

複数のフックまたはパーミッションルールが適用される場合、SDKはこの順序で評価します：

1. **Deny** ルールが最初にチェックされます（いずれかがマッチ = 即座に拒否）。
2. **Ask** ルールが2番目にチェックされます。
3. **Allow** ルールが3番目にチェックされます。
4. **デフォルトはAsk** です（何もマッチしない場合）。

フックが`deny`を返す場合、操作はブロックされます。`allow`を返す他のフックはそれをオーバーライドしません。

#### ツールをブロックする

deny決定を返してツール実行を防止します：

Python

```
async def block_dangerous_commands(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    command = input_data['tool_input'].get('command', '')

    if 'rm -rf /' in command:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Dangerous command blocked: rm -rf /'
            }
        }
    return {}
```

#### ツール入力を変更する

更新された入力を返してツールが受け取るものを変更します：

Python

```
async def redirect_to_sandbox(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    if input_data['tool_name'] == 'Write':
        original_path = input_data['tool_input'].get('file_path', '')
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'updatedInput': {
                    **input_data['tool_input'],
                    'file_path': f'/sandbox{original_path}'
                }
            }
        }
    return {}
```

`updatedInput`を使用する場合、`permissionDecision`も含める必要があります。常に新しいオブジェクトを返し、元の`tool_input`を変更しないでください。

#### システムメッセージを追加する

会話にコンテキストを注入します：

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### 特定のツールを自動承認する

信頼できるツールのパーミッションプロンプトをバイパスします。これは、特定の操作がユーザー確認なしで実行されるようにしたい場合に便利です：

Python

```
async def auto_approve_read_only(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    read_only_tools = ['Read', 'Glob', 'Grep', 'LS']
    if input_data['tool_name'] in read_only_tools:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'permissionDecisionReason': 'Read-only tool auto-approved'
            }
        }
    return {}
```

`permissionDecision`フィールドは3つの値を受け入れます：`'allow'`（自動承認）、`'deny'`（ブロック）、または`'ask'`（確認を促す）。

## 高度なシナリオを処理する

これらのパターンは、複雑なユースケースのためのより洗練されたフックシステムを構築するのに役立ちます。

### 複数のフックをチェーンする

フックは配列に表示される順序で実行されます。各フックを単一の責任に焦点を当てて、複雑なロジックのために複数のフックをチェーンします。この例は、すべてのツール呼び出しに対して4つのフックすべてを実行します（マッチャーが指定されていません）：

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(hooks=[rate_limiter]),        # 最初：レート制限をチェック\
            HookMatcher(hooks=[authorization_check]), # 2番目：パーミッションを確認\
            HookMatcher(hooks=[input_sanitizer]),     # 3番目：入力をサニタイズ\
            HookMatcher(hooks=[audit_logger])         # 最後：アクションをログ\
        ]
    }
)
```

### ツール固有のマッチャーと正規表現

正規表現パターンを使用して複数のツールをマッチします：

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            # ファイル変更ツールをマッチ\
            HookMatcher(matcher='Write|Edit|Delete', hooks=[file_security_hook]),\
\
            # すべてのMCPツールをマッチ\
            HookMatcher(matcher='^mcp__', hooks=[mcp_audit_hook]),\
\
            # すべてをマッチ（マッチャーなし）\
            HookMatcher(hooks=[global_logger])\
        ]
    }
)
```

マッチャーは **ツール名** のみをマッチします。ファイルパスまたは他の引数でフィルタリングするには、フックコールバック内で`tool_input.file_path`をチェックします。

### サブエージェント活動を追跡する

`SubagentStop`フックを使用してサブエージェント完了を監視します。`tool_use_id`は親エージェント呼び出しとそのサブエージェントを相関させるのに役立ちます：

Python

```
async def subagent_tracker(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'SubagentStop':
        print(f"[SUBAGENT] Completed")
        print(f"  Tool use ID: {tool_use_id}")
        print(f"  Stop hook active: {input_data.get('stop_hook_active')}")
    return {}

options = ClaudeAgentOptions(
    hooks={
        'SubagentStop': [HookMatcher(hooks=[subagent_tracker])]
    }
)
```

### フック内の非同期操作

フックはHTTPリクエストなどの非同期操作を実行できます。例外をスローする代わりに例外をキャッチして、エラーを適切に処理します。TypeScriptでは、`signal`を`fetch()`に渡して、フックがタイムアウトした場合にリクエストがキャンセルされるようにします：

Python

```
import aiohttp
from datetime import datetime

async def webhook_notifier(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PostToolUse':
        return {}

    try:
        async with aiohttp.ClientSession() as session:
            await session.post(
                'https://api.example.com/webhook',
                json={
                    'tool': input_data['tool_name'],
                    'timestamp': datetime.now().isoformat()
                }
            )
    except Exception as e:
        print(f'Webhook request failed: {e}')

    return {}
```

### 通知を送信する（TypeScript のみ）

`Notification`フックを使用してエージェントからステータス更新を受け取り、Slackやモニタリングダッシュボードなどの外部サービスに転送します：

TypeScript

```
import { query, HookCallback, NotificationHookInput } from "@anthropic-ai/claude-agent-sdk";

const notificationHandler: HookCallback = async (input, toolUseID, { signal }) => {
  const notification = input as NotificationHookInput;

  await fetch('https://hooks.slack.com/services/YOUR/WEBHOOK/URL', {
    method: 'POST',
    body: JSON.stringify({
      text: `Agent status: ${notification.message}`
    }),
    signal
  });

  return {};
};

for await (const message of query({
  prompt: "Analyze this codebase",
  options: {
    hooks: {
      Notification: [{ hooks: [notificationHandler] }]
    }
  }
})) {
  console.log(message);
}
```

## 一般的な問題を修正する

このセクションでは、一般的な問題とその解決方法について説明します。

### フックが発火しない

- フックイベント名が正しく、大文字と小文字が区別されていることを確認してください（`preToolUse`ではなく`PreToolUse`）
- マッチャーパターンがツール名と正確にマッチしていることを確認してください
- フックが`options.hooks`の正しいイベントタイプの下にあることを確認してください
- `SubagentStop`、`Stop`、`SessionStart`、`SessionEnd`、`Notification`フックの場合、マッチャーは無視されます。これらのフックはそのタイプのすべてのイベントに対して発火します。
- エージェントが [`max_turns`](https://platform.claude.com/docs/ja/agent-sdk/python#configuration-options) 制限に達した場合、フックが実行される前にセッションが終了するため、フックが発火しない可能性があります

### マッチャーが期待通りにフィルタリングしない

マッチャーは **ツール名** のみをマッチします。ファイルパスまたは他の引数でフィルタリングするには、フック内で`tool_input.file_path`をチェックします：

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // マークダウンファイル以外をスキップ
  // マークダウンファイルを処理...
};
```

### フックタイムアウト

- `HookMatcher`設定で`timeout`値を増加させます
- 3番目のコールバック引数から`AbortSignal`を使用して、TypeScriptでキャンセルを適切に処理します

### ツールが予期せずブロックされた

- すべての`PreToolUse`フックで`permissionDecision: 'deny'`の戻り値をチェックします
- フックにログを追加して、返されている`permissionDecisionReason`を確認します
- マッチャーパターンが広すぎないことを確認します（空のマッチャーはすべてのツールをマッチします）

### 変更された入力が適用されない

- `updatedInput`が`hookSpecificOutput`内にあり、トップレベルにないことを確認します：







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- 入力変更が有効になるには、`permissionDecision: 'allow'`も返す必要があります

- どのフックタイプの出力かを識別するために、`hookSpecificOutput`に`hookEventName`を含めます


### セッションフックが利用できない

`SessionStart`、`SessionEnd`、`Notification`フックはTypeScript SDKでのみ利用可能です。Python SDKはセットアップの制限により、これらのイベントをサポートしていません。

### サブエージェントパーミッションプロンプトが増加する

複数のサブエージェントを生成する場合、各サブエージェントは個別にパーミッションをリクエストする可能性があります。サブエージェントは親エージェントのパーミッションを自動的に継承しません。繰り返されるプロンプトを避けるには、`PreToolUse`フックを使用して特定のツールを自動承認するか、サブエージェントセッションに適用されるパーミッションルールを設定します。

### サブエージェントとの再帰的フックループ

サブエージェントを生成する`UserPromptSubmit`フックは、それらのサブエージェントが同じフックをトリガーする場合、無限ループを作成できます。これを防ぐには：

- フック入力でサブエージェント指標をチェックしてからサブエージェントを生成します
- `parent_tool_use_id`フィールドを使用して、既にサブエージェントコンテキストにいるかどうかを検出します
- フックをトップレベルエージェントセッションのみで実行するようにスコープします

### systemMessageが出力に表示されない

`systemMessage`フィールドはモデルが見るための会話にコンテキストを追加しますが、すべてのSDK出力モードに表示されない場合があります。フック決定をアプリケーションに表示する必要がある場合は、別途ログするか、専用の出力チャネルを使用します。

## さらに詳しく

- [パーミッション](https://platform.claude.com/docs/ja/agent-sdk/permissions)：エージェントが何ができるかを制御する
- [カスタムツール](https://platform.claude.com/docs/ja/agent-sdk/custom-tools)：エージェント機能を拡張するツールを構築する
- [TypeScript SDK リファレンス](https://platform.claude.com/docs/ja/agent-sdk/typescript)
- [Python SDK リファレンス](https://platform.claude.com/docs/ja/agent-sdk/python)

- [通知を送信する（TypeScript のみ）](https://platform.claude.com/docs/ja/agent-sdk/hooks#type-script)
- [systemMessageが出力に表示されない](https://platform.claude.com/docs/ja/agent-sdk/hooks#system-message)

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

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)