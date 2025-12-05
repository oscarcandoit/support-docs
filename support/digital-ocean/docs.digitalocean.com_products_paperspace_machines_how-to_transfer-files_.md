---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/"
title: "How to Transfer Files Between Machines | DigitalOcean Documentation"
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
- Transfer Files

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Transfer Files Between Machines

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

There are several methods to transfer files between your Paperspace machines or between a machine and your local device. Depending on your needs, you can use one of the following methods:

- [FileZilla](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#transfer-files-using-filezilla): A graphical File Transfer Protocol (FTP) tool for transferring files between machines.
  - **FileZilla Server**: A cross-platform FTP server, used to transfer files securely between it and any FileZilla clients.
  - **FileZilla Client**: An open source FTP app, used to transfer files between it and an FTP server.
- [Windows’ Remote Desktop Protocol (RDP)](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#transfer-files-using-windows-rdp): A Windows feature to securely transfer files between machines.

- [`scp` (Secure Copy Protocol)](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#transfer-files-using-scp): A command line tool for secure file transfers.

- [`wget` (World Wide Web Get)](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#transfer-files-using-wget): An open source command line tool for downloading files from the internet, such as public storage buckets or URLs.


## Prerequisites

If you’re moving 10 GB or more of data or models, we recommend first [copying the files (`cp`)](https://www.digitalocean.com/community/tutorials/basic-linux-navigation-and-file-management#copying-files-and-directories-with-cp) instead of moving them (`mv`) so the original files stay intact as a backup, and then [using checksums to verify the file transfer](https://www.digitalocean.com/community/tutorials/how-to-verify-downloaded-files). Once you confirm the transfer was successful, you can remove (`rm`) the original files.

### Retrieve Public IP Address

Before you transfer your files, get the public IP address of the machine you want to transfer files to or from. To find your machine’s IP address, go to the [Paperspace console](https://console.paperspace.com/), in the top-left corner, click the drop-down menu, select **CORE**, click **Machines** tab, then select the machine you want to get the IP address of.

From the machine’s overview page, in the top-right corner, click the **Settings** tab. In the **Settings** page, in the **Public IP** section, copy your machine’s IP address for later use.

If your machine doesn’t have a public IP address, [assign a public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/) to your machine.

![The IP address section of the machine's Settings page.](https://docs.digitalocean.com/screenshots/paperspace/machines/settings-ip-address-section.bb01028cbfdd30fdea4b2708e2ab65a3ccbe5f9ca372be8db8e57634bc2fecf7.png)

## Transfer Files Using FileZilla

### Set Up FileZilla Server

To configure your FileZilla Server, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want as the FileZilla Server, then download and install the [FileZilla Server](https://filezilla-project.org/download.php?platform=win64&type=server).

Once the FileZilla Server file is downloaded, [set up your server](https://wiki.filezilla-project.org/FileZilla_FTP_Server#Installation_and_Setup_-_Windows), and [configure its network](https://wiki.filezilla-project.org/Network_Configuration#Setting_up_and_testing_FileZilla_Server) and [set the passive mode public IP address](https://wiki.filezilla-project.org/Network_Configuration#Passive_mode_2) to the public IP address of the machine you’re using as the FileZilla Server. All the default settings should remain unchanged except for the public IP address.

Afterwards, [add a user to your FileZilla Server](https://filezillapro.com/docs/server/advanced-options/filezilla-server-users-panel/).

To ensure your file transfers remain uninterrupted, [disable all Windows firewalls on your machine](https://support.microsoft.com/en-us/windows/turn-microsoft-defender-firewall-on-or-off-ec0844f7-aebd-0583-67fe-601ecf5d774f).

### Set Up FileZilla Client

To set up a FileZilla Client, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want as the client, then download and install the [FileZilla Client](https://filezilla-project.org/download.php?platform=win64).

Once you have your server and client set up, [connect them](https://wiki.filezilla-project.org/Using#Connecting_to_an_FTP_server), then begin [transferring files](https://wiki.filezilla-project.org/Using#Transferring_files).

For more general usage, you can refer to [FileZilla’s documentation](https://wiki.filezilla-project.org/Documentation).

## Transfer Files Using Windows’ RDP

Note
You can only use Windows’ RDP for Windows-based machines.

### Set Up RDP Server

To set up an RDP Server, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want to use as the server, then [enable Remote Desktop](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/remote-desktop-allow-access).

Afterwards, [add users to your RDP Server](https://learn.microsoft.com/en-us/troubleshoot/windows-server/remote/add-user-services-rdp-permissions). If the user is correctly identified, the username should change to the machine’s ID followed by the username, for example, for a Paperspace machine, `PSLLCO7TVKWR\paperspace`.

### Connect Clients to RDP Server

To connect a client to your RDP Server, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want to use as a client, then retrieve the [Windows’ password](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#password-tool) and its [public IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#prerequisites).

Then, [specify the RDP Server by using the RDP Server’s IP address](https://support.microsoft.com/en-us/windows/how-to-use-remote-desktop-5fe128d5-8fb1-7a23-3b8a-41e636865e8c). You may need to use your machine’s [Windows password](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#password-tool) and [IP address](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#prerequisites) for authentication.

After connecting your client to your RDP server, [transfer files between them](https://support.microsoft.com/en-us/topic/how-to-gain-access-to-local-files-in-a-remote-desktop-session-to-a-windows-xp-based-or-to-a-windows-server-2003-based-host-computer-021ee183-e6be-4201-809e-c355c47b17f4#bkmk_5).

## Transfer Files Using `scp`

Note
For Windows-based machines, install [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) in order to use `scp`.

Before using `scp`, ensure you have an [SSH key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/) to authenticate your file transfers.

To transfer files, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want to transfer files from, then run the following command to download a file:

```bash
scp -i ~/.ssh/your-key.pem ~/path/to/local_file paperspace@your-machine-ip-address:~/.
```

This `scp` command uses your SSH key, the old location of the file (for example, your local machine), and the new destination (for example, your Paperspace machine).

## Transfer Files Using `wget`

To transfer files using `wget`, [connect to the machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) you want to download files for, then run the following command to download a file:

```bash
wget https://example.com/example-data-set.tar.gz
```

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#prerequisites)
  - [Retrieve Public IP Address](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#retrieve-public-ip-address)
- [Transfer Files Using FileZilla](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#filezilla)
  - [Set Up FileZilla Server](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#set-up-filezilla-server)
  - [Set Up FileZilla Client](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#set-up-filezilla-client)
- [Transfer Files Using Windows’ RDP](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#rdp)
  - [Set Up RDP Server](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#set-up-rdp-server)
  - [Connect Clients to RDP Server](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#connect-clients-to-rdp-server)
- [Transfer Files Using `scp`](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#scp)
- [Transfer Files Using `wget`](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/#wget)

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