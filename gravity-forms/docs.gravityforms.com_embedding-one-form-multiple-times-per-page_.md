---
url: "https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/"
title: "Embedding One Form Multiple Times per Page - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)  - [First Steps](https://docs.gravityforms.com/category/getting-started/first-steps/)
  - [Creating A Form](https://docs.gravityforms.com/category/getting-started/creating-a-form/)
  - [Adding A Form To Your Site](https://docs.gravityforms.com/category/getting-started/add-form-to-site/)    - [Adding a Form Using the Gravity Forms Block](https://docs.gravityforms.com/adding-a-form-using-block/ "Adding a Form Using the Gravity Forms Block")
    - [Adding a form using the Embed Form flyout](https://docs.gravityforms.com/embed-form-flyout/ "Adding a form using the Embed Form flyout")
    - [Adding a Form Using a Theme File or Hooks](https://docs.gravityforms.com/adding-a-form-to-the-theme-file/ "Adding a Form Using a Theme File or Hooks")
    - [Adding a Form Using the Classic Editor](https://docs.gravityforms.com/adding-a-form-using-classic-editor/ "Adding a Form Using the Classic Editor")
    - [Creating a Form Shortcode](https://docs.gravityforms.com/gravity-forms-form-shortcode/ "Creating a Form Shortcode")
    - [Embedding One Form Multiple Times per Page](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/ "Embedding One Form Multiple Times per Page")
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Embedding One Form Multiple Times per Page

- [Introduction](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/#h-introduction)
- [I get an error when submitting a form](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/#h-i-get-an-error-when-submitting-a-form)
- [How can I add the same form more than once to a page?](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/#h-how-can-i-add-the-same-form-more-than-once-to-a-page)
- [Why does this happen?](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/#h-why-does-this-happen)

## Introduction

Embedding a single form multiple times per page can cause the form submission to hang, the wrong form to be submitted when you use the submit button on another, or cause you to tab between separate forms on a page.

There are other reasons why your form won’t submit as well. Those are covered in our [Theme and Plugin Conflict testing guide](https://docs.gravityforms.com/testing-theme-plugin-conflict/).

## I get an error when submitting a form

Common symptoms for embedding the same form multiple times per page:

- The form won’t submit, and the spinner/loading indicator just keeps spinning
- The wrong form is submitted when you use the submit button of another form
- You get stuck tabbing between forms on a page
- There’s an issue submitting a form that is integrated with a payment add-on
- There’s an issue with a CAPTCHA field or the reCAPTCHA Add-On

All these symptoms can be caused by adding a single form more than once to the page. In addition to adding a form to the page with the form block, shortcode, widget, or function call, **using a modal, tabbed interface, accordion, or slider to embed the same form more than once on a single page is not supported** and will cause problems.

## How can I add the same form more than once to a page?

If you must show the same form more than once on a single page, you can create duplicate forms for each placement on the page. You can [duplicate the form from the Forms list page](https://docs.gravityforms.com/edit-forms/#h-form-quick-toolbar) and embed each unique copy once.

## Why does this happen?

Every form created by Gravity Forms has a unique ID for the HTML element id attribute. Because this value must be unique within the HTML document ( [source](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)), you cannot embed the same form multiple times within one document. When multiple elements on the page share the same ID, it will confuse browsers and JavaScript that rely on targeting elements by ID, leading to issues such as:

- **JavaScript Conflicts:** Scripts may apply actions to the first element with the ID and ignore others, causing only one form to function properly.
- **Styling Issues:** CSS targeting a specific ID might not apply correctly, resulting in inconsistent styling across the forms.
- **Form Submission Problems:** Submitting one form might inadvertently submit another, or data from one form could be sent in another’s place.

If you need assistance troubleshooting a form submission issue on your site, please [contact support](https://www.gravityforms.com/open-support-ticket/technical/).

- URL


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: August 13, 2024

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/embedding-one-form-multiple-times-per-page/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)