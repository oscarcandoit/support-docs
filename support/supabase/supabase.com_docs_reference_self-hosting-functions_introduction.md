---
url: "https://supabase.com/docs/reference/self-hosting-functions/introduction"
title: "Self-Hosting | Supabase Docs"
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

Self-Hosting Functions

- [Introduction](https://supabase.com/docs/reference/self-hosting-functions/introduction)

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

Functions Server Reference

![](https://supabase.com/docs/img/icons/menu/reference-analytics.svg)

# Self-Hosting Functions

A web server based on [Deno](https://deno.land/) runtime, capable of running JavaScript, TypeScript, and WASM services.

You can use it to:

- Locally test and self-host Supabase's Edge Functions (or any Deno Edge Function)
- As a programmable HTTP Proxy: You can intercept / route HTTP requests

##### Beta Version

Self hosted Edge functions are in beta. There will be breaking changes to APIs / Configuration Options.

## How to run locally [\#](https://supabase.com/docs/reference/self-hosting-functions/introduction\#how-to-run-locally)

```
1

./run.sh start --main-service /path/to/supabase/functions -p 9000
```

using Docker:

```
1
2

docker build -t edge-runtime .docker run -it --rm -p 9000:9000 -v /path/to/supabase/functions:/usr/services supabase/edge-runtime start --main-service /usr/services
```

## How to update to a newer Deno version [\#](https://supabase.com/docs/reference/self-hosting-functions/introduction\#how-to-update-to-a-newer-deno-version)

- Select the Deno version to upgrade and visit its tag on GitHub (eg: [https://github.com/denoland/deno/blob/v1.30.3/Cargo.toml](https://github.com/denoland/deno/blob/v1.30.3/Cargo.toml))
- Open the `Cargo.toml` at the root of this repo and modify all `deno_*` modules to match to the selected tag of Deno.

## Self hosting Edge Functions on Fly.io [\#](https://supabase.com/docs/reference/self-hosting-functions/introduction\#self-hosting-edge-functions-on-flyio)

We have put together a demo on how to self-host edge functions on [Fly.io](http://fly.io/) (you can also use other providers like Digital Ocean or AWS).

To try it yourself,

1. Sign up for an [Fly.io](http://fly.io/) account and install [flyctl](https://fly.io/docs/hands-on/install-flyctl/)
2. Clone the demo repository to your machine - [https://github.com/supabase/self-hosted-edge-functions-demo](https://github.com/supabase/self-hosted-edge-functions-demo)
3. Copy your Edge Function into the `./functions` directory in the demo repo.
4. Update the Dockerfile to pull the latest edge-runtime image (check [releases](https://github.com/supabase/edge-runtime/pkgs/container/edge-runtime))
5. \[Optional\] Edit `./functions/main/index.ts`, adding any other request preprocessing logic (for example, you can enable JWT validation, handle CORS requests)
6. Run `fly launch` to create a new app to serve your Edge Functions
7. Access your Edge Function by visiting:
`https://{your-app-name}.fly.dev/{your-function-name}`

You can view the logs for the Edge Runtime, by visiting Fly.io’s Dashboard > Your App > Metrics. Also, you can serve edge-runtime from multiple regions by running `fly regions add [REGION]`.

### Client libraries [\#](https://supabase.com/docs/reference/self-hosting-functions/introduction\#client-libraries)

- [JavaScript](https://supabase.com/docs/reference/javascript/functions-invoke)
- [Dart](https://supabase.com/docs/reference/dart/functions-invoke)

### Additional Links [\#](https://supabase.com/docs/reference/self-hosting-functions/introduction\#additional-links)

- [Source code](https://github.com/supabase/edge-runtime/)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)