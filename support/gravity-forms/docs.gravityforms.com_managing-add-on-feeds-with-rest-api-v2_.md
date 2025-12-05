---
url: "https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/"
title: "Managing Add-On Feeds with REST API v2 - Gravity Forms Documentation"
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
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)    - [Endpoints](https://docs.gravityforms.com/category/developers/rest-api/rest-api-endpoints/)      - [Submitting Forms with REST API v2](https://docs.gravityforms.com/submitting-forms-with-rest-api-v2/ "Submitting Forms with REST API v2")
      - [Searching and Getting Entries with the REST API v2](https://docs.gravityforms.com/searching-and-getting-entries-with-the-rest-api-v2/ "Searching and Getting Entries with the REST API v2")
      - [Creating Entries with the REST API v2](https://docs.gravityforms.com/creating-entries-with-the-rest-api-v2/ "Creating Entries with the REST API v2")
      - [Updating Entries with the REST API v2](https://docs.gravityforms.com/updating-entries-with-the-rest-api-v2/ "Updating Entries with the REST API v2")
      - [Deleting Entries with the REST API v2](https://docs.gravityforms.com/deleting-entries-with-the-rest-api-v2/ "Deleting Entries with the REST API v2")
      - [Getting Forms with the REST API v2](https://docs.gravityforms.com/getting-forms-with-the-rest-api-v2/ "Getting Forms with the REST API v2")
      - [Creating Forms with the REST API v2](https://docs.gravityforms.com/creating-forms-with-the-rest-api-v2/ "Creating Forms with the REST API v2")
      - [Updating Forms with the REST API v2](https://docs.gravityforms.com/updating-forms-with-the-rest-api-v2/ "Updating Forms with the REST API v2")
      - [Validating Forms with REST API v2](https://docs.gravityforms.com/validating-forms-with-rest-api-v2/ "Validating Forms with REST API v2")
      - [Getting the Form Field Filters with REST API v2](https://docs.gravityforms.com/getting-the-form-field-filters-with-rest-api-v2/ "Getting the Form Field Filters with REST API v2")
      - [Deleting Forms with the REST API v2](https://docs.gravityforms.com/deleting-forms-with-the-rest-api-v2/ "Deleting Forms with the REST API v2")
      - [Sending Notifications with the REST API v2](https://docs.gravityforms.com/sending-notifications-with-the-rest-api-v2/ "Sending Notifications with the REST API v2")
      - [Getting Results with REST API v2](https://docs.gravityforms.com/getting-results-with-rest-api-v2/ "Getting Results with REST API v2")
      - [Managing Add-On Feeds with REST API v2](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/ "Managing Add-On Feeds with REST API v2")
    - [REST API v2 Basic Authentication](https://docs.gravityforms.com/rest-api-v2-basic-authentication/ "REST API v2 Basic Authentication")
    - [REST API v2 Guide](https://docs.gravityforms.com/rest-api-v2/ "REST API v2 Guide")
    - [REST API v2 Authentication](https://docs.gravityforms.com/rest-api-v2-authentication/ "REST API v2 Authentication")
    - [Gravity Forms REST API Settings](https://docs.gravityforms.com/gravity-forms-rest-api-settings/ "Gravity Forms REST API Settings")
    - [REST API v1 Guide](https://docs.gravityforms.com/web-api/ "REST API v1 Guide")
    - [v1 Examples](https://docs.gravityforms.com/web-api-examples/ "v1 Examples")
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Managing Add-On Feeds with REST API v2

- [Getting Feeds](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-getting-feeds)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example 1](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-1)
- [Example 2](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-2)
- [Example 3](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-3)
- [Getting a Specific Feed](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-getting-a-specific-feed)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example 1](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-1)
- [Getting Feeds for a Specific Form](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-getting-feeds-for-a-specific-form)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example 1](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-1)
- [Example 2](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-2)
- [Example 3](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-3)
- [Adding a Feed](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-adding-a-feed)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example Request](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-request)
- [Example Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-response)
- [Adding a Feed for a Specific Form](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-adding-a-feed-for-a-specific-form)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example Request](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-request)
- [Example Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-response)
- [Updating a Feed](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-updating-a-feed)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example Request](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-request)
- [Example Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-response)
- [Partially Updating a Feed](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-partially-updating-a-feed)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example Request](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-request)
- [Example Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-response)
- [Updating Specific Feed Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-updating-specific-feed-properties)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example Request](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-request)
- [Example Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-response)
- [Deleting a Specific Feed](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-deleting-a-specific-feed)
- [Method](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-method)
- [Path](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-path)
- [Required Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-required-properties)
- [Optional Properties](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-optional-properties)
- [Response](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-response)
- [Usage Examples](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-usage-examples)
- [Example 1](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/#h-example-1)

## Getting Feeds

### Method

`GET`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds` |

### Required Properties

There are no required properties.

### Optional Properties

- **include** – The ID of the Feed or an array of Feed IDs.
- **addon** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

### Response

The JSON response will contain an array of [Feed Object](https://docs.gravityforms.com/feed-object) s.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61 | `[`<br>```{`<br>```"id"``:``"1"``,`<br>```"form_id"``:``"0"``,`<br>```"addon_slug"``:``"gravityformscoupons"``,`<br>```"meta"``: {`<br>```"gravityForm"``:``"0"``,`<br>```"couponName"``:``"Military Discount"``,`<br>```"couponCode"``:``"MD10"``,`<br>```"couponAmountType"``:``"percentage"``,`<br>```"couponAmount"``: 10,`<br>```"startDate"``:``""``,`<br>```"endDate"``:``""``,`<br>```"usageLimit"``:``""``,`<br>```"isStackable"``:``"0"``,`<br>```"usageCount"``: 5`<br>```}`<br>```},`<br>```{`<br>```"id"``:``"6"``,`<br>```"form_id"``:``"8"``,`<br>```"addon_slug"``:``"gravityformswebhooks"``,`<br>```"meta"``: {`<br>```"feedName"``:``"My Test"``,`<br>```"requestURL"``:``"www.rocketgenius.com"``,`<br>```"requestMethod"``:``"POST"``,`<br>```"requestFormat"``:``"form"``,`<br>```"requestHeaders"``: [`<br>```{`<br>```"key"``:``"gf_custom"``,`<br>```"value"``:``"id"``,`<br>```"custom_key"``:``"MyCustomKey"``,`<br>```"custom_value"``:``""`<br>```}`<br>```],`<br>```"requestBodyType"``:``"all_fields"``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>```},`<br>```{`<br>```"id"``:``"34"``,`<br>```"form_id"``:``"190"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation 10"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>```}`<br>`]` |

### Usage Examples

#### Example 1

This example shows how you can get all active feeds for all forms.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds` |

#### Example 2

This example shows how you can get specific feeds.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds?include[0]=1&include[1]=32` |

#### Example 3

This example shows how you can get all feeds for a specific add-on.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds?addon=gravityformsmailchimp` |

## Getting a Specific Feed

### Method

`GET`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds/[FEED_ID]` |

### Required Properties

There are no required properties.

### Optional Properties

There are no optional properties.

### Response

The JSON response will contain a [Feed Object](https://docs.gravityforms.com/feed-object).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17 | `{`<br>```"id"``:``"1"``,`<br>```"form_id"``:``"0"``,`<br>```"addon_slug"``:``"gravityformscoupons"``,`<br>```"meta"``: {`<br>```"gravityForm"``:``"0"``,`<br>```"couponName"``:``"Military Discount"``,`<br>```"couponCode"``:``"MD10"``,`<br>```"couponAmountType"``:``"percentage"``,`<br>```"couponAmount"``: 10,`<br>```"startDate"``:``""``,`<br>```"endDate"``:``""``,`<br>```"usageLimit"``:``""``,`<br>```"isStackable"``:``"0"``,`<br>```"usageCount"``: 5`<br>```}`<br>`}` |

### Usage Examples

#### Example 1

This example shows how you can get a specific feed, in this case feed ID 1.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds/1` |

## Getting Feeds for a Specific Form

### Method

`GET`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/forms/[FORM_ID]/feeds` |

### Required Properties

There are no required properties.

### Optional Properties

- **include** – The ID of the Feed or an array of Feed IDs.
- **addon** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

### Response

The JSON response will contain an array of [Feed Object](https://docs.gravityforms.com/feed-object) s for the specified form.

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45 | `[`<br>```{`<br>```"id"``:``"30"``,`<br>```"form_id"``:``"190"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"MailChimp Feed 2"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>```},`<br>```{`<br>```"id"``:``"31"``,`<br>```"form_id"``:``"190"``,`<br>```"addon_slug"``:``"gravityformsuserregistration"``,`<br>```"meta"``: {`<br>```"feedName"``:``"User Registration Feed 4"``,`<br>```"feedType"``:``"create"``,`<br>```"username"``:``"1"``,`<br>```"first_name"``:``"1.3"``,`<br>```"last_name"``:``"1.6"``,`<br>```"nickname"``:``""``,`<br>```"displayname"``:``"nickname"``,`<br>```"email"``:``"2"``,`<br>```"password"``:``"generatepass"``,`<br>```"role"``:``"editor"``,`<br>```"userMeta"``:``""``,`<br>```"sendEmail"``:``"1"``,`<br>```"userActivationEnable"``:``"0"``,`<br>```"userActivationValue"``:``"email"``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>```}`<br>`]` |

### Usage Examples

#### Example 1

This example shows how you can get all active feeds for a specific form, in this case form ID 190.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/forms/190/feeds` |

#### Example 2

This example shows how you can get specific active feeds for a specific form, in this case form ID 190.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/forms/190/feeds?include[0]=31&include[1]=32` |

#### Example 3

This example shows how you can get all active Mailchimp feeds for a specific form, in this case form ID 190.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/forms/190/feeds?addon=gravityformsmailchimp` |

## Adding a Feed

### Method

`POST`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds` |

### Required Properties

Sent as JSON in the request body.

- **form\_id** – The ID of the Form the Feed is for.
- **meta** – The feed properties, see the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object).
- **addon\_slug** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

### Optional Properties

There are no optional properties.

### Response

The JSON response will contain a [Feed Object](https://docs.gravityforms.com/feed-object).

### Usage Examples

#### Example Request

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19 | `{`<br>```"form_id"``:``"180"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>`}` |

#### Example Response

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20 | `{`<br>```"form_id"``: 180,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation x"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```},`<br>```"id"``: 39`<br>`}` |

## Adding a Feed for a Specific Form

### Method

`POST`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/forms/[FORM_ID]/feeds` |

### Required Properties

Sent as JSON in the request body.

- **meta** – The feed properties, see the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object).
- **addon\_slug** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

### Optional Properties

There are no optional properties.

### Response

The JSON response will contain a [Feed Object](https://docs.gravityforms.com/feed-object).

### Usage Examples

#### Example Request

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/forms/180/feeds` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18 | `{`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>`}` |

#### Example Response

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20 | `{`<br>```"form_id"``: 180,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```},`<br>```"id"``: 39`<br>`}` |

## Updating a Feed

Note: prior to version 2.4.23.4 only the feed meta was updated, now the entire feed is updated.

### Method

`PUT`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds/[FEED_ID]` |

### Required Properties

Sent as JSON in the request body.

- **form\_id** – The ID of the Form the Feed is for.
- **meta** – The feed properties, see the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object).
- **addon\_slug** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.

### Optional Properties

Sent as JSON in the request body.

- **is\_active** – Boolean indicating if the feed is active or inactive.
- **feed\_order** – Integer indicating the order the feed will be displayed in the feeds list for the form. Also applies to submission time feed processing. Not all add-ons support feed ordering.

### Response

The JSON response will contain a [Feed Object](https://docs.gravityforms.com/feed-object).

### Usage Examples

#### Example Request

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds/39` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19 | `{`<br>```"form_id"``:``"180"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Update"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>`}` |

#### Example Response

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20 | `{`<br>```"form_id"``:``"180"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Update"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``""``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```},`<br>```"id"``:``"39"`<br>`}` |

## Partially Updating a Feed

Support for patching feeds was added in version 2.4.23.4.

### Method

`PATCH`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds/[FEED_ID]` |

### Required Properties

There are no required properties.

### Optional Properties

One or more properties to be updated sent as JSON in the request body.

- **form\_id** – The ID of the Form the Feed is for.
- **meta** – The feed properties, see the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object). Only meta properties included in the request will be updated. Any properties not included in the request will remain configured.
- **addon\_slug** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.
- **is\_active** – Boolean indicating if the feed is active or inactive.
- **feed\_order** – Integer indicating the order the feed will be displayed in the feeds list for the form. Also applies to submission time feed processing. Not all add-ons support feed ordering.

### Response

The JSON response will contain a [Feed Object](https://docs.gravityforms.com/feed-object).

### Usage Examples

#### Example Request

This example shows how to update a feed meta property without having to pass the entire feed.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds/39` |

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5 | `{`<br>```"meta"``: {`<br>```"mappedFields_MMERGE4"``:``"3"`<br>```}`<br>`}` |

#### Example Response

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20 | `{`<br>```"form_id"``:``"180"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Update"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``"3"``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```},`<br>```"id"``:``"39"`<br>`}` |

## Updating Specific Feed Properties

Support for updating specific feed properties feeds was added in version 2.4.23.2.

### Method

`PUT`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds/[FEED_ID]/properties` |

### Required Properties

There are no required properties.

### Optional Properties

One or more properties to be updated sent as JSON in the request body.

- **form\_id** – The ID of the Form the Feed is for.
- **meta** – The feed properties, see the meta property of the [Feed Object](https://docs.gravityforms.com/feed-object). You must pass all the meta properties, any not included will be deleted.
- **addon\_slug** – The slug of the add-on to which the Feeds belong, including the **gravityforms** prefix. See the [Gravity Forms Add-On Slugs](https://docs.gravityforms.com/gravity-forms-add-on-slugs) article for a list of possible slugs.
- **is\_active** – Boolean indicating if the feed is active or inactive.
- **feed\_order** – Integer indicating the order the feed will be displayed in the feeds list for the form. Also applies to submission time feed processing. Not all add-ons support feed ordering.

### Response

The response will contain a message indicating if the operation was successful

### Usage Examples

#### Example Request

This example shows how to update a feed meta property without having to pass the entire feed.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds/39/properties` |

|     |     |
| --- | --- |
| 1<br>2<br>3 | `{`<br>```"is_active"``: false`<br>`}` |

#### Example Response

|     |     |
| --- | --- |
| 1 | `Feed updated successfully` |

## Deleting a Specific Feed

### Method

`DELETE`

### Path

|     |     |
| --- | --- |
| 1 | `/gf/v2/feeds/[FEED_ID]` |

### Required Properties

There are no required properties.

### Optional Properties

There are no optional properties.

### Response

The JSON response will indicate if the feed was deleted and will also contain the deleted [Feed Object](https://docs.gravityforms.com/feed-object).

|     |     |
| --- | --- |
| 1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23 | `{`<br>```"deleted"``: true,`<br>```"previous"``: {`<br>```"id"``:``"39"``,`<br>```"form_id"``:``"180"``,`<br>```"addon_slug"``:``"gravityformsmailchimp"``,`<br>```"meta"``: {`<br>```"feedName"``:``"Test API Feed Creation"``,`<br>```"mailchimpList"``:``"b19814053f"``,`<br>```"mappedFields_EMAIL"``:``"2"``,`<br>```"mappedFields_FNAME"``:``"1.3"``,`<br>```"mappedFields_LNAME"``:``"1.6"``,`<br>```"mappedFields_MMERGE4"``:``"3"``,`<br>```"mappedFields_MMERGE5"``:``""``,`<br>```"mappedFields_MMERGE6"``:``""``,`<br>```"double_optin"``:``"1"``,`<br>```"markAsVIP"``:``"0"``,`<br>```"note"``:``""``,`<br>```"feed_condition_conditional_logic"``:``"0"``,`<br>```"feed_condition_conditional_logic_object"``: []`<br>```}`<br>```}`<br>`}` |

### Usage Examples

#### Example 1

This example shows how you can delete a specific feed, in this case feed ID 1.

|     |     |
| --- | --- |
| 1 | `https:``//example.com/wp-json/gf/v2/feeds/1` |

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 18, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/managing-add-on-feeds-with-rest-api-v2/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)