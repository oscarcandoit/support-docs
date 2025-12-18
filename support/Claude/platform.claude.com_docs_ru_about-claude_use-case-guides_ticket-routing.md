---
url: "https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing"
title: "Маршрутизация заявок - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

Search...

⌘K

Ресурсы

[Обзор](https://platform.claude.com/docs/ru/resources/overview) [Глоссарий](https://platform.claude.com/docs/ru/about-claude/glossary) [Системные промпты](https://platform.claude.com/docs/ru/release-notes/system-prompts)

Варианты использования

[Обзор](https://platform.claude.com/docs/ru/about-claude/use-case-guides/overview) [Маршрутизация билетов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing) [Агент поддержки клиентов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat) [Модерация контента](https://platform.claude.com/docs/ru/about-claude/use-case-guides/content-moderation) [Резюме юридических документов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization)

Библиотека промптов

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Варианты использования

Маршрутизация билетов

Варианты использования

# Маршрутизация заявок

Copy page

Это руководство объясняет, как использовать передовые возможности понимания естественного языка Claude для классификации заявок службы поддержки клиентов в масштабе на основе намерений клиентов, срочности, приоритизации, профиля клиента и многого другого.

Copy page

## Определите, следует ли использовать Claude для маршрутизации заявок

Вот некоторые ключевые индикаторы того, что вам следует использовать LLM, такую как Claude, вместо традиционных подходов машинного обучения для вашей задачи классификации:

### У вас ограниченное количество размеченных обучающих данных

### Ваши категории классификации, вероятно, будут изменяться или развиваться со временем

### Вам нужно обрабатывать сложные, неструктурированные текстовые входные данные

### Ваши правила классификации основаны на семантическом понимании

### Вам требуется интерпретируемое обоснование для решений классификации

### Вы хотите более эффективно обрабатывать крайние случаи и неоднозначные заявки

### Вам нужна многоязычная поддержка без поддержания отдельных моделей

* * *

## Создайте и разверните ваш рабочий процесс поддержки LLM

### Поймите ваш текущий подход к поддержке

Прежде чем погружаться в автоматизацию, крайне важно понять вашу существующую систему заявок. Начните с исследования того, как ваша команда поддержки в настоящее время обрабатывает маршрутизацию заявок.

Рассмотрите такие вопросы, как:

- Какие критерии используются для определения того, какое SLA/предложение услуг применяется?
- Используется ли маршрутизация заявок для определения того, к какому уровню поддержки или специалисту по продукту направляется заявка?
- Есть ли уже какие-либо автоматизированные правила или рабочие процессы? В каких случаях они терпят неудачу?
- Как обрабатываются крайние случаи или неоднозначные заявки?
- Как команда расставляет приоритеты заявок?

Чем больше вы знаете о том, как люди обрабатывают определенные случаи, тем лучше вы сможете работать с Claude для выполнения задачи.

### Определите категории намерений пользователей

Хорошо определенный список категорий намерений пользователей имеет решающее значение для точной классификации заявок поддержки с помощью Claude. Способность Claude эффективно направлять заявки в вашей системе прямо пропорциональна тому, насколько хорошо определены категории вашей системы.

Вот некоторые примеры категорий намерений пользователей и подкатегорий.

### Техническая проблема

### Управление аккаунтом

### Информация о продукте

### Руководство пользователя

### Обратная связь

### Связанное с заказом

### Запрос услуги

### Проблемы безопасности

### Соответствие и правовые вопросы

### Экстренная поддержка

### Обучение и образование

### Интеграция и API

В дополнение к намерению, маршрутизация и приоритизация заявок также могут зависеть от других факторов, таких как срочность, тип клиента, SLA или язык. Обязательно учитывайте другие критерии маршрутизации при создании вашей автоматизированной системы маршрутизации.

### Установите критерии успеха

Работайте с вашей командой поддержки, чтобы [определить четкие критерии успеха](https://platform.claude.com/docs/ru/test-and-evaluate/define-success) с измеримыми показателями, пороговыми значениями и целями.

Вот некоторые стандартные критерии и показатели при использовании LLM для маршрутизации заявок поддержки:

### Согласованность классификации

### Скорость адаптации

### Многоязычная обработка

### Обработка крайних случаев

### Смягчение предвзятости

### Эффективность промпта

### Оценка объяснимости

Вот некоторые общие критерии успеха, которые могут быть полезны независимо от того, используется ли LLM:

### Точность маршрутизации

### Время до назначения

### Частота перенаправления

### Частота разрешения при первом контакте

### Среднее время обработки

### Оценки удовлетворенности клиентов

### Частота эскалации

### Производительность агента

### Частота отклонения самообслуживания

### Стоимость на заявку

### Выберите правильную модель Claude

Выбор модели зависит от компромиссов между стоимостью, точностью и временем отклика.

Многие клиенты обнаружили, что `claude-3-5-haiku-20241022` является идеальной моделью для маршрутизации заявок, поскольку это самая быстрая и наиболее экономически эффективная модель в семействе Claude 3, при этом все еще обеспечивающая отличные результаты. Если ваша проблема классификации требует глубокой экспертизы в предметной области или большого объема категорий намерений сложного рассуждения, вы можете выбрать [более крупную модель Sonnet](https://platform.claude.com/docs/ru/about-claude/models).

### Создайте сильный промпт

Маршрутизация заявок \- это тип задачи классификации. Claude анализирует содержимое заявки поддержки и классифицирует ее в предопределенные категории на основе типа проблемы, срочности, требуемой экспертизы или других соответствующих факторов.

Давайте напишем промпт классификации заявок. Наш первоначальный промпт должен содержать содержимое пользовательского запроса и возвращать как рассуждение, так и намерение.

Попробуйте [генератор промптов](https://platform.claude.com/docs/ru/prompt-generator) в [консоли Claude](https://platform.claude.com/login), чтобы Claude написал первый черновик для вас.

Вот пример промпта классификации маршрутизации заявок:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system. Your task is to analyze customer support requests and output the appropriate classification intent for each request, along with your reasoning.

        Here is the customer support request you need to classify:

        <request>{ticket_contents}</request>

        Please carefully analyze the above request to determine the customer's core intent and needs. Consider what the customer is asking for has concerns about.

        First, write out your reasoning and analysis of how to classify this request inside <reasoning> tags.

        Then, output the appropriate classification label for the request inside a <intent> tag. The valid intents are:
        <intents>
        <intent>Support, Feedback, Complaint</intent>
        <intent>Order Tracking</intent>
        <intent>Refund/Exchange</intent>
        </intents>

        A request may have ONLY ONE applicable intent. Only include the intent that is most applicable to the request.

        As an example, consider the following request:
        <request>Hello! I had high-speed fiber internet installed on Saturday and my installer, Kevin, was absolutely fantastic! Where can I send my positive review? Thanks for your help!</request>

        Here is an example of how your output should be formatted (for the above example request):
        <reasoning>The user seeks information in order to leave positive feedback.</reasoning>
        <intent>Support, Feedback, Complaint</intent>

        Here are a few more examples:
        <examples>
        <example 2>
        Example 2 Input:
        <request>I wanted to write and personally thank you for the compassion you showed towards my family during my father's funeral this past weekend. Your staff was so considerate and helpful throughout this whole process; it really took a load off our shoulders. The visitation brochures were beautiful. We'll never forget the kindness you showed us and we are so appreciative of how smoothly the proceedings went. Thank you, again, Amarantha Hill on behalf of the Hill Family.</request>

        Example 2 Output:
        <reasoning>User leaves a positive review of their experience.</reasoning>
        <intent>Support, Feedback, Complaint</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        Example 9 Input:
        <request>Your website keeps sending ad-popups that block the entire screen. It took me twenty minutes just to finally find the phone number to call and complain. How can I possibly access my account information with all of these popups? Can you access my account for me, since your website is broken? I need to know what the address is on file.</request>

        Example 9 Output:
        <reasoning>The user requests help accessing their web account information.</reasoning>
        <intent>Support, Feedback, Complaint</intent>
        </example 9>

        Remember to always include your classification reasoning before your actual intent output. The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
        """
```

Давайте разберем ключевые компоненты этого промпта:

- Мы используем f-строки Python для создания шаблона промпта, позволяя вставлять `ticket_contents` в теги `<request>`.
- Мы даем Claude четко определенную роль как системы классификации, которая тщательно анализирует содержимое заявки для определения основного намерения и потребностей клиента.
- Мы инструктируем Claude о правильном форматировании вывода, в данном случае предоставлять свое рассуждение и анализ внутри тегов `<reasoning>`, за которыми следует соответствующая метка классификации внутри тегов `<intent>`.
- Мы указываем действительные категории намерений: "Support, Feedback, Complaint", "Order Tracking" и "Refund/Exchange".
- Мы включаем несколько примеров (также известных как few-shot prompting) для иллюстрации того, как должен быть отформатирован вывод, что улучшает точность и согласованность.

Причина, по которой мы хотим, чтобы Claude разделил свой ответ на различные разделы XML-тегов, заключается в том, чтобы мы могли использовать регулярные выражения для отдельного извлечения рассуждения и намерения из вывода. Это позволяет нам создавать целевые следующие шаги в рабочем процессе маршрутизации заявок, такие как использование только намерения для решения, какому лицу направить заявку.

### Разверните ваш промпт

Трудно знать, насколько хорошо работает ваш промпт, не развернув его в тестовой производственной среде и [не проведя оценки](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests).

Давайте построим структуру развертывания. Начните с определения сигнатуры метода для обертывания нашего вызова Claude. Мы возьмем метод, который уже начали писать, который имеет `ticket_contents` в качестве входных данных, и теперь вернем кортеж `reasoning` и `intent` в качестве вывода. Если у вас есть существующая автоматизация, использующая традиционное машинное обучение, вам захочется следовать этой сигнатуре метода вместо этого.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system.
        ...
        ... The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
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

Этот код:

- Импортирует библиотеку Anthropic и создает экземпляр клиента, используя ваш API-ключ.
- Определяет функцию `classify_support_request`, которая принимает строку `ticket_contents`.
- Отправляет `ticket_contents` в Claude для классификации, используя `classification_prompt`
- Возвращает `reasoning` и `intent` модели, извлеченные из ответа.

Поскольку нам нужно дождаться генерации всего текста рассуждения и намерения перед парсингом, мы устанавливаем `stream=False` (по умолчанию).

* * *

## Оцените ваш промпт

Промптинг часто требует тестирования и оптимизации, чтобы быть готовым к производству. Чтобы определить готовность вашего решения, оцените производительность на основе критериев успеха и пороговых значений, которые вы установили ранее.

Для проведения вашей оценки вам понадобятся тестовые случаи для ее запуска. Остальная часть этого руководства предполагает, что вы уже [разработали ваши тестовые случаи](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests).

### Создайте функцию оценки

Наш пример оценки для этого руководства измеряет производительность Claude по трем ключевым метрикам:

- Точность
- Стоимость на классификацию

Вам может потребоваться оценить Claude по другим осям в зависимости от того, какие факторы важны для вас.

Для оценки этого мы сначала должны изменить скрипт, который мы написали, и добавить функцию для сравнения предсказанного намерения с фактическим намерением и вычисления процента правильных предсказаний. Мы также должны добавить функциональность расчета стоимости и измерения времени.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""You will be acting as a customer support ticket classification system.
        ...
        ...The reasoning should be enclosed in <reasoning> tags and the intent in <intent> tags. Return only the reasoning and the intent.
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

Давайте разберем изменения, которые мы внесли:

- Мы добавили `actual_intent` из наших тестовых случаев в метод `classify_support_request` и настроили сравнение для оценки того, соответствует ли классификация намерения Claude нашей золотой классификации намерения.
- Мы извлекли статистику использования для API-вызова для расчета стоимости на основе использованных входных и выходных токенов

### Запустите вашу оценку

Правильная оценка требует четких пороговых значений и показателей для определения того, что является хорошим результатом. Скрипт выше даст нам значения времени выполнения для точности, времени отклика и стоимости на классификацию, но нам все еще нужны четко установленные пороговые значения. Например:

- **Точность:** 95% (из 100 тестов)
- **Стоимость на классификацию:** 50% снижение в среднем (по 100 тестам) от текущего метода маршрутизации

Наличие этих пороговых значений позволяет вам быстро и легко определить в масштабе и с беспристрастным эмпиризмом, какой метод лучше всего подходит для вас и какие изменения могут потребоваться для лучшего соответствия вашим требованиям.

* * *

## Улучшите производительность

В сложных сценариях может быть полезно рассмотреть дополнительные стратегии для улучшения производительности помимо стандартных [техник инженерии промптов](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/overview) и [стратегий реализации ограждений](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Вот некоторые распространенные сценарии:

### Используйте таксономическую иерархию для случаев с 20+ категориями намерений

По мере роста количества классов также расширяется количество требуемых примеров, потенциально делая промпт громоздким. В качестве альтернативы вы можете рассмотреть реализацию иерархической системы классификации, используя смесь классификаторов.

1. Организуйте ваши намерения в структуру таксономического дерева.
2. Создайте серию классификаторов на каждом уровне дерева, обеспечивая каскадный подход маршрутизации.

Например, у вас может быть классификатор верхнего уровня, который широко категоризирует заявки на "Технические проблемы", "Вопросы биллинга" и "Общие запросы". Каждая из этих категорий может затем иметь свой собственный подклассификатор для дальнейшего уточнения классификации.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **Плюсы \- большая нюансировка и точность:** Вы можете создать разные промпты для каждого родительского пути, позволяя более целевую и контекстно-специфическую классификацию. Это может привести к улучшенной точности и более нюансированной обработке запросов клиентов.

- **Минусы \- увеличенная задержка:** Имейте в виду, что множественные классификаторы могут привести к увеличенной задержке, и мы рекомендуем реализовать этот подход с нашей самой быстрой моделью, Haiku.


### Используйте векторные базы данных и поиск по сходству для обработки сильно варьирующихся заявок

Несмотря на то, что предоставление примеров является наиболее эффективным способом улучшения производительности, если запросы поддержки сильно варьируются, может быть трудно включить достаточно примеров в один промпт.

В этом сценарии вы могли бы использовать векторную базу данных для поиска по сходству из набора данных примеров и извлечения наиболее релевантных примеров для данного запроса.

Этот подход, подробно описанный в нашем [рецепте классификации](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb), показал улучшение производительности с 71% точности до 93% точности.

### Специально учитывайте ожидаемые крайние случаи

Вот некоторые сценарии, где Claude может неправильно классифицировать заявки (могут быть другие, уникальные для вашей ситуации). В этих сценариях рассмотрите предоставление явных инструкций или примеров в промпте того, как Claude должен обрабатывать крайний случай:

### Клиенты делают неявные запросы

### Claude приоритизирует эмоции над намерением

### Множественные проблемы вызывают путаницу в приоритизации проблем

* * *

## Интегрируйте Claude в ваш больший рабочий процесс поддержки

Правильная интеграция требует, чтобы вы приняли некоторые решения относительно того, как ваш скрипт маршрутизации заявок на основе Claude вписывается в архитектуру вашей большей системы маршрутизации заявок. Есть два способа, которыми вы могли бы это сделать:

- **На основе push:**Система заявок поддержки, которую вы используете (например, Zendesk), запускает ваш код, отправляя событие webhook в ваш сервис маршрутизации, который затем классифицирует намерение и направляет его.
  - Этот подход более масштабируем в веб-среде, но требует от вас предоставления публичной конечной точки.
- **На основе pull:**Ваш код извлекает последние заявки на основе заданного расписания и направляет их во время извлечения.
  - Этот подход легче реализовать, но может делать ненужные вызовы к системе заявок поддержки, когда частота извлечения слишком высока, или может быть чрезмерно медленным, когда частота извлечения слишком низка.

Для любого из этих подходов вам нужно будет обернуть ваш скрипт в сервис. Выбор подхода зависит от того, какие API предоставляет ваша система заявок поддержки.

* * *

[Кулинарная книга классификации\\
\\
Посетите нашу кулинарную книгу классификации для получения дополнительного примера кода и подробного руководства по оценке.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Консоль Claude\\
\\
Начните создавать и оценивать ваш рабочий процесс в консоли Claude.](https://platform.claude.com/dashboard)

- [Определите, следует ли использовать Claude для маршрутизации заявок](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#opredelite-sleduet-li-ispolzovat-claude-dlya-marshrutizatsii-zayavok)
- [Создайте и разверните ваш рабочий процесс поддержки LLM](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#sozdayte-i-razvernite-vash-rabochiy-protsess-podderzhki-llm)
- [Поймите ваш текущий подход к поддержке](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#poymite-vash-tekuschiy-podkhod-k-podderzhke)
- [Определите категории намерений пользователей](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#opredelite-kategorii-namereniy-polzovateley)
- [Установите критерии успеха](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#ustanovite-kriterii-uspekha)
- [Выберите правильную модель Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#vyberite-pravilnuyu-model-claude)
- [Создайте сильный промпт](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#sozdayte-silniy-prompt)
- [Разверните ваш промпт](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#razvernite-vash-prompt)
- [Оцените ваш промпт](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#otsenite-vash-prompt)
- [Создайте функцию оценки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#sozdayte-funktsiyu-otsenki)
- [Запустите вашу оценку](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#zapustite-vashu-otsenku)
- [Улучшите производительность](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#uluchshite-proizvoditelnost)
- [Используйте таксономическую иерархию для случаев с 20+ категориями намерений](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#ispolzuyte-taksonomicheskuyu-ierarkhiyu-dlya-sluchaev-s-20-kategoriyami-namereniy)
- [Используйте векторные базы данных и поиск по сходству для обработки сильно варьирующихся заявок](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#ispolzuyte-vektornye-bazy-dannykh-i-poisk-po-skhodstvu-dlya-obrabotki-silno-variruyuschikhsya-zayavok)
- [Специально учитывайте ожидаемые крайние случаи](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#spetsialno-uchityvayte-ozhidaemye-kraynie-sluchai)
- [Интегрируйте Claude в ваш больший рабочий процесс поддержки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/ticket-routing#integriruyte-claude-v-vash-bolshiy-rabochiy-protsess-podderzhki)

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