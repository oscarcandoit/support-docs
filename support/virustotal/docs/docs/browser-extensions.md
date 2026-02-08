---
title: "Browser Extensions"
source: "https://docs.virustotal.com/docs/browser-extensions"
scraped_at: "2026-02-08T06:19:24.172Z"
---

Imagine you log  into your Gmail account and find a suspicious email from your bank. The email informs you about an unauthorized access to your account and asks you to follow a link and provide your credentials to view the account access log. Wouldn&#x27;t it be great if you could simply right-click on the link and check it against VirusTotal in order to understand whether it is legit or report a phishing site? Wouldn&#x27;t it be great if you could do this just with that right-click, without having to navigate to VirusTotal and refer to the URL tab? This is what VirusTotal&#x27;s browser extensions allow you to do.

[VT4Browsers - Google Chrome, Mozilla Firefox & Microsoft Edge Browser Extension](#vt4browsers)

## VT4Browsers[](#vt4browsers)

### Google Chrome, Mozilla Firefox & Microsoft Edge Browser Extension[](#google-chrome-mozilla-firefox--microsoft-edge-browser-extension)

Check links, files and interesting items while navigating with VirusTotal&#x27;s free and easy service.

With VT4Browsers you will be able to use VirusTotal to analyze files automatically. Also, since [VT4Browsers 4.0](/docs/vt4browsers), you can identify IoCs (hashes, domains, IPs and URLs) in websites of your choice and incorporate VirusTotal reputation and threat context in a single pane of glass fashion.

Feel free to try VT4Browsers:

### Download and install[](#download-and-install)

You can download and install the extension in Google&#x27;s Chrome Web Store:

[https://chrome.google.com/webstore/detail/efbjojhplkelaegfbieplglfidafgoka](https://chrome.google.com/webstore/detail/efbjojhplkelaegfbieplglfidafgoka)

Firefox users can install it through the Mozilla Add-on service:

[https://addons.mozilla.org/en-US/firefox/addon/vt4browsers/](https://addons.mozilla.org/en-US/firefox/addon/vt4browsers/) 

Microsoft Edge users can install it through the Edge Add-ons service:

[https://microsoftedge.microsoft.com/addons/detail/vt4browsers/feklilkmifhginhfoogmgelcopaplodb](https://microsoftedge.microsoft.com/addons/detail/vt4browsers/feklilkmifhginhfoogmgelcopaplodb) 

### Scan suspicious links[](#scan-suspicious-links)

Imagine you log into your Gmail account and find a suspicious email from your bank. The email is informing you about an unauthorized access to your account and is asking you to follow a link and provide your credentials to view the account access log.

Since you are savvy, you know that this email is probably a phishing scam. Even though you know that this is a scam, you are committed to helping others, so you right click on the suspicious link and select the Scan selected link option from the context menu.

*

This will open a new tab in the same browser window. This tab will show the report for the requested URL scan. Note that the scanning process will also download the file/site of the target link, so do not forget to click on the View downloaded file analysis link.

### Scan downloads before storing them[](#scan-downloads-before-storing-them)

Let us suppose your good friend John Doe has sent you an email with a slide presentation. You know that very often these slides contain exploit code that will compromise your computer. When you click on the slide presentation in your webmail, a download dialog appears.  You&#x27;re a cautious user, so you decide to first scan the file with VirusTotal.  You’ve considered the fact that the the file will be shared with VirusTotal partners and premium customers, and are comfortable that the file content is appropriate for sharing.

![](https://files.readme.io/2343a65c89b9253bf059023cd89fcfa01a12396143a1218dea264d19ccba12c3-vt4b_download_popup_20260107.png)

Once you have checked the file, you will decide whether or not to download it to your computer.  To access the file report you must click on the link displayed in the VirusTotal balloon.

#### Customize the extensions options to your preferences[](#customize-the-extensions-options-to-your-preferences)

VT4Browsers is customizable so that you can decide what is sent to VirusTotal and how it&#x27;s sent. The default settings are to send files that don&#x27;t include documents and send anonymous passive DNS data.

![](https://files.readme.io/5b8e9b123236ef9265f8f8c7b379d6041f6f648f09c318a6d7bef90f3e1c731b-vt4b_initial_20261207.png)

If you prefer to have more control on what is sent, you can activate a prompt so that VT4Browsers asks your on each download if you want to send that specific download to VirusTotal.

You can also decide if you want to send Documents to VirusTotal. This is important because you should not send documents with sensitive information to VirusTotal.

Other option is to pause downloads when sending to VirusTotal. This option will tell the browser to pause any download while it&#x27;s being sent to VirusTotal so that you can see the report before downloading the file to your computer. Please note that if you have this option activated, you will have to resume the download if you wish to continue with it or to cancel the download if you decide not to download it.

Last option is to send anonymous passive DNS data, which will allow to collect information about domains anonymously while you navigate through the Internet.

### Include VirusTotal information while navigating[](#include-virustotal-information-while-navigating)

The second settings tab contains the options for the VT AUGMENT widget integration:

![VT4Browsers resume](https://files.readme.io/56a4e9061cfa8420fd699beae4d60b047c31257db31f08920987f6c86e0f4fc5-vt4b_augment_settings_20260107.png)

The **highlight** feature identifies IoCs and adds a VirusTotal icon next to each IoC. When the icon is clicked an API call is performed to embed the IoC detection ratio and display the [VT AUGMENT widget](https://blog.virustotal.com/2021/05/compliant-easy-and-actionable.html) as a side panel. **API quota is only consumed when you click on an IoC icon.**

![VT4Browsers resume](https://storage.googleapis.com/vtdocresources/guides/tools/vt4browsers_highlight_20230928.png)

For each IoC identified in a site, the **enrichment** feature automatically queries the VT API and embeds the IoC’s security vendors detection ratio/score next to the IoC. Clicking on the VirusTotal icon or detection ratio next to each IoC will then display the [VT AUGMENT widget](https://blog.virustotal.com/2021/05/compliant-easy-and-actionable.html) as a side panel. **This setting can generate API lookup spikes and is only recommended for premium API keys.**

![VT4Browsers resume](https://storage.googleapis.com/vtdocresources/guides/tools/vt4browsers_enrich_20230928.png)

### Search for a file or URL report, a particular comment, or a VirusTotal Community user[](#search-for-a-file-or-url-report-a-particular-comment-or-a-virustotal-community-user)

VT4Browsers&#x27; right click menu allows you to query VirusTotal&#x27;s database directly for particular file/url reports, comment tags or VirusTotal Community users. When the search is for file or URL reports, the box accepts MD5, SHA1 and SHA256 hashes.

*Updated about 1 month ago