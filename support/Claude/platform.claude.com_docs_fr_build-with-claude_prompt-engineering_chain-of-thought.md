---
url: "https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought"
title: "Laisser Claude réfléchir (incitation à la chaîne de pensée) pour améliorer les performances - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Fbuild-with-claude%2Fprompt-engineering%2Fchain-of-thought)

Search...

⌘K

Premiers pas

[Introduction à Claude](https://platform.claude.com/docs/fr/intro) [Démarrage rapide](https://platform.claude.com/docs/fr/get-started)

Modèles et tarification

[Aperçu des modèles](https://platform.claude.com/docs/fr/about-claude/models/overview) [Choisir un modèle](https://platform.claude.com/docs/fr/about-claude/models/choosing-a-model) [Nouveautés de Claude 4.5](https://platform.claude.com/docs/fr/about-claude/models/whats-new-claude-4-5) [Migration vers Claude 4.5](https://platform.claude.com/docs/fr/about-claude/models/migrating-to-claude-4) [Dépréciation des modèles](https://platform.claude.com/docs/fr/about-claude/model-deprecations) [Tarification](https://platform.claude.com/docs/fr/about-claude/pricing)

Créer avec Claude

[Aperçu des fonctionnalités](https://platform.claude.com/docs/fr/build-with-claude/overview) [Utiliser l'API Messages](https://platform.claude.com/docs/fr/build-with-claude/working-with-messages) [Fenêtres de contexte](https://platform.claude.com/docs/fr/build-with-claude/context-windows) [Bonnes pratiques de prompting](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/claude-4-best-practices)

Capacités

[Mise en cache des prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-caching) [Édition de contexte](https://platform.claude.com/docs/fr/build-with-claude/context-editing) [Réflexion étendue](https://platform.claude.com/docs/fr/build-with-claude/extended-thinking) [Effort](https://platform.claude.com/docs/fr/build-with-claude/effort) [Streaming de messages](https://platform.claude.com/docs/fr/build-with-claude/streaming) [Traitement par lots](https://platform.claude.com/docs/fr/build-with-claude/batch-processing) [Citations](https://platform.claude.com/docs/fr/build-with-claude/citations) [Support multilingue](https://platform.claude.com/docs/fr/build-with-claude/multilingual-support) [Comptage de tokens](https://platform.claude.com/docs/fr/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/fr/build-with-claude/embeddings) [Vision](https://platform.claude.com/docs/fr/build-with-claude/vision) [Support PDF](https://platform.claude.com/docs/fr/build-with-claude/pdf-support) [API Files](https://platform.claude.com/docs/fr/build-with-claude/files) [Résultats de recherche](https://platform.claude.com/docs/fr/build-with-claude/search-results) [Sorties structurées](https://platform.claude.com/docs/fr/build-with-claude/structured-outputs)

Outils

[Aperçu](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/overview) [Comment implémenter l'utilisation d'outils](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/implement-tool-use) [Streaming d'outils granulaire](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/fine-grained-tool-streaming) [Outil Bash](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/bash-tool) [Outil d'exécution de code](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/code-execution-tool) [Appel d'outils programmatique](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/programmatic-tool-calling) [Outil Computer use](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/computer-use-tool) [Outil Éditeur de texte](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/text-editor-tool) [Outil Web fetch](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/web-fetch-tool) [Outil Web search](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/web-search-tool) [Outil Memory](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/memory-tool) [Outil Tool search](https://platform.claude.com/docs/fr/agents-and-tools/tool-use/tool-search-tool)

Agent Skills

[Aperçu](https://platform.claude.com/docs/fr/agents-and-tools/agent-skills/overview) [Démarrage rapide](https://platform.claude.com/docs/fr/agents-and-tools/agent-skills/quickstart) [Bonnes pratiques](https://platform.claude.com/docs/fr/agents-and-tools/agent-skills/best-practices) [Utiliser Skills avec l'API](https://platform.claude.com/docs/fr/build-with-claude/skills-guide)

Agent SDK

[Aperçu](https://platform.claude.com/docs/fr/agent-sdk/overview) [Démarrage rapide](https://platform.claude.com/docs/fr/agent-sdk/quickstart) [SDK TypeScript](https://platform.claude.com/docs/fr/agent-sdk/typescript) [TypeScript V2 (aperçu)](https://platform.claude.com/docs/fr/agent-sdk/typescript-v2-preview) [SDK Python](https://platform.claude.com/docs/fr/agent-sdk/python) [Guide de migration](https://platform.claude.com/docs/fr/agent-sdk/migration-guide)

Guides

MCP dans l'API

[Connecteur MCP](https://platform.claude.com/docs/fr/agents-and-tools/mcp-connector) [Serveurs MCP distants](https://platform.claude.com/docs/fr/agents-and-tools/remote-mcp-servers)

Claude sur des plateformes tierces

[Amazon Bedrock](https://platform.claude.com/docs/fr/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/fr/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/fr/build-with-claude/claude-on-vertex-ai)

Ingénierie des prompts

[Aperçu](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/overview) [Générateur de prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/prompt-generator) [Utiliser des modèles de prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Améliorateur de prompts](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/prompt-improver) [Être clair et direct](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/be-clear-and-direct) [Utiliser des exemples (prompting multishot)](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/multishot-prompting) [Laisser Claude réfléchir (CoT)](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought) [Utiliser des balises XML](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/use-xml-tags) [Donner un rôle à Claude (prompts système)](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/system-prompts) [Pré-remplir la réponse de Claude](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/prefill-claudes-response) [Chaîner des prompts complexes](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-prompts) [Conseils pour le contexte long](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/long-context-tips) [Conseils pour la réflexion étendue](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/extended-thinking-tips)

Tester et évaluer

[Définir les critères de succès](https://platform.claude.com/docs/fr/test-and-evaluate/define-success) [Développer des cas de test](https://platform.claude.com/docs/fr/test-and-evaluate/develop-tests) [Utiliser l'outil d'évaluation](https://platform.claude.com/docs/fr/test-and-evaluate/eval-tool) [Réduire la latence](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-latency)

Renforcer les garde-fous

[Réduire les hallucinations](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Augmenter la cohérence des résultats](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/increase-consistency) [Atténuer les jailbreaks](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Refus en streaming](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Réduire les fuites de prompts](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Garder Claude dans le rôle](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Administration et surveillance

[Aperçu de l'API Admin](https://platform.claude.com/docs/fr/build-with-claude/administration-api) [API d'utilisation et de coûts](https://platform.claude.com/docs/fr/build-with-claude/usage-cost-api) [API Claude Code Analytics](https://platform.claude.com/docs/fr/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Ingénierie des prompts

Laisser Claude réfléchir (CoT)

Ingénierie des prompts

# Laisser Claude réfléchir (incitation à la chaîne de pensée) pour améliorer les performances

Copy page

Découvrez comment utiliser l'incitation à la chaîne de pensée pour améliorer les performances de Claude sur des tâches complexes.

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

Face à des tâches complexes comme la recherche, l'analyse ou la résolution de problèmes, donner à Claude l'espace pour réfléchir peut améliorer considérablement ses performances. Cette technique, connue sous le nom d'incitation à la chaîne de pensée (CoT), encourage Claude à décomposer les problèmes étape par étape, ce qui conduit à des résultats plus précis et nuancés.

## Avant de mettre en œuvre CoT

### Pourquoi laisser Claude réfléchir ?

- **Précision :** Parcourir les problèmes étape par étape réduit les erreurs, en particulier dans les mathématiques, la logique, l'analyse ou les tâches généralement complexes.
- **Cohérence :** La réflexion structurée conduit à des réponses plus cohésives et bien organisées.
- **Débogage :** Voir le processus de réflexion de Claude vous aide à identifier les endroits où les invites peuvent être peu claires.

### Pourquoi ne pas laisser Claude réfléchir ?

- L'augmentation de la longueur de la sortie peut affecter la latence.
- Toutes les tâches ne nécessitent pas une réflexion approfondie. Utilisez CoT judicieusement pour assurer le bon équilibre entre les performances et la latence.

Utilisez CoT pour les tâches qu'un humain devrait réfléchir, comme les mathématiques complexes, l'analyse multi-étapes, la rédaction de documents complexes ou les décisions avec de nombreux facteurs.

* * *

## Comment inciter à la réflexion

Les techniques de chaîne de pensée ci-dessous sont **ordonnées de la moins à la plus complexe**. Les méthodes moins complexes occupent moins d'espace dans la fenêtre de contexte, mais sont généralement aussi moins puissantes.

**Conseil CoT** : Assurez-vous toujours que Claude produit sa réflexion. Sans produire son processus de réflexion, aucune réflexion ne se produit !

- **Invite de base**: Incluez « Réfléchissez étape par étape » dans votre invite.

  - Manque de conseils sur _comment_ réfléchir (ce qui n'est pas idéal si une tâche est très spécifique à votre application, cas d'usage ou organisation)

### Exemple : Rédaction d'e-mails aux donateurs (CoT de base)

- **Invite guidée**: Décrivez les étapes spécifiques que Claude doit suivre dans son processus de réflexion.

  - Manque de structuration pour faciliter l'extraction et la séparation de la réponse de la réflexion.

### Exemple : Rédaction d'e-mails aux donateurs (CoT guidée)

- **Invite structurée** : Utilisez des balises XML comme `<thinking>` et `<answer>` pour séparer le raisonnement de la réponse finale.




### Exemple : Rédaction d'e-mails aux donateurs (CoT guidée structurée)


### Exemples

### Exemple : Analyse financière sans réflexion

### Exemple : Analyse financière avec réflexion

* * *

[Bibliothèque d'invites\\
\\
Inspirez-vous d'une sélection organisée d'invites pour diverses tâches et cas d'usage.](https://platform.claude.com/docs/fr/resources/prompt-library/library) [Tutoriel d'incitation GitHub\\
\\
Un tutoriel riche en exemples qui couvre les concepts d'ingénierie d'invites trouvés dans notre documentation.](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Tutoriel d'incitation Google Sheets\\
\\
Une version plus légère de notre tutoriel d'ingénierie d'invites via une feuille de calcul interactive.](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [Avant de mettre en œuvre CoT](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought#avant-de-mettre-en-uvre-co-t)
- [Pourquoi laisser Claude réfléchir ?](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought#pourquoi-laisser-claude-reflechir)
- [Pourquoi ne pas laisser Claude réfléchir ?](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought#pourquoi-ne-pas-laisser-claude-reflechir)
- [Comment inciter à la réflexion](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought#comment-inciter-a-la-reflexion)
- [Exemples](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/chain-of-thought#exemples)

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