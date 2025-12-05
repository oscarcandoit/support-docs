---
url: "https://docs.gravityforms.com/database-storage-structure-reference/"
title: "Database Structure - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)    - [Database Structure](https://docs.gravityforms.com/database-storage-structure-reference/ "Database Structure")
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Database Structure

- [Tables](https://docs.gravityforms.com/database-storage-structure-reference/#h-tables)
- [gf\_addon\_feed](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-addon-feed)
- [gf\_addon\_payment\_callback](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-addon-payment-callback)
- [gf\_addon\_payment\_transaction](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-addon-payment-transaction)
- [gf\_draft\_submissions](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-draft-submissions)
- [gf\_entry](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-entry)
- [gf\_entry\_meta](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-entry-meta)
- [gf\_entry\_notes](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-entry-notes)
- [gf\_form](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-form)
- [gf\_form\_meta](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-form-meta)
- [gf\_form\_revisions](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-form-revisions)
- [gf\_form\_view](https://docs.gravityforms.com/database-storage-structure-reference/#h-gf-form-view)
- [Changes from Gravity Forms 2.2](https://docs.gravityforms.com/database-storage-structure-reference/#h-changes-from-gravity-forms-2-2)
- [Introduction](https://docs.gravityforms.com/database-storage-structure-reference/#h-introduction)
- [Changes](https://docs.gravityforms.com/database-storage-structure-reference/#h-changes)
- [The Migration Process](https://docs.gravityforms.com/database-storage-structure-reference/#h-the-migration-process)

Here’s how Gravity Forms is structured within your database:

**Note**: This structure applies to Gravity Forms version 2.3 or higher.

## Tables

Listed below you can find the names and definitions for tables created by Gravity Forms. WordPress adds a prefix to any tables created, so when checking them in your database you will notice all the tables have a prefix before their name, this prefix is set by the user during the installation of WordPress, so it can be different on each installation.

### gf\_addon\_feed

Contains Gravity Forms feeds.

- **id**

Contains the unique feed ID. **AUTO\_INCREMENT** must be enabled.
- **form\_id**


Contains the ID of the form that the feed is associated with.
- **is\_active**


Defines if the feed is active or not. Integer is used as a boolean (0 is false, 1 is true).
- **feed\_order**


The order in which the feed is processed if multiple feeds exist.
- **meta**


Meta information related to the feed. Stored as JSON.
- **addon\_slug**


The slug of the add-on that the feed is associated with.

### gf\_addon\_payment\_callback

Contains information related to payment callbacks that have been received.

- **id**

The row ID. **AUTO\_INCREMENT** must be enabled.
- **lead\_id**


The entry ID associated with the callback.
- **addon\_slug**


The add-on associated with the callback.
- **callback\_id**


The callback ID.
- **date\_created**


The date that the callback was received.

### gf\_addon\_payment\_transaction

Contains transaction details.

- **id**

The transaction ID. **AUTO\_INCREMENT** must be enabled.
- **lead\_id**


The entry ID associated with the transaction.
- **transaction\_type**


The transaction type.
- **transaction\_id**


The unique transaction ID.
- **subscription\_id**


The subscription ID, if applicable.
- **is\_recurring**


Defines if this is a recurring subscription. Integer is used as a boolean (0 is false, 1 is true).
- **amount**


The amount of the transaction.
- **date\_created**


The date the transaction was created.

### gf\_draft\_submissions

Holds draft submissions created by the save and continue feature.

- **uuid**


The unique ID of the draft submission.
- **email**


The email address associated with the draft submission.
- **form\_id**


The form ID that the draft submission is associated with.
- **date\_created**


The date the draft submission was created.
- **ip**


The IP address that created the draft submission.
- **source\_url**


The URL that was used to submit the draft submission.
- **submission**


Submission details regarding the draft submission.

### gf\_entry

Contains Gravity Forms entries.

- **id**

The unique entry ID. **AUTO\_INCREMENT** must be enabled.
- **form\_id**


The form ID that the entry is associated with.
- **post\_id**


The ID of the post that was created from the entry, if applicable.
- **date\_created**


The date that the entry was created.
- **date\_updated**


The date that the entry was last updated.
- **is\_starred**


If the entry is starred. Integer is used as a boolean (0 is false, 1 is true).
- **is\_read**


If the entry has been marked as read. Integer is used as a boolean (0 is false, 1 is true).
- **ip**


The IP address that submitted the entry.
- **source\_url**


The URL of where the submission took place.
- **user\_agent**


The user agent of the entry submitter.
- **currency**


The currency used in the entry, if applicable.
- **payment\_status**


The status of the payment, if applicable.
- **payment\_date**


The date that the payment took place, if applicable.
- **payment\_amount**


The amount of the payment, if applicable.
- **payment\_method**


The transaction method used to process the payment, if applicable.
- **transaction\_id**


The transaction ID associated with the entry, if applicable.
- **is\_fulfilled**


If the transaction has been fulfilled, if applicable.
- **created\_by**


The ID of the user that created the entry, if applicable.
- **transaction\_type**


The transaction type, if applicable.
- **status**


The current entry status.
- **source\_id**

Null or the ID of the post or page where the form was embedded at the time the entry was saved. Since Gravity Forms 2.9.

### gf\_entry\_meta

Contains additional metadata related to entries. Details from fields, as well as add-ons, are stored here.

- **id**

The unique ID. **AUTO\_INCREMENT** must be enabled.
- **form\_id**


The form ID that the entry meta is associated with.
- **entry\_id**


The entry ID that the meta is associated with.
- **meta\_key**


The meta key.
- **meta\_value**


The value stored under the meta key.
- **item\_index**


The item index.

### gf\_entry\_notes

Contains notes that were placed on an entry.

- **id**

The note ID. **AUTO\_INCREMENT** must be enabled.
- **entry\_id**


The entry ID that the note is associated with.
- **user\_name**


The user name that created the note.
- **user\_id**


The user ID that created the note.
- **date\_created**


The date that the note was created.
- **value**


The contents of the note.
- **note\_type**


The type of note that was left, if applicable.
- **sub\_type**


The secondary note type, if applicable.

### gf\_form

Contains the forms that exist within Gravity Forms.

- **id**

The form ID. **AUTO\_INCREMENT** must be enabled.
- **title**


The form title.
- **date\_created**


The date that the form was created.
- **is\_active**


If the form is active. Integer is used as a boolean (0 is false, 1 is true).
- **is\_trash**


If the form is trashed. Integer is used as a boolean (0 is false, 1 is true).

### gf\_form\_meta

Contains metadata associated with forms.

- **form\_id**


The form ID that the metadata is associated with.
- **display\_meta**


Meta related to how the form and fields are configured.
- **entries\_grid\_meta**


Additional meta related to entries and how they will be displayed.
- **confirmations**


Confirmation configuration.
- **notifications**


Notification configuration.

### gf\_form\_revisions

Contains form revisions. At the time of writing this documentation is only used for [Consent fields](https://docs.gravityforms.com/consent-field/)

- **id**

The ID. **AUTO\_INCREMENT** must be enabled.
- **form\_id**

The form ID that the form revision is associated with.
- **display\_meta**

Meta related to how the form and fields are configured.
- **date\_created**

The date that the revision was created.

### gf\_form\_view

Contains details on form views.

- **id**

The ID. **AUTO\_INCREMENT** must be enabled.
- **form\_id**


The form ID that the data is associated with.
- **date\_created**


The date that the row was created.
- **ip**


The IP that accessed the form.
- **count**


The number of times that the IP accessed the form.

## Changes from Gravity Forms 2.2

### Introduction

The database schema was changed in Gravity Forms 2.3 to enable significant performance enhancements and to allow key features to be added. Code that uses the Gravity Forms API (GFAPI) will not be affected and will continue to work as before. However, custom code and add-ons that access the database tables directly will need updating.

### Changes

The following changes were made to the tables and columns.

- rg\_lead -> gf\_entry
- rg\_lead\_details + rg\_lead\_meta tables -> gf\_entry\_meta
- All lead\_id columns -> entry\_id
- rg\_form -> gf\_form
- rg\_form\_view -> gf\_form\_view
- rg\_form\_meta -> gf\_form\_meta
- rg\_incomplete\_submissions -> gf\_draft\_submissions

**Note:** Despite of tables **gf\_addon\_feed, gf\_addon\_payment\_callback and gf\_addon\_payment\_transaction** are using the gf\_ prefix, they’re not part of the changes done in this version. If for any reason you need to delete the new tables to run the upgrade from scratch again, make sure to skip these tables.

### The Migration Process

The automatic migration process creates the new tables and copies all the data over to the new tables in a series of background tasks. If the task stops, for example because of a server restart, then the migration will continue with a scheduled cron task. If there’s a database error, then the migration will stop and try again later.

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 10, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/database-storage-structure-reference/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)