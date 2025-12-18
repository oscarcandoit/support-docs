---
url: "https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-of-thought"
title: "让 Claude 思考（思维链提示）以提高性能 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/zh-CN/home)

- [开发者指南](https://platform.claude.com/docs/zh-CN/intro)
- [API 参考](https://platform.claude.com/docs/zh-CN/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [资源](https://platform.claude.com/docs/zh-CN/resources/overview)
- [发布说明](https://platform.claude.com/docs/zh-CN/release-notes/overview)

简体中文

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fzh-CN%2Fbuild-with-claude%2Fprompt-engineering%2Fchain-of-thought)

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

提示词工程

让 Claude 思考（CoT）

提示词工程

# 让 Claude 思考（思维链提示）以提高性能

Copy page

通过思维链提示技术让 Claude 逐步分解问题，提高复杂任务的准确性和输出质量。

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

面对复杂任务（如研究、分析或问题解决）时，给 Claude 思考的空间可以显著提高其性能。这种技术被称为思维链（CoT）提示，它鼓励 Claude 逐步分解问题，从而产生更准确和细致的输出。

## 实施 CoT 之前

### 为什么让 Claude 思考？

- **准确性：** 逐步解决问题可以减少错误，特别是在数学、逻辑、分析或一般复杂任务中。
- **连贯性：** 结构化思维导致更连贯、组织良好的响应。
- **调试：** 查看 Claude 的思考过程可以帮助你找出提示可能不清楚的地方。

### 为什么不让 Claude 思考？

- 增加的输出长度可能会影响延迟。
- 并非所有任务都需要深入思考。明智地使用 CoT 以确保性能和延迟之间的正确平衡。

对于人类需要思考的任务使用 CoT，如复杂数学、多步骤分析、编写复杂文档或涉及多个因素的决策。

* * *

## 如何提示思考

下面的思维链技术 **按从最简单到最复杂的顺序排列**。较简单的方法占用上下文窗口中的空间较少，但通常也不那么强大。

**CoT 提示**：始终让 Claude 输出其思考过程。如果不输出思考过程，就不会进行思考！

- **基本提示**：在你的提示中包含"逐步思考"。

  - 缺乏关于 _如何_ 思考的指导（如果任务非常特定于你的应用、用例或组织，这尤其不理想）

### 示例：编写捐赠者电子邮件（基本 CoT）

- **引导提示**：为 Claude 的思考过程概述具体步骤。

  - 缺乏结构化，使得很难将答案与思考分离开来。

### 示例：编写捐赠者电子邮件（引导 CoT）

- **结构化提示**：使用 XML 标签（如 `<thinking>` 和 `<answer>`）将推理与最终答案分离。




### 示例：编写捐赠者电子邮件（结构化引导 CoT）


### 示例

### 示例：没有思考的财务分析

### 示例：有思考的财务分析

* * *

[提示库\\
\\
从为各种任务和用例精选的提示中获得灵感。](https://platform.claude.com/docs/zh-CN/resources/prompt-library/library) [GitHub 提示教程\\
\\
一个充满示例的教程，涵盖我们文档中的提示工程概念。](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Google Sheets 提示教程\\
\\
通过交互式电子表格提供的更轻量级版本的提示工程教程。](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

- [实施 CoT 之前](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-of-thought#co-t)
- [为什么让 Claude 思考？](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-of-thought#claude)
- [为什么不让 Claude 思考？](https://platform.claude.com/docs/zh-CN/build-with-claude/prompt-engineering/chain-of-thought#claude-2)

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