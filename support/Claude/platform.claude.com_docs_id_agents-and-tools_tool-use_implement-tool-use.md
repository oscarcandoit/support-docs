---
url: "https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use"
title: "Cara mengimplementasikan penggunaan alat - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fagents-and-tools%2Ftool-use%2Fimplement-tool-use)

Search...

⌘K

Langkah pertama

[Pengenalan Claude](https://platform.claude.com/docs/id/intro) [Mulai cepat](https://platform.claude.com/docs/id/get-started)

Model & harga

[Ikhtisar model](https://platform.claude.com/docs/id/about-claude/models/overview) [Memilih model](https://platform.claude.com/docs/id/about-claude/models/choosing-a-model) [Apa yang baru di Claude 4.5](https://platform.claude.com/docs/id/about-claude/models/whats-new-claude-4-5) [Migrasi ke Claude 4.5](https://platform.claude.com/docs/id/about-claude/models/migrating-to-claude-4) [Penghentian model](https://platform.claude.com/docs/id/about-claude/model-deprecations) [Harga](https://platform.claude.com/docs/id/about-claude/pricing)

Bangun dengan Claude

[Ikhtisar fitur](https://platform.claude.com/docs/id/build-with-claude/overview) [Menggunakan Messages API](https://platform.claude.com/docs/id/build-with-claude/working-with-messages) [Jendela konteks](https://platform.claude.com/docs/id/build-with-claude/context-windows) [Praktik terbaik prompting](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/claude-4-best-practices)

Kemampuan

[Prompt caching](https://platform.claude.com/docs/id/build-with-claude/prompt-caching) [Pengeditan konteks](https://platform.claude.com/docs/id/build-with-claude/context-editing) [Extended thinking](https://platform.claude.com/docs/id/build-with-claude/extended-thinking) [Usaha](https://platform.claude.com/docs/id/build-with-claude/effort) [Streaming Messages](https://platform.claude.com/docs/id/build-with-claude/streaming) [Pemrosesan batch](https://platform.claude.com/docs/id/build-with-claude/batch-processing) [Kutipan](https://platform.claude.com/docs/id/build-with-claude/citations) [Dukungan multibahasa](https://platform.claude.com/docs/id/build-with-claude/multilingual-support) [Penghitungan token](https://platform.claude.com/docs/id/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/id/build-with-claude/embeddings) [Visi](https://platform.claude.com/docs/id/build-with-claude/vision) [Dukungan PDF](https://platform.claude.com/docs/id/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/id/build-with-claude/files) [Hasil pencarian](https://platform.claude.com/docs/id/build-with-claude/search-results) [Output terstruktur](https://platform.claude.com/docs/id/build-with-claude/structured-outputs)

Alat

[Ikhtisar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/overview) [Cara mengimplementasikan penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use) [Streaming alat berbutir halus](https://platform.claude.com/docs/id/agents-and-tools/tool-use/fine-grained-tool-streaming) [Alat Bash](https://platform.claude.com/docs/id/agents-and-tools/tool-use/bash-tool) [Alat eksekusi kode](https://platform.claude.com/docs/id/agents-and-tools/tool-use/code-execution-tool) [Pemanggilan alat terprogram](https://platform.claude.com/docs/id/agents-and-tools/tool-use/programmatic-tool-calling) [Alat penggunaan komputer](https://platform.claude.com/docs/id/agents-and-tools/tool-use/computer-use-tool) [Alat editor teks](https://platform.claude.com/docs/id/agents-and-tools/tool-use/text-editor-tool) [Alat pengambilan web](https://platform.claude.com/docs/id/agents-and-tools/tool-use/web-fetch-tool) [Alat pencarian web](https://platform.claude.com/docs/id/agents-and-tools/tool-use/web-search-tool) [Alat memori](https://platform.claude.com/docs/id/agents-and-tools/tool-use/memory-tool) [Alat pencarian alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/tool-search-tool)

Keterampilan Agen

[Ikhtisar](https://platform.claude.com/docs/id/agents-and-tools/agent-skills/overview) [Mulai cepat](https://platform.claude.com/docs/id/agents-and-tools/agent-skills/quickstart) [Praktik terbaik](https://platform.claude.com/docs/id/agents-and-tools/agent-skills/best-practices) [Menggunakan Keterampilan dengan API](https://platform.claude.com/docs/id/build-with-claude/skills-guide)

Agent SDK

[Ikhtisar](https://platform.claude.com/docs/id/agent-sdk/overview) [Mulai cepat](https://platform.claude.com/docs/id/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/id/agent-sdk/typescript) [TypeScript V2 (pratinjau)](https://platform.claude.com/docs/id/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/id/agent-sdk/python) [Panduan migrasi](https://platform.claude.com/docs/id/agent-sdk/migration-guide)

Panduan

MCP di API

[Konektor MCP](https://platform.claude.com/docs/id/agents-and-tools/mcp-connector) [Server MCP jarak jauh](https://platform.claude.com/docs/id/agents-and-tools/remote-mcp-servers)

Claude di platform pihak ketiga

[Amazon Bedrock](https://platform.claude.com/docs/id/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/id/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/id/build-with-claude/claude-on-vertex-ai)

Rekayasa prompt

[Ikhtisar](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/overview) [Generator prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/prompt-generator) [Gunakan template prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Penyempurna prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/prompt-improver) [Jadilah jelas dan langsung](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/be-clear-and-direct) [Gunakan contoh (multishot prompting)](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/multishot-prompting) [Biarkan Claude berpikir (CoT)](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/chain-of-thought) [Gunakan tag XML](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/use-xml-tags) [Berikan Claude peran (prompt sistem)](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/system-prompts) [Isi sebelumnya respons Claude](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/prefill-claudes-response) [Rantai prompt kompleks](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/chain-prompts) [Tips konteks panjang](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/long-context-tips) [Tips extended thinking](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/extended-thinking-tips)

Uji & evaluasi

[Tentukan kriteria kesuksesan](https://platform.claude.com/docs/id/test-and-evaluate/define-success) [Kembangkan kasus uji](https://platform.claude.com/docs/id/test-and-evaluate/develop-tests) [Menggunakan alat evaluasi](https://platform.claude.com/docs/id/test-and-evaluate/eval-tool) [Mengurangi latensi](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-latency)

Perkuat penjaga

[Kurangi halusinasi](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Tingkatkan konsistensi output](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/increase-consistency) [Mitigasi jailbreak](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Streaming penolakan](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Kurangi kebocoran prompt](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Jaga Claude tetap berkarakter](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Administrasi dan pemantauan

[Ikhtisar Admin API](https://platform.claude.com/docs/id/build-with-claude/administration-api) [API penggunaan dan biaya](https://platform.claude.com/docs/id/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/id/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Alat

Cara mengimplementasikan penggunaan alat

Alat

# Cara mengimplementasikan penggunaan alat

Copy page

Panduan lengkap untuk mengimplementasikan penggunaan alat dengan Claude, termasuk definisi alat, contoh, dan praktik terbaik.

Copy page

## Memilih model

Kami merekomendasikan menggunakan Claude Sonnet (4.5) atau Claude Opus (4.1) terbaru untuk alat kompleks dan kueri yang ambigu; mereka menangani beberapa alat dengan lebih baik dan mencari klarifikasi saat diperlukan.

Gunakan model Claude Haiku untuk alat yang sederhana, tetapi perhatikan bahwa mereka mungkin menyimpulkan parameter yang hilang.

Jika menggunakan Claude dengan penggunaan alat dan pemikiran yang diperluas, lihat panduan kami [di sini](https://platform.claude.com/docs/id/build-with-claude/extended-thinking) untuk informasi lebih lanjut.

## Menentukan alat klien

Alat klien (baik yang ditentukan Anthropic maupun yang ditentukan pengguna) ditentukan dalam parameter tingkat atas `tools` dari permintaan API. Setiap definisi alat mencakup:

| Parameter | Deskripsi |
| --- | --- |
| `name` | Nama alat. Harus cocok dengan regex `^[a-zA-Z0-9_-]{1,64}$`. |
| `description` | Deskripsi plaintext terperinci tentang apa yang dilakukan alat, kapan harus digunakan, dan bagaimana perilakunya. |
| `input_schema` | Objek [JSON Schema](https://json-schema.org/) yang mendefinisikan parameter yang diharapkan untuk alat. |
| `input_examples` | (Opsional, beta) Larik objek input contoh untuk membantu Claude memahami cara menggunakan alat. Lihat [Memberikan contoh penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples). |

### Contoh definisi alat sederhana

### Prompt sistem penggunaan alat

Ketika Anda memanggil Claude API dengan parameter `tools`, kami membuat prompt sistem khusus dari definisi alat, konfigurasi alat, dan prompt sistem yang ditentukan pengguna. Prompt yang dibangun dirancang untuk menginstruksikan model menggunakan alat yang ditentukan dan memberikan konteks yang diperlukan agar alat beroperasi dengan baik:

```
In this environment you have access to a set of tools you can use to answer the user's question.
{{ FORMATTING INSTRUCTIONS }}
String and scalar parameters should be specified as is, while lists and objects should use JSON format. Note that spaces for string values are not stripped. The output is not expected to be valid XML and is parsed with regular expressions.
Here are the functions available in JSONSchema format:
{{ TOOL DEFINITIONS IN JSON SCHEMA }}
{{ USER SYSTEM PROMPT }}
{{ TOOL CONFIGURATION }}
```

### Praktik terbaik untuk definisi alat

Untuk mendapatkan kinerja terbaik dari Claude saat menggunakan alat, ikuti panduan ini:

- **Berikan deskripsi yang sangat terperinci.**Ini adalah faktor paling penting dalam kinerja alat. Deskripsi Anda harus menjelaskan setiap detail tentang alat, termasuk:
  - Apa yang dilakukan alat
  - Kapan harus digunakan (dan kapan tidak boleh digunakan)
  - Apa arti setiap parameter dan bagaimana pengaruhnya terhadap perilaku alat
  - Peringatan atau batasan penting apa pun, seperti informasi apa yang tidak dikembalikan alat jika nama alat tidak jelas. Semakin banyak konteks yang dapat Anda berikan Claude tentang alat Anda, semakin baik dalam memutuskan kapan dan bagaimana menggunakannya. Targetkan setidaknya 3-4 kalimat per deskripsi alat, lebih banyak jika alat kompleks.
- **Prioritaskan deskripsi, tetapi pertimbangkan menggunakan `input_examples` untuk alat kompleks.** Deskripsi yang jelas paling penting, tetapi untuk alat dengan input kompleks, objek bersarang, atau parameter sensitif format, Anda dapat menggunakan bidang `input_examples` (beta) untuk memberikan contoh yang divalidasi skema. Lihat [Memberikan contoh penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#providing-tool-use-examples) untuk detail.

### Contoh deskripsi alat yang baik

### Contoh deskripsi alat yang buruk

Deskripsi yang baik dengan jelas menjelaskan apa yang dilakukan alat, kapan menggunakannya, data apa yang dikembalikan, dan apa arti parameter `ticker`. Deskripsi yang buruk terlalu singkat dan meninggalkan Claude dengan banyak pertanyaan terbuka tentang perilaku dan penggunaan alat.

## Memberikan contoh penggunaan alat

Anda dapat memberikan contoh konkret dari input alat yang valid untuk membantu Claude memahami cara menggunakan alat Anda dengan lebih efektif. Ini sangat berguna untuk alat kompleks dengan objek bersarang, parameter opsional, atau input sensitif format.

Contoh penggunaan alat adalah fitur beta. Sertakan [header beta](https://platform.claude.com/docs/id/api/beta-headers) yang sesuai untuk penyedia Anda:

| Penyedia | Header beta | Model yang didukung |
| --- | --- | --- |
| Claude API,<br>Microsoft Foundry | `advanced-tool-use-2025-11-20` | Semua model |
| Vertex AI,<br>Amazon Bedrock | `tool-examples-2025-10-29` | Claude Opus 4.5 saja |

### Penggunaan dasar

Tambahkan bidang `input_examples` opsional ke definisi alat Anda dengan larik objek input contoh. Setiap contoh harus valid sesuai dengan `input_schema` alat:

Python

```
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-5-20250929",
    max_tokens=1024,
    betas=["advanced-tool-use-2025-11-20"],
    tools=[\
        {\
            "name": "get_weather",\
            "description": "Get the current weather in a given location",\
            "input_schema": {\
                "type": "object",\
                "properties": {\
                    "location": {\
                        "type": "string",\
                        "description": "The city and state, e.g. San Francisco, CA"\
                    },\
                    "unit": {\
                        "type": "string",\
                        "enum": ["celsius", "fahrenheit"],\
                        "description": "The unit of temperature"\
                    }\
                },\
                "required": ["location"]\
            },\
            "input_examples": [\
                {\
                    "location": "San Francisco, CA",\
                    "unit": "fahrenheit"\
                },\
                {\
                    "location": "Tokyo, Japan",\
                    "unit": "celsius"\
                },\
                {\
                    "location": "New York, NY"  # 'unit' is optional\
                }\
            ]\
        }\
    ],
    messages=[\
        {"role": "user", "content": "What's the weather like in San Francisco?"}\
    ]
)
```

Contoh disertakan dalam prompt bersama skema alat Anda, menunjukkan Claude pola konkret untuk panggilan alat yang terbentuk dengan baik. Ini membantu Claude memahami kapan harus menyertakan parameter opsional, format apa yang harus digunakan, dan cara menyusun input kompleks.

### Persyaratan dan batasan

- **Validasi skema** \- Setiap contoh harus valid sesuai dengan `input_schema` alat. Contoh yang tidak valid mengembalikan kesalahan 400
- **Tidak didukung untuk alat sisi server** \- Hanya alat yang ditentukan pengguna yang dapat memiliki contoh input
- **Biaya token** \- Contoh menambah token prompt: ~20-50 token untuk contoh sederhana, ~100-200 token untuk objek bersarang kompleks

## Pelari alat (beta)

Pelari alat menyediakan solusi siap pakai untuk menjalankan alat dengan Claude. Alih-alih menangani panggilan alat, hasil alat, dan manajemen percakapan secara manual, pelari alat secara otomatis:

- Menjalankan alat ketika Claude memanggilnya
- Menangani siklus permintaan/respons
- Mengelola status percakapan
- Menyediakan keamanan tipe dan validasi

Kami merekomendasikan agar Anda menggunakan pelari alat untuk sebagian besar implementasi penggunaan alat.

Pelari alat saat ini dalam beta dan tersedia di SDK [Python](https://github.com/anthropics/anthropic-sdk-python/blob/main/tools.md), [TypeScript](https://github.com/anthropics/anthropic-sdk-typescript/blob/main/helpers.md#tool-helpers), dan [Ruby](https://github.com/anthropics/anthropic-sdk-ruby/blob/main/helpers.md#3-auto-looping-tool-runner-beta).

**Manajemen konteks otomatis dengan pemadatan**

Pelari alat mendukung [pemadatan](https://platform.claude.com/docs/id/build-with-claude/context-editing#client-side-compaction-sdk) otomatis, yang menghasilkan ringkasan ketika penggunaan token melebihi ambang batas. Ini memungkinkan tugas agentic jangka panjang untuk melanjutkan melampaui batas jendela konteks.

Python

Python

TypeScript (Zod)

TypeScript (Zod)

TypeScript (JSON Schema)

TypeScript (JSON Schema)

Ruby

Ruby

### Penggunaan dasar

Gunakan dekorator `@beta_tool` untuk mendefinisikan alat dan `client.beta.messages.tool_runner()` untuk menjalankannya.

Jika Anda menggunakan klien async, ganti `@beta_tool` dengan `@beta_async_tool` dan tentukan fungsi dengan `async def`.

```
import anthropic
import json
from anthropic import beta_tool

# Initialize client
client = anthropic.Anthropic()

# Define tools using the decorator
@beta_tool
def get_weather(location: str, unit: str = "fahrenheit") -> str:
    """Get the current weather in a given location.

    Args:
        location: The city and state, e.g. San Francisco, CA
        unit: Temperature unit, either 'celsius' or 'fahrenheit'
    """
    # In a full implementation, you'd call a weather API here
    return json.dumps({"temperature": "20°C", "condition": "Sunny"})

@beta_tool
def calculate_sum(a: int, b: int) -> str:
    """Add two numbers together.

    Args:
        a: First number
        b: Second number
    """
    return str(a + b)

# Use the tool runner
runner = client.beta.messages.tool_runner(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=[get_weather, calculate_sum],
    messages=[\
        {"role": "user", "content": "What's the weather like in Paris? Also, what's 15 + 27?"}\
    ]
)
for message in runner:
    print(message.content[0].text)
```

Fungsi yang didekorasi harus mengembalikan blok konten atau larik blok konten, termasuk teks, gambar, atau blok dokumen. Ini memungkinkan alat mengembalikan respons kaya multimodal. String yang dikembalikan akan dikonversi ke blok konten teks.
Jika Anda ingin mengembalikan objek JSON terstruktur ke Claude, enkode ke string JSON sebelum mengembalikannya. Angka, boolean, atau primitif non-string lainnya juga harus dikonversi ke string.

Dekorator `@beta_tool` akan memeriksa argumen fungsi dan docstring untuk mengekstrak representasi skema json dari fungsi yang diberikan, dalam contoh di atas `calculate_sum` akan diubah menjadi:

```
{
  "name": "calculate_sum",
  "description": "Adds two integers together.",
  "input_schema": {
    "additionalProperties": false,
    "properties": {
      "left": {
        "description": "The first integer to add.",
        "title": "Left",
        "type": "integer"
      },
      "right": {
        "description": "The second integer to add.",
        "title": "Right",
        "type": "integer"
      }
    },
    "required": ["left", "right"],
    "type": "object"
  }
}
```

### Iterasi di atas pelari alat

Pelari alat yang dikembalikan oleh `tool_runner()` dapat diiterasi, yang dapat Anda iterasi dengan loop `for`. Ini sering disebut sebagai "loop panggilan alat".
Setiap iterasi loop menghasilkan pesan yang dikembalikan oleh Claude.

Setelah kode Anda memiliki kesempatan untuk memproses pesan saat ini di dalam loop, pelari alat akan memeriksa pesan untuk melihat apakah Claude meminta penggunaan alat. Jika demikian, itu akan memanggil alat dan mengirim hasil alat kembali ke Claude secara otomatis, kemudian menghasilkan pesan berikutnya dari Claude untuk memulai iterasi berikutnya dari loop Anda.

Anda dapat mengakhiri loop pada iterasi apa pun dengan pernyataan `break` sederhana. Pelari alat akan terus berulang sampai Claude mengembalikan pesan tanpa penggunaan alat.

Jika Anda tidak peduli dengan pesan perantara, alih-alih menggunakan loop, Anda dapat memanggil metode `until_done()`, yang akan mengembalikan pesan terakhir dari Claude:

```
runner = client.beta.messages.tool_runner(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=[get_weather, calculate_sum],
    messages=[\
        {"role": "user", "content": "What's the weather like in Paris? Also, what's 15 + 27?"}\
    ]
)
final_message = runner.until_done()
print(final_message.content[0].text)
```

### Penggunaan lanjutan

Dalam loop, Anda memiliki kemampuan untuk sepenuhnya menyesuaikan permintaan berikutnya dari pelari alat ke Messages API.
Metode `runner.generate_tool_call_response()` akan memanggil alat (jika Claude memicu penggunaan alat) dan memberi Anda akses ke hasil alat yang akan dikirim kembali ke Messages API.
Metode `runner.set_messages_params()` dan `runner.append_messages()` memungkinkan Anda memodifikasi parameter untuk permintaan Messages API berikutnya.

```
runner = client.beta.messages.tool_runner(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=[get_weather],
    messages=[{"role": "user", "content": "What's the weather in San Francisco?"}]
)
for message in runner:
    # Get the tool response that will be sent
    tool_response = runner.generate_tool_call_response()

    # Customize the next request
    runner.set_messages_params(lambda params: {
        **params,
        "max_tokens": 2048  # Increase tokens for next request
    })

    # Or add additional messages
    runner.append_messages(
        {"role": "user", "content": "Please be concise in your response."}
    )
```

### Streaming

Saat mengaktifkan streaming dengan `stream=True`, setiap nilai yang dipancarkan oleh pelari alat adalah `BetaMessageStream` seperti yang dikembalikan dari `anthropic.messages.stream()`. `BetaMessageStream` itu sendiri adalah iterable yang menghasilkan peristiwa streaming dari Messages API.

Anda dapat menggunakan `message_stream.get_final_message()` untuk membiarkan SDK melakukan akumulasi peristiwa streaming menjadi pesan terakhir untuk Anda.

```
runner = client.beta.messages.tool_runner(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=[calculate_sum],
    messages=[{"role": "user", "content": "What is 15 + 27?"}],
    stream=True
)

# When streaming, the runner returns BetaMessageStream
for message_stream in runner:
    for event in message_stream:
        print('event:', event)
    print('message:', message_stream.get_final_message())

print(runner.until_done())
```

Pelari alat SDK dalam beta. Sisa dokumen ini mencakup implementasi alat manual.

## Mengontrol output Claude

### Memaksa penggunaan alat

Dalam beberapa kasus, Anda mungkin ingin Claude menggunakan alat tertentu untuk menjawab pertanyaan pengguna, bahkan jika Claude berpikir dapat memberikan jawaban tanpa menggunakan alat. Anda dapat melakukan ini dengan menentukan alat dalam bidang `tool_choice` seperti ini:

```
tool_choice = {"type": "tool", "name": "get_weather"}
```

Saat bekerja dengan parameter tool\_choice, kami memiliki empat opsi yang mungkin:

- `auto` memungkinkan Claude memutuskan apakah akan memanggil alat yang disediakan atau tidak. Ini adalah nilai default ketika `tools` disediakan.
- `any` memberitahu Claude bahwa itu harus menggunakan salah satu alat yang disediakan, tetapi tidak memaksa alat tertentu.
- `tool` memungkinkan kami memaksa Claude untuk selalu menggunakan alat tertentu.
- `none` mencegah Claude menggunakan alat apa pun. Ini adalah nilai default ketika tidak ada `tools` yang disediakan.

Saat menggunakan [prompt caching](https://platform.claude.com/docs/id/build-with-claude/prompt-caching#what-invalidates-the-cache), perubahan pada parameter `tool_choice` akan membatalkan blok pesan yang di-cache. Definisi alat dan prompt sistem tetap di-cache, tetapi konten pesan harus diproses ulang.

Diagram ini mengilustrasikan cara kerja setiap opsi:

![](https://platform.claude.com/docs/images/tool_choice.png)

Perhatikan bahwa ketika Anda memiliki `tool_choice` sebagai `any` atau `tool`, kami akan mengisi pesan asisten sebelumnya untuk memaksa alat digunakan. Ini berarti bahwa model tidak akan memancarkan respons bahasa alami atau penjelasan sebelum blok konten `tool_use`, bahkan jika secara eksplisit diminta untuk melakukannya.

Saat menggunakan [pemikiran yang diperluas](https://platform.claude.com/docs/id/build-with-claude/extended-thinking) dengan penggunaan alat, `tool_choice: {"type": "any"}` dan `tool_choice: {"type": "tool", "name": "..."}` tidak didukung dan akan menghasilkan kesalahan. Hanya `tool_choice: {"type": "auto"}` (default) dan `tool_choice: {"type": "none"}` yang kompatibel dengan pemikiran yang diperluas.

Pengujian kami telah menunjukkan bahwa ini seharusnya tidak mengurangi kinerja. Jika Anda ingin model memberikan konteks bahasa alami atau penjelasan sambil tetap meminta model menggunakan alat tertentu, Anda dapat menggunakan `{"type": "auto"}` untuk `tool_choice` (default) dan menambahkan instruksi eksplisit dalam pesan `user`. Misalnya: `What's the weather like in London? Use the get_weather tool in your response.`

**Panggilan alat yang dijamin dengan alat ketat**

Gabungkan `tool_choice: {"type": "any"}` dengan [penggunaan alat ketat](https://platform.claude.com/docs/id/build-with-claude/structured-outputs) untuk menjamin bahwa salah satu alat Anda akan dipanggil DAN input alat secara ketat mengikuti skema Anda. Atur `strict: true` pada definisi alat Anda untuk mengaktifkan validasi skema.

### Output JSON

Alat tidak harus berupa fungsi klien — Anda dapat menggunakan alat kapan saja Anda ingin model mengembalikan output JSON yang mengikuti skema yang disediakan. Misalnya, Anda mungkin menggunakan alat `record_summary` dengan skema tertentu. Lihat [Penggunaan alat dengan Claude](https://platform.claude.com/docs/id/agents-and-tools/tool-use/overview) untuk contoh kerja lengkap.

### Respons model dengan alat

Saat menggunakan alat, Claude sering kali akan mengomentari apa yang sedang dilakukannya atau merespons secara alami kepada pengguna sebelum memanggil alat.

Misalnya, diberikan prompt "Bagaimana cuaca di San Francisco sekarang, dan jam berapa di sana?", Claude mungkin merespons dengan:

JSON

```
{
  "role": "assistant",
  "content": [\
    {\
      "type": "text",\
      "text": "Saya akan membantu Anda memeriksa cuaca saat ini dan waktu di San Francisco."\
    },\
    {\
      "type": "tool_use",\
      "id": "toolu_01A09q90qw90lq917835lq9",\
      "name": "get_weather",\
      "input": {"location": "San Francisco, CA"}\
    }\
  ]
}
```

Gaya respons alami ini membantu pengguna memahami apa yang dilakukan Claude dan menciptakan interaksi yang lebih percakapan. Anda dapat memandu gaya dan konten respons ini melalui prompt sistem Anda dan dengan menyediakan `<examples>` dalam prompt Anda.

Penting untuk dicatat bahwa Claude dapat menggunakan berbagai frasa dan pendekatan saat menjelaskan tindakannya. Kode Anda harus memperlakukan respons ini seperti teks yang dihasilkan asisten lainnya, dan tidak mengandalkan konvensi pemformatan tertentu.

### Penggunaan alat paralel

Secara default, Claude dapat menggunakan beberapa alat untuk menjawab pertanyaan pengguna. Anda dapat menonaktifkan perilaku ini dengan:

- Mengatur `disable_parallel_tool_use=true` ketika tipe tool\_choice adalah `auto`, yang memastikan bahwa Claude menggunakan **paling banyak satu** alat
- Mengatur `disable_parallel_tool_use=true` ketika tipe tool\_choice adalah `any` atau `tool`, yang memastikan bahwa Claude menggunakan **tepat satu** alat

### Contoh penggunaan alat paralel lengkap

### Skrip pengujian lengkap untuk alat paralel

#### Memaksimalkan penggunaan alat paralel

Meskipun model Claude 4 memiliki kemampuan penggunaan alat paralel yang sangat baik secara default, Anda dapat meningkatkan kemungkinan eksekusi alat paralel di semua model dengan prompting yang ditargetkan:

### Prompt sistem untuk penggunaan alat paralel

### Prompting pesan pengguna

**Penggunaan alat paralel dengan Claude Sonnet 3.7**

Claude Sonnet 3.7 mungkin kurang mungkin membuat panggilan alat paralel dalam respons, bahkan ketika Anda belum mengatur `disable_parallel_tool_use`. Kami merekomendasikan [meningkatkan ke model Claude 4](https://platform.claude.com/docs/id/about-claude/models/migrating-to-claude-4), yang memiliki penggunaan alat yang hemat token bawaan dan pemanggilan alat paralel yang ditingkatkan.

Jika Anda masih menggunakan Claude Sonnet 3.7, Anda dapat mengaktifkan header beta `token-efficient-tools-2025-02-19` [beta header](https://platform.claude.com/docs/id/api/beta-headers), yang membantu mendorong Claude untuk menggunakan alat paralel. Anda juga dapat memperkenalkan "alat batch" yang dapat bertindak sebagai meta-alat untuk membungkus invokasi ke alat lain secara bersamaan.

Lihat [contoh ini](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/parallel_tools_claude_3_7_sonnet.ipynb) dalam cookbook kami untuk cara menggunakan solusi ini.

## Menangani blok konten penggunaan alat dan hasil alat

**Lebih sederhana dengan Tool runner**: Penanganan alat manual yang dijelaskan di bagian ini secara otomatis dikelola oleh [tool runner](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#tool-runner-beta). Gunakan bagian ini ketika Anda memerlukan kontrol khusus atas eksekusi alat.

Respons Claude berbeda tergantung pada apakah menggunakan alat klien atau alat server.

### Menangani hasil dari alat klien

Respons akan memiliki `stop_reason` dari `tool_use` dan satu atau lebih blok konten `tool_use` yang mencakup:

- `id`: Pengenal unik untuk blok penggunaan alat tertentu ini. Ini akan digunakan untuk mencocokkan hasil alat nanti.
- `name`: Nama alat yang digunakan.
- `input`: Objek yang berisi input yang diteruskan ke alat, sesuai dengan `input_schema` alat.

### Contoh respons API dengan blok konten \`tool\_use\`

Ketika Anda menerima respons penggunaan alat untuk alat klien, Anda harus:

1. Ekstrak `name`, `id`, dan `input` dari blok `tool_use`.
2. Jalankan alat sebenarnya dalam codebase Anda yang sesuai dengan nama alat itu, meneruskan `input` alat.
3. Lanjutkan percakapan dengan mengirim pesan baru dengan `role` dari `user`, dan blok `content` yang berisi tipe `tool_result` dan informasi berikut:
   - `tool_use_id`: `id` dari permintaan penggunaan alat yang merupakan hasil ini.
   - `content`: Hasil alat, sebagai string (misalnya `"content": "15 derajat"`), daftar blok konten bersarang (misalnya `"content": [{"type": "text", "text": "15 derajat"}]`), atau daftar blok dokumen (misalnya `"content": ["type": "document", "source": {"type": "text", "media_type": "text/plain", "data": "15 derajat"}]`). Blok konten ini dapat menggunakan tipe `text`, `image`, atau `document`.
   - `is_error` (opsional): Atur ke `true` jika eksekusi alat menghasilkan kesalahan.

**Persyaratan pemformatan penting**:

- Blok hasil alat harus segera mengikuti blok penggunaan alat yang sesuai dalam riwayat pesan. Anda tidak dapat menyertakan pesan apa pun antara pesan penggunaan alat asisten dan pesan hasil alat pengguna.
- Dalam pesan pengguna yang berisi hasil alat, blok tool\_result harus datang PERTAMA dalam larik konten. Teks apa pun harus datang SETELAH semua hasil alat.

Misalnya, ini akan menyebabkan kesalahan 400:

```
{"role": "user", "content": [\
  {"type": "text", "text": "Berikut adalah hasilnya:"},  // ❌ Teks sebelum tool_result\
  {"type": "tool_result", "tool_use_id": "toolu_01", ...}\
]}
```

Ini benar:

```
{"role": "user", "content": [\
  {"type": "tool_result", "tool_use_id": "toolu_01", ...},\
  {"type": "text", "text": "Apa yang harus saya lakukan selanjutnya?"}  // ✅ Teks setelah tool_result\
]}
```

Jika Anda menerima kesalahan seperti "tool\_use ids were found without tool\_result blocks immediately after", periksa bahwa hasil alat Anda diformat dengan benar.

### Contoh hasil alat yang berhasil

### Contoh hasil alat dengan gambar

### Contoh hasil alat kosong

### Contoh hasil alat dengan dokumen

Setelah menerima hasil alat, Claude akan menggunakan informasi itu untuk melanjutkan menghasilkan respons terhadap prompt pengguna asli.

### Menangani hasil dari alat server

Claude mengeksekusi alat secara internal dan menggabungkan hasil langsung ke dalam responsnya tanpa memerlukan interaksi pengguna tambahan.

**Perbedaan dari API lain**

Tidak seperti API yang memisahkan penggunaan alat atau menggunakan peran khusus seperti `tool` atau `function`, API Claude mengintegrasikan alat langsung ke dalam struktur pesan `user` dan `assistant`.

Pesan berisi larik blok `text`, `image`, `tool_use`, dan `tool_result`. Pesan `user` mencakup konten klien dan `tool_result`, sementara pesan `assistant` berisi konten yang dihasilkan AI dan `tool_use`.

### Menangani alasan penghentian `max_tokens`

Jika [respons Claude terpotong karena mencapai batas `max_tokens`](https://platform.claude.com/docs/id/build-with-claude/handling-stop-reasons#max-tokens), dan respons yang terpotong berisi blok penggunaan alat yang tidak lengkap, Anda perlu mencoba ulang permintaan dengan nilai `max_tokens` yang lebih tinggi untuk mendapatkan penggunaan alat lengkap.

Python

```
# Periksa apakah respons terpotong selama penggunaan alat
if response.stop_reason == "max_tokens":
    # Periksa apakah blok konten terakhir adalah tool_use yang tidak lengkap
    last_block = response.content[-1]
    if last_block.type == "tool_use":
        # Kirim permintaan dengan max_tokens yang lebih tinggi
        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=4096,  # Batas yang ditingkatkan
            messages=messages,
            tools=tools
        )
```

#### Menangani alasan penghentian `pause_turn`

Saat menggunakan alat server seperti pencarian web, API dapat mengembalikan alasan penghentian `pause_turn`, menunjukkan bahwa API telah menjeda giliran yang berjalan lama.

Berikut cara menangani alasan penghentian `pause_turn`:

Python

```
import anthropic

client = anthropic.Anthropic()

# Permintaan awal dengan pencarian web
response = client.messages.create(
    model="claude-3-7-sonnet-latest",
    max_tokens=1024,
    messages=[\
        {\
            "role": "user",\
            "content": "Cari informasi komprehensif tentang terobosan komputasi kuantum pada tahun 2025"\
        }\
    ],
    tools=[{\
        "type": "web_search_20250305",\
        "name": "web_search",\
        "max_uses": 10\
    }]
)

# Periksa apakah respons memiliki alasan penghentian pause_turn
if response.stop_reason == "pause_turn":
    # Lanjutkan percakapan dengan konten yang dijeda
    messages = [\
        {"role": "user", "content": "Cari informasi komprehensif tentang terobosan komputasi kuantum pada tahun 2025"},\
        {"role": "assistant", "content": response.content}\
    ]

    # Kirim permintaan kelanjutan
    continuation = client.messages.create(
        model="claude-3-7-sonnet-latest",
        max_tokens=1024,
        messages=messages,
        tools=[{\
            "type": "web_search_20250305",\
            "name": "web_search",\
            "max_uses": 10\
        }]
    )

    print(continuation)
else:
    print(response)
```

Saat menangani `pause_turn`:

- **Lanjutkan percakapan**: Teruskan respons yang dijeda apa adanya dalam permintaan berikutnya untuk membiarkan Claude melanjutkan gilirannya
- **Ubah jika diperlukan**: Anda dapat secara opsional memodifikasi konten sebelum melanjutkan jika Anda ingin mengganggu atau mengalihkan percakapan
- **Pertahankan status alat**: Sertakan alat yang sama dalam permintaan kelanjutan untuk mempertahankan fungsionalitas

## Pemecahan masalah kesalahan

**Penanganan Kesalahan Bawaan**: [Tool runner](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#tool-runner-beta) menyediakan penanganan kesalahan otomatis untuk sebagian besar skenario umum. Bagian ini mencakup penanganan kesalahan manual untuk kasus penggunaan lanjutan.

Ada beberapa jenis kesalahan berbeda yang dapat terjadi saat menggunakan alat dengan Claude:

### Kesalahan eksekusi alat

### Nama alat tidak valid

### Tag \\<search\_quality\_reflection>

### Kesalahan alat server

### Panggilan alat paralel tidak berfungsi

- [Memilih model](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#memilih-model)
- [Menentukan alat klien](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#menentukan-alat-klien)
- [Prompt sistem penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#prompt-sistem-penggunaan-alat)
- [Praktik terbaik untuk definisi alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#praktik-terbaik-untuk-definisi-alat)
- [Memberikan contoh penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#memberikan-contoh-penggunaan-alat)
- [Penggunaan dasar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-dasar)
- [Persyaratan dan batasan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#persyaratan-dan-batasan)
- [Pelari alat (beta)](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#pelari-alat-beta)
- [Penggunaan dasar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-dasar-2)
- [Iterasi di atas pelari alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#iterasi-di-atas-pelari-alat)
- [Penggunaan lanjutan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-lanjutan)
- [Streaming](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#streaming)
- [Penggunaan dasar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-dasar-3)
- [Iterasi di atas pelari alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#iterasi-di-atas-pelari-alat-2)
- [Penggunaan lanjutan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-lanjutan-2)
- [Streaming](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#streaming-2)
- [Penggunaan dasar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-dasar-4)
- [Iterasi di atas pelari alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#iterasi-di-atas-pelari-alat-3)
- [Penggunaan lanjutan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-lanjutan-3)
- [Streaming](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#streaming-3)
- [Penggunaan dasar](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-dasar-5)
- [Iterasi di atas pelari alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#iterasi-di-atas-pelari-alat-4)
- [Penggunaan lanjutan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-lanjutan-4)
- [Streaming](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#streaming-4)
- [Mengontrol output Claude](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#mengontrol-output-claude)
- [Memaksa penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#memaksa-penggunaan-alat)
- [Output JSON](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#output-json)
- [Respons model dengan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#respons-model-dengan-alat)
- [Penggunaan alat paralel](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#penggunaan-alat-paralel)
- [Menangani blok konten penggunaan alat dan hasil alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#menangani-blok-konten-penggunaan-alat-dan-hasil-alat)
- [Menangani hasil dari alat klien](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#menangani-hasil-dari-alat-klien)
- [Menangani hasil dari alat server](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#menangani-hasil-dari-alat-server)
- [Menangani alasan penghentian max\_tokens](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#menangani-alasan-penghentian-max-tokens)
- [Pemecahan masalah kesalahan](https://platform.claude.com/docs/id/agents-and-tools/tool-use/implement-tool-use#pemecahan-masalah-kesalahan)

[Claude Docs home page](https://platform.claude.com/docs)

[X (Twitter)](https://x.com/claudeai)[LinkedIn](https://www.linkedin.com/showcase/claude)[Instagram](https://instagram.com/claudeai)

### Solutions

- [AI agents](https://claude.com/solutions/agents)
- [Code modernization](https://claude.com/solutions/code-modernization)
- [Coding](https://claude.com/solutions/coding)
- [Customer support](https://claude.com/solutions/customer-support)
- [Education](https://claude.com/solutions/education)
- [Financial services](https://claude.com/solutions/financial-services)
- [Government](https://claude.com/solutions/government)
- [Life sciences](https://claude.com/solutions/life-sciences)

### Partners

- [Amazon Bedrock](https://claude.com/partners/amazon-bedrock)
- [Google Cloud's Vertex AI](https://claude.com/partners/google-cloud-vertex-ai)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Company

- [Anthropic](https://www.anthropic.com/company)
- [Careers](https://www.anthropic.com/careers)
- [Economic Futures](https://www.anthropic.com/economic-futures)
- [Research](https://www.anthropic.com/research)
- [News](https://www.anthropic.com/news)
- [Responsible Scaling Policy](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy)
- [Security and compliance](https://trust.anthropic.com/)
- [Transparency](https://www.anthropic.com/transparency)

### Learn

- [Blog](https://claude.com/blog)
- [Catalog](https://claude.ai/catalog/artifacts)
- [Courses](https://www.anthropic.com/learn)
- [Use cases](https://claude.com/resources/use-cases)
- [Connectors](https://claude.com/partners/mcp)
- [Customer stories](https://claude.com/customers)
- [Engineering at Anthropic](https://www.anthropic.com/engineering)
- [Events](https://www.anthropic.com/events)
- [Powered by Claude](https://claude.com/partners/powered-by-claude)
- [Service partners](https://claude.com/partners/services)
- [Startups program](https://claude.com/programs/startups)

### Help and security

- [Availability](https://www.anthropic.com/supported-countries)
- [Status](https://status.anthropic.com/)
- [Support](https://support.claude.com/)
- [Discord](https://www.anthropic.com/discord)

### Terms and policies

- [Privacy policy](https://www.anthropic.com/legal/privacy)
- [Responsible disclosure policy](https://www.anthropic.com/responsible-disclosure-policy)
- [Terms of service: Commercial](https://www.anthropic.com/legal/commercial-terms)
- [Terms of service: Consumer](https://www.anthropic.com/legal/consumer-terms)
- [Usage policy](https://www.anthropic.com/legal/aup)

Ask Docs
![Chat avatar](https://platform.claude.com/docs/images/book-icon-light.svg)

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)