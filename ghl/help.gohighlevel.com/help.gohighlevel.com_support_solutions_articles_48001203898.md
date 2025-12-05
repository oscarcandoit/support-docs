---
url: "https://help.gohighlevel.com/support/solutions/articles/48001203898"
title: " How To Use Shopify Variables : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001203898#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
4. [Shopify](https://help.gohighlevel.com/support/solutions/folders/48000682893)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001203898#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
   - [Shopify](https://help.gohighlevel.com/support/solutions/folders/48000682893)
6. How To Use Shopify Variables

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

# How To Use Shopify Variables

Modified on: Sat, 4 Dec, 2021 at 9:02 AM

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| **Shopify Variable Details** | **Shopify Variable format** | **Data Sample** | **Abandoned Checkout Trigger** | **Order Placed Trigger** |
| **Order Info** |  |  |  |  |
| Order id | {{ [order.id](http://order.id/)}} | 1900968798308 | YES | YES |
| Order number | {{order.number}} | 1044 | - | YES |
| Order status URL | {{order.order\_status\_url}} | link to order | - | YES |
| Abandoned checkout URL | {{order.abandoned\_checkout\_url}} | link to abandoned checkout | YES | - |
| Created at | {{order.created\_at}} | 2021-10-21T11:47:12+05:30 | YES | YES |
| Created on | {{order.created\_on}} | default format 10-20-2021 | YES | YES |
| Currency | {{order.currency}} | $ | YES | YES |
| Currency code | {{order.currency\_code}} | USD | YES | YES |
|  |  |  |  |  |
| **Customer Info** |  |  |  |  |
| First Name | {{order customer.first\_name}} | John | YES | YES |
| Last Name | {{order.customer.last\_name}} | Carter | YES | YES |
| Email | {{order.customer.email}} | [johncarter@gmail.com](mailto:johncarter@gmail.com) | YES | YES |
| Phone | {{order.customer.phone}} | 18989898989 | YES | YES |
|  |  |  |  |  |
| **Order Value** |  |  |  |  |
| Total Cart Price | {{order.total\_cart\_price}} | 99.00 | - | YES |
| Discount Code | {{order.discount\_code}} | TESTDISC20 | - | YES |
| Total Discount Value | {{order.total\_discounts}} | 11.99 | - | YES |
| Order has discount? | {{order.has\_discount}} | true/false | - | YES |
| Subtotal Price | {{order.subtotal\_price}} | 88.99 | - | YES |
| Total Shipping Price | {{order.total\_shipping\_price}} | 14.49 | - | YES |
| Total Price | {{order.total\_price}} | 102.99 | - | YES |
|  |  |  |  |  |
| **Customer Billing Address** |  |  |  |  |
| Contact Name | {{order.billing\_address.name}} | John Carter | - | YES |
| Address Company | {{order.billing\_address.company}} | Marvel Inc. | - | YES |
| Address 1 | {{order.billing\_address.address1}} | 890 | - | YES |
| Address 2 | {{order.billing\_address.address2}} | Fifth Avenue, Manhattan | - | YES |
| Province | {{order.billing\_address.province}} | New York City | - | YES |
| Zip | {{order.billing\_address.zip}} | 10128 | - | YES |
| Country | {{order.billing\_address.country}} | United States | - | YES |
|  |  |  |  |  |
| **Customer Shipping Address** |  |  |  |  |
| Contact Name | {{order.shipping\_address.name}} | John Carter | - | YES |
| Address Company | {{order.shipping\_address.company}} | Marvel Inc. | - | YES |
| Address 1 | {{order.shipping\_address.address1}} | 890 | - | YES |
| Address 2 | {{order.shipping\_address.address2}} | Fifth Avenue, Manhattan | - | YES |
| Province | {{order.shipping\_address.province}} | New York City | - | YES |
| Zip | {{order.shipping\_address.zip}} | 10128 | - | YES |
| Country | {{order.shipping\_address.country}} | United States | - | YES |
| Order requires shipping? | {{order.requires\_shipping}} | true/false | - | YES |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
| **Advanced Variables** |  |  |  |  |
| Order/Abandoned cart items<br>(\*Coming Soon) | {{#each Order line\_items as \| item \|}} |  | YES | YES |
|  | item.id |  |  |  |
|  | item.image |  |  |  |
|  | item.title |  |  |  |
|  | item.quantity |  |  |  |
|  | item.price |  |  |  |
|  | item.line\_price |  |  |  |
|  | {{/each}} |  |  |  |
|  |  |  |  |  |
| Order Tax Details<br>(\*Coming Soon) | {{#each Order tax\_lines as \| tax \|}} |  | - | YES |
|  | tax.title |  |  |  |
|  | tax.rate |  |  |  |
|  | tax.price |  |  |  |
|  | {{/each}} |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

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

- [How To Integrate Shopify With HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001203620-how-to-integrate-shopify-with-highlevel)
- [How To Use Shopify Variables](https://help.gohighlevel.com/support/solutions/articles/48001203898-how-to-use-shopify-variables)
- [Shopify Elements in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001203897-shopify-elements-in-highlevel)

## Related Articles

- [How To Integrate Shopify With HighLevel](https://help.gohighlevel.com/support/solutions/articles/48001203620-how-to-integrate-shopify-with-highlevel)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Voice AI Custom Variable Support in Prompt](https://help.gohighlevel.com/support/solutions/articles/155000004690-voice-ai-custom-variable-support-in-prompt)
- [How to migrate Shopify stores to Highlevel (including products, collections, orders, contacts, and transactions)?](https://help.gohighlevel.com/support/solutions/articles/155000004056-how-to-migrate-shopify-stores-to-highlevel-including-products-collections-orders-contacts-and-tr)
- [Intent based Routing in Agent Studio (AI Router Node)](https://help.gohighlevel.com/support/solutions/articles/155000006436-intent-based-routing-in-agent-studio-ai-router-node-)
- [Add HighLevel's Chat Widget to Your Shopify Website](https://help.gohighlevel.com/support/solutions/articles/48001239778-add-highlevel-s-chat-widget-to-your-shopify-website)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001203898)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001203898-how-to-use-shopify-variables/hit)