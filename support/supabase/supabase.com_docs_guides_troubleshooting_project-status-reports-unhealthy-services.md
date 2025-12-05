---
url: "https://supabase.com/docs/guides/troubleshooting/project-status-reports-unhealthy-services"
title: "Supabase Docs | Troubleshooting | Project Status reports unhealthy services"
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

# Project Status reports unhealthy services

Last edited: 11/26/2025

* * *

![Unhealthy services in Project Status](https://supabase.com/docs/img/troubleshooting/project-status-unhealthy-services.png)

If the project was recently restored, it can take up a couple minutes to become fully operational.

Services rely on the backend database. Unhealthy services can indicate a database being overloaded due to being undersized or not tuned appropriately.

- Review this [troubleshooting doc](https://supabase.com/docs/guides/troubleshooting/failed-to-run-sql-query-connection-terminated-due-to-connection-timeout) to determine if it could be a resource issue.
- If services recover and become unhealthy again, there is likely a repeated issue overloading the database.

Possible resolutions:

- Restart the database in [Project Settings](https://supabase.com/dashboard/project/_/settings/general) (this may be only a temporary fix if the project is undersized / unoptimized).
- Increase project resources in [Compute and Disk](https://supabase.com/dashboard/project/_/settings/compute-and-disk).
- [Performance Tune](https://supabase.com/docs/guides/platform/performance) the database.

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Studio](https://supabase.com/docs/guides/troubleshooting?products=studio)

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