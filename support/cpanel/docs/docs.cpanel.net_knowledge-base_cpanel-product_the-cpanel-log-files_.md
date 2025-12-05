---
url: "https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/"
title: "The cPanel & WHM Log Files | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#main-content)

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
3. [cPanel Product](https://docs.cpanel.net/knowledge-base/cpanel-product/)
4. The cPanel & WHM Log Files


[server](https://docs.cpanel.net/tags/server/) [logs](https://docs.cpanel.net/tags/logs/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#overview)

* * *

[General](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#general)

* * *

[Services](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services)

* * *

[Services Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services-files)

* * *

[PHP and PHP-FPM](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#php-and-php-fpm)

* * *

[Services Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services-directories)

* * *

[FTP](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp)

* * *

[FTP Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp-files)

* * *

[FTP Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp-directories)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail)

* * *

[Mail Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail-files)

* * *

[Mail Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail-directories)

* * *

[Memory usage](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#memory-usage)

* * *

[MySQL](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mysql)

* * *

[Webservers](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#webservers)

* * *

[Apache](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#apache)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#overview)

* * *

[General](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#general)

* * *

[Services](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services)

* * *

[Services Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services-files)

* * *

[PHP and PHP-FPM](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#php-and-php-fpm)

* * *

[Services Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#services-directories)

* * *

[FTP](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp)

* * *

[FTP Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp-files)

* * *

[FTP Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#ftp-directories)

* * *

[Mail](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail)

* * *

[Mail Files](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail-files)

* * *

[Mail Directories](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mail-directories)

* * *

[Memory usage](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#memory-usage)

* * *

[MySQL](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#mysql)

* * *

[Webservers](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#webservers)

* * *

[Apache](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#apache)

* * *

## The cPanel & WHM Log Files

Last modified: _2025 February 13_

* * *

## Overview

This document describes the location of all of the log files in cPanel & WHM, Webmail, and MySQL®. This document also provides examples of each log file.

Note:

- The directories and files in this document reflect unaltered configurations.
- You can alter a log file’s location with a configuration file.

We use the following examples in this document:

- `USER` represents the cPanel account name.
- `HOSTNAME` represents the server’s hostname.
- `domain` represents a domain on the cPanel account.

## General

##### `/var/log/messages` (Red Hat®-based servers) or `/var/log/syslog` (Ubuntu® servers)

This file contains the login attempts and general error messages for the following services:

- [FTP](https://docs.cpanel.net/knowledge-base/ftp/)

- The nameserver daemons:
  - `named` or `bind`
  - PowerDNS
- The SSH daemon (`sshd`).


|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>Nov  3 08:41:10 vm5 proftpd[684684]: 10.1.100.35 (127.0.0.1[127.0.0.1]) - FTP session opened.<br>Nov  3 08:41:10 vm5 proftpd[684684]: 10.1.100.35 (127.0.0.1[127.0.0.1]) - FTP session closed.<br>Nov  3 08:46:12 vm5 proftpd[684753]: 10.1.100.35 (127.0.0.1[127.0.0.1]) - FTP session opened.<br>Nov  3 08:46:12 vm5 proftpd[684753]: 10.1.100.35 (127.0.0.1[127.0.0.1]) - FTP session closed.<br>``` |

* * *

##### `/var/log/secure`

This file contains the login attempts for the SSH daemon (`sshd`).

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>    Jul  5 08:50:04 colin sshd[29856]: Accepted password for root from 10.7.6.162 port 57893 ssh2<br>    Jul  5 08:50:05 colin sshd[29856]: pam_unix(sshd:session): session opened for user root by (uid=0)<br>    Jul  5 15:00:17 colin sshd[29856]: Received disconnect from 10.7.6.162: 11: disconnected by user<br>    Jul  5 15:00:17 colin sshd[29856]: pam_unix(sshd:session): session closed for user root<br>    Jul  6 07:57:10 colin sshd[24129]: Accepted password for root from 10.7.6.162 port 55983 ssh2<br>    Jul  6 07:57:10 colin sshd[24129]: pam_unix(sshd:session): session opened for user root by (uid=0)<br>``` |

* * *

## Services

### Services Files

##### `/home/USER/.cpanel/logs`

This directory contains records of errors within a user’s task queue.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    Processing /home/USER/example...<br>    Already had it.<br>``` |

* * *

##### `/home/username/logs/DAV-debug.log`

Important:

- You should **only** enable this log file if you need to troubleshoot issues with your account’s calendars or contacts. This file can quickly fill up your account’s [disk quota](https://docs.cpanel.net/cpanel/files/disk-usage/).
- This log file is **only** available in cPanel & WHM versions 120 and above.

This file contains cPanel user debug output from the `cpdavd` service.

To enable this log file, create the `/home/username/.caldav/.debug` touch file, either in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_) or on the [command line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line). You **must** remove the touch file when you are done with troubleshooting.

Some of the output in this log file appears in color. Each line displays log information in the following format:

```bash
[420074] [Tue Jan 30 19:00:59 2024] [Cpanel/DAV/CaldavCarddav.pm : 4457 ] ❱❱❱ load_metadata at Cpanel/DAV/CaldavCarddav.pm : 4496
```

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697161227241)

- PID — The `cpdavd` process ID.
- Time — The date and time of the message, in `WD MM DD HH:mm:SS YYYY` format, where:

  - `WD` represents the day of the week.
  - `MM` represents the month.
  - `DD` represents the day of the month.
  - `HH` represents the hour in 24-hour time.
  - `mm` represents the minute.
  - `SS` represents the second.
  - `YYYY` represents the year.
- The calling file and line number — The `cpdavd` file and line number in the file that generated the output.
- Message — The output message.

* * *

##### `/home/username/logs/DAV-error.log`

Important:

This log file is **only** available in cPanel & WHM versions 120 and above.

This file contains output from the `cpdavd` service. Each line displays log information in the following format:

```bash
[02/Nov/2023:21:47:53] 10.3.5.127 user@example.com "PROPFIND /calendars/user%40example.com/" 2298 "400 Bad Request" 424 "Evolution/3.50.1"
```

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697161769944)

- Time — The date and time that the error occurred, in `DD/Mon/YYYY:HH:MM:SS` format, where:

  - `DD` represents the date.
  - `Mon` represents the month.
  - `YYYY` represents the year.
  - `HH` represents the hour.
  - `MM` represents the minute.
  - `SS` represents the second.
- IP address — The remote client’s IP address.
- Username — The authenticated user’s account.
- Request method — The request method that the client sent to the server.
- Requested URI — The [Uniform Resource Identifier (URI)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#uri) that the client requested from the server.
- Request size — The size of the request that the client sent to the server.
- Response status — The error code and message that the server sent to the client.
- Response size — The size of the server’s response to the client, in bytes.
- User agent — The program that the remote client used to access the server.

* * *

##### `/home/username/logs/DAV-io.log`

Important:

- To enable this log file, create the `/home/username/.caldav/.debug` touch file, either in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_) or on the [command line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line).
- This log file is only available in cPanel & WHM versions 120 and above.

This file contains cPanel user request and payload data from the `cpdavd` service. Each line displays log information in the following format:

```bash
[2213123] [Tue Jan 30 08:28:35 2024] [Cpanel/DAV/CaldavCarddav.pm : 1126] >>>A long string that contains the request and payload data>>>>
```

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697162444148)

- PID — The `cpdavd` process ID.
- Time — The date and time of the message, in `WD MM DD HH:mm:SS YYYY` format, where:

  - `WD` represents the day of the week.
  - `MM` represents the month.
  - `DD` represents the day of the month.
  - `HH` represents the hour in 24-hour time.
  - `mm` represents the minute.
  - `SS` represents the second.
  - `YYYY` represents the year.
- The calling file and line number — The `cpdavd` file and line number in the file that generated the output.
- Message — The request/payload message.

* * *

##### `/usr/local/cpanel/logs/access_log`

This file contains records of when a cPanel & WHM user accesses their account.

The system displays these records in a standardized text format, called the Common Log Format. Each line displays log information in the following syntax:

```bash
192.168.0.20 - example [10/08/2016:13:37:32 -0000] "GET /cpsess1234567890/frontend/jupiter/index.html HTTP/1.1" 200 0 "" "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:49.0) Gecko/20100101 Firefox/49.0" "s" "-" 2083
```

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697163125105)

| Syntax | Description | Example |
| --- | --- | --- |
| IP Address | The client’s IP address. | `192.168.0.20` |
| User-identified | An unused user identification protocol field. cPanel & WHM log files **always** display one of the following values in this field: <br>- `proxy` for a service subdomain’s log files.<br>- A dash (`-`) for all other domain types. | none |
| User | A valid cPanel & WHM account name or an email address. | `skipperdan` |
| Time | The date and time when the visitor accessed your website, in `MM/DD/YYYY:HH:MM:SS -ZZZZ` format, where: <br>- `MM` represents the month.<br>- `DD` represents the date.<br>- `YYYY` represents the year.<br>- `HH` represents the hour.<br>- `mm` represents the minute.<br>- `SS` represents the second.<br>- `-zzzz` represents the timezone, in [UTC format](https://en.wikipedia.org/wiki/Coordinated_Universal_Time). | `10/21/1985:16:42:23 -0000` |
| Client request | The web request that the client issued to the server. | `GET /.__cpanel__service__check__./serviceauth?sendkey=__HIDDEN__&version=1.2 HTTP/1.0` |
| HTTP Status | The result of the HTTP request. For more information, read Wikipedia’s [List of HTTP status codes](http://wikipedia.org/wiki/List_of_HTTP_status_codes) documentation. | `200` |
| Response Size | The size of the object returned to the client, in bytes. | `1500` |
| Referrer | The web address from which the visitor navigated to the resource. | `ftp://cpanel.com` |
| User Agent | The browser that the visitor used to access cPanel & WHM. | `Safari` |
| Authentication method | The method that authenticated the request, where: <br>- `a` represents Access Key/Hash.<br>- `b` represents HTTP Basic Authentication.<br>- `s` represents Session cookie.<br>- `o` represents OpenID Connect. | `s` |
| The `X-Forwarded-For` header | The IP address of the client when the user makes a connection request via service subdomains (proxy domains). | `X-Forwarded: for:192.0.2.60` |
| Service port | The server port number that the client accessed in the request. | `2083` |

* * *

##### `/usr/local/cpanel/logs/api_log`

This file contains a human-readable log of all cPanel API1, successful API2, and successful UAPI calls made by a single cPanel user. To view this file, your system administrator **must** enable this setting in the [_Tweak Settings_](https://docs.cpanel.net/whm/server-configuration/tweak-settings/) interface ( _WHM » Home » Server Configuration » Tweak Settings » Logging_) or by calling the WHM API 1 [`set_tweaksetting`](https://api.docs.cpanel.net/openapi/whm/operation/set_tweaksetting/) function.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"Themes::list","uri":"/cpsess1777148931/execute/Themes/list"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"SSL::installed_host","uri":"/cpsess1777148931/execute/SSL/installed_host"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"Resellers::list_accounts","uri":"/cpsess1777148931/execute/Resellers/list_accounts"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"ResourceUsage::get_usages","uri":"/cpsess1777148931/execute/ResourceUsage/get_usages"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"ExternalAuthentication::has_external_auth_modules_configured","page":"/usr/local/cpanel/base/frontend/jupiter/email_accounts/index.html.tt","uri":"/cpsess1777148931/frontend/jupiter/email_accounts/index.html"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"Email::list_mail_domains","page":"/usr/local/cpanel/base/frontend/jupiter/email_accounts/index.html.tt","uri":"/cpsess1777148931/frontend/jupiter/email_accounts/index.html"}<br>[2022-07-12 20:18:52 +0000] info [cpwrapd] api_version=uapi called_by=cptest {"call":"PasswdStrength::get_required_strength","page":"/usr/local/cpanel/base/frontend/jupiter/email_accounts/index.html.tt","uri":"/cpsess1777148931/frontend/jupiter/email_accounts/index.html"}<br>``` |

* * *

##### `/usr/local/cpanel/logs/api_tokens_log`

This file contains WHM’s [API tokens](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm) logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>    [2017-02-07 19:07:13 -0600] info [whostmgrd] HTTP Status: ['200'], User: ['kingrichard'], Token Name: ['robin_of_loxley'], Request: ['GET /scripts2/reloadbind_local?dnsuniqid=baa HTTP/1.0']<br>    [2017-02-07 19:07:13 -0600] info [whostmgrd] HTTP Status: ['200'], User: ['princejohn'], Token Name: ['sherrif_of_rottingham'], Request: ['GET /scripts2/reloadbind_local?dnsuniqid=baa HTTP/1.0']<br>    [2017-02-07 19:07:13 -0600] info [whostmgrd] HTTP Status: ['200'], User: ['ahsneeze'], Token Name: ['ahchoo'], Request: ['GET /scripts2/reloadbind_local?dnsuniqid=baa HTTP/1.0']<br>``` |

* * *

##### `/usr/local/cpanel/build/locale_database_log`

This file contains information about when a user [edits a locale](https://docs.cpanel.net/whm/locales/edit-a-locale).

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2014-09-28 02:55:26 -0500] info [build_locale_databases] Finished updating and modifying locales databases<br>    [2014-09-29 02:54:16 -0500] info [build_locale_databases] Begin update of locale databases<br>``` |

* * *

##### `/usr/local/cpanel/logs/cpdavd_error_log`

This file contains the [Web Disk feature’s](https://docs.cpanel.net/cpanel/files/web-disk) error logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    Starting PID 11197: cpdavd - accepting connections on 2077 and 2078<br>    Starting PID 11080: cpdavd - accepting connections on 2077 and 2078<br>``` |

* * *

##### `/usr/local/cpanel/logs/cpdavd_session_log`

This file contains the [Web Disk feature’s](https://docs.cpanel.net/cpanel/files/web-disk) activity logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>    [2015-11-18 14:38:51 -0600] info [cpdavd] 162.158.64.218 NEW _dav_:mUG2YFqewzo7GzVm app=cpdavd - accepting connections on 2077 2078 2079 and 2080,method=/usr/local/cpanel/libexec/cpdavd:main         <br>    [2015-11-18 14:38:51 -0600] info [cpdavd] 162.158.64.216 NEW _dav_:m9MlWdxVqpyemmP6 app=cpdavd - accepting connections on 2077 2078 2079 and 2080,method=/usr/local/cpanel/libexec/cpdavd:main<br>    [2015-11-18 14:38:51 -0600] info [cpdavd] 162.158.64.218 NEW _dav_:YZEJy7lEsXSxyz3Y app=cpdavd - accepting connections on 2077 2078 2079 and 2080,method=/usr/local/cpanel/libexec/cpdavd:main<br>``` |

* * *

##### `/usr/local/cpanel/logs/cpgreylistd.log`

This file contains the [Greylisting](https://docs.cpanel.net/whm/email/greylisting) daemon’s (`cpgreylistd`) activity logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-10-30 11:05:39 -0500] info [cpgreylistd] Purged old records from DB. Record(s) removed: 0<br>    [2015-10-30 12:05:39 -0500] info [cpgreylistd] Purged old records from DB. Record(s) removed: 0<br>``` |

* * *

##### `/usr/local/cpanel/logs/cphulkd_errors.log`

This file contains the [Brute Force Protection](https://docs.cpanel.net/whm/security-center/cphulk-brute-force-protection) daemon’s (`cphulkd`) error logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-08-26 12:14:29 -0500] info [cphulkd] 221257 The system encountered an error while processing a request: Broken pipe<br>    [2015-08-26 12:14:29 -0500] info [cphulkd] 221262 The system encountered an error while processing a request: Broken pipe<br>``` |

* * *

##### `/usr/local/cpanel/logs/cphulkd.log`

This file contains the `cphulkd` daemon’s activity logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-10-20 03:27:14 -0500] info [cphulkd] 258355 processor shutdown via SIGTERM with pid 258355<br>    [2015-10-20 03:27:44 -0500] info [cphulkd] 131586 processor startup with pid 131586<br>``` |

* * *

##### `/usr/local/cpanel/logs/cpwrapd_log`

This file contains the cPanel & WHM service manager daemon’s (`cpsrvd`) activity logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [1985-10-21 10:18:11 -0500] info [cpsrvd] user - [action]=[fetch] [function]=[SORTEDRESELLERSUSERS] [module]=[reseller] [namespace]=[Cpanel] [version]=[2.3]<br>    [2015-10-21 10:18:11 -0500] info [cpsrvd] user - [action]=[run] [function]=[HASDIGEST] [module]=[security] [namespace]=[Cpanel] [version]=[2.3]<br>``` |

* * *

##### `/usr/local/cpanel/logs/dnsadmin_log`

This file contains `dnsadmin` request logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-10-21 13:33:19 -0500] info [dnsadmin] Reset reseller cache 'domain1'.<br>    [2015-10-21 13:33:19 -0500] info [dnsadmin] Reset reseller cache 'example'.<br>``` |

* * *

##### `/usr/local/cpanel/logs/error_log`

This file contains general cPanel & WHM errors (for example, a `fatal error or timeout occurred while processing this directive` error).

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    Cpanel::Exception::new("Cpanel::Exception::ModSecurity::VendorUpdateUnnecessary", HASH(0x13222cb8)) called at /usr/local/cpanel/Cpanel/Exception.pm line 57<br>        Cpanel::Exception::create("ModSecurity::VendorUpdateUnnecessary", HASH(0x13222cb8)) called at /usr/local/cpanel/Whostmgr/ModSecurity/VendorList.pm line 285<br>``` |

* * *

##### `/usr/local/cpanel/logs/incoming_http_requests.log`

This file contains the logs of connection requests to the cPanel account’s server.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>    [15421][10/29/2009:17:14:21 -0000][headerparser 0]:Host: 127.0.0.1:2087<br>    [15421][10/29/2009:17:14:21 -0000][headerparser 0]:Accept: */*<br>    [15421][10/29/2009:17:14:21 -0000][headerparser 0]:Authorization: Basic *censored*<br>    [15421][10/29/2009:17:14:21 -0000][headerparser 0]:Content-Type: application/x-www-form-urlencoded<br>    [15421][10/29/2009:17:14:21 -0000][headerparser 0]:Content-Length: 34<br>    [15421][10/29/2009:17:14:21 -0000][killconnection]<br>    [15421][10/29/2009:17:14:21 -0000][killconnection exit]<br>``` |

* * *

##### `/usr/local/cpanel/logs/license_log`

This file contains the server’s license update logs and license errors.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>    Thu Oct 29 19:11:05 2015: Using full manual DNS resolution<br>    Thu Oct 29 19:11:05 2015: Trying server 192.168.0.20<br>    Thu Oct 29 19:11:05 2015: Server 192.168.0.20 on port 2089 returned:<br>``` |

* * *

##### `/usr/local/cpanel/logs/login_log`

This file contains the login attempts to the `cpsrvd` daemon.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>    192.168.0.20 - user [07/10/2013:18:43:00 -0000] "POST /login/?login_only=1 HTTP/1.1" FAILED LOGIN whostmgrd: user password hash is missing from system (user probably does not exist)<br>    192.168.0.21 - user [07/10/2013:18:43:14 -0000] "POST /login/?login_only=1 HTTP/1.1" FAILED LOGIN whostmgrd: user password hash is missing from system (user probably does not exist)<br>    192.168.0.22 - user [07/15/2013:16:21:50 -0000] "POST /login/?login_only=1 HTTP/1.1" FAILED LOGIN whostmgrd: user password incorrect<br>``` |

* * *

##### `/usr/local/cpanel/logs/panic_log`

This file contains a cPanel account’s severe error logs.

Warning:

This file should not contain any entries. If this file contains entries, thoroughly investigate the entries and contact your hosting provider.

* * *

##### `/usr/local/cpanel/logs/queueprocd.log`

This file contains the [cPanel TaskQueue Processing](https://docs.cpanel.net/whm/scripts/the-servers-queue-script) daemon’s (`queueprocd`) logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>    [2015-10-20 03:27:31 -0500] info [queueprocd] cPanel TaskQueue Processing Daemon starting.<br>    Starting update of 35 locales in parallel ...<br>    Updating "aa" locale ...<br>     ... "aa" complete.<br>    Updating "ar" locale ...<br>     ... "ar" complete.<br>``` |

* * *

##### `/usr/local/cpanel/logs/safeapacherestart_log`

This file contains information about each time that Apache restarted on the server.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-10-20 03:23:07 -0500] info [safeapacherestart] Restart elapsed seconds: 2<br>    [2015-10-30 12:57:47 -0500] info [safeapacherestart] Restart elapsed seconds: 5<br>``` |

* * *

##### `/usr/local/cpanel/logs/session_log`

This file contains logs of a user’s activities while they are logged in to the cPanel account.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [2015-10-29 09:27:35 -0500] info [cpsrvd] 12.3.14.75 NEW root:tvf32S0eomRni4nplg7OMXgj1kS8Jx3jhSeccZPRyHwsMIENmyhcxE17NCBDllTk address=12.3.14.75,app=whostmgrd,creator=root,method=handle_form_login,path=form,possessed=0<br>    [2015-10-30 12:24:06 -0500] info [cpsrvd] 14.2.19.78 NEW user:TIg1FiIdR6eTnKtYr7VmYGKpYB9srb0yvjHkkA1PeYOB6Y2naymPktSsjAob3pX0 address=14.2.19.78,app=cpaneld,creator=user,method=handle_form_login,path=form,possessed=0<br>``` |

* * *

##### `/usr/local/cpanel/logs/setupdbmap_log`

This file contains the cPanel account’s database-related activities.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>    [2014-05-06 02:57:08 -0500] info [setupdbmap] Begin setupdbmap<br>    [2014-05-06 02:57:08 -0500] info [setupdbmap] Updating MySQL users<br>    [2014-05-06 02:57:09 -0500] info [setupdbmap] Processing MySQL databases and database users ...<br>    [2014-05-06 02:57:09 -0500] info [setupdbmap] Finished with MySQL users<br>``` |

* * *

##### `/usr/local/cpanel/logs/stats_log`

This file contains the bandwidth statistics for all of the server’s cPanel accounts.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>    [2015-10-30 12:12:30 -0500] Process bandwidth for domain1<br>    [2015-10-30 12:12:30 -0500] Process bandwidth for domain2<br>    [2015-10-30 12:12:30 -0500] Process bandwidth for domain3<br>``` |

* * *

##### `/usr/local/cpanel/logs/tailwatchd_log`

This file contains the [Tailwatch Driver’s](https://docs.cpanel.net/knowledge-base/cpanel-product/tailwatch/) (`tailwatchd`) logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>    [131557] [2015-10-30 13:00:00 -0500] [Cpanel::TailWatch::Eximstats] Resetting email limits to new starttime of 1446228000<br>    [131557] [2015-10-30 14:00:00 -0500] [Cpanel::TailWatch::Eximstats] Resetting email limits to new starttime of 1446231600<br>``` |

* * *

##### `/home/USER/logs/publish_timestamp.log`

This file contains the logs and download status of files from the [Sitejet Website Builder (CMS)](https://help.sitejet.io/article/536-overview-website-builder-cms).

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697184136772)

```bash
[2024-02-02 16:22:45 -0600] info [uapi] [0 s] Starting sync for sub1.nositejet.tld at 1706912565.
[2024-02-02 16:22:45 -0600] info [uapi] [0 s] Download sitemap xml:https://123456789.preview.sitehub.io/sitemap.xml
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] Store content for /sitemap.xml
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] Save file /home/nositejet/sub1.nositejet.tld/sitemap.xml
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] Prepare request for https://123456789.preview.sitehub.io
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] URI: 'https://123456789.preview.sitehub.io', 200
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] Prepare request for https://123456789.preview.sitehub.io/legal-notice
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] URI: 'https://123456789.preview.sitehub.io/legal-notice', 200
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] Prepare request for https://123456789.preview.sitehub.io/privacy
[2024-02-02 16:22:46 -0600] info [uapi] [1 s] URI: 'https://123456789.preview.sitehub.io/privacy', 200
```

* * *

##### `/var/cpanel.bandwidth.cache`

This file contains the cached bandwidth history for each cPanel account on your server.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>    bucktopia.com<br>    xtest1<br>    domain1<br>    domain4<br>``` |

* * *

##### `/var/cpanel/accounting.log`

This file contains records of cPanel account actions, such as creation and deletion.

The system prints these records in the following standardized order:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Thu Jun 11 13:33:19 2015:ADDRESELLER:root:root:example.com:example<br>Fri Oct 30 12:57:29 2015:CHANGEOWNER:root:root:example.com:example:root:example<br>``` |

1. Time and date — The time and date when you or another user on your server performed the account action in `WD MM DD:HH:mm:SS YYYY` format, where:
   - `WD` represents the day of the week.
   - `MM` represents the month.
   - `DD` represents the day of the month.
   - `HH` represents the hour in 24-hour time.
   - `mm` represents the minute.
   - `SS` represents the second.
   - `YYYY` represents the year.
2. Operation — The action that you performed. For example, all of the following are potential actions:
   - `CREATEAPITOKEN` means that you have created an API token.
   - `ADDRESELLER` means that you have added a reseller.
   - `CHANGEOWNER` means that you have changed an account’s owner.
3. Operating account — The account with which you performed the action. For example, if you were logged in as `example` when you suspended an account, the third value in the `accounting.log` entry would be `example`.

4. System account — The account which performed the action. Most internal actions execute as `root`, even if you are not logged in as the `root` user.






Note:




Some actions output the operating account into the fourth field instead of the system account.



Some account actions add extra fields. The following operations print extra fields:

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697191205124)

| Operation | Description | Fifth field | Sixth field | Seventh field | Eighth field |
| --- | --- | --- | --- | --- | --- |
| `ASSIGN_ACCOUNT_ENHANCEMENT` | You have assigned a new [account enhancement](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) to a cPanel account. | **Name** — The name of the third-party application that you allowed your cPanel account to access. | **Account** — The username of the cPanel account that you allowed to access the third-party application. | None. | None. |
| `UNASSIGN_ACCOUNT_ENHANCEMENT` | You have unassigned an [account enhancement](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#account-enhancements) to a cPanel account. | **Name** — The name of the third-party application that you have disallowed your cPanel account to access. | **Username** — The username of the cPanel account that you have disallowed to access the third-party application. | None. | None. |
| `CREATE` | You have created a new cPanel account. | **Domain** — The primary domain you associated with your new cPanel account. | **Username** — The username of your new cPanel account. | None. | None. |
| `CREATERESELLERWITHOUTDOMAIN` | You have created a new [cPanel reseller account](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/) **without** an associated domain. | **Username** — The username of your new reseller account. | None. | None. | None. |
| `CREATEAPITOKEN` | You have created a new API token. | **`not-applicable`** — The string `not-applicable`. | **Name** — The name of the created API token. | None. | None. |
| `UPDATEAPITOKEN` | You have created a new API token. | **`not-applicable`** — The string `not-applicable`. | **Name** — The name of the created API token. | None. | None. |
| `REVOKEAPITOKEN` | You have created a new API token. | **`not-applicable`** — The string `not-applicable`. | **Name** — The name of the created API token. | None. | None. |
| `CHANGEOWNER` | You have changed the WHM account that owns a [cPanel reseller account.](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts/) | **Domain** — The domain of the cPanel reseller account whose owner you are changing, or an empty string if the reseller did not have a primary domain. | **Reseller username** — The username of the cPanel reseller account whose owner you are changing. | **Old owner username** — The username of the WHM account that used to own the cPanel reseller account. | **New owner username** — The username of the WHM account that you assigned ownership of the cPanel reseller account. |
| `SUSPEND` | You have suspended a cPanel account. | **Username** — The suspended cPanel account username. | **Domain** — The suspended cPanel account’s primary domain. | **Reason** — The reason why you suspended the cPanel account. | None. |
| `UNSUSPEND` | You have restored a cPanel account from suspension. | **Username** — The restored cPanel account username. | **Domain** — The restored cPanel account’s primary domain. | **Reason** — The reason why you restored the cPanel account. | None. |
| `GET_TFA_CONFIG_FOR_USER` | You have retrieved a cPanel account’s two-factor authentication information. This includes the 2FA information for the [email](https://docs.cpanel.net/cpanel/email/email-accounts/) and [team user](https://docs.cpanel.net/cpanel/preferences/manage-team/) accounts that the cPanel account manages. | **User** — The cPanel account’s username. | **Data** — The username of the retrieved cPanel account, email account, or team user. | None. | None. |
| `PURGE_TFA_CONFIG_FOR_USER` | You have **deleted** a cPanel account’s two-factor authentication information. This includes the 2FA information for the [email](https://docs.cpanel.net/cpanel/email/email-accounts/) and [team user](https://docs.cpanel.net/cpanel/preferences/manage-team/) accounts that the cPanel account manages. | **User** — The cPanel account’s username. | **Data** — The username of the cPanel account, email account, or team user whose 2FA data you deleted. | None. | None. |
| `SET_TFA_CONFIG_FOR_USER` | You have set a cPanel account’s two-factor authentication information. This includes the 2FA information for the [email](https://docs.cpanel.net/cpanel/email/email-accounts/) and [team user](https://docs.cpanel.net/cpanel/preferences/manage-team/) accounts that the cPanel account manages. | **User** — The cPanel account’s username. | **Data** — The username of the cPanel account, email account, or team user for which you set 2FA information. | None. | None. |

* * *

##### `/var/log/chkservd.log`

This file contains the service status logs.

```bash
[2015-11-02 13:52:20 -0500] Service check ....queueprocd [[check command:+][socket connect:N/A]]...named [[check command:+][socket connect:N/A]]...mysql [[check command:+][socket connect:N/A]]...imap [[socket_service_auth:1][check command:+][socket connect:+]]...ftpd [[check command:+][socket connect:+]]...entropychat [[check command:N/A][socket connect:N/A]]...cpsrvd [[http_service_auth:1][check command:N/A][socket connect:+]]...cpanellogd [[check command:+][socket connect:N/A]]...clamd [[check command:+][socket connect:N/A]]...Done
```

* * *

##### `/var/log/cpanel-install.log`

This file contains the cPanel & WHM installation logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>    2013-07-09 16:39:57  152 (DEBUG):   - ssystem [END]<br>    2013-07-09 16:39:57  151 ( INFO):  - Enabling sshd<br>    2013-07-09 16:39:57  152 (DEBUG):   - ssystem [BEGIN]: /sbin/chkconfig --level 35 sshd on<br>    2013-07-09 16:39:57  152 (DEBUG):   - ssystem [END]<br>    2013-07-09 16:39:57  488 ( INFO): Enabling cphulkd ...<br>    2013-07-09 16:39:57  495 ( INFO): Done<br>    2013-07-09 16:39:57  167 ( INFO): cPanel install finished in 69 minutes and 29 seconds!<br>``` |

* * *

### PHP and PHP-FPM

##### `/usr/local/cpanel/logs/php-fpm/error.log`

This file contains PHP-FPM implementation errors. These errors include errors for the `cpsrvd` and `cpdavd` services.

Note:

This file does **not** include errors for customer sites.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>    [06-Nov-2015 08:52:18] ERROR: [pool no] please specify user and group other than root<br>    [06-Nov-2015 08:52:18] ERROR: FPM initialization failed<br>    [06-Nov-2015 08:55:32] ERROR: [pool no] please specify user and group other than root<br>    [06-Nov-2015 08:55:32] ERROR: FPM initialization failed<br>    [06-Nov-2015 08:57:52] ERROR: [pool no] please specify user and group other than root<br>    [06-Nov-2015 08:57:52] ERROR: FPM initialization failed<br>``` |

* * *

##### `/var/cpanel/php-fpm/USER/logs/slow.log`

This file contains scripts that run unusually slow for a user.

* * *

##### `/var/cpanel/php-fpm/USER/logs/error.log`

This file contains the user’s error logs.

* * *

##### `/home/USER/logs/.php.error.log`

This file contains internal cPanel PHP-FPM execution errors. For example, PHP-FPM errors in Roundcube will appear in this file.

Note:

- This file does **not** include errors for customer sites.

* * *

### Services Directories

##### `/usr/local/cpanel/logs/cpbackup`

This directory contains the [cPanel backup](https://docs.cpanel.net/cpanel/files/backup-for-cpanel) log files.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>1445324403.log<br>1445497204.log<br>1445925603.log<br>1446098403.log<br>``` |

* * *

##### `/usr/local/cpanel/logs/cpbackup_transporter`

This directory contains the cPanel Backup Transporter’s log files.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>cpbackup_transporter.1446102630.log<br>cpbackup_transporter.1446102672.log<br>``` |

* * *

##### `/usr/local/cpanel/logs/packman/`

This directory contains the [EasyApache](https://docs.cpanel.net/ea4/) build log files.

```bash
build.1439814755.env  build.1439820240.env
```

* * *

##### `/usr/local/cpanel/logs/update_analysis`

This directory contains the update process’s `.tar` files.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>2015-08-20T08:15:06Z.tar.gz<br>2015-09-13T08:15:07Z.tar.gz<br>2015-10-07T08:15:10Z.tar.gz<br>``` |

* * *

##### `/var/cpanel/bandwidth/USER`

This directory contains each account’s bandwidth usage logs.

```bash
fredfred-smtp-rate.rrd  barney-all-rate.rrd
```

* * *

##### `/var/cpanel/logs`

This directory contains account transfer log files and other, miscellaneous log files.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>cpaddonsup.1444377665.txt<br>cpaddonsup.1445155265.txt<br>cpaddonsup.1445932864.txt<br>``` |

* * *

##### `/var/cpanel/updatelogs`

This directory contains the system’s update log files.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>update.1446018721.log<br>update.1446191521.log<br>update.1446367921.log<br>``` |

* * *

##### `/var/cpanel/logs/mysql_upgrade.log`

This directory contains the account’s [MySQL upgrade](https://docs.cpanel.net/whm/sql-services/mysql-or-mariadb-upgrade) logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>unattended_background_upgrade.error<br>unattended_background_upgrade.log<br>unattended_background_upgrade.output<br>unattended_background_upgrade.result<br>``` |

* * *

##### `/home/USER/logs/roundcube`

This directory contains the log files for Roundcube Webmail with a SQLite backend.

```bash
roundcube_.log
```

* * *

##### `/var/cpanel/roundcube/log`

This directory contains the log files for Roundcube Webmail with a MySQL backend.

```bash
roundcube_.log
```

* * *

##### `/var/cpanel/transfer_sessions`

This directory contains subdirectories for transfer and restore sessions.

Each transfer and restore session’s subdirectory contains the session’s log files in a line-delimited JSON format. Each log file contains the following information:

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697200844169)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>``` | ```bash<br>{<br>  "data": {<br>    "log":<br>"{\"pid\":\"14358\",\"contents\":{\"action\":\"start\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"msg\":\"copyacct\",\"action\":\"initiator\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"msg\":\"1.6\",\"action\":\"version\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"msg\":\"3\",\"action\":\"queue_count\",\"queue\":\"TRANSFER\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"msg\":\"3\",\"action\":\"queue_count\",\"queue\":\"RESTORE\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"msg\":\"vm5.docs.cpanel.net\",\"action\":\"remotehost\",\"child_number\":0},\"type\":\"control\"}\n{\"pid\":\"14360\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"action\":\"start\",\"queue\":\"TRANSFER\",\"item_name\":\"Account\",\"child_number\":1},\"type\":\"control\"}\n{\"pid\":\"14360\",\"contents\":{\"msg\":\"item-TRANSFER_AccountRemoteRoot_fredfred\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"TRANSFER\",\"child_number\":1,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_fredfred\"},\"type\":\"control\"}\n{\"pid\":\"14361\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"action\":\"start\",\"queue\":\"TRANSFER\",\"item_name\":\"Account\",\"child_number\":2},\"type\":\"control\"}\n{\"pid\":\"14361\",\"contents\":{\"msg\":\"item-TRANSFER_AccountRemoteRoot_colin\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"TRANSFER\",\"child_number\":2,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_colin\"},\"type\":\"control\"}\n{\"pid\":\"14362\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"action\":\"start\",\"queue\":\"TRANSFER\",\"item_name\":\"Account\",\"child_number\":3},\"type\":\"control\"}\n{\"pid\":\"14362\",\"contents\":{\"msg\":\"item-TRANSFER_AccountRemoteRoot_stacy\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"TRANSFER\",\"child_number\":3,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_stacy\"},\"type\":\"control\"}\n{\"pid\":\"14362\",\"contents\":{\"msg\":{\"warnings\":0,\"dangerous_items\":0,\"contents\":{\"dangerous_items\":null,\"altered_items\":null},\"skipped_items\":0,\"altered_items\":0,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"TRANSFER\",\"child_number\":3,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_stacy\"},\"type\":\"control\"}\n{\"pid\":\"14361\",\"contents\":{\"msg\":{\"warnings\":0,\"dangerous_items\":0,\"contents\":{\"dangerous_items\":null,\"altered_items\":null},\"skipped_items\":0,\"altered_items\":0,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"TRANSFER\",\"child_number\":2,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_colin\"},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"action\":\"start\",\"queue\":\"RESTORE\",\"item_name\":\"Account\",\"child_number\":1},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"msg\":\"item-RESTORE_AccountRemoteRoot_stacy\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"logfile\":\"item-RESTORE_AccountRemoteRoot_stacy\"},\"type\":\"control\"}\n{\"pid\":\"14365\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"action\":\"start\",\"queue\":\"RESTORE\",\"item_name\":\"Account\",\"child_number\":2},\"type\":\"control\"}\n{\"pid\":\"14365\",\"contents\":{\"msg\":\"item-RESTORE_AccountRemoteRoot_colin\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"RESTORE\",\"child_number\":2,\"logfile\":\"item-RESTORE_AccountRemoteRoot_colin\"},\"type\":\"control\"}\n{\"pid\":\"14360\",\"contents\":{\"msg\":{\"warnings\":0,\"dangerous_items\":0,\"contents\":{\"dangerous_items\":null,\"altered_items\":null},\"skipped_items\":0,\"altered_items\":0,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"TRANSFER\",\"child_number\":1,\"logfile\":\"item-TRANSFER_AccountRemoteRoot_fredfred\"},\"type\":\"control\"}\n{\"pid\":\"14360\",\"contents\":{\"action\":\"complete\",\"queue\":\"TRANSFER\",\"child_number\":1},\"type\":\"control\"}\n{\"pid\":\"14362\",\"contents\":{\"action\":\"complete\",\"queue\":\"TRANSFER\",\"child_number\":3},\"type\":\"control\"}\n{\"pid\":\"14361\",\"contents\":{\"action\":\"complete\",\"queue\":\"TRANSFER\",\"child_number\":2},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"msg\":{\"warnings\":2,\"dangerous_items\":0,\"contents\":{\"dangerous_items\":[],\"altered_items\":[]},\"skipped_items\":10,\"altered_items\":0,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"stacy\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"logfile\":\"item-RESTORE_AccountRemoteRoot_stacy\"},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"action\":\"start\",\"queue\":\"RESTORE\",\"item_name\":\"Account\",\"child_number\":1},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"msg\":\"item-RESTORE_AccountRemoteRoot_fredfred\",\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"item_name\":\"Account\",\"action\":\"process-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"logfile\":\"item-RESTORE_AccountRemoteRoot_fredfred\"},\"type\":\"control\"}\n{\"pid\":\"14365\",\"contents\":{\"msg\":{\"warnings\":4,\"dangerous_items\":1,\"contents\":{\"dangerous_items\":[[[\"Mysql\",\"_restore_mysql\",104],\"MySQL:<br> Skipping grants for these MySQL databases: colin_%. These databases<br>don't exist in the<br>archive.\",null]],\"altered_items\":[[[\"Mysql\",\"_update_dbname\",437],\"mySQL<br> database \u201ccolin_testdatabase\u201d restored as<br>\u201ctestdatabase\u201d\",[\"Rename\",\"\/scripts5\/rename_mysql_db\",{\"new\":\"testdatabase\",\"orig\":\"colin_testdatabase\"}]],[[\"Mysql\",\"_update_dbuser_name\",348],\"mySQL<br> user \u201ccolin\u201d restored as<br>\u201ccolin\u201d\",[\"Rename\",\"\/scripts5\/rename_mysql_user\",{\"new\":\"colin\",\"orig\":\"colin\"}]]]},\"skipped_items\":10,\"altered_items\":1,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"colin\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"RESTORE\",\"child_number\":2,\"logfile\":\"item-RESTORE_AccountRemoteRoot_colin\"},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"msg\":{\"warnings\":2,\"dangerous_items\":0,\"contents\":{\"dangerous_items\":[],\"altered_items\":[]},\"skipped_items\":11,\"altered_items\":0,\"message\":null},\"item_type\":\"AccountRemoteRoot\",\"item\":\"fredfred\",\"item_name\":\"Account\",\"action\":\"success-item\",\"queue\":\"RESTORE\",\"child_number\":1,\"logfile\":\"item-RESTORE_AccountRemoteRoot_fredfred\"},\"type\":\"control\"}\n{\"pid\":\"14363\",\"contents\":{\"action\":\"complete\",\"queue\":\"RESTORE\",\"child_number\":1},\"type\":\"control\"}\n{\"pid\":\"14365\",\"contents\":{\"action\":\"complete\",\"queue\":\"RESTORE\",\"child_number\":2},\"type\":\"control\"}\n{\"pid\":\"14358\",\"contents\":{\"action\":\"complete\",\"child_number\":0},\"type\":\"control\"}\n"<br>  },<br>  "metadata": {<br>    "version": 1,<br>    "reason": "OK",<br>    "result": "1",<br>    "command": "fetch_transfer_session_log"<br>  }<br>}_<br>``` |

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697201456985)

| Key | Type | Description | Possible values | Example |
| --- | --- | --- | --- | --- |
| `pid` | _integer_ | The process ID under which the command in the log entry ran. | An integer value. | `14538` |
| `indent` | _integer_ | The level of indentation to display. | A valid positive integer. | `1` |
| `type` | string | The type of log file entry. | - out<br>- warn<br>- success<br>- failure<br>- control | `control` |
| `partial` | _Boolean_ | We do not currently use this key. | `0` is the **only** possible value. | `0` |
| `contents` | _hash_ | A hash of transfer or restore session information. | This hash contains the `action`, `child_number`, `dangerous_items`, `item`, `item_name`, `item_type`, `local_item`, `logfile`, `message`, `msg`, `queue`, `skipped_items`, and `warnings` keys. |  |
| `action` | _string_ | The action for the system to execute. <br> The log file contains this key in the `content` hash. | A valid string. | `start-item` |
| `child_number` | _integer_ | The number of child processes in the transfer or restore process. <br> The log file contains this key in the `content` hash. | A positive integer. | `1` |
| `dangerous_items` | _integer_ | The number of items in the transferred or restored account that the system flagged as potentially dangerous. <br> The log file contains this key in the `content` hash. | A positive integer. | `1` |
| `item` | _string_ | The name of the account to restore or transfer. <br> The log file contains this key in the `content` hash. | A string value. | `cptech` |
| `item_name` | _string_ | The name of the item to transfer or restore. <br> The log file contains this key in the `content` hash. | A string value. | `Account` |
| `item_type` | _string_ | The specific item to transfer or restore. <br> The log file contains this key in the `content` hash. | A string value. | `cptech` |
| `local_item` | _string_ | The item to restore locally. <br> The log file contains this key in the `content` hash. | A string value. | `AccountLocal` |
| `logfile` | _string_ | The absolute filepath for the log file. <br> The log file contains this key in the `content` hash. | A valid absolute filepath. | `item-RESTORE_AccountLocal_cptech` |
| `message` | _string_ | A message about the transfer or restore process. <br> The log file contains this key in the `content` hash. | A string value. | `null` |
| `msg` | _string_ | Additional information about the transfer or restore process. <br> The log file contains this key in the `content` hash. | A string value. | `null` |
| `queue` | _string_ | The process that the system performed on the account. <br> The log file contains this key in the `content` hash. | - `TRANSFER`<br>- `RESTORE` | `RESTORE` |
| `skipped_items` | _integer_ | The items in the account that the transfer or restore process skipped. <br> The log file contains this key in the `content` hash. | A positive integer. | `1` |
| `warnings` | _integer_ | The number of warnings that the system returned during the transfer or restore process. <br> The log file contains this key in the `content` hash. | A positive integer. | `2` |

* * *

## FTP

### FTP Files

##### `/etc/apache2/logs/domlogs/ftpxferlog`

This file contains the FTP transfer logs for users on webservers that run EasyApache 4.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>user<br>user1<br>user2<br>``` |

* * *

### FTP Directories

##### `/etc/apache2/logs/domlogs`

This directory contains the FTP transaction logs for domains which exist on webservers that run EasyApache 4.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>domain1/<br>example.com<br>domain1.com<br>domain1.com-bytes_log<br>``` |

* * *

## Mail

### Mail Files

##### `/home/USER/.z-push/log/z-push.log`

This file contains the account’s Z-Push - ActiveSync Support logs. The [Z-Push - ActiveSync Support](https://docs.cpanel.net/knowledge-base/cpanel-developed-plugins/calendar-and-contacts-server/#z-push-activesync-support) plugin allows users to sync cPanel calendars, contacts, and email on Android™ devices.

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697206061793)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>``` | ```bash<br>01/06/2021 21:08:37 [ 2274] [ INFO] [user1@example.com] Options request<br>01/06/2021 21:08:37 [ 2274] [ INFO] [user1@example.com] cmd='Options' memory='4.20 MiB/6.00 MiB' time='1.00s' devType='ExampleDevice' devId='exampledevid' getUser='user1@example.com' from='10.0.0.0' idle='0s' version='exampleversion' method='OPTIONS' httpcode='200'<br>01/06/2021 21:08:37 [ 2274] [WARN] [user1@example.com] Unknown:0 Unknown: SECURITY PROBLEM: insecure server advertised AUTH=PLAIN (errflg=1) (8)<br>01/06/2021 21:08:38 [ 2291] [ INFO] [user1@example.com] ExportChangesDiff->InitializeExporter(): Found '7' changes for 'hierarchy'<br>01/06/2021 21:08:38 [ 2291] [ INFO] [user1@example.com] cmd='FolderSync' memory='5.73 MiB/6.00 MiB' time='0.67s' devType='ExampleDevice' devId='exampledevid' getUser='user1@example.com' from='10.0.0.0' idle='0s' version='exampleversion' method='POST' httpcode='200'<br>01/06/2021 21:08:40 [ 2301] [ INFO] [user1@example.com] cmd='ResolveRecipients' memory='5.14 MiB/6.00 MiB' time='0.70s' devType='ExampleDevice' devId='exampledevid' getUser='user1@example.com' from='10.0.0.0' idle='0s' version='exampleversion' method='POST' httpcode='200'<br>01/06/2021 21:08:40 [ 2316] [ INFO] [user1@example.com] cmd='Settings' memory='5.14 MiB/6.00 MiB' time='0.37s' devType='ExampleDevice' devId='exampledevid' getUser='user1@example.com' from='10.0.0.0' idle='0s' version='exampleversion' method='POST' httpcode='200'<br>01/06/2021 21:08:43 [ 2334] [ INFO] [user1@example.com] SyncCollections->CheckForChanges(): Waiting for store changes... (lifetime 880 seconds)<br>01/06/2021 21:08:47 [ 2344] [ INFO] [user1@example.com] BackendIMAP->GetMessageList('INBOX','0000000000'): 0 result for the search or error: SECURITY PROBLEM: insecure server advertised AUTH=PLAIN<br>01/06/2021 21:08:47 [ 2344] [ INFO] [user1@example.com] cmd='Sync' memory='5.64 MiB/6.00 MiB' time='0.74s' devType='ExampleDevice' devId='exampledevid' getUser='user1@example.com' from='10.0.0.0' idle='0s' version='exampleversion' method='POST' httpcode='200'<br>``` |

* * *

##### `/home/USER/.z-push/log/z-push-error.log`

This file contains the account’s Z-Push - ActiveSync Support error logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>01/06/2021 21:08:37 [ 2274] [WARN] [user1@example.com] Unknown:0 Unknown: SECURITY PROBLEM: insecure server advertised AUTH=PLAIN (errflg=1) (8)<br>01/06/2021 21:09:30 [ 2498] [WARN] [user2@example.com] Unknown:0 Unknown: SECURITY PROBLEM: insecure server advertised AUTH=PLAIN (errflg=1) (8)<br>``` |

* * *

##### `/var/log/exim_mainlog`

This file contains Exim’s mail receipt and delivery logs for the cPanel account’s domains.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>2015-12-07 09:23:14 [3428] luggage-1234Bz-Rm H=mailhost.domain.com<br>[192.168.0.20]:58241 I=[1.0.0.127]:25 Warning: "SpamAssassin as<br>theuser detected message as NOT spam (0.0)"<br>``` |

* * *

##### `/var/log/exim_paniclog`

This file contains Exim’s severe error logs.

Warning:

This file should not contain any entries. If this file contains entries, thoroughly investigate the entries and contact your hosting provider.

* * *

##### `/var/log/exim_rejectlog`

This file contains a log of messages that the system rejected due to ACLs.

For more information, read our [_Exim Configuration Manager Basic Editor_](https://docs.cpanel.net/whm/service-configuration/exim-configuration-manager-basic-editor) documentation.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>2015-12-4 08:27:23 refused relay (host) to<br><user@example.com> from <example@user.com><br>H=113-43-173-020.user.example.net (smtp.example.com)<br>[192.168.0.20]<br>``` |

* * *

##### `/var/log/maillog` (Red Hat-based servers) or `/var/log/mail.log` (Ubuntu servers)

This file contains entries from Dovecot that include IMAP and POP3 login attempts and local mail delivery attempts. You can [enable Additional Dovecot logging](https://docs.cpanel.net/knowledge-base/email/how-to-enable-and-disable-the-dovecot-mail-log-plugin) that adds more detailed transaction logs. This log also contains Apache SpamAssassin scores.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>Nov  3 10:21:30 vm5 dovecot: imap-login: Login: user=<__cpanel__service__auth__imap__orpl7flalajte5t7ahgq2joard0s3szcmltatifzmb_iqv...>, method=PLAIN, rip=127.0.0.1, lip=127.0.0.1, mpid=735381, secured, session=<1adZSaUjRwB/AAAB><br>Nov  3 10:21:30 vm5 dovecot: imap(__cpanel__service__auth__imap__orpl7flalajte5t7ahgq2joard0s3szcmltatifzmb_iqvmragspbfcr3dkrhmzd): Disconnected: Logged out in=11, out=434, bytes=11/434__<br>``` |

* * *

### Mail Directories

##### `/var/spool/exim/input`

This directory contains a log of queued incoming email messages. The system separates these logs in to subdirectories that correspond to the number or letter with which the sender’s name begins.

[Click to view...](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-log-files/#click-to-view---1764175697209537744)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>``` | ```bash<br>1WEayg-0011QH-IC-D<br>1XABSg-003GTw-28-D<br>1XDGag-001MGL-6R-D<br>1XGLEg-0032BQ-6A-D<br>1XJn6g-001kuC-5n-D<br>1YPpqg-001CeH-Gf-D<br>1WEayg-0011QH-IC-H<br>1XABSg-003GTw-28-H<br>1XDGag-001MGL-6R-H<br>1XGLEg-0032BQ-6A-H<br>1XJn6g-001kuC-5n-H<br>1YPpqg-001CeH-Gf-H<br>``` |

* * *

##### `/usr/local/cpanel/3rdparty/mailman/logs`

This directory contains the account’s Mailman logs.

```bash
./  ../  bounce  error  locks  mischief  post  qrunner  smtp  smtp-failure  subscribe  vette
```

* * *

## Memory usage

##### `/var/log/dcpumon/YYYY/MMM/DD`

This file contains information about the processes that consume the most CPU and memory.

- `YYYY` represents a subdirectory that contains a process’s logs by month.
- `MMM` represents a subdirectory within the `YYYY` directory that contains a process’s logs for each day of a month.
- `DD` represents a subdirectory that contains a process’s log for a specific day of the month.

Note:

To interpret the data, use the `/usr/local/cpanel/bin/dcpumonview` file.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>ximstats=0=0=0.456462908976875=0.002==0.001==0=<br>mailman=0.0664235356972792=5.17983251838002=0=12.0=/usr/local/cpanel/3rdparty/bin/python -S /usr/local/cpanel/3rdparty/mailman/cron/checkdbs=6.5=[python]=0.5=crond<br>mailnull=0=0.0561016968838195=0=0.002==0.001==0=<br>mysql=0=8.99548891392477=0=0.002==0.001==0=<br>named=0=0.311152278191386=0=0.002==0.001==0=<br>nobody=0=2.77735281478296=0=0.002==0.001==0=<br>root=5.87086377309829=24.591731611285=2=90.5=/usr/lib/rpm/rpmd --rebuilddb --verbose --verbose --verbose=43.0=cpanellogd - waiting for child to process logs=41.0=/usr/bin/python /usr/sbin/statsnotifer check-admin<br>``` |

* * *

##### `/var/log/munin`

This file contains the account’s Munin logs. Munin is a plugin that displays information about CPU, Exim, Apache, MySQL usage, and other information with the `rrdtool` utility.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>``` | ```bash<br>munin-html.log<br>munin-limits.log<br>munin-update.log<br>``` |

* * *

## MySQL

##### `/var/log/mysqld.log`

This file contains information about the cPanel account’s MySQL databases and errors in MySQL 5.7 and later and MariaDB 10.3 and later.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>151030  2:57:10 [Note] InnoDB: Waiting for purge to start<br>151030  2:57:10 [Note] InnoDB:  Percona XtraDB (http://www.percona.com) 5.6.26-74.0 started; log sequence number 145713856<br>151030  2:57:10 [Note] Plugin 'FEEDBACK' is disabled.<br>151030  2:57:10 [Note] Server socket created on IP: '::'.<br>151030  2:57:11 [Note] /usr/sbin/mysqld: ready for connections.<br>Version: '10.0.22-MariaDB'  socket: '/var/lib/mysql/mysql.sock'  port: 3306  MariaDB Server<br>``` |

* * *

##### `/var/lib/mysql/HOSTNAME.err`

This file contains information about the cPanel account’s MySQL databases and errors in MySQL 5.6 and earlier and MariaDB 10.2 and earlier.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>151030  2:57:10 [Note] InnoDB: Waiting for purge to start<br>151030  2:57:10 [Note] InnoDB:  Percona XtraDB (http://www.percona.com) 5.6.26-74.0 started; log sequence number 145713856<br>151030  2:57:10 [Note] Plugin 'FEEDBACK' is disabled.<br>151030  2:57:10 [Note] Server socket created on IP: '::'.<br>151030  2:57:11 [Note] /usr/sbin/mysqld: ready for connections.<br>Version: '10.0.22-MariaDB'  socket: '/var/lib/mysql/mysql.sock'  port: 3306  MariaDB Server<br>``` |

* * *

## Webservers

### Apache

Note:

If your system manages many domains, we recommend that you enable piped logging to reduce the number of log files that Apache manages. Piped logging allows you to pipe Apache access logs to a separate process so that Apache does not need to restart every time that it processes the logs.

You can enable piped logging in the _Piped Log Configuration_ section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration) interface ( _WHM » Home » Service Configuration » Apache Configuration_).

* * *

##### `/etc/apache2/logs/domlogs/USER`

This directory contains the log data for the user’s account, which exists on a webserver that runs EasyApache 4.

The system creates this directory when the cPanel Log Rotation Configuration (`cpanellogd`) daemon compresses and archives the data that resides in the `/etc/apache2/logs/domlogs/domain-ssl_log` and the `/etc/apache2/logs/domlogs/domain` files. This process begins when the `/usr/local/cpanel/scripts/upcp` script runs and the system analyzes the log data.

Note:

You can also perform this process for individual users with the `/usr/local/cpanel/scripts/runweblogs` command.

The system also performs the following actions:

- Adds a link to the `/etc/apache2/logs/domlogs/USER` directory in the `/home/USER/access_logs` directory.
- Adds a symlink to the log data backup file in the user’s `/home/USER/logs` directory during the archive process.

  - This symlink allows you to access this file while the system archives the file.
  - The symlink’s name reflects the log file’s name, and may contain a `.bkup` file extension.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```bash<br>94.228.34.208 - - [19/Nov/2015:08:45:09 -0600] "GET /robots.txt HTTP/1.1" 302 235 "-" "robots"<br>94.228.34.208 - - [19/Nov/2015:08:45:09 -0600] "GET /cgi-sys/suspendedpage.cgi HTTP/1.1" 200 7314 "-" "robots"<br>94.228.34.208 - - [19/Nov/2015:08:45:10 -0600] "GET /forums/forumdisplay.php?f=5 HTTP/1.1" 302 239 "-" "magpie-crawler/1.1 (U; Linux amd64; en-GB; +"      <br>94.228.34.208 - - [19/Nov/2015:08:45:10 -0600] "GET /cgi-sys/suspendedpage.cgi?f=5 HTTP/1.1" 200 7314 "-" "magpie-crawler/1.1 (U; Linux amd64; en-GB; +"<br>``` |

* * *

##### `/var/log/apache2/modsec_audit.log`

This file contains the log information for ModSecurity®.

Important:

If the Apache MPM\_ITK module or Mod\_Ruid2 is enabled, you can access the logs in the `/etc/apache2/logs/modsec_audit/USER` directory.

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```bash<br>ModSecurity: Audit log: Failed to lock global mutex: Identifier removed [hostname "www.somedomain.co.uk"] [uri "/index.<a href="http://endlessgeek.com/glossary/php/" title="Glossary: PHP"  data-tooltip="PHP Hypertext Processor - originally Personal Home Page"  class="glossaryLink ">php</a>"] [unique_id "U61fRE1KBCIADWZddE8AAAAP"]<br>``` |

* * *

##### `/var/log/apache2/suexec_log`

This file contains information about suEXEC audit logs. This is useful, for example, to diagnose internal server errors that do not produce relevant information in the error log.

Note:

You can also view Apache’s error logs in cPanel’s [_Errors_](https://docs.cpanel.net/cpanel/metrics/errors) interface ( _cPanel » Home » Metrics » Errors_).

|     |     |
| --- | --- |
| ```<br>1<br>``` | ```bash<br>[Wed Nov 04 09:55:01 2015] [error] [client 127.0.0.1] ModSecurity: Warning. Operator GE matched 5 at TX:inbound_anomaly_score. [file "/usr/local/apache/conf/modsec_vendor_configs/OWASP/rules/RESPONSE-80-CORRELATION.conf"] [line "35"] [id "981204"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5): Request Missing a User Agent Header"] [tag "Host: "] [hostname "example.com"] [uri "/whm-server-status"] [unique_id "VjoqVQoBZCMAA7qYOM4AAAAF"]<br>``` |

* * *

##### `/var/log/apache2/suphp_log`

This file contains information about the suPHP Apache module audit logs. This is useful, for example, to diagnose internal server errors that do not produce relevant information in the error log.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>``` | ```bash<br>[Sat Sep 12 22:16:39 2015] [info] Executing "/home/test/public_html/member.php" as UID 563, GID 563    <br>[Sat Sep 12 22:16:39 2015] [info] Executing "/home/test/public_html/member.php" as UID 563, GID 563<br>[Sat Sep 12 22:16:42 2015] [info] Executing "/home/test/public_html/forums/index.php" as UID 554, GID 554  <br>[Sat Sep 12 22:16:43 2015] [info] Executing "/home/test/public_html/member.php" as UID 563, GID 563    <br>[Sat Sep 12 22:16:43 2015] [info] Executing "/home/test/public_html/forums/index.php" as UID 554, GID 554  <br>[Sat Sep 12 22:16:43 2015] [info] Executing "/home/test/public_html/forums/index.php" as UID 554, GID 554      <br>[Sat Sep 12 22:16:43 2015] [info] Executing "/home/test/public_html/forums/index.php" as UID 554, GID 554<br>``` |

* * *

##### `/var/log/apache2/mod_jk.log`

This file contains the Tomcat connection logs.

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>[Mon Dec 07 12:49:33 2015][1234:274957687980737] [info] ajp_handle_cping_cpong::jk_ajp_common.c (913): timeout in reply<br>[Mon Dec 07 12:49:33 2015][8534:1058674928674576] [info] ajp_handle_cping_cpong::jk_ajp_common.c (913): timeout in reply<br>``` |

* * *

##### `/var/log/apache2/error_log`

This file contains the error logs for webservers and CGI Applications.

```bash
[Wed Nov 04 09:55:01 2015] [error] [client 127.0.0.1] ModSecurity: Warning. Operator GE matched 5 at TX:inbound_anomaly_score. [file "/usr/local/apache/conf/modsec_vendor_configs/OWASP/rules/RESPONSE-80-CORRELATION.conf"] [line "35"] [id "981204"] [msg "Inbound Anomaly Score Exceeded (Total Inbound Score: 5): Request Missing a User Agent Header"] [tag "Host: "] [hostname "example.com"] [uri "/whm-server-status"] [unique_id "VjoqVQoBZCMAA7qYOM4AAAAF"]
```

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [The balance\_linked\_node\_quotas Script](https://docs.cpanel.net/whm/scripts/the-balance_linked_node_quotas-script/)
- [The build\_mysql\_conf Script](https://docs.cpanel.net/whm/scripts/the-build_mysql_conf-script/)
- [The cpanel.config File](https://docs.cpanel.net/knowledge-base/cpanel-product/the-cpanel-config-file/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×