---
url: "https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/"
title: "private-network | DigitalOcean Documentation"
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
    - [Install Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/install/)
    - [Command Reference](https://docs.digitalocean.com/reference/paperspace/pspace/commands/)
      - [autoscaling-group](https://docs.digitalocean.com/reference/paperspace/pspace/commands/autoscaling-group/)
      - [completion](https://docs.digitalocean.com/reference/paperspace/pspace/commands/completion/)
      - [config](https://docs.digitalocean.com/reference/paperspace/pspace/commands/config/)
      - [console](https://docs.digitalocean.com/reference/paperspace/pspace/commands/console/)
      - [deployment](https://docs.digitalocean.com/reference/paperspace/pspace/commands/deployment/)
      - [docs](https://docs.digitalocean.com/reference/paperspace/pspace/commands/docs/)
      - [help](https://docs.digitalocean.com/reference/paperspace/pspace/commands/help/)
      - [init](https://docs.digitalocean.com/reference/paperspace/pspace/commands/init/)
      - [login](https://docs.digitalocean.com/reference/paperspace/pspace/commands/login/)
      - [logout](https://docs.digitalocean.com/reference/paperspace/pspace/commands/logout/)
      - [machine](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/)
      - [machine-event](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine-event/)
      - [private-network](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/)
      - [project](https://docs.digitalocean.com/reference/paperspace/pspace/commands/project/)
      - [public-ip](https://docs.digitalocean.com/reference/paperspace/pspace/commands/public-ip/)
      - [secret](https://docs.digitalocean.com/reference/paperspace/pspace/commands/secret/)
      - [shared-drive](https://docs.digitalocean.com/reference/paperspace/pspace/commands/shared-drive/)
      - [signup](https://docs.digitalocean.com/reference/paperspace/pspace/commands/signup/)
      - [snapshot](https://docs.digitalocean.com/reference/paperspace/pspace/commands/snapshot/)
      - [startup-script](https://docs.digitalocean.com/reference/paperspace/pspace/commands/startup-script/)
      - [template](https://docs.digitalocean.com/reference/paperspace/pspace/commands/template/)
      - [up](https://docs.digitalocean.com/reference/paperspace/pspace/commands/up/)
      - [upgrade](https://docs.digitalocean.com/reference/paperspace/pspace/commands/upgrade/)
      - [version](https://docs.digitalocean.com/reference/paperspace/pspace/commands/version/)
  - [Legacy Tools](https://docs.digitalocean.com/reference/paperspace/legacy/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/)
- [Command Reference](https://docs.digitalocean.com/reference/paperspace/pspace/commands/)
- private-network

[Give Feedback](https://ideas.digitalocean.com/documentation)

# private-networkprivate

Validated on 14 Dec 2023 • Last edited on 25 Oct 2024

[Manage your private networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/). Private networks are logically isolated networks for your machines and shared drives. They are used for site-to-site VPNs and direct connections to your on-premise network.

## Global Flags

These flags are available on all commands.

### –log-level, -l (string, optional)

Enable debug logging. One of `debug`, `info`, `warning`, `error`, or `critical`.

### –json, -j (boolean, optional)

Output JSON

### –api-key (string, optional)

A Paperspace public API Key used for authenticating requests

### –help, -h (boolean, optional)

Show help for a command

* * *

## pspace private-network create

Create a private network.

### Flags

#### –fields, -F (string, optional)

The fields to include in the response.

#### –name, -n (string, required)

The name of the private network

#### –region (string, required)

The region to create the private network in

### Global Flags

These flags are available on all commands.

#### –log-level, -l (string, optional)

Enable debug logging. One of `debug`, `info`, `warning`, `error`, or `critical`.

#### –json, -j (boolean, optional)

Output JSON

#### –api-key (string, optional)

A Paperspace public API Key used for authenticating requests

#### –help, -h (boolean, optional)

Show help for a command

* * *

## pspace private-network get

Get a private network from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the private network to get

### Flags

#### –fields, -F (string, optional)

The fields to include in the response.

### Global Flags

These flags are available on all commands.

#### –log-level, -l (string, optional)

Enable debug logging. One of `debug`, `info`, `warning`, `error`, or `critical`.

#### –json, -j (boolean, optional)

Output JSON

#### –api-key (string, optional)

A Paperspace public API Key used for authenticating requests

#### –help, -h (boolean, optional)

Show help for a command

* * *

## pspace private-network list

List private networks in your team.

Pick a subset of fields to display:

```
pspace private-network list -F name -F dtModified
```

### Flags

#### –limit (number, optional)

The number of items to return in the next page.

#### –after (string, optional)

The cursor to fetch the next results from.

#### –orderBy (string, optional)

The field to order items by. One of `dtCreated`.

#### –asc (boolean, optional)

Whether to order items ascending.

#### –desc (boolean, optional)

Whether to order items descending.

#### –fields, -F (string, optional)

The fields to include in the response.

#### –name, -n (string, optional)

Filter by name.

#### –region, -r (string, optional)

Filter by region.

### Global Flags

These flags are available on all commands.

#### –log-level, -l (string, optional)

Enable debug logging. One of `debug`, `info`, `warning`, `error`, or `critical`.

#### –json, -j (boolean, optional)

Output JSON

#### –api-key (string, optional)

A Paperspace public API Key used for authenticating requests

#### –help, -h (boolean, optional)

Show help for a command

* * *

## pspace private-network delete

Delete a private network from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the private network to get

### Flags

#### –fields, -F (string, optional)

The fields to include in the response.

### Global Flags

These flags are available on all commands.

#### –log-level, -l (string, optional)

Enable debug logging. One of `debug`, `info`, `warning`, `error`, or `critical`.

#### –json, -j (boolean, optional)

Output JSON

#### –api-key (string, optional)

A Paperspace public API Key used for authenticating requests

#### –help, -h (boolean, optional)

Show help for a command

In this article...

- [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#global-flags)
  - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#log-level--l-string-optional)
  - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#json--j-boolean-optional)
  - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#api-key-string-optional)
  - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#help--h-boolean-optional)
- [pspace private-network create](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#pspace-private-network-create)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#flags)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#fields--f-string-optional)
    - [–name, -n (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#name--n-string-required)
    - [–region (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#region-string-required)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#global-flags-1)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#log-level--l-string-optional-1)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#json--j-boolean-optional-1)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#api-key-string-optional-1)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#help--h-boolean-optional-1)
- [pspace private-network get](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#pspace-private-network-get)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#arguments)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#argument-string-required)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#flags-1)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#fields--f-string-optional-1)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#global-flags-2)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#log-level--l-string-optional-2)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#json--j-boolean-optional-2)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#api-key-string-optional-2)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#help--h-boolean-optional-2)
- [pspace private-network list](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#pspace-private-network-list)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#flags-2)
    - [–limit (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#limit-number-optional)
    - [–after (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#after-string-optional)
    - [–orderBy (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#orderby-string-optional)
    - [–asc (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#asc-boolean-optional)
    - [–desc (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#desc-boolean-optional)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#fields--f-string-optional-2)
    - [–name, -n (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#name--n-string-optional)
    - [–region, -r (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#region--r-string-optional)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#global-flags-3)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#log-level--l-string-optional-3)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#json--j-boolean-optional-3)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#api-key-string-optional-3)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#help--h-boolean-optional-3)
- [pspace private-network delete](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#pspace-private-network-delete)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#arguments-1)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#argument-string-required-1)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#flags-3)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#fields--f-string-optional-3)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#global-flags-4)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#log-level--l-string-optional-4)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#json--j-boolean-optional-4)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#api-key-string-optional-4)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/private-network/#help--h-boolean-optional-4)

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