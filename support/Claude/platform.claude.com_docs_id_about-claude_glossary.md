---
url: "https://platform.claude.com/docs/id/about-claude/glossary"
title: "Glosarium - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Fabout-claude%2Fglossary)

Search...

⌘K

Sumber daya

[Ikhtisar](https://platform.claude.com/docs/id/resources/overview) [Glosarium](https://platform.claude.com/docs/id/about-claude/glossary) [Prompt Sistem](https://platform.claude.com/docs/id/release-notes/system-prompts)

Kasus penggunaan

Perpustakaan Prompt

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Sumber daya

Glosarium

Sumber daya

# Glosarium

Copy page

Konsep-konsep ini tidak unik untuk model bahasa Anthropic, tetapi kami menyajikan ringkasan singkat tentang istilah-istilah kunci di bawah ini.

Copy page

## Context window

"Context window" mengacu pada jumlah teks yang dapat dilihat kembali dan direferensikan oleh model bahasa saat menghasilkan teks baru. Ini berbeda dari korpus data besar yang digunakan untuk melatih model bahasa, dan sebaliknya mewakili "memori kerja" untuk model. Context window yang lebih besar memungkinkan model untuk memahami dan merespons prompt yang lebih kompleks dan panjang, sementara context window yang lebih kecil dapat membatasi kemampuan model untuk menangani prompt yang lebih panjang atau mempertahankan koherensi selama percakapan yang diperpanjang.

Lihat [panduan kami untuk memahami context windows](https://platform.claude.com/docs/id/build-with-claude/context-windows) untuk mempelajari lebih lanjut.

## Fine-tuning

Fine-tuning adalah proses pelatihan lebih lanjut model bahasa yang sudah dilatih sebelumnya menggunakan data tambahan. Ini menyebabkan model mulai merepresentasikan dan meniru pola serta karakteristik dari dataset fine-tuning. Claude bukan model bahasa mentah; ia telah di-fine-tune untuk menjadi asisten yang membantu. API kami saat ini tidak menawarkan fine-tuning, tetapi silakan tanyakan kepada kontak Anthropic Anda jika Anda tertarik untuk mengeksplorasi opsi ini. Fine-tuning dapat berguna untuk mengadaptasi model bahasa ke domain, tugas, atau gaya penulisan tertentu, tetapi memerlukan pertimbangan yang cermat terhadap data fine-tuning dan dampak potensial pada kinerja dan bias model.

## HHH

Tiga H ini mewakili tujuan Anthropic dalam memastikan bahwa Claude bermanfaat bagi masyarakat:

- AI yang **helpful** akan berusaha melakukan tugas atau menjawab pertanyaan yang diajukan dengan kemampuan terbaiknya, memberikan informasi yang relevan dan berguna.
- AI yang **honest** akan memberikan informasi yang akurat, dan tidak berhalusinasi atau mengada-ada. Ia akan mengakui keterbatasan dan ketidakpastiannya ketika diperlukan.
- AI yang **harmless** tidak akan menyinggung atau diskriminatif, dan ketika diminta untuk membantu dalam tindakan yang berbahaya atau tidak etis, AI harus menolak dengan sopan dan menjelaskan mengapa ia tidak dapat mematuhi.

## Latency

Latency, dalam konteks AI generatif dan model bahasa besar, mengacu pada waktu yang diperlukan model untuk merespons prompt yang diberikan. Ini adalah penundaan antara mengirimkan prompt dan menerima output yang dihasilkan. Latency yang lebih rendah menunjukkan waktu respons yang lebih cepat, yang sangat penting untuk aplikasi real-time, chatbot, dan pengalaman interaktif. Faktor-faktor yang dapat mempengaruhi latency termasuk ukuran model, kemampuan perangkat keras, kondisi jaringan, dan kompleksitas prompt serta respons yang dihasilkan.

## LLM

Large language models (LLM) adalah model bahasa AI dengan banyak parameter yang mampu melakukan berbagai tugas yang sangat berguna. Model-model ini dilatih pada sejumlah besar data teks dan dapat menghasilkan teks seperti manusia, menjawab pertanyaan, merangkum informasi, dan banyak lagi. Claude adalah asisten percakapan berdasarkan model bahasa besar yang telah di-fine-tune dan dilatih menggunakan RLHF untuk menjadi lebih membantu, jujur, dan tidak berbahaya.

## MCP (Model Context Protocol)

Model Context Protocol (MCP) adalah protokol terbuka yang menstandarkan cara aplikasi menyediakan konteks kepada LLM. Seperti port USB-C untuk aplikasi AI, MCP menyediakan cara terpadu untuk menghubungkan model AI ke berbagai sumber data dan alat. MCP memungkinkan sistem AI untuk mempertahankan konteks yang konsisten di seluruh interaksi dan mengakses sumber daya eksternal dengan cara yang terstandar. Lihat [dokumentasi MCP](https://platform.claude.com/docs/id/mcp) kami untuk mempelajari lebih lanjut.

## MCP connector

MCP connector adalah fitur yang memungkinkan pengguna API untuk terhubung ke server MCP langsung dari Messages API tanpa membangun klien MCP. Ini memungkinkan integrasi yang mulus dengan alat dan layanan yang kompatibel dengan MCP melalui Claude API. MCP connector mendukung fitur seperti pemanggilan alat dan tersedia dalam beta publik. Lihat [dokumentasi MCP connector](https://platform.claude.com/docs/id/agents-and-tools/mcp-connector) kami untuk mempelajari lebih lanjut.

## Pretraining

Pretraining adalah proses awal pelatihan model bahasa pada korpus teks besar yang tidak berlabel. Dalam kasus Claude, model bahasa autoregresif (seperti model dasar Claude) di-pretrain untuk memprediksi kata berikutnya, berdasarkan konteks teks sebelumnya dalam dokumen. Model yang sudah di-pretrain ini tidak secara inheren baik dalam menjawab pertanyaan atau mengikuti instruksi, dan sering memerlukan keterampilan mendalam dalam prompt engineering untuk memunculkan perilaku yang diinginkan. Fine-tuning dan RLHF digunakan untuk menyempurnakan model yang sudah di-pretrain ini, membuatnya lebih berguna untuk berbagai tugas.

## RAG (Retrieval augmented generation)

Retrieval augmented generation (RAG) adalah teknik yang menggabungkan pengambilan informasi dengan generasi model bahasa untuk meningkatkan akurasi dan relevansi teks yang dihasilkan, dan untuk lebih mendasarkan respons model pada bukti. Dalam RAG, model bahasa diperkuat dengan basis pengetahuan eksternal atau sekumpulan dokumen yang dimasukkan ke dalam context window. Data diambil pada waktu berjalan ketika kueri dikirim ke model, meskipun model itu sendiri tidak harus mengambil data (tetapi dapat dengan [penggunaan alat](https://platform.claude.com/docs/id/agents-and-tools/tool-use/overview) dan fungsi pengambilan). Saat menghasilkan teks, informasi yang relevan pertama-tama harus diambil dari basis pengetahuan berdasarkan prompt input, dan kemudian diteruskan ke model bersama dengan kueri asli. Model menggunakan informasi ini untuk memandu output yang dihasilkannya. Ini memungkinkan model untuk mengakses dan memanfaatkan informasi di luar data pelatihannya, mengurangi ketergantungan pada hafalan dan meningkatkan akurasi faktual dari teks yang dihasilkan. RAG dapat sangat berguna untuk tugas-tugas yang memerlukan informasi terkini, pengetahuan khusus domain, atau kutipan eksplisit dari sumber. Namun, efektivitas RAG bergantung pada kualitas dan relevansi basis pengetahuan eksternal dan pengetahuan yang diambil pada waktu berjalan.

## RLHF

Reinforcement Learning from Human Feedback (RLHF) adalah teknik yang digunakan untuk melatih model bahasa yang sudah di-pretrain agar berperilaku dengan cara yang konsisten dengan preferensi manusia. Ini dapat mencakup membantu model mengikuti instruksi dengan lebih efektif atau bertindak lebih seperti chatbot. Umpan balik manusia terdiri dari peringkat satu set dua atau lebih teks contoh, dan proses reinforcement learning mendorong model untuk lebih memilih output yang mirip dengan yang berperingkat lebih tinggi. Claude telah dilatih menggunakan RLHF untuk menjadi asisten yang lebih membantu. Untuk detail lebih lanjut, Anda dapat membaca [makalah Anthropic tentang subjek ini](https://arxiv.org/abs/2204.05862).

## Temperature

Temperature adalah parameter yang mengontrol keacakan prediksi model selama generasi teks. Temperature yang lebih tinggi menghasilkan output yang lebih kreatif dan beragam, memungkinkan variasi dalam frasa dan, dalam kasus fiksi, variasi dalam jawaban juga. Temperature yang lebih rendah menghasilkan output yang lebih konservatif dan deterministik yang berpegang pada frasa dan jawaban yang paling mungkin. Menyesuaikan temperature memungkinkan pengguna untuk mendorong model bahasa mengeksplorasi pilihan kata dan urutan yang langka, tidak umum, atau mengejutkan, daripada hanya memilih prediksi yang paling mungkin.

## TTFT (Time to first token)

Time to First Token (TTFT) adalah metrik kinerja yang mengukur waktu yang diperlukan model bahasa untuk menghasilkan token pertama dari outputnya setelah menerima prompt. Ini adalah indikator penting dari responsivitas model dan sangat relevan untuk aplikasi interaktif, chatbot, dan sistem real-time di mana pengguna mengharapkan umpan balik awal yang cepat. TTFT yang lebih rendah menunjukkan bahwa model dapat mulai menghasilkan respons lebih cepat, memberikan pengalaman pengguna yang lebih mulus dan menarik. Faktor-faktor yang dapat mempengaruhi TTFT termasuk ukuran model, kemampuan perangkat keras, kondisi jaringan, dan kompleksitas prompt.

## Tokens

Token adalah unit individual terkecil dari model bahasa, dan dapat sesuai dengan kata, subkata, karakter, atau bahkan byte (dalam kasus Unicode). Untuk Claude, token kira-kira mewakili 3,5 karakter bahasa Inggris, meskipun jumlah pastinya dapat bervariasi tergantung pada bahasa yang digunakan. Token biasanya tersembunyi saat berinteraksi dengan model bahasa pada tingkat "teks" tetapi menjadi relevan saat memeriksa input dan output yang tepat dari model bahasa. Ketika Claude diberikan teks untuk dievaluasi, teks (yang terdiri dari serangkaian karakter) dikodekan menjadi serangkaian token untuk diproses model. Token yang lebih besar memungkinkan efisiensi data selama inferensi dan pretraining (dan digunakan bila memungkinkan), sementara token yang lebih kecil memungkinkan model untuk menangani kata-kata yang tidak umum atau belum pernah dilihat sebelumnya. Pilihan metode tokenisasi dapat mempengaruhi kinerja model, ukuran kosakata, dan kemampuan untuk menangani kata-kata di luar kosakata.

- [Context window](https://platform.claude.com/docs/id/about-claude/glossary#context-window)
- [Fine-tuning](https://platform.claude.com/docs/id/about-claude/glossary#fine-tuning)
- [HHH](https://platform.claude.com/docs/id/about-claude/glossary#hhh)
- [Latency](https://platform.claude.com/docs/id/about-claude/glossary#latency)
- [LLM](https://platform.claude.com/docs/id/about-claude/glossary#llm)
- [MCP (Model Context Protocol)](https://platform.claude.com/docs/id/about-claude/glossary#mcp-model-context-protocol)
- [MCP connector](https://platform.claude.com/docs/id/about-claude/glossary#mcp-connector)
- [Pretraining](https://platform.claude.com/docs/id/about-claude/glossary#pretraining)
- [RAG (Retrieval augmented generation)](https://platform.claude.com/docs/id/about-claude/glossary#rag-retrieval-augmented-generation)
- [RLHF](https://platform.claude.com/docs/id/about-claude/glossary#rlhf)
- [Temperature](https://platform.claude.com/docs/id/about-claude/glossary#temperature)
- [TTFT (Time to first token)](https://platform.claude.com/docs/id/about-claude/glossary#ttft-time-to-first-token)
- [Tokens](https://platform.claude.com/docs/id/about-claude/glossary#tokens)

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