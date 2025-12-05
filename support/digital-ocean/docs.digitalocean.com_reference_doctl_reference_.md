---
url: "https://docs.digitalocean.com/reference/doctl/reference/"
title: "Command Line Interface (CLI) Reference for doctl | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
  - [How to Install doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)
  - [Command Reference](https://docs.digitalocean.com/reference/doctl/reference/)
    - [doctl 1-click](https://docs.digitalocean.com/reference/doctl/reference/1-click/)
    - [doctl account](https://docs.digitalocean.com/reference/doctl/reference/account/)
    - [doctl apps](https://docs.digitalocean.com/reference/doctl/reference/apps/)
    - [doctl auth](https://docs.digitalocean.com/reference/doctl/reference/auth/)
    - [doctl balance](https://docs.digitalocean.com/reference/doctl/reference/balance/)
    - [doctl billing-history](https://docs.digitalocean.com/reference/doctl/reference/billing-history/)
    - [doctl compute](https://docs.digitalocean.com/reference/doctl/reference/compute/)
    - [doctl databases](https://docs.digitalocean.com/reference/doctl/reference/databases/)
    - [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/genai/)
    - [doctl invoice](https://docs.digitalocean.com/reference/doctl/reference/invoice/)
    - [doctl kubernetes](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/)
    - [doctl monitoring](https://docs.digitalocean.com/reference/doctl/reference/monitoring/)
    - [doctl network](https://docs.digitalocean.com/reference/doctl/reference/network/)
    - [doctl nfs](https://docs.digitalocean.com/reference/doctl/reference/nfs/)
    - [doctl projects](https://docs.digitalocean.com/reference/doctl/reference/projects/)
    - [doctl registries](https://docs.digitalocean.com/reference/doctl/reference/registries/)
    - [doctl registry](https://docs.digitalocean.com/reference/doctl/reference/registry/)
    - [doctl serverless](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
    - [doctl spaces](https://docs.digitalocean.com/reference/doctl/reference/spaces/)
    - [doctl version](https://docs.digitalocean.com/reference/doctl/reference/version/)
    - [doctl vpcs](https://docs.digitalocean.com/reference/doctl/reference/vpcs/)
  - [Manage Load Balancers with doctl](https://docs.digitalocean.com/products/networking/load-balancers/getting-started/with-doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- Command Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Command Line Interface (CLI) Reference for doctl

Generated on 20 Oct 2025
from `doctl` version
[`v1.146.0`](https://github.com/digitalocean/doctl/releases/tag/v1.146.0)

This is a complete list of commands provided by the `doctl` CLI, which enables you to manage your DigitalOcean resources from the command line.

### doctl 1-click

| Command | Description |
| --- | --- |
| [`doctl 1-click`](https://docs.digitalocean.com/reference/doctl/reference/1-click/) | Display commands that pertain to 1-click applications |
| [`doctl 1-click list`](https://docs.digitalocean.com/reference/doctl/reference/1-click/list/) | Retrieve a list of 1-Click applications |

### doctl account

| Command | Description |
| --- | --- |
| [`doctl account`](https://docs.digitalocean.com/reference/doctl/reference/account/) | Display commands that retrieve account details |
| [`doctl account get`](https://docs.digitalocean.com/reference/doctl/reference/account/get/) | Retrieve account profile details |
| [`doctl account ratelimit`](https://docs.digitalocean.com/reference/doctl/reference/account/ratelimit/) | Retrieve your API usage and the remaining quota |

### doctl apps

| Command | Description |
| --- | --- |
| [`doctl apps`](https://docs.digitalocean.com/reference/doctl/reference/apps/) | Displays commands for working with apps |
| [`doctl apps console`](https://docs.digitalocean.com/reference/doctl/reference/apps/console/) | Starts a console session |
| [`doctl apps create`](https://docs.digitalocean.com/reference/doctl/reference/apps/create/) | Create an app |
| [`doctl apps create-deployment`](https://docs.digitalocean.com/reference/doctl/reference/apps/create-deployment/) | Creates a deployment |
| [`doctl apps delete`](https://docs.digitalocean.com/reference/doctl/reference/apps/delete/) | Deletes an app |
| [`doctl apps dev`](https://docs.digitalocean.com/reference/doctl/reference/apps/dev/) | \[BETA\] Display commands for working with App Platform local development. |
| [`doctl apps dev build`](https://docs.digitalocean.com/reference/doctl/reference/apps/dev/build/) | Build an app component |
| [`doctl apps dev config`](https://docs.digitalocean.com/reference/doctl/reference/apps/dev/config/) | Displays commands for working with App Platform local development configuration settings. |
| [`doctl apps dev config set`](https://docs.digitalocean.com/reference/doctl/reference/apps/dev/config/set/) | Set a value in the local development configuration settings. |
| [`doctl apps dev config unset`](https://docs.digitalocean.com/reference/doctl/reference/apps/dev/config/unset/) | Unset a value in the local development configuration settings. |
| [`doctl apps get`](https://docs.digitalocean.com/reference/doctl/reference/apps/get/) | Get an app |
| [`doctl apps get-deployment`](https://docs.digitalocean.com/reference/doctl/reference/apps/get-deployment/) | Get a deployment |
| [`doctl apps get-job-invocation`](https://docs.digitalocean.com/reference/doctl/reference/apps/get-job-invocation/) | Get a job invocation |
| [`doctl apps list`](https://docs.digitalocean.com/reference/doctl/reference/apps/list/) | Lists all apps |
| [`doctl apps list-alerts`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-alerts/) | Lists alerts on an app |
| [`doctl apps list-buildpacks`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-buildpacks/) | Lists buildpacks |
| [`doctl apps list-deployments`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-deployments/) | List all deployments |
| [`doctl apps list-instances`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-instances/) | Get app instances |
| [`doctl apps list-job-invocations`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-job-invocations/) | List all job invocations |
| [`doctl apps list-regions`](https://docs.digitalocean.com/reference/doctl/reference/apps/list-regions/) | Lists available App Platform regions |
| [`doctl apps logs`](https://docs.digitalocean.com/reference/doctl/reference/apps/logs/) | Retrieves logs |
| [`doctl apps propose`](https://docs.digitalocean.com/reference/doctl/reference/apps/propose/) | Proposes an app spec |
| [`doctl apps restart`](https://docs.digitalocean.com/reference/doctl/reference/apps/restart/) | Restarts an app |
| [`doctl apps spec`](https://docs.digitalocean.com/reference/doctl/reference/apps/spec/) | Display commands for working with app specs |
| [`doctl apps spec get`](https://docs.digitalocean.com/reference/doctl/reference/apps/spec/get/) | Retrieve an application’s spec |
| [`doctl apps spec validate`](https://docs.digitalocean.com/reference/doctl/reference/apps/spec/validate/) | Validate an application spec |
| [`doctl apps tier`](https://docs.digitalocean.com/reference/doctl/reference/apps/tier/) | Display commands for working with app tiers |
| [`doctl apps tier instance-size`](https://docs.digitalocean.com/reference/doctl/reference/apps/tier/instance-size/) | Display commands for working with app instance sizes |
| [`doctl apps tier instance-size get`](https://docs.digitalocean.com/reference/doctl/reference/apps/tier/instance-size/get/) | Retrieve an app instance size |
| [`doctl apps tier instance-size list`](https://docs.digitalocean.com/reference/doctl/reference/apps/tier/instance-size/list/) | List all app instance sizes |
| [`doctl apps update`](https://docs.digitalocean.com/reference/doctl/reference/apps/update/) | Updates an app |
| [`doctl apps update-alert-destinations`](https://docs.digitalocean.com/reference/doctl/reference/apps/update-alert-destinations/) | Updates alert destinations |
| [`doctl apps upgrade-buildpack`](https://docs.digitalocean.com/reference/doctl/reference/apps/upgrade-buildpack/) | Upgrades app’s buildpack |

### doctl auth

| Command | Description |
| --- | --- |
| [`doctl auth`](https://docs.digitalocean.com/reference/doctl/reference/auth/) | Display commands for authenticating doctl with an account |
| [`doctl auth init`](https://docs.digitalocean.com/reference/doctl/reference/auth/init/) | Initialize doctl to use a specific account |
| [`doctl auth list`](https://docs.digitalocean.com/reference/doctl/reference/auth/list/) | List available authentication contexts |
| [`doctl auth remove`](https://docs.digitalocean.com/reference/doctl/reference/auth/remove/) | Remove authentication contexts |
| [`doctl auth switch`](https://docs.digitalocean.com/reference/doctl/reference/auth/switch/) | Switch between authentication contexts |
| [`doctl auth token`](https://docs.digitalocean.com/reference/doctl/reference/auth/token/) | Display current authentication context API token |

### doctl balance

| Command | Description |
| --- | --- |
| [`doctl balance`](https://docs.digitalocean.com/reference/doctl/reference/balance/) | Display commands for retrieving your account balance |
| [`doctl balance get`](https://docs.digitalocean.com/reference/doctl/reference/balance/get/) | Retrieve your account balance |

### doctl billing-history

| Command | Description |
| --- | --- |
| [`doctl billing-history`](https://docs.digitalocean.com/reference/doctl/reference/billing-history/) | Display commands for retrieving your billing history |
| [`doctl billing-history list`](https://docs.digitalocean.com/reference/doctl/reference/billing-history/list/) | Retrieve a paginated billing history for a user |

### doctl compute

| Command | Description |
| --- | --- |
| [`doctl compute`](https://docs.digitalocean.com/reference/doctl/reference/compute/) | Display commands that manage infrastructure |
| [`doctl compute action`](https://docs.digitalocean.com/reference/doctl/reference/compute/action/) | Display commands for retrieving resource action history |
| [`doctl compute action get`](https://docs.digitalocean.com/reference/doctl/reference/compute/action/get/) | Retrieve details about a specific action |
| [`doctl compute action list`](https://docs.digitalocean.com/reference/doctl/reference/compute/action/list/) | Retrieve a list of all recent actions taken on your resources |
| [`doctl compute action wait`](https://docs.digitalocean.com/reference/doctl/reference/compute/action/wait/) | Block thread until an action completes |
| [`doctl compute cdn`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/) | Display commands that manage CDNs |
| [`doctl compute cdn create`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/create/) | Create a CDN |
| [`doctl compute cdn delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/delete/) | Delete a CDN |
| [`doctl compute cdn flush`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/flush/) | Flush the cache of a CDN |
| [`doctl compute cdn get`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/get/) | Retrieve details about a specific CDN |
| [`doctl compute cdn list`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/list/) | List CDNs that have already been created |
| [`doctl compute cdn update`](https://docs.digitalocean.com/reference/doctl/reference/compute/cdn/update/) | Update the configuration for a CDN |
| [`doctl compute certificate`](https://docs.digitalocean.com/reference/doctl/reference/compute/certificate/) | Display commands that manage SSL certificates and private keys |
| [`doctl compute certificate create`](https://docs.digitalocean.com/reference/doctl/reference/compute/certificate/create/) | Create a new certificate |
| [`doctl compute certificate delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/certificate/delete/) | Delete the specified certificate |
| [`doctl compute certificate get`](https://docs.digitalocean.com/reference/doctl/reference/compute/certificate/get/) | Retrieve details about a certificate |
| [`doctl compute certificate list`](https://docs.digitalocean.com/reference/doctl/reference/compute/certificate/list/) | Retrieve list of the account’s stored certificates |
| [`doctl compute domain`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/) | Display commands that manage domains |
| [`doctl compute domain create`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/create/) | Add a domain to your account |
| [`doctl compute domain delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/delete/) | Permanently delete a domain from your account |
| [`doctl compute domain get`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/get/) | Retrieve information about a domain |
| [`doctl compute domain list`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/list/) | List all domains on your account |
| [`doctl compute domain records`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/records/) | Manage DNS records |
| [`doctl compute domain records create`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/records/create/) | Create a DNS record |
| [`doctl compute domain records delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/records/delete/) | Delete a DNS record |
| [`doctl compute domain records list`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/records/list/) | List the DNS records for a domain |
| [`doctl compute domain records update`](https://docs.digitalocean.com/reference/doctl/reference/compute/domain/records/update/) | Update a DNS record |
| [`doctl compute droplet`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/) | Manage virtual machines (Droplets) |
| [`doctl compute droplet 1-click`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/1-click/) | Display commands that pertain to Droplet 1-click applications |
| [`doctl compute droplet 1-click list`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/1-click/list/) | Retrieve a list of Droplet 1-Click applications |
| [`doctl compute droplet actions`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/actions/) | List Droplet actions |
| [`doctl compute droplet backup-policies`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backup-policies/) | Display commands for Droplet’s backup policies. |
| [`doctl compute droplet backup-policies get`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backup-policies/get/) | Get droplet’s backup policy |
| [`doctl compute droplet backup-policies list`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backup-policies/list/) | List backup policies for all Droplets |
| [`doctl compute droplet backup-policies list-supported`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backup-policies/list-supported/) | List of all supported droplet backup policies |
| [`doctl compute droplet backups`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/backups/) | List Droplet backups |
| [`doctl compute droplet create`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/create/) | Create a new Droplet |
| [`doctl compute droplet delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/delete/) | Permanently delete a Droplet |
| [`doctl compute droplet get`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/get/) | Retrieve information about a Droplet |
| [`doctl compute droplet kernels`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/kernels/) | List available Droplet kernels |
| [`doctl compute droplet list`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/list/) | List Droplets on your account |
| [`doctl compute droplet neighbors`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/neighbors/) | List a Droplet’s neighbors on your account |
| [`doctl compute droplet snapshots`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/snapshots/) | List all snapshots for a Droplet |
| [`doctl compute droplet tag`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/tag/) | Add a tag to a Droplet |
| [`doctl compute droplet untag`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/untag/) | Remove a tag from a Droplet |
| [`doctl compute droplet-action`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/) | Display Droplet action commands |
| [`doctl compute droplet-action change-backup-policy`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/change-backup-policy/) | Change backup policy on a Droplet |
| [`doctl compute droplet-action change-kernel`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/change-kernel/) | Change a Droplet’s kernel |
| [`doctl compute droplet-action disable-backups`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/disable-backups/) | Disable backups on a Droplet |
| [`doctl compute droplet-action enable-backups`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/enable-backups/) | Enable backups on a Droplet |
| [`doctl compute droplet-action enable-ipv6`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/enable-ipv6/) | Enable IPv6 on a Droplet |
| [`doctl compute droplet-action enable-private-networking`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/enable-private-networking/) | Enable private networking on a Droplet |
| [`doctl compute droplet-action get`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/get/) | Retrieve a specific Droplet action |
| [`doctl compute droplet-action password-reset`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/password-reset/) | Reset the root password for a Droplet |
| [`doctl compute droplet-action power-cycle`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/power-cycle/) | Powercycle a Droplet |
| [`doctl compute droplet-action power-off`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/power-off/) | Power off a Droplet |
| [`doctl compute droplet-action power-on`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/power-on/) | Power on a Droplet |
| [`doctl compute droplet-action reboot`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/reboot/) | Reboot a Droplet |
| [`doctl compute droplet-action rebuild`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/rebuild/) | Rebuild a Droplet |
| [`doctl compute droplet-action rename`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/rename/) | Rename a Droplet |
| [`doctl compute droplet-action resize`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/resize/) | Resize a Droplet |
| [`doctl compute droplet-action restore`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/restore/) | Restore a Droplet from a backup |
| [`doctl compute droplet-action shutdown`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/shutdown/) | Shut down a Droplet |
| [`doctl compute droplet-action snapshot`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-action/snapshot/) | Take a Droplet snapshot |
| [`doctl compute droplet-autoscale`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/) | Display commands to manage Droplet autoscale pools |
| [`doctl compute droplet-autoscale create`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/create/) | Create a new Droplet autoscale pool |
| [`doctl compute droplet-autoscale delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/delete/) | Delete an active Droplet autoscale pool |
| [`doctl compute droplet-autoscale delete-dangerous`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/delete-dangerous/) | Delete an active Droplet autoscale pool and all its members |
| [`doctl compute droplet-autoscale get`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/get/) | Get an active Droplet autoscale pool |
| [`doctl compute droplet-autoscale list`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/list/) | List all active Droplet autoscale pools |
| [`doctl compute droplet-autoscale list-history`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/list-history/) | List all history events for a Droplet autoscale pool |
| [`doctl compute droplet-autoscale list-members`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/list-members/) | List all members of a Droplet autoscale pool |
| [`doctl compute droplet-autoscale update`](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet-autoscale/update/) | Update an active Droplet autoscale pool |
| [`doctl compute firewall`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/) | Display commands to manage cloud firewalls |
| [`doctl compute firewall add-droplets`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/add-droplets/) | Add Droplets to a cloud firewall |
| [`doctl compute firewall add-rules`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/add-rules/) | Add inbound or outbound rules to a cloud firewall |
| [`doctl compute firewall add-tags`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/add-tags/) | Add tags to a cloud firewall |
| [`doctl compute firewall create`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/create/) | Create a new cloud firewall |
| [`doctl compute firewall delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/delete/) | Permanently delete a cloud firewall |
| [`doctl compute firewall get`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/get/) | Retrieve information about a cloud firewall |
| [`doctl compute firewall list`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/list/) | List the cloud firewalls on your account |
| [`doctl compute firewall list-by-droplet`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/list-by-droplet/) | List firewalls by Droplet |
| [`doctl compute firewall remove-droplets`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/remove-droplets/) | Remove Droplets from a cloud firewall |
| [`doctl compute firewall remove-rules`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/remove-rules/) | Remove inbound or outbound rules from a cloud firewall |
| [`doctl compute firewall remove-tags`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/remove-tags/) | Remove tags from a cloud firewall |
| [`doctl compute firewall update`](https://docs.digitalocean.com/reference/doctl/reference/compute/firewall/update/) | Update a cloud firewall’s configuration |
| [`doctl compute image`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/) | Display commands to manage images |
| [`doctl compute image create`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/create/) | Create custom image |
| [`doctl compute image delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/delete/) | Permanently delete an image from your account |
| [`doctl compute image get`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/get/) | Retrieve information about an image |
| [`doctl compute image list`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list/) | List images on your account |
| [`doctl compute image list-application`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-application/) | List available One-Click Apps |
| [`doctl compute image list-distribution`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-distribution/) | List available distribution images |
| [`doctl compute image list-user`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/list-user/) | List user-created images |
| [`doctl compute image update`](https://docs.digitalocean.com/reference/doctl/reference/compute/image/update/) | Update an image’s metadata |
| [`doctl compute image-action`](https://docs.digitalocean.com/reference/doctl/reference/compute/image-action/) | Display commands to perform actions on images |
| [`doctl compute image-action get`](https://docs.digitalocean.com/reference/doctl/reference/compute/image-action/get/) | Retrieve the status of an image action |
| [`doctl compute image-action transfer`](https://docs.digitalocean.com/reference/doctl/reference/compute/image-action/transfer/) | Transfer an image to another datacenter region |
| [`doctl compute load-balancer`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/) | Display commands to manage load balancers |
| [`doctl compute load-balancer add-droplets`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/add-droplets/) | Add Droplets to a load balancer |
| [`doctl compute load-balancer add-forwarding-rules`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/add-forwarding-rules/) | Add forwarding rules to a load balancer |
| [`doctl compute load-balancer create`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/create/) | Create a new load balancer |
| [`doctl compute load-balancer delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/delete/) | Permanently delete a load balancer |
| [`doctl compute load-balancer get`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/get/) | Retrieve a load balancer |
| [`doctl compute load-balancer list`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/list/) | List load balancers |
| [`doctl compute load-balancer purge-cache`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/purge-cache/) | Purges CDN cache for a global load balancer |
| [`doctl compute load-balancer remove-droplets`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/remove-droplets/) | Remove Droplets from a load balancer |
| [`doctl compute load-balancer remove-forwarding-rules`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/remove-forwarding-rules/) | Remove forwarding rules from a load balancer |
| [`doctl compute load-balancer update`](https://docs.digitalocean.com/reference/doctl/reference/compute/load-balancer/update/) | Update a load balancer’s configuration |
| [`doctl compute region`](https://docs.digitalocean.com/reference/doctl/reference/compute/region/) | Display commands to list datacenter regions |
| [`doctl compute region list`](https://docs.digitalocean.com/reference/doctl/reference/compute/region/list/) | Retrieves a list of datacenter regions |
| [`doctl compute reserved-ip`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/) | Display commands to manage reserved IP addresses |
| [`doctl compute reserved-ip create`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/create/) | Create a new reserved IP address |
| [`doctl compute reserved-ip delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/delete/) | Permanently delete a reserved IP address |
| [`doctl compute reserved-ip get`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/get/) | Retrieve information about a reserved IP address |
| [`doctl compute reserved-ip list`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/list/) | List all reserved IP addresses on your account |
| [`doctl compute reserved-ip-action`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/) | Display commands to associate reserved IP addresses with Droplets |
| [`doctl compute reserved-ip-action assign`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/assign/) | Assign a reserved IP address to a Droplet |
| [`doctl compute reserved-ip-action get`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/get/) | Retrieve the status of a reserved IP action |
| [`doctl compute reserved-ip-action unassign`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip-action/unassign/) | Unassign a reserved IP address from a Droplet |
| [`doctl compute reserved-ipv6`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/) | Display commands to manage reserved IPv6 addresses |
| [`doctl compute reserved-ipv6 assign`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/assign/) | Assign a reserved IPv6 address to a Droplet |
| [`doctl compute reserved-ipv6 create`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/create/) | Create a new reserved IPv6 address |
| [`doctl compute reserved-ipv6 delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/delete/) | Permanently delete a reserved IPv6 address |
| [`doctl compute reserved-ipv6 get`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/get/) | Retrieve information about a reserved IPv6 address |
| [`doctl compute reserved-ipv6 list`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/list/) | List all reserved IPv6 addresses on your account |
| [`doctl compute reserved-ipv6 unassign`](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ipv6/unassign/) | Unassign a reserved IPv6 address from a Droplet |
| [`doctl compute size`](https://docs.digitalocean.com/reference/doctl/reference/compute/size/) | List available Droplet sizes |
| [`doctl compute size list`](https://docs.digitalocean.com/reference/doctl/reference/compute/size/list/) | List available Droplet sizes |
| [`doctl compute snapshot`](https://docs.digitalocean.com/reference/doctl/reference/compute/snapshot/) | Access and manage snapshots |
| [`doctl compute snapshot delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/snapshot/delete/) | Delete a snapshot of a Droplet or volume |
| [`doctl compute snapshot get`](https://docs.digitalocean.com/reference/doctl/reference/compute/snapshot/get/) | Retrieve a Droplet or volume snapshot |
| [`doctl compute snapshot list`](https://docs.digitalocean.com/reference/doctl/reference/compute/snapshot/list/) | List Droplet and volume snapshots |
| [`doctl compute ssh`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh/) | Access a Droplet using SSH |
| [`doctl compute ssh-key`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/) | Display commands to manage SSH keys on your account |
| [`doctl compute ssh-key create`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/create/) | Create a new SSH key on your account |
| [`doctl compute ssh-key delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/delete/) | Permanently delete an SSH key from your account |
| [`doctl compute ssh-key get`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/get/) | Retrieve information about an SSH key on your account |
| [`doctl compute ssh-key import`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/import/) | Import an SSH key from your computer to your account |
| [`doctl compute ssh-key list`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/list/) | List all SSH keys on your account |
| [`doctl compute ssh-key update`](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/update/) | Update an SSH key’s name |
| [`doctl compute tag`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/) | Display commands to manage tags |
| [`doctl compute tag apply`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/apply/) | Apply a tag to resources |
| [`doctl compute tag create`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/create/) | Create a tag |
| [`doctl compute tag delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/delete/) | Delete a tag |
| [`doctl compute tag get`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/get/) | Retrieve information about a tag |
| [`doctl compute tag list`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/list/) | List all tags |
| [`doctl compute tag remove`](https://docs.digitalocean.com/reference/doctl/reference/compute/tag/remove/) | Remove a tag from resources |
| [`doctl compute volume`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/) | Display commands to manage block storage volumes |
| [`doctl compute volume create`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/create/) | Create a block storage volume |
| [`doctl compute volume delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/delete/) | Delete a block storage volume |
| [`doctl compute volume get`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/get/) | Retrieve an existing block storage volume |
| [`doctl compute volume list`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/list/) | List block storage volumes by ID |
| [`doctl compute volume snapshot`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume/snapshot/) | Create a block storage volume snapshot |
| [`doctl compute volume-action`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/) | Display commands to perform actions on a volume |
| [`doctl compute volume-action attach`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/attach/) | Attach a volume to a Droplet |
| [`doctl compute volume-action detach`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/detach/) | Detach a volume from a Droplet |
| [`doctl compute volume-action detach-by-droplet-id`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/detach-by-droplet-id/) | (Deprecated) Detach a volume. Use `detach` instead. |
| [`doctl compute volume-action get`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/get/) | Retrieve the status of a volume action |
| [`doctl compute volume-action list`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/list/) | Retrieve a list of actions taken on a volume |
| [`doctl compute volume-action resize`](https://docs.digitalocean.com/reference/doctl/reference/compute/volume-action/resize/) | Resize the disk of a volume |
| [`doctl compute vpc-nat-gateway`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/) | Display commands to manage VPC NAT Gateways |
| [`doctl compute vpc-nat-gateway create`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/create/) | Create a new VPC NAT Gateway |
| [`doctl compute vpc-nat-gateway delete`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/delete/) | Delete a VPC NAT Gateway |
| [`doctl compute vpc-nat-gateway get`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/get/) | Get a VPC NAT Gateway |
| [`doctl compute vpc-nat-gateway list`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/list/) | List all active VPC NAT Gateways |
| [`doctl compute vpc-nat-gateway update`](https://docs.digitalocean.com/reference/doctl/reference/compute/vpc-nat-gateway/update/) | Update an active VPC NAT Gateway |

### doctl databases

| Command | Description |
| --- | --- |
| [`doctl databases`](https://docs.digitalocean.com/reference/doctl/reference/databases/) | Display commands that manage databases |
| [`doctl databases backups`](https://docs.digitalocean.com/reference/doctl/reference/databases/backups/) | List database cluster backups |
| [`doctl databases configuration`](https://docs.digitalocean.com/reference/doctl/reference/databases/configuration/) | View the configuration of a database cluster given its ID and Engine |
| [`doctl databases configuration get`](https://docs.digitalocean.com/reference/doctl/reference/databases/configuration/get/) | Get a database cluster’s configuration |
| [`doctl databases configuration update`](https://docs.digitalocean.com/reference/doctl/reference/databases/configuration/update/) | Update a database cluster’s configuration |
| [`doctl databases connection`](https://docs.digitalocean.com/reference/doctl/reference/databases/connection/) | Retrieve connection details for a database cluster |
| [`doctl databases create`](https://docs.digitalocean.com/reference/doctl/reference/databases/create/) | Create a database cluster |
| [`doctl databases db`](https://docs.digitalocean.com/reference/doctl/reference/databases/db/) | Display commands for managing individual databases within a cluster |
| [`doctl databases db create`](https://docs.digitalocean.com/reference/doctl/reference/databases/db/create/) | Create a database within a cluster |
| [`doctl databases db delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/db/delete/) | Delete the specified database from the cluster |
| [`doctl databases db get`](https://docs.digitalocean.com/reference/doctl/reference/databases/db/get/) | Retrieve the name of a database within a cluster |
| [`doctl databases db list`](https://docs.digitalocean.com/reference/doctl/reference/databases/db/list/) | Retrieve a list of databases within a cluster |
| [`doctl databases delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/delete/) | Delete a database cluster |
| [`doctl databases events`](https://docs.digitalocean.com/reference/doctl/reference/databases/events/) | Display commands for listing database cluster events |
| [`doctl databases events list`](https://docs.digitalocean.com/reference/doctl/reference/databases/events/list/) | List your database cluster events |
| [`doctl databases firewalls`](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/) | Display commands to manage firewall rules (called`trusted sources` in the control panel) for database clusters |
| [`doctl databases firewalls append`](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/append/) | Add a database firewall rule to a given database |
| [`doctl databases firewalls list`](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/list/) | Retrieve a list of firewall rules for a given database |
| [`doctl databases firewalls remove`](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/remove/) | Remove a firewall rule for a given database |
| [`doctl databases firewalls replace`](https://docs.digitalocean.com/reference/doctl/reference/databases/firewalls/replace/) | Replaces the firewall rules for a given database. The rules passed to the `--rules` flag replace the firewall rules previously assigned to the database, |
| [`doctl databases fork`](https://docs.digitalocean.com/reference/doctl/reference/databases/fork/) | Create a new database cluster by forking an existing database cluster. |
| [`doctl databases get`](https://docs.digitalocean.com/reference/doctl/reference/databases/get/) | Get details for a database cluster |
| [`doctl databases get-ca`](https://docs.digitalocean.com/reference/doctl/reference/databases/get-ca/) | Provides the CA certificate for a DigitalOcean database |
| [`doctl databases indexes`](https://docs.digitalocean.com/reference/doctl/reference/databases/indexes/) | Display commands to manage indexes for opensearch clusters |
| [`doctl databases indexes delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/indexes/delete/) | Deletes an opensearch index by index name |
| [`doctl databases indexes list`](https://docs.digitalocean.com/reference/doctl/reference/databases/indexes/list/) | Retrieve a list of indexes for a given opensearch cluster |
| [`doctl databases list`](https://docs.digitalocean.com/reference/doctl/reference/databases/list/) | List your database clusters |
| [`doctl databases maintenance-window`](https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window/) | Display commands for scheduling automatic maintenance on your database cluster |
| [`doctl databases maintenance-window get`](https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window/get/) | Retrieve details about a database cluster’s maintenance windows |
| [`doctl databases maintenance-window install`](https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window/install/) | Start installation of updates immediately |
| [`doctl databases maintenance-window update`](https://docs.digitalocean.com/reference/doctl/reference/databases/maintenance-window/update/) | Update the maintenance window for a database cluster |
| [`doctl databases migrate`](https://docs.digitalocean.com/reference/doctl/reference/databases/migrate/) | Migrate a database cluster to a new region |
| [`doctl databases options`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/) | Display available database options (regions, version, layouts, etc.) for all available database engines |
| [`doctl databases options engines`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/engines/) | Retrieves a list of the available database engines |
| [`doctl databases options regions`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/regions/) | Retrieves a list of the available regions for a given database engine |
| [`doctl databases options slugs`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/slugs/) | Retrieves a list of the available slugs for a given database engine |
| [`doctl databases options versions`](https://docs.digitalocean.com/reference/doctl/reference/databases/options/versions/) | Retrieves a list of the available versions for a given database engine |
| [`doctl databases pool`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/) | Display commands for managing connection pools |
| [`doctl databases pool create`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/create/) | Create a connection pool for a database cluster |
| [`doctl databases pool delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/delete/) | Delete a connection pool for a database |
| [`doctl databases pool get`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/get/) | Retrieve information about a database connection pool |
| [`doctl databases pool list`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/list/) | List connection pools for a database cluster |
| [`doctl databases pool update`](https://docs.digitalocean.com/reference/doctl/reference/databases/pool/update/) | Update a connection pool for a database |
| [`doctl databases replica`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/) | Display commands to manage read-only database replicas |
| [`doctl databases replica connection`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/connection/) | Retrieve information for connecting to a read-only database replica |
| [`doctl databases replica create`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/create/) | Create a read-only database replica |
| [`doctl databases replica delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/delete/) | Delete a read-only database replica |
| [`doctl databases replica get`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/get/) | Retrieve information about a read-only database replica |
| [`doctl databases replica list`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/list/) | Retrieve list of read-only database replicas |
| [`doctl databases replica promote`](https://docs.digitalocean.com/reference/doctl/reference/databases/replica/promote/) | Promote a read-only database replica to become a primary cluster |
| [`doctl databases resize`](https://docs.digitalocean.com/reference/doctl/reference/databases/resize/) | Resize a database cluster |
| [`doctl databases sql-mode`](https://docs.digitalocean.com/reference/doctl/reference/databases/sql-mode/) | Display commands to configure a MySQL database cluster’s SQL modes |
| [`doctl databases sql-mode get`](https://docs.digitalocean.com/reference/doctl/reference/databases/sql-mode/get/) | Get a MySQL database cluster’s SQL modes |
| [`doctl databases sql-mode set`](https://docs.digitalocean.com/reference/doctl/reference/databases/sql-mode/set/) | Set a MySQL database cluster’s SQL modes |
| [`doctl databases topics`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/) | Display commands to manage topics for kafka database clusters |
| [`doctl databases topics create`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/create/) | Creates a topic for a given kafka database |
| [`doctl databases topics delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/delete/) | Deletes a kafka topic by topic name |
| [`doctl databases topics get`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/get/) | Retrieve the configuration for a given kafka topic |
| [`doctl databases topics list`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/list/) | Retrieve a list of topics for a given kafka database |
| [`doctl databases topics partitions`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/partitions/) | Retrieve the partitions for a given kafka topic |
| [`doctl databases topics update`](https://docs.digitalocean.com/reference/doctl/reference/databases/topics/update/) | Updates a topic for a given kafka database |
| [`doctl databases user`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/) | Display commands for managing database users |
| [`doctl databases user create`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/create/) | Create a database user |
| [`doctl databases user delete`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/delete/) | Delete a database user |
| [`doctl databases user get`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/get/) | Retrieve details about a database user |
| [`doctl databases user list`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/list/) | Retrieve list of database users |
| [`doctl databases user reset`](https://docs.digitalocean.com/reference/doctl/reference/databases/user/reset/) | Resets a user’s auth |

### doctl genai

| Command | Description |
| --- | --- |
| [`doctl genai`](https://docs.digitalocean.com/reference/doctl/reference/genai/) | Manage GenAI resources |
| [`doctl genai agent`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/) | Display commands for working with GenAI agents |
| [`doctl genai agent apikeys`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/) | Display commands for working with API keys of GenAI agents |
| [`doctl genai agent apikeys create`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/create/) | Creates an api-key for your GenAI agent |
| [`doctl genai agent apikeys delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/delete/) | Deletes an api-key for an agent |
| [`doctl genai agent apikeys list`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/list/) | List API Keys for an agent |
| [`doctl genai agent apikeys regenerate`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/regenerate/) | Regenerates an api-key for an agent |
| [`doctl genai agent apikeys update`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/apikeys/update/) | Updates the name of an apikey of a GenAI agent |
| [`doctl genai agent create`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/create/) | Creates a GenAI agent |
| [`doctl genai agent delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/delete/) | Deletes a GenAI agent |
| [`doctl genai agent functionroute`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute/) | Display commands that manages function routes for GenAI Agents. |
| [`doctl genai agent functionroute create`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute/create/) | Creates a function route |
| [`doctl genai agent functionroute delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute/delete/) | Delete a function route |
| [`doctl genai agent functionroute update`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/functionroute/update/) | Updates a function route |
| [`doctl genai agent get`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/get/) | Retrieve information about an agent |
| [`doctl genai agent list`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list/) | List GenAI agents |
| [`doctl genai agent list-versions`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/list-versions/) | List versions for an agent |
| [`doctl genai agent route`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route/) | Display commands for working with GenAI agent routes |
| [`doctl genai agent route add`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route/add/) | Adds an agent route to an agent |
| [`doctl genai agent route delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route/delete/) | Deletes an agent route to an agent |
| [`doctl genai agent route update`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/route/update/) | Updates an agent route to an agent |
| [`doctl genai agent update`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update/) | Updates a GenAI agent name and configuration |
| [`doctl genai agent update-visibility`](https://docs.digitalocean.com/reference/doctl/reference/genai/agent/update-visibility/) | Update visibility of a GenAI agent |
| [`doctl genai knowledge-base`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/) | Display commands that manage DigitalOcean Agent Knowledge Bases. |
| [`doctl genai knowledge-base add-datasource`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/add-datasource/) | Add one datasource for knowledge base |
| [`doctl genai knowledge-base attach`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/attach/) | Attach a knowledge base to an agent |
| [`doctl genai knowledge-base create`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/create/) | Creates a knowledge base |
| [`doctl genai knowledge-base delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/delete/) | Deletes a knowledge base |
| [`doctl genai knowledge-base delete-datasource`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/delete-datasource/) | Delete a datasource for knowledge base |
| [`doctl genai knowledge-base detach`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/detach/) | Detaches a knowledge base from an agent |
| [`doctl genai knowledge-base get`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/get/) | Retrieves a Knowledge Base by its uuid |
| [`doctl genai knowledge-base list`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/list/) | List all knowledge bases for agents |
| [`doctl genai knowledge-base list-datasources`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/list-datasources/) | List all datasource for knowledge base |
| [`doctl genai knowledge-base update`](https://docs.digitalocean.com/reference/doctl/reference/genai/knowledge-base/update/) | Update a knowledge base |
| [`doctl genai list-models`](https://docs.digitalocean.com/reference/doctl/reference/genai/list-models/) | List GenAI models |
| [`doctl genai list-regions`](https://docs.digitalocean.com/reference/doctl/reference/genai/list-regions/) | List GenAI regions |
| [`doctl genai openai-key`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/) | Display commands that manage DigitalOcean OpenAI API Keys. |
| [`doctl genai openai-key create`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/create/) | Creates an OpenAI API Key |
| [`doctl genai openai-key delete`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/delete/) | Deletes an OpenAI API Key by its UUID |
| [`doctl genai openai-key get`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/get/) | Retrieves an OpenAI API Key by its UUID |
| [`doctl genai openai-key get-agents`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/get-agents/) | Lists agents using an OpenAI API Key |
| [`doctl genai openai-key list`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/list/) | Lists all OpenAI API Keys |
| [`doctl genai openai-key update`](https://docs.digitalocean.com/reference/doctl/reference/genai/openai-key/update/) | Updates an OpenAI API Key by its UUID |

### doctl invoice

| Command | Description |
| --- | --- |
| [`doctl invoice`](https://docs.digitalocean.com/reference/doctl/reference/invoice/) | Display commands for retrieving invoices for your account |
| [`doctl invoice csv`](https://docs.digitalocean.com/reference/doctl/reference/invoice/csv/) | Downloads a CSV file of a specific invoice to you local machine |
| [`doctl invoice get`](https://docs.digitalocean.com/reference/doctl/reference/invoice/get/) | Retrieve a list of all the items on an invoice |
| [`doctl invoice list`](https://docs.digitalocean.com/reference/doctl/reference/invoice/list/) | List all of the invoices for your account |
| [`doctl invoice pdf`](https://docs.digitalocean.com/reference/doctl/reference/invoice/pdf/) | Downloads a PDF file of a specific invoice to your local machine |
| [`doctl invoice summary`](https://docs.digitalocean.com/reference/doctl/reference/invoice/summary/) | Get a summary of an invoice |

### doctl kubernetes

| Command | Description |
| --- | --- |
| [`doctl kubernetes`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/) | Displays commands to manage Kubernetes clusters and configurations |
| [`doctl kubernetes 1-click`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/1-click/) | Display commands that pertain to kubernetes 1-click applications |
| [`doctl kubernetes 1-click install`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/1-click/install/) | Install 1-click apps on a Kubernetes cluster |
| [`doctl kubernetes 1-click list`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/1-click/list/) | Retrieve a list of Kubernetes 1-Click applications |
| [`doctl kubernetes cluster`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/) | Display commands for managing Kubernetes clusters |
| [`doctl kubernetes cluster create`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/create/) | Create a Kubernetes cluster |
| [`doctl kubernetes cluster delete`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete/) | Delete Kubernetes clusters |
| [`doctl kubernetes cluster delete-selective`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/delete-selective/) | Delete a Kubernetes cluster and selectively delete resources associated with it |
| [`doctl kubernetes cluster get`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/get/) | Retrieve details about a Kubernetes cluster |
| [`doctl kubernetes cluster get-upgrades`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/get-upgrades/) | Retrieve a list of available Kubernetes version upgrades |
| [`doctl kubernetes cluster kubeconfig`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/kubeconfig/) | Display commands for managing your local kubeconfig |
| [`doctl kubernetes cluster kubeconfig remove`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/kubeconfig/remove/) | Remove a cluster’s credentials from your local kubeconfig |
| [`doctl kubernetes cluster kubeconfig save`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/kubeconfig/save/) | Save a cluster’s credentials to your local kubeconfig |
| [`doctl kubernetes cluster kubeconfig show`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/kubeconfig/show/) | Show a Kubernetes cluster’s kubeconfig YAML |
| [`doctl kubernetes cluster list`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/list/) | Retrieve the list of Kubernetes clusters for your account |
| [`doctl kubernetes cluster list-associated-resources`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/list-associated-resources/) | Retrieve DigitalOcean resources associated with a Kubernetes cluster |
| [`doctl kubernetes cluster node-pool`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/) | Display commands for managing node pools |
| [`doctl kubernetes cluster node-pool create`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/create/) | Create a new node pool for a cluster |
| [`doctl kubernetes cluster node-pool delete`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/delete/) | Delete a node pool |
| [`doctl kubernetes cluster node-pool delete-node`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/delete-node/) | Delete a node |
| [`doctl kubernetes cluster node-pool get`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/get/) | Retrieve information about a cluster’s node pool |
| [`doctl kubernetes cluster node-pool list`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/list/) | List a cluster’s node pools |
| [`doctl kubernetes cluster node-pool replace-node`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/replace-node/) | Replace node with a new one |
| [`doctl kubernetes cluster node-pool update`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/node-pool/update/) | Update an existing node pool in a cluster |
| [`doctl kubernetes cluster registry`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/registry/) | Display commands for integrating clusters with docr |
| [`doctl kubernetes cluster registry add`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/registry/add/) | Add container registry support to Kubernetes clusters |
| [`doctl kubernetes cluster registry remove`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/registry/remove/) | Remove container registry support from Kubernetes clusters |
| [`doctl kubernetes cluster update`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/update/) | Update a Kubernetes cluster’s configuration |
| [`doctl kubernetes cluster upgrade`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/cluster/upgrade/) | Upgrades a cluster to a new Kubernetes version |
| [`doctl kubernetes options`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/options/) | List possible option values for use inside Kubernetes commands |
| [`doctl kubernetes options regions`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/options/regions/) | Lists regions that support DigitalOcean Kubernetes clusters |
| [`doctl kubernetes options sizes`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/options/sizes/) | Lists machine sizes that you can use in a DigitalOcean Kubernetes cluster |
| [`doctl kubernetes options versions`](https://docs.digitalocean.com/reference/doctl/reference/kubernetes/options/versions/) | Lists Kubernetes versions that you can use with DigitalOcean clusters |

### doctl monitoring

| Command | Description |
| --- | --- |
| [`doctl monitoring`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/) | Display commands to manage monitoring |
| [`doctl monitoring alert`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/) | Display commands for managing alert policies |
| [`doctl monitoring alert create`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/create/) | Create an alert policy |
| [`doctl monitoring alert delete`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/delete/) | Delete an alert policy |
| [`doctl monitoring alert get`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/get/) | Retrieve information about an alert policy |
| [`doctl monitoring alert list`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/list/) | List all alert policies |
| [`doctl monitoring alert update`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/alert/update/) | Update an alert policy |
| [`doctl monitoring uptime`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/) | Display commands to manage uptime checks |
| [`doctl monitoring uptime alert`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/) | Display commands to manage uptime alerts |
| [`doctl monitoring uptime alert create`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/create/) | Create an uptime alert |
| [`doctl monitoring uptime alert delete`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/delete/) | Delete an uptime alert |
| [`doctl monitoring uptime alert get`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/get/) | Get uptime alert |
| [`doctl monitoring uptime alert list`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/list/) | List uptime alerts |
| [`doctl monitoring uptime alert update`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/alert/update/) | Update an uptime alert |
| [`doctl monitoring uptime create`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/create/) | Create an uptime check |
| [`doctl monitoring uptime delete`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/delete/) | Delete an uptime check |
| [`doctl monitoring uptime get`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/get/) | Get an uptime check |
| [`doctl monitoring uptime list`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/list/) | List uptime checks |
| [`doctl monitoring uptime update`](https://docs.digitalocean.com/reference/doctl/reference/monitoring/uptime/update/) | Update an uptime check |

### doctl network

| Command | Description |
| --- | --- |
| [`doctl network`](https://docs.digitalocean.com/reference/doctl/reference/network/) | Display commands that manage network products |
| [`doctl network attachment`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/) | Display commands that manage Partner Attachment |
| [`doctl network attachment create`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/create/) | Create a Partner Attachment |
| [`doctl network attachment delete`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/delete/) | Deletes a Partner Attachment |
| [`doctl network attachment get`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/get/) | Retrieves a Partner Attachment |
| [`doctl network attachment get-bgp-auth-key`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/get-bgp-auth-key/) | Retrieves a BGP Auth key of Partner Attachment |
| [`doctl network attachment get-service-key`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/get-service-key/) | Retrieves a Service key of Partner Attachment |
| [`doctl network attachment list`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/list/) | List Partner Attachment |
| [`doctl network attachment list-routes`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/list-routes/) | List Partner Attachment Routes |
| [`doctl network attachment regenerate-service-key`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/regenerate-service-key/) | Regenerates a Service key of Partner Attachment |
| [`doctl network attachment update`](https://docs.digitalocean.com/reference/doctl/reference/network/attachment/update/) | Update a Partner Attachments name and configuration |
| [`doctl network byoip-prefix`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/) | Display commands to manage BYOIP Prefixes |
| [`doctl network byoip-prefix create`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/create/) | Create a new BYOIP Prefix |
| [`doctl network byoip-prefix delete`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/delete/) | Permanently delete a BYOIP Prefix |
| [`doctl network byoip-prefix get`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/get/) | Retrieve information about a byoip prefix |
| [`doctl network byoip-prefix list`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/list/) | List all BYOIP Prefixes on your account |
| [`doctl network byoip-prefix resource`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/resource/) | List all the Resource for a BYOIP Prefix |
| [`doctl network byoip-prefix update`](https://docs.digitalocean.com/reference/doctl/reference/network/byoip-prefix/update/) | Update a BYOIP Prefix |

### doctl nfs

| Command | Description |
| --- | --- |
| [`doctl nfs`](https://docs.digitalocean.com/reference/doctl/reference/nfs/) | Display commands to manage network file storage |
| [`doctl nfs create`](https://docs.digitalocean.com/reference/doctl/reference/nfs/create/) | Create an NFS share |
| [`doctl nfs delete`](https://docs.digitalocean.com/reference/doctl/reference/nfs/delete/) | Delete an NFS share by ID |
| [`doctl nfs get`](https://docs.digitalocean.com/reference/doctl/reference/nfs/get/) | Get an NFS share by ID |
| [`doctl nfs list`](https://docs.digitalocean.com/reference/doctl/reference/nfs/list/) | List all NFS shares by region |
| [`doctl nfs resize`](https://docs.digitalocean.com/reference/doctl/reference/nfs/resize/) | Resize an NFS share |
| [`doctl nfs snapshot`](https://docs.digitalocean.com/reference/doctl/reference/nfs/snapshot/) | Display commands for NFS share’s snapshots |
| [`doctl nfs snapshot create`](https://docs.digitalocean.com/reference/doctl/reference/nfs/snapshot/create/) | Creates a snapshot of the NFS share |
| [`doctl nfs snapshot delete`](https://docs.digitalocean.com/reference/doctl/reference/nfs/snapshot/delete/) | Delete an NFS share by ID |
| [`doctl nfs snapshot get`](https://docs.digitalocean.com/reference/doctl/reference/nfs/snapshot/get/) | Get an NFS snapshot by ID |
| [`doctl nfs snapshot list`](https://docs.digitalocean.com/reference/doctl/reference/nfs/snapshot/list/) | List all NFS snapshots by region |

### doctl projects

| Command | Description |
| --- | --- |
| [`doctl projects`](https://docs.digitalocean.com/reference/doctl/reference/projects/) | Manage projects and assign resources to them |
| [`doctl projects create`](https://docs.digitalocean.com/reference/doctl/reference/projects/create/) | Create a new project |
| [`doctl projects delete`](https://docs.digitalocean.com/reference/doctl/reference/projects/delete/) | Delete the specified project |
| [`doctl projects get`](https://docs.digitalocean.com/reference/doctl/reference/projects/get/) | Retrieve details for a specific project |
| [`doctl projects list`](https://docs.digitalocean.com/reference/doctl/reference/projects/list/) | List existing projects |
| [`doctl projects resources`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/) | Manage resources assigned to a project |
| [`doctl projects resources assign`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/assign/) | Assign one or more resources to a project |
| [`doctl projects resources get`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/get/) | Retrieve a resource by its URN |
| [`doctl projects resources list`](https://docs.digitalocean.com/reference/doctl/reference/projects/resources/list/) | List resources assigned to a project |
| [`doctl projects update`](https://docs.digitalocean.com/reference/doctl/reference/projects/update/) | Update an existing project |

### doctl registries

| Command | Description |
| --- | --- |
| [`doctl registries`](https://docs.digitalocean.com/reference/doctl/reference/registries/) | Display commands for working with multiple container registries |
| [`doctl registries create`](https://docs.digitalocean.com/reference/doctl/reference/registries/create/) | Create a private container registry |
| [`doctl registries delete`](https://docs.digitalocean.com/reference/doctl/reference/registries/delete/) | Delete a registry |
| [`doctl registries docker-config`](https://docs.digitalocean.com/reference/doctl/reference/registries/docker-config/) | Generate a Docker auth configuration for a registry |
| [`doctl registries garbage-collection`](https://docs.digitalocean.com/reference/doctl/reference/registries/garbage-collection/) | Display commands for garbage collection for multiple container registries |
| [`doctl registries garbage-collection cancel`](https://docs.digitalocean.com/reference/doctl/reference/registries/garbage-collection/cancel/) | Cancel the currently-active garbage collection for a container registry |
| [`doctl registries garbage-collection get-active`](https://docs.digitalocean.com/reference/doctl/reference/registries/garbage-collection/get-active/) | Retrieve information about the currently-active garbage collection for a container registry |
| [`doctl registries garbage-collection list`](https://docs.digitalocean.com/reference/doctl/reference/registries/garbage-collection/list/) | Retrieve information about past garbage collections for a container registry |
| [`doctl registries garbage-collection start`](https://docs.digitalocean.com/reference/doctl/reference/registries/garbage-collection/start/) | Start garbage collection for a container registry |
| [`doctl registries get`](https://docs.digitalocean.com/reference/doctl/reference/registries/get/) | Get information about a registry |
| [`doctl registries kubernetes-manifest`](https://docs.digitalocean.com/reference/doctl/reference/registries/kubernetes-manifest/) | Generate a Kubernetes secret manifest for a registry. |
| [`doctl registries list`](https://docs.digitalocean.com/reference/doctl/reference/registries/list/) | List all registries in your account |
| [`doctl registries login`](https://docs.digitalocean.com/reference/doctl/reference/registries/login/) | Log in Docker to a container registry |
| [`doctl registries logout`](https://docs.digitalocean.com/reference/doctl/reference/registries/logout/) | Log out Docker from a container registry |
| [`doctl registries options`](https://docs.digitalocean.com/reference/doctl/reference/registries/options/) | List available container registry options for multiple registries |
| [`doctl registries options available-regions`](https://docs.digitalocean.com/reference/doctl/reference/registries/options/available-regions/) | Lists available container registry regions |
| [`doctl registries options subscription-tiers`](https://docs.digitalocean.com/reference/doctl/reference/registries/options/subscription-tiers/) | Lists available container registry subscription tiers |
| [`doctl registries repository`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/) | Display commands for working with repositories in multiple container registries |
| [`doctl registries repository delete-manifest`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/delete-manifest/) | Delete one or more container repository manifests by digest |
| [`doctl registries repository delete-tag`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/delete-tag/) | Delete one or more container repository tags |
| [`doctl registries repository list-manifests`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/list-manifests/) | List manifests for a repository in a container registry |
| [`doctl registries repository list-tags`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/list-tags/) | List tags for a repository in a container registry |
| [`doctl registries repository list-v2`](https://docs.digitalocean.com/reference/doctl/reference/registries/repository/list-v2/) | List repositories for a container registry |

### doctl registry

| Command | Description |
| --- | --- |
| [`doctl registry`](https://docs.digitalocean.com/reference/doctl/reference/registry/) | Display commands for working with container registries |
| [`doctl registry create`](https://docs.digitalocean.com/reference/doctl/reference/registry/create/) | Create a private container registry |
| [`doctl registry delete`](https://docs.digitalocean.com/reference/doctl/reference/registry/delete/) | Delete a container registry |
| [`doctl registry docker-config`](https://docs.digitalocean.com/reference/doctl/reference/registry/docker-config/) | Generate a Docker auth configuration for a registry |
| [`doctl registry garbage-collection`](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/) | Display commands for garbage collection for a container registry |
| [`doctl registry garbage-collection cancel`](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/cancel/) | Cancel the currently-active garbage collection for a container registry |
| [`doctl registry garbage-collection get-active`](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/get-active/) | Retrieve information about the currently-active garbage collection for a container registry |
| [`doctl registry garbage-collection list`](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/list/) | Retrieve information about past garbage collections for a container registry |
| [`doctl registry garbage-collection start`](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/start/) | Start garbage collection for a container registry |
| [`doctl registry get`](https://docs.digitalocean.com/reference/doctl/reference/registry/get/) | Retrieve details about a container registry |
| [`doctl registry kubernetes-manifest`](https://docs.digitalocean.com/reference/doctl/reference/registry/kubernetes-manifest/) | Generate a Kubernetes secret manifest for a registry. |
| [`doctl registry login`](https://docs.digitalocean.com/reference/doctl/reference/registry/login/) | Log in Docker to a container registry |
| [`doctl registry logout`](https://docs.digitalocean.com/reference/doctl/reference/registry/logout/) | Log out Docker from a container registry |
| [`doctl registry options`](https://docs.digitalocean.com/reference/doctl/reference/registry/options/) | List available container registry options |
| [`doctl registry options available-regions`](https://docs.digitalocean.com/reference/doctl/reference/registry/options/available-regions/) | Lists available container registry regions |
| [`doctl registry options subscription-tiers`](https://docs.digitalocean.com/reference/doctl/reference/registry/options/subscription-tiers/) | Lists available container registry subscription tiers |
| [`doctl registry repository`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/) | Display commands for working with repositories in a container registry |
| [`doctl registry repository delete-manifest`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/delete-manifest/) | Delete one or more container repository manifests by digest |
| [`doctl registry repository delete-tag`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/delete-tag/) | Delete one or more container repository tags |
| [`doctl registry repository list-manifests`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/list-manifests/) | List manifests for a repository in a container registry |
| [`doctl registry repository list-tags`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/list-tags/) | List tags for a repository in a container registry |
| [`doctl registry repository list-v2`](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/list-v2/) | List repositories for a container registry |

### doctl serverless

| Command | Description |
| --- | --- |
| [`doctl serverless`](https://docs.digitalocean.com/reference/doctl/reference/serverless/) | Develop, test, and deploy serverless functions |
| [`doctl serverless activations`](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/) | Retrieve activation records |
| [`doctl serverless activations get`](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/get/) | Retrieve information about an activation. |
| [`doctl serverless activations list`](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/list/) | Lists activations for which records exist. |
| [`doctl serverless activations logs`](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/logs/) | Retrieve the logs for an activation. |
| [`doctl serverless activations result`](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/result/) | Retrieve the output for an activation. |
| [`doctl serverless connect`](https://docs.digitalocean.com/reference/doctl/reference/serverless/connect/) | Connects local serverless support to a functions namespace |
| [`doctl serverless deploy`](https://docs.digitalocean.com/reference/doctl/reference/serverless/deploy/) | Deploy a functions project to your functions namespace |
| [`doctl serverless functions`](https://docs.digitalocean.com/reference/doctl/reference/serverless/functions/) | Work with the functions in your namespace |
| [`doctl serverless functions get`](https://docs.digitalocean.com/reference/doctl/reference/serverless/functions/get/) | Retrieve the metadata or code of a deployed function |
| [`doctl serverless functions invoke`](https://docs.digitalocean.com/reference/doctl/reference/serverless/functions/invoke/) | Invokes a function |
| [`doctl serverless functions list`](https://docs.digitalocean.com/reference/doctl/reference/serverless/functions/list/) | Lists the functions in your functions namespace |
| [`doctl serverless get-metadata`](https://docs.digitalocean.com/reference/doctl/reference/serverless/get-metadata/) | Obtain metadata of a functions project |
| [`doctl serverless init`](https://docs.digitalocean.com/reference/doctl/reference/serverless/init/) | Initialize a ‘functions project’ directory in your local file system |
| [`doctl serverless install`](https://docs.digitalocean.com/reference/doctl/reference/serverless/install/) | Installs the serverless support |
| [`doctl serverless namespaces`](https://docs.digitalocean.com/reference/doctl/reference/serverless/namespaces/) | Manage your functions namespaces |
| [`doctl serverless namespaces create`](https://docs.digitalocean.com/reference/doctl/reference/serverless/namespaces/create/) | Creates a namespace |
| [`doctl serverless namespaces delete`](https://docs.digitalocean.com/reference/doctl/reference/serverless/namespaces/delete/) | Deletes a namespace |
| [`doctl serverless namespaces list`](https://docs.digitalocean.com/reference/doctl/reference/serverless/namespaces/list/) | Lists your namespaces |
| [`doctl serverless namespaces list-regions`](https://docs.digitalocean.com/reference/doctl/reference/serverless/namespaces/list-regions/) | Lists the accepted ‘region’ values |
| [`doctl serverless status`](https://docs.digitalocean.com/reference/doctl/reference/serverless/status/) | Provide information about serverless support |
| [`doctl serverless undeploy`](https://docs.digitalocean.com/reference/doctl/reference/serverless/undeploy/) | Removes resources from your functions namespace |
| [`doctl serverless uninstall`](https://docs.digitalocean.com/reference/doctl/reference/serverless/uninstall/) | Removes the serverless support |
| [`doctl serverless upgrade`](https://docs.digitalocean.com/reference/doctl/reference/serverless/upgrade/) | Upgrades serverless support to match this version of doctl |
| [`doctl serverless watch`](https://docs.digitalocean.com/reference/doctl/reference/serverless/watch/) | Watch a functions project directory, deploying incrementally on change |

### doctl spaces

| Command | Description |
| --- | --- |
| [`doctl spaces`](https://docs.digitalocean.com/reference/doctl/reference/spaces/) | Display commands that manage DigitalOcean Spaces. |
| [`doctl spaces keys`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/) | Display commands that manage DigitalOcean Spaces Keys. |
| [`doctl spaces keys create`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/create/) | Create a key for a Space. |
| [`doctl spaces keys delete`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/delete/) | Delete a key for a Space. |
| [`doctl spaces keys get`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/get/) | Get a key for a Space by Access Key ID. |
| [`doctl spaces keys list`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/list/) | List all keys for a Space. |
| [`doctl spaces keys update`](https://docs.digitalocean.com/reference/doctl/reference/spaces/keys/update/) | Update a key for a Space. |

### doctl version

| Command | Description |
| --- | --- |
| [`doctl version`](https://docs.digitalocean.com/reference/doctl/reference/version/) | Show the current version |

### doctl vpcs

| Command | Description |
| --- | --- |
| [`doctl vpcs`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/) | Display commands that manage VPCs |
| [`doctl vpcs create`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/create/) | Create a new VPC network |
| [`doctl vpcs delete`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/delete/) | Permanently delete a VPC network |
| [`doctl vpcs get`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/get/) | Retrieve a VPC network |
| [`doctl vpcs list`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/list/) | List VPC networks |
| [`doctl vpcs peerings`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/) | Display commands that manage VPC Peerings |
| [`doctl vpcs peerings create`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/create/) | Create a new VPC Peering |
| [`doctl vpcs peerings delete`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/delete/) | Permanently delete a VPC Peering |
| [`doctl vpcs peerings get`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/get/) | Retrieves a VPC Peering |
| [`doctl vpcs peerings list`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/list/) | List VPC Peerings |
| [`doctl vpcs peerings update`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/peerings/update/) | Update a VPC Peering’s name |
| [`doctl vpcs update`](https://docs.digitalocean.com/reference/doctl/reference/vpcs/update/) | Update a VPC network’s configuration |

In this article...

- [doctl 1-click](https://docs.digitalocean.com/reference/doctl/reference/#doctl-1-click)
- [doctl account](https://docs.digitalocean.com/reference/doctl/reference/#doctl-account)
- [doctl apps](https://docs.digitalocean.com/reference/doctl/reference/#doctl-apps)
- [doctl auth](https://docs.digitalocean.com/reference/doctl/reference/#doctl-auth)
- [doctl balance](https://docs.digitalocean.com/reference/doctl/reference/#doctl-balance)
- [doctl billing-history](https://docs.digitalocean.com/reference/doctl/reference/#doctl-billing-history)
- [doctl compute](https://docs.digitalocean.com/reference/doctl/reference/#doctl-compute)
- [doctl databases](https://docs.digitalocean.com/reference/doctl/reference/#doctl-databases)
- [doctl genai](https://docs.digitalocean.com/reference/doctl/reference/#doctl-genai)
- [doctl invoice](https://docs.digitalocean.com/reference/doctl/reference/#doctl-invoice)
- [doctl kubernetes](https://docs.digitalocean.com/reference/doctl/reference/#doctl-kubernetes)
- [doctl monitoring](https://docs.digitalocean.com/reference/doctl/reference/#doctl-monitoring)
- [doctl network](https://docs.digitalocean.com/reference/doctl/reference/#doctl-network)
- [doctl nfs](https://docs.digitalocean.com/reference/doctl/reference/#doctl-nfs)
- [doctl projects](https://docs.digitalocean.com/reference/doctl/reference/#doctl-projects)
- [doctl registries](https://docs.digitalocean.com/reference/doctl/reference/#doctl-registries)
- [doctl registry](https://docs.digitalocean.com/reference/doctl/reference/#doctl-registry)
- [doctl serverless](https://docs.digitalocean.com/reference/doctl/reference/#doctl-serverless)
- [doctl spaces](https://docs.digitalocean.com/reference/doctl/reference/#doctl-spaces)
- [doctl version](https://docs.digitalocean.com/reference/doctl/reference/#doctl-version)
- [doctl vpcs](https://docs.digitalocean.com/reference/doctl/reference/#doctl-vpcs)

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