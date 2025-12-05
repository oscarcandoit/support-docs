---
url: "https://supabase.com/docs/guides/troubleshooting/google-auth-fails-for-some-users-XcFXEu"
title: "Supabase Docs | Troubleshooting | Google Auth fails for some users"
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

# Google Auth fails for some users

Last edited: 1/17/2025

* * *

## Google Auth fails for some users [\#](https://supabase.com/docs/guides/troubleshooting/google-auth-fails-for-some-users-XcFXEu\#google-auth-fails-for-some-users)

If you start facing either of these errors:

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

error=server_error&error_description=Error+getting+user+email+from+external+providerMissing required authentication credential.Expected OAuth 2 access token, login cookie or other valid authentication credential.See https://developers.google.com/identity/sign-in/web/devconsole-project.\",\n \"status\": \"UNAUTHENTICATED\" } "level":"error","method":"GET","msg":"500: Error getting user email from external provider","path":"/callback","referer":"https://accounts.google.com/","remote_addr":"x.x.X.x","time":"2023-06-06T21:46:11Z","timestamp":"2023-06-06T21:46:11Z"}
```

It is happening because some Google Suite requires the explicit request of email Auth Scopes:
`https://www.googleapis.com/auth/userinfo.email`

```
1
2
3
4
5
6

const { data, error } = await supabase.auth.signInWithOAuth({  provider: 'google'  options: {    scopes: 'https://www.googleapis.com/auth/userinfo.email'  }})
```

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth)

* * *

### Related error codes

[500 server\_error](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+server_error) [401 UNAUTHENTICATED](https://supabase.com/docs/guides/troubleshooting?errorCodes=401+UNAUTHENTICATED)

* * *

### Keywords

[OAuth](https://supabase.com/docs/guides/troubleshooting?tags=OAuth) [Google](https://supabase.com/docs/guides/troubleshooting?tags=Google) [credential](https://supabase.com/docs/guides/troubleshooting?tags=credential) [email](https://supabase.com/docs/guides/troubleshooting?tags=email)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/14883)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)