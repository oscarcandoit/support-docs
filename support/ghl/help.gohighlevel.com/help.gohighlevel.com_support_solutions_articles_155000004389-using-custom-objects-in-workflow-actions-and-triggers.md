---
url: "https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers"
title: " Using Custom Objects in Workflow Actions and Triggers : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Custom Objects.](https://help.gohighlevel.com/support/solutions/155000000183)
4. [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000000895)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Custom Objects.](https://help.gohighlevel.com/support/solutions/155000000183)
   - [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/folders/155000000895)
6. Using Custom Objects in Workflow Actions and Triggers

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

# Using Custom Objects in Workflow Actions and Triggers

Modified on: Wed, 29 Oct, 2025 at 11:52 PM

Custom Objects are now live in workflows! This new feature empowers users to create object-specific workflows. Now seamlessly trigger workflows based on custom object-related triggers and define a series of actions to automate your processes.

* * *

**TABLE OF CONTENTS**

- [What's New?](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#What's-New?%C2%A0)
- [How it Works?](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#How-it-Works?)
- [Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#%E2%80%8BActions-and-Triggers)
  - [Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Triggers)
    - [Custom Object](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Custom-Object)
    - [Events](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Events)
  - [Actions](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Actions)
    - [Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Custom-Objects)
    - [Send Data](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Send-Data)
    - [Internal](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Internal)
    - [Workflow AI](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Workflow-AI)
- [Use Case](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers#Use-Case)

* * *

## **What's New?**

- Custom Object Workflows: Create workflows specific to your custom objects (e.g., Home, Cars, Pets, etc.).

- Trigger Workflows with Custom Object Events: Automate processes using powerful triggers specific to your custom objects.

- Perform Targeted Actions: Define object-specific actions, like creating, updating, or clearing custom object records, and integrate them with other tools.

* * *

## **How it Works?**

- Go to the Workflow Landing Page and click Create Workflow.

- Select the Object-based Workflow you wish to configure.

- Customize your workflow with the following triggers and actions.

* * *

## **Actions and Triggers**

The below-mentioned actions and Triggers are present in the Custom Object Workflows:

### **Triggers**

#### **Custom Object**

- Home Created

- Home Changed


#### **Events**

- Inbound Webhook


### **Actions**

#### **Custom Objects**

- Create Home or Associated Record

- Update Home or Associated Record

- Clear fields of Home or Associated Record


#### **Send Data**

- Custom Webhook

- Google Sheets


#### **Internal**

- If / Else

- Wait

- Update Custom Value

- Go To

- Date/Time Formatter

- Number Formatter

- Add To Workflow

- Remove From Workflow

- Array Functions

- Drip

- Text Formatter

- Custom Code


#### **Workflow AI**

- GPT powered by OpenAI

* * *

## **Use Case**

A real estate agency uses a custom object called "Home" to track home listings. When the Home Status field is marked as "Closed" (indicating the property is sold), they want to automate the next steps, including updating records and logging sales data.

Trigger:

- Object Changed: Trigger the workflow when the Home Status field in the "Home" object changes to "Closed".


Workflow Actions:

- Update Associated Object: Update an associated object (e.g., "Agent") linked to the sold property.

- Add a Row to Google Sheets: Use the Google Sheets Integration to log the sale in a centralized document for tracking and reporting.

- Clear a Field in the Object or Associated Object: Clear the temporary Notes and Internal Comment custom fields that are no longer needed.

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143416/original/FYosh0xBXvwWJa4Rm8jPBWM8rW6xLW7bFw.jpeg?1733919867)

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143418/original/jc9sYbxjs6FjOh5oowlIJ3ZY5MKslMQDbA.jpeg?1733919867)

![Screenshot 2024-11-28 at 8](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155038143417/original/2vxYX2GNKd0aEHop-1NDAAxpafbrLklkmg.jpeg?1733919867)

* * *

## **Frequently Asked Questions**

**Q: Can I use a Custom Object workflow to send data to other platforms?**

Yes. You can use actions like Webhooks to push data from Custom Object records to third-party tools. This is especially helpful for reporting, syncing with inventory systems, or triggering external services based on Custom Object events.

**Q: Do I need to create a Custom Object before using it in a workflow?**

Yes. You must create the Custom Object and define its fields before it can be used in any workflow trigger or action.

* * *

## **Related Articles**

- [Getting Started with Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000003896)

- [Creating and Updating Custom Object Records](https://help.gohighlevel.com/en/support/solutions/articles/155000004023)

- [Associations for Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000004033)

- [Creating and Editing Custom Objects](https://help.gohighlevel.com/en/support/solutions/articles/155000003897)


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

- [Getting Started with Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003896-getting-started-with-custom-objects)
- [Creating and Editing Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects)
- [Creating and Updating Custom Object Records](https://help.gohighlevel.com/support/solutions/articles/155000004023-creating-and-updating-custom-object-records)
- [Custom Object Case Study : Real Estate](https://help.gohighlevel.com/support/solutions/articles/155000004176-custom-object-case-study-real-estate)
- [Using Custom Objects in Workflow Actions and Triggers](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)
- [SmartLists for Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000005147-smartlists-for-custom-objects)

## Related Articles

- [Custom Objects In All Plans + Higher Limit](https://help.gohighlevel.com/support/solutions/articles/155000006631-custom-objects-in-all-plans-higher-limit)
- [Custom Object and Company Based Workflow Actions & Triggers](https://help.gohighlevel.com/support/solutions/articles/155000006701-custom-object-and-company-based-workflow-actions-triggers)
- [Creating and Editing Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897-creating-and-editing-custom-objects)
- [Workflow Action - Array Functions (Premium)](https://help.gohighlevel.com/support/solutions/articles/155000001466-workflow-action-array-functions-premium-)
- [Workflow Action - Update Custom Values](https://help.gohighlevel.com/support/solutions/articles/155000003353-workflow-action-update-custom-values)
- [Marketplace Workflow Actions](https://help.gohighlevel.com/support/solutions/articles/155000000571-marketplace-workflow-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000004389-using-custom-objects-in-workflow-actions-and-triggers/hit)