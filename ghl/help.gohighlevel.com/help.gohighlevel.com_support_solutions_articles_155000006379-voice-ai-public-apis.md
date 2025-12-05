---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis"
title: " Overview of the Voice AI Public APIs in HighLevel. : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Voice AI](https://help.gohighlevel.com/support/solutions/folders/155000000930)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Voice AI](https://help.gohighlevel.com/support/solutions/folders/155000000930)
6. Voice AI Public APIs

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

# Voice AI Public APIs

Modified on: Mon, 22 Sep, 2025 at 3:14 PM

HighLevel offers Voice AI Public APIs so you can programmatically manage agents and actions, retrieve call logs and transcripts, and connect real‑time webhooks to your workflows. This article gives a high‑level overview and links to the **official API documentation** for technical details.

* * *

**TABLE OF CONTENTS**

- [What are Voice AI Public APIs?](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#What-are-Voice-AI-Public-APIs?)
  - [Key Benefits of Voice AI Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Key-Benefits-of-Voice-AI-Public-APIs)
  - [Voice AI API Documentation](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Voice-AI-API-Documentation)
  - [Call Log APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Call-Log-APIs)
  - [Agents APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Agents-APIs)
  - [Actions APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Actions-APIs)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Frequently-Asked-Questions)
  - [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis#Related-Articles)

* * *

# **What are Voice AI Public APIs?**

The Voice AI Public APIs give you direct access to configure agents, manage actions, retrieve call data, and integrate web-hooks into your workflows. This elevates Voice AI from a product feature to an extensible capability that can be integrated directly into your workflows and applications.

Instead of limiting Voice AI to in-app controls, you can:

- **Manage Agents & Actions:** Create, update, and organize agents and their behaviors via API.

- **Retrieve Call Data:** Access logs and transcripts for reporting, compliance, or analytics.

- **Leverage Webhooks:** Receive real-time call outcomes, transcripts, and summaries in your own systems.

[Link to API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/dashboard/index.html)

* * *

## **Key Benefits of Voice AI Public APIs**

- **Data Access:** Pull call outcomes, transcripts, and metrics for detailing tracking and reporting

- **Workflow Integration:** Automate setup and tailor Voice AI to fit your applications and operational needs

- **Extensibility** Public APIs make Voice AI not just usable, but buildable

* * *

## **Voice AI API Documentation**

API Documentation for Voice AI Public APIs includes details on Call Logs, Agents and Actions. Access requirements, environments, and auth details may evolve. Always refer to the API docs for the latest details.

[Click here to access Voice AI API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/dashboard/index.html)

* * *

## **Call Log APIs**

Call Log APIs provide access to calls handled by Voice AI; supporting analytics, quality reviews, and compliance. Use it to list calls with filters or fetch individual call details, including transcripts when available. See API Reference docs for additional details.

- **List Call Logs:** Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.

- **Get Call Log:** Returns a call log by call ID


[Click here to access Voice AI API Documentation on Call Logs](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/dashboard/index.html)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054329203/original/ATZxLVzhlZt3oQxz_cmtFfJOYtMjm__3TA.jpeg?1758567297)

* * *

## **Agents APIs**

The Agents APIs lets you programmatically create, list, read, update, and delete Voice AI agents so you can roll out consistent configurations across locations and environments. See API Reference docs for additional details.

- **Create Agent:** Create a new Voice AI agent configuration and settings

- **Patch Agent:** Partially update an existing Voice AI agent

- **List Agents:** Retrieve a paginated list of agents for given location

- **Get Agent:** Retrieve detailed configuration and settings for a specific Voice AI agent

- **Delete Agent:** Delete a Voice AI agent and all its configurations


[Click here to access Voice AI API Documentation on Agents](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/agents)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054329474/original/lHnONzwZA9edv9JpYFenbooKo5hg5kBs0w.png?1758567675)

* * *

## **Actions APIs**

Actions define what an agent can do; such as invoking a webhook, retrieving data, or posting results. The Actions APIs enable you to create and update these behaviors programmatically and keep them synchronized with your systems. See API Reference docs for additional details.

- **Create Agent Action:** Create a new action for a voice AI agent. Actions define specific behaviors and capabilities for the agent during calls.

- **Update Agent Action:** Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.

- **Get Agent Action:** Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.

- **Delete Agent Action:** Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

[Click here to access Voice AI API Documentation on Actions](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/actions)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054329625/original/kUXx2iuDCi72uXhPvUaW2YYM_CMoqUtBIg.png?1758567937)

* * *

## **Frequently Asked Questions**

**Q: Can I manage voices via API?**

Access to retrieve the list of available voices and fetch details, so you can align an agent with the right voice. Until it is released, configure voices through supported methods in the UI.

**Q: Do I need special permissions to use these APIs?**

must have appropriate HighLevel access to manage Voice AI and read call data. Coordinate with your account admin if you can’t access certain resources.

**Q: Where can I find the most current endpoints and request/response schemas?**

Always use the official API docs: [Click here to view API Documentation](https://marketplace.gohighlevel.com/docs/ghl/voice-ai/dashboard)

* * *

## **Related Articles**

- [HighLevel API](https://help.gohighlevel.com/en/support/solutions/articles/48001060529)

- [Private Integrations: Everything you need to know](https://help.gohighlevel.com/en/support/solutions/articles/155000003054)

- [How to Use Webhook.site to Troubleshoot your API Requests](https://help.gohighlevel.com/en/support/solutions/articles/48001212085)

- [AI Voice Agents Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000003911)

- [Call Logs for Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000005900)

- [Voice AI Agents Dashboard](https://help.gohighlevel.com/en/support/solutions/articles/155000004693)

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

- [AI Voice Agents Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview)
- [Creating Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000004107-creating-voice-ai-agents)
- [Testing Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000004108-testing-voice-ai-agents)
- [Inbound Call Flow for Voice AI calls](https://help.gohighlevel.com/support/solutions/articles/155000003431-inbound-call-flow-for-voice-ai-calls)
- [Working hours for AI Employee](https://help.gohighlevel.com/support/solutions/articles/155000004139-working-hours-for-ai-employee)
- [Voice AI: Multi-Language Support](https://help.gohighlevel.com/support/solutions/articles/155000004683-voice-ai-multi-language-support)

## Related Articles

- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions)
- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)
- [AI Voice Agents Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview)
- [Twilio Numbers Support](https://help.gohighlevel.com/support/solutions/articles/155000005210-twilio-numbers-support)
- [Working hours for AI Employee](https://help.gohighlevel.com/support/solutions/articles/155000004139-working-hours-for-ai-employee)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis/hit)