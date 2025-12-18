---
url: "https://platform.claude.com/docs/en/api/kotlin/beta/messages"
title: "Messages - Claude API Reference"
---

Loading...

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fkotlin%2Fbeta%2Fmessages)

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

# Messages

##### [Create a Message](https://platform.claude.com/docs/en/api/beta/messages/create)

beta().messages().create(MessageCreateParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessage](https://platform.claude.com/docs/en/api/beta#beta_message)

post/v1/messages

##### [Count tokens in a Message](https://platform.claude.com/docs/en/api/beta/messages/count_tokens)

beta().messages().countTokens(MessageCountTokensParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[BetaMessageTokensCount](https://platform.claude.com/docs/en/api/beta#beta_message_tokens_count)

post/v1/messages/count\_tokens

##### ModelsExpand Collapse

classBetaAllThinkingTurns:

type:JsonValue;"all"constant"all"constant

Accepts one of the following:

ALL("all")

classBetaBase64ImageSource:

data:String

mediaType:MediaType

Accepts one of the following:

IMAGE\_JPEG("image/jpeg")

IMAGE\_PNG("image/png")

IMAGE\_GIF("image/gif")

IMAGE\_WEBP("image/webp")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classBetaBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classBetaBashCodeExecutionOutputBlock:

fileId:String

type:JsonValue;"bash\_code\_execution\_output"constant"bash\_code\_execution\_output"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_OUTPUT("bash\_code\_execution\_output")

classBetaBashCodeExecutionOutputBlockParam:

fileId:String

type:JsonValue;"bash\_code\_execution\_output"constant"bash\_code\_execution\_output"constant

Accepts one of the following:

BASH\_CODE\_EXECUTION\_OUTPUT("bash\_code\_execution\_output")

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

classBetaBashCodeExecutionResultBlockParam:

content:List<[BetaBashCodeExecutionOutputBlockParam](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)>

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

classBetaBashCodeExecutionToolResultBlockParam:

content:Content

Accepts one of the following:

classBetaBashCodeExecutionToolResultErrorParam:

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

classBetaBashCodeExecutionResultBlockParam:

content:List<[BetaBashCodeExecutionOutputBlockParam](https://platform.claude.com/docs/en/api/beta#beta_bash_code_execution_output_block_param)>

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

cacheControl:Optional<[BetaCacheControlEphemeral](https://platform.claude.com/docs/en/api/beta#beta_cache_control_ephemeral)>

Create a cache control breakpoint at this content block.

type:JsonValue;"ephemeral"constant"ephemeral"constant

Accepts one of the following:

EPHEMERAL("ephemeral")

ttl:Optional<Ttl>

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

TTL\_5M("5m")

TTL\_1H("1h")

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

classBetaBashCodeExecutionToolResultErrorParam:

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

classBetaCacheControlEphemeral:

type:JsonValue;"ephemeral"constant"ephemeral"constant

Accepts one of the following:

EPHEMERAL("ephemeral")

ttl:Optional<Ttl>

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

TTL\_5M("5m")

TTL\_1H("1h")

classBetaCacheCreation:

ephemeral1hInputTokens:Long

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral5mInputTokens:Long

The number of input tokens used to create the 5 minute cache entry.

minimum0

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

classBetaCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classBetaCitationConfig:

enabled:Boolean

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

classBetaCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

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

classBetaCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

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

classBetaCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String