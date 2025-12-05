---
url: "https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/"
title: "Counter Strike 2 | DigitalOcean Documentation"
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
- [Catalog](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/)
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

- Counter Strike 2

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Counter Strike 2

Generated on 3 Mar 2024
from [the Counter Strike 2 catalog page](https://marketplace.digitalocean.com/apps/counter-strike-2)

Counter Strike 2 is a legendary first-person shooter (FPS) game known for its intense multiplayer battles and strategic gameplay. Developed by Valve Corporation, Counter Strike 2 is a sequel to the highly acclaimed Counter-Strike series, offering enhanced graphics, new weapons, maps, and gameplay mechanics. Engage in thrilling team-based matches where you must choose between Counter-Terrorists and Terrorists as you compete to complete objectives or eliminate the opposing team.

![Preview 1](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/counter-strike-2.jpeg)

![Preview 2](https://do-not-delete-droplet-assets.nyc3.digitaloceanspaces.com/counter-strike-1.jpeg)

## Software Included

| Package | Version | License |
| --- | --- | --- |
| [Counter Strike 2](https://store.steampowered.com/app/730/CounterStrike_2/) | 13593156 | Custom |
| [LinuxGSM](https://linuxgsm.com/) | 24.1.4 | MIT |
| [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) | 0~20180105-4:i386 | Custom |

## Creating an App using the Control Panel

Click the **Deploy to DigitalOcean** button to create a Droplet based on this 1-Click App. If you aren’t logged in, this link will prompt you to log in with your DigitalOcean account.

[![Deploy to DO](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/droplets/new?image=sharklabs-counterstrike2)

## Creating an App using the API

In addition to creating a Droplet from the Counter Strike 2 1-Click App using the control panel, you can also use the [DigitalOcean API](https://docs.digitalocean.com/reference/api). As an example, to create a 4GB Counter Strike 2 Droplet in the SFO2 region, you can use the following `curl` command. You need to either save your [API access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) to an environment variable or substitute it in the command below.

```shell
curl -X POST -H 'Content-Type: application/json' \
         -H 'Authorization: Bearer '$TOKEN'' -d \
        '{"name":"choose_a_name","region":"sfo2","size":"s-2vcpu-4gb","image":"sharklabs-counterstrike2"}' \
        "https://api.digitalocean.com/v2/droplets"
```

## Getting Started After Deploying Counter Strike 2

Welcome to the Counter Strike 2 Droplet on DigitalOcean! This guide will walk you through the steps to set up and manage your own Counter Strike 2 server powered by LinuxGSM.

> It is recommended to use 4GB RAM and 2 Cores Premium Intel Droplet size for the best experience.

> **Note:** After Counter Strike Droplet is created, it will take ~5 minutes to initialise depending on the Droplet size. If you are getting Timed out errors - make sure to give your server a minute.

### Access Your Server

1. Once your Droplet is created, use an SSH client like PuTTY (Windows) or Terminal (macOS/Linux) to connect to your server using the provided credentials.

### Initial Configuration

### Counter Strike 2 Configurations

01. Navigate to the Steam Game Server Account Management page [here](https://steamcommunity.com/dev/managegameservers).
02. Log in with your Steam account credentials.
03. Click on “Create Token” to generate a new authentication token.
04. Enter a description for your token (e.g., “Counter Strike 2 Server”).
05. Use the App ID “730” which corresponds to Counter Strike 2.
06. Click on “Create” to generate your unique token.
07. Copy the generated token.
08. Navigate back to your server’s terminal.
09. Edit the `server.cfg` file located at `/home/steam/serverfiles/game/csgo/cfg/cs2server.cfg` in the Counter Strike 2 server directory.
10. Add the following line to the `server.cfg` file, replacing `your_token` with the token you copied:

```
sv_setsteamaccount "your_token"
```

11. You also update other server configurations in the `server.cfg` file to set game modes and the default map.
12. Save and close the file.

### Game Server Configurations

- If you want to change the default port for the game server or override the startup options, edit the `server.cfg` file located at `/home/steam/lgsm/config-lgsm/cs2server/cs2server.cfg`.
- Following predefined configurations can be updated:

```
defaultmap="map_name"
gamemode="game_mode"
maxplayers="42"
port="27015"
```

- Add the following to override server start up options:

```
startparameters="-game nmrih -strictportbind -ip 91.121.72.41 -port 27015 +clientport 27017 +tv_port 27016 +map nmo_broadway +servercfgfile nmrih-server-1.cfg -maxplayers 8"
```

> **Note:** Replace the start parameters with your own according to the supported Counter Strike 2 startup options

### Game Modes

Here are some common game modes and their configurations:

| Gametype | Gamemode | Gamemode Flags | Skirmish ID | Mapgroup |
| --- | --- | --- | --- | --- |
| Arms Race | 1 | 0 | 0 | mg\_armsrace |
| Boom! Headshot! | 1 | 2 | 0 | mg\_skirmish\_headshots |
| Classic Casual | 0 | 0 | 0 | mg\_casualsigma, mg\_casualdelta |
| Classic Competitive (Default) | 0 | 1 | 0 | mg\_active, mg\_reserves, mg\_hostage, mg\_de\_dust2, … |
| Classic Competitive (Short Match) | 0 | 1 | 32 | mg\_active, mg\_reserves, mg\_hostage, mg\_de\_dust2, … |
| Danger Zone | 6 | 0 | 0 | mg\_dz\_blacksite (map: dz\_blacksite), mg\_dz\_sirocco (map: dz\_sirocco) |
| Deathmatch (Default) | 1 | 2 | 0 | mg\_deathmatch |
| Deathmatch (Free For All) | 1 | 2 | 32 | mg\_deathmatch |
| Deathmatch (Team vs Team) | 1 | 2 | 4 | mg\_deathmatch |
| Demolition | 1 | 1 | 0 | mg\_demolition |
| Flying Scoutsman | 0 | 0 | 0 | mg\_skirmish\_flyingscoutsman |
| Hunter-Gatherers | 1 | 2 | 0 | mg\_skirmish\_huntergatherers |
| Retakes | 0 | 0 | 0 | mg\_skirmish\_retakes |
| Stab Stab Zap | 0 | 0 | 0 | mg\_skirmish\_stabstabzap |
| Trigger Discipline | 0 | 0 | 0 | mg\_skirmish\_triggerdiscipline |
| Wingman | 0 | 2 | 0 | mg\_de\_prime, mg\_de\_blagai, mg\_de\_vertigo, mg\_de\_inferno, mg\_de\_overpass, mg\_de\_cbble, mg\_de\_train, mg\_de\_shortnuke, mg\_de\_shortdust, mg\_de\_lake |

### Invite Players

1. Share your server’s IP address and port with your friends and fellow gamers.
2. They can connect to your server directly from the Counter Strike 2 client by entering the IP address and the port in the server browser.

### Connect To The Server

1. From the main menu click “Play” and then click the globe icon to open the community server browser.
2. In the server browser window, you’ll see different tabs like “Internet,” “Favorites”, “History” and “Lan”.
3. Navigate to the “Favourites” tab and click the “+” button and add your `server-ip:port` in the prompt and click “Add”.
4. Click on the newly added server from the list to connect to it.

> ### OR

From the developer console, run the following command:

```
connect <droplet-IP>:<port>
```

> **Note:** Replace the droplet IP and port with your droplet IP and port. The default port for the server is 27015.

### Managing Your Server

To manage your Counter Strike 2 run the following commands as `steam` user:

### Running Commands

- **Start**: `./cs2server start`
- **Stop**: `./cs2server stop`
- **Restart**: `./cs2server restart`
- **Console**: Allows you to view the live console of a server as it is running and allows you to enter commands; if supported. To exit the console, press `CTRL+b d`. Pressing `CTRL+c` will terminate the server. Command: `./cs2server console`

### Updating

- **Update**: Checks for any server updates and applies them. The server will update and restart only if required. Command: `./cs2server update`
- **Force Update**: Bypasses the check and goes straight to SteamCMD update. Command: `./cs2server force-update`
- **Validate**: You can use the SteamCMD validate option when updating the server. Command: `./cs2server validate`

### Debugging

- **Details**: Get all important and useful details about the server such as passwords, ports, config files, etc. Command: `./cs2server details`
- **Debug**: Use debug mode to help you if you are having issues with the server. Debug allows you to see the output of the server directly to your terminal allowing you to diagnose any problems the server might be having. Command: `./cs2server debug`

### Logs

- Server logs are available to monitor and diagnose your server. Script, console, and game server (if available) logs are created for the server. Location: `/home/cs2server/logs`

### Backup

- Backup will allow you to create a complete tar bzip2 archive of the whole server. Command: `./cs2server backup`

### Monitor

- LinuxGSM can monitor the game server by checking that the process is running and querying it. Should the server go offline LinuxGSM can restart the server and send you an alert. You can use cron jobs to set up monitoring. Command: `./cs2server monitor`

### Configure LinuxGSM

- For details on how to alter LinuxGSM settings, visit [LinuxGSM Config Files page](https://linuxgsm.com/lgsm/cs2server/).

### Documentation

- For detailed documentation visit the [LinuxGSM docs](https://docs.linuxgsm.com/).

### Cronjobs

- To automate LinuxGSM you can set scheduled tasks using cron jobs, to run any command at any given time. You can edit the crontab using the following: `crontab -e`

Recommended cron tasks:

```
*/5 * * * * /home/cs2server/cs2server monitor > /dev/null 2>&1
*/30 * * * * /home/cs2server/cs2server update > /dev/null 2>&1
0 0 * * 0 /home/cs2server/cs2server update-lgsm > /dev/null 2>&1
```

For more detailed and up-to-date information on Counter-Strike 2 game modes, visit the [Valve Developer Community page](https://developer.valvesoftware.com/wiki/Counter-Strike:_Global_Offensive/Game_Modes).

Congratulations! You are now ready to embark on your Counter Strike 2 adventure with your very own dedicated server. Get ready to strategize, compete, and dominate the virtual battlegrounds with your friends and foes. Good luck, and may the best team emerge victorious!

In this article...

- [Software Included](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#software-included)
- [Creating an App using the Control Panel](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#creating-an-app-using-the-control-panel)
- [Creating an App using the API](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#creating-an-app-using-the-api)
- [Getting Started After Deploying Counter Strike 2](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#getting-started-after-deploying-counter-strike-2)
  - [Access Your Server](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#access-your-server)
  - [Initial Configuration](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#initial-configuration)
  - [Counter Strike 2 Configurations](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#counter-strike-2-configurations)
  - [Game Server Configurations](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#game-server-configurations)
  - [Game Modes](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#game-modes)
  - [Invite Players](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#invite-players)
  - [Connect To The Server](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#connect-to-the-server)
  - [OR](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#or)
  - [Managing Your Server](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#managing-your-server)
  - [Running Commands](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#running-commands)
  - [Updating](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#updating)
  - [Debugging](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#debugging)
  - [Logs](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#logs)
  - [Backup](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#backup)
  - [Monitor](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#monitor)
  - [Configure LinuxGSM](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#configure-linuxgsm)
  - [Documentation](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#documentation)
  - [Cronjobs](https://docs.digitalocean.com/products/marketplace/catalog/counter-strike-2/#cronjobs)

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