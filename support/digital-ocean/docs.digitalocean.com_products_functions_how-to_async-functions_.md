---
url: "https://docs.digitalocean.com/products/functions/how-to/async-functions/"
title: "How to Call Long-running Functions Asynchronously | DigitalOcean Documentation"
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
- Call Async Functions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Call Long-running Functions Asynchronously

Validated on 21 Aug 2023 • Last edited on 9 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

You can invoke long-running functions asynchronously using the `doctl` command line tool or the Functions REST API. You cannot run functions invoked as web functions asynchronously.

Asynchronous (or _non-blocking_) function invocations immediately return an **activation ID**, which you can then use to retrieve the function’s **activation record**, which includes the function’s output.

Synchronous (or _blocking_) function invocations are automatically converted to asynchronous if execution takes longer than 30 seconds. The converted function returns an activation ID and behaves exactly as if it had been called asynchronously from the start.

## Call a Function Asynchronously using `doctl`

To call a function asynchronously using `doctl`, use the `doctl serverless functions invoke` command with the `--no-wait` flag:

```shell
doctl serverless functions invoke <your-function-name> --no-wait
```

Replace `<your-function-name>` with the name of your function, including the package name if necessary.

Note
Be sure you are connected to the correct Functions namespace when running the above command. Use `doctl serverless namespaces list` to list all of your namespaces, and `doctl serverless connect <example-namespace>` to connect to the namespace containing your function.

The command immediately returns a JSON object containing an activation ID:

```json
{
  "activationId": "b68492d6875840148492d687586014f5"
}
```

The next section shows how to use this ID to retrieve the activation record.

## Retrieve Activation Records Using `doctl`

Use the `doctl serverless activation get` command with an activation ID to retrieve the activation record:

```shell
doctl serverless activation get <your-activation-id>
```

Substitute your activation ID in this command.

If the function invocation is complete, it returns the full activation record as JSON. This record contains the output of the function along with other information about the process. See the [Activation Record reference](https://docs.digitalocean.com/products/functions/reference/activation-records/) for more details.

```json
{
  "namespace": "fn-378ae839-e58b-4cd1-afcf-632cd7b7b8db",
  "name": "sample/hello",
  "version": "0.0.1",
  "subject": "da25db4890885df62c1bfb6afdb4c91cb3b4bca5",
  "activationId": "b68492d6875840148492d687586014f5",
  "start": 1692623022053,
  "end": 1692623024056,
  "duration": 2002,
  "statusCode": 0,
  "response": {
    "status": "success",
    "statusCode": 0,
    "success": true,
    "result": {
      "body": "Hello stranger!"
    }
  },
  // . . .
```

If the function is still running, the activation record does not yet exist and the command returns an error message. Additionally, the `doctl` command exits with an exit code of `1`, indicating an error occurred:

```
Error: The requested activation record does not exist. This either means that the invocation is still running and the record is not yet created or the activation's retention period has already expired.
```

The retention period for activation records is at least 72 hours. If you see this error and your activation ID is less than 72 hours old, your function is still running and no activation record exists yet. Wait for your function to finish and then try again.

To retrieve only the response from your function with no additional process information, use `result` instead of `get` in the `doctl` command:

```shell
doctl serverless activation result <your-activation-id>
```

```json
{
  "body": "Hello stranger!"
}
```

Both `get` and `result` support using the `--last` flag instead of specifying an activation ID. This returns the most recent activation record or result in the current namespace:

```shell
doctl serverless activation result --last
```

The command prints an activation header, followed by the result:

```
=== b68492d6875840148492d687586014f5 success 02/01 12:33:17 hello:0.0.12
{
  "body": "Hello stranger!"
}
```

To get only the result with no header, add the `-q` or `--quiet` flag:

```shell
doctl serverless activation result --last -q
```

The command prints the result only:

```json
{
  "body": "Hello stranger!"
}
```

## Call a Function Asynchronously using `curl` and the REST API

To call a function asynchronously using `curl` or any other HTTP client or library, use the Functions REST API. To find your function’s REST API URL and authorization token, navigate to the function in the DigitalOcean Control Panel, then click the function’s **Settings** tab.

In the **Access & Security** section, under **REST API**, click the **Show Token** link and copy the entire `curl` command.

![The settings tab of an individual function, showing the Access & Security section with Web and REST API URLs listed](https://docs.digitalocean.com/screenshots/functions/functions-access-urls.dbd8b29db55122692f8e12cb059342c3ef65e119dabca60abbe81cab29c73127.png)

Here is an example of the copied `curl` command:

```shell
curl -X POST "https://faas-EXAMPLE-2ef2e6cc.doserverless.co/api/v1/namespaces/fn-EXAMPLE-632cd7b7b8db/actions/sample/hello?blocking=true&result=true" \
  -H "Content-Type: application/json" \
  -H "Authorization: MWMwEXAMPLEXckk="
```

Your command has a different server name (`faas-EXAMPLE-2ef2e6cc`), namespace ID (`fn-EXAMPLE-632cd7b7b8db`), and token.

The copied command sends a `POST` request to your function with the options `blocking=true&result=true` appended as an HTTP query string.

The `blocking=true` option instructs the runtime to run this function synchronously. Change this to `blocking=false` to instead invoke the function asynchronously.

Remove the `result=true` option because it doesn’t apply to asynchronous function invocations. Now the `curl` command looks like this:

```shell
curl -X POST "https://<your-server>.doserverless.co/api/v1/namespaces/<your-namespace>/actions/sample/hello?blocking=false" \
  -H "Content-Type: application/json" \
  -H "Authorization: <your-token>"
```

Run the `curl` command using your own URL pointing to your server and namespace, and with your authorization token.

The Functions service immediately returns an activation ID:

```json
{
  "activationId": "b68492d6875840148492d687586014f5"
}
```

You can get the activation record using `doctl` as shown in the previous section or use another REST API call as described in the following section.

## Retrieve Activation Records Using `curl` and the REST API

From the REST API URL you used in the previous section, remove the `/actions/sample/hello...` portion, and replace it with `/activations/<your-activation-id>`. Also switch `curl`’s request type from `POST` to `GET`:

```shell
curl -X GET "https://<your-server>.doserverless.co/api/v1/namespaces/<your-namespace>/activations/<your-activation-id>" \
        -H "Authorization: Basic <your-token-here>"
```

Run the `curl` command after replacing the placeholders with your server, namespace, and authorization token.

If the function invocation is complete, the API returns the full activation record as JSON. This record contains the output of the function along with other information about the process. See the [Activation Record reference](https://docs.digitalocean.com/products/functions/reference/activation-records/) for more details.

```json
{
  "namespace": "fn-378ae839-e58b-4cd1-afcf-632cd7b7b8db",
  "name": "sample/hello",
  "version": "0.0.1",
  "subject": "da25db4890885df62c1bfb6afdb4c91cb3b4bca5",
  "activationId": "b68492d6875840148492d687586014f5",
  "start": 1692623022053,
  "end": 1692623024056,
  "duration": 2002,
  "statusCode": 0,
  "response": {
    "status": "success",
    "statusCode": 0,
    "success": true,
    "result": {
      "body": "Hello stranger!"
    }
  },
  // . . .
```

If the function is still running, the activation record does not exist yet, and the API returns an error message:

```json
{
  "code": "338d3285577add412cf6dee4e0a1fc9f",
  "error": "The requested activation record does not exist. This either means that the invocation is still running and the record is not yet created or the activation's retention period has already expired."
}
```

The retention period for activation records is 72 hours. If you see this error and your activation ID is less than 72 hours old, your function is still running and no activation record exists yet. Wait for your function to finish and then try again.

You can also list out multiple recent activations by leaving the activation ID off of the URL. Optionally, you can limit the list size using `?limit=<number>`. The following `curl` command lists the last three activations in the specified namespace:

```shell
curl -X GET "https://<your-server>.doserverless.co/api/v1/namespaces/<your-namespace>/activations?limit=3" \
        -H "Authorization: Basic <your-token>"
```

## Retrieve Activation Records Using the Control Panel

You can also find activation records in the DigitalOcean Control Panel. Navigate to the Functions namespace containing your function, then click the **Logs** tab:

![The Logs tab of an individual function, showing the Function and Period selection drop-downs, and a list of logs](https://docs.digitalocean.com/screenshots/functions/logs-tab.99d0f9ead94c6215b1af08f366680499a7548e5fe1f6c1a3c60f8c30dbbfa662.png)

You can view all activations in the namespace or filter based on function name and time period. Click the `[+]` button next to an activation to see the full activation record details.

In this article...

- [Call a Function Asynchronously using `doctl`](https://docs.digitalocean.com/products/functions/how-to/async-functions/#call-a-function-asynchronously-using-doctl)
- [Retrieve Activation Records Using `doctl`](https://docs.digitalocean.com/products/functions/how-to/async-functions/#retrieve-activation-records-using-doctl)
- [Call a Function Asynchronously using `curl` and the REST API](https://docs.digitalocean.com/products/functions/how-to/async-functions/#call-a-function-asynchronously-using-curl-and-the-rest-api)
- [Retrieve Activation Records Using `curl` and the REST API](https://docs.digitalocean.com/products/functions/how-to/async-functions/#retrieve-activation-records-using-curl-and-the-rest-api)
- [Retrieve Activation Records Using the Control Panel](https://docs.digitalocean.com/products/functions/how-to/async-functions/#retrieve-activation-records-using-the-control-panel)

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