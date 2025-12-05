---
url: "https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/"
title: "Environment Variables | DigitalOcean Documentation"
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
- Environment Variables

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Environment Variablesprivate

Validated on 14 Dec 2023 • Last edited on 13 Feb 2024

Workflows automate machine learning tasks, combining GPU instances with an expressive syntax to generate production-ready machine learning pipelines with a few lines of code.

Information can be passed to and from Workflows, and between the jobs within them.

One form of this information is our [Workflow input/output](https://docs.digitalocean.com/products/paperspace/workflows/concepts/understanding-io/), which can be datasets, volumes, or strings.

Another is environment variables. These are used when you want to pass information in the Workflow YAML to some other computation being called, such as authenticating to a private GitHub repository, or running a Python `.py` script.

## Why use environment variables and not arguments to a script?

Some reasons are the following:

- Environment variables can hold other information like [secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/), that are harder to pass securely otherwise.

- They can be defined as applying to all Workflow jobs (under `defaults:`), or per-job, under a job’s name.

- Sets of arguments may be used several times, for example, the potentially large number of hyperparameters for training an ML model may want to be made explicit in a script. Then you may want to use them for training more than one model, varying some parameters but leaving the rest unchanged.

- Using environment variables makes larger setups like this easier to handle than passing large argument lists more than once, helping ensure different model invocations get the same settings when they should be getting them.


## Specifying environment variables in Workflows

An environment variable global to a script comes under `env:` in the `defaults:` field. An example that is commonly used is the secret to hold the user’s API key, and the code block containing it, defining the environment variable `HELLO` might look like:

```yaml
defaults:
  env:
    HELLO: secret:hello
  resources:
    instance-type: P4000
```

Common job-specific environment variables are information to be passed to a script. For example, consider this code:

```yaml
RecommenderTrain:
  needs:
    - CloneRecRepo
  inputs:
    repoRec: CloneRecRepo.outputs.repoRec
  env:
    HP_FINAL_EPOCHS: "50"
    HP_FINAL_LR: "0.1"
  outputs:
    trainedRecommender:
      type: dataset
      with:
        ref: recommender
  uses: script@v1
  with:
    script: |-
      cp -R /inputs/repoRec /Deep-Learning-Recommender-TF
      cd /Deep-Learning-Recommender-TF
      python workflow_train_model.py
    image: tensorflow/tensorflow:2.4.1-jupyter
```

Here, the number of epochs to train the final model, `HP_FINAL_EPOCHS: '50'`, and the model’s learning rate, `HP_FINAL_LR: '0.1'`, are used by the `workflow_train_model.py` Python script that the job calls.

## Using values of Workflow environment variables in scripts

To utilize the values of the Workflow environment variables in a script, the user parses them as part of their code. In the recommended case here you pass them to variables in the code:

```py
hp_final_epochs = int(os.environ.get('HP_FINAL_EPOCHS'))
hp_final_lr = float(os.environ.get('HP_FINAL_LR'))
```

Python’s `os.environ` reads the values, and you need to cast them to the correct data type (such as integer, float, etc.) for the model to understand them.

## Advanced Usage

For more advanced situations, Python has libraries such as [env\_config](https://pypi.org/project/env_config/). This overlaps somewhat with what Workflows can do, because it allows you to declare environment variables as well. But it has clearer handling of issues like data types and errors, and can handle variables that are lists (useful for hyperparameter tuning), or more complex structures.

It can read declared variables from a file; for example, `test.sh`, from `env_config`’s [GitHub page](https://github.com/flowpl/env_config):

```py
#!/usr/bin/env bash

# comment is ignored

HIDDEN_VARIABLE="value not parsed"
export VISIBLE_VARIABLE_1="this value will be available"

function {
   # if the line does not start with export it's ignored
}

# variables inside strings are not expanded. The value will contain the literal :code:`$OTHER_VARIABLE`.
export VARIABLE_CONTAINING_REFERENCE="$OTHER_VARIABLE"

read in by

from env_config import Config, parse_str

# uses the value of CONFIG_FILE as the file name to load variables from
config = Config(filename_variable='CONFIG_FILE', defer_raise=False)
# visible_variable_1 is declared in test and the current tag is test. variable1 will be loaded from test.sh
config.declare('visible_variable_1', parse_int(), ('test',), 'test'))

# visible_variable_2 is declared in the 'default' tag and not available in the config file.
# visible_variable_2 will be ignored because the current tag is 'test'
config.declare('visible_variable_1', parse_int(), ('default',), 'test')
```

This could potentially be integrated with Workflows to similarly handle a set of Workflow environment variables.

In this article...

- [Why use environment variables and not arguments to a script?](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/#why-use-environment-variables-and-not-arguments-to-a-script)
- [Specifying environment variables in Workflows](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/#specifying-environment-variables-in-workflows)
- [Using values of Workflow environment variables in scripts](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/#using-values-of-workflow-environment-variables-in-scripts)
- [Advanced Usage](https://docs.digitalocean.com/products/paperspace/workflows/concepts/environment-variables/#advanced-usage)

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