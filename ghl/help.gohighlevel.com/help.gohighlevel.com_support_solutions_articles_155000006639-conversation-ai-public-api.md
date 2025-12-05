---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api"
title: " Conversation AI Public API : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Conversation AI](https://help.gohighlevel.com/support/solutions/folders/155000000929)
6. Conversation AI Public API

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

# Conversation AI Public API

Modified on: Tue, 14 Oct, 2025 at 9:22 AM

HighLevel’s Conversation AI API gives developers programmatic control over AI agents, actions, and conversation generations. Use secure tokens and granular scopes to automate agent setup, integrate with external apps, and export conversation data for analytics or compliance. This guide explains what the API is, the benefits, authentication options (PIT & JWT), endpoint families, and step-by-step setup with screenshots.

* * *

**TABLE OF CONTENTS**

- [What is the Conversation AI API?](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#What-is-the-Conversation-AI-API?)
  - [Key Benefits of Conversation AI API](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Key-Benefits-of-Conversation-AI-API)
  - [Authentication (PIT & JWT)](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Authentication-(PIT-&-JWT))
  - [API Documentation](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#API-Documentation)
    - [Actions](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Actions)
    - [Agents](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Agents)
    - [Generations](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Generations)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api#Frequently-Asked-Questions)

* * *

# **What is the Conversation AI API?**

Conversation AI API exposes the same core capabilities available in the Conversation AI UI (creating and managing agents, attaching actions, and pulling AI response details) so your team can automate configuration and connect Conversation AI to your own systems. Using this API, you can provision agents at scale, script action updates, and retrieve message-level generation data for reporting and audits.

* * *

## **Key Benefits of Conversation AI API**

Understanding practical benefits helps you decide when to use the API versus the UI. These points highlight the outcomes teams typically automate: faster provisioning, consistent configuration at scale, and reliable access to detailed conversation data.

- Faster onboarding: Automate agent creation and action attachment for new locations or clients in minutes.

- Scalable configuration: Apply consistent agent settings and actions across many sub-accounts via scripts or CI/CD jobs.

- Deeper analytics: Retrieve generations (AI response details) to power dashboards, QA workflows, audits, and compliance exports.

- Flexible integration: Orchestrate HighLevel with your internal tools—trigger workflows, track outcomes, and log events externally.

- Least‑privilege security: Use read-only or write scopes to limit access precisely to what your integration needs.

* * *

## **Authentication (PIT & JWT)**

Choosing the right auth method ensures reliable, secure access. Personal Integration Tokens (PIT) are quick to generate and scope, while JSON Web Tokens (JWT) support OAuth-based app flows. Both can be used for Conversation AI API access.

Open Settings → Private Integrations in your HighLevel sub‑account (location).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757617/original/ts1j0byLnjbb0jt99rFE5zAeNMciISFLfw.png?1760142557)

Give it basic info (name and description).

Select the Conversation AI scopes.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757647/original/cL1YDtaxgdGf1N_fDfvyZiHWKMg074PACQ.png?1760142690)

Create the token and make a copy of it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757653/original/aM2uidnmv1wZAV2tiKGaxvONRM7KugMBpQ.png?1760142733)

Maintain and use the token appropriately.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055757662/original/1_4zzbMedmTiu_KnHwljW4LoQPj0fk235Q.png?1760142791)

* * *

## **API Documentation**

View the full API Documentation here [Marketplace API 2.0 Conversation AI Actions](https://marketplace.gohighlevel.com/docs/ghl/conversation-ai/actions)

### **Actions**

- Attach Action To Agent
- List Actions For An Agent
- Get Action By ID
- Update Action
- Remove Action From Agent
- Update Followup Settings

### **Agents**

- Create An Agent
- Search Agents
- Update Agent
- Get Agent
- Delete Agent

### **Generations**

- Get Generation Details

* * *

## **Frequently Asked Questions**

**Q: Do I need a Sub‑Account or Agency token for Conversation AI?**

A: Use a Sub‑Account token so calls act within the correct location context.

**Q: Can I use both PIT and JWT?**

A: Yes. You can authenticate with either method. Choose PIT for simple server‑to‑server integrations; use JWT for OAuth app flows.

**Q: Where do I find the agentId?**

A: Create or search agents via the Agents API, then use the returned id field in subsequent calls.

**Q: How do I audit AI responses programmatically?**

A: Use the Generations endpoint to retrieve message‑level response details and store them in your analytics or compliance system.

**Q: What causes a 403 when my token looks valid?**

A: Most often, the token lacks the required scope or isn’t a Sub‑Account token for the target location.

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

- [Using Conversation AI on Mobile (HighLevel & LeadConnector)](https://help.gohighlevel.com/support/solutions/articles/155000005184-using-conversation-ai-on-mobile-highlevel-leadconnector-)
- [Bot Status for Individual Contacts](https://help.gohighlevel.com/support/solutions/articles/155000004096-bot-status-for-individual-contacts)
- [Guided Form Based Setup for Conversation AI](https://help.gohighlevel.com/support/solutions/articles/155000005382-guided-form-based-setup-for-conversation-ai)
- [Conversation AI Agents Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000005427-conversation-ai-agents-dashboard)
- [Conversation AI: Snapshot Support - How to Snapshot Fully Configured Conversation AI Bots](https://help.gohighlevel.com/support/solutions/articles/155000005460-conversation-ai-snapshot-support-how-to-snapshot-fully-configured-conversation-ai-bots)
- [Cancellation and Rescheduling of Appointments in Form Based Bots](https://help.gohighlevel.com/support/solutions/articles/155000005503-cancellation-and-rescheduling-of-appointments-in-form-based-bots)

## Related Articles

- [Voice AI Public APIs](https://help.gohighlevel.com/support/solutions/articles/155000006379-voice-ai-public-apis)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)
- [Conversation AI Bot - Explained](https://help.gohighlevel.com/support/solutions/articles/155000001335-conversation-ai-bot-explained)
- [Voice AI Custom Actions](https://help.gohighlevel.com/support/solutions/articles/155000005461-voice-ai-custom-actions)
- [Using Conversation AI on Mobile (HighLevel & LeadConnector)](https://help.gohighlevel.com/support/solutions/articles/155000005184-using-conversation-ai-on-mobile-highlevel-leadconnector-)
- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api/hit)