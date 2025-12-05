---
url: "https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished"
title: "Class - CommandFinished - Vercel Sandbox Docs"
---

[Skip to main content](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#content-area)

[Vercel Sandbox Docs home page![light logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-light.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=a71ecb01d35b35f715f573b63b08b5da)![dark logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=4f7bb64ff9bd0b78456f432edaf4a2d0)](https://vercel.com/)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Class - CommandFinished

- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox/reference/readme)

- [@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals)

- [Class - Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command)

- [Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

- [Class - Sandbox](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox)

On this page

- [Extends](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#extends)
- [Properties](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#properties)
- [exitCode](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#exitcode)
- [Overrides](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#overrides)
- [Accessors](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#accessors)
- [cmdId](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#cmdid)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#get-signature)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from)
- [cwd](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#cwd)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#get-signature-2)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-2)
- [startedAt](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#startedat)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#get-signature-3)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-3)
- [Methods](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#methods)
- [logs()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#logs)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#parameters)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns)
- [See](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#see)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-4)
- [output()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#output)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#parameters-2)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns-2)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-5)
- [stdout()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#stdout)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#parameters-3)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns-3)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-6)
- [stderr()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#stderr)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#parameters-4)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns-4)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-7)
- [kill()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#kill)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#parameters-5)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns-5)
- [Inherited from](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#inherited-from-8)
- [wait()](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#wait)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#returns-6)
- [Deprecated](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#deprecated)
- [Overrides](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished#overrides-2)

# Class - CommandFinished

Copy page

Copy page

A command that has finished executing.The exit code is immediately available and populated upon creation.
Unlike [Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command), you don’t need to call wait() - the command
has already completed execution.

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#extends)  Extends

- [`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command)

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#properties)  Properties

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#exitcode)  exitCode

Copy

Ask AI

```
exitCode: number;
```

The exit code of the command. This is always populated for
CommandFinished instances.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#overrides)  Overrides

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`exitCode`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#exitcode)

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#accessors)  Accessors

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#cmdid)  cmdId

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#get-signature)  Get Signature

Copy

Ask AI

```
get cmdId(): string;
```

ID of the command execution.

##### Returns

`string`

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`cmdId`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#cmdid)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#cwd)  cwd

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#get-signature-2)  Get Signature

Copy

Ask AI

```
get cwd(): string;
```

##### Returns

`string`

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-2)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`cwd`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#cwd)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#startedat)  startedAt

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#get-signature-3)  Get Signature

Copy

Ask AI

```
get startedAt(): number;
```

##### Returns

`number`

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-3)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`startedAt`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#startedat)

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#methods)  Methods

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#logs)  logs()

Copy

Ask AI

```
logs(opts?: {
  signal?: AbortSignal;
}): AsyncGenerator<{
  stream: "stdout" | "stderr";
  data: string;
}, void, void> & Disposable & {
  close: void;
};
```

Iterate over the output of this command.

Copy

Ask AI

```
for await (const log of cmd.logs()) {
  if (log.stream === "stdout") {
    process.stdout.write(log.data);
  } else {
    process.stderr.write(log.data);
  }
}
```

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#parameters)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel log streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns)  Returns

`AsyncGenerator`<{
`stream`: `"stdout"` \| `"stderr"`;
`data`: `string`;
}, `void`, `void`\> & `Disposable` & {
`close`: `void`;
}An async iterable of log entries from the command output.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#see)  See

[Command.stdout](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stdout), [Command.stderr](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stderr), and [Command.output](https://vercel.com/docs/vercel-sandbox/reference/classes/command#output)
to access output as a string.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-4)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`logs`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#logs)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#output)  output()

Copy

Ask AI

```
output(stream: "stdout" | "stderr" | "both", opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stdout`, `stderr`, or both as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#parameters-2)  Parameters

| Parameter | Type | Default value | Description |
| --- | --- | --- | --- |
| `stream` | `"stdout"` \| `"stderr"` \| `"both"` | `"both"` | The output stream to read: “stdout”, “stderr”, or “both”. |
| `opts?` | { `signal?`: `AbortSignal`; } | `undefined` | Optional parameters. |
| `opts.signal?` | `AbortSignal` | `undefined` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns-2)  Returns

`Promise`<`string`>The output of the specified stream(s) as a string.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-5)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`output`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#output)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#stdout)  stdout()

Copy

Ask AI

```
stdout(opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stdout` as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#parameters-3)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns-3)  Returns

`Promise`<`string`>The standard output of the command.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-6)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`stdout`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stdout)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#stderr)  stderr()

Copy

Ask AI

```
stderr(opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stderr` as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#parameters-4)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns-4)  Returns

`Promise`<`string`>The standard error output of the command.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-7)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`stderr`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stderr)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#kill)  kill()

Copy

Ask AI

```
kill(signal?: Signal, opts?: {
  abortSignal?: AbortSignal;
}): Promise<void>;
```

Kill a running command in a sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#parameters-5)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `signal?` | `Signal` | The signal to send the running process. Defaults to SIGTERM. |
| `opts?` | { `abortSignal?`: `AbortSignal`; } | Optional parameters. |
| `opts.abortSignal?` | `AbortSignal` | An AbortSignal to cancel the kill operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns-5)  Returns

`Promise`<`void`>`Promise<void>`.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#inherited-from-8)  Inherited from

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`kill`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#kill)

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#wait)  ~~wait()~~

Copy

Ask AI

```
wait(): Promise<CommandFinished>;
```

The wait method is not needed for CommandFinished instances since
the command has already completed and exitCode is populated.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#returns-6)  Returns

`Promise`<`CommandFinished`>This CommandFinished instance.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#deprecated)  Deprecated

This method is redundant for CommandFinished instances.
The exitCode is already available.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished\#overrides-2)  Overrides

[`Command`](https://vercel.com/docs/vercel-sandbox/reference/classes/command). [`wait`](https://vercel.com/docs/vercel-sandbox/reference/classes/command#wait)

[Class - Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command) [Class - Sandbox](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel-sandbox)

Assistant

Responses are generated using AI and may contain mistakes.