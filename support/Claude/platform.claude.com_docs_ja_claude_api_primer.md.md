---
url: "https://platform.claude.com/docs/ja/claude_api_primer.md"
title: undefined
---

````
# Claude API 使用入門

このガイドは、Claude API の基本的な使い方を Claude に教えるために設計されています。モデル ID、基本的なメッセージ API、ツール使用、ストリーミング、拡張思考の説明と例を提供します。

---

# Claude API 使用入門

> このガイドは、Claude API の基本的な使い方を Claude に教えるために設計されています。モデル ID、基本的なメッセージ API、ツール使用、ストリーミング、拡張思考の説明と例を提供します。

## モデル

```
最も高性能なモデル: Claude Opus 4.5: claude-opus-4-5-20251101
高性能モデル: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
高速で費用効率的なタスク向け: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## API の呼び出し

### 基本的なリクエストとレスポンス

```python
import anthropic
import os

message = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY")).messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[\
        {"role": "user", "content": "Hello, Claude"}\
    ]
)
print(message)
```

```json
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [\
    {\
      "type": "text",\
      "text": "Hello!"\
    }\
  ],
  "model": "claude-sonnet-4-5",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "usage": {
    "input_tokens": 12,
    "output_tokens": 6
  }
}
```

### 複数の会話ターン

Messages API はステートレスです。つまり、常に完全な会話履歴を API に送信します。このパターンを使用して、時間をかけて会話を構築できます。以前の会話ターンは必ずしも Claude から実際に発生する必要はありません。合成された `assistant` メッセージを使用できます。

```python
import anthropic

message = anthropic.Anthropic().messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[\
        {"role": "user", "content": "Hello, Claude"},\
        {"role": "assistant", "content": "Hello!"},\
        {"role": "user", "content": "Can you describe LLMs to me?"}\
    ],
)
print(message)
```

### Claude の口に言葉を入れる

入力メッセージリストの最後の位置に Claude のレスポンスの一部を事前入力できます。これを使用して Claude のレスポンスを形作ることができます。以下の例では、`"max_tokens": 1` を使用して Claude から単一の多肢選択回答を取得します。

```python
message = anthropic.Anthropic().messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1,
    messages=[\
        {"role": "user", "content": "What is latin for Ant? (A) Apoidea, (B) Rhopalocera, (C) Formicidae"},\
        {"role": "assistant", "content": "The answer is ("}\
    ]
)
```

### ビジョン

Claude はリクエスト内のテキストと画像の両方を読むことができます。画像の `base64` と `url` ソースタイプ、および `image/jpeg`、`image/png`、`image/gif`、`image/webp` メディアタイプをサポートしています。

```python
import anthropic
import base64
import httpx

# オプション 1: Base64 エンコードされた画像
image_url = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg"
image_media_type = "image/jpeg"
image_data = base64.standard_b64encode(httpx.get(image_url).content).decode("utf-8")

message = anthropic.Anthropic().messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "image",\
                    "source": {\
                        "type": "base64",\
                        "media_type": image_media_type,\
                        "data": image_data,\
                    },\
                },\
                {\
                    "type": "text",\
                    "text": "What is in the above image?"\
                }\
            ],\
        }\
    ],
)

# オプション 2: URL 参照画像
message_from_url = anthropic.Anthropic().messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[\
        {\
            "role": "user",\
            "content": [\
                {\
                    "type": "image",\
                    "source": {\
                        "type": "url",\
                        "url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg",\
                    },\
                },\
                {\
                    "type": "text",\
                    "text": "What is in the above image?"\
                }\
            ],\
        }\
    ],
)
```

## 拡張思考

拡張思考は、Claude が非常に難しいタスクを処理するのに役立つ場合があります。有効にすると、温度を 1 に設定する必要があります。

拡張思考は以下のモデルでサポートされています:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### 拡張思考の仕組み

拡張思考が有効になると、Claude は内部推論を出力する `thinking` コンテンツブロックを作成します。API レスポンスには `thinking` コンテンツブロックが含まれ、その後に `text` コンテンツブロックが続きます。

```python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{\
        "role": "user",\
        "content": "Are there an infinite number of prime numbers such that n mod 4 == 3?"\
    }]
)

# レスポンスには要約された思考ブロックとテキストブロックが含まれます
for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking summary: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

`budget_tokens` パラメータは、Claude が内部推論プロセスに使用できる最大トークン数を決定します。Claude 4 モデルでは、この制限は完全な思考トークンに適用され、要約された出力には適用されません。より大きな予算は、複雑な問題に対してより徹底的な分析を可能にすることで、レスポンスの品質を向上させることができます。1 つのルール: max_tokens の値は budget_tokens の値より厳密に大きくする必要があります。これにより、Claude は思考が完了した後、レスポンスを書く余地があります。

## ツール使用を伴う拡張思考

拡張思考はツール使用と一緒に使用でき、Claude がツール選択と結果処理を通じて推論できるようになります。

重要な制限事項:

1. **ツール選択の制限**: `tool_choice: {"type": "auto"}` (デフォルト) または `tool_choice: {"type": "none"}` のみをサポートします。
2. **思考ブロックの保持**: ツール使用中に、最後のアシスタント メッセージの `thinking` ブロックを API に渡す必要があります。

### 思考ブロックの保持

```python
# 最初のリクエスト - Claude は思考とツール要求で応答します
response = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    tools=[weather_tool],
    messages=[\
        {"role": "user", "content": "What's the weather in Paris?"}\
    ]
)

# 思考ブロックとツール使用ブロックを抽出します
thinking_block = next((block for block in response.content
                      if block.type == 'thinking'), None)
tool_use_block = next((block for block in response.content
                      if block.type == 'tool_use'), None)

# 2 番目のリクエスト - 思考ブロックとツール結果を含めます
continuation = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    tools=[weather_tool],
    messages=[\
        {"role": "user", "content": "What's the weather in Paris?"},\
        # thinking_block が tool_use_block と同様に渡されることに注意してください\
        {"role": "assistant", "content": [thinking_block, tool_use_block]},\
        {"role": "user", "content": [{\
            "type": "tool_result",\
            "tool_use_id": tool_use_block.id,\
            "content": f"Current temperature: {weather_data['temperature']}°F"\
        }]}\
    ]
)
```

### インターリーブされた思考

Claude 4 モデルでのツール使用を伴う拡張思考は、インターリーブされた思考をサポートしており、Claude がツール呼び出し間で考えることができます。有効にするには、ベータ ヘッダー `interleaved-thinking-2025-05-14` を API リクエストに追加します。

```python
response = client.beta.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    tools=[calculator_tool, database_tool],
    messages=[{\
        "role": "user",\
        "content": "What's the total revenue if we sold 150 units of product A at $50 each?"\
    }],
    betas=["interleaved-thinking-2025-05-14"]
)
```

インターリーブされた思考を使用する場合、そして **インターリーブされた思考のみ** (通常の拡張思考ではなく)、`budget_tokens` は `max_tokens` パラメータを超えることができます。この場合、`budget_tokens` は 1 つのアシスタント ターン内のすべての思考ブロック全体の合計予算を表します。

## ツール使用

### クライアント ツールの指定

クライアント ツールは API リクエストの `tools` トップレベル パラメータで指定されます。各ツール定義には以下が含まれます:

| パラメータ      | 説明                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | ツールの名前。正規表現 `^[a-zA-Z0-9_-]{1,64}$` に一致する必要があります。                                 |
| `description`  | ツールが何をするか、いつ使用すべきか、どのように動作するかについての詳細なプレーンテキスト説明。 |
| `input_schema` | ツールの予想されるパラメータを定義する [JSON Schema](https://json-schema.org/) オブジェクト。     |

```json
{
  "name": "get_weather",
  "description": "Get the current weather in a given location",
  "input_schema": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "The city and state, e.g. San Francisco, CA"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "The unit of temperature, either 'celsius' or 'fahrenheit'"
      }
    },
    "required": ["location"]
  }
}
```

### ツール定義のベストプラクティス

**非常に詳細な説明を提供してください。** これはツール パフォーマンスの最も重要な要因です。説明には以下のすべての詳細を含める必要があります:

- ツールが何をするか
- いつ使用すべきか (そしていつ使用すべきでないか)
- 各パラメータが何を意味し、ツールの動作にどのように影響するか
- 重要な注意事項または制限事項

**複雑なツールには `input_examples` の使用を検討してください。** ネストされたオブジェクト、オプション パラメータ、または形式に敏感な入力を持つツールの場合、`input_examples` フィールド (ベータ) を使用して具体的な例を提供できます。これにより、Claude は予想される入力パターンを理解できます。詳細については、[ツール使用例の提供](/docs/ja/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) を参照してください。

良いツール説明の例:

```json
{
  "name": "get_stock_price",
  "description": "Retrieves the current stock price for a given ticker symbol. The ticker symbol must be a valid symbol for a publicly traded company on a major US stock exchange like NYSE or NASDAQ. The tool will return the latest trade price in USD. It should be used when the user asks about the current or most recent price of a specific stock. It will not provide any other information about the stock or company.",
  "input_schema": {
    "type": "object",
    "properties": {
      "ticker": {
        "type": "string",
        "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."
      }
    },
    "required": ["ticker"]
  }
}
```

## Claude の出力の制御

### ツール使用の強制

`tool_choice` フィールドでツールを指定することで、Claude に特定のツールを使用するよう強制できます:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

tool_choice パラメータを使用する場合、4 つの可能なオプションがあります:

- `auto` は Claude が提供されたツールを呼び出すかどうかを決定することを許可します (デフォルト)。
- `any` は Claude が提供されたツールの 1 つを使用する必要があることを示します。
- `tool` は Claude に常に特定のツールを使用するよう強制することを許可します。
- `none` は Claude がツールを使用することを防ぎます。

### JSON 出力

ツールは必ずしもクライアント関数である必要はありません。モデルが提供されたスキーマに従う JSON 出力を返すようにしたい場合はいつでも、ツールを使用できます。

### 思考の連鎖

ツールを使用する場合、Claude はしばしば「思考の連鎖」を示します。つまり、問題を分解し、どのツールを使用するかを決定するために使用するステップバイステップの推論です。

```json
{
  "role": "assistant",
  "content": [\
    {\
      "type": "text",\
      "text": "<thinking>To answer this question, I will: 1. Use the get_weather tool to get the current weather in San Francisco. 2. Use the get_time tool to get the current time in the America/Los_Angeles timezone, which covers San Francisco, CA.</thinking>"\
    },\
    {\
      "type": "tool_use",\
      "id": "toolu_01A09q90qw90lq917835lq9",\
      "name": "get_weather",\
      "input": { "location": "San Francisco, CA" }\
    }\
  ]
}
```

### 並列ツール使用

デフォルトでは、Claude はユーザー クエリに答えるために複数のツールを使用する場合があります。`disable_parallel_tool_use=true` を設定することで、この動作を無効にできます。

## ツール使用とツール結果コンテンツ ブロックの処理

### クライアント ツールからの結果の処理

レスポンスは `tool_use` の `stop_reason` と、以下を含む 1 つ以上の `tool_use` コンテンツ ブロックを持ちます:

- `id`: この特定のツール使用ブロックの一意の識別子。
- `name`: 使用されているツールの名前。
- `input`: ツールに渡される入力を含むオブジェクト。

ツール使用レスポンスを受け取ったら、以下を実行する必要があります:

1. `tool_use` ブロックから `name`、`id`、`input` を抽出します。
2. コードベース内のそのツール名に対応する実際のツールを実行します。
3. `tool_result` を含む新しいメッセージを送信して会話を続けます:

```json
{
  "role": "user",
  "content": [\
    {\
      "type": "tool_result",\
      "tool_use_id": "toolu_01A09q90qw90lq917835lq9",\
      "content": "15 degrees"\
    }\
  ]
}
```

### `max_tokens` 停止理由の処理

Claude のレスポンスが `max_tokens` 制限に達したためにツール使用中に切断された場合、より高い `max_tokens` 値でリクエストを再試行してください。

### `pause_turn` 停止理由の処理

Web 検索などのサーバー ツールを使用する場合、API は `pause_turn` 停止理由を返す場合があります。後続のリクエストで一時停止されたレスポンスをそのまま渡して会話を続けます。

## エラーのトラブルシューティング

### ツール実行エラー

ツール自体が実行中にエラーをスローする場合、`"is_error": true` でエラー メッセージを返します:

```json
{
  "role": "user",
  "content": [\
    {\
      "type": "tool_result",\
      "tool_use_id": "toolu_01A09q90qw90lq917835lq9",\
      "content": "ConnectionError: the weather service API is not available (HTTP 500)",\
      "is_error": true\
    }\
  ]
}
```

### 無効なツール名

Claude のツール使用の試みが無効な場合 (例: 必須パラメータが不足している)、ツール定義でより詳細な `description` 値を使用してリクエストを再度試行してください。

## メッセージのストリーミング

メッセージを作成するときに、`"stream": true` を設定して、サーバー送信イベント (SSE) を使用してレスポンスを段階的にストリーミングできます。

### SDK でのストリーミング

```python
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}],
    model="claude-sonnet-4-5",
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

### イベント タイプ

各サーバー送信イベントには、名前付きイベント タイプと関連する JSON データが含まれます。各ストリームは以下のイベント フローを使用します:

1. `message_start`: 空の `content` を持つ `Message` オブジェクトを含みます。
2. 一連のコンテンツ ブロック。各ブロックは `content_block_start`、1 つ以上の `content_block_delta` イベント、および `content_block_stop` を含みます。
3. 1 つ以上の `message_delta` イベント。最終的な `Message` オブジェクトへのトップレベルの変更を示します。
4. 最終的な `message_stop` イベント。

**警告**: `message_delta` イベントの `usage` フィールドに表示されるトークン数は **累積的です**。

### コンテンツ ブロック デルタ タイプ

#### テキスト デルタ

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### 入力 JSON デルタ

`tool_use` コンテンツ ブロックの場合、デルタは **部分的な JSON 文字列** です:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### 思考デルタ

拡張思考をストリーミングで使用する場合:

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": {
    "type": "thinking_delta",
    "thinking": "Let me solve this step by step..."
  }
}
```

### 基本的なストリーミング リクエストの例

```json
event: message_start
data: {"type": "message_start", "message": {"id": "msg_1nZdL29xx5MUA1yADyHTEsnR8uuvGzszyY", "type": "message", "role": "assistant", "content": [], "model": "claude-sonnet-4-5", "stop_reason": null, "stop_sequence": null, "usage": {"input_tokens": 25, "output_tokens": 1}}}

event: content_block_start
data: {"type": "content_block_start", "index": 0, "content_block": {"type": "text", "text": ""}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "text_delta", "text": "Hello"}}

event: content_block_delta
data: {"type": "content_block_delta", "index": 0, "delta": {"type": "text_delta", "text": "!"}}

event: content_block_stop
data: {"type": "content_block_stop", "index": 0}

event: message_delta
data: {"type": "message_delta", "delta": {"stop_reason": "end_turn", "stop_sequence":null}, "usage": {"output_tokens": 15}}

event: message_stop
data: {"type": "message_stop"}
```
````