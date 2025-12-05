---
url: "https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/"
title: "Why Can't I Clean a Hacked Machine? | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#main-content)

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
3. [Q&A with cPanel Technical Support](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/)
4. Why Can't I Clean a Hacked Machine?


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [security](https://docs.cpanel.net/tags/security/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#overview)

* * *

[Backdoors](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#backdoors)

* * *

[Third-party rootkit hunters](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#third-party-rootkit-hunters)

* * *

[Solutions for dealing with a compromised server](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#solutions-for-dealing-with-a-compromised-server)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#overview)

* * *

[Backdoors](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#backdoors)

* * *

[Third-party rootkit hunters](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#third-party-rootkit-hunters)

* * *

[Solutions for dealing with a compromised server](https://docs.cpanel.net/knowledge-base/q-and-a-with-cpanel-support/why-cant-i-clean-a-hacked-machine/#solutions-for-dealing-with-a-compromised-server)

* * *

## Why Can't I Clean a Hacked Machine?

Last modified: _2022 July 13_

* * *

## Overview

When a `root` account is compromised, users often ask how they can “clean” their server. To put it as succinctly as possible: without knowing every action that has ever taken place on a server, it is impossible to prove that the server is completely clean. While it is simple to show a compromised server, showing the opposite, for all intents and purposes, is not.

After a `root`-level compromise, the only determinations that can be made about the server’s integrity are the following:

- The server has been hacked.
- The server may still be hacked.

## Backdoors

Once a user gains `root` access, they can manipulate the server in any way they wish. This means that a hacker can install multiple backdoors, which allow them to regain access to the server. Just because one backdoor is found and removed does not mean that others do not exist. For example, a cron job may run as the `root` user and download a backdoor to the `/bin` directory each day. You may find the backdoor in the `/bin` directory, but miss the cron job that will allow backdoor access to the server again.

Let’s say that 100,000 root-owned files exist on your Linux server. If three of those files are backdoors that grant `root` access, how will you know? In addition, many `rootkits` hide the presence of backdoors. If a `rootkit` instructs your operating system to hide a file, it is unlikely that you will see the file on the disk. Backdoors can also reside in memory only. Most users do not have the resources necessary to continually audit gigabytes of memory for suspicious activity.

## Third-party rootkit hunters

Utilities like `rkhunter` and `chkrootkit` can be just as harmful as they are helpful. While they may provide information about known `rootkits`, they may also create a false sense of trust and security. If `rootkit` detection performed flawlessly every time, there would be no need for multiple products in order to do so. Remember, these utilities check for **known** malware only, and if their malware library is out of date, they will **not** detect unknown malware. While they can conduct some heuristics, they can also provide false positives. Most importantly, it is both simple and commonplace for malware developers to evade detection by downloading these utilities and learning how they work.

There will always be unknown malware that has never been and will never be detected. Malware often has variants that operate in many different ways. Without knowing every possible variant, it is impossible to conclusively address the issue.

No official documentation exists for malware because its stealth is how it survives. While independent researchers and antivirus companies provide information about their findings in some cases, no guarantee can be made that the information is entirely accurate or complete. Once that information is released to the public, malware authors may alter their programs to function in a new manner in order to remain undetected.

## Solutions for dealing with a compromised server

The only viable solutions for handling a hacked server are the following:

- Migrate the accounts to a clean server and reinstall the hacked server.
- Restore the server from a snapshot. However, the server could have been compromised long before the issue was known. If so, this solution may still leave the server compromised.






Important:





If you believe your server has been compromised, we recommend you contact [cPanel Technical Support](https://tickets.cpanel.net/). If we determine that your server is compromised, you or your system administrator will need to follow the solutions above to resolve the issue.


#### Additional Documentation

* * *

- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [Manage root's SSH Keys](https://docs.cpanel.net/whm/security-center/manage-root-ssh-keys/)
- [The check\_security\_advice\_changes Script](https://docs.cpanel.net/whm/scripts/the-check_security_advice_changes-script/)
- [The securetmp Script](https://docs.cpanel.net/whm/scripts/the-securetmp-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×