---
url: "https://docs.cpanel.net/manage2/licenses/list-licenses/"
title: "List Licenses | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/manage2/licenses/list-licenses/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [Manage2](https://docs.cpanel.net/manage2/)
3. [Licenses](https://docs.cpanel.net/manage2/licenses/)
4. List Licenses


[license](https://docs.cpanel.net/tags/license/) [manage2](https://docs.cpanel.net/tags/manage2/)

#### Table of Contents

[Overview](https://docs.cpanel.net/manage2/licenses/list-licenses/#overview)

* * *

[Customize the list of licenses](https://docs.cpanel.net/manage2/licenses/list-licenses/#customize-the-list-of-licenses)

* * *

[License information](https://docs.cpanel.net/manage2/licenses/list-licenses/#license-information)

* * *

[Expire](https://docs.cpanel.net/manage2/licenses/list-licenses/#expire)

* * *

[Modify a License](https://docs.cpanel.net/manage2/licenses/list-licenses/#modify-a-license)

* * *

[Priority Support](https://docs.cpanel.net/manage2/licenses/list-licenses/#priority-support)

* * *

[Transfer](https://docs.cpanel.net/manage2/licenses/list-licenses/#transfer)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/manage2/licenses/list-licenses/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/manage2/licenses/list-licenses/#overview)

* * *

[Customize the list of licenses](https://docs.cpanel.net/manage2/licenses/list-licenses/#customize-the-list-of-licenses)

* * *

[License information](https://docs.cpanel.net/manage2/licenses/list-licenses/#license-information)

* * *

[Expire](https://docs.cpanel.net/manage2/licenses/list-licenses/#expire)

* * *

[Modify a License](https://docs.cpanel.net/manage2/licenses/list-licenses/#modify-a-license)

* * *

[Priority Support](https://docs.cpanel.net/manage2/licenses/list-licenses/#priority-support)

* * *

[Transfer](https://docs.cpanel.net/manage2/licenses/list-licenses/#transfer)

* * *

## List Licenses

Last modified: _2024 February 22_

* * *

## Overview

This interface allows you to view information about your account’s licenses.

## Customize the list of licenses

To customize the list of licenses to only show licenses that meet your search criteria, perform the following steps:

1. Select an option from the appropriate menu, or enter an IP address range in the _IP Range_ text box.
   - The interface will list groups and packages to which your account has access in the _Group_ and _Package_ menus.
   - You **must** enter an entire range in the _IP Range_ text box. For example, to search for all IP addresses between `1.2.3.5` and `1.2.3.24`, enter `1.2.3.5/24` or `1.2.3.5-24`.
2. Click _Search_.


## License information

Note:

By default, this table lists active and valid licenses. To also show _Expired_ and _Invalid_ licenses, customize the search settings and click _Search_.


The _List Licenses_ table provides the following information about, and options for, each license:

- _ID_ — The license’s ID number and the following options:






Note:




See [_Modify a License_](https://docs.cpanel.net/manage2/licenses/list-licenses/#modify-a-license) below for additional information on the _ID_ field.





  - _Expire_ — Click this option to remove the license from your account.






    Note:




    If you click this option for a license that is already expired, an error message will appear.


  - _Support_ — Click this option to submit a _Priority Support Request_ for the license’s IP address.

  - _Transfer_ — Transfer the license to another IP address.
- _IP_ — The license’s IP address.

- _Package_ — The license’s package.

- _Status_ — A numerical value that represents the status of the license.
  - `1` — Active license.
  - `2` — Expired license.
- _Valid_ — A numerical value that represents the validity of the license.
  - `1` — The license is valid.
  - `2` — The license is not valid.
- _Add Date_ — The date on which the license was added.


Click a column’s heading to sort the information by that column’s value.

### Expire

Note:

You **cannot** expire a timed or yearly license. If you attempt to expire a timed or yearly license, an error message will appear.


To expire a license, perform the following steps:

1. Click _Expire_ next to the license that you wish to expire.

2. The _Expire License_ interface will appear, with the license number, group, and IP address.






Important:




Verify that the interface displays the correct license before you continue.


3. Select the reason that most closely matches why you wish to expire the license.

4. In the text box, enter any additional information about why you wish to expire the license.






Note:




Though this step is not required, we **strongly** recommend that you complete it. This step helps both you and WebPros International, LLC track license transfers and fraudulent or non-paying accounts.


5. Click _Expire License_.


Return to the _List Licenses_ interface to confirm that you expired the license.

### Modify a License

To modify the parameters of a license, click the _ID_ number of the license to open [_Modify a License_](https://docs.cpanel.net/manage2/licenses/modify-a-license/).

### Priority Support

To submit a Priority Support Request, perform the following steps:

1. Click _Priority Support_ for the IP address for which you wish to submit a request.
2. Confirm that the IP address is correct.
3. Click _Go_ to access the cPanel Customer Portal interface.

### Transfer

To transfer a license to a different IP address, perform the following steps:

1. Click _Transfer_ next to the license that you wish to transfer to a new IP address.
2. Verify that the _Old IP_ value is correct.
3. In the _New IP_ text box, enter the IP address to which you wish to transfer the license.
4. Click _Transfer IP_.

#### Additional Documentation

* * *

- [Manage Demo Mode](https://docs.cpanel.net/whm/account-functions/manage-demo-mode/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×