---
url: "https://docs.gravityforms.com/settings-page/"
title: "Gravity Forms Settings Page - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)  - [First Steps](https://docs.gravityforms.com/category/getting-started/first-steps/)    - [Gravity Forms Tutorials](https://docs.gravityforms.com/how-to-blog-posts/ "Gravity Forms Tutorials")
    - [What is Gravity Forms?](https://docs.gravityforms.com/what-is-gravity-forms/ "What is Gravity Forms?")
    - [Getting Started: A Checklist for the New User](https://docs.gravityforms.com/getting-started/ "Getting Started: A Checklist for the New User")
    - [Download and Install Gravity Forms](https://docs.gravityforms.com/installation/ "Download and Install Gravity Forms")
    - [Gravity Forms Setup Wizard](https://docs.gravityforms.com/gravity-forms-setup-wizard/ "Gravity Forms Setup Wizard")
    - [Gravity Forms Settings Page](https://docs.gravityforms.com/settings-page/ "Gravity Forms Settings Page")
    - [Dashboard Widget](https://docs.gravityforms.com/dashboard-widget/ "Dashboard Widget")
    - [Video Tutorials](https://docs.gravityforms.com/video-tutorials/ "Video Tutorials")
    - [Uninstall Gravity Forms and Add-Ons](https://docs.gravityforms.com/uninstall-gravity-forms-and-add-ons/ "Uninstall Gravity Forms and Add-Ons")
  - [Creating A Form](https://docs.gravityforms.com/category/getting-started/creating-a-form/)
  - [Adding A Form To Your Site](https://docs.gravityforms.com/category/getting-started/add-form-to-site/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Gravity Forms Settings Page

- [Overview](https://docs.gravityforms.com/settings-page/#h-overview)
- [General Settings](https://docs.gravityforms.com/settings-page/#general-settings)
- [reCAPTCHA v2 Settings](https://docs.gravityforms.com/settings-page/#recaptcha-settings)
- [reCAPTCHA API Keys](https://docs.gravityforms.com/settings-page/#recaptcha-api-keys)
- [Site Key and Secret Key](https://docs.gravityforms.com/settings-page/#h-site-key-and-secret-key)
- [Type](https://docs.gravityforms.com/settings-page/#h-type)
- [REST API Settings](https://docs.gravityforms.com/settings-page/#h-rest-api-settings)
- [Uninstall Settings](https://docs.gravityforms.com/settings-page/#h-uninstall-settings)

## Overview

The Gravity Forms Settings panel within your WordPress admin area allows you to set various plugin-wide options. To find the settings panel, hover over “Forms” in your WordPress admin sidebar and choose “Settings.” If you do not have a Forms panel in the sidebar, you must install Gravity Forms first and ensure it has been activated via your WordPress admin Plugins settings.

## General Settings

[![Gravity Forms Settings Page](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-11-1024x435.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-11.png)[![Gravity Forms Settings Page](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-12-1024x400.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-12.png)[![Gravity Forms Settings Page](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-13-1024x454.png)](https://docs.gravityforms.com/wp-content/uploads/2025/05/image-13.png)

| Setting | Description |
| --- | --- |
| **Support License Key** | [Enter your support license key in this field](https://docs.gravityforms.com/finding-your-license-key/). Your support license key is used to access **automatic updates**. |
| **Your License Details** | Provides details of the license to which the site has been connected. |
| **Default Currency** | Select the Currency setting for all forms on this website. |
| **Logging** | This will display the Forms menu in the WordPress top toolbar when enabled. The menu will list the ten most recently edited forms. |
| **Default Form Theme** | This theme will be used by default everywhere forms are embedded on your site. |
| **Toolbar Menu** | Enabling this will allow WordPress to install Gravity Forms updates automatically. It requires a valid license key. This setting is synchronized with the enable/disable auto-updates link in the Automatic Updates column on the Plugins > Installed Plugins page. |
| **Dashboard Widget** | Turn on to enable the Gravity Forms dashboard widget. The [dashboard widget](https://docs.gravityforms.com/dashboard-widget/) displays a list of forms and the number of entries each form has. |
| **Automatic Background Updates** | Enabling this will allow WordPress to install Gravity Forms updates automatically. It requires a valid license key. This setting is synchronized with the enable/disable auto-updates link in the Automatic Updates column on the Plugins > Installed Plugins page. |
| **No Conflict Mode** | Enabling this will allow WordPress to automatically install Gravity Forms updates. It requires a valid license key. This setting is synchronized with the enable/disable auto-updates link in the Automatic Updates column on the Plugins > Installed Plugins page. |
| **Data Collection** | Enabling this option allows Gravity Forms to run [additional data collection](https://docs.gravityforms.com/about-additional-data-collection/) in order to improve the plugin and customer experience. |

The following settings have been deprecated or removed as of version 2.8.

| Setting | Status | Description |
| --- | --- | --- |
| **Output Default CSS** | Deprecated | Outputs Gravity Forms default CSS. Disable this if you plan to create your own CSS. Note that this setting will be deprecated in the future in favor of [Form Themes](https://docs.gravityforms.com/form-themes-and-style-settings/). |
| **Output HTML5** | Removed | Disable this option if you would like to prevent the plugin from outputting HTML5 form fields. |

## reCAPTCHA v2 Settings

Note that reCAPTCHA v2 settings (and the new **reCAPTCHA v3** functionality) are now available with the dedicated [Gravity Forms reCAPTCHA Add-On](https://www.gravityforms.com/add-ons/recaptcha/). Refer to that documentation [here](https://docs.gravityforms.com/recaptcha-add-on-settings-reference/).

The Gravity Forms [Captcha field](https://docs.gravityforms.com/captcha/) integrates with reCAPTCHA version 2, a [free Google service](https://support.google.com/recaptcha/) that helps protect your forms from spambots. To use this service, you will need to set up your **Classic** v2 API keys and choose your type here.

![reCAPTCHA Settings in Forms, Settings, reCAPTCHA in Gravity Forms](https://docs.gravityforms.com/wp-content/uploads/2014/06/recaptcha-settings-gf25-1024x478.png)

### reCAPTCHA API Keys

A matched pair containing a site key and a secret key is required to link the reCAPTCHA v2 service to your Gravity Forms site installation. You must [sign up](https://www.google.com/recaptcha/admin/create) for a free Google account to get your keys. From there, you can generate one or more pairs of the type of reCAPTCHA **Classic** keys you wish to implement.

**IMPORTANT**: Make sure to use the correct domain value during the key setup at your reCAPTCHA account. The value can’t contain the protocol prefix, it’s recommended to use just the domain without www. or anything. If your site URL is http://www.example.com we recommend you to use **example.com**

If you use an invalid domain value during the setup, the reCAPTCHA field will display an _Invalid domain for site key_ error.

#### Site Key and Secret Key

Enter your key pair here.

#### Type

As of **Gravity Forms v2.4.7**, Gravity Forms’ Captcha field supports the reCAPTCHA **Classic** types of **v2 Checkbox** and **v2 Invisible**. reCAPTCHA **Enterprise** keys are not currently supported.

The checkbox keys will only allow you to add a v2 checkbox on your form, while v2 Invisible keys will allow you to choose either v2 reCAPTCHA type. Note that this is a site-wide setting, so you cannot change the reCAPTCHA type used from form to form on the same site.

**TIP**: Create a v2 Invisible CAPTCHA key. It can be used for both v2 Invisible CAPTCHA and v2 Checkbox CAPTCHA.

Choose the reCAPTCHA v2 type you want, from the choices of Checkbox or Invisible. If your keys are compatible will see the reCAPTCHA box and be asked to complete it to finalize your setup.

![reCaptcha Settings with Checkbox Validation](https://docs.gravityforms.com/wp-content/uploads/2014/06/recaptcha-checkbox-validation-1024x450.png)

If you enter a key pair for checkbox and try to select invisible reCAPTCHA, the Google service will return an error message within the reCAPTCHA frame.

![reCAPTCHA with Invisible checked showing invalid message from Google when only Checkbox is configured.](https://docs.gravityforms.com/wp-content/uploads/2014/06/recaptcha-invisible-invalid-checkbox.png)

An invisible key pair is valid for either type, working with v2 checkbox and v2 invisible.

## REST API Settings

![Image showing REST API Settings for Gravity Forms](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-11-1024x180.png)

The REST API settings page allows you to set up the [Gravity Forms REST API](https://docs.gravityforms.com/category/developers/rest-api/), which can be used to integrate Gravity Forms with custom apps, remote services, and other WordPress sites.

Refer to that documentation [here](https://docs.gravityforms.com/gravity-forms-rest-api-settings).

## Uninstall Settings

![Image showing Uninstall Settings for Gravity Forms](https://docs.gravityforms.com/wp-content/uploads/2024/07/image-10.png)

The Uninstall settings page allows you to uninstall Gravity Forms and add-ons. Refer to that documentation [here](https://docs.gravityforms.com/uninstall-gravity-forms-and-add-ons).

- Email


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: May 8, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/settings-page/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)