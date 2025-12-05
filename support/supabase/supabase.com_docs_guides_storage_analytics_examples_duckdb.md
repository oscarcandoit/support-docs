---
url: "https://supabase.com/docs/guides/storage/analytics/examples/duckdb"
title: "DuckDB | Supabase Docs"
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

[Storage](https://supabase.com/docs/guides/storage)

[Overview](https://supabase.com/docs/guides/storage)

File Buckets[Quickstart](https://supabase.com/docs/guides/storage/quickstart)
[Fundamentals](https://supabase.com/docs/guides/storage/buckets/fundamentals)
[Creating Buckets](https://supabase.com/docs/guides/storage/buckets/creating-buckets)

Security

Uploads

Serving

Management

S3

CDN

Debugging

Schema

Going to production

[Pricing](https://supabase.com/docs/guides/storage/pricing)

Analytics Buckets[Introduction](https://supabase.com/docs/guides/storage/analytics/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/analytics/creating-analytics-buckets)
[Iceberg Catalog](https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket)
[Realtime Data-Sync](https://supabase.com/docs/guides/storage/analytics/replication)
[Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)

Examples

[Using DuckDB](https://supabase.com/docs/guides/storage/analytics/examples/duckdb)
[Using PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)
[Using Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)

[Limits](https://supabase.com/docs/guides/storage/analytics/limits)
[Pricing](https://supabase.com/docs/guides/storage/analytics/pricing)

Vector Buckets[Introduction](https://supabase.com/docs/guides/storage/vector/introduction)
[Creating Buckets](https://supabase.com/docs/guides/storage/vector/creating-vector-buckets)
[Working with Indexes](https://supabase.com/docs/guides/storage/vector/working-with-indexes)
[Storing Vectors](https://supabase.com/docs/guides/storage/vector/storing-vectors)
[Querying Vectors](https://supabase.com/docs/guides/storage/vector/querying-vectors)
[Limits](https://supabase.com/docs/guides/storage/vector/limits)

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

Storage

1. [Storage](https://supabase.com/docs/guides/storage)
3. More
5. [Examples](https://supabase.com/docs/guides/storage/analytics/examples)
7. [Using DuckDB](https://supabase.com/docs/guides/storage/analytics/examples/duckdb)

# DuckDB

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

DuckDB is a high-performance SQL database system optimized for analytical workloads. It can directly query Iceberg tables stored in your analytics buckets, making it ideal for data exploration and complex analytical queries.

## Installation [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#installation)

Install DuckDB and the Iceberg extension:

```
1

pip install duckdb duckdb-iceberg
```

## Connecting to Analytics buckets [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#connecting-to-analytics-buckets)

Here's a complete example of connecting to your Supabase analytics bucket and querying Iceberg tables:

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

import duckdbimport os# ConfigurationPROJECT_REF = "your-project-ref"WAREHOUSE = "your-analytics-bucket-name"SERVICE_KEY = "your-service-key"# S3 credentialsS3_ACCESS_KEY = "your-access-key"S3_SECRET_KEY = "your-secret-key"S3_REGION = "us-east-1"# Construct endpointsS3_ENDPOINT = f"https://{PROJECT_REF}.supabase.co/storage/v1/s3"CATALOG_URI = f"https://{PROJECT_REF}.supabase.co/storage/v1/iceberg"# Initialize DuckDB connectionconn = duckdb.connect(":memory:")# Install and load the Iceberg extensionconn.install_extension("iceberg")conn.load_extension("iceberg")# Configure Iceberg catalog with Supabase credentialsconn.execute(f"""    CREATE SECRET (        TYPE S3,        KEY_ID '{S3_ACCESS_KEY}',        SECRET '{S3_SECRET_KEY}',        REGION '{S3_REGION}',        ENDPOINT '{S3_ENDPOINT}',        URL_STYLE 'virtual'    );""")# Configure the REST catalogconn.execute(f"""    ATTACH 'iceberg://{CATALOG_URI}' AS iceberg_catalog    (        TYPE ICEBERG_REST,        WAREHOUSE '{WAREHOUSE}',        TOKEN '{SERVICE_KEY}'    );""")# Query your Iceberg tablesresult = conn.execute("""    SELECT *    FROM iceberg_catalog.default.events    LIMIT 10""").fetchall()for row in result:    print(row)# Complex aggregation exampleanalytics = conn.execute("""    SELECT        event_name,        COUNT(*) as event_count,        COUNT(DISTINCT user_id) as unique_users    FROM iceberg_catalog.default.events    GROUP BY event_name    ORDER BY event_count DESC""").fetchdf()print(analytics)
```

## Key features with DuckDB [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#key-features-with-duckdb)

### Efficient data exploration [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#efficient-data-exploration)

DuckDB's lazy evaluation means it only scans the data you need:

```
1
2
3
4
5
6

# This only reads the columns you selectevents = conn.execute("""    SELECT event_id, event_name, event_timestamp    FROM iceberg_catalog.default.events    WHERE event_timestamp > NOW() - INTERVAL '7 days'""").fetchdf()
```

### Converting to Pandas [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#converting-to-pandas)

Convert results to Pandas DataFrames for further analysis:

```
1
2
3
4
5
6
7

df = conn.execute("""    SELECT *    FROM iceberg_catalog.default.events""").fetchdf()# Use pandas for visualization or further processingprint(df.describe())
```

### Exporting results [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#exporting-results)

Save your analytical results to various formats:

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

# Export to Parquetconn.execute("""    COPY (        SELECT * FROM iceberg_catalog.default.events    ) TO 'results.parquet'""")# Export to CSVconn.execute("""    COPY (        SELECT event_name, COUNT(*) as count        FROM iceberg_catalog.default.events        GROUP BY event_name    ) TO 'summary.csv' (FORMAT CSV, HEADER true)""")
```

## Best practices [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#best-practices)

- **Connection pooling** \- Reuse connections for multiple queries
- **Partition pruning** \- Filter by partition columns to improve query performance
- **Column selection** \- Only select columns you need to reduce I/O
- **Limit results** \- Use LIMIT during exploration to avoid processing large datasets

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/examples/duckdb\#next-steps)

- [Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)
- [Connect with PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)
- [Analyze with Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/examples/duckdb.mdx)

### Is this helpful?

NoYes

### On this page

[Installation](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#installation) [Connecting to Analytics buckets](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#connecting-to-analytics-buckets) [Key features with DuckDB](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#key-features-with-duckdb) [Efficient data exploration](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#efficient-data-exploration) [Converting to Pandas](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#converting-to-pandas) [Exporting results](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#exporting-results) [Best practices](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#best-practices) [Next steps](https://supabase.com/docs/guides/storage/analytics/examples/duckdb#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)