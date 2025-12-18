---
url: "https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat"
title: "고객 지원 에이전트 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ko/home)

- [개발자 가이드](https://platform.claude.com/docs/ko/intro)
- [API 참조](https://platform.claude.com/docs/ko/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [리소스](https://platform.claude.com/docs/ko/resources/overview)
- [릴리스 노트](https://platform.claude.com/docs/ko/release-notes/overview)

한국어

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fko%2Fabout-claude%2Fuse-case-guides%2Fcustomer-support-chat)

Search...

⌘K

리소스

[개요](https://platform.claude.com/docs/ko/resources/overview) [용어집](https://platform.claude.com/docs/ko/about-claude/glossary) [시스템 프롬프트](https://platform.claude.com/docs/ko/release-notes/system-prompts)

사용 사례

[개요](https://platform.claude.com/docs/ko/about-claude/use-case-guides/overview) [티켓 라우팅](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing) [고객 지원 에이전트](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat) [콘텐츠 조정](https://platform.claude.com/docs/ko/about-claude/use-case-guides/content-moderation) [법률 요약](https://platform.claude.com/docs/ko/about-claude/use-case-guides/legal-summarization)

프롬프트 라이브러리

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

사용 사례

고객 지원 에이전트

사용 사례

# 고객 지원 에이전트

Copy page

이 가이드는 Claude의 고급 대화형 기능을 활용하여 실시간으로 고객 문의를 처리하고, 24/7 지원을 제공하며, 대기 시간을 단축하고, 정확한 응답과 긍정적인 상호작용으로 높은 지원 볼륨을 관리하는 방법을 설명합니다.

Copy page

## Claude로 구축하기 전에

### Claude를 지원 채팅에 사용할지 결정하기

Claude와 같은 LLM을 사용하여 고객 지원 프로세스의 일부를 자동화해야 하는 주요 지표는 다음과 같습니다:

### 반복적인 쿼리의 높은 볼륨

### 빠른 정보 합성의 필요성

### 24/7 가용성 요구사항

### 피크 기간 동안의 빠른 확장

### 일관된 브랜드 음성

다른 LLM보다 Claude를 선택하기 위한 몇 가지 고려사항:

- 자연스럽고 미묘한 대화를 우선시합니다: Claude의 정교한 언어 이해는 다른 LLM과의 채팅보다 더 자연스럽고 맥락을 인식한 대화를 가능하게 합니다.
- 복잡하고 개방형 쿼리를 자주 받습니다: Claude는 광범위한 주제와 문의를 처리할 수 있으며 정형화된 응답을 생성하거나 사용자 발화의 순열을 광범위하게 프로그래밍할 필요가 없습니다.
- 확장 가능한 다국어 지원이 필요합니다: Claude의 다국어 기능을 통해 지원되는 각 언어에 대해 별도의 챗봇이나 광범위한 번역 프로세스 없이 200개 이상의 언어로 대화에 참여할 수 있습니다.

### 이상적인 채팅 상호작용 정의하기

고객이 Claude와 상호작용하는 방법과 시기를 정의하기 위해 이상적인 고객 상호작용을 개략적으로 설명합니다. 이 개략은 솔루션의 기술적 요구사항을 결정하는 데 도움이 됩니다.

자동차 보험 고객 지원을 위한 예제 채팅 상호작용은 다음과 같습니다:

- **고객**: 지원 채팅 경험 시작
  - **Claude**: 고객을 따뜻하게 맞이하고 대화 시작
- **고객**: 새로운 전기차 보험에 대해 문의
  - **Claude**: 전기차 보험 범위에 대한 관련 정보 제공
- **고객**: 전기차 보험의 고유한 필요에 관련된 질문
  - **Claude**: 정확하고 유익한 답변으로 응답하고 소스 링크 제공
- **고객**: 보험이나 자동차와 무관한 주제 외 질문
  - **Claude**: 관련 없는 주제는 논의하지 않음을 명확히 하고 사용자를 자동차 보험으로 다시 유도
- **고객**: 보험 견적에 관심 표현
  - **Claude**: 적절한 견적을 결정하기 위해 일련의 질문을 하고 응답에 맞게 조정
  - **Claude**: 견적 생성 API 도구를 사용하도록 요청하고 사용자로부터 수집한 필요한 정보 포함
  - **Claude**: API 도구 사용으로부터 응답 정보를 받고 정보를 자연스러운 응답으로 합성하여 제공된 견적을 사용자에게 제시
- **고객**: 후속 질문 문의
  - **Claude**: 필요에 따라 후속 질문에 답변
  - **Claude**: 고객을 보험 프로세스의 다음 단계로 안내하고 대화 종료

자신의 사용 사례를 위해 작성하는 실제 예제에서는 이 상호작용에서 실제 단어를 작성하여 이상적인 톤, 응답 길이 및 Claude가 가져야 할 세부 수준을 파악하는 것이 유용할 수 있습니다.

### 상호작용을 고유한 작업으로 분류하기

고객 지원 채팅은 질문 답변에서 정보 검색, 요청 처리에 이르기까지 다양한 작업의 모음으로, 단일 고객 상호작용에 포함됩니다. 구축을 시작하기 전에 이상적인 고객 상호작용을 Claude가 수행할 수 있기를 원하는 모든 작업으로 분류합니다. 이렇게 하면 모든 작업에 대해 Claude를 프롬프트하고 평가할 수 있으며, 테스트 케이스를 작성할 때 고려해야 할 상호작용 범위를 잘 파악할 수 있습니다.

고객들은 때때로 사용자 요청에 따른 가능한 대화 변곡점의 상호작용 순서도로 시각화하는 것이 도움이 된다고 생각합니다.

위의 예제 보험 상호작용과 관련된 주요 작업은 다음과 같습니다:

1. 인사말 및 일반 지침
   - 고객을 따뜻하게 맞이하고 대화 시작
   - 회사 및 상호작용에 대한 일반 정보 제공
2. 제품 정보
   - 전기차 보험 범위에 대한 정보 제공











     이는 Claude가 컨텍스트에서 필요한 정보를 가지고 있어야 하며, [RAG 통합](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) 이 필요할 수 있음을 의미합니다.

   - 전기차 보험의 고유한 필요에 관련된 질문에 답변
   - 견적 또는 보험 세부사항에 대한 후속 질문에 답변
   - 적절한 경우 소스 링크 제공
3. 대화 관리
   - 주제 유지 (자동차 보험)
   - 관련 없는 질문을 관련 주제로 다시 유도
4. 견적 생성
   - 견적 적격성을 결정하기 위해 적절한 질문 제시
   - 고객 응답에 따라 질문 조정
   - 수집된 정보를 견적 생성 API에 제출
   - 제공된 견적을 고객에게 제시

### 성공 기준 수립하기

지원 팀과 함께 [명확한 성공 기준을 정의](https://platform.claude.com/docs/ko/test-and-evaluate/define-success) 하고 [측정 가능한 벤치마크와 목표가 있는 상세한 평가](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests) 를 작성합니다.

Claude가 정의된 작업을 얼마나 성공적으로 수행하는지 평가하는 데 사용할 수 있는 기준 및 벤치마크는 다음과 같습니다:

### 쿼리 이해 정확도

### 응답 관련성

### 응답 정확도

### 인용 제공 관련성

### 주제 준수

### 콘텐츠 생성 효과

### 에스컬레이션 효율성

Claude를 지원에 사용하는 비즈니스 영향을 평가하는 데 사용할 수 있는 기준 및 벤치마크는 다음과 같습니다:

### 감정 유지

### 편향 비율

### 고객 만족도 점수

### 평균 처리 시간

## Claude를 고객 서비스 에이전트로 구현하는 방법

### 올바른 Claude 모델 선택하기

모델 선택은 비용, 정확도 및 응답 시간 간의 트레이드오프에 따라 달라집니다.

고객 지원 채팅의 경우 Claude Sonnet 4.5는 지능, 지연 시간 및 비용의 균형을 맞추는 데 적합합니다. 그러나 여러 프롬프트, RAG, 도구 사용 및/또는 긴 컨텍스트 프롬프트를 포함하는 대화 흐름이 있는 경우 Claude Haiku 4.5가 지연 시간을 최적화하는 데 더 적합할 수 있습니다.

### 강력한 프롬프트 구축하기

Claude를 고객 지원에 사용하려면 Claude가 적절하게 응답할 수 있도록 충분한 방향과 컨텍스트를 가지면서도 광범위한 고객 문의를 처리할 수 있는 충분한 유연성을 가져야 합니다.

시스템 프롬프트부터 시작하여 강력한 프롬프트의 요소를 작성해 봅시다:

```
IDENTITY = """You are Eva, a friendly and knowledgeable AI assistant for Acme Insurance
Company. Your role is to warmly welcome customers and provide information on
Acme's insurance offerings, which include car insurance and electric car
insurance. You can also help customers get quotes for their insurance needs."""
```

시스템 프롬프트 내에 모든 정보를 넣으려는 유혹이 있을 수 있지만, Claude는 실제로 첫 번째 `User` 턴 내에 대부분의 프롬프트 콘텐츠를 작성할 때 가장 잘 작동합니다 (역할 프롬프팅이 유일한 예외). [시스템 프롬프트로 Claude에게 역할 부여하기](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/system-prompts) 에서 자세히 알아보세요.

복잡한 프롬프트를 하위 섹션으로 나누고 한 번에 한 부분씩 작성하는 것이 가장 좋습니다. 각 작업에 대해 작업을 잘 수행하기 위해 Claude가 필요로 하는 프롬프트의 부분을 정의하는 단계별 프로세스를 따르면 더 큰 성공을 거둘 수 있습니다. 이 자동차 보험 고객 지원 예제의 경우, "인사말 및 일반 지침" 작업부터 시작하여 프롬프트의 모든 부분을 작성합니다. 이는 또한 프롬프트의 개별 부분을 더 빠르게 조정할 수 있으므로 프롬프트 디버깅을 더 쉽게 만듭니다.

이 모든 부분을 `config.py`라는 파일에 넣겠습니다.

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

그런 다음 자동차 보험 및 전기차 보험 정보에 대해서도 동일하게 수행합니다.

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

이제 정적 콘텐츠가 있으므로 Claude의 응답을 안내하기 위해 최소 4-5개의 샘플 "좋은" 상호작용을 추가합니다. 이 예제는 이상적인 고객 상호작용을 대표하며 가드레일, 도구 호출 등을 포함할 수 있습니다.

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

또한 Claude가 고객과 상호작용하는 방법에 대한 Do와 Don't를 설명하는 중요한 지침을 포함하고 싶을 것입니다. 이는 브랜드 가드레일이나 지원 정책에서 나올 수 있습니다.

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

이제 이 모든 섹션을 단일 문자열로 결합하여 프롬프트로 사용합니다.

```
TASK_SPECIFIC_INSTRUCTIONS = ' '.join([\
   STATIC_GREETINGS_AND_GENERAL,\
   STATIC_CAR_INSURANCE,\
   STATIC_ELECTRIC_CAR_INSURANCE,\
   EXAMPLES,\
   ADDITIONAL_GUARDRAILS,\
])
```

### 도구 사용으로 동적 및 에이전트 기능 추가하기

Claude는 클라이언트 측 도구 사용 기능을 사용하여 작업을 수행하고 정보를 동적으로 검색할 수 있습니다. 프롬프트가 활용해야 하는 외부 도구 또는 API를 나열하는 것부터 시작합니다.

이 예제에서는 견적 계산을 위한 하나의 도구로 시작합니다.

상기시키자면, 이 도구는 실제 계산을 수행하지 않으며, 지정된 인수로 도구를 사용해야 한다는 신호를 애플리케이션에 보낼 뿐입니다.

예제 보험 견적 계산기:

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

### 프롬프트 배포하기

프롬프트가 테스트 프로덕션 설정에서 얼마나 잘 작동하는지 알기 어렵고 [평가를 실행](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests) 하지 않으므로 프롬프트, Anthropic SDK 및 사용자 인터페이스를 위한 streamlit을 사용하여 작은 애플리케이션을 구축해 봅시다.

`chatbot.py`라는 파일에서 Anthropic SDK와의 상호작용을 캡슐화하는 ChatBot 클래스를 설정하여 시작합니다.

클래스는 두 가지 주요 메서드를 가져야 합니다: `generate_message`와 `process_user_input`.

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

### 사용자 인터페이스 구축하기

main 메서드를 사용하여 이 코드를 Streamlit으로 배포하여 테스트합니다. 이 `main()` 함수는 Streamlit 기반 채팅 인터페이스를 설정합니다.

`app.py`라는 파일에서 이를 수행합니다.

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

다음 명령으로 프로그램을 실행합니다:

```
streamlit run app.py
```

### 프롬프트 평가하기

프롬프팅은 프로덕션 준비가 되려면 테스트 및 최적화가 필요한 경우가 많습니다. 솔루션의 준비 상태를 결정하기 위해 정량적 및 정성적 방법을 결합하는 체계적인 프로세스를 사용하여 챗봇 성능을 평가합니다. 정의된 성공 기준을 기반으로 [강력한 경험적 평가](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests#building-evals-and-test-cases) 를 만들면 프롬프트를 최적화할 수 있습니다.

[Claude 콘솔](https://platform.claude.com/dashboard) 은 이제 다양한 시나리오에서 프롬프트를 테스트할 수 있는 평가 도구를 제공합니다.

### 성능 개선하기

복잡한 시나리오에서는 표준 [프롬프트 엔지니어링 기법](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/overview) 및 [가드레일 구현 전략](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) 이상으로 성능을 개선하기 위한 추가 전략을 고려하는 것이 도움이 될 수 있습니다. 다음은 몇 가지 일반적인 시나리오입니다:

#### RAG로 긴 컨텍스트 지연 시간 감소하기

많은 양의 정적 및 동적 컨텍스트를 다룰 때, 모든 정보를 프롬프트에 포함하면 높은 비용, 느린 응답 시간 및 컨텍스트 윈도우 제한에 도달할 수 있습니다. 이 시나리오에서 Retrieval Augmented Generation (RAG) 기법을 구현하면 성능과 효율성을 크게 향상시킬 수 있습니다.

[Voyage와 같은 임베딩 모델](https://platform.claude.com/docs/ko/build-with-claude/embeddings) 을 사용하여 정보를 벡터 표현으로 변환하면 더 확장 가능하고 반응성이 높은 시스템을 만들 수 있습니다. 이 접근 방식을 통해 모든 프롬프트에 가능한 모든 컨텍스트를 포함하는 대신 현재 쿼리를 기반으로 관련 정보를 동적으로 검색할 수 있습니다.

지원 사용 사례에 대한 RAG 구현 [RAG 레시피](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) 는 정확도를 높이고, 응답 시간을 단축하며, 광범위한 컨텍스트 요구사항이 있는 시스템에서 API 비용을 줄이는 것으로 나타났습니다.

#### 도구 사용으로 실시간 데이터 통합하기

계정 잔액이나 정책 세부사항과 같은 실시간 정보가 필요한 쿼리를 다룰 때, 임베딩 기반 RAG 접근 방식은 충분하지 않습니다. 대신 도구 사용을 활용하여 챗봇의 정확하고 실시간 응답을 제공하는 능력을 크게 향상시킬 수 있습니다. 예를 들어, 도구 사용을 사용하여 고객 정보를 조회하고, 주문 세부사항을 검색하며, 고객을 대신하여 주문을 취소할 수 있습니다.

이 접근 방식은 [도구 사용: 고객 서비스 에이전트 레시피](https://github.com/anthropics/anthropic-cookbook/blob/main/tool_use/customer_service_agent.ipynb) 에 설명되어 있으며, Claude의 응답에 라이브 데이터를 원활하게 통합하고 더 개인화되고 효율적인 고객 경험을 제공할 수 있습니다.

#### 입력 및 출력 가드레일 강화하기

특히 고객 서비스 시나리오에서 챗봇을 배포할 때, 오용, 범위 외 쿼리 및 부적절한 응답과 관련된 위험을 방지하는 것이 중요합니다. Claude는 본질적으로 이러한 시나리오에 탄력적이지만, 다음은 챗봇 가드레일을 강화하기 위한 추가 단계입니다:

- [환각 감소](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-hallucinations): 팩트 체킹 메커니즘 및 [인용](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb) 을 구현하여 제공된 정보에 응답을 기반하게 합니다.
- 정보 교차 확인: 에이전트의 응답이 회사 정책 및 알려진 사실과 일치하는지 확인합니다.
- 계약 약속 회피: 에이전트가 권한이 없는 약속을 하거나 계약을 체결하지 않도록 합니다.
- [탈옥 완화](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks): 해로움 스크린 및 입력 검증과 같은 방법을 사용하여 사용자가 모델 취약점을 악용하여 부적절한 콘텐츠를 생성하는 것을 방지합니다.
- 경쟁사 언급 회피: 경쟁사 언급 필터를 구현하여 브랜드 포커스를 유지하고 경쟁사의 제품이나 서비스를 언급하지 않습니다.
- [Claude를 캐릭터로 유지하기](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/keep-claude-in-character): 길고 복잡한 상호작용 중에도 Claude가 컨텍스트 스타일을 변경하지 않도록 합니다.
- 개인 식별 정보 (PII) 제거: 명시적으로 필요하고 승인되지 않는 한, 응답에서 PII를 제거합니다.

#### 스트리밍으로 인식된 응답 시간 감소하기

잠재적으로 긴 응답을 다룰 때, 스트리밍을 구현하면 사용자 참여도와 만족도를 크게 향상시킬 수 있습니다. 이 시나리오에서 사용자는 전체 응답이 생성될 때까지 기다리는 대신 점진적으로 답변을 받습니다.

스트리밍을 구현하는 방법은 다음과 같습니다:

1. [Anthropic 스트리밍 API](https://platform.claude.com/docs/ko/build-with-claude/streaming) 를 사용하여 스트리밍 응답을 지원합니다.
2. 들어오는 텍스트 청크를 처리하도록 프론트엔드를 설정합니다.
3. 각 청크가 도착할 때 표시하여 실시간 입력을 시뮬레이션합니다.
4. 사용자가 이동했다가 돌아올 때 전체 응답을 볼 수 있도록 전체 응답을 저장하는 메커니즘을 구현합니다.

경우에 따라 스트리밍을 통해 더 높은 기본 지연 시간을 가진 더 고급 모델을 사용할 수 있으므로, 점진적 표시가 더 긴 처리 시간의 영향을 완화합니다.

#### 챗봇 확장하기

챗봇의 복잡도가 증가함에 따라 애플리케이션 아키텍처가 이에 맞게 발전할 수 있습니다. 아키텍처에 추가 계층을 추가하기 전에 다음의 덜 포괄적인 옵션을 고려하세요:

- 프롬프트를 최대한 활용하고 프롬프트 엔지니어링을 통해 최적화하고 있는지 확인합니다. [프롬프트 엔지니어링 가이드](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/overview) 를 사용하여 가장 효과적인 프롬프트를 작성합니다.
- 프롬프트에 추가 [도구](https://platform.claude.com/docs/ko/build-with-claude/tool-use) 를 추가합니다 ( [프롬프트 체인](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/chain-prompts) 포함 가능). 필요한 기능을 달성할 수 있는지 확인합니다.

챗봇이 매우 다양한 작업을 처리하는 경우, 초기 고객 쿼리를 라우팅하기 위해 [별도의 의도 분류기](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) 를 추가하는 것을 고려할 수 있습니다. 기존 애플리케이션의 경우, 이는 고객 쿼리를 분류기를 통해 라우팅한 다음 특화된 대화 (자신의 도구 및 시스템 프롬프트 세트 포함)로 라우팅하는 의사 결정 트리를 만드는 것을 포함합니다. 이 방법은 지연 시간을 증가시킬 수 있는 Claude에 대한 추가 호출이 필요합니다.

### Claude를 지원 워크플로우에 통합하기

우리의 예제는 Streamlit 환경 내에서 호출 가능한 Python 함수에 중점을 두었지만, 실시간 지원 챗봇을 배포하려면 API 서비스가 필요합니다.

이를 접근하는 방법은 다음과 같습니다:

1. API 래퍼 생성: 분류 함수 주위에 간단한 API 래퍼를 개발합니다. 예를 들어, Flask API 또는 Fast API를 사용하여 코드를 HTTP 서비스로 래핑할 수 있습니다. HTTP 서비스는 사용자 입력을 수락하고 어시스턴트 응답을 전체적으로 반환할 수 있습니다. 따라서 서비스는 다음과 같은 특성을 가질 수 있습니다:
   - Server-Sent Events (SSE): SSE는 서버에서 클라이언트로 응답의 실시간 스트리밍을 허용합니다. 이는 LLM으로 작업할 때 부드럽고 대화형 경험을 제공하는 데 중요합니다.
   - 캐싱: 캐싱을 구현하면 응답 시간을 크게 개선하고 불필요한 API 호출을 줄일 수 있습니다.
   - 컨텍스트 유지: 사용자가 이동했다가 돌아올 때 컨텍스트를 유지하는 것은 대화의 연속성을 위해 중요합니다.
2. 웹 인터페이스 구축: Claude 기반 에이전트와 상호작용하기 위한 사용자 친화적인 웹 UI를 구현합니다.


[Retrieval Augmented Generation (RAG) cookbook\\
\\
더 많은 예제 코드와 상세한 지침을 위해 RAG cookbook 레시피를 방문하세요.](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/retrieval_augmented_generation/guide.ipynb) [Citations cookbook\\
\\
정보의 정확성과 설명 가능성을 보장하는 방법에 대해 Citations cookbook 레시피를 살펴보세요.](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [Claude로 구축하기 전에](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat#claude)
- [Claude를 지원 채팅에 사용할지 결정하기](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat#claude-2)
- [Claude를 고객 서비스 에이전트로 구현하는 방법](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat#claude-3)
- [올바른 Claude 모델 선택하기](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat#claude-4)
- [Claude를 지원 워크플로우에 통합하기](https://platform.claude.com/docs/ko/about-claude/use-case-guides/customer-support-chat#claude-5)

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