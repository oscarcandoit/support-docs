---
url: "https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/"
title: "The cpanel_dovecot_solr_rebuild_index Script | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [WHM](https://docs.cpanel.net/whm/)
3. [Scripts](https://docs.cpanel.net/whm/scripts/)
4. The cpanel\_dovecot\_solr\_rebuild\_index Script


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [email](https://docs.cpanel.net/tags/email/) [dovecot](https://docs.cpanel.net/tags/dovecot/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#options)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#overview)

* * *

[Run the script](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#run-the-script)

* * *

[Options](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/#options)

* * *

## The cpanel\_dovecot\_solr\_rebuild\_index Script

_Valid for versions 82 through the latest version_

#### Version:

#### [82](https://docs.cpanel.net/whm/scripts/the-cpanel-dovecot-solr-rebuild-index-script/)

Last modified: _2022 July 28_

* * *

## Overview

The `/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_rebuild_index` script rebuilds your Apache Solr™ index files if they become corrupt. This script performs the following actions:

1. Backs up the existing index files to the `/home/cpanelsolr/server/solr/dovecot/data/index/segments_1.timestamp` file.







Note:





In this filepath, `timestamp` represents the file’s creation date and time.

2. Restarts Apache Solr.

3. Reindexes all of your cPanel users’ mailboxes.







Note:





- To run this script, you **must** install Apache Solr. To install Apache Solr, use WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins/) interface ( _WHM » Home » cPanel » Manage Plugins_).

- On systems with many user mailboxes, this script may become resource intensive and slow to complete.


The system runs the `/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_maintenance` script nightly via cron job. This script ensures that Apache Solr runs efficiently. It optimizes your Apache Solr index files to improve searching and removes space that deleted emails use.

This script fails when your Apache Solr index files become corrupt, which commonly occurs on resource-limited systems. For example, if you run out of disk space or inodes, Apache Solr’s index files can become corrupt. If the script fails, the system sends you an email with the error and steps to troubleshoot the error. If you troubleshoot the error and the script continues to fail, use the `/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_rebuild_index` script to rebuild your Apache Solr index files.

## Run the script

To use this script, run the following command as the `root` user:

```
/usr/local/cpanel/3rdparty/scripts/cpanel_dovecot_solr_rebuild_index
```

### Options

This script does not accept options.

Note:

The `--help` option will **not** provide help documentation. Instead, the script will run as if you did not pass an option.

For more information about Apache Solr, read [dovecot.org’s Solr](https://wiki.dovecot.org/Plugins/FTS/Solr) documentation.

#### Additional Documentation

* * *

- [The build\_maxemails\_config Script](https://docs.cpanel.net/whm/scripts/the-build_maxemails_config-script/)
- [The ccs-check Script](https://docs.cpanel.net/whm/scripts/the-ccs-check-script/)
- [The convert\_maildir\_to\_mdbox Script](https://docs.cpanel.net/whm/scripts/the-convert_maildir_to_mdbox-script/)
- [The convert\_mdbox\_to\_maildir Script](https://docs.cpanel.net/whm/scripts/the-convert_mdbox_to_maildir-script/)
- [The copy\_user\_mail\_as\_root Script](https://docs.cpanel.net/whm/scripts/the-copy_user_mail_as_root-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×