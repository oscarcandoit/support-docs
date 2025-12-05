---
url: "https://docs.digitalocean.com/reference/terraform/reference/resources/app/"
title: "digitalocean_app | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
  - [Configure Terraform](https://docs.digitalocean.com/reference/terraform/getting-started/)
  - [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
    - [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
      - [digitalocean\_app](https://docs.digitalocean.com/reference/terraform/reference/resources/app/)
      - [digitalocean\_cdn](https://docs.digitalocean.com/reference/terraform/reference/resources/cdn/)
      - [digitalocean\_certificate](https://docs.digitalocean.com/reference/terraform/reference/resources/certificate/)
      - [digitalocean\_container\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry/)
      - [digitalocean\_container\_registry\_docker\_credentials](https://docs.digitalocean.com/reference/terraform/reference/resources/container_registry_docker_credentials/)
      - [digitalocean\_custom\_image](https://docs.digitalocean.com/reference/terraform/reference/resources/custom_image/)
      - [digitalocean\_database\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/database_cluster/)
      - [digitalocean\_database\_connection\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/database_connection_pool/)
      - [digitalocean\_database\_db](https://docs.digitalocean.com/reference/terraform/reference/resources/database_db/)
      - [digitalocean\_database\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/database_firewall/)
      - [digitalocean\_database\_kafka\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_config/)
      - [digitalocean\_database\_kafka\_schema\_registry](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_schema_registry/)
      - [digitalocean\_database\_kafka\_topic](https://docs.digitalocean.com/reference/terraform/reference/resources/database_kafka_topic/)
      - [digitalocean\_database\_mongodb\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mongodb_config/)
      - [digitalocean\_database\_mysql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_mysql_config/)
      - [digitalocean\_database\_online\_migration](https://docs.digitalocean.com/reference/terraform/reference/resources/database_online_migration/)
      - [digitalocean\_database\_opensearch\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_opensearch_config/)
      - [digitalocean\_database\_postgresql\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_postgresql_config/)
      - [digitalocean\_database\_redis\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_redis_config/)
      - [digitalocean\_database\_replica](https://docs.digitalocean.com/reference/terraform/reference/resources/database_replica/)
      - [digitalocean\_database\_user](https://docs.digitalocean.com/reference/terraform/reference/resources/database_user/)
      - [digitalocean\_database\_valkey\_config](https://docs.digitalocean.com/reference/terraform/reference/resources/database_valkey_config/)
      - [digitalocean\_domain](https://docs.digitalocean.com/reference/terraform/reference/resources/domain/)
      - [digitalocean\_droplet](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet/)
      - [digitalocean\_droplet\_autoscale](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_autoscale/)
      - [digitalocean\_droplet\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/droplet_snapshot/)
      - [digitalocean\_firewall](https://docs.digitalocean.com/reference/terraform/reference/resources/firewall/)
      - [digitalocean\_floating\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip/)
      - [digitalocean\_floating\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/floating_ip_assignment/)
      - [digitalocean\_genai\_agent](https://docs.digitalocean.com/reference/terraform/reference/resources/genai/)
      - [digitalocean\_kubernetes\_cluster](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_cluster/)
      - [digitalocean\_kubernetes\_node\_pool](https://docs.digitalocean.com/reference/terraform/reference/resources/kubernetes_node_pool/)
      - [digitalocean\_loadbalancer](https://docs.digitalocean.com/reference/terraform/reference/resources/loadbalancer/)
      - [digitalocean\_monitor\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/monitor_alert/)
      - [digitalocean\_partner\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/partner_network_connect/)
      - [digitalocean\_project](https://docs.digitalocean.com/reference/terraform/reference/resources/project/)
      - [digitalocean\_project\_resources](https://docs.digitalocean.com/reference/terraform/reference/resources/project_resources/)
      - [digitalocean\_record](https://docs.digitalocean.com/reference/terraform/reference/resources/record/)
      - [digitalocean\_reserved\_ip](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip/)
      - [digitalocean\_reserved\_ip\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ip_assignment/)
      - [digitalocean\_reserved\_ipv6](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6/)
      - [digitalocean\_reserved\_ipv6\_assignment](https://docs.digitalocean.com/reference/terraform/reference/resources/reserved_ipv6_assignment/)
      - [digitalocean\_spaces\_bucket](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket/)
      - [digitalocean\_spaces\_bucket\_logging](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_logging/)
      - [digitalocean\_spaces\_bucket\_object](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_object/)
      - [digitalocean\_spaces\_bucket\_policy](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_policy/)
      - [digitalocean\_spaces\_cors\_configuration](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_bucket_cors_configuration/)
      - [digitalocean\_spaces\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/spaces_key/)
      - [digitalocean\_ssh\_key](https://docs.digitalocean.com/reference/terraform/reference/resources/ssh_key/)
      - [digitalocean\_tag](https://docs.digitalocean.com/reference/terraform/reference/resources/tag/)
      - [digitalocean\_uptime\_alert](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_alert/)
      - [digitalocean\_uptime\_check](https://docs.digitalocean.com/reference/terraform/reference/resources/uptime_check/)
      - [digitalocean\_volume](https://docs.digitalocean.com/reference/terraform/reference/resources/volume/)
      - [digitalocean\_volume\_attachment](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_attachment/)
      - [digitalocean\_volume\_snapshot](https://docs.digitalocean.com/reference/terraform/reference/resources/volume_snapshot/)
      - [digitalocean\_vpc](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc/)
      - [digitalocean\_vpc\_nat\_gateway](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_nat_gateway/)
      - [digitalocean\_vpc\_peering](https://docs.digitalocean.com/reference/terraform/reference/resources/vpc_peering/)
    - [Data Sources](https://docs.digitalocean.com/reference/terraform/reference/data-sources/)
  - [Deploy a Web App](https://docs.digitalocean.com/reference/terraform/deploy-web-app/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

- [Provider Reference](https://docs.digitalocean.com/reference/terraform/reference/)
- [Resources](https://docs.digitalocean.com/reference/terraform/reference/resources/)
- digitalocean\_app

[Give Feedback](https://ideas.digitalocean.com/documentation)

# digitalocean\_app

Generated on 13 Nov 2025
from Terraform version
[`v2.69.0`](https://github.com/digitalocean/terraform-provider-digitalocean/releases/tag/v2.69.0)

Provides a DigitalOcean App resource.

## Example Usage

To create an app, provide a [DigitalOcean app spec](https://docs.digitalocean.com/products/app-platform/reference/app-spec/) specifying the app’s components.

### Basic Example

```hcl
resource "digitalocean_app" "golang-sample" {
  spec {
    name   = "golang-sample"
    region = "ams"

    service {
      name               = "go-service"
      instance_count     = 1
      instance_size_slug = "apps-s-1vcpu-1gb"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-golang.git"
        branch         = "main"
      }
    }
  }
}
```

### Static Site Example

```hcl
resource "digitalocean_app" "static-site-example" {
  spec {
    name   = "static-site-example"
    region = "ams"

    static_site {
      name          = "sample-jekyll"
      build_command = "bundle exec jekyll build -d ./public"
      output_dir    = "/public"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-jekyll.git"
        branch         = "main"
      }
    }
  }
}
```

### Multiple Components Example

```hcl
resource "digitalocean_app" "mono-repo-example" {
  spec {
    name   = "mono-repo-example"
    region = "ams"
    domain {
      name = "foo.example.com"
    }

    alert {
      rule = "DEPLOYMENT_FAILED"

      # Setup alert destination (optional)
      # If left empty, email will be set to the team's default email
      destinations {
        emails = ["team.member1@org.com", "team.member2@org.com"]
        slack_webhooks {
          channel = "@user1"
          url     = "https://hooks.slack.com/slack-url"
        }
      }
    }

    # Build a Go project in the api/ directory that listens on port 3000
    # and serves it at https://foo.example.com/api
    service {
      name               = "go-api"
      instance_count     = 2
      instance_size_slug = "apps-s-1vcpu-1gb"

      github {
        branch         = "main"
        deploy_on_push = true
        repo           = "username/repo"
      }

      source_dir = "api/"
      http_port  = 3000

      alert {
        value    = 75
        operator = "GREATER_THAN"
        window   = "TEN_MINUTES"
        rule     = "CPU_UTILIZATION"

        # Setup alert destination (optional)
        # If left empty, email will be set to the team's default email
        destinations {
          emails = ["team.member1@org.com", "team.member2@org.com"]
          slack_webhooks {
            channel = "@user1"
            url     = "https://hooks.slack.com/slack-url"
          }
        }
      }

      log_destination {
        name = "MyLogs"
        papertrail {
          endpoint = "syslog+tls://example.com:12345"
        }
      }

      run_command = "bin/api"
    }

    # Builds a static site in the project's root directory
    # and serves it at https://foo.example.com/
    static_site {
      name          = "web"
      build_command = "npm run build"

      bitbucket {
        branch         = "main"
        deploy_on_push = true
        repo           = "username/repo"
      }
    }

    database {
      name       = "starter-db"
      engine     = "PG"
      production = false
    }

    ingress {
      rule {
        component {
          name = "api"
        }
        match {
          path {
            prefix = "/api"
          }
        }
      }

      rule {
        component {
          name = "web"
        }

        match {
          path {
            prefix = "/"
          }
        }
      }
    }

    vpc {
      id = "c22d8f48-4bc4-49f5-8ca0-58e7164427ac"
    }
  }
}
```

### Log Destination Example with Opensearch

```hcl
resource "digitalocean_app" "golang-sample" {
  spec {
    name   = "golang-sample"
    region = "ams"

    service {
      name               = "go-service"
      instance_count     = 1
      instance_size_slug = "apps-s-1vcpu-1gb"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-golang.git"
        branch         = "main"
      }

      log_destination {
        name = "MyLogs"
        open_search {
          endpoint = "https://something:1234"
          basic_auth {
            user     = "user"
            password = "hi"
          }
        }
      }
    }
  }
}
```

### Edge Controls Example

```hcl
resource "digitalocean_app" "golang-sample" {
  spec {
    name                            = "golang-sample"
    region                          = "ams"
    disable_edge_cache              = true
    disable_email_obfuscation       = false
    enhanced_threat_control_enabled = true

    service {
      name               = "go-service"
      instance_count     = 1
      instance_size_slug = "apps-s-1vcpu-1gb"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-golang.git"
        branch         = "main"
      }
    }
  }
}
```

### Maintenance Example

```hcl
resource "digitalocean_app" "maintenance-example" {
  spec {
    name   = "maintenance-example"
    region = "ams"

    # Enable maintenance mode with a custom offline page
    maintenance {
      enabled          = true
      offline_page_url = "https://example.com/maintenance.html"
    }

    service {
      name               = "go-service"
      instance_count     = 1
      instance_size_slug = "apps-s-1vcpu-1gb"

      git {
        repo_clone_url = "https://github.com/digitalocean/sample-golang.git"
        branch         = "main"
      }
    }
  }
}
```

## Argument Reference

The following arguments are supported:

- `spec` \- (Required) A DigitalOcean App spec describing the app.

- `name` \- (Required) The name of the app. Must be unique across all apps in the same account.
- `region` \- The slug for the DigitalOcean data center region hosting the app.
- `disable_edge_cache` \- A boolean indicating whether to disable the edge cache for this app. Default: `false`. Available only for non-static sites. Requires custom domains and applies to all the domains of the app.
- `disable_email_obfuscation` \- A boolean indicating whether to disable email obfuscation for this app. Default: `false`. Requires custom domains and applies to all the domains of the app.
- `enhanced_threat_control_enabled` \- A boolean, when set to `true`, enables enhanced analyzing of incoming traffic to prevent layer 7 DDoS attacks. Default: `false`. Requires custom domains and applies to all the domains of the app.
- `features` \- A list of the features applied to the app. The default buildpack can be overridden here. List of available buildpacks can be found using the [doctl CLI](https://docs.digitalocean.com/reference/doctl/reference/apps/list-buildpacks/)
- `domain` \- Describes a domain where the application will be made available.

  - `name` \- The hostname for the domain.
  - `type` \- The domain type, which can be one of the following:

    - `DEFAULT`: The default .ondigitalocean.app domain assigned to this app.
    - `PRIMARY`: The primary domain for this app that is displayed as the default in the control panel, used in bindable environment variables, and any other places that reference an app’s live URL. Only one domain may be set as primary.
    - `ALIAS`: A non-primary domain.
  - `wildcard` \- A boolean indicating whether the domain includes all sub-domains, in addition to the given domain.
  - `zone` \- If the domain uses DigitalOcean DNS and you would like App Platform to automatically manage it for you, set this to the name of the domain on your account.
- `env` \- Describes an app-wide environment variable made available to all components.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `alert` \- Describes an alert policy for the app.

  - `rule` \- The type of the alert to configure. Top-level app alert policies can be: `DEPLOYMENT_CANCELLED`, `DEPLOYMENT_FAILED`, `DEPLOYMENT_LIVE`, `DEPLOYMENT_STARTED`, `DOMAIN_FAILED`, `DOMAIN_LIVE`, `AUTOSCALE_FAILED`, or `AUTOSCALE_SUCCEEDED`.
  - `disabled` \- Determines whether the alert is disabled (default: `false`).
  - `destinations` \- Specification for alert destination.

    - `emails` \- Determines which emails receive alerts. The emails must be team members. If not set, the team’s email is used by default.
    - `slack_webhooks` \- Determines which slack channels or users receive alerts (optional).
- `egress` \- Specification for app egress configurations.

  - `type` \- The app egress type: `AUTOASSIGN`, `DEDICATED_IP`
- `maintenance` \- Specification to configure maintenance settings for the app, such as maintenance mode and archiving the app.

  - `enabled` \- Indicates whether maintenance mode should be enabled for the app.
  - `archive` \- Indicates whether the app should be archived. Setting this to true implies that enabled is set to true.
  - `offline_page_url` \- A custom offline page to display when maintenance mode is enabled or the app is archived.
- `ingress` \- Specification for component routing, rewrites, and redirects.

  - `rule` \- Rules for configuring HTTP ingress for component routes, CORS, rewrites, and redirects.

    - `component` \- The component to route to. Only one of `component` or `redirect` may be set.

      - `name` \- The name of the component to route to.
      - `preserve_path_prefix` \- An optional boolean flag to preserve the path that is forwarded to the backend service. By default, the HTTP request path will be trimmed from the left when forwarded to the component.
      - `rewrite` \- An optional field that will rewrite the path of the component to be what is specified here. This is mutually exclusive with `preserve_path_prefix`.
    - `match` \- The match configuration for the rule

      - `path` \- The path to match on.

        - `prefix` \- Prefix-based match.
      - `authority` \- The authority (domain) to match on.

        - `exact` \- Exact match.
    - `redirect` \- The redirect configuration for the rule. Only one of `component` or `redirect` may be set.

      - `uri` \- An optional URI path to redirect to.
      - `authority` \- The authority/host to redirect to. This can be a hostname or IP address.
      - `port` \- The port to redirect to.
      - `scheme` \- The scheme to redirect to. Supported values are `http` or `https`
      - `redirect_code` \- The redirect code to use. Supported values are `300`, `301`, `302`, `303`, `304`, `307`, `308`.
    - `cors` \- The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies of the app.

      - `allow_origins` \- The `Access-Control-Allow-Origin` can be

        - `exact` \- The `Access-Control-Allow-Origin` header will be set to the client’s origin only if the client’s origin exactly matches the value you provide.
        - `prefix` \- The `Access-Control-Allow-Origin` header will be set to the client’s origin if the beginning of the client’s origin matches the value you provide.
        - `regex` \- The `Access-Control-Allow-Origin` header will be set to the client’s origin if the client’s origin matches the regex you provide, in [RE2 style syntax](https://github.com/google/re2/wiki/Syntax).
      - `allow_headers` \- The set of allowed HTTP request headers. This configures the `Access-Control-Allow-Headers` header.
      - `max_age` \- An optional duration specifying how long browsers can cache the results of a preflight request. This configures the Access-Control-Max-Age header. Example: `5h30m`.
      - `expose_headers` \- The set of HTTP response headers that browsers are allowed to access. This configures the `Access-Control-Expose-Headers` header.
      - `allow_methods` \- The set of allowed HTTP methods. This configures the `Access-Control-Allow-Methods` header.
      - `allow_credentials` \- Whether browsers should expose the response to the client-side JavaScript code when the request’s credentials mode is `include`. This configures the `Access-Control-Allow-Credentials` header.
- `vpc`: Specification for VPC.

  - `id`: The ID of the VPC.

- `project_id` \- The ID of the project that the app is assigned to.

A spec can contain multiple components.

A `service` can contain:

- `name` \- The name of the component
- `build_command` \- An optional build command to run while building this component from source.
- `dockerfile_path` \- The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
- `source_dir` \- An optional path to the working directory to use for the build.
- `run_command` \- An optional run command to override the component’s default.
- `environment_slug` \- An environment slug describing the type of this app.
- `instance_size_slug` \- The instance size to use for this component. This determines the plan (basic or professional) and the available CPU and memory. The list of available instance sizes can be [found with the API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps/operation/apps_list_instanceSizes) or using the [doctl CLI](https://docs.digitalocean.com/reference/doctl/) (`doctl apps tier instance-size list`). Default: `basic-xxs`
- `instance_count` \- The amount of instances that this component should be scaled to.
- `http_port` \- The internal port on which this service’s run command will listen.
- `internal_ports` \- A list of ports on which this service will listen for internal traffic.
- `git` \- A Git repo to use as the component’s source. The repository must be able to be cloned without authentication. Only one of `git`, `github` or `gitlab` may be set

  - `repo_clone_url` \- The clone URL of the repo.
  - `branch` \- The name of the branch to use.
- `github` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `bitbucket` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/bitbucket/install). Only one of `git`, `github`, `bitbucket`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `gitlab` \- A Gitlab repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `image` \- An image to use as the component’s source. Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `registry_type` \- The registry type. One of `DOCR` (DigitalOcean container registry) or `DOCKER_HUB`.
  - `registry` \- The registry name. Must be left empty for the `DOCR` registry type. Required for the `DOCKER_HUB` registry type.
  - `repository` \- The repository name.
  - `registry_credentials` \- The credentials required to access a private Docker Hub or GitHub registry, in the following syntax `<username>:<token>`.
  - `tag` \- The repository tag. Defaults to `latest` if not provided.
  - `digest` \- The image digest. Cannot be specified if `tag` is provided.
  - `deploy_on_push` \- Configures automatically deploying images pushed to DOCR.

    - `enabled` \- Whether to automatically deploy images pushed to DOCR.
- `env` \- Describes an environment variable made available to an app competent.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `routes` \- (Deprecated - use `ingress`) An HTTP paths that should be routed to this component.

  - `path` \- Paths must start with `/` and must be unique within the app.
  - `preserve_path_prefix` \- An optional flag to preserve the path that is forwarded to the backend service.
- `health_check` \- A health check to determine the availability of this component.

  - `http_path` \- The route path used for the HTTP health check ping.
  - `initial_delay_seconds` \- The number of seconds to wait before beginning health checks.
  - `period_seconds` \- The number of seconds to wait between health checks.
  - `timeout_seconds` \- The number of seconds after which the check times out.
  - `success_threshold` \- The number of successful health checks before considered healthy.
  - `failure_threshold` \- The number of failed health checks before considered unhealthy.
  - `port` \- The health check will be performed on this port instead of component’s HTTP port.
- `cors` \- (Deprecated - use `ingress`) The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies of the app.
- `alert` \- Describes an alert policy for the component.

  - `rule` \- The type of the alert to configure. Component app alert policies can be: `CPU_UTILIZATION`, `MEM_UTILIZATION`, or `RESTART_COUNT`.
  - `value` \- The threshold for the type of the warning.
  - `operator` \- The operator to use. This is either of `GREATER_THAN` or `LESS_THAN`.
  - `window` \- The time before alerts should be triggered. This is may be one of: `FIVE_MINUTES`, `TEN_MINUTES`, `THIRTY_MINUTES`, `ONE_HOUR`.
  - `disabled` \- Determines whether the alert is disabled (default: `false`).
  - `destinations` \- Specification for alert destination.

    - `emails` \- Determines which emails receive alerts. The emails must be team members. If not set, the team’s email is used by default.
    - `slack_webhooks` \- Determines which slack channels or users receive alerts.
- `log_destination` \- Describes a log forwarding destination.

  - `name` \- Name of the log destination. Minimum length: 2. Maximum length: 42.
  - `papertrail` \- Papertrail configuration.

    - `endpoint` \- Papertrail syslog endpoint.
  - `datadog` \- Datadog configuration.

    - `endpoint` \- Datadog HTTP log intake endpoint.
    - `api_key` \- Datadog API key.
  - `logtail` \- Logtail configuration.

    - `token` \- Logtail token.
  - `opensearch` \- OpenSearch configuration

    - `endpoint` \- OpenSearch API Endpoint. Only HTTPS is supported. Format: https://:.
    - `basic_auth` \- OpenSearch basic auth

      - `user` \- Username to authenticate with. Only required when endpoint is set. Defaults to `doadmin` when `cluster_name` is set.
      - `password` \- Password for user defined in User. Is required when endpoint is set. Cannot be set if using a DigitalOcean DBaaS OpenSearch cluster.
    - `index_name` \- The index name to use for the logs. If not set, the default index name is `logs`.
    - `cluster_name` \- The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination. Cannot be specified if endpoint is also specified.
- `autoscaling` \- Configuration for automatically scaling this component based on metrics.

  - `min_instance_count` \- The minimum amount of instances for this component. Must be less than max\_instance\_count.
  - `max_instance_count` \- The maximum amount of instances for this component. Must be more than min\_instance\_count.
  - `metrics` \- The metrics that the component is scaled on.

    - `cpu` \- Settings for scaling the component based on CPU utilization.

      - `percent` \- The average target CPU utilization for the component.
- `termination` \- Contains a component’s termination parameters.

  - `grace_period_seconds` \- The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. Default: 120, Minimum 1, Maximum 600.
  - `drain_seconds` \- The number of seconds to wait between selecting a container instance for termination and issuing the TERM signal. Selecting a container instance for termination begins an asynchronous drain of new requests on upstream load-balancers. Default: 15 seconds, Minimum 1, Maximum 110.

A `static_site` can contain:

- `name` \- The name of the component.
- `build_command` \- An optional build command to run while building this component from source.
- `dockerfile_path` \- The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
- `source_dir` \- An optional path to the working directory to use for the build.
- `environment_slug` \- An environment slug describing the type of this app.
- `output_dir` \- An optional path to where the built assets will be located, relative to the build context. If not set, App Platform will automatically scan for these directory names: `_static`, `dist`, `public`.
- `index_document` \- The name of the index document to use when serving this static site.
- `error_document` \- The name of the error document to use when serving this static site.
- `catchall_document` \- The name of the document to use as the fallback for any requests to documents that are not found when serving this static site.
- `git` \- A Git repo to use as the component’s source. The repository must be able to be cloned without authentication. Only one of `git`, `github` or `gitlab` may be set.

  - `repo_clone_url` \- The clone URL of the repo.
  - `branch` \- The name of the branch to use.
- `github` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `bitbucket` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/bitbucket/install). Only one of `git`, `github`, `bitbucket`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `gitlab` \- A Gitlab repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `env` \- Describes an environment variable made available to an app competent.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `routes` \- (Deprecated - use `ingress`) An HTTP paths that should be routed to this component.

  - `path` \- Paths must start with `/` and must be unique within the app.
  - `preserve_path_prefix` \- An optional flag to preserve the path that is forwarded to the backend service.
- `cors` \- (Deprecated - use `ingress`) The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies of the app.

A `worker` can contain:

- `name` \- The name of the component
- `build_command` \- An optional build command to run while building this component from source.
- `dockerfile_path` \- The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
- `source_dir` \- An optional path to the working directory to use for the build.
- `run_command` \- An optional run command to override the component’s default.
- `environment_slug` \- An environment slug describing the type of this app.
- `instance_size_slug` \- The instance size to use for this component. This determines the plan (basic or professional) and the available CPU and memory. The list of available instance sizes can be [found with the API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps/operation/apps_list_instanceSizes) or using the [doctl CLI](https://docs.digitalocean.com/reference/doctl/) (`doctl apps tier instance-size list`). Default: `basic-xxs`
- `instance_count` \- The amount of instances that this component should be scaled to.
- `git` \- A Git repo to use as the component’s source. The repository must be able to be cloned without authentication. Only one of `git`, `github` or `gitlab` may be set

  - `repo_clone_url` \- The clone URL of the repo.
  - `branch` \- The name of the branch to use.
- `github` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `bitbucket` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/bitbucket/install). Only one of `git`, `github`, `bitbucket`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `gitlab` \- A Gitlab repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `image` \- An image to use as the component’s source. Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `registry_type` \- The registry type. One of `DOCR` (DigitalOcean container registry) or `DOCKER_HUB`.
  - `registry` \- The registry name. Must be left empty for the `DOCR` registry type. Required for the `DOCKER_HUB` registry type.
  - `repository` \- The repository name.
  - `registry_credentials` \- The credentials required to access a private Docker Hub or GitHub registry, in the following syntax `<username>:<token>`.
  - `tag` \- The repository tag. Defaults to `latest` if not provided.
  - `digest` \- The image digest. Cannot be specified if `tag` is provided.
  - `deploy_on_push` \- Configures automatically deploying images pushed to DOCR.

    - `enabled` \- Whether to automatically deploy images pushed to DOCR.
- `env` \- Describes an environment variable made available to an app competent.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `alert` \- Describes an alert policy for the component.

  - `rule` \- The type of the alert to configure. Component app alert policies can be: `CPU_UTILIZATION`, `MEM_UTILIZATION`, or `RESTART_COUNT`.
  - `value` \- The threshold for the type of the warning.
  - `operator` \- The operator to use. This is either of `GREATER_THAN` or `LESS_THAN`.
  - `window` \- The time before alerts should be triggered. This is may be one of: `FIVE_MINUTES`, `TEN_MINUTES`, `THIRTY_MINUTES`, `ONE_HOUR`.
  - `disabled` \- Determines whether or not the alert is disabled (default: `false`).
  - `destinations` \- Specification for alert destination.

    - `emails` \- Determines which emails receive alerts. The emails must be team members. If not set, the team’s email is used by default.
    - `slack_webhooks` \- Determines which slack channels or users receive alerts.
- `log_destination` \- Describes a log forwarding destination.

  - `name` \- Name of the log destination. Minimum length: 2. Maximum length: 42.
  - `papertrail` \- Papertrail configuration.

    - `endpoint` \- Papertrail syslog endpoint.
  - `datadog` \- Datadog configuration.

    - `endpoint` \- Datadog HTTP log intake endpoint.
    - `api_key` \- Datadog API key.
  - `logtail` \- Logtail configuration.

    - `token` \- Logtail token.
  - `opensearch` \- OpenSearch configuration

    - `endpoint` \- OpenSearch API Endpoint. Only HTTPS is supported. Format: https://:.
    - `basic_auth` \- OpenSearch basic auth

      - `user` \- Username to authenticate with. Only required when endpoint is set. Defaults to `doadmin` when `cluster_name` is set.
      - `password` \- Password for user defined in User. Is required when endpoint is set. Cannot be set if using a DigitalOcean DBaaS OpenSearch cluster.
    - `index_name` \- The index name to use for the logs. If not set, the default index name is `logs`.
    - `cluster_name` \- The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination. Cannot be specified if endpoint is also specified.
- `autoscaling` \- Configuration for automatically scaling this component based on metrics.

  - `min_instance_count` \- The minimum amount of instances for this component. Must be less than max\_instance\_count.
  - `max_instance_count` \- The maximum amount of instances for this component. Must be more than min\_instance\_count.
  - `metrics` \- The metrics that the component is scaled on.

    - `cpu` \- Settings for scaling the component based on CPU utilization.

      - `percent` \- The average target CPU utilization for the component.
- `termination` \- Contains a component’s termination parameters.

  - `grace_period_seconds` \- The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. Default: 120, Minimum 1, Maximum 600.

A `job` can contain:

- `name` \- The name of the component
- `kind` \- The type of job and when it will be run during the deployment process. It may be one of:

  - `UNSPECIFIED`: Default job type, will auto-complete to POST\_DEPLOY kind.
  - `PRE_DEPLOY`: Indicates a job that runs before an app deployment.
  - `POST_DEPLOY`: Indicates a job that runs after an app deployment.
  - `FAILED_DEPLOY`: Indicates a job that runs after a component fails to deploy.
- `build_command` \- An optional build command to run while building this component from source.
- `dockerfile_path` \- The path to a Dockerfile relative to the root of the repo. If set, overrides usage of buildpacks.
- `source_dir` \- An optional path to the working directory to use for the build.
- `run_command` \- An optional run command to override the component’s default.
- `environment_slug` \- An environment slug describing the type of this app.
- `instance_size_slug` \- The instance size to use for this component. This determines the plan (basic or professional) and the available CPU and memory. The list of available instance sizes can be [found with the API](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Apps/operation/apps_list_instanceSizes) or using the [doctl CLI](https://docs.digitalocean.com/reference/doctl/) (`doctl apps tier instance-size list`). Default: `basic-xxs`
- `instance_count` \- The amount of instances that this component should be scaled to.
- `git` \- A Git repo to use as the component’s source. The repository must be able to be cloned without authentication. Only one of `git`, `github` or `gitlab` may be set

  - `repo_clone_url` \- The clone URL of the repo.
  - `branch` \- The name of the branch to use.
- `github` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `bitbucket` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/bitbucket/install). Only one of `git`, `github`, `bitbucket`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `gitlab` \- A Gitlab repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `image` \- An image to use as the component’s source. Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `registry_type` \- The registry type. One of `DOCR` (DigitalOcean container registry) or `DOCKER_HUB`.
  - `registry` \- The registry name. Must be left empty for the `DOCR` registry type. Required for the `DOCKER_HUB` registry type.
  - `repository` \- The repository name.
  - `registry_credentials` \- The credentials required to access a private Docker Hub or GitHub registry, in the following syntax `<username>:<token>`.
  - `tag` \- The repository tag. Defaults to `latest` if not provided.
  - `digest` \- The image digest. Cannot be specified if `tag` is provided.
  - `deploy_on_push` \- Configures automatically deploying images pushed to DOCR.

    - `enabled` \- Whether to automatically deploy images pushed to DOCR.
- `env` \- Describes an environment variable made available to an app competent.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `alert` \- Describes an alert policy for the component.

  - `rule` \- The type of the alert to configure. Component app alert policies can be: `CPU_UTILIZATION`, `MEM_UTILIZATION`, or `RESTART_COUNT`.
  - `value` \- The threshold for the type of the warning.
  - `operator` \- The operator to use. This is either of `GREATER_THAN` or `LESS_THAN`.
  - `window` \- The time before alerts should be triggered. This is may be one of: `FIVE_MINUTES`, `TEN_MINUTES`, `THIRTY_MINUTES`, `ONE_HOUR`.
  - `disabled` \- Determines whether or not the alert is disabled (default: `false`).
  - `destinations` \- Specification for alert destination.

    - `emails` \- Determines which emails receive alerts. The emails must be team members. If not set, the team’s email is used by default.
    - `slack_webhooks` \- Determines which slack channels or users receive alerts.
- `log_destination` \- Describes a log forwarding destination.

  - `name` \- Name of the log destination. Minimum length: 2. Maximum length: 42.
  - `papertrail` \- Papertrail configuration.

    - `endpoint` \- Papertrail syslog endpoint.
  - `datadog` \- Datadog configuration.

    - `endpoint` \- Datadog HTTP log intake endpoint.
    - `api_key` \- Datadog API key.
  - `logtail` \- Logtail configuration.

    - `token` \- Logtail token.
  - `opensearch` \- OpenSearch configuration

    - `endpoint` \- OpenSearch API Endpoint. Only HTTPS is supported. Format: https://:.
    - `basic_auth` \- OpenSearch basic auth

      - `user` \- Username to authenticate with. Only required when endpoint is set. Defaults to `doadmin` when `cluster_name` is set.
      - `password` \- Password for user defined in User. Is required when endpoint is set. Cannot be set if using a DigitalOcean DBaaS OpenSearch cluster.
    - `index_name` \- The index name to use for the logs. If not set, the default index name is `logs`.
    - `cluster_name` \- The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination. Cannot be specified if endpoint is also specified.
- `termination` \- Contains a component’s termination parameters.

  - `grace_period_seconds` \- The number of seconds to wait between sending a TERM signal to a container and issuing a KILL which causes immediate shutdown. Default: 120, Minimum 1, Maximum 600.

A `function` component can contain:

- `name` \- The name of the component.
- `source_dir` \- An optional path to the working directory to use for the build.
- `git` \- A Git repo to use as the component’s source. The repository must be able to be cloned without authentication. Only one of `git`, `github` or `gitlab` may be set.

  - `repo_clone_url` \- The clone URL of the repo.
  - `branch` \- The name of the branch to use.
- `github` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/github/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `bitbucket` \- A GitHub repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/bitbucket/install). Only one of `git`, `github`, `bitbucket`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `gitlab` \- A Gitlab repo to use as the component’s source. DigitalOcean App Platform must have [access to the repository](https://cloud.digitalocean.com/apps/gitlab/install). Only one of `git`, `github`, `gitlab`, or `image` may be set.

  - `repo` \- The name of the repo in the format `owner/repo`.
  - `branch` \- The name of the branch to use.
  - `deploy_on_push` \- Whether to automatically deploy new commits made to the repo.
- `env` \- Describes an environment variable made available to an app competent.

  - `key` \- The name of the environment variable.
  - `value` \- The value of the environment variable.
  - `scope` \- The visibility scope of the environment variable. One of `RUN_TIME`, `BUILD_TIME`, or `RUN_AND_BUILD_TIME` (default).
  - `type` \- The type of the environment variable, `GENERAL` or `SECRET`.
- `routes` \- (Deprecated - use `ingress`) An HTTP paths that should be routed to this component.

  - `path` \- Paths must start with `/` and must be unique within the app.
  - `preserve_path_prefix` \- An optional flag to preserve the path that is forwarded to the backend service.
- `cors` \- (Deprecated - use `ingress`) The [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies of the app.
- `alert` \- Describes an alert policy for the component.

  - `rule` \- The type of the alert to configure. Component app alert policies can be: `CPU_UTILIZATION`, `MEM_UTILIZATION`, or `RESTART_COUNT`.
  - `value` \- The threshold for the type of the warning.
  - `operator` \- The operator to use. This is either of `GREATER_THAN` or `LESS_THAN`.
  - `window` \- The time before alerts should be triggered. This is may be one of: `FIVE_MINUTES`, `TEN_MINUTES`, `THIRTY_MINUTES`, `ONE_HOUR`.
  - `disabled` \- Determines whether or not the alert is disabled (default: `false`).
  - `destinations` \- Specification for alert destination.

    - `emails` \- Determines which emails receive alerts. The emails must be team members. If not set, the team’s email is used by default.
    - `slack_webhooks` \- Determines which slack channels or users receive alerts.
- `log_destination` \- Describes a log forwarding destination.

  - `name` \- Name of the log destination. Minimum length: 2. Maximum length: 42.
  - `papertrail` \- Papertrail configuration.

    - `endpoint` \- Papertrail syslog endpoint.
  - `datadog` \- Datadog configuration.

    - `endpoint` \- Datadog HTTP log intake endpoint.
    - `api_key` \- Datadog API key.
  - `logtail` \- Logtail configuration.

    - `token` \- Logtail token.
  - `opensearch` \- OpenSearch configuration

    - `endpoint` \- OpenSearch API Endpoint. Only HTTPS is supported. Format: https://:.
    - `basic_auth` \- OpenSearch basic auth

      - `user` \- Username to authenticate with. Only required when endpoint is set. Defaults to `doadmin` when `cluster_name` is set.
      - `password` \- Password for user defined in User. Is required when endpoint is set. Cannot be set if using a DigitalOcean DBaaS OpenSearch cluster.
    - `index_name` \- The index name to use for the logs. If not set, the default index name is `logs`.
    - `cluster_name` \- The name of a DigitalOcean DBaaS OpenSearch cluster to use as a log forwarding destination. Cannot be specified if endpoint is also specified.

A `database` can contain:

- `name` \- The name of the component.
- `engine` \- The database engine to use (`MYSQL`, `PG`, `REDIS`, `MONGODB`, `KAFKA`, or `OPENSEARCH`).
- `version` \- The version of the database engine.
- `production` \- Whether this is a production or dev database.
- `cluster_name` \- The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if `cluster_name` is not set, a new cluster will be provisioned.
- `db_name` \- The name of the MySQL or PostgreSQL database to configure.
- `db_user` \- The name of the MySQL or PostgreSQL user to configure.

This resource supports [customized create timeouts](https://www.terraform.io/docs/language/resources/syntax.html#operation-timeouts). The default timeout is 30 minutes.

## Attributes Reference

In addition to the above attributes, the following are exported:

- `id` \- The ID of the app.
- `default_ingress` \- The default URL to access the app.
- `live_url` \- The live URL of the app.
- `live_domain` \- The live domain of the app.
- `active_deployment_id` \- The ID the app’s currently active deployment.
- `urn` \- The uniform resource identifier for the app.
- `updated_at` \- The date and time of when the app was last updated.
- `created_at` \- The date and time of when the app was created.

## Import

An app can be imported using its `id`, e.g.

```
terraform import digitalocean_app.myapp fb06ad00-351f-45c8-b5eb-13523c438661
```

In this article...

- [Example Usage](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#example-usage)
  - [Basic Example](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#basic-example)
  - [Static Site Example](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#static-site-example)
  - [Multiple Components Example](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#multiple-components-example)
  - [Log Destination Example with Opensearch](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#log-destination-example-with-opensearch)
  - [Edge Controls Example](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#edge-controls-example)
  - [Maintenance Example](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#maintenance-example)
- [Argument Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#argument-reference)
- [Attributes Reference](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#attributes-reference)
- [Import](https://docs.digitalocean.com/reference/terraform/reference/resources/app/#import)

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