---
url: "https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation"
title: "Moderazione dei contenuti - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/it/home)

- [Guida per sviluppatori](https://platform.claude.com/docs/it/intro)
- [Riferimento API](https://platform.claude.com/docs/it/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Risorse](https://platform.claude.com/docs/it/resources/overview)
- [Note sulla versione](https://platform.claude.com/docs/it/release-notes/overview)

Italiano

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fit%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

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

Moderazione dei contenuti

Casi d'uso

# Moderazione dei contenuti

Copy page

La moderazione dei contenuti è un aspetto critico per mantenere un ambiente sicuro, rispettoso e produttivo nelle applicazioni digitali. In questa guida, discuteremo come Claude può essere utilizzato per moderare i contenuti all'interno della tua applicazione digitale.

Copy page

> Visita il nostro [cookbook sulla moderazione dei contenuti](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) per vedere un esempio di implementazione della moderazione dei contenuti utilizzando Claude.

Questa guida si concentra sulla moderazione dei contenuti generati dagli utenti all'interno della tua applicazione. Se stai cercando una guida per moderare le interazioni con Claude, consulta la nostra [guida sui guardrail](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-hallucinations).

## Prima di costruire con Claude

### Decidere se utilizzare Claude per la moderazione dei contenuti

Ecco alcuni indicatori chiave che suggeriscono di utilizzare un LLM come Claude invece di un approccio ML tradizionale o basato su regole per la moderazione dei contenuti:

### Vuoi un'implementazione economica e rapida

### Desideri sia comprensione semantica che decisioni rapide

### Hai bisogno di decisioni politiche coerenti

### Le tue politiche di moderazione sono probabilmente destinate a cambiare o evolversi nel tempo

### Richiedi ragionamento interpretabile per le tue decisioni di moderazione

### Hai bisogno di supporto multilingue senza mantenere modelli separati

### Richiedi supporto multimodale

Anthropic ha addestrato tutti i modelli Claude per essere onesti, utili e innocui. Questo può risultare in Claude che modera contenuti ritenuti particolarmente pericolosi (in linea con la nostra [Politica di Uso Accettabile](https://www.anthropic.com/legal/aup)), indipendentemente dal prompt utilizzato. Ad esempio, un sito web per adulti che vuole permettere agli utenti di pubblicare contenuti sessuali espliciti potrebbe scoprire che Claude continua a segnalare contenuti espliciti come richiedenti moderazione, anche se specificano nel loro prompt di non moderare contenuti sessuali espliciti. Raccomandiamo di rivedere la nostra AUP prima di costruire una soluzione di moderazione.

### Generare esempi di contenuti da moderare

Prima di sviluppare una soluzione di moderazione dei contenuti, crea prima esempi di contenuti che dovrebbero essere segnalati e contenuti che non dovrebbero essere segnalati. Assicurati di includere casi limite e scenari impegnativi che potrebbero essere difficili da gestire efficacemente per un sistema di moderazione dei contenuti. Successivamente, rivedi i tuoi esempi per creare un elenco ben definito di categorie di moderazione.
Ad esempio, gli esempi generati da una piattaforma di social media potrebbero includere quanto segue:

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

Moderare efficacemente questi esempi richiede una comprensione sfumata del linguaggio. Nel commento, `This movie was great, I really enjoyed it. The main actor really killed it!`, il sistema di moderazione dei contenuti deve riconoscere che "killed it" è una metafora, non un'indicazione di violenza reale. Al contrario, nonostante la mancanza di menzioni esplicite di violenza, il commento `Delete this post now or you better hide. I am coming after you and your family.` dovrebbe essere segnalato dal sistema di moderazione dei contenuti.

L'elenco `unsafe_categories` può essere personalizzato per adattarsi alle tue esigenze specifiche. Ad esempio, se desideri impedire ai minori di creare contenuti sul tuo sito web, potresti aggiungere "Underage Posting" all'elenco.

* * *

## Come moderare i contenuti utilizzando Claude

### Selezionare il modello Claude giusto

Quando selezioni un modello, è importante considerare la dimensione dei tuoi dati. Se i costi sono una preoccupazione, un modello più piccolo come Claude Haiku 3 è una scelta eccellente grazie alla sua economicità. Di seguito è riportata una stima del costo per moderare il testo per una piattaforma di social media che riceve un miliardo di post al mese:

- **Dimensione del contenuto**
  - Post al mese: 1 miliardo
  - Caratteri per post: 100
  - Caratteri totali: 100 miliardi
- **Token stimati**
  - Token di input: 28,6 miliardi (assumendo 1 token per 3,5 caratteri)
  - Percentuale di messaggi segnalati: 3%
  - Token di output per messaggio segnalato: 50
  - Token di output totali: 1,5 miliardi
- **Costo stimato Claude Haiku 3**
  - Costo token di input: 2.860 MTok \* $0,25/MTok = $715
  - Costo token di output: 1.500 MTok \* $1,25/MTok = $1.875
  - Costo mensile: $715 + $1.875 = $2.590
- **Costo stimato Claude Sonnet 4.5**
  - Costo token di input: 2.860 MTok \* $3,00/MTok = $8.580
  - Costo token di output: 1.500 MTok \* $15,00/MTok = $22.500
  - Costo mensile: $8.580 + $22.500 = $31.080

I costi effettivi possono differire da queste stime. Queste stime sono basate sul prompt evidenziato nella sezione sull' [elaborazione in batch](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#consider-batch-processing). I token di output possono essere ridotti ulteriormente rimuovendo il campo `explanation` dalla risposta.

### Costruire un prompt forte

Per utilizzare Claude per la moderazione dei contenuti, Claude deve comprendere i requisiti di moderazione della tua applicazione. Iniziamo scrivendo un prompt che ti permette di definire le tue esigenze di moderazione:

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

In questo esempio, la funzione `moderate_message` contiene un prompt di valutazione che include le categorie di contenuti non sicuri e il messaggio che desideriamo valutare. Il prompt chiede a Claude di valutare se il messaggio dovrebbe essere moderato, basandosi sulle categorie non sicure che abbiamo definito.

La valutazione del modello viene quindi analizzata per determinare se c'è una violazione. Se c'è una violazione, Claude restituisce anche un elenco delle categorie violate, così come una spiegazione del perché il messaggio è non sicuro.

### Valutare il tuo prompt

La moderazione dei contenuti è un problema di classificazione. Pertanto, puoi utilizzare le stesse tecniche delineate nel nostro [cookbook sulla classificazione](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) per determinare l'accuratezza del tuo sistema di moderazione dei contenuti.

Una considerazione aggiuntiva è che invece di trattare la moderazione dei contenuti come un problema di classificazione binaria, potresti invece creare più categorie per rappresentare vari livelli di rischio. Creare più livelli di rischio ti permette di regolare l'aggressività della tua moderazione. Ad esempio, potresti voler bloccare automaticamente le query degli utenti che sono ritenute ad alto rischio, mentre gli utenti con molte query a medio rischio vengono segnalati per la revisione umana.

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

Questo codice implementa una funzione `assess_risk_level` che utilizza Claude per valutare il livello di rischio di un messaggio. La funzione accetta un messaggio e un elenco di categorie non sicure come input.

All'interno della funzione, viene generato un prompt per Claude, includendo il messaggio da valutare, le categorie non sicure e istruzioni specifiche per valutare il livello di rischio. Il prompt istruisce Claude a rispondere con un oggetto JSON che include il livello di rischio, le categorie violate e una spiegazione opzionale.

Questo approccio consente una moderazione dei contenuti flessibile assegnando livelli di rischio. Può essere integrato senza problemi in un sistema più ampio per automatizzare il filtraggio dei contenuti o segnalare commenti per la revisione umana basandosi sul loro livello di rischio valutato. Ad esempio, quando si esegue questo codice, il commento `Delete this post now or you better hide. I am coming after you and your family.` è identificato come ad alto rischio a causa della sua minaccia pericolosa. Al contrario, il commento `Stay away from the 5G cellphones!! They are using 5G to control you.` è categorizzato come a medio rischio.

### Distribuire il tuo prompt

Una volta che sei sicuro della qualità della tua soluzione, è tempo di distribuirla in produzione. Ecco alcune migliori pratiche da seguire quando si utilizza la moderazione dei contenuti in produzione:

1. **Fornire feedback chiaro agli utenti:** Quando l'input dell'utente viene bloccato o una risposta viene segnalata a causa della moderazione dei contenuti, fornisci feedback informativo e costruttivo per aiutare gli utenti a capire perché il loro messaggio è stato segnalato e come possono riformularlo appropriatamente. Negli esempi di codice sopra, questo viene fatto attraverso il tag `explanation` nella risposta di Claude.

2. **Analizzare i contenuti moderati:** Tieni traccia dei tipi di contenuti che vengono segnalati dal tuo sistema di moderazione per identificare tendenze e potenziali aree di miglioramento.

3. **Valutare e migliorare continuamente:** Valuta regolarmente le prestazioni del tuo sistema di moderazione dei contenuti utilizzando metriche come il tracciamento di precisione e richiamo. Utilizza questi dati per perfezionare iterativamente i tuoi prompt di moderazione, parole chiave e criteri di valutazione.


* * *

## Migliorare le prestazioni

In scenari complessi, può essere utile considerare strategie aggiuntive per migliorare le prestazioni oltre alle tecniche standard di [ingegneria dei prompt](https://platform.claude.com/docs/it/build-with-claude/prompt-engineering/overview). Ecco alcune strategie avanzate:

### Definire argomenti e fornire esempi

Oltre a elencare le categorie non sicure nel prompt, ulteriori miglioramenti possono essere fatti fornendo definizioni e frasi relative a ciascuna categoria.

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

La funzione `moderate_message_with_definitions` espande la precedente funzione `moderate_message` permettendo a ciascuna categoria non sicura di essere abbinata a una definizione dettagliata. Questo avviene nel codice sostituendo l'elenco `unsafe_categories` dalla funzione originale con un dizionario `unsafe_category_definitions`. Questo dizionario mappa ciascuna categoria non sicura alla sua definizione corrispondente. Sia i nomi delle categorie che le loro definizioni sono inclusi nel prompt.

Notevolmente, la definizione per la categoria `Specialized Advice` ora specifica i tipi di consigli finanziari che dovrebbero essere proibiti. Di conseguenza, il commento `It's a great time to invest in gold!`, che precedentemente superava la valutazione `moderate_message`, ora scatena una violazione.

### Considerare l'elaborazione in batch

Per ridurre i costi in situazioni dove la moderazione in tempo reale non è necessaria, considera di moderare i messaggi in batch. Includi più messaggi nel contesto del prompt e chiedi a Claude di valutare quali messaggi dovrebbero essere moderati.

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

In questo esempio, la funzione `batch_moderate_messages` gestisce la moderazione di un intero batch di messaggi con una singola chiamata API di Claude.
All'interno della funzione, viene creato un prompt che include l'elenco dei messaggi da valutare, le categorie di contenuti non sicuri definite e le loro descrizioni. Il prompt dirige Claude a restituire un oggetto JSON che elenca tutti i messaggi che contengono violazioni. Ogni messaggio nella risposta è identificato dal suo id, che corrisponde alla posizione del messaggio nell'elenco di input.
Tieni presente che trovare la dimensione ottimale del batch per le tue esigenze specifiche potrebbe richiedere qualche sperimentazione. Mentre dimensioni di batch più grandi possono ridurre i costi, potrebbero anche portare a una leggera diminuzione della qualità. Inoltre, potresti dover aumentare il parametro `max_tokens` nella chiamata API di Claude per accogliere risposte più lunghe. Per dettagli sul numero massimo di token che il tuo modello scelto può produrre, fai riferimento alla [pagina di confronto dei modelli](https://platform.claude.com/docs/it/about-claude/models#model-comparison-table).

[Cookbook sulla moderazione dei contenuti\\
\\
Visualizza un esempio completamente implementato basato su codice di come utilizzare Claude per la moderazione dei contenuti.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [Guida sui guardrail\\
\\
Esplora la nostra guida sui guardrail per tecniche per moderare le interazioni con Claude.](https://platform.claude.com/docs/it/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [Prima di costruire con Claude](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#prima-di-costruire-con-claude)
- [Decidere se utilizzare Claude per la moderazione dei contenuti](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#decidere-se-utilizzare-claude-per-la-moderazione-dei-contenuti)
- [Generare esempi di contenuti da moderare](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#generare-esempi-di-contenuti-da-moderare)
- [Come moderare i contenuti utilizzando Claude](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#come-moderare-i-contenuti-utilizzando-claude)
- [Selezionare il modello Claude giusto](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#selezionare-il-modello-claude-giusto)
- [Costruire un prompt forte](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#costruire-un-prompt-forte)
- [Valutare il tuo prompt](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#valutare-il-tuo-prompt)
- [Distribuire il tuo prompt](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#distribuire-il-tuo-prompt)
- [Migliorare le prestazioni](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#migliorare-le-prestazioni)
- [Definire argomenti e fornire esempi](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#definire-argomenti-e-fornire-esempi)
- [Considerare l'elaborazione in batch](https://platform.claude.com/docs/it/about-claude/use-case-guides/content-moderation#considerare-l-elaborazione-in-batch)

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