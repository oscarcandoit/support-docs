---
source: https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors/
scraped_at: 2025-10-20T13:35:55.273Z
title: Untitled
description: 
category: api
---

Developer Center

Getting Started

Using Jobber’s API

Building Your App

Publishing Your App

App Template Project

Custom Integrations

Changelog

Terms of Service

# Handling API Errors

## [type nullability permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#type-nullability) Type Nullability

Queries which find by unique identifier will often be nullable as there's a
chance an item can't be found - because the item doesn't belong to the account,
the item doesn't exist or the item has been deleted. In the event an item cannot
be found - instead of causing the entire query to fail, only the requested field
will return `null`.

When you see the `!` operator within our GraphQL schema - it means there's a
chance the data will not return `null` and may not require as much error
handling and conditional logic. An argument which has the `!` operator is
required for query or mutation to occur.

Consider the following query:

```graphql
query SampleQuery($id: EncodedId!) {
  job(id: $id) {
    # Job
    id # EncodedId!
    title # String
  }
}

```

The `job` query will return a nullable `Job` type, which has two fields `id` and
`title`. You should expect to encounter the following result if the query
doesn't return a result:

```json
{
  "data": {
    "job": null
  }
}

```

or encounter the following if the title for a job is not defined:

```json
{
  "data": {
    "job": {
      "id": "MTIzNDU=",
      "title": null
    }
  }
}

```

## [scopes  permissions permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#scopes--permissions) Scopes & Permissions

Fields and types are secured by permissions and scopes - if you query for a
field or type which the user doesn't have access to or you're requesting
information not covered in your apps' scopes, it will result in an error like
this:

```json
{
  "data": null,
  "errors": [\
    {\
      "message": "The field jobs on an object of type Query was hidden due to permissions",\
      "locations": [\
        {\
          "line": 2,\
          "column": 3\
        }\
      ],\
      "path": ["jobs"]\
    }\
  ]
}

```

## [app level authorization permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#app-level-authorization) App-level Authorization

The user can choose to disconnect your app, in which case any queries you
attempt to perform on the user will result in the following error:

```json
{
  "message": "User has disconnected this app from their account. Please delete this token"
}

```

## [jobber preventative errors permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#jobber-preventative-errors) Jobber Preventative Errors

In some cases, there may be some issues in Jobber's own backend. In this case,
it is possible that apps which are known to make certain requests will be
temporarily disabled as we apply any necessary fixes on our end. In such a case,
some of your applications may receive the following error:

```json
{
  "message": "Service temporarily unavailable"
}

```

## [scalar coercion permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#scalar-coercion) Scalar Coercion

We have implemented custom scalars to better represent the underlying data and
enforce validation/formatting. If you provide invalid scalar values, you will
receive an error similar to the following one:

```json
{
  "errors": [\
    {\
      "message": "Variable $id of type EncodedId! was provided invalid value",\
      "locations": [\
        {\
          "line": 1,\
          "column": 19\
        }\
      ],\
      "extensions": {\
        "value": "1",\
        "problems": [\
          {\
            "path": [],\
            "explanation": "'1' is not a valid EncodedId",\
            "message": "'1' is not a valid EncodedId"\
          }\
        ]\
      }\
    }\
  ]
}

```

## [rate limiting errors permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#rate-limiting-errors) Rate-Limiting Errors

In order to ensure applications do not perform too many expensive queries,
negatively impacting the experience for other users and apps, a rate-limit is
used. If you hit the limit, you will encounter a "THROTTLED" error which is
documented [here](https://developer.getjobber.com/docs/using_jobbers_api/api_rate_limits) (under Requested
Query Cost)

## [inactive user error permalink](https://developer.getjobber.com/docs/using_jobbers_api/handling_api_errors\#inactive-user-error) Inactive User Error

If the connected Jobber account becomes inactive, your connected application
will no longer be able to make queries to the API. If you see the error below,
your application should consider the account as disconnected, and you should
stop making further queries or mutations on that access token.

```json
{
  "error": {
    "message": "This account is not active"
  }
}

```