---
url: "https://supabase.com/docs/reference/self-hosting-storage/update-the-object-at-an-existing-key"
title: "Self-Hosting | Supabase Docs"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Main menu

Self-Hosting Storage

- [Introduction](https://supabase.com/docs/reference/self-hosting-storage/introduction)
- * * *


Usage

  - [Create a bucket](https://supabase.com/docs/reference/self-hosting-storage/create-a-bucket)
  - [Gets all buckets](https://supabase.com/docs/reference/self-hosting-storage/gets-all-buckets)
  - [Empty a bucket](https://supabase.com/docs/reference/self-hosting-storage/empty-a-bucket)
  - [Get details of a bucket](https://supabase.com/docs/reference/self-hosting-storage/get-details-of-a-bucket)
  - [Update properties of a bucket](https://supabase.com/docs/reference/self-hosting-storage/update-properties-of-a-bucket)
  - [Delete a bucket](https://supabase.com/docs/reference/self-hosting-storage/delete-a-bucket)
  - [Delete an object](https://supabase.com/docs/reference/self-hosting-storage/delete-an-object)
  - [Get object](https://supabase.com/docs/reference/self-hosting-storage/get-object)
  - [Update the object at an existing key](https://supabase.com/docs/reference/self-hosting-storage/update-the-object-at-an-existing-key)
  - [Upload a new object](https://supabase.com/docs/reference/self-hosting-storage/upload-a-new-object)
  - [Delete multiple objects](https://supabase.com/docs/reference/self-hosting-storage/delete-multiple-objects)
  - [Retrieve an object](https://supabase.com/docs/reference/self-hosting-storage/retrieve-an-object)
  - [Generate a presigned url to retrieve an object](https://supabase.com/docs/reference/self-hosting-storage/generate-a-presigned-url-to-retrieve-an-object)
  - [Retrieve an object via a presigned URL](https://supabase.com/docs/reference/self-hosting-storage/retrieve-an-object-via-a-presigned-url)
  - [Generate presigned urls to retrieve objects](https://supabase.com/docs/reference/self-hosting-storage/generate-presigned-urls-to-retrieve-objects)
  - [Moves an object](https://supabase.com/docs/reference/self-hosting-storage/moves-an-object)
  - [Search for objects under a prefix](https://supabase.com/docs/reference/self-hosting-storage/search-for-objects-under-a-prefix)
  - [Retrieve object info](https://supabase.com/docs/reference/self-hosting-storage/retrieve-object-info)
  - [Copies an object](https://supabase.com/docs/reference/self-hosting-storage/copies-an-object)
  - [Retrieve an object from a public bucket](https://supabase.com/docs/reference/self-hosting-storage/retrieve-an-object-from-a-public-bucket)
  - [Get object info](https://supabase.com/docs/reference/self-hosting-storage/get-object-info)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

Storage Server Reference

# Self-Hosting Storage

An S3 compatible object storage service that integrates with Postgres.

- Uses Postgres as it's datastore for storing metadata
- Authorization rules are written as Postgres Row Level Security policies
- Integrates with S3 as the storage backend (with more in the pipeline!)
- Extremely lightweight and performant

### Client libraries [\#](https://supabase.com/docs/reference/self-hosting-storage/update-the-object-at-an-existing-key\#client-libraries)

- [JavaScript](https://github.com/supabase/storage-js)
- [Dart](https://github.com/supabase/storage-dart)

### Additional links [\#](https://supabase.com/docs/reference/self-hosting-storage/update-the-object-at-an-existing-key\#additional-links)

- [Source code](https://github.com/supabase/storage-api)
- [Known bugs and issues](https://github.com/supabase/storage-js/issues)
- [Storage guides](https://supabase.com/docs/guides/storage)
- [OpenAPI docs](https://supabase.github.io/storage/)
- [Why we built a new object storage service](https://supabase.com/blog/supabase-storage)

* * *

## Create a bucket

post`/bucket/`

### Body

application/json

- nameRequiredstring

- idOptionalstring

- publicOptionalboolean

- typeOptionalenum

Accepted values

- file\_size\_limitOptionalany of the following options

Options

- allowed\_mime\_typesOptionalArray<string>


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "name": "avatars"}
```

* * *

## Gets all buckets

get`/bucket/`

### Query parameters

- limitOptionalinteger

- offsetOptionalinteger

- sortColumnOptionalenum

Accepted values

- sortOrderOptionalenum

Accepted values

- searchOptionalstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15

[  {    "id": "bucket2",    "name": "bucket2",    "public": false,    "file_size_limit": 1000000,    "allowed_mime_types": [      "image/png",      "image/jpeg"    ],    "owner": "4d56e902-f0a0-4662-8448-a4d9e643c142",    "created_at": "2021-02-17T04:43:32.770206+00:00",    "updated_at": "2021-02-17T04:43:32.770206+00:00"  }]
```

* * *

## Empty a bucket

post`/bucket/{bucketId}/empty`

### Path parameters

- bucketIdRequiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "message": "Empty bucket has been queued. Completion may take up to an hour."}
```

* * *

## Get details of a bucket

get`/bucket/{bucketId}`

### Path parameters

- bucketIdRequiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7
8
9
10

{  "id": "lorem",  "name": "lorem",  "owner": "lorem",  "owner_id": "lorem",  "public": true,  "type": "STANDARD",  "created_at": "lorem",  "updated_at": "lorem"}
```

* * *

## Update properties of a bucket

put`/bucket/{bucketId}`

### Body

application/json

- publicOptionalboolean

- file\_size\_limitOptionalany of the following options

Options

- allowed\_mime\_typesOptionalArray<string>


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "message": "Successfully updated"}
```

* * *

## Delete a bucket

delete`/bucket/{bucketId}`

### Path parameters

- bucketIdRequiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "message": "Successfully deleted"}
```

* * *

## Delete an object

delete`/object/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "message": "Successfully deleted"}
```

* * *

## Get object

get`/object/{bucketName}/{wildcard}`

Serve objects

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 4XX

* * *

## Update the object at an existing key

put`/object/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4

{  "Id": "lorem",  "Key": "avatars/folder/cat.png"}
```

* * *

## Upload a new object

post`/object/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4

{  "Id": "lorem",  "Key": "avatars/folder/cat.png"}
```

* * *

## Delete multiple objects

delete`/object/{bucketName}`

### Path parameters

- bucketNameRequiredstring


### Body

application/json

- prefixesRequiredArray<string>


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14

[  {    "name": "folder/cat.png",    "bucket_id": "avatars",    "owner": "317eadce-631a-4429-a0bb-f19a7a517b4a",    "id": "eaa8bdb5-2e00-4767-b5a9-d2502efe2196",    "updated_at": "2021-04-06T16:30:35.394674+00:00",    "created_at": "2021-04-06T16:30:35.394674+00:00",    "last_accessed_at": "2021-04-06T16:30:35.394674+00:00",    "metadata": {      "size": 1234    }  }]
```

* * *

## Retrieve an object

get`/object/authenticated/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Query parameters

- downloadOptionalstring


### Response codes

- 4XX

* * *

## Generate a presigned url to retrieve an object

post`/object/sign/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Body

application/json

- expiresInRequiredinteger

- transformOptionalobject

Object schema


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "signedURL": "/object/sign/avatars/folder/cat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2ZvbGRlci9jYXQucG5nIiwiaWF0IjoxNjE3NzI2MjczLCJleHAiOjE2MTc3MjcyNzN9.s7Gt8ME80iREVxPhH01ZNv8oUn4XtaWsmiQ5csiUHn4"}
```

* * *

## Retrieve an object via a presigned URL

get`/object/sign/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Query parameters

- downloadOptionalstring

- tokenRequiredstring


### Response codes

- 4XX

* * *

## Generate presigned urls to retrieve objects

post`/object/sign/{bucketName}`

### Path parameters

- bucketNameRequiredstring


### Body

application/json

- expiresInRequiredinteger

- pathsRequiredArray<string>


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7

[  {    "error": "Either the object does not exist or you do not have access to it",    "path": "folder/cat.png",    "signedURL": "/object/sign/avatars/folder/cat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2ZvbGRlci9jYXQucG5nIiwiaWF0IjoxNjE3NzI2MjczLCJleHAiOjE2MTc3MjcyNzN9.s7Gt8ME80iREVxPhH01ZNv8oUn4XtaWsmiQ5csiUHn4"  }]
```

* * *

## Moves an object

post`/object/move`

### Body

application/json

- bucketIdRequiredstring

- sourceKeyRequiredstring

- destinationBucketOptionalstring

- destinationKeyRequiredstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3

{  "message": "Successfully moved"}
```

* * *

## Search for objects under a prefix

post`/object/list/{bucketName}`

### Path parameters

- bucketNameRequiredstring


### Body

application/json

- prefixRequiredstring

- limitOptionalinteger

- offsetOptionalinteger

- sortByOptionalobject

Object schema

- searchOptionalstring


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14

[  {    "name": "folder/cat.png",    "bucket_id": "avatars",    "owner": "317eadce-631a-4429-a0bb-f19a7a517b4a",    "id": "eaa8bdb5-2e00-4767-b5a9-d2502efe2196",    "updated_at": "2021-04-06T16:30:35.394674+00:00",    "created_at": "2021-04-06T16:30:35.394674+00:00",    "last_accessed_at": "2021-04-06T16:30:35.394674+00:00",    "metadata": {      "size": 1234    }  }]
```

* * *

## Retrieve object info

get`/object/info/{bucketName}/{wildcard}`

Object Info

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 4XX

* * *

## Copies an object

post`/object/copy`

### Body

application/json

- bucketIdRequiredstring

- sourceKeyRequiredstring

- destinationBucketOptionalstring

- destinationKeyRequiredstring

- metadataOptionalobject

Object schema

- copyMetadataOptionalboolean


### Response codes

- 200
- 4XX

### Response (200)

exampleschema

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28

{  "Id": "lorem",  "Key": "folder/destination.png",  "name": "lorem",  "bucket_id": "lorem",  "owner": "lorem",  "owner_id": "lorem",  "version": "lorem",  "id": "lorem",  "updated_at": "lorem",  "created_at": "lorem",  "last_accessed_at": "lorem",  "metadata": {},  "user_metadata": {},  "buckets": {    "id": "bucket2",    "name": "bucket2",    "public": false,    "file_size_limit": 1000000,    "allowed_mime_types": [      "image/png",      "image/jpeg"    ],    "owner": "4d56e902-f0a0-4662-8448-a4d9e643c142",    "created_at": "2021-02-17T04:43:32.770206+00:00",    "updated_at": "2021-02-17T04:43:32.770206+00:00"  }}
```

* * *

## Retrieve an object from a public bucket

get`/object/public/{bucketName}/{wildcard}`

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Query parameters

- downloadOptionalstring


### Response codes

- 4XX

* * *

## Get object info

get`/object/info/public/{bucketName}/{wildcard}`

returns object info

### Path parameters

- bucketNameRequiredstring

- \*Requiredstring


### Response codes

- 4XX

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)