---
url: "https://docs.digitalocean.com/platform/ddos-protection/"
title: "DDoS Protection | DigitalOcean Documentation"
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

- DDoS Protection

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DDoS Protection

Validated on 15 May 2024 • Last edited on 17 Apr 2025

DigitalOcean DDoS Protection provides free, always-on protection from distributed denial-of-service (DDoS) attacks for applicable DigitalOcean resources.

## How DDoS Attacks Work

DDoS attacks are malicious attempts to overwhelm servers, routers, load balancers, applications, and other network devices with incoming connections to render them inaccessible.

Learn more about different kinds of DDoS attacks.

In a denial-of-service (DoS) attack, a threat actor renders information systems, devices, or other network resources inaccessible by overwhelming the target with malicious traffic. A distributed denial-of-service (DDoS) attack is a type of DoS attack where the overloading traffic originates from multiple attacking machines, amplifying the severity of the attack.

DDoS attacks use one or more of the following methods:

- **Volumetric attacks:** This type of attack overwhelms the resource’s bandwidth with a flood of traffic to keep normal traffic from reaching the resource.

Volumetric attacks include UDP floods, ICMP floods, TCP floods, and DNS reflection attacks.

- **Protocol layer attacks:** This type of attack over-consumes network resources on a server, load balancer, or firewall, slowing down the target resource until it becomes inaccessible. This attack targets the network, transports layers of the OSI stack, and leverages exploits in network protocols.

Protocol layer attacks include SYN floods, BGP attacks, and [ping of death](https://en.wikipedia.org/wiki/Ping_of_death) attacks.

- **Application layer attacks:** This type of attack targets software running on the resource, such as web application firewalls (WAFs) and web server applications. For example, these attacks may attempt to open and maintain an abnormally large number of connections to a web server, or bombard an application with large POST payloads. These attacks can be particularly effective because they consume both application-level and network-level resources.

Application layer attacks include BGP hijacking, HTTP and HTTPS floods, and [Slowloris](https://en.wikipedia.org/wiki/Slowloris_(computer_security)) attacks.

- **Multi-vector Attack:** This type of attack simultaneously targets application and network level resources. Unlike single vector attacks, multi-vector attacks use several different types of traffic to overwhelm the target, such as flooding the target with HTTP traffic and UDP traffic.


DDoS attacks can impact an app or website’s performance and availability for users, which may in turn cause a loss of revenue for business or harm the site’s reputation. Some attacks may also involve extortion, where the attacker demands payment for the discontinuation of the attack.

## How DDoS Protection Works

DigitalOcean DDoS Protection helps safeguard DigitalOcean cloud resources from DDoS attacks by monitoring applicable resources for malicious or questionable volumes of incoming traffic. If DDoS Protection detects an attack, it provides automatic mitigation until the event is concluded or until the traffic reaches the mitigation capacity.

When traffic reaches DDoS Protection’s mitigation capacity, we send an email notification to the account owner and blackhole incoming traffic. Blackholing is a DDoS countermeasure that discards all incoming traffic (legitimate and malicious) to a target IP address, which could lead to the resource being unavailable until the incoming traffic drops below the mitigation capacity.

## Scope of Protection

DDoS Protection is available and active for all DigitalOcean customers at no additional charge. It automatically protects all applicable resources starting from when you provision them, and requires no configuration or changes to your infrastructure or applications.

### Protected Resources

DDoS Protection protects the following resources:

- DigitalOcean Droplets
- DigitalOcean Kubernetes (DOKS) clusters
- DigitalOcean Managed Databases
- DigitalOcean Load Balancers
- Assigned reserved IPs

App Platform has native DDoS protection built into the platform.

Block storage and Spaces are not protected by DDoS Protection and don’t count towards your monthly resource usage.

### Protected OSI Layers

DDoS Protection mitigates attacks on the network (layer 3) and transport (layer 4) layers of the OSI model. DDoS Protection does not support application layer (layer 7) protection.

In different terms, DDoS Protection protects against volumetric attacks (like UDP floods, ICMP floods, TCP floods, and DNS reflection) and protocol-layer attacks (like SYN floods, BGP attacks and [ping of death](https://en.wikipedia.org/wiki/Ping_of_death)).

In this article...

- [How DDoS Attacks Work](https://docs.digitalocean.com/platform/ddos-protection/#how-ddos-attacks-work)
- [How DDoS Protection Works](https://docs.digitalocean.com/platform/ddos-protection/#how-ddos-protection-works)
- [Scope of Protection](https://docs.digitalocean.com/platform/ddos-protection/#scope-of-protection)
  - [Protected Resources](https://docs.digitalocean.com/platform/ddos-protection/#protected-resources)
  - [Protected OSI Layers](https://docs.digitalocean.com/platform/ddos-protection/#protected-osi-layers)

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