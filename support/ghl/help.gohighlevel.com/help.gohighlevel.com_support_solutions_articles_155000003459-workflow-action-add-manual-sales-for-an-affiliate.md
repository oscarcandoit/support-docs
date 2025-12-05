---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate"
title: " Workflow Action - Add Manual Sales For An Affiliate : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Contact Workflow Actions](https://help.gohighlevel.com/support/solutions/folders/155000001361)
6. Workflow Action - Add Manual Sales For An Affiliate

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

# Workflow Action - Add Manual Sales For An Affiliate

Modified on: Tue, 17 Sep, 2024 at 1:19 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#Overview)
- [Action Name](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#Action-Name)
- [Action Description](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#Action-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate#Example)

## Overview

The "Add Manual Sales For An Affiliate" action in workflows empowers you to efficiently manage and assign manual sales for specific affiliates within selected campaigns. By automating this process, commissions are calculated according to the campaign's default settings, ensuring accurate and timely rewards for your affiliates. This feature is designed to streamline your workflow, enhance commission tracking, and provide greater flexibility in managing affiliate-driven sales.

## Action Name

Add Manual Sales For An Affiliate

## Action Description

The Add Manual Sales For An Affiliate action in workflows allows you to assign manual sales for specific affiliate in the selected affiliate campaigns. After the action the commissions will be calculated accroding to the campaign's default commission settings and get assigned to the affiliate accordingly

## How to Configure

**1\. Select "Add Manual Sales For An Affiliate" action**

**2\. Toggle On AUTO-TRACK AFFILIATE VIA ATTRIBUTION**

Enable this option to automatically assign revenue to the appropriate affiliate based on the affiliate ID in the passed URL, eliminating the need to create separate branches for each affiliate.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745487/original/i_95Hk3VXsfVVYJpIHO8C8GJQPl9XR3hbg.jpeg?1726138633)

Select if you want to consider first or latest attribution

**Please Note:**

What is "First" or "Latest" Attribution?

When attributing a contact to a specific source it is common to consider the first and latest attribution. Both are always stored on every single contact.

First Attribution - is the first time a contact interacts with our system, when this happens we record attribution data for that session. For example: Someone fills out a form.

Latest Attribution - is the most recent recorded interaction with us, when this happens we record attribution data for this most recent session as well. For example: After filling out a form they then decide to purchase our product via a Two-Step Order Form. When this happens, the latest attribution data will be recorded.

\*The latest attribution will always change based on the last recorded interaction. However, the first attribution will not.

**3\. Choose the Affiliate Campaign**

Select the affiliate campaign from the dropdown.

**4\. Enter the Revenue and other details**

Enter the amount of sales/revenue of the transaction for the affiliate.

Optionally add the Event date for the sale (the date when the sale happened) and Event ID (referenceID, transaction ID)

**5\. Save Action**

**How to use this action without using attribution tracking?**

**1\. Select "Add Manual Sales For An Affiliate" action**

**2\. Choose the Affiliate Campaign and Affiliate**

Select the affiliate campaign from the dropdown. Post this the affiliate dropdown will only show the affiliates that are added in the selected campaign.

**3\. Enter the Revenue and other details**

Enter the amount of sales/revenue of the transaction for the affiliate.

Optionally add the Event date for the sale (the date when the sale happened) and Event ID (referenceID, transaction ID)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032745486/original/wBbV2Bxu6KQh0mdbhvaOkvcYkx8tmaPmUw.jpeg?1726138633)

**4\. Save Action**

## Example

**Automatically Add commission to the Affiliate when a form is submitted**

**Trigger**

- **Form Submitted** \- Affiliates have shared the links for the form to the potential leads. The form selected is added to the affiliate campaign.

**Action**

- **Add Manual Sales for an Affiliate**\- Add the action and toggle on the "Auto Track Affiliate via Attibution" and information to rest of the fields.

**Outcome**

When the form is filled by the lead and the form has a valid link. The action will automatically map the lead to the affiliate and the commission will be paid to the relevant affiliate. With this action there is no need to create multiple branches.

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

- [Workflow Action - Create Contact](https://help.gohighlevel.com/support/solutions/articles/155000002685-workflow-action-create-contact)
- [Workflow Action - Find Contact](https://help.gohighlevel.com/support/solutions/articles/155000002686-workflow-action-find-contact)
- [Workflow Action - Update Contact Field](https://help.gohighlevel.com/support/solutions/articles/155000002688-workflow-action-update-contact-field)
- [Workflow Action - Add Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003111-workflow-action-add-contact-tag)
- [Workflow Action - Add to Notes](https://help.gohighlevel.com/support/solutions/articles/155000003143-workflow-action-add-to-notes)
- [Workflow Action - Remove Contact Tag](https://help.gohighlevel.com/support/solutions/articles/155000003266-workflow-action-remove-contact-tag)

## Related Articles

- [Workflow Action - Add Manual Sales For An Affiliate](https://help.gohighlevel.com/support/solutions/articles/155000002692-workflow-action-add-manual-sales-for-an-affiliate)
- [Workflow Action - GPT Powered by OpenAI](https://help.gohighlevel.com/support/solutions/articles/155000000209-workflow-action-gpt-powered-by-openai)
- [Automating Affiliate Commissions with 'Add Manual Sales For An Affiliate' Workflow Action](https://help.gohighlevel.com/support/solutions/articles/155000003666-automating-affiliate-commissions-with-add-manual-sales-for-an-affiliate-workflow-action)
- [Why Use Affiliate Automations?](https://help.gohighlevel.com/support/solutions/articles/155000003662-why-use-affiliate-automations-)
- [Workflow Action - Add Leads Under an Affiliate](https://help.gohighlevel.com/support/solutions/articles/155000003429-workflow-action-add-leads-under-an-affiliate)
- [Automate Lead Assignment & Notifications in Affiliate Manager Workflows](https://help.gohighlevel.com/support/solutions/articles/155000003665-automate-lead-assignment-notifications-in-affiliate-manager-workflows)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003459-workflow-action-add-manual-sales-for-an-affiliate/hit)