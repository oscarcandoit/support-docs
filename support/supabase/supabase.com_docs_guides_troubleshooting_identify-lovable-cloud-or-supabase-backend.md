---
url: "https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend"
title: "Supabase Docs | Troubleshooting | Identifying Lovable backend: Lovable Cloud or Supabase"
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

# Identifying Lovable backend: Lovable Cloud or Supabase

Last edited: 11/26/2025

* * *

## Overview [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#overview)

When you create a project in **Lovable**, your app’s backend can be connected to one of two options:

- **Lovable Cloud** — The backend (Supabase instance) is managed entirely by **Lovable**.
- **Your own Supabase project** — The backend is a Supabase project you created and manage directly in your [Supabase Dashboard](https://supabase.com/dashboard).

Knowing which backend your project uses helps you understand where your database, API keys, and configuration are managed.

## How to identify your backend [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#how-to-identify-your-backend)

In the Lovable interface, click the **Cloud icon** on the top bar of your project editor. This section shows which backend your project is currently connected to.

![Lovable Cloud icon inside Lovable](https://supabase.com/docs/img/troubleshooting/identify-lovable-cloud-or-supabase-backend-0.png)

The Cloud icon appears for all projects, regardless of which backend type you're using. Click it to see your actual backend configuration.

Once you open the Cloud settings, you see one of two interfaces depending on your backend type:

### Lovable Cloud backend [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#lovable-cloud-backend)

If the page shows a menu and screens to manage your Database tables, and Users from within Lovable (similar to the screenshot below), then your backend is managed by **Lovable Cloud**.

![Lovable Cloud backend settings inside Lovable](https://supabase.com/docs/img/troubleshooting/identify-lovable-cloud-or-supabase-backend-1.png)

Your Supabase instance in this case is **owned and managed by Lovable**, not by your personal Supabase account.
You won’t see this project in your Supabase Dashboard, and you won’t have access to service role keys or direct database URLs.

### Connected Supabase backend [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#connected-supabase-backend)

If the page displays the Supabase icon, your Supabase project name, and some links that direct you to the Supabase Dashboard (similar to the screenshot below), then your Lovable project is connected to a **Supabase project you manage directly**.

![Supabase backend settings inside Lovable](https://supabase.com/docs/img/troubleshooting/identify-lovable-cloud-or-supabase-backend-2.png)

## Summary [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#summary)

| Backend Type | Managed By | Appears in Supabase Dashboard | Service Role / DB Access |
| --- | --- | --- | --- |
| **Lovable Cloud** | Lovable | ❌ No | ❌ No |
| **Own Supabase Project** | You | ✅ Yes | ✅ Yes |

## Frequently asked questions [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#frequently-asked-questions)

Does this affect where my app is hosted?

Can I access my database URL or API keys if I'm on Lovable Cloud?

Can I switch from Lovable Cloud to my own Supabase backend?

## Lovable Cloud – specific questions [\#](https://supabase.com/docs/guides/troubleshooting/identify-lovable-cloud-or-supabase-backend\#lovable-cloud--specific-questions)

My project uses Lovable Cloud, can I move it to Supabase?

My project uses Lovable Cloud, but I can't see my Supabase project.

## Metadata

* * *

### Products

[Ai](https://supabase.com/docs/guides/troubleshooting?products=ai)

* * *

### Keywords

[lovable](https://supabase.com/docs/guides/troubleshooting?tags=lovable) [lovable cloud](https://supabase.com/docs/guides/troubleshooting?tags=lovable+cloud)

* * *

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)