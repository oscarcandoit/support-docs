---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005411"
title: " Prerequisite for Bulk CSV - Basic and Advance CSV : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005411#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
4. [Social Planner](https://help.gohighlevel.com/support/solutions/folders/48000684282)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005411#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Marketing](https://help.gohighlevel.com/support/solutions/48000449565)
   - [Social Planner](https://help.gohighlevel.com/support/solutions/folders/48000684282)
6. Prerequisite for Bulk CSV - Basic and Advance CSV

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

# Prerequisite for Bulk CSV - Basic and Advance CSV

Modified on: Thu, 10 Jul, 2025 at 2:15 PM

Scheduling social media posts in bulk with the help of a CSV file can be the optimal time-saving technique for scheduling the social journey in advance. CSV is a “comma-separated values” file that allows you to save your information in a structured way.  Social Planner supports both format .csv and .xlxs.

Social Planner provides two different types of CSV Upload options for bulk scheduling

1. Basic CSV \- Basic CSV supports Date, Content, OG Meta URL, Image(s) Link, Video(s) Link, GIF

[BASIC Download Sample CSV](https://storage.googleapis.com/highlevel-staging.appspot.com/social-media-posting/CSV%20Import%20Sample%20-%20CSV%20Import%20Sample.csv)

2. Advance CSV \- Say goodbye to limitations, and hello to the most comprehensive CSV importer in the market. Unlocks full capabilities, including: Platform-specific post types (Post, Story, Reel, Shorts), Watermark, tags, categories, follow-up comment , Google Business Profile (post types, call-to-action, events, offers), YouTube (title, privacy, video type), TikTok, LinkedIn PDFs, Pinterest board selection, and more

[Advance Download Sample CSV](https://storage.cloud.google.com/highlevel-staging.appspot.com/social-media-posting/advance-sample.csv)

#### (Note - if the title says Advance CSV means that field is only useful in Advance CSV, if it mentions both means that field is applicable for Advance and Basic CSV)

**Planner follows a set of prerequisites -**

* * *

1\. Date and Time Column: \[Both\]

In this column, you can type in the date and time when you want to share your post. In this column, you must format the date exactly how you see it at the top of the column:

- Use the 24-hour format. Example: 2025-08-25 21:30

-  If the date column is empty, it will be considered in the Draft.

- The Column Header of this column must be exactly as mentioned in the Sample CSV as shown in the video, it should be as follows: postAtSpecificTime YYYY-MM-DD HH:mm, YYYY-MM-DD HH:mm:ss, YYYY/MM/DD HH:mm:ss, YYYY/MM/DD HH:mm, M/D/YYYY H:mm:ss, and M/D/YYYY H:mm

- It is highly recommended to have all the scheduled times be at least 10 minutes after the time when you are uploading the CSV.  For example, if the scheduled date/time for the post is  2023-10-14 15:00. This means that the CSV should be  uploaded no later than October 14th, 2023 at 2:50PM.


Please Note:

The schedule time formatting works in 24-hour format, not 12-hour. If you have difficulties with this, you can use [this tool](https://www.ontheclock.com/convert-military-24-hour-time.aspx) for assistance.

### 2\. Content Column \[Both\]

In this column, you can type in or paste what you want to appear as the caption of your post, you can add Hashtags too. The Column header of this column should be written as follows: content

The caption must abide by the social media post character limit rules you are scheduling it for.

### 3\. Preview link:\[Both\]

In this column, you can type the URL or paste the URL that you want to appear as the link preview of your post. The Column header of this column must be written as follows: link (OGmetaUrl)

Please Note:

If the other media rows like images, GIF or Video are filled in, they will override the link(OGmetaUrl). It will be appended to content column as a link.

### 4\. Image URL \[Both\]

In this column, you can paste what you want to appear as the image of your post. The column header should be written as follows: imageUrls . You can add multiple image URLs with commas separated. The image link must be in proper formats like png or jpeg/jpg and other aspects for image supported based on the social media platform. The maximum number of images supported is 10 image(s).

Please Note:

Learn more about image dimension and size for different social media platform [here](https://help.gohighlevel.com/support/solutions/articles/48001210585-what-s-ideal-image-and-video-file-size-and-dimensions-in-social-plan).This same article applies for videos and gifs.

### 5\. GIF URL \[Both\]

In this column, you can paste what you want to appear as the GIF of your post. The Column header of this column should be written as follows: gifUrl

Please Note:

You must not fill in any other media-related column if you added a link [here](https://help.gohighlevel.com/support/solutions/articles/48001210585-what-s-ideal-image-and-video-file-size-and-dimensions-in-social-plan). (eg. link, imageUrls, videoUrls).

### 6\. Video URL \[Both\]

In this column, you can paste what you want to appear as the video of your post. The Column header of this column must be written as follows: videoUrls . You can add multiple Video URLs here comma separated. The maximum number of videos supported for one post is 10 videos at a time.

Please Note: You must not fill in any other media-related column if you added a link [here](https://help.gohighlevel.com/support/solutions/articles/48001210585-what-s-ideal-image-and-video-file-size-and-dimensions-in-social-plan).

7\. Media Optimization  \[Advance\]

In this column, you can add True or False to optimise your media means that the errors for dimensions or format will get resolved automatically. Example if the Instagram story requires .Mov file but you uploaded . Mp4 file than it will optimise and convert it to .mov file. The Column header of this column must be written as follows: **mediaOptimization (true/false)**

8\. Watermark  \[Advance\]

In this column, you can add True or False to add your watermark to your media assets. The Column header of this column must be written as follows: **applyWatermark (true/false)**

9\. Tags\[Advance\]

In this column, you can add multiple tags to your posts to organise them in order. These tags if not added earlier, will create new entry in the filters and dropdowns. Tags needs to be added with comma separated to be considered. The Column header of this column must be written as follows: **tags (comma-separated)**

10\. Category\[Advance\]

In this column, you can add a category to your posts to organise them in order. These category if not added earlier, will create new entry in the filters and dropdowns. The Column header of this column must be written as follows: **Category**

11\. Follow Up Comment\[Advance\]

In this column, you can add a followup comment which is first comment on your posts for engagement. Followup comments is support for Facebook Pages, Instagram Business Account, Linkedin Profiles and Pages, Youtube Video and Short and HighLevel Communities. The Column header of this column must be written as follows: followUpComment

12\. Facebook - type (post/story/reel) \[Advance\]

In this column, you can add Facebook option/ type of post, story or reel.  The Column header of this column must be written as follows: type (post/story/reel)

13\. Instagram - type (post/story/reel)   \[Advance\]

In this column, you can add option of Instagram option/ type of post, story or reel.  The Column header of this column must be written as follows: type (post/story/reel)

14\. Linkedin - pdfTitle and postAsPdf (true/false) \[Advance\]

In this column, you can add Linkedin PDF title if you wish to post the PDF format in Linkedin and if you want to post as pdf and not images you add true or false. The Column header of this column must be written as follows: pdfTitle and postAsPdf (true/false)

15\. Google Business Profile \[Advance\]

In these column, you can add Google Business Profile options like call\_to\_action/event/offer and according to what you select you can add the other columns. The Column header of this column must be written as follows: eventType (call\_to\_action/event/offer), actionType (none/order/book/shop/learn\_more/call/sign\_up), title, offerTitle, startDate (YYYY-MM-DD HH:mm:ss), endDate (YYYY-MM-DD HH:mm:ss), termsConditions, couponCode, redeemOnlineUrl, actionUrl

|     |     |     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | Button-actionType | Action URL | Title | Offer title | Start Date | End Date | Terms - termsConditions | coupon code | Redeem online url |
| Call to Action | yes | yes | no | no | no | no | no | no | no |
| Event | yes | yes | yes | no | yes | yes | no | no | no |
| Offer | no | no | no | yes | yes | yes | yes | yes | yes |

.

16\. Youtube \[Advance\]

In these column, you can add Youtube options as title, privacy labels like private, public, unlisted and type like video or shorts. The Column header of this column must be written as follows: title, privacyLevel (private/public/unlisted) and type (video/short)

17\. Tiktok  \[Advance\]

In these column, you can add tiktok options as privacy level, promote other brand, enable comment, duet, stitch, video disclosure, promote your brand options. The Column header of this column must be written as follows: privacyLevel(everyone/friends/only\_me), promoteOtherBrand(true/false), enableComment(true/false), enableDuet(true/false), enableStitch(true/false), videoDisclosure(true/false), promoteYourBrand (true/false)

18\. Community  \[Advance\]

In these column, you can add Community option of adding title and notifyAllGroupMembers (true/false). The Column header of this column must be written as follows: title, notifyAllGroupMembers (true/false)

19\. Pinterest \[Advance\]

In these column, you can add Pinterest option of adding title and link. The Column header of this column must be written as follows: title, link

```
Tip: You can set the Default Pinterest Board within the Social Planner Settings
```

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

- [@Mention or Tag Profile in Posts from Social Planner](https://help.gohighlevel.com/support/solutions/articles/155000002679--mention-or-tag-profile-in-posts-from-social-planner)
- [Add Location Tagging to Social Post](https://help.gohighlevel.com/support/solutions/articles/155000002665-add-location-tagging-to-social-post)
- [Add Pinterest Pins in Social Planner](https://help.gohighlevel.com/support/solutions/articles/155000002753-add-pinterest-pins-in-social-planner)
- [Add Watermark to every image you post on Social Media](https://help.gohighlevel.com/support/solutions/articles/155000001461-add-watermark-to-every-image-you-post-on-social-media)
- [Schedule Posts using RSS URL](https://help.gohighlevel.com/support/solutions/articles/155000001052-schedule-posts-using-rss-url)
- [Clear LinkedIn Link Preview Cache Using LI Post Inspector](https://help.gohighlevel.com/support/solutions/articles/48001160721-clear-linkedin-link-preview-cache-using-li-post-inspector)

## Related Articles

- [Social Planner - Advanced CSV for Bulk Scheduling](https://help.gohighlevel.com/support/solutions/articles/155000005542-social-planner-advanced-csv-for-bulk-scheduling)
- [Best Time to Post Feature in Social Planner](https://help.gohighlevel.com/support/solutions/articles/155000005654-best-time-to-post-feature-in-social-planner)
- [Blogs - Bulk Import Using CSV](https://help.gohighlevel.com/support/solutions/articles/155000006464-blogs-bulk-import-using-csv)
- [Contacts - Export as CSV Upgrade](https://help.gohighlevel.com/support/solutions/articles/48001238482-contacts-export-as-csv-upgrade)
- [Bulk Eject Sub-Accounts](https://help.gohighlevel.com/support/solutions/articles/155000006342-bulk-eject-sub-accounts)
- [Sharing Social Planner Content Across Sub-Accounts via a Snapshot](https://help.gohighlevel.com/support/solutions/articles/48001223768-sharing-social-planner-content-across-sub-accounts-via-a-snapshot)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005411)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005411-prerequisite-for-bulk-csv-basic-and-advance-csv/hit)