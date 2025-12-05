[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token/index.html#__docusaurus_skipToContent_fallback)

# Get Access Token

```
POST https://services.leadconnectorhq.com/oauth/token
```

Use Access Tokens to access GoHighLevel resources on behalf of an authenticated location/company.

## Request [​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token/index.html\#request "Direct link to Request")

- application/x-www-form-urlencoded

### Body **required**

**client\_id** stringrequired

The ID provided by GHL for your integration

**client\_secret** stringrequired

**grant\_type** stringrequired

**Possible values:** \[ `authorization_code`, `refresh_token`, `client_credentials`\]

**code** string

**refresh\_token** string

**user\_type** string

The type of token to be requested

**Possible values:** \[ `Company`, `Location`\]

Example:`Location`

**redirect\_uri** string

The redirect URI for your application

Example:`https://myapp.com/oauth/callback/gohighlevel`

## Responses [​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token/index.html\#responses "Direct link to Responses")

- 200
- 400
- 401
- 422

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**access\_token** string

Example:`ab12dc0ae1234a7898f9ff06d4f69gh`

**token\_type** string

Example:`Bearer`

**expires\_in** number

Example:`86399`

**refresh\_token** string

Example:`xy34dc0ae1234a4858f9ff06d4f66ba`

**scope** string

Example:`conversations/message.readonly conversations/message.write`

**userType** string

Example:`Location`

**locationId** string

Location ID - Present only for Sub-Account Access Token

Example:`l1C08ntBrFjLS0elLIYU`

**companyId** string

Company ID

Example:`l1C08ntBrFjLS0elLIYU`

**approvedLocations** string\[\]

Approved locations to generate location access token

Example:`["l1C08ntBrFjLS0elLIYU"]`

**userId** stringrequired

USER ID - Represent user id of person who performed installation

Example:`l1C08ntBrFjLS0elLIYU`

**planId** string

Plan Id of the subscribed plan in paid apps.

Example:`l1C08ntBrFjLS0elLIYU`

**isBulkInstallation** boolean

Example:`Bearer`

## Share your feedback

★★★★★

- curl
- nodejs
- python
- php
- java
- go
- ruby
- powershell

- CURL

```openapi-explorer__code-block-lines openapi-explorer__code-block-lines-numbering
curl -L -X POST 'https://services.leadconnectorhq.com/oauth/token' \
-H 'Content-Type: application/x-www-form-urlencoded' \
-H 'Accept: application/json'

```

Request Collapse all

Base URL

Edit

https://services.leadconnectorhq.com

Body required

client\_idrequired

client\_secretrequired

grant\_typerequired

\-\-\-authorization\_coderefresh\_tokenclient\_credentials

code

refresh\_token

user\_type

\-\-\-CompanyLocation

redirect\_uri

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!