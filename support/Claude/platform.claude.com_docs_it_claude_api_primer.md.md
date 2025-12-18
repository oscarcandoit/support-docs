---
url: "https://platform.claude.com/docs/it/claude_api_primer.md"
title: undefined
---

````
# Guida introduttiva all'utilizzo dell'API per Claude

Questa guida è progettata per fornire a Claude le nozioni di base sull'utilizzo dell'API Claude. Fornisce spiegazioni ed esempi di ID modello/API messaggi di base, utilizzo di strumenti, streaming, extended thinking e nient'altro.

---

# Guida introduttiva all'utilizzo dell'API per Claude

> Questa guida è progettata per fornire a Claude le nozioni di base sull'utilizzo dell'API Claude. Fornisce spiegazioni ed esempi di ID modello/API messaggi di base, utilizzo di strumenti, streaming, extended thinking e nient'altro.

## Modelli

```
Modello più intelligente: Claude Opus 4.5: claude-opus-4-5-20251101
Modello intelligente: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Per attività veloci ed economiche: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## Chiamata dell'API

### Richiesta e risposta di base

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

### Più turni conversazionali

L'API Messages è senza stato, il che significa che invii sempre la cronologia conversazionale completa all'API. Puoi utilizzare questo modello per costruire una conversazione nel tempo. I turni conversazionali precedenti non devono necessariamente provenire effettivamente da Claude — puoi utilizzare messaggi sintetici di `assistant`.

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

### Mettere parole in bocca a Claude

Puoi pre-compilare parte della risposta di Claude nell'ultima posizione dell'elenco dei messaggi di input. Questo può essere utilizzato per modellare la risposta di Claude. L'esempio seguente utilizza `"max_tokens": 1` per ottenere una singola risposta a scelta multipla da Claude.

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

### Visione

Claude può leggere sia testo che immagini nelle richieste. Supportiamo sia i tipi di origine `base64` che `url` per le immagini, e i tipi di media `image/jpeg`, `image/png`, `image/gif` e `image/webp`.

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

## Extended thinking

Extended thinking può talvolta aiutare Claude con compiti molto difficili. Quando è abilitato, la temperatura deve essere impostata su 1.

Extended thinking è supportato nei seguenti modelli:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Come funziona extended thinking

Quando extended thinking è attivato, Claude crea blocchi di contenuto `thinking` dove produce il suo ragionamento interno. La risposta dell'API includerà blocchi di contenuto `thinking`, seguiti da blocchi di contenuto `text`.

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

Il parametro `budget_tokens` determina il numero massimo di token che Claude può utilizzare per il suo processo di ragionamento interno. Nei modelli Claude 4, questo limite si applica ai token di thinking completi, non all'output riassunto. Budget più grandi possono migliorare la qualità della risposta consentendo un'analisi più approfondita per problemi complessi. Una regola: il valore di max_tokens deve essere strettamente maggiore del valore di budget_tokens in modo che Claude abbia spazio per scrivere la sua risposta dopo che il thinking è completo.

## Extended thinking con utilizzo di strumenti

Extended thinking può essere utilizzato insieme all'utilizzo di strumenti, consentendo a Claude di ragionare sulla selezione degli strumenti e sull'elaborazione dei risultati.

Limitazioni importanti:

1. **Limitazione della scelta dello strumento**: Supporta solo `tool_choice: {"type": "auto"}` (predefinito) o `tool_choice: {"type": "none"}`.
2. **Preservazione dei blocchi di thinking**: Durante l'utilizzo di strumenti, devi passare i blocchi `thinking` all'API per l'ultimo messaggio dell'assistente.

### Preservazione dei blocchi di thinking

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

### Thinking intercalato

Extended thinking con utilizzo di strumenti nei modelli Claude 4 supporta il thinking intercalato, che consente a Claude di pensare tra le chiamate agli strumenti. Per abilitare, aggiungi l'intestazione beta `interleaved-thinking-2025-05-14` alla tua richiesta API.

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

Con il thinking intercalato e SOLO con il thinking intercalato (non con il regular extended thinking), `budget_tokens` può superare il parametro `max_tokens`, poiché `budget_tokens` in questo caso rappresenta il budget totale su tutti i blocchi di thinking all'interno di un turno dell'assistente.

## Utilizzo di strumenti

### Specifica degli strumenti client

Gli strumenti client sono specificati nel parametro di primo livello `tools` della richiesta API. Ogni definizione di strumento include:

| Parametro      | Descrizione                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | Il nome dello strumento. Deve corrispondere all'espressione regolare `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Una descrizione dettagliata in testo semplice di cosa fa lo strumento, quando deve essere utilizzato e come si comporta. |
| `input_schema` | Un oggetto [JSON Schema](https://json-schema.org/) che definisce i parametri previsti per lo strumento.     |

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

### Migliori pratiche per le definizioni di strumenti

**Fornisci descrizioni estremamente dettagliate.** Questo è di gran lunga il fattore più importante per le prestazioni dello strumento. Le tue descrizioni dovrebbero spiegare ogni dettaglio dello strumento, incluso:

- Cosa fa lo strumento
- Quando deve essere utilizzato (e quando non deve)
- Cosa significa ogni parametro e come influisce sul comportamento dello strumento
- Eventuali avvertenze o limitazioni importanti

**Considera l'utilizzo di `input_examples` per strumenti complessi.** Per strumenti con oggetti annidati, parametri opzionali o input sensibili al formato, puoi fornire esempi concreti utilizzando il campo `input_examples` (beta). Questo aiuta Claude a comprendere i modelli di input previsti. Vedi [Providing tool use examples](/docs/it/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) per i dettagli.

Esempio di una buona descrizione di strumento:

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

## Controllo dell'output di Claude

### Forzare l'utilizzo di strumenti

Puoi forzare Claude a utilizzare uno strumento specifico specificando lo strumento nel campo `tool_choice`:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Quando si lavora con il parametro tool_choice, abbiamo quattro opzioni possibili:

- `auto` consente a Claude di decidere se utilizzare gli strumenti forniti o meno (predefinito).
- `any` dice a Claude che deve utilizzare uno degli strumenti forniti.
- `tool` ci consente di forzare Claude a utilizzare sempre uno strumento particolare.
- `none` impedisce a Claude di utilizzare qualsiasi strumento.

### Output JSON

Gli strumenti non devono necessariamente essere funzioni client — puoi utilizzare gli strumenti ogni volta che desideri che il modello restituisca un output JSON che segua uno schema fornito.

### Catena di pensiero

Quando si utilizzano strumenti, Claude spesso mostrerà la sua "catena di pensiero", cioè il ragionamento passo dopo passo che utilizza per scomporre il problema e decidere quali strumenti utilizzare.

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

### Utilizzo parallelo di strumenti

Per impostazione predefinita, Claude può utilizzare più strumenti per rispondere a una query dell'utente. Puoi disabilitare questo comportamento impostando `disable_parallel_tool_use=true`.

## Gestione dei blocchi di contenuto di utilizzo di strumenti e risultati di strumenti

### Gestione dei risultati degli strumenti client

La risposta avrà un `stop_reason` di `tool_use` e uno o più blocchi di contenuto `tool_use` che includono:

- `id`: Un identificatore univoco per questo particolare blocco di utilizzo di strumenti.
- `name`: Il nome dello strumento utilizzato.
- `input`: Un oggetto contenente l'input passato allo strumento.

Quando ricevi una risposta di utilizzo di strumenti, dovresti:

1. Estrarre `name`, `id` e `input` dal blocco `tool_use`.
2. Eseguire lo strumento effettivo nella tua base di codice corrispondente a quel nome di strumento.
3. Continuare la conversazione inviando un nuovo messaggio con un `tool_result`:

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

### Gestione del motivo di arresto `max_tokens`

Se la risposta di Claude viene interrotta a causa del raggiungimento del limite `max_tokens` durante l'utilizzo di strumenti, ripeti la richiesta con un valore `max_tokens` più alto.

### Gestione del motivo di arresto `pause_turn`

Quando si utilizzano strumenti server come la ricerca web, l'API può restituire un motivo di arresto `pause_turn`. Continua la conversazione passando la risposta in pausa così com'è in una richiesta successiva.

## Risoluzione dei problemi degli errori

### Errore di esecuzione dello strumento

Se lo strumento stesso genera un errore durante l'esecuzione, restituisci il messaggio di errore con `"is_error": true`:

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

### Nome dello strumento non valido

Se il tentativo di Claude di utilizzare uno strumento non è valido (ad esempio, parametri obbligatori mancanti), ripeti la richiesta con valori `description` più dettagliati nelle definizioni dei tuoi strumenti.

## Messaggi di streaming

Quando crei un Message, puoi impostare `"stream": true` per trasmettere in streaming incrementalmente la risposta utilizzando server-sent events (SSE).

### Streaming con SDK

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

### Tipi di evento

Ogni server-sent event include un tipo di evento denominato e dati JSON associati. Ogni stream utilizza il seguente flusso di eventi:

1. `message_start`: contiene un oggetto `Message` con `content` vuoto.
2. Una serie di blocchi di contenuto, ciascuno con `content_block_start`, uno o più eventi `content_block_delta` e `content_block_stop`.
3. Uno o più eventi `message_delta`, indicando modifiche di primo livello all'oggetto `Message` finale.
4. Un evento `message_stop` finale.

**Avvertenza**: I conteggi dei token mostrati nel campo `usage` dell'evento `message_delta` sono _cumulativi_.

### Tipi di delta dei blocchi di contenuto

#### Delta di testo

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Delta JSON di input

Per i blocchi di contenuto `tool_use`, i delta sono _stringhe JSON parziali_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Delta di thinking

Quando si utilizza extended thinking con streaming:

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

### Esempio di richiesta di streaming di base

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