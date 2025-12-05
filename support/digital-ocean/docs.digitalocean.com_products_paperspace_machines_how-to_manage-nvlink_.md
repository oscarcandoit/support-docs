---
url: "https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/"
title: "How to Enable or Disable NVLink | DigitalOcean Documentation"
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
- [How-Tos](https://docs.digitalocean.com/products/paperspace/machines/how-to/)
- Manage NVLink

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Enable or Disable NVLink

Validated on 7 Aug 2024 • Last edited on 18 Dec 2024

Machines are Linux and Windows virtual machines with persistent storage, GPU options, and free unlimited bandwidth. They’re designed for high-performance computing (HPC) workloads.

[NVLink](https://www.nvidia.com/en-us/data-center/nvlink/) is a high-speed GPU interconnect developed by NVIDIA. NVLink improves data transfer speeds and scalability for high-performance computing tasks across multiple GPUs.

## When to Enable or Disable NVLink

How you handle NVLink on your machine depends on the type of machine you’re using:

- Machines using H100x8 GPUs come with NVLink enabled. You don’t need to enable NVLink manually.

- Machines using H100x1 or A100-80Gx1 GPUs come with NVLink enabled. You need to [disable NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#disable-nvlink) in order to run CUDA.

You also need [NVIDIA drivers](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#cuda-drivers) and [the NVIDIA CUDA toolkit](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#toolkit) installed as described in this article, but do not need Fabric Manager.

- SSH-only machines do not come with NVLink enabled. You can choose to manually enable NVLink.


Tip

As an alternative to manually enabling NVLink, which can be complex and error-prone, we recommend creating machines using the [the ML-in-a-Box template](https://docs.digitalocean.com/products/paperspace/machines/getting-started/run-ml-in-a-box/) instead. ML-in-a-Box provides the data science stack needed for HPC tasks without the need to manually configure NVLink.

For improved performance on ML-in-a-Box machines, we recommend disabling the desktop environment. To do so, change the default startup target from a graphical interface to a non-graphical interface, and then reboot the machine:

```bash
sudo systemctl set-default multi-user.target
sudo reboot
```

If your use case requires NVLink, you can manually enable it using the instructions below.

## Enable NVLink

To enable NVLink, you must:

1. Update your machine’s packages and verify the compatibility of its GPUs.
2. Install the NVIDIA CUDA Toolkit.
3. Install CUDA Drivers and NVSMI.
4. Install NVIDIA Fabric Manager.

### Update Packages and Verify GPU Compatibility

Before installing the software necessary to enable NVLink, update the machine’s package index and packages to the latest versions and verify that the machine’s GPUs are compatible with NVLink.

First, [connect to your machine](https://docs.digitalocean.com/products/paperspace/machines/how-to/connect/) and open a terminal. Then, update your machine’s packages.

```bash
sudo apt-get update && apt-get upgrade -y
```

Next, identify your machine’s GPUs by listing the PCI devices on your machine and filtering by NVIDIA.

```bash
lspci | grep NVIDIA
```

The output displays the GPU model names:

```text
00:05.0 3D controller: NVIDIA Corporation GA100 [A100 SXM4 80GB] (rev a1)
00:06.0 3D controller: NVIDIA Corporation GA100 [A100 SXM4 80GB] (rev a1)
...
```

Search NVIDIA’s website for the GPU model and confirm that the NVLink is listed as a supported interconnect. For example, [NVIDIA’s page on the A100 GPU](https://www.nvidia.com/en-us/data-center/a100/) includes a specifications table at the bottom of the page with a row for interconnects.

### Install the NVIDIA CUDA Toolkit

NVCC, the CUDA compiler driver, compiles CUDA code into executable programs. Installing the NVIDIA CUDA Toolkit lets you use NVCC and other CUDA tools to develop and run CUDA applications.

Use the [CUDA Toolkit and driver compatibility table](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#id6) to find the right version for your machine.

[Download the repository pinning file](https://developer.nvidia.com/cuda-downloads) with the appropriate version and move it into the APT preferences directory, which handles package priorities. For example, on Ubuntu 22.04:

```bash
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-ubuntu2204.pin
sudo mv cuda-ubuntu2204.pin /etc/apt/preferences.d/cuda-repository-pin-600
```

Similarly, download and install NVIDIA’s CUDA repository Debian package, which contains the NVIDIA CUDA Toolkit. For example, with version 12.4 on Ubuntu 22.04

```bash
wget https://developer.download.nvidia.com/compute/cuda/12.4.1/local_installers/cuda-repo-ubuntu2204-12-4-local_12.4.1-550.54.15-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2204-12-4-local_12.4.1-550.54.15-1_amd64.deb
```

Copy the repository’s GPG key to the machine’s keyring directory, which securely authenticates packages from the repository. For example, for version 12.4 on Ubuntu 22.04:

```bash
sudo cp /var/cuda-repo-ubuntu2204-12-4-local/cuda-*-keyring.gpg /usr/share/keyrings/
```

Update the machine’s package lists to incorporate the new changes and then install the NVIDIA CUDA Toolkit from the repository you added. For example, for version 12.4:

```bash
sudo apt-get update
sudo apt-get -y install cuda-toolkit-12-4
```

Once you have the NVIDIA CUDA Toolkit installed on your machine, you can verify the version of NVCC with `nvcc --version`.

If you installed the toolkit but the `nvcc` command isn’t found, the toolkit may not be on the PATH of your machine.

Click to expand instructions on updating your machine’s PATH.

To add the toolkit to your PATH, add the following lines to the `~/.profile` file:

```bash
export PATH=/etc/alternatives/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/etc/alternatives/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

Save the file, and then apply the changes:

```bash
source ~/.profile
```

Run the `nvcc --version` command again to confirm the fix.

### Install CUDA Drivers and NVSMI

NVSMI, the NVIDIA System Management Interface, monitors and manages NVIDIA GPU devices by providing access to GPU settings, configuration details, performance, and real-time statuses. It also shows how GPUs are interconnected, either through PCIe or NVLink.

The NVIDIA CUDA drivers, which are necessary to use NVLink, include NVSMI. [Install the CUDA drivers](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html#nvidia-driver-installation-for-ubuntu) on your machine:

```bash
sudo apt-get install -y cuda-drivers
```

You can confirm that NVSMI is also installed by running `nvidia-smi`, which outputs information about your machine’s GPUs.

### Install NVIDIA Fabric Manager

NVIDIA Fabric Manager manages fabric resources, such as NVLink, and is essential for machines involving complex GPU interconnects, such as configuring and allocating NVLink connections.

[Install Fabric Manager](https://docs.nvidia.com/datacenter/tesla/fabric-manager-user-guide/index.html) on your machine and start it:

```bash
sudo apt-get install cuda-drivers-fabricmanager-550 -y
sudo systemctl start nvidia-fabricmanager
```

## Verify NVLink Configuration

Once NVLink is enabled, you can test the connections between your machine’s GPUs and confirm that NVLink is functioning, then test the CUDA environment.

### Check the Connectivity Matrix

Use NVSMI to output information about your GPUs:

```bash
nvidia-smi
```

In the output, look for the NVLink GPU Peer-to-Peer Connectivity Matrix:

```text
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 520.56.06    Driver Version: 520.56.06    CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA H100      Off     | 00000000:00:1A.0 Off |                    0 |
| N/A   32C    P0    40W / 300W |      0MiB / 40960MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+
...
+-----------------------------------------------------------------------------+
| NVLink GPU Peer-to-Peer Connectivity Matrix                                 |
|                                                                             |
|     GPU0    GPU1                                                            |
|     0       1                                                               |
| 0   X       NV1                                                             |
| 1   NV1     X                                                               |
+-----------------------------------------------------------------------------+
|   NV1  Enabled                                                              |
+-----------------------------------------------------------------------------+
```

NVLink is enabled if you see “NV1 Enabled” or “NV2 Enabled”.

### Check the GPU Topology

Next, use NVSMI to display the GPU topology, or how the GPUs are connected to each other.

```bash
nvidia-smi topo -m
```

The output displays a table with connectivity details between each GPU:

```text
        GPU0    GPU1    GPU2    GPU3    CPU Affinity    NUMA Affinity
GPU0     X      NV1     NV1     NV2     0-15            N/A
GPU1    NV1      X      NV1     NV2     0-15            N/A
...
```

The GPUs are interconnected with NVLink if you see “NV1” or “NV2” in the output.

### Check the NVLink Connections

Finally, check the status of each NVLink connection for each GPU.

```bash
nvidia-smi nvlink --status
```

This command outputs information about each NVLink connection, like its utilization and its active or inactive status.

```text
GPU 0: NVIDIA H100
    Link 0: 250 GB/s - Active
    Link 1: 250 GB/s - Active
    Link 2: 250 GB/s - Inactive
    Link 3: 250 GB/s - Active
    Link 4: 250 GB/s - Active
    Link 5: 250 GB/s - Active

GPU 1: NVIDIA H100
    Link 0: 250 GB/s - Active
    Link 1: 250 GB/s - Active
    Link 2: 250 GB/s - Active
    Link 3: 250 GB/s - Active
    Link 4: 250 GB/s - Inactive
    Link 5: 250 GB/s - Active
...
```

If NVLink has an inactive status on all links, then there’s an issue with the configuration. To troubleshoot, repeat the above steps for installing the necessary software and testing the GPU and NVLink connections. If going through the steps again doesn’t fix the issue, reboot the machine with `sudo reboot`.

For further assistance, contact [Paperspace support](https://docs.digitalocean.com/products/paperspace/machines/support/).

### Test the CUDA Environment

After verifying and enabling NVLink, test your machine’s CUDA environment using CUDA samples, which are a collection of samples created by NVIDIA. These samples are used to configure and test CUDA Toolkit features, such as NVLink.

Clone the [CUDA Samples repository](https://github.com/NVIDIA/cuda-samples).

```bash
git clone https://github.com/NVIDIA/cuda-samples
```

The `deviceQuery` sample is a utility that provides information about the CUDA devices on your machine. It verifies that the system recognizes the GPUs and displays their capabilities, such as NVLink connection.

Move to the `deviceQuery` directory and compile the sample using the provided Makefile:

```bash
cd cuda-samples/Samples/1_Utilities/deviceQuery
make
```

You can alternatively compile the sample with `nvcc -o deviceQuery deviceQuery.cu`.

Finally, run the compiled program:

```bash
./deviceQuery
```

This validates that the CUDA environment is set up correctly and NVLink is connecting the GPUs within your machine.

```text
Device 0: "NVIDIA H100 PCIe"
...
  NVLink capability:                             Supported
    P2P Access between GPUs:                     Yes
```

If NVLink doesn’t appear in the `deviceQuery` output, then there is an issue with either the hardware setup, the driver configuration, or software configuration.

## Disable NVLink

To disable NVLink on your machine, you need to disable it both at the system level and on the RAM disk (`initrd`).

### At the System Level

First, create a backup of the GRUB configuration file with the current date for identification. You can restore from this file in event of an error.

```shell
sudo cp /etc/default/grub /etc/default/grub.backup_$(date +%Y-%m-%d)
```

Next, open `/etc/default/grub` with a text editor and update the `GRUB_CMDLINE_LINUX_DEFAULT` value to disable NVLink.

```shell
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nvlink.disable=1"
```

Save and close the file, then update GRUB and reboot your machine.

```shell
sudo update-grub
sudo reboot
```

If your machine does not boot, use your GRUB backup file to restore the original configuration and try again.

Click to expand instructions on restoring from the GRUB backup file.

First, print a list of your machine’s disk partitions.

```shell
sudo fdisk -l
```

Locate the partition that has the Linux filesystem. This has a `dev/sdXn` naming pattern. For example, if the device name is `/dev/sda1`, `sda` represents your hard disk and the number represents the partition number.

Mount the partition where your Ubuntu system is installed, replacing `dev/sdXn` with the appropriate system partition from the previous step.

```shell
sudo mount /dev/sdXn /mnt
```

Mount the necessary directories.

```shell
sudo mount --bind /dev /mnt/dev
sudo mount --bind /proc /mnt/proc
sudo mount --bind /sys /mnt/sys
sudo mount --bind /run /mnt/run
```

Change the root directory to your system’s partition.

```shell
sudo chroot /mnt
```

This creates an environment, often called a `chroot` jail, where programs cannot access files outside of the directory specified.

Restore the GRUB configuration file using your backup file.

```shell
sudo cp $(ls -Art /etc/default/grub.backup* | tail -n 1) /etc/default/grub
```

The `*` in the command matches filenames that start with `grub.backup`, such as the filename with the backup’s creation date, in the `/etc/default` directory.

Update your GRUB configuration file, exit the `chroot` jail, and reboot your machine.

```shell
update-grub
exit
sudo reboot
```

### On the RAM Disk

Update your RAM disk to ensure NVLink is disabled when you start up your machine.

Create a backup of the current `initrd` file with the current date for identification. You can restore from this file in event of an error.

```shell
sudo cp /boot/initrd.img-$(uname -r) /boot/initrd.img-$(uname -r).backup_$(date +%Y-%m-%d)
```

Then, to disable NVLink, modify the `initramfs` configurations with one of the following options:

- **Create a [`modprobe`](https://en.wikipedia.org/wiki/Modprobe) configuration file** that denylists NVIDIA NVLink modules:



```shell
echo "blacklist <module_name>" | sudo tee /etc/modprobe.d/nvlink-denylist.conf
```



This does not change `initramfs` but makes `initramfs` respect your denylist.

- **Write an `initramfs-tools` script to disable NVLink**. For example, create `/etc/initramfs-tools/scripts/new-init/disable-nvlink.sh`, and enter a script like the following that disables specific NVIDIA kernel modules:



```shell
#!/bin/sh

modprobe -r nvidia_nvlink
modprobe -r nvidia_uvm
```



Save and close the file. Then, make the script executable and rebuild `initrd` for your running kernel.



```shell
sudo chmod +x /etc/initramfs-tools/scripts/new-init/disable_nvlink.sh
sudo update-initramfs -u
```



To disable NVLink across all Linux kernel versions on your machine (if you have a multi-boot environment or multiple kernel versions for testing or compatibility reasons), update all installed kernels:



```shell
sudo update-initramfs -c -k all
```


Finally, reboot your machine.

```shell
sudo reboot
```

If your RAM disk is corrupted after a reboot, restore your RAM disk using your backup file and reboot your machine.

```shell
sudo cp /boot/initrd.img-$(uname -r).backup_$(date +%Y-%m-%d) /boot/initrd.img-$(uname -r)
sudo reboot
```

After the reboot, you can try again.

In this article...

- [When to Enable or Disable NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#when-to-enable-or-disable-nvlink)
- [Enable NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#enable-nvlink)
  - [Update Packages and Verify GPU Compatibility](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#update-packages-and-verify-gpu-compatibility)
  - [Install the NVIDIA CUDA Toolkit](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#toolkit)
  - [Install CUDA Drivers and NVSMI](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#cuda-drivers)
  - [Install NVIDIA Fabric Manager](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#install-nvidia-fabric-manager)
- [Verify NVLink Configuration](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#verify-nvlink-configuration)
  - [Check the Connectivity Matrix](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#check-the-connectivity-matrix)
  - [Check the GPU Topology](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#check-the-gpu-topology)
  - [Check the NVLink Connections](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#check-the-nvlink-connections)
  - [Test the CUDA Environment](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#test-the-cuda-environment)
- [Disable NVLink](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#disable-nvlink)
  - [At the System Level](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#at-the-system-level)
  - [On the RAM Disk](https://docs.digitalocean.com/products/paperspace/machines/how-to/manage-nvlink/#on-the-ram-disk)

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