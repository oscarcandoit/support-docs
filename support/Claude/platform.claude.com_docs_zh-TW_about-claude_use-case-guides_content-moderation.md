---
url: "https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation"
title: "內容審核 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-TW/home)

- [開發者指南](https://platform.claude.com/docs/zh-TW/intro)
- [API 參考](https://platform.claude.com/docs/zh-TW/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [資源](https://platform.claude.com/docs/zh-TW/resources/overview)
- [發行說明](https://platform.claude.com/docs/zh-TW/release-notes/overview)

繁體中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-TW%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

Search...

⌘K

資源

[概覽](https://platform.claude.com/docs/zh-TW/resources/overview) [詞彙表](https://platform.claude.com/docs/zh-TW/about-claude/glossary) [系統提示詞](https://platform.claude.com/docs/zh-TW/release-notes/system-prompts)

使用案例

[概覽](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/overview) [工單路由](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/ticket-routing) [客戶支援 agent](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/customer-support-chat) [內容審核](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation) [法律摘要](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/legal-summarization)

提示詞庫

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

使用案例

內容審核

使用案例

# 內容審核

Copy page

內容審核是維護數位應用程式中安全、尊重和高效環境的關鍵方面。在本指南中，我們將討論如何使用 Claude 來審核您數位應用程式中的內容。

Copy page

> 請造訪我們的 [內容審核食譜](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb)，查看使用 Claude 的內容審核實作範例。

本指南專注於審核您應用程式中的使用者生成內容。如果您正在尋找審核與 Claude 互動的指導，請參考我們的 [防護欄指南](https://platform.claude.com/docs/zh-TW/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)。

## 使用 Claude 建構之前

### 決定是否使用 Claude 進行內容審核

以下是一些關鍵指標，表明您應該使用像 Claude 這樣的 LLM，而不是傳統的 ML 或基於規則的內容審核方法：

### 您想要具成本效益且快速的實作

### 您希望同時具備語義理解和快速決策

### 您需要一致的政策決策

### 您的審核政策可能會隨時間改變或演進

### 您需要為審核決策提供可解釋的推理

### 您需要多語言支援而無需維護單獨的模型

### 您需要多模態支援

Anthropic 已訓練所有 Claude 模型誠實、有用且無害。這可能導致 Claude 審核被認為特別危險的內容（符合我們的 [可接受使用政策](https://www.anthropic.com/legal/aup)），無論使用何種提示。例如，一個希望允許使用者發布明確性內容的成人網站可能會發現，即使他們在提示中指定不要審核明確性內容，Claude 仍會將明確內容標記為需要審核。我們建議在建立審核解決方案之前先審查我們的 AUP。

### 生成要審核的內容範例

在開發內容審核解決方案之前，首先創建應該被標記的內容和不應該被標記的內容的範例。確保包含邊緣案例和可能對內容審核系統有效處理困難的挑戰性場景。之後，審查您的範例以創建一個明確定義的審核類別清單。
例如，社交媒體平台生成的範例可能包括以下內容：

```
allowed_user_comments = [\
    'This movie was great, I really enjoyed it. The main actor really killed it!',\
    'I hate Mondays.',\
    'It is a great time to invest in gold!'\
]

disallowed_user_comments = [\
    'Delete this post now or you better hide. I am coming after you and your family.',\
    'Stay away from the 5G cellphones!! They are using 5G to control you.',\
    'Congratulations! You have won a $1,000 gift card. Click here to claim your prize!'\
]

# Sample user comments to test the content moderation
user_comments = allowed_user_comments + disallowed_user_comments

# List of categories considered unsafe for content moderation
unsafe_categories = [\
    'Child Exploitation',\
    'Conspiracy Theories',\
    'Hate',\
    'Indiscriminate Weapons',\
    'Intellectual Property',\
    'Non-Violent Crimes',\
    'Privacy',\
    'Self-Harm',\
    'Sex Crimes',\
    'Sexual Content',\
    'Specialized Advice',\
    'Violent Crimes'\
]
```

有效審核這些範例需要對語言的細緻理解。在評論 `This movie was great, I really enjoyed it. The main actor really killed it!` 中，內容審核系統需要識別出「killed it」是一個隱喻，而不是實際暴力的指示。相反，儘管沒有明確提及暴力，評論 `Delete this post now or you better hide. I am coming after you and your family.` 應該被內容審核系統標記。

`unsafe_categories` 清單可以根據您的特定需求進行自訂。例如，如果您希望防止未成年人在您的網站上創建內容，您可以將「未成年人發布」附加到清單中。

* * *

## 如何使用 Claude 審核內容

### 選擇正確的 Claude 模型

在選擇模型時，重要的是要考慮您資料的大小。如果成本是一個考慮因素，像 Claude Haiku 3 這樣的較小模型由於其成本效益而是一個絕佳選擇。以下是為每月接收十億篇貼文的社交媒體平台審核文字的成本估算：

- **內容大小**
  - 每月貼文數：10億
  - 每篇貼文字符數：100
  - 總字符數：1000億
- **估計代幣數**
  - 輸入代幣：286億（假設每3.5個字符1個代幣）
  - 被標記訊息的百分比：3%
  - 每個被標記訊息的輸出代幣：50
  - 總輸出代幣：15億
- **Claude Haiku 3 估計成本**
  - 輸入代幣成本：2,860 MTok \* $0.25/MTok = $715
  - 輸出代幣成本：1,500 MTok \* $1.25/MTok = $1,875
  - 月度成本：$715 + $1,875 = $2,590
- **Claude Sonnet 4.5 估計成本**
  - 輸入代幣成本：2,860 MTok \* $3.00/MTok = $8,580
  - 輸出代幣成本：1,500 MTok \* $15.00/MTok = $22,500
  - 月度成本：$8,580 + $22,500 = $31,080

實際成本可能與這些估算不同。這些估算基於 [批次處理](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation#consider-batch-processing) 部分中強調的提示。通過從回應中移除 `explanation` 欄位，輸出代幣可以進一步減少。

### 建立強大的提示

為了使用 Claude 進行內容審核，Claude 必須理解您應用程式的審核要求。讓我們從編寫一個允許您定義審核需求的提示開始：

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def moderate_message(message, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construct the prompt for Claude, including the message and unsafe categories
    assessment_prompt = f"""
    Determine whether the following message warrants moderation,
    based on the unsafe categories outlined below.

    Message:
    <message>{message}</message>

    Unsafe Categories:
    <categories>
    {unsafe_category_str}
    </categories>

    Respond with ONLY a JSON object, using the format below:
    {{
    "violation": <Boolean field denoting whether the message should be moderated>,
    "categories": [Comma-separated list of violated categories],
    "explanation": [Optional. Only include if there is a violation.]
    }}"""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the violation status from the assessment
    contains_violation = assessment['violation']

    # If there's a violation, get the categories and explanation; otherwise, use empty defaults
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    violation, violated_categories, explanation = moderate_message(comment, unsafe_categories)

    if violation:
        print(f"Violated Categories: {', '.join(violated_categories)}")
        print(f"Explanation: {explanation}")
    else:
        print("No issues detected.")
```

在這個範例中，`moderate_message` 函數包含一個評估提示，其中包括不安全內容類別和我們希望評估的訊息。提示要求 Claude 根據我們定義的不安全類別評估訊息是否應該被審核。

然後解析模型的評估以確定是否存在違規。如果存在違規，Claude 還會返回違規類別清單，以及解釋訊息為何不安全的說明。

### 評估您的提示

內容審核是一個分類問題。因此，您可以使用我們 [分類食譜](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) 中概述的相同技術來確定您內容審核系統的準確性。

另一個考慮因素是，您可以創建多個類別來表示各種風險級別，而不是將內容審核視為二元分類問題。創建多個風險級別允許您調整審核的積極性。例如，您可能希望自動阻止被認為是高風險的使用者查詢，而有許多中等風險查詢的使用者則被標記供人工審查。

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def assess_risk_level(message, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Construct the prompt for Claude, including the message, unsafe categories, and risk level definitions
    assessment_prompt = f"""
    Assess the risk level of the following message warrants moderation,
    based on the unsafe categories listed below.

Message:
<message>{message}</message>

Unsafe Categories:
<categories>
{unsafe_category_str}
</categories>

Assign a risk level based on your confidence that the user's message should be moderated
based on the defined unsafe categories:

0 - No risk
1 - Low risk
2 - Medium risk
3 - High risk

Respond with ONLY a JSON object, using the format below:
{{
  "risk_level": <Numerical field denoting the risk level>,
  "categories": [Comma-separated list of violated categories],
  "explanation": <Optional. Only include if risk level is greater than 0>
}}"""

    # Send the request to Claude for risk assessment
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the risk level, violated categories, and explanation from the assessment
    risk_level = assessment["risk_level"]
    violated_categories = assessment["categories"]
    explanation = assessment.get("explanation")

    return risk_level, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    risk_level, violated_categories, explanation = assess_risk_level(comment, unsafe_categories)

    print(f"Risk Level: {risk_level}")
    if violated_categories:
        print(f"Violated Categories: {', '.join(violated_categories)}")
    if explanation:
        print(f"Explanation: {explanation}")
```

這段程式碼實作了一個 `assess_risk_level` 函數，使用 Claude 來評估訊息的風險級別。該函數接受一個訊息和一個不安全類別清單作為輸入。

在函數內部，為 Claude 生成一個提示，包括要評估的訊息、不安全類別，以及評估風險級別的具體指示。提示指示 Claude 回應一個 JSON 物件，包括風險級別、違規類別和可選的解釋。

這種方法通過分配風險級別實現靈活的內容審核。它可以無縫整合到更大的系統中，根據評估的風險級別自動過濾內容或標記評論供人工審查。例如，在執行此程式碼時，評論 `Delete this post now or you better hide. I am coming after you and your family.` 由於其危險威脅被識別為高風險。相反，評論 `Stay away from the 5G cellphones!! They are using 5G to control you.` 被歸類為中等風險。

### 部署您的提示

一旦您對解決方案的品質有信心，就是將其部署到生產環境的時候了。以下是在生產環境中使用內容審核時要遵循的一些最佳實踐：

1. **為使用者提供清晰的回饋：** 當使用者輸入被阻止或回應因內容審核而被標記時，提供資訊豐富且建設性的回饋，幫助使用者理解為什麼他們的訊息被標記，以及如何適當地重新表述。在上面的編碼範例中，這是通過 Claude 回應中的 `explanation` 標籤來完成的。

2. **分析被審核的內容：** 追蹤您的審核系統標記的內容類型，以識別趨勢和潛在的改進領域。

3. **持續評估和改進：** 使用精確度和召回率追蹤等指標定期評估您內容審核系統的性能。使用這些資料來迭代改進您的審核提示、關鍵字和評估標準。


* * *

## 提升性能

在複雜場景中，除了標準的 [提示工程技術](https://platform.claude.com/docs/zh-TW/build-with-claude/prompt-engineering/overview) 之外，考慮額外的策略來提升性能可能會有所幫助。以下是一些進階策略：

### 定義主題並提供範例

除了在提示中列出不安全類別外，還可以通過提供與每個類別相關的定義和短語來進一步改進。

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

# Dictionary of categories considered unsafe for content moderation, with their definitions
unsafe_category_definitions = {
    'Child Exploitation': 'Content that depicts child nudity or that enables, encourages, excuses, or depicts the sexual abuse of children.',
    'Conspiracy Theories': """Content that promotes or endorses unfounded, false, or misleading theories about events, situations, or individuals,
        which can incite harm or undermine public trust in institutions or facts.""",
    'Hate': """Content that is hateful toward people on the basis of their protected characteristics
        (race, color, ethnicity, national origin, disability, religious affiliation, caste, sexual orientation, sex, gender identity and serious disease),
        or content that perpetuates negative stereotypes.""",
    'Indiscriminate Weapons': 'Content that enables the creation of weapons of mass destruction.',
    'Intellectual Property': 'Content that violates the intellectual property rights of third parties.',
    'Non-Violent Crimes': 'Content that enables, encourages, or excuses the commission of non-violent crimes.',
    'Privacy': 'Content that contains sensitive, personal information about private individuals.',
    'Self-Harm': 'Content that enables, encourages, or excuses acts of intentional self-harm.',
    'Sex Crimes': 'Content that enables, encourages, or excuses the commission of sex crimes.',
    'Sexual Content': 'Content that contains erotic descriptions or explicit depictions of sex acts.',
    'Specialized Advice': """Content that contains financial, medical, or legal advice.
        Financial advice includes guidance on investments, stocks, bonds, or any financial planning.""",
    'Violent Crimes': 'Content that enables, encourages, or excuses the commission of violent crimes.',
}

def moderate_message_with_definitions(message, unsafe_category_definitions):
    # Format unsafe categories string, with each category and its definition on a new line
    unsafe_category_str = '\n'.join(f'{category}: {definition}'
        for category, definition in unsafe_category_definitions.items()
    )

    # Construct the prompt for Claude, including the message and unsafe categories
    assessment_prompt = f"""Determine whether the following message warrants moderation, based on the unsafe categories outlined below.

Message:
<message>{message}</message>

Unsafe Categories and Their Definitions:
<categories>
{unsafe_category_str}
</categories>

It's important that you remember all unsafe categories and their definitions.

Respond with ONLY a JSON object, using the format below:
{{
  "violation": <Boolean field denoting whether the message should be moderated>,
  "categories": [Comma-separated list of violated categories],
  "explanation": [Optional. Only include if there is a violation.]
}}"""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=200,
        temperature=0,   # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)

    # Extract the violation status from the assessment
    contains_violation = assessment['violation']

    # If there's a violation, get the categories and explanation; otherwise, use empty defaults
    violated_categories = assessment.get('categories', []) if contains_violation else []
    explanation = assessment.get('explanation') if contains_violation else None

    return contains_violation, violated_categories, explanation

# Process each comment and print the results
for comment in user_comments:
    print(f"\nComment: {comment}")
    violation, violated_categories, explanation = moderate_message_with_definitions(comment, unsafe_category_definitions)

    if violation:
        print(f"Violated Categories: {', '.join(violated_categories)}")
        print(f"Explanation: {explanation}")
    else:
        print("No issues detected.")
```

`moderate_message_with_definitions` 函數通過允許每個不安全類別與詳細定義配對來擴展早期的 `moderate_message` 函數。這在程式碼中通過將原始函數中的 `unsafe_categories` 清單替換為 `unsafe_category_definitions` 字典來實現。這個字典將每個不安全類別映射到其對應的定義。類別名稱和其定義都包含在提示中。

值得注意的是，`Specialized Advice` 類別的定義現在指定了應該被禁止的金融建議類型。因此，之前通過 `moderate_message` 評估的評論 `It's a great time to invest in gold!` 現在觸發了違規。

### 考慮批次處理

在不需要即時審核的情況下，為了降低成本，考慮批次審核訊息。在提示的上下文中包含多個訊息，並要求 Claude 評估哪些訊息應該被審核。

```
import anthropic
import json

# Initialize the Anthropic client
client = anthropic.Anthropic()

def batch_moderate_messages(messages, unsafe_categories):
    # Convert the list of unsafe categories into a string, with each category on a new line
    unsafe_category_str = '\n'.join(unsafe_categories)

    # Format messages string, with each message wrapped in XML-like tags and given an ID
    messages_str = '\n'.join([f'<message id={idx}>{msg}</message>' for idx, msg in enumerate(messages)])

    # Construct the prompt for Claude, including the messages and unsafe categories
    assessment_prompt = f"""Determine the messages to moderate, based on the unsafe categories outlined below.

Messages:
<messages>
{messages_str}
</messages>

Unsafe categories and their definitions:
<categories>
{unsafe_category_str}
</categories>

Respond with ONLY a JSON object, using the format below:
{{
  "violations": [\
    {{\
      "id": <message id>,\
      "categories": [list of violated categories],\
      "explanation": <Explanation of why there's a violation>\
    }},\
    ...\
  ]
}}

Important Notes:
- Remember to analyze every message for a violation.
- Select any number of violations that reasonably apply."""

    # Send the request to Claude for content moderation
    response = client.messages.create(
        model="claude-3-haiku-20240307",  # Using the Haiku model for lower costs
        max_tokens=2048,  # Increased max token count to handle batches
        temperature=0,    # Use 0 temperature for increased consistency
        messages=[\
            {"role": "user", "content": assessment_prompt}\
        ]
    )

    # Parse the JSON response from Claude
    assessment = json.loads(response.content[0].text)
    return assessment

# Process the batch of comments and get the response
response_obj = batch_moderate_messages(user_comments, unsafe_categories)

# Print the results for each detected violation
for violation in response_obj['violations']:
    print(f"""Comment: {user_comments[violation['id']]}
Violated Categories: {', '.join(violation['categories'])}
Explanation: {violation['explanation']}
""")
```

在這個範例中，`batch_moderate_messages` 函數通過單次 Claude API 呼叫處理整批訊息的審核。
在函數內部，創建一個提示，包括要評估的訊息清單、定義的不安全內容類別及其描述。提示指示 Claude 返回一個 JSON 物件，列出所有包含違規的訊息。回應中的每個訊息都通過其 id 識別，該 id 對應於訊息在輸入清單中的位置。
請記住，為您的特定需求找到最佳批次大小可能需要一些實驗。雖然較大的批次大小可以降低成本，但它們也可能導致品質略有下降。此外，您可能需要增加 Claude API 呼叫中的 `max_tokens` 參數以容納更長的回應。有關您選擇的模型可以輸出的最大代幣數的詳細資訊，請參考 [模型比較頁面](https://platform.claude.com/docs/zh-TW/about-claude/models#model-comparison-table)。

[內容審核食譜\\
\\
查看如何使用 Claude 進行內容審核的完整實作程式碼範例。](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [防護欄指南\\
\\
探索我們的防護欄指南，了解審核與 Claude 互動的技術。](https://platform.claude.com/docs/zh-TW/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [使用 Claude 建構之前](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation#claude)
- [決定是否使用 Claude 進行內容審核](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation#claude-2)
- [如何使用 Claude 審核內容](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation#claude-3)
- [選擇正確的 Claude 模型](https://platform.claude.com/docs/zh-TW/about-claude/use-case-guides/content-moderation#claude-4)

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