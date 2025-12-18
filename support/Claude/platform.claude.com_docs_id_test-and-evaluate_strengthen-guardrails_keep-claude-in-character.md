---
url: "https://platform.claude.com/docs/id/test-and-evaluate/strengthen-guardrails/keep-claude-in-character"
title: "Menjaga Claude tetap dalam karakter dengan role prompting dan prefilling - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/id/home)

- [Panduan Pengembang](https://platform.claude.com/docs/id/intro)
- [Referensi API](https://platform.claude.com/docs/id/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Sumber daya](https://platform.claude.com/docs/id/resources/overview)
- [Catatan rilis](https://platform.claude.com/docs/id/release-notes/overview)

Bahasa Indonesia

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fid%2Ftest-and-evaluate%2Fstrengthen-guardrails%2Fkeep-claude-in-character)

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

Perkuat penjaga

Jaga Claude tetap berkarakter

Perkuat penjaga

# Menjaga Claude tetap dalam karakter dengan role prompting dan prefilling

Copy page

Copy page

Panduan ini memberikan tips yang dapat ditindaklanjuti untuk menjaga Claude tetap dalam karakter, bahkan selama interaksi yang panjang dan kompleks.

- **Gunakan system prompt untuk menetapkan peran:** Gunakan [system prompt](https://platform.claude.com/docs/id/build-with-claude/prompt-engineering/system-prompts) untuk mendefinisikan peran dan kepribadian Claude. Ini memberikan dasar yang kuat untuk respons yang konsisten.











Saat menyiapkan karakter, berikan informasi detail tentang kepribadian, latar belakang, dan sifat atau keunikan tertentu. Ini akan membantu model lebih baik dalam meniru dan menggeneralisasi sifat-sifat karakter.

- **Perkuat dengan respons yang telah diisi sebelumnya:** Isi terlebih dahulu respons Claude dengan tag karakter untuk memperkuat perannya, terutama dalam percakapan panjang.
- **Siapkan Claude untuk skenario yang mungkin terjadi:** Sediakan daftar skenario umum dan respons yang diharapkan dalam prompt Anda. Ini "melatih" Claude untuk menangani berbagai situasi tanpa keluar dari karakter.

### Contoh: Chatbot perusahaan untuk role prompting

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