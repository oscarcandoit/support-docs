---
title: "Configure SAML with Entra ID"
source: "https://docs.virustotal.com/docs/saml-entraid"
scraped_at: "2026-02-08T06:19:18.420Z"
---

You can configure VirusTotal to use SAML with Microsoft EntraID. These are the recommended steps for this set-up.

# Configuring the Entra ID Application[](#configuring-the-entra-id-application)

## 1. Entra ID application[](#1-entra-id-application)

In your Azure portal, search for Enterprise Applications.

*

Press the "Create a new application" button.

![Create new application on Entra ID](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_new_application_20250527.png)

## 2. Application configuration[](#2-application-configuration)

Provide a name to the new application (as an example, **VirusTotalSSO**).

Select the "Integrate any other application you don’t find in the gallery (Non-gallery)" option.

Press the "Create" button at the bottom in order to create the instance of the new application.

![Configure application on Entra ID](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_app_configuration_20250527.png)

## 3. Single sign on setup[](#3-single-sign-on-setup)

On the "Overview" tab of the new application, press the "Set up single sign on" button.

![Set up Single Sign on](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_setup_sso_20250527.png)

Select the "SAML" option.

![Single sign on methods](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_saml_option_20250527.png)

## 4. SAML configuration[](#4-saml-configuration)

On the SAML setup, select "Basic SAML configuration" and press "Edit" button.

![Basic SAML configuration](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_basic_saml_configuration_20250527.png)

Press "Add identifier" in order to configure the **Entity ID**. The **Entity ID** must be the same as the **Audience** in the VirusTotal SAML configuration on the group page. Choose a unique string as an example, **VirusTotal_group_id_SSO**.

Press "Add reply URL" in order to configure the **Reply URL**. The **Reply URL** must be **`https://virustotalcloud.firebaseapp.com/__/auth/handler`.

Press "Save" in order to save the changes.

![Saved options](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_saml_params_20250527.png)
> ⚠️
> 
> 
> 
> Note that both Entity ID** and **Reply URL** are mandatory.
> 
> 

## 4. Required data[](#4-required-data)

**ℹ️

Check those fields on the image at the bottom of the section.

### SAML certificate[](#saml-certificate)

Download the certificate from the "SAML Certificate" section.

> ⚠️
> 
> 
> 
> Use the base64 format to download the certificate.
> 
> 

### Login URL[](#login-url)

Copy the Login URL** from the section 4: "Setup VirusTotalSSO" section.

### Azure AD identifier[](#azure-ad-identifier)

Copy the **Azure AD Identifier** from the section 4: "Setup VirusTotalSSO".

![Parameters to be used on the VirusTotal group settings page](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_get_data_20250527.png)

# Configuring the SSO in VirusTotal[](#configuring-the-sso-in-virustotal)

## 1. Group settings page[](#1-group-settings-page)

Open your group settings page: **`https://www.virustotal.com/gui/group/<group_id>/settings`

> ℹ️
> 
> 
> 
> Note that only Group admin are able to see the settings page.
> 
> 

On "Single sign-on" section select the Other (SAML)** option in "Identity provider" dropdown.

![Available SSO options](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_vt_samls_20250514.png)
**⚠️

Do NOT** enable the "All my group users must mandatorily sign in using this identity provider" until you&#x27;ve fully confirmed your SAML configuration is working and your organization can successfully sign in.
Enabling this setting with an incorrect configuration could lock all your users out of the platform.

![Enforce SAML checkbox](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_vt_selected_provider_20250514.png)

## 2. Required fields[](#2-required-fields)

Include the information provided by the Azure application on the different fields:

### Identity provider issuer[](#identity-provider-issuer)

Add the **Azure AD identifier** provided in [step 4: Required data](#required-data).

### Identity provider single sign-on URL[](#identity-provider-single-sign-on-url)

Add the **Login URL** provided in [step 4: Required data](#required-data).

### Audience[](#audience)

Add the **Entity ID** used on [step 3: Configure SAML](#configure-saml). In our example, the value "VirusTotal_group_id_SSO".

### X.509 certificate[](#x509-certificate)

Add the content of the downloaded certificate in [step 4: Required data](#required-data).

![Fields on group settings page](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_vt_fields_20251119.png)

Save your SSO settings to activate SAML.

## 3. Sign-in URL[](#3-sign-in-url)

The **Sign-in URL** will appear once the settings are saved.

**ℹ️

Share this Sign-in URL** with your group members so they can authenticate on the platform using SSO.

![Sign in URL](https://storage.googleapis.com/vtdocresources/guides/account-management/entraid_vt_signing_url_20250527.png)

# Manage user access to VirusTotal on Entra ID platform[](#manage-user-access-to-virustotal-on-entra-id-platform)

Open the application you previously created within Entra ID.

Navigate to the "Users and Groups" section. Here, you can manage which users will have access to the VirusTotal platform via SSO.

> ℹ️
> 
> 
> 
> Once you&#x27;ve confirmed that everything is working correctly, you can enforce SSO authentication for your group selecting the "All my group users must mandatorily sign in using this identity provider" option on the group settings page.
> 
> 

*Updated about 2 months ago