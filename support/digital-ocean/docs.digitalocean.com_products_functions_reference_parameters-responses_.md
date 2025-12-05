---
url: "https://docs.digitalocean.com/products/functions/reference/parameters-responses/"
title: "Parameters and Responses | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/functions.b0bb037d0e06c09d659cd32aeb2b48c4195d6e824680f25a98d7ed1c24010331.svg)Functions](https://docs.digitalocean.com/products/functions/)
- [Getting Started](https://docs.digitalocean.com/products/functions/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/functions/getting-started/quickstart/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/functions/how-to/)
  - [Create Functions](https://docs.digitalocean.com/products/functions/how-to/create-functions/)
  - [Develop Functions](https://docs.digitalocean.com/products/functions/how-to/develop-functions/)
  - [Configure Functions](https://docs.digitalocean.com/products/functions/how-to/configure-functions/)
  - [Schedule Functionsprivate](https://docs.digitalocean.com/products/functions/how-to/schedule-functions/)
  - [Call Async Functions](https://docs.digitalocean.com/products/functions/how-to/async-functions/)
  - [Destroy Functions](https://docs.digitalocean.com/products/functions/how-to/destroy/)
  - [Include Static Files](https://docs.digitalocean.com/products/functions/how-to/include-files/)
  - [Create Namespaces](https://docs.digitalocean.com/products/functions/how-to/create-namespaces/)
  - [Destroy Namespaces](https://docs.digitalocean.com/products/functions/how-to/destroy-namespaces/)
  - [Structure Projects](https://docs.digitalocean.com/products/functions/how-to/structure-projects/)
  - [Forward Logs](https://docs.digitalocean.com/products/functions/how-to/forward-logs/)
  - [Deploy to App Platform](https://docs.digitalocean.com/products/functions/how-to/deploy-to-app-platform/)
- [Reference](https://docs.digitalocean.com/products/functions/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Functions)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
  - [Activation Records](https://docs.digitalocean.com/products/functions/reference/activation-records/)
  - [HTTP Headers](https://docs.digitalocean.com/products/functions/reference/http-headers/)
  - [Parameters and Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/)
  - [Project Configuration](https://docs.digitalocean.com/products/functions/reference/project-configuration/)
  - [Supported Runtimes](https://docs.digitalocean.com/products/functions/reference/runtimes/)
    - [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/)
    - [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/)
    - [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/)
    - [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/)
  - [Build Process](https://docs.digitalocean.com/products/functions/reference/build-process/)
- [Concepts](https://docs.digitalocean.com/products/functions/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/functions/)
- [Details](https://docs.digitalocean.com/products/functions/details/)
  - [Features](https://docs.digitalocean.com/products/functions/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/functions/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/functions/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/functions/details/limits/)

- [Reference](https://docs.digitalocean.com/products/functions/reference/)
- Parameters and Responses

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Parameters and Responses

Validated on 31 Mar 2023 • Last edited on 3 Sep 2024

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

All Functions runtimes pass two parameters into their entrypoint – or _handler_ – functions, and expect one return value. The details vary slightly from language to language, and you can read language-specific information for [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/), [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/), [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/), and [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/).

This document covers the aspects of Functions parameters and responses that are the same for every language, including detailed information about the structure and contents of the [`event`](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#event-parameter) and [`context`](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#context-parameter) parameters, and the structure of the response your function should return.

## Overview

The _handler_ of your function is the function that the runtime passes parameters to, and optionally receives a response dictionary from. By default, this is a function called `main`, but this can be set using the [`main` key in `project.yml`](https://docs.digitalocean.com/products/functions/reference/project-configuration/#main).

The first parameter passed to the handler is `event`. This is the input event to the function, typically an HTTP request, or _web event_.

The second parameter, `context`, is data about the function’s execution environment, such as the time remaining before timeout, and memory allocations.

Both parameters are optional and you may ignore them if your function doesn’t require the information they provide.

## Event Parameter

The web event is always provided to the handler in the `event` parameter using whichever data type is most appropriate for the given language. In general, a dictionary-like data structure is used for all supported languages. For more specific details, see the language-specific **Event Parameter** sections for [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#event-parameter), [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/#event-parameter), [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/#event-parameter), and [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#event-parameter).

The web event contains information about the HTTP request that initiated the function call. It usually contains HTTP headers and query string parameters, though the format can vary slightly depending on the value of the `web` key in the `project.yml` file (or the **Web Function** and **Raw HTTP** settings for functions deployed through the control panel interface):

- `web: true`: This is the default mode. Query string parameters and the request body are parsed and added as top-level keys in the `event` dictionary.
- `web: raw`: The HTTP request body and query string are included as-is instead of being parsed.
- `web: false`: No web event is included at all. The dictionary is empty unless you’ve [manually set parameters in the function’s `project.yml` file](https://docs.digitalocean.com/products/functions/reference/project-configuration/#parameters) or passed them through a `doctl` command line invocation.

### Parsed Web Events

The default `web: true` event is structured like the following JSON example:

```js
{
  "http": {
    "headers": {
      "accept": String,
      "accept-encoding": String,
      "content-type": String,
      "user-agent": String,
      "x-forwarded-for": String,
      "x-forwarded-proto": String,
      "x-request-id": String
    },
    "method": String,
    "path": String
  },
  [String]: any
}
```

Note
Additional legacy keys such as `__ow_headers`, `__ow_method`, and `__ow_path` may be available in the event parameter. These keys are deprecated and should not be used. All of the data they contain is also provided under the `http` key, which should be used instead.

The `http` property contains details about the HTTP request:

- The `headers` of the request. The header names are all forced to lowercase and become keys of the `header` dictionary. Refer to the [HTTP Headers reference](https://docs.digitalocean.com/products/functions/reference/http-headers/) for more information about the standard Functions HTTP headers
- The request’s HTTP `method` (`GET` or `POST` for example)
- The `path`, which is any additional information in the request URL after the function name, such as `/example/path`.

`[String]: any` refers to the parameters parsed from the body, query string, and `project.yml` configuration. They are placed at the top level of the event object and their keys are always strings. Their types depend on the type of the parameter provided: parameters parsed from the query string or a `x-www-form-urlencoded` body are always strings, but parameters parsed from a JSON body or `project.yml` retain their original type.

If the query string contains multiple instances of the same key, only the final value is present in the parsed event object. To avoid this behavior, use the `web: raw` option.

When parsed keys overlap between the query string, body, and [the `parameters:` field of `project.yml`](https://docs.digitalocean.com/products/functions/reference/parameters-responses/(/products/functions/reference/project-configuration/#parameters)) the following precedence applies:

```
body > query string > project.yml
```

Keys parsed from the request body override query string parameters, which override parameters set in the `project.yml` configuration file.

### Raw Web Events

For functions where `web: raw` is set, the query string and body are not parsed:

```js
{
  "http": {
    "body": String,
    "headers": {
      "accept": String,
      "accept-encoding": String,
      "content-type": String,
      "host": String,
      "user-agent": String,
      "x-forwarded-for": String,
      "x-forwarded-proto": String,
      "x-request-id": String
    },
    "isBase64Encoded": Boolean,
    "method": String,
    "path": String,
    "queryString": String
  }
  [String]: any
}
```

The raw web event differs from parsed web events in the following ways:

- The raw `body` and `queryString` are present
- `isBase64Encoded` is true when the input is binary. This allows for passing binary data to raw web functions
- `[String]: any` refers to any parameters you’ve set in `project.yml`. These are included at the top level of the dictionary. The keys are strings, and the values are whichever YAML type was originally used.

## Context Parameter

The `context` parameter contains information about the execution environment, such as memory allocations and the time remaining before a timeout.

Each language implements the `context` object slightly differently. For more specific details, see the language-specific **Context Parameter** sections for [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#context-parameter), [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/#context-parameter), [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/#context-parameter), and [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#context-parameter).

Regardless of implementation details, the following information is present for all runtimes:

- **Activation ID**: The function’s activation ID. If the activation is asynchronous, you can use `doctl serverless activations get <your_activation_id>` to retrieve its full [activation record](https://docs.digitalocean.com/products/functions/reference/activation-records/).
- **API host**: The API host URL
- **API key**: If enabled, the API authentication key that was used
- **Deadline**: A Unix timestamp in milliseconds indicating when the function’s invocation times out.
- **Function name**: The name of the function in the form `/<namespace_id>/<package_name>/<function_name>`.
- **Function version**: The version of the function. This is a [semantic version](https://semver.org/) that is automatically incremented each time the function is deployed
- **Namespace**: The name of the namespace the function was deployed into
- **Request ID**: An ID for the function invocation based on internal DigitalOcean monitoring systems.

The `context` parameter also contains a method that can be called by your function to get the time remaining before the invocation times out. The method name varies by runtime and is documented in the language-specific **Context Parameter** sections for [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#context-parameter), [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/#context-parameter), [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/#context-parameter), and [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#context-parameter).

## Returns

Function responses are returned as a dictionary and each language has a slightly different implementation of this. Please see the language-specific **Returns** sections for [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#returns), [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/#returns), [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/#returns), and [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#returns).

The returned dictionary can have three keys:

- `body`: The body of the response. Can be text or base64-encoded binary data. If `body` is a dictionary itself, it is converted to JSON and a `Content-Type: application/json` header is added to the response automatically.
- `statusCode`: The HTTP status code of the response. A `200` code is sent by default, or `204` if there is no `body` in the response.
- `headers`: A dictionary of additional headers to include in the response.

### JSON-only Responses

If you only ever want to return JSON data from your function, you can ignore the above requirements and instead return any result that can be serialized to JSON. To access this option, add `.json` to the end of your function URL when invoking it.

You may also use this `.json` URL format on functions that have a `body` and the other keys described in the previous section. Doing this allows you to see the whole raw response object as JSON, which can be useful when debugging function responses.

In this article...

- [Overview](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#overview)
- [Event Parameter](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#event-parameter)
  - [Parsed Web Events](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#parsed-web-events)
  - [Raw Web Events](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#raw-web-events)
- [Context Parameter](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#context-parameter)
- [Returns](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#returns)
  - [JSON-only Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#json-only-responses)

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