---
url: "https://docs.digitalocean.com/products/projects/how-to/move-resources/"
title: "How to Move Resources between Projects | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/projects.09205e3f8a46d107d3fe9c819ca920f186df235ea36143c514811a9a37dcb4ad.svg)Projects](https://docs.digitalocean.com/products/projects/)
- [Getting Started](https://docs.digitalocean.com/products/projects/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/projects/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/projects/how-to/)
  - [Create Projects](https://docs.digitalocean.com/products/projects/how-to/create/)
  - [Move Resources](https://docs.digitalocean.com/products/projects/how-to/move-resources/)
  - [Delete Projects](https://docs.digitalocean.com/products/projects/how-to/delete/)
- [Reference](https://docs.digitalocean.com/products/projects/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Projects)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/projects/)
- [Details](https://docs.digitalocean.com/products/projects/details/)
  - [Features](https://docs.digitalocean.com/products/projects/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/projects/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/projects/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/projects/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/projects/how-to/)
- Move Resources

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Move Resources between Projects

Validated on 5 Apr 2024 • Last edited on 18 Dec 2024

Projects let you organize your DigitalOcean resources into groups that fit the way you work. Create projects that align with the applications, environments, and clients that you host on DigitalOcean.

Moving resources from one project lets you reorganize as your infrastructure changes and grows.

You can move resources in two ways:

- Individually from any one project into any other project.
- In bulk from any number of projects into any single project.

## Move Resources Individually Using the Control Panel

From a project’s default page, click the **Resources** tab. Find the resource you want to move and open its options menu, represented by three dots, then select **Move to…**:

![More menu opened with Move to highlighted](https://docs.digitalocean.com/screenshots/projects/move-to.93dc233b0976c11efab64cbece938568d7f265c397fe96b4dc805e11298c9f95.png)

In the **Select project** window that opens, select the project where you want to move that resource, then click **Move to \[Project Name\]**:

![More menu opened with Select project opened](https://docs.digitalocean.com/screenshots/projects/select-project.fab903d3610d6e5ba69eace743f2a7e27c02458b99c1fe33bb1f770a29102ba5.png)

A message appears confirming that the resource has been moved to the new project, and you should no longer see it among the original project’s resources. This returns you to the original project’s resource tab, where you can move other resources.

## Move Resources in Bulk Using the Control Panel

To move multiple resources at one time, navigate to the destination project where the resources need to go. From there, click the **Move Resources** button.

![Move Resources button](https://docs.digitalocean.com/screenshots/projects/move-resources-button.ee5fb4131721e3906efcac5e92ca48791a73bae12dd8968a6553d08cdac3de69.png)

When you click into the text area, a list of all movable resources from other projects opens. You can keep typing to filter the list.

Click the names of the resources you want to move, then click the **Move to \[Project Name\]** button.

![Move Resources window](https://docs.digitalocean.com/screenshots/projects/move-resources-window.f8a8ee6e74b31bbabe86737e618a04b688afcd78931c7257b40253e3982d1afc.png)

The selected resources move into the current project.

## Move Resources Using the CLI

You can move resources between projects individually or in bulk by providing a list of Uniform Resource Names (URNs) in the `resource` field of the following `doctl` command. You can retrieve a list of URNs using the `doctl projects resources list` command.

How to Assign Resources to a Project Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl projects resources assign`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/assign/) for more details:




```shell
doctl projects resources assign <project-id> --resource=<urn> [--resource=<urn> ...] [flags]
```


In this article...

- [Move Resources Individually Using the Control Panel](https://docs.digitalocean.com/products/projects/how-to/move-resources/#move-resources-individually-using-the-control-panel)
- [Move Resources in Bulk Using the Control Panel](https://docs.digitalocean.com/products/projects/how-to/move-resources/#move-resources-in-bulk-using-the-control-panel)
- [Move Resources Using the CLI](https://docs.digitalocean.com/products/projects/how-to/move-resources/#move-resources-using-the-cli)

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