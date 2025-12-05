---
url: https://developers.elementor.com/recent-deprecations
scraped_at: 2025-10-20T00:33:06.367Z
---

# Recent Deprecations

- Rebecca Markowitz
- July 27, 2025

If you are a developer who extends Elementor please review the below changes to keep your plugin up and running.

## Upcoming Deprecations

|     |     |
| --- | --- |
| **Module / Class Name** | **Action Required** |
| `.elementor-widget-container` | **Action Required:** Remove the CSS class<br>**Benefit:** Performance<br>**What could break:** Bloated DOM; Broken website styling for websites with Optimized DOM experiment activated. <br>**Announcement**: `3.26`<br>**Deletion version:** `3.32` |
| `.elementor-button-wrapper` | **Action Required:** Replace `.elementor-button-wrapper` with `.elementor-button`<br>**Benefit:** Performance<br>**What could break:** Bloated DOM; Broken website styling for websites with Optimized DOM experiment activated.<br>**Announcement:** `3.25`<br>**Deletion version:** `3.32` |
| `$depended_scripts` and `$depended_styles` | **Action Required:** Replace `$depended_scripts` and `$depended_styles` with `get_script_depends() ` and `get_style_depends()`<br>[Developer Docs](https://developers.elementor.com/docs/form-fields/field-dependencies/)<br>**Benefit:** The new methods implement Elementor asset caching<br>**What could break:** When we delete the old properties, form fields dependencies won’t load<br>**Announcement:** `3.28`<br>**Deletion version:** `3.363` |
| `_register_controls()`<br>`_render()`<br>`_content_template()` | **Action Required:** Remove the underscore prefix. [Developer Docs](https://developers.elementor.com/docs/deprecations/simple-example/)<br>**Benefit**: API Consistency<br>**What could break:** Fatal errors<br>**Announcement**: `3.5`<br>**Deletion version:** `3.33` |

## Past Deprecations

|     |     |
| --- | --- |
| **Module / Class Name** | **Action Required** |
| `Waypoints.js<br>` | **Action Required:** Replace with `IntersectionObserver()` function or add the waypoints.js script to your addon<br>**Benefit:** Performance<br>**What could break:** Scrolling to an element<br>**Announcement:** `3.22`<br>**Deletion version**: `3.24` |
| `.elementor-row`<br>`.elementor-column-wrap` | **Action Required:** Remove these CSS classes<br>**Benefit:** Performance<br>**What could break:** Website Styling<br>**Announcement:** `3.0`<br>**Deletion version**: `3.25` |
| `.elementor-hidden-phone` | **Action Required:** Replace `elementor-hidden-phone` with `elementor-hidden-mobile`, or add custom CSS: <br>@media (max-width: 767px) {<br>    .elementor-hidden-phone {<br>        display: none;<br>    }<br>}<br>**Benefit:** Additional breakpoints<br>**What could break:** Mobile Styling<br>**Announcement:** `3.4`<br>**Deletion version**: `3.25` |
| Schemes | **Action Required:** Transition to [Globals](https://developers.elementor.com/docs/deprecations/complex-example/)<br>**Benefit**: Advanced capabilities in Globals (colors and typography)<br>**What could break:** Website Styling<br>**Announcement:** `3.0`<br>**Deletion version**: `3.26` |
| Swiper 5 | **Action Required:** Switch to Swiper 8; replace `swiper-container` with `swiper` ; and `swiper-container-horizontal` to `swiper-horizontal`<br>**Benefit**: Advanced capabilities in carousel-based widgets<br>**What could break**: Broken carousel layouts<br>**Announcement**: `3.23`<br>**Deletion version:** `3.26` |

Additional resources:

- [The Deprecation process](https://developers.elementor.com/docs/deprecations/)
- [Best Practices for Elementor addon developers](https://developers.elementor.com/docs/getting-started/best-practices/)
- [Sign up for Developers Updates & Request Elementor Pro license](https://elementor.com/pages/addon-developers-corner/)

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