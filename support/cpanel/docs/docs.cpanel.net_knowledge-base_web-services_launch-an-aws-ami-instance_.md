---
url: "https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/"
title: "Launch an AWS™ AMI™ Instance | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#main-content)

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
4. Launch an AWS™ AMI™ Instance


[aws](https://docs.cpanel.net/tags/aws/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/) [installation](https://docs.cpanel.net/tags/installation/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#overview)

* * *

[Launch an Amazon AWS instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#launch-an-amazon-aws-instance)

* * *

[Create a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#create-a-key-pair)

* * *

[Add a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#add-a-key-pair)

* * *

[Navigate to the AMI](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#navigate-to-the-ami)

* * *

[Subscribe and verify fulfillment](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#subscribe-and-verify-fulfillment)

* * *

[Verify version settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#verify-version-settings)

* * *

[Verify region settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#verify-region-settings)

* * *

[Continue to launch](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#continue-to-launch)

* * *

[Select an instance type](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#select-an-instance-type)

* * *

[Configure VPC and subnet settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-vpc-and-subnet-settings)

* * *

[Configure security settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-security-settings)

* * *

[Select a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#select-a-key-pair)

* * *

[Launch the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#launch-the-instance)

* * *

[Assign an elastic IP address](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#assign-an-elastic-ip-address)

* * *

[Log in via SSH](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#log-in-via-ssh)

* * *

[Set the root password](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#set-the-root-password)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-whm)

* * *

[Troubleshoot your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#troubleshoot-your-instance)

* * *

[Fix hostname issues](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#fix-hostname-issues)

* * *

[Fix installation issues](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#fix-installation-issues)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#overview)

* * *

[Launch an Amazon AWS instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#launch-an-amazon-aws-instance)

* * *

[Create a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#create-a-key-pair)

* * *

[Add a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#add-a-key-pair)

* * *

[Navigate to the AMI](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#navigate-to-the-ami)

* * *

[Subscribe and verify fulfillment](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#subscribe-and-verify-fulfillment)

* * *

[Verify version settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#verify-version-settings)

* * *

[Verify region settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#verify-region-settings)

* * *

[Continue to launch](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#continue-to-launch)

* * *

[Select an instance type](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#select-an-instance-type)

* * *

[Configure VPC and subnet settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-vpc-and-subnet-settings)

* * *

[Configure security settings](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-security-settings)

* * *

[Select a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#select-a-key-pair)

* * *

[Launch the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#launch-the-instance)

* * *

[Assign an elastic IP address](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#assign-an-elastic-ip-address)

* * *

[Log in via SSH](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#log-in-via-ssh)

* * *

[Set the root password](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#set-the-root-password)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#configure-whm)

* * *

[Troubleshoot your instance](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#troubleshoot-your-instance)

* * *

[Fix hostname issues](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#fix-hostname-issues)

* * *

[Fix installation issues](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#fix-installation-issues)

* * *

## Launch an AWS™ AMI™ Instance

Last modified: _2025 February 13_

* * *

## Overview

This document explains how to launch a cPanel & WHM instance on the [Amazon Web Services™](https://aws.amazon.com/) (AWS) cloud service. Follow this procedure to launch an instance using the cPanel & WHM [Amazon Machine Image™](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html) (AMI).

For video tutorials about this process, view the [cPanel and Amazon AWS playlist](https://www.youtube.com/playlist?list=PLZk46idJS6s66PMRsgfPV0C9gEdsRqPjT) on our YouTube channel.

Warning:

- This document assumes that you will use dedicated DNS instances. You could also use these instructions on dual-use instances that serve as both web servers and nameservers.
- Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.
- We **strongly** recommend that you read [the Amazon AWS User Guide](https://docs.aws.amazon.com/index.html) before you begin this process.
- An incorrect hostname may cause license errors. If you change your server’s hostname, you **must** configure the instance to keep the new hostname. To do this, perform the steps in the [Fix hostname issues](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#fix-hostname-issues) section below.

## Launch an Amazon AWS instance

### Create a key pair

If your AWS account does **not** include at least one key pair, you **must** create one before you can launch your instance. To do this, perform the following steps:

1. Sign in to [your AWS account](https://console.aws.amazon.com/).
2. Click _Services_ in the top-left corner, then select _EC2_ from the _Compute_ menu. The _EC2 Management Console_ will appear.
3. In the left-side menu under _Network & Security_, click _Key Pairs_. The list of available key pairs will appear.
4. Click _Create key pair_. The _Create key pair_ window will appear.
5. Enter a name for the key pair in the _Name_ text box. Do **not** change any default settings.
6. Click _Create key pair_. The list of key pairs will refresh to display the new key pair, and your browser will automatically download the new key pair’s `.pem` file.

After you create the new key pair, it will automatically appear in the list during the instance launch process.

### Add a key pair

To access the instance via SSH, you must first add the key pair to your local system. To do this, perform the following steps for your computer’s operating system:

- [macOS](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#tab-title-1)
- [Windows](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#tab-title-2)

On a macOS® computer that uses the default download folder, perform the following steps:

1. Run the following command, where `example` represents the key pair’s name:


```bash
mv ~/Downloads/example.pem ~/.ssh
```

2. Run the following command to modify the permissions for the `.pem` file, where `example` represents the key pair’s name:


```bash
chmod 600 ~/.ssh/example.pem
```

3. Run the following command to add the key pair, where `example` represents the key pair’s name:


```bash
ssh-add ~/.ssh/example.pem
```


An `Identity added` message will appear.

On a Windows® computer that runs [the PuTTY client](https://www.putty.org/) and uses the default download folder, perform the following steps:

1. From the Windows _Start_ menu, open _PuttyGen_.
2. Under the _Conversions_ heading, click _Import_.
3. Navigate to the _PuTTY Key Generator_ interface. and click _Open_.
4. Enter a passphrase in the _Key passphrase_ and _Confirm passphrase_ text boxes.
5. Click _Save private key_ and save the key as a `.ppk` file.
6. From the Windows _Start_ menu, open _PuTTY_.
7. In the _Session_ interface, from the _Saved Sessions_ menu, select your preferred authorization session and click _Load_.
8. Navigate to the _Auth_ interface under the _SSH_ category.
9. Click _Browse_, select the private key file to upload, and click _Open_.

Note:

For instructions on how to access the command line, read our [How to Access the Command Line](https://docs.cpanel.net/knowledge-base/general-server-administration/how-to-access-the-command-line/) documentation.

### Navigate to the AMI

Navigate to the [cPanel & WHM AWS Marketplace listing](https://aws.amazon.com/marketplace/seller-profile?id=0cd0aa0a-daa0-4b57-9bc5-dfffec41e1da), and choose the AMI you want to install:

- For AlmaLinux, choose [cPanel&WHM for AlmaLinux](https://aws.amazon.com/marketplace/pp/prodview-hgvsqazbjp6sc).
- For Ubuntu®, choose [cPanel&WHM for Ubuntu](https://aws.amazon.com/marketplace/pp/prodview-bdbz4oxxux4wa).
- For Rocky Linux, choose [cPanel&WHM for Rocky Linux](https://aws.amazon.com/marketplace/pp/prodview-tdbqyortfeam4).

Then, click _Continue to Subscribe_.

Important:

WebPros International, LLC **only** supports AMIs that list _cPanel_ or _WebPros International, LLC_ as the seller. You can find seller information immediately below the AMI listing title.

### Subscribe and verify fulfillment

Click _Accept Terms_ to accept the WebPros International, LLC terms and conditions.
The subscription process takes a few minutes. You will receive a notification both on the page and via email when the subscription process is complete.

Once the subscription process is complete, in the top-right corner, click _Continue to Configuration_. Confirm that the system uses _64-bit (x86) Amazon Machine Image (AMI)_ in the _Fulfillment Option_ menu.

### Verify version settings

By default, the system uses the AMI’s default version to configure the instance version. Under _Software version_, verify whether the system selected the desired cPanel version. To select a different version, click _Software version_ and select a version.

Note:

- To improve security for your system, the cPanel & WHM AMI automatically runs the `/usr/local/cpanel/scripts/upcp` script after the instance initializes. This script may alter the AMI’s version number.
- For more information about cPanel & WHM versions, read our [Product Versions and the Release Process](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/) and [cPanel Deprecation Plan](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/) documentation.

### Verify region settings

Under _Region_, ensure that AWS automatically selected the correct region. To select a different region, click _Region_ and select a region.

We **strongly** recommend that you host interconnected servers at Amazon within the same availability zone.

### Continue to launch

In the top-right corner, click _Continue to Launch_. Then, in the _Choose Action_ menu, select _Launch from Website_.

### Select an instance type

Under _EC2 Instance Type_, select the instance type that you wish to use. The list of instance types includes all of the types that the cPanel & WHM AMI supports.

Important:

- Your EC2 instance type determines the rate at which AWS bills you.
- Make **certain** that you select an instance type that includes appropriate resources for the type of system that you wish to run. If you will host a large number of websites or multimedia content, you **must** choose an instance type that **exceeds** our [minimum system requirements](https://docs.cpanel.net/installation-guide/system-requirements/).
- We **strongly** recommend that you do **not** install cPanel & WHM on servers that rely on snapshot data (for example, Amazon EC2™ Spot instances). When these servers revert to snapshot data, the system detects this action as a uniqueness change. This behavior causes these servers’ cPanel & WHM licenses to lock due to the uniqueness changes for that server’s cPanel & WHM license. A locked license disables a cPanel & WHM server.

### Configure VPC and subnet settings

To configure your VPC and subnet settings, perform the following steps:

1. Under _VPC Settings_, verify the Virtual Private Cloud (VPC) that the system selected.

   - To change this setting, select the desired VPC from the menu.
   - To create a new VPC, click _Create a VPC in EC2_.
2. Under _Subnet Settings_, verify the subnet that the system selected.

   - To change the subnet, select the appropriate subnet from the menu.
   - To create a new subnet, click _Create a subnet in EC2_.

For more information about VPC and subnet settings, read Amazon’s [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#how-it-works-subnet) documentation.

### Configure security settings

Under _Security Group_, verify the new instance’s port and security settings.

Warning:

- We **strongly** recommend that you click _Create New Based on Seller Settings_. WebPros International, LLC has configured these settings to meet cPanel & WHM’s [security requirements](https://docs.cpanel.net/knowledge-base/security/recommended-security-settings/) and improve security for your system.
- We recommend that **only advanced users** select _default_.

Click _Create New Based on Seller Settings_, then enter a name for the security group in the _Name your security Group_ text box. Enter a description in the _Description_ text box. Then, click _Save_.

### Select a key pair

Select the desired key pair from the _Key Pair_ menu.

Note:

If you don’t have a key pair available, follow the steps in the [Create a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#create-a-key-pair) and [Add a key pair](https://docs.cpanel.net/knowledge-base/web-services/launch-an-aws-ami-instance/#add-a-key-pair) sections of this document.


### Launch the instance

At the bottom-right corner of the page, click _Launch_. A confirmation page that lists all of your instance’s information will appear.

- Click _Launch_ to launch the instance. The system will return a success message and configuration details.
- In the text box that appears, click _EC2 Console_ to navigate to the _EC2 Management Console_. This interface allows you to launch EC2 instances, manage or check instance status, view DNS information, and perform other instance management tasks.

Note:

New instances may require several minutes to initialize. Until the initialization process finishes, the _Status checks_ column of the EC2 Management Console will display _Initializing_ and a clock icon.

### Assign an elastic IP address

If you stop and restart your instance, Amazon will assign a different IPv4 address to the instance. cPanel & WHM requires a permanent IP address for all installations. Therefore, you **must** assign an elastic IP address to the instance to set a permanent address for the server.

To assign an elastic IP address to the instance, perform the following steps:

01. In the left sidebar, navigate to the _Network & Security_ menu and click _Elastic IPs_. The _Elastic IP addresses_ interface will appear.
02. Click _Allocate Elastic IP address_.
03. Click _Allocate_. A success message will appear.
04. Select the checkbox next to the new elastic IP address that you just created.
05. From the _Actions_ menu, select _Associate Elastic IP address_.
06. Under _Resource type_, select _Instance_.
07. In the _Instance_ menu, select the new instance that you just created.
08. In the _Private IP_ menu, select the appropriate private IP address.
09. Uncheck the _Reassociation_ checkbox.
10. Click _Associate_. A success message will appear.

### Log in via SSH

Note:

Installations can take several minutes to complete. You can monitor the installation process by logging into your AMI instance via SSH.

To log in to the server via SSH and promote yourself to the `root` user, run the following commands for your cPanel & WHM server’s operating system, where `IPADDRESS` represents the server’s public (elastic) IP address:

- For AlmaLinux servers:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>ssh ec2-user@IPADDRESS<br>sudo su -l<br>``` |

- For Ubuntu servers:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>ssh ubuntu@IPADDRESS<br>sudo su -l<br>``` |

- For Rocky Linux servers:





|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```bash<br>ssh rocky@IPADDRESS<br>sudo su -l<br>``` |


### Set the root password

You will need to set the `root` password before you can access cPanel & WHM.

#### Set the root password using the command line

To set the `root` user’s password using the command line, perform the following steps:

1. Enter the `passwd` command.
2. Enter a password.
3. Enter the password again.

The system will set the `root` password.

#### Set the root password using the WHM interface

To set the `root` user’s password in the WHM interface, you **must** wait until the cPanel & WHM installation is complete. Then, perform the following steps:

1. Run the the `/usr/local/cpanel/scripts/whmlogin` script. This creates a single-use session login URL for WHM.






Warning:





Do **not** run this script until the cPanel & WHM installation is complete.

2. To navigate to the single-use session, enter the URL in the address bar of your web browser.
3. Navigate to the [Change Root Password](https://docs.cpanel.net/whm/server-configuration/change-root-password/) interface ( _WHM » Home » Server Configuration » Change Root Password_).
4. Enter a password, then click _Change Password_.

### Log in to WHM

To log in to WHM, perform the following steps:

1. In your preferred browser, navigate to the `https://IPADDRESS:2087` URL, where `IPADDRESS` represents your server’s IP address. The WHM interface will appear.
2. Log in with the `root` username and password you set.
3. Agree to the software license. The _Get started with a Free cPanel Trial!_ interface will appear.
4. You will need to log in to or create a cPanel Store account. For information about how to do this, read our [How to Sign Up for a Trial License](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/#activating-during-getting-started) documentation.
5. After you log in to the cPanel Store and obtain a trial license, click _Server Setup_ in the WHM interface. The _Contact Information_ interface will appear.
6. Enter your contact and nameserver information. The WHM _Home_ interface will appear.

Important:

- cPanel & WHM requires a [valid license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-purchase-a-cpanel-license/). Since this is a new installation, you can activate a free [15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license).
- In order to activate a new license, you **must** have a cPanel Store account with a verified email address.

If WHM displays an error about the license, [check which IP address your license uses](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-fix-license-file-errors/). To change the IP address that the license uses, perform the following steps:

1. Log in to [store.cpanel.net](https://store.cpanel.net/cart/).
2. Click _Manage Licenses_. The _Manage Licenses_ interface will appear.
3. Locate your server’s license.
4. Click the down arrow under _Actions_.
5. Click _Edit IP_. A new window appears.
6. Enter the instance’s new IP address.
7. Click _Save changes_.

### Configure WHM

After you agree to our software license, you’re ready to configure cPanel & WHM.

For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

Important:

AWS will **not** automatically open [SMTP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#smtp) port 25. You may need to open port 25 to use email services on your instance.

To open port 25, open an [AWS support request](https://aws.amazon.com/contact-us/).

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

For information about how to manage the newly-created instance, read Amazon’s [AWS Instance Configuration](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Configure_Instance.html) documentation.

## Troubleshoot your instance

### Fix hostname issues

Note:

If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.


If you change your hostname after you launch your instance, AWS will reset it to the original hostname each time that the instance reboots. To resolve this issue, run the following command:

```bash
printf 'preserve_hostname: true\nmanage_etc_hosts: false\n' > /etc/cloud/cloud.cfg.d/99-preserve-hostname.cfg
```

### Fix installation issues

The cPanel & WHM installation process can fail for reasons not covered in this document.

To learn about common installation problems and solutions, read our [Troubleshoot Your Installation](https://docs.cpanel.net/installation-guide/troubleshoot-your-installation/) documentation.

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×