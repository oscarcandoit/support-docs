---
url: "https://platform.claude.com/docs/en/api/ruby/beta/messages/batches"
title: "Batches - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fruby%2Fbeta%2Fmessages%2Fbatches)

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

# Batches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/create)

beta.messages.batches.create(\*\*kwargs) -\> [BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/retrieve)

beta.messages.batches.retrieve(message\_batch\_id, \*\*kwargs) -\> [BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/beta/messages/batches/list)

beta.messages.batches.list(\*\*kwargs) -\> Page<[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more} >

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/cancel)

beta.messages.batches.cancel(message\_batch\_id, \*\*kwargs) -\> [BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/beta/messages/batches/delete)

beta.messages.batches.delete(message\_batch\_id, \*\*kwargs) -\> [BetaDeletedMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_deleted_message_batch) {id, type}

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/beta/messages/batches/results)

beta.messages.batches.results(message\_batch\_id, \*\*kwargs) -\> [BetaMessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/beta#beta_message_batch_individual_response) {custom\_id, result}

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

class BetaDeletedMessageBatch {id, type}

id: String

ID of the Message Batch.

type: :message\_batch\_deleted

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

:message\_batch\_deleted

class BetaMessageBatch {id, archived\_at, cancel\_initiated\_at, 7 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

archived\_at: Time

RFC 3339 datetime string representing the time at which the Message Batch was archived and its results became unavailable.

formatdate-time

cancel\_initiated\_at: Time

RFC 3339 datetime string representing the time at which cancellation was initiated for the Message Batch. Specified only if cancellation was initiated.

formatdate-time

created\_at: Time

RFC 3339 datetime string representing the time at which the Message Batch was created.

formatdate-time

ended\_at: Time

RFC 3339 datetime string representing the time at which processing for the Message Batch ended. Specified only once processing ends.

Processing ends when every request in a Message Batch has either succeeded, errored, canceled, or expired.

formatdate-time

expires\_at: Time

RFC 3339 datetime string representing the time at which the Message Batch will expire and end processing, which is 24 hours after creation.

formatdate-time

processing\_status: :in\_progress\|:canceling\|:ended

Processing status of the Message Batch.

Accepts one of the following:

:in\_progress

:canceling

:ended

request\_counts: [BetaMessageBatchRequestCounts](https://platform.claude.com/docs/en/api/beta#beta_message_batch_request_counts) {canceled, errored, expired, 2 more}

Tallies requests within the Message Batch, categorized by their status.

Requests start as `processing` and move to one of the other statuses only once processing of the entire batch ends. The sum of all values always matches the total number of requests in the batch.

canceled: Integer

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

errored: Integer

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

expired: Integer

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

processing: Integer

Number of requests in the Message Batch that are processing.

succeeded: Integer

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

results\_url: String

URL to a `.jsonl` file containing the results of the Message Batch requests. Specified only once processing ends.

Results in the file are not guaranteed to be in the same order as requests. Use the `custom_id` field to match results to requests.

type: :message\_batch

Object type.

For Message Batches, this is always `"message_batch"`.

Accepts one of the following:

:message\_batch

class BetaMessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class BetaMessageBatchErroredResult {error, type}

error: [BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response) {error, request\_id, type}

error: [BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

class BetaInvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class BetaAuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BetaBillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class BetaPermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class BetaNotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class BetaRateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class BetaGatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class BetaAPIError {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class BetaOverloadedError {message, type}

message: String

type: :overloaded\_error

Accepts one of the following:

:overloaded\_error

request\_id: String

type: :error

Accepts one of the following:

:error

type: :errored

Accepts one of the following:

:errored

class BetaMessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class BetaMessageBatchIndividualResponse {custom\_id, result}

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

custom\_id: String

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

result: [BetaMessageBatchResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

class BetaMessageBatchSucceededResult {message, type}

message: [BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message) {id, container, content, 7 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

container: [BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container) {id, expires\_at, skills}

Information about the container used in the request (for the code execution tool)

id: String

Identifier for the container used in this request

expires\_at: Time

The time at which the container will expire.

formatdate-time

skills: Array\[[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill) {skill\_id, type, version} \]

Skills loaded in the container

skill\_id: String

Skill ID

maxLength64

minLength1

type: :anthropic\|:custom

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

:anthropic

:custom

version: String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content: Array\[[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)\]

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

class BetaTextBlock {citations, text, type}

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

class BetaThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class BetaRedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class BetaToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

class BetaServerToolUseBlock {id, caller\_, input, 2 more}

id: String

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

input: Hash\[Symbol, untyped\]

name: :web\_search\|:web\_fetch\|:code\_execution\|4 more

Accepts one of the following:

:web\_search

:web\_fetch

:code\_execution

:bash\_code\_execution

:text\_editor\_code\_execution

:tool\_search\_tool\_regex

:tool\_search\_tool\_bm25

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class BetaWebSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

class BetaWebSearchToolResultError {error\_code, type}

error\_code: [BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

encrypted\_content: String

page\_age: String

title: String

type: :web\_search\_result

Accepts one of the following:

:web\_search\_result

url: String

tool\_use\_id: String

type: :web\_search\_tool\_result

Accepts one of the following:

:web\_search\_tool\_result

class BetaWebFetchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebFetchToolResultErrorBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_block) {error\_code, type} \|[BetaWebFetchBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_block) {content, retrieved\_at, type, url}

Accepts one of the following:

class BetaWebFetchToolResultErrorBlock {error\_code, type}

error\_code: [BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:url\_too\_long

:url\_not\_allowed

:url\_not\_accessible

:unsupported\_content\_type

:too\_many\_requests

:max\_uses\_exceeded

:unavailable

type: :web\_fetch\_tool\_result\_error

Accepts one of the following:

:web\_fetch\_tool\_result\_error

class BetaWebFetchBlock {content, retrieved\_at, type, url}

content: [BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block) {citations, source, title, type}

citations: [BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config) {enabled}

Citation configuration for the document

enabled: bool

source: [BetaBase64PDFSource](https://platform.claude.com/docs/en/api/beta#beta_base64_pdf_source) {data, media\_type, type} \|[BetaPlainTextSource](https://platform.claude.com/docs/en/api/beta#beta_plain_text_source) {data, media\_type, type}

Accepts one of the following:

class BetaBase64PDFSource {data, media\_type, type}

data: String

media\_type: :"application/pdf"

Accepts one of the following:

:"application/pdf"

type: :base64

Accepts one of the following:

:base64

class BetaPlainTextSource {data, media\_type, type}

data: String

media\_type: :"text/plain"

Accepts one of the following:

:"text/plain"

type: :text

Accepts one of the following:

:text

title: String

The title of the document

type: :document

Accepts one of the following:

:document

retrieved\_at: String

ISO 8601 timestamp when the content was retrieved

type: :web\_fetch\_result

Accepts one of the following:

:web\_fetch\_result

url: String

Fetched content URL

tool\_use\_id: String

type: :web\_fetch\_tool\_result

Accepts one of the following:

:web\_fetch\_tool\_result

class BetaCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

class BetaCodeExecutionToolResultError {error\_code, type}

error\_code: [BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

type: :code\_execution\_tool\_result\_error

Accepts one of the following:

:code\_execution\_tool\_result\_error

class BetaCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :code\_execution\_output

Accepts one of the following:

:code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :code\_execution\_result

Accepts one of the following:

:code\_execution\_result

tool\_use\_id: String

type: :code\_execution\_tool\_result

Accepts one of the following:

:code\_execution\_tool\_result

class BetaBashCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaBashCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_tool_result_error) {error\_code, type} \|[BetaBashCodeExecutionResultBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_result_block) {content, return\_code, stderr, 2 more}

Accepts one of the following:

class BetaBashCodeExecutionToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:output\_file\_too\_large

type: :bash\_code\_execution\_tool\_result\_error

Accepts one of the following:

:bash\_code\_execution\_tool\_result\_error

class BetaBashCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :bash\_code\_execution\_output

Accepts one of the following:

:bash\_code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :bash\_code\_execution\_result

Accepts one of the following:

:bash\_code\_execution\_result

tool\_use\_id: String

type: :bash\_code\_execution\_tool\_result

Accepts one of the following:

:bash\_code\_execution\_tool\_result

class BetaTextEditorCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaTextEditorCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_tool_result_error) {error\_code, error\_message, type} \|[BetaTextEditorCodeExecutionViewResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_view_result_block) {content, file\_type, num\_lines, 3 more} \|[BetaTextEditorCodeExecutionCreateResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_create_result_block) {is\_file\_update, type} \|[BetaTextEditorCodeExecutionStrReplaceResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_str_replace_result_block) {lines, new\_lines, new\_start, 3 more}

Accepts one of the following:

class BetaTextEditorCodeExecutionToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:file\_not\_found

error\_message: String

type: :text\_editor\_code\_execution\_tool\_result\_error

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result\_error

class BetaTextEditorCodeExecutionViewResultBlock {content, file\_type, num\_lines, 3 more}

content: String

file\_type: :text\|:image\|:pdf

Accepts one of the following:

:text

:image

:pdf

num\_lines: Integer

start\_line: Integer

total\_lines: Integer

type: :text\_editor\_code\_execution\_view\_result

Accepts one of the following:

:text\_editor\_code\_execution\_view\_result

class BetaTextEditorCodeExecutionCreateResultBlock {is\_file\_update, type}

is\_file\_update: bool

type: :text\_editor\_code\_execution\_create\_result

Accepts one of the following:

:text\_editor\_code\_execution\_create\_result

class BetaTextEditorCodeExecutionStrReplaceResultBlock {lines, new\_lines, new\_start, 3 more}

lines: Array\[String\]

new\_lines: Integer

new\_start: Integer

old\_lines: Integer

old\_start: Integer

type: :text\_editor\_code\_execution\_str\_replace\_result

Accepts one of the following:

:text\_editor\_code\_execution\_str\_replace\_result

tool\_use\_id: String

type: :text\_editor\_code\_execution\_tool\_result

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result

class BetaToolSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaToolSearchToolResultError](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_result_error) {error\_code, error\_message, type} \|[BetaToolSearchToolSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_search_result_block) {tool\_references, type}

Accepts one of the following:

class BetaToolSearchToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|:execution\_time\_exceeded

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

error\_message: String

type: :tool\_search\_tool\_result\_error

Accepts one of the following:

:tool\_search\_tool\_result\_error

class BetaToolSearchToolSearchResultBlock {tool\_references, type}

tool\_references: Array\[[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block) {tool\_name, type} \]

tool\_name: String

type: :tool\_reference

Accepts one of the following:

:tool\_reference

type: :tool\_search\_tool\_search\_result

Accepts one of the following:

:tool\_search\_tool\_search\_result

tool\_use\_id: String

type: :tool\_search\_tool\_result

Accepts one of the following:

:tool\_search\_tool\_result

class BetaMCPToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

The name of the MCP tool

server\_name: String

The name of the MCP server

type: :mcp\_tool\_use

Accepts one of the following:

:mcp\_tool\_use

class BetaMCPToolResultBlock {content, is\_error, tool\_use\_id, type}

content: String\|Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

Accepts one of the following:

String

Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

is\_error: bool

tool\_use\_id: String

type: :mcp\_tool\_result

Accepts one of the following:

:mcp\_tool\_result

class BetaContainerUploadBlock {file\_id, type}

Response model for a file uploaded to the container.

file\_id: String

type: :container\_upload

Accepts one of the following:

:container\_upload

context\_management: [BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response) {applied\_edits}

Context management response.

Information about context management strategies applied during the request.

applied\_edits: Array\[[BetaClearToolUses20250919EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_tool_uses_20250919_edit_response) {cleared\_input\_tokens, cleared\_tool\_uses, type} \|[BetaClearThinking20251015EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_thinking_20251015_edit_response) {cleared\_input\_tokens, cleared\_thinking\_turns, type} \]

List of context management edits that were applied.

Accepts one of the following:

class BetaClearToolUses20250919EditResponse {cleared\_input\_tokens, cleared\_tool\_uses, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_tool\_uses: Integer

Number of tool uses that were cleared.

minimum0

type: :clear\_tool\_uses\_20250919

The type of context management edit applied.

Accepts one of the following:

:clear\_tool\_uses\_20250919

class BetaClearThinking20251015EditResponse {cleared\_input\_tokens, cleared\_thinking\_turns, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_thinking\_turns: Integer

Number of thinking turns that were cleared.

minimum0

type: :clear\_thinking\_20251015

The type of context management edit applied.

Accepts one of the following:

:clear\_thinking\_20251015

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"\|:"claude-opus-4-5"\|:"claude-3-7-sonnet-latest"\|17 more

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

:"claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

:"claude-3-7-sonnet-latest"

High-performance model with early extended thinking

:"claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

:"claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

:"claude-3-5-haiku-20241022"

Our fastest model

:"claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-sonnet-4-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-0"

High-performance model with extended thinking

:"claude-4-sonnet-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-5"

Our best model for real-world agents and coding

:"claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

:"claude-opus-4-0"

Our most capable model

:"claude-opus-4-20250514"

Our most capable model

:"claude-4-opus-20250514"

Our most capable model

:"claude-opus-4-1-20250805"

Our most capable model

:"claude-3-opus-latest"

Excels at writing and complex tasks

:"claude-3-opus-20240229"

Excels at writing and complex tasks

:"claude-3-haiku-20240307"

Our previous most fast and cost-effective

String

role: :assistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

:assistant

stop\_reason: [BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

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

:end\_turn

:max\_tokens

:stop\_sequence

:tool\_use

:pause\_turn

:refusal

:model\_context\_window\_exceeded

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

Breakdown of cached tokens by TTL

ephemeral\_1h\_input\_tokens: Integer

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral\_5m\_input\_tokens: Integer

The number of input tokens used to create the 5 minute cache entry.

minimum0

cache\_creation\_input\_tokens: Integer

The number of input tokens used to create the cache entry.

minimum0

cache\_read\_input\_tokens: Integer

The number of input tokens read from the cache.

minimum0

input\_tokens: Integer

The number of input tokens which were used.

minimum0

output\_tokens: Integer

The number of output tokens which were used.

minimum0

server\_tool\_use: [BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage) {web\_fetch\_requests, web\_search\_requests}

The number of server tool requests.

web\_fetch\_requests: Integer

The number of web fetch tool requests.

minimum0

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard\|:priority\|:batch

If the request used the priority, standard, or batch tier.

Accepts one of the following:

:standard

:priority

:batch

type: :succeeded

Accepts one of the following:

:succeeded

class BetaMessageBatchErroredResult {error, type}

error: [BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response) {error, request\_id, type}

error: [BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

class BetaInvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class BetaAuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BetaBillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class BetaPermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class BetaNotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class BetaRateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class BetaGatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class BetaAPIError {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class BetaOverloadedError {message, type}

message: String

type: :overloaded\_error

Accepts one of the following:

:overloaded\_error

request\_id: String

type: :error

Accepts one of the following:

:error

type: :errored

Accepts one of the following:

:errored

class BetaMessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class BetaMessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class BetaMessageBatchRequestCounts {canceled, errored, expired, 2 more}

canceled: Integer

Number of requests in the Message Batch that have been canceled.

This is zero until processing of the entire Message Batch has ended.

errored: Integer

Number of requests in the Message Batch that encountered an error.

This is zero until processing of the entire Message Batch has ended.

expired: Integer

Number of requests in the Message Batch that have expired.

This is zero until processing of the entire Message Batch has ended.

processing: Integer

Number of requests in the Message Batch that are processing.

succeeded: Integer

Number of requests in the Message Batch that have completed successfully.

This is zero until processing of the entire Message Batch has ended.

BetaMessageBatchResult = [BetaMessageBatchSucceededResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_succeeded_result) {message, type} \|[BetaMessageBatchErroredResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_errored_result) {error, type} \|[BetaMessageBatchCanceledResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_canceled_result) {type} \|[BetaMessageBatchExpiredResult](https://platform.claude.com/docs/en/api/beta#beta_message_batch_expired_result) {type}

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

class BetaMessageBatchSucceededResult {message, type}

message: [BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message) {id, container, content, 7 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

container: [BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container) {id, expires\_at, skills}

Information about the container used in the request (for the code execution tool)

id: String

Identifier for the container used in this request

expires\_at: Time

The time at which the container will expire.

formatdate-time

skills: Array\[[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill) {skill\_id, type, version} \]

Skills loaded in the container

skill\_id: String

Skill ID

maxLength64

minLength1

type: :anthropic\|:custom

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

:anthropic

:custom

version: String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content: Array\[[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)\]

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

class BetaTextBlock {citations, text, type}

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

class BetaThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class BetaRedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class BetaToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

class BetaServerToolUseBlock {id, caller\_, input, 2 more}

id: String

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

input: Hash\[Symbol, untyped\]

name: :web\_search\|:web\_fetch\|:code\_execution\|4 more

Accepts one of the following:

:web\_search

:web\_fetch

:code\_execution

:bash\_code\_execution

:text\_editor\_code\_execution

:tool\_search\_tool\_regex

:tool\_search\_tool\_bm25

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class BetaWebSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

class BetaWebSearchToolResultError {error\_code, type}

error\_code: [BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

encrypted\_content: String

page\_age: String

title: String

type: :web\_search\_result

Accepts one of the following:

:web\_search\_result

url: String

tool\_use\_id: String

type: :web\_search\_tool\_result

Accepts one of the following:

:web\_search\_tool\_result

class BetaWebFetchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebFetchToolResultErrorBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_block) {error\_code, type} \|[BetaWebFetchBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_block) {content, retrieved\_at, type, url}

Accepts one of the following:

class BetaWebFetchToolResultErrorBlock {error\_code, type}

error\_code: [BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:url\_too\_long

:url\_not\_allowed

:url\_not\_accessible

:unsupported\_content\_type

:too\_many\_requests

:max\_uses\_exceeded

:unavailable

type: :web\_fetch\_tool\_result\_error

Accepts one of the following:

:web\_fetch\_tool\_result\_error

class BetaWebFetchBlock {content, retrieved\_at, type, url}

content: [BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block) {citations, source, title, type}

citations: [BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config) {enabled}

Citation configuration for the document

enabled: bool

source: [BetaBase64PDFSource](https://platform.claude.com/docs/en/api/beta#beta_base64_pdf_source) {data, media\_type, type} \|[BetaPlainTextSource](https://platform.claude.com/docs/en/api/beta#beta_plain_text_source) {data, media\_type, type}

Accepts one of the following:

class BetaBase64PDFSource {data, media\_type, type}

data: String

media\_type: :"application/pdf"

Accepts one of the following:

:"application/pdf"

type: :base64

Accepts one of the following:

:base64

class BetaPlainTextSource {data, media\_type, type}

data: String

media\_type: :"text/plain"

Accepts one of the following:

:"text/plain"

type: :text

Accepts one of the following:

:text

title: String

The title of the document

type: :document

Accepts one of the following:

:document

retrieved\_at: String

ISO 8601 timestamp when the content was retrieved

type: :web\_fetch\_result

Accepts one of the following:

:web\_fetch\_result

url: String

Fetched content URL

tool\_use\_id: String

type: :web\_fetch\_tool\_result

Accepts one of the following:

:web\_fetch\_tool\_result

class BetaCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

class BetaCodeExecutionToolResultError {error\_code, type}

error\_code: [BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

type: :code\_execution\_tool\_result\_error

Accepts one of the following:

:code\_execution\_tool\_result\_error

class BetaCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :code\_execution\_output

Accepts one of the following:

:code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :code\_execution\_result

Accepts one of the following:

:code\_execution\_result

tool\_use\_id: String

type: :code\_execution\_tool\_result

Accepts one of the following:

:code\_execution\_tool\_result

class BetaBashCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaBashCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_tool_result_error) {error\_code, type} \|[BetaBashCodeExecutionResultBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_result_block) {content, return\_code, stderr, 2 more}

Accepts one of the following:

class BetaBashCodeExecutionToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:output\_file\_too\_large

type: :bash\_code\_execution\_tool\_result\_error

Accepts one of the following:

:bash\_code\_execution\_tool\_result\_error

class BetaBashCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :bash\_code\_execution\_output

Accepts one of the following:

:bash\_code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :bash\_code\_execution\_result

Accepts one of the following:

:bash\_code\_execution\_result

tool\_use\_id: String

type: :bash\_code\_execution\_tool\_result

Accepts one of the following:

:bash\_code\_execution\_tool\_result

class BetaTextEditorCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaTextEditorCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_tool_result_error) {error\_code, error\_message, type} \|[BetaTextEditorCodeExecutionViewResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_view_result_block) {content, file\_type, num\_lines, 3 more} \|[BetaTextEditorCodeExecutionCreateResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_create_result_block) {is\_file\_update, type} \|[BetaTextEditorCodeExecutionStrReplaceResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_str_replace_result_block) {lines, new\_lines, new\_start, 3 more}

Accepts one of the following:

class BetaTextEditorCodeExecutionToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:file\_not\_found

error\_message: String

type: :text\_editor\_code\_execution\_tool\_result\_error

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result\_error

class BetaTextEditorCodeExecutionViewResultBlock {content, file\_type, num\_lines, 3 more}

content: String

file\_type: :text\|:image\|:pdf

Accepts one of the following:

:text

:image

:pdf

num\_lines: Integer

start\_line: Integer

total\_lines: Integer

type: :text\_editor\_code\_execution\_view\_result

Accepts one of the following:

:text\_editor\_code\_execution\_view\_result

class BetaTextEditorCodeExecutionCreateResultBlock {is\_file\_update, type}

is\_file\_update: bool

type: :text\_editor\_code\_execution\_create\_result

Accepts one of the following:

:text\_editor\_code\_execution\_create\_result

class BetaTextEditorCodeExecutionStrReplaceResultBlock {lines, new\_lines, new\_start, 3 more}

lines: Array\[String\]

new\_lines: Integer

new\_start: Integer

old\_lines: Integer

old\_start: Integer

type: :text\_editor\_code\_execution\_str\_replace\_result

Accepts one of the following:

:text\_editor\_code\_execution\_str\_replace\_result

tool\_use\_id: String

type: :text\_editor\_code\_execution\_tool\_result

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result

class BetaToolSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaToolSearchToolResultError](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_result_error) {error\_code, error\_message, type} \|[BetaToolSearchToolSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_search_result_block) {tool\_references, type}

Accepts one of the following:

class BetaToolSearchToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|:execution\_time\_exceeded

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

error\_message: String

type: :tool\_search\_tool\_result\_error

Accepts one of the following:

:tool\_search\_tool\_result\_error

class BetaToolSearchToolSearchResultBlock {tool\_references, type}

tool\_references: Array\[[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block) {tool\_name, type} \]

tool\_name: String

type: :tool\_reference

Accepts one of the following:

:tool\_reference

type: :tool\_search\_tool\_search\_result

Accepts one of the following:

:tool\_search\_tool\_search\_result

tool\_use\_id: String

type: :tool\_search\_tool\_result

Accepts one of the following:

:tool\_search\_tool\_result

class BetaMCPToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

The name of the MCP tool

server\_name: String

The name of the MCP server

type: :mcp\_tool\_use

Accepts one of the following:

:mcp\_tool\_use

class BetaMCPToolResultBlock {content, is\_error, tool\_use\_id, type}

content: String\|Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

Accepts one of the following:

String

Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

is\_error: bool

tool\_use\_id: String

type: :mcp\_tool\_result

Accepts one of the following:

:mcp\_tool\_result

class BetaContainerUploadBlock {file\_id, type}

Response model for a file uploaded to the container.

file\_id: String

type: :container\_upload

Accepts one of the following:

:container\_upload

context\_management: [BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response) {applied\_edits}

Context management response.

Information about context management strategies applied during the request.

applied\_edits: Array\[[BetaClearToolUses20250919EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_tool_uses_20250919_edit_response) {cleared\_input\_tokens, cleared\_tool\_uses, type} \|[BetaClearThinking20251015EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_thinking_20251015_edit_response) {cleared\_input\_tokens, cleared\_thinking\_turns, type} \]

List of context management edits that were applied.

Accepts one of the following:

class BetaClearToolUses20250919EditResponse {cleared\_input\_tokens, cleared\_tool\_uses, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_tool\_uses: Integer

Number of tool uses that were cleared.

minimum0

type: :clear\_tool\_uses\_20250919

The type of context management edit applied.

Accepts one of the following:

:clear\_tool\_uses\_20250919

class BetaClearThinking20251015EditResponse {cleared\_input\_tokens, cleared\_thinking\_turns, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_thinking\_turns: Integer

Number of thinking turns that were cleared.

minimum0

type: :clear\_thinking\_20251015

The type of context management edit applied.

Accepts one of the following:

:clear\_thinking\_20251015

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"\|:"claude-opus-4-5"\|:"claude-3-7-sonnet-latest"\|17 more

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

:"claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

:"claude-3-7-sonnet-latest"

High-performance model with early extended thinking

:"claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

:"claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

:"claude-3-5-haiku-20241022"

Our fastest model

:"claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-sonnet-4-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-0"

High-performance model with extended thinking

:"claude-4-sonnet-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-5"

Our best model for real-world agents and coding

:"claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

:"claude-opus-4-0"

Our most capable model

:"claude-opus-4-20250514"

Our most capable model

:"claude-4-opus-20250514"

Our most capable model

:"claude-opus-4-1-20250805"

Our most capable model

:"claude-3-opus-latest"

Excels at writing and complex tasks

:"claude-3-opus-20240229"

Excels at writing and complex tasks

:"claude-3-haiku-20240307"

Our previous most fast and cost-effective

String

role: :assistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

:assistant

stop\_reason: [BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

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

:end\_turn

:max\_tokens

:stop\_sequence

:tool\_use

:pause\_turn

:refusal

:model\_context\_window\_exceeded

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

Breakdown of cached tokens by TTL

ephemeral\_1h\_input\_tokens: Integer

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral\_5m\_input\_tokens: Integer

The number of input tokens used to create the 5 minute cache entry.

minimum0

cache\_creation\_input\_tokens: Integer

The number of input tokens used to create the cache entry.

minimum0

cache\_read\_input\_tokens: Integer

The number of input tokens read from the cache.

minimum0

input\_tokens: Integer

The number of input tokens which were used.

minimum0

output\_tokens: Integer

The number of output tokens which were used.

minimum0

server\_tool\_use: [BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage) {web\_fetch\_requests, web\_search\_requests}

The number of server tool requests.

web\_fetch\_requests: Integer

The number of web fetch tool requests.

minimum0

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard\|:priority\|:batch

If the request used the priority, standard, or batch tier.

Accepts one of the following:

:standard

:priority

:batch

type: :succeeded

Accepts one of the following:

:succeeded

class BetaMessageBatchErroredResult {error, type}

error: [BetaErrorResponse](https://platform.claude.com/docs/en/api/beta#beta_error_response) {error, request\_id, type}

error: [BetaError](https://platform.claude.com/docs/en/api/beta#beta_error)

Accepts one of the following:

class BetaInvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class BetaAuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BetaBillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class BetaPermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class BetaNotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class BetaRateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class BetaGatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class BetaAPIError {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class BetaOverloadedError {message, type}

message: String

type: :overloaded\_error

Accepts one of the following:

:overloaded\_error

request\_id: String

type: :error

Accepts one of the following:

:error

type: :errored

Accepts one of the following:

:errored

class BetaMessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class BetaMessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class BetaMessageBatchSucceededResult {message, type}

message: [BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message) {id, container, content, 7 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

container: [BetaContainer](https://platform.claude.com/docs/en/api/beta#beta_container) {id, expires\_at, skills}

Information about the container used in the request (for the code execution tool)

id: String

Identifier for the container used in this request

expires\_at: Time

The time at which the container will expire.

formatdate-time

skills: Array\[[BetaSkill](https://platform.claude.com/docs/en/api/beta#beta_skill) {skill\_id, type, version} \]

Skills loaded in the container

skill\_id: String

Skill ID

maxLength64

minLength1

type: :anthropic\|:custom

Type of skill - either 'anthropic' (built-in) or 'custom' (user-defined)

Accepts one of the following:

:anthropic

:custom

version: String

Skill version or 'latest' for most recent version

maxLength64

minLength1

content: Array\[[BetaContentBlock](https://platform.claude.com/docs/en/api/beta#beta_content_block)\]

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

class BetaTextBlock {citations, text, type}

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

class BetaThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class BetaRedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class BetaToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

class BetaServerToolUseBlock {id, caller\_, input, 2 more}

id: String

caller\_: [BetaDirectCaller](https://platform.claude.com/docs/en/api/beta#beta_direct_caller) {type} \|[BetaServerToolCaller](https://platform.claude.com/docs/en/api/beta#beta_server_tool_caller) {tool\_id, type}

Tool invocation directly from the model.

Accepts one of the following:

class BetaDirectCaller {type}

Tool invocation directly from the model.

type: :direct

Accepts one of the following:

:direct

class BetaServerToolCaller {tool\_id, type}

Tool invocation generated by a server-side tool.

tool\_id: String

type: :code\_execution\_20250825

Accepts one of the following:

:code\_execution\_20250825

input: Hash\[Symbol, untyped\]

name: :web\_search\|:web\_fetch\|:code\_execution\|4 more

Accepts one of the following:

:web\_search

:web\_fetch

:code\_execution

:bash\_code\_execution

:text\_editor\_code\_execution

:tool\_search\_tool\_regex

:tool\_search\_tool\_bm25

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class BetaWebSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_block_content)

Accepts one of the following:

class BetaWebSearchToolResultError {error\_code, type}

error\_code: [BetaWebSearchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_search_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[BetaWebSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

encrypted\_content: String

page\_age: String

title: String

type: :web\_search\_result

Accepts one of the following:

:web\_search\_result

url: String

tool\_use\_id: String

type: :web\_search\_tool\_result

Accepts one of the following:

:web\_search\_tool\_result

class BetaWebFetchToolResultBlock {content, tool\_use\_id, type}

content: [BetaWebFetchToolResultErrorBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_block) {error\_code, type} \|[BetaWebFetchBlock](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_block) {content, retrieved\_at, type, url}

Accepts one of the following:

class BetaWebFetchToolResultErrorBlock {error\_code, type}

error\_code: [BetaWebFetchToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_web_fetch_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:url\_too\_long

:url\_not\_allowed

:url\_not\_accessible

:unsupported\_content\_type

:too\_many\_requests

:max\_uses\_exceeded

:unavailable

type: :web\_fetch\_tool\_result\_error

Accepts one of the following:

:web\_fetch\_tool\_result\_error

class BetaWebFetchBlock {content, retrieved\_at, type, url}

content: [BetaDocumentBlock](https://platform.claude.com/docs/en/api/beta#beta_document_block) {citations, source, title, type}

citations: [BetaCitationConfig](https://platform.claude.com/docs/en/api/beta#beta_citation_config) {enabled}

Citation configuration for the document

enabled: bool

source: [BetaBase64PDFSource](https://platform.claude.com/docs/en/api/beta#beta_base64_pdf_source) {data, media\_type, type} \|[BetaPlainTextSource](https://platform.claude.com/docs/en/api/beta#beta_plain_text_source) {data, media\_type, type}

Accepts one of the following:

class BetaBase64PDFSource {data, media\_type, type}

data: String

media\_type: :"application/pdf"

Accepts one of the following:

:"application/pdf"

type: :base64

Accepts one of the following:

:base64

class BetaPlainTextSource {data, media\_type, type}

data: String

media\_type: :"text/plain"

Accepts one of the following:

:"text/plain"

type: :text

Accepts one of the following:

:text

title: String

The title of the document

type: :document

Accepts one of the following:

:document

retrieved\_at: String

ISO 8601 timestamp when the content was retrieved

type: :web\_fetch\_result

Accepts one of the following:

:web\_fetch\_result

url: String

Fetched content URL

tool\_use\_id: String

type: :web\_fetch\_tool\_result

Accepts one of the following:

:web\_fetch\_tool\_result

class BetaCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaCodeExecutionToolResultBlockContent](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_block_content)

Accepts one of the following:

class BetaCodeExecutionToolResultError {error\_code, type}

error\_code: [BetaCodeExecutionToolResultErrorCode](https://platform.claude.com/docs/en/api/beta#beta_code_execution_tool_result_error_code)

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

type: :code\_execution\_tool\_result\_error

Accepts one of the following:

:code\_execution\_tool\_result\_error

class BetaCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :code\_execution\_output

Accepts one of the following:

:code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :code\_execution\_result

Accepts one of the following:

:code\_execution\_result

tool\_use\_id: String

type: :code\_execution\_tool\_result

Accepts one of the following:

:code\_execution\_tool\_result

class BetaBashCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaBashCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_tool_result_error) {error\_code, type} \|[BetaBashCodeExecutionResultBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_result_block) {content, return\_code, stderr, 2 more}

Accepts one of the following:

class BetaBashCodeExecutionToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:output\_file\_too\_large

type: :bash\_code\_execution\_tool\_result\_error

Accepts one of the following:

:bash\_code\_execution\_tool\_result\_error

class BetaBashCodeExecutionResultBlock {content, return\_code, stderr, 2 more}

content: Array\[[BetaBashCodeExecutionOutputBlock](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block) {file\_id, type} \]

file\_id: String

type: :bash\_code\_execution\_output

Accepts one of the following:

:bash\_code\_execution\_output

return\_code: Integer

stderr: String

stdout: String

type: :bash\_code\_execution\_result

Accepts one of the following:

:bash\_code\_execution\_result

tool\_use\_id: String

type: :bash\_code\_execution\_tool\_result

Accepts one of the following:

:bash\_code\_execution\_tool\_result

class BetaTextEditorCodeExecutionToolResultBlock {content, tool\_use\_id, type}

content: [BetaTextEditorCodeExecutionToolResultError](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_tool_result_error) {error\_code, error\_message, type} \|[BetaTextEditorCodeExecutionViewResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_view_result_block) {content, file\_type, num\_lines, 3 more} \|[BetaTextEditorCodeExecutionCreateResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_create_result_block) {is\_file\_update, type} \|[BetaTextEditorCodeExecutionStrReplaceResultBlock](https://platform.claude.com/docs/en/api/beta#beta_text_editor_code_execution_str_replace_result_block) {lines, new\_lines, new\_start, 3 more}

Accepts one of the following:

class BetaTextEditorCodeExecutionToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

:file\_not\_found

error\_message: String

type: :text\_editor\_code\_execution\_tool\_result\_error

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result\_error

class BetaTextEditorCodeExecutionViewResultBlock {content, file\_type, num\_lines, 3 more}

content: String

file\_type: :text\|:image\|:pdf

Accepts one of the following:

:text

:image

:pdf

num\_lines: Integer

start\_line: Integer

total\_lines: Integer

type: :text\_editor\_code\_execution\_view\_result

Accepts one of the following:

:text\_editor\_code\_execution\_view\_result

class BetaTextEditorCodeExecutionCreateResultBlock {is\_file\_update, type}

is\_file\_update: bool

type: :text\_editor\_code\_execution\_create\_result

Accepts one of the following:

:text\_editor\_code\_execution\_create\_result

class BetaTextEditorCodeExecutionStrReplaceResultBlock {lines, new\_lines, new\_start, 3 more}

lines: Array\[String\]

new\_lines: Integer

new\_start: Integer

old\_lines: Integer

old\_start: Integer

type: :text\_editor\_code\_execution\_str\_replace\_result

Accepts one of the following:

:text\_editor\_code\_execution\_str\_replace\_result

tool\_use\_id: String

type: :text\_editor\_code\_execution\_tool\_result

Accepts one of the following:

:text\_editor\_code\_execution\_tool\_result

class BetaToolSearchToolResultBlock {content, tool\_use\_id, type}

content: [BetaToolSearchToolResultError](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_result_error) {error\_code, error\_message, type} \|[BetaToolSearchToolSearchResultBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_search_tool_search_result_block) {tool\_references, type}

Accepts one of the following:

class BetaToolSearchToolResultError {error\_code, error\_message, type}

error\_code: :invalid\_tool\_input\|:unavailable\|:too\_many\_requests\|:execution\_time\_exceeded

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:too\_many\_requests

:execution\_time\_exceeded

error\_message: String

type: :tool\_search\_tool\_result\_error

Accepts one of the following:

:tool\_search\_tool\_result\_error

class BetaToolSearchToolSearchResultBlock {tool\_references, type}

tool\_references: Array\[[BetaToolReferenceBlock](https://platform.claude.com/docs/en/api/beta#beta_tool_reference_block) {tool\_name, type} \]

tool\_name: String

type: :tool\_reference

Accepts one of the following:

:tool\_reference

type: :tool\_search\_tool\_search\_result

Accepts one of the following:

:tool\_search\_tool\_search\_result

tool\_use\_id: String

type: :tool\_search\_tool\_result

Accepts one of the following:

:tool\_search\_tool\_result

class BetaMCPToolUseBlock {id, input, name, 2 more}

id: String

input: Hash\[Symbol, untyped\]

name: String

The name of the MCP tool

server\_name: String

The name of the MCP server

type: :mcp\_tool\_use

Accepts one of the following:

:mcp\_tool\_use

class BetaMCPToolResultBlock {content, is\_error, tool\_use\_id, type}

content: String\|Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

Accepts one of the following:

String

Array\[[BetaTextBlock](https://platform.claude.com/docs/en/api/beta#beta_text_block) {citations, text, type} \]

citations: Array\[[BetaTextCitation](https://platform.claude.com/docs/en/api/beta#beta_text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class BetaCitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class BetaCitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class BetaCitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class BetaCitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class BetaCitationSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

cited\_text: String

end\_block\_index: Integer

search\_result\_index: Integer

source: String

start\_block\_index: Integer

title: String

type: :search\_result\_location

Accepts one of the following:

:search\_result\_location

text: String

type: :text

Accepts one of the following:

:text

is\_error: bool

tool\_use\_id: String

type: :mcp\_tool\_result

Accepts one of the following:

:mcp\_tool\_result

class BetaContainerUploadBlock {file\_id, type}

Response model for a file uploaded to the container.

file\_id: String

type: :container\_upload

Accepts one of the following:

:container\_upload

context\_management: [BetaContextManagementResponse](https://platform.claude.com/docs/en/api/beta#beta_context_management_response) {applied\_edits}

Context management response.

Information about context management strategies applied during the request.

applied\_edits: Array\[[BetaClearToolUses20250919EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_tool_uses_20250919_edit_response) {cleared\_input\_tokens, cleared\_tool\_uses, type} \|[BetaClearThinking20251015EditResponse](https://platform.claude.com/docs/en/api/beta#beta_clear_thinking_20251015_edit_response) {cleared\_input\_tokens, cleared\_thinking\_turns, type} \]

List of context management edits that were applied.

Accepts one of the following:

class BetaClearToolUses20250919EditResponse {cleared\_input\_tokens, cleared\_tool\_uses, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_tool\_uses: Integer

Number of tool uses that were cleared.

minimum0

type: :clear\_tool\_uses\_20250919

The type of context management edit applied.

Accepts one of the following:

:clear\_tool\_uses\_20250919

class BetaClearThinking20251015EditResponse {cleared\_input\_tokens, cleared\_thinking\_turns, type}

cleared\_input\_tokens: Integer

Number of input tokens cleared by this edit.

minimum0

cleared\_thinking\_turns: Integer

Number of thinking turns that were cleared.

minimum0

type: :clear\_thinking\_20251015

The type of context management edit applied.

Accepts one of the following:

:clear\_thinking\_20251015

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"\|:"claude-opus-4-5"\|:"claude-3-7-sonnet-latest"\|17 more

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101"

Premium model combining maximum intelligence with practical performance

:"claude-opus-4-5"

Premium model combining maximum intelligence with practical performance

:"claude-3-7-sonnet-latest"

High-performance model with early extended thinking

:"claude-3-7-sonnet-20250219"

High-performance model with early extended thinking

:"claude-3-5-haiku-latest"

Fastest and most compact model for near-instant responsiveness

:"claude-3-5-haiku-20241022"

Our fastest model

:"claude-haiku-4-5"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-haiku-4-5-20251001"

Hybrid model, capable of near-instant responses and extended thinking

:"claude-sonnet-4-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-0"

High-performance model with extended thinking

:"claude-4-sonnet-20250514"

High-performance model with extended thinking

:"claude-sonnet-4-5"

Our best model for real-world agents and coding

:"claude-sonnet-4-5-20250929"

Our best model for real-world agents and coding

:"claude-opus-4-0"

Our most capable model

:"claude-opus-4-20250514"

Our most capable model

:"claude-4-opus-20250514"

Our most capable model

:"claude-opus-4-1-20250805"

Our most capable model

:"claude-3-opus-latest"

Excels at writing and complex tasks

:"claude-3-opus-20240229"

Excels at writing and complex tasks

:"claude-3-haiku-20240307"

Our previous most fast and cost-effective

String

role: :assistant

Conversational role of the generated message.

This will always be `"assistant"`.

Accepts one of the following:

:assistant

stop\_reason: [BetaStopReason](https://platform.claude.com/docs/en/api/beta#beta_stop_reason)

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

:end\_turn

:max\_tokens

:stop\_sequence

:tool\_use

:pause\_turn

:refusal

:model\_context\_window\_exceeded

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [BetaUsage](https://platform.claude.com/docs/en/api/beta#beta_usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [BetaCacheCreation](https://platform.claude.com/docs/en/api/beta#beta_cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

Breakdown of cached tokens by TTL

ephemeral\_1h\_input\_tokens: Integer

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral\_5m\_input\_tokens: Integer

The number of input tokens used to create the 5 minute cache entry.

minimum0

cache\_creation\_input\_tokens: Integer

The number of input tokens used to create the cache entry.

minimum0

cache\_read\_input\_tokens: Integer

The number of input tokens read from the cache.

minimum0

input\_tokens: Integer

The number of input tokens which were used.

minimum0

output\_tokens: Integer

The number of output tokens which were used.

minimum0

server\_tool\_use: [BetaServerToolUsage](https://platform.claude.com/docs/en/api/beta#beta_server_tool_usage) {web\_fetch\_requests, web\_search\_requests}

The number of server tool requests.

web\_fetch\_requests: Integer

The number of web fetch tool requests.

minimum0

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard\|:priority\|:batch

If the request used the priority, standard, or batch tier.

Accepts one of the following:

:standard

:priority

:batch

type: :succeeded

Accepts one of the following:

:succeeded

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

a.claude.ai

# a.claude.ai is blocked

**a.claude.ai** refused to connect.

ERR\_BLOCKED\_BY\_RESPONSE

**a.claude.ai** refused to connect.

![](<Base64-Image-Removed>)![](<Base64-Image-Removed>)