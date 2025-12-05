---
url: "https://supabase.com/docs/guides/realtime/protocol"
title: "Realtime Protocol | Supabase Docs"
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
3. Deep dive
5. [Protocol](https://supabase.com/docs/guides/realtime/protocol)

# Realtime Protocol

* * *

## WebSocket connection setup [\#](https://supabase.com/docs/guides/realtime/protocol\#websocket-connection-setup)

To start the connection we use the WebSocket URL, which for:

- Supabase projects: `wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>`
- self-hosted projects: `wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>`

As an example, using [websocat](https://github.com/vi/websocat), you would run the following command in your terminal:

```
1
2
3
4
5

# With Supabasewebsocat "wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>"# With self-hostedwebsocat "wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>"
```

During this stage you can also set other URL params:

- `vsn`: sets the protocol version. Possible values are `1.0.0` and `2.0.0`. Defaults to `1.0.0`.
- `log_level`: sets the log level to be used by this connection to help you debug potential issues. This only affects server side logs.

After connecting a `phx_join` event must be sent to the server to join a channel. The next sections outline the different messages types and events that are supported.

## Protocol messages [\#](https://supabase.com/docs/guides/realtime/protocol\#protocol-messages)

Messages can be serialized in different formats. The Realtime protocol supports two versions: `1.0.0` and `2.0.0`.

## 1.0.0 [\#](https://supabase.com/docs/guides/realtime/protocol\#100)

Version 1.0.0 is extremely simple. It uses JSON as the serialization format for messages. The underlying WebSocket messages are all text frames.

Messages contain the following fields:

- `event`: The type of event being sent or received. Example `phx_join`, `postgres_changes`, `broadcast`, etc.
- `topic`: The topic to which the message belongs. This is a string that identifies the channel or context of the message.
- `payload`: The data associated with the event. This can be any JSON-serializable data structure, such as an object or an array.
- `ref`: A unique reference ID for the message. This is useful to track replies to a specific message.
- `join_ref`: A unique reference ID to uniquely identify a joined topic for pushes, broadcasts, replies, etc.

Example:

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

{  "topic": "realtime:presence-room",  "event": "phx_join",  "payload": {    "config": {      "broadcast": {        "ack": false,        "self": false      },      "presence": {        "enabled": false      },      "private": false    }  },  "ref": "1",  "join_ref": "1"}
```

## 2.0.0 [\#](https://supabase.com/docs/guides/realtime/protocol\#200)

Version 2.0.0 uses text and binary WebSocket frames.

### Text frames [\#](https://supabase.com/docs/guides/realtime/protocol\#text-frames)

Text frames are always JSON encoded, but unlike version 1.0.0, they use a JSON array where the element order must be exactly:

- `join_ref`
- `ref`
- `topic`
- `event`
- `payload`

Example:

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

[  "1",  "1",  "realtime:presence-room",  "phx_join",  {    "config": {      "broadcast": {        "ack": false,        "self": false      },      "presence": {        "enabled": false      },      "private": false    }  }]
```

### Binary frames [\#](https://supabase.com/docs/guides/realtime/protocol\#binary-frames)

The two special message types have a well defined binary format where the first byte defines the type of message. Both are used to send and receive broadcast events. See the [client](https://supabase.com/docs/guides/realtime/protocol#client-sent-events) and [server](https://supabase.com/docs/guides/realtime/protocol#server-sent-events) sent events for more details.

| Code | Type | Description |
| --- | --- | --- |
| 3 | USER\_BROADCAST\_PUSH | User-initiated broadcast push |
| 4 | USER\_BROADCAST | User broadcast message |

#### User Broadcast Push [\#](https://supabase.com/docs/guides/realtime/protocol\#user-broadcast-push)

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

0                   1                   2                   3 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|  Type (0x03)  | Join Ref Size |   Ref Size    |  Topic Size   |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|User Event Size| Metadata Size | Payload Enc.  |  Join Ref ... |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                      Ref (variable length)                    |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                     Topic (variable length)                   |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                  User Event (variable length)                 |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                   Metadata (variable length)                  |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                User Payload (variable length)                 |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**Field Descriptions:**

- **Type**: 1 byte, value = 0x03
- **Join Ref Size**: 1 byte, size of join reference string (max 255)
- **Ref Size**: 1 byte, size of reference string (max 255)
- **Topic Size**: 1 byte, size of topic string (max 255)
- **User Event Size**: 1 byte, size of user event string (max 255)
- **Metadata Size**: 1 byte, size of metadata string (max 255)
- **Payload Encoding**: 1 byte (0 = binary, 1 = JSON)
- **Join Ref**: Variable length string
- **Ref**: Variable length string
- **Topic**: Variable length string
- **User Event**: Variable length string
- **Metadata**: Variable length JSON string
- **User Payload**: Variable length payload data

#### User Broadcast [\#](https://supabase.com/docs/guides/realtime/protocol\#user-broadcast)

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

0                   1                   2                   3 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|  Type (0x04)  |  Topic Size   |User Event Size| Metadata Size |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+| Payload Enc.  |          Topic (variable length)              |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                  User Event (variable length)                 |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                   Metadata (variable length)                  |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+|                User Payload (variable length)                 |+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

**Field Descriptions:**

- **Type**: 1 byte, value = 0x04
- **Topic Size**: 1 byte, size of topic string (max 255)
- **User Event Size**: 1 byte, size of user event string (max 255)
- **Metadata Size**: 1 byte, size of metadata JSON string (max 255)
- **Payload Encoding**: 1 byte (0 = binary, 1 = JSON)
- **Topic**: Variable length string
- **User Event**: Variable length string
- **Metadata**: Variable length JSON string
- **User Payload**: Variable length payload data

## Event types [\#](https://supabase.com/docs/guides/realtime/protocol\#event-types)

Messages for all events are encoded as text frames using JSON except with the `broadcast` event type which can happen on both text and binary frames.

### Client sent events [\#](https://supabase.com/docs/guides/realtime/protocol\#client-sent-events)

| Event Type | Description | Requires Ref | Requires Join Ref |
| --- | --- | --- | --- |
| `phx_join` | Initial message to join a channel and configure features | ✅ | ✅ |
| `phx_leave` | Message to leave a channel | ✅ | ✅ |
| `heartbeat` | Heartbeat message to keep the connection alive | ✅ | ⛔ |
| `access_token` | Message to update the access token | ✅ | ✅ |
| `broadcast` | Broadcast message sent to all clients in a channel | ✅ | ✅ |
| `presence` | Presence state update sent after joining a channel | ✅ | ✅ |

#### phx\_join [\#](https://supabase.com/docs/guides/realtime/protocol\#phxjoin)

This is the initial message required to join a channel. The client sends this message to the server to join a specific topic and configure the features it wants to use, such as Postgres changes, Presence, and Broadcast. The payload of the `phx_join` event contains the configuration options for the channel.

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

{  "config": {    "broadcast": {      "ack": boolean,      "self": boolean,      "replay" : {        "since": integer,        "limit": integer      }    },    "presence": {      "enabled": boolean,      "key": string    },    "postgres_changes": [      {        "event": string,        "schema": string,        "table": string,        "filter": string      }    ]    "private": boolean  },  "access_token": string}
```

- `config`:
  - `private`: Whether the channel is private
  - `broadcast`: Configuration options for broadcasting messages
    - `ack`: Acknowledge broadcast messages
    - `self`: Include the sender in broadcast messages
    - `replay`: Configuration options for broadcast replay (Optional)
      - `since`: Replay messages since a specific timestamp in milliseconds
      - `limit`: Limit the number of replayed messages (Optional)
  - `presence`: Configuration options for presence tracking
    - `enabled`: Whether presence tracking is enabled for this channel
    - `key`: Key to be used for presence tracking, if not specified or empty, a UUID will be generated and used
  - `postgres_changes`: Array of configurations for Postgres changes
    - `event`: Database change event to listen to, accepts `INSERT`, `UPDATE`, `DELETE`, or `*` to listen to all events.
    - `schema`: Schema of the table to listen to, accepts `*` wildcard to listen to all schemas
    - `table`: Table of the database to listen to, accepts `*` wildcard to listen to all tables
    - `filter`: Filter to be used when pulling changes from database. Read more about filters in the usage docs for [Postgres Changes](https://supabase.com/docs/guides/realtime/postgres-changes?queryGroups=language&language=js#filtering-for-specific-changes)
- `access_token`: Optional access token for authentication, if not provided, the server will use the API key.

Example on protocol version `2.0.0`:

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

[  "3",  "5",  "realtime:chat-room",  "phx_join",  {    "config": {      "broadcast": {        "ack": false,        "self": true,        "replay": {          "since": 1763407103911,          "limit": 10        }      },      "presence": {        "key": "user_id-827",        "enabled": true      },      "postgres_changes": [],      "private": true    }  }]
```

#### phx\_leave [\#](https://supabase.com/docs/guides/realtime/protocol\#phxleave)

This message is sent by the client to leave a channel. It can be used to clean up resources or stop listening for events on that channel. Payload should be empty object.

Example on protocol version `2.0.0`:

```
1

["1", "3", "realtime:avatar-stack-demo", "phx_leave", {}]
```

#### heartbeat [\#](https://supabase.com/docs/guides/realtime/protocol\#heartbeat)

The heartbeat message should be sent at least every 25 seconds to avoid a connection timeout. Payload should be an empty object.

For heartbeat, the topic `phoenix` is used as this special message is not connected to a specific channel.

Example on protocol version `2.0.0`:

```
1

[null, "26", "phoenix", "heartbeat", {}]
```

#### access\_token [\#](https://supabase.com/docs/guides/realtime/protocol\#accesstoken)

Used to setup a new token to be used by Realtime for authentication and to refresh the token to prevent a private channel from closing when the token expires.

```
1
2
3

{   "access_token": string}
```

- `access_token`: The new access token to be used for authentication. Either to change it or to refresh it.

Example on protocol version `2.0.0`:

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

[  "10",  "1",  "realtime:chat-room",  "access_token",  {    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"  }]
```

#### broadcast (text frame) [\#](https://supabase.com/docs/guides/realtime/protocol\#broadcast-text-frame)

Used to send a broadcast event to all clients in a channel.

The `payload` field contains the event name and the data to broadcast.

```
1
2
3
4
5

{   "event": string,   "payload": json,   "type": "broadcast"}
```

- `event`: The name of the user event to broadcast.
- `payload`: The user data associated with the event, which can be any JSON-serializable data structure.
- `type`: The type of message, which must always be `broadcast`.

Example on protocol version `2.0.0`:

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

[  "10",  "1",  "realtime:chat-room",  "broadcast",  {    "event": "user-event",    "type": "broadcast",    "payload": {      "content": "Hello, World!",      "createdAt": "2025-11-17T21:14:14Z",      "id": "9b823349-71c0-465b-9a83-a63aa2a9ae6d",      "username": "VCSHLD556nQD-B-vUTJJ3"    }  }]
```

#### broadcast (binary frame) [\#](https://supabase.com/docs/guides/realtime/protocol\#broadcast-binary-frame)

See the [User Broadcast Push](https://supabase.com/docs/guides/realtime/protocol#user-broadcast-push) section for the binary frame structure.

This message is a streamlined version of the text frame broadcast event that also supports non-JSON payloads.
Below is the same example from the previous section, showing the binary frame structure with hexadecimal values for the header and plain text for the remaining fields:

- Join Ref: `10`
- Ref: `1`
- Topic: `realtime:chat-room`
- Payload encoding being JSON
- User Event: `user-event`
- Metadata is empty
- User Payload

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

0x03                      // Type0x02                      // Join Ref Size0x01                      // Ref Size0x12                      // Topic Size0x0A                      // User Event Size0x00                      // Metadata Size0x01                      // Payload Encoding (1 = JSON)10                        // Actual Join Ref1                         // Actual Refrealtime:chat-room        // Topicuser-event                // User Event{                         // User Event Payload  "content": "Hello, World!",  "createdAt": "2025-11-17T21:14:14Z",  "id": "9b823349-71c0-465b-9a83-a63aa2a9ae6d",  "username": "VCSHLD556nQD-B-vUTJJ3"}
```

The payload encoding is just a hint for the client to know if the payload should be treated as JSON or not.

#### presence [\#](https://supabase.com/docs/guides/realtime/protocol\#presence)

Used to send presence metadata after joining a channel. The payload contains the presence information to be tracked by the server.
This metadata is then sent back to all clients in the channel via `presence_state` and `presence_diff` events.

```
1
2
3
4
5

{   "type": "presence",   "event": "track",   "payload": json}
```

Example on protocol version `2.0.0`:

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

[  "1",  "5",  "realtime:presence-room",  "presence",  {    "type": "presence",    "event": "track",    "payload": {      "name": "Alice",      "color": "hsl(29, 100%, 70%)"    }  }]
```

### Server sent events [\#](https://supabase.com/docs/guides/realtime/protocol\#server-sent-events)

| Event Type | Description | Requires Ref | Requires Join Ref |
| --- | --- | --- | --- |
| `phx_close` | Message from server to signal channel closed | ✅ | ✅ |
| `phx_error` | Error message sent by the server when an error occurs | ✅ | ✅ |
| `phx_reply` | Response to a `phx_join` or other requests | ✅ | ✅\* |
| `system` | System messages to inform about the status of the Postgres subscription | ⛔ | ⛔ |
| `broadcast` | Broadcast message sent to all clients in a channel | ⛔ | ⛔ |
| `presence_state` | Presence state sent by the server on join | ⛔ | ⛔ |
| `presence_diff` | Presence state diff update sent after a change in presence state | ⛔ | ⛔ |
| `postgres_changes` | Postgres CDC message containing changes to the database | ⛔ | ⛔ |

#### phx\_close [\#](https://supabase.com/docs/guides/realtime/protocol\#phxclose)

This message is sent by the server to signal that the channel has been closed. Payload will be empty object.

Example on protocol version `2.0.0`:

```
1

["3", "3", "realtime:avatar-stack-demo", "phx_close", {}]
```

#### phx\_error [\#](https://supabase.com/docs/guides/realtime/protocol\#phxerror)

This message is sent by the server when an unexpected error occurs in the channel. Payload will be an empty object

```
1

["3", "3", "realtime:avatar-stack-demo", "phx_error", {}]
```

#### phx\_reply [\#](https://supabase.com/docs/guides/realtime/protocol\#phxreply)

The server sends these messages in response to client requests that require acknowledgment.

```
1
2
3
4

{   "status": string,   "response": any,}
```

- `status`: The status of the response, can be `ok` or `error`.
- `response`: The response data, which can vary based on the event that was replied to

`phx_join` has a specific response structure outlined below.

Contains the status of the join request and any additional information requested in the `phx_join` payload.

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

{   "postgres_changes": [      {         "id": number,         "event": string,         "schema": string,         "table": string      }   ]}
```

- `postgres_changes`: Array of Postgres changes that the client is subscribed to, each object contains:
  - `id`: Unique identifier for the Postgres changes subscription
  - `event`: The type of event the client is subscribed to, such as `INSERT`, `UPDATE`, `DELETE`, or `*`
  - `schema`: The schema of the table the client is subscribed to
  - `table`: The table the client is subscribed to

Example on protocol version `2.0.0`:

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

[  "1",  "1",  "realtime:chat-room",  "phx_reply",  {    "status": "ok",    "response": {      "postgres_changes": [        {          "id": 106243155,          "event": "*",          "schema": "public",          "table": "test"        }      ]    }  }]
```

#### system [\#](https://supabase.com/docs/guides/realtime/protocol\#system)

The server sends system messages to inform clients about the status of their Realtime channel subscriptions.

```
1
2
3
4
5
6

{   "message": string,   "status": string,   "extension": string,   "channel": string}
```

- `message`: A human-readable message describing the status of the subscription.
- `status`: The status of the subscription, can be `ok`, `error`, or `timeout`.
- `extension`: The extension that sent the message.
- `channel`: The channel to which the message belongs, such as `realtime:room1`.

Example on protocol version `2.0.0`:

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

[  "13",  null,  "realtime:chat-room",  "system",  {    "message": "Subscribed to PostgreSQL",    "status": "ok",    "extension": "postgres_changes",    "channel": "main"  }]
```

#### broadcast (text frame) [\#](https://supabase.com/docs/guides/realtime/protocol\#broadcast-text-frame)

This is the structure of broadcast events received by all clients subscribed to a channel. The `payload` field contains the event name and data that was broadcasted.

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

{  "event": string,  "meta" : {    "id" : uuid,    "replayed" : boolean  },  "payload": json,  "type": "broadcast"}
```

- `event`: The name of the user event to broadcast.
- `meta`: Metadata about the broadcast message. Not always present.
  - `id`: A unique identifier for the broadcast message in UUID format.
  - `replayed`: A boolean indicating whether the message is a replayed message. Not always present
- `payload`: The user data associated with the event, which can be any JSON-serializable data structure.
- `type`: The type of message, which must always be `broadcast` for broadcast messages.

Example on protocol version `2.0.0`:

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

[  null,  null,  "realtime:chat-room",  "broadcast",  {    "event": "message",    "type": "broadcast",    "meta": {      "id": "006554ce-d22d-469c-877a-88bef47214a3"    },    "payload": {      "id": "513edcc1-4cbc-4274-aa26-c195f7e8c090",      "content": "oi",      "username": "hpK9jN2iY-I2HioHWr5ml",      "createdAt": "2025-11-18T22:44:29Z"    }  }]
```

#### broadcast (binary frame) [\#](https://supabase.com/docs/guides/realtime/protocol\#broadcast-binary-frame)

See the [User Broadcast](https://supabase.com/docs/guides/realtime/protocol#user-broadcast) section for the binary frame structure.

This message is a streamlined version of the text frame broadcast event that also supports non-JSON payloads.
Below is the same example from the previous section, showing the binary frame structure with hexadecimal values for the header and plain text for the remaining fields:

- Topic: `realtime:chat-room`
- Payload encoding being JSON
- Metadata: `{"id":"006554ce-d22d-469c-877a-88bef47214a3"}`
- User Event: `message`
- User Payload

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

0x04                                          // Type0x12                                          // Topic Size0x07                                          // User Event Size0x2D                                          // Metadata Size0x01                                          // Payload Encoding (1 = JSON)realtime:chat-room                            // Topicmessage                                       // User Event{"id":"006554ce-d22d-469c-877a-88bef47214a3"} // Metadata{                                             // User Event Payload  "id": "513edcc1-4cbc-4274-aa26-c195f7e8c090",  "content": "oi",  "username": "hpK9jN2iY-I2HioHWr5ml",  "createdAt": "2025-11-18T22:44:29Z"}
```

The metadata field is JSON encoded. The payload encoding is just a hint for the client to know if the payload should be treated as JSON or not.

#### postgres\_changes [\#](https://supabase.com/docs/guides/realtime/protocol\#postgreschanges)

The server sends this message when a database change occurs in a subscribed schema and table. The payload contains the details of the change, including the schema, table, event type, and the new and old records.

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

{   "ids": [      number   ],   "data": {      "schema": string,      "table": string,      "commit_timestamp": string,      "type": "*" | "INSERT" | "UPDATE" | "DELETE",      "columns": [        {          "name": string,          "type": string        }      ]      "record": {         [key: string]: boolean | number | string | null      },      "old_record": {         [key: string]: boolean | number | string | null      },      "errors": string | null   }}
```

- `ids`: An array of unique identifiers matching the subscription when joining the channel.
- `data`: An object containing the details of the change:
  - `schema`: The schema of the table where the change occurred.
  - `table`: The table where the change occurred.
  - `commit_timestamp`: The timestamp when the change was committed to the database.
  - `type`: The type of event that occurred, such as `INSERT`, `UPDATE`, `DELETE`, or `*` for all events.
  - `columns`: An array of objects representing the columns of the table, each containing:
    - `name`: The name of the column.
    - `type`: The data type of the column.
  - `record`: An object representing the new values after the change, with keys as column names and values as their corresponding values.
  - `old_record`: An object representing the old values before the change, with keys as column names and values as their corresponding values.
  - `errors`: Any errors that occurred during the change, if applicable.

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

[  null,  null,  "realtime:chat-room",  "postgres_changes",  {    "ids": [104868189],    "data": {      "schema": "public",      "table": "test",      "commit_timestamp": "2025-11-19T00:22:40.877Z",      "type": "UPDATE",      "columns": [        {          "name": "id",          "type": "int8"        },        {          "name": "created_at",          "type": "timestamptz"        },        {          "name": "text",          "type": "text"        }      ],      "record": {        "id": 46,        "text": "content",        "created_at": "2025-11-03T09:32:55+00:00"      },      "old_record": {        "id": 46      },      "errors": null    }  }]
```

#### presence\_state [\#](https://supabase.com/docs/guides/realtime/protocol\#presencestate)

After joining, the server sends a `presence_state` message to a client with presence information. The payload field contains keys, where each key represents a client and its value is a JSON object containing information about that client. The key is defined by the client when joining the channel. If not specified, a UUID is automatically generated.

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

{   [key: string]: {      metas: [         {            phx_ref: string,            [key: string]: any         }      ]   }}
```

- `key`: The client key.
- `metas`: An array of metadata objects for the client, each containing:
  - `phx_ref`: A unique reference ID for the metadata.
  - Any other custom fields defined by the client, such as `name`.

Example on protocol version `2.0.0`:

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

[  "4",  null,  "realtime:cursor-room",  "presence_state",  {    "2wCojG1xWgxG2ZxwocvSX": {      "metas": [        {          "phx_ref": "GHlA1fShRjMmZhnL",          "color": "hsl(204, 100%, 70%)",          "key": "2wCojG1xWgxG2ZxwocvSX"        }      ]    },    "6eorYR7andHiq-7tCkmxQ": {      "metas": [        {          "phx_ref": "GHk99Q_ez6-GzaeG",          "color": "hsl(7, 100%, 70%)",          "key": "6eorYR7andHiq-7tCkmxQ"        }      ]    },    "FOeQUamq3OLOWAAZK8iH3": {      "metas": [        {          "phx_ref": "GHk-wA8Z61GGzeoG",          "color": "hsl(212, 100%, 70%)",          "key": "FOeQUamq3OLOWAAZK8iH3"        }      ]    }  }]
```

#### presence\_diff [\#](https://supabase.com/docs/guides/realtime/protocol\#presencediff)

After a change to the presence state, such as a client joining or leaving, the server sends a presence\_diff message to update the client's view of the presence state. The payload field contains two keys, `joins` and `leaves`, which represent clients that have joined and left, respectively. Each key is either specified by the client when joining the channel or automatically generated as a UUID.

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

{  "joins": {    [key: string]: {      metas: [        {          phx_ref: string,          [key: string]: any        }      ]    }  },  "leaves": {    [key: string]: {      metas: [        {          phx_ref: string,          [key: string]: any        }      ]    }  }}
```

- `joins`: An object containing metadata for clients that have joined the channel, with keys as UUIDs and values as metadata objects.
- `leaves`: An object containing metadata for clients that have left the channel, with keys as UUIDs and values as metadata objects.

Example on protocol version `2.0.0`:

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

[  null,  null,  "realtime:cursor-room",  "presence_diff",  {    "joins": {      "XnAJXkZVEJuBYZcp9GCG5": {        "metas": [          {            "phx_ref": "GHlE8VLvxuKGzQJN",            "color": "hsl(60, 100%, 70%)",            "user": "123"          }        ]      }    },    "leaves": {      "ouCsaiOdKZ9yauoy4x5pv": {        "metas": [          {            "phx_ref": "GHlE8HyhSPAmZgdB",            "color": "hsl(72, 100%, 70%)",            "user": "456"          }        ]      }    }  }]
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/protocol.mdx)

### Is this helpful?

NoYes

### On this page

[WebSocket connection setup](https://supabase.com/docs/guides/realtime/protocol#websocket-connection-setup) [Protocol messages](https://supabase.com/docs/guides/realtime/protocol#protocol-messages) [1.0.0](https://supabase.com/docs/guides/realtime/protocol#100) [2.0.0](https://supabase.com/docs/guides/realtime/protocol#200) [Text frames](https://supabase.com/docs/guides/realtime/protocol#text-frames) [Binary frames](https://supabase.com/docs/guides/realtime/protocol#binary-frames) [Event types](https://supabase.com/docs/guides/realtime/protocol#event-types) [Client sent events](https://supabase.com/docs/guides/realtime/protocol#client-sent-events) [Server sent events](https://supabase.com/docs/guides/realtime/protocol#server-sent-events)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)