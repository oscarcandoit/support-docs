---
url: "https://help.gohighlevel.com/support/solutions/articles/48001201780"
title: " How to use RSS Blocks in the Email Builder : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001201780#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [RSS Guide](https://help.gohighlevel.com/support/solutions/folders/155000001358)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001201780#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [RSS Guide](https://help.gohighlevel.com/support/solutions/folders/155000001358)
6. RSS Blocks In Email Builder

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

# RSS Blocks In Email Builder

Modified on: Wed, 25 May, 2022 at 2:33 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/48001201780#%E2%80%8B%E2%80%8BOverview)
- [Usage](https://help.gohighlevel.com/support/solutions/articles/48001201780#Usage)
  - [RSS Header](https://help.gohighlevel.com/support/solutions/articles/48001201780#RSS-Header)
    - [Basic Vs Custom in RSS Header](https://help.gohighlevel.com/support/solutions/articles/48001201780#Basic-Vs-Custom-in-RSS-Header%C2%A0)
  - [RSS Items](https://help.gohighlevel.com/support/solutions/articles/48001201780#RSS-Items)
    - [Basic Vs Custom in RSS Items](https://help.gohighlevel.com/support/solutions/articles/48001201780#Basic-Vs-Custom-in-RSS-Items%C2%A0)
  - [HTML Based RSS Feed](https://help.gohighlevel.com/support/solutions/articles/48001201780#HTML-Based-RSS-Feed)
  - [Scheduling:](https://help.gohighlevel.com/support/solutions/articles/48001201780#Scheduling%3A)
    - [Sending Options:](https://help.gohighlevel.com/support/solutions/articles/48001201780#Sending-Options%3A)
  - [Testing RSS Emails](https://help.gohighlevel.com/support/solutions/articles/48001201780#Testing-RSS-Emails)
  - [View and Edit RSS Campaign](https://help.gohighlevel.com/support/solutions/articles/48001201780#View-and-Edit-RSS-Campaign%3A)

# **Overview**

The RSS Elements in the HighLevel Email Builder allow you to automatically send emails containing dynamically inserted content when a new RSS (Real Simple Syndication) item is published.

# **Usage**

## RSS Header

## ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855351/original/vkt1WTZi4swPcywq_8ebw7FWUejefs3UTQ.png?1636131879)

**RSS Header Block**

This will dynamically populate <channel> tags from your RSS Feed ( [learn more about the <channel> tag here](http://www.landofcode.com/rss-tutorials/rss-channels.php)). The RSS Header Element supports the following RSS channel tags - use their respective Custom Value to populate the email with the corresponding tag value:

|     |     |
| --- | --- |
| **RSS Tags** | **Custom Value For HL** |
| <title> | {{rss\_feed.title}} |
| <description> | {{rss\_feed.description}} |
| <link> | {{rss\_feed.url}} |
| <lastBuildDate> | {{rss\_feed.date}} |

### Basic Vs Custom in RSS Header

When using the RSS Header block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855348/original/TXhqhCn_ybN6lz8F_4U1No7-vaLkA_Sj1w.png?1636131878)

- **Basic**: adds the following non-editable text in Text Editor

```
    <h1 class="h1">{{rss_feed.title}}</h1>    {{rss_feed.description}}<br />    <br />
```

- **Custom:** adds the following editable text in Text Editor

```
    Updates from {{rss_feed.url}}    <h1>{{rss_feed.title}}</h1>    <strong>{{rss_feed.description}}</strong><br />    <br />    <strong>In the {{rss_feed.date}} edition:</strong><br />
```

NOTE: The four custom RSS <channel> variables can also be used in the subject field like this: ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855344/original/c2Vi4rUtLOvx56OiuS-hfAmtJXBuLF2hng.png?1636131877)

## RSS Items

**RSS Items Block**

The RSS Items block accepts the following Custom Values and will dynamically insert their corresponding RSS Tags:

|     |     |     |
| --- | --- | --- |
| **RSS Tags** | **Custom Values** | **Description** |
| <title/> | {{rss\_item.title}} | The title of the RSS item, usually a blog post.<br>title |
| <description/> | {{rss\_item.content}} | A summary of the RSS item in HTML format, which includes information inside the <description> tag. If there is no <description> tag in your feed, it will display the information in the <content:encoded> tag |
| <link/> | {{rss\_item.url}} | The text link to the RSS item online, which can be displayed as text or used in a hyperlink.<br>content:encoded |
| <content:encoded/> | {{rss\_item.content\_full} | The full content of the information inside the <content:encoded> tag for an RSS item, in HTML format. If there is no <content:encoded> tag, it will display the information in the <description> tag. |
| pubDate | {{rss\_item.date}} | The date the RSS item was published, in format \`MMM DD, YYYY hh:mm A\`. We will provide support for custom formatting in the future. |
| <dc:creator> | {{rss\_item.author}} | The author of the RSS item<br>media:content |
| <media:content> | {{rss\_item.imageUrl }} | This will provide the src URL of image as text in order to render it as image, use {{rss\_img}}<br>{{rss\_img alt="alt\_text" src=rss\_item.imageUrl height="200" width="200"}} |
| <item> | {{#rss\_items rss\_items}} | This tag doesn't display anything. It's used to open the customized formatting for individual RSS items. |
| </item> | {{/rss\_items}} | This tag doesn't display anything. It's used to close the customized formatting for individual RSS items. |

### Basic Vs Custom in RSS Items

When using the RSS Items block, you'll see two options in the "RSS Editing Options" dropdown selector: Basic and Custom.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855347/original/L0LyUj9IorHU0sZYjFppVorh01rAx3ll6A.png?1636131878)

- **Basic** : adds the following non editable formatted text in Text Editor

```
          {{#rss_items rss_items}}      <h2 class="mc-toc-title"><a href="{{rss_item.url}}" target="_blank">   {{rss_item.title}}      </a> </h2>      {{rss_item.content}}      <br />      <a href="{{rss_item.url}}" target="_blank">Read on &raquo;</a><br />      <br />     {{/rss_items}}
```

- **Custom:** adds the following formatted text and Text editor will become editable

```
    {{#rss_items rss_items}}    <h2 class="mc-toc-title"><a href="{{rss_item.url}}" target="_blank">{{rss_item.title}}</a></h2>    <em>By {{rss_item.author}} on {{rss_item.date}}</em><br />    {{rss_item.content_full}}<br />    <a href="{{rss_item.url}}" target="_blank">Read in browser &raquo;</a><br />    <br />    {{/rss_items}}<br />    <br />    <br />    <h3 class="h3">Recent Articles:</h3>   {{#rss_items rss_items}}
```

## HTML Based RSS Feed

The values returned by the RSS-based custom variable `{{rss_item.title}}` are HTML-escaped. For example, if the expression contains `&`, then the returned HTML-escaped output is generated as `&amp;` or if your RSS Feed has HTML-based text instead of plain text then it will be rendered as plain text.

If you don't want it to escape a value, use the "triple-stash", `{{{`:

Eg: if your RSS feed source is something like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855360/original/uPxMn189zEmr7WCh_6qYv6DAQ_WrxdccDA.png?1636131880)

without "triple-stash" it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855357/original/78KNj092LUO9cZRouzUlv84qXhEsZtHv3g.png?1636131879)

once you will use "triple-stash" `{{{rss_item.content}}}` it will render like this

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855364/original/BojThSBQRv2EsNKXzmCAgxdVL1HDID98HA.png?1636131880)

## Scheduling:

To schedule RSS Feed based emails:

- navigate to the "Send or Schedule" tab
- select the "RSS Email Campaign" sending option
- give your campaign a name in the "Campaign Name" field
- paste your RSS feed url in the "RSS Feed URL" field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855359/original/SpMiwm3Uo4icKGEWl86NUztsGxQIVOojtg.png?1636131880)

### Sending Options:

- **"When we should send":** Here you can determine whether RSS Emails should go out Daily, Weekly, or Monthly as well as at what time the emails should go out.
- **Send on:** Here you can choose the Day(s) of the week on which you want to send the campaign

Once all inputs fields filled along with the recipient, in Review and Send side panel You will see following new information

- Email type
- RSS Feed URL
- Repeat After
- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855354/original/MU4iPH7O-wwTKti8UnJOm1i-OjBLL0oviw.png?1636131879)

## Testing RSS Emails

When using the "Send Test Email" functionality with an email that has RSS Elements, you will see a new " **RSS Feed URL"** field where you'll need to provide the RSS Feed URL from where you want to pull the content. Without this, all RSS tag based custom variables will replace by empty text.

- ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855353/original/ngePuhb-X4mSVnHZA5POqiWBBo9VYF65NQ.png?1636131879)

NOTE: If you try to Schedule RSS Element based email template through normal scheduling options (send now, schedule for later, send in drip mode), all RSS tags based custom variable will replace by empty text.

## View and Edit RSS Campaign:

You can see your scheduled RSS Campaigns in the Scheduled Tab, where you'll see the type listed as RSS. For other scheduled emails (send now, schedule for later, send in drip mode), the type will be Normal.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855356/original/8LsOBEXvUvsrD9m6DAUbFnIGnga6WRbVDQ.png?1636131879)

The example above is an RSS email set to send Daily and we can see the Next Execution time will be at 2 pm. Once the 2 pm email has been sent, it will be marked as complete and a new scheduling/execution will be scheduled with the same configuration (RSS Feed URL, send Daily) with the following day's date.

### Actions:

With RSS type scheduling you can perform the following actions:

- **Edit:** If you click the pencil icon to edit, you will see a confirmation modal asking you to confirm that you would like to cancel the currently scheduled email and re-schedule a new one.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855352/original/o--HIRT2KbBv-OrhGrqfaPrTLEZw1T2Wsw.png?1636131879)

- Once you click Confirm, it will cancel the current scheduling and open up a Email Builder with RSS Scheduling options pre-filled with the current cancelled scheduling information![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48155855361/original/-VqGcwC_5HX3QI-gngmW-H9NmIDY_i7yWg.png?1636131880)

- **Pause/Resume:** You can also pause and resume the execution through the Pause/Resume actions
- **Delete:** You can also delete the RSS scheduling. Deleting will first cancel the scheduling then delete it permanently from the system


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

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [RSS Blocks In Email Builder](https://help.gohighlevel.com/support/solutions/articles/48001201780-rss-blocks-in-email-builder)
- [RSS Email Body showing HTML tags?](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-)
- [How-to Send RSS Email Campaign(s)](https://help.gohighlevel.com/support/solutions/articles/48001215372-how-to-send-rss-email-campaign-s-)
- [A basic guide of RSS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000004928-a-basic-guide-of-rss-campaign)
- [Resend to Unopened for RSS and Batch Scheduled Emails](https://help.gohighlevel.com/support/solutions/articles/155000005570-resend-to-unopened-for-rss-and-batch-scheduled-emails)

## Related Articles

- [A basic guide of RSS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000004928-a-basic-guide-of-rss-campaign)
- [RSS Feed for Blogs](https://help.gohighlevel.com/support/solutions/articles/48001231723-rss-feed-for-blogs)
- [RSS Email Body showing HTML tags?](https://help.gohighlevel.com/support/solutions/articles/48001202219-rss-email-body-showing-html-tags-)
- [How-to Send RSS Email Campaign(s)](https://help.gohighlevel.com/support/solutions/articles/48001215372-how-to-send-rss-email-campaign-s-)
- [How to Reschedule an Email Campaign (Email Builder)](https://help.gohighlevel.com/support/solutions/articles/48001215389-how-to-reschedule-an-email-campaign-email-builder-)
- [Schedule Posts using RSS URL](https://help.gohighlevel.com/support/solutions/articles/155000001052-schedule-posts-using-rss-url)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001201780)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001201780-rss-blocks-in-email-builder/hit)