---
url: "https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/"
title: "Managing Add-On Feeds with the GFAPI - Gravity Forms Documentation"
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
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)    - [API Functions](https://docs.gravityforms.com/category/developers/php-api/api-functions/)      - [Creating Forms with the GFAPI](https://docs.gravityforms.com/creating-forms-with-the-gfapi/ "Creating Forms with the GFAPI")
      - [Duplicating Forms with the GFAPI](https://docs.gravityforms.com/duplicating-forms-with-the-gfapi/ "Duplicating Forms with the GFAPI")
      - [Updating Forms with the GFAPI](https://docs.gravityforms.com/updating-forms-with-the-gfapi/ "Updating Forms with the GFAPI")
      - [Getting Forms with the GFAPI](https://docs.gravityforms.com/getting-forms-with-the-gfapi/ "Getting Forms with the GFAPI")
      - [Deleting Forms with the GFAPI](https://docs.gravityforms.com/deleting-forms-with-the-gfapi/ "Deleting Forms with the GFAPI")
      - [Submitting Forms with the GFAPI](https://docs.gravityforms.com/submitting-forms-with-the-gfapi/ "Submitting Forms with the GFAPI")
      - [GFAPI Class](https://docs.gravityforms.com/api-functions/ "GFAPI Class")
      - [Validating Form Submissions with the GFAPI](https://docs.gravityforms.com/validating-forms-with-the-gfapi/ "Validating Form Submissions with the GFAPI")
      - [Creating Entries with the GFAPI](https://docs.gravityforms.com/creating-entries-with-the-gfapi/ "Creating Entries with the GFAPI")
      - [Updating Entries with the GFAPI](https://docs.gravityforms.com/updating-entries-with-the-gfapi/ "Updating Entries with the GFAPI")
      - [Searching and Getting Entries with the GFAPI](https://docs.gravityforms.com/searching-and-getting-entries-with-the-gfapi/ "Searching and Getting Entries with the GFAPI")
      - [Deleting Entries with the GFAPI](https://docs.gravityforms.com/deleting-entries-with-the-gfapi/ "Deleting Entries with the GFAPI")
      - [Managing Add-On Feeds with the GFAPI](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/ "Managing Add-On Feeds with the GFAPI")
      - [Sending Notifications with the GFAPI](https://docs.gravityforms.com/sending-notifications-with-the-gfapi/ "Sending Notifications with the GFAPI")
      - [Getting Fields with the GFAPI](https://docs.gravityforms.com/getting-fields-with-the-gfapi/ "Getting Fields with the GFAPI")
      - [Validating Field Submissions with the GFAPI](https://docs.gravityforms.com/validating-field-submissions-with-the-gfapi/ "Validating Field Submissions with the GFAPI")
      - [Managing Notes with the GFAPI](https://docs.gravityforms.com/managing-notes-with-the-gfapi/ "Managing Notes with the GFAPI")
      - [GFAPI Examples for Forms and Entries](https://docs.gravityforms.com/getting-started-gravity-forms-api-gfapi/ "GFAPI Examples for Forms and Entries")
      - [gf\_has\_action](https://docs.gravityforms.com/gf_has_action/ "gf_has_action")
      - [gf\_has\_filters](https://docs.gravityforms.com/gf_has_filters/ "gf_has_filters")
      - [Helper Functions](https://docs.gravityforms.com/helper-functions/ "Helper Functions")
    - [Add-On Framework](https://docs.gravityforms.com/category/developers/php-api/add-on-framework/)
    - [Field Framework](https://docs.gravityforms.com/category/developers/php-api/field-framework/)
    - [Constants](https://docs.gravityforms.com/category/developers/php-api/constants/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Managing Add-On Feeds with the GFAPI

- [Introduction](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-introduction)
- [get\_feeds](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-get-feeds)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-examples)
- [get\_feed](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-get-feed)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-0)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-0)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed-examples)
- [get\_feed\_name](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-1)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-1)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name-examples)
- [add\_feed](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-add-feed)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-2)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-2)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#add_feed-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#add_feed-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#add_feed-examples)
- [delete\_feed](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-delete-feed)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-3)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-3)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#delete_feed-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#delete_feed-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#delete_feed-examples)
- [update\_feed](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-update-feed)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-4)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-4)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed-examples)
- [feed\_exists](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-feed-exists)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-5)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-5)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#feed_exists-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#feed_exists-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#feed_exists-examples)
- [update\_feed\_property](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-update-feed-property)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-6)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-6)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed_property-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed_property-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed_property-examples)
- [maybe\_process\_feeds](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-maybe-process-feeds)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-7)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-7)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#maybe_process_feeds-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#maybe_process_feeds-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#maybe_process_feeds-usage-examples)
- [get\_processed\_feeds\_meta](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-get-processed-feeds-meta)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-8)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-8)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_processed_feeds_meta-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_processed_feeds_meta-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_processed_feeds_meta-usage-examples)
- [update\_processed\_feeds\_meta](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-update-processed-feeds-meta)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-9)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-9)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_processed_feeds_meta-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_processed_feeds_meta-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_processed_feeds_meta-usage-examples)
- [update\_entry\_feed\_status](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-update-entry-feed-status)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-10)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-10)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_entry_feed_status-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_entry_feed_status-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_entry_feed_status-usage-examples)
- [get\_entry\_feed\_status](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-get-entry-feed-status)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-11)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-11)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status-usage-examples)
- [get\_entry\_feed\_status\_key](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-get-entry-feed-status-key)
- [Method Overview](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-method-overview-12)
- [Source Code](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#h-source-code-12)
- [Parameters](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status_key-parameters)
- [Returns](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status_key-returns)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status_key-usage-examples)

## Introduction

The following GFAPI methods are used to manage form Feeds. Each [Feed](https://docs.gravityforms.com/feed-object/) contains the properties which determine if and how the form submission is processed by an add-on.

See the [GFAPI article](https://docs.gravityforms.com/api-functions/) for other available methods.

## get\_feeds

**GFAPI::get\_feeds()** was added in Gravity Forms version 1.8 and is used to get all feeds which match the given search criteria.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_feeds** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``get_feeds(``$feed_ids``= null,``$form_id``= null,``$addon_slug``= null,``$is_active``= true ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_ids** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) | Optional. The ID of the Feed or an array of Feed IDs. |
| **$form\_ids** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) \| [array](https://docs.gravityforms.com/array) | Optional. The ID of the Form to which the Feeds belong. Since 2.6.1, an array of IDs can be used to return feeds for multiple forms. |
| **$addon\_slug** | [null](https://docs.gravityforms.com/null) \| [string](https://docs.gravityforms.com/string) | Optional. The slug of the add-on to which the Feeds belong, including the `gravityforms` prefix. See the Gravity Forms Add-On Slugs article for a list of possible slugs. |
| **$is\_active** | [boolean](https://docs.gravityforms.com/boolean) | Optional. Default `true`. Indicates if only active or inactive feeds should be returned. Since 2.4.23.4, `null` can be used to return both. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [array](https://docs.gravityforms.com/array) \| [WP\_Error](https://docs.gravityforms.com/WP_Error) | An array of Feed Objects or a `WP_Error` instance. |

### Usage Examples

Getting all active feeds.

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_feeds();` |

Getting a specific feed.

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_feeds( 1 );` |

Getting multiple specific feeds.

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_feeds(``array``( 1, 5 ) );` |

Getting all active feeds for a specific form.

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_feeds( null, 2 );` |

Getting all active feeds for a specific add-on.

|     |     |
| --- | --- |
| 1 | `$result = GFAPI::get_feeds( null, null, 'gravityformszapier' );` |

## get\_feed

**GFAPI::get\_feed()** was added in Gravity Forms version 2.4.23.4 and is used to get a specific feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_feed** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``get_feed(``$feed_id``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the feed to retrieve. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [array](https://docs.gravityforms.com/array) \| [WP\_Error](https://docs.gravityforms.com/WP_Error) | The Feed Object or a `WP_Error` instance. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::get_feed( 1 );` |

## get\_feed\_name

**GFAPI::get\_feed\_name()** was added in Gravity Forms version 2.9.9 and retrieves the name of the given feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_feed\_name** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feed_name-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``get_feed_name(``$feed``,``$key``=``''``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed** | [array](https://docs.gravityforms.com/array) | The feed. **Required** |
| **$key** | [string](https://docs.gravityforms.com/string) | The key used to store the name |

### Returns

| Return | Description |
| --- | --- |
| [string](https://docs.gravityforms.com/array) | The feed name |

### Usage Examples

|     |     |
| --- | --- |
| 1<br>2 | `$feed``= GFAPI::get_feed( 123 );`<br>`$feed_name``= GFAPI::get_feed_name(``$feed``);` |

## add\_feed

**GFAPI::add\_feed()** was added in Gravity Forms version 1.8 and is used to add a new feed to the specified form with the given configuration.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **add\_feed** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#add_feed-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#add_feed-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``add_feed(``$form_id``,``$feed_meta``,``$addon_slug``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form to which the feed belongs. |
| **$feed\_meta** | [array](https://docs.gravityforms.com/array) | The feed properties, see the `meta` property of the Feed Object. |
| **$addon\_slug** | [string](https://docs.gravityforms.com/string) | The slug of the add-on to which the Feed belongs, including the `gravityforms` prefix. See the Gravity Forms Add-On Slugs article for a list of possible slugs. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [WP\_Error](https://docs.gravityforms.com/WP_Error) \| [integer](https://docs.gravityforms.com/integer) | A `WP_Error` if an error occurs or the ID of the Feed returned by the database. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::add_feed(``$form_id``,``$feed_meta``,``$addon_slug``);` |

## delete\_feed

**GFAPI::delete\_feed()** was added in Gravity Forms version 1.8 and is used to delete a specific Feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **delete\_feed** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#delete_feed-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#delete_feed-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``delete_feed(``$feed_id``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the Feed Object to be deleted. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [boolean](https://docs.gravityforms.com/boolean) \| [WP\_Error](https://docs.gravityforms.com/WP_Error) | `true` for success or a `WP_Error` instance. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::delete_feed(``$feed_id``);` |

## update\_feed

**GFAPI::update\_feed()** was added in Gravity Forms version 1.8 and is used to update the meta for a specific Feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_feed** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``update_feed(``$feed_id``,``$feed_meta``,``$form_id``= null ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the Feed Object to be updated. |
| **$feed\_meta** | [array](https://docs.gravityforms.com/array) | The feed properties, see the `meta` property of the Feed Object. |
| **$form\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the form to which the feed belongs. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [boolean](https://docs.gravityforms.com/boolean) \| [WP\_Error](https://docs.gravityforms.com/WP_Error) | `true` for success or a `WP_Error` instance. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::update_feed(``$feed_id``,``$feed_meta``,``$form_id``);` |

## feed\_exists

**GFAPI::feed\_exists()** was added in Gravity Forms version 2.4.24 and is used to check if a Feed exists for the given ID.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **feed\_exists** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``feed_exists(``$feed_id``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [integer](https://docs.gravityforms.com/integer) | The ID to be checked. |

- **$feed\_id** [integer](https://docs.gravityforms.com/integer)
The ID to be checked.


### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [boolean](https://docs.gravityforms.com/boolean) | Whether or not a Feed Object exists for the supplied ID. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::feed_exists(``$feed_id``);` |

## update\_feed\_property

**GFAPI::update\_feed\_property()** was added in Gravity Forms version 2.4.24 and is used to update the properties of a specific Feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_feed\_property** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed_property-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_feed_property-returns) |

### Source Code

|     |     |
| --- | --- |
| 1 | `public``static``function``update_feed_property(``$feed_id``,``$property_name``,``$property_value``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the Feed Object to be updated. |
| **$property\_name** | [string](https://docs.gravityforms.com/string) | The name of the property (column) being updated. Supported: `form_id`, `is_active`, `feed_order`, `meta`, and `addon_slug`. |
| **$property\_value** | [string](https://docs.gravityforms.com/string) \| [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) | The new value of the specified property. The `meta` property can be passed as an associative array or JSON. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [boolean](https://docs.gravityforms.com/boolean) \| [WP\_Error](https://docs.gravityforms.com/WP_Error) | `true` for success or a `WP_Error` instance. |

### Usage Examples

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::update_feed_property(``$feed_id``,``$property_name``,``$property_value``);` |

|     |     |
| --- | --- |
| 1 | `$result``= GFAPI::update_feed_property( 1,``'is_active'``, 0 );` |

## maybe\_process\_feeds

**GFAPI::maybe\_process\_feeds()** was added in Gravity Forms 2.9.2 and can be used to trigger processing of non-payment add-on feeds for the given entry by all or a specific feed add-on.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **maybe\_process\_feeds** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#maybe_process_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#maybe_process_feeds-returns) |

### Source Code

|     |
| --- |
| `public``static``function``maybe_process_feeds(``$entry``,``$form``,``$addon_slug``=``''``,``$reset_meta``= false ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry** | [Entry Object](https://docs.gravityforms.com/Entry_Object) | The entry to be processed. |
| **$form** | [Form Object](https://docs.gravityforms.com/Form_Object) | The form the entry belongs to. |
| **$addon\_slug** | [string](https://docs.gravityforms.com/string) | A specific add-on slug, or an empty string for all non-payment add-on feeds to be processed. |
| **$reset\_meta** | [boolean](https://docs.gravityforms.com/boolean) | Indicates if the processed feeds meta for the entry should be reset. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$result** | [boolean](https://docs.gravityforms.com/boolean) \| [Entry Object](https://docs.gravityforms.com/Entry_Object) | The entry returned by the add-ons that processed the feed, or `false` when there isn’t an active feed add-on or if an instance of the specified add-on does not exist. |

### Usage Examples

This example would trigger processing of all non-payment add-on feeds for the given entry and form.

|     |
| --- |
| `$result``= GFAPI::maybe_process_feeds(``$entry``,``$form``);` |

This example would trigger processing of feeds for a specific add-on.

|     |
| --- |
| `$result``= GFAPI::maybe_process_feeds(``$entry``,``$form``,``'gravityformswebhooks'``);` |

This example would delete the processed feeds meta before triggering processing of feeds for all non-payment add-ons.

|     |
| --- |
| `$result``= GFAPI::maybe_process_feeds(``$entry``,``$form``,``''``, true );` |

## get\_processed\_feeds\_meta

**GFAPI::get\_processed\_feeds\_meta()** was added in Gravity Forms 2.9.2, it can be used to retrieve the value of the processed\_feeds meta for the specified entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_processed\_feeds\_meta** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_processed_feeds_meta(``$entry_id``,``$addon_slug``=``''``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the meta is to be retrieved for. |
| **$addon\_slug** | [string](https://docs.gravityforms.com/string) | A specific add-on slug to return the IDs for a specific add-on, or an empty string to return the meta for all add-ons. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **$meta** | [array](https://docs.gravityforms.com/array) | An array of feed IDs for a specific add-on, or an array using the add-on slugs as the keys to the arrays of feed IDs. |

### Usage Examples

The following example would retrieve the meta for a specific add-on for the specified entry.

|     |
| --- |
| `$feed_ids``= GFAPI::get_processed_feeds_meta(``$entry_id``,``'gravityformswebhooks'``);` |

The following example would retrieve the entire value of the processed\_feeds meta for the specified entry.

|     |
| --- |
| `$meta``= GFAPI::get_processed_feeds_meta(``$entry_id``);` |

## update\_processed\_feeds\_meta

**GFAPI::update\_processed\_feeds\_meta()** was added in Gravity Forms 2.9.2 and can be used to update the value of the processed\_feeds meta for the specified entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_processed\_feeds\_meta** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_processed_feeds_meta-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#update_processed_feeds_meta-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_processed_feeds_meta(``$entry_id``,``$addon_slug``,``$value``,``$form_id``= null ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [integer](https://docs.gravityforms.com/integer) | The ID of the entry the meta is to be updated for. |
| **$addon\_slug** | [string](https://docs.gravityforms.com/string) | An add-on slug when updating the meta for a specific add-on, or an empty string to update the meta for all add-ons. |
| **$value** | [integer](https://docs.gravityforms.com/integer) \| [array](https://docs.gravityforms.com/array) \| [null](https://docs.gravityforms.com/null) | The ID of a processed feed for a specific add-on, an array of processed feed IDs for a specific add-on, an array using add-on slugs as the keys to arrays of processed feed IDs, or `null` to clear the meta. |
| **$form\_id** | [null](https://docs.gravityforms.com/null) \| [integer](https://docs.gravityforms.com/integer) | The form ID of the entry (optional, saves extra query if passed when creating the metadata). |

### Returns

`GFAPI::update_processed_feeds_meta()` does not return a result.

### Usage Examples

The following example would delete the feed IDs of the specified add-on from the process\_feeds meta of the specified add-on.

|     |
| --- |
| `GFAPI::update_processed_feeds_meta(``$entry_id``,``'gravityformswebhooks'``, null );` |

## update\_entry\_feed\_status

**GFAPI::update\_entry\_feed\_status()** was added in Gravity Forms version 2.9.4 and updates or deletes the feed processing status metadata (feed\_{$feed\_id}\_status) for a specific entry.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **update\_entry\_feed\_status** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_feeds-returns) |

### Source Code

|     |
| --- |
| `public``static``function``update_entry_feed_status(``$entry_id``,``$feed_id``,``$status``,``$form_id``= null ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [int](https://docs.gravityforms.com/int) | The ID of the entry. |
| **$feed\_id** | [int](https://docs.gravityforms.com/int) | The ID of the feed. |
| **$status** | [array](https://docs.gravityforms.com/array) \| [null](https://docs.gravityforms.com/null) | The status array to append to the metadata, or `null` to delete the metadata. The array includes:<br>**$timestamp** [int](https://docs.gravityforms.com/int) – The timestamp of the feed processing attempt. <br>**$status** [string](https://docs.gravityforms.com/string) – The status: `success` or `failed`. <br>**$code** [int](https://docs.gravityforms.com/int) \| [string](https://docs.gravityforms.com/string) – The error code. <br>**$message** [string](https://docs.gravityforms.com/string) – The error message. <br>**$data** [array](https://docs.gravityforms.com/array) – Additional data related to the error. |
| **$form\_id** | [null](https://docs.gravityforms.com/null) \| [int](https://docs.gravityforms.com/int) | The form ID of the entry. This avoids extra queries when creating metadata. |

### Returns

- **void**

### Usage Examples

Logs a failed feed processing attempt with details or deletes the status metadata for an entry.

|     |
| --- |
| `$entry_id``= 5;`<br>`$feed_id``= 1;`<br>`$status``=``array``(`<br>```'timestamp'``=> time(),`<br>```'status'``=>``'failed'``,`<br>```'code'``=> 403,`<br>```'message'``=>``'Invalid API key provided.'``,`<br>```'data'``=>``array``(``'retry_after'``=> 3600 ),`<br>`);`<br>`$form_id``= 2;`<br>`GFAPI::update_entry_feed_status(``$entry_id``,``$feed_id``,``$status``,``$form_id``);`<br>`// To delete the status metadata:`<br>`GFAPI::update_entry_feed_status(``$entry_id``,``$feed_id``, null );` |

## get\_entry\_feed\_status

**GFAPI::get\_entry\_feed\_status()** was added in Gravity Forms version 2.9.4 and retrieves the feed processing status for a specified entry from the feed\_{$feed\_id}\_status metadata.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_entry\_feed\_status** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_entry_feed_status(``$entry_id``,``$feed_id``,``$return_latest``= false,``$return_latest_details``= false ) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$entry\_id** | [int](https://docs.gravityforms.com/int) | The ID of the entry. |
| **$feed\_id** | [int](https://docs.gravityforms.com/int) | The ID of the feed. |
| **$return\_latest** | [bool](https://docs.gravityforms.com/bool) | If `true`, returns only the latest processing attempt. Default is `false` (returns all attempts). |
| **$return\_latest\_details** | [bool](https://docs.gravityforms.com/bool) | If `true` and `$return_latest` is true, returns the full details array of the latest attempt instead of just the status string. Default is `false`. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **—** | [array](https://docs.gravityforms.com/array) \| [string](https://docs.gravityforms.com/string) | An array of all processing attempts, the latest attempt’s status string, or the latest attempt’s full details array, depending on the parameters. |

### Usage Examples

Retrieves all feed processing attempts, the latest status, or full details of the latest attempt for an entry.

|     |
| --- |
| `$entry_id``= 5;`<br>`$feed_id``= 1;`<br>`// Get all processing attempts`<br>`$all_statuses``= GFAPI::get_entry_feed_status(``$entry_id``,``$feed_id``);`<br>`print_r(``$all_statuses``);`<br>`// Get the latest status (e.g., "success" or "failed")`<br>`$latest_status``= GFAPI::get_entry_feed_status(``$entry_id``,``$feed_id``, true );`<br>`echo``$latest_status``;`<br>`// Get the full details of the latest attempt`<br>`$latest_details``= GFAPI::get_entry_feed_status(``$entry_id``,``$feed_id``, true, true );`<br>`print_r(``$latest_details``);` |

## get\_entry\_feed\_status\_key

**GFAPI::get\_entry\_feed\_status\_key()** was added in Gravity Forms version 2.9.4 and returns the metadata key used to save or retrieve the feed status for a given feed.

### Method Overview

|     |     |
| --- | --- |
| Class | **GFAPI** |
| Function | **get\_entry\_feed\_status\_key** |
| Parameters | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status_key-parameters) |
| Returns | [see\_below](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/#get_entry_feed_status_key-returns) |

### Source Code

|     |
| --- |
| `public``static``function``get_entry_feed_status_key(``$feed_id``) {}` |

### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| **$feed\_id** | [int](https://docs.gravityforms.com/int) | The ID of the feed. |

### Returns

| Return | Type | Description |
| --- | --- | --- |
| **—** | [string](https://docs.gravityforms.com/string) | The metadata key (e.g., `feed_1_status`). |

### Usage Examples

Generates the metadata key to access a feed’s status directly from an entry’s metadata.

|     |
| --- |
| `$feed_id``= 1;`<br>`$key``= GFAPI::get_entry_feed_status_key(``$feed_id``);`<br>`echo``$key``;``// Outputs: "feed_1_status"`<br>`// Use the key with other function`<br>`$entry_id``= 5;`<br>`$status``= gform_get_meta(``$entry_id``,``$key``);` |

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/managing-add-on-feeds-with-the-gfapi/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)