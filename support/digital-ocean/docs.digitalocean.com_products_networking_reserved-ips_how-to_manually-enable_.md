---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/"
title: "How to Manually Enable Reserved IPs | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/reserved-ips.c9c9b721d99d9592de022671f4dd4b27147dea7162dbfa52ee239edccf9d612f.svg)Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)
- [Getting Started](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
  - [Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)
  - [Delete Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/delete/)
  - [Reassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/)
  - [Manually Enable Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/)
  - [Find Droplet Anchor IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/)
  - [Send Outbound Traffic](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/outbound-traffic/)
  - [Provision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/)
  - [Deprovision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/)
  - [Manage BYOIP Advertisement](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/)
  - [Assign BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/assign-byoip-ip/)
  - [Modify BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/)
- [Reference](https://docs.digitalocean.com/products/networking/reserved-ips/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/)
- [Concepts](https://docs.digitalocean.com/products/networking/reserved-ips/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/reserved-ips/)
- [Details](https://docs.digitalocean.com/products/networking/reserved-ips/details/)
  - [Features](https://docs.digitalocean.com/products/networking/reserved-ips/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/reserved-ips/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/reserved-ips/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/reserved-ips/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/reserved-ips/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
- Manually Enable Reserved IPs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manually Enable Reserved IPs

Validated on 17 Jun 2025 • Last edited on 17 Jun 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

The following situations require additional manual configuration to enable reserved IP addresses:

- **For reserved IPv4 addresses**, all Droplets created before 20 October 2015 do not have anchor IP addresses automatically assigned to them. To use reserved IPv4 addresses with Droplets created before this date you need to manually add an anchor IP address to the Droplet’s public network interface (usually `eth0`).

Refer to the sections [Enable Anchor IPs Immediately](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#enable-anchor-ips-immediately) and [Persist Anchor IPs After Reboots](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#persist-anchor-ips-after-reboots) to make these changes.

If you try to add a reserved IP to a Droplet without an anchor IP, you receive a warning in the control panel with instructions on how to add the anchor IP.

- **For reserved IPv6 addresses**, all Droplets require a manual configuration update after the reserved IPv6 address is assigned to it. See [Enable Reserved IPv6](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#enable-reserved-ipv6) for more information and an example Bash script.


## Enable Anchor IPs Immediately

First, [find your Droplet’s anchor IP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/). You need to use it in all of the following commands.

On Linux distributions (like Ubuntu, Debian, CentOS, and Fedora), use the following command to add the anchor IP address to your networking configuration, substituting in your anchor IP.

```shell
sudo ip addr add use_your_anchor_ip/16 dev eth0
```

On FreeBSD, add the anchor IP with this command:

```shell
sudo ifconfig vtnet0 use_your_anchor_ip netmask 255.255.0.0 alias
```

To make the setting persist after reboots, you need to modify the network interface of your Droplet. How you do this depends on the Droplet’s operating system.

## Persist Anchor IPs After Reboots

Update your Droplet’s network interface configuration to persist the anchor IP across reboots. Refer to the distro-specific instructions that follow.

Ubuntu 14.x and Debian 7, 8

Open `/etc/network/interfaces` and add the line highlighted below, substituting in your anchor IP.

`/etc/network/interfaces`

```text
auto eth0
iface eth0 inet static
        address 203.0.113.0
        netmask 255.255.252.0
        gateway 162.243.184.1
        up ip addr add use_your_anchor_ip/16 dev eth0
        dns-nameservers 8.8.8.8 8.8.4.4
```

Fedora, CentOS 6, and CentOS 7

Open `/etc/sysconfig/network-scripts/ifcfg-eth0` and add the line highlighted below, substituting in your anchor IP.

/etc/sysconfig/network-scripts/ifcfg-eth0

```text
DEVICE='eth0'
TYPE=Ethernet
BOOTPROTO=none
ONBOOT='yes'
HWADDR=04:01:76:bc:91:01
IPADDR=104.131.99.188
NETMASK=255.255.192.0
GATEWAY=104.131.64.1
NM_CONTROLLED='yes'
IPADDR2=use_your_anchor_ip
PREFIX2=16
DNS1=8.8.8.8
DNS2=8.8.4.4
```

Again, remember to replace the highlighted IP address with your anchor IP.

CentOS 5

In order for your anchor IP to persist after reboot, you must create a new file containing the networking information at `/etc/sysconfig/network-scripts/ifcfg-eth0` on the Droplet. This can be done by copying the existing `/etc/sysconfig/network-scripts/ifcfg-eth0` file.

```shell
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Open the `/etc/sysconfig/network-scripts/ifcfg-eth0:0` file and modify the lines highlighted below to update the value of the `IPADDR` and `DEVICE` fields to the value of your anchor IP.

`/etc/sysconfig/network-scripts/ifcfg-eth0:0`

```text
DEVICE='eth0:0'
TYPE=Ethernet
BOOTPROTO=none
ONBOOT='yes'
HWADDR=04:01:76:d6:cb:01
IPADDR=use_your_anchor_ip
NETMASK=255.255.224.0
GATEWAY=45.55.64.1
NM_CONTROLLED='yes'
PREFIX2=16
DNS1=8.8.8.8
DNS2=8.8.4.4
```

FreeBSD

In order for your anchor IP to persist after reboot, append the new networking information to the file `/etc/rc.digitalocean.d/droplet.conf`, substituting in your anchor IP.

```shell
echo 'ifconfig_vtnet0_alias0="inet use_your_anchor_ip netmask 255.255.0.0"' | sudo tee -a /etc/rc.digitalocean.d/droplet.conf
```

## Enable Reserved IPv6

All Droplets require additional network configuration to enable reserved IPv6 addresses. This configuration must be done _after_ a reserved IPv6 address is assigned to the Droplet. The following example Bash script shows one way to implement these updates.

```bash
#!/bin/bash -eu

IFACE_ETH0="eth0"
IFACE_LO="lo"
PREFIX_LEN="128"

# get Droplet metadata
md=$(curl -s 169.254.169.254/metadata/v1.json)

# get reserved IPv6 info from metadata
md_rip6_json=$(echo "${md}" | jq -r '.reserved_ip.ipv6')

case "$(echo "${md_rip6_json}" | jq -r '.active')" in
    "true")
        # if active, set up interface and routes
        rip6=$(echo "${md_rip6_json}" | jq -r '.ip_address')
        ip -6 addr replace "${rip6}/${PREFIX_LEN}" dev ${IFACE_LO} scope global
        echo "Assigned ${rip6}/${PREFIX_LEN} to ${IFACE_LO}"
        ip -6 route replace default dev ${IFACE_ETH0}
        echo "Created default IPv6 route via ${IFACE_ETH0}"
        ;;

    "false")
        # if inactive, clean up interface and routes
        ip -6 addr flush dev ${IFACE_LO} scope global
        echo "Removed all Reserved IPv6 addresses from ${IFACE_LO}"
        # technically, the route can remain even beyond removal,
        # but to keep consistency with existing behavior without
        # a reserved IPv6, we'll clean it up
        if [[ "$(ip -6 route show default dev ${IFACE_ETH0})" != "" && "$(ip -6 addr show dev ${IFACE_ETH0} scope global)" == "" ]]; then
            ip -6 route delete default dev ${IFACE_ETH0}
            echo "Deleted default IPv6 route via ${IFACE_ETH0}"
        fi
        ;;
esac
```

The script checks if the Droplet has a reserved IPv6 assigned. If it does, the script assigns it to the `lo` network interface and configures routing rules to allow traffic flow. If the Droplet does not have a reserved IPv6 assigned, the script removes any existing reserved IPv6 addresses from the `lo` interface and cleans up related routes.

The script requires `jq` and `curl`. Run the script directly on the command line to verify it is functioning properly, then create a cron job or systemd timer to run it periodically.

You can use `ipv6.icanhazip.com` to test network connectivity and confirm the IPv6 address matches:

```shell
curl https://ipv6.icanhazip.com/
```

Your reserved IPv6 address should print to the console, similar to `2001:0DB8:0:202a::b75:5000`.

As with regular “static” public IPv6 assignments on Droplets, you have access to all 16 IP addresses in the `/124` range. You may additionally run the following command to enable additional addresses:

```shell
ip -6 addr add 2001:0DB8:0:202a::b75:5005/128 dev lo scope global
```

Replace the example IPv6 address with one within your `/124` range.

In this article...

- [Enable Anchor IPs Immediately](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#enable-anchor-ips-immediately)
- [Persist Anchor IPs After Reboots](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#persist-anchor-ips-after-reboots)
- [Enable Reserved IPv6](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/#enable-reserved-ipv6)

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