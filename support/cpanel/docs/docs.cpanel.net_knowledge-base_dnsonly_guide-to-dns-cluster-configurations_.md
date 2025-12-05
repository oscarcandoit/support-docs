---
url: "https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/"
title: "Guide to DNS Cluster Configurations | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#main-content)

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
3. [DNSOnly](https://docs.cpanel.net/knowledge-base/dnsonly/)
4. Guide to DNS Cluster Configurations


[dns](https://docs.cpanel.net/tags/dns/) [dnsonly](https://docs.cpanel.net/tags/dnsonly/) [nameservers](https://docs.cpanel.net/tags/nameservers/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#overview)

* * *

[DNS cluster requirements](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#dns-cluster-requirements)

* * *

[DNS cluster structures](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#dns-cluster-structures)

* * *

[Add trusted IP addresses](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#add-trusted-ip-addresses)

* * *

[Use direct links](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-direct-links)

* * *

[Use the primary nameserver as an intermediary](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-the-primary-nameserver-as-an-intermediary)

* * *

[Use multiple intermediary nameservers](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-multiple-intermediary-nameservers)

* * *

[Reverse Trust relationship](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#reverse-trust-relationship)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#overview)

* * *

[DNS cluster requirements](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#dns-cluster-requirements)

* * *

[DNS cluster structures](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#dns-cluster-structures)

* * *

[Add trusted IP addresses](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#add-trusted-ip-addresses)

* * *

[Use direct links](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-direct-links)

* * *

[Use the primary nameserver as an intermediary](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-the-primary-nameserver-as-an-intermediary)

* * *

[Use multiple intermediary nameservers](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#use-multiple-intermediary-nameservers)

* * *

[Reverse Trust relationship](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#reverse-trust-relationship)

* * *

## Guide to DNS Cluster Configurations

Last modified: _2025 June 6_

* * *

## Overview

A DNS cluster is a group of [authoritative nameservers](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/#authoritative-nameserver) that share records with each other. This allows you to physically separate nameservers that handle the DNS requests from your cPanel & WHM servers.

- WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster/) feature ( _WHM » Home » Clusters » DNS Cluster_) **only** provides redundancy for DNS. It does **not** add Apache or any other services to a DNS cluster configuration.
- cPanel DNSOnly® allows you to run a dedicated physical nameserver. It **only** replicates DNS zones to your other servers. For more information, read our [cPanel DNSOnly®](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly) documentation.
- In order to use this guide, you must have set up nameservers. For more information about how to set up nameservers, read our [How to Set Up Nameservers in a cPanel Environment](https://docs.cpanel.net/knowledge-base/dns/how-to-set-up-nameservers-in-a-cpanel-environment/) documentation.

### DNS cluster requirements

To configure your DNS cluster, you must meet the following minimum requirements:

- Clusters **must** include at least two servers.
- You **must** have at least one cPanel & WHM server with cPanel & WHM installed. A DNS cluster that includes multiple cPanel DNSOnly® servers and cPanel & WHM servers is also acceptable.
- All machines in the DNS cluster **must** have cPanel & WHM or cPanel DNSOnly® version 11 or higher installed. Some features may not work with older versions of cPanel & WHM.

## DNS cluster structures

Before you set up your DNS cluster, consider which structure will be the most efficient. The way in which you link each server determines the speed at which your DNS requests resolve.

Important:

- We recommend that you do **not** set up the nameserver to synchronize data to a cPanel & WHM server, because this creates extraneous zones on the cPanel & WHM server. This means that you do **not** need to log in to WHM on the nameserver and set the cPanel & WHM server’s _Synchronize Changes_ DNS role. For more information about DNS server roles, read our [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster/#servers-in-your-dns-cluster) documentation.

- If you set a server in a DNS cluster to the _Write-only_ role, WHM will **not** check whether a DNS zone exists before you create an account. Because of this, it is possible to create the same domain name on two or more of these servers. If this occurs, the servers compete for updates to that domain.

- **Don’t** link dedicated nameservers to each other, or link dedicated cPanel & WHM servers to each other.


### Add trusted IP addresses

The `/etc/ips.dnsmaster` file contains your DNS cluster’s list of trusted nameserver IP addresses. By default, this file lists the nameservers’ main IP addresses in your cluster as trusted IP addresses. If the IP address for a nameserver does **not** match a trusted IP address, you may experience problems when users create addon or parked domains.

To use an IP address that is **not** listed in your DNS cluster’s `/etc/ips.dnsmaster` file as a trusted IP address, add the IP address to the `/etc/ips.remotedns` file. You may add the IP address manually or through WHM’s [_Configure Remote Service IPs_](https://docs.cpanel.net/whm/ip-functions/configure-remote-service-ips/) interface ( _WHM » Home » IP Functions » Configure Remote Service IPs_).

Important:

If you use remotely-clustered DNS nameservers, you **must** manually add their IP addresses.

### Use direct links

Your servers function more slowly if multiple steps exist between a cPanel & WHM server and a nameserver. To improve the performance of your servers, link your cPanel & WHM server directly to the DNS servers. This eliminates the steps that each request must perform, and your DNS requests will resolve more quickly.

![cpanel server linked directly to DNS servers](https://docs.cpanel.net/img/guidetodnscluster1.png)

_A direct link between the web server and each of two nameservers is optimal._

Note:

In this example, `webserver.example.com` is a cPanel & WHM server that sends DNS information directly to the nameservers `ns1.example.com` and `ns2.example.com`.

To create this configuration, you will need **one** cPanel & WHM server and **one or more** nameservers.

Note:

When you add the new nameserver to the cluster, you will need to log in to the nameserver and obtain an API token from that server.

[Create DNS cluster with direct links](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#create-dns-cluster-with-direct-links1764175697377346642)

To set up a DNS cluster with direct links, perform the following steps:

1. [Install cPanel & WHM](https://docs.cpanel.net/installation-guide/install) on the server that you will use to host your websites.
2. [Install cPanel DNSOnly®](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation) on each of the servers that you will use as nameservers.
3. Log in to the cPanel & WHM server and navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
4. If you have not already enabled DNS clustering on this server, perform the following steps to enable it:
1. Click _Enable DNS Clustering_.
2. Click _Change_.
3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
5. Add each new nameserver to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
6. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize each new nameserver with the DNS cluster.
7. To confirm that each nameserver exists in the cluster, perform the following steps:
1. Log in to the main cPanel & WHM server via SSH.
2. Run the following command, where `example.com` represents the nameserver name and `ip` represents the nameserver’s IP address:



      ```bash
      dig +short example.com @ip
      ```

### Use the primary nameserver as an intermediary

If necessary, place the primary nameserver between the cPanel & WHM server and the secondary nameserver. For each intermediate server that you add, data will transfer three times slower than for a direct link. For example, in the following configuration, the cPanel & WHM server labeled `webserver.example.com` sends DNS zone information to the nameserver labeled `ns1.example.com`, which then forwards the information to the nameserver labeled `ns2.example.com`.

![cpanel server linked to a nameserver before forwarding the information to a secondary nameserver](https://docs.cpanel.net/img/guidetodnscluster2.png)

_An intermediate nameserver between the web server and secondary nameserver is acceptable._

To create this configuration, you will need **one** cPanel & WHM server and **at least two** nameservers.

Note:

When you add a new nameserver to the cluster, you will need to log in to that nameserver and obtain an API token from that server.

[Create DNS cluster with primary nameserver as intermediary](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#create-dns-cluster-with-primary-nameserver-as-intermediary1764175697378103283)

To set up a DNS cluster with the primary nameserver as an intermediary, perform the following steps:

01. [Install cPanel & WHM](https://docs.cpanel.net/installation-guide/install) on the server that you will use to host your websites.
02. [Install cPanel DNSOnly®](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation) on the servers that you will use as nameservers.
03. Log in to the cPanel & WHM server and navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
04. If you have not already enabled DNS clustering on this server, perform the following steps to enable it:
    1. Click _Enable DNS Clustering_.
    2. Click _Change_.
    3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
05. Add the first nameserver to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
06. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize the new nameserver with the DNS cluster.
07. Log in to the nameserver that you just added, and then navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
08. If you have not already enabled DNS clustering on this server on the nameserver, perform the following steps to enable it:
    1. Click _Enable DNS Clustering_.
    2. Click _Change_.
    3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
09. Add the second nameserver to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
10. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize the second nameserver with the DNS cluster.
11. To confirm that each nameserver exists in the cluster, perform the following steps:
    1. Log in to the main cPanel & WHM server via SSH.
    2. Run the following command, where `example.com` represents the nameserver name and `ip` represents the nameserver’s IP address:



       ```bash
       dig +short example.com @ip
       ```

### Use multiple intermediary nameservers

Warning:

We do **not** recommend this method. It can significantly reduce performance.

This configuration uses multiple steps between the cPanel & WHM server and nameservers. In the example below, for cPanel & WHM server labeled `web1.example.com` to communicate with the nameserver labeled `ns2.example.com`, the information **must** pass through two intermediary servers: the intermediary cPanel & WHM server labeled `web2.example.com` and the intermediate nameserver labeled `ns1.example.com`. This increases the processor load on the servers because the nameserver software updates the DNS information on each step. This configuration slows the servers’ response time considerably.

![cpanel server linked to two intermediary servers before forwarding to the DNS server](https://docs.cpanel.net/img/guidetodnscluster3.png)

_If you configure multiple steps between a web server and nameserver, the servers’ performance slows._

To create this configuration, you will need **at least two** cPanel & WHM servers and **at least two** nameservers.

Note:

When you add a server to the cluster, you will need to log in to that server to obtain your API token.

[Create DNS cluster with multiple intermediary nameservers](https://docs.cpanel.net/knowledge-base/dnsonly/guide-to-dns-cluster-configurations/#create-dns-cluster-with-multiple-intermediary-nameservers1764175697378926657)

To set up a DNS cluster with multiple intermediary nameservers, perform the following steps:

01. [Install cPanel & WHM](https://docs.cpanel.net/installation-guide/install) on the two servers that you will use to host your websites.
02. [Install cPanel DNSOnly®](https://docs.cpanel.net/installation-guide/cpanel-dnsonly-installation) on the two servers that you will use as nameservers.
03. Log in to the first cPanel & WHM server and navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
04. If you have not already enabled DNS clustering on this server, perform the following steps to enable it:
    1. Click _Enable DNS Clustering_.
    2. Click _Change_.
    3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
05. Add the second cPanel & WHM server to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
06. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize the second cPanel & WHM server with the DNS cluster.
07. Log in to the second cPanel & WHM server, and then navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
08. If you have not already enabled DNS clustering on this server, perform the following steps to enable it:
    1. Click _Enable DNS Clustering_.
    2. Click _Change_.
    3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
09. Add the first nameserver to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
10. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize the first nameserver with the DNS cluster.
11. Log in to the first nameserver, and then navigate to WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_).
12. If you have not already enabled DNS clustering on this server, perform the following steps to enable it:
    1. Click _Enable DNS Clustering_.
    2. Click _Change_.
    3. Click _Return to Cluster Status_ to return to the _DNS Cluster_ interface.
13. Add the second nameserver to the cluster. To do this, perform the steps in our [DNS Cluster](https://docs.cpanel.net/whm/clusters/dns-cluster) documentation.
14. Use WHM’s [_Synchronize DNS Records_](https://docs.cpanel.net/whm/dns-functions/synchronize-dns-records) interface ( _WHM » Home » DNS Functions » Synchronize DNS Records_) to **manually** synchronize the second nameserver with the DNS cluster.
15. To confirm that each server exists in the cluster, perform the following steps:
    1. Log in to the main cPanel & WHM server via SSH.
    2. Run the following command, where `example.com` represents the nameserver name and `ip` represents the nameserver’s IP address:



       ```bash
       dig +short example.com @ip
       ```

## Reverse Trust relationship

You **must** set up a Reverse Trust relationship between each server in a DNS cluster. This relationship allows servers in a DNS cluster to share records with one another. This relationship also requires that each server possesses an API token.

You can configure a Reverse Trust relationship for each server in WHM’s [_DNS Cluster_](https://docs.cpanel.net/whm/clusters/dns-cluster) interface ( _WHM » Home » Clusters » DNS Cluster_). You can create an API token in WHM’s [_Manage API Tokens_](https://docs.cpanel.net/whm/development/manage-api-tokens-in-whm/) interface ( _WHM » Home » Development » Manage API Tokens_) or via the WHM API 1 [`api_token_create`](https://api.docs.cpanel.net/openapi/whm/operation/api_token_create/) function.

To check whether the servers in a DNS cluster can share records with one another, call the WHM API 1 [`cluster_member_has_trust_with`](https://api.docs.cpanel.net/openapi/whm/operation/cluster_member_has_trust_with/) function.

Note:

- When you create an API token for DNS clusters, use the _DNS Clustering_ Access Control List (ACL) privilege. For more information, read the [_Edit Reseller Nameservers and Privileges_](https://docs.cpanel.net/whm/resellers/edit-reseller-nameservers-and-privileges/#clustering) documentation.
- You do **not** need to set up a Reverse Trust relationship for [cPanel DNSOnly®](https://docs.cpanel.net/knowledge-base/dnsonly/cpanel-dnsonly) servers or servers that use the _Write-only_ DNS role.

#### Additional Documentation

* * *

- [How to Configure Reverse DNS in WHM](https://docs.cpanel.net/knowledge-base/dns/how-to-configure-reverse-dns-in-whm/)
- [Nameserver Record Report](https://docs.cpanel.net/whm/dns-functions/nameserver-record-report/)
- [Nameserver Selection](https://docs.cpanel.net/whm/service-configuration/nameserver-selection/)
- [The cleandns Script](https://docs.cpanel.net/whm/scripts/the-cleandns-script/)
- [The dnssec-cluster-keys Script](https://docs.cpanel.net/whm/scripts/the-dnssec-cluster-keys-script/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×