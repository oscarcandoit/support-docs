---
url: "https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing"
title: "Routage des tickets - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

Routage des tickets

Cas d'usage

# Routage des tickets

Copy page

Ce guide explique comment exploiter les capacités avancées de compréhension du langage naturel de Claude pour classifier les tickets de support client à grande échelle en fonction de l'intention du client, de l'urgence, de la priorisation, du profil client, et plus encore.

Copy page

## Définir s'il faut utiliser Claude pour le routage des tickets

Voici quelques indicateurs clés qui suggèrent que vous devriez utiliser un LLM comme Claude au lieu d'approches ML traditionnelles pour votre tâche de classification :

### Vous avez des données d'entraînement étiquetées limitées disponibles

### Vos catégories de classification sont susceptibles de changer ou d'évoluer au fil du temps

### Vous devez gérer des entrées de texte complexes et non structurées

### Vos règles de classification sont basées sur la compréhension sémantique

### Vous nécessitez un raisonnement interprétable pour les décisions de classification

### Vous voulez gérer les cas limites et les tickets ambigus plus efficacement

### Vous avez besoin de support multilingue sans maintenir des modèles séparés

* * *

## Construire et déployer votre workflow de support LLM

### Comprendre votre approche de support actuelle

Avant de plonger dans l'automatisation, il est crucial de comprendre votre système de ticketing existant. Commencez par enquêter sur la façon dont votre équipe de support gère actuellement le routage des tickets.

Considérez des questions comme :

- Quels critères sont utilisés pour déterminer quel SLA/offre de service est appliqué ?
- Le routage des tickets est-il utilisé pour déterminer vers quel niveau de support ou spécialiste produit un ticket va ?
- Y a-t-il des règles automatisées ou des workflows déjà en place ? Dans quels cas échouent-ils ?
- Comment les cas limites ou les tickets ambigus sont-ils gérés ?
- Comment l'équipe priorise-t-elle les tickets ?

Plus vous en savez sur la façon dont les humains gèrent certains cas, mieux vous serez capable de travailler avec Claude pour faire la tâche.

### Définir les catégories d'intention utilisateur

Une liste bien définie de catégories d'intention utilisateur est cruciale pour une classification précise des tickets de support avec Claude. La capacité de Claude à router les tickets efficacement dans votre système est directement proportionnelle à la qualité de définition des catégories de votre système.

Voici quelques exemples de catégories d'intention utilisateur et sous-catégories.

### Problème technique

### Gestion de compte

### Information produit

### Guidance utilisateur

### Retour d'information

### Lié aux commandes

### Demande de service

### Préoccupations de sécurité

### Conformité et légal

### Support d'urgence

### Formation et éducation

### Intégration et API

En plus de l'intention, le routage et la priorisation des tickets peuvent également être influencés par d'autres facteurs tels que l'urgence, le type de client, les SLA, ou la langue. Assurez-vous de considérer d'autres critères de routage lors de la construction de votre système de routage automatisé.

### Établir les critères de succès

Travaillez avec votre équipe de support pour [définir des critères de succès clairs](https://platform.claude.com/docs/fr/test-and-evaluate/define-success) avec des benchmarks mesurables, des seuils, et des objectifs.

Voici quelques critères standard et benchmarks lors de l'utilisation de LLMs pour le routage de tickets de support :

### Cohérence de classification

### Vitesse d'adaptation

### Gestion multilingue

### Gestion des cas limites

### Atténuation des biais

### Efficacité du prompt

### Score d'explicabilité

Voici quelques critères de succès communs qui peuvent être utiles indépendamment de l'utilisation d'un LLM :

### Précision de routage

### Temps d'assignation

### Taux de re-routage

### Taux de résolution au premier contact

### Temps de traitement moyen

### Scores de satisfaction client

### Taux d'escalade

### Productivité des agents

### Taux de déviation en libre-service

### Coût par ticket

### Choisir le bon modèle Claude

Le choix du modèle dépend des compromis entre coût, précision, et temps de réponse.

De nombreux clients ont trouvé `claude-3-5-haiku-20241022` un modèle idéal pour le routage de tickets, car c'est le modèle le plus rapide et le plus rentable de la famille Claude 3 tout en délivrant d'excellents résultats. Si votre problème de classification nécessite une expertise approfondie du domaine ou un grand volume de catégories d'intention avec un raisonnement complexe, vous pouvez opter pour le [modèle Sonnet plus large](https://platform.claude.com/docs/fr/about-claude/models).

### Construire un prompt solide

Le routage de tickets est un type de tâche de classification. Claude analyse le contenu d'un ticket de support et le classifie dans des catégories prédéfinies basées sur le type de problème, l'urgence, l'expertise requise, ou d'autres facteurs pertinents.

Écrivons un prompt de classification de tickets. Notre prompt initial devrait contenir le contenu de la demande utilisateur et retourner à la fois le raisonnement et l'intention.

Essayez le [générateur de prompts](https://platform.claude.com/docs/fr/prompt-generator) sur la [Console Claude](https://platform.claude.com/login) pour que Claude écrive un premier brouillon pour vous.

Voici un exemple de prompt de classification de routage de tickets :

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Vous agirez comme un système de classification de tickets de support client. Votre tâche est d'analyser les demandes de support client et de produire la classification d'intention appropriée pour chaque demande, ainsi que votre raisonnement.

        Voici la demande de support client que vous devez classifier :

        <request>{ticket_contents}</request>

        Veuillez analyser soigneusement la demande ci-dessus pour déterminer l'intention principale et les besoins du client. Considérez ce que le client demande et ses préoccupations.

        D'abord, écrivez votre raisonnement et analyse de comment classifier cette demande à l'intérieur des balises <reasoning>.

        Ensuite, produisez l'étiquette de classification appropriée pour la demande à l'intérieur d'une balise <intent>. Les intentions valides sont :
        <intents>
        <intent>Support, Retour d'information, Plainte</intent>
        <intent>Suivi de Commande</intent>
        <intent>Remboursement/Échange</intent>
        </intents>

        Une demande ne peut avoir QU'UNE SEULE intention applicable. N'incluez que l'intention qui est la plus applicable à la demande.

        Comme exemple, considérez la demande suivante :
        <request>Bonjour ! J'ai eu internet fibre haute vitesse installé samedi et mon installateur, Kevin, était absolument fantastique ! Où puis-je envoyer mon avis positif ? Merci pour votre aide !</request>

        Voici un exemple de comment votre sortie devrait être formatée (pour l'exemple de demande ci-dessus) :
        <reasoning>L'utilisateur cherche des informations pour laisser un retour positif.</reasoning>
        <intent>Support, Retour d'information, Plainte</intent>

        Voici quelques exemples supplémentaires :
        <examples>
        <example 2>
        Exemple 2 Entrée :
        <request>Je voulais écrire et vous remercier personnellement pour la compassion que vous avez montrée envers ma famille pendant les funérailles de mon père ce week-end passé. Votre personnel était si attentionné et serviable tout au long de ce processus ; cela nous a vraiment enlevé un poids des épaules. Les brochures de visite étaient magnifiques. Nous n'oublierons jamais la gentillesse que vous nous avez montrée et nous sommes si reconnaissants de la façon dont les procédures se sont déroulées sans accroc. Merci, encore, Amarantha Hill au nom de la Famille Hill.</request>

        Exemple 2 Sortie :
        <reasoning>L'utilisateur laisse un avis positif de son expérience.</reasoning>
        <intent>Support, Retour d'information, Plainte</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Exemple 9 Entrée :
        <request>Votre site web continue d'envoyer des pop-ups publicitaires qui bloquent tout l'écran. Il m'a fallu vingt minutes juste pour finalement trouver le numéro de téléphone pour appeler et me plaindre. Comment puis-je possiblement accéder aux informations de mon compte avec tous ces pop-ups ? Pouvez-vous accéder à mon compte pour moi, puisque votre site web est cassé ? J'ai besoin de savoir quelle est l'adresse en dossier.</request>

        Exemple 9 Sortie :
        <reasoning>L'utilisateur demande de l'aide pour accéder aux informations de son compte web.</reasoning>
        <intent>Support, Retour d'information, Plainte</intent>
        </example 9>

        Rappelez-vous de toujours inclure votre raisonnement de classification avant votre sortie d'intention actuelle. Le raisonnement devrait être enfermé dans des balises <reasoning> et l'intention dans des balises <intent>. Retournez seulement le raisonnement et l'intention.
        """
```

Décomposons les composants clés de ce prompt :

- Nous utilisons les f-strings Python pour créer le template de prompt, permettant au `ticket_contents` d'être inséré dans les balises `<request>`.
- Nous donnons à Claude un rôle clairement défini comme système de classification qui analyse soigneusement le contenu du ticket pour déterminer l'intention principale et les besoins du client.
- Nous instruisons Claude sur le formatage de sortie approprié, dans ce cas pour fournir son raisonnement et analyse à l'intérieur des balises `<reasoning>`, suivi par l'étiquette de classification appropriée à l'intérieur des balises `<intent>`.
- Nous spécifions les catégories d'intention valides : "Support, Retour d'information, Plainte", "Suivi de Commande", et "Remboursement/Échange".
- Nous incluons quelques exemples (a.k.a. prompting few-shot) pour illustrer comment la sortie devrait être formatée, ce qui améliore la précision et la cohérence.

La raison pour laq uelle nous voulons que Claude divise sa réponse en diverses sections de balises XML est pour que nous puissions utiliser des expressions régulières pour extraire séparément le raisonnement et l'intention de la sortie. Cela nous permet de créer des étapes suivantes ciblées dans le workflow de routage de tickets, comme utiliser seulement l'intention pour décider vers quelle personne router le ticket.

### Déployer votre prompt

Il est difficile de savoir à quel point votre prompt fonctionne sans le déployer dans un environnement de production de test et [exécuter des évaluations](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests).

Construisons la structure de déploiement. Commencez par définir la signature de méthode pour envelopper notre appel à Claude. Nous prendrons la méthode que nous avons déjà commencé à écrire, qui a `ticket_contents` comme entrée, et maintenant retourner un tuple de `reasoning` et `intent` comme sortie. Si vous avez une automatisation existante utilisant le ML traditionnel, vous voudrez suivre cette signature de méthode à la place.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""Vous agirez comme un système de classification de tickets de support client.
        ...
        ... Le raisonnement devrait être enfermé dans des balises <reasoning> et l'intention dans des balises <intent>. Retournez seulement le raisonnement et l'intention.
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

Ce code :

- Importe la bibliothèque Anthropic et crée une instance client utilisant votre clé API.
- Définit une fonction `classify_support_request` qui prend une chaîne `ticket_contents`.
- Envoie le `ticket_contents` à Claude pour classification utilisant le `classification_prompt`
- Retourne le `reasoning` et l'`intent` du modèle extraits de la réponse.

Puisque nous devons attendre que tout le texte de raisonnement et d'intention soit généré avant l'analyse, nous définissons `stream=False` (la valeur par défaut).

* * *

## Évaluer votre prompt

Le prompting nécessite souvent des tests et une optimisation pour être prêt pour la production. Pour déterminer la préparation de votre solution, évaluez la performance basée sur les critères de succès et seuils que vous avez établis plus tôt.

Pour exécuter votre évaluation, vous aurez besoin de cas de test pour l'exécuter. Le reste de ce guide assume que vous avez déjà [développé vos cas de test](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests).

### Construire une fonction d'évaluation

Notre exemple d'évaluation pour ce guide mesure la performance de Claude le long de trois métriques clés :

- Précision
- Coût par classification

Vous pourriez avoir besoin d'évaluer Claude sur d'autres axes selon les facteurs qui sont importants pour vous.

Pour évaluer ceci, nous devons d'abord modifier le script que nous avons écrit et ajouter une fonction pour comparer l'intention prédite avec l'intention actuelle et calculer le pourcentage de prédictions correctes. Nous devons aussi ajouter la fonctionnalité de calcul de coût et de mesure de temps.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""Vous agirez comme un système de classification de tickets de support client.
        ...
        ...Le raisonnement devrait être enfermé dans des balises <reasoning> et l'intention dans des balises <intent>. Retournez seulement le raisonnement et l'intention.
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

Décomposons les modifications que nous avons faites :

- Nous avons ajouté l'`actual_intent` de nos cas de test dans la méthode `classify_support_request` et mis en place une comparaison pour évaluer si la classification d'intention de Claude correspond à notre classification d'intention dorée.
- Nous avons extrait les statistiques d'utilisation pour l'appel API pour calculer le coût basé sur les tokens d'entrée et de sortie utilisés

### Exécuter votre évaluation

Une évaluation appropriée nécessite des seuils et benchmarks clairs pour déterminer ce qui est un bon résultat. Le script ci-dessus nous donnera les valeurs d'exécution pour la précision, le temps de réponse, et le coût par classification, mais nous aurions encore besoin de seuils clairement établis. Par exemple :

- **Précision :** 95% (sur 100 tests)
- **Coût par classification :** 50% de réduction en moyenne (sur 100 tests) par rapport à la méthode de routage actuelle

Avoir ces seuils vous permet de dire rapidement et facilement à grande échelle, et avec un empirisme impartial, quelle méthode est la meilleure pour vous et quels changements pourraient être nécessaires pour mieux s'adapter à vos exigences.

* * *

## Améliorer la performance

Dans des scénarios complexes, il peut être utile de considérer des stratégies supplémentaires pour améliorer la performance au-delà des [techniques d'ingénierie de prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/overview) standard et des [stratégies d'implémentation de garde-fous](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Voici quelques scénarios communs :

### Utiliser une hiérarchie taxonomique pour les cas avec 20+ catégories d'intention

À mesure que le nombre de classes grandit, le nombre d'exemples requis s'étend aussi, rendant potentiellement le prompt difficile à manier. Comme alternative, vous pouvez considérer implémenter un système de classification hiérarchique utilisant un mélange de classificateurs.

1. Organisez vos intentions dans une structure d'arbre taxonomique.
2. Créez une série de classificateurs à chaque niveau de l'arbre, permettant une approche de routage en cascade.

Par exemple, vous pourriez avoir un classificateur de niveau supérieur qui catégorise largement les tickets en "Problèmes Techniques," "Questions de Facturation," et "Demandes Générales." Chacune de ces catégories peut alors avoir son propre sous-classificateur pour affiner davantage la classification.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Avantages - plus grande nuance et précision :** Vous pouvez créer différents prompts pour chaque chemin parent, permettant une classification plus ciblée et spécifique au contexte. Cela peut mener à une précision améliorée et une gestion plus nuancée des demandes client.

- **Inconvénients - latence augmentée :** Soyez avisé que plusieurs classificateurs peuvent mener à une latence augmentée, et nous recommandons d'implémenter cette approche avec notre modèle le plus rapide, Haiku.


### Utiliser des bases de données vectorielles et la recherche de similarité pour gérer des tickets hautement variables

Malgré que fournir des exemples soit la façon la plus efficace d'améliorer la performance, si les demandes de support sont hautement variables, il peut être difficile d'inclure assez d'exemples dans un seul prompt.

Dans ce scénario, vous pourriez employer une base de données vectorielle pour faire des recherches de similarité à partir d'un jeu de données d'exemples et récupérer les exemples les plus pertinents pour une requête donnée.

Cette approche, détaillée dans notre [recette de classification](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb), a été montrée pour améliorer la performance de 71% de précision à 93% de précision.

### Tenir compte spécifiquement des cas limites attendus

Voici quelques scénarios où Claude peut mal classifier les tickets (il peut y en avoir d'autres qui sont uniques à votre situation). Dans ces scénarios, considérez fournir des instructions explicites ou des exemples dans le prompt de comment Claude devrait gérer le cas limite :

### Les clients font des demandes implicites

### Claude priorise l'émotion sur l'intention

### Plusieurs problèmes causent une confusion de priorisation des problèmes

* * *

## Intégrer Claude dans votre workflow de support plus large

Une intégration appropriée nécessite que vous preniez quelques décisions concernant comment votre script de routage de tickets basé sur Claude s'intègre dans l'architecture de votre système de routage de tickets plus large. Il y a deux façons de faire ceci :

- **Basé sur push :**Le système de tickets de support que vous utilisez (par exemple Zendesk) déclenche votre code en envoyant un événement webhook à votre service de routage, qui classifie ensuite l'intention et la route.
  - Cette approche est plus web-scalable, mais nécessite que vous exposiez un endpoint public.
- **Basé sur pull :**Votre code tire pour les derniers tickets basé sur un horaire donné et les route au moment du pull.
  - Cette approche est plus facile à implémenter mais pourrait faire des appels inutiles au système de tickets de support quand la fréquence de pull est trop élevée ou pourrait être trop lente quand la fréquence de pull est trop basse.

Pour l'une ou l'autre de ces approches, vous devrez envelopper votre script dans un service. Le choix d'approche dépend de quelles APIs votre système de ticketing de support fournit.

* * *

[Livre de recettes de classification\\
\\
Visitez notre livre de recettes de classification pour plus d'exemples de code et des conseils d'évaluation détaillés.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Console Claude\\
\\
Commencez à construire et évaluer votre workflow sur la Console Claude.](https://platform.claude.com/dashboard)

- [Définir s'il faut utiliser Claude pour le routage des tickets](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#definir-s-il-faut-utiliser-claude-pour-le-routage-des-tickets)
- [Construire et déployer votre workflow de support LLM](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#construire-et-deployer-votre-workflow-de-support-llm)
- [Comprendre votre approche de support actuelle](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#comprendre-votre-approche-de-support-actuelle)
- [Définir les catégories d'intention utilisateur](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#definir-les-categories-d-intention-utilisateur)
- [Établir les critères de succès](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#etablir-les-criteres-de-succes)
- [Choisir le bon modèle Claude](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#choisir-le-bon-modele-claude)
- [Construire un prompt solide](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#construire-un-prompt-solide)
- [Déployer votre prompt](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#deployer-votre-prompt)
- [Évaluer votre prompt](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#evaluer-votre-prompt)
- [Construire une fonction d'évaluation](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#construire-une-fonction-d-evaluation)
- [Exécuter votre évaluation](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#executer-votre-evaluation)
- [Améliorer la performance](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#ameliorer-la-performance)
- [Utiliser une hiérarchie taxonomique pour les cas avec 20+ catégories d'intention](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#utiliser-une-hierarchie-taxonomique-pour-les-cas-avec-20-categories-d-intention)
- [Utiliser des bases de données vectorielles et la recherche de similarité pour gérer des tickets hautement variables](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#utiliser-des-bases-de-donnees-vectorielles-et-la-recherche-de-similarite-pour-gerer-des-tickets-hautement-variables)
- [Tenir compte spécifiquement des cas limites attendus](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#tenir-compte-specifiquement-des-cas-limites-attendus)
- [Intégrer Claude dans votre workflow de support plus large](https://platform.claude.com/docs/fr/about-claude/use-case-guides/ticket-routing#integrer-claude-dans-votre-workflow-de-support-plus-large)

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