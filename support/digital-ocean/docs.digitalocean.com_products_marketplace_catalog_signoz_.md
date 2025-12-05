---
url: "https://docs.digitalocean.com/products/marketplace/catalog/signoz/"
title: "SigNoz | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/signoz/)
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

- SigNoz

[Give Feedback](https://ideas.digitalocean.com/documentation)

# SigNoz

Generated on 31 Jul 2025
from [the SigNoz catalog page](https://marketplace.digitalocean.com/apps/signoz)

SigNoz is designed from the ground up to integrate with OpenTelemetry seamlessly and is open source. This native compatibility ensures that SigNoz can fully leverage the rich, standardised data produced by OpenTelemetry without _requiring complex workarounds_ or _additional translation layers_. This _holistic approach_ simplifies debugging and performance analysis by allowing developers to correlate logs, traces, and metrics effortlessly.

- **Application Performance Monitoring**: Monitor metrics, logs, and traces across your entire Railway application stack.
- **Debugging and Troubleshooting**: Correlate logs, metrics, and traces to quickly identify and resolve issues.
- **Infrastructure Observability**: Monitor system health, resource usage, and service dependencies in real time.
- **Alerting and Incident Response**: Set up alerts based on metrics and log patterns for proactive incident management.

## Software Included

_This Marketplace listing does not include a detailed software list._

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to install a Kubernetes 1-Click Application. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/kubernetes/clusters/new?addonslug=signoz&nodePools=s-1vcpu-2gb%3A3)

## Creating an App using the API

In addition to creating SigNoz using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 3 node DigitalOcean Kubernetes cluster made up of Basic Droplets in the SFO2 region, you can use the following `doctl` command. You need to authenticate with `doctl` with your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) and replace the `$CLUSTER_NAME` variable with the chosen name for your cluster in the command below.

```shell
doctl kubernetes clusters create --size s-4vcpu-8gb $CLUSTER_NAME --1-clicks signoz
```

## Getting Started After Deploying SigNoz

## Getting Started with SigNoz on DigitalOcean Kubernetes

## Prerequisites

- A DigitalOcean Kubernetes cluster (1.19+)
- `kubectl` configured to connect to your cluster
- `doctl` CLI tool installed and configured
- Helm 3.x installed

## Connect to Your Cluster

Follow the [DigitalOcean Kubernetes connection guide](https://docs.digitalocean.com/products/kubernetes/how-to/connect-to-cluster/) to connect to your cluster with `kubectl`.

## Install SigNoz Add-on

The SigNoz add-on will be automatically installed in your cluster through the DigitalOcean Marketplace.

## Verify SigNoz Installation

### Check Helm Installation Status

First, check if the Helm installation was successful by running the following command:

```
helm ls -n signoz
```

You should see output similar to:

```
NAME    NAMESPACE  REVISION  UPDATED                                STATUS    CHART          APP VERSION
signoz  signoz     1         2025-07-04 04:00:51.260047 +0530 IST  deployed  signoz-0.85.0  v0.88.0
```

### Check SigNoz Pods

Next, verify that all SigNoz pods are running correctly:

```
kubectl get pods -n signoz
```

You should see all pods in `Running` status:

```
NAME                                      READY   STATUS    RESTARTS   AGE
chi-signoz-clickhouse-cluster-0-0-0       1/1     Running   0          5m
signoz-0                                  1/1     Running   0          5m
signoz-otel-collector-6b7c8d9f5e-abc34    1/1     Running   0          5m
signoz-clickhouse-operator-abc123         1/1     Running   0          5m
signoz-zookeeper-0                        1/1     Running   0          5m
```

### Check Services

Verify that SigNoz services are created and accessible:

```
kubectl get services -n signoz
```

## Access SigNoz Dashboard

### Port Forward (for testing)

To quickly access the SigNoz dashboard for testing:

```
kubectl port-forward -n signoz svc/signoz 8080:8080
```

Then open your browser and navigate to `http://localhost:8080`

### LoadBalancer (for production access)

For production access, you may want to expose SigNoz through a LoadBalancer:

```
kubectl patch service signoz -n signoz -p '{"spec": {"type": "LoadBalancer"}}'
```

OR

Use the helm values with helm upgrade

```
signoz:
    service:
        # signoz.service.type - The service type (`ClusterIP`, `NodePort`, `LoadBalancer`)
        type: LoadBalancer
```

```
helm upgrade signoz signoz/signoz -n signoz -f values.yml
```

Get the external IP:

```
kubectl get service signoz-frontend -n signoz
```

## Configure Data Sources

### Configure SigNoz OpenTelemetry Collector

You need to configure your `signoz-otel-collector` as per your need. By default if you can use following urls to send signals to signoz-otel-collector from your cluster.

For your applications to send data to SigNoz, configure them to send telemetry data to:

- **Logs, Traces & Metrics**: `http://signoz-otel-collector.signoz.svc.cluster.local:4317` (gRPC)
- **Logs, Traces & Metrics**: `http://signoz-otel-collector.signoz.svc.cluster.local:4318` (HTTP)

## Troubleshooting

### Check Pod Logs

If any pods are not running, check their logs:

```
kubectl logs -n signoz <pod-name>
```

### Check Resource Usage

Monitor resource consumption:

```
kubectl top pods -n signoz
kubectl top nodes
```

### Verify Persistent Volumes

Check if persistent volumes are bound correctly:

```
kubectl get pv
kubectl get pvc -n signoz
```

## Next Steps

1. **Configure Alerting**: Set up alert rules in the SigNoz dashboard
2. **Instrument Applications**: Add OpenTelemetry instrumentation to your applications
3. **Set Up Dashboards**: Create custom dashboards for your monitoring needs
4. **Configure Retention**: Adjust data retention policies based on your requirements

## Support

For additional support and documentation:

- [SigNoz Documentation](https://signoz.io/docs/)
- [SigNoz GitHub Repository](https://github.com/SigNoz/signoz)
- [DigitalOcean Kubernetes Documentation](https://docs.digitalocean.com/products/kubernetes/)

## Cleanup

To remove SigNoz from your cluster:

```
helm uninstall signoz -n signoz
kubectl delete namespace signoz
```

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#creating-an-app-using-the-api)
- [Getting Started After Deploying SigNoz](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#getting-started-after-deploying-signoz)
- [Getting Started with SigNoz on DigitalOcean Kubernetes](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#getting-started-with-signoz-on-digitalocean-kubernetes)
- [Prerequisites](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#prerequisites)
- [Connect to Your Cluster](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#connect-to-your-cluster)
- [Install SigNoz Add-on](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#install-signoz-add-on)
- [Verify SigNoz Installation](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#verify-signoz-installation)
  - [Check Helm Installation Status](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#check-helm-installation-status)
  - [Check SigNoz Pods](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#check-signoz-pods)
  - [Check Services](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#check-services)
- [Access SigNoz Dashboard](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#access-signoz-dashboard)
  - [Port Forward (for testing)](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#port-forward-for-testing)
  - [LoadBalancer (for production access)](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#loadbalancer-for-production-access)
- [Configure Data Sources](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#configure-data-sources)
  - [Configure SigNoz OpenTelemetry Collector](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#configure-signoz-opentelemetry-collector)
- [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#troubleshooting)
  - [Check Pod Logs](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#check-pod-logs)
  - [Check Resource Usage](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#check-resource-usage)
  - [Verify Persistent Volumes](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#verify-persistent-volumes)
- [Next Steps](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#next-steps)
- [Support](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#support)
- [Cleanup](https://docs.digitalocean.com/products/marketplace/catalog/signoz/#cleanup)

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