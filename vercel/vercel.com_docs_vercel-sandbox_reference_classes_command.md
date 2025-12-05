---
url: "https://vercel.com/docs/vercel-sandbox/reference/classes/command"
title: "Class - Command - Vercel Sandbox Docs"
---

[Skip to main content](https://vercel.com/docs/vercel-sandbox/reference/classes/command#content-area)

[Vercel Sandbox Docs home page![light logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-light.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=a71ecb01d35b35f715f573b63b08b5da)![dark logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=4f7bb64ff9bd0b78456f432edaf4a2d0)](https://vercel.com/)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Class - Command

- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox/reference/readme)

- [@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals)

- [Class - Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command)

- [Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

- [Class - Sandbox](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox)

On this page

- [See](https://vercel.com/docs/vercel-sandbox/reference/classes/command#see)
- [Extended by](https://vercel.com/docs/vercel-sandbox/reference/classes/command#extended-by)
- [Properties](https://vercel.com/docs/vercel-sandbox/reference/classes/command#properties)
- [exitCode](https://vercel.com/docs/vercel-sandbox/reference/classes/command#exitcode)
- [Accessors](https://vercel.com/docs/vercel-sandbox/reference/classes/command#accessors)
- [cmdId](https://vercel.com/docs/vercel-sandbox/reference/classes/command#cmdid)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/command#get-signature)
- [cwd](https://vercel.com/docs/vercel-sandbox/reference/classes/command#cwd)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/command#get-signature-2)
- [startedAt](https://vercel.com/docs/vercel-sandbox/reference/classes/command#startedat)
- [Get Signature](https://vercel.com/docs/vercel-sandbox/reference/classes/command#get-signature-3)
- [Methods](https://vercel.com/docs/vercel-sandbox/reference/classes/command#methods)
- [logs()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#logs)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns)
- [See](https://vercel.com/docs/vercel-sandbox/reference/classes/command#see-2)
- [wait()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#wait)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters-2)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns-2)
- [output()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#output)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters-3)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns-3)
- [stdout()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stdout)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters-4)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns-4)
- [stderr()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stderr)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters-5)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns-5)
- [kill()](https://vercel.com/docs/vercel-sandbox/reference/classes/command#kill)
- [Parameters](https://vercel.com/docs/vercel-sandbox/reference/classes/command#parameters-6)
- [Returns](https://vercel.com/docs/vercel-sandbox/reference/classes/command#returns-6)

# Class - Command

Copy page

Copy page

A command executed in a Sandbox.For detached commands, you can [wait](https://vercel.com/docs/vercel-sandbox/reference/classes/command#wait) to get a [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) instance
with the populated exit code. For non-detached commands, [Sandbox.runCommand](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#runcommand)
automatically waits and returns a [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) instance.You can iterate over command output with [logs](https://vercel.com/docs/vercel-sandbox/reference/classes/command#logs).

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#see)  See

[Sandbox.runCommand](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#runcommand) to start a command.

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#extended-by)  Extended by

- [`CommandFinished`](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#properties)  Properties

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#exitcode)  exitCode

Copy

Ask AI

```
exitCode: null | number;
```

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#accessors)  Accessors

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#cmdid)  cmdId

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#get-signature)  Get Signature

Copy

Ask AI

```
get cmdId(): string;
```

ID of the command execution.

##### Returns

`string`

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#cwd)  cwd

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#get-signature-2)  Get Signature

Copy

Ask AI

```
get cwd(): string;
```

##### Returns

`string`

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#startedat)  startedAt

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#get-signature-3)  Get Signature

Copy

Ask AI

```
get startedAt(): number;
```

##### Returns

`number`

## [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#methods)  Methods

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#logs)  logs()

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

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel log streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns)  Returns

`AsyncGenerator`<{
`stream`: `"stdout"` \| `"stderr"`;
`data`: `string`;
}, `void`, `void`\> & `Disposable` & {
`close`: `void`;
}An async iterable of log entries from the command output.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#see-2)  See

[Command.stdout](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stdout), [Command.stderr](https://vercel.com/docs/vercel-sandbox/reference/classes/command#stderr), and [Command.output](https://vercel.com/docs/vercel-sandbox/reference/classes/command#output)
to access output as a string.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#wait)  wait()

Copy

Ask AI

```
wait(params?: {
  signal?: AbortSignal;
}): Promise<CommandFinished>;
```

Wait for a command to exit and populate its exit code.This method is useful for detached commands where you need to wait
for completion. For non-detached commands, [Sandbox.runCommand](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox#runcommand)
automatically waits and returns a [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) instance.

Copy

Ask AI

```
const detachedCmd = await sandbox.runCommand({
  cmd: "sleep",
  args: ["5"],
  detached: true,
});
const result = await detachedCmd.wait();
if (result.exitCode !== 0) {
  console.error("Something went wrong...");
}
```

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters-2)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `params?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `params.signal?` | `AbortSignal` | An AbortSignal to cancel waiting. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns-2)  Returns

`Promise`< [`CommandFinished`](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) >A [CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished) instance with populated exit code.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#output)  output()

Copy

Ask AI

```
output(stream: "stdout" | "stderr" | "both", opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stdout`, `stderr`, or both as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters-3)  Parameters

| Parameter | Type | Default value | Description |
| --- | --- | --- | --- |
| `stream` | `"stdout"` \| `"stderr"` \| `"both"` | `"both"` | The output stream to read: “stdout”, “stderr”, or “both”. |
| `opts?` | { `signal?`: `AbortSignal`; } | `undefined` | Optional parameters. |
| `opts.signal?` | `AbortSignal` | `undefined` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns-3)  Returns

`Promise`<`string`>The output of the specified stream(s) as a string.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#stdout)  stdout()

Copy

Ask AI

```
stdout(opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stdout` as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters-4)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns-4)  Returns

`Promise`<`string`>The standard output of the command.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#stderr)  stderr()

Copy

Ask AI

```
stderr(opts?: {
  signal?: AbortSignal;
}): Promise<string>;
```

Get the output of `stderr` as a string.NOTE: This may throw string conversion errors if the command does
not output valid Unicode.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters-5)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `opts?` | { `signal?`: `AbortSignal`; } | Optional parameters. |
| `opts.signal?` | `AbortSignal` | An AbortSignal to cancel output streaming. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns-5)  Returns

`Promise`<`string`>The standard error output of the command.

* * *

### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#kill)  kill()

Copy

Ask AI

```
kill(signal?: Signal, opts?: {
  abortSignal?: AbortSignal;
}): Promise<void>;
```

Kill a running command in a sandbox.

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#parameters-6)  Parameters

| Parameter | Type | Description |
| --- | --- | --- |
| `signal?` | `Signal` | The signal to send the running process. Defaults to SIGTERM. |
| `opts?` | { `abortSignal?`: `AbortSignal`; } | Optional parameters. |
| `opts.abortSignal?` | `AbortSignal` | An AbortSignal to cancel the kill operation. |

#### [​](https://vercel.com/docs/vercel-sandbox/reference/classes/command\#returns-6)  Returns

`Promise`<`void`>`Promise<void>`.

[@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals) [Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel-sandbox)

Assistant

Responses are generated using AI and may contain mistakes.