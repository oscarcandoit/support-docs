---
source: https://marketplace.gohighlevel.com/docs/webhook/PriceDelete/index.html
category: webhooks
scraped: 2025-10-11T23:13:46.940Z
title: Association Updated | HighLevel API
---

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#__docusaurus_skipToContent_fallback)

On this page

## Overview [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#overview "Direct link to Overview")

This webhook response is triggered when a new association is updated between objects, such as linking contacts to custom objects. Currently, only contact-to-contact , contact to custom object and custom object to custom object associations are supported. There are plans to expand support for additional associations in the future.

For example, in a real estate system, a company may want to associate potential buyers with specific properties. In this case:

- The **first object** (buyer) would be a custom object representing the interested person.
- The **second object** (property) would be a custom object representing the real estate listing.
- The **association label** might be "Interested Buyer," indicating that the buyer has shown interest in the property.
- The system could store multiple buyers per property (many-to-many relationship), allowing for flexible tracking of interest.

## Schema [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#schema "Direct link to Schema")

The webhook response follows the JSON schema below:

```codeBlockLines_e6Vv
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "associationType": {
      "type": "string"
    },
    "firstObjectKey": {
      "type": "string"
    },
    "firstObjectLabel": {
      "type": "string"
    },
    "firstObjectToSecondObjectCardinality": {
      "type": "string"
    },
    "secondObjectKey": {
      "type": "string"
    },
    "secondObjectLabel": {
      "type": "string"
    },
    "secondObjectToFirstObjectCardinality": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  }
}

```

## Field Descriptions [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#field-descriptions "Direct link to Field Descriptions")

### `id` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#id "Direct link to id")

- Type: `string`
- Unique identifier for the association.

### `associationType` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#associationtype "Direct link to associationtype")

- Type: `string`
- Specifies the type of association (e.g., `USER_DEFINED` or `SYSTEM_DEFINED`).

### `firstObjectKey` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#firstobjectkey "Direct link to firstobjectkey")

- Type: `string`
- Key representing the first object in the association.

### `firstObjectLabel` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#firstobjectlabel "Direct link to firstobjectlabel")

- Type: `string`
- Human-readable label for the first object.

### `firstObjectToSecondObjectCardinality` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#firstobjecttosecondobjectcardinality "Direct link to firstobjecttosecondobjectcardinality")

- Type: `string`
- Indicates the relationship between the first and second object (e.g., `MANY_TO_MANY`).

### `secondObjectKey` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#secondobjectkey "Direct link to secondobjectkey")

- Type: `string`
- Key representing the second object in the association.

### `secondObjectLabel` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#secondobjectlabel "Direct link to secondobjectlabel")

- Type: `string`
- Human-readable label for the second object.

### `secondObjectToFirstObjectCardinality` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#secondobjecttofirstobjectcardinality "Direct link to secondobjecttofirstobjectcardinality")

- Type: `string`
- Defines the reverse relationship between objects.

### `key` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#key "Direct link to key")

- Type: `string`
- Unique key assigned to the association.

### `locationId` [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#locationid "Direct link to locationid")

- Type: `string`
- Identifies the location associated with the created association.

## Example Response [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#example-response "Direct link to Example Response")

```codeBlockLines_e6Vv
{
  "id": "67ade73d1119d2ac7ad0c475",
  "associationType": "USER_DEFINED",
  "firstObjectKey": "custom_objects.real_estate_buyer",
  "firstObjectLabel": "Interested Buyer",
  "firstObjectToSecondObjectCardinality": "MANY_TO_MANY",
  "secondObjectKey": "custom_objects.property",
  "secondObjectLabel": "Property",
  "secondObjectToFirstObjectCardinality": "MANY_TO_MANY",
  "key": "buyer_property_interest",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"
}

```

## Additional Notes [​](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html\#additional-notes "Direct link to Additional Notes")

- Ensure that your webhook listener is capable of processing `POST` requests.
- The `firstObjectKey` and `secondObjectKey` help define relationships between entities.
- The `traceId` is useful for debugging and logging purposes.

## Share your feedback

★★★★★

- [Overview](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#overview)
- [Schema](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#schema)
- [Field Descriptions](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#field-descriptions)
  - [`id`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#id)
  - [`associationType`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#associationtype)
  - [`firstObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#firstobjectkey)
  - [`firstObjectLabel`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#firstobjectlabel)
  - [`firstObjectToSecondObjectCardinality`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#firstobjecttosecondobjectcardinality)
  - [`secondObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#secondobjectkey)
  - [`secondObjectLabel`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#secondobjectlabel)
  - [`secondObjectToFirstObjectCardinality`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#secondobjecttofirstobjectcardinality)
  - [`key`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#key)
  - [`locationId`](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#locationid)
- [Example Response](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#example-response)
- [Additional Notes](https://marketplace.gohighlevel.com/docs/webhook/AssociationUpdate/index.html#additional-notes)