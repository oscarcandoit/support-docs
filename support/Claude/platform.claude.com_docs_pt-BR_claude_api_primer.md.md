---
url: "https://platform.claude.com/docs/pt-BR/claude_api_primer.md"
title: undefined
---

````
# Guia de introdução ao uso da API para Claude

Este guia foi desenvolvido para dar a Claude o básico sobre como usar a API Claude. Fornece explicação e exemplos de IDs de modelo/API de mensagens básica, uso de ferramentas, streaming, pensamento estendido e nada mais.

---

# Guia de introdução ao uso da API para Claude

> Este guia foi desenvolvido para dar a Claude o básico sobre como usar a API Claude. Fornece explicação e exemplos de IDs de modelo/API de mensagens básica, uso de ferramentas, streaming, pensamento estendido e nada mais.

## Modelos

```
Modelo mais inteligente: Claude Opus 4.5: claude-opus-4-5-20251101
Modelo inteligente: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Para tarefas rápidas e econômicas: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## Chamando a API

### Solicitação e resposta básicas

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

### Múltiplos turnos de conversa

A API de Mensagens é sem estado, o que significa que você sempre envia o histórico completo da conversa para a API. Você pode usar esse padrão para construir uma conversa ao longo do tempo. Os turnos de conversa anteriores não precisam necessariamente ter originado realmente de Claude — você pode usar mensagens sintéticas de `assistant`.

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

### Colocando palavras na boca de Claude

Você pode pré-preenchimento parte da resposta de Claude na última posição da lista de mensagens de entrada. Isso pode ser usado para moldar a resposta de Claude. O exemplo abaixo usa `"max_tokens": 1` para obter uma única resposta de múltipla escolha de Claude.

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

### Visão

Claude pode ler tanto texto quanto imagens em solicitações. Suportamos tipos de fonte `base64` e `url` para imagens, e os tipos de mídia `image/jpeg`, `image/png`, `image/gif` e `image/webp`.

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

## Pensamento estendido

O pensamento estendido pode às vezes ajudar Claude com tarefas muito difíceis. Quando ativado, a temperatura deve ser definida como 1.

O pensamento estendido é suportado nos seguintes modelos:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Como o pensamento estendido funciona

Quando o pensamento estendido é ativado, Claude cria blocos de conteúdo `thinking` onde produz seu raciocínio interno. A resposta da API incluirá blocos de conteúdo `thinking`, seguidos por blocos de conteúdo `text`.

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

O parâmetro `budget_tokens` determina o número máximo de tokens que Claude pode usar para seu processo de raciocínio interno. Nos modelos Claude 4, esse limite se aplica aos tokens de pensamento completo, e não à saída resumida. Orçamentos maiores podem melhorar a qualidade da resposta, permitindo análise mais completa para problemas complexos. Uma regra: o valor de max_tokens deve ser estritamente maior que o valor de budget_tokens para que Claude tenha espaço para escrever sua resposta após o pensamento estar completo.

## Pensamento estendido com uso de ferramentas

O pensamento estendido pode ser usado junto com o uso de ferramentas, permitindo que Claude raciocine através da seleção de ferramentas e processamento de resultados.

Limitações importantes:

1. **Limitação de escolha de ferramenta**: Suporta apenas `tool_choice: {"type": "auto"}` (padrão) ou `tool_choice: {"type": "none"}`.
2. **Preservando blocos de pensamento**: Durante o uso de ferramentas, você deve passar blocos `thinking` de volta para a API para a última mensagem do assistente.

### Preservando blocos de pensamento

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

### Pensamento intercalado

O pensamento estendido com uso de ferramentas nos modelos Claude 4 suporta pensamento intercalado, que permite que Claude pense entre chamadas de ferramentas. Para ativar, adicione o cabeçalho beta `interleaved-thinking-2025-05-14` à sua solicitação de API.

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

Com pensamento intercalado e APENAS com pensamento intercalado (não pensamento estendido regular), o `budget_tokens` pode exceder o parâmetro `max_tokens`, pois `budget_tokens` neste caso representa o orçamento total em todos os blocos de pensamento dentro de um turno do assistente.

## Uso de Ferramentas

### Especificando ferramentas do cliente

As ferramentas do cliente são especificadas no parâmetro de nível superior `tools` da solicitação de API. Cada definição de ferramenta inclui:

| Parâmetro      | Descrição                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | O nome da ferramenta. Deve corresponder à regex `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Uma descrição detalhada em texto simples do que a ferramenta faz, quando deve ser usada e como se comporta. |
| `input_schema` | Um objeto [JSON Schema](https://json-schema.org/) definindo os parâmetros esperados para a ferramenta.     |

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

### Melhores práticas para definições de ferramentas

**Forneça descrições extremamente detalhadas.** Este é de longe o fator mais importante no desempenho da ferramenta. Suas descrições devem explicar cada detalhe sobre a ferramenta, incluindo:

- O que a ferramenta faz
- Quando deve ser usada (e quando não deve)
- O que cada parâmetro significa e como afeta o comportamento da ferramenta
- Quaisquer ressalvas ou limitações importantes

**Considere usar `input_examples` para ferramentas complexas.** Para ferramentas com objetos aninhados, parâmetros opcionais ou entradas sensíveis ao formato, você pode fornecer exemplos concretos usando o campo `input_examples` (beta). Isso ajuda Claude a entender padrões de entrada esperados. Veja [Fornecendo exemplos de uso de ferramentas](/docs/pt-BR/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) para detalhes.

Exemplo de uma boa descrição de ferramenta:

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

## Controlando a saída de Claude

### Forçando o uso de ferramentas

Você pode forçar Claude a usar uma ferramenta específica especificando a ferramenta no campo `tool_choice`:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Ao trabalhar com o parâmetro tool_choice, temos quatro opções possíveis:

- `auto` permite que Claude decida se deve chamar qualquer uma das ferramentas fornecidas ou não (padrão).
- `any` diz a Claude que ele deve usar uma das ferramentas fornecidas.
- `tool` nos permite forçar Claude a sempre usar uma ferramenta particular.
- `none` impede Claude de usar qualquer ferramenta.

### Saída JSON

As ferramentas não precisam necessariamente ser funções do cliente — você pode usar ferramentas sempre que quiser que o modelo retorne saída JSON que siga um esquema fornecido.

### Cadeia de pensamento

Ao usar ferramentas, Claude frequentemente mostrará seu "cadeia de pensamento", ou seja, o raciocínio passo a passo que usa para decompor o problema e decidir quais ferramentas usar.

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

### Uso paralelo de ferramentas

Por padrão, Claude pode usar múltiplas ferramentas para responder a uma consulta do usuário. Você pode desabilitar esse comportamento definindo `disable_parallel_tool_use=true`.

## Tratando blocos de conteúdo de uso de ferramentas e resultado de ferramentas

### Tratando resultados de ferramentas do cliente

A resposta terá um `stop_reason` de `tool_use` e um ou mais blocos de conteúdo `tool_use` que incluem:

- `id`: Um identificador único para este bloco de uso de ferramenta particular.
- `name`: O nome da ferramenta sendo usada.
- `input`: Um objeto contendo a entrada sendo passada para a ferramenta.

Quando você recebe uma resposta de uso de ferramenta, você deve:

1. Extrair `name`, `id` e `input` do bloco `tool_use`.
2. Executar a ferramenta real em sua base de código correspondente a esse nome de ferramenta.
3. Continuar a conversa enviando uma nova mensagem com um `tool_result`:

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

### Tratando o motivo de parada `max_tokens`

Se a resposta de Claude for cortada devido ao limite `max_tokens` durante o uso de ferramentas, tente novamente a solicitação com um valor `max_tokens` mais alto.

### Tratando o motivo de parada `pause_turn`

Ao usar ferramentas de servidor como busca na web, a API pode retornar um motivo de parada `pause_turn`. Continue a conversa passando a resposta pausada como está em uma solicitação subsequente.

## Solução de problemas de erros

### Erro de execução de ferramenta

Se a ferramenta em si lançar um erro durante a execução, retorne a mensagem de erro com `"is_error": true`:

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

### Nome de ferramenta inválido

Se a tentativa de Claude de usar uma ferramenta for inválida (por exemplo, parâmetros obrigatórios ausentes), tente a solicitação novamente com valores de `description` mais detalhados em suas definições de ferramentas.

## Mensagens de Streaming

Ao criar uma Mensagem, você pode definir `"stream": true` para fazer streaming incremental da resposta usando eventos enviados pelo servidor (SSE).

### Streaming com SDKs

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

Cada evento enviado pelo servidor inclui um tipo de evento nomeado e dados JSON associados. Cada stream usa o seguinte fluxo de eventos:

1. `message_start`: contém um objeto `Message` com `content` vazio.
2. Uma série de blocos de conteúdo, cada um com `content_block_start`, um ou mais eventos `content_block_delta` e `content_block_stop`.
3. Um ou mais eventos `message_delta`, indicando mudanças de nível superior no objeto `Message` final.
4. Um evento `message_stop` final.

**Aviso**: As contagens de tokens mostradas no campo `usage` do evento `message_delta` são _cumulativas_.

### Tipos de delta de bloco de conteúdo

#### Delta de texto

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Delta JSON de entrada

Para blocos de conteúdo `tool_use`, deltas são _strings JSON parciais_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Delta de pensamento

Ao usar pensamento estendido com streaming:

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

### Exemplo de solicitação de streaming básica

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