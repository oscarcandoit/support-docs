---
url: "https://platform.claude.com/docs/es/agent-sdk/hooks"
title: "Interceptar y controlar el comportamiento del agente con hooks - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/es/home)

- [Guía para desarrolladores](https://platform.claude.com/docs/es/intro)
- [Referencia de API](https://platform.claude.com/docs/es/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Recursos](https://platform.claude.com/docs/es/resources/overview)
- [Notas de la versión](https://platform.claude.com/docs/es/release-notes/overview)

Español

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fes%2Fagent-sdk%2Fhooks)

Search...

⌘K

Primeros pasos

[Introducción a Claude](https://platform.claude.com/docs/es/intro) [Inicio rápido](https://platform.claude.com/docs/es/get-started)

Modelos y precios

[Descripción general de modelos](https://platform.claude.com/docs/es/about-claude/models/overview) [Elegir un modelo](https://platform.claude.com/docs/es/about-claude/models/choosing-a-model) [Novedades en Claude 4.5](https://platform.claude.com/docs/es/about-claude/models/whats-new-claude-4-5) [Migración a Claude 4.5](https://platform.claude.com/docs/es/about-claude/models/migrating-to-claude-4) [Deprecación de modelos](https://platform.claude.com/docs/es/about-claude/model-deprecations) [Precios](https://platform.claude.com/docs/es/about-claude/pricing)

Construir con Claude

[Descripción general de características](https://platform.claude.com/docs/es/build-with-claude/overview) [Usar la API de Messages](https://platform.claude.com/docs/es/build-with-claude/working-with-messages) [Ventanas de contexto](https://platform.claude.com/docs/es/build-with-claude/context-windows) [Mejores prácticas de prompting](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/claude-4-best-practices)

Capacidades

[Almacenamiento en caché de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-caching) [Edición de contexto](https://platform.claude.com/docs/es/build-with-claude/context-editing) [Pensamiento extendido](https://platform.claude.com/docs/es/build-with-claude/extended-thinking) [Esfuerzo](https://platform.claude.com/docs/es/build-with-claude/effort) [Streaming de Messages](https://platform.claude.com/docs/es/build-with-claude/streaming) [Procesamiento por lotes](https://platform.claude.com/docs/es/build-with-claude/batch-processing) [Citas](https://platform.claude.com/docs/es/build-with-claude/citations) [Soporte multilingüe](https://platform.claude.com/docs/es/build-with-claude/multilingual-support) [Conteo de tokens](https://platform.claude.com/docs/es/build-with-claude/token-counting) [Embeddings](https://platform.claude.com/docs/es/build-with-claude/embeddings) [Visión](https://platform.claude.com/docs/es/build-with-claude/vision) [Soporte de PDF](https://platform.claude.com/docs/es/build-with-claude/pdf-support) [API de Files](https://platform.claude.com/docs/es/build-with-claude/files) [Resultados de búsqueda](https://platform.claude.com/docs/es/build-with-claude/search-results) [Salidas estructuradas](https://platform.claude.com/docs/es/build-with-claude/structured-outputs)

Herramientas

[Descripción general](https://platform.claude.com/docs/es/agents-and-tools/tool-use/overview) [Cómo implementar el uso de herramientas](https://platform.claude.com/docs/es/agents-and-tools/tool-use/implement-tool-use) [Streaming de herramientas granular](https://platform.claude.com/docs/es/agents-and-tools/tool-use/fine-grained-tool-streaming) [Herramienta Bash](https://platform.claude.com/docs/es/agents-and-tools/tool-use/bash-tool) [Herramienta de ejecución de código](https://platform.claude.com/docs/es/agents-and-tools/tool-use/code-execution-tool) [Llamada de herramientas programática](https://platform.claude.com/docs/es/agents-and-tools/tool-use/programmatic-tool-calling) [Herramienta de uso de computadora](https://platform.claude.com/docs/es/agents-and-tools/tool-use/computer-use-tool) [Herramienta de editor de texto](https://platform.claude.com/docs/es/agents-and-tools/tool-use/text-editor-tool) [Herramienta de búsqueda web](https://platform.claude.com/docs/es/agents-and-tools/tool-use/web-fetch-tool) [Herramienta de búsqueda web](https://platform.claude.com/docs/es/agents-and-tools/tool-use/web-search-tool) [Herramienta de memoria](https://platform.claude.com/docs/es/agents-and-tools/tool-use/memory-tool) [Herramienta de búsqueda de herramientas](https://platform.claude.com/docs/es/agents-and-tools/tool-use/tool-search-tool)

Habilidades del agente

[Descripción general](https://platform.claude.com/docs/es/agents-and-tools/agent-skills/overview) [Inicio rápido](https://platform.claude.com/docs/es/agents-and-tools/agent-skills/quickstart) [Mejores prácticas](https://platform.claude.com/docs/es/agents-and-tools/agent-skills/best-practices) [Usar habilidades con la API](https://platform.claude.com/docs/es/build-with-claude/skills-guide)

SDK del agente

[Descripción general](https://platform.claude.com/docs/es/agent-sdk/overview) [Inicio rápido](https://platform.claude.com/docs/es/agent-sdk/quickstart) [SDK de TypeScript](https://platform.claude.com/docs/es/agent-sdk/typescript) [TypeScript V2 (vista previa)](https://platform.claude.com/docs/es/agent-sdk/typescript-v2-preview) [SDK de Python](https://platform.claude.com/docs/es/agent-sdk/python) [Guía de migración](https://platform.claude.com/docs/es/agent-sdk/migration-guide)

Guías

[Entrada de streaming](https://platform.claude.com/docs/es/agent-sdk/streaming-vs-single-mode) [Manejo de permisos](https://platform.claude.com/docs/es/agent-sdk/permissions) [Controlar la ejecución con hooks](https://platform.claude.com/docs/es/agent-sdk/hooks) [Gestión de sesiones](https://platform.claude.com/docs/es/agent-sdk/sessions) [Salidas estructuradas en el SDK](https://platform.claude.com/docs/es/agent-sdk/structured-outputs) [Alojamiento del SDK del agente](https://platform.claude.com/docs/es/agent-sdk/hosting) [Despliegue seguro de agentes de IA](https://platform.claude.com/docs/es/agent-sdk/secure-deployment) [Modificar prompts del sistema](https://platform.claude.com/docs/es/agent-sdk/modifying-system-prompts) [MCP en el SDK](https://platform.claude.com/docs/es/agent-sdk/mcp) [Herramientas personalizadas](https://platform.claude.com/docs/es/agent-sdk/custom-tools) [Subagentes en el SDK](https://platform.claude.com/docs/es/agent-sdk/subagents) [Comandos de barra en el SDK](https://platform.claude.com/docs/es/agent-sdk/slash-commands) [Habilidades del agente en el SDK](https://platform.claude.com/docs/es/agent-sdk/skills) [Seguimiento de costos y uso](https://platform.claude.com/docs/es/agent-sdk/cost-tracking) [Listas de tareas](https://platform.claude.com/docs/es/agent-sdk/todo-tracking) [Plugins en el SDK](https://platform.claude.com/docs/es/agent-sdk/plugins)

MCP en la API

[Conector MCP](https://platform.claude.com/docs/es/agents-and-tools/mcp-connector) [Servidores MCP remotos](https://platform.claude.com/docs/es/agents-and-tools/remote-mcp-servers)

Claude en plataformas de terceros

[Amazon Bedrock](https://platform.claude.com/docs/es/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/es/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/es/build-with-claude/claude-on-vertex-ai)

Ingeniería de prompts

[Descripción general](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/overview) [Generador de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/prompt-generator) [Usar plantillas de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Mejorador de prompts](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/prompt-improver) [Sé claro y directo](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/be-clear-and-direct) [Usar ejemplos (prompting multishot)](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/multishot-prompting) [Dejar que Claude piense (CoT)](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/chain-of-thought) [Usar etiquetas XML](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/use-xml-tags) [Dar un rol a Claude (prompts del sistema)](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/system-prompts) [Rellenar la respuesta de Claude](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/prefill-claudes-response) [Encadenar prompts complejos](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/chain-prompts) [Consejos de contexto largo](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/long-context-tips) [Consejos de pensamiento extendido](https://platform.claude.com/docs/es/build-with-claude/prompt-engineering/extended-thinking-tips)

Probar y evaluar

[Definir criterios de éxito](https://platform.claude.com/docs/es/test-and-evaluate/define-success) [Desarrollar casos de prueba](https://platform.claude.com/docs/es/test-and-evaluate/develop-tests) [Usar la herramienta de evaluación](https://platform.claude.com/docs/es/test-and-evaluate/eval-tool) [Reducir latencia](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-latency)

Fortalecer protecciones

[Reducir alucinaciones](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Aumentar consistencia de salida](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/increase-consistency) [Mitigar ataques de jailbreak](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Rechazos de streaming](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Reducir fuga de prompts](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Mantener a Claude en personaje](https://platform.claude.com/docs/es/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Administración y monitoreo

[Descripción general de Admin API](https://platform.claude.com/docs/es/build-with-claude/administration-api) [API de uso y costos](https://platform.claude.com/docs/es/build-with-claude/usage-cost-api) [API de análisis de Claude Code](https://platform.claude.com/docs/es/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Guías

Controlar la ejecución con hooks

Guías

# Interceptar y controlar el comportamiento del agente con hooks

Copy page

Interceptar y personalizar el comportamiento del agente en puntos clave de ejecución con hooks

Copy page

Los hooks te permiten interceptar la ejecución del agente en puntos clave para agregar validación, registro, controles de seguridad o lógica personalizada. Con hooks, puedes:

- **Bloquear operaciones peligrosas** antes de que se ejecuten, como comandos de shell destructivos o acceso a archivos no autorizado
- **Registrar y auditar** cada llamada de herramienta para cumplimiento, depuración o análisis
- **Transformar entradas y salidas** para desinfectar datos, inyectar credenciales o redirigir rutas de archivos
- **Requerir aprobación humana** para acciones sensibles como escrituras en bases de datos o llamadas a API
- **Rastrear el ciclo de vida de la sesión** para gestionar estado, limpiar recursos o enviar notificaciones

Un hook tiene dos partes:

1. **La función de devolución de llamada**: la lógica que se ejecuta cuando se dispara el hook
2. **La configuración del hook**: le dice al SDK qué evento enganchar (como `PreToolUse`) y qué herramientas coinciden

El siguiente ejemplo bloquea al agente de modificar archivos `.env`. Primero, define una devolución de llamada que verifica la ruta del archivo, luego pásala a `query()` para ejecutarla antes de cualquier llamada de herramienta Write o Edit:

Python

```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, HookMatcher

# Define a hook callback that receives tool call details
async def protect_env_files(input_data, tool_use_id, context):
    # Extract the file path from the tool's input arguments
    file_path = input_data['tool_input'].get('file_path', '')
    file_name = file_path.split('/')[-1]

    # Block the operation if targeting a .env file
    if file_name == '.env':
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Cannot modify .env files'
            }
        }

    # Return empty object to allow the operation
    return {}

async def main():
    async for message in query(
        prompt="Update the database configuration",
        options=ClaudeAgentOptions(
            hooks={
                # Register the hook for PreToolUse events
                # The matcher filters to only Write and Edit tool calls
                'PreToolUse': [HookMatcher(matcher='Write|Edit', hooks=[protect_env_files])]
            }
        )
    ):
        print(message)

asyncio.run(main())
```

Este es un hook `PreToolUse`. Se ejecuta antes de que la herramienta se ejecute y puede bloquear u permitir operaciones basadas en tu lógica. El resto de esta guía cubre todos los hooks disponibles, sus opciones de configuración y patrones para casos de uso comunes.

## Hooks disponibles

El SDK proporciona hooks para diferentes etapas de la ejecución del agente. Algunos hooks están disponibles en ambos SDK, mientras que otros son solo de TypeScript porque el SDK de Python no los admite.

| Hook Event | Python SDK | TypeScript SDK | What triggers it | Example use case |
| --- | --- | --- | --- | --- |
| `PreToolUse` | Yes | Yes | Tool call request (can block or modify) | Block dangerous shell commands |
| `PostToolUse` | Yes | Yes | Tool execution result | Log all file changes to audit trail |
| `PostToolUseFailure` | No | Yes | Tool execution failure | Handle or log tool errors |
| `UserPromptSubmit` | Yes | Yes | User prompt submission | Inject additional context into prompts |
| `Stop` | Yes | Yes | Agent execution stop | Save session state before exit |
| `SubagentStart` | No | Yes | Subagent initialization | Track parallel task spawning |
| `SubagentStop` | Yes | Yes | Subagent completion | Aggregate results from parallel tasks |
| `PreCompact` | Yes | Yes | Conversation compaction request | Archive full transcript before summarizing |
| `PermissionRequest` | No | Yes | Permission dialog would be displayed | Custom permission handling |
| `SessionStart` | No | Yes | Session initialization | Initialize logging and telemetry |
| `SessionEnd` | No | Yes | Session termination | Clean up temporary resources |
| `Notification` | No | Yes | Agent status messages | Send agent status updates to Slack or PagerDuty |

## Casos de uso comunes

Los hooks son lo suficientemente flexibles para manejar muchos escenarios diferentes. Aquí hay algunos de los patrones más comunes organizados por categoría.

Seguridad

Seguridad

Registro

Registro

Intercepción de herramientas

Intercepción de herramientas

Autorización

Autorización

- Bloquear comandos peligrosos (como `rm -rf /`, SQL destructivo)
- Validar rutas de archivo antes de operaciones de escritura
- Aplicar listas de permitidos/bloqueados para el uso de herramientas

## Configurar hooks

Para configurar un hook para tu agente, pasa el hook en el parámetro `options.hooks` al llamar a `query()`:

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

La opción `hooks` es un diccionario (Python) u objeto (TypeScript) donde:

- **Las claves** son [nombres de eventos de hook](https://platform.claude.com/docs/es/agent-sdk/hooks#available-hooks) (por ejemplo, `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **Los valores** son matrices de [matchers](https://platform.claude.com/docs/es/agent-sdk/hooks#matchers), cada una conteniendo un patrón de filtro opcional y tus [funciones de devolución de llamada](https://platform.claude.com/docs/es/agent-sdk/hooks#callback-function-inputs)

Tus funciones de devolución de llamada de hook reciben [datos de entrada](https://platform.claude.com/docs/es/agent-sdk/hooks#input-data) sobre el evento y devuelven una [respuesta](https://platform.claude.com/docs/es/agent-sdk/hooks#callback-outputs) para que el agente sepa si permitir, bloquear o modificar la operación.

### Matchers

Usa matchers para filtrar qué herramientas disparan tus devoluciones de llamada:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | Regex pattern to match tool names. Built-in tools include `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebFetch`, `Task`, and others. MCP tools use the pattern `mcp__<server>__<action>`. |
| `hooks` | `HookCallback[]` | - | Required. Array of callback functions to execute when the pattern matches |
| `timeout` | `number` | `60` | Timeout in seconds; increase for hooks that make external API calls |

Usa el patrón `matcher` para dirigirse a herramientas específicas siempre que sea posible. Un matcher con `'Bash'` solo se ejecuta para comandos Bash, mientras que omitir el patrón ejecuta tus devoluciones de llamada para cada llamada de herramienta. Ten en cuenta que los matchers solo filtran por **nombre de herramienta**, no por rutas de archivo u otros argumentos—para filtrar por ruta de archivo, verifica `tool_input.file_path` dentro de tu devolución de llamada.

Los matchers solo se aplican a hooks basados en herramientas (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`). Para hooks de ciclo de vida como `Stop`, `SessionStart` y `Notification`, los matchers se ignoran y el hook se dispara para todos los eventos de ese tipo.

**Descubriendo nombres de herramientas:** Verifica la matriz `tools` en el mensaje del sistema inicial cuando comienza tu sesión, o agrega un hook sin un matcher para registrar todas las llamadas de herramientas.

**Nomenclatura de herramientas MCP:** Las herramientas MCP siempre comienzan con `mcp__` seguidas del nombre del servidor y la acción: `mcp__<server>__<action>`. Por ejemplo, si configuras un servidor llamado `playwright`, sus herramientas se nombrarán `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click`, etc. El nombre del servidor proviene de la clave que usas en la configuración de `mcpServers`.

Este ejemplo usa un matcher para ejecutar un hook solo para herramientas que modifican archivos cuando se dispara el evento `PreToolUse`:

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

### Entradas de función de devolución de llamada

Cada devolución de llamada de hook recibe tres argumentos:

1. **Datos de entrada** (`dict` / `HookInput`): Detalles del evento. Consulta [datos de entrada](https://platform.claude.com/docs/es/agent-sdk/hooks#input-data) para campos
2. **ID de uso de herramienta** (`str | None` / `string | null`): Correlacionar eventos `PreToolUse` y `PostToolUse`
3. **Contexto** (`HookContext`): En TypeScript, contiene una propiedad `signal` (`AbortSignal`) para cancelación. Pasa esto a operaciones asincrónicas como `fetch()` para que se cancelen automáticamente si el hook agota el tiempo. En Python, este argumento está reservado para uso futuro.

### Datos de entrada

El primer argumento de tu devolución de llamada de hook contiene información sobre el evento. Los nombres de campo son idénticos en todos los SDK (ambos usan snake\_case).

**Campos comunes** presentes en todos los tipos de hook:

| Field | Type | Description |
| --- | --- | --- |
| `hook_event_name` | `string` | The hook type (`PreToolUse`, `PostToolUse`, etc.) |
| `session_id` | `string` | Current session identifier |
| `transcript_path` | `string` | Path to the conversation transcript |
| `cwd` | `string` | Current working directory |

**Campos específicos del hook** varían según el tipo de hook. Los elementos marcados TS solo están disponibles en el SDK de TypeScript:

| Field | Type | Description | Hooks |
| --- | --- | --- | --- |
| `tool_name` | `string` | Name of the tool being called | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_input` | `object` | Arguments passed to the tool | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_response` | `any` | Result returned from tool execution | PostToolUse |
| `error` | `string` | Error message from tool execution failure | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | Whether the failure was caused by an interrupt | PostToolUseFailureTS |
| `prompt` | `string` | The user's prompt text | UserPromptSubmit |
| `stop_hook_active` | `boolean` | Whether a stop hook is currently processing | Stop, SubagentStop |
| `agent_id` | `string` | Unique identifier for the subagent | SubagentStartTS, SubagentStopTS |
| `agent_type` | `string` | Type/role of the subagent | SubagentStartTS |
| `agent_transcript_path` | `string` | Path to the subagent's conversation transcript | SubagentStopTS |
| `trigger` | `string` | What triggered compaction: `manual` or `auto` | PreCompact |
| `custom_instructions` | `string` | Custom instructions provided for compaction | PreCompact |
| `permission_suggestions` | `array` | Suggested permission updates for the tool | PermissionRequestTS |
| `source` | `string` | How the session started: `startup`, `resume`, `clear`, or `compact` | SessionStartTS |
| `reason` | `string` | Why the session ended: `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled`, or `other` | SessionEndTS |
| `message` | `string` | Status message from the agent | NotificationTS |
| `notification_type` | `string` | Type of notification: `permission_prompt`, `idle_prompt`, `auth_success`, or `elicitation_dialog` | NotificationTS |
| `title` | `string` | Optional title set by the agent | NotificationTS |

El código a continuación define una devolución de llamada de hook que usa `tool_name` y `tool_input` para registrar detalles sobre cada llamada de herramienta:

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### Salidas de devolución de llamada

Tu función de devolución de llamada devuelve un objeto que le dice al SDK cómo proceder. Devuelve un objeto vacío `{}` para permitir la operación sin cambios. Para bloquear, modificar o agregar contexto a la operación, devuelve un objeto con un campo `hookSpecificOutput` que contiene tu decisión.

**Campos de nivel superior** (fuera de `hookSpecificOutput`):

| Field | Type | Description |
| --- | --- | --- |
| `continue` | `boolean` | Whether the agent should continue after this hook (default: `true`) |
| `stopReason` | `string` | Message shown when `continue` is `false` |
| `suppressOutput` | `boolean` | Hide stdout from the transcript (default: `false`) |
| `systemMessage` | `string` | Message injected into the conversation for Claude to see |

**Campos dentro de `hookSpecificOutput`**:

| Field | Type | Hooks | Description |
| --- | --- | --- | --- |
| `hookEventName` | `string` | All | Required. Use `input.hook_event_name` to match the current event |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | Controls whether the tool executes |
| `permissionDecisionReason` | `string` | PreToolUse | Explanation shown to Claude for the decision |
| `updatedInput` | `object` | PreToolUse | Modified tool input (requires `permissionDecision: 'allow'`) |
| `additionalContext` | `string` | PostToolUse, UserPromptSubmit, SessionStartTS, SubagentStartTS | Context added to the conversation |

Este ejemplo bloquea operaciones de escritura en el directorio `/etc` mientras inyecta un mensaje del sistema para recordarle a Claude sobre prácticas seguras de archivos:

Python

```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data['tool_input'].get('file_path', '')

    if file_path.startswith('/etc'):
        return {
            # Top-level field: inject guidance into the conversation
            'systemMessage': 'Remember: system directories like /etc are protected.',
            # hookSpecificOutput: block the operation
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Writing to /etc is not allowed'
            }
        }
    return {}
```

#### Flujo de decisión de permisos

Cuando se aplican múltiples hooks o reglas de permisos, el SDK los evalúa en este orden:

1. **Las reglas de negación** se verifican primero (cualquier coincidencia = negación inmediata).
2. **Las reglas de pregunta** se verifican segundo.
3. **Las reglas de permitir** se verifican tercero.
4. **Por defecto a Preguntar** si nada coincide.

Si algún hook devuelve `deny`, la operación se bloquea—otros hooks que devuelven `allow` no lo anularán.

#### Bloquear una herramienta

Devuelve una decisión de negación para evitar la ejecución de la herramienta:

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

#### Modificar entrada de herramienta

Devuelve entrada actualizada para cambiar lo que recibe la herramienta:

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

Cuando uses `updatedInput`, también debes incluir `permissionDecision`. Siempre devuelve un nuevo objeto en lugar de mutar el `tool_input` original.

#### Agregar un mensaje del sistema

Inyecta contexto en la conversación:

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### Aprobar automáticamente herramientas específicas

Omite solicitudes de permisos para herramientas de confianza. Esto es útil cuando deseas que ciertas operaciones se ejecuten sin confirmación del usuario:

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

El campo `permissionDecision` acepta tres valores: `'allow'` (aprobar automáticamente), `'deny'` (bloquear) o `'ask'` (solicitar confirmación).

## Manejar escenarios avanzados

Estos patrones te ayudan a construir sistemas de hooks más sofisticados para casos de uso complejos.

### Encadenar múltiples hooks

Los hooks se ejecutan en el orden en que aparecen en la matriz. Mantén cada hook enfocado en una única responsabilidad y encadena múltiples hooks para lógica compleja. Este ejemplo ejecuta los cuatro hooks para cada llamada de herramienta (sin matcher especificado):

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(hooks=[rate_limiter]),        # First: check rate limits\
            HookMatcher(hooks=[authorization_check]), # Second: verify permissions\
            HookMatcher(hooks=[input_sanitizer]),     # Third: sanitize inputs\
            HookMatcher(hooks=[audit_logger])         # Last: log the action\
        ]
    }
)
```

### Matchers específicos de herramientas con regex

Usa patrones regex para coincidir con múltiples herramientas:

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            # Match file modification tools\
            HookMatcher(matcher='Write|Edit|Delete', hooks=[file_security_hook]),\
\
            # Match all MCP tools\
            HookMatcher(matcher='^mcp__', hooks=[mcp_audit_hook]),\
\
            # Match everything (no matcher)\
            HookMatcher(hooks=[global_logger])\
        ]
    }
)
```

Los matchers solo coinciden con **nombres de herramientas**, no con rutas de archivo u otros argumentos. Para filtrar por ruta de archivo, verifica `tool_input.file_path` dentro de tu devolución de llamada de hook.

### Rastrear actividad de subagentes

Usa hooks `SubagentStop` para monitorear la finalización de subagentes. El `tool_use_id` ayuda a correlacionar llamadas de agente padre con sus subagentes:

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

### Operaciones asincrónicas en hooks

Los hooks pueden realizar operaciones asincrónicas como solicitudes HTTP. Maneja errores correctamente capturando excepciones en lugar de lanzarlas. En TypeScript, pasa el `signal` a `fetch()` para que la solicitud se cancele si el hook agota el tiempo:

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

### Enviar notificaciones (solo TypeScript)

Usa hooks `Notification` para recibir actualizaciones de estado del agente y reenviarlas a servicios externos como Slack o paneles de monitoreo:

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

## Solucionar problemas comunes

Esta sección cubre problemas comunes y cómo resolverlos.

### Hook no se dispara

- Verifica que el nombre del evento del hook sea correcto y sensible a mayúsculas (`PreToolUse`, no `preToolUse`)
- Comprueba que tu patrón de matcher coincida exactamente con el nombre de la herramienta
- Asegúrate de que el hook esté bajo el tipo de evento correcto en `options.hooks`
- Para hooks `SubagentStop`, `Stop`, `SessionStart`, `SessionEnd` y `Notification`, los matchers se ignoran. Estos hooks se disparan para todos los eventos de ese tipo.
- Los hooks pueden no dispararse cuando el agente alcanza el límite de [`max_turns`](https://platform.claude.com/docs/es/agent-sdk/python#configuration-options) porque la sesión termina antes de que los hooks puedan ejecutarse

### Matcher no filtra como se esperaba

Los matchers solo coinciden con **nombres de herramientas**, no con rutas de archivo u otros argumentos. Para filtrar por ruta de archivo, verifica `tool_input.file_path` dentro de tu hook:

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // Skip non-markdown files
  // Process markdown files...
};
```

### Tiempo de espera del hook

- Aumenta el valor `timeout` en la configuración de `HookMatcher`
- Usa el `AbortSignal` del tercer argumento de devolución de llamada para manejar la cancelación correctamente en TypeScript

### Herramienta bloqueada inesperadamente

- Verifica todos los hooks `PreToolUse` para devoluciones `permissionDecision: 'deny'`
- Agrega registro a tus hooks para ver qué `permissionDecisionReason` están devolviendo
- Verifica que los patrones de matcher no sean demasiado amplios (un matcher vacío coincide con todas las herramientas)

### Entrada modificada no aplicada

- Asegúrate de que `updatedInput` esté dentro de `hookSpecificOutput`, no en el nivel superior:







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- También debes devolver `permissionDecision: 'allow'` para que la modificación de entrada surta efecto

- Incluye `hookEventName` en `hookSpecificOutput` para identificar qué tipo de hook es la salida


### Hooks de sesión no disponibles

Los hooks `SessionStart`, `SessionEnd` y `Notification` solo están disponibles en el SDK de TypeScript. El SDK de Python no admite estos eventos debido a limitaciones de configuración.

### Solicitudes de permisos de subagentes multiplicándose

Al generar múltiples subagentes, cada uno puede solicitar permisos por separado. Los subagentes no heredan automáticamente los permisos del agente padre. Para evitar solicitudes repetidas, usa hooks `PreToolUse` para aprobar automáticamente herramientas específicas, o configura reglas de permisos que se apliquen a sesiones de subagentes.

### Bucles recursivos de hooks con subagentes

Un hook `UserPromptSubmit` que genera subagentes puede crear bucles infinitos si esos subagentes disparan el mismo hook. Para evitar esto:

- Verifica un indicador de subagente en la entrada del hook antes de generar
- Usa el campo `parent_tool_use_id` para detectar si ya estás en un contexto de subagente
- Limita los hooks para que solo se ejecuten en la sesión del agente de nivel superior

### systemMessage no aparece en la salida

El campo `systemMessage` agrega contexto a la conversación que el modelo ve, pero puede no aparecer en todos los modos de salida del SDK. Si necesitas mostrar decisiones de hooks a tu aplicación, regístralas por separado o usa un canal de salida dedicado.

## Aprende más

- [Permisos](https://platform.claude.com/docs/es/agent-sdk/permissions): controla qué puede hacer tu agente
- [Herramientas personalizadas](https://platform.claude.com/docs/es/agent-sdk/custom-tools): construye herramientas para extender las capacidades del agente
- [Referencia del SDK de TypeScript](https://platform.claude.com/docs/es/agent-sdk/typescript)
- [Referencia del SDK de Python](https://platform.claude.com/docs/es/agent-sdk/python)

- [Hooks disponibles](https://platform.claude.com/docs/es/agent-sdk/hooks#hooks-disponibles)
- [Casos de uso comunes](https://platform.claude.com/docs/es/agent-sdk/hooks#casos-de-uso-comunes)
- [Configurar hooks](https://platform.claude.com/docs/es/agent-sdk/hooks#configurar-hooks)
- [Matchers](https://platform.claude.com/docs/es/agent-sdk/hooks#matchers)
- [Entradas de función de devolución de llamada](https://platform.claude.com/docs/es/agent-sdk/hooks#entradas-de-funcion-de-devolucion-de-llamada)
- [Datos de entrada](https://platform.claude.com/docs/es/agent-sdk/hooks#datos-de-entrada)
- [Salidas de devolución de llamada](https://platform.claude.com/docs/es/agent-sdk/hooks#salidas-de-devolucion-de-llamada)
- [Manejar escenarios avanzados](https://platform.claude.com/docs/es/agent-sdk/hooks#manejar-escenarios-avanzados)
- [Encadenar múltiples hooks](https://platform.claude.com/docs/es/agent-sdk/hooks#encadenar-multiples-hooks)
- [Matchers específicos de herramientas con regex](https://platform.claude.com/docs/es/agent-sdk/hooks#matchers-especificos-de-herramientas-con-regex)
- [Rastrear actividad de subagentes](https://platform.claude.com/docs/es/agent-sdk/hooks#rastrear-actividad-de-subagentes)
- [Operaciones asincrónicas en hooks](https://platform.claude.com/docs/es/agent-sdk/hooks#operaciones-asincronicas-en-hooks)
- [Enviar notificaciones (solo TypeScript)](https://platform.claude.com/docs/es/agent-sdk/hooks#enviar-notificaciones-solo-type-script)
- [Solucionar problemas comunes](https://platform.claude.com/docs/es/agent-sdk/hooks#solucionar-problemas-comunes)
- [Hook no se dispara](https://platform.claude.com/docs/es/agent-sdk/hooks#hook-no-se-dispara)
- [Matcher no filtra como se esperaba](https://platform.claude.com/docs/es/agent-sdk/hooks#matcher-no-filtra-como-se-esperaba)
- [Tiempo de espera del hook](https://platform.claude.com/docs/es/agent-sdk/hooks#tiempo-de-espera-del-hook)
- [Herramienta bloqueada inesperadamente](https://platform.claude.com/docs/es/agent-sdk/hooks#herramienta-bloqueada-inesperadamente)
- [Entrada modificada no aplicada](https://platform.claude.com/docs/es/agent-sdk/hooks#entrada-modificada-no-aplicada)
- [Hooks de sesión no disponibles](https://platform.claude.com/docs/es/agent-sdk/hooks#hooks-de-sesion-no-disponibles)
- [Solicitudes de permisos de subagentes multiplicándose](https://platform.claude.com/docs/es/agent-sdk/hooks#solicitudes-de-permisos-de-subagentes-multiplicandose)
- [Bucles recursivos de hooks con subagentes](https://platform.claude.com/docs/es/agent-sdk/hooks#bucles-recursivos-de-hooks-con-subagentes)
- [systemMessage no aparece en la salida](https://platform.claude.com/docs/es/agent-sdk/hooks#system-message-no-aparece-en-la-salida)
- [Aprende más](https://platform.claude.com/docs/es/agent-sdk/hooks#aprende-mas)

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