---
url: "https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation"
title: "Moderasi konten - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

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

Moderasi konten

Kasus penggunaan

# Moderasi konten

Copy page

Moderasi konten adalah aspek penting dalam mempertahankan lingkungan yang aman, penuh hormat, dan produktif dalam aplikasi digital. Dalam panduan ini, kami akan membahas bagaimana Claude dapat digunakan untuk memoderasi konten dalam aplikasi digital Anda.

Copy page

> Kunjungi [cookbook moderasi konten](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) kami untuk melihat contoh implementasi moderasi konten menggunakan Claude.

Panduan ini berfokus pada moderasi konten yang dibuat pengguna dalam aplikasi Anda. Jika Anda mencari panduan untuk memoderasi interaksi dengan Claude, silakan merujuk ke [panduan guardrails](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) kami.

## Sebelum membangun dengan Claude

### Putuskan apakah akan menggunakan Claude untuk moderasi konten

Berikut adalah beberapa indikator kunci bahwa Anda harus menggunakan LLM seperti Claude daripada pendekatan ML tradisional atau berbasis aturan untuk moderasi konten:

### Anda menginginkan implementasi yang hemat biaya dan cepat

### Anda menginginkan pemahaman semantik dan keputusan yang cepat

### Anda memerlukan keputusan kebijakan yang konsisten

### Kebijakan moderasi Anda kemungkinan akan berubah atau berkembang seiring waktu

### Anda memerlukan penalaran yang dapat diinterpretasikan untuk keputusan moderasi Anda

### Anda memerlukan dukungan multibahasa tanpa mempertahankan model terpisah

### Anda memerlukan dukungan multimodal

Anthropic telah melatih semua model Claude untuk jujur, membantu, dan tidak berbahaya. Ini dapat mengakibatkan Claude memoderasi konten yang dianggap sangat berbahaya (sejalan dengan [Kebijakan Penggunaan yang Dapat Diterima](https://www.anthropic.com/legal/aup) kami), terlepas dari prompt yang digunakan. Misalnya, situs web dewasa yang ingin mengizinkan pengguna memposting konten seksual eksplisit mungkin menemukan bahwa Claude masih menandai konten eksplisit sebagai memerlukan moderasi, bahkan jika mereka menentukan dalam prompt mereka untuk tidak memoderasi konten seksual eksplisit. Kami merekomendasikan meninjau AUP kami sebelum membangun solusi moderasi.

### Buat contoh konten untuk dimoderasi

Sebelum mengembangkan solusi moderasi konten, pertama buat contoh konten yang harus ditandai dan konten yang tidak boleh ditandai. Pastikan Anda menyertakan kasus tepi dan skenario menantang yang mungkin sulit ditangani secara efektif oleh sistem moderasi konten. Setelah itu, tinjau contoh Anda untuk membuat daftar kategori moderasi yang terdefinisi dengan baik.
Misalnya, contoh yang dihasilkan oleh platform media sosial mungkin mencakup yang berikut:

```
allowed_user_comments = [\
    'This movie was great, I really enjoyed it. The main actor really killed it!',\
    'I hate Mondays.',\
    'It is a great time to invest in gold!'\
]

disallowed_user_comments = [\
    'Delete this post now or you better hide. I am coming after you and your family.',\
    'Stay away from the 5G cellphones!! They are using 5G to control you.',\
    'Congratulations! You have won a $1,000 gift card. Click here to claim your prize!'\
]

# Sample user comments to test the content moderation
user_comments = allowed_user_comments + disallowed_user_comments

# List of categories considered unsafe for content moderation
unsafe_categories = [\
    'Child Exploitation',\
    'Conspiracy Theories',\
    'Hate',\
    'Indiscriminate Weapons',\
    'Intellectual Property',\
    'Non-Violent Crimes',\
    'Privacy',\
    'Self-Harm',\
    'Sex Crimes',\
    'Sexual Content',\
    'Specialized Advice',\
    'Violent Crimes'\
]
```

Memoderasi contoh-contoh ini secara efektif memerlukan pemahaman bahasa yang bernuansa. Dalam komentar, `This movie was great, I really enjoyed it. The main actor really killed it!`, sistem moderasi konten perlu mengenali bahwa "killed it" adalah metafora, bukan indikasi kekerasan yang sebenarnya. Sebaliknya, meskipun tidak ada penyebutan eksplisit tentang kekerasan, komentar `Delete this post now or you better hide. I am coming after you and your family.` harus ditandai oleh sistem moderasi konten.

Daftar `unsafe_categories` dapat disesuaikan untuk memenuhi kebutuhan spesifik Anda. Misalnya, jika Anda ingin mencegah anak di bawah umur membuat konten di situs web Anda, Anda dapat menambahkan "Underage Posting" ke daftar.

* * *

## Cara memoderasi konten menggunakan Claude

### Pilih model Claude yang tepat

Saat memilih model, penting untuk mempertimbangkan ukuran data Anda. Jika biaya menjadi perhatian, model yang lebih kecil seperti Claude Haiku 3 adalah pilihan yang sangat baik karena efektivitas biayanya. Berikut adalah perkiraan biaya untuk memoderasi teks untuk platform media sosial yang menerima satu miliar posting per bulan:

- **Ukuran konten**
  - Posting per bulan: 1 miliar
  - Karakter per posting: 100
  - Total karakter: 100 miliar
- **Perkiraan token**
  - Token input: 28,6 miliar (dengan asumsi 1 token per 3,5 karakter)
  - Persentase pesan yang ditandai: 3%
  - Token output per pesan yang ditandai: 50
  - Total token output: 1,5 miliar
- **Perkiraan biaya Claude Haiku 3**
  - Biaya token input: 2.860 MTok \* $0,25/MTok = $715
  - Biaya token output: 1.500 MTok \* $1,25/MTok = $1.875
  - Biaya bulanan: $715 + $1.875 = $2.590
- **Perkiraan biaya Claude Sonnet 4.5**
  - Biaya token input: 2.860 MTok \* $3,00/MTok = $8.580
  - Biaya token output: 1.500 MTok \* $15,00/MTok = $22.500
  - Biaya bulanan: $8.580 + $22.500 = $31.080

Biaya aktual mungkin berbeda dari perkiraan ini. Perkiraan ini didasarkan pada prompt yang disorot dalam bagian tentang [pemrosesan batch](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#consider-batch-processing). Token output dapat dikurangi lebih lanjut dengan menghapus field `explanation` dari respons.

### Bangun prompt yang kuat

Untuk menggunakan Claude untuk moderasi konten, Claude harus memahami persyaratan moderasi aplikasi Anda. Mari mulai dengan menulis prompt yang memungkinkan Anda mendefinisikan kebutuhan moderasi Anda:

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def moderate_message(message, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construct the prompt for Claude, including the message and unsafe categories
    assessment_prompt = f"""
    Determine whether the following message warrants moderation,
    based on the unsafe categories outlined below.

    Message:
    <message>{message}</message>

    Unsafe Categories:
    <categories>
    {unsafe_category_str}
    </categories>

    Respond with ONLY a JSON object, using the format below:
    {{
    "violation": <Boolean field denoting whether the message should be moderated>,
    "categories": [Comma-separated list of violated categories],
    "explanation": [Optional. Only include if there is a violation.]
    }}"""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the violation status from the assessment
    contains_violation = assessment['violation']

    # If there's a violation, get the categories and explanation; otherwise, use empty defaults
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    violation, violated_categories, explanation = moderate_message(comment, unsafe_categories)

    if violation:
        print(f"Violated Categories: {', '.join(violated_categories)}")
        print(f"Explanation: {explanation}")
    else:
        print("No issues detected.")
```

Dalam contoh ini, fungsi `moderate_message` berisi prompt penilaian yang mencakup kategori konten tidak aman dan pesan yang ingin kita evaluasi. Prompt meminta Claude untuk menilai apakah pesan harus dimoderasi, berdasarkan kategori tidak aman yang telah kita definisikan.

Penilaian model kemudian diurai untuk menentukan apakah ada pelanggaran. Jika ada pelanggaran, Claude juga mengembalikan daftar kategori yang dilanggar, serta penjelasan mengapa pesan tersebut tidak aman.

### Evaluasi prompt Anda

Moderasi konten adalah masalah klasifikasi. Dengan demikian, Anda dapat menggunakan teknik yang sama yang diuraikan dalam [cookbook klasifikasi](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) kami untuk menentukan akurasi sistem moderasi konten Anda.

Satu pertimbangan tambahan adalah bahwa alih-alih memperlakukan moderasi konten sebagai masalah klasifikasi biner, Anda mungkin malah membuat beberapa kategori untuk mewakili berbagai tingkat risiko. Membuat beberapa tingkat risiko memungkinkan Anda menyesuaikan agresivitas moderasi Anda. Misalnya, Anda mungkin ingin secara otomatis memblokir kueri pengguna yang dianggap berisiko tinggi, sementara pengguna dengan banyak kueri berisiko sedang ditandai untuk tinjauan manusia.

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def assess_risk_level(message, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construct the prompt for Claude, including the message, unsafe categories, and risk level definitions
    assessment_prompt = f"""
    Assess the risk level of the following message warrants moderation,
    based on the unsafe categories listed below.

Message:
<message>{message}</message>

Unsafe Categories:
<categories>
{unsafe_category_str}
</categories>

Assign a risk level based on your confidence that the user's message should be moderated
based on the defined unsafe categories:

0 - No risk
1 - Low risk
2 - Medium risk
3 - High risk

Respond with ONLY a JSON object, using the format below:
{{
  "risk_level": <Numerical field denoting the risk level>,
  "categories": [Comma-separated list of violated categories],
  "explanation": <Optional. Only include if risk level is greater than 0>
}}"""

    # Send the request to Claude for risk assessment
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the risk level, violated categories, and explanation from the assessment
    risk_level = assessment["risk_level"]
    violated_categories = assessment["categories"]
    explanation = assessment.get("explanation")

    return risk_level, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    risk_level, violated_categories, explanation = assess_risk_level(comment, unsafe_categories)

    print(f"Risk Level: {risk_level}")
    if violated_categories:
        print(f"Violated Categories: {', '.join(violated_categories)}")
    if explanation:
        print(f"Explanation: {explanation}")
```

Kode ini mengimplementasikan fungsi `assess_risk_level` yang menggunakan Claude untuk mengevaluasi tingkat risiko suatu pesan. Fungsi ini menerima pesan dan daftar kategori tidak aman sebagai input.

Dalam fungsi tersebut, prompt dihasilkan untuk Claude, termasuk pesan yang akan dinilai, kategori tidak aman, dan instruksi khusus untuk mengevaluasi tingkat risiko. Prompt menginstruksikan Claude untuk merespons dengan objek JSON yang mencakup tingkat risiko, kategori yang dilanggar, dan penjelasan opsional.

Pendekatan ini memungkinkan moderasi konten yang fleksibel dengan menetapkan tingkat risiko. Ini dapat diintegrasikan dengan mulus ke dalam sistem yang lebih besar untuk mengotomatisasi penyaringan konten atau menandai komentar untuk tinjauan manusia berdasarkan tingkat risiko yang dinilai. Misalnya, saat menjalankan kode ini, komentar `Delete this post now or you better hide. I am coming after you and your family.` diidentifikasi sebagai berisiko tinggi karena ancaman berbahayanya. Sebaliknya, komentar `Stay away from the 5G cellphones!! They are using 5G to control you.` dikategorikan sebagai berisiko sedang.

### Deploy prompt Anda

Setelah Anda yakin dengan kualitas solusi Anda, saatnya untuk men-deploy-nya ke produksi. Berikut adalah beberapa praktik terbaik yang harus diikuti saat menggunakan moderasi konten dalam produksi:

1. **Berikan umpan balik yang jelas kepada pengguna:** Ketika input pengguna diblokir atau respons ditandai karena moderasi konten, berikan umpan balik yang informatif dan konstruktif untuk membantu pengguna memahami mengapa pesan mereka ditandai dan bagaimana mereka dapat merumuskannya kembali dengan tepat. Dalam contoh koding di atas, ini dilakukan melalui tag `explanation` dalam respons Claude.

2. **Analisis konten yang dimoderasi:** Lacak jenis konten yang ditandai oleh sistem moderasi Anda untuk mengidentifikasi tren dan area potensial untuk perbaikan.

3. **Evaluasi dan tingkatkan secara berkelanjutan:** Secara teratur menilai kinerja sistem moderasi konten Anda menggunakan metrik seperti pelacakan presisi dan recall. Gunakan data ini untuk secara iteratif memperbaiki prompt moderasi, kata kunci, dan kriteria penilaian Anda.


* * *

## Tingkatkan kinerja

Dalam skenario kompleks, mungkin membantu untuk mempertimbangkan strategi tambahan untuk meningkatkan kinerja di luar [teknik prompt engineering](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/overview) standar. Berikut adalah beberapa strategi lanjutan:

### Definisikan topik dan berikan contoh

Selain mencantumkan kategori tidak aman dalam prompt, perbaikan lebih lanjut dapat dilakukan dengan memberikan definisi dan frasa yang terkait dengan setiap kategori.

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

# Dictionary of categories considered unsafe for content moderation, with their definitions
unsafe_category_definitions = {
    'Child Exploitation': 'Content that depicts child nudity or that enables, encourages, excuses, or depicts the sexual abuse of children.',
    'Conspiracy Theories': """Content that promotes or endorses unfounded, false, or misleading theories about events, situations, or individuals,
        which can incite harm or undermine public trust in institutions or facts.""",
    'Hate': """Content that is hateful toward people on the basis of their protected characteristics
        (race, color, ethnicity, national origin, disability, religious affiliation, caste, sexual orientation, sex, gender identity and serious disease),
        or content that perpetuates negative stereotypes.""",
    'Indiscriminate Weapons': 'Content that enables the creation of weapons of mass destruction.',
    'Intellectual Property': 'Content that violates the intellectual property rights of third parties.',
    'Non-Violent Crimes': 'Content that enables, encourages, or excuses the commission of non-violent crimes.',
    'Privacy': 'Content that contains sensitive, personal information about private individuals.',
    'Self-Harm': 'Content that enables, encourages, or excuses acts of intentional self-harm.',
    'Sex Crimes': 'Content that enables, encourages, or excuses the commission of sex crimes.',
    'Sexual Content': 'Content that contains erotic descriptions or explicit depictions of sex acts.',
    'Specialized Advice': """Content that contains financial, medical, or legal advice.
        Financial advice includes guidance on investments, stocks, bonds, or any financial planning.""",
    'Violent Crimes': 'Content that enables, encourages, or excuses the commission of violent crimes.',
}

def moderate_message_with_definitions(message, unsafe_category_definitions):
    # Format unsafe categories string, with each category and its definition on a new line
    unsafe_category_str = '\n'.join(f'{category}: {definition}'
        for category, definition in unsafe_category_definitions.items()
    )

    # Construct the prompt for Claude, including the message and unsafe categories
    assessment_prompt = f"""Determine whether the following message warrants moderation, based on the unsafe categories outlined below.

Message:
<message>{message}</message>

Unsafe Categories and Their Definitions:
<categories>
{unsafe_category_str}
</categories>

It's important that you remember all unsafe categories and their definitions.

Respond with ONLY a JSON object, using the format below:
{{
  "violation": <Boolean field denoting whether the message should be moderated>,
  "categories": [Comma-separated list of violated categories],
  "explanation": [Optional. Only include if there is a violation.]
}}"""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the violation status from the assessment
    contains_violation = assessment['violation']

    # If there's a violation, get the categories and explanation; otherwise, use empty defaults
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    violation, violated_categories, explanation = moderate_message_with_definitions(comment, unsafe_category_definitions)

    if violation:
        print(f"Violated Categories: {', '.join(violated_categories)}")
        print(f"Explanation: {explanation}")
    else:
        print("No issues detected.")
```

Fungsi `moderate_message_with_definitions` memperluas fungsi `moderate_message` sebelumnya dengan memungkinkan setiap kategori tidak aman dipasangkan dengan definisi yang detail. Ini terjadi dalam kode dengan mengganti daftar `unsafe_categories` dari fungsi asli dengan kamus `unsafe_category_definitions`. Kamus ini memetakan setiap kategori tidak aman ke definisi yang sesuai. Baik nama kategori maupun definisinya disertakan dalam prompt.

Khususnya, definisi untuk kategori `Specialized Advice` sekarang menentukan jenis nasihat keuangan yang harus dilarang. Akibatnya, komentar `It's a great time to invest in gold!`, yang sebelumnya lolos penilaian `moderate_message`, sekarang memicu pelanggaran.

### Pertimbangkan pemrosesan batch

Untuk mengurangi biaya dalam situasi di mana moderasi real-time tidak diperlukan, pertimbangkan untuk memoderasi pesan dalam batch. Sertakan beberapa pesan dalam konteks prompt, dan minta Claude untuk menilai pesan mana yang harus dimoderasi.

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def batch_moderate_messages(messages, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Format messages string, with each message wrapped in XML-like tags and given an ID
    messages_str = '\n'.join([f'<message id={idx}>{msg}</message>' for idx, msg in enumerate(messages)])

    # Construct the prompt for Claude, including the messages and unsafe categories
    assessment_prompt = f"""Determine the messages to moderate, based on the unsafe categories outlined below.

Messages:
<messages>
{messages_str}
</messages>

Unsafe categories and their definitions:
<categories>
{unsafe_category_str}
</categories>

Respond with ONLY a JSON object, using the format below:
{{
  "violations": [\
    {{\
      "id": <message id>,\
      "categories": [list of violated categories],\
      "explanation": <Explanation of why there's a violation>\
    }},\
    ...\
  ]
}}

Important Notes:
- Remember to analyze every message for a violation.
- Select any number of violations that reasonably apply."""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=2048,  # Increased max token count to handle batches
        temperature=0,    # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)
    return assessment

# Process the batch of comments and get the response
response_obj = batch_moderate_messages(user_comments, unsafe_categories)

# Print the results for each detected violation
for violation in response_obj['violations']:
    print(f"""Comment: {user_comments[violation['id']]}
Violated Categories: {', '.join(violation['categories'])}
Explanation: {violation['explanation']}
""")
```

Dalam contoh ini, fungsi `batch_moderate_messages` menangani moderasi seluruh batch pesan dengan satu panggilan API Claude.
Di dalam fungsi, prompt dibuat yang mencakup daftar pesan untuk dievaluasi, kategori konten tidak aman yang didefinisikan, dan deskripsinya. Prompt mengarahkan Claude untuk mengembalikan objek JSON yang mencantumkan semua pesan yang mengandung pelanggaran. Setiap pesan dalam respons diidentifikasi oleh id-nya, yang sesuai dengan posisi pesan dalam daftar input.
Perlu diingat bahwa menemukan ukuran batch optimal untuk kebutuhan spesifik Anda mungkin memerlukan beberapa eksperimen. Sementara ukuran batch yang lebih besar dapat menurunkan biaya, mereka juga mungkin menyebabkan sedikit penurunan kualitas. Selain itu, Anda mungkin perlu meningkatkan parameter `max_tokens` dalam panggilan API Claude untuk mengakomodasi respons yang lebih panjang. Untuk detail tentang jumlah maksimum token yang dapat dikeluarkan model pilihan Anda, lihat [halaman perbandingan model](https://platform.claude.com/docs/id/about-claude/models#model-comparison-table).

[Cookbook moderasi konten\\
\\
Lihat contoh berbasis kode yang diimplementasikan sepenuhnya tentang cara menggunakan Claude untuk moderasi konten.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [Panduan guardrails\\
\\
Jelajahi panduan guardrails kami untuk teknik memoderasi interaksi dengan Claude.](https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [Sebelum membangun dengan Claude](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#sebelum-membangun-dengan-claude)
- [Putuskan apakah akan menggunakan Claude untuk moderasi konten](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#putuskan-apakah-akan-menggunakan-claude-untuk-moderasi-konten)
- [Buat contoh konten untuk dimoderasi](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#buat-contoh-konten-untuk-dimoderasi)
- [Cara memoderasi konten menggunakan Claude](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#cara-memoderasi-konten-menggunakan-claude)
- [Pilih model Claude yang tepat](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#pilih-model-claude-yang-tepat)
- [Bangun prompt yang kuat](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#bangun-prompt-yang-kuat)
- [Evaluasi prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#evaluasi-prompt-anda)
- [Deploy prompt Anda](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#deploy-prompt-anda)
- [Tingkatkan kinerja](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#tingkatkan-kinerja)
- [Definisikan topik dan berikan contoh](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#definisikan-topik-dan-berikan-contoh)
- [Pertimbangkan pemrosesan batch](https://platform.claude.com/docs/id/about-claude/use-case-guides/content-moderation#pertimbangkan-pemrosesan-batch)

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

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)