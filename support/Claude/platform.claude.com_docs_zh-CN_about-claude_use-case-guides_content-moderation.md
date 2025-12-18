---
url: "https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation"
title: "内容审核 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-CN/home)

- [开发者指南](https://platform.claude.com/docs/zh-CN/intro)
- [API 参考](https://platform.claude.com/docs/zh-CN/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [资源](https://platform.claude.com/docs/zh-CN/resources/overview)
- [发布说明](https://platform.claude.com/docs/zh-CN/release-notes/overview)

简体中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-CN%2Fabout-claude%2Fuse-case-guides%2Fcontent-moderation)

Search...

⌘K

资源

[概览](https://platform.claude.com/docs/zh-CN/resources/overview) [词汇表](https://platform.claude.com/docs/zh-CN/about-claude/glossary) [系统提示词](https://platform.claude.com/docs/zh-CN/release-notes/system-prompts)

用例

[概览](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/overview) [工单路由](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing) [客户支持代理](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/customer-support-chat) [内容审核](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation) [法律总结](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization)

提示词库

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

用例

内容审核

用例

# 内容审核

Copy page

内容审核是维护数字应用程序中安全、尊重和高效环境的关键方面。在本指南中，我们将讨论如何使用Claude在您的数字应用程序中进行内容审核。

Copy page

> 访问我们的 [内容审核手册](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) 查看使用Claude实现内容审核的示例。

本指南专注于审核应用程序中用户生成的内容。如果您正在寻找关于审核与Claude交互的指导，请参考我们的 [护栏指南](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)。

## 使用Claude构建之前

### 决定是否使用Claude进行内容审核

以下是一些关键指标，表明您应该使用像Claude这样的LLM而不是传统的ML或基于规则的方法进行内容审核：

### 您希望成本效益高且快速实施

### 您希望兼具语义理解和快速决策

### 您需要一致的政策决策

### 您的审核政策可能会随时间变化或演进

### 您需要为审核决策提供可解释的推理

### 您需要多语言支持而无需维护单独的模型

### 您需要多模态支持

Anthropic已经训练所有Claude模型诚实、有用且无害。这可能导致Claude审核被认为特别危险的内容（符合我们的 [可接受使用政策](https://www.anthropic.com/legal/aup)），无论使用什么提示。例如，一个希望允许用户发布明确性内容的成人网站可能会发现，即使他们在提示中指定不要审核明确的性内容，Claude仍然会将明确内容标记为需要审核。我们建议在构建审核解决方案之前提前审查我们的AUP。

### 生成要审核的内容示例

在开发内容审核解决方案之前，首先创建应该被标记的内容和不应该被标记的内容的示例。确保包括边缘情况和可能对内容审核系统有效处理困难的挑战性场景。之后，审查您的示例以创建一个明确定义的审核类别列表。
例如，社交媒体平台生成的示例可能包括以下内容：

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

有效审核这些示例需要对语言有细致的理解。在评论`This movie was great, I really enjoyed it. The main actor really killed it!`中，内容审核系统需要识别"killed it"是一个隐喻，而不是实际暴力的指示。相反，尽管没有明确提及暴力，评论`Delete this post now or you better hide. I am coming after you and your family.`应该被内容审核系统标记。

`unsafe_categories`列表可以根据您的具体需求进行定制。例如，如果您希望防止未成年人在您的网站上创建内容，您可以在列表中添加"未成年人发帖"。

* * *

## 如何使用Claude进行内容审核

### 选择合适的Claude模型

在选择模型时，重要的是要考虑数据的大小。如果成本是一个考虑因素，像Claude Haiku 3这样的较小模型由于其成本效益是一个绝佳的选择。以下是为每月收到十亿帖子的社交媒体平台审核文本的成本估算：

- **内容大小**
  - 每月帖子数：10亿
  - 每个帖子的字符数：100
  - 总字符数：1000亿
- **估计令牌数**
  - 输入令牌：286亿（假设每3.5个字符1个令牌）
  - 被标记消息的百分比：3%
  - 每个被标记消息的输出令牌：50
  - 总输出令牌：15亿
- **Claude Haiku 3估计成本**
  - 输入令牌成本：2,860 MTok \* $0.25/MTok = $715
  - 输出令牌成本：1,500 MTok \* $1.25/MTok = $1,875
  - 月度成本：$715 + $1,875 = $2,590
- **Claude Sonnet 4.5估计成本**
  - 输入令牌成本：2,860 MTok \* $3.00/MTok = $8,580
  - 输出令牌成本：1,500 MTok \* $15.00/MTok = $22,500
  - 月度成本：$8,580 + $22,500 = $31,080

实际成本可能与这些估算不同。这些估算基于 [批处理](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation#consider-batch-processing) 部分中突出显示的提示。通过从响应中删除`explanation`字段，输出令牌可以进一步减少。

### 构建强大的提示

为了使用Claude进行内容审核，Claude必须了解您应用程序的审核要求。让我们从编写一个允许您定义审核需求的提示开始：

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

在这个示例中，`moderate_message`函数包含一个评估提示，其中包括不安全内容类别和我们希望评估的消息。提示要求Claude根据我们定义的不安全类别评估消息是否应该被审核。

然后解析模型的评估以确定是否存在违规。如果存在违规，Claude还会返回违规类别列表，以及解释消息为什么不安全的说明。

### 评估您的提示

内容审核是一个分类问题。因此，您可以使用我们的 [分类手册](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/classification/guide.ipynb) 中概述的相同技术来确定内容审核系统的准确性。

另一个考虑因素是，您可以创建多个类别来表示各种风险级别，而不是将内容审核视为二元分类问题。创建多个风险级别允许您调整审核的积极性。例如，您可能希望自动阻止被认为是高风险的用户查询，而有许多中等风险查询的用户被标记为人工审查。

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

这段代码实现了一个`assess_risk_level`函数，使用Claude评估消息的风险级别。该函数接受消息和不安全类别列表作为输入。

在函数内部，为Claude生成一个提示，包括要评估的消息、不安全类别和评估风险级别的具体指令。提示指示Claude用包含风险级别、违规类别和可选解释的JSON对象响应。

这种方法通过分配风险级别实现灵活的内容审核。它可以无缝集成到更大的系统中，根据评估的风险级别自动化内容过滤或标记评论进行人工审查。例如，在执行此代码时，评论`Delete this post now or you better hide. I am coming after you and your family.`被识别为高风险，因为其危险威胁。相反，评论`Stay away from the 5G cellphones!! They are using 5G to control you.`被归类为中等风险。

### 部署您的提示

一旦您对解决方案的质量有信心，就是将其部署到生产环境的时候了。以下是在生产环境中使用内容审核时要遵循的一些最佳实践：

1. **向用户提供清晰的反馈：** 当用户输入被阻止或响应因内容审核而被标记时，提供信息丰富且具有建设性的反馈，帮助用户理解为什么他们的消息被标记以及如何适当地重新表述。在上面的编码示例中，这通过Claude响应中的`explanation`标签来完成。

2. **分析被审核的内容：** 跟踪您的审核系统标记的内容类型，以识别趋势和潜在的改进领域。

3. **持续评估和改进：** 使用精确度和召回率跟踪等指标定期评估内容审核系统的性能。使用这些数据迭代地完善您的审核提示、关键词和评估标准。


* * *

## 提高性能

在复杂场景中，除了标准的 [提示工程技术](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/overview) 之外，考虑额外的策略来提高性能可能会有所帮助。以下是一些高级策略：

### 定义主题并提供示例

除了在提示中列出不安全类别外，还可以通过提供与每个类别相关的定义和短语来进一步改进。

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

`moderate_message_with_definitions`函数通过允许每个不安全类别与详细定义配对来扩展早期的`moderate_message`函数。这在代码中通过用`unsafe_category_definitions`字典替换原始函数中的`unsafe_categories`列表来实现。这个字典将每个不安全类别映射到其相应的定义。类别名称和其定义都包含在提示中。

值得注意的是，`Specialized Advice`类别的定义现在指定了应该被禁止的金融建议类型。因此，之前通过`moderate_message`评估的评论`It's a great time to invest in gold!`现在触发了违规。

### 考虑批处理

在不需要实时审核的情况下，为了降低成本，考虑批量审核消息。在提示的上下文中包含多个消息，并要求Claude评估哪些消息应该被审核。

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

在这个示例中，`batch_moderate_messages`函数通过单个Claude API调用处理整批消息的审核。
在函数内部，创建一个提示，包括要评估的消息列表、定义的不安全内容类别及其描述。提示指示Claude返回一个JSON对象，列出所有包含违规的消息。响应中的每个消息都通过其id标识，该id对应于消息在输入列表中的位置。
请记住，为您的特定需求找到最佳批处理大小可能需要一些实验。虽然较大的批处理大小可以降低成本，但它们也可能导致质量略有下降。此外，您可能需要增加Claude API调用中的`max_tokens`参数以适应更长的响应。有关您选择的模型可以输出的最大令牌数的详细信息，请参考 [模型比较页面](https://platform.claude.com/docs/zh-CN/about-claude/models#model-comparison-table)。

[内容审核手册\\
\\
查看如何使用Claude进行内容审核的完整基于代码的实现示例。](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building%5Fmoderation%5Ffilter.ipynb) [护栏指南\\
\\
探索我们的护栏指南，了解审核与Claude交互的技术。](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)

- [使用Claude构建之前](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation#claude)
- [决定是否使用Claude进行内容审核](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation#claude-2)
- [如何使用Claude进行内容审核](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation#claude-3)
- [选择合适的Claude模型](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/content-moderation#claude-4)

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

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)