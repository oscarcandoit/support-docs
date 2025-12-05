---
url: https://developers.elementor.com/updated-convention-creating-new-widgets-for-improved-performance
scraped_at: 2025-10-20T00:48:12.151Z
---

# v3.0 Updated Convention: Creating New Widgets (For Improved Performance)

- Shilo Eish Yemini
- [June 16, 2020](https://developers.elementor.com/2020/06/16/)
- 18 Comments
- [Performance](https://developers.elementor.com/category/performance/)
- Elementor 3.0

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

As part of our effort to simplify and minimize the markup created by Elementor, we have decided to truncate the prefix we use for any Elementor CSS classes, from `.elementor-` to just `.e-`.

This move is joined by another important step in our journey of performance enhancement – reducing the number of wrapper HTML elements used by our widgets and by the system in general.

## What does it actually mean?

In all of our new widgets, controls, and all-in-all system markup, we will be prefixing all of our classes with `.e-`.

**We will NOT be changing** pre-existing widgets, controls, or any other system elements, in order to allow for backwards compatibility and avoid causing serious problems in existing Elementor websites.

As opposed to the wrapper removal step, this is not a breaking change, so it’s not a big deal – if you see a change in our conventions, we just wanted you to let you know that it’s legit and share with you the reasoning behind it.

## How does this affect me as an Elementor user or extension developer?

First of all, there is no need for you to make any changes to pre-existing widgets or system elements. If you are developing extensions that manipulate existing system elements, controls or widgets, and used the `.elementor-` prefix before – we recommend you to follow this guideline and start using `.e-` instead in your new developments.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Shilo Eish Yemini](https://secure.gravatar.com/avatar/ace896621cb53f807f296aa06adc1784196ad4e1b06ae2489fc17d41d1fbe0e4?s=300&d=mm&r=g)

Shilo Eish Yemini

Shilo is Elementor’s Editor Product Lead. He loves innovative products, pays attention to the small details, and is passionate about solving puzzles.

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