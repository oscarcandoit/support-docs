---
url: "https://platform.claude.com/docs/de/claude_api_primer.md"
title: undefined
---

````
# API-Verwendungsleitfaden für Claude

Dieser Leitfaden soll Claude die Grundlagen der Verwendung der Claude API vermitteln. Er bietet Erklärungen und Beispiele für Modell-IDs/die grundlegende Messages API, Tool-Verwendung, Streaming, erweitertes Denken und nichts anderes.

---

# API-Verwendungsleitfaden für Claude

> Dieser Leitfaden soll Claude die Grundlagen der Verwendung der Claude API vermitteln. Er bietet Erklärungen und Beispiele für Modell-IDs/die grundlegende Messages API, Tool-Verwendung, Streaming, erweitertes Denken und nichts anderes.

## Modelle

```
Intelligentestes Modell: Claude Opus 4.5: claude-opus-4-5-20251101
Intelligentes Modell: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Für schnelle, kostengünstige Aufgaben: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## API aufrufen

### Grundlegende Anfrage und Antwort

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

### Mehrere Gesprächsrunden

Die Messages API ist zustandslos, was bedeutet, dass Sie immer die vollständige Gesprächshistorie an die API senden. Sie können dieses Muster verwenden, um ein Gespräch im Laufe der Zeit aufzubauen. Frühere Gesprächsrunden müssen nicht unbedingt tatsächlich von Claude stammen – Sie können synthetische `assistant`-Nachrichten verwenden.

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

### Claude Worte in den Mund legen

Sie können einen Teil von Claudes Antwort an der letzten Position der Eingabenachrichtenliste vorausfüllen. Dies kann verwendet werden, um Claudes Antwort zu beeinflussen. Das folgende Beispiel verwendet `"max_tokens": 1`, um eine einzelne Multiple-Choice-Antwort von Claude zu erhalten.

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

### Vision

Claude kann sowohl Text als auch Bilder in Anfragen lesen. Wir unterstützen sowohl `base64`- als auch `url`-Quellentypen für Bilder und die Medientypen `image/jpeg`, `image/png`, `image/gif` und `image/webp`.

```python
import anthropic
import base64
import httpx

# Option 1: Base64-codiertes Bild
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

# Option 2: URL-referenziertes Bild
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

## Erweitertes Denken

Erweitertes Denken kann Claude manchmal bei sehr schwierigen Aufgaben helfen. Wenn es aktiviert ist, muss die Temperatur auf 1 gesetzt werden.

Erweitertes Denken wird in den folgenden Modellen unterstützt:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Wie erweitertes Denken funktioniert

Wenn erweitertes Denken aktiviert ist, erstellt Claude `thinking`-Inhaltsblöcke, in denen es seine interne Argumentation ausgibt. Die API-Antwort enthält `thinking`-Inhaltsblöcke, gefolgt von `text`-Inhaltsblöcken.

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

# Die Antwort enthält zusammengefasste Thinking-Blöcke und Text-Blöcke
for block in response.content:
    if block.type == "thinking":
        print(f"\nThinking summary: {block.thinking}")
    elif block.type == "text":
        print(f"\nResponse: {block.text}")
```

Der Parameter `budget_tokens` bestimmt die maximale Anzahl von Token, die Claude für seinen internen Denkprozess verwenden darf. Bei Claude 4-Modellen gilt diese Grenze für vollständige Thinking-Token und nicht für die zusammengefasste Ausgabe. Größere Budgets können die Antwortqualität verbessern, indem sie eine gründlichere Analyse für komplexe Probleme ermöglichen. Eine Regel: Der Wert von max_tokens muss streng größer sein als der Wert von budget_tokens, damit Claude Platz für seine Antwort nach Abschluss des Denkens hat.

## Erweitertes Denken mit Tool-Verwendung

Erweitertes Denken kann zusammen mit Tool-Verwendung verwendet werden, was Claude ermöglicht, die Werkzeugauswahl und Ergebnisverarbeitung zu durchdenken.

Wichtige Einschränkungen:

1. **Tool-Choice-Einschränkung**: Unterstützt nur `tool_choice: {"type": "auto"}` (Standard) oder `tool_choice: {"type": "none"}`.
2. **Bewahrung von Thinking-Blöcken**: Während der Tool-Verwendung müssen Sie `thinking`-Blöcke für die letzte Assistant-Nachricht an die API zurückgeben.

### Bewahrung von Thinking-Blöcken

```python
# Erste Anfrage - Claude antwortet mit Thinking und Tool-Anfrage
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

# Thinking-Block und Tool-Use-Block extrahieren
thinking_block = next((block for block in response.content
                      if block.type == 'thinking'), None)
tool_use_block = next((block for block in response.content
                      if block.type == 'tool_use'), None)

# Zweite Anfrage - Thinking-Block und Tool-Ergebnis einschließen
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
        # Beachten Sie, dass der thinking_block zusammen mit dem tool_use_block übergeben wird\
        {"role": "assistant", "content": [thinking_block, tool_use_block]},\
        {"role": "user", "content": [{\
            "type": "tool_result",\
            "tool_use_id": tool_use_block.id,\
            "content": f"Current temperature: {weather_data['temperature']}°F"\
        }]}\
    ]
)
```

### Verschachteltes Denken

Erweitertes Denken mit Tool-Verwendung in Claude 4-Modellen unterstützt verschachteltes Denken, das Claude ermöglicht, zwischen Tool-Aufrufen zu denken. Um dies zu aktivieren, fügen Sie den Beta-Header `interleaved-thinking-2025-05-14` zu Ihrer API-Anfrage hinzu.

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

Mit verschachteltem Denken und NUR mit verschachteltem Denken (nicht mit regulärem erweitertem Denken) kann `budget_tokens` den Parameter `max_tokens` überschreiten, da `budget_tokens` in diesem Fall das Gesamtbudget über alle Thinking-Blöcke innerhalb einer Assistant-Runde darstellt.

## Tool-Verwendung

### Client-Tools angeben

Client-Tools werden im Parameter `tools` auf oberster Ebene der API-Anfrage angegeben. Jede Tool-Definition umfasst:

| Parameter      | Beschreibung                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | Der Name des Tools. Muss dem Regex `^[a-zA-Z0-9_-]{1,64}$` entsprechen.                                 |
| `description`  | Eine detaillierte Klartextbeschreibung, was das Tool tut, wann es verwendet werden sollte und wie es sich verhält. |
| `input_schema` | Ein [JSON Schema](https://json-schema.org/)-Objekt, das die erwarteten Parameter für das Tool definiert.     |

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

### Best Practices für Tool-Definitionen

**Bieten Sie äußerst detaillierte Beschreibungen.** Dies ist bei weitem der wichtigste Faktor für die Tool-Leistung. Ihre Beschreibungen sollten jedes Detail über das Tool erklären, einschließlich:

- Was das Tool tut
- Wann es verwendet werden sollte (und wann nicht)
- Was jeder Parameter bedeutet und wie er das Verhalten des Tools beeinflusst
- Alle wichtigen Vorbehalte oder Einschränkungen

**Erwägen Sie die Verwendung von `input_examples` für komplexe Tools.** Für Tools mit verschachtelten Objekten, optionalen Parametern oder formatempfindlichen Eingaben können Sie konkrete Beispiele mit dem Feld `input_examples` (Beta) bereitstellen. Dies hilft Claude, erwartete Eingabemuster zu verstehen. Siehe [Bereitstellung von Tool-Use-Beispielen](/docs/de/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) für Details.

Beispiel einer guten Tool-Beschreibung:

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

## Claudes Ausgabe steuern

### Tool-Verwendung erzwingen

Sie können Claude zwingen, ein bestimmtes Tool zu verwenden, indem Sie das Tool im Feld `tool_choice` angeben:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Bei der Arbeit mit dem Parameter tool_choice haben wir vier mögliche Optionen:

- `auto` ermöglicht Claude zu entscheiden, ob bereitgestellte Tools aufgerufen werden sollen oder nicht (Standard).
- `any` teilt Claude mit, dass es eines der bereitgestellten Tools verwenden muss.
- `tool` ermöglicht es uns, Claude zu zwingen, immer ein bestimmtes Tool zu verwenden.
- `none` verhindert, dass Claude Tools verwendet.

### JSON-Ausgabe

Tools müssen nicht unbedingt Client-Funktionen sein – Sie können Tools jederzeit verwenden, wenn Sie möchten, dass das Modell JSON-Ausgabe zurückgibt, die einem bereitgestellten Schema entspricht.

### Gedankenkette

Bei der Verwendung von Tools zeigt Claude oft seine „Gedankenkette", d. h. die schrittweise Argumentation, die es verwendet, um das Problem zu zerlegen und zu entscheiden, welche Tools verwendet werden sollen.

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

### Parallele Tool-Verwendung

Standardmäßig kann Claude mehrere Tools verwenden, um eine Benutzerabfrage zu beantworten. Sie können dieses Verhalten deaktivieren, indem Sie `disable_parallel_tool_use=true` setzen.

## Umgang mit Tool-Use- und Tool-Result-Inhaltsblöcken

### Umgang mit Ergebnissen von Client-Tools

Die Antwort hat einen `stop_reason` von `tool_use` und einen oder mehrere `tool_use`-Inhaltsblöcke, die Folgendes enthalten:

- `id`: Ein eindeutiger Bezeichner für diesen bestimmten Tool-Use-Block.
- `name`: Der Name des verwendeten Tools.
- `input`: Ein Objekt, das die an das Tool übergebene Eingabe enthält.

Wenn Sie eine Tool-Use-Antwort erhalten, sollten Sie:

1. Den `name`, `id` und `input` aus dem `tool_use`-Block extrahieren.
2. Das tatsächliche Tool in Ihrer Codebasis ausführen, das diesem Tool-Namen entspricht.
3. Das Gespräch fortsetzen, indem Sie eine neue Nachricht mit einem `tool_result` senden:

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

### Umgang mit dem `max_tokens`-Stop-Grund

Wenn Claudes Antwort aufgrund des Erreichens des `max_tokens`-Limits während der Tool-Verwendung unterbrochen wird, wiederholen Sie die Anfrage mit einem höheren `max_tokens`-Wert.

### Umgang mit dem `pause_turn`-Stop-Grund

Bei Verwendung von Server-Tools wie Web-Suche kann die API einen `pause_turn`-Stop-Grund zurückgeben. Setzen Sie das Gespräch fort, indem Sie die unterbrochene Antwort in einer nachfolgenden Anfrage unverändert zurückgeben.

## Fehlerbehebung

### Tool-Ausführungsfehler

Wenn das Tool selbst während der Ausführung einen Fehler auslöst, geben Sie die Fehlermeldung mit `"is_error": true` zurück:

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

### Ungültiger Tool-Name

Wenn Claudes versuchte Verwendung eines Tools ungültig ist (z. B. fehlende erforderliche Parameter), versuchen Sie die Anfrage erneut mit detaillierteren `description`-Werten in Ihren Tool-Definitionen.

## Streaming-Nachrichten

Beim Erstellen einer Nachricht können Sie `"stream": true` setzen, um die Antwort inkrementell mit Server-Sent Events (SSE) zu streamen.

### Streaming mit SDKs

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

### Ereignistypen

Jedes Server-Sent Event enthält einen benannten Ereignistyp und zugehörige JSON-Daten. Jeder Stream verwendet den folgenden Ereignisfluss:

1. `message_start`: enthält ein `Message`-Objekt mit leerem `content`.
2. Eine Reihe von Inhaltsblöcken, jeweils mit `content_block_start`, einem oder mehreren `content_block_delta`-Ereignissen und `content_block_stop`.
3. Ein oder mehrere `message_delta`-Ereignisse, die Änderungen auf oberster Ebene am endgültigen `Message`-Objekt anzeigen.
4. Ein finales `message_stop`-Ereignis.

**Warnung**: Die im Feld `usage` des Ereignisses `message_delta` angezeigten Token-Zählungen sind _kumulativ_.

### Content-Block-Delta-Typen

#### Text-Delta

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Input-JSON-Delta

Für `tool_use`-Inhaltsblöcke sind Deltas _partielle JSON-Strings_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Thinking-Delta

Bei Verwendung von erweitertem Denken mit Streaming:

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

### Beispiel für grundlegende Streaming-Anfrage

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