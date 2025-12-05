---
url: "https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/"
title: "How to Mount NFS File Shares on Bare Metal GPUs | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/bare-metal-gpus.7498b79d7a8142afb95399794d7f631c490388aa4fb5b30d9021292dca01d125.svg)Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/)
- [How-Tos](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/)
  - [Create Bare Metal GPUs](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/create/)
  - [Mount NFS File Shares](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/)
- [Concepts](https://docs.digitalocean.com/products/bare-metal-gpus/concepts/)
  - [Bare Metal GPUs vs GPU Droplets](https://docs.digitalocean.com/products/bare-metal-gpus/concepts/gpu-product-comparison/)
- [Details](https://docs.digitalocean.com/products/bare-metal-gpus/details/)
  - [Features](https://docs.digitalocean.com/products/bare-metal-gpus/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/bare-metal-gpus/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/bare-metal-gpus/details/availability/)
  - [Legal Agreements](https://www.digitalocean.com/legal/bare-metal-gpu-agreements)
  - [Limits](https://docs.digitalocean.com/products/bare-metal-gpus/details/limits/)
- [Support](https://docs.digitalocean.com/products/bare-metal-gpus/support/)
  - [Contact Form](https://docs.digitalocean.com/products/bare-metal-gpus/support/contact/)

- [How-Tos](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/)
- Mount NFS File Shares

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Mount NFS File Shares on Bare Metal GPUs

Validated on 4 Nov 2025 • Last edited on 14 Nov 2025

DigitalOcean Gradient™ AI Bare Metal GPUs are dedicated, single-tenant servers with 8 GPUs of various models that can operate standalone or in multi-node clusters.

[NFS](https://en.wikipedia.org/wiki/Network_File_System), or Network File System, is a distributed file system protocol that lets multiple clients access the same storage over a network.

To add an NFS file share to your bare metal GPU, first [contact sales](https://www.digitalocean.com/products/bare-metal-gpu?referrer=pdocs&utm_campaign=how-to-mount-nfs-file-shares-on-bare-metal-gpus#sales-form). After provisioning, we send you:

- The **mount path** for your file share in the format `/id/share_name`, for example `/1234567/example_name`.
- The **IP addresses** you can use to mount the file share.

Once you have this information, [install the NFS client and stunnel](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/#install-stunnel-and-nfs) to connect to the share over TLS.

## Install Stunnel and NFS

Before installing stunnel and the NFS client, ensure that your system packages are up to date like this:

```shell
sudo apt update
```

Aftwards, install the NFS client and stunnel packages:

```shell
sudo apt install stunnel nfs-common
```

DigitalOcean enforces NFS v4.1 with TLS. [Stunnel](https://en.wikipedia.org/wiki/Stunnel) establishes the TLS connection to the NFS server.

The installation is successful if you see a listing of the new packages installed for stunnel and the NFS client.

## Configure Stunnel

Create the `/var/run/stunnel` directory so stunnel can create its PID file:

```shell
sudo mkdir /var/run/stunnel
```

Download and save [our root CA certificate](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/nfs.crt) to `/root/nfs.crt`:

```shell
sudo curl https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/nfs.crt -o /root/nfs.crt
```

This certificate signs the NFS server certificates. By trusting it, you trust all certificates it issues, allowing secure access to DigitalOcean’s NFS servers.

Create the stunnel configuration file at `/etc/stunnel/stunnel.conf` like this:

`/etc/stunnel/stunnel.conf`

```text
pid = /var/run/stunnel/stunnel.pid
CAfile = /root/nfs.crt
socket = r:TCP_NODELAY=1

[nfs4]
client = yes
accept = 127.0.0.1:49152
connect = <use_the_provided_ip_address>:2049
ciphers = ALL
sslVersion = TLSv1.2
```

Replace `<use_the_provided_ip_address>` with one of the IPs we provided. For best performance, use a different IP for each GPU node.

This configuration:

- Creates a listener on port `49152`.
- Encrypts traffic with TLS and forwards it to port `2049` on the NFS server.
- Specifies the CA certificate and PID file locations.

Restart stunnel to apply the configuration:

```shell
sudo systemctl restart stunnel4
```

Check that stunnel is running:

```shell
sudo systemctl status stunnel4
```

The service is running successfully if you see output similar to the following:

```text
● stunnel4.service - LSB: Start or stop stunnel 4.x (TLS tunnel for network daemons)
     Loaded: loaded (/etc/init.d/stunnel4; generated)
     Active: active (running) since Tue 2025-03-18 14:22:17 UTC; 5s ago
       Docs: man:stunnel(8)
    Process: 12345 ExecStart=/etc/init.d/stunnel4 start (code=exited, status=0/SUCCESS)
      Tasks: 2 (limit: 18942)
     Memory: 1.2M
        CPU: 40ms
     CGroup: /system.slice/stunnel4.service
             ├─12348 /usr/bin/stunnel4 /etc/stunnel/stunnel.conf
             └─12349 /usr/bin/stunnel4 /etc/stunnel/stunnel.conf
```

This confirms that the stunnel service is `active (running)` and using your `/etc/stunnel/stunnel.conf` configuration file.

## Mount the NFS File Share

Once stunnel is active, mount the NFS share through the local stunnel port. Replace `/<id>/<share_name>` with your mount path like this:

```shell
sudo mount -o port=49152,nfsvers=4.1,nconnect=16 127.0.0.1:/<id>/<share_name> /mountpoint/
```

The `port` option must match the `accept` port in your stunnel configuration.
`nconnect=16` opens up to 16 TCP connections to improve performance.

Verify the mount:

```shell
df -h /mountpoint/
```

The mount is successful if you see output similar to the following:

```text
Filesystem                      Size  Used Avail Use% Mounted on
127.0.0.1:/1234567/example_name 10T   2.0T  8.0T  20% /mountpoint
```

This confirms that the NFS file share is mounted at `/mountpoint/`, showing the total, used, and available space.

In this article...

- [Install Stunnel and NFS](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/#install-stunnel-and-nfs)
- [Configure Stunnel](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/#configure-stunnel)
- [Mount the NFS File Share](https://docs.digitalocean.com/products/bare-metal-gpus/how-to/mount-nfs-file-shares/#mount-the-nfs-file-share)

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