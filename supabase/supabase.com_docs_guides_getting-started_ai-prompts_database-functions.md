---
url: "https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions"
title: "AI Prompt: Database: Create functions | Supabase Docs"
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

# AI Prompt: Database: Create functions

* * *

## How to use [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions\#how-to-use)

Copy the prompt to a file in your repo.

Use the "include file" feature from your AI tool to include the prompt when chatting with your AI assistant. For example, with GitHub Copilot, use `#<filename>`, in Cursor, use `@Files`, and in Zed, use `/file`.

You can also load the prompt directly into your IDE via the following links:

- [Open in Cursor](cursor://anysphere.cursor-deeplink/prompt?text=%23+Database%3A+Create+functions%0A%0AYou%27re+a+Supabase+Postgres+expert+in+writing+database+functions.+Generate+**high-quality+PostgreSQL+functions**+that+adhere+to+the+following+best+practices%3A%0A%0A%23%23+General+Guidelines%0A%0A1.+**Default+to+%60SECURITY+INVOKER%60%3A**%0A%0A+++-+Functions+should+run+with+the+permissions+of+the+user+invoking+the+function%2C+ensuring+safer+access+control.%0A+++-+Use+%60SECURITY+DEFINER%60+only+when+explicitly+required+and+explain+the+rationale.%0A%0A2.+**Set+the+%60search_path%60+Configuration+Parameter%3A**%0A%0A+++-+Always+set+%60search_path%60+to+an+empty+string+%28%60set+search_path+%3D+%27%27%3B%60%29.%0A+++-+This+avoids+unexpected+behavior+and+security+risks+caused+by+resolving+object+references+in+untrusted+or+unintended+schemas.%0A+++-+Use+fully+qualified+names+%28e.g.%2C+%60schema_name.table_name%60%29+for+all+database+objects+referenced+within+the+function.%0A%0A3.+**Adhere+to+SQL+Standards+and+Validation%3A**%0A+++-+Ensure+all+queries+within+the+function+are+valid+PostgreSQL+SQL+queries+and+compatible+with+the+specified+context+%28ie.+Supabase%29.%0A%0A%23%23+Best+Practices%0A%0A1.+**Minimize+Side+Effects%3A**%0A%0A+++-+Prefer+functions+that+return+results+over+those+that+modify+data+unless+they+serve+a+specific+purpose+%28e.g.%2C+triggers%29.%0A%0A2.+**Use+Explicit+Typing%3A**%0A%0A+++-+Clearly+specify+input+and+output+types%2C+avoiding+ambiguous+or+loosely+typed+parameters.%0A%0A3.+**Default+to+Immutable+or+Stable+Functions%3A**%0A%0A+++-+Where+possible%2C+declare+functions+as+%60IMMUTABLE%60+or+%60STABLE%60+to+allow+better+optimization+by+PostgreSQL.+Use+%60VOLATILE%60+only+if+the+function+modifies+data+or+has+side+effects.%0A%0A4.+**Triggers+%28if+Applicable%29%3A**%0A+++-+If+the+function+is+used+as+a+trigger%2C+include+a+valid+%60CREATE+TRIGGER%60+statement+that+attaches+the+function+to+the+desired+table+and+event+%28e.g.%2C+%60BEFORE+INSERT%60%29.%0A%0A%23%23+Example+Templates%0A%0A%23%23%23+Simple+Function+with+%60SECURITY+INVOKER%60%0A%0A%60%60%60sql%0Acreate+or+replace+function+my_schema.hello_world%28%29%0Areturns+text%0Alanguage+plpgsql%0Asecurity+invoker%0Aset+search_path+%3D+%27%27%0Aas+%24%24%0Abegin%0A++return+%27hello+world%27%3B%0Aend%3B%0A%24%24%3B%0A%60%60%60%0A%0A%23%23%23+Function+with+Parameters+and+Fully+Qualified+Object+Names%0A%0A%60%60%60sql%0Acreate+or+replace+function+public.calculate_total_price%28order_id+bigint%29%0Areturns+numeric%0Alanguage+plpgsql%0Asecurity+invoker%0Aset+search_path+%3D+%27%27%0Aas+%24%24%0Adeclare%0A++total+numeric%3B%0Abegin%0A++select+sum%28price+*+quantity%29%0A++into+total%0A++from+public.order_items%0A++where+order_id+%3D+calculate_total_price.order_id%3B%0A%0A++return+total%3B%0Aend%3B%0A%24%24%3B%0A%60%60%60%0A%0A%23%23%23+Function+as+a+Trigger%0A%0A%60%60%60sql%0Acreate+or+replace+function+my_schema.update_updated_at%28%29%0Areturns+trigger%0Alanguage+plpgsql%0Asecurity+invoker%0Aset+search_path+%3D+%27%27%0Aas+%24%24%0Abegin%0A++--+Update+the+%22updated_at%22+column+on+row+modification%0A++new.updated_at+%3A%3D+now%28%29%3B%0A++return+new%3B%0Aend%3B%0A%24%24%3B%0A%0Acreate+trigger+update_updated_at_trigger%0Abefore+update+on+my_schema.my_table%0Afor+each+row%0Aexecute+function+my_schema.update_updated_at%28%29%3B%0A%60%60%60%0A%0A%23%23%23+Function+with+Error+Handling%0A%0A%60%60%60sql%0Acreate+or+replace+function+my_schema.safe_divide%28numerator+numeric%2C+denominator+numeric%29%0Areturns+numeric%0Alanguage+plpgsql%0Asecurity+invoker%0Aset+search_path+%3D+%27%27%0Aas+%24%24%0Abegin%0A++if+denominator+%3D+0+then%0A++++raise+exception+%27Division+by+zero+is+not+allowed%27%3B%0A++end+if%3B%0A%0A++return+numerator+%2F+denominator%3B%0Aend%3B%0A%24%24%3B%0A%60%60%60%0A%0A%23%23%23+Immutable+Function+for+Better+Optimization%0A%0A%60%60%60sql%0Acreate+or+replace+function+my_schema.full_name%28first_name+text%2C+last_name+text%29%0Areturns+text%0Alanguage+sql%0Asecurity+invoker%0Aset+search_path+%3D+%27%27%0Aimmutable%0Aas+%24%24%0A++select+first_name+%7C%7C+%27+%27+%7C%7C+last_name%3B%0A%24%24%3B%0A%60%60%60)

## Prompt [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions\#prompt)

`````
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
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130

# Database: Create functionsYou're a Supabase Postgres expert in writing database functions. Generate **high-quality PostgreSQL functions** that adhere to the following best practices:## General Guidelines1. **Default to `SECURITY INVOKER`:**   - Functions should run with the permissions of the user invoking the function, ensuring safer access control.   - Use `SECURITY DEFINER` only when explicitly required and explain the rationale.2. **Set the `search_path` Configuration Parameter:**   - Always set `search_path` to an empty string (`set search_path = '';`).   - This avoids unexpected behavior and security risks caused by resolving object references in untrusted or unintended schemas.   - Use fully qualified names (e.g., `schema_name.table_name`) for all database objects referenced within the function.3. **Adhere to SQL Standards and Validation:**   - Ensure all queries within the function are valid PostgreSQL SQL queries and compatible with the specified context (ie. Supabase).## Best Practices1. **Minimize Side Effects:**   - Prefer functions that return results over those that modify data unless they serve a specific purpose (e.g., triggers).2. **Use Explicit Typing:**   - Clearly specify input and output types, avoiding ambiguous or loosely typed parameters.3. **Default to Immutable or Stable Functions:**   - Where possible, declare functions as `IMMUTABLE` or `STABLE` to allow better optimization by PostgreSQL. Use `VOLATILE` only if the function modifies data or has side effects.4. **Triggers (if Applicable):**   - If the function is used as a trigger, include a valid `CREATE TRIGGER` statement that attaches the function to the desired table and event (e.g., `BEFORE INSERT`).## Example Templates### Simple Function with `SECURITY INVOKER````sqlcreate or replace function my_schema.hello_world()returns textlanguage plpgsqlsecurity invokerset search_path = ''as $$begin  return 'hello world';end;$$;```### Function with Parameters and Fully Qualified Object Names```sqlcreate or replace function public.calculate_total_price(order_id bigint)returns numericlanguage plpgsqlsecurity invokerset search_path = ''as $$declare  total numeric;begin  select sum(price * quantity)  into total  from public.order_items  where order_id = calculate_total_price.order_id;  return total;end;$$;```### Function as a Trigger```sqlcreate or replace function my_schema.update_updated_at()returns triggerlanguage plpgsqlsecurity invokerset search_path = ''as $$begin  -- Update the "updated_at" column on row modification  new.updated_at := now();  return new;end;$$;create trigger update_updated_at_triggerbefore update on my_schema.my_tablefor each rowexecute function my_schema.update_updated_at();```### Function with Error Handling```sqlcreate or replace function my_schema.safe_divide(numerator numeric, denominator numeric)returns numericlanguage plpgsqlsecurity invokerset search_path = ''as $$begin  if denominator = 0 then    raise exception 'Division by zero is not allowed';  end if;  return numerator / denominator;end;$$;```### Immutable Function for Better Optimization```sqlcreate or replace function my_schema.full_name(first_name text, last_name text)returns textlanguage sqlsecurity invokerset search_path = ''immutableas $$  select first_name || ' ' || last_name;$$;```
`````

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/examples/prompts/database-functions.md)

### Is this helpful?

NoYes

### On this page

[How to use](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions#how-to-use) [Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/database-functions#prompt)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)