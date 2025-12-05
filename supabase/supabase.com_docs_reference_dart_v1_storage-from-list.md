---
url: "https://supabase.com/docs/reference/dart/v1/storage-from-list"
title: "Flutter API Reference | Supabase Docs"
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

Flutter
v1.0

- [Introduction](https://supabase.com/docs/reference/dart/v1/introduction)
- [Installing](https://supabase.com/docs/reference/dart/v1/installing)
- [Initializing](https://supabase.com/docs/reference/dart/v1/initializing)
- * * *


Database

  - [Fetch data](https://supabase.com/docs/reference/dart/v1/select)
  - [Insert data](https://supabase.com/docs/reference/dart/v1/insert)
  - [Update data](https://supabase.com/docs/reference/dart/v1/update)
  - [Upsert data](https://supabase.com/docs/reference/dart/v1/upsert)
  - [Delete data](https://supabase.com/docs/reference/dart/v1/delete)
  - [Call a Postgres function](https://supabase.com/docs/reference/dart/v1/rpc)
  - Using filters

  - Using modifiers
- * * *


Auth

  - [Create a new user](https://supabase.com/docs/reference/dart/v1/auth-signup)
  - [Listen to auth events](https://supabase.com/docs/reference/dart/v1/auth-onauthstatechange)
  - [Sign in a user](https://supabase.com/docs/reference/dart/v1/auth-signinwithpassword)
  - [Sign in a user through OTP](https://supabase.com/docs/reference/dart/v1/auth-signinwithotp)
  - [Sign in with Apple](https://supabase.com/docs/reference/dart/v1/sign-in-with-apple)
  - [Sign in a user through OAuth](https://supabase.com/docs/reference/dart/v1/auth-signinwithoauth)
  - [Sign out a user](https://supabase.com/docs/reference/dart/v1/auth-signout)
  - [Verify and log in through OTP](https://supabase.com/docs/reference/dart/v1/auth-verifyotp)
  - [Retrieve a session](https://supabase.com/docs/reference/dart/v1/auth-getsession)
  - [Retrieve a user](https://supabase.com/docs/reference/dart/v1/auth-getuser)
  - [Update a user](https://supabase.com/docs/reference/dart/v1/auth-updateuser)
  - [Send a password reauthentication nonce](https://supabase.com/docs/reference/dart/v1/auth-reauthentication)
  - [Resend an OTP](https://supabase.com/docs/reference/dart/v1/auth-resend)
  - Auth MFA

  - Auth Admin
- * * *


Edge Functions

  - [Invokes a Supabase Edge Function.](https://supabase.com/docs/reference/dart/v1/functions-invoke)
- * * *


Realtime

  - [Listen to database changes](https://supabase.com/docs/reference/dart/v1/stream)
  - [Subscribe to channel](https://supabase.com/docs/reference/dart/v1/subscribe)
  - [Unsubscribe from a channel](https://supabase.com/docs/reference/dart/v1/removechannel)
  - [Unsubscribe from all channels](https://supabase.com/docs/reference/dart/v1/removeallchannels)
  - [Retrieve all channels](https://supabase.com/docs/reference/dart/v1/getchannels)
- * * *


Storage

  - File Buckets



    [File Buckets](https://supabase.com/docs/reference/dart/v1/file-buckets) - [List all buckets](https://supabase.com/docs/reference/dart/v1/storage-listbuckets)
- [Retrieve a bucket](https://supabase.com/docs/reference/dart/v1/storage-getbucket)
- [Create a bucket](https://supabase.com/docs/reference/dart/v1/storage-createbucket)
- [Empty a bucket](https://supabase.com/docs/reference/dart/v1/storage-emptybucket)
- [Update a bucket](https://supabase.com/docs/reference/dart/v1/storage-updatebucket)
- [Delete a bucket](https://supabase.com/docs/reference/dart/v1/storage-deletebucket)
- [Upload a file](https://supabase.com/docs/reference/dart/v1/storage-from-upload)
- [Replace an existing file](https://supabase.com/docs/reference/dart/v1/storage-from-update)
- [Move an existing file](https://supabase.com/docs/reference/dart/v1/storage-from-move)
- [Create a signed URL](https://supabase.com/docs/reference/dart/v1/storage-from-createsignedurl)
- [Retrieve public URL](https://supabase.com/docs/reference/dart/v1/storage-from-getpublicurl)
- [Download a file](https://supabase.com/docs/reference/dart/v1/storage-from-download)
- [Delete files in a bucket](https://supabase.com/docs/reference/dart/v1/storage-from-remove)
- [List all files in a bucket](https://supabase.com/docs/reference/dart/v1/storage-from-list)

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

Dart Reference v1.0

##### Version out of date

There's a newer version of this library! Migrate to the [newest version](https://supabase.com/docs/reference/dart).

# Flutter Client Library

supabase\_flutter [View on GitHub](https://github.com/supabase/supabase-flutter)

This reference documents every object and method available in Supabase's Flutter library, [supabase-flutter](https://pub.dev/packages/supabase_flutter). You can use supabase-flutter to interact with your Postgres database, listen to database changes, invoke Deno Edge Functions, build login and user management functionality, and manage large files.

We also provide a [supabase](https://pub.dev/packages/supabase) package for non-Flutter projects.

* * *

## Installing

### Install from pub.dev [\#](https://supabase.com/docs/reference/dart/v1/storage-from-list\#install-from-pubdev)

You can install the Supabase package from [pub.dev](https://pub.dev/packages/supabase_flutter).

FlutterOther Dart Project

```
1

flutter pub add supabase_flutter
```

* * *

## Initializing

You can initialize Supabase with the static `initialize()` method of `Supabase` class.

The Supabase client is your entrypoint to the rest of the Supabase functionality and is the easiest way to interact with everything we offer within the Supabase ecosystem.

For FlutterFor other Dart projects

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

Future<void> main() async {  await Supabase.initialize(    url: 'https://xyzcompany.supabase.co',    anonKey: 'publishable-or-anon-key',  );  runApp(MyApp());}// Get a reference your Supabase clientfinal supabase = Supabase.instance.client;
```

* * *

## Fetch data

Perform a SELECT query on the table or view.

- By default, Supabase projects will return a maximum of 1,000 rows. This setting can be changed in Project API Settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
- `select()` can be combined with [Filters](https://supabase.com/docs/reference/dart/using-filters)
- `select()` can be combined with [Modifiers](https://supabase.com/docs/reference/dart/using-modifiers)
- `apikey` is a reserved keyword if you're using the [Supabase Platform](https://supabase.com/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465).

Getting your dataSelecting specific columnsQuery foreign tablesQuery the same foreign table multiple timesFiltering with inner joinsQuerying with count optionQuerying JSON dataReturn data as CSVSwitching schemas per query

```
1
2
3

final data = await supabase  .from('cities')  .select('name');
```

* * *

## Insert data

Perform an INSERT into the table or view.

Create a recordBulk createFetch inserted record

```
1
2
3

await supabase    .from('cities')    .insert({'name': 'The Shire', 'country_id': 554});
```

* * *

## Update data

Perform an UPDATE on the table or view.

- `update()` should always be combined with [Filters](https://supabase.com/docs/reference/dart/using-filters) to target the item(s) you wish to update.

Update your dataUpdate JSON dataFetch updated rows

```
1
2
3
4

await supabase  .from('cities')  .update({ 'name': 'Middle Earth' })  .match({ 'name': 'Auckland' });
```

* * *

## Upsert data

Perform an UPSERT on the table or view. Depending on the column(s) passed to `onConflict`, `.upsert()` allows you to perform the equivalent of `.insert()` if a row with the corresponding `onConflict` columns doesn't exist, or if it does exist, perform an alternative action depending on `ignoreDuplicates`.

- Primary keys must be included in `values` to use upsert.

Upsert your dataUpserting into tables with constraintsReturn the exact number of rows

```
1
2
3

await supabase  .from('messages')  .upsert({ 'id': 3, 'message': 'foo', 'username': 'supabot' });
```

* * *

## Delete data

Perform a DELETE on the table or view.

- `delete()` should always be combined with [Filters](https://supabase.com/docs/reference/dart/using-filters) to target the item(s) you wish to delete.
- If you use `delete()` with filters and you have RLS enabled, only rows visible through `SELECT` policies are deleted. Note that by default no rows are visible, so you need at least one `SELECT`/`ALL` policy that makes the rows visible.

Delete recordsFetch deleted records

```
1
2
3
4

await supabase  .from('cities')  .delete()  .match({ 'id': 666 });
```

* * *

## Call a Postgres function

You can call stored procedures as a "Remote Procedure Call".

That's a fancy way of saying that you can put some logic into your database then call it from anywhere. It's especially useful when the logic rarely changes - like password resets and updates.

Call a stored procedureWith Parameters

```
1
2

final data = await supabase  .rpc('hello_world');
```

Notes

* * *

## Using filters

Filters allow you to only return rows that match certain conditions.

Filters can be used on `select()`, `update()`, and `delete()` queries.

If a Database function returns a table response, you can also apply filters.

Applying FiltersChaining FiltersConditional ChainingFilter by values within a JSON columnFilter Foreign Tables

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

final data = await supabase  .from('cities')  .select('name, country_id')  .eq('name', 'The Shire');  // Correctfinal data = await supabase  .from('cities')  .eq('name', 'The Shire')  // Incorrect  .select('name, country_id');
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

final data = await supabase  .from('instruments')  .select('name, section_id')  .eq('name', 'xylophone');
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

final data = await supabase  .from('instruments')  .select('name, section_id')  .neq('name', 'violin');
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

final data = await supabase  .from('cities')  .select('name, country_id')  .gt('country_id', 250);
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

final data = await supabase  .from('cities')  .select('name, country_id')  .gte('country_id', 250);
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

final data = await supabase  .from('cities')  .select('name, country_id')  .lt('country_id', 250);
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

final data = await supabase  .from('cities')  .select('name, country_id')  .lte('country_id', 250);
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

final data = await supabase  .from('cities')  .select('name, country_id')  .like('name', '%la%');
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

final data = await supabase  .from('cities')  .select('name, country_id')  .ilike('name', '%la%');
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

final data = await supabase  .from('cities')  .select('name, country_id')  .is_('name', null);
```

* * *

## Column is in an array

Finds all rows whose value on the stated `column` is found on the specified `values`.

`is_` and `in_` filter methods are suffixed with `_` to avoid collisions with reserved keywords.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .in_('name', ['Minas Tirith', 'Minas Morgul']);
```

* * *

## Column contains every element in a value

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, main_exports')  .contains('main_exports', ['oil']);
```

* * *

## Contained by value

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, main_exports')  .containedBy('main_exports', ['cars', 'food', 'machine']);
```

* * *

## Greater than a range

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, population_range_millions')  .rangeGt('population_range_millions', '[150, 250]');
```

* * *

## Greater than or equal to a range

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, population_range_millions')  .rangeGte('population_range_millions', '[150, 250]');
```

* * *

## Less than a range

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, population_range_millions')  .rangeLt('population_range_millions', '[150, 250]');
```

* * *

## Less than or equal to a range

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, population_range_millions')  .rangeLte('population_range_millions', '[150, 250]');
```

* * *

## Mutually exclusive to a range

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, population_range_millions')  .rangeAdjacent('population_range_millions', '[70, 185]');
```

* * *

## With a common element

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('countries')  .select('name, id, main_exports')  .overlaps('main_exports', ['computers', 'minerals']);
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
5
6

final data = await supabase  .from('quotes')  .select('catchphrase')  .textSearch('catchphrase', "'fat' & 'cat'",    config: 'english'  );
```

* * *

## Match an associated value

Finds all rows whose columns match the specified `query` object.

With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('instruments')  .select('name, section_id')  .match({'name': 'drums', 'section_id': 2});
```

* * *

## Don't match the filter

Finds all rows which doesn't satisfy the filter.

- `.not()` expects you to use the raw [PostgREST syntax](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for the filter names and values.



```
1
2
3
4
5

.not('name','eq','violin').not('arraycol','cs','{"a","b"}') // Use Postgres array {} for array column and 'cs' for contains..not('rangecol','cs','(1,2]') // Use Postgres range syntax for range column..not('id','in','(6,7)')  // Use Postgres list () and 'in' for in_ filter..not('id','in','(${mylist.join(',')})')  // You can insert a Dart list array.
```


With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`

```
1
2
3
4

final data = await supabase  .from('instruments')  .select('name, section_id')  .not('name', 'eq', 'violin');
```

* * *

## Match at least one filter

Finds all rows satisfying at least one of the filters.

- `.or()` expects you to use the raw [PostgREST syntax](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for the filter names and values.



```
1
2
3

.or('id.in.(6,7),arraycol.cs.{"a","b"}')  // Use Postgres list () and 'in' for in_ filter. Array {} and 'cs' for contains..or('id.in.(${mylist.join(',')}),arraycol.cs.{${mylistArray.join(',')}}')	// You can insert a Dart list for list or array column..or('id.in.(${mylist.join(',')}),rangecol.cs.(${mylistRange.join(',')}]')	// You can insert a Dart list for list or range column.
```


With \`select()\`Use \`or\` with \`and\`

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .or('id.eq.20,id.eq.30');
```

* * *

## Match the filter

Finds all rows whose `column` satisfies the filter.

- `.filter()` expects you to use the raw [PostgREST syntax](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows) for the filter names and values, so it should only be used as an escape hatch in case other filters don't work.



```
1
2
3
4

.filter('arraycol','cs','{"a","b"}') // Use Postgres array {} and 'cs' for contains.  .filter('rangecol','cs','(1,2]') // Use Postgres range syntax for range column.  .filter('id','in','(6,7)')  // Use Postgres list () and 'in' for in_ filter.  .filter('id','cs','{${mylist.join(',')}}')  // You can insert a Dart array list.
```


With \`select()\`With \`update()\`With \`delete()\`With \`rpc()\`Filter embedded resources

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .filter('name', 'in', '("Minas Tirith","Minas Morgul")');
```

* * *

## Using modifiers

Filters work on the row level—they allow you to return rows that only match certain conditions without changing the shape of the rows. Modifiers are everything that don't fit that definition—allowing you to change the format of the response (e.g., returning a CSV string).

Modifiers must be specified after filters. Some modifiers only apply for queries that return rows (e.g., `select()` or `rpc()` on a function that returns a table response).

* * *

## Order the results

Orders the result with the specified column.

With \`select()\`With embedded resources

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .order('id', ascending: true);
```

* * *

## Limit the number of rows returned

Limits the result with the specified count.

With \`select()\`With embedded resources

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .limit(1);
```

* * *

## Limit the query to a range

Limits the result to rows within the specified range, inclusive.

With \`select()\`

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .range(0,3);
```

* * *

## Retrieve one row of data

Retrieves only one row from the result. Result must be one row (e.g. using limit), otherwise this will result in an error.

With \`select()\`

```
1
2
3
4

final data = await supabase  .from('cities')  .select('name, country_id')  .single();
```

* * *

## Create a new user

Creates a new user.

- By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](https://supabase.com/dashboard/project/_/auth/providers).
- **Confirm email** determines if users need to confirm their email address after signing up.

  - If **Confirm email** is enabled, a `user` is returned but `session` is null.
  - If **Confirm email** is disabled, both a `user` and a `session` are returned.
- When the user confirms their email address, they are redirected to the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](https://supabase.com/dashboard/project/_/auth/url-configuration).
- If signUp() is called for an existing confirmed user:
  - If **Confirm email** is enabled in [your project](https://supabase.com/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
  - If **Confirm email** is disabled, the error message, `User already registered` is returned.

Sign up.Sign up with additional metadataSign up with redirect URL

```
1
2
3
4
5
6

final AuthResponse res = await supabase.auth.signUp(  email: 'example@email.com',  password: 'example-password',);final Session? session = res.session;final User? user = res.user;
```

* * *

## Listen to auth events

Receive a notification every time an auth event happens.

- Types of auth events: `AuthChangeEvent.passwordRecovery`, `AuthChangeEvent.signedIn`, `AuthChangeEvent.signedOut`, `AuthChangeEvent.tokenRefreshed`, `AuthChangeEvent.userUpdated`and `AuthChangeEvent.userDeleted`

Listen to auth changesListen to a specific eventUnsubscribe from auth subscription

```
1
2
3
4

final authSubscription = supabase.auth.onAuthStateChange.listen((data) {  final AuthChangeEvent event = data.event;  final Session? session = data.session;});
```

* * *

## Sign in a user

Log in an existing user using email or phone number with password.

- Requires either an email and password or a phone number and password.

Sign in with email and passwordSign in with phone and password

```
1
2
3
4
5
6

final AuthResponse res = await supabase.auth.signInWithPassword(  email: 'example@email.com',  password: 'example-password',);final Session? session = res.session;final User? user = res.user;
```

* * *

## Sign in a user through OTP

- Requires either an email or phone number.
- This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
- If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
- If you're using phone, you can configure whether you want the user to receive a OTP.
- The magic link's destination URL is determined by the [`SITE_URL`](https://supabase.com/docs/guides/auth/redirect-urls). You can modify the `SITE_URL` or add additional redirect urls in [your project](https://supabase.com/dashboard/project/_/auth/url-configuration).

Sign in with email.Sign in with SMS OTP.Sign in with WhatsApp OTP

```
1
2
3
4

await supabase.auth.signInWithOtp(  email: 'example@email.com',  emailRedirectTo: kIsWeb ? null : 'io.supabase.flutter://signin-callback/',);
```

Notes

* * *

## Sign in with Apple

Signs in a user using native Apple login.

- You need to [register your bundle ID](https://developer.apple.com/help/account/manage-identifiers/register-an-app-id/) and add it to Supabase dashboard.
- This method is only available in iOS and macOS
- For other platforms, [signInWithOAuth()](https://supabase.com/docs/reference/dart/auth-signinwithoauth) should be used.

Sign in with Apple

```
1

final AuthResponse res = await supabase.auth.signInWithApple();
```

* * *

## Sign in a user through OAuth

Signs the user in using third party OAuth providers.

- This method is used for signing in using a third-party provider.
- Supabase supports many different [third-party providers](https://supabase.com/docs/guides/auth#providers).

Sign in using a third-party providerWith \`redirectTo\`With scopes

```
1

await supabase.auth.signInWithOAuth(Provider.github);
```

* * *

## Sign out a user

Signs out the current user, if there is a logged in user.

- In order to use the `signOut()` method, the user needs to be signed in first.

Sign out

```
1

await supabase.auth.signOut();
```

* * *

## Verify and log in through OTP

- The `verifyOtp` method takes in different verification types. If a phone number is used, the type can either be `sms` or `phone_change`. If an email address is used, the type can be one of the following: `signup`, `magiclink`, `recovery`, `invite` or `email_change`.
- The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up / sign-in a user.

Verify Sms One-Time Password (OTP)Verify Signup One-Time Password (OTP)

```
1
2
3
4
5
6
7

final AuthResponse res = await supabase.auth.verifyOTP(  type: OtpType.sms,  token: '111111',  phone: '+13334445555',);final Session? session = res.session;final User? user = res.user;
```

* * *

## Retrieve a session

Returns the session data, if there is an active session.

Get the session data

```
1

final Session? session = supabase.auth.currentSession;
```

* * *

## Retrieve a user

Returns the user data, if there is a logged in user.

Get the logged in user

```
1

final User? user = supabase.auth.currentUser;
```

* * *

## Update a user

Updates user data for a logged in user.

- In order to use the `updateUser()` method, the user needs to be signed in first.
- By Default, email updates sends a confirmation link to both the user's current and new email. To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](https://supabase.com/dashboard/project/_/auth/providers).

Update the email for an authenticated userUpdate the password for an authenticated userUpdate the user's metadataUpdate the user's password with a nonce

```
1
2
3
4
5
6

final UserResponse res = await supabase.auth.updateUser(  UserAttributes(    email: 'example@email.com',  ),);final User? updatedUser = res.user;
```

Notes

* * *

## Send a password reauthentication nonce

- This method is used together with `updateUser()` when a user's password needs to be updated.
- This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.

Send reauthentication nonce

```
1

await supabase.auth.reauthenticate();
```

Notes

* * *

## Resend an OTP

- Resends a signup confirmation, email change or phone change email to the user.
- Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
- Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
- This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made.

Resend an email signup confirmation

```
1
2
3
4

final ResendResponse res = await supabase.auth.resend(  type: OtpType.email,  email: 'email@example.com',);
```

Notes

* * *

## Auth MFA

This section contains methods commonly used for Multi-Factor Authentication (MFA) and are invoked behind the `supabase.auth.mfa` namespace.

Currently, we only support time-based one-time password (TOTP) as the 2nd factor. We don't support recovery codes but we allow users to enroll more than 1 TOTP factor, with an upper limit of 10.

Having a 2nd TOTP factor for recovery frees the user of the burden of having to store their recovery codes somewhere. It also reduces the attack surface since multiple recovery codes are usually generated compared to just having 1 backup TOTP factor.

* * *

## Enroll a factor

Starts the enrollment process for a new Multi-Factor Authentication (MFA) factor. This method creates a new `unverified` factor. To verify a factor, present the QR code or secret to the user and ask them to add it to their authenticator app. The user has to enter the code from their authenticator app to verify it.

- Currently, `totp` is the only supported `factorType`. The returned `id` should be used to create a challenge.
- To create a challenge, see [`mfa.challenge()`](https://supabase.com/docs/reference/dart/auth-mfa-challenge).
- To verify a challenge, see [`mfa.verify()`](https://supabase.com/docs/reference/dart/auth-mfa-verify).
- To create and verify a challenge in a single step, see [`mfa.challengeAndVerify()`](https://supabase.com/docs/reference/dart/auth-mfa-challengeandverify).

Enroll a time-based, one-time password (TOTP) factor

```
1
2
3

final res = await supabase.auth.mfa.enroll(factorType: FactorType.totp);final qrCodeUrl = res.totp.qrCode;
```

* * *

## Create a challenge

Prepares a challenge used to verify that a user has access to a MFA factor.

- An [enrolled factor](https://supabase.com/docs/reference/dart/auth-mfa-enroll) is required before creating a challenge.
- To verify a challenge, see [`mfa.verify()`](https://supabase.com/docs/reference/dart/auth-mfa-verify).

Create a challenge for a factor

```
1
2
3

final res = await supabase.auth.mfa.challenge(  factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',);
```

* * *

## Verify a challenge

Verifies a code against a challenge. The verification code is provided by the user by entering a code seen in their authenticator app.

- To verify a challenge, please [create a challenge](https://supabase.com/docs/reference/dart/auth-mfa-challenge) first.

Verify a challenge for a factor

```
1
2
3
4
5

final res = await supabase.auth.mfa.verify(  factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',  challengeId: '4034ae6f-a8ce-4fb5-8ee5-69a5863a7c15',  code: '123456',);
```

* * *

## Create and verify a challenge

Helper method which creates a challenge and immediately uses the given code to verify against it thereafter. The verification code is provided by the user by entering a code seen in their authenticator app.

- An [enrolled factor](https://supabase.com/docs/reference/dart/auth-mfa-enroll) is required before invoking `challengeAndVerify()`.
- Executes [`mfa.challenge()`](https://supabase.com/docs/reference/dart/auth-mfa-challenge) and [`mfa.verify()`](https://supabase.com/docs/reference/dart/auth-mfa-verify) in a single step.

Create and verify a challenge for a factor

```
1
2
3
4

final res = await supabase.auth.mfa.challengeAndVerify(  factorId: '34e770dd-9ff9-416c-87fa-43b31d7ef225',  code: '123456',);
```

* * *

## Unenroll a factor

Unenroll removes a MFA factor. A user has to have an aal2 authenticator level in order to unenroll a verified factor.

Unenroll a factor

```
1
2
3

final res = await supabase.auth.mfa.unenroll(  '34e770dd-9ff9-416c-87fa-43b31d7ef225',);
```

* * *

## Get Authenticator Assurance Level

Returns the Authenticator Assurance Level (AAL) for the active session.

- Authenticator Assurance Level (AAL) is the measure of the strength of an authentication mechanism.
- In Supabase, having an AAL of `aal1` refers to having the 1st factor of authentication such as an email and password or OAuth sign-in while `aal2` refers to the 2nd factor of authentication such as a time-based, one-time-password (TOTP).
- If the user has a verified factor, the `nextLevel` field will return `aal2`, else, it will return `aal1`.

Get the AAL details of a session

```
1
2
3
4

final res = supabase.auth.mfa.getAuthenticatorAssuranceLevel();final currentLevel = res.currentLevel;final nextLevel = res.nextLevel;final currentAuthenticationMethods = res.currentAuthenticationMethods;
```

* * *

## Auth Admin

- Any method under the `supabase.auth.admin` namespace requires a `service_role` key.
- These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the Flutter app.

Create server-side auth client

```
1

final supabase = SupabaseClient(supabaseUrl, serviceRoleKey);
```

* * *

## Retrieve a user

Get user by id.

- Fetches the user object from the database based on the user's id.
- The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.

Fetch the user object using the access\_token jwt

```
1
2

final res = await supabase.auth.admin.getUserById(userId);final user = res.user;
```

* * *

## List all users

Get a list of users.

- Defaults to return 50 users per page.

Get a page of usersPaginated list of users

```
1

final List<User> users = await supabase.auth.admin.listUsers();
```

* * *

## Create a user

Creates a new user.

- To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
- `createUser()` will not send a confirmation email to the user. You can use [`inviteUserByEmail()`](https://supabase.com/docs/reference/dart/auth-admin-inviteuserbyemail) if you want to send them an email invite instead.
- If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.

With custom user metadataAuto-confirm the user's emailAuto-confirm the user's phone number

```
1
2
3
4
5

final res = await supabase.auth.admin.createUser(AdminUserAttributes(  email: 'user@email.com',  password: 'password',  userMetadata: {'name': 'Yoda'},));
```

* * *

## Delete a user

Delete a user.

- The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.

Removes a user

```
1
2

await supabase.auth.admin    .deleteUser('715ed5db-f090-4b8c-a067-640ecee36aa0');
```

* * *

## Send an email invite link

Sends an invite link to the user's email address.

Invite a user

```
1
2
3

final UserResponse res = await supabase.auth.admin    .inviteUserByEmail('email@example.com');final User? user = res.user;
```

* * *

## Generate an email link

Generates email links and OTPs. This will not send links or OTPs to the end user. This function is for custom admin functionality.

- The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `emailChangeCurrent`, `emailChangeNew`, `phoneChange`.
- `generateLink()` only generates the email link for `email_change_email` if the "Secure email change" setting is enabled under the "Email" provider in your Supabase project.
- `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.

Generate a signup link

```
1
2
3
4
5
6

final res = await supabase.auth.admin.generateLink(  type: GenerateLinkType.signup,  email: 'email@example.com',  password: 'secret',);final actionLink = res.properties.actionLink;
```

* * *

## Update a user

Updates a user's email

```
1
2
3
4
5
6

final UserResponse res = await supabase.auth.admin.updateUserById(  '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',  attributes: AdminUserAttributes(    email: 'new@email.com',  ),);
```

* * *

## Invokes a Supabase Edge Function.

Invokes a Supabase Function. See the [guide](https://supabase.com/docs/guides/functions) for details on writing Functions.

- Requires an Authorization header.
- Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.

Basic invocation.Specifying response type.Parsing custom headers.

```
1
2

final res = await supabase.functions.invoke('hello', body: {'foo': 'baa'});final data = res.data;
```

* * *

## Listen to database changes

Returns real-time data from your table as a `Stream`.

- Realtime is disabled by default for new tables. You can turn it on by [managing replication](https://supabase.com/docs/guides/realtime/postgres-changes#replication-setup).
- `stream()` will emit the initial data as well as any further change on the database as `Stream<List<Map<String, dynamic>>>` by combining Postgrest and Realtime.
- Takes a list of primary key column names that will be used to update and delete the proper records within the SDK.
- The following filters are available
  - `.eq('column', value)` listens to rows where the column equals the value
  - `.neq('column', value)` listens to rows where the column does not equal the value
  - `.gt('column', value)` listens to rows where the column is greater than the value
  - `.gte('column', value)` listens to rows where the column is greater than or equal to the value
  - `.lt('column', value)` listens to rows where the column is less than the value
  - `.lte('column', value)` listens to rows where the column is less than or equal to the value
  - `.inFilter('column', [val1, val2, val3])` listens to rows where the column is one of the values

Listen to a tableWith filter, order and limitWith an IN filterUsing \`stream()\` with \`StreamBuilder\`

```
1
2
3
4
5

supabase.from('countries')  .stream(primaryKey: ['id'])  .listen((List<Map<String, dynamic>> data) {  // Do something awesome with the data});
```

* * *

## Subscribe to channel

Subscribe to realtime changes in your database.

- Realtime is disabled by default for new tables. You can turn it on by [managing replication](https://supabase.com/docs/guides/realtime/postgres-changes#replication-setup).
- If you want to receive the "previous" data for updates and deletes, you will need to set `REPLICA IDENTITY` to `FULL`, like this: `ALTER TABLE your_table REPLICA IDENTITY FULL;`

Listen to all database changesListen to a specific tableListen to insertsListen to updatesListen to deletesListen to multiple eventsListen to row level changes

```
1
2
3
4
5
6
7

supabase.channel('*').on(  RealtimeListenTypes.postgresChanges,  ChannelFilter(event: '*', schema: '*'),  (payload, [ref]) {    print('Change received: ${payload.toString()}');  },).subscribe();
```

* * *

## Unsubscribe from a channel

Unsubscribes and removes Realtime channel from Realtime client.

- Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove a channel

```
1

final status = await supabase.removeChannel(channel);
```

* * *

## Unsubscribe from all channels

Unsubscribes and removes all Realtime channels from Realtime client.

- Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.

Remove all channels

```
1

final statuses = await supabase.removeAllChannels();
```

* * *

## Retrieve all channels

Returns all Realtime channels.

Get all channels

```
1

final channels = supabase.getChannels();
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
2
3

final List<Bucket> buckets = await supabase  .storage  .listBuckets();
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
2
3

final Bucket bucket = await supabase  .storage  .getBucket('avatars');
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
2
3

final String bucketId = await supabase  .storage  .createBucket('avatars');
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
2
3

final String result = await supabase  .storage  .emptyBucket('avatars');
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
2
3

final res = await supabase  .storage  .updateBucket('avatars', const BucketOptions(public: false));
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
2
3

final String result = await supabase  .storage  .deleteBucket('avatars');
```

* * *

## Upload a file

Uploads a file to an existing bucket.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `insert`

Upload fileUpload file on web

```
1
2
3
4
5
6

final avatarFile = File('path/to/file');final String path = await supabase.storage.from('avatars').upload(      'public/avatar1.png',      avatarFile,      fileOptions: const FileOptions(cacheControl: '3600', upsert: false),    );
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
3
4
5
6

final avatarFile = File('path/to/local/file');final String path = await supabase.storage.from('avatars').update(      'public/avatar1.png',      avatarFile,      fileOptions: const FileOptions(cacheControl: '3600', upsert: false),    );
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
3
4

final String result = await supabase  .storage  .from('avatars')  .move('public/avatar1.png', 'private/avatar2.png');
```

* * *

## Create a signed URL

Create signed url to download file without requiring permissions. This URL can be valid for a set number of seconds.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `select`

Create Signed URLWith transform

```
1
2
3
4

final String signedUrl = await supabase  .storage  .from('avatars')  .createSignedUrl('avatar1.png', 60);
```

* * *

## Retrieve public URL

Retrieve URLs for assets in public buckets

- The bucket needs to be set to public, either via [updateBucket()](https://supabase.com/docs/reference/dart/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: none

Returns the URL for an asset in a public bucketWith transform

```
1
2
3
4

final String publicUrl = supabase  .storage  .from('public-bucket')  .getPublicUrl('avatar1.png');
```

* * *

## Download a file

Downloads a file.

- Policy permissions required:
  - `buckets` permissions: none
  - `objects` permissions: `select`

Download fileWith transform

```
1
2
3
4

final Uint8List file = await supabase  .storage  .from('avatars')  .download('avatar1.png');
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
2
3
4

final List<FileObject> objects = await supabase  .storage  .from('avatars')  .remove(['avatar1.png']);
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
2
3
4

final List<FileObject> objects = await supabase  .storage  .from('avatars')  .list();
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