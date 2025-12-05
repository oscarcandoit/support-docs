---
url: "https://docs.digitalocean.com/reference/api/oauth/"
title: "DigitalOcean OAuth API | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
  - [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean)
    - [Reference](https://docs.digitalocean.com/reference/api/digitalocean/)
    - [Create an Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
  - [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
    - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
    - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
    - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
  - [OAuth API](https://docs.digitalocean.com/reference/api/oauth/)
  - [Metadata API](https://docs.digitalocean.com/reference/api/#metadata)
    - [Reference](https://docs.digitalocean.com/reference/api/metadata/)
    - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Token Scopes](https://docs.digitalocean.com/reference/api/scopes/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [APIs](https://docs.digitalocean.com/reference/api/)
- OAuth API

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean OAuth API

Validated on 18 Aug 2025 • Last edited on 28 Aug 2025

[OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) is an open standard for authorization that enables third-party applications to obtain limited access to a service. The DigitalOcean OAuth API lets you obtain limited access to DigitalOcean teams by delegating authentication to DigitalOcean.

## About the DigitalOcean OAuth API

Our OAuth API supports the [authorization code flow](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) meant for web applications running on a server. It also supports the [implicit authorization flow](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.2). This is useful for client-side applications such as mobile or desktop clients where the client secret should not be stored on the user’s device.

The DigitalOcean authorization server, `https://cloud.digitalocean.com/v1/oauth`, has the following endpoints:

| Endpoint | Description |
| --- | --- |
| [`/authorize`](https://docs.digitalocean.com/reference/api/oauth/#authorize) | Request user authorization |
| [`/token`](https://docs.digitalocean.com/reference/api/oauth/#token) | Request an authorized access token |
| [`/refresh`](https://docs.digitalocean.com/reference/api/oauth/#refresh) | Refresh an access token using a refresh token |
| [`/revoke`](https://docs.digitalocean.com/reference/api/oauth/#revoke) | Revoke an access token |

To use the OAuth API, first [register your application](https://cloud.digitalocean.com/account/api/applications/new) to use OAuth. Registering an application assigns it a client ID and client secret which you then use in API calls to the DigitalOcean authorization server.

For issues and errors, use [the OAuth API troubleshooting guide](https://docs.digitalocean.com/support/im-getting-an-error-when-using-the-digitalocean-oauth-api./).

## `/authorize`: Request User Authorization

Use the `https://cloud.digitalocean.com/v1/oauth/authorize` endpoint as an authorization link to send to a user for your registered OAuth application.

### Example

You can view an example link for a registered OAuth application in the control panel. On the [**OAuth Applications** page](https://cloud.digitalocean.com/account/api/applications), click the **…** next to the application’s name, then click **View** to open the **Oauth Application Details** window. In this window, the **Link to authorization code** section has an example link.

### Parameters

| Parameter | Type | Necessity | Description |
| --- | --- | --- | --- |
| `client_id` | string | Required | The client ID for your registered OAuth application on DigitalOcean. |
| `redirect_uri` | string | Required | The callback URL where users are sent after authorization. Must match the callback URL you provided during application registration. |
| `response_type` | string | Required | Set to `code` to request an authorization code. Set to `token` to request an OAuth token for implicit authorization. |
| `scope` | string | Optional | See [all token scopes](https://docs.digitalocean.com/reference/api/scopes/). |
| `state` | string | Optional | An unguessable random string. Used to protect against request forgery attacks. Recommended. |
| `prompt` | string | Optional | A space-separated list of strings that Defines the behavior of the authorization page as shown to the user when they authorize an OAuth application. See values below. |

The `response_type` parameter can have the following values:

- `code`: Requests an authorization code. Used for the authorization code flow for web applications.

When you use this response type, you request the access token grant with the `/token` endpoint.

- `token`: Requests an OAuth token. Used for the implicit authorization flow for client-side applications.

When you use this response type, you receive the access token grant in a callback.


The `prompt` parameter can have the following values:

- `select_account` (default):
  - If a user is not signed in, they are required to sign in.

  - Signed-in users must authorize the OAuth application before proceeding.
- `none`:
  - Signed-in users who have already authorized the application are redirected back to the valid `redirect_url` with a new token. A hint can be used by specifying an i query parameter with the first 6 characters of an expected account UUID.

  - Signed-in users who haven’t authorized the application are redirected with `error=consent_required`. Signed-out users are redirected with `error=login_required`.

### Returns

If the user authorizes the application, DigitalOcean redirects back to your `redirect_uri` with the following parameters:

- One of the following, depending on the specified `response_type`:


  - The `code` parameter with an authorization code. Use this in access token requests to [the `/token` endpoint](https://docs.digitalocean.com/reference/api/oauth/#token).

  - The `token` parameter with an OAuth token. Here is an example callback (access token grant) for `token` response types:


```
https://example.com/callback#access_token=doo_v1_EXAMPLE4ea...381
  &token_type=bearer
  &expires_in=2592000
  &state=0807edf7d85e5d
```

- The `state` parameter, if you specified one in the authorization request.

Verify that the value of `state` in the response matches the one you provided in the request. If not, it indicates that the request may be a forgery attack created by a third party, and you should abort the request.

- The `expires_in` parameter, which indicates the time remaining before the token expires in seconds.


The token is available to use to make requests via [the DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitlaocean) until the token expires (30 days after being issues) or is otherwise invalidated (for example, revoked or refreshed).

## POST `/token`: Request Authorized Access Token

If a user authorizes your application with the authorization code flow, make a POST request to the `https://cloud.digitalocean.com/v1/oauth/token` endpoint with the appropriate parameters to request the access token.

### Example

Here is an example access token request using `curl`:

```shell
curl -X POST "https://cloud.digitalocean.com/v1/oauth/token?grant_type=authorization_code
  &code=f252c4bd6b1b4d249b7
  &client_id=4c413ac36ac22268
  &client_secret=b05a2ad77b24f3
  &redirect_uri=https://example.com/callback"
```

### Parameters

| Parameter | Type | Necessity | Description |
| --- | --- | --- | --- |
| `grant_type` | string | Required | Must be set to `authorization_code` for an access token request. |
| `code` | string | Required | The code received as a response to authorization with the `/authorize` endpoint. |
| `client_id` | string | Required | The client ID for your registered OAuth application on DigitalOcean. |
| `client_secret` | string | Required | The client secret for your registered OAuth application on DigitalOcean. |
| `redirect_uri` | string | Required | Must match the callback URL that you supplied during application registration. |

### Response

If the request was successful, the authorization server returns a JSON access token grant similar to the following:

```json
{
    "access_token": "doo_v1_EXAMPLE4efe8999d0892b6069bc754a78c656f8e843361e1e4d1cd04ac85c381",
    "token_type": "bearer",
    "expires_in": 2592000,
    "refresh_token": "dor_v1_EXAMPLE3104521c47be0b580e9296453ef4y319b02b5513469f0ec72d99af2e2",
    "info": {
        "name": "Sammy the Shark",
        "email":"sammy@digitalocean.com",
        "uuid":"EXAMPLE0-a636-11ec-9e9d-3381ceabe039",
        "team_uuid": "EXAMPLE1-a636-11ec-a6ac-1323bf96ef4d",
        "team_name": "My Team"
    }
}
```

In addition to other information, the response includes two important items: `access_token` and `refresh_token`.

The access token is available to use to make requests via [the DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitlaocean) until the token expires or token is otherwise invalidated.

## POST `/refresh`: Refresh Token

Each access token comes with a refresh token. You can use a refresh token exactly once to create a new access token (and refresh token). Doing so invalidates the access token that the refresh token was issued with. A common use case is refreshing an expired token.

To refresh a token, make a POST request to the `https://cloud.digitalocean.com/v1/oauth/refresh` endpoint with the appropriate parameters.

### Parameters

| Parameter | Type | Necessity | Description |
| --- | --- | --- | --- |
| `grant_type` | string | Required | Must be set to `refresh_token` for a token refresh request. |
| `refresh_token` | string | Required | The `refresh_token` that was received with the original access token. |

### Response

The refresh token response is in the same format as the original access token grant. See [the response for `/token`](https://docs.digitalocean.com/reference/api/oauth/#access-token-grant).

## POST `/revoke`: Revoke Token Flow

Revoking an access token invalidates it so that it cannot be used.

To revoke an access token, send a POST request to the `https://cloud/digitalocean.com/v1/oauth/revoke` endpoint with an `Authorization: Bearer` header and the appropriate parameters.

### Parameters

| Parameter | Type | Necessity | Description |
| --- | --- | --- | --- |
| `token` | string | Required | Must be set to the value of the access token. |

### Response

The response to this request is an empty JSON object.

In this article...

- [About the DigitalOcean OAuth API](https://docs.digitalocean.com/reference/api/oauth/#about-the-digitalocean-oauth-api)
- [`/authorize`: Request User Authorization](https://docs.digitalocean.com/reference/api/oauth/#authorize)
  - [Example](https://docs.digitalocean.com/reference/api/oauth/#example)
  - [Parameters](https://docs.digitalocean.com/reference/api/oauth/#parameters)
  - [Returns](https://docs.digitalocean.com/reference/api/oauth/#returns)
- [POST `/token`: Request Authorized Access Token](https://docs.digitalocean.com/reference/api/oauth/#token)
  - [Example](https://docs.digitalocean.com/reference/api/oauth/#example-1)
  - [Parameters](https://docs.digitalocean.com/reference/api/oauth/#parameters-1)
  - [Response](https://docs.digitalocean.com/reference/api/oauth/#access-token-grant)
- [POST `/refresh`: Refresh Token](https://docs.digitalocean.com/reference/api/oauth/#refresh)
  - [Parameters](https://docs.digitalocean.com/reference/api/oauth/#parameters-2)
  - [Response](https://docs.digitalocean.com/reference/api/oauth/#response)
- [POST `/revoke`: Revoke Token Flow](https://docs.digitalocean.com/reference/api/oauth/#revoke)
  - [Parameters](https://docs.digitalocean.com/reference/api/oauth/#parameters-3)
  - [Response](https://docs.digitalocean.com/reference/api/oauth/#response-1)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices