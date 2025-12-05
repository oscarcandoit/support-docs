---
url: "https://docs.digitalocean.com/products/app-platform/reference/error-codes/"
title: "App Platform Error Code Reference | DigitalOcean Documentation"
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

- [Reference](https://docs.digitalocean.com/products/app-platform/reference/)
- Error Code Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# App Platform Error Code Reference

Validated on 30 Sep 2020 • Last edited on 30 Apr 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

During your use of the App Platform, when taking actions that create, update, or redeploy your application or resources, you may encounter one of the following errors. After reviewing the error code below, you can attempt to follow the suggested troubleshooting techniques.

![](https://docs.digitalocean.com/images/icons/support.svg)

How to Troubleshoot Apps in App Platform

Review some common troubleshooting techniques for App Platform.

## Generic Internal Error

Type: `InternalError`. An internal error occurred. Try reloading or refreshing the page. If you’ve encountered this during a deployment, attempt to manually redeploy your app. Contact support if this persists.

## Build Errors

| Error | Type | Reason |
| --- | --- | --- |
| Job Failed | `BuildJobFailed` | Your build job failed. See the logs for details. Attempt to correct the problem and redeploy your application. |
| Non-Zero Exit | `BuildJobExitNonZero` | Your build job failed because it returned a non-zero exit code. See the logs for details. Attempt to correct the problem and redeploy your application. |
| Timeout | `BuildJobTimeout` | Your build job failed because it timed out after 60 minutes. |
| Out of Memory | `BuildJobOutOfMemory` | Your build job failed because it was out of memory. |
| Previous Build Reused | `PreviousBuildReused` | Your previous build was reused. For efficiency, this is a normal occurrence when nothing significant has changed between two versions of your application. No user action is required, but to view your latest build logs you may need to go back through your Deployment History. |
| Rate Limit Reached | `BuildRateLimit` | Your build job is being rate-limited due to concurrent build limits. App Platform will automatically retry your build. If App Platform continues to report this error, wait until your other apps have finished building and try deploying your application again. |

## Database Errors

| Error | Type | Reason |
| --- | --- | --- |
| Database Not Available | `DatabaseNotAvailable` | Your database is not available. |
| Database Not Found | `DatabaseNotFound` | Your database was not found. |
| Database Limit Exceeded | `DatabaseLimitExceeded` | Your database limit was exceeded. |

## Deploy Errors

| Error | Type | Reason |
| --- | --- | --- |
| Run Command Not Executable | `ContainerCommandNotExecutable` | Your deploy failed because your container run command either didn’t exist or was not executable. You can try clearing any custom run commands from your application resources’ configurations. Then, after a successful deployment, use the Console functionality in App Platform to test out variations of your run command interactively. |
| Non-Zero Exit Code | `ContainerExitNonZero` | Your deploy failed because your container exited with a non-zero exit code. See the logs for details. Attempt to correct the problem and redeploy your application. |
| Health Checks | `ContainerHealthChecksFailed` | Your deploy failed because your container did not respond to health checks. If a health check is failing, that means that external traffic is not reaching your service at the expected HTTP route. |
| Out of Memory | `ContainerOutOfMemory` | Your deploy failed because your container was out of memory. |
| Resource Exhausted | `ResourceExhausted` | By default, your overall App Platform resource usage is limited per account or team. There are limits on the total number of apps, total memory usage across apps, total CPU count across apps, total number of static sites, total number of domains, and total active build count. If you need any of these limits increased, [contact support](https://cloudsupport.digitalocean.com/). |

## Container Errors

| Error | Type | Reason |
| --- | --- | --- |
| Success (Exited Normally) | `0` | The container exited successfully, but it likely should have stayed running. This usually means the app started and then stopped. Check if your app is designed to stay active. |
| General Error | `1` | The app encountered a general error and exited. [View your logs for more details](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/) and debug the application. |
| Shell Builtin Misuse | `2` | The container misused a shell builtin command. Check for syntax issues or incorrect usage in your entrypoint or scripts. App Platform supports `sh` and `bash`. |
| Command Not Executable | `126` | The command exists but is not executable. Check file permissions and ensure it’s an executable file. |
| Command Not Found | `127` | The command was not found. This usually means a required dependency is missing or not in the PATH. |
| Invalid Exit Code | `128` | The container tried to exit with an invalid code. This might be a script or signal handling issue. |
| Abort Signal (SIGABRT) | `134` | The app was aborted, likely from a crash or failed assertion. Check your app’s error handling. If this keeps happening, [contact support](https://cloudsupport.digitalocean.com/). |
| Killed (SIGKILL) | `137` | The container was shut down unexpectedly, usually due to an Out of Memory (OOM) issue or manual stop. Try [increasing memory, enabling autoscaling, or scaling to more containers](https://docs.digitalocean.com/products/app-platform/how-to/scale-app/). If the issue persists, [contact support](https://cloudsupport.digitalocean.com/). |
| Segmentation Fault (SIGSEGV) | `139` | The app crashed due to a segmentation fault. This usually means the app accessed invalid memory. [Debug your app’s memory usage](https://docs.digitalocean.com/products/app-platform/how-to/view-insights/). |
| Graceful Shutdown (SIGTERM) | `143` | The container received a graceful shutdown signal (SIGTERM). This is normal during scaling or redeployments. Make sure your app handles shutdown gracefully to avoid data loss or dropped requests. |
| Termination Failed | `145` | The container received a termination signal but didn’t exit properly. Test local signal handling and [contact support](https://cloudsupport.digitalocean.com/) if it behaves differently in production. |
| Python Fatal Error | `217` | Python reported a fatal error, possibly due to memory corruption or internal issues. [Check your Python logs for more information](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/). |
| Unknown or Out-of-Range Exit | `255` | The app exited with an unknown or out-of-range error. This often points to an unhandled exception. [Review the logs to understand what went wrong](https://docs.digitalocean.com/products/app-platform/how-to/view-logs/). |

In this article...

- [Generic Internal Error](https://docs.digitalocean.com/products/app-platform/reference/error-codes/#generic-internal-error)
- [Build Errors](https://docs.digitalocean.com/products/app-platform/reference/error-codes/#build-errors)
- [Database Errors](https://docs.digitalocean.com/products/app-platform/reference/error-codes/#database-errors)
- [Deploy Errors](https://docs.digitalocean.com/products/app-platform/reference/error-codes/#deploy-errors)
- [Container Errors](https://docs.digitalocean.com/products/app-platform/reference/error-codes/#container-errors)

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