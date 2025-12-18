---
url: "https://platform.claude.com/docs/en/api/kotlin/messages"
title: "Messages - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fkotlin%2Fmessages)

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

API Reference

Messages

Copy page

Kotlin

# Messages

##### [Create a Message](https://platform.claude.com/docs/en/api/messages/create)

messages().create(MessageCreateParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[Message](https://platform.claude.com/docs/en/api/messages#message)

post/v1/messages

##### [Count tokens in a Message](https://platform.claude.com/docs/en/api/messages/count_tokens)

messages().countTokens(MessageCountTokensParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[MessageTokensCount](https://platform.claude.com/docs/en/api/messages#message_tokens_count)

post/v1/messages/count\_tokens

##### ModelsExpand Collapse

classBase64ImageSource:

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

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classCacheControlEphemeral:

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

classCacheCreation:

ephemeral1hInputTokens:Long

The number of input tokens used to create the 1 hour cache entry.

minimum0

ephemeral5mInputTokens:Long

The number of input tokens used to create the 5 minute cache entry.

minimum0

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsConfigParam:

enabled:Optional<Boolean>

classCitationsDelta:

citation:Citation

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

type:JsonValue;"citations\_delta"constant"citations\_delta"constant

Accepts one of the following:

CITATIONS\_DELTA("citations\_delta")

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classContentBlock:A class that can be one of several variants.union

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

classContentBlockParam:A class that can be one of several variants.union

Regular text content.

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classThinkingBlockParam:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlockParam:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlockParam:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolResultBlockParam:

toolUseId:String

type:JsonValue;"tool\_result"constant"tool\_result"constant

Accepts one of the following:

TOOL\_RESULT("tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

content:Optional<Content>

Accepts one of the following:

String

List<Block>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

isError:Optional<Boolean>

classServerToolUseBlockParam:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classWebSearchToolResultBlockParam:

content:[WebSearchToolResultBlockParamContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_param_content)

Accepts one of the following:

List<[WebSearchResultBlockParam](https://platform.claude.com/docs/en/api/messages#web_search_result_block_param)>

encryptedContent:String

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

pageAge:Optional<String>

classWebSearchToolRequestError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classContentBlockSourceContent:A class that can be one of several variants.union

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classInputJsonDelta:

partialJson:String

type:JsonValue;"input\_json\_delta"constant"input\_json\_delta"constant

Accepts one of the following:

INPUT\_JSON\_DELTA("input\_json\_delta")

classMessage:

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

classMessageCountTokensTool:A class that can be one of several variants.union

classTool:

inputSchema:InputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.

This defines the shape of the `input` that your tool accepts and that the model will produce.

type:JsonValue;"object"constant"object"constant

Accepts one of the following:

OBJECT("object")

properties:Optional<Properties>

required:Optional<List<String>>

name:String

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

maxLength128

minLength1

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

description:Optional<String>

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

type:Optional<Type>

Accepts one of the following:

CUSTOM("custom")

classToolBash20250124:

name:JsonValue;"bash"constant"bash"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

BASH("bash")

type:JsonValue;"bash\_20250124"constant"bash\_20250124"constant

Accepts one of the following:

BASH\_20250124("bash\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250124:

name:JsonValue;"str\_replace\_editor"constant"str\_replace\_editor"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_EDITOR("str\_replace\_editor")

type:JsonValue;"text\_editor\_20250124"constant"text\_editor\_20250124"constant

Accepts one of the following:

TEXT\_EDITOR\_20250124("text\_editor\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250429:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250429"constant"text\_editor\_20250429"constant

Accepts one of the following:

TEXT\_EDITOR\_20250429("text\_editor\_20250429")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250728:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250728"constant"text\_editor\_20250728"constant

Accepts one of the following:

TEXT\_EDITOR\_20250728("text\_editor\_20250728")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxCharacters:Optional<Long>

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

classWebSearchTool20250305:

name:JsonValue;"web\_search"constant"web\_search"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"web\_search\_20250305"constant"web\_search\_20250305"constant

Accepts one of the following:

WEB\_SEARCH\_20250305("web\_search\_20250305")

allowedDomains:Optional<List<String>>

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

blockedDomains:Optional<List<String>>

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxUses:Optional<Long>

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

userLocation:Optional<UserLocation>

Parameters for the user's location. Used to provide more relevant search results.

type:JsonValue;"approximate"constant"approximate"constant

Accepts one of the following:

APPROXIMATE("approximate")

city:Optional<String>

The city of the user.

maxLength255

minLength1

country:Optional<String>

The two letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the user.

maxLength2

minLength2

region:Optional<String>

The region of the user.

maxLength255

minLength1

timezone:Optional<String>

The [IANA timezone](https://nodatime.org/TimeZones) of the user.

maxLength255

minLength1

classMessageDeltaUsage:

cacheCreationInputTokens:Optional<Long>

The cumulative number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The cumulative number of input tokens read from the cache.

minimum0

inputTokens:Optional<Long>

The cumulative number of input tokens which were used.

minimum0

outputTokens:Long

The cumulative number of output tokens which were used.

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

classMessageParam:

content:Content

Accepts one of the following:

String

List<[ContentBlockParam](https://platform.claude.com/docs/en/api/messages#content_block_param)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classThinkingBlockParam:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlockParam:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlockParam:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolResultBlockParam:

toolUseId:String

type:JsonValue;"tool\_result"constant"tool\_result"constant

Accepts one of the following:

TOOL\_RESULT("tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

content:Optional<Content>

Accepts one of the following:

String

List<Block>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

isError:Optional<Boolean>

classServerToolUseBlockParam:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classWebSearchToolResultBlockParam:

content:[WebSearchToolResultBlockParamContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_param_content)

Accepts one of the following:

List<[WebSearchResultBlockParam](https://platform.claude.com/docs/en/api/messages#web_search_result_block_param)>

encryptedContent:String

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

pageAge:Optional<String>

classWebSearchToolRequestError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

role:Role

Accepts one of the following:

USER("user")

ASSISTANT("assistant")

classMessageTokensCount:

inputTokens:Long

The total number of tokens across the provided list of messages, system prompt, and tools.

classMetadata:

userId:Optional<String>

An external identifier for the user who is associated with the request.

This should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number.

maxLength256

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classRawContentBlockDelta:A class that can be one of several variants.union

classTextDelta:

text:String

type:JsonValue;"text\_delta"constant"text\_delta"constant

Accepts one of the following:

TEXT\_DELTA("text\_delta")

classInputJsonDelta:

partialJson:String

type:JsonValue;"input\_json\_delta"constant"input\_json\_delta"constant

Accepts one of the following:

INPUT\_JSON\_DELTA("input\_json\_delta")

classCitationsDelta:

citation:Citation

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

type:JsonValue;"citations\_delta"constant"citations\_delta"constant

Accepts one of the following:

CITATIONS\_DELTA("citations\_delta")

classThinkingDelta:

thinking:String

type:JsonValue;"thinking\_delta"constant"thinking\_delta"constant

Accepts one of the following:

THINKING\_DELTA("thinking\_delta")

classSignatureDelta:

signature:String

type:JsonValue;"signature\_delta"constant"signature\_delta"constant

Accepts one of the following:

SIGNATURE\_DELTA("signature\_delta")

classRawContentBlockDeltaEvent:

delta:[RawContentBlockDelta](https://platform.claude.com/docs/en/api/messages#raw_content_block_delta)

Accepts one of the following:

classTextDelta:

text:String

type:JsonValue;"text\_delta"constant"text\_delta"constant

Accepts one of the following:

TEXT\_DELTA("text\_delta")

classInputJsonDelta:

partialJson:String

type:JsonValue;"input\_json\_delta"constant"input\_json\_delta"constant

Accepts one of the following:

INPUT\_JSON\_DELTA("input\_json\_delta")

classCitationsDelta:

citation:Citation

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

type:JsonValue;"citations\_delta"constant"citations\_delta"constant

Accepts one of the following:

CITATIONS\_DELTA("citations\_delta")

classThinkingDelta:

thinking:String

type:JsonValue;"thinking\_delta"constant"thinking\_delta"constant

Accepts one of the following:

THINKING\_DELTA("thinking\_delta")

classSignatureDelta:

signature:String

type:JsonValue;"signature\_delta"constant"signature\_delta"constant

Accepts one of the following:

SIGNATURE\_DELTA("signature\_delta")

index:Long

type:JsonValue;"content\_block\_delta"constant"content\_block\_delta"constant

Accepts one of the following:

CONTENT\_BLOCK\_DELTA("content\_block\_delta")

classRawContentBlockStartEvent:

contentBlock:ContentBlock

Accepts one of the following:

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

index:Long

type:JsonValue;"content\_block\_start"constant"content\_block\_start"constant

Accepts one of the following:

CONTENT\_BLOCK\_START("content\_block\_start")

classRawContentBlockStopEvent:

index:Long

type:JsonValue;"content\_block\_stop"constant"content\_block\_stop"constant

Accepts one of the following:

CONTENT\_BLOCK\_STOP("content\_block\_stop")

classRawMessageDeltaEvent:

delta:Delta

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

Accepts one of the following:

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

stopSequence:Optional<String>

type:JsonValue;"message\_delta"constant"message\_delta"constant

Accepts one of the following:

MESSAGE\_DELTA("message\_delta")

usage:[MessageDeltaUsage](https://platform.claude.com/docs/en/api/messages#message_delta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreationInputTokens:Optional<Long>

The cumulative number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The cumulative number of input tokens read from the cache.

minimum0

inputTokens:Optional<Long>

The cumulative number of input tokens which were used.

minimum0

outputTokens:Long

The cumulative number of output tokens which were used.

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

classRawMessageStartEvent:

message:[Message](https://platform.claude.com/docs/en/api/messages#message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

type:JsonValue;"message\_start"constant"message\_start"constant

Accepts one of the following:

MESSAGE\_START("message\_start")

classRawMessageStopEvent:

type:JsonValue;"message\_stop"constant"message\_stop"constant

Accepts one of the following:

MESSAGE\_STOP("message\_stop")

classRawMessageStreamEvent:A class that can be one of several variants.union

classRawMessageStartEvent:

message:[Message](https://platform.claude.com/docs/en/api/messages#message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

type:JsonValue;"message\_start"constant"message\_start"constant

Accepts one of the following:

MESSAGE\_START("message\_start")

classRawMessageDeltaEvent:

delta:Delta

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

Accepts one of the following:

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

stopSequence:Optional<String>

type:JsonValue;"message\_delta"constant"message\_delta"constant

Accepts one of the following:

MESSAGE\_DELTA("message\_delta")

usage:[MessageDeltaUsage](https://platform.claude.com/docs/en/api/messages#message_delta_usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreationInputTokens:Optional<Long>

The cumulative number of input tokens used to create the cache entry.

minimum0

cacheReadInputTokens:Optional<Long>

The cumulative number of input tokens read from the cache.

minimum0

inputTokens:Optional<Long>

The cumulative number of input tokens which were used.

minimum0

outputTokens:Long

The cumulative number of output tokens which were used.

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

classRawMessageStopEvent:

type:JsonValue;"message\_stop"constant"message\_stop"constant

Accepts one of the following:

MESSAGE\_STOP("message\_stop")

classRawContentBlockStartEvent:

contentBlock:ContentBlock

Accepts one of the following:

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

index:Long

type:JsonValue;"content\_block\_start"constant"content\_block\_start"constant

Accepts one of the following:

CONTENT\_BLOCK\_START("content\_block\_start")

classRawContentBlockDeltaEvent:

delta:[RawContentBlockDelta](https://platform.claude.com/docs/en/api/messages#raw_content_block_delta)

Accepts one of the following:

classTextDelta:

text:String

type:JsonValue;"text\_delta"constant"text\_delta"constant

Accepts one of the following:

TEXT\_DELTA("text\_delta")

classInputJsonDelta:

partialJson:String

type:JsonValue;"input\_json\_delta"constant"input\_json\_delta"constant

Accepts one of the following:

INPUT\_JSON\_DELTA("input\_json\_delta")

classCitationsDelta:

citation:Citation

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

type:JsonValue;"citations\_delta"constant"citations\_delta"constant

Accepts one of the following:

CITATIONS\_DELTA("citations\_delta")

classThinkingDelta:

thinking:String

type:JsonValue;"thinking\_delta"constant"thinking\_delta"constant

Accepts one of the following:

THINKING\_DELTA("thinking\_delta")

classSignatureDelta:

signature:String

type:JsonValue;"signature\_delta"constant"signature\_delta"constant

Accepts one of the following:

SIGNATURE\_DELTA("signature\_delta")

index:Long

type:JsonValue;"content\_block\_delta"constant"content\_block\_delta"constant

Accepts one of the following:

CONTENT\_BLOCK\_DELTA("content\_block\_delta")

classRawContentBlockStopEvent:

index:Long

type:JsonValue;"content\_block\_stop"constant"content\_block\_stop"constant

Accepts one of the following:

CONTENT\_BLOCK\_STOP("content\_block\_stop")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classRedactedThinkingBlockParam:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classServerToolUsage:

webSearchRequests:Long

The number of web search tool requests.

minimum0

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classServerToolUseBlockParam:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classSignatureDelta:

signature:String

type:JsonValue;"signature\_delta"constant"signature\_delta"constant

Accepts one of the following:

SIGNATURE\_DELTA("signature\_delta")

enum classStopReason:

END\_TURN("end\_turn")

MAX\_TOKENS("max\_tokens")

STOP\_SEQUENCE("stop\_sequence")

TOOL\_USE("tool\_use")

PAUSE\_TURN("pause\_turn")

REFUSAL("refusal")

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classTextCitation:A class that can be one of several variants.union

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classTextCitationParam:A class that can be one of several variants.union

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classTextDelta:

text:String

type:JsonValue;"text\_delta"constant"text\_delta"constant

Accepts one of the following:

TEXT\_DELTA("text\_delta")

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classThinkingBlockParam:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classThinkingConfigDisabled:

type:JsonValue;"disabled"constant"disabled"constant

Accepts one of the following:

DISABLED("disabled")

classThinkingConfigEnabled:

budgetTokens:Long

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

type:JsonValue;"enabled"constant"enabled"constant

Accepts one of the following:

ENABLED("enabled")

classThinkingConfigParam:A class that can be one of several variants.union

Configuration for enabling Claude's extended thinking.

When enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

classThinkingConfigEnabled:

budgetTokens:Long

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

type:JsonValue;"enabled"constant"enabled"constant

Accepts one of the following:

ENABLED("enabled")

classThinkingConfigDisabled:

type:JsonValue;"disabled"constant"disabled"constant

Accepts one of the following:

DISABLED("disabled")

classThinkingDelta:

thinking:String

type:JsonValue;"thinking\_delta"constant"thinking\_delta"constant

Accepts one of the following:

THINKING\_DELTA("thinking\_delta")

classTool:

inputSchema:InputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.

This defines the shape of the `input` that your tool accepts and that the model will produce.

type:JsonValue;"object"constant"object"constant

Accepts one of the following:

OBJECT("object")

properties:Optional<Properties>

required:Optional<List<String>>

name:String

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

maxLength128

minLength1

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

description:Optional<String>

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

type:Optional<Type>

Accepts one of the following:

CUSTOM("custom")

classToolBash20250124:

name:JsonValue;"bash"constant"bash"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

BASH("bash")

type:JsonValue;"bash\_20250124"constant"bash\_20250124"constant

Accepts one of the following:

BASH\_20250124("bash\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolChoice:A class that can be one of several variants.union

How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.

classToolChoiceAuto:

The model will automatically decide whether to use tools.

type:JsonValue;"auto"constant"auto"constant

Accepts one of the following:

AUTO("auto")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

classToolChoiceAny:

The model will use any available tools.

type:JsonValue;"any"constant"any"constant

Accepts one of the following:

ANY("any")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

classToolChoiceTool:

The model will use the specified tool with `tool_choice.name`.

name:String

The name of the tool to use.

type:JsonValue;"tool"constant"tool"constant

Accepts one of the following:

TOOL("tool")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

classToolChoiceNone:

The model will not be allowed to use tools.

type:JsonValue;"none"constant"none"constant

Accepts one of the following:

NONE("none")

classToolChoiceAny:

The model will use any available tools.

type:JsonValue;"any"constant"any"constant

Accepts one of the following:

ANY("any")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

classToolChoiceAuto:

The model will automatically decide whether to use tools.

type:JsonValue;"auto"constant"auto"constant

Accepts one of the following:

AUTO("auto")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

classToolChoiceNone:

The model will not be allowed to use tools.

type:JsonValue;"none"constant"none"constant

Accepts one of the following:

NONE("none")

classToolChoiceTool:

The model will use the specified tool with `tool_choice.name`.

name:String

The name of the tool to use.

type:JsonValue;"tool"constant"tool"constant

Accepts one of the following:

TOOL("tool")

disableParallelToolUse:Optional<Boolean>

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

classToolResultBlockParam:

toolUseId:String

type:JsonValue;"tool\_result"constant"tool\_result"constant

Accepts one of the following:

TOOL\_RESULT("tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

content:Optional<Content>

Accepts one of the following:

String

List<Block>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classSearchResultBlockParam:

content:List<[TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)>

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

source:String

title:String

type:JsonValue;"search\_result"constant"search\_result"constant

Accepts one of the following:

SEARCH\_RESULT("search\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

classDocumentBlockParam:

source:Source

Accepts one of the following:

classBase64PdfSource:

data:String

mediaType:JsonValue;"application/pdf"constant"application/pdf"constant

Accepts one of the following:

APPLICATION\_PDF("application/pdf")

type:JsonValue;"base64"constant"base64"constant

Accepts one of the following:

BASE64("base64")

classPlainTextSource:

data:String

mediaType:JsonValue;"text/plain"constant"text/plain"constant

Accepts one of the following:

TEXT\_PLAIN("text/plain")

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

classContentBlockSource:

content:Content

Accepts one of the following:

String

List<[ContentBlockSourceContent](https://platform.claude.com/docs/en/api/messages#content_block_source_content)>

Accepts one of the following:

classTextBlockParam:

text:String

type:JsonValue;"text"constant"text"constant

Accepts one of the following:

TEXT("text")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<List<[TextCitationParam](https://platform.claude.com/docs/en/api/messages#text_citation_param)>>

Accepts one of the following:

classCitationCharLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocationParam:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationWebSearchResultLocationParam:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationSearchResultLocationParam:

citedText:String

endBlockIndex:Long

searchResultIndex:Long

source:String

startBlockIndex:Long

title:Optional<String>

type:JsonValue;"search\_result\_location"constant"search\_result\_location"constant

Accepts one of the following:

SEARCH\_RESULT\_LOCATION("search\_result\_location")

classImageBlockParam:

source:Source

Accepts one of the following:

classBase64ImageSource:

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"image"constant"image"constant

Accepts one of the following:

IMAGE("image")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

type:JsonValue;"content"constant"content"constant

Accepts one of the following:

CONTENT("content")

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

type:JsonValue;"document"constant"document"constant

Accepts one of the following:

DOCUMENT("document")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

citations:Optional<[CitationsConfigParam](https://platform.claude.com/docs/en/api/messages#citations_config_param)>

enabled:Optional<Boolean>

context:Optional<String>

title:Optional<String>

isError:Optional<Boolean>

classToolTextEditor20250124:

name:JsonValue;"str\_replace\_editor"constant"str\_replace\_editor"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_EDITOR("str\_replace\_editor")

type:JsonValue;"text\_editor\_20250124"constant"text\_editor\_20250124"constant

Accepts one of the following:

TEXT\_EDITOR\_20250124("text\_editor\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250429:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250429"constant"text\_editor\_20250429"constant

Accepts one of the following:

TEXT\_EDITOR\_20250429("text\_editor\_20250429")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250728:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250728"constant"text\_editor\_20250728"constant

Accepts one of the following:

TEXT\_EDITOR\_20250728("text\_editor\_20250728")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxCharacters:Optional<Long>

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

classToolUnion:A class that can be one of several variants.union

classTool:

inputSchema:InputSchema

[JSON schema](https://json-schema.org/draft/2020-12) for this tool's input.

This defines the shape of the `input` that your tool accepts and that the model will produce.

type:JsonValue;"object"constant"object"constant

Accepts one of the following:

OBJECT("object")

properties:Optional<Properties>

required:Optional<List<String>>

name:String

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

maxLength128

minLength1

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

description:Optional<String>

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

type:Optional<Type>

Accepts one of the following:

CUSTOM("custom")

classToolBash20250124:

name:JsonValue;"bash"constant"bash"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

BASH("bash")

type:JsonValue;"bash\_20250124"constant"bash\_20250124"constant

Accepts one of the following:

BASH\_20250124("bash\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250124:

name:JsonValue;"str\_replace\_editor"constant"str\_replace\_editor"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_EDITOR("str\_replace\_editor")

type:JsonValue;"text\_editor\_20250124"constant"text\_editor\_20250124"constant

Accepts one of the following:

TEXT\_EDITOR\_20250124("text\_editor\_20250124")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250429:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250429"constant"text\_editor\_20250429"constant

Accepts one of the following:

TEXT\_EDITOR\_20250429("text\_editor\_20250429")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classToolTextEditor20250728:

name:JsonValue;"str\_replace\_based\_edit\_tool"constant"str\_replace\_based\_edit\_tool"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

STR\_REPLACE\_BASED\_EDIT\_TOOL("str\_replace\_based\_edit\_tool")

type:JsonValue;"text\_editor\_20250728"constant"text\_editor\_20250728"constant

Accepts one of the following:

TEXT\_EDITOR\_20250728("text\_editor\_20250728")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxCharacters:Optional<Long>

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

classWebSearchTool20250305:

name:JsonValue;"web\_search"constant"web\_search"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"web\_search\_20250305"constant"web\_search\_20250305"constant

Accepts one of the following:

WEB\_SEARCH\_20250305("web\_search\_20250305")

allowedDomains:Optional<List<String>>

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

blockedDomains:Optional<List<String>>

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxUses:Optional<Long>

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

userLocation:Optional<UserLocation>

Parameters for the user's location. Used to provide more relevant search results.

type:JsonValue;"approximate"constant"approximate"constant

Accepts one of the following:

APPROXIMATE("approximate")

city:Optional<String>

The city of the user.

maxLength255

minLength1

country:Optional<String>

The two letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the user.

maxLength2

minLength2

region:Optional<String>

The region of the user.

maxLength255

minLength1

timezone:Optional<String>

The [IANA timezone](https://nodatime.org/TimeZones) of the user.

maxLength255

minLength1

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classToolUseBlockParam:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classUrlImageSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

classUrlPdfSource:

type:JsonValue;"url"constant"url"constant

Accepts one of the following:

URL("url")

url:String

classUsage:

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

webSearchRequests:Long

The number of web search tool requests.

minimum0

serviceTier:Optional<ServiceTier>

If the request used the priority, standard, or batch tier.

Accepts one of the following:

STANDARD("standard")

PRIORITY("priority")

BATCH("batch")

classWebSearchResultBlock:

encryptedContent:String

pageAge:Optional<String>

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

classWebSearchResultBlockParam:

encryptedContent:String

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

pageAge:Optional<String>

classWebSearchTool20250305:

name:JsonValue;"web\_search"constant"web\_search"constant

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"web\_search\_20250305"constant"web\_search\_20250305"constant

Accepts one of the following:

WEB\_SEARCH\_20250305("web\_search\_20250305")

allowedDomains:Optional<List<String>>

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

blockedDomains:Optional<List<String>>

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

maxUses:Optional<Long>

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

userLocation:Optional<UserLocation>

Parameters for the user's location. Used to provide more relevant search results.

type:JsonValue;"approximate"constant"approximate"constant

Accepts one of the following:

APPROXIMATE("approximate")

city:Optional<String>

The city of the user.

maxLength255

minLength1

country:Optional<String>

The two letter [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the user.

maxLength2

minLength2

region:Optional<String>

The region of the user.

maxLength255

minLength1

timezone:Optional<String>

The [IANA timezone](https://nodatime.org/TimeZones) of the user.

maxLength255

minLength1

classWebSearchToolRequestError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

classWebSearchToolResultBlockContent:A class that can be one of several variants.union

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

encryptedContent:String

pageAge:Optional<String>

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

classWebSearchToolResultBlockParam:

content:[WebSearchToolResultBlockParamContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_param_content)

Accepts one of the following:

List<[WebSearchResultBlockParam](https://platform.claude.com/docs/en/api/messages#web_search_result_block_param)>

encryptedContent:String

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

pageAge:Optional<String>

classWebSearchToolRequestError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

toolUseId:String

type:JsonValue;"web\_search\_tool\_result"constant"web\_search\_tool\_result"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT("web\_search\_tool\_result")

cacheControl:Optional<[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)>

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

classWebSearchToolResultBlockParamContent:A class that can be one of several variants.union

List<[WebSearchResultBlockParam](https://platform.claude.com/docs/en/api/messages#web_search_result_block_param)>

encryptedContent:String

title:String

type:JsonValue;"web\_search\_result"constant"web\_search\_result"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT("web\_search\_result")

url:String

pageAge:Optional<String>

classWebSearchToolRequestError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

#### MessagesBatches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/create)

messages().batches().create(BatchCreateParamsparams, RequestOptionsrequestOptions=RequestOptions.none()):[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch)

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/retrieve)

messages().batches().retrieve(BatchRetrieveParamsparams=BatchRetrieveParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch)

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/messages/batches/list)

messages().batches().list(BatchListParamsparams=BatchListParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):BatchListPage

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/cancel)

messages().batches().cancel(BatchCancelParamsparams=BatchCancelParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch)

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/delete)

messages().batches().delete(BatchDeleteParamsparams=BatchDeleteParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[DeletedMessageBatch](https://platform.claude.com/docs/en/api/messages#deleted_message_batch)

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/messages/batches/results)

messages().batches().resultsStreaming(BatchResultsParamsparams=BatchResultsParams.none(), RequestOptionsrequestOptions=RequestOptions.none()):[MessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/messages#message_batch_individual_response)

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

classDeletedMessageBatch:

id:String

ID of the Message Batch.

type:JsonValue;"message\_batch\_deleted"constant"message\_batch\_deleted"constant

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

MESSAGE\_BATCH\_DELETED("message\_batch\_deleted")

classMessageBatch:

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

requestCounts:[MessageBatchRequestCounts](https://platform.claude.com/docs/en/api/messages#message_batch_request_counts)

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

classMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classMessageBatchErroredResult:

error:[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

error:[ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

classInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classApiErrorObject:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classOverloadedError:

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

classMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classMessageBatchIndividualResponse:

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

customId:String

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

result:[MessageBatchResult](https://platform.claude.com/docs/en/api/messages#message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

classMessageBatchSucceededResult:

message:[Message](https://platform.claude.com/docs/en/api/messages#message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

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

classMessageBatchErroredResult:

error:[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

error:[ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

classInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classApiErrorObject:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classOverloadedError:

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

classMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classMessageBatchRequestCounts:

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

classMessageBatchResult:A class that can be one of several variants.union

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

classMessageBatchSucceededResult:

message:[Message](https://platform.claude.com/docs/en/api/messages#message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

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

classMessageBatchErroredResult:

error:[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

error:[ErrorObject](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

classInvalidRequestError:

message:String

type:JsonValue;"invalid\_request\_error"constant"invalid\_request\_error"constant

Accepts one of the following:

INVALID\_REQUEST\_ERROR("invalid\_request\_error")

classAuthenticationError:

message:String

type:JsonValue;"authentication\_error"constant"authentication\_error"constant

Accepts one of the following:

AUTHENTICATION\_ERROR("authentication\_error")

classBillingError:

message:String

type:JsonValue;"billing\_error"constant"billing\_error"constant

Accepts one of the following:

BILLING\_ERROR("billing\_error")

classPermissionError:

message:String

type:JsonValue;"permission\_error"constant"permission\_error"constant

Accepts one of the following:

PERMISSION\_ERROR("permission\_error")

classNotFoundError:

message:String

type:JsonValue;"not\_found\_error"constant"not\_found\_error"constant

Accepts one of the following:

NOT\_FOUND\_ERROR("not\_found\_error")

classRateLimitError:

message:String

type:JsonValue;"rate\_limit\_error"constant"rate\_limit\_error"constant

Accepts one of the following:

RATE\_LIMIT\_ERROR("rate\_limit\_error")

classGatewayTimeoutError:

message:String

type:JsonValue;"timeout\_error"constant"timeout\_error"constant

Accepts one of the following:

TIMEOUT\_ERROR("timeout\_error")

classApiErrorObject:

message:String

type:JsonValue;"api\_error"constant"api\_error"constant

Accepts one of the following:

API\_ERROR("api\_error")

classOverloadedError:

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

classMessageBatchCanceledResult:

type:JsonValue;"canceled"constant"canceled"constant

Accepts one of the following:

CANCELED("canceled")

classMessageBatchExpiredResult:

type:JsonValue;"expired"constant"expired"constant

Accepts one of the following:

EXPIRED("expired")

classMessageBatchSucceededResult:

message:[Message](https://platform.claude.com/docs/en/api/messages#message)

id:String

Unique object identifier.

The format and length of IDs may change over time.

content:List<[ContentBlock](https://platform.claude.com/docs/en/api/messages#content_block)>

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

classTextBlock:

citations:Optional<List<[TextCitation](https://platform.claude.com/docs/en/api/messages#text_citation)>>

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

classCitationCharLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endCharIndex:Long

fileId:Optional<String>

startCharIndex:Long

type:JsonValue;"char\_location"constant"char\_location"constant

Accepts one of the following:

CHAR\_LOCATION("char\_location")

classCitationPageLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endPageNumber:Long

fileId:Optional<String>

startPageNumber:Long

type:JsonValue;"page\_location"constant"page\_location"constant

Accepts one of the following:

PAGE\_LOCATION("page\_location")

classCitationContentBlockLocation:

citedText:String

documentIndex:Long

documentTitle:Optional<String>

endBlockIndex:Long

fileId:Optional<String>

startBlockIndex:Long

type:JsonValue;"content\_block\_location"constant"content\_block\_location"constant

Accepts one of the following:

CONTENT\_BLOCK\_LOCATION("content\_block\_location")

classCitationsWebSearchResultLocation:

citedText:String

encryptedIndex:String

title:Optional<String>

type:JsonValue;"web\_search\_result\_location"constant"web\_search\_result\_location"constant

Accepts one of the following:

WEB\_SEARCH\_RESULT\_LOCATION("web\_search\_result\_location")

url:String

classCitationsSearchResultLocation:

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

classThinkingBlock:

signature:String

thinking:String

type:JsonValue;"thinking"constant"thinking"constant

Accepts one of the following:

THINKING("thinking")

classRedactedThinkingBlock:

data:String

type:JsonValue;"redacted\_thinking"constant"redacted\_thinking"constant

Accepts one of the following:

REDACTED\_THINKING("redacted\_thinking")

classToolUseBlock:

id:String

input:Input

name:String

type:JsonValue;"tool\_use"constant"tool\_use"constant

Accepts one of the following:

TOOL\_USE("tool\_use")

classServerToolUseBlock:

id:String

input:Input

name:JsonValue;"web\_search"constant"web\_search"constant

Accepts one of the following:

WEB\_SEARCH("web\_search")

type:JsonValue;"server\_tool\_use"constant"server\_tool\_use"constant

Accepts one of the following:

SERVER\_TOOL\_USE("server\_tool\_use")

classWebSearchToolResultBlock:

content:[WebSearchToolResultBlockContent](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

classWebSearchToolResultError:

errorCode:ErrorCode

Accepts one of the following:

INVALID\_TOOL\_INPUT("invalid\_tool\_input")

UNAVAILABLE("unavailable")

MAX\_USES\_EXCEEDED("max\_uses\_exceeded")

TOO\_MANY\_REQUESTS("too\_many\_requests")

QUERY\_TOO\_LONG("query\_too\_long")

type:JsonValue;"web\_search\_tool\_result\_error"constant"web\_search\_tool\_result\_error"constant

Accepts one of the following:

WEB\_SEARCH\_TOOL\_RESULT\_ERROR("web\_search\_tool\_result\_error")

List<[WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)>

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

stopReason:Optional<[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)>

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

stopSequence:Optional<String>

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

type:JsonValue;"message"constant"message"constant

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

MESSAGE("message")

usage:[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

cacheCreation:Optional<[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)>

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

serverToolUse:Optional<[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)>

The number of server tool requests.

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