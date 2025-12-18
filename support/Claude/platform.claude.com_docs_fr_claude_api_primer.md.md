---
url: "https://platform.claude.com/docs/fr/claude_api_primer.md"
title: undefined
---

````
# Guide d'introduction à l'utilisation de l'API Claude

Ce guide est conçu pour donner à Claude les bases de l'utilisation de l'API Claude. Il fournit des explications et des exemples d'ID de modèles/l'API de messages de base, l'utilisation d'outils, le streaming, la réflexion étendue, et rien d'autre.

---

# Guide d'introduction à l'utilisation de l'API Claude

> Ce guide est conçu pour donner à Claude les bases de l'utilisation de l'API Claude. Il fournit des explications et des exemples d'ID de modèles/l'API de messages de base, l'utilisation d'outils, le streaming, la réflexion étendue, et rien d'autre.

## Modèles

```
Modèle le plus intelligent : Claude Opus 4.5 : claude-opus-4-5-20251101
Modèle intelligent : Claude Sonnet 4.5 : claude-sonnet-4-5-20250929
Pour les tâches rapides et rentables : Claude Haiku 4.5 : claude-haiku-4-5-20251001
```

## Appel de l'API

### Requête et réponse de base

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

### Plusieurs tours de conversation

L'API Messages est sans état, ce qui signifie que vous envoyez toujours l'historique complet de la conversation à l'API. Vous pouvez utiliser ce modèle pour construire une conversation au fil du temps. Les tours de conversation antérieurs n'ont pas nécessairement besoin de provenir réellement de Claude — vous pouvez utiliser des messages `assistant` synthétiques.

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

### Mettre des paroles dans la bouche de Claude

Vous pouvez pré-remplir une partie de la réponse de Claude à la dernière position de la liste des messages d'entrée. Cela peut être utilisé pour façonner la réponse de Claude. L'exemple ci-dessous utilise `"max_tokens": 1` pour obtenir une réponse à choix multiples unique de Claude.

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

Claude peut lire à la fois du texte et des images dans les requêtes. Nous supportons à la fois les types de source `base64` et `url` pour les images, ainsi que les types de médias `image/jpeg`, `image/png`, `image/gif` et `image/webp`.

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

## Réflexion étendue

La réflexion étendue peut parfois aider Claude avec des tâches très difficiles. Lorsqu'elle est activée, la température doit être définie sur 1.

La réflexion étendue est supportée dans les modèles suivants :

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Comment fonctionne la réflexion étendue

Lorsque la réflexion étendue est activée, Claude crée des blocs de contenu `thinking` où il produit son raisonnement interne. La réponse de l'API inclura des blocs de contenu `thinking`, suivis de blocs de contenu `text`.

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

Le paramètre `budget_tokens` détermine le nombre maximum de jetons que Claude est autorisé à utiliser pour son processus de raisonnement interne. Dans les modèles Claude 4, cette limite s'applique aux jetons de réflexion complète, et non à la sortie résumée. Des budgets plus importants peuvent améliorer la qualité des réponses en permettant une analyse plus approfondie pour les problèmes complexes. Une règle : la valeur de max_tokens doit être strictement supérieure à la valeur de budget_tokens afin que Claude ait de l'espace pour écrire sa réponse après la fin de la réflexion.

## Réflexion étendue avec utilisation d'outils

La réflexion étendue peut être utilisée aux côtés de l'utilisation d'outils, permettant à Claude de raisonner sur la sélection des outils et le traitement des résultats.

Limitations importantes :

1. **Limitation du choix d'outil** : Supporte uniquement `tool_choice: {"type": "auto"}` (par défaut) ou `tool_choice: {"type": "none"}`.
2. **Préservation des blocs de réflexion** : Lors de l'utilisation d'outils, vous devez repasser les blocs `thinking` à l'API pour le dernier message assistant.

### Préservation des blocs de réflexion

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

### Réflexion entrelacée

La réflexion étendue avec utilisation d'outils dans les modèles Claude 4 supporte la réflexion entrelacée, qui permet à Claude de réfléchir entre les appels d'outils. Pour l'activer, ajoutez l'en-tête bêta `interleaved-thinking-2025-05-14` à votre requête API.

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

Avec la réflexion entrelacée et UNIQUEMENT avec la réflexion entrelacée (pas la réflexion étendue régulière), le `budget_tokens` peut dépasser le paramètre `max_tokens`, car `budget_tokens` dans ce cas représente le budget total sur tous les blocs de réflexion dans un tour assistant.

## Utilisation d'outils

### Spécification des outils clients

Les outils clients sont spécifiés dans le paramètre de niveau supérieur `tools` de la requête API. Chaque définition d'outil inclut :

| Paramètre      | Description                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | Le nom de l'outil. Doit correspondre à l'expression régulière `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Une description détaillée en texte brut de ce que fait l'outil, quand il doit être utilisé et comment il se comporte. |
| `input_schema` | Un objet [JSON Schema](https://json-schema.org/) définissant les paramètres attendus pour l'outil.     |

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

### Meilleures pratiques pour les définitions d'outils

**Fournissez des descriptions extrêmement détaillées.** C'est de loin le facteur le plus important pour la performance des outils. Vos descriptions doivent expliquer chaque détail sur l'outil, y compris :

- Ce que fait l'outil
- Quand il doit être utilisé (et quand il ne doit pas l'être)
- Ce que signifie chaque paramètre et comment il affecte le comportement de l'outil
- Toutes les mises en garde ou limitations importantes

**Envisagez d'utiliser `input_examples` pour les outils complexes.** Pour les outils avec des objets imbriqués, des paramètres optionnels ou des entrées sensibles au format, vous pouvez fournir des exemples concrets en utilisant le champ `input_examples` (bêta). Cela aide Claude à comprendre les modèles d'entrée attendus. Voir [Fournir des exemples d'utilisation d'outils](/docs/fr/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) pour plus de détails.

Exemple d'une bonne description d'outil :

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

## Contrôle de la sortie de Claude

### Forcer l'utilisation d'outils

Vous pouvez forcer Claude à utiliser un outil spécifique en le spécifiant dans le champ `tool_choice` :

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Lorsque vous travaillez avec le paramètre tool_choice, nous avons quatre options possibles :

- `auto` permet à Claude de décider s'il doit appeler l'un des outils fournis ou non (par défaut).
- `any` indique à Claude qu'il doit utiliser l'un des outils fournis.
- `tool` nous permet de forcer Claude à toujours utiliser un outil particulier.
- `none` empêche Claude d'utiliser des outils.

### Sortie JSON

Les outils n'ont pas nécessairement besoin d'être des fonctions clients — vous pouvez utiliser des outils chaque fois que vous voulez que le modèle retourne une sortie JSON qui suit un schéma fourni.

### Chaîne de pensée

Lors de l'utilisation d'outils, Claude affichera souvent sa « chaîne de pensée », c'est-à-dire le raisonnement étape par étape qu'il utilise pour décomposer le problème et décider quels outils utiliser.

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

### Utilisation parallèle d'outils

Par défaut, Claude peut utiliser plusieurs outils pour répondre à une requête utilisateur. Vous pouvez désactiver ce comportement en définissant `disable_parallel_tool_use=true`.

## Gestion des blocs de contenu d'utilisation d'outils et de résultats d'outils

### Gestion des résultats des outils clients

La réponse aura un `stop_reason` de `tool_use` et un ou plusieurs blocs de contenu `tool_use` qui incluent :

- `id` : Un identifiant unique pour ce bloc d'utilisation d'outil particulier.
- `name` : Le nom de l'outil utilisé.
- `input` : Un objet contenant l'entrée transmise à l'outil.

Lorsque vous recevez une réponse d'utilisation d'outil, vous devez :

1. Extraire le `name`, l'`id` et l'`input` du bloc `tool_use`.
2. Exécuter l'outil réel dans votre base de code correspondant à ce nom d'outil.
3. Continuer la conversation en envoyant un nouveau message avec un `tool_result` :

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

### Gestion de la raison d'arrêt `max_tokens`

Si la réponse de Claude est coupée en raison du dépassement de la limite `max_tokens` lors de l'utilisation d'outils, relancez la requête avec une valeur `max_tokens` plus élevée.

### Gestion de la raison d'arrêt `pause_turn`

Lors de l'utilisation d'outils serveur comme la recherche web, l'API peut retourner une raison d'arrêt `pause_turn`. Continuez la conversation en repassant la réponse en pause telle quelle dans une requête ultérieure.

## Dépannage des erreurs

### Erreur d'exécution d'outil

Si l'outil lui-même lève une erreur lors de l'exécution, retournez le message d'erreur avec `"is_error": true` :

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

### Nom d'outil invalide

Si la tentative d'utilisation d'un outil par Claude est invalide (par exemple, paramètres requis manquants), relancez la requête avec des valeurs `description` plus détaillées dans vos définitions d'outils.

## Messages de streaming

Lors de la création d'un Message, vous pouvez définir `"stream": true` pour diffuser progressivement la réponse en utilisant des événements envoyés par le serveur (SSE).

### Streaming avec les SDK

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

### Types d'événements

Chaque événement envoyé par le serveur inclut un type d'événement nommé et des données JSON associées. Chaque flux utilise le flux d'événements suivant :

1. `message_start` : contient un objet `Message` avec un `content` vide.
2. Une série de blocs de contenu, chacun avec `content_block_start`, un ou plusieurs événements `content_block_delta` et `content_block_stop`.
3. Un ou plusieurs événements `message_delta`, indiquant les changements de niveau supérieur à l'objet `Message` final.
4. Un événement `message_stop` final.

**Avertissement** : Les comptages de jetons affichés dans le champ `usage` de l'événement `message_delta` sont _cumulatifs_.

### Types de delta de bloc de contenu

#### Delta de texte

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Delta JSON d'entrée

Pour les blocs de contenu `tool_use`, les deltas sont des _chaînes JSON partielles_ :

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Delta de réflexion

Lors de l'utilisation de la réflexion étendue avec le streaming :

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

### Exemple de requête de streaming de base

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