---
url: "https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought"
title: "Lascia che Claude pensi (prompting con catena di pensiero) per aumentare le prestazioni - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/it/home)

- [Guida per sviluppatori](https://platform.claude.com/docs/it/intro)
- [Riferimento API](https://platform.claude.com/docs/it/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Risorse](https://platform.claude.com/docs/it/resources/overview)
- [Note sulla versione](https://platform.claude.com/docs/it/release-notes/overview)

Italiano

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fit%2Fbuild-with-claude%2Fprompt-engineering%2Fchain-of-thought)

Search...

⌘K

Primi passi

[Introduzione a Claude](https://platform.claude.com/docs/it/intro) [Avvio rapido](https://platform.claude.com/docs/it/get-started)

Modelli e prezzi

[Panoramica dei modelli](https://platform.claude.com/docs/it/about-claude/models/overview) [Scelta di un modello](https://platform.claude.com/docs/it/about-claude/models/choosing-a-model) [Novità in Claude 4.5](https://platform.claude.com/docs/it/about-claude/models/whats-new-claude-4-5) [Migrazione a Claude 4.5](https://platform.claude.com/docs/it/about-claude/models/migrating-to-claude-4) [Deprecazione dei modelli](https://platform.claude.com/docs/it/about-claude/model-deprecations) [Prezzi](https://platform.claude.com/docs/it/about-claude/pricing)

Costruisci con Claude

[Panoramica delle funzionalità](https://platform.claude.com/docs/it/build-with-claude/overview) [Utilizzo dell'API Messages](https://platform.claude.com/docs/it/build-with-claude/working-with-messages) [Finestre di contesto](https://platform.claude.com/docs/it/build-with-claude/context-windows) [Best practice per i prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/claude-4-best-practices)

Capacità

[Prompt caching](https://platform.claude.com/docs/it/build-with-claude/prompt-caching) [Modifica del contesto](https://platform.claude.com/docs/it/build-with-claude/context-editing) [Extended thinking](https://platform.claude.com/docs/it/build-with-claude/extended-thinking) [Sforzo](https://platform.claude.com/docs/it/build-with-claude/effort) [Streaming dei messaggi](https://platform.claude.com/docs/it/build-with-claude/streaming) [Elaborazione batch](https://platform.claude.com/docs/it/build-with-claude/batch-processing) [Citazioni](https://platform.claude.com/docs/it/build-with-claude/citations) [Supporto multilingue](https://platform.claude.com/docs/it/build-with-claude/multilingual-support) [Conteggio dei token](https://platform.claude.com/docs/it/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/it/build-with-claude/embeddings) [Visione](https://platform.claude.com/docs/it/build-with-claude/vision) [Supporto PDF](https://platform.claude.com/docs/it/build-with-claude/pdf-support) [API Files](https://platform.claude.com/docs/it/build-with-claude/files) [Risultati di ricerca](https://platform.claude.com/docs/it/build-with-claude/search-results) [Output strutturati](https://platform.claude.com/docs/it/build-with-claude/structured-outputs)

Strumenti

[Panoramica](https://platform.claude.com/docs/it/agents-and-tools/tool-use/overview) [Come implementare l'uso degli strumenti](https://platform.claude.com/docs/it/agents-and-tools/tool-use/implement-tool-use) [Streaming granulare degli strumenti](https://platform.claude.com/docs/it/agents-and-tools/tool-use/fine-grained-tool-streaming) [Strumento Bash](https://platform.claude.com/docs/it/agents-and-tools/tool-use/bash-tool) [Strumento di esecuzione del codice](https://platform.claude.com/docs/it/agents-and-tools/tool-use/code-execution-tool) [Chiamata programmatica degli strumenti](https://platform.claude.com/docs/it/agents-and-tools/tool-use/programmatic-tool-calling) [Strumento Computer use](https://platform.claude.com/docs/it/agents-and-tools/tool-use/computer-use-tool) [Strumento Editor di testo](https://platform.claude.com/docs/it/agents-and-tools/tool-use/text-editor-tool) [Strumento Web fetch](https://platform.claude.com/docs/it/agents-and-tools/tool-use/web-fetch-tool) [Strumento Web search](https://platform.claude.com/docs/it/agents-and-tools/tool-use/web-search-tool) [Strumento Memory](https://platform.claude.com/docs/it/agents-and-tools/tool-use/memory-tool) [Strumento Tool search](https://platform.claude.com/docs/it/agents-and-tools/tool-use/tool-search-tool)

Agent Skills

[Panoramica](https://platform.claude.com/docs/it/agents-and-tools/agent-skills/overview) [Avvio rapido](https://platform.claude.com/docs/it/agents-and-tools/agent-skills/quickstart) [Best practice](https://platform.claude.com/docs/it/agents-and-tools/agent-skills/best-practices) [Utilizzo di Skills con l'API](https://platform.claude.com/docs/it/build-with-claude/skills-guide)

Agent SDK

[Panoramica](https://platform.claude.com/docs/it/agent-sdk/overview) [Avvio rapido](https://platform.claude.com/docs/it/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/it/agent-sdk/typescript) [TypeScript V2 (anteprima)](https://platform.claude.com/docs/it/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/it/agent-sdk/python) [Guida alla migrazione](https://platform.claude.com/docs/it/agent-sdk/migration-guide)

Guide

MCP nell'API

[Connettore MCP](https://platform.claude.com/docs/it/agents-and-tools/mcp-connector) [Server MCP remoti](https://platform.claude.com/docs/it/agents-and-tools/remote-mcp-servers)

Claude su piattaforme di terze parti

[Amazon Bedrock](https://platform.claude.com/docs/it/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/it/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/it/build-with-claude/claude-on-vertex-ai)

Prompt engineering

[Panoramica](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/overview) [Generatore di prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/prompt-generator) [Usa modelli di prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Miglioratore di prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/prompt-improver) [Sii chiaro e diretto](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/be-clear-and-direct) [Usa esempi (multishot prompting)](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/multishot-prompting) [Lascia pensare Claude (CoT)](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought) [Usa tag XML](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/use-xml-tags) [Dai a Claude un ruolo (prompt di sistema)](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/system-prompts) [Precompila la risposta di Claude](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/prefill-claudes-response) [Concatena prompt complessi](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-prompts) [Suggerimenti per il contesto lungo](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/long-context-tips) [Suggerimenti per extended thinking](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/extended-thinking-tips)

Test e valutazione

[Definisci criteri di successo](https://platform.claude.com/docs/it/test-and-evaluate/define-success) [Sviluppa casi di test](https://platform.claude.com/docs/it/test-and-evaluate/develop-tests) [Utilizzo dello strumento di valutazione](https://platform.claude.com/docs/it/test-and-evaluate/eval-tool) [Riduzione della latenza](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-latency)

Rafforza i guardrail

[Riduci le allucinazioni](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Aumenta la coerenza dell'output](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/increase-consistency) [Mitigare i jailbreak](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Streaming dei rifiuti](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Riduci la perdita di prompt](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Mantieni Claude in carattere](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Amministrazione e monitoraggio

[Panoramica dell'Admin API](https://platform.claude.com/docs/it/build-with-claude/administration-api) [API di utilizzo e costi](https://platform.claude.com/docs/it/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/it/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Prompt engineering

Lascia pensare Claude (CoT)

Prompt engineering

# Lascia che Claude pensi (prompting con catena di pensiero) per aumentare le prestazioni

Copy page

Scopri come utilizzare il prompting con catena di pensiero per migliorare le prestazioni di Claude su compiti complessi come ricerca, analisi e risoluzione dei problemi.

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

Quando affronti compiti complessi come ricerca, analisi o risoluzione dei problemi, dare a Claude lo spazio per pensare può migliorare drasticamente le sue prestazioni. Questa tecnica, nota come prompting con catena di pensiero (CoT), incoraggia Claude a scomporre i problemi passo dopo passo, portando a output più accurati e sfumati.

## Prima di implementare CoT

### Perché lasciare che Claude pensi?

- **Accuratezza:** Affrontare i problemi passo dopo passo riduce gli errori, soprattutto in matematica, logica, analisi o compiti generalmente complessi.
- **Coerenza:** Il pensiero strutturato porta a risposte più coese e ben organizzate.
- **Debug:** Vedere il processo di pensiero di Claude ti aiuta a individuare dove i prompt potrebbero essere poco chiari.

### Perché non lasciare che Claude pensi?

- L'aumento della lunghezza dell'output può influire sulla latenza.
- Non tutti i compiti richiedono un pensiero approfondito. Usa CoT con giudizio per garantire il giusto equilibrio tra prestazioni e latenza.

Usa CoT per compiti che un umano dovrebbe affrontare pensandoci, come matematica complessa, analisi multi-step, scrittura di documenti complessi o decisioni con molti fattori.

* * *

## Come richiedere il pensiero

Le tecniche di catena di pensiero di seguito sono **ordinate da meno a più complesse**. I metodi meno complessi occupano meno spazio nella finestra di contesto, ma sono generalmente anche meno potenti.

**Suggerimento CoT**: Fai sempre in modo che Claude produca il suo pensiero. Senza produrre il suo processo di pensiero, non si verifica alcun pensiero!

- **Prompt di base**: Includi "Pensa passo dopo passo" nel tuo prompt.

  - Manca la guida su _come_ pensare (il che è particolarmente non ideale se un compito è molto specifico della tua app, caso d'uso o organizzazione)

### Esempio: Scrittura di email ai donatori (CoT di base)

- **Prompt guidato**: Delinea i passaggi specifici che Claude deve seguire nel suo processo di pensiero.

  - Manca la strutturazione per rendere facile estrarre e separare la risposta dal pensiero.

### Esempio: Scrittura di email ai donatori (CoT guidato)

- **Prompt strutturato**: Usa tag XML come `<thinking>` e `<answer>` per separare il ragionamento dalla risposta finale.




### Esempio: Scrittura di email ai donatori (CoT guidato strutturato)


### Esempi

### Esempio: Analisi finanziaria senza pensiero

### Esempio: Analisi finanziaria con pensiero

* * *

[Libreria di prompt\\
\\
Ispirati da una selezione curata di prompt per vari compiti e casi d'uso.](https://platform.claude.com/docs/it/resources/prompt-library/library) [Tutorial di prompting GitHub\\
\\
Un tutorial ricco di esempi che copre i concetti di prompt engineering trovati nella nostra documentazione.](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Tutorial di prompting Google Sheets\\
\\
Una versione più leggera del nostro tutorial di prompt engineering tramite un foglio di calcolo interattivo.](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [Prima di implementare CoT](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought#prima-di-implementare-co-t)
- [Perché lasciare che Claude pensi?](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought#perche-lasciare-che-claude-pensi)
- [Perché non lasciare che Claude pensi?](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought#perche-non-lasciare-che-claude-pensi)
- [Come richiedere il pensiero](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought#come-richiedere-il-pensiero)
- [Esempi](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/chain-of-thought#esempi)

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