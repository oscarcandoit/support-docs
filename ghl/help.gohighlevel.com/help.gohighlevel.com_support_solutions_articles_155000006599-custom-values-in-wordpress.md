---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress"
title: " Custom Values in WordPress | LC Plugin Integration : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
6. Custom Values in WordPress

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

# Custom Values in WordPress

Modified on: Tue, 14 Oct, 2025 at 10:47 AM

The **Custom Values integration** in the LC WordPress Plugin lets you display live HighLevel data inside WordPress pages or posts using shortcodes. It brings the same personalization used in funnels, emails, and automations directly to WordPress—no coding or complex setup required.

* * *

**TABLE OF CONTENTS**

- [What Are Custom Values in WordPress?](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#What-Are-Custom-Values-in-WordPress?)
- [Key Benefits](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Key-Benefits%E2%80%8B)
- [Native Sync with HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Native-Sync-with-HighLevel)
- [Using Shortcodes in WordPress](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Using-Shortcodes-in-WordPress)
- [Custom Value Manager (WP Admin)](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Custom-Value-Manager-(WP-Admin)%E2%80%8B)
- [Dynamic Rendering and Page Output](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Dynamic-Rendering-and-Page-Output)
- [Setup Steps](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Setup-Steps)
- [FAQ](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#FAQ)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress#Related-Articles%E2%80%8B)

* * *

## **What Are Custom Values in WordPress?**

Custom Values in WordPress sync the _key:value_ pairs from your HighLevel sub-account (system and custom) and make them available as WordPress shortcodes.

When a visitor loads a page, the plugin automatically pulls the latest data—keeping your content current without manual edits.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562835/original/IEUOx-L1w_JNUDMJSTd6AzdFhvfLTXBE0A.png?1759961095)

* * *

## **Key Benefits**

- **Omnichannel consistency:** Use the same data in automations, emails, and websites.

- **Real-time updates:** Change a value once in HighLevel—WordPress updates instantly.

- **No-code setup:** Paste a shortcode instead of editing code.

- **Reusable templates:** Build client sites with placeholders that auto-fill on sync.

- **Seamless integration:** WordPress becomes part of your HighLevel ecosystem.


* * *

## **Native Sync with HighLevel**

The LC Plugin connects your WordPress site to your HighLevel sub-account through secure OAuth. Once authorized, it:

- Fetches all system and user-defined Custom Values.

- Stores them locally for quick access.

- Resyncs automatically every 12 hours (manual **Sync Now** also available).


This ensures your WordPress data always mirrors your HighLevel account without manual syncing.

* * *

## **Using Shortcodes in WordPress**

Shortcodes let you dynamically display live data anywhere inside your WordPress content—page builders, blocks, or classic posts.

**Syntax:**

```
[hl_custom_value name="custom_values.your_key"]
```

**Example:**

```
Wish You a Very [hl_custom_value name="custom_values.festive_greeting"]
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562839/original/N08SHblr1WdL7Yy4LhsF4AQ5bmm3xjOsaA.png?1759961130)

You can use shortcodes in **Elementor, Divi, Bricks, Beaver Builder, Gutenberg, or the Classic Editor**—any builder that supports native WordPress shortcodes.

* * *

## **Custom Value Manager (WP Admin)**

Inside WordPress, open the HighLevel Custom Values section to view and manage your synced keys.

Here you can:

- View each synced Custom Value and its current data.

- Copy shortcodes in one click.

- Trigger a manual resync or enable automatic syncing.

- Filter by folders matching your HighLevel structure.


This makes it easy to organize and access all synced data directly within your WordPress dashboard.

* * *

## **Dynamic Rendering and Page Output**

When a visitor opens a page, the LC Plugin renders the Custom Value in real time.

If caching plugins are used, stale data may appear unless proper cache rules are applied.

**Best Practices:**

- Enable **“Purge cache on resync”** if caching is active.

- Avoid caching pages that display contact-specific values.

- Always resync after updating values in HighLevel.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155055562869/original/WKGPdC6c-hXDD7rPHW9xvTsOChaDHjGJZw.png?1759961240)

* * *

## **Setup Steps**

To connect your WordPress site with HighLevel, make sure you’re using LC Plugin version 3.5.0 or higher. In your WordPress Admin, open the HighLevel settings and select Connect Account, then authorize your HighLevel login. Choose the appropriate sub-account and grant access. Once connected, the plugin will automatically sync and display a confirmation message stating Connected to LeadConnector.

After the sync completes, open the Custom Values section in HighLevel to confirm that your data has been imported. You can then copy a shortcode and place it within any page or post using your preferred builder. When published, your WordPress content will dynamically display the synced HighLevel data in real time.

* * *

## **FAQ**

**Does it support contact-level values?**

Yes—if the visitor is tracked via cookie or URL parameter.

**Will it slow my site?**

No. Values are cached locally and refreshed only during sync operations.

**Can I connect multiple sub-accounts?**

Each WordPress install can connect to one sub-account. Use multisite for multiple clients.

**What if a value is deleted in HighLevel?**

It appears blank until you resync or replace it.

**Who can authorize connections?**

Only HighLevel users with API access to the sub-account can connect WordPress.

* * *

## **Related Articles**

- [How to Use Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/48001161575)

- [Overview of Merge Fields & Custom Variables](https://help.gohighlevel.com/en/support/solutions/articles/155000004390)

- [Workflow Action – Update Custom Values](https://help.gohighlevel.com/en/support/solutions/articles/155000003353)

- [LC WordPress Plugin Overview](https://help.gohighlevel.com/en/support/solutions/articles/155000005560)

- [WordPress Plugin & Theme Management](https://help.gohighlevel.com/en/support/solutions/articles/48001231547)


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

- [WordPress: Single Sign On Admin](https://help.gohighlevel.com/support/solutions/articles/155000004154-wordpress-single-sign-on-admin)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [Cloning Wordpress Websites in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004189-cloning-wordpress-websites-in-highlevel)
- [How to Disable SEO Indexing for WordPress Sites](https://help.gohighlevel.com/support/solutions/articles/155000005158-how-to-disable-seo-indexing-for-wordpress-sites)
- [How to Select Country Server Location for WordPress Hosting](https://help.gohighlevel.com/support/solutions/articles/155000005816-how-to-select-country-server-location-for-wordpress-hosting)
- [Payment Failure Notifications on WordPress Admin via LC Plugin](https://help.gohighlevel.com/support/solutions/articles/155000005792-payment-failure-notifications-on-wordpress-admin-via-lc-plugin)

## Related Articles

- [Track Chat Widget Activity Using Google Analytics 4 (GA4)](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-)
- [Connecting Your Domain on GHL - A Guide](https://help.gohighlevel.com/support/solutions/articles/155000005132-connecting-your-domain-on-ghl-a-guide)
- [Audit Logs: Introducing the New Design Experience](https://help.gohighlevel.com/support/solutions/articles/155000006667-audit-logs-introducing-the-new-design-experience)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)
- [Glossary](https://help.gohighlevel.com/support/solutions/articles/48001231169-glossary)
- [WordPress - Custom HTML Pages](https://help.gohighlevel.com/support/solutions/articles/155000006571-wordpress-custom-html-pages)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006599-custom-values-in-wordpress/hit)