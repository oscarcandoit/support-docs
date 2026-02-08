---
title: "MISP"
source: "https://docs.virustotal.com/docs/misp-connector"
scraped_at: "2026-02-08T06:19:24.903Z"
---

This guide provides instructions on how to activate the MISP connector within VirusTotal. Once activated, VirusTotal reports will display threat intelligence information about IoCs (Indicators of Compromise) sourced from the events found in your configured MISP instance.

### Prerequisites[](#prerequisites)

Before you can begin the connector set up, ensure that you have the following prerequisites in place:

1. 

2. 

### Getting the MISP API key[](#getting-the-misp-api-key)

Follow these steps to get the MISP API key:

1. 

2. 

3. 

4. 

*

### Adding the connector[](#adding-the-connector)

Before you can view MISP events information in VirusTotal reports, you must set up the MISP connector and provide your API key. Follow these steps:

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-empty_20231005.png)

Here you can perform different actions described in details in the `Manage the connector` section.

1. 

2. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/misp-step1_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/misp-step2_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/mandiant-done_20231005.png)

Once completed, all members of your group will have access to the MISP information in the IoC reports.

### Managing the connector[](#managing-the-connector)

The user who adds the connector and the admins of the group to which it belongs, has the authority to edit or delete the connector.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-contextual-menu_20231004.png)

Additionally, all users within your group can enable or disable the connector, this action affects individually to the user.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-enable_20231005.png)

### Viewing Mandiant Information[](#viewing-mandiant-information)

Once the MISP connector is configured, all members of your group will start seeing additional context in the reports.

For each IoC, you will receive, the MISP events ids and descriptions that contains the IoC, and the tags and the severity of each event.

### Support[](#support)

This connector is officially suported by VirusTotal, please [contact us](https://www.virustotal.com/gui/contact-us/technical-support) if you have any question.

*Updated about 2 months ago