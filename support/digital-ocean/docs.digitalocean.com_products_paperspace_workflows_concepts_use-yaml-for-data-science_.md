---
url: "https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/"
title: "Using YAML for Data Science | DigitalOcean Documentation"
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
- [Concepts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/)
- Using YAML for Data Science

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Using YAML for Data Scienceprivate

Validated on 14 Dec 2023 • Last edited on 25 Oct 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

YAML provides a powerful and precise configuration for a data science pipeline to run to a production standard, and as such it needs care to specify it correctly. While it is relatively intuitive to see what is going on at a high level, there is a lot going on in the details. The combination of YAML syntax, Gradient actions, implicit information, and the conceptual variety of steps being performed for data science (data preparation, model training, model deployment, etc.), means that it can be tricky to get everything right at first.

So, when implementing data science Workflows, you can collect some examples likely to come up in practice.

## Indentation & syntax highlighting

YAML requires precise indentation, and tabs are not allowed. The Gradient Notebook allows creation and editing of YAML files, with aids such as visual prompts for indentation, and syntax highlighting.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/yaml-highlighting.0bcb1b65c6ae64fe2713d0baf0a9b2052b856e9069dabc2bc93b609fca712fb6.png)

## Multi-line commands

Many jobs within a Workflow spec do not require a script to be imported, but do need several commands. The YAML syntax `|-` (pipe, dash) sequence allows this to be laid out such that they don’t all have to be on one line, and can be written with their arguments.

```yaml
uses: container@v1
with:
  args:
    - bash
    - -c
    - |-
      pip install scipy==1.3.3
      pip install requests==2.22.0
      pip install Pillow==6.2.1
      cp -R /inputs/repo/stylegan2 /stylegan2
      cd /stylegan2
```

Alternatively, Gradient’s script action achieves a similar effect:

```yaml
uses: script@v1
with:
  script: |-
    pip install scipy==1.3.3
    pip install requests==2.22.0
    pip install Pillow==6.2.1
    cp -R /inputs/repo/stylegan2 /stylegan2
    cd /stylegan2
```

## Directory names

Jobs have inputs and outputs which results in some standard directory names that need to be given correctly. The inputs to a job are in `/inputs`, and the outputs from a job are in `/outputs`. The outputs from one job can become the inputs to the next, so what was; for example, `/outputs/my_directory` becomes `/inputs/my_directory` in the next job.

The name of your output must match the directory name; for example, if you name the output `my-dataset` (line 10), you must also name the directory under `/outputs` the same (line 7).

```yaml
my-job:
  uses: container@v1
  with:
    args:
      - bash
      - "-c"
      - cp -R /my-trained-model /outputs/my-dataset
    image: bash:5
  outputs:
    my-dataset:
      type: dataset
      with:
        ref: my-dataset-id
```

## Inputs directory is not writable

The inputs to a job are in the `/inputs` directory, and this directory is not writeable. To change the contents of this directory, you need to copy it out of `/inputs`. For example, the StyleGAN2 onboarding Workflow job to generate images contains the commands:

```bash
cp -R /inputs/repo/stylegan2 /stylegan2
cd /stylegan2
```

## Directory paths may be unexpected

A wrong directory path causes the Workflow to fail with `No such file or directory` or some related error, so it is important for paths to point to the correct files and directories.

An example of an unintuitive path to check for is when you use the `git-checkout@v1` action to mount a repo to a volume. For example:

```yaml
CloneCatRepo:
  outputs:
    repoCat:
      type: volume
  uses: git-checkout@v1
  with:
    url: https://github.com/nmb-paperspace/cat-subsample
    username: nmb-paperspace
    password: secret:GIT_PASSWORD
```

But then the repo content, here `cat_images_tfrecords.tgz` is put directly into `/outputs`, so the path is `/outputs/repoCat/cat_images_tfrecords.tgz`, without the original repo URL. This can be remedied by adding the path explicitly in the `with:` section, via `path:`, for example:

```yaml
path: /outputs/repo/subfolder
```

## Dataset identifiers

Datasets must be referred to by their names or IDs within the YAML file. The dataset must therefore be [created outside of the YAML file](https://docs.digitalocean.com/products/paperspace/workflows/how-to/create-datasets/), unless you are using one of our tutorials that point to the pre-existing demo-dataset. You can do this in the GUI under the **Data** tab by clicking **Add**.

![](https://docs.digitalocean.com/screenshots/paperspace/workflows/create-dataset.b44af4fb66fdddfba198a1685cddff2bbe16f6b8f0860742f741c56ee92bb68a.png)

Alternatively the dataset can be created using the following CLI command:

```bash
gradient datasets create \
  --name <my-dataset-name> \
  --storageProviderId <storage-provider-id`
```

See [Versioned Data](https://docs.digitalocean.com/products/paperspace/notebooks/details/storage-architecture/) for more information on creating datasets.

## Dataset versions

Datasets can be referred to by their version (for example, `datasetId:version`), or by name or ID (for example, `datasetId`). The latter can be useful when you want to refer to the latest version of a dataset, perhaps produced in a preceding Workflow. Additionally, you can reference a dataset by team namespace (for example, `namespace/datasetId:version`).

Gradient Public Datasets utilize the namespace notation, being referred to by `gradient/<public dataset name>`.

## Some GitHub action syntax is not supported

Gradient Workflows overlap with GitHub Actions, but are not a duplicate of them. Workflows does some things GitHub doesn’t do, such as parallel processing, but not all of GitHub’s keywords are supported, so for example, using `name:` results in failure.

## Linting

YAML is flexible with its syntax in some ways, for example, comments can be placed somewhat freely. But some arrangements don’t work and causes a syntax error, often manifesting as some other error like `Failed to fetch data`. If desired, you can check that their YAML is valid in a syntactical sense by using one of several YAML checkers online, for example [https://yamllint.com](https://yamllint.com/) , before expending machine resources on running a job.

## Commands that contain YAML special characters

Supplying commands in YAML can sometimes conflict with what it deems to be special characters, for example, this command to download a large file using curl:

```
- curl
- -C
- -
- -o
- /outputs/catImageDatabase/cat.zip
- "http://dl.yf.io/lsun/objects/cat.zip"
```

This fails with the error `Failed to fetch data: "spec.jobs.TestCommands.with.args[2]" must be a string` because the dash is misread. (`curl -C - -o` means resume downloading a file after an interrupted network connection.) In these cases, enclosing the character in quotes can help, and this form succeeds:

```
- curl
- -C
- "-"
- -o
- /outputs/catImageDatabase/cat.zip
- "http://dl.yf.io/lsun/objects/cat.zip"
```

In this case, you can also use the `|- script syntax` as detailed above.

## Command multiple arguments

Often when constructing a Workflow you may want to sanity check what is being done, for example, what files are where. But this can hit YAML syntax too: `ls -a` works, but `ls -al` fails with `TypeError: Object of type bytes is not JSON serializable`. As with special characters, a solution is to use the script formulation, so do not use the following:

```bash
- bash
- -c
- ls -al
```

Instead, use the following, and the same under the `script@v1` Gradient Action:

```bash
- bash
- -c
- |-
  ls "-al"
```

## Creating and referring to a dataset in the same Workflow

An example of information implicit in the Workflow that might not match intuition is that there is a difference between referring to a dataset under `inputs: type: dataset`, and the dot syntax. So if you populate the dataset `sample-dataset` for the first time in the current Workflow (not including the GUI creation step above to get the ID), and then try to refer to it with the following:

```yaml
inputs:
  repo: CloneStyleGAN2Repo.outputs.repo
  catImagesUnzipped:
    type: dataset
    with:
      ref: "sample-dataset"
```

The run fails because it is expecting an input from outside the Workflow, which in this case does not exist. However, using the dot syntax:

```yaml
inputs:
  repo: CloneStyleGAN2Repo.outputs.repo
  catImagesUnzipped: UnzipFile.outputs.catImagesUnzipped
```

This does work, because now it means the instance of cat images created by the earlier job that contained:

```yaml
outputs:
  catImagesUnzipped:
    type: dataset
    with:
      ref: "sample-dataset"
```

This does exist, assuming the job succeeded. The dots correspond to indentation in this context.

## Datasets are versioned

So if you run one Workflow and output to a dataset ID:

```yaml
GetCatImageDatabase:
  outputs:
    catImageDatabase:
      type: dataset
      with:
        ref: "dsr5spfj2aqzlfg"
```

Then, run another Workflow and output an additional file to the same dataset ID, it does not update the earlier dataset version to add the new file alongside the first one. Instead a new dataset version is created, with a new `datasetId:version`, that intentionally does not include the previous file. This behavior is so that everything is versioned and immutable, which is desirable in a production setting. However this does require you to have a good understanding of when new dataset versions are created implicitly.

## Test whether a Python import works

To see if a Python module is present on the container you are using without having to run a Python script, run, for example:

```bash
- bash
- -c
- python3 -c "import <name of module>"
```

## Commenting in scripts

YAML allows comments in scripts under the `script@v1` Gradient Action, but the syntax is strict. This form fails with a parser error:

```yaml
TestCommands:
    uses: script@v1
    with:
        script: |-
            echo 'This is the first line'
#           echo 'This line is commented out'
            echo 'This is the last line'
        image: paperspace/gradient-sdk
```

However, placing the comment symbol next to the line succeeds:

```yaml
TestCommands:
    uses: script@v1
    with:
        script: |-
            echo 'This is the first line'
            #echo 'This line is commented out'
            echo 'This is the last line'
        image: paperspace/gradient-sdk
```

This results with the expected output of two echoed lines.

This is useful for the common situation of wanting to run a script with commented out lines.

In this article...

- [Indentation & syntax highlighting](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#indentation--syntax-highlighting)
- [Multi-line commands](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#multi-line-commands)
- [Directory names](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#directory-names)
- [Inputs directory is not writable](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#inputs-directory-is-not-writable)
- [Directory paths may be unexpected](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#directory-paths-may-be-unexpected)
- [Dataset identifiers](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#dataset-identifiers)
- [Dataset versions](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#dataset-versions)
- [Some GitHub action syntax is not supported](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#some-github-action-syntax-is-not-supported)
- [Linting](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#linting)
- [Commands that contain YAML special characters](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#commands-that-contain-yaml-special-characters)
- [Command multiple arguments](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#command-multiple-arguments)
- [Creating and referring to a dataset in the same Workflow](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#creating-and-referring-to-a-dataset-in-the-same-workflow)
- [Datasets are versioned](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#datasets-are-versioned)
- [Test whether a Python import works](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#test-whether-a-python-import-works)
- [Commenting in scripts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/use-yaml-for-data-science/#commenting-in-scripts)

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