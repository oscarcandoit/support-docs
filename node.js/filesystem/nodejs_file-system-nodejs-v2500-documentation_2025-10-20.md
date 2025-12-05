---
source: https://nodejs.org/docs/latest/api/fs.html
scraped_at: 2025-10-20T14:09:33.434Z
title: File system | Node.js v25.0.0 Documentation
description: 
category: filesystem
module: fs
---

[Skip to content](https://nodejs.org/docs/latest/api/fs.html#apicontent)

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
- [Table of contents](https://nodejs.org/docs/latest/api/fs.html#toc-picker)




- [File system](https://nodejs.org/docs/latest/api/fs.html#file-system)
  - [Promise example](https://nodejs.org/docs/latest/api/fs.html#promise-example)
  - [Callback example](https://nodejs.org/docs/latest/api/fs.html#callback-example)
  - [Synchronous example](https://nodejs.org/docs/latest/api/fs.html#synchronous-example)
  - [Promises API](https://nodejs.org/docs/latest/api/fs.html#promises-api)
    - [Class: `FileHandle`](https://nodejs.org/docs/latest/api/fs.html#class-filehandle)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close)
      - [`filehandle.appendFile(data[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandleappendfiledata-options)
      - [`filehandle.chmod(mode)`](https://nodejs.org/docs/latest/api/fs.html#filehandlechmodmode)
      - [`filehandle.chown(uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#filehandlechownuid-gid)
      - [`filehandle.close()`](https://nodejs.org/docs/latest/api/fs.html#filehandleclose)
      - [`filehandle.createReadStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatereadstreamoptions)
      - [`filehandle.createWriteStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatewritestreamoptions)
      - [`filehandle.datasync()`](https://nodejs.org/docs/latest/api/fs.html#filehandledatasync)
      - [`filehandle.fd`](https://nodejs.org/docs/latest/api/fs.html#filehandlefd)
      - [`filehandle.read(buffer, offset, length, position)`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadbuffer-offset-length-position)
      - [`filehandle.read([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadoptions)
      - [`filehandle.read(buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadbuffer-options)
      - [`filehandle.readableWebStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadablewebstreamoptions)
      - [`filehandle.readFile(options)`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions)
      - [`filehandle.readLines([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadlinesoptions)
      - [`filehandle.readv(buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadvbuffers-position)
      - [`filehandle.stat([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlestatoptions)
      - [`filehandle.sync()`](https://nodejs.org/docs/latest/api/fs.html#filehandlesync)
      - [`filehandle.truncate(len)`](https://nodejs.org/docs/latest/api/fs.html#filehandletruncatelen)
      - [`filehandle.utimes(atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#filehandleutimesatime-mtime)
      - [`filehandle.write(buffer, offset[, length[, position]])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritebuffer-offset-length-position)
      - [`filehandle.write(buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritebuffer-options)
      - [`filehandle.write(string[, position[, encoding]])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritestring-position-encoding)
      - [`filehandle.writeFile(data, options)`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritefiledata-options)
      - [`filehandle.writev(buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritevbuffers-position)
      - [`filehandle[Symbol.asyncDispose]()`](https://nodejs.org/docs/latest/api/fs.html#filehandlesymbolasyncdispose)
    - [`fsPromises.access(path[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode)
    - [`fsPromises.appendFile(path, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesappendfilepath-data-options)
    - [`fsPromises.chmod(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseschmodpath-mode)
    - [`fsPromises.chown(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseschownpath-uid-gid)
    - [`fsPromises.copyFile(src, dest[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisescopyfilesrc-dest-mode)
    - [`fsPromises.cp(src, dest[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisescpsrc-dest-options)
    - [`fsPromises.glob(pattern[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesglobpattern-options)
    - [`fsPromises.lchmod(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslchmodpath-mode)
    - [`fsPromises.lchown(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslchownpath-uid-gid)
    - [`fsPromises.lutimes(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslutimespath-atime-mtime)
    - [`fsPromises.link(existingPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslinkexistingpath-newpath)
    - [`fsPromises.lstat(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslstatpath-options)
    - [`fsPromises.mkdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdirpath-options)
    - [`fsPromises.mkdtemp(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdtempprefix-options)
    - [`fsPromises.mkdtempDisposable(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdtempdisposableprefix-options)
    - [`fsPromises.open(path, flags[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopenpath-flags-mode)
    - [`fsPromises.opendir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopendirpath-options)
    - [`fsPromises.readdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreaddirpath-options)
    - [`fsPromises.readFile(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreadfilepath-options)
    - [`fsPromises.readlink(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreadlinkpath-options)
    - [`fsPromises.realpath(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrealpathpath-options)
    - [`fsPromises.rename(oldPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrenameoldpath-newpath)
    - [`fsPromises.rmdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrmdirpath-options)
    - [`fsPromises.rm(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrmpath-options)
    - [`fsPromises.stat(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesstatpath-options)
    - [`fsPromises.statfs(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesstatfspath-options)
    - [`fsPromises.symlink(target, path[, type])`](https://nodejs.org/docs/latest/api/fs.html#fspromisessymlinktarget-path-type)
    - [`fsPromises.truncate(path[, len])`](https://nodejs.org/docs/latest/api/fs.html#fspromisestruncatepath-len)
    - [`fsPromises.unlink(path)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesunlinkpath)
    - [`fsPromises.utimes(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesutimespath-atime-mtime)
    - [`fsPromises.watch(filename[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseswatchfilename-options)
    - [`fsPromises.writeFile(file, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseswritefilefile-data-options)
    - [`fsPromises.constants`](https://nodejs.org/docs/latest/api/fs.html#fspromisesconstants)
  - [Callback API](https://nodejs.org/docs/latest/api/fs.html#callback-api)
    - [`fs.access(path[, mode], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsaccesspath-mode-callback)
    - [`fs.appendFile(path, data[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilepath-data-options-callback)
    - [`fs.chmod(path, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fschmodpath-mode-callback)
      - [File modes](https://nodejs.org/docs/latest/api/fs.html#file-modes)
    - [`fs.chown(path, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fschownpath-uid-gid-callback)
    - [`fs.close(fd[, callback])`](https://nodejs.org/docs/latest/api/fs.html#fsclosefd-callback)
    - [`fs.copyFile(src, dest[, mode], callback)`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesrc-dest-mode-callback)
    - [`fs.cp(src, dest[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fscpsrc-dest-options-callback)
    - [`fs.createReadStream(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscreatereadstreampath-options)
    - [`fs.createWriteStream(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options)
    - [`fs.exists(path, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsexistspath-callback)
    - [`fs.fchmod(fd, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfchmodfd-mode-callback)
    - [`fs.fchown(fd, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfchownfd-uid-gid-callback)
    - [`fs.fdatasync(fd, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfdatasyncfd-callback)
    - [`fs.fstat(fd[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfstatfd-options-callback)
    - [`fs.fsync(fd, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfsyncfd-callback)
    - [`fs.ftruncate(fd[, len], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatefd-len-callback)
    - [`fs.futimes(fd, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfutimesfd-atime-mtime-callback)
    - [`fs.glob(pattern[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsglobpattern-options-callback)
    - [`fs.lchmod(path, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslchmodpath-mode-callback)
    - [`fs.lchown(path, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslchownpath-uid-gid-callback)
    - [`fs.lutimes(path, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslutimespath-atime-mtime-callback)
    - [`fs.link(existingPath, newPath, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslinkexistingpath-newpath-callback)
    - [`fs.lstat(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback)
    - [`fs.mkdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback)
    - [`fs.mkdtemp(prefix[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempprefix-options-callback)
    - [`fs.open(path[, flags[, mode]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
    - [`fs.openAsBlob(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsopenasblobpath-options)
    - [`fs.opendir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsopendirpath-options-callback)
    - [`fs.read(fd, buffer, offset, length, position, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback)
    - [`fs.read(fd[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-options-callback)
    - [`fs.read(fd, buffer[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-options-callback)
    - [`fs.readdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback)
    - [`fs.readFile(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback)
      - [File descriptors](https://nodejs.org/docs/latest/api/fs.html#file-descriptors)
      - [Performance Considerations](https://nodejs.org/docs/latest/api/fs.html#performance-considerations)
    - [`fs.readlink(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadlinkpath-options-callback)
    - [`fs.readv(fd, buffers[, position], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadvfd-buffers-position-callback)
    - [`fs.realpath(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathpath-options-callback)
    - [`fs.realpath.native(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathnativepath-options-callback)
    - [`fs.rename(oldPath, newPath, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrenameoldpath-newpath-callback)
    - [`fs.rmdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirpath-options-callback)
    - [`fs.rm(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrmpath-options-callback)
    - [`fs.stat(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsstatpath-options-callback)
    - [`fs.statfs(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsstatfspath-options-callback)
    - [`fs.symlink(target, path[, type], callback)`](https://nodejs.org/docs/latest/api/fs.html#fssymlinktarget-path-type-callback)
    - [`fs.truncate(path[, len], callback)`](https://nodejs.org/docs/latest/api/fs.html#fstruncatepath-len-callback)
    - [`fs.unlink(path, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsunlinkpath-callback)
    - [`fs.unwatchFile(filename[, listener])`](https://nodejs.org/docs/latest/api/fs.html#fsunwatchfilefilename-listener)
    - [`fs.utimes(path, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsutimespath-atime-mtime-callback)
    - [`fs.watch(filename[, options][, listener])`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener)
      - [Caveats](https://nodejs.org/docs/latest/api/fs.html#caveats)
        - [Availability](https://nodejs.org/docs/latest/api/fs.html#availability)
        - [Inodes](https://nodejs.org/docs/latest/api/fs.html#inodes)
        - [Filename argument](https://nodejs.org/docs/latest/api/fs.html#filename-argument)
    - [`fs.watchFile(filename[, options], listener)`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilefilename-options-listener)
    - [`fs.write(fd, buffer, offset[, length[, position]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-offset-length-position-callback)
    - [`fs.write(fd, buffer[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-options-callback)
    - [`fs.write(fd, string[, position[, encoding]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-string-position-encoding-callback)
    - [`fs.writeFile(file, data[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback)
      - [Using `fs.writeFile()` with file descriptors](https://nodejs.org/docs/latest/api/fs.html#using-fswritefile-with-file-descriptors)
    - [`fs.writev(fd, buffers[, position], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritevfd-buffers-position-callback)
  - [Synchronous API](https://nodejs.org/docs/latest/api/fs.html#synchronous-api)
    - [`fs.accessSync(path[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fsaccesssyncpath-mode)
    - [`fs.appendFileSync(path, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilesyncpath-data-options)
    - [`fs.chmodSync(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fschmodsyncpath-mode)
    - [`fs.chownSync(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fschownsyncpath-uid-gid)
    - [`fs.closeSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsclosesyncfd)
    - [`fs.copyFileSync(src, dest[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesyncsrc-dest-mode)
    - [`fs.cpSync(src, dest[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscpsyncsrc-dest-options)
    - [`fs.existsSync(path)`](https://nodejs.org/docs/latest/api/fs.html#fsexistssyncpath)
    - [`fs.fchmodSync(fd, mode)`](https://nodejs.org/docs/latest/api/fs.html#fsfchmodsyncfd-mode)
    - [`fs.fchownSync(fd, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fsfchownsyncfd-uid-gid)
    - [`fs.fdatasyncSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsfdatasyncsyncfd)
    - [`fs.fstatSync(fd[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsfstatsyncfd-options)
    - [`fs.fsyncSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsfsyncsyncfd)
    - [`fs.ftruncateSync(fd[, len])`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatesyncfd-len)
    - [`fs.futimesSync(fd, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fsfutimessyncfd-atime-mtime)
    - [`fs.globSync(pattern[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options)
    - [`fs.lchmodSync(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fslchmodsyncpath-mode)
    - [`fs.lchownSync(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fslchownsyncpath-uid-gid)
    - [`fs.lutimesSync(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fslutimessyncpath-atime-mtime)
    - [`fs.linkSync(existingPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fslinksyncexistingpath-newpath)
    - [`fs.lstatSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fslstatsyncpath-options)
    - [`fs.mkdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirsyncpath-options)
    - [`fs.mkdtempSync(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempsyncprefix-options)
    - [`fs.mkdtempDisposableSync(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempdisposablesyncprefix-options)
    - [`fs.opendirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsopendirsyncpath-options)
    - [`fs.openSync(path[, flags[, mode]])`](https://nodejs.org/docs/latest/api/fs.html#fsopensyncpath-flags-mode)
    - [`fs.readdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options)
    - [`fs.readFileSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options)
    - [`fs.readlinkSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadlinksyncpath-options)
    - [`fs.readSync(fd, buffer, offset, length[, position])`](https://nodejs.org/docs/latest/api/fs.html#fsreadsyncfd-buffer-offset-length-position)
    - [`fs.readSync(fd, buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadsyncfd-buffer-options)
    - [`fs.readvSync(fd, buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#fsreadvsyncfd-buffers-position)
    - [`fs.realpathSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathsyncpath-options)
    - [`fs.realpathSync.native(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathsyncnativepath-options)
    - [`fs.renameSync(oldPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fsrenamesyncoldpath-newpath)
    - [`fs.rmdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirsyncpath-options)
    - [`fs.rmSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrmsyncpath-options)
    - [`fs.statSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsstatsyncpath-options)
    - [`fs.statfsSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsstatfssyncpath-options)
    - [`fs.symlinkSync(target, path[, type])`](https://nodejs.org/docs/latest/api/fs.html#fssymlinksynctarget-path-type)
    - [`fs.truncateSync(path[, len])`](https://nodejs.org/docs/latest/api/fs.html#fstruncatesyncpath-len)
    - [`fs.unlinkSync(path)`](https://nodejs.org/docs/latest/api/fs.html#fsunlinksyncpath)
    - [`fs.utimesSync(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fsutimessyncpath-atime-mtime)
    - [`fs.writeFileSync(file, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options)
    - [`fs.writeSync(fd, buffer, offset[, length[, position]])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-offset-length-position)
    - [`fs.writeSync(fd, buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-options)
    - [`fs.writeSync(fd, string[, position[, encoding]])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-string-position-encoding)
    - [`fs.writevSync(fd, buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#fswritevsyncfd-buffers-position)
  - [Common Objects](https://nodejs.org/docs/latest/api/fs.html#common-objects)
    - [Class: `fs.Dir`](https://nodejs.org/docs/latest/api/fs.html#class-fsdir)
      - [`dir.close()`](https://nodejs.org/docs/latest/api/fs.html#dirclose)
      - [`dir.close(callback)`](https://nodejs.org/docs/latest/api/fs.html#dirclosecallback)
      - [`dir.closeSync()`](https://nodejs.org/docs/latest/api/fs.html#dirclosesync)
      - [`dir.path`](https://nodejs.org/docs/latest/api/fs.html#dirpath)
      - [`dir.read()`](https://nodejs.org/docs/latest/api/fs.html#dirread)
      - [`dir.read(callback)`](https://nodejs.org/docs/latest/api/fs.html#dirreadcallback)
      - [`dir.readSync()`](https://nodejs.org/docs/latest/api/fs.html#dirreadsync)
      - [`dir[Symbol.asyncIterator]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymbolasynciterator)
      - [`dir[Symbol.asyncDispose]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymbolasyncdispose)
      - [`dir[Symbol.dispose]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymboldispose)
    - [Class: `fs.Dirent`](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent)
      - [`dirent.isBlockDevice()`](https://nodejs.org/docs/latest/api/fs.html#direntisblockdevice)
      - [`dirent.isCharacterDevice()`](https://nodejs.org/docs/latest/api/fs.html#direntischaracterdevice)
      - [`dirent.isDirectory()`](https://nodejs.org/docs/latest/api/fs.html#direntisdirectory)
      - [`dirent.isFIFO()`](https://nodejs.org/docs/latest/api/fs.html#direntisfifo)
      - [`dirent.isFile()`](https://nodejs.org/docs/latest/api/fs.html#direntisfile)
      - [`dirent.isSocket()`](https://nodejs.org/docs/latest/api/fs.html#direntissocket)
      - [`dirent.isSymbolicLink()`](https://nodejs.org/docs/latest/api/fs.html#direntissymboliclink)
      - [`dirent.name`](https://nodejs.org/docs/latest/api/fs.html#direntname)
      - [`dirent.parentPath`](https://nodejs.org/docs/latest/api/fs.html#direntparentpath)
    - [Class: `fs.FSWatcher`](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)
      - [Event: `'change'`](https://nodejs.org/docs/latest/api/fs.html#event-change)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_1)
      - [Event: `'error'`](https://nodejs.org/docs/latest/api/fs.html#event-error)
      - [`watcher.close()`](https://nodejs.org/docs/latest/api/fs.html#watcherclose)
      - [`watcher.ref()`](https://nodejs.org/docs/latest/api/fs.html#watcherref)
      - [`watcher.unref()`](https://nodejs.org/docs/latest/api/fs.html#watcherunref)
    - [Class: `fs.StatWatcher`](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)
      - [`watcher.ref()`](https://nodejs.org/docs/latest/api/fs.html#watcherref_1)
      - [`watcher.unref()`](https://nodejs.org/docs/latest/api/fs.html#watcherunref_1)
    - [Class: `fs.ReadStream`](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_2)
      - [Event: `'open'`](https://nodejs.org/docs/latest/api/fs.html#event-open)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready)
      - [`readStream.bytesRead`](https://nodejs.org/docs/latest/api/fs.html#readstreambytesread)
      - [`readStream.path`](https://nodejs.org/docs/latest/api/fs.html#readstreampath)
      - [`readStream.pending`](https://nodejs.org/docs/latest/api/fs.html#readstreampending)
    - [Class: `fs.Stats`](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)
      - [`stats.isBlockDevice()`](https://nodejs.org/docs/latest/api/fs.html#statsisblockdevice)
      - [`stats.isCharacterDevice()`](https://nodejs.org/docs/latest/api/fs.html#statsischaracterdevice)
      - [`stats.isDirectory()`](https://nodejs.org/docs/latest/api/fs.html#statsisdirectory)
      - [`stats.isFIFO()`](https://nodejs.org/docs/latest/api/fs.html#statsisfifo)
      - [`stats.isFile()`](https://nodejs.org/docs/latest/api/fs.html#statsisfile)
      - [`stats.isSocket()`](https://nodejs.org/docs/latest/api/fs.html#statsissocket)
      - [`stats.isSymbolicLink()`](https://nodejs.org/docs/latest/api/fs.html#statsissymboliclink)
      - [`stats.dev`](https://nodejs.org/docs/latest/api/fs.html#statsdev)
      - [`stats.ino`](https://nodejs.org/docs/latest/api/fs.html#statsino)
      - [`stats.mode`](https://nodejs.org/docs/latest/api/fs.html#statsmode)
      - [`stats.nlink`](https://nodejs.org/docs/latest/api/fs.html#statsnlink)
      - [`stats.uid`](https://nodejs.org/docs/latest/api/fs.html#statsuid)
      - [`stats.gid`](https://nodejs.org/docs/latest/api/fs.html#statsgid)
      - [`stats.rdev`](https://nodejs.org/docs/latest/api/fs.html#statsrdev)
      - [`stats.size`](https://nodejs.org/docs/latest/api/fs.html#statssize)
      - [`stats.blksize`](https://nodejs.org/docs/latest/api/fs.html#statsblksize)
      - [`stats.blocks`](https://nodejs.org/docs/latest/api/fs.html#statsblocks)
      - [`stats.atimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsatimems)
      - [`stats.mtimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsmtimems)
      - [`stats.ctimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsctimems)
      - [`stats.birthtimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtimems)
      - [`stats.atimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsatimens)
      - [`stats.mtimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsmtimens)
      - [`stats.ctimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsctimens)
      - [`stats.birthtimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtimens)
      - [`stats.atime`](https://nodejs.org/docs/latest/api/fs.html#statsatime)
      - [`stats.mtime`](https://nodejs.org/docs/latest/api/fs.html#statsmtime)
      - [`stats.ctime`](https://nodejs.org/docs/latest/api/fs.html#statsctime)
      - [`stats.birthtime`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtime)
      - [Stat time values](https://nodejs.org/docs/latest/api/fs.html#stat-time-values)
    - [Class: `fs.StatFs`](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs)
      - [`statfs.bavail`](https://nodejs.org/docs/latest/api/fs.html#statfsbavail)
      - [`statfs.bfree`](https://nodejs.org/docs/latest/api/fs.html#statfsbfree)
      - [`statfs.blocks`](https://nodejs.org/docs/latest/api/fs.html#statfsblocks)
      - [`statfs.bsize`](https://nodejs.org/docs/latest/api/fs.html#statfsbsize)
      - [`statfs.ffree`](https://nodejs.org/docs/latest/api/fs.html#statfsffree)
      - [`statfs.files`](https://nodejs.org/docs/latest/api/fs.html#statfsfiles)
      - [`statfs.type`](https://nodejs.org/docs/latest/api/fs.html#statfstype)
    - [Class: `fs.Utf8Stream`](https://nodejs.org/docs/latest/api/fs.html#class-fsutf8stream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_3)
      - [Event: `'drain'`](https://nodejs.org/docs/latest/api/fs.html#event-drain)
      - [Event: `'drop'`](https://nodejs.org/docs/latest/api/fs.html#event-drop)
      - [Event: `'error'`](https://nodejs.org/docs/latest/api/fs.html#event-error_1)
      - [Event: `'finish'`](https://nodejs.org/docs/latest/api/fs.html#event-finish)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready_1)
      - [Event: `'write'`](https://nodejs.org/docs/latest/api/fs.html#event-write)
      - [`new fs.Utf8Stream([options])`](https://nodejs.org/docs/latest/api/fs.html#new-fsutf8streamoptions)
      - [`utf8Stream.append`](https://nodejs.org/docs/latest/api/fs.html#utf8streamappend)
      - [`utf8Stream.contentMode`](https://nodejs.org/docs/latest/api/fs.html#utf8streamcontentmode)
      - [`utf8Stream.destroy()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamdestroy)
      - [`utf8Stream.end()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamend)
      - [`utf8Stream.fd`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfd)
      - [`utf8Stream.file`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfile)
      - [`utf8Stream.flush(callback)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamflushcallback)
      - [`utf8Stream.flushSync()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamflushsync)
      - [`utf8Stream.fsync`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfsync)
      - [`utf8Stream.maxLength`](https://nodejs.org/docs/latest/api/fs.html#utf8streammaxlength)
      - [`utf8Stream.minLength`](https://nodejs.org/docs/latest/api/fs.html#utf8streamminlength)
      - [`utf8Stream.mkdir`](https://nodejs.org/docs/latest/api/fs.html#utf8streammkdir)
      - [`utf8Stream.mode`](https://nodejs.org/docs/latest/api/fs.html#utf8streammode)
      - [`utf8Stream.periodicFlush`](https://nodejs.org/docs/latest/api/fs.html#utf8streamperiodicflush)
      - [`utf8Stream.reopen(file)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamreopenfile)
      - [`utf8Stream.sync`](https://nodejs.org/docs/latest/api/fs.html#utf8streamsync)
      - [`utf8Stream.write(data)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamwritedata)
      - [`utf8Stream.writing`](https://nodejs.org/docs/latest/api/fs.html#utf8streamwriting)
      - [`utf8Stream[Symbol.dispose]()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamsymboldispose)
    - [Class: `fs.WriteStream`](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_4)
      - [Event: `'open'`](https://nodejs.org/docs/latest/api/fs.html#event-open_1)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready_2)
      - [`writeStream.bytesWritten`](https://nodejs.org/docs/latest/api/fs.html#writestreambyteswritten)
      - [`writeStream.close([callback])`](https://nodejs.org/docs/latest/api/fs.html#writestreamclosecallback)
      - [`writeStream.path`](https://nodejs.org/docs/latest/api/fs.html#writestreampath)
      - [`writeStream.pending`](https://nodejs.org/docs/latest/api/fs.html#writestreampending)
    - [`fs.constants`](https://nodejs.org/docs/latest/api/fs.html#fsconstants)
      - [FS constants](https://nodejs.org/docs/latest/api/fs.html#fs-constants)
        - [File access constants](https://nodejs.org/docs/latest/api/fs.html#file-access-constants)
        - [File copy constants](https://nodejs.org/docs/latest/api/fs.html#file-copy-constants)
        - [File open constants](https://nodejs.org/docs/latest/api/fs.html#file-open-constants)
        - [File type constants](https://nodejs.org/docs/latest/api/fs.html#file-type-constants)
        - [File mode constants](https://nodejs.org/docs/latest/api/fs.html#file-mode-constants)
  - [Notes](https://nodejs.org/docs/latest/api/fs.html#notes)
    - [Ordering of callback and promise-based operations](https://nodejs.org/docs/latest/api/fs.html#ordering-of-callback-and-promise-based-operations)
    - [File paths](https://nodejs.org/docs/latest/api/fs.html#file-paths)
      - [String paths](https://nodejs.org/docs/latest/api/fs.html#string-paths)
      - [File URL paths](https://nodejs.org/docs/latest/api/fs.html#file-url-paths)
        - [Platform-specific considerations](https://nodejs.org/docs/latest/api/fs.html#platform-specific-considerations)
      - [Buffer paths](https://nodejs.org/docs/latest/api/fs.html#buffer-paths)
      - [Per-drive working directories on Windows](https://nodejs.org/docs/latest/api/fs.html#per-drive-working-directories-on-windows)
    - [File descriptors](https://nodejs.org/docs/latest/api/fs.html#file-descriptors_1)
    - [Threadpool usage](https://nodejs.org/docs/latest/api/fs.html#threadpool-usage)
    - [File system flags](https://nodejs.org/docs/latest/api/fs.html#file-system-flags)

- [Index](https://nodejs.org/docs/latest/api/fs.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/docs/latest/api/fs.html#alt-docs)


01. [24.x](https://nodejs.org/docs/latest-v24.x/api/fs.html)
02. [23.x](https://nodejs.org/docs/latest-v23.x/api/fs.html)
03. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/fs.html)
04. [21.x](https://nodejs.org/docs/latest-v21.x/api/fs.html)
05. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/fs.html)
06. [19.x](https://nodejs.org/docs/latest-v19.x/api/fs.html)
07. [18.x](https://nodejs.org/docs/latest-v18.x/api/fs.html)
08. [17.x](https://nodejs.org/docs/latest-v17.x/api/fs.html)
09. [16.x](https://nodejs.org/docs/latest-v16.x/api/fs.html)
10. [15.x](https://nodejs.org/docs/latest-v15.x/api/fs.html)
11. [14.x](https://nodejs.org/docs/latest-v14.x/api/fs.html)
12. [13.x](https://nodejs.org/docs/latest-v13.x/api/fs.html)
13. [12.x](https://nodejs.org/docs/latest-v12.x/api/fs.html)
14. [11.x](https://nodejs.org/docs/latest-v11.x/api/fs.html)
15. [10.x](https://nodejs.org/docs/latest-v10.x/api/fs.html)
16. [9.x](https://nodejs.org/docs/latest-v9.x/api/fs.html)
17. [8.x](https://nodejs.org/docs/latest-v8.x/api/fs.html)
18. [7.x](https://nodejs.org/docs/latest-v7.x/api/fs.html)
19. [6.x](https://nodejs.org/docs/latest-v6.x/api/fs.html)
20. [5.x](https://nodejs.org/docs/latest-v5.x/api/fs.html)
21. [4.x](https://nodejs.org/docs/latest-v4.x/api/fs.html)
22. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/fs.html)
23. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/fs.html)

- [Options](https://nodejs.org/docs/latest/api/fs.html#options-picker)


- [View on single page](https://nodejs.org/docs/latest/api/all.html)
- [View as JSON](https://nodejs.org/docs/latest/api/fs.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/fs.md)

* * *

Table of contents

- [File system](https://nodejs.org/docs/latest/api/fs.html#file-system)
  - [Promise example](https://nodejs.org/docs/latest/api/fs.html#promise-example)
  - [Callback example](https://nodejs.org/docs/latest/api/fs.html#callback-example)
  - [Synchronous example](https://nodejs.org/docs/latest/api/fs.html#synchronous-example)
  - [Promises API](https://nodejs.org/docs/latest/api/fs.html#promises-api)
    - [Class: `FileHandle`](https://nodejs.org/docs/latest/api/fs.html#class-filehandle)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close)
      - [`filehandle.appendFile(data[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandleappendfiledata-options)
      - [`filehandle.chmod(mode)`](https://nodejs.org/docs/latest/api/fs.html#filehandlechmodmode)
      - [`filehandle.chown(uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#filehandlechownuid-gid)
      - [`filehandle.close()`](https://nodejs.org/docs/latest/api/fs.html#filehandleclose)
      - [`filehandle.createReadStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatereadstreamoptions)
      - [`filehandle.createWriteStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatewritestreamoptions)
      - [`filehandle.datasync()`](https://nodejs.org/docs/latest/api/fs.html#filehandledatasync)
      - [`filehandle.fd`](https://nodejs.org/docs/latest/api/fs.html#filehandlefd)
      - [`filehandle.read(buffer, offset, length, position)`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadbuffer-offset-length-position)
      - [`filehandle.read([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadoptions)
      - [`filehandle.read(buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadbuffer-options)
      - [`filehandle.readableWebStream([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadablewebstreamoptions)
      - [`filehandle.readFile(options)`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadfileoptions)
      - [`filehandle.readLines([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadlinesoptions)
      - [`filehandle.readv(buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#filehandlereadvbuffers-position)
      - [`filehandle.stat([options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlestatoptions)
      - [`filehandle.sync()`](https://nodejs.org/docs/latest/api/fs.html#filehandlesync)
      - [`filehandle.truncate(len)`](https://nodejs.org/docs/latest/api/fs.html#filehandletruncatelen)
      - [`filehandle.utimes(atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#filehandleutimesatime-mtime)
      - [`filehandle.write(buffer, offset[, length[, position]])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritebuffer-offset-length-position)
      - [`filehandle.write(buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritebuffer-options)
      - [`filehandle.write(string[, position[, encoding]])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritestring-position-encoding)
      - [`filehandle.writeFile(data, options)`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritefiledata-options)
      - [`filehandle.writev(buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritevbuffers-position)
      - [`filehandle[Symbol.asyncDispose]()`](https://nodejs.org/docs/latest/api/fs.html#filehandlesymbolasyncdispose)
    - [`fsPromises.access(path[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode)
    - [`fsPromises.appendFile(path, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesappendfilepath-data-options)
    - [`fsPromises.chmod(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseschmodpath-mode)
    - [`fsPromises.chown(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseschownpath-uid-gid)
    - [`fsPromises.copyFile(src, dest[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisescopyfilesrc-dest-mode)
    - [`fsPromises.cp(src, dest[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisescpsrc-dest-options)
    - [`fsPromises.glob(pattern[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesglobpattern-options)
    - [`fsPromises.lchmod(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslchmodpath-mode)
    - [`fsPromises.lchown(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslchownpath-uid-gid)
    - [`fsPromises.lutimes(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslutimespath-atime-mtime)
    - [`fsPromises.link(existingPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslinkexistingpath-newpath)
    - [`fsPromises.lstat(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseslstatpath-options)
    - [`fsPromises.mkdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdirpath-options)
    - [`fsPromises.mkdtemp(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdtempprefix-options)
    - [`fsPromises.mkdtempDisposable(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdtempdisposableprefix-options)
    - [`fsPromises.open(path, flags[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopenpath-flags-mode)
    - [`fsPromises.opendir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopendirpath-options)
    - [`fsPromises.readdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreaddirpath-options)
    - [`fsPromises.readFile(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreadfilepath-options)
    - [`fsPromises.readlink(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesreadlinkpath-options)
    - [`fsPromises.realpath(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrealpathpath-options)
    - [`fsPromises.rename(oldPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrenameoldpath-newpath)
    - [`fsPromises.rmdir(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrmdirpath-options)
    - [`fsPromises.rm(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrmpath-options)
    - [`fsPromises.stat(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesstatpath-options)
    - [`fsPromises.statfs(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromisesstatfspath-options)
    - [`fsPromises.symlink(target, path[, type])`](https://nodejs.org/docs/latest/api/fs.html#fspromisessymlinktarget-path-type)
    - [`fsPromises.truncate(path[, len])`](https://nodejs.org/docs/latest/api/fs.html#fspromisestruncatepath-len)
    - [`fsPromises.unlink(path)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesunlinkpath)
    - [`fsPromises.utimes(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fspromisesutimespath-atime-mtime)
    - [`fsPromises.watch(filename[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseswatchfilename-options)
    - [`fsPromises.writeFile(file, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fspromiseswritefilefile-data-options)
    - [`fsPromises.constants`](https://nodejs.org/docs/latest/api/fs.html#fspromisesconstants)
  - [Callback API](https://nodejs.org/docs/latest/api/fs.html#callback-api)
    - [`fs.access(path[, mode], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsaccesspath-mode-callback)
    - [`fs.appendFile(path, data[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilepath-data-options-callback)
    - [`fs.chmod(path, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fschmodpath-mode-callback)
      - [File modes](https://nodejs.org/docs/latest/api/fs.html#file-modes)
    - [`fs.chown(path, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fschownpath-uid-gid-callback)
    - [`fs.close(fd[, callback])`](https://nodejs.org/docs/latest/api/fs.html#fsclosefd-callback)
    - [`fs.copyFile(src, dest[, mode], callback)`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesrc-dest-mode-callback)
    - [`fs.cp(src, dest[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fscpsrc-dest-options-callback)
    - [`fs.createReadStream(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscreatereadstreampath-options)
    - [`fs.createWriteStream(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options)
    - [`fs.exists(path, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsexistspath-callback)
    - [`fs.fchmod(fd, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfchmodfd-mode-callback)
    - [`fs.fchown(fd, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfchownfd-uid-gid-callback)
    - [`fs.fdatasync(fd, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfdatasyncfd-callback)
    - [`fs.fstat(fd[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfstatfd-options-callback)
    - [`fs.fsync(fd, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfsyncfd-callback)
    - [`fs.ftruncate(fd[, len], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatefd-len-callback)
    - [`fs.futimes(fd, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsfutimesfd-atime-mtime-callback)
    - [`fs.glob(pattern[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsglobpattern-options-callback)
    - [`fs.lchmod(path, mode, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslchmodpath-mode-callback)
    - [`fs.lchown(path, uid, gid, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslchownpath-uid-gid-callback)
    - [`fs.lutimes(path, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslutimespath-atime-mtime-callback)
    - [`fs.link(existingPath, newPath, callback)`](https://nodejs.org/docs/latest/api/fs.html#fslinkexistingpath-newpath-callback)
    - [`fs.lstat(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback)
    - [`fs.mkdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback)
    - [`fs.mkdtemp(prefix[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempprefix-options-callback)
    - [`fs.open(path[, flags[, mode]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
    - [`fs.openAsBlob(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsopenasblobpath-options)
    - [`fs.opendir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsopendirpath-options-callback)
    - [`fs.read(fd, buffer, offset, length, position, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback)
    - [`fs.read(fd[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-options-callback)
    - [`fs.read(fd, buffer[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-options-callback)
    - [`fs.readdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback)
    - [`fs.readFile(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback)
      - [File descriptors](https://nodejs.org/docs/latest/api/fs.html#file-descriptors)
      - [Performance Considerations](https://nodejs.org/docs/latest/api/fs.html#performance-considerations)
    - [`fs.readlink(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadlinkpath-options-callback)
    - [`fs.readv(fd, buffers[, position], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsreadvfd-buffers-position-callback)
    - [`fs.realpath(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathpath-options-callback)
    - [`fs.realpath.native(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathnativepath-options-callback)
    - [`fs.rename(oldPath, newPath, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrenameoldpath-newpath-callback)
    - [`fs.rmdir(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirpath-options-callback)
    - [`fs.rm(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsrmpath-options-callback)
    - [`fs.stat(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsstatpath-options-callback)
    - [`fs.statfs(path[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fsstatfspath-options-callback)
    - [`fs.symlink(target, path[, type], callback)`](https://nodejs.org/docs/latest/api/fs.html#fssymlinktarget-path-type-callback)
    - [`fs.truncate(path[, len], callback)`](https://nodejs.org/docs/latest/api/fs.html#fstruncatepath-len-callback)
    - [`fs.unlink(path, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsunlinkpath-callback)
    - [`fs.unwatchFile(filename[, listener])`](https://nodejs.org/docs/latest/api/fs.html#fsunwatchfilefilename-listener)
    - [`fs.utimes(path, atime, mtime, callback)`](https://nodejs.org/docs/latest/api/fs.html#fsutimespath-atime-mtime-callback)
    - [`fs.watch(filename[, options][, listener])`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener)
      - [Caveats](https://nodejs.org/docs/latest/api/fs.html#caveats)
        - [Availability](https://nodejs.org/docs/latest/api/fs.html#availability)
        - [Inodes](https://nodejs.org/docs/latest/api/fs.html#inodes)
        - [Filename argument](https://nodejs.org/docs/latest/api/fs.html#filename-argument)
    - [`fs.watchFile(filename[, options], listener)`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilefilename-options-listener)
    - [`fs.write(fd, buffer, offset[, length[, position]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-offset-length-position-callback)
    - [`fs.write(fd, buffer[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-options-callback)
    - [`fs.write(fd, string[, position[, encoding]], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-string-position-encoding-callback)
    - [`fs.writeFile(file, data[, options], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback)
      - [Using `fs.writeFile()` with file descriptors](https://nodejs.org/docs/latest/api/fs.html#using-fswritefile-with-file-descriptors)
    - [`fs.writev(fd, buffers[, position], callback)`](https://nodejs.org/docs/latest/api/fs.html#fswritevfd-buffers-position-callback)
  - [Synchronous API](https://nodejs.org/docs/latest/api/fs.html#synchronous-api)
    - [`fs.accessSync(path[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fsaccesssyncpath-mode)
    - [`fs.appendFileSync(path, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsappendfilesyncpath-data-options)
    - [`fs.chmodSync(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fschmodsyncpath-mode)
    - [`fs.chownSync(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fschownsyncpath-uid-gid)
    - [`fs.closeSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsclosesyncfd)
    - [`fs.copyFileSync(src, dest[, mode])`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesyncsrc-dest-mode)
    - [`fs.cpSync(src, dest[, options])`](https://nodejs.org/docs/latest/api/fs.html#fscpsyncsrc-dest-options)
    - [`fs.existsSync(path)`](https://nodejs.org/docs/latest/api/fs.html#fsexistssyncpath)
    - [`fs.fchmodSync(fd, mode)`](https://nodejs.org/docs/latest/api/fs.html#fsfchmodsyncfd-mode)
    - [`fs.fchownSync(fd, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fsfchownsyncfd-uid-gid)
    - [`fs.fdatasyncSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsfdatasyncsyncfd)
    - [`fs.fstatSync(fd[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsfstatsyncfd-options)
    - [`fs.fsyncSync(fd)`](https://nodejs.org/docs/latest/api/fs.html#fsfsyncsyncfd)
    - [`fs.ftruncateSync(fd[, len])`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatesyncfd-len)
    - [`fs.futimesSync(fd, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fsfutimessyncfd-atime-mtime)
    - [`fs.globSync(pattern[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsglobsyncpattern-options)
    - [`fs.lchmodSync(path, mode)`](https://nodejs.org/docs/latest/api/fs.html#fslchmodsyncpath-mode)
    - [`fs.lchownSync(path, uid, gid)`](https://nodejs.org/docs/latest/api/fs.html#fslchownsyncpath-uid-gid)
    - [`fs.lutimesSync(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fslutimessyncpath-atime-mtime)
    - [`fs.linkSync(existingPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fslinksyncexistingpath-newpath)
    - [`fs.lstatSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fslstatsyncpath-options)
    - [`fs.mkdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirsyncpath-options)
    - [`fs.mkdtempSync(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempsyncprefix-options)
    - [`fs.mkdtempDisposableSync(prefix[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempdisposablesyncprefix-options)
    - [`fs.opendirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsopendirsyncpath-options)
    - [`fs.openSync(path[, flags[, mode]])`](https://nodejs.org/docs/latest/api/fs.html#fsopensyncpath-flags-mode)
    - [`fs.readdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options)
    - [`fs.readFileSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options)
    - [`fs.readlinkSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadlinksyncpath-options)
    - [`fs.readSync(fd, buffer, offset, length[, position])`](https://nodejs.org/docs/latest/api/fs.html#fsreadsyncfd-buffer-offset-length-position)
    - [`fs.readSync(fd, buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsreadsyncfd-buffer-options)
    - [`fs.readvSync(fd, buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#fsreadvsyncfd-buffers-position)
    - [`fs.realpathSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathsyncpath-options)
    - [`fs.realpathSync.native(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathsyncnativepath-options)
    - [`fs.renameSync(oldPath, newPath)`](https://nodejs.org/docs/latest/api/fs.html#fsrenamesyncoldpath-newpath)
    - [`fs.rmdirSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirsyncpath-options)
    - [`fs.rmSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsrmsyncpath-options)
    - [`fs.statSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsstatsyncpath-options)
    - [`fs.statfsSync(path[, options])`](https://nodejs.org/docs/latest/api/fs.html#fsstatfssyncpath-options)
    - [`fs.symlinkSync(target, path[, type])`](https://nodejs.org/docs/latest/api/fs.html#fssymlinksynctarget-path-type)
    - [`fs.truncateSync(path[, len])`](https://nodejs.org/docs/latest/api/fs.html#fstruncatesyncpath-len)
    - [`fs.unlinkSync(path)`](https://nodejs.org/docs/latest/api/fs.html#fsunlinksyncpath)
    - [`fs.utimesSync(path, atime, mtime)`](https://nodejs.org/docs/latest/api/fs.html#fsutimessyncpath-atime-mtime)
    - [`fs.writeFileSync(file, data[, options])`](https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options)
    - [`fs.writeSync(fd, buffer, offset[, length[, position]])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-offset-length-position)
    - [`fs.writeSync(fd, buffer[, options])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-buffer-options)
    - [`fs.writeSync(fd, string[, position[, encoding]])`](https://nodejs.org/docs/latest/api/fs.html#fswritesyncfd-string-position-encoding)
    - [`fs.writevSync(fd, buffers[, position])`](https://nodejs.org/docs/latest/api/fs.html#fswritevsyncfd-buffers-position)
  - [Common Objects](https://nodejs.org/docs/latest/api/fs.html#common-objects)
    - [Class: `fs.Dir`](https://nodejs.org/docs/latest/api/fs.html#class-fsdir)
      - [`dir.close()`](https://nodejs.org/docs/latest/api/fs.html#dirclose)
      - [`dir.close(callback)`](https://nodejs.org/docs/latest/api/fs.html#dirclosecallback)
      - [`dir.closeSync()`](https://nodejs.org/docs/latest/api/fs.html#dirclosesync)
      - [`dir.path`](https://nodejs.org/docs/latest/api/fs.html#dirpath)
      - [`dir.read()`](https://nodejs.org/docs/latest/api/fs.html#dirread)
      - [`dir.read(callback)`](https://nodejs.org/docs/latest/api/fs.html#dirreadcallback)
      - [`dir.readSync()`](https://nodejs.org/docs/latest/api/fs.html#dirreadsync)
      - [`dir[Symbol.asyncIterator]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymbolasynciterator)
      - [`dir[Symbol.asyncDispose]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymbolasyncdispose)
      - [`dir[Symbol.dispose]()`](https://nodejs.org/docs/latest/api/fs.html#dirsymboldispose)
    - [Class: `fs.Dirent`](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent)
      - [`dirent.isBlockDevice()`](https://nodejs.org/docs/latest/api/fs.html#direntisblockdevice)
      - [`dirent.isCharacterDevice()`](https://nodejs.org/docs/latest/api/fs.html#direntischaracterdevice)
      - [`dirent.isDirectory()`](https://nodejs.org/docs/latest/api/fs.html#direntisdirectory)
      - [`dirent.isFIFO()`](https://nodejs.org/docs/latest/api/fs.html#direntisfifo)
      - [`dirent.isFile()`](https://nodejs.org/docs/latest/api/fs.html#direntisfile)
      - [`dirent.isSocket()`](https://nodejs.org/docs/latest/api/fs.html#direntissocket)
      - [`dirent.isSymbolicLink()`](https://nodejs.org/docs/latest/api/fs.html#direntissymboliclink)
      - [`dirent.name`](https://nodejs.org/docs/latest/api/fs.html#direntname)
      - [`dirent.parentPath`](https://nodejs.org/docs/latest/api/fs.html#direntparentpath)
    - [Class: `fs.FSWatcher`](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)
      - [Event: `'change'`](https://nodejs.org/docs/latest/api/fs.html#event-change)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_1)
      - [Event: `'error'`](https://nodejs.org/docs/latest/api/fs.html#event-error)
      - [`watcher.close()`](https://nodejs.org/docs/latest/api/fs.html#watcherclose)
      - [`watcher.ref()`](https://nodejs.org/docs/latest/api/fs.html#watcherref)
      - [`watcher.unref()`](https://nodejs.org/docs/latest/api/fs.html#watcherunref)
    - [Class: `fs.StatWatcher`](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)
      - [`watcher.ref()`](https://nodejs.org/docs/latest/api/fs.html#watcherref_1)
      - [`watcher.unref()`](https://nodejs.org/docs/latest/api/fs.html#watcherunref_1)
    - [Class: `fs.ReadStream`](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_2)
      - [Event: `'open'`](https://nodejs.org/docs/latest/api/fs.html#event-open)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready)
      - [`readStream.bytesRead`](https://nodejs.org/docs/latest/api/fs.html#readstreambytesread)
      - [`readStream.path`](https://nodejs.org/docs/latest/api/fs.html#readstreampath)
      - [`readStream.pending`](https://nodejs.org/docs/latest/api/fs.html#readstreampending)
    - [Class: `fs.Stats`](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)
      - [`stats.isBlockDevice()`](https://nodejs.org/docs/latest/api/fs.html#statsisblockdevice)
      - [`stats.isCharacterDevice()`](https://nodejs.org/docs/latest/api/fs.html#statsischaracterdevice)
      - [`stats.isDirectory()`](https://nodejs.org/docs/latest/api/fs.html#statsisdirectory)
      - [`stats.isFIFO()`](https://nodejs.org/docs/latest/api/fs.html#statsisfifo)
      - [`stats.isFile()`](https://nodejs.org/docs/latest/api/fs.html#statsisfile)
      - [`stats.isSocket()`](https://nodejs.org/docs/latest/api/fs.html#statsissocket)
      - [`stats.isSymbolicLink()`](https://nodejs.org/docs/latest/api/fs.html#statsissymboliclink)
      - [`stats.dev`](https://nodejs.org/docs/latest/api/fs.html#statsdev)
      - [`stats.ino`](https://nodejs.org/docs/latest/api/fs.html#statsino)
      - [`stats.mode`](https://nodejs.org/docs/latest/api/fs.html#statsmode)
      - [`stats.nlink`](https://nodejs.org/docs/latest/api/fs.html#statsnlink)
      - [`stats.uid`](https://nodejs.org/docs/latest/api/fs.html#statsuid)
      - [`stats.gid`](https://nodejs.org/docs/latest/api/fs.html#statsgid)
      - [`stats.rdev`](https://nodejs.org/docs/latest/api/fs.html#statsrdev)
      - [`stats.size`](https://nodejs.org/docs/latest/api/fs.html#statssize)
      - [`stats.blksize`](https://nodejs.org/docs/latest/api/fs.html#statsblksize)
      - [`stats.blocks`](https://nodejs.org/docs/latest/api/fs.html#statsblocks)
      - [`stats.atimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsatimems)
      - [`stats.mtimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsmtimems)
      - [`stats.ctimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsctimems)
      - [`stats.birthtimeMs`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtimems)
      - [`stats.atimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsatimens)
      - [`stats.mtimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsmtimens)
      - [`stats.ctimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsctimens)
      - [`stats.birthtimeNs`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtimens)
      - [`stats.atime`](https://nodejs.org/docs/latest/api/fs.html#statsatime)
      - [`stats.mtime`](https://nodejs.org/docs/latest/api/fs.html#statsmtime)
      - [`stats.ctime`](https://nodejs.org/docs/latest/api/fs.html#statsctime)
      - [`stats.birthtime`](https://nodejs.org/docs/latest/api/fs.html#statsbirthtime)
      - [Stat time values](https://nodejs.org/docs/latest/api/fs.html#stat-time-values)
    - [Class: `fs.StatFs`](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs)
      - [`statfs.bavail`](https://nodejs.org/docs/latest/api/fs.html#statfsbavail)
      - [`statfs.bfree`](https://nodejs.org/docs/latest/api/fs.html#statfsbfree)
      - [`statfs.blocks`](https://nodejs.org/docs/latest/api/fs.html#statfsblocks)
      - [`statfs.bsize`](https://nodejs.org/docs/latest/api/fs.html#statfsbsize)
      - [`statfs.ffree`](https://nodejs.org/docs/latest/api/fs.html#statfsffree)
      - [`statfs.files`](https://nodejs.org/docs/latest/api/fs.html#statfsfiles)
      - [`statfs.type`](https://nodejs.org/docs/latest/api/fs.html#statfstype)
    - [Class: `fs.Utf8Stream`](https://nodejs.org/docs/latest/api/fs.html#class-fsutf8stream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_3)
      - [Event: `'drain'`](https://nodejs.org/docs/latest/api/fs.html#event-drain)
      - [Event: `'drop'`](https://nodejs.org/docs/latest/api/fs.html#event-drop)
      - [Event: `'error'`](https://nodejs.org/docs/latest/api/fs.html#event-error_1)
      - [Event: `'finish'`](https://nodejs.org/docs/latest/api/fs.html#event-finish)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready_1)
      - [Event: `'write'`](https://nodejs.org/docs/latest/api/fs.html#event-write)
      - [`new fs.Utf8Stream([options])`](https://nodejs.org/docs/latest/api/fs.html#new-fsutf8streamoptions)
      - [`utf8Stream.append`](https://nodejs.org/docs/latest/api/fs.html#utf8streamappend)
      - [`utf8Stream.contentMode`](https://nodejs.org/docs/latest/api/fs.html#utf8streamcontentmode)
      - [`utf8Stream.destroy()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamdestroy)
      - [`utf8Stream.end()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamend)
      - [`utf8Stream.fd`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfd)
      - [`utf8Stream.file`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfile)
      - [`utf8Stream.flush(callback)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamflushcallback)
      - [`utf8Stream.flushSync()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamflushsync)
      - [`utf8Stream.fsync`](https://nodejs.org/docs/latest/api/fs.html#utf8streamfsync)
      - [`utf8Stream.maxLength`](https://nodejs.org/docs/latest/api/fs.html#utf8streammaxlength)
      - [`utf8Stream.minLength`](https://nodejs.org/docs/latest/api/fs.html#utf8streamminlength)
      - [`utf8Stream.mkdir`](https://nodejs.org/docs/latest/api/fs.html#utf8streammkdir)
      - [`utf8Stream.mode`](https://nodejs.org/docs/latest/api/fs.html#utf8streammode)
      - [`utf8Stream.periodicFlush`](https://nodejs.org/docs/latest/api/fs.html#utf8streamperiodicflush)
      - [`utf8Stream.reopen(file)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamreopenfile)
      - [`utf8Stream.sync`](https://nodejs.org/docs/latest/api/fs.html#utf8streamsync)
      - [`utf8Stream.write(data)`](https://nodejs.org/docs/latest/api/fs.html#utf8streamwritedata)
      - [`utf8Stream.writing`](https://nodejs.org/docs/latest/api/fs.html#utf8streamwriting)
      - [`utf8Stream[Symbol.dispose]()`](https://nodejs.org/docs/latest/api/fs.html#utf8streamsymboldispose)
    - [Class: `fs.WriteStream`](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)
      - [Event: `'close'`](https://nodejs.org/docs/latest/api/fs.html#event-close_4)
      - [Event: `'open'`](https://nodejs.org/docs/latest/api/fs.html#event-open_1)
      - [Event: `'ready'`](https://nodejs.org/docs/latest/api/fs.html#event-ready_2)
      - [`writeStream.bytesWritten`](https://nodejs.org/docs/latest/api/fs.html#writestreambyteswritten)
      - [`writeStream.close([callback])`](https://nodejs.org/docs/latest/api/fs.html#writestreamclosecallback)
      - [`writeStream.path`](https://nodejs.org/docs/latest/api/fs.html#writestreampath)
      - [`writeStream.pending`](https://nodejs.org/docs/latest/api/fs.html#writestreampending)
    - [`fs.constants`](https://nodejs.org/docs/latest/api/fs.html#fsconstants)
      - [FS constants](https://nodejs.org/docs/latest/api/fs.html#fs-constants)
        - [File access constants](https://nodejs.org/docs/latest/api/fs.html#file-access-constants)
        - [File copy constants](https://nodejs.org/docs/latest/api/fs.html#file-copy-constants)
        - [File open constants](https://nodejs.org/docs/latest/api/fs.html#file-open-constants)
        - [File type constants](https://nodejs.org/docs/latest/api/fs.html#file-type-constants)
        - [File mode constants](https://nodejs.org/docs/latest/api/fs.html#file-mode-constants)
  - [Notes](https://nodejs.org/docs/latest/api/fs.html#notes)
    - [Ordering of callback and promise-based operations](https://nodejs.org/docs/latest/api/fs.html#ordering-of-callback-and-promise-based-operations)
    - [File paths](https://nodejs.org/docs/latest/api/fs.html#file-paths)
      - [String paths](https://nodejs.org/docs/latest/api/fs.html#string-paths)
      - [File URL paths](https://nodejs.org/docs/latest/api/fs.html#file-url-paths)
        - [Platform-specific considerations](https://nodejs.org/docs/latest/api/fs.html#platform-specific-considerations)
      - [Buffer paths](https://nodejs.org/docs/latest/api/fs.html#buffer-paths)
      - [Per-drive working directories on Windows](https://nodejs.org/docs/latest/api/fs.html#per-drive-working-directories-on-windows)
    - [File descriptors](https://nodejs.org/docs/latest/api/fs.html#file-descriptors_1)
    - [Threadpool usage](https://nodejs.org/docs/latest/api/fs.html#threadpool-usage)
    - [File system flags](https://nodejs.org/docs/latest/api/fs.html#file-system-flags)

## File system[\#](https://nodejs.org/docs/latest/api/fs.html\#file-system)

[Stability: 2](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/fs.js](https://github.com/nodejs/node/blob/v25.0.0/lib/fs.js)

The `node:fs` module enables interacting with the file system in a
way modeled on standard POSIX functions.

To use the promise-based APIs:

```js mjs
import * as fs from 'node:fs/promises';const fs = require('node:fs/promises');copy
```

To use the callback and sync APIs:

```js mjs
import * as fs from 'node:fs';const fs = require('node:fs');copy
```

All file system operations have synchronous, callback, and promise-based
forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

### Promise example[\#](https://nodejs.org/docs/latest/api/fs.html\#promise-example)

Promise-based operations return a promise that is fulfilled when the
asynchronous operation is complete.

```js mjs
import { unlink } from 'node:fs/promises';

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}const { unlink } = require('node:fs/promises');

(async function(path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello');copy
```

### Callback example[\#](https://nodejs.org/docs/latest/api/fs.html\#callback-example)

The callback form takes a completion callback function as its last
argument and invokes the operation asynchronously. The arguments passed to
the completion callback depend on the method, but the first argument is always
reserved for an exception. If the operation is completed successfully, then
the first argument is `null` or `undefined`.

```js mjs
import { unlink } from 'node:fs';

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});const { unlink } = require('node:fs');

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});copy
```

The callback-based versions of the `node:fs` module APIs are preferable over
the use of the promise APIs when maximal performance (both in terms of
execution time and memory allocation) is required.

### Synchronous example[\#](https://nodejs.org/docs/latest/api/fs.html\#synchronous-example)

The synchronous APIs block the Node.js event loop and further JavaScript
execution until the operation is complete. Exceptions are thrown immediately
and can be handled using `try…catch`, or can be allowed to bubble up.

```js mjs
import { unlinkSync } from 'node:fs';

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}const { unlinkSync } = require('node:fs');

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}copy
```

### Promises API[\#](https://nodejs.org/docs/latest/api/fs.html\#promises-api)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | Exposed as `require('fs/promises')`. |
| v11.14.0, v10.17.0 | This API is no longer experimental. |
| v10.1.0 | The API is accessible via `require('fs').promises` only. |
| v10.0.0 | Added in: v10.0.0 |

The `fs/promises` API provides asynchronous file system methods that return
promises.

The promise APIs use the underlying Node.js threadpool to perform file
system operations off the event loop thread. These operations are not
synchronized or threadsafe. Care must be taken when performing multiple
concurrent modifications on the same file or data corruption may occur.

#### Class: `FileHandle`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-filehandle)

Added in: v10.0.0

A [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) object is an object wrapper for a numeric file descriptor.

Instances of the [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) object are created by the `fsPromises.open()`
method.

All [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) objects are [<EventEmitter>](https://nodejs.org/docs/latest/api/events.html#class-eventemitter) s.

If a [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) is not closed using the `filehandle.close()` method, it will
try to automatically close the file descriptor and emit a process warning,
helping to prevent memory leaks. Please do not rely on this behavior because
it can be unreliable and the file may not be closed. Instead, always explicitly
close [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) s. Node.js may change this behavior in the future.

##### Event: `'close'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-close)

Added in: v15.4.0

The `'close'` event is emitted when the [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) has been closed and can no
longer be used.

##### `filehandle.appendFile(data[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandleappendfiledata-options)

History

| Version | Changes |
| --- | --- |
| v21.1.0, v20.10.0 | The `flush` option is now supported. |
| v15.14.0, v14.18.0 | The `data` argument supports `AsyncIterable`, `Iterable`, and `Stream`. |
| v14.0.0 | The `data` parameter won't coerce unsupported input to strings anymore. |
| v10.0.0 | Added in: v10.0.0 |

- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface) \| [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) \| [<Stream>](https://nodejs.org/docs/latest/api/stream.html#stream)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) allows aborting an in-progress writeFile. **Default:** `undefined`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Alias of [`filehandle.writeFile()`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritefiledata-options).

When operating on file handles, the mode cannot be changed from what it was set
to with [`fsPromises.open()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopenpath-flags-mode). Therefore, this is equivalent to
[`filehandle.writeFile()`](https://nodejs.org/docs/latest/api/fs.html#filehandlewritefiledata-options).

##### `filehandle.chmod(mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlechmodmode)

Added in: v10.0.0

- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) the file mode bit mask.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Modifies the permissions on the file. See [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html).

##### `filehandle.chown(uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlechownuid-gid)

Added in: v10.0.0

- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new owner's user id.
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new group's group id.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the ownership of the file. A wrapper for [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html).

##### `filehandle.close()`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandleclose)

Added in: v10.0.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Closes the file handle after waiting for any pending operation on the handle to
complete.

```js mjs
import { open } from 'node:fs/promises';

let filehandle;
try {
  filehandle = await open('thefile.txt', 'r');
} finally {
  await filehandle?.close();
} copy
```

##### `filehandle.createReadStream([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlecreatereadstreamoptions)

Added in: v16.11.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `null`
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `emitClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `start` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `end` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `Infinity`
  - `highWaterMark` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `64 * 1024`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) **Default:** `undefined`
- Returns: [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)

`options` can include `start` and `end` values to read a range of bytes from
the file instead of the entire file. Both `start` and `end` are inclusive and
start counting at 0, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. If `start` is
omitted or `undefined`, `filehandle.createReadStream()` reads sequentially from
the current file position. The `encoding` can be any one of those accepted by
[<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

If the `FileHandle` points to a character device that only supports blocking
reads (such as keyboard or sound card), read operations do not finish until data
is available. This can prevent the process from exiting and the stream from
closing naturally.

By default, the stream will emit a `'close'` event after it has been
destroyed. Set the `emitClose` option to `false` to change this behavior.

```js mjs
import { open } from 'node:fs/promises';

const fd = await open('/dev/input/event0');
// Create a stream from some character device.
const stream = fd.createReadStream();
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100); copy
```

If `autoClose` is false, then the file descriptor won't be closed, even if
there's an error. It is the application's responsibility to close it and make
sure there's no file descriptor leak. If `autoClose` is set to true (default
behavior), on `'error'` or `'end'` the file descriptor will be closed
automatically.

An example to read the last 10 bytes of a file which is 100 bytes long:

```js mjs
import { open } from 'node:fs/promises';

const fd = await open('sample.txt');
fd.createReadStream({ start: 90, end: 99 }); copy
```

##### `filehandle.createWriteStream([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlecreatewritestreamoptions)

History

| Version | Changes |
| --- | --- |
| v21.0.0, v20.10.0 | The `flush` option is now supported. |
| v16.11.0 | Added in: v16.11.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `emitClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `start` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `16384`
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, the underlying file descriptor is flushed
    prior to closing it. **Default:** `false`.
- Returns: [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)

`options` may also include a `start` option to allow writing data at some
position past the beginning of the file, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. Modifying a file rather than
replacing it may require the `flags` `open` option to be set to `r+` rather than
the default `r`. The `encoding` can be any one of those accepted by [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

If `autoClose` is set to true (default behavior) on `'error'` or `'finish'`
the file descriptor will be closed automatically. If `autoClose` is false,
then the file descriptor won't be closed, even if there's an error.
It is the application's responsibility to close it and make sure there's no
file descriptor leak.

By default, the stream will emit a `'close'` event after it has been
destroyed. Set the `emitClose` option to `false` to change this behavior.

##### `filehandle.datasync()`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandledatasync)

Added in: v10.0.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX
[`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details.

Unlike `filehandle.sync` this method does not flush modified metadata.

##### `filehandle.fd`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlefd)

Added in: v10.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The numeric file descriptor managed by the [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) object.

##### `filehandle.read(buffer, offset, length, position)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadbuffer-offset-length-position)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | Accepts bigint values as `position`. |
| v10.0.0 | Added in: v10.0.0 |

- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A buffer that will be filled with the
file data read.
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The location in the buffer at which to start filling.
**Default:** `0`
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes to read. **Default:** `buffer.byteLength - offset`
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The location where to begin reading data
from the file. If `null` or `-1`, data will be read from the current file
position, and the position will be updated. If `position` is a non-negative
integer, the current file position will remain unchanged.
**Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills upon success with an object with two properties:

  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes read
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A reference to the passed in `buffer`
    argument.

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

##### `filehandle.read([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadoptions)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | Accepts bigint values as `position`. |
| v13.11.0, v12.17.0 | Added in: v13.11.0, v12.17.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A buffer that will be filled with the
    file data read. **Default:** `Buffer.alloc(16384)`
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The location in the buffer at which to start filling.
    **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes to read. **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The location where to begin reading data
    from the file. If `null` or `-1`, data will be read from the current file
    position, and the position will be updated. If `position` is a non-negative
    integer, the current file position will remain unchanged.
    **Default:**: `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills upon success with an object with two properties:

  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes read
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A reference to the passed in `buffer`
    argument.

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

##### `filehandle.read(buffer[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadbuffer-options)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | Accepts bigint values as `position`. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A buffer that will be filled with the
file data read.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The location in the buffer at which to start filling.
    **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes to read. **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The location where to begin reading data
    from the file. If `null` or `-1`, data will be read from the current file
    position, and the position will be updated. If `position` is a non-negative
    integer, the current file position will remain unchanged.
    **Default:**: `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills upon success with an object with two properties:

  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes read
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A reference to the passed in `buffer`
    argument.

Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

##### `filehandle.readableWebStream([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadablewebstreamoptions)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v23.8.0, v22.15.0 | Removed option to create a 'bytes' stream. Streams are now always 'bytes' streams. |
| v20.0.0, v18.17.0 | Added option to create a 'bytes' stream. |
| v17.0.0 | Added in: v17.0.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When true, causes the [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) to be closed when the
    stream is closed. **Default:** `false`
- Returns: [<ReadableStream>](https://nodejs.org/docs/latest/api/webstreams.html#class-readablestream)

Returns a byte-oriented `ReadableStream` that may be used to read the file's
contents.

An error will be thrown if this method is called more than once or is called
after the `FileHandle` is closed or closing.

```js mjs
import {
  open,
} from 'node:fs/promises';

const file = await open('./some/file/to/read');

for await (const chunk of file.readableWebStream())
  console.log(chunk);

await file.close();const {
  open,
} = require('node:fs/promises');

(async () => {
  const file = await open('./some/file/to/read');

  for await (const chunk of file.readableWebStream())
    console.log(chunk);

  await file.close();
})();copy
```

While the `ReadableStream` will read the file to completion, it will not
close the `FileHandle` automatically. User code must still call the
`fileHandle.close()` method unless the `autoClose` option is set to `true`.

##### `filehandle.readFile(options)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadfileoptions)

Added in: v10.0.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows aborting an in-progress readFile
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills upon a successful read with the contents of the
file. If no encoding is specified (using `options.encoding`), the data is
returned as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object. Otherwise, the data will be a string.

Asynchronously reads the entire contents of a file.

If `options` is a string, then it specifies the `encoding`.

The [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) has to support reading.

If one or more `filehandle.read()` calls are made on a file handle and then a
`filehandle.readFile()` call is made, the data will be read from the current
position till the end of the file. It doesn't always read from the beginning
of the file.

##### `filehandle.readLines([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadlinesoptions)

Added in: v18.11.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `null`
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `emitClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `start` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `end` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `Infinity`
  - `highWaterMark` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `64 * 1024`
- Returns: [<readline.InterfaceConstructor>](https://nodejs.org/docs/latest/api/readline.html#class-interfaceconstructor)

Convenience method to create a `readline` interface and stream over the file.
See [`filehandle.createReadStream()`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatereadstreamoptions) for the options.

```js mjs
import { open } from 'node:fs/promises';

const file = await open('./some/file/to/read');

for await (const line of file.readLines()) {
  console.log(line);
}const { open } = require('node:fs/promises');

(async () => {
  const file = await open('./some/file/to/read');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();copy
```

##### `filehandle.readv(buffers[, position])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlereadvbuffers-position)

Added in: v13.13.0, v12.17.0

- `buffers` [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The offset from the beginning of the file where
the data should be read from. If `position` is not a `number`, the data will
be read from the current position. **Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills upon success an object containing two properties:

  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) the number of bytes read
  - `buffers` [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) property containing
    a reference to the `buffers` input.

Read from a file and write to an array of [<ArrayBufferView>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) s

##### `filehandle.stat([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlestatoptions)

History

| Version | Changes |
| --- | --- |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | Added in: v10.0.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the file.

##### `filehandle.sync()`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlesync)

Added in: v10.0.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail.

##### `filehandle.truncate(len)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandletruncatelen)

Added in: v10.0.0

- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Truncates the file.

If the file was larger than `len` bytes, only the first `len` bytes will be
retained in the file.

The following example retains only the first four bytes of the file:

```js mjs
import { open } from 'node:fs/promises';

let filehandle = null;
try {
  filehandle = await open('temp.txt', 'r+');
  await filehandle.truncate(4);
} finally {
  await filehandle?.close();
} copy
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes ( `'\0'`):

If `len` is negative then `0` will be used.

##### `filehandle.utimes(atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandleutimesatime-mtime)

Added in: v10.0.0

- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Change the file system timestamps of the object referenced by the [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle)
then fulfills the promise with no arguments upon success.

##### `filehandle.write(buffer, offset[, length[, position]])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlewritebuffer-offset-length-position)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | The `buffer` parameter won't coerce unsupported input to buffers anymore. |
| v10.0.0 | Added in: v10.0.0 |

- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The start position from within `buffer` where the data
to write begins.
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes from `buffer` to write. **Default:** `buffer.byteLength - offset`
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The offset from the beginning of the file where the
data from `buffer` should be written. If `position` is not a `number`,
the data will be written at the current position. See the POSIX [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html)
documentation for more detail. **Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Write `buffer` to the file.

The promise is fulfilled with an object containing two properties:

- `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) the number of bytes written
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) a reference to the
`buffer` written.

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected). For this
scenario, use [`filehandle.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatewritestreamoptions).

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

##### `filehandle.write(buffer[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlewritebuffer-options)

Added in: v18.3.0, v16.17.0

- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Write `buffer` to the file.

Similar to the above `filehandle.write` function, this version takes an
optional `options` object. If no `options` object is specified, it will
default with the above values.

##### `filehandle.write(string[, position[, encoding]])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlewritestring-position-encoding)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | The `string` parameter won't coerce unsupported input to strings anymore. |
| v10.0.0 | Added in: v10.0.0 |

- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The offset from the beginning of the file where the
data from `string` should be written. If `position` is not a `number` the
data will be written at the current position. See the POSIX [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html)
documentation for more detail. **Default:** `null`
- `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The expected string encoding. **Default:** `'utf8'`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Write `string` to the file. If `string` is not a string, the promise is
rejected with an error.

The promise is fulfilled with an object containing two properties:

- `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) the number of bytes written
- `buffer` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) a reference to the `string` written.

It is unsafe to use `filehandle.write()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected). For this
scenario, use [`filehandle.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatewritestreamoptions).

On Linux, positional writes do not work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

##### `filehandle.writeFile(data, options)`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlewritefiledata-options)

History

| Version | Changes |
| --- | --- |
| v15.14.0, v14.18.0 | The `data` argument supports `AsyncIterable`, `Iterable`, and `Stream`. |
| v14.0.0 | The `data` parameter won't coerce unsupported input to strings anymore. |
| v10.0.0 | Added in: v10.0.0 |

- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface) \| [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) \| [<Stream>](https://nodejs.org/docs/latest/api/stream.html#stream)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The expected character encoding when `data` is a
    string. **Default:** `'utf8'`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) allows aborting an in-progress writeFile. **Default:** `undefined`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Asynchronously writes data to a file, replacing the file if it already exists.
`data` can be a string, a buffer, an [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface), or an [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.
The promise is fulfilled with no arguments upon success.

If `options` is a string, then it specifies the `encoding`.

The [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) has to support writing.

It is unsafe to use `filehandle.writeFile()` multiple times on the same file
without waiting for the promise to be fulfilled (or rejected).

If one or more `filehandle.write()` calls are made on a file handle and then a
`filehandle.writeFile()` call is made, the data will be written from the
current position till the end of the file. It doesn't always write from the
beginning of the file.

##### `filehandle.writev(buffers[, position])`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlewritevbuffers-position)

Added in: v12.9.0

- `buffers` [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The offset from the beginning of the file where the
data from `buffers` should be written. If `position` is not a `number`,
the data will be written at the current position. **Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Write an array of [<ArrayBufferView>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView) s to the file.

The promise is fulfilled with an object containing a two properties:

- `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) the number of bytes written
- `buffers` [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) a reference to the `buffers`
input.

It is unsafe to call `writev()` multiple times on the same file without waiting
for the promise to be fulfilled (or rejected).

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

##### `filehandle[Symbol.asyncDispose]()`[\#](https://nodejs.org/docs/latest/api/fs.html\#filehandlesymbolasyncdispose)

History

| Version | Changes |
| --- | --- |
| v24.2.0 | No longer experimental. |
| v20.4.0, v18.18.0 | Added in: v20.4.0, v18.18.0 |

Calls `filehandle.close()` and returns a promise that fulfills when the
filehandle is closed.

#### `fsPromises.access(path[, mode])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesaccesspath-mode)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `fs.constants.F_OK`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Tests a user's permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. `mode` should be either the value `fs.constants.F_OK`
or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`,
`fs.constants.W_OK`, and `fs.constants.X_OK` (e.g.
`fs.constants.W_OK | fs.constants.R_OK`). Check [File access constants](https://nodejs.org/docs/latest/api/fs.html#file-access-constants) for
possible values of `mode`.

If the accessibility check is successful, the promise is fulfilled with no
value. If any of the accessibility checks fail, the promise is rejected
with an [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object. The following example checks if the file
`/etc/passwd` can be read and written by the current process.

```js mjs
import { access, constants } from 'node:fs/promises';

try {
  await access('/etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can access');
} catch {
  console.error('cannot access');
} copy
```

Using `fsPromises.access()` to check for the accessibility of a file before
calling `fsPromises.open()` is not recommended. Doing so introduces a race
condition, since other processes may change the file's state between the two
calls. Instead, user code should open/read/write the file directly and handle
the error raised if the file is not accessible.

#### `fsPromises.appendFile(path, data[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesappendfilepath-data-options)

History

| Version | Changes |
| --- | --- |
| v21.1.0, v20.10.0 | The `flush` option is now supported. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) filename or [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle)
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'a'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, the underlying file descriptor is flushed
    prior to closing it. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

If `options` is a string, then it specifies the `encoding`.

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

The `path` may be specified as a [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) that has been opened
for appending (using `fsPromises.open()`).

#### `fsPromises.chmod(path, mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseschmodpath-mode)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the permissions of a file.

#### `fsPromises.chown(path, uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseschownpath-uid-gid)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the ownership of a file.

#### `fsPromises.copyFile(src, dest[, mode])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisescopyfilesrc-dest-mode)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | Changed `flags` argument to `mode` and imposed stricter type validation. |
| v10.0.0 | Added in: v10.0.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source filename to copy
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination filename of the copy operation
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Optional modifiers that specify the behavior of the copy
operation. It is possible to create a mask consisting of the bitwise OR of
two or more values (e.g.
`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`)
**Default:** `0`.

  - `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest`
    already exists.
  - `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create
    a copy-on-write reflink. If the platform does not support copy-on-write,
    then a fallback copy mechanism is used.
  - `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
    create a copy-on-write reflink. If the platform does not support
    copy-on-write, then the operation will fail.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists.

No guarantees are made about the atomicity of the copy operation. If an
error occurs after the destination file has been opened for writing, an attempt
will be made to remove the destination.

```js mjs
import { copyFile, constants } from 'node:fs/promises';

try {
  await copyFile('source.txt', 'destination.txt');
  console.log('source.txt was copied to destination.txt');
} catch {
  console.error('The file could not be copied');
}

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
try {
  await copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL);
  console.log('source.txt was copied to destination.txt');
} catch {
  console.error('The file could not be copied');
} copy
```

#### `fsPromises.cp(src, dest[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisescpsrc-dest-options)

History

| Version | Changes |
| --- | --- |
| v22.3.0 | This API is no longer experimental. |
| v20.1.0, v18.17.0 | Accept an additional `mode` option to specify the copy behavior as the `mode` argument of `fs.copyFile()`. |
| v17.6.0, v16.15.0 | Accepts an additional `verbatimSymlinks` option to specify whether to perform path resolution for symlinks. |
| v16.7.0 | Added in: v16.7.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source path to copy.
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination path to copy to.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `dereference` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) dereference symlinks. **Default:** `false`.
  - `errorOnExist` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) when `force` is `false`, and the destination
    exists, throw an error. **Default:** `false`.
  - `filter` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Function to filter copied files/directories. Return
    `true` to copy the item, `false` to ignore it. When ignoring a directory,
    all of its contents will be skipped as well. Can also return a `Promise`
    that resolves to `true` or `false` **Default:** `undefined`.

    - `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) source path to copy.
    - `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) destination path to copy to.
    - Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) \| [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) A value that is coercible to `boolean` or
      a `Promise` that fulfils with such value.
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) overwrite existing file or directory. The copy
    operation will ignore errors if you set this to false and the destination
    exists. Use the `errorOnExist` option to change this behavior.
    **Default:** `true`.
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) modifiers for copy operation. **Default:** `0`.
    See `mode` flag of [`fsPromises.copyFile()`](https://nodejs.org/docs/latest/api/fs.html#fspromisescopyfilesrc-dest-mode).
  - `preserveTimestamps` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true` timestamps from `src` will
    be preserved. **Default:** `false`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) copy directories recursively **Default:** `false`
  - `verbatimSymlinks` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, path resolution for symlinks will
    be skipped. **Default:** `false`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Asynchronously copies the entire directory structure from `src` to `dest`,
including subdirectories and files.

When copying a directory to another directory, globs are not supported and
behavior is similar to `cp dir1/ dir2/`.

#### `fsPromises.glob(pattern[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesglobpattern-options)

History

| Version | Changes |
| --- | --- |
| v24.1.0, v22.17.0 | Add support for `URL` instances for `cwd` option. |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v23.7.0, v22.14.0 | Add support for `exclude` option to accept glob patterns. |
| v22.2.0 | Add support for `withFileTypes` as an option. |
| v22.0.0 | Added in: v22.0.0 |

- `pattern` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `cwd` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) current working directory. **Default:** `process.cwd()`
  - `exclude` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Function to filter out files/directories or a
    list of glob patterns to be excluded. If a function is provided, return
    `true` to exclude the item, `false` to include it. **Default:** `undefined`.
    If a string array is provided, each string should be a glob pattern that
    specifies paths to exclude. Note: Negation patterns (e.g., '!foo.js') are
    not supported.
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the glob should return paths as Dirents,
    `false` otherwise. **Default:** `false`.
- Returns: [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface) An AsyncIterator that yields the paths of files
that match the pattern.

```js mjs
import { glob } from 'node:fs/promises';

for await (const entry of glob('**/*.js'))
  console.log(entry);const { glob } = require('node:fs/promises');

(async () => {
  for await (const entry of glob('**/*.js'))
    console.log(entry);
})();copy
```

#### `fsPromises.lchmod(path, mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseslchmodpath-mode)

Deprecated since: v10.0.0

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the permissions on a symbolic link.

This method is only implemented on macOS.

#### `fsPromises.lchown(path, uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseslchownpath-uid-gid)

History

| Version | Changes |
| --- | --- |
| v10.6.0 | This API is no longer deprecated. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the ownership on a symbolic link.

#### `fsPromises.lutimes(path, atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseslutimespath-atime-mtime)

Added in: v14.5.0, v12.19.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Changes the access and modification times of a file in the same way as
[`fsPromises.utimes()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesutimespath-atime-mtime), with the difference that if the path refers to a
symbolic link, then the link is not dereferenced: instead, the timestamps of
the symbolic link itself are changed.

#### `fsPromises.link(existingPath, newPath)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseslinkexistingpath-newpath)

Added in: v10.0.0

- `existingPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Creates a new link from the `existingPath` to the `newPath`. See the POSIX
[`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail.

#### `fsPromises.lstat(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseslstatpath-options)

History

| Version | Changes |
| --- | --- |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object for the given
symbolic link `path`.

Equivalent to [`fsPromises.stat()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesstatpath-options) unless `path` refers to a symbolic link,
in which case the link itself is stat-ed, not the file that it refers to.
Refer to the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) document for more detail.

#### `fsPromises.mkdir(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesmkdirpath-options)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Not supported on Windows. **Default:** `0o777`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Upon success, fulfills with `undefined` if `recursive`
is `false`, or the first directory path created if `recursive` is `true`.

Asynchronously creates a directory.

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`
property indicating whether parent directories should be created. Calling
`fsPromises.mkdir()` when `path` is a directory that exists results in a
rejection only when `recursive` is false.

```js mjs
import { mkdir } from 'node:fs/promises';

try {
  const projectFolder = new URL('./test/project/', import.meta.url);
  const createDir = await mkdir(projectFolder, { recursive: true });

  console.log(`created ${createDir}`);
} catch (err) {
  console.error(err.message);
}const { mkdir } = require('node:fs/promises');
const { join } = require('node:path');

async function makeDirectory() {
  const projectFolder = join(__dirname, 'test', 'project');
  const dirCreation = await mkdir(projectFolder, { recursive: true });

  console.log(dirCreation);
  return dirCreation;
}

makeDirectory().catch(console.error);copy
```

#### `fsPromises.mkdtemp(prefix[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesmkdtempprefix-options)

History

| Version | Changes |
| --- | --- |
| v20.6.0, v18.19.0 | The `prefix` parameter now accepts buffers and URL. |
| v16.5.0, v14.18.0 | The `prefix` parameter now accepts an empty string. |
| v10.0.0 | Added in: v10.0.0 |

- `prefix` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a string containing the file system path
of the newly created temporary directory.

Creates a unique temporary directory. A unique directory name is generated by
appending six random characters to the end of the provided `prefix`. Due to
platform inconsistencies, avoid trailing `X` characters in `prefix`. Some
platforms, notably the BSDs, can return more than six random characters, and
replace trailing `X` characters in `prefix` with random characters.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js mjs
import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

try {
  await mkdtemp(join(tmpdir(), 'foo-'));
} catch (err) {
  console.error(err);
} copy
```

The `fsPromises.mkdtemp()` method will append the six randomly selected
characters directly to the `prefix` string. For instance, given a directory
`/tmp`, if the intention is to create a temporary directory _within_ `/tmp`, the
`prefix` must end with a trailing platform-specific path separator
( `require('node:path').sep`).

#### `fsPromises.mkdtempDisposable(prefix[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesmkdtempdisposableprefix-options)

Added in: v24.4.0

- `prefix` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a Promise for an async-disposable Object:

  - `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The path of the created directory.
  - `remove` [<AsyncFunction>](https://tc39.es/ecma262/#sec-async-function-constructor) A function which removes the created directory.
  - `[Symbol.asyncDispose]` [<AsyncFunction>](https://tc39.es/ecma262/#sec-async-function-constructor) The same as `remove`.

The resulting Promise holds an async-disposable object whose `path` property
holds the created directory path. When the object is disposed, the directory
and its contents will be removed asynchronously if it still exists. If the
directory cannot be deleted, disposal will throw an error. The object has an
async `remove()` method which will perform the same task.

Both this function and the disposal function on the resulting object are
async, so it should be used with `await` \+ `await using` as in
`await using dir = await fsPromises.mkdtempDisposable('prefix')`.

For detailed information, see the documentation of [`fsPromises.mkdtemp()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesmkdtempprefix-options).

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

#### `fsPromises.open(path, flags[, mode])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesopenpath-flags-mode)

History

| Version | Changes |
| --- | --- |
| v11.1.0 | The `flags` argument is now optional and defaults to `'r'`. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags).
**Default:** `'r'`.
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Sets the file mode (permission and sticky bits)
if the file is created. **Default:** `0o666` (readable and writable)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) object.

Opens a [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle).

Refer to the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more detail.

Some characters ( `< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by
[this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

#### `fsPromises.opendir(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesopendirpath-options)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v13.1.0, v12.16.0 | The `bufferSize` option was introduced. |
| v12.12.0 | Added in: v12.12.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `bufferSize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Number of directory entries that are buffered
    internally when reading from the directory. Higher values lead to better
    performance but higher memory usage. **Default:** `32`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Resolved `Dir` will be an [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface)
    containing all sub files and directories. **Default:** `false`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir).

Asynchronously open a directory for iterative scanning. See the POSIX
[`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html) documentation for more detail.

Creates an [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir), which contains all further functions for reading from
and cleaning up the directory.

The `encoding` option sets the encoding for the `path` while opening the
directory and subsequent read operations.

Example using async iteration:

```js mjs
import { opendir } from 'node:fs/promises';

try {
  const dir = await opendir('./');
  for await (const dirent of dir)
    console.log(dirent.name);
} catch (err) {
  console.error(err);
} copy
```

When using the async iterator, the [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir) object will be automatically
closed after the iterator exits.

#### `fsPromises.readdir(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesreaddirpath-options)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v10.11.0 | New option `withFileTypes` was added. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, reads the contents of a directory
    recursively. In recursive mode, it will list all files, sub files, and
    directories. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an array of the names of the files in
the directory excluding `'.'` and `'..'`.

Reads the contents of a directory.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames. If the `encoding` is set to `'buffer'`, the filenames returned
will be passed as [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) objects.

If `options.withFileTypes` is set to `true`, the returned array will contain
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) objects.

```js mjs
import { readdir } from 'node:fs/promises';

try {
  const files = await readdir(path);
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
} copy
```

#### `fsPromises.readFile(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesreadfilepath-options)

History

| Version | Changes |
| --- | --- |
| v15.2.0, v14.17.0 | The options argument may include an AbortSignal to abort an ongoing readFile request. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) filename or `FileHandle`
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'r'`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows aborting an in-progress readFile
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the contents of the file.

Asynchronously reads the entire contents of a file.

If no encoding is specified (using `options.encoding`), the data is returned
as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object. Otherwise, the data will be a string.

If `options` is a string, then it specifies the encoding.

When the `path` is a directory, the behavior of `fsPromises.readFile()` is
platform-specific. On macOS, Linux, and Windows, the promise will be rejected
with an error. On FreeBSD, a representation of the directory's contents will be
returned.

An example of reading a `package.json` file located in the same directory of the
running code:

```js mjs
import { readFile } from 'node:fs/promises';
try {
  const filePath = new URL('./package.json', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
async function logFile() {
  try {
    const filePath = resolve('./package.json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();copy
```

It is possible to abort an ongoing `readFile` using an [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal). If a
request is aborted the promise returned is rejected with an `AbortError`:

```js mjs
import { readFile } from 'node:fs/promises';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const promise = readFile(fileName, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
} copy
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

Any specified [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) has to support reading.

#### `fsPromises.readlink(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesreadlinkpath-options)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the `linkString` upon success.

Reads the contents of the symbolic link referred to by `path`. See the POSIX
[`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more detail. The promise is fulfilled with the
`linkString` upon success.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `'buffer'`, the link path
returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

#### `fsPromises.realpath(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesrealpathpath-options)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the resolved path upon success.

Determines the actual location of `path` using the same semantics as the
`fs.realpath.native()` function.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path. If the `encoding` is set to `'buffer'`, the path returned will be
passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

#### `fsPromises.rename(oldPath, newPath)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesrenameoldpath-newpath)

Added in: v10.0.0

- `oldPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Renames `oldPath` to `newPath`.

#### `fsPromises.rmdir(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesrmdirpath-options)

History

| Version | Changes |
| --- | --- |
| v25.0.0 | Remove `recursive` option. |
| v16.0.0 | Using `fsPromises.rmdir(path, { recursive: true })` on a `path` that is a file is no longer permitted and results in an `ENOENT` error on Windows and an `ENOTDIR` error on POSIX. |
| v16.0.0 | Using `fsPromises.rmdir(path, { recursive: true })` on a `path` that does not exist is no longer permitted and results in a `ENOENT` error. |
| v16.0.0 | The `recursive` option is deprecated, using it triggers a deprecation warning. |
| v14.14.0 | The `recursive` option is deprecated, use `fsPromises.rm` instead. |
| v13.3.0, v12.16.0 | The `maxBusyTries` option is renamed to `maxRetries`, and its default is 0. The `emfileWait` option has been removed, and `EMFILE` errors use the same retry logic as other errors. The `retryDelay` option is now supported. `ENFILE` errors are now retried. |
| v12.10.0 | The `recursive`, `maxBusyTries`, and `emfileWait` options are now supported. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) There are currently no options exposed. There used to
be options for `recursive`, `maxBusyTries`, and `emfileWait` but they were
deprecated and removed. The `options` argument is still accepted for
backwards compatibility but it is not used.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Removes the directory identified by `path`.

Using `fsPromises.rmdir()` on a file (not a directory) results in the
promise being rejected with an `ENOENT` error on Windows and an `ENOTDIR`
error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use
[`fsPromises.rm()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesrmpath-options) with options `{ recursive: true, force: true }`.

#### `fsPromises.rm(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesrmpath-options)

Added in: v14.14.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, exceptions will be ignored if `path` does
    not exist. **Default:** `false`.
  - `maxRetries` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
    `EPERM` error is encountered, Node.js will retry the operation with a linear
    backoff wait of `retryDelay` milliseconds longer on each try. This option
    represents the number of retries. This option is ignored if the `recursive`
    option is not `true`. **Default:** `0`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, perform a recursive directory removal. In
    recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The amount of time in milliseconds to wait between
    retries. This option is ignored if the `recursive` option is not `true`.
    **Default:** `100`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Removes files and directories (modeled on the standard POSIX `rm` utility).

#### `fsPromises.stat(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesstatpath-options)

History

| Version | Changes |
| --- | --- |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | Added in: v10.0.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object for the
given `path`.

#### `fsPromises.statfs(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesstatfspath-options)

Added in: v19.6.0, v18.15.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs) object should be `bigint`. **Default:** `false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs) object for the
given `path`.

#### `fsPromises.symlink(target, path[, type])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisessymlinktarget-path-type)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | If the `type` argument is `null` or omitted, Node.js will autodetect `target` type and automatically select `dir` or `file`. |
| v10.0.0 | Added in: v10.0.0 |

- `target` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Creates a symbolic link.

The `type` argument is only used on Windows platforms and can be one of `'dir'`,
`'file'`, or `'junction'`. If the `type` argument is `null`, Node.js will
autodetect `target` type and use `'file'` or `'dir'`. If the `target` does not
exist, `'file'` will be used. Windows junction points require the destination
path to be absolute. When using `'junction'`, the `target` argument will
automatically be normalized to absolute path. Junction points on NTFS volumes
can only point to directories.

#### `fsPromises.truncate(path[, len])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisestruncatepath-len)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Truncates (shortens or extends the length) of the content at `path` to `len`
bytes.

#### `fsPromises.unlink(path)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesunlinkpath)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

If `path` refers to a symbolic link, then the link is removed without affecting
the file or directory to which that link refers. If the `path` refers to a file
path that is not a symbolic link, the file is deleted. See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html)
documentation for more detail.

#### `fsPromises.utimes(path, atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesutimespath-atime-mtime)

Added in: v10.0.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

- Values can be either numbers representing Unix epoch time, `Date` s, or a
numeric string like `'123456789.0'`.
- If the value can not be converted to a number, or is `NaN`, `Infinity`, or
`-Infinity`, an `Error` will be thrown.

#### `fsPromises.watch(filename[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseswatchfilename-options)

Added in: v15.9.0, v14.18.0

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `persistent` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Indicates whether the process should continue to run
    as long as files are being watched. **Default:** `true`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Indicates whether all subdirectories should be
    watched, or only the current directory. This applies when a directory is
    specified, and only on supported platforms (See [caveats](https://nodejs.org/docs/latest/api/fs.html#caveats)). **Default:** `false`.
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Specifies the character encoding to be used for the
    filename passed to the listener. **Default:** `'utf8'`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) An [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) used to signal when the watcher
    should stop.
  - `maxQueue` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Specifies the number of events to queue between iterations
    of the [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface) returned. **Default:** `2048`.
  - `overflow` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Either `'ignore'` or `'throw'` when there are more events to be
    queued than `maxQueue` allows. `'ignore'` means overflow events are dropped and a
    warning is emitted, while `'throw'` means to throw an exception. **Default:** `'ignore'`.
- Returns: [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface) of objects with the properties:

  - `eventType` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The type of change
  - `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) The name of the file changed.

Returns an async iterator that watches for changes on `filename`, where `filename`
is either a file or a directory.

```js
const { watch } = require('node:fs/promises');

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const watcher = watch(__filename, { signal });
    for await (const event of watcher)
      console.log(event);
  } catch (err) {
    if (err.name === 'AbortError')
      return;
    throw err;
  }
})(); copy
```

On most platforms, `'rename'` is emitted whenever a filename appears or
disappears in the directory.

All the [caveats](https://nodejs.org/docs/latest/api/fs.html#caveats) for `fs.watch()` also apply to `fsPromises.watch()`.

#### `fsPromises.writeFile(file, data[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromiseswritefilefile-data-options)

History

| Version | Changes |
| --- | --- |
| v21.0.0, v20.10.0 | The `flush` option is now supported. |
| v15.14.0, v14.18.0 | The `data` argument supports `AsyncIterable`, `Iterable`, and `Stream`. |
| v15.2.0, v14.17.0 | The options argument may include an AbortSignal to abort an ongoing writeFile request. |
| v14.0.0 | The `data` parameter won't coerce unsupported input to strings anymore. |
| v10.0.0 | Added in: v10.0.0 |

- `file` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) filename or `FileHandle`
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface) \| [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) \| [<Stream>](https://nodejs.org/docs/latest/api/stream.html#stream)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'w'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If all data is successfully written to the file, and
    `flush` is `true`, `filehandle.sync()` is used to flush the data.
    **Default:** `false`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows aborting an in-progress writeFile
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with `undefined` upon success.

Asynchronously writes data to a file, replacing the file if it already exists.
`data` can be a string, a buffer, an [<AsyncIterable>](https://tc39.github.io/ecma262/#sec-asynciterable-interface), or an [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) object.

The `encoding` option is ignored if `data` is a buffer.

If `options` is a string, then it specifies the encoding.

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

Any specified [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) has to support writing.

It is unsafe to use `fsPromises.writeFile()` multiple times on the same file
without waiting for the promise to be settled.

Similarly to `fsPromises.readFile` \- `fsPromises.writeFile` is a convenience
method that performs multiple `write` calls internally to write the buffer
passed to it. For performance sensitive code consider using
[`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options) or [`filehandle.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#filehandlecreatewritestreamoptions).

It is possible to use an [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) to cancel an `fsPromises.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js mjs
import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

try {
  const controller = new AbortController();
  const { signal } = controller;
  const data = new Uint8Array(Buffer.from('Hello Node.js'));
  const promise = writeFile('message.txt', data, { signal });

  // Abort the request before the promise settles.
  controller.abort();

  await promise;
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
} copy
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

#### `fsPromises.constants`[\#](https://nodejs.org/docs/latest/api/fs.html\#fspromisesconstants)

Added in: v18.4.0, v16.17.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns an object containing commonly used constants for file system
operations. The object is the same as `fs.constants`. See [FS constants](https://nodejs.org/docs/latest/api/fs.html#fs-constants)
for more details.

### Callback API[\#](https://nodejs.org/docs/latest/api/fs.html\#callback-api)

The callback APIs perform all operations asynchronously, without blocking the
event loop, then invoke a callback function upon completion or error.

The callback APIs use the underlying Node.js threadpool to perform file
system operations off the event loop thread. These operations are not
synchronized or threadsafe. Care must be taken when performing multiple
concurrent modifications on the same file or data corruption may occur.

#### `fs.access(path[, mode], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsaccesspath-mode-callback)

History

| Version | Changes |
| --- | --- |
| v25.0.0 | The constants `fs.F_OK`, `fs.R_OK`, `fs.W_OK` and `fs.X_OK` which were present directly on `fs` are removed. |
| v20.8.0 | The constants `fs.F_OK`, `fs.R_OK`, `fs.W_OK` and `fs.X_OK` which were present directly on `fs` are deprecated. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v6.3.0 | The constants like `fs.R_OK`, etc which were present directly on `fs` were moved into `fs.constants` as a soft deprecation. Thus for Node.js `< v6.3.0` use `fs` to access those constants, or do something like `(fs.constants || fs).R_OK` to work with all versions. |
| v0.11.15 | Added in: v0.11.15 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `fs.constants.F_OK`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Tests a user's permissions for the file or directory specified by `path`.
The `mode` argument is an optional integer that specifies the accessibility
checks to be performed. `mode` should be either the value `fs.constants.F_OK`
or a mask consisting of the bitwise OR of any of `fs.constants.R_OK`,
`fs.constants.W_OK`, and `fs.constants.X_OK` (e.g.
`fs.constants.W_OK | fs.constants.R_OK`). Check [File access constants](https://nodejs.org/docs/latest/api/fs.html#file-access-constants) for
possible values of `mode`.

The final argument, `callback`, is a callback function that is invoked with
a possible error argument. If any of the accessibility checks fail, the error
argument will be an `Error` object. The following examples check if
`package.json` exists, and if it is readable or writable.

```js mjs
import { access, constants } from 'node:fs';

const file = 'package.json';

// Check if the file exists in the current directory.
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file is readable and writable.
access(file, constants.R_OK | constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not' : 'is'} readable and writable`);
}); copy
```

Do not use `fs.access()` to check for the accessibility of a file before calling
`fs.open()`, `fs.readFile()`, or `fs.writeFile()`. Doing
so introduces a race condition, since other processes may change the file's
state between the two calls. Instead, user code should open/read/write the
file directly and handle the error raised if the file is not accessible.

**write (NOT RECOMMENDED)**

```js mjs
import { access, open, close } from 'node:fs';

access('myfile', (err) => {
  if (!err) {
    console.error('myfile already exists');
    return;
  }

  open('myfile', 'wx', (err, fd) => {
    if (err) throw err;

    try {
      writeMyData(fd);
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
}); copy
```

**write (RECOMMENDED)**

```js mjs
import { open, close } from 'node:fs';

open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  try {
    writeMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
}); copy
```

**read (NOT RECOMMENDED)**

```js mjs
import { access, open, close } from 'node:fs';
access('myfile', (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  open('myfile', 'r', (err, fd) => {
    if (err) throw err;

    try {
      readMyData(fd);
    } finally {
      close(fd, (err) => {
        if (err) throw err;
      });
    }
  });
}); copy
```

**read (RECOMMENDED)**

```js mjs
import { open, close } from 'node:fs';

open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  try {
    readMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
}); copy
```

The "not recommended" examples above check for accessibility and then use the
file; the "recommended" examples are better because they use the file directly
and handle the error, if any.

In general, check for the accessibility of a file only if the file will not be
used directly, for example when its accessibility is a signal from another
process.

On Windows, access-control policies (ACLs) on a directory may limit access to
a file or directory. The `fs.access()` function, however, does not check the
ACL and therefore may report that a path is accessible even if the ACL restricts
the user from reading or writing to it.

#### `fs.appendFile(path, data[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsappendfilepath-data-options-callback)

History

| Version | Changes |
| --- | --- |
| v21.1.0, v20.10.0 | The `flush` option is now supported. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v7.0.0 | The passed `options` object will never be modified. |
| v5.0.0 | The `file` parameter can be a file descriptor now. |
| v0.6.7 | Added in: v0.6.7 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'a'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, the underlying file descriptor is flushed
    prior to closing it. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

```js mjs
import { appendFile } from 'node:fs';

appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
}); copy
```

If `options` is a string, then it specifies the encoding:

```js mjs
import { appendFile } from 'node:fs';

appendFile('message.txt', 'data to append', 'utf8', callback); copy
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js mjs
import { open, close, appendFile } from 'node:fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('message.txt', 'a', (err, fd) => {
  if (err) throw err;

  try {
    appendFile(fd, 'data to append', 'utf8', (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    throw err;
  }
}); copy
```

#### `fs.chmod(path, mode, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fschmodpath-mode-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.30 | Added in: v0.1.30 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously changes the permissions of a file. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html) documentation for more detail.

```js mjs
import { chmod } from 'node:fs';

chmod('my_file.txt', 0o775, (err) => {
  if (err) throw err;
  console.log('The permissions for file "my_file.txt" have been changed!');
}); copy
```

##### File modes[\#](https://nodejs.org/docs/latest/api/fs.html\#file-modes)

The `mode` argument used in both the `fs.chmod()` and `fs.chmodSync()`
methods is a numeric bitmask created using a logical OR of the following
constants:

| Constant | Octal | Description |
| --- | --- | --- |
| `fs.constants.S_IRUSR` | `0o400` | read by owner |
| `fs.constants.S_IWUSR` | `0o200` | write by owner |
| `fs.constants.S_IXUSR` | `0o100` | execute/search by owner |
| `fs.constants.S_IRGRP` | `0o40` | read by group |
| `fs.constants.S_IWGRP` | `0o20` | write by group |
| `fs.constants.S_IXGRP` | `0o10` | execute/search by group |
| `fs.constants.S_IROTH` | `0o4` | read by others |
| `fs.constants.S_IWOTH` | `0o2` | write by others |
| `fs.constants.S_IXOTH` | `0o1` | execute/search by others |

An easier method of constructing the `mode` is to use a sequence of three
octal digits (e.g. `765`). The left-most digit ( `7` in the example), specifies
the permissions for the file owner. The middle digit ( `6` in the example),
specifies permissions for the group. The right-most digit ( `5` in the example),
specifies the permissions for others.

| Number | Description |
| --- | --- |
| `7` | read, write, and execute |
| `6` | read and write |
| `5` | read and execute |
| `4` | read only |
| `3` | write and execute |
| `2` | write only |
| `1` | execute only |
| `0` | no permission |

For example, the octal value `0o765` means:

- The owner may read, write, and execute the file.
- The group may read and write the file.
- Others may read and execute the file.

When using raw numbers where file modes are expected, any value larger than
`0o777` may result in platform-specific behaviors that are not supported to work
consistently. Therefore constants like `S_ISVTX`, `S_ISGID`, or `S_ISUID` are
not exposed in `fs.constants`.

Caveats: on Windows only the write permission can be changed, and the
distinction among the permissions of group, owner, or others is not
implemented.

#### `fs.chown(path, uid, gid, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fschownpath-uid-gid-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.97 | Added in: v0.1.97 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously changes owner and group of a file. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

#### `fs.close(fd[, callback])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsclosefd-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v15.9.0, v14.17.0 | A default callback is now used if one is not provided. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Closes the file descriptor. No arguments other than a possible exception are
given to the completion callback.

Calling `fs.close()` on any file descriptor ( `fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

#### `fs.copyFile(src, dest[, mode], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscopyfilesrc-dest-mode-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v14.0.0 | Changed `flags` argument to `mode` and imposed stricter type validation. |
| v8.5.0 | Added in: v8.5.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source filename to copy
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination filename of the copy operation
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) modifiers for copy operation. **Default:** `0`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. No arguments other than a possible exception are given to the
callback function. Node.js makes no guarantees about the atomicity of the copy
operation. If an error occurs after the destination file has been opened for
writing, Node.js will attempt to remove the destination.

`mode` is an optional integer that specifies the behavior
of the copy operation. It is possible to create a mask consisting of the bitwise
OR of two or more values (e.g.
`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).

- `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
exists.
- `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
copy-on-write reflink. If the platform does not support copy-on-write, then a
fallback copy mechanism is used.
- `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
create a copy-on-write reflink. If the platform does not support
copy-on-write, then the operation will fail.

```js mjs
import { copyFile, constants } from 'node:fs';

function callback(err) {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
}

// destination.txt will be created or overwritten by default.
copyFile('source.txt', 'destination.txt', callback);

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFile('source.txt', 'destination.txt', constants.COPYFILE_EXCL, callback); copy
```

#### `fs.cp(src, dest[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscpsrc-dest-options-callback)

History

| Version | Changes |
| --- | --- |
| v22.3.0 | This API is no longer experimental. |
| v20.1.0, v18.17.0 | Accept an additional `mode` option to specify the copy behavior as the `mode` argument of `fs.copyFile()`. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v17.6.0, v16.15.0 | Accepts an additional `verbatimSymlinks` option to specify whether to perform path resolution for symlinks. |
| v16.7.0 | Added in: v16.7.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source path to copy.
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination path to copy to.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `dereference` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) dereference symlinks. **Default:** `false`.
  - `errorOnExist` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) when `force` is `false`, and the destination
    exists, throw an error. **Default:** `false`.
  - `filter` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Function to filter copied files/directories. Return
    `true` to copy the item, `false` to ignore it. When ignoring a directory,
    all of its contents will be skipped as well. Can also return a `Promise`
    that resolves to `true` or `false` **Default:** `undefined`.

    - `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) source path to copy.
    - `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) destination path to copy to.
    - Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) \| [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) A value that is coercible to `boolean` or
      a `Promise` that fulfils with such value.
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) overwrite existing file or directory. The copy
    operation will ignore errors if you set this to false and the destination
    exists. Use the `errorOnExist` option to change this behavior.
    **Default:** `true`.
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) modifiers for copy operation. **Default:** `0`.
    See `mode` flag of [`fs.copyFile()`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesrc-dest-mode-callback).
  - `preserveTimestamps` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true` timestamps from `src` will
    be preserved. **Default:** `false`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) copy directories recursively **Default:** `false`
  - `verbatimSymlinks` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, path resolution for symlinks will
    be skipped. **Default:** `false`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously copies the entire directory structure from `src` to `dest`,
including subdirectories and files.

When copying a directory to another directory, globs are not supported and
behavior is similar to `cp dir1/ dir2/`.

#### `fs.createReadStream(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscreatereadstreampath-options)

History

| Version | Changes |
| --- | --- |
| v16.10.0 | The `fs` option does not need `open` method if an `fd` was provided. |
| v16.10.0 | The `fs` option does not need `close` method if `autoClose` is `false`. |
| v15.5.0 | Add support for `AbortSignal`. |
| v15.4.0 | The `fd` option accepts FileHandle arguments. |
| v14.0.0 | Change `emitClose` default to `true`. |
| v13.6.0, v12.17.0 | The `fs` options allow overriding the used `fs` implementation. |
| v12.10.0 | Enable `emitClose` option. |
| v11.0.0 | Impose new restrictions on `start` and `end`, throwing more appropriate errors in cases when we cannot reasonably handle the input values. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The passed `options` object will never be modified. |
| v2.3.0 | The passed `options` object can be a string now. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'r'`.
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `null`
  - `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) **Default:** `null`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `emitClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `start` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `end` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `Infinity`
  - `highWaterMark` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `64 * 1024`
  - `fs` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)

`options` can include `start` and `end` values to read a range of bytes from
the file instead of the entire file. Both `start` and `end` are inclusive and
start counting at 0, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. If `fd` is specified and `start` is
omitted or `undefined`, `fs.createReadStream()` reads sequentially from the
current file position. The `encoding` can be any one of those accepted by
[<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

If `fd` is specified, `ReadStream` will ignore the `path` argument and will use
the specified file descriptor. This means that no `'open'` event will be
emitted. `fd` should be blocking; non-blocking `fd` s should be passed to
[<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket).

If `fd` points to a character device that only supports blocking reads
(such as keyboard or sound card), read operations do not finish until data is
available. This can prevent the process from exiting and the stream from
closing naturally.

By default, the stream will emit a `'close'` event after it has been
destroyed. Set the `emitClose` option to `false` to change this behavior.

By providing the `fs` option, it is possible to override the corresponding `fs`
implementations for `open`, `read`, and `close`. When providing the `fs` option,
an override for `read` is required. If no `fd` is provided, an override for
`open` is also required. If `autoClose` is `true`, an override for `close` is
also required.

```js mjs
import { createReadStream } from 'node:fs';

// Create a stream from some character device.
const stream = createReadStream('/dev/input/event0');
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100); copy
```

If `autoClose` is false, then the file descriptor won't be closed, even if
there's an error. It is the application's responsibility to close it and make
sure there's no file descriptor leak. If `autoClose` is set to true (default
behavior), on `'error'` or `'end'` the file descriptor will be closed
automatically.

`mode` sets the file mode (permission and sticky bits), but only if the
file was created.

An example to read the last 10 bytes of a file which is 100 bytes long:

```js mjs
import { createReadStream } from 'node:fs';

createReadStream('sample.txt', { start: 90, end: 99 }); copy
```

If `options` is a string, then it specifies the encoding.

#### `fs.createWriteStream(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscreatewritestreampath-options)

History

| Version | Changes |
| --- | --- |
| v21.0.0, v20.10.0 | The `flush` option is now supported. |
| v16.10.0 | The `fs` option does not need `open` method if an `fd` was provided. |
| v16.10.0 | The `fs` option does not need `close` method if `autoClose` is `false`. |
| v15.5.0 | Add support for `AbortSignal`. |
| v15.4.0 | The `fd` option accepts FileHandle arguments. |
| v14.0.0 | Change `emitClose` default to `true`. |
| v13.6.0, v12.17.0 | The `fs` options allow overriding the used `fs` implementation. |
| v12.10.0 | Enable `emitClose` option. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The passed `options` object will never be modified. |
| v5.5.0 | The `autoClose` option is supported now. |
| v2.3.0 | The passed `options` object can be a string now. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'w'`.
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
  - `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) **Default:** `null`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `autoClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `emitClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `start` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `fs` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `16384`
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, the underlying file descriptor is flushed
    prior to closing it. **Default:** `false`.
- Returns: [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)

`options` may also include a `start` option to allow writing data at some
position past the beginning of the file, allowed values are in the
\[0, [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)\] range. Modifying a file rather than
replacing it may require the `flags` option to be set to `r+` rather than the
default `w`. The `encoding` can be any one of those accepted by [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

If `autoClose` is set to true (default behavior) on `'error'` or `'finish'`
the file descriptor will be closed automatically. If `autoClose` is false,
then the file descriptor won't be closed, even if there's an error.
It is the application's responsibility to close it and make sure there's no
file descriptor leak.

By default, the stream will emit a `'close'` event after it has been
destroyed. Set the `emitClose` option to `false` to change this behavior.

By providing the `fs` option it is possible to override the corresponding `fs`
implementations for `open`, `write`, `writev`, and `close`. Overriding `write()`
without `writev()` can reduce performance as some optimizations ( `_writev()`)
will be disabled. When providing the `fs` option, overrides for at least one of
`write` and `writev` are required. If no `fd` option is supplied, an override
for `open` is also required. If `autoClose` is `true`, an override for `close`
is also required.

Like [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream), if `fd` is specified, [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream) will ignore the
`path` argument and will use the specified file descriptor. This means that no
`'open'` event will be emitted. `fd` should be blocking; non-blocking `fd` s
should be passed to [<net.Socket>](https://nodejs.org/docs/latest/api/net.html#class-netsocket).

If `options` is a string, then it specifies the encoding.

#### `fs.exists(path, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsexistspath-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v1.0.0 | Deprecated since: v1.0.0 |
| v0.0.2 | Added in: v0.0.2 |

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated: Use [`fs.stat()`](https://nodejs.org/docs/latest/api/fs.html#fsstatpath-options-callback) or [`fs.access()`](https://nodejs.org/docs/latest/api/fs.html#fsaccesspath-mode-callback) instead.

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `exists` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Test whether or not the element at the given `path` exists by checking with the file system.
Then call the `callback` argument with either true or false:

```js mjs
import { exists } from 'node:fs';

exists('/etc/passwd', (e) => {
  console.log(e ? 'it exists' : 'no passwd!');
}); copy
```

**The parameters for this callback are not consistent with other Node.js**
**callbacks.** Normally, the first parameter to a Node.js callback is an `err`
parameter, optionally followed by other parameters. The `fs.exists()` callback
has only one boolean parameter. This is one reason `fs.access()` is recommended
instead of `fs.exists()`.

If `path` is a symbolic link, it is followed. Thus, if `path` exists but points
to a non-existent element, the callback will receive the value `false`.

Using `fs.exists()` to check for the existence of a file before calling
`fs.open()`, `fs.readFile()`, or `fs.writeFile()` is not recommended. Doing
so introduces a race condition, since other processes may change the file's
state between the two calls. Instead, user code should open/read/write the
file directly and handle the error raised if the file does not exist.

**write (NOT RECOMMENDED)**

```js mjs
import { exists, open, close } from 'node:fs';

exists('myfile', (e) => {
  if (e) {
    console.error('myfile already exists');
  } else {
    open('myfile', 'wx', (err, fd) => {
      if (err) throw err;

      try {
        writeMyData(fd);
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  }
}); copy
```

**write (RECOMMENDED)**

```js mjs
import { open, close } from 'node:fs';
open('myfile', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }

    throw err;
  }

  try {
    writeMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
}); copy
```

**read (NOT RECOMMENDED)**

```js mjs
import { open, close, exists } from 'node:fs';

exists('myfile', (e) => {
  if (e) {
    open('myfile', 'r', (err, fd) => {
      if (err) throw err;

      try {
        readMyData(fd);
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  } else {
    console.error('myfile does not exist');
  }
}); copy
```

**read (RECOMMENDED)**

```js mjs
import { open, close } from 'node:fs';

open('myfile', 'r', (err, fd) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }

  try {
    readMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
}); copy
```

The "not recommended" examples above check for existence and then use the
file; the "recommended" examples are better because they use the file directly
and handle the error, if any.

In general, check for the existence of a file only if the file won't be
used directly, for example when its existence is a signal from another
process.

#### `fs.fchmod(fd, mode, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfchmodfd-mode-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.4.7 | Added in: v0.4.7 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Sets the permissions on the file. No arguments other than a possible exception
are given to the completion callback.

See the POSIX [`fchmod(2)`](http://man7.org/linux/man-pages/man2/fchmod.2.html) documentation for more detail.

#### `fs.fchown(fd, uid, gid, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfchownfd-uid-gid-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.4.7 | Added in: v0.4.7 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Sets the owner of the file. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

#### `fs.fdatasync(fd, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfdatasyncfd-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.96 | Added in: v0.1.96 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX
[`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. No arguments other than a possible
exception are given to the completion callback.

#### `fs.fstat(fd[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfstatfd-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.95 | Added in: v0.1.95 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `stats` [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Invokes the callback with the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

#### `fs.fsync(fd, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfsyncfd-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.96 | Added in: v0.1.96 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. No arguments other
than a possible exception are given to the completion callback.

#### `fs.ftruncate(fd[, len], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsftruncatefd-len-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.8.6 | Added in: v0.8.6 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Truncates the file descriptor. No arguments other than a possible exception are
given to the completion callback.

See the POSIX [`ftruncate(2)`](http://man7.org/linux/man-pages/man2/ftruncate.2.html) documentation for more detail.

If the file referred to by the file descriptor was larger than `len` bytes, only
the first `len` bytes will be retained in the file.

For example, the following program retains only the first four bytes of the
file:

```js mjs
import { open, close, ftruncate } from 'node:fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('temp.txt', 'r+', (err, fd) => {
  if (err) throw err;

  try {
    ftruncate(fd, 4, (err) => {
      closeFd(fd);
      if (err) throw err;
    });
  } catch (err) {
    closeFd(fd);
    if (err) throw err;
  }
}); copy
```

If the file previously was shorter than `len` bytes, it is extended, and the
extended part is filled with null bytes ( `'\0'`):

If `len` is negative then `0` will be used.

#### `fs.futimes(fd, atime, mtime, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfutimesfd-atime-mtime-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v4.1.0 | Numeric strings, `NaN`, and `Infinity` are now allowed time specifiers. |
| v0.4.2 | Added in: v0.4.2 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Change the file system timestamps of the object referenced by the supplied file
descriptor. See [`fs.utimes()`](https://nodejs.org/docs/latest/api/fs.html#fsutimespath-atime-mtime-callback).

#### `fs.glob(pattern[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsglobpattern-options-callback)

History

| Version | Changes |
| --- | --- |
| v24.1.0, v22.17.0 | Add support for `URL` instances for `cwd` option. |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v23.7.0, v22.14.0 | Add support for `exclude` option to accept glob patterns. |
| v22.2.0 | Add support for `withFileTypes` as an option. |
| v22.0.0 | Added in: v22.0.0 |

- `pattern` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `cwd` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) current working directory. **Default:** `process.cwd()`
  - `exclude` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Function to filter out files/directories or a
    list of glob patterns to be excluded. If a function is provided, return
    `true` to exclude the item, `false` to include it. **Default:** `undefined`.
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the glob should return paths as Dirents,
    `false` otherwise. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- Retrieves the files matching the specified pattern.


```js mjs
import { glob } from 'node:fs';

glob('**/*.js', (err, matches) => {
  if (err) throw err;
  console.log(matches);
});const { glob } = require('node:fs');

glob('**/*.js', (err, matches) => {
  if (err) throw err;
  console.log(matches);
});copy
```

#### `fs.lchmod(path, mode, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslchmodpath-mode-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v16.0.0 | The error returned may be an `AggregateError` if more than one error is returned. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.4.7 | Deprecated since: v0.4.7 |

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) \| [<AggregateError>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

Changes the permissions on a symbolic link. No arguments other than a possible
exception are given to the completion callback.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

#### `fs.lchown(path, uid, gid, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslchownpath-uid-gid-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.6.0 | This API is no longer deprecated. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.4.7 | Documentation-only deprecation. |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Set the owner of the symbolic link. No arguments other than a possible
exception are given to the completion callback.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more detail.

#### `fs.lutimes(path, atime, mtime, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslutimespath-atime-mtime-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v14.5.0, v12.19.0 | Added in: v14.5.0, v12.19.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Changes the access and modification times of a file in the same way as
[`fs.utimes()`](https://nodejs.org/docs/latest/api/fs.html#fsutimespath-atime-mtime-callback), with the difference that if the path refers to a symbolic
link, then the link is not dereferenced: instead, the timestamps of the
symbolic link itself are changed.

No arguments other than a possible exception are given to the completion
callback.

#### `fs.link(existingPath, newPath, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslinkexistingpath-newpath-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `existingPath` and `newPath` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.31 | Added in: v0.1.31 |

- `existingPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Creates a new link from the `existingPath` to the `newPath`. See the POSIX
[`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. No arguments other than a possible
exception are given to the completion callback.

#### `fs.lstat(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslstatpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.30 | Added in: v0.1.30 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `stats` [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Retrieves the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the symbolic link referred to by the path.
The callback gets two arguments `(err, stats)` where `stats` is a [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)
object. `lstat()` is identical to `stat()`, except that if `path` is a symbolic
link, then the link itself is stat-ed, not the file that it refers to.

See the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) documentation for more details.

#### `fs.mkdir(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsmkdirpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v13.11.0, v12.17.0 | In `recursive` mode, the callback now receives the first created path as an argument. |
| v10.12.0 | The second argument can now be an `options` object with `recursive` and `mode` properties. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.8 | Added in: v0.1.8 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Not supported on Windows. **Default:** `0o777`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) Present only if a directory is created with
    `recursive` set to `true`.

Asynchronously creates a directory.

The callback is given a possible exception and, if `recursive` is `true`, the
first directory path created, `(err[, path])`.
`path` can still be `undefined` when `recursive` is `true`, if no directory was
created (for instance, if it was previously created).

The optional `options` argument can be an integer specifying `mode` (permission
and sticky bits), or an object with a `mode` property and a `recursive`
property indicating whether parent directories should be created. Calling
`fs.mkdir()` when `path` is a directory that exists results in an error only
when `recursive` is false. If `recursive` is false and the directory exists,
an `EEXIST` error occurs.

```js mjs
import { mkdir } from 'node:fs';

// Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
mkdir('./tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err;
}); copy
```

On Windows, using `fs.mkdir()` on the root directory even with recursion will
result in an error:

```js mjs
import { mkdir } from 'node:fs';

mkdir('/', { recursive: true }, (err) => {
  // => [Error: EPERM: operation not permitted, mkdir 'C:\']
}); copy
```

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

#### `fs.mkdtemp(prefix[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsmkdtempprefix-options-callback)

History

| Version | Changes |
| --- | --- |
| v20.6.0, v18.19.0 | The `prefix` parameter now accepts buffers and URL. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v16.5.0, v14.18.0 | The `prefix` parameter now accepts an empty string. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v6.2.1 | The `callback` parameter is optional now. |
| v5.10.0 | Added in: v5.10.0 |

- `prefix` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `directory` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Creates a unique temporary directory.

Generates six random characters to be appended behind a required
`prefix` to create a unique temporary directory. Due to platform
inconsistencies, avoid trailing `X` characters in `prefix`. Some platforms,
notably the BSDs, can return more than six random characters, and replace
trailing `X` characters in `prefix` with random characters.

The created directory path is passed as a string to the callback's second
parameter.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

```js mjs
import { mkdtemp } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

mkdtemp(join(tmpdir(), 'foo-'), (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
}); copy
```

The `fs.mkdtemp()` method will append the six randomly selected characters
directly to the `prefix` string. For instance, given a directory `/tmp`, if the
intention is to create a temporary directory _within_ `/tmp`, the `prefix`
must end with a trailing platform-specific path separator
( `require('node:path').sep`).

```js mjs
import { tmpdir } from 'node:os';
import { mkdtemp } from 'node:fs';

// The parent directory for the new temporary directory
const tmpDir = tmpdir();

// This method is *INCORRECT*:
mkdtemp(tmpDir, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmpabc123`.
  // A new temporary directory is created at the file system root
  // rather than *within* the /tmp directory.
});

// This method is *CORRECT*:
import { sep } from 'node:path';
mkdtemp(`${tmpDir}${sep}`, (err, directory) => {
  if (err) throw err;
  console.log(directory);
  // Will print something similar to `/tmp/abc123`.
  // A new temporary directory is created within
  // the /tmp directory.
}); copy
```

#### `fs.open(path[, flags[, mode]], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsopenpath-flags-mode-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v11.1.0 | The `flags` argument is now optional and defaults to `'r'`. |
| v9.9.0 | The `as` and `as+` flags are supported now. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.0.2 | Added in: v0.0.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags).
**Default:** `'r'`.
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666` (readable and writable)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Asynchronous file open. See the POSIX [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html) documentation for more details.

`mode` sets the file mode (permission and sticky bits), but only if the file was
created. On Windows, only the write permission can be manipulated; see
[`fs.chmod()`](https://nodejs.org/docs/latest/api/fs.html#fschmodpath-mode-callback).

The callback gets two arguments `(err, fd)`.

Some characters ( `< > : " / \ | ? *`) are reserved under Windows as documented
by [Naming Files, Paths, and Namespaces](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file). Under NTFS, if the filename contains
a colon, Node.js will open a file system stream, as described by
[this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/using-streams).

Functions based on `fs.open()` exhibit this behavior as well:
`fs.writeFile()`, `fs.readFile()`, etc.

#### `fs.openAsBlob(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsopenasblobpath-options)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v19.8.0 | Added in: v19.8.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) An optional mime type for the blob.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<Blob>](https://nodejs.org/docs/latest/api/buffer.html#class-blob) upon success.

Returns a [<Blob>](https://nodejs.org/docs/latest/api/buffer.html#class-blob) whose data is backed by the given file.

The file must not be modified after the [<Blob>](https://nodejs.org/docs/latest/api/buffer.html#class-blob) is created. Any modifications
will cause reading the [<Blob>](https://nodejs.org/docs/latest/api/buffer.html#class-blob) data to fail with a `DOMException` error.
Synchronous stat operations on the file when the `Blob` is created, and before
each read in order to detect whether the file data has been modified on disk.

```js mjs
import { openAsBlob } from 'node:fs';

const blob = await openAsBlob('the.file.txt');
const ab = await blob.arrayBuffer();
blob.stream();const { openAsBlob } = require('node:fs');

(async () => {
  const blob = await openAsBlob('the.file.txt');
  const ab = await blob.arrayBuffer();
  blob.stream();
})();copy
```

#### `fs.opendir(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsopendirpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v13.1.0, v12.16.0 | The `bufferSize` option was introduced. |
| v12.12.0 | Added in: v12.12.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `bufferSize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Number of directory entries that are buffered
    internally when reading from the directory. Higher values lead to better
    performance but higher memory usage. **Default:** `32`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `dir` [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir)

Asynchronously open a directory. See the POSIX [`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html) documentation for
more details.

Creates an [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir), which contains all further functions for reading from
and cleaning up the directory.

The `encoding` option sets the encoding for the `path` while opening the
directory and subsequent read operations.

#### `fs.read(fd, buffer, offset, length, position, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadfd-buffer-offset-length-position-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.10.0 | The `buffer` parameter can now be any `TypedArray`, or a `DataView`. |
| v7.4.0 | The `buffer` parameter can now be a `Uint8Array`. |
| v6.0.0 | The `length` parameter can now be `0`. |
| v0.0.2 | Added in: v0.0.2 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) The buffer that the data will be
written to.
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The position in `buffer` to write the data to.
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes to read.
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) Specifies where to begin reading from in the
file. If `position` is `null` or `-1 `, data will be read from the current
file position, and the file position will be updated. If `position` is
a non-negative integer, the file position will be unchanged.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Read data from the file specified by `fd`.

The callback is given the three arguments, `(err, bytesRead, buffer)`.

If the file is not modified concurrently, the end-of-file is reached when the
number of bytes read is zero.

If this method is invoked as its [`util.promisify()`](https://nodejs.org/docs/latest/api/util.html#utilpromisifyoriginal) ed version, it returns
a promise for an `Object` with `bytesRead` and `buffer` properties.

The `fs.read()` method reads data from the file specified
by the file descriptor ( `fd`).
The `length` argument indicates the maximum number
of bytes that Node.js
will attempt to read from the kernel.
However, the actual number of bytes read ( `bytesRead`) can be lower
than the specified `length` for various reasons.

For example:

- If the file is shorter than the specified `length`, `bytesRead`
will be set to the actual number of bytes read.
- If the file encounters EOF (End of File) before the buffer could
be filled, Node.js will read all available bytes until EOF is encountered,
and the `bytesRead` parameter in the callback will indicate
the actual number of bytes read, which may be less than the specified `length`.
- If the file is on a slow network `filesystem`
or encounters any other issue during reading,
`bytesRead` can be lower than the specified `length`.

Therefore, when using `fs.read()`, it's important to
check the `bytesRead` value to
determine how many bytes were actually read from the file.
Depending on your application
logic, you may need to handle cases where `bytesRead`
is lower than the specified `length`,
such as by wrapping the read call in a loop if you require
a minimum amount of bytes.

This behavior is similar to the POSIX `preadv2` function.

#### `fs.read(fd[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadfd-options-callback)

History

| Version | Changes |
| --- | --- |
| v13.11.0, v12.17.0 | Options object can be passed in to make buffer, offset, length, and position optional. |
| v13.11.0, v12.17.0 | Added in: v13.11.0, v12.17.0 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) **Default:** `Buffer.alloc(16384)`
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Similar to the [`fs.read()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback) function, this version takes an optional
`options` object. If no `options` object is specified, it will default with the
above values.

#### `fs.read(fd, buffer[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadfd-buffer-options-callback)

Added in: v18.2.0, v16.17.0

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) The buffer that the data will be
written to.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Similar to the [`fs.read()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback) function, this version takes an optional
`options` object. If no `options` object is specified, it will default with the
above values.

#### `fs.readdir(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreaddirpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.10.0 | New option `withFileTypes` was added. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v6.0.0 | The `options` parameter was added. |
| v0.1.8 | Added in: v0.1.8 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, reads the contents of a directory
    recursively. In recursive mode, it will list all files, sub files and
    directories. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `files` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<fs.Dirent\[\]>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent)

Reads the contents of a directory. The callback gets two arguments `(err, files)`
where `files` is an array of the names of the files in the directory excluding
`'.'` and `'..'`.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames passed to the callback. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) objects.

If `options.withFileTypes` is set to `true`, the `files` array will contain
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) objects.

#### `fs.readFile(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadfilepath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v16.0.0 | The error returned may be an `AggregateError` if more than one error is returned. |
| v15.2.0, v14.17.0 | The options argument may include an AbortSignal to abort an ongoing readFile request. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v5.1.0 | The `callback` will always be called with `null` as the `error` parameter in case of success. |
| v5.0.0 | The `path` parameter can be a file descriptor now. |
| v0.1.29 | Added in: v0.1.29 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'r'`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows aborting an in-progress readFile
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) \| [<AggregateError>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
  - `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Asynchronously reads the entire contents of a file.

```js mjs
import { readFile } from 'node:fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
}); copy
```

The callback is passed two arguments `(err, data)`, where `data` is the
contents of the file.

If no encoding is specified, then the raw buffer is returned.

If `options` is a string, then it specifies the encoding:

```js mjs
import { readFile } from 'node:fs';

readFile('/etc/passwd', 'utf8', callback); copy
```

When the path is a directory, the behavior of `fs.readFile()` and
[`fs.readFileSync()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilesyncpath-options) is platform-specific. On macOS, Linux, and Windows, an
error will be returned. On FreeBSD, a representation of the directory's contents
will be returned.

```js mjs
import { readFile } from 'node:fs';

// macOS, Linux, and Windows
readFile('<directory>', (err, data) => {
  // => [Error: EISDIR: illegal operation on a directory, read <directory>]
});

//  FreeBSD
readFile('<directory>', (err, data) => {
  // => null, <data>
}); copy
```

It is possible to abort an ongoing request using an `AbortSignal`. If a
request is aborted the callback is called with an `AbortError`:

```js mjs
import { readFile } from 'node:fs';

const controller = new AbortController();
const signal = controller.signal;
readFile(fileInfo[0].name, { signal }, (err, buf) => {
  // ...
});
// When you want to abort the request
controller.abort(); copy
```

The `fs.readFile()` function buffers the entire file. To minimize memory costs,
when possible prefer streaming via `fs.createReadStream()`.

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.readFile` performs.

##### File descriptors[\#](https://nodejs.org/docs/latest/api/fs.html\#file-descriptors)

1. Any specified file descriptor has to support reading.
2. If a file descriptor is specified as the `path`, it will not be closed
automatically.
3. The reading will begin at the current position. For example, if the file
already had `'Hello World'` and six bytes are read with the file descriptor,
the call to `fs.readFile()` with the same file descriptor, would give
`'World'`, rather than `'Hello World'`.

##### Performance Considerations[\#](https://nodejs.org/docs/latest/api/fs.html\#performance-considerations)

The `fs.readFile()` method asynchronously reads the contents of a file into
memory one chunk at a time, allowing the event loop to turn between each chunk.
This allows the read operation to have less impact on other activity that may
be using the underlying libuv thread pool but means that it will take longer
to read a complete file into memory.

The additional read overhead can vary broadly on different systems and depends
on the type of file being read. If the file type is not a regular file (a pipe
for instance) and Node.js is unable to determine an actual file size, each read
operation will load on 64 KiB of data. For regular files, each read will process
512 KiB of data.

For applications that require as-fast-as-possible reading of file contents, it
is better to use `fs.read()` directly and for application code to manage
reading the full contents of the file itself.

The Node.js GitHub issue [#25741](https://github.com/nodejs/node/issues/25741) provides more information and a detailed
analysis on the performance of `fs.readFile()` for multiple file sizes in
different Node.js versions.

#### `fs.readlink(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadlinkpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `linkString` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Reads the contents of the symbolic link referred to by `path`. The callback gets
two arguments `(err, linkString)`.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path passed to the callback. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

#### `fs.readv(fd, buffers[, position], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadvfd-buffers-position-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v13.13.0, v12.17.0 | Added in: v13.13.0, v12.17.0 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesRead` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)

Read from a file specified by `fd` and write to an array of `ArrayBufferView` s
using `readv()`.

`position` is the offset from the beginning of the file from where data
should be read. If `typeof position !== 'number'`, the data will be read
from the current position.

The callback will be given three arguments: `err`, `bytesRead`, and
`buffers`. `bytesRead` is how many bytes were read from the file.

If this method is invoked as its [`util.promisify()`](https://nodejs.org/docs/latest/api/util.html#utilpromisifyoriginal) ed version, it returns
a promise for an `Object` with `bytesRead` and `buffers` properties.

#### `fs.realpath(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrealpathpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v8.0.0 | Pipe/Socket resolve support was added. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v6.4.0 | Calling `realpath` now works again for various edge cases on Windows. |
| v6.0.0 | The `cache` parameter was removed. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `resolvedPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Asynchronously computes the canonical pathname by resolving `.`, `..`, and
symbolic links.

A canonical pathname is not necessarily unique. Hard links and bind mounts can
expose a file system entity through many pathnames.

This function behaves like [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html), with some exceptions:

1. No case conversion is performed on case-insensitive file systems.

2. The maximum number of symbolic links is platform-independent and generally
(much) higher than what the native [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html) implementation supports.


The `callback` gets two arguments `(err, resolvedPath)`. May use `process.cwd`
to resolve relative paths.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path passed to the callback. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

If `path` resolves to a socket or a pipe, the function will return a system
dependent name for that object.

A path that does not exist results in an ENOENT error.
`error.path` is the absolute file path.

#### `fs.realpath.native(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrealpathnativepath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v9.2.0 | Added in: v9.2.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `resolvedPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Asynchronous [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html).

The `callback` gets two arguments `(err, resolvedPath)`.

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path passed to the callback. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

#### `fs.rename(oldPath, newPath, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrenameoldpath-newpath-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `oldPath` and `newPath` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `oldPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously rename file at `oldPath` to the pathname provided
as `newPath`. In the case that `newPath` already exists, it will
be overwritten. If there is a directory at `newPath`, an error will
be raised instead. No arguments other than a possible exception are
given to the completion callback.

See also: [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html).

```js mjs
import { rename } from 'node:fs';

rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
}); copy
```

#### `fs.rmdir(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrmdirpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v25.0.0 | Remove `recursive` option. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v16.0.0 | Using `fs.rmdir(path, { recursive: true })` on a `path` that is a file is no longer permitted and results in an `ENOENT` error on Windows and an `ENOTDIR` error on POSIX. |
| v16.0.0 | Using `fs.rmdir(path, { recursive: true })` on a `path` that does not exist is no longer permitted and results in a `ENOENT` error. |
| v16.0.0 | The `recursive` option is deprecated, using it triggers a deprecation warning. |
| v14.14.0 | The `recursive` option is deprecated, use `fs.rm` instead. |
| v13.3.0, v12.16.0 | The `maxBusyTries` option is renamed to `maxRetries`, and its default is 0. The `emfileWait` option has been removed, and `EMFILE` errors use the same retry logic as other errors. The `retryDelay` option is now supported. `ENFILE` errors are now retried. |
| v12.10.0 | The `recursive`, `maxBusyTries`, and `emfileWait` options are now supported. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameters can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) There are currently no options exposed. There used to
be options for `recursive`, `maxBusyTries`, and `emfileWait` but they were
deprecated and removed. The `options` argument is still accepted for
backwards compatibility but it is not used.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). No arguments other than a possible exception are given
to the completion callback.

Using `fs.rmdir()` on a file (not a directory) results in an `ENOENT` error on
Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use [`fs.rm()`](https://nodejs.org/docs/latest/api/fs.html#fsrmpath-options-callback)
with options `{ recursive: true, force: true }`.

#### `fs.rm(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrmpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v17.3.0, v16.14.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v14.14.0 | Added in: v14.14.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, exceptions will be ignored if `path` does
    not exist. **Default:** `false`.
  - `maxRetries` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
    `EPERM` error is encountered, Node.js will retry the operation with a linear
    backoff wait of `retryDelay` milliseconds longer on each try. This option
    represents the number of retries. This option is ignored if the `recursive`
    option is not `true`. **Default:** `0`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, perform a recursive removal. In
    recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The amount of time in milliseconds to wait between
    retries. This option is ignored if the `recursive` option is not `true`.
    **Default:** `100`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously removes files and directories (modeled on the standard POSIX `rm`
utility). No arguments other than a possible exception are given to the
completion callback.

#### `fs.stat(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsstatpath-options-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `stats` [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Asynchronous [`stat(2)`](http://man7.org/linux/man-pages/man2/stat.2.html). The callback gets two arguments `(err, stats)` where
`stats` is an [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object.

In case of an error, the `err.code` will be one of [Common System Errors](https://nodejs.org/docs/latest/api/errors.html#common-system-errors).

[`fs.stat()`](https://nodejs.org/docs/latest/api/fs.html#fsstatpath-options-callback) follows symbolic links. Use [`fs.lstat()`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback) to look at the
links themselves.

Using `fs.stat()` to check for the existence of a file before calling
`fs.open()`, `fs.readFile()`, or `fs.writeFile()` is not recommended.
Instead, user code should open/read/write the file directly and handle the
error raised if the file is not available.

To check if a file exists without manipulating it afterwards, [`fs.access()`](https://nodejs.org/docs/latest/api/fs.html#fsaccesspath-mode-callback)
is recommended.

For example, given the following directory structure:

```text
- txtDir
-- file.txt
- app.js copy
```

The next program will check for the stats of the given paths:

```js mjs
import { stat } from 'node:fs';

const pathsToCheck = ['./txtDir', './txtDir/file.txt'];

for (let i = 0; i < pathsToCheck.length; i++) {
  stat(pathsToCheck[i], (err, stats) => {
    console.log(stats.isDirectory());
    console.log(stats);
  });
} copy
```

The resulting output will resemble:

```console
true
Stats {
  dev: 16777220,
  mode: 16877,
  nlink: 3,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214262,
  size: 96,
  blocks: 0,
  atimeMs: 1561174653071.963,
  mtimeMs: 1561174614583.3518,
  ctimeMs: 1561174626623.5366,
  birthtimeMs: 1561174126937.2893,
  atime: 2019-06-22T03:37:33.072Z,
  mtime: 2019-06-22T03:36:54.583Z,
  ctime: 2019-06-22T03:37:06.624Z,
  birthtime: 2019-06-22T03:28:46.937Z
}
false
Stats {
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14214074,
  size: 8,
  blocks: 8,
  atimeMs: 1561174616618.8555,
  mtimeMs: 1561174614584,
  ctimeMs: 1561174614583.8145,
  birthtimeMs: 1561174007710.7478,
  atime: 2019-06-22T03:36:56.619Z,
  mtime: 2019-06-22T03:36:54.584Z,
  ctime: 2019-06-22T03:36:54.584Z,
  birthtime: 2019-06-22T03:26:47.711Z
} copy
```

#### `fs.statfs(path[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsstatfspath-options-callback)

Added in: v19.6.0, v18.15.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs) object should be `bigint`. **Default:** `false`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `stats` [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs)

Asynchronous [`statfs(2)`](http://man7.org/linux/man-pages/man2/statfs.2.html). Returns information about the mounted file system which
contains `path`. The callback gets two arguments `(err, stats)` where `stats`
is an [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs) object.

In case of an error, the `err.code` will be one of [Common System Errors](https://nodejs.org/docs/latest/api/errors.html#common-system-errors).

#### `fs.symlink(target, path[, type], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fssymlinktarget-path-type-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.0.0 | If the `type` argument is left undefined, Node will autodetect `target` type and automatically select `dir` or `file`. |
| v7.6.0 | The `target` and `path` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v0.1.31 | Added in: v0.1.31 |

- `target` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Creates the link called `path` pointing to `target`. No arguments other than a
possible exception are given to the completion callback.

See the POSIX [`symlink(2)`](http://man7.org/linux/man-pages/man2/symlink.2.html) documentation for more details.

The `type` argument is only available on Windows and ignored on other platforms.
It can be set to `'dir'`, `'file'`, or `'junction'`. If the `type` argument is
`null`, Node.js will autodetect `target` type and use `'file'` or `'dir'`.
If the `target` does not exist, `'file'` will be used. Windows junction points
require the destination path to be absolute. When using `'junction'`, the
`target` argument will automatically be normalized to absolute path. Junction
points on NTFS volumes can only point to directories.

Relative targets are relative to the link's parent directory.

```js mjs
import { symlink } from 'node:fs';

symlink('./mew', './mewtwo', callback); copy
```

The above example creates a symbolic link `mewtwo` which points to `mew` in the
same directory:

```bash
$ tree .
.
├── mew
└── mewtwo -> ./mew copy
```

#### `fs.truncate(path[, len], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fstruncatepath-len-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v16.0.0 | The error returned may be an `AggregateError` if more than one error is returned. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.8.6 | Added in: v0.8.6 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) \| [<AggregateError>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

Truncates the file. No arguments other than a possible exception are
given to the completion callback. A file descriptor can also be passed as the
first argument. In this case, `fs.ftruncate()` is called.

```js mjs
import { truncate } from 'node:fs';
// Assuming that 'path/file.txt' is a regular file.
truncate('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was truncated');
});const { truncate } = require('node:fs');
// Assuming that 'path/file.txt' is a regular file.
truncate('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was truncated');
});copy
```

Passing a file descriptor is deprecated and may result in an error being thrown
in the future.

See the POSIX [`truncate(2)`](http://man7.org/linux/man-pages/man2/truncate.2.html) documentation for more details.

#### `fs.unlink(path, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsunlinkpath-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously removes a file or symbolic link. No arguments other than a
possible exception are given to the completion callback.

```js mjs
import { unlink } from 'node:fs';
// Assuming that 'path/file.txt' is a regular file.
unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was deleted');
}); copy
```

`fs.unlink()` will not work on a directory, empty or otherwise. To remove a
directory, use [`fs.rmdir()`](https://nodejs.org/docs/latest/api/fs.html#fsrmdirpath-options-callback).

See the POSIX [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html) documentation for more details.

#### `fs.unwatchFile(filename[, listener])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsunwatchfilefilename-listener)

Added in: v0.1.31

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `listener` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Optional, a listener previously attached using
`fs.watchFile()`

Stop watching for changes on `filename`. If `listener` is specified, only that
particular listener is removed. Otherwise, _all_ listeners are removed,
effectively stopping watching of `filename`.

Calling `fs.unwatchFile()` with a filename that is not being watched is a
no-op, not an error.

Using [`fs.watch()`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener) is more efficient than `fs.watchFile()` and
`fs.unwatchFile()`. `fs.watch()` should be used instead of `fs.watchFile()`
and `fs.unwatchFile()` when possible.

#### `fs.utimes(path, atime, mtime, callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsutimespath-atime-mtime-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v8.0.0 | `NaN`, `Infinity`, and `-Infinity` are no longer valid time specifiers. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v4.1.0 | Numeric strings, `NaN`, and `Infinity` are now allowed time specifiers. |
| v0.4.2 | Added in: v0.4.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Change the file system timestamps of the object referenced by `path`.

The `atime` and `mtime` arguments follow these rules:

- Values can be either numbers representing Unix epoch time in seconds,
`Date` s, or a numeric string like `'123456789.0'`.
- If the value can not be converted to a number, or is `NaN`, `Infinity`, or
`-Infinity`, an `Error` will be thrown.

#### `fs.watch(filename[, options][, listener])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswatchfilename-options-listener)

History

| Version | Changes |
| --- | --- |
| v19.1.0 | Added recursive support for Linux, AIX and IBMi. |
| v15.9.0, v14.17.0 | Added support for closing the watcher with an AbortSignal. |
| v7.6.0 | The `filename` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v7.0.0 | The passed `options` object will never be modified. |
| v0.5.10 | Added in: v0.5.10 |

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `persistent` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Indicates whether the process should continue to run
    as long as files are being watched. **Default:** `true`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Indicates whether all subdirectories should be
    watched, or only the current directory. This applies when a directory is
    specified, and only on supported platforms (See [caveats](https://nodejs.org/docs/latest/api/fs.html#caveats)). **Default:** `false`.
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Specifies the character encoding to be used for the
    filename passed to the listener. **Default:** `'utf8'`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows closing the watcher with an AbortSignal.
- `listener` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type) **Default:** `undefined`
  - `eventType` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)
- Returns: [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)

Watch for changes on `filename`, where `filename` is either a file or a
directory.

The second argument is optional. If `options` is provided as a string, it
specifies the `encoding`. Otherwise `options` should be passed as an object.

The listener callback gets two arguments `(eventType, filename)`. `eventType`
is either `'rename'` or `'change'`, and `filename` is the name of the file
which triggered the event.

On most platforms, `'rename'` is emitted whenever a filename appears or
disappears in the directory.

The listener callback is attached to the `'change'` event fired by
[<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher), but it is not the same thing as the `'change'` value of
`eventType`.

If a `signal` is passed, aborting the corresponding AbortController will close
the returned [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher).

##### Caveats[\#](https://nodejs.org/docs/latest/api/fs.html\#caveats)

The `fs.watch` API is not 100% consistent across platforms, and is
unavailable in some situations.

On Windows, no events will be emitted if the watched directory is moved or
renamed. An `EPERM` error is reported when the watched directory is deleted.

The `fs.watch` API does not provide any protection with respect
to malicious actions on the file system. For example, on Windows it is
implemented by monitoring changes in a directory versus specific files. This
allows substitution of a file and fs reporting changes on the new file
with the same filename.

###### Availability[\#](https://nodejs.org/docs/latest/api/fs.html\#availability)

This feature depends on the underlying operating system providing a way
to be notified of file system changes.

- On Linux systems, this uses [`inotify(7)`](https://man7.org/linux/man-pages/man7/inotify.7.html).
- On BSD systems, this uses [`kqueue(2)`](https://www.freebsd.org/cgi/man.cgi?query=kqueue&sektion=2).
- On macOS, this uses [`kqueue(2)`](https://www.freebsd.org/cgi/man.cgi?query=kqueue&sektion=2) for files and [`FSEvents`](https://developer.apple.com/documentation/coreservices/file_system_events) for
directories.
- On SunOS systems (including Solaris and SmartOS), this uses [`event ports`](https://illumos.org/man/port_create).
- On Windows systems, this feature depends on [`ReadDirectoryChangesW`](https://docs.microsoft.com/en-us/windows/desktop/api/winbase/nf-winbase-readdirectorychangesw).
- On AIX systems, this feature depends on [`AHAFS`](https://developer.ibm.com/articles/au-aix_event_infrastructure/), which must be enabled.
- On IBM i systems, this feature is not supported.

If the underlying functionality is not available for some reason, then
`fs.watch()` will not be able to function and may throw an exception.
For example, watching files or directories can be unreliable, and in some
cases impossible, on network file systems (NFS, SMB, etc) or host file systems
when using virtualization software such as Vagrant or Docker.

It is still possible to use `fs.watchFile()`, which uses stat polling, but
this method is slower and less reliable.

###### Inodes[\#](https://nodejs.org/docs/latest/api/fs.html\#inodes)

On Linux and macOS systems, `fs.watch()` resolves the path to an [inode](https://en.wikipedia.org/wiki/Inode) and
watches the inode. If the watched path is deleted and recreated, it is assigned
a new inode. The watch will emit an event for the delete but will continue
watching the _original_ inode. Events for the new inode will not be emitted.
This is expected behavior.

AIX files retain the same inode for the lifetime of a file. Saving and closing a
watched file on AIX will result in two notifications (one for adding new
content, and one for truncation).

###### Filename argument[\#](https://nodejs.org/docs/latest/api/fs.html\#filename-argument)

Providing `filename` argument in the callback is only supported on Linux,
macOS, Windows, and AIX. Even on supported platforms, `filename` is not always
guaranteed to be provided. Therefore, don't assume that `filename` argument is
always provided in the callback, and have some fallback logic if it is `null`.

```js mjs
import { watch } from 'node:fs';
watch('somedir', (eventType, filename) => {
  console.log(`event type is: ${eventType}`);
  if (filename) {
    console.log(`filename provided: ${filename}`);
  } else {
    console.log('filename not provided');
  }
}); copy
```

#### `fs.watchFile(filename[, options], listener)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswatchfilefilename-options-listener)

History

| Version | Changes |
| --- | --- |
| v10.5.0 | The `bigint` option is now supported. |
| v7.6.0 | The `filename` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.31 | Added in: v0.1.31 |

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `persistent` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `true`
  - `interval` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `5007`
- `listener` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `current` [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)
  - `previous` [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)
- Returns: [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)

Watch for changes on `filename`. The callback `listener` will be called each
time the file is accessed.

The `options` argument may be omitted. If provided, it should be an object. The
`options` object may contain a boolean named `persistent` that indicates
whether the process should continue to run as long as files are being watched.
The `options` object may specify an `interval` property indicating how often the
target should be polled in milliseconds.

The `listener` gets two arguments the current stat object and the previous
stat object:

```js mjs
import { watchFile } from 'node:fs';

watchFile('message.text', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
}); copy
```

These stat objects are instances of `fs.Stat`. If the `bigint` option is `true`,
the numeric values in these objects are specified as `BigInt` s.

To be notified when the file was modified, not just accessed, it is necessary
to compare `curr.mtimeMs` and `prev.mtimeMs`.

When an `fs.watchFile` operation results in an `ENOENT` error, it
will invoke the listener once, with all the fields zeroed (or, for dates, the
Unix Epoch). If the file is created later on, the listener will be called
again, with the latest stat objects. This is a change in functionality since
v0.10.

Using [`fs.watch()`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener) is more efficient than `fs.watchFile` and
`fs.unwatchFile`. `fs.watch` should be used instead of `fs.watchFile` and
`fs.unwatchFile` when possible.

When a file being watched by `fs.watchFile()` disappears and reappears,
then the contents of `previous` in the second callback event (the file's
reappearance) will be the same as the contents of `previous` in the first
callback event (its disappearance).

This happens when:

- the file is deleted, followed by a restore
- the file is renamed and then renamed a second time back to its original name

#### `fs.write(fd, buffer, offset[, length[, position]], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritefd-buffer-offset-length-position-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v14.0.0 | The `buffer` parameter won't coerce unsupported input to strings anymore. |
| v10.10.0 | The `buffer` parameter can now be any `TypedArray` or a `DataView`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.4.0 | The `buffer` parameter can now be a `Uint8Array`. |
| v7.2.0 | The `offset` and `length` parameters are optional now. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.0.2 | Added in: v0.0.2 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

Write `buffer` to the file specified by `fd`.

`offset` determines the part of the buffer to be written, and `length` is
an integer specifying the number of bytes to write.

`position` refers to the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position. See [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html).

The callback will be given three arguments `(err, bytesWritten, buffer)` where
`bytesWritten` specifies how many _bytes_ were written from `buffer`.

If this method is invoked as its [`util.promisify()`](https://nodejs.org/docs/latest/api/util.html#utilpromisifyoriginal) ed version, it returns
a promise for an `Object` with `bytesWritten` and `buffer` properties.

It is unsafe to use `fs.write()` multiple times on the same file without waiting
for the callback. For this scenario, [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options) is
recommended.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

#### `fs.write(fd, buffer[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritefd-buffer-options-callback)

Added in: v18.3.0, v16.17.0

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

Write `buffer` to the file specified by `fd`.

Similar to the above `fs.write` function, this version takes an
optional `options` object. If no `options` object is specified, it will
default with the above values.

#### `fs.write(fd, string[, position[, encoding]], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritefd-string-position-encoding-callback)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | Passing to the `string` parameter an object with an own `toString` function is no longer supported. |
| v17.8.0 | Passing to the `string` parameter an object with an own `toString` function is deprecated. |
| v14.12.0 | The `string` parameter will stringify an object with an explicit `toString` function. |
| v14.0.0 | The `string` parameter won't coerce unsupported input to strings anymore. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.2.0 | The `position` parameter is optional now. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v0.11.5 | Added in: v0.11.5 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `written` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Write `string` to the file specified by `fd`. If `string` is not a string,
an exception is thrown.

`position` refers to the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'` the data will be written at
the current position. See [`pwrite(2)`](http://man7.org/linux/man-pages/man2/pwrite.2.html).

`encoding` is the expected string encoding.

The callback will receive the arguments `(err, written, string)` where `written`
specifies how many _bytes_ the passed string required to be written. Bytes
written is not necessarily the same as string characters written. See
[`Buffer.byteLength`](https://nodejs.org/docs/latest/api/buffer.html#static-method-bufferbytelengthstring-encoding).

It is unsafe to use `fs.write()` multiple times on the same file without waiting
for the callback. For this scenario, [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options) is
recommended.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

On Windows, if the file descriptor is connected to the console (e.g. `fd == 1`
or `stdout`) a string containing non-ASCII characters will not be rendered
properly by default, regardless of the encoding used.
It is possible to configure the console to render UTF-8 properly by changing the
active codepage with the `chcp 65001` command. See the [chcp](https://ss64.com/nt/chcp.html) docs for more
details.

#### `fs.writeFile(file, data[, options], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritefilefile-data-options-callback)

History

| Version | Changes |
| --- | --- |
| v21.0.0, v20.10.0 | The `flush` option is now supported. |
| v19.0.0 | Passing to the `string` parameter an object with an own `toString` function is no longer supported. |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v17.8.0 | Passing to the `string` parameter an object with an own `toString` function is deprecated. |
| v16.0.0 | The error returned may be an `AggregateError` if more than one error is returned. |
| v15.2.0, v14.17.0 | The options argument may include an AbortSignal to abort an ongoing writeFile request. |
| v14.12.0 | The `data` parameter will stringify an object with an explicit `toString` function. |
| v14.0.0 | The `data` parameter won't coerce unsupported input to strings anymore. |
| v10.10.0 | The `data` parameter can now be any `TypedArray` or a `DataView`. |
| v10.0.0 | The `callback` parameter is no longer optional. Not passing it will throw a `TypeError` at runtime. |
| v7.4.0 | The `data` parameter can now be a `Uint8Array`. |
| v7.0.0 | The `callback` parameter is no longer optional. Not passing it will emit a deprecation warning with id DEP0013. |
| v5.0.0 | The `file` parameter can be a file descriptor now. |
| v0.1.29 | Added in: v0.1.29 |

- `file` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'w'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If all data is successfully written to the file, and
    `flush` is `true`, `fs.fsync()` is used to flush the data.
    **Default:** `false`.
  - `signal` [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) allows aborting an in-progress writeFile
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) \| [<AggregateError>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)

When `file` is a filename, asynchronously writes data to the file, replacing the
file if it already exists. `data` can be a string or a buffer.

When `file` is a file descriptor, the behavior is similar to calling
`fs.write()` directly (which is recommended). See the notes below on using
a file descriptor.

The `encoding` option is ignored if `data` is a buffer.

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

```js mjs
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); copy
```

If `options` is a string, then it specifies the encoding:

```js mjs
import { writeFile } from 'node:fs';

writeFile('message.txt', 'Hello Node.js', 'utf8', callback); copy
```

It is unsafe to use `fs.writeFile()` multiple times on the same file without
waiting for the callback. For this scenario, [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options) is
recommended.

Similarly to `fs.readFile` \- `fs.writeFile` is a convenience method that
performs multiple `write` calls internally to write the buffer passed to it.
For performance sensitive code consider using [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options).

It is possible to use an [<AbortSignal>](https://nodejs.org/docs/latest/api/globals.html#class-abortsignal) to cancel an `fs.writeFile()`.
Cancelation is "best effort", and some amount of data is likely still
to be written.

```js mjs
import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const controller = new AbortController();
const { signal } = controller;
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, { signal }, (err) => {
  // When a request is aborted - the callback is called with an AbortError
});
// When the request should be aborted
controller.abort(); copy
```

Aborting an ongoing request does not abort individual operating
system requests but rather the internal buffering `fs.writeFile` performs.

##### Using `fs.writeFile()` with file descriptors[\#](https://nodejs.org/docs/latest/api/fs.html\#using-fswritefile-with-file-descriptors)

When `file` is a file descriptor, the behavior is almost identical to directly
calling `fs.write()` like:

```js mjs
import { write } from 'node:fs';
import { Buffer } from 'node:buffer';

write(fd, Buffer.from(data, options.encoding), callback); copy
```

The difference from directly calling `fs.write()` is that under some unusual
conditions, `fs.write()` might write only part of the buffer and need to be
retried to write the remaining data, whereas `fs.writeFile()` retries until
the data is entirely written (or an error occurs).

The implications of this are a common source of confusion. In
the file descriptor case, the file is not replaced! The data is not necessarily
written to the beginning of the file, and the file's original data may remain
before and/or after the newly written data.

For example, if `fs.writeFile()` is called twice in a row, first to write the
string `'Hello'`, then to write the string `', World'`, the file would contain
`'Hello, World'`, and might contain some of the file's original data (depending
on the size of the original file, and the position of the file descriptor). If
a file name had been used instead of a descriptor, the file would be guaranteed
to contain only `', World'`.

#### `fs.writev(fd, buffers[, position], callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritevfd-buffers-position-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.9.0 | Added in: v12.9.0 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `bytesWritten` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)

Write an array of `ArrayBufferView` s to the file specified by `fd` using
`writev()`.

`position` is the offset from the beginning of the file where this data
should be written. If `typeof position !== 'number'`, the data will be written
at the current position.

The callback will be given three arguments: `err`, `bytesWritten`, and
`buffers`. `bytesWritten` is how many bytes were written from `buffers`.

If this method is [`util.promisify()`](https://nodejs.org/docs/latest/api/util.html#utilpromisifyoriginal) ed, it returns a promise for an
`Object` with `bytesWritten` and `buffers` properties.

It is unsafe to use `fs.writev()` multiple times on the same file without
waiting for the callback. For this scenario, use [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options).

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

### Synchronous API[\#](https://nodejs.org/docs/latest/api/fs.html\#synchronous-api)

The synchronous APIs perform all operations synchronously, blocking the
event loop until the operation completes or fails.

#### `fs.accessSync(path[, mode])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsaccesssyncpath-mode)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.11.15 | Added in: v0.11.15 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `fs.constants.F_OK`

Synchronously tests a user's permissions for the file or directory specified
by `path`. The `mode` argument is an optional integer that specifies the
accessibility checks to be performed. `mode` should be either the value
`fs.constants.F_OK` or a mask consisting of the bitwise OR of any of
`fs.constants.R_OK`, `fs.constants.W_OK`, and `fs.constants.X_OK` (e.g.
`fs.constants.W_OK | fs.constants.R_OK`). Check [File access constants](https://nodejs.org/docs/latest/api/fs.html#file-access-constants) for
possible values of `mode`.

If any of the accessibility checks fail, an `Error` will be thrown. Otherwise,
the method will return `undefined`.

```js mjs
import { accessSync, constants } from 'node:fs';

try {
  accessSync('etc/passwd', constants.R_OK | constants.W_OK);
  console.log('can read/write');
} catch (err) {
  console.error('no access!');
} copy
```

#### `fs.appendFileSync(path, data[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsappendfilesyncpath-data-options)

History

| Version | Changes |
| --- | --- |
| v21.1.0, v20.10.0 | The `flush` option is now supported. |
| v7.0.0 | The passed `options` object will never be modified. |
| v5.0.0 | The `file` parameter can be a file descriptor now. |
| v0.6.7 | Added in: v0.6.7 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'a'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, the underlying file descriptor is flushed
    prior to closing it. **Default:** `false`.

Synchronously append data to a file, creating the file if it does not yet
exist. `data` can be a string or a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

```js mjs
import { appendFileSync } from 'node:fs';

try {
  appendFileSync('message.txt', 'data to append');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  /* Handle the error */
} copy
```

If `options` is a string, then it specifies the encoding:

```js mjs
import { appendFileSync } from 'node:fs';

appendFileSync('message.txt', 'data to append', 'utf8'); copy
```

The `path` may be specified as a numeric file descriptor that has been opened
for appending (using `fs.open()` or `fs.openSync()`). The file descriptor will
not be closed automatically.

```js mjs
import { openSync, closeSync, appendFileSync } from 'node:fs';

let fd;

try {
  fd = openSync('message.txt', 'a');
  appendFileSync(fd, 'data to append', 'utf8');
} catch (err) {
  /* Handle the error */
} finally {
  if (fd !== undefined)
    closeSync(fd);
} copy
```

#### `fs.chmodSync(path, mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fschmodsyncpath-mode)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.6.7 | Added in: v0.6.7 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.chmod()`](https://nodejs.org/docs/latest/api/fs.html#fschmodpath-mode-callback).

See the POSIX [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html) documentation for more detail.

#### `fs.chownSync(path, uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fschownsyncpath-uid-gid)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.97 | Added in: v0.1.97 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Synchronously changes owner and group of a file. Returns `undefined`.
This is the synchronous version of [`fs.chown()`](https://nodejs.org/docs/latest/api/fs.html#fschownpath-uid-gid-callback).

See the POSIX [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html) documentation for more detail.

#### `fs.closeSync(fd)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsclosesyncfd)

Added in: v0.1.21

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Closes the file descriptor. Returns `undefined`.

Calling `fs.closeSync()` on any file descriptor ( `fd`) that is currently in use
through any other `fs` operation may lead to undefined behavior.

See the POSIX [`close(2)`](http://man7.org/linux/man-pages/man2/close.2.html) documentation for more detail.

#### `fs.copyFileSync(src, dest[, mode])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscopyfilesyncsrc-dest-mode)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | Changed `flags` argument to `mode` and imposed stricter type validation. |
| v8.5.0 | Added in: v8.5.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source filename to copy
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination filename of the copy operation
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) modifiers for copy operation. **Default:** `0`.

Synchronously copies `src` to `dest`. By default, `dest` is overwritten if it
already exists. Returns `undefined`. Node.js makes no guarantees about the
atomicity of the copy operation. If an error occurs after the destination file
has been opened for writing, Node.js will attempt to remove the destination.

`mode` is an optional integer that specifies the behavior
of the copy operation. It is possible to create a mask consisting of the bitwise
OR of two or more values (e.g.
`fs.constants.COPYFILE_EXCL | fs.constants.COPYFILE_FICLONE`).

- `fs.constants.COPYFILE_EXCL`: The copy operation will fail if `dest` already
exists.
- `fs.constants.COPYFILE_FICLONE`: The copy operation will attempt to create a
copy-on-write reflink. If the platform does not support copy-on-write, then a
fallback copy mechanism is used.
- `fs.constants.COPYFILE_FICLONE_FORCE`: The copy operation will attempt to
create a copy-on-write reflink. If the platform does not support
copy-on-write, then the operation will fail.

```js mjs
import { copyFileSync, constants } from 'node:fs';

// destination.txt will be created or overwritten by default.
copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

// By using COPYFILE_EXCL, the operation will fail if destination.txt exists.
copyFileSync('source.txt', 'destination.txt', constants.COPYFILE_EXCL); copy
```

#### `fs.cpSync(src, dest[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fscpsyncsrc-dest-options)

History

| Version | Changes |
| --- | --- |
| v22.3.0 | This API is no longer experimental. |
| v20.1.0, v18.17.0 | Accept an additional `mode` option to specify the copy behavior as the `mode` argument of `fs.copyFile()`. |
| v17.6.0, v16.15.0 | Accepts an additional `verbatimSymlinks` option to specify whether to perform path resolution for symlinks. |
| v16.7.0 | Added in: v16.7.0 |

- `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) source path to copy.
- `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) destination path to copy to.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `dereference` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) dereference symlinks. **Default:** `false`.
  - `errorOnExist` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) when `force` is `false`, and the destination
    exists, throw an error. **Default:** `false`.
  - `filter` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Function to filter copied files/directories. Return
    `true` to copy the item, `false` to ignore it. When ignoring a directory,
    all of its contents will be skipped as well. **Default:** `undefined`
    - `src` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) source path to copy.
    - `dest` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) destination path to copy to.
    - Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Any non- `Promise` value that is coercible
      to `boolean`.
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) overwrite existing file or directory. The copy
    operation will ignore errors if you set this to false and the destination
    exists. Use the `errorOnExist` option to change this behavior.
    **Default:** `true`.
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) modifiers for copy operation. **Default:** `0`.
    See `mode` flag of [`fs.copyFileSync()`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesyncsrc-dest-mode).
  - `preserveTimestamps` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true` timestamps from `src` will
    be preserved. **Default:** `false`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) copy directories recursively **Default:** `false`
  - `verbatimSymlinks` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, path resolution for symlinks will
    be skipped. **Default:** `false`

Synchronously copies the entire directory structure from `src` to `dest`,
including subdirectories and files.

When copying a directory to another directory, globs are not supported and
behavior is similar to `cp dir1/ dir2/`.

#### `fs.existsSync(path)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsexistssyncpath)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the path exists, `false` otherwise.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.exists()`](https://nodejs.org/docs/latest/api/fs.html#fsexistspath-callback).

`fs.exists()` is deprecated, but `fs.existsSync()` is not. The `callback`
parameter to `fs.exists()` accepts parameters that are inconsistent with other
Node.js callbacks. `fs.existsSync()` does not use a callback.

```js mjs
import { existsSync } from 'node:fs';

if (existsSync('/etc/passwd'))
  console.log('The path exists.'); copy
```

#### `fs.fchmodSync(fd, mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfchmodsyncfd-mode)

Added in: v0.4.7

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Sets the permissions on the file. Returns `undefined`.

See the POSIX [`fchmod(2)`](http://man7.org/linux/man-pages/man2/fchmod.2.html) documentation for more detail.

#### `fs.fchownSync(fd, uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfchownsyncfd-uid-gid)

Added in: v0.4.7

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new owner's user id.
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new group's group id.

Sets the owner of the file. Returns `undefined`.

See the POSIX [`fchown(2)`](http://man7.org/linux/man-pages/man2/fchown.2.html) documentation for more detail.

#### `fs.fdatasyncSync(fd)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfdatasyncsyncfd)

Added in: v0.1.96

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Forces all currently queued I/O operations associated with the file to the
operating system's synchronized I/O completion state. Refer to the POSIX
[`fdatasync(2)`](http://man7.org/linux/man-pages/man2/fdatasync.2.html) documentation for details. Returns `undefined`.

#### `fs.fstatSync(fd[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfstatsyncfd-options)

History

| Version | Changes |
| --- | --- |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v0.1.95 | Added in: v0.1.95 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
- Returns: [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Retrieves the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the file descriptor.

See the POSIX [`fstat(2)`](http://man7.org/linux/man-pages/man2/fstat.2.html) documentation for more detail.

#### `fs.fsyncSync(fd)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfsyncsyncfd)

Added in: v0.1.96

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Request that all data for the open file descriptor is flushed to the storage
device. The specific implementation is operating system and device specific.
Refer to the POSIX [`fsync(2)`](http://man7.org/linux/man-pages/man2/fsync.2.html) documentation for more detail. Returns `undefined`.

#### `fs.ftruncateSync(fd[, len])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsftruncatesyncfd-len)

Added in: v0.8.6

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`

Truncates the file descriptor. Returns `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.ftruncate()`](https://nodejs.org/docs/latest/api/fs.html#fsftruncatefd-len-callback).

#### `fs.futimesSync(fd, atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsfutimessyncfd-atime-mtime)

History

| Version | Changes |
| --- | --- |
| v4.1.0 | Numeric strings, `NaN`, and `Infinity` are now allowed time specifiers. |
| v0.4.2 | Added in: v0.4.2 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Synchronous version of [`fs.futimes()`](https://nodejs.org/docs/latest/api/fs.html#fsfutimesfd-atime-mtime-callback). Returns `undefined`.

#### `fs.globSync(pattern[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsglobsyncpattern-options)

History

| Version | Changes |
| --- | --- |
| v24.1.0, v22.17.0 | Add support for `URL` instances for `cwd` option. |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v23.7.0, v22.14.0 | Add support for `exclude` option to accept glob patterns. |
| v22.2.0 | Add support for `withFileTypes` as an option. |
| v22.0.0 | Added in: v22.0.0 |

- `pattern` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `cwd` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) current working directory. **Default:** `process.cwd()`
  - `exclude` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Function to filter out files/directories or a
    list of glob patterns to be excluded. If a function is provided, return
    `true` to exclude the item, `false` to include it. **Default:** `undefined`.
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) `true` if the glob should return paths as Dirents,
    `false` otherwise. **Default:** `false`.
- Returns: [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) paths of files that match the pattern.

```js mjs
import { globSync } from 'node:fs';

console.log(globSync('**/*.js'));const { globSync } = require('node:fs');

console.log(globSync('**/*.js'));copy
```

#### `fs.lchmodSync(path, mode)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslchmodsyncpath-mode)

Deprecated since: v0.4.7

[Stability: 0](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Deprecated

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Changes the permissions on a symbolic link. Returns `undefined`.

This method is only implemented on macOS.

See the POSIX [`lchmod(2)`](https://www.freebsd.org/cgi/man.cgi?query=lchmod&sektion=2) documentation for more detail.

#### `fs.lchownSync(path, uid, gid)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslchownsyncpath-uid-gid)

History

| Version | Changes |
| --- | --- |
| v10.6.0 | This API is no longer deprecated. |
| v0.4.7 | Documentation-only deprecation. |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `uid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new owner's user id.
- `gid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file's new group's group id.

Set the owner for the path. Returns `undefined`.

See the POSIX [`lchown(2)`](http://man7.org/linux/man-pages/man2/lchown.2.html) documentation for more details.

#### `fs.lutimesSync(path, atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslutimessyncpath-atime-mtime)

Added in: v14.5.0, v12.19.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Change the file system timestamps of the symbolic link referenced by `path`.
Returns `undefined`, or throws an exception when parameters are incorrect or
the operation fails. This is the synchronous version of [`fs.lutimes()`](https://nodejs.org/docs/latest/api/fs.html#fslutimespath-atime-mtime-callback).

#### `fs.linkSync(existingPath, newPath)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslinksyncexistingpath-newpath)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `existingPath` and `newPath` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v0.1.31 | Added in: v0.1.31 |

- `existingPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)

Creates a new link from the `existingPath` to the `newPath`. See the POSIX
[`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html) documentation for more detail. Returns `undefined`.

#### `fs.lstatSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fslstatsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v15.3.0, v14.17.0 | Accepts a `throwIfNoEntry` option to specify whether an exception should be thrown if the entry does not exist. |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.30 | Added in: v0.1.30 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
  - `throwIfNoEntry` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether an exception will be thrown
    if no file system entry exists, rather than returning `undefined`.
    **Default:** `true`.
- Returns: [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Retrieves the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the symbolic link referred to by `path`.

See the POSIX [`lstat(2)`](http://man7.org/linux/man-pages/man2/lstat.2.html) documentation for more details.

#### `fs.mkdirSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsmkdirsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v13.11.0, v12.17.0 | In `recursive` mode, the first created path is returned now. |
| v10.12.0 | The second argument can now be an `options` object with `recursive` and `mode` properties. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Not supported on Windows. **Default:** `0o777`.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type)

Synchronously creates a directory. Returns `undefined`, or if `recursive` is
`true`, the first directory path created.
This is the synchronous version of [`fs.mkdir()`](https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback).

See the POSIX [`mkdir(2)`](http://man7.org/linux/man-pages/man2/mkdir.2.html) documentation for more details.

#### `fs.mkdtempSync(prefix[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsmkdtempsyncprefix-options)

History

| Version | Changes |
| --- | --- |
| v20.6.0, v18.19.0 | The `prefix` parameter now accepts buffers and URL. |
| v16.5.0, v14.18.0 | The `prefix` parameter now accepts an empty string. |
| v5.10.0 | Added in: v5.10.0 |

- `prefix` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

Returns the created directory path.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.mkdtemp()`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempprefix-options-callback).

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

#### `fs.mkdtempDisposableSync(prefix[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsmkdtempdisposablesyncprefix-options)

Added in: v24.4.0

- `prefix` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) A disposable object:

  - `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The path of the created directory.
  - `remove` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A function which removes the created directory.
  - `[Symbol.dispose]` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The same as `remove`.

Returns a disposable object whose `path` property holds the created directory
path. When the object is disposed, the directory and its contents will be
removed if it still exists. If the directory cannot be deleted, disposal will
throw an error. The object has a `remove()` method which will perform the same
task.

For detailed information, see the documentation of [`fs.mkdtemp()`](https://nodejs.org/docs/latest/api/fs.html#fsmkdtempprefix-options-callback).

There is no callback-based version of this API because it is designed for use
with the `using` syntax.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use.

#### `fs.opendirSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsopendirsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v13.1.0, v12.16.0 | The `bufferSize` option was introduced. |
| v12.12.0 | Added in: v12.12.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `bufferSize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Number of directory entries that are buffered
    internally when reading from the directory. Higher values lead to better
    performance but higher memory usage. **Default:** `32`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
- Returns: [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir)

Synchronously open a directory. See [`opendir(3)`](http://man7.org/linux/man-pages/man3/opendir.3.html).

Creates an [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir), which contains all further functions for reading from
and cleaning up the directory.

The `encoding` option sets the encoding for the `path` while opening the
directory and subsequent read operations.

#### `fs.openSync(path[, flags[, mode]])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsopensyncpath-flags-mode)

History

| Version | Changes |
| --- | --- |
| v11.1.0 | The `flags` argument is now optional and defaults to `'r'`. |
| v9.9.0 | The `as` and `as+` flags are supported now. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `'r'`.
See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags).
- `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Returns an integer representing the file descriptor.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback).

#### `fs.readdirSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreaddirsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v20.1.0, v18.17.0 | Added `recursive` option. |
| v10.10.0 | New option `withFileTypes` was added. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
  - `withFileTypes` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) **Default:** `false`
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, reads the contents of a directory
    recursively. In recursive mode, it will list all files, sub files, and
    directories. **Default:** `false`.
- Returns: [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer\[\]>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<fs.Dirent\[\]>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent)

Reads the contents of the directory.

See the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the filenames returned. If the `encoding` is set to `'buffer'`,
the filenames returned will be passed as [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) objects.

If `options.withFileTypes` is set to `true`, the result will contain
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) objects.

#### `fs.readFileSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadfilesyncpath-options)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v5.0.0 | The `path` parameter can be a file descriptor now. |
| v0.1.8 | Added in: v0.1.8 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'r'`.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Returns the contents of the `path`.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.readFile()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback).

If the `encoding` option is specified then this function returns a
string. Otherwise it returns a buffer.

Similar to [`fs.readFile()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback), when the path is a directory, the behavior of
`fs.readFileSync()` is platform-specific.

```js mjs
import { readFileSync } from 'node:fs';

// macOS, Linux, and Windows
readFileSync('<directory>');
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

//  FreeBSD
readFileSync('<directory>'); // => <data> copy
```

#### `fs.readlinkSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadlinksyncpath-options)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Returns the symbolic link's string value.

See the POSIX [`readlink(2)`](http://man7.org/linux/man-pages/man2/readlink.2.html) documentation for more details.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the link path returned. If the `encoding` is set to `'buffer'`,
the link path returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

#### `fs.readSync(fd, buffer, offset, length[, position])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadsyncfd-buffer-offset-length-position)

History

| Version | Changes |
| --- | --- |
| v10.10.0 | The `buffer` parameter can now be any `TypedArray` or a `DataView`. |
| v6.0.0 | The `length` parameter can now be `0`. |
| v0.1.21 | Added in: v0.1.21 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Returns the number of `bytesRead`.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.read()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback).

#### `fs.readSync(fd, buffer[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadsyncfd-buffer-options)

History

| Version | Changes |
| --- | --- |
| v13.13.0, v12.17.0 | Options object can be passed in to make offset, length, and position optional. |
| v13.13.0, v12.17.0 | Added in: v13.13.0, v12.17.0 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

Returns the number of `bytesRead`.

Similar to the above `fs.readSync` function, this version takes an optional `options` object.
If no `options` object is specified, it will default with the above values.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.read()`](https://nodejs.org/docs/latest/api/fs.html#fsreadfd-buffer-offset-length-position-callback).

#### `fs.readvSync(fd, buffers[, position])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsreadvsyncfd-buffers-position)

Added in: v13.13.0, v12.17.0

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes read.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.readv()`](https://nodejs.org/docs/latest/api/fs.html#fsreadvfd-buffers-position-callback).

#### `fs.realpathSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrealpathsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v8.0.0 | Pipe/Socket resolve support was added. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v6.4.0 | Calling `realpathSync` now works again for various edge cases on Windows. |
| v6.0.0 | The `cache` parameter was removed. |
| v0.1.31 | Added in: v0.1.31 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Returns the resolved pathname.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.realpath()`](https://nodejs.org/docs/latest/api/fs.html#fsrealpathpath-options-callback).

#### `fs.realpathSync.native(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrealpathsyncnativepath-options)

Added in: v9.2.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

Synchronous [`realpath(3)`](http://man7.org/linux/man-pages/man3/realpath.3.html).

Only paths that can be converted to UTF8 strings are supported.

The optional `options` argument can be a string specifying an encoding, or an
object with an `encoding` property specifying the character encoding to use for
the path returned. If the `encoding` is set to `'buffer'`,
the path returned will be passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) object.

On Linux, when Node.js is linked against musl libc, the procfs file system must
be mounted on `/proc` in order for this function to work. Glibc does not have
this restriction.

#### `fs.renameSync(oldPath, newPath)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrenamesyncoldpath-newpath)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `oldPath` and `newPath` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v0.1.21 | Added in: v0.1.21 |

- `oldPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `newPath` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)

Renames the file from `oldPath` to `newPath`. Returns `undefined`.

See the POSIX [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html) documentation for more details.

#### `fs.rmdirSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrmdirsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v25.0.0 | Remove `recursive` option. |
| v16.0.0 | Using `fs.rmdirSync(path, { recursive: true })` on a `path` that is a file is no longer permitted and results in an `ENOENT` error on Windows and an `ENOTDIR` error on POSIX. |
| v16.0.0 | Using `fs.rmdirSync(path, { recursive: true })` on a `path` that does not exist is no longer permitted and results in a `ENOENT` error. |
| v16.0.0 | The `recursive` option is deprecated, using it triggers a deprecation warning. |
| v14.14.0 | The `recursive` option is deprecated, use `fs.rmSync` instead. |
| v13.3.0, v12.16.0 | The `maxBusyTries` option is renamed to `maxRetries`, and its default is 0. The `emfileWait` option has been removed, and `EMFILE` errors use the same retry logic as other errors. The `retryDelay` option is now supported. `ENFILE` errors are now retried. |
| v12.10.0 | The `recursive`, `maxBusyTries`, and `emfileWait` options are now supported. |
| v7.6.0 | The `path` parameters can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) There are currently no options exposed. There used to
be options for `recursive`, `maxBusyTries`, and `emfileWait` but they were
deprecated and removed. The `options` argument is still accepted for
backwards compatibility but it is not used.

Synchronous [`rmdir(2)`](http://man7.org/linux/man-pages/man2/rmdir.2.html). Returns `undefined`.

Using `fs.rmdirSync()` on a file (not a directory) results in an `ENOENT` error
on Windows and an `ENOTDIR` error on POSIX.

To get a behavior similar to the `rm -rf` Unix command, use [`fs.rmSync()`](https://nodejs.org/docs/latest/api/fs.html#fsrmsyncpath-options)
with options `{ recursive: true, force: true }`.

#### `fs.rmSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsrmsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v17.3.0, v16.14.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v14.14.0 | Added in: v14.14.0 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `force` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) When `true`, exceptions will be ignored if `path` does
    not exist. **Default:** `false`.
  - `maxRetries` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
    `EPERM` error is encountered, Node.js will retry the operation with a linear
    backoff wait of `retryDelay` milliseconds longer on each try. This option
    represents the number of retries. This option is ignored if the `recursive`
    option is not `true`. **Default:** `0`.
  - `recursive` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If `true`, perform a recursive directory removal. In
    recursive mode operations are retried on failure. **Default:** `false`.
  - `retryDelay` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The amount of time in milliseconds to wait between
    retries. This option is ignored if the `recursive` option is not `true`.
    **Default:** `100`.

Synchronously removes files and directories (modeled on the standard POSIX `rm`
utility). Returns `undefined`.

#### `fs.statSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsstatsyncpath-options)

History

| Version | Changes |
| --- | --- |
| v15.3.0, v14.17.0 | Accepts a `throwIfNoEntry` option to specify whether an exception should be thrown if the entry does not exist. |
| v10.5.0 | Accepts an additional `options` object to specify whether the numeric values returned should be bigint. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object should be `bigint`. **Default:** `false`.
  - `throwIfNoEntry` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether an exception will be thrown
    if no file system entry exists, rather than returning `undefined`.
    **Default:** `true`.
- Returns: [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats)

Retrieves the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) for the path.

#### `fs.statfsSync(path[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsstatfssyncpath-options)

Added in: v19.6.0, v18.15.0

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `bigint` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the numeric values in the returned
    [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs) object should be `bigint`. **Default:** `false`.
- Returns: [<fs.StatFs>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatfs)

Synchronous [`statfs(2)`](http://man7.org/linux/man-pages/man2/statfs.2.html). Returns information about the mounted file system which
contains `path`.

In case of an error, the `err.code` will be one of [Common System Errors](https://nodejs.org/docs/latest/api/errors.html#common-system-errors).

#### `fs.symlinkSync(target, path[, type])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fssymlinksynctarget-path-type)

History

| Version | Changes |
| --- | --- |
| v12.0.0 | If the `type` argument is left undefined, Node will autodetect `target` type and automatically select `dir` or `file`. |
| v7.6.0 | The `target` and `path` parameters can be WHATWG `URL` objects using `file:` protocol. Support is currently still _experimental_. |
| v0.1.31 | Added in: v0.1.31 |

- `target` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.symlink()`](https://nodejs.org/docs/latest/api/fs.html#fssymlinktarget-path-type-callback).

#### `fs.truncateSync(path[, len])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fstruncatesyncpath-len)

Added in: v0.8.6

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `len` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`

Truncates the file. Returns `undefined`. A file descriptor can also be
passed as the first argument. In this case, `fs.ftruncateSync()` is called.

Passing a file descriptor is deprecated and may result in an error being thrown
in the future.

#### `fs.unlinkSync(path)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsunlinksyncpath)

History

| Version | Changes |
| --- | --- |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v0.1.21 | Added in: v0.1.21 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)

Synchronous [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html). Returns `undefined`.

#### `fs.utimesSync(path, atime, mtime)`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsutimessyncpath-atime-mtime)

History

| Version | Changes |
| --- | --- |
| v8.0.0 | `NaN`, `Infinity`, and `-Infinity` are no longer valid time specifiers. |
| v7.6.0 | The `path` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v4.1.0 | Numeric strings, `NaN`, and `Infinity` are now allowed time specifiers. |
| v0.4.2 | Added in: v0.4.2 |

- `path` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api)
- `atime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- `mtime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- Returns: `undefined`.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.utimes()`](https://nodejs.org/docs/latest/api/fs.html#fsutimespath-atime-mtime-callback).

#### `fs.writeFileSync(file, data[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritefilesyncfile-data-options)

History

| Version | Changes |
| --- | --- |
| v21.0.0, v20.10.0 | The `flush` option is now supported. |
| v19.0.0 | Passing to the `data` parameter an object with an own `toString` function is no longer supported. |
| v17.8.0 | Passing to the `data` parameter an object with an own `toString` function is deprecated. |
| v14.12.0 | The `data` parameter will stringify an object with an explicit `toString` function. |
| v14.0.0 | The `data` parameter won't coerce unsupported input to strings anymore. |
| v10.10.0 | The `data` parameter can now be any `TypedArray` or a `DataView`. |
| v7.4.0 | The `data` parameter can now be a `Uint8Array`. |
| v5.0.0 | The `file` parameter can be a file descriptor now. |
| v0.1.29 | Added in: v0.1.29 |

- `file` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) \| [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) filename or file descriptor
- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `'utf8'`
  - `mode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0o666`
  - `flag` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) See [support of file system `flags`](https://nodejs.org/docs/latest/api/fs.html#file-system-flags). **Default:** `'w'`.
  - `flush` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) If all data is successfully written to the file, and
    `flush` is `true`, `fs.fsyncSync()` is used to flush the data.
- Returns: `undefined`.

The `mode` option only affects the newly created file. See [`fs.open()`](https://nodejs.org/docs/latest/api/fs.html#fsopenpath-flags-mode-callback)
for more details.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.writeFile()`](https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback).

#### `fs.writeSync(fd, buffer, offset[, length[, position]])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritesyncfd-buffer-offset-length-position)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | The `buffer` parameter won't coerce unsupported input to strings anymore. |
| v10.10.0 | The `buffer` parameter can now be any `TypedArray` or a `DataView`. |
| v7.4.0 | The `buffer` parameter can now be a `Uint8Array`. |
| v7.2.0 | The `offset` and `length` parameters are optional now. |
| v0.1.21 | Added in: v0.1.21 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes written.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.write(fd, buffer...)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-offset-length-position-callback).

#### `fs.writeSync(fd, buffer[, options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritesyncfd-buffer-options)

Added in: v18.3.0, v16.17.0

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffer` [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `offset` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `0`
  - `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `buffer.byteLength - offset`
  - `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes written.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.write(fd, buffer...)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-buffer-offset-length-position-callback).

#### `fs.writeSync(fd, string[, position[, encoding]])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritesyncfd-string-position-encoding)

History

| Version | Changes |
| --- | --- |
| v14.0.0 | The `string` parameter won't coerce unsupported input to strings anymore. |
| v7.2.0 | The `position` parameter is optional now. |
| v0.11.5 | Added in: v0.11.5 |

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) **Default:** `'utf8'`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes written.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.write(fd, string...)`](https://nodejs.org/docs/latest/api/fs.html#fswritefd-string-position-encoding-callback).

#### `fs.writevSync(fd, buffers[, position])`[\#](https://nodejs.org/docs/latest/api/fs.html\#fswritevsyncfd-buffers-position)

Added in: v12.9.0

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
- `buffers` [<ArrayBufferView\[\]>](https://developer.mozilla.org/en-US/docs/Web/API/ArrayBufferView)
- `position` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) **Default:** `null`
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of bytes written.

For detailed information, see the documentation of the asynchronous version of
this API: [`fs.writev()`](https://nodejs.org/docs/latest/api/fs.html#fswritevfd-buffers-position-callback).

### Common Objects[\#](https://nodejs.org/docs/latest/api/fs.html\#common-objects)

The common objects are shared by all of the file system API variants
(promise, callback, and synchronous).

#### Class: `fs.Dir`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsdir)

Added in: v12.12.0

A class representing a directory stream.

Created by [`fs.opendir()`](https://nodejs.org/docs/latest/api/fs.html#fsopendirpath-options-callback), [`fs.opendirSync()`](https://nodejs.org/docs/latest/api/fs.html#fsopendirsyncpath-options), or
[`fsPromises.opendir()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopendirpath-options).

```js mjs
import { opendir } from 'node:fs/promises';

try {
  const dir = await opendir('./');
  for await (const dirent of dir)
    console.log(dirent.name);
} catch (err) {
  console.error(err);
} copy
```

When using the async iterator, the [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir) object will be automatically
closed after the iterator exits.

##### `dir.close()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirclose)

Added in: v12.12.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Asynchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

A promise is returned that will be fulfilled after the resource has been
closed.

##### `dir.close(callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirclosecallback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.12.0 | Added in: v12.12.0 |

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Asynchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

The `callback` will be called after the resource handle has been closed.

##### `dir.closeSync()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirclosesync)

Added in: v12.12.0

Synchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

##### `dir.path`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirpath)

Added in: v12.12.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The read-only path of this directory as was provided to [`fs.opendir()`](https://nodejs.org/docs/latest/api/fs.html#fsopendirpath-options-callback),
[`fs.opendirSync()`](https://nodejs.org/docs/latest/api/fs.html#fsopendirsyncpath-options), or [`fsPromises.opendir()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesopendirpath-options).

##### `dir.read()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirread)

Added in: v12.12.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)

Asynchronously read the next directory entry via [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) as an
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent).

A promise is returned that will be fulfilled with an [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent), or `null`
if there are no more directory entries to read.

Directory entries returned by this function are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

##### `dir.read(callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirreadcallback)

Added in: v12.12.0

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
  - `dirent` [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)

Asynchronously read the next directory entry via [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) as an
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent).

After the read is completed, the `callback` will be called with an
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent), or `null` if there are no more directory entries to read.

Directory entries returned by this function are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

##### `dir.readSync()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirreadsync)

Added in: v12.12.0

- Returns: [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type)

Synchronously read the next directory entry as an [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent). See the
POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more detail.

If there are no more directory entries to read, `null` will be returned.

Directory entries returned by this function are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

##### `dir[Symbol.asyncIterator]()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirsymbolasynciterator)

Added in: v12.12.0

- Returns: [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface) An AsyncIterator of [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent)

Asynchronously iterates over the directory until all entries have
been read. Refer to the POSIX [`readdir(3)`](http://man7.org/linux/man-pages/man3/readdir.3.html) documentation for more detail.

Entries returned by the async iterator are always an [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent).
The `null` case from `dir.read()` is handled internally.

See [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir) for an example.

Directory entries returned by this iterator are in no particular order as
provided by the operating system's underlying directory mechanisms.
Entries added or removed while iterating over the directory might not be
included in the iteration results.

##### `dir[Symbol.asyncDispose]()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirsymbolasyncdispose)

History

| Version | Changes |
| --- | --- |
| v24.2.0 | No longer experimental. |
| v24.1.0, v22.1.0 | Added in: v24.1.0, v22.1.0 |

Calls `dir.close()` if the directory handle is open, and returns a promise that
fulfills when disposal is complete.

##### `dir[Symbol.dispose]()`[\#](https://nodejs.org/docs/latest/api/fs.html\#dirsymboldispose)

History

| Version | Changes |
| --- | --- |
| v24.2.0 | No longer experimental. |
| v24.1.0, v22.1.0 | Added in: v24.1.0, v22.1.0 |

Calls `dir.closeSync()` if the directory handle is open, and returns
`undefined`.

#### Class: `fs.Dirent`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsdirent)

Added in: v10.10.0

A representation of a directory entry, which can be a file or a subdirectory
within the directory, as returned by reading from an [<fs.Dir>](https://nodejs.org/docs/latest/api/fs.html#class-fsdir). The
directory entry is a combination of the file name and file type pairs.

Additionally, when [`fs.readdir()`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback) or [`fs.readdirSync()`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options) is called with
the `withFileTypes` option set to `true`, the resulting array is filled with
[<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) objects, rather than strings or [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) s.

##### `dirent.isBlockDevice()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntisblockdevice)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a block device.

##### `dirent.isCharacterDevice()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntischaracterdevice)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a character device.

##### `dirent.isDirectory()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntisdirectory)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a file system
directory.

##### `dirent.isFIFO()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntisfifo)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a first-in-first-out
(FIFO) pipe.

##### `dirent.isFile()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntisfile)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a regular file.

##### `dirent.isSocket()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntissocket)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a socket.

##### `dirent.isSymbolicLink()`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntissymboliclink)

Added in: v10.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object describes a symbolic link.

##### `dirent.name`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntname)

Added in: v10.10.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

The file name that this [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object refers to. The type of this
value is determined by the `options.encoding` passed to [`fs.readdir()`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback) or
[`fs.readdirSync()`](https://nodejs.org/docs/latest/api/fs.html#fsreaddirsyncpath-options).

##### `dirent.parentPath`[\#](https://nodejs.org/docs/latest/api/fs.html\#direntparentpath)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v21.4.0, v20.12.0, v18.20.0 | Added in: v21.4.0, v20.12.0, v18.20.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)

The path to the parent directory of the file this [<fs.Dirent>](https://nodejs.org/docs/latest/api/fs.html#class-fsdirent) object refers to.

#### Class: `fs.FSWatcher`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsfswatcher)

Added in: v0.5.8

- Extends [<EventEmitter>](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)

A successful call to [`fs.watch()`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener) method will return a new [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)
object.

All [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) objects emit a `'change'` event whenever a specific watched
file is modified.

##### Event: `'change'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-change)

Added in: v0.5.8

- `eventType` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The type of change event that has occurred
- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) The filename that changed (if relevant/available)

Emitted when something changes in a watched directory or file.
See more details in [`fs.watch()`](https://nodejs.org/docs/latest/api/fs.html#fswatchfilename-options-listener).

The `filename` argument may not be provided depending on operating system
support. If `filename` is provided, it will be provided as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) if
`fs.watch()` is called with its `encoding` option set to `'buffer'`, otherwise
`filename` will be a UTF-8 string.

```js mjs
import { watch } from 'node:fs';
// Example when handled through fs.watch() listener
watch('./tmp', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...>
  }
}); copy
```

##### Event: `'close'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-close_1)

Added in: v10.0.0

Emitted when the watcher stops watching for changes. The closed
[<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) object is no longer usable in the event handler.

##### Event: `'error'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-error)

Added in: v0.5.8

- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Emitted when an error occurs while watching the file. The errored
[<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) object is no longer usable in the event handler.

##### `watcher.close()`[\#](https://nodejs.org/docs/latest/api/fs.html\#watcherclose)

Added in: v0.5.8

Stop watching for changes on the given [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher). Once stopped, the
[<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) object is no longer usable.

##### `watcher.ref()`[\#](https://nodejs.org/docs/latest/api/fs.html\#watcherref)

Added in: v14.3.0, v12.20.0

- Returns: [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)

When called, requests that the Node.js event loop _not_ exit so long as the
[<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) is active. Calling `watcher.ref()` multiple times will have
no effect.

By default, all [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) objects are "ref'ed", making it normally
unnecessary to call `watcher.ref()` unless `watcher.unref()` had been
called previously.

##### `watcher.unref()`[\#](https://nodejs.org/docs/latest/api/fs.html\#watcherunref)

Added in: v14.3.0, v12.20.0

- Returns: [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher)

When called, the active [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) object will not require the Node.js
event loop to remain active. If there is no other activity keeping the
event loop running, the process may exit before the [<fs.FSWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsfswatcher) object's
callback is invoked. Calling `watcher.unref()` multiple times will have
no effect.

#### Class: `fs.StatWatcher`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsstatwatcher)

Added in: v14.3.0, v12.20.0

- Extends [<EventEmitter>](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)

A successful call to `fs.watchFile()` method will return a new [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)
object.

##### `watcher.ref()`[\#](https://nodejs.org/docs/latest/api/fs.html\#watcherref_1)

Added in: v14.3.0, v12.20.0

- Returns: [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)

When called, requests that the Node.js event loop _not_ exit so long as the
[<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher) is active. Calling `watcher.ref()` multiple times will have
no effect.

By default, all [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher) objects are "ref'ed", making it normally
unnecessary to call `watcher.ref()` unless `watcher.unref()` had been
called previously.

##### `watcher.unref()`[\#](https://nodejs.org/docs/latest/api/fs.html\#watcherunref_1)

Added in: v14.3.0, v12.20.0

- Returns: [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher)

When called, the active [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher) object will not require the Node.js
event loop to remain active. If there is no other activity keeping the
event loop running, the process may exit before the [<fs.StatWatcher>](https://nodejs.org/docs/latest/api/fs.html#class-fsstatwatcher) object's
callback is invoked. Calling `watcher.unref()` multiple times will have
no effect.

#### Class: `fs.ReadStream`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsreadstream)

Added in: v0.1.93

- Extends: [<stream.Readable>](https://nodejs.org/docs/latest/api/stream.html#class-streamreadable)

Instances of [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream) are created and returned using the
[`fs.createReadStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatereadstreampath-options) function.

##### Event: `'close'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-close_2)

Added in: v0.1.93

Emitted when the [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)'s underlying file descriptor has been closed.

##### Event: `'open'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-open)

Added in: v0.1.93

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Integer file descriptor used by the [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream).

Emitted when the [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream)'s file descriptor has been opened.

##### Event: `'ready'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-ready)

Added in: v9.11.0

Emitted when the [<fs.ReadStream>](https://nodejs.org/docs/latest/api/fs.html#class-fsreadstream) is ready to be used.

Fires immediately after `'open'`.

##### `readStream.bytesRead`[\#](https://nodejs.org/docs/latest/api/fs.html\#readstreambytesread)

Added in: v6.4.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)

The number of bytes that have been read so far.

##### `readStream.path`[\#](https://nodejs.org/docs/latest/api/fs.html\#readstreampath)

Added in: v0.1.93

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer)

The path to the file the stream is reading from as specified in the first
argument to `fs.createReadStream()`. If `path` is passed as a string, then
`readStream.path` will be a string. If `path` is passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer), then
`readStream.path` will be a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer). If `fd` is specified, then
`readStream.path` will be `undefined`.

##### `readStream.pending`[\#](https://nodejs.org/docs/latest/api/fs.html\#readstreampending)

Added in: v11.2.0, v10.16.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

This property is `true` if the underlying file has not been opened yet,
i.e. before the `'ready'` event is emitted.

#### Class: `fs.Stats`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsstats)

History

| Version | Changes |
| --- | --- |
| v22.0.0, v20.13.0 | Public constructor is deprecated. |
| v8.1.0 | Added times as numbers. |
| v0.1.21 | Added in: v0.1.21 |

A [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object provides information about a file.

Objects returned from [`fs.stat()`](https://nodejs.org/docs/latest/api/fs.html#fsstatpath-options-callback), [`fs.lstat()`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback), [`fs.fstat()`](https://nodejs.org/docs/latest/api/fs.html#fsfstatfd-options-callback), and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.
`Stat` objects are not to be created directly using the `new` keyword.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT } copy
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT } copy
```

##### `stats.isBlockDevice()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsisblockdevice)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a block device.

##### `stats.isCharacterDevice()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsischaracterdevice)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a character device.

##### `stats.isDirectory()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsisdirectory)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a file system directory.

If the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object was obtained from calling [`fs.lstat()`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback) on a
symbolic link which resolves to a directory, this method will return `false`.
This is because [`fs.lstat()`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback) returns information
about a symbolic link itself and not the path it resolves to.

##### `stats.isFIFO()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsisfifo)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a first-in-first-out (FIFO)
pipe.

##### `stats.isFile()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsisfile)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a regular file.

##### `stats.isSocket()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsissocket)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a socket.

##### `stats.isSymbolicLink()`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsissymboliclink)

Added in: v0.1.10

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Returns `true` if the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object describes a symbolic link.

This method is only valid when using [`fs.lstat()`](https://nodejs.org/docs/latest/api/fs.html#fslstatpath-options-callback).

##### `stats.dev`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsdev)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The numeric identifier of the device containing the file.

##### `stats.ino`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsino)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The file system specific "Inode" number for the file.

##### `stats.mode`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsmode)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

A bit-field describing the file type and mode.

##### `stats.nlink`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsnlink)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The number of hard-links that exist for the file.

##### `stats.uid`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsuid)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The numeric user identifier of the user that owns the file (POSIX).

##### `stats.gid`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsgid)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The numeric group identifier of the group that owns the file (POSIX).

##### `stats.rdev`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsrdev)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

A numeric device identifier if the file represents a device.

##### `stats.size`[\#](https://nodejs.org/docs/latest/api/fs.html\#statssize)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The size of the file in bytes.

If the underlying file system does not support getting the size of the file,
this will be `0`.

##### `stats.blksize`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsblksize)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The file system block size for i/o operations.

##### `stats.blocks`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsblocks)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The number of blocks allocated for this file.

##### `stats.atimeMs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsatimems)

Added in: v8.1.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The timestamp indicating the last time this file was accessed expressed in
milliseconds since the POSIX Epoch.

##### `stats.mtimeMs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsmtimems)

Added in: v8.1.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The timestamp indicating the last time this file was modified expressed in
milliseconds since the POSIX Epoch.

##### `stats.ctimeMs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsctimems)

Added in: v8.1.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The timestamp indicating the last time the file status was changed expressed
in milliseconds since the POSIX Epoch.

##### `stats.birthtimeMs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsbirthtimems)

Added in: v8.1.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

The timestamp indicating the creation time of this file expressed in
milliseconds since the POSIX Epoch.

##### `stats.atimeNs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsatimens)

Added in: v12.10.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Only present when `bigint: true` is passed into the method that generates
the object.
The timestamp indicating the last time this file was accessed expressed in
nanoseconds since the POSIX Epoch.

##### `stats.mtimeNs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsmtimens)

Added in: v12.10.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Only present when `bigint: true` is passed into the method that generates
the object.
The timestamp indicating the last time this file was modified expressed in
nanoseconds since the POSIX Epoch.

##### `stats.ctimeNs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsctimens)

Added in: v12.10.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Only present when `bigint: true` is passed into the method that generates
the object.
The timestamp indicating the last time the file status was changed expressed
in nanoseconds since the POSIX Epoch.

##### `stats.birthtimeNs`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsbirthtimens)

Added in: v12.10.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Only present when `bigint: true` is passed into the method that generates
the object.
The timestamp indicating the creation time of this file expressed in
nanoseconds since the POSIX Epoch.

##### `stats.atime`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsatime)

Added in: v0.11.13

- Type: [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

The timestamp indicating the last time this file was accessed.

##### `stats.mtime`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsmtime)

Added in: v0.11.13

- Type: [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

The timestamp indicating the last time this file was modified.

##### `stats.ctime`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsctime)

Added in: v0.11.13

- Type: [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

The timestamp indicating the last time the file status was changed.

##### `stats.birthtime`[\#](https://nodejs.org/docs/latest/api/fs.html\#statsbirthtime)

Added in: v0.11.13

- Type: [<Date>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

The timestamp indicating the creation time of this file.

##### Stat time values[\#](https://nodejs.org/docs/latest/api/fs.html\#stat-time-values)

The `atimeMs`, `mtimeMs`, `ctimeMs`, `birthtimeMs` properties are
numeric values that hold the corresponding times in milliseconds. Their
precision is platform specific. When `bigint: true` is passed into the
method that generates the object, the properties will be [bigints](https://tc39.github.io/proposal-bigint),
otherwise they will be [numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type).

The `atimeNs`, `mtimeNs`, `ctimeNs`, `birthtimeNs` properties are
[bigints](https://tc39.github.io/proposal-bigint) that hold the corresponding times in nanoseconds. They are
only present when `bigint: true` is passed into the method that generates
the object. Their precision is platform specific.

`atime`, `mtime`, `ctime`, and `birthtime` are
[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object alternate representations of the various times. The
`Date` and number values are not connected. Assigning a new number value, or
mutating the `Date` value, will not be reflected in the corresponding alternate
representation.

The times in the stat object have the following semantics:

- `atime` "Access Time": Time when file data last accessed. Changed
by the [`mknod(2)`](http://man7.org/linux/man-pages/man2/mknod.2.html), [`utimes(2)`](http://man7.org/linux/man-pages/man2/utimes.2.html), and [`read(2)`](http://man7.org/linux/man-pages/man2/read.2.html) system calls.
- `mtime` "Modified Time": Time when file data last modified.
Changed by the [`mknod(2)`](http://man7.org/linux/man-pages/man2/mknod.2.html), [`utimes(2)`](http://man7.org/linux/man-pages/man2/utimes.2.html), and [`write(2)`](http://man7.org/linux/man-pages/man2/write.2.html) system calls.
- `ctime` "Change Time": Time when file status was last changed
(inode data modification). Changed by the [`chmod(2)`](http://man7.org/linux/man-pages/man2/chmod.2.html), [`chown(2)`](http://man7.org/linux/man-pages/man2/chown.2.html),
[`link(2)`](http://man7.org/linux/man-pages/man2/link.2.html), [`mknod(2)`](http://man7.org/linux/man-pages/man2/mknod.2.html), [`rename(2)`](http://man7.org/linux/man-pages/man2/rename.2.html), [`unlink(2)`](http://man7.org/linux/man-pages/man2/unlink.2.html), [`utimes(2)`](http://man7.org/linux/man-pages/man2/utimes.2.html),
[`read(2)`](http://man7.org/linux/man-pages/man2/read.2.html), and [`write(2)`](http://man7.org/linux/man-pages/man2/write.2.html) system calls.
- `birthtime` "Birth Time": Time of file creation. Set once when the
file is created. On file systems where birthtime is not available,
this field may instead hold either the `ctime` or
`1970-01-01T00:00Z` (ie, Unix epoch timestamp `0`). This value may be greater
than `atime` or `mtime` in this case. On Darwin and other FreeBSD variants,
also set if the `atime` is explicitly set to an earlier value than the current
`birthtime` using the [`utimes(2)`](http://man7.org/linux/man-pages/man2/utimes.2.html) system call.

Prior to Node.js 0.12, the `ctime` held the `birthtime` on Windows systems. As
of 0.12, `ctime` is not "creation time", and on Unix systems, it never was.

#### Class: `fs.StatFs`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsstatfs)

Added in: v19.6.0, v18.15.0

Provides information about a mounted file system.

Objects returned from [`fs.statfs()`](https://nodejs.org/docs/latest/api/fs.html#fsstatfspath-options-callback) and its synchronous counterpart are of
this type. If `bigint` in the `options` passed to those methods is `true`, the
numeric values will be `bigint` instead of `number`.

```console
StatFs {
  type: 1397114950,
  bsize: 4096,
  blocks: 121938943,
  bfree: 61058895,
  bavail: 61058895,
  files: 999,
  ffree: 1000000
} copy
```

`bigint` version:

```console
StatFs {
  type: 1397114950n,
  bsize: 4096n,
  blocks: 121938943n,
  bfree: 61058895n,
  bavail: 61058895n,
  files: 999n,
  ffree: 1000000n
} copy
```

##### `statfs.bavail`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsbavail)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Free blocks available to unprivileged users.

##### `statfs.bfree`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsbfree)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Free blocks in file system.

##### `statfs.blocks`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsblocks)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Total data blocks in file system.

##### `statfs.bsize`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsbsize)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Optimal transfer block size.

##### `statfs.ffree`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsffree)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Free file nodes in file system.

##### `statfs.files`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfsfiles)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Total file nodes in file system.

##### `statfs.type`[\#](https://nodejs.org/docs/latest/api/fs.html\#statfstype)

Added in: v19.6.0, v18.15.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

Type of file system.

#### Class: `fs.Utf8Stream`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fsutf8stream)

Added in: v24.6.0

[Stability: 1](https://nodejs.org/docs/latest/api/documentation.html#stability-index) \- Experimental

An optimized UTF-8 stream writer that allows for flushing all the internal
buffering on demand. It handles `EAGAIN` errors correctly, allowing for
customization, for example, by dropping content if the disk is busy.

##### Event: `'close'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-close_3)

The `'close'` event is emitted when the stream is fully closed.

##### Event: `'drain'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-drain)

The `'drain'` event is emitted when the internal buffer has drained sufficiently
to allow continued writing.

##### Event: `'drop'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-drop)

The `'drop'` event is emitted when to maximal length is reached and that data
will not be written. The data that was dropped is passed as the first argument
to the event handle.

##### Event: `'error'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-error_1)

The `'error'` event is emitted when an error occurs.

##### Event: `'finish'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-finish)

The `'finish'` event is emitted when the stream has been ended and all data has
been flushed to the underlying file.

##### Event: `'ready'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-ready_1)

The `'ready'` event is emitted when the stream is ready to accept writes.

##### Event: `'write'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-write)

The `'write'` event is emitted when a write operation has completed. The number
of bytes written is passed as the first argument to the event handler.

##### `new fs.Utf8Stream([options])`[\#](https://nodejs.org/docs/latest/api/fs.html\#new-fsutf8streamoptions)

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `append`: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Appends writes to dest file instead of truncating it.
    **Default**: `true`.
  - `contentMode`: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Which type of data you can send to the write
    function, supported values are `'utf8'` or `'buffer'`. **Default**:
    `'utf8'`.
  - `dest`: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) A path to a file to be written to (mode controlled by the
    append option).
  - `fd`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) A file descriptor, something that is returned by `fs.open()`
    or `fs.openSync()`.
  - `fs`: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) An object that has the same API as the `fs` module, useful
    for mocking, testing, or customizing the behavior of the stream.
  - `fsync`: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Perform a `fs.fsyncSync()` every time a write is
    completed.
  - `maxLength`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The maximum length of the internal buffer. If a write
    operation would cause the buffer to exceed `maxLength`, the data written is
    dropped and a drop event is emitted with the dropped data
  - `maxWrite`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The maximum number of bytes that can be written;
    **Default**: `16384`
  - `minLength`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The minimum length of the internal buffer that is
    required to be full before flushing.
  - `mkdir`: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Ensure directory for `dest` file exists when true.
    **Default**: `false`.
  - `mode`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) Specify the creating file mode (see `fs.open()`).
  - `periodicFlush`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Calls flush every `periodicFlush` milliseconds.
  - `retryEAGAIN` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A function that will be called when `write()`,
    `writeSync()`, or `flushSync()` encounters an `EAGAIN` or `EBUSY` error.
    If the return value is `true` the operation will be retried, otherwise it
    will bubble the error. The `err` is the error that caused this function to
    be called, `writeBufferLen` is the length of the buffer that was written,
    and `remainingBufferLen` is the length of the remaining buffer that the
    stream did not try to write.

    - `err` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) An error or `null`.
    - `writeBufferLen` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
    - `remainingBufferLen`: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
  - `sync`: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Perform writes synchronously.

##### `utf8Stream.append`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamappend)

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the stream is appending to the file or truncating it.

##### `utf8Stream.contentMode`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamcontentmode)

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The type of data that can be written to the stream. Supported
values are `'utf8'` or `'buffer'`. **Default**: `'utf8'`.

##### `utf8Stream.destroy()`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamdestroy)

Close the stream immediately, without flushing the internal buffer.

##### `utf8Stream.end()`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamend)

Close the stream gracefully, flushing the internal buffer before closing.

##### `utf8Stream.fd`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamfd)

- [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The file descriptor that is being written to.

##### `utf8Stream.file`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamfile)

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The file that is being written to.

##### `utf8Stream.flush(callback)`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamflushcallback)

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Null_type) An error if the flush failed, otherwise `null`.

Writes the current buffer to the file if a write was not in progress. Do
nothing if `minLength` is zero or if it is already writing.

##### `utf8Stream.flushSync()`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamflushsync)

Flushes the buffered data synchronously. This is a costly operation.

##### `utf8Stream.fsync`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamfsync)

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the stream is performing a `fs.fsyncSync()` after every
write operation.

##### `utf8Stream.maxLength`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streammaxlength)

- [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The maximum length of the internal buffer. If a write
operation would cause the buffer to exceed `maxLength`, the data written is
dropped and a drop event is emitted with the dropped data.

##### `utf8Stream.minLength`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamminlength)

- [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The minimum length of the internal buffer that is required to be
full before flushing.

##### `utf8Stream.mkdir`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streammkdir)

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the stream should ensure that the directory for the
`dest` file exists. If `true`, it will create the directory if it does not
exist. **Default**: `false`.

##### `utf8Stream.mode`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streammode)

- [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) The mode of the file that is being written to.

##### `utf8Stream.periodicFlush`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamperiodicflush)

- [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) The number of milliseconds between flushes. If set to `0`, no
periodic flushes will be performed.

##### `utf8Stream.reopen(file)`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamreopenfile)

- `file`: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) \| [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) A path to a file to be written to (mode
controlled by the append option).

Reopen the file in place, useful for log rotation.

##### `utf8Stream.sync`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamsync)

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the stream is writing synchronously or asynchronously.

##### `utf8Stream.write(data)`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamwritedata)

- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) \| [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) The data to write.
- Returns [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

When the `options.contentMode` is set to `'utf8'` when the stream is created,
the `data` argument must be a string. If the `contentMode` is set to `'buffer'`,
the `data` argument must be a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

##### `utf8Stream.writing`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamwriting)

- [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) Whether the stream is currently writing data to the file.

##### `utf8Stream[Symbol.dispose]()`[\#](https://nodejs.org/docs/latest/api/fs.html\#utf8streamsymboldispose)

Calls `utf8Stream.destroy()`.

#### Class: `fs.WriteStream`[\#](https://nodejs.org/docs/latest/api/fs.html\#class-fswritestream)

Added in: v0.1.93

- Extends [<stream.Writable>](https://nodejs.org/docs/latest/api/stream.html#class-streamwritable)

Instances of [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream) are created and returned using the
[`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options) function.

##### Event: `'close'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-close_4)

Added in: v0.1.93

Emitted when the [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)'s underlying file descriptor has been closed.

##### Event: `'open'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-open_1)

Added in: v0.1.93

- `fd` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Integer file descriptor used by the [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream).

Emitted when the [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream)'s file is opened.

##### Event: `'ready'`[\#](https://nodejs.org/docs/latest/api/fs.html\#event-ready_2)

Added in: v9.11.0

Emitted when the [<fs.WriteStream>](https://nodejs.org/docs/latest/api/fs.html#class-fswritestream) is ready to be used.

Fires immediately after `'open'`.

##### `writeStream.bytesWritten`[\#](https://nodejs.org/docs/latest/api/fs.html\#writestreambyteswritten)

Added in: v0.4.7

The number of bytes written so far. Does not include data that is still queued
for writing.

##### `writeStream.close([callback])`[\#](https://nodejs.org/docs/latest/api/fs.html\#writestreamclosecallback)

Added in: v0.9.4

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `err` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

Closes `writeStream`. Optionally accepts a
callback that will be executed once the `writeStream`
is closed.

##### `writeStream.path`[\#](https://nodejs.org/docs/latest/api/fs.html\#writestreampath)

Added in: v0.1.93

The path to the file the stream is writing to as specified in the first
argument to [`fs.createWriteStream()`](https://nodejs.org/docs/latest/api/fs.html#fscreatewritestreampath-options). If `path` is passed as a string, then
`writeStream.path` will be a string. If `path` is passed as a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer), then
`writeStream.path` will be a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer).

##### `writeStream.pending`[\#](https://nodejs.org/docs/latest/api/fs.html\#writestreampending)

Added in: v11.2.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

This property is `true` if the underlying file has not been opened yet,
i.e. before the `'ready'` event is emitted.

#### `fs.constants`[\#](https://nodejs.org/docs/latest/api/fs.html\#fsconstants)

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns an object containing commonly used constants for file system
operations.

##### FS constants[\#](https://nodejs.org/docs/latest/api/fs.html\#fs-constants)

The following constants are exported by `fs.constants` and `fsPromises.constants`.

Not every constant will be available on every operating system;
this is especially important for Windows, where many of the POSIX specific
definitions are not available.
For portable applications it is recommended to check for their presence
before use.

To use more than one constant, use the bitwise OR `|` operator.

Example:

```js mjs
import { open, constants } from 'node:fs';

const {
  O_RDWR,
  O_CREAT,
  O_EXCL,
} = constants;

open('/path/to/my/file', O_RDWR | O_CREAT | O_EXCL, (err, fd) => {
  // ...
}); copy
```

###### File access constants[\#](https://nodejs.org/docs/latest/api/fs.html\#file-access-constants)

The following constants are meant for use as the `mode` parameter passed to
[`fsPromises.access()`](https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode), [`fs.access()`](https://nodejs.org/docs/latest/api/fs.html#fsaccesspath-mode-callback), and [`fs.accessSync()`](https://nodejs.org/docs/latest/api/fs.html#fsaccesssyncpath-mode).

| Constant | Description |
| --- | --- |
| `F_OK` | Flag indicating that the file is visible to the calling process.<br> This is useful for determining if a file exists, but says nothing<br> about `rwx` permissions. Default if no mode is specified. |
| `R_OK` | Flag indicating that the file can be read by the calling process. |
| `W_OK` | Flag indicating that the file can be written by the calling<br> process. |
| `X_OK` | Flag indicating that the file can be executed by the calling<br> process. This has no effect on Windows<br> (will behave like `fs.constants.F_OK`). |

The definitions are also available on Windows.

###### File copy constants[\#](https://nodejs.org/docs/latest/api/fs.html\#file-copy-constants)

The following constants are meant for use with [`fs.copyFile()`](https://nodejs.org/docs/latest/api/fs.html#fscopyfilesrc-dest-mode-callback).

| Constant | Description |
| --- | --- |
| `COPYFILE_EXCL` | If present, the copy operation will fail with an error if the<br> destination path already exists. |
| `COPYFILE_FICLONE` | If present, the copy operation will attempt to create a<br> copy-on-write reflink. If the underlying platform does not support<br> copy-on-write, then a fallback copy mechanism is used. |
| `COPYFILE_FICLONE_FORCE` | If present, the copy operation will attempt to create a<br> copy-on-write reflink. If the underlying platform does not support<br> copy-on-write, then the operation will fail with an error. |

The definitions are also available on Windows.

###### File open constants[\#](https://nodejs.org/docs/latest/api/fs.html\#file-open-constants)

The following constants are meant for use with `fs.open()`.

| Constant | Description |
| --- | --- |
| `O_RDONLY` | Flag indicating to open a file for read-only access. |
| `O_WRONLY` | Flag indicating to open a file for write-only access. |
| `O_RDWR` | Flag indicating to open a file for read-write access. |
| `O_CREAT` | Flag indicating to create the file if it does not already exist. |
| `O_EXCL` | Flag indicating that opening a file should fail if the<br> `O_CREAT` flag is set and the file already exists. |
| `O_NOCTTY` | Flag indicating that if path identifies a terminal device, opening the<br> path shall not cause that terminal to become the controlling terminal for<br> the process (if the process does not already have one). |
| `O_TRUNC` | Flag indicating that if the file exists and is a regular file, and the<br> file is opened successfully for write access, its length shall be truncated<br> to zero. |
| `O_APPEND` | Flag indicating that data will be appended to the end of the file. |
| `O_DIRECTORY` | Flag indicating that the open should fail if the path is not a<br> directory. |
| `O_NOATIME` | Flag indicating reading accesses to the file system will no longer<br> result in an update to the `atime` information associated with<br> the file. This flag is available on Linux operating systems only. |
| `O_NOFOLLOW` | Flag indicating that the open should fail if the path is a symbolic<br> link. |
| `O_SYNC` | Flag indicating that the file is opened for synchronized I/O with write<br> operations waiting for file integrity. |
| `O_DSYNC` | Flag indicating that the file is opened for synchronized I/O with write<br> operations waiting for data integrity. |
| `O_SYMLINK` | Flag indicating to open the symbolic link itself rather than the<br> resource it is pointing to. |
| `O_DIRECT` | When set, an attempt will be made to minimize caching effects of file<br> I/O. |
| `O_NONBLOCK` | Flag indicating to open the file in nonblocking mode when possible. |
| `UV_FS_O_FILEMAP` | When set, a memory file mapping is used to access the file. This flag<br> is available on Windows operating systems only. On other operating systems,<br> this flag is ignored. |

On Windows, only `O_APPEND`, `O_CREAT`, `O_EXCL`, `O_RDONLY`, `O_RDWR`,
`O_TRUNC`, `O_WRONLY`, and `UV_FS_O_FILEMAP` are available.

###### File type constants[\#](https://nodejs.org/docs/latest/api/fs.html\#file-type-constants)

The following constants are meant for use with the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object's
`mode` property for determining a file's type.

| Constant | Description |
| --- | --- |
| `S_IFMT` | Bit mask used to extract the file type code. |
| `S_IFREG` | File type constant for a regular file. |
| `S_IFDIR` | File type constant for a directory. |
| `S_IFCHR` | File type constant for a character-oriented device file. |
| `S_IFBLK` | File type constant for a block-oriented device file. |
| `S_IFIFO` | File type constant for a FIFO/pipe. |
| `S_IFLNK` | File type constant for a symbolic link. |
| `S_IFSOCK` | File type constant for a socket. |

On Windows, only `S_IFCHR`, `S_IFDIR`, `S_IFLNK`, `S_IFMT`, and `S_IFREG`,
are available.

###### File mode constants[\#](https://nodejs.org/docs/latest/api/fs.html\#file-mode-constants)

The following constants are meant for use with the [<fs.Stats>](https://nodejs.org/docs/latest/api/fs.html#class-fsstats) object's
`mode` property for determining the access permissions for a file.

| Constant | Description |
| --- | --- |
| `S_IRWXU` | File mode indicating readable, writable, and executable by owner. |
| `S_IRUSR` | File mode indicating readable by owner. |
| `S_IWUSR` | File mode indicating writable by owner. |
| `S_IXUSR` | File mode indicating executable by owner. |
| `S_IRWXG` | File mode indicating readable, writable, and executable by group. |
| `S_IRGRP` | File mode indicating readable by group. |
| `S_IWGRP` | File mode indicating writable by group. |
| `S_IXGRP` | File mode indicating executable by group. |
| `S_IRWXO` | File mode indicating readable, writable, and executable by others. |
| `S_IROTH` | File mode indicating readable by others. |
| `S_IWOTH` | File mode indicating writable by others. |
| `S_IXOTH` | File mode indicating executable by others. |

On Windows, only `S_IRUSR` and `S_IWUSR` are available.

### Notes[\#](https://nodejs.org/docs/latest/api/fs.html\#notes)

#### Ordering of callback and promise-based operations[\#](https://nodejs.org/docs/latest/api/fs.html\#ordering-of-callback-and-promise-based-operations)

Because they are executed asynchronously by the underlying thread pool,
there is no guaranteed ordering when using either the callback or
promise-based methods.

For example, the following is prone to error because the `fs.stat()`
operation might complete before the `fs.rename()` operation:

```js
const fs = require('node:fs');

fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
}); copy
```

It is important to correctly order the operations by awaiting the results
of one before invoking the other:

```js mjs
import { rename, stat } from 'node:fs/promises';

const oldPath = '/tmp/hello';
const newPath = '/tmp/world';

try {
  await rename(oldPath, newPath);
  const stats = await stat(newPath);
  console.log(`stats: ${JSON.stringify(stats)}`);
} catch (error) {
  console.error('there was an error:', error.message);
}const { rename, stat } = require('node:fs/promises');

(async function(oldPath, newPath) {
  try {
    await rename(oldPath, newPath);
    const stats = await stat(newPath);
    console.log(`stats: ${JSON.stringify(stats)}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello', '/tmp/world');copy
```

Or, when using the callback APIs, move the `fs.stat()` call into the callback
of the `fs.rename()` operation:

```js mjs
import { rename, stat } from 'node:fs';

rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});const { rename, stat } = require('node:fs/promises');

rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  stat('/tmp/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});copy
```

#### File paths[\#](https://nodejs.org/docs/latest/api/fs.html\#file-paths)

Most `fs` operations accept file paths that may be specified in the form of
a string, a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer), or a [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) object using the `file:` protocol.

##### String paths[\#](https://nodejs.org/docs/latest/api/fs.html\#string-paths)

String paths are interpreted as UTF-8 character sequences identifying
the absolute or relative filename. Relative paths will be resolved relative
to the current working directory as determined by calling `process.cwd()`.

Example using an absolute path on POSIX:

```js mjs
import { open } from 'node:fs/promises';

let fd;
try {
  fd = await open('/open/some/file.txt', 'r');
  // Do something with the file
} finally {
  await fd?.close();
} copy
```

Example using a relative path on POSIX (relative to `process.cwd()`):

```js mjs
import { open } from 'node:fs/promises';

let fd;
try {
  fd = await open('file.txt', 'r');
  // Do something with the file
} finally {
  await fd?.close();
} copy
```

##### File URL paths[\#](https://nodejs.org/docs/latest/api/fs.html\#file-url-paths)

Added in: v7.6.0

For most `node:fs` module functions, the `path` or `filename` argument may be
passed as a [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) object using the `file:` protocol.

```js mjs
import { readFileSync } from 'node:fs';

readFileSync(new URL('file:///tmp/hello')); copy
```

`file:` URLs are always absolute paths.

###### Platform-specific considerations[\#](https://nodejs.org/docs/latest/api/fs.html\#platform-specific-considerations)

On Windows, `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s with a host name convert to UNC paths, while `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s with drive letters convert to local absolute paths. `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s
with no host name and no drive letter will result in an error:

```js mjs
import { readFileSync } from 'node:fs';
// On Windows :

// - WHATWG file URLs with hostname convert to UNC path
// file://hostname/p/a/t/h/file => \\hostname\p\a\t\h\file
readFileSync(new URL('file://hostname/p/a/t/h/file'));

// - WHATWG file URLs with drive letters convert to absolute path
// file:///C:/tmp/hello => C:\tmp\hello
readFileSync(new URL('file:///C:/tmp/hello'));

// - WHATWG file URLs without hostname must have a drive letters
readFileSync(new URL('file:///notdriveletter/p/a/t/h/file'));
readFileSync(new URL('file:///c/p/a/t/h/file'));
// TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must be absolute copy
```

`file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s with drive letters must use `:` as a separator just after
the drive letter. Using another separator will result in an error.

On all other platforms, `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s with a host name are unsupported and
will result in an error:

```js mjs
import { readFileSync } from 'node:fs';
// On other platforms:

// - WHATWG file URLs with hostname are unsupported
// file://hostname/p/a/t/h/file => throw!
readFileSync(new URL('file://hostname/p/a/t/h/file'));
// TypeError [ERR_INVALID_FILE_URL_PATH]: must be absolute

// - WHATWG file URLs convert to absolute path
// file:///tmp/hello => /tmp/hello
readFileSync(new URL('file:///tmp/hello')); copy
```

A `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) having encoded slash characters will result in an error on all
platforms:

```js mjs
import { readFileSync } from 'node:fs';

// On Windows
readFileSync(new URL('file:///C:/p/a/t/h/%2F'));
readFileSync(new URL('file:///C:/p/a/t/h/%2f'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
\ or / characters */

// On POSIX
readFileSync(new URL('file:///p/a/t/h/%2F'));
readFileSync(new URL('file:///p/a/t/h/%2f'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
/ characters */ copy
```

On Windows, `file:` [<URL>](https://nodejs.org/docs/latest/api/url.html#the-whatwg-url-api) s having encoded backslash will result in an error:

```js mjs
import { readFileSync } from 'node:fs';

// On Windows
readFileSync(new URL('file:///C:/path/%5C'));
readFileSync(new URL('file:///C:/path/%5c'));
/* TypeError [ERR_INVALID_FILE_URL_PATH]: File URL path must not include encoded
\ or / characters */ copy
```

##### Buffer paths[\#](https://nodejs.org/docs/latest/api/fs.html\#buffer-paths)

Paths specified using a [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) are useful primarily on certain POSIX
operating systems that treat file paths as opaque byte sequences. On such
systems, it is possible for a single file path to contain sub-sequences that
use multiple character encodings. As with string paths, [<Buffer>](https://nodejs.org/docs/latest/api/buffer.html#class-buffer) paths may
be relative or absolute:

Example using an absolute path on POSIX:

```js mjs
import { open } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

let fd;
try {
  fd = await open(Buffer.from('/open/some/file.txt'), 'r');
  // Do something with the file
} finally {
  await fd?.close();
} copy
```

##### Per-drive working directories on Windows[\#](https://nodejs.org/docs/latest/api/fs.html\#per-drive-working-directories-on-windows)

On Windows, Node.js follows the concept of per-drive working directory. This
behavior can be observed when using a drive path without a backslash. For
example `fs.readdirSync('C:\\')` can potentially return a different result than
`fs.readdirSync('C:')`. For more information, see
[this MSDN page](https://docs.microsoft.com/en-us/windows/desktop/FileIO/naming-a-file#fully-qualified-vs-relative-paths).

#### File descriptors[\#](https://nodejs.org/docs/latest/api/fs.html\#file-descriptors_1)

On POSIX systems, for every process, the kernel maintains a table of currently
open files and resources. Each open file is assigned a simple numeric
identifier called a _file descriptor_. At the system-level, all file system
operations use these file descriptors to identify and track each specific
file. Windows systems use a different but conceptually similar mechanism for
tracking resources. To simplify things for users, Node.js abstracts away the
differences between operating systems and assigns all open files a numeric file
descriptor.

The callback-based `fs.open()`, and synchronous `fs.openSync()` methods open a
file and allocate a new file descriptor. Once allocated, the file descriptor may
be used to read data from, write data to, or request information about the file.

Operating systems limit the number of file descriptors that may be open
at any given time so it is critical to close the descriptor when operations
are completed. Failure to do so will result in a memory leak that will
eventually cause an application to crash.

```js mjs
import { open, close, fstat } from 'node:fs';

function closeFd(fd) {
  close(fd, (err) => {
    if (err) throw err;
  });
}

open('/open/some/file.txt', 'r', (err, fd) => {
  if (err) throw err;
  try {
    fstat(fd, (err, stat) => {
      if (err) {
        closeFd(fd);
        throw err;
      }

      // use stat

      closeFd(fd);
    });
  } catch (err) {
    closeFd(fd);
    throw err;
  }
}); copy
```

The promise-based APIs use a [<FileHandle>](https://nodejs.org/docs/latest/api/fs.html#class-filehandle) object in place of the numeric
file descriptor. These objects are better managed by the system to ensure
that resources are not leaked. However, it is still required that they are
closed when operations are completed:

```js mjs
import { open } from 'node:fs/promises';

let file;
try {
  file = await open('/open/some/file.txt', 'r');
  const stat = await file.stat();
  // use stat
} finally {
  await file.close();
} copy
```

#### Threadpool usage[\#](https://nodejs.org/docs/latest/api/fs.html\#threadpool-usage)

All callback and promise-based file system APIs (with the exception of
`fs.FSWatcher()`) use libuv's threadpool. This can have surprising and negative
performance implications for some applications. See the
[`UV_THREADPOOL_SIZE`](https://nodejs.org/docs/latest/api/cli.html#uv_threadpool_sizesize) documentation for more information.

#### File system flags[\#](https://nodejs.org/docs/latest/api/fs.html\#file-system-flags)

The following flags are available wherever the `flag` option takes a
string.

- `'a'`: Open file for appending.
The file is created if it does not exist.

- `'ax'`: Like `'a'` but fails if the path exists.

- `'a+'`: Open file for reading and appending.
The file is created if it does not exist.

- `'ax+'`: Like `'a+'` but fails if the path exists.

- `'as'`: Open file for appending in synchronous mode.
The file is created if it does not exist.

- `'as+'`: Open file for reading and appending in synchronous mode.
The file is created if it does not exist.

- `'r'`: Open file for reading.
An exception occurs if the file does not exist.

- `'rs'`: Open file for reading in synchronous mode.
An exception occurs if the file does not exist.

- `'r+'`: Open file for reading and writing.
An exception occurs if the file does not exist.

- `'rs+'`: Open file for reading and writing in synchronous mode. Instructs
the operating system to bypass the local file system cache.

This is primarily useful for opening files on NFS mounts as it allows
skipping the potentially stale local cache. It has a very real impact on
I/O performance so using this flag is not recommended unless it is needed.

This doesn't turn `fs.open()` or `fsPromises.open()` into a synchronous
blocking call. If synchronous operation is desired, something like
`fs.openSync()` should be used.

- `'w'`: Open file for writing.
The file is created (if it does not exist) or truncated (if it exists).

- `'wx'`: Like `'w'` but fails if the path exists.

- `'w+'`: Open file for reading and writing.
The file is created (if it does not exist) or truncated (if it exists).

- `'wx+'`: Like `'w+'` but fails if the path exists.


`flag` can also be a number as documented by [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html); commonly used constants
are available from `fs.constants`. On Windows, flags are translated to
their equivalent ones where applicable, e.g. `O_WRONLY` to `FILE_GENERIC_WRITE`,
or `O_EXCL|O_CREAT` to `CREATE_NEW`, as accepted by `CreateFileW`.

The exclusive flag `'x'` ( `O_EXCL` flag in [`open(2)`](http://man7.org/linux/man-pages/man2/open.2.html)) causes the operation to
return an error if the path already exists. On POSIX, if the path is a symbolic
link, using `O_EXCL` returns an error even if the link is to a path that does
not exist. The exclusive flag might not work with network file systems.

On Linux, positional writes don't work when the file is opened in append mode.
The kernel ignores the position argument and always appends the data to
the end of the file.

Modifying a file rather than replacing it may require the `flag` option to be
set to `'r+'` rather than the default `'w'`.

The behavior of some flags are platform-specific. As such, opening a directory
on macOS and Linux with the `'a+'` flag, as in the example below, will return an
error. In contrast, on Windows and FreeBSD, a file descriptor or a `FileHandle`
will be returned.

```js
// macOS and Linux
fs.open('<directory>', 'a+', (err, fd) => {
  // => [Error: EISDIR: illegal operation on a directory, open <directory>]
});

// Windows and FreeBSD
fs.open('<directory>', 'a+', (err, fd) => {
  // => null, <fd>
}); copy
```

On Windows, opening an existing hidden file using the `'w'` flag (either
through `fs.open()`, `fs.writeFile()`, or `fsPromises.open()`) will fail with
`EPERM`. Existing hidden files can be opened for writing with the `'r+'` flag.

A call to `fs.ftruncate()` or `filehandle.truncate()` can be used to reset
the file contents.