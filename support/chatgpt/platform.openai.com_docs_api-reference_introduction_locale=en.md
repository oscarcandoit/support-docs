---
url: "https://platform.openai.com/docs/api-reference/introduction?locale=en"
title: "API Reference - OpenAI API"
---

[DocsDocs](https://platform.openai.com/docs) [API referenceAPI](https://platform.openai.com/docs/api-reference/introduction)

Log in [Sign up](https://platform.openai.com/signup)

Search`` `K`

API Reference

[Introduction](https://platform.openai.com/docs/api-reference/introduction?locale=en)

[Authentication](https://platform.openai.com/docs/api-reference/authentication?locale=en)

[Debugging requests](https://platform.openai.com/docs/api-reference/debugging-requests?locale=en)

[Backward compatibility](https://platform.openai.com/docs/api-reference/backward-compatibility?locale=en)

Responses API

[Responses](https://platform.openai.com/docs/api-reference/responses?locale=en)

[Conversations](https://platform.openai.com/docs/api-reference/conversations?locale=en)

[Streaming events](https://platform.openai.com/docs/api-reference/responses-streaming?locale=en)

Webhooks

[Webhook Events](https://platform.openai.com/docs/api-reference/webhook-events?locale=en)

Platform APIs

[Audio](https://platform.openai.com/docs/api-reference/audio?locale=en)

[Videos](https://platform.openai.com/docs/api-reference/videos?locale=en)

[Images](https://platform.openai.com/docs/api-reference/images?locale=en)

[Image Streaming](https://platform.openai.com/docs/api-reference/images-streaming?locale=en)

[Embeddings](https://platform.openai.com/docs/api-reference/embeddings?locale=en)

[Evals](https://platform.openai.com/docs/api-reference/evals?locale=en)

[Fine-tuning](https://platform.openai.com/docs/api-reference/fine-tuning?locale=en)

[Graders](https://platform.openai.com/docs/api-reference/graders?locale=en)

[Batch](https://platform.openai.com/docs/api-reference/batch?locale=en)

[Files](https://platform.openai.com/docs/api-reference/files?locale=en)

[Uploads](https://platform.openai.com/docs/api-reference/uploads?locale=en)

[Models](https://platform.openai.com/docs/api-reference/models?locale=en)

[Moderations](https://platform.openai.com/docs/api-reference/moderations?locale=en)

Vector stores

[Vector stores](https://platform.openai.com/docs/api-reference/vector-stores?locale=en)

[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files?locale=en)

[Vector store file batches](https://platform.openai.com/docs/api-reference/vector-stores-file-batches?locale=en)

ChatKit

Beta

[ChatKit](https://platform.openai.com/docs/api-reference/chatkit?locale=en)

Containers

[Containers](https://platform.openai.com/docs/api-reference/containers?locale=en)

[Container Files](https://platform.openai.com/docs/api-reference/container-files?locale=en)

Realtime

[Realtime](https://platform.openai.com/docs/api-reference/realtime?locale=en)

[Client secrets](https://platform.openai.com/docs/api-reference/realtime-sessions?locale=en)

[Calls](https://platform.openai.com/docs/api-reference/realtime-calls?locale=en)

[Client events](https://platform.openai.com/docs/api-reference/realtime-client-events?locale=en)

[Server events](https://platform.openai.com/docs/api-reference/realtime-server-events?locale=en)

Chat Completions

[Chat Completions](https://platform.openai.com/docs/api-reference/chat?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/chat-streaming?locale=en)

Assistants

Beta

[Assistants](https://platform.openai.com/docs/api-reference/assistants?locale=en)

[Threads](https://platform.openai.com/docs/api-reference/threads?locale=en)

[Messages](https://platform.openai.com/docs/api-reference/messages?locale=en)

[Runs](https://platform.openai.com/docs/api-reference/runs?locale=en)

[Run steps](https://platform.openai.com/docs/api-reference/run-steps?locale=en)

[Streaming](https://platform.openai.com/docs/api-reference/assistants-streaming?locale=en)

Administration

[Administration](https://platform.openai.com/docs/api-reference/administration?locale=en)

[Admin API Keys](https://platform.openai.com/docs/api-reference/admin-api-keys?locale=en)

[Invites](https://platform.openai.com/docs/api-reference/invite?locale=en)

[Users](https://platform.openai.com/docs/api-reference/users?locale=en)

[Groups](https://platform.openai.com/docs/api-reference/groups?locale=en)

[Roles](https://platform.openai.com/docs/api-reference/roles?locale=en)

[Role assignments](https://platform.openai.com/docs/api-reference/role-assignments?locale=en)

[Projects](https://platform.openai.com/docs/api-reference/projects?locale=en)

[Project users](https://platform.openai.com/docs/api-reference/project-users?locale=en)

[Project groups](https://platform.openai.com/docs/api-reference/project-groups?locale=en)

[Project service accounts](https://platform.openai.com/docs/api-reference/project-service-accounts?locale=en)

[Project API keys](https://platform.openai.com/docs/api-reference/project-api-keys?locale=en)

[Project rate limits](https://platform.openai.com/docs/api-reference/project-rate-limits?locale=en)

[Audit logs](https://platform.openai.com/docs/api-reference/audit-logs?locale=en)

[Usage](https://platform.openai.com/docs/api-reference/usage?locale=en)

[Certificates](https://platform.openai.com/docs/api-reference/certificates?locale=en)

Legacy

[Completions](https://platform.openai.com/docs/api-reference/completions?locale=en)

[Realtime Beta](https://platform.openai.com/docs/api-reference/realtime_beta?locale=en)

[Realtime Beta session tokens](https://platform.openai.com/docs/api-reference/realtime-beta-sessions?locale=en)

[Realtime Beta client events](https://platform.openai.com/docs/api-reference/realtime-beta-client-events?locale=en)

[Realtime Beta server events](https://platform.openai.com/docs/api-reference/realtime-beta-server-events?locale=en)

[Cookbook](https://cookbook.openai.com/) [Forum](https://community.openai.com/categories)

## Introduction

This API reference describes the RESTful, streaming, and realtime APIs you can use to interact with the OpenAI platform. REST APIs are usable via HTTP in any environment that supports HTTP requests. Language-specific SDKs are listed [on the libraries page](https://platform.openai.com/docs/libraries).

## Authentication

The OpenAI API uses API keys for authentication. Create, manage, and learn more about API keys in your [organization settings](https://platform.openai.com/settings/organization/api-keys).

**Remember that your API key is a secret!** Do not share it with others or expose it in any client-side code (browsers, apps). API keys should be securely loaded from an environment variable or key management service on the server.

API keys should be provided via [HTTP Bearer authentication](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/).

```
Authorization: Bearer OPENAI_API_KEY
```

If you belong to multiple organizations or access projects through a legacy user API key, pass a header to specify which organization and project to use for an API request:

```
1
2
3
4
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "OpenAI-Organization: $ORGANIZATION_ID" \
  -H "OpenAI-Project: $PROJECT_ID"
```

Usage from these API requests counts as usage for the specified organization and project.Organization IDs can be found on your [organization settings](https://platform.openai.com/settings/organization/general) page.
Project IDs can be found on your [general settings](https://platform.openai.com/settings) page by selecting the specific project.

## Debugging requests

In addition to [error codes](https://platform.openai.com/docs/guides/error-codes) returned from API responses, you can inspect HTTP response headers containing the unique ID of a particular API request or information about rate limiting applied to your requests. Below is an incomplete list of HTTP headers returned with API responses:

**API meta information**

- `openai-organization`: The [organization](https://platform.openai.com/docs/guides/production-best-practices#setting-up-your-organization) associated with the request
- `openai-processing-ms`: Time taken processing your API request
- `openai-version`: REST API version used for this request (currently `2020-10-01`)
- `x-request-id`: Unique identifier for this API request (used in troubleshooting)

**[Rate limiting information](https://platform.openai.com/docs/guides/rate-limits)**

- `x-ratelimit-limit-requests`
- `x-ratelimit-limit-tokens`
- `x-ratelimit-remaining-requests`
- `x-ratelimit-remaining-tokens`
- `x-ratelimit-reset-requests`
- `x-ratelimit-reset-tokens`

**OpenAI recommends logging request IDs in production deployments** for more efficient troubleshooting with our [support team](https://help.openai.com/en/), should the need arise. Our [official SDKs](https://platform.openai.com/docs/libraries) provide a property on top-level response objects containing the value of the `x-request-id` header.

### Supplying your own request ID with `X-Client-Request-Id`

In addition to the server-generated `x-request-id`, you can supply your own unique identifier for each request via the `X-Client-Request-Id` request header. This header is not added automatically; you must explicitly set it on the request.

When you include `X-Client-Request-Id`:

- You control the ID format (for example, a UUID or your internal trace ID), but it must contain only ASCII characters and be no more than 512 characters long; otherwise, the request will fail with a 400 error. We strongly recommend making this value unique per request.

- OpenAI will log this value in our internal logs for supported endpoints, including chat/completions, embeddings, responses, and more.

- In cases like timeouts or network issues when you can’t get the `X-Request-Id` response header, you can share the `X-Client-Request-Id` value with our support team, and we can look up whether we received the request and when.


**Example:**

```
1
2
3
curl https://api.openai.com/v1/chat/completions \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "X-Client-Request-Id: 123e4567-e89b-12d3-a456-426614174000"
```

## Backward compatibility

OpenAI is committed to providing stability to API users by avoiding breaking changes in major API versions whenever reasonably possible. This includes:

- The REST API (currently `v1`)
- Our first-party [SDKs](https://platform.openai.com/docs/libraries) (released SDKs adhere to [semantic versioning](https://semver.org/))
- [Model](https://platform.openai.com/docs/models) families (like `gpt-4o` or `o4-mini`)

**Model prompting behavior between snapshots is subject to change**.
Model outputs are by their nature variable, so expect changes in prompting and model behavior between snapshots. For example, if you moved from `gpt-4o-2024-05-13` to `gpt-4o-2024-08-06`, the same `system` or `user` messages could function differently between versions. The best way to ensure consistent prompting behavior and model output is to use pinned model versions, and to implement [evals](https://platform.openai.com/docs/guides/evals) for your applications.

**Backwards-compatible API changes**:

- Adding new resources (URLs) to the REST API and SDKs
- Adding new optional API parameters
- Adding new properties to JSON response objects or event data
- Changing the order of properties in a JSON response object
- Changing the length or format of opaque strings, like resource identifiers and UUIDs
- Adding new event types (in either streaming or the Realtime API)

See the [changelog](https://platform.openai.com/docs/changelog) for a list of backwards-compatible changes and rare breaking changes.

[NextResponses](https://platform.openai.com/docs/api-reference/responses?locale=en)

We use cookies and similar technologies to deliver, maintain, improve our services and for security purposes. Check our [Cookie Policy](https://openai.com/policies/cookie-policy) for details. Click 'Accept all' to let OpenAI and partners use cookies for these purposes. Click 'Reject all' to say no to cookies, except those that are strictly necessary. Choose 'Manage Cookies' to pick specific cookies you're okay with or to change your preferences.

Reject allAccept all