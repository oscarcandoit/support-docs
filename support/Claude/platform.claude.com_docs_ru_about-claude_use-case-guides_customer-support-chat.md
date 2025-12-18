---
url: "https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat"
title: "Агент поддержки клиентов - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ru/home)

- [Руководство разработчика](https://platform.claude.com/docs/ru/intro)
- [Справочник API](https://platform.claude.com/docs/ru/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Ресурсы](https://platform.claude.com/docs/ru/resources/overview)
- [Примечания к выпуску](https://platform.claude.com/docs/ru/release-notes/overview)

Русский

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fru%2Fabout-claude%2Fuse-case-guides%2Fcustomer-support-chat)

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

Агент поддержки клиентов

Варианты использования

# Агент поддержки клиентов

Copy page

Это руководство описывает, как использовать продвинутые возможности Claude в области диалогового взаимодействия для обработки запросов клиентов в реальном времени, обеспечивая круглосуточную поддержку, сокращая время ожидания и управляя большими объемами запросов с точными ответами и позитивными взаимодействиями.

Copy page

## Перед началом разработки с Claude

### Решите, использовать ли Claude для чата поддержки

Вот некоторые ключевые показатели того, что вы должны использовать LLM, такую как Claude, для автоматизации частей вашего процесса поддержки клиентов:

### Высокий объем повторяющихся запросов

### Необходимость быстрого синтеза информации

### Требование доступности 24/7

### Быстрое масштабирование в периоды пиков

### Последовательный голос бренда

Некоторые соображения при выборе Claude вместо других LLM:

- Вы отдаёте приоритет естественному, нюансированному диалогу: Сложное понимание языка Claude позволяет более естественные, контекстно-осведомленные разговоры, которые кажутся более человеческими, чем чаты с другими LLM.
- Вы часто получаете сложные и открытые запросы: Claude может справляться с широким спектром тем и запросов без создания заранее подготовленных ответов или требования обширного программирования перестановок высказываний пользователей.
- Вам нужна масштабируемая многоязычная поддержка: Многоязычные возможности Claude позволяют ему вести разговоры более чем на 200 языках без необходимости отдельных чатботов или обширных процессов перевода для каждого поддерживаемого языка.

### Определите идеальное взаимодействие в чате

Опишите идеальное взаимодействие с клиентом, чтобы определить, как и когда вы ожидаете, что клиент будет взаимодействовать с Claude. Этот план поможет определить технические требования вашего решения.

Вот пример взаимодействия в чате для поддержки клиентов автомобильной страховки:

- **Клиент**: Инициирует опыт чата поддержки
  - **Claude**: Тепло приветствует клиента и инициирует разговор
- **Клиент**: Спрашивает о страховке для своего нового электромобиля
  - **Claude**: Предоставляет релевантную информацию о покрытии электрических транспортных средств
- **Клиент**: Задаёт вопросы, связанные с уникальными потребностями страховки электромобилей
  - **Claude**: Отвечает точными и информативными ответами и предоставляет ссылки на источники
- **Клиент**: Задаёт вопросы не по теме, не связанные со страховкой или автомобилями
  - **Claude**: Уточняет, что не обсуждает не связанные темы, и направляет пользователя обратно к страховке автомобилей
- **Клиент**: Выражает интерес к предложению страховки
  - **Claude**: Задаёт набор вопросов для определения подходящего предложения, адаптируясь к их ответам
  - **Claude**: Отправляет запрос на использование инструмента API генерации предложений вместе с необходимой информацией, собранной от пользователя
  - **Claude**: Получает информацию ответа от инструмента использования API, синтезирует информацию в естественный ответ и представляет предоставленное предложение пользователю
- **Клиент**: Задаёт дополнительные вопросы
  - **Claude**: Отвечает на дополнительные вопросы по мере необходимости
  - **Claude**: Направляет клиента к следующим шагам в процессе страховки и завершает разговор

В реальном примере, который вы напишете для своего собственного варианта использования, вы можете найти полезным написать фактические слова в этом взаимодействии, чтобы вы также могли получить представление об идеальном тоне, длине ответа и уровне детализации, который вы хотите, чтобы Claude имел.

### Разбейте взаимодействие на уникальные задачи

Чат поддержки клиентов — это совокупность нескольких различных задач, от ответов на вопросы до извлечения информации и выполнения действий по запросам, объединённых в одно взаимодействие с клиентом. Перед началом разработки разбейте идеальное взаимодействие с клиентом на каждую задачу, которую вы хотите, чтобы Claude мог выполнять. Это гарантирует, что вы можете подсказывать и оценивать Claude для каждой задачи, и дает вам хорошее представление о диапазоне взаимодействий, которые вам нужно учитывать при написании тестовых случаев.

Клиенты иногда находят полезным визуализировать это как блок-схему взаимодействия возможных точек перегиба разговора в зависимости от запросов пользователя.

Вот ключевые задачи, связанные с примером взаимодействия страховки выше:

1. Приветствие и общее руководство
   - Тепло приветствуйте клиента и инициируйте разговор
   - Предоставьте общую информацию о компании и взаимодействии
2. Информация о продукте
   - Предоставьте информацию о покрытии электрических транспортных средств











     Это потребует, чтобы Claude имел необходимую информацию в своём контексте, и может подразумевать, что необходима [интеграция RAG](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb).

   - Ответьте на вопросы, связанные с уникальными потребностями страховки электромобилей
   - Ответьте на дополнительные вопросы о предложении или деталях страховки
   - Предложите ссылки на источники, когда это уместно
3. Управление разговором
   - Оставайтесь в теме (страховка автомобилей)
   - Перенаправьте вопросы не по теме обратно к релевантным предметам
4. Генерация предложения
   - Задавайте соответствующие вопросы для определения приемлемости предложения
   - Адаптируйте вопросы на основе ответов клиента
   - Отправьте собранную информацию в API генерации предложений
   - Представьте предоставленное предложение клиенту

### Установите критерии успеха

Работайте со своей командой поддержки, чтобы [определить четкие критерии успеха](https://platform.claude.com/docs/ru/test-and-evaluate/define-success) и написать [подробные оценки](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests) с измеримыми эталонами и целями.

Вот критерии и эталоны, которые можно использовать для оценки того, насколько успешно Claude выполняет определённые задачи:

### Точность понимания запроса

### Релевантность ответа

### Точность ответа

### Релевантность предоставления цитирования

### Соответствие теме

### Эффективность создания контента

### Эффективность эскалации

Вот критерии и эталоны, которые можно использовать для оценки влияния на бизнес использования Claude для поддержки:

### Поддержание настроения

### Коэффициент отклонения

### Оценка удовлетворённости клиентов

### Среднее время обработки

## Как реализовать Claude в качестве агента обслуживания клиентов

### Выберите правильную модель Claude

Выбор модели зависит от компромиссов между стоимостью, точностью и временем ответа.

Для чата поддержки клиентов Claude Sonnet 4.5 хорошо подходит для балансирования интеллекта, задержки и стоимости. Однако для случаев, когда у вас есть поток разговора с несколькими подсказками, включая RAG, использование инструментов и/или подсказки с длинным контекстом, Claude Haiku 4.5 может быть более подходящим для оптимизации задержки.

### Создайте сильную подсказку

Использование Claude для поддержки клиентов требует, чтобы Claude имел достаточно направления и контекста для надлежащего ответа, при этом имея достаточно гибкости для обработки широкого спектра запросов клиентов.

Давайте начнём с написания элементов сильной подсказки, начиная с системной подсказки:

```
IDENTITY = """You are Eva, a friendly and knowledgeable AI assistant for Acme Insurance
Company. Your role is to warmly welcome customers and provide information on
Acme's insurance offerings, which include car insurance and electric car
insurance. You can also help customers get quotes for their insurance needs."""
```

Хотя вы можете быть искушены поместить всю вашу информацию внутри системной подсказки как способ отделить инструкции от разговора пользователя, Claude на самом деле работает лучше всего с основной частью содержимого подсказки, написанной внутри первого хода `User` (с единственным исключением, являющимся подсказкой роли). Прочитайте больше на [Предоставление Claude роли с системной подсказкой](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/system-prompts).

Лучше всего разбить сложные подсказки на подразделы и написать одну часть за раз. Для каждой задачи вы можете найти больший успех, следуя пошаговому процессу для определения частей подсказки, которые Claude потребуются для хорошего выполнения задачи. Для этого примера поддержки клиентов страховки автомобилей мы будем писать по частям все части подсказки, начиная с задачи "Приветствие и общее руководство". Это также облегчает отладку вашей подсказки, так как вы можете быстрее настраивать отдельные части общей подсказки.

Мы поместим все эти части в файл под названием `config.py`.

```
STATIC_GREETINGS_AND_GENERAL = """
<static_context>
Acme Auto Insurance: Your Trusted Companion on the Road

About:
At Acme Insurance, we understand that your vehicle is more than just a mode of transportation—it's your ticket to life's adventures.
Since 1985, we've been crafting auto insurance policies that give drivers the confidence to explore, commute, and travel with peace of mind.
Whether you're navigating city streets or embarking on cross-country road trips, Acme is there to protect you and your vehicle.
Our innovative auto insurance policies are designed to adapt to your unique needs, covering everything from fender benders to major collisions.
With Acme's award-winning customer service and swift claim resolution, you can focus on the joy of driving while we handle the rest.
We're not just an insurance provider—we're your co-pilot in life's journeys.
Choose Acme Auto Insurance and experience the assurance that comes with superior coverage and genuine care. Because at Acme, we don't just
insure your car—we fuel your adventures on the open road.

Note: We also offer specialized coverage for electric vehicles, ensuring that drivers of all car types can benefit from our protection.

Acme Insurance offers the following products:
- Car insurance
- Electric car insurance
- Two-wheeler insurance

Business hours: Monday-Friday, 9 AM - 5 PM EST
Customer service number: 1-800-123-4567
</static_context>
"""
```

Затем мы сделаем то же самое для информации о страховке автомобилей и страховке электромобилей.

```
STATIC_CAR_INSURANCE="""
<static_context>
Car Insurance Coverage:
Acme's car insurance policies typically cover:
1. Liability coverage: Pays for bodily injury and property damage you cause to others.
2. Collision coverage: Pays for damage to your car in an accident.
3. Comprehensive coverage: Pays for damage to your car from non-collision incidents.
4. Medical payments coverage: Pays for medical expenses after an accident.
5. Uninsured/underinsured motorist coverage: Protects you if you're hit by a driver with insufficient insurance.

Optional coverages include:
- Rental car reimbursement
- Roadside assistance
- New car replacement
</static_context>
"""

STATIC_ELECTRIC_CAR_INSURANCE="""
<static_context>
Electric Car Insurance:
Our specialized electric car insurance goes beyond traditional auto coverage,
offering tailored protection for your high-tech investment. In addition to standard coverages, we offer:
- Safeguarding expensive battery systems
- Covering home charging equipment
- Adapting to the rapidly evolving world of electric vehicles

Whether you're driving a Rivian, Nissan Leaf, Chevrolet Bolt,
or any other electric vehicle, our knowledgeable agents are ready to craft a policy
that gives you the confidence to enjoy every electron-powered mile.
</static_context>
"""
```

Теперь, когда у нас есть наш статический контент, давайте добавим по крайней мере 4-5 примеров "хороших" взаимодействий для руководства ответами Claude. Эти примеры должны быть репрезентативны для вашего идеального взаимодействия с клиентом и могут включать ограждения, вызовы инструментов и т.д.

```
EXAMPLES="""
Here are a few examples of how you can interact with customers:

<example 1>
H: Hi, do you offer commercial insurance for small businesses?

A: Ah! Unfortunately, we don't offer commercial insurance at this time.
However, we do provide a range of personal insurance products including car insurance and electric car insurance.
Would you like to know more about these offerings?
</example 1>

<example 2>
H: Hi, what are your business hours?

A: Our business hours are Monday to Friday, 9 AM to 5 PM EST.
If you have any questions or need assistance, feel free to reach out during those times.
How else can I assist you today?
</example 2>

<example 3>
H: I'm shopping for car insurance. What does Acme offer?

A: Great choice! Acme's car insurance policies typically include:
- Liability coverage: Protects you if you're at fault in an accident
- Collision coverage: Pays for damage to your car in an accident
- Comprehensive coverage: Covers non-collision incidents like theft or vandalism
- Medical payments coverage: Pays for medical expenses after an accident
- Uninsured/underinsured motorist coverage: Protects you from drivers with insufficient insurance

We also offer optional coverages like rental car reimbursement, roadside assistance, and new car replacement.
Would you like more details on any of these coverages, or do you have specific questions about insuring your vehicle?
</example 3>

<example 4>
H: I'd like to hear about your electric car insurance.

A: Certainly! Our electric car insurance is specially designed to meet the unique needs of electric vehicle owners.
In addition to all the standard coverages we offer for regular cars, our electric car policies include:

- Battery coverage: Protection against damage or degradation of your vehicle's expensive battery system
- Tech package: Covers repairs or replacement of advanced electronics and onboard computer systems
- Charging station coverage: Protects both home and portable charging equipment
- Cybersecurity protection: Coverage against hacking or digital threats
- Specialized roadside assistance: Includes flatbed towing to protect the vehicle's undercarriage

We cover a wide range of electric vehicles, including popular models from Tesla, Rivian, Nissan, Chevrolet, and more.
Is there a specific electric vehicle you're looking to insure, or would you like more details on any of these coverages?
</example 4>

<example 5>
H: I'd like to get a quote for my car insurance.

A: Certainly! I'd be happy to help you get a quote for your car insurance.
To provide you with an accurate quote, I'll need to collect some information about your vehicle and the primary driver.
Let's start with the basics:

1. What is the make and model of your vehicle?
2. What year was it manufactured?
3. Approximately how many miles have you driven?
4. What is the age of the primary driver?

Once you provide this information, I'll use our quoting tool to generate a personalized insurance quote for you.
</example 5>
"""
```

Вы также захотите включить любые важные инструкции, описывающие Делай и Не делай для того, как Claude должен взаимодействовать с клиентом.
Это может быть основано на ограждениях бренда или политиках поддержки.

```
ADDITIONAL_GUARDRAILS = """Please adhere to the following guardrails:
1. Only provide information about insurance types listed in our offerings.
2. If asked about an insurance type we don't offer, politely state
that we don't provide that service.
3. Do not speculate about future product offerings or company plans.
4. Don't make promises or enter into agreements it's not authorized to make.
You only provide information and guidance.
5. Do not mention any competitor's products or services.
"""
```

Теперь давайте объединим все эти разделы в одну строку для использования в качестве нашей подсказки.

```
TASK_SPECIFIC_INSTRUCTIONS = ' '.join([\
   STATIC_GREETINGS_AND_GENERAL,\
   STATIC_CAR_INSURANCE,\
   STATIC_ELECTRIC_CAR_INSURANCE,\
   EXAMPLES,\
   ADDITIONAL_GUARDRAILS,\
])
```

### Добавьте динамические и агентские возможности с использованием инструментов

Claude способен выполнять действия и динамически извлекать информацию, используя функциональность использования инструментов на стороне клиента. Начните со списка любых внешних инструментов или API, которые подсказка должна использовать.

Для этого примера мы начнём с одного инструмента для расчёта предложения.

Напоминаем, что этот инструмент не будет выполнять фактический расчёт, он просто сигнализирует приложению, что инструмент должен быть использован с любыми указанными аргументами.

Пример калькулятора страховки:

```
TOOLS = [{\
  "name": "get_quote",\
  "description": "Calculate the insurance quote based on user input. Returned value is per month premium.",\
  "input_schema": {\
    "type": "object",\
    "properties": {\
      "make": {"type": "string", "description": "The make of the vehicle."},\
      "model": {"type": "string", "description": "The model of the vehicle."},\
      "year": {"type": "integer", "description": "The year the vehicle was manufactured."},\
      "mileage": {"type": "integer", "description": "The mileage on the vehicle."},\
      "driver_age": {"type": "integer", "description": "The age of the primary driver."}\
    },\
    "required": ["make", "model", "year", "mileage", "driver_age"]\
  }\
}]

def get_quote(make, model, year, mileage, driver_age):
    """Returns the premium per month in USD"""
    # You can call an http endpoint or a database to get the quote.
    # Here, we simulate a delay of 1 seconds and return a fixed quote of 100.
    time.sleep(1)
    return 100
```

### Разверните ваши подсказки

Сложно узнать, насколько хорошо работает ваша подсказка без развёртывания её в тестовой производственной среде и [запуска оценок](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests), поэтому давайте создадим небольшое приложение, используя нашу подсказку, SDK Anthropic и streamlit для пользовательского интерфейса.

В файле под названием `chatbot.py` начните с настройки класса ChatBot, который будет инкапсулировать взаимодействия с SDK Anthropic.

Класс должен иметь два основных метода: `generate_message` и `process_user_input`.

```
from anthropic import Anthropic
from config import IDENTITY, TOOLS, MODEL, get_quote
from dotenv import load_dotenv

load_dotenv()

class ChatBot:
   def __init__(self, session_state):
       self.anthropic = Anthropic()
       self.session_state = session_state

   def generate_message(
       self,
       messages,
       max_tokens,
   ):
       try:
           response = self.anthropic.messages.create(
               model=MODEL,
               system=IDENTITY,
               max_tokens=max_tokens,
               messages=messages,
               tools=TOOLS,
           )
           return response
       except Exception as e:
           return {"error": str(e)}

   def process_user_input(self, user_input):
       self.session_state.messages.append({"role": "user", "content": user_input})

       response_message = self.generate_message(
           messages=self.session_state.messages,
           max_tokens=2048,
       )

       if "error" in response_message:
           return f"An error occurred: {response_message['error']}"

       if response_message.content[-1].type == "tool_use":
           tool_use = response_message.content[-1]
           func_name = tool_use.name
           func_params = tool_use.input
           tool_use_id = tool_use.id

           result = self.handle_tool_use(func_name, func_params)
           self.session_state.messages.append(
               {"role": "assistant", "content": response_message.content}
           )
           self.session_state.messages.append({
               "role": "user",
               "content": [{\
                   "type": "tool_result",\
                   "tool_use_id": tool_use_id,\
                   "content": f"{result}",\
               }],
           })

           follow_up_response = self.generate_message(
               messages=self.session_state.messages,
               max_tokens=2048,
           )

           if "error" in follow_up_response:
               return f"An error occurred: {follow_up_response['error']}"

           response_text = follow_up_response.content[0].text
           self.session_state.messages.append(
               {"role": "assistant", "content": response_text}
           )
           return response_text

       elif response_message.content[0].type == "text":
           response_text = response_message.content[0].text
           self.session_state.messages.append(
               {"role": "assistant", "content": response_text}
           )
           return response_text

       else:
           raise Exception("An error occurred: Unexpected response type")

   def handle_tool_use(self, func_name, func_params):
       if func_name == "get_quote":
           premium = get_quote(**func_params)
           return f"Quote generated: ${premium:.2f} per month"

       raise Exception("An unexpected tool was used")
```

### Создайте ваш пользовательский интерфейс

Протестируйте развёртывание этого кода с помощью Streamlit, используя основной метод. Эта функция `main()` устанавливает интерфейс чата на основе Streamlit.

Мы сделаем это в файле под названием `app.py`

```
import streamlit as st
from chatbot import ChatBot
from config import TASK_SPECIFIC_INSTRUCTIONS

def main():
   st.title("Chat with Eva, Acme Insurance Company's Assistant🤖")

   if "messages" not in st.session_state:
       st.session_state.messages = [\
           {'role': "user", "content": TASK_SPECIFIC_INSTRUCTIONS},\
           {'role': "assistant", "content": "Understood"},\
       ]

   chatbot = ChatBot(st.session_state)

   # Display user and assistant messages skipping the first two
   for message in st.session_state.messages[2:]:
       # ignore tool use blocks
       if isinstance(message["content"], str):
           with st.chat_message(message["role"]):
               st.markdown(message["content"])

   if user_msg := st.chat_input("Type your message here..."):
       st.chat_message("user").markdown(user_msg)

       with st.chat_message("assistant"):
           with st.spinner("Eva is thinking..."):
               response_placeholder = st.empty()
               full_response = chatbot.process_user_input(user_msg)
               response_placeholder.markdown(full_response)

if __name__ == "__main__":
   main()
```

Запустите программу с помощью:

```
streamlit run app.py
```

### Оцените ваши подсказки

Подсказки часто требуют тестирования и оптимизации, чтобы быть готовыми к производству. Чтобы определить готовность вашего решения, оцените производительность чатбота, используя систематический процесс, сочетающий количественные и качественные методы. Создание [сильной эмпирической оценки](https://platform.claude.com/docs/ru/test-and-evaluate/develop-tests#building-evals-and-test-cases) на основе ваших определённых критериев успеха позволит вам оптимизировать ваши подсказки.

[Консоль Claude](https://platform.claude.com/dashboard) теперь имеет инструмент Evaluation, который позволяет вам тестировать ваши подсказки в различных сценариях.

### Улучшите производительность

В сложных сценариях может быть полезно рассмотреть дополнительные стратегии для улучшения производительности помимо стандартных [методов инженерии подсказок](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/overview) и [стратегий реализации ограждений](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-hallucinations). Вот некоторые распространённые сценарии:

#### Уменьшите задержку длинного контекста с помощью RAG

При работе с большими объёмами статического и динамического контекста включение всей информации в подсказку может привести к высоким затратам, более медленному времени ответа и достижению пределов окна контекста. В этом сценарии реализация методов Retrieval Augmented Generation (RAG) может значительно улучшить производительность и эффективность.

Используя [модели встраивания, такие как Voyage](https://platform.claude.com/docs/ru/build-with-claude/embeddings), для преобразования информации в векторные представления, вы можете создать более масштабируемую и отзывчивую систему. Этот подход позволяет динамически извлекать релевантную информацию на основе текущего запроса, вместо включения всего возможного контекста в каждую подсказку.

Реализация RAG для вариантов использования поддержки [рецепт RAG](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) показала увеличение точности, сокращение времени ответа и снижение затрат на API в системах с обширными требованиями к контексту.

#### Интегрируйте данные в реальном времени с использованием инструментов

При работе с запросами, требующими информации в реальном времени, такой как остатки счётов или детали политики, подходы RAG на основе встраивания недостаточны. Вместо этого вы можете использовать использование инструментов для значительного улучшения способности вашего чатбота предоставлять точные ответы в реальном времени. Например, вы можете использовать использование инструментов для поиска информации о клиентах, извлечения деталей заказов и отмены заказов от имени клиента.

Этот подход, [описанный в нашем рецепте использования инструментов: агент обслуживания клиентов](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb), позволяет вам беспрепятственно интегрировать живые данные в ответы Claude и предоставить более персонализированный и эффективный опыт обслуживания клиентов.

#### Укрепите входные и выходные ограждения

При развёртывании чатбота, особенно в сценариях обслуживания клиентов, крайне важно предотвратить риски, связанные с неправильным использованием, запросами вне области действия и неуместными ответами. Хотя Claude по своей природе устойчив к таким сценариям, вот дополнительные шаги для укрепления ограждений вашего чатбота:

- [Уменьшите галлюцинации](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/reduce-hallucinations): Реализуйте механизмы проверки фактов и [цитирования](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb) для обоснования ответов в предоставленной информации.
- Перекрёстная проверка информации: Убедитесь, что ответы агента соответствуют политикам вашей компании и известным фактам.
- Избегайте договорных обязательств: Убедитесь, что агент не делает обещаний и не вступает в соглашения, на которые он не уполномочен.
- [Смягчите взломы](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks): Используйте методы, такие как экраны безвредности и валидация входных данных, чтобы предотвратить использование пользователями уязвимостей модели для создания неуместного контента.
- Избегайте упоминания конкурентов: Реализуйте фильтр упоминания конкурентов для поддержания фокуса на бренде и не упоминайте продукты или услуги конкурентов.
- [Держите Claude в образе](https://platform.claude.com/docs/ru/test-and-evaluate/strengthen-guardrails/keep-claude-in-character): Предотвратите изменение Claude своего стиля контекста даже во время длительных сложных взаимодействий.
- Удалите Персональную идентифицирующую информацию (PII): Если не требуется явно и не авторизовано, удалите любую PII из ответов.

#### Уменьшите воспринимаемое время ответа с помощью потоковой передачи

При работе с потенциально длинными ответами реализация потоковой передачи может значительно улучшить вовлечённость и удовлетворённость пользователей. В этом сценарии пользователи получают ответ прогрессивно вместо ожидания создания всего ответа.

Вот как реализовать потоковую передачу:

1. Используйте [Anthropic Streaming API](https://platform.claude.com/docs/ru/build-with-claude/streaming) для поддержки потоковых ответов.
2. Установите ваш фронтенд для обработки входящих фрагментов текста.
3. Отобразите каждый фрагмент по мере его поступления, имитируя печать в реальном времени.
4. Реализуйте механизм для сохранения полного ответа, позволяя пользователям просматривать его, если они уходят и возвращаются.

В некоторых случаях потоковая передача позволяет использовать более продвинутые модели с более высокими базовыми задержками, так как прогрессивное отображение смягчает влияние более длительного времени обработки.

#### Масштабируйте ваш чатбот

По мере усложнения вашего чатбота архитектура вашего приложения может развиваться в соответствии с этим. Перед добавлением дополнительных слоёв в вашу архитектуру рассмотрите следующие менее исчерпывающие варианты:

- Убедитесь, что вы максимально используете ваши подсказки и оптимизируете через инженерию подсказок. Используйте наши [руководства по инженерии подсказок](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/overview) для написания наиболее эффективных подсказок.
- Добавьте дополнительные [инструменты](https://platform.claude.com/docs/ru/build-with-claude/tool-use) к подсказке (которые могут включать [цепочки подсказок](https://platform.claude.com/docs/ru/build-with-claude/prompt-engineering/chain-prompts)) и посмотрите, сможете ли вы достичь требуемой функциональности.

Если ваш чатбот обрабатывает невероятно разнообразные задачи, вы можете рассмотреть добавление [отдельного классификатора намерений](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) для маршрутизации начального запроса клиента. Для существующего приложения это потребует создания дерева решений, которое будет маршрутизировать запросы клиентов через классификатор, а затем к специализированным разговорам (с их собственным набором инструментов и системных подсказок). Обратите внимание, что этот метод требует дополнительного вызова Claude, который может увеличить задержку.

### Интегрируйте Claude в ваш рабочий процесс поддержки

Хотя наши примеры сосредоточены на функциях Python, вызываемых в среде Streamlit, развёртывание Claude для чата поддержки в реальном времени требует API-сервиса.

Вот как вы можете подойти к этому:

1. Создайте обёртку API: Разработайте простую обёртку API вокруг вашей функции классификации. Например, вы можете использовать Flask API или Fast API для обёртывания вашего кода в HTTP-сервис. Ваш HTTP-сервис может принимать пользовательский ввод и возвращать ответ помощника полностью. Таким образом, ваш сервис может иметь следующие характеристики:
   - Server-Sent Events (SSE): SSE позволяет потоковую передачу ответов в реальном времени с сервера на клиент. Это критически важно для обеспечения плавного интерактивного опыта при работе с LLM.
   - Кэширование: Реализация кэширования может значительно улучшить время ответа и уменьшить ненужные вызовы API.
   - Сохранение контекста: Поддержание контекста, когда пользователь уходит и возвращается, важно для непрерывности разговоров.
2. Создайте веб-интерфейс: Реализуйте удобный веб-интерфейс для взаимодействия с агентом на основе Claude.


[Retrieval Augmented Generation (RAG) cookbook\\
\\
Посетите наш рецепт RAG cookbook для получения дополнительного примера кода и подробного руководства.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) [Citations cookbook\\
\\
Изучите наш рецепт Citations cookbook для того, как обеспечить точность и объяснимость информации.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Перед началом разработки с Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#pered-nachalom-razrabotki-s-claude)
- [Решите, использовать ли Claude для чата поддержки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#reshite-ispolzovat-li-claude-dlya-chata-podderzhki)
- [Определите идеальное взаимодействие в чате](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#opredelite-idealnoe-vzaimodeystvie-v-chate)
- [Разбейте взаимодействие на уникальные задачи](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#razbeyte-vzaimodeystvie-na-unikalnye-zadachi)
- [Установите критерии успеха](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#ustanovite-kriterii-uspekha)
- [Как реализовать Claude в качестве агента обслуживания клиентов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#kak-realizovat-claude-v-kachestve-agenta-obsluzhivaniya-klientov)
- [Выберите правильную модель Claude](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#vyberite-pravilnuyu-model-claude)
- [Создайте сильную подсказку](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#sozdayte-silnuyu-podskazku)
- [Добавьте динамические и агентские возможности с использованием инструментов](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#dobavte-dinamicheskie-i-agentskie-vozmozhnosti-s-ispolzovaniem-instrumentov)
- [Разверните ваши подсказки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#razvernite-vashi-podskazki)
- [Создайте ваш пользовательский интерфейс](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#sozdayte-vash-polzovatelskiy-interfeys)
- [Оцените ваши подсказки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#otsenite-vashi-podskazki)
- [Улучшите производительность](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#uluchshite-proizvoditelnost)
- [Интегрируйте Claude в ваш рабочий процесс поддержки](https://platform.claude.com/docs/ru/about-claude/use-case-guides/customer-support-chat#integriruyte-claude-v-vash-rabochiy-protsess-podderzhki)

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