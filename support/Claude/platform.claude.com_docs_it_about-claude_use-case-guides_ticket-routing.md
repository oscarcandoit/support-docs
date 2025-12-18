---
url: "https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing"
title: "Instradamento dei ticket - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/it/home)

- [Guida per sviluppatori](https://platform.claude.com/docs/it/intro)
- [Riferimento API](https://platform.claude.com/docs/it/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Risorse](https://platform.claude.com/docs/it/resources/overview)
- [Note sulla versione](https://platform.claude.com/docs/it/release-notes/overview)

Italiano

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fit%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

Search...

⌘K

Risorse

[Panoramica](https://platform.claude.com/docs/it/resources/overview) [Glossario](https://platform.claude.com/docs/it/about-claude/glossary) [Prompt di sistema](https://platform.claude.com/docs/it/release-notes/system-prompts)

Casi d'uso

[Panoramica](https://platform.claude.com/docs/it/about-claude/use-case-guides/overview) [Instradamento dei ticket](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing) [Agente di supporto clienti](https://platform.claude.com/docs/it/about-claude/use-case-guides/customer-support-chat) [Moderazione dei contenuti](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation) [Riassunto legale](https://platform.claude.com/docs/it/about-claude/use-case-guides/legal-summarization)

Libreria di prompt

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Casi d'uso

Instradamento dei ticket

Casi d'uso

# Instradamento dei ticket

Copy page

Questa guida illustra come sfruttare le capacità avanzate di comprensione del linguaggio naturale di Claude per classificare i ticket di supporto clienti su larga scala basandosi sull'intento del cliente, urgenza, prioritizzazione, profilo del cliente e altro ancora.

Copy page

## Definire se utilizzare Claude per l'instradamento dei ticket

Ecco alcuni indicatori chiave che suggeriscono di utilizzare un LLM come Claude invece degli approcci ML tradizionali per il tuo compito di classificazione:

### Hai dati di addestramento etichettati limitati disponibili

### Le tue categorie di classificazione probabilmente cambieranno o evolveranno nel tempo

### Devi gestire input di testo complessi e non strutturati

### Le tue regole di classificazione si basano sulla comprensione semantica

### Richiedi ragionamento interpretabile per le decisioni di classificazione

### Vuoi gestire più efficacemente i casi limite e i ticket ambigui

### Hai bisogno di supporto multilingue senza mantenere modelli separati

* * *

## Costruire e distribuire il tuo flusso di lavoro di supporto LLM

### Comprendere il tuo approccio di supporto attuale

Prima di tuffarsi nell'automazione, è cruciale comprendere il tuo sistema di ticketing esistente. Inizia investigando come il tuo team di supporto attualmente gestisce l'instradamento dei ticket.

Considera domande come:

- Quali criteri vengono utilizzati per determinare quale SLA/offerta di servizio viene applicata?
- L'instradamento dei ticket viene utilizzato per determinare a quale livello di supporto o specialista del prodotto va un ticket?
- Ci sono regole automatizzate o flussi di lavoro già in atto? In quali casi falliscono?
- Come vengono gestiti i casi limite o i ticket ambigui?
- Come il team prioritizza i ticket?

Più conosci su come gli umani gestiscono certi casi, meglio sarai in grado di lavorare con Claude per svolgere il compito.

### Definire le categorie di intento dell'utente

Un elenco ben definito di categorie di intento dell'utente è cruciale per una classificazione accurata dei ticket di supporto con Claude. La capacità di Claude di instradare i ticket efficacemente all'interno del tuo sistema è direttamente proporzionale a quanto ben definite sono le categorie del tuo sistema.

Ecco alcune categorie di intento dell'utente di esempio e sottocategorie.

### Problema tecnico

### Gestione account

### Informazioni prodotto

### Guida utente

### Feedback

### Relativo agli ordini

### Richiesta di servizio

### Preoccupazioni di sicurezza

### Conformità e legale

### Supporto di emergenza

### Formazione ed educazione

### Integrazione e API

Oltre all'intento, l'instradamento e la prioritizzazione dei ticket possono anche essere influenzati da altri fattori come urgenza, tipo di cliente, SLA o lingua. Assicurati di considerare altri criteri di instradamento quando costruisci il tuo sistema di instradamento automatizzato.

### Stabilire criteri di successo

Lavora con il tuo team di supporto per [definire criteri di successo chiari](https://platform.claude.com/docs/it/test-and-evaluate/define-success) con benchmark misurabili, soglie e obiettivi.

Ecco alcuni criteri standard e benchmark quando si utilizzano LLM per l'instradamento dei ticket di supporto:

### Coerenza di classificazione

### Velocità di adattamento

### Gestione multilingue

### Gestione dei casi limite

### Mitigazione dei bias

### Efficienza del prompt

### Punteggio di spiegabilità

Ecco alcuni criteri di successo comuni che possono essere utili indipendentemente dal fatto che venga utilizzato un LLM:

### Accuratezza dell'instradamento

### Tempo di assegnazione

### Tasso di re-instradamento

### Tasso di risoluzione al primo contatto

### Tempo medio di gestione

### Punteggi di soddisfazione del cliente

### Tasso di escalation

### Produttività dell'agente

### Tasso di deflection self-service

### Costo per ticket

### Scegliere il modello Claude giusto

La scelta del modello dipende dai compromessi tra costo, accuratezza e tempo di risposta.

Molti clienti hanno trovato `claude-3-5-haiku-20241022` un modello ideale per l'instradamento dei ticket, poiché è il modello più veloce e conveniente nella famiglia Claude 3 pur fornendo ancora risultati eccellenti. Se il tuo problema di classificazione richiede una profonda expertise in materia o un grande volume di categorie di intento con ragionamento complesso, potresti optare per il [modello Sonnet più grande](https://platform.claude.com/docs/it/about-claude/models).

### Costruire un prompt forte

L'instradamento dei ticket è un tipo di compito di classificazione. Claude analizza il contenuto di un ticket di supporto e lo classifica in categorie predefinite basate sul tipo di problema, urgenza, expertise richiesta o altri fattori rilevanti.

Scriviamo un prompt di classificazione dei ticket. Il nostro prompt iniziale dovrebbe contenere i contenuti della richiesta dell'utente e restituire sia il ragionamento che l'intento.

Prova il [generatore di prompt](https://platform.claude.com/docs/it/prompt-generator) sulla [Console Claude](https://platform.claude.com/login) per far scrivere a Claude una prima bozza per te.

Ecco un esempio di prompt di classificazione per l'instradamento dei ticket:

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

Analizziamo i componenti chiave di questo prompt:

- Utilizziamo le f-string di Python per creare il template del prompt, permettendo al `ticket_contents` di essere inserito nei tag `<request>`.
- Diamo a Claude un ruolo chiaramente definito come sistema di classificazione che analizza attentamente il contenuto del ticket per determinare l'intento principale e le esigenze del cliente.
- Istruiamo Claude sulla formattazione corretta dell'output, in questo caso per fornire il suo ragionamento e analisi all'interno dei tag `<reasoning>`, seguito dall'etichetta di classificazione appropriata all'interno dei tag `<intent>`.
- Specifichiamo le categorie di intento valide: "Support, Feedback, Complaint", "Order Tracking" e "Refund/Exchange".
- Includiamo alcuni esempi (a.k.a. few-shot prompting) per illustrare come dovrebbe essere formattato l'output, il che migliora accuratezza e coerenza.

Il motivo per cui vogliamo che Claude divida la sua risposta in varie sezioni di tag XML è così che possiamo usare espressioni regolari per estrarre separatamente il ragionamento e l'intento dall'output. Questo ci permette di creare passi successivi mirati nel flusso di lavoro di instradamento dei ticket, come utilizzare solo l'intento per decidere a quale persona instradare il ticket.

### Distribuire il tuo prompt

È difficile sapere quanto bene funziona il tuo prompt senza distribuirlo in un ambiente di produzione di test e [eseguire valutazioni](https://platform.claude.com/docs/it/test-and-evaluate/develop-tests).

Costruiamo la struttura di distribuzione. Inizia definendo la firma del metodo per avvolgere la nostra chiamata a Claude. Prenderemo il metodo che abbiamo già iniziato a scrivere, che ha `ticket_contents` come input, e ora restituiremo una tupla di `reasoning` e `intent` come output. Se hai un'automazione esistente che utilizza ML tradizionale, vorrai seguire quella firma del metodo invece.

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

Questo codice:

- Importa la libreria Anthropic e crea un'istanza client utilizzando la tua chiave API.
- Definisce una funzione `classify_support_request` che prende una stringa `ticket_contents`.
- Invia il `ticket_contents` a Claude per la classificazione utilizzando il `classification_prompt`
- Restituisce il `reasoning` e l'`intent` del modello estratti dalla risposta.

Poiché dobbiamo aspettare che l'intero testo di ragionamento e intento sia generato prima del parsing, impostiamo `stream=False` (il default).

* * *

## Valutare il tuo prompt

Il prompting spesso richiede test e ottimizzazione per essere pronto per la produzione. Per determinare la prontezza della tua soluzione, valuta le prestazioni basandoti sui criteri di successo e le soglie che hai stabilito in precedenza.

Per eseguire la tua valutazione, avrai bisogno di casi di test su cui eseguirla. Il resto di questa guida assume che tu abbia già [sviluppato i tuoi casi di test](https://platform.claude.com/docs/it/test-and-evaluate/develop-tests).

### Costruire una funzione di valutazione

La nostra valutazione di esempio per questa guida misura le prestazioni di Claude lungo tre metriche chiave:

- Accuratezza
- Costo per classificazione

Potresti dover valutare Claude su altri assi a seconda di quali fattori sono importanti per te.

Per valutare questo, dobbiamo prima modificare lo script che abbiamo scritto e aggiungere una funzione per confrontare l'intento previsto con l'intento effettivo e calcolare la percentuale di previsioni corrette. Dobbiamo anche aggiungere funzionalità di calcolo dei costi e misurazione del tempo.

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

Analizziamo le modifiche che abbiamo fatto:

- Abbiamo aggiunto l'`actual_intent` dai nostri casi di test nel metodo `classify_support_request` e impostato un confronto per valutare se la classificazione dell'intento di Claude corrisponde alla nostra classificazione dell'intento golden.
- Abbiamo estratto le statistiche di utilizzo per la chiamata API per calcolare il costo basato sui token di input e output utilizzati

### Eseguire la tua valutazione

Una valutazione appropriata richiede soglie e benchmark chiari per determinare cosa è un buon risultato. Lo script sopra ci darà i valori runtime per accuratezza, tempo di risposta e costo per classificazione, ma avremmo ancora bisogno di soglie chiaramente stabilite. Per esempio:

- **Accuratezza:** 95% (su 100 test)
- **Costo per classificazione:** 50% di riduzione in media (su 100 test) dal metodo di instradamento attuale

Avere queste soglie ti permette di dire rapidamente e facilmente su larga scala, e con empirismo imparziale, quale metodo è migliore per te e quali cambiamenti potrebbero dover essere fatti per adattarsi meglio ai tuoi requisiti.

* * *

## Migliorare le prestazioni

In scenari complessi, può essere utile considerare strategie aggiuntive per migliorare le prestazioni oltre alle [tecniche standard di ingegneria dei prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/overview) e alle [strategie di implementazione dei guardrail](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Ecco alcuni scenari comuni:

### Utilizzare una gerarchia tassonomica per casi con 20+ categorie di intento

Man mano che il numero di classi cresce, il numero di esempi richiesti si espande anche, rendendo potenzialmente il prompt ingombrante. Come alternativa, puoi considerare l'implementazione di un sistema di classificazione gerarchico utilizzando una miscela di classificatori.

1. Organizza i tuoi intenti in una struttura ad albero tassonomico.
2. Crea una serie di classificatori ad ogni livello dell'albero, abilitando un approccio di instradamento a cascata.

Per esempio, potresti avere un classificatore di livello superiore che categorizza ampiamente i ticket in "Problemi Tecnici", "Domande di Fatturazione" e "Richieste Generali". Ognuna di queste categorie può poi avere il suo proprio sotto-classificatore per raffinare ulteriormente la classificazione.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Pro - maggiore sfumatura e accuratezza:** Puoi creare prompt diversi per ogni percorso genitore, permettendo una classificazione più mirata e specifica per il contesto. Questo può portare a una migliore accuratezza e gestione più sfumata delle richieste dei clienti.

- **Contro - latenza aumentata:** Tieni presente che classificatori multipli possono portare a una latenza aumentata, e raccomandiamo di implementare questo approccio con il nostro modello più veloce, Haiku.


### Utilizzare database vettoriali e ricerca di similarità per gestire ticket altamente variabili

Nonostante fornire esempi sia il modo più efficace per migliorare le prestazioni, se le richieste di supporto sono altamente variabili, può essere difficile includere abbastanza esempi in un singolo prompt.

In questo scenario, potresti impiegare un database vettoriale per fare ricerche di similarità da un dataset di esempi e recuperare gli esempi più rilevanti per una data query.

Questo approccio, delineato in dettaglio nella nostra [ricetta di classificazione](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb), ha dimostrato di migliorare le prestazioni dal 71% di accuratezza al 93% di accuratezza.

### Tenere conto specificamente dei casi limite previsti

Ecco alcuni scenari dove Claude potrebbe classificare erroneamente i ticket (potrebbero essercene altri che sono unici alla tua situazione). In questi scenari, considera di fornire istruzioni esplicite o esempi nel prompt di come Claude dovrebbe gestire il caso limite:

### I clienti fanno richieste implicite

### Claude prioritizza l'emozione sull'intento

### Problemi multipli causano confusione nella prioritizzazione dei problemi

* * *

## Integrare Claude nel tuo flusso di lavoro di supporto più ampio

Un'integrazione appropriata richiede che tu prenda alcune decisioni riguardo a come il tuo script di instradamento dei ticket basato su Claude si inserisce nell'architettura del tuo sistema di instradamento dei ticket più ampio. Ci sono due modi in cui potresti farlo:

- **Basato su push:**Il sistema di ticket di supporto che stai utilizzando (es. Zendesk) attiva il tuo codice inviando un evento webhook al tuo servizio di instradamento, che poi classifica l'intento e lo instrада.
  - Questo approccio è più scalabile per il web, ma ha bisogno che tu esponga un endpoint pubblico.
- **Basato su pull:**Il tuo codice tira per gli ultimi ticket basandosi su una data programmazione e li instrада al momento del pull.
  - Questo approccio è più facile da implementare ma potrebbe fare chiamate non necessarie al sistema di ticket di supporto quando la frequenza di pull è troppo alta o potrebbe essere eccessivamente lento quando la frequenza di pull è troppo bassa.

Per entrambi questi approcci, dovrai avvolgere il tuo script in un servizio. La scelta dell'approccio dipende da quali API fornisce il tuo sistema di ticketing di supporto.

* * *

[Cookbook di classificazione\\
\\
Visita il nostro cookbook di classificazione per più codice di esempio e guida dettagliata alla valutazione.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Console Claude\\
\\
Inizia a costruire e valutare il tuo flusso di lavoro sulla Console Claude.](https://platform.claude.com/dashboard)

- [Definire se utilizzare Claude per l'instradamento dei ticket](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#definire-se-utilizzare-claude-per-l-instradamento-dei-ticket)
- [Costruire e distribuire il tuo flusso di lavoro di supporto LLM](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#costruire-e-distribuire-il-tuo-flusso-di-lavoro-di-supporto-llm)
- [Comprendere il tuo approccio di supporto attuale](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#comprendere-il-tuo-approccio-di-supporto-attuale)
- [Definire le categorie di intento dell'utente](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#definire-le-categorie-di-intento-dell-utente)
- [Stabilire criteri di successo](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#stabilire-criteri-di-successo)
- [Scegliere il modello Claude giusto](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#scegliere-il-modello-claude-giusto)
- [Costruire un prompt forte](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#costruire-un-prompt-forte)
- [Distribuire il tuo prompt](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#distribuire-il-tuo-prompt)
- [Valutare il tuo prompt](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#valutare-il-tuo-prompt)
- [Costruire una funzione di valutazione](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#costruire-una-funzione-di-valutazione)
- [Eseguire la tua valutazione](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#eseguire-la-tua-valutazione)
- [Migliorare le prestazioni](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#migliorare-le-prestazioni)
- [Utilizzare una gerarchia tassonomica per casi con 20+ categorie di intento](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#utilizzare-una-gerarchia-tassonomica-per-casi-con-20-categorie-di-intento)
- [Utilizzare database vettoriali e ricerca di similarità per gestire ticket altamente variabili](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#utilizzare-database-vettoriali-e-ricerca-di-similarita-per-gestire-ticket-altamente-variabili)
- [Tenere conto specificamente dei casi limite previsti](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#tenere-conto-specificamente-dei-casi-limite-previsti)
- [Integrare Claude nel tuo flusso di lavoro di supporto più ampio](https://platform.claude.com/docs/it/about-claude/use-case-guides/ticket-routing#integrare-claude-nel-tuo-flusso-di-lavoro-di-supporto-piu-ampio)

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