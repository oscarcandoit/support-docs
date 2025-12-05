---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/"
title: "Best Practices for cPanel Virtualization Templates | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. Best Practices for cPanel Virtualization Templates


[virtualization](https://docs.cpanel.net/tags/virtualization/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#overview)

* * *

[Create a minimal installation for templating](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#create-a-minimal-installation-for-templating)

* * *

[Pre-installation configuration files](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#pre-installation-configuration-files)

* * *

[cPanel & WHM installation](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#cpanel--whm-installation)

* * *

[Post-installation tasks](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#post-installation-tasks)

* * *

[Configure your template](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#configure-your-template)

* * *

[Deployment tasks](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#deployment-tasks)

* * *

[Updating your templates over time](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#updating-your-templates-over-time)

* * *

[Common OpenVZ and Virtuozzo issues](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#common-openvz-and-virtuozzo-issues)

* * *

[Hostnames](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#hostnames)

* * *

[Quotas](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#quotas)

* * *

[Jailshell](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#jailshell)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#overview)

* * *

[Create a minimal installation for templating](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#create-a-minimal-installation-for-templating)

* * *

[Pre-installation configuration files](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#pre-installation-configuration-files)

* * *

[cPanel & WHM installation](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#cpanel--whm-installation)

* * *

[Post-installation tasks](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#post-installation-tasks)

* * *

[Configure your template](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#configure-your-template)

* * *

[Deployment tasks](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#deployment-tasks)

* * *

[Updating your templates over time](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#updating-your-templates-over-time)

* * *

[Common OpenVZ and Virtuozzo issues](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#common-openvz-and-virtuozzo-issues)

* * *

[Hostnames](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#hostnames)

* * *

[Quotas](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#quotas)

* * *

[Jailshell](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#jailshell)

* * *

## Best Practices for cPanel Virtualization Templates

_Valid for versions 106 through the latest version_

#### Version:

#### [106](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)

Last modified: _2024 February 22_

* * *

## Overview

While we recommend and support the use of the usual cPanel & WHM installation process, it may require more time than is necessary for Virtual Private Server (VPS) and Virtual Machine (VM) hosts. Instead, you can provision VPS or VM systems with a templated cPanel & WHM environment.

Note:

If you offer template installations of cPanel & WHM, we recommend that you become a cPanel Partner.

- cPanel Partners can use our API to automatically provision their own cPanel & WHM, CloudLinux™, and KernelCare licenses through their billing system.
- cPanel Partners can also enable or disable some very specific options within WHM.
- For more information, see our [Partner NOC requirements](https://cpanel.net/partners/).

## Create a minimal installation for templating

When you create **templates**, we recommend:

- Creating only 64-bit templates. cPanel & WHM does **not** support 32-bit systems.

- Keeping templates small (virtual disks of 20 GB or greater). After you convert the template for a customer’s VPS, you can use your virtualization software to automatically expand its virtual disk capacity.


### Pre-installation configuration files

More:

- We provide extensive documentation on preconfiguring cPanel & WHM. For more information, read our [Installation Guide](https://docs.cpanel.net/installation-guide).
- In most cases, preconfiguring these files removes the need to log in to the VPS or VM before you grant access to your customer.

We recommend that you customize the following files:

##### Update configuration settings — `/etc/cpupdate.conf`

This file allows you to configure cPanel & WHM’s release tier and other update settings.

- Users can change these settings within WHM at any time. Most of these settings appear in WHM’s [_Update Preferences_](https://docs.cpanel.net/whm/server-configuration/update-preferences/) interface ( _WHM » Home » Server Configuration » Update Preferences_).
- You **cannot** downgrade major versions, and you cannot change a server’s release tier to circumvent this restriction.
- For more information, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process) and [The cPanel & WHM Update Configuration File — cpupdate.conf](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-update-configuration-file-cpupdate-conf) documentation.

##### Update download location settings — `/etc/cpsources.conf`

This file determines the locations that your server downloads updates from.

- By default, cPanel & WHM servers retrieve updates directly from WebPros International, LLC through our `httpupdate.cpanel.net` pool of update servers.
- If you are a cPanel Partner with your own FastUpdate server, you can edit the `HTTPUPDATE` setting to only update from that FastUpdate server:



```perl
HTTPUPDATE=fastupdate.example.com
```

- For more information, read our [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/) documentation.

##### Basic server settings — `/etc/wwwacct.conf`

This file contains basic server information for cPanel & WHM, including the IP address, nameservers, and home directory.

- This includes most of the settings that appear in WHM’s [_Basic WebHost Manager Setup_](https://docs.cpanel.net/whm/server-configuration/basic-webhost-manager-setup/) interface ( _WHM » Home » Server Configuration » Basic WebHost Manager® Setup_).
- For more information, read our [Customize Your Installation](https://docs.cpanel.net/installation-guide/customize-your-installation/) documentation.

##### cPanel & WHM configuration settings — `/var/cpanel/cpanel.config`

This file contains extensive configuration options for cPanel & WHM.

- This includes most of the settings that appear in WHM’s [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings_) as well as other settings throughout cPanel & WHM.
- For more information, read our [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file) documentation.

### cPanel & WHM installation

After you finish preconfiguring your installation, you can install cPanel & WHM. For more information, read our [Installation Guide](https://docs.cpanel.net/installation-guide).

### Post-installation tasks

After you have successfully installed cPanel & WHM, you can set new defaults. You can also secure SSH or update your security configuration.

Note:

Do **not** shut down the VM to create the template until after you perform these steps.

#### Prevent locked licenses

To ensure that WebPros International, LLC **doesn’t** lock your development license, we **strongly** recommend that you create your template on an unlicensed IP address. This will ensure that WebPros International, LLC doesn’t lock your license or licenses.

To prevent instances created from your template from sharing the same credentials, you **must** run the following snapshot preparation script:

Warning:

This script destroys some configuration and user data. **Never** use this script on an active production server with customer data.

```perl
/usr/local/cpanel/scripts/snapshot_prep --yes
```

After running the script, review the output. Check for the following items:

- There are no failed tasks
- The last line of the output reads `System is ready for snapshotting`.

If this is the case, you can safely create an image.

If you choose to create your template on a licensed IP address, we **strongly** recommend creating one VM per template and maintaining it. This will prevent WebPros International, LLC from locking your license.

#### Remove copied files

The [`snapshot_prep` script](https://docs.cpanel.net/whm/scripts/the-snapshot_prep-script) saves copies of some configuration files on your server. You can use these copies to restore lost data if you accidentally run the `snapshot_prep` script on an active production server.

If the copies remain on your server, they will also exist on any images created from the server. To delete the copies before creating an image, run the following script:

```perl
/usr/local/cpanel/scripts/snapshot_prep --delete-saved-copies
```

If the script succeeds, the output reads `Deleted saved copies of configuration files`.

## Configure your template

Your templates **must** meet, and we recommend that they exceed, our [system requirements](https://docs.cpanel.net/installation-guide). Most providers offer a few different templates.

Note:

Each VPS or VM needs a swap file or partition. Partitions must have **at least** 256 MB.

### Deployment tasks

When you deploy the customer’s VPS, you **must** automatically update some files. The `snapshot_prep` and `post_snapshot` scripts only configure cPanel & WHM on your VM. We strongly recommend that you use a separate utility to configure the rest of your VM.

- If you use the `libguestfs virt-sysprep` command, you can do this via the `--firstboot` or `--firstboot-command` options.






Warning:





If you use a tool such as `libguestfs virt-sysprep` to help finalize your template, ensure that you do not accidentally remove any user accounts or cron jobs.

- If you do **not** use the `libguestfs` command, consult your hypervisor’s documentation for an alternative option to run scripts or commands upon first boot.

## Updating your templates over time

As WebPros International, LLC releases updates, you will need to update your templates. We recommend that you plan regular updates for all of your templates.

To run a cPanel & WHM update on your template, run the following commands:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>yum update -y<br>/scripts/upcp<br>``` |

Important:

Before you shut down the VM or VPS to recreate the template, run the same commands from the [Prevent locked licenses](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/#prevent-locked-licenses) section above.

## Common OpenVZ and Virtuozzo issues

You may experience some common issues when you use OpenVZ or Virtuozzo.

### Hostnames

On some [supported operating systems](https://docs.cpanel.net/knowledge-base/third-party/third-party-software-end-of-life-policy/#how-long-will-cpanel-support-my-chosen-operating-system), your server’s hostname may not meet the requirement for a [Fully Qualified Domain Name (FQDN)](https://en.wikipedia.org/wiki/Fully_qualified_domain_name).

- Virtuozzo controls the hostname via the VPS configuration (the `--hostname` option for the `vzctl` or `prlctl` commands).
- If you set the hostname manually, Virtuozzo will reset the hostname on the next reboot. Make sure to set up the full hostname correctly after you provision the VM. cPanel & WHM **requires** an FQDN.

### Quotas

OpenVZ and Virtuozzo **require** you to enable second-level quotas, which can cause quota-initiation issues. For more information, read:

- Our [Initial Quota Setup](https://docs.cpanel.net/whm/server-configuration/initial-quota-setup) documentation.
- [OpenVZ’s cPanel Quotas](https://wiki.openvz.org/Cpanel_quotas) documentation.
- [Virtuozzo’s Managing Disk Quotas](https://docs.virtuozzo.com/virtuozzo_hybrid_server_7_users_guide/managing-resources/managing-disk-quotas.html) documentation.

### Jailshell

Jailshell requires specific steps to enable a full `proc` mount. For more information, read our [How to Troubleshoot Jailshell Problems on a Virtuozzo or OpenVZ VPS](https://docs.cpanel.net/knowledge-base/security/how-to-troubleshoot-jailshell-problems-on-a-virtuozzo-or-openvz-vps/) documentation.

#### Additional Documentation

* * *

- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [Service Proxying](https://docs.cpanel.net/knowledge-base/general-systems-administration/service-proxying/)
- [Supported MySQL/MariaDB Versions](https://docs.cpanel.net/knowledge-base/general-systems-administration/supported-mysql-mariadb-versions/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×