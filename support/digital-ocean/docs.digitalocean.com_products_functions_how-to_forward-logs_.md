---
url: "https://docs.digitalocean.com/products/functions/how-to/forward-logs/"
title: "How to Forward Logs | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/functions/how-to/)
- Forward Logs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Forward Logs

Validated on 20 Dec 2022 • Last edited on 9 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

You can configure functions to forward console and error logs from the function to a third-party logging service. Functions supports Papertrail, Datadog, and Logtail.

To configure your function to ship logs to a third party, you need to define a `LOG_DESTINATIONS` environment variable for it. This environment variable goes in your `project.yml` file and contains a JSON string with details on the log forwarding destination.

The JSON string is a JSON version of the `log_destinations` field of App Platform’s [App Spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) YAML file. You may use the [App Spec reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) for more details on the configuration required.

Note
In App Platform, you configure Papertrail using a syslog endpoint. Functions requires an HTTP source token when using Papertrail.

## Examples

The following examples show how to configure the `LOG_DESTINATIONS` environment variable in your `project.yml` file. The `LOG_DESTINATIONS` line belongs under an `environment:` key at whichever scope is appropriate for your situation: project, package, or function. See the [`project.yml` reference](https://docs.digitalocean.com/products/functions/reference/project-configuration/) for more information about scopes and setting environment variables.

### Papertrail

For Papertrail, create a log destination that accepts token-based authentication over HTTPS. This setting is under the **Accept connections via…** heading on [Papertrail’s Create Log Destination page](https://papertrailapp.com/destinations/new). Refer to [Papertrail’s log destinations documentation](https://www.papertrail.com/help/log-destinations/) for more details.

Use the provided token in your configuration:

```yaml
LOG_DESTINATIONS:'[{"papertrail":{"token":"<your-log-destination-token>"}}]'
```

### Datadog

For Datadog, the configuration requires an endpoint URL and an API key:

```yaml
LOG_DESTINATIONS:'[{"datadog":{"endpoint":"https://http-intake.logs.datadoghq.com","api_key":"<your-api-key>"}}]'
```

### Logtail

For Logtail, [create an HTTP source](https://docs.logtail.com/integrations/rest-api) and use the resulting token for the configuration:

```yaml
LOG_DESTINATIONS:'[{"logtail":{"token":"<your-http-source-token>"}}]'
```

### Multiple Destinations

The `LOG_DESTINATIONS` JSON structure is a list, so you can configure multiple log destinations:

```yaml
LOG_DESTINATIONS:'[{"papertrail":{"token":"<your-http-source-token>"}},{"logtail":{"token":"<your-http-source-token>"}}]'
```

In this article...

- [Examples](https://docs.digitalocean.com/products/functions/how-to/forward-logs/#examples)
  - [Papertrail](https://docs.digitalocean.com/products/functions/how-to/forward-logs/#papertrail)
  - [Datadog](https://docs.digitalocean.com/products/functions/how-to/forward-logs/#datadog)
  - [Logtail](https://docs.digitalocean.com/products/functions/how-to/forward-logs/#logtail)
  - [Multiple Destinations](https://docs.digitalocean.com/products/functions/how-to/forward-logs/#multiple-destinations)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)