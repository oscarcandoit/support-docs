---
url: "https://platform.claude.com/docs/ru/claude_api_primer.md"
title: undefined
---

````
# Руководство по использованию API для Claude

Это руководство предназначено для ознакомления Claude с основами использования API Claude. Оно содержит объяснения и примеры идентификаторов моделей/базового API сообщений, использования инструментов, потоковой передачи, расширенного мышления и ничего больше.

---

# Руководство по использованию API для Claude

> Это руководство предназначено для ознакомления Claude с основами использования API Claude. Оно содержит объяснения и примеры идентификаторов моделей/базового API сообщений, использования инструментов, потоковой передачи, расширенного мышления и ничего больше.

## Модели

```
Самая умная модель: Claude Opus 4.5: claude-opus-4-5-20251101
Умная модель: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Для быстрых и экономичных задач: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## Вызов API

### Базовый запрос и ответ

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

### Несколько диалоговых ходов

API сообщений является без состояния, что означает, что вы всегда отправляете полную историю диалога в API. Вы можете использовать этот паттерн для построения диалога с течением времени. Более ранние диалоговые ходы не обязательно должны исходить от Claude — вы можете использовать синтетические сообщения `assistant`.

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

### Вкладывание слов в уста Claude

Вы можете предварительно заполнить часть ответа Claude в последней позиции списка входных сообщений. Это можно использовать для формирования ответа Claude. В примере ниже используется `"max_tokens": 1` для получения одного ответа с множественным выбором от Claude.

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

### Зрение

Claude может читать как текст, так и изображения в запросах. Мы поддерживаем оба типа источников `base64` и `url` для изображений, а также типы мультимедиа `image/jpeg`, `image/png`, `image/gif` и `image/webp`.

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

## Расширенное мышление

Расширенное мышление иногда может помочь Claude с очень сложными задачами. Когда оно включено, температура должна быть установлена на 1.

Расширенное мышление поддерживается в следующих моделях:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Как работает расширенное мышление

Когда расширенное мышление включено, Claude создает блоки содержимого `thinking`, где выводит свои внутренние рассуждения. Ответ API будет включать блоки содержимого `thinking`, за которыми следуют блоки содержимого `text`.

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

Параметр `budget_tokens` определяет максимальное количество токенов, которые Claude может использовать для своего внутреннего процесса рассуждения. В моделях Claude 4 это ограничение применяется к полным токенам мышления, а не к сокращенному выводу. Большие бюджеты могут улучшить качество ответа, позволяя более тщательный анализ сложных проблем. Одно правило: значение max_tokens должно быть строго больше значения budget_tokens, чтобы Claude имел место для написания своего ответа после завершения мышления.

## Расширенное мышление с использованием инструментов

Расширенное мышление можно использовать вместе с использованием инструментов, позволяя Claude рассуждать о выборе инструментов и обработке результатов.

Важные ограничения:

1. **Ограничение выбора инструмента**: Поддерживает только `tool_choice: {"type": "auto"}` (по умолчанию) или `tool_choice: {"type": "none"}`.
2. **Сохранение блоков мышления**: Во время использования инструментов вы должны передать блоки `thinking` обратно в API для последнего сообщения помощника.

### Сохранение блоков мышления

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

### Чередующееся мышление

Расширенное мышление с использованием инструментов в моделях Claude 4 поддерживает чередующееся мышление, которое позволяет Claude думать между вызовами инструментов. Чтобы включить, добавьте заголовок бета-версии `interleaved-thinking-2025-05-14` к вашему запросу API.

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

С чередующимся мышлением и ТОЛЬКО с чередующимся мышлением (не обычным расширенным мышлением), `budget_tokens` может превышать параметр `max_tokens`, так как `budget_tokens` в этом случае представляет общий бюджет для всех блоков мышления в одном ходу помощника.

## Использование инструментов

### Указание инструментов клиента

Инструменты клиента указываются в параметре `tools` верхнего уровня запроса API. Каждое определение инструмента включает:

| Параметр       | Описание                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | Имя инструмента. Должно соответствовать регулярному выражению `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Подробное описание на простом языке того, что делает инструмент, когда его следует использовать и как он ведет себя. |
| `input_schema` | Объект [JSON Schema](https://json-schema.org/), определяющий ожидаемые параметры для инструмента.     |

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

### Лучшие практики для определений инструментов

**Предоставляйте чрезвычайно подробные описания.** Это безусловно наиболее важный фактор в производительности инструмента. Ваши описания должны объяснять каждую деталь инструмента, включая:

- Что делает инструмент
- Когда его следует использовать (и когда не следует)
- Что означает каждый параметр и как он влияет на поведение инструмента
- Любые важные предостережения или ограничения

**Рассмотрите использование `input_examples` для сложных инструментов.** Для инструментов с вложенными объектами, необязательными параметрами или чувствительными к формату входными данными вы можете предоставить конкретные примеры, используя поле `input_examples` (бета-версия). Это помогает Claude понять ожидаемые паттерны входных данных. Подробнее см. в разделе [Предоставление примеров использования инструментов](/docs/ru/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples).

Пример хорошего описания инструмента:

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

## Управление выводом Claude

### Принудительное использование инструмента

Вы можете заставить Claude использовать конкретный инструмент, указав инструмент в поле `tool_choice`:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

При работе с параметром tool_choice у нас есть четыре возможных варианта:

- `auto` позволяет Claude решить, использовать ли какие-либо предоставленные инструменты или нет (по умолчанию).
- `any` говорит Claude, что он должен использовать один из предоставленных инструментов.
- `tool` позволяет нам заставить Claude всегда использовать конкретный инструмент.
- `none` предотвращает использование Claude любых инструментов.

### Вывод JSON

Инструменты не обязательно должны быть функциями клиента — вы можете использовать инструменты в любое время, когда хотите, чтобы модель возвращала вывод JSON, который соответствует предоставленной схеме.

### Цепочка мышления

При использовании инструментов Claude часто показывает свою "цепочку мышления", то есть пошаговое рассуждение, которое оно использует для разбиения проблемы и решения, какие инструменты использовать.

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

### Параллельное использование инструментов

По умолчанию Claude может использовать несколько инструментов для ответа на запрос пользователя. Вы можете отключить это поведение, установив `disable_parallel_tool_use=true`.

## Обработка блоков содержимого использования инструментов и результатов инструментов

### Обработка результатов от инструментов клиента

Ответ будет иметь `stop_reason` равный `tool_use` и один или несколько блоков содержимого `tool_use`, которые включают:

- `id`: Уникальный идентификатор для этого конкретного блока использования инструмента.
- `name`: Имя используемого инструмента.
- `input`: Объект, содержащий входные данные, передаваемые инструменту.

Когда вы получаете ответ об использовании инструмента, вы должны:

1. Извлечь `name`, `id` и `input` из блока `tool_use`.
2. Запустить фактический инструмент в вашей кодовой базе, соответствующий этому имени инструмента.
3. Продолжить диалог, отправив новое сообщение с `tool_result`:

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

### Обработка причины остановки `max_tokens`

Если ответ Claude обрезан из-за достижения лимита `max_tokens` во время использования инструмента, повторите запрос с более высоким значением `max_tokens`.

### Обработка причины остановки `pause_turn`

При использовании серверных инструментов, таких как веб-поиск, API может вернуть причину остановки `pause_turn`. Продолжите диалог, передав приостановленный ответ как есть в последующем запросе.

## Устранение неполадок ошибок

### Ошибка выполнения инструмента

Если сам инструмент выбрасывает ошибку во время выполнения, верните сообщение об ошибке с `"is_error": true`:

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

### Неверное имя инструмента

Если попытка Claude использовать инструмент неверна (например, отсутствуют обязательные параметры), повторите запрос с более подробными значениями `description` в определениях инструментов.

## Потоковая передача сообщений

При создании сообщения вы можете установить `"stream": true` для постепенной потоковой передачи ответа с использованием событий, отправляемых сервером (SSE).

### Потоковая передача с SDK

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

### Типы событий

Каждое событие, отправляемое сервером, включает именованный тип события и связанные данные JSON. Каждый поток использует следующий поток событий:

1. `message_start`: содержит объект `Message` с пустым `content`.
2. Серия блоков содержимого, каждый с `content_block_start`, одним или несколькими событиями `content_block_delta` и `content_block_stop`.
3. Одно или несколько событий `message_delta`, указывающих на изменения верхнего уровня в финальном объекте `Message`.
4. Финальное событие `message_stop`.

**Предупреждение**: Количество токенов, показанное в поле `usage` события `message_delta`, является _кумулятивным_.

### Типы дельта блоков содержимого

#### Текстовая дельта

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Дельта входного JSON

Для блоков содержимого `tool_use` дельты являются _частичными строками JSON_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Дельта мышления

При использовании расширенного мышления с потоковой передачей:

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

### Пример базового запроса потоковой передачи

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