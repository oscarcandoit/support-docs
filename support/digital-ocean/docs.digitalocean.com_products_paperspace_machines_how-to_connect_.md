---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/"
title: "How to Connect to a Machine | DigitalOcean Documentation"
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
- Connect to Machines

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect to a Machine

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

You can connect to your Linux or Windows-based machine using the [Paperspace console](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-via-ssh-using-the-paperspace-console) or [desktop app](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-using-the-desktop-app) using SSH connection. For Windows-based machines, you can [connect to your machine by desktop streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-via-desktop-streaming) or using third-party tools like RDP, TeamViewer, VNC, and others.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

If you’re planning to use a third-party tool to connect to your Windows-based machine, such as [Windows’ Remote Desktop Protocol (RDP)](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#rdp), refer to their documentation as needed. Desktop streaming is only available for your Windows-based machines.

You cannot use either the [Paperspace API and CLI](https://docs.digitalocean.com/products/paperspace/machines/reference/) to connect to your machine. If you want to connect to your machine, you must use the [Paperspace console](https://console.paperspace.com/).

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

## Connect to Your Machine Using the Paperspace Console

To connect to your machine, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the machine you want to connect to. In the machine’s overview page, click the **Details** tab, then click **START**. This changes the machine state from **Off** to **Starting up** and the **START** button to **CONNECT**.

![The Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-page.d9071be33b0f83c2e2a17f8a771b51e9a8fd95e091602c76b7a3c83d5b9ce09b.png)

Once the **Starting up** state changes to **On/Ready**, in the machine’s overview page, under the **SHUTDOWN** and **RESTART** buttons, in the **Access your machine** sub-section, copy the SSH command used to connect to your machine.

![The connection options in the Details page of the machine overview page](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-connection-options.1dab935188bac5c3cb9be78b56a077495f1dc58cb6bb17580a49c51650144916.png)

On your local machine, open a terminal, paste the command you copied, and execute it. The terminal should either prompt you to set up an SSH connection to your new machine or immediately display the welcome screen, indicating that you have connected to your machine. If you are connecting to your machine for the first time, then you need to set up your SSH connection.

Set Up SSH Connection

When you first attempt to connect to your machine, you are prompted to set up the connect.

```text
The authenticity of host '203.0.113.0 (203.0.113.0)' can't be established.
...
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

To set up your SSH connection:

1. In your terminal, type “yes” to the prompt, then **ENTER**, which permanently adds the machine’s IP address as a known host on your local machine.

2. Then, paste the SSH command again to re-attempt a connection to your machine. This should output a welcome screen of your machine, indicating a successful connection.


If you don’t see the welcome screen and/or are unable to connect to your machine, contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

## Connect to Your Machine Using the Desktop App

If you want to use the desktop app to connect to your machine, you need to have a [Paperspace account](https://console.paperspace.com/). You need to also download and install the [desktop app](https://paperspace.com/app) on your local machine. On your local machine, launch the desktop app, then in the desktop app, log in to your Paperspace account.

After you have successfully logged into your Paperspace account, you should see your Paperspace account within the desktop app, which mirrors the experience on the Paperspace console.

Follow the [Connect to Your Machine Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-using-the-paperspace-console) section to connect to your machine through the desktop app.

## Connect to Your Machine via Desktop Streaming

To connect to your machine via desktop streaming, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the machine you want to connect to. In the machine’s overview page, click the **Details** tab, then click **START**. This changes the machine state from **Off** to **Starting up** and the **START** button to **CONNECT**.

![The Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-page.d9071be33b0f83c2e2a17f8a771b51e9a8fd95e091602c76b7a3c83d5b9ce09b.png)

Once the **Starting up** state changes to **On/Ready**, in the machine’s overview page, under the **SHUTDOWN** and **RESTART** buttons, in the **Stream your desktop** sub-section, click **OPEN DESKTOP** to open your streamed desktop in a new browser tab.

![The connection options in the Details page of the machine overview page.](https://docs.digitalocean.com/screenshots/paperspace/machines/machine-overview-connection-options.1dab935188bac5c3cb9be78b56a077495f1dc58cb6bb17580a49c51650144916.png)

## Test Your Connectivity

You can test your machine’s latency and connectivity to Paperspace by running a speed test, a ping test, and a traceroute to the public IP address of your machine’s datacenter.

Each datacenter region has a public IP address:

- `NY2`: `184.105.3.1`
- `CA1`: `64.62.255.1`
- `AMS1`: `74.82.28.1`

To test your machine’s latency and connectivity, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, connect to the machine you want to test.

### Test Using a Speed Test Website

You can test your machine’s latency using an online speed test, like [https://www.speedtest.net](https://www.speedtest.net/). Choose a server in a location closest to your machine’s datacenter region, then run the test. For example, if your Paperspace machine’s datacenter region is `NY2`, then find a location closest to the east coast.

### Test Using `ping`

To test your machine’s latency using `ping`, open a terminal and run `ping` with the number of pings you want to output (like `-c 5` for five pings) and the datacenter’s IP address. For example, to check your machine’s ping for the `NY2` datacenter region, use the following command:

```bash
ping -c 5 184.105.3.1
```

Your terminal should output your machine’s ping at the end of each line.

```bash
PING 184.105.3.1 (184.105.3.1): 56 data bytes
64 bytes from 184.105.3.1: icmp_seq=0 ttl=56 time=93.680 ms
...
```

### Test Using traceroute

For Windows-based machines, open a terminal, then run the `tracert` command alongside the number of hops you want to trace, which limits the maximum number of intermediate hops to display, and your machine’s datacenter region’s IP address. For example, when testing your machine’s latency to the `NY2` datacenter region, this `tracert` command specifies that you want to trace five hops:

```shell
tracert -h 5 184.105.3.1
```

Your terminal should display the tracing route of your machine to its datacenter like the output below. You should look at the latency (in ms) after each hop. For example, the first hop (`router.local`) shows the following latency values: <1 ms, <1 ms, and <1 ms, which indicate that the RTT for the first hop is around 1 ms.

```bash
Tracing route to 184.105.3.1 over a maximum of 5 hops

  1    <1 ms    <1 ms    <1 ms  router.local [192.168.1.1]
  2    10 ms    10 ms    10 ms  10.0.0.1
  3    15 ms    15 ms    15 ms  192.168.2.1
  4    20 ms    20 ms    20 ms  isp-gateway.example.com [203.0.113.1]
  5    25 ms    25 ms    25 ms  184.105.3.1
...
```

On some Linux distributions, `traceroute` isn’t installed by default. You can install it using your distribution’s package manager, like APT for Ubuntu-based systems (`sudo apt-get install traceroute`).

For Linux-based machines, open a terminal, then run the `traceroute` command and specify the IP address of your machine’s datacenter. We recommend also specifying the number of hops you want to trace (for example, `-m 5` for five hops), which limits the maximum number of intermediate hops to display.

```bash
traceroute -m 5 184.105.3.1
```

Your terminal displays the route your packets take from your machine to its datacenter and the latency of each hop.

In the example below, the first hop to `router.local` shows 1.009 ms, 1.259 ms, and 1.514 ms of latency, so the round-trip time (RTT) for the first hop is approximately 1.3 ms.

```bash
traceroute to 184.105.3.1 (184.105.3.1), 30 hops max, 60 byte packets
 1  router.local (192.168.1.1)  1.009 ms  1.259 ms  1.514 ms
 2  10.0.0.1 (10.0.0.1)  11.234 ms  11.522 ms  11.804 ms
 3  192.168.2.1 (192.168.2.1)  14.331 ms  14.613 ms  14.908 ms
 4  isp-gateway.example.com (203.0.113.1)  21.234 ms  21.516 ms  21.799 ms
 5  184.105.3.1 (184.105.3.1)  25.321 ms  25.604 ms  25.888 ms
```

In this article...

- [Connect to Your Machine Using the Paperspace Console](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-using-the-paperspace-console)
- [Connect to Your Machine Using the Desktop App](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-using-the-desktop-app)
- [Connect to Your Machine via Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#connect-to-your-machine-via-desktop-streaming)
- [Test Your Connectivity](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#latency)
  - [Test Using a Speed Test Website](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#test-using-a-speed-test-website)
  - [Test Using `ping`](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#test-using-ping)
  - [Test Using traceroute](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/#test-using-traceroute)

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