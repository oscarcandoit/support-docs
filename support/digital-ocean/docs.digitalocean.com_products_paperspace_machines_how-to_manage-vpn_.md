---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/"
title: "How to Create or Delete a Virtual Private Network | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/)
    - [Use ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
    - [Create Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/)
    - [Connect to Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/)
    - [Deactivate Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/)
    - [Manage Users](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/)
    - [Resize Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/)
    - [Transfer Files](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/)
    - [Use Windows Features](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/)
    - [Configure Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/)
    - [Manage Private Networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/)
    - [Manage Public IP Addresses](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/)
    - [Manage Shared Drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/)
    - [Manage Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/)
    - [Manage Custom Templates](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/)
    - [Manage VPNs](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/)
    - [Configure Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-desktop-streaming/)
    - [Manage NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/)
    - [Manage Hostnames](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/machines/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
    - [States and Error Codes](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/machines/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/)
    - [Glossary](https://docs.digitalocean.com/glossary/machines/)
  - [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/machines/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/machines/details/availability/)
    - [NVIDIA H100 Reference](https://docs.digitalocean.com/products/paperspace/machines/details/h100/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/machines/details/limits/)
    - [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/machines/support/)

- [Machines](https://docs.digitalocean.com/products/paperspace/machines/)
- [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
- Manage VPNs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create or Delete a Virtual Private Network

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

A Virtual Private Network (VPN) is a secure, encrypted network that runs over a public network, like the internet. A VPN typically consists of at least one gateway, a private network, and a tunnel.

- **VPN gateway**: An entry point that connects the machines within your private network to machines external to Paperspace, such as your local machine.
- **VPN tunnel**: An encrypted connection that secures and encrypts data transferred between machines. The VPN gateway creates a Protocol Security (IPSec) site-to-site VPN tunnel. This protocol ensures your machines communicate securely with a direct and encrypted connection.
- [**Private network**](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/): A dedicated network that’s logically isolated from other networks on Paperspace. A [private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create) is required to create a VPN, as a VPN gateway connects to your private network which then establishes a VPN tunnel.

The [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/) and [Paperspace CLI](https://docs.digitalocean.com/reference/paperspace/pspace/) cannot create VPNs. You can only create a VPN via the [Paperspace console](https://console.paperspace.com/) by submitting a VPN request to [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

## Create a Virtual Private Network

The VPN is manually created by Paperspace after submitting a request with the necessary specs. You need to provide the following resources for Paperspace to create a VPN: a [private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#choose-a-network), a [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#assign-a-vpn-public-ip-address), a [pre-shared key](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#add-a-pre-shared-key), and [internal networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#add-internal-networks).

To submit your VPN request, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **VPN** tab, then click **CREATE VPN** to open the **Create VPN** request form.

![The Create VPN request form of the Core dashboard's VPN page.](https://docs.digitalocean.com/screenshots/paperspace/machines/create-vpn-request-form.f55a641ee3eabcb90e9f2fd57de6b5787fb775ac87a6c653389833c5625c53aa.png)

### Choose or Set Up a Private Network

Before creating a VPN, you need a private network and the IP address of the machine you want to use as the VPN gateway.

If you do not have any private networks, [create a private network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#create) for your VPN. Within your private network, [attach the machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/#migrate) you want connected to the VPN.

### Retrieve Public IP Address

Before you create a VPN, get the public IP address of the machine you want to use as a VPN.

To find your machine’s IP address, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click **Machines** tab, then select the machine you want to get the IP address of.

From the machine’s overview page, in the top-right corner, click the **Settings** tab. In the **Settings** page, in the **Public IP** section, copy your machine’s IP address for later use.

If your machine doesn’t have a public IP address, [assign a public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/) to your machine.

![The IP address section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-ip-address-section.bb01028cbfdd30fdea4b2708e2ab65a3ccbe5f9ca372be8db8e57634bc2fecf7.png)

### Choose a Network

In the **Select a network** section, click the drop-down menu to select the private network you want connected to your VPN.

### Assign a VPN Public IP Address

In the **VPN Public IP Address** section, type the [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#retrieve-public-ip-address) of the machine you’re using as a VPN.

### Add a Pre-shared Key

A pre-shared key is a secret key shared between your machines and a physical or third-party location, such as a local machine.

Pre-shared keys secure the connection between machines by ensuring that only authorized machines can establish a connection to your VPN and its machines.

To add a pre-shared key, in the **Pre-shared Key** section, type the pre-shared key.

If you need to generate a pre-shared key, we recommend using [OpenSSL](https://www.openssl.org/), an open source library that implements protocols, such as the Secure Socket Layer (SSL), and offers cryptography methods, such as generating random keys.

Generate a pre-shared key using OpenSSL

To generate a pre-shared key using OpenSSL:

1. [Download and install the OpenSSL library](https://openssl-library.org/source/index.html) onto your local machine.

2. Open a terminal, run an `openssl rand` command that generates a random key. You can specify the byte format and the number of random bytes in your key. For example, the following `openssl rand` command outputs a pre-shared key encoded using the base64 format with 24 random bytes generated.


```shell
openssl rand -base64 24
```

3. The command should output a random generated key, which you can use as your pre-shared key.

### Add Internal Networks

Internal networks are the machines you want connected to your VPN.

In the **Internal Network(s), separated by commas** section, list the IP addresses of the machines you want accessible through your VPN.

After configuring your VPN, click **CREATE VPN**. A VPN may take up to 24-48 hours to create. Once your VPN is created, Paperspace support notifies you via email that your VPN is created and connected.

The VPN is not visible on the Paperspace console as it runs in the background and connects the machines in your private network, by default.

If you want to delete your VPN from your Paperspace account, contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/). Paperspace support notifies you via email once the VPN is deleted.

### Test VPN Connectivity

To test your VPN, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click the **Machines** tab, then find and select a machine belonging to your VPN’s private network.

On the machine’s overview page, click the **Details** tab, in the **Details** page, on the right side, under the **Private IP** section, copy the private IP address.

Then, [connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/), in your machine, open a terminal, and run a Internet Control Message Protocol (ICMP) (`ping`) command.

ICMP (Internet Control Message Protocol) sends and receives ping requests to test network connectivity. You can use a `ping` command to verify whether your machine can reach the VPN gateway and receive a response.

```shell
ping 203.0.113.0
```

Your VPN is working properly if the packets line indicates data was sent and received with minimal packet loss.

```shell
...
--- 203.0.113.0 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3068ms
...
```

If your `ping` command outputs a request timeout, you may need to enable ICMP command on your machine.

```shell
PING 203.0.113.0 (203.0.113.0): 56 data bytes
Request timeout for icmp_seq 0
...
```

Enable ICMP

For Windows-based machines, [configure your Windows firewall to enable ICMP](https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/configure).

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

To enable ICMP for Linux-based machines:

1. Run the `iptables` command to check the current rules on your machine.



```shell
sudo iptables -L -v
```



If ICMP is enabled, the output should show that `echo-request` and `echo-reply` is accepted.



```shell
ACCEPT     icmp -- anywhere             anywhere             icmp echo-request
ACCEPT     icmp -- anywhere             anywhere             icmp echo-reply
```

2. If ICMP isn’t enabled, enable it by allowing ICMP echo requests and replies.



```shell
sudo iptables -A INPUT -p icmp --icmp-type 8 -j ACCEPT
sudo iptables -A OUTPUT -p icmp --icmp-type 0 -j ACCEPT
```

3. Afterwards, save the new rules you’ve added.



```shell
sudo iptables-save | sudo tee /etc/iptables/rules.v4
```

4. Then, reboot your machine.



```shell
sudo reboot
```

5. To verify if ICMP is enabled, re-run the `iptables` command and find `ACCEPT icmp` for `echo-request` and `echo-reply`.



```shell
sudo iptables -L -v
```


After enabling ICMP on your machine, attempt to re-run your `ping` command. If you continue to receive timeout requests or other errors such as denied permissions, contact [Paperspace Support](https://docs.digitalocean.com/products/paperspace/machines/support/).

In this article...

- [Create a Virtual Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#create-a-virtual-private-network)
  - [Choose or Set Up a Private Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#choose-or-set-up-a-private-network)
  - [Retrieve Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#retrieve-public-ip-address)
  - [Choose a Network](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#choose-a-network)
  - [Assign a VPN Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#assign-a-vpn-public-ip-address)
  - [Add a Pre-shared Key](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#add-a-pre-shared-key)
  - [Add Internal Networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#add-internal-networks)
  - [Test VPN Connectivity](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/#test-vpn-connectivity)

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