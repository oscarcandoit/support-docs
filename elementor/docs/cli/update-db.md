---
url: https://developers.elementor.com/docs/cli/update-db/
scraped_at: 2025-10-20T01:05:15.109Z
---

# [\#](https://developers.elementor.com/docs/cli/update-db/\#update-db) Update DB

Elementor CoreAdvanced

In some cases, new Elementor versions perform changes in the database (e.g. migrate to kits, replace schemes with globals etc.). Elementor CLI `update db` command will trigger the database update functionality using the command line.

## [\#](https://developers.elementor.com/docs/cli/update-db/\#command) Command

```
wp elementor update db [--force] [--network]

```

1

and

```
wp elementor-pro update db [--force] [--network]

```

1

## [\#](https://developers.elementor.com/docs/cli/update-db/\#arguments) Arguments

`[--force]`

_(Optional)_ Force database update even if it looks like an update is in progress.

`[--network]`

_(Optional)_ Update the database for each site in the network.

## [\#](https://developers.elementor.com/docs/cli/update-db/\#usage-examples) Usage Examples

```
wp elementor update db

```

1

This command will update the database, if an update is needed.

```
wp elementor-pro update db

```

1

This command will update the Elementor Pro database, if an update is needed.

```
wp elementor update db --force

```

1

This command will update the database even if another process is running.

```
wp elementor update db --network

```

1

This command will update the database for each site in the network.

←
[Replace URLs](https://developers.elementor.com/docs/cli/replace-urls/)[Library Sync](https://developers.elementor.com/docs/cli/library-sync/)
→