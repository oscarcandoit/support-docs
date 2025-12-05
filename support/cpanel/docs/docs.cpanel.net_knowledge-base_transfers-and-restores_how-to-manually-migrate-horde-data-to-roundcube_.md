---
url: "https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/"
title: "How to Manually Migrate Horde Data to Roundcube | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#main-content)

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
3. [Transfers and Restores](https://docs.cpanel.net/knowledge-base/transfers-and-restores/)
4. How to Manually Migrate Horde Data to Roundcube


[webmail](https://docs.cpanel.net/tags/webmail/) [horde](https://docs.cpanel.net/tags/horde/) [roundcube](https://docs.cpanel.net/tags/roundcube/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#overview)

* * *

[Migrate Horde calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#migrate-horde-calendars)

* * *

[Export calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-calendars)

* * *

[Import calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#import-calendars)

* * *

[Migrate Horde contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#migrate-horde-contacts)

* * *

[Export contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-contacts)

* * *

[Import contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#import-contacts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#overview)

* * *

[Migrate Horde calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#migrate-horde-calendars)

* * *

[Export calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-calendars)

* * *

[Import calendars](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#import-calendars)

* * *

[Migrate Horde contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#migrate-horde-contacts)

* * *

[Export contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-contacts)

* * *

[Import contacts](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#import-contacts)

* * *

## How to Manually Migrate Horde Data to Roundcube

_Valid for versions 108 through the latest version_

#### Version:

#### [108](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/)

Last modified: _2025 February 13_

* * *

## Overview

Warning:

This procedure is **only** valid for cPanel & WHM version 118 and earlier. We **removed** the [`/usr/local/cpanel/scripts/export_horde_calendars_to_ics`](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/) and [`/usr/local/cpanel/scripts/export_horde_contacts_to_vcf`](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script/) scripts in cPanel & WHM version 120. For more information, read the _Horde webmail interface_ section of our [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan) documentation.

This document describes how to manually migrate Horde calendars and contacts to Roundcube in cPanel & WHM version 108 and higher. The migration process consists of two steps:

1. Export the data from Horde.
2. Import the data into Roundcube.

In cPanel & WHM version 108, we [removed the Horde webmail client](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/#deprecated-and-removed-features). We also created a set of scripts and plugins to migrate Horde contacts and calendar data from Horde to Roundcube. The scripts run automatically when the server updates to cPanel & WHM version 108, and the plugins run automatically each time the user logs in to Roundcube.

Some Horde calendar events and contacts may not migrate automatically to Roundcube or appear correctly in the Roundcube interface. If this occurs, perform the steps in this document to manually migrate the calendars and contacts from Horde to Roundcube.

Note:

- Only the `root` user can run the scripts in this document.
- You can review the `$HOME/logs/.php.error.log` and `$HOME/logs/roundcube/errors.log` files for plugin errors, where `$HOME` is the user’s home directory.
- If the Horde contacts and calendars do not display correctly after you follow the steps in this document, open a ticket with [cPanel Support](https://tickets.cpanel.net/).

## Migrate Horde calendars

To migrate the Horde calendars, perform the following steps.

### Export calendars

To export the Horde calendars, perform the following steps:

1. Run the [`/usr/local/cpanel/scripts/export_horde_calendars_to_ics`](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script) script to export the Horde calendars to `.ics` files.
2. Copy the `.ics` files into the cPanel user’s `icals` directory in `$HOME/.cpanel/icals`, where `$HOME` is the user’s home directory. For example, if you exported the `cptest` user’s calendars to `/home/cptest/calendars`, run this command to copy the `.ics` files:



```bash
cp -a /home/cptest/calendars/*.ics /home/cptest/.cpanel/icals
```


### Import calendars

To import the Horde calendars, log in to Roundcube for each email account whose calendars you wish to import. The `cpanelicsimport` plugin automatically imports the calendars from the `$HOME/.cpanel/icals` directory into Roundcube, where `$HOME` is the user’s home directory.

The plugin imports all Horde calendar events into the default Roundcube calendar.

#### Import all calendar events

To import all Horde calendar events into a non-default Roundcube calendar, perform the following steps:

1. Download the `.ics` file you exported [in the previous step](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-calendars).
2. Log in to Roundcube for the email account whose calendar you wish to import into a different calendar.
3. Click the Calendar icon (![Calendar icon](https://docs.cpanel.net/img/roundcube-calendar-icon.png)).
4. Click _Import_ in the top panel.
5. In the _Calendar_ menu, select the calendar to import.
6. Select _All_ in the _Events from_ menu.
7. Select the `.ics` file you exported [in the previous step](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-calendars).
8. Click _Import_.

#### Move a single calendar event

To move a calendar event from the default calendar to a non-default calendar, perform the following steps:

1. Log in to Roundcube for the email account whose calendar you wish to import into a different calendar.
2. Click the Calendar icon (![Calendar icon](https://docs.cpanel.net/img/roundcube-calendar-icon.png)).
3. Enable both the default calendar and the target calendar.
4. Select the event you wish to move.
5. Click _Edit_.
6. In the _Calendar_ menu, select the target calendar.
7. Click _Save_.
8. Disable, then re-enable the target calendar.

The event will appear in the target calendar.

## Migrate Horde contacts

To migrate the Horde contacts, perform the following steps.

### Export contacts

To export the Horde contacts, perform the following steps:

1. Run the [`/usr/local/cpanel/scripts/export_horde_contacts_to_vcf`](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script) script to export the Horde contacts to `.vcf` files.

2. Copy the `.vcf` files into the cPanel user’s `vcards` directory in `$HOME/.cpanel/vcards`, where `$HOME` is the user’s home directory. For example, if you exported the `cptest` user’s calendars to `/home/cptest/contacts`, run this command to copy the `.vcf` files:




```bash
cp -a /home/cptest/contacts/*.vcf /home/cptest/.cpanel/vcards
```


### Import contacts

To import the Horde contacts, log in to Roundcube for each email account whose contacts you wish to import. The `cpanelvcfimport` plugin automatically imports the contacts from the `$HOME/.cpanel/vcards` directory into Roundcube, where `$HOME` is the user’s home directory.

The `cpanelvcfimport` plugin imports all Horde contacts into a single address book. To import Horde contacts into additional address books, perform the following steps:

1. Log in to Roundcube for the email account whose contacts you wish to import into additional address books.
2. Click the Contacts icon (![Contacts icon](https://docs.cpanel.net/img/roundcube-contacts-icon.png)).
3. Click _Import_ in the top panel.
4. In the _Import from file_ field, select the `.vcf` file you exported [in the previous step](https://docs.cpanel.net/knowledge-base/transfers-and-restores/how-to-manually-migrate-horde-data-to-roundcube/#export-contacts).
5. In the _Import group assignments_ field, select _All (create groups if necessary)_.
6. Click _Import_.

#### Additional Documentation

* * *

- [The Webmail Interface](https://docs.cpanel.net/webmail/the-webmail-interface/)
- [Webmail Clients](https://docs.cpanel.net/webmail/webmail-clients/)
- [BoxTrapper](https://docs.cpanel.net/cpanel/email/boxtrapper/)
- [The export\_horde\_calendars\_to\_ics Script](https://docs.cpanel.net/whm/scripts/the-export_horde_calendars_to_ics-script/)
- [The export\_horde\_contacts\_to\_vcf Script](https://docs.cpanel.net/whm/scripts/the-export_horde_contacts_to_vcf-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×