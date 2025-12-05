---
url: "https://docs.digitalocean.com/reference/paperspace/api-reference/"
title: "Paperspace API Reference | DigitalOcean Documentation"
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
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

Validated on 14 Feb 2024 • Last edited on 17 Apr 2025

- Authentication
  - getGet the current session
- Container Registries
  - postCreate a container registry
  - getList container registries
  - getList container registries
  - putUpdate a container registry
  - delDelete a container registry
  - getTest a container registry connection
- Custom Templates
  - getGet a template
  - putUpdate a template
  - delDelete template
  - getList templates
  - postCreate template
- Machine
  - getGet a machine event
  - getList machine events
  - postCreate a machine
  - getList machines
  - delDelete a machine
  - getGet a machine
  - putUpdate a machine
  - patchRestart a machine
  - patchStart a machine
  - patchStop a machine
  - postAdd an accessor
  - getList accessors
  - delDelete an accessor
  - getGet an accessor
  - getGet desktop settings
- Deployments
  - getGet a deployment
  - delDelete a deployment
  - getList deployments
  - postUpsert a deployment
  - getList deployment runs
  - getList deployment metrics
  - getList deployment logs
  - getList deployment history
  - getList a project's deployments
- Machine Types
  - getGet machine availability
- Private Networks
  - getGet a private network
  - putUpdate a private network
  - delDelete a private network
  - getList private networks
  - postCreate a private network
- Projects
  - postCreate a project
  - getList projects
  - getGet a project by its ID
  - putUpdate a project
  - delDelete a project
  - getList a project's activity
  - getList a project's collaborators
  - postCreate a project collaborator
  - delDelete a project collaborator
  - getList a project's deployments
  - getList a project's models
  - postAdd a model to a project
  - delRemove a model from project
  - getList a project's secrets
  - postCreate a project secret
  - getGet a project secret
  - patchUpdate a project secret
  - delDelete a project secret
  - getList a project's tags
  - postAdd a tag to a project
  - delRemove a tag from a project
- Tags
  - getList a project's tags
  - postAdd a tag to a project
  - delRemove a tag from a project
- Dataset
  - postCreate a dataset
  - getList datasets
  - getGet a dataset
  - delDelete a dataset
  - putUpdate a dataset
  - postCreate a dataset version
  - getList dataset versions
  - getGet a dataset version
  - delDelete a dataset version
  - putUpdate a dataset version
- Versions
  - postCreate a dataset version
  - getList dataset versions
  - getGet a dataset version
  - delDelete a dataset version
  - putUpdate a dataset version
- Model
  - postCreate a model
  - getList models
  - getGet a model
  - delDelete a model
- OS Templates
  - getList OS templates
- Public IPs
  - getList public IPs
  - postClaim a public IP
  - putAssign a public IP
  - delRelease a public IP
- Shared Drives
  - getGet a shared drive
  - putUpdate a shared drive
  - delDelete a shared drive
  - getList shared drives
  - postCreate a shared drive
- Snapshots
  - getGet a snapshot
  - putUpdate a snapshot
  - delDelete snapshot
  - getList snapshots
  - postCreate snapshot
  - postRestore snapshot
- Startup Scripts
  - getGet a startup script
  - putUpdate startup script
  - delDelete startup script
  - getList startup scripts
  - postCreate startup script
  - postAssign startup script to machine
  - postUnassign startup script from machine
- Storage
  - postCreate a storage provider
  - getList storage providers
  - putUpdate a storage provider
  - getGet a storage provider
  - delDelete a storage provider
  - getGet storage utilization
- Teams
  - getList team members
  - putUpdate a team membership
  - delRemove a user from a team
  - getList a team's secrets
  - postCreate a team secret
  - getGet a team secret
  - patchUpdate a team secret
  - delDelete a team secret
- Users
  - getList team members
  - putUpdate a team membership
  - delRemove a user from a team

[API docs by Redocly](https://redocly.com/redoc/)

# Paperspace OpenAPI (1)

Download OpenAPI specification: [Download](https://api.paperspace.com/v1/openapi.json)

[https://docs.digitalocean.com/products/paperspace](https://docs.digitalocean.com/products/paperspace)

## [tag/Authentication](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Authentication) Authentication

## [tag/Authentication/operation/auth-session](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Authentication/operation/auth-session) Get the current session

Get the current session. If a user is not logged in, this will be null. Otherwise, it will contain the current team and user.

##### Authorizations:

_BearerAuth_

### Responses

**200**

Successful response

**default**

Error response

get/auth/session

https://api.paperspace.com/v1/auth/session

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"user": {"firstName": "string",

"lastName": "string",

"email": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtConfirmed": "2019-08-24T14:15:22Z",

"teamMemberships": [{"team": {"name": "string",\
\
"id": "string",\
\
"namespace": "string",\
\
"publicProfileImageUrl": null,\
\
"isUserTeam": true,\
\
"dtCreated": "2019-08-24T14:15:22Z"\
\
},\
\
"isOwner": true,\
\
"isAdmin": true\
\
}\
\
],

"isPhoneVerified": true,

"isPasswordAuthEnabled": true,

"isQrCodeBasedMfaEnabled": true,

"isQrCodeBasedMfaConfirmed": true,

"preferences": null,

"id": "string",

"analyticsId": 0,

"metadata": {"tags": null,

"coreSurvey": null,

"gradientSurvey": null,

"graphcoreTermsAccepted": false

}

},

"team": {"namespace": "string",

"isPrivate": true,

"maxMachines": 0,

"id": "string",

"analyticsId": 0

}

}`

## [tag/Container-Registries](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries) Container Registries

## [tag/Container-Registries/operation/containerRegistries-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-create) Create a container registry

Creates a container registry for the current team.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| kind | string<br>Enum:"other""dockerhub""gcr""ghcr""digitalocean""azure"<br>The kind of provider the registry is. If provided, the registry will be validated against the provider's rules. |
| name<br>required | string non-empty <br>The name of the container registry. |
| namespace<br>required | string<br>The namespace of the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| url<br>required | string non-empty <br>The URL of the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| username<br>required | string non-empty <br>A username for the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| password<br>required | string<br>The password for the registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |

### Responses

**200**

Successful response

**default**

Error response

post/container-registries

https://api.paperspace.com/v1/container-registries

### Request samples

- Payload

Content type

application/json

Copy

`{"kind": "other",

"name": "string",

"namespace": "string",

"url": "string",

"username": "string",

"password": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"url": "string",

"namespace": "string",

"username": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"kind": "other"

}`

## [tag/Container-Registries/operation/containerRegistries-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-list) List container registries

Lists container registries for the current team.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/container-registries

https://api.paperspace.com/v1/container-registries

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"url": "string",\
\
"namespace": "string",\
\
"username": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"kind": "other"\
\
}\
\
]

}`

## [tag/Container-Registries/operation/containerRegistries-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-get) List container registries

Lists container registries for the current team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the container registry. |

### Responses

**200**

Successful response

**default**

Error response

get/container-registries/{id}

https://api.paperspace.com/v1/container-registries/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"url": "string",

"namespace": "string",

"username": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"kind": "other"

}`

## [tag/Container-Registries/operation/containerRegistries-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-update) Update a container registry

Updates a container registry for the current team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the container registry. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string non-empty <br>The name of the container registry. |
| kind | string<br>Enum:"other""dockerhub""gcr""ghcr""digitalocean""azure"<br>The kind of provider the registry is. If provided, the registry will be validated against the provider's rules. |
| namespace | string<br>The namespace of the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| url | string non-empty <br>The URL of the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| username | string non-empty <br>A username for the container registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |
| password | string<br>An updated password for the registry. See [https://docs.digitalocean.com/products/container-registry/](https://docs.digitalocean.com/products/container-registry/). |

### Responses

**200**

Successful response

**default**

Error response

put/container-registries/{id}

https://api.paperspace.com/v1/container-registries/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"kind": "other",

"namespace": "string",

"url": "string",

"username": "string",

"password": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"url": "string",

"namespace": "string",

"username": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"kind": "other"

}`

## [tag/Container-Registries/operation/containerRegistries-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-delete) Delete a container registry

Deletes a container registry for the current team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the container registry. |

### Responses

**200**

Successful response

**default**

Error response

delete/container-registries/{id}

https://api.paperspace.com/v1/container-registries/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"url": "string",

"namespace": "string",

"username": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"kind": "other"

}`

## [tag/Container-Registries/operation/containerRegistries-testConnection](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Container-Registries/operation/containerRegistries-testConnection) Test a container registry connection

Validate that a container registry can be connected to using the provided credentials.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the container registry. |

### Responses

**200**

Successful response

**default**

Error response

get/container-registries/{id}/test-connection

https://api.paperspace.com/v1/container-registries/{id}/test-connection

### Response samples

- 200
- default

Content type

application/json

Copy

`{"success": true,

"error": "string"

}`

## [tag/Custom-Templates](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates) Custom Templates

## [tag/Custom-Templates/operation/customTemplates-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates/operation/customTemplates-get) Get a template

Fetches a single template by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the template to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/custom-templates/{id}

https://api.paperspace.com/v1/custom-templates/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"agentType": "string",

"operatingSystemLabel": "string",

"region": "ny2",

"defaultSizeGb": 50,

"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],

"parentMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Custom-Templates/operation/customTemplates-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates/operation/customTemplates-update) Update a template

Updates a single template by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the template to update. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the template. |

### Responses

**200**

Successful response

**default**

Error response

put/custom-templates/{id}

https://api.paperspace.com/v1/custom-templates/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"agentType": "string",

"operatingSystemLabel": "string",

"region": "ny2",

"defaultSizeGb": 50,

"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],

"parentMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Custom-Templates/operation/customTemplates-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates/operation/customTemplates-delete) Delete template

Delete a template.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the template to delete. |

### Responses

**200**

Successful response

**default**

Error response

delete/custom-templates/{id}

https://api.paperspace.com/v1/custom-templates/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"agentType": "string",

"operatingSystemLabel": "string",

"region": "ny2",

"defaultSizeGb": 50,

"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],

"parentMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Custom-Templates/operation/customTemplates-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates/operation/customTemplates-list) List templates

Fetches a list of templates.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |
| machineId | string |

### Responses

**200**

Successful response

**default**

Error response

get/custom-templates

https://api.paperspace.com/v1/custom-templates

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"agentType": "string",\
\
"operatingSystemLabel": "string",\
\
"region": "ny2",\
\
"defaultSizeGb": 50,\
\
"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],\
\
"parentMachineId": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": { }\
\
}\
\
]

}`

## [tag/Custom-Templates/operation/customTemplates-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Custom-Templates/operation/customTemplates-create) Create template

Create a template for a machine.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the template. |
| machineId<br>required | string<br>The ID of the machine to create a template from. |

### Responses

**200**

Successful response

**default**

Error response

post/custom-templates

https://api.paperspace.com/v1/custom-templates

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"machineId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"agentType": "string",

"operatingSystemLabel": "string",

"region": "ny2",

"defaultSizeGb": 50,

"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],

"parentMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}

}`

## [tag/Machine](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine) Machine

## [tag/Machine/operation/machineEvents-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machineEvents-get) Get a machine event

Fetches a single machine event by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine event to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/machine-events/{id}

https://api.paperspace.com/v1/machine-events/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

}`

## [tag/Machine/operation/machineEvents-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machineEvents-list) List machine events

Fetches a list of machine events.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| machineId | string |

### Responses

**200**

Successful response

**default**

Error response

get/machine-events

https://api.paperspace.com/v1/machine-events

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "bill-sessions",\
\
"state": "new",\
\
"machineId": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtStarted": "2019-08-24T14:15:22Z",\
\
"dtFinished": "2019-08-24T14:15:22Z",\
\
"error": "string"\
\
}\
\
]

}`

## [tag/Machine/operation/machines-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-create) Create a machine

Creates a new machine.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string non-empty <br>The name of the new machine. |
| machineType<br>required | string<br>The machine type. This must correspond to a machine type label as indicated in [List OS templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/osTemplates-list) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list). |
| templateId<br>required | string<br>The template ID. See [List OS templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/osTemplates-list) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list). |
| networkId | string<br>The network ID. |
| diskSize<br>required | number or number or number or number or number or number or number or number or number or number or number<br>The disk size in gigabytes. |
| region<br>required | string or string or string or string<br>The region to create the machine in. |
| publicIpType | string<br>Enum:"static""dynamic""none"<br>The public IP type. |
| autoSnapshotEnabled | boolean<br>Whether to enable auto snapshots. |
| autoSnapshotFrequency | string<br>Enum:"hourly""daily""weekly""monthly"<br>The auto snapshot frequency. |
| autoSnapshotSaveCount | number<br>The number of auto snapshots to save. |
| autoShutdownEnabled | boolean<br>Whether to enable auto shutdown. |
| autoShutdownTimeout | number<br>The auto shutdown timeout in hours. |
| autoShutdownForce | boolean<br>Whether to force shutdown the machine. |
| takeInitialSnapshot | boolean<br>Whether to take an initial snapshot. |
| restorePointEnabled | boolean<br>Whether to use initial snapshot as a restore point. |
| restorePointFrequency | string<br>Value:"shutdown"<br>The restore point frequency. |
| startupScriptId | string<br>The startup script ID. |
| emailPassword | boolean<br>Default: true<br>Whether to email the password. |
| startOnCreate | boolean<br>Whether to start the machine on creation. |
| enableNvlink | boolean<br>Whether to enable NVLink. |
| accessorIds | Array of strings<br>The IDs of users to grant access to the machine. |

### Responses

**200**

Successful response

**default**

Error response

post/machines

https://api.paperspace.com/v1/machines

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"machineType": "string",

"templateId": "string",

"networkId": "string",

"diskSize": 50,

"region": "ny2",

"publicIpType": "static",

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"takeInitialSnapshot": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"startupScriptId": "string",

"emailPassword": true,

"startOnCreate": true,

"enableNvlink": true,

"accessorIds": ["string"\
\
]

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-list) List machines

Fetches a list of machines.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name""state"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |
| region | string or string or string or string |
| agentType | string |
| machineType | string |

### Responses

**200**

Successful response

**default**

Error response

get/machines

https://api.paperspace.com/v1/machines

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"state": "off",\
\
"os": "string",\
\
"machineType": "string",\
\
"agentType": "string",\
\
"cpus": 0,\
\
"ram": 0,\
\
"storageTotal": 0,\
\
"storageUsed": 0,\
\
"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],\
\
"region": "ny2",\
\
"privateIp": "string",\
\
"networkId": "string",\
\
"publicIp": "string",\
\
"publicIpType": "static",\
\
"autoShutdownEnabled": true,\
\
"autoShutdownTimeout": 0,\
\
"autoShutdownForce": true,\
\
"autoSnapshotEnabled": true,\
\
"autoSnapshotFrequency": "hourly",\
\
"autoSnapshotSaveCount": 0,\
\
"updatesPending": true,\
\
"restorePointEnabled": true,\
\
"restorePointFrequency": "shutdown",\
\
"restorePointSnapshotId": "string",\
\
"usageRate": 0,\
\
"storageRate": 0,\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"dtDeleted": "2019-08-24T14:15:22Z",\
\
"reservation": {"name": "string",\
\
"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\
\
"dtStarted": "2019-08-24T14:15:22Z",\
\
"dtFinished": "2019-08-24T14:15:22Z",\
\
"isActive": true\
\
}\
\
}\
\
]

}`

## [tag/Machine/operation/machines-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-delete) Delete a machine

Deletes a single machine by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to delete. |

### Responses

**200**

Successful response

**default**

Error response

delete/machines/{id}

https://api.paperspace.com/v1/machines/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-get) Get a machine

Fetches a single machine by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/machines/{id}

https://api.paperspace.com/v1/machines/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}`

## [tag/Machine/operation/machines-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-update) Update a machine

Updates a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to update. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The name of the machine. |
| machineType | string<br>The machine type. This must correspond to a machine type label as indicated in [List OS templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/osTemplates-list) or [List templates](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/customTemplates-list). |
| diskSize | number or number or number or number or number or number or number or number or number or number or number<br>The disk size in gigabytes. |
| networkId | string<br>The network ID. |
| publicIpType | string<br>Enum:"static""dynamic""none"<br>The public IP type. |
| autoSnapshotEnabled | boolean<br>Whether to enable auto snapshots. |
| autoSnapshotFrequency | string<br>Enum:"hourly""daily""weekly""monthly"<br>The auto snapshot frequency. |
| autoSnapshotSaveCount | number<br>The number of auto snapshots to save. |
| autoShutdownEnabled | boolean<br>Whether to enable auto shutdown. |
| autoShutdownTimeout | number<br>The auto shutdown timeout in hours. |
| autoShutdownForce | boolean<br>Whether to force shutdown the machine. |
| restorePointEnabled | boolean<br>Whether to use initial snapshot as a restore point. |
| restorePointFrequency | string<br>Value:"shutdown"<br>The restore point frequency. |
| restorePointSnapshotId | string<br>The restore point snapshot ID. |

### Responses

**200**

Successful response

**default**

Error response

put/machines/{id}

https://api.paperspace.com/v1/machines/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"machineType": "string",

"diskSize": 50,

"networkId": "string",

"publicIpType": "static",

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-restart](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-restart) Restart a machine

Restarts a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to restart. |

### Responses

**200**

Successful response

**default**

Error response

patch/machines/{id}/restart

https://api.paperspace.com/v1/machines/{id}/restart

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-start](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-start) Start a machine

Starts a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to start. |

### Responses

**200**

Successful response

**default**

Error response

patch/machines/{id}/start

https://api.paperspace.com/v1/machines/{id}/start

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-stop](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-stop) Stop a machine

Stops a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to stop. |

### Responses

**200**

Successful response

**default**

Error response

patch/machines/{id}/stop

https://api.paperspace.com/v1/machines/{id}/stop

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"state": "off",

"os": "string",

"machineType": "string",

"agentType": "string",

"cpus": 0,

"ram": 0,

"storageTotal": 0,

"storageUsed": 0,

"accelerators": [{"name": "string",\
\
"memory": 0,\
\
"count": 0\
\
}\
\
],

"region": "ny2",

"privateIp": "string",

"networkId": "string",

"publicIp": "string",

"publicIpType": "static",

"autoShutdownEnabled": true,

"autoShutdownTimeout": 0,

"autoShutdownForce": true,

"autoSnapshotEnabled": true,

"autoSnapshotFrequency": "hourly",

"autoSnapshotSaveCount": 0,

"updatesPending": true,

"restorePointEnabled": true,

"restorePointFrequency": "shutdown",

"restorePointSnapshotId": "string",

"usageRate": 0,

"storageRate": 0,

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z",

"reservation": {"name": "string",

"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"isActive": true

}

}

}`

## [tag/Machine/operation/machines-addAccessor](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-addAccessor) Add an accessor

Adds an accessor to a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to add an accessor to. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| userId<br>required | string<br>The ID of the user to add as an accessor. This can be found on the team members page at [https://console.paperspace.com/settings/members](https://console.paperspace.com/settings/members). |

### Responses

**200**

Successful response

**default**

Error response

post/machines/{id}/accessors

https://api.paperspace.com/v1/machines/{id}/accessors

### Request samples

- Payload

Content type

application/json

Copy

`{"userId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"user": {"id": "string",

"email": "user@example.com",

"firstName": null,

"lastName": null,

"publicProfileImageUrl": null

},

"dtDeleted": null

}`

## [tag/Machine/operation/machines-listAccessors](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-listAccessors) List accessors

Lists the team members that can explicitly access a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine. |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "id"<br>Value:"id"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/machines/{id}/accessors

https://api.paperspace.com/v1/machines/{id}/accessors

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"user": {"id": "string",\
\
"email": "user@example.com",\
\
"firstName": null,\
\
"lastName": null,\
\
"publicProfileImageUrl": null\
\
},\
\
"dtDeleted": null\
\
}\
\
]

}`

## [tag/Machine/operation/machines-removeAccessor](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-removeAccessor) Delete an accessor

Deletes an accessor from a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to add an accessor to. |
| userId<br>required | string<br>The ID of the user to add as an accessor. This can be found on the team members page at [https://console.paperspace.com/settings/members](https://console.paperspace.com/settings/members). |

### Responses

**200**

Successful response

**default**

Error response

delete/machines/{id}/accessors/{userId}

https://api.paperspace.com/v1/machines/{id}/accessors/{userId}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"user": {"id": "string",

"email": "user@example.com",

"firstName": null,

"lastName": null,

"publicProfileImageUrl": null

},

"dtDeleted": null

}`

## [tag/Machine/operation/machines-getAccessor](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-getAccessor) Get an accessor

Get an accessor for a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine to get an accessor for. |
| userId<br>required | string<br>The ID of the user to get. This can be found on the team members page at [https://console.paperspace.com/settings/members](https://console.paperspace.com/settings/members). |

### Responses

**200**

Successful response

**default**

Error response

get/machines/{id}/accessors/{userId}

https://api.paperspace.com/v1/machines/{id}/accessors/{userId}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"user": {"id": "string",

"email": "user@example.com",

"firstName": null,

"lastName": null,

"publicProfileImageUrl": null

},

"dtDeleted": null

}`

## [tag/Machine/operation/machines-getDesktop](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine/operation/machines-getDesktop) Get desktop settings

Gets the machine settings that are used to configure desktop streaming.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the machine. |

### Responses

**200**

Successful response

**default**

Error response

get/machines/{id}/desktop

https://api.paperspace.com/v1/machines/{id}/desktop

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"vnc": {"hostname": "string",

"port": 1,

"password": "string"

},

"windows": {"hostname": "string",

"port": 1,

"publicIp": "string"

}

}`

## [tag/Deployments](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments) Deployments

## [tag/Deployments/operation/deployments-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deployments-get) Get a deployment

Fetches a single deployment by deployment ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment to fetch |

### Responses

**200**

Successful response

**default**

Error response

get/deployments/{id}

https://api.paperspace.com/v1/deployments/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"id": "string",

"projectId": "string",

"teamId": "string",

"endpoint": "string",

"latestSpecHash": null,

"dtCreated": "2019-08-24T14:15:22Z",

"latestSpec": null,

"basicAuthKey": null

}`

## [tag/Deployments/operation/deployments-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deployments-delete) Delete a deployment

Deletes a deployment by deployment ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment to delete |

### Responses

**200**

Successful response

**default**

Error response

delete/deployments/{id}

https://api.paperspace.com/v1/deployments/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/Deployments/operation/deployments-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deployments-list) List deployments

Fetches a list of deployments for a logged in user.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/deployments

https://api.paperspace.com/v1/deployments

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"name": "string",\
\
"id": "string",\
\
"projectId": "string",\
\
"teamId": "string",\
\
"endpoint": "string",\
\
"latestSpecHash": null,\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"latestSpec": null,\
\
"basicAuthKey": null\
\
}\
\
]

}`

## [tag/Deployments/operation/deployments-upsert](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deployments-upsert) Upsert a deployment

Submit a new deployment configuration. If a deployment does not exist, one is created. Otherwise, a deployment is updated with new configuration.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| deploymentId | string or null<br>Default: null<br>The ID of the deployment to update. |
| projectId<br>required | string<br>The project ID to deploy resources under. |
| config<br>required | (object or object) or object<br>The deployment configuration |

### Responses

**200**

Successful response

**default**

Error response

post/deployments

https://api.paperspace.com/v1/deployments

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"deploymentId": null,

"projectId": "string",

"config": {"apiVersion": "v0alpha0",

"command": ["string"\
\
],

"containerRegistry": "string",

"enabled": true,

"env": [{"name": "string",\
\
"value": "string"\
\
}\
\
],

"healthChecks": {"liveness": {"timeoutSeconds": 1,

"initialDelaySeconds": 1000,

"periodSeconds": 1,

"failureThreshold": 1,

"path": "string",

"host": "string",

"port": 0,

"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]

},

"readiness": {"timeoutSeconds": 1,

"initialDelaySeconds": 1000,

"periodSeconds": 1,

"failureThreshold": 1,

"path": "string",

"host": "string",

"port": 0,

"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]

},

"startup": {"timeoutSeconds": 1,

"initialDelaySeconds": 1000,

"periodSeconds": 1,

"failureThreshold": 1,

"path": "string",

"host": "string",

"port": 0,

"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]

}

},

"image": "string",

"models": [{"id": "string",\
\
"path": "string"\
\
}\
\
],

"name": "string",

"port": 80,

"region": "ny2",

"repositories": {"mountPath": "string",

"dataset": "string",

"repositories": [{"url": "string",\
\
"ref": "string",\
\
"name": "string",\
\
"username": "string",\
\
"password": "string"\
\
}\
\
]

},

"resources": {"instanceType": "string",

"replicas": 1,

"autoscaling": {"maxReplicas": 0,

"enabled": true,

"metrics": [{"metric": "requestDuration",\
\
"summary": "average",\
\
"value": 1\
\
}\
\
]

}

}

}

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"deploymentId": "string"

}`

## [tag/Deployments/operation/deploymentRuns-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deploymentRuns-get) List deployment runs

Lists the active deployment runs for a deployment.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment to fetch |

##### query Parameters

|     |     |
| --- | --- |
| limit | number<br>Default: 10<br>The latest n number of deployment runs to return |

### Responses

**200**

Successful response

**default**

Error response

get/deployments/{id}/runs

https://api.paperspace.com/v1/deployments/{id}/runs

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`[{"id": "string",\
\
"availableReplicas": 0,\
\
"readyReplicas": 0,\
\
"replicas": 0,\
\
"instances": [{"id": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtFinished": null,\
\
"state": "string",\
\
"instanceId": "string",\
\
"stateMessage": null,\
\
"history": [{"state": "string",\
\
"message": null,\
\
"timestamp": "2019-08-24T14:15:22Z"\
\
}\
\
]\
\
}\
\
]\
\
}\
\
]`

## [tag/Deployments/operation/deploymentMetrics-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deploymentMetrics-get) List deployment metrics

Lists metrics for a given deployment.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment to fetch |

##### query Parameters

|     |     |
| --- | --- |
| metric<br>required | string or string or string or string or string or string or string<br>The metric to fetch. |
| timeframe | string<br>Enum:"hour""12\_hours""day""1\_week""2\_weeks"<br>The time frame for the metrics request. |

### Responses

**200**

Successful response

**default**

Error response

get/deployments/{id}/metrics

https://api.paperspace.com/v1/deployments/{id}/metrics

### Response samples

- 200
- default

Content type

application/json

Copy

`[ ]`

## [tag/Deployments/operation/deploymentLogs-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deploymentLogs-list) List deployment logs

Lists logs for a given deployment.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| instanceId | string<br>Get the logs for a particular instance ID |

### Responses

**200**

Successful response

**default**

Error response

get/deployments/{id}/logs

https://api.paperspace.com/v1/deployments/{id}/logs

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"jobId": "string",\
\
"message": "string",\
\
"uuid": null,\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"instanceId": null\
\
}\
\
]

}`

## [tag/Deployments/operation/deploymentHistory-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/deploymentHistory-list) List deployment history

Lists history for a given deployment.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string <uuid> <br>The ID of the deployment |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/deployments/{id}/history

https://api.paperspace.com/v1/deployments/{id}/history

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"data": {"apiVersion": "v0alpha0",\
\
"command": ["string"\
\
],\
\
"containerRegistry": "string",\
\
"enabled": true,\
\
"env": [{"name": "string",\
\
"value": "string"\
\
}\
\
],\
\
"healthChecks": {"liveness": {"timeoutSeconds": 1,\
\
"initialDelaySeconds": 1000,\
\
"periodSeconds": 1,\
\
"failureThreshold": 1,\
\
"path": "string",\
\
"host": "string",\
\
"port": 0,\
\
"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]\
\
},\
\
"readiness": {"timeoutSeconds": 1,\
\
"initialDelaySeconds": 1000,\
\
"periodSeconds": 1,\
\
"failureThreshold": 1,\
\
"path": "string",\
\
"host": "string",\
\
"port": 0,\
\
"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]\
\
},\
\
"startup": {"timeoutSeconds": 1,\
\
"initialDelaySeconds": 1000,\
\
"periodSeconds": 1,\
\
"failureThreshold": 1,\
\
"path": "string",\
\
"host": "string",\
\
"port": 0,\
\
"headers": [{"name": "string",\
\
"value": "string"\
\
}\
\
]\
\
}\
\
},\
\
"image": "string",\
\
"models": [{"id": "string",\
\
"path": "string"\
\
}\
\
],\
\
"name": "string",\
\
"port": 80,\
\
"region": "ny2",\
\
"repositories": {"mountPath": "string",\
\
"dataset": "string",\
\
"repositories": [{"url": "string",\
\
"ref": "string",\
\
"name": "string",\
\
"username": "string",\
\
"password": "string"\
\
}\
\
]\
\
},\
\
"resources": {"instanceType": "string",\
\
"replicas": 1,\
\
"autoscaling": {"maxReplicas": 0,\
\
"enabled": true,\
\
"metrics": [{"metric": "requestDuration",\
\
"summary": "average",\
\
"value": 1\
\
}\
\
]\
\
}\
\
}\
\
},\
\
"deploymentId": "string",\
\
"externalApplied": null,\
\
"dtHealthy": null,\
\
"userId": "string",\
\
"error": null,\
\
"metadata": null,\
\
"workflowRun": null\
\
}\
\
]

}`

## [tag/Deployments/operation/projectDeployments-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Deployments/operation/projectDeployments-list) List a project's deployments

Fetches a list of deployments for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch deployments for |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string<br>Filter to deployments with names matching this string. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/deployments

https://api.paperspace.com/v1/projects/{id}/deployments

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"name": "string",\
\
"id": "string",\
\
"projectId": "string",\
\
"teamId": "string",\
\
"endpoint": "string",\
\
"latestSpecHash": null,\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"latestSpec": null,\
\
"basicAuthKey": null\
\
}\
\
]

}`

## [tag/Machine-Types](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine-Types) Machine Types

## [tag/Machine-Types/operation/machineAvailability-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Machine-Types/operation/machineAvailability-list) Get machine availability

Gets the machine availability for a given region and machine type.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| machineType<br>required | string<br>Filter to machine availabilities with machine types matching this string. |
| region<br>required | string or string or string or string<br>Filter to machine availabilities in this region. |

### Responses

**200**

Successful response

**default**

Error response

get/machine-availability

https://api.paperspace.com/v1/machine-availability

### Response samples

- 200
- default

Content type

application/json

Copy

`{"available": true

}`

## [tag/Private-Networks](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks) Private Networks

## [tag/Private-Networks/operation/privateNetworks-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks/operation/privateNetworks-get) Get a private network

Fetches a single private network by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the private network to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/private-networks/{id}

https://api.paperspace.com/v1/private-networks/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"region": "ny2",

"network": "string",

"netmask": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Private-Networks/operation/privateNetworks-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks/operation/privateNetworks-update) Update a private network

Updates a single private network by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the private network to update. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The name of the private network. |

### Responses

**200**

Successful response

**default**

Error response

put/private-networks/{id}

https://api.paperspace.com/v1/private-networks/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"region": "ny2",

"network": "string",

"netmask": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Private-Networks/operation/privateNetworks-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks/operation/privateNetworks-delete) Delete a private network

Deletes a single private network by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the private network to delete. |

### Responses

**200**

Successful response

**default**

Error response

delete/private-networks/{id}

https://api.paperspace.com/v1/private-networks/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/Private-Networks/operation/privateNetworks-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks/operation/privateNetworks-list) List private networks

Fetches a list of private networks.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |
| region | string or string or string or string |

### Responses

**200**

Successful response

**default**

Error response

get/private-networks

https://api.paperspace.com/v1/private-networks

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"region": "ny2",\
\
"network": "string",\
\
"netmask": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": { }\
\
}\
\
]

}`

## [tag/Private-Networks/operation/privateNetworks-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Private-Networks/operation/privateNetworks-create) Create a private network

Creates a new private network.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the private network. |
| region<br>required | string or string or string or string<br>The region the private network is in. |
| migrateMachines | boolean<br>Default: false<br>Whether to migrate all machines not currently in a private network to the new private network. |

### Responses

**200**

Successful response

**default**

Error response

post/private-networks

https://api.paperspace.com/v1/private-networks

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"region": "ny2",

"migrateMachines": false

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"region": "ny2",

"network": "string",

"netmask": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { }

}`

## [tag/Projects](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects) Projects

## [tag/Projects/operation/projects-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projects-create) Create a project

Create a project

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string \[ 1 .. 128 \] characters <br>The name of the project |

### Responses

**200**

Successful response

**default**

Error response

post/projects

https://api.paperspace.com/v1/projects

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": null,

"repoNodeId": null,

"repoName": null,

"repoUrl": null

}`

## [tag/Projects/operation/projects-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projects-list) List projects

```
    List projects. This endpoint supports pagination and sorting.

```

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/projects

https://api.paperspace.com/v1/projects

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": null,\
\
"repoNodeId": null,\
\
"repoName": null,\
\
"repoUrl": null\
\
}\
\
]

}`

## [tag/Projects/operation/projects-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projects-get) Get a project by its ID

Get a project by its ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to get |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}

https://api.paperspace.com/v1/projects/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": null,

"repoNodeId": null,

"repoName": null,

"repoUrl": null

}`

## [tag/Projects/operation/projects-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projects-update) Update a project

Update a project

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to update |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string \[ 1 .. 128 \] characters <br>The new name of the project |

### Responses

**200**

Successful response

**default**

Error response

put/projects/{id}

https://api.paperspace.com/v1/projects/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": null,

"repoNodeId": null,

"repoName": null,

"repoUrl": null

}`

## [tag/Projects/operation/projects-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projects-delete) Delete a project

Delete a project

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to delete |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}

https://api.paperspace.com/v1/projects/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": null,

"repoNodeId": null,

"repoName": null,

"repoUrl": null

}`

## [tag/Projects/operation/projectActivity-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectActivity-list) List a project's activity

Fetches a list of activity items for a given project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch activity items for |

##### query Parameters

|     |     |
| --- | --- |
| after | string <uuid> <br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| deploymentId | string <uuid> <br>Constrain results to deployment activity. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/activity

https://api.paperspace.com/v1/projects/{id}/activity

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",\
\
"data": null,\
\
"action": "deployment.scaled",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"deployment": null,\
\
"actor": null\
\
}\
\
]

}`

## [tag/Projects/operation/projectCollaborators-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectCollaborators-list) List a project's collaborators

Fetches a list of collaborators for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project. |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/collaborators

https://api.paperspace.com/v1/projects/{id}/collaborators

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"user": {"id": "string",\
\
"email": "user@example.com",\
\
"firstName": null,\
\
"lastName": null,\
\
"publicProfileImageUrl": null\
\
},\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": null\
\
}\
\
]

}`

## [tag/Projects/operation/projectCollaborators-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectCollaborators-create) Create a project collaborator

Adds a new collaborator to a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| userId<br>required | string<br>The ID of the user to add to the project. This can be found on the user's profile at [https://console.paperspace.com/account/settings/profile](https://console.paperspace.com/account/settings/profile). |

### Responses

**200**

Successful response

**default**

Error response

post/projects/{id}/collaborators

https://api.paperspace.com/v1/projects/{id}/collaborators

### Request samples

- Payload

Content type

application/json

Copy

`{"userId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"user": {"id": "string",

"email": "user@example.com",

"firstName": null,

"lastName": null,

"publicProfileImageUrl": null

},

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": null

}`

## [tag/Projects/operation/projectCollaborators-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectCollaborators-delete) Delete a project collaborator

Removes a collaborator from a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project. |
| userId<br>required | string<br>The ID of the user to remove from the project. This can be found on the team members page at [https://console.paperspace.com/settings/members](https://console.paperspace.com/settings/members). |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}/collaborators/{userId}

https://api.paperspace.com/v1/projects/{id}/collaborators/{userId}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"userId": "string"

}`

## [tag/Projects/operation/projectDeployments-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectDeployments-list) List a project's deployments

Fetches a list of deployments for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch deployments for |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string<br>Filter to deployments with names matching this string. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/deployments

https://api.paperspace.com/v1/projects/{id}/deployments

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"name": "string",\
\
"id": "string",\
\
"projectId": "string",\
\
"teamId": "string",\
\
"endpoint": "string",\
\
"latestSpecHash": null,\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"latestSpec": null,\
\
"basicAuthKey": null\
\
}\
\
]

}`

## [tag/Projects/operation/projectModels-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectModels-list) List a project's models

Fetches a list of models for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch models for |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string<br>Filter to models with names matching this string. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/models

https://api.paperspace.com/v1/projects/{id}/models

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"isPublic": true,\
\
"teamId": "string",\
\
"storageProviderId": "string",\
\
"description": "string",\
\
"projectId": "string"\
\
}\
\
]

}`

## [tag/Projects/operation/projectModels-add](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectModels-add) Add a model to a project

Adds a model to a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to add the model to |
| modelId<br>required | string<br>The ID of the model to add to the project. See [Create a model](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/models-create). |

### Responses

**200**

Successful response

**default**

Error response

post/projects/{id}/models/{modelId}

https://api.paperspace.com/v1/projects/{id}/models/{modelId}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string",

"projectId": "string"

}`

## [tag/Projects/operation/projectModels-remove](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectModels-remove) Remove a model from project

Remove a model from project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to remove the model from |
| modelId<br>required | string<br>The ID of the model to remove from the project. See [Create a model](https://docs.digitalocean.com/reference/paperspace/api-reference/#operation/models-create). |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}/models/{modelId}

https://api.paperspace.com/v1/projects/{id}/models/{modelId}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string",

"projectId": "string"

}`

## [tag/Projects/operation/projectSecrets-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectSecrets-list) List a project's secrets

Fetches a list of secrets for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project where the secret is stored. |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/secrets

https://api.paperspace.com/v1/projects/{id}/secrets

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"hasDeploymentAttached": true\
\
}\
\
]

}`

## [tag/Projects/operation/projectSecrets-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectSecrets-create) Create a project secret

Creates a new secret for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project where the secret is stored. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |
| value<br>required | string \[ 1 .. 8192 \] characters <br>The value of the secret, e.g. "password". |

### Responses

**200**

Successful response

**default**

Error response

post/projects/{id}/secrets

https://api.paperspace.com/v1/projects/{id}/secrets

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"value": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z"

}`

## [tag/Projects/operation/projectSecrets-getProjectSecret](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectSecrets-getProjectSecret) Get a project secret

Fetches a secret for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/secrets/{name}

https://api.paperspace.com/v1/projects/{id}/secrets/{name}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"hasDeploymentAttached": true

}`

## [tag/Projects/operation/projectSecrets-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectSecrets-update) Update a project secret

Update the value of a secret for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| value<br>required | string \[ 1 .. 8192 \] characters <br>The value of the secret, e.g. "password". |

### Responses

**200**

Successful response

**default**

Error response

patch/projects/{id}/secrets/{name}

https://api.paperspace.com/v1/projects/{id}/secrets/{name}

### Request samples

- Payload

Content type

application/json

Copy

`{"value": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z"

}`

## [tag/Projects/operation/projectSecrets-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectSecrets-delete) Delete a project secret

Deletes a secret for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}/secrets/{name}

https://api.paperspace.com/v1/projects/{id}/secrets/{name}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string"

}`

## [tag/Projects/operation/projectTags-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectTags-list) List a project's tags

Fetches a list of tags for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch tags for |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": 0,\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z"\
\
}\
\
]

}`

## [tag/Projects/operation/projectTags-add](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectTags-add) Add a tag to a project

Adds a tag to a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to add the tag to |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the tag to add to the project |

### Responses

**200**

Successful response

**default**

Error response

post/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": 0,

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Projects/operation/projectTags-remove](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Projects/operation/projectTags-remove) Remove a tag from a project

Remove a tag from a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to remove the tag from |

##### query Parameters

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the tag to remove from the project |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": 0,

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Tags](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Tags) Tags

## [tag/Tags/operation/projectTags-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Tags/operation/projectTags-list) List a project's tags

Fetches a list of tags for a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to fetch tags for |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": 0,\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z"\
\
}\
\
]

}`

## [tag/Tags/operation/projectTags-add](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Tags/operation/projectTags-add) Add a tag to a project

Adds a tag to a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to add the tag to |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the tag to add to the project |

### Responses

**200**

Successful response

**default**

Error response

post/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": 0,

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Tags/operation/projectTags-remove](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Tags/operation/projectTags-remove) Remove a tag from a project

Remove a tag from a project.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the project to remove the tag from |

##### query Parameters

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the tag to remove from the project |

### Responses

**200**

Successful response

**default**

Error response

delete/projects/{id}/tags

https://api.paperspace.com/v1/projects/{id}/tags

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": 0,

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Dataset](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset) Dataset

## [tag/Dataset/operation/datasets-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasets-create) Create a dataset

Create a dataset

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the dataset |
| description | (any or null) or (string or null)<br>The description of the dataset |
| storageProviderId | string<br>The ID of the storage provider |
| isPublic | boolean<br>Whether the dataset is public |

### Responses

**200**

Successful response

**default**

Error response

post/datasets

https://api.paperspace.com/v1/datasets

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"description": { },

"storageProviderId": "string",

"isPublic": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string"

}`

## [tag/Dataset/operation/datasets-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasets-list) List datasets

List datasets

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| teamId | string |
| privacy | any or string<br>Default: "PRIVATE" |

### Responses

**200**

Successful response

**default**

Error response

get/datasets

https://api.paperspace.com/v1/datasets

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"isPublic": true,\
\
"teamId": "string",\
\
"storageProviderId": "string",\
\
"description": "string"\
\
}\
\
]

}`

## [tag/Dataset/operation/datasets-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasets-get) Get a dataset

Get a dataset

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the dataset |

### Responses

**200**

Successful response

**default**

Error response

get/datasets/{id}

https://api.paperspace.com/v1/datasets/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string"

}`

## [tag/Dataset/operation/datasets-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasets-delete) Delete a dataset

Delete a dataset

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the dataset |

### Responses

**200**

Successful response

**default**

Error response

delete/datasets/{id}

https://api.paperspace.com/v1/datasets/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/Dataset/operation/datasets-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasets-update) Update a dataset

Update a dataset

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the dataset |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The name of the dataset |
| description | (any or null) or (string or null)<br>The description of the dataset |

### Responses

**200**

Successful response

**default**

Error response

put/datasets/{id}

https://api.paperspace.com/v1/datasets/{id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"description": { }

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string"

}`

## [tag/Dataset/operation/datasetVersions-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasetVersions-create) Create a dataset version

Create a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| message | string<br>The description of the dataset version |
| tags | string<br>The tags for the version, comma-delimited |
| metadata | object<br>Metadata for the version. |

### Responses

**200**

Successful response

**default**

Error response

post/datasets/{datasetId}/versions

https://api.paperspace.com/v1/datasets/{datasetId}/versions

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"message": "string",

"tags": "string",

"metadata": {"property1": null,

"property2": null

}

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Dataset/operation/datasetVersions-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasetVersions-list) List dataset versions

List dataset versions

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| tags | string |

### Responses

**200**

Successful response

**default**

Error response

get/datasets/{datasetId}/versions

https://api.paperspace.com/v1/datasets/{datasetId}/versions

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"version": "string",\
\
"userId": "string",\
\
"datasetId": "string",\
\
"message": "string",\
\
"metadata": {"property1": null,\
\
"property2": null\
\
},\
\
"isCommitted": true,\
\
"url": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"tags": ["string"\
\
],\
\
"usageBytes": "string"\
\
}\
\
]

}`

## [tag/Dataset/operation/datasetVersions-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasetVersions-get) Get a dataset version

Get a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

### Responses

**200**

Successful response

**default**

Error response

get/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Dataset/operation/datasetVersions-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasetVersions-delete) Delete a dataset version

Delete a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

### Responses

**200**

Successful response

**default**

Error response

delete/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"datasetId": "string",

"version": "string"

}`

## [tag/Dataset/operation/datasetVersions-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Dataset/operation/datasetVersions-update) Update a dataset version

Update a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| message | string<br>The description of the dataset version |
| tags | string<br>The tags for the version, comma-delimited |
| metadata | object<br>Metadata for the version. |
| isCommitted | boolean<br>Whether the version is committed |

### Responses

**200**

Successful response

**default**

Error response

put/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"message": "string",

"tags": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Versions](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions) Versions

## [tag/Versions/operation/datasetVersions-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions/operation/datasetVersions-create) Create a dataset version

Create a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| message | string<br>The description of the dataset version |
| tags | string<br>The tags for the version, comma-delimited |
| metadata | object<br>Metadata for the version. |

### Responses

**200**

Successful response

**default**

Error response

post/datasets/{datasetId}/versions

https://api.paperspace.com/v1/datasets/{datasetId}/versions

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"message": "string",

"tags": "string",

"metadata": {"property1": null,

"property2": null

}

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Versions/operation/datasetVersions-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions/operation/datasetVersions-list) List dataset versions

List dataset versions

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| tags | string |

### Responses

**200**

Successful response

**default**

Error response

get/datasets/{datasetId}/versions

https://api.paperspace.com/v1/datasets/{datasetId}/versions

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"version": "string",\
\
"userId": "string",\
\
"datasetId": "string",\
\
"message": "string",\
\
"metadata": {"property1": null,\
\
"property2": null\
\
},\
\
"isCommitted": true,\
\
"url": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"tags": ["string"\
\
],\
\
"usageBytes": "string"\
\
}\
\
]

}`

## [tag/Versions/operation/datasetVersions-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions/operation/datasetVersions-get) Get a dataset version

Get a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

### Responses

**200**

Successful response

**default**

Error response

get/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Versions/operation/datasetVersions-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions/operation/datasetVersions-delete) Delete a dataset version

Delete a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

### Responses

**200**

Successful response

**default**

Error response

delete/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"datasetId": "string",

"version": "string"

}`

## [tag/Versions/operation/datasetVersions-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Versions/operation/datasetVersions-update) Update a dataset version

Update a dataset version

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| datasetId<br>required | string<br>The ID of the dataset |
| version<br>required | string<br>The version of the dataset |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| message | string<br>The description of the dataset version |
| tags | string<br>The tags for the version, comma-delimited |
| metadata | object<br>Metadata for the version. |
| isCommitted | boolean<br>Whether the version is committed |

### Responses

**200**

Successful response

**default**

Error response

put/datasets/{datasetId}/versions/{version}

https://api.paperspace.com/v1/datasets/{datasetId}/versions/{version}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"message": "string",

"tags": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"version": "string",

"userId": "string",

"datasetId": "string",

"message": "string",

"metadata": {"property1": null,

"property2": null

},

"isCommitted": true,

"url": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"tags": ["string"\
\
],

"usageBytes": "string"

}`

## [tag/Model](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Model) Model

## [tag/Model/operation/models-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Model/operation/models-create) Create a model

Create a model

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the model |
| description | (any or null) or (string or null)<br>The description of the model |
| storageProviderId | string<br>The ID of the storage provider |
| isPublic | boolean<br>Whether the model is public |
| projectId | string<br>The ID of the project |

### Responses

**200**

Successful response

**default**

Error response

post/models

https://api.paperspace.com/v1/models

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"description": { },

"storageProviderId": "string",

"isPublic": true,

"projectId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string",

"projectId": "string"

}`

## [tag/Model/operation/models-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Model/operation/models-list) List models

List models

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| projectId | string |

### Responses

**200**

Successful response

**default**

Error response

get/models

https://api.paperspace.com/v1/models

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"isPublic": true,\
\
"teamId": "string",\
\
"storageProviderId": "string",\
\
"description": "string",\
\
"projectId": "string"\
\
}\
\
]

}`

## [tag/Model/operation/models-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Model/operation/models-get) Get a model

Get a model

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the model |

### Responses

**200**

Successful response

**default**

Error response

get/models/{id}

https://api.paperspace.com/v1/models/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"isPublic": true,

"teamId": "string",

"storageProviderId": "string",

"description": "string",

"projectId": "string"

}`

## [tag/Model/operation/models-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Model/operation/models-delete) Delete a model

Delete a model

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the model |

### Responses

**200**

Successful response

**default**

Error response

delete/models/{id}

https://api.paperspace.com/v1/models/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/OS-Templates](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/OS-Templates) OS Templates

## [tag/OS-Templates/operation/osTemplates-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/OS-Templates/operation/osTemplates-list) List OS templates

Fetches a list of OS templates.

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "name"<br>Value:"name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |

### Responses

**200**

Successful response

**default**

Error response

get/os-templates

https://api.paperspace.com/v1/os-templates

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"agentType": "string",\
\
"operatingSystemLabel": "string",\
\
"defaultSizeGb": 50,\
\
"availableMachineTypes": [{"machineTypeLabel": "string",\
\
"isAvailable": true\
\
}\
\
],\
\
"dtCreated": "2019-08-24T14:15:22Z"\
\
}\
\
]

}`

## [tag/Public-IPs](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Public-IPs) Public IPs

## [tag/Public-IPs/operation/publicIps-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Public-IPs/operation/publicIps-list) List public IPs

Fetches a list of public IPs.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| region | string or string or string or string |

### Responses

**200**

Successful response

**default**

Error response

get/public-ips

https://api.paperspace.com/v1/public-ips

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"ip": "string",\
\
"region": "ny2",\
\
"assignedMachineId": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z"\
\
}\
\
]

}`

## [tag/Public-IPs/operation/publicIps-claim](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Public-IPs/operation/publicIps-claim) Claim a public IP

Claims a public IP.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| region<br>required | string or string or string or string<br>The region of the public IP. |

### Responses

**200**

Successful response

**default**

Error response

post/public-ips

https://api.paperspace.com/v1/public-ips

### Request samples

- Payload

Content type

application/json

Copy

`{"region": "ny2"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"ip": "string",

"region": "ny2",

"assignedMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Public-IPs/operation/publicIps-assign](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Public-IPs/operation/publicIps-assign) Assign a public IP

Assigns a public IP to a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| ip<br>required | string<br>The IP address of the public IP. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| machineId<br>required | string or null<br>The ID of the machine to assign the public IP to. |

### Responses

**200**

Successful response

**default**

Error response

put/public-ips/{ip}

https://api.paperspace.com/v1/public-ips/{ip}

### Request samples

- Payload

Content type

application/json

Copy

`{"machineId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"ip": "string",

"region": "ny2",

"assignedMachineId": "string",

"dtCreated": "2019-08-24T14:15:22Z"

}`

## [tag/Public-IPs/operation/publicIps-release](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Public-IPs/operation/publicIps-release) Release a public IP

Releases a public IP.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| ip<br>required | string<br>The IP address of the public IP. |

### Responses

**200**

Successful response

**default**

Error response

delete/public-ips/{ip}

https://api.paperspace.com/v1/public-ips/{ip}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"ip": "string"

}`

## [tag/Shared-Drives](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives) Shared Drives

## [tag/Shared-Drives/operation/sharedDrives-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives/operation/sharedDrives-get) Get a shared drive

Fetches a single shared drive by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the shared drive to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/shared-drives/{id}

https://api.paperspace.com/v1/shared-drives/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { },

"size": 0,

"mountPoint": "string",

"username": "string",

"password": "string",

"networkId": "string",

"region": "ny2"

}`

## [tag/Shared-Drives/operation/sharedDrives-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives/operation/sharedDrives-update) Update a shared drive

Updates a single shared drive by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the shared drive to fetch. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The name of the shared drive. |

### Responses

**200**

Successful response

**default**

Error response

put/shared-drives/{id}

https://api.paperspace.com/v1/shared-drives/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { },

"size": 0,

"mountPoint": "string",

"username": "string",

"password": "string",

"networkId": "string",

"region": "ny2"

}`

## [tag/Shared-Drives/operation/sharedDrives-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives/operation/sharedDrives-delete) Delete a shared drive

Deletes a single shared drive by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the shared drive to delete. |

### Responses

**200**

Successful response

**default**

Error response

delete/shared-drives/{id}

https://api.paperspace.com/v1/shared-drives/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/Shared-Drives/operation/sharedDrives-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives/operation/sharedDrives-list) List shared drives

Fetches a list of shared drives.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |
| region | string |

### Responses

**200**

Successful response

**default**

Error response

get/shared-drives

https://api.paperspace.com/v1/shared-drives

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": { },\
\
"size": 0,\
\
"mountPoint": "string",\
\
"username": "string",\
\
"password": "string",\
\
"networkId": "string",\
\
"region": "ny2"\
\
}\
\
]

}`

## [tag/Shared-Drives/operation/sharedDrives-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Shared-Drives/operation/sharedDrives-create) Create a shared drive

Creates a new shared drive for use in a private network.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the shared drive. |
| size<br>required | number or number or number or number or number or number or number or number or number or number or number<br>The size of the shared drive in gigabytes. |
| region<br>required | string<br>The region the shared drive is in. |
| networkId<br>required | string<br>The ID of the network the shared drive is in. |

### Responses

**200**

Successful response

**default**

Error response

post/shared-drives

https://api.paperspace.com/v1/shared-drives

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"size": 50,

"region": "string",

"networkId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": { },

"size": 0,

"mountPoint": "string",

"username": "string",

"password": "string",

"networkId": "string",

"region": "ny2"

}`

## [tag/Snapshots](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots) Snapshots

## [tag/Snapshots/operation/snapshots-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-get) Get a snapshot

Fetches a single snapshot by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the snapshot. |

### Responses

**200**

Successful response

**default**

Error response

get/snapshots/{id}

https://api.paperspace.com/v1/snapshots/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"machineId": "string",

"isAutoSnapshot": true

}`

## [tag/Snapshots/operation/snapshots-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-update) Update a snapshot

Updates a single snapshot by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the snapshot. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The updated name of the snapshot. |

### Responses

**200**

Successful response

**default**

Error response

put/snapshots/{id}

https://api.paperspace.com/v1/snapshots/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string",

"name": "string",

"machineId": "string",

"isAutoSnapshot": true

}`

## [tag/Snapshots/operation/snapshots-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-delete) Delete snapshot

Delete a snapshot for a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the snapshot. |

### Responses

**200**

Successful response

**default**

Error response

delete/snapshots/{id}

https://api.paperspace.com/v1/snapshots/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"machineId": "string",

"isAutoSnapshot": true

}

}`

## [tag/Snapshots/operation/snapshots-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-list) List snapshots

List snapshots and filter by machine.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| machineId | string |

### Responses

**200**

Successful response

**default**

Error response

get/snapshots

https://api.paperspace.com/v1/snapshots

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"machineId": "string",\
\
"isAutoSnapshot": true\
\
}\
\
]

}`

## [tag/Snapshots/operation/snapshots-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-create) Create snapshot

Create a snapshot for a machine.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the snapshot. |
| machineId<br>required | string<br>The ID of the machine to create a snapshot for. |

### Responses

**200**

Successful response

**default**

Error response

post/snapshots

https://api.paperspace.com/v1/snapshots

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"machineId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"machineId": "string",

"isAutoSnapshot": true

}

}`

## [tag/Snapshots/operation/snapshots-restore](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Snapshots/operation/snapshots-restore) Restore snapshot

Restore a snapshot for a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the snapshot. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| createSnapshotBeforeRestore | boolean<br>Create a new snapshot before restoring. |

### Responses

**200**

Successful response

**default**

Error response

post/snapshots/{id}/restore

https://api.paperspace.com/v1/snapshots/{id}/restore

### Request samples

- Payload

Content type

application/json

Copy

`{"createSnapshotBeforeRestore": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"event": {"id": "string",

"name": "bill-sessions",

"state": "new",

"machineId": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtStarted": "2019-08-24T14:15:22Z",

"dtFinished": "2019-08-24T14:15:22Z",

"error": "string"

},

"data": {"id": "string",

"name": "string",

"machineId": "string",

"isAutoSnapshot": true

}

}`

## [tag/Startup-Scripts](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts) Startup Scripts

## [tag/Startup-Scripts/operation/startupScripts-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-get) Get a startup script

Fetches a single startup script by ID.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the startup script to fetch. |

### Responses

**200**

Successful response

**default**

Error response

get/startup-scripts/{id}

https://api.paperspace.com/v1/startup-scripts/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Startup-Scripts/operation/startupScripts-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-update) Update startup script

Update a startup script.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the startup script. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name | string<br>The name of the startup script. |
| script | string<br>The script to run on startup. |
| isRunOnce | boolean<br>Whether the script should only run once on first boot or on every boot. |
| isEnabled | boolean<br>Whether the startup script is enabled. |

### Responses

**200**

Successful response

**default**

Error response

put/startup-scripts/{id}

https://api.paperspace.com/v1/startup-scripts/{id}

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"script": "string",

"isRunOnce": true,

"isEnabled": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Startup-Scripts/operation/startupScripts-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-delete) Delete startup script

Delete a startup script.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the startup script. |

### Responses

**200**

Successful response

**default**

Error response

delete/startup-scripts/{id}

https://api.paperspace.com/v1/startup-scripts/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Startup-Scripts/operation/startupScripts-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-list) List startup scripts

Fetches a list of startup scripts.

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Enum:"dtCreated""name"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| name | string |

### Responses

**200**

Successful response

**default**

Error response

get/startup-scripts

https://api.paperspace.com/v1/startup-scripts

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"description": "string",\
\
"isEnabled": true,\
\
"isRunOnce": true,\
\
"assignedMachineIds": ["string"\
\
],\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtDeleted": "2019-08-24T14:15:22Z"\
\
}\
\
]

}`

## [tag/Startup-Scripts/operation/startupScripts-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-create) Create startup script

Create a startup script.

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the startup script. |
| script<br>required | string<br>The script to run on startup. |
| isRunOnce | boolean<br>Default: false<br>Whether the script should only run once on first boot or on every boot. |

### Responses

**200**

Successful response

**default**

Error response

post/startup-scripts

https://api.paperspace.com/v1/startup-scripts

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"script": "string",

"isRunOnce": false

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Startup-Scripts/operation/startupScripts-assign](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-assign) Assign startup script to machine

Assign a startup script to a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the startup script. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| machineId<br>required | string<br>The id of the machine to assign the startup script to. |

### Responses

**200**

Successful response

**default**

Error response

post/startup-scripts/{id}/assign

https://api.paperspace.com/v1/startup-scripts/{id}/assign

### Request samples

- Payload

Content type

application/json

Copy

`{"machineId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Startup-Scripts/operation/startupScripts-unassign](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Startup-Scripts/operation/startupScripts-unassign) Unassign startup script from machine

Unassign a startup script from a machine.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The id of the startup script. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| machineId<br>required | string<br>The id of the machine to unassign the startup script from. |

### Responses

**200**

Successful response

**default**

Error response

post/startup-scripts/{id}/unassign

https://api.paperspace.com/v1/startup-scripts/{id}/unassign

### Request samples

- Payload

Content type

application/json

Copy

`{"machineId": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"description": "string",

"isEnabled": true,

"isRunOnce": true,

"assignedMachineIds": ["string"\
\
],

"dtCreated": "2019-08-24T14:15:22Z",

"dtDeleted": "2019-08-24T14:15:22Z"

}`

## [tag/Storage](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage) Storage

## [tag/Storage/operation/storageProviders-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageProviders-create) Create a storage provider

Create a storage provider

##### Authorizations:

_BearerAuth_

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the storage provider |
| storageProviderType<br>required | string<br>Value:"s3"<br>The type of storage provider |
| isTeamDefault | boolean<br>Is team default |
| s3Config<br>required | object<br>The storage provider configuration |

### Responses

**200**

Successful response

**default**

Error response

post/storage-providers

https://api.paperspace.com/v1/storage-providers

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"storageProviderType": "s3",

"isTeamDefault": true,

"s3Config": {"endpoint": null,

"bucket": "string",

"region": "ny2",

"accessKey": "string",

"secretAccessKey": "string",

"signatureVersion": "string",

"retainData": false

}

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"isTeamDefault": true,

"isManaged": true,

"s3Config": {"endpoint": null,

"bucket": "string",

"region": "ny2",

"accessKey": "string",

"secretAccessKey": "string",

"signatureVersion": "string",

"retainData": false

}

}`

## [tag/Storage/operation/storageProviders-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageProviders-list) List storage providers

List storage providers

##### Authorizations:

_BearerAuth_

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/storage-providers

https://api.paperspace.com/v1/storage-providers

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"id": "string",\
\
"name": "string",\
\
"isTeamDefault": true,\
\
"isManaged": true,\
\
"s3Config": {"endpoint": null,\
\
"bucket": "string",\
\
"region": "ny2",\
\
"accessKey": "string",\
\
"secretAccessKey": "string",\
\
"signatureVersion": "string",\
\
"retainData": false\
\
}\
\
}\
\
]

}`

## [tag/Storage/operation/storageProviders-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageProviders-update) Update a storage provider

Update a storage provider

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the storage provider |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string<br>The name of the storage provider |
| isTeamDefault | boolean<br>Is team default |
| s3Config<br>required | object<br>The storage provider configuration |

### Responses

**200**

Successful response

**default**

Error response

put/storage-providers/{id}

https://api.paperspace.com/v1/storage-providers/{id}

### Request samples

- Payload

Content type

application/json

Copy
Expand all  Collapse all

`{"name": "string",

"isTeamDefault": true,

"s3Config": {"endpoint": null,

"bucket": "string",

"region": "ny2",

"accessKey": "string",

"secretAccessKey": "string",

"signatureVersion": "string",

"retainData": false

}

}`

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"isTeamDefault": true,

"isManaged": true,

"s3Config": {"endpoint": null,

"bucket": "string",

"region": "ny2",

"accessKey": "string",

"secretAccessKey": "string",

"signatureVersion": "string",

"retainData": false

}

}`

## [tag/Storage/operation/storageProviders-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageProviders-get) Get a storage provider

Get a storage provider

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the storage provider |

### Responses

**200**

Successful response

**default**

Error response

get/storage-providers/{id}

https://api.paperspace.com/v1/storage-providers/{id}

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"id": "string",

"name": "string",

"isTeamDefault": true,

"isManaged": true,

"s3Config": {"endpoint": null,

"bucket": "string",

"region": "ny2",

"accessKey": "string",

"secretAccessKey": "string",

"signatureVersion": "string",

"retainData": false

}

}`

## [tag/Storage/operation/storageProviders-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageProviders-delete) Delete a storage provider

Delete a storage provider

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the storage provider |

### Responses

**200**

Successful response

**default**

Error response

delete/storage-providers/{id}

https://api.paperspace.com/v1/storage-providers/{id}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"id": "string"

}`

## [tag/Storage/operation/storageUtilization-getPublic](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Storage/operation/storageUtilization-getPublic) Get storage utilization

Get a breakdown of how storage is being used by your team

##### Authorizations:

_BearerAuth_

### Responses

**200**

Successful response

**default**

Error response

get/storage-providers/utilization

https://api.paperspace.com/v1/storage-providers/utilization

### Response samples

- 200
- default

Content type

application/json

Copy

`{"totalFreeStorage": "string",

"remainingFreeStorage": "string",

"totalUsage": "string",

"modelUsage": "string",

"datasetUsage": "string",

"sharedStorageUsage": "string",

"notebookWorkspaceUsage": "string"

}`

## [tag/Teams](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams) Teams

## [tag/Teams/operation/teamMemberships-listByTeamId](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamMemberships-listByTeamId) List team members

List team members

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtConfirmed"<br>Value:"dtConfirmed"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| role | string<br>Enum:"member""admin""owner"<br>Filter team members by their role on the team. |

### Responses

**200**

Successful response

**default**

Error response

get/teams/{teamId}/users

https://api.paperspace.com/v1/teams/{teamId}/users

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"isAdmin": true,\
\
"isOwner": true,\
\
"dtConfirmed": null,\
\
"user": {"id": "string",\
\
"email": "string",\
\
"firstName": null,\
\
"lastName": null,\
\
"publicProfileImageUrl": null,\
\
"lastActive": null\
\
}\
\
}\
\
]

}`

## [tag/Teams/operation/teamMemberships-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamMemberships-update) Update a team membership

Update a team membership

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |
| userId<br>required | string<br>The user's ID |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| isAdmin<br>required | boolean<br>Whether the user will gain admin access or not |

### Responses

**200**

Successful response

**default**

Error response

put/teams/{teamId}/users/{userId}

https://api.paperspace.com/v1/teams/{teamId}/users/{userId}

### Request samples

- Payload

Content type

application/json

Copy

`{"isAdmin": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"isOwner": true,

"isAdmin": true,

"dtConfirmed": null,

"dtDeleted": null

}`

## [tag/Teams/operation/teamMemberships-removeUser](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamMemberships-removeUser) Remove a user from a team

Remove a user from a team

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |
| userId<br>required | string<br>The user's ID |

### Responses

**200**

Successful response

**default**

Error response

delete/teams/{teamId}/users/{userId}

https://api.paperspace.com/v1/teams/{teamId}/users/{userId}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"isOwner": true,

"isAdmin": true,

"dtConfirmed": null,

"dtDeleted": null

}`

## [tag/Teams/operation/teamSecrets-list](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamSecrets-list) List a team's secrets

Fetches a list of secrets for a team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the team where the secret is stored. |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtCreated"<br>Value:"dtCreated"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |

### Responses

**200**

Successful response

**default**

Error response

get/teams/{id}/secrets

https://api.paperspace.com/v1/teams/{id}/secrets

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"name": "string",\
\
"dtCreated": "2019-08-24T14:15:22Z",\
\
"dtModified": "2019-08-24T14:15:22Z",\
\
"hasDeploymentAttached": true\
\
}\
\
]

}`

## [tag/Teams/operation/teamSecrets-create](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamSecrets-create) Create a team secret

Creates a new secret for a team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the team where the secret is stored. |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |
| value<br>required | string \[ 1 .. 8192 \] characters <br>The value of the secret, e.g. "password". |

### Responses

**200**

Successful response

**default**

Error response

post/teams/{id}/secrets

https://api.paperspace.com/v1/teams/{id}/secrets

### Request samples

- Payload

Content type

application/json

Copy

`{"name": "string",

"value": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z"

}`

## [tag/Teams/operation/teamSecrets-get](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamSecrets-get) Get a team secret

Fetches a secret for a team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the team where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

### Responses

**200**

Successful response

**default**

Error response

get/teams/{id}/secrets/{name}

https://api.paperspace.com/v1/teams/{id}/secrets/{name}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z",

"hasDeploymentAttached": true

}`

## [tag/Teams/operation/teamSecrets-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamSecrets-update) Update a team secret

Update the value of a secret for a team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the team where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| value<br>required | string \[ 1 .. 8192 \] characters <br>The value of the secret, e.g. "password". |

### Responses

**200**

Successful response

**default**

Error response

patch/teams/{id}/secrets/{name}

https://api.paperspace.com/v1/teams/{id}/secrets/{name}

### Request samples

- Payload

Content type

application/json

Copy

`{"value": "string"

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string",

"dtCreated": "2019-08-24T14:15:22Z",

"dtModified": "2019-08-24T14:15:22Z"

}`

## [tag/Teams/operation/teamSecrets-delete](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Teams/operation/teamSecrets-delete) Delete a team secret

Deletes a secret for a team.

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| id<br>required | string<br>The ID of the team where the secret is stored. |
| name<br>required | string \[ 1 .. 128 \] characters ^\[a-zA-Z\]\[a-zA-Z0-9\_\]\*$<br>The name of the secret, e.g. "DB\_PASSWORD". |

### Responses

**200**

Successful response

**default**

Error response

delete/teams/{id}/secrets/{name}

https://api.paperspace.com/v1/teams/{id}/secrets/{name}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"name": "string"

}`

## [tag/Users](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Users) Users

## [tag/Users/operation/teamMemberships-listByTeamId](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Users/operation/teamMemberships-listByTeamId) List team members

List team members

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |

##### query Parameters

|     |     |
| --- | --- |
| after | string<br>Fetch the next page of results after this cursor. |
| limit | integer \[ 1 .. 120 \] <br>The number of items to fetch after this page. |
| orderBy | string<br>Default: "dtConfirmed"<br>Value:"dtConfirmed"<br>Order results by one of these fields. |
| order | string<br>Default: "desc"<br>Enum:"asc""desc"<br>The order to sort the results by. |
| role | string<br>Enum:"member""admin""owner"<br>Filter team members by their role on the team. |

### Responses

**200**

Successful response

**default**

Error response

get/teams/{teamId}/users

https://api.paperspace.com/v1/teams/{teamId}/users

### Response samples

- 200
- default

Content type

application/json

Copy
Expand all  Collapse all

`{"hasMore": true,

"nextPage": "string",

"items": [{"isAdmin": true,\
\
"isOwner": true,\
\
"dtConfirmed": null,\
\
"user": {"id": "string",\
\
"email": "string",\
\
"firstName": null,\
\
"lastName": null,\
\
"publicProfileImageUrl": null,\
\
"lastActive": null\
\
}\
\
}\
\
]

}`

## [tag/Users/operation/teamMemberships-update](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Users/operation/teamMemberships-update) Update a team membership

Update a team membership

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |
| userId<br>required | string<br>The user's ID |

##### Request Body schema: application/json  required

|     |     |
| --- | --- |
| isAdmin<br>required | boolean<br>Whether the user will gain admin access or not |

### Responses

**200**

Successful response

**default**

Error response

put/teams/{teamId}/users/{userId}

https://api.paperspace.com/v1/teams/{teamId}/users/{userId}

### Request samples

- Payload

Content type

application/json

Copy

`{"isAdmin": true

}`

### Response samples

- 200
- default

Content type

application/json

Copy

`{"isOwner": true,

"isAdmin": true,

"dtConfirmed": null,

"dtDeleted": null

}`

## [tag/Users/operation/teamMemberships-removeUser](https://docs.digitalocean.com/reference/paperspace/api-reference/\#tag/Users/operation/teamMemberships-removeUser) Remove a user from a team

Remove a user from a team

##### Authorizations:

_BearerAuth_

##### path Parameters

|     |     |
| --- | --- |
| teamId<br>required | string<br>The team's ID |
| userId<br>required | string<br>The user's ID |

### Responses

**200**

Successful response

**default**

Error response

delete/teams/{teamId}/users/{userId}

https://api.paperspace.com/v1/teams/{teamId}/users/{userId}

### Response samples

- 200
- default

Content type

application/json

Copy

`{"isOwner": true,

"isAdmin": true,

"dtConfirmed": null,

"dtDeleted": null

}`

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)