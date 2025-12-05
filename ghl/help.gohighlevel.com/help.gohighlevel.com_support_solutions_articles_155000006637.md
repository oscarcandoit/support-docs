---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006637"
title: " AI Agents Knowledge Base Tables : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006637#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
4. [Knowledge Bases](https://help.gohighlevel.com/support/solutions/folders/155000001371)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006637#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [AI Employee](https://help.gohighlevel.com/support/solutions/155000000184)
   - [Knowledge Bases](https://help.gohighlevel.com/support/solutions/folders/155000001371)
6. AI Agents Knowledge Base Tables

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

# AI Agents Knowledge Base Tables

Modified on: Tue, 14 Oct, 2025 at 9:22 AM

Give your AI bots instant access to spreadsheets! Table Search in HighLevel Knowledge Base lets you upload CSV files and query them with natural-language questions, turning static rows of data into dynamic knowledge your bots can use during conversations.

* * *

**TABLE OF CONTENTS**

- [What is Table Search in Knowledge Base?](https://help.gohighlevel.com/support/solutions/articles/155000006637#What-is-Table-Search-in-Knowledge-Base?)
  - [Key Benefits of Table Search in Knowledge Base](https://help.gohighlevel.com/support/solutions/articles/155000006637#Key-Benefits-of-Table-Search-in-Knowledge-Base)
  - [Setup Table Search in Knowledge Base](https://help.gohighlevel.com/support/solutions/articles/155000006637#Setup-Table-Search-in-Knowledge-Base)
  - [CSV File Requirements](https://help.gohighlevel.com/support/solutions/articles/155000006637#CSV-File-Requirements)
  - [Semantic Search Intelligence](https://help.gohighlevel.com/support/solutions/articles/155000006637#Semantic-Search-Intelligence)
  - [Smart Table Processing](https://help.gohighlevel.com/support/solutions/articles/155000006637#Smart-Table-Processing)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006637#Frequently-Asked-Questions)
  - [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006637#Related-Articles)

* * *

# **What is Table Search in Knowledge Base?**

Table Search adds a new “Table Source” type to HighLevel Knowledge Base. By ingesting CSV files (up to 30,000 rows and 20 columns per location), the platform semantically indexes every record so your AI bots can answer questions about customers, inventory, transactions, or any other structured data you provide. Unlike keyword search, HighLevel applies semantic similarity matching, allowing users to ask plain-English questions and receive context-aware results.

* * *

## **Key Benefits of Table Search in Knowledge Base**

Bring your spreadsheet data to every AI conversation with advantages that matter to end users:

- Natural-language queries on tabular data—no formulas or filters required

- Semantic search intelligence for accurate, context-aware answers

- Supports large CSVs (30 k rows, 20 columns) without performance tuning

- Unlocks data that web-page and document sources can’t capture

- Empowers bots to handle customer records, product catalogs, KPIs, and more

* * *

## **Setup Table Search in Knowledge Base**

1. Open AI Agents → Knowledge Base.
2. Edit an existing Knowledge Base, or click Create Knowledge Base and give it a name & description.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756502/original/J50-2Chz415nk1e0iyrGcXJB2iHp9O7iVw.png?1760136169)
3. Click Add Source, then choose Table Source.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756534/original/iU6cucXmwDK_dZnJjCO3LiyUGecbP9bXSQ.png?1760136349)
4. Upload your CSV file (drag-and-drop or file picker).



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756540/original/J3Fcd_FMv90O9VTncaU80MVmb1Mgz8aXVg.png?1760136398)
5. Review detected columns; adjust data types if prompted.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756606/original/mZDrXpAvED_REXhpsPMHeqf9BEEj33DU6g.png?1760136685)
6. Click Save to index the table. Progress shows chunking status.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756682/original/GRlJrKSRqdfk6tkYr9EwUwICx9-7SVZ8lw.png?1760137334)
7. Attach the Knowledge Base to your AI bot (Chat, Voice, or Workflow AI) as usual.

8. Test a sample question like “Which customers have overdue invoices?” to confirm results.

* * *

## **CSV File Requirements**

Understanding the file specifications ensures a flawless upload.

- Format: .csv only (UTF-8 recommended)

- Size limits: 30,000 rows and 20 columns per location (under 20MB per file)

- Header row: First row must contain column names

- Data types: Automatic schema detection with 80 % confidence threshold

- Clean data: Remove null values, hidden formulas, merged cells, etc

The CSV can be rejected at several points. For example, if the format of the CSV is accepted, the data itself might still contain an error.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756639/original/urfsUUfSsQNa9gkEA3ky9QT_lVhFQVjZzg.png?1760136946)

In this case you can inspect the CSV manually in a spreadsheet program or even a text editor.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055756630/original/9pUQ1ro4k9ZiwjCvuA_OWRJEXhN18INQZw.png?1760136905)

* * *

## **Semantic Search Intelligence**

HighLevel converts each table row into vector embeddings so the bot can “understand” meanings rather than exact words. This enables queries like “Show me customers who complained about billing” or “Which orders shipped overnight last week?” The engine compares the user’s question to every row chunk and returns the most semantically similar matches—no SQL needed.

* * *

## **Smart Table Processing**

Behind the scenes, HighLevel:

- Detects column types (text, number, date, etc.) with 80 % accuracy

- Chunks rows into groups of five (max 2,000 characters) for efficient indexing

- Stores chunk metadata so answers can reference the correct records

* * *

## **Frequently Asked Questions**

**Q: Can I upload Excel (.xlsx) files?**

A: Not yet—export or save your sheet as CSV before uploading.

**Q: What happens if my CSV exceeds 30k rows?**

A: Split the file into smaller chunks; create multiple Table Sources within the same Knowledge Base.

**Q: How soon are new CSV uploads available to bots?**

A: Typically within a few minutes—the indexing progress bar will show when processing is complete.

**Q: Does Table Search support filters or sorting in the query?**

A: Filtering, comparison, and sorting features are coming soon; for now, ask descriptive questions or refine with follow-ups.

**Q: Will table data appear in the Response Info sidebar?**

A: Yes—rows that informed the answer are cited, so you can verify or edit them on the spot.

**Q: Can I restrict table access to specific bots?**

A: Yes—only bots linked to the Knowledge Base containing your Table Source can query it.

**Q: How is privacy handled for sensitive CSV data?**

A: Table Sources inherit existing Knowledge Base security; only users with access to that Knowledge Base can see or query the data.

* * *

## **Related Articles**

- [Conversation AI - New Knowledge Sources & Quality Upgrades](https://help.gohighlevel.com/en/support/solutions/articles/155000006456)
- [Knowledge Base Integration for Voice AI Agents](https://help.gohighlevel.com/en/support/solutions/articles/155000005266)
- [View & Edit AI Response Info in Conversations](https://help.gohighlevel.com/en/support/solutions/articles/155000004183)

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

- [Knowledge Base - Enhanced Web Crawler](https://help.gohighlevel.com/support/solutions/articles/155000006625-knowledge-base-enhanced-web-crawler)
- [AI Agents Knowledge Base Tables](https://help.gohighlevel.com/support/solutions/articles/155000006637-ai-agents-knowledge-base-tables)
- [Auto Refresh of Knowledge Base Trained Links](https://help.gohighlevel.com/support/solutions/articles/155000006539-auto-refresh-of-knowledge-base-trained-links)
- [Knowledge Base - Document & Rich-Text Support](https://help.gohighlevel.com/support/solutions/articles/155000006671-knowledge-base-document-rich-text-support)

## Related Articles

- [Conversation AI - New Knowledge Sources & Quality Upgrades](https://help.gohighlevel.com/support/solutions/articles/155000006456-conversation-ai-new-knowledge-sources-quality-upgrades)
- [Knowledge Base - Enhanced Web Crawler](https://help.gohighlevel.com/support/solutions/articles/155000006625-knowledge-base-enhanced-web-crawler)
- [Knowledge Base Integration for Voice AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000005266-knowledge-base-integration-for-voice-ai-agents)
- [Knowledge Base - Document & Rich-Text Support](https://help.gohighlevel.com/support/solutions/articles/155000006671-knowledge-base-document-rich-text-support)
- [Managing Granular Permissions For Conversation AI Agents](https://help.gohighlevel.com/support/solutions/articles/155000006054-managing-granular-permissions-for-conversation-ai-agents)
- [How to Use the AI Agent Studio in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006058-how-to-use-the-ai-agent-studio-in-highlevel)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006637)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006637-ai-agents-knowledge-base-tables/hit)