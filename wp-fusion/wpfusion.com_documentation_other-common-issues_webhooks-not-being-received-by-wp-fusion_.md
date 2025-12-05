---
url: "https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/"
title: "Webhooks not being received by WP Fusion | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#content)

[![WP Fusion Logo](https://wpfusion.com/wp-content/uploads/2019/08/logo-top-svg.svg)](https://wpfusion.com/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

- [Features](https://wpfusion.com/features/)
  - [Features](https://wpfusion.com/features/)
  - [About Us](https://wpfusion.com/about-us/)
  - [Plugin Integrations](https://wpfusion.com/documentation/#integrations)
  - [Addons](https://wpfusion.com/documentation/#addons)
  - [Enhanced Ecommerce](https://wpfusion.com/features/enhanced-ecommerce/)
  - [Event Tracking](https://wpfusion.com/features/event-tracking/)
  - [Recipes and Ideas](https://wpfusion.com/recipes-and-ideas/)
- [Pricing](https://wpfusion.com/pricing/)
  - [Pricing](https://wpfusion.com/pricing/)
  - [Lifetime Pricing](https://wpfusion.com/pricing-lifetime/)
  - [Free Download](https://wpfusion.com/free-download/)
- [Get Help](https://wpfusion.com/documentation/)
  - [Documentation](https://wpfusion.com/documentation/)
  - [Free Consultation](https://wpfusion.com/free-consultation/)
  - [Recommended Tools](https://wpfusion.com/recommends/)
  - [Videos and Demos](https://wpfusion.com/videos/)
  - [Feature Requests](https://wpfusion.com/feature-requests/)
  - [Roadmap](https://wpfusion.com/roadmap/)
  - [Contact Us](https://wpfusion.com/contact/)
  - [Find an Expert](https://wpfusion.com/experts/)
- [Blog](https://wpfusion.com/blog/)
- [Account](https://wpfusion.com/login/)

# Webhooks not being received by WP Fusion

- Published onMarch 14, 2018
- Last updated on July 18, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Common Issues](https://wpfusion.com/documentation/#other-common-issues)
- /
- Webhooks not being received by WP Fusion

There are some situations in which WP Fusion doesn’t receive webhooks properly. Here are some troubleshooting steps if you’re having difficulties receiving incoming webhooks.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#check-the-logs) Check the logs

All webhooks received by WP Fusion will be recorded to the [activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/), so checking the logs is a good place to start.

[![](https://wpfusion.com/wp-content/uploads/2018/03/logs-successful-webhook-1024x404.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/logs-successful-webhook-scaled.jpg) The logs show an incoming “add” webhook and a user successfully imported by WP Fusion.

Whenever a webhook is received the logs will show a message _Received X webhook for contact…_ followed by the contact ID, and the data and/or tags that were loaded.

If there are any errors with the imported data (invalid email address, missing fields, invalid role) they will also be recorded.

If nothing is showing in the logs, then it’s possible your webhooks are being blocked. In that case, refer to the following sections:

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#use-the-built-in-testing-tool) Use the built-in testing tool

WP Fusion now includes a built-in utility for testing your site’s ability to receive incoming webhooks.

![](https://wpfusion.com/wp-content/uploads/2018/03/test-webhooks-btn-1024x308.jpg)

Click the _Test Webhooks_ button and a couple of seconds later you’ll see the response. If you get a green _Success_ message you should be good to go.

**Note:** Because the testing tool sends a test webhook from this site (wpfusion.com), it’s possible for webhooks to appear to be working, but still be blocked when they’re sent from your CRM. Thus the testing tool is a good indication of whether or not your site can receive webhooks, but isn’t 100% reliable.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#security-plugins) Security Plugins

Security software running on your site or server can block incoming webhooks. This is the most common issue people have with webhooks. If the testing tool returns a 403 or _Unauthorized_ message then this is likely the case.

First try temporarily disabling any security or anti-spam plugins to see if the webhooks begin working. If that fixes it, you’ll need to tweak your security settings to allow incoming POST data from your CRM’s IP address.

If you view the access logs in your security plugin, you should see the incoming webhook requests that are getting blocked, and this will show the IP address of the originating server. If you whitelist this IP address it will allow the webhooks to go through.

If that doesn’t work, it’s also possible that your hosting company is blocking the webhooks for security reasons. You can contact your host, or look at your host’s security logs, to see if any traffic is being blocked. If so, they should be able to create an exception for you by modifying their security rules.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#wordfence) WordFence

We’ve observed some success by putting WordFence into “Learning Mode” while testing incoming webhooks. This trains WordFence to recognize the incoming web traffic as legitimate.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#ithemes-security) iThemes Security

iThemes Security can block incoming webhooks for a variety of reasons. We’ve had success by disabling the **Enable HackRepair.com’s ban list feature** option in the iThemes settings.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#cleantalk) CleanTalk

The [CleanTalk anti-spam plugin](https://wordpress.org/plugins/cleantalk-spam-protect/) often interferes with webhooks being received by WP Fusion. Because CleanTalk uses a shared IP blacklist, it’s also possible for webhooks to work at first, but mysteriously stop working later. As a troubleshooting step it’s always best to start by disabling CleanTalk.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#cloudflare) Cloudflare

If you’re using Cloudflare, make sure that you create a firewall exception for incoming traffic from your CRM’s IP address. You can also create a firewall rule to bypass the firewall for all requests that contain `wpf_action` in the URL.

If you’re not sure if Cloudflare is blocking webhooks or not, you can also [temporarily pause Cloudflare on a domain](https://support.cloudflare.com/hc/en-us/articles/203118044-Gathering-information-for-troubleshooting-sites#h_8654c523-e31e-4f40-a3c7-0674336a2753).

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#siteground) SiteGround

If you’re hosting with SiteGround, SiteGround’s built in bot protection sometimes will begin blocking incoming webhooks by sending them to a captcha page. In that case webhook status will show as successful (200 status code) in your CRM since it does land on the captcha page, but because it can’t solve the captcha, the webhook never reaches your site.

It’s not possible to whitelist your CRM’s IP address with SiteGround’s bot protection service, the only solution is to request SiteGround support to completely disable bot protection on your account. To protect your site from bots we recommend [Cloudflare](https://www.cloudflare.com/), it rarely has a problem with webhooks.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#known-ip-addresses) Known IP Addresses

These are the webhook IP addresses of some of the CRMs we support. If your site is blocking incoming webhooks, then a good start would be to whitelist their IP address.

This list is based on our own tests and there may be additional IP addresses that aren’t listed here. Some platforms add new IPs and/or change them over time, so we can’t provide any guarantees as to the accuracy of this list.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#activecampaign) ActiveCampaign

ActiveCampaign uses Amazon Web Services so their IP addresses change over time. These are some of the ActiveCampaign webhook IPs we have observed.

18.213.77.190

23.20.225.34

23.22.14.42

34.192.144.26

34.226.103.188

34.205.102.133

34.233.54.78

34.233.239.23

34.233.145.248

52.45.183.46

52.55.227.5

52.7.228.32

52.86.138.218

54.225.1.90

173.193.9.\[0-24\]

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#agilecrm) AgileCRM

107.178.\[200-255\].\[0-255\]

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#convertkit) ConvertKit

18.218.244.8

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#drip) Drip

54.81.10.128

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#infusionsoft) Infusionsoft

208.76.24.\[0-255\]

34.145.76.18

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#intercom) Intercom

4.231.68.152

34.197.76.213

35.171.78.91

35.169.138.21

52.70.27.159

52.44.63.161

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#kartra) Kartra

54.84.187.89

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#mailchimp) MailChimp

104.196.165.118

35.190.191.63

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#mailerlite) MailerLite

35.246.139.232

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#ontraport) Ontraport

209.170.211.168

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#salesforce) Salesforce

13.110.6.8

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#brevo) Brevo

185.107.232.169

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#zoho) Zoho

31.186.243.98

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#double-check-your-urls) Double check your URLs

When you add the webhook URL to your site to your CRM, make sure the base URL matches your site’s home page exactly.

- If your site is at **https://** mysite.com, then sending a webhook to **http://** mysite.com won’t work.
- If your site is at **https://www.** mysite.com, then sending a webhook to **https://** mysite.com won’t work.

If you’re not sure you can visit the home page of your site and copy / paste the URL out of your browser into your CRM.

[![The base URL for webhooks](https://wpfusion.com/wp-content/uploads/2018/03/webhooks-base-url-1024x518.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/webhooks-base-url.jpg)

You can also copy the URL out of the **Webhook Base URL** field in the WP Fusion settings.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#making-sure-the-automation-is-working-correctly) Making sure the automation is working correctly

If you’re sending the webhook as part of a complex automation in your CRM, it might help to make sure the webhook is actually being sent in the first place. You can use a third party service for this, like [https://webhook.site/](https://webhook.site/).

This will give you a unique URL, like https://webhook.site/#/bd662d92-fb16-4431-ae79-f566943b0f9e, which you can paste into the URL field for the webhook in your CRM.

Send a contact through the automation or rule, and you should see a message appear on webhook.site showing the incoming data. If this works then you know the webhooks are being sent correctly.

If no message appears then your automation may have an issue that’s preventing the webhook from being sent.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#manual-testing) Manual testing

You can also test a webhook manually by visiting the webhook URL in your browser. This will be the same URL you used when setting up the webhook in your CRM, and you can select a contact ID to use for testing. For example

`http://mysite.com/?wpf_action=update&access_key=ACCESSKEY&contact_id=CID`

Replace ACCESSKEY with your access key from the settings, and CID with a contact ID you’d like to use to test. You should see a success message showing that the user was updated. If there were any errors, they’ll be reported there as well.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#the-async-method) The Async Method

If you’re sending many webhooks simultaneously (100+) it’s possible your web server is unable to process them in time and runs out of available resources. To prevent this, you can try WP Fusion’s (experimental) asynchronous method for processing webhooks.

To enable this, append &async=true to the end of your webhook URL. For example:

`https://mysite.com/?wpf_action=update&access_key=ACCESSKEY&contact_id=CID&async=true`

This will tell WP Fusion to put the incoming webhooks in a queue, and work through them over a period of time, taking into account your server’s available resources.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#the-async-endpoint-advanced) The Async Endpoint (Advanced)

For even better webhook performance, you can bypass WordPress entirely by sending the webhooks to the `api.php` file in the WP Fusion plugin folder.

This may require changing the file permissions on your server and/or adjusting settings in security plugins. For example with Cloudways you need to enable “Direct File Access” on the application, otherwise you’ll get a 403 error trying to access the file.

The API endpoint can be found at `/wp-content/plugins/wp-fusion/api.php`, so your webhook URLs will need to be adjusted accordingly. For example

`https://mysite.com/wp-content/plugins/wp-fusion/api.php?wpf_action=update&access_key=ACCESSKEY&contact_id=CID`

Otherwise the syntax and URL parameter options are the same.

The `api.php` endpoint is tested and works with

- ActiveCampaign
- Infusionsoft
- Drip
- Ontraport
- Any CRM that can send a `&contact_id=X` URL parameter, with the contact ID in the URL

You should confirm that the file is executable by testing it first with a real contact ID. If it’s working, you’ll see a success message like this:

[![](https://wpfusion.com/wp-content/uploads/2018/03/async-webhook-working-1024x549.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/async-webhook-working.jpg)

When the webhook is received it will be saved to the async import queue. WP Fusion then sets a cron job to check this queue for any pending actions.

You can set the cron interval at Settings » WP Fusion » Advanced » Cron Interval:

[![](https://wpfusion.com/wp-content/uploads/2018/03/webhooks-cron-interval-1024x360.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/webhooks-cron-interval.jpg)

The cron job will check the async webhooks queue at the specified interval, and if any pending actions are found, they will be processed at that time.

For more information on the performance with using the async endpoint, check out [this blog post](https://wpfusion.com/plugin-updates/all-i-want-for-christmas-is-faster-webhooks/).

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#using-a-third-party-webhook-manager) Using a third party webhook manager

There are sometimes cases where you just can’t get webhooks to work reliably— either your host has blocked your CRM’s IP address and can’t unblock it, or the volume of webhooks is causing site instability.

In that case, one potential workaround is to use a 3rd party integration tool to give you more control over your webhooks. For example Zapier, or Integromat.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#setup-in-integromat) Setup in Integromat

[Integromat](https://wpfusion.com/go/integromat) has a free plan which allows for 1000 “Operations” per month, so we’ll use that for this example.

To start, create an Integromat account, and add a new Scenario.

[![](https://wpfusion.com/wp-content/uploads/2018/03/integromat-scenarios-1024x375.jpeg)](https://wpfusion.com/wp-content/uploads/2018/03/integromat-scenarios.jpeg)

Add a new “Module” and select your CRM as the source. In this example we’ll use ActiveCampaign.

[![](https://wpfusion.com/wp-content/uploads/2018/03/integromat-crm-modules-1024x832.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/integromat-crm-modules.jpg)

For the action, choose **Watch Contacts**, and select the criteria for when a contact should trigger the webhook.

[![](https://wpfusion.com/wp-content/uploads/2018/03/integromat-webhooks-1-1024x731.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/integromat-webhooks-1.jpg)

Next, add a new **HTTP** module, and connect it to the ActiveCampaign module. Enter the URL to your site following the examples in [the webhooks documentation](https://wpfusion.com/documentation/#webhooks) for your CRM.

[![](https://wpfusion.com/wp-content/uploads/2018/03/integromat-http-module.jpg)](https://wpfusion.com/wp-content/uploads/2018/03/integromat-http-module.jpg)

Under Query String, add a new parameter with **Name:**`contact_id`, and **Value:**`ID`. The `ID` should represent the ID of the contact that was just updated (the parameter name may vary depending on your connected CRM).

Now when the contact is created, updated or tagged (depending on your trigger criteria) in your connected CRM, Integromat will pass on the contact’s ID to WP Fusion, which will trigger the webhook action specified by the `wpf_action=` parameter in the webhook URL.

Because Integromat’s IP addresses are different than your CRM, this is one potential way of getting around firewalls or security rules. It’s also possible using Integromat to create more specific webhook criteria than are normally available with your CRM alone, which could be useful if your site is being slowed down by too many webhooks.

### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#webhook-performance) Webhook performance

How fast WP Fusion processes webhooks will depend a lot on your server’s speed and available resources, as well as the responsiveness of your CRM’s API. The number of “linked” courses or memberships can also affect how fast the webhooks are processed.

Here’s an example of the different webhook methods and the time they took to complete on a WP Engine membership site connected to ActiveCampaign:

- `?wpf_action=add`: 5.37 seconds (including generating a password and syncing it back to AC)
- `?wpf_action=update`: 3.84 seconds
- `?wpf_action=update_tags`: 3.06 seconds
- `?wpf_action=add&async=true`: 2.06 seconds (including generating a password and syncing it back to AC)
- `/wp-content/wp-fusion/api.php?wpf_action=add` 0.23 seconds (see [this blog post](https://wpfusion.com/plugin-updates/all-i-want-for-christmas-is-faster-webhooks/#test-4-everything-but-the-kitchen-sink))

If you have issues with webhooks not processing quickly, try using `update_tags` instead of `update`, or using the `async` method.

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#performance-when-updating-tags) Performance when updating tags

With some CRMs, WP Fusion has the ability to read updated tags directly out of the webhook payload, eliminating the need for an extra API call. With these CRMs, the fastest webhook endpoint will always be `wpf_action=update_tags`, since the tags can be stored directly to the database when the webhook is received.

If you’re experiencing performance issues with one of these CRMs while updating tags, try switching to the `update_tags` endpoint:

- ActiveCampaign
- ConvertFox
- Drip
- Email Octopus
- Emercury
- FluentCRM
- Groundhogg
- Mautic
- MooSend
- Omnisend
- Pipedrive

#### [\#](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/\#webhook-throttling) Webhook throttling

Most platforms are smart enough not to send a webhook back to WP Fusion as a result of something that was just updated over the API.

However, some (like Gist) don’t have this option— and this can result in a scenario where a checkout or other action in WordPress triggers many simultaneous webhooks back to your site.

This can slow down your site, and also has the potential to overwrite tags that were about to be applied, or custom fields that hadn’t yet finished syncing.

One way to get around that is to “lock” a user so that incoming webhooks are ignored for a short period of time.

This code runs whenever WP Fusion applies a tag in your CRM, it then tells WP Fusion to ignore incoming webhooks for that user for the next minute.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Check the logs](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#check-the-logs)
- [Use the built-in testing tool](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#use-the-built-in-testing-tool)
- [Security Plugins](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#security-plugins)
- [WordFence](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#wordfence)
- [iThemes Security](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#ithemes-security)
- [CleanTalk](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#cleantalk)
- [Cloudflare](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#cloudflare)
- [SiteGround](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#siteground)
- [Known IP Addresses](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#known-ip-addresses)
- [ActiveCampaign](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#activecampaign)
- [AgileCRM](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#agilecrm)
- [ConvertKit](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#convertkit)
- [Drip](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#drip)
- [Infusionsoft](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#infusionsoft)
- [Intercom](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#intercom)
- [Kartra](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#kartra)
- [MailChimp](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#mailchimp)
- [MailerLite](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#mailerlite)
- [Ontraport](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#ontraport)
- [Salesforce](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#salesforce)
- [Brevo](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#brevo)
- [Zoho](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#zoho)
- [Double check your URLs](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#double-check-your-urls)
- [Making sure the automation is working correctly](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#making-sure-the-automation-is-working-correctly)
- [Manual testing](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#manual-testing)
- [The Async Method](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-method)
- [The Async Endpoint (Advanced)](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#the-async-endpoint-advanced)
- [Using a third party webhook manager](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#using-a-third-party-webhook-manager)
- [Setup in Integromat](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#setup-in-integromat)
- [Webhook performance](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#webhook-performance)
- [Performance when updating tags](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#performance-when-updating-tags)
- [Webhook throttling](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/#webhook-throttling)

### In this chapter

- [Batch Export Not Detecting All Users](https://wpfusion.com/documentation/other-common-issues/batch-export-not-detecting-all-users/ "Batch Export Not Detecting All Users")
- [Settings Page Not Saving Fully](https://wpfusion.com/documentation/other-common-issues/settings-page-not-saving-fully/ "Settings Page Not Saving Fully")
- [Webhooks not being received by WP Fusion](https://wpfusion.com/documentation/other-common-issues/webhooks-not-being-received-by-wp-fusion/ "Webhooks not being received by WP Fusion")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting/ "WooCommerce Troubleshooting")
- [WooCommerce Troubleshooting](https://wpfusion.com/documentation/other-common-issues/woocommerce-troubleshooting-2/ "WooCommerce Troubleshooting")

MarkCreated with Sketch.

#### WP Fusion

[Home](https://wpfusion.com/)

[Features](https://wpfusion.com/features/)

[Pricing](https://wpfusion.com/pricing/)

[Testimonials](https://wpfusion.com/testimonials/)

[Affiliates](https://wpfusion.com/affiliate-registration/)

[Try Demo](https://wpfusion.com/demo-signup/)

#### Learn

[Blog](https://wpfusion.com/blog/)

[Getting Started](https://wpfusion.com/documentation/)

[Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/)

[Videos and Demos](https://wpfusion.com/videos/)

[Supported CRMs](https://wpfusion.com/documentation/faq/crm-compatibility-table/)

[Plugin Integrations](https://wpfusion.com/documentation/#integrations)

#### Support

[Contact Support](https://wpfusion.com/contact/)

[Documentation](https://wpfusion.com/documentation/)

[Frequently Asked Questions](https://wpfusion.com/documentation/)

[Developers](https://wpfusion.com/documentation/#developer-guides)

[Changelog](https://wpfusion.com/documentation/faq/changelog/)

#### Company

[About Us](https://wpfusion.com/about-us/)

[Contact](https://wpfusion.com/contact/)

[Brand Assets](https://wpfusion.com/brand-assets/)

[Terms and Conditions](https://wpfusion.com/terms-conditions/)

[Privacy Policy](https://wpfusion.com/privacy-policy/)

[Information Security Policy](https://wpfusion.com/information-security-policy/)

[![Very Good Plugins LLC Logo](https://wpfusion.com/wp-content/uploads/2019/08/vgp-logo.png)](https://verygoodplugins.com/)

Copyright © 2025 Very Good Plugins

[Facebook-f](https://www.facebook.com/groups/wpfusion/)[Twitter](https://twitter.com/wpfusion)