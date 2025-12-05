---
url: "https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio"
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

[Auth](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio)

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

## Enabling phone login [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio\#enabling-phone-login)

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

## Signing in with phone OTP [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio\#signing-in-with-phone-otp)

With OTP, a user can sign in without setting a password on their account. They need to verify their phone number each time they sign in.

JavaScriptSwiftKotlinPythonHTTP

```
1
2
3

const { data, error } = await supabase.auth.signInWithOtp({  phone: '+13334445555',})
```

The user receives an SMS with a 6-digit pin that you must verify within 60 seconds.

## Verifying a phone OTP [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio\#verifying-a-phone-otp)

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

## Updating a phone number [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio\#updating-a-phone-number)

To update a user's phone number, the user must be logged in. Call [`updateUser()`](https://supabase.com/docs/reference/javascript/auth-updateuser) with their phone number:

JavaScriptSwiftKotlinPython

```
1
2
3

const { data, error } = await supabase.auth.updateUser({  phone: '123456789',})
```

The user receives an SMS with a 6-digit pin that you must [verify](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio#verifying-a-phone-otp) within 60 seconds.
Use the `phone_change` type when calling `verifyOTP` to update a user’s phone number.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/phone-login.mdx)

### Is this helpful?

NoYes

### On this page

[Enabling phone login](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio#enabling-phone-login) [Signing in with phone OTP](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio#signing-in-with-phone-otp) [Verifying a phone OTP](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio#verifying-a-phone-otp) [Updating a phone number](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio#updating-a-phone-number)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)

### Twilio [\#](https://supabase.com/docs/guides/auth/phone-login?showSmsProvider=Twilio\#twilio)

## Prerequisites

You'll need:

- Twilio account ( [sign up](https://www.twilio.com/try-twilio))
- Supabase project (create one [here](https://supabase.com/dashboard))
- Mobile phone capable of receiving SMS

SMS Authentication can be done with either Twilio Verify or Twilio Programmable Messaging. [Twilio Verify](https://www.twilio.com/en-us/trusted-activation/verify) is a specialized OTP solution and is recommended for most developers that need over-the-phone authentication. Alternatively you can use [Twilio Programmable Messaging](https://www.twilio.com/docs/messaging) which offers generic SMS sending support.

To keep SMS sending costs under control, make sure you adjust your project's rate limits and [configure CAPTCHA](https://supabase.com/docs/guides/auth/auth-captcha). See the [Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod) to learn more.

Some countries have special regulations for services that send SMS messages to users, (e.g India's TRAI DLT regulations). Remember to look up and follow the regulations of countries where you operate.

## Twilio Verify

To set up Twilio Verify, you will need to:

1. Create a new [verification service](https://support.twilio.com/hc/en-us/articles/360033309133-Getting-Started-with-Twilio-Verify-V2) in the Twilio dashboard.
2. [Switch Phone Provider to Twilio Verify](https://supabase.com/dashboard/project/_/auth/providers)
3. Configure the Twilio Verify Service ID field using the Verification Service ID obtained in 1.

When using Twilio Verify, OTPs are generated by Twilio. This means that:

- Unlike other providers, the OTP expiry duration and message content fields are not configurable via the Supabase dashboard. Please head to Twilio Verify to configure these settings.
- The token remains the same during its validity period until the verification is successful. This means if your user makes another request within that period, they will receive the same token.
- Twilio Verify has a separate set of rate limits that apply. Visit Twilio's [Rate Limit and Timeouts page](https://www.twilio.com/docs/verify/api/rate-limits-and-timeouts) to find out more.

At this time, Twilio Verify is only supported on the `whatsapp` and `sms` channels.

## Twilio (Programmable Messaging)

In this section, you'll set up Twilio as an SMS provider:

What you'll need:

- A Twilio account (sign up here: [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio))
- A Supabase project (create one here: [https://supabase.com/dashboard](https://supabase.com/dashboard))
- A mobile phone capable of receiving SMS

SMS Login with Supabase Auth and Twilio - YouTube

[Photo image of Supabase](https://www.youtube.com/channel/UCNTVzV1InxHV-YR0fSajqPQ?embeds_referring_euri=https%3A%2F%2Fsupabase.com%2F)

Supabase

69.3K subscribers

[SMS Login with Supabase Auth and Twilio](https://www.youtube.com/watch?v=akScoPO01bc)

Supabase

Search

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

Watch on

0:00

/

•Live

•

### Setting up your Twilio credentials

Start by logging into your Twilio account and starting a new project: [https://www.twilio.com/console/projects/create](https://www.twilio.com/console/projects/create)

Give your project a name and verify the mobile number you'll be using to test with. This is the number that will be receiving the SMS OTPs.

![Name your twilio project](https://supabase.com/docs/img/guides/auth-twilio/1.png)![verify your own phone number](https://supabase.com/docs/img/guides/auth-twilio/2.png)

Select 'SMS', 'Identity & Verification', and 'With code' as options on the welcome form.

![Form Fields](https://supabase.com/docs/img/guides/auth-twilio/3.png)

When you're back on the [Twilio console screen](https://www.twilio.com/console), you need to scroll down and click 'Get a trial phone number' - this is the number that you'll be sending SMSs from.

![Get a trial phone number](https://supabase.com/docs/img/guides/auth-twilio/4.png)

![Successful phone number](https://supabase.com/docs/img/guides/auth-twilio/5.png)

You should now be able to see all three values you'll need to get started:

- Account SID
- Auth Token
- Sender Phone Number

![All the credentials you'll need](https://supabase.com/docs/img/guides/auth-twilio/6.png)

Now go to the [Auth > Providers](https://supabase.com/dashboard/project/_/auth/providers) page in the Supabase dashboard and select "Phone" from the Auth Providers list.

You should see an option to enable the Phone provider.

Toggle it on, and copy the 3 values over from the Twilio dashboard. Click save.

Note: for "Twilio Message Service SID" you can use the Sender Phone Number generated above.

![Plug in Twilio credentials](https://supabase.com/docs/img/guides/auth-twilio/8.png)

Now the backend should be setup, we can proceed to add our client-side code!

The `Twilio Content SID` field is specific to Twilio Programmable Messaging (WhatsApp) senders.
Disregard this field if you are only sending SMS messages. Refer to the section on WhatsApp OTP
Logins for further details.

#### SMS custom template

The SMS message sent to a phone containing an OTP code can be customized. This is useful if you need to mention a brand name or display a website address.

Go to the [Auth > Providers](https://supabase.com/dashboard/project/_/auth/providers) page in the Supabase dashboard and select "Phone" from the Auth Providers list. Scroll to the very bottom of the "Phone" section to the "SMS Message" input - you can customize the SMS message here.

Use the variable `.Code` in the template to display the OTP code. Here's an example in the SMS template.

![example in the SMS template](https://supabase.com/docs/img/guides/auth-twilio/9.png)

## WhatsApp OTP logins

In some cases, you may wish to use WhatsApp as a delivery channel instead. Here are some examples our users have cited:

- You want higher deliverability
- You wish for a secure channel
- Your users mostly use WhatsApp as a messaging platform

Twilio Verify can be used with WhatsApp OTPs with no additional configuration.

Complete the following steps to use WhatsApp OTP with Twilio Programmable Messaging:

1. Go through the [Twilio self sign up guide for WhatsApp](https://www.twilio.com/docs/whatsapp/self-sign-up).
2. Register a Twilio Content Template via the [API](https://www.twilio.com/docs/content/whatsappauthentication) and note the corresponding Twilio Content SID. You can also use the Template Builder on the Twilio dashboard to create a Content Template
![Twilio Content SID Image](https://supabase.com/docs/img/guides/auth-twilio/twilio_content_sid.png)
3. Register the Twilio Content SID on the Supabase dashboard under Authentication > Providers > Phone > Twilio Content SID. Ensure you have Twilio selected as your phone provider.

You may only use one Twilio Content SID at a time. Supabase Auth will use the Content Template over the `SMS Message` field when sending WhatsApp messages. Use Twilio Verify if you need to use more than one message template.

Close