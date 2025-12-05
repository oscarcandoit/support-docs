---
url: "https://docs.digitalocean.com/reference/terraform/deploy-web-app/"
title: "Deploy A Sample Web Application on DigitalOcean Using Terraform | DigitalOcean Documentation"
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
- Deploy a Web App

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Deploy A Sample Web Application on DigitalOcean Using Terraform

Validated on 10 Sep 2020 • Last edited on 17 Apr 2025

This tutorial teaches you how to use Terraform to deploy [a sample web application](https://github.com/do-community/terraform-sample-digitalocean-architectures/tree/master/01-minimal-web-db-stack) to your DigitalOcean account. The architecture includes three Droplets attached to a database and a load balancer in a VPC network:

![The sample web application architecture.](https://docs.digitalocean.com/screenshots/vpc/resources/vpc-terraform-architecture.ef4adf810868c39efab336e16de022cb980cc9c5d8ce681a1409709ebb72bfb7.png)

At the end of this tutorial, you can visit a small website being hosted by your Droplets in your web browser.

## Prerequisites

Before starting this tutorial, you need four things:

- You need to create an [API token in your DigitalOcean account](https://docs.digitalocean.com/reference/api/create-personal-access-token/). This allows Terraform to access the DigitalOcean API and programmatically deploy resources into your account.

- You need to own a domain name and [have its DNS records hosted by DigitalOcean](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/). The domain name allows you to access the newly deployed Droplets via a hostname.

- You need to [have an SSH key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) and [upload your public key to your DigitalOcean team](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/). This is the SSH key that Terraform applies to the Droplets being deployed.

- You need to [install Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/#install-terraform) on the machine you are deploying from. Terraform is available for MacOS, Windows, Linux, and FreeBSD.


Note
This tutorial deploys real resources into your account. These resources incur charges for as long as you keep them running. To avoid unwanted charges, the [last step of this tutorial](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-6-destroy-resources-optional) destroys all of this tutorial’s resources.

## Step 1: Download the DigitalOcean Sample Terraform Repo

We created a [GitHub repository with several Terraform configuration files](https://github.com/do-community/terraform-sample-digitalocean-architectures) that compose the web architecture. You need to download this repository to your machine to deploy the resources. This does not require a [GitHub](https://github.com/) account.

First, download the repository to your system:

```shell
git clone https://github.com/do-community/terraform-sample-digitalocean-architectures
```

Once you download the repository, move to the `01-minimal-web-db-stack` directory:

```shell
cd terraform-sample-digitalocean-architectures/01-minimal-web-db-stack
```

This directory is where you execute Terraform commands from.

## Step 2: Configure Terraform Environment Variables

Before running Terraform commands, you need to assign your API token as an environment variable. This allows Terraform to access your DigitalOcean account via the API.

Environment variables are stored on your operating system outside of your working directory. This can be useful for storing variable values that are consistent across your DigitalOcean Terraform deployments, such as your API token or datacenter regions.

To assign your API token as an environment variable, run the following command, entering your API token and the path to your private SSH when prompted:

```
echo Enter your DigitalOcean API token?; read token; export TF_VAR_do_token=$token
```

The command returns a blank prompt when successful. To verify the variable was created, print the value of the variable to the command line:

```
echo $TF_VAR_do_token
```

The variable is set correctly if the command prints your key.

## Step 3: Assign Values to Input Variables

Next, you need to customize the architecture to match your needs, like setting your domain name and SSH key. To do this, you assign values to certain Terraform variables in its configuration files.

Click here for an overview of Terraform variables.

The `.tf` files in the working directory contain your DigitalOcean resource configurations. During deployment, Terraform loads all files with a `.tf` extension and creates a manifest of resources to deploy called a _plan_. You can divide resource configurations between as many or as few `.tf` files as you want.

Here’s an example of a basic resource configuration in a `.tf` file:

`example.tf`

```text
resource "digitalocean_droplet" "web" {
  image  = "ubuntu-18-04-x64"
  name   = "web-server"
  region = "sfo2"
  size   = "s-1vcpu-1gb"
  count  = "2"
}
```

This resource defines two DigitalOcean Droplets named `web-server` that run an Ubuntu 18.04 image in the SFO2 datacenter region.

While you can define all of your resources by hand in `.tf` files, Terraform becomes more powerful when you begin using input variables. Input variables give you the ability to dynamically define values for resource attributes before and during deployment.

In the `variables.tf` file of the sample architecture, we have defined input variables for many resource attributes, including the `region` attribute.

`variables.tf`

```text
variable "region" {
    type    = string
    default = "nyc3"
}
```

In this variable, we have defined that the value of the `region` attribute should be a string, and that if no other value is provided during the deployment, the default `"nyc3"` value is assigned to any `region` attribute with this variable assigned to it.

Then, in the Droplet resource configuration `example.tf`, we assigned the region variable (`var.region`) to the region attribute:

`example.tf`

```text
resource "digitalocean_droplet" "web" {
  image  = "ubuntu-18-04-x64"
  name   = "web-1"
  region = var.region
  size   = "s-1vcpu-1gb"
  count  = "2"
}
```

This means that Terraform assigns the resource’s `region` attribute value during deployment through one of four methods and in the following order:

1. Command-line flags
2. Values stored in a `.tfvars` file
3. Values set in the Terraform environment variables
4. User input on the command line during the deployment

If Terraform does not receive a value from any of these methods, it assigns the default value. In the example above, if you didn’t assign a value to the region variable through any of the aforementioned methods, Terraform would assign the `nyc3` value to all resources with a `region` attribute that have this input variable assigned to it.

In the sample architecture, we assigned values for several required variables in the `nyc3.tfvars` file which you need to customize before deployment.

To edit the input variables, open the `nyc3.tfvars` file in a text editor:

```shell
nano nyc3.tfvars
```

Then change the values of the `ssh_key` and `domain_name` fields.

- For the `ssh_key` field, enter the file name of an SSH key you have [previously uploaded to your team](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/).
- In the `domain` field, enter a [domain name hosted on DigitalOcean](https://docs.digitalocean.com/products/networking/dns/how-to/add-domains/).

You can also customize the values of other variables, like the region.

The result should look similar to this:

`nyc3.tfvars`

```text
region = "nyc3"
droplet_count = 3
ssh_key = "id_rsa.pub"
subdomain = "minimal-vpc"
domain_name = "example.com"
```

Save the changes to the file and then close it.

## Step 4: Deploy the Infrastructure

Terraform requires three steps for deployment:

1. **Initializing the directory**. `terraform init` prepares the working directory for use by accounting for any changes in Terraform’s backend configuration.

2. **Reviewing an execution plan**. `terraform plan` provides a detailed manifest of the resources for you to review before execution.

3. **Applying (executing) the Terraform plan**. `terraform apply` executes the deployment of the resources into your account.


To initialize the working directory, run the following command from the `01-minimal-web-db-stack` directory:

```shell
terraform init
```

Next, create the Terraform plan:

```shell
terraform plan -var-file=nyc3.tfvars -out=infra.out
```

Terraform saves the plan to an `infra.out` inside the working directory. Open the file in a text editor to review your Terraform plan.

Finally, apply the plan and begin the deployment:

```shell
terraform apply "infra.out"
```

Terraform creates the resources outlined in the Terraform plan in your DigitalOcean account.

## Step 5: View Your Infrastructure

You can view the resources being created in the [control panel](https://cloud.digitalocean.com/), like the [Droplets](https://cloud.digitalocean.com/droplets), [database](https://cloud.digitalocean.com/databases), and [load balancer](https://cloud.digitalocean.com/networking/load_balancers).

Once the deployment is complete, you have deployed the infrastructure. To view the website being hosted by the Droplets, open a web browser and enter `minimal-vpc.example.com`, replacing `example.com` with the domain you used in the deployment.

Click your browser’s **Reload** or **Refresh** button to see how the load balancer is distributing traffic across the Droplets using a round-robin algorithm.

## Step 6: Destroy Resources (Optional)

You can delete resources from your account using Terraform with one command. You can destroy specific resources or all the resources deployed using your `.tfvars` file.

To destroy all of the resources you created during this tutorial, run:

```shell
terraform destroy -var-file=nyc3.tfvars
```

Terraform asks you to confirm the deletion.

## Summary

Once you’ve deployed resources into your account, you can use this same workflow to deploy similar architectures for other web applications into your account. You only need to complete these steps once:

- Create an API token.
- Download Terraform.
- Set up environmental variables.

To deploy additional architectures using the same configuration, run the following commands from the Terraform directory:

1. Run `terraform init` to initialize the directory.
2. Run `terraform plan -var-file=nyc3.tfvars -out=infra.out` to create and review your Terraform plan.
3. Review your Terraform plan by opening `infra.out` file in a text editor.
4. Run `terraform apply "infra.out"` to deploy resources.

## What’s Next?

After deploying the web application infrastructure, you can use your new Droplets and network to [host your websites](https://www.digitalocean.com/community/tutorials/how-to-host-a-website-using-cloudflare-and-nginx-on-ubuntu-20-04) and applications.

You can also edit the Terraform files to experiment and make changes to the infrastructure. Use our reference documentation to learn about more options:

![](https://docs.digitalocean.com/images/icons/terraform.svg)

DigitalOcean Terraform Provider Reference

A complete reference for the DigitalOcean Terraform provider.

After you make changes, you can redeploy the new infrastructure by using the instructions in [step 4](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-4-initialize-review-plan-and-execute-terraform).

In this article...

- [Prerequisites](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#prerequisites)
- [Step 1: Download the DigitalOcean Sample Terraform Repo](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-1-download-the-digitalocean-sample-terraform-repo)
- [Step 2: Configure Terraform Environment Variables](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-2-configure-terraform-environment-variables)
- [Step 3: Assign Values to Input Variables](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-3-assign-values-to-input-variables)
- [Step 4: Deploy the Infrastructure](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-4-deploy-the-infrastructure)
- [Step 5: View Your Infrastructure](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-5-view-your-infrastructure)
- [Step 6: Destroy Resources (Optional)](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#step-6-destroy-resources-optional)
- [Summary](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#tldr)
- [What’s Next?](https://docs.digitalocean.com/reference/terraform/deploy-web-app/#whats-next)

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