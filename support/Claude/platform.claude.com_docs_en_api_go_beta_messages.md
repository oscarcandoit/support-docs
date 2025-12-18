---
url: "https://platform.claude.com/docs/en/api/go/beta/messages"
title: "Messages - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fbeta%2Fmessages)

Search...

⌘K

Using the API

[Features overview](https://platform.claude.com/docs/en/api/overview) [Client SDKs](https://platform.claude.com/docs/en/api/client-sdks) [Beta headers](https://platform.claude.com/docs/en/api/beta-headers) [Errors](https://platform.claude.com/docs/en/api/errors)

[Messages](https://platform.claude.com/docs/en/api/messages)

[Create a Message](https://platform.claude.com/docs/en/api/messages/create) [Count tokens in a Message](https://platform.claude.com/docs/en/api/messages/count_tokens)

Batches

[Models](https://platform.claude.com/docs/en/api/models)

[List Models](https://platform.claude.com/docs/en/api/models/list) [Get a Model](https://platform.claude.com/docs/en/api/models/retrieve)

[Beta](https://platform.claude.com/docs/en/api/beta)

Models

Messages

[Create a Message](https://platform.claude.com/docs/en/api/beta/messages/create) [Count tokens in a Message](https://platform.claude.com/docs/en/api/beta/messages/count_tokens)

Batches

Files

Skills

[Admin](https://platform.claude.com/docs/en/api/admin)

Organizations

Invites

Users

Workspaces

API Keys

Usage Report

Cost Report

[Completions](https://platform.claude.com/docs/en/api/completions)

[Create a Text Completion](https://platform.claude.com/docs/en/api/completions/create)

Support & configuration

[Rate limits](https://platform.claude.com/docs/en/api/rate-limits) [Service tiers](https://platform.claude.com/docs/en/api/service-tiers) [Versions](https://platform.claude.com/docs/en/api/versioning) [IP addresses](https://platform.claude.com/docs/en/api/ip-addresses) [Supported regions](https://platform.claude.com/docs/en/api/supported-regions) [OpenAI SDK compatibility](https://platform.claude.com/docs/en/api/openai-sdk)

[Console](https://platform.claude.com/)

[Log in](https://platform.claude.com/login)

Beta

Messages

Copy page

Go

# Messages

##### [Create a Message](https://platform.claude.com/docs/en/api/beta/messages/create)

client.Beta.Messages.New(ctx, params)(\*[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message), error)

post/v1/messages

##### [Count tokens in a Message](https://platform.claude.com/docs/en/api/beta/messages/count_tokens)

client.Beta.Messages.CountTokens(ctx, params)(\*[BetaMessageTokensCount](https://platform.claude.com/docs/en/api/beta#beta_message_tokens_count), error)

post/v1/messages/count\_tokens

##### ModelsExpand Collapse

type BetaAllThinkingTurnsstruct{…}

TypeAll

Accepts one of the following:

const AllAllAll = "all"

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaBashCodeExecutionOutputBlockstruct{…}

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

type BetaBashCodeExecutionOutputBlockParamRespstruct{…}

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

type BetaBashCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaBashCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorParamErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorParamErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaCacheControlEphemeralstruct{…}

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaCacheCreationstruct{…}

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationConfigstruct{…}

Enabledbool

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationsConfigParamRespstruct{…}

Enabledbooloptional

type BetaCitationsDeltastruct{…}

CitationBetaCitationsDeltaCitationUnion

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaClearThinking20251015Editstruct{…}

TypeClearThinking20251015

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

KeepBetaClearThinking20251015EditKeepUnionoptional

Number of most recent assistant turns to keep thinking blocks for. Older turns will have their thinking blocks removed.

Accepts one of the following:

type BetaThinkingTurnsstruct{…}

TypeThinkingTurns

Accepts one of the following:

const ThinkingTurnsThinkingTurnsThinkingTurns = "thinking\_turns"

Valueint64

type BetaAllThinkingTurnsstruct{…}

TypeAll

Accepts one of the following:

const AllAllAll = "all"

All

Accepts one of the following:

const AllAllAll = "all"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

type BetaClearToolUses20250919Editstruct{…}

TypeClearToolUses20250919

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

ClearAtLeast[BetaInputTokensClearAtLeast](https://platform.claude.com/docs/en/api/beta#beta_input_tokens_clear_at_least)optional

Minimum number of tokens that must be cleared when triggered. Context will only be modified if at least this many tokens can be removed.

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

ClearToolInputsBetaClearToolUses20250919EditClearToolInputsUnionoptional

Whether to clear all tool inputs (bool) or specific tool inputs to clear (list)

Accepts one of the following:

bool

\[\]string

ExcludeTools\[\]stringoptional

Tool names whose uses are preserved from clearing

Keep[BetaToolUsesKeep](https://platform.claude.com/docs/en/api/beta#beta_tool_uses_keep)optional

Number of tool uses to retain in the conversation

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

TriggerBetaClearToolUses20250919EditTriggerUnionoptional

Condition that triggers the context management strategy

Accepts one of the following:

type BetaInputTokensTriggerstruct{…}

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

type BetaToolUsesTriggerstruct{…}

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaCodeExecutionOutputBlockstruct{…}

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

type BetaCodeExecutionOutputBlockParamRespstruct{…}

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

type BetaCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block_param)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

type BetaCodeExecutionTool20250522struct{…}

NameCodeExecution

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const CodeExecutionCodeExecutionCodeExecution = "code\_execution"

TypeCodeExecution20250522

Accepts one of the following:

const CodeExecution20250522CodeExecution20250522CodeExecution20250522 = "code\_execution\_20250522"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaCodeExecutionTool20250522AllowedCallerDirectBetaCodeExecutionTool20250522AllowedCaller = "direct"

const BetaCodeExecutionTool20250522AllowedCallerCodeExecution20250825BetaCodeExecutionTool20250522AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaCodeExecutionTool20250825struct{…}

NameCodeExecution

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const CodeExecutionCodeExecutionCodeExecution = "code\_execution"

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaCodeExecutionTool20250825AllowedCallerDirectBetaCodeExecutionTool20250825AllowedCaller = "direct"

const BetaCodeExecutionTool20250825AllowedCallerCodeExecution20250825BetaCodeExecutionTool20250825AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaCodeExecutionToolResultBlockContentUnioninterface{…}

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

type BetaCodeExecutionToolResultBlockParamRespstruct{…}

Content[BetaCodeExecutionToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_param_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block_param)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaCodeExecutionToolResultBlockParamContentUnionRespinterface{…}

Accepts one of the following:

type BetaCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block_param)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionToolResultErrorCodestring

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

type BetaCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaContainerstruct{…}

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

type BetaContainerParamsRespstruct{…}

Container parameters with skills to be loaded.

IDstringoptional

Container id

Skills\[\][BetaSkillParamsResp](https://platform.claude.com/docs/en/api/beta#beta_skill_params)optional

List of skills to load in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillParamsType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillParamsTypeAnthropicBetaSkillParamsType = "anthropic"

const BetaSkillParamsTypeCustomBetaSkillParamsType = "custom"

Versionstringoptional

Skill version or 'latest' for most recent version

maxLength64

minLength1

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

type BetaContainerUploadBlockParamRespstruct{…}

A content block that represents a file to be uploaded to the container
Files uploaded via this block will be available in the container's input directory.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaContentBlockUnioninterface{…}

Response model for a file uploaded to the container.

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

type BetaContentBlockParamUnionRespinterface{…}

Regular text content.

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaThinkingBlockParamRespstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockParamRespstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeToolResult

Accepts one of the following:

const ToolResultToolResultToolResult = "tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Content\[\]BetaToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

\[\]BetaToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaToolReferenceBlockParamRespstruct{…}

Tool reference block that can be included in tool\_result content.

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

IsErrorbooloptional

type BetaServerToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

NameBetaServerToolUseBlockParamName

Accepts one of the following:

const BetaServerToolUseBlockParamNameWebSearchBetaServerToolUseBlockParamName = "web\_search"

const BetaServerToolUseBlockParamNameWebFetchBetaServerToolUseBlockParamName = "web\_fetch"

const BetaServerToolUseBlockParamNameCodeExecutionBetaServerToolUseBlockParamName = "code\_execution"

const BetaServerToolUseBlockParamNameBashCodeExecutionBetaServerToolUseBlockParamName = "bash\_code\_execution"

const BetaServerToolUseBlockParamNameTextEditorCodeExecutionBetaServerToolUseBlockParamName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockParamNameToolSearchToolRegexBetaServerToolUseBlockParamName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockParamNameToolSearchToolBm25BetaServerToolUseBlockParamName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaServerToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaWebSearchToolResultBlockParamRespstruct{…}

Content[BetaWebSearchToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_param_content)

Accepts one of the following:

\[\][BetaWebSearchResultBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block_param)

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type BetaWebSearchToolRequestErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaWebFetchToolResultBlockParamRespstruct{…}

ContentBetaWebFetchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockParamRespstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockParamRespstruct{…}

Content[BetaRequestDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_request_document_block)

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

RetrievedAtstringoptional

ISO 8601 timestamp when the content was retrieved

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaCodeExecutionToolResultBlockParamRespstruct{…}

Content[BetaCodeExecutionToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_param_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block_param)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaBashCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaBashCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorParamErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaTextEditorCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "file\_not\_found"

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

ErrorMessagestringoptional

type BetaTextEditorCodeExecutionViewResultBlockParamRespstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockParamFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeTextBetaTextEditorCodeExecutionViewResultBlockParamFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeImageBetaTextEditorCodeExecutionViewResultBlockParamFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypePDFBetaTextEditorCodeExecutionViewResultBlockParamFileType = "pdf"

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

NumLinesint64optional

StartLineint64optional

TotalLinesint64optional

type BetaTextEditorCodeExecutionCreateResultBlockParamRespstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockParamRespstruct{…}

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

Lines\[\]stringoptional

NewLinesint64optional

NewStartint64optional

OldLinesint64optional

OldStartint64optional

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaToolSearchToolResultBlockParamRespstruct{…}

ContentBetaToolSearchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaToolSearchToolResultErrorParamRespstruct{…}

ErrorCodeBetaToolSearchToolResultErrorParamErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorParamErrorCodeInvalidToolInputBetaToolSearchToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorParamErrorCodeUnavailableBetaToolSearchToolResultErrorParamErrorCode = "unavailable"

const BetaToolSearchToolResultErrorParamErrorCodeTooManyRequestsBetaToolSearchToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorParamErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorParamErrorCode = "execution\_time\_exceeded"

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockParamRespstruct{…}

ToolReferences\[\][BetaToolReferenceBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block_param)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaMCPToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaRequestMCPToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

ContentBetaRequestMCPToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

string

\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

IsErrorbooloptional

type BetaContainerUploadBlockParamRespstruct{…}

A content block that represents a file to be uploaded to the container
Files uploaded via this block will be available in the container's input directory.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaContentBlockSourceContentUnioninterface{…}

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaContextManagementConfigstruct{…}

Edits\[\]BetaContextManagementConfigEditUnionoptional

List of context management edits to apply

Accepts one of the following:

type BetaClearToolUses20250919Editstruct{…}

TypeClearToolUses20250919

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

ClearAtLeast[BetaInputTokensClearAtLeast](https://platform.claude.com/docs/en/api/beta#beta_input_tokens_clear_at_least)optional

Minimum number of tokens that must be cleared when triggered. Context will only be modified if at least this many tokens can be removed.

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

ClearToolInputsBetaClearToolUses20250919EditClearToolInputsUnionoptional

Whether to clear all tool inputs (bool) or specific tool inputs to clear (list)

Accepts one of the following:

bool

\[\]string

ExcludeTools\[\]stringoptional

Tool names whose uses are preserved from clearing

Keep[BetaToolUsesKeep](https://platform.claude.com/docs/en/api/beta#beta_tool_uses_keep)optional

Number of tool uses to retain in the conversation

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

TriggerBetaClearToolUses20250919EditTriggerUnionoptional

Condition that triggers the context management strategy

Accepts one of the following:

type BetaInputTokensTriggerstruct{…}

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

type BetaToolUsesTriggerstruct{…}

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

type BetaClearThinking20251015Editstruct{…}

TypeClearThinking20251015

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

KeepBetaClearThinking20251015EditKeepUnionoptional

Number of most recent assistant turns to keep thinking blocks for. Older turns will have their thinking blocks removed.

Accepts one of the following:

type BetaThinkingTurnsstruct{…}

TypeThinkingTurns

Accepts one of the following:

const ThinkingTurnsThinkingTurnsThinkingTurns = "thinking\_turns"

Valueint64

type BetaAllThinkingTurnsstruct{…}

TypeAll

Accepts one of the following:

const AllAllAll = "all"

All

Accepts one of the following:

const AllAllAll = "all"

type BetaContextManagementResponsestruct{…}

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

type BetaCountTokensContextManagementResponsestruct{…}

OriginalInputTokensint64

The original token count before context management was applied

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaDocumentBlockstruct{…}

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaInputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type BetaInputTokensClearAtLeaststruct{…}

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

type BetaInputTokensTriggerstruct{…}

TypeInputTokens

Accepts one of the following:

const InputTokensInputTokensInputTokens = "input\_tokens"

Valueint64

type BetaJSONOutputFormatstruct{…}

Schemamap\[string,any\]

The JSON schema of the format

TypeJSONSchema

Accepts one of the following:

const JSONSchemaJSONSchemaJSONSchema = "json\_schema"

type BetaMCPToolConfigstruct{…}

Configuration for a specific tool in an MCP toolset.

DeferLoadingbooloptional

Enabledbooloptional

type BetaMCPToolDefaultConfigstruct{…}

Default configuration for tools in an MCP toolset.

DeferLoadingbooloptional

Enabledbooloptional

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaMCPToolsetstruct{…}

Configuration for a group of tools from an MCP server.

Allows configuring enabled status and defer\_loading for all tools
from an MCP server, with optional per-tool overrides.

MCPServerNamestring

Name of the MCP server to configure tools for

maxLength255

minLength1

TypeMCPToolset

Accepts one of the following:

const MCPToolsetMCPToolsetMCPToolset = "mcp\_toolset"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Configsmap\[string,[BetaMCPToolConfig](https://platform.claude.com/docs/en/api/beta#beta_mcp_tool_config)\]optional

Configuration overrides for specific tools, keyed by tool name

DeferLoadingbooloptional

Enabledbooloptional

DefaultConfig[BetaMCPToolDefaultConfig](https://platform.claude.com/docs/en/api/beta#beta_mcp_tool_default_config)optional

Default configuration applied to all tools from this server

DeferLoadingbooloptional

Enabledbooloptional

type BetaMemoryTool20250818struct{…}

NameMemory

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const MemoryMemoryMemory = "memory"

TypeMemory20250818

Accepts one of the following:

const Memory20250818Memory20250818Memory20250818 = "memory\_20250818"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaMemoryTool20250818AllowedCallerDirectBetaMemoryTool20250818AllowedCaller = "direct"

const BetaMemoryTool20250818AllowedCallerCodeExecution20250825BetaMemoryTool20250818AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaMemoryTool20250818CommandUnioninterface{…}

Accepts one of the following:

type BetaMemoryTool20250818ViewCommandstruct{…}

CommandView

Command type identifier

Accepts one of the following:

const ViewViewView = "view"

Pathstring

Path to directory or file to view

ViewRange\[\]int64optional

Optional line range for viewing specific lines

type BetaMemoryTool20250818CreateCommandstruct{…}

CommandCreate

Command type identifier

Accepts one of the following:

const CreateCreateCreate = "create"

FileTextstring

Content to write to the file

Pathstring

Path where the file should be created

type BetaMemoryTool20250818StrReplaceCommandstruct{…}

CommandStrReplace

Command type identifier

Accepts one of the following:

const StrReplaceStrReplaceStrReplace = "str\_replace"

NewStrstring

Text to replace with

OldStrstring

Text to search for and replace

Pathstring

Path to the file where text should be replaced

type BetaMemoryTool20250818InsertCommandstruct{…}

CommandInsert

Command type identifier

Accepts one of the following:

const InsertInsertInsert = "insert"

InsertLineint64

Line number where text should be inserted

minimum1

InsertTextstring

Text to insert at the specified line

Pathstring

Path to the file where text should be inserted

type BetaMemoryTool20250818DeleteCommandstruct{…}

CommandDelete

Command type identifier

Accepts one of the following:

const DeleteDeleteDelete = "delete"

Pathstring

Path to the file or directory to delete

type BetaMemoryTool20250818RenameCommandstruct{…}

CommandRename

Command type identifier

Accepts one of the following:

const RenameRenameRename = "rename"

NewPathstring

New path for the file or directory

OldPathstring

Current path of the file or directory

type BetaMemoryTool20250818CreateCommandstruct{…}

CommandCreate

Command type identifier

Accepts one of the following:

const CreateCreateCreate = "create"

FileTextstring

Content to write to the file

Pathstring

Path where the file should be created

type BetaMemoryTool20250818DeleteCommandstruct{…}

CommandDelete

Command type identifier

Accepts one of the following:

const DeleteDeleteDelete = "delete"

Pathstring

Path to the file or directory to delete

type BetaMemoryTool20250818InsertCommandstruct{…}

CommandInsert

Command type identifier

Accepts one of the following:

const InsertInsertInsert = "insert"

InsertLineint64

Line number where text should be inserted

minimum1

InsertTextstring

Text to insert at the specified line

Pathstring

Path to the file where text should be inserted

type BetaMemoryTool20250818RenameCommandstruct{…}

CommandRename

Command type identifier

Accepts one of the following:

const RenameRenameRename = "rename"

NewPathstring

New path for the file or directory

OldPathstring

Current path of the file or directory

type BetaMemoryTool20250818StrReplaceCommandstruct{…}

CommandStrReplace

Command type identifier

Accepts one of the following:

const StrReplaceStrReplaceStrReplace = "str\_replace"

NewStrstring

Text to replace with

OldStrstring

Text to search for and replace

Pathstring

Path to the file where text should be replaced

type BetaMemoryTool20250818ViewCommandstruct{…}

CommandView

Command type identifier

Accepts one of the following:

const ViewViewView = "view"

Pathstring

Path to directory or file to view

ViewRange\[\]int64optional

Optional line range for viewing specific lines

type BetaMessagestruct{…}

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

type BetaMessageDeltaUsagestruct{…}

CacheCreationInputTokensint64

The cumulative number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The cumulative number of input tokens read from the cache.

minimum0

InputTokensint64

The cumulative number of input tokens which were used.

minimum0

OutputTokensint64

The cumulative number of output tokens which were used.

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type BetaMessageParamRespstruct{…}

Content\[\][BetaContentBlockParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_content_block_param)

Accepts one of the following:

\[\][BetaContentBlockParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_content_block_param)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaThinkingBlockParamRespstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockParamRespstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeToolResult

Accepts one of the following:

const ToolResultToolResultToolResult = "tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Content\[\]BetaToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

\[\]BetaToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaToolReferenceBlockParamRespstruct{…}

Tool reference block that can be included in tool\_result content.

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

IsErrorbooloptional

type BetaServerToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

NameBetaServerToolUseBlockParamName

Accepts one of the following:

const BetaServerToolUseBlockParamNameWebSearchBetaServerToolUseBlockParamName = "web\_search"

const BetaServerToolUseBlockParamNameWebFetchBetaServerToolUseBlockParamName = "web\_fetch"

const BetaServerToolUseBlockParamNameCodeExecutionBetaServerToolUseBlockParamName = "code\_execution"

const BetaServerToolUseBlockParamNameBashCodeExecutionBetaServerToolUseBlockParamName = "bash\_code\_execution"

const BetaServerToolUseBlockParamNameTextEditorCodeExecutionBetaServerToolUseBlockParamName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockParamNameToolSearchToolRegexBetaServerToolUseBlockParamName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockParamNameToolSearchToolBm25BetaServerToolUseBlockParamName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaServerToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaWebSearchToolResultBlockParamRespstruct{…}

Content[BetaWebSearchToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_param_content)

Accepts one of the following:

\[\][BetaWebSearchResultBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block_param)

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type BetaWebSearchToolRequestErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaWebFetchToolResultBlockParamRespstruct{…}

ContentBetaWebFetchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockParamRespstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockParamRespstruct{…}

Content[BetaRequestDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_request_document_block)

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

RetrievedAtstringoptional

ISO 8601 timestamp when the content was retrieved

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaCodeExecutionToolResultBlockParamRespstruct{…}

Content[BetaCodeExecutionToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_param_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block_param)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaBashCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaBashCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorParamErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorParamErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockParamRespstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaTextEditorCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "file\_not\_found"

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

ErrorMessagestringoptional

type BetaTextEditorCodeExecutionViewResultBlockParamRespstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockParamFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeTextBetaTextEditorCodeExecutionViewResultBlockParamFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeImageBetaTextEditorCodeExecutionViewResultBlockParamFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypePDFBetaTextEditorCodeExecutionViewResultBlockParamFileType = "pdf"

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

NumLinesint64optional

StartLineint64optional

TotalLinesint64optional

type BetaTextEditorCodeExecutionCreateResultBlockParamRespstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockParamRespstruct{…}

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

Lines\[\]stringoptional

NewLinesint64optional

NewStartint64optional

OldLinesint64optional

OldStartint64optional

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaToolSearchToolResultBlockParamRespstruct{…}

ContentBetaToolSearchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaToolSearchToolResultErrorParamRespstruct{…}

ErrorCodeBetaToolSearchToolResultErrorParamErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorParamErrorCodeInvalidToolInputBetaToolSearchToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorParamErrorCodeUnavailableBetaToolSearchToolResultErrorParamErrorCode = "unavailable"

const BetaToolSearchToolResultErrorParamErrorCodeTooManyRequestsBetaToolSearchToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorParamErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorParamErrorCode = "execution\_time\_exceeded"

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockParamRespstruct{…}

ToolReferences\[\][BetaToolReferenceBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block_param)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaMCPToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaRequestMCPToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

ContentBetaRequestMCPToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

string

\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

IsErrorbooloptional

type BetaContainerUploadBlockParamRespstruct{…}

A content block that represents a file to be uploaded to the container
Files uploaded via this block will be available in the container's input directory.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

RoleBetaMessageParamRole

Accepts one of the following:

const BetaMessageParamRoleUserBetaMessageParamRole = "user"

const BetaMessageParamRoleAssistantBetaMessageParamRole = "assistant"

type BetaMessageTokensCountstruct{…}

ContextManagement[BetaCountTokensContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_count_tokens_context_management_response)

Information about context management applied to the message.

OriginalInputTokensint64

The original token count before context management was applied

InputTokensint64

The total number of tokens across the provided list of messages, system prompt, and tools.

type BetaMetadatastruct{…}

UserIDstringoptional

An external identifier for the user who is associated with the request.

This should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number.

maxLength256

type BetaOutputConfigstruct{…}

EffortBetaOutputConfigEffortoptional

All possible effort levels.

Accepts one of the following:

const BetaOutputConfigEffortLowBetaOutputConfigEffort = "low"

const BetaOutputConfigEffortMediumBetaOutputConfigEffort = "medium"

const BetaOutputConfigEffortHighBetaOutputConfigEffort = "high"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaRawContentBlockDeltaUnioninterface{…}

Accepts one of the following:

type BetaTextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type BetaInputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type BetaCitationsDeltastruct{…}

CitationBetaCitationsDeltaCitationUnion

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type BetaThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type BetaSignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

type BetaRawContentBlockDeltaEventstruct{…}

Delta[BetaRawContentBlockDeltaUnion](https://platform.claude.com/docs/en/api/beta#beta_raw_content_block_delta)

Accepts one of the following:

type BetaTextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type BetaInputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type BetaCitationsDeltastruct{…}

CitationBetaCitationsDeltaCitationUnion

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type BetaThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type BetaSignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

Indexint64

TypeContentBlockDelta

Accepts one of the following:

const ContentBlockDeltaContentBlockDeltaContentBlockDelta = "content\_block\_delta"

type BetaRawContentBlockStartEventstruct{…}

ContentBlockBetaRawContentBlockStartEventContentBlockUnion

Response model for a file uploaded to the container.

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

Indexint64

TypeContentBlockStart

Accepts one of the following:

const ContentBlockStartContentBlockStartContentBlockStart = "content\_block\_start"

type BetaRawContentBlockStopEventstruct{…}

Indexint64

TypeContentBlockStop

Accepts one of the following:

const ContentBlockStopContentBlockStopContentBlockStop = "content\_block\_stop"

type BetaRawMessageDeltaEventstruct{…}

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Information about context management strategies applied during the request

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

DeltaBetaRawMessageDeltaEventDelta

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

TypeMessageDelta

Accepts one of the following:

const MessageDeltaMessageDeltaMessageDelta = "message\_delta"

Usage[BetaMessageDeltaUsage](https://platform.claude.com/docs/en/api/beta#beta_message_delta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreationInputTokensint64

The cumulative number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The cumulative number of input tokens read from the cache.

minimum0

InputTokensint64

The cumulative number of input tokens which were used.

minimum0

OutputTokensint64

The cumulative number of output tokens which were used.

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type BetaRawMessageStartEventstruct{…}

Message[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

TypeMessageStart

Accepts one of the following:

const MessageStartMessageStartMessageStart = "message\_start"

type BetaRawMessageStopEventstruct{…}

TypeMessageStop

Accepts one of the following:

const MessageStopMessageStopMessageStop = "message\_stop"

type BetaRawMessageStreamEventUnioninterface{…}

Accepts one of the following:

type BetaRawMessageStartEventstruct{…}

Message[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

TypeMessageStart

Accepts one of the following:

const MessageStartMessageStartMessageStart = "message\_start"

type BetaRawMessageDeltaEventstruct{…}

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Information about context management strategies applied during the request

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

DeltaBetaRawMessageDeltaEventDelta

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

TypeMessageDelta

Accepts one of the following:

const MessageDeltaMessageDeltaMessageDelta = "message\_delta"

Usage[BetaMessageDeltaUsage](https://platform.claude.com/docs/en/api/beta#beta_message_delta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreationInputTokensint64

The cumulative number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The cumulative number of input tokens read from the cache.

minimum0

InputTokensint64

The cumulative number of input tokens which were used.

minimum0

OutputTokensint64

The cumulative number of output tokens which were used.

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type BetaRawMessageStopEventstruct{…}

TypeMessageStop

Accepts one of the following:

const MessageStopMessageStopMessageStop = "message\_stop"

type BetaRawContentBlockStartEventstruct{…}

ContentBlockBetaRawContentBlockStartEventContentBlockUnion

Response model for a file uploaded to the container.

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

Indexint64

TypeContentBlockStart

Accepts one of the following:

const ContentBlockStartContentBlockStartContentBlockStart = "content\_block\_start"

type BetaRawContentBlockDeltaEventstruct{…}

Delta[BetaRawContentBlockDeltaUnion](https://platform.claude.com/docs/en/api/beta#beta_raw_content_block_delta)

Accepts one of the following:

type BetaTextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type BetaInputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type BetaCitationsDeltastruct{…}

CitationBetaCitationsDeltaCitationUnion

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type BetaThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type BetaSignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

Indexint64

TypeContentBlockDelta

Accepts one of the following:

const ContentBlockDeltaContentBlockDeltaContentBlockDelta = "content\_block\_delta"

type BetaRawContentBlockStopEventstruct{…}

Indexint64

TypeContentBlockStop

Accepts one of the following:

const ContentBlockStopContentBlockStopContentBlockStop = "content\_block\_stop"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaRedactedThinkingBlockParamRespstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaRequestMCPServerToolConfigurationstruct{…}

AllowedTools\[\]stringoptional

Enabledbooloptional

type BetaRequestMCPServerURLDefinitionstruct{…}

Namestring

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

AuthorizationTokenstringoptional

ToolConfiguration[BetaRequestMCPServerToolConfiguration](https://platform.claude.com/docs/en/api/beta#beta_request_mcp_server_tool_configuration)optional

AllowedTools\[\]stringoptional

Enabledbooloptional

type BetaRequestMCPToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

ContentBetaRequestMCPToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

string

\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

IsErrorbooloptional

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUsagestruct{…}

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaServerToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

NameBetaServerToolUseBlockParamName

Accepts one of the following:

const BetaServerToolUseBlockParamNameWebSearchBetaServerToolUseBlockParamName = "web\_search"

const BetaServerToolUseBlockParamNameWebFetchBetaServerToolUseBlockParamName = "web\_fetch"

const BetaServerToolUseBlockParamNameCodeExecutionBetaServerToolUseBlockParamName = "code\_execution"

const BetaServerToolUseBlockParamNameBashCodeExecutionBetaServerToolUseBlockParamName = "bash\_code\_execution"

const BetaServerToolUseBlockParamNameTextEditorCodeExecutionBetaServerToolUseBlockParamName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockParamNameToolSearchToolRegexBetaServerToolUseBlockParamName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockParamNameToolSearchToolBm25BetaServerToolUseBlockParamName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaServerToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaSignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

type BetaSkillstruct{…}

A skill that was loaded in a container (response model).

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

type BetaSkillParamsRespstruct{…}

Specification for a skill to be loaded in a container (request model).

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillParamsType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillParamsTypeAnthropicBetaSkillParamsType = "anthropic"

const BetaSkillParamsTypeCustomBetaSkillParamsType = "custom"

Versionstringoptional

Skill version or 'latest' for most recent version

maxLength64

minLength1

type BetaStopReasonstring

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaTextCitationUnioninterface{…}

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaTextCitationParamUnionRespinterface{…}

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaTextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionCreateResultBlockParamRespstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockParamRespstruct{…}

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

Lines\[\]stringoptional

NewLinesint64optional

NewStartint64optional

OldLinesint64optional

OldStartint64optional

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockParamRespstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "file\_not\_found"

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

ErrorMessagestringoptional

type BetaTextEditorCodeExecutionViewResultBlockParamRespstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockParamFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeTextBetaTextEditorCodeExecutionViewResultBlockParamFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeImageBetaTextEditorCodeExecutionViewResultBlockParamFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypePDFBetaTextEditorCodeExecutionViewResultBlockParamFileType = "pdf"

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

NumLinesint64optional

StartLineint64optional

TotalLinesint64optional

type BetaTextEditorCodeExecutionCreateResultBlockParamRespstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockParamRespstruct{…}

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

Lines\[\]stringoptional

NewLinesint64optional

NewStartint64optional

OldLinesint64optional

OldStartint64optional

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionToolResultErrorParamRespstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorParamErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorParamErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorParamErrorCode = "file\_not\_found"

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

ErrorMessagestringoptional

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionViewResultBlockParamRespstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockParamFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeTextBetaTextEditorCodeExecutionViewResultBlockParamFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypeImageBetaTextEditorCodeExecutionViewResultBlockParamFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockParamFileTypePDFBetaTextEditorCodeExecutionViewResultBlockParamFileType = "pdf"

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

NumLinesint64optional

StartLineint64optional

TotalLinesint64optional

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaThinkingBlockParamRespstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaThinkingConfigDisabledstruct{…}

TypeDisabled

Accepts one of the following:

const DisabledDisabledDisabled = "disabled"

type BetaThinkingConfigEnabledstruct{…}

BudgetTokensint64

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

TypeEnabled

Accepts one of the following:

const EnabledEnabledEnabled = "enabled"

type BetaThinkingConfigParamUnionRespinterface{…}

Configuration for enabling Claude's extended thinking.

When enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

Accepts one of the following:

type BetaThinkingConfigEnabledstruct{…}

BudgetTokensint64

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

TypeEnabled

Accepts one of the following:

const EnabledEnabledEnabled = "enabled"

type BetaThinkingConfigDisabledstruct{…}

TypeDisabled

Accepts one of the following:

const DisabledDisabledDisabled = "disabled"

type BetaThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type BetaThinkingTurnsstruct{…}

TypeThinkingTurns

Accepts one of the following:

const ThinkingTurnsThinkingTurnsThinkingTurns = "thinking\_turns"

Valueint64

type BetaToolstruct{…}

InputSchemaBetaToolInputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.

This defines the shape of the `input` that your tool accepts and that the model will produce.

TypeObject

Accepts one of the following:

const ObjectObjectObject = "object"

Propertiesmap\[string,any\]optional

Required\[\]stringoptional

Namestring

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

maxLength128

minLength1

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolAllowedCallerDirectBetaToolAllowedCaller = "direct"

const BetaToolAllowedCallerCodeExecution20250825BetaToolAllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Descriptionstringoptional

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

TypeBetaToolTypeoptional

Accepts one of the following:

const BetaToolTypeCustomBetaToolType = "custom"

type BetaToolBash20241022struct{…}

NameBash

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const BashBashBash = "bash"

TypeBash20241022

Accepts one of the following:

const Bash20241022Bash20241022Bash20241022 = "bash\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolBash20241022AllowedCallerDirectBetaToolBash20241022AllowedCaller = "direct"

const BetaToolBash20241022AllowedCallerCodeExecution20250825BetaToolBash20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolBash20250124struct{…}

NameBash

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const BashBashBash = "bash"

TypeBash20250124

Accepts one of the following:

const Bash20250124Bash20250124Bash20250124 = "bash\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolBash20250124AllowedCallerDirectBetaToolBash20250124AllowedCaller = "direct"

const BetaToolBash20250124AllowedCallerCodeExecution20250825BetaToolBash20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolChoiceUnioninterface{…}

How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.

Accepts one of the following:

type BetaToolChoiceAutostruct{…}

The model will automatically decide whether to use tools.

TypeAuto

Accepts one of the following:

const AutoAutoAuto = "auto"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

type BetaToolChoiceAnystruct{…}

The model will use any available tools.

TypeAny

Accepts one of the following:

const AnyAnyAny = "any"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type BetaToolChoiceToolstruct{…}

The model will use the specified tool with `tool_choice.name`.

Namestring

The name of the tool to use.

TypeTool

Accepts one of the following:

const ToolToolTool = "tool"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type BetaToolChoiceNonestruct{…}

The model will not be allowed to use tools.

TypeNone

Accepts one of the following:

const NoneNoneNone = "none"

type BetaToolChoiceAnystruct{…}

The model will use any available tools.

TypeAny

Accepts one of the following:

const AnyAnyAny = "any"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type BetaToolChoiceAutostruct{…}

The model will automatically decide whether to use tools.

TypeAuto

Accepts one of the following:

const AutoAutoAuto = "auto"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

type BetaToolChoiceNonestruct{…}

The model will not be allowed to use tools.

TypeNone

Accepts one of the following:

const NoneNoneNone = "none"

type BetaToolChoiceToolstruct{…}

The model will use the specified tool with `tool_choice.name`.

Namestring

The name of the tool to use.

TypeTool

Accepts one of the following:

const ToolToolTool = "tool"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type BetaToolComputerUse20241022struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20241022

Accepts one of the following:

const Computer20241022Computer20241022Computer20241022 = "computer\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20241022AllowedCallerDirectBetaToolComputerUse20241022AllowedCaller = "direct"

const BetaToolComputerUse20241022AllowedCallerCodeExecution20250825BetaToolComputerUse20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolComputerUse20250124struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20250124

Accepts one of the following:

const Computer20250124Computer20250124Computer20250124 = "computer\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20250124AllowedCallerDirectBetaToolComputerUse20250124AllowedCaller = "direct"

const BetaToolComputerUse20250124AllowedCallerCodeExecution20250825BetaToolComputerUse20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolComputerUse20251124struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20251124

Accepts one of the following:

const Computer20251124Computer20251124Computer20251124 = "computer\_20251124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20251124AllowedCallerDirectBetaToolComputerUse20251124AllowedCaller = "direct"

const BetaToolComputerUse20251124AllowedCallerCodeExecution20250825BetaToolComputerUse20251124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

EnableZoombooloptional

Whether to enable an action to take a zoomed-in screenshot of the screen.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolReferenceBlockstruct{…}

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

type BetaToolReferenceBlockParamRespstruct{…}

Tool reference block that can be included in tool\_result content.

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeToolResult

Accepts one of the following:

const ToolResultToolResultToolResult = "tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Content\[\]BetaToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

\[\]BetaToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaSearchResultBlockParamRespstruct{…}

Content\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Sourcestring

Titlestring

TypeSearchResult

Accepts one of the following:

const SearchResultSearchResultSearchResult = "search\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

type BetaRequestDocumentBlockstruct{…}

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type BetaToolReferenceBlockParamRespstruct{…}

Tool reference block that can be included in tool\_result content.

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

IsErrorbooloptional

type BetaToolSearchToolBm25\_20251119struct{…}

NameToolSearchToolBm25

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ToolSearchToolBm25ToolSearchToolBm25ToolSearchToolBm25 = "tool\_search\_tool\_bm25"

TypeBetaToolSearchToolBm25\_20251119Type

Accepts one of the following:

const BetaToolSearchToolBm25\_20251119TypeToolSearchToolBm25\_20251119BetaToolSearchToolBm25\_20251119Type = "tool\_search\_tool\_bm25\_20251119"

const BetaToolSearchToolBm25\_20251119TypeToolSearchToolBm25BetaToolSearchToolBm25\_20251119Type = "tool\_search\_tool\_bm25"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolSearchToolBm25\_20251119AllowedCallerDirectBetaToolSearchToolBm25\_20251119AllowedCaller = "direct"

const BetaToolSearchToolBm25\_20251119AllowedCallerCodeExecution20250825BetaToolSearchToolBm25\_20251119AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaToolSearchToolRegex20251119struct{…}

NameToolSearchToolRegex

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ToolSearchToolRegexToolSearchToolRegexToolSearchToolRegex = "tool\_search\_tool\_regex"

TypeBetaToolSearchToolRegex20251119Type

Accepts one of the following:

const BetaToolSearchToolRegex20251119TypeToolSearchToolRegex20251119BetaToolSearchToolRegex20251119Type = "tool\_search\_tool\_regex\_20251119"

const BetaToolSearchToolRegex20251119TypeToolSearchToolRegexBetaToolSearchToolRegex20251119Type = "tool\_search\_tool\_regex"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolSearchToolRegex20251119AllowedCallerDirectBetaToolSearchToolRegex20251119AllowedCaller = "direct"

const BetaToolSearchToolRegex20251119AllowedCallerCodeExecution20250825BetaToolSearchToolRegex20251119AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaToolSearchToolResultBlockParamRespstruct{…}

ContentBetaToolSearchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaToolSearchToolResultErrorParamRespstruct{…}

ErrorCodeBetaToolSearchToolResultErrorParamErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorParamErrorCodeInvalidToolInputBetaToolSearchToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorParamErrorCodeUnavailableBetaToolSearchToolResultErrorParamErrorCode = "unavailable"

const BetaToolSearchToolResultErrorParamErrorCodeTooManyRequestsBetaToolSearchToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorParamErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorParamErrorCode = "execution\_time\_exceeded"

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockParamRespstruct{…}

ToolReferences\[\][BetaToolReferenceBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block_param)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolResultErrorParamRespstruct{…}

ErrorCodeBetaToolSearchToolResultErrorParamErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorParamErrorCodeInvalidToolInputBetaToolSearchToolResultErrorParamErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorParamErrorCodeUnavailableBetaToolSearchToolResultErrorParamErrorCode = "unavailable"

const BetaToolSearchToolResultErrorParamErrorCodeTooManyRequestsBetaToolSearchToolResultErrorParamErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorParamErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorParamErrorCode = "execution\_time\_exceeded"

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

type BetaToolSearchToolSearchResultBlockParamRespstruct{…}

ToolReferences\[\][BetaToolReferenceBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block_param)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

type BetaToolTextEditor20241022struct{…}

NameStrReplaceEditor

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceEditorStrReplaceEditorStrReplaceEditor = "str\_replace\_editor"

TypeTextEditor20241022

Accepts one of the following:

const TextEditor20241022TextEditor20241022TextEditor20241022 = "text\_editor\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20241022AllowedCallerDirectBetaToolTextEditor20241022AllowedCaller = "direct"

const BetaToolTextEditor20241022AllowedCallerCodeExecution20250825BetaToolTextEditor20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250124struct{…}

NameStrReplaceEditor

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceEditorStrReplaceEditorStrReplaceEditor = "str\_replace\_editor"

TypeTextEditor20250124

Accepts one of the following:

const TextEditor20250124TextEditor20250124TextEditor20250124 = "text\_editor\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250124AllowedCallerDirectBetaToolTextEditor20250124AllowedCaller = "direct"

const BetaToolTextEditor20250124AllowedCallerCodeExecution20250825BetaToolTextEditor20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250429struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250429

Accepts one of the following:

const TextEditor20250429TextEditor20250429TextEditor20250429 = "text\_editor\_20250429"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250429AllowedCallerDirectBetaToolTextEditor20250429AllowedCaller = "direct"

const BetaToolTextEditor20250429AllowedCallerCodeExecution20250825BetaToolTextEditor20250429AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250728struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250728

Accepts one of the following:

const TextEditor20250728TextEditor20250728TextEditor20250728 = "text\_editor\_20250728"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250728AllowedCallerDirectBetaToolTextEditor20250728AllowedCaller = "direct"

const BetaToolTextEditor20250728AllowedCallerCodeExecution20250825BetaToolTextEditor20250728AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

MaxCharactersint64optional

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

Strictbooloptional

type BetaToolUnioninterface{…}

Configuration for a group of tools from an MCP server.

Allows configuring enabled status and defer\_loading for all tools
from an MCP server, with optional per-tool overrides.

Accepts one of the following:

type BetaToolstruct{…}

InputSchemaBetaToolInputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.

This defines the shape of the `input` that your tool accepts and that the model will produce.

TypeObject

Accepts one of the following:

const ObjectObjectObject = "object"

Propertiesmap\[string,any\]optional

Required\[\]stringoptional

Namestring

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

maxLength128

minLength1

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolAllowedCallerDirectBetaToolAllowedCaller = "direct"

const BetaToolAllowedCallerCodeExecution20250825BetaToolAllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Descriptionstringoptional

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

TypeBetaToolTypeoptional

Accepts one of the following:

const BetaToolTypeCustomBetaToolType = "custom"

type BetaToolBash20241022struct{…}

NameBash

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const BashBashBash = "bash"

TypeBash20241022

Accepts one of the following:

const Bash20241022Bash20241022Bash20241022 = "bash\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolBash20241022AllowedCallerDirectBetaToolBash20241022AllowedCaller = "direct"

const BetaToolBash20241022AllowedCallerCodeExecution20250825BetaToolBash20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolBash20250124struct{…}

NameBash

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const BashBashBash = "bash"

TypeBash20250124

Accepts one of the following:

const Bash20250124Bash20250124Bash20250124 = "bash\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolBash20250124AllowedCallerDirectBetaToolBash20250124AllowedCaller = "direct"

const BetaToolBash20250124AllowedCallerCodeExecution20250825BetaToolBash20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaCodeExecutionTool20250522struct{…}

NameCodeExecution

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const CodeExecutionCodeExecutionCodeExecution = "code\_execution"

TypeCodeExecution20250522

Accepts one of the following:

const CodeExecution20250522CodeExecution20250522CodeExecution20250522 = "code\_execution\_20250522"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaCodeExecutionTool20250522AllowedCallerDirectBetaCodeExecutionTool20250522AllowedCaller = "direct"

const BetaCodeExecutionTool20250522AllowedCallerCodeExecution20250825BetaCodeExecutionTool20250522AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaCodeExecutionTool20250825struct{…}

NameCodeExecution

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const CodeExecutionCodeExecutionCodeExecution = "code\_execution"

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaCodeExecutionTool20250825AllowedCallerDirectBetaCodeExecutionTool20250825AllowedCaller = "direct"

const BetaCodeExecutionTool20250825AllowedCallerCodeExecution20250825BetaCodeExecutionTool20250825AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaToolComputerUse20241022struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20241022

Accepts one of the following:

const Computer20241022Computer20241022Computer20241022 = "computer\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20241022AllowedCallerDirectBetaToolComputerUse20241022AllowedCaller = "direct"

const BetaToolComputerUse20241022AllowedCallerCodeExecution20250825BetaToolComputerUse20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaMemoryTool20250818struct{…}

NameMemory

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const MemoryMemoryMemory = "memory"

TypeMemory20250818

Accepts one of the following:

const Memory20250818Memory20250818Memory20250818 = "memory\_20250818"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaMemoryTool20250818AllowedCallerDirectBetaMemoryTool20250818AllowedCaller = "direct"

const BetaMemoryTool20250818AllowedCallerCodeExecution20250825BetaMemoryTool20250818AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolComputerUse20250124struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20250124

Accepts one of the following:

const Computer20250124Computer20250124Computer20250124 = "computer\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20250124AllowedCallerDirectBetaToolComputerUse20250124AllowedCaller = "direct"

const BetaToolComputerUse20250124AllowedCallerCodeExecution20250825BetaToolComputerUse20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20241022struct{…}

NameStrReplaceEditor

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceEditorStrReplaceEditorStrReplaceEditor = "str\_replace\_editor"

TypeTextEditor20241022

Accepts one of the following:

const TextEditor20241022TextEditor20241022TextEditor20241022 = "text\_editor\_20241022"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20241022AllowedCallerDirectBetaToolTextEditor20241022AllowedCaller = "direct"

const BetaToolTextEditor20241022AllowedCallerCodeExecution20250825BetaToolTextEditor20241022AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolComputerUse20251124struct{…}

DisplayHeightPxint64

The height of the display in pixels.

minimum1

DisplayWidthPxint64

The width of the display in pixels.

minimum1

NameComputer

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ComputerComputerComputer = "computer"

TypeComputer20251124

Accepts one of the following:

const Computer20251124Computer20251124Computer20251124 = "computer\_20251124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolComputerUse20251124AllowedCallerDirectBetaToolComputerUse20251124AllowedCaller = "direct"

const BetaToolComputerUse20251124AllowedCallerCodeExecution20250825BetaToolComputerUse20251124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

DisplayNumberint64optional

The X11 display number (e.g. 0, 1) for the display.

minimum0

EnableZoombooloptional

Whether to enable an action to take a zoomed-in screenshot of the screen.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250124struct{…}

NameStrReplaceEditor

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceEditorStrReplaceEditorStrReplaceEditor = "str\_replace\_editor"

TypeTextEditor20250124

Accepts one of the following:

const TextEditor20250124TextEditor20250124TextEditor20250124 = "text\_editor\_20250124"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250124AllowedCallerDirectBetaToolTextEditor20250124AllowedCaller = "direct"

const BetaToolTextEditor20250124AllowedCallerCodeExecution20250825BetaToolTextEditor20250124AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250429struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250429

Accepts one of the following:

const TextEditor20250429TextEditor20250429TextEditor20250429 = "text\_editor\_20250429"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250429AllowedCallerDirectBetaToolTextEditor20250429AllowedCaller = "direct"

const BetaToolTextEditor20250429AllowedCallerCodeExecution20250825BetaToolTextEditor20250429AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

Strictbooloptional

type BetaToolTextEditor20250728struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250728

Accepts one of the following:

const TextEditor20250728TextEditor20250728TextEditor20250728 = "text\_editor\_20250728"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolTextEditor20250728AllowedCallerDirectBetaToolTextEditor20250728AllowedCaller = "direct"

const BetaToolTextEditor20250728AllowedCallerCodeExecution20250825BetaToolTextEditor20250728AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

InputExamples\[\]map\[string,any\]optional

MaxCharactersint64optional

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

Strictbooloptional

type BetaWebSearchTool20250305struct{…}

NameWebSearch

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeWebSearch20250305

Accepts one of the following:

const WebSearch20250305WebSearch20250305WebSearch20250305 = "web\_search\_20250305"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaWebSearchTool20250305AllowedCallerDirectBetaWebSearchTool20250305AllowedCaller = "direct"

const BetaWebSearchTool20250305AllowedCallerCodeExecution20250825BetaWebSearchTool20250305AllowedCaller = "code\_execution\_20250825"

AllowedDomains\[\]stringoptional

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

BlockedDomains\[\]stringoptional

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

MaxUsesint64optional

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

Strictbooloptional

UserLocationBetaWebSearchTool20250305UserLocationoptional

Parameters for the user's location. Used to provide more relevant search results.

TypeApproximate

Accepts one of the following:

const ApproximateApproximateApproximate = "approximate"

Citystringoptional

The city of the user.

maxLength255

minLength1

Countrystringoptional

The two letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the user.

maxLength2

minLength2

Regionstringoptional

The region of the user.

maxLength255

minLength1

Timezonestringoptional

The [IANA timezone](https://nodatime.org/TimeZones) of the user.

maxLength255

minLength1

type BetaWebFetchTool20250910struct{…}

NameWebFetch

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const WebFetchWebFetchWebFetch = "web\_fetch"

TypeWebFetch20250910

Accepts one of the following:

const WebFetch20250910WebFetch20250910WebFetch20250910 = "web\_fetch\_20250910"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaWebFetchTool20250910AllowedCallerDirectBetaWebFetchTool20250910AllowedCaller = "direct"

const BetaWebFetchTool20250910AllowedCallerCodeExecution20250825BetaWebFetchTool20250910AllowedCaller = "code\_execution\_20250825"

AllowedDomains\[\]stringoptional

List of domains to allow fetching from

BlockedDomains\[\]stringoptional

List of domains to block fetching from

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Citations configuration for fetched documents. Citations are disabled by default.

Enabledbooloptional

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

MaxContentTokensint64optional

Maximum number of tokens used by including web page text content in the context. The limit is approximate and does not apply to binary content such as PDFs.

exclusiveMinimum0

MaxUsesint64optional

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

Strictbooloptional

type BetaToolSearchToolBm25\_20251119struct{…}

NameToolSearchToolBm25

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ToolSearchToolBm25ToolSearchToolBm25ToolSearchToolBm25 = "tool\_search\_tool\_bm25"

TypeBetaToolSearchToolBm25\_20251119Type

Accepts one of the following:

const BetaToolSearchToolBm25\_20251119TypeToolSearchToolBm25\_20251119BetaToolSearchToolBm25\_20251119Type = "tool\_search\_tool\_bm25\_20251119"

const BetaToolSearchToolBm25\_20251119TypeToolSearchToolBm25BetaToolSearchToolBm25\_20251119Type = "tool\_search\_tool\_bm25"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolSearchToolBm25\_20251119AllowedCallerDirectBetaToolSearchToolBm25\_20251119AllowedCaller = "direct"

const BetaToolSearchToolBm25\_20251119AllowedCallerCodeExecution20250825BetaToolSearchToolBm25\_20251119AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaToolSearchToolRegex20251119struct{…}

NameToolSearchToolRegex

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const ToolSearchToolRegexToolSearchToolRegexToolSearchToolRegex = "tool\_search\_tool\_regex"

TypeBetaToolSearchToolRegex20251119Type

Accepts one of the following:

const BetaToolSearchToolRegex20251119TypeToolSearchToolRegex20251119BetaToolSearchToolRegex20251119Type = "tool\_search\_tool\_regex\_20251119"

const BetaToolSearchToolRegex20251119TypeToolSearchToolRegexBetaToolSearchToolRegex20251119Type = "tool\_search\_tool\_regex"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaToolSearchToolRegex20251119AllowedCallerDirectBetaToolSearchToolRegex20251119AllowedCaller = "direct"

const BetaToolSearchToolRegex20251119AllowedCallerCodeExecution20250825BetaToolSearchToolRegex20251119AllowedCaller = "code\_execution\_20250825"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

Strictbooloptional

type BetaMCPToolsetstruct{…}

Configuration for a group of tools from an MCP server.

Allows configuring enabled status and defer\_loading for all tools
from an MCP server, with optional per-tool overrides.

MCPServerNamestring

Name of the MCP server to configure tools for

maxLength255

minLength1

TypeMCPToolset

Accepts one of the following:

const MCPToolsetMCPToolsetMCPToolset = "mcp\_toolset"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Configsmap\[string,[BetaMCPToolConfig](https://platform.claude.com/docs/en/api/beta#beta_mcp_tool_config)\]optional

Configuration overrides for specific tools, keyed by tool name

DeferLoadingbooloptional

Enabledbooloptional

DefaultConfig[BetaMCPToolDefaultConfig](https://platform.claude.com/docs/en/api/beta#beta_mcp_tool_default_config)optional

Default configuration applied to all tools from this server

DeferLoadingbooloptional

Enabledbooloptional

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

CallerBetaToolUseBlockParamCallerUnionRespoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaToolUsesKeepstruct{…}

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

type BetaToolUsesTriggerstruct{…}

TypeToolUses

Accepts one of the following:

const ToolUsesToolUsesToolUses = "tool\_uses"

Valueint64

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaUsagestruct{…}

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

type BetaWebFetchBlockParamRespstruct{…}

Content[BetaRequestDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_request_document_block)

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

RetrievedAtstringoptional

ISO 8601 timestamp when the content was retrieved

type BetaWebFetchTool20250910struct{…}

NameWebFetch

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const WebFetchWebFetchWebFetch = "web\_fetch"

TypeWebFetch20250910

Accepts one of the following:

const WebFetch20250910WebFetch20250910WebFetch20250910 = "web\_fetch\_20250910"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaWebFetchTool20250910AllowedCallerDirectBetaWebFetchTool20250910AllowedCaller = "direct"

const BetaWebFetchTool20250910AllowedCallerCodeExecution20250825BetaWebFetchTool20250910AllowedCaller = "code\_execution\_20250825"

AllowedDomains\[\]stringoptional

List of domains to allow fetching from

BlockedDomains\[\]stringoptional

List of domains to block fetching from

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Citations configuration for fetched documents. Citations are disabled by default.

Enabledbooloptional

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

MaxContentTokensint64optional

Maximum number of tokens used by including web page text content in the context. The limit is approximate and does not apply to binary content such as PDFs.

exclusiveMinimum0

MaxUsesint64optional

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

Strictbooloptional

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaWebFetchToolResultBlockParamRespstruct{…}

ContentBetaWebFetchToolResultBlockParamContentUnionResp

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockParamRespstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockParamRespstruct{…}

Content[BetaRequestDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_request_document_block)

SourceBetaRequestDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaContentBlockSourcestruct{…}

ContentBetaContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][BetaContentBlockSourceContentUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block_source_content)

Accepts one of the following:

type BetaTextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations\[\][BetaTextCitationParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_text_citation_param)optional

Accepts one of the following:

type BetaCitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type BetaImageBlockParamRespstruct{…}

SourceBetaImageBlockParamSourceUnionResp

Accepts one of the following:

type BetaBase64ImageSourcestruct{…}

Datastring

MediaTypeBetaBase64ImageSourceMediaType

Accepts one of the following:

const BetaBase64ImageSourceMediaTypeImageJPEGBetaBase64ImageSourceMediaType = "image/jpeg"

const BetaBase64ImageSourceMediaTypeImagePNGBetaBase64ImageSourceMediaType = "image/png"

const BetaBase64ImageSourceMediaTypeImageGIFBetaBase64ImageSourceMediaType = "image/gif"

const BetaBase64ImageSourceMediaTypeImageWebPBetaBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaURLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileImageSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type BetaURLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type BetaFileDocumentSourcestruct{…}

FileIDstring

TypeFile

Accepts one of the following:

const FileFileFile = "file"

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

Citations[BetaCitationsConfigParamResp](https://platform.claude.com/docs/en/api/beta#beta_citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

RetrievedAtstringoptional

ISO 8601 timestamp when the content was retrieved

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchToolResultErrorBlockParamRespstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchToolResultErrorCodestring

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

type BetaWebSearchResultBlockstruct{…}

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

type BetaWebSearchResultBlockParamRespstruct{…}

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type BetaWebSearchTool20250305struct{…}

NameWebSearch

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeWebSearch20250305

Accepts one of the following:

const WebSearch20250305WebSearch20250305WebSearch20250305 = "web\_search\_20250305"

AllowedCallers\[\]stringoptional

Accepts one of the following:

const BetaWebSearchTool20250305AllowedCallerDirectBetaWebSearchTool20250305AllowedCaller = "direct"

const BetaWebSearchTool20250305AllowedCallerCodeExecution20250825BetaWebSearchTool20250305AllowedCaller = "code\_execution\_20250825"

AllowedDomains\[\]stringoptional

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

BlockedDomains\[\]stringoptional

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

DeferLoadingbooloptional

If true, tool will not be included in initial system prompt. Only loaded when returned via tool\_reference from tool search.

MaxUsesint64optional

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

Strictbooloptional

UserLocationBetaWebSearchTool20250305UserLocationoptional

Parameters for the user's location. Used to provide more relevant search results.

TypeApproximate

Accepts one of the following:

const ApproximateApproximateApproximate = "approximate"

Citystringoptional

The city of the user.

maxLength255

minLength1

Countrystringoptional

The two letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the user.

maxLength2

minLength2

Regionstringoptional

The region of the user.

maxLength255

minLength1

Timezonestringoptional

The [IANA timezone](https://nodatime.org/TimeZones) of the user.

maxLength255

minLength1

type BetaWebSearchToolRequestErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebSearchToolResultBlockContentUnioninterface{…}

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

type BetaWebSearchToolResultBlockParamRespstruct{…}

Content[BetaWebSearchToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_param_content)

Accepts one of the following:

\[\][BetaWebSearchResultBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block_param)

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type BetaWebSearchToolRequestErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

CacheControl[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLBetaCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const BetaCacheControlEphemeralTTLTTL5mBetaCacheControlEphemeralTTL = "5m"

const BetaCacheControlEphemeralTTLTTL1hBetaCacheControlEphemeralTTL = "1h"

type BetaWebSearchToolResultBlockParamContentUnionRespinterface{…}

Accepts one of the following:

\[\][BetaWebSearchResultBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block_param)

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type BetaWebSearchToolRequestErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultErrorCodestring

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

#### MessagesBatches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/create)

client.Beta.Messages.Batches.New(ctx, params)(\*[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch), error)

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/retrieve)

client.Beta.Messages.Batches.Get(ctx, messageBatchID, query)(\*[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch), error)

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/beta/messages/batches/list)

client.Beta.Messages.Batches.List(ctx, params)(\*Page\[[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch)\], error)

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/cancel)

client.Beta.Messages.Batches.Cancel(ctx, messageBatchID, body)(\*[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch), error)

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/delete)

client.Beta.Messages.Batches.Delete(ctx, messageBatchID, body)(\*[BetaDeletedMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_deleted_message_batch), error)

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/beta/messages/batches/results)

client.Beta.Messages.Batches.Results(ctx, messageBatchID, query)(\*[BetaMessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/beta#beta_message_batch_individual_response), error)

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

type BetaDeletedMessageBatchstruct{…}

IDstring

ID of the Message Batch.

TypeMessageBatchDeleted

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

const MessageBatchDeletedMessageBatchDeletedMessageBatchDeleted = "message\_batch\_deleted"

type BetaMessageBatchstruct{…}

IDstring

Unique object identifier.

The format and length of IDs may change over time.

ArchivedAtTime

RFC 3339 datetime string representing the time at which the Message Batch was archived and its results became unavailable.

formatdate-time

CancelInitiatedAtTime

RFC 3339 datetime string representing the time at which cancellation was initiated for the Message Batch. Specified only if cancellation was initiated.

formatdate-time

CreatedAtTime

RFC 3339 datetime string representing the time at which the Message Batch was created.

formatdate-time

EndedAtTime

RFC 3339 datetime string representing the time at which processing for the Message Batch ended. Specified only once processing ends.

Processing ends when every request in a Message Batch has either succeeded, errored, canceled, or expired.

formatdate-time

ExpiresAtTime

RFC 3339 datetime string representing the time at which the Message Batch will expire and end processing, which is 24 hours after creation.

formatdate-time

ProcessingStatusBetaMessageBatchProcessingStatus

Processing status of the Message Batch.

Accepts one of the following:

const BetaMessageBatchProcessingStatusInProgressBetaMessageBatchProcessingStatus = "in\_progress"

const BetaMessageBatchProcessingStatusCancelingBetaMessageBatchProcessingStatus = "canceling"

const BetaMessageBatchProcessingStatusEndedBetaMessageBatchProcessingStatus = "ended"

RequestCounts[BetaMessageBatchRequestCounts](https://platform.claude.com/docs/en/api/beta#beta_message_batch_request_counts)

Tallies requests within the Message Batch, categorized by their status.

Requests start as `processing` and move to one of the other statuses only once processing of the entire batch ends. The sum of all values always matches the total number of requests in the batch.

Canceledint64

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

Erroredint64

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

Expiredint64

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

Processingint64

Number of requests in the Message Batch that are processing.

Succeededint64

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

ResultsURLstring

URL to a `.jsonl` file containing the results of the Message Batch requests. Specified only once processing ends.

Results in the file are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.

TypeMessageBatch

Object type.

For Message Batches, this is always `"message_batch"`.

Accepts one of the following:

const MessageBatchMessageBatchMessageBatch = "message\_batch"

type BetaMessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type BetaMessageBatchErroredResultstruct{…}

Error[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

Error[BetaErrorUnion](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

type BetaInvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type BetaAuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BetaBillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type BetaPermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type BetaNotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type BetaRateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type BetaGatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type BetaAPIErrorstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type BetaOverloadedErrorstruct{…}

Messagestring

TypeOverloadedError

Accepts one of the following:

const OverloadedErrorOverloadedErrorOverloadedError = "overloaded\_error"

RequestIDstring

TypeError

Accepts one of the following:

const ErrorErrorError = "error"

TypeErrored

Accepts one of the following:

const ErroredErroredErrored = "errored"

type BetaMessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type BetaMessageBatchIndividualResponsestruct{…}

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

CustomIDstring

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

Result[BetaMessageBatchResultUnion](https://platform.claude.com/docs/en/api/beta#beta_message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

type BetaMessageBatchSucceededResultstruct{…}

Message[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

TypeSucceeded

Accepts one of the following:

const SucceededSucceededSucceeded = "succeeded"

type BetaMessageBatchErroredResultstruct{…}

Error[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

Error[BetaErrorUnion](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

type BetaInvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type BetaAuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BetaBillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type BetaPermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type BetaNotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type BetaRateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type BetaGatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type BetaAPIErrorstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type BetaOverloadedErrorstruct{…}

Messagestring

TypeOverloadedError

Accepts one of the following:

const OverloadedErrorOverloadedErrorOverloadedError = "overloaded\_error"

RequestIDstring

TypeError

Accepts one of the following:

const ErrorErrorError = "error"

TypeErrored

Accepts one of the following:

const ErroredErroredErrored = "errored"

type BetaMessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type BetaMessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type BetaMessageBatchRequestCountsstruct{…}

Canceledint64

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

Erroredint64

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

Expiredint64

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

Processingint64

Number of requests in the Message Batch that are processing.

Succeededint64

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

type BetaMessageBatchResultUnioninterface{…}

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

type BetaMessageBatchSucceededResultstruct{…}

Message[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

TypeSucceeded

Accepts one of the following:

const SucceededSucceededSucceeded = "succeeded"

type BetaMessageBatchErroredResultstruct{…}

Error[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

Error[BetaErrorUnion](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

type BetaInvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type BetaAuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BetaBillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type BetaPermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type BetaNotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type BetaRateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type BetaGatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type BetaAPIErrorstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type BetaOverloadedErrorstruct{…}

Messagestring

TypeOverloadedError

Accepts one of the following:

const OverloadedErrorOverloadedErrorOverloadedError = "overloaded\_error"

RequestIDstring

TypeError

Accepts one of the following:

const ErrorErrorError = "error"

TypeErrored

Accepts one of the following:

const ErroredErroredErrored = "errored"

type BetaMessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type BetaMessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type BetaMessageBatchSucceededResultstruct{…}

Message[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Container[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)

Information about the container used in the request (for the code execution tool)

IDstring

Identifier for the container used in this request

ExpiresAtTime

The time at which the container will expire.

formatdate-time

Skills\[\][BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)

Skills loaded in the container

SkillIDstring

Skill ID

maxLength64

minLength1

TypeBetaSkillType

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

const BetaSkillTypeAnthropicBetaSkillType = "anthropic"

const BetaSkillTypeCustomBetaSkillType = "custom"

Versionstring

Skill version or 'latest' for most recent version

maxLength64

minLength1

Content\[\][BetaContentBlockUnion](https://platform.claude.com/docs/en/api/beta#beta_content_block)

Content generated by the model.

This is an array of content blocks, each of which has a `type` that determines its shape.

Example:

```
[{"type": "text", "text": "Hi, I'm Claude."}]
```

If the request input `messages` ended with an `assistant` turn, then the response `content` will continue directly from that last turn. You can use this to constrain the model's output.

For example, if the input `messages` were:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("}\
]
```

Then the response `content` might be:

```
[{"type": "text", "text": "B)"}]
```

Accepts one of the following:

type BetaTextBlockstruct{…}

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

type BetaThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type BetaRedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type BetaToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CallerBetaToolUseBlockCallerUnionoptional

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

type BetaServerToolUseBlockstruct{…}

IDstring

CallerBetaServerToolUseBlockCallerUnion

Tool invocation directly from the model.

Accepts one of the following:

type BetaDirectCallerstruct{…}

Tool invocation directly from the model.

TypeDirect

Accepts one of the following:

const DirectDirectDirect = "direct"

type BetaServerToolCallerstruct{…}

Tool invocation generated by a server-side tool.

ToolIDstring

TypeCodeExecution20250825

Accepts one of the following:

const CodeExecution20250825CodeExecution20250825CodeExecution20250825 = "code\_execution\_20250825"

Inputmap\[string,any\]

NameBetaServerToolUseBlockName

Accepts one of the following:

const BetaServerToolUseBlockNameWebSearchBetaServerToolUseBlockName = "web\_search"

const BetaServerToolUseBlockNameWebFetchBetaServerToolUseBlockName = "web\_fetch"

const BetaServerToolUseBlockNameCodeExecutionBetaServerToolUseBlockName = "code\_execution"

const BetaServerToolUseBlockNameBashCodeExecutionBetaServerToolUseBlockName = "bash\_code\_execution"

const BetaServerToolUseBlockNameTextEditorCodeExecutionBetaServerToolUseBlockName = "text\_editor\_code\_execution"

const BetaServerToolUseBlockNameToolSearchToolRegexBetaServerToolUseBlockName = "tool\_search\_tool\_regex"

const BetaServerToolUseBlockNameToolSearchToolBm25BetaServerToolUseBlockName = "tool\_search\_tool\_bm25"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type BetaWebSearchToolResultBlockstruct{…}

Content[BetaWebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

type BetaWebSearchToolResultErrorstruct{…}

ErrorCode[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

const BetaWebSearchToolResultErrorCodeInvalidToolInput[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebSearchToolResultErrorCodeUnavailable[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "unavailable"

const BetaWebSearchToolResultErrorCodeMaxUsesExceeded[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebSearchToolResultErrorCodeTooManyRequests[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "too\_many\_requests"

const BetaWebSearchToolResultErrorCodeQueryTooLong[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code) = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type BetaWebSearchToolResultBlockContentArray\[\][BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

type BetaWebFetchToolResultBlockstruct{…}

ContentBetaWebFetchToolResultBlockContentUnion

Accepts one of the following:

type BetaWebFetchToolResultErrorBlockstruct{…}

ErrorCode[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

const BetaWebFetchToolResultErrorCodeInvalidToolInput[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "invalid\_tool\_input"

const BetaWebFetchToolResultErrorCodeURLTooLong[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_too\_long"

const BetaWebFetchToolResultErrorCodeURLNotAllowed[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_allowed"

const BetaWebFetchToolResultErrorCodeURLNotAccessible[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "url\_not\_accessible"

const BetaWebFetchToolResultErrorCodeUnsupportedContentType[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unsupported\_content\_type"

const BetaWebFetchToolResultErrorCodeTooManyRequests[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "too\_many\_requests"

const BetaWebFetchToolResultErrorCodeMaxUsesExceeded[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "max\_uses\_exceeded"

const BetaWebFetchToolResultErrorCodeUnavailable[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code) = "unavailable"

TypeWebFetchToolResultError

Accepts one of the following:

const WebFetchToolResultErrorWebFetchToolResultErrorWebFetchToolResultError = "web\_fetch\_tool\_result\_error"

type BetaWebFetchBlockstruct{…}

Content[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

Citations[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)

Citation configuration for the document

Enabledbool

SourceBetaDocumentBlockSourceUnion

Accepts one of the following:

type BetaBase64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type BetaPlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

Titlestring

The title of the document

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

RetrievedAtstring

ISO 8601 timestamp when the content was retrieved

TypeWebFetchResult

Accepts one of the following:

const WebFetchResultWebFetchResultWebFetchResult = "web\_fetch\_result"

URLstring

Fetched content URL

ToolUseIDstring

TypeWebFetchToolResult

Accepts one of the following:

const WebFetchToolResultWebFetchToolResultWebFetchToolResult = "web\_fetch\_tool\_result"

type BetaCodeExecutionToolResultBlockstruct{…}

Content[BetaCodeExecutionToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

type BetaCodeExecutionToolResultErrorstruct{…}

ErrorCode[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

const BetaCodeExecutionToolResultErrorCodeInvalidToolInput[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "invalid\_tool\_input"

const BetaCodeExecutionToolResultErrorCodeUnavailable[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "unavailable"

const BetaCodeExecutionToolResultErrorCodeTooManyRequests[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "too\_many\_requests"

const BetaCodeExecutionToolResultErrorCodeExecutionTimeExceeded[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code) = "execution\_time\_exceeded"

TypeCodeExecutionToolResultError

Accepts one of the following:

const CodeExecutionToolResultErrorCodeExecutionToolResultErrorCodeExecutionToolResultError = "code\_execution\_tool\_result\_error"

type BetaCodeExecutionResultBlockstruct{…}

Content\[\][BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)

FileIDstring

TypeCodeExecutionOutput

Accepts one of the following:

const CodeExecutionOutputCodeExecutionOutputCodeExecutionOutput = "code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeCodeExecutionResult

Accepts one of the following:

const CodeExecutionResultCodeExecutionResultCodeExecutionResult = "code\_execution\_result"

ToolUseIDstring

TypeCodeExecutionToolResult

Accepts one of the following:

const CodeExecutionToolResultCodeExecutionToolResultCodeExecutionToolResult = "code\_execution\_tool\_result"

type BetaBashCodeExecutionToolResultBlockstruct{…}

ContentBetaBashCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaBashCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaBashCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaBashCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaBashCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaBashCodeExecutionToolResultErrorErrorCodeUnavailableBetaBashCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaBashCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaBashCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaBashCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaBashCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaBashCodeExecutionToolResultErrorErrorCodeOutputFileTooLargeBetaBashCodeExecutionToolResultErrorErrorCode = "output\_file\_too\_large"

TypeBashCodeExecutionToolResultError

Accepts one of the following:

const BashCodeExecutionToolResultErrorBashCodeExecutionToolResultErrorBashCodeExecutionToolResultError = "bash\_code\_execution\_tool\_result\_error"

type BetaBashCodeExecutionResultBlockstruct{…}

Content\[\][BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)

FileIDstring

TypeBashCodeExecutionOutput

Accepts one of the following:

const BashCodeExecutionOutputBashCodeExecutionOutputBashCodeExecutionOutput = "bash\_code\_execution\_output"

ReturnCodeint64

Stderrstring

Stdoutstring

TypeBashCodeExecutionResult

Accepts one of the following:

const BashCodeExecutionResultBashCodeExecutionResultBashCodeExecutionResult = "bash\_code\_execution\_result"

ToolUseIDstring

TypeBashCodeExecutionToolResult

Accepts one of the following:

const BashCodeExecutionToolResultBashCodeExecutionToolResultBashCodeExecutionToolResult = "bash\_code\_execution\_tool\_result"

type BetaTextEditorCodeExecutionToolResultBlockstruct{…}

ContentBetaTextEditorCodeExecutionToolResultBlockContentUnion

Accepts one of the following:

type BetaTextEditorCodeExecutionToolResultErrorstruct{…}

ErrorCodeBetaTextEditorCodeExecutionToolResultErrorErrorCode

Accepts one of the following:

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeInvalidToolInputBetaTextEditorCodeExecutionToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeUnavailableBetaTextEditorCodeExecutionToolResultErrorErrorCode = "unavailable"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeTooManyRequestsBetaTextEditorCodeExecutionToolResultErrorErrorCode = "too\_many\_requests"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeExecutionTimeExceededBetaTextEditorCodeExecutionToolResultErrorErrorCode = "execution\_time\_exceeded"

const BetaTextEditorCodeExecutionToolResultErrorErrorCodeFileNotFoundBetaTextEditorCodeExecutionToolResultErrorErrorCode = "file\_not\_found"

ErrorMessagestring

TypeTextEditorCodeExecutionToolResultError

Accepts one of the following:

const TextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultErrorTextEditorCodeExecutionToolResultError = "text\_editor\_code\_execution\_tool\_result\_error"

type BetaTextEditorCodeExecutionViewResultBlockstruct{…}

Contentstring

FileTypeBetaTextEditorCodeExecutionViewResultBlockFileType

Accepts one of the following:

const BetaTextEditorCodeExecutionViewResultBlockFileTypeTextBetaTextEditorCodeExecutionViewResultBlockFileType = "text"

const BetaTextEditorCodeExecutionViewResultBlockFileTypeImageBetaTextEditorCodeExecutionViewResultBlockFileType = "image"

const BetaTextEditorCodeExecutionViewResultBlockFileTypePDFBetaTextEditorCodeExecutionViewResultBlockFileType = "pdf"

NumLinesint64

StartLineint64

TotalLinesint64

TypeTextEditorCodeExecutionViewResult

Accepts one of the following:

const TextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResultTextEditorCodeExecutionViewResult = "text\_editor\_code\_execution\_view\_result"

type BetaTextEditorCodeExecutionCreateResultBlockstruct{…}

IsFileUpdatebool

TypeTextEditorCodeExecutionCreateResult

Accepts one of the following:

const TextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResultTextEditorCodeExecutionCreateResult = "text\_editor\_code\_execution\_create\_result"

type BetaTextEditorCodeExecutionStrReplaceResultBlockstruct{…}

Lines\[\]string

NewLinesint64

NewStartint64

OldLinesint64

OldStartint64

TypeTextEditorCodeExecutionStrReplaceResult

Accepts one of the following:

const TextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResultTextEditorCodeExecutionStrReplaceResult = "text\_editor\_code\_execution\_str\_replace\_result"

ToolUseIDstring

TypeTextEditorCodeExecutionToolResult

Accepts one of the following:

const TextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResultTextEditorCodeExecutionToolResult = "text\_editor\_code\_execution\_tool\_result"

type BetaToolSearchToolResultBlockstruct{…}

ContentBetaToolSearchToolResultBlockContentUnion

Accepts one of the following:

type BetaToolSearchToolResultErrorstruct{…}

ErrorCodeBetaToolSearchToolResultErrorErrorCode

Accepts one of the following:

const BetaToolSearchToolResultErrorErrorCodeInvalidToolInputBetaToolSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const BetaToolSearchToolResultErrorErrorCodeUnavailableBetaToolSearchToolResultErrorErrorCode = "unavailable"

const BetaToolSearchToolResultErrorErrorCodeTooManyRequestsBetaToolSearchToolResultErrorErrorCode = "too\_many\_requests"

const BetaToolSearchToolResultErrorErrorCodeExecutionTimeExceededBetaToolSearchToolResultErrorErrorCode = "execution\_time\_exceeded"

ErrorMessagestring

TypeToolSearchToolResultError

Accepts one of the following:

const ToolSearchToolResultErrorToolSearchToolResultErrorToolSearchToolResultError = "tool\_search\_tool\_result\_error"

type BetaToolSearchToolSearchResultBlockstruct{…}

ToolReferences\[\][BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)

ToolNamestring

TypeToolReference

Accepts one of the following:

const ToolReferenceToolReferenceToolReference = "tool\_reference"

TypeToolSearchToolSearchResult

Accepts one of the following:

const ToolSearchToolSearchResultToolSearchToolSearchResultToolSearchToolSearchResult = "tool\_search\_tool\_search\_result"

ToolUseIDstring

TypeToolSearchToolResult

Accepts one of the following:

const ToolSearchToolResultToolSearchToolResultToolSearchToolResult = "tool\_search\_tool\_result"

type BetaMCPToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

The name of the MCP tool

ServerNamestring

The name of the MCP server

TypeMCPToolUse

Accepts one of the following:

const MCPToolUseMCPToolUseMCPToolUse = "mcp\_tool\_use"

type BetaMCPToolResultBlockstruct{…}

ContentBetaMCPToolResultBlockContentUnion

Accepts one of the following:

string

type BetaMCPToolResultBlockContentBetaMCPToolResultBlockContent\[\][BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)

Citations\[\][BetaTextCitationUnion](https://platform.claude.com/docs/en/api/beta#beta_text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type BetaCitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type BetaCitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type BetaCitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type BetaCitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type BetaCitationSearchResultLocationstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

IsErrorbool

ToolUseIDstring

TypeMCPToolResult

Accepts one of the following:

const MCPToolResultMCPToolResultMCPToolResult = "mcp\_tool\_result"

type BetaContainerUploadBlockstruct{…}

Response model for a file uploaded to the container.

FileIDstring

TypeContainerUpload

Accepts one of the following:

const ContainerUploadContainerUploadContainerUpload = "container\_upload"

ContextManagement[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)

Context management response.

Information about context management strategies applied during the request.

AppliedEdits\[\]BetaContextManagementResponseAppliedEditUnion

List of context management edits that were applied.

Accepts one of the following:

type BetaClearToolUses20250919EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedToolUsesint64

Number of tool uses that were cleared.

minimum0

TypeClearToolUses20250919

The type of context management edit applied.

Accepts one of the following:

const ClearToolUses20250919ClearToolUses20250919ClearToolUses20250919 = "clear\_tool\_uses\_20250919"

type BetaClearThinking20251015EditResponsestruct{…}

ClearedInputTokensint64

Number of input tokens cleared by this edit.

minimum0

ClearedThinkingTurnsint64

Number of thinking turns that were cleared.

minimum0

TypeClearThinking20251015

The type of context management edit applied.

Accepts one of the following:

const ClearThinking20251015ClearThinking20251015ClearThinking20251015 = "clear\_thinking\_20251015"

ModelModel

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

type Modelstring

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

const ModelClaudeOpus4\_5\_20251101Model = "claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

const ModelClaudeOpus4\_5Model = "claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

const ModelClaude3\_7SonnetLatestModel = "claude-3-7-sonnet-latest"

High-performance model with early extended thinking

const ModelClaude3\_7Sonnet20250219Model = "claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

const ModelClaude3\_5HaikuLatestModel = "claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

const ModelClaude3\_5Haiku20241022Model = "claude-3-5-haiku-20241022"

Our fastest model

const ModelClaudeHaiku4\_5Model = "claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeHaiku4\_5\_20251001Model = "claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

const ModelClaudeSonnet4\_20250514Model = "claude-sonnet-4-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_0Model = "claude-sonnet-4-0"

High-performance model with extended thinking

const ModelClaude4Sonnet20250514Model = "claude-4-sonnet-20250514"

High-performance model with extended thinking

const ModelClaudeSonnet4\_5Model = "claude-sonnet-4-5"

Our best model for real-world agents and coding

const ModelClaudeSonnet4\_5\_20250929Model = "claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

const ModelClaudeOpus4\_0Model = "claude-opus-4-0"

Our most capable model

const ModelClaudeOpus4\_20250514Model = "claude-opus-4-20250514"

Our most capable model

const ModelClaude4Opus20250514Model = "claude-4-opus-20250514"

Our most capable model

const ModelClaudeOpus4\_1\_20250805Model = "claude-opus-4-1-20250805"

Our most capable model

const ModelClaude3OpusLatestModel = "claude-3-opus-latest"

Excels at writing and complex tasks

const ModelClaude\_3\_Opus\_20240229Model = "claude-3-opus-20240229"

Excels at writing and complex tasks

const ModelClaude\_3\_Haiku\_20240307Model = "claude-3-haiku-20240307"

Our previous most fast and cost-effective

string

RoleAssistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

const AssistantAssistantAssistant = "assistant"

StopReason[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

The reason that we stopped.

This may be one the following values:

- `"end_turn"`: the model reached a natural stopping point
- `"max_tokens"`: we exceeded the requested `max_tokens` or the model's maximum
- `"stop_sequence"`: one of your provided custom `stop_sequences` was generated
- `"tool_use"`: the model invoked one or more tools
- `"pause_turn"`: we paused a long-running turn. You may provide the response back as-is in a subsequent request to let the model continue.
- `"refusal"`: when streaming classifiers intervene to handle potential policy violations

In non-streaming mode this value is always non-null. In streaming mode, it is null in the `message_start` event and non-null otherwise.

Accepts one of the following:

const BetaStopReasonEndTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "end\_turn"

const BetaStopReasonMaxTokens[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "max\_tokens"

const BetaStopReasonStopSequence[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "stop\_sequence"

const BetaStopReasonToolUse[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "tool\_use"

const BetaStopReasonPauseTurn[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "pause\_turn"

const BetaStopReasonRefusal[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "refusal"

const BetaStopReasonModelContextWindowExceeded[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason) = "model\_context\_window\_exceeded"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)

Breakdown of cached tokens by TTL

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

CacheCreationInputTokensint64

The number of input tokens used to create the cache entry.

minimum0

CacheReadInputTokensint64

The number of input tokens read from the cache.

minimum0

InputTokensint64

The number of input tokens which were used.

minimum0

OutputTokensint64

The number of output tokens which were used.

minimum0

ServerToolUse[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)

The number of server tool requests.

WebFetchRequestsint64

The number of web fetch tool requests.

minimum0

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierBetaUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const BetaUsageServiceTierStandardBetaUsageServiceTier = "standard"

const BetaUsageServiceTierPriorityBetaUsageServiceTier = "priority"

const BetaUsageServiceTierBatchBetaUsageServiceTier = "batch"

TypeSucceeded

Accepts one of the following:

const SucceededSucceededSucceeded = "succeeded"

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