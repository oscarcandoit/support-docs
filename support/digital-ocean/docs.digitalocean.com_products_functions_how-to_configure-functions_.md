---
url: "https://docs.digitalocean.com/products/functions/how-to/configure-functions/"
title: "How to Configure Functions | DigitalOcean Documentation"
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
- Configure Functions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure Functions

Validated on 23 May 2022 • Last edited on 9 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

If you have deployed a function through the DigitalOcean Control Panel, you can configure it using its **Settings** tab.

Note

Functions that have been deployed from the command line using `doctl` should be configured through their `project.yml` file instead. Any settings changed in the control panel could be overwritten by future command line deploys.

See the [Project Configuration YAML File reference](https://docs.digitalocean.com/products/functions/reference/project-configuration/) for more information on configuring settings using `project.yml`.

To get to a function’s **Settings** tab, first navigate to the function in the control panel: find the function that you’d like to update in the function list, then click its name to go to the function’s **Source** tab. Then, click the **Settings** tab:

![The settings tab of an individual function, showing options for Runtime, Limits, Environment Variables, and Access & Security](https://docs.digitalocean.com/screenshots/functions/function-settings-tab.27894e6d82bbef52bcacf7392be9295d0328bc6f14be2444e58c7c8df62ffc3b.png)

From this tab you can configure the function’s runtime, resource limits, environmental variables, and its access and security settings. You can also destroy the function to permanently delete it.

## Runtime Setting

A function’s runtime is the programming language environment that runs your code. To change the runtime, click the **Edit** text beside the runtime setting. Choose a new runtime from the drop-down menu, then press **Save** to save the selection.

Warning
If you change your runtime to a completely different language, your function’s code is replaced with example code for the new language. If you change to a different version of the same language, your code remains unchanged.

## Resource Limits

The **Limits** section allows for editing the function’s timeout and memory limits. Click the **Edit** text to change these settings:

![A screenshot of the interface for setting resource limits on a function, showing one text box for 'Timeout' and one for 'Memory'](https://docs.digitalocean.com/screenshots/functions/function-settings-limits.fa0b8ac43b84d9b1245c0ff6ebf06d052cfa0353bc307363211f3a40bc5ae4d9.png)

- **Timeout**: entered in milliseconds (ms), this setting determines the maximum length of time your function runs before it is terminated. This is useful for automatically ending function invocations that are taking longer than expected due to errors or connectivity issues. The maximum timeout is 15 minutes.
- **Memory**: entered in megabytes (MB), this is the amount of memory resources available to your function. The maximum memory setting is currently 1024MB (1GB).

## Environment Variables

The **Environment Variables** section shows how many environment variables are currently set. Click the **Edit** text to edit the variables.

The editing interface shows the current variables, a button for the **Raw Editor**, and a form where you can add key/value pairs one at a time.

To add an environment variable, fill out the **Add Environment Variable** form, then press **Add**. This screenshot shows the user adding an `example_key=demo` variable:

![A screenshot of the interface for adding environment variables to a function, consisting of a 'Raw Editor' button and a form for entering key/value pairs.](https://docs.digitalocean.com/screenshots/functions/function-settings-env-add.69992c15d633405c8b1304a3c1fe1089cb85502b44424cc376207352828aaf99.png)

After pressing **Add** the variable is added to the list of variables:

![A screenshot of the environment variable interface showing one 'example_key' variable set.](https://docs.digitalocean.com/screenshots/functions/function-settings-env-list.c07ad00eb1fbd989811b287c451a385f912dd44b216cfb7a55b1c1595d3bbb3f.png)

From here, **you must press _Save_ to save the changes to your variables** and exit out of the editing interface.

An alternate way of adding and editing environment variables is to use the raw editor. This can be useful for copying and pasting multiple variables at once. Click the **Raw Editor** button to open the editor:

![A screenshot of the raw environment variable editing interface, which looks like a text editor with two lines, one for 'example_key' and one for 'second_key'.](https://docs.digitalocean.com/screenshots/functions/function-settings-env-raw.9a58e7abc484c52779a7cd34eb7a4cf251d748ee4e6157b073f7d87af0364162.png)

You may add `key=value` pairs following standard `.env` file rules. Hit **Save** and the variables is parsed and the list of variables is updated. Press **Save** again to save the new set of variables and exit the editing interface.

## Access & Security

This section allows you to control settings related to **Web Functions** and function authentication. It also shows example `curl` commands for invoking the current function.

**Web Functions** are functions that are accessible through normal HTTP methods such as `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`. These functions are expected to be synchronous, meaning they accept requests, do their work, and return a response as soon as possible (within the configured timeout).

Click the **Edit** text to configure the **Web Functions** Settings:

![A screenshot of the Web Function options, including checkboxes for 'Web Function', 'Raw HTTP', and 'Secure Web Function'.](https://docs.digitalocean.com/screenshots/functions/function-settings-web.739daeccabf5d2b98a652fb3d6b2ef960f78d8777303adcb5fdea60c698bb513.png)

There are three checkboxes to configure:

- **Web Function**: determines if the web function feature is enabled. If you disable web functions, you can still access your function through the authenticated REST API.
- **Raw HTTP**: when enabled, the function receives requests as base64-encoded text, instead of a parsed JSON body.
- **Secure Web Function**: by default, web functions can be invoked by anybody who knows the function URL. To require authentication, enable **Secure Web Function**. This prompts you to enter a secret token, which you then need to provide in the `x-require-whisk-auth` header for each request.

## Destroy Function

To permanently destroy your function, click **Destroy**. A confirmation form pops up. Enter the function name into the field and then press **Destroy** again to confirm.

You can read more about the **Destroy** feature in [How to Destroy Functions](https://docs.digitalocean.com/products/functions/how-to/destroy/)

In this article...

- [Runtime Setting](https://docs.digitalocean.com/products/functions/how-to/configure-functions/#runtime-setting)
- [Resource Limits](https://docs.digitalocean.com/products/functions/how-to/configure-functions/#resource-limits)
- [Environment Variables](https://docs.digitalocean.com/products/functions/how-to/configure-functions/#environment-variables)
- [Access & Security](https://docs.digitalocean.com/products/functions/how-to/configure-functions/#access--security)
- [Destroy Function](https://docs.digitalocean.com/products/functions/how-to/configure-functions/#destroy-function)

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