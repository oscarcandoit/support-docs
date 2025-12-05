---
url: "https://supabase.com/docs/guides/troubleshooting/edge-function-fails-deploy"
title: "Supabase Docs | Troubleshooting | Edge Function deploy failed due to an internal error"
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

# Edge Function deploy failed due to an internal error

Last edited: 11/26/2025

* * *

When encountering the `Function deploy failed due to an internal error`, try deploy the function via the [Supabase CLI](https://supabase.com/docs/guides/local-development) with the `--debug` flag to gather extra information to identify the possible cause.

You can also try [alternative bundle methods](https://supabase.com/docs/reference/cli/supabase-functions-deploy):

- `--use-api`: Use Management API to bundle functions.
- `--use-docker`: Use Docker to bundle functions.

If you're not able to run the CLI or cannot identify the cause, [open a support ticket](https://supabase.com/dashboard/support/new).

**Example error**

```
1
2
3

$ supabase functions deploy FUNCTION_NAME --project-ref $PROJECT_ID...unexpected deploy status 500: {"message":"Function deploy failed due to an internal error"}
```

**Example output with `--debug`**

- From the details we can see it is exceeding the 20MB [Edge Function size limit](https://supabase.com/docs/guides/functions/limits)

```
1
2
3
4
5

$ supabase functions deploy FUNCTION_NAME --project-ref $PROJECT_ID --debug...Deploying Function: FUNCTION_NAME (script size: 62.61MB)...unexpected update function status 413: {"message":"request entity too large"}
```

## Metadata

* * *

### Products

[Functions](https://supabase.com/docs/guides/troubleshooting?products=functions)

* * *

### Related error codes

[500](https://supabase.com/docs/guides/troubleshooting?errorCodes=500) [500](https://supabase.com/docs/guides/troubleshooting?errorCodes=500)

* * *

### Keywords

[fail](https://supabase.com/docs/guides/troubleshooting?tags=fail) [deploy](https://supabase.com/docs/guides/troubleshooting?tags=deploy)

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