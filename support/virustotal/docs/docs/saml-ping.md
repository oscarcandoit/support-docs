---
title: "Configure SAML with Ping"
source: "https://docs.virustotal.com/docs/saml-ping"
scraped_at: "2026-02-08T06:19:18.338Z"
---

# Set up[](#set-up)

## 1. Create app[](#1-create-app)

In the Ping Identity dashboard, go to applications and create a new application by clicking on the "+" icon in the upper part of the application.

*

## 2. Configure app[](#2-configure-app)

Fill the necessary data, select "SAML" as application type and finally click on "Configure":

![Create SAML app](https://storage.googleapis.com/vtdocresources/guides/account-management/saml_ping_2.png)

## 3. ACS URL and audience[](#3-acs-url-and-audience)

Fill the ACS URL (which is `https://virustotalcloud.firebaseapp.com/__/auth/handler`) and the entity ID (which will be used as audience in the VirusTotal config). The entity ID must be unique so make sure not to use a generic string such as "test" or "example". After that click on "Save".

![ACS URL and audience](https://storage.googleapis.com/vtdocresources/guides/account-management/saml_ping_3.png)

## 4. Retrieve app data[](#4-retrieve-app-data)

Enable the app and retrieve the necessary data required on the VirusTotal configuration: the certificate, issuer ID and SSO URL:

![Certificate, issuer ID and SSO URL](https://storage.googleapis.com/vtdocresources/guides/account-management/saml_ping_4.png)

## 5. VirusTotal configuration[](#5-virustotal-configuration)

Fill this data in the VirusTotal configuration:

![VT configuration](https://storage.googleapis.com/vtdocresources/guides/account-management/saml_ping_5.png)

## 6. Attribute mappings[](#6-attribute-mappings)

Edit the attribute mappings to use email instead of user ID. To do so, go back to the PingIdentity dashboard and click on the "Attribute mappings" tab. Click on the "edit" button highlighted in the following screenshot:

![Correct attribute mappings](https://storage.googleapis.com/vtdocresources/guides/account-management/saml_ping_6.png)

## 7. Login URL[](#7-login-url)

Share the login URL with your users to login in VirusTotal.

*Updated about 2 months ago