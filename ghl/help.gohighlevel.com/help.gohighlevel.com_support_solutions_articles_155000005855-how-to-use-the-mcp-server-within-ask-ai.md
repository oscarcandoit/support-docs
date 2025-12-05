---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai"
title: " How to Use the MCP Server within Ask AI : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Ask AI](https://help.gohighlevel.com/support/solutions/folders/155000001210)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Ask AI](https://help.gohighlevel.com/support/solutions/folders/155000001210)
6. How to Use the MCP Server within Ask AI

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

# How to Use the MCP Server within Ask AI

Modified on: Mon, 4 Aug, 2025 at 9:42 AM

Ask AI has graduated from answering questions to executing actions. Whether you need to create a contact, reschedule an appointment, or bulk-update opportunities, you can now instruct the chat—and HighLevel’s Master Control Panel (MCP) does the work instantly. No menu diving, no tab switching, just conversational commands that save serious time.

**TABLE OF CONTENTS**

- [Key Benefits of MCP-Powered Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Key-Benefits-of-MCP-Powered-Ask-AI%C2%A0)
- [How It Works](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#How-It-Works%C2%A0)
- [Command Syntax & Examples](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Command-Syntax-&-Examples%C2%A0)
- [Safety & Permissions](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Safety-&-Permissions%C2%A0)
- [Best-Practice Prompt Recipes](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Best-Practice-Prompt-Recipes%C2%A0)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Frequently-Asked-Questions)
- [Next Steps](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai#Next-Steps)

* * *

## Key Benefits of MCP-Powered Ask AI

Educational overview: Turning chat into an action engine transforms how teams operate, collapsing long click-paths into a single sentence.

- Zero-Click Workflows: Type “Add Jane Smith to the ‘NY Leads’ pipeline”—it’s done.

- Context ↔ Action Loop: Ask for data, then act on it in the same thread (“Tag them as Hot”).

- Universal Coverage: Anything the MCP API supports—contacts, payments, automations—now runs in chat.

- Role-Aware Safety: Permissions match your user role; no one can exceed their access level.

- Audit & Undo: Every action logs to Activity Feed; destructive commands ask for confirmation.


## How It Works

1. Parse Intent: The AI identifies the verb (create, update, delete) and the object (contact, invoice).

2. Generate Payload: It maps your words to MCP fields (e.g., firstName, pipelineId).

3. Permission Check: The system verifies you have rights to run that action.

4. Confirmation (Destructive Only): For delete or bulk edits, Ask AI shows a summary and asks “Proceed?”

5. Execute & Respond: MCP runs the call; success or error details return inline and log to Audit Feed.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050898437/original/4UV9L41PxYdehA9nbIWXensUSi3SNSfYJw.png?1754318439)

## Command Syntax & Examples

|     |     |     |
| --- | --- | --- |
| Action Type | Natural-Language Example | Behind-the-Scenes MCP Call |
| Create | “Create a contact named John Doe with phone 555-1234 in Location A.” | createContact() |
| Update | “Change pipeline stage of Opportunity #456 to ‘Won’.” | updateOpportunity() |
| Query | “Show me tomorrow’s booked appointments.” | listAppointments() |
| Delete | “Delete coupon code SUMMER25.” | deleteCoupon() (confirmation required) |
| Bulk | “Tag all contacts from last week’s webinar as ‘Webinar-2025’.” | Iterates updateContact() |

Tip: End with “and show me the result” to receive a JSON snippet for quick validation.

## Safety & Permissions

- Role Enforcement: Your chat privileges mirror UI permissions—no secret back doors.

- Confirmation Prompts: Any irreversible change triggers a human “Yes / No” step.

- Audit Logs: Find every AI-initiated action under Settings ▸ Audit Logs ▸ AI Chat.

- Credit Usage: Each successful MCP command costs 1 AI credit; previews/denied commands are free.


## Best-Practice Prompt Recipes

1. Single-Action Command



   - “Create invoice for $299 for contact john@demo.com due in 30 days.”
2. Two-Step Data → Action



   - “List opportunities lost this week, then move them to ‘Re-Engage’ stage.”
3. Conditional Logic



   - “For contacts tagged ‘Trial-Ending’, if last login > 14 days ago, move to ‘Churn Risk’ pipeline.”

* * *

## Frequently Asked Questions

Q: How do I see what the AI actually sent to the server?

A: Click the timestamp of the chat reply to open the raw JSON payload in the Audit Log sidebar.

Q: Can I reverse a mistaken action?

A: Use “Undo last action” within 5 minutes or restore from backups (Contacts CSV, etc.).

Q: Are bulk actions throttled?

A: Yes—1,000 records per minute to protect system performance.

Q: Does this work on mobile?

A: Read-only today; MCP actions launch on iOS & Android in Q4 2025.

Q: Can I restrict certain verbs (e.g., delete)?

A: Admins can toggle Allow AI Deletes per role under Settings ▸ Security ▸ AI Controls.

Q: What happens if the AI misunderstands my prompt?

A: It responds with a clarification question; no action runs until you confirm.

### Next Steps

1. Open Ask AI in any Location and type “Create a test contact named Demo Bot”.

2. Check Audit Logs to view the JSON payload.

3. Try a safe bulk command (“Tag the last 5 contacts as Test”) and watch rate-limit handling.

4. Review AI Controls to ensure destructive commands match your security policy.


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

- [Introduction to Ask AI Assistant](https://help.gohighlevel.com/support/solutions/articles/155000005327-introduction-to-ask-ai-assistant)
- [Contact Summary Agent in Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005484-contact-summary-agent-in-ask-ai)
- [Funnel Creation Agent in Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005521-funnel-creation-agent-in-ask-ai)
- [How to Generate and Edit Images Using Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005764-how-to-generate-and-edit-images-using-ask-ai)
- [Conversational Editing of Content with Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005765-conversational-editing-of-content-with-ask-ai)
- [Ask AI Upgrades](https://help.gohighlevel.com/support/solutions/articles/155000006627-ask-ai-upgrades)

## Related Articles

- [Ask AI + Agent Studio Integration](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration)
- [How to Use the HighLevel MCP Server](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)
- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)
- [The Revamped Mobile App Experience - Mobile v4.0.0](https://help.gohighlevel.com/support/solutions/articles/155000006707-the-revamped-mobile-app-experience-mobile-v4-0-0)
- [How to Generate and Edit Images Using Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005764-how-to-generate-and-edit-images-using-ask-ai)
- [Funnel Creation Agent in Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005521-funnel-creation-agent-in-ask-ai)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai/hit)