---
url: "https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/multishot-prompting"
title: "예제(멀티샷 프롬프팅)를 사용하여 Claude의 동작 가이드하기 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ko/home)

- [개발자 가이드](https://platform.claude.com/docs/ko/intro)
- [API 참조](https://platform.claude.com/docs/ko/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [리소스](https://platform.claude.com/docs/ko/resources/overview)
- [릴리스 노트](https://platform.claude.com/docs/ko/release-notes/overview)

한국어

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fko%2Fbuild-with-claude%2Fprompt-engineering%2Fmultishot-prompting)

Search...

⌘K

첫 단계

[Claude 소개](https://platform.claude.com/docs/ko/intro) [빠른 시작](https://platform.claude.com/docs/ko/get-started)

모델 및 가격

[모델 개요](https://platform.claude.com/docs/ko/about-claude/models/overview) [모델 선택](https://platform.claude.com/docs/ko/about-claude/models/choosing-a-model) [Claude 4.5의 새로운 기능](https://platform.claude.com/docs/ko/about-claude/models/whats-new-claude-4-5) [Claude 4.5로 마이그레이션](https://platform.claude.com/docs/ko/about-claude/models/migrating-to-claude-4) [모델 지원 중단](https://platform.claude.com/docs/ko/about-claude/model-deprecations) [가격](https://platform.claude.com/docs/ko/about-claude/pricing)

Claude로 빌드

[기능 개요](https://platform.claude.com/docs/ko/build-with-claude/overview) [Messages API 사용](https://platform.claude.com/docs/ko/build-with-claude/working-with-messages) [컨텍스트 윈도우](https://platform.claude.com/docs/ko/build-with-claude/context-windows) [프롬프팅 모범 사례](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/claude-4-best-practices)

기능

[프롬프트 캐싱](https://platform.claude.com/docs/ko/build-with-claude/prompt-caching) [컨텍스트 편집](https://platform.claude.com/docs/ko/build-with-claude/context-editing) [확장 사고](https://platform.claude.com/docs/ko/build-with-claude/extended-thinking) [노력](https://platform.claude.com/docs/ko/build-with-claude/effort) [메시지 스트리밍](https://platform.claude.com/docs/ko/build-with-claude/streaming) [배치 처리](https://platform.claude.com/docs/ko/build-with-claude/batch-processing) [인용](https://platform.claude.com/docs/ko/build-with-claude/citations) [다국어 지원](https://platform.claude.com/docs/ko/build-with-claude/multilingual-support) [토큰 계산](https://platform.claude.com/docs/ko/build-with-claude/token-counting) [임베딩](https://platform.claude.com/docs/ko/build-with-claude/embeddings) [비전](https://platform.claude.com/docs/ko/build-with-claude/vision) [PDF 지원](https://platform.claude.com/docs/ko/build-with-claude/pdf-support) [Files API](https://platform.claude.com/docs/ko/build-with-claude/files) [검색 결과](https://platform.claude.com/docs/ko/build-with-claude/search-results) [구조화된 출력](https://platform.claude.com/docs/ko/build-with-claude/structured-outputs)

도구

[개요](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/overview) [도구 사용 구현 방법](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/implement-tool-use) [세분화된 도구 스트리밍](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/fine-grained-tool-streaming) [Bash 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/bash-tool) [코드 실행 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/code-execution-tool) [프로그래밍 방식 도구 호출](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/programmatic-tool-calling) [컴퓨터 사용 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/computer-use-tool) [텍스트 편집기 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/text-editor-tool) [웹 가져오기 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/web-fetch-tool) [웹 검색 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/web-search-tool) [메모리 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/memory-tool) [도구 검색 도구](https://platform.claude.com/docs/ko/agents-and-tools/tool-use/tool-search-tool)

에이전트 스킬

[개요](https://platform.claude.com/docs/ko/agents-and-tools/agent-skills/overview) [빠른 시작](https://platform.claude.com/docs/ko/agents-and-tools/agent-skills/quickstart) [모범 사례](https://platform.claude.com/docs/ko/agents-and-tools/agent-skills/best-practices) [API와 함께 스킬 사용](https://platform.claude.com/docs/ko/build-with-claude/skills-guide)

Agent SDK

[개요](https://platform.claude.com/docs/ko/agent-sdk/overview) [빠른 시작](https://platform.claude.com/docs/ko/agent-sdk/quickstart) [TypeScript SDK](https://platform.claude.com/docs/ko/agent-sdk/typescript) [TypeScript V2 (미리보기)](https://platform.claude.com/docs/ko/agent-sdk/typescript-v2-preview) [Python SDK](https://platform.claude.com/docs/ko/agent-sdk/python) [마이그레이션 가이드](https://platform.claude.com/docs/ko/agent-sdk/migration-guide)

가이드

API의 MCP

[MCP 커넥터](https://platform.claude.com/docs/ko/agents-and-tools/mcp-connector) [원격 MCP 서버](https://platform.claude.com/docs/ko/agents-and-tools/remote-mcp-servers)

타사 플랫폼의 Claude

[Amazon Bedrock](https://platform.claude.com/docs/ko/build-with-claude/claude-on-amazon-bedrock) [Microsoft Foundry](https://platform.claude.com/docs/ko/build-with-claude/claude-in-microsoft-foundry) [Vertex AI](https://platform.claude.com/docs/ko/build-with-claude/claude-on-vertex-ai)

프롬프트 엔지니어링

[개요](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/overview) [프롬프트 생성기](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/prompt-generator) [프롬프트 템플릿 사용](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/prompt-templates-and-variables) [프롬프트 개선기](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/prompt-improver) [명확하고 직접적으로](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/be-clear-and-direct) [예제 사용 (다중 샷 프롬프팅)](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/multishot-prompting) [Claude가 생각하도록 하기 (CoT)](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/chain-of-thought) [XML 태그 사용](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/use-xml-tags) [Claude에게 역할 부여 (시스템 프롬프트)](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/system-prompts) [Claude의 응답 미리 채우기](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/prefill-claudes-response) [복잡한 프롬프트 연결](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/chain-prompts) [긴 컨텍스트 팁](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/long-context-tips) [확장 사고 팁](https://platform.claude.com/docs/ko/build-with-claude/prompt-engineering/extended-thinking-tips)

테스트 및 평가

[성공 기준 정의](https://platform.claude.com/docs/ko/test-and-evaluate/define-success) [테스트 케이스 개발](https://platform.claude.com/docs/ko/test-and-evaluate/develop-tests) [평가 도구 사용](https://platform.claude.com/docs/ko/test-and-evaluate/eval-tool) [지연 시간 감소](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-latency)

가드레일 강화

[환각 감소](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-hallucinations) [출력 일관성 증가](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/increase-consistency) [탈옥 완화](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) [거부 스트리밍](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/handle-streaming-refusals) [프롬프트 유출 감소](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/reduce-prompt-leak) [Claude 캐릭터 유지](https://platform.claude.com/docs/ko/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)

관리 및 모니터링

[Admin API 개요](https://platform.claude.com/docs/ko/build-with-claude/administration-api) [사용량 및 비용 API](https://platform.claude.com/docs/ko/build-with-claude/usage-cost-api) [Claude Code Analytics API](https://platform.claude.com/docs/ko/build-with-claude/claude-code-analytics-api)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

프롬프트 엔지니어링

예제 사용 (다중 샷 프롬프팅)

프롬프트 엔지니어링

# 예제(멀티샷 프롬프팅)를 사용하여 Claude의 동작 가이드하기

Copy page

예제를 통해 Claude가 정확히 원하는 결과를 생성하도록 유도하는 방법을 배웁니다.

Copy page

While these tips apply broadly to all Claude models, you can find prompting tips specific to extended thinking models [here](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/extended-thinking-tips).

예제는 Claude가 정확히 필요한 것을 생성하도록 하기 위한 비결입니다. 프롬프트에 잘 작성된 몇 가지 예제를 제공하면 Claude 출력의 정확성, 일관성 및 품질을 획기적으로 향상시킬 수 있습니다.
이 기법은 퓨샷(few-shot) 또는 멀티샷(multishot) 프롬프팅으로 알려져 있으며, 구조화된 출력이나 특정 형식 준수가 필요한 작업에 특히 효과적입니다.

**프롬프트 강화하기**: Claude가 정확히 원하는 것을 보여주기 위해 3~5개의 다양하고 관련성 있는 예제를 포함하세요. 더 많은 예제 = 더 나은 성능, 특히 복잡한 작업의 경우.

## 예제를 사용하는 이유는?

- **정확성**: 예제는 지시사항의 오해를 줄입니다.
- **일관성**: 예제는 균일한 구조와 스타일을 강제합니다.
- **성능**: 잘 선택된 예제는 Claude의 복잡한 작업 처리 능력을 향상시킵니다.

## 효과적인 예제 작성하기

최대 효과를 위해 예제가 다음과 같은지 확인하세요:

- **관련성**: 예제가 실제 사용 사례를 반영합니다.
- **다양성**: 예제가 엣지 케이스와 잠재적 문제를 다루며, Claude가 의도하지 않은 패턴을 무심코 습득하지 않도록 충분히 다양합니다.
- **명확성**: 예제가 `<example>` 태그로 감싸져 있으며(여러 개인 경우 `<examples>` 태그 내에 중첩됨) 구조화되어 있습니다.

Claude에게 예제의 관련성, 다양성 또는 명확성을 평가하도록 요청하세요. 또는 Claude가 초기 예제 세트를 기반으로 더 많은 예제를 생성하도록 하세요.

### 예제: 고객 피드백 분석

* * *

[프롬프트 라이브러리\\
\\
다양한 작업 및 사용 사례를 위한 엄선된 프롬프트 모음으로 영감을 얻으세요.](https://platform.claude.com/docs/ko/resources/prompt-library/library) [GitHub 프롬프팅 튜토리얼\\
\\
우리 문서에서 찾을 수 있는 프롬프트 엔지니어링 개념을 다루는 예제로 가득한 튜토리얼입니다.](https://github.com/anthropics/prompt-eng-interactive-tutorial) [Google Sheets 프롬프팅 튜토리얼\\
\\
대화형 스프레드시트를 통한 우리 프롬프트 엔지니어링 튜토리얼의 경량 버전입니다.](https://docs.google.com/spreadsheets/d/19jzLgRruG9kjUQNKtCg1ZjdD6l6weA6qRXG5zLIAhC8)

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