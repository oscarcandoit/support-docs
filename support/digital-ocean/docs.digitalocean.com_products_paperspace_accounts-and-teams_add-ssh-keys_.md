---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/"
title: "How to Upload SSH Keys to Paperspace Personal Accounts | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
- Add SSH Keys

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Upload SSH Keys to Paperspace Personal Accounts

Validated on 14 Dec 2023 • Last edited on 17 Apr 2025

SSH keys provide a secure way to remotely access your Linux-based machines.

When a machine is created, the `paperspace` user is provisioned. You can manage your machines using password-based logins, but we strongly recommend using SSH key pairs instead. SSH keys are more secure than passwords and can help you log in without having to remember long passwords.

## Generate an SSH Key

If you do not already have an SSH key pair, create a new one:

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with OpenSSH on MacOS or Linux

Use OpenSSH to create new SSH keys on MacOS, Linux, or Windows Subsystem for Linux.

![](https://docs.digitalocean.com/images/icons/droplets.svg)

How to Create SSH Keys with PuTTY on Windows

Use PuTTY to create SSH keys on Windows systems without Bash.

## Add SSH Keys

You can add SSH keys to your Paperspace account on the [**SSH Keys** page](https://console.paperspace.com/account/settings/ssh-keys) in the console.

![](https://docs.digitalocean.com/screenshots/paperspace/security-ssh.297b17ec4390ae7b6b0aa32f710f723e1d912c0e20ebf309d034cb2ef03abd5e.png)

Specify a name for the key, then copy and paste the public key and click **Add**.

![](https://docs.digitalocean.com/screenshots/paperspace/security-ssh-create.7f41002697f1ffd2603a1d7c48a7251e0529cadd27953dd9d53bec1f0dafa306.png)

Once you’ve added a key, you can select it during machine creation to automatically add it to new machines.

## Deleting SSH Keys

You can delete your SSH keys on the [**SSH Keys** page](https://console.paperspace.com/account/settings/ssh-keys) in the console.

Find the key and click **delete**.

![](https://docs.digitalocean.com/screenshots/paperspace/security-ssh-delete.0594a69974f465064b2598c72d662930041ab649a9f0b7ceeec2622a4f20b984.png)Note
Deleting your SSH key from the console or removing an accessor from a machine does not remove the SSH key from the machine. The key needs to be manually removed on the machine from `~/.ssh/authorized_keys`.

In this article...

- [Generate an SSH Key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/#generate-an-ssh-key)
- [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/#add-ssh-keys)
- [Deleting SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/#deleting-ssh-keys)

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