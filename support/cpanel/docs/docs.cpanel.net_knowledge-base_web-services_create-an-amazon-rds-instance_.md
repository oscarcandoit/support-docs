---
url: "https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/"
title: "Create an Amazon® RDS™ Instance | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#main-content)

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
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. Create an Amazon® RDS™ Instance


[aws](https://docs.cpanel.net/tags/aws/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [mysql](https://docs.cpanel.net/tags/mysql/) [databases](https://docs.cpanel.net/tags/databases/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#overview)

* * *

[Create an Amazon RDS Instance](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-an-amazon-rds-instance)

* * *

[Log in to the Amazon Web Services Management Console](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#log-in-to-the-amazon-web-services-management-console)

* * *

[Select your region](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#select-your-region)

* * *

[Open the RDS Console](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#open-the-rds-console)

* * *

[Create a parameter group](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-a-parameter-group)

* * *

[Create the database](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-the-database)

* * *

[Configure additional database settings](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#configure-additional-database-settings)

* * *

[Obtain the endpoint](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#obtain-the-endpoint)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#overview)

* * *

[Create an Amazon RDS Instance](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-an-amazon-rds-instance)

* * *

[Log in to the Amazon Web Services Management Console](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#log-in-to-the-amazon-web-services-management-console)

* * *

[Select your region](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#select-your-region)

* * *

[Open the RDS Console](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#open-the-rds-console)

* * *

[Create a parameter group](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-a-parameter-group)

* * *

[Create the database](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-the-database)

* * *

[Configure additional database settings](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#configure-additional-database-settings)

* * *

[Obtain the endpoint](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#obtain-the-endpoint)

* * *

## Create an Amazon® RDS™ Instance

Last modified: _2024 November 8_

* * *

## Overview

This document explains how to create an Amazon® RDS™ instance.

## Create an Amazon RDS Instance

To create an Amazon RDS instance, perform the following steps.

### Log in to the Amazon Web Services Management Console

Log in to the [AWS™ Management Console](https://aws.amazon.com/console/) as the `root` user with your [Amazon AWS account](https://aws.amazon.com/).

The _AWS Management Console_ page will appear.

### Select your region

To select the region in which to create the database, perform the following steps:

1. Click the _Region_ menu in the upper-right corner of the page.
2. Select the region in which you wish to create the RDS instance.

Important:

We **strongly** recommend that you select the region in which you host your cPanel & WHM servers at Amazon.


### Open the RDS Console

To open the RDS Console, perform the following steps:

1. Enter `RDS` in the _Search_ text box at the top of the page,
2. Click _RDS_ in the _Search results for ‘RDS’_ interface. The _RDS Management Console_ will appear.

## Create a parameter group

You **must** create a parameter group so that cPanel & WHM can properly connect to the database.

To create a parameter group, perform the following steps:

01. In the left sidebar, click _Parameter groups_. A new interface will appear.
02. Click _Create parameter group_. A new interface will appear.
03. From the _Parameter group family_ menu, select the database family that you wish to use.





    Important:




    We **only** support the `mysql5.7`and `mysql8.0` database families. We recommend that you select `mysql8.0`.


04. Select the _Type_ of parameter group you want to use.
05. Enter your desired _Group name_ for the parameter group. We recommend that you use the name `cpanel-whm`.
06. Enter a _Description_ for the parameter group.
07. Click _Create_. The _Parameter groups_ interface will reappear.
08. Click the `cpanel-whm` parameter group. A new interface will appear.
09. In the _Filter parameters_ text box, enter `log_bin_trust_function_creators`.
10. Click _Edit parameters_.
11. In the _Values_ menu, select `1`.
12. Click _Save changes_.

## Create the database

To create the database, perform the following steps:

01. In the left sidebar, click _Dashboard_.
02. Click _Create database_. The _Create database_ interface will appear.
03. Select the _Standard create_ method of database creation.
04. In the _Engine options_ section, select the following options:

    - MySQL® as your _Engine type_.
    - A version of MySQL 5.7 or 8.0 as your _Engine Version_. We recommend MySQL 8.0.
05. In the _Templates_ section, select the template that meets your needs.
06. In the _Availability and durability_ section, select the non-cluster deployment option that meets your needs.
07. In the _Settings_ section, enter your desired _DB instance identifier_ name.
08. In the _Settings_ section, click the arrow next to _Credentials Settings_, and enter the following information:

    - `root` for the _Master username_.
    - Desired _Master password_ or select _Auto generate a password_.

      - If you entered a master password, enter it again in _Confirm master password_.
09. In the _Instance configuration_ section, select the following options:

    - Desired _DB instance class._


      Important:




      Your instance type determines the rate at which AWS bills you. Make certain that you select an instance type that includes appropriate resources for the type of system that you wish to run.


    - Desired computational, memory, and network capacity for your needs.
    - Desired [_include previous generation classes_](https://aws.amazon.com/rds/previous-generation/) status.
10. In the _Storage_ section, select the following options:

    - Desired _Storage type_ setting.
    - Desired _Allocated storage_ value.
    - If the option appears, select the desired _Provisioned IOPS_ value.
    - Desired autoscaling status.
    - Desired _Maximum storage threshold_ value.
11. In the _Connectivity_ section, configure the following options:

    - Desired _Compute resource_ setting.
    - Desired _Virtual private cloud (VPC)_ setting.






      Note:




      If you host servers with AWS, we recommend that you use the same VPC for each server.


    - Desired _DB subnet group_ setting. We recommend that you select the default value.
    - Desired _Public access_ setting.






      Important:




      If you select _No_, only cPanel & WHM servers that you host at Amazon will be able to access the database.


    - Desired _VPC security group_ settings.
    - Desired _RDS Proxy_ setting.
    - Click the arrow next to _Additional configuration_, and enter your desired _Database port_ value. We recommend that you use the default value.
12. In the _Database authentication_ section, select your desired authentication option:

    - _Password authentication_.
    - _Password and IAM database authentication_.
    - _Password and Kerberos authentication_.
13. In the _Monitoring_ section, select _Enable Enhanced monitoring_ if desired. If you enable _Enable Enhanced monitoring_, select the following options:

    - Desired _Granularity_ value.
    - Desired _Monitoring Role_ setting.

### Configure additional database settings

In the _Additional configuration_ section, perform the following steps:

1. Enter your desired _Initial database name_.





Important:





If you do **not** specify a database name, Amazon RDS does **not** create a database.

2. From the _DB parameter group_ menu, select the `cpanel-whm` option.
3. From the _Option group_ menu, select the `cpanel-whm` option you [created previously](https://docs.cpanel.net/knowledge-base/web-services/create-an-amazon-rds-instance/#create-a-parameter-group).
4. In the _Backup_ section, configure the following options:

   - Desired _Enable automated backups_ status.
   - Desired _Backup retention period_ value.
   - Desired _Backup window_ setting.
   - Desired _Copy tags to snapshots_ status.
5. In the _Encryption_ section, select _Enable encryption_ if you would like to enable encryption on your database. If you enable _Enable encryption_, select your desired _AWS KMS key_ setting.
6. In the _Log exports_ section, select your desired logs.
7. In the _Maintenance_ section, configure the following options:

   - Desired _Enable auto minor version upgrade_ status.
   - Desired _Maintenance window_ settings.
8. In the _Deletion protection_ section, select _Enable deletion protection_ if you would like to enable database deletion protection.
9. Click _Create database_.

## Obtain the endpoint

Wait for the _Status_ value of your new database to change to _Available_. Then, scroll down to the _Connectivity & security_ section.

The _Endpoint_ value represents the hostname you will connect to in one of the following interfaces:

- In cPanel & WHM version 118 and earlier, the _Endpoint_ value represents the hostname you will connect to in WHM’s [_Manage MySQL® Profiles_](https://docs.cpanel.net/whm/sql-services/manage-mysql-profiles/) interface ( _WHM » Home » SQL Services » Manage MySQL® Profiles_).
- In cPanel & WHM version 120 and later, the _Endpoint_ value represents the hostname you will connect to in WHM’s [_Manage Database Profiles_](https://docs.cpanel.net/whm/database-services/manage-database-profiles/) interface ( _WHM » Home » Database Services » Manage Database Profiles_).

Note:

When you suspend a cPanel account, the system will **not** suspend any of the account’s Amazon RDS remote databases.


#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Change Database Root Password](https://docs.cpanel.net/whm/database-services/change-database-root-password/)
- [Change Database User Password](https://docs.cpanel.net/whm/database-services/change-database-user-password/)
- [Change MySQL User Password](https://docs.cpanel.net/whm/sql-services/change-mysql-user-password/)
- [Database Map Tool](https://docs.cpanel.net/whm/sql-services/database-map-tool/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×