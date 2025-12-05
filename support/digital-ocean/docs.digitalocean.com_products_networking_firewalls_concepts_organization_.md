---
url: "https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/"
title: "How to Organize DigitalOcean Cloud Firewalls | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/firewalls.ae799a907969d743602c769c16fd2ad744471b683543c748c3cfb89494091454.svg)Cloud Firewalls](https://docs.digitalocean.com/products/networking/firewalls/)
- [Getting Started](https://docs.digitalocean.com/products/networking/firewalls/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/firewalls/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/firewalls/how-to/)
  - [Create Firewalls](https://docs.digitalocean.com/products/networking/firewalls/how-to/create/)
  - [Configure Rules](https://docs.digitalocean.com/products/networking/firewalls/how-to/configure-rules/)
  - [Apply Firewalls to Droplets](https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/)
  - [View Rules for Droplets](https://docs.digitalocean.com/products/networking/firewalls/how-to/view-rules-for-droplet/)
  - [Destroy Firewalls](https://docs.digitalocean.com/products/networking/firewalls/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/networking/firewalls/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Firewalls)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/)
- [Concepts](https://docs.digitalocean.com/products/networking/firewalls/concepts/)
  - [Organize Firewalls](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/)
- [Details](https://docs.digitalocean.com/products/networking/firewalls/details/)
  - [Features](https://docs.digitalocean.com/products/networking/firewalls/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/firewalls/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/firewalls/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/firewalls/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/firewalls/support/)

- [Concepts](https://docs.digitalocean.com/products/networking/firewalls/concepts/)
- Organize Firewalls

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Organize DigitalOcean Cloud Firewalls

Validated on 4 Sep 2019 • Last edited on 14 Aug 2024

DigitalOcean Cloud Firewalls are a network-based, stateful firewall service for Droplets provided at no additional cost. Cloud firewalls block all traffic that isn’t expressly permitted by a rule.

DigitalOcean Cloud Firewalls provide a central location for preventing unauthorized traffic from reaching your Droplets that is configurable, quick to apply, and automation-friendly. Still, organizing the infrastructure can be tricky.

If you start to create firewalls without a plan, you can end up with dozens of firewalls that don’t make a lot of sense. However, over-complicated planning can lead to analysis paralysis.

This article explores an initial strategy for organizing your cloud firewalls to make them easier to use and maintain as well as document the relationships within your infrastructure.

## Splitting by Role

To get started, we’ll build our cloud firewalls based on the roles their rules serve. For example, if we have a monolithic web application, say a Droplet named `website` running a PHP application with a local MySQL database, there are two distinct roles that need to be fulfilled:

1. Web server — This public-facing role is the main purpose for the Droplet, which serves web pages to the public.
2. Management — The management role allows privileged access for administrators to maintain the server and deploy the application.

We could have a single cloud firewall with rules to allow both jobs, and for small deployments it would work fine. However, if we’re expecting to scale the app in the future, we can separate these concerns now and create two different firewalls:

1. `webserver-fw`: Opens TCP ports 80 (if we allow unencrypted traffic) and 443 (if we are using SSL) to all sources.
2. `management-fw`: Opens TCP port 22 (SSH) to all sources. If we want to restrict the access to specific locations such an IP range in our office, we would add that in the sources of this rule as well.

Separating the firewalls in this way indicates which access is for administrators and which is for end user interaction. The names help document the system, which is especially useful when someone less familiar with its details needs to step in. It becomes even more useful as our infrastructure becomes more complex.

As the application grows, we might want to split workloads across multiple servers. It’s common, for example, to separate the web server and database, putting each one on its own Droplet. When we make a change like that, we can adapt our firewall strategy as follows:

1. Maintain `management-fw` without any changes. We’ll still need to use SSH for administrative tasks.
2. Maintain `webserver-fw` as-is. Its functionality is still the same.
3. Create a new cloud firewall named `database-fw`, with a rule to open TCP port 3306 — MySQL’s default — to the source Droplet `website`.
4. Apply `database-fw` and `management-fw` to the new Droplet. Administrators are able to do their work, and only the `website` server is allowed to access the database port.

Our initial organization allowed us to avoid changes to previously created cloud firewalls, reuse one of them, indicate the service being used on the new `database` Droplet, and open access to each server by adding what is strictly required.

## Using Tags

So far we’ve talked about a small application which can be served by one or two Droplets, and we’ve applied the firewalls by using the Droplet names. When our traffic grows and we prepare to scale up, using Droplet names can become unwieldy.

We might choose to keep our two-server architecture and scale vertically by beefing up the servers with more memory or processing power so they can keep up with requests, but this won’t change the fact that each one is still a single point of failure. Because we’re working in the Cloud, we’re more likely to scale horizontally, where we distribute traffic among multiple redundant servers. At this point, we’ll need to start using tools and practices that allow us to treat Droplets as interchangeable resources. This shift in strategy is known in cloud circles as [“pets vs cattle”](https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/) and goes hand-in-hand with configuration management tools like Ansible, Chef, and Puppet.

When we start to think of our Droplets as groups of redundant, interchangeable resources, we need group-based ways to work with them. DigitalOcean facilitates group-based management [using tags](https://docs.digitalocean.com/products/droplets/how-to/tag/), which are text labels that we attach to Droplets to classify them. Once we’ve tagged Droplets, we use those tags to create relationships between other DigitalOcean resources like load balancers and cloud firewalls.

In our case, we can create two tags, `webserver` and `database`, and add the appropriate tag to each Droplet. When we do this, we also rename the Droplets to `website-01` and `database-01`, explicitly marking them as replaceable pieces of our deployment. Then, we change our cloud firewalls as follows:

1. `management-fw`: Add both `webserver` and `database` tags to them and remove the association with specific Droplet names.
2. `webserver-fw`: Add the `webserver` tag and remove the `website-01` Droplet
3. `database-fw`: Add the `database` tag and remove the `database-01` Droplet. Change the source on the TCP 3306 rule from the named Droplet to use the tag `webserver`.

With this shift to tags, each cloud firewall’s rules are applied to any Droplet marked with those tags. It doesn’t matter how many Droplets there are. If we were to launch a couple of new web server Droplets, like `website-02` and `website-03`, they would automatically get the rules from `webserver-fw` and be granted access to any Droplet where the `database-fw` is applied. This lets us focus on scaling the application up or down while the security controls are handled by cloud firewalls.

The process above could be extended to more complex applications. For example, if we had a subsystem to queue requests or a group of servers dedicated as process workers, we could tag them as `queue` and `workers` respectively, apply the firewall rules that are specific to them, and share common aspects like `management-fw`.

Using tags to organize and document our infrastructure clarifies relationships between different Droplets and makes it easier to manage them in bulk. We are not restricted to a single tag per Droplet, so we can apply other tags to help automate or document processes.

## On Naming

We’ve used `webserver` and `management` as generic examples of cloud firewall names. You should use names that make sense for you and your team’s specific context. Perhaps `deployment` would be more appropriate than `management`. If that’s the case, use `deployment`.

We’re also adding `-fw` to the end of the firewall names to identify resources in situations where there isn’t a UI to distinguish items. Suppose, for example, you have a Droplet named `webserver` with a `webserver` tag and a firewall named `webserver`. When you parse the output of a command-line tool like [doctl](https://www.digitalocean.com/community/tutorials/how-to-use-doctl-the-official-digitalocean-command-line-client), which is which? In the control panel UI it’s usually indicated, but this may not be the case in other scenarios, so using a naming strategy to differentiate can add clarity and simplify scripting.

In this article...

- [Splitting by Role](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/#splitting-by-role)
- [Using Tags](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/#using-tags)
- [On Naming](https://docs.digitalocean.com/products/networking/firewalls/concepts/organization/#on-naming)

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