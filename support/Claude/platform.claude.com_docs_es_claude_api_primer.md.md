---
url: "https://platform.claude.com/docs/es/claude_api_primer.md"
title: undefined
---

````
# Guía de introducción al uso de la API para Claude

Esta guía está diseñada para dar a Claude los conceptos básicos del uso de la API de Claude. Proporciona explicación y ejemplos de IDs de modelo/la API de mensajes básica, uso de herramientas, streaming, pensamiento extendido, y nada más.

---

# Guía de introducción al uso de la API para Claude

> Esta guía está diseñada para dar a Claude los conceptos básicos del uso de la API de Claude. Proporciona explicación y ejemplos de IDs de modelo/la API de mensajes básica, uso de herramientas, streaming, pensamiento extendido, y nada más.

## Modelos

```
Modelo más inteligente: Claude Opus 4.5: claude-opus-4-5-20251101
Modelo inteligente: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Para tareas rápidas y rentables: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## Llamar a la API

### Solicitud y respuesta básica

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

### Múltiples turnos de conversación

La API de Mensajes es sin estado, lo que significa que siempre envías el historial de conversación completo a la API. Puedes usar este patrón para construir una conversación a lo largo del tiempo. Los turnos de conversación anteriores no necesariamente tienen que originarse realmente de Claude — puedes usar mensajes sintéticos de `assistant`.

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

### Poner palabras en la boca de Claude

Puedes rellenar previamente parte de la respuesta de Claude en la última posición de la lista de mensajes de entrada. Esto se puede usar para dar forma a la respuesta de Claude. El ejemplo a continuación usa `"max_tokens": 1` para obtener una única respuesta de opción múltiple de Claude.

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

### Visión

Claude puede leer tanto texto como imágenes en las solicitudes. Soportamos tanto tipos de fuente `base64` como `url` para imágenes, y los tipos de medios `image/jpeg`, `image/png`, `image/gif` e `image/webp`.

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

## Pensamiento extendido

El pensamiento extendido a veces puede ayudar a Claude con tareas muy difíciles. Cuando está habilitado, la temperatura debe establecerse en 1.

El pensamiento extendido es compatible con los siguientes modelos:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Cómo funciona el pensamiento extendido

Cuando el pensamiento extendido está activado, Claude crea bloques de contenido `thinking` donde genera su razonamiento interno. La respuesta de la API incluirá bloques de contenido `thinking`, seguidos de bloques de contenido `text`.

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

El parámetro `budget_tokens` determina el número máximo de tokens que se permite a Claude usar para su proceso de razonamiento interno. En los modelos Claude 4, este límite se aplica a los tokens de pensamiento completo, y no a la salida resumida. Los presupuestos más grandes pueden mejorar la calidad de la respuesta al permitir un análisis más exhaustivo para problemas complejos. Una regla: el valor de max_tokens debe ser estrictamente mayor que el valor de budget_tokens para que Claude tenga espacio para escribir su respuesta después de que se complete el pensamiento.

## Pensamiento extendido con uso de herramientas

El pensamiento extendido se puede usar junto con el uso de herramientas, permitiendo a Claude razonar a través de la selección de herramientas y el procesamiento de resultados.

Limitaciones importantes:

1. **Limitación de elección de herramienta**: Solo soporta `tool_choice: {"type": "auto"}` (predeterminado) o `tool_choice: {"type": "none"}`.
2. **Preservación de bloques de pensamiento**: Durante el uso de herramientas, debes pasar bloques `thinking` de vuelta a la API para el último mensaje del asistente.

### Preservación de bloques de pensamiento

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

### Pensamiento intercalado

El pensamiento extendido con uso de herramientas en los modelos Claude 4 soporta pensamiento intercalado, que permite a Claude pensar entre llamadas de herramientas. Para habilitarlo, agrega el encabezado beta `interleaved-thinking-2025-05-14` a tu solicitud de API.

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

Con pensamiento intercalado y SOLO con pensamiento intercalado (no pensamiento extendido regular), el `budget_tokens` puede exceder el parámetro `max_tokens`, ya que `budget_tokens` en este caso representa el presupuesto total en todos los bloques de pensamiento dentro de un turno del asistente.

## Uso de herramientas

### Especificación de herramientas del cliente

Las herramientas del cliente se especifican en el parámetro de nivel superior `tools` de la solicitud de API. Cada definición de herramienta incluye:

| Parámetro      | Descripción                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | El nombre de la herramienta. Debe coincidir con la expresión regular `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Una descripción detallada en texto plano de qué hace la herramienta, cuándo debe usarse y cómo se comporta. |
| `input_schema` | Un objeto [JSON Schema](https://json-schema.org/) que define los parámetros esperados para la herramienta.     |

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

### Mejores prácticas para definiciones de herramientas

**Proporciona descripciones extremadamente detalladas.** Este es, con mucho, el factor más importante en el rendimiento de la herramienta. Tus descripciones deben explicar cada detalle sobre la herramienta, incluyendo:

- Qué hace la herramienta
- Cuándo debe usarse (y cuándo no)
- Qué significa cada parámetro y cómo afecta el comportamiento de la herramienta
- Cualquier advertencia o limitación importante

**Considera usar `input_examples` para herramientas complejas.** Para herramientas con objetos anidados, parámetros opcionales o entradas sensibles al formato, puedes proporcionar ejemplos concretos usando el campo `input_examples` (beta). Esto ayuda a Claude a entender patrones de entrada esperados. Consulta [Proporcionar ejemplos de uso de herramientas](/docs/es/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) para más detalles.

Ejemplo de una buena descripción de herramienta:

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

## Controlar la salida de Claude

### Forzar el uso de herramientas

Puedes forzar a Claude a usar una herramienta específica especificando la herramienta en el campo `tool_choice`:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Cuando se trabaja con el parámetro tool_choice, tenemos cuatro opciones posibles:

- `auto` permite a Claude decidir si llamar a cualquiera de las herramientas proporcionadas o no (predeterminado).
- `any` le dice a Claude que debe usar una de las herramientas proporcionadas.
- `tool` nos permite forzar a Claude a usar siempre una herramienta en particular.
- `none` evita que Claude use cualquier herramienta.

### Salida JSON

Las herramientas no necesariamente tienen que ser funciones del cliente — puedes usar herramientas en cualquier momento que quieras que el modelo devuelva una salida JSON que siga un esquema proporcionado.

### Cadena de pensamiento

Cuando se usan herramientas, Claude a menudo mostrará su "cadena de pensamiento", es decir, el razonamiento paso a paso que usa para desglosar el problema y decidir qué herramientas usar.

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

### Uso paralelo de herramientas

Por defecto, Claude puede usar múltiples herramientas para responder a una consulta del usuario. Puedes desactivar este comportamiento estableciendo `disable_parallel_tool_use=true`.

## Manejo de bloques de contenido de uso de herramientas y resultado de herramientas

### Manejo de resultados de herramientas del cliente

La respuesta tendrá un `stop_reason` de `tool_use` y uno o más bloques de contenido `tool_use` que incluyen:

- `id`: Un identificador único para este bloque de uso de herramienta en particular.
- `name`: El nombre de la herramienta que se está usando.
- `input`: Un objeto que contiene la entrada que se pasa a la herramienta.

Cuando recibas una respuesta de uso de herramienta, debes:

1. Extraer el `name`, `id` e `input` del bloque `tool_use`.
2. Ejecutar la herramienta real en tu base de código correspondiente a ese nombre de herramienta.
3. Continuar la conversación enviando un nuevo mensaje con un `tool_result`:

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

### Manejo de la razón de parada `max_tokens`

Si la respuesta de Claude se corta debido a alcanzar el límite `max_tokens` durante el uso de herramientas, reintenta la solicitud con un valor `max_tokens` más alto.

### Manejo de la razón de parada `pause_turn`

Cuando se usan herramientas del servidor como búsqueda web, la API puede devolver una razón de parada `pause_turn`. Continúa la conversación pasando la respuesta pausada tal como está en una solicitud posterior.

## Solución de problemas de errores

### Error de ejecución de herramienta

Si la herramienta en sí genera un error durante la ejecución, devuelve el mensaje de error con `"is_error": true`:

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

### Nombre de herramienta inválido

Si el intento de Claude de usar una herramienta es inválido (por ejemplo, parámetros requeridos faltantes), intenta la solicitud nuevamente con valores `description` más detallados en tus definiciones de herramientas.

## Mensajes de streaming

Cuando creas un Message, puedes establecer `"stream": true` para transmitir incrementalmente la respuesta usando eventos enviados por el servidor (SSE).

### Streaming con SDKs

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

### Tipos de eventos

Cada evento enviado por el servidor incluye un tipo de evento nombrado y datos JSON asociados. Cada flujo usa el siguiente flujo de eventos:

1. `message_start`: contiene un objeto `Message` con `content` vacío.
2. Una serie de bloques de contenido, cada uno con `content_block_start`, uno o más eventos `content_block_delta` y `content_block_stop`.
3. Uno o más eventos `message_delta`, indicando cambios de nivel superior al objeto `Message` final.
4. Un evento final `message_stop`.

**Advertencia**: Los recuentos de tokens mostrados en el campo `usage` del evento `message_delta` son _acumulativos_.

### Tipos de delta de bloque de contenido

#### Delta de texto

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Delta JSON de entrada

Para bloques de contenido `tool_use`, los deltas son _cadenas JSON parciales_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Delta de pensamiento

Cuando se usa pensamiento extendido con streaming:

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

### Ejemplo de solicitud de streaming básica

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