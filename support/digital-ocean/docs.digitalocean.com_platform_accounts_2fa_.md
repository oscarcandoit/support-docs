---
url: "https://docs.digitalocean.com/platform/accounts/2fa/"
title: "How to Manage Two-Factor Authentication for DigitalOcean Accounts | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
  - [Manage Account Settings](https://docs.digitalocean.com/platform/accounts/settings/)
  - [Manage 2FA](https://docs.digitalocean.com/platform/accounts/2fa/)
  - [Deactivate Accounts](https://docs.digitalocean.com/platform/accounts/deactivate/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Accounts](https://docs.digitalocean.com/platform/accounts/)
- Manage 2FA

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage Two-Factor Authentication for DigitalOcean Accounts

Validated on 11 Dec 2024 • Last edited on 23 Jan 2025

If you log in to DigitalOcean with a username and password, enabling 2FA adds an additional layer of security against unauthorized access to your account.

Learn more about two-factor authentication.

An _authentication factor_ is a piece of information used to verify that you’re allowed to do something, like a [keycard](https://en.wikipedia.org/wiki/Keycard_lock) used to unlock a hotel door.

This is one way of characterizing authentication factors:

- **Something you know**: This is private knowledge that only you have, like a password or a PIN.
- **Something you have**: This is a physical object that only you have, like a phone, a key, or a bank card.
- **Something you are**: This is a physical characteristic that only you have, like your fingerprint or your voice.

_Two-factor authentication_, commonly abbreviated as 2FA, is any form of verification that requires two factors, like withdrawing money from an ATM using both a [bank card](https://en.wikipedia.org/wiki/ATM_card) (something you have) and its [PIN](https://en.wikipedia.org/wiki/Personal_identification_number) (something you know).

A common first factor for online accounts is a password (something you know). A common second factor is an authentication code from an app on your phone (something you have).

We strongly recommend enabling 2FA on all DigitalOcean accounts.

## Default Account Authentication

When you first create your account, 2FA is disabled, but DigitalOcean takes other steps to protect your account.

Each time you log in from a new location using a new device or a different web browser, we email an authorization code to the address linked to your account. You need to check your email, retrieve the code, and enter it to complete your login.

Even without 2FA enabled, a bad actor would need both your DigitalOcean password and your email password to log in. This isn’t as effective as 2FA, but it increases the difficulty for would-be attackers and provides you with notification if someone is trying to access your account.

## Enabling Two-Factor Authentication

Note
If you [log in to DigitalOcean with Google or GitHub](https://docs.digitalocean.com/platform/accounts/settings/#sso), you manage 2FA with your [Google](https://support.google.com/accounts/answer/9096865) or [GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa) account instead of your DigitalOcean account.

To enable 2FA for your DigitalOcean account, log in to [the control panel](https://cloud.digitalocean.com/account/profile) and click the profile icon in the top right corner.

![The drop-down menu that expands from clicking the profile icon in the control panel](https://docs.digitalocean.com/screenshots/accounts/profile-icon-menu.d9516ea95d5d74421e062e35c0036b1cc93671e20207676320f4a03c7ccac58f.png)

In the menu that opens, click **My Account** to go to your [**My Account** page](https://cloud.digitalocean.com/account/profile). Then, in the **Two-factor authentication** section, click **Set Up 2FA**.

![The two-factor authentication section of the My Account page with 2FA currently disabled and the Set Up 2FA button visible](https://docs.digitalocean.com/screenshots/accounts/2fa/when-disabled.3d9d3fd6959d688da9f04beb3b99cb1098dba038a6002db57d51ced57ec8f99b.png)

When you enable 2FA, you need to choose your second factor and choose a backup method.

### Choosing the Second Factor

When you click the **Set Up 2FA** button, the **Set up two factor authentication** window opens on the **Choose Method** step.

![Choose an authentication method window](https://docs.digitalocean.com/screenshots/accounts/2fa/set-up.976a9b9b2f74b5c637912227fc48dfd0397c85b7c40239f371a1ee545dec3e8c.png)

You need to choose your authentication method: either using an authentication app or using SMS.

Using an Authentication App (Recommended)

Authenticator apps like [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en), [Authy](https://authy.com/), [1Password](https://1password.com/), [Microsoft Authenticator](https://www.microsoft.com/en-us/account/authenticator), and [Duo](https://duo.com/) are small, free mobile applications used to generate security codes. They work globally and are more secure than SMS because they don’t transmit the security codes across the network.

When you choose this method, you need to scan the provided QR code using the authenticator app on your phone or tablet. This links your device to your DigitalOcean account.

If you’re unable to scan the QR code, click the **Try this instead** link directly underneath it to get a numerical code which you can enter manually. Follow the directions in your specific authenticator app to enter the code, then enter the PIN that the app gives you in the space provided. Once you’ve entered the PIN, the app links with your DigitalOcean account.

Once your DigitalOcean account and 2FA app are linked, when you log in to DigitalOcean, you need to open the app and enter the code provided in the control panel to finish logging in.

Some authenticator apps have features like backups and syncing to help you restore access to the app if you lose your device. We recommend using these features for added reliability.

Using SMS

If you select SMS, your mobile carrier must be able to deliver a text message, which means you need mobile signal or an internet connection. This may be inconvenient when traveling internationally. In addition, because SMS messages are vulnerable to being intercepted by hackers, they’re not as secure as an app. However, using SMS for 2FA still provides much stronger security for your account than not enabling 2FA at all.

When you select SMS, you are prompted for the phone number.

Note
You cannot use VoIP or Telephony telephone numbers from services like Google Voice or Ooma.

Once you enter the code, DigitalOcean sends a code via SMS. When you receive it, enter the code to link your phone and your account. From then on, you receive codes via SMS to enter into the control panel to complete your login.

### Choosing a Backup Method

Once you’ve configured your primary method for 2FA, you need to add a backup method. This is how you can regain access to your account if your 2FA device is lost or stolen.

You can use backup codes or an authenticator app. We recommend using backup codes.

Backup Codes (Recommended)

Backup codes act like a second password, so store them in a secure place that you can access without your phone.

Backup codes are visible on-screen when you enable 2FA. You can also download a `.txt` file called **digitalocean\_backupcodes.txt**.

Backup codes are single use, so it can be helpful to delete or cross out a backup code once you use it. If you only have a few valid backup codes left, you can generate more. When you regenerate backup codes, any remaining codes from before are no longer valid.

Authenticator App

You can use an authenticator app like Google Authenticator or Duo as your backup solution.

We do not recommend this because it is phone-based, and only selectable as a backup option if you select SMS as your primary 2FA solution. In the scenario where you can’t access your SMS messages and need to use a backup method, your phone might not be a valid option to use due to whatever is preventing SMS access.

For this reason, we recommend using an authenticator app as your primary 2FA method with backup codes.

## Disabling Two-Factor Authentication

You can disable 2FA on the [**My Account** page](https://cloud.digitalocean.com/account/profile), in the **Two-factor authentication** section. When two-factor authentication is enabled, this section displays your default authentication method and your backup method.

![The Two-Factor Authentication section of the My Account page](https://docs.digitalocean.com/screenshots/accounts/2fa/when-enabled.32f84e7392b816c37459ff30b76106ebb363a404a69bebfb8dfca9f0e19e75b1.png)

Click the **Disable 2FA** button to disable two-factor authentication.

If you lose access to your 2FA device or can’t receive the code via SMS, try searching your computer for the backup codes text file named `digitalocean_backupcodes.txt` by default. If your backup method is not functioning, [submit a ticket to the DigitalOcean support team](https://www.digitalocean.com/company/contact/support) for help restoring access to your account.

## Switching Authenticator Apps

If you have enabled 2FA for your account and are using an authentication app, you can change the current app you are using to authenticate your DigitalOcean account by disabling 2FA and then enabling it again using your preferred authentication app.

To switch your authentication app, follow the steps above to first [disable 2FA](https://docs.digitalocean.com/platform/accounts/2fa/#disabling-two-factor-authentication) for your account, then [enable 2FA](https://docs.digitalocean.com/platform/accounts/2fa/#enabling-two-factor-authentication) again using your new authentication app.

In this article...

- [Default Account Authentication](https://docs.digitalocean.com/platform/accounts/2fa/#default-account-authentication)
- [Enabling Two-Factor Authentication](https://docs.digitalocean.com/platform/accounts/2fa/#enabling-two-factor-authentication)
  - [Choosing the Second Factor](https://docs.digitalocean.com/platform/accounts/2fa/#choosing-the-second-factor)
  - [Choosing a Backup Method](https://docs.digitalocean.com/platform/accounts/2fa/#choosing-a-backup-method)
- [Disabling Two-Factor Authentication](https://docs.digitalocean.com/platform/accounts/2fa/#disabling-two-factor-authentication)
- [Switching Authenticator Apps](https://docs.digitalocean.com/platform/accounts/2fa/#switching-authenticator-apps)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices