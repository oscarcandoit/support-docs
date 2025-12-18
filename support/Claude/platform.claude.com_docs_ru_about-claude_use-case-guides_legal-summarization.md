---
url: "https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization"
title: "Резюмирование юридических документов - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

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

Резюме юридических документов

Варианты использования

# Резюмирование юридических документов

Copy page

Это руководство показывает, как использовать передовые возможности обработки естественного языка Claude для эффективного резюмирования юридических документов, извлечения ключевой информации и ускорения юридических исследований. С помощью Claude вы можете оптимизировать проверку контрактов, подготовку к судебным разбирательствам и нормативную работу, экономя время и обеспечивая точность в ваших юридических процессах.

Copy page

> Посетите наш [справочник по резюмированию](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb), чтобы увидеть пример реализации резюмирования юридических документов с использованием Claude.

## Перед началом работы с Claude

### Решите, использовать ли Claude для резюмирования юридических документов

Вот некоторые ключевые показатели того, что вы должны использовать LLM, такой как Claude, для резюмирования юридических документов:

### Вы хотите эффективно и экономично проверить большой объем документов

### Вам требуется автоматизированное извлечение ключевых метаданных

### Вы хотите создавать четкие, краткие и стандартизированные резюме

### Вам нужны точные цитаты для ваших резюме

### Вы хотите оптимизировать и ускорить процесс юридических исследований

### Определите детали, которые вы хотите извлечь при резюмировании

Не существует единственно правильного резюме для любого данного документа. Без четких указаний Claude может быть сложно определить, какие детали включить. Для достижения оптимальных результатов определите конкретную информацию, которую вы хотите включить в резюме.

Например, при резюмировании договора субаренды вы можете захотеть извлечь следующие ключевые моменты:

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

### Установите критерии успеха

Оценка качества резюме — это печально известно сложная задача. В отличие от многих других задач обработки естественного языка, оценка резюме часто не имеет четких объективных метрик. Процесс может быть весьма субъективным, когда разные читатели ценят разные аспекты резюме. Вот критерии, которые вы можете рассмотреть при оценке того, насколько хорошо Claude выполняет резюмирование юридических документов.

### Фактическая правильность

### Юридическая точность

### Краткость

### Последовательность

### Читаемость

### Предвзятость и справедливость

Дополнительную информацию см. в нашем руководстве по [установлению критериев успеха](https://platform.claude.com/docs/ru/test-and-evaluate/define-success).

* * *

## Как резюмировать юридические документы с помощью Claude

### Выберите правильную модель Claude

Точность модели чрезвычайно важна при резюмировании юридических документов. Claude Sonnet 4.5 — отличный выбор для таких случаев использования, где требуется высокая точность. Если размер и количество ваших документов велики, так что затраты начинают становиться проблемой, вы также можете попробовать использовать меньшую модель, такую как Claude Haiku 4.5.

Чтобы помочь оценить эти затраты, ниже приведено сравнение стоимости резюмирования 1000 договоров субаренды с использованием как Sonnet, так и Haiku:

- **Размер контента**
  - Количество соглашений: 1000
  - Символов на соглашение: 300000
  - Всего символов: 300M
- **Предполагаемые токены**
  - Входные токены: 86M (при условии 1 токена на 3,5 символа)
  - Выходные токены на резюме: 350
  - Всего выходных токенов: 350000
- **Предполагаемая стоимость Claude Sonnet 4.5**
  - Стоимость входных токенов: 86 MTok \* $3.00/MTok = $258
  - Стоимость выходных токенов: 0.35 MTok \* $15.00/MTok = $5.25
  - Общая стоимость: $258.00 + $5.25 = $263.25
- **Предполагаемая стоимость Claude Haiku 3**
  - Стоимость входных токенов: 86 MTok \* $0.25/MTok = $21.50
  - Стоимость выходных токенов: 0.35 MTok \* $1.25/MTok = $0.44
  - Общая стоимость: $21.50 + $0.44 = $21.96

Фактические затраты могут отличаться от этих оценок. Эти оценки основаны на примере, выделенном в разделе о [подсказках](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt).

### Преобразуйте документы в формат, который Claude может обрабатывать

Перед началом резюмирования документов необходимо подготовить данные. Это включает извлечение текста из PDF-файлов, очистку текста и обеспечение его готовности к обработке Claude.

Вот демонстрация этого процесса на примере PDF-файла:

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

В этом примере мы сначала загружаем PDF-файл примера договора субаренды, используемого в [справочнике по резюмированию](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf). Это соглашение было получено из общедоступного договора субаренды с [веб-сайта sec.gov](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm).

Мы используем библиотеку pypdf для извлечения содержимого PDF-файла и преобразования его в текст. Текстовые данные затем очищаются путем удаления дополнительных пробелов и номеров страниц.

### Создайте сильную подсказку

Claude может адаптироваться к различным стилям резюмирования. Вы можете изменить детали подсказки, чтобы направить Claude быть более или менее многословным, включить больше или меньше технической терминологии или предоставить резюме более высокого или более низкого уровня контекста.

Вот пример того, как создать подсказку, которая гарантирует, что созданные резюме следуют последовательной структуре при анализе договоров субаренды:

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

Этот код реализует функцию `summarize_document`, которая использует Claude для резюмирования содержимого договора субаренды. Функция принимает текстовую строку и список деталей для извлечения в качестве входных данных. В этом примере мы вызываем функцию с переменными `document_text` и `details_to_extract`, которые были определены в предыдущих фрагментах кода.

В функции для Claude создается подсказка, включающая документ, который будет резюмирован, детали для извлечения и конкретные инструкции по резюмированию документа. Подсказка инструктирует Claude ответить резюме каждой детали для извлечения, вложенной в теги XML.

Поскольку мы решили вывести каждый раздел резюме в теги, каждый раздел можно легко разобрать как этап постобработки. Этот подход позволяет создавать структурированные резюме, которые можно адаптировать для вашего случая использования, так что каждое резюме следует одному и тому же шаблону.

### Оцените вашу подсказку

Подсказки часто требуют тестирования и оптимизации, чтобы быть готовыми к производству. Чтобы определить готовность вашего решения, оцените качество ваших резюме, используя систематический процесс, сочетающий количественные и качественные методы. Создание [сильной эмпирической оценки](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests#building-evals-and-test-cases) на основе ваших определенных критериев успеха позволит вам оптимизировать ваши подсказки. Вот некоторые метрики, которые вы можете захотеть включить в вашу эмпирическую оценку:

### Оценки ROUGE

### Оценки BLEU

### Сходство контекстного встраивания

### Оценка на основе LLM

### Оценка человеком

### Разверните вашу подсказку

Вот некоторые дополнительные соображения, которые следует учитывать при развертывании вашего решения в производство.

1. **Обеспечьте отсутствие ответственности:** Поймите юридические последствия ошибок в резюме, которые могут привести к юридической ответственности для вашей организации или клиентов. Предоставьте отказы от ответственности или юридические уведомления, уточняющие, что резюме созданы ИИ и должны быть проверены юридическими специалистами.

2. **Обработайте разнообразные типы документов:** В этом руководстве мы обсудили, как извлекать текст из PDF-файлов. В реальном мире документы могут быть в различных форматах (PDF-файлы, документы Word, текстовые файлы и т. д.). Убедитесь, что ваш конвейер извлечения данных может преобразовывать все форматы файлов, которые вы ожидаете получить.

3. **Параллелизируйте вызовы API к Claude:** Длинные документы с большим количеством токенов могут потребовать до минуты для Claude, чтобы создать резюме. Для больших коллекций документов вы можете захотеть отправлять вызовы API к Claude параллельно, чтобы резюме можно было завершить в разумные сроки. Обратитесь к [ограничениям скорости](https://platform.claude.com/docs/ru/api/rate-limits#rate-limits) Anthropic, чтобы определить максимальное количество вызовов API, которые можно выполнять параллельно.


* * *

## Улучшите производительность

В сложных сценариях может быть полезно рассмотреть дополнительные стратегии для улучшения производительности помимо стандартных [методов инженерии подсказок](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/overview). Вот некоторые продвинутые стратегии:

### Выполните мета-резюмирование для резюмирования длинных документов

Резюмирование юридических документов часто включает работу с длинными документами или многими связанными документами одновременно, так что вы превышаете контекстное окно Claude. Вы можете использовать метод разбиения, известный как мета-резюмирование, чтобы справиться с этим случаем использования. Этот метод включает разбиение документов на меньшие, управляемые части и последующую обработку каждой части отдельно. Затем вы можете объединить резюме каждой части, чтобы создать мета-резюме всего документа.

Вот пример того, как выполнить мета-резюмирование:

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

Функция `summarize_long_document` расширяет более раннюю функцию `summarize_document`, разделяя документ на меньшие части и резюмируя каждую часть отдельно.

Код достигает этого, применяя функцию `summarize_document` к каждому фрагменту из 20000 символов в исходном документе. Отдельные резюме затем объединяются, и из этих резюме фрагментов создается окончательное резюме.

Обратите внимание, что функция `summarize_long_document` не является строго необходимой для нашего примера PDF-файла, так как весь документ помещается в контекстное окно Claude. Однако это становится необходимым для документов, превышающих контекстное окно Claude, или при резюмировании нескольких связанных документов вместе. Независимо от этого, этот метод мета-резюмирования часто захватывает дополнительные важные детали в окончательном резюме, которые были пропущены в более раннем подходе с одним резюме.

### Используйте индексированные по резюме документы для изучения большой коллекции документов

Поиск коллекции документов с помощью LLM обычно включает поиск с дополнением поколения (RAG). Однако в сценариях, включающих большие документы или когда требуется точное извлечение информации, базовый подход RAG может быть недостаточным. Индексированные по резюме документы — это продвинутый подход RAG, который обеспечивает более эффективный способ ранжирования документов для извлечения, используя меньше контекста, чем традиционные методы RAG. В этом подходе вы сначала используете Claude для создания краткого резюме для каждого документа в вашем корпусе, а затем используете Claude для ранжирования релевантности каждого резюме к задаваемому вопросу. Для получения дополнительной информации об этом подходе, включая пример на основе кода, ознакомьтесь с разделом индексированных по резюме документов в [справочнике по резюмированию](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb).

### Тонко настройте Claude, чтобы учиться на вашем наборе данных

Еще один продвинутый метод для улучшения способности Claude создавать резюме — это тонкая настройка. Тонкая настройка включает обучение Claude на пользовательском наборе данных, который специально соответствует вашим потребностям в резюмировании юридических документов, обеспечивая адаптацию Claude к вашему случаю использования. Вот обзор того, как выполнить тонкую настройку:

1. **Определите ошибки:** Начните с сбора экземпляров, где резюме Claude не соответствуют — это может включать пропуск критических юридических деталей, неправильное понимание контекста или использование неподходящей юридической терминологии.

2. **Подготовьте набор данных:** После того как вы определили эти проблемы, составьте набор данных из этих проблемных примеров. Этот набор данных должен включать исходные юридические документы вместе с вашими исправленными резюме, обеспечивая, чтобы Claude изучил желаемое поведение.

3. **Выполните тонкую настройку:** Тонкая настройка включает переобучение модели на вашем подготовленном наборе данных для корректировки ее весов и параметров. Это переобучение помогает Claude лучше понять конкретные требования вашего юридического домена, улучшая его способность резюмировать документы в соответствии с вашими стандартами.

4. **Итеративное улучшение:** Тонкая настройка — это не одноразовый процесс. По мере того как Claude продолжает создавать резюме, вы можете итеративно добавлять новые примеры, где он показал недостаточную производительность, дополнительно совершенствуя его возможности. Со временем этот непрерывный цикл обратной связи приведет к модели, которая высоко специализирована для ваших задач резюмирования юридических документов.


Тонкая настройка в настоящее время доступна только через Amazon Bedrock. Дополнительные детали доступны в [блоге запуска AWS](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/).

[Справочник по резюмированию\\
\\
Посмотрите полностью реализованный пример на основе кода того, как использовать Claude для резюмирования контрактов.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [Справочник по цитатам\\
\\
Изучите наш справочник по цитатам для руководства по тому, как обеспечить точность и объяснимость информации.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Перед началом работы с Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#pered-nachalom-raboty-s-claude)
- [Решите, использовать ли Claude для резюмирования юридических документов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#reshite-ispolzovat-li-claude-dlya-rezyumirovaniya-yuridicheskikh-dokumentov)
- [Определите детали, которые вы хотите извлечь при резюмировании](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#opredelite-detali-kotorye-vy-khotite-izvlech-pri-rezyumirovanii)
- [Установите критерии успеха](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#ustanovite-kriterii-uspekha)
- [Как резюмировать юридические документы с помощью Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#kak-rezyumirovat-yuridicheskie-dokumenty-s-pomoschyu-claude)
- [Выберите правильную модель Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#vyberite-pravilnuyu-model-claude)
- [Преобразуйте документы в формат, который Claude может обрабатывать](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#preobrazuyte-dokumenty-v-format-kotoriy-claude-mozhet-obrabatyvat)
- [Создайте сильную подсказку](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#sozdayte-silnuyu-podskazku)
- [Оцените вашу подсказку](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#otsenite-vashu-podskazku)
- [Разверните вашу подсказку](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#razvernite-vashu-podskazku)
- [Улучшите производительность](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#uluchshite-proizvoditelnost)
- [Выполните мета-резюмирование для резюмирования длинных документов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#vypolnite-meta-rezyumirovanie-dlya-rezyumirovaniya-dlinnykh-dokumentov)
- [Используйте индексированные по резюме документы для изучения большой коллекции документов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#ispolzuyte-indeksirovannye-po-rezyume-dokumenty-dlya-izucheniya-bolshoy-kollektsii-dokumentov)
- [Тонко настройте Claude, чтобы учиться на вашем наборе данных](https://platform.claude.com/docs/ru/about-claude/use-case-guides/legal-summarization#tonko-nastroyte-claude-chtoby-uchitsya-na-vashem-nabore-dannykh)

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