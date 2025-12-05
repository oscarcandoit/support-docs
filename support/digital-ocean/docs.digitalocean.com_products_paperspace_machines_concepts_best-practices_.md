---
url: "https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/"
title: "Machines Best Practices | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [Paperspace](https://docs.digitalocean.com/products/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/machines.4f455a935c3878c20e9d35654c24e34c18f052727b612061b52fbe7c0467d808.svg)Machines](https://docs.digitalocean.com/products/paperspace/machines/)
  - [Getting Started](https://docs.digitalocean.com/products/paperspace/machines/getting-started/)
    - [Quickstart](https://docs.digitalocean.com/products/paperspace/machines/getting-started/quickstart/)
    - [Use ML-in-a-Box](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/)
  - [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
    - [Create Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/create/)
    - [Connect to Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/)
    - [Deactivate Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/deactivate/)
    - [Manage Users](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-users/)
    - [Resize Machines](https://docs.digitalocean.com/products/paperspace/machines/how-to/resize/)
    - [Transfer Files](https://docs.digitalocean.com/products/paperspace/machines/how-to/transfer-files/)
    - [Use Windows Features](https://docs.digitalocean.com/products/paperspace/machines/how-to/use-windows-features/)
    - [Configure Auto-shutdown](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-auto-shutdown/)
    - [Manage Private Networks](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-private-networks/)
    - [Manage Public IP Addresses](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-public-ips/)
    - [Manage Shared Drives](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-shared-drives/)
    - [Manage Snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/)
    - [Manage Custom Templates](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-custom-template/)
    - [Manage VPNs](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-vpn/)
    - [Configure Desktop Streaming](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-desktop-streaming/)
    - [Manage NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/)
    - [Manage Hostnames](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-hosts/)
  - [Reference](https://docs.digitalocean.com/products/paperspace/machines/reference/)
    - [Paperspace API](https://docs.digitalocean.com/reference/paperspace/api-reference/)
    - [Paperspace CLIprivate](https://docs.digitalocean.com/reference/paperspace/pspace/)
    - [Core API, CLI, & SDK](https://docs.digitalocean.com/reference/paperspace/core/)
    - [States and Error Codes](https://docs.digitalocean.com/products/paperspace/machines/reference/states-and-error-codes/)
  - [Concepts](https://docs.digitalocean.com/products/paperspace/machines/concepts/)
    - [Best Practices](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/)
    - [Glossary](https://docs.digitalocean.com/glossary/machines/)
  - [Details](https://docs.digitalocean.com/products/paperspace/machines/details/)
    - [Features](https://docs.digitalocean.com/products/paperspace/machines/details/features/)
    - [Pricing](https://docs.digitalocean.com/products/paperspace/machines/details/pricing/)
    - [Availability](https://docs.digitalocean.com/products/paperspace/machines/details/availability/)
    - [NVIDIA H100 Reference](https://docs.digitalocean.com/products/paperspace/machines/details/h100/)
    - [Limits](https://docs.digitalocean.com/products/paperspace/machines/details/limits/)
    - [Machine Types](https://docs.digitalocean.com/products/paperspace/machines/details/machine-types/)
  - [Support](https://docs.digitalocean.com/products/paperspace/machines/support/)

- [Machines](https://docs.digitalocean.com/products/paperspace/machines/)
- [Concepts](https://docs.digitalocean.com/products/paperspace/machines/concepts/)
- Best Practices

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Machines Best Practices

Validated on 7 Aug 2024 • Last edited on 25 Oct 2024

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

We recommend the following best practices to optimize your machine’s performance and prevent technical issues. These best practices emphasize model and data safety as well as training optimizations.

## Use Snapshots as Machine Backups

A snapshot is a disk image of your machine at a specific point in time. Snapshots are useful as backups of your machine because you can use them to revert your machine to a previous state.

### When Should I Do This?

You should use snapshots as machine backups if you’re:

- Testing new configurations.
- Installing new software.
- Updating your machine.
- Saving a machine version after completing a milestone or important task.

### Why Should I Do This?

Snapshots are disk images of a machine’s hard drive, thus acting as reliable backups of your machine from a specific point in time. It protects the work you’ve done on the machine from unintended consequences, like data corruption, system failures, or accidental disconnections from Paperspace. Snapshots restore your machine with minimal downtime.

### How Do I Implement This?

You can set up snapshots by either [taking a manual snapshot](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#manual) or [setting up auto-snapshots](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-snapshots/#auto).

We recommend taking snapshots of your machine at regular intervals based on how frequently your model or data changes and how often you modify your machine’s configuration.

## Use Terminal Multiplexer (tmux) For Model Training

[tmux](https://github.com/tmux/tmux) is a terminal multiplexer which lets you create and use multiple terminal sessions simultaneously.

### When Should I Do This?

You should use tmux for model training if you’re:

- Running long model training sessions.
- Managing multiple tasks or models concurrently.
- Monitoring training progress across multiple sessions.

### How Does This Improve Performance?

tmux improves model training by using multiple accessible and active sessions as backups so your training sessions continue running even if you are inactive on your machine or a terminal disconnects. If one your terminals has a network error, tmux offloads the run to a different active terminal.

Additionally, tmux allows you to close a terminal session and start a new one without disrupting running processes in other sessions. With multiple terminals, you can train several models or run multiple tests on your models simultaneously, thereby shortening your training and testing processes.

### How Do I Implement This?

You can [set up tmux on your machine](https://www.digitalocean.com/community/tutorials/how-to-configure-tmux-on-a-cloud-server) by installing tmux and configuring its `.tmux.conf` file.

If you’re using a virtual environment, such as Python `venv`, you need to start tmux before activating the environment so tmux is aware of the environments you’re using.

## Use Multi-node Computing For Model Training

Multi-node computing involves using multiple nodes for high-performance computing tasks.

### When Should I Do This?

You should use multi-node computing if you’re:

- Training complex models that require extensive computational power and memory.
- Working with a large dataset, especially when the dataset doesn’t fit into your machine’s memory.
- Running long model training sessions.
- Managing multiple tasks or models concurrently.

### How Does This Improve Performance?

Multi-node computing improves resource scalability by distributing resources and data across multiple nodes as more are added to your machine. It also offers better resource utilization, as each node handles different parts of the computation or HPC task.

Using multiple nodes ensures that your training session continues even if one node fails, as the session transfers to another active node. By splitting large datasets and training tasks across nodes, multi-node computing reduces training and testing processes.

Moreover, running multiple training sessions simultaneously helps identify the ideal hyperparameters for your model more quickly because you can run and test different hyperparameter combinations of your model on different nodes.

### How Do I Implement This?

When using containers for multi-node setups, we recommend adding Infiniband devices and volumes to the container runtime configuration file because it helps achieve optimal performance in a multi-node environment. The following is an example configuration:

```text
--device /dev/infiniband/:/dev/infiniband/
--volume /dev/infiniband/:/dev/infiniband/
--volume /sys/class/infiniband/:/sys/class/infiniband/
--volume /etc/nccl/:/etc/nccl/
--volume /etc/nccl.conf:/etc/nccl.conf:ro
```

- `--device` allows the environment to access specific hardware, such as Infiniband devices, which improves the efficiency of data transfers and resource sharing.
- `--volume` mounts host directories in the multi-node environment so it has access to the necessary files and directories that may improve its performance.
For example, `--volume /etc/nccl/:/etc/nccl/` mounts the NVIDIA Collective Communications Library (NCCL) configuration directory to the multi-node environment. NCCL optimizes the multi-node environment’s performance by enabling efficient multi-node data transfers.

In this article...

- [Use Snapshots as Machine Backups](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#use-snapshots-as-machine-backups)
  - [When Should I Do This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#when-should-i-do-this)
  - [Why Should I Do This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#why-should-i-do-this)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#how-do-i-implement-this)
- [Use Terminal Multiplexer (tmux) For Model Training](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#use-terminal-multiplexer-tmux-for-model-training)
  - [When Should I Do This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#when-should-i-do-this-1)
  - [How Does This Improve Performance?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#how-does-this-improve-performance)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#how-do-i-implement-this-1)
- [Use Multi-node Computing For Model Training](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#multi-node)
  - [When Should I Do This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#when-should-i-do-this-2)
  - [How Does This Improve Performance?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#how-does-this-improve-performance-1)
  - [How Do I Implement This?](https://docs.digitalocean.com/products/paperspace/machines/concepts/best-practices/#how-do-i-implement-this-2)

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