---
url: "https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization"
title: "Ringkasan dokumen hukum - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

Search...

⌘K

Sumber daya

[Ikhtisar](https://platform.claude.com/docs/id/resources/overview) [Glosarium](https://platform.claude.com/docs/id/about-claude/glossary) [Prompt Sistem](https://platform.claude.com/docs/id/release-notes/system-prompts)

Kasus penggunaan

[Ikhtisar](https://platform.claude.com/docs/id/about-claude/use-case-guides/overview) [Perutean tiket](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing) [Agen dukungan pelanggan](https://platform.claude.com/docs/id/about-claude/use-case-guides/customer-support-chat) [Moderasi konten](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation) [Ringkasan hukum](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization)

Perpustakaan Prompt

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Kasus penggunaan

Ringkasan hukum

Kasus penggunaan

# Ringkasan dokumen hukum

Copy page

Panduan ini menjelaskan cara memanfaatkan kemampuan pemrosesan bahasa alami tingkat lanjut Claude untuk merangkum dokumen hukum secara efisien, mengekstrak informasi kunci, dan mempercepat penelitian hukum. Dengan Claude, Anda dapat menyederhanakan tinjauan kontrak, persiapan litigasi, dan pekerjaan regulasi, menghemat waktu dan memastikan akurasi dalam proses hukum Anda.

Copy page

> Kunjungi [buku resep ringkasan](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) kami untuk melihat contoh implementasi ringkasan hukum menggunakan Claude.

## Sebelum membangun dengan Claude

### Tentukan apakah akan menggunakan Claude untuk ringkasan hukum

Berikut adalah beberapa indikator kunci bahwa Anda harus menggunakan LLM seperti Claude untuk merangkum dokumen hukum:

### Anda ingin meninjau volume tinggi dokumen secara efisien dan terjangkau

### Anda memerlukan ekstraksi otomatis metadata kunci

### Anda ingin menghasilkan ringkasan yang jelas, ringkas, dan terstandar

### Anda memerlukan kutipan yang tepat untuk ringkasan Anda

### Anda ingin menyederhanakan dan mempercepat proses penelitian hukum Anda

### Tentukan detail yang ingin diekstrak ringkasan

Tidak ada ringkasan tunggal yang benar untuk dokumen apa pun. Tanpa arahan yang jelas, dapat sulit bagi Claude untuk menentukan detail mana yang akan disertakan. Untuk mencapai hasil optimal, identifikasi informasi spesifik yang ingin Anda sertakan dalam ringkasan.

Misalnya, ketika merangkum perjanjian sub-sewa, Anda mungkin ingin mengekstrak poin-poin kunci berikut:

```
details_to_extract = [\
    'Parties involved (sublessor, sublessee, and original lessor)',\
    'Property details (address, description, and permitted use)',\
    'Term and rent (start date, end date, monthly rent, and security deposit)',\
    'Responsibilities (utilities, maintenance, and repairs)',\
    'Consent and notices (landlord\'s consent, and notice requirements)',\
    'Special provisions (furniture, parking, and subletting restrictions)'\
]
```

### Tetapkan kriteria kesuksesan

Mengevaluasi kualitas ringkasan adalah tugas yang terkenal menantang. Tidak seperti banyak tugas pemrosesan bahasa alami lainnya, evaluasi ringkasan sering kali kekurangan metrik objektif yang jelas. Prosesnya dapat sangat subjektif, dengan pembaca yang berbeda menghargai aspek berbeda dari ringkasan. Berikut adalah kriteria yang mungkin ingin Anda pertimbangkan saat menilai seberapa baik Claude melakukan ringkasan hukum.

### Kebenaran faktual

### Presisi hukum

### Keringkasan

### Konsistensi

### Keterbacaan

### Bias dan keadilan

Lihat panduan kami tentang [menetapkan kriteria kesuksesan](https://platform.claude.com/docs/id/test-and-evaluate/define-success) untuk informasi lebih lanjut.

* * *

## Cara merangkum dokumen hukum menggunakan Claude

### Pilih model Claude yang tepat

Akurasi model sangat penting ketika merangkum dokumen hukum. Claude Sonnet 4.5 adalah pilihan yang sangat baik untuk kasus penggunaan seperti ini di mana akurasi tinggi diperlukan. Jika ukuran dan jumlah dokumen Anda besar sehingga biaya mulai menjadi perhatian, Anda juga dapat mencoba menggunakan model yang lebih kecil seperti Claude Haiku 4.5.

Untuk membantu memperkirakan biaya ini, di bawah ini adalah perbandingan biaya untuk merangkum 1.000 perjanjian sub-sewa menggunakan Sonnet dan Haiku:

- **Ukuran konten**
  - Jumlah perjanjian: 1.000
  - Karakter per perjanjian: 300.000
  - Total karakter: 300M
- **Token yang diperkirakan**
  - Token input: 86M (dengan asumsi 1 token per 3,5 karakter)
  - Token output per ringkasan: 350
  - Total token output: 350.000
- **Biaya Claude Sonnet 4.5 yang diperkirakan**
  - Biaya token input: 86 MTok \* $3.00/MTok = $258
  - Biaya token output: 0,35 MTok \* $15.00/MTok = $5.25
  - Total biaya: $258.00 + $5.25 = $263.25
- **Biaya Claude Haiku 3 yang diperkirakan**
  - Biaya token input: 86 MTok \* $0.25/MTok = $21.50
  - Biaya token output: 0,35 MTok \* $1.25/MTok = $0.44
  - Total biaya: $21.50 + $0.44 = $21.96

Biaya aktual mungkin berbeda dari perkiraan ini. Perkiraan ini didasarkan pada contoh yang disorot di bagian tentang [prompting](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt).

### Ubah dokumen menjadi format yang dapat diproses Claude

Sebelum Anda mulai merangkum dokumen, Anda perlu menyiapkan data Anda. Ini melibatkan ekstraksi teks dari PDF, pembersihan teks, dan memastikan siap diproses oleh Claude.

Berikut adalah demonstrasi proses ini pada pdf sampel:

```
from io import BytesIO
import re

import pypdf
import requests

def get_llm_text(pdf_file):
    reader = pypdf.PdfReader(pdf_file)
    text = "\n".join([page.extract_text() for page in reader.pages])

    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)

    # Remove page numbers
    text = re.sub(r'\n\s*\d+\s*\n', '\n', text)

    return text

# Create the full URL from the GitHub repository
url = "https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/skills/summarization/data/Sample Sublease Agreement.pdf"
url = url.replace(" ", "%20")

# Download the PDF file into memory
response = requests.get(url)

# Load the PDF from memory
pdf_file = BytesIO(response.content)

document_text = get_llm_text(pdf_file)
print(document_text[:50000])
```

Dalam contoh ini, kami pertama-tama mengunduh pdf perjanjian sub-sewa sampel yang digunakan dalam [buku resep ringkasan](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf). Perjanjian ini bersumber dari perjanjian sub-sewa yang tersedia untuk umum dari [situs web sec.gov](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Kami menggunakan perpustakaan pypdf untuk mengekstrak konten pdf dan mengubahnya menjadi teks. Data teks kemudian dibersihkan dengan menghapus spasi putih ekstra dan nomor halaman.

### Bangun prompt yang kuat

Claude dapat beradaptasi dengan berbagai gaya ringkasan. Anda dapat mengubah detail prompt untuk memandu Claude agar lebih atau kurang verbose, menyertakan lebih atau kurang terminologi teknis, atau memberikan ringkasan tingkat lebih tinggi atau lebih rendah dari konteks yang ada.

Berikut adalah contoh cara membuat prompt yang memastikan ringkasan yang dihasilkan mengikuti struktur yang konsisten saat menganalisis perjanjian sub-sewa:

```
import anthropic

# Initialize the Anthropic client
client = anthropic.Anthropic()

def summarize_document(text, details_to_extract, model="claude-sonnet-4-5", max_tokens=1000):

    # Format the details to extract to be placed within the prompt's context
    details_to_extract_str = '\n'.join(details_to_extract)

    # Prompt the model to summarize the sublease agreement
    prompt = f"""Summarize the following sublease agreement. Focus on these key aspects:

    {details_to_extract_str}

    Provide the summary in bullet points nested within the XML header for each section. For example:

    <parties involved>
    - Sublessor: [Name]
    // Add more details as needed
    </parties involved>

    If any information is not explicitly stated in the document, note it as "Not specified". Do not preamble.

    Sublease agreement text:
    {text}
    """

    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system="You are a legal analyst specializing in real estate law, known for highly accurate and detailed summaries of sublease agreements.",
        messages=[\
            {"role": "user", "content": prompt},\
            {"role": "assistant", "content": "Here is the summary of the sublease agreement: <summary>"}\
        ],
        stop_sequences=["</summary>"]
    )

    return response.content[0].text

sublease_summary = summarize_document(document_text, details_to_extract)
print(sublease_summary)
```

Kode ini mengimplementasikan fungsi `summarize_document` yang menggunakan Claude untuk merangkum konten perjanjian sub-sewa. Fungsi menerima string teks dan daftar detail untuk diekstrak sebagai input. Dalam contoh ini, kami memanggil fungsi dengan variabel `document_text` dan `details_to_extract` yang didefinisikan dalam cuplikan kode sebelumnya.

Dalam fungsi, prompt dihasilkan untuk Claude, termasuk dokumen yang akan dirangkum, detail untuk diekstrak, dan instruksi spesifik untuk merangkum dokumen. Prompt menginstruksikan Claude untuk merespons dengan ringkasan setiap detail untuk diekstrak bersarang dalam header XML.

Karena kami memutuskan untuk mengeluarkan setiap bagian ringkasan dalam tag, setiap bagian dapat dengan mudah diurai sebagai langkah pasca-pemrosesan. Pendekatan ini memungkinkan ringkasan terstruktur yang dapat disesuaikan untuk kasus penggunaan Anda, sehingga setiap ringkasan mengikuti pola yang sama.

### Evaluasi prompt Anda

Prompting sering kali memerlukan pengujian dan optimasi agar siap produksi. Untuk menentukan kesiapan solusi Anda, evaluasi kualitas ringkasan Anda menggunakan proses sistematis yang menggabungkan metode kuantitatif dan kualitatif. Membuat [evaluasi empiris yang kuat](https://platform.claude.com/docs/id/test-and-evaluate/develop-tests#building-evals-and-test-cases) berdasarkan kriteria kesuksesan yang ditentukan akan memungkinkan Anda mengoptimalkan prompt Anda. Berikut adalah beberapa metrik yang mungkin ingin Anda sertakan dalam evaluasi empiris Anda:

### Skor ROUGE

### Skor BLEU

### Kesamaan embedding kontekstual

### Penilaian berbasis LLM

### Evaluasi manusia

### Terapkan prompt Anda

Berikut adalah beberapa pertimbangan tambahan yang perlu diingat saat Anda menerapkan solusi Anda ke produksi.

1. **Pastikan tidak ada tanggung jawab:** Pahami implikasi hukum dari kesalahan dalam ringkasan, yang dapat menyebabkan tanggung jawab hukum bagi organisasi atau klien Anda. Berikan penafian atau pemberitahuan hukum yang menjelaskan bahwa ringkasan dihasilkan oleh AI dan harus ditinjau oleh para profesional hukum.

2. **Tangani berbagai jenis dokumen:** Dalam panduan ini, kami telah membahas cara mengekstrak teks dari PDF. Di dunia nyata, dokumen mungkin datang dalam berbagai format (PDF, dokumen Word, file teks, dll.). Pastikan pipeline ekstraksi data Anda dapat mengonversi semua format file yang Anda harapkan untuk diterima.

3. **Paralelkan panggilan API ke Claude:** Dokumen panjang dengan jumlah token besar mungkin memerlukan waktu hingga satu menit bagi Claude untuk menghasilkan ringkasan. Untuk koleksi dokumen besar, Anda mungkin ingin mengirim panggilan API ke Claude secara paralel sehingga ringkasan dapat diselesaikan dalam kerangka waktu yang wajar. Lihat [batas laju](https://platform.claude.com/docs/id/api/rate-limits#rate-limits) Anthropic untuk menentukan jumlah maksimum panggilan API yang dapat dilakukan secara paralel.


* * *

## Tingkatkan kinerja

Dalam skenario kompleks, mungkin membantu untuk mempertimbangkan strategi tambahan untuk meningkatkan kinerja di luar teknik [rekayasa prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/overview) standar. Berikut adalah beberapa strategi lanjutan:

### Lakukan meta-ringkasan untuk merangkum dokumen panjang

Ringkasan hukum sering melibatkan penanganan dokumen panjang atau banyak dokumen terkait sekaligus, sehingga Anda melampaui jendela konteks Claude. Anda dapat menggunakan metode chunking yang dikenal sebagai meta-ringkasan untuk menangani kasus penggunaan ini. Teknik ini melibatkan pemecahan dokumen menjadi potongan yang lebih kecil dan dapat dikelola dan kemudian memproses setiap potongan secara terpisah. Anda kemudian dapat menggabungkan ringkasan setiap potongan untuk membuat meta-ringkasan dari seluruh dokumen.

Berikut adalah contoh cara melakukan meta-ringkasan:

```
import anthropic

# Initialize the Anthropic client
client = anthropic.Anthropic()

def chunk_text(text, chunk_size=20000):
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]

def summarize_long_document(text, details_to_extract, model="claude-sonnet-4-5", max_tokens=1000):

    # Format the details to extract to be placed within the prompt's context
    details_to_extract_str = '\n'.join(details_to_extract)

    # Iterate over chunks and summarize each one
    chunk_summaries = [summarize_document(chunk, details_to_extract, model=model, max_tokens=max_tokens) for chunk in chunk_text(text)]

    final_summary_prompt = f"""

    You are looking at the chunked summaries of multiple documents that are all related.
    Combine the following summaries of the document from different truthful sources into a coherent overall summary:

    <chunked_summaries>
    {"".join(chunk_summaries)}
    </chunked_summaries>

    Focus on these key aspects:
    {details_to_extract_str})

    Provide the summary in bullet points nested within the XML header for each section. For example:

    <parties involved>
    - Sublessor: [Name]
    // Add more details as needed
    </parties involved>

    If any information is not explicitly stated in the document, note it as "Not specified". Do not preamble.
    """

    response = client.messages.create(
        model=model,
        max_tokens=max_tokens,
        system="You are a legal expert that summarizes notes on one document.",
        messages=[\
            {"role": "user",  "content": final_summary_prompt},\
            {"role": "assistant", "content": "Here is the summary of the sublease agreement: <summary>"}\
\
        ],
        stop_sequences=["</summary>"]
    )

    return response.content[0].text

long_summary = summarize_long_document(document_text, details_to_extract)
print(long_summary)
```

Fungsi `summarize_long_document` dibangun di atas fungsi `summarize_document` sebelumnya dengan membagi dokumen menjadi potongan yang lebih kecil dan merangkum setiap potongan secara individual.

Kode mencapai ini dengan menerapkan fungsi `summarize_document` ke setiap potongan 20.000 karakter dalam dokumen asli. Ringkasan individual kemudian digabungkan, dan ringkasan akhir dibuat dari ringkasan potongan ini.

Perhatikan bahwa fungsi `summarize_long_document` tidak benar-benar diperlukan untuk pdf contoh kami, karena seluruh dokumen sesuai dengan jendela konteks Claude. Namun, ini menjadi penting untuk dokumen yang melebihi jendela konteks Claude atau ketika merangkum beberapa dokumen terkait bersama-sama. Terlepas dari itu, teknik meta-ringkasan ini sering menangkap detail penting tambahan dalam ringkasan akhir yang terlewatkan dalam pendekatan ringkasan tunggal sebelumnya.

### Gunakan dokumen yang diindeks ringkasan untuk menjelajahi koleksi dokumen besar

Mencari koleksi dokumen dengan LLM biasanya melibatkan retrieval-augmented generation (RAG). Namun, dalam skenario yang melibatkan dokumen besar atau ketika pengambilan informasi yang tepat sangat penting, pendekatan RAG dasar mungkin tidak cukup. Dokumen yang diindeks ringkasan adalah pendekatan RAG lanjutan yang menyediakan cara yang lebih efisien untuk menentukan peringkat dokumen untuk pengambilan, menggunakan konteks lebih sedikit daripada metode RAG tradisional. Dalam pendekatan ini, Anda pertama-tama menggunakan Claude untuk menghasilkan ringkasan ringkas untuk setiap dokumen dalam corpus Anda, dan kemudian menggunakan Claude untuk menentukan peringkat relevansi setiap ringkasan terhadap pertanyaan yang diajukan. Untuk detail lebih lanjut tentang pendekatan ini, termasuk contoh berbasis kode, lihat bagian dokumen yang diindeks ringkasan dalam [buku resep ringkasan](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Fine-tune Claude untuk belajar dari dataset Anda

Teknik lanjutan lainnya untuk meningkatkan kemampuan Claude menghasilkan ringkasan adalah fine-tuning. Fine-tuning melibatkan pelatihan Claude pada dataset khusus yang secara khusus selaras dengan kebutuhan ringkasan hukum Anda, memastikan bahwa Claude beradaptasi dengan kasus penggunaan Anda. Berikut adalah gambaran umum tentang cara melakukan fine-tuning:

1. **Identifikasi kesalahan:** Mulai dengan mengumpulkan contoh di mana ringkasan Claude kurang - ini dapat mencakup detail hukum kritis yang hilang, salah memahami konteks, atau menggunakan terminologi hukum yang tidak tepat.

2. **Kurasi dataset:** Setelah Anda mengidentifikasi masalah ini, kompilasi dataset contoh bermasalah ini. Dataset ini harus mencakup dokumen hukum asli bersama dengan ringkasan yang dikoreksi, memastikan bahwa Claude mempelajari perilaku yang diinginkan.

3. **Lakukan fine-tuning:** Fine-tuning melibatkan pelatihan ulang model pada dataset yang dikurasi untuk menyesuaikan bobot dan parameternya. Pelatihan ulang ini membantu Claude lebih memahami persyaratan spesifik domain hukum Anda, meningkatkan kemampuannya untuk merangkum dokumen sesuai dengan standar Anda.

4. **Peningkatan iteratif:** Fine-tuning bukan proses satu kali. Saat Claude terus menghasilkan ringkasan, Anda dapat secara iteratif menambahkan contoh baru di mana kinerjanya kurang, lebih lanjut menyempurnakan kemampuannya. Seiring waktu, loop umpan balik berkelanjutan ini akan menghasilkan model yang sangat khusus untuk tugas ringkasan hukum Anda.


Fine-tuning saat ini hanya tersedia melalui Amazon Bedrock. Detail tambahan tersedia di [blog peluncuran AWS](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Buku resep ringkasan\\
\\
Lihat contoh berbasis kode yang sepenuhnya diimplementasikan tentang cara menggunakan Claude untuk merangkum kontrak.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Buku resep kutipan\\
\\
Jelajahi resep buku resep Kutipan kami untuk panduan tentang cara memastikan akurasi dan penjelasan informasi.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Sebelum membangun dengan Claude](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#sebelum-membangun-dengan-claude)
- [Tentukan apakah akan menggunakan Claude untuk ringkasan hukum](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#tentukan-apakah-akan-menggunakan-claude-untuk-ringkasan-hukum)
- [Tentukan detail yang ingin diekstrak ringkasan](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#tentukan-detail-yang-ingin-diekstrak-ringkasan)
- [Tetapkan kriteria kesuksesan](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#tetapkan-kriteria-kesuksesan)
- [Cara merangkum dokumen hukum menggunakan Claude](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#cara-merangkum-dokumen-hukum-menggunakan-claude)
- [Pilih model Claude yang tepat](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#pilih-model-claude-yang-tepat)
- [Ubah dokumen menjadi format yang dapat diproses Claude](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#ubah-dokumen-menjadi-format-yang-dapat-diproses-claude)
- [Bangun prompt yang kuat](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#bangun-prompt-yang-kuat)
- [Evaluasi prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#evaluasi-prompt-anda)
- [Terapkan prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#terapkan-prompt-anda)
- [Tingkatkan kinerja](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#tingkatkan-kinerja)
- [Lakukan meta-ringkasan untuk merangkum dokumen panjang](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#lakukan-meta-ringkasan-untuk-merangkum-dokumen-panjang)
- [Gunakan dokumen yang diindeks ringkasan untuk menjelajahi koleksi dokumen besar](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#gunakan-dokumen-yang-diindeks-ringkasan-untuk-menjelajahi-koleksi-dokumen-besar)
- [Fine-tune Claude untuk belajar dari dataset Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/legal-summarization#fine-tune-claude-untuk-belajar-dari-dataset-anda)

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