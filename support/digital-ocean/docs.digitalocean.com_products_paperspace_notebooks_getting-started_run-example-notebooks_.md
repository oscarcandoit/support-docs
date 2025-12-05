---
url: "https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/"
title: "Create and Run Example Gradient Notebooks with Fast.ia and CLIP-PixelDraw | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/quickstart/)
    - [Create a Jupyter Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/create-jupyter-notebook/)
    - [Run Example Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/)
    - [Create Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-notebooks/)
    - [Swap Machines](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/swap-machines/)
    - [Fork Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/fork-notebooks/)
    - [Share Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/share-notebooks/)
    - [Add Run on Gradient Badge](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-run-on-gradient/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/create-datasets/)
    - [Mount Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/mount-datasets/)
    - [Transfer Datasets and Files](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/transfer-data-and-files/)
    - [Connect Data Sources](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-data-sources/)
    - [Set Up Storage Providers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/add-storage-providers/)
    - [Manage Storage](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-storage/)
    - [Use Terminal](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-terminal/)
    - [Connect to Kernel](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/connect-remote-kernel/)
    - [Restart Kernels](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/restart-kernels/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/manage-containers/)
    - [View Logs](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-logs/)
    - [View Metrics](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/view-notebook-metrics/)
    - [Use TensorBoard](https://docs.digitalocean.com/products/paperspace/notebooks/how-to/use-tensorboard/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/notebooks/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/)
    - [Notebook Templates](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/)
  - [Details](https://docs.digitalocean.com/products/paperspace/notebooks/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/notebooks/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/notebooks/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/notebooks/details/limits/)
    - [Public Datasets](https://docs.digitalocean.com/products/paperspace/notebooks/details/public-datasets/)
    - [Storage Architecture](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/)
    - [Storage Types](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/notebooks/support/)

- [Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
- [Getting Started](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/)
- Run Example Notebooks

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Create and Run Example Gradient Notebooks with Fast.ia and CLIP-PixelDraw

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Notebooks are a web-based Jupyter IDE with shared persistent storage for long-term development and inter-notebook collaboration, backed by accelerated compute.

Notebooks are an [increasingly popular](https://storage.googleapis.com/kaggle-media/surveys/Kaggle's%20State%20of%20Machine%20Learning%20and%20Data%20Science%202021.pdf) abstraction in machine learning. Notebooks eliminate development steps to create a machine learning environment and reproducible and collaborative. [Gradient Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/) are a web-based Jupyter IDE with high-powered GPUs which use a pre-build runtime from Paperspace. You can create and run your own Gradient notebook by importing your files and container with advanced options.

![Create first Notebook](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-notebook-intro.589c89cc0a1e80cf2e0c3768d6a08b57be1f0f978d80bb19c583bfa1a908dd4e.gif)

If you run [Jupyter](https://jupyter.org/try) Notebooks or [JupyterLab](https://pypi.org/project/jupyterlab/) on other managed cloud services or on your local machine, Gradient Notebooks combine the functionality of Jupyter with an additional set of features:

- Persistent storage
- Free-tier or Paid-tier CPU and GPU instances
- Unlimited duration runtimes for paid instances
- Pre-configured templates or your own custom Docker image

## Creating and Running a Fast.ai Notebook

With a Fast.ai notebook, your Gradient notebook runs on the latest version of [Practical Deep Learning for Coders](https://course.fast.ai/) course from [Fast.ai](https://www.fast.ai/). First create or choose a Gradient Project.

Gradient Tutorials: Getting started with Gradient Notebooks, Part 1 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting started with Gradient Notebooks, Part 1](https://www.youtube.com/watch?v=Nglj0OY2rIc)

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

[Watch on](https://www.youtube.com/watch?v=Nglj0OY2rIc&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 6:19

•Live

•

Then create a notebook by selecting the **Notebooks** tab and click **Create**.

![Create new Notebook](https://docs.digitalocean.com/screenshots/paperspace/gradient/create-notebook.7203a91b225c511c3e5afdf2c59141a241df716d436edfbc13b3eb9e57d5f8e1.png)

For configurations, select your machine and either use the prebuilt runtime or select a runtime. Afterwards click **Paperspace + Fast.ai** to start a Fast.ai notebook which instructs Gradient to copy the contents of a specific Fast.ai repository that contains the Fast.ai exercise files over to your notebook. Then, it runs those files on a machine instance pre-installed with compatible dependencies.

![fast.ai runtime](https://docs.digitalocean.com/screenshots/paperspace/gradient/select-fastai.8c29478971195427b48e92bf2ab086d58050d500ace7190f30ac66c4bddc996c.gif)

There are several [machine options to run your notebook](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/), including `Free-CPU` and `Free-GPU` instances.

![Free-GPU instance](https://docs.digitalocean.com/screenshots/paperspace/gradient/select-machine.8b401cea4f959fdf055f7fdbf01ff68a5a6712336640ca872a72176735846911.png)

After creating your notebook, go to the Gradient Notebooks IDE. You can look at the status bar which shows how long your notebook is loading into the IDE.

![Status bar](https://docs.digitalocean.com/screenshots/paperspace/gradient/set-up-instance.8e8301ae9238b802d8d539f75dde6a6f37011594ac885860059e4bcc922e10cb.gif)

Once the notebook is in the `Running` state, the Gradient Notebooks IDE looks like this:

![Notebook ready](https://docs.digitalocean.com/screenshots/paperspace/gradient/notebook-started.8507875d4326d1c9c6164d9ba0ca3764a5a69fc89bf5d8867ec617af0f39c547.png)

When running commands, check the bottom bar of the IDE as this area shows you what the machine is doing as it displays the information and metrics.

![Idle Notebook](https://docs.digitalocean.com/screenshots/paperspace/gradient/status-bar.48e5d19e3be9fcd2a5f942a789d133ae587920afc208b74132c44380adda508c.png)

You can run cells from the `01_intro.ipynb` file which shows the cells executing like this:

![Run single cell](https://docs.digitalocean.com/screenshots/paperspace/gradient/run-notebook.22596e551a794c7692410b18dcfc0b4aa7a2a9e0938aa1c180f8bec7547066b9.gif)

Next, you add `!pip install` statements in your cell by cutting the `!pip install` command from the existing cell, and using the **+** button to then click **Insert Code**. Then, you paste the `pip` command into the newly created cell.

![Create a new code or markdown cell](https://docs.digitalocean.com/screenshots/paperspace/gradient/add-notebook-cell.9f06f79ca08961187e164ce5928c9579241bcb7998206a943f2dccb2e6576b21.gif)

You can select **Insert Markdown** which adds an explanatory or reference block of text to your `ipynb` file.

Gradient notebooks support editing standard code files as well as full autosave capabilities. You can modify the contents of the `requirements.txt` file which ships with the Fast.ai learning materials:

![edit non-ipynb files](https://docs.digitalocean.com/screenshots/paperspace/gradient/requirements-txt.27ddb408bb67f780b426d36c55b5745df73261dded5ea75f81e5bd3ed1eb53ff.png)

You can run your notebook only within six-hour sessions on a free instance as the notebook shuts down after six hours of use. However, Gradient must have the capacity to run your session. If you need infinite runtimes or faster GPU instances, you need to update your [Gradient subscription](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/) and recreate the notebook.

When you want to shutdown your notebook, you can let the auto-shutdown timer expire or shut down the instance manually via instance panel in the sidebar or via the **Stop Instance** button in the top status bar.

![Instance selector](https://docs.digitalocean.com/screenshots/paperspace/gradient/stop-instance.127f551e750d8bd393761676f8467e258a11ef92b4488ee197c1298f92ce3c51.gif)

If the instance is not shut down manually, the auto-shutdown timer turns off the Free-GPU instance at the six hour mark. Paid instances auto-shutdown if an auto-shutdown interval is specified. The default is 12 hours for paid instances.

## Creating and Running a Custom CLIP-PixelDraw Notebook

You use [CLIP and PixelDraw](https://github.com/gradient-ai/ClipIt-PixelDraw) to generate imaginative clip-art piece from a string of text. If you are on the Gradient free tier, stop the notebook instance so that you do not exceed the limit of QTY 1 concurrent running notebooks on the free plan. If you have the upgraded Gradient account, you do not need to shut down running notebook instances.

You can read more on Gradient tier limits through this [pricing overview](https://docs.digitalocean.com/products/paperspace/notebooks/details/pricing/) under `Compare Plans`.

Gradient Tutorials: Getting started with Gradient Notebooks, Part 2 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting started with Gradient Notebooks, Part 2](https://www.youtube.com/watch?v=iv5re-8_iR0)

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

[Watch on](https://www.youtube.com/watch?v=iv5re-8_iR0&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 6:34

•Live

•

On the Gradient console, you can update your project name to illustrate that a new notebook is added to it:

![Rename project](https://docs.digitalocean.com/screenshots/paperspace/gradient/rename-project.2f7ced316a51ae2f1270aa639861d7063ed7afc03260d738c0ac456117dab60f.gif)

Then, click **Create** to show the `Create a notebook` screen:

![Second notebook](https://docs.digitalocean.com/screenshots/paperspace/gradient/second-notebook-create.2016b5be809bfa175b2a3890c1b78cea71721bad867784a2476e966ecf4b0e8c.gif)

There are a several runtimes available when switching from `Recommended` to `All` in the runtime selector. Gradient frequently adds support for new runtimes. In Gradient, a [runtime](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/) is a specific workspace combination, which is pulled from a git repository via like GitHub, and a container, which is pulled from a container registry via like DockerHub.

![Prebuilt runtimes](https://docs.digitalocean.com/screenshots/paperspace/gradient/tile-runtime-selector.961dc52637e66714466cff9291133ca5972bf5b4bb77132d982234cc5a2960df.png)

If you toggle the tile called `Transformers + NLP` from [Hugging Face](https://huggingface.co/), and scroll down to the `Advanced Options` slider at the bottom of screen and toggle it on, you can see the specific workspace combination in the advanced options:

![Transformers + NLP tile](https://docs.digitalocean.com/screenshots/paperspace/gradient/hugging-face-tile.ee9c69cb38e07acc24aed33210558abb2b33c6a7bc4b5ae0bf9904487f38b085.png)![Workspace and Container parameters](https://docs.digitalocean.com/screenshots/paperspace/gradient/advanced-options-notebook.94dac81a4c8757aebeb2fdfe9e71ae321e434568badb732e99bb1aeea7bbf29f.png)

This particular Hugging Face tile is specifying `Workspace URL`, `Container Name`, and `Command`.

- `Workspace URL`: Git repository URL that Gradient uses to clone into the notebook.
- `Container Name`: Location of the image on [Docker Hub](https://hub.docker.com/) that Gradient loads into the notebook.
- `Command` _(Advanced)_: Bash command that is run on the Jupyter kernel on instantiation.

A runtime then is a combination of `Workspace URL` and `Container Name` that results in some files from a repository running against a container image.

For the notebook, the implementation of [CLIP](https://openai.com/blog/clip/) from OpenAI and PixelDraw from the [PixRay project](https://github.com/dribnet/pixray) helps create synthetic artwork from a inputted text prompt. [_Dune_](https://en.wikipedia.org/wiki/Dune_(novel)) is used for the text prompt for the image generator.

Select the highest GPU instance then toggle to **Advanced options** and enter the following parameters:

- `Workspace URL`: `https://github.com/gradient-ai/ClipIt-PixelDraw.git`
- `Container Name`: `paperspace/clip-pixeldraw:jupyter`

The workspace contains a number of files related to generative art, and the container contains a number of libraries pre-installed.

![Advanced options clip](https://docs.digitalocean.com/screenshots/paperspace/gradient/advanced-options-clip.6d69d8c0b53af6fd16b882615bb6e05cc65fd71ca15f91b6525a76a1749b98c3.png)

Ensure the locations of the workspace and container are copy and pasted the **Advanced options** section of the **Create a notebook** workflow. Once you initialized your notebook, it looks like this:

![Running clip](https://docs.digitalocean.com/screenshots/paperspace/gradient/running-clip.0fe0dc5f9e407429c6c0da98699a36da91d3e6bc59dc1072924d5ac628ad0267.png)

Run the following `!git clone` commands at the top of the notebook:

![Start git clone](https://docs.digitalocean.com/screenshots/paperspace/gradient/start-clip.7298cd41ac680bf0b87cebb32866fdd0fec038bfd0059000ebcd1d4bfe789e40.gif)

Open the `pixeldraw.py` file using the file navigator on the left to see the prompt currently used on line 15. By default that prompt is set to the following:

```
Paperspace.com helps you do machine learning #pixelart
```

Change the prompt that describes a sand-covered planet from _Dune_:

```
On the desert planet of Arrakis, the spice must flow!
```

![Change default prompt](https://docs.digitalocean.com/screenshots/paperspace/gradient/clip-prompt.3a7800c54f72039a6df656d43f1b287f485fbf380cd3eb310036647af1206640.gif)

Go to the `.ipynb` file and run the following cell:

```
!python pixeldraw.py
from IPython.display import Image
Image(filename='output.png')
```

This runs the modified code in `pixeldraw.py`.

Depending on the GPU instance in use, processing could take 8-20 minutes.

![Clip art results](https://docs.digitalocean.com/screenshots/paperspace/gradient/clip-loading.bc71a9a68588529bdfc18767610a54c435ffe085b34b1607bdf7a573eaec7aca.gif)

After processing, this is the following output:

![Clip art](https://docs.digitalocean.com/screenshots/paperspace/gradient/clip-output-spice.3941d5f5d20923f7c09a71bacdbc0a1c86a7270a7b7e1ef07f099bdd1e6595cb.png)

It is recommended that the repository or a container is explicitly specified. For example, if you decided to use the [new CLIP implementation](https://paperswithcode.com/paper/styleclipdraw-coupling-content-and-style-in) which uses a different artistic technique to generate artwork, then you could create a new notebook with `Workspace URL` in `Advanced options` set to:

```
https://github.com/pschaldenbrand/styleclipdraw
```

This would pull the target files into an instance running the default Gradient container.

Afterwards, you would fork the repository to a new public or private repository and modify it. You could also create your own Docker container pre-loaded with new dependencies and submit that to a public or private registry.

For inspiration, it is recommended to read the [Paperspace blog](https://blog.paperspace.com/) which has novel implementations that often include code and demo notebooks. For browsing a collection of starter notebooks created for Gradient, look into the [ML Showcase](https://ml-showcase.paperspace.com/). It is recommended to learn more about [runtimes](https://docs.digitalocean.com/products/paperspace/notebooks/concepts/notebook-templates/), [machines](https://docs.digitalocean.com/products/paperspace/machines/), including free tier instances, and [Persistent Storage](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/) which is automatically mounted at `/storage`.

In this article...

- [Creating and Running a Fast.ai Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/#creating-and-running-a-fastai-notebook)
- [Creating and Running a Custom CLIP-PixelDraw Notebook](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/#creating-and-running-a-custom-clip-pixeldraw-notebook)

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