---
url: https://developers.elementor.com/elementor-2-7-moving-sliders-from-slick-to-swiper
scraped_at: 2025-10-20T01:12:50.004Z
---

# Elementor 2.7: Moving Sliders from Slick to Swiper

- Ohad Raz
- [August 19, 2019](https://developers.elementor.com/2019/08/19/)
- 6 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.7

![Library](https://developers.elementor.com/wp-content/uploads/2021/12/library-1024x536.png)

Elementor has been using the [Slick Slider](https://kenwheeler.github.io/slick/) library for various widgets and core functionality since the plugin’s early days. In addition to Slick slider, we also gradually introduced another slider library into Elementor, [Swiper](https://idangero.us/swiper/) Slider. Elementor and Elementor Pro have been using Swiper for several widgets and other core functionality, such as lightbox gallery (browsing through an image gallery in lightbox mode).

#### Why we’re switching

Since we have been using both slider libraries in conjunction for a while, we could compare our experience with each of them in terms of performance, ease of use, and more. Swiper has proved itself to be more flexible, more performant, and more suitable for Elementor users’ needs.

In terms of loading speed and performance, using two different slider libraries simultaneously is inefficient. That is why we have decided to deprecate our usage of Slick slider.

In the upcoming 2.7.0 versions of Elementor and Elementor Pro, the following widgets and features will be using Swiper instead of Slick:

- Slides widget (Elementor Pro)
- Image Carousel widget (Elementor)

#### Repercussions of the switch

We are aware that our formerly Slick-based widgets don’t offer some of the built-in features available in the Slick library, so some users have developed addons that extend existing widgets’ Slick-based functionality to include more options. If these options are based on Slick slider’s API, they will most likely not work anymore starting from Elementor 2.7.0.

If your site does not use any add-ons that extend Slick’s functionality in Elementor’s existing widgets, you would not have to take any action – this switch would be completely transparent to you.

We will still include Slick as part of Elementor’s external libraries for a while in upcoming versions, to maintain compatibility with older versions in cases of incompatibility between the free version of Elementor and Elementor Pro. When we fully deprecate Slick from Elementor, including removing it from the included external libraries, we will publish another official update.

#### Potential Issues and how to address them

There are some potential pitfalls that should be considered for existing websites that use any of the Slick-based widgets listed above. The following paragraphs contain examples of such potential issues.

Once Elementor 2.7.0-beta is released, We encourage you to use and test any effects this change might have on your websites.

##### Analytics – Google Tag Manager and more

If you use Google Tag Manager (GTM),  and you have attached GTM triggers to a Slick-based slider’s slide/click events, these triggers will most likely not work with the new Swiper-based versions of our widgets. Element class names are different, as well as some of the HTML markup of the widget. See the [Swiper API documentation](https://idangero.us/swiper/api/) for information on the library’s methods, element class names and more.

Same goes for any other analytics services – if you have attached any event triggers to Slick-related elements, these would have to be adapted to the new Swiper-based structure.

In order to mitigate this issue, you would have to adjust your analytics platforms’ triggers to work with the new Swiper-based versions of our widgets.

##### Slick-based addons and extensions

If your site has any add-on plugins that add/extend any functionality of Elementor’s Slick-based widgets (as listed above), these add-ons will most likely not work starting from v2.7.0. However, if you or your developers were the ones who coded those Elementor-Slick extensions, we suggest updating those extensions to work with the Swiper library. The vast majority of features which exist in the Slick library also exist in the Swiper library but are probably implemented differently. Check the [Swiper API documentation](https://idangero.us/swiper/api/) for more information on how different slider features are implemented in Swiper.

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