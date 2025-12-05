---
source: https://nodejs.org/docs/latest/api/debugger.html
scraped_at: 2025-10-20T14:08:30.638Z
title: Debugger | Node.js v25.0.0 Documentation
description: 
category: testing
module: debugger
---

[Skip to content](https://nodejs.org/docs/latest/api/debugger.html#apicontent)

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
- [Table of contents](https://nodejs.org/docs/latest/api/debugger.html#toc-picker)




- [Debugger](https://nodejs.org/docs/latest/api/debugger.html#debugger)
  - [Watchers](https://nodejs.org/docs/latest/api/debugger.html#watchers)
  - [Command reference](https://nodejs.org/docs/latest/api/debugger.html#command-reference)
    - [Stepping](https://nodejs.org/docs/latest/api/debugger.html#stepping)
    - [Breakpoints](https://nodejs.org/docs/latest/api/debugger.html#breakpoints)
    - [Information](https://nodejs.org/docs/latest/api/debugger.html#information)
    - [Execution control](https://nodejs.org/docs/latest/api/debugger.html#execution-control)
    - [Various](https://nodejs.org/docs/latest/api/debugger.html#various)
  - [Advanced usage](https://nodejs.org/docs/latest/api/debugger.html#advanced-usage)
    - [V8 inspector integration for Node.js](https://nodejs.org/docs/latest/api/debugger.html#v8-inspector-integration-for-nodejs)

- [Index](https://nodejs.org/docs/latest/api/debugger.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/docs/latest/api/debugger.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/debugger.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/debugger.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/debugger.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/debugger.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/debugger.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/debugger.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/debugger.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/debugger.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/debugger.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/debugger.html)
11. [14.x](https://nodejs.org/docs/latest-v14.x/api/debugger.html)
12. [13.x](https://nodejs.org/docs/latest-v13.x/api/debugger.html)
13. [12.x](https://nodejs.org/docs/latest-v12.x/api/debugger.html)
14. [11.x](https://nodejs.org/docs/latest-v11.x/api/debugger.html)
15. [10.x](https://nodejs.org/docs/latest-v10.x/api/debugger.html)
16. [9.x](https://nodejs.org/docs/latest-v9.x/api/debugger.html)
17. [8.x](https://nodejs.org/docs/latest-v8.x/api/debugger.html)
18. [7.x](https://nodejs.org/docs/latest-v7.x/api/debugger.html)
19. [6.x](https://nodejs.org/docs/latest-v6.x/api/debugger.html)
20. [5.x](https://nodejs.org/docs/latest-v5.x/api/debugger.html)
21. [4.x](https://nodejs.org/docs/latest-v4.x/api/debugger.html)
22. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/debugger.html)
23. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/debugger.html)

- [Options](https://nodejs.org/docs/latest/api/debugger.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/debugger.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/debugger.md)

* * *

Table of contents

- [Debugger](https://nodejs.org/docs/latest/api/debugger.html#debugger)
  - [Watchers](https://nodejs.org/docs/latest/api/debugger.html#watchers)
  - [Command reference](https://nodejs.org/docs/latest/api/debugger.html#command-reference)
    - [Stepping](https://nodejs.org/docs/latest/api/debugger.html#stepping)
    - [Breakpoints](https://nodejs.org/docs/latest/api/debugger.html#breakpoints)
    - [Information](https://nodejs.org/docs/latest/api/debugger.html#information)
    - [Execution control](https://nodejs.org/docs/latest/api/debugger.html#execution-control)
    - [Various](https://nodejs.org/docs/latest/api/debugger.html#various)
  - [Advanced usage](https://nodejs.org/docs/latest/api/debugger.html#advanced-usage)
    - [V8 inspector integration for Node.js](https://nodejs.org/docs/latest/api/debugger.html#v8-inspector-integration-for-nodejs)

## Debugger[\#](https://nodejs.org/docs/latest/api/debugger.html\#debugger)

[Stability: 2](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Stable

Node.js includes a command-line debugging utility. The Node.js debugger client
is not a full-featured debugger, but simple stepping and inspection are
possible.

To use it, start Node.js with the `inspect` argument followed by the path to the
script to debug.

```console
$ node inspect myscript.js
< Debugger listening on ws://127.0.0.1:9229/621111f9-ffcb-4e82-b718-48a145fa5db8
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
 ok
Break on start in myscript.js:2
  1 // myscript.js
> 2 global.x = 5;
  3 setTimeout(() => {
  4   debugger;
debug> copy
```

The debugger automatically breaks on the first executable line. To instead
run until the first breakpoint (specified by a [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement), set
the `NODE_INSPECT_RESUME_ON_START` environment variable to `1`.

```console
$ cat myscript.js
// myscript.js
global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
$ NODE_INSPECT_RESUME_ON_START=1 node inspect myscript.js
< Debugger listening on ws://127.0.0.1:9229/f1ed133e-7876-495b-83ae-c32c6fc319c2
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
< hello
<
break in myscript.js:4
  2 global.x = 5;
  3 setTimeout(() => {
> 4   debugger;
  5   console.log('world');
  6 }, 1000);
debug> next
break in myscript.js:5
  3 setTimeout(() => {
  4   debugger;
> 5   console.log('world');
  6 }, 1000);
  7 console.log('hello');
debug> repl
Press Ctrl+C to leave debug repl
> x
5
> 2 + 2
4
debug> next
< world
<
break in myscript.js:6
  4   debugger;
  5   console.log('world');
> 6 }, 1000);
  7 console.log('hello');
  8
debug> .exit
$ copy
```

The `repl` command allows code to be evaluated remotely. The `next` command
steps to the next line. Type `help` to see what other commands are available.

Pressing `enter` without typing a command will repeat the previous debugger
command.

### Watchers[\#](https://nodejs.org/docs/latest/api/debugger.html\#watchers)

It is possible to watch expression and variable values while debugging. On
every breakpoint, each expression from the watchers list will be evaluated
in the current context and displayed immediately before the breakpoint's
source code listing.

To begin watching an expression, type `watch('my_expression')`. The command
`watchers` will print the active watchers. To remove a watcher, type
`unwatch('my_expression')`.

### Command reference[\#](https://nodejs.org/docs/latest/api/debugger.html\#command-reference)

#### Stepping[\#](https://nodejs.org/docs/latest/api/debugger.html\#stepping)

- `cont`, `c`: Continue execution
- `next`, `n`: Step next
- `step`, `s`: Step in
- `out`, `o`: Step out
- `pause`: Pause running code (like pause button in Developer Tools)

#### Breakpoints[\#](https://nodejs.org/docs/latest/api/debugger.html\#breakpoints)

- `setBreakpoint()`, `sb()`: Set breakpoint on current line
- `setBreakpoint(line)`, `sb(line)`: Set breakpoint on specific line
- `setBreakpoint('fn()')`, `sb(...)`: Set breakpoint on a first statement in
function's body
- `setBreakpoint('script.js', 1)`, `sb(...)`: Set breakpoint on first line of
`script.js`
- `setBreakpoint('script.js', 1, 'num < 4')`, `sb(...)`: Set conditional
breakpoint on first line of `script.js` that only breaks when `num < 4`
evaluates to `true`
- `clearBreakpoint('script.js', 1)`, `cb(...)`: Clear breakpoint in `script.js`
on line 1

It is also possible to set a breakpoint in a file (module) that
is not loaded yet:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/48a5b28a-550c-471b-b5e1-d13dd7165df9
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in main.js:1
> 1 const mod = require('./mod.js');
  2 mod.hello();
  3 mod.hello();
debug> setBreakpoint('mod.js', 22)
Warning: script 'mod.js' was not loaded yet.
debug> c
break in mod.js:22
 20 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 21
>22 exports.hello = function() {
 23   return 'hello from module';
 24 };
debug> copy
```

It is also possible to set a conditional breakpoint that only breaks when a
given expression evaluates to `true`:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/ce24daa8-3816-44d4-b8ab-8273c8a66d35
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
Break on start in main.js:7
  5 }
  6
> 7 addOne(10);
  8 addOne(-1);
  9
debug> setBreakpoint('main.js', 4, 'num < 0')
  1 'use strict';
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
  7 addOne(10);
  8 addOne(-1);
  9
debug> cont
break in main.js:4
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
debug> exec('num')
-1
debug> copy
```

#### Information[\#](https://nodejs.org/docs/latest/api/debugger.html\#information)

- `backtrace`, `bt`: Print backtrace of current execution frame
- `list(5)`: List scripts source code with 5 line context (5 lines before and
after)
- `watch(expr)`: Add expression to watch list
- `unwatch(expr)`: Remove expression from watch list
- `unwatch(index)`: Remove expression at specific index from watch list
- `watchers`: List all watchers and their values (automatically listed on each
breakpoint)
- `repl`: Open debugger's repl for evaluation in debugging script's context
- `exec expr`, `p expr`: Execute an expression in debugging script's context and
print its value
- `profile`: Start CPU profiling session
- `profileEnd`: Stop current CPU profiling session
- `profiles`: List all completed CPU profiling sessions
- `profiles[n].save(filepath = 'node.cpuprofile')`: Save CPU profiling session
to disk as JSON
- `takeHeapSnapshot(filepath = 'node.heapsnapshot')`: Take a heap snapshot
and save to disk as JSON

#### Execution control[\#](https://nodejs.org/docs/latest/api/debugger.html\#execution-control)

- `run`: Run script (automatically runs on debugger's start)
- `restart`: Restart script
- `kill`: Kill script

#### Various[\#](https://nodejs.org/docs/latest/api/debugger.html\#various)

- `scripts`: List all loaded scripts
- `version`: Display V8's version

### Advanced usage[\#](https://nodejs.org/docs/latest/api/debugger.html\#advanced-usage)

#### V8 inspector integration for Node.js[\#](https://nodejs.org/docs/latest/api/debugger.html\#v8-inspector-integration-for-nodejs)

V8 Inspector integration allows attaching Chrome DevTools to Node.js
instances for debugging and profiling. It uses the
[Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/).

V8 Inspector can be enabled by passing the `--inspect` flag when starting a
Node.js application. It is also possible to supply a custom port with that flag,
e.g. `--inspect=9222` will accept DevTools connections on port 9222.

Using the `--inspect` flag will execute the code immediately before debugger is connected.
This means that the code will start running before you can start debugging, which might
not be ideal if you want to debug from the very beginning.

In such cases, you have two alternatives:

1. `--inspect-wait` flag: This flag will wait for debugger to be attached before executing the code.
This allows you to start debugging right from the beginning of the execution.
2. `--inspect-brk` flag: Unlike `--inspect`, this flag will break on the first line of the code
as soon as debugger is attached. This is useful when you want to debug the code step by step
from the very beginning, without any code execution prior to debugging.

So, when deciding between `--inspect`, `--inspect-wait`, and `--inspect-brk`, consider whether you want
the code to start executing immediately, wait for debugger to be attached before execution,
or break on the first line for step-by-step debugging.

```console
$ node --inspect index.js
Debugger listening on ws://127.0.0.1:9229/dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
For help, see: https://nodejs.org/en/docs/inspector copy
```

(In the example above, the UUID dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
at the end of the URL is generated on the fly, it varies in different
debugging sessions.)

If the Chrome browser is older than 66.0.3345.0,
use `inspector.html` instead of `js_app.html` in the above URL.

Chrome DevTools doesn't support debugging [worker threads](https://nodejs.org/docs/latest/api/worker_threads.html) yet.
[ndb](https://github.com/GoogleChromeLabs/ndb/) can be used to debug them.