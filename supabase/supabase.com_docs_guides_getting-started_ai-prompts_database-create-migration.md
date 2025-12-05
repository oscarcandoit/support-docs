---
url: "https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration"
title: "AI Prompt: Database: Create migration | Supabase Docs"
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

[Start with Supabase](https://supabase.com/docs/guides/getting-started)

[Features](https://supabase.com/docs/guides/getting-started/features)

[Architecture](https://supabase.com/docs/guides/getting-started/architecture)

Framework Quickstarts[Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
[Nuxt](https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs)
[Vue](https://supabase.com/docs/guides/getting-started/quickstarts/vue)
[Hono](https://supabase.com/docs/guides/getting-started/quickstarts/hono)
[Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)
[iOS SwiftUI](https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/quickstarts/kotlin)
[SvelteKit](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
[Laravel PHP](https://supabase.com/docs/guides/getting-started/quickstarts/laravel)
[Ruby on Rails](https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails)
[SolidJS](https://supabase.com/docs/guides/getting-started/quickstarts/solidjs)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs)
[Refine](https://supabase.com/docs/guides/getting-started/quickstarts/refine)

Web app demos[Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
[React](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
[Vue 3](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3)
[Nuxt 3](https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3)
[Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-angular)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs)
[SolidJS](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs)
[Svelte](https://supabase.com/docs/guides/getting-started/tutorials/with-svelte)
[SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)
[Refine](https://supabase.com/docs/guides/getting-started/tutorials/with-refine)

Mobile tutorials[Flutter](https://supabase.com/docs/guides/getting-started/tutorials/with-flutter)
[Expo React Native](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/tutorials/with-kotlin)
[Ionic React](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react)
[Ionic Vue](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue)
[Ionic Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular)
[Swift](https://supabase.com/docs/guides/getting-started/tutorials/with-swift)

AI Tools

Prompts

[Supabase Realtime AI Assistant Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime)
[Bootstrap Next.js app with Supabase Auth](https://supabase.com/docs/guides/getting-started/ai-prompts/nextjs-supabase-auth)
[Writing Supabase Edge Functions](https://supabase.com/docs/guides/getting-started/ai-prompts/edge-functions)
[Database: Declarative Database Schema](https://supabase.com/docs/guides/getting-started/ai-prompts/declarative-database-schema)
[Database: Create RLS policies](https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies)
[Database: Create functions](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions)
[Database: Create migration](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration)
[Postgres SQL Style Guide](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql)

[Model context protocol (MCP)](https://supabase.com/docs/guides/getting-started/mcp)

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

Getting Started

1. [Getting started](https://supabase.com/docs/guides/getting-started)
3. AI Tools
5. [Prompts](https://supabase.com/docs/guides/getting-started/ai-prompts)

# AI Prompt: Database: Create migration

* * *

## How to use [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration\#how-to-use)

Copy the prompt to a file in your repo.

Use the "include file" feature from your AI tool to include the prompt when chatting with your AI assistant. For example, with GitHub Copilot, use `#<filename>`, in Cursor, use `@Files`, and in Zed, use `/file`.

You can also load the prompt directly into your IDE via the following links:

- [Open in Cursor](cursor://anysphere.cursor-deeplink/prompt?text=%23+Database%3A+Create+migration%0A%0AYou+are+a+Postgres+Expert+who+loves+creating+secure+database+schemas.%0A%0AThis+project+uses+the+migrations+provided+by+the+Supabase+CLI.%0A%0A%23%23+Creating+a+migration+file%0A%0AGiven+the+context+of+the+user%27s+message%2C+create+a+database+migration+file+inside+the+folder+%60supabase%2Fmigrations%2F%60.%0A%0AThe+file+MUST+following+this+naming+convention%3A%0A%0AThe+file+MUST+be+named+in+the+format+%60YYYYMMDDHHmmss_short_description.sql%60+with+proper+casing+for+months%2C+minutes%2C+and+seconds+in+UTC+time%3A%0A%0A1.+%60YYYY%60+-+Four+digits+for+the+year+%28e.g.%2C+%602024%60%29.%0A2.+%60MM%60+-+Two+digits+for+the+month+%2801+to+12%29.%0A3.+%60DD%60+-+Two+digits+for+the+day+of+the+month+%2801+to+31%29.%0A4.+%60HH%60+-+Two+digits+for+the+hour+in+24-hour+format+%2800+to+23%29.%0A5.+%60mm%60+-+Two+digits+for+the+minute+%2800+to+59%29.%0A6.+%60ss%60+-+Two+digits+for+the+second+%2800+to+59%29.%0A7.+Add+an+appropriate+description+for+the+migration.%0A%0AFor+example%3A%0A%0A%60%60%60%0A20240906123045_create_profiles.sql%0A%60%60%60%0A%0A%0A%23%23+SQL+Guidelines%0A%0AWrite+Postgres-compatible+SQL+code+for+Supabase+migration+files+that%3A%0A%0A-+Includes+a+header+comment+with+metadata+about+the+migration%2C+such+as+the+purpose%2C+affected+tables%2Fcolumns%2C+and+any+special+considerations.%0A-+Includes+thorough+comments+explaining+the+purpose+and+expected+behavior+of+each+migration+step.%0A-+Write+all+SQL+in+lowercase.%0A-+Add+copious+comments+for+any+destructive+SQL+commands%2C+including+truncating%2C+dropping%2C+or+column+alterations.%0A-+When+creating+a+new+table%2C+you+MUST+enable+Row+Level+Security+%28RLS%29+even+if+the+table+is+intended+for+public+access.%0A-+When+creating+RLS+Policies%0A++-+Ensure+the+policies+cover+all+relevant+access+scenarios+%28e.g.+select%2C+insert%2C+update%2C+delete%29+based+on+the+table%27s+purpose+and+data+sensitivity.%0A++-+If+the+table++is+intended+for+public+access+the+policy+can+simply+return+%60true%60.%0A++-+RLS+Policies+should+be+granular%3A+one+policy+for+%60select%60%2C+one+for+%60insert%60+etc%29+and+for+each+supabase+role+%28%60anon%60+and+%60authenticated%60%29.+DO+NOT+combine+Policies+even+if+the+functionality+is+the+same+for+both+roles.%0A++-+Include+comments+explaining+the+rationale+and+intended+behavior+of+each+security+policy%0A%0AThe+generated+SQL+code+should+be+production-ready%2C+well-documented%2C+and+aligned+with+Supabase%27s+best+practices.)

## Prompt [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration\#prompt)

````
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
42
43
44
45

# Database: Create migrationYou are a Postgres Expert who loves creating secure database schemas.This project uses the migrations provided by the Supabase CLI.## Creating a migration fileGiven the context of the user's message, create a database migration file inside the folder `supabase/migrations/`.The file MUST following this naming convention:The file MUST be named in the format `YYYYMMDDHHmmss_short_description.sql` with proper casing for months, minutes, and seconds in UTC time:1. `YYYY` - Four digits for the year (e.g., `2024`).2. `MM` - Two digits for the month (01 to 12).3. `DD` - Two digits for the day of the month (01 to 31).4. `HH` - Two digits for the hour in 24-hour format (00 to 23).5. `mm` - Two digits for the minute (00 to 59).6. `ss` - Two digits for the second (00 to 59).7. Add an appropriate description for the migration.For example:```20240906123045_create_profiles.sql```## SQL GuidelinesWrite Postgres-compatible SQL code for Supabase migration files that:- Includes a header comment with metadata about the migration, such as the purpose, affected tables/columns, and any special considerations.- Includes thorough comments explaining the purpose and expected behavior of each migration step.- Write all SQL in lowercase.- Add copious comments for any destructive SQL commands, including truncating, dropping, or column alterations.- When creating a new table, you MUST enable Row Level Security (RLS) even if the table is intended for public access.- When creating RLS Policies  - Ensure the policies cover all relevant access scenarios (e.g. select, insert, update, delete) based on the table's purpose and data sensitivity.  - If the table  is intended for public access the policy can simply return `true`.  - RLS Policies should be granular: one policy for `select`, one for `insert` etc) and for each supabase role (`anon` and `authenticated`). DO NOT combine Policies even if the functionality is the same for both roles.  - Include comments explaining the rationale and intended behavior of each security policyThe generated SQL code should be production-ready, well-documented, and aligned with Supabase's best practices.
````

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/examples/prompts/database-create-migration.md)

### Is this helpful?

NoYes

### On this page

[How to use](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration#how-to-use) [Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/database-create-migration#prompt)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)