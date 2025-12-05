---
url: "https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/"
title: "How to Tag MongoDB Database Clusters | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/mongodb.15f32316da2692011abce02f393a1ee6db469250230cf1ea962c181c0e9e7de5.svg)MongoDB](https://docs.digitalocean.com/products/databases/mongodb/)
- [Getting Started](https://docs.digitalocean.com/products/databases/mongodb/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/databases/mongodb/getting-started/quickstart/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
  - [Create MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/create/)
  - [Resize Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/resize/)
  - [Connect to MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/connect/)
  - [Import MongoDB Data](https://docs.digitalocean.com/products/databases/mongodb/how-to/import-collections/)
  - [Secure MongoDB Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/secure/)
  - [Schedule Automatic Updates](https://docs.digitalocean.com/products/databases/mongodb/how-to/schedule-updates/)
  - [Tag Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/)
  - [Manage Users and Databases](https://docs.digitalocean.com/products/databases/mongodb/how-to/manage-users-and-databases/)
  - [Upgrade Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/upgrade/)
  - [Add Standby Nodes](https://docs.digitalocean.com/products/databases/mongodb/how-to/add-standby-nodes/)
  - [Monitor Cluster Performance](https://docs.digitalocean.com/products/databases/mongodb/how-to/monitor-clusters/)
  - [Forward Logs](https://docs.digitalocean.com/products/databases/mongodb/how-to/forward-logs/)
  - [Set Up Monitoring Alerts](https://docs.digitalocean.com/products/databases/mongodb/how-to/set-up-alerts/)
  - [Fork Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/fork-clusters/)
  - [Reconfigure Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/reconfigure/)
  - [Restore from Backups](https://docs.digitalocean.com/products/databases/mongodb/how-to/restore-from-backups/)
  - [Destroy Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/databases/mongodb/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Databases)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/databases/)
- [Concepts](https://docs.digitalocean.com/products/databases/mongodb/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/databases/mongodb/concepts/best-practices/)
  - [Shared Responsibility Model](https://docs.digitalocean.com/products/databases/mongodb/concepts/responsibility-model/)
- [Details](https://docs.digitalocean.com/products/databases/mongodb/details/)
  - [Features](https://docs.digitalocean.com/products/databases/mongodb/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/databases/mongodb/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/databases/mongodb/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/databases/mongodb/details/limits/)
  - [Cluster Notifications](https://docs.digitalocean.com/products/databases/mongodb/details/notifications/)
  - [Service-Level Agreement](https://www.digitalocean.com/sla/databases)
- [Support](https://docs.digitalocean.com/products/databases/mongodb/support/)

- [How-Tos](https://docs.digitalocean.com/products/databases/mongodb/how-to/)
- Tag Database Clusters

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Tag MongoDB Database Clusters

Validated on 28 Jun 2021 • Last edited on 17 Jun 2025

MongoDB is a source-available cross-platform document-oriented database program for high-volume storage. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

Tags are custom labels you can apply to database clusters and other DigitalOcean resources. You can filter tagged databases clusters or [create monitoring alert policies](https://docs.digitalocean.com/products/databases/mongodb/how-to/set-up-alerts/) for multiple databases clusters with the same tag.

Choosing terms that describe a database cluster’s function can help you locate and administer clusters that share common roles. For example, you might tag a cluster by:

- **Environment**, like production, staging or development.
- **Purpose**, like a project name or any other key term that describes the use of the database cluster.
- **Person**, like the individual or team responsible for managing the database cluster.

You can add tags to databases during or after creation.

## Limits

- Tags must be a single word containing only letters, numbers, colons, dashes, and underscores.

## Known Issues

- You cannot edit existing tags. Instead, create a new tag, apply it to the appropriate resources, and delete the old one.
- Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.
  - Tagged resources in the control panel always displays the canonical capitalization. For example, if you create a tag named `PROD`, you can tag resources in the control panel by entering `prod`. The tag still displays with its canonical capitalization, `PROD`.
  - When working with [tags in the API](https://docs.digitalocean.com/reference/api/digitalocean/), you must use the tag’s canonical capitalization. For example, if you create a tag named `PROD`, the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).

## Tag Database Clusters During Creation

To add tags while creating a new database cluster, at the bottom of the [database cluster create page](https://cloud.digitalocean.com/databases/new), look for the **Finalize and create** section and click the **Add Tags** link to display the tag input form.

![The Finalize and Create section of the database cluster creation menu, including the expanded Add Tags section.](https://docs.digitalocean.com/screenshots/databases/finalize-and-create-with-tags.8615437a9d58c0015aa9fcc902549a63bc9f28ee62a76bb0351c75824ee711b1.png)

Under the **Add optional tags to your database cluster** header, enter the tags. Add multiple tags by pressing `SPACEBAR` or `ENTER` after each term. Navigate between tags with the arrow keys, and remove the highlighted tag with `BACKSPACE`.

## Tag Existing Database Clusters

To add or modify tags for existing database clusters, use the cluster’s **More** menu and select **Edit tags**.

![The database cluster's More menu](https://docs.digitalocean.com/screenshots/databases/cluster-more-menu.9f0427ae4e7def2a45309eb5fba5ab597bdd4ab4f1be923e6a3bd9ad382df605.png)

On a [project’s dashboard](https://docs.digitalocean.com/products/projects/), you can also hover over an untagged database cluster’s row of information to reveal the **Add tags** link.

No matter which way you navigate, the **Manage Tags** dialog opens.

![The Manage Tags dialog](https://docs.digitalocean.com/screenshots/databases/manage-tags.bb76064e30a6d1d16f684ebf4cd182e22ce6c1e7e8fdd9c62bf087892cd91716.png)

Add tags by pressing `SPACEBAR` or `ENTER` after each term. Navigate between tags with the arrow keys, and remove the highlighted tag with `BACKSPACE`.

When you’re done, click **Save Tags**.

## Filter by Tag

If you click a tag from anywhere in the control panel, like on the dashboard of a project or on the list of database clusters, you go to the list of all resources with that tag.

![An example of a list of resources with a tag. There is 1 database cluster and one Droplet with the tag 'web-team'.](https://docs.digitalocean.com/screenshots/databases/tags-filter-list.19452bd03999eb12d8b2965a6f11adc2ab36328b5cc4ad859f6da09d58996418.png)

Filter lists are limited to a single tag, displayed at the top of the list.

In this article...

- [Limits](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/#limits)
- [Known Issues](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/#known-issues)
- [Tag Database Clusters During Creation](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/#tag-database-clusters-during-creation)
- [Tag Existing Database Clusters](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/#tag-existing-database-clusters)
- [Filter by Tag](https://docs.digitalocean.com/products/databases/mongodb/how-to/tag/#filter)

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