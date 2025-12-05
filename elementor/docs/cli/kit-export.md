---
url: https://developers.elementor.com/docs/cli/kit-export/
scraped_at: 2025-10-20T01:05:44.020Z
---

# [\#](https://developers.elementor.com/docs/cli/kit-export/\#kit-export) Kit Export

Elementor CoreAdvanced

Exporting multiple individual templates is not an easy task. Elementor can export all of a site's content, templates, and site settings bundled as a kit. These kits can be exported from the admin panel or from the command line using the `kit export` command.

## [\#](https://developers.elementor.com/docs/cli/kit-export/\#command) Command

```
wp elementor kit export <file-path> [--include]

```

1

## [\#](https://developers.elementor.com/docs/cli/kit-export/\#arguments) Arguments

`<file-path>`

_(Required)_ A path to the kit file.

`[--include]`

_(Optional)_ Data types to include in the export. Possible values are `content`, `templates`, `site-settings`. If this parameter won't be specified, all data types will be included.

## [\#](https://developers.elementor.com/docs/cli/kit-export/\#usage-examples) Usage Examples

```
wp elementor kit export path/to/export-file-name.zip

```

1

This command will export all site data to a specified file name.

```
wp elementor kit export path/to/export-file-name.zip --include=site-settings,content

```

1

This command will export only the site settings and content to a specified file name.

←
[Kit Import](https://developers.elementor.com/docs/cli/kit-import/)[Experiment Status](https://developers.elementor.com/docs/cli/experiments-status/)
→