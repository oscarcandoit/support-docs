---
url: "https://supabase.com/docs/guides/troubleshooting/not-receiving-auth-emails-from-the-supabase-project-OFSNzw"
title: "Supabase Docs | Troubleshooting | Not receiving Auth emails from the Supabase project"
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

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Not receiving Auth emails from the Supabase project

Last edited: 9/9/2025

* * *

**We strongly recommend configuring your own custom SMTP provider** in your projects to avoid running into issues with sending emails from your project. The built-in email provider is for demonstration purposes only and offers a very low rate limit. You can read more details about the rate limits [here](https://supabase.com/docs/guides/platform/going-into-prod#auth-rate-limits).

If you're testing your Supabase projects, consider configuring an email testing tool like [Mailtrap](https://mailtrap.io/) to test your emails. It's an email sandbox tool that helps debug emails without actually sending an email to an end user.

As the initial step in debugging not-delivered emails, check your project's [Auth logs](https://supabase.com/dashboard/project/_/logs/auth-logs) for errors that can occur when handing over to the email providers. In general, handover issues can occur due to misconfiguration of the custom SMTP provider.

Once handed over to the email provider, Supabase has no control over email delivery. There can be multiple reasons why emails do not reach the user's inbox.

#### 1\. Issues with the email provider. [\#](https://supabase.com/docs/guides/troubleshooting/not-receiving-auth-emails-from-the-supabase-project-OFSNzw\#1-issues-with-the-email-provider)

The email provider's logs are the next place to look for email delivery issues. There are cases where the email provider blocks the delivery due to past bounced-back emails. Some email providers maintain a suppression list for not sending emails due to several reasons. You can read more about it here - [https://sendgrid.com/en-us/blog/what-is-a-suppression-list](https://sendgrid.com/en-us/blog/what-is-a-suppression-list)

#### 2\. Issues with the user's email server [\#](https://supabase.com/docs/guides/troubleshooting/not-receiving-auth-emails-from-the-supabase-project-OFSNzw\#2-issues-with-the-users-email-server)

Many email firewalls maintain a denylist of IPs and domain names for security reasons and as spam filters. Sometimes, they block incoming emails from unknown addresses with certain keywords such as password reset, verification link, etc. In these cases, ask the user to check with their email server admin to see if they are blocking your email domain or quarantining the incoming emails. If you use the default provider, the email domain is `supabase.io`. Some information on email firewalls are available here - [https://mailchimp.com/help/about-email-firewalls/](https://mailchimp.com/help/about-email-firewalls/).

There are other obvious failure reasons, including a message going to spam. These can sometimes happen with a default provider. For this reason (among others), you should configure your own email provider to have control over email delivery.
References:
Configure a Custom SMTP - [https://supabase.com/docs/guides/auth/auth-smtp](https://supabase.com/docs/guides/auth/auth-smtp)

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[smtp](https://supabase.com/docs/guides/troubleshooting?tags=smtp) [email](https://supabase.com/docs/guides/troubleshooting?tags=email) [delivery](https://supabase.com/docs/guides/troubleshooting?tags=delivery) [logs](https://supabase.com/docs/guides/troubleshooting?tags=logs) [provider](https://supabase.com/docs/guides/troubleshooting?tags=provider) [firewalls](https://supabase.com/docs/guides/troubleshooting?tags=firewalls)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/22610)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)