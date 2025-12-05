---
url: "https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/"
title: "VS Code Server | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/)
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

- VS Code Server

[Give Feedback](https://ideas.digitalocean.com/documentation)

# VS Code Server

Generated on 9 Jan 2025
from [the VS Code Server catalog page](https://marketplace.digitalocean.com/apps/vs-code-server)

code-server is a powerful open-source tool that enables you to run Visual Studio Code (VS Code) as a web-based application. With code-server, you can create a cloud-based integrated development environment (IDE), making it accessible from anywhere with an internet connection.

## Key Features

- **Web-Based Coding:** code-server provides a web-based interface for Visual Studio Code, allowing you to effortlessly write, edit, and debug code in your preferred browser.
- **Accessibility:** Say goodbye to device dependencies. code-server lets you access your development environment from any machine, enabling seamless collaboration and flexibility in your workflow.
- **Remote Development:** Whether you’re at home, in the office, or on the go, code-server ensures your development environment is always within reach. Access and continue your work from any location with internet connectivity.
- **Secure and Efficient:** With SSL encryption and secure authentication, code-server ensures a safe coding environment. Enjoy the efficiency of cloud-based development without compromising on security.
- **Customization:** Tailor your coding environment to suit your preferences. Install extensions, configure settings, and personalize your workspace just the way you like it.
- **Real-Time Collaboration:** Foster collaboration with team members by providing them easy access to the same development environment. Work on projects together in real-time, enhancing productivity and teamwork.

![Screenshot](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/code-server-screenshot-1.png)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [code-server](https://github.com/coder/code-server) | [4.19.1](https://github.com/coder/code-server/releases/tag/v4.19.1) | [MIT](https://raw.githubusercontent.com/coder/code-server/main/LICENSE) |
| Nginx | [1.18](https://packages.ubuntu.com/jammy/web/nginx) | [Custom](https://nginx.org/LICENSE) |
| Certbot | [1.21.0](https://packages.ubuntu.com/jammy/certbot) | [Apache 2.0](https://raw.githubusercontent.com/certbot/certbot/master/LICENSE.txt) |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=codertechnologie-vscodeserver)

## Creating an App using the API

In addition to creating a Droplet from the VS Code Server 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB VS Code Server Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"codertechnologie-vscodeserver"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying VS Code Server

## Getting Started with VS Code Server on DigitalOcean

Once the droplet has been created, following are some steps to help you get started with VS Code Server.

## Step 1: Connect to Your VS Code Server Droplet

1. **Access Your Droplet:**
   - Once your Droplet is created, open a terminal on your local machine.
2. **SSH into Your Droplet:**


   - Use the following command to SSH into your Droplet:

```
ssh root@your_droplet_ip
```

Replace `your_droplet_ip` with the actual IP address of your Droplet.
   - Copy the login credentials for code-server

![](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/code-server-screenshot-3.png)

3. **Access the VS Code Server Web UI:**

- In your web browser go to http://`your_droplet_ip` and login using the password copied in the previous step.

![](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/code-server-screenshot-2.png)

## Step 2: Secure Your Domain with Let’s Encrypt

1. **Obtain SSL Certificate:**


   - Run Certbot to obtain a Let’s Encrypt SSL certificate:

```
sudo certbot --nginx -d your_domain.com
```

   - Follow the prompts to configure your domain and enable HTTPS.
2. **Auto-Renewal:**


   - Certbot will set up a cron job for auto-renewal. Ensure it’s working:

```
sudo certbot renew --dry-run
```

## Step 3: Configure Nginx for Proxying

1. **Configure Nginx:**


   - Create a new Nginx server block configuration:

```
sudo nano /etc/nginx/sites-available/code-server
```

   - Paste the following configuration:

```
server {
     listen 80;
     server_name your_domain.com;<pre> location / {
                             proxy_pass http://localhost:8080;
                             proxy_http_version 1.1;
                             proxy_set_header Upgrade $http_upgrade;
                             proxy_set_header Connection 'upgrade';
                             proxy_set_header Host $host;
                             proxy_set_header X-Real-IP $remote_addr;
                             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                             proxy_set_header X-Forwarded-Proto $scheme;
                         }

                         # SSL Configuration
                         listen 443 ssl; # Enable SSL on port 443
                         ssl_certificate /etc/letsencrypt/live/your_domain.com/fullchain.pem; # Adjust the path
                         ssl_certificate_key /etc/letsencrypt/live/your_domain.com/privkey.pem; # Adjust the path
                         include /etc/nginx/snippets/ssl-params.conf; # Include SSL parameters</pre> }
```

   - Save and exit the editor.
2. **Enable the Nginx Configuration:**


   - Create a symbolic link to the sites-enabled directory:

```
sudo ln -s /etc/nginx/sites-available/code-server /etc/nginx/sites-enabled
```

3. **Test Nginx Configuration:**


   - Ensure there are no syntax errors:

```
sudo nginx -t
```

   - If no errors, restart Nginx:

```
sudo systemctl restart nginx
```

## Step 4: Access VS Code Server via HTTPS

1. **Access VS Code Server:**
   - Open a web browser and navigate to `https://your_domain.com`.
2. **Log In:**
   - Log in with the password you set earlier.
3. **Explore VS Code Server:**
   - You are now using code-server securely via HTTPS.

## Step 5: Customize and Develop

1. **Customize VS Code Server:**
   - Customize your development environment within code-server, install extensions, and configure settings as needed.
2. **Persistence (Optional):**
   - Consider configuring backups or snapshots for your Droplet to ensure data persistence.

Replace `your_domain.com` with your actual domain throughout the guide.

## Using the code-server Interface

In this section, you’ll use some of the features of the code-server interface. Since code-server is Visual Studio Code running in the cloud, it has the same interface as the standalone desktop edition.

On the left-hand side of the IDE, there is a vertical row of six buttons that will the most commonly used features in a side panel known as the Activity Bar:

![code-server GUI sidepanel](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/2SVG8j7.png)

This bar is customizable so you can move these buttons or remove them from the bar. By default, the first button (the hamburger menu icon) opens the general menu in a dropdown, while the second button (the folder icon) opens the Explorer panel that provides tree-like navigation of the project’s structure. You can manage your folders and files here, creating, deleting, moving, and renaming them as necessary. The magnifying glass button provides access to a search and replace functionality.

Following this, in the default order, is the icon that provides your view of the source control systems, like Git. Visual Studio Code also supports other source control providers.

![source control menu](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/KBRpHR6.png)

The debugger option (the triangle with a little bug icon) provides common actions for debugging in the panel. Visual Studio Code comes with built-in support for the Node.js runtime debugger and any language that transpiles to Javascript. For other languages, you can install extensions for the required debugger. The four blocks button, which is the final view in the Activity Bar, provides a menu to access available extensions on the VSCode Marketplace.

The primary area of the GUI is your editor, which you can separate by tabs for code editing. You can change your editing view to a grid system or to side-by-side files.

Open `code-server.your-domain/?folder=/var/lib/code-server/User` in your browser, which will load an existing folder.

Select the hamburger menu icon to open a menu of options, then select the File menu where you will create a New File. Name the file and save it to the default folder location.

Once saved, the file will be viewable in the Explorer side panel. Creating folders can be done by right-clicking on the Explorer sidebar and clicking on New Folder. You can expand a folder by clicking on its name as well as dragging and dropping files and folders to upper parts of the hierarchy to move them to a new location.

![code-server GUI Editor](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/code-server-screenshot-4.png)

You can gain access to a terminal by clicking on Terminal in the upper menu dropdown, and selecting New Terminal. You can also use the keyboard shortcut listed in the menu. The terminal will open in a lower panel and its working directory will be set to the project’s workspace, which contains the files and folders shown in the Explorer side panel.

In this step, you reviewed the code-server interface and some of the most commonly used features.

## Conclusion

You now have code-server, a versatile cloud IDE, installed on your Ubuntu 22.04 server, exposed at your domain, and secured using Let’s Encrypt certificates. You can now work on projects individually or collaboratively as a team. Running a cloud IDE frees resources on your local machine and allows you to scale the resources when needed. For further information, see the Visual Studio Code documentation for additional features and detailed instructions on other components of code-server.

In this article...

- [Key Features](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#key-features)
- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#creating-an-app-using-the-api)
- [Getting Started After Deploying VS Code Server](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#getting-started-after-deploying-vs-code-server)
- [Getting Started with VS Code Server on DigitalOcean](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#getting-started-with-vs-code-server-on-digitalocean)
- [Step 1: Connect to Your VS Code Server Droplet](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#step-1-connect-to-your-vs-code-server-droplet)
- [Step 2: Secure Your Domain with Let’s Encrypt](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#step-2-secure-your-domain-with-lets-encrypt)
- [Step 3: Configure Nginx for Proxying](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#step-3-configure-nginx-for-proxying)
- [Step 4: Access VS Code Server via HTTPS](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#step-4-access-vs-code-server-via-https)
- [Step 5: Customize and Develop](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#step-5-customize-and-develop)
- [Using the code-server Interface](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#using-the-code-server-interface)
- [Conclusion](https://docs.digitalocean.com/products/marketplace/catalog/vs-code-server/#conclusion)

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