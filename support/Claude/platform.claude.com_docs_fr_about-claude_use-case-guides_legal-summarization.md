---
url: "https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization"
title: "Résumé de documents juridiques - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

Search...

⌘K

Ressources

[Aperçu](https://platform.claude.com/docs/fr/resources/overview) [Glossaire](https://platform.claude.com/docs/fr/about-claude/glossary) [Prompts système](https://platform.claude.com/docs/fr/release-notes/system-prompts)

Cas d'usage

[Aperçu](https://platform.claude.com/docs/fr/about-claude/use-case-guides/overview) [Routage des tickets](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing) [Agent de support client](https://platform.claude.com/docs/fr/about-claude/use-case-guides/customer-support-chat) [Modération de contenu](https://platform.claude.com/docs/fr/about-claude/use-case-guides/content-moderation) [Résumé juridique](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization)

Bibliothèque de prompts

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Cas d'usage

Résumé juridique

Cas d'usage

# Résumé de documents juridiques

Copy page

Ce guide explique comment exploiter les capacités avancées de traitement du langage naturel de Claude pour résumer efficacement les documents juridiques, en extrayant les informations clés et en accélérant la recherche juridique. Avec Claude, vous pouvez rationaliser l'examen des contrats, la préparation des litiges et les travaux réglementaires, en économisant du temps et en garantissant la précision de vos processus juridiques.

Copy page

> Visitez notre [guide de résumé](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) pour voir un exemple d'implémentation de résumé juridique utilisant Claude.

## Avant de construire avec Claude

### Décidez si vous devez utiliser Claude pour le résumé de documents juridiques

Voici quelques indicateurs clés selon lesquels vous devriez employer un LLM comme Claude pour résumer des documents juridiques :

### Vous souhaitez examiner un grand volume de documents efficacement et de manière abordable

### Vous avez besoin d'une extraction automatisée des métadonnées clés

### Vous souhaitez générer des résumés clairs, concis et standardisés

### Vous avez besoin de citations précises pour vos résumés

### Vous souhaitez rationaliser et accélérer votre processus de recherche juridique

### Déterminez les détails que vous souhaitez que le résumé extraie

Il n'existe pas de résumé unique et correct pour un document donné. Sans direction claire, il peut être difficile pour Claude de déterminer quels détails inclure. Pour obtenir des résultats optimaux, identifiez les informations spécifiques que vous souhaitez inclure dans le résumé.

Par exemple, lors de la résumé d'un accord de sous-location, vous pourriez souhaiter extraire les points clés suivants :

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

### Établissez des critères de succès

L'évaluation de la qualité des résumés est une tâche notoirement difficile. Contrairement à de nombreuses autres tâches de traitement du langage naturel, l'évaluation des résumés manque souvent de métriques claires et objectives. Le processus peut être très subjectif, les différents lecteurs valorisant différents aspects d'un résumé. Voici les critères que vous pourriez souhaiter considérer lors de l'évaluation de la performance de Claude en matière de résumé juridique.

### Exactitude factuelle

### Précision juridique

### Concision

### Cohérence

### Lisibilité

### Biais et équité

Consultez notre guide sur [l'établissement de critères de succès](https://platform.claude.com/docs/fr/test-and-evaluate/define-success) pour plus d'informations.

* * *

## Comment résumer des documents juridiques en utilisant Claude

### Sélectionnez le bon modèle Claude

La précision du modèle est extrêmement importante lors de la résumé de documents juridiques. Claude Sonnet 4.5 est un excellent choix pour les cas d'usage comme celui-ci où une haute précision est requise. Si la taille et la quantité de vos documents sont importantes au point que les coûts commencent à devenir une préoccupation, vous pouvez également essayer d'utiliser un modèle plus petit comme Claude Haiku 4.5.

Pour aider à estimer ces coûts, voici une comparaison du coût pour résumer 1 000 accords de sous-location en utilisant à la fois Sonnet et Haiku :

- **Taille du contenu**
  - Nombre d'accords : 1 000
  - Caractères par accord : 300 000
  - Nombre total de caractères : 300M
- **Jetons estimés**
  - Jetons d'entrée : 86M (en supposant 1 jeton pour 3,5 caractères)
  - Jetons de sortie par résumé : 350
  - Nombre total de jetons de sortie : 350 000
- **Coût estimé de Claude Sonnet 4.5**
  - Coût des jetons d'entrée : 86 MTok \* $3,00/MTok = $258
  - Coût des jetons de sortie : 0,35 MTok \* $15,00/MTok = $5,25
  - Coût total : $258,00 + $5,25 = $263,25
- **Coût estimé de Claude Haiku 3**
  - Coût des jetons d'entrée : 86 MTok \* $0,25/MTok = $21,50
  - Coût des jetons de sortie : 0,35 MTok \* $1,25/MTok = $0,44
  - Coût total : $21,50 + $0,44 = $21,96

Les coûts réels peuvent différer de ces estimations. Ces estimations sont basées sur l'exemple mis en évidence dans la section sur [l'élaboration de prompts](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt).

### Transformez les documents en un format que Claude peut traiter

Avant de commencer à résumer des documents, vous devez préparer vos données. Cela implique d'extraire du texte à partir de fichiers PDF, de nettoyer le texte et de vous assurer qu'il est prêt à être traité par Claude.

Voici une démonstration de ce processus sur un exemple de PDF :

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

Dans cet exemple, nous téléchargeons d'abord un PDF d'un exemple d'accord de sous-location utilisé dans le [guide de résumé](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf). Cet accord a été obtenu à partir d'un accord de sous-location disponible publiquement sur le [site web sec.gov](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Nous utilisons la bibliothèque pypdf pour extraire le contenu du PDF et le convertir en texte. Les données textuelles sont ensuite nettoyées en supprimant les espaces blancs supplémentaires et les numéros de page.

### Construisez un prompt solide

Claude peut s'adapter à différents styles de résumé. Vous pouvez modifier les détails du prompt pour guider Claude à être plus ou moins verbeux, inclure plus ou moins de terminologie technique, ou fournir un résumé de niveau supérieur ou inférieur du contexte en question.

Voici un exemple de la façon de créer un prompt qui garantit que les résumés générés suivent une structure cohérente lors de l'analyse des accords de sous-location :

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

Ce code implémente une fonction `summarize_document` qui utilise Claude pour résumer le contenu d'un accord de sous-location. La fonction accepte une chaîne de texte et une liste de détails à extraire comme entrées. Dans cet exemple, nous appelons la fonction avec les variables `document_text` et `details_to_extract` qui ont été définies dans les extraits de code précédents.

Dans la fonction, un prompt est généré pour Claude, incluant le document à résumer, les détails à extraire et des instructions spécifiques pour résumer le document. Le prompt demande à Claude de répondre avec un résumé de chaque détail à extraire imbriqué dans des en-têtes XML.

Parce que nous avons décidé de produire chaque section du résumé dans des balises, chaque section peut facilement être analysée comme une étape de post-traitement. Cette approche permet des résumés structurés qui peuvent être adaptés à votre cas d'usage, de sorte que chaque résumé suit le même modèle.

### Évaluez votre prompt

L'élaboration de prompts nécessite souvent des tests et une optimisation pour être prête pour la production. Pour déterminer la préparation de votre solution, évaluez la qualité de vos résumés en utilisant un processus systématique combinant des méthodes quantitatives et qualitatives. La création d'une [évaluation empirique solide](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests#building-evals-and-test-cases) basée sur vos critères de succès définis vous permettra d'optimiser vos prompts. Voici quelques métriques que vous pourriez souhaiter inclure dans votre évaluation empirique :

### Scores ROUGE

### Scores BLEU

### Similarité d'intégration contextuelle

### Notation basée sur LLM

### Évaluation humaine

### Déployez votre prompt

Voici quelques considérations supplémentaires à garder à l'esprit lors du déploiement de votre solution en production.

1. **Assurez-vous qu'il n'y a pas de responsabilité :** Comprenez les implications juridiques des erreurs dans les résumés, qui pourraient entraîner une responsabilité juridique pour votre organisation ou vos clients. Fournissez des avertissements ou des avis juridiques clarifiant que les résumés sont générés par l'IA et doivent être examinés par des professionnels du droit.

2. **Gérez les types de documents divers :** Dans ce guide, nous avons discuté de la façon d'extraire du texte à partir de fichiers PDF. Dans le monde réel, les documents peuvent être dans une variété de formats (fichiers PDF, documents Word, fichiers texte, etc.). Assurez-vous que votre pipeline d'extraction de données peut convertir tous les formats de fichiers que vous vous attendez à recevoir.

3. **Parallélisez les appels API à Claude :** Les documents longs avec un grand nombre de jetons peuvent nécessiter jusqu'à une minute pour que Claude génère un résumé. Pour les grandes collections de documents, vous pourriez souhaiter envoyer les appels API à Claude en parallèle afin que les résumés puissent être complétés dans un délai raisonnable. Reportez-vous aux [limites de débit](https://platform.claude.com/docs/fr/api/rate-limits#rate-limits) d'Anthropic pour déterminer le nombre maximal d'appels API qui peuvent être effectués en parallèle.


* * *

## Améliorer les performances

Dans les scénarios complexes, il peut être utile de considérer des stratégies supplémentaires pour améliorer les performances au-delà des [techniques standard d'élaboration de prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/overview). Voici quelques stratégies avancées :

### Effectuez un méta-résumé pour résumer les documents longs

La résumé juridique implique souvent de gérer des documents longs ou plusieurs documents connexes à la fois, de sorte que vous dépassez la fenêtre de contexte de Claude. Vous pouvez utiliser une méthode de chunking connue sous le nom de méta-résumé afin de gérer ce cas d'usage. Cette technique implique de diviser les documents en petits morceaux gérables et de traiter ensuite chaque morceau séparément. Vous pouvez ensuite combiner les résumés de chaque morceau pour créer un méta-résumé du document entier.

Voici un exemple de la façon d'effectuer un méta-résumé :

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

La fonction `summarize_long_document` s'appuie sur la fonction `summarize_document` antérieure en divisant le document en morceaux plus petits et en résumant chaque morceau individuellement.

Le code réalise cela en appliquant la fonction `summarize_document` à chaque morceau de 20 000 caractères dans le document original. Les résumés individuels sont ensuite combinés, et un résumé final est créé à partir de ces résumés de morceaux.

Notez que la fonction `summarize_long_document` n'est pas strictement nécessaire pour notre exemple de PDF, car le document entier s'adapte à la fenêtre de contexte de Claude. Cependant, elle devient essentielle pour les documents dépassant la fenêtre de contexte de Claude ou lors de la résumé de plusieurs documents connexes ensemble. Quoi qu'il en soit, cette technique de méta-résumé capture souvent des détails importants supplémentaires dans le résumé final qui ont été manqués dans l'approche de résumé unique antérieure.

### Utilisez des documents indexés par résumé pour explorer une grande collection de documents

La recherche dans une collection de documents avec un LLM implique généralement la génération augmentée par récupération (RAG). Cependant, dans les scénarios impliquant des documents volumineux ou lorsque la récupération d'informations précises est cruciale, une approche RAG basique peut être insuffisante. Les documents indexés par résumé constituent une approche RAG avancée qui fournit un moyen plus efficace de classer les documents pour la récupération, en utilisant moins de contexte que les méthodes RAG traditionnelles. Dans cette approche, vous utilisez d'abord Claude pour générer un résumé concis pour chaque document de votre corpus, puis vous utilisez Claude pour classer la pertinence de chaque résumé par rapport à la requête posée. Pour plus de détails sur cette approche, y compris un exemple basé sur le code, consultez la section des documents indexés par résumé dans le [guide de résumé](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Affinez Claude pour apprendre de votre ensemble de données

Une autre technique avancée pour améliorer la capacité de Claude à générer des résumés est l'affinage. L'affinage implique d'entraîner Claude sur un ensemble de données personnalisé qui s'aligne spécifiquement avec vos besoins de résumé juridique, en garantissant que Claude s'adapte à votre cas d'usage. Voici un aperçu de la façon d'effectuer l'affinage :

1. **Identifiez les erreurs :** Commencez par collecter les instances où les résumés de Claude sont insuffisants - cela pourrait inclure des détails juridiques critiques manquants, une mauvaise compréhension du contexte ou l'utilisation d'une terminologie juridique inappropriée.

2. **Organisez un ensemble de données :** Une fois que vous avez identifié ces problèmes, compilez un ensemble de données de ces exemples problématiques. Cet ensemble de données doit inclure les documents juridiques originaux aux côtés de vos résumés corrigés, en garantissant que Claude apprend le comportement souhaité.

3. **Effectuez l'affinage :** L'affinage implique de réentraîner le modèle sur votre ensemble de données organisé pour ajuster ses poids et paramètres. Ce réentraînement aide Claude à mieux comprendre les exigences spécifiques de votre domaine juridique, améliorant sa capacité à résumer les documents selon vos normes.

4. **Amélioration itérative :** L'affinage n'est pas un processus unique. À mesure que Claude continue à générer des résumés, vous pouvez itérativement ajouter de nouveaux exemples où il a sous-performé, affinant davantage ses capacités. Au fil du temps, cette boucle de rétroaction continue entraînera un modèle hautement spécialisé pour vos tâches de résumé juridique.


L'affinage n'est actuellement disponible que via Amazon Bedrock. Des détails supplémentaires sont disponibles dans le [blog de lancement AWS](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Guide de résumé\\
\\
Consultez un exemple de code entièrement implémenté de la façon d'utiliser Claude pour résumer les contrats.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Guide des citations\\
\\
Explorez notre recette du guide des citations pour obtenir des conseils sur la façon d'assurer la précision et l'explicabilité des informations.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Avant de construire avec Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#avant-de-construire-avec-claude)
- [Décidez si vous devez utiliser Claude pour le résumé de documents juridiques](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#decidez-si-vous-devez-utiliser-claude-pour-le-resume-de-documents-juridiques)
- [Déterminez les détails que vous souhaitez que le résumé extraie](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#determinez-les-details-que-vous-souhaitez-que-le-resume-extraie)
- [Établissez des critères de succès](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#etablissez-des-criteres-de-succes)
- [Comment résumer des documents juridiques en utilisant Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#comment-resumer-des-documents-juridiques-en-utilisant-claude)
- [Sélectionnez le bon modèle Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#selectionnez-le-bon-modele-claude)
- [Transformez les documents en un format que Claude peut traiter](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#transformez-les-documents-en-un-format-que-claude-peut-traiter)
- [Construisez un prompt solide](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#construisez-un-prompt-solide)
- [Évaluez votre prompt](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#evaluez-votre-prompt)
- [Déployez votre prompt](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#deployez-votre-prompt)
- [Améliorer les performances](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#ameliorer-les-performances)
- [Effectuez un méta-résumé pour résumer les documents longs](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#effectuez-un-meta-resume-pour-resumer-les-documents-longs)
- [Utilisez des documents indexés par résumé pour explorer une grande collection de documents](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#utilisez-des-documents-indexes-par-resume-pour-explorer-une-grande-collection-de-documents)
- [Affinez Claude pour apprendre de votre ensemble de données](https://platform.claude.com/docs/fr/about-claude/use-case-guides/legal-summarization#affinez-claude-pour-apprendre-de-votre-ensemble-de-donnees)

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