---
url: "https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration"
title: "Get a Domain's configuration - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

domains

Get a Domain's configuration

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

##### Endpoints

- access-groups

- artifacts

- checks

- projects

- deployments

- domains

  - [POST\\
    \\
    Purchase a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/purchase-a-domain-deprecated)
  - [GET\\
    \\
    Check the price for a domain (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-the-price-for-a-domain-deprecated)
  - [GET\\
    \\
    Check a Domain Availability (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/check-a-domain-availability-deprecated)
  - [GET\\
    \\
    Get domain transfer info (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated)
  - [GET\\
    \\
    Get a Domain's configuration](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration)
  - [GET\\
    \\
    Get Information for a Single Domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain)
  - [GET\\
    \\
    List all the domains](https://vercel.com/docs/rest-api/reference/endpoints/domains/list-all-the-domains)
  - [POST\\
    \\
    Add an existing domain to the Vercel platform](https://vercel.com/docs/rest-api/reference/endpoints/domains/add-an-existing-domain-to-the-vercel-platform)
  - [PATCH\\
    \\
    Update or move apex domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/update-or-move-apex-domain)
  - [DEL\\
    \\
    Remove a domain by name](https://vercel.com/docs/rest-api/reference/endpoints/domains/remove-a-domain-by-name)
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

- rolling-release

- security

- teams

- webhooks

- aliases

- certs


getDomainConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomainConfig({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

Copy

Ask AI

```
{
  "configuredBy": "CNAME",
  "acceptedChallenges": [\
    "dns-01"\
  ],
  "recommendedIPv4": [\
    {\
      "rank": 123,\
      "value": [\
        "<string>"\
      ]\
    }\
  ],
  "recommendedCNAME": [\
    {\
      "rank": 123,\
      "value": "<string>"\
    }\
  ],
  "misconfigured": true
}
```

domains

# Get a Domain's configuration

Copy page

Get a Domain’s configuration.

Copy page

GET

/

v6

/

domains

/

{domain}

/

config

getDomainConfig

Typescript

Copy

Ask AI

```
import { Vercel } from "@vercel/sdk";

const vercel = new Vercel({
  bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await vercel.domains.getDomainConfig({
    domain: "example.com",
    teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
    slug: "my-team-url-slug",
  });

  console.log(result);
}

run();
```

200

400

401

403

Copy

Ask AI

```
{
  "configuredBy": "CNAME",
  "acceptedChallenges": [\
    "dns-01"\
  ],
  "recommendedIPv4": [\
    {\
      "rank": 123,\
      "value": [\
        "<string>"\
      ]\
    }\
  ],
  "recommendedCNAME": [\
    {\
      "rank": 123,\
      "value": "<string>"\
    }\
  ],
  "misconfigured": true
}
```

#### Authorizations

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#authorization-authorization)

Authorization

string

header

required

Default authentication mechanism

#### Path Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter-domain)

domain

string

required

The name of the domain.

Example:

`"example.com"`

#### Query Parameters

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter-project-id-or-name)

projectIdOrName

string

The project id or name that will be associated with the domain. Use this when the domain is not yet associated with a project.

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter-strict)

strict

enum<string>

When true, the response will only include the nameservers assigned directly to the specified domain. When false and there are no nameservers assigned directly to the specified domain, the response will include the nameservers of the domain's parent zone.

Available options:

`true`,

`false`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter-team-id)

teamId

string

The Team identifier to perform the request on behalf of.

Example:

`"team_1a2b3c4d5e6f7g8h9i0j1k2l"`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter-slug)

slug

string

The Team slug to perform the request on behalf of.

Example:

`"my-team-url-slug"`

#### Response

200

application/json

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-configured-by)

configuredBy

enum<string> \| null

required

How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel.

Available options:

`CNAME`,

`A`,

`http`,

`dns-01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-accepted-challenges)

acceptedChallenges

enum<string>\[\]

required

Which challenge types the domain can use for issuing certs.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#parameter)

enum<string>

Which challenge types the domain can use for issuing certs.

Available options:

`dns-01`,

`http-01`

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-i-pv4)

recommendedIPv4

object\[\]

required

Recommended IPv4s for the domain. rank=1 is the preferred value(s) to use. Only using 1 ip value is acceptable.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-i-pv4-rank)

rank

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-i-pv4-value)

value

string\[\]

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-cname)

recommendedCNAME

object\[\]

required

Recommended CNAMEs for the domain. rank=1 is the preferred value to use.

Show child attributes

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-cname-rank)

rank

number

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-recommended-cname-value)

value

string

required

[​](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-a-domains-configuration#response-misconfigured)

misconfigured

boolean

required

Whether or not the domain is configured AND we can automatically generate a TLS certificate.

[Get domain transfer info (deprecated)](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-domain-transfer-info-deprecated) [Get Information for a Single Domain](https://vercel.com/docs/rest-api/reference/endpoints/domains/get-information-for-a-single-domain)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.