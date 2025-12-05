---
url: "https://docs.digitalocean.com/products/droplets/how-to/tag/"
title: "How to Tag Droplets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/droplets.f4877fc574e6b07f8fb9608e252be4160ebecd65569acea11775a046b9370c6f.svg)Droplets](https://docs.digitalocean.com/products/droplets/)
- [Getting Started](https://docs.digitalocean.com/products/droplets/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/droplets/getting-started/quickstart/)
  - [Recommended Droplet Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-droplet-setup/)
  - [Recommended GPU Setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/)
- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
  - [Create Droplets](https://docs.digitalocean.com/products/droplets/how-to/create/)
  - [Use GPU Droplets](https://docs.digitalocean.com/products/droplets/how-to/gpu/)
  - [Provide User Data](https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/)
  - [Connect with SSH](https://docs.digitalocean.com/products/droplets/how-to/connect-with-ssh/)
  - [Add SSH Keys to Droplets](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/)
  - [Connect with the Droplet Console](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/)
  - [Transfer Files with FileZilla](https://docs.digitalocean.com/products/droplets/how-to/transfer-files/)
  - [Tag Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/)
  - [Track Performance](https://docs.digitalocean.com/products/droplets/how-to/track-performance/)
  - [Resize Droplets](https://docs.digitalocean.com/products/droplets/how-to/resize/)
  - [Use Autoscale Pools](https://docs.digitalocean.com/products/droplets/how-to/use-autoscale-pools/)
  - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Rebuild Droplets](https://docs.digitalocean.com/products/droplets/how-to/rebuild/)
  - [Manage the Droplet Agent](https://docs.digitalocean.com/products/droplets/how-to/manage-agent/)
  - [Manage the Kernel](https://docs.digitalocean.com/products/droplets/how-to/kernel/)
  - [Recover Access or Data](https://docs.digitalocean.com/products/droplets/how-to/recovery/)
  - [Destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/)
- [Reference](https://docs.digitalocean.com/products/droplets/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Droplets)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/)
- [Concepts](https://docs.digitalocean.com/products/droplets/concepts/)
  - [Choosing a Plan](https://docs.digitalocean.com/products/droplets/concepts/choosing-a-plan/)
  - [Tips on Downsizing Droplets](https://docs.digitalocean.com/products/droplets/concepts/downsizing-considerations/)
  - [Autoscale Pools](https://docs.digitalocean.com/products/droplets/concepts/autoscale-pools/)
  - [Glossary](https://docs.digitalocean.com/glossary/droplets/)
- [Details](https://docs.digitalocean.com/products/droplets/details/)
  - [Features](https://docs.digitalocean.com/products/droplets/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/droplets/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/droplets/details/availability/)
  - [Images](https://docs.digitalocean.com/products/droplets/details/images/)
  - [Limits](https://docs.digitalocean.com/products/droplets/details/limits/)
  - [Image Deprecation Policy](https://docs.digitalocean.com/products/droplets/details/image-deprecation/)
  - [Droplet Policies](https://docs.digitalocean.com/products/droplets/details/policies/)
  - [Live Migrations](https://docs.digitalocean.com/products/droplets/details/live-migration/)
  - [CPU Droplet SLA](https://www.digitalocean.com/sla/cpu-droplets)
  - [GPU Droplet SLA](https://www.digitalocean.com/sla/gpu-droplets)
  - [GPU Droplets](https://docs.digitalocean.com/products/gpu-droplets/)
- [Support](https://docs.digitalocean.com/products/droplets/support/)

- [How-Tos](https://docs.digitalocean.com/products/droplets/how-to/)
- Tag Droplets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Tag Droplets

Validated on 11 Mar 2020 • Last edited on 14 Jul 2025

DigitalOcean Droplets are Linux-based virtual machines (VMs) that run on top of virtualized hardware. Each Droplet you create is a new server you can use, either standalone or as part of a larger, cloud-based infrastructure.

Tags are custom labels you can apply to Droplets and other DigitalOcean resources. You can filter tagged Droplets, automatically include Droplets in [DigitalOcean Firewall](https://docs.digitalocean.com/products/networking/firewalls/) or [Load Balancer](https://docs.digitalocean.com/products/networking/load-balancers/) configurations by tag, create [monitoring alert policies](https://docs.digitalocean.com/products/monitoring/how-to/manage-alerts/#create-control) for groups of tagged Droplets, and use the [DigitalOcean API](https://docs.digitalocean.com/products/droplets/reference/) to initiate an action across multiple Droplets with the same tag.

Choosing terms that describe a Droplet’s function can help you locate and administer Droplets that share common roles. For example, you might tag Droplets by:

- **Environment**, like production, staging or development.
- **Application**, like web servers (Apache) or database servers (MariaDB).
- **Purpose**, like a project name or any other key term that describes the use of the Droplet.
- **Person**, like the individual or team responsible for managing the Droplet.

You can add tags to Droplets during or after creation.

## Limits

- Tags must be a single word containing only letters, numbers, colons, dashes, and underscores.

## Known Issues

- You cannot edit existing tags. Instead, create a new tag, apply it to the appropriate resources, and delete the old one.
- Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.
  - Tagged resources in the control panel always displays the canonical capitalization. For example, if you create a tag named `PROD`, you can tag resources in the control panel by entering `prod`. The tag still displays with its canonical capitalization, `PROD`.
  - When working with [tags in the API](https://docs.digitalocean.com/reference/api/digitalocean/), you must use the tag’s canonical capitalization. For example, if you create a tag named `PROD`, the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).

## Tag Existing Droplets

To add or modify tags for existing Droplets, use the Droplet’s **More** menu and select **Edit tags** or, from the Droplet’s detail page, use the **Tags** link.

![The Droplet tags page](https://docs.digitalocean.com/screenshots/droplets/pages/tags.e9a214f705b4ed5c6ddba810c7a88a5f6fffd1650fec6b590985fa4e1980207c.png)

On a [project’s dashboard](https://docs.digitalocean.com/products/projects/), you can hover over an untagged Droplet’s row of information to reveal the **Add tags** link.

No matter which way you navigate, the **Manage Tags** window opens.

![The Manage Tags window](https://docs.digitalocean.com/screenshots/droplets/manage-tags-window.600f059f5255f099fe06ab4b7fa63b0f505dbd7ee8494f6edba631c8f63f01db.png)

Add tags by pressing `SPACEBAR` or `ENTER` after each term. Navigate between tags with the arrow keys, and remove the highlighted tag with `DELETE` or the last tag on the list with `BACKSPACE`.

When you’re done, click **Save Tags**.

## Filter by Tag

If you click a tag from anywhere in the control panel, like on the dashboard of a project or on a Droplet’s **Tags** page, you go to the list of all resources with that tag.

![An example of a list of resources with a tag. There are 3 Droplets with the tag 'webserver'.](https://docs.digitalocean.com/screenshots/droplets/tags-filter-list.5c8a1c324e0dbed5a325f58462ae63492a2dc3a17a83657af8ac5c56ccd24273.png)

Filter lists are limited to a single tag, displayed at the top of the list.

## Tag Droplets During Creation

To add tags while creating a new Droplet, at the bottom of the [Droplet create page](https://cloud.digitalocean.com/droplets/new), look for the **Finalize Details** section.

![The Finalize Details section of the Droplet creation menu, including the Tags section.](https://docs.digitalocean.com/screenshots/droplets/create/finalize-details.98562fdb01a6785ed3804ddbf319f2a2c61cce65e7de900d0c269a12320c02f8.png)

In the **Tags** field, enter the tags. Add multiple tags by pressing `SPACEBAR` or `ENTER` after each term. Navigate between tags with the arrow keys, and remove the highlighted tag with `DELETE` or the last tag on the list with `BACKSPACE`.

## Automate Tagging

When tagging a Droplet via API, you need to have already [created a tag](https://docs.digitalocean.com/reference/api/digitalocean/#operation/tags_create). This is not necessary when using `doctl`, the CLI.

How to Add a Tag to a Droplet Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute droplet tag`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/droplet/tag/) for more details:




```shell
doctl compute droplet tag <droplet-id|droplet-name> [flags]
```



The following example applies the tag `frontend` to a Droplet with the ID `386734086`:




```shell
doctl compute droplet tag 386734086 --tag-name frontend
```


How to Tag a Resource Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/tags/{tag_id}/resources`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/tags_assign_resources).

### cURL

Using cURL:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"resources":[{"resource_id":"9569411","resource_type":"droplet"},{"resource_id":"7555620","resource_type":"image"},{"resource_id":"3d80cb72-342b-4aaa-b92e-4e4abb24a933","resource_type":"volume"}]}' \
  "https://api.digitalocean.com/v2/tags/awesome/resources"
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

    opt := &godo.ListOptions{
        Page:    1,
        PerPage: 200,
    }
    tags, _, err := client.Tags.List(ctx, opt)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.tags.tag_resources(name: 'awesome', resources: [{ resource_id: '9569411', resource_type: 'droplet' },{ resource_id: '7555620', resource_type: 'image' },{ resource_id: '3d80cb72-342b-4aaa-b92e-4e4abb24a933', resource_type: 'volume'}])
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "resources": [\
    {\
      "resource_id": "9569411",\
      "resource_type": "droplet"\
    },\
    {\
      "resource_id": "7555620",\
      "resource_type": "image"\
    },\
    {\
      "resource_id": "3d80cb72-342b-4aaa-b92e-4e4abb24a933",\
      "resource_type": "volume"\
    }\
  ]
}

resp = client.tags.assign_resources(tag_id="awesome", body=req)
```

In this article...

- [Limits](https://docs.digitalocean.com/products/droplets/how-to/tag/#limits)
- [Known Issues](https://docs.digitalocean.com/products/droplets/how-to/tag/#known-issues)
- [Tag Existing Droplets](https://docs.digitalocean.com/products/droplets/how-to/tag/#tag-existing-droplets)
- [Filter by Tag](https://docs.digitalocean.com/products/droplets/how-to/tag/#filter)
- [Tag Droplets During Creation](https://docs.digitalocean.com/products/droplets/how-to/tag/#tag-droplets-during-creation)
- [Automate Tagging](https://docs.digitalocean.com/products/droplets/how-to/tag/#automate-tagging)

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