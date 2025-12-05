---
url: "https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql"
title: "AI Prompt: Postgres SQL Style Guide | Supabase Docs"
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

# AI Prompt: Postgres SQL Style Guide

* * *

## How to use [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql\#how-to-use)

Copy the prompt to a file in your repo.

Use the "include file" feature from your AI tool to include the prompt when chatting with your AI assistant. For example, with GitHub Copilot, use `#<filename>`, in Cursor, use `@Files`, and in Zed, use `/file`.

You can also load the prompt directly into your IDE via the following links:

- [Open in Cursor](cursor://anysphere.cursor-deeplink/prompt?text=%23+Postgres+SQL+Style+Guide%0A%0A%23%23+General%0A%0A-+Use+lowercase+for+SQL+reserved+words+to+maintain+consistency+and+readability.%0A-+Employ+consistent%2C+descriptive+identifiers+for+tables%2C+columns%2C+and+other+database+objects.%0A-+Use+white+space+and+indentation+to+enhance+the+readability+of+your+code.%0A-+Store+dates+in+ISO+8601+format+%28%60yyyy-mm-ddThh%3Amm%3Ass.sssss%60%29.%0A-+Include+comments+for+complex+logic%2C+using+%27%2F*+...+*%2F%27+for+block+comments+and+%27--%27+for+line+comments.%0A%0A%23%23+Naming+Conventions%0A%0A-+Avoid+SQL+reserved+words+and+ensure+names+are+unique+and+under+63+characters.%0A-+Use+snake_case+for+tables+and+columns.%0A-+Prefer+plurals+for+table+names%0A-+Prefer+singular+names+for+columns.%0A%0A%23%23+Tables%0A%0A-+Avoid+prefixes+like+%27tbl_%27+and+ensure+no+table+name+matches+any+of+its+column+names.%0A-+Always+add+an+%60id%60+column+of+type+%60identity+generated+always%60+unless+otherwise+specified.%0A-+Create+all+tables+in+the+%60public%60+schema+unless+otherwise+specified.%0A-+Always+add+the+schema+to+SQL+queries+for+clarity.%0A-+Always+add+a+comment+to+describe+what+the+table+does.+The+comment+can+be+up+to+1024+characters.%0A%0A%23%23+Columns%0A%0A-+Use+singular+names+and+avoid+generic+names+like+%27id%27.%0A-+For+references+to+foreign+tables%2C+use+the+singular+of+the+table+name+with+the+%60_id%60+suffix.+For+example+%60user_id%60+to+reference+the+%60users%60+table%0A-+Always+use+lowercase+except+in+cases+involving+acronyms+or+when+readability+would+be+enhanced+by+an+exception.%0A%0A%23%23%23%23+Examples%3A%0A%0A%60%60%60sql%0Acreate+table+books+%28%0A++id+bigint+generated+always+as+identity+primary+key%2C%0A++title+text+not+null%2C%0A++author_id+bigint+references+authors+%28id%29%0A%29%3B%0Acomment+on+table+books+is+%27A+list+of+all+the+books+in+the+library.%27%3B%0A%60%60%60%0A%0A%0A%23%23+Queries%0A%0A-+When+the+query+is+shorter+keep+it+on+just+a+few+lines.+As+it+gets+larger+start+adding+newlines+for+readability%0A-+Add+spaces+for+readability.%0A%0ASmaller+queries%3A%0A%0A%0A%60%60%60sql%0Aselect+*%0Afrom+employees%0Awhere+end_date+is+null%3B%0A%0Aupdate+employees%0Aset+end_date+%3D+%272023-12-31%27%0Awhere+employee_id+%3D+1001%3B%0A%60%60%60%0A%0ALarger+queries%3A%0A%0A%60%60%60sql%0Aselect%0A++first_name%2C%0A++last_name%0Afrom%0A++employees%0Awhere%0A++start_date+between+%272021-01-01%27+and+%272021-12-31%27%0Aand%0A++status+%3D+%27employed%27%3B%0A%60%60%60%0A%0A%0A%23%23%23+Joins+and+Subqueries%0A%0A-+Format+joins+and+subqueries+for+clarity%2C+aligning+them+with+related+SQL+clauses.%0A-+Prefer+full+table+names+when+referencing+tables.+This+helps+for+readability.%0A%0A%60%60%60sql%0Aselect%0A++employees.employee_name%2C%0A++departments.department_name%0Afrom%0A++employees%0Ajoin%0A++departments+on+employees.department_id+%3D+departments.department_id%0Awhere%0A++employees.start_date+%3E+%272022-01-01%27%3B%0A%60%60%60%0A%0A%23%23+Aliases%0A%0A-+Use+meaningful+aliases+that+reflect+the+data+or+transformation+applied%2C+and+always+include+the+%27as%27+keyword+for+clarity.%0A%0A%60%60%60sql%0Aselect+count%28*%29+as+total_employees%0Afrom+employees%0Awhere+end_date+is+null%3B%0A%60%60%60%0A%0A%0A%23%23+Complex+queries+and+CTEs%0A%0A-+If+a+query+is+extremely+complex%2C+prefer+a+CTE.%0A-+Make+sure+the+CTE+is+clear+and+linear.+Prefer+readability+over+performance.%0A-+Add+comments+to+each+block.%0A%0A%60%60%60sql%0Awith+department_employees+as+%28%0A++--+Get+all+employees+and+their+departments%0A++select%0A++++employees.department_id%2C%0A++++employees.first_name%2C%0A++++employees.last_name%2C%0A++++departments.department_name%0A++from%0A++++employees%0A++join%0A++++departments+on+employees.department_id+%3D+departments.department_id%0A%29%2C%0Aemployee_counts+as+%28%0A++--+Count+how+many+employees+in+each+department%0A++select%0A++++department_name%2C%0A++++count%28*%29+as+num_employees%0A++from%0A++++department_employees%0A++group+by%0A++++department_name%0A%29%0Aselect%0A++department_name%2C%0A++num_employees%0Afrom%0A++employee_counts%0Aorder+by%0A++department_name%3B%0A%60%60%60)

## Prompt [\#](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql\#prompt)

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
131
132
133
134
135
136
137
138
139
140
141

# Postgres SQL Style Guide## General- Use lowercase for SQL reserved words to maintain consistency and readability.- Employ consistent, descriptive identifiers for tables, columns, and other database objects.- Use white space and indentation to enhance the readability of your code.- Store dates in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.sssss`).- Include comments for complex logic, using '/* ... */' for block comments and '--' for line comments.## Naming Conventions- Avoid SQL reserved words and ensure names are unique and under 63 characters.- Use snake_case for tables and columns.- Prefer plurals for table names- Prefer singular names for columns.## Tables- Avoid prefixes like 'tbl_' and ensure no table name matches any of its column names.- Always add an `id` column of type `identity generated always` unless otherwise specified.- Create all tables in the `public` schema unless otherwise specified.- Always add the schema to SQL queries for clarity.- Always add a comment to describe what the table does. The comment can be up to 1024 characters.## Columns- Use singular names and avoid generic names like 'id'.- For references to foreign tables, use the singular of the table name with the `_id` suffix. For example `user_id` to reference the `users` table- Always use lowercase except in cases involving acronyms or when readability would be enhanced by an exception.#### Examples:```sqlcreate table books (  id bigint generated always as identity primary key,  title text not null,  author_id bigint references authors (id));comment on table books is 'A list of all the books in the library.';```## Queries- When the query is shorter keep it on just a few lines. As it gets larger start adding newlines for readability- Add spaces for readability.Smaller queries:```sqlselect *from employeeswhere end_date is null;update employeesset end_date = '2023-12-31'where employee_id = 1001;```Larger queries:```sqlselect  first_name,  last_namefrom  employeeswhere  start_date between '2021-01-01' and '2021-12-31'and  status = 'employed';```### Joins and Subqueries- Format joins and subqueries for clarity, aligning them with related SQL clauses.- Prefer full table names when referencing tables. This helps for readability.```sqlselect  employees.employee_name,  departments.department_namefrom  employeesjoin  departments on employees.department_id = departments.department_idwhere  employees.start_date > '2022-01-01';```## Aliases- Use meaningful aliases that reflect the data or transformation applied, and always include the 'as' keyword for clarity.```sqlselect count(*) as total_employeesfrom employeeswhere end_date is null;```## Complex queries and CTEs- If a query is extremely complex, prefer a CTE.- Make sure the CTE is clear and linear. Prefer readability over performance.- Add comments to each block.```sqlwith department_employees as (  -- Get all employees and their departments  select    employees.department_id,    employees.first_name,    employees.last_name,    departments.department_name  from    employees  join    departments on employees.department_id = departments.department_id),employee_counts as (  -- Count how many employees in each department  select    department_name,    count(*) as num_employees  from    department_employees  group by    department_name)select  department_name,  num_employeesfrom  employee_countsorder by  department_name;```
````

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/examples/prompts/code-format-sql.md)

### Is this helpful?

NoYes

### On this page

[How to use](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql#how-to-use) [Prompt](https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql#prompt)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)