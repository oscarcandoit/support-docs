---
url: "https://docs.digitalocean.com/products/app-platform/support/"
title: "App Platform Support | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/app-platform.965eeb0520b4c178cc9bf64423065e5aa5c2f47ad6102384e37beca3c079f287.svg)App Platform](https://docs.digitalocean.com/products/app-platform/)
- [Getting Started](https://docs.digitalocean.com/products/app-platform/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/app-platform/getting-started/quickstart/)
  - [Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/sample-apps/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Deploy Sample Apps](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-sample-apps/)
  - [Deploy an RSS Reader](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-rss-reader/)
  - [Deploy Etherpad](https://docs.digitalocean.com/products/app-platform/getting-started/deploy-etherpad/)
- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
  - [Create Apps](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/)
  - [Deploy from Container Images](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/)
  - [Deploy From Monorepos](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-monorepo/)
  - [Deploy Using GitHub Actions](https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-github-actions/)
  - [Scale Apps](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/)
  - [Manage Components](https://docs.digitalocean.com/products/app-platform/how-to/manage-components/)
  - [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
  - [Manage App Settings](https://docs.digitalocean.com/products/app-platform/how-to/manage-settings/)
  - [Manage Networking](https://docs.digitalocean.com/products/app-platform/how-to/manage-networking/)
  - [Manage Observability](https://docs.digitalocean.com/products/app-platform/how-to/manage-observability/)
  - [Manage Deployments](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/)
  - [Access Console](https://docs.digitalocean.com/products/app-platform/how-to/console/)
  - [Restart or Rebuild App](https://docs.digitalocean.com/products/app-platform/how-to/restart-rebuild-app/)
  - [Update App Spec](https://docs.digitalocean.com/products/app-platform/how-to/update-app-spec/)
  - [Manage Source Repository](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/)
  - [Add "Deploy to DigitalOcean" Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/)
  - [Build Locally](https://docs.digitalocean.com/products/app-platform/how-to/build-locally/)
  - [Use MCP Server](https://docs.digitalocean.com/products/app-platform/how-to/use-mcp/)
  - [Destroy Apps](https://docs.digitalocean.com/products/app-platform/how-to/destroy-app/)
- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/apps/)
  - [Builds with Buildpacks](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/)
  - [Builds with Dockerfiles](https://docs.digitalocean.com/products/app-platform/reference/dockerfile/)
  - [App Spec Reference](https://docs.digitalocean.com/products/app-platform/reference/app-spec/)
  - [Dev Config Reference](https://docs.digitalocean.com/products/app-platform/reference/dev-config/)
  - [Error Code Reference](https://docs.digitalocean.com/products/app-platform/reference/error-codes/)
- [Concepts](https://docs.digitalocean.com/products/app-platform/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/app-platform/concepts/choosing-a-plan/)
  - [Platform Upgrade Policy](https://docs.digitalocean.com/products/app-platform/concepts/platform-upgrade-policy/)
  - [Glossary](https://docs.digitalocean.com/glossary/app-platform/)
- [Details](https://docs.digitalocean.com/products/app-platform/details/)
  - [Introduction FAQ](https://docs.digitalocean.com/products/app-platform/details/intro-faq/)
  - [Features](https://docs.digitalocean.com/products/app-platform/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/app-platform/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/app-platform/details/limits/)
  - [Maintenance](https://docs.digitalocean.com/products/app-platform/details/maintenance/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/app-platform)
- [Support](https://docs.digitalocean.com/products/app-platform/support/)

- Support

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Support

Generated on 25 Nov 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why do I get the error “JavaScript heap out of memory” during deployment?

Increase the heap memory by setting the environment variable NODE\_OPTIONS=–max-old-space-size=4096.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix a "permission denied for schema public" error in my dev database?

Delete the existing dev database and create a new one. Then make sure that the app deployment completes successfully.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why do I get the error "Domain Already Exists" when trying to add a domain to an app in another account?

You cannot add the same domain name to multiple apps or split an app and domain name across more than one account.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I fix an "Image or digest not found" error with multiple registries?

Specify the registry property in the app spec.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I getting an error when trying to forward DigitalOcean Functions to Managed OpenSearch?

Functions does not support forwarding to Managed OpenSearch.

![](https://docs.digitalocean.com/images/icons/support.svg)

My container-based app fails to deploy without logs or error codes.

Troubleshoot by making sure the Dockerfile and its commands build on Linux AMD64 and other steps.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I generate my app's SSL certificate?

App Platform automatically generates and issues the SSL certificate during the configuration.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving 520 status codes from my app?

Your app may have crashed while trying to receive an upload or return a response larger than it has been configured to manage.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving a forbidden error when making changes to my App Platform app?

Your team balance may be past due. Pay your balance to lift restrictions on actions you can take on the platform.

![](https://docs.digitalocean.com/images/icons/support.svg)

Where can I find the client IP address of a request connecting to my app?

You can find the client IP address of a request connecting to your app in the `do-connecting-ip` HTTP header.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my app's database connection timing out?

Timeouts can be caused by high CPU utilization, so check your app’s CPU utilization and consider scaling your app.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I route traffic to my app's dedicated egress IP address?

Dedicated egress IPs route egress (outbound) traffic from an app. To route ingress (inbound) traffic to an app, use one of App Platform’s public ingress IPs.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why doesn't my app's wildcard subdomain work?

Add the root domain to the list of domains in the app’s settings along with the wildcard subdomain.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my app not resolving .gov domains?

App Platform apps may be slow or unable to resolve `.gov` domains because the domain administrators have blocked DigitalOcean’s IP addresses. To fix this, you can contact the domain administrator or use a custom DNS resolver.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I find my app even after paying my past due balance?

If your resources have been destroyed due to a prolonged past due balance, you can contact support to request the app spec for deleted apps to recreate the app with the same configuration.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I disable email obfuscation on my App Platform site?

Disable the feature in the app spec using the disable\_email\_obfuscation field.

![](https://docs.digitalocean.com/images/icons/support.svg)

My PHP app is timing out and throwing 5xx errors

Increase your app’s maximum execution time in its .user.ini file to give it more time to complete requests.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my domain pointing to my old static site app?

Remove the domain from the old app before deleting the old app, or wait 24 hours for the DNS to update.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving a "user does not exist" error when building my Docker app on App Platform?

In your Dockerfile, the `USER` instruction needs to be after the `FROM` and `WORKDIR` instructions.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving an "invalid dockerfile\_path" error when building my Docker app on App Platform?

Ensure your Dockerfile’s path is correctly defined using the `dockerfile_path` parameter in your app spec file.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why are there multiple 408 errors in App Platform's runtime logs?

Multiple 408 errors are often caused by your app sending health checks with very short timeouts to App Platform. They typically don’t affect the functionality of the app.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why is my App Platform build or deployment failing with an out of memory error?

App Platform builds have a fixed amount of memory available, so try optimizing your builds to stay within the 8 GB limit. You can increase the amount of memory in App Platform deployments by upgrading to a different plan.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I back up my dev database on App Platform?

Dev Databases have no direct backup feature but you can use a cron job to back up your data to another database.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving “1001 DNS Resolution Error” when accessing my app's subdomain?

You need to explicitly add the subdomain in your app’s settings.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I stop, pause, or disable my app on App Platform?

You cannot pause, stop, or disable an app. You can delete the app and re-create it when needed.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why are my App Platform environment variables not updating?

Component-level variables override app-level variables, so you may have defined environment variables at both levels.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my app fail to build while trying to connect to a DigitalOcean Managed Database?

App Platform does not support connecting to DigitalOcean Managed Databases during the build process if the database has trusted sources enabled.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I back up my app on App Platform?

App Platform does not support backups, but you can use DigitalOcean Managed Databases to back up your data.

![](https://docs.digitalocean.com/images/icons/support.svg)

What region is my app's dev database located in and can I change it?

Dev databases are located in the same region as your app and cannot be migrated to another region.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why are large files failing to upload to my app on App Platform?

Your upload may be exceeding your app’s allotted file storage space or it could be timing out.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my app have a US-based IP address when I created it in a different region?

You see the CDN load balancer’s IP address. Use `dig` to see the dynamic IP address of the app.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why does my app keep restarting on App Platform?

Application crashes, high memory consumption, and high disk usage are usually responsible for apps restarting.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I add an A record to my app on App Platform?

Apps do not have static IP addresses so you cannot point an A record at an app.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why can't I access my environment variables at build time when building from a Dockerfile on App Platform?

Environment variables are only available as build-args for Dockerfile builds in App Platform.

![](https://docs.digitalocean.com/images/icons/support.svg)

How do I change my app's GitHub repository on App Platform?

You can change an app’s source repository by updating the app’s spec.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why am I receiving a missing module error when building my Node.js app on App Platform ?

Ensure the missing module is listed in the `dependencies` section of the `package.json` file.

![](https://docs.digitalocean.com/images/icons/support.svg)

Can I inject certificates or other files into my app at build time?

App Platform does not currently support injecting values as files on disk. Use environment variables to create files at run time.

![](https://docs.digitalocean.com/images/icons/support.svg)

My app failed to build and I received an exit code

Review your app’s build logs to diagnose which process failed during building.

![](https://docs.digitalocean.com/images/icons/support.svg)

Why are my database bind variables missing from my app?

Database bind variables are only available during an app’s deployment and run times.

![](https://docs.digitalocean.com/images/icons/support.svg)

My app deployment failed because of a health check

Your app is likely unavailable on the port App Platform uses to perform health checks. Customize the health check or update the ports in your app.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot Apps in App Platform

Review some common troubleshooting techniques for App Platform.

In this article...

[App Platform Support](https://docs.digitalocean.com/products/app-platform/support/)

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