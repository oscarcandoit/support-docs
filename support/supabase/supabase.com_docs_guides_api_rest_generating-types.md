---
url: "https://supabase.com/docs/guides/api/rest/generating-types"
title: "Generating TypeScript Types | Supabase Docs"
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

[REST API](https://supabase.com/docs/guides/api)

[Overview](https://supabase.com/docs/guides/api)

[Quickstart](https://supabase.com/docs/guides/api/quickstart)

[Client Libraries](https://supabase.com/docs/guides/api/rest/client-libs)

[Auto-generated Docs](https://supabase.com/docs/guides/api/rest/auto-generated-docs)

[Generating TypeScript Types](https://supabase.com/docs/guides/api/rest/generating-types)

Tools[SQL to REST API Translator](https://supabase.com/docs/guides/api/sql-to-rest)

Guides[Creating API routes](https://supabase.com/docs/guides/api/creating-routes)
[How API Keys work](https://supabase.com/docs/guides/api/api-keys)
[Securing your API](https://supabase.com/docs/guides/api/securing-your-api)

Using the Data APIs[Managing tables, views, and data](https://supabase.com/docs/guides/database/tables)
[Querying joins and nested tables](https://supabase.com/docs/guides/database/joins-and-nesting)
[JSON and unstructured data](https://supabase.com/docs/guides/database/json)
[Managing database functions](https://supabase.com/docs/guides/database/functions)
[Using full-text search](https://supabase.com/docs/guides/database/full-text-search)
[Debugging performance issues](https://supabase.com/docs/guides/database/debugging-performance)
[Using custom schemas](https://supabase.com/docs/guides/api/using-custom-schemas)
[Converting from SQL to JavaScript API](https://supabase.com/docs/guides/api/sql-to-api)

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

REST API

1. [REST API](https://supabase.com/docs/guides/api)
3. [Generating TypeScript Types](https://supabase.com/docs/guides/api/rest/generating-types)

# Generating TypeScript Types

## How to generate types for your API and Supabase libraries.

* * *

Supabase APIs are generated from your database, which means that we can use database introspection to generate type-safe API definitions.

## Generating types from project dashboard [\#](https://supabase.com/docs/guides/api/rest/generating-types\#generating-types-from-project-dashboard)

Supabase allows you to generate and download TypeScript types directly from the [project dashboard](https://supabase.com/dashboard/project/_/api?page=tables-intro).

## Generating types using Supabase CLI [\#](https://supabase.com/docs/guides/api/rest/generating-types\#generating-types-using-supabase-cli)

The Supabase CLI is a single binary Go application that provides everything you need to setup a local development environment.

You can [install the CLI](https://www.npmjs.com/package/supabase) via npm or other supported package managers. The minimum required version of the CLI is [v1.8.1](https://github.com/supabase/cli/releases).

```
1

npm i supabase@">=1.8.1" --save-dev
```

Login with your Personal Access Token:

```
1

npx supabase login
```

Before generating types, ensure you initialize your Supabase project:

```
1

npx supabase init
```

Generate types for your project to produce the `database.types.ts` file:

```
1

npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > database.types.ts
```

or in case of local development:

```
1

npx supabase gen types typescript --local > database.types.ts
```

These types are generated from your database schema. Given a table `public.movies`, the generated types will look like:

```
1
2
3
4
5

create table public.movies (  id bigint generated always as identity primary key,  name text not null,  data jsonb null);
```

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

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]export interface Database {  public: {    Tables: {      movies: {        Row: {          // the data expected from .select()          id: number          name: string          data: Json | null        }        Insert: {          // the data to be passed to .insert()          id?: never // generated columns must not be supplied          name: string // `not null` columns with no default must be supplied          data?: Json | null // nullable columns can be omitted        }        Update: {          // the data to be passed to .update()          id?: never          name?: string // `not null` columns are optional on .update()          data?: Json | null        }      }    }  }}
```

## Using TypeScript type definitions [\#](https://supabase.com/docs/guides/api/rest/generating-types\#using-typescript-type-definitions)

You can supply the type definitions to `supabase-js` like so:

```
1
2
3
4
5
6
7

import { createClient } from '@supabase/supabase-js'import { Database } from './database.types'const supabase = createClient<Database>(  process.env.SUPABASE_URL,  process.env.SUPABASE_PUBLISHABLE_KEY)
```

## Helper types for tables and joins [\#](https://supabase.com/docs/guides/api/rest/generating-types\#helper-types-for-tables-and-joins)

You can use the following helper types to make the generated TypeScript types easier to use.

Sometimes the generated types are not what you expect. For example, a view's column may show up as nullable when you expect it to be `not null`. Using [type-fest](https://github.com/sindresorhus/type-fest), you can override the types like so:

```
1
2
3
4
5

export type Json = // ...export interface Database {  // ...}
```

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

import { MergeDeep } from 'type-fest'import { Database as DatabaseGenerated } from './database-generated.types'export { Json } from './database-generated.types'// Override the type for a specific column in a view:export type Database = MergeDeep<  DatabaseGenerated,  {    public: {      Views: {        movies_view: {          Row: {            // id is a primary key in public.movies, so it must be `not null`            id: number          }        }      }    }  }>
```

To use `MergeDeep`, set `compilerOptions.strictNullChecks` to `true` in your `tsconfig.json`.

## Enhanced type inference for JSON fields [\#](https://supabase.com/docs/guides/api/rest/generating-types\#enhanced-type-inference-for-json-fields)

Starting from [supabase-js v2.48.0](https://github.com/supabase/supabase-js/releases/tag/v2.48.0), you can define custom types for JSON fields and get enhanced type inference when using JSON selectors with the `->` and `->>` operators. This makes your code more type-safe and intuitive when working with JSON/JSONB columns.

### Defining custom JSON types [\#](https://supabase.com/docs/guides/api/rest/generating-types\#defining-custom-json-types)

You can extend your generated database types to include custom JSON schemas using `MergeDeep`:

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
29
30
31
32
33
34
35
36
37
38

import { MergeDeep } from 'type-fest'import { Database as DatabaseGenerated } from './database-generated.types'// Define your custom JSON typetype CustomJsonType = {  foo: string  bar: { baz: number }  en: 'ONE' | 'TWO' | 'THREE'}export type Database = MergeDeep<  DatabaseGenerated,  {    public: {      Tables: {        your_table: {          Row: {            data: CustomJsonType | null          }          // Optional: Use if you want type-checking for inserts and updates          // Insert: {          //   data?: CustomJsonType | null;          // };          // Update: {          //   data?: CustomJsonType | null;          // };        }      }      Views: {        your_view: {          Row: {            data: CustomJsonType | null          }        }      }    }  }>
```

### Type-safe JSON querying [\#](https://supabase.com/docs/guides/api/rest/generating-types\#type-safe-json-querying)

Once you've defined your custom JSON types, TypeScript will automatically infer the correct types when using JSON selectors:

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

const res = await client.from('your_table').select('data->bar->baz, data->en, data->bar')if (res.data) {  console.log(res.data)  // TypeScript infers the shape of your JSON data:  // [  //   {  //     baz: number;  //     en: 'ONE' | 'TWO' | 'THREE';  //     bar: { baz: number };  //   }  // ]}
```

This feature works with:

- Single-level JSON access: `data->foo`
- Nested JSON access: `data->bar->baz`
- Text extraction: `data->>foo` (returns string)
- Mixed selections combining multiple JSON paths

The type inference automatically handles the difference between `->` (returns JSON) and `->>` (returns text) operators, ensuring your TypeScript types match the actual runtime behavior.

You can also override the type of an individual successful response if needed:

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

// Partial type override allows you to only override some of the properties in your resultsconst { data } = await supabase.from('countries').select().overrideTypes<Array<{ id: string }>>()// For a full replacement of the original return type use the `{ merge: false }` property as second argumentconst { data } = await supabase  .from('countries')  .select()  .overrideTypes<Array<{ id: string }>, { merge: false }>()// Use it with `maybeSingle` or `single`const { data } = await supabase.from('countries').select().single().overrideTypes<{ id: string }>()
```

### Type shorthands [\#](https://supabase.com/docs/guides/api/rest/generating-types\#type-shorthands)

The generated types provide shorthands for accessing tables and enums.

```
1
2
3
4
5
6
7

import { Database, Tables, Enums } from "./database.types.ts";// Before 😕let movie: Database['public']['Tables']['movies']['Row'] = // ...// After 😍let movie: Tables<'movies'>
```

### Response types for complex queries [\#](https://supabase.com/docs/guides/api/rest/generating-types\#response-types-for-complex-queries)

`supabase-js` always returns a `data` object (for success), and an `error` object (for unsuccessful requests).

These helper types provide the result types from any query, including nested types for database joins.

Given the following schema with a relation between cities and countries:

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

create table countries (  "id" serial primary key,  "name" text);create table cities (  "id" serial primary key,  "name" text,  "country_id" int references "countries");
```

We can get the nested `CountriesWithCities` type like this:

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

import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'const countriesWithCitiesQuery = supabase.from('countries').select(`  id,  name,  cities (    id,    name  )`)type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>const { data, error } = await countriesWithCitiesQueryif (error) throw errorconst countriesWithCities: CountriesWithCities = data
```

## Update types automatically with GitHub Actions [\#](https://supabase.com/docs/guides/api/rest/generating-types\#update-types-automatically-with-github-actions)

One way to keep your type definitions in sync with your database is to set up a GitHub action that runs on a schedule.

Add the following script to your `package.json` to run it using `npm run update-types`

```
1

"update-types": "npx supabase gen types --lang=typescript --project-id \"$PROJECT_REF\" > database.types.ts"
```

Create a file `.github/workflows/update-types.yml` with the following snippet to define the action along with the environment variables. This script will commit new type changes to your repo every night.

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
29
30
31
32
33
34
35
36
37
38
39
40
41

name: Update database typeson:  schedule:    # sets the action to run daily. You can modify this to run the action more or less frequently    - cron: '0 0 * * *'jobs:  update:    runs-on: ubuntu-latest    permissions:      contents: write    env:      SUPABASE_ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}      PROJECT_REF: <your-project-id>    steps:      - uses: actions/checkout@v4        with:          persist-credentials: false          fetch-depth: 0      - uses: actions/setup-node@v4        with:          node-version: 22      - run: npm run update-types      - name: check for file changes        id: git_status        run: |          echo "status=$(git status -s)" >> $GITHUB_OUTPUT      - name: Commit files        if: ${{contains(steps.git_status.outputs.status, ' ')}}        run: |          git add database.types.ts          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"          git config --local user.name "github-actions[bot]"          git commit -m "Update database types" -a      - name: Push changes        if: ${{contains(steps.git_status.outputs.status, ' ')}}        uses: ad-m/github-push-action@master        with:          github_token: ${{ secrets.GITHUB_TOKEN }}          branch: ${{ github.ref }}
```

Alternatively, you can use a community-supported GitHub action: [`generate-supabase-db-types-github-action`](https://github.com/lyqht/generate-supabase-db-types-github-action).

## Resources [\#](https://supabase.com/docs/guides/api/rest/generating-types\#resources)

- [Generating Supabase types with GitHub Actions](https://blog.esteetey.dev/how-to-create-and-test-a-github-action-that-generates-types-from-supabase-database)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx)

Watch video guide

![Video guide preview](https://supabase.com/docs/_next/image?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2F%2F7CqlTU9aOR4%2F0.jpg&w=3840&q=75)

### Is this helpful?

NoYes

### On this page

[Generating types from project dashboard](https://supabase.com/docs/guides/api/rest/generating-types#generating-types-from-project-dashboard) [Generating types using Supabase CLI](https://supabase.com/docs/guides/api/rest/generating-types#generating-types-using-supabase-cli) [Using TypeScript type definitions](https://supabase.com/docs/guides/api/rest/generating-types#using-typescript-type-definitions) [Helper types for tables and joins](https://supabase.com/docs/guides/api/rest/generating-types#helper-types-for-tables-and-joins) [Enhanced type inference for JSON fields](https://supabase.com/docs/guides/api/rest/generating-types#enhanced-type-inference-for-json-fields) [Defining custom JSON types](https://supabase.com/docs/guides/api/rest/generating-types#defining-custom-json-types) [Type-safe JSON querying](https://supabase.com/docs/guides/api/rest/generating-types#type-safe-json-querying) [Type shorthands](https://supabase.com/docs/guides/api/rest/generating-types#type-shorthands) [Response types for complex queries](https://supabase.com/docs/guides/api/rest/generating-types#response-types-for-complex-queries) [Update types automatically with GitHub Actions](https://supabase.com/docs/guides/api/rest/generating-types#update-types-automatically-with-github-actions) [Resources](https://supabase.com/docs/guides/api/rest/generating-types#resources)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)