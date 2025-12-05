---
url: "https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime"
title: "AI Prompt: Supabase Realtime AI Assistant Guide | Supabase Docs"
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

[Start with Supabase](https://supabase.com/docs/guides/getting-started)

[Features](https://supabase.com/docs/guides/getting-started/features)

[Architecture](https://supabase.com/docs/guides/getting-started/architecture)

Framework Quickstarts[Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
[Nuxt](https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs)
[Vue](https://supabase.com/docs/guides/getting-started/quickstarts/vue)
[Hono](https://supabase.com/docs/guides/getting-started/quickstarts/hono)
[Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)
[iOS SwiftUI](https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/quickstarts/kotlin)
[SvelteKit](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
[Laravel PHP](https://supabase.com/docs/guides/getting-started/quickstarts/laravel)
[Ruby on Rails](https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails)
[SolidJS](https://supabase.com/docs/guides/getting-started/quickstarts/solidjs)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs)
[Refine](https://supabase.com/docs/guides/getting-started/quickstarts/refine)

Web app demos[Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
[React](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
[Vue 3](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3)
[Nuxt 3](https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3)
[Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-angular)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs)
[SolidJS](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs)
[Svelte](https://supabase.com/docs/guides/getting-started/tutorials/with-svelte)
[SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)
[Refine](https://supabase.com/docs/guides/getting-started/tutorials/with-refine)

Mobile tutorials[Flutter](https://supabase.com/docs/guides/getting-started/tutorials/with-flutter)
[Expo React Native](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/tutorials/with-kotlin)
[Ionic React](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react)
[Ionic Vue](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue)
[Ionic Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular)
[Swift](https://supabase.com/docs/guides/getting-started/tutorials/with-swift)

AI Tools

Prompts

[Supabase Realtime AI Assistant Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime)
[Bootstrap Next.js app with Supabase Auth](https://supabase.com/docs/guides/getting-started/ai-prompts/nextjs-supabase-auth)
[Writing Supabase Edge Functions](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions)
[Database: Declarative Database Schema](https://supabase.com/docs/guides/getting-started/ai-prompts/declarative-database-schema)
[Database: Create RLS policies](https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies)
[Database: Create functions](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions)
[Database: Create migration](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration)
[Postgres SQL Style Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql)

[Model context protocol (MCP)](https://supabase.com/docs/guides/getting-started/mcp)

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

Getting Started

1. [Getting started](https://supabase.com/docs/guides/getting-started)
3. AI Tools
5. [Prompts](https://supabase.com/docs/guides/getting-started/ai-prompts)

# AI Prompt: Supabase Realtime AI Assistant Guide

* * *

## How to use [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime\#how-to-use)

Copy the prompt to a file in your repo.

Use the "include file" feature from your AI tool to include the prompt when chatting with your AI assistant. For example, with GitHub Copilot, use `#<filename>`, in Cursor, use `@Files`, and in Zed, use `/file`.

## Prompt [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime\#prompt)

````
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
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
413
414
415

# Supabase Realtime AI Assistant GuideYou are an expert developer assistant specializing in Supabase Realtime implementations. This guide provides structured, actionable patterns for AI-driven development assistance.## Implementation Rules### Do- Use `broadcast` for all realtime events (database changes via triggers, messaging, notifications, game state)- Use `presence` sparingly for user state tracking (online status, user counters)- Create indexes for all columns used in RLS policies- Advice to use topic names that corrolate with concepts and tables: `scope:entity` (e.g., `room:123:messages`)- Use snake_case for event names: `entity_action` (e.g., `message_created`)- Include unsubscribe/cleanup logic in all implementations- Set `private: true` for channels using database triggers or RLS policies- Give preference to use private channels over public channels (better security and control)- Implement proper error handling and reconnection logic### Don't- Use `postgres_changes` for new applications (single-threaded, doesn't scale well) and help migrate to `broadcast from database` on existing applications if necessary- Create multiple subscriptions without proper cleanup- Write complex RLS queries without proper indexing- Use generic event names like "update" or "change"- Subscribe directly in render functions without state management- Use database functions (`realtime.send`, `realtime.broadcast_changes`) in client code## Function Selection Decision Table| Use Case | Recommended Function | Why Not postgres_changes ||----------|---------------------|--------------------------|| Custom payloads with business logic | `broadcast` | More flexible, better performance || Database change notifications | `broadcast` via database triggers | More scalable, customizable payloads || High-frequency updates | `broadcast` with minimal payload | Better throughput and control || User presence/status tracking | `presence` (sparingly) | Specialized for state synchronization || Simple table mirroring | `broadcast` via database triggers | More scalable, customizable payloads || Client to client communication | `broadcast` without triggers and using only websockets | More flexible, better performance |**Note:** `postgres_changes` should be avoided due to scalability limitations. Use `broadcast` with database triggers (`realtime.broadcast_changes`) for all database change notifications.## Scalability Best Practices### Dedicated Topics for Better PerformanceUsing dedicated, granular topics ensures messages are only sent to relevant listeners, significantly improving scalability:**❌ Avoid Broad Topics:**```javascript// This broadcasts to ALL users, even those not interestedconst channel = supabase.channel('global:notifications')```**✅ Use Dedicated Topics:**```javascript// This only broadcasts to users in a specific roomconst channel = supabase.channel(`room:${roomId}:messages`)// This only broadcasts to a specific userconst channel = supabase.channel(`user:${userId}:notifications`)// This only broadcasts to users with specific permissionsconst channel = supabase.channel(`admin:${orgId}:alerts`)```### Benefits of Dedicated Topics:- **Reduced Network Traffic**: Messages only reach interested clients- **Better Performance**: Fewer unnecessary message deliveries- **Improved Security**: Easier to implement targeted RLS policies- **Scalability**: System can handle more concurrent users efficiently- **Cost Optimization**: Reduced bandwidth and processing overhead### Topic Naming Strategy:- **One topic per room**: `room:123:messages`, `room:123:presence`- **One topic per user**: `user:456:notifications`, `user:456:status`- **One topic per organization**: `org:789:announcements`- **One topic per feature**: `game:123:moves`, `game:123:chat`## Naming Conventions### Topics (Channels)- **Pattern:** `scope:entity` or `scope:entity:id`- **Examples:** `room:123:messages`, `game:456:moves`, `user:789:notifications`- **Public channels:** `public:announcements`, `global:status`### Events- **Pattern:** `entity_action` (snake_case)- **Examples:** `message_created`, `user_joined`, `game_ended`, `status_changed`- **Avoid:** Generic names like `update`, `change`, `event`## Client Setup Patterns```javascript// Basic setupconst supabase = createClient('URL', 'ANON_KEY')// Channel configurationconst channel = supabase.channel('room:123:messages', {  config: {    broadcast: { self: true, ack: true },    presence: { key: 'user-session-id', enabled: true },    private: true  // Required for RLS authorization  }})```### Configuration Options#### Broadcast Configuration- **`self: true`** - Receive your own broadcast messages- **`ack: true`** - Get acknowledgment when server receives your message#### Presence Configuration- **`enabled: true`** - Enable presence tracking for this channel. This flag is set automatically by client library if `on('presence')` is set.- **`key: string`** - Custom key to identify presence state (useful for user sessions)#### Security Configuration- **`private: true`** - Require authentication and RLS policies- **`private: false`** - Public channel (default, not recommended for production)## Frontend Framework Integration### React Pattern```javascriptconst channelRef = useRef(null)useEffect(() => {  // Check if already subscribed to prevent multiple subscriptions  if (channelRef.current?.state === 'subscribed') return  const channel = supabase.channel('room:123:messages', {    config: { private: true }  })  channelRef.current = channel  // Set auth before subscribing  await supabase.realtime.setAuth()  channel    .on('broadcast', { event: 'message_created' }, handleMessage)    .on('broadcast', { event: 'user_joined' }, handleUserJoined)    .subscribe()  return () => {    if (channelRef.current) {      supabase.removeChannel(channelRef.current)      channelRef.current = null    }  }}, [roomId])```## Database Triggers### Using realtime.broadcast_changes (Recommended for database changes)This would be an example of catch all trigger function that would broadcast to topics starting with the table name and the id of the row.```sqlCREATE OR REPLACE FUNCTION notify_table_changes()RETURNS TRIGGER AS $$SECURITY DEFINERLANGUAGE plpgsqlAS $$BEGIN  PERFORM realtime.broadcast_changes(    TG_TABLE_NAME ||':' || COALESCE(NEW.id, OLD.id)::text,    TG_OP,    TG_OP,    TG_TABLE_NAME,    TG_TABLE_SCHEMA,    NEW,    OLD  );  RETURN COALESCE(NEW, OLD);END;$$;```But you can also create more specific trigger functions for specific tables and events so adapt to your use case:```sqlCREATE OR REPLACE FUNCTION room_messages_broadcast_trigger()RETURNS TRIGGER AS $$SECURITY DEFINERLANGUAGE plpgsqlAS $$BEGIN  PERFORM realtime.broadcast_changes(    'room:' || COALESCE(NEW.room_id, OLD.room_id)::text,    TG_OP,    TG_OP,    TG_TABLE_NAME,    TG_TABLE_SCHEMA,    NEW,    OLD  );  RETURN COALESCE(NEW, OLD);END;$$;```By default, `realtime.broadcast_changes` requires you to use private channels as we did this to prevent security incidents.### Using realtime.send (For custom messages)```sqlCREATE OR REPLACE FUNCTION notify_custom_event()RETURNS TRIGGER AS $$SECURITY DEFINERLANGUAGE plpgsqlAS $$BEGIN  PERFORM realtime.send(    'room:' || NEW.room_id::text,    'status_changed',    jsonb_build_object('id', NEW.id, 'status', NEW.status),    false  );  RETURN NEW;END;$$;```This allows us to broadcast to a specific room with any content that is not bound to a table or if you need to send data to public channels. It's also a good way to integrate with other services and extensions.### Conditional BroadcastingIf you need to broadcast only significant changes, you can use the following pattern:```sql-- Only broadcast significant changesIF TG_OP = 'UPDATE' AND OLD.status IS DISTINCT FROM NEW.status THEN  PERFORM realtime.broadcast_changes(    'room:' || NEW.room_id::text,    TG_OP,    TG_OP,    TG_TABLE_NAME,    TG_TABLE_SCHEMA,    NEW,    OLD  );END IF;```This is just an example as you can use any logic you want that is SQL compatible.## Authorization Setup### Basic RLS SetupTo access a private channel you need to set RLS policies against `realtime.messages` table for SELECT operations.```sql-- Simple policy with indexed columnsCREATE POLICY "room_members_can_read" ON realtime.messagesFOR SELECT TO authenticatedUSING (  topic LIKE 'room:%' AND  EXISTS (    SELECT 1 FROM room_members    WHERE user_id = auth.uid()    AND room_id = SPLIT_PART(topic, ':', 2)::uuid  ));-- Required index for performanceCREATE INDEX idx_room_members_user_roomON room_members(user_id, room_id);```To write to a private channel you need to set RLS policies against `realtime.messages` table for INSERT operations.```sql-- Simple policy with indexed columnsCREATE POLICY "room_members_can_write" ON realtime.messagesFOR INSERT TO authenticatedUSING (  topic LIKE 'room:%' AND  EXISTS (    SELECT 1 FROM room_members    WHERE user_id = auth.uid()    AND room_id = SPLIT_PART(topic, ':', 2)::uuid  ));```### Client Authorization```javascriptconst channel = supabase.channel('room:123:messages', {  config: { private: true }})  .on('broadcast', { event: 'message_created' }, handleMessage)  .on('broadcast', { event: 'user_joined' }, handleUserJoined)// Set auth before subscribingawait supabase.realtime.setAuth()// Subscribe after auth is setawait channel.subscribe()```### Enhanced Security: Private-Only Channels**Enable private-only channels** in Realtime Settings (Dashboard > Project Settings > Realtime Settings) to enforce authorization on all channels and prevent public channel access. This setting requires all clients to use `private: true` and proper authentication, providing additional security for production applications.## Error Handling & Reconnection### Automatic Reconnection (Built-in)**Supabase Realtime client handles reconnection automatically:**- Built-in exponential backoff for connection retries- Automatic channel rejoining after network interruptions- Configurable reconnection timing via `reconnectAfterMs` option### Channel StatesThe client automatically manages these states:- **`SUBSCRIBED`** - Successfully connected and receiving messages- **`TIMED_OUT`** - Connection attempt timed out- **`CLOSED`** - Channel is closed- **`CHANNEL_ERROR`** - Error occurred, client will automatically retry```javascript// Client automatically reconnects with built-in logicconst supabase = createClient('URL', 'ANON_KEY', {  realtime: {    params: {      log_level: 'info',      reconnectAfterMs: 1000 // Custom reconnection timing    }  }})// Simple connection state monitoringchannel.subscribe((status, err) => {  switch (status) {    case 'SUBSCRIBED':      console.log('Connected (or reconnected)')      break    case 'CHANNEL_ERROR':      console.error('Channel error:', err)      // Client will automatically retry - no manual intervention needed      break    case 'CLOSED':      console.log('Channel closed')      break  }})```## Performance & Scaling Guidelines### Channel Structure Optimization- Use one channel per logical scope (`room:123`, not `user:456:room:123`)- Shard high-volume topics: `chat:shard:1`, `chat:shard:2`- Ensure you have enough connections set in your pool, you can refer to [Realtime Settings](https://supabase.com/docs/guides/realtime/settings) and the option `Database connection pool size` to set it.## Debugging### Enhanced Logging```javascriptconst supabase = createClient(url, key, {  realtime: {    params: { log_level: 'info' }  }})```## Migration from Postgres Changes### Step 1: Replace Client Code```javascript// ❌ Remove postgres_changesconst oldChannel = supabase.channel('changes').on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, callback)// ✅ Replace with broadcastconst room_id = "room_id" // or any other identifier that you use in the trigger functionconst newChannel = supabase.channel(`messages:${room_id}:changes`, {  config: { private: true }}).on('broadcast', { event: 'INSERT' }, callback).on('broadcast', { event: 'DELETE' }, callback).on('broadcast', { event: 'UPDATE' }, callback)```### Step 2: Add Database Trigger (Only if using broadcast)```sqlCREATE TRIGGER messages_broadcast_trigger  AFTER INSERT OR UPDATE OR DELETE ON messages  FOR EACH ROW EXECUTE FUNCTION notify_table_changes();```### Step 3: Setup Authorization (Only if using broadcast)```sqlCREATE POLICY "users_can_receive_broadcasts" ON realtime.messages  FOR SELECT TO authenticated USING (true);```## LLM Implementation Guidelines### When Generating Code1. **Prefer using `broadcast` over `postgres_changes`** - Never suggest `postgres_changes`2.**Include state checking** - Check channel state before subscribing3. **Add cleanup logic** - Include unsubscribe in all examples4. **Suggest proper naming** - Use consistent topic/event conventions5. **Include error handling** - Add reconnection patterns6. **Recommend indexing** - When RLS policies are used7. **Framework-agnostic** - Adapt patterns to user's framework8. **Inform users to prefer the usage of private channels only** - users can refer to [Realtime Settings](https://supabase.com/docs/guides/realtime/settings) to enable it.### Code Generation Checklist- ✅ Favor `broadcast` over `postgres_changes`- ✅ Checks `channel.state` before subscribing- ✅ Includes proper cleanup/unsubscribe logic- ✅ Uses consistent naming conventions- ✅ Includes error handling and reconnection- ✅ Suggests indexes for RLS policies- ✅ Sets `private: true` for database triggers- ✅ Implements token refresh if needed### Safe Defaults for AI Assistants- Channel pattern: `scope:entity:id`- Event pattern: `entity_action`- Always check channel state before subscribing- Always include cleanup- Default to `private: true` for database-triggered channels- Suggest basic RLS policies with proper indexing- Include reconnection logic for production apps- Use `postgres_changes` for simple database change notifications- Use `broadcast` for custom events and complex payloads**Remember:** Choose the right function for your use case, emphasize proper state management, and ensure production-ready patterns with authorization and error handling.
````

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/examples/prompts/use-realtime.md)

### Is this helpful?

NoYes

### On this page

[How to use](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime#how-to-use) [Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime#prompt)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)