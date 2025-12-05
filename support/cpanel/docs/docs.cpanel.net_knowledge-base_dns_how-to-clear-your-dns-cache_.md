---
url: "https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/"
title: "How to Clear Your DNS Cache | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#main-content)

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
3. [DNS](https://docs.cpanel.net/knowledge-base/dns/)
4. How to Clear Your DNS Cache


[dns](https://docs.cpanel.net/tags/dns/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#overview)

* * *

[How to clear your DNS cache](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#how-to-clear-your-dns-cache)

* * *

[Windows®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#windows)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#macos)

* * *

[ChromeOS](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#chromeos)

* * *

[Ubuntu®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#ubuntu)

* * *

[Non-Ubuntu Linux®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#non-ubuntu-linux)

* * *

[How to edit your /etc/hosts file](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#how-to-edit-your-etchosts-file)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#overview)

* * *

[How to clear your DNS cache](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#how-to-clear-your-dns-cache)

* * *

[Windows®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#windows)

* * *

[macOS®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#macos)

* * *

[ChromeOS](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#chromeos)

* * *

[Ubuntu®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#ubuntu)

* * *

[Non-Ubuntu Linux®](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#non-ubuntu-linux)

* * *

[How to edit your /etc/hosts file](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#how-to-edit-your-etchosts-file)

* * *

## How to Clear Your DNS Cache

Last modified: _2024 September 19_

* * *

## Overview

Your DNS cache stores the locations (IP addresses) of web servers that contain web pages which you have recently viewed. If the IP address of a web server that stores a web page changes, you will not be able to access that web page again until your DNS cache updates.

Your DNS cache updates automatically. However, if you encounter a large number of [HTML 404 error codes](https://docs.cpanel.net/knowledge-base/web-services/http-error-codes-and-quick-fixes/), you may need to clear your DNS cache manually. After you clear your DNS cache, your computer will automatically query all new [nameservers](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver) you interact with for the IP addresses of their web servers, then cache the new information.

## How to clear your DNS cache

### Windows®

To clear your DNS cache if you use Windows, perform the following steps:

1. Click _Start_ or the _Windows_ icon.
2. In the search text box, enter `cmd`.
3. Right-click _Command Prompt_ and select _Run as Administrator_.
4. Run the following command:


```perl
ipconfig /flushdns
```


If the command succeeds, the system returns the following message:

```perl
Windows IP configuration successfully flushed the DNS Resolver Cache.
```

For more information about the `ipconfig` command, read Microsoft’s [`ipconfig`](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/ipconfig) documentation.

### macOS®

To clear your DNS cache if you use macOS X version 10.10.4 or above, perform the following steps:

Warning:

To run this command, you **must** know the computer’s administrator account password.

1. Click _Applications_.
2. Click _Utilities_.
3. Click _Terminal_.
4. Run the following command:



```perl
sudo killall -HUP mDNSResponder
```


If the command succeeds, the system does **not** return any output.

### ChromeOS

To clear your DNS cache if you use ChromeOS, perform the following steps:

1. Open a new Chrome tab.
2. Enter the following address:



```perl
chrome://net-internals
```

3. Hit the _Enter_ key.
4. From the menu, select _DNS_.
5. Click the _Clear host cache_ button.

If the command succeeds, the system will perform any DNS lookups again.

### Ubuntu®

To clear your DNS cache if you use Ubuntu, run the following command:

```perl
sudo resolvectl flush-caches
```

If the command succeeds, it will return results with an empty cache.

### Non-Ubuntu Linux®

To clear your DNS cache if you use a Linux-based operating system that is not Ubuntu (for example, CloudLinux™ or AlmaLinux OS), run the following command:

```perl
systemctl restart nscd
```

If the command succeeds, the system does **not** return any output.

## How to edit your /etc/hosts file

Some server development environments, like [MAMP](https://www.mamp.info/en/mac/), can cause DNS conflicts by **preventing** you from clearing addresses in your operating system’s `/etc/hosts` file. If you experience a DNS caching error while using one of these environments, you **must** delete the conflicting IP address’ line from your `/etc/hosts` file manually.

To manually edit your `/etc/hosts` file, perform the following steps:

Note:

- If you are using Windows, you **must** perform these steps with administrator privileges.
- If you are using macOS, you **must** know the computer’s administrator account password.

1. Open the `/etc/hosts` file with your preferred text editor. Your file will resemble the following example, where `192.0.2.0` is the IP address your system tries to access when you type `example.com` into your web browser’s address bar:



```perl
10.0.0.0 localhost
192.0.2.0 example.com
8.8.8.8 google.com
```

2. Delete the lines that contain outdated or malfunctioning IP addresses.

3. Save the file.

4. Clear the [DNS cache](https://docs.cpanel.net/knowledge-base/dns/how-to-clear-your-dns-cache/#how-to-clear-your-dns-cache) to apply the changes.


#### Additional Documentation

* * *

- [Add a DNS Zone](https://docs.cpanel.net/whm/dns-functions/add-a-dns-zone/)
- [Add an A Entry for Your Hostname](https://docs.cpanel.net/whm/dns-functions/add-an-a-entry-for-your-hostname/)
- [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster/)
- [DNS Zone Manager](https://docs.cpanel.net/whm/dns-functions/dns-zone-manager/)
- [How to Rotate a DNSSEC Key](https://docs.cpanel.net/knowledge-base/dns/how-to-rotate-a-dnssec-key/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×