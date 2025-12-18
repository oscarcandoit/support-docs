---
url: "https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing"
title: "Perutean tiket - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

Perutean tiket

Kasus penggunaan

# Perutean tiket

Copy page

Panduan ini menjelaskan cara memanfaatkan kemampuan pemahaman bahasa alami canggih Claude untuk mengklasifikasikan tiket dukungan pelanggan secara besar-besaran berdasarkan niat pelanggan, urgensi, prioritas, profil pelanggan, dan lainnya.

Copy page

## Tentukan apakah akan menggunakan Claude untuk perutean tiket

Berikut adalah beberapa indikator utama bahwa Anda harus menggunakan LLM seperti Claude alih-alih pendekatan ML tradisional untuk tugas klasifikasi Anda:

### Anda memiliki data pelatihan berlabel yang terbatas

### Kategori klasifikasi Anda kemungkinan akan berubah atau berkembang seiring waktu

### Anda perlu menangani input teks yang kompleks dan tidak terstruktur

### Aturan klasifikasi Anda didasarkan pada pemahaman semantik

### Anda memerlukan penalaran yang dapat diinterpretasi untuk keputusan klasifikasi

### Anda ingin menangani kasus tepi dan tiket ambigu dengan lebih efektif

### Anda memerlukan dukungan multibahasa tanpa memelihara model terpisah

* * *

## Bangun dan deploy alur kerja dukungan LLM Anda

### Pahami pendekatan dukungan Anda saat ini

Sebelum terjun ke otomasi, penting untuk memahami sistem tiket yang ada. Mulai dengan menyelidiki bagaimana tim dukungan Anda saat ini menangani perutean tiket.

Pertimbangkan pertanyaan seperti:

- Kriteria apa yang digunakan untuk menentukan SLA/penawaran layanan apa yang diterapkan?
- Apakah perutean tiket digunakan untuk menentukan tingkat dukungan atau spesialis produk mana yang menerima tiket?
- Apakah ada aturan atau alur kerja otomatis yang sudah ada? Dalam kasus apa mereka gagal?
- Bagaimana kasus tepi atau tiket ambigu ditangani?
- Bagaimana tim memprioritaskan tiket?

Semakin banyak Anda tahu tentang bagaimana manusia menangani kasus tertentu, semakin baik Anda akan dapat bekerja dengan Claude untuk melakukan tugas tersebut.

### Tentukan kategori niat pengguna

Daftar kategori niat pengguna yang terdefinisi dengan baik sangat penting untuk klasifikasi tiket dukungan yang akurat dengan Claude. Kemampuan Claude untuk merutekan tiket secara efektif dalam sistem Anda berbanding lurus dengan seberapa terdefinisi dengan baik kategori sistem Anda.

Berikut adalah beberapa contoh kategori niat pengguna dan subkategori.

### Masalah teknis

### Manajemen akun

### Informasi produk

### Panduan pengguna

### Umpan balik

### Terkait pesanan

### Permintaan layanan

### Masalah keamanan

### Kepatuhan dan hukum

### Dukungan darurat

### Pelatihan dan pendidikan

### Integrasi dan API

Selain niat, perutean tiket dan prioritas juga dapat dipengaruhi oleh faktor lain seperti urgensi, jenis pelanggan, SLA, atau bahasa. Pastikan untuk mempertimbangkan kriteria perutean lain saat membangun sistem perutean otomatis Anda.

### Tetapkan kriteria keberhasilan

Bekerja dengan tim dukungan Anda untuk [mendefinisikan kriteria keberhasilan yang jelas](https://platform.claude.com/docs/id/test-and-evaluate/define-success) dengan tolok ukur, ambang batas, dan tujuan yang dapat diukur.

Berikut adalah beberapa kriteria dan tolok ukur standar saat menggunakan LLM untuk perutean tiket dukungan:

### Konsistensi klasifikasi

### Kecepatan adaptasi

### Penanganan multibahasa

### Penanganan kasus tepi

### Mitigasi bias

### Efisiensi prompt

### Skor penjelasan

Berikut adalah beberapa kriteria keberhasilan umum yang mungkin berguna terlepas dari apakah LLM digunakan:

### Akurasi perutean

### Waktu-ke-penugasan

### Tingkat perutean ulang

### Tingkat resolusi kontak pertama

### Waktu penanganan rata-rata

### Skor kepuasan pelanggan

### Tingkat eskalasi

### Produktivitas agen

### Tingkat defleksi layanan mandiri

### Biaya per tiket

### Pilih model Claude yang tepat

Pilihan model tergantung pada trade-off antara biaya, akurasi, dan waktu respons.

Banyak pelanggan telah menemukan `claude-3-5-haiku-20241022` sebagai model ideal untuk perutean tiket, karena ini adalah model tercepat dan paling hemat biaya dalam keluarga Claude 3 sambil tetap memberikan hasil yang sangat baik. Jika masalah klasifikasi Anda memerlukan keahlian subjek yang mendalam atau volume besar kategori niat penalaran kompleks, Anda mungkin memilih [model Sonnet yang lebih besar](https://platform.claude.com/docs/id/about-claude/models).

### Bangun prompt yang kuat

Perutean tiket adalah jenis tugas klasifikasi. Claude menganalisis konten tiket dukungan dan mengklasifikasikannya ke dalam kategori yang telah ditentukan berdasarkan jenis masalah, urgensi, keahlian yang diperlukan, atau faktor relevan lainnya.

Mari kita tulis prompt klasifikasi tiket. Prompt awal kita harus berisi konten permintaan pengguna dan mengembalikan penalaran dan niat.

Coba [generator prompt](https://platform.claude.com/docs/id/prompt-generator) di [Claude Console](https://platform.claude.com/login) untuk meminta Claude menulis draft pertama untuk Anda.

Berikut adalah contoh prompt klasifikasi perutean tiket:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system. Your task is to analyze customer support requests and output the appropriate classification intent for each request, along with your reasoning.

        Here is the customer support request you need to classify:

        <request>{ticket_contents}</request>

        Please carefully analyze the above request to determine the customer's core intent and needs. Consider what the customer is asking for has concerns about.

        First, write out your reasoning and analysis of how to classify this request inside <reasoning> tags.

        Then, output the appropriate classification label for the request inside a <intent> tag. The valid intents are:
        <intents>
        <intent>Support, Feedback, Complaint</intent>
        <intent>Order Tracking</intent>
        <intent>Refund/Exchange</intent>
        </intents>

        A request may have ONLY ONE applicable intent. Only include the intent that is most applicable to the request.

        As an example, consider the following request:
        <request>Hello! I had high-speed fiber internet installed on Saturday and my installer, Kevin, was absolutely fantastic! Where can I send my positive review? Thanks for your help!</request>

        Here is an example of how your output should be formatted (for the above example request):
        <reasoning>The user seeks information in order to leave positive feedback.</reasoning>
        <intent>Support, Feedback, Complaint</intent>

        Here are a few more examples:
        <examples>
        <example 2>
        Example 2 Input:
        <request>I wanted to write and personally thank you for the compassion you showed towards my family during my father's funeral this past weekend. Your staff was so considerate and helpful throughout this whole process; it really took a load off our shoulders. The visitation brochures were beautiful. We'll never forget the kindness you showed us and we are so appreciative of how smoothly the proceedings went. Thank you, again, Amarantha Hill on behalf of the Hill Family.</request>

        Example 2 Output:
        <reasoning>User leaves a positive review of their experience.</reasoning>
        <intent>Support, Feedback, Complaint</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Example 9 Input:
        <request>Your website keeps sending ad-popups that block the entire screen. It took me twenty minutes just to finally find the phone number to call and complain. How can I possibly access my account information with all of these popups? Can you access my account for me, since your website is broken? I need to know what the address is on file.</request>

        Example 9 Output:
        <reasoning>The user requests help accessing their web account information.</reasoning>
        <intent>Support, Feedback, Complaint</intent>
        </example 9>

        Remember to always include your classification reasoning before your actual intent output. The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
        """
```

Mari kita uraikan komponen kunci dari prompt ini:

- Kami menggunakan f-string Python untuk membuat template prompt, memungkinkan `ticket_contents` dimasukkan ke dalam tag `<request>`.
- Kami memberikan Claude peran yang jelas sebagai sistem klasifikasi yang dengan hati-hati menganalisis konten tiket untuk menentukan niat inti dan kebutuhan pelanggan.
- Kami menginstruksikan Claude tentang format output yang tepat, dalam hal ini untuk memberikan penalaran dan analisisnya di dalam tag `<reasoning>`, diikuti oleh label klasifikasi yang sesuai di dalam tag `<intent>`.
- Kami menentukan kategori niat yang valid: "Support, Feedback, Complaint", "Order Tracking", dan "Refund/Exchange".
- Kami menyertakan beberapa contoh (a.k.a. few-shot prompting) untuk mengilustrasikan bagaimana output harus diformat, yang meningkatkan akurasi dan konsistensi.

Alasan kami ingin Claude membagi responsnya ke dalam berbagai bagian tag XML adalah agar kami dapat menggunakan ekspresi reguler untuk secara terpisah mengekstrak penalaran dan niat dari output. Ini memungkinkan kami untuk membuat langkah selanjutnya yang ditargetkan dalam alur kerja perutean tiket, seperti menggunakan hanya niat untuk memutuskan orang mana yang akan menerima tiket.

### Deploy prompt Anda

Sulit untuk mengetahui seberapa baik prompt Anda bekerja tanpa men-deploy-nya dalam pengaturan produksi tes dan [menjalankan evaluasi](https://platform.claude.com/docs/id/test-and-evaluate/develop-tests).

Mari kita bangun struktur deployment. Mulai dengan mendefinisikan tanda tangan metode untuk membungkus panggilan kami ke Claude. Kami akan mengambil metode yang sudah mulai kami tulis, yang memiliki `ticket_contents` sebagai input, dan sekarang mengembalikan tuple `reasoning` dan `intent` sebagai output. Jika Anda memiliki otomasi yang ada menggunakan ML tradisional, Anda akan ingin mengikuti tanda tangan metode tersebut sebagai gantinya.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system.
        ...
        ... The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
        """
    # Send the prompt to the API to classify the support request.
    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
        stream=False,
    )
    reasoning_and_intent = message.content[0].text

    # Use Python's regular expressions library to extract `reasoning`.
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # Similarly, also extract the `intent`.
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

    return reasoning, intent
```

Kode ini:

- Mengimpor library Anthropic dan membuat instance klien menggunakan kunci API Anda.
- Mendefinisikan fungsi `classify_support_request` yang mengambil string `ticket_contents`.
- Mengirim `ticket_contents` ke Claude untuk klasifikasi menggunakan `classification_prompt`
- Mengembalikan `reasoning` dan `intent` model yang diekstrak dari respons.

Karena kami perlu menunggu seluruh teks penalaran dan niat dihasilkan sebelum parsing, kami mengatur `stream=False` (default).

* * *

## Evaluasi prompt Anda

Prompting sering memerlukan pengujian dan optimisasi agar siap produksi. Untuk menentukan kesiapan solusi Anda, evaluasi kinerja berdasarkan kriteria keberhasilan dan ambang batas yang Anda tetapkan sebelumnya.

Untuk menjalankan evaluasi Anda, Anda akan memerlukan kasus uji untuk menjalankannya. Sisa panduan ini mengasumsikan Anda telah [mengembangkan kasus uji Anda](https://platform.claude.com/docs/id/test-and-evaluate/develop-tests).

### Bangun fungsi evaluasi

Evaluasi contoh kami untuk panduan ini mengukur kinerja Claude sepanjang tiga metrik kunci:

- Akurasi
- Biaya per klasifikasi

Anda mungkin perlu menilai Claude pada sumbu lain tergantung pada faktor apa yang penting bagi Anda.

Untuk menilai ini, kami pertama harus memodifikasi skrip yang kami tulis dan menambahkan fungsi untuk membandingkan niat yang diprediksi dengan niat aktual dan menghitung persentase prediksi yang benar. Kami juga harus menambahkan fungsionalitas perhitungan biaya dan pengukuran waktu.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system.
        ...
        ...The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
        """

    message = client.messages.create(
        model=DEFAULT_MODEL,
        max_tokens=500,
        temperature=0,
        messages=[{"role": "user", "content": classification_prompt}],
    )
    usage = message.usage  # Get the usage statistics for the API call for how many input and output tokens were used.
    reasoning_and_intent = message.content[0].text

    # Use Python's regular expressions library to extract `reasoning`.
    reasoning_match = re.search(
        r"<reasoning>(.*?)</reasoning>", reasoning_and_intent, re.DOTALL
    )
    reasoning = reasoning_match.group(1).strip() if reasoning_match else ""

    # Similarly, also extract the `intent`.
    intent_match = re.search(r"<intent>(.*?)</intent>", reasoning_and_intent, re.DOTALL)
    intent = intent_match.group(1).strip() if intent_match else ""

      # Check if the model's prediction is correct.
    correct = actual_intent.strip() == intent.strip()

    # Return the reasoning, intent, correct, and usage.
    return reasoning, intent, correct, usage
```

Mari kita uraikan edit yang telah kami buat:

- Kami menambahkan `actual_intent` dari kasus uji kami ke dalam metode `classify_support_request` dan menyiapkan perbandingan untuk menilai apakah klasifikasi niat Claude cocok dengan klasifikasi niat emas kami.
- Kami mengekstrak statistik penggunaan untuk panggilan API untuk menghitung biaya berdasarkan token input dan output yang digunakan

### Jalankan evaluasi Anda

Evaluasi yang tepat memerlukan ambang batas dan tolok ukur yang jelas untuk menentukan apa yang merupakan hasil yang baik. Skrip di atas akan memberi kami nilai runtime untuk akurasi, waktu respons, dan biaya per klasifikasi, tetapi kami masih memerlukan ambang batas yang jelas. Misalnya:

- **Akurasi:** 95% (dari 100 tes)
- **Biaya per klasifikasi:** Pengurangan 50% rata-rata (di 100 tes) dari metode perutean saat ini

Memiliki ambang batas ini memungkinkan Anda untuk dengan cepat dan mudah mengetahui dalam skala, dan dengan empirisme yang tidak memihak, metode mana yang terbaik untuk Anda dan perubahan apa yang mungkin perlu dibuat untuk lebih sesuai dengan kebutuhan Anda.

* * *

## Tingkatkan kinerja

Dalam skenario kompleks, mungkin membantu untuk mempertimbangkan strategi tambahan untuk meningkatkan kinerja di luar [teknik rekayasa prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/overview) standar & [strategi implementasi guardrail](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Berikut adalah beberapa skenario umum:

### Gunakan hierarki taksonomi untuk kasus dengan 20+ kategori niat

Seiring jumlah kelas bertambah, jumlah contoh yang diperlukan juga berkembang, berpotensi membuat prompt menjadi tidak praktis. Sebagai alternatif, Anda dapat mempertimbangkan untuk mengimplementasikan sistem klasifikasi hierarkis menggunakan campuran classifier.

1. Organisasikan niat Anda dalam struktur pohon taksonomi.
2. Buat serangkaian classifier di setiap level pohon, memungkinkan pendekatan perutean bertingkat.

Misalnya, Anda mungkin memiliki classifier tingkat atas yang secara luas mengkategorikan tiket menjadi "Masalah Teknis," "Pertanyaan Penagihan," dan "Pertanyaan Umum." Setiap kategori ini kemudian dapat memiliki sub-classifier sendiri untuk lebih memperbaiki klasifikasi.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Pro - nuansa dan akurasi yang lebih besar:** Anda dapat membuat prompt yang berbeda untuk setiap jalur induk, memungkinkan klasifikasi yang lebih bertarget dan spesifik konteks. Ini dapat mengarah pada peningkatan akurasi dan penanganan permintaan pelanggan yang lebih bernuansa.

- **Kontra - peningkatan latensi:** Perlu diketahui bahwa beberapa classifier dapat menyebabkan peningkatan latensi, dan kami merekomendasikan mengimplementasikan pendekatan ini dengan model tercepat kami, Haiku.


### Gunakan database vektor dan pencarian kesamaan retrieval untuk menangani tiket yang sangat bervariasi

Meskipun memberikan contoh adalah cara paling efektif untuk meningkatkan kinerja, jika permintaan dukungan sangat bervariasi, bisa sulit untuk menyertakan cukup contoh dalam satu prompt.

Dalam skenario ini, Anda dapat menggunakan database vektor untuk melakukan pencarian kesamaan dari dataset contoh dan mengambil contoh yang paling relevan untuk kueri tertentu.

Pendekatan ini, yang diuraikan secara detail dalam [resep klasifikasi](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) kami, telah terbukti meningkatkan kinerja dari akurasi 71% menjadi 93%.

### Pertanggungjawabkan secara khusus untuk kasus tepi yang diharapkan

Berikut adalah beberapa skenario di mana Claude mungkin salah mengklasifikasikan tiket (mungkin ada yang lain yang unik untuk situasi Anda). Dalam skenario ini, pertimbangkan untuk memberikan instruksi eksplisit atau contoh dalam prompt tentang bagaimana Claude harus menangani kasus tepi:

### Pelanggan membuat permintaan implisit

### Claude memprioritaskan emosi daripada niat

### Beberapa masalah menyebabkan kebingungan prioritas masalah

* * *

## Integrasikan Claude ke dalam alur kerja dukungan yang lebih besar

Integrasi yang tepat memerlukan Anda membuat beberapa keputusan mengenai bagaimana skrip perutean tiket berbasis Claude Anda cocok dengan arsitektur sistem perutean tiket yang lebih besar. Ada dua cara Anda dapat melakukan ini:

- **Berbasis push:**Sistem tiket dukungan yang Anda gunakan (misalnya Zendesk) memicu kode Anda dengan mengirim event webhook ke layanan perutean Anda, yang kemudian mengklasifikasikan niat dan merutekannya.
  - Pendekatan ini lebih dapat diskalakan web, tetapi perlu Anda mengekspos endpoint publik.
- **Berbasis pull:**Kode Anda menarik tiket terbaru berdasarkan jadwal tertentu dan merutekannya pada waktu pull.
  - Pendekatan ini lebih mudah diimplementasikan tetapi mungkin membuat panggilan yang tidak perlu ke sistem tiket dukungan ketika frekuensi pull terlalu tinggi atau mungkin terlalu lambat ketika frekuensi pull terlalu rendah.

Untuk salah satu pendekatan ini, Anda perlu membungkus skrip Anda dalam layanan. Pilihan pendekatan tergantung pada API apa yang disediakan sistem tiket dukungan Anda.

* * *

[Buku masak klasifikasi\\
\\
Kunjungi buku masak klasifikasi kami untuk lebih banyak kode contoh dan panduan evaluasi terperinci.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
Mulai membangun dan mengevaluasi alur kerja Anda di Claude Console.](https://platform.claude.com/dashboard)

- [Tentukan apakah akan menggunakan Claude untuk perutean tiket](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#tentukan-apakah-akan-menggunakan-claude-untuk-perutean-tiket)
- [Bangun dan deploy alur kerja dukungan LLM Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#bangun-dan-deploy-alur-kerja-dukungan-llm-anda)
- [Pahami pendekatan dukungan Anda saat ini](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#pahami-pendekatan-dukungan-anda-saat-ini)
- [Tentukan kategori niat pengguna](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#tentukan-kategori-niat-pengguna)
- [Tetapkan kriteria keberhasilan](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#tetapkan-kriteria-keberhasilan)
- [Pilih model Claude yang tepat](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#pilih-model-claude-yang-tepat)
- [Bangun prompt yang kuat](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#bangun-prompt-yang-kuat)
- [Deploy prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#deploy-prompt-anda)
- [Evaluasi prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#evaluasi-prompt-anda)
- [Bangun fungsi evaluasi](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#bangun-fungsi-evaluasi)
- [Jalankan evaluasi Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#jalankan-evaluasi-anda)
- [Tingkatkan kinerja](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#tingkatkan-kinerja)
- [Gunakan hierarki taksonomi untuk kasus dengan 20+ kategori niat](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#gunakan-hierarki-taksonomi-untuk-kasus-dengan-20-kategori-niat)
- [Gunakan database vektor dan pencarian kesamaan retrieval untuk menangani tiket yang sangat bervariasi](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#gunakan-database-vektor-dan-pencarian-kesamaan-retrieval-untuk-menangani-tiket-yang-sangat-bervariasi)
- [Pertanggungjawabkan secara khusus untuk kasus tepi yang diharapkan](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#pertanggungjawabkan-secara-khusus-untuk-kasus-tepi-yang-diharapkan)
- [Integrasikan Claude ke dalam alur kerja dukungan yang lebih besar](https://platform.claude.com/docs/id/about-claude/use-case-guides/ticket-routing#integrasikan-claude-ke-dalam-alur-kerja-dukungan-yang-lebih-besar)

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

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)