---
url: "https://platform.claude.com/docs/en/api/go/messages/count_tokens"
title: "Count tokens in a Message - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fmessages%2Fcount_tokens)

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

Messages

Count tokens

Copy page

Go

# Count tokens in a Message

client.Messages.CountTokens(ctx, body)(\*[MessageTokensCount](https://platform.claude.com/docs/en/api/messages#message_tokens_count), error)

post/v1/messages/count\_tokens

Count the number of tokens in a Message.

The Token Count API can be used to count the number of tokens in a Message, including tools, images, and documents, without creating it.

Learn more about token counting in our [user guide](https://docs.claude.com/en/docs/build-with-claude/token-counting)

##### ParametersExpand Collapse

bodyMessageCountTokensParams

Messagesparam.Field\[\[\][MessageParamResp](https://platform.claude.com/docs/en/api/messages#message_param)\]

Input messages.

Our models are trained to operate on alternating `user` and `assistant` conversational turns. When creating a new `Message`, you specify the prior conversational turns with the `messages` parameter, and the model then generates the next `Message` in the conversation. Consecutive `user` or `assistant` turns in your request will be combined into a single turn.

Each input message must be an object with a `role` and `content`. You can specify a single `user`-role message, or you can include multiple `user` and `assistant` messages.

If the final message uses the `assistant` role, the response content will continue immediately from the content in that message. This can be used to constrain part of the model's response.

Example with a single `user` message:

```
[{"role": "user", "content": "Hello, Claude"}]
```

Example with multiple conversational turns:

```
[\
  {"role": "user", "content": "Hello there."},\
  {"role": "assistant", "content": "Hi, I'm Claude. How can I help you?"},\
  {"role": "user", "content": "Can you explain LLMs in plain English?"},\
]
```

Example with a partially-filled response from Claude:

```
[\
  {"role": "user", "content": "What's the Greek name for Sun? (A) Sol (B) Helios (C) Sun"},\
  {"role": "assistant", "content": "The best answer is ("},\
]
```

Each input message `content` may be either a single `string` or an array of content blocks, where each block has a specific `type`. Using a `string` for `content` is shorthand for an array of one content block of type `"text"`. The following input messages are equivalent:

```
{"role": "user", "content": "Hello, Claude"}
```

```
{"role": "user", "content": [{"type": "text", "text": "Hello, Claude"}]}
```

See [input examples](https://docs.claude.com/en/api/messages-examples).

Note that if you want to include a [system prompt](https://docs.claude.com/en/docs/system-prompts), you can use the top-level `system` parameter — there is no `"system"` role for input messages in the Messages API.

There is a limit of 100,000 messages in a single request.

Content\[\][ContentBlockParamUnionResp](https://platform.claude.com/docs/en/api/messages#content_block_param)

Accepts one of the following:

\[\][ContentBlockParamUnionResp](https://platform.claude.com/docs/en/api/messages#content_block_param)

Accepts one of the following:

type TextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type ImageBlockParamRespstruct{…}

SourceImageBlockParamSourceUnionResp

Accepts one of the following:

type Base64ImageSourcestruct{…}

Datastring

MediaTypeBase64ImageSourceMediaType

Accepts one of the following:

const Base64ImageSourceMediaTypeImageJPEGBase64ImageSourceMediaType = "image/jpeg"

const Base64ImageSourceMediaTypeImagePNGBase64ImageSourceMediaType = "image/png"

const Base64ImageSourceMediaTypeImageGIFBase64ImageSourceMediaType = "image/gif"

const Base64ImageSourceMediaTypeImageWebPBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type URLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type DocumentBlockParamRespstruct{…}

SourceDocumentBlockParamSourceUnionResp

Accepts one of the following:

type Base64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type PlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type ContentBlockSourcestruct{…}

ContentContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][ContentBlockSourceContentItemUnion](https://platform.claude.com/docs/en/api/messages#content_block_source_content)

Accepts one of the following:

type TextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type ImageBlockParamRespstruct{…}

SourceImageBlockParamSourceUnionResp

Accepts one of the following:

type Base64ImageSourcestruct{…}

Datastring

MediaTypeBase64ImageSourceMediaType

Accepts one of the following:

const Base64ImageSourceMediaTypeImageJPEGBase64ImageSourceMediaType = "image/jpeg"

const Base64ImageSourceMediaTypeImagePNGBase64ImageSourceMediaType = "image/png"

const Base64ImageSourceMediaTypeImageGIFBase64ImageSourceMediaType = "image/gif"

const Base64ImageSourceMediaTypeImageWebPBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type URLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type URLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations[CitationsConfigParamResp](https://platform.claude.com/docs/en/api/messages#citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

type SearchResultBlockParamRespstruct{…}

Content\[\][TextBlockParamResp](https://platform.claude.com/docs/en/api/messages#text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

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

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations[CitationsConfigParamResp](https://platform.claude.com/docs/en/api/messages#citations_config_param)optional

Enabledbooloptional

type ThinkingBlockParamRespstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type RedactedThinkingBlockParamRespstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type ToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type ToolResultBlockParamRespstruct{…}

ToolUseIDstring

TypeToolResult

Accepts one of the following:

const ToolResultToolResultToolResult = "tool\_result"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Content\[\]ToolResultBlockParamContentUnionRespoptional

Accepts one of the following:

\[\]ToolResultBlockParamContentUnionResp

Accepts one of the following:

type TextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type ImageBlockParamRespstruct{…}

SourceImageBlockParamSourceUnionResp

Accepts one of the following:

type Base64ImageSourcestruct{…}

Datastring

MediaTypeBase64ImageSourceMediaType

Accepts one of the following:

const Base64ImageSourceMediaTypeImageJPEGBase64ImageSourceMediaType = "image/jpeg"

const Base64ImageSourceMediaTypeImagePNGBase64ImageSourceMediaType = "image/png"

const Base64ImageSourceMediaTypeImageGIFBase64ImageSourceMediaType = "image/gif"

const Base64ImageSourceMediaTypeImageWebPBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type URLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type SearchResultBlockParamRespstruct{…}

Content\[\][TextBlockParamResp](https://platform.claude.com/docs/en/api/messages#text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

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

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations[CitationsConfigParamResp](https://platform.claude.com/docs/en/api/messages#citations_config_param)optional

Enabledbooloptional

type DocumentBlockParamRespstruct{…}

SourceDocumentBlockParamSourceUnionResp

Accepts one of the following:

type Base64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type PlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type ContentBlockSourcestruct{…}

ContentContentBlockSourceContentUnion

Accepts one of the following:

string

\[\][ContentBlockSourceContentItemUnion](https://platform.claude.com/docs/en/api/messages#content_block_source_content)

Accepts one of the following:

type TextBlockParamRespstruct{…}

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

type ImageBlockParamRespstruct{…}

SourceImageBlockParamSourceUnionResp

Accepts one of the following:

type Base64ImageSourcestruct{…}

Datastring

MediaTypeBase64ImageSourceMediaType

Accepts one of the following:

const Base64ImageSourceMediaTypeImageJPEGBase64ImageSourceMediaType = "image/jpeg"

const Base64ImageSourceMediaTypeImagePNGBase64ImageSourceMediaType = "image/png"

const Base64ImageSourceMediaTypeImageGIFBase64ImageSourceMediaType = "image/gif"

const Base64ImageSourceMediaTypeImageWebPBase64ImageSourceMediaType = "image/webp"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type URLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeImage

Accepts one of the following:

const ImageImageImage = "image"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

TypeContent

Accepts one of the following:

const ContentContentContent = "content"

type URLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

TypeDocument

Accepts one of the following:

const DocumentDocumentDocument = "document"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations[CitationsConfigParamResp](https://platform.claude.com/docs/en/api/messages#citations_config_param)optional

Enabledbooloptional

Contextstringoptional

Titlestringoptional

IsErrorbooloptional

type ServerToolUseBlockParamRespstruct{…}

IDstring

Inputmap\[string,any\]

NameWebSearch

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type WebSearchToolResultBlockParamRespstruct{…}

Content[WebSearchToolResultBlockParamContentUnionResp](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_param_content)

Accepts one of the following:

\[\][WebSearchResultBlockParamResp](https://platform.claude.com/docs/en/api/messages#web_search_result_block_param)

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

type WebSearchToolRequestErrorstruct{…}

ErrorCodeWebSearchToolRequestErrorErrorCode

Accepts one of the following:

const WebSearchToolRequestErrorErrorCodeInvalidToolInputWebSearchToolRequestErrorErrorCode = "invalid\_tool\_input"

const WebSearchToolRequestErrorErrorCodeUnavailableWebSearchToolRequestErrorErrorCode = "unavailable"

const WebSearchToolRequestErrorErrorCodeMaxUsesExceededWebSearchToolRequestErrorErrorCode = "max\_uses\_exceeded"

const WebSearchToolRequestErrorErrorCodeTooManyRequestsWebSearchToolRequestErrorErrorCode = "too\_many\_requests"

const WebSearchToolRequestErrorErrorCodeQueryTooLongWebSearchToolRequestErrorErrorCode = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

ToolUseIDstring

TypeWebSearchToolResult

Accepts one of the following:

const WebSearchToolResultWebSearchToolResultWebSearchToolResult = "web\_search\_tool\_result"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

RoleMessageParamRole

Accepts one of the following:

const MessageParamRoleUserMessageParamRole = "user"

const MessageParamRoleAssistantMessageParamRole = "assistant"

Modelparam.Field\[Model\]

The model that will complete your prompt.

See [models](https://docs.anthropic.com/en/docs/models-overview) for additional details and options.

Systemparam.Field\[[MessageCountTokensParamsSystemUnion](https://platform.claude.com/docs/en/api/messages/count_tokens)\]optional

System prompt.

A system prompt is a way of providing context and instructions to Claude, such as specifying a particular goal or role. See our [guide to system prompts](https://docs.claude.com/en/docs/system-prompts).

string

type MessageCountTokensParamsSystemArray\[\][TextBlockParamResp](https://platform.claude.com/docs/en/api/messages#text_block_param)

Textstring

TypeText

Accepts one of the following:

const TextTextText = "text"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Citations\[\][TextCitationParamUnionResp](https://platform.claude.com/docs/en/api/messages#text_citation_param)optional

Accepts one of the following:

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationSearchResultLocationParamRespstruct{…}

CitedTextstring

EndBlockIndexint64

SearchResultIndexint64

Sourcestring

StartBlockIndexint64

Titlestring

TypeSearchResultLocation

Accepts one of the following:

const SearchResultLocationSearchResultLocationSearchResultLocation = "search\_result\_location"

Thinkingparam.Field\[[ThinkingConfigParamUnionResp](https://platform.claude.com/docs/en/api/messages#thinking_config_param)\]optional

Configuration for enabling Claude's extended thinking.

When enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

ToolChoiceparam.Field\[[ToolChoiceUnion](https://platform.claude.com/docs/en/api/messages#tool_choice)\]optional

How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.

Toolsparam.Field\[\[\][MessageCountTokensToolUnion](https://platform.claude.com/docs/en/api/messages#message_count_tokens_tool)\]optional

Definitions of tools that the model may use.

If you include `tools` in your API request, the model may return `tool_use` content blocks that represent the model's use of those tools. You can then run those tools using the tool input generated by the model and then optionally return results back to the model using `tool_result` content blocks.

There are two types of tools: **client tools** and **server tools**. The behavior described below applies to client tools. For [server tools](https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview#server-tools), see their individual documentation as each has its own behavior (e.g., the [web search tool](https://docs.claude.com/en/docs/agents-and-tools/tool-use/web-search-tool)).

Each tool definition includes:

- `name`: Name of the tool.
- `description`: Optional, but strongly-recommended description of the tool.
- `input_schema`: [JSON schema](https://json-schema.org/draft/2020-12) for the tool `input` shape that the model will produce in `tool_use` output content blocks.

For example, if you defined `tools` as:

```
[\
  {\
    "name": "get_stock_price",\
    "description": "Get the current stock price for a given ticker symbol.",\
    "input_schema": {\
      "type": "object",\
      "properties": {\
        "ticker": {\
          "type": "string",\
          "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."\
        }\
      },\
      "required": ["ticker"]\
    }\
  }\
]
```

And then asked the model "What's the S&P 500 at today?", the model might produce `tool_use` content blocks in the response like this:

```
[\
  {\
    "type": "tool_use",\
    "id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",\
    "name": "get_stock_price",\
    "input": { "ticker": "^GSPC" }\
  }\
]
```

You might then run your `get_stock_price` tool with `{"ticker": "^GSPC"}` as an input, and return the following back to the model in a subsequent `user` message:

```
[\
  {\
    "type": "tool_result",\
    "tool_use_id": "toolu_01D7FLrfh4GYq7yT1ULFeyMV",\
    "content": "259.75 USD"\
  }\
]
```

Tools can be used for workflows that include running client-side tools and functions, or more generally whenever you want the model to produce a particular JSON structure of output.

See our [guide](https://docs.claude.com/en/docs/tool-use) for more details.

type Toolstruct{…}

InputSchemaToolInputSchema

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

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

Descriptionstringoptional

Description of what this tool does.

Tool descriptions should be as detailed as possible. The more information that the model has about what the tool is and how to use it, the better it will perform. You can use natural language descriptions to reinforce important aspects of the tool input JSON schema.

TypeToolTypeoptional

Accepts one of the following:

const ToolTypeCustomToolType = "custom"

type ToolBash20250124struct{…}

NameBash

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const BashBashBash = "bash"

TypeBash20250124

Accepts one of the following:

const Bash20250124Bash20250124Bash20250124 = "bash\_20250124"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type ToolTextEditor20250124struct{…}

NameStrReplaceEditor

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceEditorStrReplaceEditorStrReplaceEditor = "str\_replace\_editor"

TypeTextEditor20250124

Accepts one of the following:

const TextEditor20250124TextEditor20250124TextEditor20250124 = "text\_editor\_20250124"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type ToolTextEditor20250429struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250429

Accepts one of the following:

const TextEditor20250429TextEditor20250429TextEditor20250429 = "text\_editor\_20250429"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

type ToolTextEditor20250728struct{…}

NameStrReplaceBasedEditTool

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const StrReplaceBasedEditToolStrReplaceBasedEditToolStrReplaceBasedEditTool = "str\_replace\_based\_edit\_tool"

TypeTextEditor20250728

Accepts one of the following:

const TextEditor20250728TextEditor20250728TextEditor20250728 = "text\_editor\_20250728"

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

MaxCharactersint64optional

Maximum number of characters to display when viewing a file. If not specified, defaults to displaying the full file.

minimum1

type WebSearchTool20250305struct{…}

NameWebSearch

Name of the tool.

This is how the tool will be called by the model and in `tool_use` blocks.

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeWebSearch20250305

Accepts one of the following:

const WebSearch20250305WebSearch20250305WebSearch20250305 = "web\_search\_20250305"

AllowedDomains\[\]stringoptional

If provided, only these domains will be included in results. Cannot be used alongside `blocked_domains`.

BlockedDomains\[\]stringoptional

If provided, these domains will never appear in results. Cannot be used alongside `allowed_domains`.

CacheControl[CacheControlEphemeral](https://platform.claude.com/docs/en/api/messages#cache_control_ephemeral)optional

Create a cache control breakpoint at this content block.

TypeEphemeral

Accepts one of the following:

const EphemeralEphemeralEphemeral = "ephemeral"

TTLCacheControlEphemeralTTLoptional

The time-to-live for the cache control breakpoint.

This may be one the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`.

Accepts one of the following:

const CacheControlEphemeralTTLTTL5mCacheControlEphemeralTTL = "5m"

const CacheControlEphemeralTTLTTL1hCacheControlEphemeralTTL = "1h"

MaxUsesint64optional

Maximum number of times the tool can be used in the API request.

exclusiveMinimum0

UserLocationWebSearchTool20250305UserLocationoptional

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

##### ReturnsExpand Collapse

type MessageTokensCountstruct{…}

InputTokensint64

The total number of tokens across the provided list of messages, system prompt, and tools.

Count tokens in a Message

Go

```
package main

import (
  "context"
  "fmt"

  "github.com/anthropics/anthropic-sdk-go"
  "github.com/anthropics/anthropic-sdk-go/option"
)

func main() {
  client := anthropic.NewClient(
    option.WithAPIKey("my-anthropic-api-key"),
  )
  messageTokensCount, err := client.Messages.CountTokens(context.TODO(), anthropic.MessageCountTokensParams{
    Messages: []anthropic.MessageParam{anthropic.MessageParam{
      Content: []anthropic.ContentBlockParamUnion{anthropic.ContentBlockParamUnion{
        OfText: &anthropic.TextBlockParam{Text: "What is a quaternion?", CacheControl: anthropic.CacheControlEphemeralParam{TTL: anthropic.CacheControlEphemeralTTLTTL5m}, Citations: []anthropic.TextCitationParamUnion{anthropic.TextCitationParamUnion{
          OfCharLocation: &anthropic.CitationCharLocationParam{CitedText: "cited_text", DocumentIndex: 0, DocumentTitle: anthropic.String("x"), EndCharIndex: 0, StartCharIndex: 0},
        }}},
      }},
      Role: anthropic.MessageParamRoleUser,
    }},
    Model: anthropic.ModelClaudeOpus4_5_20251101,
  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", messageTokensCount.InputTokens)
}
```

Response 200

```
{
  "input_tokens": 2095
}
```

##### Returns Examples

Response 200

```
{
  "input_tokens": 2095
}
```

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