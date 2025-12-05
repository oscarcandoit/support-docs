---
url: "https://docs.digitalocean.com/reference/terraform/getting-started/"
title: "How to Configure Terraform for DigitalOcean | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
  - [Configure Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/)
  - [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Terraform](https://docs.digitalocean.com/reference/terraform/)
- Configure Terraform

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Configure Terraform for DigitalOcean

Validated on 22 Nov 2023 • Last edited on 30 Jul 2025

To use Terraform with DigitalOcean, you need to install Terraform and configure a provider file.

## Install Terraform

You can install the latest version of Terraform on most operating systems from the command line using various package managers. Click your operating system’s tab below to view instructions on how to install Terraform.

MacOS

To install Terraform on MacOS using Homebrew, run the following command in a terminal:

```shell
brew install terraform
```

Once installed, verify Terraform’s installation:

```shell
terraform -v
```

The command returns Terraform’s version information:

```shell
Terraform v1.5.7
```

Windows

To install Terraform on Windows using Chocolatey, run the following command from the command prompt:

```shell
choco install terraform
```

Once installed, verify Terraform’s installation:

```shell
terraform -v
```

The command returns Terraform’s version information:

```shell
Terraform v1.6.4
```

Ubuntu

To install Terraform on Ubuntu, add the HashiCorp GPG key to your system:

```shell
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
```

Next, add the official HashiCorp Terraform Linux repository to `apt`:

```shell
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

Then update `apt` and install Terraform:

```shell
sudo apt-get update && sudo apt-get install terraform
```

Once installed, verify the installation:

```shell
terraform -v
```

The command returns Terraform’s version information:

```shell
Terraform v1.6.4
```

CentOS

To install Terraform on CentOS, install the `yum-config-manager` to manage your repositories:

```shell
sudo yum install -y yum-utils
```

Use `yum-config-manager` to add the official HashiCorp Linux repository:

```shell
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
```

Then install Terraform:

```shell
sudo yum -y install terraform
```

Once installed, verify Terraform’s installation:

```shell
terraform -v
```

The command returns Terraform’s version information:

```shell
Terraform v1.6.4
```

## Configure Terraform for DigitalOcean

To use the DigitalOcean provider with Terraform, you have to configure the plugin using a provider file. This file tells Terraform which provider you’re using (DigitalOcean) and where to find the necessary credentials (your DigitalOcean API token, and your public and private SSH keys). If you do not have any SSH keys set up, you need to [create one and upload the public key to your DigitalOcean account](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) before continuing.

To start, create and move into a directory. This is where you configure and deploy your infrastructure and where you create the provider file.

```shell
mkdir ~/example-terraform-directory
cd ~/example-terraform-directory
```

Create a new file in the working directory called `provider.tf` and then open it with your preferred text editor.

Add the following lines to the file, substituting `the_name_of_your_public_SSH_key` value for the name of the public SSH key uploaded to your DigitalOcean account:

`provider.tf`

```text
terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}
variable "pvt_key" {}

provider "digitalocean" {
  token = var.do_token
}

data "digitalocean_ssh_key" "terraform" {
  name = "the_name_of_your_public_SSH_key"
}
```

Here is a breakdown of what each part of this file defines:

The following lines tells Terraform which provider you are using.

```
terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}
```

The next lines tell Terraform to seek values for the DigitalOcean security variables upon deployment.

- `variable "do_token"`\- Tells Terraform to seek your DigitalOcean API token upon deployment so it can access your DigitalOcean account and deploy resources via the API.
- `variable "pvt_key"` \- Tells Terraform to seek the path to your private SSH key on your local machine upon deployment so it can access the Droplets you deploy.

```
variable "do_token" {}
variable "pvt_key" {}
```

The next lines further specify the DigitalOcean provider information by assigning `token` to the `do_token` variable.

```
provider "digitalocean" {
  token = var.do_token
}
```

The last lines define your public SSH key and allows Terraform to automatically add your SSH key to any new Droplets you create.

```
data "digitalocean_ssh_key" "terraform" {
  name = "the_name_of_your_public_SSH_key"
}
```

Once you have pasted the lines into the file and defined the name of your public key in the `data "digitalocean_ssh_key"` section, save the file and then exit.

## Create Terraform Configuration Files

Once you have configured Terraform to access your DigitalOcean account, you can begin developing Terraform files that describe and declare the DigitalOcean resources that you want to deploy into your account. Terraform configuration files are text files stored with `.tf` extensions. They are human-readable and they support comments.

During deployment, Terraform loads all files with a `.tf` extension and creates a manifest of resources to deploy called a “plan”. You can divide resource configurations between as many or as few `.tf` files as you want.

Below is a sample Terraform file describing a Droplet with an nginx web server running on it. The `user_data` Terraform attribute is used to [`provide data`](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/), usually a script, to Droplet(s) to run during creation. The `user_data` in the configuration below sets up an nginx web server. You can copy and paste this file into your working directory as a new `.tf` file and deploy it using the steps in [the next section](https://docs.digitalocean.com/reference/terraform/getting-started/#execute-terraform).

`www-1.tf`

```text
resource "digitalocean_droplet" "www-1" {
  image = "ubuntu-22-04-x64"
  name = "www-1"
  region = "nyc2"
  size = "s-1vcpu-1gb"
  ssh_keys = [\
    data.digitalocean_ssh_key.terraform.id\
  ]
  connection {
    host = self.ipv4_address
    user = "root"
    type = "ssh"
    private_key = file(var.pvt_key)
    timeout = "2m"
  }
  user_data = <<EOF
    #cloud-config
    package_update: true
    package_upgrade: true
    packages:
      - nginx
    runcmd:
      - systemctl enable nginx
      - systemctl start nginx
  EOF
}
```

Use our [reference documentation](https://docs.digitalocean.com/reference/terraform/reference/) to develop more Terraform configuration files.

## Execute Terraform

Once you have configured your Terraform files, you can deploy all of the resources you have configured from the command line. Terraform requires three steps for deployment: initializing the directory, reviewing an execution plan, and applying (executing) the Terraform plan.

Initialization prepares the working directory for use by accounting for any changes in Terraform’s backend configuration. The planning step provides you a detailed manifest of the resources for you to review before execution. Lastly, the `terraform apply` command executes the deployment of the resources into your account.

To initialize the working directory:

```shell
terraform init
```

If Terraform was successful in initializing the directory, you receive the message `Terraform has been successfully initialized!`.

Next, you need to create and view your Terraform plan. To create your Terraform plan:

```shell
terraform plan -out=infra.out
```

Terraform returns a manifest of resources it deploys when you apply the plan. It also creates an `infra.out` file with the manifest inside of it. Terraform uses the `infra.out` file to deploy the resources into your account.

After reviewing the plan, you can apply it and deploy the resources to your account. To execute the plan:

```shell
terraform apply "infra.out"
```

Terraform begins executing the plan and prompts you for two security variables:

- `var.do_token` \- Your [DigitalOcean API token](https://docs.digitalocean.com/reference/api/create-personal-access-token/).
- `var.pvt_key` \- The path to the [private SSH key on your local machine](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/), for example, `~/.ssh/id_rsa`.

Once you have provided the variables, Terraform deploys the resources into your account. You can open the [DigitalOcean Control Panel](https://cloud.digitalocean.com/) to view their creation.

After configuring Terraform, you can [follow an in-depth tutorial](https://docs.digitalocean.com/reference/terraform/deploy-web-app/) that guides you through deploying a complete sample network infrastructure, or you can reference our [provider documentation](https://docs.digitalocean.com/reference/terraform/reference/) to develop more Terraform configuration files.

In this article...

- [Install Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/#install-terraform)
- [Configure Terraform for DigitalOcean](https://docs.digitalocean.com/reference/terraform/getting-started/#configure-terraform-for-digitalocean)
- [Create Terraform Configuration Files](https://docs.digitalocean.com/reference/terraform/getting-started/#create-terraform-configuration-files)
- [Execute Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/#execute-terraform)

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