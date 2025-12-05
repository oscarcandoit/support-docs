---
url: "https://docs.digitalocean.com/products/functions/how-to/structure-projects/"
title: "How to Structure Projects | DigitalOcean Documentation"
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
- Structure Projects

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Structure Projects

Validated on 25 Apr 2023 • Last edited on 9 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

A Functions _project_ is a collection of resources including functions, configuration files, and library files, which are stored on your local computer or in a GitHub repository. Projects have a prescriptive structure that they must follow in order to deploy them to App Platform or a Functions namespace.

You can create a project manually, but we recommend the following ways to get started:

- Use [`doctl serverless init <project-name>`](https://docs.digitalocean.com/reference/doctl/reference/serverless/init/) to initialize a project with a minimal set of files and example code.

- Fork one of the [sample repositories](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/) of our example projects.


## Project Structure

The project root can either be the root of a Git repository or a subdirectory in a [monorepo](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/). This top-level project root must contain the following:

- A project configuration file called `project.yml`. See [Project Configuration](https://docs.digitalocean.com/products/functions/reference/project-configuration/) for more details.

- A directory named `packages` containing one or more packages. A _package_ is a collection of functions. Each package must have its own directory under `packages`.

Each function must be in a package directory. Functions can be a single source code file or a directory with one or more source code files.


The `packages` directory can contain any number of packages, and each package can contain an arbitrary number of functions. This lets you organize your project in the way that makes the most sense to you.

The organization of packages determines the URL where functions are served. Functions components deployed to App Platform are served at a URL with the structure `app_url/component_route/package/function`.\

The project can also contain a top-level `lib` directory, where files common to multiple packages can be stored or built. See [Build Process](https://docs.digitalocean.com/products/functions/reference/build-process/) for details on the build process and its use of the `lib` directory.

## Example Project Structures

Here is a minimal example of the structure of a project:

```
example-project
├── project.yml
└── packages
    └── example-package
        └── example-function.php
```

Here is an example structure for a project with two packages, `example-package-1` and `example-package-2`. `example-package-1` has three functions, and `example-package-2` has one.

```
example-project
├── packages
│   ├── example-package-1
│   │   ├── example-function-a.php
│   │   ├── example-function-b
│   │   │   ├── package.json
│   │   │   └── example.js
│   │   └── example-function-c
│   │       └── index.php
│   └── example-package-2
│       └── example-function
│           ├── requirements.txt
│           ├── __main__.py
│           └── example.py
└── project.yml
```

In this article...

- [Project Structure](https://docs.digitalocean.com/products/functions/how-to/structure-projects/#project-structure)
- [Example Project Structures](https://docs.digitalocean.com/products/functions/how-to/structure-projects/#example-project-structures)

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