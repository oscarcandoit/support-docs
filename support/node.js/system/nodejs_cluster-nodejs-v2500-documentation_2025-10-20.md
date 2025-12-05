---
source: https://nodejs.org/docs/latest/api/cluster.html
scraped_at: 2025-10-20T14:08:06.925Z
title: Cluster | Node.js v25.0.0 Documentation
description: 
category: system
module: cluster
---

[Skip to content](https://nodejs.org/docs/latest/api/cluster.html#apicontent)

[Node.js](https://nodejs.org/ "Go back to the home page")

- [About this documentation](https://nodejs.org/docs/latest/api/documentation.html)
- [Usage and example](https://nodejs.org/docs/latest/api/synopsis.html)

* * *

- [Assertion testing](https://nodejs.org/docs/latest/api/assert.html)
- [Asynchronous context tracking](https://nodejs.org/docs/latest/api/async_context.html)
- [Async hooks](https://nodejs.org/docs/latest/api/async_hooks.html)
- [Buffer](https://nodejs.org/docs/latest/api/buffer.html)
- [C++ addons](https://nodejs.org/docs/latest/api/addons.html)
- [C/C++ addons with Node-API](https://nodejs.org/docs/latest/api/n-api.html)
- [C++ embedder API](https://nodejs.org/docs/latest/api/embedding.html)
- [Child processes](https://nodejs.org/docs/latest/api/child_process.html)
- [Cluster](https://nodejs.org/docs/latest/api/cluster.html)
- [Command-line options](https://nodejs.org/docs/latest/api/cli.html)
- [Console](https://nodejs.org/docs/latest/api/console.html)
- [Crypto](https://nodejs.org/docs/latest/api/crypto.html)
- [Debugger](https://nodejs.org/docs/latest/api/debugger.html)
- [Deprecated APIs](https://nodejs.org/docs/latest/api/deprecations.html)
- [Diagnostics Channel](https://nodejs.org/docs/latest/api/diagnostics_channel.html)
- [DNS](https://nodejs.org/docs/latest/api/dns.html)
- [Domain](https://nodejs.org/docs/latest/api/domain.html)
- [Environment Variables](https://nodejs.org/docs/latest/api/environment_variables.html)
- [Errors](https://nodejs.org/docs/latest/api/errors.html)
- [Events](https://nodejs.org/docs/latest/api/events.html)
- [File system](https://nodejs.org/docs/latest/api/fs.html)
- [Globals](https://nodejs.org/docs/latest/api/globals.html)
- [HTTP](https://nodejs.org/docs/latest/api/http.html)
- [HTTP/2](https://nodejs.org/docs/latest/api/http2.html)
- [HTTPS](https://nodejs.org/docs/latest/api/https.html)
- [Inspector](https://nodejs.org/docs/latest/api/inspector.html)
- [Internationalization](https://nodejs.org/docs/latest/api/intl.html)
- [Modules: CommonJS modules](https://nodejs.org/docs/latest/api/modules.html)
- [Modules: ECMAScript modules](https://nodejs.org/docs/latest/api/esm.html)
- [Modules: `node:module` API](https://nodejs.org/docs/latest/api/module.html)
- [Modules: Packages](https://nodejs.org/docs/latest/api/packages.html)
- [Modules: TypeScript](https://nodejs.org/docs/latest/api/typescript.html)
- [Net](https://nodejs.org/docs/latest/api/net.html)
- [OS](https://nodejs.org/docs/latest/api/os.html)
- [Path](https://nodejs.org/docs/latest/api/path.html)
- [Performance hooks](https://nodejs.org/docs/latest/api/perf_hooks.html)
- [Permissions](https://nodejs.org/docs/latest/api/permissions.html)
- [Process](https://nodejs.org/docs/latest/api/process.html)
- [Punycode](https://nodejs.org/docs/latest/api/punycode.html)
- [Query strings](https://nodejs.org/docs/latest/api/querystring.html)
- [Readline](https://nodejs.org/docs/latest/api/readline.html)
- [REPL](https://nodejs.org/docs/latest/api/repl.html)
- [Report](https://nodejs.org/docs/latest/api/report.html)
- [Single executable applications](https://nodejs.org/docs/latest/api/single-executable-applications.html)
- [SQLite](https://nodejs.org/docs/latest/api/sqlite.html)
- [Stream](https://nodejs.org/docs/latest/api/stream.html)
- [String decoder](https://nodejs.org/docs/latest/api/string_decoder.html)
- [Test runner](https://nodejs.org/docs/latest/api/test.html)
- [Timers](https://nodejs.org/docs/latest/api/timers.html)
- [TLS/SSL](https://nodejs.org/docs/latest/api/tls.html)
- [Trace events](https://nodejs.org/docs/latest/api/tracing.html)
- [TTY](https://nodejs.org/docs/latest/api/tty.html)
- [UDP/datagram](https://nodejs.org/docs/latest/api/dgram.html)
- [URL](https://nodejs.org/docs/latest/api/url.html)
- [Utilities](https://nodejs.org/docs/latest/api/util.html)
- [V8](https://nodejs.org/docs/latest/api/v8.html)
- [VM](https://nodejs.org/docs/latest/api/vm.html)
- [WASI](https://nodejs.org/docs/latest/api/wasi.html)
- [Web Crypto API](https://nodejs.org/docs/latest/api/webcrypto.html)
- [Web Streams API](https://nodejs.org/docs/latest/api/webstreams.html)
- [Worker threads](https://nodejs.org/docs/latest/api/worker_threads.html)
- [Zlib](https://nodejs.org/docs/latest/api/zlib.html)

* * *

- [Code repository and issue tracker](https://github.com/nodejs/node)

# Node.js v25.0.0 documentation

- Node.js v25.0.0
- [Table of contents](https://nodejs.org/docs/latest/api/cluster.html#toc-picker)




- [Cluster](https://nodejs.org/docs/latest/api/cluster.html#cluster)
  - [How it works](https://nodejs.org/docs/latest/api/cluster.html#how-it-works)
  - [Class: `Worker`](https://nodejs.org/docs/latest/api/cluster.html#class-worker)
    - [Event: `'disconnect'`](https://nodejs.org/docs/latest/api/cluster.html#event-disconnect)
    - [Event: `'error'`](https://nodejs.org/docs/latest/api/cluster.html#event-error)
    - [Event: `'exit'`](https://nodejs.org/docs/latest/api/cluster.html#event-exit)
    - [Event: `'listening'`](https://nodejs.org/docs/latest/api/cluster.html#event-listening)
    - [Event: `'message'`](https://nodejs.org/docs/latest/api/cluster.html#event-message)
    - [Event: `'online'`](https://nodejs.org/docs/latest/api/cluster.html#event-online)
    - [`worker.disconnect()`](https://nodejs.org/docs/latest/api/cluster.html#workerdisconnect)
    - [`worker.exitedAfterDisconnect`](https://nodejs.org/docs/latest/api/cluster.html#workerexitedafterdisconnect)
    - [`worker.id`](https://nodejs.org/docs/latest/api/cluster.html#workerid)
    - [`worker.isConnected()`](https://nodejs.org/docs/latest/api/cluster.html#workerisconnected)
    - [`worker.isDead()`](https://nodejs.org/docs/latest/api/cluster.html#workerisdead)
    - [`worker.kill([signal])`](https://nodejs.org/docs/latest/api/cluster.html#workerkillsignal)
    - [`worker.process`](https://nodejs.org/docs/latest/api/cluster.html#workerprocess)
    - [`worker.send(message[, sendHandle[, options]][, callback])`](https://nodejs.org/docs/latest/api/cluster.html#workersendmessage-sendhandle-options-callback)
  - [Event: `'disconnect'`](https://nodejs.org/docs/latest/api/cluster.html#event-disconnect_1)
  - [Event: `'exit'`](https://nodejs.org/docs/latest/api/cluster.html#event-exit_1)
  - [Event: `'fork'`](https://nodejs.org/docs/latest/api/cluster.html#event-fork)
  - [Event: `'listening'`](https://nodejs.org/docs/latest/api/cluster.html#event-listening_1)
  - [Event: `'message'`](https://nodejs.org/docs/latest/api/cluster.html#event-message_1)
  - [Event: `'online'`](https://nodejs.org/docs/latest/api/cluster.html#event-online_1)
  - [Event: `'setup'`](https://nodejs.org/docs/latest/api/cluster.html#event-setup)
  - [`cluster.disconnect([callback])`](https://nodejs.org/docs/latest/api/cluster.html#clusterdisconnectcallback)
  - [`cluster.fork([env])`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv)
  - [`cluster.isMaster`](https://nodejs.org/docs/latest/api/cluster.html#clusterismaster)
  - [`cluster.isPrimary`](https://nodejs.org/docs/latest/api/cluster.html#clusterisprimary)
  - [`cluster.isWorker`](https://nodejs.org/docs/latest/api/cluster.html#clusterisworker)
  - [`cluster.schedulingPolicy`](https://nodejs.org/docs/latest/api/cluster.html#clusterschedulingpolicy)
  - [`cluster.settings`](https://nodejs.org/docs/latest/api/cluster.html#clustersettings)
  - [`cluster.setupMaster([settings])`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupmastersettings)
  - [`cluster.setupPrimary([settings])`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings)
  - [`cluster.worker`](https://nodejs.org/docs/latest/api/cluster.html#clusterworker)
  - [`cluster.workers`](https://nodejs.org/docs/latest/api/cluster.html#clusterworkers)

- [Index](https://nodejs.org/docs/latest/api/cluster.html#gtoc-picker)


- [About this documentation](https://nodejs.org/docs/latest/api/documentation.html)
- [Usage and example](https://nodejs.org/docs/latest/api/synopsis.html)
- [Index](https://nodejs.org/docs/latest/api/index.html)

* * *

- [Assertion testing](https://nodejs.org/docs/latest/api/assert.html)
- [Asynchronous context tracking](https://nodejs.org/docs/latest/api/async_context.html)
- [Async hooks](https://nodejs.org/docs/latest/api/async_hooks.html)
- [Buffer](https://nodejs.org/docs/latest/api/buffer.html)
- [C++ addons](https://nodejs.org/docs/latest/api/addons.html)
- [C/C++ addons with Node-API](https://nodejs.org/docs/latest/api/n-api.html)
- [C++ embedder API](https://nodejs.org/docs/latest/api/embedding.html)
- [Child processes](https://nodejs.org/docs/latest/api/child_process.html)
- [Cluster](https://nodejs.org/docs/latest/api/cluster.html)
- [Command-line options](https://nodejs.org/docs/latest/api/cli.html)
- [Console](https://nodejs.org/docs/latest/api/console.html)
- [Crypto](https://nodejs.org/docs/latest/api/crypto.html)
- [Debugger](https://nodejs.org/docs/latest/api/debugger.html)
- [Deprecated APIs](https://nodejs.org/docs/latest/api/deprecations.html)
- [Diagnostics Channel](https://nodejs.org/docs/latest/api/diagnostics_channel.html)
- [DNS](https://nodejs.org/docs/latest/api/dns.html)
- [Domain](https://nodejs.org/docs/latest/api/domain.html)
- [Environment Variables](https://nodejs.org/docs/latest/api/environment_variables.html)
- [Errors](https://nodejs.org/docs/latest/api/errors.html)
- [Events](https://nodejs.org/docs/latest/api/events.html)
- [File system](https://nodejs.org/docs/latest/api/fs.html)
- [Globals](https://nodejs.org/docs/latest/api/globals.html)
- [HTTP](https://nodejs.org/docs/latest/api/http.html)
- [HTTP/2](https://nodejs.org/docs/latest/api/http2.html)
- [HTTPS](https://nodejs.org/docs/latest/api/https.html)
- [Inspector](https://nodejs.org/docs/latest/api/inspector.html)
- [Internationalization](https://nodejs.org/docs/latest/api/intl.html)
- [Modules: CommonJS modules](https://nodejs.org/docs/latest/api/modules.html)
- [Modules: ECMAScript modules](https://nodejs.org/docs/latest/api/esm.html)
- [Modules: `node:module` API](https://nodejs.org/docs/latest/api/module.html)
- [Modules: Packages](https://nodejs.org/docs/latest/api/packages.html)
- [Modules: TypeScript](https://nodejs.org/docs/latest/api/typescript.html)
- [Net](https://nodejs.org/docs/latest/api/net.html)
- [OS](https://nodejs.org/docs/latest/api/os.html)
- [Path](https://nodejs.org/docs/latest/api/path.html)
- [Performance hooks](https://nodejs.org/docs/latest/api/perf_hooks.html)
- [Permissions](https://nodejs.org/docs/latest/api/permissions.html)
- [Process](https://nodejs.org/docs/latest/api/process.html)
- [Punycode](https://nodejs.org/docs/latest/api/punycode.html)
- [Query strings](https://nodejs.org/docs/latest/api/querystring.html)
- [Readline](https://nodejs.org/docs/latest/api/readline.html)
- [REPL](https://nodejs.org/docs/latest/api/repl.html)
- [Report](https://nodejs.org/docs/latest/api/report.html)
- [Single executable applications](https://nodejs.org/docs/latest/api/single-executable-applications.html)
- [SQLite](https://nodejs.org/docs/latest/api/sqlite.html)
- [Stream](https://nodejs.org/docs/latest/api/stream.html)
- [String decoder](https://nodejs.org/docs/latest/api/string_decoder.html)
- [Test runner](https://nodejs.org/docs/latest/api/test.html)
- [Timers](https://nodejs.org/docs/latest/api/timers.html)
- [TLS/SSL](https://nodejs.org/docs/latest/api/tls.html)
- [Trace events](https://nodejs.org/docs/latest/api/tracing.html)
- [TTY](https://nodejs.org/docs/latest/api/tty.html)
- [UDP/datagram](https://nodejs.org/docs/latest/api/dgram.html)
- [URL](https://nodejs.org/docs/latest/api/url.html)
- [Utilities](https://nodejs.org/docs/latest/api/util.html)
- [V8](https://nodejs.org/docs/latest/api/v8.html)
- [VM](https://nodejs.org/docs/latest/api/vm.html)
- [WASI](https://nodejs.org/docs/latest/api/wasi.html)
- [Web Crypto API](https://nodejs.org/docs/latest/api/webcrypto.html)
- [Web Streams API](https://nodejs.org/docs/latest/api/webstreams.html)
- [Worker threads](https://nodejs.org/docs/latest/api/worker_threads.html)
- [Zlib](https://nodejs.org/docs/latest/api/zlib.html)

* * *

- [Code repository and issue tracker](https://github.com/nodejs/node)

- [Other versions](https://nodejs.org/docs/latest/api/cluster.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/cluster.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/cluster.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/cluster.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/cluster.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/cluster.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/cluster.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/cluster.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/cluster.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/cluster.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/cluster.html)
11. [14.x](https://nodejs.org/docs/latest-v14.x/api/cluster.html)
12. [13.x](https://nodejs.org/docs/latest-v13.x/api/cluster.html)
13. [12.x](https://nodejs.org/docs/latest-v12.x/api/cluster.html)
14. [11.x](https://nodejs.org/docs/latest-v11.x/api/cluster.html)
15. [10.x](https://nodejs.org/docs/latest-v10.x/api/cluster.html)
16. [9.x](https://nodejs.org/docs/latest-v9.x/api/cluster.html)
17. [8.x](https://nodejs.org/docs/latest-v8.x/api/cluster.html)
18. [7.x](https://nodejs.org/docs/latest-v7.x/api/cluster.html)
19. [6.x](https://nodejs.org/docs/latest-v6.x/api/cluster.html)
20. [5.x](https://nodejs.org/docs/latest-v5.x/api/cluster.html)
21. [4.x](https://nodejs.org/docs/latest-v4.x/api/cluster.html)
22. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/cluster.html)
23. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/cluster.html)

- [Options](https://nodejs.org/docs/latest/api/cluster.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/cluster.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/cluster.md)

* * *

Table of contents

- [Cluster](https://nodejs.org/docs/latest/api/cluster.html#cluster)
  - [How it works](https://nodejs.org/docs/latest/api/cluster.html#how-it-works)
  - [Class: `Worker`](https://nodejs.org/docs/latest/api/cluster.html#class-worker)
    - [Event: `'disconnect'`](https://nodejs.org/docs/latest/api/cluster.html#event-disconnect)
    - [Event: `'error'`](https://nodejs.org/docs/latest/api/cluster.html#event-error)
    - [Event: `'exit'`](https://nodejs.org/docs/latest/api/cluster.html#event-exit)
    - [Event: `'listening'`](https://nodejs.org/docs/latest/api/cluster.html#event-listening)
    - [Event: `'message'`](https://nodejs.org/docs/latest/api/cluster.html#event-message)
    - [Event: `'online'`](https://nodejs.org/docs/latest/api/cluster.html#event-online)
    - [`worker.disconnect()`](https://nodejs.org/docs/latest/api/cluster.html#workerdisconnect)
    - [`worker.exitedAfterDisconnect`](https://nodejs.org/docs/latest/api/cluster.html#workerexitedafterdisconnect)
    - [`worker.id`](https://nodejs.org/docs/latest/api/cluster.html#workerid)
    - [`worker.isConnected()`](https://nodejs.org/docs/latest/api/cluster.html#workerisconnected)
    - [`worker.isDead()`](https://nodejs.org/docs/latest/api/cluster.html#workerisdead)
    - [`worker.kill([signal])`](https://nodejs.org/docs/latest/api/cluster.html#workerkillsignal)
    - [`worker.process`](https://nodejs.org/docs/latest/api/cluster.html#workerprocess)
    - [`worker.send(message[, sendHandle[, options]][, callback])`](https://nodejs.org/docs/latest/api/cluster.html#workersendmessage-sendhandle-options-callback)
  - [Event: `'disconnect'`](https://nodejs.org/docs/latest/api/cluster.html#event-disconnect_1)
  - [Event: `'exit'`](https://nodejs.org/docs/latest/api/cluster.html#event-exit_1)
  - [Event: `'fork'`](https://nodejs.org/docs/latest/api/cluster.html#event-fork)
  - [Event: `'listening'`](https://nodejs.org/docs/latest/api/cluster.html#event-listening_1)
  - [Event: `'message'`](https://nodejs.org/docs/latest/api/cluster.html#event-message_1)
  - [Event: `'online'`](https://nodejs.org/docs/latest/api/cluster.html#event-online_1)
  - [Event: `'setup'`](https://nodejs.org/docs/latest/api/cluster.html#event-setup)
  - [`cluster.disconnect([callback])`](https://nodejs.org/docs/latest/api/cluster.html#clusterdisconnectcallback)
  - [`cluster.fork([env])`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv)
  - [`cluster.isMaster`](https://nodejs.org/docs/latest/api/cluster.html#clusterismaster)
  - [`cluster.isPrimary`](https://nodejs.org/docs/latest/api/cluster.html#clusterisprimary)
  - [`cluster.isWorker`](https://nodejs.org/docs/latest/api/cluster.html#clusterisworker)
  - [`cluster.schedulingPolicy`](https://nodejs.org/docs/latest/api/cluster.html#clusterschedulingpolicy)
  - [`cluster.settings`](https://nodejs.org/docs/latest/api/cluster.html#clustersettings)
  - [`cluster.setupMaster([settings])`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupmastersettings)
  - [`cluster.setupPrimary([settings])`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings)
  - [`cluster.worker`](https://nodejs.org/docs/latest/api/cluster.html#clusterworker)
  - [`cluster.workers`](https://nodejs.org/docs/latest/api/cluster.html#clusterworkers)

## Cluster[\#](https://nodejs.org/docs/latest/api/cluster.html\#cluster)

[Stability: 2](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/cluster.js](https://github.com/nodejs/node/blob/v25.0.0/lib/cluster.js)

Clusters of Node.js processes can be used to run multiple instances of Node.js
that can distribute workloads among their application threads. When process
isolation is not needed, use the [`worker_threads`](https://nodejs.org/docs/latest/api/worker_threads.html) module instead, which
allows running multiple application threads within a single Node.js instance.

The cluster module allows easy creation of child processes that all share
server ports.

```js mjs
import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}copy
```

Running Node.js will now share port 8000 between the workers:

```console
$ node server.js
Primary 3596 is running
Worker 4324 started
Worker 4520 started
Worker 6056 started
Worker 5644 started copy
```

On Windows, it is not yet possible to set up a named pipe server in a worker.

### How it works[\#](https://nodejs.org/docs/latest/api/cluster.html\#how-it-works)

The worker processes are spawned using the [`child_process.fork()`](https://nodejs.org/docs/latest/api/child_process.html#child_processforkmodulepath-args-options) method,
so that they can communicate with the parent via IPC and pass server
handles back and forth.

The cluster module supports two methods of distributing incoming
connections.

The first one (and the default one on all platforms except Windows)
is the round-robin approach, where the primary process listens on a
port, accepts new connections and distributes them across the workers
in a round-robin fashion, with some built-in smarts to avoid
overloading a worker process.

The second approach is where the primary process creates the listen
socket and sends it to interested workers. The workers then accept
incoming connections directly.

The second approach should, in theory, give the best performance.
In practice however, distribution tends to be very unbalanced due
to operating system scheduler vagaries. Loads have been observed
where over 70% of all connections ended up in just two processes,
out of a total of eight.

Because `server.listen()` hands off most of the work to the primary
process, there are three cases where the behavior between a normal
Node.js process and a cluster worker differs:

1. `server.listen({fd: 7})` Because the message is passed to the primary,
file descriptor 7 **in the parent** will be listened on, and the
handle passed to the worker, rather than listening to the worker's
idea of what the number 7 file descriptor references.
2. `server.listen(handle)` Listening on handles explicitly will cause
the worker to use the supplied handle, rather than talk to the primary
process.
3. `server.listen(0)` Normally, this will cause servers to listen on a
random port. However, in a cluster, each worker will receive the
same "random" port each time they do `listen(0)`. In essence, the
port is random the first time, but predictable thereafter. To listen
on a unique port, generate a port number based on the cluster worker ID.

Node.js does not provide routing logic. It is therefore important to design an
application such that it does not rely too heavily on in-memory data objects for
things like sessions and login.

Because workers are all separate processes, they can be killed or
re-spawned depending on a program's needs, without affecting other
workers. As long as there are some workers still alive, the server will
continue to accept connections. If no workers are alive, existing connections
will be dropped and new connections will be refused. Node.js does not
automatically manage the number of workers, however. It is the application's
responsibility to manage the worker pool based on its own needs.

Although a primary use case for the `node:cluster` module is networking, it can
also be used for other use cases requiring worker processes.

### Class: `Worker`[\#](https://nodejs.org/docs/latest/api/cluster.html\#class-worker)

Added in: v0.7.0

- Extends: [<EventEmitter>](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)

A `Worker` object contains all public information and method about a worker.
In the primary it can be obtained using `cluster.workers`. In a worker
it can be obtained using `cluster.worker`.

#### Event: `'disconnect'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-disconnect)

Added in: v0.7.7

Similar to the `cluster.on('disconnect')` event, but specific to this worker.

```js
cluster.fork().on('disconnect', () => {
  // Worker has disconnected
}); copy
```

#### Event: `'error'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-error)

Added in: v0.7.3

This event is the same as the one provided by [`child_process.fork()`](https://nodejs.org/docs/latest/api/child_process.html#child_processforkmodulepath-args-options).

Within a worker, `process.on('error')` may also be used.

#### Event: `'exit'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-exit)

Added in: v0.11.2

- `code` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The exit code, if it exited normally.
- `signal` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The name of the signal (e.g. `'SIGHUP'`) that caused
the process to be killed.

Similar to the `cluster.on('exit')` event, but specific to this worker.

```js mjs
import cluster from 'node:cluster';

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.on('exit', (code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
}const cluster = require('node:cluster');

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.on('exit', (code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
}copy
```

#### Event: `'listening'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-listening)

Added in: v0.7.0

- `address` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Similar to the `cluster.on('listening')` event, but specific to this worker.

```js mjs
cluster.fork().on('listening', (address) => {
  // Worker is listening
});cluster.fork().on('listening', (address) => {
  // Worker is listening
});copy
```

It is not emitted in the worker.

#### Event: `'message'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-message)

Added in: v0.7.0

- `message` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `handle` [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Similar to the `'message'` event of `cluster`, but specific to this worker.

Within a worker, `process.on('message')` may also be used.

See [`process` event: `'message'`](https://nodejs.org/docs/latest/api/process.html#event-message).

Here is an example using the message system. It keeps a count in the primary
process of the number of HTTP requests received by the workers:

```js mjs
import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

if (cluster.isPrimary) {

  // Keep track of http requests
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  const numCPUs = availableParallelism();
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

} else {

  // Worker processes have a http server.
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    // Notify primary about the request
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {

  // Keep track of http requests
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

} else {

  // Worker processes have a http server.
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    // Notify primary about the request
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}copy
```

#### Event: `'online'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-online)

Added in: v0.7.0

Similar to the `cluster.on('online')` event, but specific to this worker.

```js
cluster.fork().on('online', () => {
  // Worker is online
}); copy
```

It is not emitted in the worker.

#### `worker.disconnect()`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerdisconnect)

History

| Version | Changes |
| --- | --- |
| v7.3.0 | This method now returns a reference to `worker`. |
| v0.7.7 | Added in: v0.7.7 |

- Returns: [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker) A reference to `worker`.

In a worker, this function will close all servers, wait for the `'close'` event
on those servers, and then disconnect the IPC channel.

In the primary, an internal message is sent to the worker causing it to call
`.disconnect()` on itself.

Causes `.exitedAfterDisconnect` to be set.

After a server is closed, it will no longer accept new connections,
but connections may be accepted by any other listening worker. Existing
connections will be allowed to close as usual. When no more connections exist,
see [`server.close()`](https://nodejs.org/docs/latest/api/net.html#event-close), the IPC channel to the worker will close allowing it
to die gracefully.

The above applies _only_ to server connections, client connections are not
automatically closed by workers, and disconnect does not wait for them to close
before exiting.

In a worker, `process.disconnect` exists, but it is not this function;
it is [`disconnect()`](https://nodejs.org/docs/latest/api/child_process.html#subprocessdisconnect).

Because long living server connections may block workers from disconnecting, it
may be useful to send a message, so application specific actions may be taken to
close them. It also may be useful to implement a timeout, killing a worker if
the `'disconnect'` event has not been emitted after some time.

```js
if (cluster.isPrimary) {
  const worker = cluster.fork();
  let timeout;

  worker.on('listening', (address) => {
    worker.send('shutdown');
    worker.disconnect();
    timeout = setTimeout(() => {
      worker.kill();
    }, 2000);
  });

  worker.on('disconnect', () => {
    clearTimeout(timeout);
  });

} else if (cluster.isWorker) {
  const net = require('node:net');
  const server = net.createServer((socket) => {
    // Connections never end
  });

  server.listen(8000);

  process.on('message', (msg) => {
    if (msg === 'shutdown') {
      // Initiate graceful close of any connections to server
    }
  });
} copy
```

#### `worker.exitedAfterDisconnect`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerexitedafterdisconnect)

Added in: v6.0.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

This property is `true` if the worker exited due to `.disconnect()`.
If the worker exited any other way, it is `false`. If the
worker has not exited, it is `undefined`.

The boolean [`worker.exitedAfterDisconnect`](https://nodejs.org/docs/latest/api/cluster.html#workerexitedafterdisconnect) allows distinguishing between
voluntary and accidental exit, the primary may choose not to respawn a worker
based on this value.

```js
cluster.on('exit', (worker, code, signal) => {
  if (worker.exitedAfterDisconnect === true) {
    console.log('Oh, it was just voluntary – no need to worry');
  }
});

// kill worker
worker.kill(); copy
```

#### `worker.id`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerid)

Added in: v0.8.0

- Type: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Each new worker is given its own unique id, this id is stored in the
`id`.

While a worker is alive, this is the key that indexes it in
`cluster.workers`.

#### `worker.isConnected()`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerisconnected)

Added in: v0.11.14

This function returns `true` if the worker is connected to its primary via its
IPC channel, `false` otherwise. A worker is connected to its primary after it
has been created. It is disconnected after the `'disconnect'` event is emitted.

#### `worker.isDead()`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerisdead)

Added in: v0.11.14

This function returns `true` if the worker's process has terminated (either
because of exiting or being signaled). Otherwise, it returns `false`.

```js mjs
import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) => {
    console.log('worker is dead:', worker.isDead());
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log('worker is dead:', worker.isDead());
  });
} else {
  // Workers can share any TCP connection. In this case, it is an HTTP server.
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
    process.kill(process.pid);
  }).listen(8000);
}const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();
const process = require('node:process');

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) => {
    console.log('worker is dead:', worker.isDead());
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log('worker is dead:', worker.isDead());
  });
} else {
  // Workers can share any TCP connection. In this case, it is an HTTP server.
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
    process.kill(process.pid);
  }).listen(8000);
}copy
```

#### `worker.kill([signal])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerkillsignal)

Added in: v0.9.12

- `signal` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Name of the kill signal to send to the worker
process. **Default:** `'SIGTERM'`

This function will kill the worker. In the primary worker, it does this by
disconnecting the `worker.process`, and once disconnected, killing with
`signal`. In the worker, it does it by killing the process with `signal`.

The `kill()` function kills the worker process without waiting for a graceful
disconnect, it has the same behavior as `worker.process.kill()`.

This method is aliased as `worker.destroy()` for backwards compatibility.

In a worker, `process.kill()` exists, but it is not this function;
it is [`kill()`](https://nodejs.org/docs/latest/api/process.html#processkillpid-signal).

#### `worker.process`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workerprocess)

Added in: v0.7.0

- Type: [<ChildProcess>](https://nodejs.org/docs/latest/api/child_process.html#class-childprocess)

All workers are created using [`child_process.fork()`](https://nodejs.org/docs/latest/api/child_process.html#child_processforkmodulepath-args-options), the returned object
from this function is stored as `.process`. In a worker, the global `process`
is stored.

See: [Child Process module](https://nodejs.org/docs/latest/api/child_process.html#child_processforkmodulepath-args-options).

Workers will call `process.exit(0)` if the `'disconnect'` event occurs
on `process` and `.exitedAfterDisconnect` is not `true`. This protects against
accidental disconnection.

#### `worker.send(message[, sendHandle[, options]][, callback])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#workersendmessage-sendhandle-options-callback)

History

| Version | Changes |
| --- | --- |
| v4.0.0 | The `callback` parameter is supported now. |
| v0.7.0 | Added in: v0.7.0 |

- `message` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `sendHandle` [<Handle>](https://nodejs.org/docs/latest/api/net.html#serverlistenhandle-backlog-callback)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The `options` argument, if present, is an object used to
parameterize the sending of certain types of handles. `options` supports
the following properties:

  - `keepOpen` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) A value that can be used when passing instances of
    `net.Socket`. When `true`, the socket is kept open in the sending process.
    **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Send a message to a worker or primary, optionally with a handle.

In the primary, this sends a message to a specific worker. It is identical to
[`ChildProcess.send()`](https://nodejs.org/docs/latest/api/child_process.html#subprocesssendmessage-sendhandle-options-callback).

In a worker, this sends a message to the primary. It is identical to
`process.send()`.

This example will echo back all messages from the primary:

```js
if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.send('hi there');

} else if (cluster.isWorker) {
  process.on('message', (msg) => {
    process.send(msg);
  });
} copy
```

### Event: `'disconnect'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-disconnect_1)

Added in: v0.7.9

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)

Emitted after the worker IPC channel has disconnected. This can occur when a
worker exits gracefully, is killed, or is disconnected manually (such as with
`worker.disconnect()`).

There may be a delay between the `'disconnect'` and `'exit'` events. These
events can be used to detect if the process is stuck in a cleanup or if there
are long-living connections.

```js
cluster.on('disconnect', (worker) => {
  console.log(`The worker #${worker.id} has disconnected`);
}); copy
```

### Event: `'exit'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-exit_1)

Added in: v0.7.9

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)
- `code` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The exit code, if it exited normally.
- `signal` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The name of the signal (e.g. `'SIGHUP'`) that caused
the process to be killed.

When any of the workers die the cluster module will emit the `'exit'` event.

This can be used to restart the worker by calling [`.fork()`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv) again.

```js
cluster.on('exit', (worker, code, signal) => {
  console.log('worker %d died (%s). restarting...',
              worker.process.pid, signal || code);
  cluster.fork();
}); copy
```

See [`child_process` event: `'exit'`](https://nodejs.org/docs/latest/api/child_process.html#event-exit).

### Event: `'fork'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-fork)

Added in: v0.7.0

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)

When a new worker is forked the cluster module will emit a `'fork'` event.
This can be used to log worker activity, and create a custom timeout.

```js
const timeouts = [];
function errorMsg() {
  console.error('Something must be wrong with the connection ...');
}

cluster.on('fork', (worker) => {
  timeouts[worker.id] = setTimeout(errorMsg, 2000);
});
cluster.on('listening', (worker, address) => {
  clearTimeout(timeouts[worker.id]);
});
cluster.on('exit', (worker, code, signal) => {
  clearTimeout(timeouts[worker.id]);
  errorMsg();
}); copy
```

### Event: `'listening'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-listening_1)

Added in: v0.7.0

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)
- `address` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

After calling `listen()` from a worker, when the `'listening'` event is emitted
on the server, a `'listening'` event will also be emitted on `cluster` in the
primary.

The event handler is executed with two arguments, the `worker` contains the
worker object and the `address` object contains the following connection
properties: `address`, `port`, and `addressType`. This is very useful if the
worker is listening on more than one address.

```js
cluster.on('listening', (worker, address) => {
  console.log(
    `A worker is now connected to ${address.address}:${address.port}`);
}); copy
```

The `addressType` is one of:

- `4` (TCPv4)
- `6` (TCPv6)
- `-1` (Unix domain socket)
- `'udp4'` or `'udp6'` (UDPv4 or UDPv6)

### Event: `'message'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-message_1)

History

| Version | Changes |
| --- | --- |
| v6.0.0 | The `worker` parameter is passed now; see below for details. |
| v2.5.0 | Added in: v2.5.0 |

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)
- `message` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `handle` [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Emitted when the cluster primary receives a message from any worker.

See [`child_process` event: `'message'`](https://nodejs.org/docs/latest/api/child_process.html#event-message).

### Event: `'online'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-online_1)

Added in: v0.7.0

- `worker` [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)

After forking a new worker, the worker should respond with an online message.
When the primary receives an online message it will emit this event.
The difference between `'fork'` and `'online'` is that fork is emitted when the
primary forks a worker, and `'online'` is emitted when the worker is running.

```js
cluster.on('online', (worker) => {
  console.log('Yay, the worker responded after it was forked');
}); copy
```

### Event: `'setup'`[\#](https://nodejs.org/docs/latest/api/cluster.html\#event-setup)

Added in: v0.7.1

- `settings` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Emitted every time [`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings) is called.

The `settings` object is the `cluster.settings` object at the time
[`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings) was called and is advisory only, since multiple calls to
[`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings) can be made in a single tick.

If accuracy is important, use `cluster.settings`.

### `cluster.disconnect([callback])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterdisconnectcallback)

Added in: v0.7.7

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Called when all workers are disconnected and handles are
closed.

Calls `.disconnect()` on each worker in `cluster.workers`.

When they are disconnected all internal handles will be closed, allowing the
primary process to die gracefully if no other event is waiting.

The method takes an optional callback argument which will be called when
finished.

This can only be called from the primary process.

### `cluster.fork([env])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterforkenv)

Added in: v0.6.0

- `env` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Key/value pairs to add to worker process environment.
- Returns: [<cluster.Worker>](https://nodejs.org/docs/latest/api/cluster.html#class-worker)

Spawn a new worker process.

This can only be called from the primary process.

### `cluster.isMaster`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterismaster)

Added in: v0.8.1Deprecated since: v16.0.0

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated

Deprecated alias for [`cluster.isPrimary`](https://nodejs.org/docs/latest/api/cluster.html#clusterisprimary).

### `cluster.isPrimary`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterisprimary)

Added in: v16.0.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

True if the process is a primary. This is determined
by the `process.env.NODE_UNIQUE_ID`. If `process.env.NODE_UNIQUE_ID` is
undefined, then `isPrimary` is `true`.

### `cluster.isWorker`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterisworker)

Added in: v0.6.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

True if the process is not a primary (it is the negation of `cluster.isPrimary`).

### `cluster.schedulingPolicy`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterschedulingpolicy)

Added in: v0.11.2

The scheduling policy, either `cluster.SCHED_RR` for round-robin or
`cluster.SCHED_NONE` to leave it to the operating system. This is a
global setting and effectively frozen once either the first worker is spawned,
or [`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings) is called, whichever comes first.

`SCHED_RR` is the default on all operating systems except Windows.
Windows will change to `SCHED_RR` once libuv is able to effectively
distribute IOCP handles without incurring a large performance hit.

`cluster.schedulingPolicy` can also be set through the
`NODE_CLUSTER_SCHED_POLICY` environment variable. Valid
values are `'rr'` and `'none'`.

### `cluster.settings`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clustersettings)

History

| Version | Changes |
| --- | --- |
| v13.2.0, v12.16.0 | The `serialization` option is supported now. |
| v9.5.0 | The `cwd` option is supported now. |
| v9.4.0 | The `windowsHide` option is supported now. |
| v8.2.0 | The `inspectPort` option is supported now. |
| v6.4.0 | The `stdio` option is supported now. |
| v0.7.1 | Added in: v0.7.1 |

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `execArgv` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) List of string arguments passed to the Node.js
    executable. **Default:** `process.execArgv`.
  - `exec` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) File path to worker file. **Default:** `process.argv[1]`.
  - `args` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) String arguments passed to worker.
    **Default:** `process.argv.slice(2)`.
  - `cwd` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Current working directory of the worker process. **Default:** `undefined` (inherits from parent process).
  - `serialization` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Specify the kind of serialization used for sending
    messages between processes. Possible values are `'json'` and `'advanced'`.
    See [Advanced serialization for `child_process`](https://nodejs.org/docs/latest/api/child_process.html#advanced-serialization) for more details.
    **Default:** `false`.
  - `silent` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether or not to send output to parent's stdio.
    **Default:** `false`.
  - `stdio` [<Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) Configures the stdio of forked processes. Because the
    cluster module relies on IPC to function, this configuration must contain an
    `'ipc'` entry. When this option is provided, it overrides `silent`. See
    [`child_process.spawn()`](https://nodejs.org/docs/latest/api/child_process.html#child_processspawncommand-args-options)'s [`stdio`](https://nodejs.org/docs/latest/api/child_process.html#optionsstdio).
  - `uid` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Sets the user identity of the process. (See [`setuid(2)`](http://man7.org/linux/man-pages/man2/setuid.2.html).)
  - `gid` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Sets the group identity of the process. (See [`setgid(2)`](http://man7.org/linux/man-pages/man2/setgid.2.html).)
  - `inspectPort` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Sets inspector port of worker.
    This can be a number, or a function that takes no arguments and returns a
    number. By default each worker gets its own port, incremented from the
    primary's `process.debugPort`.
  - `windowsHide` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Hide the forked processes console window that would
    normally be created on Windows systems. **Default:** `false`.

After calling [`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings) (or [`.fork()`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv)) this settings object will
contain the settings, including the default values.

This object is not intended to be changed or set manually.

### `cluster.setupMaster([settings])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clustersetupmastersettings)

History

| Version | Changes |
| --- | --- |
| v16.0.0 | Deprecated since: v16.0.0 |
| v6.4.0 | The `stdio` option is supported now. |
| v0.7.1 | Added in: v0.7.1 |

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated

Deprecated alias for [`.setupPrimary()`](https://nodejs.org/docs/latest/api/cluster.html#clustersetupprimarysettings).

### `cluster.setupPrimary([settings])`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clustersetupprimarysettings)

Added in: v16.0.0

- `settings` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) See [`cluster.settings`](https://nodejs.org/docs/latest/api/cluster.html#clustersettings).

`setupPrimary` is used to change the default 'fork' behavior. Once called,
the settings will be present in `cluster.settings`.

Any settings changes only affect future calls to [`.fork()`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv) and have no
effect on workers that are already running.

The only attribute of a worker that cannot be set via `.setupPrimary()` is
the `env` passed to [`.fork()`](https://nodejs.org/docs/latest/api/cluster.html#clusterforkenv).

The defaults above apply to the first call only; the defaults for later
calls are the current values at the time of `cluster.setupPrimary()` is called.

```js mjs
import cluster from 'node:cluster';

cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'https'],
  silent: true,
});
cluster.fork(); // https worker
cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'http'],
});
cluster.fork(); // http workerconst cluster = require('node:cluster');

cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'https'],
  silent: true,
});
cluster.fork(); // https worker
cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'http'],
});
cluster.fork(); // http workercopy
```

This can only be called from the primary process.

### `cluster.worker`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterworker)

Added in: v0.7.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

A reference to the current worker object. Not available in the primary process.

```js mjs
import cluster from 'node:cluster';

if (cluster.isPrimary) {
  console.log('I am primary');
  cluster.fork();
  cluster.fork();
} else if (cluster.isWorker) {
  console.log(`I am worker #${cluster.worker.id}`);
}const cluster = require('node:cluster');

if (cluster.isPrimary) {
  console.log('I am primary');
  cluster.fork();
  cluster.fork();
} else if (cluster.isWorker) {
  console.log(`I am worker #${cluster.worker.id}`);
}copy
```

### `cluster.workers`[\#](https://nodejs.org/docs/latest/api/cluster.html\#clusterworkers)

Added in: v0.7.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

A hash that stores the active worker objects, keyed by `id` field. This makes it
easy to loop through all the workers. It is only available in the primary
process.

A worker is removed from `cluster.workers` after the worker has disconnected
_and_ exited. The order between these two events cannot be determined in
advance. However, it is guaranteed that the removal from the `cluster.workers`
list happens before the last `'disconnect'` or `'exit'` event is emitted.

```js mjs
import cluster from 'node:cluster';

for (const worker of Object.values(cluster.workers)) {
  worker.send('big announcement to all workers');
}const cluster = require('node:cluster');

for (const worker of Object.values(cluster.workers)) {
  worker.send('big announcement to all workers');
}copy
```