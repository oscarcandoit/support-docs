---
url: "https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
title: "Atténuer les jailbreaks et les injections de prompt - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Ftest-and-evaluate%2Fstrengthen-guardrails%2Fmitigate-jailbreaks)

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

Renforcer les garde-fous

Atténuer les jailbreaks

Renforcer les garde-fous

# Atténuer les jailbreaks et les injections de prompt

Copy page

Copy page

Les jailbreaks et les injections de prompt se produisent lorsque les utilisateurs élaborent des prompts pour exploiter les vulnérabilités du modèle, dans le but de générer du contenu inapproprié. Bien que Claude soit intrinsèquement résistant à de telles attaques, voici des étapes supplémentaires pour renforcer vos garde-fous, particulièrement contre les utilisations qui violent nos [Conditions d'utilisation](https://www.anthropic.com/legal/commercial-terms) ou notre [Politique d'utilisation](https://www.anthropic.com/legal/aup).

Claude est beaucoup plus résistant aux jailbreaks que les autres grands LLM, grâce à des méthodes d'entraînement avancées comme l'IA Constitutionnelle.

- **Filtres d'innocuité** : Utilisez un modèle léger comme Claude Haiku 3 pour pré-filtrer les entrées des utilisateurs.





### Exemple : Filtre d'innocuité pour la modération de contenu

- **Validation des entrées** : Filtrez les prompts pour détecter les modèles de jailbreaking. Vous pouvez même utiliser un LLM pour créer un filtre de validation généralisé en fournissant des exemples connus de langage de jailbreaking.

- **Ingénierie de prompt** : Élaborez des prompts qui mettent l'accent sur les limites éthiques et légales.





### Exemple : Prompt système éthique pour un chatbot d'entreprise


Ajustez les réponses et envisagez de limiter ou de bannir les utilisateurs qui s'engagent de façon répétée dans un comportement abusif tentant de contourner les garde-fous de Claude. Par exemple, si un utilisateur particulier déclenche le même type de refus plusieurs fois (par exemple, "sortie bloquée par la politique de filtrage de contenu"), informez l'utilisateur que ses actions violent les politiques d'utilisation pertinentes et prenez des mesures en conséquence.

- **Surveillance continue** : Analysez régulièrement les sorties pour détecter les signes de jailbreaking.
Utilisez cette surveillance pour affiner itérativement vos prompts et stratégies de validation.

## Avancé : Protections en chaîne

Combinez les stratégies pour une protection robuste. Voici un exemple de niveau entreprise avec utilisation d'outils :

### Exemple : Protection multicouche pour un chatbot de conseiller financier

En superposant ces stratégies, vous créez une défense robuste contre les jailbreaks et les injections de prompt, garantissant que vos applications alimentées par Claude maintiennent les plus hauts standards de sécurité et de conformité.

- [Avancé : Protections en chaîne](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks#avance-protections-en-chaine)
- [Prompt système du bot](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks#prompt-systeme-du-bot)
- [Prompt dans l'outil harmlessness\_screen](https://platform.claude.com/docs/fr/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks#prompt-dans-l-outil-harmlessness-screen)

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