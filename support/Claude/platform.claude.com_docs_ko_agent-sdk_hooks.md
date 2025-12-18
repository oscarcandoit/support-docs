---
url: "https://platform.claude.com/docs/ko/agent-sdk/hooks"
title: "훅으로 에이전트 동작 가로채기 및 제어 - Claude Docs"
---

[Claude Documentation Home](https://platform.claude.com/docs/ko/home)

- [개발자 가이드](https://platform.claude.com/docs/ko/intro)
- [API 참조](https://platform.claude.com/docs/ko/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [리소스](https://platform.claude.com/docs/ko/resources/overview)
- [릴리스 노트](https://platform.claude.com/docs/ko/release-notes/overview)

한국어

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fko%2Fagent-sdk%2Fhooks)

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

훅으로 실행 제어

가이드

# 훅으로 에이전트 동작 가로채기 및 제어

Copy page

훅을 사용하여 주요 실행 지점에서 에이전트 동작을 가로채고 사용자 정의하기

Copy page

훅을 사용하면 에이전트 실행의 주요 지점에서 검증, 로깅, 보안 제어 또는 사용자 정의 로직을 추가하기 위해 에이전트 실행을 가로챌 수 있습니다. 훅을 사용하면 다음을 수행할 수 있습니다:

- **위험한 작업 차단** 실행 전에, 예를 들어 파괴적인 셸 명령어나 무단 파일 접근
- **로깅 및 감사** 규정 준수, 디버깅 또는 분석을 위해 모든 도구 호출
- **입력 및 출력 변환** 데이터 정제, 자격 증명 주입 또는 파일 경로 리디렉션
- **인간 승인 요구** 데이터베이스 쓰기 또는 API 호출과 같은 민감한 작업
- **세션 수명 주기 추적** 상태 관리, 리소스 정리 또는 알림 전송

훅은 두 부분으로 구성됩니다:

1. **콜백 함수**: 훅이 발동할 때 실행되는 로직
2. **훅 구성**: SDK에 어떤 이벤트를 훅할지(`PreToolUse` 같은) 그리고 어떤 도구를 일치시킬지 알려줍니다

다음 예제는 에이전트가 `.env` 파일을 수정하는 것을 차단합니다. 먼저 파일 경로를 확인하는 콜백을 정의한 다음, `query()`에 전달하여 Write 또는 Edit 도구 호출 전에 실행합니다:

Python

```
import asyncio
from claude_agent_sdk import query, ClaudeAgentOptions, HookMatcher

# 도구 호출 세부 정보를 받는 훅 콜백 정의
async def protect_env_files(input_data, tool_use_id, context):
    # 도구의 입력 인수에서 파일 경로 추출
    file_path = input_data['tool_input'].get('file_path', '')
    file_name = file_path.split('/')[-1]

    # .env 파일을 대상으로 하는 경우 작업 차단
    if file_name == '.env':
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Cannot modify .env files'
            }
        }

    # 작업을 허용하려면 빈 객체 반환
    return {}

async def main():
    async for message in query(
        prompt="Update the database configuration",
        options=ClaudeAgentOptions(
            hooks={
                # PreToolUse 이벤트에 대한 훅 등록
                # 매처는 Write 및 Edit 도구 호출만 필터링합니다
                'PreToolUse': [HookMatcher(matcher='Write|Edit', hooks=[protect_env_files])]
            }
        )
    ):
        print(message)

asyncio.run(main())
```

이것은 `PreToolUse` 훅입니다. 도구 실행 전에 실행되며 로직에 따라 작업을 차단하거나 허용할 수 있습니다. 이 가이드의 나머지 부분에서는 사용 가능한 모든 훅, 구성 옵션 및 일반적인 사용 사례의 패턴을 다룹니다.

## 사용 가능한 훅

SDK는 에이전트 실행의 다양한 단계에 대한 훅을 제공합니다. 일부 훅은 두 SDK 모두에서 사용 가능하지만, Python SDK가 지원하지 않기 때문에 다른 훅은 TypeScript 전용입니다.

| 훅 이벤트 | Python SDK | TypeScript SDK | 트리거 | 사용 사례 예 |
| --- | --- | --- | --- | --- |
| `PreToolUse` | 예 | 예 | 도구 호출 요청 (차단 또는 수정 가능) | 위험한 셸 명령어 차단 |
| `PostToolUse` | 예 | 예 | 도구 실행 결과 | 모든 파일 변경 사항을 감사 추적에 로깅 |
| `PostToolUseFailure` | 아니오 | 예 | 도구 실행 실패 | 도구 오류 처리 또는 로깅 |
| `UserPromptSubmit` | 예 | 예 | 사용자 프롬프트 제출 | 프롬프트에 추가 컨텍스트 주입 |
| `Stop` | 예 | 예 | 에이전트 실행 중지 | 종료 전 세션 상태 저장 |
| `SubagentStart` | 아니오 | 예 | 서브에이전트 초기화 | 병렬 작업 생성 추적 |
| `SubagentStop` | 예 | 예 | 서브에이전트 완료 | 병렬 작업의 결과 집계 |
| `PreCompact` | 예 | 예 | 대화 압축 요청 | 요약 전 전체 기록 보관 |
| `PermissionRequest` | 아니오 | 예 | 권한 대화 표시 | 사용자 정의 권한 처리 |
| `SessionStart` | 아니오 | 예 | 세션 초기화 | 로깅 및 원격 측정 초기화 |
| `SessionEnd` | 아니오 | 예 | 세션 종료 | 임시 리소스 정리 |
| `Notification` | 아니오 | 예 | 에이전트 상태 메시지 | Slack 또는 PagerDuty로 에이전트 상태 업데이트 전송 |

## 일반적인 사용 사례

훅은 많은 다양한 시나리오를 처리할 수 있을 만큼 유연합니다. 다음은 카테고리별로 정렬된 가장 일반적인 패턴입니다.

보안

보안

로깅

로깅

도구 가로채기

도구 가로채기

권한 부여

권한 부여

- 위험한 명령어 차단 (`rm -rf /`, 파괴적인 SQL 등)
- 쓰기 작업 전 파일 경로 검증
- 도구 사용에 대한 허용 목록/차단 목록 적용

## 훅 구성

에이전트에 대한 훅을 구성하려면 `query()`를 호출할 때 `options.hooks` 매개변수에 훅을 전달합니다:

Python

```
async for message in query(
    prompt="Your prompt",
    options=ClaudeAgentOptions(
        hooks={
            'PreToolUse': [HookMatcher(matcher='Bash', hooks=[my_callback])]
        }
    )
):
    print(message)
```

`hooks` 옵션은 다음과 같은 딕셔너리(Python) 또는 객체(TypeScript)입니다:

- **키** 는 [훅 이벤트 이름](https://platform.claude.com/docs/ko/agent-sdk/hooks#available-hooks) (예: `'PreToolUse'`, `'PostToolUse'`, `'Stop'`)
- **값** 은 [매처](https://platform.claude.com/docs/ko/agent-sdk/hooks#matchers) 배열이며, 각각 선택적 필터 패턴과 [콜백 함수](https://platform.claude.com/docs/ko/agent-sdk/hooks#callback-function-inputs) 를 포함합니다

훅 콜백 함수는 이벤트에 대한 [입력 데이터](https://platform.claude.com/docs/ko/agent-sdk/hooks#input-data) 를 받고 에이전트가 작업을 허용, 차단 또는 수정할지 알 수 있도록 [응답](https://platform.claude.com/docs/ko/agent-sdk/hooks#callback-outputs) 을 반환합니다.

### 매처

매처를 사용하여 콜백을 트리거하는 도구를 필터링합니다:

| 옵션 | 타입 | 기본값 | 설명 |
| --- | --- | --- | --- |
| `matcher` | `string` | `undefined` | 도구 이름을 일치시키는 정규식 패턴. 기본 제공 도구에는 `Bash`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `WebFetch`, `Task` 등이 포함됩니다. MCP 도구는 `mcp__<server>__<action>` 패턴을 사용합니다. |
| `hooks` | `HookCallback[]` | - | 필수. 패턴이 일치할 때 실행할 콜백 함수 배열 |
| `timeout` | `number` | `60` | 시간 초과(초); 외부 API 호출을 수행하는 훅의 경우 증가시킵니다 |

가능할 때마다 `matcher` 패턴을 사용하여 특정 도구를 대상으로 합니다. `'Bash'` 매처는 Bash 명령어에만 실행되지만, 패턴을 생략하면 모든 도구 호출에 대해 콜백이 실행됩니다. 매처는 **도구 이름** 으로만 필터링하며, 파일 경로나 다른 인수로는 필터링하지 않습니다. 파일 경로로 필터링하려면 콜백 내에서 `tool_input.file_path`를 확인합니다.

매처는 도구 기반 훅(`PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`)에만 적용됩니다. `Stop`, `SessionStart`, `Notification` 같은 수명 주기 훅의 경우 매처는 무시되고 해당 유형의 모든 이벤트에 대해 훅이 발동합니다.

**도구 이름 발견:** 세션이 시작될 때 초기 시스템 메시지의 `tools` 배열을 확인하거나, 매처 없이 훅을 추가하여 모든 도구 호출을 로깅합니다.

**MCP 도구 이름 지정:** MCP 도구는 항상 `mcp__`로 시작하고 그 뒤에 서버 이름과 작업이 옵니다: `mcp__<server>__<action>`. 예를 들어, `playwright`라는 서버를 구성하면 해당 도구는 `mcp__playwright__browser_screenshot`, `mcp__playwright__browser_click` 등으로 이름이 지정됩니다. 서버 이름은 `mcpServers` 구성에서 사용하는 키에서 나옵니다.

이 예제는 매처를 사용하여 `PreToolUse` 이벤트가 발동할 때 파일 수정 도구에만 대해 훅을 실행합니다:

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(matcher='Write|Edit', hooks=[validate_file_path])\
        ]
    }
)
```

### 콜백 함수 입력

모든 훅 콜백은 세 개의 인수를 받습니다:

1. **입력 데이터** (`dict` / `HookInput`): 이벤트 세부 정보. [입력 데이터](https://platform.claude.com/docs/ko/agent-sdk/hooks#input-data) 에서 필드를 참조하세요
2. **도구 사용 ID** (`str | None` / `string | null`): `PreToolUse` 및 `PostToolUse` 이벤트를 상호 연관시킵니다
3. **컨텍스트** (`HookContext`): TypeScript에서는 취소를 위한 `signal` 속성(`AbortSignal`)을 포함합니다. 훅이 시간 초과되면 자동으로 취소되도록 `fetch()` 같은 비동기 작업에 이를 전달합니다. Python에서는 이 인수는 향후 사용을 위해 예약되어 있습니다.

### 입력 데이터

훅 콜백의 첫 번째 인수에는 이벤트에 대한 정보가 포함됩니다. 필드 이름은 SDK 간에 동일합니다(둘 다 snake\_case 사용).

**모든 훅 유형에 있는 공통 필드**:

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `hook_event_name` | `string` | 훅 유형 (`PreToolUse`, `PostToolUse` 등) |
| `session_id` | `string` | 현재 세션 식별자 |
| `transcript_path` | `string` | 대화 기록 경로 |
| `cwd` | `string` | 현재 작업 디렉토리 |

**훅별 필드** 는 훅 유형에 따라 다릅니다. TS로 표시된 항목은 TypeScript SDK에서만 사용 가능합니다:

| 필드 | 타입 | 설명 | 훅 |
| --- | --- | --- | --- |
| `tool_name` | `string` | 호출되는 도구의 이름 | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_input` | `object` | 도구에 전달된 인수 | PreToolUse, PostToolUse, PostToolUseFailureTS, PermissionRequestTS |
| `tool_response` | `any` | 도구 실행에서 반환된 결과 | PostToolUse |
| `error` | `string` | 도구 실행 실패의 오류 메시지 | PostToolUseFailureTS |
| `is_interrupt` | `boolean` | 실패가 인터럽트로 인한 것인지 여부 | PostToolUseFailureTS |
| `prompt` | `string` | 사용자의 프롬프트 텍스트 | UserPromptSubmit |
| `stop_hook_active` | `boolean` | 중지 훅이 현재 처리 중인지 여부 | Stop, SubagentStop |
| `agent_id` | `string` | 서브에이전트의 고유 식별자 | SubagentStartTS, SubagentStopTS |
| `agent_type` | `string` | 서브에이전트의 유형/역할 | SubagentStartTS |
| `agent_transcript_path` | `string` | 서브에이전트의 대화 기록 경로 | SubagentStopTS |
| `trigger` | `string` | 압축을 트리거한 것: `manual` 또는 `auto` | PreCompact |
| `custom_instructions` | `string` | 압축을 위해 제공된 사용자 정의 지침 | PreCompact |
| `permission_suggestions` | `array` | 도구에 대한 제안된 권한 업데이트 | PermissionRequestTS |
| `source` | `string` | 세션이 시작된 방식: `startup`, `resume`, `clear` 또는 `compact` | SessionStartTS |
| `reason` | `string` | 세션이 종료된 이유: `clear`, `logout`, `prompt_input_exit`, `bypass_permissions_disabled` 또는 `other` | SessionEndTS |
| `message` | `string` | 에이전트의 상태 메시지 | NotificationTS |
| `notification_type` | `string` | 알림 유형: `permission_prompt`, `idle_prompt`, `auth_success` 또는 `elicitation_dialog` | NotificationTS |
| `title` | `string` | 에이전트가 설정한 선택적 제목 | NotificationTS |

아래 코드는 `tool_name` 및 `tool_input`을 사용하여 각 도구 호출에 대한 세부 정보를 로깅하는 훅 콜백을 정의합니다:

Python

```
async def log_tool_calls(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'PreToolUse':
        print(f"Tool: {input_data['tool_name']}")
        print(f"Input: {input_data['tool_input']}")
    return {}
```

### 콜백 출력

콜백 함수는 SDK에 진행 방법을 알려주는 객체를 반환합니다. 변경 없이 작업을 허용하려면 빈 객체 `{}`를 반환합니다. 작업을 차단, 수정 또는 컨텍스트를 추가하려면 `hookSpecificOutput` 필드를 포함하는 객체를 반환합니다.

**최상위 필드** (`hookSpecificOutput` 외부):

| 필드 | 타입 | 설명 |
| --- | --- | --- |
| `continue` | `boolean` | 이 훅 후 에이전트가 계속해야 하는지 여부 (기본값: `true`) |
| `stopReason` | `string` | `continue`가 `false`일 때 표시되는 메시지 |
| `suppressOutput` | `boolean` | 기록에서 stdout 숨기기 (기본값: `false`) |
| `systemMessage` | `string` | Claude가 볼 수 있도록 대화에 주입된 메시지 |

**`hookSpecificOutput` 내부의 필드**:

| 필드 | 타입 | 훅 | 설명 |
| --- | --- | --- | --- |
| `hookEventName` | `string` | 모두 | 필수. 현재 이벤트를 일치시키려면 `input.hook_event_name`을 사용합니다 |
| `permissionDecision` | `'allow'` \| `'deny'` \| `'ask'` | PreToolUse | 도구 실행 여부를 제어합니다 |
| `permissionDecisionReason` | `string` | PreToolUse | Claude에 표시되는 결정에 대한 설명 |
| `updatedInput` | `object` | PreToolUse | 수정된 도구 입력 (`permissionDecision: 'allow'` 필요) |
| `additionalContext` | `string` | PostToolUse, UserPromptSubmit, SessionStartTS, SubagentStartTS | 대화에 추가된 컨텍스트 |

이 예제는 `/etc` 디렉토리에 대한 쓰기 작업을 차단하면서 Claude에게 안전한 파일 관행을 상기시키는 시스템 메시지를 주입합니다:

Python

```
async def block_etc_writes(input_data, tool_use_id, context):
    file_path = input_data['tool_input'].get('file_path', '')

    if file_path.startswith('/etc'):
        return {
            # 최상위 필드: 대화에 지침 주입
            'systemMessage': 'Remember: system directories like /etc are protected.',
            # hookSpecificOutput: 작업 차단
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Writing to /etc is not allowed'
            }
        }
    return {}
```

#### 권한 결정 흐름

여러 훅 또는 권한 규칙이 적용되면 SDK는 다음 순서로 평가합니다:

1. **거부** 규칙이 먼저 확인됩니다 (일치하면 즉시 거부).
2. **요청** 규칙이 두 번째로 확인됩니다.
3. **허용** 규칙이 세 번째로 확인됩니다.
4. **기본값은 요청** 입니다 (일치하는 것이 없으면).

훅이 `deny`를 반환하면 작업이 차단되며, `allow`를 반환하는 다른 훅은 이를 재정의하지 않습니다.

#### 도구 차단

도구 실행을 방지하려면 거부 결정을 반환합니다:

Python

```
async def block_dangerous_commands(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    command = input_data['tool_input'].get('command', '')

    if 'rm -rf /' in command:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'deny',
                'permissionDecisionReason': 'Dangerous command blocked: rm -rf /'
            }
        }
    return {}
```

#### 도구 입력 수정

도구가 받는 것을 변경하려면 업데이트된 입력을 반환합니다:

Python

```
async def redirect_to_sandbox(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    if input_data['tool_name'] == 'Write':
        original_path = input_data['tool_input'].get('file_path', '')
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'updatedInput': {
                    **input_data['tool_input'],
                    'file_path': f'/sandbox{original_path}'
                }
            }
        }
    return {}
```

`updatedInput`을 사용할 때는 `permissionDecision`도 포함해야 합니다. 원본 `tool_input`을 변경하는 대신 항상 새 객체를 반환합니다.

#### 시스템 메시지 추가

대화에 컨텍스트를 주입합니다:

Python

```
async def add_security_reminder(input_data, tool_use_id, context):
    return {
        'systemMessage': 'Remember to follow security best practices.'
    }
```

#### 특정 도구 자동 승인

신뢰할 수 있는 도구에 대한 권한 프롬프트를 우회합니다. 이는 특정 작업이 사용자 확인 없이 실행되도록 하려는 경우에 유용합니다:

Python

```
async def auto_approve_read_only(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PreToolUse':
        return {}

    read_only_tools = ['Read', 'Glob', 'Grep', 'LS']
    if input_data['tool_name'] in read_only_tools:
        return {
            'hookSpecificOutput': {
                'hookEventName': input_data['hook_event_name'],
                'permissionDecision': 'allow',
                'permissionDecisionReason': 'Read-only tool auto-approved'
            }
        }
    return {}
```

`permissionDecision` 필드는 세 가지 값을 허용합니다: `'allow'` (자동 승인), `'deny'` (차단) 또는 `'ask'` (확인 프롬프트).

## 고급 시나리오 처리

이러한 패턴은 복잡한 사용 사례를 위해 더 정교한 훅 시스템을 구축하는 데 도움이 됩니다.

### 여러 훅 연결

훅은 배열에 나타나는 순서대로 실행됩니다. 각 훅을 단일 책임에 집중하고 복잡한 로직을 위해 여러 훅을 연결합니다. 이 예제는 모든 도구 호출에 대해 4개의 훅을 모두 실행합니다 (매처 지정 안 함):

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            HookMatcher(hooks=[rate_limiter]),        # 첫 번째: 속도 제한 확인\
            HookMatcher(hooks=[authorization_check]), # 두 번째: 권한 확인\
            HookMatcher(hooks=[input_sanitizer]),     # 세 번째: 입력 정제\
            HookMatcher(hooks=[audit_logger])         # 마지막: 작업 로깅\
        ]
    }
)
```

### 정규식을 사용한 도구별 매처

정규식 패턴을 사용하여 여러 도구를 일치시킵니다:

Python

```
options = ClaudeAgentOptions(
    hooks={
        'PreToolUse': [\
            # 파일 수정 도구 일치\
            HookMatcher(matcher='Write|Edit|Delete', hooks=[file_security_hook]),\
\
            # 모든 MCP 도구 일치\
            HookMatcher(matcher='^mcp__', hooks=[mcp_audit_hook]),\
\
            # 모든 것 일치 (매처 없음)\
            HookMatcher(hooks=[global_logger])\
        ]
    }
)
```

매처는 **도구 이름** 만 일치시키며, 파일 경로나 다른 인수는 일치시키지 않습니다. 파일 경로로 필터링하려면 훅 콜백 내에서 `tool_input.file_path`를 확인합니다.

### 서브에이전트 활동 추적

`SubagentStop` 훅을 사용하여 서브에이전트 완료를 모니터링합니다. `tool_use_id`는 부모 에이전트 호출을 서브에이전트와 상호 연관시키는 데 도움이 됩니다:

Python

```
async def subagent_tracker(input_data, tool_use_id, context):
    if input_data['hook_event_name'] == 'SubagentStop':
        print(f"[SUBAGENT] Completed")
        print(f"  Tool use ID: {tool_use_id}")
        print(f"  Stop hook active: {input_data.get('stop_hook_active')}")
    return {}

options = ClaudeAgentOptions(
    hooks={
        'SubagentStop': [HookMatcher(hooks=[subagent_tracker])]
    }
)
```

### 훅의 비동기 작업

훅은 HTTP 요청과 같은 비동기 작업을 수행할 수 있습니다. 예외를 던지는 대신 예외를 포착하여 오류를 정상적으로 처리합니다. TypeScript에서는 훅이 시간 초과되면 요청이 취소되도록 `signal`을 `fetch()`에 전달합니다:

Python

```
import aiohttp
from datetime import datetime

async def webhook_notifier(input_data, tool_use_id, context):
    if input_data['hook_event_name'] != 'PostToolUse':
        return {}

    try:
        async with aiohttp.ClientSession() as session:
            await session.post(
                'https://api.example.com/webhook',
                json={
                    'tool': input_data['tool_name'],
                    'timestamp': datetime.now().isoformat()
                }
            )
    except Exception as e:
        print(f'Webhook request failed: {e}')

    return {}
```

### 알림 전송 (TypeScript만)

`Notification` 훅을 사용하여 에이전트에서 상태 업데이트를 받고 Slack 또는 모니터링 대시보드와 같은 외부 서비스로 전달합니다:

TypeScript

```
import { query, HookCallback, NotificationHookInput } from "@anthropic-ai/claude-agent-sdk";

const notificationHandler: HookCallback = async (input, toolUseID, { signal }) => {
  const notification = input as NotificationHookInput;

  await fetch('https://hooks.slack.com/services/YOUR/WEBHOOK/URL', {
    method: 'POST',
    body: JSON.stringify({
      text: `Agent status: ${notification.message}`
    }),
    signal
  });

  return {};
};

for await (const message of query({
  prompt: "Analyze this codebase",
  options: {
    hooks: {
      Notification: [{ hooks: [notificationHandler] }]
    }
  }
})) {
  console.log(message);
}
```

## 일반적인 문제 해결

이 섹션에서는 일반적인 문제와 해결 방법을 다룹니다.

### 훅이 발동하지 않음

- 훅 이벤트 이름이 올바르고 대소문자를 구분하는지 확인합니다 (`preToolUse`가 아닌 `PreToolUse`)
- 매처 패턴이 도구 이름과 정확히 일치하는지 확인합니다
- 훅이 `options.hooks`의 올바른 이벤트 유형 아래에 있는지 확인합니다
- `SubagentStop`, `Stop`, `SessionStart`, `SessionEnd` 및 `Notification` 훅의 경우 매처는 무시됩니다. 이러한 훅은 해당 유형의 모든 이벤트에 대해 발동합니다.
- 에이전트가 [`max_turns`](https://platform.claude.com/docs/ko/agent-sdk/python#configuration-options) 제한에 도달하면 훅이 발동하지 않을 수 있습니다. 세션이 훅을 실행하기 전에 종료되기 때문입니다.

### 매처가 예상대로 필터링하지 않음

매처는 **도구 이름** 만 일치시키며, 파일 경로나 다른 인수는 일치시키지 않습니다. 파일 경로로 필터링하려면 훅 내에서 `tool_input.file_path`를 확인합니다:

```
const myHook: HookCallback = async (input, toolUseID, { signal }) => {
  const preInput = input as PreToolUseHookInput;
  const filePath = preInput.tool_input?.file_path as string;
  if (!filePath?.endsWith('.md')) return {};  // 마크다운이 아닌 파일 건너뛰기
  // 마크다운 파일 처리...
};
```

### 훅 시간 초과

- `HookMatcher` 구성에서 `timeout` 값을 증가시킵니다
- 세 번째 콜백 인수의 `AbortSignal`을 사용하여 TypeScript에서 취소를 정상적으로 처리합니다

### 도구가 예기치 않게 차단됨

- 모든 `PreToolUse` 훅에서 `permissionDecision: 'deny'` 반환을 확인합니다
- 훅에 로깅을 추가하여 반환하는 `permissionDecisionReason`을 확인합니다
- 매처 패턴이 너무 광범위하지 않은지 확인합니다 (빈 매처는 모든 도구와 일치합니다)

### 수정된 입력이 적용되지 않음

- `updatedInput`이 최상위 수준이 아닌 `hookSpecificOutput` 내부에 있는지 확인합니다:







```
return {
    hookSpecificOutput: {
      hookEventName: input.hook_event_name,
      permissionDecision: 'allow',
      updatedInput: { command: 'new command' }
    }
};
```

- 입력 수정이 적용되려면 `permissionDecision: 'allow'`도 반환해야 합니다

- `hookSpecificOutput`에 `hookEventName`을 포함하여 출력이 어떤 훅 유형에 대한 것인지 식별합니다


### 세션 훅을 사용할 수 없음

`SessionStart`, `SessionEnd` 및 `Notification` 훅은 TypeScript SDK에서만 사용 가능합니다. Python SDK는 설정 제한으로 인해 이러한 이벤트를 지원하지 않습니다.

### 서브에이전트 권한 프롬프트 증가

여러 서브에이전트를 생성할 때 각 서브에이전트는 별도로 권한을 요청할 수 있습니다. 서브에이전트는 부모 에이전트 권한을 자동으로 상속하지 않습니다. 반복되는 프롬프트를 피하려면 `PreToolUse` 훅을 사용하여 특정 도구를 자동 승인하거나 서브에이전트 세션에 적용되는 권한 규칙을 구성합니다.

### 서브에이전트를 사용한 재귀적 훅 루프

서브에이전트를 생성하는 `UserPromptSubmit` 훅은 해당 서브에이전트가 동일한 훅을 트리거하면 무한 루프를 만들 수 있습니다. 이를 방지하려면:

- 서브에이전트를 생성하기 전에 훅 입력에서 서브에이전트 표시기를 확인합니다
- `parent_tool_use_id` 필드를 사용하여 이미 서브에이전트 컨텍스트에 있는지 감지합니다
- 훅을 최상위 에이전트 세션에만 실행되도록 범위를 지정합니다

### systemMessage가 출력에 나타나지 않음

`systemMessage` 필드는 모델이 볼 수 있도록 대화에 컨텍스트를 추가하지만 모든 SDK 출력 모드에 나타나지 않을 수 있습니다. 훅 결정을 애플리케이션에 표시해야 하면 별도로 로깅하거나 전용 출력 채널을 사용합니다.

## 자세히 알아보기

- [권한](https://platform.claude.com/docs/ko/agent-sdk/permissions): 에이전트가 수행할 수 있는 작업 제어
- [사용자 정의 도구](https://platform.claude.com/docs/ko/agent-sdk/custom-tools): 에이전트 기능을 확장하는 도구 구축
- [TypeScript SDK 참조](https://platform.claude.com/docs/ko/agent-sdk/typescript)
- [Python SDK 참조](https://platform.claude.com/docs/ko/agent-sdk/python)

- [알림 전송 (TypeScript만)](https://platform.claude.com/docs/ko/agent-sdk/hooks#type-script)
- [systemMessage가 출력에 나타나지 않음](https://platform.claude.com/docs/ko/agent-sdk/hooks#system-message)

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

|
|

Invalid domain for site key.

ERROR for site owner:

Invalid domain for site key

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)