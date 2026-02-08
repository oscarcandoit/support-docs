---
title: "Configure SAML with Okta"
source: "https://docs.virustotal.com/docs/saml-okta"
scraped_at: "2026-02-08T06:19:18.747Z"
---

# Set up[](#set-up)

You can configure VirusTotal to use SAML with Okta. These are the recommended steps for this set-up:

## 1. Okta Admin Panel[](#1-okta-admin-panel)

In the Okta Admin Panel, go to the Applications tab:

*

## 2. Applications tab[](#2-applications-tab)

In the Applications tab, click on “Create App Integration”

![Okta Create APP](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_createapp_20231026.png)

## 3. Select “SAML 2.0”[](#3-select-saml-20)

![Okta Create APP choose SAML](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_createappsaml_20231026.png)

## 4. Provide an app name and a logo[](#4-provide-an-app-name-and-a-logo)

![Okta General Settings](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_generalsettings_20231026.png)

## 5. Fill in the fields[](#5-fill-in-the-fields)

Fill the following fields with the following information:
* **Single sign on URL:**
[https://virustotalcloud.firebaseapp.com/__/auth/handler](https://virustotalcloud.firebaseapp.com/__/auth/handler)
* **Audience URI:** You can use any string you want as “Audience URI” as long as it&#x27;s exactly the same in VirusTotal and in Okta. Alternatively, you can also introduce the Single sign on URL mentioned above
* **Name ID:** “EmailAddress”
* **Application username:** “Email”
* Leave all other fields with their default values:

![Okta SSO URL](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_ssourl_20231026.png)

## 6. Configuration is finished. View Setup Instructions[](#6-configuration-is-finished-view-setup-instructions)

Once your configuration is finished, this is how your configuration should look. Click on the “View Setup Instructions” button:

![Okta Setup Instructions](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_setupinstructions_20231026.png)

## 7. Overview[](#7-overview)

You should see something like this:

![Okta ](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_details_20231026.png)

## 8. Copy data in VirusTotal[](#8-copy-data-in-virustotal)

Copy those values in your VirusTotal’s group configuration available at [https://www.virustotal.com/gui/group/GROUP_NAME/settings](https://www.virustotal.com/gui/group/GROUP_NAME/settings) and click on Save SSO data:

![Okta VT group settings](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_vtgroupsettings_20231026.png)

## 9. Copy the VirusTotal sign-in URL[](#9-copy-the-virustotal-sign-in-url)

Copy the URL at the “VirusTotal sign-in URL” section and use it to configure a bookmark app that will launch the sign-in process.

![Okta Copy URL](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_copyurl_20231026.png)
![Okta Add Bookmark](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_addbookmark_20231026.png)

## 10. Bookmark app[](#10-bookmark-app)

Your users must use the bookmark app to login into VirusTotal. Make sure the SAML app is hidden for them.

![Okta Hide Icon](https://storage.googleapis.com/vtdocresources/guides/account-management/okta_hideicon_20231026.png)

# Troubleshooting[](#troubleshooting)

This section aims to provide steps to solve the most common issues when setting up a SAML configuration.

- 

Unable to Process request due to missing initial state. This may happen if browser sessionStorage is inaccessible or accidentally cleared*: Check the reply URL is configured correctly on your IdP configuration.

- 

*Pop up blocked*: The signin dialog opens in a popup, so you need to explicitly allow virustotal.com to open popups.

- 

*Response *: the field "identity provider issuer" must be an URL to your SAML provider.

- 

*Error: app_not_configured_for_user*: Specifically when configuring SAML using Google Workspace. This error occurs when attempting to log into signin.blackbaud.com using a BBID enabled Google account while another Google account is already signed in in the browser

- 

*User is not assigned to this application.*: Contact your group administrators so they can add you to the user list on Okta.

If you still need assistance, [contact our support team](https://www.virustotal.com/gui/contact-us/technical-support) attaching the SAML XML configuration.

**Updated about 2 months ago