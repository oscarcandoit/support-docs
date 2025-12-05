---
url: "https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/"
title: "The MysqlDump Stream | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#main-content)

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
3. [SQL](https://docs.cpanel.net/knowledge-base/sql/)
4. The MysqlDump Stream


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [mysql](https://docs.cpanel.net/tags/mysql/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#overview)

* * *

[Using the MysqlDump stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#using-the-mysqldump-stream)

* * *

[MysqlDump parameters](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#mysqldump-parameters)

* * *

[Example](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#example)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#overview)

* * *

[Using the MysqlDump stream](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#using-the-mysqldump-stream)

* * *

[MysqlDump parameters](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#mysqldump-parameters)

* * *

[Example](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#example)

* * *

## The MysqlDump Stream

_Valid for versions 88 through the latest version_

#### Version:

#### [88](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/)

Last modified: _2023 January 5_

* * *

## Overview

Warning:

The MysqlDump stream is experimental. The behavior of this endpoint may change in a future version of cPanel & WHM.

The MysqlDump stream allows you to produce a dump of a MySQL® database via WebSocket from any computer that has access to the server. You do not need to log in to your server. You can [run a command](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#example) to request that your server sends you the dump output. You can then use the dump output to create a backup.

## Using the MysqlDump stream

To stream a dump output from cPanel or WHM, call it via any [WebSocket](https://en.wikipedia.org/wiki/WebSocket) client. You will also need an API token or authenticate via Basic HTTP Authentication to use the endpoint.

#### Use Basic HTTP Authentication

To use Basic HTTP Authentication, follow the directions in our [Guide to API Authentication - Username and Password Authentication](https://api.docs.cpanel.net/guides/guide-to-api-authentication/guide-to-api-authentication-username-and-password-authentication/) documentation. For more information about Basic HTTP Authentication, read the [RFC 7617](https://tools.ietf.org/html/rfc7617) documentation.

#### Generate an API token in cPanel

To generate a cPanel API token, use cPanel’s [_Manage API Tokens_](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel) interface ( _cPanel » Home » Security » Manage API Tokens_). You can also use the UAPI [`Tokens::create_full_access`](https://api.docs.cpanel.net/openapi/cpanel/operation/create_full_access/) function. For more information, read our [How to Use cPanel API Tokens](https://docs.cpanel.net/knowledge-base/security/how-to-use-cpanel-api-tokens) documentation.

#### Generate an API token in WHM

To generate a WHM API token, use WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm) interface ( _WHM » Home » Development » Manage API Tokens_). You can also use the WHM API 1 [`api_token_create`](https://api.docs.cpanel.net/openapi/whm/operation/api_token_create/) function. For more information, read our [Guide to API Authentication - API Tokens in WHM](https://api.docs.cpanel.net/guides/guide-to-api-authentication/guide-to-api-authentication-api-tokens-in-whm/) documentation.

Important:

- Only `root` or resellers with `root`-level privileges can access WHM’s MysqlDump stream. For more information, read our [_Edit Reseller Nameserver and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges) interface ( _WHM » Home » Resellers » Edit Reseller Nameservers and Privileges_) documentation.

- In WHM, you can use the MysqlDump stream to dump **any** MySQL database. This includes a database **not** managed by cPanel & WHM.


## MysqlDump parameters

You **must** use the following parameters:

| Parameters | Description | Example |
| --- | --- | --- |
| `dbname` | The name of the database to dump. | `dbname=username_example_db` |
| `character_set` | The value to give the default MySQL character set. Possible values: <br>- [`utf8mb4`](https://dev.mysql.com/doc/refman/5.5/en/charset-unicode-sets.html)<br>- `utf8`<br>Note:<br>We recommend that you run `utf8mb4`, and only run `utf8` if you experience a collation error. | `character_set=utf8mb4` |
| `include_data` | A Boolean value that indicates whether to include table data in the dump. | `include_data=1` |

Important:

Use the `--no-tablespaces` option if you do **not** need to stream tablespace information and receive the following error:

```bash
Incompatible Change: Access to the INFORMATION_SCHEMA.FILES table now requires the PROCESS privilege.
```

The WebSocket close frame will include one of the following status codes:

- `1000` — Success.

- `1011` — General error.

- `4000` — Collation error; try a different `encoding` value.


The `1011` and `4000` error codes contain an error ID. You can search the [`/usr/local/cpanel/logs/error_log`](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/) file to locate more information about why the command failed.

## Example

To stream a cPanel MySQL dump output via the [npm _wscat2_](https://www.npmjs.com/package/wscat2) utility, run the following command:

```bash
wscat -H 'Authorization: cpanel username:GG24IS0019Q8SGI6R5EATJHLMBY3UX6Z' -c 'wss://example.com:2083/websocket/MysqlDump?dbname=username_db1&include_data=1&encoding=utf8mb4' > /$PATH/file.sql
```

In this example:

- `username` represents the account’s username.

- `GG24IS0019Q8SGI6R5EATJHLMBY3UX6Z` represents the [cPanel API Token](https://docs.cpanel.net/cpanel/security/manage-api-tokens-in-cpanel).

- `example.com` represents any name in DNS that resolves to the server.

- `username_db1` represents the database’s name.

- `/$PATH/file.sql` represents the directory and filename for the dump output.


The command will produce output similar to the following example:

[Click to view...](https://docs.cpanel.net/knowledge-base/sql/the-mysqldump-stream/#click-to-view---1764175698451956077)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>55<br>56<br>57<br>58<br>59<br>60<br>61<br>62<br>63<br>64<br>65<br>66<br>67<br>68<br>``` | ```bash<br>-- MySQL dump 10.13 Distrib 5.7.25, for Linux (x86_64)<br>--<br>-- Host: localhost Database: username_db1<br>-- ------------------------------------------------------<br>-- Server version 5.7.26<br>/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;<br>/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;<br>/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;<br>/*!40101 SET NAMES utf8mb4 */;<br>/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;<br>/*!40103 SET TIME_ZONE='+00:00' */;<br>/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;<br>/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;<br>/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;<br>/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;<br>--<br>-- Current Database: `username_db1`<br>--<br>CREATE DATABASE /*!32312 IF NOT EXISTS*/ `username_db1` /*!40100 DEFAULT CHARACTER SET latin1 */;<br>USE `username_db1`;<br>--<br>-- Table structure for table `example`<br>--<br>DROP TABLE IF EXISTS `example`;<br>/*!40101 SET @saved_cs_client = @@character_set_client */;<br>/*!40101 SET character_set_client = utf8 */;<br>CREATE TABLE `example` (<br>`id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,<br>`name` varchar(20) NOT NULL,<br>PRIMARY KEY (`id`)<br>) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;<br>/*!40101 SET character_set_client = @saved_cs_client */;<br>--<br>-- Dumping data for table `example`<br>--<br>LOCK TABLES `example` WRITE;<br>/*!40000 ALTER TABLE `example` DISABLE KEYS */;<br>INSERT INTO `example` (`id`, `name`) VALUES (1,'Sample data');<br>/*!40000 ALTER TABLE `example` ENABLE KEYS */;<br>UNLOCK TABLES;<br>--<br>-- Dumping events for database 'username_db1'<br>--<br>--<br>-- Dumping routines for database 'username_db1'<br>--<br>/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;<br>/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;<br>/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;<br>/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;<br>/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;<br>/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;<br>/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;<br>/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;<br>-- Dump completed on 2019-07-10 9:07:57<br>1000:<br>``` |

#### Additional Documentation

* * *

- [Additional MySQL Access Hosts](https://docs.cpanel.net/whm/sql-services/additional-mysql-access-hosts/)
- [Backup Retention Behavior](https://docs.cpanel.net/knowledge-base/backup/backup-retention-behavior/)
- [The auto-adjust-mysql-limits Script](https://docs.cpanel.net/whm/scripts/the-auto-adjust-mysql-limits-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The manage\_mysql\_profiles Script](https://docs.cpanel.net/whm/scripts/the-manage_mysql_profiles-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×