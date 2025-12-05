---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration"
title: " Ask AI + Agent Studio Integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Ask AI](https://help.gohighlevel.com/support/solutions/folders/155000001210)
6. Ask AI + Agent Studio Integration

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

# Ask AI + Agent Studio Integration

Modified on: Wed, 15 Oct, 2025 at 10:29 AM

Connect the conversational power of Ask AI with the workflow flexibility of Agent Studio. This integration lets you route chat queries to custom AI agents, automate multi-step actions, and deliver answers faster—no code required.

* * *

# **What is Ask AI + Agent Studio Integration?**

Ask AI × Agent Studio Integration links HighLevel’s in-app AI assistant (“Ask AI”) with any agent you build in Agent Studio. By describing each agent’s capabilities and mapping it to Ask AI, the assistant can decide when to pass a user’s request to that agent, run the workflow, and return results in the same chat thread.

* * *

## **Key Benefits of Ask AI + Agent Studio Integration**

Discover why this upgrade is a game-changer for agencies and sub-accounts:

- **Unified chat + workflow experience:** Trigger complex automation without leaving Ask AI.

- **Intelligent routing:** Ask AI chooses the best agent based on your capability descriptions.

- **Dynamic data handling:** Ask users for missing inputs at run-time or pre-fill custom values.

- **Faster execution:** Launch multi-step flows (emails, ads, lookups, image generation, etc.) instantly.

- **Scales with your creativity:** Combine web search, MCP, API calls, and more in one agent.

* * *

## **Seamless Agent Mapping**

Define which Agent Studio agent should handle specific request types so Ask AI can route conversations automatically. This mapping eliminates manual command syntax—users simply ask, and the right agent springs into action.

- Assign an existing Agent Studio agent to Ask AI in just a few clicks.

- Add a plain-language “Agent Description” and list key skills (e.g., “Creates ad copy and emails contacts”).

- The assistant evaluates every user prompt against these descriptions to decide when to invoke the agent.

* * *

## **Dynamic Variable Configuration**

Give each agent the exact data it needs—no hard-coding required. This flexibility keeps workflows precise while maintaining a natural chat experience.

- Variables support text, numbers, choices, and more, matching the robust variable management options already available in Agent Studio.

- For any input variable you created in Agent Studio, choose to:




1. Enter a fixed default value

2. Mark it “Ask at runtime,” prompting Ask AI to collect the value from the user before execution.

* * *

## **Building Agents with Tools, Generative & Capture Nodes**

Agent Studio’s drag-and-drop builder lets you craft sophisticated agents that pair perfectly with Ask AI.

Design once—then call the agent from Ask AI whenever needed.

- **Tool Nodes:** Web Search, MCP, API, Knowledge Base, and more.

- **Generative Nodes:** Use LLM prompts to write copy, summaries, or images.

- **Capture Nodes:** Gather structured user inputs (text or choice) for downstream steps.

* * *

## **How To Setup Ask AI + Agent Studio Integration**

Proper setup ensures seamless hand-offs between chat and automation.

1. Build or open an agent in Agent Studio (AI Agents → Agent Studio).



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056073861/original/6Dq04UmYlG8sUVdomzzp5YeQr2PfAGaA0A.png?1760541552)

2. Confirm your workflow nodes, variables, and lifecycle stage (move to Production).

3. Go to Settings → Ask AI → Agent Mapping (or open Ask AI and click “Manage Agents”).



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056073652/original/ioyke5BckzjF3I1UsbLLqbsWhEdj2f0hLw.png?1760541407)

4. Click “Map Agent,” select your Agent Studio agent, and add:




   - Step 1: Select Agent \- location and specific agent.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074058/original/NqqZ4w1FWWsa_7fNsWwErQKk6mGMFSaVrA.png?1760541685)

   - Step 2: Configure Integration \- Agent name, description, and capabilities.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074467/original/2PP6E4GBlNw62x3Wj7uJ7Kuj4FPs4nuNDA.png?1760541851)

   - Step 3: Variable Mapping \- variable name and value (system custom value or created on the fly from the conversation with Ask User At Runtime).



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056074797/original/ALpd5Nk_3MRSUw5XdpsCeP5OjdOAQIOR_g.png?1760542016)
5. Save. Test in Ask AI chat by typing a relevant request (e.g., “Create ad copy for Jane Doe”).

6. Verify the chat shows: “Running \[Agent Name\]…” followed by the agent’s results.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056075095/original/Xzsv8GbTxgFZBgZVbIF8LgGbD_BGu_twbw.png?1760542148)

* * *

## **Frequently Asked Questions**

**Q. Do I need the AI Employee add-on to use this integration?**

Yes—Ask AI and Agent Studio require the Unlimited AI Employee plan.

**Q. Can I map multiple agents to Ask AI?**

Absolutely; Ask AI will evaluate each mapped agent’s description to find the best match.

**Q. What happens if no agent matches a user’s prompt?**

Ask AI will respond normally using its built-in capabilities.

**Q. Does the agent run in staging or production?**

Only agents published to “Production” are available for mapping.

**Q. Are variable prompts branded?**

Runtime questions inherit your sub-account’s chat styling for a seamless user experience.

**Q. Can I update an agent after it’s mapped?**

Yes—edits in Agent Studio are reflected instantly; no remapping needed.

**Q. Is there a limit to the number of variables?**

No set limit, but simpler agents yield faster responses.

**Q. How do I monitor agent performance?**

Use the Agent Studio “Run Logs” and Ask AI chat history to review executions.

* * *

### **Related Articles**

- [Introduction to Ask AI Assistant](https://help.gohighlevel.com/en/support/solutions/articles/155000005327)

- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/en/support/solutions/articles/155000006058)

- [How to Use the MCP Server within Ask AI](https://help.gohighlevel.com/en/support/solutions/articles/155000005855)

- [Contact Summary Agent in Ask AI](https://help.gohighlevel.com/en/support/solutions/articles/155000005484)

- [Knowledge Base Integration for Voice-AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000005266)

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

- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)
- [Ask AI Upgrades](https://help.gohighlevel.com/support/solutions/articles/155000006627-ask-ai-upgrades)
- [Funnel Creation Agent in Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005521-funnel-creation-agent-in-ask-ai)
- [Intent based Routing in Agent Studio (AI Router Node)](https://help.gohighlevel.com/support/solutions/articles/155000006436-intent-based-routing-in-agent-studio-ai-router-node-)
- [Knowledge Base Integration for Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000005266-knowledge-base-integration-for-voice-ai-agents)
- [AI Product Pricing Update](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration/hit)