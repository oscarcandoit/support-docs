---
url: "https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/"
title: "WP Toolkit Command Line Interface | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [cPanel Developed Plugins](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/)
4. WP Toolkit Command Line Interface


[wordpress](https://docs.cpanel.net/tags/wordpress/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#overview)

* * *

[Run the API](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#run-the-api)

* * *

[Commands](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#commands)

* * *

[Options](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#options)

* * *

[WP-CLI commands](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#wp-cli-commands)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#overview)

* * *

[Run the API](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#run-the-api)

* * *

[Commands](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#commands)

* * *

[Options](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#options)

* * *

[WP-CLI commands](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/#wp-cli-commands)

* * *

## WP Toolkit Command Line Interface

_Valid for versions 92 through the latest version_

#### Version:

#### [92](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit-command-line-interface/)

Last modified: _2025 June 6_

* * *

## Overview

This document lists all of the commands available in your server’s command line interface via the [WP Toolkit](https://docs.cpanel.net/cpanel/domains/wp-toolkit-for-cpanel/).

## Run the API

To run the API, first connect to your cPanel server via SSH as the `root` user. For information on how to connect via SSH, read our [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) documentation.

The commands take the following form:

```bash
wp-toolkit <command> [options]
```

### Commands

The API accepts the following commands:

| Command | Parameter | Description | Example |
| --- | --- | --- | --- |
| `--clear-cache` | \[option\] | Clears the cache of the selected WordPress installation.<br>Requires the following options: `-instance-id` \| `-main-domain-id` and `-path`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To clear the cache of the WordPress installation with the ID `1`:<br>` wp-toolkit --clear-cache -instance-id 1` |
| `--clear-wpt-cache` |  | Clears the WP Toolkit cache. | To clear the WP Toolkit cache:<br>` wp-toolkit --clear-wpt-cache` |
| `--register` | \[option\] | Adds a WordPress installation to WP Toolkit. Requires the `-main-domain-id` and `-path` options.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format | To add the WordPress installation on the domain with the ID `1`<br>to WP Toolkit:<br>` wp-toolkit --register -main-domain-id 1 -path httpdocs` |
| `--info` | \[option\] | Displays the detailed information about the selected WordPress installation.<br>Requires the following options: `-instance-id` \| `-main-domain-id` and `-path`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display information about the WordPress installation with the ID `1`:<br>` wp-toolkit --info -instance-id 1` |
| `--config` | \[option\] | Manages WP Toolkit settings.<br>Requires the `-operation` option with the following arguments: `list` \| `get` \| `set` \| `rollback`.<br>If `get` \| `rollback` is used, you need to specify the `-option-name` option.<br>If `set` is used, you need to specify the `-option-name` and `option-value` options.<br>You cannot set read-only settings.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display a list of WP Toolkit settings and their values:<br>` wp-toolkit --config -operation list` |
| `--wp-cli` | \[option\] | Executes a `wp-cli` command on the selected WordPress<br>installation.<br>Requires the `-instance-id` \| `-main-domain-id` and `-path` options and a `wp-cli` subcommand. | To display all plugins for the WordPress installation with the ID `1`:<br>` wp-toolkit --wp-cli -instance-id 1 -- plugin list` |
| `--list` |  | Displays a brief description of WordPress installations existing on the server.<br>To specify filters, use the following options: `-main-domain-id` \| `-plugins` \| `-themes`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display a brief description of all WordPress installations existing<br>on the server:<br>` wp-toolkit --list` |
| `--help` or `-h` |  | Displays help on the use of this utility. | To view the help info on the use of this utility:<br>` wp-toolkit --help`<br>or<br>` wp-toolkit -h` |
| `--install` | \[option\] | Installs WordPress on a domain.<br> You must disable the _Allow WordPress sites to send notification emails after installation_ setting in WHM's _[WP Toolkit](https://docs.cpanel.net/whm/plugins/wp-toolkit-for-whm/)_ interface to use this comand if your server uses PHP 8 and has disabled the PHP [`mail()`](https://www.php.net/manual/en/function.mail.php) function (\_WHM >> Home >> Plugins >> WP Toolkit\_).<br>Requires the `-main-domain-id` or `-domain-name` option.<br>Can be used with the following options:<br>`-username`, `-admin-email`, `-protocol`, `-path`, `-version`, `-language`, `-db-server`, `-db-name`, `-db-user`,<br>`-table-prefix`, `-set-id`, `-site-title`, `-auto-updates`, `-plugins-auto-updates`, `-themes-auto-updates`, `-format`, `-show-progress`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To install WordPress with the default settings on the domain<br>example.com:<br>` wp-toolkit --install -domain-name example.com` |
| `--clone` | \[option\] | Clones a WordPress website to another domain and/or subdirectory.<br>Requires the `-source-instance-id` and `-target-domain-name` \| `-target-domain-id` options.<br>Can be used with the following options:<br>`-target-path`, `-target-db-name`, `-target-db-server-id`, `-target-db-user-login`, `-force-overwrite`, `-show-progress`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2` |
| `--copy-data` | \[option\] | Copies the content of your WordPress website including files and database to another WordPress website.<br>Requires the `-source-instance-id` and `-target-instance-id` options.<br>Can be used with the following options:<br>`-data-to-copy`, `-files-replace-modified`, `-files-remove-missing`, `-db-tables-copy-mode`, `-db-tables`, `-exclude-db-tables`,<br>`-create-restore-point`, `-show-progress`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To copy the content of the website with the ID `1` to the website with the ID 2:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2` |
| `--detach` | \[option\] | Detaches a WordPress website.<br>Requires the following options: `-instance-id` \| `-main-domain-id` and `-path`. | To detach the WordPress installation with the ID `1`:<br>` wp-toolkit --detach -instance-id 1` |
| `--languages` | \[option\] | Displays the list of languages available for the specified<br>WordPress version. Requires the `-version` option.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display the list of languages available for WordPress<br>version 4.9.8 in the JSON format:<br>` wp-toolkit --languages -version 4.9.8 -format json` |
| `--sets` | \[option\] | Manages sets of plugins and themes.<br>Requires the `-operation` option with the following arguments: `list` \| `info` \| `add` \| `remove` \| `install` \|<br>`rename` \| `add-plugin` \| `add-theme` \| `activate-plugin` \| `activate-theme` \|<br>`deactivate-plugin` \| `deactivate-theme` \|<br>`remove-plugin` \| `remove-theme`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display available sets of plugins and themes:<br>` wp-toolkit --sets -operation list` |
| `--plugins --skip-plugins=false` | \[option\] | Manages uploaded plugins. <br>Requires the `-operation` option with the following arguments: `list-custom` \| `add` \| `remove`.<br>To use `add`, you need to specify the location of the plugin you want to upload (the `-source-url` \| `-path` option).<br>To use `remove`, you need to specify the ID and version of the plugin (the `-id` and `-version` options).<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display all uploaded plugins:<br>` wp-toolkit --plugins-operation list-custom` |
| `--themes` | \[option\] | Manages uploaded themes. <br>Requires the `-operation` option with the following arguments: `list-custom` \| `add` \| `remove`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To remove the uploaded theme that has the ID `1` and the version 1.4:<br>` wp-toolkit --themes --skip-themes=false -operation remove -id 1 -version 1.4` |
| `--smart-update` | \[option\] | Enables and disables Smart Updates for a website.<br>Requires the following options: `-instance-id` \| `-main-domain-id` and `-path`.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To enable Smart Updates for the WordPress installation with the ID `1`:<br>` wp-toolkit --smart-update -instance-id 1` |
| `--versions` |  | Displays available WordPress versions that can be installed via<br>WP Toolkit.<br>To show output in a particular format, specify the `-format` option.<br>Supported formats: JSON, raw. By default, all data is shown in the raw format. | To display available WordPress versions that can be installed<br>via WP Toolkit:<br>` wp-toolkit --versions` |

### Options

This API accepts the following options:

| Command | Parameter | Description | Example |
| --- | --- | --- | --- |
| `-instance-id` | `<instance_id>` | WordPress installation ID. | To activate plugin “hello” on the WordPress installation with the ID `1`:<br>` wp-toolkit --wp-cli -instance-id 1 -- plugin activate hello` |
| `-main-domain-id` | `<main_domain_id>` | Main domain ID. | To display information about the WordPress installation with the ID `1`:<br>` wp-toolkit --info -main-domain-id 1 -path httpdocs` |
| `-path` | `<path>` | The relative path from the domain’s document root directory, for example, `/subdirectory`. | To add the WordPress installation on the domain with the ID `1`<br>to WP Toolkit:<br>` wp-toolkit --register -main-domain-id 1 -path httpdocs` |
| `-plugins` |  | Adds information about the number of plugins on WordPress<br>installations when the `list` command is executed. | To display main data (including the number of plugins) on all<br>WordPress installations existing on the server:<br>` wp-toolkit --list -plugins` |
| `-themes` |  | Adds information about the number of plugins on WordPress<br>installations when the `list` command is executed. | To display main data (including the number of themes) on all<br>WordPress installations existing on the server:<br>` wp-toolkit --list -themes` |
| `-format` | `raw | json` | Renders output in a particular format. Supported formats: JSON,<br>raw. By default, all data is shown in the raw format. | To display main data on all WordPress installations existing on<br>the server in the JSON format:<br>` wp-toolkit --list -format json` |
| `-domain-id` | `<domain-id>` | The domain ID. | To install WordPress with the default settings on the domain<br>with the ID `1`:<br>` wp-toolkit --install -domain-id 1` |
| `-domain-name` | `<domain_name>` | The domain name. | To install WordPress with the default settings on the domain<br>example.com:<br>` wp-toolkit --install -domain-name example.com` |
| `-operation` |  | Necessary for certain commands to specify the corresponding<br>operation. | To display all uploaded themes:<br>` wp-toolkit --themes -operation list-custom` |
| `-site-title` | `<site_title>` | The website title. Used with the `--install` command. | To install WordPress with the site title “Example Site” on the<br>domain with the ID `1`:<br>` wp-toolkit --install -domain-id 1 -site-title "Example Site"` |
| `-protocol` | `http` \| `https` | The protocol name. Used with the `--install` command. | To install WordPress on the domain with the ID `1` and enable the<br>website via the HTTP protocol:<br>` wp-toolkit --install -domain-id 1 -protocol http` |
| `-db-name` | `<database_name>` | The database name. Used with the `--install` command. | To install WordPress on the domain with the ID `1` and name the<br>WordPress database `a1`:<br>` wp-toolkit --install -domain-id 1 -db-name a1` |
| `-db-user` | `<database_user>` | The database user name. Used with the `--install` command.<br>To specify the database user password, use the `DB_PASSWORD` environment variable. | To install WordPress on the domain with the ID `1` and name the<br>WordPress database user `db_user`:<br>` wp-toolkit --install -domain-id 1 -db-user db_user` |
| `-table-prefix` | `<table_prefix>` | The table prefix. Used with the `--install` command. | To install WordPress on the domain with the ID `1` and name the<br>table prefix `aaa`:<br>` wp-toolkit --install -domain-id 1 -table-prefix aaa` |
| `-db-server` | `IP address of the remote database server` \| `localhost:3306` | The database server. Used with the `--install` command. | To install WordPress on the domain with the ID `1` using the<br>local database server for hosting the WordPress database:<br>` wp-toolkit --install -domain-id 1 -db-server localhost:3306` |
| `-language` | `<locale_name>` | The WordPress language. Used with the `--install` command. | To install WordPress on the domain with the ID `1` and choose the<br>English language of the WordPress interface:<br>` wp-toolkit --install -domain-id 1 -language en_US` |
| `-version` | `<version>` | The WordPress version. Used with the `--install` command. | To install WordPress version 4.9.8 on the domain with the ID `1`:<br>` wp-toolkit --install -domain-id 1 -version 4.9.8` |
| `-admin-email` | `<admin-email>` | The email of the WordPress administrator. Used with the<br>`--install` command. | To install WordPress on the domain with the ID `1` and specify<br>the email of the WordPress administrator:<br>` wp-toolkit --install -domain-id 1 -admin-email mail@example.com` |
| `-username` | `<username>` | Specifies the administrator username. Used with the `--install` command.<br>To specify the administrator password, use the `ADMIN_PASSWORD` environment variable. | To install WordPress on the domain `example.com` naming the administrator “WP\_admin”:<br>` wp-toolkit --install -domain-name example.com -username WP_admin` |
| `-set-id` | `<set_id>` | The ID of a set for installing or removing plugins and themes. | To add the plugin with the ID `1` to the set with the ID `1`:<br>` wp-toolkit --sets -operation add-plugin -set-id 1 -plugin-id 1` |
| `-source-url` | `<source_url>` | The source URL, by which a plugin or a theme is available (used<br>to upload plugins and themes). | To upload a plugin available by the known URL:<br>` wp-toolkit --plugins -operation add -source-url https://downloads.wordpress.org/plugin/hello-dolly.1.6.zip` |
| `-plugin-id` | `<plugin_id>` | The ID of an uploaded plugin. Used with the `--sets` command and the `add-plugin` and<br>`remove-plugin` operations. | To add the uploaded plugin with the ID `1` to the set with the ID<br>1:<br>` wp-toolkit --sets -operation add-plugin -set-id 1 -plugin-id 1` |
| `-theme-id` | `<theme_id>` | The ID of an uploaded theme. Used with the `--sets` command and the `add-theme` and<br>`remove-theme` operations. | To add the uploaded theme with the ID `1` to the set with the ID<br>1:<br>` wp-toolkit --sets -operation add-theme -set-id 1 -theme-id 1` |
| `-plugin-slug` | `<plugin_slug>` | The plugin slug for adding or removing plugins found in the<br>wordpress.org repository. Used with the `--sets` command and the `add-plugin` and<br>`remove-plugin` operations. | To remove the plugin with the slug “akismet” from the set with<br>the ID `1`:<br>` wp-toolkit --sets -operation remove-plugin -set-id 1 -plugin-slug akismet` |
| `-theme-slug` | `<theme_slug>` | The theme slug for adding or removing themes found in the<br>wordpress.org repository. Used with the `-sets` command and the `add-theme` and<br>`remove-theme` operations. | To add the theme with the slug “breviter” to the set with the<br>ID 1:<br>` wp-toolkit --sets -operation add-theme -set-id 1 -theme-slug breviter` |
| `-source-instance-id` | `<source-instance-id>` | The source WordPress website ID. Used with the `--clone` and `--copy-data` commands. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2:<br>`wp-toolkit –clone -source-instance-id 1 -target-domain-id 2` |
| `-target-domain-name` | `<target-domain-name>` | The target domain name. Used with the `--clone` command. | To clone the WordPress installation with the ID `1` to the target domain `example.com`:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-name example.com` |
| `-target-domain-id` | `<target-domain-id>` | The target domain ID. Used with the `--clone` command. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2` |
| `-target-path` | `<target-path>` | The path inside the target domain’s document root. Used with the `--clone` command.<br>If the option is not specified, a WordPress website is cloned to the domain root directory. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 and the `subdirectory` directory:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -target-path subdirectory` |
| `-target-db-name` | `<target-db-name>` | The target database name (generated automatically if not specified). Used with the `--clone` command. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 and name the created database `wp_database`:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -target-db-name wp_database` |
| `-target-db-user-login` | `<target-db-user-login>` | The username of the target database user (generated automatically if not specified). Used with the `--clone` command.<br>To specify a password for the database user, use the `TARGET_DB_USER_PASSWORD` environment variable. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 and name the database user `wp_user`:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -target-db-user-login wp_user` |
| `-target-db-server-id` | `<target-db-server-id>` | The ID of the target MySQL database server. Used with the `--clone` command.<br>If the option is not specified, the default database server is used on the target domain. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 and assign the ID 2 to the target MySQL database server:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -target-db-server-id 2` |
| `-force-overwrite` | `yes` \| `no` | Used with the `--clone` command. If the option is set to “yes”, WP Toolkit overwrites data on the target domain and path ignoring any existing WordPress installations and other potential website data.<br>The default state of the option is “no”. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 overwriting an existing WordPress installation on the target domain:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -force-overwrite yes` |
| `-show-progress` | `yes` \| `no` | Manages if the progress of an operation is shown or not. By default, the option is set to \`yes\` and the progress is displayed (unless you specify the JSON output format). If set to \`no\`, the operation is performed silently. | To clone the WordPress installation with the ID `1` to the target domain with the ID 2 without showing the cloning progress:<br>` wp-toolkit --clone -source-instance-id 1 -target-domain-id 2 -show-progress no` |
| `-option-name` | `<option-name>` | The WP Toolkit setting name. The option is used with the `--config` command and the `-operation` option. | To see the value of the `transportOptionDelete` setting:<br>` wp-toolkit --config -operation get -option-name transportOptionDelete` |
| `-option-value` | `<option-value>` | The WP Toolkit setting value. The option is used with the `--config` command and the `-operation` option that has the `set` argument. | To set the `httpTimeout` setting to 10 seconds:<br>` wp-toolkit --config -operation set -option-name httpTimeout -option-value 10` |
| `-target-instance-id` | `<target-instance-id>` | The target WordPress website ID. Used with the `--copy-data` command. | To copy the content of the website with the ID `1` to the website with the ID 2:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2` |
| `-data-to-copy` | `all` \| `files` \| `db` | Used with the `--copy-data` command. Specifies what data to copy: files and database, files only, or database only. | To copy the content of the website (files only) with the ID `1` to the website with the ID 2:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -data-to-copy files` |
| `-files-replace-modified` | `yes` \| `no` | Used with the `--copy-data` command. Set to “yes” by default.<br>When set to “yes”, it replaces files modified on the target with files from the source even if the source files are older. | To copy the content of the website with the ID `1` to the website with the ID 2 and prohibit overwriting<br>files on the target with the files from the source that are older:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -files-replace-modified no` |
| `-files-remove-missing` | `yes` \| `no` | Used with the `--copy-data` command.<br>When set to “yes”, it removes files existing on the target but absent from the source. | To copy the content of the website with the ID `1` to the website with the ID 2 and remove files existing on the target but absent from the source:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -files-remove-missing yes` |
| `-db-tables-copy-mode` | `default` \| `all` \| `new` \| `selected` | Used with the `--copy-data` command.<br>Specifies which database tables will be copied:<br>- `default` copies all tables except for the data ones (`postmeta`, `posts`, `usermeta`, and `users`).<br>- `all` copies all tables of the source WordPress website (you can exclude certain tables with the `-exclude-db-tables` option).<br>- `new` copies tables that exist on the source WordPress website but are absent from the target WordPress site.<br>- `selected` allows to select exact tables to copy. Requires the `-db-tables` option. | To copy the content of the website with the ID `1` to the website with the ID 2 copying all database tables:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -db-tables-copy-mode all` |
| `-db-tables` | A comma-separated list of database tables. | Used with the `--copy-data` command and the `-db-tables-copy-mode` option that has the `selected` value.<br>Specifies which database tables to copy. | To copy the content of the website with the ID `1` to the website with the ID 2 copying the `H7_posts` and `H7_comments` database tables:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -db-tables-copy-mode selected -db-tables H7_posts,H7_users` |
| `-exclude-db-tables` | A comma-separated list of database tables. | Used with the `--copy-data` command and the `-db-tables-copy-mode` option that has the `all` value.<br>Specifies which database tables to exclude from copying. | To copy the content of the website with the ID `1` to the website with the ID 2 excluding the `H7_posts` and `H7_comments` database tables from copying:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -db-tables-copy-mode all -exclude-db-tables H7_posts,H7_users` |
| `-create-restore-point` | `yes` \| `no` | Used with the `--copy-data` command. Set to “yes” by default.<br>When set to “yes”, it creates a restore point you can later use to revert the changes made during copying if something goes wrong. | To copy the content of the website with the ID `1` to the website with the ID 2 and not to create a restore point:<br>` wp-toolkit --copy-data -source-instance-id 1 -target-instance-id 2 -create-restore-point no` |
| `-username` | `<username>` | Used with the `--install` command. Specifies the administrator username.<br>To specify the administrator password, use the `ADMIN_PASSWORD` environment variable. | To install WordPress on the domain `example.com` naming the administrator “WP\_admin”:<br>` wp-toolkit --install -domain-name example.com -username WP_admin` |
| `-auto-updates` | `true` \| `false` \| `minor` | Configures automatic WordPress updates. Set to minor (security) updates by default.<br>Used with the `--install` command. | To install WordPress on the domain `example.com` turning on all (minor and major) automatic updates:<br>` wp-toolkit --install -domain-name example.com -auto-updates true` |
| `-plugins-auto-updates` | `true` \| `false` | Turns on and off automatic updates of WordPress plugins. Set to false by default.<br>Used with the `--install` command. | To install WordPress on the domain `example.com` turning on automatic updates of plugins:<br>` wp-toolkit --install -domain-name example.com -plugins-auto-updates true` |
| `-themes-auto-updates` | `true` \| `false` | Turns on and off automatic updates of WordPress themes. Set to false by default.<br>Used with the `--install` command. | To install WordPress on the domain `example.com` turning on automatic updates of themes:<br>` wp-toolkit --install -domain-name example.com -themes-auto-updates true` |

## WP-CLI commands

WP Toolkit proxies some commands to [`WP-CLI`](https://make.wordpress.org/cli/handbook/how-to/). This allows you to configure WordPress sites using global parameters.

Note:

You may need to add `--skip-plugins=false` and `--skip-themes=false` to `WP-CLI` plugin and theme commands for them to resolve.

For more information about `WP-CLI` commands, including parameters and options, read the `WP-CLI` [Config](https://make.wordpress.org/cli/handbook/references/config/) documentation.

You can include a `WP-CLI` command in a WP Toolkit command if you separate it with a double hyphen, as follows:

```bash
wp-toolkit --wp-cli -instance-id 1 -- plugins list --skip-plugins=false
```

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [Onboarding Assistant](https://docs.cpanel.net/knowledge-base/cpanel-product/onboarding-assistant/)
- [The migrate\_legacy\_wordpress\_to\_modern\_wordpress Script](https://docs.cpanel.net/whm/scripts/the-migrate_legacy_wordpress_to_modern_wordpress-script/)
- [WP Toolkit](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×