---
url: "https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/"
title: "How to Connect PostgreSQL to Connection Pools in App Platform | DigitalOcean Documentation"
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
    - [Manage Databases](https://docs.digitalocean.com/products/app-platform/how-to/manage-databases/)
    - [Store Data](https://docs.digitalocean.com/products/app-platform/how-to/store-data/)
    - [Use Database Connection Pools](https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/)
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
- [Manage Data Storage](https://docs.digitalocean.com/products/app-platform/how-to/manage-data-storage/)
- Use Database Connection Pools

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect PostgreSQL to Connection Pools in App Platform

Validated on 6 Jan 2023 • Last edited on 23 Jan 2025

App Platform is a Platform-as-a-Service (PaaS) offering that allows developers to publish code directly to DigitalOcean servers without worrying about the underlying infrastructure.

Note
Connecting your App Platform app to a database connection pool is currently only available for PostgreSQL databases.

Instead of forcing database clients to open and close connections each time they send a request, you can set up connection pools that allow clients to open a set number of connections, keep them open, and reuse them over the course of their session with the database. This helps reduce latency, lower resource usage, and create parallelism in your application.

You can create connection pools for your application in App Platform using PostgreSQL and bindable environment variables.

Before adding a PostgreSQL database with a connection pool to your app, you need to complete the following:

- [Deploy your app](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/) on App Platform.
- [Create a PostgreSQL database](https://docs.digitalocean.com/products/databases/postgresql/how-to/create/).
- [Add a connection pool](https://docs.digitalocean.com/products/databases/postgresql/how-to/manage-connection-pools/#creating-a-connection-pool) to the database.

Once you have completed these prerequisites, you can add the database as a component of your app.

## Add Database as a Component

To add the database as a component of your app from the [DigitalOcean Control Panel](https://cloud.digitalocean.com/), select **Apps** from the left-hand menu and then select your app from the Apps screen.

![Create component menu open with Create Attach Database option selected.](https://docs.digitalocean.com/screenshots/app-platform/app-db-attach-db.15a46ca8f22cb917aef1f243946757f196776c30b52ef9422632c5d4d75a96ff.png)

From the app’s **Overview** page, click the **Create** button and select **Create/Attach Database** from the drop-down menu.

![Configure database page with Previously Created DigitalOcean Database option selected and fields filled out.](https://docs.digitalocean.com/screenshots/app-platform/app-db-add-previous.74b16a0f9388cc4f0b6ee8f139c9423094c04b9a2638b318b1e65f5071d4233a.png)

On the **Configure your database** page, select the **Previously Created DigitalOcean Database** option, then select the database cluster with the connection pool from the **Database Cluster** drop-down menu. Once you’ve selected the target database, additional drop-down menus appear.

In the **Database** field, select the database in the cluster you want the application to connect to. In the **User** field, select the database user that you want the application to connect to the database with. After configuring these settings, click **Attach Database**. App Platform redeploys your app with the attached database.

## Configure Bindable Environment Variables

Once the app redeploys, you can define environment variables that your application can use to connect to the database and its pool. App Platform provides [several bindable environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/#app-wide-variables) that contain sensitive information about your app and its components. For example, you can use the `${your_database_name.DATABASE_URL}` bindable variable to create an environment variable that contains your database’s URL information. This section explains how to set up bindable environment variables for your database’s URL and the connection pool’s URL.

To add environment variables to your application, first go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/apps) and select your app from the Apps screen.

From the app’s **Overview** page, click the **Settings** tab and then scroll down to the **App-Level Environment Variables** section.

![App-Level Environment Variables section with new environment variables added.](https://docs.digitalocean.com/screenshots/app-platform/app-db-env-variables.0b9bde9ceea5cd0c036ab626ab56b179633285fafc3232e9a1022178fda79d06.png)

In the **Keys** field, enter a name for the database’s URL environment variable. The name can be anything. In the **Values** field, enter the bindable variable value for the database’s URL in the following syntax, substituting the `your_database_name` placeholder value with your database’s name:

```
${your_database_name.DATABASE_URL}
```

For example, if your database’s name is `example-db`, the variable value would be:

```
${example-db.DATABASE_URL}
```

Once you’ve enter the values for each field, click the **+** button to add a second variable.

In **Keys** field, enter a name for the variable. In the **Values** field, enter the value of your database connection pool in the following syntax:

```
${your_database_name.your_database_connection_pool_name.DATABASE_URL}
```

Once you’ve entered the values for each field, click **Save**. This redeploys the app with the new environment variables.

To verify that the environment variables are now available and referencing the correct information about your database, scroll back to the top of the **Settings** page and then click the **Console** tab.

From the console’s command line, use the `echo` utility to call the variables using the values you entered into the **Keys** fields in the prior step:

```
echo $your_database_URL_variable_name $your_database_connection-pool_variable_name
```

For example, if you named your database URL variable `DATABASE_URL` and the database’s connection pool variable `DATABASE_POOL_URL`, the command would look like this:

```
echo $DATABASE_URL $DATABASE_POOL_URL
```

The command returns the respective value of each environment variable.

You can now use these variables in your application’s code.

In this article...

- [Add Database as a Component](https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/#add-database-as-a-component)
- [Configure Bindable Environment Variables](https://docs.digitalocean.com/products/app-platform/how-to/connect-pg-pools/#configure-bindable-environment-variables)

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