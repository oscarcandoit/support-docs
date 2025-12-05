---
url: "https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/"
title: "The splitlogs Binary | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#main-content)

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
4. The splitlogs Binary


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [apache](https://docs.cpanel.net/tags/apache/) [logs](https://docs.cpanel.net/tags/logs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#overview)

* * *

[Syntax](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#syntax)

* * *

[Arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#arguments)

* * *

[Build arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#build-arguments)

* * *

[Apache configuration arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#apache-configuration-arguments)

* * *

[Performance tweaking arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#performance-tweaking-arguments)

* * *

[The splitlogs configuration file](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#the-splitlogs-configuration-file)

* * *

[Notes about performance concerns](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#notes-about-performance-concerns)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#overview)

* * *

[Syntax](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#syntax)

* * *

[Arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#arguments)

* * *

[Build arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#build-arguments)

* * *

[Apache configuration arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#apache-configuration-arguments)

* * *

[Performance tweaking arguments](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#performance-tweaking-arguments)

* * *

[The splitlogs configuration file](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#the-splitlogs-configuration-file)

* * *

[Notes about performance concerns](https://docs.cpanel.net/knowledge-base/web-services/the-splitlogs-binary/#notes-about-performance-concerns)

* * *

## The splitlogs Binary

Last modified: _2022 July 19_

* * *

## Overview

Important:

To use the `/usr/local/cpanel/bin/splitlogs` binary, you **must** enable the _Enable Piped Apache Logs_ setting in the Piped Log Configuration section of WHM’s [_Apache Configuration_](https://docs.cpanel.net/whm/service-configuration/apache-configuration/) interface ( _WHM » Home » Server Configuration » Apache Configuration_).

The `/usr/local/cpanel/bin/splitlogs` binary optimizes your resources and performance when you create Apache logs. For example, the `/usr/local/cpanel/bin/splitlogs` binary can close file handles without the need to restart Apache. This greatly improves log processing and bandwidth processing performance.

Apache’s default behavior opens and writes to both a byte log file and an access log file for each virtual host in Apache’s configuration file. Because of this, the number of open log files equals twice the number of virtual hosts in Apache’s `/usr/local/apache/conf/httpd.conf` file. However, to reduce Apache’s memory consumption, cPanel & WHM uses [Apache’s piped logs](http://httpd.apache.org/docs/current/logs.html#piped) functionality with the `splitlogs` binary to process Apache log information. The `splitlogs` binary only opens and writes to a single log file when a visitor accesses a virtual host.

cPanel & WHM runs two instances of the splitlogs binary: one to manage the byte log files, and the other to manage the access log files. The `splitlogs` binary extracts the domain name and port from the Apache logs, and uses this information as a space-separated line in the log file. This information determines the log file’s name, which the system writes to either a specified directory, or to the default location for Apache logs in the `/usr/local/apache/` directory.

Note:

If a visitor accesses the shared IP address, the `splitlogs` binary will **only** write to Apache’s byte and access log file. It will not write to the domain log file for the shared IP address.


## Syntax

To call the `splitlogs` binary from the command line, use the following syntax:

```
 /usr/local/cpanel/bin/splitlogs [arguments]
```

## Arguments

Use the following arguments when you call the `splitlogs` binary. If you do not specify an argument, the `splitlogs` binary uses the indicated default value.

### Build arguments

| Argument | Description | Example command |
| --- | --- | --- |
| `--bincheck` | This argument verifies that the `splitlogs` binary built correctly.<br>- If the binary built correctly, the script returns the `BinCheck Ok` message and exits.<br>- If the binary did not build correctly, the script exits without a message. | `/usr/local/cpanel/bin/splitlogs ‑‑bincheck` |

### Apache configuration arguments

| Argument | Description | Example command |
| --- | --- | --- |
| `--dir` | Pass this argument with a value to specify the directory in which you wish to store Apache log files. This value defaults to the `/usr/local/apache` file. | `/usr/local/cpanel/bin/splitlogs ‑‑dir="/logs/apache"` |
| `--suffix` | Pass this argument with a value to specify the suffix to use with unencrypted (non-SSL) Apache access logs. This value defaults to an empty string. | `/usr/local/cpanel/bin/splitlogs ‑‑suffix=".logs"` |
| `--sslsuffix` | Pass this argument with a value to specify the suffix to use with SSL Apache access logs. This value defaults to the `ssl_log` log. | `/usr/local/cpanel/bin/splitlogs ‑‑sslsuffix="ssl_log"` |
| `--sslport` | Pass this argument with a value to specify the port on which the system makes SSL connections. The `splitlogs` binary examines the port number and includes this port number in the log file. This value defaults to `443`. <br>Note:<br>Port 443 is the standard default port number for encrypted (HTTPS) Apache requests. | `/usr/local/cpanel/bin/splitlogs ‑‑sslport="8080"` |
| `--main` | Pass this argument with a value to specify the server’s hostname. By default, Apache routes requests that do not have a virtual host to the default log, rather than to a separate domain log. This argument allows you to specify the server’s hostname to cause the `splitlogs` binary to recognize requests that it should reroute to the default log file. This argument and the `--mainout` argument allow cPanel & WHM to mirror standard Apache behavior. | `/usr/local/cpanel/bin/splitlogs ‑‑main="host.example.com"` |
| `--mainout` | Pass this argument with a value to specify the path to the default access log file in which the system logs requests without a virtual host. This argument and the `‑‑main` argument allow cPanel & WHM to mirror standard Apache behavior. | `/usr/local/cpanel/bin/splitlogs ‑‑mainout="/logs/apache/host.example.com.log"` |

### Performance tweaking arguments

| Argument | Description | Example command |
| --- | --- | --- |
| `‑‑maxopen` | Pass this argument with a value to specify the maximum number of log files that the splitlogs binary can open at the same time.<br>- Pass any whole number between `1` and the maximum number of file handles that your operating system will allow a single process to open.<br>- For more information, read the More about the `--maxopen` argument section below. | `/usr/local/cpanel/bin/splitlogs ‑‑maxopen=20000` |
| `‑‑buffer` | Pass this argument with a value to specify whether to enable buffered file writing.<br>- Specify `yes` to enable buffered file writing, or `no` to disable buffered file writing.<br>- For more information, read the More about the `--buffer` argument section below.<br> In most cases, this value defaults to `yes`. However, under some conditions, this value defaults to `no`. | `/usr/local/cpanel/bin/splitlogs ‑‑buffer=yes` |

#### More about the `--maxopen` argument

Warning:

If you specify a very high value, your operating system may experience problems when it attempts to open files. If this problem occurs, the system returns the `--maxopen` value to the default value (`16000`).


The `--maxopen` argument specifies the maximum number of log files to open at the same time. Use this argument to optimize either speed or resources:

- If you set a low `--maxopen` value, the `splitlogs` binary opens and closes files more often, which reduces performance.
- If you set a high `--maxopen` value, the `splitlogs` binary requires more system resources and operating system file handles, which increases the overall system load. This load increases if you also enable buffered file writing with the `--buffer` argument.
- We recommend that you use the current pattern of access to sites on your system in order to determine the `--maxopen` value. The `splitlogs` log file provides additional information that may help you determine this value. For more information, read the Notes about performance concerns section below.

The `splitlogs` binary only closes files under the following circumstances:

- If the maximum number of files are already open and the `splitlogs` binary needs to write to a new file, the system closes the oldest file and open the new file.
- The `splitlogs` binary closes some open files during log and bandwidth processing.
- The `splitlogs` binary closes all of the open files when Apache restarts.

#### More about the `--buffer` argument

The `--buffer` argument allows you to specify whether to enable buffered file writing. Under most conditions, the `splitlogs` binary uses buffered file writing by default. However, if the `/var/cpanel/conserve_memory` flag file exists, the system disables buffered filing writing by default. The `--buffer` argument overrides these defaults.

- If you enable buffered file writing, the `splitlogs` binary writes to individual log files faster, but requires more memory for each open log file.






Warning:





- To experience this performance increase, the system must have extra memory and the server must possess a light load to allow it to flush buffers in a timely fashion. If the system becomes overloaded or does not have extra memory, buffered file writing **decreases** overall performance.
- If the `splitlogs` binary terminates ungracefully before the buffers flush, you may experience some data loss.

- If you disable buffered file writing, the `splitlogs` binary requires substantially less memory. For example, on a system with an operating system buffer of 4,000 file handles and a `--maxopen` value of `1024`, the system uses 4 MB of memory for each `splitlogs` instance.

## The splitlogs configuration file

When cPanel & WHM rebuilds Apache’s configuration file, the system examines the `/var/cpanel/conf/splitlogs.conf` file. The system uses the contents of this file to set command line arguments for `CustomLog` directives in Apache’s `/usr/local/apache/conf/httpd.conf` file.

The configuration file contains line-delimited `key=value` pairs. The key entries are the same as the command line arguments.

Important:

After you specify custom directives for the `/var/cpanel/conf/splitlogs.conf` file, you **must** rebuild and restart Apache. To do this, run the following

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>/usr/local/cpanel/scripts/rebuildhttpdconf<br>/scripts/restartsrv_httpd<br>``` |

### Notes about performance concerns

- The `splitlogs` binary writes information to its log file whenever it reaches 1,000 times its file handle limit. These log messages indicate how often the `splitlogs` binary opens and closes log files.

  - If you do not encounter these messages in the `splitlogs` binary’s log file, reduce the `--maxopen` value.
  - If you encounter an unusually high number of these messages in the `splitlog` binary’s log file, increase the `--maxopen` value.
- We recommend that you reevaluate these values whenever changes in load occur or whenever the number of domains that the system hosts changes.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Errors](https://docs.cpanel.net/cpanel/metrics/errors/)
- [Log Rotation](https://docs.cpanel.net/whm/service-configuration/log-rotation/)
- [Raw Apache Log Download](https://docs.cpanel.net/whm/account-functions/raw-apache-log-download/)
- [The fix-web-vhost-configuration Script](https://docs.cpanel.net/whm/scripts/the-fix-web-vhost-configuration-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×