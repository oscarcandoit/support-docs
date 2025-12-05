---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel"
title: " Single Sign-On (SSO) on HighLevel : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
4. [User Settings](https://help.gohighlevel.com/support/solutions/folders/48000666473)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Settings](https://help.gohighlevel.com/support/solutions/48000449595)
   - [User Settings](https://help.gohighlevel.com/support/solutions/folders/48000666473)
6. Single Sign-On (SSO) on HighLevel

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

# Single Sign-On (SSO) on HighLevel

Modified on: Tue, 18 Nov, 2025 at 7:22 AM

Single Sign-On (SSO) lets your agency and sub-account users log in to HighLevel with the exact credentials they already use in your identity provider, creating a faster, more professional, and more secure sign-in experience.

```
IMPORTANT: Currently, HighLevel supports OIDC only. SAML is not yet supported, but it is part of the future roadmap.
```

* * *

**TABLE OF CONTENTS**

- [What is Single Sign-On (SSO)?](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#What-is-Single-Sign-On-(SSO)?)
- [Key Benefits of Single Sign-On (SSO)](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Key-Benefits-of-Single-Sign-On-(SSO))
- [Eligibility & Prerequisites](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Eligibility-&-Prerequisites)
- [Navigation and Access](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Navigation-and-Access)
- [Setup Flow](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Setup-Flow)
- [Testing and Enabling SSO](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Testing-and-Enabling-SSO)
- [Troubleshooting Common Errors](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Troubleshooting-Common-Errors)
- [Current Limitations & Troubleshooting Common Errors](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Current-Limitations-&-Troubleshooting-Common-Errors)
- [Add users from the SSO identity provider's (IDP) user database to GHL](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Add-users-from-the-SSO-identity-provider's-(IDP)-user-database-to-GHL)
- [Scopes Explained](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Scopes-Explained)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel#Frequently-Asked-Questions)

* * *

## **What is Single Sign-On (SSO)?**

Single Sign-On (SSO) is an authentication method that connects HighLevel to an external Identity Provider (IdP) that speaks the OpenID Connect (OIDC) standard. After SSO is configured, users are redirected to your IdP, authenticate once, and are passed back to HighLevel with a verified token—eliminating separate usernames and passwords inside HighLevel and giving you centralized control over identity. Agencies on the $497 plan with a white-label domain can enable one IdP connection per agency to power SSO across every sub-account.

* * *

## **Key Benefits of Single Sign-On (SSO)**

- **One-click access**—users sign in once and seamlessly reach all their HighLevel accounts.

- **Stronger security**—password policies, MFA, and conditional access rules stay inside your IdP.

- **Branded experience**—hide email/password and social logins so your logo is the only thing clients see.

- **Centralized user lifecycle**—suspend or delete a user in the IdP to revoke HighLevel access instantly.

- **Audit-ready**—login events flow into the IdP’s reporting for compliance and governance.

* * *

## **Eligibility & Prerequisites**

Agencies must meet all of these conditions before SSO can be enabled:

- Active $497/month agency subscription.

- A configured white-label domain (SSO only appears on the white-labeled login page).

- Exactly one IdP integration per agency (multiple IdPs are not supported).

- IdP must support OpenID Connect; SAML is not currently supported.

- Users must already exist in HighLevel or be created through the Users API with their externalUserId.

* * *

## **Navigation and Access**

Navigate to: **Company Settings in Agency Level** → Single Sign-On (SSO). All agency admins can view and configure SSO. You’ll see an “Enable SSO” CTA to initiate the setup flow.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056463572/original/-YmbEEABdoPBETpza5rEEPq9wD_q19EA6g.png?1761044821)

* * *

## **Setup Flow**

### **Step 1:** Client ID & Secret

- **Method of Authentication:** Locked to OIDC (SAML will be supported in the future).

- **Client ID:** The identifier issued by your IdP.

- **Secret**: A secure key generated by your IdP, used by HighLevel to prove its identity when making requests.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056470964/original/Jj7a06GKc6MquZvGdcCnok4XXC7o6gt-EQ.png?1761048521)

### **Step 2:** OIDC Configuration

You can configure this automatically or manually:

1. **Automatic Discovery (recommended)**: Select Yes for “Use OIDC Config URL.”. Enter the OIDC Config URL from your IdP (usually: https://<idp>/.well-known/openid-configuration).

2. **Manual Configuration:** Enter the following endpoints from your IdP:




   - Authorization URL

   - Token Endpoint

   - User Info Endpoint

**Additional notes:**

- **Scopes**: Define what data HighLevel can retrieve. At a minimum, OpenID is required. Adding a profile and email is recommended.

- **Redirect URL:** Prefilled by HighLevel. If not, it should follow this pattern: **https://<your-whitelabel-domain>/login/sso**.

This Redirect URL must be whitelisted in your IdP configuration. Editing the Redirect URL is not advisable unless correcting it to match the correct pattern.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471009/original/N91KkpzLapE_2qqaNcoYqQaUUYb_rp2dEg.png?1761048574)

### **Step 3:** User Details Mapping

We need to link the user information from your IdP to HighLevel so the same user is correctly recognized across both systems.

**Fields to complete:**

- **Remote ID Field (required):** The unique user ID from your IdP (e.g., sub in OIDC, oid in Azure). Ensures consistent identification of the same user across platforms.

- **ID Field (optional):** The HighLevel user ID. Use if you want to map directly to existing HighLevel users.

- **Email Field:** The user’s email address field in your IdP (e.g., email, userPrincipalName). Helps confirm and map user identities.




  - Please make sure that this field is unique to each user in your system.

  - This is what we will use to update the user's email in our data.

- Email Verified Field (required): Ensures the email has been validated by your IdP. Prevents unverified or spoofed accounts from accessing HighLevel. **Ex: email\_verified.**

**![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471079/original/qtHpFoTrJ9EY2kHnQ2uz4dB8SUu5HBROaw.png?1761048609)**

### **Step 4:** Review & Finish

Double-check all entries. Save the configuration. After completing the setup, you’ll see three collapsible sections:

1. **SSO Configuration** – Displays the configuration you entered.

2. **Test Status** – Allows you to run an automated test to validate the setup. Until a test passes successfully, you cannot enable SSO.

3. **Additional Settings**– Includes toggles to enable SSO for the agency and optionally hide other login methods (Email and Google). Proceed to testing.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471177/original/s8yVBEgJTcdtbpy1J44i-7sK2LfRDPFcog.png?1761048659)

* * *

## **Testing and Enabling SSO**

After configuring SSO, testing the config is mandatory. Unless a successful test is carried out, SSO Toggle cannot be turned on.

**To perform a test:**

- In the test section, click on the “Start Test” button to initiate a new Test.

- Or, click on the three-dotted menu from top right, click on the “Test Configuration” option.




1. This will mimic the SSO Login flow, take the tester to the IdP, and prompt you to log in.

2. Once done, this will redirect you back to the Company Settings SSO tab with updated test status.

3. If successful, you can proceed to enabling SSO. If it fails, you will see some error message to prompt what could be wrong. A list of common errors has been attached.

4. If there are any issues in the IdP Config, you will see the errors with your IdP.

5. **NOTE**: If the SSO Config is updated after performing a test, all the tests will be marked as “EXPIRED”. The test will no longer be considered valid, all your SSO toggles will get reset. This will require you to perform a new Test to enable SSO for your agency again.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056471250/original/fN_c7937jwaBKXG_muOmc66jl5mJ01PxGw.png?1761048709)

* * *

## **Troubleshooting Common Errors**

Editing or Deleting an Existing Configuration: Editing an SSO config invalidates prior test results and disables SSO by default. You must re-test and re-enable.

1. The Hide other login options toggle will not work until SSO is enabled.
2. Deleting an SSO config (from the three-dotted menu):


1. Resets additional settings.

2. Expires test results.

3. Disables SSO for all users.

### **Provider-Specific Guides**

**Auth0**

- Create a Regular Web Application in Auth0.

- Copy Client ID and Secret into HighLevel.

- Add HighLevel Redirect URL to Auth0 Allowed Callback URLs.

- **Config endpoint** → [https://YOUR\_DOMAIN/.well-known/openid-configuration](https://your_domain/.well-known/openid-configuration)

- **Scopes** → openid profile email

- **Mapping**: Remote ID → sub, Email → email, Verified → email\_verified

### Azure Active Directory (Entra ID)

- Azure Portal → App registrations → New registration.

- Add HighLevel Redirect URI.

- Copy Application (Client) ID → HighLevel Client ID.

- Create Client Secret → HighLevel Secret.

- Copy OpenID metadata document URL from Endpoints → HighLevel Config field.

- **Add permissions:** openid, profile, email.

- **Mapping**: Remote ID → oid, Email → userPrincipalName, Verified → true.

### Okta

- Okta Admin → Applications → Create App Integration.

- Select OIDC - OpenID Connect, type = Web Application.

- Add HighLevel Redirect URL under Login redirect URIs.

- Copy Client ID and Secret → HighLevel.

- Use Okta metadata URL: https://<okta-domain>/.well-known/openid-configuration

- Assign groups/users.

- Mapping: Remote ID → sub, Email → email, Verified → email\_verified

* * *

## **Current Limitations & Troubleshooting Common Errors**

Currently supports login only. New users cannot sign up with SSO — they must already exist in HighLevel.

|     |     |     |
| --- | --- | --- |
| Error Message | Cause | How to Fix |
| “Something went wrong, please try again.” | HighLevel couldn’t fetch user details from your IdP. May be incorrect endpoints or temporary IdP downtime. | Verify OIDC Config URL/endpoints, confirm IdP app is active, retry later. |
| “Email is not verified, please contact your admin.” | The email\_verified attribute is missing or false. | Ensure your IdP includes email\_verified = true in the ID token. |
| “remoteIdField is not configured properly, please contact your admin.” | The Remote ID (e.g. sub, oid) is missing or unmapped. | Update your config with a valid unique identifier field. |
| “emailField or idField is not configured properly, please contact your admin.” | Either Email or ID Field mapping is invalid. | Provide a valid Email Field (e.g. email, userPrincipalName) or ID Field. |
| “No user found with this email.” | The IdP user does not exist in HighLevel. | Make sure the user exists within HighLevel and that you have added externalUserId for the existing users. |
| “You are not authorized to access this account. Please contact your admin.” | The user is missing a valid sub-account association. | Ensure the user is linked to a subaccount in HighLevel. |
| “Failed to initiate SSO test.” | The backend could not start the test flow. | Retry. If it persists, email support with your relationship number. |

* * *

## **Add users from the SSO identity provider's (IDP) user database to GHL**

SSO in HighLevel currently supports login only — it does not automatically create new users. To ensure your users can log in via SSO, you’ll need to add them to HighLevel before they attempt to sign in.

Steps to add users

1\. Create a Private Integration Token with the Create or Edit Users scope enabled.

2\. Use the Create Users API or Update Users API for SSO to add or update users in HighLevel.

3\. When creating users, set the parameter externalUserId to match the user’s unique ID from your IdP.

Why this matters

- HighLevel matches users based on their externalUserId (Remote ID).

- If a user’s email changes in your IdP, but not in HighLevel, login may fail because the system won’t find a matching email.

- However, if externalUserId (or SSO Remote ID) is configured, HighLevel will still recognize the user and automatically update their email the next time they log in.

Behind the scenes (for context): When a user logs in via SSO:

- HighLevel first looks for a user with a matching SSO Remote ID.

- If none is found, it searches by email + company ID.

- If still not found, login fails.

```
Tip: To avoid this, always include the SSO Remote ID when creating or updating users via API — especially if your users’ emails are likely to change in your IdP.
```

**Mandatory Fields**

- **Client ID:** Tells HighLevel which app in your IdP to connect to.

- **Secret**: Confirms that requests to your IdP are coming from HighLevel.

- **Auth Method (OIDC):** Authentication protocol (locked to OIDC).

**1\. OIDC Configuration**

- OpenID Config URL: Supplies all endpoints automatically.

- Authorization URL / Token Endpoint / User Info Endpoint: Manual entry option.

- Scopes: At minimum openid; recommended openid profile email.

- Redirect URL:

  - Normally prefilled.

  - If missing: https://<your-whitelabel-domain>/login/sso

  - Must be whitelisted in IdP. Do not edit unless correcting the format.

**2\. User Details Mapping**

- Remote ID Field: Uniquely identifies the user across both platforms (sub/oid).
- ID Field: Optional — HighLevel user ID for direct mapping.

- Email Field: Maps user email from IdP.

- Email Verified Field: Ensures the email is trusted; required for security.

**3\. Updating User Email in the IdP**

- HighLevel relies on the externalUserId (Remote ID).

- If a user’s email is updated in the IdP, HighLevel will automatically update it on the next login.

**Controlling Who Can Configure or Enable SSO**

- Current behavior: All agency admins can view, configure, enable, or disable SSO in HighLevel.

- Future roadmap: Granular permissions will allow super admins to control which agency admins can manage SSO.

* * *

## **Scopes Explained**

Scopes determine what information HighLevel can request from your IdP. They are critical for proper user mapping and authentication.

|     |     |     |     |
| --- | --- | --- | --- |
| Scope | What it does | How HighLevel uses it | Example |
| openid (mandatory) | Returns the user’s unique identifier (sub). | Links the user to their Remote ID. | Required for all OIDC logins. |
| profile | Returns basic profile info such as name, given\_name, family\_name. | Can enrich user data in HighLevel (e.g. display name). | Helpful if you want names auto-synced, not just email. |
| email | Returns the user’s email and email\_verified flag. | Maps to HighLevel’s Email Field and ensures trusted login. | Allows HighLevel to automatically update a user’s email if changed in IdP. |
| groups / roles (provider-dependent) | Returns group/role membership. | Could be used for role-based access or subaccount mapping (future). | If configured in Okta/Azure, lets you enforce “only members of group X can access HighLevel.” |
| offline\_access (optional) | Returns a refresh token for long-lived sessions. | Not supported in HighLevel | Not supported in HighLevel |

* * *

## **Frequently Asked Questions**

**Q: Does HighLevel support SAML?**

Not yet. The current release supports the OpenID Connect (OIDC) protocol only.

**Q: Can I connect more than one IdP to my agency?**

Only one active SSO configuration is allowed per agency.

**Q: Do users get created automatically the first time they sign in?**

No. Create or update users through the Users API and include their externalUserId before they attempt to log in.

**Q: What happens if I disable SSO after launch?**

Users will fall back to the standard HighLevel login page. If you hid other login methods, re-enable them first so users aren’t locked out.

**Q: Can I pilot SSO with a handful of users?**

Yes. Leave the standard login methods visible and assign externalUserId only to your pilot group; everyone else will continue using email/password.

**Q: Will future role-based permissions affect SSO?**

Yes—upcoming updates will allow specific admins to manage SSO settings without full agency-owner access, giving you tighter governance.

**Q. I Got Redirected to the Login Screen After Starting SSO Test**

This is absolutely normal.This happens when the user is visiting the WL domain for the first time and has never logged in before or had logged out from the domain. This will not impact your test status. The test has been executed as it should. If you perform the test again after logging in, you will be able to see the entire flow

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

- [User Access](https://help.gohighlevel.com/support/solutions/articles/48000982600-user-access)
- [Email Signatures](https://help.gohighlevel.com/support/solutions/articles/48000982598-email-signatures)
- [Admin Vs. User Roles and Permission Scopes](https://help.gohighlevel.com/support/solutions/articles/48001078296-admin-vs-user-roles-and-permission-scopes)
- [How to create a user or admin to manage multiple HL locations without giving them agency access?](https://help.gohighlevel.com/support/solutions/articles/48001153972-how-to-create-a-user-or-admin-to-manage-multiple-hl-locations-without-giving-them-agency-access-)
- [Troubleshooting Login issues](https://help.gohighlevel.com/support/solutions/articles/48001207047-troubleshooting-login-issues)
- [Understanding the Agency Owner Role in Your Agency Account: What You Need to Know](https://help.gohighlevel.com/support/solutions/articles/48001237517-understanding-the-agency-owner-role-in-your-agency-account-what-you-need-to-know)

## Related Articles

- [Setting Up Single Sign-On (SSO) on HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004387-setting-up-single-sign-on-sso-on-highlevel)
- [WordPress: Single Sign On Admin](https://help.gohighlevel.com/support/solutions/articles/155000004154-wordpress-single-sign-on-admin)
- [Configure & Connect Purchased Domains](https://help.gohighlevel.com/support/solutions/articles/155000004674-configure-connect-purchased-domains)
- [How to Set Up a Whitelabel Domain for the Desktop Web App](https://help.gohighlevel.com/support/solutions/articles/48000982207-how-to-set-up-a-whitelabel-domain-for-the-desktop-web-app)
- [Client Portal SSO Magic Links: Enable One-Click Access to Client Apps](https://help.gohighlevel.com/support/solutions/articles/155000001667-client-portal-sso-magic-links-enable-one-click-access-to-client-apps)
- [Configure Marketplace App Listing Type](https://help.gohighlevel.com/support/solutions/articles/155000001559-configure-marketplace-app-listing-type)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006556-single-sign-on-sso-on-highlevel/hit)