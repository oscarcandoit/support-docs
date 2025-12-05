---
url: "https://supabase.com/docs/guides/troubleshooting/deprecated-rls-features-Pm77Zs"
title: "Supabase Docs | Troubleshooting | Deprecated RLS features"
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

# Deprecated RLS features

Last edited: 11/26/2025

* * *

## The `auth.role()` function is now deprecated [\#](https://supabase.com/docs/guides/troubleshooting/deprecated-rls-features-Pm77Zs\#the-authrole-function-is-now-deprecated)

The `auth.role()` function has been deprecated in favour of using the `TO` field, natively supported within Postgres:

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
10
11
12
13

-- DEPRECATEDcreate policy "Public profiles are viewable by everyone."on profiles for select using (  auth.role() = 'authenticated' or auth.role() = 'anon');-- RECOMMENDEDcreate policy "Public profiles are viewable by everyone."on profiles for selectto authenticated, anonusing (  true);
```

## The `auth.email()` function is now deprecated [\#](https://supabase.com/docs/guides/troubleshooting/deprecated-rls-features-Pm77Zs\#the-authemail-function-is-now-deprecated)

The `auth.email()` function has been deprecated in favour a more generic function to return the full JWT:

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
10
11

- DEPRECATEDcreate policy "User can view their profile."on profiles for select using (  auth.email() = email);-- RECOMMENDEDcreate policy "User can view their profile."on profiles for select using (  (auth.jwt() ->> 'email') = email);
```

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[rls](https://supabase.com/docs/guides/troubleshooting?tags=rls) [deprecated](https://supabase.com/docs/guides/troubleshooting?tags=deprecated) [auth](https://supabase.com/docs/guides/troubleshooting?tags=auth) [policy](https://supabase.com/docs/guides/troubleshooting?tags=policy)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/16703)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)