---
url: "https://docs.digitalocean.com/products/functions/reference/runtimes/php/"
title: "Functions PHP Runtime | DigitalOcean Documentation"
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
- [Supported Runtimes](https://docs.digitalocean.com/products/functions/reference/runtimes/)
- PHP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Functions PHP Runtime

Validated on 31 Mar 2023 • Last edited on 17 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

Functions supports PHP 8.0 (`php:8.0`) and PHP 8.2 (`php:8.2`). Specify the desired runtime and version with the [`runtime` key in your `project.yml` file](https://docs.digitalocean.com/products/functions/reference/project-configuration/#runtime), or by using the **Runtime** drop-down when creating a function through the control panel.

The Functions PHP runtime passes [two parameters](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#parameters) to your handler function, and expects either no return value or a properly formatted response array.

The entrypoint must be a file named `index.php`.

## A PHP Echo Function

Here is a PHP function that responds with all the event and context information available to it:

```php
<?php
function main(array $event, object $context) : array
{
    return ["body" => ["event" => $event, "context" => $context]];
}
```

This can be useful for getting started with the Functions platform or for debugging.

The runtime expects a function called `main` in the `index.php` file to act as the _entry point_ or the _handler_. This handler function is the only function where the runtime passes in data and receive responses.

You can set a different function name as the handler using the [`main` key in `project.yml`](https://docs.digitalocean.com/products/functions/reference/project-configuration/#main).

The `main` function above takes two parameters, an `$event` array and a `$context` object. It returns them as the `body` of the response array. This data structure is automatically converted to JSON and returned.

## Parameters

The handler function is always passed two parameters, `$event` and `$context`.

Note
Information about function parameters that is not language-specific can be found in the [Parameters and Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/) reference documentation.

The first parameter, [`event`](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#event-parameter), is the input event that initiated the function. When this is an HTTP event it’s called a _web event_.

The second parameter, [`$context`](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#context-parameter), is data about the function’s execution environment such as memory allocations and time remaining before a timeout.

Both parameters are optional and you may ignore them if your function doesn’t require the information they provide. The parameter list for your handler function should look like one of the following:

- `(array $event, object $context)`: Accesses both parameters.
- `(array $event)`: Accesses only the event parameter.
- `(array $_, object $context)`: Accesses only the context parameter (`$_` is a common convention for unused parameters, though you may need to mark it as unused to satisfy your linter or IDE).
- `()`: Accesses neither.

Here is a function that uses both parameters to return a personalized `Hello world` and the function’s version number:

```php
<?php
function main(array $event, object $context) : array
{
    $name = $event["name"] ?? "stranger";
    $version = $context->{"functionVersion"};

    return ["body" => "Hello $name! This is version $version."];
}
```

If you add this example function to your namespace, you can call the function by pasting its URL in your browser and adding a `name` field in a query string at the end:

Note

You can get the URL for your function from the control panel interface, or by running the following command on the command line:

```shell
doctl serverless function get <function-name> --url
```

```
https://<your-function-url>?name=Sammy
```

Or use `curl` to send the input as form data in the body of the request:

```sh
curl -d 'name=Sammy' <your-function-url>
```

Either way, the function returns the response body:

```
Hello Sammy! This is function version 0.0.2.
```

### Event Parameter

The `$event` parameter is an array. It is structured like the following example:

```php
[\
  'http' => [\
    'headers' => [\
      'accept' => '*/*',\
      'accept-encoding' => 'gzip',\
      'user-agent' => 'curl/7.85.0',\
      'x-forwarded-for' => '203.0.113.11',\
      'x-forwarded-proto' => 'https',\
      'x-request-id' => '5df6f6b0d00b58217439c8376fcae23a',\
    ],\
    'method' => 'POST',\
    'path' => '',\
  ],\
  'shark' => 'hammerhead',\
]
```

This example event has had a `shark: hammerhead` input passed to it. This has been parsed and added as a top-level key to the array.

More details on the information contained in the `event` parameter is available under the [Event Parameter section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#event-parameter) of the Parameters and Responses reference documentation.

### Context Parameter

The `$context` parameter is an object. It has the following properties:

```php
{
    string $activationId;
    string $apiHost;
    string $apiKey;
    int    $deadline;
    string $functionName;
    string $functionVersion;
    string $namespace;
    string $requestId;
}
```

Additionally, it has one method, `getRemainingTimeInMillis()`, which returns the number of milliseconds remaining before the function times out. It typically returns a `float` value. It returns an `int` in the rare case where the deadline is reached the precise moment this method is called (so that the remaining number of milliseconds is less than or equal to 0).

More details on the information contained in the `context` parameter is available under the [Context Parameter section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#context-parameter) of the Parameters and Responses reference documentation.

## Returns

To send a response, your function must return a properly formatted response array. More details on the response format can be found in the [Returns section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#returns) of the Parameters and Responses reference documentation.

If your function does not need to send a response, you may return an empty array nothing at all, or omit the `return` statement entirely.

Here is a response array that returns a string as the response body:

```php
["body" => "Hello world"]
```

If the `body` is an array or object, it is automatically serialized as JSON and returned with a `Content-Type: application/json` header. This function returns the `event` and `context` parameters as JSON:

```php
<?php
function main(array $event, object $context) : array
{
    return ["body" => ["event" => $event, "context" => $context]];
}
```

You may also specify the response’s status code and headers. The status code can be a number or a string:

```php
<?php
function main() : array
{
    return [\
        "body" => "Hello world",\
        "statusCode" => 200,\
        "headers" => [\
            "Content-Type" => "text/plain"\
        ]\
\
    ];
}
```

## Example Functions

### Return JSON

If the `body` is an array or object, it is automatically serialized as JSON and returned with a `Content-Type: application/json` header.

```php
<?php
function main() : array
{
    return ["body" => [["type" => "hammerhead"], ["type" => "mako"]]];
}
```

### Return an Image

To return an image or other media type, set the correct `Content-Type` header and return a base64-encoded `body`:

```php
<?php
function main() : array
{
    // example 1x1 GIF
    $gif = "R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return [\
        "statusCode" => "200",\
        "headers" => [\
            "Content-Type" => "image/gif"\
        ],\
        "body" => $gif\
    ];
}
```

### Return an HTTP Redirect

A `302` status code and `location` header redirects an HTTP client to a new URL:

```php
<?php
function main() : array
{
    return [\
        "statusCode" => "302",\
        "headers" => [\
            "location" => "https://example.com"\
        ]\
    ];
}
```

### Return HTML and Set a Cookie

Set cookies with the `Set-Cookie` header, and use the `Content-Type: 'text/html'` header to return HTML content:

```php
<?php
function main() : array
{
    return [\
        "statusCode" => "200",\
        "headers" => [\
            "Set-Cookie" => "UserID=Sammy; Max-Age=3600; Version=",\
            "Content-Type" => "text/html"\
        ],\
        "body" => "<html><body><h3>hello</h3></body></html>"\
    ];
}
```

### More Example Functions

Some more complex example PHP functions are available on GitHub:

![](https://docs.digitalocean.com/images/icons/default.svg)

PHP Numbers to Words

github.com![](https://docs.digitalocean.com/images/icons/default.svg)

PHP Hello World

github.com

## Log to the Console

Any text output to `stdout` and `stderr` is logged and can be accessed through [the `doctl` command line tool](https://docs.digitalocean.com/reference/doctl/). Use `doctl serverless activations logs --follow` to follow logs for all functions in the current namespace, or specify a single function with `--function`.

See the [`doctl serverless activations logs` reference](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/logs/) for more information or add the `--help` flag to the command for help output.

## Use Modules and Dependencies

PHP dependencies can be managed with [Composer](https://getcomposer.org/). To deploy a PHP function with package dependencies you need a `composer.json` file and a `build.sh` build script to run `composer install`.

Here is an example PHP function that uses a `cowsay` package:

```php
<?php
use Cowsayphp\Farm;

function main(array $event): array
{
    $name = $event["name"] ?? "stranger";
    $cow = Farm::create(\Cowsayphp\Farm\Cow::class);
    return [\
        "body" => $cow->say("Hello $name from PHP!")\
    ];
}
```

The `composer.json` file for this function:

```json
{
    "require": {
        "alrik11es/cowsayphp": "^1.2"
    }
}
```

A `build.sh` script is also required to install the packages:

```bash
#!/bin/bash
set -e
composer install
```

Make sure the above files are in a [properly formatted project directory](https://docs.digitalocean.com/products/functions/how-to/structure-projects/) with an `index.php` file containing the `main()` entrypoint, then deploy with `doctl serverless deploy <your-project-directory>`. You may use the `--remote-build` flag to run the build remotely.

The runtime automatically takes care of requiring the `vendor/autoload.php` file, so you do not need to include this in your function.

## Include Files in Built Function

To include arbitrary files with your deployed function (for example, config files and templates), place the files in your function directory. By default, all files in the function directory is included in the deployed function. This can be customized using `.ignore` and `.include` files. See the [Build Process reference](https://docs.digitalocean.com/products/functions/reference/build-process/) for details.

Here is an example function that reads text content from a file:

Directory structure:

```
.
├── packages
│   └── <package-name>
│       └── <function-name>
│           ├── index.php
│           └── to_be_included.txt
└── project.yml
```

The `index.php` file:

`index.php`

```text
<?php
function main() : array
{
    $fileContents = file_get_contents('to_be_included.txt');
    return ["body" => "File contents: \"$fileContents\""];
}
```

The file to include, `to_be_included.txt`:

`to_be_included.txt`

```text
Hello, World!
```

When invoked, the response is:

```
File contents: "Hello, World!"
```

In this article...

- [A PHP Echo Function](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#a-php-echo-function)
- [Parameters](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#parameters)
  - [Event Parameter](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#event-parameter)
  - [Context Parameter](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#context-parameter)
- [Returns](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#returns)
- [Example Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#example-functions)
  - [Return JSON](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#return-json)
  - [Return an Image](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#return-an-image)
  - [Return an HTTP Redirect](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#return-an-http-redirect)
  - [Return HTML and Set a Cookie](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#return-html-and-set-a-cookie)
  - [More Example Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#more-example-functions)
- [Log to the Console](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#log-to-the-console)
- [Use Modules and Dependencies](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#use-modules-and-dependencies)
- [Include Files in Built Function](https://docs.digitalocean.com/products/functions/reference/runtimes/php/#include-files-in-built-function)

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