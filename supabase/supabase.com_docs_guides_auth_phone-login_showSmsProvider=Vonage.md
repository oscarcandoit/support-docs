---
url: "https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage"
title: "Phone Login | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

[Auth](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage)

[Overview](https://supabase.com/docs/guides/auth)

[Architecture](https://supabase.com/docs/guides/auth/architecture)

Getting Started[Next.js](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/auth/quickstarts/react)
[React Native](https://supabase.com/docs/guides/auth/quickstarts/react-native)
[React Native with Expo & Social Auth](https://supabase.com/docs/guides/auth/quickstarts/with-expo-react-native-social-auth)

Concepts[Users](https://supabase.com/docs/guides/auth/users)
[Identities](https://supabase.com/docs/guides/auth/identities)

Sessions

Flows (How-tos)

Server-Side Rendering

[Password-based](https://supabase.com/docs/guides/auth/passwords)
[Email (Magic Link or OTP)](https://supabase.com/docs/guides/auth/auth-email-passwordless)
[Phone Login](https://supabase.com/docs/guides/auth/phone-login)

Social Login (OAuth)

Enterprise SSO

[Anonymous Sign-Ins](https://supabase.com/docs/guides/auth/auth-anonymous)
[Web3 (Ethereum or Solana)](https://supabase.com/docs/guides/auth/auth-web3)
[Mobile Deep Linking](https://supabase.com/docs/guides/auth/native-mobile-deep-linking)
[Identity Linking](https://supabase.com/docs/guides/auth/auth-identity-linking)

Multi-Factor Authentication

[Signout](https://supabase.com/docs/guides/auth/signout)

Debugging[Error Codes](https://supabase.com/docs/guides/auth/debugging/error-codes)
[Troubleshooting](https://supabase.com/docs/guides/auth/troubleshooting)

OAuth 2.1 Server[Overview](https://supabase.com/docs/guides/auth/oauth-server)
[Getting Started](https://supabase.com/docs/guides/auth/oauth-server/getting-started)
[OAuth Flows](https://supabase.com/docs/guides/auth/oauth-server/oauth-flows)
[MCP Authentication](https://supabase.com/docs/guides/auth/oauth-server/mcp-authentication)
[Token Security & RLS](https://supabase.com/docs/guides/auth/oauth-server/token-security)

Third-party auth[Overview](https://supabase.com/docs/guides/auth/third-party/overview)
[Clerk](https://supabase.com/docs/guides/auth/third-party/clerk)
[Firebase Auth](https://supabase.com/docs/guides/auth/third-party/firebase-auth)
[Auth0](https://supabase.com/docs/guides/auth/third-party/auth0)
[AWS Cognito (Amplify)](https://supabase.com/docs/guides/auth/third-party/aws-cognito)
[WorkOS](https://supabase.com/docs/guides/auth/third-party/workos)

Configuration[General Configuration](https://supabase.com/docs/guides/auth/general-configuration)
[Email Templates](https://supabase.com/docs/guides/auth/auth-email-templates)
[Redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls)

Auth Hooks

[Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp)
[User Management](https://supabase.com/docs/guides/auth/managing-user-data)

Security[Password Security](https://supabase.com/docs/guides/auth/password-security)
[Rate Limits](https://supabase.com/docs/guides/auth/rate-limits)
[Bot Detection (CAPTCHA)](https://supabase.com/docs/guides/auth/auth-captcha)
[Audit Logs](https://supabase.com/docs/guides/auth/audit-logs)

JSON Web Tokens (JWT)

[JWT Signing Keys](https://supabase.com/docs/guides/auth/signing-keys)
[Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
[Column Level Security](https://supabase.com/docs/guides/database/postgres/column-level-security)
[Custom Claims & RBAC](https://supabase.com/docs/guides/database/postgres/custom-claims-and-role-based-access-control-rbac)

Auth UI[Auth UI (Deprecated)](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)
[Flutter Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/flutter-auth-ui)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Auth

1. Auth
3. Flows (How-tos)
5. [Phone Login](https://supabase.com/docs/guides/auth/phone-login)

# Phone Login

* * *

Phone Login is a method of authentication that allows users to log in to a website or application without using a password. The user authenticates through a one-time password (OTP) sent via a channel (SMS or WhatsApp).

At this time, `WhatsApp` is only supported as a channel for the Twilio and Twilio Verify Providers.

Users can also log in with their phones using Native Mobile Login with the built-in identity provider. For Native Mobile Login with Android and iOS, see the [Social Login guides](https://supabase.com/docs/guides/auth/social-login).

Phone OTP login can:

- Improve the user experience by not requiring users to create and remember a password
- Increase security by reducing the risk of password-related security breaches
- Reduce support burden of dealing with password resets and other password-related flows

To keep SMS sending costs under control, make sure you adjust your project's rate limits and [configure CAPTCHA](https://supabase.com/docs/guides/auth/auth-captcha). See the [Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod) to learn more.

Some countries have special regulations for services that send SMS messages to users, (e.g India's TRAI DLT regulations). Remember to look up and follow the regulations of countries where you operate.

## Enabling phone login [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage\#enabling-phone-login)

Enable phone authentication on the [Auth Providers page](https://supabase.com/dashboard/project/_/auth/providers) for hosted Supabase projects.

For self-hosted projects or local development, use the [configuration file](https://supabase.com/docs/guides/cli/config#auth.sms.enable_signup). See the configuration variables namespaced under `auth.sms`.

You also need to set up an SMS provider. Each provider has its own configuration. Supported providers include MessageBird, Twilio, Vonage, and TextLocal (community-supported).

### Configuring SMS Providers

![MessageBird Icon](https://supabase.com/docs/img/icons/messagebird-icon.svg)

##### MessageBird

![Twilio Icon](https://supabase.com/docs/img/icons/twilio-icon.svg)

##### Twilio

![Vonage Icon](https://supabase.com/docs/img/icons/vonage-icon-light.svg)

##### Vonage

![Textlocal (Community Supported) Icon](https://supabase.com/docs/img/icons/textlocal-icon.svg)

##### Textlocal (Community Supported)

By default, a user can only request an OTP once every 60 seconds and they expire after 1 hour.

## Signing in with phone OTP [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage\#signing-in-with-phone-otp)

With OTP, a user can sign in without setting a password on their account. They need to verify their phone number each time they sign in.

JavaScriptSwiftKotlinPythonHTTP

```
1
2
3

const { data, error } = await supabase.auth.signInWithOtp({  phone: '+13334445555',})
```

The user receives an SMS with a 6-digit pin that you must verify within 60 seconds.

## Verifying a phone OTP [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage\#verifying-a-phone-otp)

To verify the one-time password (OTP) sent to the user's phone number, call [`verifyOtp()`](https://supabase.com/docs/reference/javascript/auth-verifyotp) with the phone number and OTP:

JavaScriptSwiftKotlinPythonHTTP

You should present a form to the user so they can input the 6 digit pin, then send it along with the phone number to `verifyOtp`:

```
1
2
3
4
5
6
7
8

const {  data: { session },  error,} = await supabase.auth.verifyOtp({  phone: '13334445555',  token: '123456',  type: 'sms',})
```

If successful the user will now be logged in and you should receive a valid session like:

```
1
2
3
4
5
6

{  "access_token": "<ACCESS_TOKEN>",  "token_type": "bearer",  "expires_in": 3600,  "refresh_token": "<REFRESH_TOKEN>"}
```

The access token can be sent in the Authorization header as a Bearer token for any CRUD operations on supabase-js. See our guide on [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) for more info on restricting access on a user basis.

## Updating a phone number [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage\#updating-a-phone-number)

To update a user's phone number, the user must be logged in. Call [`updateUser()`](https://supabase.com/docs/reference/javascript/auth-updateuser) with their phone number:

JavaScriptSwiftKotlinPython

```
1
2
3

const { data, error } = await supabase.auth.updateUser({  phone: '123456789',})
```

The user receives an SMS with a 6-digit pin that you must [verify](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage#verifying-a-phone-otp) within 60 seconds.
Use the `phone_change` type when calling `verifyOTP` to update a user’s phone number.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/phone-login.mdx)

### Is this helpful?

NoYes

### On this page

[Enabling phone login](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage#enabling-phone-login) [Signing in with phone OTP](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage#signing-in-with-phone-otp) [Verifying a phone OTP](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage#verifying-a-phone-otp) [Updating a phone number](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage#updating-a-phone-number)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)

### Vonage [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Vonage\#vonage)

## Prerequisites

You'll need:

- A Vonage account (sign up here: [https://dashboard.nexmo.com/sign-up](https://dashboard.nexmo.com/sign-up))
- A Supabase project (create one here: [https://supabase.com/dashboard](https://supabase.com/dashboard))
- A mobile phone capable of receiving SMS

To keep SMS sending costs under control, make sure you adjust your project's rate limits and [configure CAPTCHA](https://supabase.com/docs/guides/auth/auth-captcha). See the [Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod) to learn more.

Some countries have special regulations for services that send SMS messages to users, (e.g India's TRAI DLT regulations). Remember to look up and follow the regulations of countries where you operate.

## Set up Vonage as an SMS provider

### Getting your Vonage credentials

Start by logging into your Vonage Dashboard at [https://dashboard.nexmo.com/](https://dashboard.nexmo.com/)

You will see you API Key and API Secret here, which is actually all you need to get started.

In most countries, a phone number is actually optional and you can also use any Alphanumeric Sender ID of up to 11 characters length (8 for India) as a Sender ID (from). This means you do not need a number to test with in most cases.

To find out more about supported countries for Alphanumeric Sender ID, check this overview: [https://help.nexmo.com/hc/en-us/articles/115011781468-SMS-Features-Overview-Outbound-only-](https://help.nexmo.com/hc/en-us/articles/115011781468-SMS-Features-Overview-Outbound-only-)

Hint: Some countries might need a Sender ID Registration to allow sending with an Alphanumeric Sender ID. You can find this information in the help article as well. If Alpha Sender IDs are not supported, you will need to buy a phone number.

### Getting a phone number (optional)

If you want a phone number to send SMS from, you can buy one from the Vonage Dashboard under Numbers > Buy Numbers ( [https://dashboard.nexmo.com/buy-numbers](https://dashboard.nexmo.com/buy-numbers)).

Select the country you want a number for. You will need a mobile phone number with SMS or SMS+Voice capability. After you have bought the number, you will be able to send SMS from it.

### Configure Supabase

Now go to the [Auth > Providers](https://supabase.com/dashboard/project/_/auth/providers) page in the Supabase dashboard and select "Phone" from the Auth Providers list.

You should see an option to enable the Phone provider.

Toggle it on, and copy the API key, API secret and phone number values over from the Vonage dashboard. Click save.

Now the backend should be setup, we can proceed to add our client-side code!

#### SMS custom template

The SMS message sent to a phone containing an OTP code can be customized. This is useful if you need to mention a brand name or display a website address.

Go to [Auth > Templates](https://supabase.com/dashboard/project/_/auth/templates) page in the Supabase dashboard.

Use the variable `.Code` in the template to display the code.

Close