---
url: "https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing"
title: "티켓 라우팅 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ko/home)

- [개발자 가이드](https://platform.claude.com/docs/ko/intro)
- [API 참조](https://platform.claude.com/docs/ko/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [리소스](https://platform.claude.com/docs/ko/resources/overview)
- [릴리스 노트](https://platform.claude.com/docs/ko/release-notes/overview)

한국어

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fko%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

티켓 라우팅

사용 사례

# 티켓 라우팅

Copy page

이 가이드는 Claude의 고급 자연어 이해 능력을 활용하여 고객 의도, 긴급성, 우선순위, 고객 프로필 등을 기반으로 고객 지원 티켓을 대규모로 분류하는 방법을 안내합니다.

Copy page

## 티켓 라우팅에 Claude 사용 여부 결정

분류 작업에 기존 ML 접근법 대신 Claude와 같은 LLM을 사용해야 하는 주요 지표들은 다음과 같습니다:

### 사용 가능한 레이블이 지정된 훈련 데이터가 제한적인 경우

### 분류 카테고리가 시간이 지남에 따라 변경되거나 진화할 가능성이 있는 경우

### 복잡하고 구조화되지 않은 텍스트 입력을 처리해야 하는 경우

### 분류 규칙이 의미론적 이해를 기반으로 하는 경우

### 분류 결정에 대한 해석 가능한 추론이 필요한 경우

### 엣지 케이스와 모호한 티켓을 더 효과적으로 처리하고자 하는 경우

### 별도의 모델을 유지하지 않고 다국어 지원이 필요한 경우

* * *

## LLM 지원 워크플로우 구축 및 배포

### 현재 지원 접근법 이해

자동화에 뛰어들기 전에 기존 티켓팅 시스템을 이해하는 것이 중요합니다. 지원 팀이 현재 티켓 라우팅을 어떻게 처리하는지 조사하는 것부터 시작하세요.

다음과 같은 질문들을 고려해보세요:

- 어떤 SLA/서비스 제공을 적용할지 결정하는 데 어떤 기준이 사용되나요?
- 티켓 라우팅이 티켓이 어떤 지원 계층이나 제품 전문가에게 가는지 결정하는 데 사용되나요?
- 이미 자동화된 규칙이나 워크플로우가 있나요? 어떤 경우에 실패하나요?
- 엣지 케이스나 모호한 티켓은 어떻게 처리되나요?
- 팀은 티켓의 우선순위를 어떻게 정하나요?

인간이 특정 케이스를 어떻게 처리하는지 더 많이 알수록 Claude와 함께 작업하여 해당 작업을 수행하는 데 더 나을 것입니다.

### 사용자 의도 카테고리 정의

잘 정의된 사용자 의도 카테고리 목록은 Claude를 사용한 정확한 지원 티켓 분류에 중요합니다. Claude가 시스템 내에서 티켓을 효과적으로 라우팅하는 능력은 시스템 카테고리가 얼마나 잘 정의되어 있는지에 직접적으로 비례합니다.

다음은 사용자 의도 카테고리와 하위 카테고리의 몇 가지 예입니다.

### 기술적 문제

### 계정 관리

### 제품 정보

### 사용자 안내

### 피드백

### 주문 관련

### 서비스 요청

### 보안 우려사항

### 규정 준수 및 법적 사항

### 응급 지원

### 교육 및 훈련

### 통합 및 API

의도 외에도 티켓 라우팅과 우선순위 지정은 긴급성, 고객 유형, SLA 또는 언어와 같은 다른 요소의 영향을 받을 수도 있습니다. 자동화된 라우팅 시스템을 구축할 때 다른 라우팅 기준도 고려해야 합니다.

### 성공 기준 설정

지원 팀과 협력하여 측정 가능한 벤치마크, 임계값 및 목표가 있는 [명확한 성공 기준을 정의](https://platform.claude.com/docs/ko/test-and-evaluate/define-success) 하세요.

다음은 지원 티켓 라우팅에 LLM을 사용할 때의 표준 기준과 벤치마크입니다:

### 분류 일관성

### 적응 속도

### 다국어 처리

### 엣지 케이스 처리

### 편향 완화

### 프롬프트 효율성

### 설명 가능성 점수

다음은 LLM 사용 여부와 관계없이 유용할 수 있는 몇 가지 일반적인 성공 기준입니다:

### 라우팅 정확도

### 할당까지의 시간

### 재라우팅 비율

### 첫 연락 해결률

### 평균 처리 시간

### 고객 만족도 점수

### 에스컬레이션 비율

### 상담원 생산성

### 셀프서비스 전환율

### 티켓당 비용

### 적절한 Claude 모델 선택

모델 선택은 비용, 정확도, 응답 시간 간의 트레이드오프에 따라 달라집니다.

많은 고객이 `claude-3-5-haiku-20241022`를 티켓 라우팅에 이상적인 모델로 발견했습니다. 이는 Claude 3 패밀리에서 가장 빠르고 비용 효율적인 모델이면서도 여전히 뛰어난 결과를 제공하기 때문입니다. 분류 문제가 깊은 주제 전문 지식이나 대량의 의도 카테고리 복잡한 추론을 요구하는 경우, [더 큰 Sonnet 모델](https://platform.claude.com/docs/ko/about-claude/models) 을 선택할 수 있습니다.

### 강력한 프롬프트 구축

티켓 라우팅은 분류 작업의 한 유형입니다. Claude는 지원 티켓의 내용을 분석하고 문제 유형, 긴급성, 필요한 전문 지식 또는 기타 관련 요소를 기반으로 사전 정의된 카테고리로 분류합니다.

티켓 분류 프롬프트를 작성해 보겠습니다. 초기 프롬프트는 사용자 요청의 내용을 포함하고 추론과 의도를 모두 반환해야 합니다.

[Claude Console](https://platform.claude.com/login) 의 [프롬프트 생성기](https://platform.claude.com/docs/ko/prompt-generator) 를 사용하여 Claude가 첫 번째 초안을 작성하도록 해보세요.

다음은 티켓 라우팅 분류 프롬프트의 예입니다:

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""당신은 고객 지원 티켓 분류 시스템 역할을 할 것입니다. 당신의 작업은 고객 지원 요청을 분석하고 각 요청에 대한 적절한 분류 의도와 추론을 출력하는 것입니다.

        다음은 분류해야 할 고객 지원 요청입니다:

        <request>{ticket_contents}</request>

        위 요청을 신중히 분석하여 고객의 핵심 의도와 요구사항을 파악하세요. 고객이 무엇을 요청하고 있는지, 무엇에 대해 우려하고 있는지 고려하세요.

        먼저 이 요청을 분류하는 방법에 대한 추론과 분석을 <reasoning> 태그 안에 작성하세요.

        그런 다음 <intent> 태그 안에 요청에 대한 적절한 분류 레이블을 출력하세요. 유효한 의도는 다음과 같습니다:
        <intents>
        <intent>지원, 피드백, 불만</intent>
        <intent>주문 추적</intent>
        <intent>환불/교환</intent>
        </intents>

        요청은 하나의 적용 가능한 의도만 가질 수 있습니다. 요청에 가장 적용 가능한 의도만 포함하세요.

        예를 들어, 다음 요청을 고려해보세요:
        <request>안녕하세요! 토요일에 고속 광섬유 인터넷을 설치했는데 설치 기사 Kevin이 정말 훌륭했습니다! 긍정적인 리뷰를 어디에 보낼 수 있나요? 도움 주셔서 감사합니다!</request>

        다음은 출력 형식의 예입니다(위 예시 요청에 대한):
        <reasoning>사용자는 긍정적인 피드백을 남기기 위한 정보를 찾고 있습니다.</reasoning>
        <intent>지원, 피드백, 불만</intent>

        다음은 몇 가지 추가 예시입니다:
        <examples>
        <example 2>
        예시 2 입력:
        <request>지난 주말 아버지의 장례식 동안 저희 가족에게 보여주신 연민에 대해 개인적으로 감사의 말씀을 드리고 싶었습니다. 직원분들이 이 전체 과정에서 너무 배려심 있고 도움이 되었습니다. 정말 우리 어깨의 짐을 덜어주었습니다. 조문 브로셔가 아름다웠습니다. 우리는 당신이 보여준 친절함을 결코 잊지 않을 것이며 절차가 얼마나 순조롭게 진행되었는지 정말 감사합니다. Hill 가족을 대표하여 Amarantha Hill이 다시 한 번 감사드립니다.</request>

        예시 2 출력:
        <reasoning>사용자가 자신의 경험에 대한 긍정적인 리뷰를 남깁니다.</reasoning>
        <intent>지원, 피드백, 불만</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        예시 9 입력:
        <request>당신의 웹사이트가 전체 화면을 차단하는 광고 팝업을 계속 보냅니다. 전화번호를 찾아서 불만을 제기하는 데만 20분이 걸렸습니다. 이 모든 팝업으로 어떻게 내 계정 정보에 액세스할 수 있나요? 웹사이트가 고장났으니 제 계정에 액세스해 주실 수 있나요? 파일에 있는 주소가 무엇인지 알아야 합니다.</request>

        예시 9 출력:
        <reasoning>사용자가 웹 계정 정보에 액세스하는 데 도움을 요청합니다.</reasoning>
        <intent>지원, 피드백, 불만</intent>
        </example 9>

        실제 의도 출력 전에 항상 분류 추론을 포함해야 합니다. 추론은 <reasoning> 태그로, 의도는 <intent> 태그로 둘러싸야 합니다. 추론과 의도만 반환하세요.
        """
```

이 프롬프트의 주요 구성 요소를 분석해 보겠습니다:

- Python f-string을 사용하여 프롬프트 템플릿을 만들어 `ticket_contents`가 `<request>` 태그에 삽입될 수 있도록 합니다.
- Claude에게 티켓 내용을 신중히 분석하여 고객의 핵심 의도와 요구사항을 파악하는 분류 시스템으로서 명확하게 정의된 역할을 부여합니다.
- 적절한 출력 형식에 대해 Claude에게 지시합니다. 이 경우 `<reasoning>` 태그 안에 추론과 분석을 제공한 다음 `<intent>` 태그 안에 적절한 분류 레이블을 제공하도록 합니다.
- 유효한 의도 카테고리를 지정합니다: "지원, 피드백, 불만", "주문 추적", "환불/교환".
- 출력 형식을 설명하는 몇 가지 예시(즉, 퓨샷 프롬프팅)를 포함하여 정확도와 일관성을 향상시킵니다.

Claude가 응답을 다양한 XML 태그 섹션으로 나누도록 하는 이유는 정규 표현식을 사용하여 출력에서 추론과 의도를 별도로 추출할 수 있기 때문입니다. 이를 통해 티켓을 라우팅할 사람을 결정하기 위해 의도만 사용하는 등 티켓 라우팅 워크플로우에서 대상화된 다음 단계를 만들 수 있습니다.

### 프롬프트 배포

테스트 프로덕션 환경에서 배포하고 [평가를 실행](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests) 하지 않고는 프롬프트가 얼마나 잘 작동하는지 알기 어렵습니다.

배포 구조를 구축해 보겠습니다. Claude에 대한 호출을 래핑하는 메서드 시그니처를 정의하는 것부터 시작하세요. 이미 작성하기 시작한 메서드를 가져와서 `ticket_contents`를 입력으로 하고 이제 `reasoning`과 `intent`의 튜플을 출력으로 반환합니다. 기존 ML을 사용하는 기존 자동화가 있는 경우 대신 해당 메서드 시그니처를 따라야 합니다.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""당신은 고객 지원 티켓 분류 시스템 역할을 할 것입니다.
        ...
        ... 추론은 <reasoning> 태그로, 의도는 <intent> 태그로 둘러싸야 합니다. 추론과 의도만 반환하세요.
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

이 코드는:

- Anthropic 라이브러리를 가져오고 API 키를 사용하여 클라이언트 인스턴스를 만듭니다.
- `ticket_contents` 문자열을 받는 `classify_support_request` 함수를 정의합니다.
- `classification_prompt`를 사용하여 분류를 위해 `ticket_contents`를 Claude에 보냅니다.
- 응답에서 추출된 모델의 `reasoning`과 `intent`를 반환합니다.

파싱하기 전에 전체 추론과 의도 텍스트가 생성될 때까지 기다려야 하므로 `stream=False`(기본값)로 설정합니다.

* * *

## 프롬프트 평가

프롬프팅은 종종 프로덕션 준비가 되기 위해 테스트와 최적화가 필요합니다. 솔루션의 준비 상태를 결정하려면 앞서 설정한 성공 기준과 임계값을 기반으로 성능을 평가하세요.

평가를 실행하려면 실행할 테스트 케이스가 필요합니다. 이 가이드의 나머지 부분은 이미 [테스트 케이스를 개발](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests) 했다고 가정합니다.

### 평가 함수 구축

이 가이드의 예시 평가는 세 가지 주요 지표에서 Claude의 성능을 측정합니다:

- 정확도
- 분류당 비용

중요한 다른 요소에 따라 Claude를 다른 축에서 평가해야 할 수도 있습니다.

이를 평가하기 위해 먼저 작성한 스크립트를 수정하고 예측된 의도를 실제 의도와 비교하고 올바른 예측의 백분율을 계산하는 함수를 추가해야 합니다. 또한 비용 계산과 시간 측정 기능을 추가해야 합니다.

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""당신은 고객 지원 티켓 분류 시스템 역할을 할 것입니다.
        ...
        ...추론은 <reasoning> 태그로, 의도는 <intent> 태그로 둘러싸야 합니다. 추론과 의도만 반환하세요.
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

수정한 내용을 분석해 보겠습니다:

- 테스트 케이스의 `actual_intent`를 `classify_support_request` 메서드에 추가하고 Claude의 의도 분류가 골든 의도 분류와 일치하는지 평가하기 위한 비교를 설정했습니다.
- 사용된 입력 및 출력 토큰을 기반으로 비용을 계산하기 위해 API 호출에 대한 사용 통계를 추출했습니다.

### 평가 실행

적절한 평가에는 좋은 결과가 무엇인지 결정하기 위한 명확한 임계값과 벤치마크가 필요합니다. 위 스크립트는 정확도, 응답 시간, 분류당 비용에 대한 런타임 값을 제공하지만 여전히 명확하게 설정된 임계값이 필요합니다. 예를 들어:

- **정확도:** 95% (100개 테스트 중)
- **분류당 비용:** 현재 라우팅 방법에서 평균 50% 감소 (100개 테스트에서)

이러한 임계값을 갖는 것은 대규모로, 그리고 공정한 경험주의로 어떤 방법이 가장 좋은지, 요구사항에 더 잘 맞추기 위해 어떤 변경이 필요할 수 있는지 빠르고 쉽게 알 수 있게 해줍니다.

* * *

## 성능 향상

복잡한 시나리오에서는 표준 [프롬프트 엔지니어링 기법](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/overview) 및 [가드레일 구현 전략](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) 을 넘어서 성능을 향상시키기 위한 추가 전략을 고려하는 것이 도움이 될 수 있습니다. 다음은 몇 가지 일반적인 시나리오입니다:

### 20개 이상의 의도 카테고리가 있는 경우 분류학적 계층 구조 사용

클래스 수가 증가함에 따라 필요한 예제 수도 확장되어 프롬프트가 다루기 어려워질 수 있습니다. 대안으로 분류기의 혼합을 사용하여 계층적 분류 시스템을 구현하는 것을 고려할 수 있습니다.

1. 의도를 분류학적 트리 구조로 구성합니다.
2. 트리의 모든 수준에서 일련의 분류기를 만들어 계단식 라우팅 접근법을 가능하게 합니다.

예를 들어, 티켓을 "기술적 문제", "청구 질문", "일반 문의"로 광범위하게 분류하는 최상위 분류기가 있을 수 있습니다. 이러한 각 카테고리는 분류를 더욱 세분화하기 위한 자체 하위 분류기를 가질 수 있습니다.

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **장점 \- 더 큰 뉘앙스와 정확도:** 각 부모 경로에 대해 다른 프롬프트를 만들 수 있어 더 대상화되고 맥락별 분류가 가능합니다. 이는 향상된 정확도와 고객 요청의 더 세밀한 처리로 이어질 수 있습니다.

- **단점 \- 증가된 지연시간:** 여러 분류기가 지연시간 증가로 이어질 수 있으므로 가장 빠른 모델인 Haiku로 이 접근법을 구현하는 것을 권장합니다.


### 매우 가변적인 티켓을 처리하기 위해 벡터 데이터베이스와 유사성 검색 검색 사용

예제 제공이 성능을 향상시키는 가장 효과적인 방법임에도 불구하고, 지원 요청이 매우 가변적이라면 단일 프롬프트에 충분한 예제를 포함하기 어려울 수 있습니다.

이 시나리오에서는 벡터 데이터베이스를 사용하여 예제 데이터셋에서 유사성 검색을 수행하고 주어진 쿼리에 대해 가장 관련성이 높은 예제를 검색할 수 있습니다.

[분류 레시피](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) 에서 자세히 설명된 이 접근법은 성능을 71% 정확도에서 93% 정확도로 향상시키는 것으로 나타났습니다.

### 예상되는 엣지 케이스를 구체적으로 고려

다음은 Claude가 티켓을 잘못 분류할 수 있는 시나리오입니다(상황에 따라 고유한 다른 시나리오가 있을 수 있음). 이러한 시나리오에서는 Claude가 엣지 케이스를 처리하는 방법에 대한 명시적인 지침이나 예제를 프롬프트에 제공하는 것을 고려하세요:

### 고객이 암시적 요청을 하는 경우

### Claude가 의도보다 감정을 우선시하는 경우

### 여러 문제로 인한 문제 우선순위 혼란

* * *

## Claude를 더 큰 지원 워크플로우에 통합

적절한 통합을 위해서는 Claude 기반 티켓 라우팅 스크립트가 더 큰 티켓 라우팅 시스템의 아키텍처에 어떻게 맞는지에 대한 결정을 내려야 합니다. 이를 수행할 수 있는 두 가지 방법이 있습니다:

- **푸시 기반:**사용 중인 지원 티켓 시스템(예: Zendesk)이 라우팅 서비스에 웹훅 이벤트를 보내 코드를 트리거하고, 이후 의도를 분류하고 라우팅합니다.
  - 이 접근법은 더 웹 확장 가능하지만 공개 엔드포인트를 노출해야 합니다.
- **풀 기반:**코드가 주어진 일정에 따라 최신 티켓을 풀하고 풀 시점에 라우팅합니다.
  - 이 접근법은 구현하기 더 쉽지만 풀 빈도가 너무 높을 때 지원 티켓 시스템에 불필요한 호출을 하거나 풀 빈도가 너무 낮을 때 지나치게 느릴 수 있습니다.

이러한 접근법 중 하나에 대해 스크립트를 서비스로 래핑해야 합니다. 접근법의 선택은 지원 티켓팅 시스템이 제공하는 API에 따라 달라집니다.

* * *

[분류 쿡북\\
\\
더 많은 예제 코드와 자세한 평가 지침을 위해 분류 쿡북을 방문하세요.](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
Claude Console에서 워크플로우 구축 및 평가를 시작하세요.](https://platform.claude.com/dashboard)

- [티켓 라우팅에 Claude 사용 여부 결정](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing#claude)
- [LLM 지원 워크플로우 구축 및 배포](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing#llm)
- [적절한 Claude 모델 선택](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing#claude-2)
- [20개 이상의 의도 카테고리가 있는 경우 분류학적 계층 구조 사용](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing#20)
- [Claude를 더 큰 지원 워크플로우에 통합](https://platform.claude.com/docs/ko/about-claude/use-case-guides/ticket-routing#claude-3)

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