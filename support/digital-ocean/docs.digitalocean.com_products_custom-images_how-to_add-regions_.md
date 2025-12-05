---
url: "https://docs.digitalocean.com/products/custom-images/how-to/add-regions/"
title: "How to Add Custom Images to Additional Regions | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/custom-images.18f81d068bba467745996fcd3b0f4b004a425f0203fdc37728497614b9531dbf.svg)Custom Images](https://docs.digitalocean.com/products/custom-images/)
- [Getting Started](https://docs.digitalocean.com/products/custom-images/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/custom-images/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
  - [Upload Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/upload/)
  - [Add Additional Regions](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/)
  - [Delete Custom Images](https://docs.digitalocean.com/products/custom-images/how-to/delete/)
  - [Create Droplets](https://docs.digitalocean.com/products/custom-images/how-to/create-droplets/)
- [Reference](https://docs.digitalocean.com/products/custom-images/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Images)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/image/)
- [Details](https://docs.digitalocean.com/products/custom-images/details/)
  - [Features](https://docs.digitalocean.com/products/custom-images/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/custom-images/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/custom-images/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/custom-images/details/limits/)

- [How-Tos](https://docs.digitalocean.com/products/custom-images/how-to/)
- Add Additional Regions

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Add Custom Images to Additional Regions

Validated on 5 Jun 2019 • Last edited on 18 Dec 2024

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

After you [upload a custom image](https://docs.digitalocean.com/products/custom-images/how-to/upload/) to your account, you can create Droplets from that image as long as they are in the same datacenter. If you’d like to create a Droplet from a custom image in a different region, you need to add your custom image to that region first.

## Add a Custom Image to a Region using Automation

How to Add an Image to a Region Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute image-action transfer`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/image-action/transfer/) for more details:




```shell
doctl compute image-action transfer <image-id> [flags]
```



The following example transfers an image with the ID 386734086 to the region with the slug nyc3:




```shell
doctl compute image-action transfer 386734086 --region nyc3
```


How to Add an Image to a Region Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a POST request to [`https://api.digitalocean.com/v2/images/{image_id}/actions`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/imageActions_post).

### cURL

Using cURL:

```shell
# Transfer an Existing Image
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"transfer","region":"nyc2"}' \
  "https://api.digitalocean.com/v2/images/7938269/actions"

# Convert an Image into a Snapshot
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"type":"convert"}' \
  "https://api.digitalocean.com/v2/images/7938291/actions"
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

    // Transfer an existing image
    transferRequest := &godo.ActionRequest{
        "type":   "transfer",
        "region": "nyc2",
    }
  # Transfer an Image
    transfer, _, err := client.ImageActions.Transfer(ctx, 7938269, transferRequest)

  # Convert an Image to a Snapshot
  # client.image_actions.convert(image_id: 7938269)

}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

# Transfer an Image
client.image_actions.transfer(image_id: 7938269, region: 'nyc2')

# Convert an Image to a Snapshot
# client.image_actions.convert(image_id: 7938269)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

req = {
  "type": "convert"
}
resp = client.image_actions.post(image_id=342341, body=req)
```

## Add a Custom Image to a Region using the Control Panel

From the **Backups & Snapshots** section, click the **Custom Images** tab. From there, open the **More** menu of the custom image you want to add to a new region and choose **Add to region**.

![Custom image more menu](https://docs.digitalocean.com/screenshots/custom-images/more-menu.c7f454638be3817115f1c638d877b59ed3cd004f20fa6401d8193ad4a0b3ffa6.png)

In the **Custom image availability** window that opens, click the region or regions you want to add your custom image to.

In this article...

- [Add a Custom Image to a Region using Automation](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/#add-a-custom-image-to-a-region-using-automation)
- [Add a Custom Image to a Region using the Control Panel](https://docs.digitalocean.com/products/custom-images/how-to/add-regions/#add-a-custom-image-to-a-region-using-the-control-panel)

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