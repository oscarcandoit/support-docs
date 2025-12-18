---
url: "https://platform.claude.com/docs/zh-TW/claude_api_primer.md"
title: undefined
---

````
# Claude API 使用入門指南

本指南旨在為 Claude 提供使用 Claude API 的基礎知識。它提供了模型 ID/基本訊息 API、工具使用、串流、擴展思考的說明和範例，僅此而已。

---

# Claude API 使用入門指南

> 本指南旨在為 Claude 提供使用 Claude API 的基礎知識。它提供了模型 ID/基本訊息 API、工具使用、串流、擴展思考的說明和範例，僅此而已。

## 模型

```
最聰慧的模型：Claude Opus 4.5：claude-opus-4-5-20251101
聰慧模型：Claude Sonnet 4.5：claude-sonnet-4-5-20250929
用於快速、經濟高效的任務：Claude Haiku 4.5：claude-haiku-4-5-20251001
```

## 呼叫 API

### 基本請求和回應

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

### 多輪對話

訊息 API 是無狀態的，這意味著您始終將完整的對話歷史記錄發送到 API。您可以使用此模式隨著時間推移建立對話。早期的對話輪次不一定需要實際來自 Claude — 您可以使用合成的 `assistant` 訊息。

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

### 為 Claude 預先填充回應

您可以在輸入訊息列表的最後位置預先填充 Claude 回應的一部分。這可用於塑造 Claude 的回應。下面的範例使用 `"max_tokens": 1` 從 Claude 獲取單個多選答案。

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

### 視覺

Claude 可以在請求中讀取文字和圖像。我們支援圖像的 `base64` 和 `url` 來源類型，以及 `image/jpeg`、`image/png`、`image/gif` 和 `image/webp` 媒體類型。

```python
import anthropic
import base64
import httpx

# Option 1: Base64-encoded image
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

# Option 2: URL-referenced image
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

## 擴展思考

擴展思考有時可以幫助 Claude 完成非常困難的任務。啟用時，溫度必須設定為 1。

以下模型支援擴展思考：

- Claude Opus 4.1（`claude-opus-4-1-20250805`）
- Claude Opus 4（`claude-opus-4-20250514`）
- Claude Sonnet 4.5（`claude-sonnet-4-5-20250929`）

### 擴展思考的工作原理

啟用擴展思考時，Claude 會建立 `thinking` 內容區塊，其中輸出其內部推理。API 回應將包含 `thinking` 內容區塊，後面跟著 `text` 內容區塊。

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

# The response will contain summarized thinking blocks and text blocks
for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking summary: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

`budget_tokens` 參數決定了 Claude 允許用於其內部推理過程的最大令牌數。在 Claude 4 模型中，此限制適用於完整思考令牌，而不是摘要輸出。更大的預算可以通過為複雜問題啟用更徹底的分析來改善回應品質。一條規則：max_tokens 的值必須嚴格大於 budget_tokens 的值，以便 Claude 在思考完成後有空間寫入其回應。

## 擴展思考與工具使用

擴展思考可以與工具使用一起使用，允許 Claude 通過工具選擇和結果處理進行推理。

重要限制：

1. **工具選擇限制**：僅支援 `tool_choice: {"type": "auto"}` （預設）或 `tool_choice: {"type": "none"}`。
2. **保留思考區塊**：在工具使用期間，您必須將 `thinking` 區塊傳回 API 以供最後的助手訊息使用。

### 保留思考區塊

```python
# First request - Claude responds with thinking and tool request
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

# Extract thinking block and tool use block
thinking_block = next((block for block in response.content
                      if block.type == 'thinking'), None)
tool_use_block = next((block for block in response.content
                      if block.type == 'tool_use'), None)

# Second request - Include thinking block and tool result
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
        # Notice that the thinking_block is passed in as well as the tool_use_block\
        {"role": "assistant", "content": [thinking_block, tool_use_block]},\
        {"role": "user", "content": [{\
            "type": "tool_result",\
            "tool_use_id": tool_use_block.id,\
            "content": f"Current temperature: {weather_data['temperature']}°F"\
        }]}\
    ]
)
```

### 交錯思考

Claude 4 模型中的擴展思考與工具使用支援交錯思考，這使 Claude 能夠在工具呼叫之間進行思考。若要啟用，請將測試版標頭 `interleaved-thinking-2025-05-14` 新增到您的 API 請求。

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

使用交錯思考，且僅使用交錯思考（不是常規擴展思考），`budget_tokens` 可以超過 `max_tokens` 參數，因為在這種情況下 `budget_tokens` 代表一個助手輪次內所有思考區塊的總預算。

## 工具使用

### 指定客戶端工具

客戶端工具在 API 請求的 `tools` 頂級參數中指定。每個工具定義包括：

| 參數 | 說明 |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name` | 工具的名稱。必須符合正規表達式 `^[a-zA-Z0-9_-]{1,64}$`。 |
| `description` | 工具功能、何時應使用以及其行為方式的詳細純文字說明。 |
| `input_schema` | 定義工具預期參數的 [JSON Schema](https://json-schema.org/) 物件。 |

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

### 工具定義的最佳實踐

**提供極其詳細的說明。** 這是迄今為止影響工具效能的最重要因素。您的說明應解釋有關工具的每個細節，包括：

- 工具的功能
- 何時應使用它（以及何時不應使用）
- 每個參數的含義以及它如何影響工具的行為
- 任何重要的注意事項或限制

**考慮為複雜工具使用 `input_examples`。** 對於具有嵌套物件、可選參數或格式敏感輸入的工具，您可以使用 `input_examples` 欄位（測試版）提供具體範例。這有助於 Claude 理解預期的輸入模式。有關詳細資訊，請參閱[提供工具使用範例](/docs/zh-TW/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples)。

良好工具說明的範例：

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

## 控制 Claude 的輸出

### 強制工具使用

您可以通過在 `tool_choice` 欄位中指定工具來強制 Claude 使用特定工具：

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

使用 tool_choice 參數時，我們有四個可能的選項：

- `auto` 允許 Claude 決定是否呼叫任何提供的工具（預設）。
- `any` 告訴 Claude 它必須使用提供的工具之一。
- `tool` 允許我們強制 Claude 始終使用特定工具。
- `none` 防止 Claude 使用任何工具。

### JSON 輸出

工具不一定需要是客戶端函數 — 您可以在任何時候使用工具，只要您希望模型返回遵循提供的架構的 JSON 輸出。

### 思考鏈

使用工具時，Claude 通常會顯示其「思考鏈」，即它用來分解問題並決定使用哪些工具的逐步推理。

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

### 平行工具使用

預設情況下，Claude 可能會使用多個工具來回答使用者查詢。您可以通過設定 `disable_parallel_tool_use=true` 來停用此行為。

## 處理工具使用和工具結果內容區塊

### 處理來自客戶端工具的結果

回應將具有 `tool_use` 的 `stop_reason` 和一個或多個 `tool_use` 內容區塊，其中包括：

- `id`：此特定工具使用區塊的唯一識別碼。
- `name`：正在使用的工具的名稱。
- `input`：包含傳遞給工具的輸入的物件。

當您收到工具使用回應時，您應該：

1. 從 `tool_use` 區塊中提取 `name`、`id` 和 `input`。
2. 在您的程式碼庫中執行與該工具名稱對應的實際工具。
3. 通過發送帶有 `tool_result` 的新訊息來繼續對話：

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

### 處理 `max_tokens` 停止原因

如果 Claude 的回應在工具使用期間因達到 `max_tokens` 限制而被截斷，請使用更高的 `max_tokens` 值重試請求。

### 處理 `pause_turn` 停止原因

使用網路搜尋等伺服器工具時，API 可能會返回 `pause_turn` 停止原因。通過在後續請求中按原樣傳回暫停的回應來繼續對話。

## 疑難排解錯誤

### 工具執行錯誤

如果工具本身在執行期間拋出錯誤，請使用 `"is_error": true` 返回錯誤訊息：

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

### 無效的工具名稱

如果 Claude 嘗試使用工具無效（例如缺少必需參數），請使用工具定義中更詳細的 `description` 值重試請求。

## 串流訊息

建立訊息時，您可以設定 `"stream": true` 以使用伺服器發送事件 (SSE) 逐步串流回應。

### 使用 SDK 進行串流

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

### 事件類型

每個伺服器發送事件都包含一個命名事件類型和相關的 JSON 資料。每個串流使用以下事件流：

1. `message_start`：包含具有空 `content` 的 `Message` 物件。
2. 一系列內容區塊，每個區塊都有 `content_block_start`、一個或多個 `content_block_delta` 事件和 `content_block_stop`。
3. 一個或多個 `message_delta` 事件，表示對最終 `Message` 物件的頂級更改。
4. 最終 `message_stop` 事件。

**警告**：`message_delta` 事件的 `usage` 欄位中顯示的令牌計數是_累積的_。

### 內容區塊 delta 類型

#### 文字 delta

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### 輸入 JSON delta

對於 `tool_use` 內容區塊，delta 是_部分 JSON 字串_：

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### 思考 delta

使用擴展思考進行串流時：

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

### 基本串流請求範例

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