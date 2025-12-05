---
url: "https://docs.digitalocean.com/products/spaces/reference/terraform-backend/"
title: "How to Use DigitalOcean Spaces as a Terraform Remote State Backend | DigitalOcean Documentation"
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
- Terraform Backend

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use DigitalOcean Spaces as a Terraform Remote State Backend

Validated on 24 Jun 2024 • Last edited on 6 Jun 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

Terraform is an open-source tool that allows you to build, version, and automate the deployment of cloud infrastructure. You can use Terraform to set up basic or complex architectures for your applications.

![](https://docs.digitalocean.com/images/icons/terraform.svg)

DigitalOcean Terraform Provider Reference

A complete reference for the DigitalOcean Terraform provider.

By default, Terraform stores state files locally in the directory where Terraform is run. This works well if you’re using Terraform on your own, but it becomes a problem in a team environment where multiple people need to access the state files.

With [remote state](https://developer.hashicorp.com/terraform/language/state/remote), instead of keeping the state files on your own machine, Terraform stores them in a central location that everyone on your team can access.

## Prerequisites

This guide requires the following resources:

- A Spaces bucket. For instructions, follow [How to Create a Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/).
- A Spaces access key and secret key. For instructions, follow [Sharing Access to Buckets with Access Keys](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys).

## Set the Access Key Environment Variables

You can pass your Spaces access key to Terraform in multiple ways. We strongly recommend using environment variables.

Other methods, like using `terraform init -backend-config` or hardcoding key values in the backend configuration, cause Terraform to include those values in your `.terraform` folder and plan files, potentially leaking your credentials. Using environment variables helps keep your key private.

Terraform uses `AWS_...` environment variables for all S3-compatible backend providers. Export your keys to your current shell environment. In Bash shells, for example, use `export`:

```shell
export AWS_ACCESS_KEY_ID="<your_access_key>"
export AWS_SECRET_ACCESS_KEY="<your_secret_key>"
```

Replace the `<your_access_key>` and `<your_secret_key>` placeholders with your actual keys.

## Configure the Backend

The following Terraform configuration sets up an `s3` backend and configures it to use a DigitalOcean Spaces bucket. You need Terraform version `1.6.3` or higher to use it.

```terraform
terraform {
required_version = ">= 1.6.3"

  backend "s3" {
    endpoints = {
      s3 = "https://<your_bucket_region>.digitaloceanspaces.com"
    }

    bucket = "<your_bucket_name>"
    key    = "<state_file_name>"

    # Deactivate a few AWS-specific checks
    skip_credentials_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_s3_checksum            = true
    region                      = "us-east-1"
  }
}
```

There are three settings to update:

- `s3`: Update `<your_bucket_region>` with the region of your bucket. For example, a bucket in the NYC3 datacenter has the URL `https://nyc3.digitaloceanspaces.com` here.
- `bucket`: Change `<your_bucket_name>` to the name of your bucket.
- `key`: This is the key (or filename) your Terraform state is stored under. Change `<state_file_name>` to the key you’d like to use.
In many S3-compatible clients, these are treated as file paths and can contain forward slashes (`/`) for directories and periods for file extensions. For example, a value of `test/example.tfstate` would place an `example.tfstate` file inside the `test` directory in the root of your bucket.

Update these variables, then save your configuration in a `.tf` file.

## Initialize and Apply the Terraform Configuration

You can apply this Terraform configuration as is, but it only sets up the bucket as a backend. At this point, add configuration for any additional resources you want to manage. See our [Terraform Reference](https://docs.digitalocean.com/reference/terraform/) for information on creating DigitalOcean resources using Terraform.

Once your backend and any optional resources are configured, initialize the configuration using the `terraform init` command:

```shell
terraform init
```

Terraform outputs some status messages indicating that the backend is configured:

```
Initializing the backend...

Successfully configured the backend "s3"! Terraform will automatically
use this backend unless the backend configuration changes.

...

Terraform has been successfully initialized!
```

You may now create the plan and apply the changes:

```shell
terraform plan
terraform apply
```

The `terraform apply` command updates your resources to match the plan and then saves its state to your Spaces bucket. Any collaborators with the same configuration and access to the bucket are able to use your shared state when applying their own changes.

## Use State Locking with Spaces

In Terraform, state locking is a mechanism that prevents multiple concurrent operations from modifying the state file simultaneously. Without state locking, running multiple Terraform processes concurrently could lead to state corruption, resulting in infrastructure drift, inconsistent deployments, or failed updates.

Before Terraform performs operations that modify the state file, it attempts to acquire a lock. If another process has already acquired the lock, Terraform waits until the lock is released before proceeding. If the lock cannot be acquired, Terraform fails with an error.

To lock state in a DigitalOcean Spaces bucket, Terraform must create a lock file in the same bucket as the state file. To enable Spaces state locking, add `use_lockfile = true` to your Terraform configuration:

```terraform
terraform {
required_version = "~> 1.11"

  backend "s3" {
    endpoints = {
      s3 = "https://<your_bucket_region>.digitaloceanspaces.com"
    }

    bucket = "<your_bucket_name>"
    key    = "<state_file_name>"

    # Deactivate a few AWS-specific checks
    skip_credentials_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_s3_checksum            = true
    region                      = "us-east-1"

    # Enable state locking with a lockfile
    use_lockfile                = true
  }
}
```

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/#prerequisites)
- [Set the Access Key Environment Variables](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/#set-the-access-key-environment-variables)
- [Configure the Backend](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/#configure-the-backend)
- [Initialize and Apply the Terraform Configuration](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/#initialize-and-apply-the-terraform-configuration)
- [Use State Locking with Spaces](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/#use-state-locking-with-spaces)

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