---
url: "https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing"
title: "Ticket-Routing - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/de/home)

- [Entwicklerleitfaden](https://platform.claude.com/docs/de/intro)
- [API-Referenz](https://platform.claude.com/docs/de/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressourcen](https://platform.claude.com/docs/de/resources/overview)
- [Versionshinweise](https://platform.claude.com/docs/de/release-notes/overview)

Deutsch

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fde%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

Ticket-Routing

Anwendungsfälle

# Ticket-Routing

Copy page

Dieser Leitfaden führt durch die Nutzung von Claudes fortschrittlichen Fähigkeiten zum Verstehen natürlicher Sprache, um Kundensupport-Tickets skaliert basierend auf Kundenabsicht, Dringlichkeit, Priorisierung, Kundenprofil und mehr zu klassifizieren.

Copy page

## Definieren, ob Claude für Ticket-Routing verwendet werden soll

Hier sind einige wichtige Indikatoren, dass Sie ein LLM wie Claude anstelle traditioneller ML-Ansätze für Ihre Klassifizierungsaufgabe verwenden sollten:

### Sie haben begrenzte gelabelte Trainingsdaten verfügbar

### Ihre Klassifizierungskategorien werden sich wahrscheinlich ändern oder im Laufe der Zeit entwickeln

### Sie müssen komplexe, unstrukturierte Texteingaben verarbeiten

### Ihre Klassifizierungsregeln basieren auf semantischem Verständnis

### Sie benötigen interpretierbare Begründungen für Klassifizierungsentscheidungen

### Sie möchten Grenzfälle und mehrdeutige Tickets effektiver handhaben

### Sie benötigen mehrsprachige Unterstützung ohne separate Modelle zu pflegen

* * *

## Erstellen und Bereitstellen Ihres LLM-Support-Workflows

### Verstehen Sie Ihren aktuellen Support-Ansatz

Bevor Sie sich in die Automatisierung stürzen, ist es entscheidend, Ihr bestehendes Ticketing-System zu verstehen. Beginnen Sie damit, zu untersuchen, wie Ihr Support-Team derzeit Ticket-Routing handhabt.

Betrachten Sie Fragen wie:

- Welche Kriterien werden verwendet, um zu bestimmen, welches SLA/Serviceangebot angewendet wird?
- Wird Ticket-Routing verwendet, um zu bestimmen, zu welcher Support-Stufe oder welchem Produktspezialisten ein Ticket geht?
- Gibt es bereits automatisierte Regeln oder Workflows? In welchen Fällen versagen sie?
- Wie werden Grenzfälle oder mehrdeutige Tickets behandelt?
- Wie priorisiert das Team Tickets?

Je mehr Sie darüber wissen, wie Menschen bestimmte Fälle handhaben, desto besser können Sie mit Claude zusammenarbeiten, um die Aufgabe zu erledigen.

### Definieren Sie Benutzerabsichtskategorien

Eine gut definierte Liste von Benutzerabsichtskategorien ist entscheidend für eine genaue Support-Ticket-Klassifizierung mit Claude. Claudes Fähigkeit, Tickets effektiv in Ihrem System zu routen, ist direkt proportional dazu, wie gut definiert die Kategorien Ihres Systems sind.

Hier sind einige Beispiele für Benutzerabsichtskategorien und Unterkategorien.

### Technisches Problem

### Kontoverwaltung

### Produktinformationen

### Benutzerführung

### Feedback

### Bestellbezogen

### Service-Anfrage

### Sicherheitsbedenken

### Compliance und Recht

### Notfall-Support

### Schulung und Bildung

### Integration und API

Zusätzlich zur Absicht kann Ticket-Routing und Priorisierung auch von anderen Faktoren wie Dringlichkeit, Kundentyp, SLAs oder Sprache beeinflusst werden. Stellen Sie sicher, dass Sie andere Routing-Kriterien beim Aufbau Ihres automatisierten Routing-Systems berücksichtigen.

### Erfolgskriterien festlegen

Arbeiten Sie mit Ihrem Support-Team zusammen, um [klare Erfolgskriterien zu definieren](https://platform.claude.com/docs/de/test-and-evaluate/define-success) mit messbaren Benchmarks, Schwellenwerten und Zielen.

Hier sind einige Standardkriterien und Benchmarks bei der Verwendung von LLMs für Support-Ticket-Routing:

### Klassifizierungskonsistenz

### Anpassungsgeschwindigkeit

### Mehrsprachige Handhabung

### Grenzfall-Handhabung

### Bias-Minderung

### Prompt-Effizienz

### Erklärbarkeits-Score

Hier sind einige häufige Erfolgskriterien, die unabhängig davon nützlich sein können, ob ein LLM verwendet wird:

### Routing-Genauigkeit

### Zeit bis zur Zuweisung

### Umleitungsrate

### Erstkontakt-Lösungsrate

### Durchschnittliche Bearbeitungszeit

### Kundenzufriedenheitswerte

### Eskalationsrate

### Agent-Produktivität

### Self-Service-Ablenkungsrate

### Kosten pro Ticket

### Das richtige Claude-Modell wählen

Die Wahl des Modells hängt von den Kompromissen zwischen Kosten, Genauigkeit und Antwortzeit ab.

Viele Kunden haben `claude-3-5-haiku-20241022` als ideales Modell für Ticket-Routing empfunden, da es das schnellste und kosteneffektivste Modell in der Claude 3-Familie ist und dennoch hervorragende Ergebnisse liefert. Wenn Ihr Klassifizierungsproblem tiefes Fachwissen oder eine große Anzahl von Absichtskategorien mit komplexer Argumentation erfordert, können Sie sich für das [größere Sonnet-Modell](https://platform.claude.com/docs/de/about-claude/models) entscheiden.

### Einen starken Prompt erstellen

Ticket-Routing ist eine Art von Klassifizierungsaufgabe. Claude analysiert den Inhalt eines Support-Tickets und klassifiziert es in vordefinierte Kategorien basierend auf dem Problemtyp, der Dringlichkeit, der erforderlichen Expertise oder anderen relevanten Faktoren.

Lassen Sie uns einen Ticket-Klassifizierungs-Prompt schreiben. Unser anfänglicher Prompt sollte den Inhalt der Benutzeranfrage enthalten und sowohl die Begründung als auch die Absicht zurückgeben.

Probieren Sie den [Prompt-Generator](https://platform.claude.com/docs/de/prompt-generator) in der [Claude Console](https://platform.claude.com/login) aus, um Claude einen ersten Entwurf für Sie schreiben zu lassen.

Hier ist ein Beispiel für einen Ticket-Routing-Klassifizierungs-Prompt:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Sie werden als Kundensupport-Ticket-Klassifizierungssystem fungieren. Ihre Aufgabe ist es, Kundensupport-Anfragen zu analysieren und die entsprechende Klassifizierungsabsicht für jede Anfrage zusammen mit Ihrer Begründung auszugeben.

        Hier ist die Kundensupport-Anfrage, die Sie klassifizieren müssen:

        <request>{ticket_contents}</request>

        Bitte analysieren Sie die obige Anfrage sorgfältig, um die Kernabsicht und Bedürfnisse des Kunden zu bestimmen. Überlegen Sie, was der Kunde fragt oder welche Bedenken er hat.

        Schreiben Sie zuerst Ihre Begründung und Analyse zur Klassifizierung dieser Anfrage in <reasoning>-Tags.

        Geben Sie dann das entsprechende Klassifizierungslabel für die Anfrage in einem <intent>-Tag aus. Die gültigen Absichten sind:
        <intents>
        <intent>Support, Feedback, Beschwerde</intent>
        <intent>Bestellverfolgung</intent>
        <intent>Rückerstattung/Umtausch</intent>
        </intents>

        Eine Anfrage kann NUR EINE anwendbare Absicht haben. Geben Sie nur die Absicht an, die am besten auf die Anfrage zutrifft.

        Als Beispiel betrachten Sie die folgende Anfrage:
        <request>Hallo! Ich hatte am Samstag Hochgeschwindigkeits-Glasfaser-Internet installiert und mein Installateur, Kevin, war absolut fantastisch! Wo kann ich meine positive Bewertung senden? Danke für Ihre Hilfe!</request>

        Hier ist ein Beispiel dafür, wie Ihre Ausgabe formatiert werden sollte (für die obige Beispielanfrage):
        <reasoning>Der Benutzer sucht Informationen, um positives Feedback zu hinterlassen.</reasoning>
        <intent>Support, Feedback, Beschwerde</intent>

        Hier sind ein paar weitere Beispiele:
        <examples>
        <example 2>
        Beispiel 2 Eingabe:
        <request>Ich wollte schreiben und Ihnen persönlich für das Mitgefühl danken, das Sie meiner Familie während der Beerdigung meines Vaters am vergangenen Wochenende gezeigt haben. Ihr Personal war so rücksichtsvoll und hilfsreich während dieses ganzen Prozesses; es hat uns wirklich eine Last von den Schultern genommen. Die Besuchsbroschüren waren wunderschön. Wir werden die Freundlichkeit, die Sie uns gezeigt haben, nie vergessen und sind so dankbar dafür, wie reibungslos die Verfahren verliefen. Nochmals vielen Dank, Amarantha Hill im Namen der Familie Hill.</request>

        Beispiel 2 Ausgabe:
        <reasoning>Benutzer hinterlässt eine positive Bewertung ihrer Erfahrung.</reasoning>
        <intent>Support, Feedback, Beschwerde</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Beispiel 9 Eingabe:
        <request>Ihre Website sendet ständig Werbe-Popups, die den gesamten Bildschirm blockieren. Es hat zwanzig Minuten gedauert, bis ich endlich die Telefonnummer gefunden habe, um anzurufen und mich zu beschweren. Wie kann ich möglicherweise auf meine Kontoinformationen zugreifen mit all diesen Popups? Können Sie für mich auf mein Konto zugreifen, da Ihre Website kaputt ist? Ich muss wissen, welche Adresse hinterlegt ist.</request>

        Beispiel 9 Ausgabe:
        <reasoning>Der Benutzer bittet um Hilfe beim Zugriff auf seine Web-Kontoinformationen.</reasoning>
        <intent>Support, Feedback, Beschwerde</intent>
        </example 9>

        Denken Sie daran, immer Ihre Klassifizierungsbegründung vor Ihrer tatsächlichen Absichtsausgabe anzugeben. Die Begründung sollte in <reasoning>-Tags und die Absicht in <intent>-Tags eingeschlossen werden. Geben Sie nur die Begründung und die Absicht zurück.
        """
```

Lassen Sie uns die Schlüsselkomponenten dieses Prompts aufschlüsseln:

- Wir verwenden Python f-Strings, um die Prompt-Vorlage zu erstellen, wodurch der `ticket_contents` in die `<request>`-Tags eingefügt werden kann.
- Wir geben Claude eine klar definierte Rolle als Klassifizierungssystem, das den Ticket-Inhalt sorgfältig analysiert, um die Kernabsicht und Bedürfnisse des Kunden zu bestimmen.
- Wir weisen Claude zur ordnungsgemäßen Ausgabeformatierung an, in diesem Fall seine Begründung und Analyse in `<reasoning>`-Tags zu liefern, gefolgt vom entsprechenden Klassifizierungslabel in `<intent>`-Tags.
- Wir spezifizieren die gültigen Absichtskategorien: "Support, Feedback, Beschwerde", "Bestellverfolgung" und "Rückerstattung/Umtausch".
- Wir fügen einige Beispiele hinzu (auch bekannt als Few-Shot-Prompting), um zu veranschaulichen, wie die Ausgabe formatiert werden sollte, was Genauigkeit und Konsistenz verbessert.

Der Grund, warum wir möchten, dass Claude seine Antwort in verschiedene XML-Tag-Abschnitte aufteilt, ist, damit wir reguläre Ausdrücke verwenden können, um die Begründung und Absicht separat aus der Ausgabe zu extrahieren. Dies ermöglicht es uns, gezielte nächste Schritte im Ticket-Routing-Workflow zu erstellen, wie z.B. nur die Absicht zu verwenden, um zu entscheiden, an welche Person das Ticket weitergeleitet werden soll.

### Ihren Prompt bereitstellen

Es ist schwer zu wissen, wie gut Ihr Prompt funktioniert, ohne ihn in einer Test-Produktionsumgebung bereitzustellen und [Evaluierungen durchzuführen](https://platform.claude.com/docs/de/test-and-evaluate/develop-tests).

Lassen Sie uns die Bereitstellungsstruktur aufbauen. Beginnen Sie damit, die Methodensignatur für das Umhüllen unseres Aufrufs an Claude zu definieren. Wir nehmen die Methode, die wir bereits zu schreiben begonnen haben, die `ticket_contents` als Eingabe hat, und geben nun ein Tupel von `reasoning` und `intent` als Ausgabe zurück. Wenn Sie eine bestehende Automatisierung mit traditionellem ML haben, sollten Sie stattdessen dieser Methodensignatur folgen.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Sie werden als Kundensupport-Ticket-Klassifizierungssystem fungieren.
        ...
        ... Die Begründung sollte in <reasoning>-Tags und die Absicht in <intent>-Tags eingeschlossen werden. Geben Sie nur die Begründung und die Absicht zurück.
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

Dieser Code:

- Importiert die Anthropic-Bibliothek und erstellt eine Client-Instanz mit Ihrem API-Schlüssel.
- Definiert eine `classify_support_request`-Funktion, die einen `ticket_contents`-String nimmt.
- Sendet den `ticket_contents` zur Klassifizierung mit dem `classification_prompt` an Claude
- Gibt die `reasoning` und `intent` des Modells zurück, die aus der Antwort extrahiert wurden.

Da wir warten müssen, bis der gesamte Begründungs- und Absichtstext generiert wurde, bevor wir ihn parsen können, setzen wir `stream=False` (der Standard).

* * *

## Evaluieren Sie Ihren Prompt

Prompting erfordert oft Tests und Optimierung, um produktionsreif zu sein. Um die Bereitschaft Ihrer Lösung zu bestimmen, bewerten Sie die Leistung basierend auf den Erfolgskriterien und Schwellenwerten, die Sie zuvor festgelegt haben.

Um Ihre Evaluierung durchzuführen, benötigen Sie Testfälle, auf denen Sie sie ausführen können. Der Rest dieses Leitfadens geht davon aus, dass Sie bereits [Ihre Testfälle entwickelt haben](https://platform.claude.com/docs/de/test-and-evaluate/develop-tests).

### Eine Evaluierungsfunktion erstellen

Unsere Beispiel-Evaluierung für diesen Leitfaden misst Claudes Leistung entlang drei Schlüsselmetriken:

- Genauigkeit
- Kosten pro Klassifizierung

Sie müssen Claude möglicherweise auf anderen Achsen bewerten, abhängig davon, welche Faktoren für Sie wichtig sind.

Um dies zu bewerten, müssen wir zuerst das Skript, das wir geschrieben haben, modifizieren und eine Funktion hinzufügen, um die vorhergesagte Absicht mit der tatsächlichen Absicht zu vergleichen und den Prozentsatz korrekter Vorhersagen zu berechnen. Wir müssen auch Kostenberechnungs- und Zeitmessungsfunktionalität hinzufügen.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""Sie werden als Kundensupport-Ticket-Klassifizierungssystem fungieren.
        ...
        ...Die Begründung sollte in <reasoning>-Tags und die Absicht in <intent>-Tags eingeschlossen werden. Geben Sie nur die Begründung und die Absicht zurück.
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

Lassen Sie uns die Bearbeitungen aufschlüsseln, die wir vorgenommen haben:

- Wir haben die `actual_intent` aus unseren Testfällen in die `classify_support_request`-Methode hinzugefügt und einen Vergleich eingerichtet, um zu bewerten, ob Claudes Absichtsklassifizierung mit unserer goldenen Absichtsklassifizierung übereinstimmt.
- Wir haben Nutzungsstatistiken für den API-Aufruf extrahiert, um Kosten basierend auf verwendeten Eingabe- und Ausgabe-Tokens zu berechnen

### Ihre Evaluierung durchführen

Eine ordnungsgemäße Evaluierung erfordert klare Schwellenwerte und Benchmarks, um zu bestimmen, was ein gutes Ergebnis ist. Das obige Skript gibt uns die Laufzeitwerte für Genauigkeit, Antwortzeit und Kosten pro Klassifizierung, aber wir bräuchten immer noch klar etablierte Schwellenwerte. Zum Beispiel:

- **Genauigkeit:** 95% (von 100 Tests)
- **Kosten pro Klassifizierung:** 50% Reduzierung im Durchschnitt (über 100 Tests) von der aktuellen Routing-Methode

Diese Schwellenwerte zu haben, ermöglicht es Ihnen, schnell und einfach im großen Maßstab und mit unparteiischem Empirismus zu sagen, welche Methode für Sie am besten ist und welche Änderungen möglicherweise vorgenommen werden müssen, um Ihre Anforderungen besser zu erfüllen.

* * *

## Leistung verbessern

In komplexen Szenarien kann es hilfreich sein, zusätzliche Strategien zur Leistungsverbesserung über Standard- [Prompt-Engineering-Techniken](https://platform.claude.com/docs/de/build-with-claude/prompt-engineering/overview) und [Guardrail-Implementierungsstrategien](https://platform.claude.com/docs/de/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) hinaus zu betrachten. Hier sind einige häufige Szenarien:

### Verwenden Sie eine taxonomische Hierarchie für Fälle mit 20+ Absichtskategorien

Wenn die Anzahl der Klassen wächst, erweitert sich auch die Anzahl der erforderlichen Beispiele, wodurch der Prompt möglicherweise unhandlich wird. Als Alternative können Sie die Implementierung eines hierarchischen Klassifizierungssystems mit einer Mischung von Klassifizierern in Betracht ziehen.

1. Organisieren Sie Ihre Absichten in einer taxonomischen Baumstruktur.
2. Erstellen Sie eine Reihe von Klassifizierern auf jeder Ebene des Baums, wodurch ein kaskadierender Routing-Ansatz ermöglicht wird.

Zum Beispiel könnten Sie einen Top-Level-Klassifizierer haben, der Tickets grob in "Technische Probleme", "Rechnungsfragen" und "Allgemeine Anfragen" kategorisiert. Jede dieser Kategorien kann dann ihren eigenen Sub-Klassifizierer haben, um die Klassifizierung weiter zu verfeinern.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Vorteile - größere Nuance und Genauigkeit:** Sie können verschiedene Prompts für jeden übergeordneten Pfad erstellen, was eine gezieltere und kontextspezifischere Klassifizierung ermöglicht. Dies kann zu verbesserter Genauigkeit und nuancierterem Umgang mit Kundenanfragen führen.

- **Nachteile - erhöhte Latenz:** Beachten Sie, dass mehrere Klassifizierer zu erhöhter Latenz führen können, und wir empfehlen, diesen Ansatz mit unserem schnellsten Modell, Haiku, zu implementieren.


### Verwenden Sie Vektordatenbanken und Ähnlichkeitssuche-Retrieval für hochvariable Tickets

Obwohl das Bereitstellen von Beispielen der effektivste Weg zur Leistungsverbesserung ist, kann es schwierig sein, genügend Beispiele in einem einzigen Prompt einzuschließen, wenn Support-Anfragen hochvariabel sind.

In diesem Szenario könnten Sie eine Vektordatenbank verwenden, um Ähnlichkeitssuchen aus einem Datensatz von Beispielen durchzuführen und die relevantesten Beispiele für eine gegebene Abfrage abzurufen.

Dieser Ansatz, der detailliert in unserem [Klassifizierungs-Rezept](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) beschrieben wird, hat gezeigt, dass er die Leistung von 71% Genauigkeit auf 93% Genauigkeit verbessert.

### Berücksichtigen Sie spezifisch erwartete Grenzfälle

Hier sind einige Szenarien, in denen Claude Tickets möglicherweise falsch klassifiziert (es kann andere geben, die für Ihre Situation einzigartig sind). In diesen Szenarien sollten Sie explizite Anweisungen oder Beispiele im Prompt bereitstellen, wie Claude den Grenzfall handhaben sollte:

### Kunden stellen implizite Anfragen

### Claude priorisiert Emotion über Absicht

### Mehrere Probleme verursachen Verwirrung bei der Problempriorisierung

* * *

## Claude in Ihren größeren Support-Workflow integrieren

Eine ordnungsgemäße Integration erfordert, dass Sie einige Entscheidungen darüber treffen, wie Ihr Claude-basiertes Ticket-Routing-Skript in die Architektur Ihres größeren Ticket-Routing-Systems passt. Es gibt zwei Möglichkeiten, wie Sie dies tun könnten:

- **Push-basiert:**Das Support-Ticket-System, das Sie verwenden (z.B. Zendesk), löst Ihren Code aus, indem es ein Webhook-Event an Ihren Routing-Service sendet, der dann die Absicht klassifiziert und weiterleitet.
  - Dieser Ansatz ist web-skalierbarer, erfordert aber, dass Sie einen öffentlichen Endpunkt bereitstellen.
- **Pull-basiert:**Ihr Code zieht die neuesten Tickets basierend auf einem gegebenen Zeitplan und leitet sie zum Pull-Zeitpunkt weiter.
  - Dieser Ansatz ist einfacher zu implementieren, kann aber unnötige Aufrufe an das Support-Ticket-System machen, wenn die Pull-Frequenz zu hoch ist, oder könnte übermäßig langsam sein, wenn die Pull-Frequenz zu niedrig ist.

Für beide Ansätze müssen Sie Ihr Skript in einen Service einbetten. Die Wahl des Ansatzes hängt davon ab, welche APIs Ihr Support-Ticketing-System bereitstellt.

* * *

[Klassifizierungs-Kochbuch\\
\\
Besuchen Sie unser Klassifizierungs-Kochbuch für mehr Beispielcode und detaillierte Evaluierungsanleitung.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
Beginnen Sie mit dem Aufbau und der Evaluierung Ihres Workflows in der Claude Console.](https://platform.claude.com/dashboard)

- [Definieren, ob Claude für Ticket-Routing verwendet werden soll](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#definieren-ob-claude-fuer-ticket-routing-verwendet-werden-soll)
- [Erstellen und Bereitstellen Ihres LLM-Support-Workflows](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#erstellen-und-bereitstellen-ihres-llm-support-workflows)
- [Verstehen Sie Ihren aktuellen Support-Ansatz](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#verstehen-sie-ihren-aktuellen-support-ansatz)
- [Definieren Sie Benutzerabsichtskategorien](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#definieren-sie-benutzerabsichtskategorien)
- [Erfolgskriterien festlegen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#erfolgskriterien-festlegen)
- [Das richtige Claude-Modell wählen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#das-richtige-claude-modell-waehlen)
- [Einen starken Prompt erstellen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#einen-starken-prompt-erstellen)
- [Ihren Prompt bereitstellen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#ihren-prompt-bereitstellen)
- [Evaluieren Sie Ihren Prompt](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#evaluieren-sie-ihren-prompt)
- [Eine Evaluierungsfunktion erstellen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#eine-evaluierungsfunktion-erstellen)
- [Ihre Evaluierung durchführen](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#ihre-evaluierung-durchfuehren)
- [Leistung verbessern](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#leistung-verbessern)
- [Verwenden Sie eine taxonomische Hierarchie für Fälle mit 20+ Absichtskategorien](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#verwenden-sie-eine-taxonomische-hierarchie-fuer-faelle-mit-20-absichtskategorien)
- [Verwenden Sie Vektordatenbanken und Ähnlichkeitssuche-Retrieval für hochvariable Tickets](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#verwenden-sie-vektordatenbanken-und-aehnlichkeitssuche-retrieval-fuer-hochvariable-tickets)
- [Berücksichtigen Sie spezifisch erwartete Grenzfälle](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#beruecksichtigen-sie-spezifisch-erwartete-grenzfaelle)
- [Claude in Ihren größeren Support-Workflow integrieren](https://platform.claude.com/docs/de/about-claude/use-case-guides/ticket-routing#claude-in-ihren-groesseren-support-workflow-integrieren)

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