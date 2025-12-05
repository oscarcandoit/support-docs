---
url: "https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/"
title: "Launch a cPanel & WHM Instance on Alibaba® Cloud | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#main-content)

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
4. Launch a cPanel & WHM Instance on Alibaba® Cloud


[installation](https://docs.cpanel.net/tags/installation/) [cloudprovider](https://docs.cpanel.net/tags/cloudprovider/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#overview)

* * *

[Download our preconfigured security rules file](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#download-our-preconfigured-security-rules-file)

* * *

[Select the cPanel & WHM product](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#select-the-cpanel--whm-product)

* * *

[Configure the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-the-instance)

* * *

[Configure networking options](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-networking-options)

* * *

[Configure virtual private cloud (VPC)](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-virtual-private-cloud-vpc)

* * *

[Assign a public IP address](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#assign-a-public-ip-address)

* * *

[Configure a security group](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-a-security-group)

* * *

[Select system configuration](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#select-system-configuration)

* * *

[Create Elastic IP Address (EIP)](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#create-elastic-ip-address-eip)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-whm)

* * *

[Next steps](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#next-steps)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#overview)

* * *

[Download our preconfigured security rules file](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#download-our-preconfigured-security-rules-file)

* * *

[Select the cPanel & WHM product](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#select-the-cpanel--whm-product)

* * *

[Configure the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-the-instance)

* * *

[Configure networking options](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-networking-options)

* * *

[Configure virtual private cloud (VPC)](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-virtual-private-cloud-vpc)

* * *

[Assign a public IP address](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#assign-a-public-ip-address)

* * *

[Configure a security group](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-a-security-group)

* * *

[Select system configuration](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#select-system-configuration)

* * *

[Create Elastic IP Address (EIP)](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#create-elastic-ip-address-eip)

* * *

[Log in to WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#log-in-to-whm)

* * *

[Configure WHM](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-whm)

* * *

[Next steps](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#next-steps)

* * *

## Launch a cPanel & WHM Instance on Alibaba® Cloud

Last modified: _2024 March 27_

* * *

## Overview

The following document provides the steps to launch a cPanel & WHM instance on Alibaba® Cloud.

Important:

We **strongly** recommend that you read the [Getting Started with Alibaba Cloud](https://www.alibabacloud.com/getting-started) website before you begin this process.

## Download our preconfigured security rules file

Download the [cPanel Alibaba Security Rules](https://docs.cpanel.net/knowledge-base/web-services/cPanel_Alibaba_Security_Rules_v2.json) file. You will use this file [when you configure your security group](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-a-security-group).

This set of security rules provides open access to and from the server. You can refine your security rules later.

## Select the cPanel & WHM product

Perform the following steps to log in to Alibaba’s Marketplace site:

1. Log in to the [Alibaba Cloud](https://www.alibabacloud.com/) website. If you do not already have an Alibaba Cloud account, create one.
2. Navigate to the [cPanel & WHM](https://marketplace.alibabacloud.com/products/201072001/sgcmjj00024779.html?innerSource=search) listing in the Alibaba Cloud Marketplace.
3. Click _Choose Your Plan_. The Elastic Compute Service (ECS) _Custom Launch_ interface will appear.

## Configure the instance

To configure the cPanel & WHM instance, perform the following steps:

1. Select the _Pay-As-You-Go_ billing method.
2. Select a region for the instance. We recommend that you select a region that is near you or your customers.






Important:




We **strongly** recommend that you host interconnected servers at Alibaba within the same region.


3. Select a zone within the region. Do **not** select _Random_.
4. In the _Instance Type_ section, select your desired instance type. For more information about the different instance types, read Alibaba’s [Overview of instance families](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/instance-family) documentation.
5. Confirm that _cPanel & WHM_ appears in the _Image_ text box.
6. In the _Storage_ section, select a **minimum** of 20GB for the System Disk size. We recommend that you select at least 40GB of disk space.
7. Click _Next_. The _Networking_ interface will appear.

## Configure networking options

To configure the networking options for your instance, perform the following steps:

### Configure virtual private cloud (VPC)

If you’ve already set up VPCs on Alibaba, the interface will display your available VPCs. Select the desired VPC.

If this is your first instance, you **must** create a VPC using the following procedure:

1. In the _Network Type_ section, click _Go to the VPC console_. The _VPCs_ interface will open in a new tab.
2. Click _Create VPC_. The _Create VPC_ interface will appear.
3. In the _VPC_ section, enter a label for the _VPC_ in the _Name_ text box.
4. Select one of the recommended CIDR blocks in the _IPv4 CIDR Block_ section.
5. In the _VSwitch_ section, enter a label for the [vSwitch](https://www.alibabacloud.com/help/en/virtual-private-cloud/latest/vpcs-and-vswitchs-overview) in the _Name_ text box. To create additional vSwitches, select _\+ Add_.
6. Select the zone for your instance in the _Zone_ field. You **must** select the same zone that you selected earlier in the [Configure the instance](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#configure-the-instance) section.
7. Click _OK_. A success message will appear.
8. Close the browser tab for the _VPCs_ interface and return to the _Networking_ interface.
9. Click the _Refresh_ (![Refresh](https://docs.cpanel.net/img/alibaba-refresh-icon.png)) button and select the newly-created VPC. The interface will automatically populate the _Switch_ text box.

### Assign a public IP address

Due to networking requirements, you **cannot** run an IPv6-only cPanel & WHM server. You **must** have at least one IPv4 address.

1. In the _Public IP Address_ section, select the _Assign Public IPv4 Address_ checkbox.
2. To choose a bandwidth billing method, select _Pay-By-Traffic_ or _Pay-By-Bandwidth_. To learn more about these billing methods, read Alibaba’s [Public bandwidth](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/public-bandwidth) documentation.
3. Set the _Bandwidth_ slider to the maximum throughput that you expect to send or receive from your instance.

### Configure a security group

Follow this procedure to create a [security group](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/security-groups-overview) to control your instance’s inbound and outbound traffic.

01. In the _Security Group_ section, click _create a security group_. The _Security Group_ interface will appear in a new browser tab.
02. Click _Create Security Group_. The _Create Security Group_ interface will appear.
03. Enter a name for the security group in the _Security Group Name_ text box.
04. Select the VPC that you created earlier in the _Network_ menu.
05. Select _Basic_ or _Advanced_ in the _Security Group_ menu. To learn more about security groups, read Alibaba’s [Security Groups Overview](https://www.alibabacloud.com/help/en/elastic-compute-service/latest/security-groups-overview) documentation.
06. Optionally, enter a description of this security group in the _Description_ text box.
07. Click _Create Security Group_. The new security group will appear in the _Security Groups_ interface.
08. In the _Actions_ column, click _Add Rules_ for the security group you created.
09. Click _Import Security Group Rule_. The _Import Security Group Rule_ window will appear.
10. Click _Select a file_. Select the [cPanel Alibaba Security Rules](https://docs.cpanel.net/knowledge-base/web-services/cPanel_Alibaba_Security_Rules_v2.json) file you downloaded previously.





    Remember:




    This set of security rules provides open access to and from the server. You can refine your security rules later.


11. Click _Start_. The _Import Security Group Rule_ window will close.
12. Close the browser tab, and return to the _Networking_ interface.
13. In the _Security Group_ section, click _Reselect Security Group_. The _Select Security Group_ window will appear.
14. Select the security group that you created, then click _Select_. The _Select Security Group_ window will close.
15. Click _Next_. The _System Configurations_ interface will appear.

## Select system configuration

Follow this procedure to configure your login credentials, instance name, and [hostname](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#hostname).

1. Select _Password_ in the _Login Credentials_ section.
2. Enter a secure password in the _Login Password_ and _Confirm Password_ text boxes.
3. Enter a name for the instance in the _Instance Name_ text box. This is **not** the hostname of the instance. It is the label that will appear in the Alibaba Cloud Console.
4. Optionally, enter a description of the instance in the _Description_ text box.
5. To define the hostname of your server, enter a [fully qualified domain name (FQDN)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#fqdn) in the _Host_ text box.






Warning:





You **cannot** change your hostname within cPanel & WHM after you launch an instance. Make certain that you configure it before you launch. An incorrect hostname may cause license errors.







Important:





- If your server does **not** use a resolvable fully-qualified domain name as the hostname, it will automatically receive one from WebPros International, LLC. For more information, read our [Automatically-Issued Hostnames](https://docs.cpanel.net/knowledge-base/dns/automatically-issued-hostnames/) documentation.
- Do **not** select a hostname that begins with `www` or a number, or a hostname that ends with a hyphen (`-`).
- Do **not** choose a hostname that a cPanel account on your server will use.
- Do **not** choose a potential service subdomain as a hostname (for example, `cpanel.example.com` or `whm.example.com`).
- Do **not** select a socially-unacceptable hostname. The hostname will appear in mail headers.
- Only use lowercase, Latin-script letters in hostnames.

6. Click _Preview_. The _Preview_ interface will appear.
7. In the _Terms of Service_ section, select the _ECS Terms of Service_ checkbox.
8. Click _Create Instance_. A confirmation message will appear.
9. Click _Console_. The _Instances_ interface will appear. Your newly-created instance will display in the list of instances.






Note:




New instances may require several minutes to initialize.



## Create Elastic IP Address (EIP)

In order to access your server, you **must** configure an EIP for the server.

To configure an EIP, perform the following steps:

1. In the _Actions_ column corresponding to the new instance, click _More_.
2. Under the _Network and Security Group_ menu, select _Convert to EIP_.
3. Read the warning box, then click _OK_.

The interface will refresh and display a public EIP for the server.

## Log in to WHM

To log in to WHM, perform the following steps:

1. In your preferred browser, navigate to the following URL where `IP ADDRESS` represents the server’s IP address:


```perl
https://IP ADDRESS:2087
```

2. Log in using the credentials you created [earlier](https://docs.cpanel.net/knowledge-base/web-services/launch-a-cpanel-instance-on-alibaba-cloud/#select-system-configuration).
3. Agree to the software license. A new interface will appear.
   - If you do not have a valid license, you must to purchase a license.
   - If this is a new installation, you can [activate a free 15-day trial license](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-sign-up-for-a-trial-license/).
4. Enter the your contact information and [nameserver](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#nameserver) information. The WHM interface will appear.

## Configure WHM

For more information about how to configure cPanel & WHM, read our [WebHost Manager](https://docs.cpanel.net/whm/the-whm-interface/the-whm-interface/) documentation.

For more information on how to quickly build a website on a newly-installed cPanel & WHM server, read our [From WHM to Website](https://docs.cpanel.net/knowledge-base/accounts/from-whm-to-website/) documentation.

## Next steps

After you launch a cPanel & WHM instance on the Alibaba Cloud, you can manage it with the Alibaba Cloud Console. For more information, read [Alibaba’s Cloud Console](https://www.alibabacloud.com/help/en/alibaba-mail/latest/alibaba-cloud-console) documentation.

#### Additional Documentation

* * *

- [How to Update Your System](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-update-your-system/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×