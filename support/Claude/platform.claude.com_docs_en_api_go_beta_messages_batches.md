---
url: "https://platform.claude.com/docs/en/api/go/beta/messages/batches"
title: "Batches - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fbeta%2Fmessages%2Fbatches)

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

[Create a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/create) [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/retrieve) [List Message Batches](https://platform.claude.com/docs/en/api/beta/messages/batches/list) [Cancel a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/cancel) [Delete a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/delete) [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/beta/messages/batches/results)

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

Messages

Batches

Copy page

Go

# Batches

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