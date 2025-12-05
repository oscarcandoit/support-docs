---
url: "https://help.gohighlevel.com/support/solutions/articles/48001176375,"
title: " CRM Loading States: Troubleshooting and Impact on CSS : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001176375,#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Miscellaneous](https://help.gohighlevel.com/support/solutions/48000453288)
4. [UX Issues](https://help.gohighlevel.com/support/solutions/folders/48000677469)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001176375,#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Miscellaneous](https://help.gohighlevel.com/support/solutions/48000453288)
   - [UX Issues](https://help.gohighlevel.com/support/solutions/folders/48000677469)
6. CRM Loading States: Troubleshooting lags and Impact of Cu...

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

# CRM Loading States: Troubleshooting lags and Impact of Custom CSS and JS

Modified on: Tue, 20 Jun, 2023 at 4:01 PM

Significant enhancements have been implemented in the loading functionality on our platform. We have transitioned from the traditional 9-dot loader to a modern, visually compelling spinner. The new design showcases diverse visual states, effectively indicating operations like app initialization, data fetching, and sub-account detail retrieval.

#### **Covered in this Article:**

#### [**What Statuses to expect when the CRM is loading?**](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#What-Statuses-to-expect-when-the-CRM-is-loading?)

#### [Initializing the App:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Initializing-the-App%3A)

#### [Loading Fresh Data:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Loading-Fresh-Data%3A%C2%A0)

#### [Retrieving Sub-account Details:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Retrieving-Sub-account-Details%3A%C2%A0)

#### [Infinite Loading State:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Infinite-Loading-State%3A%C2%A0)

#### [**Impact of Custom CSS or Custom JS:**](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Impact-of-Custom-CSS-or-Custom-JS%3A)

#### [Custom CSS Interference:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Custom-CSS-Interference%3A)

#### [Custom JS Interference:](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Custom-JS-Interference%3A)

#### [**Additional Troubleshooting:**](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#%E2%80%8BAdditional-Troubleshooting%E2%80%8B%3A)

#### [Is the User who is facing the problem added to the sub-account?](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#Is-the-User-who-is-facing-the-problem-added-to-the-sub-account?)

#### [What should I do if the new loader's refresh button doesn't work or my custom CSS/JS interferes with the loader's operations?](https://help.gohighlevel.com/support/solutions/articles/48001176375,\#What-should-I-do-if-the-new-loader's-refresh-button-doesn't-work-or-my-custom-CSS/JS-interferes-with-the-loader's-operations?)

* * *

## **What Statuses to expect when the CRM is loading?**

### **Initializing the App:**

This is the first state where the loader begins to spin when the app is launched or a new page is loaded. It represents the start of the loading process and stays active until the necessary data for the app or page is fully fetched.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405216/original/n6IJ7CNmxsFla2WiiOg07WhTWEVvhHp2jA.png?1687267443)

### **Loading Fresh Data:**

After the initial app loading, there could be a need to fetch new data based on user actions, real-time updates, or scheduled refreshes. During this state, the loader spins, indicating that fresh data is being retrieved from the server.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405249/original/GREONfJWTWWj7L8CprElMU8DTiUrVuPLLw.png?1687267461)

### **Retrieving Sub-account Details:**

If your application supports multiple user accounts or sub-accounts, this state might be activated when switching between accounts or loading specific information related to a particular sub-account.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001405356/original/GohsN1TKhc_sVZV-gYHyWsYekrFFP80K-A.png?1687267500)

### **Infinite Loading State:**

This less desirable state occurs when the app or a specific page doesn't load within a predefined time (like 30 seconds). The loader might keep spinning without progress, indicating an issue preventing the page from loading correctly. An action prompt saying **"Click Here to refresh"** will appear in such instances. Activating this button will refresh the page and automatically clear the browser cache, eliminating the need to manually clear site data and cookies and simplifying the troubleshooting process.![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001404779/original/bBwb-vM65Ufd5VtWcaAe_M63EqaPomGa8g.png?1687267228)

**Please Note:**

```
When the refresh action is used during an infinite loading state, any errors on your end will be automatically captured and forwarded to our servers for in-depth analysis. This helps us to refine the debugging process and to continuously improve the platform experience.
```

* * *

## **Impact of Custom CSS or Custom JS:**

Custom CSS and JS can impact the loader's behavior and overall functionality. Here's an explanation of their potential implications:

### **Custom CSS Interference:**

Custom CSS refers to modifications made to the styling and appearance of a webpage. If the custom CSS overrides or conflicts with the loader's styles or classes, it can disrupt the intended visual representation of the loader or cause inconsistencies.

The loader may not display the expected visual states or animations in such cases, leading to confusion or a less-than-optimal user experience.

It's important to review and adjust the custom CSS to ensure it aligns with any changes introduced in the loader, allowing for seamless integration of custom styling without interfering with the loader's intended behavior.

### **Custom JS Interference:**

Custom JS (JavaScript) code can impact the loader's functionality by altering its underlying logic or the events it listens to.

If the custom JS modifies or overrides the loader's event handlers, it can disrupt its intended actions or prevent it from responding correctly to user interactions.

Reviewing and adapting any custom JS code to work harmoniously with the loader's updated features and event system is crucial. This ensures the loader functions as intended and maintains its proper behavior during various loading states.

It's recommended to thoroughly test and debug any custom CSS or JS modifications to identify potential conflicts or inconsistencies with the loader. Adjustments should be made to align the custom code with the updated loader design and functionality, ensuring a seamless and consistent user experience throughout the loading process.

* * *

## **Additional Troubleshooting:**

### **Is the User who is facing the problem added to the sub-account?**

If you are an agency admin, make sure the user is added to at least one sub-account:

1\. Go to the agency team management page in the agency view

2\. Search by name, email, or phone on the top right for the user

3\. Click on Edit

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001407892/original/EeujbvMOt-B75vSFRrbD_a4Tq27gYg0mkw.png?1687268821)

4\. Click on  User Roles

![Click on  User Roles](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195393047/original/CfRQKOUlqixevrBBvgMTStO5dGAE9LGFLA.png?1646064411)

5\. Ensure the user is added to at least one sub-account from the dropdown.

* * *

[_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48195394488/original/_hpUJqxJsfhIZg8bWCGaPzAImfNYpgG2Rg.png?1646064617)_](https://app.tango.us/app/workflow/d27d73bd-86a5-4957-b2c3-fb58ff4ffd71?utm_source=magicCopy&utm_medium=magicCopy&utm_campaign=referral%20link%20tracking)

**Please Note:**

```
If you are not the agency owner, please get in touch with the agency admin so they can add you back to the sub-account you should have access to.
```

### **What should I do if the new loader's refresh button doesn't work or my custom CSS/JS interferes with the loader's operations?**

A: In such situations, manual troubleshooting could be required. The process involves clearing site data, removing cookies, and hard refreshing the page. Here's how to do it:

1. Start by opening the inspection pane in your browser. This is done by right-clicking on the screen and selecting "Inspect." If the pane opens on the left side, you might need to click the "more" icon (represented by two arrows) to find the "Application" tab. ![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001408960/original/A56nyLYvt64k6etKB4Yv0-Ft_2Lxhiyojg.png?1687269416)

2. Inside the "Application" tab, choose "Storage," then scroll down to locate the "Clear Site Data" button and click it. Here are guides for specific browsers: [Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/cookies), [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector), [Safari](https://developer.apple.com/safari/tools/), and [Edge.](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies)

3. Afterward, navigate to the lock icon next to the URL at the top of the page, click on it, and select "Cookies." There you'll see an option to remove the site's cookies. Click "Remove."![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155001409127/original/vTOptcG6vLr5pLot2kPXpoDWqliK7WtUZA.png?1687269495)

4. Once you've cleared site data and removed the cookies, click "Done."

5. Finally, you'll need to refresh your browser page. For a hard refresh on a Mac, hold the command key and hit R. For a PC, hold the control key and press F5. Here's how to refresh hard on [Chrome](https://www.refreshyourcache.com/en/hard-refresh/), [Firefox](https://www.refreshyourcache.com/en/cache/), [Safari](https://www.refreshyourcache.com/en/safari-5/), and [Edge](https://answers.microsoft.com/en-us/microsoftedge/forum/all/unable-to-find-hard-reload-and-empty-cache-in/f0ac6b96-697f-4b17-b570-5b904c5ee67a).


**What if the page doesn't redirect and gets stuck?**

No Error but the page just doesn't redirect and got stuck

1.2×

1 min 5 sec⚡️1 min 21 sec1 min 5 sec54 sec43 sec38 sec32 sec26 sec

![](https://cdn.loom.com/sessions/thumbnails/7db271bd08654c98b43dcbd7a0f7f266-00001.jpg)

Your user agent does not support the HTML5 Video element.

1.2×

1 min 5 sec⚡️1 min 21 sec1 min 5 sec54 sec43 sec38 sec32 sec26 sec

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

- [CRM Loading States: Troubleshooting lags and Impact of Custom CSS and JS](https://help.gohighlevel.com/support/solutions/articles/48001176375-crm-loading-states-troubleshooting-lags-and-impact-of-custom-css-and-js)
- [My CRM Data is Loading Slowly What Can I Do?](https://help.gohighlevel.com/support/solutions/articles/48001210187-my-crm-data-is-loading-slowly-what-can-i-do-)
- [Enabling Cross-Site Tracking (3rd Party Cookies)](https://help.gohighlevel.com/support/solutions/articles/155000000178-enabling-cross-site-tracking-3rd-party-cookies-)

## Related Articles

- [FAQs, Basic Troubleshooting - Funnels, Websites, Webinars](https://help.gohighlevel.com/support/solutions/articles/155000004983-faqs-basic-troubleshooting-funnels-websites-webinars)
- [Analysing Website Performance of a prospect in the Marketing Audit Report](https://help.gohighlevel.com/support/solutions/articles/155000002054-analysing-website-performance-of-a-prospect-in-the-marketing-audit-report)
- [My CRM Data is Loading Slowly What Can I Do?](https://help.gohighlevel.com/support/solutions/articles/48001210187-my-crm-data-is-loading-slowly-what-can-i-do-)
- [How to Improve Funnel & Website Page Speed](https://help.gohighlevel.com/support/solutions/articles/155000006268-how-to-improve-funnel-website-page-speed)
- [Developer Guide for selling Web-Widgets on the App Marketplace](https://help.gohighlevel.com/support/solutions/articles/155000003915-developer-guide-for-selling-web-widgets-on-the-app-marketplace)
- [Refresh/Update Snapshots](https://help.gohighlevel.com/support/solutions/articles/48000982583-refresh-update-snapshots)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001176375,)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001176375-crm-loading-states-troubleshooting-lags-and-impact-of-custom-css-and-js/hit)