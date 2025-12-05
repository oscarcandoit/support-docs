---
url: "https://vercel.com/docs/rest-api/reference/errors"
title: "Errors - Vercel API Docs"
---

[Skip to main content](https://vercel.com/docs/rest-api/reference/errors#content-area)

[Vercel API Docs home page![light logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-light.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=e16d6302db6411b67d77ddc3810391e8)![dark logo](https://mintcdn.com/vercel/fxKUJx-Oy_im1Iu0/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=fxKUJx-Oy_im1Iu0&q=85&s=ea47a9bb9db0106e05436a6578c50e9f)](https://vercel.com/docs/rest-api/reference)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Errors

[Get Started](https://vercel.com/docs/rest-api/reference/welcome) [Endpoints](https://vercel.com/docs/rest-api/reference/endpoints/access-groups/reads-an-access-group)

- [Using the REST API](https://vercel.com/docs/rest-api/reference/welcome)

- [Using the Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk)

- [Errors](https://vercel.com/docs/rest-api/reference/errors)

##### Examples

- [Deployment Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation)
- [Domain Management](https://vercel.com/docs/rest-api/reference/examples/domain-management)
- [Environment Variables](https://vercel.com/docs/rest-api/reference/examples/environment-variables)
- [Integrations](https://vercel.com/docs/rest-api/reference/examples/integrations)
- [Logs and Monitoring](https://vercel.com/docs/rest-api/reference/examples/logs-monitoring)
- [Project Management](https://vercel.com/docs/rest-api/reference/examples/project-management)
- [Team and User Management](https://vercel.com/docs/rest-api/reference/examples/team-management)
- [Vercel WAF Management](https://vercel.com/docs/rest-api/reference/examples/firewall-management)
- [Rolling Releases Management](https://vercel.com/docs/rest-api/reference/examples/rolling-releases)

On this page

- [Generic Errors](https://vercel.com/docs/rest-api/reference/errors#generic-errors)
- [Forbidden](https://vercel.com/docs/rest-api/reference/errors#forbidden)
- [Rate Limited](https://vercel.com/docs/rest-api/reference/errors#rate-limited)
- [Bad Request](https://vercel.com/docs/rest-api/reference/errors#bad-request)
- [Internal Server Error](https://vercel.com/docs/rest-api/reference/errors#internal-server-error)
- [Resource Not Found](https://vercel.com/docs/rest-api/reference/errors#resource-not-found)
- [Method Unknown](https://vercel.com/docs/rest-api/reference/errors#method-unknown)
- [Deployment Errors](https://vercel.com/docs/rest-api/reference/errors#deployment-errors)
- [Missing Files](https://vercel.com/docs/rest-api/reference/errors#missing-files)
- [No Files in the Deployment](https://vercel.com/docs/rest-api/reference/errors#no-files-in-the-deployment)
- [Too Many Environment Variables](https://vercel.com/docs/rest-api/reference/errors#too-many-environment-variables)
- [Environment Variable Key with Invalid Characters](https://vercel.com/docs/rest-api/reference/errors#environment-variable-key-with-invalid-characters)
- [Environment Variable Key with a Long Name](https://vercel.com/docs/rest-api/reference/errors#environment-variable-key-with-a-long-name)
- [Environment Variable Value with a Long Name](https://vercel.com/docs/rest-api/reference/errors#environment-variable-value-with-a-long-name)
- [Environment Variable Value Is an Object without UID](https://vercel.com/docs/rest-api/reference/errors#environment-variable-value-is-an-object-without-uid)
- [Environment Variable Value Is an Object with Unknown Props](https://vercel.com/docs/rest-api/reference/errors#environment-variable-value-is-an-object-with-unknown-props)
- [Environment Variable Value with an Invalid Type](https://vercel.com/docs/rest-api/reference/errors#environment-variable-value-with-an-invalid-type)
- [Not Allowed to Access a Secret](https://vercel.com/docs/rest-api/reference/errors#not-allowed-to-access-a-secret)
- [Missing Secret](https://vercel.com/docs/rest-api/reference/errors#missing-secret)
- [Domain Errors](https://vercel.com/docs/rest-api/reference/errors#domain-errors)
- [Domain Forbidden](https://vercel.com/docs/rest-api/reference/errors#domain-forbidden)
- [Domain Not Found](https://vercel.com/docs/rest-api/reference/errors#domain-not-found)
- [Missing Domain Name](https://vercel.com/docs/rest-api/reference/errors#missing-domain-name)
- [Conflicting Aliases](https://vercel.com/docs/rest-api/reference/errors#conflicting-aliases)
- [Not Modified](https://vercel.com/docs/rest-api/reference/errors#not-modified)
- [Missing Name for Domain](https://vercel.com/docs/rest-api/reference/errors#missing-name-for-domain)
- [Invalid Name for Domain](https://vercel.com/docs/rest-api/reference/errors#invalid-name-for-domain)
- [Custom Domain Needs a Plan Upgrade](https://vercel.com/docs/rest-api/reference/errors#custom-domain-needs-a-plan-upgrade)
- [Domain Already Exists](https://vercel.com/docs/rest-api/reference/errors#domain-already-exists)
- [Can’t Create the Domain](https://vercel.com/docs/rest-api/reference/errors#can%E2%80%99t-create-the-domain)
- [Failed to Add Domain after Purchase](https://vercel.com/docs/rest-api/reference/errors#failed-to-add-domain-after-purchase)
- [Unable to Determine the Domain Price](https://vercel.com/docs/rest-api/reference/errors#unable-to-determine-the-domain-price)
- [Domain price mismatch](https://vercel.com/docs/rest-api/reference/errors#domain-price-mismatch)
- [Domain Is Not Available](https://vercel.com/docs/rest-api/reference/errors#domain-is-not-available)
- [Invalid Domain Name](https://vercel.com/docs/rest-api/reference/errors#invalid-domain-name)
- [Missing DNS Record Name](https://vercel.com/docs/rest-api/reference/errors#missing-dns-record-name)
- [DNS Errors](https://vercel.com/docs/rest-api/reference/errors#dns-errors)
- [Missing DNS Record Name](https://vercel.com/docs/rest-api/reference/errors#missing-dns-record-name-2)
- [Missing DNS Record Type](https://vercel.com/docs/rest-api/reference/errors#missing-dns-record-type)
- [OAuth2 errors](https://vercel.com/docs/rest-api/reference/errors#oauth2-errors)
- [Client Not Found](https://vercel.com/docs/rest-api/reference/errors#client-not-found)

# Errors

Copy page

List of general and specific errors you may encounter when using the REST API.

Copy page

## [​](https://vercel.com/docs/rest-api/reference/errors\#generic-errors)  Generic Errors

These error codes are consistent for all endpoints.

### [​](https://vercel.com/docs/rest-api/reference/errors\#forbidden)  Forbidden

You’re not authorized to use the endpoint. This usually happens due to missing an user token.

Similar to the HTTP 403 Forbidden error.

error-response-forbidden

Copy

Ask AI

```
{
  "error": {
    "code": "forbidden",
    "message": "Not authorized"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#rate-limited)  Rate Limited

You exceeded the maximum allotted requests.The limit of request is per endpoint basis so you could continue using another endpoints even if some of them give you this error.

error-response-rate-limited

Copy

Ask AI

```
{
  "error": {
    "code": "rate_limited",
    "message": "The rate limit of 6 exceeded for 'api-www-user-update-username'. Try again in 7 days",
    "limit": {
      "remaining": 0,
      "reset": 1571432075,
      "resetMs": 1571432075563,
      "total": 6
    }
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#bad-request)  Bad Request

There was an error with the request, the `error.message` would contain information about the issue.

error-response-bad-request

Copy

Ask AI

```
{
  "error": {
    "code": "bad_request",
    "message": "An english description of the error that just occurred"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#internal-server-error)  Internal Server Error

This errors is similar to the HTTP 500 Internal Server Error error code.

error-response-internal-server-error

Copy

Ask AI

```
{
  "error": {
    "code": "internal_server_error",
    "message": "An unexpected internal error occurred"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#resource-not-found)  Resource Not Found

The requested resource could not be found

error-response-not-Found

Copy

Ask AI

```
{
  "error": {
    "code": "not_found",
    "message": "Could not find the RESOURCE: ID"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#method-unknown)  Method Unknown

The endpoint you’re requesting does not handle the method you defined. The error message will contain the methods the endpoint responds to.

error-response-method-unknown

Copy

Ask AI

```
{
  "error": {
    "code": "method_unknown",
    "message": "This endpoint only responds to METHOD"
  }
}
```

## [​](https://vercel.com/docs/rest-api/reference/errors\#deployment-errors)  Deployment Errors

These error codes can happen when using any [deployment related endpoint](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-deployment-events).

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-files)  Missing Files

Some of the files you defined when creating the deployment are missing.

error-response-missing-files

Copy

Ask AI

```
{
  "error": {
    "code": "missing_files",
    "message": "Missing files",
    "missing": []
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#no-files-in-the-deployment)  No Files in the Deployment

You tried to create an empty deployment.

error-response-no-files

Copy

Ask AI

```
{
  "error": {
    "code": "no_files",
    "message": "No files in the deployment"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#too-many-environment-variables)  Too Many Environment Variables

The limit of environment variables per deployment is 100 and you defined more. The error message indicates the amount you define.

error-response-too-many-env-keys

Copy

Ask AI

```
{
  "error": {
    "code": "env_too_many_keys",
    "message": "Too many env vars have been supplied (100 max allowed, but got #)"
  }
}
```

`#`is your number of variables.

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-key-with-invalid-characters)  Environment Variable Key with Invalid Characters

Some environment variable name contains an invalid character. The only valid characters are letters, digits and `_`.The error message will contain the `KEY` with the problem.

error-response-env-key-invalid-characters

Copy

Ask AI

```
{
  "error": {
    "code": "env_key_invalid_characters",
    "message": "The env key "KEY" contains invalid characters. Only letters, digits and \`_\` are allowed",
    "key": KEY
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-key-with-a-long-name)  Environment Variable Key with a Long Name

An environment variable name is too long, the maximum permitted name is 256 characters.The error message contains the environment `KEY`.

error-response-env-key-invalid-length

Copy

Ask AI

```
{
  "error": {
    "code": "env_key_invalid_length",
    "message": "The env key "KEY" exceeds the 256 length limit",
    "key": KEY
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-value-with-a-long-name)  Environment Variable Value with a Long Name

An environment variable value contains a value too long, the maximum permitted value is 65536 characters.The error message contains the environment `KEY`.

error-response-env-value-invalid-length

Copy

Ask AI

```
{
  "error": {
    "code": "env_value_invalid_length",
    "message": "The env value for "KEY" exceeds the 65536 length limit",
    "key": KEY,
    "value": VALUE
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-value-is-an-object-without-uid)  Environment Variable Value Is an Object without UID

The value of an environment variable is object but it doesn’t have a `uid`.The error message contains the environment `KEY` which has the error.

error-response-env-value-invalid-type

Copy

Ask AI

```
{
  "error": {
    "code": "env_value_invalid_type_missing_uid",
    "message": "The env key "KEY" passed an object as a value with no \`uid\` key"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-value-is-an-object-with-unknown-props)  Environment Variable Value Is an Object with Unknown Props

The value of an environment variable is an object with unknown attributes, it only can have a `uid` key inside the object.

error-response-env-value-invalid-type

Copy

Ask AI

```
{
  "error": {
    "code": "env_value_invalid_type_unknown_props",
    "message": "The env key "KEY" passed an object with unknown properties. Only \`uid\` is allowed when passing an object"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#environment-variable-value-with-an-invalid-type)  Environment Variable Value with an Invalid Type

An environment variable value passed is of an unsupported type.The error message contains the environment `KEY`.

error-response-env-value-invalid-type

Copy

Ask AI

```
{
  "error": {
    "code": "env_value_invalid_type",
    "message": "The env key "KEY" passed an unsupported type for its value",
    "key": KEY
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#not-allowed-to-access-a-secret)  Not Allowed to Access a Secret

You’re trying to use a secret but you don’t have access to it.

error-response-secret-forbidden

Copy

Ask AI

```
{
  "error": {
    "code": "env_secret_forbidden",
    "message": "Not allowed to access secret \\"NAME\\"",
    "uid": UID
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-secret)  Missing Secret

You’re trying to use a secret as an environment value and it doesn’t exists.

error-response-secret-missing

Copy

Ask AI

```
{
  "error": {
    "code": "env_secret_missing",
    "message": "Could not find a secret by uid "UID"",
    "uid": UID
  }
}
```

## [​](https://vercel.com/docs/rest-api/reference/errors\#domain-errors)  Domain Errors

These error code could happen when using any [domains related endpoints](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/buy-a-domain).

### [​](https://vercel.com/docs/rest-api/reference/errors\#domain-forbidden)  Domain Forbidden

You don’t have access to the domain, this usually mean this domains is owned by another account or team.The domain is specified in the message and the `DOMAIN` key.

error-response-forbidden

Copy

Ask AI

```
{
  "error": {
    "code": "forbidden",
    "message": "You don't have access to \\"DOMAIN\\"",
    "domain": DOMAIN
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#domain-not-found)  Domain Not Found

The domain name could not be found in our system. Try to [add it first](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/transfer-in-a-domain).

error-response-not-found

Copy

Ask AI

```
{
  "error": {
    "code": "not_found",
    "message": "Domain name not found"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-domain-name)  Missing Domain Name

The domain name wasn’t specified in the URL. This means you tried to use an endpoint which require you to define the domain name in the URL but didn’t defined it.

error-response-missing-name

Copy

Ask AI

```
{
  "error": {
    "code": "missing_name",
    "message": "The URL was expected to include the domain name. Example: /domains/google.com"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#conflicting-aliases)  Conflicting Aliases

You must [remove the aliases](https://vercel.com/docs/rest-api/reference/endpoints/aliases/delete-an-alias#delete-an-alias) described in the error before removing the domains.The aliases are specified in the `ALIASES` key.

error-response-conflict-alias

Copy

Ask AI

```
{
  "error": {
    "code": "conflict_aliases",
    "message": "The following aliases must be removed before removing the domain: ALIASES",
    "aliases": ALIASES
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#not-modified)  Not Modified

When trying to modify a domain nothing was required to change.

error-response-not-modified

Copy

Ask AI

```
{
  "error": {
    "code": "not_modified",
    "message": "Nothing to do"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-name-for-domain)  Missing Name for Domain

When trying to add a domain the name wasn’t present in the request body.

error-response-missing-name

Copy

Ask AI

```
{
  "error": {
    "code": "missing_name",
    "message": "The `name` field in the body was expected but is not present in the body payload. Example value: `example.com`"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#invalid-name-for-domain)  Invalid Name for Domain

The domain name defined in the request body is invalid.The name is specified in the error as the `NAME` key.

error-response-invalid-name

Copy

Ask AI

```
{
  "error": {
    "code": "invalid_name",
    "message": "The \`name\` field contains an invalid domain name ("NAME")",
    "name": NAME
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#custom-domain-needs-a-plan-upgrade)  Custom Domain Needs a Plan Upgrade

In order to add a custom domain to your account or team you need to upgrade to a paid plan.

error-response-domain-needs-upgrade

Copy

Ask AI

```
{
  "error": {
    "code": "custom_domain_needs_upgrade",
    "message": "Domain name creation requires a premium account."
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#domain-already-exists)  Domain Already Exists

The domain name you’re trying to add already exists.The domain name and its current ID are received in the `NAME` and `DOMAIN_ID` keys.

error-response-not-modified

Copy

Ask AI

```
{
  "error": {
    "code": "not_modified",
    "message": "The domain "NAME" already exists",
    "name": NAME,
    "uid": DOMAIN_ID
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#can%E2%80%99t-create-the-domain)  Can’t Create the Domain

The domain name can’t be created. Most probably it couldn’t be verified.

error-response-forbidden

Copy

Ask AI

```
{
  "error": {
    "code": "forbidden",
    "message": "You don't have permission to create a domain"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#failed-to-add-domain-after-purchase)  Failed to Add Domain after Purchase

We were able to purchase a domain for you but we had an error when trying to add it to your account. Please contact us on **[Contact Support](https://vercel.com/help)**.

error-response-failed-add-domain

Copy

Ask AI

```
{
  "error": {
    "code": "failed_to_add_domain",
    "message": "The domain was bought but couldn't be added.
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#unable-to-determine-the-domain-price)  Unable to Determine the Domain Price

We’re unable to determine the domain price of a domain.

error-response-service-unavailable

Copy

Ask AI

```
{
  "error": {
    "code": "service_unavailable",
    "message": "Failed to determine the domain price"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#domain-price-mismatch)  Domain price mismatch

The `expectedPrice` supplied in the request body does not match the actual domain price, which is specified in the `actualPrice` key.

error-response-price-mismatch

Copy

Ask AI

```
{
  "error": {
    "code": "price_mismatch",
    "message": "The expected price does not match the actual price",
    "price": ACTUAL_PRICE
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#domain-is-not-available)  Domain Is Not Available

The domain name is not available to be purchased.

error-response-not-available

Copy

Ask AI

```
{
  "error": {
    "code": "not_available",
    "message": "Domain is not available"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#invalid-domain-name)  Invalid Domain Name

The domain name or TLD is invalid or not supported.

error-response-invalid-domain

Copy

Ask AI

```
{
  "error": {
    "code": "invalid_domain",
    "message": "Invalid domain or TLD"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-dns-record-name)  Missing DNS Record Name

The DNS record key `name` is required and was not provided. It could be [any valid DNS record](https://en.wikipedia.org/wiki/List_of_DNS_record_types).

error-response-missing-type

Copy

Ask AI

```
{
  "error": {
    "code": "missing_type",
    "message": "Missing `type` parameter"
  }
}
```

## [​](https://vercel.com/docs/rest-api/reference/errors\#dns-errors)  DNS Errors

These error code could happen when using any [DNS related endpoint](https://vercel.com/docs/rest-api/reference/endpoints/dns/list-existing-dns-records).

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-dns-record-name-2)  Missing DNS Record Name

The DNS record key `name` is required and was not provided. It should be either a subdomain or `@` for the domain itself.

error-response-missing-Name

Copy

Ask AI

```
{
  "error": {
    "code": "missing_name",
    "message": "Missing `name` parameter"
  }
}
```

### [​](https://vercel.com/docs/rest-api/reference/errors\#missing-dns-record-type)  Missing DNS Record Type

The DNS record key `name` is required and was not provided. It could be [any valid DNS record](https://en.wikipedia.org/wiki/List_of_DNS_record_types).

error-response-missing-type

Copy

Ask AI

```
{
  "error": {
    "code": "missing_type",
    "message": "Missing `type` parameter"
  }
}
```

## [​](https://vercel.com/docs/rest-api/reference/errors\#oauth2-errors)  OAuth2 errors

These errors could occur when using any [OAuth2 related endpoint](https://vercel.com/docs/integrations/vercel-api-integrations#create-an-access-token).

### [​](https://vercel.com/docs/rest-api/reference/errors\#client-not-found)  Client Not Found

The OAuth2 client ID could not be found or doesn’t exist.

error-response-not-found

Copy

Ask AI

```
{
  "error": {
    "code": "not_found",
    "message": "OAuth client doesn't not found: CLIENT_ID"
  }
}
```

[Using the Vercel SDK](https://vercel.com/docs/rest-api/reference/sdk) [Deployment Automation](https://vercel.com/docs/rest-api/reference/examples/deployments-automation)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel)

Assistant

Responses are generated using AI and may contain mistakes.