---
url: "https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/"
title: "How to Manage an App's Source Repository | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/app-platform/how-to/)
- Manage Source Repository

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage an App's Source Repository

Validated on 23 May 2023 • Last edited on 6 May 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

You can change and configure your app’s source repository to change the source repo, configure submodules, enable Git Large File Support (LFS), and more.

## Change Source Repo

You can change your app’s repository by updating the app’s spec. You cannot change the app’s repository using the control panel, at this time. To change the app’s repository, the new repository must be discoverable and not in use by another app on App Platform.

To access the [app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/apps), click your app, and then click the **Settings** tab. From there, scroll down to the **App Spec** section and then click **Edit**.

Alternatively, you can download the app’s spec and then edit it using your preferred text editor. To do this, click the **Download** button in the App Spec editor. After updating the app spec file, upload the updated file using the **Upload File** button.

If you use a Git provider as your hosting service, you can change the repository by changing the `repo` value nested within the `github` or `gitlab` block.

```
github:
  branch: main
  deploy_on_push: true
  repo: your-new-repository
```

If you wanted to change the hosting service, then you would change the hosting service key specified in the app spec file. For example, if you changed the hosting service from GitHub to GitLab in the code snippet above, then you would change the code like this:

```
gitlab:
  branch: main
  deploy_on_push: true
  repo: your-new-repository
```

If you use an image registry such as DigitalOcean Container Registry (DOCR) (`DOCR`) or Docker Hub (`DOCKER_HUB`) as your hosting service, you can change the repository by changing the `repository` value nested within the `image` block.

```
image:
  registry_type: DOCKER_HUB
  registry: nginxdemos
  repository: your-new-repository
```

If you want to swap image registries, update the `registry_type` value in the `image` block. For example, if you changed the hosting service for the above code snippet from Docker Hub to DOCR, then the code snippet would look like this:

```
image:
  registry_type: DOCR
  registry:
  repository: your-new-repository
```

Note
For DOCR, the `registry` value can either be set or empty, while Docker Hub requires a `registry` value. For DOCR, leaving the registry value empty defaults the value to your team’s DOCR instance. Since your team can only have one DOCR instance, we recommend leaving the `registry` value empty.

To switch from an image registry to a Git provider, you will need to ensure that your account on your image registry is both authorized against your Git provider and registry as Git repositories both require an OAuth flow against their Git provider. Authorization against a Git provider such as GitHub and GitLab is typically done when you initially create an app on App Platform. Authorization is not required for DOCR or Docker Hub since DOCR is associated with your DO account, and Docker Hub is public with no authorization required.

## Use a Different Version Control Service Account

A single DigitalOcean team member can link multiple service accounts from different version control providers to App Platform. For example, one team member can simultaneously link a GitHub account and a GitLab account to App Platform.

A single DigitalOcean team member cannot link two service accounts from the same version control provider (for example, two GitHub accounts) to App Platform. You can change from one service account to another account from the same provider by removing the first account and then linking the second account.

If you need to deploy apps from multiple accounts with the same version control provider, [another team member](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/) can add the additional version control account when [creating an app](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/).

## Use Private Git Submodules

Git submodules are a way to include one Git repository within another. This feature allows you to keep a Git repository as a subdirectory of another Git repository while maintaining distinct version histories for the main project and the submodule.

To use Git submodules with your App Platform app, you need to update the settings in your repositories to allow App Platform to access the submodule repositories.

### Access Submodules in GitHub

In GitHub, your submodules must:

- Be stored in the same account that you have authorized App Platform to access.
- Use HTTPS path links instead of SSH links.

Once your GitHub submodules are configured, App Platform can access your submodule repositories and appropriately deploy your app.

### Access Submodules in GitLab

In GitLab, your submodules must:

- Be stored in the same account that you have authorized App Platform to access.
- Have an SSH deploy key enabled.
- Have the repo’s SSH URL in its `.gitmodules` file.

To enable an SSH deploy key for your submodule, you first need to retrieve the main repo’s deploy key UUID. To do this, from the app’s main repo, click **Settings** and then **Repository**. Expand the **Deploy Keys** section and then copy the deploy key’s UUID.

Once you’ve copied the main repo’s deploy key UUID, open the submodule repository then click **Settings** and then **Repository**. Expand the **Deploy Keys** section, select the **Privately accessible deploy keys** tab, and then locate the key with the UUID that you copied. Click **Enable** to enable the deploy key.

To use the deploy key, configure the `.gitmodules` file to use the repo’s SSH URL instead of the HTTPS URL. To do this, open the `.gitmodules` file in your submodule repository and update the `url` value to use the repo’s SSH URL instead of the HTTPS URL. For example, the following file uses the SSH URL `git@gitlab.com:your-group/your-repo.git` instead of `https://gitlab.com/your-group/your-repo.git`.

`.gitmodules`

```text
[submodule "your-module"]
	path = include/your-module
	url = git@gitlab.com:your-group/your-repo.git
```

Once you have configured your GitLab submodule repo, App Platform can access your submodule repositories and appropriately deploy your app.

## Use Git Large File Support (LFS)

Git LFS is a Git extension that allows you to store large files in Git repositories, such as media files, large datasets, and other files that are too large to store in a single Git commit. You can add Git LFS to your app by adding the following [installation commands](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/docs/app-git-sub-modules) to your app’s [run and build commands](https://docs.digitalocean.com/products/app-platform/how-to/build-run-commands/):

```shell
sudo apt-get update
sudo apt-get install git-lfs
git lfs install
```

To install Git LFS using GitLab, instead go to your [apps](https://cloud.digitalocean.com/apps), click on your app and go to its **Settings** tab. Click **Edit** under **App-Level Environment Variables** and add a private, encrypted SSH key with read-only access (for example, `SSH_PRIVATE_KEY`). Then, use the following build command:

```
echo "$SSH_PRIVATE_KEY" > id_rsa && chmod 600 id_rsa && GIT_SSH_COMMAND="ssh -i ./id_rsa" git lfs pull && rm id_rsa
```

You can also install Git LFS by adding the following line to an [Aptfile](https://docs.digitalocean.com/products/app-platform/reference/buildpacks/aptfile/) in your app’s root directory:

`Aptfile`

```text
git-lfs
```

App Platform also supports Git LFS for all static and dynamic sites. However, you must explicitly call `git lfs pull` in your build command.

For example, the following spec file defines a build and run command using Git LFS for a service in Go app:

`your-app.yaml`

```yaml
services:
- environment_slug: go
  github:
    branch: master
    deploy_on_push: true
    repo: digitalocean/sample-golang
  instance_count: 1
  instance_size_slug: apps-s-1vcpu-1gb
  internal_ports:
  - 8080
  name: internal-service
  build_command: git lfs pull && go build
  run_command: bin/sample-golang
```

In this article...

- [Change Source Repo](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#change-source-repo)
- [Use a Different Version Control Service Account](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#use-a-different-version-control-service-account)
- [Use Private Git Submodules](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#use-private-git-submodules)
  - [Access Submodules in GitHub](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#access-submodules-in-github)
  - [Access Submodules in GitLab](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#access-submodules-in-gitlab)
- [Use Git Large File Support (LFS)](https://docs.digitalocean.com/products/app-platform/how-to/manage-source-repo/#git-lfs)

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