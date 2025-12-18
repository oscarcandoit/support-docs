---
url: "https://platform.claude.com/docs/id/claude_api_primer.md"
title: undefined
---

````
# Panduan dasar penggunaan API untuk Claude

Panduan ini dirancang untuk memberikan Claude dasar-dasar penggunaan Claude API. Panduan ini memberikan penjelasan dan contoh tentang ID model/API pesan dasar, penggunaan alat, streaming, pemikiran yang diperluas, dan tidak ada yang lain.

---

# Panduan dasar penggunaan API untuk Claude

> Panduan ini dirancang untuk memberikan Claude dasar-dasar penggunaan Claude API. Panduan ini memberikan penjelasan dan contoh tentang ID model/API pesan dasar, penggunaan alat, streaming, pemikiran yang diperluas, dan tidak ada yang lain.

## Model

```
Model paling pintar: Claude Opus 4.5: claude-opus-4-5-20251101
Model pintar: Claude Sonnet 4.5: claude-sonnet-4-5-20250929
Untuk tugas yang cepat dan hemat biaya: Claude Haiku 4.5: claude-haiku-4-5-20251001
```

## Memanggil API

### Permintaan dan respons dasar

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

### Beberapa giliran percakapan

Messages API bersifat stateless, yang berarti Anda selalu mengirimkan riwayat percakapan lengkap ke API. Anda dapat menggunakan pola ini untuk membangun percakapan dari waktu ke waktu. Giliran percakapan sebelumnya tidak perlu benar-benar berasal dari Claude — Anda dapat menggunakan pesan `assistant` sintetis.

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

### Memasukkan kata-kata ke mulut Claude

Anda dapat mengisi sebelumnya sebagian dari respons Claude di posisi terakhir daftar pesan input. Ini dapat digunakan untuk membentuk respons Claude. Contoh di bawah menggunakan `"max_tokens": 1` untuk mendapatkan jawaban pilihan ganda tunggal dari Claude.

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

### Visi

Claude dapat membaca teks dan gambar dalam permintaan. Kami mendukung jenis sumber `base64` dan `url` untuk gambar, serta jenis media `image/jpeg`, `image/png`, `image/gif`, dan `image/webp`.

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

## Pemikiran yang diperluas

Pemikiran yang diperluas kadang-kadang dapat membantu Claude dengan tugas yang sangat sulit. Ketika diaktifkan, suhu harus diatur ke 1.

Pemikiran yang diperluas didukung dalam model berikut:

- Claude Opus 4.1 (`claude-opus-4-1-20250805`)
- Claude Opus 4 (`claude-opus-4-20250514`)
- Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`)

### Cara kerja pemikiran yang diperluas

Ketika pemikiran yang diperluas diaktifkan, Claude membuat blok konten `thinking` di mana ia mengeluarkan penalaran internalnya. Respons API akan mencakup blok konten `thinking`, diikuti oleh blok konten `text`.

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

Parameter `budget_tokens` menentukan jumlah maksimum token yang diizinkan Claude gunakan untuk proses penalaran internalnya. Dalam model Claude 4, batas ini berlaku untuk token pemikiran penuh, bukan untuk output yang diringkas. Anggaran yang lebih besar dapat meningkatkan kualitas respons dengan memungkinkan analisis yang lebih menyeluruh untuk masalah yang kompleks. Satu aturan: nilai max_tokens harus secara ketat lebih besar dari nilai budget_tokens sehingga Claude memiliki ruang untuk menulis responsnya setelah pemikiran selesai.

## Pemikiran yang diperluas dengan penggunaan alat

Pemikiran yang diperluas dapat digunakan bersama dengan penggunaan alat, memungkinkan Claude untuk bernalar melalui pemilihan alat dan pemrosesan hasil.

Batasan penting:

1. **Batasan pilihan alat**: Hanya mendukung `tool_choice: {"type": "auto"}` (default) atau `tool_choice: {"type": "none"}`.
2. **Menjaga blok pemikiran**: Selama penggunaan alat, Anda harus melewatkan blok `thinking` kembali ke API untuk pesan asisten terakhir.

### Menjaga blok pemikiran

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

### Pemikiran yang tersisip

Pemikiran yang diperluas dengan penggunaan alat dalam model Claude 4 mendukung pemikiran yang tersisip, yang memungkinkan Claude untuk berpikir di antara panggilan alat. Untuk mengaktifkan, tambahkan header beta `interleaved-thinking-2025-05-14` ke permintaan API Anda.

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

Dengan pemikiran yang tersisip dan HANYA dengan pemikiran yang tersisip (bukan pemikiran yang diperluas biasa), `budget_tokens` dapat melebihi parameter `max_tokens`, karena `budget_tokens` dalam hal ini mewakili anggaran total di semua blok pemikiran dalam satu giliran asisten.

## Penggunaan Alat

### Menentukan alat klien

Alat klien ditentukan dalam parameter tingkat atas `tools` dari permintaan API. Setiap definisi alat mencakup:

| Parameter      | Deskripsi                                                                                         |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| `name`         | Nama alat. Harus cocok dengan regex `^[a-zA-Z0-9_-]{1,64}$`.                                 |
| `description`  | Deskripsi plaintext terperinci tentang apa yang dilakukan alat, kapan harus digunakan, dan cara kerjanya. |
| `input_schema` | Objek [JSON Schema](https://json-schema.org/) yang menentukan parameter yang diharapkan untuk alat.     |

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

### Praktik terbaik untuk definisi alat

**Berikan deskripsi yang sangat terperinci.** Ini adalah faktor paling penting dalam kinerja alat. Deskripsi Anda harus menjelaskan setiap detail tentang alat, termasuk:

- Apa yang dilakukan alat
- Kapan harus digunakan (dan kapan tidak boleh)
- Apa arti setiap parameter dan bagaimana pengaruhnya terhadap perilaku alat
- Peringatan atau batasan penting apa pun

**Pertimbangkan menggunakan `input_examples` untuk alat yang kompleks.** Untuk alat dengan objek bersarang, parameter opsional, atau input yang sensitif terhadap format, Anda dapat memberikan contoh konkret menggunakan bidang `input_examples` (beta). Ini membantu Claude memahami pola input yang diharapkan. Lihat [Memberikan contoh penggunaan alat](/docs/id/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) untuk detail.

Contoh deskripsi alat yang baik:

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

## Mengontrol output Claude

### Memaksa penggunaan alat

Anda dapat memaksa Claude untuk menggunakan alat tertentu dengan menentukan alat dalam bidang `tool_choice`:

```python
tool_choice = {"type": "tool", "name": "get_weather"}
```

Saat bekerja dengan parameter tool_choice, kami memiliki empat opsi yang mungkin:

- `auto` memungkinkan Claude memutuskan apakah akan memanggil alat yang disediakan atau tidak (default).
- `any` memberitahu Claude bahwa ia harus menggunakan salah satu alat yang disediakan.
- `tool` memungkinkan kami untuk memaksa Claude selalu menggunakan alat tertentu.
- `none` mencegah Claude menggunakan alat apa pun.

### Output JSON

Alat tidak perlu berupa fungsi klien — Anda dapat menggunakan alat kapan saja Anda ingin model mengembalikan output JSON yang mengikuti skema yang disediakan.

### Rantai pemikiran

Saat menggunakan alat, Claude sering menunjukkan "rantai pemikirannya", yaitu penalaran langkah demi langkah yang digunakan untuk memecah masalah dan memutuskan alat mana yang akan digunakan.

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

### Penggunaan alat paralel

Secara default, Claude dapat menggunakan beberapa alat untuk menjawab pertanyaan pengguna. Anda dapat menonaktifkan perilaku ini dengan mengatur `disable_parallel_tool_use=true`.

## Menangani blok konten penggunaan alat dan hasil alat

### Menangani hasil dari alat klien

Respons akan memiliki `stop_reason` dari `tool_use` dan satu atau lebih blok konten `tool_use` yang mencakup:

- `id`: Pengenal unik untuk blok penggunaan alat tertentu ini.
- `name`: Nama alat yang digunakan.
- `input`: Objek yang berisi input yang diteruskan ke alat.

Ketika Anda menerima respons penggunaan alat, Anda harus:

1. Ekstrak `name`, `id`, dan `input` dari blok `tool_use`.
2. Jalankan alat aktual di codebase Anda yang sesuai dengan nama alat itu.
3. Lanjutkan percakapan dengan mengirim pesan baru dengan `tool_result`:

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

### Menangani alasan penghentian `max_tokens`

Jika respons Claude terpotong karena mencapai batas `max_tokens` selama penggunaan alat, coba lagi permintaan dengan nilai `max_tokens` yang lebih tinggi.

### Menangani alasan penghentian `pause_turn`

Saat menggunakan alat server seperti pencarian web, API dapat mengembalikan alasan penghentian `pause_turn`. Lanjutkan percakapan dengan melewatkan respons yang dijeda kembali apa adanya dalam permintaan berikutnya.

## Pemecahan masalah kesalahan

### Kesalahan eksekusi alat

Jika alat itu sendiri melempar kesalahan selama eksekusi, kembalikan pesan kesalahan dengan `"is_error": true`:

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

### Nama alat tidak valid

Jika upaya Claude menggunakan alat tidak valid (misalnya parameter yang diperlukan hilang), coba lagi permintaan dengan nilai `description` yang lebih terperinci dalam definisi alat Anda.

## Pesan Streaming

Saat membuat Pesan, Anda dapat mengatur `"stream": true` untuk secara bertahap melakukan streaming respons menggunakan server-sent events (SSE).

### Streaming dengan SDK

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

### Jenis acara

Setiap server-sent event mencakup jenis acara bernama dan data JSON terkait. Setiap aliran menggunakan alur acara berikut:

1. `message_start`: berisi objek `Message` dengan `content` kosong.
2. Serangkaian blok konten, masing-masing dengan `content_block_start`, satu atau lebih acara `content_block_delta`, dan `content_block_stop`.
3. Satu atau lebih acara `message_delta`, menunjukkan perubahan tingkat atas ke objek `Message` akhir.
4. Acara `message_stop` akhir.

**Peringatan**: Hitungan token yang ditampilkan di bidang `usage` acara `message_delta` adalah _kumulatif_.

### Jenis delta blok konten

#### Delta teks

```json
{
  "type": "content_block_delta",
  "index": 0,
  "delta": { "type": "text_delta", "text": "Hello frien" }
}
```

#### Delta JSON input

Untuk blok konten `tool_use`, delta adalah _string JSON parsial_:

```json
{"type": "content_block_delta","index": 1,"delta": {"type": "input_json_delta","partial_json": "{\"location\": \"San Fra"}}
```

#### Delta pemikiran

Saat menggunakan pemikiran yang diperluas dengan streaming:

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

### Contoh permintaan streaming dasar

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