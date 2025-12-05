---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/"
title: "How to Use Clipboard Syncing and the Paperspace Password Tool on Windows-Based Machines | DigitalOcean Documentation"
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
- Use Windows Features

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use Clipboard Syncing and the Paperspace Password Tool on Windows-Based Machines

Validated on 7 Aug 2024 • Last edited on 17 Jun 2025

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

Note
As of 1 July 2024, Windows-based templates are retired and unavailable to new Paperspace users. If you joined Paperspace prior to this date, you can still start, manage, and create Windows-based template machines.

Windows-based machines offer features designed to enhance your experience, such as clipboard syncing and the Paperspace Password Tool. The Sync Clipboard feature lets you copy and paste between your local machine and the Windows-based machine. The Paperspace Password Tool helps you view or change the Windows password on your machine.

## Use Sync Clipboard Feature

To use the sync clipboard feature, you need to sync your local machine’s clipboard with your Paperspace machine.

To sync your local machine’s clipboard with your Paperspace machine, from your local machine, copy the text you want to paste.

Then, in your Paperspace machine, in the top-left corner, click the small circle button to open the drop-down menu, then click **Sync Clipboard**.

![The desktop streaming options when desktop streaming.](https://docs.digitalocean.com/screenshots/paperspace/machines/desktop-stream-options.a20694edaa41898c009b76180c39ec4207f6759ebee941a2edbc049076d794d7.png)

Afterwards, paste the text using your machine’s standard pasting hotkeys, such as **CTRL+SHIFT+C** for Linux, or **CTRL+V** for Windows.

## Use Paperspace Password Tool

The Paperspace Password Tool (`Paperspace-Password-Tool.exe`) is a Paperspace managed utility tool for Windows-based machines, used to reveal and change the Windows password on your machine.

You may need your Windows password to configure or set up certain software on your Windows-based machine, so you may need to know or change your Windows password. Only the default user, `paperspace`, has the authority to see or change the Windows password. All Windows-based machines are created with a password, by default.

To see the current Windows password, go to the [Paperspace console](https://console.paperspace.com/), in the top-right corner, click the drop-down menu, select **CORE**, then click the **Machines** tab. In the **Machines** section, find and select the Windows-based machine you want to use, then [connect to that machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/).

In your machine, go to the **File Explorer**, then to the root directory (`C:/`) where the `Paperspace-Password-Tool.exe` file is located.

Download Paperspace Password Tool

If you cannot find or have removed the tool, [download it](https://s3.amazonaws.com/ps.public.resources/ps_setpasswd/Paperspace-Password-Tool.exe) into your machine.

After downloading the tool, unblock the file to avoid any Windows warning messages.

To unblock the file, right-click the file, click **Properties >**, click **Unblock**, then click **OK**.

To see your current password, execute the `Paperspace-Password-Tool.exe` file, which opens the **Paperspace Set Password** window. In the **Paperspace Set Password** window, under **Current Password** is where you can see your machine’s current password.

![The Paperspace Set Password app of the Paperspace Password Tool with Windows password revealed.](https://docs.digitalocean.com/screenshots/paperspace/machines/paperspace-set-password.7085792ee1ef97e4a8ac83589625c1890a84f1be284fa467611536a9447c2706.png)

### Change Windows Password

To change your Windows password, in the **Paperspace Set Password** app, under the **New Password** section, type your new password.

Your new password must satisfy the following requirements:

- At least eight characters in length.
- At least three of the following categories satisfied:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (for example, “!” or “#”)

In the **Confirm Password** section, type your new password a second time. Your new password must match in both sections. Afterwards, click **Ok**.

To verify if your password updated, run the `Paperspace-Password-Tool.exe` file again to reveal the new password.

In this article...

- [Use Sync Clipboard Feature](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#sync-feature)
- [Use Paperspace Password Tool](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#password-tool)
  - [Change Windows Password](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/#change-windows-password)

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