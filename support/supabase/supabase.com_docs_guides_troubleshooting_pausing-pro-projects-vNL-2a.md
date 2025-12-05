---
url: "https://supabase.com/docs/guides/troubleshooting/pausing-pro-projects-vNL-2a"
title: "Supabase Docs | Troubleshooting | Pausing Pro-Projects"
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

# Pausing Pro-Projects

Last edited: 10/10/2025

* * *

Pro-Projects at the moment cannot be paused. However, [You are allowed to have two free organizations](https://supabase.com/docs/guides/platform/billing-on-supabase#free-plan) that can support one active project each and an unlimited amount of paused ones.

If a project is under 500MB, you can [transfer it to be under a free organization](https://supabase.com/docs/guides/platform/project-transfer). Afterwards, you can initiate a pause.

Alternatively, you can download a [daily backup](https://supabase.com/dashboard/project/_/database/backups/scheduled) of just your database for archiving. You can also manually download a .SQL file of your database and storage buckets by following this [guide](https://supabase.com/docs/guides/platform/migrating-within-supabase/backup-restore).

You can also download your storage buckets with the [Supabase CLI:](https://supabase.com/docs/guides/cli/getting-started?queryGroups=platform&platform=npx)

```
1
2
3
4
5
6
7
8
9

npx supabase login# link to your projectnpx supabase linknpx supabase init# will download files to current foldernpx supabase storage cp -r ss://bucket . --experimental
```

## Metadata

* * *

### Products

[Platform](https://supabase.com/docs/guides/troubleshooting?products=platform) [Cli](https://supabase.com/docs/guides/troubleshooting?products=cli) [Storage](https://supabase.com/docs/guides/troubleshooting?products=storage)

* * *

### Keywords

[pause](https://supabase.com/docs/guides/troubleshooting?tags=pause) [projects](https://supabase.com/docs/guides/troubleshooting?tags=projects) [backup](https://supabase.com/docs/guides/troubleshooting?tags=backup) [storage](https://supabase.com/docs/guides/troubleshooting?tags=storage)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/27399)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)