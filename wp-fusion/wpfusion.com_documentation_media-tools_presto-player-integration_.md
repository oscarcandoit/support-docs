---
url: "https://wpfusion.com/documentation/media-tools/presto-player-integration/"
title: "Presto Player Integration | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/media-tools/presto-player-integration/#content)

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

# Presto Player Integration

- Published onApril 5, 2021
- Last updated on August 5, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Media Tools](https://wpfusion.com/documentation/#media-tools)
- /
- Presto Player Integration

### [\#](https://wpfusion.com/documentation/media-tools/presto-player-integration/\#overview) Overview

WP Fusion’s [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/) includes an integration with [Presto Player](https://prestoplayer.com/), which allows you to apply tags [in your CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when:

- A video is played
- A video is completed
- One or more video timecodes are reached

### [\#](https://wpfusion.com/documentation/media-tools/presto-player-integration/\#setup) Setup

First create a new Presto Player video, either via the Media Hub, or by adding a Presto Player block to a page.

Enter the URL to your video, and once the preview appears, click on your video to access the settings panel.

The WP Fusion settings will appear on the right alongside the other video settings.

[![](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-block-UI-970x1024.jpg)](https://wpfusion.com/wp-content/uploads/2022/03/presto-player-block-UI.jpg)

The options are :

- **Start tags:** These tags will be applied when the video is first played.
- **Timecode:** You can add one or more timecode-based triggers. For each timecode you can either enter a time (like `1:35`) or a percentage (like `35%`). The selected tags will be applied when the video progresses to that timecode or percentage.
- **End tags:** These tags will be applied when the video is complete (playback reaches 95%).

### [\#](https://wpfusion.com/documentation/media-tools/presto-player-integration/\#setup-shortcode-method) Setup – Shortcode Method

**Note:** This is the older method of configuring Presto Player with WP Fusion and is more difficult to work with than the visual editor.

First create your Presto Player video, and the from the Media Hub page, copy the shortcode.

[![](https://wpfusion.com/wp-content/uploads/2021/04/presto-player-shortcode-1024x321.jpg)](https://wpfusion.com/wp-content/uploads/2021/04/presto-player-shortcode.jpg)

Then paste the shortcode into the post or page where you’d like your video displayed.

#### [\#](https://wpfusion.com/documentation/media-tools/presto-player-integration/\#shortcode-parameters) Shortcode parameters

WP Fusion’s media engagement tracking with Presto Player is handled via shortcode attributes added to the `[presto_player]` shortcode.

Each parameter can accept any number of tags (comma-separated), and you can use tag names or tag IDs interchangeably.

The shortcode parameters are:

- **wpf\_tags\_start**: These tags will be applied when the video is first played
- **wpf\_timecode**: This is a specific timecode at which you’d like to apply tags, either in seconds, mm:ss, or a percentage
- **wpf\_tags\_timecode**: These tags will be applied at the timecode specified by `wpf_timecode`
- **wpf\_tags\_complete:** These tags will be applied when the video is complete (when play percentage is greater than 95%)

For example:

`[presto_player id=8912 wpf_tags_start="Video A Play, Media Engagement" wpf_timecode="1:30" wpf_tags_timecode="Watched Half - Video A" wpf_tags_complete="Video A Complete"]`

That shortcode would apply the tags _Video A Play_ and _Media Engagement_ when the video is first played, _Watched Half – Video A_ after 90 seconds, and then _Video A Complete_ once the progress had reached 95%.

Or, using percents:

`[presto_player id=8912 wpf_timecode="50%" wpf_tags_timecode="Watched Half - Video A"]`

This shortcode will apply the tag _Watched Half – Video A_ when 50% of the video has been watched.

#### [\#](https://wpfusion.com/documentation/media-tools/presto-player-integration/\#multiple-timecodes) Multiple Timecodes

Multiple timecodes can be added in the format `wpf_timecode_2="mm:ss"``wpf_tags_timecode_2="123,456"` where the tags for the second property are a comma separated list of tags to be applied.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

`[presto_player id=8912 wpf_timecode="1:20" wpf_tags_timecode="Min Twenty" wpf_timecode_2="1:40" wpf_tags_timecode_2="Min Forty" wpf_timecode_3="2:40" wpf_tags_timecode_3="Two Mins Forty"]`

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

- [Overview](https://wpfusion.com/documentation/media-tools/presto-player-integration/#overview)
- [Setup](https://wpfusion.com/documentation/media-tools/presto-player-integration/#setup)
- [Setup - Shortcode Method](https://wpfusion.com/documentation/media-tools/presto-player-integration/#setup-shortcode-method)
- [Shortcode parameters](https://wpfusion.com/documentation/media-tools/presto-player-integration/#shortcode-parameters)
- [Multiple Timecodes](https://wpfusion.com/documentation/media-tools/presto-player-integration/#multiple-timecodes)

### You may also like

[![a person with long hair and a surprised expression points to a tablet screen displaying the text watch the whole video! the wpfusion logo is visible above, hinting at seamless integration with presto player. background includes string lights and a poster.](https://wpfusion.com/wp-content/uploads/2025/02/Screenshot-2025-02-04-at-15.12.34-300x163.png)](https://wpfusion.com/videos/tutorials/lifterlms-require-video-completion-with-presto-player/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [LifterLMS Require Video Completion with Presto Player](https://wpfusion.com/videos/tutorials/lifterlms-require-video-completion-with-presto-player/)

Make sure your students are completing all of their lesson content by creating video completion requirements. Emily shows us how to navigate these successful strategies in this tutorial!

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