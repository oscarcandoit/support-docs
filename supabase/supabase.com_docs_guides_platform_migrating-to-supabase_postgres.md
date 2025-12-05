---
url: "https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres"
title: "Migrate from Postgres to Supabase | Supabase Docs"
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

[Platform](https://supabase.com/docs/guides/platform)

Add-ons[Custom Domains](https://supabase.com/docs/guides/platform/custom-domains)
[Database Backups](https://supabase.com/docs/guides/platform/backups)
[IPv4 Address](https://supabase.com/docs/guides/platform/ipv4-address)
[Read Replicas](https://supabase.com/docs/guides/platform/read-replicas)

Upgrades & Migrations[Upgrading](https://supabase.com/docs/guides/platform/upgrading)

Migrating within Supabase

Migrating to Supabase

[Overview](https://supabase.com/docs/guides/platform/migrating-to-supabase)
[Auth0](https://supabase.com/docs/guides/platform/migrating-to-supabase/auth0)
[Firebase Auth](https://supabase.com/docs/guides/platform/migrating-to-supabase/firebase-auth)
[Firestore Data](https://supabase.com/docs/guides/platform/migrating-to-supabase/firestore-data)
[Firebase Storage](https://supabase.com/docs/guides/platform/migrating-to-supabase/firebase-storage)
[Heroku](https://supabase.com/docs/guides/platform/migrating-to-supabase/heroku)
[Render](https://supabase.com/docs/guides/platform/migrating-to-supabase/render)
[Amazon RDS](https://supabase.com/docs/guides/platform/migrating-to-supabase/amazon-rds)
[Postgres](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres)
[Vercel Postgres](https://supabase.com/docs/guides/platform/migrating-to-supabase/vercel-postgres)
[Neon](https://supabase.com/docs/guides/platform/migrating-to-supabase/neon)
[MySQL](https://supabase.com/docs/guides/platform/migrating-to-supabase/mysql)
[MSSQL](https://supabase.com/docs/guides/platform/migrating-to-supabase/mssql)

Project & Account Management[Access Control](https://supabase.com/docs/guides/platform/access-control)

Multi-factor Authentication

[Transfer Project](https://supabase.com/docs/guides/platform/project-transfer)
[Restore to a new project](https://supabase.com/docs/guides/platform/clone-project)

Single Sign-On

Platform Configuration[Regions](https://supabase.com/docs/guides/platform/regions)
[Compute and Disk](https://supabase.com/docs/guides/platform/compute-and-disk)
[Database Size](https://supabase.com/docs/guides/platform/database-size)
[HIPAA Projects](https://supabase.com/docs/guides/platform/hipaa-projects)
[Network Restrictions](https://supabase.com/docs/guides/platform/network-restrictions)
[Performance Tuning](https://supabase.com/docs/guides/platform/performance)
[SSL Enforcement](https://supabase.com/docs/guides/platform/ssl-enforcement)
[Default Platform Permissions](https://supabase.com/docs/guides/platform/permissions)
[PrivateLink](https://supabase.com/docs/guides/platform/privatelink)

Billing[About billing on Supabase](https://supabase.com/docs/guides/platform/billing-on-supabase)
[Get set up for billing](https://supabase.com/docs/guides/platform/get-set-up-for-billing)
[Manage your subscription](https://supabase.com/docs/guides/platform/manage-your-subscription)

Manage your usage

[Your monthly invoice](https://supabase.com/docs/guides/platform/your-monthly-invoice)
[Control your costs](https://supabase.com/docs/guides/platform/cost-control)
[Credits](https://supabase.com/docs/guides/platform/credits)

AWS Marketplace

[Billing FAQ](https://supabase.com/docs/guides/platform/billing-faq)

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

Platform

1. [Platform](https://supabase.com/docs/guides/platform)
3. More
5. [Migrating to Supabase](https://supabase.com/docs/guides/platform/migrating-to-supabase)
7. [Postgres](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres)

# Migrate from Postgres to Supabase

## Migrate your existing Postgres database to Supabase.

* * *

This is a guide for migrating your Postgres database to [Supabase](https://supabase.com/).
Supabase is a robust and open-source platform. Supabase provides all the backend features developers need to build a product: a Postgres database, authentication, instant APIs, edge functions, real-time subscriptions, and storage. Postgres is the core of Supabase—for example, you can use row-level security, and there are more than 40 Postgres extensions available.

This guide demonstrates how to migrate your Postgres database to Supabase to get the most out of Postgres while gaining access to all the features you need to build a project.

This guide provides three methods for migrating your Postgres database to Supabase:

1. **Google Colab** \- Guided notebook with copy-paste workflow
2. **Manual Dump/Restore** \- CLI approach, works for all versions
3. **Logical Replication** \- Minimal downtime, requires Postgres 10+

## Connection modes [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#connection-modes)

Supabase provides the following connection modes:

- Direct connection
- Supavisor session mode
- Supavisor transaction mode

Use Supavisor session mode for the database migration tasks (pg\_dump/restore and logical replication).

## Method 1: Google Colab (easiest) [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#method-1-google-colab-easiest)

Supabase provides a Google Colab migration notebook for a guided migration experience:
[Supabase Migration Colab Notebook](https://colab.research.google.com/github/mansueli/Supa-Migrate/blob/main/Migrate_Postgres_Supabase.ipynb)

This is ideal if you prefer a step-by-step, copy-paste workflow with minimal setup.

## Method 2: Manual dump/restore [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#method-2-manual-dumprestore)

This method works for all Postgres versions using CLI tools.

### Prerequisites [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#prerequisites)

#### Source Postgres requirements [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#source-postgres-requirements)

- Connection string with rights to run `pg_dump`
- No special settings required for dump/restore
- Network access from migration VM

#### Migration environment [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#migration-environment)

- Cloud VM running Ubuntu in the same region as source or target database
- Postgres client tools matching your source database version
- tmux for session persistence
- Sufficient disk space (usually ~50% of source database size is enough, but varies case by case)

### Pre-Migration checklist [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#pre-migration-checklist)

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

-- Check database sizeselect pg_size_pretty(pg_database_size(current_database())) as size;-- Check Postgres versionselect version();-- List installed extensionsselect * from pg_extension order by extname;-- Check active connectionsselect count(*) from pg_stat_activity;
```

#### Check available extensions in Supabase [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#check-available-extensions-in-supabase)

```
1
2
3
4
5
6
7
8

-- Connect to your Supabase database and check available extensionsSELECT name, comment FROM pg_available_extensions ORDER BY name;-- Compare with source database extensionsSELECT extname FROM pg_extension ORDER BY extname;-- Install needed extensionsCREATE EXTENSION IF NOT EXISTS extension_name;
```

### Step 1: Set up migration VM [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-1-set-up-migration-vm)

For optimal performance, run the migration from a cloud VM, not your local machine. The VM should be in the same region as either your source or target database to optimize network performance. See the Resource Requirements table in Step 2 for VM sizing recommendations.

#### Set up Ubuntu VM [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#set-up-ubuntu-vm)

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

# Install Postgres client and toolssudo apt updatesudo apt install software-properties-commonsudo sh -c 'echo "deb http://apt.Postgres.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'wget --quiet -O - https://www.Postgres.org/media/keys/ACCC4CF8.asc | sudo apt-key add -sudo apt updatesudo apt install Postgres-client-17 tmux htop iotop moreutils# Start or attach to tmux sessiontmux a -t migration || tmux new -s migration
```

### Step 2: Prepare Supabase project [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-2-prepare-supabase-project)

1. Create a Supabase project at [supabase.com/dashboard](https://supabase.com/dashboard)
2. Note your database password
3. Install required extensions via SQL or Dashboard
4. Get your connection string:
   - Go to **Project → Settings → Database → Connection Pooling**
   - Select **Session pooler** (port 5432) and copy the connection string
   - Connection format: `Postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres`

**Important Notes**:

- **Users/roles are not migrated** \- You'll need to recreate roles and privileges after import ( [Supabase Roles Guide](https://supabase.com/blog/postgres-roles-and-privileges))
- **Row Level Security (RLS) status on tables is not migrated** \- You'll need to enable RLS for tables after migration.

**Resource Requirements**:

| Database Size | Recommended Compute | Recommended VM | Action Required |
| --- | --- | --- | --- |
| < 10 GB | Default | 2 vCPUs, 4 GB RAM | None |
| 10-100 GB | Default-Small | 4 vCPUs, 8 GB RAM | Consider compute upgrade |
| 100-500 GB | Large compute | 8 vCPUs, 16 GB RAM, NVMe | Upgrade compute before restore |
| 500 GB - 1 TB | XL compute | 16 vCPUs, 32 GB RAM, NVMe | Upgrade compute before restore |
| \> 1 TB | Custom | Custom | [Contact support](https://supabase.com/dashboard/support/new) first |

Also, you can temporarily increase compute size and/or disk IOPS and throughput via Settings → Compute and Disk if you want faster database restore (you can use larger -j for pg\_restore if you do so).

### Step 3: Create database dump [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-3-create-database-dump)

#### Set source database to read only mode for production migration [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#set-source-database-to-read-only-mode-for-production-migration)

If doing a maintenance window migration, prevent data changes:

```
1
2

-- Connect to source database and run:ALTER DATABASE your_database_name SET default_transaction_read_only = true;
```

For testing without a maintenance window, skip this step but use lower -j values.

#### Dump the database [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#dump-the-database)

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

# Determine number of parallel jobs based on:# - Source database CPU cores (don't saturate production)# - VM CPU cores# - For testing without maintenance window: use lower values to be gentle# - For production with maintenance window: can use higher valuesDUMP_JOBS=4  # Adjust based on your setup# Check available cores on VMnproc# Create dump with progress loggingpg_dump \  --host=<source_host> \  --port=<source_port> \  --username=<source_username> \  --dbname=<source_database> \  --jobs=$DUMP_JOBS \  --format=directory \  --no-owner \  --no-privileges \  --no-subscriptions \  --verbose \  --file=./db_dump 2>&1 | ts | tee -a dump.log
```

**Notes about dump flags**:

- `--no-owner --no-privileges`: Applied at dump time to prevent Supabase user management conflicts. While these could be used in pg\_restore instead, applying them during dump keeps the dump file cleaner and more portable.
- `--no-subscriptions`: Logical replication subscriptions won't work in the target
- The dump captures all data and schema but excludes ownership/privileges that would conflict with Supabase's managed environment
- To only migrate a single database schema, add the `--schema=PATTERN` parameter to your `pg_dump` command.
- To exclude a schema: `--exclude-schema=PATTERN`.
- To only migrate a single table: `--table=PATTERN`.
- To exclude a table: `--exclude-table=PATTERN`.

Run `pg_dump --help` for a full list of options.

#### Recommended parallelization (-j values) [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#recommended-parallelization--j-values)

| Database Size | Testing (no maintenance window) | Production (with maintenance window) | Limiting Factor |
| --- | --- | --- | --- |
| < 10 GB | 2 | 4 | Source CPU |
| 10-100 GB | 2-4 | 8 | Source CPU |
| 100-500 GB | 4 | 16 | Disk IOPS |
| 500 GB - 1 TB | 4-8 | 16-32 | Disk IOPS + CPU |

**Note**: For testing without a maintenance window, use lower -j values to avoid impacting production performance.

### Step 4: Restore to Supabase [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-4-restore-to-supabase)

#### Set connection and restore [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#set-connection-and-restore)

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

# Set Supabase connection (Session Pooler on port 5432 or direct connection)export SUPABASE_DB_URL="Postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"# Determine restore parallelization based on your Supabase compute size:# Free tier: 2 cores → use -j 2# Small compute: 2 cores → use -j 2# Medium compute: 4 cores → use -j 4# Large compute: 8 cores → use -j 8# XL compute: 16 cores → use -j 16RESTORE_JOBS=8  # Adjust based on your Supabase compute size# Restore the dump (parallel mode)# Note: -j cannot be used with --single-transactionpg_restore \  --dbname="$SUPABASE_DB_URL" \  --jobs=$RESTORE_JOBS \  --format=directory \  --no-owner \  --no-privileges \  --verbose \  ./db_dump 2>&1 | ts | tee -a restore.log
```

If restore fails with extension errors, check that errors are only extension-related.

### Step 5: Post-Migration tasks [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-5-post-migration-tasks)

#### Update statistics (important) [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#update-statistics-important)

```
1

psql "$SUPABASE_DB_URL" -c "VACUUM VERBOSE ANALYZE;"
```

For Postgres 18+, pg\_dump includes statistics with `--with-statistics`, but you should still run VACUUM for optimal performance.

#### Verify migration [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#verify-migration)

```
1
2
3
4
5
6

-- Check row countsselect schemaname, tablename, n_live_tupfrom pg_stat_user_tablesorder by n_live_tup desclimit 20;-- Verify data with application-specific queries
```

#### Re-enable writes on source (if keeping it) [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#re-enable-writes-on-source-if-keeping-it)

```
1

ALTER DATABASE your_database_name SET default_transaction_read_only = false;
```

### Migration time estimates [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#migration-time-estimates)

| Database Size | Dump Time | Restore Time | Total Time |
| --- | --- | --- | --- |
| 10 GB | ~5 min | ~10 min | ~15 min |
| 100 GB | ~30 min | ~45 min | ~1.5 hours |
| 500 GB | ~2 hours | ~3 hours | ~5 hours |
| 1 TB | ~4 hours | ~6 hours | ~10 hours |

_Times vary based on hardware, network, and parallelization settings_

### Important notes [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#important-notes)

1. **Region proximity matters**: VM should be in the same region as the source or target for best performance
2. **Downgrade migrations**: While technically possible in some cases, highly not recommended
3. **Testing without downtime**: Use lower `-j` values for pg\_dump to avoid impacting production
4. **For pg\_restore**: Can use full parallelization regardless of production impact
5. **Monitor resources**: Watch CPU, disk I/O with `htop`, `iotop`
6. **Disk I/O**: Often the bottleneck before network bandwidth

* * *

## Method 3: Logical replication [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#method-3-logical-replication)

This method allows migration with minimal downtime using Postgres's logical replication feature. Requires Postgres 10+ on both source and target.

### When to use logical replication [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#when-to-use-logical-replication)

- You need minimal downtime (minutes instead of hours)
- Source database is Postgres 10 or higher
- You can configure logical replication on the source
- Database has high write activity that can't be paused for long

### Source Postgres prerequisites [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#source-postgres-prerequisites)

#### Access & privileges [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#access--privileges)

- Connection string with rights to CREATE PUBLICATION and read tables
- Superuser or replication privileges recommended

#### Required settings for logical replication [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#required-settings-for-logical-replication)

- `wal_level = logical`
- `max_wal_senders ≥ 1`
- `max_replication_slots ≥ 1`
- Sufficient `max_connections` (current + 1 for subscription)

#### Replica identity [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#replica-identity)

Every table receiving UPDATE/DELETE must have a replica identity (typically a PRIMARY KEY). For tables without one:

```
1

ALTER TABLE schema.table_name REPLICA IDENTITY FULL;
```

#### Non-Replicated items [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#non-replicated-items)

- **DDL changes** (schema modifications)
- **Sequences** (need manual sync)
- **Large Objects (LOBs)** (use dump/restore or store in regular bytea columns)

Plan a schema freeze, sequence sync before cutover, and handle LOBs separately.

### Step 1: Configure source database [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-1-configure-source-database)

Edit Postgres configuration files:

#### Postgres.conf [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#postgresconf)

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

# Set Supabase connection (Session Pooler on port 5432 or direct connection)export SUPABASE_DB_URL="Postgres://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"# Set WAL level to logicalwal_level = logical# Ensure sufficient replication slotsmax_replication_slots = 10# Ensure sufficient WAL sendersmax_wal_senders = 10# Set appropriate max_connections (current connections + 1 for subscription)max_connections = 200  # Adjust based on your needs# Optional: Enable SSL for secure replicationssl = on# Allow connections from Supabaselisten_addresses = '*'  # Or specific IP addresses
```

#### pg\_hba.conf [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#pghbaconf)

```
1
2
3
4
5
6
7
8

# Allow replication connections from Supabase# Replace <supabase_ip_range> with actual Supabase IP rangehost    replication     all     <supabase_ip_range>    md5host    all            all     <supabase_ip_range>    md5# With SSL:hostssl replication     all     <supabase_ip_range>    md5hostssl all            all     <supabase_ip_range>    md5
```

Restart Postgres:

```
1
2

sudo systemctl restart Postgressudo systemctl status Postgres
```

### Step 2: Verify configuration [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-2-verify-configuration)

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

-- Should return 'logical'SHOW wal_level;-- Check other parametersSHOW max_replication_slots;SHOW max_wal_senders;-- Check current connectionsSELECT count(*) FROM pg_stat_activity;
```

### Step 3: Check and set replica identity [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-3-check-and-set-replica-identity)

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

-- Find tables without primary keysSELECT n.nspname, c.relnameFROM pg_class cJOIN pg_namespace n ON n.oid = c.relnamespaceLEFT JOIN pg_constraint pk ON pk.conrelid = c.oid AND pk.contype = 'p'WHERE c.relkind = 'r'  AND pk.oid IS NULL  AND n.nspname NOT IN ('pg_catalog','information_schema');-- For tables without a primary key, set REPLICA IDENTITY FULLALTER TABLE my_schema.my_table REPLICA IDENTITY FULL;
```

### Step 4: Export and restore schema only [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-4-export-and-restore-schema-only)

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

# Export schema from sourcepg_dump \  -h <source_host> \  -U <source_user> \  -p <source_port> \  -d <source_database> \  --schema-only \  --no-privileges \  --no-subscriptions \  --format=directory \  -f ./schema_dump# Restore schema to Supabase (use Session Pooler)pg_restore \  --dbname="$SUPABASE_DB_URL" \  --format=directory \  --schema-only \  --no-privileges \  --single-transaction \  --verbose \  ./schema_dump
```

### Step 5: Create publication on source [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-5-create-publication-on-source)

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

-- Create publication for all tablesCREATE PUBLICATION supabase_migration FOR ALL TABLES;-- Or for specific tables only (doesn't require superuser)CREATE PUBLICATION supabase_migration FOR TABLE  schema1.table1,  schema1.table2,  public.table3;-- Verify publication was createdSELECT * FROM pg_publication;
```

### Step 6: Create subscription on Supabase [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-6-create-subscription-on-supabase)

Connect to your Supabase database:

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

-- Create subscription with SSL (recommended)CREATE SUBSCRIPTION supabase_subscriptionCONNECTION 'host=<source_host> port=<source_port> user=<source_user> password=<source_password> dbname=<source_database> sslmode=require'PUBLICATION supabase_migration;-- Or without SSL (if source doesn't support it)CREATE SUBSCRIPTION supabase_subscriptionCONNECTION 'host=<source_host> port=<source_port> user=<source_user> password=<source_password> dbname=<source_database> sslmode=disable'PUBLICATION supabase_migration;
```

### Step 7: Monitor replication status [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-7-monitor-replication-status)

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

-- On Supabase (subscriber) - check subscription statusselect * from pg_subscription_rel;-- srsubstate = 'r' means ready (synchronized)-- srsubstate = 'i' means initializing-- srsubstate = 'd' means data is being copied-- Overall subscription statusselect * from pg_stat_subscription;-- On source database - check replication statusselect * from pg_stat_replication;-- Check replication lagselect  slot_name,  pg_size_pretty(pg_wal_lsn_diff(pg_current_wal_lsn(), restart_lsn)) as lag_sizefrom pg_replication_slots;
```

Wait until all tables show `srsubstate = 'r'` (ready) status.

### Step 8: Synchronize sequences [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-8-synchronize-sequences)

After initial data sync is complete, but BEFORE switching to Supabase:

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

# Set source to read-onlypsql -h <source_host> -c "ALTER DATABASE <source_database> SET default_transaction_read_only = true;"# Export sequences from sourcepg_dump \  -h <source_host> \  -U <source_user> \  -p <source_port> \  -d <source_database> \  --data-only \  --table='*_seq' \  --table='*_id_seq' > sequences.sql# Import sequences to Supabasepsql "$SUPABASE_DB_URL" -f sequences.sql
```

### Step 9: Switch to Supabase [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-9-switch-to-supabase)

1. Ensure replication lag is zero:

```
1
2
3

-- On Supabaseselect * from pg_stat_subscription;-- Check that latest_end_lsn is current
```

2. Stop writes to the source database (if not already read-only)

3. Drop subscription on Supabase:


```
1

DROP SUBSCRIPTION supabase_subscription;
```

4. Update application connection strings to point to Supabase

5. Verify application functionality


### Step 10: Cleanup [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#step-10-cleanup)

On source database (after successful migration):

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

-- Remove publicationDROP PUBLICATION supabase_migration;-- Check and remove any remaining replication slotsSELECT * FROM pg_replication_slots;DROP REPLICATION SLOT slot_name;  -- if any remain-- The source database should remain read-only or be decommissioned-- Do NOT re-enable writes to avoid a split-brain scenario!
```

### Troubleshooting logical replication [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#troubleshooting-logical-replication)

| Issue | Solution |
| --- | --- |
| "could not connect to the publisher" | Check network connectivity, firewall rules, pg\_hba.conf |
| "role does not exist" | Ensure replication user exists on source with REPLICATION privilege |
| "publication does not exist" | Verify publication name and that it was created successfully |
| Replication lag growing | Check network bandwidth, source database load, add more WAL senders |
| Tables stuck in `i` state | Check for locks on source tables, verify table structure matches |
| "out of replication slots" | Increase max\_replication\_slots in Postgres.conf |

### Important limitations [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#important-limitations)

- **DDL changes**: Schema modifications are not replicated - freeze schema during migration
- **Sequences**: Need manual synchronization before cutover
- **Large Objects (LOBs)**: Not replicated - use dump/restore or store in regular bytea columns
- **Custom types**: May need special handling
- **Users and roles**: Must be recreated manually on Supabase

For detailed restrictions, see [Postgres Logical Replication Restrictions](https://www.postgres.org/docs/current/logical-replication-restrictions.html)

### When to use which method [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#when-to-use-which-method)

**Use Dump/Restore when:**

- Downtime window is acceptable
- Source is Postgres < 10
- Simpler process preferred
- Cannot configure logical replication on the source

**Use Logical Replication when:**

- Minimal downtime required
- Postgres 10+ on both sides
- Can modify source configuration
- Have replication privileges

## Getting help [\#](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres\#getting-help)

- For databases > 150 GB: [Contact Supabase support](https://supabase.com/dashboard/support/new) before starting
- [Supabase Dashboard Support](https://supabase.com/dashboard/support/new)
- [Supabase Discord](https://discord.supabase.com/)
- [Postgres Roles and Privileges Guide](https://supabase.com/blog/postgres-roles-and-privileges)
- [Row Level Security Guide](https://supabase.com/docs/guides/database/postgres/row-level-security)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/postgres.mdx)

### Is this helpful?

NoYes

### On this page

[Connection modes](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#connection-modes) [Method 1: Google Colab (easiest)](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#method-1-google-colab-easiest) [Method 2: Manual dump/restore](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#method-2-manual-dumprestore) [Prerequisites](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#prerequisites) [Pre-Migration checklist](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#pre-migration-checklist) [Step 1: Set up migration VM](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-1-set-up-migration-vm) [Step 2: Prepare Supabase project](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-2-prepare-supabase-project) [Step 3: Create database dump](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-3-create-database-dump) [Step 4: Restore to Supabase](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-4-restore-to-supabase) [Step 5: Post-Migration tasks](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-5-post-migration-tasks) [Migration time estimates](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#migration-time-estimates) [Important notes](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#important-notes) [Method 3: Logical replication](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#method-3-logical-replication) [When to use logical replication](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#when-to-use-logical-replication) [Source Postgres prerequisites](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#source-postgres-prerequisites) [Step 1: Configure source database](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-1-configure-source-database) [Step 2: Verify configuration](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-2-verify-configuration) [Step 3: Check and set replica identity](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-3-check-and-set-replica-identity) [Step 4: Export and restore schema only](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-4-export-and-restore-schema-only) [Step 5: Create publication on source](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-5-create-publication-on-source) [Step 6: Create subscription on Supabase](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-6-create-subscription-on-supabase) [Step 7: Monitor replication status](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-7-monitor-replication-status) [Step 8: Synchronize sequences](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-8-synchronize-sequences) [Step 9: Switch to Supabase](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-9-switch-to-supabase) [Step 10: Cleanup](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#step-10-cleanup) [Troubleshooting logical replication](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#troubleshooting-logical-replication) [Important limitations](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#important-limitations) [When to use which method](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#when-to-use-which-method) [Getting help](https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres#getting-help)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)