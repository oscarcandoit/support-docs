---
url: "https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization"
title: "法律文件摘要 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-CN/home)

- [开发者指南](https://platform.claude.com/docs/zh-CN/intro)
- [API 参考](https://platform.claude.com/docs/zh-CN/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [资源](https://platform.claude.com/docs/zh-CN/resources/overview)
- [发布说明](https://platform.claude.com/docs/zh-CN/release-notes/overview)

简体中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-CN%2Fabout-claude%2Fuse-case-guides%2Flegal-summarization)

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

法律总结

用例

# 法律文件摘要

Copy page

本指南介绍如何利用Claude的先进自然语言处理能力高效地总结法律文件，提取关键信息并加快法律研究。使用Claude，您可以简化合同审查、诉讼准备和监管工作的流程，节省时间并确保法律流程的准确性。

Copy page

> 访问我们的 [摘要指南](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb)，查看使用Claude的法律摘要实现示例。

## 使用Claude之前

### 决定是否使用Claude进行法律文件摘要

以下是一些关键指标，表明您应该使用Claude等LLM来总结法律文件：

### 您想要高效且经济地审查大量文件

### 您需要自动提取关键元数据

### 您想要生成清晰、简洁和标准化的摘要

### 您需要为摘要提供精确的引用

### 您想要简化和加快法律研究流程

### 确定您希望摘要提取的详细信息

任何给定文件都没有单一正确的摘要。没有明确的指导，Claude可能很难确定要包含哪些细节。为了获得最佳结果，请确定您想要在摘要中包含的具体信息。

例如，在总结转租协议时，您可能希望提取以下关键要点：

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

### 建立成功标准

评估摘要的质量是一项众所周知的具有挑战性的任务。与许多其他自然语言处理任务不同，摘要的评估通常缺乏明确的客观指标。这个过程可能高度主观，不同的读者重视摘要的不同方面。以下是您在评估Claude执行法律摘要的效果时可能希望考虑的标准。

### 事实准确性

### 法律精确性

### 简洁性

### 一致性

### 可读性

### 偏见和公平性

有关更多信息，请参阅我们关于 [建立成功标准](https://platform.claude.com/docs/zh-CN/test-and-evaluate/define-success) 的指南。

* * *

## 如何使用Claude总结法律文件

### 选择合适的Claude模型

模型准确性在总结法律文件时极其重要。Claude Sonnet 4.5是需要高准确性的此类用例的绝佳选择。如果您的文件大小和数量很大，以至于成本开始成为问题，您也可以尝试使用较小的模型，如Claude Haiku 4.5。

为了帮助估计这些成本，以下是使用Sonnet和Haiku总结1,000份转租协议的成本比较：

- **内容大小**
  - 协议数量：1,000
  - 每份协议的字符数：300,000
  - 总字符数：300M
- **估计令牌数**
  - 输入令牌：86M（假设每3.5个字符1个令牌）
  - 每个摘要的输出令牌：350
  - 总输出令牌：350,000
- **Claude Sonnet 4.5估计成本**
  - 输入令牌成本：86 MTok \* $3.00/MTok = $258
  - 输出令牌成本：0.35 MTok \* $15.00/MTok = $5.25
  - 总成本：$258.00 + $5.25 = $263.25
- **Claude Haiku 3估计成本**
  - 输入令牌成本：86 MTok \* $0.25/MTok = $21.50
  - 输出令牌成本：0.35 MTok \* $1.25/MTok = $0.44
  - 总成本：$21.50 + $0.44 = $21.96

实际成本可能与这些估计不同。这些估计基于 [提示](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#build-a-strong-prompt) 部分中突出显示的示例。

### 将文件转换为Claude可以处理的格式

在开始总结文件之前，您需要准备数据。这涉及从PDF中提取文本、清理文本并确保其准备好由Claude处理。

以下是对示例pdf的此过程的演示：

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

在此示例中，我们首先下载 [摘要指南](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/data/Sample%20Sublease%20Agreement.pdf) 中使用的示例转租协议的pdf。此协议来自 [sec.gov网站](https://www.sec.gov/Archives/edgar/data/1045425/000119312507044370/dex1032.htm) 上的公开可用转租协议。

我们使用pypdf库提取pdf的内容并将其转换为文本。然后通过删除额外的空格和页码来清理文本数据。

### 构建强大的提示

Claude可以适应各种摘要风格。您可以更改提示的详细信息，以指导Claude更冗长或更简洁、包含更多或更少的技术术语，或提供更高或更低级别的上下文摘要。

以下是如何创建提示以确保生成的摘要在分析转租协议时遵循一致结构的示例：

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

此代码实现了一个`summarize_document`函数，该函数使用Claude总结转租协议的内容。该函数接受文本字符串和要提取的详细信息列表作为输入。在此示例中，我们使用之前代码片段中定义的`document_text`和`details_to_extract`变量调用该函数。

在函数中，为Claude生成提示，包括要总结的文件、要提取的详细信息以及总结文件的具体说明。提示指示Claude在XML标头中嵌套每个要提取的详细信息的摘要进行响应。

因为我们决定在标签中输出摘要的每个部分，每个部分可以轻松地作为后处理步骤进行解析。这种方法可以实现结构化摘要，可以针对您的用例进行调整，以便每个摘要遵循相同的模式。

### 评估您的提示

提示通常需要测试和优化才能投入生产。为了确定解决方案的就绪情况，请使用结合定量和定性方法的系统流程评估摘要的质量。基于您定义的成功标准创建 [强大的实证评估](https://platform.claude.com/docs/zh-CN/build-with-claude/develop-tests#building-evals-and-test-cases) 将允许您优化提示。以下是您可能希望在实证评估中包含的一些指标：

### ROUGE分数

### BLEU分数

### 上下文嵌入相似性

### 基于LLM的评分

### 人工评估

### 部署您的提示

以下是部署解决方案到生产时需要记住的一些额外考虑事项。

1. \*\*确保无责任：\*\*了解摘要中错误的法律含义，这可能导致您的组织或客户的法律责任。提供免责声明或法律通知，澄清摘要由AI生成，应由法律专业人士审查。

2. \*\*处理多种文件类型：\*\*在本指南中，我们讨论了如何从PDF中提取文本。在现实中，文件可能采用多种格式（PDF、Word文件、文本文件等）。确保您的数据提取管道可以转换您期望接收的所有文件格式。

3. \*\*并行化对Claude的API调用：\*\*具有大量令牌的长文件可能需要长达一分钟的时间才能让Claude生成摘要。对于大型文件集合，您可能希望并行向Claude发送API调用，以便摘要可以在合理的时间范围内完成。请参阅Anthropic的 [速率限制](https://platform.claude.com/docs/zh-CN/api/rate-limits#rate-limits) 以确定可以并行执行的最大API调用数。


* * *

## 改进性能

在复杂场景中，除了标准 [提示工程技术](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/overview) 之外，考虑其他策略来改进性能可能会有所帮助。以下是一些高级策略：

### 执行元摘要以总结长文件

法律摘要通常涉及处理长文件或许多相关文件，使得您超过Claude的上下文窗口。您可以使用称为元摘要的分块方法来处理此用例。此技术涉及将文件分解为较小的、可管理的块，然后分别处理每个块。然后，您可以组合每个块的摘要以创建整个文件的元摘要。

以下是如何执行元摘要的示例：

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

`summarize_long_document`函数通过将文件分成较小的块并分别总结每个块来构建在早期`summarize_document`函数的基础上。

代码通过将`summarize_document`函数应用于原始文件中的每个20,000字符的块来实现这一点。然后组合各个摘要，并从这些块摘要创建最终摘要。

请注意，`summarize_long_document`函数对于我们的示例pdf并非严格必要的，因为整个文件都在Claude的上下文窗口内。但是，对于超过Claude上下文窗口的文件或在一起总结多个相关文件时，它变得至关重要。无论如何，这种元摘要技术通常会在最终摘要中捕获在早期单摘要方法中遗漏的其他重要细节。

### 使用摘要索引文件来探索大型文件集合

使用LLM搜索文件集合通常涉及检索增强生成（RAG）。但是，在涉及大型文件或当精确信息检索至关重要时，基本RAG方法可能不足。摘要索引文件是一种高级RAG方法，提供了一种更有效的文件排名方式以进行检索，使用的上下文比传统RAG方法少。在这种方法中，您首先使用Claude为语料库中的每个文件生成简洁摘要，然后使用Claude对每个摘要与所提问题的相关性进行排名。有关此方法的进一步详情，包括基于代码的示例，请查看 [摘要指南](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) 中的摘要索引文件部分。

### 微调Claude以从您的数据集中学习

改进Claude生成摘要能力的另一种高级技术是微调。微调涉及在与您的法律摘要需求特别一致的自定义数据集上训练Claude，确保Claude适应您的用例。以下是如何执行微调的概述：

1. \*\*识别错误：\*\*首先收集Claude的摘要不足的实例 - 这可能包括遗漏关键法律细节、误解上下文或使用不适当的法律术语。

2. \*\*策划数据集：\*\*一旦您识别了这些问题，请编译这些有问题示例的数据集。此数据集应包括原始法律文件以及您的更正摘要，确保Claude学习所需的行为。

3. \*\*执行微调：\*\*微调涉及在您的策划数据集上重新训练模型以调整其权重和参数。这种重新训练帮助Claude更好地理解您的法律领域的具体要求，改进其根据您的标准总结文件的能力。

4. \*\*迭代改进：\*\*微调不是一次性过程。当Claude继续生成摘要时，您可以迭代地添加它表现不佳的新示例，进一步完善其能力。随着时间的推移，这个持续的反馈循环将产生一个高度专业化的模型，用于您的法律摘要任务。


微调目前仅通过Amazon Bedrock提供。其他详情可在 [AWS启动博客](https://aws.amazon.com/blogs/machine-learning/fine-tune-anthropics-claude-3-haiku-in-amazon-bedrock-to-boost-model-accuracy-and-quality/) 中获得。

[摘要指南\\
\\
查看如何使用Claude总结合同的完整实现代码示例。](https://github.com/anthropics/anthropic-cookbook/blob/main/skills/summarization/guide.ipynb) [引用指南\\
\\
探索我们的引用指南食谱，获取有关如何确保信息准确性和可解释性的指导。](https://github.com/anthropics/anthropic-cookbook/blob/main/misc/using_citations.ipynb)

- [使用Claude之前](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude)
- [决定是否使用Claude进行法律文件摘要](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude-2)
- [如何使用Claude总结法律文件](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude-3)
- [选择合适的Claude模型](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude-4)
- [将文件转换为Claude可以处理的格式](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude-5)
- [微调Claude以从您的数据集中学习](https://platform.claude.com/docs/zh-CN/about-claude/use-case-guides/legal-summarization#claude-6)

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