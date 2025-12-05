---
url: "https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/"
title: "How to Migrate the Contents of Email Accounts in Addon Domains | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#main-content)

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
3. [Email](https://docs.cpanel.net/knowledge-base/email/)
4. How to Migrate the Contents of Email Accounts in Addon Domains


[ip](https://docs.cpanel.net/tags/ip/) [exim](https://docs.cpanel.net/tags/exim/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#overview)

* * *

[Addon domain deletion](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#addon-domain-deletion)

* * *

[Addon domain moved to another account](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#addon-domain-moved-to-another-account)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#overview)

* * *

[Addon domain deletion](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#addon-domain-deletion)

* * *

[Addon domain moved to another account](https://docs.cpanel.net/knowledge-base/email/how-to-migrate-the-contents-of-email-accounts-in-addon-domains/#addon-domain-moved-to-another-account)

* * *

## How to Migrate the Contents of Email Accounts in Addon Domains

Last modified: _2023 July 27_

* * *

## Overview

This document describes how to delete or migrate the contents of email accounts in addon domains.

- To create an email account on an addon domain, use cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts/) interface ( _cPanel » Home » Email » Email Accounts_).
- To manage an addon domain, read cPanel’s [_Addon Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface documentation ( _cPanel » Home » Domains » Addon Domains_).

Note:

In the following examples:

- `old_account` represents the cPanel account **from** which you wish to move the addon domain’s email account or accounts.
- `new_account` represents the cPanel account **to** which you wish to move the addon domain’s email account or accounts.
- `domain_name` represents the addon domain’s name.
- `email_account` represents the name of the addon domain’s email account that you wish to move.

## Addon domain deletion

When you remove an addon domain, its email accounts will no longer appear in cPanel’s [_Domains_](https://docs.cpanel.net/cpanel/domains/domains/) interface ( _cPanel » Home » Domains » Domains_). However, the contents for these emails accounts still exist in the `/home/old_account/mail` directory.

If you wish to permanently remove the contents of these accounts, run the following command on the command line as the `root` user:

```perl
rm -R /home/old_account/mail/domain_name
```

## Addon domain moved to another account

If you move an addon domain to a different account, you **must** add the addon domain’s email accounts manually and move the contents of those email accounts manually. The email accounts **must** follow the same name and domain format that they previously followed.

Perform the following steps to migrate the contents of the mail accounts:

1. Use cPanel’s [_Email Accounts_](https://docs.cpanel.net/cpanel/email/email-accounts) interface ( _cPanel » Home » Email » Email Accounts_) to add new accounts, or run [the addpop script](https://docs.cpanel.net/whm/scripts/whm-scripts) to manually add new email accounts.

2. Run the following command on the command line as the `root` user to move all email accounts to the new account:



```perl
mv /home/old_account/mail/domain_name /home/new_account/mail
```

3. Run the following command to change ownership of the files to the new account:



```perl
chown -R new_account:new_account /home/new_account/mail/domain_name.
```

4. Verify the ownership of the email accounts after you move them.



```perl
ls -alR /home/new_account/mail
```


#### Additional Documentation

* * *

- [Add a New IP Address](https://docs.cpanel.net/whm/ip-functions/add-a-new-ip-address/)
- [Mail Delivery Reports](https://docs.cpanel.net/whm/email/mail-delivery-reports/)
- [Mail Queue Manager](https://docs.cpanel.net/whm/email/mail-queue-manager/)
- [View Mail Statistics Summary](https://docs.cpanel.net/whm/email/view-mail-statistics-summary/)
- [View Sent Summary](https://docs.cpanel.net/whm/email/view-sent-summary/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×