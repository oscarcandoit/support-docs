---
url: https://developers.elementor.com/docs/cli/library-sync/
scraped_at: 2025-10-20T01:05:20.574Z
---

# [\#](https://developers.elementor.com/docs/cli/library-sync/\#library-sync) Library Sync

Elementor CoreAdvanced

Elementor holds, locally, a list of available templates that can be downloaded from the Elementor template library. A transient is scheduled to synch the available templates every 12 hours. Elementor CLI `library sync` command triggers this sync from the cloud using the command line.

## [\#](https://developers.elementor.com/docs/cli/library-sync/\#command) Command

```
wp elementor library sync [--force] [--network]

```

1

## [\#](https://developers.elementor.com/docs/cli/library-sync/\#arguments) Arguments

`[--force]`

_(Optional)_ Force library sync even if it looks like the library is already up to date.

`[--network]`

_(Optional)_ Sync library for each site in the network.

## [\#](https://developers.elementor.com/docs/cli/library-sync/\#usage-examples) Usage Examples

```
wp elementor library sync

```

1

This command will sync the library with Elementor cloud library.

```
wp elementor library sync --force

```

1

This command will sync the library with the Elementor cloud library even if it appears that the library is already up to date.

```
wp elementor library sync --network

```

1

This command will sync the libraries of each site on the network with the Elementor cloud library.

←
[Update DB](https://developers.elementor.com/docs/cli/update-db/)[Library Connect](https://developers.elementor.com/docs/cli/library-connect/)
→