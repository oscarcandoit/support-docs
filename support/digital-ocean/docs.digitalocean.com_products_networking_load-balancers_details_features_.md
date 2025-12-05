---
url: "https://docs.digitalocean.com/products/networking/load-balancers/details/features/"
title: "Load Balancers Features | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/load-balancers.1b5f8a9d40bf92d2798a187032a28a29572afdd5e74855e5b1c1d30dfffc07ed.svg)Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/)
- [Getting Started](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/quickstart/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [How-Tos](https://docs.digitalocean.com/products/networking/load-balancers/how-to/)
  - [Create Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create/)
  - [Create Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/create-global-load-balancer/)
  - [Manage Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/)
  - [Manage Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage-global-load-balancers/)
  - [Scale Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/)
  - [Configure SSL Passthrough](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-passthrough/)
  - [Balance TCP Traffic](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/)
  - [Configure Backend Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/configure-droplets-for-nlb/)
  - [Destroy Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/how-to/destroy/)
  - [Configure SSL Termination](https://docs.digitalocean.com/products/networking/load-balancers/how-to/ssl-termination/)
- [Reference](https://docs.digitalocean.com/products/networking/load-balancers/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Load-Balancers)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/)
- [Concepts](https://docs.digitalocean.com/products/networking/load-balancers/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/networking/load-balancers/concepts/best-practices/)
  - [Load Balancer Status](https://docs.digitalocean.com/products/networking/load-balancers/concepts/load-balancer-status/)
- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
  - [Features](https://docs.digitalocean.com/products/networking/load-balancers/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/load-balancers/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/load-balancers/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/load-balancers/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/load-balancers/support/)

- [Details](https://docs.digitalocean.com/products/networking/load-balancers/details/)
- Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Load Balancers Features

Validated on 27 Mar 2025 • Last edited on 22 Sep 2025

DigitalOcean fully manages Regional Load Balancers and Global Load Balancers, ensuring they are highly available load balancing services. Load balancers distribute traffic to groups of backend resources in specific regions or across different regions, which prevents the health of a service from depending on the health of a single server, cluster, or region.

Using a load balancer as a gateway gives you the flexibility to change your backend infrastructure without affecting the availability of your services, enabling seamless scaling, rolling deployments, large architecture redesigns, and more.

Additionally, sharing the processing workload among a group of servers rather than relying on a single server prevents any one machine from being overwhelmed by requests.

Load balancing services like DigitalOcean Load Balancers give you the benefits of load balancing without the burden of managing the operational complexities.

We offer both regional load balancers (load balancers that span a [single datacenter region](https://docs.digitalocean.com/platform/regional-availability/)) and global load balancers (load balancers that span multiple datacenter regions).

## All Load Balancers

Both global and regional load balancers have the following features:

### High Availability

All DigitalOcean Load Balancers automatically monitor their backend pools and only send requests to Droplets that pass health checks. You can define health check endpoints and set the parameters around what constitutes a healthy response. The load balancer automatically removes Droplets that fail health checks from rotation and adds them back when the health checks pass.

Additionally, [DigitalOcean Load Balancers with more nodes](https://docs.digitalocean.com/products/networking/load-balancers/how-to/scale/) can stay more highly available by distributing traffic among the remaining nodes when a node goes down.

### Backend Droplet Tagging

There are two different ways to [define backend Droplets](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#droplets) for a load balancer:

- **By name**, which lets you add individual Droplets to a load balancer using the control panel or API.
- **With a tag**, which load balancers evaluate at runtime.

[Tags](https://docs.digitalocean.com/products/droplets/how-to/tag/) are custom labels you can apply to Droplets.

You can choose up to 10 backend Droplets by name. However, we recommend using **tags** as a more scalable automated solution. If you need to add more than 10 Droplets to a load balancer, you can use a tag. You can apply the tag to as many Droplets as needed and [then add the tag to the load balancer](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#droplets). There is no limit to the number of Droplets to which you can apply a tag. Using a tag automatically updates your load balancer when you add or remove the tag from Droplets.

You can use one tag per load balancer.

### Backend Droplet Connections

The load balancer automatically connects to Droplets in its [VPC network](https://docs.digitalocean.com/products/networking/vpc/). If a Droplet’s private networking interface has been disabled, the load balancer connects to the Droplet using its public IP address when added to the load balancer. All Droplets created after 1 October, 2020 are added to a VPC network by default.

Load balancers send traffic to Droplet using dynamic backend IP addresses that are separate from the public IP addresses displayed in the control panel. Backend IP addresses may change at any time and should not be used to configure firewalls.

### Load Balancing Algorithm

The load balancing algorithm assigns new connections and requests to the backends as equally as possible, while maintaining performance as more backends are introduced. In nearly all cases, the load balancing algorithm provides better performance and distribution than traditional round robin and least connections options.

### HTTP

Standard HTTP balancing directs requests based on standard HTTP mechanisms. The load balancer sets the `X-Forwarded-For`, `X-Forwarded-Proto`, and `X-Forwarded-Port` headers to give the backend servers information about the original request.

If user sessions depend on the client always connecting to the same backend, a cookie can be sent to the client to enable sticky sessions.

### HTTPS and HTTP/2

You can balance secure traffic using either HTTPS or HTTP/2. Both protocols can be configured with:

- **SSL termination**, which handles the SSL decryption at the load balancer after you add your SSL certificate and private key. Your load balancer can also act as a gateway between HTTP/2 client traffic and HTTP/1.0 or HTTP/1.1 backend applications this way.

- **SSL passthrough**, which forwards encrypted traffic to your backend Droplets. This is a good for end-to-end encryption and distributing the SSL decryption overhead, but you need to manage the SSL certificates yourself.


You can configure load balancers to redirect HTTP traffic on port 80 to HTTPS or HTTP/2 on port 443. This way, the load balancer can listen for traffic on both ports but redirect unencrypted traffic for better security.

### Let’s Encrypt SSL Certificates

DigitalOcean Load Balancer Let’s Encrypt certificates are fully managed and automatically renewed on your behalf every 60 days. You can use SSL certificates with HTTPS and HTTP/2.

### Configurable Connection Timeouts

You [can set the amount of time](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#http-idle-timeout) a load balancer allows an HTTP connection to remain idle before timing out.

## Regional Load Balancers

Regional load balancers have the following additional features:

### Protocol Support

You can configure a single DigitalOcean Load Balancer to handle multiple protocols and ports. You can control traffic routing with configurable rules that specify the ports and protocols that the load balancer should listen on, as well as the way that it should select and forward requests to the backend servers.

Because DigitalOcean Load Balancers are not application load balancers, they do not support directing traffic to specific backends based on URLs, cookies, HTTP headers, etc.

### HTTP/3

You can also configure load balancers to receive and balance HTTP/3 traffic.

HTTP/3 can only be used as an entry protocol, and only one HTTP/3 rule may be specified per load balancer. Any forwarding rules using HTTP/3 require an additional rule that specifies either HTTP/2 or HTTPS as the entry protocol.

For browser compatibility purposes, an additional HTTP or HTTP/2 forwarding rule is required when setting up forwarding rules using HTTP/3. Two forwarding rules may share the same entry port.

Responses from load balancers using HTTP/3 include an [`alt-svc` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc) with their responses to indicate to the client that the endpoint is available over HTTP/3.

### IPv6 Support

You can choose between IPv4-only networking and dual-stack IPv4 and IPv6 networking when you create a new external regional load balancer. Network load balancers on DOKS do not support IPv6.

### TCP Balancing

[TCP balancing](https://docs.digitalocean.com/products/networking/load-balancers/how-to/tcp/) is available for applications that do not speak HTTP. For example, deploying a load balancer in front of a database cluster like Galera would allow you to spread requests across all available machines.

### UDP Balancing

UDP balancing is available for applications that require more time-sensitive transmission, such as live broadcasts. Forwarding rules using UDP require you to set both the entry and target protocols to UDP. When using UDP, the load balancer requires that you set up a health check with a port that uses TCP, HTTP, or HTTPS to work properly.

Because UDP is a stateless protocol, the load balancer maintains its own session state in order to route return traffic from Droplets back to the client. The load balancer triggers a session timeout when it hasn’t detected any sending or receiving traffic for one minute.

When using UDP, the load balancer assigns incoming connections to healthy target Droplets using the source IP of the client. This means that all subsequent requests from the same client land on the same target Droplet. If a target Droplet becomes unhealthy or you add or remove target Droplets, the load balancer assigns clients to new target Droplets.

### WebSocket Support

DigitalOcean Load Balancers support the [WebSocket protocol](https://tools.ietf.org/html/rfc6455) without any additional configuration.

When using WebSockets, the load balancer uses a special one hour inactivity timeout instead of the default 60 second timeout.

The following forwarding rule configurations support WebSockets:

- TCP
- HTTP to HTTP
- HTTPS to HTTP
- HTTPS to HTTPS (both with a certificate and passthrough)
- HTTP/2 to HTTP
- HTTP/2 to HTTP/2 (both with a certificate and passthrough)

You can use WebSockets with or without [backend keepalive enabled](https://docs.digitalocean.com/products/networking/load-balancers/how-to/manage/#backend-keepalive).

We test our load balancers against the industry standard [Autobahn\|Testsuite](https://github.com/crossbario/autobahn-testsuite) for all configurations.

### PROXY Protocol

[PROXY protocol](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt) is a way to send client connection information (like origin IP addresses and port numbers) to the final backend server rather than discarding it at the load balancer. This information can be helpful for use cases like analyzing traffic logs or changing application functionality based on geographical IP.

DigitalOcean Load Balancers have support for [PROXY protocol version 1](https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt). [Configure your backend services to accept PROXY protocol headers](https://docs.digitalocean.com/support/why-did-all-of-my-backend-droplets-become-unhealthy-when-i-enabled-proxy-protocol-on-my-load-balancer/) after you enable it on your load balancer.

### Network Visibility

Regional load balancers can route traffic publicly or privately. Internal-only load balancers lack a public IP address and are accessible only to resources within the same [VPC](https://docs.digitalocean.com/products/networking/vpc/) network.

### Network Load Balancing

Network load balancers are regional load balancers that route TCP and UDP traffic at the transport level (layer 4). They direct traffic based on IP addresses and port numbers and often deliver better efficiency and performance than layer 7 load balancers for some workloads.

## Global Load Balancers

Global load balancers have the following additional features:

### Cross Region Backend Connectivity

You can add resources across multiple regions to a global load balancer’s backend pool.

### CDN Caching

You can enable CDN caching on global load balancers to cache content closer to your users around the world. This can improve your application’s performance by reducing the number of requests to your origin servers.

In this article...

- [All Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#all-load-balancers)
  - [High Availability](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#high-availability)
  - [Backend Droplet Tagging](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#backend-droplet-tagging)
  - [Backend Droplet Connections](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#backend-droplet-connections)
  - [Load Balancing Algorithm](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#load-balancing-algorithm)
  - [HTTP](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#http)
  - [HTTPS and HTTP/2](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#https-and-http2)
  - [Let’s Encrypt SSL Certificates](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#lets-encrypt-ssl-certificates)
  - [Configurable Connection Timeouts](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#configurable-connection-timeouts)
- [Regional Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#regional-load-balancers)
  - [Protocol Support](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#protocol-support)
  - [HTTP/3](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#http3)
  - [IPv6 Support](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#ipv6-support)
  - [TCP Balancing](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#tcp-balancing)
  - [UDP Balancing](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#udp-balancing)
  - [WebSocket Support](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#websocket-support)
  - [PROXY Protocol](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#proxy-protocol)
  - [Network Visibility](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#network-visibility)
  - [Network Load Balancing](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#network-load-balancing)
- [Global Load Balancers](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#global-load-balancers)
  - [Cross Region Backend Connectivity](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#cross-region-backend-connectivity)
  - [CDN Caching](https://docs.digitalocean.com/products/networking/load-balancers/details/features/#cdn-caching)

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