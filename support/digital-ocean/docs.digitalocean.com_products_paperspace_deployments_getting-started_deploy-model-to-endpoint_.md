---
url: "https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/"
title: "Deploy a Model to an Endpoint using Gradient | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/quickstart/)
    - [Deploy Model to Endpoint](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/deployments/how-to/)
    - [Create Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/create-deployments/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/deployments/how-to/view-deployment-metrics/)
    - [Delete Deployments](https://docs.digitalocean.com/products/paperspace/deployments/how-to/delete-deployments/)
    - [Use Images](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-images/)
    - [Use Integrations](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-integrations/)
    - [Use Secrets](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-secrets/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/deployments/how-to/manage-containers/)
    - [Use GitHub Actions](https://docs.digitalocean.com/products/paperspace/deployments/how-to/use-github-action/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/deployments/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Deployment Spec](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/)
    - [Autoscaling](https://docs.digitalocean.com/products/paperspace/deployments/reference/autoscaling/)
    - [Endpoint Security](https://docs.digitalocean.com/products/paperspace/deployments/reference/endpoint-security/)
    - [Health Checks](https://docs.digitalocean.com/products/paperspace/deployments/reference/health-checks/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/deployments/concepts/)
    - [Deployment Basics](https://docs.digitalocean.com/products/paperspace/deployments/concepts/deployment-basics/)
  - [Details](https://docs.digitalocean.com/products/paperspace/deployments/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/deployments/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/deployments/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/deployments/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/deployments/details/limits/)
  - [Support](https://docs.digitalocean.com/products/paperspace/deployments/support/)

- [Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
- [Getting Started](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/)
- Deploy Model to Endpoint

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Deploy a Model to an Endpoint using Gradient

Validated on 14 Dec 2023 • Last edited on 23 Jan 2025

Paperspace Deployments are containers-as-a-service that allow you to run container images and serve machine learning models using a high-performance, low-latency service with a RESTful API.

In this tutorial, you learn how to start deploying a model to an endpoint using Gradient.

## Introduction

[Gradient Deployments](https://gradient.run/deployments) lets us perform effortless model serving to an API endpoint.

During this tutorial we learn how to use Gradient to deploy a machine learning model using a high-performance, low-latency microservice with a RESTful API.

![Endpoint to reach a hosted Streamlit application](https://docs.digitalocean.com/screenshots/paperspace/gradient/gradient-deployment-project.0bdcb559d415cdb3e0698caae773926e8867dd51c538d416390a0dc20f0d25f9.png)

Gradient Deployments let you deploy a container image to an API endpoint for hosting or inference.

In [Part 1](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#part-1-deploy-a-simple-streamlit-application) of this tutorial, we’re going to deploy a generic version of [Streamlit](https://streamlit.io/) to an endpoint. This is an extremely quick exercise to demonstrate how quickly we can serve a container to an endpoint in Gradient.

In [Part 2](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#part-2-deploy-from-gradient-model-registry), we’re going to increase complexity and serve an inference endpoint. We first train a model with Gradient Workflows and then deploy it.

Let’s get started!

## Part 1: Deploy a Streamlit application

Gradient Tutorials: Getting Started with Gradient Deployments, Part 1 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting Started with Gradient Deployments, Part 1](https://www.youtube.com/watch?v=rmBfwCnhF9w)

Hello Paperspace

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

More videos

## More videos

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=rmBfwCnhF9w&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 2:38

•Live

•

In Part 1 of this tutorial, our goal is to deploy an application as fast as possible. Once we get a handle on the look and feel of a Deployment, we then move on to Part 2 during which we train and deploy an inference server capable of responding to a query.

I this first part, we’re going to use the [Streamlit](https://streamlit.io/) demo application that is available as a starter Deployment within the Gradient console.

Here is what we’re going to do:

- Create a new project in Gradient
- Create a Streamlit Deployment within this project
- Confirm that our new Deployment is online and functional

Let’s create our new project!

### Create a project

If we haven’t already created a project in the Gradient console, we need to do that first. We’re going to select `Create a Project` from the homepage of our workspace. Alternatively, if we already have a project that we’d like to use, we can select that project as well. We can create as many projects as we like no matter what service tier we’re on – so feel free to create a new project to keep things nice and tidy.

If we haven’t made a Project yet in Gradient, create a new one now. Here we’ve named our new project `Deployments Tutorial`. We add more than one Deployment to this project as we progress through his tutorial.

![Endpoint to reach a hosted Streamlit application](https://docs.digitalocean.com/screenshots/paperspace/gradient/welcome-to-gradient.48fdb4185649edce308be4b27624405e140786fba1a126a83becdf9337b025ee.png)

Great! We should now have a new project in Gradient with the name `Deployments Tutorial`.

After we create a new project, we’re going to create a new Deployment within that project.

### Create a Deployment using a basic template in the console

Let’s go ahead and create a Deployment within our project. Once we’re within the project in the UI (we can confirm this by seeing the name of our project in the top left along with the button to navigate back to `All Projects`) let’s tab over to the **Deployments** panel and click **Create**.

Let’s name our new Deployment `Streamlit Deployment` and then click **Deploy**. This generates a deployment using the pre-made deployment spec and options provided by Paperspace.

![Streamlit Deployment](https://docs.digitalocean.com/screenshots/paperspace/gradient/list-of-projects.fead738417f21f29b0dfec1823dfd9eb3d580095a929155e7b3adf54cd40990d.png)

Excellent! While our Deployment is spinning-up, let’s take a look at the Deployment spec that we ran:

![Deployment spec that uses Streamlit](https://docs.digitalocean.com/screenshots/paperspace/gradient/streamlit-specs.8120ab713d8b1770c0c8a00d7fae77645422c7bc431753a94c4fee7169fb354e.png)

The spec for this Deployment looks like this:

```
image: lucone83/streamlit-nginx
port: 8080
env:
  - name: ENV
    value: VAR
resources:
  replicas: 1
  instanceType: C4
```

Let’s break down our instructions to Gradient:

- `image` \- the [specified image](https://hub.docker.com/r/lucone83/streamlit-nginx) or container for Gradient to pull from DockerHub
- `port` \- the communication endpoint that the Deployment server should expose to the open internet
- `env` \- environment variables to apply at runtime
- `resources` \- machines to apply to this job

As we can see, there is a good amount of configuration options available. If we wanted to change the instance type, for example, we would need to modify the `resources` block. If we wanted to upgrade our processor to a C5 instance, for example, we would write:

```
resources:
  replicas: 1
  instanceType: C5
```

That’s all there is to it! For more information on the Deployment spec, be sure to [read the docs](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/).

Meanwhile, let’s see the result of our Deployment:

![Loading Streamlit on Gradient endpoint](https://docs.digitalocean.com/screenshots/paperspace/gradient/streamlit-deployment.6a8d1ef41e7533ab19151b1347779c46ab44f8991bc195cafa2648922d2ff076.png)

Excellent! It takes about 30 seconds for our Deployment to come up, but once it does the UI state changes to `Ready` and the link to our Streamlit Deployment brings us to a hosted endpoint where we can demo a number of Streamlit features.

We’ve now successfully launched our first Deployment!

In the next part of the tutorial we take a look at doing a more end-to-end Gradient Deployments project where we train a model first and then host it to an endpoint.

## Part 2: Deploy from Gradient Model Registry

Gradient Tutorials: Getting Started with Deployments, part 2 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting Started with Deployments, part 2](https://www.youtube.com/watch?v=voyqmlYOIH0)

Hello Paperspace

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=voyqmlYOIH0&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 7:09

•Live

•

In Part 2 of this tutorial, we are going to upload an ONNX model to Gradient and serve it to an endpoint as a Deployment. By the end of this section we can query the endpoint to run inference.

For Part 2 of this tutorial, we are going to reference [the sample ONNX model GitHub repository](https://github.com/gradient-ai/onnx-deployment) which contains the sample ONNX model as well as a sample Deployment spec.

To deploy a model endpoint, we first need to upload the model to Gradient. After that, we reference the model in our Deployment spec which allows us to serve the model as an endpoint.

### Download the model files from GitHub

The first thing we do is grab the model files from the demo repo and upload them as a model object in the Gradient user interface.

These are the model files we are looking to upload to Gradient:

```
/models/fashion-mnist/fashion-mnist.onnx
/models/fashion-mnist/fashion-mnist.py
```

The model files we need to download and then upload to Gradient are available in the `models/fashion-mnist` directory of the `onnx-deployment` repo, are also [available via the GitHub UI](https://github.com/gradient-ai/onnx-deployment/tree/main/models/fashion-mnist).

![Onnx GitHub repo](https://docs.digitalocean.com/screenshots/paperspace/gradient/github-model-files.c2e85aea1c8067966abe2e81f4718c4953567915a6d8291336cb57a1e0543b21.png)

We first need to download the files to our local machine before we can upload to Gradient. We can accomplish this from our local machine via the command line or via the GitHub user interface.

In the command line we can first `cd` into our local directory of choice. Here we use `/downloads`:

```
cd ~/downloads
```

Then we can use the `git clone` command to clone the repo to our local machine:

```
git clone https://github.com/gradient-ai/onnx-deployment.git
```

We can then open the repo that we downloaded and navigate to `onnx-deployment/models/fashion-mnist` to find our files.

Alternatively, if we prefer to use the GitHub UI, we can use the download button and then unzip the repo to the preferred destination on our local machine. The download button is located under the `Code` drop-down in the GitHub UI, as seen below:

![Download ZIP](https://docs.digitalocean.com/screenshots/paperspace/gradient/github-download-onnx-zip.7f6be9a78bcb0a0d34f57310485e3b6b90f3fbdee80ee34b6a607b601516ffb6.png)

Next, we’re going to upload the model files to Gradient as a model object.

### Upload the model to Gradient

To upload a model to Gradient, we first hop over to the `Models` tab within the Gradient console.

From here, we select `Upload a model` which brings up a window that allows us to select or drag-and-drop files to upload as a model.

![Upload our files to Gradient Deployments](https://docs.digitalocean.com/screenshots/paperspace/gradient/upload-onnx-model-files.521eef36550f1a08414defc0e38099575980b616f0e627f317a995ceb1928f9f.gif)

These are the steps we take in the `Upload a model` window:

- Drag and drop QTY 2 model files (`fashion-mnist.onnx` and `fashion-mnist.py`) from our local machine
- Toggle the drop-down menu `Select model type` and select ONNX
- Give our model a name – in this case we use **fashion-mnist**
- Select **Gradient Managed** as our `Storage provider`

By selecting **Gradient Managed**, we are telling Gradient that we’d like to use the native storage and file system on Gradient rather than setting up our own storage system.

All we have to do now is click `Upload` and wait for the model to be available, which should take a few moments.

![Locate Model name and Model ID](https://docs.digitalocean.com/screenshots/paperspace/gradient/model-name-id-onnx.302e641d11ca31e0ca28d04506f396e9e1a4eac985181c91e04dea8c81f67106.png)

At this point we should see that our model has both a name (in our case `fashion-mnist`) and a model ID (in our case `moajlgixhg68re`). Your own model name depends on the name you give your model, and the ID depends on the computer-generated ID that Gradient assigns you.

In any case, we need to reference these two pieces of information in the next step, so let’s be sure to hold on to them!

### Create another Deployment

Now we’re going to create another Deployment within the same project we used in Part 1 (which we titled `Deployments Tutorial`).

![New Deployment within the same project](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-new-deployment.1ccb40a85a249d70f3afcf353157cc901c51a363705b93665aee12d58c125e87.gif)

From the `Deployments` tab of the Gradient console, we first select `Create`.

Next, we use the `Upload a Deployment spec` text link to bring up the YAML spec editor.

By default, the spec looks like this:

![Default YAML spec](https://docs.digitalocean.com/screenshots/paperspace/gradient/default-yaml-spec-deployments.2baf6536645f3926820138c385df07efcbd73a585b95c4fefd1960d1b126671f.png)

Instead of the default spec, we’re going to overwrite the spec with our own spec as follows:

```
image: cwetherill/paperspace-onnx-sample
port: 8501
resources:
  replicas: 1
  instanceType: C4
models:
  - id: moajlgixhg68re
    path: /opt/models/fashion-mnist
```

Here is an explanation of the Deployment spec:

- `image` \- the [Docker image](https://hub.docker.com/r/cwetherill/paperspace-onnx-sample) or container that we want Gradient to pull
- `port` \- the port number we would like to open to the public web to make requests
- `resources` \- the machine we are specifying to run our Deployment – in this case a single instance (also known as a _replica_) of a C4 machine (see available machines [here](https://docs.digitalocean.com/products/paperspace/machines/))
- `models` \- the `id` and `path` of the model we would like to deploy

After a few minutes we should see that our instance is now running:

![Deployment is running when the Status reads Ready](https://docs.digitalocean.com/screenshots/paperspace/gradient/private-workspace-deployment.512171e4d2beb27676679cf3d909e2c332c4fd490ece7661346e962ca52a6f87.png)

Nice! We now have a Deployment that is up and running.

### Confirm the Deployment

To verify that this runtime is up and running, we can use a nifty helper endpoint that the Paperspace team included with the runtime, which is available at `<endpoint>/healthcheck`.

The `<endpoint>` parameter is available in the `Details` section of the Deployment. Here is a close-up of the details pane:

![URL of endpoint in the Details pane](https://docs.digitalocean.com/screenshots/paperspace/gradient/endpoint-callout.97163325b067e40b139b8d4fa1211910ad3cab6cc3844fd495cf063e89a875da.png)

Here’s what it looks like when we try the endpoint. We are going to use our endpoint and append `/healthcheck` to the URL since we know that this container has defined such a method.

Every Deployment generates a unique endpoint URL – for this reason we purposely do not provide the URL of the endpoint from this tutorial and instead ask the user to create a new Deployment to obtain a unique Deployment endpoint.

![visit <endpoint>/healthcheck to read the status of the model serving computer](https://docs.digitalocean.com/screenshots/paperspace/gradient/deployment-healthcheck.eeed0730caed2123a0ad0003e02003a3c90c07ee5a3524229f3aa7524c5d8d08.gif)

Our model server is running – excellent!

We can also `cURL` this endpoint from the command line on our local machine to achieve the same result. Here is what that command looks like:

```
curl https://d4f2a6b0206084221af768e5cfedb5dc4.clg07azjl.paperspacegradient.com/healthcheck
```

Let’s also try another method which has been made available to us in this demo repository by the Paperspace team. This method tells us about our metadata and we can find it at `<endpoint>/v1/models/fashion-mnist/metadata`.

We should see that this URL also produces a response – in this case the method allows us to inspect the request/response formats provided by the endpoint.

![inspect the request/response formats](https://docs.digitalocean.com/screenshots/paperspace/gradient/metadata-endpoint.f6940e769d51375e93ee6af1eacf725a855a4c38ec4753b756372a58df2c32b5.png)

If we’re using `cURL` in the terminal our command line entry would look like this:

```
curl https://d4f2a6b0206084221af768e5cfedb5dc4.clg07azjl.paperspacegradient.com/v1/models/fashion-mnist/metadata
```

Great! We’ve now successfully deployed the model that we uploaded previously and we’ve confirmed with two separate helper methods that the model server is running and that the endpoint request/response formatting is as follows:

```
{
   "signature_name":"serving_default",
   "inputs":{
      "image_data":{
         "dtype":"float"
      }
   },
   "outputs":{
      "class_probabilities":{
         "dtype":"float"
      }
   }
}
```

Next we’re going to query the endpoint in a notebook.

### Use Gradient Notebooks to query the endpoint!

Let’s go ahead and hit the endpoint now that we’ve successfully deployed our model. We do so with a [Gradient Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/) which allows us to view the image we are submitting to the endpoint via [matplotlib](https://matplotlib.org/).

First, we create a new notebook using the TensorFlow 2 template.

To create the notebook, return to the Gradient console. Ensuring we are in the same project (`Deployments Tutorial` in our case) as our Deployment, we then go to the `Notebooks` tab in the Gradient console and select `Create`.

![Create a notebook within the same team](https://docs.digitalocean.com/screenshots/paperspace/gradient/private-workspace-notebook.fca4ae8262e6b4c55f2aca2b8f10445c68763b378ef86f0e9ccea295ba32b375.png)

Let’s select the TensorFlow 2 runtime (currently `Tensorflow 2.6.0`) to use when querying our endpoint.

Next, let’s select a machine. Since we are running inference on the endpoint (and not in the notebook itself) we can run the lightest CPU-based machine available. Let’s select the `Free CPU` instance if it’s available. If the free instance is not available due to capacity, we can select the most basic paid CPU instance available.

![Create a notebook using the TensorFlow 2 runtime](https://docs.digitalocean.com/screenshots/paperspace/gradient/deployment-notebook.45d58752c3bb552148a6205a773a74a093ee8b875ab80efb811c82c3e163482e.gif)

We now take advantage of `Advanced options` when we create our notebook to tell Gradient to pull the notebook file that is located in the GitHub repo.

The link to the file which we use as the `Workspace URL` in `Advanced options` is as follows:

```
https://github.com/gradient-ai/onnx-deployment/blob/main/prediction-client.ipynb
```

After that we click `Start Notebook` and wait for our notebook to spin-up!

### Making requests from the notebook

When our notebook spins up, we should see something like this:

![Single file called prediction-client.ipynb](https://docs.digitalocean.com/screenshots/paperspace/gradient/notebook-prediction-client.d8bd79f691f1161b84ffaed807ade83eca67a4636adc6ade3de787aeb8a3e717.png)

Let’s go ahead and run the first cell which installs matplotlib.

Next, we need to input our Deployment endpoint as a replacement for the `{sys.argv[1]}` variable. If we need to get our Deployment URL once again, we can visit the Gradient console, then `Deployments`, then click the Deployment and copy the `Endpoint` parameter under `Details`.

When we have our Deployment endpoint, we drop it in as a replacement for the `{sys.argv[1]}` variable.

![replace the URL of the endpoint](https://docs.digitalocean.com/screenshots/paperspace/gradient/endpoint-notebook.0f36a0bfec6d0ab0012674d3e00fdce4973fa20fe4729b7bd551951ca66795fa.png)

Now we can run the notebook!

After we paste our unique Deployment endpoint into the notebook prediction request parameter, we can run the cell. We should then be able to generate a prediction.

![Generate a prediction](https://docs.digitalocean.com/screenshots/paperspace/gradient/running-notebook.be49d38a307caa2818bdb5279158eb00c678f4f72aea9bc22d8269d301771459.gif)

If everything works correctly, we should be able to generate a prediction. In our case, we correctly identified the image as an `Ankle boot`!

![Image of an ankle boot](https://docs.digitalocean.com/screenshots/paperspace/gradient/ankle-boot.6924dd1ef61cd6de46b994c4ff8014795733ecb85d2a0dece9b898f9ddd38b7a.png)

Success! Nice job identifying that ankle boot! We ran inference from an endpoint and returned the prediction to a notebook – awesome!

### What we’ve accomplished

In Part 2 of this tutorial, we’ve accomplished the following:

- We downloaded an [ONNX](https://onnx.ai/) model from the [example repo](https://github.com/gradient-ai/onnx-deployment) and uploaded it to Gradient as a new model
- We created a new Deployment which serves the uploaded model
- We confirmed the model endpoint is functional by hitting a few endpoints in the browser as well as via `cURL` requests in the terminal
- We then used Gradient Notebooks to pull in the `.ipynb` file from the demo repository and make requests to the endpoint
- We successfully predicted that an image of a shoe is indeed an ankle boot!

## What’s next?

Once a model is deployed to an endpoint with Gradient Deployments the possibilities are truly unlimited.

In Part 2 of this tutorial we used a notebook to query the endpoint so that we could visualize the image submitted to the endpoint with matplotlib. We could hit the endpoint from the command line of our local machine or from within an application we are writing.

We can also use Gradient Workflows to make a request to the endpoint, or we could use third party tools like [Postman](https://www.postman.com/) to make requests.

In short, there are a lot of possibilities. Whatever we decide to do next, the important thing is to go step by step and make sure each piece of the Deployment is working as you progress.

If you have any questions or need a hand getting something to work – please let us know! You can [file a support ticket](https://docs.digitalocean.com/products/paperspace/deployments/support/).

## Reference reading

- The [Deployments](https://docs.digitalocean.com/products/paperspace/deployments/) docs provide lots of good information
- The [Deployment Spec](https://docs.digitalocean.com/products/paperspace/deployments/reference/deployment-spec/) is a useful reference guide
- Browse a large number of Gradient tutorials and walk-throughs available on the [Paperspace blog](https://blog.paperspace.com/)

## Additional tutorials

- [Gradient Notebooks Tutorial](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
- [Gradient Workflows Tutorial](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/)
- End-to-end StyleGAN2 tutorial [blogpost](https://blog.paperspace.com/end-to-end-data-science-with-gradient-workflows-stylegan2/) and [GitHub repo](https://github.com/gradient-ai/StyleGAN2-with-Workflows)
- End-to-end recommender system tutorial
  - [Part 1: Posing a business problem](https://blog.paperspace.com/end-to-end-recommender-system-part-1-business-problem/)
  - [Part 2: Preparing the data](https://blog.paperspace.com/end-to-end-recommender-system-part-2-data-preparation/)
  - [Part 3: Building a TensorFlow model](https://blog.paperspace.com/end-to-end-recommender-system-part-3-building-tensorflow-model/)
  - [Part 4: Tuning the model for best performance](https://blog.paperspace.com/end-to-end-recommender-system-part-4-tuning-model-best-performance/)
  - [Part 5: Deploying the model into production](https://blog.paperspace.com/end-to-end-recommender-system-part-5-deploying-model-production/)
  - [Part 6: Conclusion and next steps](https://blog.paperspace.com/end-to-end-recommender-system-part-6-conclusion-next-steps/)

In this article...

- [Introduction](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#introduction)
- [Part 1: Deploy a Streamlit application](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#part-1-deploy-a-streamlit-application)
  - [Create a project](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#create-a-project)
  - [Create a Deployment using a basic template in the console](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#create-a-deployment-using-a-basic-template-in-the-console)
- [Part 2: Deploy from Gradient Model Registry](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#part-2-deploy-from-gradient-model-registry)
  - [Download the model files from GitHub](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#download-the-model-files-from-github)
  - [Upload the model to Gradient](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#upload-the-model-to-gradient)
  - [Create another Deployment](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#create-another-deployment)
  - [Confirm the Deployment](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#confirm-the-deployment)
  - [Use Gradient Notebooks to query the endpoint!](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#use-gradient-notebooks-to-query-the-endpoint)
  - [Making requests from the notebook](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#making-requests-from-the-notebook)
  - [What we’ve accomplished](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#what-weve-accomplished)
- [What’s next?](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#whats-next)
- [Reference reading](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#reference-reading)
- [Additional tutorials](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/#additional-tutorials)

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