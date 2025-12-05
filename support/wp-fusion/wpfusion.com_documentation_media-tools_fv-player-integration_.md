---
url: "https://wpfusion.com/documentation/media-tools/fv-player-integration/"
title: "FV Player Integration | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/media-tools/fv-player-integration/#content)

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

# FV Player Integration

- Published onMarch 12, 2024
- Last updated on March 12, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Media Tools](https://wpfusion.com/documentation/#media-tools)
- /
- FV Player Integration

### [\#](https://wpfusion.com/documentation/media-tools/fv-player-integration/\#overview) Overview

WP Fusion’s [Media Tools addon](https://wpfusion.com/documentation/media-tools/media-tools-overview/) includes an integration with [FV Player](https://wordpress.org/plugins/fv-wordpress-flowplayer/), which allows you to apply tags [in your CRM or email marketing platform](https://wpfusion.com/documentation/faq/crm-compatibility-table/) when:

- A video is played
- A video is completed
- One or more video timecodes are reached

### [\#](https://wpfusion.com/documentation/media-tools/fv-player-integration/\#setup) Setup

First create a new FV Player video and copy the video shortcode.

[![](https://wpfusion.com/wp-content/uploads/2024/03/fv-player-copy-shortcode-1024x299.jpg)](https://wpfusion.com/wp-content/uploads/2024/03/fv-player-copy-shortcode.jpg)

Then paste the shortcode into the post or page where you’d like your video displayed.

#### [\#](https://wpfusion.com/documentation/media-tools/fv-player-integration/\#shortcode-parameters) Shortcode parameters

WP Fusion’s media engagement tracking with Presto Player is handled via shortcode attributes added to the `[fvplayer]` shortcode.

Each parameter can accept any number of tags (comma-separated), and you can use tag names or tag IDs interchangeably.

The shortcode parameters are:

- **wpf\_tags\_start**: These tags will be applied when the video is first played
- **wpf\_timecode**: This is a specific timecode at which you’d like to apply tags, either in seconds, mm:ss, or a percentage
- **wpf\_tags\_timecode**: These tags will be applied at the timecode specified by `wpf_timecode`
- **wpf\_tags\_complete:** These tags will be applied when the video is complete (when play percentage is greater than 95%)

For example:

`[fvplayer id=8912 wpf_tags_start="Video A Play, Media Engagement" wpf_timecode="1:30" wpf_tags_timecode="Watched Half - Video A" wpf_tags_complete="Video A Complete"]`

That shortcode would apply the tags _Video A Play_ and _Media Engagement_ when the video is first played, _Watched Half – Video A_ after 90 seconds, and then _Video A Complete_ once the progress had reached 95%.

Or, using percents:

`[fvplayer id=8912 wpf_timecode="50%" wpf_tags_timecode="Video A - 50%"]`

This shortcode will apply the tag _Watched Half – Video A_ when 50% of the video has been watched.

#### [\#](https://wpfusion.com/documentation/media-tools/fv-player-integration/\#multiple-timecodes) Multiple Timecodes

Multiple timecodes can be added in the format `wpf_timecode_2="mm:ss"``wpf_tags_timecode_2="123,456"` where the tags for the second property are a comma separated list of tags to be applied.

For example, to apply tags at 1:20, 1:40, and 2:40, your shortcode would look something like the following:

`[fvplayer id=8912 wpf_timecode="1:20" wpf_tags_timecode="Min Twenty" wpf_timecode_2="1:40" wpf_tags_timecode_2="Min Forty" wpf_timecode_3="2:40" wpf_tags_timecode_3="Two Mins Forty"]`

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

- [Overview](https://wpfusion.com/documentation/media-tools/fv-player-integration/#overview)
- [Setup](https://wpfusion.com/documentation/media-tools/fv-player-integration/#setup)
- [Shortcode parameters](https://wpfusion.com/documentation/media-tools/fv-player-integration/#shortcode-parameters)
- [Multiple Timecodes](https://wpfusion.com/documentation/media-tools/fv-player-integration/#multiple-timecodes)

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