---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app"
title: " Enable Tap to Pay on your Whitelabelled Mobile App : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Mobile & Desktop App](https://help.gohighlevel.com/support/solutions/48000455168)
4. [Whitelabel Mobile App](https://help.gohighlevel.com/support/solutions/folders/48000666028)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Mobile & Desktop App](https://help.gohighlevel.com/support/solutions/48000455168)
   - [Whitelabel Mobile App](https://help.gohighlevel.com/support/solutions/folders/48000666028)
6. Enable Tap to Pay on your Whitelabelled Mobile App

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

# Enable Tap to Pay on your Whitelabelled Mobile App

Modified on: Thu, 23 Oct, 2025 at 12:03 AM

## **Overview**

This guide provides a comprehensive step-by-step walkthrough for enabling **Tap to Pay on iPhone** or on your **Android** **whitelabelled mobile app**.

Tap to Pay allows merchants to accept **contactless payments directly through their iPhone**, eliminating the need for additional payment hardware and creating a seamless checkout experience for both businesses and customers

* * *

## **Please Note**

- You **must have an organization-level Apple Developer account** with Account Holder access.

- Tap to Pay on iPhone is available only for **supported payment service providers (PSPs)**. HighLevel’s whitelabelled apps use **Stripe** or **Square** as the PSP.

- Apple individually reviews entitlement requests before granting approval.

- Tap to Pay on Android follows a **different, simpler process** — no prior approval is required.


* * *

## **Covered in this Article**

- What is Tap to Pay on iPhone?

- Enabling Tap to Pay: Process Overview

- Step 1: Request Tap to Pay Entitlement

- Step 2: Filling Out the Request Form

- Step 3: Entitlement Addition by Apple

- Merchant Onboarding Process

- Enabling Tap to Pay on Android

- Support and Timeline

- FAQs


* * *

## **What is Tap to Pay on iPhone?**

**Tap to Pay on iPhone** enables merchants to **accept contactless debit and credit cards, Apple Pay, and other digital wallets** using just their iPhone. This feature integrates directly with your HighLevel whitelabelled app, letting sub-accounts receive payments through their **connected Stripe** or **Square account**.

Apple requires each app to have an **entitlement** to use this feature, which is granted upon approval through the **Tap to Pay on iPhone Entitlement Request Form**.

* * *

## **Enabling Tap to Pay: Process Overview**

The setup process consists of **three main steps**:

1. **Request Tap to Pay on iPhone Entitlement**

2. **Fill Out and Submit the Entitlement Request Form**

3. **Await Apple’s Review and Entitlement Addition**


Once approved, you can **request an update** for your whitelabelled app through HighLevel to enable Tap to Pay functionality.

* * *

## **Step 1: Request Tap to Pay Entitlement**

### **Prerequisite**

- You must be logged in as the **Account Holder** of your **organization-level Apple Developer account**.

- Go to Apple’s official request page - [Tap to Pay on iPhone Entitlement Request Form](https://developer.apple.com/contact/request/tap-to-pay-on-iphone/)


### **Action**

- Complete and submit the request form.

- Select your PSP as **Stripe** or **Square**.


### **Review Process**

Apple reviews each request based on the provided details and eligibility.

Once approved, the **Tap to Pay entitlement** will appear under your account’s **Managed Capabilities**.

* * *

## **Step 2: Filling Out the Request Form**

Refer to the **sample document table** for a guide on how to accurately complete each field.

Below are key entries based on the sample form:

| **Field** | **Response Example** |
| --- | --- |
| PSP | Stripe |
| Organization | Your organization name |
| Name | Organization's owner name |
| Email | Your organization's primary email |
| Distribution | App Store and Apple Business Manager |
| Onboarding Description | Merchants are onboarded via the web app as sub-accounts. Once connected to Stripe, they can sign in on mobile to process payments. |
| Countries/Regions | List all the countries or regions where your clients will use Tap to Pay, in order of release. |

Ensure that all responses **match the provided sample document** for a successful approval process .

* * *

## **Step 3: Entitlement Addition by Apple**

Once Apple approves your application:

- The **Tap to Pay entitlement** will be added to your developer account.

- Notify your HighLevel account representative to **request an update for your whitelabelled iOS app**.

- After the update, your iOS app will be able to **process Tap to Pay transactions**.


* * *

## **Merchant Onboarding Process**

Merchant onboarding primarily occurs through the **HighLevel web app**:

1. The main account owner adds merchants as **sub-accounts**.

2. Each merchant connects their **Stripe** or **Square account** via the web interface.

3. Merchants then sign in to the **mobile app using sub-account credentials** to start accepting payments directly into their Stripe accounts.


This structure ensures a smooth and independent onboarding process for each merchant.

* * *

## **Enabling Tap to Pay on Android**

Unlike iOS, **Tap to Pay on Android** does **not require Google's approval** or entitlement requests.

To enable Tap to Pay on Android:

- Request a **whitelabel app update** following the standard HighLevel update request process.

- Once updated, your Android app will automatically support Tap to Pay payments.


* * *

## **Support and Timeline**

### **Support Channels**

- **Apple Developer Support:** For issues related to the entitlement process.

- **HighLevel Support Team:** For app updates or integration-related concerns.


### **Expected Timeline**

Apple’s review time can vary — typically ranging from **a few days to several weeks**.

Plan your app release timelines accordingly to account for review delays.

* * *

## **FAQs**

**Q1: Do I need to pay extra for the Tap to Pay entitlement?**

No. The entitlement itself is free, but Apple must approve it before it becomes active.

**Q2: Can I use Tap to Pay without Stripe integration?**

No. HighLevel’s Tap to Pay implementation currently supports **Stripe** and **Square only** as the payment service provider.

**Q3: How long does the approval process take?**

While Apple doesn’t specify an exact timeframe, approvals typically take **1–6 weeks** depending on account eligibility.

**Q4: What happens if my entitlement request is rejected?**

You can resubmit with corrected information or contact Apple Developer Support for clarification.

**Q5: Is Tap to Pay available globally?**

Availability depends on **Apple’s regional rollout** and **Stripe’s country support**. Ensure you list all intended countries in your request form.

* * *

**Next Steps:**

Once your entitlement is approved, reach out to your HighLevel contact or support team to request the **Tap to Pay-enabled app build** for your whitelabelled iOS and Android apps.

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

- [White Label the IPhone App](https://help.gohighlevel.com/support/solutions/articles/48000982208-white-label-the-iphone-app)
- [White Label the Android App](https://help.gohighlevel.com/support/solutions/articles/48000982209-white-label-the-android-app)
- [How to Promote and Customize Your Whitelabel Mobile App: A Comprehensive Guide](https://help.gohighlevel.com/support/solutions/articles/155000000089-how-to-promote-and-customize-your-whitelabel-mobile-app-a-comprehensive-guide)
- [Group Chat in the HighLevel Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005149-group-chat-in-the-highlevel-mobile-app)
- [Spam Tagging on Mobile](https://help.gohighlevel.com/support/solutions/articles/155000005215-spam-tagging-on-mobile)
- [How to Use Mobile App DND in Contacts](https://help.gohighlevel.com/support/solutions/articles/155000005437-how-to-use-mobile-app-dnd-in-contacts)

## Related Articles

- [Tap to Pay on Square for POS and Mobile Payments](https://help.gohighlevel.com/support/solutions/articles/155000005506-tap-to-pay-on-square-for-pos-and-mobile-payments)
- [Accept Payments on Stripe Mobile POS Terminals](https://help.gohighlevel.com/support/solutions/articles/155000004148-accept-payments-on-stripe-mobile-pos-terminals)
- [Pay For Service Appointments In The Mobile App POS](https://help.gohighlevel.com/support/solutions/articles/155000003445-pay-for-service-appointments-in-the-mobile-app-pos)
- [How to use Direct Payments in Estimates in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000005617-how-to-use-direct-payments-in-estimates-in-the-mobile-app)
- [WhatsApp Voice Notes in the Mobile App](https://help.gohighlevel.com/support/solutions/articles/155000004564-whatsapp-voice-notes-in-the-mobile-app)
- [Tap to Pay](https://help.gohighlevel.com/support/solutions/articles/155000000950-tap-to-pay)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006767-enable-tap-to-pay-on-your-whitelabelled-mobile-app/hit)