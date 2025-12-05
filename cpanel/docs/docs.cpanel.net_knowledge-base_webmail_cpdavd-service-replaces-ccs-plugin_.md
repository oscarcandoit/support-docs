---
url: "https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/"
title: "cpdavd Service Replaces CCS Plugin | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#main-content)

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
3. [Webmail](https://docs.cpanel.net/knowledge-base/webmail/)
4. cpdavd Service Replaces CCS Plugin


[webmail](https://docs.cpanel.net/tags/webmail/) [dav](https://docs.cpanel.net/tags/dav/) [calendar](https://docs.cpanel.net/tags/calendar/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#overview)

* * *

[Migration process](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#migration-process)

* * *

[Notification email](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#notification-email)

* * *

[Data locations](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#data-locations)

* * *

[Additional components](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#additional-components)

* * *

[Service subdomains and autodiscover](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#service-subdomains-and-autodiscover)

* * *

[Access collections in CalDAV or CardDAV applications](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#access-collections-in-caldav-or-carddav-applications)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#overview)

* * *

[Migration process](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#migration-process)

* * *

[Notification email](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#notification-email)

* * *

[Data locations](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#data-locations)

* * *

[Additional components](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#additional-components)

* * *

[Service subdomains and autodiscover](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#service-subdomains-and-autodiscover)

* * *

[Access collections in CalDAV or CardDAV applications](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#access-collections-in-caldav-or-carddav-applications)

* * *

## cpdavd Service Replaces CCS Plugin

Last modified: _2025 February 4_

* * *

## Overview

In cPanel & WHM version 120, we deprecated and removed the [Calendar and Contacts Server (CCS)](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) plugin. We also added support for CalDAV (calendars) and CardDAV (contacts) to the [`cpdavd` service](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#cpdavd).

In cPanel & WHM version 120 and later, the `cpdavd` service allows your users to manage their calendars and contacts accounts on your cPanel & WHM server. Users can share their calendars, contacts, and task lists (known as [collections](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#collection)) with other Webmail users. Users can also create event invitations and [access collections in CalDAV or CardDAV applications](https://docs.cpanel.net/knowledge-base/webmail/cpdavd-service-replaces-ccs-plugin/#access-collections-in-caldav-or-carddav-applications).

## Migration process

When your server updates from cPanel & WHM version 118 or earlier, the system removes the CCS plugin and automatically migrates all CCS data to a format compatible with the `cpdavd` service. The system creates the `/var/cpanel/migrate_ccs_to_cpdavd.done` touch file once the migration is complete.

Important:

- If your server previously ran CCS, your users **must** reconfigure their calendars and contacts applications. This is so they can access their CalDAV and CardDAV data in the new format. To reconfigure their applications, they **must** delete, then re-add, the accounts in the applications. For more information, read our [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) documentation.
- Do **not** transfer accounts with calendars, contacts, or task list data from a server that runs cPanel & WHM version 120 or later to a server that runs cPanel & WHM version 118 or earlier. If you do this, you will need to manually copy and import the accounts’ calendars, contacts, and task list data once the transfer has completed.

### Notification email

After the system updates to cPanel & WHM version 120 or later, the Feature Showcase will show the option to send a notification email to all email accounts with CCS data. This email will tell them to reconfigure their calendars and contacts applications.

If you want to send the email at a different time that you choose, decline the option, then run the `/usr/local/cpanel/bin/servers_queue` script for the `reconfigure_calendars_notification` task. For example:

```bash
/usr/local/cpanel/bin/servers_queue schedule 10800 reconfigure_calendars_notification
```

For more information, read our [The servers\_queue Script](https://docs.cpanel.net/whm/scripts/the-servers-queue-script/) documentation.

## Data locations

The migration process converts your server’s CCS data from a PostgreSQL database format into `.ics` files for calendar and task list data and `.vcf` files for contacts data. The system stores the calendar, contacts, and task list files for each user in a directory in the `/home/user/.caldav/webmail_user/` directory. The directory name matches the collection type and starts with either `calendar`, `addressbook` or `tasks`.

The process also creates the `/home/user/.caldav/webmail_user/.metadata` file, which contains the information on each collection, including the display name, description, and type of collection.

Note:

- In the above file path examples, `user` is the cPanel username and `webmail_user` is the Webmail user.
- During the migration process, if the system cannot map a record to an existing user, it saves the data in the `/var/cpanel/saved_dav` directory.

## Additional components

The `cpdavd` service includes the following additional components:

- cPanel’s [_Calendars and Contacts Sharing_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/) interface ( _cPanel » Home » Email » Calendars and Contacts Sharing_) and [_Calendars and Contacts Management_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/) interface ( _cPanel » Home » Email » Calendars and Contacts Management_).

  - These interfaces are also available in the [Webmail interface](https://docs.cpanel.net/webmail/the-webmail-interface/).
- The _Max upload size for CalDAV/CardDAV server_ setting in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_).
- The DAV debug, error, and I/O [log files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#cpanel--whm-services-files).

### Service subdomains and autodiscover

The `cpdavd` service works best with [service subdomains](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-and-proxy-subdomains) and [autodiscover](https://docs.cpanel.net/knowledge-base/email/autoconfig-and-autodiscover/) enabled. When your server upgrades to cPanel & WHM version 120 or later, the Feature Showcase will show the option to enable the _Service Subdomains_ and _Thunderbird and Outlook autodiscover and autoconfig support_ settings in WHM’s [Tweak Settings](https://docs.cpanel.net/whm/server-configuration/tweak-settings/#domains) interface ( _WHM » Home » Server Configuration » Tweak Settings_). We **strongly** recommend that you enable these settings.

## Access collections in CalDAV or CardDAV applications

Your users can access their collections in Roundcube or other CalDAV or CardDAV applications. For more information, read our [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) documentation.

If your users create local collections in Roundcube or other CalDAV or CardDAV applications, they may experience issues with synchronizing their data. We **strongly** recommend that your users **only** add or delete collections in one of the following interfaces:

- cPanel’s [_Calendars and Contacts Management_](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/) interface ( _cPanel » Home » Email » Calendars and Contacts Management_)
- Webmail’s _Calendars and Contacts Management_ interface ( _Webmail » Calendars and Contacts Management_)

#### Additional Documentation

* * *

- [Calendar and Contacts Server](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/)
- [Calendar Delegation](https://docs.cpanel.net/cpanel/email/calendar-delegation/)
- [Calendars and Contacts Management](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-management/)
- [Calendars and Contacts Sharing](https://docs.cpanel.net/cpanel/email/calendars-and-contacts-sharing/)
- [How to Set Up Calendars and Contacts](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×