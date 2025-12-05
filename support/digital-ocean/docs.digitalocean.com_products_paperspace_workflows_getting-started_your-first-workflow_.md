---
url: "https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/"
title: "Set Up Your First Workflow | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/)
    - [Set Up Your First Workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/workflows/how-to/)
    - [Manage Workflows](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-workflows/)
    - [Create Datasets](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/)
    - [Use Custom Containers](https://docs.digitalocean.com/products/paperspace/workflows/how-to/manage-containers/)
    - [Connect to GitHub App](https://docs.digitalocean.com/products/paperspace/workflows/how-to/connect-to-github-app/)
    - [Use Model Repository](https://docs.digitalocean.com/products/paperspace/workflows/how-to/use-model-repo/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/workflows/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Gradient API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/gradient/)
    - [Workflow Spec](https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/)
    - [Gradient Actions](https://docs.digitalocean.com/products/paperspace/workflows/reference/gradient-actions/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/)
    - [Environment Variables](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/)
    - [Inputs and Outputs](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/)
    - [Using YAML for Data Science](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/)
  - [Details](https://docs.digitalocean.com/products/paperspace/workflows/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/workflows/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/workflows/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/workflows/details/availability/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/workflows/details/limits/)
  - [Support](https://docs.digitalocean.com/products/paperspace/workflows/support/)

- [Workflows](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Getting Started](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/)
- Set Up Your First Workflow

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Set Up Your First Workflowprivate

Validated on 14 Dec 2023 • Last edited on 25 Oct 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

## Introduction

[Gradient Workflows](https://www.paperspace.com/gradient/workflows?_gl=1*1t15gqu*_gcl_au*MTUyNzUzMTA4LjE2OTY2MTU2NzY.) provides a way to automate machine learning tasks. Workflows brings together powerful Gradient GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/workflow-running.6494c0484d7a788d17c520f2aae443ed98ed8060f08c03ebdfcf676b28e039c8.gif)

Gradient Workflows is based on [Argo Workflows](https://argoproj.github.io/workflows/), which is an open-source and container-native delivery tool for Kubernetes.

Several MLOps platforms on the market promise the ability to define pipelines with code. What Gradient Workflows does best is allow us to manage multiple layers of complexity – from machine learning code, to development and production dependencies, to machine infrastructure such as GPU nodes and storage providers – all from a single pane of glass.

Here are some other features that distinguish Gradient Workflows from other MLOps solutions:

- Use any [machine](https://docs.digitalocean.com/products/paperspace/machines/) within a Workflow
- Define a separate machine type for each step of a Workflow to improve performance and conserve costs
- Connect Workflows to GitHub and trigger Workflow runs from a git commit
- Write your own jobs for use within Gradient Workflows

Don’t worry if this doesn’t make sense yet. Workflows has a steeper learning curve than Notebooks due to the natural complexities of shipping machine learning applications to production.

As you progress through the tutorial, start with a basic use case and add complexity gradually. This way, you can get a full understanding of workflows from a toy pipeline through to a production application that is deterministic, reproducible, and fit for external consumption.

## Part 1: Setting up your first Workflow

Gradient Tutorials: Getting Started with Gradient Workflows, Part 1 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting Started with Gradient Workflows, Part 1](https://www.youtube.com/watch?v=_Qzd1xVACqI)

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

[Watch on](https://www.youtube.com/watch?v=_Qzd1xVACqI&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 5:25

•Live

•

The first task in this tutorial is to create and run a sample workflow on Gradient. You can use one of the starter workflows that Gradient provides in the console.

By the end of this section, you will have used a workflow to train a model to generate a realistic human face using [StyleGAN2](https://github.com/NVlabs/stylegan2), which is a popular library for generative image modeling from NVIDIA.

This section uses the following steps:

- Create a new project in Gradient
- Connect this Gradient project to GitHub so that you can version the workflow in source control
- Create a new workflow that copies and runs a StyleGAN2 demo
- Inspect the results and confirm that you find machine-generated images of human faces

### Create a Project

If you haven’t already created a project in the Gradient console, you need to do that first. From the Gradient console, select **Create A Project** and give your project a name.

Name your project. In this tutorial, its name is _Face Generator._

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-gradient-project.78f64ec83e2e64f8a4786a4b98654008abbbbf585c3f75dfe1e66ea8bf139e76.gif)

### Connect to GitHub

From the **Workflows** tab, select **Create** to initialize your first Workflow.

At this point, Gradient prompts us to grant access to GitHub if you have not already done so.

You need to give Gradient access to at least one GitHub repository during this step. This is because Gradient Workflows is designed to keep code version-controlled during the application development process. Part 1 of this tutorial writes the Gradient Workflow to a new repository in GitHub automatically.

In Part 2, you can use the GitHub integration to trigger workflow runs. This is a powerful MLOps capability that you can explore when you push code from your local machine to your remote GitHub repository.

Let’s go ahead and make the GitHub connection. When you connect GitHub, you unlock the Workflows UI which allows you to proceed.

Note
Gradient does **not** require access to an entire GitHub organization or account. Granting access to a single repo is enough to grant write privileges to Gradient for the purposes of this tutorial.
![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-workflow.d96a37b04f7208ee89a0c4688e002c50dc34b10e5e733fe72a97bc1b8456438d.png)

When prompted, grant access to one or more GitHub repos.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/auth-github.4271d933fa45512b706d29783bd034505b3ce58c3cf89d91cef937f23dd29e14.png)

### Create a workflow using a basic template tile in the console

Once you connect GitHub, unlock the **Get started with workflows** page.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-new-workflow.3e8abfeb5fa600d819c91ebc88569cd0f2d53848d6ba68b2fc6029ae438b6900.png)

You now have the option to run either a sample workflow or to set up your own custom workflow.

You can make a custom workflow later in this tutorial, but for now, select the [StyleGAN2](https://github.com/nvlabs/stylegan2) template tile.

Then select your GitHub account under **Select account or organization**.

Give your workflow a **Repository name** for writing to GitHub. In your case, name your repository “Gradient Workflows Tutorial.”

Click the **Create Workflow** button to begin the creation process.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/new-workflow-initializing.8e347c23151cbf4174071b5dbee157712be7a73158cbd85c7c906f1f8e83c2f4.gif)

As the sample workflow initializes, notice that the workflow consists of QTY 2 jobs:

- `CloneRepo`
- `StyleGan2`

Each job represents a discrete action or step in the workflow syntax. In the UI, each job is represented by a light green box. You can reveal more information about the job – including logs, data, and so forth – by clicking it.

### Interpreting the results of your first workflow

The workflow has completed successfully when the message reads **Succeeded** in the left sidebar. To confirm this, verify that the boxes containing each of your jobs (`CloneRepo` and `StyleGan2`) now display the checkmark symbol.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/workflow-success.4ccfb6c31d0a04add132248e9276ebdf756055b5081cc3b388d00e7fb1aa821f.png)

Each job within Gradient Workflows has its own set of logs. To reach the logs, click into each of the green boxes and tab over to the `Logs` section.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/swap-to-logs.2507227a14cdfee22bdabbb31fd9c7e21de89c2b00e3a426226b4f2eb5a03ef3.gif)

It is extremely useful for debugging to have discrete logs for each step of a workflow. This level of granularity means that you can isolate errors to a single job. Since ML pipelines have historically been difficult to debug, logging each step of a workflow independently is helpful.

If you examine the logs of the second job, `StyleGan2`, you should see something like this:

```
Generating image for seed 6600 (0/6) ...
Generating image for seed 6601 (1/6) ...
Generating image for seed 6602 (2/6) ...
Generating image for seed 6603 (3/6) ...
Generating image for seed 6604 (4/6) ...
Generating image for seed 6605 (5/6) ...
dnnlib: Finished run_generator.generate_images() in 1m 19s.
```

It appears that your face generator has succeeded in generating an image.

Leave the `Logs` tab for the moment and view the `Data` tab within the `StyleGAN2` job. Here, find the seed images that you generated.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/inspecting-results.3165b1f03ff3ba63af07af6775d7588728075757d4cd7bf0cb3a39eeda1df8ef.gif)

You should find the seed image named `seed6600.png` should look exactly like the image above.

Here are a few more images that you were able to generate in a short amount of time. Each of these faces [does not exist](https://thispersondoesnotexist.com/) in real life – you used Gradient Workflows to perform some generative image modeling to create them.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/stylegan2-workflow-seeds.d812167ea53650bae7b83965afea33630029d7c0d287a7327e3307cb5efea88a.png)

### Checking in on your GitHub repository

Now that you have successfully run your first workflow, check in on the GitHub repository that you created when you kicked off this workflow.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/github-after-workflow.f4c66bb6a335d7a5ad6ca35c522257fd5cbf9f13c72fbb080c2c91398abc9f8f.png)

Your entire Workflow is visible in GitHub.

### Results from your first workflow run

At this point, you have done the following:

- Created a new project and workflow
- Connected your GitHub account to Gradient allowing you to write your workflow to GitHub
- Ran a starter workflow that contained two jobs
- Successfully ran both jobs and generated a number of images of lifelike human faces
- Confirmed that the contents of the workflow is available in GitHub

Up next, you can customize the workflow to support a more complex use case. This involves creating QTY 7 jobs and producing more interesting results – this time by generating images of cats instead of images of people!

## Part 2: Setting up a custom workflow

Gradient Tutorials: Getting Started with Gradient Workflows, Part 2 - YouTube

[Photo image of Hello Paperspace](https://www.youtube.com/channel/UCuf_hn-3vTw1lLTbJWgbW9A?embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

Hello Paperspace

1.76K subscribers

[Gradient Tutorials: Getting Started with Gradient Workflows, Part 2](https://www.youtube.com/watch?v=2B8mZEbXKU8)

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

[Watch on](https://www.youtube.com/watch?v=2B8mZEbXKU8&embeds_referring_euri=https%3A%2F%2Fdocs.digitalocean.com%2F)

0:00

0:00 / 9:29

•Live

•

Now that you’ve successfully generated your first StyleGAN2 workflow, we’re going to create a more advanced implementation that increases the complexity of the workflow.

This involves running QTY 3 jobs to start while demonstrating how to use the GitHub integration to trigger workflow runs. You can also scale-up the workflow to QTY 5 jobs.

This time, modify the YAML file that was created automatically in Part 1. To verify the existence of the YAML file, visit the repository you created in Part 1 and navigate to the file located at `Gradient-Workflows-Tutorial/.gradient/workflows/stylegan2.yaml`.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/yaml-file.855789ceb4d8fa9ad993c6ba1e3abbfee5d687b537b21b43040827a6869ea96a.png)

This YAML file contains instructions for each workflow job in a format that Gradient Workflows can understand.

This involves the following steps:

- Clone your existing connected GitHub repository to your local machine
- Create empty datasets for the workflow
- Copy some new text into the YAML file
- Push the updated repository to GitHub to trigger a new workflow run
- Repeat the process once again to add another step

### Cloning the repo to your local machine

Clone the repo that you created in Part 1 onto your local machine. While it’s certainly _possible_ to modify code files directly in the GitHub user interface, this tutorial works with files locally and then pushes them to source control.

This tutorial named the Workflow `Gradient-Workflows-Tutorial` previously, so the `git clone` command looks like the following. Yours differs be different depending on the GitHub account you connected to Gradient and the name you gave to your first Workflow.

Our particular command looks like this:

```
git clone https://github.com/ps-dban/Gradient-Workflows-Tutorial.git
```

However, yours may look like this:

```
git clone https://github.com/{your-github-handle}/{your-workflow-name}.git
```

Clone the repo locally. For more detailed steps, we recommend checking out [GitHub’s cloning documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/git-clone.550a69123bb04f4d3c1b2c1d5ca2effbf29e2278c746f9d494459af47645f792.gif)

After you clone the repo locally, `cd` into the local directory and `ls` to reveal a directory structure like this:

```
Dockerfile		docs			run_metrics.py
LICENSE.txt		metrics			run_projector.py
README.md		pretrained_networks.py	run_training.py
dataset_tool.py		projector.py		test_nvcc.cu
dnnlib			run_generator.py	training
```

This directory contains a number of files that you created during Part 1 of the tutorial.

The `ls -a` command reveals a number of hidden directories including `.git`, `.gitignore`, and `.gradient` directories.

Your YAML file is located within the `.gradient` directory and you can `cd` into it and `ls` to confirm that it contains a `workflows` directory that contains your YAML file.

### Working with a YAML file locally

Now that you know you have the right files, open the repo in whatever local IDE you prefer.

This tutorial uses [VSCode](https://code.visualstudio.com/).

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/vscode.5a8e138f6b1ac981d534e1798f06d34f28c203ee4e226b636af672800fd82045.png)

The file that you’re looking at in this image is the YAML file responsible for orchestrating the workflow you ran in Part 1. The file is in the directory `.gradient/workflows` within the repo.

If you inspect the file, there are QTY 2 jobs specified in this YAML file. One is called `CloneRepo` and the other is called `StyleGAN2`. These are the same jobs from Part 1.

Next, modify this YAML file to add a number of steps to your workflow. Whenever you make a change to this repo and push it to the `main` branch, it triggers a new workflow run.

### Modifying the YAML file to expand the workflow

Next up, copy a new YAML over to your local repo and then push your repo to GitHub to trigger a new workflow run.

The **new** YAML file that you need to copy and paste into your workflow project is available at this URL:

```
https://raw.githubusercontent.com/gradient-ai/gradient-workflows-tutorial-files/main/stylegan2.yaml
```

Let’s go ahead and copy that text and paste it into the file on your local machine located at `.gradient/workflows/stylegan2.yaml`:

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/copy-to-local.99fe55ab3707e05aecd135fc9cd0396f2cefc0eaad65d2aea71ef6280c6be102.gif)

You have copied the contents of the YAML file linked above and pasted it _in its entirety_ into the YAML file located at `.gradient/workflows/stylegan2.yaml`.

Before you push this modified YAML to GitHub, let’s quickly understand what it’s going to do.

### Breaking down the new YAML file contents

The first thing you can see is that your `on` block is commented out. First, uncomment this block and push the file to GitHub:

```
#on:
#  github:
#    branches:
#      only: main
```

The rest of the file specifies QTY 5 distinct jobs. This is a substantial increase from the first tutorial, in which you created a total of QTY 2 jobs.

Each job is specified under the `jobs` heading in the file.

1. `cloneStyleGAN2Repo` \- uses a C4 instance type (a basic CPU machine) to clone the StyleGAN2 source code from NVIDIA’s GitHub repo into a managed storage provider on Gradient
2. `getPretrainedModelCats` \- uses a C4 instance type to copy a pre-trained model of cats (a large `.pkl` file) over to Gradient
3. `generateCatImagesPretrainedModel` \- uses a P4000 instance type to display images of cats generated using the pre-trained cats model
4. `getPretrainedModelCars` \- uses a C4 instance type to copy a pre-trained model of cars (a large `.pkl` file) over to Gradient - \[Commented out to start\]
5. `generateCarImagesPretrainedModel` \- uses a P4000 instance type to display images of cars generated using the pre-trained cars model - \[Commented out to start\]t

One of the best parts of Gradient Workflows is that you can schedule an arbitrary number of jobs on different machines. You are starting with jobs #4 and #5 commented out, so your first run only runs QTY 3 jobs and you can make additions from there.

You can run a job with no dependencies or external dependencies, or you can require that a job wait for a previous job to complete before running. Each job can consume different types of inputs, produce different types of outputs, and accept different arguments at runtime. Workflows even allows each job to load a distinct Docker image from a public or private repo.

Your next step is to push your local repo to the GitHub remote repository to kick off a new training run.

### Creating datasets for your workflow

One of the things you may have noticed in the YAML file is the appearance of [Gradient Datasets](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/). Here’s an example from `#2 Get pretrained cat model`:

```
outputs:
      pretrainedNetwork:
        type: dataset
        with:
          ref: stylegan2-wsp-cats-pretrained-network
```

In this code block, Gradient is expecting to see a Gradient Dataset called `stylegan2-wsp-cats-pretrained-network` – so you have to create it.

Create QTY 4 datasets, which should only take a minute or two.

First, navigate over to the `Data` tab in Gradient. It should look like this:

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/data.e04feb9b634bf927d13b4a934f7ed0ba234f2bdeac2646cc7fd2a4d856ad46b9.png)

Next, create your new empty dataset. You need a total of QTY 4 empty datasets.

Those are as follows:

```
stylegan2-wsp-cats-pretrained-network
stylegan2-wsp-cats-generated
stylegan2-wsp-cars-pretrained-network
stylegan2-wsp-cars-generated
```

Create the empty dataset like so:

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/empty-dataset.d68b7649bf79586318d5ed0e496ec8298271de279bd627f6c676a878c3e83a08.gif)

All you’re doing here is using each of the QTY 4 references listed above as the `Name` parameter when creating a new dataset.

For the `Storage Provider` parameter, you’re using **Gradient Managed**, which is the name of the default Gradient cluster.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-new-dataset.4776021e7b29d33e569a59cc682a103bb3967bc19f64b7482f555066561e7683.png)

Once you have these empty datasets created, it’s time to start the workflow.

### Push to GitHub to run the workflow

Let’s go ahead and run the Workflow now.

First, in your local text editor, uncomment the command at the top of the new YAML file. If you do not uncomment the `on` block, your workflow cannot run.

It should now look like this:

```
on:
 github:
   branches:
     only: main
```

Save your file and push your changes to your remote repository.

This tutorial uses the terminal to push the change using these commands; though, you can use any technique you like to push code to remote source control:

```
git add .
git commit -m "modify yaml file"
git push origin main
```

After you push to GitHub, confirm that your remote repo received the changes.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/push-to-repo-github.6f4a7f0fe6a8ed0e58e8aeacfa1fdb4b2cd8f77e48e75c0b900e772ff6e5c7b3.gif)

Next, swap back from your GitHub repo to your Gradient console. If everything is working as expected, you should see a new workflow run commence.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/new-workflow.92ebf2b6f732c83f48e45e98cd92e698ff063038e556dcb75fef3375be7fe8ce.gif)

You have successfully pushed code to your remote repo. Pushing this code automatically creates a new workflow run in Gradient.

### Inspect the results of the workflow

When your training is done (it took us less than 2 minutes but times may vary), all QTY 3 jobs have succeeded as represented by the green boxes:

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/jobs-success.52faedb0a9519cca0a2559868c6f59c1f84236a3c2a63f547b4d53ecbe2b772e.png)

Next, inspect the results of your step called `generateCatImagesPretrainedModel` – your expectation is to find images of cats within the dataset.

To inspect the generated images, select the box in the DAG that represents the generation step and select the `DATA` tab to explore the dataset that we’ve generated. Inside, find a number of seed images of cats.

Because this is a deterministic process, the cats you generate should look exactly like these cats.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/inspecting-cats.60a01ca5c1eb464e29986ce6d50b204faed29e086fae0602c0da46fc7b57d4f4.gif)

If you look at a number of your seed images, you should see some cats that look exactly like this:

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/cats.55c27cbacfd98e8cb3691c06255b97ae4e7b1a2702ab9b59e1dab5b7ee24c79c.png)

Our next step is to expand this workflow from QTY 3 steps to QTY 5 steps. You can do that by uncommenting steps 4 and 5 from your YAML file to trigger a new workflow run.

### Uncomment the remaining steps to re-run the workflow

Return to your YAML file locally and uncomment steps 4 and 5. This is going to add an addition QTY 2 steps to your workflow and trigger a re-run and the result is that you’re going to also generate some cars.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/uncomment-steps.9cc86bfdd1924dc058190855e477d170b3df5b65ea8fa1da5e990e1b9dda70fe.gif)

Next, push the changes from your local machine back to your remote repository. Here, give the commit the title `uncomment steps 4 and 5`.

```
git add .
git commit -m "uncomment steps 4 and 5"
git push origin main
```

You should then see this commit hit your GitHub repository. Your checks pass in Gradient, the workflow is triggered, and then swapping over to Gradient, you now have a workflow running with QTY 5 steps in the DAG.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/run-next-steps.33bb56a923c4b31555a9587e227631922080c37152f2dbccdc0926fc7671f406.gif)

Inspect the results once the workflow has finished. This time it may take a little bit longer since we’ve added two extra steps.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/inspect-part-two.7059be270dd9d48ec7078754e6ef9bc5c92ddda6f539e665238be032b6891bac.gif)

If you’ve succeeded, in addition to your cats, you should now see that you’ve generated a number of cars!

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/cars.ac99a584600f54452123c13006c2e3561e27e25020abc43a019eb9263066a3a7.png)

Success once again!

### What we’ve accomplished

In Part 2 of this tutorial, you’ve managed to do the following:

- Pull your workflow repo locally so that you can make changes to the YAML file
- Made one change to the YAML to create QTY 3 workflow jobs to produce a dataset of cats
- Made another change to the YAML to create QTY 5 workflow jobs to produce a dataset of cats and of cars

You’ve now seen how to take a workflow and make changes to the YAML file to add complexity.

## What’s next?

From here, you can get started building modifying the YAML spec to build your own Gradient Workflows.

As you develop your own Gradient Workflows, you might notice that a git commit does not trigger a workflow run. When this happens, pay attention to the errors generated in GitHub when making a commit.

If you are successful triggering a workflow run, but the workflow itself is resulting in errors, read through the logs generated in the Gradient console. Remember to inspect each job in the DAG and read the logs independently in order to troubleshoot.

## Reference reading

- Read through the [Gradient Workflows](https://docs.digitalocean.com/products/paperspace/workflows/) documentation
- In particular, read through the [Gradient Workflows spec](https://docs.digitalocean.com/products/paperspace/workflows/reference/workflow-spec/)
- Browse Gradient tutorials and walk-throughs available on the [Paperspace blog](https://blog.paperspace.com/)

## Additional tutorials

- [Gradient Notebooks Tutorial](https://docs.digitalocean.com/products/paperspace/notebooks/getting-started/run-example-notebooks/)
- [Gradient Deployments Tutorial](https://docs.digitalocean.com/products/paperspace/deployments/getting-started/deploy-model-to-endpoint/)
- End-to-end StyleGAN2 tutorial [blogpost](https://blog.paperspace.com/end-to-end-data-science-with-gradient-workflows-stylegan2/) and [GitHub repo](https://github.com/gradient-ai/StyleGAN2-with-Workflows)
- End-to-end recommended system tutorial:
  - [Part 1: Posing a business problem](https://blog.paperspace.com/end-to-end-recommender-system-part-1-business-problem/)
  - [Part 2: Preparing the data](https://blog.paperspace.com/end-to-end-recommender-system-part-2-data-preparation/)
  - [Part 3: Building a TensorFlow model](https://blog.paperspace.com/end-to-end-recommender-system-part-3-building-tensorflow-model/)
  - [Part 4: Tuning the model for best performance](https://blog.paperspace.com/end-to-end-recommender-system-part-4-tuning-model-best-performance/)
  - [Part 5: Deploying the model into production](https://blog.paperspace.com/end-to-end-recommender-system-part-5-deploying-model-production/)
  - [Part 6: Conclusion and next steps](https://blog.paperspace.com/end-to-end-recommender-system-part-6-conclusion-next-steps/)

In this article...

- [Introduction](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#introduction)
- [Part 1: Setting up your first Workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#part-1-setting-up-your-first-workflow)
  - [Create a Project](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#create-a-project)
  - [Connect to GitHub](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#connect-to-github)
  - [Create a workflow using a basic template tile in the console](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#create-a-workflow-using-a-basic-template-tile-in-the-console)
  - [Interpreting the results of your first workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#interpreting-the-results-of-your-first-workflow)
  - [Checking in on your GitHub repository](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#checking-in-on-your-github-repository)
  - [Results from your first workflow run](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#results-from-your-first-workflow-run)
- [Part 2: Setting up a custom workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#part-2-setting-up-a-custom-workflow)
  - [Cloning the repo to your local machine](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#cloning-the-repo-to-your-local-machine)
  - [Working with a YAML file locally](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#working-with-a-yaml-file-locally)
  - [Modifying the YAML file to expand the workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#modifying-the-yaml-file-to-expand-the-workflow)
  - [Breaking down the new YAML file contents](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#breaking-down-the-new-yaml-file-contents)
  - [Creating datasets for your workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#creating-datasets-for-your-workflow)
  - [Push to GitHub to run the workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#push-to-github-to-run-the-workflow)
  - [Inspect the results of the workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#inspect-the-results-of-the-workflow)
  - [Uncomment the remaining steps to re-run the workflow](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#uncomment-the-remaining-steps-to-re-run-the-workflow)
  - [What we’ve accomplished](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#what-weve-accomplished)
- [What’s next?](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#whats-next)
- [Reference reading](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#reference-reading)
- [Additional tutorials](https://docs.digitalocean.com/products/paperspace/workflows/getting-started/your-first-workflow/#additional-tutorials)

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