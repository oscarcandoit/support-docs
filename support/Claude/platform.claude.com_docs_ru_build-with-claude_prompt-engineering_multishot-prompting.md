---
url: "https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/multishot-prompting"
title: "Используйте примеры (многошаговое промптирование) для управления поведением Claude - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fbuild-with-claude%2Fprompt-engineering%2Fmultishot-prompting)

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

Инженерия промптов

Используйте примеры (многошаговое промптирование)

Инженерия промптов

# Используйте примеры (многошаговое промптирование) для управления поведением Claude

Copy page

Узнайте, как использовать примеры и многошаговое промптирование для улучшения точности и согласованности ответов Claude.

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

Примеры — это ваше секретное оружие для получения от Claude именно того, что вам нужно. Предоставляя несколько хорошо продуманных примеров в вашем промпте, вы можете драматически улучшить точность, согласованность и качество выходных данных Claude.
Эта техника, известная как few-shot или многошаговое промптирование, особенно эффективна для задач, требующих структурированных выходных данных или соответствия определённым форматам.

**Усильте ваши промпты**: Включите 3-5 разнообразных, релевантных примеров, чтобы показать Claude именно то, что вам нужно. Больше примеров = лучшая производительность, особенно для сложных задач.

## Почему использовать примеры?

- **Точность**: Примеры снижают неправильное толкование инструкций.
- **Согласованность**: Примеры обеспечивают единообразную структуру и стиль.
- **Производительность**: Хорошо подобранные примеры повышают способность Claude справляться со сложными задачами.

## Создание эффективных примеров

Для максимальной эффективности убедитесь, что ваши примеры:

- **Релевантны**: Ваши примеры отражают ваш реальный случай использования.
- **Разнообразны**: Ваши примеры охватывают граничные случаи и потенциальные проблемы, и достаточно различаются, чтобы Claude не случайно не подхватил непредусмотренные закономерности.
- **Ясны**: Ваши примеры обёрнуты в теги `<example>` (если несколько, вложены в теги `<examples>`) для структуры.

Попросите Claude оценить ваши примеры на релевантность, разнообразие или ясность. Или попросите Claude создать больше примеров на основе вашего исходного набора.

### Пример: Анализ отзывов клиентов

* * *

[Библиотека промптов\\
\\
Вдохновитесь тщательно подобранной коллекцией промптов для различных задач и случаев использования.](https://platform.claude.com/docs/ru/resources/prompt-library/library) [Учебник по промптированию на GitHub\\
\\
Полный учебник с примерами, охватывающий концепции инженерии промптов, найденные в нашей документации.](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Учебник по промптированию в Google Sheets\\
\\
Облегчённая версия нашего учебника по инженерии промптов через интерактивную электронную таблицу.](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [Почему использовать примеры?](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/multishot-prompting#pochemu-ispolzovat-primery)
- [Создание эффективных примеров](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/multishot-prompting#sozdanie-effektivnykh-primerov)

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