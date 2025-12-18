---
url: "https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization"
title: "Zusammenfassung von Rechtsdokumenten - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/de/home)

- [Entwicklerleitfaden](https://platform.claude.com/docs/de/intro)
- [API-Referenz](https://platform.claude.com/docs/de/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressourcen](https://platform.claude.com/docs/de/resources/overview)
- [Versionshinweise](https://platform.claude.com/docs/de/release-notes/overview)

Deutsch

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fde%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

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

Rechtliche Zusammenfassung

Anwendungsfälle

# Zusammenfassung von Rechtsdokumenten

Copy page

Diese Anleitung zeigt, wie Sie die fortschrittlichen Funktionen zur Verarbeitung natürlicher Sprache von Claude nutzen können, um Rechtsdokumente effizient zusammenzufassen, wichtige Informationen zu extrahieren und die Rechtsrecherche zu beschleunigen. Mit Claude können Sie die Überprüfung von Verträgen, die Vorbereitung von Rechtsstreitigkeiten und behördliche Arbeiten rationalisieren, Zeit sparen und Genauigkeit in Ihren Rechtsprozessen gewährleisten.

Copy page

> Besuchen Sie unser [Zusammenfassungs-Cookbook](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb), um ein Beispiel einer Implementierung der Zusammenfassung von Rechtsdokumenten mit Claude zu sehen.

## Vor dem Aufbau mit Claude

### Entscheiden Sie, ob Sie Claude für die Zusammenfassung von Rechtsdokumenten verwenden möchten

Hier sind einige wichtige Indikatoren dafür, dass Sie ein LLM wie Claude zur Zusammenfassung von Rechtsdokumenten einsetzen sollten:

### Sie möchten eine große Menge von Dokumenten effizient und kostengünstig überprüfen

### Sie benötigen die automatisierte Extraktion wichtiger Metadaten

### Sie möchten klare, prägnante und standardisierte Zusammenfassungen erstellen

### Sie benötigen präzise Zitate für Ihre Zusammenfassungen

### Sie möchten Ihren Rechtsrechercheprozess rationalisieren und beschleunigen

### Bestimmen Sie die Details, die die Zusammenfassung extrahieren soll

Es gibt keine einzige richtige Zusammenfassung für ein gegebenes Dokument. Ohne klare Anleitung kann es für Claude schwierig sein, zu bestimmen, welche Details einzubeziehen sind. Um optimale Ergebnisse zu erzielen, identifizieren Sie die spezifischen Informationen, die Sie in die Zusammenfassung aufnehmen möchten.

Wenn Sie beispielsweise eine Untermietvereinbarung zusammenfassen, möchten Sie möglicherweise die folgenden wichtigsten Punkte extrahieren:

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

### Etablieren Sie Erfolgskriterien

Die Bewertung der Qualität von Zusammenfassungen ist bekanntermaßen eine schwierige Aufgabe. Im Gegensatz zu vielen anderen Aufgaben der Verarbeitung natürlicher Sprache fehlen bei der Bewertung von Zusammenfassungen oft klare, objektive Metriken. Der Prozess kann sehr subjektiv sein, wobei verschiedene Leser verschiedene Aspekte einer Zusammenfassung schätzen. Hier sind Kriterien, die Sie möglicherweise berücksichtigen möchten, wenn Sie bewerten, wie gut Claude die Zusammenfassung von Rechtsdokumenten durchführt.

### Sachliche Korrektheit

### Rechtliche Präzision

### Prägnanz

### Konsistenz

### Lesbarkeit

### Voreingenommenheit und Fairness

Weitere Informationen finden Sie in unserem Leitfaden zum [Festlegen von Erfolgskriterien](https://platform.claude.com/docs/de/test-and-evaluate/define-success).

* * *

## Zusammenfassung von Rechtsdokumenten mit Claude

### Wählen Sie das richtige Claude-Modell

Die Modellgenauigkeit ist äußerst wichtig bei der Zusammenfassung von Rechtsdokumenten. Claude Sonnet 4.5 ist eine ausgezeichnete Wahl für Anwendungsfälle wie diesen, bei denen hohe Genauigkeit erforderlich ist. Wenn die Größe und Menge Ihrer Dokumente so groß ist, dass die Kosten zu einem Problem werden, können Sie auch ein kleineres Modell wie Claude Haiku 4.5 verwenden.

Um diese Kosten zu schätzen, finden Sie hier einen Vergleich der Kosten für die Zusammenfassung von 1.000 Untermietvereinbarungen mit Sonnet und Haiku:

- **Inhaltsgröße**
  - Anzahl der Vereinbarungen: 1.000
  - Zeichen pro Vereinbarung: 300.000
  - Gesamtzeichen: 300M
- **Geschätzte Token**
  - Input-Token: 86M (angenommen 1 Token pro 3,5 Zeichen)
  - Output-Token pro Zusammenfassung: 350
  - Gesamtausgabe-Token: 350.000
- **Claude Sonnet 4.5 geschätzte Kosten**
  - Input-Token-Kosten: 86 MTok \* $3,00/MTok = $258
  - Output-Token-Kosten: 0,35 MTok \* $15,00/MTok = $5,25
  - Gesamtkosten: $258,00 + $5,25 = $263,25
- **Claude Haiku 3 geschätzte Kosten**
  - Input-Token-Kosten: 86 MTok \* $0,25/MTok = $21,50
  - Output-Token-Kosten: 0,35 MTok \* $1,25/MTok = $0,44
  - Gesamtkosten: $21,50 + $0,44 = $21,96

Die tatsächlichen Kosten können von diesen Schätzungen abweichen. Diese Schätzungen basieren auf dem Beispiel, das im Abschnitt zum [Prompting](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt) hervorgehoben wird.

### Transformieren Sie Dokumente in ein Format, das Claude verarbeiten kann

Bevor Sie mit der Zusammenfassung von Dokumenten beginnen, müssen Sie Ihre Daten vorbereiten. Dies umfasst das Extrahieren von Text aus PDFs, das Bereinigen des Textes und das Sicherstellen, dass er von Claude verarbeitet werden kann.

Hier ist eine Demonstration dieses Prozesses auf einer Beispiel-PDF:

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

In diesem Beispiel laden wir zunächst eine PDF einer Beispiel-Untermietvereinbarung herunter, die im [Zusammenfassungs-Cookbook](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf) verwendet wird. Diese Vereinbarung stammt aus einer öffentlich verfügbaren Untermietvereinbarung von der [sec.gov-Website](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Wir verwenden die pypdf-Bibliothek, um den Inhalt der PDF zu extrahieren und in Text umzuwandeln. Die Textdaten werden dann bereinigt, indem zusätzliche Leerzeichen und Seitenzahlen entfernt werden.

### Erstellen Sie einen starken Prompt

Claude kann sich an verschiedene Zusammenfassungsstile anpassen. Sie können die Details des Prompts ändern, um Claude anzuleiten, mehr oder weniger ausführlich zu sein, mehr oder weniger technische Terminologie einzubeziehen oder eine höhere oder niedrigere Zusammenfassung des Kontexts bereitzustellen.

Hier ist ein Beispiel, wie Sie einen Prompt erstellen, der sicherstellt, dass die generierten Zusammenfassungen eine konsistente Struktur bei der Analyse von Untermietvereinbarungen befolgen:

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

Dieser Code implementiert eine `summarize_document`-Funktion, die Claude verwendet, um den Inhalt einer Untermietvereinbarung zusammenzufassen. Die Funktion akzeptiert eine Textzeichenkette und eine Liste von zu extrahierenden Details als Eingaben. In diesem Beispiel rufen wir die Funktion mit den Variablen `document_text` und `details_to_extract` auf, die in den vorherigen Code-Snippets definiert wurden.

Innerhalb der Funktion wird ein Prompt für Claude generiert, der das zusammenzufassende Dokument, die zu extrahierenden Details und spezifische Anweisungen zur Zusammenfassung des Dokuments enthält. Der Prompt weist Claude an, mit einer Zusammenfassung jedes zu extrahierenden Details zu antworten, das in XML-Headern verschachtelt ist.

Da wir uns entschieden haben, jeden Abschnitt der Zusammenfassung in Tags auszugeben, kann jeder Abschnitt leicht als Nachbearbeitungsschritt analysiert werden. Dieser Ansatz ermöglicht strukturierte Zusammenfassungen, die für Ihren Anwendungsfall angepasst werden können, sodass jede Zusammenfassung dem gleichen Muster folgt.

### Bewerten Sie Ihren Prompt

Das Prompting erfordert oft Tests und Optimierungen, um produktionsreif zu sein. Um die Bereitschaft Ihrer Lösung zu bestimmen, bewerten Sie die Qualität Ihrer Zusammenfassungen mit einem systematischen Prozess, der quantitative und qualitative Methoden kombiniert. Die Erstellung einer [starken empirischen Bewertung](https://platform.claude.com/docs/de/test-and-evaluate/develop-tests#building-evals-and-test-cases) basierend auf Ihren definierten Erfolgskriterien ermöglicht es Ihnen, Ihre Prompts zu optimieren. Hier sind einige Metriken, die Sie möglicherweise in Ihre empirische Bewertung einbeziehen möchten:

### ROUGE-Scores

### BLEU-Scores

### Ähnlichkeit von kontextuellem Embedding

### LLM-basierte Bewertung

### Menschliche Bewertung

### Stellen Sie Ihren Prompt bereit

Hier sind einige zusätzliche Überlegungen, die Sie bei der Bereitstellung Ihrer Lösung in der Produktion beachten sollten.

1. **Stellen Sie sicher, dass keine Haftung besteht:** Verstehen Sie die rechtlichen Auswirkungen von Fehlern in den Zusammenfassungen, die zu rechtlicher Haftung für Ihre Organisation oder Ihre Kunden führen könnten. Geben Sie Haftungsausschlüsse oder rechtliche Hinweise ab, die klarstellen, dass die Zusammenfassungen von KI generiert werden und von Rechtsanwälten überprüft werden sollten.

2. **Behandeln Sie verschiedene Dokumenttypen:** In diesem Leitfaden haben wir besprochen, wie man Text aus PDFs extrahiert. In der Praxis können Dokumente in verschiedenen Formaten vorliegen (PDFs, Word-Dokumente, Textdateien usw.). Stellen Sie sicher, dass Ihre Datenextraktions-Pipeline alle Dateiformate konvertieren kann, die Sie erwarten zu erhalten.

3. **Parallelisieren Sie API-Aufrufe an Claude:** Lange Dokumente mit einer großen Anzahl von Token können bis zu eine Minute dauern, bis Claude eine Zusammenfassung generiert. Für große Dokumentsammlungen möchten Sie möglicherweise API-Aufrufe an Claude parallel senden, damit die Zusammenfassungen in einem angemessenen Zeitrahmen abgeschlossen werden können. Beachten Sie die [Rate Limits](https://platform.claude.com/docs/de/api/rate-limits#rate-limits) von Anthropic, um die maximale Anzahl von API-Aufrufen zu bestimmen, die parallel durchgeführt werden können.


* * *

## Verbessern Sie die Leistung

In komplexen Szenarien kann es hilfreich sein, zusätzliche Strategien zu berücksichtigen, um die Leistung über standardmäßige [Prompt-Engineering-Techniken](https://platform.claude.com/docs/de/build-with-claude/prompt-engineering/overview) hinaus zu verbessern. Hier sind einige fortgeschrittene Strategien:

### Führen Sie Meta-Zusammenfassung durch, um lange Dokumente zusammenzufassen

Die Zusammenfassung von Rechtsdokumenten beinhaltet oft die Behandlung langer Dokumente oder vieler verwandter Dokumente gleichzeitig, sodass Sie das Kontextfenster von Claude überschreiten. Sie können eine Chunking-Methode namens Meta-Zusammenfassung verwenden, um diesen Anwendungsfall zu behandeln. Diese Technik beinhaltet die Aufteilung von Dokumenten in kleinere, verwaltbare Chunks und die separate Verarbeitung jedes Chunks. Sie können dann die Zusammenfassungen jedes Chunks kombinieren, um eine Meta-Zusammenfassung des gesamten Dokuments zu erstellen.

Hier ist ein Beispiel, wie Sie Meta-Zusammenfassung durchführen:

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

Die `summarize_long_document`-Funktion baut auf der früheren `summarize_document`-Funktion auf, indem sie das Dokument in kleinere Chunks aufteilt und jeden Chunk einzeln zusammenfasst.

Der Code erreicht dies, indem die `summarize_document`-Funktion auf jeden Chunk von 20.000 Zeichen im ursprünglichen Dokument angewendet wird. Die einzelnen Zusammenfassungen werden dann kombiniert, und eine endgültige Zusammenfassung wird aus diesen Chunk-Zusammenfassungen erstellt.

Beachten Sie, dass die `summarize_long_document`-Funktion für unsere Beispiel-PDF nicht unbedingt erforderlich ist, da das gesamte Dokument in Claudes Kontextfenster passt. Sie wird jedoch für Dokumente, die Claudes Kontextfenster überschreiten, oder bei der Zusammenfassung mehrerer verwandter Dokumente zusammen unerlässlich. Unabhängig davon erfasst diese Meta-Zusammenfassungstechnik oft zusätzliche wichtige Details in der endgültigen Zusammenfassung, die beim früheren Single-Summary-Ansatz übersehen wurden.

### Verwenden Sie zusammengefasste indizierte Dokumente, um eine große Dokumentsammlung zu durchsuchen

Das Durchsuchen einer Dokumentsammlung mit einem LLM beinhaltet normalerweise Retrieval-Augmented Generation (RAG). In Szenarien mit großen Dokumenten oder wenn eine genaue Informationsbeschaffung entscheidend ist, kann ein grundlegender RAG-Ansatz jedoch unzureichend sein. Summary Indexed Documents ist ein fortgeschrittener RAG-Ansatz, der eine effizientere Möglichkeit bietet, Dokumente für den Abruf zu bewerten, wobei weniger Kontext als bei traditionellen RAG-Methoden verwendet wird. Bei diesem Ansatz generieren Sie zunächst mit Claude eine prägnante Zusammenfassung für jedes Dokument in Ihrem Corpus und verwenden dann Claude, um die Relevanz jeder Zusammenfassung für die gestellte Frage zu bewerten. Weitere Details zu diesem Ansatz, einschließlich eines Code-basierten Beispiels, finden Sie im Abschnitt Summary Indexed Documents im [Zusammenfassungs-Cookbook](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Fine-Tunen Sie Claude, um von Ihrem Datensatz zu lernen

Eine weitere fortgeschrittene Technik zur Verbesserung der Fähigkeit von Claude, Zusammenfassungen zu generieren, ist Fine-Tuning. Fine-Tuning beinhaltet das Training von Claude auf einem benutzerdefinierten Datensatz, der speziell auf Ihre Anforderungen zur Zusammenfassung von Rechtsdokumenten abgestimmt ist, um sicherzustellen, dass Claude sich an Ihren Anwendungsfall anpasst. Hier ist ein Überblick über die Durchführung von Fine-Tuning:

1. **Identifizieren Sie Fehler:** Beginnen Sie damit, Instanzen zu sammeln, in denen Claudes Zusammenfassungen zu kurz kommen – dies könnte das Übersehen kritischer Rechtsdetails, das Missverständnis von Kontext oder die Verwendung unangemessener Rechtsterminologie umfassen.

2. **Kuratieren Sie einen Datensatz:** Nachdem Sie diese Probleme identifiziert haben, stellen Sie einen Datensatz dieser problematischen Beispiele zusammen. Dieser Datensatz sollte die ursprünglichen Rechtsdokumente zusammen mit Ihren korrigierten Zusammenfassungen enthalten, um sicherzustellen, dass Claude das gewünschte Verhalten erlernt.

3. **Führen Sie Fine-Tuning durch:** Fine-Tuning beinhaltet das erneute Training des Modells auf Ihrem kuratierten Datensatz, um seine Gewichte und Parameter anzupassen. Dieses erneute Training hilft Claude, die spezifischen Anforderungen Ihrer Rechtsdomäne besser zu verstehen und verbessert seine Fähigkeit, Dokumente nach Ihren Standards zusammenzufassen.

4. **Iterative Verbesserung:** Fine-Tuning ist kein einmaliger Prozess. Während Claude weiterhin Zusammenfassungen generiert, können Sie iterativ neue Beispiele hinzufügen, bei denen es unterperformt hat, und seine Fähigkeiten weiter verfeinern. Im Laufe der Zeit wird diese kontinuierliche Feedback-Schleife zu einem Modell führen, das hochgradig spezialisiert auf Ihre Aufgaben zur Zusammenfassung von Rechtsdokumenten ist.


Fine-Tuning ist derzeit nur über Amazon Bedrock verfügbar. Weitere Details finden Sie im [AWS-Startblog](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Zusammenfassungs-Cookbook\\
\\
Sehen Sie sich ein vollständig implementiertes Code-basiertes Beispiel an, wie Sie Claude zur Zusammenfassung von Verträgen verwenden.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Zitate-Cookbook\\
\\
Erkunden Sie unser Zitate-Cookbook-Rezept für Anleitungen zur Gewährleistung von Genauigkeit und Erklärbarkeit von Informationen.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Vor dem Aufbau mit Claude](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#vor-dem-aufbau-mit-claude)
- [Entscheiden Sie, ob Sie Claude für die Zusammenfassung von Rechtsdokumenten verwenden möchten](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#entscheiden-sie-ob-sie-claude-fuer-die-zusammenfassung-von-rechtsdokumenten-verwenden-moechten)
- [Bestimmen Sie die Details, die die Zusammenfassung extrahieren soll](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#bestimmen-sie-die-details-die-die-zusammenfassung-extrahieren-soll)
- [Etablieren Sie Erfolgskriterien](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#etablieren-sie-erfolgskriterien)
- [Zusammenfassung von Rechtsdokumenten mit Claude](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#zusammenfassung-von-rechtsdokumenten-mit-claude)
- [Wählen Sie das richtige Claude-Modell](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#waehlen-sie-das-richtige-claude-modell)
- [Transformieren Sie Dokumente in ein Format, das Claude verarbeiten kann](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#transformieren-sie-dokumente-in-ein-format-das-claude-verarbeiten-kann)
- [Erstellen Sie einen starken Prompt](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#erstellen-sie-einen-starken-prompt)
- [Bewerten Sie Ihren Prompt](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#bewerten-sie-ihren-prompt)
- [Stellen Sie Ihren Prompt bereit](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#stellen-sie-ihren-prompt-bereit)
- [Verbessern Sie die Leistung](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#verbessern-sie-die-leistung)
- [Führen Sie Meta-Zusammenfassung durch, um lange Dokumente zusammenzufassen](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#fuehren-sie-meta-zusammenfassung-durch-um-lange-dokumente-zusammenzufassen)
- [Verwenden Sie zusammengefasste indizierte Dokumente, um eine große Dokumentsammlung zu durchsuchen](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#verwenden-sie-zusammengefasste-indizierte-dokumente-um-eine-grosse-dokumentsammlung-zu-durchsuchen)
- [Fine-Tunen Sie Claude, um von Ihrem Datensatz zu lernen](https://platform.claude.com/docs/de/about-claude/use-case-guides/legal-summarization#fine-tunen-sie-claude-um-von-ihrem-datensatz-zu-lernen)

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