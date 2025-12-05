---
url: "https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/"
title: "DigitalOcean Private Networking Changes Scheduled for July 2018 | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- DigitalOcean Private Networking Changes Scheduled for July 2018

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean Private Networking Changes Scheduled for July 2018

Validated on 19 Jul 2018 • Last edited on 20 Feb 2024

During July 2018, communication over DigitalOcean Private Network IPs was isolated within the account or team where they were created. For most users, this security enhancement required no action. All Droplets that were provisioned with Private Networking will continue to be able to communicate with the other Droplets within the same account or team.

However, if you had Droplets that communicate over private IPs with Droplets that belong to a different team or account, they will no longer be able to reach each other through the private IPs.

Combining Private Networking isolation with Cloud Firewalls, Let’s Encrypt SSL Certificates for load balancers, SSH keys, and 2FA, provides the security you need to build scalable, robust, and secure production environments.

## Questions and Answers

### What should I do if I’m communicating with other teams or accounts over the private network?

Once this change is in place, your Droplets won’t be able to reach Droplets outside your account over the Private Network.

For example, let’s say a user manages 2 accounts, Acme Inc and Beta Inc, and each has 2 Droplets in the same region. Acme uses private IPs `192.0.2.100` and `192.0.2.101`. Beta uses `192.0.2.120` and `192.0.2.121`. Acme’s Droplet `192.0.2.100` (running a PHP application) currently reaches out to `192.0.2.120` (a MySQL database on Beta’s account) over the private network.

Since these two Droplets are owned by different accounts, once this improvement is in place, they won’t be able to reach each other over the private network: Acme-owned Droplets won’t be able to access Beta’s private IP addresses and vice-versa.

This user has a few option to adjust their deployment:

1. They can move the MySQL Droplet from the Beta account to the Acme account. This can be achieved with Droplet Snapshots or with your favorite config management tool.

2. They can create a new Droplet under the Acme account for MySQL and replace the old IP address with the new one. Data transfers could be done by backup/restore of the database.

3. They could replace the private IPs with the public IPs of Beta Droplet they are trying to reach. This might require some application reconfiguration and we strongly suggest using some type of firewall, like our managed and free Cloud Firewall, to restrict connections between those two Droplets. In this case, even though the connection is done over the public IP, it doesn’t mean that the data will leave our datacenters. The traffic will never leave our region border router.

4. Similar to the previous solution but recommended for those looking for extra security, they could setup a VPN between both accounts, creating a virtual private network between them. This would encapsulate the traffic and encrypt it end-to-end. We have several tutorials on the subject.


### What will change?

Private network communication will be restricted to resources inside a single account, increasing its security.

### When will this change take place?

We have changed dates a few times, but this began on 10 July 2018 and was completed on 18 July 2018. Users in the affected datacenters were notified by email and on the dashboard before isolation was enabled.

### Do I need to do anything if I don’t use the private network to communicate with other accounts?

No, nothing will change for you. No action is required.

### Will this change affect communication across regions?

No, since it only affects Private Networks and they are restricted to a single region, this won’t have any effect on cross region communication.

### Will I be billed for traffic over private networks?

No, traffic over private networks is free and won’t count against your bandwidth billing transfer.

In this article...

- [Questions and Answers](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#questions-and-answers)
  - [What should I do if I’m communicating with other teams or accounts over the private network?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#what-should-i-do-if-im-communicating-with-other-teams-or-accounts-over-the-private-network)
  - [What will change?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#what-will-change)
  - [When will this change take place?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#when-will-this-change-take-place)
  - [Do I need to do anything if I don’t use the private network to communicate with other accounts?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#do-i-need-to-do-anything-if-i-dont-use-the-private-network-to-communicate-with-other-accounts)
  - [Will this change affect communication across regions?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#will-this-change-affect-communication-across-regions)
  - [Will I be billed for traffic over private networks?](https://docs.digitalocean.com/release-notes/upcoming/private-networking-isolation/#will-i-be-billed-for-traffic-over-private-networks)

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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices