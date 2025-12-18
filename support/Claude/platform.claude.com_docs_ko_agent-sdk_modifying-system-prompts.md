---
url: "https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts"
title: "시스템 프롬프트 수정하기 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ko/home)

- [개발자 가이드](https://platform.claude.com/docs/ko/intro)
- [API 참조](https://platform.claude.com/docs/ko/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [리소스](https://platform.claude.com/docs/ko/resources/overview)
- [릴리스 노트](https://platform.claude.com/docs/ko/release-notes/overview)

한국어

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fko%2Fagent-sdk%2Fmodifying-system-prompts)

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

[스트리밍 입력](https://platform.claude.com/docs/ko/agent-sdk/streaming-vs-single-mode) [권한 처리](https://platform.claude.com/docs/ko/agent-sdk/permissions) [훅으로 실행 제어](https://platform.claude.com/docs/ko/agent-sdk/hooks) [세션 관리](https://platform.claude.com/docs/ko/agent-sdk/sessions) [SDK의 구조화된 출력](https://platform.claude.com/docs/ko/agent-sdk/structured-outputs) [에이전트 SDK 호스팅](https://platform.claude.com/docs/ko/agent-sdk/hosting) [AI 에이전트 안전하게 배포](https://platform.claude.com/docs/ko/agent-sdk/secure-deployment) [시스템 프롬프트 수정](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts) [SDK의 MCP](https://platform.claude.com/docs/ko/agent-sdk/mcp) [사용자 정의 도구](https://platform.claude.com/docs/ko/agent-sdk/custom-tools) [SDK의 서브에이전트](https://platform.claude.com/docs/ko/agent-sdk/subagents) [SDK의 슬래시 명령](https://platform.claude.com/docs/ko/agent-sdk/slash-commands) [SDK의 에이전트 스킬](https://platform.claude.com/docs/ko/agent-sdk/skills) [비용 및 사용량 추적](https://platform.claude.com/docs/ko/agent-sdk/cost-tracking) [할 일 목록](https://platform.claude.com/docs/ko/agent-sdk/todo-tracking) [SDK의 플러그인](https://platform.claude.com/docs/ko/agent-sdk/plugins)

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

가이드

시스템 프롬프트 수정

가이드

# 시스템 프롬프트 수정하기

Copy page

출력 스타일, append를 사용한 systemPrompt, 사용자 정의 시스템 프롬프트의 세 가지 접근 방식을 사용하여 시스템 프롬프트를 수정해 Claude의 동작을 사용자 정의하는 방법을 알아보세요.

Copy page

시스템 프롬프트는 Claude의 동작, 기능 및 응답 스타일을 정의합니다. Claude Agent SDK는 시스템 프롬프트를 사용자 정의하는 세 가지 방법을 제공합니다: 출력 스타일 사용(지속적인 파일 기반 구성), Claude Code의 프롬프트에 추가, 또는 완전히 사용자 정의된 프롬프트 사용.

## 시스템 프롬프트 이해하기

시스템 프롬프트는 대화 전반에 걸쳐 Claude가 어떻게 행동할지를 형성하는 초기 명령어 세트입니다.

**기본 동작:** Agent SDK는 최대한의 유연성을 위해 기본적으로 **빈 시스템 프롬프트** 를 사용합니다. Claude Code의 시스템 프롬프트(도구 지침, 코드 가이드라인 등)를 사용하려면 TypeScript에서 `systemPrompt: { preset: "claude_code" }`를 지정하거나 Python에서 `system_prompt="claude_code"`를 지정하세요.

Claude Code의 시스템 프롬프트에는 다음이 포함됩니다:

- 도구 사용 지침 및 사용 가능한 도구
- 코드 스타일 및 형식 지침
- 응답 톤 및 상세도 설정
- 보안 및 안전 지침
- 현재 작업 디렉토리 및 환경에 대한 컨텍스트

## 수정 방법

### 방법 1: CLAUDE.md 파일 (프로젝트 수준 지침)

CLAUDE.md 파일은 Agent SDK가 디렉토리에서 실행될 때 자동으로 읽는 프로젝트별 컨텍스트와 지침을 제공합니다. 이들은 프로젝트의 지속적인 "메모리" 역할을 합니다.

#### CLAUDE.md가 SDK와 작동하는 방식

**위치 및 발견:**

- **프로젝트 수준:** 작업 디렉토리의 `CLAUDE.md` 또는 `.claude/CLAUDE.md`
- **사용자 수준:** 모든 프로젝트에 걸친 전역 지침을 위한 `~/.claude/CLAUDE.md`

**중요:** SDK는 `settingSources` (TypeScript) 또는 `setting_sources` (Python)를 명시적으로 구성할 때만 CLAUDE.md 파일을 읽습니다:

- 프로젝트 수준 CLAUDE.md를 로드하려면 `'project'`를 포함하세요
- 사용자 수준 CLAUDE.md (`~/.claude/CLAUDE.md`)를 로드하려면 `'user'`를 포함하세요

`claude_code` 시스템 프롬프트 프리셋은 CLAUDE.md를 자동으로 로드하지 않습니다 - 설정 소스도 지정해야 합니다.

**콘텐츠 형식:**
CLAUDE.md 파일은 일반 마크다운을 사용하며 다음을 포함할 수 있습니다:

- 코딩 가이드라인 및 표준
- 프로젝트별 컨텍스트
- 일반적인 명령어 또는 워크플로우
- API 규칙
- 테스트 요구사항

#### CLAUDE.md 예시

```
# 프로젝트 가이드라인

## 코드 스타일

- TypeScript strict 모드 사용
- React에서 함수형 컴포넌트 선호
- 공개 API에 대해 항상 JSDoc 주석 포함

## 테스트

- 커밋 전에 `npm test` 실행
- 80% 이상의 코드 커버리지 유지
- 단위 테스트는 jest, E2E는 playwright 사용

## 명령어

- 빌드: `npm run build`
- 개발 서버: `npm run dev`
- 타입 체크: `npm run typecheck`
```

#### SDK와 함께 CLAUDE.md 사용하기

TypeScript

```
import { query } from "@anthropic-ai/claude-agent-sdk";

// 중요: CLAUDE.md를 로드하려면 settingSources를 지정해야 합니다
// claude_code 프리셋만으로는 CLAUDE.md 파일을 로드하지 않습니다
const messages = [];

for await (const message of query({
  prompt: "사용자 프로필을 위한 새로운 React 컴포넌트를 추가하세요",
  options: {
    systemPrompt: {
      type: "preset",
      preset: "claude_code", // Claude Code의 시스템 프롬프트 사용
    },
    settingSources: ["project"], // 프로젝트에서 CLAUDE.md를 로드하는 데 필요
  },
})) {
  messages.push(message);
}

// 이제 Claude는 CLAUDE.md의 프로젝트 가이드라인에 액세스할 수 있습니다
```

#### CLAUDE.md를 언제 사용할지

**다음에 가장 적합:**

- **팀 공유 컨텍스트** \- 모든 사람이 따라야 할 가이드라인
- **프로젝트 규칙** \- 코딩 표준, 파일 구조, 명명 패턴
- **일반적인 명령어** \- 프로젝트별 빌드, 테스트, 배포 명령어
- **장기 메모리** \- 모든 세션에서 지속되어야 하는 컨텍스트
- **버전 관리된 지침** \- 팀이 동기화를 유지할 수 있도록 git에 커밋

**주요 특징:**

- ✅ 프로젝트의 모든 세션에서 지속
- ✅ git을 통해 팀과 공유
- ✅ 자동 발견 (코드 변경 불필요)
- ⚠️ `settingSources`를 통한 설정 로딩 필요

### 방법 2: 출력 스타일 (지속적인 구성)

출력 스타일은 Claude의 시스템 프롬프트를 수정하는 저장된 구성입니다. 마크다운 파일로 저장되며 세션과 프로젝트 전반에 걸쳐 재사용할 수 있습니다.

#### 출력 스타일 생성하기

TypeScript

```
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { homedir } from "os";

async function createOutputStyle(
  name: string,
  description: string,
  prompt: string
) {
  // 사용자 수준: ~/.claude/output-styles
  // 프로젝트 수준: .claude/output-styles
  const outputStylesDir = join(homedir(), ".claude", "output-styles");

  await mkdir(outputStylesDir, { recursive: true });

  const content = `---
name: ${name}
description: ${description}
---

${prompt}`;

  const filePath = join(
    outputStylesDir,
    `${name.toLowerCase().replace(/\s+/g, "-")}.md`
  );
  await writeFile(filePath, content, "utf-8");
}

// 예시: 코드 리뷰 전문가 생성
await createOutputStyle(
  "Code Reviewer",
  "철저한 코드 리뷰 어시스턴트",
  `당신은 전문 코드 리뷰어입니다.

모든 코드 제출에 대해:
1. 버그 및 보안 문제 확인
2. 성능 평가
3. 개선 사항 제안
4. 코드 품질 평가 (1-10)`
);
```

#### 출력 스타일 사용하기

생성된 후, 다음을 통해 출력 스타일을 활성화하세요:

- **CLI**: `/output-style [style-name]`
- **설정**: `.claude/settings.local.json`
- **새로 생성**: `/output-style:new [description]`

**SDK 사용자를 위한 참고사항:** 출력 스타일은 옵션에서 `settingSources: ['user']` 또는 `settingSources: ['project']` (TypeScript) / `setting_sources=["user"]` 또는 `setting_sources=["project"]` (Python)를 포함할 때 로드됩니다.

### 방법 3: append와 함께 `systemPrompt` 사용하기

모든 내장 기능을 보존하면서 사용자 정의 지침을 추가하기 위해 `append` 속성과 함께 Claude Code 프리셋을 사용할 수 있습니다.

TypeScript

```
import { query } from "@anthropic-ai/claude-agent-sdk";

const messages = [];

for await (const message of query({
  prompt: "피보나치 수를 계산하는 Python 함수를 작성하는 데 도움을 주세요",
  options: {
    systemPrompt: {
      type: "preset",
      preset: "claude_code",
      append:
        "Python 코드에 항상 상세한 docstring과 타입 힌트를 포함하세요.",
    },
  },
})) {
  messages.push(message);
  if (message.type === "assistant") {
    console.log(message.message.content);
  }
}
```

### 방법 4: 사용자 정의 시스템 프롬프트

`systemPrompt`에 사용자 정의 문자열을 제공하여 기본값을 완전히 자신만의 지침으로 대체할 수 있습니다.

TypeScript

```
import { query } from "@anthropic-ai/claude-agent-sdk";

const customPrompt = `당신은 Python 코딩 전문가입니다.
다음 가이드라인을 따르세요:
- 깔끔하고 잘 문서화된 코드 작성
- 모든 함수에 타입 힌트 사용
- 포괄적인 docstring 포함
- 적절한 경우 함수형 프로그래밍 패턴 선호
- 항상 코드 선택에 대해 설명`;

const messages = [];

for await (const message of query({
  prompt: "데이터 처리 파이프라인을 생성하세요",
  options: {
    systemPrompt: customPrompt,
  },
})) {
  messages.push(message);
  if (message.type === "assistant") {
    console.log(message.message.content);
  }
}
```

## 네 가지 접근 방식 모두 비교

| 기능 | CLAUDE.md | 출력 스타일 | append와 함께 `systemPrompt` | 사용자 정의 `systemPrompt` |
| --- | --- | --- | --- | --- |
| **지속성** | 프로젝트별 파일 | 파일로 저장 | 세션만 | 세션만 |
| **재사용성** | 프로젝트별 | 프로젝트 전반 | 코드 중복 | 코드 중복 |
| **관리** | 파일시스템에서 | CLI + 파일 | 코드에서 | 코드에서 |
| **기본 도구** | 보존 | 보존 | 보존 | 손실 (포함하지 않는 한) |
| **내장 안전성** | 유지 | 유지 | 유지 | 추가해야 함 |
| **환경 컨텍스트** | 자동 | 자동 | 자동 | 제공해야 함 |
| **사용자 정의 수준** | 추가만 | 기본값 대체 | 추가만 | 완전한 제어 |
| **버전 관리** | 프로젝트와 함께 | 예 | 코드와 함께 | 코드와 함께 |
| **범위** | 프로젝트별 | 사용자 또는 프로젝트 | 코드 세션 | 코드 세션 |

**참고:** "append와 함께"는 TypeScript에서 `systemPrompt: { type: "preset", preset: "claude_code", append: "..." }`를 사용하거나 Python에서 `system_prompt={"type": "preset", "preset": "claude_code", "append": "..."}`를 사용하는 것을 의미합니다.

## 사용 사례 및 모범 사례

### CLAUDE.md를 언제 사용할지

**다음에 가장 적합:**

- 프로젝트별 코딩 표준 및 규칙
- 프로젝트 구조 및 아키텍처 문서화
- 일반적인 명령어 나열 (빌드, 테스트, 배포)
- 버전 관리되어야 하는 팀 공유 컨텍스트
- 프로젝트의 모든 SDK 사용에 적용되는 지침

**예시:**

- "모든 API 엔드포인트는 async/await 패턴을 사용해야 합니다"
- "커밋 전에 `npm run lint:fix`를 실행하세요"
- "데이터베이스 마이그레이션은 `migrations/` 디렉토리에 있습니다"

**중요:** CLAUDE.md 파일을 로드하려면 `settingSources: ['project']` (TypeScript) 또는 `setting_sources=["project"]` (Python)를 명시적으로 설정해야 합니다. `claude_code` 시스템 프롬프트 프리셋은 이 설정 없이는 CLAUDE.md를 자동으로 로드하지 않습니다.

### 출력 스타일을 언제 사용할지

**다음에 가장 적합:**

- 세션 전반에 걸친 지속적인 동작 변경
- 팀 공유 구성
- 전문화된 어시스턴트 (코드 리뷰어, 데이터 사이언티스트, DevOps)
- 버전 관리가 필요한 복잡한 프롬프트 수정

**예시:**

- 전용 SQL 최적화 어시스턴트 생성
- 보안 중심 코드 리뷰어 구축
- 특정 교육법을 가진 교육 어시스턴트 개발

### append와 함께 `systemPrompt`를 언제 사용할지

**다음에 가장 적합:**

- 특정 코딩 표준 또는 선호도 추가
- 출력 형식 사용자 정의
- 도메인별 지식 추가
- 응답 상세도 수정
- 도구 지침을 잃지 않고 Claude Code의 기본 동작 향상

### 사용자 정의 `systemPrompt`를 언제 사용할지

**다음에 가장 적합:**

- Claude의 동작에 대한 완전한 제어
- 전문화된 단일 세션 작업
- 새로운 프롬프트 전략 테스트
- 기본 도구가 필요하지 않은 상황
- 고유한 동작을 가진 전문화된 에이전트 구축

## 접근 방식 결합하기

최대한의 유연성을 위해 이러한 방법들을 결합할 수 있습니다:

### 예시: 세션별 추가 사항이 있는 출력 스타일

TypeScript

```
import { query } from "@anthropic-ai/claude-agent-sdk";

// "Code Reviewer" 출력 스타일이 활성화되어 있다고 가정 (/output-style을 통해)
// 세션별 중점 영역 추가
const messages = [];

for await (const message of query({
  prompt: "이 인증 모듈을 검토하세요",
  options: {
    systemPrompt: {
      type: "preset",
      preset: "claude_code",
      append: `
        이 검토에서 다음을 우선시하세요:
        - OAuth 2.0 준수
        - 토큰 저장 보안
        - 세션 관리
      `,
    },
  },
})) {
  messages.push(message);
}
```

## 참고 자료

- [출력 스타일](https://code.claude.com/docs/output-styles) \- 완전한 출력 스타일 문서
- [TypeScript SDK 가이드](https://platform.claude.com/docs/ko/agent-sdk/typescript) \- 완전한 SDK 사용 가이드
- [TypeScript SDK 참조](https://code.claude.com/docs/typescript-sdk-reference) \- 전체 API 문서
- [구성 가이드](https://code.claude.com/docs/configuration) \- 일반 구성 옵션

- [방법 1: CLAUDE.md 파일 (프로젝트 수준 지침)](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#1-claude-md)
- [방법 2: 출력 스타일 (지속적인 구성)](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#2)
- [방법 3: append와 함께 systemPrompt 사용하기](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#3-append-system-prompt)
- [방법 4: 사용자 정의 시스템 프롬프트](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#4)
- [CLAUDE.md를 언제 사용할지](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#claude-md)
- [append와 함께 systemPrompt를 언제 사용할지](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#append-system-prompt)
- [사용자 정의 systemPrompt를 언제 사용할지](https://platform.claude.com/docs/ko/agent-sdk/modifying-system-prompts#system-prompt)

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

|
|

|
|

|
|

|
|

|
|

|
|

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)