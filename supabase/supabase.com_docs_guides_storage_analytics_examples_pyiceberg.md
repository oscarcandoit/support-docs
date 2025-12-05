---
url: "https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg"
title: "PyIceberg | Supabase Docs"
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
7. [Using PyIceberg](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg)

# PyIceberg

* * *

##### This feature is in alpha

Expect rapid changes, limited features, and possible breaking updates. [Share feedback](https://github.com/orgs/supabase/discussions/40116) as we refine the experience and expand access.

PyIceberg is a Python client for Apache Iceberg that enables programmatic interaction with Iceberg tables. Use it to create, read, update, and delete data in your analytics buckets.

## Installation [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#installation)

```
1

pip install pyiceberg pyarrow
```

## Basic setup [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#basic-setup)

Here's a complete example showing how to connect to your Supabase analytics bucket and perform operations:

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

from pyiceberg.catalog import load_catalogimport pyarrow as paimport datetime# Configuration - Update with your Supabase credentialsPROJECT_REF = "your-project-ref"WAREHOUSE = "your-analytics-bucket-name"SERVICE_KEY = "your-service-key"# S3 credentials from Project Settings > StorageS3_ACCESS_KEY = "your-access-key"S3_SECRET_KEY = "your-secret-key"S3_REGION = "us-east-1"# Construct Supabase endpointsS3_ENDPOINT = f"https://{PROJECT_REF}.supabase.co/storage/v1/s3"CATALOG_URI = f"https://{PROJECT_REF}.supabase.co/storage/v1/iceberg"# Load the Iceberg REST Catalogcatalog = load_catalog(    "supabase-analytics",    type="rest",    warehouse=WAREHOUSE,    uri=CATALOG_URI,    token=SERVICE_KEY,    **{        "py-io-impl": "pyiceberg.io.pyarrow.PyArrowFileIO",        "s3.endpoint": S3_ENDPOINT,        "s3.access-key-id": S3_ACCESS_KEY,        "s3.secret-access-key": S3_SECRET_KEY,        "s3.region": S3_REGION,        "s3.force-virtual-addressing": False,    },)print("✓ Successfully connected to Iceberg catalog")
```

## Creating tables [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#creating-tables)

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

# Create a namespace for organizationcatalog.create_namespace_if_not_exists("analytics")# Define the schema for your Iceberg tableschema = pa.schema([    pa.field("event_id", pa.int64()),    pa.field("user_id", pa.int64()),    pa.field("event_name", pa.string()),    pa.field("event_timestamp", pa.timestamp("ms")),    pa.field("properties", pa.string()),])# Create the tabletable = catalog.create_table_if_not_exists(    ("analytics", "events"),    schema=schema)print("✓ Created table: analytics.events")
```

## Writing data [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#writing-data)

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

import datetime# Prepare your datacurrent_time = datetime.datetime.now()data = pa.table({    "event_id": [1, 2, 3, 4, 5],    "user_id": [101, 102, 101, 103, 102],    "event_name": ["login", "view_product", "logout", "purchase", "login"],    "event_timestamp": [current_time] * 5,    "properties": [        '{"browser":"chrome"}',        '{"product_id":"123"}',        '{}',        '{"amount":99.99}',        '{"browser":"firefox"}'    ],})# Append data to the tabletable.append(data)print("✓ Appended 5 rows to analytics.events")
```

## Reading data [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#reading-data)

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

# Scan the entire tablescan_result = table.scan().to_pandas()print(f"Total rows: {len(scan_result)}")print(scan_result.head())# Query with filtersfiltered = table.scan(    filter="event_name = 'login'").to_pandas()print(f"Login events: {len(filtered)}")# Select specific columnsselected = table.scan(    selected_fields=["user_id", "event_name", "event_timestamp"]).to_pandas()print(selected.head())
```

## Advanced operations [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#advanced-operations)

### Listing tables and namespaces [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#listing-tables-and-namespaces)

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

# List all namespacesnamespaces = catalog.list_namespaces()print("Namespaces:", namespaces)# List tables in a namespacetables = catalog.list_tables("analytics")print("Tables in analytics:", tables)# Get table metadatatable_metadata = catalog.load_table(("analytics", "events"))print("Schema:", table_metadata.schema())print("Partitions:", table_metadata.partitions())
```

### Handling errors [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#handling-errors)

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

try:    # Attempt to load a table    table = catalog.load_table(("analytics", "nonexistent"))except Exception as e:    print(f"Error loading table: {e}")# Check if table exists before creatingnamespace = "analytics"table_name = "events"try:    existing_table = catalog.load_table((namespace, table_name))    print(f"Table already exists")except Exception:    print(f"Table does not exist, creating...")    table = catalog.create_table((namespace, table_name), schema=schema)
```

## Performance tips [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#performance-tips)

- **Batch writes** \- Insert data in batches rather than row-by-row for better performance
- **Partition strategies** \- Use partitioning for large tables to improve query performance
- **Schema evolution** \- PyIceberg supports schema changes without rewriting data
- **Data format** \- Use Parquet for efficient columnar storage

## Complete example: ETL pipeline [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#complete-example-etl-pipeline)

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

from pyiceberg.catalog import load_catalogimport pyarrow as paimport pandas as pd# Setup (see Basic Setup section above)catalog = load_catalog(...)# Step 1: Create analytics namespacecatalog.create_namespace_if_not_exists("warehouse")# Step 2: Define table schemaschema = pa.schema([    pa.field("id", pa.int64()),    pa.field("name", pa.string()),    pa.field("created_at", pa.timestamp("ms")),])# Step 3: Create tabletable = catalog.create_table_if_not_exists(    ("warehouse", "products"),    schema=schema)# Step 4: Load data from CSV or databasedf = pd.read_csv("products.csv")data = pa.Table.from_pandas(df)# Step 5: Write to analytics buckettable.append(data)print(f"✓ Loaded {len(data)} products to warehouse.products")# Step 6: Verifyresult = table.scan().to_pandas()print(result.describe())
```

## Next steps [\#](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg\#next-steps)

- [Query with Postgres](https://supabase.com/docs/guides/storage/analytics/query-with-postgres)
- [Analyze with Apache Spark](https://supabase.com/docs/guides/storage/analytics/examples/apache-spark)
- [Explore with DuckDB](https://supabase.com/docs/guides/storage/analytics/examples/duckdb)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/analytics/examples/pyiceberg.mdx)

### Is this helpful?

NoYes

### On this page

[Installation](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#installation) [Basic setup](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#basic-setup) [Creating tables](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#creating-tables) [Writing data](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#writing-data) [Reading data](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#reading-data) [Advanced operations](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#advanced-operations) [Listing tables and namespaces](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#listing-tables-and-namespaces) [Handling errors](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#handling-errors) [Performance tips](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#performance-tips) [Complete example: ETL pipeline](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#complete-example-etl-pipeline) [Next steps](https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg#next-steps)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)