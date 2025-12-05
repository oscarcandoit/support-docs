---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server"
title: " How to Use the HighLevel MCP Server : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [MCP Server](https://help.gohighlevel.com/support/solutions/folders/155000001370)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [MCP Server](https://help.gohighlevel.com/support/solutions/folders/155000001370)
6. How to Use the HighLevel MCP Server

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

# How to Use the HighLevel MCP Server

Modified on: Thu, 28 Aug, 2025 at 5:13 PM

How to Configure HighLevel's MCP Server for AI Agents - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Configure HighLevel's MCP Server for AI Agents](https://www.youtube.com/watch?v=f6pi0OFaVZg)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Why am I seeing this?](https://support.google.com/youtube/answer/9004474?hl=en)

[Watch on](https://www.youtube.com/watch?v=f6pi0OFaVZg&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 6:03

•Live

•

This article will show you how to leverage the new GoHighLevel MCP (Model Context Protocol) server to empower your AI agents and copilots to access GoHighLevel data and tools seamlessly — all via a secure, standardized HTTP protocol.

**TABLE OF CONTENTS**

- [What is the MCP Server?](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#What-is-the-MCP-Server?)
- [Key Benefits of Using the MCP Server](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Key-Benefits-of-Using-the-MCP-Server)
- [Top 21 Tools Available](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Top-21-Tools-Available)
- [Example Tool Call](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Example-Tool-Call)
- [Roadmap & Vision](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Roadmap-&-Vision)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Frequently-Asked-Questions)
- [Next Steps](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server#Next-Steps)

* * *

# What is the MCP Server?

The GoHighLevel MCP server is a standardized, secure protocol that allows AI agents to read and write data in GoHighLevel without needing SDKs or deep custom integrations. You can now give agents access to critical tools like Calendar, Contacts, Conversations, Opportunities, and Payments through a single, unified interface.

## Key Benefits of Using the MCP Server

Connecting your AI agents to GoHighLevel has never been easier or safer.

- Standardized Access: Query and update data through a unified protocol.

- Fast Integration: No SDKs required; works with any HTTP-supporting client.

- Secure: Uses private integration tokens (PITs) for granular, permission-based access.

- Scalable: Designed for future expansion to 250+ tools.

- Flexible: Supports popular clients like Cursor, Windsurf, and OpenAI Playground.


## Top 21 Tools Available

Below is the initial set of tools your AI agents can use today:

|     |     |     |     |
| --- | --- | --- | --- |
| # | Tool | Endpoint | Description |
| 1 | Get Calendar Events | calendars\_get-calendar-events | Get calendar events using userId, groupId, or calendarId. |
| 2 | Get Appointment Notes | calendars\_get-appointment-notes | Retrieve notes for a specific appointment. |
| 3 | Get All Tasks | contacts\_get-all-tasks | Retrieve all tasks for a contact. |
| 4 | Add Tags | contacts\_add-tags | Add tags to a contact. |
| 5 | Remove Tags | contacts\_remove-tags | Remove tags from a contact. |
| 6 | Get Contact | contacts\_get-contact | Fetch contact details. |
| 7 | Update Contact | contacts\_update-contact | Update a contact. |
| 8 | Upsert Contact | contacts\_upsert-contact | Update or create a contact. |
| 9 | Create Contact | contacts\_create-contact | Create a new contact. |
| 10 | Get Contacts | contacts\_get-contacts | Fetch all contacts. |
| 11 | Search Conversation | conversations\_search-conversation | Search/filter/sort conversations. |
| 12 | Get Messages | conversations\_get-messages | Retrieve messages by conversation ID. |
| 13 | Send a New Message | conversations\_send-a-new-message | Send a message to a conversation thread. |
| 14 | Get Location | locations\_get-location | Get location details by ID. |
| 15 | Get Custom Fields | locations\_get-custom-fields | Retrieve custom field definitions for a location. |
| 16 | Search Opportunity | opportunities\_search-opportunity | Search for opportunities by criteria. |
| 17 | Get Pipelines | opportunities\_get-pipelines | Fetch all opportunity pipelines. |
| 18 | Get Opportunity | opportunities\_get-opportunity | Fetch opportunity details by ID. |
| 19 | Update Opportunity | opportunities\_update-opportunity | Update opportunity details. |
| 20 | Get Order by ID | payments\_get-order-by-id | Retrieve payment order details. |
| 21 | List Transactions | payments\_list-transactions | Fetch paginated list of transactions. |

How To Set Up the MCP Server

### Step 1: Configure Your Agent/Client

Add the MCP endpoint and headers to your agent configuration:

json

CopyEdit

{

"mcpServers": {

    "prod-ghl-mcp": {

      "url": "https://services.leadconnectorhq.com/mcp/",

      "headers": {

        "Authorization": "Bearer <your-token>",

        "locationId": "<sub-account-id>"

      }

    }

}

}

### Step 2: Get Your Private Integration Token (PIT)

1. Go to Settings → Private Integrations in your GoHighLevel location.

2. Click Create New Integration.

3. Select the required scopes (listed below).

4. Copy and securely store your token.


#### Required Scopes

Make sure your PIT includes:

- View/Edit Contacts

- View/Edit Conversations

- View/Edit Conversation Messages

- View/Edit Opportunities

- View Calendars & Calendar Events

- View Locations

- View Payment Orders & Transactions

- View Custom Fields

- View Forms


### Step 3: Start Building!

Your agents can now call tools using natural language instructions, seamlessly translated into secure API calls via MCP.

## Example Tool Call

Python example:

python

CopyEdit

import requests

headers = {

    "Authorization": "Bearer YOUR\_PIT\_TOKEN",

    "locationId": "YOUR\_LOCATION\_ID"

}

data = {

    "tool": "contacts\_get-contact",

    "input": {

        "contactId": "abc123"

    }

}

response = requests.post(

    "https://services.leadconnectorhq.com/mcp/",

    headers=headers,

    json=data

)

print(response.json())

## Roadmap & Vision

The current MCP release is just the beginning. Our roadmap includes:

- Individual MCP servers dedicated to specific services for targeted workflows.

- npx package to support clients without native HTTP support (e.g., Claude Desktop).

- OAuth support for advanced authorization flows.

- Expansion to 250+ tools to create a true unified orchestrator layer for AI agents.

- Enable complete automation of business processes across all GoHighLevel modules.


* * *

## Frequently Asked Questions

Q: Can I use this with OpenAI Playground or Claude?

Yes! Any client supporting HTTP requests can integrate with MCP.

Q: Do I need to install an SDK?

No SDK is required — MCP uses a standard HTTP protocol.

Q: Is my data secure?

Yes. Data access is fully scoped via Private Integration Tokens and secured through HTTPS.

Q: Can I restrict what tools an agent can use?

Yes. You can control access by limiting scopes in your PIT.

Q: What if I need a new tool or endpoint?

Reach out with feedback! We're actively expanding the available toolset.

### Next Steps

- Create your Private Integration Token and configure scopes.

- Update your AI agent or client configuration with the MCP endpoint.

- Start building agent-driven automations and integrations today!

- Provide feedback to help shape future expansions and new tool support.


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

- [How to Use the HighLevel MCP Server](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)

## Related Articles

- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)
- [Ask AI + Agent Studio Integration](https://help.gohighlevel.com/support/solutions/articles/155000006677-ask-ai-agent-studio-integration)
- [How to Use the MCP Server within Ask AI](https://help.gohighlevel.com/support/solutions/articles/155000005855-how-to-use-the-mcp-server-within-ask-ai)
- [Using Zoho as your SMTP Provider](https://help.gohighlevel.com/support/solutions/articles/48001173743-using-zoho-as-your-smtp-provider)
- [WordPress Access & Activity Logs](https://help.gohighlevel.com/support/solutions/articles/155000004141-wordpress-access-activity-logs)
- [The Revamped Mobile App Experience - Mobile v4.0.0](https://help.gohighlevel.com/support/solutions/articles/155000006707-the-revamped-mobile-app-experience-mobile-v4-0-0)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005741-how-to-use-the-highlevel-mcp-server/hit)