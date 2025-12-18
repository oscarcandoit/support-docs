---
url: "https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation"
title: "Inhaltsmoderation - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/de/home)

- [Entwicklerleitfaden](https://platform.claude.com/docs/de/intro)
- [API-Referenz](https://platform.claude.com/docs/de/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressourcen](https://platform.claude.com/docs/de/resources/overview)
- [Versionshinweise](https://platform.claude.com/docs/de/release-notes/overview)

Deutsch

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fde%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

Search...

⌘K

Ressourcen

[Übersicht](https://platform.claude.com/docs/de/resources/overview) [Glossar](https://platform.claude.com/docs/de/about-claude/glossary) [System-Prompts](https://platform.claude.com/docs/de/release-notes/system-prompts)

Anwendungsfälle

[Übersicht](https://platform.claude.com/docs/de/about-claude/use-case-guides/overview) [Ticket-Routing](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing) [Kundenservice-Agent](https://platform.claude.com/docs/de/about-claude/use-case-guides/customer-support-chat) [Content Moderation](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation) [Rechtliche Zusammenfassung](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization)

Prompt-Bibliothek

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Anwendungsfälle

Content Moderation

Anwendungsfälle

# Inhaltsmoderation

Copy page

Inhaltsmoderation ist ein kritischer Aspekt für die Aufrechterhaltung einer sicheren, respektvollen und produktiven Umgebung in digitalen Anwendungen. In diesem Leitfaden besprechen wir, wie Claude zur Moderation von Inhalten in Ihrer digitalen Anwendung verwendet werden kann.

Copy page

> Besuchen Sie unser [Inhaltsmoderation-Kochbuch](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb), um ein Beispiel für eine Inhaltsmoderation-Implementierung mit Claude zu sehen.

Dieser Leitfaden konzentriert sich auf die Moderation von benutzergenerierten Inhalten in Ihrer Anwendung. Wenn Sie nach Anleitungen zur Moderation von Interaktionen mit Claude suchen, lesen Sie bitte unseren [Leitfaden zu Schutzmaßnahmen](https://platform.claude.com/docs/de/test-and-evaluate/strengthen-guardrails/reduce-hallucinations).

## Vor der Entwicklung mit Claude

### Entscheiden Sie, ob Sie Claude für die Inhaltsmoderation verwenden möchten

Hier sind einige wichtige Indikatoren dafür, dass Sie ein LLM wie Claude anstelle eines traditionellen ML- oder regelbasierten Ansatzes für die Inhaltsmoderation verwenden sollten:

### Sie möchten eine kosteneffektive und schnelle Implementierung

### Sie wünschen sowohl semantisches Verständnis als auch schnelle Entscheidungen

### Sie benötigen konsistente Richtlinienentscheidungen

### Ihre Moderationsrichtlinien werden sich wahrscheinlich ändern oder im Laufe der Zeit weiterentwickeln

### Sie benötigen interpretierbare Begründungen für Ihre Moderationsentscheidungen

### Sie benötigen mehrsprachige Unterstützung ohne separate Modelle zu pflegen

### Sie benötigen multimodale Unterstützung

Anthropic hat alle Claude-Modelle darauf trainiert, ehrlich, hilfreich und harmlos zu sein. Dies kann dazu führen, dass Claude Inhalte moderiert, die als besonders gefährlich eingestuft werden (im Einklang mit unserer [Richtlinie für akzeptable Nutzung](https://www.anthropic.com/legal/aup)), unabhängig von der verwendeten Eingabeaufforderung. Zum Beispiel könnte eine Website für Erwachsene, die Benutzern erlauben möchte, explizite sexuelle Inhalte zu posten, feststellen, dass Claude explizite Inhalte immer noch als moderationsbedürftig kennzeichnet, auch wenn sie in ihrer Eingabeaufforderung angeben, explizite sexuelle Inhalte nicht zu moderieren. Wir empfehlen, unsere AUP im Voraus der Entwicklung einer Moderationslösung zu überprüfen.

### Generieren Sie Beispiele für zu moderierende Inhalte

Bevor Sie eine Inhaltsmoderation-Lösung entwickeln, erstellen Sie zunächst Beispiele für Inhalte, die gekennzeichnet werden sollten, und Inhalte, die nicht gekennzeichnet werden sollten. Stellen Sie sicher, dass Sie Grenzfälle und herausfordernde Szenarien einschließen, die für ein Inhaltsmoderation-System schwer effektiv zu handhaben sein könnten. Überprüfen Sie anschließend Ihre Beispiele, um eine gut definierte Liste von Moderationskategorien zu erstellen.
Zum Beispiel könnten die von einer Social-Media-Plattform generierten Beispiele folgende umfassen:

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

Die effektive Moderation dieser Beispiele erfordert ein nuanciertes Verständnis der Sprache. In dem Kommentar `This movie was great, I really enjoyed it. The main actor really killed it!` muss das Inhaltsmoderation-System erkennen, dass "killed it" eine Metapher ist, nicht ein Hinweis auf tatsächliche Gewalt. Umgekehrt sollte der Kommentar `Delete this post now or you better hide. I am coming after you and your family.` trotz des Fehlens expliziter Gewalterwähnungen vom Inhaltsmoderation-System gekennzeichnet werden.

Die `unsafe_categories`-Liste kann an Ihre spezifischen Bedürfnisse angepasst werden. Wenn Sie beispielsweise verhindern möchten, dass Minderjährige Inhalte auf Ihrer Website erstellen, könnten Sie "Underage Posting" zur Liste hinzufügen.

* * *

## Wie man Inhalte mit Claude moderiert

### Wählen Sie das richtige Claude-Modell

Bei der Auswahl eines Modells ist es wichtig, die Größe Ihrer Daten zu berücksichtigen. Wenn Kosten ein Anliegen sind, ist ein kleineres Modell wie Claude Haiku 3 aufgrund seiner Kosteneffizienz eine ausgezeichnete Wahl. Unten ist eine Schätzung der Kosten zur Moderation von Text für eine Social-Media-Plattform, die eine Milliarde Posts pro Monat erhält:

- **Inhaltsgröße**
  - Posts pro Monat: 1 Mrd.
  - Zeichen pro Post: 100
  - Gesamtzeichen: 100 Mrd.
- **Geschätzte Token**
  - Input-Token: 28,6 Mrd. (angenommen 1 Token pro 3,5 Zeichen)
  - Prozentsatz der gekennzeichneten Nachrichten: 3%
  - Output-Token pro gekennzeichneter Nachricht: 50
  - Gesamte Output-Token: 1,5 Mrd.
- **Claude Haiku 3 geschätzte Kosten**
  - Input-Token-Kosten: 2.860 MTok \* $0,25/MTok = $715
  - Output-Token-Kosten: 1.500 MTok \* $1,25/MTok = $1.875
  - Monatliche Kosten: $715 + $1.875 = $2.590
- **Claude Sonnet 4.5 geschätzte Kosten**
  - Input-Token-Kosten: 2.860 MTok \* $3,00/MTok = $8.580
  - Output-Token-Kosten: 1.500 MTok \* $15,00/MTok = $22.500
  - Monatliche Kosten: $8.580 + $22.500 = $31.080

Die tatsächlichen Kosten können von diesen Schätzungen abweichen. Diese Schätzungen basieren auf der Eingabeaufforderung, die im Abschnitt über [Stapelverarbeitung](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#consider-batch-processing) hervorgehoben wird. Output-Token können noch weiter reduziert werden, indem das `explanation`-Feld aus der Antwort entfernt wird.

### Erstellen Sie eine starke Eingabeaufforderung

Um Claude für die Inhaltsmoderation zu verwenden, muss Claude die Moderationsanforderungen Ihrer Anwendung verstehen. Beginnen wir mit dem Schreiben einer Eingabeaufforderung, die es Ihnen ermöglicht, Ihre Moderationsbedürfnisse zu definieren:

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

In diesem Beispiel enthält die `moderate_message`-Funktion eine Bewertungsaufforderung, die die unsicheren Inhaltskategorien und die Nachricht, die wir bewerten möchten, einschließt. Die Eingabeaufforderung bittet Claude zu bewerten, ob die Nachricht moderiert werden sollte, basierend auf den unsicheren Kategorien, die wir definiert haben.

Die Bewertung des Modells wird dann geparst, um zu bestimmen, ob es eine Verletzung gibt. Wenn es eine Verletzung gibt, gibt Claude auch eine Liste der verletzten Kategorien sowie eine Erklärung zurück, warum die Nachricht unsicher ist.

### Bewerten Sie Ihre Eingabeaufforderung

Inhaltsmoderation ist ein Klassifikationsproblem. Daher können Sie dieselben Techniken verwenden, die in unserem [Klassifikations-Kochbuch](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) beschrieben sind, um die Genauigkeit Ihres Inhaltsmoderation-Systems zu bestimmen.

Eine zusätzliche Überlegung ist, dass Sie anstatt die Inhaltsmoderation als binäres Klassifikationsproblem zu behandeln, stattdessen mehrere Kategorien erstellen können, um verschiedene Risikoebenen darzustellen. Das Erstellen mehrerer Risikoebenen ermöglicht es Ihnen, die Aggressivität Ihrer Moderation anzupassen. Zum Beispiel möchten Sie möglicherweise Benutzeranfragen, die als hohes Risiko eingestuft werden, automatisch blockieren, während Benutzer mit vielen mittleren Risikoanfragen für menschliche Überprüfung gekennzeichnet werden.

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

Dieser Code implementiert eine `assess_risk_level`-Funktion, die Claude verwendet, um das Risikoniveau einer Nachricht zu bewerten. Die Funktion akzeptiert eine Nachricht und eine Liste unsicherer Kategorien als Eingaben.

Innerhalb der Funktion wird eine Eingabeaufforderung für Claude generiert, die die zu bewertende Nachricht, die unsicheren Kategorien und spezifische Anweisungen zur Bewertung des Risikoniveaus einschließt. Die Eingabeaufforderung weist Claude an, mit einem JSON-Objekt zu antworten, das das Risikoniveau, die verletzten Kategorien und eine optionale Erklärung einschließt.

Dieser Ansatz ermöglicht flexible Inhaltsmoderation durch die Zuweisung von Risikoebenen. Er kann nahtlos in ein größeres System integriert werden, um die Inhaltsfilterung zu automatisieren oder Kommentare basierend auf ihrem bewerteten Risikoniveau für menschliche Überprüfung zu kennzeichnen. Zum Beispiel wird bei der Ausführung dieses Codes der Kommentar `Delete this post now or you better hide. I am coming after you and your family.` als hohes Risiko identifiziert aufgrund seiner gefährlichen Bedrohung. Umgekehrt wird der Kommentar `Stay away from the 5G cellphones!! They are using 5G to control you.` als mittleres Risiko kategorisiert.

### Stellen Sie Ihre Eingabeaufforderung bereit

Sobald Sie von der Qualität Ihrer Lösung überzeugt sind, ist es Zeit, sie in der Produktion bereitzustellen. Hier sind einige bewährte Praktiken, die Sie befolgen sollten, wenn Sie Inhaltsmoderation in der Produktion verwenden:

1. **Geben Sie Benutzern klares Feedback:** Wenn Benutzereingaben blockiert werden oder eine Antwort aufgrund von Inhaltsmoderation gekennzeichnet wird, geben Sie informatives und konstruktives Feedback, um Benutzern zu helfen zu verstehen, warum ihre Nachricht gekennzeichnet wurde und wie sie sie angemessen umformulieren können. In den obigen Codierungsbeispielen geschieht dies durch das `explanation`-Tag in der Claude-Antwort.

2. **Analysieren Sie moderierte Inhalte:** Verfolgen Sie die Arten von Inhalten, die von Ihrem Moderationssystem gekennzeichnet werden, um Trends und potenzielle Verbesserungsbereiche zu identifizieren.

3. **Kontinuierlich bewerten und verbessern:** Bewerten Sie regelmäßig die Leistung Ihres Inhaltsmoderation-Systems mit Metriken wie Präzisions- und Recall-Tracking. Verwenden Sie diese Daten, um Ihre Moderationsaufforderungen, Schlüsselwörter und Bewertungskriterien iterativ zu verfeinern.


* * *

## Leistung verbessern

In komplexen Szenarien kann es hilfreich sein, zusätzliche Strategien zu berücksichtigen, um die Leistung über standardmäßige [Eingabeaufforderungs-Engineering-Techniken](https://platform.claude.com/docs/de/build-with-claude/prompt-engineering/overview) hinaus zu verbessern. Hier sind einige fortgeschrittene Strategien:

### Definieren Sie Themen und geben Sie Beispiele

Zusätzlich zur Auflistung der unsicheren Kategorien in der Eingabeaufforderung können weitere Verbesserungen vorgenommen werden, indem Definitionen und Phrasen zu jeder Kategorie bereitgestellt werden.

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
    '': 'Content that contains sensitive, personal information about private individuals.',
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

Die `moderate_message_with_definitions`-Funktion erweitert die frühere `moderate_message`-Funktion, indem sie es ermöglicht, jede unsichere Kategorie mit einer detaillierten Definition zu paaren. Dies geschieht im Code durch das Ersetzen der `unsafe_categories`-Liste aus der ursprünglichen Funktion durch ein `unsafe_category_definitions`-Wörterbuch. Dieses Wörterbuch ordnet jede unsichere Kategorie ihrer entsprechenden Definition zu. Sowohl die Kategorienamen als auch ihre Definitionen sind in der Eingabeaufforderung enthalten.

Bemerkenswert ist, dass die Definition für die `Specialized Advice`-Kategorie nun die Arten von Finanzberatung spezifiziert, die verboten werden sollten. Infolgedessen löst der Kommentar `It's a great time to invest in gold!`, der zuvor die `moderate_message`-Bewertung bestanden hat, nun eine Verletzung aus.

### Erwägen Sie Stapelverarbeitung

Um Kosten in Situationen zu reduzieren, in denen Echtzeitmoderation nicht notwendig ist, erwägen Sie die Moderation von Nachrichten in Stapeln. Schließen Sie mehrere Nachrichten in den Kontext der Eingabeaufforderung ein und bitten Sie Claude zu bewerten, welche Nachrichten moderiert werden sollten.

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

In diesem Beispiel behandelt die `batch_moderate_messages`-Funktion die Moderation eines ganzen Stapels von Nachrichten mit einem einzigen Claude-API-Aufruf.
Innerhalb der Funktion wird eine Eingabeaufforderung erstellt, die die Liste der zu bewertenden Nachrichten, die definierten unsicheren Inhaltskategorien und ihre Beschreibungen einschließt. Die Eingabeaufforderung weist Claude an, ein JSON-Objekt zurückzugeben, das alle Nachrichten auflistet, die Verletzungen enthalten. Jede Nachricht in der Antwort wird durch ihre ID identifiziert, die der Position der Nachricht in der Eingabeliste entspricht.
Beachten Sie, dass das Finden der optimalen Stapelgröße für Ihre spezifischen Bedürfnisse möglicherweise etwas Experimentieren erfordert. Während größere Stapelgrößen die Kosten senken können, könnten sie auch zu einem leichten Qualitätsverlust führen. Zusätzlich müssen Sie möglicherweise den `max_tokens`-Parameter im Claude-API-Aufruf erhöhen, um längere Antworten zu berücksichtigen. Für Details zur maximalen Anzahl von Token, die Ihr gewähltes Modell ausgeben kann, siehe die [Modellvergleichsseite](https://platform.claude.com/docs/de/about-claude/models#model-comparison-table).

[Inhaltsmoderation-Kochbuch\\
\\
Sehen Sie sich ein vollständig implementiertes codebasiertes Beispiel an, wie Claude für die Inhaltsmoderation verwendet wird.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [Leitfaden zu Schutzmaßnahmen\\
\\
Erkunden Sie unseren Leitfaden zu Schutzmaßnahmen für Techniken zur Moderation von Interaktionen mit Claude.](https://platform.claude.com/docs/de/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [Vor der Entwicklung mit Claude](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#vor-der-entwicklung-mit-claude)
- [Entscheiden Sie, ob Sie Claude für die Inhaltsmoderation verwenden möchten](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#entscheiden-sie-ob-sie-claude-fuer-die-inhaltsmoderation-verwenden-moechten)
- [Generieren Sie Beispiele für zu moderierende Inhalte](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#generieren-sie-beispiele-fuer-zu-moderierende-inhalte)
- [Wie man Inhalte mit Claude moderiert](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#wie-man-inhalte-mit-claude-moderiert)
- [Wählen Sie das richtige Claude-Modell](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#waehlen-sie-das-richtige-claude-modell)
- [Erstellen Sie eine starke Eingabeaufforderung](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#erstellen-sie-eine-starke-eingabeaufforderung)
- [Bewerten Sie Ihre Eingabeaufforderung](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#bewerten-sie-ihre-eingabeaufforderung)
- [Stellen Sie Ihre Eingabeaufforderung bereit](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#stellen-sie-ihre-eingabeaufforderung-bereit)
- [Leistung verbessern](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#leistung-verbessern)
- [Definieren Sie Themen und geben Sie Beispiele](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#definieren-sie-themen-und-geben-sie-beispiele)
- [Erwägen Sie Stapelverarbeitung](https://platform.claude.com/docs/de/about-claude/use-case-guides/content-moderation#erwaegen-sie-stapelverarbeitung)

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