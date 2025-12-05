---
url: "https://docs.digitalocean.com/products/projects/how-to/delete/"
title: "How to Delete Projects | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/projects.09205e3f8a46d107d3fe9c819ca920f186df235ea36143c514811a9a37dcb4ad.svg)Projects](https://docs.digitalocean.com/products/projects/)
- [Getting Started](https://docs.digitalocean.com/products/projects/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/projects/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/projects/how-to/)
  - [Create Projects](https://docs.digitalocean.com/products/projects/how-to/create/)
  - [Move Resources](https://docs.digitalocean.com/products/projects/how-to/move-resources/)
  - [Delete Projects](https://docs.digitalocean.com/products/projects/how-to/delete/)
- [Reference](https://docs.digitalocean.com/products/projects/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Projects)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/projects/)
- [Details](https://docs.digitalocean.com/products/projects/details/)
  - [Features](https://docs.digitalocean.com/products/projects/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/projects/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/projects/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/projects/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/projects/how-to/)
- Delete Projects

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Delete Projects

Validated on 5 Apr 2024 • Last edited on 18 Dec 2024

Projects let you organize your DigitalOcean resources into groups that fit the way you work. Create projects that align with the applications, environments, and clients that you host on DigitalOcean.

To delete a project, the following criteria must be true:

- The project must have no resources in it. To empty out the resources in a project, you can either destroy them or [move them into a new project](https://docs.digitalocean.com/products/projects/how-to/move-resources/).

- The project must not be the default project. You can set a different project as the default on the **Settings** tab of that project.


## Delete a Project Using the Control Panel

To delete an empty, non-default project, visit the project’s **Settings** tab.

![Settings tab of a project](https://docs.digitalocean.com/screenshots/projects/settings.4ef56050a0e60cdf52975f4bd7ceb4b74dbb38a212253d4ac2f348089e2ed5a0.png)

In the **Delete project** section, click **Delete Project**. When prompted, click **Confirm Delete**. This permanently removes the project from your account.

## Delete a Project Using Automation

How to Delete a Project Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl projects delete`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/projects/delete/) for more details:




```shell
doctl projects delete <project-id> [<project-id> ...] [flags]
```



The following example deletes the project with the ID `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`:




```shell
doctl projects delete f81d4fae-7dec-11d0-a765-00a0c91e6bf6
```


How to Delete a Project Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/projects/{project_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/projects_delete).

### cURL

Using cURL:

```shell
curl -X DELETE -H 'Content-Type: application/json' -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/projects/4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679"
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

    _, err := client.Projects.Delete(ctx, '4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679')
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.projects.delete(id: '4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679')
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

resp = client.projects.delete(project_id="fda9fda")
```

In this article...

- [Delete a Project Using the Control Panel](https://docs.digitalocean.com/products/projects/how-to/delete/#delete-a-project-using-the-control-panel)
- [Delete a Project Using Automation](https://docs.digitalocean.com/products/projects/how-to/delete/#delete-a-project-using-automation)

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