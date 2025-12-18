---
url: "https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak"
title: "减少提示词泄露 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-CN/home)

- [开发者指南](https://platform.claude.com/docs/zh-CN/intro)
- [API 参考](https://platform.claude.com/docs/zh-CN/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [资源](https://platform.claude.com/docs/zh-CN/resources/overview)
- [发布说明](https://platform.claude.com/docs/zh-CN/release-notes/overview)

简体中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-CN%2Ftest-and-evaluate%2Fstrengthen-guardrails%2Freduce-prompt-leak)

Search...

⌘K

快速开始

[Claude 简介](https://platform.claude.com/docs/zh-CN/intro) [快速入门](https://platform.claude.com/docs/zh-CN/get-started)

模型与定价

[模型概览](https://platform.claude.com/docs/zh-CN/about-claude/models/overview) [选择模型](https://platform.claude.com/docs/zh-CN/about-claude/models/choosing-a-model) [Claude 4.5 新功能](https://platform.claude.com/docs/zh-CN/about-claude/models/whats-new-claude-4-5) [迁移到 Claude 4.5](https://platform.claude.com/docs/zh-CN/about-claude/models/migrating-to-claude-4) [模型弃用](https://platform.claude.com/docs/zh-CN/about-claude/model-deprecations) [定价](https://platform.claude.com/docs/zh-CN/about-claude/pricing)

使用 Claude 构建

[功能概览](https://platform.claude.com/docs/zh-CN/build-with-claude/overview) [使用 Messages API](https://platform.claude.com/docs/zh-CN/build-with-claude/working-with-messages) [上下文窗口](https://platform.claude.com/docs/zh-CN/build-with-claude/context-windows) [提示词最佳实践](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/claude-4-best-practices)

能力

[提示词缓存](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-caching) [上下文编辑](https://platform.claude.com/docs/zh-CN/build-with-claude/context-editing) [扩展思考](https://platform.claude.com/docs/zh-CN/build-with-claude/extended-thinking) [工作量](https://platform.claude.com/docs/zh-CN/build-with-claude/effort) [流式传输消息](https://platform.claude.com/docs/zh-CN/build-with-claude/streaming) [批量处理](https://platform.claude.com/docs/zh-CN/build-with-claude/batch-processing) [引用](https://platform.claude.com/docs/zh-CN/build-with-claude/citations) [多语言支持](https://platform.claude.com/docs/zh-CN/build-with-claude/multilingual-support) [Token 计数](https://platform.claude.com/docs/zh-CN/build-with-claude/token-counting) [嵌入](https://platform.claude.com/docs/zh-CN/build-with-claude/embeddings) [视觉](https://platform.claude.com/docs/zh-CN/build-with-claude/vision) [PDF 支持](https://platform.claude.com/docs/zh-CN/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/zh-CN/build-with-claude/files) [搜索结果](https://platform.claude.com/docs/zh-CN/build-with-claude/search-results) [结构化输出](https://platform.claude.com/docs/zh-CN/build-with-claude/structured-outputs)

工具

[概览](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/overview) [如何实现工具使用](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/implement-tool-use) [细粒度工具流式传输](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/fine-grained-tool-streaming) [Bash 工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/bash-tool) [代码执行工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/code-execution-tool) [程序化工具调用](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/programmatic-tool-calling) [计算机使用工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/computer-use-tool) [文本编辑器工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/text-editor-tool) [Web 获取工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/web-fetch-tool) [Web 搜索工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/web-search-tool) [记忆工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/memory-tool) [工具搜索工具](https://platform.claude.com/docs/zh-CN/agents-and-tools/tool-use/tool-search-tool)

Agent Skills

[概览](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/overview) [快速入门](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/quickstart) [最佳实践](https://platform.claude.com/docs/zh-CN/agents-and-tools/agent-skills/best-practices) [在 API 中使用 Skills](https://platform.claude.com/docs/zh-CN/build-with-claude/skills-guide)

Agent SDK

[概览](https://platform.claude.com/docs/zh-CN/agent-sdk/overview) [快速入门](https://platform.claude.com/docs/zh-CN/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/zh-CN/agent-sdk/typescript) [TypeScript V2（预览版）](https://platform.claude.com/docs/zh-CN/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/zh-CN/agent-sdk/python) [迁移指南](https://platform.claude.com/docs/zh-CN/agent-sdk/migration-guide)

指南

API 中的 MCP

[MCP 连接器](https://platform.claude.com/docs/zh-CN/agents-and-tools/mcp-connector) [远程 MCP 服务器](https://platform.claude.com/docs/zh-CN/agents-and-tools/remote-mcp-servers)

第三方平台上的 Claude

[Amazon Bedrock](https://platform.claude.com/docs/zh-CN/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/zh-CN/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/zh-CN/build-with-claude/claude-on-vertex-ai)

提示词工程

[概览](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/overview) [提示词生成器](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/prompt-generator) [使用提示词模板](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/prompt-templates-and-variables) [提示词改进器](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/prompt-improver) [清晰直接](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/be-clear-and-direct) [使用示例（多轮提示）](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/multishot-prompting) [让 Claude 思考（CoT）](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-of-thought) [使用 XML 标签](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/use-xml-tags) [给 Claude 一个角色（系统提示词）](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/system-prompts) [预填充 Claude 的响应](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/prefill-claudes-response) [链接复杂提示词](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-prompts) [长上下文提示](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/long-context-tips) [扩展思考提示](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/extended-thinking-tips)

测试与评估

[定义成功标准](https://platform.claude.com/docs/zh-CN/test-and-evaluate/define-success) [开发测试用例](https://platform.claude.com/docs/zh-CN/test-and-evaluate/develop-tests) [使用评估工具](https://platform.claude.com/docs/zh-CN/test-and-evaluate/eval-tool) [降低延迟](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-latency)

加强防护栏

[减少幻觉](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [提高输出一致性](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/increase-consistency) [缓解越狱](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [流式传输拒绝](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [减少提示词泄露](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [保持 Claude 的角色](https://platform.claude.com/docs/zh-CN/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

管理和监控

[Admin API 概览](https://platform.claude.com/docs/zh-CN/build-with-claude/administration-api) [使用和成本 API](https://platform.claude.com/docs/zh-CN/build-with-claude/usage-cost-api) [Claude Code 分析 API](https://platform.claude.com/docs/zh-CN/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

加强防护栏

减少提示词泄露

加强防护栏

# 减少提示词泄露

Copy page

Copy page

提示词泄露可能会暴露您期望在提示词中"隐藏"的敏感信息。虽然没有任何方法是万无一失的，但以下策略可以显著降低风险。

## 在尝试减少提示词泄露之前

我们建议仅在 **绝对必要** 时才使用防泄露的提示词工程策略。试图使提示词防泄露可能会增加复杂性，由于增加了 LLM 整体任务的复杂性，可能会降低任务其他部分的性能。

如果您决定实施防泄露技术，请务必彻底测试您的提示词，以确保增加的复杂性不会对模型的性能或输出质量产生负面影响。

首先尝试监控技术，如输出筛查和后处理，以试图捕获提示词泄露的实例。

* * *

## 减少提示词泄露的策略

- **将上下文与查询分开：**
您可以尝试使用系统提示词来将关键信息和上下文与用户查询隔离。您可以在`User`轮次中强调关键指令，然后通过预填充`Assistant`轮次来重新强调这些指令。

### 示例：保护专有分析

- **使用后处理**：过滤 Claude 的输出中可能表明泄露的关键词。技术包括使用正则表达式、关键词过滤或其他文本处理方法。











您也可以使用提示型 LLM 来过滤更微妙的泄露输出。

- **避免不必要的专有细节**：如果 Claude 不需要它来执行任务，就不要包含它。额外的内容会分散 Claude 对"不泄露"指令的注意力。
- **定期审核**：定期检查您的提示词和 Claude 的输出是否存在潜在泄露。

请记住，目标不仅是防止泄露，还要保持 Claude 的性能。过于复杂的泄露预防可能会降低结果质量。平衡是关键。

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