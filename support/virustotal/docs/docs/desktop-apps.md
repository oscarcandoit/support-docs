---
title: "Desktop Apps"
source: "https://docs.virustotal.com/docs/desktop-apps"
scraped_at: "2026-02-08T06:19:25.132Z"
---

VirusTotal also offers several client-side tools to help users more seamlessly interact with the VirusTotal service. There are flavors of these tools for the major operating systems, refer to the section that best suits you.

[Windows](#windows-uploader)

[Mac OS X](#mac-os-x-uploader)

[Linux](#linux-uploader)

[3rd party uploaders](#3rd-party-uploaders) 

# Windows Uploader[](#windows-uploader)

## DISCONTINUED SUPPORT For Windows uploader:[](#discontinued-support-for-windows-uploader)

As of 2017 we are discontinuing any updates to  the official windows uploader(Please see the [VirusTotalUploader](https://github.com/SamuelTulach/VirusTotalUploader/releases) for an alternative, 3rd party open source uploader)

It&#x27;s a simple Microsoft Windows Desktop application that makes the interaction with VirusTotal as easy as a right-click. No technical background is required. [Download the App here](https://www.virustotal.com/static/bin/vtuploader2.2.exe) and get started straight away.

### Sending files to VirusTotal[](#sending-files-to-virustotal)

With the VirusTotal Uploader this task is easy. After you have downloaded and installed the uploader, just right-click on the file you wish to upload and select the VirusTotal option from the *Send To* context menu:

*

You may also run the VirusTotal Uploader (by clicking on its desktop shortcut icon, for example) and click on the Select file(s) and upload button:

![VTUploader](https://storage.googleapis.com/vtdocresources/guides/tools/vtuploader-use-2.png)

Even easier, just select the files you want to upload and drag them to VirusTotal Uploader&#x27;s window.

Note that you can also use VirusTotal uploader from the command line. You just have to provide one or more files as arguments:

C:\path\to\vt\uploader\VirusTotalUpload2.exe file_to_upload.exe*

### Scanning running processes[](#scanning-running-processes)

Some malware samples keep running in the system as ordinary processes. This is what the antivirus industry calls active malware. The VirusTotal Uploader includes a feature to help users identify active malware: the *Upload process executable* button. When this button is clicked, the VirusTotal Uploader will try to find and read the process&#x27;s image file and send it to VirusTotal for analysis.

*

### Fetching and scanning online files[](#fetching-and-scanning-online-files)

Another handy option will have VirusTotal fetch and scan an online file, with no need for you to download it first. Type in the URL, or right-click it and choose "Copy link location" to cut and paste it, and then click the Get and upload button*. The file will be downloaded but not saved to your hard drive (by default). You will get the usual list of results and can then decide whether you want the download.

*

Since the vast majority of malware infections start with a web download or email attachment, we believe the Get and upload* option can be very useful.

*

The VirusTotal uploader can also be configured to download the files to a temporary folder and remove them later, or to store them in a specific location by clicking on the Options* button.

# Mac OS X Uploader [](#mac-os-x-uploader)

This Apple OS X desktop application makes the interaction with VirusTotal easy: just drag and drop files to the application to scan them. No technical background is needed. [Download the app here](https://www.virustotal.com/static/bin/VirusTotalUploader_1.3.dmg) and get started straight away.

### Scanning files[](#scanning-files)

With the Uploader, you can scan files in several ways:

- Drag and drop files onto the application to scan them.

- Select files to scan from the  the *File* menu.

- Right click or control-click on a file, click *Open With*, then select the VirusTotal Uploader app.

For example, drag and drop a file onto the application window:

*

# Linux Uploader[](#linux-uploader)

While we have not built a devoted Linux Uploader per-se, the Mac OS X uploader core can be compiled for your distribution, since it makes use of Qt it can act as cross-platform. You may clone the project at [https://github.com/VirusTotal/qt-virustotal-uploader](https://github.com/VirusTotal/qt-virustotal-uploader) and build it for your platform. 

# 3rd Party uploaders[](#3rd-party-uploaders)

- [Winja](https://www.phrozen.io/downloads/)

- [sigcheck](https://docs.microsoft.com/en-us/sysinternals/downloads/sigcheck)

- [VirusTotalUploader](https://github.com/SamuelTulach/VirusTotalUploader/releases) by Samuel Tulach

- [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer)

- [VirusTotal-macOS](https://github.com/Jerry23011/VirusTotal-macOS/releases)

*Updated about 2 months ago