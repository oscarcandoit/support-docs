---
url: "https://supabase.com/docs/guides/storage/analytics/examples/apache-spark"
title: "Apache Spark | Supabase Docs"
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
7. [Using Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)

# Apache Spark

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

Apache Spark enables distributed analytical processing of large datasets stored in your analytics buckets. Use it for complex transformations, aggregations, and machine learning workflows.

## Installation [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#installation)

First, ensure you have Spark installed. For Python-based workflows:

```
1

pip install pyspark
```

For detailed Spark setup instructions, see the [Apache Spark documentation](https://spark.apache.org/docs/latest/).

## Basic setup [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#basic-setup)

Here's a complete example showing how to configure Spark with your Supabase analytics bucket:

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

from pyspark.sql import SparkSession# Configuration - Update with your Supabase credentialsPROJECT_REF = "your-project-ref"WAREHOUSE = "your-analytics-bucket-name"SERVICE_KEY = "your-service-key"# S3 credentials from Project Settings > StorageS3_ACCESS_KEY = "your-access-key"S3_SECRET_KEY = "your-secret-key"S3_REGION = "us-east-1"# Construct Supabase endpointsS3_ENDPOINT = f"https://{PROJECT_REF}.supabase.co/storage/v1/s3"CATALOG_URI = f"https://{PROJECT_REF}.supabase.co/storage/v1/iceberg"# Initialize Spark session with Iceberg configurationspark = SparkSession.builder \    .master("local[*]") \    .appName("SupabaseIceberg") \    .config("spark.driver.host", "127.0.0.1") \    .config("spark.driver.bindAddress", "127.0.0.1") \    .config(        'spark.jars.packages',        'org.apache.iceberg:iceberg-spark-runtime-3.5_2.12:1.6.1,org.apache.iceberg:iceberg-aws-bundle:1.6.1'    ) \    .config("spark.sql.extensions", "org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions") \    .config("spark.sql.catalog.supabase", "org.apache.iceberg.spark.SparkCatalog") \    .config("spark.sql.catalog.supabase.type", "rest") \    .config("spark.sql.catalog.supabase.uri", CATALOG_URI) \    .config("spark.sql.catalog.supabase.warehouse", WAREHOUSE) \    .config("spark.sql.catalog.supabase.token", SERVICE_KEY) \    .config("spark.sql.catalog.supabase.s3.endpoint", S3_ENDPOINT) \    .config("spark.sql.catalog.supabase.s3.path-style-access", "true") \    .config("spark.sql.catalog.supabase.s3.access-key-id", S3_ACCESS_KEY) \    .config("spark.sql.catalog.supabase.s3.secret-access-key", S3_SECRET_KEY) \    .config("spark.sql.catalog.supabase.s3.remote-signing-enabled", "false") \    .config("spark.sql.defaultCatalog", "supabase") \    .getOrCreate()print("✓ Spark session initialized with Iceberg")
```

## Creating tables [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#creating-tables)

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

# Create a namespace for organizationspark.sql("CREATE NAMESPACE IF NOT EXISTS analytics")# Create a new Iceberg tablespark.sql("""    CREATE TABLE IF NOT EXISTS analytics.events (        event_id BIGINT,        user_id BIGINT,        event_name STRING,        event_timestamp TIMESTAMP,        properties STRING    )    USING iceberg""")print("✓ Created table: analytics.events")
```

## Writing data [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#writing-data)

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

# Insert data into the tablespark.sql("""    INSERT INTO analytics.events (event_id, user_id, event_name, event_timestamp, properties)    VALUES        (1, 101, 'login', TIMESTAMP '2024-01-15 10:30:00', '{"browser":"chrome"}'),        (2, 102, 'view_product', TIMESTAMP '2024-01-15 10:35:00', '{"product_id":"123"}'),        (3, 101, 'logout', TIMESTAMP '2024-01-15 10:40:00', '{}'),        (4, 103, 'purchase', TIMESTAMP '2024-01-15 10:45:00', '{"amount":99.99}')""")print("✓ Inserted 4 rows into analytics.events")
```

## Reading data [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#reading-data)

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

# Read the entire tableresult_df = spark.sql("SELECT * FROM analytics.events")result_df.show(truncate=False)# Apply filtersfiltered_df = spark.sql("""    SELECT event_id, user_id, event_name    FROM analytics.events    WHERE event_name = 'login'""")filtered_df.show()# Aggregationssummary_df = spark.sql("""    SELECT        event_name,        COUNT(*) as event_count,        COUNT(DISTINCT user_id) as unique_users    FROM analytics.events    GROUP BY event_name    ORDER BY event_count DESC""")summary_df.show()
```

## Advanced operations [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#advanced-operations)

### Working with dataframes [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#working-with-dataframes)

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

# Read as DataFrameevents_df = spark.read.format("iceberg").load("analytics.events")# Apply Spark transformationsfrom pyspark.sql.functions import count, col, year, month# Monthly event countsmonthly_events = events_df \    .withColumn("month", month(col("event_timestamp"))) \    .withColumn("year", year(col("event_timestamp"))) \    .groupBy("year", "month", "event_name") \    .agg(count("event_id").alias("count")) \    .orderBy("year", "month")monthly_events.show()
```

### Joining tables [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#joining-tables)

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

# Create another tablespark.sql("""    CREATE TABLE IF NOT EXISTS analytics.users (        user_id BIGINT,        username STRING,        email STRING    )    USING iceberg""")spark.sql("""    INSERT INTO analytics.users VALUES        (101, 'alice', 'alice@example.com'),        (102, 'bob', 'bob@example.com'),        (103, 'charlie', 'charlie@example.com')""")# Join events with usersjoined_df = spark.sql("""    SELECT        e.event_id,        e.event_name,        u.username,        u.email,        e.event_timestamp    FROM analytics.events e    JOIN analytics.users u ON e.user_id = u.user_id    ORDER BY e.event_timestamp""")joined_df.show(truncate=False)
```

### Exporting results [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#exporting-results)

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

# Export to Parquetspark.sql("""    SELECT event_name, COUNT(*) as count    FROM analytics.events    GROUP BY event_name""").write \    .mode("overwrite") \    .parquet("/tmp/event_summary.parquet")# Export to CSVspark.sql("""    SELECT *    FROM analytics.events    WHERE event_timestamp > TIMESTAMP '2024-01-15 10:30:00'""").write \    .mode("overwrite") \    .option("header", "true") \    .csv("/tmp/recent_events.csv")print("✓ Results exported")
```

## Performance best practices [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#performance-best-practices)

- **Partition tables** \- Partition large tables by date or region for faster queries
- **Select columns** \- Only select columns you need to reduce I/O
- **Use filters early** \- Apply WHERE clauses to reduce data processed
- **Cache frequently accessed tables** \- Use `spark.catalog.cacheTable()` for tables accessed multiple times
- **Cluster mode** \- Use cluster mode for production workloads instead of local mode

## Complete example: Data processing pipeline [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#complete-example-data-processing-pipeline)

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

from pyspark.sql import SparkSessionfrom pyspark.sql.functions import col, year, month, count# Setup (see Basic Setup section above)spark = SparkSession.builder \    .master("local[*]") \    .appName("SupabaseAnalytics") \    .config("spark.sql.defaultCatalog", "supabase") \    # ... (add all config from Basic Setup)    .getOrCreate()# Step 1: Read raw eventsraw_events = spark.sql("SELECT * FROM analytics.events")# Step 2: Transform and aggregatemonthly_summary = raw_events \    .withColumn("month", month(col("event_timestamp"))) \    .withColumn("year", year(col("event_timestamp"))) \    .groupBy("year", "month", "event_name") \    .agg(count("event_id").alias("total_events"))# Step 3: Save resultsmonthly_summary.write \    .mode("overwrite") \    .option("path", "analytics.monthly_summary") \    .saveAsTable("analytics.monthly_summary")print("✓ Pipeline completed")monthly_summary.show()
```

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark\#next-steps)

- [Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)
- [Connect with PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)
- [Explore with DuckDB](https://supabase.com/docs/guides/storage/analytics/examples/duckdb)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/examples/apache-spark.mdx)

### Is this helpful?

NoYes

### On this page

[Installation](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#installation) [Basic setup](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#basic-setup) [Creating tables](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#creating-tables) [Writing data](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#writing-data) [Reading data](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#reading-data) [Advanced operations](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#advanced-operations) [Working with dataframes](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#working-with-dataframes) [Joining tables](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#joining-tables) [Exporting results](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#exporting-results) [Performance best practices](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#performance-best-practices) [Complete example: Data processing pipeline](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#complete-example-data-processing-pipeline) [Next steps](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)