---
url: "https://platform.claude.com/docs/it/about-claude/glossary"
title: "Glossario - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/it/home)

- [Guida per sviluppatori](https://platform.claude.com/docs/it/intro)
- [Riferimento API](https://platform.claude.com/docs/it/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Risorse](https://platform.claude.com/docs/it/resources/overview)
- [Note sulla versione](https://platform.claude.com/docs/it/release-notes/overview)

Italiano

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fit%2Fabout-claude%2Fglossary)

Search...

⌘K

Risorse

[Panoramica](https://platform.claude.com/docs/it/resources/overview) [Glossario](https://platform.claude.com/docs/it/about-claude/glossary) [Prompt di sistema](https://platform.claude.com/docs/it/release-notes/system-prompts)

Casi d'uso

Libreria di prompt

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Risorse

Glossario

Risorse

# Glossario

Copy page

Questi concetti non sono unici ai modelli linguistici di Anthropic, ma presentiamo di seguito un breve riassunto dei termini chiave.

Copy page

## Finestra di contesto

La "finestra di contesto" si riferisce alla quantità di testo che un modello linguistico può guardare indietro e referenziare quando genera nuovo testo. Questo è diverso dal grande corpus di dati su cui il modello linguistico è stato addestrato, e invece rappresenta una "memoria di lavoro" per il modello. Una finestra di contesto più ampia consente al modello di comprendere e rispondere a prompt più complessi e lunghi, mentre una finestra di contesto più piccola può limitare la capacità del modello di gestire prompt più lunghi o mantenere coerenza durante conversazioni estese.

Consulta la nostra [guida per comprendere le finestre di contesto](https://platform.claude.com/docs/it/build-with-claude/context-windows) per saperne di più.

## Fine-tuning

Il fine-tuning è il processo di ulteriore addestramento di un modello linguistico preaddestrato utilizzando dati aggiuntivi. Questo fa sì che il modello inizi a rappresentare e imitare i pattern e le caratteristiche del dataset di fine-tuning. Claude non è un modello linguistico grezzo; è già stato sottoposto a fine-tuning per essere un assistente utile. La nostra API attualmente non offre il fine-tuning, ma ti preghiamo di chiedere al tuo contatto Anthropic se sei interessato a esplorare questa opzione. Il fine-tuning può essere utile per adattare un modello linguistico a un dominio specifico, compito o stile di scrittura, ma richiede un'attenta considerazione dei dati di fine-tuning e del potenziale impatto sulle prestazioni e sui bias del modello.

## HHH

Queste tre H rappresentano gli obiettivi di Anthropic nel garantire che Claude sia benefico per la società:

- Un'IA **utile** tenterà di eseguire il compito o rispondere alla domanda posta al meglio delle sue capacità, fornendo informazioni rilevanti e utili.
- Un'IA **onesta** fornirà informazioni accurate, e non allucinare o confabulare. Riconoscerà le sue limitazioni e incertezze quando appropriato.
- Un'IA **innocua** non sarà offensiva o discriminatoria, e quando viene chiesto di aiutare in un atto pericoloso o non etico, l'IA dovrebbe rifiutare educatamente e spiegare perché non può conformarsi.

## Latenza

La latenza, nel contesto dell'IA generativa e dei grandi modelli linguistici, si riferisce al tempo che impiega il modello per rispondere a un dato prompt. È il ritardo tra l'invio di un prompt e la ricezione dell'output generato. Una latenza più bassa indica tempi di risposta più veloci, il che è cruciale per applicazioni in tempo reale, chatbot ed esperienze interattive. I fattori che possono influenzare la latenza includono la dimensione del modello, le capacità hardware, le condizioni di rete e la complessità del prompt e della risposta generata.

## LLM

I grandi modelli linguistici (LLM) sono modelli linguistici di IA con molti parametri che sono capaci di eseguire una varietà di compiti sorprendentemente utili. Questi modelli sono addestrati su vaste quantità di dati testuali e possono generare testo simile a quello umano, rispondere a domande, riassumere informazioni e altro ancora. Claude è un assistente conversazionale basato su un grande modello linguistico che è stato sottoposto a fine-tuning e addestrato utilizzando RLHF per essere più utile, onesto e innocuo.

## MCP (Model Context Protocol)

Il Model Context Protocol (MCP) è un protocollo aperto che standardizza come le applicazioni forniscono contesto agli LLM. Come una porta USB-C per le applicazioni di IA, MCP fornisce un modo unificato per connettere i modelli di IA a diverse fonti di dati e strumenti. MCP consente ai sistemi di IA di mantenere un contesto coerente attraverso le interazioni e accedere a risorse esterne in modo standardizzato. Consulta la nostra [documentazione MCP](https://platform.claude.com/docs/it/mcp) per saperne di più.

## Connettore MCP

Il connettore MCP è una funzionalità che consente agli utenti dell'API di connettersi ai server MCP direttamente dall'API Messages senza costruire un client MCP. Questo abilita un'integrazione senza soluzione di continuità con strumenti e servizi compatibili con MCP attraverso l'API Claude. Il connettore MCP supporta funzionalità come la chiamata di strumenti ed è disponibile in beta pubblica. Consulta la nostra [documentazione del connettore MCP](https://platform.claude.com/docs/it/agents-and-tools/mcp-connector) per saperne di più.

## Preaddestramento

Il preaddestramento è il processo iniziale di addestramento dei modelli linguistici su un grande corpus di testo non etichettato. Nel caso di Claude, i modelli linguistici autoregressivi (come il modello sottostante di Claude) sono preaddestrati per predire la parola successiva, dato il contesto precedente del testo nel documento. Questi modelli preaddestrati non sono intrinsecamente bravi a rispondere a domande o seguire istruzioni, e spesso richiedono competenze approfondite nell'ingegneria dei prompt per elicitare comportamenti desiderati. Il fine-tuning e RLHF sono utilizzati per raffinare questi modelli preaddestrati, rendendoli più utili per un'ampia gamma di compiti.

## RAG (Retrieval augmented generation)

La retrieval augmented generation (RAG) è una tecnica che combina il recupero di informazioni con la generazione di modelli linguistici per migliorare l'accuratezza e la rilevanza del testo generato, e per ancorare meglio la risposta del modello nelle evidenze. In RAG, un modello linguistico è aumentato con una base di conoscenza esterna o un insieme di documenti che viene passato nella finestra di contesto. I dati vengono recuperati al momento dell'esecuzione quando una query viene inviata al modello, anche se il modello stesso non necessariamente recupera i dati (ma può farlo con l' [uso di strumenti](https://platform.claude.com/docs/it/agents-and-tools/tool-use/overview) e una funzione di recupero). Quando genera testo, le informazioni rilevanti devono prima essere recuperate dalla base di conoscenza basandosi sul prompt di input, e poi passate al modello insieme alla query originale. Il modello utilizza queste informazioni per guidare l'output che genera. Questo consente al modello di accedere e utilizzare informazioni oltre i suoi dati di addestramento, riducendo la dipendenza dalla memorizzazione e migliorando l'accuratezza fattuale del testo generato. RAG può essere particolarmente utile per compiti che richiedono informazioni aggiornate, conoscenza specifica del dominio o citazione esplicita delle fonti. Tuttavia, l'efficacia di RAG dipende dalla qualità e rilevanza della base di conoscenza esterna e dalla conoscenza che viene recuperata al momento dell'esecuzione.

## RLHF

Il Reinforcement Learning from Human Feedback (RLHF) è una tecnica utilizzata per addestrare un modello linguistico preaddestrato a comportarsi in modi che sono coerenti con le preferenze umane. Questo può includere aiutare il modello a seguire le istruzioni più efficacemente o agire più come un chatbot. Il feedback umano consiste nel classificare un insieme di due o più testi di esempio, e il processo di apprendimento per rinforzo incoraggia il modello a preferire output che sono simili a quelli classificati più in alto. Claude è stato addestrato utilizzando RLHF per essere un assistente più utile. Per maggiori dettagli, puoi leggere [il paper di Anthropic sull'argomento](https://arxiv.org/abs/2204.05862).

## Temperatura

La temperatura è un parametro che controlla la casualità delle predizioni di un modello durante la generazione di testo. Temperature più alte portano a output più creativi e diversificati, consentendo multiple variazioni nella formulazione e, nel caso della fiction, variazione anche nelle risposte. Temperature più basse risultano in output più conservativi e deterministici che si attengono alla formulazione e alle risposte più probabili. Regolare la temperatura consente agli utenti di incoraggiare un modello linguistico a esplorare scelte e sequenze di parole rare, non comuni o sorprendenti, piuttosto che selezionare solo le predizioni più probabili.

## TTFT (Time to first token)

Il Time to First Token (TTFT) è una metrica di prestazione che misura il tempo che impiega un modello linguistico per generare il primo token del suo output dopo aver ricevuto un prompt. È un indicatore importante della reattività del modello ed è particolarmente rilevante per applicazioni interattive, chatbot e sistemi in tempo reale dove gli utenti si aspettano un feedback iniziale rapido. Un TTFT più basso indica che il modello può iniziare a generare una risposta più velocemente, fornendo un'esperienza utente più fluida e coinvolgente. I fattori che possono influenzare il TTFT includono la dimensione del modello, le capacità hardware, le condizioni di rete e la complessità del prompt.

## Token

I token sono le unità individuali più piccole di un modello linguistico, e possono corrispondere a parole, sottoparole, caratteri, o anche byte (nel caso di Unicode). Per Claude, un token rappresenta approssimativamente 3,5 caratteri inglesi, anche se il numero esatto può variare a seconda della lingua utilizzata. I token sono tipicamente nascosti quando si interagisce con i modelli linguistici a livello di "testo" ma diventano rilevanti quando si esaminano gli input e output esatti di un modello linguistico. Quando a Claude viene fornito del testo da valutare, il testo (costituito da una serie di caratteri) viene codificato in una serie di token per il modello da processare. Token più grandi abilitano l'efficienza dei dati durante l'inferenza e il preaddestramento (e sono utilizzati quando possibile), mentre token più piccoli consentono a un modello di gestire parole non comuni o mai viste prima. La scelta del metodo di tokenizzazione può impattare le prestazioni del modello, la dimensione del vocabolario e la capacità di gestire parole fuori vocabolario.

- [Finestra di contesto](https://platform.claude.com/docs/it/about-claude/glossary#finestra-di-contesto)
- [Fine-tuning](https://platform.claude.com/docs/it/about-claude/glossary#fine-tuning)
- [HHH](https://platform.claude.com/docs/it/about-claude/glossary#hhh)
- [Latenza](https://platform.claude.com/docs/it/about-claude/glossary#latenza)
- [LLM](https://platform.claude.com/docs/it/about-claude/glossary#llm)
- [MCP (Model Context Protocol)](https://platform.claude.com/docs/it/about-claude/glossary#mcp-model-context-protocol)
- [Connettore MCP](https://platform.claude.com/docs/it/about-claude/glossary#connettore-mcp)
- [Preaddestramento](https://platform.claude.com/docs/it/about-claude/glossary#preaddestramento)
- [RAG (Retrieval augmented generation)](https://platform.claude.com/docs/it/about-claude/glossary#rag-retrieval-augmented-generation)
- [RLHF](https://platform.claude.com/docs/it/about-claude/glossary#rlhf)
- [Temperatura](https://platform.claude.com/docs/it/about-claude/glossary#temperatura)
- [TTFT (Time to first token)](https://platform.claude.com/docs/it/about-claude/glossary#ttft-time-to-first-token)
- [Token](https://platform.claude.com/docs/it/about-claude/glossary#token)

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