---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/"
title: "How to Install a Node.js Application | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#main-content)

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
4. How to Install a Node.js Application


[apache](https://docs.cpanel.net/tags/apache/) [nodejs](https://docs.cpanel.net/tags/nodejs/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#overview)

* * *

[Install a Node.js application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-a-nodejs-application)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#pre-installation-settings)

* * *

[Install the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application)

* * *

[Test the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#test-the-application)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#register-the-application)

* * *

[Restart the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#restart-the-application)

* * *

[Create a custom startup file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#create-a-custom-startup-file)

* * *

[Troubleshoot the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#troubleshoot-the-application)

* * *

[The application will not create an SSL include file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#the-application-will-not-create-an-ssl-include-file)

* * *

[Application port troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#application-port-troubleshooting)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#overview)

* * *

[Install a Node.js application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-a-nodejs-application)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#pre-installation-settings)

* * *

[Install the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#install-the-application)

* * *

[Test the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#test-the-application)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#register-the-application)

* * *

[Restart the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#restart-the-application)

* * *

[Create a custom startup file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#create-a-custom-startup-file)

* * *

[Troubleshoot the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#troubleshoot-the-application)

* * *

[The application will not create an SSL include file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#the-application-will-not-create-an-ssl-include-file)

* * *

[Application port troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#application-port-troubleshooting)

* * *

## How to Install a Node.js Application

Last modified: _2025 November 10_

* * *

## Overview

Warning:

- Because WebPros International, LLC doesn’t develop `Node.js`, cPanel Technical Support **cannot** help you with these steps.
- We recommend that **only** experienced system administrators perform these steps.
- We are **not** responsible for any data loss.
- **Only** perform the steps in this document as a cPanel user. Do **not** perform these steps as the `root` user, as this is a security risk.

This document describes how to install a `Node.js` web application. `Node.js` is a JavaScript runtime that allows you to build scalable web applications. For more information, read the [`Node.js`](https://nodejs.org/docs/latest/api/) documentation.

Note:

- You can also perform these steps in cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_).
- In this document, `nodejsapp` represents the application’s name and `3000` represents represents an open firewall port.

## Install a Node.js application

### Pre-installation settings

Before you begin, verify that your hosting provider has installed the following [EasyApache 4 packages](https://docs.cpanel.net/whm/software/easyapache-4-interface/) on your server:

| OS | Required packages | Recommended packages |
| --- | --- | --- |
| AlmaLinux 8 or Rocky Linux™ 8 | Your hosting provider must install both of the following packages:<br>- `ea-ruby27-mod_passenger`. This module disables [Apache’s `mod_userdir` module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak).<br>- `ea-apache24-mod_env`<br>Your hosting provider must also install one of the following packages:<br>- `ea-nodejs16`<br>- `ea-nodejs18`<br>- `ea-nodejs20`<br>- `ea-nodejs22` | We recommend that your hosting provider install the following package:<br>- `ea-ruby27-ruby-devel` |
| AlmaLinux 9 or higher or Rocky Linux 9 | Your hosting provider must install both of the following packages:<br>- `ea-apache24-mod-passenger`<br>- `ea-apache24-mod_env`<br> When your hosting provider installs the Passenger package, the system uses the newest installed versions of Ruby, NodeJS, and Python. This simplifies the installation process and ensures compatibility with future versions. For more information about the Passenger package, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation. | We recommend that your hosting provider install one of the following packages:<br>- `ea-nodejs16`<br>- `ea-nodejs18`<br>- `ea-nodejs20`<br>- `ea-nodejs22` |
| CentOS 7 | Your hosting provider must install both of the following packages:<br>- `ea-ruby27-mod_passenger`. This module disables [Apache’s `mod_userdir` module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak).<br>- `ea-apache24-mod_env`<br>- `ea-nodejs16` | We recommend that your hosting provider install the following package:<br>- `ea-ruby27-ruby-devel` |
| Ubuntu® | This document does **not** apply to servers running the Ubuntu® operating system. <br>- For more information on installing `Node.js` applications on Ubuntu servers, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation. <br>- For more information about installing `Node.js`, read our [Guide to Node.js™ Installations](https://docs.cpanel.net/knowledge-base/general-server-administration/guide-to-node-js-installations/#installing-nodejs-on-servers-running-ubuntu) documentation. |  |

Note:

- On systems that run AlmaLinux or RockyLinux 9, the default included version of NodeJS is NodeJS 16.
- If you want your new application to use a different version, you **must** configure it manually.

### Install the application

To install an application, perform the following steps:

1. [Log in to the server via SSH](https://docs.cpanel.net/cpanel/security/ssh-access/) as a cPanel user.

2. Create the application’s directory, relative to your home directory. To do this, run the following command:




```perl
mkdir nodejsapp
```

3. Change to the application’s directory.

4. Create the `app.js` file with a text editor.






Important:




We **strongly** recommend that you create the file with this exact name because Passenger searches for this filename when it executes. If you create a startup file with a different name, you must specify the filename in the `httpd.conf` file. To do this, follow the directions in the [Create a custom startup file](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#create-a-custom-startup-file) section below.


5. Add the application’s configuration to the `app.js` file. This will resemble the following example:






|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>``` | ```go<br>const http = require('http')<br>const hostname = '127.0.0.1';<br>const port = 3000;<br>const server = http.createServer((req, res) => {<br>  res.statusCode = 200;<br>  res.setHeader('Content-Type', 'text/plain');<br>  res.end('Hello World! NodeJS \n');<br>});<br>server.listen(port, hostname, () => {<br>  console.log(`Server running at http://${hostname}:${port}/`);<br>});<br>``` |


### Test the application

After you install the application, we recommend that you confirm it’s active. To do this, perform the following steps:

1. Log in to the server via SSH as a cPanel user.

2. Run the following command to start the application, where `**` represents the version of `Node.js` that you want to install:




```perl
/opt/cpanel/ea-nodejs**/bin/node app.js
```



The output will resemble will the following example:



```perl
Server running at http://127.0.0.1:3000
```

3. Open another terminal window and log in to the server via SSH as the same cPanel user.

4. Run the following command:




```perl
curl http://127.0.0.1:3000
```



The output will resemble the following example:



```perl
Hello World! NodeJS
```

5. Stop the testing process by pressing `CTRL + C` keys in the open terminal window, or run the following command:



```bash
ps aux | grep app.js
```



This will return a list of `pid` (process ID) numbers of running programs containing the script name. Stop the test application by running the following command, where `PIDNUMBER` is the process ID:


```bash
kill -9 PIDNUMBER
```


Note:

If you wish to export the `/opt/cpanel/ea-nodejs20/bin` path to your environment, add the following line to your `.bashrc` file, where `##` represents version of `Node.js` that you are using:

```bash
export PATH=/opt/cpanel/ea-nodejs##/bin/:$PATH
```

### Register the application

After you install the application, register it. To do this, use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).

After you register the application, you can access the application in a web browser with the following URL:

```perl
http://example.com/nodejsapp
```

In this example, `example.com` represents your website.

### Restart the application

When you want your application to restart after you edit it, [create the `restart.txt` touch file](https://www.phusionpassenger.com/library/admin/apache/restart_app.html#restart-txt) in the application’s `tmp` directory. This file directs `mod_passenger` to restart the application after you modify it. This action applies your changes to the application.

Important:

- You **must** [touch](https://en.wikipedia.org/wiki/Touch_(command)) the `restart.txt` touch file each time that you want `mod_passenger` to restart the application.
- You **must** [manually create](https://en.wikipedia.org/wiki/Mkdir) the `tmp` directory. For example:

```bash
$appDir/tmp/restart.txt
```

### Create a custom startup file

Passenger searches for the `app.js` filename when it executes. If you create a startup file with a different name, you must create an include file and specify the startup filename there. If you don’t do this, your application won’t function.

To specify the new filename, perform the following steps:

1. Create the `/etc/apache2/conf.d/userdata/ssl/2_4/user/domain.nodejs.conf` file with a text editor.

2. Add the `PassengerStartupFile` variable and the filename as its value in a virtual host container. This will resemble the following example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```go<br>DocumentRoot /user/example.com/public<br># Use server.js as the startup file (entry point file) for<br># your Node.js application, instead of the default app.js<br>PassengerStartupFile index.js<br>PassengerAppType node<br>PassengerAppRoot /nodejsapp/example.com<br>``` |

3. Rebuild the `httpd.conf` file. To do this, run the following command:




```bash
/usr/local/cpanel/scripts/rebuildhttpdconf
```

4. Restart Apache. To do this, run the following command:




```bash
/usr/local/cpanel/scripts/restartsrv_httpd
```


## Troubleshoot the application

You can find error messages in the application’s `/home/user/nodejsapp/logs` directory.

If you experience issues with your `Node.js` application, use Phusion Passenger’s™ [Troubleshooting Passenger Standalone and `Node.js`](https://www.phusionpassenger.com/library/admin/standalone/troubleshooting/nodejs/#common-problems-specific-to-node.js) documentation to troubleshoot the issue.

### The application will not create an SSL include file

If your application will not create an SSL include file, it’s likely that you are using a `Node.js` application with an addon domain. This issue occurs when the `Node.js` application’s path differs from the addon domain’s document root path.

To fix this issue, you can create an SSL include file for the addon domain. To do this, perform the following steps:

1. Complete the steps to [register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-node.js-application/#register-the-application). This action creates a configuration file that the system will store in the `/etc/apache2/conf.d/userdata/std/2_4/username/example.com/` directory. In this example, `example.com` represents the addon domain name.

2. Copy the configuration file for your addon domain in the `/etc/apache2/conf.d/userdata/std/2_4/username/example.com/` directory to the `/etc/apache2/conf.d/userdata/ssl` directory. To do so, use the following command:




```bash
cp -a /etc/apache2/conf.d/userdata/std/2_4/username/example.com/application-name.conf /etc/apache2/conf.d/userdata/ssl/2_4/username/example.com/application-name.conf
```

3. Rebuild the Apache configuration and restart Apache with the following commands:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>/usr/local/cpanel/scripts/rebuildhttpdconf<br>/usr/local/cpanel/scripts/restartsrv_httpd<br>``` |


For more information about these scripts, read [The `rebuildhttpdconf` Script](https://docs.cpanel.net/whm/scripts/the-rebuildhttpdconf-script) and [The `restartsrv` Scripts](https://docs.cpanel.net/whm/scripts/the-restartsrv-script) documentation.

You can now access the `Node.js` application through the addon domain’s URL via HTTP (port `80`) and HTTPS (port `443`).

### Application port troubleshooting

Passenger controls the port on which your `Node.js` application listens when it makes HTTP requests. This is known as reverse port binding. Reverse port binding allows `Node.js` applications to work with Passenger.

If you experience issues with the port on which your `Node.js` applications listen, use Phusion Passenger’s™ [Reverse port binding in `Node.js`](https://www.phusionpassenger.com/library/indepth/nodejs/reverse_port_binding.html) documentation to troubleshoot the issue.

#### Additional Documentation

* * *

- [Apache Configuration](https://docs.cpanel.net/whm/service-configuration/apache-configuration/)
- [Apache Handlers](https://docs.cpanel.net/cpanel/advanced/apache-handlers/)
- [Apache mod\_userdir Tweak](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak/)
- [Apache Status](https://docs.cpanel.net/whm/server-status/apache-status/)
- [DirectoryIndex Priority](https://docs.cpanel.net/whm/service-configuration/directoryindex-priority/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×