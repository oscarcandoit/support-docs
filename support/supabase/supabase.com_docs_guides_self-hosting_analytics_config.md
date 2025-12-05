---
url: "https://supabase.com/docs/guides/self-hosting/analytics/config"
title: "Analytics Self-hosting Config | Supabase Docs"
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

[Self-Hosting](https://supabase.com/docs/guides/self-hosting)

[Overview](https://supabase.com/docs/guides/self-hosting)

[Self-Hosting with Docker](https://supabase.com/docs/guides/self-hosting/docker)

Configuration[Enabling MCP server](https://supabase.com/docs/guides/self-hosting/enable-mcp)

Auth Server[Reference](https://supabase.com/docs/reference/self-hosting-auth/introduction)
[Configuration](https://supabase.com/docs/guides/self-hosting/auth/config)

Storage Server[Reference](https://supabase.com/docs/reference/self-hosting-storage/introduction)
[Configuration](https://supabase.com/docs/guides/self-hosting/storage/config)

Realtime Server[Reference](https://supabase.com/docs/reference/self-hosting-realtime/introduction)
[Configuration](https://supabase.com/docs/guides/self-hosting/realtime/config)

Analytics Server[Reference](https://supabase.com/docs/reference/self-hosting-analytics/introduction)
[Configuration](https://supabase.com/docs/guides/self-hosting/analytics/config)

Functions Server[Reference](https://supabase.com/docs/reference/self-hosting-functions/introduction)

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

Self-Hosting

1. [Self-Hosting](https://supabase.com/docs/guides/self-hosting)
3. Analytics Server
5. [Configuration](https://supabase.com/docs/guides/self-hosting/analytics/config)

# Analytics Self-hosting Config

* * *

You can use environment variables to configure your Analytics Server.

## General Settings

General server settings.

##### Parameters

LOGFLARE\_SINGLE\_TENANT
REQUIRED
boolean

This is will seed a singular user into the database, and will disable browser authentication. All browser usage will default to this user. Inviting team users and other team-related functionality is currently not supported for self-hosted. Logflare self-hosted is currently intended for single-user experience only.

LOGFLARE\_PUBLIC\_ACCESS\_TOKEN
REQUIRED
string

Allows you to pass in an API key that will used for authentication. This is intended for programmatic usage where an external program sets the API key. If this value is not provided, the default API key will be automatically generated.

LOGFLARE\_SUPABASE\_MODE
REQUIRED
boolean

This is a special mode for Logflare which will seed additional resources for usage with Supabase self-hosted.

PHX\_HTTP\_PORT
REQUIRED
string

Port which serves HTTP requests

DB\_SCHEMA
REQUIRED
string

This ENV variable sets the search path to a custom database schema. This allows you to customize the schema used on the database.

LOGFLARE\_LOG\_LEVEL
REQUIRED
string

Allows the setting of the log level at runtime. For production settings, we advise `warn`.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/app/guides/(with-sidebar)/self-hosting/analytics/config/page.tsx)

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