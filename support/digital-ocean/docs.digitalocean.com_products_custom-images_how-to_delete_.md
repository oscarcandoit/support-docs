---
url: "https://docs.digitalocean.com/products/custom-images/how-to/delete/"
title: "How to Delete Custom Images | DigitalOcean Documentation"
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
- Delete Custom Images

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Delete Custom Images

Validated on 5 Jun 2019 • Last edited on 18 Dec 2024

Custom images are Linux and Unix-like images you import to DigitalOcean. You can create Droplets based custom images, which lets you migrate and scale your workloads without spending time recreating your environment from scratch.

## Delete a Custom Image using the Automation

How to Delete a Custom Image Using the DigitalOcean CLI

1. [Install `doctl`](https://docs.digitalocean.com/reference/doctl/how-to/install/), the official DigitalOcean CLI.
2. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with `doctl`.
3. Use the token to grant `doctl` access to your DigitalOcean account.




```shell
doctl auth init
```

4. Finally, run `doctl compute image delete`. Basic usage looks like this, but you can [read the usage docs](https://docs.digitalocean.com/reference/doctl/reference/compute/image/delete/) for more details:




```shell
doctl compute image delete <image-id> [flags]
```



The following example deletes an image with the ID `386734086`:




```shell
doctl compute image delete 386734086
```


How to Delete a Custom Image Using the DigitalOcean API

1. [Create a personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and save it for use with the API.
2. Send a DELETE request to [`https://api.digitalocean.com/v2/images/{image_id}`](https://docs.digitalocean.com/reference/api/digitalocean//#operation/images_delete).

### cURL

Using cURL:

```shell
curl -X DELETE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/images/7938391"
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

    _, err := client.Images.Delete(ctx, 7938391)
}
```

### Ruby

Using [DropletKit](https://github.com/digitalocean/droplet_kit), the official DigitalOcean API client for Ruby:

```ruby
require 'droplet_kit'
token = ENV['DIGITALOCEAN_TOKEN']
client = DropletKit::Client.new(access_token: token)

client.images.delete(id: 7938391)
```

### Python

Using [PyDo](https://github.com/digitalocean/pydo), the official DigitalOcean API client for Python:

```python
import os
from pydo import Client

client = Client(token=os.environ.get("DIGITALOCEAN_TOKEN"))

resp = client.images.delete(image_id=134215)
```

## Delete a Custom Image using the Control Panel

To delete a custom image via the [control panel](https://cloud.digitalocean.com/), in the left menu, click **Backups & Snapshots**, then click the **Custom Images** tab.

![Custom Images tab in the control panel](https://docs.digitalocean.com/screenshots/custom-images/custom-image-tab.f3b0a1bf92d80f100eef7cc9caf6d014dbc7e329f76486f71d6beeb4e1dbc022.png)

Click the **More** menu for the custom image you want to delete, then choose **Delete**. A confirmation window titled **Confirm delete item** opens. Click **Delete Item** to confirm the deletion

Droplets you’ve created from a custom image are not deleted when you delete the image from your account. You can [destroy Droplets](https://docs.digitalocean.com/products/droplets/how-to/destroy/) from the control panel separately.

In this article...

- [Delete a Custom Image using the Automation](https://docs.digitalocean.com/products/custom-images/how-to/delete/#delete-a-custom-image-using-the-automation)
- [Delete a Custom Image using the Control Panel](https://docs.digitalocean.com/products/custom-images/how-to/delete/#delete-a-custom-image-using-the-control-panel)

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