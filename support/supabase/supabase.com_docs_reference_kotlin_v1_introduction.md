---
url: "https://supabase.com/docs/reference/kotlin/v1/introduction"
title: "Kotlin API Reference | Supabase Docs"
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

kotlin
v1.0

- [Introduction](https://supabase.com/docs/reference/kotlin/v1/introduction)
- [Initializing](https://supabase.com/docs/reference/kotlin/v1/initializing)
- * * *


Database

  - [Fetch data](https://supabase.com/docs/reference/kotlin/v1/select)
  - [Insert data](https://supabase.com/docs/reference/kotlin/v1/insert)
  - [Update data](https://supabase.com/docs/reference/kotlin/v1/update)
  - [Upsert data](https://supabase.com/docs/reference/kotlin/v1/upsert)
  - [Delete data](https://supabase.com/docs/reference/kotlin/v1/delete)
  - [Call a Postgres function](https://supabase.com/docs/reference/kotlin/v1/rpc)
  - Using filters
- * * *


Auth

  - [Overview](https://supabase.com/docs/reference/kotlin/v1/auth-api)
  - [Create a new user](https://supabase.com/docs/reference/kotlin/v1/auth-signup)
  - [Listen to auth events](https://supabase.com/docs/reference/kotlin/v1/auth-onauthstatechange)
  - [Sign in a user](https://supabase.com/docs/reference/kotlin/v1/auth-signinwithpassword)
  - [Sign in a user through OTP](https://supabase.com/docs/reference/kotlin/v1/auth-signinwithotp)
  - [Sign in a user through OAuth](https://supabase.com/docs/reference/kotlin/v1/auth-signinwithoauth)
  - [Sign in a user through SSO](https://supabase.com/docs/reference/kotlin/v1/auth-signinwithsso)
  - [Sign out a user](https://supabase.com/docs/reference/kotlin/v1/auth-signout)
  - [Send a password reset request](https://supabase.com/docs/reference/kotlin/v1/auth-resetpasswordforemail)
  - [Verify and log in through OTP](https://supabase.com/docs/reference/kotlin/v1/auth-verifyotp)
  - [Retrieve a session](https://supabase.com/docs/reference/kotlin/v1/auth-getsession)
  - [Retrieve a new session](https://supabase.com/docs/reference/kotlin/v1/auth-refreshsession)
  - [Retrieve a user](https://supabase.com/docs/reference/kotlin/v1/auth-getuser)
  - [Update a user](https://supabase.com/docs/reference/kotlin/v1/auth-updateuser)
  - [Send a password reauthentication nonce](https://supabase.com/docs/reference/kotlin/v1/auth-reauthentication)
  - [Resend an OTP](https://supabase.com/docs/reference/kotlin/v1/auth-resend)
  - [Set the session data](https://supabase.com/docs/reference/kotlin/v1/auth-setsession)
  - [Exchange an auth code for a session](https://supabase.com/docs/reference/kotlin/v1/auth-exchangecodeforsession)
  - Auth MFA

  - Auth Admin
- * * *


Edge Functions

  - [Invokes a Supabase Edge Function.](https://supabase.com/docs/reference/kotlin/v1/functions-invoke)
- * * *


Realtime

  - [Subscribe to channel](https://supabase.com/docs/reference/kotlin/v1/subscribe)
  - [Unsubscribe from a channel](https://supabase.com/docs/reference/kotlin/v1/removechannel)
  - [Unsubscribe from all channels](https://supabase.com/docs/reference/kotlin/v1/removeallchannels)
  - [Retrieve all channels](https://supabase.com/docs/reference/kotlin/v1/getchannels)
- * * *


Storage

  - File Buckets

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

Kotlin Reference v1.0

##### Version out of date

There's a newer version of this library! Migrate to the [newest version](https://supabase.com/docs/reference/kotlin).

# kotlin Client Library

@supabase-community/supabase-kt [View on GitHub](https://github.com/supabase-community/supabase-kt)

This reference documents every object and method available in Supabase's Kotlin Multiplatform library, [supabase-kt](https://github.com/supabase-community/supabase-kt). You can use supabase-kt to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.

To see supported Kotlin targets, check the corresponding module README on [GitHub](https://github.com/supabase-community/supabase-kt).

To migrate from version 1.4.X to 2.0.0, see the [migration guide](https://github.com/supabase-community/supabase-kt/blob/master/MIGRATION.md)

The Kotlin client library is created and maintained by the Supabase community, and is not an official library. Please be tolerant of areas where the library is still being developed, and — as with all the libraries — feel free to contribute wherever you find issues.

Huge thanks to official maintainer, [jan-tennert](https://github.com/jan-tennert).

* * *

## Initializing

### Create Supabase Client [\#](https://supabase.com/docs/reference/kotlin/v1/introduction\#create-supabase-client)

Independently of which Supabase module you are using, you will need to initialize the main client first and install the module.

To create a new client, you can use the `createSupabaseClient` function.

When installing a module, you can pass a block to configure it.

### OAuth and OTP link verification [\#](https://supabase.com/docs/reference/kotlin/v1/introduction\#oauth-and-otp-link-verification)

[supabase-kt](https://github.com/supabase-community/supabase-kt) provides several platform implementations for OAuth and OTP link verification.

**On JVM**, it uses a HTTP Callback Server to receive the session data from a successful OAuth login.

_Note: OTP link verification such as sign ups are not supported on JVM. You may have to send a verification token rather than a url in your E-Mail. To send the token, rather than a redirect url, you have to change `{{ .ConfirmationURL }}` in your sign up email to `{{ .Token }}`_

**On Android, IOS & macOS**, it uses deeplinks. Refer to the guide below on how to setup deeplinks. Alternatively you could use Native Google Auth or a WebView for OAuth. Refer to our [demo](https://github.com/supabase-community/supabase-kt/tree/master/demos/android-login) to learn more. **On JS**, it uses the website origin as the callback url. Session importing gets handled automatically. **Windows, tvOS, watchOS & Linux** currently have no default implementation. Feel free to create a PR.

You always make your own implementation and use `gotrue.parseSessionFromFragment(fragment)` or `gotrue.parseSessionFromUrl(url)` to let [supabase-kt](https://github.com/supabase-community/supabase-kt) handle the parsing after receiving a callback. Then you can simply use `gotrue.importSession(session)`.

### Configure deeplink callbacks for Authentication [\#](https://supabase.com/docs/reference/kotlin/v1/introduction\#configure-deeplink-callbacks-for-authentication)

Deeplinks are supported on Android, IOS and macOS.

1. **Setup a deeplink for you app**

On Android you may setup a [deeplink](https://developer.android.com/training/app-links/deep-linking) in your Android manifest.

On IOS & macOS you may setup a [url scheme](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app).
2. **Add your deeplink to the [redirect URLs](https://supabase.com/dashboard/project/_/auth/url-configuration)**

**Pattern**: scheme://host
3. **Configure the GoTrue plugin** You have to set the `host` and the `scheme` in the GoTrue config:


```
1
2
3
4
5
6
7

install(GoTrue) {   host = "deeplink host" // this can be anything, eg. your package name or app/company url (not your supabase url)   scheme = "deeplink scheme"   //Android only, you can also change that OAuth/SSO logins open in a custom tab, rather than an external browser:   defaultExternalAuthAction = ExternalAuthAction.CUSTOM_TABS //defaults to EXTERNAL_BROWSER}
```

4. **Call platform specific function on startup**

On Android: `supabase.handleDeeplinks(intent)`

On IOS/macOS: `supabase.handleDeeplinks(url)`

Then you can just login using OAuth:

```
1

supabase.gotrue.loginWith(Google)
```

Or open OTP links directly in your app.

### PKCE Authentication flow [\#](https://supabase.com/docs/reference/kotlin/v1/introduction\#pkce-authentication-flow)

supabase-kt supports the [PKCE authentication flow](https://supabase.com/blog/supabase-auth-sso-pkce). To use it, you just have to change the `flowType` in the GoTrue configuration:

```
1
2
3

install(GoTrue) {  flowType = FlowType.PKCE}
```

That's it! If you already implemented deeplinks to handle OTPs and OAuth you don't have to change anything!

Initialize ClientConfigure GoTrue moduleConfigure PostgREST moduleConfigure Storage moduleConfigure Realtime moduleConfigure Functions pluginConfigure GraphQL plugin

```
1
2
3
4
5
6
7
8

val supabase = createSupabaseClient(    supabaseUrl = "https://xyzcompany.supabase.co",    supabaseKey = "publishable-or-anon-key") {    install(GoTrue)    install(Postgrest)    //install other modules}
```

* * *

## Fetch data

Perform a SELECT query on the table or view.

- When calling a `decode` method, you have to provide a [serializable class](https://supabase.com/docs/reference/kotlin/installing#serialization) as the type parameter.
- You can provide a `Columns` object to select specific columns.
- You can provide a [filter](https://supabase.com/docs/reference/kotlin/using-filters) block to filter the results

Getting your dataSelecting specific columnsQuery foreign tablesQuery the same foreign table multiple timesQuerying with count optionQuerying JSON data

```
1

val city = supabase.postgrest["cities"].select().decodeSingle<City>()
```

* * *

## Insert data

- When calling an `insert` method, you have to provide a [serializable value](https://supabase.com/docs/reference/kotlin/installing#serialization).
- By default, every time you run `insert()`, the client library will make a `select` to return the full record. This is convenient, but it can also cause problems if your policies are not configured to allow the `select` operation. If you are using Row Level Security and you are encountering problems, try setting the `returning` param to `Returning.MINIMAL`.

Create a recordBulk createFetch inserted record

```
1
2

val city = City(name = "The Shire", countryId = 554)supabase.postgrest["cities"].insert(city, returning = Returning.MINIMAL) //returning defaults to Returning.REPRESENTATION
```

* * *

## Update data

- `update()` should always be combined with a [filter](https://supabase.com/docs/reference/kotlin/using-filters) block to avoid updating all records.
- When calling `insert` or `update`, you have to provide a [serializable value](https://supabase.com/docs/reference/kotlin/installing#serialization) in the function parameter.

Updating your dataUpdate a record and return itUpdating JSON data

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

supabase.postgrest["characters"].update(    {       Character::name setTo "Han Solo"       //or       set("name", "Han Solo")    }) {   Character::id eq 1   //or   eq("id", 1)}
```

* * *

## Upsert data

- Primary keys should be included in the data payload in order for an update to work correctly.
- Primary keys must be natural, not surrogate. There are however, [workarounds](https://github.com/PostgREST/postgrest/issues/1118) for surrogate primary keys.
- If you need to insert new data and update existing data at the same time, use [Postgres triggers](https://github.com/supabase/postgrest-js/issues/173#issuecomment-825124550).
- When calling `insert` or `update`, you have to provide a [serializable value](https://supabase.com/docs/reference/kotlin/installing#serialization) in the function parameter.

Upsert your dataUpserting into tables with constraintsReturn the exact number of rows

```
1
2

val toUpsert = Message(id = 3, message = "foo", username = "supabot")supabase.postgrest["messages"].insert(toUpsert, upsert = true)
```

* * *

## Delete data

- `delete()` should always be combined with a [filter](https://supabase.com/docs/reference/kotlin/using-filters) block to target the item(s) you wish to delete.
- If you use `delete()` with filters and you have [RLS](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only rows visible through `SELECT` policies are deleted. Note that by default no rows are visible, so you need at least one `SELECT`/`ALL` policy that makes the rows visible.

Delete recordsFetch deleted records

```
1
2
3
4
5

supabase.postgrest["cities"].delete {   City::id eq 666   //or   eq("id", 666)}
```

* * *

## Call a Postgres function

You can call stored procedures as a "Remote Procedure Call".

That's a fancy way of saying that you can put some logic into your database then call it from anywhere. It's especially useful when the logic rarely changes - like password resets and updates.

- When calling `rpc` with parameters, you have to provide a [serializable value](https://supabase.com/docs/reference/kotlin/installing#serialization) in the function parameter.

Call a stored procedureWith Parameters

```
1

supabase.postgrest.rpc("hello_world")
```

Notes

* * *

## Using filters

Filters allow you to only return rows that match certain conditions.

Filters can be used on `select()`, `update()`, and `delete()` queries.

You can use two different types for applying filters:

```
1

eq("country_id", 1)
```

And using a class property:

```
1

City::countryId eq 1
```

As you can see on the property syntax: the name of the `countryId` gets converted to `country_id`.

By default, this is done by converting camel case to snake case, but you can customize this by changing the `PropertyConversionMethod` in the Postgrest Config

If a database function returns a table response, you can also apply filters.

Applying a filter blockMultiple filters on one columnFilter by values within a JSON columnFilter Foreign Tables

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name", "country_id")) {    City::name eq "The Shire"    //or    eq("name", "The Shire")}
```

Notes

* * *

## Column is equal to a value

Finds all rows whose value on the stated `column` exactly matches the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name", "country_id")) {    City::name eq "The Shire"    //or    eq("name", "The Shire")}
```

* * *

## Column is not equal to a value

Finds all rows whose value on the stated `column` doesn't match the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name", "country_id")) {    City::name neq "The Shire"    //or    neq("name", "The Shire")}
```

* * *

## Column is greater than a value

Finds all rows whose value on the stated `column` is greater than the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::countryId gt 300   //or   gt("country_id", 300)}
```

* * *

## Column is greater than or equal to a value

Finds all rows whose value on the stated `column` is greater than or equal to the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::countryId gte 300   //or   gte("country_id", 300)}
```

* * *

## Column is less than a value

Finds all rows whose value on the stated `column` is less than the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::countryId lt 300   //or   lt("country_id", 300)}
```

* * *

## Column is less than or equal to a value

Finds all rows whose value on the stated `column` is less than or equal to the specified `value`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::countryId lte 300   //or   lte("country_id", 300)}
```

* * *

## Column matches a pattern

Finds all rows whose value in the stated `column` matches the supplied `pattern` (case sensitive).

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::name like "%la%"   //or   like("name", "%la%")}
```

* * *

## Column matches a case-insensitive pattern

Finds all rows whose value in the stated `column` matches the supplied `pattern` (case insensitive).

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::name ilike "%la%"   //or   ilike("name", "%la%")}
```

* * *

## Column is a value

A check for exact equality (null, true, false), finds all rows whose value on the stated `column` exactly match the specified `value`.

`is_` and `in_` filter methods are suffixed with `_` to avoid collisions with reserved keywords.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::name isExact null   //or   exact("name", null)}
```

* * *

## Column is in an array

Finds all rows whose value on the stated `column` is found on the specified `values`.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::name isIn listOf("The Shire", "Mordor")   //or   isIn("name", listOf("The Shire", "Mordor"))}
```

* * *

## Column contains every element in a value

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4
5

supabase.postgrest["cities"].select(columns = Columns.list("name")) {   City::mainExports contains listOf("oil")   //or   contains("main_exports", listOf("oil"))}
```

* * *

## Greater than a range

Only relevant for range columns. Match only rows where every element in column is greater than any element in range.

With \`select()\`

```
1
2
3
4
5

supabase.postgrest["reservations"].select {     Reservation::during rangeGt ("2000-01-02 08:30" to "2000-01-02 09:30")     //or     rangeGt("during", "2000-01-02 08:30" to "2000-01-02 09:30")  }
```

Data source

Response

Notes

* * *

## Greater than or equal to a range

Only relevant for range columns. Match only rows where every element in column is either contained in range or greater than any element in range.

With \`select()\`

```
1
2
3
4
5

supabase.postgrest["reservations"].select {     Reservation::during rangeGte ("2000-01-02 08:30" to "2000-01-02 09:30")     //or     rangeGte("during", "2000-01-02 08:30" to "2000-01-02 09:30")  }
```

Data source

Response

Notes

* * *

## Less than a range

Only relevant for range columns. Match only rows where every element in column is less than any element in range.

With \`select()\`

```
1
2
3
4
5

supabase.postgrest["reservations"].select {     Reservation::during rangeLt ("2000-01-02 08:30" to "2000-01-02 09:30")     //or     rangeLt("during", "2000-01-02 08:30" to "2000-01-02 09:30")  }
```

Data source

Response

Notes

* * *

## Less than or equal to a range

Only relevant for range columns. Match only rows where every element in column is either contained in range or less than any element in range.

With \`select()\`

```
1
2
3
4
5

supabase.postgrest["reservations"].select {     Reservation::during rangeLte ("2000-01-02 08:30" to "2000-01-02 09:30")     //or     rangeLte("during", "2000-01-02 08:30" to "2000-01-02 09:30")  }
```

Data source

Response

Notes

* * *

## Mutually exclusive to a range

Only relevant for range columns. Match only rows where column is mutually exclusive to range and there can be no element between the two ranges.

With \`select()\`

```
1
2
3
4
5

supabase.postgrest["reservations"].select {     Reservation::during adjacent ("2000-01-02 08:30" to "2000-01-02 09:30")     //or     adjacent("during", "2000-01-02 08:30" to "2000-01-02 09:30")  }
```

Data source

Response

* * *

## With a common element

Only relevant for array and range columns. Match only rows where column and value have an element in common.

On array columnsOn range columns

```
1
2
3
4
5

supabase.postgrest["issues"].select(columns = Columns.list("title")) {   Issue::tags overlaps listOf("is:closed", "severity:high")   //or   overlaps("tags", listOf("is:closed", "severity:high"))}
```

Data source

Response

* * *

## Match a string

Only relevant for text and tsvector columns. Match only rows where `column` matches the query string in `query`.

For more information, see [Postgres full text search](https://supabase.com/docs/guides/database/full-text-search).

Text searchBasic normalizationFull normalizationWebsearch

```
1
2
3

supabase.postgrest["quotes"].select(columns = Columns.list("catchphrase")) {   textSearch(column = "catchphrase", query = "'fat' & 'cat'", config = "english", type = TextSearchType.YOUR_TYPE)}
```

* * *

## Don't match the filter

Finds all rows that don't satisfy the filter.

- `.filterNot()` expects you to use the raw [PostgREST syntax](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for the filter names and values.

With \`select()\`

```
1
2
3

supabase.postgrest["countries"].select {    filterNot("name", FilterOperation.IS, "")}
```

* * *

## Match at least one filter

Finds all rows satisfying at least one of the filters.

With \`select()\`Use \`or\` with \`and\`

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

supabase.postgrest["countries"].select(columns = Columns.list("name")) {    or {        Country::id eq 2        Country::name eq "Mordor"        //or        eq("id", 2)        eq("name", "Mordor")    }}
```

* * *

## Match the filter

filter() expects you to use the raw PostgREST syntax for the filter values.

With \`select()\`On a foreign table

```
1
2
3

supabase.postgrest["characters"].select {   filter(column = "name", operator = FilterOperator.IN, value = "('Han', 'Katniss')")}
```

Data source

Response

* * *

## Overview

- The auth methods can be accessed via the Supabase GoTrue Auth client.

Create gotrue client

```
1
2

val supabase = createSupabaseClient(supabaseURL = "https://xyzcompany.supabase.co'", supabaseKey = "publishable-or-anon-key") { ... }val gotrue = supabase.gotrue
```

* * *

## Create a new user

Creates a new user.

- By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](https://supabase.com/dashboard/project/_/auth/providers).
- **Confirm email** determines if users need to confirm their email address after signing up.
  - If **Confirm email** is enabled, the return value is the user and you won't be logged in automatically.
  - If **Confirm email** is disabled, the return value is null and you will be logged in instead.
- When the user confirms their email address, they are redirected to the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](https://supabase.com/dashboard/project/_/auth/url-configuration).
- To learn how to handle OTP links & OAuth refer to [initializing](https://supabase.com/docs/reference/kotlin/initializing)
- If signUpWith() is called for an existing confirmed user:
  - If **Confirm email** is enabled in [your project](https://supabase.com/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
  - If **Confirm email** is disabled, the error message, `User already registered` is returned.

Sign up with emailSign up with a phone numberSign up with additional user metadataSign up with a redirect URL

```
1
2
3
4

val user = supabase.gotrue.signUpWith(Email) {    email = "example@email.com"    password = "example-password"}
```

* * *

## Listen to auth events

Listen to session changes.

Listen to auth changes

```
1
2
3
4
5
6
7
8

supabase.gotrue.sessionStatus.collect {    when(it) {        is SessionStatus.Authenticated -> println(it.session.user)        SessionStatus.LoadingFromStorage -> println("Loading from storage")        SessionStatus.NetworkError -> println("Network error")        SessionStatus.NotAuthenticated -> println("Not authenticated")    }}
```

Notes

* * *

## Sign in a user

Logs in an existing user.

- Requires either an email and password or a phone number and password.

Sign in with email and passwordSign in with phone and passwordSign in with id token

```
1
2
3
4

supabase.gotrue.loginWith(Email) {    email = "example@email.com"    password = "example-password"}
```

* * *

## Sign in a user through OTP

Sends a OTP to the user's email or phone number.

- Requires either an email or phone number.
- This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
- If the user doesn't exist, `sendOtpTo()` will signup the user instead. To restrict this behavior, you can set `createUser` to `false`.
- If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
- If you're using phone, you can configure whether you want the user to receive a OTP.
- The magic link's destination URL is determined by the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls).
- See [redirect URLs and wildcards](https://supabase.com/docs/guides/auth/overview#redirect-urls-and-wildcards) to add additional redirect URLs to your project.
- To learn how to handle OTP links & OAuth refer to [initializing](https://supabase.com/docs/reference/kotlin/initializing)
- Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](https://supabase.com/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.

Sign in with emailSign in with SMS OTP

```
1
2
3

supabase.gotrue.sendOtpTo(Email) {    email = "example@email.com"}
```

Notes

* * *

## Sign in a user through OAuth

- This method is used for signing in using a third-party provider.
- Supabase supports many different [third-party providers](https://supabase.com/docs/guides/auth#providers).
- To learn how to handle OTP links & OAuth refer to [initializing](https://supabase.com/docs/reference/kotlin/initializing)

Sign in using a third-party providerSign in using a third-party provider with scopesCreate a custom urlCreate a custom url with scopes

```
1

supabase.gotrue.loginWith(Github)
```

* * *

## Sign in a user through SSO

- Before you can call this method you need to [establish a connection](https://supabase.com/docs/guides/auth/sso/auth-sso-saml#managing-saml-20-connections) to an identity provider. Use the [CLI commands](https://supabase.com/docs/reference/cli/supabase-sso) to do this.
- If you've associated an email domain to the identity provider, you can use the `SSO.withDomain()` function in the `loginWith` method to start a sign-in flow.
- In case you need to use a different way to start the authentication flow with an identity provider, you can use the `SSO.withProviderId` function. For example:
  - Mapping specific user email addresses with an identity provider.
  - Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
- To learn how to handle OTP links & OAuth refer to [initializing](https://supabase.com/docs/reference/kotlin/initializing)

Sign in with email domainSign in with provider UUID

```
1
2
3
4
5
6

// You can extract the user's email domain and use it to trigger the  // authentication flow with the correct identity provider.  supabase.gotrue.loginWith(SSO.withDomain("company.com"))  //the url was opened automatically, if you don't want that, provide a custom redirect url
```

* * *

## Sign out a user

Logs out the current user.

- In order to use the `logout()` method, the user needs to be signed in first.

Sign outSign out all sessionsSign out all sessions except the current

```
1

supabase.gotrue.logout()
```

* * *

## Send a password reset request

Sends a password reset request to the given email address.

- The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
- The `sendRecoveryEmail()` only sends a password reset link to the user's email. To update the user's password, see [`modifyUser()`](https://supabase.com/docs/reference/kotlin/auth-updateuser).
- The user gets redirected back to your app, assuming you setup [OTP handling](https://supabase.com/docs/reference/kotlin/initializing)
- After the user has been redirected successfully, prompt them for a new password and call `modifyUser()`:


```
1
2
3

supabase.gotrue.modifyUser {    password = "1234567"}
```


Send password reset email

```
1

supabase.gotrue.sendRecoveryEmail(email = "example@email.com")
```

* * *

## Verify and log in through OTP

Log in a user given a User supplied OTP received via mobile.

Verify an Email OTPVerify an Phone OTP

```
1

supabase.gotrue.verifyEmailOtp(type = OtpType.Email.INVITE, email = "example@email.com", token = "token")
```

Notes

* * *

## Retrieve a session

Returns the current session, or `null` if there is none.

Get the session data

```
1

val session = supabase.gotrue.currentSessionOrNull()
```

* * *

## Retrieve a new session

This method will refresh the session whether the current one is expired or not.

- This is done automatically, but can be disabled in the GoTrue config.

Refresh current sessionRefresh session using the refresh token

```
1

val session = supabase.gotrue.refreshCurrentSession()
```

* * *

## Retrieve a user

- This method gets the user object from the current session.
- Fetches the user object from the database instead of local session.
- Should be used only when you require the most current user data. For faster results, `getCurrentSessionOrNull()?.user` is recommended.

Get the logged in user with the current sessionGet a user based on their access token

```
1

val user = supabase.gotrue.retrieveUserForCurrentSession(updateSession = true)
```

Notes

* * *

## Update a user

Modifies the user data.

- In order to use the `modifyUser()` method, the user needs to be signed in first.
- By default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](https://supabase.com/dashboard/project/_/auth/providers).

Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadata

```
1
2
3

val user = supabase.gotrue.modifyUser {   email = "newEmail@email.com"}
```

Notes

* * *

## Send a password reauthentication nonce

- This method is used together with `modifyUser()` when a user's password needs to be updated.
- This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.

Send reauthentication nonce

```
1

supabase.gotrue.reauthenticate()
```

Notes

* * *

## Resend an OTP

- Resends a signup confirmation, email change or phone change email to the user.
- Passwordless sign-ins can be resent by calling the `sendOtpTo()` method again.
- Password recovery emails can be resent by calling the `sendRecoveryEmail()` method again.
- This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made.

Resend an email signup confirmationResend a phone signup confirmationResend email change emailResend phone change OTP

```
1

supabase.gotrue.resendEmail(OtpType.Email.SIGNUP, "example@email.com")
```

Notes

* * *

## Set the session data

Changes the local session.

- `importSession()` takes in a UserSession.
- [Refresh token rotation](https://supabase.com/docs/reference/auth/config#refresh_token_rotation_enabled) is enabled by default on all projects to guard against replay attacks.
- You can configure the [`REFRESH_TOKEN_REUSE_INTERVAL`](https://supabase.com/docs/reference/auth/config#refresh_token_reuse_interval) which provides a short window in which the same refresh token can be used multiple times in the event of concurrency or offline issues.

Set local session

```
1

supabase.gotrue.importSession(UserSession(accessToken = "token", refreshToken = "refresh", expiresIn = 2000, tokenType = "Bearer", user = null))
```

Notes

* * *

## Exchange an auth code for a session

- Used when `flowType` is set to `FlowType.PKCE` in the GoTrue configuration.

Exchange Auth Code

```
1

supabase.gotrue.exchangeCodeForSession("34e770dd-9ff9-416c-87fa-43b31d7ef225")
```

* * *

## Auth MFA

This section contains methods commonly used for Multi-Factor Authentication (MFA) and are invoked behind the `supabase.gotrue.mfa` namespace.

Currently, we only support time-based one-time password (TOTP) as the 2nd factor. We don't support recovery codes but we allow users to enroll more than 1 TOTP factor, with an upper limit of 10.

Having a 2nd TOTP factor for recovery frees the user of the burden of having to store their recovery codes somewhere. It also reduces the attack surface since multiple recovery codes are usually generated compared to just having 1 backup TOTP factor.

* * *

## Enroll a factor

Enrolls a new factor.

- Currently, `totp` is the only supported `factorType`. The returned `id` should be used to create a challenge.
- To create a challenge, see [`mfa.createChallenge()`](https://supabase.com/docs/reference/kotlin/auth-mfa-challenge).
- To verify a challenge, see [`mfa.verifyChallenge()`](https://supabase.com/docs/reference/kotlin/auth-mfa-verify).
- To create and verify a challenge in a single step, see [`mfa.createChallengeAndVerify()`](https://supabase.com/docs/reference/kotlin/auth-mfa-challengeandverify).

Enroll a time-based, one-time password (TOTP) factorCheck the local user for verified factorsRetrieve verified factors

```
1
2
3
4
5
6
7

val factor = supabase.gotrue.mfa.enroll(factorType = FactorType.TOTP)// Use the id to create a challenge.// The challenge can be verified by entering the code generated from the authenticator app.// The code will be generated upon scanning the qr_code or entering the secret into the authenticator app.val (id, type, qrCode) = factor.data //qrCode is a svg as a stringval (factorId, factorType, _) = factor
```

* * *

## Create a challenge

Creates a challenge for a factor.

- An [enrolled factor](https://supabase.com/docs/reference/kotlin/auth-mfa-enroll) is required before creating a challenge.
- To verify a challenge, see [`mfa.verifyChallenge()`](https://supabase.com/docs/reference/kotlin/auth-mfa-verify).

Create a challenge for a factor

```
1

val challenge = supabase.gotrue.mfa.createChallenge(factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225")
```

* * *

## Verify a challenge

Verifies a challenge for a factor.

- To verify a challenge, please [create a challenge](https://supabase.com/docs/reference/kotlin/auth-mfa-challenge) first.

Verify a challenge for a factor

```
1
2
3
4
5
6

supabase.gotrue.mfa.verifyChallenge(    factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225",    challengeId = "4034ae6f-a8ce-4fb5-8ee5-69a5863a7c15",    code = "123456",    saveSession = true // this is set to true by default, but you can set it to false if you want to handle the session yourself)
```

* * *

## Create and verify a challenge

Creates and verifies a challenge for a factor.

- An [enrolled factor](https://supabase.com/docs/reference/kotlin/auth-mfa-enroll) is required before invoking `createChallengeAndVerify()`.
- Executes [`mfa.createChallenge()`](https://supabase.com/docs/reference/kotlin/auth-mfa-challenge) and [`mfa.verifyChallenge()`](https://supabase.com/docs/reference/kotlin/auth-mfa-verify) in a single step.

Create and verify a challenge for a factor

```
1
2
3
4
5

supabase.gotrue.mfa.createChallengeAndVerify(    factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225",    code = "123456",    saveSession = true // this is set to true by default, but you can set it to false if you want to handle the session yourself)
```

* * *

## Unenroll a factor

Unenroll removes a MFA factor. A user has to have an `AAL2` authentication level in order to unenroll a verified factor.

Unenroll a factor

```
1

supabase.gotrue.mfa.unenroll(factorId = "34e770dd-9ff9-416c-87fa-43b31d7ef225")
```

* * *

## Get Authenticator Assurance Level

- Authenticator Assurance Level (AAL) is the measure of the strength of an authentication mechanism.
- In Supabase, having an AAL of `aal1` refers to having the 1st factor of authentication such as an email and password or OAuth sign-in while `aal2` refers to the 2nd factor of authentication such as a time-based, one-time-password (TOTP).
- If the user has a verified factor, the `next` field will return `AuthenticatorAssuranceLevel.AAL2`, else, it will return `AuthenticatorAssuranceLevel.AAL1`.

Get the AAL details of the current sessionCheck whether the user has at least one verified factorCheck whether the user is logged in using AAL2

```
1

val (current, next) = supabase.gotrue.mfa.getAuthenticatorAssuranceLevel()
```

* * *

## Auth Admin

- Any method under the `supabase.gotrue.admin` namespace requires a `service_role` key.
- These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.

Create server-side auth client

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

val supabase = createSupabaseClient(    supabaseUrl = "https://id.supabase.co",    supabaseKey = "supabaseKey") {    install(GoTrue) {        autoLoadFromStorage = false        alwaysAutoRefresh = false    }    // install other plugins (these will use the service role key)}supabase.gotrue.importAuthToken("service_role")// Access auth admin apival adminGoTrueClient = supabase.gotrue.admin
```

* * *

## Retrieve a user

Fetches the user object from the database based on the user's id.

- The `retrieveUserById()` method requires the user's id which maps to the `auth.users.id` column.

Fetch the user object using the access\_token jwt

```
1

val user = supabase.gotrue.admin.retrieveUserById(uid = "f2a0b0a0-6b1a-4b7a-8f1a-4b7a6b1a8f1a")
```

* * *

## List all users

Retrieves a list of users.

- Defaults to return 50 users per page.

Get a page of usersPaginated list of users

```
1

val users = supabase.gotrue.admin.retrieveUsers()
```

* * *

## Create a user

Creates a new user.

- To confirm the user's email address or phone number, set `autoConfirm` to true. Both arguments default to false.

Create user with emailCreate user with phoneAuto-confirm the user's emailAuto-confirm the user's phone number

```
1
2
3
4
5
6
7

val userWithEmail = supabase.gotrue.admin.createUserWithEmail {    email = "example@email.com"    password = "secretpassword"    userMetadata {        put("name", "John")    }}
```

* * *

## Delete a user

Deletes a user from the database.

- The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.

Removes a user

```
1

supabase.gotrue.admin.deleteUser(uid = "uid")
```

* * *

## Send an email invite link

Sends an invite link to the user's email address.

Invite a user

```
1
2
3
4
5
6
7
8

supabase.gotrue.admin.inviteUserByEmail(    email = "example@email.com",    //optional:    redirectTo = "https://example.com/redirect",    data = buildJsonObject {        put("custom", "value")    })
```

* * *

## Generate an email link

Generates email links and OTPs. This will not send links or OTPs to the end user. This function is for custom admin functionality.

Generate a signup linkGenerate an invite linkGenerate a magic linkGenerate a recovery linkGenerate links to change current email address

```
1
2
3
4

val (url, user) = supabase.gotrue.admin.generateLinkFor(LinkType.Signup) {    email = "example@email.com"    password = "secretpassword"}
```

* * *

## Update a user

Updates the user data.

Updates a user's emailUpdates a user's passwordUpdates a user's metadataUpdates a user's app\_metadataConfirms a user's email addressConfirms a user's phone number

```
1
2
3

supabase.gotrue.admin.updateUserById(uid = "id") {    email = "example@email.com"}
```

* * *

## List all factors for a user

Lists all factors associated to a user.

List all factors for a user

```
1

const factors = supabase.gotrue.admin.retrieveFactors(uid = "id")
```

* * *

## Delete a factor for a user

Deletes a factor on a user. This will log the user out of all active sessions if the deleted factor was verified.

Delete a factor for a user

```
1

supabase.gotrue.admin.deleteFactor(uid = "id", factorId = "factor_id")
```

* * *

## Invokes a Supabase Edge Function.

Invokes a Supabase Function. See the [guide](https://supabase.com/docs/guides/functions) for details on writing Functions.

- When invoking a function with parameters, you have to provide a [serializable value](https://supabase.com/docs/reference/kotlin/installing#serialization) in the function parameter.

- Requires an Authorization header.


Basic invocationBasic invocation with bodyReuse function by saving it to a variable

```
1

supabase.functions.invoke("function_name")
```

* * *

## Subscribe to channel

Subscribe to realtime changes in your database.

- Realtime is disabled by default for new Projects for better database performance and security. You can turn it on by [managing replication](https://supabase.com/docs/guides/database/api#managing-realtime).
- If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`
- When using a method with a generic type like `track`, `broadcast` or `broadcastFlow`, you have to provide a [serializable class](https://supabase.com/docs/reference/kotlin/installing#serialization) as the type parameter.

Connect to RealtimeListen to broadcastsListen to presence updatesListen to all database changesListen to a specific tableListen to insertsListen to updatesListen to deletesListen to row level changes

```
1

supabase.realtime.connect()
```

* * *

## Unsubscribe from a channel

Unsubscribes and removes Realtime channel from Realtime client.

- Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes.
- Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove a channelUnsubscribe from a channel

```
1
2
3
4
5

val channel = supabase.realtime.createChannel("channelId") {    //optional config}//...supabase.realtime.removeChannel(channel)
```

* * *

## Unsubscribe from all channels

Unsubscribes and removes all Realtime channels from Realtime client.

- Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove all channels

```
1

supabase.realtime.removeAllChannels()
```

* * *

## Retrieve all channels

Returns all Realtime channels.

Get all channels

```
1

val channels = supabase.realtime.subscriptions.entries
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

val buckets = supabase.storage.retrieveBuckets()
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

val bucket = supabase.storage.retrieveBucketById(bucketId = "avatars")
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

supabase.storage.createBucket(name = "icons", id = "icons") {    public = true    fileSizeLimit = 5.megabytes}
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

supabase.storage.emptyBucket(bucketId = "icons")
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

supabase.storage.updateBucket("cards") {    public = false    fileSizeLimit = 20.megabytes    allowedMimeTypes(ContentType.Image.PNG, ContentType.Image.JPEG)}
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

supabase.storage.deleteBucket(bucketId = "icons")
```

* * *

## Upload a file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `insert`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works
- Resumable uploads use a `Disk` cache by default to store the upload urls. You can customize that in the GoTrue config by changing the `resumable.cache` property.

Upload fileUpload file with progressCreate resumable uploadStart and resumable uploadPause resumable uploadCancel resumable uploadListen to the resumable upload stateContinue previous uploads

```
1
2
3
4

val bucket = supabase.storage["avatars"]bucket.upload("myIcon.png", byteArray, upsert = false)//on JVM you can use java.io.Filebucket.upload("myIcon.png", file, upsert = false)
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

val bucket = supabase.storage["avatars"]bucket.update("myIcon.png", byteArray, upsert = false)//on JVM you can use java.io.Filebucket.update("myIcon.png", file, upsert = false)
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

val bucket = supabase.storage["avatars"]bucket.move("icon1.png", "icon2.png")
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

supabase.storage["test"].copy(from = "avatar.png", to = "avatar2.png")
```

* * *

## Create a signed URL

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Create Signed URLCreate Signed URL with transformation

```
1
2

val bucket = supabase.storage["avatars"]val url = bucket.createSignedUrl(path = "icon.png", expiresIn = 3.minutes)
```

* * *

## Create signed URLs

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Create Signed URLs

```
1

val urls = supabase.storage["avatars"].createSignedUrls(20.minutes, "avata1.jpg", "avatar2.jpg")
```

* * *

## Create signed upload URL

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `insert`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Create Signed Upload URL

```
1

val url = supabase.storage["avatars"].createSignedUploadUrl("avatar.png")
```

* * *

## Upload to a signed URL

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Upload to a signed URL

```
1
2
3

supabase.storage["avatars"].uploadToSignedUrl(path = "avatar.jpg", token = "token-from-createSignedUploadUrl", data = bytes)//or on JVM:supabase.storage["avatars"].uploadToSignedUrl(path = "avatar.jpg", token = "token-from-createSignedUploadUrl", file = File("avatar.jpg"))
```

* * *

## Retrieve public URL

- The bucket needs to be set to public, either via [updateBucket()](https://supabase.com/docs/reference/kotlin/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: none
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Returns the URL for an asset in a public bucketReturns the URL for an asset in a public bucket with transformations

```
1

val url = supabase.storage["public-bucket"].publicUrl("folder/avatar1.png")
```

* * *

## Download a file

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

Download file from non-public bucketDownload file from public bucketDownload file with transformationDownload file with progress

```
1
2
3
4

val bucket = supabase.storage["avatars"]val bytes = bucket.downloadAuthenticated("test.png")//or on JVM:bucket.downloadAuthenticatedTo("test.png", File("test.png"))
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

val bucket = supabase.storage["avatars"]bucket.delete("test.png", "test2.png")
```

* * *

## List all files in a bucket

- RLS policy permissions required:
  - `buckets` table permissions: none
  - `objects` table permissions: `select`
- Refer to the [Storage guide](https://supabase.com/docs/guides/storage/security/access-control) on how access control works

List files in a bucket

```
1
2

val bucket = supabase.storage["avatars"]val files = bucket.list()
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