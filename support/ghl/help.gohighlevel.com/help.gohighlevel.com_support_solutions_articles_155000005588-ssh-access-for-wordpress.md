---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress"
title: " SSH access for WordPress : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
6. SSH access for WordPress

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# SSH access for WordPress

Modified on: Tue, 24 Jun, 2025 at 12:49 PM

This article will guide you through setting up SSH access for your WordPress hosting environment, allowing you to securely manage your website via command line tools like WP-CLI. You’ll learn how to generate SSH keys, add them to your hosting dashboard, and connect to your server securely on different operating systems.

**TABLE OF CONTENTS**

- [What is SSH and Why Use It?](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#What-is-SSH-and-Why-Use-It?)
- [Key Benefits of SSH Access](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#Key-Benefits-of-SSH-Access)
- [How To Create Your SSH Key](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#How-To-Create-Your-SSH-Key)
  - [On macOS](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#On-macOS)
  - [On Linux](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#On-Linux)
  - [On Windows](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#On-Windows)
- [How To Add Your SSH Key to the Hosting Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#How-To-Add-Your-SSH-Key-to-the-Hosting-Dashboard)
- [How To Connect to Your Server via SSH](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#How-To-Connect-to-Your-Server-via-SSH)
- [Common WP-CLI Commands](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#Common-WP-CLI-Commands)
- [Managing SSH Keys](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#Managing-SSH-Keys)
- [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress#Frequently-Asked-Questions)


* * *

# **What is SSH and Why Use It?**

SSH (Secure Shell) is a secure protocol that enables encrypted connections to your server. It’s ideal for advanced users who want direct access to server resources, offering greater control and automation possibilities for WordPress management.

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810461/original/VtpVJotbnt8DU4zjBDiC30ZKLAKDbAKMkQ.png?1750786796)_

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810470/original/2El18UwuiFIjXWaxfP07doVCTzUyG3G2kw.png?1750786804)_

# **Key Benefits of SSH Access**

SSH access offers several key advantages that improve server management and site security:

- Enables use of **WP-CLI** for faster, scriptable WordPress management

- Provides secure, encrypted server connections

- Allows direct file operations without needing FTP

- Facilitates automation and deployment workflows

- Supports multi-user, key-based authentication for teams

- Enhances security through passwordless, key-based login


# **How To Create Your SSH Key**

Creating an SSH key ensures only authorized devices can connect to your server. Follow the steps for your specific operating system.

## **On macOS**

You can quickly generate and copy your SSH key using Terminal.

1. Open **Terminal**.

2. Run: ssh-keygen -t rsa

3. Press Enter through all prompts (no password required).

4. Copy your key: pbcopy < ~/.ssh/id\_rsa.pub


_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810476/original/eMqljVaWPFzV23f73ONEj6KS6c2IWoklXA.png?1750786818)_

## **On Linux**

Generating and copying your SSH key is simple and secure on Linux.

1. Open **Terminal**.

2. Run: ssh-keygen -t rsa

3. Accept defaults by pressing Enter.

4. Install xclip if needed:

   - Ubuntu: sudo apt install xclip

   - Arch: sudo pacman -S xclip

   - Fedora/CentOS: sudo yum -y install xclip
5. Copy key: cat ~/.ssh/id\_rsa.pub \| xclip -sel clip


## **On Windows**

Windows users can create SSH keys using PowerShell.

1. Open **PowerShell**.

2. Run: ssh-keygen.exe -t rsa

3. Press Enter through prompts.

4. Copy key: Get-Content .ssh\\id\_rsa.pub \| Set-Clipboard


# **How To Add Your SSH Key to the Hosting Dashboard**

Adding your SSH key authorizes your device for server access.

1. Log in to your hosting dashboard.

2. Navigate to **Advanced Settings > Server Settings**.

3. Enable SSH Access.

4. Go to **SSH Keys Manager** → click **Import New Key**.

5. Paste your public key.

6. Name your key (e.g. “Jane’s MacBook”).

7. Click **Import** — system will authorize your key.


_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810523/original/fW5WGEi_xKbTe0XP5NBYxIe-VaM-krrPoQ.png?1750786855)_

# **How To Connect to Your Server via SSH**

Connecting allows you to use terminal commands on your server.

1. Get your **Host/IP** and **Username** from the dashboard.

2. Open terminal.

3. Run: ssh yourusername@yourhostip

4. Confirm first-time connection with yes.

5. Navigate to your WordPress directory:

   - cd public\_html

_![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048810528/original/I5rpgnCRvGK9MDHAzdRdlw9XyTBwQg8JGA.png?1750786866)_

# **Common WP-CLI Commands**

These commands help manage your WordPress site efficiently:

- List plugins: wp plugin list

- Clear cache: wp cache flush

- Purge CDN cache: wp cdn purge


# **Managing SSH Keys**

You can manage keys for better security and flexibility:

- **Delete unused keys** anytime via SSH Keys Manager.

- **Add keys for other devices/team members**.
- **Rotate keys regularly** for enhanced security.

* * *

# Frequently Asked Questions

Q: What happens if I lose my private key? You’ll need to generate a new key pair and re-add the public key.

Q: Can I use a password instead of a key? No, key-based authentication is required for SSH on this hosting platform.

Q: How do I revoke access for a stolen device? Delete the corresponding key from SSH Keys Manager immediately.

Q: Is SSH access available on all plans? Please check your hosting plan details — some plans may not include SSH.

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [WordPress: Single Sign On Admin](https://help.gohighlevel.com/support/solutions/articles/155000004154-wordpress-single-sign-on-admin)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [Cloning Wordpress Websites in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004189-cloning-wordpress-websites-in-highlevel)
- [How to Disable SEO Indexing for WordPress Sites](https://help.gohighlevel.com/support/solutions/articles/155000005158-how-to-disable-seo-indexing-for-wordpress-sites)
- [How to Select Country Server Location for WordPress Hosting](https://help.gohighlevel.com/support/solutions/articles/155000005816-how-to-select-country-server-location-for-wordpress-hosting)
- [Payment Failure Notifications on WordPress Admin via LC Plugin](https://help.gohighlevel.com/support/solutions/articles/155000005792-payment-failure-notifications-on-wordpress-admin-via-lc-plugin)

## Related Articles

- [How to Setup SFTP for your WordPress Site](https://help.gohighlevel.com/support/solutions/articles/48001229821-how-to-setup-sftp-for-your-wordpress-site)
- [Granular Permissions for WordPress](https://help.gohighlevel.com/support/solutions/articles/155000003699-granular-permissions-for-wordpress)
- [How to Get Customer Support for WordPress Issues](https://help.gohighlevel.com/support/solutions/articles/155000006934-how-to-get-customer-support-for-wordpress-issues)
- [Cloning Wordpress Websites in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004189-cloning-wordpress-websites-in-highlevel)
- [WP File Manager Plugin (Stable Alternative for FTP Access)](https://help.gohighlevel.com/support/solutions/articles/48001222860-wp-file-manager-plugin-stable-alternative-for-ftp-access-)
- [Resolution of Figerprint Issue in Order form on Wordpress](https://help.gohighlevel.com/support/solutions/articles/155000001549-resolution-of-figerprint-issue-in-order-form-on-wordpress)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005588-ssh-access-for-wordpress/hit)