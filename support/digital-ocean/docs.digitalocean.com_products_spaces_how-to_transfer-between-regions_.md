---
url: "https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/"
title: "Transfer DigitalOcean Spaces Buckets Between Regions Using Rclone | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/spaces.77fdb5bd2197bad96040b9d1e46f6a66a0cb7b3c03213c5f52b42f43e268affa.svg)Spaces Object Storage](https://docs.digitalocean.com/products/spaces/)
- [Getting Started](https://docs.digitalocean.com/products/spaces/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
  - [Create Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/)
  - [Add and Remove Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/)
  - [Organize Files with Folders](https://docs.digitalocean.com/products/spaces/how-to/use-folders/)
  - [Destroy Spaces](https://docs.digitalocean.com/products/spaces/how-to/destroy/)
  - [Migrate with Flexify.IO](https://docs.digitalocean.com/products/spaces/how-to/migrate/)
  - [Transfer Buckets between Regions](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/)
  - [Share Links to Files](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/)
  - [Set File Listing Permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/)
  - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
  - [Configure Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/)
  - [Enable the CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/)
  - [Manage the CDN Cache](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/)
  - [Customize the CDN Endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/)
  - [Configure Bucket Policies](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/)
  - [Configure Lifecycle Rules](https://docs.digitalocean.com/products/spaces/how-to/configure-lifecycle-rules/)
  - [Enable Versioning](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/)
  - [Set File Metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/)
  - [Configure CORS](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/)
  - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
  - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
  - [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/)
  - [s3cmd 2.x Setup](https://docs.digitalocean.com/products/spaces/reference/s3cmd/)
  - [s3cmd 2.x Usage](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/)
  - [Transmit 4](https://docs.digitalocean.com/products/spaces/reference/transmit4/)
  - [Transmit 5](https://docs.digitalocean.com/products/spaces/reference/transmit5/)
  - [Cyberduck 6.2.x](https://docs.digitalocean.com/products/spaces/reference/cyberduck/)
  - [Terraform Backend](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/)
- [Concepts](https://docs.digitalocean.com/products/spaces/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/spaces/concepts/best-practices/)
- [Details](https://docs.digitalocean.com/products/spaces/details/)
  - [Features](https://docs.digitalocean.com/products/spaces/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/spaces/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/spaces/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/spaces/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
- Transfer Buckets between Regions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Transfer DigitalOcean Spaces Buckets Between Regions Using Rclone

Validated on 10 Sep 2020 • Last edited on 18 Aug 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

To transfer DigitalOcean Spaces between regions, you need to use a file management tool to copy files from the original bucket to a second bucket in the target region.

This guide explains how to migrate data between Spaces regions by using [Rclone](https://rclone.org/) to transfer data between two Spaces buckets, including how to install Rclone, the configuration settings needed to access multiple regions, and the commands that you can use to synchronize your files between regions and verify their integrity.

## Prerequisites

Before we begin installing and configuring Rclone to copy our objects between buckets, we will need some information about our DigitalOcean Spaces account. We will need a Spaces API key, and we will need to know the regions and names of our source and destination buckets.

### Generating a DigitalOcean Spaces API Key

To create a DigitalOcean Spaces API key, follow the instructions in [Manage Access to Spaces](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) documentation.

Save the access key ID and the secret key. We will use them later to configure Rclone to access our account.

### Finding the Spaces S3-Compatible Endpoint

Next, we need to find the endpoint for each bucket. You can view the bucket’s endpoint within the DigitalOcean Control Panel by selecting the bucket and viewing the **Settings** tab:

![Screenshot of 'Endpoint' menu option](https://docs.digitalocean.com/screenshots/spaces/rclone-tutorial/image1.52c661c6091e8881417193e6a19856cbd5765137963896eb6fcb0abb2febf8f3.png)

The endpoint will always be the region you created the bucket in, followed by `.digitaloceanspaces.com`. Make note of the endpoint for both of your buckets. Will we use this information when creating our `rclone` configuration.

## Step 1: Installing Rclone

You’re now ready to install [Rclone](https://rclone.org/). You can do this on your local machine, or – if you are bandwidth limited – you may want to install Rclone on a Droplet located in the source or destination Spaces region.

Visit the [Downloads](https://rclone.org/downloads/) section of the project’s website to find binaries of the utility compiled for different platforms. Download the zipped binary that matches your computer’s operating system to get started.

Once you have the Rclone zip file downloaded to your computer, follow the section below that matches your platform.

Linux

Before we can extract the archive, we will need to ensure that the `unzip` utility is available.

If you are running **Ubuntu** or **Debian**, you can update the local package index and install `unzip` by typing:

```shell
sudo apt update
sudo apt install unzip
```

If you are running **CentOS** or **Fedora**, you can install `unzip` by typing:

```shell
sudo yum install unzip
```

With `unzip` installed, navigate to the directory where you downloaded the `rclone` zip file:

```shell
cd ~/Downloads
```

Next, unzip the archive and move into the newly created directory:

```shell
unzip rclone*
cd rclone-v*
```

From here, we can copy the binary to the `/usr/local/bin` directory so that it is available system-wide:

```shell
sudo cp rclone /usr/local/bin
```

Next, we add the manual page to our system, so that we can get help on the command syntax and available options. Make sure that the local manual directory is available and then copy the `rclone.1` file:

```shell
sudo mkdir -p /usr/local/share/man/man1
sudo cp rclone.1 /usr/local/share/man/man1
```

Then update the `man` database to add the new manual page to the system:

```shell
sudo mandb
```

Finally, we can create the Rclone configuration directory and open up a configuration file:

```shell
mkdir -p ~/.config/rclone
nano ~/.config/rclone/rclone.conf
```

This will open your text editor with a new blank file. Skip ahead to the section on [Configuring Rclone](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#configuring-rclone) to continue.

macOS

If you are running macOS, begin by navigating in the terminal to the directory where you downloaded the `rclone` zip file:

```shell
cd ~/Downloads
```

Next, unzip the file and move into the newly created directory:

```shell
unzip -a rclone*
cd rclone-v*
```

Next, make sure the `/usr/local/bin` directory is available and then copy the `rclone` binary to it:

```shell
sudo mkdir -p /usr/local/bin
sudo cp rclone /usr/local/bin
```

Finally, we can create the configuration directory and open up a configuration file:

```shell
mkdir -p ~/.config/rclone
nano ~/.config/rclone/rclone.conf
```

This will open up your text editor with a new blank file. Skip ahead to the section on [Configuring Rclone](https://www.digitalocean.com/community/tutorials/how-to-transfer-digitalocean-spaces-between-regions-using-rclone#configuring-rclone) to continue.

Windows

If you are running Windows, begin by navigating to the Downloads directory in the Windows File Explorer. Select the `rclone` zip file and right-click. In the context menu that appears, click **Extract All…**:

![Screenshot of 'Extract All' menu option](https://docs.digitalocean.com/screenshots/spaces/rclone-tutorial/image2.03820f882f6d664160f000d31afde6768fb62f1569934a6ea3ffd68809a3fb9f.png)

Follow the prompts to extract the files from the zip archive.

The `rclone.exe` utility must be run from the command line. Open a new **Command Prompt** (the `cmd.exe` program) window by clicking the Windows button in the lower-left corner, typing `cmd`, and selecting **Command Prompt**.

Inside, navigate to the `rclone` path you extracted by typing:

```shell
cd "%HOMEPATH%\Downloads\rclone*\rclone*"
```

List the directory contents to verify that you are in the correct location:

```shell
dir
Output
10/23/2017  01:02 PM    <DIR>          .
10/23/2017  01:02 PM    <DIR>          ..
10/23/2017  01:02 PM                17 git-log.txt
10/23/2017  01:02 PM           296,086 rclone.1
10/23/2017  01:02 PM        16,840,192 rclone.exe
10/23/2017  01:02 PM           315,539 README.html
10/23/2017  01:02 PM           261,497 README.txt
               5 File(s)     17,713,331 bytes
               2 Dir(s)  183,296,266,240 bytes free
```

You will need to be in this directory whenever you want to use the `rclone.exe` command.

**Note:** On macOS and Linux, we run the tool by typing `rclone`, but on Windows, the command is called `rclone.exe`. Throughout the rest of this guide, we will be providing commands as `rclone`, so be sure to substitute `rclone.exe` each time when running on Windows.

Next, we can create the configuration directory and open up a configuration file to define our S3 and Spaces credentials:

```shell
mkdir "%HOMEPATH%\.config\rclone"
notepad "%HOMEPATH%\.config\rclone\rclone.conf"
```

This will open up your text editor with a new blank file. Continue ahead to learn how to define your Spaces regions in the configuration file.

## Step 2: Configuring Rclone

We will configure our two DigitalOcean Spaces regions as Rclone “remotes” in the Rclone configuration file. Paste the following section in `~/.config/rclone/rclone.conf` to define the first region:

```ini
[spaces-sfo2]
type = s3
provider = DigitalOcean
env_auth = false
access_key_id = your_spaces_access_key
secret_access_key = your_spaces_secret_key
endpoint = sfo2.digitaloceanspaces.com
acl = private
```

Here, we define a new `rclone` “remote” named `spaces-sfo2`. Change the region name to match the Spaces region you are configuring.

We set the `type` to `s3` and `provider` to `DigitalOcean` so that `rclone` knows the appropriate way to interact with and manage the remote storage resource. We will define the Spaces access credentials in this configuration file, so we can set `env_auth` to `false`.

Next, we set the `access_key_id` and `secret_access_key` variables to our Spaces access key and secret key, respectively. Be sure to change the values to the credentials associated with your account.

We set the `endpoint` to the bucket endpoint we looked up earlier.

Finally, we set the `acl` to `private` to protect our assets until we want to share them.

Next, make a duplicate of the configuration block you created, then update the name and endpoint region inside `~/.config/rclone/rclone.conf` to reflect your second region:

```ini
. . .

[spaces-nyc3]
type = s3
provider = DigitalOcean
env_auth = false
access_key_id = your_spaces_access_key
secret_access_key = your_spaces_secret_key
endpoint = nyc3.digitaloceanspaces.com
acl = private
```

The rest of the configuration should remain the same as for the first region. Save and close the file when you are finished.

On macOS and Linux, be sure to lock down the permissions of the configuration file since our credentials are inside:

```shell
chmod 600 ~/.config/rclone/rclone.conf
```

On Windows, permissions are denied to non-administrative users unless explicitly granted, so we shouldn’t need to adjust access manually.

Next, we’ll use `rclone` to explore our buckets and sync data between them.

## Step 3: Copying Objects from S3 to Spaces

Now that our configuration is complete, we are ready to transfer our files.

Begin by checking the `rclone` configured remotes:

```shell
rclone listremotes
Output
spaces-nyc3:
spaces-sfo2:
```

Both of the regions we defined are displayed.

We can view the available buckets by asking `rclone` to list the “directories” associated with the remotes (make sure to add the colon to the end of the remote name):

```shell
rclone lsd spaces-sfo2:
Output
         -1 2019-09-23 13:07:54        -1 source-space
```

The above output indicates that one bucket, called `source-space` was found in the `sfo2` region.

You can repeat the procedure to view the other region:

```shell
rclone lsd spaces-nyc3:
Output
         -1 2019-09-23 13:08:28        -1 destination-space
```

To view the contents of a bucket, you can use the `tree` command. Pass in the remote name, followed by a colon and the name of the “directory” you wish to list (the bucket name):

```shell
rclone tree spaces-sfo2:source-space
Output
/
├── Photos
│   ├── 2019.01.24-23.10.27.png
│   ├── 2019.01.24-23.11.39.png
│   ├── 2019.01.24-23.18.00.png
│   ├── 2019.01.24-23.18.18.png
│   ├── 2019.01.24-23.18.30.png
│   ├── 2019.01.24-23.19.32.png
│   ├── 2019.01.24-23.23.06.png
│   ├── 2019.01.24-23.23.53.png
│   ├── 2019.01.24-23.25.14.png
│   ├── 2019.01.24-23.26.22.png
│   ├── 2019.01.25-12.43.35.png
│   ├── 2019.03.13-14.35.34.png
│   └── 2019.03.13-14.40.52.png
└── Photos.zip

1 directories, 14 files
```

When you are ready, you can copy the files between buckets by typing:

```shell
rclone sync spaces-sfo2:source-space spaces-nyc3:destination-space
```

Assuming everything went well, `rclone` will begin copying objects between the two buckets.

**Note:** If you hadn’t previously created the destination bucket in the specified region, `rclone` will attempt to create one for you with the given name. This will fail if the name provided is already being used by another account or if the name doesn’t meet the naming requirements for DigitalOcean Spaces (lowercase letters, numbers, and dashes only).

When the transfer is complete, you can check that the objects have transferred by viewing them with the `tree` subcommand:

```shell
rclone tree spaces-nyc3:destination-space
Output
/
├── Photos
│   ├── 2019.01.24-23.10.27.png
│   ├── 2019.01.24-23.11.39.png
│   ├── 2019.01.24-23.18.00.png
│   ├── 2019.01.24-23.18.18.png
│   ├── 2019.01.24-23.18.30.png
│   ├── 2019.01.24-23.19.32.png
│   ├── 2019.01.24-23.23.06.png
│   ├── 2019.01.24-23.23.53.png
│   ├── 2019.01.24-23.25.14.png
│   ├── 2019.01.24-23.26.22.png
│   ├── 2019.01.25-12.43.35.png
│   ├── 2019.03.13-14.35.34.png
│   └── 2019.03.13-14.40.52.png
└── Photos.zip

1 directories, 14 files
```

For more robust verification, use the `check` subcommand to compare the objects in both regions:

```shell
rclone check spaces-sfo2:source-space spaces-nyc3:destination-space
Output
2019/09/23 14:29:11 NOTICE: S3 bucket destination-space: 0 differences found
2019/09/23 14:29:11 NOTICE: S3 bucket destination-space: 14 matching files
```

This will compare the hash values of each object in both remotes. You may receive a message indicating that some hashes could not be compared. In that case, you can rerun the command with the `--size-only` flag (which compares based on file size) or the `--download` flag (which downloads each object from both remotes to compare locally) to verify the transfer integrity.

## Summary

In this guide, we’ve covered how to transfer objects between two DigitalOcean Spaces regions. We gathered API credentials and endpoint information from the Spaces service, installed and configured the `rclone` utility on our local computer, and then copied all objects from a source bucket to a destination bucket.

## What’s Next?

The `rclone` client can be used for many other object storage management tasks including uploading or downloading files, mounting buckets on the local filesystem, and creating or deleting additional buckets. Check out the `man` page to learn more about the functionality the tool provides.

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#prerequisites)
  - [Generating a DigitalOcean Spaces API Key](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#generating-a-digitalocean-spaces-api-key)
  - [Finding the Spaces S3-Compatible Endpoint](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#finding-the-spaces-s3-compatible-endpoint)
- [Step 1: Installing Rclone](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#step-1-installing-rclone)
- [Step 2: Configuring Rclone](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#step-2-configuring-rclone)
- [Step 3: Copying Objects from S3 to Spaces](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#step-3-copying-objects-from-s3-to-spaces)
- [Summary](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#summary)
- [What’s Next?](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/#whats-next)

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