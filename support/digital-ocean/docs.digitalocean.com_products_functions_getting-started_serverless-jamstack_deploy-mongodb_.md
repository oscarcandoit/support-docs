---
url: "https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/"
title: "Serverless Jamstack, Part 1: Deploy a MongoDB Database | DigitalOcean Documentation"
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
    - [Deploy MongoDB](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/)
    - [Add Functions to App](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/add-functions/)
    - [Connect Functions to Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/connect-functions-to-website/)
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
- [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- Deploy MongoDB

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Serverless Jamstack, Part 1: Deploy a MongoDB Database

Validated on 19 May 2022 • Last edited on 14 Aug 2024

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

Jamstack applications rely on static frontend HTML sites and backend databases to deliver most of the application’s functionality and content. This tutorial’s sample app uses a plain HTML file and a vanilla JavaScript file to render content and user functionality. The site also uses a backend MongoDB database cluster to store content and data.

In this part of the tutorial series, you:

1. Create a [MongoDB database cluster](https://docs.digitalocean.com/products/databases/mongodb/) and add a database to it.

2. Connect to the database cluster and import sample data into it.


In the next parts of the series, you use serverless functions to build an HTML website and connect the database cluster to the site.

## Prerequisites

To complete this part of the tutorial series, you need:

- To install the latest version of [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install) onto your local machine. MongoDB Compass is a GUI for querying, aggregating, and analyzing MongoDB data in a visual environment.

## Step 1: Deploy and Set Up a MongoDB Database Cluster

To begin setting up the sample application, you need to create a database to store the website’s available coffee data and the email subscriber list. In this step, you create a MongoDB database cluster using the DigitalOcean Control Panel and add a new database to it.

To create a MongoDB database from the DigitalOcean Control Panel, click the **Create** button in the top right of the screen, then select **Databases** from the drop-down menu.

![Database creation screen](https://docs.digitalocean.com/screenshots/functions/jamstack-tutorial_db-create.80e98af569e4dc46cba46416dc4a990b393b02cba1aeccae3110813d8beea398.png)

On the database creation page, select **MongoDB** in the **Choose a database engine** section. In the **Choose a name** field, name the database `serverless-jamstack-db`. The sample code in the rest of this tutorial series expects the database to have this name.

Leave the rest of the configuration options on their default settings and then click **Create a Database Cluster** to deploy the cluster. This may take several minutes to complete.

Once the cluster has been created, you need to create a new database in the cluster and import sample JSON data into it. To do this, from the database’s **Overview** page, click the **Users and Databases** tab. In the **Databases** section, in the **Add new database** field, enter the name `do-coffee` and then click **Save**.

Once you’ve created the new database, click the **Overview** tab and locate the **CONNECTION DETAILS** section. This section contains your database’s connection credentials.

![Database connection details section with do-coffee and connection string selected in drop-down menus](https://docs.digitalocean.com/screenshots/functions/jamstack-tutorial_db-connection-details.c9e66d96c6b427b27d5eaa3b28a5ecadef2cef8f672aa03559fd90a909d013ad.png)

Next, in the **Connection Parameters** drop-down menu, click **Connection string**. In the **Database** drop-down menu, click the `do-coffee` database. The **CONNECTION DETAILS** section populates with a connection string you can provide to MongoDB Compass to connect to the database cluster. Copy the string to connect to the database in the next step.

Note
The connection string contains the placeholder value `<replace-with-your-password>`. If you don’t know the password for your cluster’s `admin` user, you can reset the password in the cluster’s **Users and Databases** tab.

## Step 2: Connect to the Database Cluster

To connect to the database cluster, open MongoDB Compass on your local machine. On the **New Connection** screen, paste the cluster’s connection string into the **URI** field, replacing the `<replace-with-your-password>` value with your database’s password.

![MongoDB Compass new connection screen with connection string pasted into field](https://docs.digitalocean.com/screenshots/functions/jamstack-tutorial_new-connection.4360425fe2ea9e0d62d1a92f217d32afbef8f0110a13ec9a3e90a74eb306c83f.png)

Click **Connect**. MongoDB Compass connects to the cluster.

## Step 3: Import Sample Data

After the client has connected to the cluster, you can begin importing data into the database. In this step, you create two collections in the cluster’s `do-coffee` database that store the example website’s coffee offerings and its email subscriber list. MongoDB stores data in JSON objects that you can query and update as needed.

To import the coffee sample data, click the **do-coffee** database beneath **Databases** in MongoDB Compass’ left menu, then click **Create Collection**.

Name the collection `available-coffees` and then click **Create Collection**. MongoDB Compass adds the new collection to the list of available collections in the `do-coffee` database.

Click the `available-coffees` collection to open it, then click the **ADD DATA** button and select the **Insert Document** option. In the **Insert to Collection** window, delete the placeholder data provided by MongoDB and paste the following JSON data into the field:

```json
[{"pic" : "https://do-example.nyc3.digitaloceanspaces.com/coffee-bag.png", "name" : "Coco-Loco", "description" : "Medium body with subtle acidity. Notes of sweet cocoa, toffee and brown sugar.", "price" : "7.99"},\
{"pic" : "https://do-example.nyc3.digitaloceanspaces.com/coffee-bag.png", "name" : "Vanillhalla", "description" : "Light smooth medium body with light acidity. Vanilla, nutty and cherry flavor notes.", "price" : "9.99"},\
{"pic" : "https://do-example.nyc3.digitaloceanspaces.com/coffee-bag.png", "name" : "French Roast", "description" : "Dry mouthfeel with deep smoky aroma. Flavor notes of tobacco & spice.", "price" : "8.99"}]
```

![Import data screen with sample data entered into the field.](https://docs.digitalocean.com/screenshots/functions/jamstack-tutorial_import-data.6a55b6cd76956d915c4a08145ff603557969d5ae055627cc6b4c4100cf1ef120.png)

Then click **Insert** to import the data into the collection. The collection populates with the sample data.

Finally, create a second collection inside the `do-coffee` database named `email-list`. This collection records the email addresses of users subscribing to the site’s email list.

You connect the website to these collections using serverless functions in the subsequent parts of the tutorial.

## Summary

In this part of the tutorial series, you:

- Created a MongoDB database.
- Connected to the MongoDB database using MongoDB Compass and imported sample data into it.

## Next Step

In the next part of this tutorial series, you add serverless functions to the app that connect to the database and retrieve and post data.

![](https://docs.digitalocean.com/images/icons/functions.svg)

Serverless Jamstack, Part 2: Add Serverless Functions to App

Set up serverless functions and connect them to the database.

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#prerequisites)
- [Step 1: Deploy and Set Up a MongoDB Database Cluster](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#step-1-deploy-and-set-up-a-mongodb-database-cluster)
- [Step 2: Connect to the Database Cluster](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#step-2-connect-to-the-database-cluster)
- [Step 3: Import Sample Data](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#step-3-import-sample-data)
- [Summary](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#summary)
- [Next Step](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/deploy-mongodb/#next-step)

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