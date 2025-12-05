---
url: "https://help.gohighlevel.com/support/solutions/articles/48001203783,"
title: " Using custom fonts in the Email Builder : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001203783,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Email Builder Capabilities](https://help.gohighlevel.com/support/solutions/folders/155000001352)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001203783,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Email Builder Capabilities](https://help.gohighlevel.com/support/solutions/folders/155000001352)
6. Using custom fonts in the Email Builder

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

# Using custom fonts in the Email Builder

Modified on: Thu, 2 Dec, 2021 at 10:14 AM

When creating your own HTML Email Design System, you may want to use a custom font beyond the standard ones available. When working with brand guidelines where you need to use a custom font, it's always best to use a custom font with a solid fallback in place.

### **Email client support**

The first consideration to take into account when working with custom fonts is that email client support is patchy. The following email clients support custom fonts:

- Apple Mail
- iOS Mail
- Samsung Mail
- Outlook.com

It's important to define a font-stack when using custom fonts. This should include some standard system fonts to make sure that your email renders in clients which don't support custom fonts.

```
'OpenSansBold', Helvetica, Arial, sans-serif
```

To host your custom fonts, you can either use a service such as Google Fonts, or host them yourself. We can also host them for our customers - we'll need to see proof of your license before we can do this.

For situations where your custom fonts aren't supported, you should select fallbacks that are included on [the majority of computers](https://www.cssfontstack.com/). These fallbacks define what fonts will be displayed if the email client doesn't support custom fonts.

### CSS set up

The most reliable way to include a specific font into your email is to use @font-face. Below is an example of this in action:

```
<style> @font-face { font-family: 'Festive', cursive; src: url('https://fonts.googleapis.com/css2?family=Festive&display=swap') }
* { font-family: 'Festive', cursive; }
</style>
```

When working with Outlook, we need to wrap this @font-face in a @media tag. This is because Outlook 2007, 2010 and 2017 don't support them.

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

- [How to Use Template Library to Create Branded Review Request Emails](https://help.gohighlevel.com/support/solutions/articles/155000006448-how-to-use-template-library-to-create-branded-review-request-emails)
- [Shopping Cart Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006831-shopping-cart-element-in-email-builder)
- [Social Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006829-social-element-in-email-builder)
- [FAQ Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006828-faq-element-in-email-builder)
- [Code Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006827-code-element-in-email-builder)
- [Footer Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006826-footer-element-in-email-builder)

## Related Articles

- [Code Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006827-code-element-in-email-builder)
- [Customizing Review Widgets in Reputation](https://help.gohighlevel.com/support/solutions/articles/155000000997-customizing-review-widgets-in-reputation)
- [Template Library for Custom Reports](https://help.gohighlevel.com/support/solutions/articles/155000006621-template-library-for-custom-reports)
- [How to use the Email Builder and its In-line Editor](https://help.gohighlevel.com/support/solutions/articles/155000000087-how-to-use-the-email-builder-and-its-in-line-editor)
- [Mobile Editor for Forms, Surveys, and Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000005423-mobile-editor-for-forms-surveys-and-quizzes)
- [Using Custom Font in Funnels And Websites](https://help.gohighlevel.com/support/solutions/articles/155000005918-using-custom-font-in-funnels-and-websites)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001203783,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001203783-using-custom-fonts-in-the-email-builder/hit)