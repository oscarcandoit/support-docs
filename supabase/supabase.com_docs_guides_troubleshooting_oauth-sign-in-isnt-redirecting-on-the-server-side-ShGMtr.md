---
url: "https://supabase.com/docs/guides/troubleshooting/oauth-sign-in-isnt-redirecting-on-the-server-side-ShGMtr"
title: "Supabase Docs | Troubleshooting | OAuth sign in isn't redirecting on the server side"
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

# OAuth sign in isn't redirecting on the server side

Last edited: 2/4/2025

* * *

The reason behind this limitation is that the auth helpers library lacks a direct mechanism for performing server-side redirects, as each framework handles redirects differently. However, the library does offer a URL through the data property it returns, which should be utilized for the purpose of redirection.

**Next.js:**

```
1
2
3
4
5
6
7

import { NextResponse } from "next/server";...const { data } = await supabase.auth.signInWithOAuth({  provider: 'github',})return NextResponse.redirect(data.url)
```

**SvelteKit:**

```
1
2
3
4
5
6
7

import { redirect } from '@sveltejs/kit';...const { data } = await supabase.auth.signInWithOAuth({  provider: 'github',})throw redirect(303, data.url)
```

**Remix:**

```
1
2
3
4
5
6
7

import { redirect } from "@remix-run/node"; // or cloudflare/deno...const { data } = await supabase.auth.signInWithOAuth({  provider: 'github',})return redirect(data.url)
```

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth)

* * *

### Keywords

[oauth](https://supabase.com/docs/guides/troubleshooting?tags=oauth) [redirects](https://supabase.com/docs/guides/troubleshooting?tags=redirects) [server-side](https://supabase.com/docs/guides/troubleshooting?tags=server-side)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/15862)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)