---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-
category: articles
type: article
scraped: 2025-10-28T16:19:33.016Z
title:  How to use build segments in email campaigns? : LeadConnector 
status_code: 200
---

#  How to use build segments in email campaigns? : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Campaigns](https://help.leadconnectorhq.com/support/solutions/folders/155000001176)

## How to use build segments in email campaigns?  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-\# "Print this Article")

Modified on: Wed, 9 Apr, 2025 at 5:05 AM

* * *

With the **Build Segments** feature in the recipient section, you can precisely control _who receives your email campaign_ by combining logic using **Contacts**, **Tags**, **Smart Lists**, and **Pre-built Segments**.

**TABLE OF CONTENTS**

- [Segment Components](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#%E2%80%8B%E2%80%8BSegment-Components%C2%A0)
- [Logic Builders: AND & OR](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#Logic-Builders%3A-AND-&-OR)
- [How It Works: Sequential Logic Resolution](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#How-It-Works%3A-Sequential-Logic-Resolution)
- [Best Practices](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#Best-Practices)
- [Examples for Better Understanding](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#Examples-for-Better-Understanding)

  - [Example 1: Send to contacts with Tag A or Tag B, but exclude Tag C](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#Example-1%3A-Send-to-contacts-with-Tag-A-or-Tag-B,-but-exclude-Tag-C)
  - [Example 2: Send to contacts in Smart List A AND Smart List D, but exclude Contact C](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-#Example-2%3A-Send-to-contacts-in-Smart-List-A-AND-Smart-List-D,-but-exclude-Contact-C)

## **Segment Components**

You can include or exclude contacts based on these criteria:

- **Tags**

`Tag is` or `Tag is not` (e.g., "Tag is A")

- **Smart Lists**

`Smart List is` (e.g., "Smart List is A")

- **Contacts**

`Contact is` or `Contact is not` (e.g., "Contact is A, B, C")


> If you select multiple contacts, it behaves like an OR operation (e.g., A **or** B **or** C)

- **Pre-built Segments**

`Segment is` or `Segment is not`

(e.g., “Engaged in last 30 days” or “Not engaged in 30 days”)


## **Logic Builders: AND & OR**

You can build complex targeting rules by stacking conditions using:

- **AND**: All conditions must be true

- **OR**: Any one condition can be true


The logic is evaluated **sequentially from top to bottom**. The result of the first condition (or grouped condition) is used as the base for the next.

## **How It Works: Sequential Logic Resolution**

The **Build Segments** logic runs **top-to-bottom**, applying each condition one after another. This means:

- **Conditions are not all evaluated at once.**

- The **first condition** creates an initial group.

- Each **subsequent condition** modifies that group — either by expanding it (with OR) or narrowing it down (with AND).

- **"Is not" conditions** remove matching contacts from the group **after the previous conditions are resolved**.


Think of it like a filter stack — you're building the final list by passing contacts through each layer, one at a time.

## **Best Practices**

- **Use OR when you want to combine audiences** (e.g., anyone with Tag A _or_ Tag B).

- **Use AND when you want to narrow down** (e.g., in Smart List A _and_ Smart List D).

- **Keep exclusion conditions (e.g., “is not”) near the bottom** of your logic stack to ensure proper filtering.


If you're unsure how your logic will behave, try breaking it into smaller steps or re-ordering the conditions for clarity.

## **Examples for Better Understanding**

#### **Example 1:** Send to contacts with **Tag A or Tag B**, but **exclude Tag C**

```whitespace-pre!

```

**How it works**:

It first builds a group from Tag A or Tag B, then removes anyone from that group who also has Tag C.

#### **Example 2:** Send to contacts in **Smart List A AND Smart List D**, but **exclude Contact C**

```whitespace-pre!

```

**How it works**:

Only contacts who are in both Smart List A and Smart List D will be selected, and Contact C will be excluded from that list.

**FAQ**

**1\. Is it possible to add a condition to exclude a Smart List?**

No the capability to add a condition - Smart list "is not", is not present to exclude a smartlist

**2\. Can we freeze list of contacts at the time of creation?**

The final list is created at the time of execution. A user cannot freeze list while building a segment.

If any other option apart from Build Segment is used, then freeze list capability is present.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000004994-how-to-use-build-segments-in-email-campaigns-*  
*Generated on: 2025-10-28T16:19:33.016Z*
