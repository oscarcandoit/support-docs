---
title: "Splunk"
source: "https://docs.virustotal.com/docs/splunk-connector"
scraped_at: "2026-02-08T06:19:25.007Z"
---

This guide provides instructions on how to activate the Splunk connector within VirusTotal. Once activated, VirusTotal reports will display threat intelligence information about IoCs (Indicators of Compromise) sourced from the events found in your Splunk instance.

### Prerequisites[](#prerequisites)

Before you can begin the connector set up, ensure that you have the following prerequisites in place:

1. 

2. 

### Getting the Splunk access token[](#getting-the-splunk-access-token)

Follow these steps to get the Splunk access token:

1. 

2. 

3. 

*

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/splunk-token2_20231005.png)

### Adding the connector[](#adding-the-connector)

Before you can view Splunk events information in VirusTotal reports, you must set up the Splunk connector and provide your access token. Follow these steps:

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-empty_20231005.png)

Here you can perform different actions described in details in the `Manage the connector` section.

1. 

2. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/splunk-step1_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/splunk-step2_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/splunk-done_20231005.png)

Once completed, all members of your group will have access to the Splunk events information in the IoC reports.

### Managing the connector[](#managing-the-connector)

The user who adds the connector and the admins of the group to which it belongs, has the authority to edit or delete the connector.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-contextual-menu_20231004.png)

Additionally, all users within your group can enable or disable the connector, this action affects individually to the user.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-enable_20231005.png)

### Viewing Splunk Information[](#viewing-splunk-information)

Once the Splunk connector is configured, all members of your group will start seeing additional context in the reports.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/splunk-report_20231005.png)

For each IoC, you will receive some information related to the Splunk event, the date host, source and sourcetype.

### Support[](#support)

This connector is officially suported by VirusTotal, please [contact us](https://www.virustotal.com/gui/contact-us/technical-support) if you have any question.

*Updated about 2 months ago