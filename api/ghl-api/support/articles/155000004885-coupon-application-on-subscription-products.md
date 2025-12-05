---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004885-coupon-application-on-subscription-products
category: articles
type: article
scraped: 2025-10-28T16:19:13.682Z
title:  Coupon Application on Subscription Products : LeadConnector 
status_code: 200
---

#  Coupon Application on Subscription Products : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Payments, Invoices & Estimates](https://help.leadconnectorhq.com/support/solutions/48000454530) [Getting Started w/ Payments](https://help.leadconnectorhq.com/support/solutions/folders/48000682655)

## Coupon Application on Subscription Products  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004885-coupon-application-on-subscription-products\# "Print this Article")

Modified on: Tue, 25 Mar, 2025 at 7:27 AM

* * *

**Overview**

The coupon creation flow now includes the ability to define how long a coupon should be applied to a subscription product. Businesses can specify a fixed duration for discounts on subscriptions, allowing for greater flexibility in promotional offers.

**Process**

1\. Creating or Editing a Coupon

- Navigate to **Coupons > Create Coupon or Coupons > Edit Coupon.**
- In the discount settings, locate the checkbox labeled: “Also apply to recurring/future payments based on a duration or forever, if applicable.”
- When checked, select from the following options:
  - Forever: The discount applies to all recurring payments.
  - Multiple Months: The discount applies for a specified number of months. If selected, an input field appears to enter the duration in months.

2\. Applying Coupons to Subscription Products

- If a coupon is applied to a one-time product, the duration setting does not impact the discount logic—it applies only once.
- If applied to a subscription product, the discount follows the selected duration:
  - Once: The discount applies to the first payment only.
  - Forever: The discount applies to all recurring payments.
  - Multiple Months: The discount applies for the defined number of months and then stops.

3\. Viewing Applied Coupons

- The selected duration is reflected in the Coupon Details and Management Views.
- On the Subscription Details Page and Order Details Page, the discount appears next to the payment details with phrases like: “10% off for first 4 months”, “$10 off for 1st month”, “10% off for all payments” OR “$10 off on 1st payment”

**Examples**

- Monthly subscription product running for 10 months - Purchased with a coupon applied that has "Multiple Months" selected with "4" as the input, would apply the coupon for 4 months beginning from the date of application of coupon whether the subscription starts directly in active status or first in trialing & then active status.
- Annual subscription product running for 3 years
  - Purchased with a coupon applied that has "Forever" selected, coupon would apply for the life of the subscription
  - Purchased with a coupon applied that has "Multiple Months" selected with 4 as the input, the coupon will not apply to the annual renewal after 12 months because it can only be applied for payments coming up in the next 4 months
- Weekly subscription product running for 6 months - Purchased with a coupon applied hat has "Multiple Months" selected with "2" as the input, would apply the coupon for 2 months beginning from the date of application of coupon whether the subscription starts directly in active status or first in trialing & then active status. So coupon would apply every week, approx. 8 times, i.e. for the 2 months after subscription product is purchased.

**Samples**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043925709/original/SuAx46pLeXkLDDIsHtJ3ZG5Ky86LiQJHtA.png?1742905591)**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155043925734/original/p92zAYBOCpg6SL-5lHpVwdUYjzLsqLoS1w.png?1742905617)**

**Additional Points**

- The feature ensures that subscription frequency (daily, weekly, monthly, quarterly, annually) does not affect how many payments receive the discount—only the defined duration applies.
- For a scheduled subscription, coupon applies from the start date of the subscription (active or trial) i.e. the scheduled date used as input when creating the subscription.
- Existing coupons maintain their original behavior:
  - If the checkbox was previously checked, the default duration is Forever.
  - If unchecked, the default duration is Once.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004885-coupon-application-on-subscription-products/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004885-coupon-application-on-subscription-products*  
*Generated on: 2025-10-28T16:19:13.682Z*
