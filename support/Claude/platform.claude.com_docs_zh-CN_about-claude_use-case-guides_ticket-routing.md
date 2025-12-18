---
url: "https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing"
title: "工单路由 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-CN/home)

- [开发者指南](https://platform.claude.com/docs/zh-CN/intro)
- [API 参考](https://platform.claude.com/docs/zh-CN/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [资源](https://platform.claude.com/docs/zh-CN/resources/overview)
- [发布说明](https://platform.claude.com/docs/zh-CN/release-notes/overview)

简体中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-CN%2Fabout-claude%2Fuse-case-guides%2Fticket-routing)

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

工单路由

用例

# 工单路由

Copy page

本指南介绍如何利用 Claude 的高级自然语言理解能力，基于客户意图、紧急程度、优先级、客户档案等因素大规模分类客户支持工单。

Copy page

## 确定是否使用 Claude 进行工单路由

以下是一些关键指标，表明您应该使用像 Claude 这样的 LLM 而不是传统的机器学习方法来完成分类任务：

### 您可用的标记训练数据有限

### 您的分类类别可能会随时间变化或演进

### 您需要处理复杂的非结构化文本输入

### 您的分类规则基于语义理解

### 您需要对分类决策进行可解释的推理

### 您希望更有效地处理边缘情况和模糊工单

### 您需要多语言支持而无需维护单独的模型

* * *

## 构建和部署您的 LLM 支持工作流

### 了解您当前的支持方法

在深入自动化之前，了解您现有的工单系统至关重要。首先调查您的支持团队目前如何处理工单路由。

考虑以下问题：

- 使用什么标准来确定应用什么 SLA/服务产品？
- 工单路由是否用于确定工单分配给哪个支持层级或产品专家？
- 是否已有任何自动化规则或工作流？在什么情况下它们会失败？
- 如何处理边缘情况或模糊工单？
- 团队如何优先处理工单？

您对人类如何处理某些情况了解得越多，就越能更好地与 Claude 合作完成任务。

### 定义用户意图类别

明确定义的用户意图类别列表对于使用 Claude 进行准确的支持工单分类至关重要。Claude 在您系统内有效路由工单的能力与您系统类别的明确定义程度成正比。

以下是一些示例用户意图类别和子类别。

### 技术问题

### 账户管理

### 产品信息

### 用户指导

### 反馈

### 订单相关

### 服务请求

### 安全问题

### 合规和法律

### 紧急支持

### 培训和教育

### 集成和 API

除了意图之外，工单路由和优先级也可能受到其他因素的影响，如紧急程度、客户类型、SLA 或语言。在构建自动化路由系统时，请务必考虑其他路由标准。

### 建立成功标准

与您的支持团队合作， [定义明确的成功标准](https://platform.claude.com/docs/zh-CN/build-with-claude/define-success)，包括可衡量的基准、阈值和目标。

以下是使用 LLM 进行支持工单路由时的一些标准标准和基准：

### 分类一致性

### 适应速度

### 多语言处理

### 边缘情况处理

### 偏见缓解

### 提示效率

### 可解释性评分

以下是一些常见的成功标准，无论是否使用 LLM 都可能有用：

### 路由准确率

### 分配时间

### 重新路由率

### 首次联系解决率

### 平均处理时间

### 客户满意度评分

### 升级率

### 代理生产力

### 自助服务转移率

### 每工单成本

### 选择合适的 Claude 模型

模型的选择取决于成本、准确性和响应时间之间的权衡。

许多客户发现 `claude-3-5-haiku-20241022` 是工单路由的理想模型，因为它是 Claude 3 系列中最快且最具成本效益的模型，同时仍能提供出色的结果。如果您的分类问题需要深度主题专业知识或大量意图类别的复杂推理，您可以选择 [更大的 Sonnet 模型](https://platform.claude.com/docs/zh-CN/about-claude/models)。

### 构建强大的提示

工单路由是一种分类任务。Claude 分析支持工单的内容，并根据问题类型、紧急程度、所需专业知识或其他相关因素将其分类到预定义类别中。

让我们编写一个工单分类提示。我们的初始提示应包含用户请求的内容，并返回推理和意图。

在 [Claude Console](https://platform.claude.com/login) 上尝试 [提示生成器](https://platform.claude.com/docs/zh-CN/prompt-generator)，让 Claude 为您编写初稿。

以下是工单路由分类提示的示例：

```
def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""您将充当客户支持工单分类系统。您的任务是分析客户支持请求，并为每个请求输出适当的分类意图以及您的推理。

        以下是您需要分类的客户支持请求：

        <request>{ticket_contents}</request>

        请仔细分析上述请求以确定客户的核心意图和需求。考虑客户询问的内容以及关心的问题。

        首先，在 <reasoning> 标签内写出您对如何分类此请求的推理和分析。

        然后，在 <intent> 标签内输出请求的适当分类标签。有效意图为：
        <intents>
        <intent>支持、反馈、投诉</intent>
        <intent>订单跟踪</intent>
        <intent>退款/换货</intent>
        </intents>

        一个请求只能有一个适用的意图。只包含最适用于请求的意图。

        例如，考虑以下请求：
        <request>您好！我在周六安装了高速光纤互联网，我的安装员 Kevin 非常棒！我可以在哪里发送我的正面评价？谢谢您的帮助！</request>

        以下是您的输出应如何格式化的示例（针对上述示例请求）：
        <reasoning>用户寻求信息以便留下正面反馈。</reasoning>
        <intent>支持、反馈、投诉</intent>

        以下是更多示例：
        <examples>
        <example 2>
        示例 2 输入：
        <request>我想写信亲自感谢您在上周末我父亲葬礼期间对我家人表现出的同情。您的员工在整个过程中如此体贴和乐于助人；这真的减轻了我们肩上的负担。探视手册很漂亮。我们永远不会忘记您对我们的善意，我们非常感谢仪式进行得如此顺利。再次感谢，Amarantha Hill 代表 Hill 家族。</request>

        示例 2 输出：
        <reasoning>用户对他们的体验留下正面评价。</reasoning>
        <intent>支持、反馈、投诉</intent>
        </example 2>
        <example 3>

        ...

        </example 8>
        <example 9>
        示例 9 输入：
        <request>您的网站不断发送阻挡整个屏幕的广告弹窗。我花了二十分钟才最终找到电话号码来打电话投诉。在所有这些弹窗的情况下，我怎么可能访问我的账户信息？您能为我访问我的账户吗，因为您的网站坏了？我需要知道档案中的地址是什么。</request>

        示例 9 输出：
        <reasoning>用户请求帮助访问他们的网络账户信息。</reasoning>
        <intent>支持、反馈、投诉</intent>
        </example 9>

        记住始终在实际意图输出之前包含您的分类推理。推理应包含在 <reasoning> 标签中，意图包含在 <intent> 标签中。只返回推理和意图。
        """
```

让我们分解这个提示的关键组件：

- 我们使用 Python f-strings 创建提示模板，允许将 `ticket_contents` 插入到 `<request>` 标签中。
- 我们给 Claude 一个明确定义的角色，作为仔细分析工单内容以确定客户核心意图和需求的分类系统。
- 我们指导 Claude 正确的输出格式，在这种情况下，在 `<reasoning>` 标签内提供其推理和分析，然后在 `<intent>` 标签内提供适当的分类标签。
- 我们指定有效的意图类别："支持、反馈、投诉"、"订单跟踪"和"退款/换货"。
- 我们包含一些示例（即少样本提示）来说明输出应如何格式化，这提高了准确性和一致性。

我们希望 Claude 将其响应分成各种 XML 标签部分的原因是，我们可以使用正则表达式从输出中分别提取推理和意图。这允许我们在工单路由工作流中创建有针对性的下一步，例如仅使用意图来决定将工单路由给哪个人。

### 部署您的提示

在不在测试生产环境中部署提示并 [运行评估](https://platform.claude.com/docs/zh-CN/build-with-claude/develop-tests) 的情况下，很难知道您的提示效果如何。

让我们构建部署结构。首先定义包装我们对 Claude 调用的方法签名。我们将采用已经开始编写的方法，该方法以 `ticket_contents` 作为输入，现在返回 `reasoning` 和 `intent` 的元组作为输出。如果您有使用传统机器学习的现有自动化，您将希望遵循该方法签名。

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(ticket_contents):
    # Define the prompt for the classification task
    classification_prompt = f"""您将充当客户支持工单分类系统。
        ...
        ... 推理应包含在 <reasoning> 标签中，意图包含在 <intent> 标签中。只返回推理和意图。
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

此代码：

- 导入 Anthropic 库并使用您的 API 密钥创建客户端实例。
- 定义一个接受 `ticket_contents` 字符串的 `classify_support_request` 函数。
- 使用 `classification_prompt` 将 `ticket_contents` 发送给 Claude 进行分类
- 返回从响应中提取的模型的 `reasoning` 和 `intent`。

由于我们需要等待整个推理和意图文本生成完成后才能解析，我们设置 `stream=False`（默认值）。

* * *

## 评估您的提示

提示通常需要测试和优化才能准备好投入生产。要确定您解决方案的准备情况，请根据您之前建立的成功标准和阈值评估性能。

要运行您的评估，您需要测试用例来运行它。本指南的其余部分假设您已经 [开发了测试用例](https://platform.claude.com/docs/zh-CN/build-with-claude/develop-tests)。

### 构建评估函数

我们本指南的示例评估沿三个关键指标衡量 Claude 的性能：

- 准确性
- 每次分类的成本

根据对您重要的因素，您可能需要在其他轴上评估 Claude。

为了评估这一点，我们首先必须修改我们编写的脚本，并添加一个函数来比较预测意图与实际意图，并计算正确预测的百分比。我们还必须添加成本计算和时间测量功能。

```
import anthropic
import re

# Create an instance of the Claude API client
client = anthropic.Anthropic()

# Set the default model
DEFAULT_MODEL="claude-3-5-haiku-20241022"

def classify_support_request(request, actual_intent):
    # Define the prompt for the classification task
    classification_prompt = f"""您将充当客户支持工单分类系统。
        ...
        ...推理应包含在 <reasoning> 标签中，意图包含在 <intent> 标签中。只返回推理和意图。
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

让我们分解我们所做的编辑：

- 我们将测试用例中的 `actual_intent` 添加到 `classify_support_request` 方法中，并设置比较以评估 Claude 的意图分类是否与我们的黄金意图分类匹配。
- 我们提取 API 调用的使用统计信息，以根据使用的输入和输出令牌计算成本

### 运行您的评估

适当的评估需要明确的阈值和基准来确定什么是好结果。上面的脚本将为我们提供准确性、响应时间和每次分类成本的运行时值，但我们仍需要明确建立的阈值。例如：

- **准确性：** 95%（100 次测试中）
- **每次分类成本：** 比当前路由方法平均降低 50%（100 次测试中）

拥有这些阈值使您能够快速轻松地大规模判断，并以公正的经验主义确定哪种方法最适合您，以及可能需要进行哪些更改以更好地满足您的要求。

* * *

## 提高性能

在复杂场景中，除了标准 [提示工程技术](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/overview) 和 [护栏实施策略](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) 之外，考虑其他策略来提高性能可能会有所帮助。以下是一些常见场景：

### 对于 20+ 意图类别的情况使用分类层次结构

随着类别数量的增长，所需示例的数量也会扩大，可能使提示变得笨重。作为替代方案，您可以考虑使用分类器混合实施分层分类系统。

1. 将您的意图组织成分类树结构。
2. 在树的每个级别创建一系列分类器，实现级联路由方法。

例如，您可能有一个顶级分类器，将工单大致分类为"技术问题"、"账单问题"和"一般查询"。然后，这些类别中的每一个都可以有自己的子分类器来进一步细化分类。

![](https://platform.claude.com/docs/images/ticket-hierarchy.png)

- **优点 \- 更大的细微差别和准确性：** 您可以为每个父路径创建不同的提示，允许更有针对性和特定于上下文的分类。这可以提高准确性并更细致地处理客户请求。

- **缺点 \- 增加延迟：** 请注意，多个分类器可能导致延迟增加，我们建议使用我们最快的模型 Haiku 实施此方法。


### 使用向量数据库和相似性搜索检索来处理高度可变的工单

尽管提供示例是提高性能的最有效方法，但如果支持请求高度可变，很难在单个提示中包含足够的示例。

在这种情况下，您可以使用向量数据库从示例数据集中进行相似性搜索，并检索给定查询的最相关示例。

这种方法在我们的 [分类配方](https://github.com/anthropics/anthropic-cookbook/blob/82675c124e1344639b2a875aa9d3ae854709cd83/skills/classification/guide.ipynb) 中有详细概述，已被证明可以将性能从 71% 的准确率提高到 93% 的准确率。

### 专门考虑预期的边缘情况

以下是 Claude 可能错误分类工单的一些场景（可能还有其他对您的情况独特的场景）。在这些场景中，考虑在提示中提供明确的指令或示例，说明 Claude 应如何处理边缘情况：

### 客户提出隐含请求

### Claude 优先考虑情绪而非意图

### 多个问题导致问题优先级混乱

* * *

## 将 Claude 集成到您更大的支持工作流中

适当的集成需要您就基于 Claude 的工单路由脚本如何适应您更大的工单路由系统架构做出一些决定。您可以通过两种方式做到这一点：

- **推送式：**您使用的支持工单系统（例如 Zendesk）通过向您的路由服务发送 webhook 事件来触发您的代码，然后分类意图并路由它。
  - 这种方法更具网络可扩展性，但需要您公开一个公共端点。
- **拉取式：**您的代码根据给定的时间表拉取最新工单并在拉取时路由它们。
  - 这种方法更容易实施，但当拉取频率过高时可能对支持工单系统进行不必要的调用，或者当拉取频率过低时可能过于缓慢。

对于这两种方法中的任何一种，您都需要将脚本包装在服务中。方法的选择取决于您的支持工单系统提供的 API。

* * *

[分类手册\\
\\
访问我们的分类手册获取更多示例代码和详细的评估指导。](https://github.com/anthropics/anthropic-cookbook/tree/main/capabilities/classification) [Claude Console\\
\\
开始在 Claude Console 上构建和评估您的工作流。](https://platform.claude.com/dashboard)

- [确定是否使用 Claude 进行工单路由](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing#claude)
- [构建和部署您的 LLM 支持工作流](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing#llm)
- [选择合适的 Claude 模型](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing#claude-2)
- [对于 20+ 意图类别的情况使用分类层次结构](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing#20)
- [将 Claude 集成到您更大的支持工作流中](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/ticket-routing#claude-3)

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