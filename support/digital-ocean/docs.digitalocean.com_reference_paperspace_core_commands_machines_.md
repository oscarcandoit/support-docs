---
url: "https://docs.digitalocean.com/reference/paperspace/core/commands/machines/"
title: "machines | DigitalOcean Documentation"
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
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
      - [Install Core CLI & SDK](https://docs.digitalocean.com/reference/paperspace/core/install/)
      - [Command Reference](https://docs.digitalocean.com/reference/paperspace/core/commands/)
        - [machines](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/)
        - [networks](https://docs.digitalocean.com/reference/paperspace/core/commands/networks/)
        - [resourceDelegations](https://docs.digitalocean.com/reference/paperspace/core/commands/resource-delegations/)
        - [shared drives](https://docs.digitalocean.com/reference/paperspace/core/commands/shared-drives/)
        - [templates](https://docs.digitalocean.com/reference/paperspace/core/commands/templates/)
        - [users](https://docs.digitalocean.com/reference/paperspace/core/commands/users/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
- [Command Reference](https://docs.digitalocean.com/reference/paperspace/core/commands/)
- machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# machines

Validated on 14 Dec 2023 • Last edited on 17 Jun 2025

Warning: Deprecated
As of 15 July 2024, Core API endpoints are deprecated and no longer available for Paperspace users.


Core machines are Linux and Windows-based virtual machines (VMs) that run on top of virtualized hardware. Each machine you create is a new server or desktop instance you can use, either standalone or as part of a larger, cloud-based infrastructure.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

## create

This command creates a new Paperspace virtual machine.

If you are using an individual account, you are assigned as the owner of the machine.

If you are a team administrator, you must specify the user that should be assigned to the machine, either by specifying a user id, or by providing an email address, password, first name and last name for the creation of a new user on the team.

Only account administrators may create machines. Team members cannot create machines themselves.

### Examples

CLI

```bash
paperspace machines create \
  --apiKey "edc20a51d9b2145..." \
  --region "East Coast (NY2)" \
  --machineType "P4000" \
  --size 50 \
  --billingType "hourly" \
  --machineName "My Machine 1" \
  --templateId "tbu200wi" \
  --teamId "tewr3st2z"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/createSingleMachinePublic' \
-H 'X-Api-Key: edc20a51d9b2145...' \
-H 'Content-Type: application/json' \
--data-raw '{
  "region": "East Coast (NY2)",
  "machineType": "P4000",
  "size": 50,
  "billingType": "hourly",
  "machineName": "My Machine 1",
  "templateId": "tbu200wi",
  "teamId": "tewr3st2z"
}'
```

Node

```js
paperspace.machines.create(
  {
    region: "East Coast (NY2)",
    machineType: "P4000",
    size: 50,
    billingType: "hourly",
    machineName: "My Machine 1",
    templateId: "tbu200wi",
    teamId: "tewr3st2z",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `region` | string |  | Name of the region. Valid entries: `West Coast (CA1)`, `East Coast (NY2)`, or `Europe (AMS1)`. |
| `machineType` | string |  | Machine type. Value entries are `Air`, `Standard`, `Pro`, `Advanced`, `GPU+`, `P4000`, `P5000`, `P6000`, `V100`, `C1`, `C2`, `C3`, `C4`, `C5`, `C6`, `C7`, `C8`, `C9`, or `C10`. You cannot use Windows templates to create CPU-only machine types ‘C1’ - ‘C10’. |
| `size` | number |  | Storage size for the machine in GB. |
| `billingType` | string |  | `hourly` billing. |
| `machineName` | string |  | A memorable name for this machine. |
| `templateId` | string |  | Template ID of the template to use for creating this machine. |
| `teamId` | string | optional | Required if creating this machine for a team |
| `assignPublicIp` | boolean | optional | Assign a new public ip address on machine creation. Cannot be used with `dynamicPublicIp`. |
| `dynamicPublicIp` | boolean | optional | Assigns a new public IP address on machine start and releases it from the account on machine stop. Cannot be used with `assignPublicIp`. |
| `startOnCreate` | boolean | optional | Start the VM immediately after creation. Defaults to `true`. |
| `networkId` | string | optional | If creating on a specific network specify its ID |
| `scriptId` | string | optional | The script ID of a script to be run on startup. See the [Script Guide](https://paperspace.github.io/paperspace-node/scripts.md) for more info on using scripts. |
| `userId` | string | optional | If assigning to an existing user other than yourself specify the user ID (mutually exclusive with `email` , `password`, `firstName`,`lastName`). |
| `email` | string | optional | If creating a new user for this machine specify their email address (mutually exclusive with `userId`). |
| `password` | string | optional | If creating a new user specify their password (mutually exclusive with `userId`). |
| `firstName` | string | optional | If creating a new user specify their first name (mutually exclusive with `userId`). |
| `lastName` | string | optional | If creating a new user specify their last name (mutually exclusive with `userId`). |
| `notificationEmail` | string | optional | Send a notification to this email address when complete. |
| `takeInitialSnapshot` | boolean | optional | Take a snapshot of the VM at first boot. |
| `markSnapshotAsRestorePoint` | boolean | optional | Use initial snapshot as a restore point for the VM. If this is true `takeInitialSnapshot` must be true and `restorePointFrequency` must be specified. |
| `restorePointFrequency` | string | optional | How often the VM’s restore point should be used. Valid options: `shutdown`. |
| `enableNvlink` | boolean | optional | Enable NVLink on compatible machine types. |

### Response

The created machine JSON object

```json
{
  "id": "psazmnxdy",
  "name": "My Machine 1",
  "os": null,
  "ram": null,
  "cpus": 1,
  "gpu": null,
  "storageTotal": null,
  "storageUsed": null,
  "machineType": "P4000",
  "usageRate": "P4000 hourly",
  "shutdownTimeoutInHours": 168,
  "shutdownTimeoutForces": false,
  "performAutoSnapshot": false,
  "autoSnapshotFrequency": null,
  "autoSnapshotSaveCount": null,
  "dynamicPublicIp": false,
  "agentType": "LinuxHeadless",
  "dtCreated": "2022-03-14T15:09:51.974Z",
  "state": "provisioning",
  "updatesPending": false,
  "networkId": null,
  "privateIpAddress": null,
  "publicIpAddress": null,
  "region": null,
  "scriptId": null,
  "dtLastRun": null,
  "restorePointSnapshotId": null,
  "restorePointFrequency": null
}
```

## start

Start an individual machine. If the machine is already started, this action is a no-op. If the machine is off, it is booted up. This action can only be performed by the user who owns the machine.

### Examples

CLI

```bash
paperspace machines start \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psfj3c701"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psfj3c701/start' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.start(
  {
    machineId: "psfj3c701",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `machineId` | string | Id of the machine to start |

## stop

Stop an individual machine. If the machine is already stopped or has been shut down, this action is a no-op. If the machine is running, it is stopped and any users logged in are immediately kicked out. This action can only be performed by the user who owns the machine.

### Examples

CLI

```bash
paperspace machines stop \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psfj3c701"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psfj3c701/stop' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.stop(
  {
    machineId: "psfj3c701",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `machineId` | string | Id of the machine to shut down |

## restart

Restart an individual machine. If the machine is already restarting, this action requests the machine be restarted again. This action can only be performed by the user who owns the machine.

### Examples

CLI

```bash
paperspace machines restart \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psfj3c701"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psfj3c701/restart' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.stop(
  {
    machineId: "psfj3c701",
  },
  function (err, res) {
    // handle error or result
  }
);
```

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| `machineId` | string | Id of the machine to restart |

## destroy

Destroy the machine with the given id. When this action is performed, the machine is immediately shut down and marked for deletion from the datacenter. Any snapshots that were derived from the machine are also deleted. Access to the machine is terminated immediately and billing for the machine is prorated to the hour. This action can only be performed by the user who owns the machine, or in the case of a team, the team administrator.

### Examples

CLI

```bash
paperspace machines destroy \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psfj3c701"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psfj3c701/destroyMachine' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.destroy(
  {
    machineId: "psfj3c701",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `machineId` | string |  | The id of the machine to destroy |
| `releasePublicIp` | boolean | optional | releases any assigned public ip address for the machine; defaults to false |

## update

Update attributes of a machine.

### Examples

CLI

```bash
paperspace machines update \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psec02yp2" \
  --machineName "New Machine Name"
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psec02yp2/updateMachinePublic' \
-H 'X-Api-Key: edc20a51d9b2145...' \
-H 'Content-Type: application/json' \
--data-raw '{"machineName": "New Machine Name"}'
```

Node

```js
paperspace.machines.update(
  {
    machineId: "psec02yp2",
    machineName: "New Machine Name",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `machineId` | string |  | Id of the machine to update |
| `machineName` | string | optional | New name for the machine |
| `shutdownTimeoutInHours` | number | optional | Number of hours before machine is shutdown if no one is logged in via the Paperspace client |
| `shutdownTimeoutForces` | boolean | optional | Force shutdown at shutdown timeout, even if there is a Paperspace client connection |
| `autoSnapshotFrequency` | number | optional | One of ‘hour’, ‘day’, ‘week’, or null |
| `autoSnapshotSaveCount` | number | optional | Number of snapshots to save |
| `performAutoSnapshot` | boolean | optional | Perform auto snapshots |
| `dynamicPublicIp` | boolean | optional | If true, assigns a new public ip address on machine start and releases it from the account on machine stop |
| `assignPublicIp` | boolean | optional | If true, assigns a new static public ip address for the machine |

## list

List information about all machines available to either the current authenticated user or the team, if the user belongs to a team. The list method takes an optional first argument to limit the returned machine objects.

This API supports pagination using `limit` and `skip`. The default limit is 1000 items. To retrieve more than 1000 items, set your `skip` parameter to a multiple of 1000. For example, to retrieve the 3rd page of 1000 items, you would pass `{ limit: 1000, skip: 2000 }`.

### Examples

CLI

```bash
paperspace machines list \
  --apiKey "edc20a51d9b2145..."
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/machines/getMachines' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.list(function (err, res) {
  // handle error or result
});
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `limit` | number | optional | Number of items to return. Defaults to 1000. |
| `skip` | number | optional | Number of items in the list to skip. |
| `machineId` | string | optional | Machine id to match on. Note: must be specified as `machineId`, not `id`. |
| `name` | string | optional | Name to match on |
| `os` | string | optional | OS to match on |
| `ram` | string | optional | RAM value to match on |
| `cpus` | number | optional | CPU count to match on |
| `gpu` | string | optional | GPU to match on |
| `storageTotal` | string | optional | `storageTotal` value to match on |
| `storageUsed` | string | optional | `storageUsed` value to match on |
| `usageRate` | string | optional | `usageRate` value to match on |
| `shutdownTimeoutInHours` | number | optional | `shutdownTimeoutInHours` value to match on |
| `performAutoSnapshot` | boolean | optional | `performAutoSnapshot` value to match on, either true or false |
| `autoSnapshotFrequency` | string | optional | `autoSnapshotFrequency` value to match on |
| `autoSnapshotSaveCount` | number | optional | `autoSnapshotSaveCount` value to match on |
| `agentType` | string | optional | `agentType` value to match on |
| `dtCreated` | string | optional | `datetime` created value to match on |
| `state` | string | optional | `state` value to match on |
| `updatesPending` | boolean | optional | `updatesPending` value to match on |
| `networkId` | string | optional | `networkId` to match on |
| `privateIpAddress` | string | optional | `privateIpAddress` to match on |
| `publicIpAddress` | string | optional | `publicIpAddress` to match on |
| `region` | string | optional | `region` to match on |
| `userId` | string | optional | `userId` to match on |
| `teamId` | string | optional | `teamId` to match on |
| `scriptId` | string | optional | `scriptId` to match on |
| `dtLastRun` | string | optional | `script` date/time last run value to match on |

### Response

```json
[\
  {\
    "id": "psec02yp2",\
    "name": "New Machine Name1",\
    "os": "",\
    "ram": "32212254720",\
    "cpus": 8,\
    "gpu": "Quadro P4000",\
    "storageTotal": "53687091200",\
    "storageUsed": "110080",\
    "machineType": "P4000",\
    "usageRate": "P4000 hourly",\
    "shutdownTimeoutInHours": 24,\
    "shutdownTimeoutForces": false,\
    "performAutoSnapshot": false,\
    "autoSnapshotFrequency": "day",\
    "autoSnapshotSaveCount": 1,\
    "dynamicPublicIp": false,\
    "agentType": "LinuxDesktop",\
    "dtCreated": "2022-03-14T15:47:53.852Z",\
    "state": "ready",\
    "updatesPending": false,\
    "networkId": "nng82wb",\
    "privateIpAddress": "10.64.1.99",\
    "publicIpAddress": "172.83.15.54",\
    "region": "East Coast (NY2)",\
    "scriptId": null,\
    "dtLastRun": null,\
    "restorePointSnapshotId": null,\
    "restorePointFrequency": null,\
    "internalId": 1713423\
  }\
]
```

## show

Show machine information for the machine with the given id.

The state property can take on the follow values:

- `off`
- `starting` \- machine is in the process of changing to the ready or `serviceready` state
- `stopping` \- machine is in the process of changing to the off state
- `restarting` \- combines stopping follow immediately by starting
- `serviceready` \- services are running on the machine but the Paperspace agent is not yet available
- `ready` \- services are running on machine and the Paperspace agent is ready to stream or accept logins
- `upgrading` \- the machine specification are being upgraded, which involves a shutdown and startup sequence
- `provisioning` \- the machine is in the process of being created for the first time

The `updatesPending` property is either true or false and reflects whether the operating system has scheduled updates for the next machine state transition, e.g, stopping, starting, restarting, or upgrading.

Note: in some cases\*\*,\*\* the operating system can force installation of critical updates immediately upon a state transition, or automatically restart a machine to install updates. In such cases, the `updatesPending` property may not always be set accurately by the underlying OS.

### Examples

CLI

```bash
paperspace machines show \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psec02yp2"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/machines/getMachinePublic?machineId=psec02yp2' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.show(
  {
    machineId: "psec02yp2",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `machineId` | string |  | ID of the machine to show |

### Response

machine - The machine JSON object

Type `object`

```json
{
  "id": "psec02yp2",
  "name": "New Machine Name1",
  "os": "",
  "ram": "32212254720",
  "cpus": 8,
  "gpu": "Quadro P4000",
  "storageTotal": "53687091200",
  "storageUsed": "110080",
  "machineType": "P4000",
  "usageRate": "P4000 hourly",
  "shutdownTimeoutInHours": 24,
  "shutdownTimeoutForces": false,
  "performAutoSnapshot": false,
  "autoSnapshotFrequency": "day",
  "autoSnapshotSaveCount": 1,
  "dynamicPublicIp": false,
  "agentType": "LinuxDesktop",
  "dtCreated": "2022-03-14T15:47:53.852Z",
  "state": "ready",
  "updatesPending": false,
  "networkId": "nng82wb",
  "privateIpAddress": "10.64.1.99",
  "publicIpAddress": "172.83.15.54",
  "region": "East Coast (NY2)",
  "scriptId": null,
  "dtLastRun": null,
  "restorePointSnapshotId": null,
  "restorePointFrequency": null,
  "events": [\
    {\
      "name": "start",\
      "state": "done",\
      "errorMsg": "",\
      "handle": "fabd398a-9c8e-4565-95fa-5f07928564d8",\
      "dtModified": "2022-03-14T15:49:00.734Z",\
      "dtFinished": "2022-03-14T15:49:00.734Z",\
      "dtCreated": "2022-03-14T15:48:30.994Z"\
    },\
    {\
      "name": "create",\
      "state": "done",\
      "errorMsg": "",\
      "handle": "396ea947-9c10-4b63-a15b-574a9a9844bc",\
      "dtModified": "2022-03-14T15:48:31.026Z",\
      "dtFinished": "2022-03-14T15:48:31.026Z",\
      "dtCreated": "2022-03-14T15:47:53.852Z"\
    }\
  ]
}
```

## setAccessForUser

### Examples

CLI

```bash
paperspace machines setAccessForUser \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psec02yp2" \
  --userId "ubx9ce8k" \
  --enableAccess true
```

cURL

```bash
curl -X POST 'https://api.paperspace.io/machines/psec02yp2/setMachineAccess' \
  -H 'X-Api-Key: edc20a51d9b2145...' \
  -H 'Content-Type: application/json' \
  --data-raw '{
    "userId": "ubx9ce8k",
    "enableAccess": "true"
  }'
```

Node

```js
paperspace.machines.setAccessForUser(
  {
    machineId: "psec02yp2",
    userId: "ubx9ce8k",
    enableAccess: true,
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| `machineId` | string | required | Id of the machine to enable access |
| `userId` | string | required | Id of the user to enable machine access for |
| `enableAccess` | boolean | required | When `true`, the person is added as an accessor to the machine; when `false` the person is removed |

## utilization

Get machine utilization data for the machine with the given id. Machine upgrades are not represented in utilization data.

### Examples

CLI

```bash
paperspace machines utilization \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psec02yp2" \
  --billingMonth "2022-03"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/machines/getUtilization?machineId=psec02yp2&billingMonth=2022-03' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.utilization(
  {
    machineId: "psec02yp2",
    billingMonth: "2022-03",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| `machineId` | string | required | Id of the machine to get utilization data for |
| `billingMonth` | string | required | Billing period to query in `YYYY-MM` format |

### Response

utilization - The utilization JSON object

Type `object`

```json
{
  "machineId": "psec02yp2",
  "utilization": {
    "machineId": "psec02yp2",
    "secondsUsed": 8728.27191281319,
    "hourlyRate": "0.51",
    "billingMonth": "2022-03"
  },
  "storageUtilization": {
    "machineId": "psec02yp2",
    "secondsUsed": 8785.19808006287,
    "monthlyRate": "5.00",
    "billingMonth": "2022-03"
  }
}
```

## `waitFor`

Wait for the machine with the given id to enter a certain machine state. This action polls the server and returns only when we detect that the machine has transitioned into the given state. States available to check for are:

- `off`
- `serviceready` \- services are running on the machine but the Paperspace agent is not yet available
- `ready` \- services are running on machine and the Paperspace agent is ready to stream or accept logins

When the callback is called, the returned object is information about the machine.

### Examples

CLI

```bash
paperspace machines waitfor \
  --apiKey "edc20a51d9b2145..." \
  --machineId "psec02yp2" \
  --state "ready"
```

cURL

```bash
This method is not available via curl.
```

Node

```js
paperspace.machines.waitfor(
  {
    machineId: "psec02yp2",
    state: "ready",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `machineId` | string | required | Id of the machine to wait for |
| `state` | string | required | Name of the state to wait for, either `off`, `serviceready`, `ready` |

### Response

machine - The machine JSON object

Type `object`

```json
{
  "id": "psec02yp2",
  "name": "New Machine Name1",
  "os": "",
  "ram": "32212254720",
  "cpus": 8,
  "gpu": "Quadro P4000",
  "storageTotal": "53687091200",
  "storageUsed": "110080",
  "machineType": "P4000",
  "usageRate": "P4000 hourly",
  "shutdownTimeoutInHours": 24,
  "shutdownTimeoutForces": false,
  "performAutoSnapshot": false,
  "autoSnapshotFrequency": "day",
  "autoSnapshotSaveCount": 1,
  "dynamicPublicIp": false,
  "agentType": "LinuxDesktop",
  "dtCreated": "2022-03-14T15:47:53.852Z",
  "state": "ready",
  "updatesPending": false,
  "networkId": "nng82wb",
  "privateIpAddress": "10.64.1.99",
  "publicIpAddress": "172.83.15.54",
  "region": "East Coast (NY2)",
  "scriptId": null,
  "dtLastRun": null,
  "restorePointSnapshotId": null,
  "restorePointFrequency": null,
  "events": [\
    {\
      "name": "start",\
      "state": "done",\
      "errorMsg": "",\
      "handle": "fabd398a-9c8e-4565-95fa-5f07928564d8",\
      "dtModified": "2022-03-14T15:49:00.734Z",\
      "dtFinished": "2022-03-14T15:49:00.734Z",\
      "dtCreated": "2022-03-14T15:48:30.994Z"\
    },\
    {\
      "name": "create",\
      "state": "done",\
      "errorMsg": "",\
      "handle": "396ea947-9c10-4b63-a15b-574a9a9844bc",\
      "dtModified": "2022-03-14T15:48:31.026Z",\
      "dtFinished": "2022-03-14T15:48:31.026Z",\
      "dtCreated": "2022-03-14T15:47:53.852Z"\
    }\
  ]
}
```

## availability

Get machine availability for the given region and machine type. Note: availability is only provided for the dedicated GPU machine types. Also, not all machine types are available in all regions.

### Examples

CLI

```bash
paperspace machines availability \
  --apiKey "edc20a51d9b2145..." \
  --region "East Coast (NY2)" \
  --machineType "P4000"
```

cURL

```bash
curl -X GET 'https://api.paperspace.io/machines/getAvailability?region=East%20Coast%20(NY2)&machineType=P4000' \
-H 'X-Api-Key: edc20a51d9b2145...'
```

Node

```js
paperspace.machines.availability(
  {
    region: "East Coast (NY2)",
    machineType: "P4000",
  },
  function (err, res) {
    // handle error or result
  }
);
```

### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `region` | string | required | Name of the region: either ‘East Coast (NY2)’, ‘West Coast (CA1)’, or ‘Europe (AMS1)’ |
| `machineType` | string | required | Machine type: either ‘GPU+’, ‘P4000’, ‘P5000’, ‘P6000’, or ‘V100’ |

### Response

availability - The availability JSON object, containing a single boolean attribute, “available”. A value of true for “available” means machines of that type can currently be requested in that region. A value of false means that requests for that machine type are not currently available in that region.

Type `object`

```json
{
  "available": true
}
```

In this article...

- [create](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#create)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response)
- [start](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#start)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-1)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-1)
- [stop](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#stop)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-2)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-2)
- [restart](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#restart)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-3)
- [destroy](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#destroy)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-4)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-3)
- [update](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#update)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-5)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-4)
- [list](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#list)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-6)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-5)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response-1)
- [show](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#show)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-7)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-6)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response-2)
- [setAccessForUser](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#setaccessforuser)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-8)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-7)
- [utilization](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#utilization)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-9)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-8)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response-3)
- [`waitFor`](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#waitfor)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-10)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-9)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response-4)
- [availability](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#availability)
  - [Examples](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#examples-11)
  - [Parameters](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#parameters-10)
  - [Response](https://docs.digitalocean.com/reference/paperspace/core/commands/machines/#response-5)

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