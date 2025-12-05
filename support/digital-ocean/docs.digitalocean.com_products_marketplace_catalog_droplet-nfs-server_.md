---
url: "https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/"
title: "Droplet NFS Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/)
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

- Droplet NFS Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Droplet NFS Server

Generated on 17 Nov 2025
from [the Droplet NFS Server catalog page](https://marketplace.digitalocean.com/apps/droplet-nfs-server)

NFS Droplet 1-Click allows you to create and maintain shared network storage for your applications running on the DigitalOcean cloud. Besides the getting started tutorial, it includes the necessary scripts for you to customize for production deployment.

## Before you deploy your first NFS Droplet

### Select the right Droplet type

For best performance, we recommend using a Premium Dedicated Droplet with 10gbit networking for both your server and client(s).

### Attach the Volumes Block storage

Use this [Volumes Block Storage tutorial](https://docs.digitalocean.com/products/volumes/how-to/create/) to attach storage to your existing NFS droplet and during droplet creation.

- **Why do you need a Volumes Block Storage?**

Using Volume Block Storage decouples your shared data from the lifecycle of the NFS Droplet 1-Click, meaning your data is safe and persistent no matter what happens to the NFS server. Additionally, Volumes Block Storage can be easily moved between droplets in case you need to relocate your NFS server to another machine.


## Software Included

| Package | Version | License |
| --- | --- | --- |
| nfs-kernel-server | 2.6.1 | GPL |
| Fail2Ban | 0.11.2 | [GNU General Public License](https://www.fail2ban.org/wiki/index.php/Fail2Ban) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-dropletnfsserver)

## Creating an App using the API

In addition to creating a Droplet from the Droplet NFS Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Droplet NFS Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-dropletnfsserver"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Droplet NFS Server

The NFS server can be configured to be accessible from both VPC and public networks.

If you intend to use NFS between droplets in the same region, we highly recommend configuring the NFS server in a VPC network for an easy and secure setup.

On the other hand, if you intend to use NFS between droplets from different regions, Kubernetes droplets or machines outside of DigitalOcean, your only option configuring the NFS server in a public network.

## Configuring NFS Server in a VPC Network

Before configuring the NFS server, make sure that Volumes Block Storage is attached to the droplet. After you [SSH login to the NFS Server Droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/), list the contents of the/mnt folder, you should see a folder with the name `volume_&amp;amp;lt;region&amp;amp;gt;_&amp;amp;lt;number&amp;amp;gt;`:

```
$ ls /mnt
volume_sfo3_01
```

Continuing in this tutorial, we will use volume\_sfo3\_01, make sure to replace it with your volume.

The first step is to change the ownership of the volume folder to allow any NFS client to use it:

```
$ chown -R nobody:nogroup /mnt/volume_sfo3_01/
```

Next, export the volume folder to the NFS server so the NFS server can use it. Open `/etc/export` file in your preferred editor:

```
$ nano /etc/exports
```

Append `/mnt/volume_sfo3_01 *(rw,sync,no_subtree_check)` to the end of the file. This will tell the NFS server that anyone can mount your volume with read and write access. You should not be concerned about anyone accessing your volume, since you will further allow access only from the VPC network.

Save and exit the file. Now, restart the NFS server to apply the previous changes:

```
$ systemctl restart nfs-kernel-server
```

Next, create a firewall rule to allow access to the NFS only from the VPC network.

In the network setting of your NFS droplet find the VPC IP range.

![NFS Server VPC range](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-29%20at%2016.52.46.png)

In the commands below we will use `10.124.0.0/20`, make sure to replace this value with the VPC range of your network.

Create a firewall rule allowing access to the NFS server from any IP from your VPC network:

```
$ ufw allow in on eth1 from 10.124.0.0/20 to any port nfs
```

You can check the current status of UFW which should look like this:

```
$ ufw status numbered
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                     LIMIT IN    Anywhere
[ 2] 2049 on eth1               ALLOW IN    10.124.0.0/20
[ 3] 22/tcp (v6)                LIMIT IN    Anywhere (v6)
```

At this point, you have successfully configured your NFS server to work with your VPC network, below you can find how to configure the NFS client.

## Configuring NFS Server on the Public Network

Setting up NFS on a public network is necessary when you have droplets, Kubernetes etc. running in different regions and your applications need access to a shared NFS storage.

For this setup, you will need to disable the UFW firewall and droplet and configure DigitalOcean Firewall. DigitalOcean Firewall will allow you to control which droplets will have access to your NFS server based on their tags.

You can start by creating and configuring your NFS server in the same way as described in #Configuring NFS Server in a VPC Network section but instead of creating UFW rules, you want to disable UFW at all:

```
$ ufw disable
```

Now, create a tag which your NFS server and clients will use. Go to NFS Droplet 1-Click settings, go to Tags and create a tag with a unique name:

![NFS Server Tag](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-31%20at%2019.08.00.png)

Next, head to your NFS Droplet 1-Click settings, go to Networking -> Firewalls and click the Edit button:

![NFS Server Firewall Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-31%20at%2018.35.56.png)

Click Create Firewall and populate fields for your new firewall:

- Name: Unique name for your new firewall.
- Inbound Rules: Add TCP/UDP rules for ports 111 and 2049 for your new tag like this:

![NFS Server Firewall Example](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-03-31%20at%2023.59.35.png)

- Outbound Rules: No changes are required.
- Apply to Droplets: Select your new tag:

![NFS Server Firewall Example 2](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/Screenshot%202023-04-01%20at%2000.04.48.png)

Click _Create Firewall_ and you successfully configured the NFS server with the DigitalOcean firewall. To allow your NFS clients to access your NFS server, add your new tag to the client droplets and the DigitalOcean firewall will automatically allow the connection.

**Note: The DigitalOcean firewall works only for the public network. Use public NFS server IP to connect the clients.**

## Configuring NFS Client

After you [SSH login to the NFS Client Droplet](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/), install the NFS client.

Ubuntu / Debian:

```
$ apt install nfs-common
```

Fedora / CentOS / Rocky Linux / AlmaLinux:

```
$ yum install nfs-utils
```

Now, create a folder which will be mounted to the NFS folder:

```
$ mkdir /mnt/nfs
```

Finally, mount the NFS server to the newly created folder.

- If your NFS server is configured in a VPC network, use the private IP of your NFS server:

```
$ mount -t nfs 10.124.0.6:/mnt/volume_sfo3_01/ /mnt/nfs -o nconnect=8
```

- Otherwise, if your NFS server is configured in a public network, use the public IP of your NFS server:

```
$ mount -t nfs 134.209.175.72:/mnt/volume_sfo3_01/ /mnt/nfs -o nconnect=8
```

In both examples, we specified the nconnect mount option. This value, which can be between 1 to 16, controls how many TCP connections the client will form between itself and the NFS server. Some workloads, particularly small writes, may see an improvement in IOPS by setting this option.

At this point, your NFS client is configured with the NFS server. You can check it by using df -h and looking at the size of the mounted folder:

```
$ df -h
...
10.124.0.6:/mnt/volume_sfo3_01  100G     0   95G   0% /mnt/nfs
...
```

If you don’t need NFS server, you can unmount and detach your NFS client using:

```
$ umount /mnt/nfs
```

## Creating a partition out of the local drive for use in NFS

DO Droplets come with a single partition (/dev/vda1, for example for the system). While it is fine to just use a directory from the root partition as the NFS share, there is no control over the usage and you may run the risk of saturating your root partition. If you are planning to use the local storage, one option is to allocate a file of a particular size (eg. 20GB) and use that as a filesystem to expose via NFS. We have included a script (`local-partition.sh`) that you can customize. It uses ‘dd’ to create a blank file of a given size, then use mkfs to create a file system, and finally mount to expose it as a separate partition.

## Backing up your NFS Folder

We strongly recommend to backup your NFS files. This will help you go back to a point in time, retrieve when files are corrupted, or even mirror the filesystem to another region for your application needs.

You can use SnapShooter ( [https://marketplace.digitalocean.com/add-ons/snapshooter](https://marketplace.digitalocean.com/add-ons/snapshooter), or [https://app.snapshooter.com/](https://app.snapshooter.com/)) for backing up your server filesystem. After setting up SnapShooter, you will need to configure the target backup store (S3 compatible). Creating a backup job is just adding 1 command to set up SnapShooter on your NFS server, and then creating a backup task on the SnapShooter console using the “Server filesystem backup” recipe.

## Performance Testing

If you wish to test the performance of your NFS share from the client side, you can follow many of the same steps shown in the community guide for benchmarking volume performance: [https://www.digitalocean.com/community/tutorials/how-to-benchmark-digitalocean-volumes](https://www.digitalocean.com/community/tutorials/how-to-benchmark-digitalocean-volumes)

## Troubleshooting Checklist

- The volume to be exported as NFS share is available, and has ownership configured, eg. `chown -R nobody:nogroup /mnt/volume_nyc3_01/`
- Volume exports are configured in /etc/exports, eg. `/mnt/volume_nyc3_01 *(rw,sync,no_subtree_check)`
- NFS server was restarted to read the updated configuration, eg. `systemctl restart nfs-kernel-server`. Use `df -h` to verify mounts.
- UFW has been configured to permit NFS access. See the security section above.
- On the client machines, you have installed nfs-common or nfs-utils depending on OS and mounted the NFS share, eg. `mount :/mnt/volume_nyc3_01 /mnt/nfs`. Use ‘df -h’ to verify mounts.
- Troubleshooting for logs: cat /var/log/syslog \| grep -i nfs. If NFS mount fails on client machine and logs show as BLOCKED, open the UFW to permit all ports from the client to make sure the firewall is not the issue, eg. `ufw allow in on eth1 from 10.124.0.0/20`

In this article...

- [Before you deploy your first NFS Droplet](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#before-you-deploy-your-first-nfs-droplet)
  - [Select the right Droplet type](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#select-the-right-droplet-type)
  - [Attach the Volumes Block storage](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#attach-the-volumes-block-storage)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying Droplet NFS Server](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#getting-started-after-deploying-droplet-nfs-server)
- [Configuring NFS Server in a VPC Network](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#configuring-nfs-server-in-a-vpc-network)
- [Configuring NFS Server on the Public Network](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#configuring-nfs-server-on-the-public-network)
- [Configuring NFS Client](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#configuring-nfs-client)
- [Creating a partition out of the local drive for use in NFS](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#creating-a-partition-out-of-the-local-drive-for-use-in-nfs)
- [Backing up your NFS Folder](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#backing-up-your-nfs-folder)
- [Performance Testing](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#performance-testing)
- [Troubleshooting Checklist](https://docs.digitalocean.com/products/marketplace/catalog/droplet-nfs-server/#troubleshooting-checklist)

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