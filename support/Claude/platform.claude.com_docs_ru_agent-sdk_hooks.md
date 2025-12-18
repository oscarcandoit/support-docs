---
url: "https://platform.claude.com/docs/ru/agent-sdk/hooks"
title: "Перехват и управление поведением агента с помощью hooks - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fagent-sdk%2Fhooks)

Search...

⌘K

Первые шаги

[Введение в Claude](https://platform.claude.com/docs/ru/intro) [Быстрый старт](https://platform.claude.com/docs/ru/get-started)

Модели и цены

[Обзор моделей](https://platform.claude.com/docs/ru/about-claude/models/overview) [Выбор модели](https://platform.claude.com/docs/ru/about-claude/models/choosing-a-model) [Что нового в Claude 4.5](https://platform.claude.com/docs/ru/about-claude/models/whats-new-claude-4-5) [Миграция на Claude 4.5](https://platform.claude.com/docs/ru/about-claude/models/migrating-to-claude-4) [Устаревшие модели](https://platform.claude.com/docs/ru/about-claude/model-deprecations) [Цены](https://platform.claude.com/docs/ru/about-claude/pricing)

Разработка с Claude

[Обзор возможностей](https://platform.claude.com/docs/ru/build-with-claude/overview) [Использование Messages API](https://platform.claude.com/docs/ru/build-with-claude/working-with-messages) [Контекстные окна](https://platform.claude.com/docs/ru/build-with-claude/context-windows) [Лучшие практики промптирования](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/claude-4-best-practices)

Возможности

[Кэширование промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-caching) [Редактирование контекста](https://platform.claude.com/docs/ru/build-with-claude/context-editing) [Расширенное мышление](https://platform.claude.com/docs/ru/build-with-claude/extended-thinking) [Усилие](https://platform.claude.com/docs/ru/build-with-claude/effort) [Потоковая передача сообщений](https://platform.claude.com/docs/ru/build-with-claude/streaming) [Пакетная обработка](https://platform.claude.com/docs/ru/build-with-claude/batch-processing) [Цитирования](https://platform.claude.com/docs/ru/build-with-claude/citations) [Многоязычная поддержка](https://platform.claude.com/docs/ru/build-with-claude/multilingual-support) [Подсчет токенов](https://platform.claude.com/docs/ru/build-with-claude/token-counting) [Встраивания](https://platform.claude.com/docs/ru/build-with-claude/embeddings) [Зрение](https://platform.claude.com/docs/ru/build-with-claude/vision) [Поддержка PDF](https://platform.claude.com/docs/ru/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/ru/build-with-claude/files) [Результаты поиска](https://platform.claude.com/docs/ru/build-with-claude/search-results) [Структурированные выходные данные](https://platform.claude.com/docs/ru/build-with-claude/structured-outputs)

Инструменты

[Обзор](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/overview) [Как реализовать использование инструментов](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/implement-tool-use) [Потоковая передача инструментов с высокой детализацией](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/fine-grained-tool-streaming) [Инструмент Bash](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/bash-tool) [Инструмент выполнения кода](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/code-execution-tool) [Программное вызывание инструментов](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/programmatic-tool-calling) [Инструмент компьютерного управления](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/computer-use-tool) [Инструмент текстового редактора](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/text-editor-tool) [Инструмент веб-выборки](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/web-fetch-tool) [Инструмент веб-поиска](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/web-search-tool) [Инструмент памяти](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/memory-tool) [Инструмент поиска инструментов](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/tool-search-tool)

Agent Skills

[Обзор](https://platform.claude.com/docs/ru/agents-and-tools/agent-skills/overview) [Быстрый старт](https://platform.claude.com/docs/ru/agents-and-tools/agent-skills/quickstart) [Лучшие практики](https://platform.claude.com/docs/ru/agents-and-tools/agent-skills/best-practices) [Использование Skills с API](https://platform.claude.com/docs/ru/build-with-claude/skills-guide)

Agent SDK

[Обзор](https://platform.claude.com/docs/ru/agent-sdk/overview) [Быстрый старт](https://platform.claude.com/docs/ru/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/ru/agent-sdk/typescript) [TypeScript V2 (предпросмотр)](https://platform.claude.com/docs/ru/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/ru/agent-sdk/python) [Руководство по миграции](https://platform.claude.com/docs/ru/agent-sdk/migration-guide)

Руководства

[Потоковый ввод](https://platform.claude.com/docs/ru/agent-sdk/streaming-vs-single-mode) [Обработка разрешений](https://platform.claude.com/docs/ru/agent-sdk/permissions) [Управление выполнением с помощью хуков](https://platform.claude.com/docs/ru/agent-sdk/hooks) [Управление сеансами](https://platform.claude.com/docs/ru/agent-sdk/sessions) [Структурированные выходные данные в SDK](https://platform.claude.com/docs/ru/agent-sdk/structured-outputs) [Размещение Agent SDK](https://platform.claude.com/docs/ru/agent-sdk/hosting) [Безопасное развертывание AI-агентов](https://platform.claude.com/docs/ru/agent-sdk/secure-deployment) [Изменение системных промптов](https://platform.claude.com/docs/ru/agent-sdk/modifying-system-prompts) [MCP в SDK](https://platform.claude.com/docs/ru/agent-sdk/mcp) [Пользовательские инструменты](https://platform.claude.com/docs/ru/agent-sdk/custom-tools) [Подагенты в SDK](https://platform.claude.com/docs/ru/agent-sdk/subagents) [Косые команды в SDK](https://platform.claude.com/docs/ru/agent-sdk/slash-commands) [Agent Skills в SDK](https://platform.claude.com/docs/ru/agent-sdk/skills) [Отслеживание затрат и использования](https://platform.claude.com/docs/ru/agent-sdk/cost-tracking) [Списки задач](https://platform.claude.com/docs/ru/agent-sdk/todo-tracking) [Плагины в SDK](https://platform.claude.com/docs/ru/agent-sdk/plugins)

MCP в API

[MCP коннектор](https://platform.claude.com/docs/ru/agents-and-tools/mcp-connector) [Удаленные MCP серверы](https://platform.claude.com/docs/ru/agents-and-tools/remote-mcp-servers)

Claude на платформах третьих сторон

[Amazon Bedrock](https://platform.claude.com/docs/ru/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/ru/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/ru/build-with-claude/claude-on-vertex-ai)

Инженерия промптов

[Обзор](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/overview) [Генератор промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/prompt-generator) [Использование шаблонов промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/prompt-templates-and-variables) [Улучшитель промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/prompt-improver) [Будьте ясны и прямолинейны](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/be-clear-and-direct) [Используйте примеры (многошаговое промптирование)](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/multishot-prompting) [Дайте Claude подумать (CoT)](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/chain-of-thought) [Используйте XML теги](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/use-xml-tags) [Дайте Claude роль (системные промпты)](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/system-prompts) [Предзаполните ответ Claude](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/prefill-claudes-response) [Цепочка сложных промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/chain-prompts) [Советы по длинному контексту](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/long-context-tips) [Советы по расширенному мышлению](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/extended-thinking-tips)

Тестирование и оценка

[Определение критериев успеха](https://platform.claude.com/docs/ru/test-and-evaluate/define-success) [Разработка тестовых случаев](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests) [Использование инструмента оценки](https://platform.claude.com/docs/ru/test-and-evaluate/eval-tool) [Снижение задержки](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-latency)

Усиление защиты

[Снижение галлюцинаций](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [Увеличение согласованности выходных данных](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/increase-consistency) [Смягчение взломов](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [Потоковые отказы](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [Снижение утечки промптов](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Держите Claude в образе](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

Администрирование и мониторинг

[Обзор Admin API](https://platform.claude.com/docs/ru/build-with-claude/administration-api) [API использования и затрат](https://platform.claude.com/docs/ru/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/ru/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Руководства

Управление выполнением с помощью хуков

Руководства

# Перехват и управление поведением агента с помощью hooks

Copy page

Перехватывайте и настраивайте поведение агента в ключевых точках выполнения с помощью hooks

Copy page

Hooks позволяют вам перехватывать выполнение агента в ключевых точках для добавления валидации, логирования, элементов управления безопасностью или пользовательской логики. С помощью hooks вы можете:

- **Блокировать опасные операции** перед их выполнением, такие как деструктивные команды shell или несанкционированный доступ к файлам
- **Логировать и аудировать** каждый вызов инструмента для соответствия, отладки или аналитики
- **Преобразовывать входные и выходные данные** для санитизации данных, внедрения учетных данных или перенаправления путей файлов
- **Требовать одобрение человека** для чувствительных действий, таких как запись в базу данных или вызовы API
- **Отслеживать жизненный цикл сеанса** для управления состоянием, очистки ресурсов или отправки уведомлений

Hook состоит из двух частей:

1. **Функция обратного вызова**: логика, которая выполняется при срабатывании hook
2. **Конфигурация hook**: указывает SDK, какое событие перехватывать (например, `PreToolUse`) и какие инструменты сопоставлять

Следующий пример блокирует агента от изменения файлов `.env`. Сначала определите обратный вызов, который проверяет путь файла, затем передайте его в `query()` для запуска перед любым вызовом инструмента Write или Edit:

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

Это hook `PreToolUse`. Он выполняется перед выполнением инструмента и может блокировать или разрешать операции на основе вашей логики. Остальная часть этого руководства охватывает все доступные hooks, их параметры конфигурации и шаблоны для распространенных случаев использования.

## Доступные hooks

SDK предоставляет hooks для различных этапов выполнения агента. Некоторые hooks доступны в обоих SDK, в то время как другие доступны только в TypeScript, потому что Python SDK их не поддерживает.

| Hook Event | Python SDK | TypeScript SDK | Что его запускает | Пример использования |
| --- | --- | --- | --- | --- |
| `PreToolUse` | Да | Да | Запрос вызова инструмента (может блокировать или изменять) | Блокировать опасные команды shell |
| `PostToolUse` | Да | Да | Результат выполнения инструмента | Логировать все изменения файлов в журнал аудита |
| `PostToolUseFailure` | Нет | Да | Ошибка выполнения инструмента | Обработать или логировать ошибки инструмента |
| `UserPromptSubmit` | Да | Да | Отправка пользовательского запроса | Внедрить дополнительный контекст в запросы |
| `Stop` | Да | Да | Остановка выполнения агента | Сохранить состояние сеанса перед выходом |
| `SubagentStart` | Нет | Да | Инициализация подагента | Отслеживать порождение параллельных задач |
| `SubagentStop` | Да | Да | Завершение подагента | Агрегировать результаты из параллельных задач |
| `PreCompact` | Да | Да | Запрос компактирования разговора | Архивировать полную стенограмму перед суммированием |
| `PermissionRequest` | Нет | Да | Диалог разрешения будет отображен | Пользовательская обработка разрешений |
| `SessionStart` | Нет | Да | Инициализация сеанса | Инициализировать логирование и телеметрию |
| `SessionEnd` | Нет | Да | Завершение сеанса | Очистить временные ресурсы |
| `Notification` | Нет | Да | Сообщения о статусе агента | Отправить обновления статуса агента в Slack или PagerDuty |

## Распространенные случаи использования

Hooks достаточно гибкие для обработки многих различных сценариев. Вот некоторые из наиболее распространенных шаблонов, организованные по категориям.

Безопасность

Безопасность

Логирование

Логирование

Перехват инструментов

Перехват инструментов

Авторизация

Авторизация

- Блокировать опасные команды (такие как `rm -rf /`, деструктивный SQL)
- Проверять пути файлов перед операциями записи
- Применять списки разрешений/запретов для использования инструментов

## Настройка hooks

Чтобы настроить hook для вашего агента, передайте hook в параметр `options.hooks` при вызове `query()`:

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

Опция `hooks` — это словарь (Python) или объект (TypeScript), где:

- **Ключи** — это [имена событий hook](https://platform.claude.com/docs/ru/agent-sdk/hooks#available-hooks) (например, `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **Значения** — это массивы [сопоставителей](https://platform.claude.com/docs/ru/agent-sdk/hooks#matchers), каждый содержащий необязательный шаблон фильтра и ваши [функции обратного вызова](https://platform.claude.com/docs/ru/agent-sdk/hooks#callback-function-inputs)

Ваши функции обратного вызова hook получают [входные данные](https://platform.claude.com/docs/ru/agent-sdk/hooks#input-data) о событии и возвращают [ответ](https://platform.claude.com/docs/ru/agent-sdk/hooks#callback-outputs), чтобы агент знал, разрешить, блокировать или изменить операцию.

### Сопоставители

Используйте сопоставители для фильтрации, какие инструменты запускают ваши обратные вызовы:

| Опция | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | Шаблон регулярного выражения для сопоставления имен инструментов. Встроенные инструменты включают `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebFetch`, `Task` и другие. Инструменты MCP используют шаблон `mcp__<server>__<action>`. |
| `hooks` | `HookCallback[]` | - | Обязательно. Массив функций обратного вызова для выполнения при совпадении шаблона |
| `timeout` | `number` | `60` | Тайм-аут в секундах; увеличьте для hooks, которые выполняют внешние вызовы API |

Используйте шаблон `matcher` для нацеливания на конкретные инструменты, когда это возможно. Сопоставитель с `'Bash'` выполняется только для команд Bash, в то время как опущение шаблона запускает ваши обратные вызовы для каждого вызова инструмента. Обратите внимание, что сопоставители фильтруют только по **имени инструмента**, а не по путям файлов или другим аргументам — для фильтрации по пути файла проверьте `tool_input.file_path` внутри вашего обратного вызова.

Сопоставители применяются только к hooks на основе инструментов (`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`). Для hooks жизненного цикла, таких как `Stop`, `SessionStart` и `Notification`, сопоставители игнорируются и hook срабатывает для всех событий этого типа.

**Обнаружение имен инструментов:** Проверьте массив `tools` в начальном системном сообщении при запуске вашего сеанса или добавьте hook без сопоставителя для логирования всех вызовов инструментов.

**Именование инструментов MCP:** Инструменты MCP всегда начинаются с `mcp__`, за которым следует имя сервера и действие: `mcp__<server>__<action>`. Например, если вы настроите сервер с именем `playwright`, его инструменты будут названы `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click` и т. д. Имя сервера берется из ключа, который вы используете в конфигурации `mcpServers`.

Этот пример использует сопоставитель для запуска hook только для инструментов, изменяющих файлы, при срабатывании события `PreToolUse`:

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

### Входные данные функции обратного вызова

Каждый hook обратного вызова получает три аргумента:

1. **Входные данные** (`dict` / `HookInput`): Детали события. См. [входные данные](https://platform.claude.com/docs/ru/agent-sdk/hooks#input-data) для полей
2. **ID использования инструмента** (`str | None` / `string | null`): Коррелировать события `PreToolUse` и `PostToolUse`
3. **Контекст** (`HookContext`): В TypeScript содержит свойство `signal` (`AbortSignal`) для отмены. Передайте это асинхронным операциям, таким как `fetch()`, чтобы они автоматически отменялись, если hook истечет. В Python этот аргумент зарезервирован для будущего использования.

### Входные данные

Первый аргумент вашего hook обратного вызова содержит информацию о событии. Имена полей идентичны в SDK (оба используют snake\_case).

**Общие поля**, присутствующие во всех типах hooks:

| Поле | Тип | Описание |
| --- | --- | --- |
| `hook_event_name` | `string` | Тип hook (`PreToolUse`, `PostToolUse` и т. д.) |
| `session_id` | `string` | Текущий идентификатор сеанса |
| `transcript_path` | `string` | Путь к стенограмме разговора |
| `cwd` | `string` | Текущий рабочий каталог |

**Поля, специфичные для hook**, варьируются в зависимости от типа hook. Элементы, отмеченные TS, доступны только в TypeScript SDK:

| Поле | Тип | Описание | Hooks |
| --- | --- | --- | --- |
| `tool_name` | `string` | Имя вызываемого инструмента | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_input` | `object` | Аргументы, передаваемые инструменту | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_response` | `any` | Результат, возвращенный из выполнения инструмента | PostToolUse |
| `error` | `string` | Сообщение об ошибке из ошибки выполнения инструмента | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | Была ли ошибка вызвана прерыванием | PostToolUseFailureTS |
| `prompt` | `string` | Текст запроса пользователя | UserPromptSubmit |
| `stop_hook_active` | `boolean` | Обрабатывается ли в данный момент stop hook | Stop, SubagentStop |
| `agent_id` | `string` | Уникальный идентификатор подагента | SubagentStartTS, SubagentStopTS |
| `agent_type` | `string` | Тип/роль подагента | SubagentStartTS |
| `agent_transcript_path` | `string` | Путь к стенограмме разговора подагента | SubagentStopTS |
| `trigger` | `string` | Что вызвало компактирование: `manual` или `auto` | PreCompact |
| `custom_instructions` | `string` | Пользовательские инструкции, предоставленные для компактирования | PreCompact |
| `permission_suggestions` | `array` | Предлагаемые обновления разрешений для инструмента | PermissionRequestTS |
| `source` | `string` | Как был запущен сеанс: `startup`, `resume`, `clear` или `compact` | SessionStartTS |
| `reason` | `string` | Почему сеанс завершился: `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled` или `other` | SessionEndTS |
| `message` | `string` | Сообщение о статусе от агента | NotificationTS |
| `notification_type` | `string` | Тип уведомления: `permission_prompt`, `idle_prompt`, `auth_success` или `elicitation_dialog` | NotificationTS |
| `title` | `string` | Необязательный заголовок, установленный агентом | NotificationTS |

Код ниже определяет hook обратного вызова, который использует `tool_name` и `tool_input` для логирования деталей каждого вызова инструмента:

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### Выходные данные обратного вызова

Ваша функция обратного вызова возвращает объект, который сообщает SDK, как продолжить. Верните пустой объект `{}` для разрешения операции без изменений. Чтобы блокировать, изменять или добавлять контекст к операции, верните объект с полем `hookSpecificOutput`, содержащим ваше решение.

**Поля верхнего уровня** (вне `hookSpecificOutput`):

| Поле | Тип | Описание |
| --- | --- | --- |
| `continue` | `boolean` | Должен ли агент продолжить после этого hook (по умолчанию: `true`) |
| `stopReason` | `string` | Сообщение, показываемое при `continue` равном `false` |
| `suppressOutput` | `boolean` | Скрыть stdout из стенограммы (по умолчанию: `false`) |
| `systemMessage` | `string` | Сообщение, внедренное в разговор для Claude |

**Поля внутри `hookSpecificOutput`**:

| Поле | Тип | Hooks | Описание |
| --- | --- | --- | --- |
| `hookEventName` | `string` | Все | Обязательно. Используйте `input.hook_event_name` для сопоставления текущего события |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | Контролирует, выполняется ли инструмент |
| `permissionDecisionReason` | `string` | PreToolUse | Объяснение, показываемое Claude для решения |
| `updatedInput` | `object` | PreToolUse | Измененный входной сигнал инструмента (требует `permissionDecision: 'allow'`) |
| `additionalContext` | `string` | PostToolUse, UserPromptSubmit, SessionStartTS, SubagentStartTS | Контекст, добавленный в разговор |

Этот пример блокирует операции записи в каталог `/etc` при внедрении системного сообщения для напоминания Claude о безопасных практиках работы с файлами:

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

#### Поток принятия решения о разрешении

Когда применяются несколько hooks или правил разрешений, SDK оценивает их в этом порядке:

1. **Правила Deny** проверяются первыми (любое совпадение = немедленный отказ).
2. **Правила Ask** проверяются вторыми.
3. **Правила Allow** проверяются третьими.
4. **По умолчанию Ask**, если ничего не совпадает.

Если какой-либо hook возвращает `deny`, операция блокируется — другие hooks, возвращающие `allow`, не переопределят это.

#### Блокировать инструмент

Верните решение deny для предотвращения выполнения инструмента:

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

#### Изменить входной сигнал инструмента

Верните обновленный входной сигнал для изменения того, что получает инструмент:

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

При использовании `updatedInput` вы также должны включить `permissionDecision`. Всегда возвращайте новый объект вместо мутирования исходного `tool_input`.

#### Добавить системное сообщение

Внедрите контекст в разговор:

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### Автоматически одобрять конкретные инструменты

Обойти запросы разрешений для доверенных инструментов. Это полезно, когда вы хотите, чтобы определенные операции выполнялись без подтверждения пользователя:

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

Поле `permissionDecision` принимает три значения: `'allow'` (автоматическое одобрение), `'deny'` (блокировка) или `'ask'` (запрос подтверждения).

## Обработка продвинутых сценариев

Эти шаблоны помогут вам создавать более сложные системы hooks для сложных случаев использования.

### Цепочка нескольких hooks

Hooks выполняются в порядке их появления в массиве. Сосредоточьте каждый hook на одной ответственности и свяжите несколько hooks для сложной логики. Этот пример запускает все четыре hook для каждого вызова инструмента (сопоставитель не указан):

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

### Сопоставители, специфичные для инструмента, с регулярными выражениями

Используйте шаблоны регулярных выражений для сопоставления нескольких инструментов:

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

Сопоставители сопоставляют только **имена инструментов**, а не пути файлов или другие аргументы. Для фильтрации по пути файла проверьте `tool_input.file_path` внутри вашего hook обратного вызова.

### Отслеживание активности подагента

Используйте hooks `SubagentStop` для мониторинга завершения подагента. `tool_use_id` помогает коррелировать вызовы родительского агента с их подагентами:

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

### Асинхронные операции в hooks

Hooks могут выполнять асинхронные операции, такие как HTTP-запросы. Обрабатывайте ошибки корректно, перехватывая исключения вместо их выброса. В TypeScript передайте `signal` в `fetch()`, чтобы запрос отменялся, если hook истечет:

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

### Отправка уведомлений (только TypeScript)

Используйте hooks `Notification` для получения обновлений статуса от агента и их перенаправления во внешние сервисы, такие как Slack или панели мониторинга:

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

## Исправление распространенных проблем

Этот раздел охватывает распространенные проблемы и способы их решения.

### Hook не срабатывает

- Проверьте, что имя события hook правильное и чувствительно к регистру (`PreToolUse`, а не `preToolUse`)
- Проверьте, что ваш шаблон сопоставителя точно совпадает с именем инструмента
- Убедитесь, что hook находится под правильным типом события в `options.hooks`
- Для hooks `SubagentStop`, `Stop`, `SessionStart`, `SessionEnd` и `Notification` сопоставители игнорируются. Эти hooks срабатывают для всех событий этого типа.
- Hooks могут не срабатывать, когда агент достигает лимита [`max_turns`](https://platform.claude.com/docs/ru/agent-sdk/python#configuration-options), потому что сеанс завершается перед выполнением hooks

### Сопоставитель не фильтрует как ожидается

Сопоставители сопоставляют только **имена инструментов**, а не пути файлов или другие аргументы. Для фильтрации по пути файла проверьте `tool_input.file_path` внутри вашего hook:

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // Skip non-markdown files
  // Process markdown files...
};
```

### Тайм-аут hook

- Увеличьте значение `timeout` в конфигурации `HookMatcher`
- Используйте `AbortSignal` из третьего аргумента обратного вызова для корректной обработки отмены в TypeScript

### Инструмент заблокирован неожиданно

- Проверьте все hooks `PreToolUse` на возвращение `permissionDecision: 'deny'`
- Добавьте логирование в ваши hooks, чтобы увидеть, какие `permissionDecisionReason` они возвращают
- Проверьте, что шаблоны сопоставителей не слишком широкие (пустой сопоставитель совпадает со всеми инструментами)

### Измененный входной сигнал не применяется

- Убедитесь, что `updatedInput` находится внутри `hookSpecificOutput`, а не на верхнем уровне:







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- Вы также должны вернуть `permissionDecision: 'allow'` для применения изменения входного сигнала

- Включите `hookEventName` в `hookSpecificOutput` для идентификации типа hook для выходных данных


### Hooks сеанса недоступны

Hooks `SessionStart`, `SessionEnd` и `Notification` доступны только в TypeScript SDK. Python SDK не поддерживает эти события из-за ограничений установки.

### Запросы разрешений подагента умножаются

При порождении нескольких подагентов каждый может запросить разрешения отдельно. Подагенты не наследуют автоматически разрешения родительского агента. Чтобы избежать повторяющихся запросов, используйте hooks `PreToolUse` для автоматического одобрения конкретных инструментов или настройте правила разрешений, которые применяются к сеансам подагентов.

### Рекурсивные циклы hook с подагентами

Hook `UserPromptSubmit`, который порождает подагентов, может создать бесконечные циклы, если эти подагенты запускают тот же hook. Чтобы предотвратить это:

- Проверьте наличие индикатора подагента во входных данных hook перед порождением
- Используйте поле `parent_tool_use_id` для обнаружения, находитесь ли вы уже в контексте подагента
- Ограничьте hooks для запуска только для сеанса агента верхнего уровня

### systemMessage не отображается в выходных данных

Поле `systemMessage` добавляет контекст в разговор, который видит модель, но оно может не отображаться во всех режимах вывода SDK. Если вам нужно отобразить решения hook вашему приложению, логируйте их отдельно или используйте выделенный канал вывода.

## Узнать больше

- [Разрешения](https://platform.claude.com/docs/ru/agent-sdk/permissions): контролируйте, что может делать ваш агент
- [Пользовательские инструменты](https://platform.claude.com/docs/ru/agent-sdk/custom-tools): создавайте инструменты для расширения возможностей агента
- [Справочник TypeScript SDK](https://platform.claude.com/docs/ru/agent-sdk/typescript)
- [Справочник Python SDK](https://platform.claude.com/docs/ru/agent-sdk/python)

- [Доступные hooks](https://platform.claude.com/docs/ru/agent-sdk/hooks#dostupnye-hooks)
- [Распространенные случаи использования](https://platform.claude.com/docs/ru/agent-sdk/hooks#rasprostranennye-sluchai-ispolzovaniya)
- [Настройка hooks](https://platform.claude.com/docs/ru/agent-sdk/hooks#nastroyka-hooks)
- [Сопоставители](https://platform.claude.com/docs/ru/agent-sdk/hooks#sopostaviteli)
- [Входные данные функции обратного вызова](https://platform.claude.com/docs/ru/agent-sdk/hooks#vkhodnye-dannye-funktsii-obratnogo-vyzova)
- [Входные данные](https://platform.claude.com/docs/ru/agent-sdk/hooks#vkhodnye-dannye)
- [Выходные данные обратного вызова](https://platform.claude.com/docs/ru/agent-sdk/hooks#vykhodnye-dannye-obratnogo-vyzova)
- [Обработка продвинутых сценариев](https://platform.claude.com/docs/ru/agent-sdk/hooks#obrabotka-prodvinutykh-stsenariev)
- [Цепочка нескольких hooks](https://platform.claude.com/docs/ru/agent-sdk/hooks#tsepochka-neskolkikh-hooks)
- [Сопоставители, специфичные для инструмента, с регулярными выражениями](https://platform.claude.com/docs/ru/agent-sdk/hooks#sopostaviteli-spetsifichnye-dlya-instrumenta-s-regulyarnymi-vyrazheniyami)
- [Отслеживание активности подагента](https://platform.claude.com/docs/ru/agent-sdk/hooks#otslezhivanie-aktivnosti-podagenta)
- [Асинхронные операции в hooks](https://platform.claude.com/docs/ru/agent-sdk/hooks#asinkhronnye-operatsii-v-hooks)
- [Отправка уведомлений (только TypeScript)](https://platform.claude.com/docs/ru/agent-sdk/hooks#otpravka-uvedomleniy-tolko-type-script)
- [Исправление распространенных проблем](https://platform.claude.com/docs/ru/agent-sdk/hooks#ispravlenie-rasprostranennykh-problem)
- [Hook не срабатывает](https://platform.claude.com/docs/ru/agent-sdk/hooks#hook-ne-srabatyvaet)
- [Сопоставитель не фильтрует как ожидается](https://platform.claude.com/docs/ru/agent-sdk/hooks#sopostavitel-ne-filtruet-kak-ozhidaetsya)
- [Тайм-аут hook](https://platform.claude.com/docs/ru/agent-sdk/hooks#taym-aut-hook)
- [Инструмент заблокирован неожиданно](https://platform.claude.com/docs/ru/agent-sdk/hooks#instrument-zablokirovan-neozhidanno)
- [Измененный входной сигнал не применяется](https://platform.claude.com/docs/ru/agent-sdk/hooks#izmenenniy-vkhodnoy-signal-ne-primenyaetsya)
- [Hooks сеанса недоступны](https://platform.claude.com/docs/ru/agent-sdk/hooks#hooks-seansa-nedostupny)
- [Запросы разрешений подагента умножаются](https://platform.claude.com/docs/ru/agent-sdk/hooks#zaprosy-razresheniy-podagenta-umnozhayutsya)
- [Рекурсивные циклы hook с подагентами](https://platform.claude.com/docs/ru/agent-sdk/hooks#rekursivnye-tsikly-hook-s-podagentami)
- [systemMessage не отображается в выходных данных](https://platform.claude.com/docs/ru/agent-sdk/hooks#system-message-ne-otobrazhaetsya-v-vykhodnykh-dannykh)
- [Узнать больше](https://platform.claude.com/docs/ru/agent-sdk/hooks#uznat-bolshe)

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