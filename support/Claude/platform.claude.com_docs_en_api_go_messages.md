---
url: "https://platform.claude.com/docs/en/api/go/messages"
title: "Messages - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fmessages)

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

Go

# Messages

##### [Create a Message](https://platform.claude.com/docs/en/api/messages/create)

client.Messages.New(ctx, body)(\*[Message](https://platform.claude.com/docs/en/api/messages#message), error)

post/v1/messages

##### [Count tokens in a Message](https://platform.claude.com/docs/en/api/messages/count_tokens)

client.Messages.CountTokens(ctx, body)(\*[MessageTokensCount](https://platform.claude.com/docs/en/api/messages#message_tokens_count), error)

post/v1/messages/count\_tokens

##### ModelsExpand Collapse

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

type Base64PDFSourcestruct{…}

Datastring

MediaTypeApplicationPDF

Accepts one of the following:

const ApplicationPDFApplicationPDFApplicationPDF = "application/pdf"

TypeBase64

Accepts one of the following:

const Base64Base64Base64 = "base64"

type CacheControlEphemeralstruct{…}

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

type CacheCreationstruct{…}

Ephemeral1hInputTokensint64

The number of input tokens used to create the 1 hour cache entry.

minimum0

Ephemeral5mInputTokensint64

The number of input tokens used to create the 5 minute cache entry.

minimum0

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

type CitationCharLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndCharIndexint64

StartCharIndexint64

TypeCharLocation

Accepts one of the following:

const CharLocationCharLocationCharLocation = "char\_location"

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

type CitationContentBlockLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndBlockIndexint64

StartBlockIndexint64

TypeContentBlockLocation

Accepts one of the following:

const ContentBlockLocationContentBlockLocationContentBlockLocation = "content\_block\_location"

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

type CitationPageLocationParamRespstruct{…}

CitedTextstring

DocumentIndexint64

DocumentTitlestring

EndPageNumberint64

StartPageNumberint64

TypePageLocation

Accepts one of the following:

const PageLocationPageLocationPageLocation = "page\_location"

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

type CitationWebSearchResultLocationParamRespstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type CitationsConfigParamRespstruct{…}

Enabledbooloptional

type CitationsDeltastruct{…}

CitationCitationsDeltaCitationUnion

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

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

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

type CitationsWebSearchResultLocationstruct{…}

CitedTextstring

EncryptedIndexstring

Titlestring

TypeWebSearchResultLocation

Accepts one of the following:

const WebSearchResultLocationWebSearchResultLocationWebSearchResultLocation = "web\_search\_result\_location"

URLstring

type ContentBlockUnioninterface{…}

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

type ContentBlockParamUnionRespinterface{…}

Regular text content.

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

type ContentBlockSourceContentItemUnioninterface{…}

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

type InputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

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

type MessageCountTokensToolUnioninterface{…}

Accepts one of the following:

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

type MessageDeltaUsagestruct{…}

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

ServerToolUse[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)

The number of server tool requests.

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type MessageParamRespstruct{…}

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

type MessageTokensCountstruct{…}

InputTokensint64

The total number of tokens across the provided list of messages, system prompt, and tools.

type Metadatastruct{…}

UserIDstringoptional

An external identifier for the user who is associated with the request.

This should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number.

maxLength256

type Modelinterface{…}

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

type PlainTextSourcestruct{…}

Datastring

MediaTypeTextPlain

Accepts one of the following:

const TextPlainTextPlainTextPlain = "text/plain"

TypeText

Accepts one of the following:

const TextTextText = "text"

type RawContentBlockDeltaUnioninterface{…}

Accepts one of the following:

type TextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type InputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type CitationsDeltastruct{…}

CitationCitationsDeltaCitationUnion

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

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type ThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type SignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

type ContentBlockDeltaEventstruct{…}

Delta[RawContentBlockDeltaUnion](https://platform.claude.com/docs/en/api/messages#raw_content_block_delta)

Accepts one of the following:

type TextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type InputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type CitationsDeltastruct{…}

CitationCitationsDeltaCitationUnion

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

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type ThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type SignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

Indexint64

TypeContentBlockDelta

Accepts one of the following:

const ContentBlockDeltaContentBlockDeltaContentBlockDelta = "content\_block\_delta"

type ContentBlockStartEventstruct{…}

ContentBlockContentBlockStartEventContentBlockUnion

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

Indexint64

TypeContentBlockStart

Accepts one of the following:

const ContentBlockStartContentBlockStartContentBlockStart = "content\_block\_start"

type ContentBlockStopEventstruct{…}

Indexint64

TypeContentBlockStop

Accepts one of the following:

const ContentBlockStopContentBlockStopContentBlockStop = "content\_block\_stop"

type MessageDeltaEventstruct{…}

DeltaMessageDeltaEventDelta

StopReason[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

Accepts one of the following:

const StopReasonEndTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "end\_turn"

const StopReasonMaxTokens[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "max\_tokens"

const StopReasonStopSequence[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "stop\_sequence"

const StopReasonToolUse[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "tool\_use"

const StopReasonPauseTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "pause\_turn"

const StopReasonRefusal[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "refusal"

StopSequencestring

TypeMessageDelta

Accepts one of the following:

const MessageDeltaMessageDeltaMessageDelta = "message\_delta"

Usage[MessageDeltaUsage](https://platform.claude.com/docs/en/api/messages#message_delta_usage)

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

ServerToolUse[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)

The number of server tool requests.

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type MessageStartEventstruct{…}

Message[Message](https://platform.claude.com/docs/en/api/messages#message)

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

TypeMessageStart

Accepts one of the following:

const MessageStartMessageStartMessageStart = "message\_start"

type MessageStopEventstruct{…}

TypeMessageStop

Accepts one of the following:

const MessageStopMessageStopMessageStop = "message\_stop"

type MessageStreamEventUnioninterface{…}

Accepts one of the following:

type MessageStartEventstruct{…}

Message[Message](https://platform.claude.com/docs/en/api/messages#message)

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

TypeMessageStart

Accepts one of the following:

const MessageStartMessageStartMessageStart = "message\_start"

type MessageDeltaEventstruct{…}

DeltaMessageDeltaEventDelta

StopReason[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason)

Accepts one of the following:

const StopReasonEndTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "end\_turn"

const StopReasonMaxTokens[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "max\_tokens"

const StopReasonStopSequence[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "stop\_sequence"

const StopReasonToolUse[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "tool\_use"

const StopReasonPauseTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "pause\_turn"

const StopReasonRefusal[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "refusal"

StopSequencestring

TypeMessageDelta

Accepts one of the following:

const MessageDeltaMessageDeltaMessageDelta = "message\_delta"

Usage[MessageDeltaUsage](https://platform.claude.com/docs/en/api/messages#message_delta_usage)

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

ServerToolUse[ServerToolUsage](https://platform.claude.com/docs/en/api/messages#server_tool_usage)

The number of server tool requests.

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type MessageStopEventstruct{…}

TypeMessageStop

Accepts one of the following:

const MessageStopMessageStopMessageStop = "message\_stop"

type ContentBlockStartEventstruct{…}

ContentBlockContentBlockStartEventContentBlockUnion

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

Indexint64

TypeContentBlockStart

Accepts one of the following:

const ContentBlockStartContentBlockStartContentBlockStart = "content\_block\_start"

type ContentBlockDeltaEventstruct{…}

Delta[RawContentBlockDeltaUnion](https://platform.claude.com/docs/en/api/messages#raw_content_block_delta)

Accepts one of the following:

type TextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type InputJSONDeltastruct{…}

PartialJSONstring

TypeInputJSONDelta

Accepts one of the following:

const InputJSONDeltaInputJSONDeltaInputJSONDelta = "input\_json\_delta"

type CitationsDeltastruct{…}

CitationCitationsDeltaCitationUnion

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

TypeCitationsDelta

Accepts one of the following:

const CitationsDeltaCitationsDeltaCitationsDelta = "citations\_delta"

type ThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

type SignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

Indexint64

TypeContentBlockDelta

Accepts one of the following:

const ContentBlockDeltaContentBlockDeltaContentBlockDelta = "content\_block\_delta"

type ContentBlockStopEventstruct{…}

Indexint64

TypeContentBlockStop

Accepts one of the following:

const ContentBlockStopContentBlockStopContentBlockStop = "content\_block\_stop"

type RedactedThinkingBlockstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

type RedactedThinkingBlockParamRespstruct{…}

Datastring

TypeRedactedThinking

Accepts one of the following:

const RedactedThinkingRedactedThinkingRedactedThinking = "redacted\_thinking"

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

type ServerToolUsagestruct{…}

WebSearchRequestsint64

The number of web search tool requests.

minimum0

type ServerToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

NameWebSearch

Accepts one of the following:

const WebSearchWebSearchWebSearch = "web\_search"

TypeServerToolUse

Accepts one of the following:

const ServerToolUseServerToolUseServerToolUse = "server\_tool\_use"

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

type SignatureDeltastruct{…}

Signaturestring

TypeSignatureDelta

Accepts one of the following:

const SignatureDeltaSignatureDeltaSignatureDelta = "signature\_delta"

type StopReasonstring

Accepts one of the following:

const StopReasonEndTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "end\_turn"

const StopReasonMaxTokens[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "max\_tokens"

const StopReasonStopSequence[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "stop\_sequence"

const StopReasonToolUse[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "tool\_use"

const StopReasonPauseTurn[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "pause\_turn"

const StopReasonRefusal[StopReason](https://platform.claude.com/docs/en/api/messages#stop_reason) = "refusal"

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

type TextCitationUnioninterface{…}

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

type TextCitationParamUnionRespinterface{…}

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

type TextDeltastruct{…}

Textstring

TypeTextDelta

Accepts one of the following:

const TextDeltaTextDeltaTextDelta = "text\_delta"

type ThinkingBlockstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type ThinkingBlockParamRespstruct{…}

Signaturestring

Thinkingstring

TypeThinking

Accepts one of the following:

const ThinkingThinkingThinking = "thinking"

type ThinkingConfigDisabledstruct{…}

TypeDisabled

Accepts one of the following:

const DisabledDisabledDisabled = "disabled"

type ThinkingConfigEnabledstruct{…}

BudgetTokensint64

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

TypeEnabled

Accepts one of the following:

const EnabledEnabledEnabled = "enabled"

type ThinkingConfigParamUnionRespinterface{…}

Configuration for enabling Claude's extended thinking.

When enabled, responses include `thinking` content blocks showing Claude's thinking process before the final answer. Requires a minimum budget of 1,024 tokens and counts towards your `max_tokens` limit.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

Accepts one of the following:

type ThinkingConfigEnabledstruct{…}

BudgetTokensint64

Determines how many tokens Claude can use for its internal reasoning process. Larger budgets can enable more thorough analysis for complex problems, improving response quality.

Must be ≥1024 and less than `max_tokens`.

See [extended thinking](https://docs.claude.com/en/docs/build-with-claude/extended-thinking) for details.

minimum1024

TypeEnabled

Accepts one of the following:

const EnabledEnabledEnabled = "enabled"

type ThinkingConfigDisabledstruct{…}

TypeDisabled

Accepts one of the following:

const DisabledDisabledDisabled = "disabled"

type ThinkingDeltastruct{…}

Thinkingstring

TypeThinkingDelta

Accepts one of the following:

const ThinkingDeltaThinkingDeltaThinkingDelta = "thinking\_delta"

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

type ToolChoiceUnioninterface{…}

How the model should use the provided tools. The model can use a specific tool, any available tool, decide by itself, or not use tools at all.

Accepts one of the following:

type ToolChoiceAutostruct{…}

The model will automatically decide whether to use tools.

TypeAuto

Accepts one of the following:

const AutoAutoAuto = "auto"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

type ToolChoiceAnystruct{…}

The model will use any available tools.

TypeAny

Accepts one of the following:

const AnyAnyAny = "any"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type ToolChoiceToolstruct{…}

The model will use the specified tool with `tool_choice.name`.

Namestring

The name of the tool to use.

TypeTool

Accepts one of the following:

const ToolToolTool = "tool"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type ToolChoiceNonestruct{…}

The model will not be allowed to use tools.

TypeNone

Accepts one of the following:

const NoneNoneNone = "none"

type ToolChoiceAnystruct{…}

The model will use any available tools.

TypeAny

Accepts one of the following:

const AnyAnyAny = "any"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

type ToolChoiceAutostruct{…}

The model will automatically decide whether to use tools.

TypeAuto

Accepts one of the following:

const AutoAutoAuto = "auto"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output at most one tool use.

type ToolChoiceNonestruct{…}

The model will not be allowed to use tools.

TypeNone

Accepts one of the following:

const NoneNoneNone = "none"

type ToolChoiceToolstruct{…}

The model will use the specified tool with `tool_choice.name`.

Namestring

The name of the tool to use.

TypeTool

Accepts one of the following:

const ToolToolTool = "tool"

DisableParallelToolUsebooloptional

Whether to disable parallel tool use.

Defaults to `false`. If set to `true`, the model will output exactly one tool use.

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

type ToolUnioninterface{…}

Accepts one of the following:

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

type ToolUseBlockstruct{…}

IDstring

Inputmap\[string,any\]

Namestring

TypeToolUse

Accepts one of the following:

const ToolUseToolUseToolUse = "tool\_use"

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

type URLImageSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type URLPDFSourcestruct{…}

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

type Usagestruct{…}

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

type WebSearchResultBlockstruct{…}

EncryptedContentstring

PageAgestring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

type WebSearchResultBlockParamRespstruct{…}

EncryptedContentstring

Titlestring

TypeWebSearchResult

Accepts one of the following:

const WebSearchResultWebSearchResultWebSearchResult = "web\_search\_result"

URLstring

PageAgestringoptional

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

type WebSearchToolResultBlockContentUnioninterface{…}

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

type WebSearchToolResultBlockParamContentUnionRespinterface{…}

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

#### MessagesBatches

##### [Create a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/create)

client.Messages.Batches.New(ctx, body)(\*[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch), error)

post/v1/messages/batches

##### [Retrieve a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/retrieve)

client.Messages.Batches.Get(ctx, messageBatchID)(\*[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch), error)

get/v1/messages/batches/{message\_batch\_id}

##### [List Message Batches](https://platform.claude.com/docs/en/api/messages/batches/list)

client.Messages.Batches.List(ctx, query)(\*Page\[[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch)\], error)

get/v1/messages/batches

##### [Cancel a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/cancel)

client.Messages.Batches.Cancel(ctx, messageBatchID)(\*[MessageBatch](https://platform.claude.com/docs/en/api/messages#message_batch), error)

post/v1/messages/batches/{message\_batch\_id}/cancel

##### [Delete a Message Batch](https://platform.claude.com/docs/en/api/messages/batches/delete)

client.Messages.Batches.Delete(ctx, messageBatchID)(\*[DeletedMessageBatch](https://platform.claude.com/docs/en/api/messages#deleted_message_batch), error)

delete/v1/messages/batches/{message\_batch\_id}

##### [Retrieve Message Batch results](https://platform.claude.com/docs/en/api/messages/batches/results)

client.Messages.Batches.Results(ctx, messageBatchID)(\*[MessageBatchIndividualResponse](https://platform.claude.com/docs/en/api/messages#message_batch_individual_response), error)

get/v1/messages/batches/{message\_batch\_id}/results

##### ModelsExpand Collapse

type DeletedMessageBatchstruct{…}

IDstring

ID of the Message Batch.

TypeMessageBatchDeleted

Deleted object type.

For Message Batches, this is always `"message_batch_deleted"`.

Accepts one of the following:

const MessageBatchDeletedMessageBatchDeletedMessageBatchDeleted = "message\_batch\_deleted"

type MessageBatchstruct{…}

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

ProcessingStatusMessageBatchProcessingStatus

Processing status of the Message Batch.

Accepts one of the following:

const MessageBatchProcessingStatusInProgressMessageBatchProcessingStatus = "in\_progress"

const MessageBatchProcessingStatusCancelingMessageBatchProcessingStatus = "canceling"

const MessageBatchProcessingStatusEndedMessageBatchProcessingStatus = "ended"

RequestCounts[MessageBatchRequestCounts](https://platform.claude.com/docs/en/api/messages#message_batch_request_counts)

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

type MessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type MessageBatchErroredResultstruct{…}

Error[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

Error[ErrorObjectUnion](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

type InvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type AuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type PermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type NotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type RateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type GatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type APIErrorObjectstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type OverloadedErrorstruct{…}

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

type MessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type MessageBatchIndividualResponsestruct{…}

This is a single line in the response `.jsonl` file and does not represent the response as a whole.

CustomIDstring

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

Result[MessageBatchResultUnion](https://platform.claude.com/docs/en/api/messages#message_batch_result)

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

type MessageBatchSucceededResultstruct{…}

Message[Message](https://platform.claude.com/docs/en/api/messages#message)

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

TypeSucceeded

Accepts one of the following:

const SucceededSucceededSucceeded = "succeeded"

type MessageBatchErroredResultstruct{…}

Error[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

Error[ErrorObjectUnion](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

type InvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type AuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type PermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type NotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type RateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type GatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type APIErrorObjectstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type OverloadedErrorstruct{…}

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

type MessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type MessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type MessageBatchRequestCountsstruct{…}

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

type MessageBatchResultUnioninterface{…}

Processing result for this request.

Contains a Message output if processing was successful, an error response if processing failed, or the reason why processing was not attempted, such as cancellation or expiration.

Accepts one of the following:

type MessageBatchSucceededResultstruct{…}

Message[Message](https://platform.claude.com/docs/en/api/messages#message)

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

TypeSucceeded

Accepts one of the following:

const SucceededSucceededSucceeded = "succeeded"

type MessageBatchErroredResultstruct{…}

Error[ErrorResponse](https://platform.claude.com/docs/en/api/$shared#error_response)

Error[ErrorObjectUnion](https://platform.claude.com/docs/en/api/$shared#error_object)

Accepts one of the following:

type InvalidRequestErrorstruct{…}

Messagestring

TypeInvalidRequestError

Accepts one of the following:

const InvalidRequestErrorInvalidRequestErrorInvalidRequestError = "invalid\_request\_error"

type AuthenticationErrorstruct{…}

Messagestring

TypeAuthenticationError

Accepts one of the following:

const AuthenticationErrorAuthenticationErrorAuthenticationError = "authentication\_error"

type BillingErrorstruct{…}

Messagestring

TypeBillingError

Accepts one of the following:

const BillingErrorBillingErrorBillingError = "billing\_error"

type PermissionErrorstruct{…}

Messagestring

TypePermissionError

Accepts one of the following:

const PermissionErrorPermissionErrorPermissionError = "permission\_error"

type NotFoundErrorstruct{…}

Messagestring

TypeNotFoundError

Accepts one of the following:

const NotFoundErrorNotFoundErrorNotFoundError = "not\_found\_error"

type RateLimitErrorstruct{…}

Messagestring

TypeRateLimitError

Accepts one of the following:

const RateLimitErrorRateLimitErrorRateLimitError = "rate\_limit\_error"

type GatewayTimeoutErrorstruct{…}

Messagestring

TypeTimeoutError

Accepts one of the following:

const TimeoutErrorTimeoutErrorTimeoutError = "timeout\_error"

type APIErrorObjectstruct{…}

Messagestring

TypeAPIError

Accepts one of the following:

const APIErrorAPIErrorAPIError = "api\_error"

type OverloadedErrorstruct{…}

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

type MessageBatchCanceledResultstruct{…}

TypeCanceled

Accepts one of the following:

const CanceledCanceledCanceled = "canceled"

type MessageBatchExpiredResultstruct{…}

TypeExpired

Accepts one of the following:

const ExpiredExpiredExpired = "expired"

type MessageBatchSucceededResultstruct{…}

Message[Message](https://platform.claude.com/docs/en/api/messages#message)

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