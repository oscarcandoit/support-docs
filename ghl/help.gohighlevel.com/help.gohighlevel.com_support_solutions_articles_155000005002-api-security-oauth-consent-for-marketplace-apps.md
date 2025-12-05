---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps"
title: " API Security - OAuth Consent for Marketplace Apps : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [App Marketplace](https://help.gohighlevel.com/support/solutions/155000000049)
4. [Get Started w/ App Marketplace](https://help.gohighlevel.com/support/solutions/folders/155000000892)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [App Marketplace](https://help.gohighlevel.com/support/solutions/155000000049)
   - [Get Started w/ App Marketplace](https://help.gohighlevel.com/support/solutions/folders/155000000892)
6. API Security - OAuth Consent for Marketplace Apps

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

# API Security - OAuth Consent for Marketplace Apps

Modified on: Fri, 5 Sep, 2025 at 8:55 AM

This article explains HighLevel’s new OAuth install page for Marketplace apps. Before you authorize an app, we now show a clear summary of what the app is, the permissions it’s requesting, and—when relevant—an explicit warning if a private app asks for sensitive permissions (for example, the ability to create or edit users).

* * *

**TABLE OF CONTENTS**

- [What is OAuth for Marketplace Apps?](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#What-is-OAuth-for-Marketplace-Apps?)
- [Key Benefits of the New OAuth Experience](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Key-Benefits-of-the-New-OAuth-Experience)
- [How the Updated OAuth Flow Works](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#How-the-Updated-OAuth-Flow-Works)
- [Grey-Labeled OAuth Page Experience](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Grey-Labeled-OAuth-Page-Experience)
- [Understanding App Permissions and Warnings](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Understanding-App-Permissions-and-Warnings)
- [Best Practices for Authorizing App Access](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Best-Practices-for-Authorizing-App-Access)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Frequently-Asked-Questions)
- [Next Steps](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps#Next-Steps)

* * *

## **What is OAuth for Marketplace Apps?**

OAuth is a secure authorization framework that allows third-party apps to request access to specific parts of your HighLevel account. Apps listed in the Marketplace—or integrated externally—use OAuth links to initiate installation and gain permission to read or modify data like contacts, calendars, conversations, workflows, and more.

Before this update, users clicking an OAuth link were redirected without knowing which permissions were being granted. Now, the new OAuth flow provides a full breakdown of the requested permissions, helping users make informed decisions before proceeding.

* * *

## **Key Benefits of the New OAuth Experience**

Enhanced transparency and security during app installation. This ensures users have full visibility into the permissions apps are requesting, reducing the risk of unauthorized access and improving trust in integrations.

- Shows app name and logo before confirming installation.

- Clearly lists all requested permissions (scopes).

- Educates users on what each permission allows.

- Displays explicit warnings for sensitive permissions like users: write.
- Works across both standard and grey-labeled Marketplace links.

- Supports informed decision-making before granting access

* * *

## **How the Updated OAuth Flow Works**

See exactly what you’re authorizing before giving access to a third-party app. When a user clicks an OAuth installation link from an app’s integration page, they are directed to a redesigned confirmation screen that includes:

1. The app name and branding

2. A full list of requested OAuth scopes

3. A clear explanation of each scope’s purpose

4. Warnings for any sensitive or high-risk access requests.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053182889/original/CJn2nAmzvtzbucfVjwIaYxPIjWZXLquvVw.png?1757080032)

This OAuth screen acts similarly to Google’s app authorization prompts, offering users transparency before proceeding.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155053182952/original/M-0InBX8Y_VClCRAo1cjYKa29SStaRJUdQ.png?1757080107)

**Example OAuth link format:**

[https://marketplace.gohighlevel.com/oauth/chooselocation?…](https://marketplace.gohighlevel.com/oauth/chooselocation)

* * *

## **Grey-Labeled OAuth Page Experience**

Consistent permission visibility across white-labeled Marketplace installs. This enhanced OAuth experience is also available on grey-labeled Marketplace URLs like:

```
https://marketplace.leadconnectorhq.com/oauth/chooselocation
```

Users will receive the same clear permission breakdown and security warnings regardless of whether the install is happening on HighLevel’s main domain or a white-labeled version.

* * *

## **Understanding App Permissions and Warnings**

Learn what each scope means and when to exercise caution. OAuth scopes define what kind of access an app is requesting. For example:

- **Contacts**: readonly: View your contact list.

- **Conversations**: write: Send messages on your behalf.

- **Locations**: readonly: View account location details

If an app requests a **sensitive scope** like: **users:** write: Modify team member permissions or create new users, you’ll see a bold warning before proceeding.

These alerts are intended to flag apps that request deep access and ensure you’re making a deliberate, informed decision.

* * *

## **Best Practices for Authorizing App Access**

Follow these tips to protect your data while using third-party apps.

- **Review scopes** carefully—don’t authorize blindly.

- **Only approve apps from trusted developers** or verified partners.

- **Avoid apps that request more access than they need.**

- **Regularly review your connected apps** in HighLevel’s settings.

- **Revoke access** to unused or suspicious apps.

To manage app access: Go to **Settings > Connected Apps** inside your HighLevel dashboard.

* * *

## **Frequently Asked Questions**

**Q: What happens if I deny access at the OAuth screen?**

The app will not be installed or connected. No data will be shared until authorization is granted.

**Q: What are “scopes” in OAuth?**

Scopes define what specific data or features an app is allowed to access. They help control and limit what third-party apps can do with your account.

**Q: How do I know if a scope is sensitive?**

Scopes like users: write or locations: write will display a special warning on the OAuth screen.

**Q: Will this affect apps I’ve already installed?**

No. This feature only applies to new app installations or when an existing app is reauthorized using OAuth.

**Q: Can I use this new screen for my private app?**

Yes, private apps using OAuth will also route through the new page and show the same permission details.

* * *

## **Next Steps**

- **Audit your current app integrations**: Visit **Settings > Connected Apps**.

- **Educate your team**: Make sure all users understand how to read OAuth permissions.

- **Update your app documentation**: If you’re a developer, clearly explain what your app accesses and why.

- **Use the grey-labeled link**: For branded installs, use [https://marketplace.leadconnectorhq.com/oauth/chooselocation](https://marketplace.leadconnectorhq.com/oauth/chooselocation)

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

- [API Security - OAuth Consent for Marketplace Apps](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps)
- [Marketplace- Agency Reselling for Apps with Usage-Based Pricing](https://help.gohighlevel.com/support/solutions/articles/155000005501-marketplace-agency-reselling-for-apps-with-usage-based-pricing)
- [Marketplace - Agency Control Over Daily Usage Limits for Usage-Based Apps](https://help.gohighlevel.com/support/solutions/articles/155000006235-marketplace-agency-control-over-daily-usage-limits-for-usage-based-apps)

## Related Articles

- [How to get started with the Developer's Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000000136-how-to-get-started-with-the-developer-s-marketplace)
- [HighLevel API](https://help.gohighlevel.com/support/solutions/articles/48001060529-highlevel-api)
- [How to reconnect broken Marketplace Apps?](https://help.gohighlevel.com/support/solutions/articles/155000003717-how-to-reconnect-broken-marketplace-apps-)
- [Ecommerce: Dropshipping Integration](https://help.gohighlevel.com/support/solutions/articles/155000006224-ecommerce-dropshipping-integration)
- [Private Integrations: Everything you need to know](https://help.gohighlevel.com/support/solutions/articles/155000003054-private-integrations-everything-you-need-to-know)
- [Conversation AI Public API](https://help.gohighlevel.com/support/solutions/articles/155000006639-conversation-ai-public-api)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005002-api-security-oauth-consent-for-marketplace-apps/hit)