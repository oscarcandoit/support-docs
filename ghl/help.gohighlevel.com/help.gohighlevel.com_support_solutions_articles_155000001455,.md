---
url: "https://help.gohighlevel.com/support/solutions/articles/155000001455,"
title: " How Funnels and Stage distribution widgets work : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000001455,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Dashboards](https://help.gohighlevel.com/support/solutions/48000449586)
4. [Dashboard Widgets](https://help.gohighlevel.com/support/solutions/folders/155000000192)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000001455,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Dashboards](https://help.gohighlevel.com/support/solutions/48000449586)
   - [Dashboard Widgets](https://help.gohighlevel.com/support/solutions/folders/155000000192)
6. How Funnels and Stage distribution widgets work

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

# How Funnels and Stage distribution widgets work

Modified on: Thu, 15 Feb, 2024 at 10:59 PM

Funnel Widget Chart Interpretation

1×

3 min⚡️3 min 58 sec3 min 10 sec2 min 39 sec2 min 7 sec1 min 52 sec1 min 35 sec1 min 16 sec

![](https://cdn.loom.com/sessions/thumbnails/d66bc16cc90f4d2ab3182e0d4b549053-00001.jpg)

Your user agent does not support the HTML5 Video element.

1×

3 min⚡️3 min 58 sec3 min 10 sec2 min 39 sec2 min 7 sec1 min 52 sec1 min 35 sec1 min 16 sec

**TABLE OF CONTENTS**

- [Funnel Widget](https://help.gohighlevel.com/support/solutions/articles/155000001455,#Funnel-Widget)
  - [How to interpret Funnel widget data](https://help.gohighlevel.com/support/solutions/articles/155000001455,#How-to-interpret-Funnel-widget-data)
- [Stage Distribution Widget](https://help.gohighlevel.com/support/solutions/articles/155000001455,#Stage-Distribution-Widget)

# **Funnel Widget**

A Funnel widget is designed to illustrate a step-by-step process in which data gradually funnels from one stage to another. This visualization is commonly employed to monitor the journey of leads or opportunities as they advance through different stages of a conversion or sales funnel.

You can easily switch between various funnels using the dropdown menu provided within the widget.

**Please note:**

- To access this widget, you need to have **Dashboard stats** permission enabled. Additionally, for a pipeline to be visible in the Funnel Chart, you must enable the ' **Visible in Funnel Chart**' toggle within Pipeline Settings.



![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012951146/original/cTSOZtTEL17-SDwspGCpZrGSA7_tm8TgZg.png?1700205501)

- The opportunities **last\_status\_change\_date** is considered while calculating the count in each stage on the chart instead of the "Created" date.


## **How to interpret Funnel widget data**

The funnel widget shows sequential data of the current and the next stages in each section.

For example, Let's assume we have a pipeline with the following stages and data![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012951161/original/CprkowlgBkz3iJWsBVNXYX5XIjS7iS6w8g.jpeg?1700205501)

**Stage 1: Registered** ➝ 229 Leads

**Stage 2: Trial Purchased** ➝ 4 Leads

**Stage 3: Lesson 1 Watched** ➝ 32 Leads

**Stage 4: Lesson 2 Watched** ➝ 7 Leads

**Stage 5: Lesson 3 Watched** ➝ 0 Leads

Now on the funnel widget, we will see the data as follows

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155012951145/original/nMSy7MFVigVXSbstnmyTd6s7KOgtGyg3QA.png?1700205501)

- We will see 6 sections on the widget, 5 for each of our stages and a WON section at the end as it is the desired exit criteria for an opportunity
- The first section (Registered) will show the total number of opportunities that entered the pipeline. In our case, it will show us 272 which is the total opportunities in the pipeline at any stage and with any status (open, lost, won or abandoned)
- In the second section (Trial purchased), we move forward in the stage sequence and remove the opportunities that are still in the previous stage. Here we see 43, which is the total number of opportunities from this stage and onwards, including all WON opportunities in the pipeline
- We always include Total won opportunities in the pipeline in all steps as it is the last step or desired exit criteria for all opportunities
- You can refer to the below formula



**_Number of_** _opportunities **in a section** = Number of opportunities from the current stage to the Last stage (including all WON opportunities in the pipeline)_

- Similarly in the third section, we see 43 opportunities ( **32** in Lesson 1 Watched + **7** in Lesson 2 Watched + 0 in Lesson 3 Watched + **4** WON opportunities )
- And so on, In the end, you can see the last stage, WON with the final opportunities with WON status
- The cumulative conversion will be for Opportunities that have gone through all of the stages in the Widget, whereas the next step conversion will be specific to the stage above.
- Revenue in each section is calculated similarly in the sequential process for each stage

* * *

# **Stage Distribution Widget**

The stage distribution widget shows the number of OPEN opportunities in the individual stage. WON and LOST opportunities are shown separately. The conversion rate is calculated as the % of opportunities converted to the specific stage

You can always switch between different funnels on the widget with the funnel dropdown

**Please note:**

- Dashboard stats permission needs to be enabled to view this widget and a pipeline can only be viewed by enabling the "Visible in Pie Chart" toggle in Pipeline Settings


* * *

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

- [What Are Dashboard Widgets?](https://help.gohighlevel.com/support/solutions/articles/155000001212-what-are-dashboard-widgets-)
- [How to Create & Add Dashboard Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001206-how-to-create-add-dashboard-widgets)
- [Customizing Dashboard Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001207-customizing-dashboard-widgets)
- [Edit widgets on the dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001208-edit-widgets-on-the-dashboard)
- [Resize widgets](https://help.gohighlevel.com/support/solutions/articles/155000001209-resize-widgets)
- [Rearrange Widgets](https://help.gohighlevel.com/support/solutions/articles/155000001210-rearrange-widgets)

## Related Articles

- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [What Are Dashboard Widgets?](https://help.gohighlevel.com/support/solutions/articles/155000001212-what-are-dashboard-widgets-)
- [WordPress- LC (LeadConnector) Plugin Overview](https://help.gohighlevel.com/support/solutions/articles/155000005560-wordpress-lc-leadconnector-plugin-overview)
- [Understanding Opportunities in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000001983-understanding-opportunities-in-highlevel)
- [Step-by-Step Guide: Creating Pipelines](https://help.gohighlevel.com/support/solutions/articles/155000001985-step-by-step-guide-creating-pipelines)
- [Dashboard: Opportunities, Pipeline Value, Conversion Rate, Funnel, Stages Distribution](https://help.gohighlevel.com/support/solutions/articles/48001152117-dashboard-opportunities-pipeline-value-conversion-rate-funnel-stages-distribution)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000001455,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000001455-how-funnels-and-stage-distribution-widgets-work/hit)