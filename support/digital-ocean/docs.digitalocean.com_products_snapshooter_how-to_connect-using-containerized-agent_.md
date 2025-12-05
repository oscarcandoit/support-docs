---
url: "https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/"
title: "How to Connect Containers Using the SnapShooter Agent | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/snapshooter.13e207b5891670f2b29dbf31513a019ebef8731d27c25446bbf7557251aca915.svg)SnapShooter](https://docs.digitalocean.com/products/snapshooter/)
- [Getting Started](https://docs.digitalocean.com/products/snapshooter/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/snapshooter/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
  - [Connect DigitalOcean Teams](https://docs.digitalocean.com/products/snapshooter/how-to/connect-digitalocean-teams/)
  - [Connect Other Accounts](https://docs.digitalocean.com/products/snapshooter/how-to/connect-other-accounts/)
  - [Connect Server Using SSH](https://docs.digitalocean.com/products/snapshooter/how-to/connect-servers/)
  - [Connect Server Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-agent/)
  - [Connect Containers Using Agent](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/)
  - [Add an Encryption Key](https://docs.digitalocean.com/products/snapshooter/how-to/add-an-encryption-key/)
  - [Use Spaces Object Storage](https://docs.digitalocean.com/products/snapshooter/how-to/use-spaces-for-storage/)
  - [Use Other Storage Providers](https://docs.digitalocean.com/products/snapshooter/how-to/use-other-storage-providers/)
  - [Back Up Droplets](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-droplets/)
  - [Back Up Volumes](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-volumes/)
  - [Back Up Managed Databases](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-managed-databases/)
  - [Back Up Managed Kubernetes Resources](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-doks/)
  - [Back Up Other Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-other-servers/)
  - [Back Up Files](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-files/)
  - [Back Up PostgreSQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-postgresql-servers/)
  - [Back Up MySQL Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mysql-servers/)
  - [Back Up MongoDB Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-mongodb-servers/)
  - [Back Up WordPress Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-wordpress-servers/)
  - [Back Up Laravel Servers](https://docs.digitalocean.com/products/snapshooter/how-to/back-up-laravel-servers/)
  - [Add Pre/Post-Backup Scripts](https://docs.digitalocean.com/products/snapshooter/how-to/add-pre-and-post-backup-scripts/)
  - [Restore Backups](https://docs.digitalocean.com/products/snapshooter/how-to/restore-backups/)
- [Reference](https://docs.digitalocean.com/products/snapshooter/reference/)
- [Details](https://docs.digitalocean.com/products/snapshooter/details/)
  - [Features](https://docs.digitalocean.com/products/snapshooter/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/snapshooter/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/snapshooter/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/snapshooter/details/limits/)
  - [IP Address Allowlist](https://docs.digitalocean.com/products/snapshooter/details/ip-address-allowlist/)
  - [SnapShooter Alpha and Beta Tests for Backup Jobs](https://docs.digitalocean.com/products/snapshooter/details/alpha-beta-tests/)
- [Support](https://docs.digitalocean.com/products/snapshooter/support/)

- [How-Tos](https://docs.digitalocean.com/products/snapshooter/how-to/)
- Connect Containers Using Agent

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Connect Containers Using the SnapShooter Agent

Validated on 27 Jun 2024 • Last edited on 17 Jun 2025

SnapShooter is a cloud backup and recovery solution. Use SnapShooter to back up servers, volumes, databases, and applications from DigitalOcean and other cloud providers.

The SnapShooter Agent allows SnapShooter to communicate with private resources that are behind a NAT gateway or firewall. Using the agent also eliminates the need to configure firewalls, incoming connection rules, or IP allowlists.

The agent works by opening a persistent communication channel from the target resource back to the SnapShooter network. The resulting backups are identical to backups taken with an SSH-based connection.

You can run the SnapShooter Agent in a Docker container to access Docker volumes and other containerized resources.

## Supported Environments

The SnapShooter Agent supports the following architectures:

- x86 (`386`)
- x86 64-bit (`amd64`)
- ARM (`arm`)
- ARM 64-bit (`arm64`)

The agent runs on the following operating systems:

- Linux (`linux`)
- OpenBSD (`openbsd`)
- FreeBSD (`freebsd`)
- NetBSD (`netbsd`)
- macOS (`darwin`)


## Add an Agent Server

The SnapShooter Agent needs an access token to connect to the service. To set up a new agent and retrieve your access token and download URL, go to the [**Add Agent Server Manually** page](https://app.snapshooter.com/agents/add/manual).

Name your server and click **Generate Agent Server Token**.

Select the target [operating system and architecture](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#supported-environments) for your container. This generates the correct download URL for the agent software. Save the URL and the token for the next step.

## Create the Image

The following Dockerfile uses an Ubuntu base image to set up a minimal containerized SnapShooter agent.

```dockerfile
FROM ubuntu:latest

WORKDIR /opt/snapshooter

# Install required packages
RUN apt-get update && apt-get install -y curl gzip tar

# Download the agent binary, unzip it, and set execute permissions
RUN curl -sSL "<your_download_URL_here>" -o agent.gz \
    && gzip -d agent.gz \
    && chmod +x agent

# Run the agent
CMD ["/opt/snapshooter/agent"]
```

This Dockerfile installs a few utilities, then uses them to download and decompress the agent software. Replace `<your_download_URL_here>` with the URL you copied in the previous step.

Note
If your backup recipe requires specific command line utilities to function, add the relevant packages to the end of the `apt-get` line in the Dockerfile. For instance, to back up PostgreSQL databases, you need the `pg_dump` utility, which is available in the `postgresql-client` package on Ubuntu.

Save the file as `Dockerfile`, then run the build command from the same directory as the Dockerfile.

```shell
docker build -t snapshooter .
```

This builds an image named `snapshooter`. Use the `docker images` command to verify.

```
REPOSITORY                                       TAG         IMAGE ID       CREATED         SIZE
snapshooter                                      latest      adcd6dcc5f0d   8 seconds ago   131MB
```

The output lists a `snapshooter` image. In the next step we use this image to run a containerized SnapShooter agent.

## Run the Container

To run the agent, you first need to set the `SNAPSHOOTER_AGENT_TOKEN` environment variable. One way to specify this variable is to create a `.env` file in same directory as the Dockerfile. The file format is a `key=value` pair per line:

```
SNAPSHOOTER_AGENT_TOKEN="946|mQMkg4pasPZcjorLjYpcRK7xS27bZREP72iGmKUQ"
```

Paste in the token you created in the first step. Save this file in the same directory as your Dockerfile. If you’re checking the Dockerfile into source control, add `.env` to your `.gitignore` file to avoid leaking secret tokens.

Now use `docker run` to create and run a container from the `snapshooter` image:

```shell
docker run -d --env-file .env snapshooter
```

The `-d` flag puts the container in the background to run **d** etached until you stop it, and `--env-file` imports all the environment variables from the specified file. `snapshooter` is the name of the image to run.

Run `docker ps` to verify the container is running:

```
CONTAINER ID   IMAGE        COMMAND                  CREATED       STATUS             PORTS     NAMES
23ecbe823dbf   snapshooter  "/opt/snapshooter/ag…"   2 hours ago   Up About an hour             goofy_mendel
```

The agent server should now show as connected in the SnapShooter control panel, and you can begin configuring your backup jobs.

## Run the Container Using Docker Compose

The following YAML builds and runs the SnapShooter agent Dockerfile using Docker Compose. If you haven’t already, create a `.env` file with your access token in the same directory as your `compose.yml` and `Dockerfile` files by following the instructions in the previous step.

```yaml
services:
    snapshooter:
        build: .
        environment:
            SNAPSHOOTER_AGENT_TOKEN: "${SNAPSHOOTER_AGENT_TOKEN}"
```

This builds the Dockerfile in the current directory, then passes the `SNAPSHOOTER_AGENT_TOKEN` variable from the `.env` file through to the container’s environment.

Note
Docker Compose automatically loads variables from files named `.env`. If you name your file something other than `.env`, use the [`env_file` attribute](https://docs.docker.com/compose/compose-file/05-services/#env_file) to specify the file name.

Run the container with `docker compose`:

```shell
docker compose up -d
```

The command prints confirmation that the container has been created and started.

```
[+] Running 1/1
 ✔ Container example-snapshooter-1  Started
```

Verify that the agent is connected in the SnapShooter control panel. You may now configure your backup jobs.

## An Alternate Alpine-based Image

To build an Alpine-based SnapShooter agent container, you need to install `bash` along with `curl`, `gzip`, and `tar`:

```dockerfile
FROM alpine:latest

WORKDIR /opt/snapshooter

# Install required packages
RUN apk add --no-cache bash curl gzip tar

# Download the agent binary, unzip it, and set execute permissions
RUN curl -sSL "<your_download_URL_here>" -o agent.gz \
    && gzip -d agent.gz \
    && chmod +x agent

# Run the agent
CMD ["/opt/snapshooter/agent"]
```

Replace `<your_download_URL_here>` with the URL you saved from the first step.

The final Alpine-based image has a size under 30 MB. The image using Ubuntu has a size of approximately 120 MB.

In this article...

- [Supported Environments](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#supported-environments)
- [Add an Agent Server](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#add-an-agent-server)
- [Create the Image](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#create-the-image)
- [Run the Container](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#run-the-container)
- [Run the Container Using Docker Compose](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#run-the-container-using-docker-compose)
- [An Alternate Alpine-based Image](https://docs.digitalocean.com/products/snapshooter/how-to/connect-using-containerized-agent/#an-alternate-alpine-based-image)

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