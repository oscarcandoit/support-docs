---
url: "https://docs.cpanel.net/whm/packages/feature-manager/110/"
title: "Feature Manager | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/whm/packages/feature-manager/110/#main-content)

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
3. [Packages](https://docs.cpanel.net/whm/packages/)
4. Feature Manager


[packages](https://docs.cpanel.net/tags/packages/) [feature-list](https://docs.cpanel.net/tags/feature-list/) [whmui](https://docs.cpanel.net/tags/whmui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/whm/packages/feature-manager/110/#overview)

* * *

[Predefined feature lists](https://docs.cpanel.net/whm/packages/feature-manager/110/#predefined-feature-lists)

* * *

[default](https://docs.cpanel.net/whm/packages/feature-manager/110/#default)

* * *

[Mail only](https://docs.cpanel.net/whm/packages/feature-manager/110/#mail-only)

* * *

[disabled](https://docs.cpanel.net/whm/packages/feature-manager/110/#disabled)

* * *

[Create and edit a feature list](https://docs.cpanel.net/whm/packages/feature-manager/110/#create-and-edit-a-feature-list)

* * *

[Delete a feature list](https://docs.cpanel.net/whm/packages/feature-manager/110/#delete-a-feature-list)

* * *

[Selectable features](https://docs.cpanel.net/whm/packages/feature-manager/110/#selectable-features)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/whm/packages/feature-manager/110/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/whm/packages/feature-manager/110/#overview)

* * *

[Predefined feature lists](https://docs.cpanel.net/whm/packages/feature-manager/110/#predefined-feature-lists)

* * *

[default](https://docs.cpanel.net/whm/packages/feature-manager/110/#default)

* * *

[Mail only](https://docs.cpanel.net/whm/packages/feature-manager/110/#mail-only)

* * *

[disabled](https://docs.cpanel.net/whm/packages/feature-manager/110/#disabled)

* * *

[Create and edit a feature list](https://docs.cpanel.net/whm/packages/feature-manager/110/#create-and-edit-a-feature-list)

* * *

[Delete a feature list](https://docs.cpanel.net/whm/packages/feature-manager/110/#delete-a-feature-list)

* * *

[Selectable features](https://docs.cpanel.net/whm/packages/feature-manager/110/#selectable-features)

* * *

## Feature Manager

![](https://docs.cpanel.net/img/whm-icons/feature_manager.svg)

_Valid for version 110_

#### Version:

#### [110](https://docs.cpanel.net/whm/packages/feature-manager/110/)

#### [112](https://docs.cpanel.net/whm/packages/feature-manager/112/)

#### [116](https://docs.cpanel.net/whm/packages/feature-manager/116/)

#### [118](https://docs.cpanel.net/whm/packages/feature-manager/118/)

#### [120](https://docs.cpanel.net/whm/packages/feature-manager/120/)

#### [124](https://docs.cpanel.net/whm/packages/feature-manager/124/)

#### [128](https://docs.cpanel.net/whm/packages/feature-manager/128/)

#### [132](https://docs.cpanel.net/whm/packages/feature-manager/)

Last modified: _2025 March 18_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface for resellers in WHM's [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM >> Home >> Resellers >> Edit Reseller Nameservers and Privileges_).

## Overview

This interface allows you to edit feature lists, which you can assign to packages that you apply to cPanel accounts. Feature lists provide or prevent access to specific cPanel features.

## Predefined feature lists

cPanel & WHM includes the _default_, _disabled_, and _Mail Only_ feature lists. These predefined feature lists determine which features are automatically assigned to new or existing feature lists.

### default

The system grants cPanel users access to the _default_ feature list’s selected features by default. If you disable a feature in this feature list, the system **disables** that feature by default for **all** users using the _default_ feature list. To override this configuration, create a new list and assign it to your cPanel users.

### Mail only

The _Mail Only_ feature list provides cPanel users access to only mail-related features, such as Email Archiving or Apache SpamAssassin™. If you are a reseller who **only** owns a mail server, use this feature list.

### disabled

Warning:

This predefined feature list is **not** intended for use with a cPanel account or a package. Instead, assign a cPanel account or package the _default_ feature list, but define the feature you do **not** want available on the server in the _disabled_ feature list.

The _disabled_ feature list serves as a list of features unavailable to all users and feature lists on your server. This feature list will also override any settings changed in other feature lists assigned to users.

## Create and edit a feature list

To create a new feature list or edit an existing feature list, perform the following steps:

1. Choose one of the following settings:
   - To create a new feature list, enter the desired feature list name in the _Add a new feature list_ text box and click _Add Feature List_.






     Note:





     Choose an easy-to-remember name so that you can properly assign it.

   - To edit a feature list that already exists, select the desired feature list from the _Manage feature list_ menu and then click Edit.
2. Select checkboxes to enable features, or deselect checkboxes to disable features.






Note:





To **disable** a feature in the _disabled_ feature list, select the feature’s checkbox.

3. Click _Save_.

## Delete a feature list

Note:

When you delete a feature list, the system assigns the _default_ feature list to deleted feature lists’ packages and accounts.

To remove an existing feature list, perform the following steps:

1. From the _Manage a feature list_ menu, select the feature list to remove.
2. Click _Delete_.

## Selectable features

Warning:

- This table lists the cPanel interfaces for the default cPanel theme (Jupiter). If you use another theme for the cPanel interface, these interfaces and locations may vary slightly.
- Various settings and customizations from other interfaces can **add** or **remove** features from this interface.
- Some cPanel features may require that you enable additional settings in order for them to function. Read each feature’s documentation for additional information.
- This interface displays a _Legacy_ label if the feature corresponds to a deprecated theme.
- This interface may display additional interfaces that third-party software or plugins provide.
- The following list may **not** be canonical for every server.

On most cPanel & WHM servers, you can select the following features:

| Feature | Description |
| --- | --- |
| _AccelerateWP_ | This feature **only** appears on servers that run the CloudLinux™ operating system. For more information, read CloudLinux’s [AccelerateWP](https://docs.cloudlinux.com/shared-pro/accelerate-wp/) documentation. |
| _Addon Domains_ | [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_). |
| _Address Importer_ | [_Address Importer_](https://docs.cpanel.net/cpanel/email/address-importer/) interface ( _cPanel » Home » Email » Address Importer_). |
| _Agora Shopping Cart_ | This feature is **deprecated**. |
| _Alias Domains_ | [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains_). |
| _Analog Stats_ | [_Analog Stats_](https://docs.cpanel.net/cpanel/metrics/analog-stats/) interface ( _cPanel » Home » Metrics » Analog Stats_). |
| _Apache Handlers_ | [_Apache Handlers_](https://docs.cpanel.net/cpanel/advanced/apache-handlers/) interface ( _cPanel » Home » Advanced » Apache Handlers_). |
| _Apache SpamAssassin™_ | [_Spam Filters_](https://docs.cpanel.net/cpanel/email/spam-filters/) interface ( _cPanel » Home » Email » Spam Filters_). |
| _Apache SpamAssassin™ Spam Box_ | Enables Apache SpamAssassin’s [_Spam Box_](https://docs.cpanel.net/cpanel/email/spam-filters/#move-new-spam-to-a-separate-folder-spam-box) feature. |
| _API Shell (for developers)_ | [_API Shell_](https://docs.cpanel.net/cpanel/advanced/api-shell-for-cpanel/) interface ( _cPanel » Home » Advanced » API Shell_). |
| _API Tokens_ | [_Manage API Tokens_](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel/) interface ( _cPanel » Home » Security » Manage API Tokens_). |
| _Application Manager_ | [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_). <br>Note:<br>To enable this interface, you must also install **one** of the following Apache modules: <br>- `ea-apache24-mod-passenger` \- Use this package if your system runs Ubuntu®.<br>- `ea-ruby24-mod_passenger` \- Use this package if your system runs CentOS 6 or CentOS 7.<br>- `ea-ruby27-mod_passenger` \- Use this package if your system runs CentOS 7, AlmaLinux OS 8, or Rocky Linux™ 8.<br>If needed, you should also install the following modules: <br>- `ea-apache24-mod_env` \- This module allows your application configuration to set environment variables for your application.<br>- One of the following modules that support Node.js™ applications:<br>  - `ea-nodejs16` — This is the only Node.js option for servers that run CentOS 7. <br>  - `ea-nodejs18`<br>  - `ea-nodejs20`<br>  - `ea-nodejs22`<br>Additionally, for Python WSGI applications, you must install Python and the pip application. |
| _Autoresponders_ | [_Autoresponders_](https://docs.cpanel.net/cpanel/email/autoresponders/) interface ( _cPanel » Home » Email » Autoresponders_). |
| _AutoSSL_ | Enables AutoSSL functionality. |
| _Awstats_ | [_Awstats_](https://docs.cpanel.net/cpanel/metrics/awstats/) interface ( _cPanel » Home » Metrics » Awstats_). |
| _Backup Manager_ | [_Backup_](https://docs.cpanel.net/cpanel/files/backup-for-cpanel/) interface ( _cPanel » Home » Files » Backup_). |
| _Bandwidth Stats_ | [_Bandwidth_](https://docs.cpanel.net/cpanel/metrics/bandwidth/) interface ( _cPanel » Home » Metrics » Bandwidth_). |
| _BoxTrapper_ | [_BoxTrapper_](https://docs.cpanel.net/cpanel/email/boxtrapper/) interface ( _cPanel » Home » Email » BoxTrapper_). |
| _Calendar Delegation_ | [_Calendar Delegation_](https://docs.cpanel.net/cpanel/email/calendar-delegation/) interface ( _cPanel » Home » Email » Calendar Delegation_). <br>Note:<br>You **must** install the [_Calendar and Contacts Server_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) plugin for this feature to appear. |
| _Calendars and Contacts_ | [_Calendars and Contacts_](https://docs.cpanel.net/knowledge-base/webmail/how-to-set-up-calendars-and-contacts/) interface ( _cPanel » Home » Email » Calendars and Contacts_). <br>Note:<br>You **must** install the [_Calendars and Contacts Server_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/) plugin for this interface to appear. |
| _Change Language_ | [_Change Language_](https://docs.cpanel.net/cpanel/preferences/change-language/) interface ( _cPanel » Home » Preferences » Change Language_). |
| _Change Style_ | _Change Style_ interface ( _cPanel » Home » Preferences » Change Style_). |
| _Configure Greylisting_ | [_Configure Greylisting_](https://docs.cpanel.net/cpanel/email/configure-greylisting/) interface ( _cPanel » Home » Email » Configure Greylisting_). <br>Note:<br>To enable this interface in cPanel, you **must** enable greylisting in WHM’s [Greylisting](https://docs.cpanel.net/whm/email/greylisting/) interface. |
| _Contact Information_ | [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_). <br>Note:<br>To disable this interface in cPanel, you must **also** disable the [_Update Notification Preferences_](https://docs.cpanel.net/whm/packages/feature-manager/110/#update-notification-preferences) setting. |
| _cPanel Market_ | Enables cPanel Market functionality. |
| _CPU and Concurrent Connection Usage_ | This feature is **deprecated**. <br>Note:<br>If your server runs the CloudLinux operating system, use CloudLinux’s [_Resource Usage_](https://docs.cloudlinux.com/lve_manager/#resource-usage-client-plugin) interface ( _cPanel » Home » Metrics » Resource Usage_) instead. |
| _Cron Jobs_ | [_Cron Jobs_](https://docs.cpanel.net/cpanel/advanced/cron-jobs/) interface ( _cPanel » Home » Advanced » Cron Jobs_). |
| _Default Address_ | [_Default Address_](https://docs.cpanel.net/cpanel/email/default-address/) interface ( _cPanel » Home » Email » Default Address_). |
| _Directory Privacy_ | [_Directory Privacy_](https://docs.cpanel.net/cpanel/files/directory-privacy/) interface ( _cPanel » Home » Files » Directory Privacy_). |
| _Directory Selection Popup_ | Directory-selection window when the user opens cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_). |
| _Disk Usage Viewer_ | [_Disk Usage_](https://docs.cpanel.net/cpanel/files/disk-usage/) interface ( _cPanel » Home » Files » Disk Usage_). |
| _Dynamic DNS_ | [_Dynamic DNS_](https://docs.cpanel.net/cpanel/domains/dynamic-dns/) interface ( _cPanel » Home » Domains » Dynamic DNS_). |
| _EA4 - Allow PHP #.#_ | Allow the account to use the indicated PHP version. <br>Note:<br>The interface **only** displays this feature for versions of PHP installed on the server. |
| _EA4 - Allow enabling/disabling NGINX caching (requires cPanel & WHM version 100 or later)_ | Allow the cPanel user account to enable or disable [NGINX®](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/#caching) caching. <br>Note:<br>The interface **only** displays this feature if you have installed the `ea-nginx` package on your server. |
| _Email Accounts_ | [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Email » Email Accounts_). |
| _Email Archiving_ | [_Archive_](https://docs.cpanel.net/cpanel/email/archive/) interface ( _cPanel » Home » Email » Archive_). |
| _Email Deliverability (Authentication)_ | [_Email Deliverability_](https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/) interface ( _cPanel » Home » Email » Email Deliverability_). |
| _Email Delivery Route (deprecated)_ | This feature is **deprecated**. Use the [_Track Delivery_](https://docs.cpanel.net/cpanel/email/track-delivery/) function instead. |
| _Email Disk Usage_ | [_Email Disk Usage_](https://docs.cpanel.net/cpanel/email/email-disk-usage/) interface ( _cPanel » Home » Email » Email Disk Usage_). |
| _Email Domain Forwarding_ | _Forward All Email for a Domain_ setting in the [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_). |
| _Email Filtering Manager_ | [_Email Filters_](https://docs.cpanel.net/cpanel/email/email-filters/) interface ( _cPanel » Home » Email » Email Filters_). |
| _Email Routing (MX Entry)_ | Enables cPanel’s [_Email Routing_](https://docs.cpanel.net/cpanel/email/email-routing/) interface ( _cPanel » Home » Email » Email Routing_) and allows users to view and edit MX records in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). |
| _Email Trace_ | [_Track Delivery_](https://docs.cpanel.net/cpanel/email/track-delivery/) interface ( _cPanel » Home » Email » Track Delivery_). |
| _Encryption (PGP/GPG)_ | Enables the [_Encryption_](https://docs.cpanel.net/cpanel/email/encryption/) interface ( _cPanel » Home » Email » Encryption_). |
| _Error Log_ | [_Errors_](https://docs.cpanel.net/cpanel/metrics/errors/) interface ( _cPanel » Home » Metrics » Errors_). |
| _Error Pages_ | [_Error Pages_](https://docs.cpanel.net/cpanel/advanced/error-pages/) interface ( _cPanel » Home » Advanced » Error Pages_). |
| _Exchange ActiveSync_ | Allow the account to use the [_Z-Push - ActiveSync Support_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/#z-push-activesync-support) plugin. <br>Note:<br>For the _Z-Push - ActiveSync Support_ plugin to work, you must also enable the _Calendars and Contacts_ feature. |
| _File and Directory Restoration_ | [_File and Directory Restoration_](https://docs.cpanel.net/cpanel/files/file-and-directory-restoration-for-cpanel/) interface ( _cPanel » Home » Files » File and Directory Restoration_). |
| _File Manager_ | [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_). |
| _Forwarder Manager_ | [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_). |
| _FTP Account Manager_ | [_FTP Accounts_](https://docs.cpanel.net/cpanel/files/ftp-accounts/) interface ( _cPanel » Home » Files » FTP Accounts_). <br>Note:<br>This feature **only** appears when you enable the FTP server in WHM’s [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection) interface ( _WHM » Home » Service Configuration » FTP Server Selection_). |
| _FTP Settings_ | Allows the user to manage FTP settings. <br>Note:<br>This feature **only** appears when you enable the FTP server in WHM’s [FTP Server Selection](https://docs.cpanel.net/whm/service-configuration/ftp-server-selection) interface ( _WHM » Home » Service Configuration » FTP Server Selection_). |
| _Git™ Version Control_ | [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control/) interface ( _cPanel » Home » Files » Git Version Control_). |
| _Hotlink Protection_ | [_Hotlink Protection_](https://docs.cpanel.net/cpanel/security/hotlink-protection/) interface ( _cPanel » Home » Security » Hotlink Protection_). |
| _Images_ | [_Images_](https://docs.cpanel.net/cpanel/files/images/) interface ( _cPanel » Home » Files » Images_). |
| _Imunify360_ | _Imunify360_ interface ( _cPanel » Home » Security » Imunify360_). <br>Note:<br>This feature **only** appears when you install the [Imunify360 plugin](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-an-imunify360-license/). |
| _Index Manager_ | [_Indexes_](https://docs.cpanel.net/cpanel/advanced/indexes/) interface ( _cPanel » Home » Advanced » Indexes_). |
| _IP Blocker_ | [_IP Blocker_](https://docs.cpanel.net/cpanel/security/ip-blocker/) interface ( _cPanel » Home » Security » IP Blocker_). |
| _Latest Visitors_ | [_Visitors_](https://docs.cpanel.net/cpanel/metrics/visitors/) interface ( _cPanel » Home » Metrics » Visitors_). |
| _Leech Protect (requires Directory Privacy)_ | [_Leech Protection_](https://docs.cpanel.net/cpanel/security/leech-protection/) interface ( _cPanel » Home » Security » Leech Protection_). |
| _Mailing Lists_ | [_Mailing Lists_](https://docs.cpanel.net/cpanel/email/mailing-lists/) interface ( _cPanel » Home » Email » Mailing Lists_). |
| _Manage DNSSEC_ | _DNSSEC_ settings in the [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor)_. |
| _Manage Team_ | [_Manage Team_](https://docs.cpanel.net/cpanel/preferences/manage-team/) interface ( _cPanel » Home » Preferences » Manage Team_). <br>Experimental:<br>_Manage Team_ is an experimental feature. We do **not** recommend using this feature in production environments. It is currently under development and is **only** available to a limited number of cPanel & WHM customers. It will be available for testing in future releases. For more information about the development of _Manage Team_, read our [Manage Team roadmap](https://docs.cpanel.net/knowledge-base/roadmaps/manage-team-roadmap). |
| _Metrics Editor_ | [_Metrics Editor_](https://docs.cpanel.net/cpanel/metrics/metrics-editor/) interface ( _cPanel » Home » Metrics » Metrics Editor_). |
| _MIME Types_ | [_MIME Types_](https://docs.cpanel.net/cpanel/advanced/mime-types/) interface ( _cPanel » Home » Advanced » MIME Types_). |
| _ModSecurity® Domain Manager_ | [_ModSecurity®_](https://docs.cpanel.net/cpanel/security/modsecurity/) interface ( _cPanel » Home » Security » ModSecurity_). |
| _MultiPHP INI Editor_ | [_MultiPHP INI Editor_](https://docs.cpanel.net/cpanel/software/multiphp-ini-editor-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP INI Manager_). |
| _MultiPHP Manager_ | [_MultiPHP Manager_](https://docs.cpanel.net/cpanel/software/multiphp-manager-for-cpanel/) interface ( _cPanel » Home » Software » MultiPHP Manager_). |
| _MySQL_ | Enables MySQL® for the user. |
| _Optimize Website_ | [_Optimize Website_](https://docs.cpanel.net/cpanel/software/optimize-website/) interface ( _cPanel » Home » Software » Optimize Website_). |
| _Password & Security_ | [_Password & Security_](https://docs.cpanel.net/cpanel/preferences/password-and-security/) interface ( _cPanel » Home » Preferences » Password & Security_). |
| _Perl Modules_ | [_Perl Modules_](https://docs.cpanel.net/cpanel/software/perl-modules/) interface ( _cPanel » Home » Software » Perl Modules_). |
| _PHP Pear Packages_ | [_PHP PEAR Packages_](https://docs.cpanel.net/cpanel/software/php-pear-packages/) interface ( _cPanel » Home » Software » PHP PEAR Packages_). |
| _PhpMyAdmin_ | Enables the [_phpMyAdmin_](https://docs.cpanel.net/cpanel/databases/phpmyadmin/) interface. |
| _PhpPgAdmin_ | Enables the [_phpPgAdmin_](https://docs.cpanel.net/cpanel/databases/phppgadmin/) interface. <br>Note:<br>This interface **only** appears if you have installed PostgreSQL®. |
| _PostgreSQL_ | Enables PostgreSQL® for the user. <br>Note:<br>This feature **only** appears if you have installed PostgreSQL®. |
| _Raw Access Logs_ | [_Raw Access_](https://docs.cpanel.net/cpanel/metrics/raw-access/) interface ( _cPanel » Home » Metrics » Raw Access_). |
| _Redirects_ | [_Redirects_](https://docs.cpanel.net/cpanel/domains/redirects/) interface ( _cPanel » Home » Domains » Redirects_). |
| _Resource Usage_ | [_Resource Usage_](https://docs.cloudlinux.com/lve_manager/#resource-usage-client-plugin) interface ( _cPanel » Home » Metrics » Resource Usage_). <br>Note:<br>This feature **only** appears on servers that run the CloudLinux operating system and the [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/) plugin. |
| _Ruby on Rails_ | Enables [_Ruby on Rails®_](https://docs.cpanel.net/cpanel/software/ruby-on-rails/). This feature is **deprecated**. Use the [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) instead. |
| _RubyGems_ | [_RubyGems_](https://docs.cpanel.net/cpanel/software/rubygems/) interface ( _cPanel » Home » Software » RubyGems_). This feature is **deprecated**. Use the [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager/) interface ( _cPanel » Home » Software » Application Manager_) instead. |
| _See PHP Configuration_ | This feature is **deprecated**. |
| _Select PHP Version_ | [_Select PHP Version_](https://docs.cloudlinux.com/lve_manager/?#php-selector-client-plugin) interface ( _cPanel » Home » Software » Select PHP Version_). <br>Note:<br>This feature **only** appears on servers that run the CloudLinux operating system and the [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/) plugin. |
| _Server Status Viewer_ | _Service Information_ information in cPanel’s [_Server Information_](https://docs.cpanel.net/cpanel/the-cpanel-interface/server-information-for-cpanel/) interface. |
| _Setup Node.js App_ | [_Setup Node.js App_](https://docs.cloudlinux.com/lve_manager/?#node-js-selector-client-plugin) interface ( _cPanel » Home » Software » Setup Node.js App_). <br>Note:<br>This feature **only** appears on servers that run the CloudLinux operating system and the [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/) plugin. |
| _Setup Python App_ | [_Setup Python App_](https://docs.cloudlinux.com/lve_manager/?#python-selector-client-plugin) interface ( _cPanel » Home » Software » Setup Python App_). <br>Note:<br>This feature **only** appears on servers that run the CloudLinux operating system and the [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/) plugin. |
| _Setup Ruby App_ | [_Setup Ruby App_](https://docs.cloudlinux.com/lve_manager/?#ruby-selector-client-plugin) interface ( _cPanel » Home » Software » Setup Ruby App_). <br>Note:<br>This feature **only** appears on servers that run the CloudLinux operating system and the [_CloudLinux Manager_](https://docs.cpanel.net/whm/server-configuration/cloudlinux-manager/) plugin. |
| _Site Publisher_ | [_Site Publisher_](https://docs.cpanel.net/cpanel/domains/site-publisher/) interface ( _cPanel » Home » Domains » Site Publisher_). |
| _Site Software_ | [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface ( _cPanel » Home » Software » Site Software_). This feature is **deprecated**. Install WHMCS [manually](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/#install-whmcs-manually), or install WP Toolkit with one of our [supported methods](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/#install-wp-toolkit). <br>Note:<br>This feature does **not** appear on servers running the Ubuntu operating system. |
| _Sitejet Builder_ | [_Sitejet Builder_](https://docs.cpanel.net/cpanel/domains/sitejet-builder/) interface ( _cPanel » Home » Domains » Sitejet Builder_). |
| _SSH Access & Terminal_ | [_SSH Access_](https://docs.cpanel.net/cpanel/security/ssh-access/) interface ( _cPanel » Home » Security » SSH Access_) and [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel/) interface ( _cPanel » Home » Advanced » Terminal_). |
| _SSL Host Installer_ | Enables SSL certificate installation. |
| _SSL/TLS_ | [_SSL/TLS_](https://docs.cpanel.net/cpanel/security/ssl-tls/) interface ( _cPanel » Home » Security » SSL/TLS_). |
| _SSL/TLS Wizard_ | [_SSL/TLS Wizard_](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/) interface ( _cPanel » Home » Security » SSL/TLS Wizard_). |
| _Subdomain Stats_ | Enables statistics for subdomains. |
| _Subdomains_ | [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_). |
| _Theme Switching_ | _Theme_ menu in the _General Information_ section of cPanel’s _Home_ interface. |
| _Track DNS_ | [_Track DNS_](https://docs.cpanel.net/cpanel/advanced/track-dns/) interface ( _cPanel » Home » Advanced » Track DNS_). |
| _Two-Factor Authentication (Google Authenticator)_ | [_Two-Factor Authentication_](https://docs.cpanel.net/cpanel/security/two-factor-authentication-for-cpanel/) interface ( _cPanel » Home » Security » Two-Factor Authentication_). <br>Note:<br>This interface **only** appears if you have enabled two-factor authentication in WHM’s [_Two-Factor Authentication_](https://docs.cpanel.net/whm/security-center/two-factor-authentication-for-whm/) interface ( _WHM » Home » Security Center » Two-Factor Authentication_). |
| _Update Notification Preferences_ | Enables notification preference settings in the [_Contact Information_](https://docs.cpanel.net/cpanel/preferences/contact-information/) interface ( _cPanel » Home » Preferences » Contact Information_). |
| _User Manager_ | [User Manager](https://docs.cpanel.net/cpanel/preferences/user-manager/) interface ( _cPanel » Home » Preferences » User Manager_). |
| _Virus Scanner_<br>_Virus Scanning_ | Enables ClamAV virus scans. <br>Note:<br>- The name of this feature may vary depending on your server’s operating system.<br>- This feature **only** appears if you have installed the [_ClamAV for cPanel_](https://docs.cpanel.net/whm/plugins/configure-clamav-scanner/) plugin in WHM’s [_Manage Plugins_](https://docs.cpanel.net/whm/cpanel/manage-plugins/) interface ( _Home » cPanel » Manage Plugins_). |
| _Web Disk_ | [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk/) interface ( _cPanel » Home » Files » Web Disk_). |
| _Webalizer_ | [_Webalizer_](https://docs.cpanel.net/cpanel/metrics/webalizer/) interface ( _cPanel » Home » Metrics » Webalizer_). |
| _Webmail_ | _Webmail_ feature in the [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Email » Email Accounts_). |
| _WHMCS (cPanel)_ | The [WHMCS](https://docs.cpanel.net/knowledge-base/third-party/how-to-purchase-and-install-whmcs/) cPAddon in cPanel’s [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface ( _cPanel » Home » Software » Site Software_). <br>Note:<br>This feature **only** appears if you have installed the WHMCS cPAddon in WHM’s [_Install cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/) interface ( _WHM » Home » cPanel » Install cPAddons Site Software_). |
| _WordPress (cPanel)_ | The _WordPress®_ cPAddon in cPanel’s [_Site Software_](https://docs.cpanel.net/cpanel/software/site-software/) interface ( _cPanel » Home » Software » Site Software_). <br>Note:<br>This feature **only** appears if you have installed the WordPress cPAddon in WHM’s [_Install cPAddons Site Software_](https://docs.cpanel.net/whm/cpanel/install-cpaddons-site-software/) interface ( _WHM » Home » cPanel » Install cPAddons Site Software_). |
| _WP Toolkit_ | [_WP Toolkit_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/) interface ( _cPanel » Home » Domains » WP Toolkit_). |
| _WP Toolkit Deluxe_ | [_WP Toolkit_](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/wp-toolkit/) interface ( _cPanel » Home » Domains » WP Toolkit_). |
| _Zone Editor (A, CNAME, MX)_ | Enables cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_) and allows cPanel account users to create A and CNAME records. <br>Note:<br>This feature **only** applies to A, CNAME, and MX records that the cPanel account user created. To allow cPanel account users to view the system’s default A, CNAME, and MX records, enable the Zone Editor (AAAA, CAA, DMARC, SRV, TXT) feature. |
| _Zone Editor (AAAA, CAA, DMARC, SRV, TXT)_ | Allows cPanel account users to create AAAA, CAA, DMARC, SRV, and TXT records in cPanel’s [_Zone Editor_](https://docs.cpanel.net/cpanel/domains/zone-editor/) interface ( _cPanel » Home » Domains » Zone Editor_). This feature also controls whether a cPanel account user can view the existing default A, MX, and CNAME records. <br>Note:<br>To allow cPanel account users to view these records, you **must** enable this feature. |

#### Additional Documentation

* * *

- [Add a Package](https://docs.cpanel.net/whm/packages/add-a-package/)
- [Delete a Package](https://docs.cpanel.net/whm/packages/delete-a-package/)
- [Edit a Package](https://docs.cpanel.net/whm/packages/edit-a-package/)
- [Feature Manager](https://docs.cpanel.net/whm/packages/feature-manager/)
- [Modify/Upgrade Multiple Accounts](https://docs.cpanel.net/whm/multi-account-functions/modify-upgrade-multiple-accounts/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×