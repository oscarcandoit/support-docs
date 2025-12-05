---
url: "https://supabase.com/docs/guides/troubleshooting/certain-operations-are-too-complex-to-perform-directly-using-the-client-libraries-8JaphH"
title: "Supabase Docs | Troubleshooting | Certain operations are too complex to perform directly using the client libraries."
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

# Certain operations are too complex to perform directly using the client libraries.

Last edited: 9/9/2025

* * *

**Solution**
In cases where operations are overly complex or not feasible to implement directly using the client libraries, it might be beneficial to leverage stored functions within your database.

Follow these steps to create and run a stored function:

**Create the Stored Function:**

Go to the [SQL query editor](https://supabase.com/dashboard/project/_/sql/new) on your database dashboard.
Run the following SQL script to create a stored function tailored to your specific complex query:

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

DROP FUNCTION IF EXISTS get_my_complex_query;CREATE FUNCTION get_my_complex_query(parameter INT)RETURNS TABLE (column1 INTEGER, column2 VARCHAR, column3 DATE) AS$$BEGIN    RETURN QUERY    SELECT t1.column1, t1.column2, t2.column3    FROM "TableName1" AS t1    INNER JOIN "TableName2" AS t2 ON t1.column = t2.column    INNER JOIN "TableName3" AS t3 ON t2.another_column = t3.another_column    LEFT JOIN "TableName4" AS t4 ON t3.some_column = t4.some_column    WHERE t2.column = parameter    AND t3.column_name = 'some_value';END;$$LANGUAGE plpgsql VOLATILE;
```

**Call the Stored Function:**

Use the supabase.rpc method to call the stored function from your application code. Replace "get\_my\_complex\_query" with the appropriate function name and provide the necessary parameters:

```
1
2
3
4
5
6
7

supabase.rpc("get_my_complex_query", { parameter: 1 })  .then(response => {    // Handle the response  })  .catch(error => {    // Handle errors  });
```

**Further Resources:**

For more information on Postgres database functions, refer to the following resource:
[Supabase Stored Procedures](https://supabase.com/docs/guides/database/functions#quick-demo)

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[stored](https://supabase.com/docs/guides/troubleshooting?tags=stored) [function](https://supabase.com/docs/guides/troubleshooting?tags=function) [complex](https://supabase.com/docs/guides/troubleshooting?tags=complex)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21294)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)