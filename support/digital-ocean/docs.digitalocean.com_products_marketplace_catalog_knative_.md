---
url: "https://docs.digitalocean.com/products/marketplace/catalog/knative/"
title: "Knative | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/knative/)
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

- Knative

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Knative

Generated on 9 Jan 2024
from [the Knative catalog page](https://marketplace.digitalocean.com/apps/knative)

[Knative](https://knative.dev/) is an open-source solution to build and deploy serverless applications using Kubernetes as the underlying platform. In addition to application development, developers may also have infrastructure tasks such as maintaining Kubernetes manifests for application deployment, rolling back to a previous revision, traffic routing, scaling up or down workloads to meet load demand, etc. Knative reduces the boilerplate needed for spinning up workloads in Kubernetes, such as creating deployments, services, ingress objects, etc. Knative also helps you implement best practices in production systems (e.g. blue-green, canary deployments), application observability (logs and metrics), and support for event-driven applications.

Knative comprises of two main components:

- [Serving](https://knative.dev/docs/serving): Abstracts all required parts needed for your application to run and be accessible to the outside world.
- [Eventing](https://knative.dev/docs/eventing): Adds support for event based programming, thus making it easy to create event driven architectures.

Knative Serving features include:

- Deploy serverless applications quickly.
- Autoscaling for application pods (down scaling to zero is supported).
- Point-in-time snapshots for application code and configurations (via revisions).
- Routing and network programming. Supports multiple networking layers, like: [Kourier](https://github.com/knative-sandbox/net-kourier), [Contour](https://projectcontour.io/), [Istio](https://istio.io/).

Knative Eventing helps address common tasks for cloud native development such as:

- Enabling late-binding for event sources and consumers.
- Loose coupling between services, thus making easy to deploy individual application components.
- Various services can be connected without modifying consumers or producers, thus facilitating building new applications.

## Knative Serving Overview Diagram

The diagram below shows a simplified overview of how Knative Serving works:

![Knative Serving Overview](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/knative/assets/images/arch_knative_serving.png)

**Notes:**

- DigitalOcean uses the [Knative Operator](https://github.com/knative/operator) to deploy Knative and the required components (Serving and Eventing) to your DOKS cluster.
- The Knative 1-Click App deploys Kourier as the default Ingress Controller for Knative.
- The Knative 1-Click App also includes a $12/month DigitalOcean Load Balancer to ensure that ingress traffic is distributed across all Knative services.

## Requirements

Minimum system requirements for Knative are as follows:

- A DOKS cluster running Kubernetes version 1.21.
- A DOKS cluster with 2 nodes, each with 2 CPUs, 4 GB of memory, and 20 GB of disk storage.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Knative Operator](https://github.com/knative/operator) | [1.11.6](https://github.com/knative/operator/releases/tag/knative-v1.11.6) | [Apache 2.0](https://github.com/knative/operator/blob/main/LICENSE) |
| [Knative Serving](https://github.com/knative/serving) | [1.11.6](https://github.com/knative/serving/releases/tag/knative-v1.11.6) | [Apache 2.0](https://github.com/knative/serving/blob/main/LICENSE) |
| [Knative Eventing](https://github.com/knative/eventing) | [1.11.6](https://github.com/knative/eventing/releases/tag/knative-v1.11.6) | [Apache 2.0](https://github.com/knative/eventing/blob/main/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=knative&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating Knative using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks knative
```

## Getting Started After Deploying Knative

### Connecting to Your Cluster

Follow these [instructions](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl` and `doctl`.

### Confirming Knative Operator is Running

First, check if the `Knative Operator` installation was successful by running command below:

```
kubectl get deployment knative-operator
```

The output looks similar to the following:

```
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
knative-operator   1/1     1            1           85s
```

Check the `READY` column value to make sure that all `knative-operator` deployment pods are up and running.

Finally, inspect `knative-operator` logs (and check for possible issues, if any):

```
kubectl logs -f deploy/knative-operator
```

### Confirming that Knative Serving is Running

Serving is one of the main components of Knative. Check if it is running by using the following command:

```
kubectl get KnativeServing knative-serving -n knative-serving
```

The output looks similar to the following:

```
NAME              VERSION   READY   REASON
knative-serving   1.11.6     True
```

The `READY` column should have a value of `True`.

Then, run the following command to check if all Knative Serving deployments are healthy:

```
kubectl get deployment -n knative-serving
```

The output looks similar to:

```
NAME                     READY   UP-TO-DATE   AVAILABLE   AGE
3scale-kourier-gateway   1/1     1            1           3h17m
activator                1/1     1            1           3h17m
autoscaler               1/1     1            1           3h17m
autoscaler-hpa           1/1     1            1           3h17m
controller               1/1     1            1           3h17m
domain-mapping           1/1     1            1           3h17m
domainmapping-webhook    1/1     1            1           3h17m
net-kourier-controller   1/1     1            1           3h17m
webhook                  1/1     1            1           3h17m
```

All important application components such as `autoscaler`, `controller`, `domain-mapping`, `net-kourier-controller`, etc. should be up and running. If some are failing to start, check the affected component’s events and logs.

### Confirming that Knative Eventing is Running

Check if Eventing is running by using the following command:

```
kubectl get KnativeEventing knative-eventing -n knative-eventing
```

The output looks similar to:

```
NAME               VERSION   READY   REASON
knative-eventing   1.11.6    True
```

Then, run the following command to check if all Knative Eventing deployments are healthy:

```
kubectl get deployment -n knative-eventing
```

The output looks similar to:

```
NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
eventing-controller     1/1     1            1           3h21m
eventing-webhook        1/1     1            1           3h21m
imc-controller          1/1     1            1           3h21m
imc-dispatcher          1/1     1            1           3h21m
mt-broker-controller    1/1     1            1           3h21m
mt-broker-filter        1/1     1            1           3h21m
mt-broker-ingress       1/1     1            1           3h21m
pingsource-mt-adapter   0/0     0            0           3h21m
sugar-controller        1/1     1            1           3h21m
```

All important application components such as `eventing-controller`, `imc-controller`, `mt-broker-controller`, `mt-broker-ingress`, etc. should be up and running. If some are failing to start, check the affected component’s events and logs.

### Configuring the Knative Operator

All aspects of a Knative installation are managed by the Knative Operator. Configuration is done using ConfigMaps prefixed using `config-`. System ConfigMaps are accessible from the same namespace where the operator is deployed, which is usually the `default` namespace. Check the ConfigMaps:

```
kubectl get cm
```

The output looks similar to:

```
NAME                   DATA   AGE
config-logging         1      41m
config-observability   1      41m
```

The recommended way to change the Operator ConfigMaps is via the associated Serving and Eventing components CRD. The Operator ensures that the configuration settings are propagated automatically to the corresponding resources. If you change them manually, every manual change gets automatically overwritten by the Knative Operator.

Also, before continuing with the next step, please make sure that you have properly configured [DNS](https://knative.dev/docs/install/operator/knative-with-operators/#configure-dns) for your Knative Operator deployment.

### Configuring the Knative Serving Component

The Knative Serving component is responsible with creating and managing your serverless applications, as well as all the associated resources for routing network traffic (such as ingress objects), autoscaling, etc. It also takes care of creating point-in-time snapshots for your application configuration and code, called [Revisions](https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#revision).

A typical Serving CRD configuration looks like the following:

```
apiVersion: operator.knative.dev/v1alpha1
kind: KnativeServing
metadata:
  name: knative-serving
spec:
  version: "1.11.6"
  ingress:
    kourier:
      enabled: true
  config:
    network:
      ingress-class: "kourier.ingress.networking.knative.dev"
```

Explanations for the above configuration:

- `spec.version`: Tells Knative Operator what version of `KnativeServing` to install in your DOKS cluster (for example, `1.11.6`).
- `spec.ingress` and `spec.config.network`: Tells Knative what implementation to use for the networking layer (for example, Kourier).

In the previous example, Knative uses Kourier as the default networking implementation to handle ingress configuration. You can also choose other available options such as Istio and Contour. Note that Kourier is the option which comes bundled with Knative. For the other networking implementations mentioned earlier, you need to install the stacks separately. For example, install the Istio stack.

**Note:**

The Knative Operator only permits upgrades or downgrades by one minor release version at a time. For example, if the current Knative Serving deployment is version `0.22.0`, you must upgrade to `0.23.0` before upgrading to `0.24.0`.

See the [Knative Serving CRD](https://knative.dev/docs/install/operator/configuring-serving-cr) official documentation for more details and available options.

### Configuring the Knative Eventing Component

The Knative Eventing component lets you to create event-driven architectures. A typical example is a processing pipeline such as image processing, where different components (or stages) respond to external events, and work together to deliver the final result. Based on the task that needs to be performed, a specific component (or set of components) listening for that particular event is triggered. Then, when the task is done, another event is triggered which signals other components in the system that processing is done, and that results are ready to be consumed.

Event-driven architectures allow loose coupling between components in the system. This has a tremendous advantage, meaning that new functionality can be added easily, without interfering or breaking other components. Event-based architectures use a message broker such as [Apache Kafka](https://kafka.apache.org/) and [RabbitMQ](https://www.rabbitmq.com/). Using brokers abstracts the details of event routing from the event producer and event consumer. In other words, applications need not to worry how a message (or event) travels from point A to B. The broker takes care of all the details, and routes each message (or event) correctly from the source to the destination (or multiple destinations).

A typical Eventing CRD configuration looks like the following:

```
apiVersion: operator.knative.dev/v1alpha1
kind: KnativeEventing
metadata:
  name: knative-eventing
  namespace: knative-eventing
spec:
  version: "1.11.6"
```

In the previous configuration, the Knative Operator installs the `0.26.3` version of `KnativeEventing` component in your DOKS cluster, via the `spec.version` field. If no version is specified, then the latest one available is picked automatically. You can also configure other options like message broker configurations, resources requests and limits for the underlying containers, etc.

**Note:**

The Knative Operator only permits upgrades or downgrades by one minor release version at a time. For example, if the current Knative Eventing deployment is version `0.18.x`, you must upgrade to `0.19.x` before upgrading to `0.20.x`.

See the official documentation for [Knative Eventing CRD](https://knative.dev/docs/install/operator/configuring-eventing-cr) for more details and available options.

### Creating a Serverless Application via Knative

For every serverless application you create, you must define a Knative Service CRD (not to be confused with the Kubernetes Service resource). Each Knative Service is handled by the Knative Serving component described previously. A Knative Service abstracts all the required implementation details for your application to run (e.g. Kubernetes deployments, exposing the application via Ingress objects, autoscaling, etc). In the end, you will be presented with a HTTP URL resource to access your custom application.

Knative can automatically scale down your applications to zero when not in use or idle (for example, when no HTTP traffic is present), which make your applications serverless.

A typical Service CRD configuration looks like the following:

```
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello
spec:
  template:
    metadata:
      name: hello-world
    spec:
      containers:
        - image: gcr.io/knative-samples/helloworld-go
          ports:
            - containerPort: 8080
          env:
            - name: TARGET
              value: "World"
```

Create the service in a `knative-samples` namespace using `kubectl`:

```
kubectl create ns knative-samples

kubectl apply -f https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/knative/assets/manifests/serving-example.yaml -n knative-samples
```

Now, check if the Knative service was created in the `knative-samples` namespace and is in a healthy state:

```
kubectl get services.serving.knative.dev -n knative-samples
```

The output looks similar to:

```
NAME    URL                                        LATESTCREATED   LATESTREADY   READY   REASON
hello   http://hello.knative-samples.example.com   hello-world     hello-world   True
```

**Hint:**

You can also install the [Knative CLI tool](https://knative.dev/docs/install/client/install-kn) to get a more comprehensive output as shown below:

```
kn service list -n knative-samples

# Sample output:
# NAME    URL                                        LATEST        AGE     CONDITIONS   READY   REASON
# hello   http://hello.knative-samples.example.com   hello-world   2m33s   3 OK / 3     True
```

### Testing the Knative Service

Assuming that there is a valid [DNS](https://knative.dev/docs/install/operator/knative-with-operators/#configure-dns) set up, you can access the link shown in the above `URL` column:

```
curl http://hello.knative-samples.example.com
```

Running the command displays the `Hello World!` message. Behind the scenes, Knative automatically created all the required resources, such as deployments, routes, revisions, etc, for your custom application.

**Hint:**

If you do not have a real DNS setup yet, you can quickly test the service by creating a local mapping in the `/etc/hosts` file using the following steps:

1. Fetch the public IP address of the DigitalOcean load balancer created by the Kourier ingress deployment:


```
kubectl get svc/kourier -n knative-serving
```


The output looks similar to the following:


```
NAME      TYPE           CLUSTER-IP       EXTERNAL-IP       PORT(S)                      AGE
kourier   LoadBalancer   10.245.147.203   188.166.137.187   80:30611/TCP,443:30228/TCP   47h
```


The `EXTERNAL-IP` column gives you the Kourier ingress controller’s public IP address.

2. Create a new entry for your Knative service in the `/etc/hosts` file by replacing the `&amp;amp;lt;&amp;amp;gt;` placeholders:


```
<YOUR_KOURIER_INGRESS_PUBLIC_IP_HERE> hello.knative-samples.example.com
```

3. Test your service:


```
curl http://hello.knative-samples.example.com
```


It takes several seconds for Knative to cold start your serverless application.

4. Get specific information about each resource type in the `knative-samples` namespace using the `kn` command:

- List available `services`:

```
kn service list -n knative-samples
```

- List available `routes` for each service:

```
kn route list -n knative-samples
```

- List available `revisions` for each service:

```
kn revision list -n knative-sample
```

Refer to the official documentation to see all available options for the [Serving](https://knative.dev/docs/serving/#serving-resources) resources. Also, you can configure [custom domains](https://knative.dev/docs/serving/services/custom-domains) for your applications, and enable production-ready TLS certificates support via [Cert-Manager](https://knative.dev/docs/install/installing-cert-manager).

## Developing Event-Driven Applications Using Knative Eventing

When creating event-driven architectures, usually there are three main components involved:

1. Event producers, which are applications that fire specific events.
2. Event consumers or subscribers, and the associated triggers. A trigger defines what events a consumer (or subscriber) should respond to.
3. A broker that knows how to route all events from source to destination.

In a nutshell, the system is composed of event producers and consumers (or subscribers). Usually, consumers filter events and act only on specific triggers. Subscribers can also respond back with other events as well. A broker sits behind the scenes, acting like the backbone of the entire system. Its main job is to make sure that events are routed correctly from source to destination. Knative Eventing offers support for In-Memory brokers, which are recommended for development and quick testing only, as well as third-party implementations such as Apache Kafka, RabbitMQ, etc.

Knative services can act like the event producers and/or consumers. Acting both like a producer and consumer, allows the service to send back events as a response, which is required by processing pipelines.

The diagram below gives a quick overview of an event-driven system:

![Knative Eventing Overview](https://raw.githubusercontent.com/digitalocean/marketplace-kubernetes/master/stacks/knative/assets/images/arch_knative_eventing.png)

See [this example](https://knative.dev/docs/eventing/getting-started) to create and test Knative Eventing.

## Upgrading Knative Components via the Operator

All Knative components (Serving, Eventing) are managed by the Operator. First, check the [Knative Serving](https://github.com/knative/serving/releases) and [Knative Eventing](https://github.com/knative/eventing/releases) versions available for upgrade.

Then, adjust the `spec.version` field from the YAML manifest of respective Knative component. For Knative Serving, replace the `&amp;amp;lt;&amp;amp;gt;` placeholders in the following command:

```
apiVersion: operator.knative.dev/v1alpha1
kind: KnativeServing
metadata:
  name: knative-serving
  namespace: knative-serving
spec:
  version: "<new-version>"
...
```

For Knative Eventing, replace the `&amp;amp;lt;&amp;amp;gt;` placeholders in the following command:

```
apiVersion: operator.knative.dev/v1alpha1
kind: KnativeEventing
metadata:
  name: knative-eventing
  namespace: knative-eventing
spec:
  version: "<new-version>"
...
```

Finally, to upgrade each Knative component to a newer version, replace the `&amp;amp;lt;&amp;amp;gt;` placeholders and run the following commands:

```
kubectl apply -f <YOUR_KNATIVE_SERVING_MANIFEST_FILE>

kubectl apply -f <YOUR_KNATIVE_EVENTING_MANIFEST_FILE>
```

See [Upgrade via the Knative Operator Guide](https://knative.dev/docs/install/upgrade/upgrade-installation-with-operator) for more information on how to upgrade the components, as well as the allowed migration paths.

**Notes:**

Please also note that if you attempt to upgrade from version `0.x.x` to version `1.x.x` you will get a message in the `knative operator` informing you that: `Version migration is not eligible with message: not supported to upgrade or downgrade across the MAJOR version.` To upgrade to a `MAJOR` version you should remove the existing `Knative Serving` or `Knative Eventing` resources and add new ones as follows:

First remove the Knative Serving resource:

```
kubectl delete KnativeServing knative-serving -n knative-serving
```

or Knative Eventing resource:

```
kubectl delete KnativeEventing knative-eventing -n knative-eventing
```

Next, add a new major version in the `spec.version` field of the Eventing/Serving CRDs shown above and apply with `kubectl`:

```
kubectl apply -f <YOUR_KNATIVE_SERVING_MANIFEST_FILE>

kubectl apply -f <YOUR_KNATIVE_EVENTING_MANIFEST_FILE>
```

## Uninstalling Knative

Knative Operator prevents unsafe removal of Knative resources. Even if the Knative Serving and Knative Eventing resources are successfully removed, all the CRDs in Knative are still kept in the cluster. All your resources relying on Knative CRDs can still work.

Remove the Knative Serving resource:

```
kubectl delete KnativeServing knative-serving -n knative-serving
```

Remove the Knative Eventing resource:

```
kubectl delete KnativeEventing knative-eventing -n knative-eventing
```

Remove the Knative Operator:

```
OPERATOR_VERSION="1.5.1"

kubectl delete -f "https://github.com/knative/operator/releases/download/knative-v${OPERATOR_VERSION}/operator.yaml"
```

Delete associated namespaces (including all custom resources):

```
kubectl delete ns knative-serving

kubectl delete ns knative-eventing

kubectl delete ns knative-samples
```

### Additional Resources

For more information, see the following:

- [Knative Official Documentation](https://knative.dev/docs).
- [Knative Eventing - Getting Started](https://knative.dev/docs/getting-started/getting-started-eventing).
- [Knative Eventing Observability - Collecting Logs](https://knative.dev/docs/eventing/observability/logging/collecting-logs).
- [Knative Eventing Observability - Collecting Metrics](https://knative.dev/docs/eventing/observability/metrics/collecting-metrics).
- [Knative Serving Observability - Collecting Logs](https://knative.dev/docs/serving/observability/logging/collecting-logs).
- [Knative Serving Observability - Collecting Metrics](https://knative.dev/docs/serving/observability/metrics/collecting-metrics).
- [Knative Serving - Autoscaling Applications](https://knative.dev/docs/serving/autoscaling).
- [Knative Serving - Application Traffic Management](https://knative.dev/docs/serving/traffic-management).
- [Knative Services - Configure Resource Requests and Limits](https://knative.dev/docs/serving/services/configure-requests-limits-services).

In this article...

- [Knative Serving Overview Diagram](https://docs.digitalocean.com/products/marketplace/catalog/knative/#knative-serving-overview-diagram)
- [Requirements](https://docs.digitalocean.com/products/marketplace/catalog/knative/#requirements)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/knative/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/knative/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/knative/#creating-an-app-using-the-api)
- [Getting Started After Deploying Knative](https://docs.digitalocean.com/products/marketplace/catalog/knative/#getting-started-after-deploying-knative)
  - [Connecting to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/knative/#connecting-to-your-cluster)
  - [Confirming Knative Operator is Running](https://docs.digitalocean.com/products/marketplace/catalog/knative/#confirming-knative-operator-is-running)
  - [Confirming that Knative Serving is Running](https://docs.digitalocean.com/products/marketplace/catalog/knative/#confirming-that-knative-serving-is-running)
  - [Confirming that Knative Eventing is Running](https://docs.digitalocean.com/products/marketplace/catalog/knative/#confirming-that-knative-eventing-is-running)
  - [Configuring the Knative Operator](https://docs.digitalocean.com/products/marketplace/catalog/knative/#configuring-the-knative-operator)
  - [Configuring the Knative Serving Component](https://docs.digitalocean.com/products/marketplace/catalog/knative/#configuring-the-knative-serving-component)
  - [Configuring the Knative Eventing Component](https://docs.digitalocean.com/products/marketplace/catalog/knative/#configuring-the-knative-eventing-component)
  - [Creating a Serverless Application via Knative](https://docs.digitalocean.com/products/marketplace/catalog/knative/#creating-a-serverless-application-via-knative)
  - [Testing the Knative Service](https://docs.digitalocean.com/products/marketplace/catalog/knative/#testing-the-knative-service)
- [Developing Event-Driven Applications Using Knative Eventing](https://docs.digitalocean.com/products/marketplace/catalog/knative/#developing-event-driven-applications-using-knative-eventing)
- [Upgrading Knative Components via the Operator](https://docs.digitalocean.com/products/marketplace/catalog/knative/#upgrading-knative-components-via-the-operator)
- [Uninstalling Knative](https://docs.digitalocean.com/products/marketplace/catalog/knative/#uninstalling-knative)
  - [Additional Resources](https://docs.digitalocean.com/products/marketplace/catalog/knative/#additional-resources)

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