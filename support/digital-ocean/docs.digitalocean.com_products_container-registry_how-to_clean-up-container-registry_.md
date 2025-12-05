---
url: "https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/"
title: "How to Free Up Space in Your Container Registry | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/container-registry.9233118a7fd14376bbb94aedab28b1762ed7cb822f6df9ae7f66db21052e45d6.svg)Container Registry](https://docs.digitalocean.com/products/container-registry/)
- [Getting Started](https://docs.digitalocean.com/products/container-registry/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/)
  - [Deploy Image to Cluster](https://docs.digitalocean.com/products/kubernetes/getting-started/deploy-image-to-cluster/)
- [How-Tos](https://docs.digitalocean.com/products/container-registry/how-to/)
  - [Create Registry](https://docs.digitalocean.com/products/container-registry/how-to/create-registry/)
  - [Use Docker and Kubernetes](https://docs.digitalocean.com/products/container-registry/how-to/use-registry-docker-kubernetes/)
  - [Clean Up Container Registry](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/)
  - [Integrate with CI/CD](https://docs.digitalocean.com/products/container-registry/how-to/set-up-ci-cd/)
  - [Enable Push-to-Deploy](https://docs.digitalocean.com/products/container-registry/how-to/enable-push-to-deploy/)
- [Reference](https://docs.digitalocean.com/products/container-registry/reference/)
  - [API Reference (Container Registry)](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Container-Registry)
  - [API Reference (Container Registries)](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Container-Registries)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/registry/repository/)
- [Details](https://docs.digitalocean.com/products/container-registry/details/)
  - [Features](https://docs.digitalocean.com/products/container-registry/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/container-registry/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/container-registry/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/container-registry/details/limits/)
- [Support](https://docs.digitalocean.com/products/container-registry/support/)

- [How-Tos](https://docs.digitalocean.com/products/container-registry/how-to/)
- Clean Up Container Registry

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Free Up Space in Your Container Registry

Validated on 3 Dec 2021 • Last edited on 15 May 2025

The DigitalOcean Container Registry (DOCR) is a private Docker image registry that lets you store and manage private container images. DOCR integrates natively with Docker environments and DigitalOcean Kubernetes clusters.

## Manage Images and Tags

To manually delete images and tags in your registry:

1. [Navigate to **Container Registry** in the control panel](https://cloud.digitalocean.com/registry).

If you have a live registry and you have pushed images to it, the images are listed here.

2. Click the plus, **+**, next to a repository to see its image versions and each version’s tags. You can also see untagged images here, which we recommend deleting manually or through [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection).


![List of image versions](https://docs.digitalocean.com/screenshots/container-registry/image-versions.5597e6bf74293f058f7fde7f4a21c38608f03ad96a6125b1b5b56df7015544e3.png)

3. Choose whether to delete digests or tags:
   - To delete a digest, click the checkbox next to the image digest you want to delete, or click the checkbox to the left of the table’s header to select all digests. Then, click **Delete image(s)** at the top right of the table. In the **Delete digest(s)** window, enter your registry name in the **Registry name** field, and click **Destroy**.

     You can also delete the digest by clicking the **…** menu to the right of an image version and selecting **Delete Digest**. Enter your registry name in the **Registry name** field, and click **Destroy**.

     Deleting digests also deletes their associated tags.

   - To delete a tag, click the **…** menu to the right of an image version and select **Delete Tags** to open the **Delete tag(s)** window. If you want to also remove untagged images, select the **Delete this digest from the image history** checkbox. Enter your registry name in the **Registry name** field and click **Destroy**.

## Run Garbage Collection

When you manually delete an image manifest from the DigitalOcean Container Registry (DOCR), it may leave layer data that is no longer referenced by any manifest in your registry. These unused layers occupy space in your registry. You can check the amount of space being used in your registry in the control panel. Use garbage collection to clean up the unused image layers and free up storage in your registry.

### Considerations

- Your registry is temporarily put into a read-only mode while garbage collection is running.

- After entering read-only mode, DOCR must wait for any previous authentication for write operations to expire before starting garbage collection. This can take up to 15 minutes, depending on when the last write operation started.


### Run Garbage Collection in the Control Panel

In the control panel, you can monitor how much unused data your repository currently has and start garbage collection.

Go to [the registry page in the control panel](https://cloud.digitalocean.com/registry). In the **Repositories** tab, the **Garbage Collection** section displays how much unused data is currently being stored in your repository.

![Registry's storage space used and garbage collection](https://docs.digitalocean.com/screenshots/container-registry/registry-storage.03b5de145ffd8249c304ff578f10dd9426df698a9f505d5562e45f3295295c89.png)

If there is any unused data displayed, click **Empty garbage** to open the **Run garbage collection** window. If the repository is storing untagged image manifests, you can delete them during garbage collection by checking **Delete untagged manifests**. We recommend this option to free up even more storage in your repositories, as untagged image manifests are conventionally outdated and unused.

When you’re ready, click **Empty Garbage** to remove unused data from the repository.

![Garbage Collection window](https://docs.digitalocean.com/screenshots/container-registry/run-garbage-collection.e5a0002aa526ba1c12f556e7cbaebf2173246df5be45c6c61e045407c7e6e34f.png)

The **Repositories** tab displays when the garbage collection process is underway. You can cancel garbage collection before it completes by clicking **Cancel Garbage Collection**. If you cancel garbage collection, the **Repositories** tab displays how many blobs have already been deleted up to that point and how much space has been freed, and provides a link to view more details.

![Garbage Collection collecting unused data](https://docs.digitalocean.com/screenshots/container-registry/collecting-unused-data.1c14419e9b8b233f1c7b00255e81f4001cfcbe5e6c64a7ed155defe7b49dd3c7.png)

Once the garbage collection finishes, the **Garbage Collection** section displays that you have no unused registry data.

You can view all of a registry’s previous garbage collections in the **History** tab’s expandable list of registry events.

### Run Garbage Collection in the Command Line

You can manually start garbage collection using the [command line](https://docs.digitalocean.com/reference/doctl/reference/registry/garbage-collection/) and the [API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Container-Registry).

Run the `garbage-collection` command to start garbage collection on your container registry:

```bash
doctl registry garbage-collection start [--include-untagged-manifests] [<your-registry-name>]
```

The command initiates garbage collection and warns you that the registry is changed to read-only mode. The garbage collection starts once you confirm to proceed. The command also provides the UUID of the garbage collection. We recommend including the `--include-untagged-manifests` option since this ensures that untagged manifests are also deleted, thereby maximizing the amount of space freed by the garbage collection.

To retrieve information about the currently-running garbage collection, run the following command:

```bash
doctl registry garbage-collection get-active [<your-registry-name>]
```

To cancel any currently-active garbage collections for your registry, run the following command:

```bash
doctl registry garbage-collection cancel [<your-registry-name>] <gc-uuid>
```

To view a registry’s previous garbage collections, run the following command:

```bash
doctl registry garbage-collection list [<your-registry-name>]
```

In this article...

- [Manage Images and Tags](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#manage-images-and-tags)
- [Run Garbage Collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection)
  - [Considerations](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#considerations)
  - [Run Garbage Collection in the Control Panel](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection-in-the-control-panel)
  - [Run Garbage Collection in the Command Line](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection-in-the-command-line)

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