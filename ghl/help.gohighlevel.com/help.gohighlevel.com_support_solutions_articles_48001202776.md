---
url: "https://help.gohighlevel.com/support/solutions/articles/48001202776"
title: " Video Element in HighLevel's Design Editor Email Builder : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001202776#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Email Builder Capabilities](https://help.gohighlevel.com/support/solutions/folders/155000001352)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001202776#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Email Builder Capabilities](https://help.gohighlevel.com/support/solutions/folders/155000001352)
6. Video Element in Email Builder

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# Video Element in Email Builder

Modified on: Fri, 31 Oct, 2025 at 4:22 AM

Embedding videos in emails can be tricky due to limitations in email client support. HighLevel's **Video element** solves this by letting you insert clickable video thumbnails that link to your video content. This article explains how to use the Video element in the Email Builder, including how to choose video types, customize thumbnails, and adjust layout settings for the best presentation.

* * *

**TABLE OF CONTENTS**

- [What Is the Video Element in Email Builder?](https://help.gohighlevel.com/support/solutions/articles/48001202776#What-Is-the-Video-Element-in-Email-Builder?)
- [How to Find the Video Element](https://help.gohighlevel.com/support/solutions/articles/48001202776#How-to-Find-the-Video-Element)
- [Video editor Configurations](https://help.gohighlevel.com/support/solutions/articles/48001202776#Video-editor-Configurations)
- [Related Articles](https://help.gohighlevel.com/support/solutions/articles/48001202776#Related-Articles)

* * *

# **What Is the Video Element in Email Builder?**

The **Video element** in HighLevel’s Email Builder allows you to add a video preview inside your emails. While true video playback isn't supported in email clients, this element creates a clickable thumbnail with a play button that links directly to your video.

```
Note: due to technical limitation of all major email clients, we can not yet embed videos into emails. The Video block simply creates a preview image (using the video's thumbnail image), adds a play button, and then hyperlinks the image to your video URL so when someone clicks the image, they are taken to the video.
```

* * *

## **How to Find the Video Element**

```
Note: The Video element is only available inside the Design Editor and Email Templates within HighLevel’s Email Builder.
```

To locate and use the Video Element:

1. Login to your **sub-account**.

2. Navigate to **Marketing > Emails**.

3. Click on **\+ Create Campaign** and choose **Blank** and then **Design Editor**.

4. or open an existing **Email Template**.

5. On the left-hand side, locate the **Video element** under the Elements section.

6. **Drag and drop** the Video element into your email layout.


![](https://jumpshare.com/v/bRaKnLTHrlbRQ7TOhiVS+/GIF+Recording+2025-07-24+at+12.22.48+AM.gif)

* * *

## **Video editor Configurations**

The Video editor provides following video configurations

**Video Type:**  There are currently 4 options to choose from: YouTube, Vimeo, Wistia, and HTML5. Based on the selected video type, the system will try to fetch the video thumbnail from the video URL and also change the play button styling based on the provider themes (e.g. in case of YouTube, the button will appear with a red background and white play icon).

The link to the thumbnail image will automatically appear in the "Video Thumbnail URL" field.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043053/original/pmIhldlfN5JzLwwEFnb5gejDVQt6RacdZw.png?1727965929)

**Video URL:** Here is where you need to enter the URL of your video

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032578329/original/9Hu32ssUvaGPoirOD3rcNmOJRtGyfjSpyw.jpg?1725961230)

If the preview fails to fetch the thumbnail image from video, it will display a warning (e.g. If you change the video type to Vimeo for a YouTube video url, the editor will try to fetch the thumbnail based on the Vimeo logic, which will not work so it will show you a warning).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155032579468/original/izf8GtpyFyLuEI-ymahOnCNYxjMP8uMxJw.jpg?1725961804)

```
NOTE: The Editor will not clear the previously fetched image if it fails to fetch thumbnail image so if you want to add an image that doesn't have a thumbnail image, you could first add a video that has a thumbnail image you like, then change the video URL and thumbnail image from the first video will remain.
```

**Video Thumbnail URL:** As mentioned above, the editor will try to fetch the default thumbnail image from Video URL based on selected video type and fill this field automatically but you can also provide your own thumbnail image by adding its url.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043990/original/4MdFN1U8MwQmUyaQjZCC47m_1tGVSBdpeQ.png?1727966486)

Use the **Replace** button to upload and provide custom Video thumbnail

Use the **Remove** button to remove the default thumbnail

**Width & Height:** Through these input fields you can control the dimension of your video. If no dimensions are added, then video will take full width and auto height based on image resolution

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043755/original/p0eBTrPq5tm8uZFgcqffKsk8qc1sdSKOJA.png?1727966380)

```
NOTE: By default, the video element will always be aligned on left hand side if you provide custom Height and width. Unlike with images, it is not possible to align them using the Align attribute but you can align it through padding or wrapping them inside a 2 or 3 column layout.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043297/original/HCCEaKCWkXgSbSOTNleAcQkNwSPXqppi7Q.png?1727966091)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034043506/original/3KjF8wBXW79JthmMYEKoZAZ4eAjeAZIG5g.png?1727966217)

**Padding:** You can provide the padding to video element through this field see below image to see it in action.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155034044248/original/I-A7L_GPO82zQ0IAT5MaAnkIJ_Hafo-uUw.png?1727966649)

* * *

## **Related Articles**

- [How to use the Email Builder and its In-line Editor](https://help.gohighlevel.com/en/support/solutions/articles/155000000087)

- [Spacer Element in Email Builder](https://help.gohighlevel.com/en/support/solutions/articles/155000005495)

- [Border Customization: Color, Radius, and Thickness](https://help.gohighlevel.com/en/support/solutions/articles/155000004696)

- [How to send a Regular Email Campaign (Send Now or Schedule)?](https://help.gohighlevel.com/en/support/solutions/articles/48001215263)

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [How to Use Template Library to Create Branded Review Request Emails](https://help.gohighlevel.com/support/solutions/articles/155000006448-how-to-use-template-library-to-create-branded-review-request-emails)
- [Shopping Cart Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006831-shopping-cart-element-in-email-builder)
- [Social Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006829-social-element-in-email-builder)
- [FAQ Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006828-faq-element-in-email-builder)
- [Code Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006827-code-element-in-email-builder)
- [Footer Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006826-footer-element-in-email-builder)

## Related Articles

- [How to use the Email Builder and its In-line Editor](https://help.gohighlevel.com/support/solutions/articles/155000000087-how-to-use-the-email-builder-and-its-in-line-editor)
- [Different elements in email builder](https://help.gohighlevel.com/support/solutions/articles/155000006657-different-elements-in-email-builder)
- [How To Embed External Content On A Dashboard](https://help.gohighlevel.com/support/solutions/articles/155000001627-how-to-embed-external-content-on-a-dashboard)
- [Code Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006827-code-element-in-email-builder)
- [Hosted Video Player For Funnels](https://help.gohighlevel.com/support/solutions/articles/48001224428-hosted-video-player-for-funnels)
- [Social Element in Email Builder](https://help.gohighlevel.com/support/solutions/articles/155000006829-social-element-in-email-builder)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001202776)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001202776-video-element-in-email-builder/hit)