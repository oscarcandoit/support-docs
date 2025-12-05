---
url: "https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/"
title: "How to Manage SSH Public Keys on DigitalOcean Teams | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/release-notes.5fbb164636ab961df9e08f892a39623e2bf7848be659fb300d6b0bab87a060dd.svg)Release Notes](https://docs.digitalocean.com/release-notes/)
- [![](https://docs.digitalocean.com/images/icons/regional-availability.32459447c00bfdb1c07abebcc0fdd721a4cbd93143cb616b0fbe5c629e4a938c.svg)Regional Availability](https://docs.digitalocean.com/platform/regional-availability/)
- [![](https://docs.digitalocean.com/images/icons/accounts.7c3a46a4e139957c37b1ba530846464f3b7432b7bc00793db0d8e788940ddf69.svg)Accounts](https://docs.digitalocean.com/platform/accounts/)
- [![](https://docs.digitalocean.com/images/icons/teams.d6932e5b476fcbbdf1fecec304776ef06c1a04d23174de1c0e6b349d96add59f.svg)Teams](https://docs.digitalocean.com/platform/teams/)
  - [Roles](https://docs.digitalocean.com/platform/teams/roles/)
  - [Settings](https://docs.digitalocean.com/platform/teams/settings/)
  - [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
    - [Create New Teams](https://docs.digitalocean.com/platform/teams/how-to/create/)
    - [Manage Team Membership](https://docs.digitalocean.com/platform/teams/how-to/manage-membership/)
    - [Use Custom Roles](https://docs.digitalocean.com/platform/teams/how-to/use-custom-roles/)
    - [Require Secure Sign-In](https://docs.digitalocean.com/platform/teams/how-to/require-secure-sign-in/)
    - [Manage SSH Keys on Teams](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/)
    - [Manage SSL Certificates](https://docs.digitalocean.com/platform/teams/how-to/manage-certificates/)
    - [View Security History](https://docs.digitalocean.com/platform/teams/how-to/view-security-history/)
    - [Refer Others to DigitalOcean](https://docs.digitalocean.com/platform/teams/how-to/refer-others/)
    - [Delete Teams](https://docs.digitalocean.com/platform/teams/how-to/delete/)
    - [Configure SSO](https://docs.digitalocean.com/platform/teams/how-to/configure-sso/)
  - [Limits](https://docs.digitalocean.com/platform/teams/limits/)
- [![](https://docs.digitalocean.com/images/icons/organizations.ae95392d02268a2e13ef28b6aabf1b35b6a0a5a9ef64517fedf080075500cefd.svg)Organizations](https://docs.digitalocean.com/platform/organizations/)
- [![](https://docs.digitalocean.com/images/icons/billing.357b31651da85802e1aa1c9f0b19cda7b26d5c971352f7176d1a130b21e088b7.svg)Billing](https://docs.digitalocean.com/platform/billing/)
- [![](https://docs.digitalocean.com/images/icons/support.91273ef64796cbf92aa09b42996c4fd5bae614b3ce3dd81c685d8da10c28f209.svg)Support Plans](https://docs.digitalocean.com/platform/support-plans/)
- [![](https://docs.digitalocean.com/images/icons/ddos.9bd745e00c340f315df5e60a2aef6a3ae3b2a4b9c16e583378f013ce39e94aaf.svg)DDoS Protection](https://docs.digitalocean.com/platform/ddos-protection/)
- [![](https://docs.digitalocean.com/images/icons/product-lifecycle.420c79b20e1d85e7a00a3dbb1734dc5c65ceaac5449c3ed8c34ad37cc88ffd9b.svg)Product Lifecycle Stages](https://docs.digitalocean.com/platform/product-lifecycle/)
- [![](https://docs.digitalocean.com/images/icons/slas.1b124ea38fb251987cabe77aae688f5c00fa72130222aca6073b34a82f26bfe2.svg)Service-Level Agreements](https://www.digitalocean.com/sla)
- [![](https://docs.digitalocean.com/images/icons/digitalocean.f7c2c7a6697e566e0086faaf43a17f7dc3a2da86dcb320bbc588e8dc94f6f8cc.svg)Security on DigitalOcean](https://www.digitalocean.com/security)
- [![](https://docs.digitalocean.com/images/icons/dns.cb34d0653affb99d6826d0a3c70bdb8311ae7f51ca44810ae41cb1deb2e03a71.svg)DigitalOcean IP ranges (CSV)](https://digitalocean.com/geo/google.csv)

- [Teams](https://docs.digitalocean.com/platform/teams/)
- [How-Tos](https://docs.digitalocean.com/platform/teams/how-to/)
- Manage SSH Keys on Teams

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Manage SSH Public Keys on DigitalOcean Teams

Validated on 9 Dec 2024 • Last edited on 19 Jun 2025

When you add public SSH keys to DigitalOcean teams, you can automatically add them to new Droplets during creation. This lets you [connect to the Droplet with SSH keys](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/) immediately after creation and removes the need to [manually configure SSH key authentication](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/to-existing-droplet/).

## Add SSH Keys to a Team

### With the Control Panel

To add an SSH public key to a team, log in to the [control panel](https://cloud.digitalocean.com/) and switch to the team you want to use. In the left menu, click **Settings**, then click the **Security** tab to go to the [team security settings page](https://cloud.digitalocean.com/account/security).

![The SSH Key section of the team security page with one key listed](https://docs.digitalocean.com/screenshots/teams/ssh-keys.903f80218faa4686b6bf6565b1d8ad2d67f89b22834d8577c66b2ecb1f52b9b8.png)

In the **SSH Keys** section, click **Add SSH Key** to open the **New SSH key** window.

Copy your public key into the **Public Key** field. It’s safe to freely share your [public SSH keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys) because you cannot recreate a private key using a public key. You can only use a public key to validate the user who holds the associated private key.

Tip

Can’t find your key pair? By default, your key files are saved to the hidden SSH folder in your [home directory](https://en.wikipedia.org/wiki/Home_directory), and your public key ends in `.pub`.

- On Linux, your public key is typically `/home/your_username/.ssh/id_ed25519.pub`.
- On macOS, it’s typically `/Users/your_username/.ssh/id_ed25519.pub`.
- On Windows, it’s typically `/Users/your_username/.ssh/id_ed25519.pub`. If you generated your key pair with PuTTYgen, you need to [use PuTTYgen to view the public key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-putty/#working-with-putty-s-public-key-format) in the appropriate format.

Enter a name in the **Key Name** field, which lets you identify this key in the DigitalOcean Control Panel. We recommend using the name of the machine you copied the public key from.

Finally, click **Add SSH Key** to add the key to your team.

### With the API or CLI

How to Add an SSH Key to Your DigitalOcean Team Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute ssh-key create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/ssh-key/create/) for more details:




```shell
doctl compute ssh-key create <key-name> [flags]
```


How to Add an SSH Key to Your DigitalOcean Team Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/account/keys`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/sshKeys_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"My SSH Public Key","public_key":"ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example"}' \
  "https://api.digitalocean.com/v2/account/keys"
```

### Go

Using [Godo](https://github.com/digitalocean/godo), the official DigitalOcean API client for Go:

```go
import (
    "context"
    "os"

    "github.com/digitalocean/godo"
)

func main() {
    token := os.Getenv("DIGITALOCEAN_TOKEN")

    client := godo.NewFromToken(token)
    ctx := context.TODO()

    createRequest := &godo.KeyCreateRequest{
        Name:      "My SSH Public Key",
        PublicKey: "ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example",
    }

    transfer, _, err := client.Keys.Create(ctx, createRequest)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

ssh_key = DropletKit::SSHKey.new(
  name: 'My SSH Public Key',
  public_key: 'ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example'
)
client.ssh_keys.create(ssh_key)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "public_key": "ssh-rsa AEXAMPLEaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example",
  "name": "My SSH Public Key"
}

resp = client.ssh_keys.create(body=req)
```

## Remove SSH Keys from a Team with the Control Panel

To remove an SSH public key from a team, log in to the [control panel](https://cloud.digitalocean.com/) and switch to the team you want to use.

In the left menu, click **Settings**, then click the **Security** tab to go to the [team security settings page](https://cloud.digitalocean.com/account/security). The **SSH keys** section lists any keys already added to the team.

In the **…** menu next to each key in the table, you can edit the key or delete it entirely. Deleting an SSH key from a team only removes the ability to create new Droplets with that key already added. It does not remove that SSH key from any Droplet’s SSH configuration.

In this article...

- [Add SSH Keys to a Team](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/#add-ssh-keys-to-a-team)
  - [With the Control Panel](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/#with-the-control-panel)
  - [With the API or CLI](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/#with-the-api-or-cli)
- [Remove SSH Keys from a Team with the Control Panel](https://docs.digitalocean.com/platform/teams/how-to/upload-ssh-keys/#remove-ssh-keys-from-a-team-with-the-control-panel)

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