---
url: "https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project"
title: "Configures Static IPs for a project - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

connect

Configures Static IPs for a project

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

- domains

- dns

- domains-registrar

- logDrains

- drains

- edge-cache

- edge-config

- environment

- user

- integrations

- marketplace

- authentication

- logs

- projectMembers

- connect

  - [PATCH\\
    \\
    Configures Static IPs for a project](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project)
- rolling-release

- security

- teams

- webhooks

- aliases

- certs


updateStaticIps

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.staticIps.updateStaticIps({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      regions: [\
        "iad1",\
      ],
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

500

Copy

Ask AI

```
[\
  {\
    "envId": "<string>",\
    "connectConfigurationId": "<string>",\
    "dc": "<string>",\
    "passive": true,\
    "buildsEnabled": true,\
    "aws": {\
      "subnetIds": [\
        "<string>"\
      ],\
      "securityGroupId": "<string>"\
    },\
    "createdAt": 123,\
    "updatedAt": 123\
  }\
]
```

connect

# Configures Static IPs for a project

Copy page

Allows configuring Static IPs for a project

Copy page

PATCH

/

v1

/

projects

/

{idOrName}

/

shared-connect-links

updateStaticIps

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.staticIps.updateStaticIps({
    idOrName: "<value>",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
    requestBody: {
      regions: [\
        "iad1",\
      ],
    },
  });

  console.log(result);
}

run();
```

200

400

401

402

403

404

500

Copy

Ask AI

```
[\
  {\
    "envId": "<string>",\
    "connectConfigurationId": "<string>",\
    "dc": "<string>",\
    "passive": true,\
    "buildsEnabled": true,\
    "aws": {\
      "subnetIds": [\
        "<string>"\
      ],\
      "securityGroupId": "<string>"\
    },\
    "createdAt": 123,\
    "updatedAt": 123\
  }\
]
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#parameter-id-or-name)

idOrName

string

required

The unique project identifier or the project name

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Body

application/json

- Option 1

- Option 2


[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#body-builds)

builds

boolean

required

Whether to use Static IPs for builds.

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#body-regions)

regions

string\[\]

Maximum length: `3`

The region in which to enable Static IPs.

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-env-id)

envId

stringenum<string>

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-connect-configuration-id)

connectConfigurationId

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-passive)

passive

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-builds-enabled)

buildsEnabled

boolean

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-created-at)

createdAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-updated-at)

updatedAt

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-dc)

dc

string

[​](https://vercel.com/docs/rest-api/reference/endpoints/connect/configures-static-ips-for-a-project#response-aws)

aws

object

Show child attributes

[Remove a Project Member](https://vercel.com/docs/rest-api/reference/endpoints/projectmembers/remove-a-project-member) [Get rolling release billing status](https://vercel.com/docs/rest-api/reference/endpoints/rolling-release/get-rolling-release-billing-status)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.