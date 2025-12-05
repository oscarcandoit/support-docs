---
url: "https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/"
title: "OpenEBS NFS Provisioner | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/marketplace.6eb4c8240f6fd707ebe2218018dc699d375e2e3e9885d7fb3e760a9fc120a68e.svg)Marketplace](https://docs.digitalocean.com/products/marketplace/)
- [Droplet 1-Click Apps](https://docs.digitalocean.com/products/marketplace/droplet-1-click-apps/)
- [Kubernetes 1-Click Apps](https://docs.digitalocean.com/products/marketplace/kubernetes-1-click-apps/)
- [SaaS Add-Ons](https://docs.digitalocean.com/products/marketplace/saas-add-ons/)
- [1-Click Models](https://docs.digitalocean.com/products/marketplace/1-click-models/)
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/)
  - [Add-Ons](https://docs.digitalocean.com/products/marketplace/categories/add-ons/)
  - [Analytics](https://docs.digitalocean.com/products/marketplace/categories/analytics/)
  - [Blogs and Forums](https://docs.digitalocean.com/products/marketplace/categories/blogs-and-forums/)
  - [Business Apps](https://docs.digitalocean.com/products/marketplace/categories/business-apps/)
  - [Chat](https://docs.digitalocean.com/products/marketplace/categories/chat/)
  - [Data Science](https://docs.digitalocean.com/products/marketplace/categories/data-science/)
  - [Databases](https://docs.digitalocean.com/products/marketplace/categories/databases/)
  - [Developer Tools](https://docs.digitalocean.com/products/marketplace/categories/developer-tools/)
  - [eCommerce](https://docs.digitalocean.com/products/marketplace/categories/ecommerce/)
  - [eLearning](https://docs.digitalocean.com/products/marketplace/categories/elearning/)
  - [Email](https://docs.digitalocean.com/products/marketplace/categories/email/)
  - [Frameworks](https://docs.digitalocean.com/products/marketplace/categories/frameworks/)
  - [Functions](https://docs.digitalocean.com/products/marketplace/categories/functions/)
  - [Gaming](https://docs.digitalocean.com/products/marketplace/categories/gaming/)
  - [Kubernetes](https://docs.digitalocean.com/products/marketplace/categories/kubernetes/)
  - [Logging](https://docs.digitalocean.com/products/marketplace/categories/logging/)
  - [Media](https://docs.digitalocean.com/products/marketplace/categories/media/)
  - [Monitoring](https://docs.digitalocean.com/products/marketplace/categories/monitoring/)
  - [Network Tools](https://docs.digitalocean.com/products/marketplace/categories/network-tools/)
  - [Security](https://docs.digitalocean.com/products/marketplace/categories/security/)
  - [Storage](https://docs.digitalocean.com/products/marketplace/categories/storage/)
- [Glossary](https://docs.digitalocean.com/glossary/marketplace/)
- [Service-Level Agreement](https://www.digitalocean.com/sla/marketplace)

- OpenEBS NFS Provisioner

[Give Feedback](https://ideas.digitalocean.com/documentation)

# OpenEBS NFS Provisioner

Generated on 11 Jun 2024
from [the OpenEBS NFS Provisioner catalog page](https://marketplace.digitalocean.com/apps/openebs-nfs-provisioner)

[OpenEBS NFS PV Provisioner](https://github.com/openebs/dynamic-nfs-provisioner) helps developers easily deploy Kubernetes workloads that require fast and highly reliable shared NFS storage. It can be used to dynamically provision NFS Volumes using different kinds (local or network) of block storage available on the Kubernetes nodes. Using NFS Volumes, you can share volume data across the pods running on different node machines. You can easily create NFS Volumes using OpenEBS Dynamic NFS Provisioner and use it anywhere.

Under the hood, the NFS provisioner runs a NFS server pod for each shared storage volume. It uses DigitalOcean block storage (do-block-storage) as the backing volume for NFS.

**Notes:**

- This stack requires a minimum configuration of 2 Nodes at the $10/month plan (2GB memory / 1 vCPU).
- A 1GB block storage volume is required as well for testing the dynamic NFS provisioner.

## OpenEBS Dynamic NFS Provisioner Overview Diagram

The following diagram shows how OpenEBS Dynamic NFS Provisioner works on a Kubernetes cluster (based on the example used in the getting started section):

![OpenEBS Dynamic NFS Provisioner Overview](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/openebs-nfs-provisioner/assets/images/arch_openebs.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [OpenEBS NFS Provisioner](https://github.com/openebs/dynamic-nfs-provisioner) | [0.11.0](https://github.com/openebs/dynamic-nfs-provisioner/releases/tag/nfs-provisioner-0.11.0) | [Apache 2.0](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=openebs-nfs-provisioner&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating OpenEBS NFS Provisioner using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks openebs-nfs-provisioner
```

## Getting Started After Deploying OpenEBS NFS Provisioner

### Connecting to Your Cluster

You can connect to your DigitalOcean Kubernetes cluster by following our [how-to guide](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster).

For additional instructions on configuring a [DigitalOcean Kubernetes](https://cloud.digitalocean.com/kubernetes/clusters) cluster, see the following [guide](https://github.com/digitalocean/Kubernetes-Starter-Kit-Developers/tree/main/01-setup-DOKS#how-to-set-up-a-digitalocean-managed-kubernetes-cluster-doks).

### Confirming that OpenEBS NFS Provisioner is Running

First, verify that the Helm installation was successful by running following command:

```
helm ls -n openebs-nfs-provisioner
```

If the installation was successful, the `STATUS` column value in the output reads `deployed`:

```
NAME                    NAMESPACE               REVISION        UPDATED                                 STATUS          CHART                   APP VERSION
openebs-nfs-provisioner openebs-nfs-provisioner 1               2022-05-17 10:08:02.345252 +0300 EEST   deployed        nfs-provisioner-0.11.0   0.11.0
```

Next, verify that the openebs-nfs-provisioner pod is up and running with the following command:

```
kubectl get pods --all-namespaces -l name=openebs-nfs-provisioner
```

If it’s running, the pod listed in the output are in a `READY` state and the `STATUS` column reads `Running`:

```
NAMESPACE                 NAME                                       READY   STATUS    RESTARTS   AGE
openebs-nfs-provisioner   openebs-nfs-provisioner-5cfd76f4fc-5k7wf   1/1     Running   0          11m
```

Finally, verify if the read-write storage class `nfs-rwx-storage` is created.

```
kubectl get storageclass nfs-rwx-storage
```

This should result in an output as below:

```
NAME              PROVISIONER         RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
nfs-rwx-storage   openebs.io/nfsrwx   Delete          Immediate           false                  5d15h
```

Note that you can create your own storage class, and as many as you like. As a reference, here is the [manifest for the nfs-rwx-storage class](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/openebs-nfs-provisioner/assets/manifests/sc-nfs-rwx.yaml).

### Testing RWX Access Mode for OpenEBS NFS Volumes

First, you will create a new PVC referencing the OpenEBS `nfs-rwx-storage` class:

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: nfs-pvc
spec:
  storageClassName: nfs-rwx-storage
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
```

Above manifest instructs Kubernetes to create a new PVC based on the `nfs-rwx-storage` class via `spec.storageClassName`, and sets access mode to `ReadWriteMany` (`spec.accessModes`). You can accomplish the above task by using the [sample manifest](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-pvc.yaml) provided in the marketplace GitHub repository:

```
kubectl apply -f https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-pvc.yaml
```

Now, check if the `nfs-pvc` is healthy:

```
kubectl get pvc nfs-pvc
```

The output looks similar to:

```
NAME      STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE
nfs-pvc   Bound    pvc-776fd89f-c7aa-4e57-a8f5-914ab77f71d5   1Gi        RWX            nfs-rwx-storage  1m
```

The NFS PVC should be in a `Bound` state, and access mode set to `RWX` (ReadWriteMany). Storage class should display `nfs-rwx-storage`, and a capacity of `1Gi` should be provisioned.

Next, create the [nfs-share-test](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-share-test.yaml) deployment provided in the marketplace GitHub repository:

```
kubectl apply -f https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-share-test.yaml
```

Above manifest will create the `nfs-share-test` deployment with a replica count of 3, and mounts same volume (`nfs-share-test`) for all pods to consume. Then, the Kubernetes [Downward API](https://kubernetes.io/docs/tasks/inject-data-application/downward-api-volume-expose-pod-information) is used to read each Pod metadata (such as Node name, Pod Name/IP), and write the details in a single log file from the NFS share (`/mnt/nfs-test/nfs-rwx.log`).

Now, inspect `nfs-share-test` deployment Pods status:

```
kubectl get pods -l test=nfs-share
```

The output looks similar to:

```
NAME                              READY   STATUS    RESTARTS   AGE
nfs-share-test-67bf984f88-4flq2   1/1     Running   0          98s
nfs-share-test-67bf984f88-9hmfz   1/1     Running   0          98s
nfs-share-test-67bf984f88-tnz8q   1/1     Running   0          98s
```

All pods should be healthy and in a running state.

Finally, check `nfs-share-test` deployment logs:

```
kubectl exec -it deployments/nfs-share-test -- tail -f /mnt/nfs-test/nfs-rwx.log
```

The output looks similar to:

```
...
[2022-05-31 11:09:04][NFS-RWX-TEST] NODE=basicnp-cajb7 POD=nfs-share-test-67bf984f88-9hmfz POD_IP=10.244.0.229
[2022-05-31 11:09:04][NFS-RWX-TEST] NODE=basicnp-cajbm POD=nfs-share-test-67bf984f88-4flq2 POD_IP=10.244.0.112
[2022-05-31 11:09:14][NFS-RWX-TEST] NODE=basicnp-cajb7 POD=nfs-share-test-67bf984f88-tnz8q POD_IP=10.244.0.243
[2022-05-31 11:09:14][NFS-RWX-TEST] NODE=basicnp-cajb7 POD=nfs-share-test-67bf984f88-9hmfz POD_IP=10.244.0.229
[2022-05-31 11:09:14][NFS-RWX-TEST] NODE=basicnp-cajbm POD=nfs-share-test-67bf984f88-4flq2 POD_IP=10.244.0.112
[2022-05-31 11:09:24][NFS-RWX-TEST] NODE=basicnp-cajb7 POD=nfs-share-test-67bf984f88-tnz8q POD_IP=10.244.0.243
...
```

Each pod should be able to write to the same log file (`nfs-rwx.log`), and publish its metadata each 10 seconds. This confirms that NFS storage is working.

To delete the test application, use the following. However, keep the applications running if you want to further explore the failure cases in the section below.

```
kubectl delete -f https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-share-test.yaml
kubectl delete -f https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/openebs-nfs-provisioner/assets/manifests/nfs-pvc.yaml
```

### Failure Cases for NFS Provisioner

Note the nfs-pvc-\* pod name in openebs-nfs-provisioner namespace. This pod is running the NFS server, which is sharing the nfs-pvc volume.

```
~ kubectl get pods -n openebs-nfs-provisioner -o wide
NAME                                                            READY   STATUS    RESTARTS     AGE    IP             NODE                   NOMINATED NODE   READINESS GATES
nfs-pvc-509d7613-b141-4edd-b0d5-59ae9f2a0eb3-5c49b6d9f6-7rhw2   1/1     Running   0            153m   10.244.0.109   pool-vc6axdi2c-ct7j3   <none>           <none>
openebs-nfs-provisioner-5cfd76f4fc-47xls                        1/1     Running   1 (8h ago)   8h     10.244.1.157   pool-vc6axdi2c-ct7x4   <none>           <none>
```

You can see how this is a single point of failure. Two obvious failure scenarios are:

- The nfs-pvc-\* pod itself is terminated unexpectedly.
- The underlying node of nfs-pvc-\* pod is terminated. Note that if the underlying node is drained, then the nfs server pod will have a chance to reschedule, hence minimizing the impact.

How do we determine the NFS server outage when any of the above happen? We can use the same application from the above section, and watch the time gap in the logs because of the incident. In the normal scenario, data is read and logs are written for every pod in 10 sec interval:

```
~ kubectl exec -it deployments/nfs-share-test -- tail -f /mnt/nfs-test/nfs-rwx.log

[2022-06-01 08:36:16][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10.244.1.247
[2022-06-01 08:36:19][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:36:25][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
[2022-06-01 08:36:26][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10.244.1.247
[2022-06-01 08:36:29][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:36:35][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
[2022-06-01 08:36:36][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10.244.1.247
[2022-06-01 08:36:39][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:36:45][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
```

Now, kill the nfs-pvc-\* pod, and watch the gap in the logs. In this particular test, you can see ~90 seconds of delay for NFS server to be fully functional after getting killed:

```
[2022-06-01 08:37:56][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10.244.1.247
[2022-06-01 08:37:59][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:38:05][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
[2022-06-01 08:38:06][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10.244.1.247
[2022-06-01 08:38:09][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:38:15][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
[2022-06-01 08:38:25][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
[2022-06-01 08:40:11][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7j3 POD=nfs-share-test-67bf984f88-nxbrg POD_IP=10.244.0.82
[2022-06-01 08:40:14][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10.244.1.120
```

Now, kill the underlying node (go to droplet page in your cloud console and kill the droplet directly). Around 4-7 minutes of downtime is expected in this failure scenario. In one particular test, the NFS server has to be restarted as well, as it kept waiting for the volume to be available.

```
[2022-06-01 08:47:04][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10
[2022-06-01 08:47:14][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10
[2022-06-01 08:47:23][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10
[2022-06-01 08:54:56][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-jlstx POD_IP=10
[2022-06-01 08:56:47][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10
[2022-06-01 08:56:47][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-2qw6q POD_IP=10
[2022-06-01 08:56:48][NFS-RWX-TEST] NODE=pool-vc6axdi2c-ct7x4 POD=nfs-share-test-67bf984f88-jlstx POD_IP=10
[2022-06-01 08:56:57][NFS-RWX-TEST] NODE=pool-vc6axdi2c-cezr9 POD=nfs-share-test-67bf984f88-56sxz POD_IP=10
```

**It is very important to be aware of the the service impact due to these unexpected events, and design your application accordingly.**

### Benchmarking OpenEBS NFS Performance

Benchmarking is subjective (iops, throughput, and latency for different configurations) and dependent on your specific needs. For example, if you are storing 2MB+ size files on your NFS server, then benchmarking for 4K sized blocks is not appropriate. Saying this, a good starter benchmark would be to do a basic measurement and be aware of the limits. A well-known tool is [fio](https://github.com/axboe/fio). [Kubestr](https://github.com/kastenhq/kubestr) provides a CLI-based wrapper for using fio on Kubernetes. Download kubestr to your laptop, and you can benchmark any storage class with just one command with the default fio configuration:

```
~ kubestr fio -s rwx-storage -z 50Gi
PVC created kubestr-fio-pvc-87mg8
Pod created kubestr-fio-pod-wjtnn
Running FIO test (default-fio) on StorageClass (rwx-storage) with a PVC of Size (50Gi)
Elapsed time- 2m1.099989659s
FIO test results:

FIO version - fio-3.20
Global options - ioengine=libaio verify=0 direct=1 gtod_reduce=1

JobName: read_iops
  blocksize=4K filesize=2G iodepth=64 rw=randread
read:
  IOPS=1086.609985 BW(KiB/s)=4363
  iops: min=554 max=1934 avg=1090.666626
  bw(KiB/s): min=2216 max=7736 avg=4362.666504

JobName: write_iops
  blocksize=4K filesize=2G iodepth=64 rw=randwrite
write:
  IOPS=1085.600220 BW(KiB/s)=4359
  iops: min=554 max=1938 avg=1088.033325
  bw(KiB/s): min=2216 max=7752 avg=4352.133301

JobName: read_bw
  blocksize=128K filesize=2G iodepth=64 rw=randread
read:
  IOPS=1086.641846 BW(KiB/s)=139625
  iops: min=554 max=1940 avg=1090.833374
  bw(KiB/s): min=70912 max=248320 avg=139626.671875

JobName: write_bw
  blocksize=128k filesize=2G iodepth=64 rw=randwrite
write:
  IOPS=1087.179199 BW(KiB/s)=139695
  iops: min=552 max=1936 avg=1089.833374
  bw(KiB/s): min=70656 max=247808 avg=139501.406250

Disk stats (read/write):
  -  OK
~
```

You can repeat similar command for do-block-storage.

### Tweaking Helm Values

The OpenEBS dynamic NFS provisioner stack provides some custom values to start with. Please have a look at the [values](https://github.com/digitalocean/marketplace-kubernetes/blob/master/stacks/openebs-nfs-provisioner/values.yml) file from the main GitHub repository.

You can always inspect all the available options, as well as the default values for the OpenEBS dynamic NFS provisioner Helm chart by running below command:

```
helm show values openebs-nfs/nfs-provisioner --version 0.11.0 --version 0.11.0
```

After tweaking the Helm values file (`values.yml`) according to your needs, you can always apply the changes via `helm upgrade` command, as shown below:

```
helm upgrade openebs-nfs-provisioner openebs-nfs/nfs-provisioner --version 0.11.0 \
  --namespace openebs-nfs-provisioner \
  --values values.yml
```

### Upgrading the OpenEBS Dynamic NFS Provisioner Chart

You can check what versions are available to upgrade by navigating to the [openebs/dynamic-nfs-provisioner](https://github.com/openebs/dynamic-nfs-provisioner) official releases page from GitHub.

To upgrade the stack to a newer version, run the following command, replacing the `&amp;amp;amp;amp;lt;&amp;amp;amp;amp;gt;` placeholders with their corresponding information:

```
helm upgrade openebs-nfs-provisioner openebs-nfs/nfs-provisioner \
  --version <OPENEBS_DYNAMIC_NFS_PROVISIONER_STACK_NEW_VERSION> \
  --namespace openebs-nfs-provisioner \
  --values <YOUR_HELM_VALUES_FILE>
```

See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade) for command documentation.

## Uninstalling OpenEBS NFS Provisioner Stack

To delete your installation of `openebs-nfs-provisioner,`, run the following command:

```
helm uninstall openebs-nfs-provisioner -n openebs-nfs-provisioner
```

**Note:**

- The Helm uninstall command will delete all the associated Kubernetes resources installed by the `openebs-nfs-provisioner` Helm chart, except the namespace itself. To delete the `openebs-nfs-provisioner namespace` as well, run the following command:


```
kubectl delete ns openebs-nfs-provisioner
```

- You have to manually delete the DO block storage volume created by the NFS PVC used for testing, if no longer needed. You can do this either via the DigitalOcean [volumes web panel](https://cloud.digitalocean.com/volumes), or `doctl`:


```
$ doctl compute volume list --format ID,Name,Size

ID                                      Name                                        Size
c1c46cab-e30b-11ec-932d-0a58ac14c29b    pvc-150c7961-18ec-497f-8a3e-bb5e0d29299c    5 GiB
f3c4cc73-e30b-11ec-99e3-0a58ac14c1da    pvc-dec8c104-4542-4657-a5ae-661a5476dee2    1 GiB
```


Then, delete the corresponding volume by ID. Please bear in mind that your volume ID might differ in the listing, so make sure to pick the right one and replace the `&amp;amp;lt;&amp;amp;gt;` placeholders accordingly:


```
doctl compute volume delete <YOUR_NFS_VOLUME_ID>
```


### Additional Resources

- [OpenEBS NFS Provisioner on GitHub](https://github.com/openebs/dynamic-nfs-provisioner)
- [Deploying Wordpress on DigitalOcean using OpenEBS NFS Provisioner](https://github.com/digitalocean/container-blueprints/tree/main/DOKS-wordpress)
- [Configuring Node Affinity for NFS Volumes](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/docs/tutorial/node-affinity.md)
- [Setting Resource requirements for NFS Server](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/docs/tutorial/configure-nfs-server-resource-requirements.md)
- [Exposing NFS Volume outside the cluster](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/docs/expose-nfs-server.md)
- [Monitoring NFS Provisioner](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/docs/metrics.md)
- [Configuring Hook for NFS Provisioner](https://github.com/openebs/dynamic-nfs-provisioner/blob/develop/docs/tutorial/nfs-hook.md)

In this article...

- [OpenEBS Dynamic NFS Provisioner Overview Diagram](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#openebs-dynamic-nfs-provisioner-overview-diagram)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#creating-an-app-using-the-api)
- [Getting Started After Deploying OpenEBS NFS Provisioner](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#getting-started-after-deploying-openebs-nfs-provisioner)
  - [Connecting to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#connecting-to-your-cluster)
  - [Confirming that OpenEBS NFS Provisioner is Running](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#confirming-that-openebs-nfs-provisioner-is-running)
  - [Testing RWX Access Mode for OpenEBS NFS Volumes](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#testing-rwx-access-mode-for-openebs-nfs-volumes)
  - [Failure Cases for NFS Provisioner](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#failure-cases-for-nfs-provisioner)
  - [Benchmarking OpenEBS NFS Performance](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#benchmarking-openebs-nfs-performance)
  - [Tweaking Helm Values](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#tweaking-helm-values)
  - [Upgrading the OpenEBS Dynamic NFS Provisioner Chart](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#upgrading-the-openebs-dynamic-nfs-provisioner-chart)
- [Uninstalling OpenEBS NFS Provisioner Stack](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#uninstalling-openebs-nfs-provisioner-stack)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/openebs-nfs-provisioner/#additional-resources)

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