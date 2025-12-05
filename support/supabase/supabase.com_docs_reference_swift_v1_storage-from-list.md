---
url: "https://supabase.com/docs/reference/swift/v1/storage-from-list"
title: "Swift API Reference | Supabase Docs"
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

swift
v1.0

- [Introduction](https://supabase.com/docs/reference/swift/v1/introduction)
- [Initializing](https://supabase.com/docs/reference/swift/v1/initializing)
- * * *


Database

  - [Fetch data](https://supabase.com/docs/reference/swift/v1/select)
  - [Insert data](https://supabase.com/docs/reference/swift/v1/insert)
  - [Update data](https://supabase.com/docs/reference/swift/v1/update)
  - [Upsert data](https://supabase.com/docs/reference/swift/v1/upsert)
  - [Delete data](https://supabase.com/docs/reference/swift/v1/delete)
  - [Call a Postgres function](https://supabase.com/docs/reference/swift/v1/rpc)
  - Using filters

  - Using modifiers
- * * *


Auth

  - [Overview](https://supabase.com/docs/reference/swift/v1/auth-api)
  - [Create a new user](https://supabase.com/docs/reference/swift/v1/auth-signup)
  - [Listen to auth events](https://supabase.com/docs/reference/swift/v1/auth-onauthstatechange)
  - [Sign in a user](https://supabase.com/docs/reference/swift/v1/auth-signinwithpassword)
  - [Sign in with ID token (native sign-in)](https://supabase.com/docs/reference/swift/v1/auth-signinwithidtoken)
  - [Sign in a user through OTP](https://supabase.com/docs/reference/swift/v1/auth-signinwithotp)
  - [Sign in a user through OAuth](https://supabase.com/docs/reference/swift/v1/auth-signinwithoauth)
  - [Sign out a user](https://supabase.com/docs/reference/swift/v1/auth-signout)
  - [Verify and log in through OTP](https://supabase.com/docs/reference/swift/v1/auth-verifyotp)
  - [Retrieve a session](https://supabase.com/docs/reference/swift/v1/auth-getsession)
  - [Retrieve a new session](https://supabase.com/docs/reference/swift/v1/auth-refreshsession)
  - [Retrieve a user](https://supabase.com/docs/reference/swift/v1/auth-getuser)
  - [Update a user](https://supabase.com/docs/reference/swift/v1/auth-updateuser)
  - [Set the session data](https://supabase.com/docs/reference/swift/v1/auth-setsession)
  - [Exchange an auth code for a session](https://supabase.com/docs/reference/swift/v1/auth-exchangecodeforsession)
  - Auth MFA
- * * *


Edge Functions

  - [Invokes a Supabase Edge Function.](https://supabase.com/docs/reference/swift/v1/functions-invoke)
- * * *


Realtime

  - [Subscribe to channel](https://supabase.com/docs/reference/swift/v1/subscribe)
  - [Unsubscribe from a channel](https://supabase.com/docs/reference/swift/v1/removechannel)
  - [Unsubscribe from all channels](https://supabase.com/docs/reference/swift/v1/removeallchannels)
  - [Retrieve all channels](https://supabase.com/docs/reference/swift/v1/getchannels)
  - [Broadcast a message](https://supabase.com/docs/reference/swift/v1/broadcastmessage)
- * * *


Storage

  - File Buckets



    [File Buckets](https://supabase.com/docs/reference/swift/v1/file-buckets) - [List all buckets](https://supabase.com/docs/reference/swift/v1/storage-listbuckets)
- [Retrieve a bucket](https://supabase.com/docs/reference/swift/v1/storage-getbucket)
- [Create a bucket](https://supabase.com/docs/reference/swift/v1/storage-createbucket)
- [Empty a bucket](https://supabase.com/docs/reference/swift/v1/storage-emptybucket)
- [Update a bucket](https://supabase.com/docs/reference/swift/v1/storage-updatebucket)
- [Delete a bucket](https://supabase.com/docs/reference/swift/v1/storage-deletebucket)
- [Upload a file](https://supabase.com/docs/reference/swift/v1/storage-from-upload)
- [Replace an existing file](https://supabase.com/docs/reference/swift/v1/storage-from-update)
- [Move an existing file](https://supabase.com/docs/reference/swift/v1/storage-from-move)
- [Copy an existing file](https://supabase.com/docs/reference/swift/v1/storage-from-copy)
- [Create a signed URL](https://supabase.com/docs/reference/swift/v1/storage-from-createsignedurl)
- [Retrieve public URL](https://supabase.com/docs/reference/swift/v1/storage-from-getpublicurl)
- [Download a file](https://supabase.com/docs/reference/swift/v1/storage-from-download)
- [Delete files in a bucket](https://supabase.com/docs/reference/swift/v1/storage-from-remove)
- [List all files in a bucket](https://supabase.com/docs/reference/swift/v1/storage-from-list)

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

Swift Reference v1.0

##### Version out of date

There's a newer version of this library! Migrate to the [newest version](https://supabase.com/docs/reference/swift).

# swift Client Library

supabase-swift [View on GitHub](https://github.com/supabase/supabase-swift)

This reference documents every object and method available in Supabase's Swift library, [supabase-swift](https://github.com/supabase/supabase-swift). You can use supabase-swift to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.

* * *

## Initializing

You can initialize Supabase with the `SupabaseClient` by passing your `Project URL` and `Project Key`. You can find these under your `Project Settings` → `API Settings` The Supabase client is your entrypoint to the rest of the Supabase functionality and is the easiest way to interact with everything we offer within the Supabase ecosystem.

Initialize ClientInitialize Client with custom options

```
1

let client = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
```

* * *

## Fetch data

- By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
- `select()` can be combined with [Modifiers](https://supabase.com/docs/reference/swift/using-modifiers)
- `select()` can be combined with [Filters](https://supabase.com/docs/reference/swift/using-filters)
- If using the Supabase hosted platform `apikey` is technically a reserved keyword, since the API gateway will pluck it out for authentication. [It should be avoided as a column name](https://github.com/supabase/supabase/issues/5465).
- The recommended solution for getting data is to use the value property which will return a decoded model. Create a `Codable` to easily decode your database responses.

Getting your dataSelecting specific columnsQuery foreign tablesQuery foreign tables through a join tableQuery the same foreign table multiple timesFiltering through foreign tablesQuerying foreign table with countQuerying with count optionQuerying JSON dataQuerying foreign table with inner join

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

struct Instrument: Decodable {  let id: Int  let name: String}let instruments: [Instrument] = try await supabase.database  .from("instruments")  .select()  .execute()  .value
```

Data source

Response

* * *

## Insert data

Create a recordCreate a record and return itBulk create

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

struct Instrument: Encodable {  let id: Int  let name: String}let instrument = Instrument(id: 1, name: "piano")try await supabase.database  .from("instruments")  .insert(instrument)  .execute()
```

Data source

Response

* * *

## Update data

- `update()` should always be combined with [Filters](https://supabase.com/docs/reference/swift/using-filters) to target the item(s) you wish to update.

Updating your dataUpdate a record and return itUpdating JSON data

```
1
2
3
4
5

try await supabase.database  .from("instruments")  .update(["name": "piano"])  .eq("id", value: 1)  .execute()
```

Data source

Response

* * *

## Upsert data

- Primary keys must be included in `values` to use upsert.

Upsert your dataBulk Upsert your dataUpserting into tables with constraints

```
1
2
3
4
5
6
7
8

struct Instrument: Encodable {  let id: Int  let name: String}try await supabase.database  .from("instruments")  .upsert(Instrument(id: 1, name: "piano"))  .execute()
```

Data source

Response

* * *

## Delete data

- `delete()` should always be combined with [filters](https://supabase.com/docs/reference/swift/using-filters) to target the item(s) you wish to delete.
- If you use `delete()` with filters and you have [RLS](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only rows visible through `SELECT` policies are deleted. Note that by default no rows are visible, so you need at least one `SELECT`/`ALL` policy that makes the rows visible.

Delete records

```
1
2
3
4
5

try await supabase.database  .from("instruments")  .delete()  .eq("id", value: 1)  .execute()
```

Data source

Response

* * *

## Call a Postgres function

You can call Postgres functions as _Remote Procedure Calls_, logic in your database that you can execute from anywhere. Functions are useful when the logic rarely changes—like for password resets and updates.

```
1
2
3

create or replace function hello_world() returns text as $$  select 'Hello world';$$ language sql;
```

Call a Postgres function without argumentsCall a Postgres function with argumentsBulk processingCall a Postgres function with filters

```
1
2
3
4

let value: String = try await supabase.database  .rpc("hello_world")  .execute()  .value
```

Data source

Response

* * *

## Using filters

Filters allow you to only return rows that match certain conditions.

Filters can be used on `select()`, `update()`, `upsert()`, and `delete()` queries.

If a Postgres function returns a table response, you can also apply filters.

Implement `URLQueryRepresentable` protocol in your own types to be able to use them as filter value.

Supported filtes are: `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `like`, `ilike`, `is`, `in`, `cs`, `cd`, `sl`, `sr`, `nxl`, `nxr`, `adj`, `ov`, `fts`, `plfts`, `phfts`, `wfts`. Check available operators in [PostgREST](https://postgrest.org/en/stable/references/api/tables_views.html#operators).

Applying FiltersChainingConditional ChainingFilter by values within a JSON columnFilter Foreign Tables

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

try await supabase.database  .from("cities")  .select("name, country_id")  .eq("name", value: "The Shire")    // Correcttry await supabase.database  .from("cities")  .eq("name", value: "The Shire")    // Incorrect  .select("name, country_id")
```

Notes

* * *

## Match an associated value

With \`select()\`

```
1
2
3
4

try await supabase.database  .from("instruments")  .select("name")  .match(["id": 2, "name": "viola"])
```

Data source

Response

* * *

## Don't match the filter

Finds all rows that don't satisfy the filter.

- `.not()` expects you to use the raw [PostgREST syntax](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for the filter names and values.



```
1
2
3
4
5

.not("name", operator: .eq, value: "violin").not("arraycol", operator: .cs, value: #"{"a","b"}"#) // Use Postgres array {} for array column and 'cs' for contains..not("rangecol", operator: .cs, value: "(1,2]") // Use Postgres range syntax for range column..not("id", operator: .in, value: "(6,7)")  // Use Postgres list () and 'in' for in_ filter..not("id", operator: .in, value: "(\(mylist.join(separator: ",")))")  // You can insert a Swift list array.
```


With \`select()\`

```
1
2
3
4
5

try await supabase.database  .from("instruments")  .select()  .not("name", operator: .is, value: "")  .execute()
```

* * *

## Match at least one filter

or() expects you to use the raw PostgREST syntax for the filter names and values.

```
1
2

.or(#"id.in.(5,6,7), arraycol.cs.{"a","b"}"#)  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`..or(#"id.in.(5,6,7), arraycol.cd.{"a","b"}"#)  // Use `cd` for `containedBy()`
```

With \`select()\`Use \`or\` with \`and\`

```
1
2
3
4

try await supabase.database  .from("instruments")  .select("name")  .or("id.eq.2,name.eq.cello")
```

Data source

Response

* * *

## Match the filter

filter() expects you to use the raw PostgREST syntax for the filter values.

```
1
2

.filter("id", operator: .in, value: "(5,6,7)")  // Use `()` for `in` filter.filter("arraycol", operator: .cs, value: #"{"a","b"}"#)  // Use `cs` for `contains()`, `{}` for array values
```

With \`select()\`On a foreign table

```
1
2
3
4

try await supabase.database  .from("instruments")  .select()  .filter("name", operator: .in, value: #"("cello","guzheng")"#)
```

Data source

Response

* * *

## Using modifiers

Filters work on the row level—they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g. returning a CSV string).

Modifiers must be specified after filters. Some modifiers only apply for queries that return rows (e.g., `select()` or `rpc()` on a function that returns a table response).

* * *

## Return data after inserting

Perform a SELECT on the query result.

With \`upsert()\`

```
1
2
3
4
5

try await database.database    .from("instruments")    .upsert(InstrumentModel(id: 1, name: "piano"))    .select()    .execute()
```

Data source

Response

* * *

## Order the results

Order the query result by column.

With \`select()\`On a foreign table

```
1
2
3
4
5

try await supabase.database  .from("instruments")  .select("id, name")  .order("id", ascending: false)  .execute()
```

Data source

Response

* * *

## Limit the number of rows returned

Limit the query result by count.

With \`select()\`On a foreign table

```
1
2
3
4
5

try await supabase.database  .from("instruments")  .select("id, name")  .limit(1)  .execute()
```

Data source

Response

* * *

## Limit the query to a range

Limit the query result by from and to inclusively.

With \`select()\`

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

try await supabase.database  .from("orchestral_sections")  .select(    """      name,      instruments (        name      )    """  )  .range(from: 0, to: 1)  .execute()
```

Data source

Response

* * *

## Retrieve one row of data

By default PostgREST returns all JSON results in an array, even when there is only one item, use `single()` to return the first object unenclosed by an array.

With \`select()\`

```
1
2
3
4
5
6

try await supabase.database  .from("instruments")  .select("name")  .limit(1)  .single()  .execute()
```

Data source

Response

* * *

## Retrieve as a CSV

Return data as CSV

```
1
2
3
4
5

try await supabase  .from("instruments")  .select()  .csv()  .execute()
```

Data source

Response

Notes

* * *

## Overview

- The auth methods can be accessed via the `supabase.auth` namespace.

Create auth clientCreate auth client with custom storage

```
1
2

let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")let auth = supabase.auth
```

* * *

## Create a new user

- By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](https://supabase.com/dashboard/project/_/auth/providers).
- **Confirm email** determines if users need to confirm their email address after signing up.

  - If **Confirm email** is enabled, a `user` is returned but `session` is null.
  - If **Confirm email** is disabled, both a `user` and a `session` are returned.
- When the user confirms their email address, they are redirected to the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](https://supabase.com/dashboard/project/_/auth/url-configuration).
- If signUp() is called for an existing confirmed user:
  - If **Confirm email** is enabled in [your project](https://supabase.com/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
  - If **Confirm email** is disabled, the error message, `User already registered` is returned.
- To fetch the currently logged-in user, refer to [`getUser()`](https://supabase.com/docs/reference/swift/get-user).

Sign upSign up with additional user metadataSign up with a redirect URL

```
1
2
3
4

try await supabase.auth.signUp(  email: "example@email.com",  password: "example-password")
```

* * *

## Listen to auth events

- Types of auth events: `INITIAL_SESSION`, `SIGNED_IN`, `SIGNED_OUT`, `TOKEN_REFRESHED`, `USER_UPDATED`, `PASSWORD_RECOVERY`, `MFA_CHALLENGE_VERIFIED`
- The `INITIAL_SESSION` can be used to allow you to invoke the callback function when `authStateChanges` is first called.

Listen to auth changesListen to a specific event

```
1
2
3

for await (event, session) in await supabase.auth.authStateChanges {  print(event, session)}
```

* * *

## Sign in a user

- Requires either an email and password or a phone number and password.

Sign in with email and passwordSign in with phone and password

```
1
2
3
4

try await supabase.auth.signIn(  email: "example@email.com",  password: "example-password")
```

* * *

## Sign in with ID token (native sign-in)

Sign In using ID Token

```
1
2
3
4
5
6
7

let session = try await supabase.auth.signInWithIdToken(  credentials: OpenIDConnectCredentials(    provider: .apple,    idToken: "your-id-token",    nonce: "your nonce"  ))
```

Notes

* * *

## Sign in a user through OTP

- This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
- If the user doesn't exist, `signInWithOTP()` will signup the user instead. To restrict this behavior, you can set `shouldCreateUser` to `false`.
- If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
- If you're using phone, you can configure whether you want the user to receive a OTP.
- The magic link's destination URL is determined by the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls).
- See [redirect URLs and wildcards](https://supabase.com/docs/guides/auth#redirect-urls-and-wildcards) to add additional redirect URLs to your project.
- Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](https://supabase.com/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.
- When using magic links, specify a `redirectTo` that matches a configured url scheme in your iOS app, so Supabase can correctly redirect back to your app.
- See our [Twilio Phone Auth Guide](https://supabase.com/docs/guides/auth/phone-login/twilio) for details about configuring WhatsApp sign in.

Sign in with emailSign in with SMS OTP

```
1
2
3
4

try await supabase.auth.signInWithOTP(  email: "example@email.com",  redirectTo: URL(string: "my-app-scheme://")!)
```

Notes

* * *

## Sign in a user through OAuth

- This method is used for signing in using a third-party provider.
- Supabase supports many different [third-party providers](https://supabase.com/docs/guides/auth#providers).

Sign in using a third-party providerSign in using a third-party provider with redirectSign in with scopes

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

let url = try await supabase.auth.getOAuthSignInURL(provider: .github)let session = ASWebAuthenticationSession(url: url, callbackURLScheme: "my-app-scheme") { url, error in  guard let url else { return }  Task {    try await supabase.auth.session(from: url)  }}session.presentationContextProvider = self // yours ASWebAuthenticationPresentationContextProviding implementation.session.start()
```

Notes

* * *

## Sign out a user

- In order to use the `signOut()` method, the user needs to be signed in first.

Sign out

```
1

try await supabase.auth.signOut()
```

* * *

## Verify and log in through OTP

- The `verifyOTP` method takes in different verification types. If a phone number is used, the type can either be `sms` or `phone_change`. If an email address is used, the type can be one of the following: `signup`, `magiclink`, `recovery`, `invite`, `email_change`, or `email`.
- The verification type used should be determined based on the corresponding auth method called before `verifyOTP` to sign up / sign-in a user.

Verify Sms One-Time Password (OTP)Verify Signup One-Time Password (OTP)

```
1
2
3
4
5

try await supabase.auth.verifyOTP(  phone: "+13334445555",  token: "123456",  type: .sms)
```

* * *

## Retrieve a session

- Returns the session, refreshing it if necessary. If no session can be found, a `GoTrueError.sessionNotFound` error is thrown.

Get the session data

```
1

try await supabase.auth.session
```

* * *

## Retrieve a new session

- This method will refresh the session whether the current one is expired or not.

Refresh session using the current sessionRefresh session using a refresh token

```
1

let session = try await supabase.auth.refreshSession()
```

* * *

## Retrieve a user

- This method is useful for checking if the user is authorized because it validates the user's access token JWT on the server.
- Fetches the user object from the database instead of local session.
- Should be used only when you require the most current user data. For faster results, `session.user` is recommended.

Get the logged in user with the current existing sessionGet the logged in user with a custom access token jwt

```
1

let user = try await supabase.auth.user()
```

* * *

## Update a user

- In order to use the `updateUser()` method, the user needs to be signed in first.
- By default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](https://supabase.com/dashboard/project/_/auth/providers).

Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadata

```
1

try await supabase.auth.update(user: UserAttributes(email: "new@email.com"))
```

Notes

* * *

## Set the session data

- `setSession()` takes in a refresh token and uses it to get a new session.
- The refresh token can only be used once to obtain a new session.
- [Refresh token rotation](https://supabase.com/docs/reference/auth/config#refresh_token_rotation_enabled) is enabled by default on all projects to guard against replay attacks.
- You can configure the [`REFRESH_TOKEN_REUSE_INTERVAL`](https://supabase.com/docs/reference/auth/config#refresh_token_reuse_interval) which provides a short window in which the same refresh token can be used multiple times in the event of concurrency or offline issues.

Refresh the session

```
1

try await supabase.auth.setSession(accessToken: "access_token", refreshToken: "refresh_token")
```

Notes

* * *

## Exchange an auth code for a session

- Used when `flowType` is set to `pkce` in client options.

Exchange Auth Code

```
1

try await supabase.auth.exchangeCodeForSession(authCode: "34e770dd-9ff9-416c-87fa-43b31d7ef225")
```

* * *

## Auth MFA

This section contains methods commonly used for Multi-Factor Authentication (MFA) and are invoked behind the `supabase.auth.mfa` namespace.

Currently, we only support time-based one-time password (TOTP) as the 2nd factor. We don't support recovery codes but we allow users to enroll more than 1 TOTP factor, with an upper limit of 10.

Having a 2nd TOTP factor for recovery frees the user of the burden of having to store their recovery codes somewhere. It also reduces the attack surface since multiple recovery codes are usually generated compared to just having 1 backup TOTP factor.

* * *

## Enroll a factor

- Currently, `totp` is the only supported `factorType`. The returned `id` should be used to create a challenge.
- To create a challenge, see [`mfa.challenge()`](https://supabase.com/docs/reference/swift/auth-mfa-challenge).
- To verify a challenge, see [`mfa.verify()`](https://supabase.com/docs/reference/swift/auth-mfa-verify).
- To create and verify a challenge in a single step, see [`mfa.challengeAndVerify()`](https://supabase.com/docs/reference/swift/auth-mfa-challengeandverify).

Enroll a time-based, one-time password (TOTP) factor

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

let response = try await supabase.auth.mfa.enroll(  params: MFAEnrollParams(    issuer: "optional issuer",    friendlyName: "optional friendly name"  ))// Use the id to create a challenge.// The challenge can be verified by entering the code generated from the authenticator app.// The code will be generated upon scanning the qrCode or entering the secret into the authenticator app.let id = response.idlet type = response.typelet qrCode = response.totp?.qrCodelet secret = response.totp?.secretlet uri = response.totp?.uri
```

* * *

## Create a challenge

- An [enrolled factor](https://supabase.com/docs/reference/swift/auth-mfa-enroll) is required before creating a challenge.
- To verify a challenge, see [`mfa.verify()`](https://supabase.com/docs/reference/swift/auth-mfa-verify).

Create a challenge for a factor

```
1
2
3
4
5

let response = try await supabase.auth.mfa.challenge(  params: MFAChallengeParams(    factorId: "34e770dd-9ff9-416c-87fa-43b31d7ef225"  ))
```

* * *

## Verify a challenge

- To verify a challenge, please [create a challenge](https://supabase.com/docs/reference/swift/auth-mfa-challenge) first.

Verify a challenge for a factor

```
1
2
3
4
5
6
7

let session = try await supabase.auth.mfa.verify(  params: MFAVerifyParams(    factorId: "34e770dd-9ff9-416c-87fa-43b31d7ef225",    challengeId: "4034ae6f-a8ce-4fb5-8ee5-69a5863a7c15",    code: "123456"  ))
```

* * *

## Create and verify a challenge

- An [enrolled factor](https://supabase.com/docs/swift/javascript/auth-mfa-enroll) is required before invoking `challengeAndVerify()`.
- Executes [`mfa.challenge()`](https://supabase.com/docs/reference/swift/auth-mfa-challenge) and [`mfa.verify()`](https://supabase.com/docs/reference/swift/auth-mfa-verify) in a single step.

Create and verify a challenge for a factor

```
1
2
3
4
5
6

let session = try await supabase.auth.mfa.challengeAndVerify(  params: MFAChallengeAndVerifyParams(    factorId: "34e770dd-9ff9-416c-87fa-43b31d7ef225",    code: "123456"  ))
```

* * *

## Unenroll a factor

Unenroll a factor

```
1
2
3
4
5

let response = try await supabase.auth.mfa.unenroll(  params: MFAUnenrollParams(    factorId: "34e770dd-9ff9-416c-87fa-43b31d7ef225"  ))
```

* * *

## Get Authenticator Assurance Level

- Authenticator Assurance Level (AAL) is the measure of the strength of an authentication mechanism.
- In Supabase, having an AAL of `aal1` refers to having the 1st factor of authentication such as an email and password or OAuth sign-in while `aal2` refers to the 2nd factor of authentication such as a time-based, one-time-password (TOTP).
- If the user has a verified factor, the `nextLevel` field will return `aal2`, else, it will return `aal1`.

Get the AAL details of a session

```
1
2
3
4

let aal = try await supabase.auth.mfa.getAuthenticatorAssuranceLevel()let currentLevel = aal.currentLevellet nextLevel = aal.nextLevellet currentAuthenticationMethods = aal.currentAuthenticationMethods
```

* * *

## Invokes a Supabase Edge Function.

Invoke a Supabase Edge Function.

- Requires an Authorization header.
- When you pass in a body to your function, we automatically attach the Content-Type header for `String`, and `Data`. If it doesn't match any of these types we assume the payload is `json`, serialize it and attach the `Content-Type` header as `application/json`. You can override this behaviour by passing in a `Content-Type` header of your own.

Invocation with \`Decodable\` responseInvocation with custom responseError handlingPassing custom headersCalling with DELETE HTTP verbCalling with GET HTTP verb

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

struct Response: Decodable {  // Expected response definition}let response: Response = try await supabase.functions  .invoke(    "hello",    options: FunctionInvokeOptions(      body: ["foo": "bar"]    )  )
```

* * *

## Subscribe to channel

- By default, Broadcast and Presence are enabled for all projects.
- By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](https://supabase.com/docs/guides/api#realtime-api-overview).
- You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
- Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.

Listen to broadcast messagesListen to presence syncListen to presence joinListen to presence leaveListen to all database changesListen to a specific tableListen to insertsListen to updatesListen to deletesListen to multiple eventsListen to row level changes

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

let channel = supabase  .realtime  .channel("room1")channel  .on("broadcast", filter: ChannelFilter(event: "cursor-pos")) { message in    print("Cursor position received!", message.payload)  }  .subscribe { status, error in    if status == .subscribed {      Task {        await channel.send(          type: .broadcast,          event: "cursor-pos",          payload: ["x": Double.random(in: 0...1), "y": Double.random(in: 0...1)]        )      }    }  }
```

* * *

## Unsubscribe from a channel

- Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Removes a channel

```
1

supabase.realtime.remove(myChannel)
```

* * *

## Unsubscribe from all channels

- Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove all channels

```
1

supabase.realtime.removeAllChannels()
```

* * *

## Retrieve all channels

Get all channels

```
1

let channels = supabase.realtime.channels
```

* * *

## Broadcast a message

Broadcast a message to all connected clients to a channel.

- When using REST you don't need to subscribe to the channel

Send a message via websocketSend a message via REST

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

supabase.realtime  .channel("room1")  .subscribe { status, error in    if status == .subscribed {      Task {        await channel.send(          type: "broadcast",          event: "cursor-pos",          payload: ["x": Double.random(in: 0...1), "y": Double.random(in: 0...1)]        )      }    }  }
```

* * *

## File Buckets

This section contains methods for working with File Buckets.

* * *

## List all buckets

- RLS policy permissions required:
  - `buckets` table permissions: `select`
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

List buckets

```
1
2

try await supabase.storage  .listBuckets()
```

* * *

## Retrieve a bucket

- RLS policy permissions required:
  - `buckets` table permissions: `select`
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Get bucket

```
1
2

let bucket = try await supabase.storage  .getBucket("avatars")
```

* * *

## Create a bucket

- RLS policy permissions required:
  - `buckets` table permissions: `insert`
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Create bucket

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

try await supabase.storage  .createBucket(    "avatars",    options: BucketOptions(      public: false,      allowedMimeTypes: ["image/png"],      fileSizeLimit: 1024    )  )
```

* * *

## Empty a bucket

- RLS policy permissions required:
  - `buckets` table permissions: `select`
  - `objects` table permissions: `select` and `delete`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Empty bucket

```
1
2

try await supabase.storage  .emptyBucket("avatars")
```

* * *

## Update a bucket

- RLS policy permissions required:
  - `buckets` table permissions: `select` and `update`
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Update bucket

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

try await supabase.storage  .updateBucket(    "avatars",    options: BucketOptions(      public: false,      fileSizeLimit: 1024,      allowedMimeTypes: ["image/png"]    )  )
```

* * *

## Delete a bucket

- RLS policy permissions required:
  - `buckets` table permissions: `select` and `delete`
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Delete bucket

```
1
2

try await supabase.storage  .deleteBucket("avatars")
```

* * *

## Upload a file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Upload file

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

let fileName = "avatar1.png"try await supabase.storage  .from("avatars")  .upload(    path: "public/\(fileName)",    file: fileData,    options: FileOptions(      cacheControl: "3600",      contentType: "image/png",      upsert: false    )  )
```

* * *

## Replace an existing file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `update` and `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Update file

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

let fileName = "avatar1.png"try await supabase.storage  .from("avatars")  .update(    path: "public/\(fileName)",    file: fileData,    options: FileOptions(      cacheControl: "3600",      contentType: "image/png",      upsert: true    )  )
```

* * *

## Move an existing file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `update` and `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Move file

```
1
2
3
4

try await supabase  .storage  .from("avatars")  .move(from: "public/avatar1.png", to: "private/avatar2.png")
```

* * *

## Copy an existing file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `insert` and `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Copy file

```
1
2
3
4

try await supabase  .storage  .from("avatars")  .copy(from: "public/avatar1.png", to: "private/avatar2.png")
```

* * *

## Create a signed URL

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Create Signed URLCreate a signed URL for an asset with transformationsCreate a signed URL which triggers the download of the asset

```
1
2
3

let signedURL = try await supabase.storage  .from("avatars")  .createSignedURL(path: "folder/avatar1.png", expiresIn: 60)
```

* * *

## Retrieve public URL

- The bucket needs to be set to public, either via [updateBucket()](https://supabase.com/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Returns the URL for an asset in a public bucketReturns the URL for an asset in a public bucket with transformationsReturns the URL which triggers the download of an asset in a public bucket

```
1
2
3

let publicURL = try supabase.storage  .from("public-bucket")  .getPublicURL(path: "folder/avatar1.png")
```

* * *

## Download a file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Download fileDownload file with transformations

```
1
2
3

let data = try await supabase.storage  .from("avatars")  .download(path: "folder/avatar1.png")
```

* * *

## Delete files in a bucket

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `delete` and `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Delete file

```
1
2
3

try await supabase.storage  .from("avatars")  .remove(paths: ["folder/avatar1.png"])
```

* * *

## List all files in a bucket

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

List files in a bucketSearch files in a bucket

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

let files = try await supabase.storage  .from("avatars")  .list(    path: "folder",    options: SearchOptions(      limit: 100,      offset: 0,      sortBy: SortBy(column: "name", order: "asc")    )  )
```

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)