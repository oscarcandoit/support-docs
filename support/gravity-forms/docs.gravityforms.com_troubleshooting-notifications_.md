---
url: "https://docs.gravityforms.com/troubleshooting-notifications/"
title: "Troubleshooting Notifications - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)    - [Configuring Notifications in Gravity Forms](https://docs.gravityforms.com/configuring-notifications-in-gravity-forms/ "Configuring Notifications in Gravity Forms")
    - [Notifications Settings Reference](https://docs.gravityforms.com/notifications-settings-reference/ "Notifications Settings Reference")
    - [Common Questions Regarding Notifications](https://docs.gravityforms.com/notifications/ "Common Questions Regarding Notifications")
    - [Troubleshooting Notifications](https://docs.gravityforms.com/troubleshooting-notifications/ "Troubleshooting Notifications")
    - [Resend Notifications](https://docs.gravityforms.com/resend-notifications/ "Resend Notifications")
    - [Email Routing in Gravity Forms Notifications](https://docs.gravityforms.com/email-routing-gravity-forms-notifications/ "Email Routing in Gravity Forms Notifications")
    - [Sending Notifications for Recurring Subscription Actions](https://docs.gravityforms.com/sending-notifications-subscription-actions/ "Sending Notifications for Recurring Subscription Actions")
    - [Abandoned Form Notifications](https://docs.gravityforms.com/abandoned-form-notifications/ "Abandoned Form Notifications")
    - [Gravity Forms Notification Events](https://docs.gravityforms.com/gravity-forms-notification-events/ "Gravity Forms Notification Events")
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Troubleshooting Notifications

- [How email notifications are sent](https://docs.gravityforms.com/troubleshooting-notifications/#h-how-email-notifications-are-sent)
- [Ensure WordPress and Gravity Forms are up-to-date](https://docs.gravityforms.com/troubleshooting-notifications/#h-ensure-wordpress-and-gravity-forms-are-up-to-date)
- [Check your settings](https://docs.gravityforms.com/troubleshooting-notifications/#h-check-your-settings)
- [Check for typos](https://docs.gravityforms.com/troubleshooting-notifications/#h-check-for-typos)
- [Avoid spaces](https://docs.gravityforms.com/troubleshooting-notifications/#h-avoid-spaces)
- [Use a valid From Address](https://docs.gravityforms.com/troubleshooting-notifications/#h-use-a-valid-from-address)
- [Avoid using same email in From and To addresses](https://docs.gravityforms.com/troubleshooting-notifications/#h-avoid-using-same-email-in-from-and-to-addresses)
- [Check routing conditions](https://docs.gravityforms.com/troubleshooting-notifications/#h-check-routing-conditions)
- [Is the notification enabled?](https://docs.gravityforms.com/troubleshooting-notifications/#h-is-the-notification-enabled)
- [Use Third-Party Transactional Email Services or SMTP](https://docs.gravityforms.com/troubleshooting-notifications/#h-use-third-party-transactional-email-services-or-smtp)
- [Sending Result Notes](https://docs.gravityforms.com/troubleshooting-notifications/#h-sending-result-notes)
- [WordPress successfully passed the notification email to the sending server.](https://docs.gravityforms.com/troubleshooting-notifications/#h-wordpress-successfully-passed-the-notification-email-to-the-sending-server)
- [Could not instantiate mail function.](https://docs.gravityforms.com/troubleshooting-notifications/#h-could-not-instantiate-mail-function)
- [SMTP Error: connect() failed](https://docs.gravityforms.com/troubleshooting-notifications/#h-smtp-error-connect-failed)
- [SMTP Error: Could not authenticate](https://docs.gravityforms.com/troubleshooting-notifications/#h-smtp-error-could-not-authenticate)
- [SMTP Error: Data not accepted](https://docs.gravityforms.com/troubleshooting-notifications/#h-smtp-error-data-not-accepted)
- [WordPress was unable to send the notification email](https://docs.gravityforms.com/troubleshooting-notifications/#h-wordpress-was-unable-to-send-the-notification-email)
- [Enable Logging](https://docs.gravityforms.com/troubleshooting-notifications/#h-enable-logging)
- [Check for plugin or theme conflicts](https://docs.gravityforms.com/troubleshooting-notifications/#h-check-for-plugin-or-theme-conflicts)
- [Contact your web host](https://docs.gravityforms.com/troubleshooting-notifications/#h-contact-your-web-host)
- [IP Blacklisting](https://docs.gravityforms.com/troubleshooting-notifications/#h-ip-blacklisting)
- [Email Content Analysis Tools](https://docs.gravityforms.com/troubleshooting-notifications/#h-email-content-analysis-tools)
- [Configure your SPF and DMARC Records](https://docs.gravityforms.com/troubleshooting-notifications/#h-configure-your-spf-and-dmarc-records)

## How email notifications are sent

Like most other WordPress plugins, **Gravity Forms does not handle emails directly**. Gravity Forms uses the [wp\_mail()](http://codex.wordpress.org/Function_Reference/wp_mail) function that is provided by WordPress to send any emails.

Once Gravity Forms hands the email off to the WordPress wp\_mail() function, one of the following occurs:

- WordPress directly interacts with **your web server to send the email**.
- WordPress contacts your **SMTP** or external 3rd party **mail server to send the email** (e.g. SendGrid, Mailgun, etc.).

After WordPress hands the email off, it’s up to the mail server, as well as the recipient’s mail server, to complete the sending of the email. We don’t have any control over the delivery process once the email is passed to WordPress.

If you’re having trouble sending or receiving emails from Gravity Forms, this article will provide you with a few different steps to follow. In the overwhelming majority of cases, these steps have been proven to resolve a multitude of email issues.

Note: WordPress allows filtering of emails sent using [wp\_mail()](http://codex.wordpress.org/Function_Reference/wp_mail) function, this means third-party plugins or custom functions can alter any aspect of the email after Gravity Forms passes it to WordPress.

## Ensure WordPress and Gravity Forms are up-to-date

The first thing you want to check is your WordPress and Gravity Forms versions. The version you are on could potentially have a bug in it that is fixed within a newer version. Checking that you are running the latest version is a critical step in troubleshooting any issues.

## Check your settings

When configuring notifications, it’s easy to miss an error in the recipient address or elsewhere. By looking over the notification configuration carefully, a quick mistake can be easily resolved.

### Check for typos

It’s easy for a small typo to turn into a big problem. Check for any typos within your notification feeds.

### Avoid spaces

Within your notification, check for any spaces in the recipient’s address, or between multiple addresses. If a space exists in the setting, it can potentially cause the notification to fail.

### Use a valid From Address

Within the sender, or _From Email_ field, ensure that it is the address that the message is originating from, that **must be an email address authorized by your server (e.g. an email using the same domain that your site uses)**.

In plain English, **don’t use your visitor’s email as from address**, always use your site domain in the from address.

If not, things like [SPF records](https://support.google.com/a/answer/33786?hl=en) and/or [DMARC](http://dmarc.org/) records can cause the mail to be marked as spam and/or rejected. **If you need to allow the recipient to reply to another address, set it as the _Reply To_ address instead.**

Many providers as _Yahoo_, _AOL_ or _Gmail_ are known to apply this policy. For more information on the _Yahoo_ domain issue, visit the following:

[Yahoo email anti-spoofing policy breaks mailing lists](http://www.pcworld.com/article/2141120/yahoo-email-antispoofing-policy-breaks-mailing-lists.html).

For more info on the _AOL_ domain issue, visit the following:

[AOL imposes stricter email rules](http://www.cnet.com/uk/news/aol-imposes-stricter-email-rules-to-stem-spoofing-attack/).

You can also read about Gmail DMARC policy changes here:

[Gmail DMARC Update 2017](https://sendgrid.com/blog/gmail-dmarc-update-2016/).

These are only a few examples, **applying this policy to fight against spam is becoming a standard in the email and hosting industry**, therefore using a valid from address for your emails must be always in your top list when configuring your notifications settings.

### Avoid using same email in From and To addresses

Far too often, we see situations where an email address is configured as both the _From Address_ and _To Address_. For many mail providers, this will cause the email to be rejected as spam (or placed in a spam folder). Be sure that you use a different, valid email address in the _From_ setting.

### Check routing conditions

If you have routing configured for the notification recipient, be sure to double-check that at least one condition was successfully met. If none of the conditions were met, a notification would not be sent, as it would not have a valid recipient.

### Is the notification enabled?

While testing forms, it’s common to disable notifications to prevent receiving numerous emails that we don’t really need. Sometimes you can forget to enable the notification again (it happens more than you think 😄).

To check if your notifications are enabled, access the form editor, then click on \*Notifications at the top menu. You should see a list of all configured notifications for that form. Be sure that all notifications are enabled and the toggle switch to the left of the notification name is green.

## Use Third-Party Transactional Email Services or SMTP

In some cases, PHP sendmail may not function due to server configuration or email reliability issues. Using third-party transactional email services or SMTP can offer greater reliability and resolve many issues.

[Gravity SMTP](https://www.gravityforms.com/gravity-smtp/) connects with various SMTP providers and API-based services to manage email sending for Gravity Forms, WordPress, themes, and other plugins. Documentation can be found at [docs.gravitysmtp.com](https://docs.gravitysmtp.com/).

**Note**: _For more information on accessing the product and licensing, refer to our [FAQ](https://docs.gravitysmtp.com/frequently-asked-questions/)._

Alternatively, Gravity Forms has add-ons for the following major third-party transactional email services:

- [Mailgun](https://docs.gravityforms.com/setting-up-the-mailgun-add-on/)
- [Postmark](https://docs.gravityforms.com/setting-up-the-postmark-add-on/)
- [SendGrid](https://docs.gravityforms.com/setting-up-the-sendgrid-add-on/)

Using any of the above add-ons enables you to configure Gravity Forms to send notifications using the selected service, without impacting other emails sent by WordPress, the theme, or other plugins.

If you prefer to use an SMTP server or transactional email service to handle sending email for the entire site, there are a number of third-party plugins available in the WordPress plugin directory. You can find some suggestions here:

- [SAR Friendly SMTP](https://wordpress.org/plugins/sar-friendly-smtp/)
- [Post SMTP Mailer/Email Log](https://wordpress.org/plugins/post-smtp/)
- [Easy WP SMTP](https://wordpress.org/plugins/easy-wp-smtp/)
- [Mailgun for WordPress](https://wordpress.org/plugins/mailgun/)

Whichever plugin you install, you would configure it using the details provided by the SMTP or transaction email service you are using.

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

## Sending Result Notes

Starting with Gravity Forms 2.4.15 you will see a note added to each entry, **created with this version or newer**, with the result for each notification sending process.

To find this note, simply go to your form [Entries list](https://docs.gravityforms.com/entries/), click on an entry from the list to load the [entry details page](https://docs.gravityforms.com/entry-detail/), and scroll down to the Notes section.

**If you see any of the following notes added to your entry, all worked as expected from Gravity Forms side of things**. But something happened during email sending between WordPress and your sending server.

Check below the most common results reported by WordPress.

### WordPress successfully passed the notification email to the sending server.

[![WordPress successfully passed the notification email to the sending server.](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-successful-1024x279.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-successful.png)

This means that your Gravity Forms notification settings are fine, the email was passed to wp\_mail() function without issues, and WordPress reported successfully handing off the notification for delivery. Now the ball is in the sending server side. Only your server admin can investigate this further.

### Could not instantiate mail function.

[![Could not instantiate mail function](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-could-not-instantiate-mail-function-1024x313.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-could-not-instantiate-mail-function.png)

WordPress cannot send the email because, for some reason, the [PHPMailer class included in WordPress](https://github.com/WordPress/WordPress/blob/master/wp-includes/class-phpmailer.php) (used by the wp\_mail() function) can’t use the PHP mail function. Most of the time, this is caused by some restriction in your hosting (e.g. a spam filter was triggered on your server and the email was rejected).

### SMTP Error: connect() failed

[![SMTP connect() failed.](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-smtp-connect-failed-1024x320.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-smtp-connect-failed.png)

You’re using a SMTP plugin to send the emails, but WordPress can’t connect to the SMTP server. The most common causes for this are incorrect settings in your SMTP plugin, your hosting is blocking the outgoing connection to the SMTP server, or the SMTP server is blocking connections coming from your web server.

### SMTP Error: Could not authenticate

[![SMTP connect() failed.](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-smtp-authentication-failed-1024x320.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-smtp-authentication-failed.png)

In this case, WordPress can reach the SMTP server, but it can’t authenticate. This can be caused again by incorrect details used in your SMTP plugin (double check not only the username and password, but also the port and encryption used). You might also see this error when the SMTP user that you’re trying to use is not active (e.g. disabled by an admin).

### SMTP Error: Data not accepted

[![](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-SMTP-Error-Data-not-accepted-1024x243.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-SMTP-Error-Data-not-accepted.png)

This means that the SMTP server is rejecting your email message because it contains something not allowed by the SMTP server rules. Most of the time it can be due to from address restrictions (many SMTP servers only allow using the email address associated to the username that you’re using to send the email), but it can be any other part of your email content.

### WordPress was unable to send the notification email

[![](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-WordPress-was-unable-to-send-the-notification-email-1024x243.png)](https://docs.gravityforms.com/wp-content/uploads/2013/08/notification-result-WordPress-was-unable-to-send-the-notification-email.png)

In this case, WordPress was unable to send the email for unknown reasons, the sending server didn’t provide any additional information. Only the sending server admin can investigate this further.

## Enable Logging

**By using [logging](https://docs.gravityforms.com/logging-and-debugging/), you can easily cover scenarios where the sending result note is not being added to the entry, and why they are occurring**. Reviewing your logs will allow you to see where the notification might be failing, and resolve the issue if it’s within the scope of Gravity Forms side of things. **If you need to contact support for better understanding of the log contents, don’t turn off logging until receiving a response from support, or your log files will be deleted**.

## Check for plugin or theme conflicts

Sometimes other plugins or themes create issues that stop notifications from working. Please go through the following instructions to test for a Plugin or Theme conflict.

[Testing for a Theme/Plugin Conflict](https://docs.gravityforms.com/testing-theme-plugin-conflict/)

## Contact your web host

If there wasn’t a plugin or theme conflict, SMTP isn’t working for you, or you’re seeing in your log any of the results described in the logging add-on section, then you will want to contact your web host and have them look at the server logs to check to see if there are any errors being written.

Often they will see if things are being blocked, by them on purpose or due to some server misconfiguration issues.

## IP Blacklisting

IP blacklisting is a process where an IP address is flagged and added to a list of banned or restricted addresses due to suspicious or harmful activity, such as sending spam, spreading malware, or engaging in unauthorized access. Mail servers and network security systems use these blacklists to filter out potentially dangerous or unwanted traffic, often preventing emails from blacklisted IPs from reaching their recipients. **Being on a blacklist can impact email deliverability and web access, necessitating steps to resolve and avoid further listing.**

- **[Spamhaus](https://www.spamhaus.org/)** is a well-known anti-spam organization that maintains several real-time blacklists (RBLs) to help detect and block spam emails. Their blacklists are used globally by ISPs, email providers, and corporations to filter out suspicious or malicious email traffic.
- **[MXToolbox](https://mxtoolbox.com/)** offers a suite of diagnostic tools, including an IP blacklist checker that scans multiple blacklists to see if a specific IP address is flagged. It helps identify deliverability issues and monitor email server health.
- **[Barracuda](https://www.barracudacentral.org/lookups)** provides a range of security solutions, including an email blacklist that identifies IPs associated with spam activities. Their reputation blocklist is integrated into their security appliances and services, protecting users from spam and other malicious content.

## Email Content Analysis Tools

Email content analysis tools help you ensure your emails look good and avoid being marked as spam. They check things like your subject line, the text in your email, and how everything is formatted. If your email has too many links, spammy words, or weird formatting, these tools will let you know and give tips on how to fix it. They can also test how different inboxes will treat your email so you know if it might get blocked or sent to the spam folder.

- [Mailshake](https://mailshake.com/email-analyzer/). Increase engagement on your cold emails by improving deliverability and readability
- [Trustifi](https://trustifi.com/email-analyzer/). Discover **hidden details, diagnose problems**, and gain a deeper understanding of your mail flow with our Email Analyzer Tool.

## Configure your SPF and DMARC Records

[SPF](https://support.google.com/a/answer/33786?hl=en) and [DMARC](http://dmarc.org/) records are designed to allow third-party email servers to validate the authenticity of the email sender. These records are configured in your domain DNS settings and are something you will need to configure in your domain registrar or DNS control panel.

**The absence or misconfiguration of these records can cause the email to be marked as spam or be rejected**. DMARC records are not required; while they are widely adopted, not every email server uses them. If your integration provides the option to configure a DMARC record, we recommend taking advantage of that.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: September 2, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/troubleshooting-notifications/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)