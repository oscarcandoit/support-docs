---
url: "https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A"
title: "Supabase Docs | Troubleshooting | Errors when creating / updating / deleting users"
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

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Errors when creating / updating / deleting users

Last edited: 11/10/2025

* * *

These error are normal a side effect of issues in your custom user management logic. This can cause errors that return HTTP `500` status codes with a of code `unexpected_failure` and one of the following error messages

- Failed to create user: Database error creating new user
- Failed to update user: Error updating user
- Failed to delete user: Database error deleting user
- Database error updating user
- Database error saving new user

## Debugging this error [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#debugging-this-error)

- [Auth logs](https://supabase.com/dashboard/project/_/logs/auth-logs): as the error relates to [Auth](https://supabase.com/docs/guides/auth) users
- [Postgres logs](https://supabase.com/dashboard/project/_/logs/postgres-logs): for raw error logs related to database

## Common causes of this error: [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#common-causes-of-this-error)

- Trigger/trigger function setup on the `auth.users` table
- A constraint on the `auth.users` table which isn't being met
- You are using Prisma and it has broken all the permissions on the `auth.users` table

## Example error messages [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#example-error-messages)

Use the hints provided in the error message to fix issues in your custom user management logic.

**Trigger/trigger function related error messages** \- [Solution for trigger related issues](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A#solution-for-trigger-related-issues)

```
1

"error":"error update user`s last_sign_in field: ERROR: permission denied for table profiles (SQLSTATE 42501)"
```

**Constraint related error message** \- [Solution for constraint related issues](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A#solution-for-constraint-related-issues)

```
1
2

ERROR:  23503: update or delete on table "users" violates foreign key constraint "profiles_id_fkey" on table "profiles"DETAIL:  Key (id)=(7428a53c-75b7-4531-9ae9-1567d9c4ac0a) is still referenced from table "profiles".
```

**Missing column**

```
1

ERROR: column \"updated_at\" of relation \"profiles\" does not exist (SQLSTATE 42703)
```

**Broken search path / incorrect name** \- [42P01 related solution](https://supabase.com/docs/guides/troubleshooting/resolving-42p01-relation-does-not-exist-error-W4_9-V)

```
1

failed to close prepared statement: ERROR: current transaction is aborted, commands ignored until end of transaction block (SQLSTATE 25P02): ERROR: relation \"public.profiles\" does not exist (SQLSTATE 42P01)
```

* * *

## Solution for constraint related issues [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#solution-for-constraint-related-issues)

- Check for foreign/primary key relationship between the `auth.users` table and another table
- Then ALTER the [behavior](https://stackoverflow.com/questions/5383612/setting-up-table-relations-what-do-cascade-set-null-and-restrict-do) of the relationship and recreate it with a less [restrictive constraint](https://stackoverflow.com/questions/3359329/how-to-change-the-foreign-key-referential-action-behavior).
- If this is related to deleting records, review the [Cascade Deletes doc](https://supabase.com/docs/guides/database/postgres/cascade-deletes) for possible approaches (e.g. using `CASCADE` / `SET NULL`)

* * *

## Solution for trigger related issues [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#solution-for-trigger-related-issues)

Supabase Auth uses your project's database to store user data. It relies on the `auth` schema, and Supabase restricts access to the `auth` schema to prevent unintended custom changes that could break the functionality of the Auth service.

Check if the `auth` schema contains any triggers in the [Dashboard's trigger section](https://supabase.com/dashboard/project/_/database/triggers?schema=auth).

1. Identify related functions using `security invoker` from the [Dashboard's function section](https://supabase.com/dashboard/project/_/database/functions)
2. Remove all triggers by dropping their functions with a CASCADE modifier shown below (This command still works because the `postgres` role has the ownership of the function, and the `CASCADE` clause will drop the trigger indirectly.)

```
1
2
3
4

DROP FUNCTION <function name>() CASCADE;-- If you'd prefer, you can drop the trigger alone with the following query:-- DROP TRIGGER <trigger_name> on auth.<table_name>;
```

3. Recreate the functions with a [security definer](https://supabase.com/docs/guides/database/functions#security-definer-vs-invoker) modifier
4. Recreate the triggers

**Example function and trigger using security definer**
The [SQL Editor](https://supabase.com/dashboard/project/_/sql/) contains a template for [User Management](https://supabase.com/dashboard/project/_/sql/quickstarts). Within it, there is a working example of how to setup triggers with security definer that may be worth referencing:

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

create table profiles (  id uuid references auth.users on delete cascade not null primary key,  updated_at timestamp with time zone,  username text unique,  full_name text,  avatar_url text,  website text,  constraint username_length check (char_length(username) >= 3));create function public.handle_new_user()returns triggerset search_path = ''as $$begin  insert into public.profiles (id, full_name, avatar_url)  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');  return new;end;$$ language plpgsql security definer;create trigger on_auth_user_created  after insert on auth.users  for each row execute procedure public.handle_new_user();
```

### Explanation [\#](https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A\#explanation)

One of the most common design patterns in Supabase is to add a trigger to the `auth.users` table. The database role managing authentication (`supabase_auth_admin`) only has the necessary permissions it needs to perform its duties. So, when a trigger operated by the `supabase_auth_admin` interacts outside the auth schema, it causes a permission error.

A security definer function retains the privileges of the database user that created it. As long as it is the `postgres` role, your auth triggers should be able to engage with outside tables.

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Database](https://supabase.com/docs/guides/troubleshooting?products=database) [Studio](https://supabase.com/docs/guides/troubleshooting?products=studio)

* * *

### Related error codes

[500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure) [500 unexpected\_failure](https://supabase.com/docs/guides/troubleshooting?errorCodes=500+unexpected_failure)

* * *

### Keywords

[users](https://supabase.com/docs/guides/troubleshooting?tags=users)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21247)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)