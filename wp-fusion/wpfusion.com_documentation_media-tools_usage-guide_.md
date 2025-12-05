---
url: "https://wpfusion.com/documentation/media-tools/usage-guide/"
title: "Usage Guide | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/media-tools/usage-guide/#content)

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

# Usage Guide

- Published onJuly 14, 2016
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Media Tools](https://wpfusion.com/documentation/#media-tools)
- /
- Usage Guide

### [\#](https://wpfusion.com/documentation/media-tools/usage-guide/\#block-editor) Block editor

To use the Media Tools integration with the block editor, first add a video to your page. The supported video blocks are Video, YouTube, and Vimeo.

[![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-video-block.jpg)](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-video-block.jpg)

After inserting your video URL, click on the video, and expand the WP Fusion panel to access the WP Fusion settings.

[![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-block-controls-844x1024.jpg)](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-block-controls.jpg)

The options are:

- **Start tags:** These tags will be applied to the user as soon as they click the “Play” button.
- **Timecodes:** You can enter one or more timecodes, either as a timecode or a percentage. When the player reaches this point, the selected tags will be applied.
- **End tags:** These tags will be applied to the user once the media file completes playing (reaches 95% progress).

[![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-gutenberg-1024x682.jpg)](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-gutenberg.jpg) WP Fusion’s block editor integration lets you apply tags in your CRM based on engagement with videos on your site.

### [\#](https://wpfusion.com/documentation/media-tools/usage-guide/\#classic-editor) Classic editor

To set up tracking for media content on your site, first click “Add Media” in the WordPress post editor and upload the audio or video file to your site. After the upload is finished, click “Insert Into Post” to add the player to your post.

You can also add embedded media by going to the Insert from URL tab and including a link to a video hosted elsewhere.

After the media is inserted, you’ll see a preview in the post editor. Click once on the preview and click the pencil icon to open up the media details window.

![editor1](https://wpfusion.com/wp-content/uploads/2016/07/editor1-1024x582.jpg)

In the media details window, you’ll see the WP Fusion Media Tracking box appear below the video, with several settings:

- **Apply tags when media started:** These tags will be applied to the user as soon as they click the “Play” button.
- **Apply tags when media completed:** These tags will be applied to the user once the media file completes playing.
- **Apply tags at timecode (timecode):** Enter a timecode at which additional tags (configured in the next field) should be applied. Timecode can either be in seconds (like “45”), or in delineated time notation (like “1:45”, for 1 minute 45 seconds).
- **Apply tags at timecode (tags):** These tags will be applied when the timecode specified in the field above is reached.

Any of these fields can be left blank to disable that specific trigger.

![editor2](https://wpfusion.com/wp-content/uploads/2016/07/editor2-831x1024.jpg)

### [\#](https://wpfusion.com/documentation/media-tools/usage-guide/\#multiple-timecodes) Multiple timecodes

For those with more advanced tracking needs, you can track multiple timecodes by editing the shortcode directly. Switch over to the Text tab in the editor, and you’ll see the embed code for your media, something like:

`{embed wpf_tags_start="93" wpf_tags_complete="118" wpf_timecode="1:20" wpf_tags_timecode="118"] https://www.youtube.com/watch?v=1234567 [/embed]`

Multiple timecodes can be added in the format `wpf_timecode_2="mm:ss"``wpf_tags_timecode_2="123,456"` where the tags for the second property are a comma separated list of tag IDs to be applied (Infusionsoft and Ontraport) or tag names for other CRMs.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

`{embed wpf_timecode="1:20" wpf_tags_timecode="118" wpf_timecode_2="1:40" wpf_tags_timecode_2="119" wpf_timecode_3="2:40" wpf_tags_timecode_3="120"]]https://www.youtube.com/watch?v=1234567[/embed]`

### [\#](https://wpfusion.com/documentation/media-tools/usage-guide/\#spotlightr-formerly-vooplayer) Spotlightr (formerly vooPlayer)

WP Fusion doesn’t support vooPlayer’s “vooPlayer Shortcode” popup, but you can still configure media tracking by editing the shortcode it generates. After insering a video, you’ll see a shortcode like:

`[vooplayer type="video" id="OTU3MzM="]`

You can configure tags to be applied by editing the shortcode attributes. The parameters are:

- **wpf\_tags\_start:** Comma separated list of tags to apply when the video begins to play
- **wpf\_timecode:** A timecode at which to apply specific tags
- **wpf\_tags\_timecode:** The tags to apply at the timecode specified with wpf\_timecode
- **wpf\_tags\_complete:** The tags to apply when the video is finished

For example:

`[vooplayer type="video" id="OTU3MzM=" wpf_tags_start="VooStart" wpf_tags_complete="VooComplete" wpf_timecode="1:20" wpf_tags_timecode="Voo120"]`

### [\#](https://wpfusion.com/documentation/media-tools/usage-guide/\#advanced-iframe-tracking)(Advanced) iFrame tracking

It’s preferable to use an embed shortcode (or the [Elementor](https://wpfusion.com/documentation/media-tools/elementor-integration/) or [Presto Player](https://wpfusion.com/documentation/media-tools/presto-player-integration/) integrations) with the Media Tools addon, since this allows WP Fusion to detect which videos (and which types of videos) are being tracked, and thus the required tracking scripts are only loaded on those specific pages.

But there are some cases where you may want to set up WP Fusion’s media tracking directly on an `<iframe>` embed code.

To do that, first enable the setting **Load Scripts Everywhere** at Settings » WP Fusion » Addons, and then select which players you will be using.

[![](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-settings-panel-1-1024x451.jpg)](https://wpfusion.com/wp-content/uploads/2016/07/media-tools-settings-panel-1.jpg)

This will enqueue WP Fusion’s tracking script, as well as the video player APIs for any selected players, on every page of your site.

Then, you can add data attributes directly to the `<iframe>` of any of the supported players to enable tracking on that player.

For example:

`<iframe id="player_1" data-player_type="vimeo" data-wpf_tags_start="Started Video" data-wpf_tags_complete="Video Complete, Video ID 1 Complete" src="https://player.vimeo.com/video/56282283" width="640" height="480" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`

The parameters are:

- **id:** _(required)_ Every iFrame must have a unique ID to be tracked correctly
- **data-player\_type:** _(required)_ The type of player, either `youtube`, `vimeo`, or `wistia`
- **data-wpf\_tags\_start:** Comma separated list of tags to apply when the video begins to play
- **data-wpf\_timecode:** A timecode at which to apply specific tags
- **data-wpf\_tags\_timecode:** The tags to apply at the timecode specified with wpf\_timecode
- **data-wpf\_tags\_complete:** The tags to apply when the video is finished

You can also use multiple timecodes, following the example documented above.

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

These features require a

### Plus

license of WP Fusion

[View Pricing](https://wpfusion.com/pricing/)

* * *

### On this page

- [Block editor](https://wpfusion.com/documentation/media-tools/usage-guide/#block-editor)
- [Classic editor](https://wpfusion.com/documentation/media-tools/usage-guide/#classic-editor)
- [Multiple timecodes](https://wpfusion.com/documentation/media-tools/usage-guide/#multiple-timecodes)
- [Spotlightr (formerly vooPlayer)](https://wpfusion.com/documentation/media-tools/usage-guide/#spotlightr-formerly-vooplayer)
- [(Advanced) iFrame tracking](https://wpfusion.com/documentation/media-tools/usage-guide/#advanced-iframe-tracking)

### You may also like

[![a person with long hair holds a tablet displaying engage! alongside wordpress insights, featuring an upward arrow and chart. the logo wpfusion appears in the top left corner. the colorful, blurred background adds energy to the advanced video metrics theme.](https://wpfusion.com/wp-content/uploads/2025/02/maxresdefault-7-300x169.jpg)](https://wpfusion.com/videos/tutorials/gather-advanced-video-metrics-with-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Gather Advanced Video Metrics with WordPress](https://wpfusion.com/videos/tutorials/gather-advanced-video-metrics-with-wordpress/)

The WP Fusion media tools addon allows you to engage your users at a higher level. Find out more from Emily!

[![illustration of a person using a laptop and smartphone, with digital media elements like social media icons, a play button, and chat symbols emerging from the screen. a clock and arrows suggest connectivity and interaction, highlighting wordpress integration with audio video analytics to track views & engagement.](https://wpfusion.com/wp-content/uploads/2025/03/Audio-Video-Analytics-in-WordPress-300x158.png)](https://wpfusion.com/tutorials/audio-video-analytics-in-wordpress/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [Audio-Video Analytics in WordPress: How to Track Views & Engagement (Complete Guide)](https://wpfusion.com/tutorials/audio-video-analytics-in-wordpress/)

Tracking audio and video engagement in WordPress is crucial for understanding how users interact with your content. WP Fusion’s Media Tools help you do just that!

### In this chapter

- [Overview](https://wpfusion.com/documentation/media-tools/media-tools-overview/ "Overview")
- [Bunny Stream Integration](https://wpfusion.com/documentation/media-tools/bunny-stream-integration/ "Bunny Stream Integration")
- [Elementor Integration](https://wpfusion.com/documentation/media-tools/elementor-integration/ "Elementor Integration")
- [FV Player Integration](https://wpfusion.com/documentation/media-tools/fv-player-integration/ "FV Player Integration")
- [Presto Player Integration](https://wpfusion.com/documentation/media-tools/presto-player-integration/ "Presto Player Integration")
- [Usage Guide](https://wpfusion.com/documentation/media-tools/usage-guide/ "Usage Guide")
- [Changelog](https://wpfusion.com/documentation/media-tools/media-tools-changelog/ "Changelog")

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