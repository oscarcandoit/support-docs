---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005141-ssh-access-and-ssh-keys-management-on-your-wordpress-hosting
category: articles
type: article
scraped: 2025-10-28T16:21:25.727Z
title:  SSH Access and SSH Keys Management on Your WordPress Hosting : LeadConnector 
status_code: 200
---

#  SSH Access and SSH Keys Management on Your WordPress Hosting : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Funnels & Websites Category](https://help.leadconnectorhq.com/support/solutions/48000454554) [WordPress](https://help.leadconnectorhq.com/support/solutions/folders/48000683114)

## SSH Access and SSH Keys Management on Your WordPress Hosting  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005141-ssh-access-and-ssh-keys-management-on-your-wordpress-hosting\# "Print this Article")

Modified on: Thu, 24 Apr, 2025 at 1:09 AM

* * *

SSH (Secure Shell) provides a secure way to connect to your server and manage your WordPress installation using command-line tools like WP-CLI. This guide will walk you through how to enable SSH access, create and add SSH keys, and connect to your site securely.

* * *

## What is SSH and Why Use It?

SSH allows advanced users to:

- Run WP-CLI commands for:

  - Plugin and theme management

  - Import/export data, clear caches, and update configurations

  - Manage files directly via the terminal.

> ⚠️ SSH is recommended for users familiar with the command line. Always proceed with caution when executing commands.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562559/original/TKjySjmuq4Jq21Kd3av1WbK_V_LyadiIZA.png?1745469234)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562512/original/-2y8alycvmkLSB0r283iQA5Mwzt-pCl4vA.png?1745469063)

* * *

## Step 1: Create Your SSH Key

SSH access on our platform only supports key-based authentication — no passwords are used for extra security.

### **On macOS**

If you use Mac, the first thing you need to do is to open a terminal. Once your terminal is open, you can copy and paste the following command:

```
ssh-keygen -trsa
```

Hit enter for all the options, you don't need to create a password. It should look like this(on Mac terminal is usually white instead of black, but should be the same):

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045565949/original/9nRUZssMRZhaJ4Y-X803HpXnxKZqRp0sfA.png?1745474982)

Once your key is created, you can copy it to your clipboard:

```
pbcopy < ~/.ssh/id_rsa.pub
```

### **On** **Linux:**

1. Open the Terminal.

2. Generate your SSH key:


```whitespace-pre!  bash


```


Press Enter to accept all defaults.

3. Copy your public key to your clipboard:


```whitespace-pre!  bash


```


**On** **Ubuntu**:

```
sudo apt install xclip
```

**On** **Arch Linux**:

```
sudo pacman -S xclip
```

**On** **Fedora/CentOS:**

```  bash
sudo yum -y install xclip
```

### **On Windows**:

1. Open PowerShell.

2. Generate your SSH key:


```whitespace-pre!  powershell


```


Press Enter through all prompts.

3. Copy the public key:


```whitespace-pre!  powershell


```


## Step 2: Add Your SSH Key to the Hosting Dashboard

1. Log in to your hosting dashboard.

2. Go to the **Advanced** **Setting** - **\> Server Settings** tab of your site

3. Enable **SSH Access** (toggle on if not already).

4. Scroll to **SSH Keys Manager**.

5. Click **Import New Key**.

   - Paste your public key.

   - Add a name (e.g., “John’s MacBook”).

   - Leave the passphrase field blank unless you used one.
6. Click **Import**, then the system will **Authorize** the imported key.


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562540/original/oAgLEvrZYJq0hcAEUSZJfMjZgk7B21TQpw.png?1745469133)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155045562547/original/8GKLb4YTbmVvj0bjTVn31KaE16pK8xmtuA.png?1745469146)

* * *

## Step 3: Connect to Your Server via SSH

1. Return to the **Server settings** tab to get your connection details:

   - **Host/IP Address**

   - **Username**
2. Open your terminal and run:


```whitespace-pre!  bash


```


Replace `yourusername` and `yourhostip` with your actual values.

3. The first time, you may see a warning prompt. Type `yes` and hit Enter.

4. Once connected, switch to your site’s directory:


```whitespace-pre!  bash


```


* * *

## ✅ Common Commands via WP-CLI (once connected)

- List installed plugins:


```whitespace-pre!  bash


```

- Clear WordPress cache:


```whitespace-pre!  bash


```

- Purge CDN cache:


```whitespace-pre!  bash


```


* * *

## Managing SSH Keys

- **Delete Key:** Remove unused keys at any time from the SSH Keys Manager.

- **Import Additional Keys:** Repeat the process for other devices or team members.


> Tip: Regularly rotate your keys for improved security.

* * *

## Troubleshooting Tips

- Can’t connect? Double-check your key is authorized and the username/IP are correct.

- Issues on Linux? Install `xclip` if clipboard commands fail.

- Use `ssh-add ~/.ssh/id_rsa` if you're using a passphrase-protected key.


* * *

Need further help? Reach out to your Agency for assistance.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005141-ssh-access-and-ssh-keys-management-on-your-wordpress-hosting/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005141-ssh-access-and-ssh-keys-management-on-your-wordpress-hosting*  
*Generated on: 2025-10-28T16:21:25.727Z*
