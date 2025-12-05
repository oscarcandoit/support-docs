---
url: "https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj"
title: "Supabase Docs | Troubleshooting | Grafana not displaying data"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Grafana not displaying data

Last edited: 9/9/2025

* * *

This guide is for identifying configuration mistakes in [self-hosted Supabase Grafana installations](https://supabase.com/docs/guides/monitoring-troubleshooting/metrics#deploying-supabase-grafana)

## Step 1: Ping your Grafana endpoint [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-1-ping-your-grafana-endpoint)

Use the below cURL command to make sure your metrics endpoint returns data:

```
1

curl https://<YOUR_PROJECT_REF>.supabase.co/customer/v1/privileged/metrics --user 'service_role:<SERVICE_ROLE_KEY>'
```

## Step 2: Set your Grafana Dashboard to auto-refresh in the top right corner [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-2-set-your-grafana-dashboard-to-auto-refresh-in-the-top-right-corner)

![388343266-ed4b8f38-e0cd-474e-bc1c-1ac6ae68e1aa](https://supabase.com/docs/img/troubleshooting/47998bed-0b77-433a-bfed-63222beb2aee.png)

## Step 3: Make sure your docker container has the default configurations [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-3-make-sure-your-docker-container-has-the-default-configurations)

Run the following command in the terminal:

```
1

docker ps -f name=supabase-grafana
```

The output should look something like this:

![image](https://supabase.com/docs/img/troubleshooting/6c284180-0ffd-432d-b86b-e9fbcfe23868.png)

Here it is in an easier to read format

```
1
2
3
4
5
6
7

- CONTAINER ID: < container id >- IMAGE: supabase-grafana-supabase-grafana- COMMAND: /entrypoint.sh- CREATED: < time >- STATUS: Up < unit of time > ago- PORTS: 3000/tcp, 0.0.0.0:8000 → 8080/tcp- NAMES: supabase-grafana-supabase-grafana-1
```

## Step 4: Enter the container [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-4-enter-the-container)

Try running the following terminal command:

```
1

docker exec -it <container id> bash
```

## Step 5: Check the environment variables for errors [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-5-check-the-environment-variables-for-errors)

Run the following in the docker container:

```
1

printenv | egrep 'GRAFANA_PASSWORD|SUPABASE_PROJECT_REF|SUPABASE_SERVICE_ROLE_KEY'
```

Ensure the values are correct by comparing them with those in the Dashboard. Users have previously encountered issues by accidentally omitting the last character of their strings, so a thorough check is essential.

## Step 6: Go to the root folder and check permissions on the `entrypoint.sh` file [\#](https://supabase.com/docs/guides/troubleshooting/grafana-not-displaying-data-sXJrMj\#step-6-go-to-the-root-folder-and-check-permissions-on-the-entrypointsh-file)

Run the following terminal commands:

```
1
2

cd /ls -l | grep entrypoint.sh
```

`entrypoint.sh` should have the following permissions:

```
1

-rwxr-xr-x
```

If off, update the values

```
1

chmod +x entrypoint.sh
```

## Metadata

* * *

### Products

[Database](https://supabase.com/docs/guides/troubleshooting?products=database)

* * *

### Keywords

[grafana](https://supabase.com/docs/guides/troubleshooting?tags=grafana) [docker](https://supabase.com/docs/guides/troubleshooting?tags=docker) [metrics](https://supabase.com/docs/guides/troubleshooting?tags=metrics) [configuration](https://supabase.com/docs/guides/troubleshooting?tags=configuration)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/30579)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)