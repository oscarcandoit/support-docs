---
source: https://nodejs.org/docs/latest/api/synopsis.html
scraped_at: 2025-10-20T14:06:30.161Z
title: Usage and example | Node.js v25.0.0 Documentation
description: 
category: overview
module: synopsis
---

[Skip to content](https://nodejs.org/docs/latest/api/synopsis.html#apicontent)

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
- [Table of contents](https://nodejs.org/docs/latest/api/synopsis.html#toc-picker)




- [Usage and example](https://nodejs.org/docs/latest/api/synopsis.html#usage-and-example)
  - [Usage](https://nodejs.org/docs/latest/api/synopsis.html#usage)
  - [Example](https://nodejs.org/docs/latest/api/synopsis.html#example)

- [Index](https://nodejs.org/docs/latest/api/synopsis.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/docs/latest/api/synopsis.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/synopsis.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/synopsis.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/synopsis.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/synopsis.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/synopsis.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/synopsis.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/synopsis.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/synopsis.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/synopsis.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/synopsis.html)
11. [14.x](https://nodejs.org/docs/latest-v14.x/api/synopsis.html)
12. [13.x](https://nodejs.org/docs/latest-v13.x/api/synopsis.html)
13. [12.x](https://nodejs.org/docs/latest-v12.x/api/synopsis.html)
14. [11.x](https://nodejs.org/docs/latest-v11.x/api/synopsis.html)
15. [10.x](https://nodejs.org/docs/latest-v10.x/api/synopsis.html)
16. [9.x](https://nodejs.org/docs/latest-v9.x/api/synopsis.html)
17. [8.x](https://nodejs.org/docs/latest-v8.x/api/synopsis.html)
18. [7.x](https://nodejs.org/docs/latest-v7.x/api/synopsis.html)
19. [6.x](https://nodejs.org/docs/latest-v6.x/api/synopsis.html)
20. [5.x](https://nodejs.org/docs/latest-v5.x/api/synopsis.html)
21. [4.x](https://nodejs.org/docs/latest-v4.x/api/synopsis.html)
22. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/synopsis.html)
23. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/synopsis.html)

- [Options](https://nodejs.org/docs/latest/api/synopsis.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/synopsis.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/synopsis.md)

* * *

Table of contents

- [Usage and example](https://nodejs.org/docs/latest/api/synopsis.html#usage-and-example)
  - [Usage](https://nodejs.org/docs/latest/api/synopsis.html#usage)
  - [Example](https://nodejs.org/docs/latest/api/synopsis.html#example)

## Usage and example[\#](https://nodejs.org/docs/latest/api/synopsis.html\#usage-and-example)

### Usage[\#](https://nodejs.org/docs/latest/api/synopsis.html\#usage)

`node [options] [V8 options] [script.js | -e "script" | - ] [arguments]`

Please see the [Command-line options](https://nodejs.org/docs/latest/api/cli.html#options) document for more information.

### Example[\#](https://nodejs.org/docs/latest/api/synopsis.html\#example)

An example of a [web server](https://nodejs.org/docs/latest/api/http.html) written with Node.js which responds with
`'Hello, World!'`:

Commands in this document start with `$` or `>` to replicate how they would
appear in a user's terminal. Do not include the `$` and `>` characters. They are
there to show the start of each command.

Lines that don't start with `$` or `>` character show the output of the previous
command.

First, make sure to have downloaded and installed Node.js. See
[Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) for further install information.

Now, create an empty project folder called `projects`, then navigate into it.

Linux and Mac:

```bash
mkdir ~/projects
cd ~/projects copy
```

Windows CMD:

```powershell
mkdir %USERPROFILE%\projects
cd %USERPROFILE%\projects copy
```

Windows PowerShell:

```powershell
mkdir $env:USERPROFILE\projects
cd $env:USERPROFILE\projects copy
```

Next, create a new source file in the `projects`
folder and call it `hello-world.js`.

Open `hello-world.js` in any preferred text editor and
paste in the following content:

```js
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); copy
```

Save the file. Then, in the terminal window, to run the `hello-world.js` file,
enter:

```bash
node hello-world.js copy
```

Output like this should appear in the terminal:

```console
Server running at http://127.0.0.1:3000/ copy
```

Now, open any preferred web browser and visit `http://127.0.0.1:3000`.

If the browser displays the string `Hello, World!`, that indicates
the server is working.