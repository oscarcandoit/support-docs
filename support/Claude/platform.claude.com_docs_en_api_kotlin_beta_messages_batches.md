---
url: "https://platform.claude.com/docs/en/api/kotlin/beta/messages/batches"
title: "Batches - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fkotlin%2Fbeta%2Fmessages%2Fbatches)

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

Kotlin

# Batches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/create)

beta().messages().batches().create(BatchCreateParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch)

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/retrieve)

beta().messages().batches().retrieve(BatchRetrieveParamsparams=BatchRetrieveParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch)

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/beta/messages/batches/list)

beta().messages().batches().list(BatchListParamsparams=BatchListParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):BatchListPage

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/cancel)

beta().messages().batches().cancel(BatchCancelParamsparams=BatchCancelParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch)

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/delete)

beta().messages().batches().delete(BatchDeleteParamsparams=BatchDeleteParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[BetaDeletedMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_deleted_message_batch)

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/beta/messages/batches/results)

beta().messages().batches().resultsStreaming(BatchResultsParamsparams=BatchResultsParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/beta#beta_message_batch_individual_response)

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

classBetaDeletedMessageBatch:

id:String

ID of the Message Batch.

type:JsonValue;"message\_batch\_deleted"constant"message\_batch\_deleted"constant

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

MESSAGE\_BATCH\_DELETED("message\_batch\_deleted")

classBetaMessageBatch:

id:String

Unique object identifier.

The format and length of IDs may change over time.

archivedAt:Optional<LocalDateTime>

RFC 3339 datetime string representing the time at which the Message Batch was archived and its results became unavailable.

formatdate-time

cancelInitiatedAt:Optional<LocalDateTime>

RFC 3339 datetime string representing the time at which cancellation was initiated for the Message Batch. Specified only if cancellation was initiated.

formatdate-time

createdAt:LocalDateTime

RFC 3339 datetime string representing the time at which the Message Batch was created.

formatdate-time

endedAt:Optional<LocalDateTime>

RFC 3339 datetime string representing the time at which processing for the Message Batch ended. Specified only once processing ends.

Processing ends when every request in a Message Batch has either succeeded, errored, canceled, or expired.

formatdate-time

expiresAt:LocalDateTime

RFC 3339 datetime string representing the time at which the Message Batch will expire and end processing, which is 24 hours after creation.

formatdate-time

processingStatus:ProcessingStatus

Processing status of the Message Batch.

Accepts one of the following:

IN\_PROGRESS("in\_progress")

CANCELING("canceling")

ENDED("ended")

requestCounts:[BetaMessageBatchRequestCounts](https://platform.claude.com/docs/en/api/beta#beta_message_batch_request_counts)

Tallies requests within the Message Batch, categorized by their status.

Requests start as `processing` and move to one of the other statuses only once processing of the entire batch ends. The sum of all values always matches the total number of requests in the batch.

canceled:Long

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

errored:Long

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

expired:Long

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

processing:Long

Number of requests in the Message Batch that are processing.

succeeded:Long

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

resultsUrl:Optional<String>

URL to a `.jsonl` file containing the results of the Message Batch requests. Specified only once processing ends.

Results in the file are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.

type:JsonValue;"message\_batch"constant"message\_batch"constant

Object type.

For Message Batches, this is always `"message_batch"`.

Accepts one of the following:

MESSAGE\_BATCH("message\_batch")

classBetaMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classBetaMessageBatchErroredResult:

error:[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

error:[BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

classBetaInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classBetaAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBetaBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classBetaPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classBetaNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classBetaRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classBetaGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classBetaApiError:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classBetaOverloadedError:

message:String

type:JsonValue;"overloaded\_error"constant"overloaded\_error"constant

Accepts one of the following:

OVERLOADED\_ERROR("overloaded\_error")

requestId:Optional<String>

type:JsonValue;"error"constant"error"constant

Accepts one of the following:

ERROR("error")

type:JsonValue;"errored"constant"errored"constant

Accepts one of the following:

ERRORED("errored")

classBetaMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classBetaMessageBatchIndividualResponse:

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

customId:String

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

result:[BetaMessageBatchResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

classBetaMessageBatchSucceededResult:

message:[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

container:Optional<[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)>

Information about the container used in the request (for the code execution tool)

id:String

Identifier for the container used in this request

expiresAt:LocalDateTime

The time at which the container will expire.

formatdate-time

skills:Optional<List<[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)>>

Skills loaded in the container

skillId:String

Skill ID

maxLength64

minLength1

type:Type

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

ANTHROPIC("anthropic")

CUSTOM("custom")

version:String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content:List<[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)>

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

classBetaTextBlock:

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classBetaThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classBetaRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classBetaToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

caller:Optional<Caller>

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

classBetaServerToolUseBlock:

id:String

caller:Caller

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

input:Input

name:Name

Accepts one of the following:

WEB\_SEARCH("web\_search")

WEB\_FETCH("web\_fetch")

CODE\_EXECUTION("code\_execution")

BASH\_CODE\_EXECUTION("bash\_code\_execution")

TEXT\_EDITOR\_CODE\_EXECUTION("text\_editor\_code\_execution")

TOOL\_SEARCH\_TOOL\_REGEX("tool\_search\_tool\_regex")

TOOL\_SEARCH\_TOOL\_BM25("tool\_search\_tool\_bm25")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classBetaWebSearchToolResultBlock:

content:[BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

classBetaWebSearchToolResultError:

errorCode:[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)>

encryptedContent:String

pageAge:Optional<String>

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

classBetaWebFetchToolResultBlock:

content:Content

Accepts one of the following:

classBetaWebFetchToolResultErrorBlock:

errorCode:[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

URL\_TOO\_LONG("url\_too\_long")

URL\_NOT\_ALLOWED("url\_not\_allowed")

URL\_NOT\_ACCESSIBLE("url\_not\_accessible")

UNSUPPORTED\_CONTENT\_TYPE("unsupported\_content\_type")

TOO\_MANY\_REQUESTS("too\_many\_requests")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

UNAVAILABLE("unavailable")

type:JsonValue;"web\_fetch\_tool\_result\_error"constant"web\_fetch\_tool\_result\_error"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT\_ERROR("web\_fetch\_tool\_result\_error")

classBetaWebFetchBlock:

content:[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

citations:Optional<[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)>

Citation configuration for the document

enabled:Boolean

source:Source

Accepts one of the following:

classBetaBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classBetaPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

title:Optional<String>

The title of the document

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

retrievedAt:Optional<String>

ISO 8601 timestamp when the content was retrieved

type:JsonValue;"web\_fetch\_result"constant"web\_fetch\_result"constant

Accepts one of the following:

WEB\_FETCH\_RESULT("web\_fetch\_result")

url:String

Fetched content URL

toolUseId:String

type:JsonValue;"web\_fetch\_tool\_result"constant"web\_fetch\_tool\_result"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT("web\_fetch\_tool\_result")

classBetaCodeExecutionToolResultBlock:

content:[BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

classBetaCodeExecutionToolResultError:

errorCode:[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

type:JsonValue;"code\_execution\_tool\_result\_error"constant"code\_execution\_tool\_result\_error"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("code\_execution\_tool\_result\_error")

classBetaCodeExecutionResultBlock:

content:List<[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)>

fileId:String

type:JsonValue;"code\_execution\_output"constant"code\_execution\_output"constant

Accepts one of the following:

CODE\_EXECUTION\_OUTPUT("code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"code\_execution\_result"constant"code\_execution\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_RESULT("code\_execution\_result")

toolUseId:String

type:JsonValue;"code\_execution\_tool\_result"constant"code\_execution\_tool\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT("code\_execution\_tool\_result")

classBetaBashCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaBashCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

OUTPUT\_FILE\_TOO\_LARGE("output\_file\_too\_large")

type:JsonValue;"bash\_code\_execution\_tool\_result\_error"constant"bash\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("bash\_code\_execution\_tool\_result\_error")

classBetaBashCodeExecutionResultBlock:

content:List<[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)>

fileId:String

type:JsonValue;"bash\_code\_execution\_output"constant"bash\_code\_execution\_output"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_OUTPUT("bash\_code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"bash\_code\_execution\_result"constant"bash\_code\_execution\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_RESULT("bash\_code\_execution\_result")

toolUseId:String

type:JsonValue;"bash\_code\_execution\_tool\_result"constant"bash\_code\_execution\_tool\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT("bash\_code\_execution\_tool\_result")

classBetaTextEditorCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaTextEditorCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

FILE\_NOT\_FOUND("file\_not\_found")

errorMessage:Optional<String>

type:JsonValue;"text\_editor\_code\_execution\_tool\_result\_error"constant"text\_editor\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("text\_editor\_code\_execution\_tool\_result\_error")

classBetaTextEditorCodeExecutionViewResultBlock:

content:String

fileType:FileType

Accepts one of the following:

TEXT("text")

IMAGE("image")

PDF("pdf")

numLines:Optional<Long>

startLine:Optional<Long>

totalLines:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_view\_result"constant"text\_editor\_code\_execution\_view\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_VIEW\_RESULT("text\_editor\_code\_execution\_view\_result")

classBetaTextEditorCodeExecutionCreateResultBlock:

isFileUpdate:Boolean

type:JsonValue;"text\_editor\_code\_execution\_create\_result"constant"text\_editor\_code\_execution\_create\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_CREATE\_RESULT("text\_editor\_code\_execution\_create\_result")

classBetaTextEditorCodeExecutionStrReplaceResultBlock:

lines:Optional<List<String>>

newLines:Optional<Long>

newStart:Optional<Long>

oldLines:Optional<Long>

oldStart:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_str\_replace\_result"constant"text\_editor\_code\_execution\_str\_replace\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_STR\_REPLACE\_RESULT("text\_editor\_code\_execution\_str\_replace\_result")

toolUseId:String

type:JsonValue;"text\_editor\_code\_execution\_tool\_result"constant"text\_editor\_code\_execution\_tool\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT("text\_editor\_code\_execution\_tool\_result")

classBetaToolSearchToolResultBlock:

content:Content

Accepts one of the following:

classBetaToolSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

errorMessage:Optional<String>

type:JsonValue;"tool\_search\_tool\_result\_error"constant"tool\_search\_tool\_result\_error"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT\_ERROR("tool\_search\_tool\_result\_error")

classBetaToolSearchToolSearchResultBlock:

toolReferences:List<[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)>

toolName:String

type:JsonValue;"tool\_reference"constant"tool\_reference"constant

Accepts one of the following:

TOOL\_REFERENCE("tool\_reference")

type:JsonValue;"tool\_search\_tool\_search\_result"constant"tool\_search\_tool\_search\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_SEARCH\_RESULT("tool\_search\_tool\_search\_result")

toolUseId:String

type:JsonValue;"tool\_search\_tool\_result"constant"tool\_search\_tool\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT("tool\_search\_tool\_result")

classBetaMcpToolUseBlock:

id:String

input:Input

name:String

The name of the MCP tool

serverName:String

The name of the MCP server

type:JsonValue;"mcp\_tool\_use"constant"mcp\_tool\_use"constant

Accepts one of the following:

MCP\_TOOL\_USE("mcp\_tool\_use")

classBetaMcpToolResultBlock:

content:Content

Accepts one of the following:

String

List<[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)>

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

isError:Boolean

toolUseId:String

type:JsonValue;"mcp\_tool\_result"constant"mcp\_tool\_result"constant

Accepts one of the following:

MCP\_TOOL\_RESULT("mcp\_tool\_result")

classBetaContainerUploadBlock:

Response model for a file uploaded to the container.

fileId:String

type:JsonValue;"container\_upload"constant"container\_upload"constant

Accepts one of the following:

CONTAINER\_UPLOAD("container\_upload")

contextManagement:Optional<[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)>

Context management response.

Information about context management strategies applied during the request.

appliedEdits:List<AppliedEdit>

List of context management edits that were applied.

Accepts one of the following:

classBetaClearToolUses20250919EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedToolUses:Long

Number of tool uses that were cleared.

minimum0

type:JsonValue;"clear\_tool\_uses\_20250919"constant"clear\_tool\_uses\_20250919"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_TOOL\_USES\_20250919("clear\_tool\_uses\_20250919")

classBetaClearThinking20251015EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedThinkingTurns:Long

Number of thinking turns that were cleared.

minimum0

type:JsonValue;"clear\_thinking\_20251015"constant"clear\_thinking\_20251015"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_THINKING\_20251015("clear\_thinking\_20251015")

model:Model

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

CLAUDE\_OPUS\_4\_5\_20251101("claude-opus-4-5-20251101")

Premium model combining maximum intelligence with practical performance

CLAUDE\_OPUS\_4\_5("claude-opus-4-5")

Premium model combining maximum intelligence with practical performance

CLAUDE\_3\_7\_SONNET\_LATEST("claude-3-7-sonnet-latest")

High-performance model with early extended thinking

CLAUDE\_3\_7\_SONNET\_20250219("claude-3-7-sonnet-20250219")

High-performance model with early extended thinking

CLAUDE\_3\_5\_HAIKU\_LATEST("claude-3-5-haiku-latest")

Fastest and most compact model for near-instant responsiveness

CLAUDE\_3\_5\_HAIKU\_20241022("claude-3-5-haiku-20241022")

Our fastest model

CLAUDE\_HAIKU\_4\_5("claude-haiku-4-5")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_HAIKU\_4\_5\_20251001("claude-haiku-4-5-20251001")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_SONNET\_4\_20250514("claude-sonnet-4-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_0("claude-sonnet-4-0")

High-performance model with extended thinking

CLAUDE\_4\_SONNET\_20250514("claude-4-sonnet-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_5("claude-sonnet-4-5")

Our best model for real-world agents and coding

CLAUDE\_SONNET\_4\_5\_20250929("claude-sonnet-4-5-20250929")

Our best model for real-world agents and coding

CLAUDE\_OPUS\_4\_0("claude-opus-4-0")

Our most capable model

CLAUDE\_OPUS\_4\_20250514("claude-opus-4-20250514")

Our most capable model

CLAUDE\_4\_OPUS\_20250514("claude-4-opus-20250514")

Our most capable model

CLAUDE\_OPUS\_4\_1\_20250805("claude-opus-4-1-20250805")

Our most capable model

CLAUDE\_3\_OPUS\_LATEST("claude-3-opus-latest")

Excels at writing and complex tasks

CLAUDE\_3\_OPUS\_20240229("claude-3-opus-20240229")

Excels at writing and complex tasks

CLAUDE\_3\_HAIKU\_20240307("claude-3-haiku-20240307")

Our previous most fast and cost-effective

role:JsonValue;"assistant"constant"assistant"constant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

ASSISTANT("assistant")

stopReason:Optional<[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)>

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

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

MODEL\_CONTEXT\_WINDOW\_EXCEEDED("model\_context\_window\_exceeded")

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)>

Breakdown of cached tokens by TTL

ephemeral1hInputTokens:Long

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral5mInputTokens:Long

The number of input tokens used to create the 5 minute cache entry.

minimum0

cacheCreationInputTokens:Optional<Long>

The number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The number of input tokens read from the cache.

minimum0

inputTokens:Long

The number of input tokens which were used.

minimum0

outputTokens:Long

The number of output tokens which were used.

minimum0

serverToolUse:Optional<[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)>

The number of server tool requests.

webFetchRequests:Long

The number of web fetch tool requests.

minimum0

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

type:JsonValue;"succeeded"constant"succeeded"constant

Accepts one of the following:

SUCCEEDED("succeeded")

classBetaMessageBatchErroredResult:

error:[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

error:[BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

classBetaInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classBetaAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBetaBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classBetaPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classBetaNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classBetaRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classBetaGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classBetaApiError:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classBetaOverloadedError:

message:String

type:JsonValue;"overloaded\_error"constant"overloaded\_error"constant

Accepts one of the following:

OVERLOADED\_ERROR("overloaded\_error")

requestId:Optional<String>

type:JsonValue;"error"constant"error"constant

Accepts one of the following:

ERROR("error")

type:JsonValue;"errored"constant"errored"constant

Accepts one of the following:

ERRORED("errored")

classBetaMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classBetaMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classBetaMessageBatchRequestCounts:

canceled:Long

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

errored:Long

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

expired:Long

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

processing:Long

Number of requests in the Message Batch that are processing.

succeeded:Long

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

classBetaMessageBatchResult:A class that can be one of several variants.union

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

classBetaMessageBatchSucceededResult:

message:[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

container:Optional<[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)>

Information about the container used in the request (for the code execution tool)

id:String

Identifier for the container used in this request

expiresAt:LocalDateTime

The time at which the container will expire.

formatdate-time

skills:Optional<List<[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)>>

Skills loaded in the container

skillId:String

Skill ID

maxLength64

minLength1

type:Type

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

ANTHROPIC("anthropic")

CUSTOM("custom")

version:String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content:List<[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)>

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

classBetaTextBlock:

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classBetaThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classBetaRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classBetaToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

caller:Optional<Caller>

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

classBetaServerToolUseBlock:

id:String

caller:Caller

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

input:Input

name:Name

Accepts one of the following:

WEB\_SEARCH("web\_search")

WEB\_FETCH("web\_fetch")

CODE\_EXECUTION("code\_execution")

BASH\_CODE\_EXECUTION("bash\_code\_execution")

TEXT\_EDITOR\_CODE\_EXECUTION("text\_editor\_code\_execution")

TOOL\_SEARCH\_TOOL\_REGEX("tool\_search\_tool\_regex")

TOOL\_SEARCH\_TOOL\_BM25("tool\_search\_tool\_bm25")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classBetaWebSearchToolResultBlock:

content:[BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

classBetaWebSearchToolResultError:

errorCode:[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)>

encryptedContent:String

pageAge:Optional<String>

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

classBetaWebFetchToolResultBlock:

content:Content

Accepts one of the following:

classBetaWebFetchToolResultErrorBlock:

errorCode:[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

URL\_TOO\_LONG("url\_too\_long")

URL\_NOT\_ALLOWED("url\_not\_allowed")

URL\_NOT\_ACCESSIBLE("url\_not\_accessible")

UNSUPPORTED\_CONTENT\_TYPE("unsupported\_content\_type")

TOO\_MANY\_REQUESTS("too\_many\_requests")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

UNAVAILABLE("unavailable")

type:JsonValue;"web\_fetch\_tool\_result\_error"constant"web\_fetch\_tool\_result\_error"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT\_ERROR("web\_fetch\_tool\_result\_error")

classBetaWebFetchBlock:

content:[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

citations:Optional<[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)>

Citation configuration for the document

enabled:Boolean

source:Source

Accepts one of the following:

classBetaBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classBetaPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

title:Optional<String>

The title of the document

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

retrievedAt:Optional<String>

ISO 8601 timestamp when the content was retrieved

type:JsonValue;"web\_fetch\_result"constant"web\_fetch\_result"constant

Accepts one of the following:

WEB\_FETCH\_RESULT("web\_fetch\_result")

url:String

Fetched content URL

toolUseId:String

type:JsonValue;"web\_fetch\_tool\_result"constant"web\_fetch\_tool\_result"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT("web\_fetch\_tool\_result")

classBetaCodeExecutionToolResultBlock:

content:[BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

classBetaCodeExecutionToolResultError:

errorCode:[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

type:JsonValue;"code\_execution\_tool\_result\_error"constant"code\_execution\_tool\_result\_error"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("code\_execution\_tool\_result\_error")

classBetaCodeExecutionResultBlock:

content:List<[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)>

fileId:String

type:JsonValue;"code\_execution\_output"constant"code\_execution\_output"constant

Accepts one of the following:

CODE\_EXECUTION\_OUTPUT("code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"code\_execution\_result"constant"code\_execution\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_RESULT("code\_execution\_result")

toolUseId:String

type:JsonValue;"code\_execution\_tool\_result"constant"code\_execution\_tool\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT("code\_execution\_tool\_result")

classBetaBashCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaBashCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

OUTPUT\_FILE\_TOO\_LARGE("output\_file\_too\_large")

type:JsonValue;"bash\_code\_execution\_tool\_result\_error"constant"bash\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("bash\_code\_execution\_tool\_result\_error")

classBetaBashCodeExecutionResultBlock:

content:List<[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)>

fileId:String

type:JsonValue;"bash\_code\_execution\_output"constant"bash\_code\_execution\_output"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_OUTPUT("bash\_code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"bash\_code\_execution\_result"constant"bash\_code\_execution\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_RESULT("bash\_code\_execution\_result")

toolUseId:String

type:JsonValue;"bash\_code\_execution\_tool\_result"constant"bash\_code\_execution\_tool\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT("bash\_code\_execution\_tool\_result")

classBetaTextEditorCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaTextEditorCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

FILE\_NOT\_FOUND("file\_not\_found")

errorMessage:Optional<String>

type:JsonValue;"text\_editor\_code\_execution\_tool\_result\_error"constant"text\_editor\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("text\_editor\_code\_execution\_tool\_result\_error")

classBetaTextEditorCodeExecutionViewResultBlock:

content:String

fileType:FileType

Accepts one of the following:

TEXT("text")

IMAGE("image")

PDF("pdf")

numLines:Optional<Long>

startLine:Optional<Long>

totalLines:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_view\_result"constant"text\_editor\_code\_execution\_view\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_VIEW\_RESULT("text\_editor\_code\_execution\_view\_result")

classBetaTextEditorCodeExecutionCreateResultBlock:

isFileUpdate:Boolean

type:JsonValue;"text\_editor\_code\_execution\_create\_result"constant"text\_editor\_code\_execution\_create\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_CREATE\_RESULT("text\_editor\_code\_execution\_create\_result")

classBetaTextEditorCodeExecutionStrReplaceResultBlock:

lines:Optional<List<String>>

newLines:Optional<Long>

newStart:Optional<Long>

oldLines:Optional<Long>

oldStart:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_str\_replace\_result"constant"text\_editor\_code\_execution\_str\_replace\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_STR\_REPLACE\_RESULT("text\_editor\_code\_execution\_str\_replace\_result")

toolUseId:String

type:JsonValue;"text\_editor\_code\_execution\_tool\_result"constant"text\_editor\_code\_execution\_tool\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT("text\_editor\_code\_execution\_tool\_result")

classBetaToolSearchToolResultBlock:

content:Content

Accepts one of the following:

classBetaToolSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

errorMessage:Optional<String>

type:JsonValue;"tool\_search\_tool\_result\_error"constant"tool\_search\_tool\_result\_error"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT\_ERROR("tool\_search\_tool\_result\_error")

classBetaToolSearchToolSearchResultBlock:

toolReferences:List<[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)>

toolName:String

type:JsonValue;"tool\_reference"constant"tool\_reference"constant

Accepts one of the following:

TOOL\_REFERENCE("tool\_reference")

type:JsonValue;"tool\_search\_tool\_search\_result"constant"tool\_search\_tool\_search\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_SEARCH\_RESULT("tool\_search\_tool\_search\_result")

toolUseId:String

type:JsonValue;"tool\_search\_tool\_result"constant"tool\_search\_tool\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT("tool\_search\_tool\_result")

classBetaMcpToolUseBlock:

id:String

input:Input

name:String

The name of the MCP tool

serverName:String

The name of the MCP server

type:JsonValue;"mcp\_tool\_use"constant"mcp\_tool\_use"constant

Accepts one of the following:

MCP\_TOOL\_USE("mcp\_tool\_use")

classBetaMcpToolResultBlock:

content:Content

Accepts one of the following:

String

List<[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)>

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

isError:Boolean

toolUseId:String

type:JsonValue;"mcp\_tool\_result"constant"mcp\_tool\_result"constant

Accepts one of the following:

MCP\_TOOL\_RESULT("mcp\_tool\_result")

classBetaContainerUploadBlock:

Response model for a file uploaded to the container.

fileId:String

type:JsonValue;"container\_upload"constant"container\_upload"constant

Accepts one of the following:

CONTAINER\_UPLOAD("container\_upload")

contextManagement:Optional<[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)>

Context management response.

Information about context management strategies applied during the request.

appliedEdits:List<AppliedEdit>

List of context management edits that were applied.

Accepts one of the following:

classBetaClearToolUses20250919EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedToolUses:Long

Number of tool uses that were cleared.

minimum0

type:JsonValue;"clear\_tool\_uses\_20250919"constant"clear\_tool\_uses\_20250919"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_TOOL\_USES\_20250919("clear\_tool\_uses\_20250919")

classBetaClearThinking20251015EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedThinkingTurns:Long

Number of thinking turns that were cleared.

minimum0

type:JsonValue;"clear\_thinking\_20251015"constant"clear\_thinking\_20251015"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_THINKING\_20251015("clear\_thinking\_20251015")

model:Model

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

CLAUDE\_OPUS\_4\_5\_20251101("claude-opus-4-5-20251101")

Premium model combining maximum intelligence with practical performance

CLAUDE\_OPUS\_4\_5("claude-opus-4-5")

Premium model combining maximum intelligence with practical performance

CLAUDE\_3\_7\_SONNET\_LATEST("claude-3-7-sonnet-latest")

High-performance model with early extended thinking

CLAUDE\_3\_7\_SONNET\_20250219("claude-3-7-sonnet-20250219")

High-performance model with early extended thinking

CLAUDE\_3\_5\_HAIKU\_LATEST("claude-3-5-haiku-latest")

Fastest and most compact model for near-instant responsiveness

CLAUDE\_3\_5\_HAIKU\_20241022("claude-3-5-haiku-20241022")

Our fastest model

CLAUDE\_HAIKU\_4\_5("claude-haiku-4-5")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_HAIKU\_4\_5\_20251001("claude-haiku-4-5-20251001")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_SONNET\_4\_20250514("claude-sonnet-4-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_0("claude-sonnet-4-0")

High-performance model with extended thinking

CLAUDE\_4\_SONNET\_20250514("claude-4-sonnet-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_5("claude-sonnet-4-5")

Our best model for real-world agents and coding

CLAUDE\_SONNET\_4\_5\_20250929("claude-sonnet-4-5-20250929")

Our best model for real-world agents and coding

CLAUDE\_OPUS\_4\_0("claude-opus-4-0")

Our most capable model

CLAUDE\_OPUS\_4\_20250514("claude-opus-4-20250514")

Our most capable model

CLAUDE\_4\_OPUS\_20250514("claude-4-opus-20250514")

Our most capable model

CLAUDE\_OPUS\_4\_1\_20250805("claude-opus-4-1-20250805")

Our most capable model

CLAUDE\_3\_OPUS\_LATEST("claude-3-opus-latest")

Excels at writing and complex tasks

CLAUDE\_3\_OPUS\_20240229("claude-3-opus-20240229")

Excels at writing and complex tasks

CLAUDE\_3\_HAIKU\_20240307("claude-3-haiku-20240307")

Our previous most fast and cost-effective

role:JsonValue;"assistant"constant"assistant"constant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

ASSISTANT("assistant")

stopReason:Optional<[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)>

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

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

MODEL\_CONTEXT\_WINDOW\_EXCEEDED("model\_context\_window\_exceeded")

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)>

Breakdown of cached tokens by TTL

ephemeral1hInputTokens:Long

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral5mInputTokens:Long

The number of input tokens used to create the 5 minute cache entry.

minimum0

cacheCreationInputTokens:Optional<Long>

The number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The number of input tokens read from the cache.

minimum0

inputTokens:Long

The number of input tokens which were used.

minimum0

outputTokens:Long

The number of output tokens which were used.

minimum0

serverToolUse:Optional<[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)>

The number of server tool requests.

webFetchRequests:Long

The number of web fetch tool requests.

minimum0

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

type:JsonValue;"succeeded"constant"succeeded"constant

Accepts one of the following:

SUCCEEDED("succeeded")

classBetaMessageBatchErroredResult:

error:[BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response)

error:[BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

classBetaInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classBetaAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBetaBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classBetaPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classBetaNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classBetaRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classBetaGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classBetaApiError:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classBetaOverloadedError:

message:String

type:JsonValue;"overloaded\_error"constant"overloaded\_error"constant

Accepts one of the following:

OVERLOADED\_ERROR("overloaded\_error")

requestId:Optional<String>

type:JsonValue;"error"constant"error"constant

Accepts one of the following:

ERROR("error")

type:JsonValue;"errored"constant"errored"constant

Accepts one of the following:

ERRORED("errored")

classBetaMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classBetaMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classBetaMessageBatchSucceededResult:

message:[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

container:Optional<[BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container)>

Information about the container used in the request (for the code execution tool)

id:String

Identifier for the container used in this request

expiresAt:LocalDateTime

The time at which the container will expire.

formatdate-time

skills:Optional<List<[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill)>>

Skills loaded in the container

skillId:String

Skill ID

maxLength64

minLength1

type:Type

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

ANTHROPIC("anthropic")

CUSTOM("custom")

version:String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content:List<[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)>

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

classBetaTextBlock:

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classBetaThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classBetaRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classBetaToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

caller:Optional<Caller>

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

classBetaServerToolUseBlock:

id:String

caller:Caller

Tool invocation directly from the model.

Accepts one of the following:

classBetaDirectCaller:

Tool invocation directly from the model.

type:JsonValue;"direct"constant"direct"constant

Accepts one of the following:

DIRECT("direct")

classBetaServerToolCaller:

Tool invocation generated by a server-side tool.

toolId:String

type:JsonValue;"code\_execution\_20250825"constant"code\_execution\_20250825"constant

Accepts one of the following:

CODE\_EXECUTION\_20250825("code\_execution\_20250825")

input:Input

name:Name

Accepts one of the following:

WEB\_SEARCH("web\_search")

WEB\_FETCH("web\_fetch")

CODE\_EXECUTION("code\_execution")

BASH\_CODE\_EXECUTION("bash\_code\_execution")

TEXT\_EDITOR\_CODE\_EXECUTION("text\_editor\_code\_execution")

TOOL\_SEARCH\_TOOL\_REGEX("tool\_search\_tool\_regex")

TOOL\_SEARCH\_TOOL\_BM25("tool\_search\_tool\_bm25")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classBetaWebSearchToolResultBlock:

content:[BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

classBetaWebSearchToolResultError:

errorCode:[BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block)>

encryptedContent:String

pageAge:Optional<String>

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

classBetaWebFetchToolResultBlock:

content:Content

Accepts one of the following:

classBetaWebFetchToolResultErrorBlock:

errorCode:[BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

URL\_TOO\_LONG("url\_too\_long")

URL\_NOT\_ALLOWED("url\_not\_allowed")

URL\_NOT\_ACCESSIBLE("url\_not\_accessible")

UNSUPPORTED\_CONTENT\_TYPE("unsupported\_content\_type")

TOO\_MANY\_REQUESTS("too\_many\_requests")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

UNAVAILABLE("unavailable")

type:JsonValue;"web\_fetch\_tool\_result\_error"constant"web\_fetch\_tool\_result\_error"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT\_ERROR("web\_fetch\_tool\_result\_error")

classBetaWebFetchBlock:

content:[BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block)

citations:Optional<[BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config)>

Citation configuration for the document

enabled:Boolean

source:Source

Accepts one of the following:

classBetaBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classBetaPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

title:Optional<String>

The title of the document

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

retrievedAt:Optional<String>

ISO 8601 timestamp when the content was retrieved

type:JsonValue;"web\_fetch\_result"constant"web\_fetch\_result"constant

Accepts one of the following:

WEB\_FETCH\_RESULT("web\_fetch\_result")

url:String

Fetched content URL

toolUseId:String

type:JsonValue;"web\_fetch\_tool\_result"constant"web\_fetch\_tool\_result"constant

Accepts one of the following:

WEB\_FETCH\_TOOL\_RESULT("web\_fetch\_tool\_result")

classBetaCodeExecutionToolResultBlock:

content:[BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

classBetaCodeExecutionToolResultError:

errorCode:[BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

type:JsonValue;"code\_execution\_tool\_result\_error"constant"code\_execution\_tool\_result\_error"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("code\_execution\_tool\_result\_error")

classBetaCodeExecutionResultBlock:

content:List<[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block)>

fileId:String

type:JsonValue;"code\_execution\_output"constant"code\_execution\_output"constant

Accepts one of the following:

CODE\_EXECUTION\_OUTPUT("code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"code\_execution\_result"constant"code\_execution\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_RESULT("code\_execution\_result")

toolUseId:String

type:JsonValue;"code\_execution\_tool\_result"constant"code\_execution\_tool\_result"constant

Accepts one of the following:

CODE\_EXECUTION\_TOOL\_RESULT("code\_execution\_tool\_result")

classBetaBashCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaBashCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

OUTPUT\_FILE\_TOO\_LARGE("output\_file\_too\_large")

type:JsonValue;"bash\_code\_execution\_tool\_result\_error"constant"bash\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("bash\_code\_execution\_tool\_result\_error")

classBetaBashCodeExecutionResultBlock:

content:List<[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block)>

fileId:String

type:JsonValue;"bash\_code\_execution\_output"constant"bash\_code\_execution\_output"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_OUTPUT("bash\_code\_execution\_output")

returnCode:Long

stderr:String

stdout:String

type:JsonValue;"bash\_code\_execution\_result"constant"bash\_code\_execution\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_RESULT("bash\_code\_execution\_result")

toolUseId:String

type:JsonValue;"bash\_code\_execution\_tool\_result"constant"bash\_code\_execution\_tool\_result"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_TOOL\_RESULT("bash\_code\_execution\_tool\_result")

classBetaTextEditorCodeExecutionToolResultBlock:

content:Content

Accepts one of the following:

classBetaTextEditorCodeExecutionToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

FILE\_NOT\_FOUND("file\_not\_found")

errorMessage:Optional<String>

type:JsonValue;"text\_editor\_code\_execution\_tool\_result\_error"constant"text\_editor\_code\_execution\_tool\_result\_error"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT\_ERROR("text\_editor\_code\_execution\_tool\_result\_error")

classBetaTextEditorCodeExecutionViewResultBlock:

content:String

fileType:FileType

Accepts one of the following:

TEXT("text")

IMAGE("image")

PDF("pdf")

numLines:Optional<Long>

startLine:Optional<Long>

totalLines:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_view\_result"constant"text\_editor\_code\_execution\_view\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_VIEW\_RESULT("text\_editor\_code\_execution\_view\_result")

classBetaTextEditorCodeExecutionCreateResultBlock:

isFileUpdate:Boolean

type:JsonValue;"text\_editor\_code\_execution\_create\_result"constant"text\_editor\_code\_execution\_create\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_CREATE\_RESULT("text\_editor\_code\_execution\_create\_result")

classBetaTextEditorCodeExecutionStrReplaceResultBlock:

lines:Optional<List<String>>

newLines:Optional<Long>

newStart:Optional<Long>

oldLines:Optional<Long>

oldStart:Optional<Long>

type:JsonValue;"text\_editor\_code\_execution\_str\_replace\_result"constant"text\_editor\_code\_execution\_str\_replace\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_STR\_REPLACE\_RESULT("text\_editor\_code\_execution\_str\_replace\_result")

toolUseId:String

type:JsonValue;"text\_editor\_code\_execution\_tool\_result"constant"text\_editor\_code\_execution\_tool\_result"constant

Accepts one of the following:

TEXT\_EDITOR\_CODE\_EXECUTION\_TOOL\_RESULT("text\_editor\_code\_execution\_tool\_result")

classBetaToolSearchToolResultBlock:

content:Content

Accepts one of the following:

classBetaToolSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

TOO\_MANY\_REQUESTS("too\_many\_requests")

EXECUTION\_TIME\_EXCEEDED("execution\_time\_exceeded")

errorMessage:Optional<String>

type:JsonValue;"tool\_search\_tool\_result\_error"constant"tool\_search\_tool\_result\_error"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT\_ERROR("tool\_search\_tool\_result\_error")

classBetaToolSearchToolSearchResultBlock:

toolReferences:List<[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block)>

toolName:String

type:JsonValue;"tool\_reference"constant"tool\_reference"constant

Accepts one of the following:

TOOL\_REFERENCE("tool\_reference")

type:JsonValue;"tool\_search\_tool\_search\_result"constant"tool\_search\_tool\_search\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_SEARCH\_RESULT("tool\_search\_tool\_search\_result")

toolUseId:String

type:JsonValue;"tool\_search\_tool\_result"constant"tool\_search\_tool\_result"constant

Accepts one of the following:

TOOL\_SEARCH\_TOOL\_RESULT("tool\_search\_tool\_result")

classBetaMcpToolUseBlock:

id:String

input:Input

name:String

The name of the MCP tool

serverName:String

The name of the MCP server

type:JsonValue;"mcp\_tool\_use"constant"mcp\_tool\_use"constant

Accepts one of the following:

MCP\_TOOL\_USE("mcp\_tool\_use")

classBetaMcpToolResultBlock:

content:Content

Accepts one of the following:

String

List<[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block)>

citations:Optional<List<[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classBetaCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classBetaCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classBetaCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classBetaCitationSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

isError:Boolean

toolUseId:String

type:JsonValue;"mcp\_tool\_result"constant"mcp\_tool\_result"constant

Accepts one of the following:

MCP\_TOOL\_RESULT("mcp\_tool\_result")

classBetaContainerUploadBlock:

Response model for a file uploaded to the container.

fileId:String

type:JsonValue;"container\_upload"constant"container\_upload"constant

Accepts one of the following:

CONTAINER\_UPLOAD("container\_upload")

contextManagement:Optional<[BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response)>

Context management response.

Information about context management strategies applied during the request.

appliedEdits:List<AppliedEdit>

List of context management edits that were applied.

Accepts one of the following:

classBetaClearToolUses20250919EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedToolUses:Long

Number of tool uses that were cleared.

minimum0

type:JsonValue;"clear\_tool\_uses\_20250919"constant"clear\_tool\_uses\_20250919"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_TOOL\_USES\_20250919("clear\_tool\_uses\_20250919")

classBetaClearThinking20251015EditResponse:

clearedInputTokens:Long

Number of input tokens cleared by this edit.

minimum0

clearedThinkingTurns:Long

Number of thinking turns that were cleared.

minimum0

type:JsonValue;"clear\_thinking\_20251015"constant"clear\_thinking\_20251015"constant

The type of context management edit applied.

Accepts one of the following:

CLEAR\_THINKING\_20251015("clear\_thinking\_20251015")

model:Model

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

CLAUDE\_OPUS\_4\_5\_20251101("claude-opus-4-5-20251101")

Premium model combining maximum intelligence with practical performance

CLAUDE\_OPUS\_4\_5("claude-opus-4-5")

Premium model combining maximum intelligence with practical performance

CLAUDE\_3\_7\_SONNET\_LATEST("claude-3-7-sonnet-latest")

High-performance model with early extended thinking

CLAUDE\_3\_7\_SONNET\_20250219("claude-3-7-sonnet-20250219")

High-performance model with early extended thinking

CLAUDE\_3\_5\_HAIKU\_LATEST("claude-3-5-haiku-latest")

Fastest and most compact model for near-instant responsiveness

CLAUDE\_3\_5\_HAIKU\_20241022("claude-3-5-haiku-20241022")

Our fastest model

CLAUDE\_HAIKU\_4\_5("claude-haiku-4-5")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_HAIKU\_4\_5\_20251001("claude-haiku-4-5-20251001")

Hybrid model, capable of near-instant responses and extended thinking

CLAUDE\_SONNET\_4\_20250514("claude-sonnet-4-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_0("claude-sonnet-4-0")

High-performance model with extended thinking

CLAUDE\_4\_SONNET\_20250514("claude-4-sonnet-20250514")

High-performance model with extended thinking

CLAUDE\_SONNET\_4\_5("claude-sonnet-4-5")

Our best model for real-world agents and coding

CLAUDE\_SONNET\_4\_5\_20250929("claude-sonnet-4-5-20250929")

Our best model for real-world agents and coding

CLAUDE\_OPUS\_4\_0("claude-opus-4-0")

Our most capable model

CLAUDE\_OPUS\_4\_20250514("claude-opus-4-20250514")

Our most capable model

CLAUDE\_4\_OPUS\_20250514("claude-4-opus-20250514")

Our most capable model

CLAUDE\_OPUS\_4\_1\_20250805("claude-opus-4-1-20250805")

Our most capable model

CLAUDE\_3\_OPUS\_LATEST("claude-3-opus-latest")

Excels at writing and complex tasks

CLAUDE\_3\_OPUS\_20240229("claude-3-opus-20240229")

Excels at writing and complex tasks

CLAUDE\_3\_HAIKU\_20240307("claude-3-haiku-20240307")

Our previous most fast and cost-effective

role:JsonValue;"assistant"constant"assistant"constant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

ASSISTANT("assistant")

stopReason:Optional<[BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)>

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

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

MODEL\_CONTEXT\_WINDOW\_EXCEEDED("model\_context\_window\_exceeded")

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation)>

Breakdown of cached tokens by TTL

ephemeral1hInputTokens:Long

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral5mInputTokens:Long

The number of input tokens used to create the 5 minute cache entry.

minimum0

cacheCreationInputTokens:Optional<Long>

The number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The number of input tokens read from the cache.

minimum0

inputTokens:Long

The number of input tokens which were used.

minimum0

outputTokens:Long

The number of output tokens which were used.

minimum0

serverToolUse:Optional<[BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage)>

The number of server tool requests.

webFetchRequests:Long

The number of web fetch tool requests.

minimum0

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

type:JsonValue;"succeeded"constant"succeeded"constant

Accepts one of the following:

SUCCEEDED("succeeded")

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