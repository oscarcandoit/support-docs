---
url: "https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/"
title: "Chartbrew | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/)
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

- Chartbrew

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Chartbrew

Generated on 12 Nov 2025
from [the Chartbrew catalog page](https://marketplace.digitalocean.com/apps/chartbrew)

![](https://camo.githubusercontent.com/851b8170c7aff69a31dad6d45b843925b092fc62b5e31301ce759d1e9b614931/68747470733a2f2f6368617274627265772d7374617469632e622d63646e2e6e65742f62616e6e6572732f6368617274627265772d64617368626f6172642e706e67)

- Chartbrew is a powerful data visualization and reporting tool designed to help businesses create insightful reports with ease.
- Seamless integrations to various data sources allow users to generate interactive dashboards and share them with clients or team members in real-time.
- The intuitive interface and customizable charts enable you to uncover trends and make data-driven decisions quickly.
- Chartbrew saves you time and enhances your reporting capabilities, making it an essential tool for any data-driven organization.
- **Chartbrew can also be used as a managed service at [chartbrew.com](https://chartbrew.com/)**

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Chartbrew](https://github.com/chartbrew/chartbrew) | [v4.6.0](https://github.com/chartbrew/chartbrew/releases/tag/v4.3.0) | [FSL-1.1-MIT](https://github.com/chartbrew/chartbrew/blob/master/LICENSE-FSL.md) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=depomo-chartbrew)

## Creating an App using the API

In addition to creating a Droplet from the Chartbrew 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Chartbrew Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"depomo-chartbrew"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Chartbrew

## Chartbrew Droplet – Getting Started

Welcome! This guide helps you use your Chartbrew Droplet deployed from the Marketplace image.

* * *

[Check out our managed Chartbrew Cloud service for a fully hosted solution](https://chartbrew.com/)

* * *

## Access

- App (frontend): `http://&amp;amp;lt;droplet-ip&amp;amp;gt;:4018`
- API: `http://&amp;amp;lt;droplet-ip&amp;amp;gt;:4019/`
- First boot may take 1–3 minutes (env setup, DB init, client build).

## Process management

- Services are managed by PM2 via systemd:

```
# Service status / restart
sudo systemctl status chartbrew-pm2
sudo systemctl restart chartbrew-pm2

# View app logs
sudo -u chartbrew pm2 status
sudo -u chartbrew pm2 logs --lines 200
```

## Configuration (.env)

- Main config file: `/opt/chartbrew/.env`
- Key variables:- VITE\_APP\_CLIENT\_HOST: public URL for the UI (defaults to `http://&amp;amp;lt;ip&amp;amp;gt;:4018`)\- VITE\_APP\_CLIENT\_PORT: UI port (defaults to `4018`)\- VITE\_APP\_API\_HOST: public URL for the API (defaults to `http://&amp;amp;lt;ip&amp;amp;gt;:4019`)

  - CB\_DB\_\*: database connection options (local MySQL by default)
  - CB\_ENCRYPTION\_KEY: 64‑char hex key (auto‑generated)
  - Mail settings: `CB_MAIL_HOST`, `CB_MAIL_USER`, `CB_MAIL_PASS`, etc.

Full variable reference: [https://docs.chartbrew.com/environment-variables](https://docs.chartbrew.com/environment-variables)

### Apply config changes

- When changing UI variables (VITE\_\*), rebuild the client and restart:

```
sudo -u chartbrew bash -lc 'cd /opt/chartbrew/client && npm run build'
sudo systemctl restart chartbrew-pm2
```

- When changing server-only variables (CB\_\*), just restart:

```
sudo systemctl restart chartbrew-pm2
```

## Domain and HTTPS (optional)

1. Point your domain(s) to the droplet IP.

2. Update `/opt/chartbrew/.env`:


```
# Example
VITE_APP_CLIENT_HOST=https://app.example.com
VITE_APP_API_HOST=https://api.example.com
```

3. Issue certificates (Certbot is preinstalled):

```
sudo certbot --nginx -d app.example.com -d api.example.com
```

4. Rebuild client and restart:

```
sudo -u chartbrew bash -lc 'cd /opt/chartbrew/client && npm run build'
sudo systemctl restart chartbrew-pm2
```

## Database

- Local MySQL is provisioned on first boot with a randomized `CB_DB_PASSWORD` stored in `/opt/chartbrew/.env`.
- To use a Managed DB, set `CB_DB_HOST`, `CB_DB_PORT`, `CB_DB_NAME`, `CB_DB_USERNAME`, `CB_DB_PASSWORD` to your cluster values and restart the service.

## Troubleshooting

- First boot config did not run:

```
sudo tail -n 200 /var/log/cloud-init-output.log
ls -l /var/lib/cloud/scripts/per-instance/
# You can re-run on-boot script if present:
sudo bash /var/lib/cloud/scripts/per-instance/001_chartbrew_onboot.sh
```

- API not responding on 4019:

```
curl -s http://localhost:4019/
sudo -u chartbrew pm2 logs chartbrew-api --lines 200
```

- Client not pointing to the right API:- Verify `VITE_APP_API_HOST` in `/opt/chartbrew/.env`, rebuild client, restart service.

## Useful docs

- Docs home: [https://docs.chartbrew.com/](https://docs.chartbrew.com/)
- Env vars: [https://docs.chartbrew.com/environment-variables](https://docs.chartbrew.com/environment-variables)
- Deploy guides: [https://docs.chartbrew.com/deployment/](https://docs.chartbrew.com/deployment/)

* * *

If you get stuck, check logs with `journalctl -u chartbrew-pm2 -f` and `pm2 logs`, or [open an issue on the Chartbrew repo](https://github.com/chartbrew/chartbrew/issues).

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#creating-an-app-using-the-api)
- [Getting Started After Deploying Chartbrew](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#getting-started-after-deploying-chartbrew)
- [Chartbrew Droplet – Getting Started](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#chartbrew-droplet--getting-started)
- [Access](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#access)
- [Process management](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#process-management)
- [Configuration (.env)](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#configuration-env)
  - [Apply config changes](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#apply-config-changes)
- [Domain and HTTPS (optional)](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#domain-and-https-optional)
- [Database](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#database)
- [Troubleshooting](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#troubleshooting)
- [Useful docs](https://docs.digitalocean.com/products/marketplace/catalog/chartbrew/#useful-docs)

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