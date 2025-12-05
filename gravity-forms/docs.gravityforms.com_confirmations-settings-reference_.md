---
url: "https://docs.gravityforms.com/confirmations-settings-reference/"
title: "Confirmations Settings Reference - Gravity Forms Documentation"
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
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)    - [Configuring Confirmations in Gravity Forms](https://docs.gravityforms.com/confirmation-type-page/ "Configuring Confirmations in Gravity Forms")
    - [Confirmations Settings Reference](https://docs.gravityforms.com/confirmations-settings-reference/ "Confirmations Settings Reference")
    - [Confirmations List Page](https://docs.gravityforms.com/confirmations-listing/ "Confirmations List Page")
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Confirmations Settings Reference

- [Overview](https://docs.gravityforms.com/confirmations-settings-reference/#h-overview)
- [Settings Reference](https://docs.gravityforms.com/confirmations-settings-reference/#h-settings-reference)
- [Text Confirmation Type](https://docs.gravityforms.com/confirmations-settings-reference/#h-text-confirmation-type)
- [Page Confirmation Type](https://docs.gravityforms.com/confirmations-settings-reference/#h-page-confirmation-type)
- [Redirect Confirmation Type](https://docs.gravityforms.com/confirmations-settings-reference/#h-redirect-confirmation-type)
- [Merge Tags Support](https://docs.gravityforms.com/confirmations-settings-reference/#h-merge-tags-support)

## Overview

This quick reference guide lists all settings related to Confirmations and briefly describes their purpose.

## Settings Reference

### Text Confirmation Type

[![Configuring Confirmations - Test Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-3-1024x962.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-3.png)

| Setting | Description |
| --- | --- |
| **Confirmation Name** | A unique name to identify the Confirmation. It is not displayed to the user. |
| **Confirmation Type** | Text. A confirmation message will be shown to the user after submitting the form. |
| **Message** | The confirmation message when the confirmation type is set to Text. Supports Visual or HTML editing. |
| **Conditional Logic** | When enabled, Conditional Logic settings will be displayed. Refer to [this](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/) article for more information. Conditional Logic can’t be enabled for the Default Confirmation. |

### Page Confirmation Type

Settings Reference for the Page Confirmation Type.

[![Configuring Confirmations - Page Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-4-1024x702.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-4.png)

| Setting | Description |
| --- | --- |
| **Confirmation Name** | A unique name to identify the Confirmation. It is not displayed to the user. |
| **Confirmation Type** | Page. |
| **Page** | The user will be redirected to the selected page after submitting the form. |
| **Pass Field Data via Query String** | To pass field data to the confirmation page, build a Query String using the ‘Insert Merge Tag’ drop down. [More info on querystrings »](https://en.wikipedia.org/wiki/Query_string) |
| **Conditional Logic** | When enabled, Conditional Logic settings will be displayed. Refer to [this](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/) article for more information. Conditional Logic can’t be enabled for the Default Confirmation. |

### Redirect Confirmation Type

Settings Reference for the Redirect Confirmation Type.

[![Configuring Confirmations - Redirect Confirmations](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-5-1024x702.png)](https://docs.gravityforms.com/wp-content/uploads/2025/09/image-5.png)

| Setting | Description |
| --- | --- |
| **Confirmation Name** | A unique name to identify the Confirmation. It is not displayed to the user. |
| **Confirmation Type** | Redirect. |
| **Redirect URL** | The user will be redirected to the set URL after submitting the form. |
| **Pass Field Data via Query String** | To pass field data to the confirmation page, build a Query String using the ‘Insert Merge Tag’ drop down. [More info on querystrings.](https://en.wikipedia.org/wiki/Query_string) |
| **Conditional Logic** | When enabled, Conditional Logic settings will be displayed. Refer to [this](https://docs.gravityforms.com/enable-conditional-logic-for-confirmations/) article for more information. Conditional Logic can’t be enabled for the Default Confirmation. |

## Merge Tags Support

Settings where [merge tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/) are supported will display the **{..}** icon.

[![Image showing Merge Tags](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-16.png)](https://docs.gravityforms.com/wp-content/uploads/2025/08/image-16.png)

- Company


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 1, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/confirmations-settings-reference/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)