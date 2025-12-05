---
url: "https://docs.gravityforms.com/list-field/"
title: "List Field CSS Selectors - Gravity Forms Documentation"
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
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)    - [Basics](https://docs.gravityforms.com/category/user-guides/design-and-layout/basics/)
    - [CSS Selectors](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/)      - [Standard Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/standard-fields-css-selectors/)
      - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/advanced-fields-css-selectors/)        - [File Upload Field CSS Selectors](https://docs.gravityforms.com/file-upload-field/ "File Upload Field CSS Selectors")
        - [Email Field CSS Selectors](https://docs.gravityforms.com/email-field/ "Email Field CSS Selectors")
        - [Website Field CSS Selectors](https://docs.gravityforms.com/website-field/ "Website Field CSS Selectors")
        - [Address Field CSS Selectors](https://docs.gravityforms.com/address-field-2/ "Address Field CSS Selectors")
        - [Name Fields CSS Selectors](https://docs.gravityforms.com/name-fields/ "Name Fields CSS Selectors")
        - [List Field CSS Selectors](https://docs.gravityforms.com/list-field/ "List Field CSS Selectors")
        - [CAPTCHA Field CSS Selectors](https://docs.gravityforms.com/captcha-field/ "CAPTCHA Field CSS Selectors")
        - [Time Field CSS Selectors](https://docs.gravityforms.com/time-field/ "Time Field CSS Selectors")
        - [Date Field CSS Selectors](https://docs.gravityforms.com/date-field/ "Date Field CSS Selectors")
        - [Consent Field CSS Selectors](https://docs.gravityforms.com/consent-field-css-selectors/ "Consent Field CSS Selectors")
      - [Post Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/post-fields-css-selectors/)
      - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/pricing-fields-css-selectors/)
      - [Form Components](https://docs.gravityforms.com/category/user-guides/design-and-layout/css-selectors/form-components/)
    - [Migrating Your Forms from Ready Classes](https://docs.gravityforms.com/migrating-your-forms-from-ready-classes/ "Migrating Your Forms from Ready Classes")
    - [Form Themes and Style Settings](https://docs.gravityforms.com/form-themes-and-style-settings/ "Form Themes and Style Settings")
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# List Field CSS Selectors

- [Container](https://docs.gravityforms.com/list-field/#h-container)
- [Headers (Labels)](https://docs.gravityforms.com/list-field/#h-headers-labels)
- [Columns](https://docs.gravityforms.com/list-field/#h-columns)
- [Rows](https://docs.gravityforms.com/list-field/#h-rows)
- [Odd Rows](https://docs.gravityforms.com/list-field/#h-odd-rows)
- [Even Rows](https://docs.gravityforms.com/list-field/#h-even-rows)
- [All rows](https://docs.gravityforms.com/list-field/#h-all-rows)
- [Cells](https://docs.gravityforms.com/list-field/#h-cells)
- [Icons Container](https://docs.gravityforms.com/list-field/#h-icons-container)
- [Add/Remove Icons](https://docs.gravityforms.com/list-field/#h-add-remove-icons)

## Container

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .ginput_container_list {``border``:``1px``solid``red``}` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.ginput_container_list {``border``:``1px``solid``red``}` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X.gfield .ginput_container_list {``border``:``1px``solid``red``}` |

## Headers (Labels)

Targets the individual headers (labels)

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_header.gform-grid-``row``{``color``:``red``}` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_header.gform-grid-``row``{``color``:``red``}` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X.gfield .gfield_list_header.gform-grid-``row``{``color``:``red``}` |

## Columns

Targets the individual HTML columns

- Applies to column 1 in field ID 1 in all forms

.gfield\_list\_X\_cell\_Y (where X is your field ID and Y is your column number)

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_``1``_cell``1``{``border``:``2px``solid``#333333``;}` |

- Applies to column 1 and field ID 1 in form ID #1

.gfield\_list\_X\_cell\_Y (where X is your field ID and Y is your column number)

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_``1``_cell``1``{``border``:``2px``solid``#333333``;}` |

## Rows

Targets the individual HTML list rows – useful for specifying sizes or creating alternating-color row styles

### Odd Rows

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_group.gform-grid-``row``.gfield_list_row_odd {``background``:``#eeeeee``; }` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_group.gform-grid-``row``.gfield_list_row_odd {``background``:``#eeeeee``; }` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X .gfield_list_row_odd.gfield_list_group.gform-grid-``row``{``background``:``#eeeeee``; }` |

### Even Rows

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_group.gform-grid-``row``.gfield_list_row_even {``background``:``#eeeeee``; }` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_group.gform-grid-``row``.gfield_list_row_even {``background``:``#eeeeee``; }` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X .gfield_list_row_even.gfield_list_group.gform-grid-``row``{``background``:``#eeeeee``; }` |

### All rows

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_group.gform-grid-``row``{``background``:``#eeeeee``; }` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_group.gform-grid-``row``{``background``:``#eeeeee``; }` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X .gfield_list_group.gform-grid-``row``{``background``:``#eeeeee``; }` |

## Cells

- Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_group_item.gfield_list_cell {``border``:``2px``solid``#eeeeee``; }` |

- Applies to form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_group_item.gfield_list_cell {``border``:``2px``solid``#eeeeee``; }` |

- Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X .gfield_list_group_item.gfield_list_cell {``border``:``2px``solid``#eeeeee``; }` |

## Icons Container

Targets the row that contains the icons to add or remove rows.

- **example:** Applies to all forms

|     |     |
| --- | --- |
| 1 | `.gform_wrapper .gfield_list_icons.gform-grid-col {``border``:``1px``solid``red``}` |

**example:** Applies to all forms

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_icons.gform-grid-col {``border``:` |

**example:** Applies just to specific container (based on the unique parent element ID – replace “XX\_X” with your actual element ID)

|     |     |
| --- | --- |
| 1 | `#field_XX_X .gfield_list_icons.gform-grid-col {``border``:``1px``solid``red``}` |

## Add/Remove Icons

Targets the icons to add or remove rows.

- **example:** hide add row icons in form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_icons .add_list_item {``display``:``none``} {``display``:``none``;}` |

- **example:** hide add row icons in form ID #1

|     |     |
| --- | --- |
| 1 | `#gform_wrapper_``1``.gfield_list_icons .remove_list_item {``display``:``none``} {``display``:``none``;}` |

- X/Twitter


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 12, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/list-field/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)