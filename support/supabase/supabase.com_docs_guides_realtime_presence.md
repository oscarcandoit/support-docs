---
url: "https://supabase.com/docs/guides/realtime/presence"
title: "Presence | Supabase Docs"
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

[Realtime](https://supabase.com/docs/guides/realtime)

[Overview](https://supabase.com/docs/guides/realtime)

[Getting Started](https://supabase.com/docs/guides/realtime/getting_started)

Usage[Broadcast](https://supabase.com/docs/guides/realtime/broadcast)
[Presence](https://supabase.com/docs/guides/realtime/presence)
[Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes)
[Settings](https://supabase.com/docs/guides/realtime/settings)

Security[Authorization](https://supabase.com/docs/guides/realtime/authorization)

Guides[Subscribing to Database Changes](https://supabase.com/docs/guides/realtime/subscribing-to-database-changes)
[Using Realtime with Next.js](https://supabase.com/docs/guides/realtime/realtime-with-nextjs)
[Using Realtime Presence with Flutter](https://supabase.com/docs/guides/realtime/realtime-user-presence)
[Listening to Postgres Changes with Flutter](https://supabase.com/docs/guides/realtime/realtime-listening-flutter)

Deep dive[Quotas](https://supabase.com/docs/guides/realtime/quotas)
[Pricing](https://supabase.com/docs/guides/realtime/pricing)
[Architecture](https://supabase.com/docs/guides/realtime/architecture)
[Concepts](https://supabase.com/docs/guides/realtime/concepts)
[Protocol](https://supabase.com/docs/guides/realtime/protocol)
[Benchmarks](https://supabase.com/docs/guides/realtime/benchmarks)

Debugging[Operational Error Codes](https://supabase.com/docs/guides/realtime/error_codes)
[Troubleshooting](https://supabase.com/docs/guides/realtime/troubleshooting)

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

Realtime

1. [Realtime](https://supabase.com/docs/guides/realtime)
3. Usage
5. [Presence](https://supabase.com/docs/guides/realtime/presence)

# Presence

## Share state between users with Realtime Presence.

* * *

Let's explore how to implement Realtime Presence to track state between multiple users.

## Usage [\#](https://supabase.com/docs/guides/realtime/presence\#usage)

You can use the Supabase client libraries to track Presence state between users.

### Initialize the client [\#](https://supabase.com/docs/guides/realtime/presence\#initialize-the-client)

Go to your Supabase project's [API Settings](https://supabase.com/dashboard/project/_/settings/api) and grab the `URL` and `anon` public API key.

JavaScriptDartSwiftKotlinPython

```
1
2
3
4
5
6

import { createClient } from '@supabase/supabase-js'const SUPABASE_URL = 'https://<project>.supabase.co'const SUPABASE_KEY = '<sb_publishable_... or anon key>'const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
```

### Sync and track state [\#](https://supabase.com/docs/guides/realtime/presence\#sync-and-track-state)

JavaScriptDartSwiftKotlinPython

Listen to the `sync`, `join`, and `leave` events triggered whenever any client joins or leaves the channel or changes their slice of state:

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
14

const roomOne = supabase.channel('room_01')roomOne  .on('presence', { event: 'sync' }, () => {    const newState = roomOne.presenceState()    console.log('sync', newState)  })  .on('presence', { event: 'join' }, ({ key, newPresences }) => {    console.log('join', key, newPresences)  })  .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {    console.log('leave', key, leftPresences)  })  .subscribe()
```

### Sending state [\#](https://supabase.com/docs/guides/realtime/presence\#sending-state)

You can send state to all subscribers using `track()`:

JavaScriptDartSwiftKotlinPython

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

const roomOne = supabase.channel('room_01')const userStatus = {  user: 'user-1',  online_at: new Date().toISOString(),}roomOne.subscribe(async (status) => {  if (status !== 'SUBSCRIBED') { return }  const presenceTrackStatus = await roomOne.track(userStatus)  console.log(presenceTrackStatus)})
```

A client will receive state from any other client that is subscribed to the same topic (in this case `room_01`). It will also automatically trigger its own `sync` and `join` event handlers.

### Stop tracking [\#](https://supabase.com/docs/guides/realtime/presence\#stop-tracking)

You can stop tracking presence using the `untrack()` method. This will trigger the `sync` and `leave` event handlers.

JavaScriptDartSwiftKotlinPython

```
1
2
3
4
5
6

const untrackPresence = async () => {  const presenceUntrackStatus = await roomOne.untrack()  console.log(presenceUntrackStatus)}untrackPresence()
```

## Presence options [\#](https://supabase.com/docs/guides/realtime/presence\#presence-options)

You can pass configuration options while initializing the Supabase Client.

### Presence key [\#](https://supabase.com/docs/guides/realtime/presence\#presence-key)

By default, Presence will generate a unique `UUIDv1` key on the server to track a client channel's state. If you prefer, you can provide a custom key when creating the channel. This key should be unique among clients.

JavaScriptDartSwiftKotlinPython

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

import { createClient } from '@supabase/supabase-js'const supabase = createClient('SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY')const channelC = supabase.channel('test', {  config: {    presence: {      key: 'userId-123',    },  },})
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/presence.mdx)

### Is this helpful?

NoYes

### On this page

[Usage](https://supabase.com/docs/guides/realtime/presence#usage) [Initialize the client](https://supabase.com/docs/guides/realtime/presence#initialize-the-client) [Sync and track state](https://supabase.com/docs/guides/realtime/presence#sync-and-track-state) [Sending state](https://supabase.com/docs/guides/realtime/presence#sending-state) [Stop tracking](https://supabase.com/docs/guides/realtime/presence#stop-tracking) [Presence options](https://supabase.com/docs/guides/realtime/presence#presence-options) [Presence key](https://supabase.com/docs/guides/realtime/presence#presence-key)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)