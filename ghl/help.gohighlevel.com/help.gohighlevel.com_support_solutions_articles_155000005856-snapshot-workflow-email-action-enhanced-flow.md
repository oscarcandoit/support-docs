---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow"
title: " Snapshot Workflow Email Action – Enhanced Flow : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Workflow Email Action](https://help.gohighlevel.com/support/solutions/folders/155000001353)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Workflow Email Action](https://help.gohighlevel.com/support/solutions/folders/155000001353)
6. Snapshot Workflow Email Action – Enhanced Flow

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

# Snapshot Workflow Email Action – Enhanced Flow

Modified on: Sun, 12 Oct, 2025 at 10:57 PM

Template management just got simpler! Only original templates and workflows appear in the target location, with email actions handled automatically in the background.

Ask ChatGPT

#### **Overview**  The target location’s template list now only displays original templates and workflows, eliminating the clutter caused by email action templates. These email action templates are still imported and mapped in the background, but they remain hidden from users. This enhancement streamlines the template management process and improves the syncing of workflows and templates.

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#OverviewThe-target-location%E2%80%99s-template-list-now-only-displays-original-templates-and-workflows,-eliminating-the-clutter-caused-by-email-action-templates.-These-email-action-templates-are-still-imported-and-mapped-in-the-background,-but-they-remain-hidden-from-users.-This-enhancement-streamlines-the-template-management-process-and-improves-the-syncing-of-workflows-and-templates.)
- [Benefits](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#Benefits)
- [What’s New](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#What%E2%80%99s-New)
- [How to Use](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#How-to-Use)
- [Note](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#Note)
- [Limitations](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#Limitations)
- [FAQs](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow#FAQs)

#### **Benefits**

- #### **Clean Interface:** The target location now shows only original templates and workflows.

- **Reduced Clutter:** Only core templates and workflows are visible, improving navigation.

- **Reliable Syncing:** Email action templates are automatically mapped and synced with workflows.


#### **✅What’s New**

- **Clean Target List View:** Only original templates are displayed in the target location’s template list, while email action templates are hidden but still imported in the background.

- **Streamlined Snapshot Listing:** The snapshot modal now only shows original templates and workflows. Email action templates remain hidden but are imported and mapped in the background.

- **Improved Sync Logic:** Syncing works as expected when both the workflow and template are pushed together, or if the template is pushed before the workflow.


#### **⚒️How to Use**

1. **Take a Snapshot:** From the source location, select the workflows and templates to snapshot.

2. **View in Target Location:** In the target location, only original templates and workflows will appear in the template list.

3. **Automatic Background Management:** Email action templates are automatically imported and mapped to the selected workflows, with no additional user action required.


#### **NOTE :**

#### To ensure expected behaviour, **existing workflows and email actions must be deleted and re-pushed after a snapshot refresh** with the snapshot to apply the latest changes.

#### **⏳Limitations**

- **Email Action Availability:** Email actions won't be available, if only the workflow is pushed without its linked template. Mapping and sync will fail if the template is pushed after the workflow. (Known limitation from snapshot)

- **Sync Failures:** Mapping and syncing will fail if the template is pushed after its corresponding workflow.

- **Bulk Deletion Not Supported:** Email actions do not support bulk deletion. Developer help is required for mass deletes.

#### **❓FAQs**

#### **Q1: Will email action templates still be imported?**   **A:** Yes, email action templates will still be imported in the background and mapped to the relevant workflows, but they will not appear in the template list.  **Q2: What happens if I push only a workflow without its template?**  **A:** If you push only a workflow without its associated template, email actions will not be available, and syncing will fail.  **Q3: Can I bulk delete email action templates?**  **A:**Bulk deletion of email action templates is not currently supported. For mass deletes, development help is required.****  **Q4: How do I apply the latest changes?**  **A: **To apply the latest changes, delete old workflows and email actions, and then re-push them using the updated snapshot.****  **Q5: Is the syncing process affected if the template is pushed after the workflow?**   **A: **Yes, syncing will fail if the template is pushed after the workflow. For proper syncing, ensure the template is pushed before the workflow or both are pushed together.****

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910394/original/FzGnQNGqbCsZG0jxRFErxNMkYETon4ZHkw.png?1754332069)![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910424/original/HGMyr4Pb2sXIB0c4a2GGVS9u0_PBQG5U9w.jpeg?1754332109)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050910434/original/hm-1E7frTuGBaKnIzLPfd3bvFw0NR2QiWw.png?1754332141)

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

- [Snapshot Workflow Email Action – Enhanced Flow](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow)
- [How to use the Sync Edit Checkbox for Email Actions in Workflows(Continuous Sync)](https://help.gohighlevel.com/support/solutions/articles/155000006141-how-to-use-the-sync-edit-checkbox-for-email-actions-in-workflows-continuous-sync-)
- [New UI for Email Actions in workflows](https://help.gohighlevel.com/support/solutions/articles/155000006550-new-ui-for-email-actions-in-workflows)
- [New UI for Email creation via Bulk action in Contacts](https://help.gohighlevel.com/support/solutions/articles/155000006551-new-ui-for-email-creation-via-bulk-action-in-contacts)
- [How to analyze workflow campaigns?](https://help.gohighlevel.com/support/solutions/articles/155000003902-how-to-analyze-workflow-campaigns-)
- [Managing Email Templates in Workflow Steps](https://help.gohighlevel.com/support/solutions/articles/155000005553-managing-email-templates-in-workflow-steps)

## Related Articles

- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [Conversation AI Flow Builder](https://help.gohighlevel.com/support/solutions/articles/155000006515-conversation-ai-flow-builder)
- [How to use the Sync Edit Checkbox for Email Actions in Workflows(Continuous Sync)](https://help.gohighlevel.com/support/solutions/articles/155000006141-how-to-use-the-sync-edit-checkbox-for-email-actions-in-workflows-continuous-sync-)
- [Workflow Action - Drip](https://help.gohighlevel.com/support/solutions/articles/155000003360-workflow-action-drip)
- [Workflow Action – Create Company or Associated Contact](https://help.gohighlevel.com/support/solutions/articles/155000006574-workflow-action-create-company-or-associated-contact)
- [Workflow Action - Update Associated Company](https://help.gohighlevel.com/support/solutions/articles/155000006606-workflow-action-update-associated-company)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005856-snapshot-workflow-email-action-enhanced-flow/hit)