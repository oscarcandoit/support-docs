---
url: "https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/"
title: "Container Registry Quickstart | DigitalOcean Documentation"
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

- [Getting Started](https://docs.digitalocean.com/products/container-registry/getting-started/)
- Quickstart

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Container Registry Quickstart

Validated on 3 Dec 2021 • Last edited on 17 Nov 2025

The DigitalOcean Container Registry (DOCR) is a private Docker image registry that lets you store and manage private container images. DOCR integrates natively with Docker environments and DigitalOcean Kubernetes clusters.

## Create a Registry

If you use the [Professional subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/), you can create a total of 10 registries per team.

To create a registry in the control panel:

1. Visit [the registry page](https://cloud.digitalocean.com/registry).

2. Enter a name for your registry. This name must:
   - Be unique across all DigitalOcean container registries.
   - Be no more than 63 characters in length.
   - Contain only lowercase letters, numbers, and/or hyphens.
   - Begin with a letter.
   - End with a letter or number.
3. Select your [datacenter region](https://docs.digitalocean.com/products/container-registry/details/availability/).

4. Select your [subscription plan](https://docs.digitalocean.com/products/container-registry/details/pricing/).

5. Click **Create Registry**.


To create a registry using the command-line:

1. [Install `doctl` and authenticate it with an API token](https://docs.digitalocean.com/reference/doctl/how-to/install/).

2. Use [the `registry create` command](https://docs.digitalocean.com/reference/doctl/reference/registry/create/) or [the `registries create` command](https://docs.digitalocean.com/reference/doctl/reference/registries/create/) to create your registry:



```bash
doctl registry create <my-registry-name> --region <region>
```


## Push to Your Registry

To push a Docker image to your registry:

1. [Install `doctl` and authenticate it with an API token](https://docs.digitalocean.com/reference/doctl/how-to/install/).

2. Use [the `registry login` command](https://docs.digitalocean.com/reference/doctl/reference/registry/login/) to authenticate Docker with your registry:


```
doctl registry login
```

3. Use the `docker tag` command to tag your image with the fully qualified destination path:


```
docker tag <my-image> registry.digitalocean.com/<my-registry>/<my-image>
```

4. Use the `docker push` command to upload your image:


```
docker push registry.digitalocean.com/<my-registry>/<my-image>
```


If you push a new image using an existing tag, the tag gets updated but the old image is still accessible by its digest and takes up space in your registry. To reduce your storage usage, you can [delete the untagged images](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#manage-images-and-tags) and then run [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/).


Note
To avoid image caching and ensure the correct version always deploys, we recommend tagging your images with a unique SHA digest.

## Use Images in Your Registry with Kubernetes

To create containers from the images stored in your registry from the control panel:

1. Visit [the registry page](https://cloud.digitalocean.com/registry) and click the **Settings** tab.
2. In the **DigitalOcean Kubernetes integration** section, click **Edit** to display the available Kubernetes clusters.
3. Select the clusters and click **Save**.

The default service account in each of those namespaces is updated to include the secret in its image pull secret.

## Use Images in Your Registry with App Platform

1. Visit [the **Apps** page](https://cloud.digitalocean.com/apps).

2. Click **Create App** if starting from scratch, or click an existing app to add your container image to it.
   - If adding an image to an existing app, click the **Create** button and choose **Create Resources From Source Code**. You can add a **Web Service**, **Worker**, **Job**, or **Functions**.
3. Select **DigitalOcean Container Registry** as the source for your code, choose the image you would like to use from the **Repository** drop-down, and select the tag of the image you would like to deploy.
   - By default your application will be re-deployed whenever you push a new image to this tag. Uncheck the **Autodeploy** option to disable this feature.

4\. Configure resources for your app.
\- On the **Resources** page, click the **Edit** link beside app resource components to configure their details such as the component’s instance size (the container size and its cost), HTTP routes, the run command, or the HTTP port. App Platform displays build and run commands that it detected, which you can customize as needed. Refer to the cloud-native buildpacks for instructions for specific buildpacks. For Dockerfile-based builds, entering a run command overrides the Dockerfile’s entrypoint.
\- Add additional resources by expanding the **Add Resource (Optional)** section and selecting the **Detect from Source Code** option. Then, click **Add**. If your app needs a database, select the **Database** option to add a dev database or an existing managed database from your DigitalOcean account. The connection details for your database are accessible via environment variables so that you can access them in your code.

```
Click **Next**.
```

5. If you want to use resource- and app-level environment variables, on the **Environment** page, click **Edit** to supply them. Click the **Encrypt** checkbox to ensure a variable’s value is encrypted in the App Spec. Click **Next**.
6. If you want to change the default name or project for your app, or choose the region where you would like your app to be hosted, click **Edit** on the **Info** page. Click **Save** and then click **Next**.

   - The option to select a region is not available for static sites. Static components are served on DigitalOcean’s [global CDN](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability).
7. Review your app’s resources, environment variables and billing information on the **Review** page and then click **Create Resources**.

Once your app deploys, you can view the app at the URL at the top of the app’s **Overview** page.

When using images in App Platform:

- Use `doctl apps create-deployment` to always deploy the latest image. This command triggers a new deployment with the current container image, even if the image tag hasn’t changed.
- Use `doctl apps create --upsert` or `doctl apps update` to update App Spec configurations (like environment variables or scaling rules) without deploying a new image. These commands are best when you’re not changing the image itself.

If you still want to force a new deployment with `apps update`, you can:

- Change the image tag (preferably using a SHA-based tag).
- Or, trigger `apps create-deployment` after updating the spec.

We strongly recommend using SHA digests for image tags to prevent caching issues and guarantee the correct image version is deployed.

## Manage Images and Tags

To view and delete images in your registry:

1. [Navigate to **Container Registry** in the control panel](https://cloud.digitalocean.com/registry).

If you have a live registry and you have pushed images to it, they are listed.

2. Click the plus, **+**, next to each repository to see its image versions and each version’s tags. You can also see untagged images here, which we recommend deleting through [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection).

3. Choose whether to delete digests or tags:
   - To delete digests, click the **…** menu to the right of an image version and select **Delete Digest**. Enter your registry name and click **Delete** to confirm.

     Deleting digests also deletes their associated tags.

   - To delete tags, click the **…** menu to the right of an image version and select **Delete Tags**. Enter your registry name and click **Delete** to confirm.

Deleting an image by its tag or manifest does not delete the image layers. We recommend running [garbage collection](https://docs.digitalocean.com/products/container-registry/how-to/clean-up-container-registry/#run-garbage-collection) to automatically delete these image layers and all untagged manifests.

## Delete Your Registry

To delete your registry using the control panel:

1. [Navigate to **Container Registry** in the control panel](https://cloud.digitalocean.com/registry).
2. Click the **Actions** drop-down, and select **Destroy**.

To delete your registry on the command-line, use [the `registry delete` command](https://docs.digitalocean.com/reference/doctl/reference/registry/delete/):

```
doctl registry delete
```

In this article...

- [Create a Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#create-a-registry)
- [Push to Your Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#push-to-your-registry)
- [Use Images in Your Registry with Kubernetes](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#use-images-in-your-registry-with-kubernetes)
- [Use Images in Your Registry with App Platform](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#use-images-in-your-registry-with-app-platform)
- [Manage Images and Tags](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#manage-images-and-tags)
- [Delete Your Registry](https://docs.digitalocean.com/products/container-registry/getting-started/quickstart/#delete-your-registry)

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