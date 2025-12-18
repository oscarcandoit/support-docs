---
url: "https://platform.claude.com/docs/id/agent-sdk/hooks"
title: "Intercept dan kontrol perilaku agen dengan hooks - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fagent-sdk%2Fhooks)

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

[Input streaming](https://platform.claude.com/docs/id/agent-sdk/streaming-vs-single-mode) [Menangani izin](https://platform.claude.com/docs/id/agent-sdk/permissions) [Kontrol eksekusi dengan hook](https://platform.claude.com/docs/id/agent-sdk/hooks) [Manajemen sesi](https://platform.claude.com/docs/id/agent-sdk/sessions) [Output terstruktur di SDK](https://platform.claude.com/docs/id/agent-sdk/structured-outputs) [Hosting Agent SDK](https://platform.claude.com/docs/id/agent-sdk/hosting) [Penyebaran agen AI dengan aman](https://platform.claude.com/docs/id/agent-sdk/secure-deployment) [Memodifikasi prompt sistem](https://platform.claude.com/docs/id/agent-sdk/modifying-system-prompts) [MCP di SDK](https://platform.claude.com/docs/id/agent-sdk/mcp) [Alat kustom](https://platform.claude.com/docs/id/agent-sdk/custom-tools) [Subagen di SDK](https://platform.claude.com/docs/id/agent-sdk/subagents) [Perintah garis miring di SDK](https://platform.claude.com/docs/id/agent-sdk/slash-commands) [Keterampilan agen di SDK](https://platform.claude.com/docs/id/agent-sdk/skills) [Pelacakan biaya dan penggunaan](https://platform.claude.com/docs/id/agent-sdk/cost-tracking) [Daftar tugas](https://platform.claude.com/docs/id/agent-sdk/todo-tracking) [Plugin di SDK](https://platform.claude.com/docs/id/agent-sdk/plugins)

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

Panduan

Kontrol eksekusi dengan hook

Panduan

# Intercept dan kontrol perilaku agen dengan hooks

Copy page

Intercept dan sesuaikan perilaku agen pada titik eksekusi kunci dengan hooks

Copy page

Hooks memungkinkan Anda untuk menginterceptor eksekusi agen pada titik-titik kunci untuk menambahkan validasi, logging, kontrol keamanan, atau logika kustom. Dengan hooks, Anda dapat:

- **Memblokir operasi berbahaya** sebelum dieksekusi, seperti perintah shell yang merusak atau akses file yang tidak sah
- **Log dan audit** setiap pemanggilan tool untuk kepatuhan, debugging, atau analitik
- **Transformasi input dan output** untuk membersihkan data, menyuntikkan kredensial, atau mengalihkan jalur file
- **Memerlukan persetujuan manusia** untuk tindakan sensitif seperti penulisan database atau panggilan API
- **Lacak siklus hidup sesi** untuk mengelola status, membersihkan sumber daya, atau mengirim notifikasi

Sebuah hook memiliki dua bagian:

1. **Fungsi callback**: logika yang berjalan ketika hook dipicu
2. **Konfigurasi hook**: memberitahu SDK acara mana yang akan di-hook (seperti `PreToolUse`) dan tool mana yang cocok

Contoh berikut memblokir agen dari memodifikasi file `.env`. Pertama, tentukan callback yang memeriksa jalur file, kemudian teruskan ke `query()` untuk dijalankan sebelum panggilan tool Write atau Edit apa pun:

Python

```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, HookMatcher

# Define a hook callback that receives tool call details
async def protect_env_files(input_data, tool_use_id, context):
    # Extract the file path from the tool's input arguments
    file_path = input_data['tool_input'].get('file_path', '')
    file_name = file_path.split('/')[-1]

    # Block the operation if targeting a .env file
    if file_name == '.env':
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Cannot modify .env files'
            }
        }

    # Return empty object to allow the operation
    return {}

async def main():
    async for message in query(
        prompt="Update the database configuration",
        options=ClaudeAgentOptions(
            hooks={
                # Register the hook for PreToolUse events
                # The matcher filters to only Write and Edit tool calls
                'PreToolUse': [HookMatcher(matcher='Write|Edit', hooks=[protect_env_files])]
            }
        )
    ):
        print(message)

asyncio.run(main())
```

Ini adalah hook `PreToolUse`. Hook ini berjalan sebelum tool dieksekusi dan dapat memblokir atau mengizinkan operasi berdasarkan logika Anda. Sisa panduan ini mencakup semua hook yang tersedia, opsi konfigurasi mereka, dan pola untuk kasus penggunaan umum.

## Hook yang tersedia

SDK menyediakan hooks untuk tahap berbeda dari eksekusi agen. Beberapa hooks tersedia di kedua SDK, sementara yang lain hanya TypeScript karena Python SDK tidak mendukungnya.

| Hook Event | Python SDK | TypeScript SDK | Apa yang memicunya | Contoh kasus penggunaan |
| --- | --- | --- | --- | --- |
| `PreToolUse` | Ya | Ya | Permintaan pemanggilan tool (dapat memblokir atau memodifikasi) | Blokir perintah shell berbahaya |
| `PostToolUse` | Ya | Ya | Hasil eksekusi tool | Log semua perubahan file ke jejak audit |
| `PostToolUseFailure` | Tidak | Ya | Kegagalan eksekusi tool | Tangani atau log kesalahan tool |
| `UserPromptSubmit` | Ya | Ya | Pengajuan prompt pengguna | Suntikkan konteks tambahan ke dalam prompt |
| `Stop` | Ya | Ya | Penghentian eksekusi agen | Simpan status sesi sebelum keluar |
| `SubagentStart` | Tidak | Ya | Inisialisasi subagen | Lacak pemijahan tugas paralel |
| `SubagentStop` | Ya | Ya | Penyelesaian subagen | Agregasi hasil dari tugas paralel |
| `PreCompact` | Ya | Ya | Permintaan pemadatan percakapan | Arsipkan transkrip lengkap sebelum merangkum |
| `PermissionRequest` | Tidak | Ya | Dialog izin akan ditampilkan | Penanganan izin kustom |
| `SessionStart` | Tidak | Ya | Inisialisasi sesi | Inisialisasi logging dan telemetri |
| `SessionEnd` | Tidak | Ya | Penghentian sesi | Bersihkan sumber daya sementara |
| `Notification` | Tidak | Ya | Pesan status agen | Kirim pembaruan status agen ke Slack atau PagerDuty |

## Kasus penggunaan umum

Hooks cukup fleksibel untuk menangani banyak skenario berbeda. Berikut adalah beberapa pola paling umum yang diorganisir berdasarkan kategori.

Keamanan

Keamanan

Logging

Logging

Interception tool

Interception tool

Otorisasi

Otorisasi

- Blokir perintah berbahaya (seperti `rm -rf /`, SQL yang merusak)
- Validasi jalur file sebelum operasi penulisan
- Terapkan allowlist/blocklist untuk penggunaan tool

## Konfigurasi hooks

Untuk mengonfigurasi hook untuk agen Anda, teruskan hook dalam parameter `options.hooks` saat memanggil `query()`:

Python

```
async for message in query(
    prompt="Your prompt",
    options=ClaudeAgentOptions(
        hooks={
            'PreToolUse': [HookMatcher(matcher='Bash', hooks=[my_callback])]
        }
    )
):
    print(message)
```

Opsi `hooks` adalah kamus (Python) atau objek (TypeScript) di mana:

- **Kunci** adalah [nama acara hook](https://platform.claude.com/docs/id/agent-sdk/hooks#available-hooks) (misalnya, `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **Nilai** adalah array dari [matcher](https://platform.claude.com/docs/id/agent-sdk/hooks#matchers), masing-masing berisi pola filter opsional dan [fungsi callback](https://platform.claude.com/docs/id/agent-sdk/hooks#callback-function-inputs) Anda

Fungsi callback hook Anda menerima [data input](https://platform.claude.com/docs/id/agent-sdk/hooks#input-data) tentang acara dan mengembalikan [respons](https://platform.claude.com/docs/id/agent-sdk/hooks#callback-outputs) sehingga agen tahu untuk mengizinkan, memblokir, atau memodifikasi operasi.

### Matchers

Gunakan matcher untuk memfilter tool mana yang memicu callback Anda:

| Opsi | Tipe | Default | Deskripsi |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | Pola regex untuk mencocokkan nama tool. Tool bawaan termasuk `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebFetch`, `Task`, dan lainnya. Tool MCP menggunakan pola `mcp__<server>__<action>`. |
| `hooks` | `HookCallback[]` | - | Diperlukan. Array fungsi callback untuk dieksekusi ketika pola cocok |
| `timeout` | `number` | `60` | Timeout dalam detik; tingkatkan untuk hooks yang melakukan panggilan API eksternal |

Gunakan pola `matcher` untuk menargetkan tool tertentu kapan pun memungkinkan. Matcher dengan `'Bash'` hanya berjalan untuk perintah Bash, sementara menghilangkan pola menjalankan callback Anda untuk setiap pemanggilan tool. Perhatikan bahwa matcher hanya memfilter berdasarkan **nama tool**, bukan jalur file atau argumen lainnya—untuk memfilter berdasarkan jalur file, periksa `tool_input.file_path` di dalam callback Anda.

Matcher hanya berlaku untuk hook berbasis tool (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`). Untuk hook siklus hidup seperti `Stop`, `SessionStart`, dan `Notification`, matcher diabaikan dan hook dipicu untuk semua acara dari tipe itu.

**Menemukan nama tool:** Periksa array `tools` dalam pesan sistem awal ketika sesi Anda dimulai, atau tambahkan hook tanpa matcher untuk mencatat semua pemanggilan tool.

**Penamaan tool MCP:** Tool MCP selalu dimulai dengan `mcp__` diikuti oleh nama server dan tindakan: `mcp__<server>__<action>`. Misalnya, jika Anda mengonfigurasi server bernama `playwright`, toolnya akan dinamai `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click`, dll. Nama server berasal dari kunci yang Anda gunakan dalam konfigurasi `mcpServers`.

Contoh ini menggunakan matcher untuk menjalankan hook hanya untuk tool yang memodifikasi file ketika acara `PreToolUse` dipicu:

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(matcher='Write|Edit', hooks=[validate_file_path])\
        ]
    }
)
```

### Input fungsi callback

Setiap callback hook menerima tiga argumen:

1. **Data input** (`dict` / `HookInput`): Detail acara. Lihat [data input](https://platform.claude.com/docs/id/agent-sdk/hooks#input-data) untuk bidang
2. **ID penggunaan tool** (`str | None` / `string | null`): Korelasikan acara `PreToolUse` dan `PostToolUse`
3. **Konteks** (`HookContext`): Di TypeScript, berisi properti `signal` (`AbortSignal`) untuk pembatalan. Teruskan ini ke operasi async seperti `fetch()` sehingga mereka secara otomatis membatalkan jika hook kedaluwarsa. Di Python, argumen ini dicadangkan untuk penggunaan di masa depan.

### Data input

Argumen pertama untuk callback hook Anda berisi informasi tentang acara. Nama bidang identik di seluruh SDK (keduanya menggunakan snake\_case).

**Bidang umum** yang ada di semua tipe hook:

| Bidang | Tipe | Deskripsi |
| --- | --- | --- |
| `hook_event_name` | `string` | Tipe hook (`PreToolUse`, `PostToolUse`, dll.) |
| `session_id` | `string` | Pengidentifikasi sesi saat ini |
| `transcript_path` | `string` | Jalur ke transkrip percakapan |
| `cwd` | `string` | Direktori kerja saat ini |

**Bidang spesifik hook** bervariasi menurut tipe hook. Item yang ditandai TS hanya tersedia di TypeScript SDK:

| Bidang | Tipe | Deskripsi | Hooks |
| --- | --- | --- | --- |
| `tool_name` | `string` | Nama tool yang dipanggil | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_input` | `object` | Argumen yang dilewatkan ke tool | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_response` | `any` | Hasil yang dikembalikan dari eksekusi tool | PostToolUse |
| `error` | `string` | Pesan kesalahan dari kegagalan eksekusi tool | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | Apakah kegagalan disebabkan oleh gangguan | PostToolUseFailureTS |
| `prompt` | `string` | Teks prompt pengguna | UserPromptSubmit |
| `stop_hook_active` | `boolean` | Apakah hook stop sedang diproses | Stop, SubagentStop |
| `agent_id` | `string` | Pengidentifikasi unik untuk subagen | SubagentStartTS, SubagentStopTS |
| `agent_type` | `string` | Tipe/peran subagen | SubagentStartTS |
| `agent_transcript_path` | `string` | Jalur ke transkrip percakapan subagen | SubagentStopTS |
| `trigger` | `string` | Apa yang memicu pemadatan: `manual` atau `auto` | PreCompact |
| `custom_instructions` | `string` | Instruksi kustom yang disediakan untuk pemadatan | PreCompact |
| `permission_suggestions` | `array` | Pembaruan izin yang disarankan untuk tool | PermissionRequestTS |
| `source` | `string` | Bagaimana sesi dimulai: `startup`, `resume`, `clear`, atau `compact` | SessionStartTS |
| `reason` | `string` | Mengapa sesi berakhir: `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled`, atau `other` | SessionEndTS |
| `message` | `string` | Pesan status dari agen | NotificationTS |
| `notification_type` | `string` | Tipe notifikasi: `permission_prompt`, `idle_prompt`, `auth_success`, atau `elicitation_dialog` | NotificationTS |
| `title` | `string` | Judul opsional yang ditetapkan oleh agen | NotificationTS |

Kode di bawah mendefinisikan callback hook yang menggunakan `tool_name` dan `tool_input` untuk mencatat detail tentang setiap pemanggilan tool:

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### Output callback

Fungsi callback Anda mengembalikan objek yang memberitahu SDK cara melanjutkan. Kembalikan objek kosong `{}` untuk mengizinkan operasi tanpa perubahan. Untuk memblokir, memodifikasi, atau menambahkan konteks ke operasi, kembalikan objek dengan bidang `hookSpecificOutput` yang berisi keputusan Anda.

**Bidang tingkat atas** (di luar `hookSpecificOutput`):

| Bidang | Tipe | Deskripsi |
| --- | --- | --- |
| `continue` | `boolean` | Apakah agen harus melanjutkan setelah hook ini (default: `true`) |
| `stopReason` | `string` | Pesan yang ditampilkan ketika `continue` adalah `false` |
| `suppressOutput` | `boolean` | Sembunyikan stdout dari transkrip (default: `false`) |
| `systemMessage` | `string` | Pesan yang disuntikkan ke dalam percakapan untuk Claude lihat |

**Bidang di dalam `hookSpecificOutput`**:

| Bidang | Tipe | Hooks | Deskripsi |
| --- | --- | --- | --- |
| `hookEventName` | `string` | Semua | Diperlukan. Gunakan `input.hook_event_name` untuk mencocokkan acara saat ini |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | Mengontrol apakah tool dieksekusi |
| `permissionDecisionReason` | `string` | PreToolUse | Penjelasan yang ditampilkan kepada Claude untuk keputusan |
| `updatedInput` | `object` | PreToolUse | Input tool yang dimodifikasi (memerlukan `permissionDecision: 'allow'`) |
| `additionalContext` | `string` | PostToolUse, UserPromptSubmit, SessionStartTS, SubagentStartTS | Konteks yang ditambahkan ke percakapan |

Contoh ini memblokir operasi penulisan ke direktori `/etc` sambil menyuntikkan pesan sistem untuk mengingatkan Claude tentang praktik file yang aman:

Python

```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data['tool_input'].get('file_path', '')

    if file_path.startswith('/etc'):
        return {
            # Top-level field: inject guidance into the conversation
            'systemMessage': 'Remember: system directories like /etc are protected.',
            # hookSpecificOutput: block the operation
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Writing to /etc is not allowed'
            }
        }
    return {}
```

#### Alur keputusan izin

Ketika beberapa hook atau aturan izin berlaku, SDK mengevaluasinya dalam urutan ini:

1. Aturan **Deny** diperiksa terlebih dahulu (kecocokan apa pun = penolakan segera).
2. Aturan **Ask** diperiksa kedua.
3. Aturan **Allow** diperiksa ketiga.
4. **Default ke Ask** jika tidak ada yang cocok.

Jika hook apa pun mengembalikan `deny`, operasi diblokir—hook lain yang mengembalikan `allow` tidak akan menimpanya.

#### Blokir tool

Kembalikan keputusan deny untuk mencegah eksekusi tool:

Python

```
async def block_dangerous_commands(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    command = input_data['tool_input'].get('command', '')

    if 'rm -rf /' in command:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Dangerous command blocked: rm -rf /'
            }
        }
    return {}
```

#### Modifikasi input tool

Kembalikan input yang diperbarui untuk mengubah apa yang diterima tool:

Python

```
async def redirect_to_sandbox(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    if input_data['tool_name'] == 'Write':
        original_path = input_data['tool_input'].get('file_path', '')
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'updatedInput': {
                    **input_data['tool_input'],
                    'file_path': f'/sandbox{original_path}'
                }
            }
        }
    return {}
```

Saat menggunakan `updatedInput`, Anda juga harus menyertakan `permissionDecision`. Selalu kembalikan objek baru daripada mutasi `tool_input` asli.

#### Tambahkan pesan sistem

Suntikkan konteks ke dalam percakapan:

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### Persetujuan otomatis untuk tool tertentu

Lewati prompt izin untuk tool terpercaya. Ini berguna ketika Anda ingin operasi tertentu berjalan tanpa konfirmasi pengguna:

Python

```
async def auto_approve_read_only(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    read_only_tools = ['Read', 'Glob', 'Grep', 'LS']
    if input_data['tool_name'] in read_only_tools:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'permissionDecisionReason': 'Read-only tool auto-approved'
            }
        }
    return {}
```

Bidang `permissionDecision` menerima tiga nilai: `'allow'` (persetujuan otomatis), `'deny'` (blokir), atau `'ask'` (minta konfirmasi).

## Tangani skenario lanjutan

Pola-pola ini membantu Anda membangun sistem hook yang lebih canggih untuk kasus penggunaan yang kompleks.

### Chaining multiple hooks

Hooks dieksekusi dalam urutan kemunculannya di array. Jaga setiap hook tetap fokus pada tanggung jawab tunggal dan rantai beberapa hook untuk logika kompleks. Contoh ini menjalankan keempat hook untuk setiap pemanggilan tool (tidak ada matcher yang ditentukan):

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(hooks=[rate_limiter]),        # First: check rate limits\
            HookMatcher(hooks=[authorization_check]), # Second: verify permissions\
            HookMatcher(hooks=[input_sanitizer]),     # Third: sanitize inputs\
            HookMatcher(hooks=[audit_logger])         # Last: log the action\
        ]
    }
)
```

### Matcher spesifik tool dengan regex

Gunakan pola regex untuk mencocokkan beberapa tool:

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            # Match file modification tools\
            HookMatcher(matcher='Write|Edit|Delete', hooks=[file_security_hook]),\
\
            # Match all MCP tools\
            HookMatcher(matcher='^mcp__', hooks=[mcp_audit_hook]),\
\
            # Match everything (no matcher)\
            HookMatcher(hooks=[global_logger])\
        ]
    }
)
```

Matcher hanya mencocokkan **nama tool**, bukan jalur file atau argumen lainnya. Untuk memfilter berdasarkan jalur file, periksa `tool_input.file_path` di dalam callback hook Anda.

### Melacak aktivitas subagen

Gunakan hook `SubagentStop` untuk memantau penyelesaian subagen. `tool_use_id` membantu menghubungkan panggilan agen induk dengan subagen mereka:

Python

```
async def subagent_tracker(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'SubagentStop':
        print(f"[SUBAGENT] Completed")
        print(f"  Tool use ID: {tool_use_id}")
        print(f"  Stop hook active: {input_data.get('stop_hook_active')}")
    return {}

options = ClaudeAgentOptions(
    hooks={
        'SubagentStop': [HookMatcher(hooks=[subagent_tracker])]
    }
)
```

### Operasi async dalam hooks

Hooks dapat melakukan operasi async seperti permintaan HTTP. Tangani kesalahan dengan baik dengan menangkap pengecualian daripada melemparnya. Di TypeScript, teruskan `signal` ke `fetch()` sehingga permintaan dibatalkan jika hook kedaluwarsa:

Python

```
import aiohttp
from datetime import datetime

async def webhook_notifier(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PostToolUse':
        return {}

    try:
        async with aiohttp.ClientSession() as session:
            await session.post(
                'https://api.example.com/webhook',
                json={
                    'tool': input_data['tool_name'],
                    'timestamp': datetime.now().isoformat()
                }
            )
    except Exception as e:
        print(f'Webhook request failed: {e}')

    return {}
```

### Mengirim notifikasi (hanya TypeScript)

Gunakan hook `Notification` untuk menerima pembaruan status dari agen dan meneruskannya ke layanan eksternal seperti Slack atau dashboard pemantauan:

TypeScript

```
import { query, HookCallback, NotificationHookInput } from "@anthropic-ai/claude-agent-sdk";

const notificationHandler: HookCallback = async (input, toolUseID, { signal }) => {
  const notification = input as NotificationHookInput;

  await fetch('https://hooks.slack.com/services/YOUR/WEBHOOK/URL', {
    method: 'POST',
    body: JSON.stringify({
      text: `Agent status: ${notification.message}`
    }),
    signal
  });

  return {};
};

for await (const message of query({
  prompt: "Analyze this codebase",
  options: {
    hooks: {
      Notification: [{ hooks: [notificationHandler] }]
    }
  }
})) {
  console.log(message);
}
```

## Perbaiki masalah umum

Bagian ini mencakup masalah umum dan cara menyelesaikannya.

### Hook tidak dipicu

- Verifikasi nama acara hook benar dan peka huruf besar-kecil (`PreToolUse`, bukan `preToolUse`)
- Periksa bahwa pola matcher Anda cocok dengan nama tool dengan tepat
- Pastikan hook berada di bawah tipe acara yang benar dalam `options.hooks`
- Untuk hook `SubagentStop`, `Stop`, `SessionStart`, `SessionEnd`, dan `Notification`, matcher diabaikan. Hook ini dipicu untuk semua acara dari tipe itu.
- Hook mungkin tidak dipicu ketika agen mencapai batas [`max_turns`](https://platform.claude.com/docs/id/agent-sdk/python#configuration-options) karena sesi berakhir sebelum hook dapat dieksekusi

### Matcher tidak memfilter seperti yang diharapkan

Matcher hanya mencocokkan **nama tool**, bukan jalur file atau argumen lainnya. Untuk memfilter berdasarkan jalur file, periksa `tool_input.file_path` di dalam hook Anda:

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // Skip non-markdown files
  // Process markdown files...
};
```

### Hook timeout

- Tingkatkan nilai `timeout` dalam konfigurasi `HookMatcher`
- Gunakan `AbortSignal` dari argumen callback ketiga untuk menangani pembatalan dengan baik di TypeScript

### Tool diblokir secara tidak terduga

- Periksa semua hook `PreToolUse` untuk pengembalian `permissionDecision: 'deny'`
- Tambahkan logging ke hook Anda untuk melihat apa `permissionDecisionReason` yang mereka kembalikan
- Verifikasi pola matcher tidak terlalu luas (matcher kosong cocok dengan semua tool)

### Input yang dimodifikasi tidak diterapkan

- Pastikan `updatedInput` berada di dalam `hookSpecificOutput`, bukan di tingkat atas:







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- Anda juga harus mengembalikan `permissionDecision: 'allow'` agar modifikasi input berlaku

- Sertakan `hookEventName` dalam `hookSpecificOutput` untuk mengidentifikasi tipe hook mana output tersebut


### Hook sesi tidak tersedia

Hook `SessionStart`, `SessionEnd`, dan `Notification` hanya tersedia di TypeScript SDK. Python SDK tidak mendukung acara ini karena keterbatasan setup.

### Prompt izin subagen berlipat ganda

Saat memijahkan beberapa subagen, masing-masing mungkin meminta izin secara terpisah. Subagen tidak secara otomatis mewarisi izin agen induk. Untuk menghindari prompt berulang, gunakan hook `PreToolUse` untuk persetujuan otomatis tool tertentu, atau konfigurasi aturan izin yang berlaku untuk sesi subagen.

### Loop hook rekursif dengan subagen

Hook `UserPromptSubmit` yang memijahkan subagen dapat membuat loop tak terbatas jika subagen tersebut memicu hook yang sama. Untuk mencegah ini:

- Periksa indikator subagen dalam input hook sebelum memijahkan
- Gunakan bidang `parent_tool_use_id` untuk mendeteksi jika Anda sudah dalam konteks subagen
- Batasi hook hanya berjalan untuk sesi agen tingkat atas

### systemMessage tidak muncul dalam output

Bidang `systemMessage` menambahkan konteks ke percakapan yang model lihat, tetapi mungkin tidak muncul di semua mode output SDK. Jika Anda perlu menampilkan keputusan hook ke aplikasi Anda, log mereka secara terpisah atau gunakan saluran output khusus.

## Pelajari lebih lanjut

- [Permissions](https://platform.claude.com/docs/id/agent-sdk/permissions): kontrol apa yang dapat dilakukan agen Anda
- [Custom Tools](https://platform.claude.com/docs/id/agent-sdk/custom-tools): bangun tool untuk memperluas kemampuan agen
- [TypeScript SDK Reference](https://platform.claude.com/docs/id/agent-sdk/typescript)
- [Python SDK Reference](https://platform.claude.com/docs/id/agent-sdk/python)

- [Hook yang tersedia](https://platform.claude.com/docs/id/agent-sdk/hooks#hook-yang-tersedia)
- [Kasus penggunaan umum](https://platform.claude.com/docs/id/agent-sdk/hooks#kasus-penggunaan-umum)
- [Konfigurasi hooks](https://platform.claude.com/docs/id/agent-sdk/hooks#konfigurasi-hooks)
- [Matchers](https://platform.claude.com/docs/id/agent-sdk/hooks#matchers)
- [Input fungsi callback](https://platform.claude.com/docs/id/agent-sdk/hooks#input-fungsi-callback)
- [Data input](https://platform.claude.com/docs/id/agent-sdk/hooks#data-input)
- [Output callback](https://platform.claude.com/docs/id/agent-sdk/hooks#output-callback)
- [Tangani skenario lanjutan](https://platform.claude.com/docs/id/agent-sdk/hooks#tangani-skenario-lanjutan)
- [Chaining multiple hooks](https://platform.claude.com/docs/id/agent-sdk/hooks#chaining-multiple-hooks)
- [Matcher spesifik tool dengan regex](https://platform.claude.com/docs/id/agent-sdk/hooks#matcher-spesifik-tool-dengan-regex)
- [Melacak aktivitas subagen](https://platform.claude.com/docs/id/agent-sdk/hooks#melacak-aktivitas-subagen)
- [Operasi async dalam hooks](https://platform.claude.com/docs/id/agent-sdk/hooks#operasi-async-dalam-hooks)
- [Mengirim notifikasi (hanya TypeScript)](https://platform.claude.com/docs/id/agent-sdk/hooks#mengirim-notifikasi-hanya-type-script)
- [Perbaiki masalah umum](https://platform.claude.com/docs/id/agent-sdk/hooks#perbaiki-masalah-umum)
- [Hook tidak dipicu](https://platform.claude.com/docs/id/agent-sdk/hooks#hook-tidak-dipicu)
- [Matcher tidak memfilter seperti yang diharapkan](https://platform.claude.com/docs/id/agent-sdk/hooks#matcher-tidak-memfilter-seperti-yang-diharapkan)
- [Hook timeout](https://platform.claude.com/docs/id/agent-sdk/hooks#hook-timeout)
- [Tool diblokir secara tidak terduga](https://platform.claude.com/docs/id/agent-sdk/hooks#tool-diblokir-secara-tidak-terduga)
- [Input yang dimodifikasi tidak diterapkan](https://platform.claude.com/docs/id/agent-sdk/hooks#input-yang-dimodifikasi-tidak-diterapkan)
- [Hook sesi tidak tersedia](https://platform.claude.com/docs/id/agent-sdk/hooks#hook-sesi-tidak-tersedia)
- [Prompt izin subagen berlipat ganda](https://platform.claude.com/docs/id/agent-sdk/hooks#prompt-izin-subagen-berlipat-ganda)
- [Loop hook rekursif dengan subagen](https://platform.claude.com/docs/id/agent-sdk/hooks#loop-hook-rekursif-dengan-subagen)
- [systemMessage tidak muncul dalam output](https://platform.claude.com/docs/id/agent-sdk/hooks#system-message-tidak-muncul-dalam-output)
- [Pelajari lebih lanjut](https://platform.claude.com/docs/id/agent-sdk/hooks#pelajari-lebih-lanjut)

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