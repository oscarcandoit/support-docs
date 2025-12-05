---
source: https://nodejs.org/docs/latest/api/globals.html
scraped_at: 2025-10-20T14:09:40.718Z
title: Global objects | Node.js v25.0.0 Documentation
description: 
category: core
module: globals
---

[Skip to content](https://nodejs.org/docs/latest/api/globals.html#apicontent)

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
- [Table of contents](https://nodejs.org/docs/latest/api/globals.html#toc-picker)




- [Global objects](https://nodejs.org/docs/latest/api/globals.html#global-objects)
  - [Class: `AbortController`](https://nodejs.org/docs/latest/api/globals.html#class-abortcontroller)
    - [`abortController.abort([reason])`](https://nodejs.org/docs/latest/api/globals.html#abortcontrollerabortreason)
    - [`abortController.signal`](https://nodejs.org/docs/latest/api/globals.html#abortcontrollersignal)
    - [Class: `AbortSignal`](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal)
      - [Static method: `AbortSignal.abort([reason])`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignalabortreason)
      - [Static method: `AbortSignal.timeout(delay)`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignaltimeoutdelay)
      - [Static method: `AbortSignal.any(signals)`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignalanysignals)
      - [Event: `'abort'`](https://nodejs.org/docs/latest/api/globals.html#event-abort)
      - [`abortSignal.aborted`](https://nodejs.org/docs/latest/api/globals.html#abortsignalaborted)
      - [`abortSignal.onabort`](https://nodejs.org/docs/latest/api/globals.html#abortsignalonabort)
      - [`abortSignal.reason`](https://nodejs.org/docs/latest/api/globals.html#abortsignalreason)
      - [`abortSignal.throwIfAborted()`](https://nodejs.org/docs/latest/api/globals.html#abortsignalthrowifaborted)
  - [Class: `Blob`](https://nodejs.org/docs/latest/api/globals.html#class-blob)
  - [Class: `Buffer`](https://nodejs.org/docs/latest/api/globals.html#class-buffer)
  - [Class: `ByteLengthQueuingStrategy`](https://nodejs.org/docs/latest/api/globals.html#class-bytelengthqueuingstrategy)
  - [`__dirname`](https://nodejs.org/docs/latest/api/globals.html#__dirname)
  - [`__filename`](https://nodejs.org/docs/latest/api/globals.html#__filename)
  - [`atob(data)`](https://nodejs.org/docs/latest/api/globals.html#atobdata)
  - [Class: `BroadcastChannel`](https://nodejs.org/docs/latest/api/globals.html#class-broadcastchannel)
  - [`btoa(data)`](https://nodejs.org/docs/latest/api/globals.html#btoadata)
  - [`clearImmediate(immediateObject)`](https://nodejs.org/docs/latest/api/globals.html#clearimmediateimmediateobject)
  - [`clearInterval(intervalObject)`](https://nodejs.org/docs/latest/api/globals.html#clearintervalintervalobject)
  - [`clearTimeout(timeoutObject)`](https://nodejs.org/docs/latest/api/globals.html#cleartimeouttimeoutobject)
  - [Class: `CloseEvent`](https://nodejs.org/docs/latest/api/globals.html#class-closeevent)
  - [Class: `CompressionStream`](https://nodejs.org/docs/latest/api/globals.html#class-compressionstream)
  - [`console`](https://nodejs.org/docs/latest/api/globals.html#console)
  - [Class: `CountQueuingStrategy`](https://nodejs.org/docs/latest/api/globals.html#class-countqueuingstrategy)
  - [Class: `Crypto`](https://nodejs.org/docs/latest/api/globals.html#class-crypto)
  - [`crypto`](https://nodejs.org/docs/latest/api/globals.html#crypto)
  - [Class: `CryptoKey`](https://nodejs.org/docs/latest/api/globals.html#class-cryptokey)
  - [Class: `CustomEvent`](https://nodejs.org/docs/latest/api/globals.html#class-customevent)
  - [Class: `DecompressionStream`](https://nodejs.org/docs/latest/api/globals.html#class-decompressionstream)
  - [`ErrorEvent`](https://nodejs.org/docs/latest/api/globals.html#errorevent)
  - [Class: `Event`](https://nodejs.org/docs/latest/api/globals.html#class-event)
  - [Class: `EventSource`](https://nodejs.org/docs/latest/api/globals.html#class-eventsource)
  - [Class: `EventTarget`](https://nodejs.org/docs/latest/api/globals.html#class-eventtarget)
  - [`exports`](https://nodejs.org/docs/latest/api/globals.html#exports)
  - [`fetch`](https://nodejs.org/docs/latest/api/globals.html#fetch)
    - [Custom dispatcher](https://nodejs.org/docs/latest/api/globals.html#custom-dispatcher)
    - [Related classes](https://nodejs.org/docs/latest/api/globals.html#related-classes)
  - [Class: `File`](https://nodejs.org/docs/latest/api/globals.html#class-file)
  - [Class: `FormData`](https://nodejs.org/docs/latest/api/globals.html#class-formdata)
  - [`global`](https://nodejs.org/docs/latest/api/globals.html#global)
  - [Class: `Headers`](https://nodejs.org/docs/latest/api/globals.html#class-headers)
  - [`localStorage`](https://nodejs.org/docs/latest/api/globals.html#localstorage)
  - [Class: `MessageChannel`](https://nodejs.org/docs/latest/api/globals.html#class-messagechannel)
  - [Class: `MessageEvent`](https://nodejs.org/docs/latest/api/globals.html#class-messageevent)
  - [Class: `MessagePort`](https://nodejs.org/docs/latest/api/globals.html#class-messageport)
  - [`module`](https://nodejs.org/docs/latest/api/globals.html#module)
  - [Class: `Navigator`](https://nodejs.org/docs/latest/api/globals.html#class-navigator)
  - [`navigator`](https://nodejs.org/docs/latest/api/globals.html#navigator)
    - [`navigator.hardwareConcurrency`](https://nodejs.org/docs/latest/api/globals.html#navigatorhardwareconcurrency)
    - [`navigator.language`](https://nodejs.org/docs/latest/api/globals.html#navigatorlanguage)
    - [`navigator.languages`](https://nodejs.org/docs/latest/api/globals.html#navigatorlanguages)
    - [`navigator.platform`](https://nodejs.org/docs/latest/api/globals.html#navigatorplatform)
    - [`navigator.userAgent`](https://nodejs.org/docs/latest/api/globals.html#navigatoruseragent)
    - [`navigator.locks`](https://nodejs.org/docs/latest/api/globals.html#navigatorlocks)
  - [Class: `PerformanceEntry`](https://nodejs.org/docs/latest/api/globals.html#class-performanceentry)
  - [Class: `PerformanceMark`](https://nodejs.org/docs/latest/api/globals.html#class-performancemark)
  - [Class: `PerformanceMeasure`](https://nodejs.org/docs/latest/api/globals.html#class-performancemeasure)
  - [Class: `PerformanceObserver`](https://nodejs.org/docs/latest/api/globals.html#class-performanceobserver)
  - [Class: `PerformanceObserverEntryList`](https://nodejs.org/docs/latest/api/globals.html#class-performanceobserverentrylist)
  - [Class: `PerformanceResourceTiming`](https://nodejs.org/docs/latest/api/globals.html#class-performanceresourcetiming)
  - [`performance`](https://nodejs.org/docs/latest/api/globals.html#performance)
  - [`process`](https://nodejs.org/docs/latest/api/globals.html#process)
  - [`queueMicrotask(callback)`](https://nodejs.org/docs/latest/api/globals.html#queuemicrotaskcallback)
  - [Class: `ReadableByteStreamController`](https://nodejs.org/docs/latest/api/globals.html#class-readablebytestreamcontroller)
  - [Class: `ReadableStream`](https://nodejs.org/docs/latest/api/globals.html#class-readablestream)
  - [Class: `ReadableStreamBYOBReader`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreambyobreader)
  - [Class: `ReadableStreamBYOBRequest`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreambyobrequest)
  - [Class: `ReadableStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreamdefaultcontroller)
  - [Class: `ReadableStreamDefaultReader`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreamdefaultreader)
  - [`require()`](https://nodejs.org/docs/latest/api/globals.html#require)
  - [Class: `Response`](https://nodejs.org/docs/latest/api/globals.html#class-response)
  - [Class: `Request`](https://nodejs.org/docs/latest/api/globals.html#class-request)
  - [`sessionStorage`](https://nodejs.org/docs/latest/api/globals.html#sessionstorage)
  - [`setImmediate(callback[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#setimmediatecallback-args)
  - [`setInterval(callback, delay[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#setintervalcallback-delay-args)
  - [`setTimeout(callback, delay[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#settimeoutcallback-delay-args)
  - [Class: `Storage`](https://nodejs.org/docs/latest/api/globals.html#class-storage)
  - [`structuredClone(value[, options])`](https://nodejs.org/docs/latest/api/globals.html#structuredclonevalue-options)
  - [Class: `SubtleCrypto`](https://nodejs.org/docs/latest/api/globals.html#class-subtlecrypto)
  - [Class: `DOMException`](https://nodejs.org/docs/latest/api/globals.html#class-domexception)
  - [Class: `TextDecoder`](https://nodejs.org/docs/latest/api/globals.html#class-textdecoder)
  - [Class: `TextDecoderStream`](https://nodejs.org/docs/latest/api/globals.html#class-textdecoderstream)
  - [Class: `TextEncoder`](https://nodejs.org/docs/latest/api/globals.html#class-textencoder)
  - [Class: `TextEncoderStream`](https://nodejs.org/docs/latest/api/globals.html#class-textencoderstream)
  - [Class: `TransformStream`](https://nodejs.org/docs/latest/api/globals.html#class-transformstream)
  - [Class: `TransformStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-transformstreamdefaultcontroller)
  - [Class: `URL`](https://nodejs.org/docs/latest/api/globals.html#class-url)
  - [Class: `URLPattern`](https://nodejs.org/docs/latest/api/globals.html#class-urlpattern)
  - [Class: `URLSearchParams`](https://nodejs.org/docs/latest/api/globals.html#class-urlsearchparams)
  - [Class: `WebAssembly`](https://nodejs.org/docs/latest/api/globals.html#class-webassembly)
  - [Class: `WebSocket`](https://nodejs.org/docs/latest/api/globals.html#class-websocket)
  - [Class: `WritableStream`](https://nodejs.org/docs/latest/api/globals.html#class-writablestream)
  - [Class: `WritableStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-writablestreamdefaultcontroller)
  - [Class: `WritableStreamDefaultWriter`](https://nodejs.org/docs/latest/api/globals.html#class-writablestreamdefaultwriter)

- [Index](https://nodejs.org/docs/latest/api/globals.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/docs/latest/api/globals.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/globals.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/globals.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/globals.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/globals.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/globals.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/globals.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/globals.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/globals.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/globals.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/globals.html)
11. [14.x](https://nodejs.org/docs/latest-v14.x/api/globals.html)
12. [13.x](https://nodejs.org/docs/latest-v13.x/api/globals.html)
13. [12.x](https://nodejs.org/docs/latest-v12.x/api/globals.html)
14. [11.x](https://nodejs.org/docs/latest-v11.x/api/globals.html)
15. [10.x](https://nodejs.org/docs/latest-v10.x/api/globals.html)
16. [9.x](https://nodejs.org/docs/latest-v9.x/api/globals.html)
17. [8.x](https://nodejs.org/docs/latest-v8.x/api/globals.html)
18. [7.x](https://nodejs.org/docs/latest-v7.x/api/globals.html)
19. [6.x](https://nodejs.org/docs/latest-v6.x/api/globals.html)
20. [5.x](https://nodejs.org/docs/latest-v5.x/api/globals.html)
21. [4.x](https://nodejs.org/docs/latest-v4.x/api/globals.html)
22. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/globals.html)
23. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/globals.html)

- [Options](https://nodejs.org/docs/latest/api/globals.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/globals.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/globals.md)

* * *

Table of contents

- [Global objects](https://nodejs.org/docs/latest/api/globals.html#global-objects)
  - [Class: `AbortController`](https://nodejs.org/docs/latest/api/globals.html#class-abortcontroller)
    - [`abortController.abort([reason])`](https://nodejs.org/docs/latest/api/globals.html#abortcontrollerabortreason)
    - [`abortController.signal`](https://nodejs.org/docs/latest/api/globals.html#abortcontrollersignal)
    - [Class: `AbortSignal`](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal)
      - [Static method: `AbortSignal.abort([reason])`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignalabortreason)
      - [Static method: `AbortSignal.timeout(delay)`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignaltimeoutdelay)
      - [Static method: `AbortSignal.any(signals)`](https://nodejs.org/docs/latest/api/globals.html#static-method-abortsignalanysignals)
      - [Event: `'abort'`](https://nodejs.org/docs/latest/api/globals.html#event-abort)
      - [`abortSignal.aborted`](https://nodejs.org/docs/latest/api/globals.html#abortsignalaborted)
      - [`abortSignal.onabort`](https://nodejs.org/docs/latest/api/globals.html#abortsignalonabort)
      - [`abortSignal.reason`](https://nodejs.org/docs/latest/api/globals.html#abortsignalreason)
      - [`abortSignal.throwIfAborted()`](https://nodejs.org/docs/latest/api/globals.html#abortsignalthrowifaborted)
  - [Class: `Blob`](https://nodejs.org/docs/latest/api/globals.html#class-blob)
  - [Class: `Buffer`](https://nodejs.org/docs/latest/api/globals.html#class-buffer)
  - [Class: `ByteLengthQueuingStrategy`](https://nodejs.org/docs/latest/api/globals.html#class-bytelengthqueuingstrategy)
  - [`__dirname`](https://nodejs.org/docs/latest/api/globals.html#__dirname)
  - [`__filename`](https://nodejs.org/docs/latest/api/globals.html#__filename)
  - [`atob(data)`](https://nodejs.org/docs/latest/api/globals.html#atobdata)
  - [Class: `BroadcastChannel`](https://nodejs.org/docs/latest/api/globals.html#class-broadcastchannel)
  - [`btoa(data)`](https://nodejs.org/docs/latest/api/globals.html#btoadata)
  - [`clearImmediate(immediateObject)`](https://nodejs.org/docs/latest/api/globals.html#clearimmediateimmediateobject)
  - [`clearInterval(intervalObject)`](https://nodejs.org/docs/latest/api/globals.html#clearintervalintervalobject)
  - [`clearTimeout(timeoutObject)`](https://nodejs.org/docs/latest/api/globals.html#cleartimeouttimeoutobject)
  - [Class: `CloseEvent`](https://nodejs.org/docs/latest/api/globals.html#class-closeevent)
  - [Class: `CompressionStream`](https://nodejs.org/docs/latest/api/globals.html#class-compressionstream)
  - [`console`](https://nodejs.org/docs/latest/api/globals.html#console)
  - [Class: `CountQueuingStrategy`](https://nodejs.org/docs/latest/api/globals.html#class-countqueuingstrategy)
  - [Class: `Crypto`](https://nodejs.org/docs/latest/api/globals.html#class-crypto)
  - [`crypto`](https://nodejs.org/docs/latest/api/globals.html#crypto)
  - [Class: `CryptoKey`](https://nodejs.org/docs/latest/api/globals.html#class-cryptokey)
  - [Class: `CustomEvent`](https://nodejs.org/docs/latest/api/globals.html#class-customevent)
  - [Class: `DecompressionStream`](https://nodejs.org/docs/latest/api/globals.html#class-decompressionstream)
  - [`ErrorEvent`](https://nodejs.org/docs/latest/api/globals.html#errorevent)
  - [Class: `Event`](https://nodejs.org/docs/latest/api/globals.html#class-event)
  - [Class: `EventSource`](https://nodejs.org/docs/latest/api/globals.html#class-eventsource)
  - [Class: `EventTarget`](https://nodejs.org/docs/latest/api/globals.html#class-eventtarget)
  - [`exports`](https://nodejs.org/docs/latest/api/globals.html#exports)
  - [`fetch`](https://nodejs.org/docs/latest/api/globals.html#fetch)
    - [Custom dispatcher](https://nodejs.org/docs/latest/api/globals.html#custom-dispatcher)
    - [Related classes](https://nodejs.org/docs/latest/api/globals.html#related-classes)
  - [Class: `File`](https://nodejs.org/docs/latest/api/globals.html#class-file)
  - [Class: `FormData`](https://nodejs.org/docs/latest/api/globals.html#class-formdata)
  - [`global`](https://nodejs.org/docs/latest/api/globals.html#global)
  - [Class: `Headers`](https://nodejs.org/docs/latest/api/globals.html#class-headers)
  - [`localStorage`](https://nodejs.org/docs/latest/api/globals.html#localstorage)
  - [Class: `MessageChannel`](https://nodejs.org/docs/latest/api/globals.html#class-messagechannel)
  - [Class: `MessageEvent`](https://nodejs.org/docs/latest/api/globals.html#class-messageevent)
  - [Class: `MessagePort`](https://nodejs.org/docs/latest/api/globals.html#class-messageport)
  - [`module`](https://nodejs.org/docs/latest/api/globals.html#module)
  - [Class: `Navigator`](https://nodejs.org/docs/latest/api/globals.html#class-navigator)
  - [`navigator`](https://nodejs.org/docs/latest/api/globals.html#navigator)
    - [`navigator.hardwareConcurrency`](https://nodejs.org/docs/latest/api/globals.html#navigatorhardwareconcurrency)
    - [`navigator.language`](https://nodejs.org/docs/latest/api/globals.html#navigatorlanguage)
    - [`navigator.languages`](https://nodejs.org/docs/latest/api/globals.html#navigatorlanguages)
    - [`navigator.platform`](https://nodejs.org/docs/latest/api/globals.html#navigatorplatform)
    - [`navigator.userAgent`](https://nodejs.org/docs/latest/api/globals.html#navigatoruseragent)
    - [`navigator.locks`](https://nodejs.org/docs/latest/api/globals.html#navigatorlocks)
  - [Class: `PerformanceEntry`](https://nodejs.org/docs/latest/api/globals.html#class-performanceentry)
  - [Class: `PerformanceMark`](https://nodejs.org/docs/latest/api/globals.html#class-performancemark)
  - [Class: `PerformanceMeasure`](https://nodejs.org/docs/latest/api/globals.html#class-performancemeasure)
  - [Class: `PerformanceObserver`](https://nodejs.org/docs/latest/api/globals.html#class-performanceobserver)
  - [Class: `PerformanceObserverEntryList`](https://nodejs.org/docs/latest/api/globals.html#class-performanceobserverentrylist)
  - [Class: `PerformanceResourceTiming`](https://nodejs.org/docs/latest/api/globals.html#class-performanceresourcetiming)
  - [`performance`](https://nodejs.org/docs/latest/api/globals.html#performance)
  - [`process`](https://nodejs.org/docs/latest/api/globals.html#process)
  - [`queueMicrotask(callback)`](https://nodejs.org/docs/latest/api/globals.html#queuemicrotaskcallback)
  - [Class: `ReadableByteStreamController`](https://nodejs.org/docs/latest/api/globals.html#class-readablebytestreamcontroller)
  - [Class: `ReadableStream`](https://nodejs.org/docs/latest/api/globals.html#class-readablestream)
  - [Class: `ReadableStreamBYOBReader`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreambyobreader)
  - [Class: `ReadableStreamBYOBRequest`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreambyobrequest)
  - [Class: `ReadableStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreamdefaultcontroller)
  - [Class: `ReadableStreamDefaultReader`](https://nodejs.org/docs/latest/api/globals.html#class-readablestreamdefaultreader)
  - [`require()`](https://nodejs.org/docs/latest/api/globals.html#require)
  - [Class: `Response`](https://nodejs.org/docs/latest/api/globals.html#class-response)
  - [Class: `Request`](https://nodejs.org/docs/latest/api/globals.html#class-request)
  - [`sessionStorage`](https://nodejs.org/docs/latest/api/globals.html#sessionstorage)
  - [`setImmediate(callback[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#setimmediatecallback-args)
  - [`setInterval(callback, delay[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#setintervalcallback-delay-args)
  - [`setTimeout(callback, delay[, ...args])`](https://nodejs.org/docs/latest/api/globals.html#settimeoutcallback-delay-args)
  - [Class: `Storage`](https://nodejs.org/docs/latest/api/globals.html#class-storage)
  - [`structuredClone(value[, options])`](https://nodejs.org/docs/latest/api/globals.html#structuredclonevalue-options)
  - [Class: `SubtleCrypto`](https://nodejs.org/docs/latest/api/globals.html#class-subtlecrypto)
  - [Class: `DOMException`](https://nodejs.org/docs/latest/api/globals.html#class-domexception)
  - [Class: `TextDecoder`](https://nodejs.org/docs/latest/api/globals.html#class-textdecoder)
  - [Class: `TextDecoderStream`](https://nodejs.org/docs/latest/api/globals.html#class-textdecoderstream)
  - [Class: `TextEncoder`](https://nodejs.org/docs/latest/api/globals.html#class-textencoder)
  - [Class: `TextEncoderStream`](https://nodejs.org/docs/latest/api/globals.html#class-textencoderstream)
  - [Class: `TransformStream`](https://nodejs.org/docs/latest/api/globals.html#class-transformstream)
  - [Class: `TransformStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-transformstreamdefaultcontroller)
  - [Class: `URL`](https://nodejs.org/docs/latest/api/globals.html#class-url)
  - [Class: `URLPattern`](https://nodejs.org/docs/latest/api/globals.html#class-urlpattern)
  - [Class: `URLSearchParams`](https://nodejs.org/docs/latest/api/globals.html#class-urlsearchparams)
  - [Class: `WebAssembly`](https://nodejs.org/docs/latest/api/globals.html#class-webassembly)
  - [Class: `WebSocket`](https://nodejs.org/docs/latest/api/globals.html#class-websocket)
  - [Class: `WritableStream`](https://nodejs.org/docs/latest/api/globals.html#class-writablestream)
  - [Class: `WritableStreamDefaultController`](https://nodejs.org/docs/latest/api/globals.html#class-writablestreamdefaultcontroller)
  - [Class: `WritableStreamDefaultWriter`](https://nodejs.org/docs/latest/api/globals.html#class-writablestreamdefaultwriter)

## Global objects[\#](https://nodejs.org/docs/latest/api/globals.html\#global-objects)

[Stability: 2](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Stable

These objects are available in all modules.

The following variables may appear to be global but are not. They exist only in
the scope of [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html):

- [`__dirname`](https://nodejs.org/docs/latest/api/modules.html#__dirname)
- [`__filename`](https://nodejs.org/docs/latest/api/modules.html#__filename)
- [`exports`](https://nodejs.org/docs/latest/api/modules.html#exports)
- [`module`](https://nodejs.org/docs/latest/api/modules.html#module)
- [`require()`](https://nodejs.org/docs/latest/api/modules.html#requireid)

The objects listed here are specific to Node.js. There are [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
that are part of the JavaScript language itself, which are also globally
accessible.

### Class: `AbortController`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-abortcontroller)

History

| Version | Changes |
| --- | --- |
| v15.4.0 | No longer experimental. |
| v15.0.0, v14.17.0 | Added in: v15.0.0, v14.17.0 |

A utility class used to signal cancelation in selected `Promise`-based APIs.
The API is based on the Web API [<AbortController>](https://nodejs.org/docs/latest/api/globals.html#class-abortcontroller).

```js
const ac = new AbortController();

ac.signal.addEventListener('abort', () => console.log('Aborted!'),
                           { once: true });

ac.abort();

console.log(ac.signal.aborted);  // Prints true copy
```

#### `abortController.abort([reason])`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortcontrollerabortreason)

History

| Version | Changes |
| --- | --- |
| v17.2.0, v16.14.0 | Added the new optional reason argument. |
| v15.0.0, v14.17.0 | Added in: v15.0.0, v14.17.0 |

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) An optional reason, retrievable on the `AbortSignal`'s
`reason` property.

Triggers the abort signal, causing the `abortController.signal` to emit
the `'abort'` event.

#### `abortController.signal`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortcontrollersignal)

Added in: v15.0.0, v14.17.0

- Type: [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal)

#### Class: `AbortSignal`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-abortsignal)

Added in: v15.0.0, v14.17.0

- Extends: [<EventTarget>](https://nodejs.org/docs/latest/api/events.html#class-eventtarget)

The `AbortSignal` is used to notify observers when the
`abortController.abort()` method is called.

##### Static method: `AbortSignal.abort([reason])`[\#](https://nodejs.org/docs/latest/api/globals.html\#static-method-abortsignalabortreason)

History

| Version | Changes |
| --- | --- |
| v17.2.0, v16.14.0 | Added the new optional reason argument. |
| v15.12.0, v14.17.0 | Added in: v15.12.0, v14.17.0 |

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal)

Returns a new already aborted `AbortSignal`.

##### Static method: `AbortSignal.timeout(delay)`[\#](https://nodejs.org/docs/latest/api/globals.html\#static-method-abortsignaltimeoutdelay)

Added in: v17.3.0, v16.14.0

- `delay` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of milliseconds to wait before triggering
the AbortSignal.

Returns a new `AbortSignal` which will be aborted in `delay` milliseconds.

##### Static method: `AbortSignal.any(signals)`[\#](https://nodejs.org/docs/latest/api/globals.html\#static-method-abortsignalanysignals)

Added in: v20.3.0, v18.17.0

- `signals` [<AbortSignal\[\]>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) The `AbortSignal` s of which to compose a new `AbortSignal`.

Returns a new `AbortSignal` which will be aborted if any of the provided
signals are aborted. Its [`abortSignal.reason`](https://nodejs.org/docs/latest/api/globals.html#abortsignalreason) will be set to whichever
one of the `signals` caused it to be aborted.

##### Event: `'abort'`[\#](https://nodejs.org/docs/latest/api/globals.html\#event-abort)

Added in: v15.0.0, v14.17.0

The `'abort'` event is emitted when the `abortController.abort()` method
is called. The callback is invoked with a single object argument with a
single `type` property set to `'abort'`:

```js
const ac = new AbortController();

// Use either the onabort property...
ac.signal.onabort = () => console.log('aborted!');

// Or the EventTarget API...
ac.signal.addEventListener('abort', (event) => {
  console.log(event.type);  // Prints 'abort'
}, { once: true });

ac.abort(); copy
```

The `AbortController` with which the `AbortSignal` is associated will only
ever trigger the `'abort'` event once. We recommended that code check
that the `abortSignal.aborted` attribute is `false` before adding an `'abort'`
event listener.

Any event listeners attached to the `AbortSignal` should use the
`{ once: true }` option (or, if using the `EventEmitter` APIs to attach a
listener, use the `once()` method) to ensure that the event listener is
removed as soon as the `'abort'` event is handled. Failure to do so may
result in memory leaks.

##### `abortSignal.aborted`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortsignalaborted)

Added in: v15.0.0, v14.17.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) True after the `AbortController` has been aborted.

##### `abortSignal.onabort`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortsignalonabort)

Added in: v15.0.0, v14.17.0

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

An optional callback function that may be set by user code to be notified
when the `abortController.abort()` function has been called.

##### `abortSignal.reason`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortsignalreason)

Added in: v17.2.0, v16.14.0

- Type: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

An optional reason specified when the `AbortSignal` was triggered.

```js
const ac = new AbortController();
ac.abort(new Error('boom!'));
console.log(ac.signal.reason);  // Error: boom! copy
```

##### `abortSignal.throwIfAborted()`[\#](https://nodejs.org/docs/latest/api/globals.html\#abortsignalthrowifaborted)

Added in: v17.3.0, v16.17.0

If `abortSignal.aborted` is `true`, throws `abortSignal.reason`.

### Class: `Blob`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-blob)

Added in: v18.0.0

See [<Blob>](https://nodejs.org/docs/latest/api/buffer.html#class-blob).

### Class: `Buffer`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-buffer)

Added in: v0.1.103

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Used to handle binary data. See the [buffer section](https://nodejs.org/docs/latest/api/buffer.html).

### Class: `ByteLengthQueuingStrategy`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-bytelengthqueuingstrategy)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ByteLengthQueuingStrategy`](https://nodejs.org/docs/latest/api/webstreams.html#class-bytelengthqueuingstrategy).

### `__dirname`[\#](https://nodejs.org/docs/latest/api/globals.html\#__dirname)

This variable may appear to be global but is not. See [`__dirname`](https://nodejs.org/docs/latest/api/modules.html#__dirname).

### `__filename`[\#](https://nodejs.org/docs/latest/api/globals.html\#__filename)

This variable may appear to be global but is not. See [`__filename`](https://nodejs.org/docs/latest/api/modules.html#__filename).

### `atob(data)`[\#](https://nodejs.org/docs/latest/api/globals.html\#atobdata)

Added in: v16.0.0

[Stability: 3](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Legacy. Use `Buffer.from(data, 'base64')` instead.

Global alias for [`buffer.atob()`](https://nodejs.org/docs/latest/api/buffer.html#bufferatobdata).

### Class: `BroadcastChannel`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-broadcastchannel)

Added in: v18.0.0

See [<BroadcastChannel>](https://nodejs.org/docs/latest/api/worker_threads.html#class-broadcastchannel-extends-eventtarget).

### `btoa(data)`[\#](https://nodejs.org/docs/latest/api/globals.html\#btoadata)

Added in: v16.0.0

[Stability: 3](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Legacy. Use `buf.toString('base64')` instead.

Global alias for [`buffer.btoa()`](https://nodejs.org/docs/latest/api/buffer.html#bufferbtoadata).

### `clearImmediate(immediateObject)`[\#](https://nodejs.org/docs/latest/api/globals.html\#clearimmediateimmediateobject)

Added in: v0.9.1

[`clearImmediate`](https://nodejs.org/docs/latest/api/timers.html#clearimmediateimmediate) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### `clearInterval(intervalObject)`[\#](https://nodejs.org/docs/latest/api/globals.html\#clearintervalintervalobject)

Added in: v0.0.1

[`clearInterval`](https://nodejs.org/docs/latest/api/timers.html#clearintervaltimeout) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### `clearTimeout(timeoutObject)`[\#](https://nodejs.org/docs/latest/api/globals.html\#cleartimeouttimeoutobject)

Added in: v0.0.1

[`clearTimeout`](https://nodejs.org/docs/latest/api/timers.html#cleartimeouttimeout) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### Class: `CloseEvent`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-closeevent)

Added in: v23.0.0

A browser-compatible implementation of [<CloseEvent>](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent). Disable this API
with the [`--no-experimental-websocket`](https://nodejs.org/docs/latest/api/cli.html#--no-experimental-websocket) CLI flag.

### Class: `CompressionStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-compressionstream)

History

| Version | Changes |
| --- | --- |
| v24.7.0, v22.20.0 | format now accepts `brotli` value. |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`CompressionStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-compressionstream).

### `console`[\#](https://nodejs.org/docs/latest/api/globals.html\#console)

Added in: v0.1.100

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Used to print to stdout and stderr. See the [`console`](https://nodejs.org/docs/latest/api/console.html) section.

### Class: `CountQueuingStrategy`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-countqueuingstrategy)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`CountQueuingStrategy`](https://nodejs.org/docs/latest/api/webstreams.html#class-countqueuingstrategy).

### Class: `Crypto`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-crypto)

History

| Version | Changes |
| --- | --- |
| v23.0.0 | No longer experimental. |
| v19.0.0 | No longer behind `--experimental-global-webcrypto` CLI flag. |
| v17.6.0, v16.15.0 | Added in: v17.6.0, v16.15.0 |

A browser-compatible implementation of [<Crypto>](https://nodejs.org/docs/latest/api/webcrypto.html#class-crypto). This global is available
only if the Node.js binary was compiled with including support for the
`node:crypto` module.

### `crypto`[\#](https://nodejs.org/docs/latest/api/globals.html\#crypto)

History

| Version | Changes |
| --- | --- |
| v23.0.0 | No longer experimental. |
| v19.0.0 | No longer behind `--experimental-global-webcrypto` CLI flag. |
| v17.6.0, v16.15.0 | Added in: v17.6.0, v16.15.0 |

A browser-compatible implementation of the [Web Crypto API](https://nodejs.org/docs/latest/api/webcrypto.html).

### Class: `CryptoKey`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-cryptokey)

History

| Version | Changes |
| --- | --- |
| v23.0.0 | No longer experimental. |
| v19.0.0 | No longer behind `--experimental-global-webcrypto` CLI flag. |
| v17.6.0, v16.15.0 | Added in: v17.6.0, v16.15.0 |

A browser-compatible implementation of [<CryptoKey>](https://nodejs.org/docs/latest/api/webcrypto.html#class-cryptokey). This global is available
only if the Node.js binary was compiled with including support for the
`node:crypto` module.

### Class: `CustomEvent`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-customevent)

History

| Version | Changes |
| --- | --- |
| v23.0.0 | No longer experimental. |
| v22.1.0, v20.13.0 | CustomEvent is now stable. |
| v19.0.0 | No longer behind `--experimental-global-customevent` CLI flag. |
| v18.7.0, v16.17.0 | Added in: v18.7.0, v16.17.0 |

A browser-compatible implementation of [<CustomEvent>](https://nodejs.org/docs/latest/api/events.html#class-customevent).

### Class: `DecompressionStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-decompressionstream)

History

| Version | Changes |
| --- | --- |
| v24.7.0, v22.20.0 | format now accepts `brotli` value. |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`DecompressionStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-decompressionstream).

### `ErrorEvent`[\#](https://nodejs.org/docs/latest/api/globals.html\#errorevent)

Added in: v25.0.0

A browser-compatible implementation of [<ErrorEvent>](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent).

### Class: `Event`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-event)

History

| Version | Changes |
| --- | --- |
| v15.4.0 | No longer experimental. |
| v15.0.0 | Added in: v15.0.0 |

A browser-compatible implementation of the `Event` class. See
[`EventTarget` and `Event` API](https://nodejs.org/docs/latest/api/events.html#eventtarget-and-event-api) for more details.

### Class: `EventSource`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-eventsource)

Added in: v22.3.0, v20.18.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental. Enable this API with the [`--experimental-eventsource`](https://nodejs.org/docs/latest/api/cli.html#--experimental-eventsource)
CLI flag.

A browser-compatible implementation of [<EventSource>](https://developer.mozilla.org/en-US/docs/Web/API/EventSource).

### Class: `EventTarget`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-eventtarget)

History

| Version | Changes |
| --- | --- |
| v15.4.0 | No longer experimental. |
| v15.0.0 | Added in: v15.0.0 |

A browser-compatible implementation of the `EventTarget` class. See
[`EventTarget` and `Event` API](https://nodejs.org/docs/latest/api/events.html#eventtarget-and-event-api) for more details.

### `exports`[\#](https://nodejs.org/docs/latest/api/globals.html\#exports)

This variable may appear to be global but is not. See [`exports`](https://nodejs.org/docs/latest/api/modules.html#exports).

### `fetch`[\#](https://nodejs.org/docs/latest/api/globals.html\#fetch)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | No longer behind `--experimental-fetch` CLI flag. |
| v17.5.0, v16.15.0 | Added in: v17.5.0, v16.15.0 |

A browser-compatible implementation of the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) function.

```js mjs
const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data);
} copy
```

The implementation is based upon [undici](https://undici.nodejs.org/), an HTTP/1.1 client
written from scratch for Node.js. You can figure out which version of `undici` is bundled
in your Node.js process reading the `process.versions.undici` property.

#### Custom dispatcher[\#](https://nodejs.org/docs/latest/api/globals.html\#custom-dispatcher)

You can use a custom dispatcher to dispatch requests passing it in fetch's options object.
The dispatcher must be compatible with `undici`'s
[`Dispatcher` class](https://undici.nodejs.org/#/docs/api/Dispatcher.md).

```js
fetch(url, { dispatcher: new MyAgent() }); copy
```

It is possible to change the global dispatcher in Node.js by installing `undici` and using
the `setGlobalDispatcher()` method. Calling this method will affect both `undici` and
Node.js.

```js mjs
import { setGlobalDispatcher } from 'undici';
setGlobalDispatcher(new MyAgent()); copy
```

#### Related classes[\#](https://nodejs.org/docs/latest/api/globals.html\#related-classes)

The following globals are available to use with `fetch`:

- [`FormData`](https://nodejs.org/api/globals.html#class-formdata)
- [`Headers`](https://nodejs.org/api/globals.html#class-headers)
- [`Request`](https://nodejs.org/api/globals.html#request)
- [`Response`](https://nodejs.org/api/globals.html#response).

### Class: `File`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-file)

Added in: v20.0.0

See [<File>](https://nodejs.org/docs/latest/api/buffer.html#class-file).

### Class: `FormData`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-formdata)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | No longer behind `--experimental-fetch` CLI flag. |
| v17.6.0, v16.15.0 | Added in: v17.6.0, v16.15.0 |

A browser-compatible implementation of [<FormData>](https://developer.mozilla.org/en-US/docs/Web/API/FormData).

### `global`[\#](https://nodejs.org/docs/latest/api/globals.html\#global)

Added in: v0.1.27

[Stability: 3](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Legacy. Use [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis) instead.

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The global namespace object.

In browsers, the top-level scope has traditionally been the global scope. This
means that `var something` will define a new global variable, except within
ECMAScript modules. In Node.js, this is different. The top-level scope is not
the global scope; `var something` inside a Node.js module will be local to that
module, regardless of whether it is a [CommonJS module](https://nodejs.org/docs/latest/api/modules.html) or an
[ECMAScript module](https://nodejs.org/docs/latest/api/esm.html).

### Class: `Headers`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-headers)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | No longer behind `--experimental-fetch` CLI flag. |
| v17.5.0, v16.15.0 | Added in: v17.5.0, v16.15.0 |

A browser-compatible implementation of [<Headers>](https://developer.mozilla.org/en-US/docs/Web/API/Headers).

### `localStorage`[\#](https://nodejs.org/docs/latest/api/globals.html\#localstorage)

Added in: v22.4.0

A browser-compatible implementation of [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Data is stored
unencrypted in the file specified by the [`--localstorage-file`](https://nodejs.org/docs/latest/api/cli.html#--localstorage-filefile) CLI flag.
The maximum amount of data that can be stored is 10 MB.
Any modification of this data outside of the Web Storage API is not supported.
Disable this API with the [`--no-webstorage`](https://nodejs.org/docs/latest/api/cli.html#--no-webstorage) (or its alias `--no-experimental-webstorage`) CLI flag.
`localStorage` data is not stored per user or per request when used in the context
of a server, it is shared across all users and requests.

### Class: `MessageChannel`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-messagechannel)

Added in: v15.0.0

The `MessageChannel` class. See [`MessageChannel`](https://nodejs.org/docs/latest/api/worker_threads.html#class-messagechannel) for more details.

### Class: `MessageEvent`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-messageevent)

Added in: v15.0.0

A browser-compatible implementation of [<MessageEvent>](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent).

### Class: `MessagePort`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-messageport)

Added in: v15.0.0

The `MessagePort` class. See [`MessagePort`](https://nodejs.org/docs/latest/api/worker_threads.html#class-messageport) for more details.

### `module`[\#](https://nodejs.org/docs/latest/api/globals.html\#module)

This variable may appear to be global but is not. See [`module`](https://nodejs.org/docs/latest/api/modules.html#module).

### Class: `Navigator`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-navigator)

Added in: v21.0.0

[Stability: 1.1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Active development. Disable this API with the
[`--no-experimental-global-navigator`](https://nodejs.org/docs/latest/api/cli.html#--no-experimental-global-navigator) CLI flag.

A partial implementation of the [Navigator API](https://html.spec.whatwg.org/multipage/system-state.html#the-navigator-object).

### `navigator`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigator)

Added in: v21.0.0

[Stability: 1.1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Active development. Disable this API with the
[`--no-experimental-global-navigator`](https://nodejs.org/docs/latest/api/cli.html#--no-experimental-global-navigator) CLI flag.

A partial implementation of [`window.navigator`](https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator).

#### `navigator.hardwareConcurrency`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatorhardwareconcurrency)

Added in: v21.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

The `navigator.hardwareConcurrency` read-only property returns the number of
logical processors available to the current Node.js instance.

```js
console.log(`This process is running on ${navigator.hardwareConcurrency} logical processors`); copy
```

#### `navigator.language`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatorlanguage)

Added in: v21.2.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The `navigator.language` read-only property returns a string representing the
preferred language of the Node.js instance. The language will be determined by
the ICU library used by Node.js at runtime based on the
default language of the operating system.

The value is representing the language version as defined in [RFC 5646](https://www.rfc-editor.org/rfc/rfc5646.txt).

The fallback value on builds without ICU is `'en-US'`.

```js
console.log(`The preferred language of the Node.js instance has the tag '${navigator.language}'`); copy
```

#### `navigator.languages`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatorlanguages)

Added in: v21.2.0

- Type: {Array}

The `navigator.languages` read-only property returns an array of strings
representing the preferred languages of the Node.js instance.
By default `navigator.languages` contains only the value of
`navigator.language`, which will be determined by the ICU library used by
Node.js at runtime based on the default language of the operating system.

The fallback value on builds without ICU is `['en-US']`.

```js
console.log(`The preferred languages are '${navigator.languages}'`); copy
```

#### `navigator.platform`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatorplatform)

Added in: v21.2.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The `navigator.platform` read-only property returns a string identifying the
platform on which the Node.js instance is running.

```js
console.log(`This process is running on ${navigator.platform}`); copy
```

#### `navigator.userAgent`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatoruseragent)

Added in: v21.1.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The `navigator.userAgent` read-only property returns user agent
consisting of the runtime name and major version number.

```js
console.log(`The user-agent is ${navigator.userAgent}`); // Prints "Node.js/21" copy
```

#### `navigator.locks`[\#](https://nodejs.org/docs/latest/api/globals.html\#navigatorlocks)

Added in: v24.5.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

The `navigator.locks` read-only property returns a [`LockManager`](https://nodejs.org/docs/latest/api/worker_threads.html#class-lockmanager) instance that
can be used to coordinate access to resources that may be shared across multiple
threads within the same process. This global implementation matches the semantics
of the [browser `LockManager`](https://developer.mozilla.org/en-US/docs/Web/API/LockManager) API.

```js mjs
// Request an exclusive lock
await navigator.locks.request('my_resource', async (lock) => {
  // The lock has been acquired.
  console.log(`Lock acquired: ${lock.name}`);
  // Lock is automatically released when the function returns
});

// Request a shared lock
await navigator.locks.request('shared_resource', { mode: 'shared' }, async (lock) => {
  // Multiple shared locks can be held simultaneously
  console.log(`Shared lock acquired: ${lock.name}`);
});// Request an exclusive lock
navigator.locks.request('my_resource', async (lock) => {
  // The lock has been acquired.
  console.log(`Lock acquired: ${lock.name}`);
  // Lock is automatically released when the function returns
}).then(() => {
  console.log('Lock released');
});

// Request a shared lock
navigator.locks.request('shared_resource', { mode: 'shared' }, async (lock) => {
  // Multiple shared locks can be held simultaneously
  console.log(`Shared lock acquired: ${lock.name}`);
}).then(() => {
  console.log('Shared lock released');
});copy
```

See [`worker_threads.locks`](https://nodejs.org/docs/latest/api/worker_threads.html#worker_threadslocks) for detailed API documentation.

### Class: `PerformanceEntry`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performanceentry)

Added in: v19.0.0

The `PerformanceEntry` class. See [`PerformanceEntry`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performanceentry) for more details.

### Class: `PerformanceMark`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performancemark)

Added in: v19.0.0

The `PerformanceMark` class. See [`PerformanceMark`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performancemark) for more details.

### Class: `PerformanceMeasure`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performancemeasure)

Added in: v19.0.0

The `PerformanceMeasure` class. See [`PerformanceMeasure`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performancemeasure) for more details.

### Class: `PerformanceObserver`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performanceobserver)

Added in: v19.0.0

The `PerformanceObserver` class. See [`PerformanceObserver`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performanceobserver) for more details.

### Class: `PerformanceObserverEntryList`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performanceobserverentrylist)

Added in: v19.0.0

The `PerformanceObserverEntryList` class. See
[`PerformanceObserverEntryList`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performanceobserverentrylist) for more details.

### Class: `PerformanceResourceTiming`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-performanceresourcetiming)

Added in: v19.0.0

The `PerformanceResourceTiming` class. See [`PerformanceResourceTiming`](https://nodejs.org/docs/latest/api/perf_hooks.html#class-performanceresourcetiming) for
more details.

### `performance`[\#](https://nodejs.org/docs/latest/api/globals.html\#performance)

Added in: v16.0.0

The [`perf_hooks.performance`](https://nodejs.org/docs/latest/api/perf_hooks.html#perf_hooksperformance) object.

### `process`[\#](https://nodejs.org/docs/latest/api/globals.html\#process)

Added in: v0.1.7

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

The process object. See the [`process` object](https://nodejs.org/docs/latest/api/process.html#process) section.

### `queueMicrotask(callback)`[\#](https://nodejs.org/docs/latest/api/globals.html\#queuemicrotaskcallback)

Added in: v11.0.0

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Function to be queued.

The `queueMicrotask()` method queues a microtask to invoke `callback`. If
`callback` throws an exception, the [`process` object](https://nodejs.org/docs/latest/api/process.html#process) `'uncaughtException'`
event will be emitted.

The microtask queue is managed by V8 and may be used in a similar manner to
the [`process.nextTick()`](https://nodejs.org/docs/latest/api/process.html#processnexttickcallback-args) queue, which is managed by Node.js. The
`process.nextTick()` queue is always processed before the microtask queue
within each turn of the Node.js event loop.

```js
// Here, `queueMicrotask()` is used to ensure the 'load' event is always
// emitted asynchronously, and therefore consistently. Using
// `process.nextTick()` here would result in the 'load' event always emitting
// before any other promise jobs.

DataHandler.prototype.load = async function load(key) {
  const hit = this._cache.get(key);
  if (hit !== undefined) {
    queueMicrotask(() => {
      this.emit('load', hit);
    });
    return;
  }

  const data = await fetchData(key);
  this._cache.set(key, data);
  this.emit('load', data);
}; copy
```

### Class: `ReadableByteStreamController`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablebytestreamcontroller)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableByteStreamController`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablebytestreamcontroller).

### Class: `ReadableStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablestream)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestream).

### Class: `ReadableStreamBYOBReader`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablestreambyobreader)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableStreamBYOBReader`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestreambyobreader).

### Class: `ReadableStreamBYOBRequest`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablestreambyobrequest)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableStreamBYOBRequest`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestreambyobrequest).

### Class: `ReadableStreamDefaultController`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablestreamdefaultcontroller)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableStreamDefaultController`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestreamdefaultcontroller).

### Class: `ReadableStreamDefaultReader`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-readablestreamdefaultreader)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`ReadableStreamDefaultReader`](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestreamdefaultreader).

### `require()`[\#](https://nodejs.org/docs/latest/api/globals.html\#require)

This variable may appear to be global but is not. See [`require()`](https://nodejs.org/docs/latest/api/modules.html#requireid).

### Class: `Response`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-response)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | No longer behind `--experimental-fetch` CLI flag. |
| v17.5.0, v16.15.0 | Added in: v17.5.0, v16.15.0 |

A browser-compatible implementation of [<Response>](https://developer.mozilla.org/en-US/docs/Web/API/Response).

### Class: `Request`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-request)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | No longer behind `--experimental-fetch` CLI flag. |
| v17.5.0, v16.15.0 | Added in: v17.5.0, v16.15.0 |

A browser-compatible implementation of [<Request>](https://developer.mozilla.org/en-US/docs/Web/API/Request).

### `sessionStorage`[\#](https://nodejs.org/docs/latest/api/globals.html\#sessionstorage)

Added in: v22.4.0

[Stability: 1.0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Early development.

A browser-compatible implementation of [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). Data is stored in
memory, with a storage quota of 10 MB. `sessionStorage` data persists only within
the currently running process, and is not shared between workers.

### `setImmediate(callback[, ...args])`[\#](https://nodejs.org/docs/latest/api/globals.html\#setimmediatecallback-args)

Added in: v0.9.1

[`setImmediate`](https://nodejs.org/docs/latest/api/timers.html#setimmediatecallback-args) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### `setInterval(callback, delay[, ...args])`[\#](https://nodejs.org/docs/latest/api/globals.html\#setintervalcallback-delay-args)

Added in: v0.0.1

[`setInterval`](https://nodejs.org/docs/latest/api/timers.html#setintervalcallback-delay-args) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### `setTimeout(callback, delay[, ...args])`[\#](https://nodejs.org/docs/latest/api/globals.html\#settimeoutcallback-delay-args)

Added in: v0.0.1

[`setTimeout`](https://nodejs.org/docs/latest/api/timers.html#settimeoutcallback-delay-args) is described in the [timers](https://nodejs.org/docs/latest/api/timers.html) section.

### Class: `Storage`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-storage)

Added in: v22.4.0

[Stability: 1.0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Early development. Enable this API with the
\[ `--experimental-webstorage`\]\[\] CLI flag.

A browser-compatible implementation of [<Storage>](https://developer.mozilla.org/en-US/docs/Web/API/Storage). Disable this API with the
[`--no-webstorage`](https://nodejs.org/docs/latest/api/cli.html#--no-webstorage) (or its alias `--no-experimental-webstorage`) CLI flag.

### `structuredClone(value[, options])`[\#](https://nodejs.org/docs/latest/api/globals.html\#structuredclonevalue-options)

Added in: v17.0.0

The WHATWG [`structuredClone`](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) method.

### Class: `SubtleCrypto`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-subtlecrypto)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | No longer behind `--experimental-global-webcrypto` CLI flag. |
| v17.6.0, v16.15.0 | Added in: v17.6.0, v16.15.0 |

A browser-compatible implementation of [<SubtleCrypto>](https://nodejs.org/docs/latest/api/webcrypto.html#class-subtlecrypto). This global is available
only if the Node.js binary was compiled with including support for the
`node:crypto` module.

### Class: `DOMException`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-domexception)

Added in: v17.0.0

The WHATWG [<DOMException>](https://developer.mozilla.org/en-US/docs/Web/API/DOMException) class.

### Class: `TextDecoder`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-textdecoder)

Added in: v11.0.0

The WHATWG `TextDecoder` class. See the [`TextDecoder`](https://nodejs.org/docs/latest/api/util.html#class-utiltextdecoder) section.

### Class: `TextDecoderStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-textdecoderstream)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`TextDecoderStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-textdecoderstream).

### Class: `TextEncoder`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-textencoder)

Added in: v11.0.0

The WHATWG `TextEncoder` class. See the [`TextEncoder`](https://nodejs.org/docs/latest/api/util.html#class-utiltextencoder) section.

### Class: `TextEncoderStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-textencoderstream)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`TextEncoderStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-textencoderstream).

### Class: `TransformStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-transformstream)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`TransformStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-transformstream).

### Class: `TransformStreamDefaultController`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-transformstreamdefaultcontroller)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`TransformStreamDefaultController`](https://nodejs.org/docs/latest/api/webstreams.html#class-transformstreamdefaultcontroller).

### Class: `URL`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-url)

Added in: v10.0.0

The WHATWG `URL` class. See the [`URL`](https://nodejs.org/docs/latest/api/url.html#class-url) section.

### Class: `URLPattern`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-urlpattern)

Added in: v24.0.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

The WHATWG `URLPattern` class. See the [`URLPattern`](https://nodejs.org/docs/latest/api/url.html#class-urlpattern) section.

### Class: `URLSearchParams`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-urlsearchparams)

Added in: v10.0.0

The WHATWG `URLSearchParams` class. See the [`URLSearchParams`](https://nodejs.org/docs/latest/api/url.html#class-urlsearchparams) section.

### Class: `WebAssembly`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-webassembly)

Added in: v8.0.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

The object that acts as the namespace for all W3C
[WebAssembly](https://webassembly.org/) related functionality. See the
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/WebAssembly) for usage and compatibility.

### Class: `WebSocket`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-websocket)

History

| Version | Changes |
| --- | --- |
| v22.4.0 | No longer experimental. |
| v22.0.0 | No longer behind `--experimental-websocket` CLI flag. |
| v21.0.0, v20.10.0 | Added in: v21.0.0, v20.10.0 |

A browser-compatible implementation of [<WebSocket>](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket). Disable this API
with the [`--no-experimental-websocket`](https://nodejs.org/docs/latest/api/cli.html#--no-experimental-websocket) CLI flag.

### Class: `WritableStream`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-writablestream)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`WritableStream`](https://nodejs.org/docs/latest/api/webstreams.html#class-writablestream).

### Class: `WritableStreamDefaultController`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-writablestreamdefaultcontroller)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`WritableStreamDefaultController`](https://nodejs.org/docs/latest/api/webstreams.html#class-writablestreamdefaultcontroller).

### Class: `WritableStreamDefaultWriter`[\#](https://nodejs.org/docs/latest/api/globals.html\#class-writablestreamdefaultwriter)

History

| Version | Changes |
| --- | --- |
| v23.11.0, v22.15.0 | Marking the API stable. |
| v18.0.0 | Added in: v18.0.0 |

A browser-compatible implementation of [`WritableStreamDefaultWriter`](https://nodejs.org/docs/latest/api/webstreams.html#class-writablestreamdefaultwriter).