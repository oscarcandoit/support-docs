---
url: "https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/"
title: "How to Install a Python WSGI Application | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#main-content)

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
4. How to Install a Python WSGI Application


[apache](https://docs.cpanel.net/tags/apache/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#overview)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#pre-installation-settings)

* * *

[Systems that run CentOS 7, AlmaLinux OS 8, or Rocky Linux™ 8](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#systems-that-run-centos-7-almalinux-os-8-or-rocky-linux-8)

* * *

[Systems that run AlmaLinux 9 or higher or Rocky Linux 9](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#systems-that-run-almalinux-9-or-higher-or-rocky-linux-9)

* * *

[Install a Python application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#install-a-python-application)

* * *

[Test the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#test-the-application)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#register-the-application)

* * *

[Restart the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#restart-the-application)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#overview)

* * *

[Pre-installation settings](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#pre-installation-settings)

* * *

[Systems that run CentOS 7, AlmaLinux OS 8, or Rocky Linux™ 8](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#systems-that-run-centos-7-almalinux-os-8-or-rocky-linux-8)

* * *

[Systems that run AlmaLinux 9 or higher or Rocky Linux 9](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#systems-that-run-almalinux-9-or-higher-or-rocky-linux-9)

* * *

[Install a Python application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#install-a-python-application)

* * *

[Test the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#test-the-application)

* * *

[Register the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#register-the-application)

* * *

[Restart the application](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#restart-the-application)

* * *

## How to Install a Python WSGI Application

Last modified: _2025 October 3_

* * *

## Overview

This document explains how to install a Python™ WSGI web application on the command line. Python WSGI is a standardized web interface that allows you to run Python applications.

For more information, read the [Python WSGI](https://wsgi.readthedocs.io/en/latest/) documentation and our [How to use Python on AlmaLinux, Rocky Linux, Ubuntu, and CloudLinux 9](https://docs.cpanel.net/knowledge-base/web-services/how-to-use-python-on-almalinux-rocky-linux-ubuntu-and-cloudlinux-9/) documentation.

Warning:

- WebPros International, LLC doesn’t develop or ship Python WSGI web applications and cPanel Technical Support can’t help you with them.
- We are **not** responsible for any data loss.

## Pre-installation settings

Note:

- Perform the steps in this document on the command line as a cPanel user unless otherwise specified.
- You can also use cPanel’s [_Terminal_](https://docs.cpanel.net/cpanel/advanced/terminal-in-cpanel) interface ( _cPanel » Home » Advanced » Terminal_).
- In this document, `pythonapp` represents the application’s name.

Before you begin, your hosting provider must install [pip](https://pip.pypa.io/en/stable/) if it is not already installed. The package name will vary depending on your Python version.

We also **strongly** recommend that you install and use a [framework](https://wsgi.readthedocs.io/en/latest/frameworks.html) with Python WSGI. For example, you may use pip to install [Python Flask](https://flask.palletsprojects.com/en/2.2.x/installation/#install-flask).

This tutorial assumes you are using Flask.

Also, make **certain** that your hosting provider has installed the following EasyApache 4 packages on your server:

### Systems that run CentOS 7, AlmaLinux OS 8, or Rocky Linux™ 8

- `ea-ruby27-mod_passenger`



Note:





This module disables [Apache’s `mod_userdir` module](https://docs.cpanel.net/whm/security-center/apache-mod_userdir-tweak).

- `ea-apache24-mod_env`


We also recommend that your hosting provider install the `ea-ruby27-ruby-devel` module.

### Systems that run AlmaLinux 9 or higher or Rocky Linux 9

- `ea-apache24-mod-passenger`
- `ea-apache24-mod_env`

When you install this Passenger package, the system uses the newest installed versions of Ruby, NodeJS, and Python. This simplifies the installation process and ensures compatibility with future versions.

If you want your new application to use a different version, you **must** configure it manually.

For more information, read our [Using Passenger Applications](https://docs.cpanel.net/knowledge-base/web-services/using-passenger-applications/) documentation.

## Install a Python application

To install an application, perform the following steps:

1. Log in to the server via SSH as a cPanel user.

2. Create the application’s directory, relative to your home directory. To do this, run the following command, where `directoryname` represents the application’s directory:



```bash
mkdir directoryname
```

3. Create a virtual environment to run your application in with the following command, where `python3` represents the version of Python you wish to use and `directoryname` is the application’s directory:



```bash
virtualenv --python=python3 directoryname
```





Note:





If `virtualenv` is not installed on your server, you can install it with the `pip install virtualenv` command.

4. Change to the application’s directory. To do this, run the following command, where `directoryname` represents the application’s directory:



```bash
cd directoryname
```

5. Start the virtual environment with the following command:



```bash
source bin/activate
```

6. Copy the application to your server or create a new one:







[Click to view an example application...](https://docs.cpanel.net/knowledge-base/web-services/how-to-install-a-python-wsgi-application/#click-to-view-an-example-application---1764175698690306489)









|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```bash<br>from flask import Flask<br>app = Flask(__name__)<br>@app.route('/')<br>def hello_world():<br> return 'Hello, World!'<br>if __name__ == '__main__':<br> app.run()<br>``` |

7. Create the `passenger_wsgi.py` file.







Note:





In this example, `username` represents the user name, `pythonapp` represents your Python application, and `app` represents an application function.









|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>``` | ```bash<br>import sys, os<br>INTERP = "/home/username/pythonapp/bin/python"<br>if sys.executable != INTERP: os.execl(INTERP, INTERP, *sys.argv)<br>from pythonapp import app as application<br>``` |

8. Install the application’s dependencies. To do this, create a [pip `requirements.txt` file](https://pip.pypa.io/en/stable/reference/requirements-file-format/), then run the following command:



```bash
pip install -r requirements.txt
```





Note:





You can also install any dependencies in the _Ensure Dependencies_ section of cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).







Warning:





- Your dependency version requirements **must** match your Python version. For example, a dependency that requires Python 2 or earlier will **not** work on an application that you run with Python 3.
- Some dependencies will change what your application requires to work. For example, Flask’s `render_template` dependency **requires** that you keep your `index.html` file in a [`templates` folder.](https://flask.palletsprojects.com/en/2.2.x/quickstart/#rendering-templates)

### Test the application

After you install the application, we recommend that you confirm that it’s active.

1. Run the following command:


```bash
python pythonapp.py
```



The output might resemble the following example:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>``` | ```bash<br><!DOCTYPE html><br>     …<br>       <section class="main"><br>         <h1>Hello world!</h1><br>         Welcome to the example app.<br>       </section><br>     </body><br>     </html><br>	<br>``` |

2. Open another terminal window and log in to the server via SSH as the same cPanel user.
3. Run the following command:



```bash
curl http://localhost:5000
```


The output will resemble the following example:

```bash
Hello, World!
```

### Register the application

After you install the application, register it. To do this, use cPanel’s [_Application Manager_](https://docs.cpanel.net/cpanel/software/application-manager) interface ( _cPanel » Home » Software » Application Manager_).

You can then access the application in a web browser with the following URL:

```bash
http://example.com/pythonapp
```

### Restart the application

To restart your application after you edit it, [create the restart.txt touch file](https://www.phusionpassenger.com/library/admin/apache/restart_app.html#restart-txt). Create this file in the application’s `/tmp` directory. This file directs Phusion Passenger® to restart the application after you modify it. This action applies your changes to the application.

Important:

Phusion Passenger will **only** restart the application if you touch the `restart.txt` touch file.

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