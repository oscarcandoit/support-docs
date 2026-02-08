---
title: "Walkthrough guide for VirusTotal group administrators"
source: "https://docs.virustotal.com/docs/admins-guide"
scraped_at: "2026-02-08T06:19:19.375Z"
---

VirusTotal’s premium users are split in two flavors: regular users and administrators. Administrators have additional privileges to regular users, designed to manage the VirusTotal group assigned to them.

# General notions[](#general-notions)

All actions restricted to administrators are accessible from the **web interface** under the **My Group** menu option, on the top right corner.

*

## Group information[](#group-information)

Here you can find the group’s preferences including two of the most important group level parameters, the **group’s ID** and the **group&#x27;s Token**, which are required in multiple automation and object-sharing tasks.

Additional group related information is split in several tabs which allow management of different types of features. Please note that depending on the group&#x27;s configuration and acquired services, the number of tabs available for each group can vary.

![](https://files.readme.io/7359bd7a7c6964ac19956f17ba0deada5c672402331cfd0fc9a4ff9ffe255f77-group-tabs-20251218.png)

## User information[](#user-information)

Going down to the user level, they are listed in the **USERS** tab, where group administrators can easily filter shown group members by security settings and group role and also by typing the name or email address of the user of interest.

![](https://files.readme.io/4524156c848daab14ebfdb83ff5bc6b82027cd4bb6a8c3e8dc37384e978b4122-user-filter-20251218.png)

Additionally, by clicking on a user name, you automatically pivot to the user’s profile where **user ID** is shown next to the user&#x27;s avatar. This ID is required in multiple automation tasks that are shown in next sections.

![](https://files.readme.io/9a81cc481c66fc0c5221987410c85d0da21694c1b10b389d6442a29c9ea30acd-user-profile-20251218.png)

## Service account information[](#service-account-information)

In addition to users, a group could also have service accounts which are very useful for tasks automation since they are unaffected by people changes, as they are not tied to any specific individual and they don’t require an email address to be created. This makes them a more reliable and consistent way to grant access to automation resources than user accounts.

Service accounts are listed on the **Service accounts** section available on the **USERS** tab where you can check their **IDs**.

![](https://files.readme.io/9836c0a393e1c80b8d5835e2f5c7fd5c8e5d9f1c3922cf5567f34d07590bfe49-service-account-id-20251218.png)

## API notions[](#api-notions)

In addition to the web interface there is a set of **API** endpoints designed to automate most administrative tasks (more on this later). These endpoints are shown on the “**VT ENTERPRISE ADMINISTRATION**” section of the [API v3 documentation](/reference/overview) - please note that NOT all of them require administrator privileges.

Their usage requires authentication/authorization through the admin&#x27;s API key that can be found [here](https://www.virustotal.com/gui/my-apikey) (or on the top right corner of the web interface -> API key menu option).

# Everything a VT Admin can do[](#everything-a-vt-admin-can-do)

As we discussed, almost every action in VT can be performed in 2 ways: via web interface and via API v3 requests. We grouped all actions reserved for administrator users in the following categories.

- [1. Group members management](#1-group-members-management)

[1.1. Getting group members](#11-getting-group-members)

[1.1.1. Getting the list of users and service accounts](#111-getting-the-list-of-users-and-service-accounts)

[1.2. Users management](#12-users-management)

- [1.2.1. Adding new user to the VT group](#121-adding-new-user-to-the-vt-group)

- [1.2.2. Adding new user to the VT group - automatically](#122-adding-new-user-to-the-vt-group---automatically)

- [1.2.3. Removing user from the VT group](#123-removing-user-from-the-vt-group)

- [1.2.4. Managing user privileges](#124-managing-user-privileges)

- [1.2.5. Managing user API allowance](#125-managing-user-api-allowance)

[1.3. Service accounts management](#13-service-accounts-management)

- [1.3.1. Adding a new service account to the VT group](#131-adding-a-new-service-account-to-the-vt-group)

- [1.3.2. Removing a service account from the VT group](#132-removing-a-service-account-from-the-vt-group)

- [1.3.3. Getting a service accounts API key](#133-getting-a-service-accounts-api-key)

[2. Group management](#2-group-management)

- [2.1. General settings](#21-general-settings)

[2.1.1. Editing organization name, domain name and avatar](#211-editing-organization-name-domain-name-and-avatar)

[2.2. Security features](#22-security-features)

- [2.2.1. Editing all group members session timings](#221-editing-all-group-members-session-timings)

- [2.2.2. Single Sign On - SSO](#222-single-sign-on---sso)

[2.3. Private Scanning settings](#23-private-scanning-settings)

- [2.3.1. Editing PS retention period and storage region](#231-editing-ps-retention-period-and-storage-region)

[2.4. Invoice settings](#24-invoice-settings)

- [2.4.1. Getting invoice notifications](#241-getting-invoice-notifications)

[3. Consumption](#3-consumption)

- [3.1. VirusTotal enterprise features consumption](#31-virustotal-enterprise-features-consumption)

[3.1.1. Getting current month group overall enterprise consumption](#311-getting-current-month-group-overall-enterprise-consumption)

- [3.1.2. Getting users individual enterprise consumption](#312-getting-users-individual-enterprise-consumption)

[3.2. VirusTotal API consumption](#32-virustotal-api-consumption)

- [3.2.1. Getting group overall API consumption](#321-getting-group-overall-api-consumption)

- [3.2.2. Getting users individual API consumption](#322-getting-users-individual-api-consumption)

[4. Audit Log](#4-audit-log)

- [4.1. Filtering logs](#41-filtering-logs)

- [4.2. Exporting logs](#42-exporting-logs)

- [4.3. Seeing details](#43-seeing-details)

## 1. Group members management[](#1-group-members-management)

### 1.1. Getting group members[](#11-getting-group-members)

#### 1.1.1. Getting the list of users and service accounts[](#111-getting-the-list-of-users-and-service-accounts)

**Web interface =>** On the **My Group** menu option -> **USERS** tab, the list of users is shown under the **Group members** section, and the list of service accounts under the **Service accounts** section. All of them can be exported by administrators through the **Download** button in several file formats, as shown in the following image.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/users-service-accounts-list-20231030.png)

The result file will include the following information: username, first name, last name, email and type to identify whether it is a user account or a service account.

**VirusTotal API =>** The endpoint [/v3/groups/{id}/{relationship}](/reference/groups-relationships) returns the objects related to the group based on group’s ID [(check group ID)](#group-information) and relationship which identifies the type of objects to request and whose values in this case are “users” and “service_accounts”.

Other endpoints provide the list of users and service accounts, but they don’t provide the same information as the already mentioned one: [/v3/groups/{id}/relationships/users](/reference/get-group-users) and [/v3/groups/{id}/relationships/service_accounts](/reference/get-service-accounts-of-a-group).

**API example** - refer to our GitHub repository, section [**Group members management**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#group-members-management).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 1.2. Users management[](#12-users-management)

#### 1.2.1. Adding new user to the VT group[](#121-adding-new-user-to-the-vt-group)

**Web interface =>** From the **My Group** menu option -> **USERS** tab -> **Add** dropdown button -> **User** option, an administrator is able to create a new group member.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/add-user-1-20231030.png)

On the opened form, they have to specify the user&#x27;s email address and user’s flavor or privileges as administrator or common member before saving the request.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/add-user-2-20231030.png)

If a user is added to a group in VT but doesn&#x27;t yet have an account, they will be sent an email invitation to create one. Upon account creation, the user will be automatically added to the group.

On the contrary, if the user already has an existing account, they will be automatically added to the group and receive a welcome email.

**VirusTotal API =>** The [/v3/groups/{id}/relationships/users](/reference/update-group-users) endpoint allows administrators to add users to the group as common members. This endpoint requires the group ID ([check group ID](#group-information)) as a parameter, and a list of user objects identified by their email addresses to convert in new group members as in the following example:

**JSON
`payload = {
 "data": [
 {"type":"user","id":"user_1_email_address"},
 {"type":"user","id":"user_2_email_address"}
 ]
}`
There’s no specific endpoint for creating administrator members as in the web interface, although there’s a way of granting admin privileges to common users when needed. Check out the ‘[Managing users privileges](#124-managing-user-privileges)’ section.

API example** - refer to our GitHub repository, section [**Group members management**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#group-members-management).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.2.2. Adding new user to the VT group - automatically[](#122-adding-new-user-to-the-vt-group---automatically)

**Web interface =>** On the **My Group** menu option -> **GROUP PREFERENCES** section, the pen icon allows administrators to edit the **Auto add emails** config parameter. This text box supports 2 types of inputs or conditions: complete email addresses and/or organization domain names regular expressions, with wildcards, (@virustotal.com or* @google.com), *one entry per line*.

When enabling this feature, new VirusTotal users whose email address meet one of the configured conditions, are automatically added to the group, inheriting group&#x27;s default configurations.

*
![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/auto-add-user-2-20231030.png)

The same can be done via **My Group** menu option -> **SETTINGS** tab -> **Group info** section -> **Auto add emails** text box. Additionally, here administrators can enable the below checkbox to be notified every time a new user is added to their group as a group member.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/auto-add-user-3-20231030.png)

**VirusTotal API =>** The [/v3/groups/{id}](/reference/patch-group) endpoint can be used to PATCH a VirusTotal group object based on its group ID. ([Check group ID](#group-information)) The parameter associated with the automatically adding users to groups feature is _data->attributes->auto_add_users_. This parameter is a list of regular expressions (*@company_domain) and complete email addresses that are going to be checked with every new VT user, and those meeting any entry will be automatically added to the group as a new member. When using this endpoint, don’t forget to specify the object **`&#x27;type&#x27;: &#x27;group&#x27;` in the payload parameter as in the following example:

JSON
`payload = {
 "data": {
 "type": "group",
 "attributes": {
 "auto_add_users":["*@virustotal.com", "*@google.com", "email_addres1", "email_address2"]
 }
 }
}`
Please note that since this parameter is rarely edited and the web interface is more than enough to cover it, we highly recommend editing this parameter manually through the web interface.

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.2.3. Removing user from the VT group[](#123-removing-user-from-the-vt-group)

Web interface =>** The list of users is given on the **My Group** menu option -> **USERS** tab -> **Group members** section. Each user has a bin icon at the right, that allows administrators to remove it from the VT group, so that it is no longer a group member. Instead, it becomes a free user with limited access to VirusTotal’s products.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/remove-user-20231030.png)

**VirusTotal API** => The [/v3/groups/{id}/relationships/users/{user_id}](/reference/delete-user-from-group) endpoint removes a given user from a given group, based on their identifiers. ([Check group ID](#group-information)) ([Check user ID](#user-information)) When removing a user from the group, it becomes a free user with limited access to VirusTotal’s products.

**API example** - refer to our GitHub repository, section [**Group members management**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#group-members-management).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.2.4. Managing user privileges[](#124-managing-user-privileges)

**Web interface =>** The list of users is given on the **My Group** menu option -> **USERS** tab -> **Group members** section. Each of them has a dropdown option on the right showing the user flavor. From here, administrators are able to change user&#x27;s privileges by choosing between **Admin** and **Member** options.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/change-user-privileges-20231030.png)

**VirusTotal API =>** The [/v3/groups/{id}/relationships/administrators](/reference/post-group-administrators) endpoint grants admin privileges to a list of users based on their email addresses and the group ID parameter. ([Check group ID](#group-information))

On the other hand, the [/v3/groups/{id}/relationships/administrators/{user_id}](/reference/delete-user-group-administrator) endpoint revokes admin privileges of a given user based on its ID and the group ID. ([Check user ID](#user-information)) ([Check group ID](#group-information))

**API example** - refer to our GitHub repository, section [**Group members management**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#group-members-management).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.2.5. Managing user API allowance[](#125-managing-user-api-allowance)

**Web interface =>** The list of users is given on the **My Group** menu option -> **USERS** tab -> **Group members** section. Each of them has a pen icon that allows administrators to change the user’s **Daily API cap** that is shown next to the pen icon.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/change-user-api-20231030.png)

**VirusTotal API =>** The [/v3/users/{id}](/reference/patch-user-id) endpoint can be used to PATCH a VirusTotal user object based on its ID. ([Check user ID](#user-information)) This endpoint also serves to change an user daily API cap as in the following example:

**JSON
`payload = {
 "data": {
 "attributes": {
 "quotas": {
 "api_requests_daily": {
 "allowed": 300
 }
 }
 },
 "type": "user"
 }
}
`
API example** - refer to our GitHub repository, section [**Group members management**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#group-members-management).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 1.3. Service accounts management[](#13-service-accounts-management)

#### 1.3.1. Adding a new service account to the VT group[](#131-adding-a-new-service-account-to-the-vt-group)

**Web interface =>** Service accounts are very useful in automating enrichment and other automation tasks, since they are not tied to any specific individual.

From the **My Group** menu option -> **USERS** tab -> **Add** dropdown button -> **Service Account** option, administrators are able to create new service accounts.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/add-service-account-1-20231030.png)

On the opened form, administrators only have to specify the name or identifier that the new service account will receive, before saving the request.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/add-service-account-2-20231030.png)

**VirusTotal API =>** Although creating new service accounts is a very occasional activity and you might not need to automate it because the web interface serves well for this purpose, the [/v3/groups/{id}/relationships/service_accounts](/reference/create-a-new-service-account) endpoint can be used as well. It only requires the group ID ([check group ID](#group-information)) and a new service account object with the ID that it will receive as in the following example:

**json
`payload = {
 "data": [
 {"id": "vt_enrichment", "type": "service_account"}
 ]
}`
[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.3.2. Removing a service account from the VT group[](#132-removing-a-service-account-from-the-vt-group)

Web interface =>** The list of service accounts is given on the **My Group** menu option -> **USERS** tab -> **Service accounts** section. Each of them has a bin icon at the right, that allows administrators to delete the specific service account.

Please make sure that you are not going to interfere with any integration with VT by removing service accounts whose API key is being used internally.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/remove-service-account-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 1.3.3. Getting a service accounts API key[](#133-getting-a-service-accounts-api-key)

**Web interface =>** The list of service accounts is given on the **My Group** menu option -> **USERS** tab -> **Service accounts** section. Each of them has an icon for unhiding the API key and another icon for copying it to the clipboard. Only administrators are able to get the API key of a service account to use it on automation tasks such as IoCs enrichment.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/service-account-api-key-20231030.png)

**VirusTotal API =>** Although checking service accounts API keys is a very occasional activity and you might not need to automate it because the web interface serves well to this purpose, the [/v3/service_accounts/{id}](/reference/get-a-service-account-object) endpoint can be used as well. It only requires the service account ID or name. ([Check service account ID](#service-account-information))

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

## 2. Group management[](#2-group-management)

### 2.1. General settings[](#21-general-settings)

#### 2.1.1. Editing organization name, domain name and avatar[](#211-editing-organization-name-domain-name-and-avatar)

**Web interface =>** On the web platform, administrators can find 2 ways of modifying organization name and domain name.

- The first one is on the **My Group** menu option -> **GROUP PREFERENCES**. By selecting the pen icon administrators are able to edit **Organization** and **Domain name** parameters.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/org-name-domain-1-20231030.png)

- The second way of editing this data is from the **My Group** menu option -> **SETTINGS** tab -> **Group info** section -> **Organization** and **Domain name** text boxes.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/org-name-domain-2-20231030.png)

As for the group avatar, on the **My Group** menu option, at the top left is a **Change avatar** button that allows not only administrators but also common users to change group&#x27;s avatar.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/change-avatar-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 2.2. Security features[](#22-security-features)

#### 2.2.1. Editing all group members session timings[](#221-editing-all-group-members-session-timings)

**Web interface =>** On the **My Group** menu option -> **SETTINGS** tab -> **Security controls** section, administrators are able to define session maximum lifetime and inactivity time. Both of them are represented in seconds although they also show some default options by clicking on the input box.

When these times are exceeded, users are forced to re-authenticate.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/session-timings-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 2.2.2. Single Sign On - SSO[](#222-single-sign-on---sso)

**Web interface =>** On the **My Group** menu option -> **SETTINGS** tab -> **Single sign-on** section, administrators are able to configure the **Identity provider** for SSO. Through the dropdown option, administrators can enable one of the 3 SSO services already integrated or configure other preferred identity providers via Security Assertion Markup Language (**SAML**).

Please note that this only affects the authentication on the web platform. VirusTotal API authentication is not affected.

- **Already integrated identity provider services***

If users have accounts in any of the 3 services (Google, GitHub, Microsoft), they can use those services to authenticate on our platform. For more information, refer to this [document](/docs/sso-authentication). Please note that users can always use one of these accounts without having to modify the My Group SSO configuration, but once configured, no one no longer will be able to authenticate on the platform via common credentials.

*

- **SAML***

For configuring SAML administrators can check out these guide examples for [Okta](/docs/saml-okta), [Ping](/docs/saml-ping) or [Entra ID](/docs/saml-entraid) and replicate it to the preferred identity provider. The information needed to configure it is shown when selecting the **Other (SAML)** option in the **Identity provider** dropdown element.

Please note that for forcing users to only authenticate via SAML, a checkbox is provided. If this checkbox is not selected, users can use both methods of authentication: SAML and common credentials. We recommend allowing both authentication mechanisms during SAML configuration to avoid losing access to the platform in case of any misconfiguration.

*

Please note that you must manually update rotated certificates in the SAML settings on the platform.

- **OIDC***

The information needed to configure it is shown when selecting the **Other (OIDC)** option in the **Identity provider** dropdown element.

Please note that for forcing users to only authenticate via OIDC, a checkbox is provided. If this checkbox is not selected, users can use both methods of authentication: OIDC and common credentials. We recommend allowing both authentication mechanisms during OIDC configuration to avoid losing access to the platform in case of any misconfiguration.

*

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 2.3. Private Scanning settings[](#23-private-scanning-settings)

#### 2.3.1. Editing PS retention period and storage region[](#231-editing-ps-retention-period-and-storage-region)

**Web interface =>** On the **My Group** menu option -> **SETTINGS** tab -> **Private scanning** section, administrators can configure the default **Retention period days** of files submitted to Private Scanning and also their **Storage region** during their lifetime in VirusTotal’s database.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/private-scanning-1-20231030.png)

This configuration will be used by default, although users are able to configure these parameters for each file they are submitting to Private Scanning directly from the submission form.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/private-scanning-2-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 2.4. Invoice settings[](#24-invoice-settings)

#### 2.4.1. Getting invoice notifications[](#241-getting-invoice-notifications)

**Web interface =>** On the **My Group** menu option -> **SETTINGS** tab -> **Group info** section -> **Send invoices to** text box, administrators can configure a list of email addresses to be notified of every new invoice.

Please note that this is available only if the organization is paying VirusTotal Enterprise via credit card.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/invoice-1-20231030.png)

Additionally, invoices can be accessed by administrators from the **My Group** menu option -> **INVOICES** tab.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/invoice-2-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

## 3. Consumption[](#3-consumption)

### 3.1. VirusTotal enterprise features consumption[](#31-virustotal-enterprise-features-consumption)

#### 3.1.1. Getting current month group overall enterprise consumption[](#311-getting-current-month-group-overall-enterprise-consumption)

**Web interface =>** On the **My Group** menu option -> **VT ENTERPRISE** tab -> the **Consumption current month** section shows the consumption by VirusTotal feature. In blue is highlighted consumption of the group over the current month, while in black it shows the overall allowance of the group. If any of the features is not available for the group, it will be identified by 0 allowance, while exceeded consumption will be highlighted in red.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/group-enterprise-consumption-20231030.png)

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 3.1.2. Getting users individual enterprise consumption[](#312-getting-users-individual-enterprise-consumption)

**Web interface =>** On the **My Group** menu option -> **VT ENTERPRISE** tab, there are 4 sections breaking down group’s current month VT enterprise consumption by user:

- **Search consumption by user**

- **Downloads consumption by user**

- **Livehunt rules consumption by user**

- **Retrohunt consumption by user**

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/user-enterprise-consumption-1-20231030.png)
![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/user-enterprise-consumption-2-20231030.png)

### 3.2. VirusTotal API consumption[](#32-virustotal-api-consumption)

#### 3.2.1 Getting group overall API consumption[](#321-getting-group-overall-api-consumption)

**Web interface =>** On the **My Group** menu option -> **VT API** tab, there are 2 sections showing the group&#x27;s overall API consumption: **Consumption last 30 days** breaks down the group&#x27;s last 30 days API consumption by day, and **Consumption by endpoint** shows previous day consumption by endpoint. For more granular details please use the VirusTotal APIv3.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/group-api-1-20231030.png)
![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/group-api-2-20231030.png)

**VirusTotal API =>** The [/v3/groups/{id}/api_usage](/reference/group-api-usage) endpoint shows a group’s API usage broken down by day and endpoint, pointing out the endpoints that really consume API as well as those that do not (**`not_consuming_quota`). The data available includes only the last 60 natural days and the required parameter is the group ID. ([Check group ID](#group-information)) Additionally, you can specify the start day and last day parameters of the time range you want to track (yyyymmdd format).

API example** - refer to our GitHub repository, section [**Consumption**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#consumption).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

#### 3.2.2. Getting users individual API consumption[](#322-getting-users-individual-api-consumption)

**Web interface =>** On the **My Group** menu option -> **VT API** tab -> **Consumption by user** section shows previous day’s consumption by user. For more granular details please use the APIv3.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/user-api-20231030.png)

**VirusTotal API =>** The [/v3/users/{id}/api_usage](/reference/user-api-usage) endpoint shows an user&#x27;s API usage broken down by day and endpoint, pointing out the endpoints that really consume API as well as those that do not (**`not_consuming_quota`). The data available includes only the last 60 natural days and the required parameter is the user ID. ([Check user ID](#user-information)) Additionally, you can specify the start day and last day parameters of the time range you want to track (yyyymmdd format).

API example** - refer to our GitHub repository, section [**Consumption**](https://github.com/VirusTotal/vt-use-cases/blob/main/admins_guide/VT_group_admins_API_guide.md#consumption).

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

## 4. Audit Log[](#4-audit-log)

### 4.1. Filtering logs[](#41-filtering-logs)

**Web interface =>** From the **My group** menu option -> **AUDIT LOG** tab -> administrators can view the Audit Log, detailing the platform&#x27;s most relevant actions. The log includes fields like **Timestamp (UTC)**, **Username**, **User Email**, **Source IP**, **Target Type**, **Target Identifier**, and the **Action** taken.

Logs can be filtered using the collapsible left-side panel, which features key attributes like **Date**, **User**, **Action** and **Target Identifier**.

The **User** filter, along with the **Username** and **User Email** fields in the log table, all refer to the user who performed the action.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/audit_log_filters_20251029.png)

**VirusTotal API =>** The [/api/v3/groups/{group}/activity_log_entries](/reference/get-activity-log) endpoint retrieves a list of activity logs. It supports a **`filter` query parameter that allows you to narrow the results using the same criteria available in the UI.

Be aware that unlike the UI (where Username** and **User Email** are direct columns), the API requires you to access the user who performed the action through the dedicated **`user` relationship. Consult the endpoint document for details.

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 4.2. Exporting logs[](#42-exporting-logs)

Web interface =>** From the **My group** menu option -> **AUDIT LOG** tab -> **Export** drop-down menu, administrators can export the Audit Log in **CSV** or **Json** format, or **Copy to clipboard** in JSON format. The current filters are applied to all exported logs.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/audit_log_export_20251029.png)

**VirusTotal API =>** Use the [/api/v3/groups/{group}/activity_log_entries](/reference/get-activity-log) endpoint to retrieve activity logs in JSON format, applying the filters and relationships detailed in the endpoint documentation.

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

### 4.3. Seeing details[](#43-seeing-details)

**Web interface =>** From the **My group** menu option -> **AUDIT LOG** tab -> administrators can view the Audit Log of the platform&#x27;s most relevant actions. For detailed context on an event, like which user was granted admin privileges or which user was removed from the group, admins can click the **See details** button located on the right of each log entry, which automatically displays the **Audit Log Event Details**.

![](https://storage.googleapis.com/vtdocresources/guides/admins_guide/img/audit_log_details_20251029.png)

**VirusTotal API =>** The [/api/v3/groups/{group}/activity_log_entries](/reference/get-activity-log) endpoint retrieves activity logs allowing the application of filters and relationships as detailed in the endpoint documentation.

[Back to top](#:~:text=VirusTotal%E2%80%99s-premium-users)

*Updated about 1 month ago