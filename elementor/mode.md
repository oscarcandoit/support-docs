---
url: https://developers.elementor.com/background-video-in-mobile-mode
scraped_at: 2025-10-20T01:12:44.474Z
---

# Elementor 2.7: Background Video in Mobile Mode

- Ohad Raz
- [August 18, 2019](https://developers.elementor.com/2019/08/18/)
- 34 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.7

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

Elementor has enabled adding videos as a background for sections for a long time now.

In desktop mode, this worked great. In mobile mode, since mobile browsers blocked the autoplay feature for embedded videos, we hid the video backgrounds simply by giving the video container a CSS attribute of `display: none`.

This worked great, up until a few months ago, when several mobile browsers started to loosen their policy on blocking video autoplay. Unfortunately, this caused hidden videos to auto-play sound. Since we hide the video display itself, this was confusing for Elementor users and especially for mobile visitors of Elementor-based websites that used the background video feature.

Some developers and advanced users took advantage of this policy change in their websites by overriding our display CSS attribute with a `display: block` value, so their embedded videos are displayed in mobile as well.

Starting from Elementor 2.7.0, such manipulation on the video container will not work. Due to this policy change by a variety of mobile browsers, we decided to change the way we remove background videos from mobile mode. Instead of simply hiding the video content with `display: none`, **we will be removing the video content completely** in mobile devices.

Since we learned that many users want the option to show the background video in mobile as well, we will also add an option (a toggle in the settings panel) to enable showing the background video in mobile mode. However, it is important to note that since not all mobile browsers allow video autoplay, video section background might not work on all mobile devices (in blocking browsers, users will probably see a black screen).

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Ohad Raz](https://secure.gravatar.com/avatar/4457665d392755ad51548d0bb0b6e22a5c4fcefaf7b10d581189314ce6b0ea89?s=300&d=mm&r=g)

Ohad Raz

[Hosted with](https://elementor.com/hosting/)

Text

Bigger text

Line height

Text align

Readable font

Visual

Contrast

Grayscale

Hide images

Pause animations

Orientation

Screen reader

Highlight links

Reading mask

Outline focus

Sitemap

Page structure