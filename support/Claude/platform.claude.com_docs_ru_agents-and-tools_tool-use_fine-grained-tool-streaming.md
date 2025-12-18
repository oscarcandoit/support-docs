---
url: "https://platform.claude.com/docs/ru/agents-and-tools/tool-use/fine-grained-tool-streaming"
title: "Потоковая передача инструментов с детальной детализацией - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fagents-and-tools%2Ftool-use%2Ffine-grained-tool-streaming)

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

Инструменты

Потоковая передача инструментов с высокой детализацией

Инструменты

# Потоковая передача инструментов с детальной детализацией

Copy page

Использование инструментов теперь поддерживает потоковую передачу параметров с детальной детализацией, что позволяет разработчикам передавать параметры инструментов без буферизации и валидации JSON, снижая задержку при получении больших параметров.

Copy page

Использование инструментов теперь поддерживает потоковую передачу параметров с детальной детализацией [streaming](https://platform.claude.com/docs/ru/build-with-claude/streaming). Это позволяет разработчикам передавать параметры инструментов без буферизации / валидации JSON, снижая задержку при получении больших параметров.

Потоковая передача инструментов с детальной детализацией доступна через Claude API, AWS Bedrock, Google Cloud's Vertex AI и Microsoft Foundry.

Потоковая передача инструментов с детальной детализацией — это бета-функция. Пожалуйста, убедитесь, что вы оценили ваши ответы перед использованием в производстве.

Пожалуйста, используйте [эту форму](https://forms.gle/D4Fjr7GvQRzfTZT96) для предоставления отзывов о качестве ответов модели, самом API или качестве документации — мы с нетерпением ждем ваших отзывов!

При использовании потоковой передачи инструментов с детальной детализацией вы можете потенциально получить недействительные или неполные входные данные JSON. Пожалуйста, убедитесь, что вы учитываете эти граничные случаи в вашем коде.

## Как использовать потоковую передачу инструментов с детальной детализацией

Чтобы использовать эту бета-функцию, просто добавьте бета-заголовок `fine-grained-tool-streaming-2025-05-14` к запросу использования инструмента и включите потоковую передачу.

Вот пример использования потоковой передачи инструментов с детальной детализацией с помощью API:

Shell

```
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "anthropic-beta: fine-grained-tool-streaming-2025-05-14" \
  -d '{
    "model": "claude-sonnet-4-5",
    "max_tokens": 65536,
    "tools": [\
      {\
        "name": "make_file",\
        "description": "Write text to a file",\
        "input_schema": {\
          "type": "object",\
          "properties": {\
            "filename": {\
              "type": "string",\
              "description": "The filename to write text to"\
            },\
            "lines_of_text": {\
              "type": "array",\
              "description": "An array of lines of text to write to the file"\
            }\
          },\
          "required": ["filename", "lines_of_text"]\
        }\
      }\
    ],
    "messages": [\
      {\
        "role": "user",\
        "content": "Can you write a long poem and make a file called poem.txt?"\
      }\
    ],
    "stream": true
  }' | jq '.usage'
```

В этом примере потоковая передача инструментов с детальной детализацией позволяет Claude передавать строки длинного стихотворения в вызов инструмента `make_file` без буферизации для проверки того, является ли параметр `lines_of_text` действительным JSON. Это означает, что вы можете видеть поток параметров по мере его поступления, без необходимости ждать буферизации и валидации всего параметра.

При потоковой передаче инструментов с детальной детализацией фрагменты использования инструментов начинают передаваться быстрее и часто бывают длиннее и содержат меньше разрывов слов. Это связано с различиями в поведении разбиения на фрагменты.

Пример:

Без потоковой передачи с детальной детализацией (задержка 15 сек):

```
Chunk 1: '{"'
Chunk 2: 'query": "Ty'
Chunk 3: 'peScri'
Chunk 4: 'pt 5.0 5.1 '
Chunk 5: '5.2 5'
Chunk 6: '.3'
Chunk 8: ' new f'
Chunk 9: 'eatur'
...
```

С потоковой передачей с детальной детализацией (задержка 3 сек):

```
Chunk 1: '{"query": "TypeScript 5.0 5.1 5.2 5.3'
Chunk 2: ' new features comparison'
```

Поскольку потоковая передача с детальной детализацией отправляет параметры без буферизации или валидации JSON, нет гарантии, что результирующий поток завершится действительной строкой JSON.
В частности, если достигнута [причина остановки](https://platform.claude.com/docs/ru/build-with-claude/handling-stop-reasons)`max_tokens`, поток может завершиться в середине параметра и может быть неполным. Обычно вам придется написать специальную поддержку для обработки случаев, когда достигнут `max_tokens`.

## Обработка недействительного JSON в ответах инструментов

При использовании потоковой передачи инструментов с детальной детализацией вы можете получить недействительный или неполный JSON от модели. Если вам нужно передать этот недействительный JSON обратно модели в блоке ответа об ошибке, вы можете обернуть его в объект JSON, чтобы обеспечить правильную обработку (с разумным ключом). Например:

```
{
  "INVALID_JSON": "<your invalid json string>"
}
```

Этот подход помогает модели понять, что содержимое является недействительным JSON, при этом сохраняя исходные неправильно сформированные данные для целей отладки.

При обертывании недействительного JSON убедитесь, что вы правильно экранировали все кавычки или специальные символы в строке недействительного JSON, чтобы сохранить действительную структуру JSON в объекте-оболочке.

- [Как использовать потоковую передачу инструментов с детальной детализацией](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/fine-grained-tool-streaming#kak-ispolzovat-potokovuyu-peredachu-instrumentov-s-detalnoy-detalizatsiey)
- [Обработка недействительного JSON в ответах инструментов](https://platform.claude.com/docs/ru/agents-and-tools/tool-use/fine-grained-tool-streaming#obrabotka-nedeystvitelnogo-json-v-otvetakh-instrumentov)

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