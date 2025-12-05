---
url: "https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events"
title: " Web Chat Widget - Advanced Configurations + Public API/Events : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Developer Resources](https://help.gohighlevel.com/support/solutions/48000450445)
4. [Advanced Configurations](https://help.gohighlevel.com/support/solutions/folders/48000685347)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/48000450445)
   - [Advanced Configurations](https://help.gohighlevel.com/support/solutions/folders/48000685347)
6. Web Chat Widget - Advanced Configurations + Public API/Ev...

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

# Web Chat Widget - Advanced Configurations + Public API/Events

Modified on: Thu, 16 Sep, 2021 at 11:40 AM

Chat widget offers many configurations through chat-widget builder but there are few configurations which we are not providing through chat-widget builder to keep it simple for most users and avoid complexity for most of the use cases, in this section we talk about configurations you can make in chat-widget code after copying from builder.

Let's assume the code below is the code you copied from builder. We can add new attributes to this code for advanced configuration.

```html

```

HTML

### **Open-Icon-url**

This enables you to change the default message icon on chat-widget open button.

```html

```

HTML

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127183686/original/gwvRAPgzp_jm8-w5U7UhFz4kkpefUycwmw.png?1628085770)

### **Close-icon-url**

This enables you to change the default close icon on chat-widget close button.

```html

```

HTML

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127184178/original/GsAwrDp0M-MLRTze103FditzRyzXXlkhFQ.png?1628085828)

### **Next-prompt-timer**

The next-prompt-timer determines the number of seconds the webchat widget will wait before showing the chat-bubble to a user when they revisit. The default value is 86400 sec (24 hours), meaning the prompt bubble will not be visible for 24 hours if a user closes the widget. To make chat-bubble visible upon every page visit, you would set its value to 0.

```html

```

HTML

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48127187894/original/UzMWDpr4xEnmapRsucaNV8pNABJikjDDKA.png?1628086231)

### **Server-u-r-l**

By default chat-widget will communicate (submit lead, etc.) with the server through this ( [https://msgsndr.com](https://msgsndr.com/)) base URL, but you can use this attribute to communicate with different server. You would use this attribute for testing/debugging purposes.

```html

```

HTML

# Public API / Events

## APIs

1\. **openWidget**: This method will helps you to open widget programmatically from any other action items eg on button click

window.leadConnector.chatWidget.openWidget();

```html

```

HTML

2\. **closeWidget**: This method will helps you to close widget programmatically from any other action items eg on button click

window.leadConnector.chatWidget.closeWidget()

```html

```

HTML

3\. **isActive()**: This api will return true if the widget is open(expanded) else return false if widget is closed(collapsed).

window.leadConnector.chatWidget.isActive()

```html

```

HTML

4\. **localizeWidget via API**: This code allows you to change widget labels after the widget gets loaded

```html

```

HTML

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48128186151/original/jBqdi6nPz5ehvH768GIB07K31a76R86Krg.png?1628278617)

5\. **i18n: Internationalization** \- The chat widget does not have automatic i18n support based on i18n lang code but you can change any of the labels within the widget (refer below table for all labels) using attribute names.

```html

```

HTML

|     |     |     |
| --- | --- | --- |
| key | default value(en-US) | Description |
| name | Name | Name field label |
| phone | Mobile Phone | Mobile input field label |
| email | E-mail | email input label |
| message | Message | Message input field label |
| required | Required | error message for required fields |
| received | Received | acknowledgement label below your acknowledgement text |
| sending | Sending | visible when lead submission is in progress |
| invalid\_value | Invalid value | error message for invalid values in input fields |
| send | Send | Title of submit button |
| powered\_by | Powered by | Powered by text for agency branding |

**Changing Widget Labels on Wordpress** \- Currently, there is not a way to change the chat widget labels in the WP LeadConnector plugin settings; however, you can add the following code to the footer of the Wordpress website that will change the labels after the widget loads.

```html

```

HTML

If you're not comfortable adding the code into the footer, you can use a plugin like [Insert Headers And Footers](https://wordpress.org/plugins/insert-headers-and-footers/), which makes the process easy.

## Events

1\. **LC\_chatWidgetLoaded**: chat-widget will fire this event after it gets loaded completely on windows

```html

```

HTML

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

- [Web Chat Widget - Advanced Configurations + Public API/Events](https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events)
- [Creating Sub-Accounts using Zapier](https://help.gohighlevel.com/support/solutions/articles/48001207048-creating-sub-accounts-using-zapier)
- [How to add Business Name in Zapier](https://help.gohighlevel.com/support/solutions/articles/48001164926-how-to-add-business-name-in-zapier)

## Related Articles

- [Getting Started with Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000004102-getting-started-with-chat-widget)
- [How to Install HighLevel's Chat Widget](https://help.gohighlevel.com/support/solutions/articles/48000984860-how-to-install-highlevel-s-chat-widget)
- [Getting Started - Setup Live Chat Widget](https://help.gohighlevel.com/support/solutions/articles/155000005067-getting-started-setup-live-chat-widget)
- [Add HighLevel's Chat Widget to Your Wix Website](https://help.gohighlevel.com/support/solutions/articles/48001239773-add-highlevel-s-chat-widget-to-your-wix-website)
- [Chat Widget Integration with the Client Portal](https://help.gohighlevel.com/support/solutions/articles/155000005913-chat-widget-integration-with-the-client-portal)
- [Add HighLevel's Chat Widget to Your Squarespace Website](https://help.gohighlevel.com/support/solutions/articles/48001239760-add-highlevel-s-chat-widget-to-your-squarespace-website)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001191051-web-chat-widget-advanced-configurations-public-api-events/hit)