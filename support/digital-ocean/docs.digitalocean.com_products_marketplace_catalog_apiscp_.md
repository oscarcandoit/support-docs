---
url: "https://docs.digitalocean.com/products/marketplace/catalog/apiscp/"
title: "ApisCP | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- ApisCP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# ApisCP

Generated on 23 Jun 2022
from [the ApisCP catalog page](https://marketplace.digitalocean.com/apps/apiscp)

ApisCP is the Apis Networks Control Panel, a hosting platform since 2002 engineered to help you achieve more. Once installed, ApisCP’s adaptive firewall activates by protecting all facets from WordPress to SSH for added peace of mind. This is a multi-tenant platform in which each account is partitioned from one another and may be optionally controlled via resource enforcement. 1-click installation and automatic updates are provided for WordPress, Discourse, Ghost, Drupal, and Laravel.

Skip down to [installation](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#installation) for a quickstart.

## Features

Beyond the basics, ApisCP implements several features unique to its stack.

- **Platform integrity checks**

ApisCP is a self-healing platform. Once a month it scrubs your server looking for irregularities. Any changes are automatically corrected. Integrity checks can fix a broken server in most cases.

- **Automatic updates**

Let’s work together to make the web safe. ApisCP automatically deploys updates for system packages, panel core, platform improvements, WordPress core/plugins/themes, Ghost, Discourse, Drupal, and Laravel. Every month you’ll receive a reminder of what sites have failed automatic updates to help you manage your server.

- **Principle of least-privilege**

Single-user sites are so 2000. ApisCP modernizes your layout by utilizing a variety of user accounts governed by discretionary access controls built into Linux. Each site has a dedicated web user that is separate from your user accounts. A bad WordPress shouldn’t wreck your day.

- **Delegated whitelisting**

Empower sites with the ability to protect themselves from the omnipotent eye of Rampart. Delegated whitelisting allows Site Administrators to whitelist a configurable threshold of IP addresses such that one user’s bad mail credentials doesn’t block access for everyone else.

- **Synthetic filesystems**

Each account runs its own filesystem comprised of a variety of service layers. BoxFS is an opaque, composite filesystem that restricts visibility to each account and provides a copy-up behavior that restricts tampering of system files. Services, PHP included, are jailed to these synthetic roots with negligible performance degradation.

- **Resource constraints**

Restrict memory, CPU, I/O bandwidth, and process limits through cgroups, a native Linux feature that reliably enforces resource limits across modern Linux distributions.

- **Scoped administration**

Complex administrative tasks are simplified into [Scopes](https://apiscp.com/features/scopes), automation with error checking. Modify server configuration in a straightforward, safe manner.

- **Polyglottal DNS**

ApisCP speaks a variety of DNS implementations, including PowerDNS and DigitalOcean (and CloudFlare if you want!).

- **FLARE updates**

Stay ahead of threats with FLARE, a rapid update facility part of ApisCP. FLARE checks 50 times a day to ensure you’re up-to-date. When we push an emergency update, your server automatically updates as long as you permit us.

- **Self-corrective monitoring**

We’ll do our best to heal spikes in server traffic without impacting your day. What we can’t heal, [Argos](https://apiscp.com/features/argos) pushes to your notification medium of choice. Argos is a good boi! After all, we named this feature after Odysseus’ loyal companion.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| ApisCP | 3.2 | Proprietary |
| PHP | 7.4 | PHP |
| MariaDB | 10.4 | GPL-2.0 |
| PostgreSQL | 13 | PostgreSQL |
| Apache | 2.4 | Apache |
| Ansible | 2.9 | GPL-3.0 |
| Node | 6.0.0-13.1.0+ | MIT |
| Python | 2.1.3-3.6.8+ | Python Software Foundation |
| Ruby | 1.8.5-2.6.5+ | Ruby |
| Go | 1.2.2-1.12.13+ | BSD-style |
| git | 2.18 | GPL-2.0 |
| TimescaleDB | 2.5 | Apache/TSL |
| Postfix | 3.4 | IBM |
| Dovecot | 2.3 | MIT |
| WordPress | 5.1+ | GPL-2.0 |
| WP-CLI | 2.3 | MIT |
| Ghost | 3.0+ | MIT |
| Discourse | 2.2+ | GPL-2.0 |
| Laravel | 6.1+ | MIT |
| Drupal | 8.7+ | GPL-2.0 |
| fail2ban | 0.10 | GPL-2.0 |
| HAProxy | 1.8 | GPL-2.0 |
| Phusion Passenger | 5.3 | MIT |
| mod\_evasive | 1.0-dev | GPL-2.0 |
| rspamd | 2.4 | Apache |
| SpamAssassin | 3.4 | Apache |
| Redis | 5.0 | BSD |
| Monit | 5.25 | AGPL-3.0 |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=apisnetworks-apiscp-8-3)

## Creating an App using the API

In addition to creating a Droplet from the ApisCP 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB ApisCP Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"apisnetworks-apiscp-8-3"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying ApisCP

This application includes a 30-day Pro license to use ApisCP. After 30 days, your server will continue to protect itself against malicious activity as well as host your sites, but you won’t be able to access your panel. Visit [my.apiscp.com](https://my.apiscp.com/) to purchase a license or contact [help@apisnetworks.com](mailto:help@apisnetworks.com) for questions.

## Configuration

A prebuilt image is provided, which immediately protects itself from threats once turned on. Login to the server using your DigitalOcean credentials to begin installation. Configuration settings are available in `/root/apnscp-vars.yml`, which influence how the panel initially behaves. Any setting, with the exception of MariaDB and PostgreSQL, may be changed at a later time.

## Recommended settings

- **apnscp\_admin\_email**: SSL issuance and panel communication.
- **system\_hostname**: SSL issuance and server identification on mail transactions. This should be a fully-qualified domain name (e.g. “mydomain.apiscp.com” or “apiscp.com”). DNS should also resolve to this host. See “ [Bootstrapping](https://docs.apiscp.com/admin/SSL/#bootstrapping-server-ssl-with-a-hosted-domain)” section of SSL.md for tips on setting up SSL if a domain doesn’t have hosted DNS yet.
- **user\_daemons**: open a limited port range to allow sites to run services, such as Discourse or Redis.

## Installation

1. Run `nano /root/apnscp-vars.yml` to edit Bootstrapper configuration.
2. Make changes. See recommended settings above as a guide.
3. Run `systemctl start bootstrapper-resume` to replay installation, personalizing your instance.

   - `tail -f /root/apnscp-bootstrapper.log` will show installation progression real time. It won’t take more than a few minutes to complete.
   - If you see “failed=1” get in touch with us ( [help@apisnetworks.com](mailto:help@apisnetworks.com)).
4. Visit https://:2083 to login to the panel.

## After installation

## Logging in

By default, the username is “admin” and password randomly generated. ApisCP will attempt to send an email with your credentials, but these can be just as easily reset from the command-line:

### Resetting admin credentials

```
cpcmd auth:change-username NEWUSER
cpcmd auth:change-password 'NEWPASSWORD'
cpcmd common:set-email NEW@EMAIL.COM
```

## Adding a site

Adding your first site is a breeze! ApisCP is tuned from the start for optimal performance, so stress less on tuneables - which still exist in [config.ini](https://docs.apiscp.com/admin/Tuneables/) \- and focus on your sites.

1. Visit https://:2083/ to login to the panel.
2. Navigate to Nexus to create your first site.
3. Kick your feet back to relax! Use SSO to sign into the site. Setup SSL, email, or install WordPress at your leisure.

See [INSTALL.md](https://docs.apiscp.com/INSTALL/#after-bootstrap) for additional help.

## Importing from other backups

ApisCP is able to read backups from other mediums. See [Migrations.md](https://docs.apiscp.com/admin/Migrations%20-%20cPanel/) for an updated list of supported mediums.

## DNS

A “null” driver is configured by default, which disables DNS integration. The DigitalOcean DNS driver is an excellent option if you’re hosting just your sites. For hosting a variety of users, we recommend using [PowerDNS](https://docs.apiscp.com/admin/dns/PowerDNS/).

1. Create a [Personal Access Token](https://www.digitalocean.com/docs/api/create-personal-access-token/).
2. Configure ApisCP to use DigitalOcean for DNS:`cpcmd scope:set dns.default-provider digitalocean cpcmd scope:set dns.default-provider-key 'abcdef1234567890'`

## Scopes

Many settings may be simply adjusted after install through Scopes. Scopes do the heavy lifting for you, just focus on the invocation! Scopes have a few methods: get, set, info, list.

- **get**: get the current Scope setting

Example: `cpcmd scope:get net.hostname`

- **set**: set a Scope setting (variadic)

Example: `cpcmd scope:set mail.enabled false`

Example: `cpcmd scope:set system.sshd-port '[22,43130]'`

- **info**: get information on a Scope, including purpose

Example: `cpmd scope:info cp.headless`

- **list**: enumerate all available Scopes

Example: `cpcmd scope:list`The following Scopes are commonly used:

- `mail.smart-host`: set upstream [mail relay](https://docs.apiscp.com/admin/Smtp/#smart-host-support)

- `cp.headless`: disable panel frontend, rely on [CLI helpers](https://docs.apiscp.com/admin/CLI)

- `system.timezone`: change the system timezone to your region

- `rampart.blacklist`: add an address or CIDR to a permanent list

- `rampart.whitelist`: add an address or CIDR to a permanent list

- `apache.block10`: alter global settings to block all HTTP/1.0 (often sloppy spam) clients from accessing the server

- `cp.bootstrapper`: change Bootstrapper settings, `upcp -sb` re-runs the Bootstrapper to apply changes


[config.ini](https://docs.apiscp.com/admin/Tuneables/) provides other features to tune. Always use `cpcmd config:set cp.config section name value` to alter this file in a safe manner.

## Extending ApisCP

ApisCP supports a variety of features beyond what’s listed above. Make the most of your ApisCP experience with the following additions:

- [WHMCS addon](https://github.com/lithiumhosting/apnscp-whmcs) courtesy Lithium Hosting
- [Blesta addon](https://docs.apiscp.com/admin/Billing%20integration) available in Blesta 4.8+
- [SpamHaus DQS](https://github.com/apisnetworks/rspamd-dqs) plugin. Requires [rspamd](https://hq.apnscp.com/filtering-spam-with-rspamd/) spam filter.
- [Bacula](https://github.com/apisnetworks/apnscp-bacula) automated backups
- Configuring [push monitoring](https://docs.apiscp.com/admin/Monitoring/)

## Hacking

ApisCP is a cornucopia of features to explore! `cpcmd -o yaml misc:list-commands` is a fun starting point. If you need to scratch that itch, check out the following features:

- [CLI helpers](https://docs.apiscp.com/admin/CLI)
- [Programming guide](https://docs.apiscp.com/PROGRAMMING/)
- [Customizing ApisCP](https://docs.apiscp.com/admin/Customizing)

Stop by the [ApisCP Discord](https://discord.gg/wDBTz6V) server if you have any questions. See you there!

In this article...

- [Features](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#creating-an-app-using-the-api)
- [Getting Started After Deploying ApisCP](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#getting-started-after-deploying-apiscp)
- [Configuration](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#configuration)
- [Recommended settings](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#recommended-settings)
- [Installation](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#installation)
- [After installation](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#after-installation)
- [Logging in](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#logging-in)
  - [Resetting admin credentials](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#resetting-admin-credentials)
- [Adding a site](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#adding-a-site)
- [Importing from other backups](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#importing-from-other-backups)
- [DNS](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#dns)
- [Scopes](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#scopes)
- [Extending ApisCP](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#extending-apiscp)
- [Hacking](https://docs.digitalocean.com/products/marketplace/catalog/apiscp/#hacking)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)