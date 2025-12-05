---
url: https://developers.elementor.com/docs/cli/library-connect/
scraped_at: 2025-10-20T01:05:25.095Z
---

# [\#](https://developers.elementor.com/docs/cli/library-connect/\#library-connect) Library Connect

Elementor CoreAdvanced

Connect a site to the Elementor library from the command line by simply providing a WordPress user and a connection token.

## [\#](https://developers.elementor.com/docs/cli/library-connect/\#command) Command

```
wp elementor library connect [--user] [--token]

```

1

## [\#](https://developers.elementor.com/docs/cli/library-connect/\#arguments) Arguments

`[--user]`

_(Optional)_ The user to connect. Accepts user id, user login name or an email.

`[--token]`

_(Optional)_ A connect token from Elementor account dashboard.

## [\#](https://developers.elementor.com/docs/cli/library-connect/\#usage-examples) Usage Examples

```
wp elementor library connect --user=admin --token=xxx

```

1

This command will connect the WordPress `admin` user to the Elementor library .

## [\#](https://developers.elementor.com/docs/cli/library-connect/\#notes) Notes

Notes

This command is used by Elementor team to connect with Elementor servers in order to update the library using CLI for testing and debugging. For the moment, external developers cannot obtain the `token`.

←
[Library Sync](https://developers.elementor.com/docs/cli/library-sync/)[Library Disconnect](https://developers.elementor.com/docs/cli/library-disconnect/)
→