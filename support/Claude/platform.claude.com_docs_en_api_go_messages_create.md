---
url: "https://platform.claude.com/docs/en/api/go/messages/create"
title: "Create a Message - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fmessages%2Fcreate)

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

Create

Copy page

Go

# Create a Message

client.Messages.New(ctx, body)(\*[Message](https://platform.claude.com/docs/en/api/messages#message), error)

post/v1/messages

Send a structured list of input messages with text and/or image content, and the model will generate the next message in the conversation.

The Messages API can be used for either single queries or stateless multi-turn conversations.

Learn more about the Messages API in our [user guide](https://docs.claude.com/en/docs/initial-setup)

##### ParametersExpand Collapse

bodyMessageNewParams

MaxTokensparam.Field\[int64\]

The maximum number of tokens to generate before stopping.

Note that our models may stop _before_ reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate.

Different models have different maximum values for this parameter. See [models](https://docs.claude.com/en/docs/models-overview) for details.

minimum1

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

Metadataparam.Field\[[Metadata](https://platform.claude.com/docs/en/api/messages#metadata)\]optional

An object describing metadata about the request.

ServiceTierparam.Field\[[MessageNewParamsServiceTier](https://platform.claude.com/docs/en/api/messages/create)\]optional

Determines whether to use priority capacity (if available) or standard capacity for this request.

Anthropic offers different levels of service for your API requests. See [service-tiers](https://docs.claude.com/en/api/service-tiers) for details.

const MessageNewParamsServiceTierAuto[MessageNewParamsServiceTier](https://platform.claude.com/docs/en/api/messages/create) = "auto"

const MessageNewParamsServiceTierStandardOnly[MessageNewParamsServiceTier](https://platform.claude.com/docs/en/api/messages/create) = "standard\_only"

StopSequencesparam.Field\[\[\]string\]optional

Custom text sequences that will cause the model to stop generating.

Our models will normally stop when they have naturally completed their turn, which will result in a response `stop_reason` of `"end_turn"`.

If you want the model to stop generating when it encounters custom strings of text, you can use the `stop_sequences` parameter. If the model encounters one of the custom sequences, the response `stop_reason` value will be `"stop_sequence"` and the response `stop_sequence` value will contain the matched stop sequence.

Systemparam.Field\[\[\][TextBlockParamResp](https://platform.claude.com/docs/en/api/messages#text_block_param)\]optional

System prompt.

A system prompt is a way of providing context and instructions to Claude, such as specifying a particular goal or role. See our [guide to system prompts](https://docs.claude.com/en/docs/system-prompts).

\[\][TextBlockParam](https://platform.claude.com/docs/en/api/messages#text_block_param)

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

Temperatureparam.Field\[float64\]optional

Amount of randomness injected into the response.

Defaults to `1.0`. Ranges from `0.0` to `1.0`. Use `temperature` closer to `0.0` for analytical / multiple choice, and closer to `1.0` for creative and generative tasks.

Note that even with `temperature` of `0.0`, the results will not be fully deterministic.

maximum1

minimum0

Thinkingparam.Field\[[ThinkingConfigParamUnionResp](https://platform.claude.com/docs/en/api/messages#thinking_config_param)\]optional

Configuration for enabling Claude's extended thinking.

When enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

ToolChoiceparam.Field\[[ToolChoiceUnion](https://platform.claude.com/docs/en/api/messages#tool_choice)\]optional

How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.

Toolsparam.Field\[\[\][ToolUnion](https://platform.claude.com/docs/en/api/messages#tool_union)\]optional

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

TopKparam.Field\[int64\]optional

Only sample from the top K options for each subsequent token.

Used to remove "long tail" low probability responses. [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).

Recommended for advanced use cases only. You usually only need to use `temperature`.

minimum0

TopPparam.Field\[float64\]optional

Use nucleus sampling.

In nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by `top_p`. You should either alter `temperature` or `top_p`, but not both.

Recommended for advanced use cases only. You usually only need to use `temperature`.

maximum1

minimum0

##### ReturnsExpand Collapse

type Messagestruct{…}

IDstring

Unique object identifier.

The format and length of IDs may change over time.

Content\[\][ContentBlockUnion](https://platform.claude.com/docs/en/api/messages#content_block)

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

type TextBlockstruct{…}

Citations\[\][TextCitationUnion](https://platform.claude.com/docs/en/api/messages#text_citation)

Citations supporting the text block.

The type of citation returned will depend on the type of document being cited. Citing a PDF results in `page_location`, plain text results in `char_location`, and content document results in `content_block_location`.

Accepts one of the following:

type CitationCharLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

FileIDstring

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

type CitationPageLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

FileIDstring

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

type CitationContentBlockLocationstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

FileIDstring

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

type CitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationsSearchResultLocationstruct{…}

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

type ThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type RedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type ToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

type ServerToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

NameWebSearch

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

type WebSearchToolResultBlockstruct{…}

Content[WebSearchToolResultBlockContentUnion](https://platform.claude.com/docs/en/api/messages#web_search_tool_result_block_content)

Accepts one of the following:

type WebSearchToolResultErrorstruct{…}

ErrorCodeWebSearchToolResultErrorErrorCode

Accepts one of the following:

const WebSearchToolResultErrorErrorCodeInvalidToolInputWebSearchToolResultErrorErrorCode = "invalid\_tool\_input"

const WebSearchToolResultErrorErrorCodeUnavailableWebSearchToolResultErrorErrorCode = "unavailable"

const WebSearchToolResultErrorErrorCodeMaxUsesExceededWebSearchToolResultErrorErrorCode = "max\_uses\_exceeded"

const WebSearchToolResultErrorErrorCodeTooManyRequestsWebSearchToolResultErrorErrorCode = "too\_many\_requests"

const WebSearchToolResultErrorErrorCodeQueryTooLongWebSearchToolResultErrorErrorCode = "query\_too\_long"

TypeWebSearchToolResultError

Accepts one of the following:

const WebSearchToolResultErrorWebSearchToolResultErrorWebSearchToolResultError = "web\_search\_tool\_result\_error"

type WebSearchToolResultBlockContentArray\[\][WebSearchResultBlock](https://platform.claude.com/docs/en/api/messages#web_search_result_block)

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

StopReason[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

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

const StopReasonEndTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "end\_turn"

const StopReasonMaxTokens[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "max\_tokens"

const StopReasonStopSequence[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "stop\_sequence"

const StopReasonToolUse[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "tool\_use"

const StopReasonPauseTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "pause\_turn"

const StopReasonRefusal[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "refusal"

StopSequencestring

Which custom stop sequence was generated, if any.

This value will be a non-null string if one of your custom stop sequences was generated.

TypeMessage

Object type.

For Messages, this is always `"message"`.

Accepts one of the following:

const MessageMessageMessage = "message"

Usage[Usage](https://platform.claude.com/docs/en/api/messages#usage)

Billing and rate-limit usage.

Anthropic's API bills and rate-limits by token counts, as tokens represent the underlying cost to our systems.

Under the hood, the API transforms requests into a format suitable for the model. The model's output then goes through a parsing stage before becoming an API response. As a result, the token counts in `usage` will not match one-to-one with the exact visible content of an API request or response.

For example, `output_tokens` will be non-zero, even for an empty string response from Claude.

Total input tokens in a request is the summation of `input_tokens`, `cache_creation_input_tokens`, and `cache_read_input_tokens`.

CacheCreation[CacheCreation](https://platform.claude.com/docs/en/api/messages#cache_creation)

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

ServerToolUse[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)

The number of server tool requests.

WebSearchRequestsint64

The number of web search tool requests.

minimum0

ServiceTierUsageServiceTier

If the request used the priority, standard, or batch tier.

Accepts one of the following:

const UsageServiceTierStandardUsageServiceTier = "standard"

const UsageServiceTierPriorityUsageServiceTier = "priority"

const UsageServiceTierBatchUsageServiceTier = "batch"

Create a Message

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
  message, err := client.Messages.New(context.TODO(), anthropic.MessageNewParams{
    MaxTokens: 1024,
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
  fmt.Printf("%+v\n", message.ID)
}
```

Response 200

```
{
  "id": "msg_013Zva2CMHLNnXjNJJKqJ2EF",
  "content": [\
    {\
      "citations": [\
        {\
          "cited_text": "cited_text",\
          "document_index": 0,\
          "document_title": "document_title",\
          "end_char_index": 0,\
          "file_id": "file_id",\
          "start_char_index": 0,\
          "type": "char_location"\
        }\
      ],\
      "text": "Hi! My name is Claude.",\
      "type": "text"\
    }\
  ],
  "model": "claude-sonnet-4-5-20250929",
  "role": "assistant",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "type": "message",
  "usage": {
    "cache_creation": {
      "ephemeral_1h_input_tokens": 0,
      "ephemeral_5m_input_tokens": 0
    },
    "cache_creation_input_tokens": 2051,
    "cache_read_input_tokens": 2051,
    "input_tokens": 2095,
    "output_tokens": 503,
    "server_tool_use": {
      "web_search_requests": 0
    },
    "service_tier": "standard"
  }
}
```

##### Returns Examples

Response 200

```
{
  "id": "msg_013Zva2CMHLNnXjNJJKqJ2EF",
  "content": [\
    {\
      "citations": [\
        {\
          "cited_text": "cited_text",\
          "document_index": 0,\
          "document_title": "document_title",\
          "end_char_index": 0,\
          "file_id": "file_id",\
          "start_char_index": 0,\
          "type": "char_location"\
        }\
      ],\
      "text": "Hi! My name is Claude.",\
      "type": "text"\
    }\
  ],
  "model": "claude-sonnet-4-5-20250929",
  "role": "assistant",
  "stop_reason": "end_turn",
  "stop_sequence": null,
  "type": "message",
  "usage": {
    "cache_creation": {
      "ephemeral_1h_input_tokens": 0,
      "ephemeral_5m_input_tokens": 0
    },
    "cache_creation_input_tokens": 2051,
    "cache_read_input_tokens": 2051,
    "input_tokens": 2095,
    "output_tokens": 503,
    "server_tool_use": {
      "web_search_requests": 0
    },
    "service_tier": "standard"
  }
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