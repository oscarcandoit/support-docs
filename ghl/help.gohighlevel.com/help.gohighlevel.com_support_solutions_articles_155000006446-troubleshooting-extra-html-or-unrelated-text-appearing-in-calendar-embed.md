---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed"
title: " Extra HTML or Unrelated Text Appearing in Calendar Embed : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [FAQs and Common Troubleshooting Steps](https://help.gohighlevel.com/support/solutions/folders/155000001172)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [FAQs and Common Troubleshooting Steps](https://help.gohighlevel.com/support/solutions/folders/155000001172)
6. Troubleshooting: Extra HTML or Unrelated Text Appearing i...

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

# Troubleshooting: Extra HTML or Unrelated Text Appearing in Calendar Embed

Modified on: Mon, 29 Sep, 2025 at 6:40 AM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#Overview)
- [What’s Actually Happening](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#What%E2%80%99s-Actually-Happening)
- [How to Verify](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#How-to-Verify)
- [How to Fix It](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#How-to-Fix-It)
- [Key Takeaway](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed#Key-Takeaway)

* * *

## Overview

Some users may see unrelated text (for example, third-party references like _“Marketing Agency,” “Demo Reviews,” or “Free Trial Offers”_) when embedding a calendar onto their website or funnel. This can raise concerns about SEO, site trust, or script security.

In most cases, these extra snippets are not coming from the calendar embed code. Instead, they are part of the page where the embed is placed.

* * *

## What’s Actually Happening

- The calendar embed script is clean and does not inject third-party text or links.

- In funnels or websites, extra snippets (such as _reviews_ or unrelated business names) are usually hidden blocks within the page builder content.

- On external sites (for example, WordPress), these snippets may come from unrelated elements already present on the page.

- These elements may have been added accidentally, left over from a template, or hidden with styling (for example, `display: none`).


* * *

## How to Verify

1. Copy the embed code directly from **Calendar Settings → Embed Code**.

2. Paste it into a plain text editor (such as Notepad).

   - You should see only the expected `<iframe>` or `<script>` calendar embed.

   - If unrelated text appears here, contact support (this is rare).
3. Double-check the embed code for **missing opening or closing brackets**:

   - Example of a common mistake:


     ```html
     <script>
       ... lines of code ...
     </script
     ```


     Here, the closing `>` is missing. Similarly, sometimes the starting `<` can be left out.

   - If you spot this, correct the brackets and re-embed the code.
4. Inspect the webpage where the calendar was added:

   - For funnels/websites: open the builder and check for hidden or unused sections.

   - For external sites: use the site’s editor or browser **Inspect Element** tool (right-click → Inspect) to review page content.

* * *

## How to Fix It

- **If using Funnels/Websites:**

1. Go to the page where the calendar is embedded.

2. Look for hidden or unused blocks.

3. Delete or edit any unrelated text.
- **If You Cannot Find the Elements:**

  - Use search (Ctrl+F or Cmd+F) inside the editor for keywords such as _trial_, _review_, or _demo_.

  - If still unclear, reach out to support with:

    - The page URL where the issue appears.

    - A Loom video showing the steps you took.

* * *

## Key Takeaway

The calendar embed code itself does not add external text or harm SEO. Any unexpected content comes from the page where it is embedded and can be removed directly in the builder or site editor. Always make sure the embed code is copied fully, with all brackets correctly included.

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

- [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars)
- [How to Improve Funnel & Website Page Speed](https://help.gohighlevel.com/support/solutions/articles/155000006268-how-to-improve-funnel-website-page-speed)
- [Troubleshooting: Extra HTML or Unrelated Text Appearing in Calendar Embed](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed)

## Related Articles

- [Can I Show Multiple Calendars Without Using a Calendar Group?](https://help.gohighlevel.com/support/solutions/articles/48001049320-can-i-show-multiple-calendars-without-using-a-calendar-group-)
- [Embedding HighLevel Calendars using HTML Code](https://help.gohighlevel.com/support/solutions/articles/48000982201-embedding-highlevel-calendars-using-html-code)
- [Funnel Troubleshooting \| Sticky Contacts not working on calendar/form in funnels](https://help.gohighlevel.com/support/solutions/articles/48001163821-funnel-troubleshooting-sticky-contacts-not-working-on-calendar-form-in-funnels)
- [Add HighLevel's Chat Widget to Your Wix Website](https://help.gohighlevel.com/support/solutions/articles/48001239773-add-highlevel-s-chat-widget-to-your-wix-website)
- [How To Embed External Content On A Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001627-how-to-embed-external-content-on-a-dashboard)
- [Add HighLevel's Chat Widget to Your Duda Website](https://help.gohighlevel.com/support/solutions/articles/48001239775-add-highlevel-s-chat-widget-to-your-duda-website)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006446-troubleshooting-extra-html-or-unrelated-text-appearing-in-calendar-embed/hit)