---
url: "https://platform.claude.com/docs/ko/claude_api_primer.md"
title: undefined
---

````
# Claude API 사용 입문서

이 가이드는 Claude API 사용의 기초를 Claude에게 제공하도록 설계되었습니다. 모델 ID/기본 메시지 API, 도구 사용, 스트리밍, 확장 사고, 그 외 다른 것은 없습니다.

---

# Claude API 사용 입문서

> 이 가이드는 Claude API 사용의 기초를 Claude에게 제공하도록 설계되었습니다. 모델 ID/기본 메시지 API, 도구 사용, 스트리밍, 확장 사고, 그 외 다른 것은 없습니다.

## 모델

```
가장 똑똑한 모델: Claude Opus 4.5: claude-opus-4-5-20251101
똑똑한 모델: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
빠르고 비용 효율적인 작업용: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## API 호출

### 기본 요청 및 응답

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

### 여러 대화 턴

Messages API는 상태 비저장이므로 항상 전체 대화 기록을 API에 보냅니다. 이 패턴을 사용하여 시간이 지남에 따라 대화를 구축할 수 있습니다. 이전 대화 턴이 반드시 Claude에서 실제로 시작될 필요는 없습니다. 합성 `assistant` 메시지를 사용할 수 있습니다.

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

### Claude의 입에 말을 넣기

입력 메시지 목록의 마지막 위치에 Claude의 응답 일부를 미리 채울 수 있습니다. 이를 사용하여 Claude의 응답을 형성할 수 있습니다. 아래 예제는 `"max_tokens": 1`을 사용하여 Claude에서 단일 객관식 답변을 얻습니다.

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

### 비전

Claude는 요청에서 텍스트와 이미지를 모두 읽을 수 있습니다. 이미지에 대해 `base64` 및 `url` 소스 유형을 모두 지원하며, `image/jpeg`, `image/png`, `image/gif` 및 `image/webp` 미디어 유형을 지원합니다.

```python
import anthropic
import base64
import httpx

# 옵션 1: Base64 인코딩된 이미지
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

# 옵션 2: URL 참조 이미지
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

## 확장 사고

확장 사고는 때때로 Claude가 매우 어려운 작업을 수행하는 데 도움이 될 수 있습니다. 활성화되면 온도를 1로 설정해야 합니다.

확장 사고는 다음 모델에서 지원됩니다:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### 확장 사고의 작동 방식

확장 사고가 켜지면 Claude는 내부 추론을 출력하는 `thinking` 콘텐츠 블록을 생성합니다. API 응답에는 `thinking` 콘텐츠 블록이 포함되고, 그 뒤에 `text` 콘텐츠 블록이 포함됩니다.

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

# 응답에는 요약된 사고 블록과 텍스트 블록이 포함됩니다
for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking summary: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

`budget_tokens` 매개변수는 Claude가 내부 추론 프로세스에 사용할 수 있는 최대 토큰 수를 결정합니다. Claude 4 모델에서 이 제한은 전체 사고 토큰에 적용되며 요약된 출력에는 적용되지 않습니다. 더 큰 예산은 복잡한 문제에 대해 더 철저한 분석을 가능하게 하여 응답 품질을 개선할 수 있습니다. 한 가지 규칙: max_tokens의 값은 budget_tokens의 값보다 엄격히 커야 하므로 Claude가 사고가 완료된 후 응답을 작성할 공간이 있습니다.

## 도구 사용과 함께 확장 사고

확장 사고는 도구 사용과 함께 사용될 수 있으므로 Claude가 도구 선택 및 결과 처리를 통해 추론할 수 있습니다.

중요한 제한 사항:

1. **도구 선택 제한**: `tool_choice: {"type": "auto"}` (기본값) 또는 `tool_choice: {"type": "none"}`만 지원합니다.
2. **사고 블록 보존**: 도구 사용 중에 마지막 어시스턴트 메시지에 대해 `thinking` 블록을 API에 다시 전달해야 합니다.

### 사고 블록 보존

```python
# 첫 번째 요청 - Claude가 사고와 도구 요청으로 응답합니다
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

# 사고 블록과 도구 사용 블록 추출
thinking_block = next((block for block in response.content
                      if block.type == 'thinking'), None)
tool_use_block = next((block for block in response.content
                      if block.type == 'tool_use'), None)

# 두 번째 요청 - 사고 블록과 도구 결과 포함
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
        # thinking_block이 tool_use_block과 함께 전달됩니다\
        {"role": "assistant", "content": [thinking_block, tool_use_block]},\
        {"role": "user", "content": [{\
            "type": "tool_result",\
            "tool_use_id": tool_use_block.id,\
            "content": f"Current temperature: {weather_data['temperature']}°F"\
        }]}\
    ]
)
```

### 인터리빙된 사고

Claude 4 모델의 도구 사용과 함께 확장 사고는 인터리빙된 사고를 지원하므로 Claude가 도구 호출 사이에 생각할 수 있습니다. 활성화하려면 API 요청에 베타 헤더 `interleaved-thinking-2025-05-14`를 추가합니다.

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

인터리빙된 사고와 인터리빙된 사고만 사용할 때(일반 확장 사고가 아님), `budget_tokens`은 `max_tokens` 매개변수를 초과할 수 있습니다. 이 경우 `budget_tokens`은 하나의 어시스턴트 턴 내의 모든 사고 블록에 걸친 총 예산을 나타냅니다.

## 도구 사용

### 클라이언트 도구 지정

클라이언트 도구는 API 요청의 `tools` 최상위 매개변수에서 지정됩니다. 각 도구 정의에는 다음이 포함됩니다:

| 매개변수       | 설명                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | 도구의 이름입니다. 정규식 `^[a-zA-Z0-9_-]{1,64}$`와 일치해야 합니다.                                 |
| `description`  | 도구가 수행하는 작업, 사용해야 할 때, 동작 방식에 대한 자세한 일반 텍스트 설명입니다. |
| `input_schema` | 도구의 예상 매개변수를 정의하는 [JSON Schema](https://json-schema.org/) 객체입니다.     |

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

### 도구 정의의 모범 사례

**매우 자세한 설명을 제공하세요.** 이것이 도구 성능에 가장 중요한 요소입니다. 설명에는 다음을 포함한 도구에 대한 모든 세부 사항이 포함되어야 합니다:

- 도구가 수행하는 작업
- 사용해야 할 때(그리고 사용하면 안 될 때)
- 각 매개변수가 의미하는 바와 도구의 동작에 어떻게 영향을 미치는지
- 중요한 주의 사항이나 제한 사항

**복잡한 도구에 `input_examples`를 사용하는 것을 고려하세요.** 중첩된 객체, 선택적 매개변수 또는 형식에 민감한 입력이 있는 도구의 경우 `input_examples` 필드(베타)를 사용하여 구체적인 예제를 제공할 수 있습니다. 이는 Claude가 예상되는 입력 패턴을 이해하는 데 도움이 됩니다. 자세한 내용은 [도구 사용 예제 제공](/docs/ko/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples)을 참조하세요.

좋은 도구 설명의 예:

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

## Claude의 출력 제어

### 도구 사용 강제

`tool_choice` 필드에서 도구를 지정하여 Claude가 특정 도구를 사용하도록 강제할 수 있습니다:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

tool_choice 매개변수로 작업할 때 네 가지 가능한 옵션이 있습니다:

- `auto`는 Claude가 제공된 도구를 호출할지 여부를 결정하도록 합니다(기본값).
- `any`는 Claude가 제공된 도구 중 하나를 사용해야 함을 알립니다.
- `tool`은 Claude가 항상 특정 도구를 사용하도록 강제합니다.
- `none`은 Claude가 도구를 사용하지 못하도록 합니다.

### JSON 출력

도구가 반드시 클라이언트 함수일 필요는 없습니다. 모델이 제공된 스키마를 따르는 JSON 출력을 반환하도록 하려면 언제든지 도구를 사용할 수 있습니다.

### 사고의 연쇄

도구를 사용할 때 Claude는 종종 "사고의 연쇄"를 표시합니다. 즉, 문제를 분해하고 사용할 도구를 결정하기 위해 사용하는 단계별 추론입니다.

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

### 병렬 도구 사용

기본적으로 Claude는 사용자 쿼리에 답하기 위해 여러 도구를 사용할 수 있습니다. `disable_parallel_tool_use=true`를 설정하여 이 동작을 비활성화할 수 있습니다.

## 도구 사용 및 도구 결과 콘텐츠 블록 처리

### 클라이언트 도구의 결과 처리

응답에는 `tool_use`의 `stop_reason`과 다음을 포함하는 하나 이상의 `tool_use` 콘텐츠 블록이 있습니다:

- `id`: 이 특정 도구 사용 블록의 고유 식별자입니다.
- `name`: 사용 중인 도구의 이름입니다.
- `input`: 도구에 전달되는 입력을 포함하는 객체입니다.

도구 사용 응답을 받으면 다음을 수행해야 합니다:

1. `tool_use` 블록에서 `name`, `id` 및 `input`을 추출합니다.
2. 해당 도구 이름에 해당하는 코드베이스에서 실제 도구를 실행합니다.
3. `tool_result`를 사용하여 새 메시지를 보내 대화를 계속합니다:

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

### `max_tokens` 중지 이유 처리

도구 사용 중 `max_tokens` 제한에 도달하여 Claude의 응답이 잘렸다면 더 높은 `max_tokens` 값으로 요청을 다시 시도합니다.

### `pause_turn` 중지 이유 처리

웹 검색과 같은 서버 도구를 사용할 때 API가 `pause_turn` 중지 이유를 반환할 수 있습니다. 일시 중지된 응답을 그대로 후속 요청에 전달하여 대화를 계속합니다.

## 오류 문제 해결

### 도구 실행 오류

도구 자체가 실행 중에 오류를 발생시키면 `"is_error": true`를 사용하여 오류 메시지를 반환합니다:

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

### 잘못된 도구 이름

Claude의 도구 사용 시도가 유효하지 않은 경우(예: 필수 매개변수 누락), 도구 정의에서 더 자세한 `description` 값으로 요청을 다시 시도합니다.

## 메시지 스트리밍

메시지를 생성할 때 `"stream": true`를 설정하여 서버 전송 이벤트(SSE)를 사용하여 응답을 증분식으로 스트리밍할 수 있습니다.

### SDK를 사용한 스트리밍

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

### 이벤트 유형

각 서버 전송 이벤트에는 명명된 이벤트 유형과 관련 JSON 데이터가 포함됩니다. 각 스트림은 다음 이벤트 흐름을 사용합니다:

1. `message_start`: 빈 `content`를 가진 `Message` 객체를 포함합니다.
2. 일련의 콘텐츠 블록, 각각 `content_block_start`, 하나 이상의 `content_block_delta` 이벤트 및 `content_block_stop`.
3. 하나 이상의 `message_delta` 이벤트, 최종 `Message` 객체에 대한 최상위 변경을 나타냅니다.
4. 최종 `message_stop` 이벤트입니다.

**경고**: `message_delta` 이벤트의 `usage` 필드에 표시된 토큰 수는 _누적_입니다.

### 콘텐츠 블록 델타 유형

#### 텍스트 델타

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### 입력 JSON 델타

`tool_use` 콘텐츠 블록의 경우 델타는 _부분 JSON 문자열_입니다:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### 사고 델타

스트리밍과 함께 확장 사고를 사용할 때:

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

### 기본 스트리밍 요청 예제

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