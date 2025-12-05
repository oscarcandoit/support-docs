---
url: "https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions"
title: "Consuming Supabase Queue Messages with Edge Functions | Supabase Docs"
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

[Queues](https://supabase.com/docs/guides/queues)

[Overview](https://supabase.com/docs/guides/queues)

Getting Started[Quickstart](https://supabase.com/docs/guides/queues/quickstart)
[Consuming Messages with Edge Functions](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions)
[Expose Queues for local and self-hosted Supabase](https://supabase.com/docs/guides/queues/expose-self-hosted-queues)

References[API](https://supabase.com/docs/guides/queues/api)
[PGMQ Extension](https://supabase.com/docs/guides/queues/pgmq)

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

Queues

1. [Queues](https://supabase.com/docs/guides/queues)
3. Getting Started
5. [Consuming Messages with Edge Functions](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions)

# Consuming Supabase Queue Messages with Edge Functions

## Learn how to consume Supabase Queue messages server-side with a Supabase Edge Function

* * *

This guide helps you read & process queue messages server-side with a Supabase Edge Function. Read [Queues API Reference](https://supabase.com/docs/guides/queues/api) for more details on our API.

## Concepts [\#](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions\#concepts)

Supabase Queues is a pull-based Message Queue consisting of three main components: Queues, Messages, and Queue Types. You should already be familiar with the [Queues Quickstart](https://supabase.com/docs/guides/queues/quickstart).

### Consuming messages in an Edge Function [\#](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions\#consuming-messages-in-an-edge-function)

This is a Supabase Edge Function that reads 5 messages off the queue, processes each of them, and deletes each message when it is done.

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
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81

import 'jsr:@supabase/functions-js/edge-runtime.d.ts'import { createClient } from 'npm:@supabase/supabase-js@2'const supabaseUrl = 'supabaseURL'const supabaseKey = 'supabaseKey'const supabase = createClient(supabaseUrl, supabaseKey)const queueName = 'your_queue_name'// Type definition for queue messagesinterface QueueMessage {  msg_id: bigint  read_ct: number  vt: string  enqueued_at: string  message: any}async function processMessage(message: QueueMessage) {  //  // Do whatever logic you need to with the message content  //  // Delete the message from the queue  const { error: deleteError } = await supabase.schema('pgmq_public').rpc('delete', {    queue_name: queueName,    msg_id: message.msg_id,  })  if (deleteError) {    console.error(`Failed to delete message ${message.msg_id}:`, deleteError)  } else {    console.log(`Message ${message.msg_id} deleted from queue`)  }}Deno.serve(async (req) => {  const { data: messages, error } = await supabase.schema('pgmq_public').rpc('read', {    queue_name: queueName,    sleep_seconds: 0, // Don't wait if queue is empty    n: 5, // Read 5 messages off the queue  })  if (error) {    console.error(`Error reading from ${queueName} queue:`, error)    return new Response(JSON.stringify({ error: error.message }), {      status: 500,      headers: { 'Content-Type': 'application/json' },    })  }  if (!messages || messages.length === 0) {    console.log('No messages in workflow_messages queue')    return new Response(JSON.stringify({ message: 'No messages in queue' }), {      status: 200,      headers: { 'Content-Type': 'application/json' },    })  }  console.log(`Found ${messages.length} messages to process`)  // Process each message that was read off the queue  for (const message of messages) {    try {      await processMessage(message as QueueMessage)    } catch (error) {      console.error(`Error processing message ${message.msg_id}:`, error)    }  }  // Return immediately while background processing continues  return new Response(    JSON.stringify({      message: `Processing ${messages.length} messages in background`,      count: messages.length,    }),    {      status: 200,      headers: { 'Content-Type': 'application/json' },    }  )})
```

Every time this Edge Function is run it:

1. Read 5 messages off the queue
2. Call the `processMessage` function
3. At the end of `processMessage`, the message is deleted from the queue
4. If `processMessage` throws an error, the error is logged. In this case, the message is still in the queue, so the next time this Edge Function runs it reads the message again.

You might find this kind of setup handy to run with [Supabase Cron](https://supabase.com/docs/guides/cron). You can set up Cron so that every N number of minutes or seconds, the Edge Function will run and process a number of messages off the queue.

Similarly, you can invoke the Edge Function on command at any given time with [`supabase.functions.invoke`](https://supabase.com/docs/guides/functions/quickstart-dashboard#usage).

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/queues/consuming-messages-with-edge-functions.mdx)

### Is this helpful?

NoYes

### On this page

[Concepts](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions#concepts) [Consuming messages in an Edge Function](https://supabase.com/docs/guides/queues/consuming-messages-with-edge-functions#consuming-messages-in-an-edge-function)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)