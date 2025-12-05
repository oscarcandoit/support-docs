---
url: "https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/"
title: "How to Add a \"Deploy to DigitalOcean\" Button to Your Repository | DigitalOcean Documentation"
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
- Add "Deploy to DigitalOcean" Button

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add a "Deploy to DigitalOcean" Button to Your Repository

Validated on 12 Mar 2025 • Last edited on 17 Sep 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

The **Deploy to DigitalOcean** button lets users launch an app on App Platform with one click. To add it to your GitHub or GitLab repository’s `README`, create a [`deploy.template.yaml`](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#add-the-yaml-file) file in a `.do` folder at the root of your repository, then [add the button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#add-the-button) to your `README`:

![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)

You can add the **Deploy to DigitalOcean** button with the following combinations:

- One Service
- One Service + Dev Database
- One Static Site
- One Static Site + Dev Database

The **Deploy to DigitalOcean** button only supports public repositories and Dev Databases. App Platform creates a Dev Databases during deploy, but it can’t connect to managed databases.

## Add the YAML File

The `.do/deploy.template.yaml` file contains all of the configuration details required to launch your application on App Platform. The YAML file has the same structure as a [regular app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/), but the spec information goes under a `spec:` key. If you leave out the `spec:` key, the button does not work.

When writing your app spec, reference \[Supported Buildpacks\] for your `environment_slug` and [App Platform pricing](https://docs.digitalocean.com/products/app-platform/details/pricing/#current-plans) for your `instance_size_slug`.

Here’s a sample `deploy.template.yaml` file for a [Golang service](https://github.com/digitalocean/sample-golang) with no database:

```yaml
spec:
 name: sample-golang
 services:
 - name: web
   git:
     branch: main
     repo_clone_url: https://github.com/digitalocean/sample-golang.git
```

Here’s an example of a minimal `deploy.template.yaml` file for a [Python-based service](https://github.com/digitalocean/sample-python) with a dev database:

```yaml
spec:
  name: sample-python
  services:
    - name: sample-python
      git:
        branch: main
        repo_clone_url: https://github.com/digitalocean/sample-python.git
    databases:
    - name: example-db
```

Here’s an example of a minimal [`deploy.template.yaml` for a static site](https://github.com/digitalocean/sample-html):

```yaml
spec:
 name: sample-html
 static_sites:
 - git:
     branch: main
     repo_clone_url: https://github.com/digitalocean/sample-html.git
   name: sample-html
```

You can also specify a `gitlab.com` URL in the `repo_clone_url` parameter of the YAML file.

## Configure Environment Variables

If your app requires an [environment variable](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/), you must list the variable in the `deploy.template.yaml` file with a placeholder value. App Platform prompts you to enter values for these environment variables when you create the app.

For example, in the `deploy.template.yaml` file below:

- `DB_FOO_1` is a secret with a default value, `DB-password-testvalue`. App Platform lets you edit this environment variable at app creation time. This could be a database environment variable you need to set for the app to deploy.
- `EMAIL` is available in plain text at runtime. App Platform prompts you to enter a value when you create the app.
- `MESSAGE` is available in plain text at build and runtime, with a default value of `This is a greeting message`. App Platform lets you edit this value when you create the app.
- `DATABASE_URL` is a [bindable variable](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#using-bindable-variables-within-environment-variables) that points to the database connection string for `example-db`.

```yaml
spec:
  name: sample-golang
  services:
  - name: web
    git:
      branch: main
      repo_clone_url: https://github.com/digitalocean/sample-golang.git
    envs:
    - key: DB_FOO_1
      value: "DB-password-testvalue"
      type: SECRET
    - key: EMAIL
      scope: RUN_TIME
    - key: MESSAGE
      value: "This is a greeting message"
    - key: DATABASE_URL
      scope: RUN_TIME
      value: ${example-db.DATABASE_URL}
  databases:
  - name: example-db
```

## Add the Button

To add the button to a repo’s `README` file, add the following Markdown to your repo’s `README` file:

```markdown
[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/{REPO-OWNER}/{REPO-NAME}/tree/{BRANCH-NAME})
```

To add the button to a website or blog, embed the following HTML on your website:

```html
<a href="https://cloud.digitalocean.com/apps/new?repo=https://github.com/{repo-owner}/{repo-name}/tree/{branch-name}">
 <img src="https://www.deploytodo.com/do-btn-blue.svg" alt="Deploy to DO">
</a>
```

Update the URL with your [repo’s path information](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#update-url-path). For a GitLab repository, use `https://gitlab.com` instead of `https://github.com`.

### Update URL Path

You must then replace the following variables in this code with the following values for the button to work:

- `REPO-OWNER`: The base of your GitHub or GitLab URL. This is usually your user name or organization name.
- `REPO-NAME`: The name given for this specific repo. This is the next path in the GitHub or GitLab URL.
- `BRANCH-NAME`: Common defaults are `main` and `master` but this could be any branch in your repo.

The following code embeds this image in the `README` or website, making it viewable by users browsing your repository on GitHub.com, GitLab.com or your website. Your code edits make the image clickable so that users can deploy your app:

![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)

## Customization

If you’d prefer a different color or style of button, you can swap out the image URL `https://www.deploytodo.com/do-btn-blue.svg`, with one of the following styles:

### Blue Ghost

[https://www.deploytodo.com/do-btn-blue-ghost.svg](https://www.deploytodo.com/do-btn-blue-ghost.svg)

![Deploy to DO](https://www.deploytodo.com/do-btn-blue-ghost.svg)

### White Ghost

[https://www.deploytodo.com/do-btn-white-ghost.svg](https://www.deploytodo.com/do-btn-white-ghost.svg)

![Deploy to DO](https://www.deploytodo.com/do-btn-white-ghost.svg)

### White

[https://www.deploytodo.com/do-btn-white.svg](https://www.deploytodo.com/do-btn-white.svg)

(Shown here on a black background)

![Deploy to DO](https://www.deploytodo.com/do-btn-white.svg)

## Verify the Button Works

Once you’ve added the button to your repo or website, click the **Deploy to DigitalOcean** button. If set up correctly, the button sends you to DigitalOcean’s Control Panel and prompts you to log in. Log in to the control panel.

Note
Your GitHub repo must contain some form of an app. If the repo is empty, App Platform returns the error `App detection failed - Missing app spec file` when you click the deploy button.

Once logged in, the control panel prompts you to enter any environmental variables your app may require. To update environmental variable values, click **Edit** and then enter values for any necessary environmental variables.

Once you have entered any necessary environmental variables, click **Deploy**. Your app should deploy within a few minutes.

If your app does not deploy, or the button does not correctly link to DigitalOcean’s Control Panel, or the control panel doesn’t display your environmental variables, check your configuration using the set up steps above.

## Get DigitalOcean Credits For Use of “Deploy to DigitalOcean” Button

If you refer someone to DigitalOcean using the **Deploy to DigitalOcean** button with a valid referral code, they get credits when they add a valid payment method. You also receive credit for the referral. You can find the payout amounts on the [official DigitalOcean Referral Program page](https://www.digitalocean.com/referral-program).

To enable this benefit for you and your users:

1. Get your unique referral code by visiting [the **Referrals** tab on your **Settings** page](https://cloud.digitalocean.com/user_referrals) and note the 12 character code (for example, `a1b2c3d4e5f6`) at the end of your referral link (for example, `https://m.do.co/c/a1b2c3d4e5f6`).

2. Add your referral code to the end of the URL as an additional query string beginning with `refcode=`.


For example, if your referral code is `a1b2c3d4e5f6` and your URL is:

```html
https://cloud.digitalocean.com/apps/new?repo=https://github.com/digitalocean/sample-nextjs/tree/main
```

After you add your referral code, the URL looks like this:

```html
https://cloud.digitalocean.com/apps/new?repo=https://github.com/digitalocean/sample-nextjs/tree/main&refcode=a1b2c3d4e5f6
```

Note
The `git` URL in `deploy.template.yaml` must be the same as that is specified in this spec.

In this article...

- [Add the YAML File](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#add-the-yaml-file)
- [Configure Environment Variables](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#configure-environment-variables)
- [Add the Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#add-the-button)
  - [Update URL Path](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#update-url-path)
- [Customization](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#customization)
  - [Blue Ghost](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#blue-ghost)
  - [White Ghost](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#white-ghost)
  - [White](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#white)
- [Verify the Button Works](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#verify-the-button-works)
- [Get DigitalOcean Credits For Use of “Deploy to DigitalOcean” Button](https://docs.digitalocean.com/products/app-platform/how-to/add-deploy-do-button/#get-digitalocean-credits-for-use-of-deploy-to-digitalocean-button)

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