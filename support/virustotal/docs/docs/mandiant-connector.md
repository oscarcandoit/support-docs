---
title: "Mandiant Advantage - Threat Intelligence"
source: "https://docs.virustotal.com/docs/mandiant-connector"
scraped_at: "2026-02-08T06:19:24.921Z"
---

This guide provides instructions on how to activate the Mandiant connector within VirusTotal. Once activated, VirusTotal reports will display threat intelligence information about IoCs (Indicators of Compromise) sourced from the Mandiant Advantage platform.

### Getting the Mandiant credentials[](#getting-the-mandiant-credentials)

To use this connector, you must have access to the [Mandiant Advantage - Threat Intelligence](https://advantage.mandiant.com/) platform. You will need the following credentials provided by Mandiant:

- Key ID

- Secret ID

You can locate these credentials in the Mandiant Advantage - Threat Intelligence platform by following these steps:

1. 

2. 

3. 

*

### Adding the connector[](#adding-the-connector)

Before you can view Mandiant&#x27;s threat intelligence information in VirusTotal reports, you must set up the Mandiant connector and provide your credentials. Follow these steps:

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-empty_20231005.png)

Here you can perform different actions described in details in the `Manage the connector` section.

1. 

2. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/mandiant-step1_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/mandiant-step2_20231005.png)

1. 

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/mandiant-done_20231005.png)

Once completed, all members of your group will have access to Mandiant information in the IoC reports.

### Managing the connector[](#managing-the-connector)

The user who adds the connector and the admins of the group to which it belongs, has the authority to edit or delete the connector.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-contextual-menu_20231004.png)

Additionally, all users within your group can enable or disable the connector, this action affects individually to the user.

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/all-enable_20231005.png)

### Viewing Mandiant Information[](#viewing-mandiant-information)

Once the Mandiant connector is configured, all members of your group will start seeing additional context in the reports. Here are some examples to explore:

- [3891a99f05bb166044e7ec11ed04f651bf2a0c48a76691258546b8dbc5620c58](https://www.virustotal.com/gui/file/3891a99f05bb166044e7ec11ed04f651bf2a0c48a76691258546b8dbc5620c58)

- [77e82c3d5fea369f6598339dcd97b73f670ff0ad373bf7fc3a2d8586f58d9d32](https://www.virustotal.com/gui/file/77e82c3d5fea369f6598339dcd97b73f670ff0ad373bf7fc3a2d8586f58d9d32)

- [mobile-sessionid.customize-identity.info](https://www.virustotal.com/gui/domain/mobile-sessionid.customize-identity.info)

![](https://storage.googleapis.com/vtdocresources/guides/integrations/connectors/__img__/mandiant-report_20231005.png)

For each IoC, you will receive, at a minimum, the Mandiant IC Score. Additionally, Mandiant may provide information about Malware Families or Threat Actors related to the IoC, which will be displayed as clickable tags that allow you to pivot to the Mandiant platform for more details.

### Support[](#support)

This connector is officially suported by VirusTotal, please [contact us](https://www.virustotal.com/gui/contact-us/technical-support) if you have any question.

*Updated about 2 months ago