---
url: "https://docs.digitalocean.com/reference/ansible/reference/"
title: "DigitalOcean Ansible Collection Reference | DigitalOcean Documentation"
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
  - [Collection Reference](https://docs.digitalocean.com/reference/ansible/reference/)
    - [Modules](https://docs.digitalocean.com/reference/ansible/reference/modules/)
    - [Plugins](https://docs.digitalocean.com/reference/ansible/reference/plugins/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Ansible](https://docs.digitalocean.com/reference/ansible/)
- Collection Reference

[Give Feedback](https://ideas.digitalocean.com/documentation)

# DigitalOcean Ansible Collection Reference

Validated on 15 May 2025 • Last edited on 19 May 2025

The DigitalOcean Ansible Collection ( [`digitalocean.cloud`](https://galaxy.ansible.com/ui/repo/published/digitalocean/cloud/)) is a rewrite of the [`community.digitalocean`](https://galaxy.ansible.com/ui/repo/published/community/digitalocean/) Ansible collection using the [pydo](https://github.com/digitalocean/pydo) Python library.

Use this collection to manage DigitalOcean infrastructure.

The source code for the `digitalocean.cloud` collection is on GitHub at [`digitalocean/ansible-collection`](https://github.com/digitalocean/ansible-collection).

### External Dependencies

This collection requires three external Python modules: `azure-core`, `boto3` (for Spaces modules), and `pydo`. Install the requirements at the correct versions using `pip3`:

```shell
pip3 install --user azure-core==1.26.1 boto3==1.28.53 pydo==0.1.7
```

If you use [Poetry](https://python-poetry.org/), there is also a [`pyproject.toml`](https://github.com/digitalocean/ansible-collection/blob/main/pyproject.toml) in the `digitalocean.cloud` repository.

### Install the Collection from Ansible Galaxy

Before using this collection, install it with the Ansible Galaxy command-line tool:

```shell
ansible-galaxy collection install digitalocean.cloud
```

You can also include it in a `requirements.yml` file and install it with `ansible-galaxy collection install -r requirements.yml`, using the format:

```yaml
---
collections:
  - name: digitalocean.cloud
```

If you install the collection from Ansible Galaxy, it is not upgraded automatically when you upgrade the `ansible` package. To upgrade the collection to the latest available version, run `ansible-galaxy collection install digitalocean.cloud --upgrade`.

You can also install a specific version of the collection, like if you need to downgrade when something is broken in the latest version. For example, to install version `0.5.0`, run `ansible-galaxy collection install digitalocean.cloud:==0.5.0`.

See [Using Ansible collections](https://docs.ansible.com/ansible/devel/user_guide/collections_using.html) for more details.

## Using this Collection

There are sample playbooks in the [playbooks](https://github.com/digitalocean/ansible-collection/tree/main/playbooks) directory of the GitHub repository.

Most modules require authentication, so set the `$DIGITALOCEAN_TOKEN` environment variable. We recommend this over using the `token` module parameter because `token` stores your API token in plaintext within your playbook.

Modules which create, update, or destroy resources in the cloud require an API token with `write` permission. Read [How to Create a Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) for more information on API tokens.

Warning
Running sample Ansible playbooks can create real DigitalOcean infrastructure that are billed to your account. Clean up excess resources to avoid unexpected charges.

### Account Info Playbook

This is a sample playbook which returns your DigitalOcean account information:

```yaml
---
- name: Account info
  hosts: localhost
  connection: local
  gather_facts: false
  tasks:
    - name: Get account information
      digitalocean.cloud.account_info:
```

Name this playbook file `account_info.yml` and run it with `ansible-playbook`:

```shell
ANSIBLE_STDOUT_CALLBACK=yaml ansible-playbook -i localhost, -c local account_info.yml -v
```

The output returns your account information:

```
No config file found; using defaults

PLAY [Account info] **********************************************************************************************

TASK [Get account information] ***********************************************************************************
ok: [localhost] => changed=false
  account:
    droplet_limit: 25
    email: sammy@digitalocean.com
    email_verified: true
    floating_ip_limit: 1
    name: Sammy Shark
    reserved_ip_limit: 1
    status: active
    status_message: ''
    team:
      name: Sharks
      uuid: 3281ad4a-0092-4e6b-abd2-c7a7ed111503
    uuid: eab13a8a-99e3-4ffd-a587-b8a7789f0090
    volume_limit: 1
  msg: Current account information

PLAY RECAP *******************************************************************************************************
localhost                  : ok=1    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

### Droplet Creation Playbook

This playbook registers an SSH key from the user’s `~/.ssh` directory, then provisions a Droplet with it:

```yaml
---
- name: Create SSH key and Droplet
  hosts: localhost
  connection: local
  gather_facts: true

  vars:
    digitalocean_token: "{{ lookup('ansible.builtin.env', 'DIGITALOCEAN_TOKEN') }}"
    public_key: "{{ lookup('ansible.builtin.file', ansible_env['HOME'] ~ '/.ssh/sammy.key.pub') }}"

  tasks:
    - name: Create SSH key
      digitalocean.cloud.ssh_key:
        state: present
        token: "{{ digitalocean_token }}"
        public_key: "{{ public_key }}"
        name: "sammy"
      register: ssh_key

    - name: Create Droplet
      digitalocean.cloud.droplet:
        state: present
        token: "{{ digitalocean_token }}"
        name: sammy-droplet
        region: nyc3
        size: s-1vcpu-2gb
        image: ubuntu-22-04-x64
        ssh_keys: ["{{ ssh_key.ssh_key.id }}"]
        unique_name: true
```

Note
The DigitalOcean platform does not require Droplet names to be unique. This functionality is enforced by the `digitalocean.cloud.droplet` module’s `unique_name` parameter.

Replace `/.ssh/sammy.key.pub` in the playbook with the path to an existing key in your `~/.ssh` directory, then run the playbook using `ansible-playbook`:

```shell
ansible-playbook -i localhost, -c local droplet.yml -v
```

Ansible prints status updates as it completes each task, similar to the following:

```
No config file found; using defaults

PLAY [Create SSH key and Droplet] *********************************************************************************

TASK [Gathering Facts] ********************************************************************************************
ok: [localhost]

TASK [Create SSH key] *********************************************************************************************
changed: [localhost] => {"changed": true, "msg": "Created SSH key sammy (ce:1a:f2:41:4d:b8:16:11:d8:1e:22:07:aa:8f:47:b8)", "ssh_key": {"fingerprint": "ce:1a:f2:41:4d:b8:16:11:d8:1e:22:07:aa:8f:47:b8", "id": 41495416, "name": "sammy", "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID8m+rcGxqanY8X2/569vMI+YnzEt+eOyIEcEH0nvsWo sammy@host"}}

TASK [Create Droplet] *********************************************************************************************
changed: [localhost] => {"changed": true, "droplet": {"backup_ids": [], "created_at": "2024-04-03T16:29:10Z"
. . .
"status": "active", "tags": [], "vcpus": 1, "volume_ids": []}, "msg": "Created Droplet sammy-droplet (410720588) in nyc3"}

PLAY RECAP ********************************************************************************************************
localhost                  : ok=3    changed=2    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

When the playbook run is complete, your DigitalOcean account has a `sammy` SSH key and a `sammy-droplet` Droplet. Destroy the Droplet when you are done to avoid unexpected charges.

## Module Reference

The `digitalocean.cloud` collection provides the following modules:

![](https://docs.digitalocean.com/images/icons/ansible.svg)

account\_info

Show information about the current user account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

balance\_info

Retrieve the balances on a customer’s account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

billing\_history\_info

Retrieve a list of all billing history entries

![](https://docs.digitalocean.com/images/icons/ansible.svg)

cdn\_endpoints

Manage CDN endpoints

![](https://docs.digitalocean.com/images/icons/ansible.svg)

cdn\_endpoints\_info

List all of the CDN endpoints available on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

certificate

Manage certificates

![](https://docs.digitalocean.com/images/icons/ansible.svg)

certificates\_info

List all of the certificates available on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

container\_registry\_info

Get information about your container registry

![](https://docs.digitalocean.com/images/icons/ansible.svg)

database\_cluster

Create or delete database clusters

![](https://docs.digitalocean.com/images/icons/ansible.svg)

database\_clusters\_info

List all of the database clusters on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

domain

Manage domains

![](https://docs.digitalocean.com/images/icons/ansible.svg)

domain\_record

Manage domain records

![](https://docs.digitalocean.com/images/icons/ansible.svg)

domain\_records\_info

Retrieve a listing of all of the domain records for a domain

![](https://docs.digitalocean.com/images/icons/ansible.svg)

domains\_info

Retrieve a list of all of the domains in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplet

Create or delete Droplets

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplet\_action\_power

Set power states of a Droplet

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplet\_action\_resize

Resize a Droplet

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplet\_action\_snapshot

Take a snapshot of a Droplet

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplets\_info

List all Droplets in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

firewall

Create or delete firewalls

![](https://docs.digitalocean.com/images/icons/ansible.svg)

firewalls\_info

List all firewalls on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

images\_info

List all of the images available on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

kubernetes\_cluster

Create or delete Kubernetes clusters

![](https://docs.digitalocean.com/images/icons/ansible.svg)

kubernetes\_clusters\_info

Retrieve a list of all of the Kubernetes clusters in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

load\_balancer

Create or delete load balancers

![](https://docs.digitalocean.com/images/icons/ansible.svg)

load\_balancers\_info

Retrieve a list of all of the load balancers in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

monitoring\_alert\_policies\_info

Returns all alert policies that are configured for the given account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

monitoring\_alert\_policy

Create or delete monitoring alert policy

![](https://docs.digitalocean.com/images/icons/ansible.svg)

one\_click

Install Kubernetes 1-Click applications

![](https://docs.digitalocean.com/images/icons/ansible.svg)

one\_clicks\_info

List all available 1-Click applications

![](https://docs.digitalocean.com/images/icons/ansible.svg)

project

Create or delete projects

![](https://docs.digitalocean.com/images/icons/ansible.svg)

project\_resources\_info

Retrieve a list of all of the project resources in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

projects\_info

Retrieve a list of all of the projects in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

regions\_info

List all of the regions that are available

![](https://docs.digitalocean.com/images/icons/ansible.svg)

reserved\_ip

Create or delete reserved IPs

![](https://docs.digitalocean.com/images/icons/ansible.svg)

reserved\_ip\_assign

Create and/or assign a reserved IP to a Droplet

![](https://docs.digitalocean.com/images/icons/ansible.svg)

reserved\_ips\_info

List all reserved IPs on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

sizes\_info

List all of available Droplet sizes

![](https://docs.digitalocean.com/images/icons/ansible.svg)

snapshot

Delete snapshots

![](https://docs.digitalocean.com/images/icons/ansible.svg)

snapshots\_info

Retrieve a list of all of the snapshots in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

space

Manage Spaces

![](https://docs.digitalocean.com/images/icons/ansible.svg)

spaces\_info

List all of the Spaces in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

ssh\_key

Create or delete SSH keys

![](https://docs.digitalocean.com/images/icons/ansible.svg)

ssh\_keys\_info

List all of the keys in your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

tag

Create or delete tags

![](https://docs.digitalocean.com/images/icons/ansible.svg)

tags\_info

List all of the tags on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

uptime\_check

Create or delete Uptime checks

![](https://docs.digitalocean.com/images/icons/ansible.svg)

uptime\_checks\_info

List all of the Uptime checks on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

uptime\_checks\_state\_info

Get the state of an Uptime check

![](https://docs.digitalocean.com/images/icons/ansible.svg)

volume

Create or delete volumes

![](https://docs.digitalocean.com/images/icons/ansible.svg)

volume\_action

Attach or detach volumes from Droplets

![](https://docs.digitalocean.com/images/icons/ansible.svg)

volume\_snapshot

Create or delete volume snapshots

![](https://docs.digitalocean.com/images/icons/ansible.svg)

volumes\_info

List all of the block storage volumes available on your account

![](https://docs.digitalocean.com/images/icons/ansible.svg)

vpc

Create or delete VPCs

![](https://docs.digitalocean.com/images/icons/ansible.svg)

vpcs\_info

List all of the VPCs on your account

## Inventory Plugin Reference

The following inventory plugins are also available:

![](https://docs.digitalocean.com/images/icons/ansible.svg)

droplets

Droplets dynamic inventory plugin

In this article...

- [External Dependencies](https://docs.digitalocean.com/reference/ansible/reference/#external-dependencies)
- [Install the Collection from Ansible Galaxy](https://docs.digitalocean.com/reference/ansible/reference/#install-the-collection-from-ansible-galaxy)
- [Using this Collection](https://docs.digitalocean.com/reference/ansible/reference/#using-this-collection)
- [Account Info Playbook](https://docs.digitalocean.com/reference/ansible/reference/#account-info-playbook)
- [Droplet Creation Playbook](https://docs.digitalocean.com/reference/ansible/reference/#droplet-creation-playbook)
- [Module Reference](https://docs.digitalocean.com/reference/ansible/reference/#module-reference)
- [Inventory Plugin Reference](https://docs.digitalocean.com/reference/ansible/reference/#inventory-plugin-reference)

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