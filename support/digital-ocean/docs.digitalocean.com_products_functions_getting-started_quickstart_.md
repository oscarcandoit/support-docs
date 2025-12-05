---
url: "https://docs.digitalocean.com/products/functions/getting-started/quickstart/"
title: "Functions Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/functions/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Functions Quickstart

Validated on 23 May 2022 • Last edited on 23 Jan 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

You can start writing a function using either the `doctl` command line tool or our control panel. The control panel is great for experimentation, but a command line workflow is the intended route for in-depth development of functions.

Command Line

Make sure you have `doctl` installed, authorized to access your DigitalOcean account, and set up with the `serverless` extension. See [How To Install and Configure doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/) for instructions.

Note
To use `doctl` to connect to multiple namespaces, you must have `doctl` version `1.81.0` or higher. Use `doctl version` to check your version.

Check that your `serverless` extension is installed by running the `status` command:

```bash
doctl serverless status
```

The output should indicate that serverless support is installed:

```
Error: serverless support is installed but not connected to a functions namespace (use `doctl serverless connect`)
```

Next, you need to create a Functions namespace, then connect to it to deploy functions to the cloud.

## Create a Namespace

Namespaces are a way of organizing and isolating functions and their settings. You may have **Production** and **Development** namespaces, or project-based namespaces, or some other scheme entirely.

Create a namespace with `doctl serverless namespaces create`, specifying the `--label` (name) and the `--region` to create the namespace in. Use `doctl serverless namespaces list-regions` to list the available regions.

```bash
doctl serverless namespaces create --label example-namespace --region nyc1
```

This example command creates a namespaced called `example-namespace` in the `nyc1` region and automatically connects to it:

```
Connected to functions namespace 'fn-ef552165-54d2-4656-b6b1-7dedc370591a' on API host 'https://faas-nyc1-2ef2e6cc.doserverless.co'
```

You’re now ready to deploy functions into the namespace.

## Create a Local Function Directory

On your local machine, navigate to the directory where you’d like to put your function code, then use the `serverless init` subcommand to initialize a sample project. The `-l` or `--language` flag specifies which programming language the sample project should use. The options are `go`, `javascript`, `php`, and `python`.

Create a sample project in the language of your choice:

```shell
doctl serverless init --language js <example-project>
```

Replace `<example-project>` with your project name. A directory is created with sample code and configuration files:

```
A local functions project directory 'example-project' was created for you.
```

The directory has a `project.yml` file in it, as well as a `packages` directory containing the `sample` package, the `hello` function directory, and the sample “hello world” function code:

```
example-project/
├── packages
│   └── sample
│       └── hello
│           └── hello.js
└── project.yml
```

Next, deploy the function.

## Deploy a Function

Use `serverless deploy` to deploy the sample “hello world” function. The subcommand takes one argument, a path to the project directory you created.

Note
The `serverless deploy` command overwrites previously deployed functions in a namespace if their `project/function` names match the new deploy. This occurs even if the functions were created in separate projects.

Run the deploy command now, being sure to substitute your own project name for `<example-project>`:

```shell
doctl serverless deploy <example-project>
```

The command outputs information about the deployment:

```
Deploying '/home/sammy/example-project'
  to namespace 'fn-feb132ee-706a-4f13-9c81-f24a3330260b'
  on host 'https://faas-nyc1-78edc.doserverless.co'
Deployment status recorded in '.deployed'

Deployed functions ('doctl sbx fn get <funcName> --url' for URL):
  - sample/hello
```

The function is now deployed to the cloud as `sample/hello`.

## Invoke a Function

Deployed functions can be invoked using the `serverless functions invoke` command:

```shell
doctl serverless functions invoke sample/hello
```

The function returns a JSON response:

```json
{
  "body": "Hello stranger!"
}
```

The sample function accepts a `name` parameter to customize the greeting. You can add `key:value` parameters to `serverless functions invoke` using the `-p` flag:

```shell
doctl serverless functions invoke sample/hello -p name:sammy
```

The response is customized based on your input:

```json
{
  "body": "Hello sammy!"
}
```

## Destroy a Function

Use the `serverless undeploy` subcommand to remove functions from the cloud:

```shell
doctl serverless undeploy sample/hello
```

The command verifies that the process was successful:

```
The requested resources have been undeployed
```

Your function is now undeployed from Functions.

Control Panel

## Create a Namespace

1. Go to [https://cloud.digitalocean.com/functions](https://cloud.digitalocean.com/functions) and click **Create Function Namespace**.
2. Choose a datacenter region and a name for your namespace, then click **Create Namespace**.

## Create a Function

1. From your namespace’s **Overview** page, click the **Actions** button and select **Create Function**
2. The **New Function** window opens. Under **Runtime**, select the programming language runtime you want to use, then type the name of your function in **Function Name**. **Package Name** is optional.
3. Click **Create** to create the function.
4. The **Source** tab loads, where you can run and edit a sample “Hello World” function written in the language you chose. Press the **Run** button to run the function. The function output appears in the **Output** area below the code, and any logging information appears in the **Logs** section.

## Destroy a Function

1. Go to [https://cloud.digitalocean.com/functions](https://cloud.digitalocean.com/functions) and click the namespace that contains the function you’d like to delete.

2. The namespace’s functions are listed by name on the **Overview** tab:
![Screenshot of the Functions Overview page, with two functions listed in a table](https://docs.digitalocean.com/screenshots/functions/overview-tab.70e23368019e518387d750d2c30b34a71f212aa3f82bd5b2694145dc991e040c.png)
3. Click the “more menu” button to the right of the function you’d like to destroy, then choose **Destroy Function**.

4. You are prompted to confirm the action. Enter the function name to confirm, the press **Destroy**.


In this article...

[Functions Quickstart](https://docs.digitalocean.com/products/functions/getting-started/quickstart/)

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