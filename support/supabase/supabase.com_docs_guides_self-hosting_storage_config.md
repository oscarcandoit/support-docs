---
url: "https://supabase.com/docs/guides/self-hosting/storage/config"
title: "Storage Self-hosting Config | Supabase Docs"
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
3. Storage Server
5. [Configuration](https://supabase.com/docs/guides/self-hosting/storage/config)

# Storage Self-hosting Config

* * *

A sample `.env` file is located in the [storage repository](https://github.com/supabase/storage-api/blob/master/.env.sample).

Use this file to configure your environment variables for your Storage server.

## General

General Settings

##### Parameters

ANON\_KEY
REQUIRED
no type

A long-lived JWT with anonymous Postgres privileges.

SERVICE\_KEY
REQUIRED
no type

A long-lived JWT with Postgres privileges to bypass Row Level Security.

TENANT\_ID
REQUIRED
no type

The ID of a Storage tenant.

REGION
REQUIRED
no type

Region of your S3 bucket.

GLOBAL\_S3\_BUCKET
REQUIRED
no type

Name of your S3 bucket.

POSTGREST\_URL
REQUIRED
no type

The URL of your PostgREST server.

PGRST\_JWT\_SECRET
REQUIRED
no type

A JWT Secret for the PostgREST database.

DATABASE\_URL
REQUIRED
no type

The URL of your Postgres database.

PGOPTIONS
REQUIRED
no type

Additional configuration parameters for Postgres startup.

FILE\_SIZE\_LIMIT
REQUIRED
no type

The maximum file size allowed.

STORAGE\_BACKEND
REQUIRED
no type

The storage provider.

FILE\_STORAGE\_BACKEND\_PATH
REQUIRED
no type

The location storage when the "STORAGE\_BACKEND" is set to "file".

## Multi-tenant

Configuration items for multi-tenant servers.

##### Parameters

IS\_MULTITENANT
REQUIRED
no type

Operate across multiple tenants.

MULTITENANT\_DATABASE\_URL
REQUIRED
no type

The URL of the multitenant Postgres database.

X\_FORWARDED\_HOST\_REGEXP
REQUIRED
no type

TBD.

POSTGREST\_URL\_SUFFIX
REQUIRED
no type

The suffix for the PostgREST instance.

ADMIN\_API\_KEYS
REQUIRED
no type

Secure API key for administrative endpoints.

ENCRYPTION\_KEY
REQUIRED
no type

An key for encryting/decrypting secrets.

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/app/guides/(with-sidebar)/self-hosting/storage/config/page.tsx)

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