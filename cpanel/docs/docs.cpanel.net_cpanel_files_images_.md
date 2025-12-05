---
url: "https://docs.cpanel.net/cpanel/files/images/"
title: "Images | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/cpanel/files/images/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel](https://docs.cpanel.net/cpanel/)
3. [Files](https://docs.cpanel.net/cpanel/files/)
4. Images


[images](https://docs.cpanel.net/tags/images/) [files](https://docs.cpanel.net/tags/files/) [cpanelui](https://docs.cpanel.net/tags/cpanelui/)

#### Table of Contents

[Overview](https://docs.cpanel.net/cpanel/files/images/#overview)

* * *

[Thumbnailer](https://docs.cpanel.net/cpanel/files/images/#thumbnailer)

* * *

[Scaler](https://docs.cpanel.net/cpanel/files/images/#scaler)

* * *

[Converter](https://docs.cpanel.net/cpanel/files/images/#converter)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/cpanel/files/images/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/cpanel/files/images/#overview)

* * *

[Thumbnailer](https://docs.cpanel.net/cpanel/files/images/#thumbnailer)

* * *

[Scaler](https://docs.cpanel.net/cpanel/files/images/#scaler)

* * *

[Converter](https://docs.cpanel.net/cpanel/files/images/#converter)

* * *

## Images

![](https://docs.cpanel.net/img/cpanel-icons/images.svg)

_Valid for versions 128 through the latest version_

#### Version:

#### [86](https://docs.cpanel.net/cpanel/files/images/86/)

#### [128](https://docs.cpanel.net/cpanel/files/images/)

Last modified: _2025 January 10_

* * *

Looking for this interface?

Note:

Your [hosting provider](https://docs.cpanel.net/knowledge-base/cpanel-product/how-to-identify-your-hosting-provider/) can enable or disable this interface in WHM's [_Feature Manager_](https://docs.cpanel.net/whm/packages/feature-manager) interface ( _WHM >> Home >> Packages >> Feature Manager_).

## Overview

The _Images_ interface allows you to modify and manage images that you saved to your account. This feature includes the following tools:

- _Thumbnailer_ — Use this tool to create thumbnails from images in a directory and store them in a `thumbnails` subdirectory.
- _Scaler_ — Use this tool to resize individual images.
- _Converter_ — Use this tool to convert one image file type to another file type and change the file type of all images in a directory. For example, you can change `.jpg` files to `.png` files.

Important:

To modify an image in the _Images_ interface, you **must** first upload it through one of cPanel’s file management interfaces:

- The [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager/) interface ( _cPanel » Home » Files » File Manager_).
- The [_Web Disk_](https://docs.cpanel.net/cpanel/files/web-disk) interface ( _cPanel » Home » Files » Web Disk_).
- The [_FTP Accounts_](https://docs.cpanel.net/cpanel/files/ftp-accounts) interface ( _cPanel » Home » Files » FTP Accounts_).
- The [_Git™ Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git™ Version Control_).

## Thumbnailer

Click _Thumbnailer_ to create smaller versions of images (thumbnails). For example, create thumbnails to conserve bandwidth on a photo page, where visitors can view smaller previews of your images before you access the larger ones.

The _Thumbnailer_ tool creates a new `thumbnails` subdirectory within the selected folder. The system also adds the `tn_` prefix to thumbnail images’ filenames. For example, the system creates the `tn_image.png` thumbnail image for the `image.png` file.

To convert a directory of images to thumbnails, perform the following steps:

1. Locate the folder that contains the images that you wish to convert.





Note:




You **must** select an entire folder to convert to a thumbnail. The _Thumbnailer_ tool **cannot** convert individual images.


2. Click the folder icon (![ImagesFolder](https://docs.cpanel.net/img/imagesfolder.png)) or the folder’s name to navigate the file system.
3. Click _Thumbnail_ to select the folder.
4. In the _Scale Percent_ text boxes, enter the percentage by which you wish to shrink your images.
5. Select the _Keep Aspect Ratio_ checkbox to ensure that the image’s dimensions remain proportional, to prevent distortion of the image.
6. Click _Reset Dimensions_ to reset the _Scale Percent_ values to their defaults.
7. Click _Thumbnail Images_. After the _Thumbnailer_ converts your images into thumbnails, the following message will appear:


```perl
The system successfully converted your images into thumbnail images and stored them in the following location: /home/user/.cpanel/thumbnails/tn_*
```

8. Click the thumbnail path to open the directory in cPanel’s [_File Manager_](https://docs.cpanel.net/cpanel/files/file-manager) interface ( _cPanel » Home » Files » File Manager_).

## Scaler

Click _Scaler_ to enlarge or shrink an image.

To resize an image, perform the following steps:

1. Navigate to the folder that contains the image to resize.
2. Locate the image that you wish to resize and click _Scale_.
3. To set the new image size, perform either of the following two steps:
   - Use the _New Dimensions_ text boxes to define the desired image size in pixels.
   - Use the _Percent_ text boxes to define the percentage by which you wish to resize your images.
4. Select the _Keep the current aspect ratio_ checkbox to ensure that the image’s dimensions remain proportional, to prevent distortion of the image.
5. Click _Reset Dimensions_ to reset the _Percent_ values to the default.
6. Select the _Retain a copy of the old image as_ checkbox to store a copy of the original image. Specify the file path to save the copy to in the text box.
7. Click _Scale Image_. A success message will appear.

## Converter

Click _Converter_ to convert any of the supported file types from one type to another.

To change an image’s file type, perform the following steps:

1. Select the folder or file that you wish to convert.
2. Click the folder icon (![ImagesFolder](https://docs.cpanel.net/img/imagesfolder.png)) or the folder’s name to navigate the file system.
3. Click _Convert_ to select the folder or file.
4. From the menu, select the file format to which to convert your image or images. You may select any of the following file formats:
   - `.PNG`
   - `.JPG`
   - `.GIF`
   - `.BMP`
   - `.WEBP`
5. Click _Convert_. A success message will appear. The system saves the new file in the same directory as the original file.

#### Additional Documentation

* * *

- [Anonymous FTP](https://docs.cpanel.net/cpanel/files/anonymous-ftp/)
- [Backup Wizard](https://docs.cpanel.net/cpanel/files/backup-wizard/)
- [Directory Privacy](https://docs.cpanel.net/cpanel/files/directory-privacy/)
- [File Manager](https://docs.cpanel.net/cpanel/files/file-manager/)
- [HTML Editor (Beta)](https://docs.cpanel.net/cpanel/files/html-editor/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×