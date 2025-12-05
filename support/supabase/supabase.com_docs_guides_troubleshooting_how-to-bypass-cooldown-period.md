---
url: "https://supabase.com/docs/guides/troubleshooting/how-to-bypass-cooldown-period"
title: "Supabase Docs | Troubleshooting | How to bypass cooldown period"
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

# How to bypass cooldown period

Last edited: 11/25/2025

* * *

This cooldown period isn't a Supabase limitation. It's rooted in how Amazon EBS (the underlying storage instance for our databases) manages volume modifications. After modifying a volume (e.g. increasing size, changing type, or IOPS), AWS enforces a mandatory 6-hour cooldown before allowing another modification on the same volume. This is to ensure data integrity and stability of the volume under load.

From the [**AWS docs**](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyVolume.html):

> “After modifying a volume, you must wait at least six hours and ensure that the volume is in the in-use or available state before you can modify the same volume. This is sometimes referred to as a cooldown period.”

There are a few options to work around the cooldown, depending on the state of your database:

1. **Restore to a new project**: This spins up a new instance with a new disk, bypassing the cooldown entirely. It’s a great option if you're okay with a new project and project refactoring. [**Docs: restoring to a new project**](https://supabase.com/docs/guides/platform/backups#restore-to-a-new-project).
2. **pg\_upgrade**: Our [**pg\_upgrade**](https://supabase.com/docs/guides/platform/upgrading) implementation migrates your data to a new disk, which skips the cooldown. The main requirement here is that the database must be operational - it can't run it if your DB is in a degraded or inaccessible state.
3. **Pause and Restore**: This also migrates to a new disk but is only available for projects on the Free plan. If you're not on the Free plan, you'd need to [**transfer your project to an organization on the Free plan**](https://supabase.com/docs/guides/platform/project-transfer) first.

If the database is down or locked in a bad state (e.g corrupted or stuck during resize), the only path forward is to wait until the cooldown expires and the disk resize job completes in the queue.

More on this in our doc here: [**https://supabase.com/docs/guides/platform/database-size#disk-size**](https://supabase.com/docs/guides/platform/database-size#disk-size).

## Metadata

* * *

### Products

[Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[cooldown](https://supabase.com/docs/guides/troubleshooting?tags=cooldown) [disk resize](https://supabase.com/docs/guides/troubleshooting?tags=disk+resize)

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