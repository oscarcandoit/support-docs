---
url: "https://supabase.com/docs/guides/troubleshooting/performing-administration-tasks-on-the-server-side-with-the-servicerole-secret-BYM4Fa"
title: "Supabase Docs | Troubleshooting | Performing administration tasks on the server side with the service_role secret"
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

# Performing administration tasks on the server side with the service\_role secret

Last edited: 5/27/2025

* * *

By default, the auth-helpers/ssr do not permit the use of the `service_role``secret`. This restriction is in place to prevent the accidental exposure of your `service_role``secret` to the public. Since the auth-helpers/ssr function on both the server and client side, it becomes challenging to separate the key specifically for client-side usage.

However, there is a solution. You can create a separate Supabase client using the `createClient` method from `@supabase/supabase-js` and provide it with the `service_role``secret`. In a server environment, you will also need to disable certain properties to ensure proper functionality. See the example code below for the required settings.

By implementing this approach, you can safely utilize the `service_role``secret` without compromising security or exposing sensitive information to the public.

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

import { createClient } from '@supabase/supabase-js'const supabase = createClient(supabaseUrl, serviceRoleSecret, {  auth: {    persistSession: false,    autoRefreshToken: false,    detectSessionInUrl: false,  },})
```

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[service\_role](https://supabase.com/docs/guides/troubleshooting?tags=service_role) [server](https://supabase.com/docs/guides/troubleshooting?tags=server) [security](https://supabase.com/docs/guides/troubleshooting?tags=security)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/15860)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)