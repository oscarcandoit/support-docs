---
source: https://nodejs.org/docs/latest/api/diagnostics_channel.html
scraped_at: 2025-10-20T14:08:49.841Z
title: Diagnostics Channel | Node.js v25.0.0 Documentation
description: 
category: development
module: diagnostics_channel
---

[Skip to content](https://nodejs.org/docs/latest/api/diagnostics_channel.html#apicontent)

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
- [Table of contents](https://nodejs.org/docs/latest/api/diagnostics_channel.html#toc-picker)




- [Diagnostics Channel](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics-channel)
  - [Public API](https://nodejs.org/docs/latest/api/diagnostics_channel.html#public-api)
    - [Overview](https://nodejs.org/docs/latest/api/diagnostics_channel.html#overview)
      - [`diagnostics_channel.hasSubscribers(name)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelhassubscribersname)
      - [`diagnostics_channel.channel(name)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelchannelname)
      - [`diagnostics_channel.subscribe(name, onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelsubscribename-onmessage)
      - [`diagnostics_channel.unsubscribe(name, onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelunsubscribename-onmessage)
      - [`diagnostics_channel.tracingChannel(nameOrChannels)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channeltracingchannelnameorchannels)
    - [Class: `Channel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-channel)
      - [`channel.hasSubscribers`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelhassubscribers)
      - [`channel.publish(message)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelpublishmessage)
      - [`channel.subscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelsubscribeonmessage)
      - [`channel.unsubscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelunsubscribeonmessage)
      - [`channel.bindStore(store[, transform])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelbindstorestore-transform)
      - [`channel.unbindStore(store)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelunbindstorestore)
      - [`channel.runStores(context, fn[, thisArg[, ...args]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args)
    - [Class: `TracingChannel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel)
      - [`tracingChannel.subscribe(subscribers)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelsubscribesubscribers)
      - [`tracingChannel.unsubscribe(subscribers)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelunsubscribesubscribers)
      - [`tracingChannel.traceSync(fn[, context[, thisArg[, ...args]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracesyncfn-context-thisarg-args)
      - [`tracingChannel.tracePromise(fn[, context[, thisArg[, ...args]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracepromisefn-context-thisarg-args)
      - [`tracingChannel.traceCallback(fn[, position[, context[, thisArg[, ...args]]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracecallbackfn-position-context-thisarg-args)
      - [`tracingChannel.hasSubscribers`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelhassubscribers)
    - [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels)
      - [`start(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent)
      - [`end(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent)
      - [`asyncStart(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent)
      - [`asyncEnd(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent)
      - [`error(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent)
    - [Built-in Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#built-in-channels)
      - [Console](https://nodejs.org/docs/latest/api/diagnostics_channel.html#console)
        - [Event: `'console.log'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consolelog)
        - [Event: `'console.info'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoleinfo)
        - [Event: `'console.debug'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoledebug)
        - [Event: `'console.warn'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consolewarn)
        - [Event: `'console.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoleerror)
      - [HTTP](https://nodejs.org/docs/latest/api/diagnostics_channel.html#http)
        - [Event: `'http.client.request.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequestcreated)
        - [Event: `'http.client.request.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequeststart)
        - [Event: `'http.client.request.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequesterror)
        - [Event: `'http.client.response.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientresponsefinish)
        - [Event: `'http.server.request.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverrequeststart)
        - [Event: `'http.server.response.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverresponsecreated)
        - [Event: `'http.server.response.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverresponsefinish)
      - [HTTP/2](https://nodejs.org/docs/latest/api/diagnostics_channel.html#http2)
        - [Event: `'http2.client.stream.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamcreated)
        - [Event: `'http2.client.stream.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamstart)
        - [Event: `'http2.client.stream.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamerror)
        - [Event: `'http2.client.stream.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamfinish)
        - [Event: `'http2.client.stream.close'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamclose)
        - [Event: `'http2.server.stream.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamcreated)
        - [Event: `'http2.server.stream.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamstart)
        - [Event: `'http2.server.stream.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamerror)
        - [Event: `'http2.server.stream.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamfinish)
        - [Event: `'http2.server.stream.close'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamclose)
      - [Modules](https://nodejs.org/docs/latest/api/diagnostics_channel.html#modules)
        - [Event: `'module.require.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequirestart)
        - [Event: `'module.require.end'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequireend)
        - [Event: `'module.require.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequireerror)
        - [Event: `'module.import.asyncStart'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimportasyncstart)
        - [Event: `'module.import.asyncEnd'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimportasyncend)
        - [Event: `'module.import.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimporterror)
      - [NET](https://nodejs.org/docs/latest/api/diagnostics_channel.html#net)
        - [Event: `'net.client.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-netclientsocket)
        - [Event: `'net.server.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-netserversocket)
        - [Event: `'tracing:net.server.listen:asyncStart'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenasyncstart)
        - [Event: `'tracing:net.server.listen:asyncEnd'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenasyncend)
        - [Event: `'tracing:net.server.listen:error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenerror)
      - [UDP](https://nodejs.org/docs/latest/api/diagnostics_channel.html#udp)
        - [Event: `'udp.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-udpsocket)
      - [Process](https://nodejs.org/docs/latest/api/diagnostics_channel.html#process)
        - [Event: `'child_process'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-child_process)
        - [Event: `'execve'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-execve)
      - [Worker Thread](https://nodejs.org/docs/latest/api/diagnostics_channel.html#worker-thread)
        - [Event: `'worker_threads'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-worker_threads)

- [Index](https://nodejs.org/docs/latest/api/diagnostics_channel.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/docs/latest/api/diagnostics_channel.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/diagnostics_channel.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/diagnostics_channel.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/diagnostics_channel.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/diagnostics_channel.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/diagnostics_channel.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/diagnostics_channel.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/diagnostics_channel.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/diagnostics_channel.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/diagnostics_channel.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/diagnostics_channel.html)

- [Options](https://nodejs.org/docs/latest/api/diagnostics_channel.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/diagnostics_channel.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/diagnostics_channel.md)

* * *

Table of contents

- [Diagnostics Channel](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics-channel)
  - [Public API](https://nodejs.org/docs/latest/api/diagnostics_channel.html#public-api)
    - [Overview](https://nodejs.org/docs/latest/api/diagnostics_channel.html#overview)
      - [`diagnostics_channel.hasSubscribers(name)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelhassubscribersname)
      - [`diagnostics_channel.channel(name)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelchannelname)
      - [`diagnostics_channel.subscribe(name, onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelsubscribename-onmessage)
      - [`diagnostics_channel.unsubscribe(name, onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelunsubscribename-onmessage)
      - [`diagnostics_channel.tracingChannel(nameOrChannels)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channeltracingchannelnameorchannels)
    - [Class: `Channel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-channel)
      - [`channel.hasSubscribers`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelhassubscribers)
      - [`channel.publish(message)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelpublishmessage)
      - [`channel.subscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelsubscribeonmessage)
      - [`channel.unsubscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelunsubscribeonmessage)
      - [`channel.bindStore(store[, transform])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelbindstorestore-transform)
      - [`channel.unbindStore(store)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelunbindstorestore)
      - [`channel.runStores(context, fn[, thisArg[, ...args]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args)
    - [Class: `TracingChannel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel)
      - [`tracingChannel.subscribe(subscribers)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelsubscribesubscribers)
      - [`tracingChannel.unsubscribe(subscribers)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelunsubscribesubscribers)
      - [`tracingChannel.traceSync(fn[, context[, thisArg[, ...args]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracesyncfn-context-thisarg-args)
      - [`tracingChannel.tracePromise(fn[, context[, thisArg[, ...args]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracepromisefn-context-thisarg-args)
      - [`tracingChannel.traceCallback(fn[, position[, context[, thisArg[, ...args]]]])`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchanneltracecallbackfn-position-context-thisarg-args)
      - [`tracingChannel.hasSubscribers`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannelhassubscribers)
    - [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels)
      - [`start(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent)
      - [`end(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent)
      - [`asyncStart(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent)
      - [`asyncEnd(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent)
      - [`error(event)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent)
    - [Built-in Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#built-in-channels)
      - [Console](https://nodejs.org/docs/latest/api/diagnostics_channel.html#console)
        - [Event: `'console.log'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consolelog)
        - [Event: `'console.info'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoleinfo)
        - [Event: `'console.debug'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoledebug)
        - [Event: `'console.warn'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consolewarn)
        - [Event: `'console.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-consoleerror)
      - [HTTP](https://nodejs.org/docs/latest/api/diagnostics_channel.html#http)
        - [Event: `'http.client.request.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequestcreated)
        - [Event: `'http.client.request.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequeststart)
        - [Event: `'http.client.request.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientrequesterror)
        - [Event: `'http.client.response.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpclientresponsefinish)
        - [Event: `'http.server.request.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverrequeststart)
        - [Event: `'http.server.response.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverresponsecreated)
        - [Event: `'http.server.response.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-httpserverresponsefinish)
      - [HTTP/2](https://nodejs.org/docs/latest/api/diagnostics_channel.html#http2)
        - [Event: `'http2.client.stream.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamcreated)
        - [Event: `'http2.client.stream.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamstart)
        - [Event: `'http2.client.stream.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamerror)
        - [Event: `'http2.client.stream.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamfinish)
        - [Event: `'http2.client.stream.close'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2clientstreamclose)
        - [Event: `'http2.server.stream.created'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamcreated)
        - [Event: `'http2.server.stream.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamstart)
        - [Event: `'http2.server.stream.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamerror)
        - [Event: `'http2.server.stream.finish'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamfinish)
        - [Event: `'http2.server.stream.close'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-http2serverstreamclose)
      - [Modules](https://nodejs.org/docs/latest/api/diagnostics_channel.html#modules)
        - [Event: `'module.require.start'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequirestart)
        - [Event: `'module.require.end'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequireend)
        - [Event: `'module.require.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-modulerequireerror)
        - [Event: `'module.import.asyncStart'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimportasyncstart)
        - [Event: `'module.import.asyncEnd'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimportasyncend)
        - [Event: `'module.import.error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-moduleimporterror)
      - [NET](https://nodejs.org/docs/latest/api/diagnostics_channel.html#net)
        - [Event: `'net.client.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-netclientsocket)
        - [Event: `'net.server.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-netserversocket)
        - [Event: `'tracing:net.server.listen:asyncStart'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenasyncstart)
        - [Event: `'tracing:net.server.listen:asyncEnd'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenasyncend)
        - [Event: `'tracing:net.server.listen:error'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-tracingnetserverlistenerror)
      - [UDP](https://nodejs.org/docs/latest/api/diagnostics_channel.html#udp)
        - [Event: `'udp.socket'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-udpsocket)
      - [Process](https://nodejs.org/docs/latest/api/diagnostics_channel.html#process)
        - [Event: `'child_process'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-child_process)
        - [Event: `'execve'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-execve)
      - [Worker Thread](https://nodejs.org/docs/latest/api/diagnostics_channel.html#worker-thread)
        - [Event: `'worker_threads'`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#event-worker_threads)

## Diagnostics Channel[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics-channel)

History

| Version | Changes |
| --- | --- |
| v19.2.0, v18.13.0 | diagnostics\_channel is now Stable. |
| v15.1.0, v14.17.0 | Added in: v15.1.0, v14.17.0 |

[Stability: 2](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/diagnostics\_channel.js](https://github.com/nodejs/node/blob/v25.0.0/lib/diagnostics_channel.js)

The `node:diagnostics_channel` module provides an API to create named channels
to report arbitrary message data for diagnostics purposes.

It can be accessed using:

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';const diagnostics_channel = require('node:diagnostics_channel');copy
```

It is intended that a module writer wanting to report diagnostics messages
will create one or many top-level channels to report messages through.
Channels may also be acquired at runtime but it is not encouraged
due to the additional overhead of doing so. Channels may be exported for
convenience, but as long as the name is known it can be acquired anywhere.

If you intend for your module to produce diagnostics data for others to
consume it is recommended that you include documentation of what named
channels are used along with the shape of the message data. Channel names
should generally include the module name to avoid collisions with data from
other modules.

### Public API[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#public-api)

#### Overview[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#overview)

Following is a simple overview of the public API.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

// Get a reusable channel object
const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

// Subscribe to the channel
diagnostics_channel.subscribe('my-channel', onMessage);

// Check if the channel has an active subscriber
if (channel.hasSubscribers) {
  // Publish data to the channel
  channel.publish({
    some: 'data',
  });
}

// Unsubscribe from the channel
diagnostics_channel.unsubscribe('my-channel', onMessage);const diagnostics_channel = require('node:diagnostics_channel');

// Get a reusable channel object
const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

// Subscribe to the channel
diagnostics_channel.subscribe('my-channel', onMessage);

// Check if the channel has an active subscriber
if (channel.hasSubscribers) {
  // Publish data to the channel
  channel.publish({
    some: 'data',
  });
}

// Unsubscribe from the channel
diagnostics_channel.unsubscribe('my-channel', onMessage);copy
```

##### `diagnostics_channel.hasSubscribers(name)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics_channelhassubscribersname)

Added in: v15.1.0, v14.17.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The channel name
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If there are active subscribers

Check if there are active subscribers to the named channel. This is helpful if
the message you want to send might be expensive to prepare.

This API is optional but helpful when trying to publish messages from very
performance-sensitive code.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

if (diagnostics_channel.hasSubscribers('my-channel')) {
  // There are subscribers, prepare and publish message
}const diagnostics_channel = require('node:diagnostics_channel');

if (diagnostics_channel.hasSubscribers('my-channel')) {
  // There are subscribers, prepare and publish message
}copy
```

##### `diagnostics_channel.channel(name)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics_channelchannelname)

Added in: v15.1.0, v14.17.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The channel name
- Returns: [<Channel>](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-channel) The named channel object

This is the primary entry-point for anyone wanting to publish to a named
channel. It produces a channel object which is optimized to reduce overhead at
publish time as much as possible.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');copy
```

##### `diagnostics_channel.subscribe(name, onMessage)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics_channelsubscribename-onmessage)

Added in: v18.7.0, v16.17.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The channel name
- `onMessage` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The handler to receive channel messages

  - `message` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The message data
  - `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The name of the channel

Register a message handler to subscribe to this channel. This message handler
will be run synchronously whenever a message is published to the channel. Any
errors thrown in the message handler will trigger an [`'uncaughtException'`](https://nodejs.org/docs/latest/api/process.html#event-uncaughtexception).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

diagnostics_channel.subscribe('my-channel', (message, name) => {
  // Received data
});const diagnostics_channel = require('node:diagnostics_channel');

diagnostics_channel.subscribe('my-channel', (message, name) => {
  // Received data
});copy
```

##### `diagnostics_channel.unsubscribe(name, onMessage)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics_channelunsubscribename-onmessage)

Added in: v18.7.0, v16.17.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The channel name
- `onMessage` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The previous subscribed handler to remove
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the handler was found, `false` otherwise.

Remove a message handler previously registered to this channel with
[`diagnostics_channel.subscribe(name, onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelsubscribename-onmessage).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

function onMessage(message, name) {
  // Received data
}

diagnostics_channel.subscribe('my-channel', onMessage);

diagnostics_channel.unsubscribe('my-channel', onMessage);const diagnostics_channel = require('node:diagnostics_channel');

function onMessage(message, name) {
  // Received data
}

diagnostics_channel.subscribe('my-channel', onMessage);

diagnostics_channel.unsubscribe('my-channel', onMessage);copy
```

##### `diagnostics_channel.tracingChannel(nameOrChannels)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#diagnostics_channeltracingchannelnameorchannels)

Added in: v19.9.0, v18.19.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

- `nameOrChannels` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<TracingChannel>](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel) Channel name or
object containing all the [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels)
- Returns: [<TracingChannel>](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel) Collection of channels to trace with

Creates a [`TracingChannel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel) wrapper for the given
[TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels). If a name is given, the corresponding tracing
channels will be created in the form of `tracing:${name}:${eventType}` where
`eventType` corresponds to the types of [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channelsByName = diagnostics_channel.tracingChannel('my-channel');

// or...

const channelsByCollection = diagnostics_channel.tracingChannel({
  start: diagnostics_channel.channel('tracing:my-channel:start'),
  end: diagnostics_channel.channel('tracing:my-channel:end'),
  asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
  asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
  error: diagnostics_channel.channel('tracing:my-channel:error'),
});const diagnostics_channel = require('node:diagnostics_channel');

const channelsByName = diagnostics_channel.tracingChannel('my-channel');

// or...

const channelsByCollection = diagnostics_channel.tracingChannel({
  start: diagnostics_channel.channel('tracing:my-channel:start'),
  end: diagnostics_channel.channel('tracing:my-channel:end'),
  asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
  asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
  error: diagnostics_channel.channel('tracing:my-channel:error'),
});copy
```

#### Class: `Channel`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#class-channel)

Added in: v15.1.0, v14.17.0

The class `Channel` represents an individual named channel within the data
pipeline. It is used to track subscribers and to publish messages when there
are subscribers present. It exists as a separate object to avoid channel
lookups at publish time, enabling very fast publish speeds and allowing
for heavy use while incurring very minimal cost. Channels are created with
[`diagnostics_channel.channel(name)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channelchannelname), constructing a channel directly
with `new Channel(name)` is not supported.

##### `channel.hasSubscribers`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelhassubscribers)

Added in: v15.1.0, v14.17.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If there are active subscribers

Check if there are active subscribers to this channel. This is helpful if
the message you want to send might be expensive to prepare.

This API is optional but helpful when trying to publish messages from very
performance-sensitive code.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

if (channel.hasSubscribers) {
  // There are subscribers, prepare and publish message
}const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

if (channel.hasSubscribers) {
  // There are subscribers, prepare and publish message
}copy
```

##### `channel.publish(message)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelpublishmessage)

Added in: v15.1.0, v14.17.0

- `message` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The message to send to the channel subscribers

Publish a message to any subscribers to the channel. This will trigger
message handlers synchronously so they will execute within the same context.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

channel.publish({
  some: 'message',
});const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

channel.publish({
  some: 'message',
});copy
```

##### `channel.subscribe(onMessage)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelsubscribeonmessage)

History

| Version | Changes |
| --- | --- |
| v24.8.0, v22.20.0 | Deprecation revoked. |
| v18.7.0, v16.17.0 | Documentation-only deprecation. |
| v15.1.0, v14.17.0 | Added in: v15.1.0, v14.17.0 |

- `onMessage` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The handler to receive channel messages

  - `message` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The message data
  - `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Symbol_type) The name of the channel

Register a message handler to subscribe to this channel. This message handler
will be run synchronously whenever a message is published to the channel. Any
errors thrown in the message handler will trigger an [`'uncaughtException'`](https://nodejs.org/docs/latest/api/process.html#event-uncaughtexception).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) => {
  // Received data
});const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) => {
  // Received data
});copy
```

##### `channel.unsubscribe(onMessage)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelunsubscribeonmessage)

History

| Version | Changes |
| --- | --- |
| v24.8.0, v22.20.0 | Deprecation revoked. |
| v18.7.0, v16.17.0 | Documentation-only deprecation. |
| v17.1.0, v16.14.0, v14.19.0 | Added return value. Added to channels without subscribers. |
| v15.1.0, v14.17.0 | Added in: v15.1.0, v14.17.0 |

- `onMessage` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The previous subscribed handler to remove
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the handler was found, `false` otherwise.

Remove a message handler previously registered to this channel with
[`channel.subscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelsubscribeonmessage).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

channel.subscribe(onMessage);

channel.unsubscribe(onMessage);const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

channel.subscribe(onMessage);

channel.unsubscribe(onMessage);copy
```

##### `channel.bindStore(store[, transform])`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelbindstorestore-transform)

Added in: v19.9.0, v18.19.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

- `store` [<AsyncLocalStorage>](https://nodejs.org/docs/latest/api/async_context.html#class-asynclocalstorage) The store to which to bind the context data
- `transform` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Transform context data before setting the store context

When [`channel.runStores(context, ...)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args) is called, the given context data
will be applied to any store bound to the channel. If the store has already been
bound the previous `transform` function will be replaced with the new one.
The `transform` function may be omitted to set the given context data as the
context directly.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (data) => {
  return { data };
});const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (data) => {
  return { data };
});copy
```

##### `channel.unbindStore(store)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelunbindstorestore)

Added in: v19.9.0, v18.19.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

- `store` [<AsyncLocalStorage>](https://nodejs.org/docs/latest/api/async_context.html#class-asynclocalstorage) The store to unbind from the channel.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the store was found, `false` otherwise.

Remove a message handler previously registered to this channel with
[`channel.bindStore(store)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelbindstorestore-transform).

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store);
channel.unbindStore(store);const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store);
channel.unbindStore(store);copy
```

##### `channel.runStores(context, fn[, thisArg[, ...args]])`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#channelrunstorescontext-fn-thisarg-args)

Added in: v19.9.0, v18.19.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

- `context` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Message to send to subscribers and bind to stores
- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Handler to run within the entered storage context
- `thisArg` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The receiver to be used for the function call.
- `...args` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional arguments to pass to the function.

Applies the given data to any AsyncLocalStorage instances bound to the channel
for the duration of the given function, then publishes to the channel within
the scope of that data is applied to the stores.

If a transform function was given to [`channel.bindStore(store)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelbindstorestore-transform) it will be
applied to transform the message data before it becomes the context value for
the store. The prior storage context is accessible from within the transform
function in cases where context linking is required.

The context applied to the store should be accessible in any async code which
continues from execution which began during the given function, however
there are some situations in which [context loss](https://nodejs.org/docs/latest/api/async_context.html#troubleshooting-context-loss) may occur.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (message) => {
  const parent = store.getStore();
  return new Span(message, parent);
});
channel.runStores({ some: 'message' }, () => {
  store.getStore(); // Span({ some: 'message' })
});const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (message) => {
  const parent = store.getStore();
  return new Span(message, parent);
});
channel.runStores({ some: 'message' }, () => {
  store.getStore(); // Span({ some: 'message' })
});copy
```

#### Class: `TracingChannel`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#class-tracingchannel)

Added in: v19.9.0, v18.19.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

The class `TracingChannel` is a collection of [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels) which
together express a single traceable action. It is used to formalize and
simplify the process of producing events for tracing application flow.
[`diagnostics_channel.tracingChannel()`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#diagnostics_channeltracingchannelnameorchannels) is used to construct a
`TracingChannel`. As with `Channel` it is recommended to create and reuse a
single `TracingChannel` at the top-level of the file rather than creating them
dynamically.

##### `tracingChannel.subscribe(subscribers)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchannelsubscribesubscribers)

Added in: v19.9.0, v18.19.0

- `subscribers` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Set of [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels) subscribers

  - `start` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent) subscriber
  - `end` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent) subscriber
  - `asyncStart` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`asyncStart` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent) subscriber
  - `asyncEnd` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`asyncEnd` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent) subscriber
  - `error` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent) subscriber

Helper to subscribe a collection of functions to the corresponding channels.
This is the same as calling [`channel.subscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelsubscribeonmessage) on each channel
individually.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.subscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.subscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});copy
```

##### `tracingChannel.unsubscribe(subscribers)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchannelunsubscribesubscribers)

Added in: v19.9.0, v18.19.0

- `subscribers` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Set of [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels) subscribers

  - `start` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent) subscriber
  - `end` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent) subscriber
  - `asyncStart` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`asyncStart` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent) subscriber
  - `asyncEnd` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`asyncEnd` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent) subscriber
  - `error` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent) subscriber
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if all handlers were successfully unsubscribed,
and `false` otherwise.

Helper to unsubscribe a collection of functions from the corresponding channels.
This is the same as calling [`channel.unsubscribe(onMessage)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelunsubscribeonmessage) on each channel
individually.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.unsubscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.unsubscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});copy
```

##### `tracingChannel.traceSync(fn[, context[, thisArg[, ...args]]])`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchanneltracesyncfn-context-thisarg-args)

Added in: v19.9.0, v18.19.0

- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Function to wrap a trace around
- `context` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Shared object to correlate events through
- `thisArg` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The receiver to be used for the function call
- `...args` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional arguments to pass to the function
- Returns: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The return value of the given function

Trace a synchronous function call. This will always produce a [`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent)
and [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent) around the execution and may produce an [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent)
if the given function throws an error. This will run the given function using
[`channel.runStores(context, ...)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args) on the `start` channel which ensures all
events should have any bound stores set to match this trace context.

To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceSync(() => {
  // Do something
}, {
  some: 'thing',
});const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceSync(() => {
  // Do something
}, {
  some: 'thing',
});copy
```

##### `tracingChannel.tracePromise(fn[, context[, thisArg[, ...args]]])`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchanneltracepromisefn-context-thisarg-args)

Added in: v19.9.0, v18.19.0

- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Promise-returning function to wrap a trace around
- `context` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Shared object to correlate trace events through
- `thisArg` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The receiver to be used for the function call
- `...args` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional arguments to pass to the function
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Chained from promise returned by the given function

Trace a promise-returning function call. This will always produce a
[`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent) and [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent) around the synchronous portion of the
function execution, and will produce an [`asyncStart` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent) and
[`asyncEnd` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent) when a promise continuation is reached. It may also
produce an [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent) if the given function throws an error or the
returned promise rejects. This will run the given function using
[`channel.runStores(context, ...)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args) on the `start` channel which ensures all
events should have any bound stores set to match this trace context.

To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.tracePromise(async () => {
  // Do something
}, {
  some: 'thing',
});const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.tracePromise(async () => {
  // Do something
}, {
  some: 'thing',
});copy
```

##### `tracingChannel.traceCallback(fn[, position[, context[, thisArg[, ...args]]]])`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchanneltracecallbackfn-position-context-thisarg-args)

Added in: v19.9.0, v18.19.0

- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) callback using function to wrap a trace around
- `position` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Zero-indexed argument position of expected callback
(defaults to last argument if `undefined` is passed)
- `context` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Shared object to correlate trace events through (defaults
to `{}` if `undefined` is passed)
- `thisArg` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The receiver to be used for the function call
- `...args` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) arguments to pass to the function (must include the callback)
- Returns: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The return value of the given function

Trace a callback-receiving function call. The callback is expected to follow
the error as first arg convention typically used. This will always produce a
[`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent) and [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent) around the synchronous portion of the
function execution, and will produce a [`asyncStart` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent) and
[`asyncEnd` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent) around the callback execution. It may also produce an
[`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent) if the given function throws or the first argument passed to
the callback is set. This will run the given function using
[`channel.runStores(context, ...)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args) on the `start` channel which ensures all
events should have any bound stores set to match this trace context.

To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceCallback((arg1, callback) => {
  // Do something
  callback(null, 'result');
}, 1, {
  some: 'thing',
}, thisArg, arg1, callback);const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceCallback((arg1, callback) => {
  // Do something
  callback(null, 'result');
}, 1, {
  some: 'thing',
}, thisArg, arg1, callback);copy
```

The callback will also be run with [`channel.runStores(context, ...)`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#channelrunstorescontext-fn-thisarg-args) which
enables context loss recovery in some cases.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const channels = diagnostics_channel.tracingChannel('my-channel');
const myStore = new AsyncLocalStorage();

// The start channel sets the initial store data to something
// and stores that store data value on the trace context object
channels.start.bindStore(myStore, (data) => {
  const span = new Span(data);
  data.span = span;
  return span;
});

// Then asyncStart can restore from that data it stored previously
channels.asyncStart.bindStore(myStore, (data) => {
  return data.span;
});const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const channels = diagnostics_channel.tracingChannel('my-channel');
const myStore = new AsyncLocalStorage();

// The start channel sets the initial store data to something
// and stores that store data value on the trace context object
channels.start.bindStore(myStore, (data) => {
  const span = new Span(data);
  data.span = span;
  return span;
});

// Then asyncStart can restore from that data it stored previously
channels.asyncStart.bindStore(myStore, (data) => {
  return data.span;
});copy
```

##### `tracingChannel.hasSubscribers`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchannelhassubscribers)

Added in: v22.0.0, v20.13.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if any of the individual channels has a subscriber,
`false` if not.

This is a helper method available on a [`TracingChannel`](https://nodejs.org/docs/latest/api/diagnostics_channel.html#class-tracingchannel) instance to check if
any of the [TracingChannel Channels](https://nodejs.org/docs/latest/api/diagnostics_channel.html#tracingchannel-channels) have subscribers. A `true` is returned if
any of them have at least one subscriber, a `false` is returned otherwise.

```js mjs
import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

if (channels.hasSubscribers) {
  // Do something
}const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

if (channels.hasSubscribers) {
  // Do something
}copy
```

#### TracingChannel Channels[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#tracingchannel-channels)

A TracingChannel is a collection of several diagnostics\_channels representing
specific points in the execution lifecycle of a single traceable action. The
behavior is split into five diagnostics\_channels consisting of `start`,
`end`, `asyncStart`, `asyncEnd`, and `error`. A single traceable action will
share the same event object between all events, this can be helpful for
managing correlation through a weakmap.

These event objects will be extended with `result` or `error` values when
the task "completes". In the case of a synchronous task the `result` will be
the return value and the `error` will be anything thrown from the function.
With callback-based async functions the `result` will be the second argument
of the callback while the `error` will either be a thrown error visible in the
`end` event or the first callback argument in either of the `asyncStart` or
`asyncEnd` events.

To ensure only correct trace graphs are formed, events should only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins should not receive future events from that trace,
only future traces will be seen.

Tracing channels should follow a naming pattern of:

- `tracing:module.class.method:start` or `tracing:module.function:start`
- `tracing:module.class.method:end` or `tracing:module.function:end`
- `tracing:module.class.method:asyncStart` or `tracing:module.function:asyncStart`
- `tracing:module.class.method:asyncEnd` or `tracing:module.function:asyncEnd`
- `tracing:module.class.method:error` or `tracing:module.function:error`

##### `start(event)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#startevent)

- Name: `tracing:${name}:start`

The `start` event represents the point at which a function is called. At this
point the event data may contain function arguments or anything else available
at the very start of the execution of the function.

##### `end(event)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#endevent)

- Name: `tracing:${name}:end`

The `end` event represents the point at which a function call returns a value.
In the case of an async function this is when the promise returned not when the
function itself makes a return statement internally. At this point, if the
traced function was synchronous the `result` field will be set to the return
value of the function. Alternatively, the `error` field may be present to
represent any thrown errors.

It is recommended to listen specifically to the `error` event to track errors
as it may be possible for a traceable action to produce multiple errors. For
example, an async task which fails may be started internally before the sync
part of the task then throws an error.

##### `asyncStart(event)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#asyncstartevent)

- Name: `tracing:${name}:asyncStart`

The `asyncStart` event represents the callback or continuation of a traceable
function being reached. At this point things like callback arguments may be
available, or anything else expressing the "result" of the action.

For callbacks-based functions, the first argument of the callback will be
assigned to the `error` field, if not `undefined` or `null`, and the second
argument will be assigned to the `result` field.

For promises, the argument to the `resolve` path will be assigned to `result`
or the argument to the `reject` path will be assign to `error`.

It is recommended to listen specifically to the `error` event to track errors
as it may be possible for a traceable action to produce multiple errors. For
example, an async task which fails may be started internally before the sync
part of the task then throws an error.

##### `asyncEnd(event)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#asyncendevent)

- Name: `tracing:${name}:asyncEnd`

The `asyncEnd` event represents the callback of an asynchronous function
returning. It's not likely event data will change after the `asyncStart` event,
however it may be useful to see the point where the callback completes.

##### `error(event)`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#errorevent)

- Name: `tracing:${name}:error`

The `error` event represents any error produced by the traceable function
either synchronously or asynchronously. If an error is thrown in the
synchronous portion of the traced function the error will be assigned to the
`error` field of the event and the `error` event will be triggered. If an error
is received asynchronously through a callback or promise rejection it will also
be assigned to the `error` field of the event and trigger the `error` event.

It is possible for a single traceable function call to produce errors multiple
times so this should be considered when consuming this event. For example, if
another async task is triggered internally which fails and then the sync part
of the function then throws and error two `error` events will be emitted, one
for the sync error and one for the async error.

#### Built-in Channels[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#built-in-channels)

##### Console[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#console)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'console.log'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-consolelog)

- `args` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Emitted when `console.log()` is called. Receives and array of the arguments
passed to `console.log()`.

###### Event: `'console.info'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-consoleinfo)

- `args` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Emitted when `console.info()` is called. Receives and array of the arguments
passed to `console.info()`.

###### Event: `'console.debug'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-consoledebug)

- `args` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Emitted when `console.debug()` is called. Receives and array of the arguments
passed to `console.debug()`.

###### Event: `'console.warn'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-consolewarn)

- `args` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Emitted when `console.warn()` is called. Receives and array of the arguments
passed to `console.warn()`.

###### Event: `'console.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-consoleerror)

- `args` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Emitted when `console.error()` is called. Receives and array of the arguments
passed to `console.error()`.

##### HTTP[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#http)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'http.client.request.created'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpclientrequestcreated)

- `request` [<http.ClientRequest>](https://nodejs.org/docs/latest/api/http.html#class-httpclientrequest)

Emitted when client creates a request object.
Unlike `http.client.request.start`, this event is emitted before the request has been sent.

###### Event: `'http.client.request.start'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpclientrequeststart)

- `request` [<http.ClientRequest>](https://nodejs.org/docs/latest/api/http.html#class-httpclientrequest)

Emitted when client starts a request.

###### Event: `'http.client.request.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpclientrequesterror)

- `request` [<http.ClientRequest>](https://nodejs.org/docs/latest/api/http.html#class-httpclientrequest)
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when an error occurs during a client request.

###### Event: `'http.client.response.finish'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpclientresponsefinish)

- `request` [<http.ClientRequest>](https://nodejs.org/docs/latest/api/http.html#class-httpclientrequest)
- `response` [<http.IncomingMessage>](https://nodejs.org/docs/latest/api/http.html#class-httpincomingmessage)

Emitted when client receives a response.

###### Event: `'http.server.request.start'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpserverrequeststart)

- `request` [<http.IncomingMessage>](https://nodejs.org/docs/latest/api/http.html#class-httpincomingmessage)
- `response` [<http.ServerResponse>](https://nodejs.org/docs/latest/api/http.html#class-httpserverresponse)
- `socket` [<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket)
- `server` [<http.Server>](https://nodejs.org/docs/latest/api/http.html#class-httpserver)

Emitted when server receives a request.

###### Event: `'http.server.response.created'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpserverresponsecreated)

- `request` [<http.IncomingMessage>](https://nodejs.org/docs/latest/api/http.html#class-httpincomingmessage)
- `response` [<http.ServerResponse>](https://nodejs.org/docs/latest/api/http.html#class-httpserverresponse)

Emitted when server creates a response.
The event is emitted before the response is sent.

###### Event: `'http.server.response.finish'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-httpserverresponsefinish)

- `request` [<http.IncomingMessage>](https://nodejs.org/docs/latest/api/http.html#class-httpincomingmessage)
- `response` [<http.ServerResponse>](https://nodejs.org/docs/latest/api/http.html#class-httpserverresponse)
- `socket` [<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket)
- `server` [<http.Server>](https://nodejs.org/docs/latest/api/http.html#class-httpserver)

Emitted when server sends a response.

##### HTTP/2[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#http2)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'http2.client.stream.created'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2clientstreamcreated)

- `stream` [<ClientHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-clienthttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)

Emitted when a stream is created on the client.

###### Event: `'http2.client.stream.start'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2clientstreamstart)

- `stream` [<ClientHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-clienthttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)

Emitted when a stream is started on the client.

###### Event: `'http2.client.stream.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2clientstreamerror)

- `stream` [<ClientHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-clienthttp2stream)
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when an error occurs during the processing of a stream on the client.

###### Event: `'http2.client.stream.finish'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2clientstreamfinish)

- `stream` [<ClientHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-clienthttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)
- `flags` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Emitted when a stream is received on the client.

###### Event: `'http2.client.stream.close'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2clientstreamclose)

- `stream` [<ClientHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-clienthttp2stream)

Emitted when a stream is closed on the client. The HTTP/2 error code used when
closing the stream can be retrieved using the `stream.rstCode` property.

###### Event: `'http2.server.stream.created'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2serverstreamcreated)

- `stream` [<ServerHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-serverhttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)

Emitted when a stream is created on the server.

###### Event: `'http2.server.stream.start'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2serverstreamstart)

- `stream` [<ServerHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-serverhttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)

Emitted when a stream is started on the server.

###### Event: `'http2.server.stream.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2serverstreamerror)

- `stream` [<ServerHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-serverhttp2stream)
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when an error occurs during the processing of a stream on the server.

###### Event: `'http2.server.stream.finish'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2serverstreamfinish)

- `stream` [<ServerHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-serverhttp2stream)
- `headers` [<HTTP/2 Headers Object>](https://nodejs.org/docs/latest/api/http2.html#headers-object)
- `flags` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Emitted when a stream is sent on the server.

###### Event: `'http2.server.stream.close'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-http2serverstreamclose)

- `stream` [<ServerHttp2Stream>](https://nodejs.org/docs/latest/api/http2.html#class-serverhttp2stream)

Emitted when a stream is closed on the server. The HTTP/2 error code used when
closing the stream can be retrieved using the `stream.rstCode` property.

##### Modules[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#modules)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'module.require.start'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-modulerequirestart)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `require()`. Module name.
  - `parentFilename` Name of the module that attempted to require(id).

Emitted when `require()` is executed. See [`start` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#startevent).

###### Event: `'module.require.end'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-modulerequireend)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `require()`. Module name.
  - `parentFilename` Name of the module that attempted to require(id).

Emitted when a `require()` call returns. See [`end` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#endevent).

###### Event: `'module.require.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-modulerequireerror)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `require()`. Module name.
  - `parentFilename` Name of the module that attempted to require(id).
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when a `require()` throws an error. See [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent).

###### Event: `'module.import.asyncStart'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-moduleimportasyncstart)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `import()`. Module name.
  - `parentURL` URL object of the module that attempted to import(id).

Emitted when `import()` is invoked. See [`asyncStart` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncstartevent).

###### Event: `'module.import.asyncEnd'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-moduleimportasyncend)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `import()`. Module name.
  - `parentURL` URL object of the module that attempted to import(id).

Emitted when `import()` has completed. See [`asyncEnd` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#asyncendevent).

###### Event: `'module.import.error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-moduleimporterror)

- `event` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing the following properties

  - `id` Argument passed to `import()`. Module name.
  - `parentURL` URL object of the module that attempted to import(id).
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when a `import()` throws an error. See [`error` event](https://nodejs.org/docs/latest/api/diagnostics_channel.html#errorevent).

##### NET[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#net)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'net.client.socket'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-netclientsocket)

- `socket` [<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket) \| [<tls.TLSSocket>](https://nodejs.org/docs/latest/api/tls.html#class-tlstlssocket)

Emitted when a new TCP or pipe client socket connection is created.

###### Event: `'net.server.socket'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-netserversocket)

- `socket` [<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket)

Emitted when a new TCP or pipe connection is received.

###### Event: `'tracing:net.server.listen:asyncStart'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-tracingnetserverlistenasyncstart)

- `server` [<net.Server>](https://nodejs.org/docs/latest/api/net.html#class-netserver)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Emitted when [`net.Server.listen()`](https://nodejs.org/docs/latest/api/net.html#serverlisten) is invoked, before the port or pipe is actually setup.

###### Event: `'tracing:net.server.listen:asyncEnd'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-tracingnetserverlistenasyncend)

- `server` [<net.Server>](https://nodejs.org/docs/latest/api/net.html#class-netserver)

Emitted when [`net.Server.listen()`](https://nodejs.org/docs/latest/api/net.html#serverlisten) has completed and thus the server is ready to accept connection.

###### Event: `'tracing:net.server.listen:error'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-tracingnetserverlistenerror)

- `server` [<net.Server>](https://nodejs.org/docs/latest/api/net.html#class-netserver)
- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when [`net.Server.listen()`](https://nodejs.org/docs/latest/api/net.html#serverlisten) is returning an error.

##### UDP[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#udp)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

###### Event: `'udp.socket'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-udpsocket)

- `socket` [<dgram.Socket>](https://nodejs.org/docs/latest/api/dgram.html#class-dgramsocket)

Emitted when a new UDP socket is created.

##### Process[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#process)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

Added in: v16.18.0

###### Event: `'child_process'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-child_process)

- `process` [<ChildProcess>](https://nodejs.org/docs/latest/api/child_process.html#class-childprocess)

Emitted when a new process is created.

###### Event: `'execve'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-execve)

- `execPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `args` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `env` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Emitted when [`process.execve()`](https://nodejs.org/docs/latest/api/process.html#processexecvefile-args-env) is invoked.

##### Worker Thread[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#worker-thread)

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

Added in: v16.18.0

###### Event: `'worker_threads'`[\#](https://nodejs.org/docs/latest/api/diagnostics_channel.html\#event-worker_threads)

- `worker` [<Worker>](https://nodejs.org/docs/latest/api/worker_threads.html#class-worker)

Emitted when a new thread is created.