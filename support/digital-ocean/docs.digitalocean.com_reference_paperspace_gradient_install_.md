---
url: "https://docs.digitalocean.com/reference/paperspace/gradient/install/"
title: "How to Install the Gradient CLI and SDK | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
      - [Install Gradient CLI & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/install/)
      - [Command Reference](https://docs.digitalocean.com/reference/paperspace/gradient/commands/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
- [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
- Install Gradient CLI & SDK

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Install the Gradient CLI and SDK

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Gradient API endpoints are deprecated and no longer available for Paperspace users.


You can launch Notebooks, Workflows, and Deployments programmatically with the SDK using Python.

Installing the Gradient Python CLI - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Installing the Gradient Python CLI](https://www.youtube.com/watch?v=t1-PqoeqFuo)

Hello Paperspace

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=t1-PqoeqFuo&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 1:36

•Live

•

The SDK is bundled with the Gradient CLI. The Gradient CLI is available on [PyPI](https://pypi.org/project/gradient/) and works on Windows, MacOS, and Linux.

The CLI requires **Python 3.4+** (or Python 2.7). Be sure to use a compatible version of **pip** (or **pip3**) depending on your Python version.

## Installation

Tip
We recommend installing and using the CLI within a Python virtual environment. This minimizes conflicts with existing libraries on your computer. We recommend **virtualenv**. [See below](https://docs.digitalocean.com/reference/paperspace/gradient/install/#using-a-virtual-environment) for more instructions.

### Pip install

```bash
pip install -U gradient
```

The `-U` option upgrades all specified packages to the newest available version.

You can verify that it is working by running

```bash
gradient version
```

which outputs a version like `v2.0.5`.

### Connect your account

You can either stash your API key on your computer or include your API key on each command. The latter can be useful if you are working on several teams at the same time, as each team has its own API key.

### Obtaining an API key

Sign in to your [Paperspace account](https://www.paperspace.com/account/login) to create a new API key. Once logged in, navigate to your Profile on the top right hand side of your screen and click `Team Settings`.

Under `Team Settings`, click the `API Keys` tab. Enter in a name for your API Key and click the `Add +` button. Make sure to copy your new API key after it is generated. You won’t be able to see it again after leaving the page.

The API keys you generated here are used to authenticate your requests.

### Set active API key

First, [obtain an API Key](https://docs.digitalocean.com/reference/paperspace/gradient/install/#obtaining-an-api-key), and then:

```bash
gradient apiKey XXXXXXXXXXXXXXXXXXX
```

Alternatively, you can set the environment variable `PAPERSPACE_API_KEY` temporarily to override your configured api key.

```bash
export PAPERSPACE_API_KEY=XXXX
gradient workflows run ...
```

Tip
You can reveal your current API key with `cat ~/.paperspace/config.json`

### Using a virtual environment

For Python 3.4+

First, install `virtualenv`:

```bash
pip install virtualenv
```

Create a new virtual environment:

```bash
python3 -m virtualenv <virtual_env_dir_path>
```

Activate the virtual environment:

```bash
source <virtual_env_dir_path>/bin/activate
```

Virtualenvs can also be run in other ways, for example, using `conda`.

### Enable autocomplete

Add the following to your `.bashrc` (or `.zshrc`) to enable autocomplete anytime you activate your shell. If Gradient was installed in a virtual environment, the following has to be added to the `activate` script:

`eval "$(_GRADIENT_COMPLETE=source gradient)"`

Alternatively, you can create an activation script by:

`(_GRADIENT_COMPLETE=source gradient) > ~/paperspace_complete.sh`

and then add `. ~/paperspace_complete.sh` to your `.bashrc`, `.zshrc` or `activate` script.

For more, see [https://click.palletsprojects.com/en/7.x/bashcomplete/](https://click.palletsprojects.com/en/7.x/bashcomplete/) .

### Install the latest pre-release version

If you need a pre-release version of the CLI use the following command to install it:

```bash
pip install -U --pre gradient
```

In this article...

- [Installation](https://docs.digitalocean.com/reference/paperspace/gradient/install/#installation)
  - [Pip install](https://docs.digitalocean.com/reference/paperspace/gradient/install/#pip-install)
  - [Connect your account](https://docs.digitalocean.com/reference/paperspace/gradient/install/#connect-your-account)
  - [Obtaining an API key](https://docs.digitalocean.com/reference/paperspace/gradient/install/#obtaining-an-api-key)
  - [Set active API key](https://docs.digitalocean.com/reference/paperspace/gradient/install/#set-active-api-key)
  - [Using a virtual environment](https://docs.digitalocean.com/reference/paperspace/gradient/install/#using-a-virtual-environment)
  - [Enable autocomplete](https://docs.digitalocean.com/reference/paperspace/gradient/install/#enable-autocomplete)
  - [Install the latest pre-release version](https://docs.digitalocean.com/reference/paperspace/gradient/install/#install-the-latest-pre-release-version)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices