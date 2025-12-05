---
url: "https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/"
title: "Creating a Feed for Freshbooks Add-on"
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

# Creating a Feed for the FreshBooks (Classic) Add-On

- [Summary](https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/#h-summary)
- [Create a Feed](https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/#h-create-a-feed)
- [Feed Settings Screen](https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/#h-feed-settings-screen)
- [Setup FreshBooks Invoice or Estimate](https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/#h-setup-freshbooks-invoice-or-estimate)

**Deprecation notice:** As of mid-2022, the FreshBooks (Classic) product and API have been discontinued by FreshBooks. This add-on is no longer available for download.

If you would like Gravity Forms to consider supporting other FreshBooks products, you can register your interest on our [Product Feature Roadmap](https://www.gravityforms.com/gravity-forms-roadmap/) page.

## Summary

Before the FreshBooks Add-On can be used with Gravity Forms, you will first need to create [a feed](https://docs.gravityforms.com/what-is-a-feed/). A feed simply allows form submission data to be sent to another source. In this instance, form data being sent to FreshBooks.

## Create a Feed

To create a feed for FreshBooks using the FreshBooks Add-On for Gravity Forms, do the following from your WordPress Admin Dashboard.

1. Click on **Forms** in the left side menu.
2. Select the form that you want to use with FreshBooks.
3. Once within your desired form, hover over **Settings** and click on **FreshBooks**.
4. Click **Add New** to create a new feed. You will be presented with the FreshBooks feed settings screen.

### Feed Settings Screen

The following fields are available within the settings screen. Refer to the settings screenshot below.

1. A feed **Name** is required. It is only used for identification and will not be shown anywhere other than your feed listing.
2. **Client Settings**: Map the fields on your form with fields available within FreshBooks by selecting your form fields in the dropdowns to the right of each item.
3. In the **Notes** field you can define any custom notes you would like to be placed into FreshBooks. This field also supports merge tags to dynamically generate content. To view the available merge tags, click the icon to the right of the field.
4. **Invoice/Estimate Settings**: Create an invoice or estimate within FreshBooks when the field is submitted. For more information on these, take a look at our [Invoice/Estimate Settings in Freshbook Add-On Feeds](https://docs.gravityforms.com/invoice-settings-freshbook-add-feeds/) article.
5. **Conditional Logic**: If unchecked, every successful form submission will be sent to FreshBooks. If you wish to set specific conditions for sending form data to FreshBooks, then check the “Enable Condition” box and fill out your required criteria.
6. Click the **Update Settings** button to save your options.

![FreshBooks Feed Settings](https://docs.gravityforms.com/wp-content/uploads/2015/05/freshbooks-feed-6.png)

#### Setup FreshBooks Invoice or Estimate

One of the options available when setting up a FreshBooks Feed is the ability to create an invoice or estimate when a form is submitted. This is an optional step that will allow you to jumpstart the invoice or estimate process by creating one when a form is submitted. This will allow you to then go into FreshBooks and complete the invoice or estimate, saving you time in the process.

To create an Invoice or Estimate follow these steps:

1. Select “Invoice” or “Estimate” from the “Also Create” option when setting up or editing a FreshBooks Feed.
2. Map the PO Number field to an available Form Field. This is optional.
3. Set a default discount percentage to apply to any invoice or estimate that is created with this feed. This is optional.
4. Setup your line items by choosing fixed costs and quantities, or opt to pull costs and quantities from available form fields. You an add additional line items by clicking the plus icon. This is optional.
5. Enter default invoice or estimate notes.
6. Enter the default terms for the invoice or estimate.
7. Now that you have setup a FreshBooks feed, when the form you selected is submitted, it will automatically send the data you have selected to FreshBooks and automatically create (or update) a client, invoice, or estimate.

- Name


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 13, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/creating-a-feed-for-the-freshbooks-add-on/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)