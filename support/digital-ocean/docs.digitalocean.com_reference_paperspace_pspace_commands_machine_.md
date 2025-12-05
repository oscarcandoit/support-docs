---
url: "https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/"
title: "machine | DigitalOcean Documentation"
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
- machine

[Give Feedback](https://ideas.digitalocean.com/documentation)

# machineprivate

Validated on 14 Dec 2023 • Last edited on 13 Feb 2024

Manage your Paperspace machines.

For more information, see the [Machines documentation](https://docs.digitalocean.com/products/paperspace/machines/).

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

## pspace machine create

Create a machine.

### Flags

#### –fields, -F (string, optional)

The fields to include in the response.

#### –name, -n (string, required)

The name of the machine

#### –machine-type (string, required)

The machine type to create

#### –template-id (string, required)

The ID of the template to create the machine from

#### –network-id (string, optional)

The ID of the network to create the machine in

#### –region (string, required)

The region to create the machine in

#### –disk-size (number, required)

The size of the machine’s disk

#### –public-ip-type (string, optional)

The public IP type.

#### –auto-snapshot-enabled (boolean, optional)

Whether to enable auto snapshots.

#### –auto-snapshot-frequency (string, optional)

The auto snapshot frequency.

#### –auto-snapshot-save-count (number, optional)

The number of auto snapshots to save.

#### –auto-shutdown-enabled (boolean, optional)

Whether to enable auto shutdown.

#### –auto-shutdown-timeout (number, optional)

The auto shutdown timeout in hours.

#### –auto-shutdown-force (boolean, optional)

Whether to force shutdown the machine.

#### –take-initial-snapshot (boolean, optional)

Whether to take an initial snapshot.

#### –restore-point-enabled (boolean, optional)

Whether to use initial snapshot as a restore point.

#### –restore-point-frequency (string, optional)

The restore point frequency.

#### –startup-script-id (string, optional)

The startup script ID.

#### –email-password (boolean, optional)

Whether to email the password.

#### –start-on-create (boolean, optional)

Whether to start the machine on creation.

#### –enable-nvlink (boolean, optional)

Whether to enable NVLink.

#### –accessor-ids (string, optional)

The accessors of the machine.

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

## pspace machine get

Get a machine from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to get

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

## pspace machine list

List machines in your team.

Pick a subset of fields to display:

```
pspace machine list -F name -F dtModified
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

#### –agent-type, -a (string, optional)

Filter by agent type.

#### –machine-type, -m (string, optional)

Filter by machine type.

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

## pspace machine update

Update a machine’s settings.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to update

### Flags

#### –fields, -F (string, optional)

The fields to include in the response.

#### –name, -n (string, required)

The name of the machine

#### –machine-type (string, required)

The machine type to update to

#### –network-id (string, optional)

The ID of the network to create the machine in

#### –disk-size (number, required)

The size of the machine’s disk

#### –public-ip-type (string, optional)

The public IP type.

#### –auto-snapshot-enabled (boolean, optional)

Whether to enable auto snapshots.

#### –auto-snapshot-frequency (string, optional)

The auto snapshot frequency.

#### –auto-snapshot-save-count (number, optional)

The number of auto snapshots to save.

#### –auto-shutdown-enabled (boolean, optional)

Whether to enable auto shutdown.

#### –auto-shutdown-timeout (number, optional)

The auto shutdown timeout in hours.

#### –auto-shutdown-force (boolean, optional)

Whether to force shutdown the machine.

#### –restore-point-enabled (boolean, optional)

Whether to enable a restore point.

#### –restore-point-frequency (string, optional)

The restore point frequency.

#### –restore-point-snapshot-id (string, optional)

The ID of the snapshot to use as a restore point.

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

## pspace machine restart

Restart a machine from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to restart

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

## pspace machine start

Start a machine from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to start

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

## pspace machine stop

Stop a machine from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to stop

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

## pspace machine delete

Delete a machine from a team.

### Arguments

#### \[argument\] (string, required)

The ID of the machine to delete

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

- [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags)
  - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional)
  - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional)
  - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional)
  - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional)
- [pspace machine create](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-create)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional)
    - [–name, -n (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#name--n-string-required)
    - [–machine-type (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#machine-type-string-required)
    - [–template-id (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#template-id-string-required)
    - [–network-id (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#network-id-string-optional)
    - [–region (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#region-string-required)
    - [–disk-size (number, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#disk-size-number-required)
    - [–public-ip-type (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#public-ip-type-string-optional)
    - [–auto-snapshot-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-enabled-boolean-optional)
    - [–auto-snapshot-frequency (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-frequency-string-optional)
    - [–auto-snapshot-save-count (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-save-count-number-optional)
    - [–auto-shutdown-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-enabled-boolean-optional)
    - [–auto-shutdown-timeout (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-timeout-number-optional)
    - [–auto-shutdown-force (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-force-boolean-optional)
    - [–take-initial-snapshot (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#take-initial-snapshot-boolean-optional)
    - [–restore-point-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#restore-point-enabled-boolean-optional)
    - [–restore-point-frequency (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#restore-point-frequency-string-optional)
    - [–startup-script-id (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#startup-script-id-string-optional)
    - [–email-password (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#email-password-boolean-optional)
    - [–start-on-create (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#start-on-create-boolean-optional)
    - [–enable-nvlink (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#enable-nvlink-boolean-optional)
    - [–accessor-ids (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#accessor-ids-string-optional)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-1)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-1)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-1)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-1)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-1)
- [pspace machine get](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-get)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-1)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-1)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-2)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-2)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-2)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-2)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-2)
- [pspace machine list](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-list)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-2)
    - [–limit (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#limit-number-optional)
    - [–after (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#after-string-optional)
    - [–orderBy (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#orderby-string-optional)
    - [–asc (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#asc-boolean-optional)
    - [–desc (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#desc-boolean-optional)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-2)
    - [–agent-type, -a (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#agent-type--a-string-optional)
    - [–machine-type, -m (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#machine-type--m-string-optional)
    - [–name, -n (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#name--n-string-optional)
    - [–region, -r (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#region--r-string-optional)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-3)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-3)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-3)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-3)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-3)
- [pspace machine update](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-update)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments-1)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required-1)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-3)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-3)
    - [–name, -n (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#name--n-string-required-1)
    - [–machine-type (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#machine-type-string-required-1)
    - [–network-id (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#network-id-string-optional-1)
    - [–disk-size (number, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#disk-size-number-required-1)
    - [–public-ip-type (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#public-ip-type-string-optional-1)
    - [–auto-snapshot-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-enabled-boolean-optional-1)
    - [–auto-snapshot-frequency (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-frequency-string-optional-1)
    - [–auto-snapshot-save-count (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-snapshot-save-count-number-optional-1)
    - [–auto-shutdown-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-enabled-boolean-optional-1)
    - [–auto-shutdown-timeout (number, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-timeout-number-optional-1)
    - [–auto-shutdown-force (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#auto-shutdown-force-boolean-optional-1)
    - [–restore-point-enabled (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#restore-point-enabled-boolean-optional-1)
    - [–restore-point-frequency (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#restore-point-frequency-string-optional-1)
    - [–restore-point-snapshot-id (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#restore-point-snapshot-id-string-optional)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-4)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-4)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-4)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-4)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-4)
- [pspace machine restart](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-restart)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments-2)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required-2)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-4)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-4)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-5)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-5)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-5)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-5)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-5)
- [pspace machine start](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-start)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments-3)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required-3)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-5)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-5)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-6)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-6)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-6)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-6)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-6)
- [pspace machine stop](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-stop)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments-4)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required-4)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-6)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-6)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-7)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-7)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-7)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-7)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-7)
- [pspace machine delete](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#pspace-machine-delete)
  - [Arguments](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#arguments-5)
    - [\[argument\] (string, required)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#argument-string-required-5)
  - [Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#flags-7)
    - [–fields, -F (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#fields--f-string-optional-7)
  - [Global Flags](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#global-flags-8)
    - [–log-level, -l (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#log-level--l-string-optional-8)
    - [–json, -j (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#json--j-boolean-optional-8)
    - [–api-key (string, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#api-key-string-optional-8)
    - [–help, -h (boolean, optional)](https://docs.digitalocean.com/reference/paperspace/pspace/commands/machine/#help--h-boolean-optional-8)

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