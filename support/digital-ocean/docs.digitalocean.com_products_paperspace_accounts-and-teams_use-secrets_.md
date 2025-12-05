---
url: "https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/"
title: "How to Use and Manage Paperspace Secrets | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [Products](https://docs.digitalocean.com/products/paperspace/#products)
  - [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [![](https://docs.digitalocean.com/images/icons/notebooks.32e19af09a55fd5cd33aebcce8d997fae35ad696d0312f02ea32fbd1031df490.svg)Notebooks](https://docs.digitalocean.com/products/paperspace/notebooks/)
  - [![](https://docs.digitalocean.com/images/icons/deployments.3b7f4d8d82c236b51d91c8becee94bb424055a671131be322532b5d1cd26cc20.svg)Deployments](https://docs.digitalocean.com/products/paperspace/deployments/)
  - [![](https://docs.digitalocean.com/images/icons/workflows.3b7ab56ba05e74ff45c932896583f0781174b87ebd9e2feb4560ab9be20c2bb9.svg)Workflowsprivate](https://docs.digitalocean.com/products/paperspace/workflows/)
- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
  - [Manage Accounts](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-accounts/)
  - [Add SSH Keys](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/)
  - [Use Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/)
  - [Manage Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/manage-teams/)
  - [Enable SSO](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/enable-sso/)
- [Pricing](https://docs.digitalocean.com/products/paperspace/pricing/)
- [Developer Tools](https://docs.digitalocean.com/products/paperspace/reference/)
  - [API Keys](https://docs.digitalocean.com/reference/paperspace/api-keys/)
  - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
  - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
  - [Legacy Tools](https://docs.digitalocean.com/products/paperspace/reference/legacy/)

- [Accounts & Teams](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/)
- Use Secrets

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use and Manage Paperspace Secrets

Validated on 14 Dec 2023 • Last edited on 18 Dec 2024

Secrets provide a mechanism to securely store and work with sensitive information (such as an API key) within Paperspace. Secrets can be safely injected into workloads as environment variables. An environment variable that uses a Secret does not reveal the contents of the secret itself.

When using other services that require authentication via an [API key](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/add-ssh-keys/#add-ssh-keys), this key can be stored as a Secret within Paperspace and then passed-into the workload that requires the API key. This would prevent the key itself from being visible to other team members. It would also guard against accidentally exposing the API key such as checking-in it into source control.

Secrets can be created at the following levels:

- Team: these secrets are applied to all projects and all clusters

- Project: these secrets are applied to all Workflows in a project

- Cluster: these secrets are applied to all Workflows in a cluster


If the same secret name is created for more than one scope, only one is applied. Secrets with the same name have the following precedence:

- Cluster secrets take precedence over Team secrets
- Project secrets take precedence over both Cluster secrets and Team secrets.

## Set a Secret

You can set secrets from the Settings tab in the console or through the CLI.

Web UI

Navigate to one of the following:

- The Secrets tab under Team settings

- The Settings tab under a Project

- The Secrets tab in the details of a Cluster under the Team settings Clusters tab


These correspond to Team, Project, and Cluster secrets respectively. Type in the name and value of the secret, and click Add to save.

![Set secret](https://docs.digitalocean.com/screenshots/paperspace/secrets-set.e0bd094018557e5abf0a294a7db273b0854101e7c952d7d166e80ed060471558.png)

CLI

Set team secret:

```bash
gradient secrets set team --name=<name> --value=<secret>
```

Set project secret:

```bash
gradient secrets set project --id=<project_id> --name=<name> --value=<secret>
```

Set cluster secret:

```bash
gradient secrets set cluster --id=<cluster_id> --name=<name> --value=<secret>
```

For the full list of options, see the CLI reference.

You can inject secrets into workloads as environment variables using the `secret:my_secret_env` syntax. For example, you can pass an environment variable into your deployment spec as shown below:

```yaml
env: # container environment variables
- name: some-env
  value: some-value
- name: secret-env
  value: secret:my_secret_env # stored as a project or team secret. Naming is arbitrary.
```

## List Secrets

You can set secrets from the Settings tab in the console or through the CLI.

Web UI

Navigate to the Project, Team, or Cluster page, as with setting a secret above. The names of secrets in that scope that are already stored are listed.

![Secrets list](https://docs.digitalocean.com/screenshots/paperspace/gradient/secrets-list.8d98a9857ac5b885e30ab8264ea104fa627397bb288c77b043082fadd1bbd03c.png)

CLI

List team secrets:

```bash
gradient secrets list team
```

List project secrets:

```bash
gradient secrets list project --id=<Project ID>
```

List cluster secrets:

```bash
gradient secrets list cluster --id=<Cluster ID>
```

## Delete a Secret

Web UI

Navigate to the Project, Team, or Cluster page, as with setting a secret above. Click the Delete button and confirm the dialog.

![Secrets list](https://docs.digitalocean.com/screenshots/paperspace/secrets-list.8d98a9857ac5b885e30ab8264ea104fa627397bb288c77b043082fadd1bbd03c.png)

CLI

Delete team secret:

```bash
gradient secrets delete team --name=<name>
```

Delete project secret:

```bash
gradient secrets delete project --id=<Project ID> --name=<name>
```

Delete cluster secrets:

```bash
gradient secrets delete cluster --id=<Cluster ID> --name=<name>
```

## Store API Key as Secret

Certain actions within Gradient require incorporating your API key to authenticate requests. In cases where your API key is used within your code or commands that may be visible within your Gradient team (for example, a Notebook) or other locations (for example when checking your code into source control), you can use Secrets to mask your unique API key.

1. Create a new API key.

Go to the API Keys tab under team settings, type a name for the key, and click Add.
![API keys](https://docs.digitalocean.com/screenshots/paperspace/gradient/api-keys.b612b431edb4bd07f84238cd332ba5fb2b9e9d6f25f573648db0d64b07abf7ac.png)
Once your key is created, copy the key to your clipboard.

2. Save the key as a Secret.

API keys can be added in a similar way to other secrets: type a name, paste the API key in the Value field, and click Add.
![API key as secret](https://docs.digitalocean.com/screenshots/paperspace/gradient/api-key-as-secret.5709b88bd80b4053797376c893b5e969408da77abffb26ab67297b383ee8c6a9.png)

In this article...

- [Set a Secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/#set-a-secret)
- [List Secrets](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/#list-secrets)
- [Delete a Secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/#delete-a-secret)
- [Store API Key as Secret](https://docs.digitalocean.com/products/paperspace/accounts-and-teams/use-secrets/#store-api-key-as-secret)

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