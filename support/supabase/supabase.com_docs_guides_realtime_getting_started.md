---
url: "https://supabase.com/docs/guides/realtime/getting_started"
title: "Getting Started with Realtime | Supabase Docs"
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
3. [Getting Started](https://supabase.com/docs/guides/realtime/getting_started)

# Getting Started with Realtime

## Learn how to build real-time applications with Supabase Realtime

* * *

## Quick start [\#](https://supabase.com/docs/guides/realtime/getting_started\#quick-start)

### 1\. Install the client library [\#](https://supabase.com/docs/guides/realtime/getting_started\#1-install-the-client-library)

TypeScriptFlutterSwiftPython - PIPPython - Conda

```
1

npm install @supabase/supabase-js
```

### 2\. Initialize the client [\#](https://supabase.com/docs/guides/realtime/getting_started\#2-initialize-the-client)

Get your project URL and key.

### Get API details [\#](https://supabase.com/docs/guides/realtime/getting_started\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

TypeScriptFlutterSwiftPython

```
1
2
3

import { createClient } from '@supabase/supabase-js'const supabase = createClient('https://<project>.supabase.co', '<anon_key or sb_publishable_key>')
```

### 3\. Create your first Channel [\#](https://supabase.com/docs/guides/realtime/getting_started\#3-create-your-first-channel)

Channels are the foundation of Realtime. Think of them as rooms where clients can communicate. Each channel is identified by a topic name and if they are public or private.

TypeScriptFlutterSwiftPython

```
1
2
3
4

// Create a channel with a descriptive topic nameconst channel = supabase.channel('room:lobby:messages', {  config: { private: true }, // Recommended for production})
```

### 4\. Set up authorization [\#](https://supabase.com/docs/guides/realtime/getting_started\#4-set-up-authorization)

Since we're using a private channel, you need to create a basic RLS policy on the `realtime.messages` table to allow authenticated users to connect. Row Level Security (RLS) policies control who can access your Realtime channels based on user authentication and custom rules:

```
1
2
3
4
5
6
7

-- Allow authenticated users to receive broadcastsCREATE POLICY "authenticated_users_can_receive" ON realtime.messages  FOR SELECT TO authenticated USING (true);-- Allow authenticated users to send broadcastsCREATE POLICY "authenticated_users_can_send" ON realtime.messages  FOR INSERT TO authenticated WITH CHECK (true);
```

### 5\. Send and receive messages [\#](https://supabase.com/docs/guides/realtime/getting_started\#5-send-and-receive-messages)

There are three main ways to send messages with Realtime:

#### 5.1 using client libraries [\#](https://supabase.com/docs/guides/realtime/getting_started\#51-using-client-libraries)

Send and receive messages using the Supabase client:

TypeScriptFlutterSwiftPython

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
15
16
17

// Listen for messageschannel  .on('broadcast', { event: 'message_sent' }, (payload: { payload: any }) => {    console.log('New message:', payload.payload)  })  .subscribe()// Send a messagechannel.send({  type: 'broadcast',  event: 'message_sent',  payload: {    text: 'Hello, world!',    user: 'john_doe',    timestamp: new Date().toISOString(),  },})
```

#### 5.2 using HTTP/REST API [\#](https://supabase.com/docs/guides/realtime/getting_started\#52-using-httprest-api)

Send messages via HTTP requests, perfect for server-side applications:

TypeScriptFlutterSwiftPython

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
15
16
17
18
19

// Send message via REST APIconst response = await fetch(`https://<project>.supabase.co/rest/v1/rpc/broadcast`, {  method: 'POST',  headers: {    'Content-Type': 'application/json',    Authorization: `Bearer <your-service-role-key>`,    apikey: '<your-service-role-key>',  },  body: JSON.stringify({    topic: 'room:lobby:messages',    event: 'message_sent',    payload: {      text: 'Hello from server!',      user: 'system',      timestamp: new Date().toISOString(),    },    private: true,  }),})
```

#### 5.3 using database triggers [\#](https://supabase.com/docs/guides/realtime/getting_started\#53-using-database-triggers)

Automatically broadcast database changes using triggers. Choose the approach that best fits your needs:

**Using `realtime.broadcast_changes` (Best for mirroring database changes)**

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
15
16
17
18
19
20
21
22

-- Create a trigger function for broadcasting database changesCREATE OR REPLACE FUNCTION broadcast_message_changes()RETURNS TRIGGER AS $$BEGIN  -- Broadcast to room-specific channel  PERFORM realtime.broadcast_changes(    'room:' || NEW.room_id::text || ':messages',    TG_OP,    TG_OP,    TG_TABLE_NAME,    TG_TABLE_SCHEMA,    NEW,    OLD  );  RETURN NULL;END;$$ LANGUAGE plpgsql SECURITY DEFINER;-- Apply trigger to your messages tableCREATE TRIGGER messages_broadcast_trigger  AFTER INSERT OR UPDATE OR DELETE ON messages  FOR EACH ROW EXECUTE FUNCTION broadcast_message_changes();
```

**Using `realtime.send` (Best for custom notifications and filtered data)**

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
15
16
17
18
19
20
21
22
23
24
25
26
27

-- Create a trigger function for custom notificationsCREATE OR REPLACE FUNCTION notify_message_activity()RETURNS TRIGGER AS $$BEGIN  -- Send custom notification when new message is created  IF TG_OP = 'INSERT' THEN    PERFORM realtime.send(      'room:' || NEW.room_id::text || ':notifications',      'message_created',      jsonb_build_object(        'message_id', NEW.id,        'user_id', NEW.user_id,        'room_id', NEW.room_id,        'created_at', NEW.created_at      ),      true  -- private channel    );  END IF;  RETURN NULL;END;$$ LANGUAGE plpgsql SECURITY DEFINER;-- Apply trigger to your messages tableCREATE TRIGGER messages_notification_trigger  AFTER INSERT ON messages  FOR EACH ROW EXECUTE FUNCTION notify_message_activity();
```

- **`realtime.broadcast_changes`** sends the full database change with metadata
- **`realtime.send`** allows you to send custom payloads and control exactly what data is broadcast

## Essential best practices [\#](https://supabase.com/docs/guides/realtime/getting_started\#essential-best-practices)

### Use private channels [\#](https://supabase.com/docs/guides/realtime/getting_started\#use-private-channels)

Always use private channels for production applications to ensure proper security and authorization:

```
1
2
3

const channel = supabase.channel('room:123:messages', {  config: { private: true },})
```

### Follow naming conventions [\#](https://supabase.com/docs/guides/realtime/getting_started\#follow-naming-conventions)

**Channel Topics:** Use the pattern `scope:id:entity`

- `room:123:messages` \- Messages in room 123
- `game:456:moves` \- Game moves for game 456
- `user:789:notifications` \- Notifications for user 789

### Clean up subscriptions [\#](https://supabase.com/docs/guides/realtime/getting_started\#clean-up-subscriptions)

Always unsubscribe when you are done with a channel to ensure you free up resources:

TypeScriptFlutterSwiftPython

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

// React exampleimport { useEffect } from 'react'useEffect(() => {  const channel = supabase.channel('room:123:messages')  return () => {    supabase.removeChannel(channel)  }}, [])
```

## Choose the right feature [\#](https://supabase.com/docs/guides/realtime/getting_started\#choose-the-right-feature)

### When to use Broadcast [\#](https://supabase.com/docs/guides/realtime/getting_started\#when-to-use-broadcast)

- Real-time messaging and notifications
- Custom events and game state
- Database change notifications (with triggers)
- High-frequency updates (e.g. Cursor tracking)
- Most use cases

### When to use Presence [\#](https://supabase.com/docs/guides/realtime/getting_started\#when-to-use-presence)

- User online/offline status
- Active user counters
- Use minimally due to computational overhead

### When to use Postgres Changes [\#](https://supabase.com/docs/guides/realtime/getting_started\#when-to-use-postgres-changes)

- Quick testing and development
- Low amount of connected users

## Next steps [\#](https://supabase.com/docs/guides/realtime/getting_started\#next-steps)

Now that you understand the basics, dive deeper into each feature:

### Core features [\#](https://supabase.com/docs/guides/realtime/getting_started\#core-features)

- **[Broadcast](https://supabase.com/docs/guides/realtime/broadcast)** \- Learn about sending messages, database triggers, and REST API usage
- **[Presence](https://supabase.com/docs/guides/realtime/presence)** \- Implement user state tracking and online indicators
- **[Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes)** \- Understanding database change listeners (consider migrating to Broadcast)

### Security & configuration [\#](https://supabase.com/docs/guides/realtime/getting_started\#security--configuration)

- **[Authorization](https://supabase.com/docs/guides/realtime/authorization)** \- Set up RLS policies for private channels
- **[Settings](https://supabase.com/docs/guides/realtime/settings)** \- Configure your Realtime instance for optimal performance

### Advanced topics [\#](https://supabase.com/docs/guides/realtime/getting_started\#advanced-topics)

- **[Architecture](https://supabase.com/docs/guides/realtime/architecture)** \- Understand how Realtime works under the hood
- **[Benchmarks](https://supabase.com/docs/guides/realtime/benchmarks)** \- Performance characteristics and scaling considerations
- **[Quotas](https://supabase.com/docs/guides/realtime/quotas)** \- Usage limits and best practices

### Integration guides [\#](https://supabase.com/docs/guides/realtime/getting_started\#integration-guides)

- **[Realtime with Next.js](https://supabase.com/docs/guides/realtime/realtime-with-nextjs)** \- Build real-time Next.js applications
- **[User Presence](https://supabase.com/docs/guides/realtime/realtime-user-presence)** \- Implement user presence features
- **[Database Changes](https://supabase.com/docs/guides/realtime/subscribing-to-database-changes)** \- Listen to database changes

### Framework examples [\#](https://supabase.com/docs/guides/realtime/getting_started\#framework-examples)

- **[Flutter Integration](https://supabase.com/docs/guides/realtime/realtime-listening-flutter)** \- Build real-time Flutter applications

Ready to build something amazing? Start with the [Broadcast guide](https://supabase.com/docs/guides/realtime/broadcast) to create your first real-time feature!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/getting_started.mdx)

### Is this helpful?

NoYes

### On this page

[Quick start](https://supabase.com/docs/guides/realtime/getting_started#quick-start) [1\. Install the client library](https://supabase.com/docs/guides/realtime/getting_started#1-install-the-client-library) [2\. Initialize the client](https://supabase.com/docs/guides/realtime/getting_started#2-initialize-the-client) [Get API details](https://supabase.com/docs/guides/realtime/getting_started#get-api-details) [3\. Create your first Channel](https://supabase.com/docs/guides/realtime/getting_started#3-create-your-first-channel) [4\. Set up authorization](https://supabase.com/docs/guides/realtime/getting_started#4-set-up-authorization) [5\. Send and receive messages](https://supabase.com/docs/guides/realtime/getting_started#5-send-and-receive-messages) [Essential best practices](https://supabase.com/docs/guides/realtime/getting_started#essential-best-practices) [Use private channels](https://supabase.com/docs/guides/realtime/getting_started#use-private-channels) [Follow naming conventions](https://supabase.com/docs/guides/realtime/getting_started#follow-naming-conventions) [Clean up subscriptions](https://supabase.com/docs/guides/realtime/getting_started#clean-up-subscriptions) [Choose the right feature](https://supabase.com/docs/guides/realtime/getting_started#choose-the-right-feature) [When to use Broadcast](https://supabase.com/docs/guides/realtime/getting_started#when-to-use-broadcast) [When to use Presence](https://supabase.com/docs/guides/realtime/getting_started#when-to-use-presence) [When to use Postgres Changes](https://supabase.com/docs/guides/realtime/getting_started#when-to-use-postgres-changes) [Next steps](https://supabase.com/docs/guides/realtime/getting_started#next-steps) [Core features](https://supabase.com/docs/guides/realtime/getting_started#core-features) [Security & configuration](https://supabase.com/docs/guides/realtime/getting_started#security--configuration) [Advanced topics](https://supabase.com/docs/guides/realtime/getting_started#advanced-topics) [Integration guides](https://supabase.com/docs/guides/realtime/getting_started#integration-guides) [Framework examples](https://supabase.com/docs/guides/realtime/getting_started#framework-examples)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)