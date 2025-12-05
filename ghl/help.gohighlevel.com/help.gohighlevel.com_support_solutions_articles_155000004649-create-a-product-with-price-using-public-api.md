---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api"
title: " Create a Product with Price using Public API : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [E-commerce store](https://help.gohighlevel.com/support/solutions/155000000059)
4. [E-Commerce Store](https://help.gohighlevel.com/support/solutions/folders/155000000182)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [E-commerce store](https://help.gohighlevel.com/support/solutions/155000000059)
   - [E-Commerce Store](https://help.gohighlevel.com/support/solutions/folders/155000000182)
6. Create a Product with Price using Public API

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Create a Product with Price using Public API

Modified on: Thu, 28 Aug, 2025 at 6:37 AM

**TABLE OF CONTENTS**

1. [Introduction](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Introduction)
2. [Products](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Products)
1. [Types of Products](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Types-of-Products)
      1. [Products with Price](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Products-with-Price)
      2. [Products with Variants](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Products-with-Variants)
3. [Create Product using Public API](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Create-Product-using-Public-API)
1. [Authorization](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Authorization)
2. [Creation of Product](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Creation-of-Product)
      1. [Create Product](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Create-Product)
      2. [Example Payload for Product with Price:](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Example-Payload-for-Product-with-Price%3A)
      3. [Example Payload for Product with Variants:](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Example-Payload-for-Product-with-Variants%3A)
      4. [Create Price for a Product](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Create-Price-for-a-Product)
      5. [Example Payload for Price for Product With Variants](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Example-Payload-for-Price-for-Product-With-Variants)
3. [Add Image to a variant through Public API](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Add-Image-to-a-variant-through-Public-API)
      1. [Example Payload for Product Media Update with PriceIds](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Example-Payload-for-Product-Media-Update-with-PriceIds)
4. [Conclusion](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api#Conclusion)

## Introduction

This article mainly aims to guide the users on how to create a product using the public API provided by Highlevel. It also delves down for the cases and several types which the users can take the advantage of while creating a product

## Products

Products are the one of the main entities in Highlevel using which, users can sell the products that they want to sell through many forms of selling channels, using E-commerce Stores, Invoices, Estimates, and more

### Types of Products

In Highlevel, products are majorly of two type products:

- Products with price
- Products with Variants

#### Products with Price

These types of products are simple products which don't have any variants to them. Any product which doesn't _require variants (or) has only 1 variant classification_ can be created in this format. Best example would be Poster with possible sizes

#### Products with Variants

This type of products are the products which have _multiple variations_ for a single product. Best example would be a T-shirt where there might be multiple colors and sizes

## Create Product using Public API

### Authorization

In order to perform CRUD (Create, Read, Update and Delete) entities related to Highlevel using Public API, we need access token. The authorization process is explained in the below link:

[https://marketplace.gohighlevel.com/docs/Authorization/authorization\_doc](https://marketplace.gohighlevel.com/docs/Authorization/authorization_doc)

### Creation of Product

For creating a product we are going to utilize the following Public APIs

- Create a Product - [https://marketplace.gohighlevel.com/docs/ghl/products/create-product](https://marketplace.gohighlevel.com/docs/ghl/products/create-product)
- Create a Price for Product - [https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product](https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product)

It is advised to follow the order of the content in order to create a Product

#### **Create Product**

First we need to create a product using the [Create a Product API](https://marketplace.gohighlevel.com/docs/ghl/products/create-product) . Let us see the basic properties required for Creation of Product

- name - name of the product
- locationId - for which sub-account this product is created
- description - brief description for the product which will be useful in the sales channels to exhibit the product
- productType - let us keep it as `DIGITAL`
- image - Featured image which will be displayed by default to the end customer
- availableInStore - whether a product should be made available for E-commerce Stores or not
- medias - array
  - id - unique identifier for media
  - title - title for the media
  - url - source url of the media
  - type - currently only image is supported
  - isFeatured - set to `true` if needs to be displayed to the end customer
- variants - only required if you are trying to create a variant product
  - id - unique ID for variant
  - name - Name of the variant
  - options - array
    - id - unique ID for variant option **(will be required for creation of Price)**
    - name - name of the option

#### **Example Payload for Product with Price:**

```
{
  "name": "High Speed Memory Drive",
  "description": "A high speed memory drive with latest safety features and breath taking design",
  "locationId": "<sub-account_ID>",
  "availableInStore": true,
  "productType": "PHYSICAL",
  "image": "https://via.placeholder.com/150",
  "medias": [\
    {\
      "id": "550e8400-e29b-41d4-a716-446655440000",\
      "title": "High Speed Memory Drive",\
      "url": "https://via.placeholder.com/150",\
      "type": "image",\
      "isFeatured": true\
    }\
  ]
}
```

#### Example Payload for Product with Variants:

```
{
  "name": "T-shirt",
  "description": "Latest t-shirt with latest design and quality",
  "locationId": "<sub_account_id>",
  "availableInStore": true,
  "productType": "PHYSICAL",
  "image": "https://via.placeholder.com/150",
  "medias": [\
    {\
      "id": "550e8400-e29b-41d4-a716-446655440000",\
      "title": "T-shirt",\
      "url": "https://via.placeholder.com/150",\
      "type": "image",\
      "isFeatured": true\
    }\
  ],
  "variants": [\
    {\
      "id": "550e8400-e29b-41d4-a716-446655440000",\
      "name": "Color",\
      "options": [\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440002",\
          "name": "Red"\
        },\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440001",\
          "name": "Blue"\
        },\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440003",\
          "name": "Green"\
        }\
      ]\
    },\
    {\
      "id": "550e8400-e29b-41d4-a716-446655440111",\
      "name": "Size",\
      "options": [\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440112",\
          "name": "Small"\
        },\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440113",\
          "name": "Medium"\
        },\
        {\
          "id": "550e8400-e29b-41d4-a716-446655440114",\
          "name": "Large"\
        }\
      ]\
    }\
  ]
}
```

> Note: For Variant Product, keep in track of the option Ids as they will be playing an important role while creating price

Upon creating a product, we will get a response which will have the property `_id` which is the created productId. That will be used to create price for a product

#### **Create Price for a Product**

We will be using the [Create Price for a Product API](https://marketplace.gohighlevel.com/docs/ghl/products/create-price-for-product) to create a price for product. Here are the basic properties required for creating a price for a product

- product - Id of the product for which it is created
- locationId - sub-account Id
- name - Name of the Price
- type - As we support recurring products as well, the available values are `one_time` and `recurring`
- currency - Currency of the Price
- amount - Amount relevant to the currency
- description - Description for the Price
- variantOptionIds - required for a product with variants
  - For an example if the variant combination is `Red/Small` , then variantOptionIds values should be as follows -

```
  ["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"]
```

- where `550e8400-e29b-41d4-a716-446655440002` is for `Red`  and `550e8400-e29b-41d4-a716-446655440112`  is for `Small`
- For Product with Variants, variantOptionIds are required in order to render product correctly, absence of this property will render the variant combinations incorrectly
- trackInventory - If the inventory needs to be tracked, then set to `true`
- availableQuantity - Available Quantity, applicable if trackInventory is `true`
- allowOutOfStockPurchases - Allow purchases of the product even if it is out of stock, only applicable if trackInventory is `true`
- sku - SKU of the price (or) variant
- isDigitalProduct - `true`  if it is a Digital Product
- shippingOptions - shipping properties for `PHYSICAL`product ( will be useful for shipping integrations )
  - weight - weight options
    - value  - value of the weight
    - unit - metric unit. Supported values - `kg, g, lb, oz`
  - dimensions - dimensions of the Physical Product
    - height - number
    - width - number
    - length - number
    - unit - unit supported for dimensions - Supported values - `cm, in, m`

Example Payload for Simple Price (Without Variants):

```
    {
  "product": "66b6021be68f7a98102ba272",
  "locationId": "<sub_account_id>",
  "name": "256 GB",
  "type": "one_time",
  "currency": "USD",
  "amount": 100,
  "description": "256 GB of storage",
  "sku": "PS-256GB",
  "isDigitalProduct": false,
  "shippingOptions": {
    "weight": {
      "value": 100,
      "unit": "g"
    },
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    }
  }
}
```

#### Example Payload for Price for Product With Variants

```
{
  "product": "66b6021be68f7a98102ba272",
  "locationId": "<sub_account_id>",
  "name": "Red / Small",
  "type": "one_time",
  "currency": "USD",
  "amount": 100,
  "description": "Red / Small",
  "sku": "PS-RED-SMALL",
  "isDigitalProduct": false,
  "variantOptionIds": ["550e8400-e29b-41d4-a716-446655440002","550e8400-e29b-41d4-a716-446655440112"],
  "shippingOptions": {
    "weight": {
      "value": 100,
      "unit": "g"
    },
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    }
  }
}
```

> Note: Variant Option Ids are required for correct rendering of the product variations

### **Add Image to a variant through Public API**

This feature is available only for variant type of products and not price type of products. After creating Price for a product, in the response we will get the Internal Id of the price. Using that we will now update the images for specific variants. Using the received priceIds, we will update the product again with the following payload.

#### **Example Payload for Product Media Update with PriceIds**

In the product payload, there will be an array for medias, each and every media array is provided with a property called "priceIds" which in turn is an array, By assigning the respective priceIds, the media will get mapped to variants automatically.

```
{
  "name": "T-shirt",
  "description": "Latest t-shirt with latest design and quality",
  "locationId": "<sub_account_id>",
  "availableInStore": true,
  "productType": "PHYSICAL",
  "image": "https://via.placeholder.com/150",
  "medias": [\
    {\
      "id": "550e8400-e29b-41d4-a716-446655440000",\
      "title": "T-shirt",\
      "url": "https://via.placeholder.com/150",\
      "type": "image",\
      "priceIds": ["<created_price_Id>"],\
      "isFeatured": true\
    }\
  ],
  "variants": [\
   {...existing variants data}\
  ]
}
```

> As of now, we support only one image mapped to one priceId, mapping multiple priceIds to a single image will cause problems in rending the products

## Conclusion

Using the above APIs we were able to create a basic ONE TIME Physical product with simple price and also with variants. The flexibility doesn't stop here, as Highlevel supports recurring Products as well, you can refer to the Price API documentation in detail and make use of the properties specifically provided for recurring products

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [How to Set Up an E-Commerce Online Store (Websites)](https://help.gohighlevel.com/support/solutions/articles/155000001157-how-to-set-up-an-e-commerce-online-store-websites-)
- [Manual Payment Method in E-commerce Stores & Order Forms](https://help.gohighlevel.com/support/solutions/articles/155000002897-manual-payment-method-in-e-commerce-stores-order-forms)
- [Shipping and Delivery rates for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000002842-shipping-and-delivery-rates-for-ecommerce-stores)
- [Shipping: How to Connect a Shippo Integration?](https://help.gohighlevel.com/support/solutions/articles/155000003109-shipping-how-to-connect-a-shippo-integration-)
- [How to use Printful Integration with your Ecommerce Store?](https://help.gohighlevel.com/support/solutions/articles/155000002442-how-to-use-printful-integration-with-your-ecommerce-store-)
- [Recover Lost Sales with Automatic Abandoned Checkout Emails](https://help.gohighlevel.com/support/solutions/articles/155000001718-recover-lost-sales-with-automatic-abandoned-checkout-emails)

## Related Articles

- [Ecommerce: Dropshipping Integration](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration)
- [Printify Integration for Ecommerce Stores](https://help.gohighlevel.com/support/solutions/articles/155000006595-printify-integration-for-ecommerce-stores)
- [Bulk Actions on the Product Page](https://help.gohighlevel.com/support/solutions/articles/155000005209-bulk-actions-on-the-product-page)
- [How to build a custom payments integration on the platform](https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform)
- [Import Products / Price From Stripe](https://help.gohighlevel.com/support/solutions/articles/48001202184-import-products-price-from-stripe)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004649-create-a-product-with-price-using-public-api/hit)