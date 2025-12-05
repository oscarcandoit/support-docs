---
url: "https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox"
title: "Class - Sandbox - Vercel Sandbox Docs"
---

[Skip to main content](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#content-area)

[Vercel Sandbox Docs home page![light logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-light.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=a71ecb01d35b35f715f573b63b08b5da)![dark logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=4f7bb64ff9bd0b78456f432edaf4a2d0)](https://vercel.com/)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Class - Sandbox

- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox/reference/readme)

- [@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals)

- [Class - Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command)

- [Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

- [Class - Sandbox](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox)

On this page

- [Accessors](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#accessors)
- [sandboxId](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#sandboxid)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#get-signature)
- [status](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#status)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#get-signature-2)
- [timeout](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#timeout)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#get-signature-3)
- [Methods](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#methods)
- [list()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#list)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns)
- [create()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#create)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-2)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-2)
- [get()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#get)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-3)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-3)
- [getCommand()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#getcommand)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-4)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-4)
- [runCommand()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#runcommand)
- [Call Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#call-signature)
- [Call Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#call-signature-2)
- [Call Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#call-signature-3)
- [\_runCommand()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#runcommand-2)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-5)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-5)
- [mkDir()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#mkdir)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-6)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-6)
- [readFile()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#readfile)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-7)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-7)
- [writeFiles()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#writefiles)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-8)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-8)
- [domain()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#domain)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-9)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-9)
- [Throws](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#throws)
- [stop()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#stop)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-10)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-10)
- [extendTimeout()](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#extendtimeout)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#parameters-11)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#returns-11)

# Class - Sandbox

Copy page

Copy page

A Sandbox is an isolated Linux MicroVM to run commands in.Use [Sandbox.create](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#create) or [Sandbox.get](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#get) to construct.

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#accessors)  Accessors

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#sandboxid)  sandboxId

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#get-signature)  Get Signature

Copy

Ask AI

```
get sandboxId(): string;
```

Unique ID of this sandbox.

##### Returns

`string`

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#status)  status

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#get-signature-2)  Get Signature

Copy

Ask AI

```
get status(): "pending" | "running" | "stopping" | "stopped" | "failed";
```

The status of the sandbox.

##### Returns

`"pending"` \| `"running"` \| `"stopping"` \| `"stopped"` \| `"failed"`

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#timeout)  timeout

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#get-signature-3)  Get Signature

Copy

Ask AI

```
get timeout(): number;
```

The timeout of the sandbox in milliseconds.

##### Returns

`number`

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#methods)  Methods

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#list)  list()

Copy

Ask AI

```
static list(params: {
  projectId: string;
  limit?: number;
  since?: number | Date;
  until?: number | Date;
  signal?: AbortSignal;
} & Partial<Credentials>): Promise<Parsed<{
  sandboxes: {
     id: string;
     memory: number;
     vcpus: number;
     region: string;
     runtime: string;
     timeout: number;
     status: "pending" | "running" | "stopping" | "stopped" | "failed";
     requestedAt: number;
     startedAt?: number;
     requestedStopAt?: number;
     stoppedAt?: number;
     duration?: number;
     createdAt: number;
     cwd: string;
     updatedAt: number;
  }[];
  pagination: {
     count: number;
     next: null | number;
     prev: null | number;
  };
}>>;
```

Allow to get a list of sandboxes for a team narrowed to the given params.
It returns both the sandboxes and the pagination metadata to allow getting
the next page of results.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters)  Parameters

| Parameter | Type |
| --- | --- |
| `params` | { `projectId`: `string`; `limit?`: `number`; `since?`: `number` \| `Date`; `until?`: `number` \| `Date`; `signal?`: `AbortSignal`; } & `Partial`<`Credentials`> |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns)  Returns

`Promise`<`Parsed`<{
`sandboxes`: {
`id`: `string`;
`memory`: `number`;
`vcpus`: `number`;
`region`: `string`;
`runtime`: `string`;
`timeout`: `number`;
`status`: `"pending"` \| `"running"` \| `"stopping"` \| `"stopped"` \| `"failed"`;
`requestedAt`: `number`;
`startedAt?`: `number`;
`requestedStopAt?`: `number`;
`stoppedAt?`: `number`;
`duration?`: `number`;
`createdAt`: `number`;
`cwd`: `string`;
`updatedAt`: `number`;
}\[\];
`pagination`: {
`count`: `number`;
`next`: `null` \| `number`;
`prev`: `null` \| `number`;
};
}>>

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#create)  create()

Copy

Ask AI

```
static create(params?: WithPrivate<
  | {
  source?:   | {
     type: "git";
     url: string;
     depth?: number;
     revision?: string;
   }
     | {
     type: "git";
     url: string;
     username: string;
     password: string;
     depth?: number;
     revision?: string;
   }
     | {
     type: "tarball";
     url: string;
   };
  ports?: number[];
  timeout?: number;
  resources?: {
     vcpus: number;
  };
  runtime?:   | string & {
   }
     | "node22"
     | "python3.13";
  signal?: AbortSignal;
}
  | {
  source?:   | {
     type: "git";
     url: string;
     depth?: number;
     revision?: string;
   }
     | {
     type: "git";
     url: string;
     username: string;
     password: string;
     depth?: number;
     revision?: string;
   }
     | {
     type: "tarball";
     url: string;
   };
  ports?: number[];
  timeout?: number;
  resources?: {
     vcpus: number;
  };
  runtime?:   | string & {
   }
     | "node22"
     | "python3.13";
  signal?: AbortSignal;
} & Credentials>): Promise<Sandbox>;
```

Create a new sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-2)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params?` | `WithPrivate`< \| { `source?`: \| { `type`: `"git"`; `url`: `string`; `depth?`: `number`; `revision?`: `string`; } \| { `type`: `"git"`; `url`: `string`; `username`: `string`; `password`: `string`; `depth?`: `number`; `revision?`: `string`; } \| { `type`: `"tarball"`; `url`: `string`; }; `ports?`: `number`\[\]; `timeout?`: `number`; `resources?`: { `vcpus`: `number`; }; `runtime?`: \| `string` & { } \| `"node22"` \| `"python3.13"`; `signal?`: `AbortSignal`; } \| { `source?`: \| { `type`: `"git"`; `url`: `string`; `depth?`: `number`; `revision?`: `string`; } \| { `type`: `"git"`; `url`: `string`; `username`: `string`; `password`: `string`; `depth?`: `number`; `revision?`: `string`; } \| { `type`: `"tarball"`; `url`: `string`; }; `ports?`: `number`\[\]; `timeout?`: `number`; `resources?`: { `vcpus`: `number`; }; `runtime?`: \| `string` & { } \| `"node22"` \| `"python3.13"`; `signal?`: `AbortSignal`; } & `Credentials`> | Creation parameters and optional credentials. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-2)  Returns

`Promise`<`Sandbox`>A promise resolving to the created Sandbox.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#get)  get()

Copy

Ask AI

```
static get(params:
  | {
  sandboxId: string;
  signal?: AbortSignal;
}
  | {
  sandboxId: string;
  signal?: AbortSignal;
} & Credentials): Promise<Sandbox>;
```

Retrieve an existing sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-3)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params` | \| { `sandboxId`: `string`; `signal?`: `AbortSignal`; } \| { `sandboxId`: `string`; `signal?`: `AbortSignal`; } & `Credentials` | Get parameters and optional credentials. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-3)  Returns

`Promise`<`Sandbox`>A promise resolving to the Sandbox.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#getcommand)  getCommand()

Copy

Ask AI

```
getCommand(cmdId: string, opts?: {
  signal?: AbortSignal;
}): Promise<Command>;
```

Get a previously run command by its ID.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-4)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `cmdId` | `string` | ID of the command to retrieve |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-4)  Returns

`Promise`< [`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command) >A [Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command) instance representing the command

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#runcommand)  runCommand()

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#call-signature)  Call Signature

Copy

Ask AI

```
runCommand(
   command: string,
   args?: string[],
   opts?: {
  signal?: AbortSignal;
}): Promise<CommandFinished>;
```

Start executing a command in this sandbox.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `command` | `string` | The command to execute. |
| `args?` | `string`\[\] | Arguments to pass to the command. |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the command execution. |

##### Returns

`Promise`< [`CommandFinished`](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) >A [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) result once execution is done.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#call-signature-2)  Call Signature

Copy

Ask AI

```
runCommand(params: {
  cmd: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
  sudo?: boolean;
  detached?: boolean;
  stdout?: Writable;
  stderr?: Writable;
  signal?: AbortSignal;
} & {
  detached: true;
}): Promise<Command>;
```

Start executing a command in detached mode.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params` | { `cmd`: `string`; `args?`: `string`\[\]; `cwd?`: `string`; `env?`: `Record`<`string`, `string`>; `sudo?`: `boolean`; `detached?`: `boolean`; `stdout?`: `Writable`; `stderr?`: `Writable`; `signal?`: `AbortSignal`; } & { `detached`: `true`; } | The command parameters. |

##### Returns

`Promise`< [`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command) >A [Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command) instance for the running command.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#call-signature-3)  Call Signature

Copy

Ask AI

```
runCommand(params: {
  cmd: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
  sudo?: boolean;
  detached?: boolean;
  stdout?: Writable;
  stderr?: Writable;
  signal?: AbortSignal;
}): Promise<CommandFinished>;
```

Start executing a command in this sandbox.

##### Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params` | { `cmd`: `string`; `args?`: `string`\[\]; `cwd?`: `string`; `env?`: `Record`<`string`, `string`>; `sudo?`: `boolean`; `detached?`: `boolean`; `stdout?`: `Writable`; `stderr?`: `Writable`; `signal?`: `AbortSignal`; } | The command parameters. |
| `params.cmd` | `string` | The command to execute |
| `params.args?` | `string`\[\] | Arguments to pass to the command |
| `params.cwd?` | `string` | Working directory to execute the command in |
| `params.env?` | `Record`<`string`, `string`> | Environment variables to set for this command |
| `params.sudo?` | `boolean` | If true, execute this command with root privileges. Defaults to false. |
| `params.detached?` | `boolean` | If true, the command will return without waiting for `exitCode` |
| `params.stdout?` | `Writable` | A `Writable` stream where `stdout` from the command will be piped |
| `params.stderr?` | `Writable` | A `Writable` stream where `stderr` from the command will be piped |
| `params.signal?` | `AbortSignal` | An AbortSignal to cancel the command execution |

##### Returns

`Promise`< [`CommandFinished`](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) >A [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) result once execution is done.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#runcommand-2)  \_runCommand()

Copy

Ask AI

```
_runCommand(params: {
  cmd: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
  sudo?: boolean;
  detached?: boolean;
  stdout?: Writable;
  stderr?: Writable;
  signal?: AbortSignal;
}): Promise<Command | CommandFinished>;
```

**`Internal`**Internal helper to start a command in the sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-5)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params` | { `cmd`: `string`; `args?`: `string`\[\]; `cwd?`: `string`; `env?`: `Record`<`string`, `string`>; `sudo?`: `boolean`; `detached?`: `boolean`; `stdout?`: `Writable`; `stderr?`: `Writable`; `signal?`: `AbortSignal`; } | Command execution parameters. |
| `params.cmd` | `string` | The command to execute |
| `params.args?` | `string`\[\] | Arguments to pass to the command |
| `params.cwd?` | `string` | Working directory to execute the command in |
| `params.env?` | `Record`<`string`, `string`> | Environment variables to set for this command |
| `params.sudo?` | `boolean` | If true, execute this command with root privileges. Defaults to false. |
| `params.detached?` | `boolean` | If true, the command will return without waiting for `exitCode` |
| `params.stdout?` | `Writable` | A `Writable` stream where `stdout` from the command will be piped |
| `params.stderr?` | `Writable` | A `Writable` stream where `stderr` from the command will be piped |
| `params.signal?` | `AbortSignal` | An AbortSignal to cancel the command execution |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-5)  Returns

`Promise`< [`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command) \| [`CommandFinished`](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) >A [Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command) or [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished), depending on `detached`.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#mkdir)  mkDir()

Copy

Ask AI

```
mkDir(path: string, opts?: {
  signal?: AbortSignal;
}): Promise<void>;
```

Create a directory in the filesystem of this sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-6)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `path` | `string` | Path of the directory to create |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-6)  Returns

`Promise`<`void`>

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#readfile)  readFile()

Copy

Ask AI

```
readFile(file: {
  path: string;
  cwd?: string;
}, opts?: {
  signal?: AbortSignal;
}): Promise<null | ReadableStream>;
```

Read a file from the filesystem of this sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-7)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `file` | { `path`: `string`; `cwd?`: `string`; } | File to read, with path and optional cwd |
| `file.path` | `string` | - |
| `file.cwd?` | `string` | - |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-7)  Returns

`Promise`<`null` \| `ReadableStream`>A promise that resolves to a ReadableStream containing the file contents

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#writefiles)  writeFiles()

Copy

Ask AI

```
writeFiles(files: {
  path: string;
  content: Buffer;
}[], opts?: {
  signal?: AbortSignal;
}): Promise<void>;
```

Write files to the filesystem of this sandbox.
Defaults to writing to /vercel/sandbox unless an absolute path is specified.
Writes files using the `vercel-sandbox` user.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-8)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `files` | { `path`: `string`; `content`: `Buffer`; }\[\] | Array of files with path and stream/buffer contents |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-8)  Returns

`Promise`<`void`>A promise that resolves when the files are written

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#domain)  domain()

Copy

Ask AI

```
domain(p: number): string;
```

Get the public domain of a port of this sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-9)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `p` | `number` | Port number to resolve |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-9)  Returns

`string`A full domain (e.g. `https://subdomain.vercel.run`)

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#throws)  Throws

If the port has no associated route

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#stop)  stop()

Copy

Ask AI

```
stop(opts?: {
  signal?: AbortSignal;
}): Promise<void>;
```

Stop the sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-10)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-10)  Returns

`Promise`<`void`>A promise that resolves when the sandbox is stopped

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#extendtimeout)  extendTimeout()

Copy

Ask AI

```
extendTimeout(duration: number, opts?: {
  signal?: AbortSignal;
}): Promise<void>;
```

Extend the timeout of the sandbox by the specified duration.This allows you to extend the lifetime of a sandbox up until the maximum
execution timeout for your plan.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#parameters-11)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `duration` | `number` | The duration in milliseconds to extend the timeout by |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel the operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox\#returns-11)  Returns

`Promise`<`void`>A promise that resolves when the timeout is extended

[Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel-sandbox)

Assistant

Responses are generated using AI and may contain mistakes.