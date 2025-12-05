---
url: "https://docs.gravityforms.com/wp-config-options/"
title: "WP Config Options - Gravity Forms Documentation"
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
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)    - [Form Settings](https://docs.gravityforms.com/form-settings/ "Form Settings")
    - [Gravity Forms Block Settings](https://docs.gravityforms.com/gravity-forms-block-settings/ "Gravity Forms Block Settings")
    - [Personal Data Settings](https://docs.gravityforms.com/personal-data-settings/ "Personal Data Settings")
    - [Role and Capability Management](https://docs.gravityforms.com/role-management-guide/ "Role and Capability Management")
    - [Save and Continue](https://docs.gravityforms.com/save-continue-gravity-forms/ "Save and Continue")
    - [Submit Button Settings](https://docs.gravityforms.com/submit-button/ "Submit Button Settings")
    - [WP Config Options](https://docs.gravityforms.com/wp-config-options/ "WP Config Options")
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# WP Config Options

- [Gravity Forms Constants](https://docs.gravityforms.com/wp-config-options/#h-gravity-forms-constants)
- [License Key](https://docs.gravityforms.com/wp-config-options/#h-license-key)
- [Importing Forms](https://docs.gravityforms.com/wp-config-options/#h-importing-forms)
- [Creating a Form Import JSON File](https://docs.gravityforms.com/wp-config-options/#h-creating-a-form-import-json-file)
- [reCAPTCHA v2](https://docs.gravityforms.com/wp-config-options/#h-recaptcha-v2)
- [Disable Auto Updates](https://docs.gravityforms.com/wp-config-options/#h-disable-auto-updates)
- [Disable Logging Notice](https://docs.gravityforms.com/wp-config-options/#h-disable-logging-notice)
- [Add-On Constants](https://docs.gravityforms.com/wp-config-options/#h-add-on-constants)
- [reCAPTCHA v3 Enterprise](https://docs.gravityforms.com/wp-config-options/#h-recaptcha-v3-enterprise)
- [reCAPTCHA v3 Classic](https://docs.gravityforms.com/wp-config-options/#h-recaptcha-v3-classic)

The following constants can be defined in your site’s `wp-config.php` file.

## Gravity Forms Constants

**(\*)** indicates the constant should be defined before installing Gravity Forms. When defined post-installation on a multisite installation, the constant will only apply to new sites added to the network.

### License Key

Defining the `GF_LICENSE_KEY` constant will automatically pre-populate the license key when Gravity Forms is installed **[(\*)](https://docs.gravityforms.com/wp-config-options/#note)**.

|     |
| --- |
| `define(``'GF_LICENSE_KEY'``,``'YOUR-LICENSE-KEY-HERE'``);` |

### Importing Forms

The `GF_IMPORT_FILE` constant allows you to specify a Form JSON file from which a set of default forms can be pre-generated when Gravity Forms is installed **[(\*)](https://docs.gravityforms.com/wp-config-options/#note)**. Follow [these steps](https://docs.gravityforms.com/wp-config-options/#creating-a-form-import-json-file) to create a Form JSON file for use with this option.

|     |
| --- |
| `define(``'GF_IMPORT_FILE'``,``'http://www.domain.com/path/to/gf_import.json'``);` |

The `GF_THEME_IMPORT_FILE` constant allows you to specify a Form JSON file from which a set of default forms can be pre-generated when a theme containing this option is activated. This option should be specified in your theme’s _functions.php_ file. Follow [these steps](https://docs.gravityforms.com/wp-config-options/#creating-a-form-import-json-file) to create a Form JSON file for use with this option.

|     |
| --- |
| `define(``'GF_THEME_IMPORT_FILE'``,``'path/to/gf_import.json'``);` |

Note: The path is relative to your theme root.

#### Creating a Form Import JSON File

The following steps explain how to create a Form JSON file from which a set of default forms can be pre-generated when used with the `GF_IMPORT_FILE` or `GF_THEME_IMPORT_FILE` constants.

1. Create the initial set of forms you want to replicate.
2. Navigate to the Import/Export tool and select “Export Forms”.
3. Select the forms you want to auto-replicate when a new site is created.
4. Click “Export” to export them to a JSON file.
5. Place the JSON file somewhere on your web server, such as your _wp-content/uploads/_ folder, or somewhere easily accessible.
6. Replace the URL in the example code above with the URL to your Form JSON file.

### reCAPTCHA v2

Defining the `GF_RECAPTCHA_PUBLIC_KEY` and `GF_RECAPTCHA_PRIVATE_KEY` constants will automatically pre-populate your reCAPTCHA v2 public and private keys when Gravity Forms is installed****[(\*)](https://docs.gravityforms.com/wp-config-options/#note)****.

|     |
| --- |
| `define(``'GF_RECAPTCHA_PUBLIC_KEY'``,``'YOUR-KEY-HERE'``);`<br>`define(``'GF_RECAPTCHA_PRIVATE_KEY'``,``'YOUR-KEY-HERE'``);` |

### Disable Auto Updates

Defining the `GFORM_DISABLE_AUTO_UPDATE` constant will prevent WordPress automatically installing Gravity Forms updates.

|     |
| --- |
| `define(``'GFORM_DISABLE_AUTO_UPDATE'``, true );` |

### Disable Logging Notice

Defining the `GF_LOGGING_DISABLE_NOTICE` constant will prevent Gravity Forms displaying an admin notice when logging is enabled.

|     |
| --- |
| `define(``'GF_LOGGING_DISABLE_NOTICE'``, true );` |

## Add-On Constants

### reCAPTCHA v3 Enterprise

Defining the `GF_RECAPTCHA_V3_PROJECT_NUMBER` and `GF_RECAPTCHA_V3_SITE_KEY_ENTERPRISE` constants will automatically pre-populate reCAPTCHA v3 Enterprise settings for the reCAPTCHA add-on.

|     |
| --- |
| `define(``'GF_RECAPTCHA_PROJECT_NUMBER'``,``'YOUR-PROJECT-ID-HERE'``);`<br>`define(``'GF_RECAPTCHA_V3_SITE_KEY_ENTERPRISE'``,``'YOUR-KEY-HERE'``);` |

### reCAPTCHA v3 Classic

Defining the `GF_RECAPTCHA_V3_SITE_KEY` and `GF_RECAPTCHA_V3_SECRET_KEY` constants will automatically pre-populate reCAPTCHA v3 site and private keys for the reCAPTCHA add-on.

|     |
| --- |
| `define(``'GF_RECAPTCHA_V3_SITE_KEY'``,``'YOUR-KEY-HERE'``);`<br>`define(``'GF_RECAPTCHA_V3_SECRET_KEY'``,``'YOUR-KEY-HERE'``);` |

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: June 12, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/wp-config-options/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)