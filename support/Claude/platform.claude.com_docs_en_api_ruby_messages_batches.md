---
url: "https://platform.claude.com/docs/en/api/ruby/messages/batches"
title: "Batches - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fruby%2Fmessages%2Fbatches)

Search...

⌘K

Using the API

[Features overview](https://platform.claude.com/docs/en/api/overview) [Client SDKs](https://platform.claude.com/docs/en/api/client-sdks) [Beta headers](https://platform.claude.com/docs/en/api/beta-headers) [Errors](https://platform.claude.com/docs/en/api/errors)

[Messages](https://platform.claude.com/docs/en/api/messages)

[Create a Message](https://platform.claude.com/docs/en/api/messages/create) [Count tokens in a Message](https://platform.claude.com/docs/en/api/messages/count_tokens)

Batches

[Create a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/create) [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/retrieve) [List Message Batches](https://platform.claude.com/docs/en/api/messages/batches/list) [Cancel a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/cancel) [Delete a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/delete) [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/messages/batches/results)

[Models](https://platform.claude.com/docs/en/api/models)

[List Models](https://platform.claude.com/docs/en/api/models/list) [Get a Model](https://platform.claude.com/docs/en/api/models/retrieve)

[Beta](https://platform.claude.com/docs/en/api/beta)

Models

Messages

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

Ruby

# Batches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/create)

messages.batches.create(\*\*kwargs) -\> [MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/retrieve)

messages.batches.retrieve(message\_batch\_id) -\> [MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/messages/batches/list)

messages.batches.list(\*\*kwargs) -\> Page<[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more} >

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/cancel)

messages.batches.cancel(message\_batch\_id) -\> [MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch) {id, archived\_at, cancel\_initiated\_at, 7 more}

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/delete)

messages.batches.delete(message\_batch\_id) -\> [DeletedMessageBatch](https://platform.claude.com/docs/en/api/messages#deleted_message_batch) {id, type}

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/messages/batches/results)

messages.batches.results(message\_batch\_id) -\> [MessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/messages#message_batch_individual_response) {custom\_id, result}

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

class DeletedMessageBatch {id, type}

id: String

ID of the Message Batch.

type: :message\_batch\_deleted

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

:message\_batch\_deleted

class MessageBatch {id, archived\_at, cancel\_initiated\_at, 7 more}

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

processing\_status: :in\_progress \| :canceling \| :ended

Processing status of the Message Batch.

Accepts one of the following:

:in\_progress

:canceling

:ended

request\_counts: [MessageBatchRequestCounts](https://platform.claude.com/docs/en/api/messages#message_batch_request_counts) {canceled, errored, expired, 2 more}

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

class MessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class MessageBatchErroredResult {error, type}

error: [ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response) {error, request\_id, type}

error: [ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

class InvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class AuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class PermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class NotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class RateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class GatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class APIErrorObject {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class OverloadedError {message, type}

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

class MessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class MessageBatchIndividualResponse {custom\_id, result}

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

custom\_id: String

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

result: [MessageBatchResult](https://platform.claude.com/docs/en/api/messages#message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

class MessageBatchSucceededResult {message, type}

message: [Message](https://platform.claude.com/docs/en/api/messages#message) {id, content, model, 5 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

content: Array\[[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)\]

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

class TextBlock {citations, text, type}

citations: Array\[[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class CitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class CitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class CitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class CitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class CitationsSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

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

class ThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class RedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class ToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

class ServerToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: :web\_search

Accepts one of the following:

:web\_search

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class WebSearchToolResultBlock {content, tool\_use\_id, type}

content: [WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

class WebSearchToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input \| :unavailable \| :max\_uses\_exceeded \| 2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

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

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101" \| :"claude-opus-4-5" \| :"claude-3-7-sonnet-latest" \| 17 more

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

stop\_reason: [StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

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

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [Usage](https://platform.claude.com/docs/en/api/messages#usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

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

server\_tool\_use: [ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage) {web\_search\_requests}

The number of server tool requests.

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard \| :priority \| :batch

If the request used the priority, standard, or batch tier.

Accepts one of the following:

:standard

:priority

:batch

type: :succeeded

Accepts one of the following:

:succeeded

class MessageBatchErroredResult {error, type}

error: [ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response) {error, request\_id, type}

error: [ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

class InvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class AuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class PermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class NotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class RateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class GatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class APIErrorObject {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class OverloadedError {message, type}

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

class MessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class MessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class MessageBatchRequestCounts {canceled, errored, expired, 2 more}

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

MessageBatchResult = [MessageBatchSucceededResult](https://platform.claude.com/docs/en/api/messages#message_batch_succeeded_result) {message, type}  \| [MessageBatchErroredResult](https://platform.claude.com/docs/en/api/messages#message_batch_errored_result) {error, type}  \| [MessageBatchCanceledResult](https://platform.claude.com/docs/en/api/messages#message_batch_canceled_result) {type}  \| [MessageBatchExpiredResult](https://platform.claude.com/docs/en/api/messages#message_batch_expired_result) {type}

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

class MessageBatchSucceededResult {message, type}

message: [Message](https://platform.claude.com/docs/en/api/messages#message) {id, content, model, 5 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

content: Array\[[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)\]

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

class TextBlock {citations, text, type}

citations: Array\[[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class CitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class CitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class CitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class CitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class CitationsSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

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

class ThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class RedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class ToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

class ServerToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: :web\_search

Accepts one of the following:

:web\_search

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class WebSearchToolResultBlock {content, tool\_use\_id, type}

content: [WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

class WebSearchToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input \| :unavailable \| :max\_uses\_exceeded \| 2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

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

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101" \| :"claude-opus-4-5" \| :"claude-3-7-sonnet-latest" \| 17 more

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

stop\_reason: [StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

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

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [Usage](https://platform.claude.com/docs/en/api/messages#usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

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

server\_tool\_use: [ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage) {web\_search\_requests}

The number of server tool requests.

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard \| :priority \| :batch

If the request used the priority, standard, or batch tier.

Accepts one of the following:

:standard

:priority

:batch

type: :succeeded

Accepts one of the following:

:succeeded

class MessageBatchErroredResult {error, type}

error: [ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response) {error, request\_id, type}

error: [ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

class InvalidRequestError {message, type}

message: String

type: :invalid\_request\_error

Accepts one of the following:

:invalid\_request\_error

class AuthenticationError {message, type}

message: String

type: :authentication\_error

Accepts one of the following:

:authentication\_error

class BillingError {message, type}

message: String

type: :billing\_error

Accepts one of the following:

:billing\_error

class PermissionError {message, type}

message: String

type: :permission\_error

Accepts one of the following:

:permission\_error

class NotFoundError {message, type}

message: String

type: :not\_found\_error

Accepts one of the following:

:not\_found\_error

class RateLimitError {message, type}

message: String

type: :rate\_limit\_error

Accepts one of the following:

:rate\_limit\_error

class GatewayTimeoutError {message, type}

message: String

type: :timeout\_error

Accepts one of the following:

:timeout\_error

class APIErrorObject {message, type}

message: String

type: :api\_error

Accepts one of the following:

:api\_error

class OverloadedError {message, type}

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

class MessageBatchCanceledResult {type}

type: :canceled

Accepts one of the following:

:canceled

class MessageBatchExpiredResult {type}

type: :expired

Accepts one of the following:

:expired

class MessageBatchSucceededResult {message, type}

message: [Message](https://platform.claude.com/docs/en/api/messages#message) {id, content, model, 5 more}

id: String

Unique object identifier.

The format and length of IDs may change over time.

content: Array\[[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)\]

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

class TextBlock {citations, text, type}

citations: Array\[[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)\]

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

class CitationCharLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_char\_index: Integer

file\_id: String

start\_char\_index: Integer

type: :char\_location

Accepts one of the following:

:char\_location

class CitationPageLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_page\_number: Integer

file\_id: String

start\_page\_number: Integer

type: :page\_location

Accepts one of the following:

:page\_location

class CitationContentBlockLocation {cited\_text, document\_index, document\_title, 4 more}

cited\_text: String

document\_index: Integer

document\_title: String

end\_block\_index: Integer

file\_id: String

start\_block\_index: Integer

type: :content\_block\_location

Accepts one of the following:

:content\_block\_location

class CitationsWebSearchResultLocation {cited\_text, encrypted\_index, title, 2 more}

cited\_text: String

encrypted\_index: String

title: String

type: :web\_search\_result\_location

Accepts one of the following:

:web\_search\_result\_location

url: String

class CitationsSearchResultLocation {cited\_text, end\_block\_index, search\_result\_index, 4 more}

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

class ThinkingBlock {signature, thinking, type}

signature: String

thinking: String

type: :thinking

Accepts one of the following:

:thinking

class RedactedThinkingBlock {data, type}

data: String

type: :redacted\_thinking

Accepts one of the following:

:redacted\_thinking

class ToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: String

type: :tool\_use

Accepts one of the following:

:tool\_use

class ServerToolUseBlock {id, input, name, type}

id: String

input: Hash\[Symbol, untyped\]

name: :web\_search

Accepts one of the following:

:web\_search

type: :server\_tool\_use

Accepts one of the following:

:server\_tool\_use

class WebSearchToolResultBlock {content, tool\_use\_id, type}

content: [WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

class WebSearchToolResultError {error\_code, type}

error\_code: :invalid\_tool\_input \| :unavailable \| :max\_uses\_exceeded \| 2 more

Accepts one of the following:

:invalid\_tool\_input

:unavailable

:max\_uses\_exceeded

:too\_many\_requests

:query\_too\_long

type: :web\_search\_tool\_result\_error

Accepts one of the following:

:web\_search\_tool\_result\_error

Array\[[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block) {encrypted\_content, page\_age, title, 2 more} \]

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

model: [Model](https://platform.claude.com/docs/en/api/messages#model)

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Accepts one of the following:

:"claude-opus-4-5-20251101" \| :"claude-opus-4-5" \| :"claude-3-7-sonnet-latest" \| 17 more

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

stop\_reason: [StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

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

stop\_sequence: String

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type: :message

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

:message

usage: [Usage](https://platform.claude.com/docs/en/api/messages#usage) {cache\_creation, cache\_creation\_input\_tokens, cache\_read\_input\_tokens, 4 more}

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cache\_creation: [CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation) {ephemeral\_1h\_input\_tokens, ephemeral\_5m\_input\_tokens}

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

server\_tool\_use: [ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage) {web\_search\_requests}

The number of server tool requests.

web\_search\_requests: Integer

The number of web search tool requests.

minimum0

service\_tier: :standard \| :priority \| :batch

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