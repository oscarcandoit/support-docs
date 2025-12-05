---
url: "https://help.gohighlevel.com/support/solutions/articles/48000982207,"
title: " Set Up a Whitelabel Domain for GoHighLevel Desktop App : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48000982207,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Add-ons & Sales Trainings](https://help.gohighlevel.com/support/solutions/48000452144)
4. [Whitelabel Desktop App](https://help.gohighlevel.com/support/solutions/folders/48000666027)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48000982207,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Add-ons & Sales Trainings](https://help.gohighlevel.com/support/solutions/48000452144)
   - [Whitelabel Desktop App](https://help.gohighlevel.com/support/solutions/folders/48000666027)
6. How to Set Up a Whitelabel Domain for the Desktop Web App

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

# How to Set Up a Whitelabel Domain for the Desktop Web App

Modified on: Fri, 26 Sep, 2025 at 1:44 PM

How to Set Up a Whitelabel Domain in the Agency Settings - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.1K subscribers

[How to Set Up a Whitelabel Domain in the Agency Settings](https://www.youtube.com/watch?v=M_791lc8FEA)

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

[Watch on](https://www.youtube.com/watch?v=M_791lc8FEA&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 1:45
•Live

•

Give your clients a fully branded login experience by using a whitelabel domain for the HighLevel desktop web app. This guide explains requirements, setup steps, and troubleshooting. You’ll also learn how this differs from the API (branded links) domain so you can deploy a complete brand experience.

* * *

**TABLE OF CONTENTS**

- [What is the Whitelabel Domain for the Desktop Web App?](https://help.gohighlevel.com/support/solutions/articles/48000982207,#What-is-the-Whitelabel-Domain-for-the-Desktop-Web-App?)
- [Key Benefits of the Whitelabel Domain for the Desktop Web App](https://help.gohighlevel.com/support/solutions/articles/48000982207,#Key-Benefits-of-the-Whitelabel-Domain%C2%A0for-the-Desktop-Web-App)
- [How To Setup the Whitelabel Domain for the Desktop Web App](https://help.gohighlevel.com/support/solutions/articles/48000982207,#How-To-Setup-the-Whitelabel-Domain%C2%A0for-the-Desktop-Web-App)
- [API Domain vs. Whitelabel Domain](https://help.gohighlevel.com/support/solutions/articles/48000982207,#API-Domain-vs.-Whitelabel-Domain)
- [Troubleshooting](https://help.gohighlevel.com/support/solutions/articles/48000982207,#Troubleshooting)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/48000982207,#Frequently-Asked-Questions)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48000982207,#Related-Articles)

* * *

## **What is the Whitelabel Domain for the Desktop Web App?**

A whitelabel domain is a subdomain you control (e.g., app.yourdomain.com) that provides a branded URL for the desktop login and app that isused alongside the standard HighLevel link (e.g., app.gohighlevel.com). After setup, users can sign in at your branded address while HighLevel hosts and secures the application.

By whitelabeling your desktop web app, your customers will be using your domain when logging in and using the app. For example, instead of "app.gohighlevel.com" they would use "app.myawesomedomain.com".

```
Note: Custom/Whitelabel Domain is the domain you own and your customers will use to log into the desktop app (e.g., app.yourdomain.com). HighLevel Default Domain is the temporary GoHighLevel–provided address (e.g., yourcompany.gohighlevel.com).
```

* * *

## **Key Benefits of the Whitelabel Domain** **for the Desktop Web App**

A clear understanding of benefits helps you decide whether this configuration should be prioritized in your onboarding checklist and client rollout.

- **Brand consistency**: Presents your name, logo, and URL throughout the login and app experience.

- **Trust & professionalism**: Uses your domain to reassure clients they’re in the right place.

- **Simplified access**: Gives users a memorable URL (e.g., app.yourdomain.com) for sign-in.

- **Seamless SSL**: HighLevel issues HTTPS automatically once DNS is correctly pointed.

- **Separation of concerns**: Keeps your login/app domain distinct from marketing sites and email sending domains.


* * *

## **How To Setup the Whitelabel Domain** **for the Desktop Web App**

Completing the steps in order ensures DNS and SSL finalize quickly and the login portal loads at your branded URL.

1. Create the CNAME at your DNS provider





   - Host/name: the subdomain you want to use (for example, **app** meaning **app.myawesomedomain.com**).

   - Value/target: **whitelabel.ludicrous.cloud**.

   - TTL: Leave default unless your provider requires a specific value.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712002/original/xMazT-jvM9UthcQeacI4jAj_3t9-G7PH-g.png?1758909557)
2. Add the domain in HighLevel (Agency settings)





   - Go to **Agency View → Settings → Company → Whitelabel → Whitelabel Domain**.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712052/original/TWDsv6DwwdfB5D46DSzjXJJftTMlDogQMQ.png?1758909605)

   - Enter your full subdomain (for example, **app.myawesomedomain.com**) and click **Update.**



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712088/original/B8qiZeqPt59TV-LYJhgzJhL8sZQTztbCdg.png?1758909671)
3. Upload logo & add Terms & Conditions URL





   - In **Agency View → Settings → Company**, upload your logo (recommended up to ~350×180 px, under 2.5 MB) and paste your **Privacy Policy** and **Terms & Conditions** URLs.



     ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155054712256/original/gL3kUOhXVzUOrZ2iuwAzG6eL7hJvqMUP3A.png?1758909902)
4. Verify propagation and SSL





   - Wait for DNS to propagate. Then open **[http://app.myawesomedomain.com](http://app.myawesomedomain.com/)** to confirm the branded login page loads with your logo and legal links.

   - SSL/TLS is issued automatically once DNS points to the correct CNAME.

```
NOTE: If you previously set up your white-label domain and you want to update it to run on whitelabel.ludicrous.cloud, you'll need to first delete the whitelabel domain field using the trash icon, then click Update Company to save, then re-enter your sub-domain into the Whitelabel Domain field and save again.
```

* * *

## **API Domain vs. Whitelabel Domain**

Understanding the difference avoids branding gaps across links and login.

- **Whitelabel Domain**: Powers your **desktop login and app URL** (for example, app.myawesomedomain.com).

- **API Domain (Branded Links)**: Powers **system-generated links** in emails/SMS (forms, surveys, calendars, trigger links, short links, review links). Configure at Agency and/or Sub-Account level to brand links your contacts click.

- Tip: Set up both for a complete branded experience across login and links.


* * *

## **Troubleshooting**

Troubleshooting Whitelabel domain issues often comes down to verifying DNS settings and ensuring SSL has been properly issued. Below are common issues and how to resolve them:

- **Error: "The client and server don't support a common SSL protocol version or cipher suite"**



This means the browser or device is using outdated security protocols. HighLevel supports TLS 1.2 and 1.3 only. Update your browser and ensure there are no conflicting DNS records (e.g., both A and CNAME for the same subdomain), which can block SSL from provisioning.

- **Domain Not Loading**



Double-check that your subdomain is pointed to the correct CNAME: **whitelabel.ludicrous.cloud**. It may take up to 30 minutes for DNS changes to propagate globally.

- **"Your Connection Is Not Private" or HTTPS Not Working**



This usually means your SSL certificate hasn’t been issued yet. Make sure your DNS is fully propagated and pointed only to a single CNAME. Once DNS is correct, SSL is issued automatically via Let's Encrypt.

* * *

## **Frequently Asked Questions**

**Q: Can I use my root domain (apex) for the whitelabel login?**

A: Use a **subdomain** (for example, app.yourdomain.com) via **CNAME** to point to the HighLevel target.

**Q: How long does SSL take to issue?**

A: Once DNS is correct, SSL is issued automatically. Allow time for DNS to propagate globally, then retest.

**Q: What’s the difference between the Whitelabel Domain and the API Domain?**

A: The whitelabel domain brands the **login/app URL**. The API domain brands **system-generated links** used in emails/SMS (forms, surveys, calendars, trigger links, etc.).

**Q: Do I need to upload my logo and legal links again for whitelabeling?**

A: Yes. Upload your **agency logo** and add **Terms & Conditions** and **Privacy Policy** URLs in Agency Company Settings.

**Q: We use Cloudflare. Do I keep the orange proxy on?**

A: No. Set the whitelabel CNAME to **DNS only** so SSL can be issued properly.

**Q: I updated my whitelabel subdomain—why does the old login still appear?**

A: Clear the old value in the **Whitelabel Domain** field, click **Update Company**, then enter the new subdomain and save. Allow DNS/SSL to refresh, then retest.

**Q: Which TLS versions are supported?**

A: TLS **1.2** and **1.3**.

**Q: Where do I configure the API domain for branded links?**

A: At the Agency level in **Settings → Company → API Domain** and optionally at the Sub-Account level for client-specific branding.

* * *

## **Related Articles**

- [Agency Company Settings in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48000982604-agency-company-settings-in-highlevel)

- [Branding System-Generated Links (API Domain)](https://help.gohighlevel.com/support/solutions/articles/48001143244-branding-system-generated-links-api-domain-)

- [Customizing HighLevel Menus: A Guide to Custom Menu Links](https://help.gohighlevel.com/support/solutions/articles/48001185767-customizing-highlevel-menus-a-guide-to-custom-menu-links)

- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, and Client Portal Domain](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)


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

- [How to Set Up a Whitelabel Domain for the Desktop Web App](https://help.gohighlevel.com/support/solutions/articles/48000982207-how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app)

## Related Articles

- [Facebook Troubleshooting - Integration Issues](https://help.gohighlevel.com/support/solutions/articles/48000981698-facebook-troubleshooting-integration-issues)
- [How to create your Whitelabel Community](https://help.gohighlevel.com/support/solutions/articles/155000004156-how-to-create-your-whitelabel-community)
- [Google Login for WL agencies](https://help.gohighlevel.com/support/solutions/articles/155000005082-google-login-for-wl-agencies)
- [Agency Company Settings in HighLevel](https://help.gohighlevel.com/support/solutions/articles/48000982604-agency-company-settings-in-highlevel)
- [How to Promote and Customize Your Whitelabel Mobile App: A Comprehensive Guide](https://help.gohighlevel.com/support/solutions/articles/155000000089-how-to-promote-and-customize-your-whitelabel-mobile-app-a-comprehensive-guide)
- [Setting up Whitelabel Domain, API Domain, Email Sending Domain, Sites Domain, Client Portal Domain & more](https://help.gohighlevel.com/support/solutions/articles/155000002561-setting-up-whitelabel-domain-api-domain-email-sending-domain-sites-domain-client-portal-domain-)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48000982207,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48000982207-how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app/hit)