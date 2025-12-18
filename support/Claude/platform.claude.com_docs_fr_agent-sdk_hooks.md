---
url: "https://platform.claude.com/docs/fr/agent-sdk/hooks"
title: "Intercepter et contrôler le comportement de l'agent avec des hooks - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/fr/home)

- [Guide du développeur](https://platform.claude.com/docs/fr/intro)
- [Référence API](https://platform.claude.com/docs/fr/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ressources](https://platform.claude.com/docs/fr/resources/overview)
- [Notes de version](https://platform.claude.com/docs/fr/release-notes/overview)

Français

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Ffr%2Fagent-sdk%2Fhooks)

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

[Streaming Input](https://platform.claude.com/docs/fr/agent-sdk/streaming-vs-single-mode) [Gestion des permissions](https://platform.claude.com/docs/fr/agent-sdk/permissions) [Contrôler l'exécution avec des hooks](https://platform.claude.com/docs/fr/agent-sdk/hooks) [Gestion des sessions](https://platform.claude.com/docs/fr/agent-sdk/sessions) [Sorties structurées dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/structured-outputs) [Héberger l'Agent SDK](https://platform.claude.com/docs/fr/agent-sdk/hosting) [Déployer les agents IA de manière sécurisée](https://platform.claude.com/docs/fr/agent-sdk/secure-deployment) [Modifier les prompts système](https://platform.claude.com/docs/fr/agent-sdk/modifying-system-prompts) [MCP dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/mcp) [Outils personnalisés](https://platform.claude.com/docs/fr/agent-sdk/custom-tools) [Sous-agents dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/subagents) [Commandes slash dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/slash-commands) [Agent Skills dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/skills) [Suivi des coûts et de l'utilisation](https://platform.claude.com/docs/fr/agent-sdk/cost-tracking) [Listes de tâches](https://platform.claude.com/docs/fr/agent-sdk/todo-tracking) [Plugins dans le SDK](https://platform.claude.com/docs/fr/agent-sdk/plugins)

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

Guides

Contrôler l'exécution avec des hooks

Guides

# Intercepter et contrôler le comportement de l'agent avec des hooks

Copy page

Intercepter et personnaliser le comportement de l'agent aux points d'exécution clés avec des hooks

Copy page

Les hooks vous permettent d'intercepter l'exécution de l'agent aux points clés pour ajouter une validation, une journalisation, des contrôles de sécurité ou une logique personnalisée. Avec les hooks, vous pouvez :

- **Bloquer les opérations dangereuses** avant leur exécution, comme les commandes shell destructrices ou l'accès non autorisé aux fichiers
- **Journaliser et auditer** chaque appel d'outil pour la conformité, le débogage ou l'analyse
- **Transformer les entrées et les sorties** pour nettoyer les données, injecter des identifiants ou rediriger les chemins de fichiers
- **Exiger une approbation humaine** pour les actions sensibles comme les écritures de base de données ou les appels API
- **Suivre le cycle de vie de la session** pour gérer l'état, nettoyer les ressources ou envoyer des notifications

Un hook comporte deux parties :

1. **La fonction de rappel** : la logique qui s'exécute lorsque le hook se déclenche
2. **La configuration du hook** : indique au SDK quel événement accrocher (comme `PreToolUse`) et quels outils faire correspondre

L'exemple suivant empêche l'agent de modifier les fichiers `.env`. Tout d'abord, définissez un rappel qui vérifie le chemin du fichier, puis transmettez-le à `query()` pour l'exécuter avant tout appel d'outil Write ou Edit :

Python

```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, HookMatcher

# Définir un rappel de hook qui reçoit les détails de l'appel d'outil
async def protect_env_files(input_data, tool_use_id, context):
    # Extraire le chemin du fichier des arguments d'entrée de l'outil
    file_path = input_data['tool_input'].get('file_path', '')
    file_name = file_path.split('/')[-1]

    # Bloquer l'opération si elle cible un fichier .env
    if file_name == '.env':
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Cannot modify .env files'
            }
        }

    # Retourner un objet vide pour autoriser l'opération
    return {}

async def main():
    async for message in query(
        prompt="Update the database configuration",
        options=ClaudeAgentOptions(
            hooks={
                # Enregistrer le hook pour les événements PreToolUse
                # Le matcher filtre uniquement les appels d'outils Write et Edit
                'PreToolUse': [HookMatcher(matcher='Write|Edit', hooks=[protect_env_files])]
            }
        )
    ):
        print(message)

asyncio.run(main())
```

Ceci est un hook `PreToolUse`. Il s'exécute avant l'exécution de l'outil et peut bloquer ou autoriser les opérations en fonction de votre logique. Le reste de ce guide couvre tous les hooks disponibles, leurs options de configuration et les modèles pour les cas d'usage courants.

## Hooks disponibles

Le SDK fournit des hooks pour différentes étapes de l'exécution de l'agent. Certains hooks sont disponibles dans les deux SDK, tandis que d'autres sont spécifiques à TypeScript car le SDK Python ne les supporte pas.

| Événement Hook | SDK Python | SDK TypeScript | Ce qui le déclenche | Cas d'usage exemple |
| --- | --- | --- | --- | --- |
| `PreToolUse` | Oui | Oui | Demande d'appel d'outil (peut bloquer ou modifier) | Bloquer les commandes shell dangereuses |
| `PostToolUse` | Oui | Oui | Résultat de l'exécution de l'outil | Journaliser tous les changements de fichiers dans la piste d'audit |
| `PostToolUseFailure` | Non | Oui | Échec de l'exécution de l'outil | Gérer ou journaliser les erreurs d'outil |
| `UserPromptSubmit` | Oui | Oui | Soumission de l'invite utilisateur | Injecter du contexte supplémentaire dans les invites |
| `Stop` | Oui | Oui | Arrêt de l'exécution de l'agent | Enregistrer l'état de la session avant la sortie |
| `SubagentStart` | Non | Oui | Initialisation du sous-agent | Suivre le lancement des tâches parallèles |
| `SubagentStop` | Oui | Oui | Achèvement du sous-agent | Agréger les résultats des tâches parallèles |
| `PreCompact` | Oui | Oui | Demande de compaction de conversation | Archiver la transcription complète avant le résumé |
| `PermissionRequest` | Non | Oui | La boîte de dialogue de permission s'afficherait | Gestion des permissions personnalisée |
| `SessionStart` | Non | Oui | Initialisation de la session | Initialiser la journalisation et la télémétrie |
| `SessionEnd` | Non | Oui | Terminaison de la session | Nettoyer les ressources temporaires |
| `Notification` | Non | Oui | Messages d'état de l'agent | Envoyer les mises à jour d'état de l'agent à Slack ou PagerDuty |

## Cas d'usage courants

Les hooks sont suffisamment flexibles pour gérer de nombreux scénarios différents. Voici certains des modèles les plus courants organisés par catégorie.

Sécurité

Sécurité

Journalisation

Journalisation

Interception d'outils

Interception d'outils

Autorisation

Autorisation

- Bloquer les commandes dangereuses (comme `rm -rf /`, SQL destructif)
- Valider les chemins de fichiers avant les opérations d'écriture
- Appliquer les listes blanches/noires pour l'utilisation des outils

## Configurer les hooks

Pour configurer un hook pour votre agent, transmettez le hook dans le paramètre `options.hooks` lors de l'appel de `query()` :

Python

```
async for message in query(
    prompt="Your prompt",
    options=ClaudeAgentOptions(
        hooks={
            'PreToolUse': [HookMatcher(matcher='Bash', hooks=[my_callback])]
        }
    )
):
    print(message)
```

L'option `hooks` est un dictionnaire (Python) ou un objet (TypeScript) où :

- **Les clés** sont des [noms d'événements de hook](https://platform.claude.com/docs/fr/agent-sdk/hooks#available-hooks) (par exemple, `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **Les valeurs** sont des tableaux de [matchers](https://platform.claude.com/docs/fr/agent-sdk/hooks#matchers), chacun contenant un motif de filtre optionnel et vos [fonctions de rappel](https://platform.claude.com/docs/fr/agent-sdk/hooks#callback-function-inputs)

Vos fonctions de rappel de hook reçoivent des [données d'entrée](https://platform.claude.com/docs/fr/agent-sdk/hooks#input-data) sur l'événement et retournent une [réponse](https://platform.claude.com/docs/fr/agent-sdk/hooks#callback-outputs) pour que l'agent sache s'il faut autoriser, bloquer ou modifier l'opération.

### Matchers

Utilisez les matchers pour filtrer les outils qui déclenchent vos rappels :

| Option | Type | Par défaut | Description |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | Motif regex pour faire correspondre les noms d'outils. Les outils intégrés incluent `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebFetch`, `Task` et autres. Les outils MCP utilisent le motif `mcp__<server>__<action>`. |
| `hooks` | `HookCallback[]` | - | Requis. Tableau de fonctions de rappel à exécuter lorsque le motif correspond |
| `timeout` | `number` | `60` | Délai d'expiration en secondes ; augmentez pour les hooks qui effectuent des appels API externes |

Utilisez le motif `matcher` pour cibler des outils spécifiques chaque fois que possible. Un matcher avec `'Bash'` s'exécute uniquement pour les commandes Bash, tandis que l'omission du motif exécute vos rappels pour chaque appel d'outil. Notez que les matchers ne filtrent que par **nom d'outil**, pas par chemins de fichiers ou autres arguments—pour filtrer par chemin de fichier, vérifiez `tool_input.file_path` à l'intérieur de votre rappel.

Les matchers s'appliquent uniquement aux hooks basés sur les outils (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`). Pour les hooks de cycle de vie comme `Stop`, `SessionStart` et `Notification`, les matchers sont ignorés et le hook se déclenche pour tous les événements de ce type.

**Découvrir les noms d'outils :** Vérifiez le tableau `tools` dans le message système initial au démarrage de votre session, ou ajoutez un hook sans matcher pour journaliser tous les appels d'outils.

**Nommage des outils MCP :** Les outils MCP commencent toujours par `mcp__` suivi du nom du serveur et de l'action : `mcp__<server>__<action>`. Par exemple, si vous configurez un serveur nommé `playwright`, ses outils seront nommés `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click`, etc. Le nom du serveur provient de la clé que vous utilisez dans la configuration `mcpServers`.

Cet exemple utilise un matcher pour exécuter un hook uniquement pour les outils de modification de fichiers lorsque l'événement `PreToolUse` se déclenche :

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(matcher='Write|Edit', hooks=[validate_file_path])\
        ]
    }
)
```

### Entrées de la fonction de rappel

Chaque rappel de hook reçoit trois arguments :

1. **Données d'entrée** (`dict` / `HookInput`) : Détails de l'événement. Voir [données d'entrée](https://platform.claude.com/docs/fr/agent-sdk/hooks#input-data) pour les champs
2. **ID d'utilisation d'outil** (`str | None` / `string | null`) : Corréler les événements `PreToolUse` et `PostToolUse`
3. **Contexte** (`HookContext`) : En TypeScript, contient une propriété `signal` (`AbortSignal`) pour l'annulation. Transmettez-la aux opérations asynchrones comme `fetch()` pour qu'elles s'annulent automatiquement si le hook expire. En Python, cet argument est réservé pour une utilisation future.

### Données d'entrée

Le premier argument de votre rappel de hook contient des informations sur l'événement. Les noms de champs sont identiques entre les SDK (tous deux utilisent snake\_case).

**Champs communs** présents dans tous les types de hooks :

| Champ | Type | Description |
| --- | --- | --- |
| `hook_event_name` | `string` | Le type de hook (`PreToolUse`, `PostToolUse`, etc.) |
| `session_id` | `string` | Identifiant de session actuel |
| `transcript_path` | `string` | Chemin vers la transcription de conversation |
| `cwd` | `string` | Répertoire de travail actuel |

**Champs spécifiques au hook** varient selon le type de hook. Les éléments marqués TS ne sont disponibles que dans le SDK TypeScript :

| Champ | Type | Description | Hooks |
| --- | --- | --- | --- |
| `tool_name` | `string` | Nom de l'outil appelé | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_input` | `object` | Arguments passés à l'outil | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_response` | `any` | Résultat retourné par l'exécution de l'outil | PostToolUse |
| `error` | `string` | Message d'erreur de l'échec de l'exécution de l'outil | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | Si l'échec a été causé par une interruption | PostToolUseFailureTS |
| `prompt` | `string` | Le texte de l'invite utilisateur | UserPromptSubmit |
| `stop_hook_active` | `boolean` | Si un hook d'arrêt est actuellement en cours de traitement | Stop, SubagentStop |
| `agent_id` | `string` | Identifiant unique du sous-agent | SubagentStartTS, SubagentStopTS |
| `agent_type` | `string` | Type/rôle du sous-agent | SubagentStartTS |
| `agent_transcript_path` | `string` | Chemin vers la transcription de conversation du sous-agent | SubagentStopTS |
| `trigger` | `string` | Ce qui a déclenché la compaction : `manual` ou `auto` | PreCompact |
| `custom_instructions` | `string` | Instructions personnalisées fournies pour la compaction | PreCompact |
| `permission_suggestions` | `array` | Mises à jour de permissions suggérées pour l'outil | PermissionRequestTS |
| `source` | `string` | Comment la session a commencé : `startup`, `resume`, `clear` ou `compact` | SessionStartTS |
| `reason` | `string` | Pourquoi la session s'est terminée : `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled` ou `other` | SessionEndTS |
| `message` | `string` | Message d'état de l'agent | NotificationTS |
| `notification_type` | `string` | Type de notification : `permission_prompt`, `idle_prompt`, `auth_success` ou `elicitation_dialog` | NotificationTS |
| `title` | `string` | Titre optionnel défini par l'agent | NotificationTS |

Le code ci-dessous définit un rappel de hook qui utilise `tool_name` et `tool_input` pour journaliser les détails de chaque appel d'outil :

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### Sorties du rappel

Votre fonction de rappel retourne un objet qui indique au SDK comment procéder. Retournez un objet vide `{}` pour autoriser l'opération sans modifications. Pour bloquer, modifier ou ajouter du contexte à l'opération, retournez un objet avec un champ `hookSpecificOutput` contenant votre décision.

**Champs de niveau supérieur** (en dehors de `hookSpecificOutput`) :

| Champ | Type | Description |
| --- | --- | --- |
| `continue` | `boolean` | Si l'agent doit continuer après ce hook (par défaut : `true`) |
| `stopReason` | `string` | Message affiché lorsque `continue` est `false` |
| `suppressOutput` | `boolean` | Masquer stdout de la transcription (par défaut : `false`) |
| `systemMessage` | `string` | Message injecté dans la conversation pour que Claude le voie |

**Champs à l'intérieur de `hookSpecificOutput`** :

| Champ | Type | Hooks | Description |
| --- | --- | --- | --- |
| `hookEventName` | `string` | Tous | Requis. Utilisez `input.hook_event_name` pour faire correspondre l'événement actuel |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | Contrôle si l'outil s'exécute |
| `permissionDecisionReason` | `string` | PreToolUse | Explication affichée à Claude pour la décision |
| `updatedInput` | `object` | PreToolUse | Entrée d'outil modifiée (nécessite `permissionDecision: 'allow'`) |
| `additionalContext` | `string` | PostToolUse, UserPromptSubmit, SessionStartTS, SubagentStartTS | Contexte ajouté à la conversation |

Cet exemple bloque les opérations d'écriture dans le répertoire `/etc` tout en injectant un message système pour rappeler à Claude les pratiques sûres de manipulation de fichiers :

Python

```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data['tool_input'].get('file_path', '')

    if file_path.startswith('/etc'):
        return {
            # Champ de niveau supérieur : injecter des conseils dans la conversation
            'systemMessage': 'Remember: system directories like /etc are protected.',
            # hookSpecificOutput : bloquer l'opération
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Writing to /etc is not allowed'
            }
        }
    return {}
```

#### Flux de décision de permission

Lorsque plusieurs hooks ou règles de permission s'appliquent, le SDK les évalue dans cet ordre :

1. **Les règles Deny** sont vérifiées en premier (toute correspondance = refus immédiat).
2. **Les règles Ask** sont vérifiées en second.
3. **Les règles Allow** sont vérifiées en troisième.
4. **Par défaut Ask** si rien ne correspond.

Si un hook retourne `deny`, l'opération est bloquée—les autres hooks retournant `allow` ne l'annuleront pas.

#### Bloquer un outil

Retournez une décision de refus pour empêcher l'exécution de l'outil :

Python

```
async def block_dangerous_commands(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    command = input_data['tool_input'].get('command', '')

    if 'rm -rf /' in command:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Dangerous command blocked: rm -rf /'
            }
        }
    return {}
```

#### Modifier l'entrée de l'outil

Retournez une entrée mise à jour pour modifier ce que l'outil reçoit :

Python

```
async def redirect_to_sandbox(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    if input_data['tool_name'] == 'Write':
        original_path = input_data['tool_input'].get('file_path', '')
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'updatedInput': {
                    **input_data['tool_input'],
                    'file_path': f'/sandbox{original_path}'
                }
            }
        }
    return {}
```

Lors de l'utilisation de `updatedInput`, vous devez également inclure `permissionDecision`. Retournez toujours un nouvel objet plutôt que de muter le `tool_input` original.

#### Ajouter un message système

Injecter du contexte dans la conversation :

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### Approuver automatiquement des outils spécifiques

Contourner les invites de permission pour les outils de confiance. C'est utile lorsque vous souhaitez que certaines opérations s'exécutent sans confirmation de l'utilisateur :

Python

```
async def auto_approve_read_only(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    read_only_tools = ['Read', 'Glob', 'Grep', 'LS']
    if input_data['tool_name'] in read_only_tools:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'permissionDecisionReason': 'Read-only tool auto-approved'
            }
        }
    return {}
```

Le champ `permissionDecision` accepte trois valeurs : `'allow'` (approbation automatique), `'deny'` (bloquer) ou `'ask'` (demander une confirmation).

## Gérer les scénarios avancés

Ces modèles vous aident à construire des systèmes de hooks plus sophistiqués pour les cas d'usage complexes.

### Chaîner plusieurs hooks

Les hooks s'exécutent dans l'ordre dans lequel ils apparaissent dans le tableau. Gardez chaque hook concentré sur une seule responsabilité et chaînez plusieurs hooks pour une logique complexe. Cet exemple exécute les quatre hooks pour chaque appel d'outil (aucun matcher spécifié) :

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(hooks=[rate_limiter]),        # Premier : vérifier les limites de débit\
            HookMatcher(hooks=[authorization_check]), # Deuxième : vérifier les permissions\
            HookMatcher(hooks=[input_sanitizer]),     # Troisième : nettoyer les entrées\
            HookMatcher(hooks=[audit_logger])         # Dernier : journaliser l'action\
        ]
    }
)
```

### Matchers d'outils spécifiques avec regex

Utilisez des motifs regex pour faire correspondre plusieurs outils :

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            # Faire correspondre les outils de modification de fichiers\
            HookMatcher(matcher='Write|Edit|Delete', hooks=[file_security_hook]),\
\
            # Faire correspondre tous les outils MCP\
            HookMatcher(matcher='^mcp__', hooks=[mcp_audit_hook]),\
\
            # Faire correspondre tout (pas de matcher)\
            HookMatcher(hooks=[global_logger])\
        ]
    }
)
```

Les matchers ne correspondent qu'aux **noms d'outils**, pas aux chemins de fichiers ou autres arguments. Pour filtrer par chemin de fichier, vérifiez `tool_input.file_path` à l'intérieur de votre rappel de hook.

### Suivi de l'activité des sous-agents

Utilisez les hooks `SubagentStop` pour surveiller l'achèvement des sous-agents. Le `tool_use_id` aide à corréler les appels de l'agent parent avec leurs sous-agents :

Python

```
async def subagent_tracker(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'SubagentStop':
        print(f"[SUBAGENT] Completed")
        print(f"  Tool use ID: {tool_use_id}")
        print(f"  Stop hook active: {input_data.get('stop_hook_active')}")
    return {}

options = ClaudeAgentOptions(
    hooks={
        'SubagentStop': [HookMatcher(hooks=[subagent_tracker])]
    }
)
```

### Opérations asynchrones dans les hooks

Les hooks peuvent effectuer des opérations asynchrones comme les requêtes HTTP. Gérez les erreurs correctement en capturant les exceptions au lieu de les lever. En TypeScript, transmettez le `signal` à `fetch()` pour que la requête s'annule si le hook expire :

Python

```
import aiohttp
from datetime import datetime

async def webhook_notifier(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PostToolUse':
        return {}

    try:
        async with aiohttp.ClientSession() as session:
            await session.post(
                'https://api.example.com/webhook',
                json={
                    'tool': input_data['tool_name'],
                    'timestamp': datetime.now().isoformat()
                }
            )
    except Exception as e:
        print(f'Webhook request failed: {e}')

    return {}
```

### Envoyer des notifications (TypeScript uniquement)

Utilisez les hooks `Notification` pour recevoir les mises à jour d'état de l'agent et les transférer vers des services externes comme Slack ou des tableaux de bord de surveillance :

TypeScript

```
import { query, HookCallback, NotificationHookInput } from "@anthropic-ai/claude-agent-sdk";

const notificationHandler: HookCallback = async (input, toolUseID, { signal }) => {
  const notification = input as NotificationHookInput;

  await fetch('https://hooks.slack.com/services/YOUR/WEBHOOK/URL', {
    method: 'POST',
    body: JSON.stringify({
      text: `Agent status: ${notification.message}`
    }),
    signal
  });

  return {};
};

for await (const message of query({
  prompt: "Analyze this codebase",
  options: {
    hooks: {
      Notification: [{ hooks: [notificationHandler] }]
    }
  }
})) {
  console.log(message);
}
```

## Corriger les problèmes courants

Cette section couvre les problèmes courants et comment les résoudre.

### Le hook ne se déclenche pas

- Vérifiez que le nom de l'événement du hook est correct et sensible à la casse (`PreToolUse`, pas `preToolUse`)
- Vérifiez que votre motif de matcher correspond exactement au nom de l'outil
- Assurez-vous que le hook se trouve sous le type d'événement correct dans `options.hooks`
- Pour les hooks `SubagentStop`, `Stop`, `SessionStart`, `SessionEnd` et `Notification`, les matchers sont ignorés. Ces hooks se déclenchent pour tous les événements de ce type.
- Les hooks peuvent ne pas se déclencher lorsque l'agent atteint la limite [`max_turns`](https://platform.claude.com/docs/fr/agent-sdk/python#configuration-options) car la session se termine avant que les hooks puissent s'exécuter

### Le matcher ne filtre pas comme prévu

Les matchers ne correspondent qu'aux **noms d'outils**, pas aux chemins de fichiers ou autres arguments. Pour filtrer par chemin de fichier, vérifiez `tool_input.file_path` à l'intérieur de votre hook :

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // Ignorer les fichiers non-markdown
  // Traiter les fichiers markdown...
};
```

### Expiration du hook

- Augmentez la valeur `timeout` dans la configuration `HookMatcher`
- Utilisez le `AbortSignal` du troisième argument de rappel pour gérer l'annulation correctement en TypeScript

### Outil bloqué de manière inattendue

- Vérifiez tous les hooks `PreToolUse` pour les retours `permissionDecision: 'deny'`
- Ajoutez une journalisation à vos hooks pour voir quel `permissionDecisionReason` ils retournent
- Vérifiez que les motifs de matcher ne sont pas trop larges (un matcher vide correspond à tous les outils)

### Entrée modifiée non appliquée

- Assurez-vous que `updatedInput` se trouve à l'intérieur de `hookSpecificOutput`, pas au niveau supérieur :







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- Vous devez également retourner `permissionDecision: 'allow'` pour que la modification d'entrée prenne effet

- Incluez `hookEventName` dans `hookSpecificOutput` pour identifier le type de hook pour lequel la sortie est destinée


### Hooks de session non disponibles

Les hooks `SessionStart`, `SessionEnd` et `Notification` ne sont disponibles que dans le SDK TypeScript. Le SDK Python ne supporte pas ces événements en raison de limitations de configuration.

### Les invites de permission des sous-agents se multiplient

Lors du lancement de plusieurs sous-agents, chacun peut demander des permissions séparément. Les sous-agents n'héritent pas automatiquement des permissions de l'agent parent. Pour éviter les invites répétées, utilisez les hooks `PreToolUse` pour approuver automatiquement des outils spécifiques, ou configurez des règles de permission qui s'appliquent aux sessions des sous-agents.

### Boucles de hooks récursives avec des sous-agents

Un hook `UserPromptSubmit` qui lance des sous-agents peut créer des boucles infinies si ces sous-agents déclenchent le même hook. Pour éviter cela :

- Vérifiez un indicateur de sous-agent dans l'entrée du hook avant de lancer
- Utilisez le champ `parent_tool_use_id` pour détecter si vous êtes déjà dans un contexte de sous-agent
- Limitez les hooks pour s'exécuter uniquement pour la session de l'agent de niveau supérieur

### systemMessage n'apparaît pas dans la sortie

Le champ `systemMessage` ajoute du contexte à la conversation que le modèle voit, mais il peut ne pas apparaître dans tous les modes de sortie du SDK. Si vous avez besoin de faire apparaître les décisions des hooks à votre application, journalisez-les séparément ou utilisez un canal de sortie dédié.

## En savoir plus

- [Permissions](https://platform.claude.com/docs/fr/agent-sdk/permissions) : contrôler ce que votre agent peut faire
- [Outils personnalisés](https://platform.claude.com/docs/fr/agent-sdk/custom-tools) : construire des outils pour étendre les capacités de l'agent
- [Référence du SDK TypeScript](https://platform.claude.com/docs/fr/agent-sdk/typescript)
- [Référence du SDK Python](https://platform.claude.com/docs/fr/agent-sdk/python)

- [Hooks disponibles](https://platform.claude.com/docs/fr/agent-sdk/hooks#hooks-disponibles)
- [Cas d'usage courants](https://platform.claude.com/docs/fr/agent-sdk/hooks#cas-d-usage-courants)
- [Configurer les hooks](https://platform.claude.com/docs/fr/agent-sdk/hooks#configurer-les-hooks)
- [Matchers](https://platform.claude.com/docs/fr/agent-sdk/hooks#matchers)
- [Entrées de la fonction de rappel](https://platform.claude.com/docs/fr/agent-sdk/hooks#entrees-de-la-fonction-de-rappel)
- [Données d'entrée](https://platform.claude.com/docs/fr/agent-sdk/hooks#donnees-d-entree)
- [Sorties du rappel](https://platform.claude.com/docs/fr/agent-sdk/hooks#sorties-du-rappel)
- [Gérer les scénarios avancés](https://platform.claude.com/docs/fr/agent-sdk/hooks#gerer-les-scenarios-avances)
- [Chaîner plusieurs hooks](https://platform.claude.com/docs/fr/agent-sdk/hooks#chainer-plusieurs-hooks)
- [Matchers d'outils spécifiques avec regex](https://platform.claude.com/docs/fr/agent-sdk/hooks#matchers-d-outils-specifiques-avec-regex)
- [Suivi de l'activité des sous-agents](https://platform.claude.com/docs/fr/agent-sdk/hooks#suivi-de-l-activite-des-sous-agents)
- [Opérations asynchrones dans les hooks](https://platform.claude.com/docs/fr/agent-sdk/hooks#operations-asynchrones-dans-les-hooks)
- [Envoyer des notifications (TypeScript uniquement)](https://platform.claude.com/docs/fr/agent-sdk/hooks#envoyer-des-notifications-type-script-uniquement)
- [Corriger les problèmes courants](https://platform.claude.com/docs/fr/agent-sdk/hooks#corriger-les-problemes-courants)
- [Le hook ne se déclenche pas](https://platform.claude.com/docs/fr/agent-sdk/hooks#le-hook-ne-se-declenche-pas)
- [Le matcher ne filtre pas comme prévu](https://platform.claude.com/docs/fr/agent-sdk/hooks#le-matcher-ne-filtre-pas-comme-prevu)
- [Expiration du hook](https://platform.claude.com/docs/fr/agent-sdk/hooks#expiration-du-hook)
- [Outil bloqué de manière inattendue](https://platform.claude.com/docs/fr/agent-sdk/hooks#outil-bloque-de-maniere-inattendue)
- [Entrée modifiée non appliquée](https://platform.claude.com/docs/fr/agent-sdk/hooks#entree-modifiee-non-appliquee)
- [Hooks de session non disponibles](https://platform.claude.com/docs/fr/agent-sdk/hooks#hooks-de-session-non-disponibles)
- [Les invites de permission des sous-agents se multiplient](https://platform.claude.com/docs/fr/agent-sdk/hooks#les-invites-de-permission-des-sous-agents-se-multiplient)
- [Boucles de hooks récursives avec des sous-agents](https://platform.claude.com/docs/fr/agent-sdk/hooks#boucles-de-hooks-recursives-avec-des-sous-agents)
- [systemMessage n'apparaît pas dans la sortie](https://platform.claude.com/docs/fr/agent-sdk/hooks#system-message-n-apparait-pas-dans-la-sortie)
- [En savoir plus](https://platform.claude.com/docs/fr/agent-sdk/hooks#en-savoir-plus)

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

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

|
|

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)