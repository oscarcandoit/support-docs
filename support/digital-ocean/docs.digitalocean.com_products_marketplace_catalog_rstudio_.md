---
url: "https://docs.digitalocean.com/products/marketplace/catalog/rstudio/"
title: "RStudio | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/rstudio/)
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

- RStudio

[Give Feedback](https://ideas.digitalocean.com/documentation)

# RStudio

Generated on 9 Aug 2022
from [the RStudio catalog page](https://marketplace.digitalocean.com/apps/rstudio)

RStudio Server is the premier integrated development environment for R that allows to move computation close to the data and scale compute and RAM centrally.

This is a pre-configured image with R and open source editions of RStudio Server and Shiny Server. All dependencies are solved for you to just go and use this droplet with already configured `tidyverse`, `data.table`, and other widely used packages so that in three clicks and no more than five minutes you’ll have your server running and ready to fit models, share Shiny apps and much more.

Aside of fully solved dependencies, this image features a LaTeX installation and OpenBLAS to boost some numerical operations. This image is prepared, to a wide extent, to install, say, `plumber` and other packages as a wide variety of dependencies (i.e. `libsodium-dev`) are already solved.

## Software Included

| Package | Version | License |
| --- | --- | --- |
| R | [4.2.1](https://cran.r-project.org/doc/manuals/r-release/NEWS.html) | [GPL-3](https://www.r-project.org/Licenses/AGPL-3) |
| RStudio Server | [2021.09.2+382](https://www.rstudio.com/products/rstudio/release-notes/) | [AGPL-3](http://www.gnu.org/licenses/agpl-3.0-standalone.html) |
| Shiny Server | [1.5.16.958](https://support.rstudio.com/hc/en-us/articles/215642837-Shiny-Server-Pro-Release-History) | [AGPL-3](http://www.gnu.org/licenses/agpl-3.0-standalone.html) |
| openJDK | [11.0.10](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) | [GPL-2](https://openjdk.java.net/legal/gplv2+ce.html) |
| OpenBLAS | [0.3.8](https://github.com/xianyi/OpenBLAS/releases) | [BSD-3](https://github.com/xianyi/OpenBLAS/blob/develop/LICENSE) |
| TeX Live (Basic) | [2021](http://www.tug.org/texlive/doc/texlive-en/texlive-en.html#x1-700009) | [GPL-2](https://opensource.org/licenses/gpl-2.0.php) |
| R Development - devtools | [2.4.2](https://cran.r-project.org/package=devtools) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Development - usethis | [2.0.1](https://cran.r-project.org/package=usethis) | [MIT](https://cran.r-project.org/web/licenses/MIT) |
| R Datasets - data.table | [1.14.0](https://cran.r-project.org/web/packages/data.table/index.html) | [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/) |
| R Datasets - tidyverse | [1.3.1](https://cran.r-project.org/package=tidyverse) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Databases - arrow | [6.0.1](https://cran.r-project.org/package=arrow) | [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) |
| R Databases - RMariaDB | [1.1.1](https://cran.r-project.org/package=RMariaDB) | [GPL-2](https://cran.r-project.org/web/licenses/GPL-2) |
| R Databases - RPostgres | [1.3.2](https://cran.r-project.org/package=RPostgres) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Documentation - bookdown | [0.22](https://cran.r-project.org/package=bookdown) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Documentation - rmarkdown | [2.9](https://cran.r-project.org/package=rmarkdown) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Documentation - xaringan | [0.22](https://cran.r-project.org/package=xaringan) | [MIT](https://cran.r-project.org/web/licenses/MIT) |
| R Documentation - Rdpack | [2.1.2](https://cran.r-project.org/package=Rdpack) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Parallelization - doParallel | [1.0.16](https://cran.r-project.org/package=doParallel) | [GPL-2](https://cran.r-project.org/web/licenses/GPL-2) |
| R Parallelization - future | [1.21.0](https://cran.r-project.org/package=future) | [LGPL-3](https://cran.r-project.org/web/licenses/LGPL-3) |
| R Statistics - brms | [2.17.0](https://cran.r-project.org/package=brms) | [GPL-2](https://cran.r-project.org/web/licenses/GPL-2) |
| R Statistics - cmdstanr | [0.5.1](https://mc-stan.org/cmdstanr/) | [BSD-3](https://opensource.org/licenses/BSD-3-Clause) |
| R Statistics - tidymodels | [0.1.3](https://cran.r-project.org/package=tidymodels) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Visualization - DT | [0.18](https://cran.r-project.org/package=DT) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Visualization - highcharter | [0.8.2](https://cran.r-project.org/package=highcharter) | [MIT + Highcharts License](https://cran.r-project.org/web/licenses/MIT) |
| R Visualization - shinydashboard | [0.7.1](https://cran.r-project.org/package=shinydashboard) | [GPL-3](https://cran.r-project.org/web/licenses/GPL-3) |
| R Visualization - shinyjs | [2.0.1](https://cran.r-project.org/package=shinyjs) | [MIT](https://cran.r-project.org/web/licenses/MIT) |
| Fail2ban | [0.11.1](https://packages.ubuntu.com/focal/fail2ban) | [GPL-2](https://opensource.org/licenses/gpl-2.0.php) |
| libsodium | [1.0.18](https://packages.ubuntu.com/focal/libsodium-dev) | [ISC](https://opensource.org/licenses/ISC) |
| NGINX | [1.18.0](https://packages.ubuntu.com/focal/nginx) | [NGINX License](https://nginx.org/LICENSE) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=rstudio-20-04)

## Creating an App using the API

In addition to creating a Droplet from the RStudio 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB RStudio Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"rstudio-20-04"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying RStudio

Access to the shell from [Digital Ocean Control Panel](https://cloud.digitalocean.com/) (i.e. see the details [here](https://docs.digitalocean.com/products/droplets/how-to/connect-with-console/#access-the-droplet-console)) or by using ssh. Then type `adduser rstudio` (or any other user) and hit ’enter’. You are free to set “rstudio” as password, but please set a safe password.

Now you are ready to use RStudio! Go to 203.0.113.0:8787 (look for the real IP in your control panel) and access with the user rstudio and the password previously defined. But there are optional steps for enhanced security.

It’s also possible to use [analogsea](https://github.com/pachadotdev/analogsea) to automate both droplet and user creation. This is useful if you plan to create many users.

**Creating a system administrator account**

It is highly recommended that you create an administrator account separate from root.

Let’s create the user paul from the console (browser or SSH):

```
adduser paul
usermod -aG sudo paul
```

For the full reference please check this [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-20-04-quickstart).

**Adding more users**

Let’s create three users that will only be able to install R packages to their personal directory (and of course to use R, RStudio and Shiny):

```
adduser john
adduser george
adduser ringo
```

Now delete the rstudio user:

```
deluser rstudio
```

**Using RStudio Server with encryption**

Run this command from the terminal (useful if your network has blocked ports):

```
ssh -f root@203.0.113.0 -L 8787:203.0.113.0:8787 -N
```

And then, from the browser go to `localhost:8787`.

**Custom domain and enabled https**

Let’s say that you want people from your organization access RStudio Server from `rstudio.ourcompany.us` instead of `203.0.113.0:8787`.

DigitalOcean tutorials already covered the additional steps to do that by using [Nginx](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04) or [Apache](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-20-04). This image already includes Nginx to simplify things a bit.

**Security notes**

- The SSH access for the rstudio user is disabled without an SSH key.
- The current version features `fail2ban` to provide some security.
- After 5 incorrect login attempts, the IP where the fail comes shall be banned from HTTP/SSH logins.
- If you are accidentally banned, you shall need to visit digitalocean.com and access your droplet from the [Dashboard’s console](https://www.digitalocean.com/docs/droplets/resources/console/#log-in-with-the-console) and follow and [unban](https://serverfault.com/questions/285256/how-to-unban-an-ip-properly-with-fail2ban) your IP.

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/rstudio/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/rstudio/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/rstudio/#creating-an-app-using-the-api)
- [Getting Started After Deploying RStudio](https://docs.digitalocean.com/products/marketplace/catalog/rstudio/#getting-started-after-deploying-rstudio)

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