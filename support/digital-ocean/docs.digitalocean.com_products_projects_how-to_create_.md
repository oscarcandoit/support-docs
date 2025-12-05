---
url: "https://docs.digitalocean.com/products/projects/how-to/create/"
title: "How to Create Projects | DigitalOcean Documentation"
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
- Create Projects

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Create Projects

Validated on 5 Apr 2024 • Last edited on 18 Dec 2024

Projects let you organize your DigitalOcean resources into groups that fit the way you work. Create projects that align with the applications, environments, and clients that you host on DigitalOcean.

All of the DigitalOcean resources in your account start in a single default project. You can create additional projects and move resources between them to organize your resources in ways that align with how you use them.

## Create a Project Using the Control Panel

In the control panel’s main menu, under the **Projects** section, click **\+ New Project** to open the project creation page.

![Create new project](https://docs.digitalocean.com/screenshots/projects/create-project.dc129ca95635275d1432f64f36359330e2f01ace3561963a9fb5ac10642fcb47.png)

On the **Create new project** page, enter the name, description, and purpose of the project. You can change any project setting later by returning to the **Settings** tab.

- **Name your project** (required). The project name is meant to be human-readable, so you can include spaces and special characters.

- **Add a description** (optional). The project’s description appears at the top of all of all project pages, beneath the project’s name.

The description can be up to 255 characters long (including spaces). The first 97 characters are displayed on the page heading.

- **Tell us what it’s for?** (required). This field lets us show relevant tips and tutorials for your use case. There are several common purposes in the list, but you can choose **Other** to describe it yourself.

The purpose can be up to 199 characters long. If you enter a longer description, you receive an error when you click **Create Project**.


When you’re done, click **Create Project** to go to the **Move Resources** page. Here, you can optionally move existing resources into the new project.

![Move resources](https://docs.digitalocean.com/screenshots/projects/move-resources.96774e284cd2a35949e530543b5135c7e383ff10f38e4cfb8b667c6810dd6123.png)

When you click into the text area, a list of all movable resources from other projects appears. You can keep typing to filter the list. Click the names of the resources you want to move, then click the **Move Resources** button. If you choose **Skip for now**, you can [move resources in later](https://docs.digitalocean.com/products/projects/how-to/move-resources/).

Either choice finalizes the creation of your project and redirects you to the **Resources** tab of the new project.

![Example project with a Droplet](https://docs.digitalocean.com/screenshots/projects/project-with-resources.26bf5ae157bb394627fa3c573e21124f75add068f0fa8f600337a743f6a12d3f.png)

Resources you add appear on the **Resources** tab, grouped by type.

## Create a Project Using Automation

How to Create a Project Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl projects create`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/projects/create/) for more details:




```shell
doctl projects create [flags]
```



The following example creates a project named `Example Project` with the purpose “Frontend development”:




```shell
doctl projects create --name "Example Project" --purpose "Frontend development"
```


How to Create a Project Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/projects`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/projects_create).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"name":"my-web-api", "description": "My website API", "purpose": "Service or API", "environment": "Production"}' \
  "https://api.digitalocean.com/v2/projects"
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

    createReq := &godo.CreateProjectRequest{
      Name:        "my-web-api",
      Description: "My website API",
      Purpose:     "Service or API",
      Environment: "Production",
    }

    client.Projects.Create(ctx, createReq)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

project = DropletKit::Project.new(
  name: 'my-api',
  description: 'My website API',
  purpose: 'Service or API',
  environment: 'Production'
)
client.projects.create(project)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "name": "my-web-api",
  "description": "My website API",
  "purpose": "Service or API",
  "environment": "Production"
}

resp = client.projects.create(body=req)
```

In this article...

- [Create a Project Using the Control Panel](https://docs.digitalocean.com/products/projects/how-to/create/#create-a-project-using-the-control-panel)
- [Create a Project Using Automation](https://docs.digitalocean.com/products/projects/how-to/create/#create-a-project-using-automation)

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