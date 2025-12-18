---
url: "https://platform.claude.com/docs/en/api/go/beta/messages/batches/create"
title: "Create a Message Batch - Claude API Reference"
---

[Claude Documentation Home](https://platform.claude.com/docs/en/home)

- [Developer Guide](https://platform.claude.com/docs/en/intro)
- [API Reference](https://platform.claude.com/docs/en/api/overview)
- [MCP](https://modelcontextprotocol.io/)
- [Resources](https://platform.claude.com/docs/en/resources/overview)
- [Release Notes](https://platform.claude.com/docs/en/release-notes/overview)

English

[Log in](https://platform.claude.com/login?returnTo=%2Fdocs%2Fen%2Fapi%2Fgo%2Fbeta%2Fmessages%2Fbatches%2Fcreate)

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

Batches

Create

Copy page

Go

# Create a Message Batch

client.Beta.Messages.Batches.New(ctx, params)(\*[BetaMessageBatch](https://platform.claude.com/docs/en/api/beta#beta_message_batch), error)

post/v1/messages/batches

Send a batch of Message creation requests.

The Message Batches API can be used to process multiple Messages API requests at once. Once a Message Batch is created, it begins processing immediately. Batches can take up to 24 hours to complete.

Learn more about the Message Batches API in our [user guide](https://docs.claude.com/en/docs/build-with-claude/batch-processing)

##### ParametersExpand Collapse

paramsBetaMessageBatchNewParams

Requestsparam.Field\[\[\]BetaMessageBatchNewParamsRequest\]

Body param: List of requests for prompt completion. Each is an individual request to create a Message.

CustomIDstring

Developer-provided ID created for each request in a Message Batch. Useful for matching results to requests, as results may be given out of request order.

Must be unique for each request within the Message Batch.

maxLength64

minLength1

ParamsBetaMessageBatchNewParamsRequestParams

Messages API creation parameters for the individual request.

See the [Messages API reference](https://docs.claude.com/en/api/messages) for full documentation on available parameters.

MaxTokensint64

The maximum number of tokens to generate before stopping.

Note that our models may stop _before_ reaching this maximum. This parameter only specifies the absolute maximum number of tokens to generate.

Different models have different maximum values for this parameter. See [models](https://docs.claude.com/en/docs/models-overview) for details.

minimum1

Messages\[\][BetaMessageParamResp](https://platform.claude.com/docs/en/api/beta#beta_message_param)

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

ContainerBetaMessageBatchNewParamsRequestParamsContainerUnionoptional

Container identifier for reuse across requests.

Accepts one of the following:

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

string

ContextManagement[BetaContextManagementConfig](https://platform.claude.com/docs/en/api/beta#beta_context_management_config)optional

Context management configuration.

This allows you to control how Claude manages context across multiple requests, such as whether to clear function results or not.

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

MCPServers\[\][BetaRequestMCPServerURLDefinition](https://platform.claude.com/docs/en/api/beta#beta_request_mcp_server_url_definition)optional

MCP servers to be utilized in this request

Namestring

TypeURL

Accepts one of the following:

const URLURLURL = "url"

URLstring

AuthorizationTokenstringoptional

ToolConfiguration[BetaRequestMCPServerToolConfiguration](https://platform.claude.com/docs/en/api/beta#beta_request_mcp_server_tool_configuration)optional

AllowedTools\[\]stringoptional

Enabledbooloptional

Metadata[BetaMetadata](https://platform.claude.com/docs/en/api/beta#beta_metadata)optional

An object describing metadata about the request.

UserIDstringoptional

An external identifier for the user who is associated with the request.

This should be a uuid, hash value, or other opaque identifier. Anthropic may use this id to help detect abuse. Do not include any identifying information such as name, email address, or phone number.

maxLength256

OutputConfig[BetaOutputConfig](https://platform.claude.com/docs/en/api/beta#beta_output_config)optional

Configuration options for the model's output. Controls aspects like how much effort the model puts into its response.

EffortBetaOutputConfigEffortoptional

All possible effort levels.

Accepts one of the following:

const BetaOutputConfigEffortLowBetaOutputConfigEffort = "low"

const BetaOutputConfigEffortMediumBetaOutputConfigEffort = "medium"

const BetaOutputConfigEffortHighBetaOutputConfigEffort = "high"

OutputFormat[BetaJSONOutputFormat](https://platform.claude.com/docs/en/api/beta#beta_json_output_format)optional

A schema to specify Claude's output format in responses.

Schemamap\[string,any\]

The JSON schema of the format

TypeJSONSchema

Accepts one of the following:

const JSONSchemaJSONSchemaJSONSchema = "json\_schema"

ServiceTierstringoptional

Determines whether to use priority capacity (if available) or standard capacity for this request.

Anthropic offers different levels of service for your API requests. See [service-tiers](https://docs.claude.com/en/api/service-tiers) for details.

Accepts one of the following:

const BetaMessageBatchNewParamsRequestParamsServiceTierAutoBetaMessageBatchNewParamsRequestParamsServiceTier = "auto"

const BetaMessageBatchNewParamsRequestParamsServiceTierStandardOnlyBetaMessageBatchNewParamsRequestParamsServiceTier = "standard\_only"

StopSequences\[\]stringoptional

Custom text sequences that will cause the model to stop generating.

Our models will normally stop when they have naturally completed their turn, which will result in a response `stop_reason` of `"end_turn"`.

If you want the model to stop generating when it encounters custom strings of text, you can use the `stop_sequences` parameter. If the model encounters one of the custom sequences, the response `stop_reason` value will be `"stop_sequence"` and the response `stop_sequence` value will contain the matched stop sequence.

Streambooloptional

Whether to incrementally stream the response using server-sent events.

See [streaming](https://docs.claude.com/en/api/messages-streaming) for details.

System\[\][BetaTextBlockParamResp](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)optional

System prompt.

A system prompt is a way of providing context and instructions to Claude, such as specifying a particular goal or role. See our [guide to system prompts](https://docs.claude.com/en/docs/system-prompts).

Accepts one of the following:

\[\][BetaTextBlockParam](https://platform.claude.com/docs/en/api/beta#beta_text_block_param)

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

Temperaturefloat64optional

Amount of randomness injected into the response.

Defaults to `1.0`. Ranges from `0.0` to `1.0`. Use `temperature` closer to `0.0` for analytical / multiple choice, and closer to `1.0` for creative and generative tasks.

Note that even with `temperature` of `0.0`, the results will not be fully deterministic.

maximum1

minimum0

Thinking[BetaThinkingConfigParamUnionResp](https://platform.claude.com/docs/en/api/beta#beta_thinking_config_param)optional

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

ToolChoice[BetaToolChoiceUnion](https://platform.claude.com/docs/en/api/beta#beta_tool_choice)optional

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

Tools\[\][BetaToolUnion](https://platform.claude.com/docs/en/api/beta#beta_tool_union)optional

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

TopKint64optional

Only sample from the top K options for each subsequent token.

Used to remove "long tail" low probability responses. [Learn more technical details here](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277).

Recommended for advanced use cases only. You usually only need to use `temperature`.

minimum0

TopPfloat64optional

Use nucleus sampling.

In nucleus sampling, we compute the cumulative distribution over all the options for each subsequent token in decreasing probability order and cut it off once it reaches a particular probability specified by `top_p`. You should either alter `temperature` or `top_p`, but not both.

Recommended for advanced use cases only. You usually only need to use `temperature`.

maximum1

minimum0

Betasparam.Field\[\[\]AnthropicBeta\]optional

Header param: Optional header to specify the beta version(s) you want to use.

string

type AnthropicBetastring

Accepts one of the following:

const AnthropicBetaMessageBatches2024\_09\_24AnthropicBeta = "message-batches-2024-09-24"

const AnthropicBetaPromptCaching2024\_07\_31AnthropicBeta = "prompt-caching-2024-07-31"

const AnthropicBetaComputerUse2024\_10\_22AnthropicBeta = "computer-use-2024-10-22"

const AnthropicBetaComputerUse2025\_01\_24AnthropicBeta = "computer-use-2025-01-24"

const AnthropicBetaPDFs2024\_09\_25AnthropicBeta = "pdfs-2024-09-25"

const AnthropicBetaTokenCounting2024\_11\_01AnthropicBeta = "token-counting-2024-11-01"

const AnthropicBetaTokenEfficientTools2025\_02\_19AnthropicBeta = "token-efficient-tools-2025-02-19"

const AnthropicBetaOutput128k2025\_02\_19AnthropicBeta = "output-128k-2025-02-19"

const AnthropicBetaFilesAPI2025\_04\_14AnthropicBeta = "files-api-2025-04-14"

const AnthropicBetaMCPClient2025\_04\_04AnthropicBeta = "mcp-client-2025-04-04"

const AnthropicBetaMCPClient2025\_11\_20AnthropicBeta = "mcp-client-2025-11-20"

const AnthropicBetaDevFullThinking2025\_05\_14AnthropicBeta = "dev-full-thinking-2025-05-14"

const AnthropicBetaInterleavedThinking2025\_05\_14AnthropicBeta = "interleaved-thinking-2025-05-14"

const AnthropicBetaCodeExecution2025\_05\_22AnthropicBeta = "code-execution-2025-05-22"

const AnthropicBetaExtendedCacheTTL2025\_04\_11AnthropicBeta = "extended-cache-ttl-2025-04-11"

const AnthropicBetaContext1m2025\_08\_07AnthropicBeta = "context-1m-2025-08-07"

const AnthropicBetaContextManagement2025\_06\_27AnthropicBeta = "context-management-2025-06-27"

const AnthropicBetaModelContextWindowExceeded2025\_08\_26AnthropicBeta = "model-context-window-exceeded-2025-08-26"

const AnthropicBetaSkills2025\_10\_02AnthropicBeta = "skills-2025-10-02"

##### ReturnsExpand Collapse

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

Create a Message Batch

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
  betaMessageBatch, err := client.Beta.Messages.Batches.New(context.TODO(), anthropic.BetaMessageBatchNewParams{
    Requests: []anthropic.BetaMessageBatchNewParamsRequest{anthropic.BetaMessageBatchNewParamsRequest{
      CustomID: "my-custom-id-1",
      Params: anthropic.BetaMessageBatchNewParamsRequestParams{
        MaxTokens: 1024,
        Messages: []anthropic.BetaMessageParam{anthropic.BetaMessageParam{
          Content: []anthropic.BetaContentBlockParamUnion{anthropic.BetaContentBlockParamUnion{
            OfText: &anthropic.BetaTextBlockParam{Text: "What is a quaternion?", CacheControl: anthropic.BetaCacheControlEphemeralParam{TTL: anthropic.BetaCacheControlEphemeralTTLTTL5m}, Citations: []anthropic.BetaTextCitationParamUnion{anthropic.BetaTextCitationParamUnion{
              OfCharLocation: &anthropic.BetaCitationCharLocationParam{CitedText: "cited_text", DocumentIndex: 0, DocumentTitle: anthropic.String("x"), EndCharIndex: 0, StartCharIndex: 0},
            }}},
          }},
          Role: anthropic.BetaMessageParamRoleUser,
        }},
        Model: anthropic.ModelClaudeOpus4_5_20251101,
      },
    }},
  })
  if err != nil {
    panic(err.Error())
  }
  fmt.Printf("%+v\n", betaMessageBatch.ID)
}
```

Response 200

```
{
  "id": "msgbatch_013Zva2CMHLNnXjNJJKqJ2EF",
  "archived_at": "2024-08-20T18:37:24.100435Z",
  "cancel_initiated_at": "2024-08-20T18:37:24.100435Z",
  "created_at": "2024-08-20T18:37:24.100435Z",
  "ended_at": "2024-08-20T18:37:24.100435Z",
  "expires_at": "2024-08-20T18:37:24.100435Z",
  "processing_status": "in_progress",
  "request_counts": {
    "canceled": 10,
    "errored": 30,
    "expired": 10,
    "processing": 100,
    "succeeded": 50
  },
  "results_url": "https://api.anthropic.com/v1/messages/batches/msgbatch_013Zva2CMHLNnXjNJJKqJ2EF/results",
  "type": "message_batch"
}
```

##### Returns Examples

Response 200

```
{
  "id": "msgbatch_013Zva2CMHLNnXjNJJKqJ2EF",
  "archived_at": "2024-08-20T18:37:24.100435Z",
  "cancel_initiated_at": "2024-08-20T18:37:24.100435Z",
  "created_at": "2024-08-20T18:37:24.100435Z",
  "ended_at": "2024-08-20T18:37:24.100435Z",
  "expires_at": "2024-08-20T18:37:24.100435Z",
  "processing_status": "in_progress",
  "request_counts": {
    "canceled": 10,
    "errored": 30,
    "expired": 10,
    "processing": 100,
    "succeeded": 50
  },
  "results_url": "https://api.anthropic.com/v1/messages/batches/msgbatch_013Zva2CMHLNnXjNJJKqJ2EF/results",
  "type": "message_batch"
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