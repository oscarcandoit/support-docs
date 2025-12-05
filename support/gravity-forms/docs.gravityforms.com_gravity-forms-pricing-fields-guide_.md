---
url: "https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/"
title: "Gravity Forms: Pricing Fields Guide - Gravity Forms Documentation"
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
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Gravity Forms: Pricing Fields Guide

- [Overview](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-overview)
- [Core Pricing Fields](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-core-pricing-fields)
- [Interactions Between Pricing Fields](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-interactions-between-pricing-fields)
- [Example](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-example)
- [Common Use Cases](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-common-use-cases)
- [Resources](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/#h-resources)

## Overview

[Pricing fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/) in Gravity Forms provide a solution for incorporating pricing and calculations into your forms, enabling you to create order forms, quote generators, or donation systems without requiring a dedicated eCommerce platform.

This guide explains the core [Pricing fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/), including their purpose and interactions It also covers common use cases, limitations, and links to related documentation and third-party solutions, **serving as a complete reference for leveraging pricing fields effectively.**

## Core Pricing Fields

The following table summarizes the core pricing fields, purpose, key features, and settings.

| **Field** | **Purpose** | **Key Features** |
| --- | --- | --- |
| **Product** | Defines an item or service with a fixed or user-specified price. | It supports Number, Drop Down, or Hidden inputs and calculates line-item totals. |
| **Option** | Adds selectable add-ons or modifiers to a Product, adjusting its price. | Links to a Product |
| **Quantity** | Specifies the number of Product units, multiplying the adjusted price. | It supports single Products, Drop-downs, radio buttons, user-defined prices, and Calculations. |
| **Shipping** | Adds a shipping cost to the form’s total, fixed or based on user selection. | It supports single method, drop-down, or radio buttons; it links to the form’s total. |
| **Total** | Displays the sum of all pricing elements (Products, Options, Quantities, Shipping). | It supports single method, drop down, or radio buttons; it links to the form’s total. |

## Interactions Between Pricing Fields

**Note:** The Product field is the only _required_ pricing field because it sets the base price for an item or service, and is the foundation for all pricing calculations. The _Option_, _Quantity_, _Shipping_, and _Total_ fields are all optional.

The pricing fields in Gravity Forms work together to create a _structured pricing system within a form_. The **Product** field establishes the base item or service and defines its initial price. The **Option** field adjusts this price based on user selections, such as add-ons or discounts, which modify the **Product**’ **s** base cost.

The **Quantity** field multiplies the adjusted **Product** price (base price plus options) by the selected quantity to calculate the line-item total. The **Shipping** field adds a fixed or user-selected shipping cost to the calculation.

The **Total** field sums all: any additional components, such as taxes or discounts (via add-ons), to generate the final amount displayed in the form.

### Example

| **Field** | Details | Calculation |
| --- | --- | --- |
| **Product** | My Super Awesome Product ($10 base price) | $10 |
| **Option** | Personalized Engraving (+$5) | $10 + $5 = $15 |
| **Quantity** | 1 | $15 × 1 = $15 |
| **Shipping** | Standard Shipping ($5) | $5 |
| **Total** | Subtotal + Shipping | $15 + $5 = $20 |

**Product field with a base price of $10 and Option field.**

[![](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-19-1024x572.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-19.png)

**Shipping field and Total field**.

[![](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-20-1024x517.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-20.png)

## Common Use Cases

- **Bulk Order Forms:** Handle large orders with Quantity fields and clear subtotal displays.
- **Donation Forms:** Use a User-Defined Price for flexible donation amounts, with a Total for confirmation.
- **Event Registrations:** Offer tiered pricing via drop-down products and quantities for group tickets.
- **Membership Forms:** Offer tiered membership levels with discounts via negative option pricing.
- **Quote Generators:** Calculate and email quotes for services or products based on user inputs.
- **Service Requests:** Compute pricing for custom services (e.g., repairs) using calculations.
- **Surveys with Pricing:** Use conditional logic to display costs after the survey based on responses.

These use cases highlight the versatility of pricing fields for non-eCommerce applications.

## Resources

- [Adding Tax](https://docs.gravityforms.com/gravity-forms-pricing-adding-tax/)
- [Create Conditional User Defined Products](https://docs.gravityforms.com/create-conditional-user-defined-products/)
- [Rules for Calculations](https://docs.gravityforms.com/rules-for-calculations/)
- [Using Calculations](https://docs.gravityforms.com/using-calculations/)
- [{pricing\_fields} Merge Tag](https://docs.gravityforms.com/pricing_fields-merge-tag/)

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: October 8, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/gravity-forms-pricing-fields-guide/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)