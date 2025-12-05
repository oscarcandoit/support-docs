---
url: https://developers.elementor.com/docs/cli/library-disconnect/
scraped_at: 2025-10-20T01:05:30.614Z
---

# [\#](https://developers.elementor.com/docs/cli/library-disconnect/\#library-disconnect) Library Disconnect

Elementor CoreAdvanced

Disconnect a site from the Elementor library using the command line, by simply providing the WordPress user.

## [\#](https://developers.elementor.com/docs/cli/library-disconnect/\#command) Command

```
wp elementor library disconnect [--user]

```

1

## [\#](https://developers.elementor.com/docs/cli/library-disconnect/\#arguments) Arguments

`[--user]`

_(Optional)_ The user to disconnect. Accepts user id, user login name or an email.

## [\#](https://developers.elementor.com/docs/cli/library-disconnect/\#usage-examples) Usage Examples

```
wp elementor library disconnect --user=admin

```

1

This command will disconnect the WordPress `admin` user from Elementor library.

←
[Library Connect](https://developers.elementor.com/docs/cli/library-connect/)[Library Import](https://developers.elementor.com/docs/cli/library-import/)
→