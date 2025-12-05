---
url: "https://supabase.com/docs/reference/csharp/v0/undefined"
title: "C# API Reference | Supabase Docs"
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

C#
v0.0

- [Introduction](https://supabase.com/docs/reference/csharp/v0/introduction)
- [Installing](https://supabase.com/docs/reference/csharp/v0/installing)
- [Initializing](https://supabase.com/docs/reference/csharp/v0/initializing)
- * * *


Database

  - [Fetch data](https://supabase.com/docs/reference/csharp/v0/select)
  - [Insert data](https://supabase.com/docs/reference/csharp/v0/insert)
  - [Update data](https://supabase.com/docs/reference/csharp/v0/update)
  - [Upsert data](https://supabase.com/docs/reference/csharp/v0/upsert)
  - [Delete data](https://supabase.com/docs/reference/csharp/v0/delete)
  - [Call a Postgres function](https://supabase.com/docs/reference/csharp/v0/rpc)
  - Using filters

  - Using modifiers
- * * *


Auth

  - [Create a new user](https://supabase.com/docs/reference/csharp/v0/auth-signup)
  - [Listen to auth events](https://supabase.com/docs/reference/csharp/v0/auth-onauthstatechange)
  - [Sign in a user](https://supabase.com/docs/reference/csharp/v0/auth-signinwithpassword)
  - [Sign in a user through OTP](https://supabase.com/docs/reference/csharp/v0/auth-signinwithotp)
  - [Sign in a user through OAuth](https://supabase.com/docs/reference/csharp/v0/auth-signinwithoauth)
  - [Sign out a user](https://supabase.com/docs/reference/csharp/v0/auth-signout)
  - [Verify and log in through OTP](https://supabase.com/docs/reference/csharp/v0/auth-verifyotp)
  - [Retrieve a session](https://supabase.com/docs/reference/csharp/v0/auth-getsession)
  - [Retrieve a user](https://supabase.com/docs/reference/csharp/v0/auth-getuser)
  - [Update a user](https://supabase.com/docs/reference/csharp/v0/auth-updateuser)
- * * *


Edge Functions

  - [Invokes a Supabase Edge Function.](https://supabase.com/docs/reference/csharp/v0/functions-invoke)
- * * *


Realtime

  - [Subscribe to channel](https://supabase.com/docs/reference/csharp/v0/subscribe)
  - [Unsubscribe from a channel](https://supabase.com/docs/reference/csharp/v0/removechannel)
  - [Retrieve all channels](https://supabase.com/docs/reference/csharp/v0/getchannels)
- * * *


Storage

  - File Buckets
- * * *


Misc

  - [Release Notes](https://supabase.com/docs/reference/csharp/v0/release-notes)

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

C# Reference v0.0

##### Version out of date

There's a newer version of this library! Migrate to the [newest version](https://supabase.com/docs/reference/csharp).

# C\# Client Library

supabase [View on GitHub](https://github.com/supabase-community/supabase-csharp)

This reference documents every object and method available in Supabase's C# library, [supabase-csharp](https://www.nuget.org/packages/supabase-csharp). You can use `Supabase` to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.

The C# client library is created and maintained by the Supabase community, and is not an official library. Please be tolerant of areas where the library is still being developed, and — as with all the libraries — feel free to contribute wherever you find issues.

Huge thanks to official maintainer, [Joseph Schultz](https://github.com/acupofjose). As well as [Will Iverson](https://github.com/wiverson), [Ben Randall](https://github.com/veleek), and [Rhuan Barros](https://github.com/rhuanbarros) for their help.

* * *

## Installing

### Install from NuGet [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#install-from-nuget)

You can install Supabase package from [nuget.org](https://www.nuget.org/packages/supabase-csharp/)

Terminal

```
1

dotnet add package supabase-csharp
```

* * *

## Initializing

Initializing a new client is pretty straightforward. Find your project url and public key from the admin panel and pass it into your client initialization function.

`Supabase` is heavily dependent on Models deriving from `BaseModel`. To interact with the API, one must have the associated model (see example) specified.

Leverage `Table`, `PrimaryKey`, and `Column` attributes to specify names of classes/properties that are different from their C# Versions.

StandardDependency Injection (Maui-like)With Models Example

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

var url = Environment.GetEnvironmentVariable("SUPABASE_URL");var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");var options = new Supabase.SupabaseOptions{    AutoConnectRealtime = true};var supabase = new Supabase.Client(url, key, options);await supabase.InitializeAsync();
```

* * *

## Fetch data

Performs vertical filtering with SELECT.

- **LINQ expressions do not currently support parsing embedded resource columns. For these cases, `string` will need to be used.**
- **When using string Column Names to select, they must match names in database, not names specified on model properties.**
- Additional information on modeling + querying Joins and Inner Joins can be found [in the `postgrest-csharp README`](https://github.com/supabase-community/postgrest-csharp/blob/master/README.md#foreign-keys-join-tables-and-relationships)
- By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
- `From()` can be combined with [Modifiers](https://supabase.com/docs/reference/csharp/using-modifiers)
- `From()` can be combined with [Filters](https://supabase.com/docs/reference/csharp/using-filters)
- If using the Supabase hosted platform `apikey` is technically a reserved keyword, since the API gateway will pluck it out for authentication. [It should be avoided as a column name](https://github.com/supabase/supabase/issues/5465).

Getting your dataSelecting specific columnsQuery foreign tablesFiltering with inner joinsQuerying with count optionQuerying JSON data

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

// Given the following Model (City.cs)[Table("cities")]class City : BaseModel{    [PrimaryKey("id")]    public int Id { get; set; }    [Column("name")]    public string Name { get; set; }    [Column("country_id")]    public int CountryId { get; set; }    //... etc.}// A result can be fetched like so.var result = await supabase.From<City>().Get();var cities = result.Models
```

* * *

## Insert data

Performs an INSERT into the table.

Create a recordBulk createFetch inserted record

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

[Table("cities")]class City : BaseModel{    [PrimaryKey("id", false)]    public int Id { get; set; }    [Column("name")]    public string Name { get; set; }    [Column("country_id")]    public int CountryId { get; set; }}var model = new City{  Name = "The Shire",  CountryId = 554};await supabase.From<City>().Insert(model);
```

* * *

## Update data

Performs an UPDATE on the table.

- `Update()` is typically called using a model as an argument or from a hydrated model.

Update your data using FilterUpdate your data

```
1
2
3
4
5

var update = await supabase  .From<City>()  .Where(x => x.Name == "Auckland")  .Set(x => x.Name, "Middle Earth")  .Update();
```

* * *

## Upsert data

Performs an UPSERT into the table.

- Primary keys should be included in the data payload in order for an update to work correctly.
- Primary keys must be natural, not surrogate. There are however, [workarounds](https://github.com/PostgREST/postgrest/issues/1118) for surrogate primary keys.

Upsert your dataUpserting into tables with constraintsReturn the exact number of rows

```
1
2
3
4
5
6
7

var model = new City{  Id = 554,  Name = "Middle Earth"};await supabase.From<City>().Upsert(model);
```

* * *

## Delete data

Performs a DELETE on the table.

- `Delete()` should always be combined with [Filters](https://supabase.com/docs/reference/csharp/using-filters) to target the item(s) you wish to delete.

Delete records

```
1
2
3
4

await supabase  .From<City>()  .Where(x => x.Id == 342)  .Delete();
```

* * *

## Call a Postgres function

You can call stored procedures as a "Remote Procedure Call".

That's a fancy way of saying that you can put some logic into your database then call it from anywhere. It's especially useful when the logic rarely changes - like password resets and updates.

Call a stored procedureWith Parameters

```
1

await supabase.Rpc("hello_world", null);
```

Notes

* * *

## Using filters

Filters allow you to only return rows that match certain conditions.

Filters can be used on `Select()`, `Update()`, and `Delete()` queries.

**Note: LINQ expressions do not currently support parsing embedded resource columns. For these cases, `string` will need to be used.**

Applying FiltersFilter by values within a JSON columnFilter Foreign Tables

```
1
2
3
4

var result = await supabase.From<City>()      .Select(x => new object[] { x.Name, x.CountryId })      .Where(x => x.Name == "The Shire")      .Single();
```

* * *

## Column is equal to a value

Finds all rows whose value on the stated `column` exactly matches the specified `value`.

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Where(x => x.Name == "Bali")  .Get();
```

* * *

## Column is not equal to a value

Finds all rows whose value on the stated `column` doesn't match the specified `value`.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Where(x => x.Name != "Bali")  .Get();
```

* * *

## Column is greater than a value

Finds all rows whose value on the stated `column` is greater than the specified `value`.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Where(x => x.CountryId > 250)  .Get();
```

* * *

## Column is greater than or equal to a value

Finds all rows whose value on the stated `column` is greater than or equal to the specified `value`.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Where(x => x.CountryId >= 250)  .Get();
```

* * *

## Column is less than a value

Finds all rows whose value on the stated `column` is less than the specified `value`.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<City>()  .Select("name, country_id")  .Where(x => x.CountryId < 250)  .Get();
```

* * *

## Column is less than or equal to a value

Finds all rows whose value on the stated `column` is less than or equal to the specified `value`.

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Where(x => x.CountryId <= 250)  .Get();
```

* * *

## Column matches a pattern

Finds all rows whose value in the stated `column` matches the supplied `pattern` (case sensitive).

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Filter(x => x.Name, Operator.Like, "%la%")  .Get();
```

* * *

## Column matches a case-insensitive pattern

Finds all rows whose value in the stated `column` matches the supplied `pattern` (case insensitive).

With \`Select()\`

```
1
2
3

await supabase.From<City>()  .Filter(x => x.Name, Operator.ILike, "%la%")  .Get();
```

* * *

## Column is a value

A check for exact equality (null, true, false), finds all rows whose value on the stated `column` exactly match the specified `value`.

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Where(x => x.Name == null  .Get();
```

* * *

## Column is in an array

Finds all rows whose value on the stated `column` is found on the specified `values`.

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Filter(x => x.Name, Operator.In, new List<object> { "Rio de Janiero", "San Francisco" })  .Get();
```

* * *

## Column contains every element in a value

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Filter(x => x.MainExports, Operator.Contains, new List<object> { "oil", "fish" })  .Get();
```

* * *

## Contained by value

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Filter(x => x.MainExports, Operator.ContainedIn, new List<object> { "oil", "fish" })  .Get();
```

* * *

## Match a string

Finds all rows whose tsvector value on the stated `column` matches to\_tsquery(query).

Text searchBasic normalizationFull normalizationWebsearch

```
1
2
3
4

var result = await supabase.From<Quote>()  .Select(x => x.Catchphrase)  .Filter(x => x.Catchphrase, Operator.FTS, new FullTextSearchConfig("'fat' & 'cat", "english"))  .Get();
```

* * *

## Match an associated value

- Finds a model given a class (useful when hydrating models and correlating with database)
- Finds all rows whose columns match the specified `Dictionary<string, string>` object.

With ModelWith Dictionary

```
1
2
3
4
5
6
7

var city = new City{    Id = 224,    Name = "Atlanta"};var model = supabase.From<City>().Match(city).Single();
```

* * *

## Don't match the filter

Finds all rows which doesn't satisfy the filter.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<Country>()  .Select(x => new object[] { x.Name, x.CountryId })  .Where(x => x.Name != "Paris")  .Get();
```

* * *

## Match at least one filter

Finds all rows satisfying at least one of the filters.

With \`Select()\`Use \`or\` with \`and\`

```
1
2
3

var result = await supabase.From<Country>()  .Where(x => x.Id == 20 || x.Id == 30)  .Get();
```

* * *

## Using modifiers

Filters work on the row level—they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g., setting a limit or offset).

* * *

## Order the results

Orders the result with the specified column.

With \`Select()\`With embedded resources

```
1
2
3
4

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Order(x => x.Id, Ordering.Descending)  .Get();
```

* * *

## Limit the number of rows returned

Limits the result with the specified count.

With \`Select()\`With embedded resources

```
1
2
3
4

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Limit(10)  .Get();
```

* * *

## Limit the query to a range

Limits the result to rows within the specified range, inclusive.

With \`Select()\`

```
1
2
3
4

var result = await supabase.From<City>()  .Select("name, country_id")  .Range(0, 3)  .Get();
```

* * *

## Retrieve one row of data

Retrieves only one row from the result. Result must be one row (e.g. using limit), otherwise this will result in an error.

With \`Select()\`

```
1
2
3

var result = await supabase.From<City>()  .Select(x => new object[] { x.Name, x.CountryId })  .Single();
```

* * *

## Create a new user

Creates a new user.

- By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](https://supabase.com/dashboard/project/_/auth/providers).
- **Confirm email** determines if users need to confirm their email address after signing up.
  - If **Confirm email** is enabled, a `user` is returned but `session` is null.
  - If **Confirm email** is disabled, both a `user` and a `session` are returned.
- When the user confirms their email address, they are redirected to the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](https://supabase.com/dashboard/project/_/auth/url-configuration).
- If SignUp() is called for an existing confirmed user:
  - When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in [your project](https://supabase.com/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
  - When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.

Sign up.

```
1

var session = await supabase.Auth.SignUp(email, password);
```

* * *

## Listen to auth events

Receive a notification every time an auth event happens.

- Types of auth events: `AuthState.SignedIn`, `AuthState.SignedOut`, `AuthState.UserUpdated`, `AuthState.PasswordRecovery`, `AuthState.TokenRefreshed`

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
9
10
11
12
13
14
15
16

supabase.Auth.AddStateChangedListener((sender, changed) =>{    switch (changed)    {        case AuthState.SignedIn:            break;        case AuthState.SignedOut:            break;        case AuthState.UserUpdated:            break;        case AuthState.PasswordRecovery:            break;        case AuthState.TokenRefreshed:            break;    }});
```

* * *

## Sign in a user

Log in an existing user using email or phone number with password.

- Requires either an email and password or a phone number and password.

Sign in with email and passwordSign in with phone and password

```
1

var session = await supabase.Auth.SignIn(email, password);
```

* * *

## Sign in a user through OTP

- Requires either an email or phone number.
- This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
- If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
- If you're using phone, you can configure whether you want the user to receive a OTP.
- The magic link's destination URL is determined by the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls). You can modify the `SITE_URL` or add additional redirect urls in [your project](https://supabase.com/dashboard/project/_/auth/settings).

Send Magic Link.Sign in with SMS OTP.

```
1
2

var options = new SignInOptions { RedirectTo = "http://myredirect.example" };var didSendMagicLink = await supabase.Auth.SendMagicLink("joseph@supabase.io", options);
```

Notes

* * *

## Sign in a user through OAuth

Signs the user in using third party OAuth providers.

- This method is used for signing in using a third-party provider.
- Supabase supports many different [third-party providers](https://supabase.com/docs/guides/auth#providers).

Sign in using a third-party providerWith scopes

```
1

var signInUrl = supabase.Auth.SignIn(Provider.Github);
```

* * *

## Sign out a user

Signs out the current user, if there is a logged in user.

- In order to use the `SignOut()` method, the user needs to be signed in first.

Sign out

```
1

await supabase.Auth.SignOut();
```

* * *

## Verify and log in through OTP

- The `VerifyOtp` method takes in different verification types. If a phone number is used, the type can either be `sms` or `phone_change`. If an email address is used, the type can be one of the following: `signup`, `magiclink`, `recovery`, `invite` or `email_change`.
- The verification type used should be determined based on the corresponding auth method called before `VerifyOtp` to sign up / sign-in a user.

Verify Sms One-Time Password (OTP)

```
1

var session = await supabase.Auth.VerifyOTP("+13334445555", TOKEN, MobileOtpType.SMS);
```

* * *

## Retrieve a session

Returns the session data, if there is an active session.

Get the session data

```
1

var session = supabase.Auth.CurrentSession;
```

* * *

## Retrieve a user

Returns the user data, if there is a logged in user.

Get the logged in user

```
1

var user = supabase.Auth.CurrentUser;
```

* * *

## Update a user

Updates user data, if there is a logged in user.

- In order to use the `UpdateUser()` method, the user needs to be signed in first.
- By Default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](https://supabase.com/dashboard/project/_/auth/settings).

Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadata

```
1
2

var attrs = new UserAttributes { Email = "new-email@example.com" };var response = await supabase.Auth.Update(attrs);
```

Notes

* * *

## Invokes a Supabase Edge Function.

Invokes a Supabase Function. See the [guide](https://supabase.com/docs/guides/functions) for details on writing Functions.

- Requires an Authorization header.
- Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.

Basic invocation.Modeled invocation

```
1
2
3
4
5
6
7

var options = new InvokeFunctionOptions{    Headers = new Dictionary<string, string> {{ "Authorization", "Bearer 1234" }},    Body = new Dictionary<string, object> { { "foo", "bar" } }};await supabase.Functions.Invoke("hello", options: options);
```

* * *

## Subscribe to channel

Subscribe to realtime changes in your database.

- Realtime is disabled by default for new Projects for better database performance and security. You can turn it on by [managing replication](https://supabase.com/docs/guides/api#managing-realtime).
- If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`

Listen to broadcast messagesListen to presence syncListening to a specific tableListen to all database changesListening to insertsListening to updatesListening to deletesListening to row level changes

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

class CursorBroadcast : BaseBroadcast{    [JsonProperty("cursorX")]    public int CursorX {get; set;}    [JsonProperty("cursorY")]    public int CursorY {get; set;}}var channel = supabase.Realtime.Channel("any");var broadcast = channel.Register<CursorBroadcast>();broadcast.AddBroadcastEventHandler((sender, baseBroadcast) =>{    var response = broadcast.Current();});await channel.Subscribe();// Send a broadcastawait broadcast.Send("cursor", new CursorBroadcast { CursorX = 123, CursorY = 456 });
```

* * *

## Unsubscribe from a channel

Unsubscribes and removes Realtime channel from Realtime client.

- Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove a channel

```
1
2
3
4
5
6
7

var channel = await supabase.From<City>().On(ChannelEventType.All, (sender, change) => { });channel.Unsubscribe();// ORvar channel = supabase.Realtime.Channel("realtime", "public", "*");channel.Unsubscribe()
```

* * *

## Retrieve all channels

Returns all Realtime channels.

Get all channels

```
1

var channels = supabase.Realtime.Subscriptions;
```

* * *

## File Buckets

This section contains methods for working with File Buckets.

* * *

## List all buckets

Retrieves the details of all Storage buckets within an existing product.

- Policy permissions required:
  - `buckets` permissions: `select`
  - `objects` permissions: none

List buckets

```
1

var buckets = await supabase.Storage.ListBuckets();
```

* * *

## Retrieve a bucket

Retrieves the details of an existing Storage bucket.

- Policy permissions required:
  - `buckets` permissions: `select`
  - `objects` permissions: none

Get bucket

```
1

var bucket = await supabase.Storage.GetBucket("avatars");
```

* * *

## Create a bucket

Creates a new Storage bucket

- Policy permissions required:
  - `buckets` permissions: `insert`
  - `objects` permissions: none

Create bucket

```
1

var bucket = await supabase.Storage.CreateBucket("avatars");
```

* * *

## Empty a bucket

Removes all objects inside a single bucket.

- Policy permissions required:
  - `buckets` permissions: `select`
  - `objects` permissions: `select` and `delete`

Empty bucket

```
1

var bucket = await supabase.Storage.EmptyBucket("avatars");
```

* * *

## Update a bucket

Updates a new Storage bucket

- Policy permissions required:
  - `buckets` permissions: `update`
  - `objects` permissions: none

Update bucket

```
1

var bucket = await supabase.Storage.UpdateBucket("avatars", new BucketUpsertOptions { Public = false });
```

* * *

## Delete a bucket

Deletes an existing bucket. A bucket can't be deleted with existing objects inside it. You must first `empty()` the bucket.

- Policy permissions required:
  - `buckets` permissions: `select` and `delete`
  - `objects` permissions: none

Delete bucket

```
1

var result = await supabase.Storage.DeleteBucket("avatars");
```

* * *

## Upload a file

Uploads a file to an existing bucket.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `insert`

Upload fileUpload file with Progress

```
1
2
3
4
5

var imagePath = Path.Combine("Assets", "fancy-avatar.png");await supabase.Storage  .From("avatars")  .Upload(imagePath, "fancy-avatar.png", new FileOptions { CacheControl = "3600", Upsert = false });
```

* * *

## Replace an existing file

Replaces an existing file at the specified path with a new one.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `update` and `select`

Update file

```
1
2

var imagePath = Path.Combine("Assets", "fancy-avatar.png");await supabase.Storage.From("avatars").Update(imagePath, "fancy-avatar.png");
```

* * *

## Move an existing file

Moves an existing file, optionally renaming it at the same time.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `update` and `select`

Move file

```
1
2

await supabase.Storage.From("avatars")  .Move("public/fancy-avatar.png", "private/fancy-avatar.png");
```

* * *

## Create a signed URL

Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `select`

Create Signed URL

```
1

var url = await supabase.Storage.From("avatars").CreateSignedUrl("public/fancy-avatar.png", 60);
```

* * *

## Retrieve public URL

Retrieve URLs for assets in public buckets

- The bucket needs to be set to public, either via [UpdateBucket()](https://supabase.com/docs/reference/csharp/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: none

Returns the URL for an asset in a public bucket

```
1

var publicUrl = supabase.Storage.From("avatars").GetPublicUrl("public/fancy-avatar.png");
```

* * *

## Download a file

Downloads a file.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `select`

Download fileDownload file with Progress

```
1

var bytes = await supabase.Storage.From("avatars").Download("public/fancy-avatar.png");
```

* * *

## Delete files in a bucket

Deletes files within the same bucket

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `delete` and `select`

Delete file

```
1

await supabase.Storage.From("avatars").Remove(new List<string> { "public/fancy-avatar.png" });
```

* * *

## List all files in a bucket

Lists all the files within a bucket.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `select`

List files in a bucket

```
1

var objects = await supabase.Storage.From("avatars").List();
```

* * *

## Release Notes

## 0.16.2 - 2024-04-02 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0162---2024-04-02)

- Update dependency: `gotrue-csharp@4.2.7`
  - [#88](https://github.com/supabase-community/gotrue-csharp/issues/88) Implement `signInAnonymously` from the JS
    client
  - Include additional 3rd party providers in constants.

## 0.16.1 - 2024-03-15 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0161---2024-03-15)

- Update dependency: `postgrest-csharp@3.5.1`
  - Re: [#147](https://github.com/supabase-community/supabase-csharp/issues/147) \- Supports `Rpc` specifying a generic
    type for its return.

## 0.16.0 - 2024-03-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0160---2024-03-12)

- Update dependency: `postgrest-csharp@3.5.0`
  - Re: [#78](https://github.com/supabase-community/postgrest-csharp/issues/78), Generalize query filtering creation
    in `Table` so that it matches new generic signatures.
  - Move from `QueryFilter` parameters to a more generic `IPosgrestQueryFilter` to support constructing new
    QueryFilters from a LINQ expression.
    - Note: Lists of `QueryFilter`s will now need to be defined
      as: `new List<IPostgrestQueryFilter> { new QueryFilter(), ... }`
  - Adjust serialization of timestamps within a `QueryFilter` to support `DateTime` and `DateTimeOffset` using the
    ISO-8601 ( [https://stackoverflow.com/a/115002](https://stackoverflow.com/a/115002))
- Update dependency: `functions-csharp@1.3.2`
  - Re: [#5](https://github.com/supabase-community/functions-csharp/issues/5) Add support for specifying Http Timeout
    on a function call by adding `HttpTimeout` to `InvokeFunctionOptions`

## 0.15.0 - 2024-01-08 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0150---2024-01-08)

- Update Dependency: `gotrue-csharp@4.2.6`
  - [#83](https://github.com/supabase-community/gotrue-csharp/pull/83) Replaces JWTDecoder package with
    System.IdentityModel.Tokens.Jwt. Thanks [@FantasyTeddy](https://github.com/FantasyTeddy)!
- Update Dependency: `postgrest-csharp@3.4.1`
  - Re: [#85](https://github.com/supabase-community/postgrest-csharp/issues/85) Fixes problem when using multiple
    .Order()
    methods by merging [#86](https://github.com/supabase-community/postgrest-csharp/pull/86).
    Thanks [@hunsra](https://github.com/hunsra)!
  - Re: [#81](https://github.com/supabase-community/postgrest-csharp/issues/81)
    - \[Minor\] Removes `IgnoreOnInsert`and `IgnoreOnUpdate` from `ReferenceAttribute` as changing these properties
      to `false` does not currently provide the expected functionality.
    - Fixes `Insert` and `Update` not working on models that have `Reference` specified on a property with a
      non-null
      value.

## 0.14.0 - 2023-12-15 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0140---2023-12-15)

- Update Dependency: `gotrue-csharp@4.2.5`
  - [#82](https://github.com/supabase-community/gotrue-csharp/issues/81) \- Implements #82 - Creates a `GenerateLink`
    method on the `AdminClient` that supports `signup`, `invite`, `magiclink`, `recovery`, `email_change_new`
    and `email_change_current`
  - [#81](https://github.com/supabase-community/gotrue-csharp/issues/81) \- Adds `InviteUserByEmailOptions` as a
    parameter to the Gotrue Admin Client
- Update Dependency: `postgrest-csharp@3.3.0`
  - Re: [#78](https://github.com/supabase-community/postgrest-csharp/issues/78) Updates signatures for `Not`
    and `Filter` to include generic types for a better development experience.
  - Updates internal generic type names to be more descriptive.
  - Add support for LINQ predicates on `Table<TModel>.Not()` signatures

## 0.13.7 - 2023-11-13 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0137---2023-11-13)

- Update Dependency: `postgrest-csharp@3.2.10`
  - Re: [#76](https://github.com/supabase-community/postgrest-csharp/issues/76) Removes the
    incorrect `ToUniversalTime` conversion in the LINQ `Where` parser.

## 0.13.6 - 2023-10-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0136---2023-10-12)

- Update Dependency: `gotrue-csharp@4.2.3`
  - Re: [#80](https://github.com/supabase-community/gotrue-csharp/pull/80) Fixes `Session.Expires()` not being
    calculated correctly. Thanks [@dayjay](https://github.com/Dayjay)!

## 0.13.5 - 2023-10-09 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0135---2023-10-09)

- Update Dependency: `postgrest-csharp@3.2.9`
  - Re: [supabase-csharp#115](https://github.com/supabase-community/supabase-csharp/discussions/115) Additional
    support for a model referencing another model with multiple foreign keys.
  - Re: [supabase-csharp#115](https://github.com/supabase-community/supabase-csharp/discussions/115) Adds support for
    multiple references attached to the same model (foreign keys) on a single C# Model.

## 0.13.4 - 2023-10-08 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0134---2023-10-08)

- Update Dependency: `gotrue-csharp@4.2.2`
  - Re: [#78](https://github.com/supabase-community/gotrue-csharp/issues/78) \- Implements PKCE flow support
    for `ResetPasswordForEmail`.

## 0.13.3 - 2023-09-15 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0133---2023-09-15)

- Re: [#107](https://github.com/supabase-community/supabase-csharp/issues/107) \- removes Realtime socket being
disconnected on a User sign-out - only the subscriptions should be removed.

## 0.13.2 - 2023-09-15 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0132---2023-09-15)

- Update dependency: `postgrest-csharp@3.2.7`
  - Implements a `TableWithCache` for `Get` requests that can pull reactive Models from cache before making a remote
    request.
  - Re: [supabase-csharp#85](https://github.com/supabase-community/supabase-csharp/issues/85) Includes sourcelink
    support.
  - Re: [#75](https://github.com/supabase-community/postgrest-csharp/pull/75) Fix issue with marshalling of stored
    procedure arguments. Big thank you to [@corrideat](https://github.com/corrideat)!

## 0.13.1 - 2023-08-26 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0131---2023-08-26)

- Update dependency: `supabase-storage-csharp@1.4.0`
  - Fixes [#11](https://github.com/supabase-community/storage-csharp/issues/11) \- Which implements
    missing `SupabaseStorageException` on failure status codes for `Upload`, `Download`, `Move`, `CreateSignedUrl`
    and `CreateSignedUrls`.

## 0.13.0 - 2023-08-26 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0130---2023-08-26)

- Update dependency: `gotrue-csharp@4.2.1`
  - [#74](https://github.com/supabase-community/gotrue-csharp/pull/74) \- Fixes bug where token refresh interval was
    not honored by client. Thanks [@slater1](https://github.com/slater1)!
  - **Minor Breaking changes:** [#72](https://github.com/supabase-community/gotrue-csharp/pull/72) \- Fixes
    Calling `SetAuth` does not actually set Authorization Headers for subsequent requests by implementing `SetSession`
    - Removes `RefreshToken(string refreshToken)` and `SetAuth(string accessToken` in favor
      of `SetSession(string accessToken, string refreshToken)`
    - Makes `RefreshAccessToken` require `accessToken` and `refreshToken` as parameters - overrides the
      authorization
      headers to use the supplied token
    - Migrates project internal times to use `DateTime.UtcNow` over `DateTime.Now`.

## 0.12.2 - 2023-07-28 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0122---2023-07-28)

- Update dependency: `realtime-csharp@6.0.4`
  - Fixes [#29](https://github.com/supabase-community/realtime-csharp/issues/29) Where the Realtime client could
    disconnect from channels after a few hours and fail to reconnect by removing the case where the `IsSubscribe` flag
    is flipped when encountering a channel error.
- Update dependency: `postgrest-csharp@3.2.5`
  - Re: [supabase-community/supabase-csharp#81](https://github.com/supabase-community/supabase-csharp/discussions/81):
    Clarifies `ReferenceAttribute` by changing `shouldFilterTopLevel` to `useInnerJoin` and adds an additional
    constructor for `ReferenceAttribute` with a shortcut for specifying the `JoinType`

## 0.12.1 - 2023-06-29 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0121---2023-06-29)

- Update dependency: `gotrue-csharp@4.1.1`
  - [#68](https://github.com/supabase-community/gotrue-csharp/pull/68) Changes Network Status to use the interface
    instead of client
- Update dependency: `postgrest-csharp@3.2.4`
  - [#70](https://github.com/supabase-community/postgrest-csharp/pull/70) Minor Unity related fixes

## 0.12.0 - 2023-06-25 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0120---2023-06-25)

- Update dependency: `gotrue-csharp@4.1.0`
  - **Minor** [#66](https://github.com/supabase-community/gotrue-csharp/pull/66) \- Separates out Admin JWT
    functionality into a separate `AdminClient`
  - [#67](https://github.com/supabase-community/gotrue-csharp/pull/67) \- Adds shutdown method which terminates the
    background refresh threads.
  - Movement of much of the documentation for methods out of their classes and into their interfaces.
  - Language features locked to C#9
- Update dependency: `postgrest-csharp@3.2.3`
  - [#69](https://github.com/supabase-community/postgrest-csharp/pull/69) Locks language version to C#9
  - [#68](https://github.com/supabase-community/postgrest-csharp/pull/68) Makes RPC parameters optional

Thanks [@wiverson](https://github.com/wiverson) for the work in this release!

## 0.11.1 - 2023-06-10 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0111---2023-06-10)

- Update dependencies: `functions-csharp@1.3.1`, `gotrue-csharp@4.0.4`, `postgrest-csharp@3.2.2`,
`realtime-csharp@6.0.3`, `supabase-storage-csharp@1.3.2`, `supabase-core@0.0.3`
  - Namespaces assembly names to make them unique among other dependencies, i.e: `Core.dll`
    becomes `Supabase.Core.dll` which will hopefully prevent future collisions.

## 0.11.0 - 2023-05-24 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0110---2023-05-24)

- Update dependency: postgrest-csharp@3.2.0
  - General codebase and QOL improvements. Exceptions are generally thrown through `PostgrestException` now instead
    of `Exception`. A `FailureHint.Reason` is provided with failures if possible to parse.
  - `AddDebugListener` is now available on the client to help with debugging
  - Merges [#65](https://github.com/supabase-community/postgrest-csharp/pull/65) Cleanup + Add better exception
    handling
  - Merges [#66](https://github.com/supabase-community/postgrest-csharp/pull/66) Local test Fixes
  - Fixes [#67](https://github.com/supabase-community/postgrest-csharp/issues/67) Postgrest Reference attribute is
    producing StackOverflow for circular references
- Update dependency: gotrue-csharp@4.0.2
  - [#58](https://github.com/supabase-community/gotrue-csharp/issues/58) \- Add support for the `reauthentication`
    endpoint which allows for secure password changes.
- Update dependency: realtime-csharp@6.0.1
  - Updates publishing action for future packages, includes README and icon.
  - Merges [#28](https://github.com/supabase-community/realtime-csharp/pull/28)
    and [#30](https://github.com/supabase-community/realtime-csharp/pull/30)
  - The realtime client now takes a "fail-fast" approach. On establishing an initial connection, client will throw
    a `RealtimeException` in `ConnectAsync()` if the socket server is unreachable. After an initial connection has
    been
    established, the **client will continue attempting reconnections indefinitely until disconnected.**
  - \[Major, New\] C# `EventHandlers` have been changed to `delegates`. This should allow for cleaner event data access
    over
    the previous subclassed `EventArgs` setup. Events are scoped accordingly. For example, the `RealtimeSocket` error
    handlers will receive events regarding socket connectivity; whereas the `RealtimeChannel` error handlers will
    receive
    events according to `Channel` joining/leaving/etc. This is implemented with the following methods prefixed by (
    Add/Remove/Clear):
    - `RealtimeBroadcast.AddBroadcastEventHandler`
    - `RealtimePresence.AddPresenceEventHandler`
    - `RealtimeSocket.AddStateChangedHandler`
    - `RealtimeSocket.AddMessageReceivedHandler`
    - `RealtimeSocket.AddHeartbeatHandler`
    - `RealtimeSocket.AddErrorHandler`
    - `RealtimeClient.AddDebugHandler`
    - `RealtimeClient.AddStateChangedHandler`
    - `RealtimeChannel.AddPostgresChangeHandler`
    - `RealtimeChannel.AddMessageReceivedHandler`
    - `RealtimeChannel.AddErrorHandler`
    - `Push.AddMessageReceivedHandler`
  - \[Major, new\] `ClientOptions.Logger` has been removed in favor of `Client.AddDebugHandler()` which allows for
    implementing custom logging solutions if desired.

    - A simple logger can be set up with the following:

```
1

client.AddDebugHandler((sender, message, exception) => Debug.WriteLine(message));
```

  - \[Major\] `Connect()` has been marked `Obsolete` in favor of `ConnectAsync()`
  - Custom reconnection logic has been removed in favor of using the built-in logic from `Websocket.Client@4.6.1`.
  - Exceptions that are handled within this library have been marked as `RealtimeException`s.
  - The local, docker-composed test suite has been brought back (as opposed to remotely testing on live supabase
    servers)
    to test against.
  - Comments have been added throughout the entire codebase and an `XML` file is now generated on build.

## 0.10.0 - 2023-05-14 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0100---2023-05-14)

- Changes options to require `Supabase.SupabaseOptions.SessionPersistor` from using `ISupabaseSessionHandler`
to `IGotrueSessionPersistance<Session>` (these are now synchronous operations).
- Update dependency: gotrue-csharp@4.0.1
  - [#60](https://github.com/supabase-community/gotrue-csharp/pull/60) \- Add interfaces, bug fixes, additional error
    reason detection. Thanks [@wiverson](https://github.com/wiverson)!
  - [#57](https://github.com/supabase-community/gotrue-csharp/pull/57) Refactor exceptions, code cleanup, and move to
    delegate auth state changes
    - Huge thank you to [@wiverson](https://github.com/wiverson) for his help on this refactor and release!
    - Changes
      - Exceptions have been simplified to a single `GotrueException`. A `Reason` field has been added
        to `GotrueException` to clarify what happened. This should also be easier to manage as the Gotrue
        server API & messages evolve.
      - The session delegates for `Save`/`Load`/`Destroy` have been simplified to no longer require `async`.
      - Console logging in a few places (most notable the background refresh thread) has been removed
        in favor of a notification method. See `Client.AddDebugListener()` and the test cases for examples.
        This will allow you to implement your own logging strategy (write to temp file, console, user visible
        err console, etc).
      - The client now more reliably emits AuthState changes.
      - There is now a single source of truth for headers in the stateful Client - the `Options` headers.
    - New feature:
      - Added a `Settings` request to the stateless API only - you can now query the server instance to
        determine if it's got the settings you need. This might allow for things like a visual
        component in a tool to verify the GoTrue settings are working correctly, or tests that run differently
        depending on the server configuration.
    - Implementation notes:
      - Test cases have been added to help ensure reliability of auth state change notifications
        and persistence.
      - Persistence is now managed via the same notifications as auth state change

## 0.9.1 - 2023-04-28 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#091---2023-04-28)

- Update dependency: gotrue-csharp@3.1.1
  - Implements `SignInWithIdToken` for Apple/Google signing from LW7. A HUGE thank you
    to [@wiverson](https://github.com/wiverson)!
- Update dependency: realtime-csharp@5.0.5
  - Re: [#27](https://github.com/supabase-community/realtime-csharp/issues/27)`PostgresChangesOptions` was not
    setting `listenType` in constructor. Thanks [@Kuffs2205](https://github.com/Kuffs2205)
- Update dependency: supabase-storage-csharp@1.2.10
  - Re: [#7](https://github.com/supabase-community/storage-csharp/issues/7) Implements a `DownloadPublicFile` method.

## 0.9.0 - 2023-04-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#090---2023-04-12)

- Update dependency: gotrue-csharp@3.1.0
  - \[Minor\] Implements PKCE auth flow. SignIn using a provider now returns an instance of `ProviderAuthState` rather
    than a `string`.
- Update dependency: supabase-storage-csharp@1.2.9
  - Implements storage features from LW7:
    - feat: custom file size limit and mime types at bucket
      level [supabase/storage-js#151](https://github.com/supabase/storage-js/pull/151) file size and mime type
      limits per bucket
    - feat: quality option, image
      transformation [supabase/storage-js#145](https://github.com/supabase/storage-js/pull/152) quality option for
      image transformations
    - feat: format option for webp
      support [supabase/storage-js#142](https://github.com/supabase/storage-js/pull/142) format option for image
      transformation

## 0.8.8 - 2023-03-29 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#088---2023-03-29)

- Update dependency: gotrue-csharp@3.0.6
  - Supports adding `SignInOptions` (i.e. `RedirectTo`) on `OAuth Provider` SignIn requests.

## 0.8.7 - 2023-03-23 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#087---2023-03-23)

- Update dependency: realtime-csharp@5.0.4
  - Re: [#26](https://github.com/supabase-community/realtime-csharp/pull/26) \- Fixes Connect() not returning callback
    result when the socket isn't null. Thanks [@BlueWaterCrystal](https://github.com/BlueWaterCrystal)!

## 0.8.6 - 2023-03-23 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#086---2023-03-23)

- Update dependency: supabase-storage-csharp@1.2.8
  - [Merge #5](https://github.com/supabase-community/storage-csharp/pull/5) Added search string as an optional search
    parameter. Thanks [@ElectroKnight22](https://github.com/ElectroKnight22)!

## 0.8.5 - 2023-03-10 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#085---2023-03-10)

- Update dependency: realtime-csharp@5.0.3
  - Re: [#25](https://github.com/supabase-community/realtime-csharp/issues/25) \- Support Channel being resubscribed
    after having been unsubscribed, fixes rejoin timer being erroneously called on channel `Unsubscribe`.
    Thanks [@Kuffs2205](https://github.com/Kuffs2205)!

## 0.8.4 - 2023-03-03 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#084---2023-03-03)

- Update dependency: supabase-storage-csharp@1.2.7
  - Re: [#4](https://github.com/supabase-community/storage-csharp/issues/4) Implementation for `ClientOptions` which
    supports specifying Upload, Download, and Request timeouts.
- Update dependency: realtime-csharp@5.0.2
  - Re: [#24](https://github.com/supabase-community/realtime-csharp/issues/24) \- Fixes join failing until reconnect
    happened + adds access token push on channel join. Big thank you to [@Honeyhead](https://github.com/honeyhead) for
    the help debugging and identifying!

## 0.8.3 - 2023-02-26 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#083---2023-02-26)

- Update dependency: supabase-storage-csharp@1.2.5
  - Provides fix
    for [supabase-community/supabase-csharp#54](https://github.com/supabase-community/supabase-csharp/issues/54) -
    Dynamic headers were always being overwritten by initialized token headers, so the storage client would not
    receive user's access token as expected.
  - Provides fix for upload progress not reporting
    in [supabase-community/storage-csharp#3](https://github.com/supabase-community/storage-csharp/issues/3)
- Update dependency: gotrue-csharp@3.0.5
  - Fixes [#44](https://github.com/supabase-community/gotrue-csharp/issues/44) \- refresh timer should automatically
    reattempt (interval of 5s) for HTTP exceptions - gracefully exits on invalid refresh and triggers
    an `AuthState.Changed` event

## 0.8.2 - 2023-02-26 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#082---2023-02-26)

- Update dependency: supabase-storage-csharp@1.2.4
  - `UploadOrUpdate` now appropriately throws request exceptions

## 0.8.1 - 2023-02-06 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#081---2023-02-06)

- Update dependency: realtime-csharp@5.0.1
  - Re: [#22](https://github.com/supabase-community/realtime-csharp/issues/22) \- `SerializerSettings` were not being
    passed to `PostgresChangesResponse` \- Thanks [@Shenrak](https://github.com/Shenrak) for the help debugging!

## 0.8.0 - 2023-01-31 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#080---2023-01-31)

- Update dependency: realtime-csharp@5.0.0
  - Re: [#21](https://github.com/supabase-community/realtime-csharp/pull/21) Provide API for `presence`, `broadcast`
    and `postgres_changes`
    - \[Major, New\] `Channel.PostgresChanges` event will receive the wildcard `*` changes event,
      not `Channel.OnMessage`.
    - \[Major\] `Channel.OnInsert`, `Channel.OnUpdate`, and `Channel.OnDelete` now conform to the server's payload
      of `Response.Payload.**Data**`
    - \[Major\] `Channel.OnInsert`, `Channel.OnUpdate`, and `Channel.OnDelete` now return `PostgresChangesEventArgs`
    - \[Minor\] Rename `Channel` to `RealtimeChannel`
    - Supports better handling of disconnects in `RealtimeSocket` and adds a `Client.OnReconnect` event.
    - \[Minor\] Moves `ChannelOptions` to `Channel.ChannelOptions`
    - \[Minor\] Moves `ChannelStateChangedEventArgs` to `Channel.ChannelStateChangedEventArgs`
    - \[Minor\] Moves `Push` to `Channel.Push`
    - \[Minor\] Moves `Channel.ChannelState` to `Constants.ChannelState`
    - \[Minor\] Moves `SocketResponse`, `SocketRequest`, `SocketResponsePayload`, `SocketResponseEventArgs`,
      and `SocketStateChangedEventArgs` to `Socket` namespace.
    - \[New\] Adds `RealtimeBroadcast`
    - \[New\] Adds `RealtimePresence`
    - \[Improvement\] Better handling of disconnection/reconnection
- Update dependency: postgrest-csharp@3.1.3
  - Another fix for [#61](https://github.com/supabase-community/postgrest-csharp/issues/61) which futher typechecks
    nullable values.

## 0.7.2 - 2023-01-27 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#072---2023-01-27)

- Update dependency: gotrue-csharp@3.0.4
  - Makes `Session.CreatedAt` a publicly settable property, which should fix incorrect dates on retrieved `Session`s.
- Update dependency: postgrest-csharp@3.1.2
  - Fix [#61](https://github.com/supabase-community/postgrest-csharp/issues/61) which did not correctly parse
    Linq `Where` when encountering a nullable type.
  - Add missing support for transforming for `== null` and `!= null`

## 0.7.1 - 2023-01-17 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#071---2023-01-17)

- Update dependency: postgrest-csharp@3.1.1
  - Fix issue from supabase-community/supabase-csharp#48 where boolean model properties would not be evaluated in
    predicate expressions

## 0.7.0 - 2023-01-16 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#070---2023-01-16)

- Update dependency: postgrest-csharp@3.1.0
  - \[Minor\] Breaking API Change: `PrimaryKey` attribute defaults to `shouldInsert: false` as most uses will have the
    Database generate the primary key.
  - Merged [#60](https://github.com/supabase-community/postgrest-csharp/pull/60) which Added linq support
    for `Select`, `Where`, `OnConflict`, `Columns`, `Order`, `Update`, `Set`, and `Delete`

## 0.6.2 - 2022-11-22 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#062---2022-11-22)

- Update dependency: postgrest-csharp@3.0.4
  - `GetHeaders` is now passed to `ModeledResponse` and `BaseModel` so that the default `Update` and `Delete` methods
    use the latest credentials
  - `GetHeaders` is used in `Rpc` calls (re: [#39](https://github.com/supabase-community/supabase-csharp/issues/39))

## 0.6.1 - 2022-11-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#061---2022-11-12)

- \[Hotfix\] `GetHeaders` was not passing properly to `SupabaseTable` and `Gotrue.Api`

## 0.6.0 - 2022-11-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#060---2022-11-12)

\[BREAKING CHANGES\]

- `Client` is no longer a singleton, singleton interactions (if desired) are left to the developer to implement.
- `Client` supports injection of dependent clients after initialization via property:
  - `Auth`
  - `Functions`
  - `Realtime`
  - `Postgrest`
  - `Storage`
- `SupabaseModel` contains no logic but remains for backwards compatibility. (Marked `Obsolete`)
- `ClientOptions.ShouldInitializeRealtime` was removed (no longer auto initialized)
- `ClientOptions` now references an `ISupabaseSessionHandler` which specifies expected functionality for session
persistence on Gotrue (replaces `ClientOptions.SessionPersistor`, `ClientOptions.SessionRetriever`,
and `ClientOptions.SessionDestroyer`).
- `supabase-csharp` and all child libraries now have support `nullity`

Other Changes:

- Update dependency: functions-csharp@1.2.1
- Update dependency: gotrue-csharp@3.0.2
- Update dependency: postgrest-csharp@3.0.2
- Update dependency: realtime-csharp@4.0.1
- Update dependency: supabase-storage-csharp@1.2.3
- Update dependency: supabase-core@0.0.2

Big thank you to [@veleek](https://github.com/veleek) for his insight into these changes.

Re: [#35](https://github.com/supabase-community/supabase-csharp/issues/35), [#34](https://github.com/supabase-community/supabase-csharp/issues/34), [#23](https://github.com/supabase-community/supabase-csharp/issues/23), [#36](https://github.com/supabase-community/supabase-csharp/pull/36)

## 0.5.3 - 2022-10-11 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#053---2022-10-11)

- Update dependency: postgrest-csharp@2.1.0
  - \[Minor\] Breaking API change: Remove `BaseModel.PrimaryKeyValue` and `BaseModel.PrimaryKeyColumn` in favor of
    a `PrimaryKey` dictionary with support for composite keys.
  - Re: [#48](https://github.com/supabase-community/postgrest-csharp/issues/48) \- Add support for derived models
    on `ReferenceAttribute`
  - Re: [#49](https://github.com/supabase-community/postgrest-csharp/issues/49) \- Added `Match(T model)`

## 0.5.2 - 2022-9-13 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#052---2022-9-13)

- Update dependency: postgrest-csharp@2.0.12
  - Merged [#47](https://github.com/supabase-community/postgrest-csharp/pull/49) which added cancellation token
    support to `Table<T>` methods. Thanks [@devpikachu](https://github.com/devpikachu)!

## 0.5.1 - 2022-8-1 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#051---2022-8-1)

- Update dependency: postgrest-csharp@2.0.11
- Update dependency: supabase-storage-csharp@1.1.1

## 0.5.0 - 2022-7-17 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#050---2022-7-17)

- Update dependency: postgrest-csharp@2.0.9
- Update dependency: realtime-csharp@3.0.1
- Update dependency: supabase-storage-csharp@1.1.0
  - API Change \[Breaking/Minor\] Library no longer uses `WebClient` and instead leverages `HttpClient`. Progress events
    on `Upload` and `Download` are now handled with `EventHandler<float>` instead of `WebClient` EventHandlers.

## 0.4.4 - 2022-5-24 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#044---2022-5-24)

- Update dependency: gotrue-csharp@2.4.5
- Update dependency: postgrest-csharp@2.0.8

## 0.4.3 - 2022-5-13 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#043---2022-5-13)

- Update dependency: gotrue-csharp@2.4.4

## 0.4.2 - 2022-4-30 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#042---2022-4-30)

- Update dependency: gotrue-csharp@2.4.3

## 0.4.1 - 2022-4-23 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#041---2022-4-23)

- Update dependency: gotrue-csharp@2.4.2

## 0.4.0 - 2022-4-12 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#040---2022-4-12)

- Add support for functions-csharp@1.0.1, giving access to invoking Supabase's edge functions.
- Update dependency: gotrue-csharp@2.4.1

## 0.3.5 - 2022-4-11 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#035---2022-4-11)

- Update dependency: postgres-csharp@2.0.7

## 0.3.4 - 2022-03-28 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#034---2022-03-28)

- Update dependency: gotrue-csharp@2.4.0

## 0.3.3 - 2022-02-27 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#033---2022-02-27)

- Update dependency: gotrue-csharp@2.3.6
- Update dependency: supabase-storage-csharp@1.0.2

## 0.3.2 - 2022-02-18 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#032---2022-02-18)

- Update dependency: realtime-csharp@3.0.0
  - Exchange existing websocket client: [WebSocketSharp](https://github.com/sta/websocket-sharp)
    for [Marfusios/websocket-client](https://github.com/Marfusios/websocket-client) which adds support for Blazor WASM
    apps.
    Ref: [#14](https://github.com/supabase-community/realtime-csharp/pull/14)

## 0.3.1 - 2022-01-20 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#031---2022-01-20)

- Update dependency: gotrue-csharp@2.3.5
  - [#23](https://github.com/supabase-community/gotrue-csharp/pull/23) Added `redirect_url` option for MagicLink sign
    in (Thanks [@MisterJimson](https://github.com/MisterJimson))
  - [#21](https://github.com/supabase-community/gotrue-csharp/pull/21) Added SignOut method to Stateless Client (
    Thanks [@fplaras](https://github.com/fplaras))

## 0.3.0 - 2021-12-30 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#030---2021-12-30)

- Update dependency: postgrest-csharp@2.0.6
  - Add support for `NullValueHandling` to be specified on a `Column` Attribute and for it to be honored on Inserts
    and Updates. Defaults to: `NullValueHandling.Include`.
    - Implements [#38](https://github.com/supabase-community/postgrest-csharp/issues/38)
- Update dependency: realtime-csharp@2.0.8
  - Implement Upstream Realtime RLS Error Broadcast Handler
    - Implements [#12](https://github.com/supabase-community/realtime-csharp/issues/12)
  - `SocketResponse` now exposes a method: `OldModel`, that hydrates the `OldRecord` property into a model.

## 0.2.12 - 2021-12-29 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0212---2021-12-29)

- Update dependency: gotrue-csharp@2.3.3
  - `SignUp` will return a `Session` with a _populated `User` object_ on an unconfirmed signup.
    - Fixes [#19](https://github.com/supabase-community/gotrue-csharp/issues/19)
    - Developers who were using a `null` check on `Session.User` will need to adjust accordingly.
- Update dependency: postgrest-csharp@2.0.5
  - Fix for [#37](https://github.com/supabase-community/postgrest-csharp/issues/37) \- Return Type `minimal` would fail
    to resolve because of incorrect `Accept` headers. Added header and test to verify for future.
  - Fix for [#36](https://github.com/supabase-community/postgrest-csharp/issues/36) \- Inserting/Upserting bulk records
    would fail while doing an unnecessary generic coercion.

## 0.2.11 - 2021-12-24 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0211---2021-12-24)

- Update dependency: gotrue-csharp@2.3.2 (changes CreateUser parameters to conform to `AdminUserAttributes`)
  - See [#15](https://github.com/supabase-community/supabase-csharp/issues/15)
  - See [#16](https://github.com/supabase-community/supabase-csharp/issues/16)
- Update dependency: realtime-csharp@2.0.7
  - See [#13](https://github.com/supabase-community/supabase-csharp/issues/13)

## 0.2.10 - 2021-12-23 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#0210---2021-12-23)

- Update dependency: gotrue-csharp@2.3.0 (adds metadata support for user signup,
see [#14](https://github.com/supabase/community/issues/14))

## 0.2.9 - 2021-12-9 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#029---2021-12-9)

- Separate Storage client from Supabase repo and into `storage-csharp`, `supabase-csharp` now references new repo.

## 0.2.8 - 2021-12-4 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#028---2021-12-4)

- Update gotrue-csharp to 2.2.4
  - Adds support for `ListUsers` (paginate, sort, filter), `GetUserById`, `CreateUser`, and `UpdateById`

## 0.2.7 - 2021-12-2 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#027---2021-12-2)

- Update gotrue-csharp to 2.2.3
  - Adds support for sending password resets to users.

## 0.2.6 - 2021-11-29 [\#](https://supabase.com/docs/reference/csharp/v0/undefined\#026---2021-11-29)

- Support for [#12](https://github.com/supabase-community/supabase-csharp/issues/12)
- Update realtime-csharp to 2.0.6
- Update gotrue-csharp to 2.2.2
- Add `StatelessClient` re: [#7](https://github.com/supabase-community/supabase-csharp/issues/7)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)