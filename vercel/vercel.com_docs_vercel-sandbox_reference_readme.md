---
url: "https://vercel.com/docs/vercel-sandbox/reference/readme"
title: "Vercel Sandbox - Vercel Sandbox Docs"
---

[Skip to main content](https://vercel.com/docs/vercel-sandbox/reference/readme#content-area)

[Vercel Sandbox Docs home page![light logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-light.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=a71ecb01d35b35f715f573b63b08b5da)![dark logo](https://mintcdn.com/vercel-sandbox/mpakZrbIynxz_61k/logo/vercel-logotype-dark.svg?fit=max&auto=format&n=mpakZrbIynxz_61k&q=85&s=4f7bb64ff9bd0b78456f432edaf4a2d0)](https://vercel.com/)

Search...

Ctrl K

- [Docs](https://vercel.com/docs)
- [Help](https://vercel.com/help)

Search...

Navigation

Vercel Sandbox

- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox/reference/readme)

- [@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals)

- [Class - Command](https://vercel.com/docs/vercel-sandbox/reference/classes/command)

- [Class - CommandFinished](https://vercel.com/docs/vercel-sandbox/reference/classes/commandfinished)

- [Class - Sandbox](https://vercel.com/docs/vercel-sandbox/reference/classes/sandbox)

On this page

- [What is a sandbox?](https://vercel.com/docs/vercel-sandbox/reference/readme#what-is-a-sandbox)
- [Getting started](https://vercel.com/docs/vercel-sandbox/reference/readme#getting-started)
- [Authentication](https://vercel.com/docs/vercel-sandbox/reference/readme#authentication)
- [Vercel OIDC token](https://vercel.com/docs/vercel-sandbox/reference/readme#vercel-oidc-token)
- [Access token](https://vercel.com/docs/vercel-sandbox/reference/readme#access-token)
- [Limitations](https://vercel.com/docs/vercel-sandbox/reference/readme#limitations)
- [System](https://vercel.com/docs/vercel-sandbox/reference/readme#system)
- [Sudo access](https://vercel.com/docs/vercel-sandbox/reference/readme#sudo-access)

# Vercel Sandbox

Copy page

Copy page

Vercel Sandbox allows you to run arbitrary code in isolated, ephemeral Linux
VMs. This product is in [beta](https://vercel.com/docs/release-phases#beta).

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#what-is-a-sandbox)  What is a sandbox?

A sandbox is an isolated Linux system for your experimentation and use.
Internally, it is a Firecracker MicroVM that is powered by [the same\\
infrastructure](https://vercel.com/blog/a-deep-dive-into-hive-vercels-builds-infrastructure) that powers 1M+ builds a day at Vercel.

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#getting-started)  Getting started

Vercel Sandbox is in [beta](https://vercel.com/docs/release-phases#beta).To get started, create a new project:

Copy

Ask AI

```
mkdir sandbox-test
cd sandbox-test
pnpm init
pnpm add @vercel/sandbox ms
pnpm add -D @types/ms @types/node
```

Link it to Vercel:

Copy

Ask AI

```
vercel link
```

Pull its environment variables:

Copy

Ask AI

```
vercel env pull
```

Now create `next-dev.ts`:

Copy

Ask AI

```
import ms from "ms";
import { Sandbox } from "@vercel/sandbox";
import { setTimeout } from "timers/promises";
import { spawn } from "child_process";

async function main() {
  const sandbox = await Sandbox.create({
    source: {
      url: "https://github.com/vercel/sandbox-example-next.git",
      type: "git",
    },
    resources: { vcpus: 4 },
    timeout: ms("5m"),
    ports: [3000],
    runtime: "node22",
  });

  console.log(`Installing dependencies...`);
  const install = await sandbox.runCommand({
    cmd: "npm",
    args: ["install", "--loglevel", "info"],
    stderr: process.stderr,
    stdout: process.stdout,
  });

  if (install.exitCode != 0) {
    console.log("installing packages failed");
    process.exit(1);
  }

  console.log(`Starting the development server...`);
  await sandbox.runCommand({
    cmd: "npm",
    args: ["run", "dev"],
    stderr: process.stderr,
    stdout: process.stdout,
    detached: true,
  });

  await setTimeout(500);
  spawn("open", [sandbox.domain(3000)]);
}

main().catch(console.error);
```

Run it like this:

Copy

Ask AI

```
node --env-file .env.local --experimental-strip-types ./next-dev.ts
```

This will:

- Start a sandbox, seeding it with a git repository.
- Install dependencies.
- Run a `next dev` server
- Open it in your browser

All while streaming logs to your local terminal.

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#authentication)  Authentication

### [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#vercel-oidc-token)  Vercel OIDC token

The SDK uses Vercel OIDC tokens to authenticate whenever available. This is the
most straightforward and recommended way to authenticate.When developing locally, you can download a development token to `.env.local`
using `vercel env pull`. After 12 hours the development token expires, meaning
you will have to call `vercel env pull` again.In production, Vercel manages token expiration for you.

### [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#access-token)  Access token

If you want to use the SDK from an environment where `VERCEL_OIDC_TOKEN` is
unavailable, you can also authenticate using an access token:

- Go to your team settings, and copy the team ID.
- Go to a project’s settings, and copy the project ID.
- Go to your Vercel account settings and [create a token](https://vercel.com/account/settings/tokens). Make
sure it is scoped to the team ID from the previous step.

Set your team ID, project ID, and token to the environment variables
`VERCEL_TEAM_ID`, `VERCEL_PROJECT_ID`, and `VERCEL_TOKEN`. Then pass these to
the `create` method:

Copy

Ask AI

```
const sandbox = await Sandbox.create({
  teamId: process.env.VERCEL_TEAM_ID!,
  projectId: process.env.VERCEL_PROJECT_ID!,
  token: process.env.VERCEL_TOKEN!,
  source: {
    url: "https://github.com/vercel/sandbox-example-next.git",
    type: "git",
  },
  resources: { vcpus: 4 },
  // Defaults to 5 minutes. The maximum is 5 hours for Pro/Enterprise, and 45 minutes for Hobby.
  timeout: ms("5m"),
  ports: [3000],
  runtime: "node22",
});
```

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#limitations)  Limitations

- Max resources: 8 vCPUs. You will get 2048 MB of memory per vCPU.
- Sandboxes have a maximum runtime duration of 5 hours for Pro/Enterprise and 45 minutes for Hobby,
with a default of 5 minutes. This can be configured using the `timeout` option of `Sandbox.create()`.

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#system)  System

The base system is an Amazon Linux 2023 system with the following additional
packages installed.

Copy

Ask AI

```
bind-utils
bzip2
findutils
git
gzip
iputils
libicu
libjpeg
libpng
ncurses-libs
openssl
openssl-libs
procps
tar
unzip
which
whois
zstd
```

- The `node22` image ships a Node 22 runtime under `/vercel/runtimes/node22`.
- The `python3.13` image ships a Python 3.13 runtime under `/vercel/runtimes/python`.
- User code is executed as the `vercel-sandbox` user.
- `/vercel/sandbox` is writable.

## [​](https://vercel.com/docs/vercel-sandbox/reference/readme\#sudo-access)  Sudo access

The `node22` and `python3.13` images allow users to run commands as root. This
can be used to install packages and system tools:

Copy

Ask AI

```
import { Sandbox } from "@vercel/sandbox";

const sandbox = await Sandbox.create();
await sandbox.runCommand({
  cmd: "dnf",
  args: ["install", "-y", "golang"],
  sudo: true,
});
```

Sandbox runs sudo in the following configuration:

- `HOME` is set to `/root` – Executed commands will source root’s configuration
files (e.g. `.gitconfig`, `.bashrc`, etc).
- Environment variables are not reset before executing the command.
- `PATH` is left unchanged – sudo won’t change the value of PATH, so local or
project-specific binaries will still be found.

Both these images are based on Amazon Linux 2023. The full package list is
available [here](https://docs.aws.amazon.com/linux/al2023/release-notes/all-packages-AL2023.7.html).

[@vercel/sandbox](https://vercel.com/docs/vercel-sandbox/reference/globals)

Ctrl+I

[x](https://x.com/vercel) [github](https://github.com/vercel) [linkedin](https://linkedin.com/company/vercel)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=vercel-sandbox)

Assistant

Responses are generated using AI and may contain mistakes.