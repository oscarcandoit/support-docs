---
url: "https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/"
title: "cPanel Linked Nodes Guide | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#main-content)

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
3. [General Systems Administration](https://docs.cpanel.net/knowledge-base/general-systems-administration/)
4. cPanel Linked Nodes Guide


[whmadvanced](https://docs.cpanel.net/tags/whmadvanced/) [server](https://docs.cpanel.net/tags/server/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#overview)

* * *

[Server profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#server-profiles)

* * *

[Parent and child nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#parent-and-child-nodes)

* * *

[Child node restrictions](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#child-node-restrictions)

* * *

[User access and security on a child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#user-access-and-security-on-a-child-node)

* * *

[cPanel accounts and linked nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#cpanel-accounts-and-linked-nodes)

* * *

[Creating distributed accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#creating-distributed-accounts)

* * *

[Make an existing account a distributed account](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#make-an-existing-account-a-distributed-account)

* * *

[Distributed accounts on a linked mail child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#distributed-accounts-on-a-linked-mail-child-node)

* * *

[Managing distributed accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#managing-distributed-accounts)

* * *

[Distributed reseller accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#distributed-reseller-accounts)

* * *

[Password management](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#password-management)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#overview)

* * *

[Server profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#server-profiles)

* * *

[Parent and child nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#parent-and-child-nodes)

* * *

[Child node restrictions](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#child-node-restrictions)

* * *

[User access and security on a child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#user-access-and-security-on-a-child-node)

* * *

[cPanel accounts and linked nodes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#cpanel-accounts-and-linked-nodes)

* * *

[Creating distributed accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#creating-distributed-accounts)

* * *

[Make an existing account a distributed account](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#make-an-existing-account-a-distributed-account)

* * *

[Distributed accounts on a linked mail child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#distributed-accounts-on-a-linked-mail-child-node)

* * *

[Managing distributed accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#managing-distributed-accounts)

* * *

[Distributed reseller accounts](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#distributed-reseller-accounts)

* * *

[Password management](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#password-management)

* * *

## cPanel Linked Nodes Guide

_Valid for versions 98 through the latest version_

#### Version:

#### [98](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/)

Last modified: _2025 April 25_

* * *

## Overview

cPanel linked nodes are two or more servers (nodes) connected to each other via WHM’s [_Link Server Nodes_](https://docs.cpanel.net/whm/server-configuration/link-server-nodes) interface ( _WHM » Home » Server Configuration » Link Server Nodes_). This feature lets you optimize your primary ( [parent node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#parent-and-child-nodes)) node’s resource usage by distributing functionality across multiple nodes.

For example, you can assign a cPanel account’s mail functionality to a secondary server ( [child node](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#parent-and-child-nodes)) optimized for mail. As a result, your primary node’s resource usage is lower. This helps optimize the user experience for non-mail services, such as web hosting.

## Server profiles

One way you can optimize your child nodes is to set a server profile. To do this, you can configure a node’s profile directly in WHM’s [_Server Profile_](https://docs.cpanel.net/whm/server-configuration/server-profile) interface ( _WHM » Home » Server Configuration » Server Profile_).

Note:

The parent node in a linked node configuration only uses a [_Standard_](https://docs.cpanel.net/whm/server-configuration/server-profile#starndard-node) server profile. A parent node **cannot** use any other server profile.

For information about server profiles, read our [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles) documentation.

## Parent and child nodes

Linking nodes together creates a “parent and child” node configuration. For example:

![A visual representation of a linked node configuration.](https://docs.cpanel.net/img/linked-node-example.png)

- A parent node is the authoritative controller in a configuration. This node assigns tasks to one or more child nodes.
- A child node is the non-authoritative node that receives tasks from the parent node. For example, a child node configured to handle mail-related functions for accounts on the parent node.
- A parent node manages the child nodes’ [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/#autossl) certificates.

For more information about linking nodes, read our [Link Server Nodes](https://docs.cpanel.net/whm/server-configuration/link-server-nodes) interface documentation.

### Child node restrictions

The following restrictions apply to **all** child nodes on a linked node configuration:

- cPanel users cannot log in directly to cPanel on a child node. They must log in to cPanel on the parent node.
- The child node’s version of cPanel & WHM **must** have the same [major value](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers) as the parent node.
- You **must** call APIs on the parent node, which proxies requests to the child node.

  - The system blocks **all** cPanel API calls on the child node.
  - The system blocks WHM API functions that call a [distributed cPanel account](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#cpanel-accounts-and-linked-nodes) on the child node.
- You can only assign one child node to a cPanel account when offloading a specific functionality to the account. However, a parent node can have more than one child node that manages a specific functionality. For example, the system supports a parent node with two child nodes that both handle mail functionality. However, the system does **not** support a cPanel account using two child nodes for its mail functionality.
- We **do not** currently support configurations that link more than one parent node to a single child node.
- You can **only** link a parent node to a child node that uses the same [major version](https://docs.cpanel.net/knowledge-base/cpanel-product/product-versions-and-the-release-process/#version-numbers) or later of cPanel & WHM.

The following restrictions apply to **only** mail child node on a linked node configuration:

- cPanel users must log in to their [Webmail](https://docs.cpanel.net/knowledge-base/webmail) accounts via the `webmail` subdomain. For example, the `https://webmail.example.com` URL, not `https://example.com:2096` URL. They **cannot** log into Webmail via the parent node.
- A distributed cPanel account’s `mail` and `webmail` subdomains resolve to the child node.
- You **cannot** enable IPv6 on a cPanel account if you want to distribute that account to a mail node.
- Your hosting provider **must** enable API Tokens for the linked cPanel account in WHM’s [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager/) interface ( _WHM » Home » Packages » Feature Manager_).
- You **must** use DNS Domain Control Validation [(DCV)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-control-validation).
- If you are using [AutoSSL](https://docs.cpanel.net/knowledge-base/security/guide-to-ssl/) or SSL certificates purchased via your cPanel account, your cPanel & WHM nodes **must** be able to manage the authoritative DNS server.

### User access and security on a child node

Important:

Server profiles provide performance improvements, **not** necessarily additional security.

Distributed accounts have the **same** level of access on the child node as they do on the parent node. This access allows linked nodes to work smoothly with existing systems. For example, we disable the [_Pipe to a Program_](https://docs.cpanel.net/cpanel/email/forwarders/#pipe-to-a-program) option in cPanel’s [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_). We do **not** support email [forwarders](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#forwarder) that execute programs. Users can still manually create these forwarders. However, we will not preserve this functionality in future versions.

We are researching methods to transition to a reduced access security model in a future version.

## cPanel accounts and linked nodes

A cPanel account that offloads specific functions (such as mail) to a child node is called a distributed cPanel account. This basic process consists of the following steps:

1. The system creates two versions of the account: one on the parent node and one on the child node.
2. The system moves the desired functionality (for example, mail services) from the account on the parent node to the account on the child node. The account that exists on the parent node manages all other functionality.

Important:

AutoSSL certificates on distributed accounts require DNS Domain Control Validation [(DCV)](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#domain-control-validation) to secure the site.

To view all distributed cPanel accounts on a child node, click _View Distributed Accounts_ in WHM’s [_Link Server Nodes_](https://docs.cpanel.net/whm/server-configuration/link-server-nodes) interface ( _WHM » Home » Server Configuration » Link Server Nodes_).

### Creating distributed accounts

When you create a new account in WHM’s [_Create a New Account_](https://docs.cpanel.net/whm/account-functions/create-a-new-account) interface ( _WHM » Home » Account Functions » Create a New Account_), you can choose how to distribute the account. For example, to distribute the new account’s mail, use the _Mail Routing Section_ to assign a child node on which the account’s mail will reside.

### Make an existing account a distributed account

To distribute an existing account, use the _Linked Nodes_ section in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account) interface ( _WHM » Home » Account Functions » Modify an Account_). The system will create the modified account on the child node as part of this process and offload the desired functionality to the child node’s version of the account.

Note:

If you modify a cPanel account to use a mail child node, the system copies the account’s existing mail to that child node. After the system successfully distributes the account, it removes the account’s mail stored on the parent node.

### Distributed accounts on a linked mail child node

In most cases, all [IMAP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#imap), [POP3](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#pop3), and [SMTP](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#smtp) traffic for distributed cPanel accounts goes to the mail child node. However, if this traffic arrives at the parent node (for example, cached DNS lookups), the parent node will:

- Create proxy IMAP and POP3 connections to the mail child node.
- Reroute SMTP mail delivery to the mail child node.

Warning:

The following intructions apply to distributed cPanel accounts on a mail child node:

- We disable the [_Pipe to a Program_](https://docs.cpanel.net/cpanel/email/forwarders/#pipe-to-a-program) option in cPanel’s [_Forwarders_](https://docs.cpanel.net/cpanel/email/forwarders/) interface ( _cPanel » Home » Email » Forwarders_).
- We do **not** support email [forwarders](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#forwarder) that execute programs. Users can still manually create these forwarders. However, we will not preserve this functionality in future versions.

### Managing distributed accounts

Important:

Only system administrators can perform these actions.

You can manage your distributed cPanel accounts using one of the following methods:

#### Undoing account distribution

The process of moving some or all a distributed cPanel account’s functionality from a child node back to the parent node is called [dedistribution](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary#dedistribution). During this process, the system configures service proxying and mail routing to point to the parent node and terminates any IMAP or POP3 connections.

Note:

The system does **not** automatically remove the account from the child node. Instead, the child node’s cPanel account remains in place so that service proxying and mail routing can prevent service interruptions. You should leave the child node’s account in place long enough for cached DNS lookups to expire. We recommend one week. Afterwards, you can delete the account on the child node.


When you dedistribute an account, the source server creates an archive of the account you are dedistributing. This archive may be larger than the email account’s current size. **Ensure** that the target server has enough free disk space to move the archive **before** you begin the process.

To dedistribute an account, use the _Linked Server Nodes_ section in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account#linked-server-nodes) interface ( _WHM » Home » Account Functions » Modify an Account_).

Warning:

In some cases, you may need to forcefully dedistribute an account. For example, a child node is permanently offline or a child node’s security is compromised. You can use WHM’s [_Link Server Nodes_](https://docs.cpanel.net/whm/server-configuration/link-server-nodes#the-account-list-interface) interface ( _WHM » Home » Server Configuration » Link Server Nodes_) to perform this action. However, performing this action **will** result in account data loss.

#### Transfer accounts that have been distributed to a linked server

Note:

For important information on linked node restrictions read the [_Parent and child nodes_](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#parent-and-child-nodes) section of this document.


If you want to transfer a distributed account from one parent/child pair to another parent/child pair, use WHM’s [Transfer Tool](https://docs.cpanel.net/whm/transfers/transfer-tool/#accounts) interface ( _WHM » Home » Transfers » Transfer Tool_) to perform this action.

If you want to transfer a distributed account to a new parent node while keeping the account on the same child node, perform the following steps:

1. Dedistribute **all of the accounts** from the child node. Use the _Linked Server Nodes_ section in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account#linked-server-nodes) interface ( _WHM » Home » Account Functions » Modify an Account_) to perform this action.






Note:





- For additional information on this process read [Undoing account distribution](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#undoing-account-distribution) in this document.
- The account **must** be fully dedistributed before it can be redistributed to the child node.

2. Unlink the child node from the old parent node. Use WHM’s [_Link Server Nodes_](https://docs.cpanel.net/whm/server-configuration/link-server-nodes/#the-link-server-nodes-interface) interface ( _WHM » Home » Server Configuration » Link Server Nodes_) to perform this action.
3. Transfer the account from old parent node to new parent node with WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/#accounts).
4. Link the child node to the new parent node. Select _Mail Node_ under the account configuration options in WHM’s [_Transfer Tool_](https://docs.cpanel.net/whm/transfers/transfer-tool/#accounts) to distribute the child node to the new parent (standard profile) node.
5. Redistribute the account(s) to the child node. Use the _Linked Server Nodes_ section in WHM’s [_Modify an Account_](https://docs.cpanel.net/whm/account-functions/modify-an-account#linked-server-nodes) interface ( _WHM » Home » Account Functions » Modify an Account_) to perform this action.

### Distributed reseller accounts

Distributed [reseller accounts](https://docs.cpanel.net/knowledge-base/accounts/guide-to-reseller-accounts) do not have their reseller privileges on the child node. Because of this, distributed reseller accounts cannot log in to WHM on a child node.

#### Reseller-owned accounts

When a distributed reseller creates a cPanel account, the new account will use the same distribution status as the reseller: distributed or not distributed. However, if the reseller account’s distribution status changes, its cPanel accounts do **not** also change.

For example, a distributed reseller creates a new cPanel account. Afterward, the server administrator [dedistributes](https://docs.cpanel.net/knowledge-base/general-systems-administration/cpanel-linked-nodes-guide/#dedistribution) the reseller account back to the parent node. All of the reseller’s owned accounts will remain distributed to the child node unless the server administrator updates those accounts’ distribution status.

Note:

If one of a distributed reseller’s cPanel accounts’ distribution status changes, the reseller’s distribution status does **not** change.

## Password management

When using linked nodes, there are some things to consider for distributed cPanel account passwords:

- A child node’s [password strength configuration](https://docs.cpanel.net/whm/security-center/password-strength-configuration) only affects passwords that relate to the functions the child node serves. For example, if an account’s mail is distributed, the child node controls **only** that account’s email account and mailing list password strength settings. The parent node controls all other password strength settings (for example, FTP and cPanel account passwords).
- An account’s [password age](https://docs.cpanel.net/whm/security-center/configure-security-policies/#security-policy-items) on the parent node and child node will **not** match when you update this setting on the parent node.

#### Additional Documentation

* * *

- [NGINX® with Reverse Proxy](https://docs.cpanel.net/knowledge-base/nginx/nginx-with-reverse-proxy/)
- [Best Practices for cPanel Virtualization Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/best-practices-for-cpanel-virtualization-templates/)
- [Full Disaster Recovery](https://docs.cpanel.net/knowledge-base/general-systems-administration/full-disaster-recovery/)
- [How to Use Server Profiles](https://docs.cpanel.net/knowledge-base/general-systems-administration/how-to-use-server-profiles/)
- [Notification Templates](https://docs.cpanel.net/knowledge-base/general-systems-administration/notification-templates/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×