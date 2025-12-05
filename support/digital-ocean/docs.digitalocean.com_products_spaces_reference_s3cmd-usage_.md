---
url: "https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/"
title: "Examples of s3cmd 2.x Usage with DigitalOcean Spaces | DigitalOcean Documentation"
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

- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
- s3cmd 2.x Usage

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Examples of s3cmd 2.x Usage with DigitalOcean Spaces

Validated on 2 Aug 2018 • Last edited on 4 Sep 2024

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

s3cmd is a popular cross-platform command-line tool for managing S3 and S3-compatible object stores. Once you’ve [set up s3cmd](https://docs.digitalocean.com/products/spaces/reference/s3cmd/), you can use it to manage your Spaces buckets and files.

If you’re using an alternative configuration file, you must explicitly provide it at the end of each command by appending `-c ~/path/to/config/file`.

## Create Buckets

Use the command `mb`, short for “make bucket”, to create a new bucket:

```shell
s3cmd mb s3://spacename s3://secondspace
```

Object stores use a flat namespace and don’t have directories. What look like directories in the path of an object are actually part of the object’s file name. Graphical interfaces mimic the more familiar experience of directories for their users by creating an empty file for each element that doesn’t already exist.

From the command line, there’s no need to create empty files. Instead, type the path where you want the file to be as part of the `put` command.

## List Buckets and Contents

### List all existing buckets

```shell
s3cmd ls
```

### List all the contents of buckets recursively

For one or more specific buckets:

```shell
s3cmd ls s3://spacename s3://secondspace
```

### List all content in all buckets

```shell
s3cmd la --recursive
```

## Upload files to a bucket

Use the `put` command to copy files from your local machine to a bucket. In all of these commands, you must include the trailing slash.

### Put one file

When you include the trailing slash, as in the example below, the original file name is appended. If you omit the slash, then the file is copied to the bucket with the new name, `path`.

```shell
s3cmd put file.txt s3://spacename/path/
```

### Put a file under a new name

You can change the name of a file as you put it in a bucket by typing the new name at the end of the path as follows:

```shell
s3cmd put file.txt s3://spacename/newname.txt
```

### Put multiple files

```
s3cmd put file1.txt file2.txt path/to/file3.txt s3://spacename/path/
```

### Put all files in your current directory

Using the `*` with the `put` command copies everything in the current working directory, recursively, into your bucket:

```shell
s3cmd put * s3://spacename/path/ --recursive
```

You can set public permissions for all files at once by adding `--acl-public`, and you can similarly set [metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/) with `--add-header` (like `--add-header=Cache-Control:max-age=86400`):

```shell
s3cmd put * s3://yourfolder --acl-public --add-header=Cache-Control:max-age=86400 --recursive
```

## Save Files to your local computer

The command `get` copies files from a bucket to your local computer.

### Get one file

```shell
s3cmd get s3://spacename/path/to/file.txt
```

### Get all the files in a directory

To get multiple files, the s3 address must end with a trailing slash, and the command requires the `--recursive` flag.

```shell
s3cmd get s3://spacename/path/ --recursive
```

### Save a file under a new name

Like the `put` command, the command `get` command allows you to give the file a different name.

```shell
s3cmd get s3://spacename/file.txt newfilename.txt
```

## Set Directory Listings on a Space

s3cmd only provides output when the command you issue actually changes access levels. For example, when you change the ACL from private to public, you’ll see output like `s3://spacename/: ACL set to Public`. If the ACL is already public, s3cmd returns silently to the command prompt.

### Enable directory listings

```shell
s3cmd setacl s3://spacename/ --acl-public
```

### Disable directory listings

```shell
s3cmd setacl s3://spacename/ --acl-private
```

## Set Permissions on Files

Using the `setacl` command, files can be made **private** so that only someone connecting with a valid key pair is able to read the file, or **public** so that anyone can read the file with either an S3 compatible client or via HTTPS.

s3cmd only provides output when the command you issue changes the access. For example, when you change the ACL from private to public, you’ll see output like `s3://spacename/test.txt: ACL set to Public  [1 of 1]`. If the ACL is already public, s3cmd returns silently to the command prompt.

### Make a file public

```shell
s3cmd setacl s3://spacename/file.txt --acl-public
```

### Make all the files at a path public recursively

Use the `--recursive` flag to make multiple files public recursively:

```shell
s3cmd setacl s3://spacename/path/to/files/ --acl-public --recursive
```

### Make a file private

```shell
s3cmd setacl s3://spacename/file.txt --acl-private
```

### Make all the files at a path private recursively

Use the `--recursive` flag to make multiple files private recursively:

```shell
s3cmd setacl s3://spacename/path/to/files/ --acl-private --recursive
```

## Delete Buckets and Files

The s3cmd commands `del` and `rm` are identical and can be used interchangeably.

## Destroy a Bucket

Use `rb` (short for “remove bucket”) to destroy an empty bucket. If you wish to remove the bucket and all its contents, append `--recursive`. This permanently removes all the files.

```shell
s3cmd rb s3://spacename
```

### Delete a file

```shell
s3cmd rm s3://spacename/name/of/file
```

### Delete all files in a bucket

Use `rm` or `del` with both the `--recursive` and `--force` flags to remove all the files in a bucket but not the bucket itself.

```shell
s3cmd rm s3://spacename/  --recursive --force
```

## Encrypt Files

Adding the `-e` or `--encrypt` flag when you put a file in a bucket with `s3cmd` encrypts the file to protect it from being read on the server or in transit. If you download the file using `s3cmd` and the same configuration file, s3cmd automatically uses the password to decrypt it. Other users would need to use `gpg -d file.txt` to decrypt it and would have to enter the password you supplied.

```shell
s3cmd put s3://path/to/file.txt -e
```

`s3cmd` allows you to use only one password, so it’s suitable for you and for other users with full administrative access. You can learn more about GPG’s symmetric encryption in [The GNU Privacy Handbook](https://www.gnupg.org/gph/en/manual/x110.html).

## More Information

For a comprehensive guide to s3cmd usage, see the [s3cmd usage guide](https://s3tools.org/usage) or access the help file from the command line with `s3cmd --help`.

In this article...

- [Create Buckets](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#create-buckets)
- [List Buckets and Contents](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#list-buckets-and-contents)
  - [List all existing buckets](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#list-all-existing-buckets)
  - [List all the contents of buckets recursively](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#list-all-the-contents-of-buckets-recursively)
  - [List all content in all buckets](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#list-all-content-in-all-buckets)
- [Upload files to a bucket](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#upload-files-to-a-bucket)
  - [Put one file](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#put-one-file)
  - [Put a file under a new name](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#put-a-file-under-a-new-name)
  - [Put multiple files](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#put-multiple-files)
  - [Put all files in your current directory](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#put-all-files-in-your-current-directory)
- [Save Files to your local computer](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#save-files-to-your-local-computer)
  - [Get one file](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#get-one-file)
  - [Get all the files in a directory](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#get-all-the-files-in-a-directory)
  - [Save a file under a new name](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#save-a-file-under-a-new-name)
- [Set Directory Listings on a Space](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#set-directory-listings-on-a-space)
  - [Enable directory listings](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#enable-directory-listings)
  - [Disable directory listings](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#disable-directory-listings)
- [Set Permissions on Files](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#set-permissions-on-files)
  - [Make a file public](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#make-a-file-public)
  - [Make all the files at a path public recursively](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#make-all-the-files-at-a-path-public-recursively)
  - [Make a file private](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#make-a-file-private)
  - [Make all the files at a path private recursively](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#make-all-the-files-at-a-path-private-recursively)
- [Delete Buckets and Files](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#delete-buckets-and-files)
- [Destroy a Bucket](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#destroy-a-bucket)
  - [Delete a file](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#delete-a-file)
  - [Delete all files in a bucket](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#delete-all-files-in-a-bucket)
- [Encrypt Files](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#encrypt-files)
- [More Information](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/#more-information)

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