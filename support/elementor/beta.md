---
url: https://developers.elementor.com/elementor-3-25-beta
scraped_at: 2025-10-20T00:51:07.149Z
---

# Elementor 3.25 Beta

- Aviv Umflat
- [October 14, 2024](https://developers.elementor.com/2024/10/14/)
- 0 Comments
- [Beta Versions](https://developers.elementor.com/category/beta-versions/)
- Elementor 3.25

![Elementor 3.25 Beta](https://developers.elementor.com/wp-content/uploads/2024/10/elementor-3-25-beta-1024x538.png)

Hey Beta Testers!

We’re excited to announce that Elementor 3.25 Beta is now live! This release marks an important milestone in optimizing Elementor’s performance, continuing our focus on reducing page load times, improving CSS handling, and enhancing both the user and visitor experience. We’ve introduced key improvements that reduce the complexity of your website’s code, streamline search functionality, and offer native CSS solutions for smoother scrolling and better performance.

Make an impact by testing Elementor 3.25 beta and sharing your impressions on the latest additions, including:

- Improved Performance: Continuous CSS Optimization
- From AnchorJS to Native CSS: New Anchor Offset
- \[Pro\] Search Widget Update: Pagination for Live Results

Looking forward to hearing your thoughts and feedback on this update!

## Improved Performance: Continuous CSS Optimization

![Speed Improvements](https://developers.elementor.com/wp-content/uploads/2024/10/elementor-3-25-performance-1024x538.png)

In the previous version, Elementor 3.24, we introduced a major improvement to Conditional CSS Loading, reducing the amount of unused CSS loaded on your websites. This optimization focused on loading only the styles necessary for the specific widgets used on a page, reducing the CSS size by up to 668kb.

With Elementor 3.25, we’ve taken this feature even further, introducing additional improvements to reduce the CSS footprint of Elementor pages.

### New CSS Enhancements

- **Zero CSS Weight for the Elementor Pro plugin:** Elementor Pro now starts with zero CSS by default, meaning that no styles are loaded unless they are needed on the page. This approach drastically reduces the CSS size of your website, making it faster and more efficient.
- **WooCommerce Widget Styles:** Previously, when using WooCommerce widgets, styles were loaded for all 32 widgets, even if only one was being used. In Elementor 3.25, these styles now load conditionally, saving up to 197kb of CSS, significantly improving the performance of WooCommerce-powered websites.
- **Elementor Widget Styles:** We’re advancing our efforts to conditionally load widget styles with Elementor 3.25. This update now loads styles individually for 6 Theme Elements widgets, 3 Carousel widgets, and 2 Form widgets. Instead of loading an entire group of styles at once, each widget’s styles are now loaded separately, only when that specific widget is used.
- **Global Styles:** Elementor has also optimized the way Global Styles are loaded. These styles now load conditionally, saving up to **65kb** of CSS per page, contributing to faster loading times.

### Create Fast-Loading Websites

These improvements ensure that Elementor websites load only the CSS they need, reducing the overall page size and improving performance metrics.

By optimizing the way CSS is loaded, we’re making Elementor sites faster and more competitive in terms of SEO and user experience; Faster page load times contribute to better search engine rankings, as performance is a critical factor in how search engines like Google evaluate websites. Moreover, with less unused CSS and faster interactivity provide a smoother, more enjoyable experience for visitors, which can lead to higher engagement, lower bounce rates, and better overall conversion rates.

## From AnchorJS to Native CSS: New Anchor Offset

![Anchor Offset](https://developers.elementor.com/wp-content/uploads/2024/10/elementor-3-25-anchor-offset-1024x538.png)

So far we used JavaScript (JS) to create smooth scrolling effects, and while JS is effective, it has its drawbacks, including additional performance overhead and potential inconsistencies in behavior across devices. In Elementor 3.25, we’ve replaced the AnchorJS library with a native CSS solution, enabling smooth scrolling to be handled natively within the browser and ensuring faster, smoother, and more efficient scrolling.

### \[Pro\] New Anchor Offset Control

The transition to CSS allowed us to give you more control over how anchor links behave on your page, by introducing the new Anchor Offset control. One common issue with anchor links is that they tend to scroll to a position underneath sticky headers, hiding content. With the new Anchor Offset, anchor links can be set to scroll to the desired and correct position, ensuring all content is visible.

### Performance and User Gains

- **Enhanced Visitor Experience:** Anchor links now scroll precisely to the desired location, preventing issues where content was hidden behind sticky headers, making navigation clearer and more intuitive.
- **Cross-Device Consistency:** Native CSS ensures that smooth scrolling works consistently across browsers and devices without the potential quirks of JS-based solutions.
- **Performance Boost:** By eliminating JS from the scrolling process, we’ve reduced the load on your website’s resources and the rendering time, resulting in improved performance.

### How to Test It

Check Anchor Link Functionality

1. Create a new page with a top container that includes links.
2. Create corresponding sections below the main section, ensuring you connect the links in the top container to the sections, thus creating anchor links.
3. Ensure that the smooth scroll to the anchor works as expected.

Check the New Anchor Offset Control

1. Based on the layout you created earlier, go to the top container and set it to “Sticky.”
2. Under the sticky control, navigate to the Anchor Offset control and set the desired offset.
3. Check the functionality of the anchor links with the sticky container.
4. Validate that the anchor links stop at the desired offset you set earlier.
5. Ensure everything works as expected in the editor and on the front end.

## \[Pro\] Search Widget Update: Pagination for Live Results

![Pagination in live search results](https://developers.elementor.com/wp-content/uploads/2024/10/elementor-3-25-pagination-for-live-results-1024x538.png)

Searching for content on your site is a crucial part of the visitor experience, and with Elementor 3.25, we’ve made it even better by introducing pagination for Live Results.

Previously, in the Search widget, when search results exceeded the number of items displayed in the Live Results (e.g., showing 3 items when there are actually 10 relevant items), users couldn’t see additional results, but had to be redirected to the search results archive and navigate through the results there.

With the new pagination feature in Elementor 3.25, when a visitor performs a search, if the search returns more results than can be displayed within the Live Results, pagination options will appear at the bottom or top of the widget, with numbers and/or next/previous options to navigate through. This allows visitors to continue browsing through the results as they type within the widget, without needing to navigate away. You also have the option to customize the pagination’s typography, position, spacing and alignment from the Style section, making sure it fully fits your brand look and feel.

### How to Test It

1. Create a new page and add the Search widget to the canvas.
2. Go to the Results section and activate the live results.
3. You can add a loop template you created previously or navigate to the Theme Builder to create a new loop item template.
4. Next, explore the different pagination options in the Additional Settings section.
5. Choose one of the options, then navigate to the Style tab and the Additional Settings section to continue styling your pagination as desired.
6. Click on “Publish” and check the live page.
7. Ensure everything is working as expected in the editor and on the front end.

## Additional Updates

![Additional Updates](https://developers.elementor.com/wp-content/uploads/2024/10/elementor-3-25-additional-updates-1024x538.png)

- Feature and Experiment Updates:
  - Grid Container – Merged into Flexbox Container and renamed to ‘Container’.
  - Optimized Control Loading – Active for existing sites and promoted to Stable.
  - Nested Elements – Active for existing sites.
  - Editor Top Bar – Active for existing sites.
  - Display Conditions (for elements) – Native in the Editor.
  - Form Submissions – Native in the Editor and active on all sites. The feature can be disabled from Elementor > Settings > Advanced.
- New Optimized Markup Performance Experiment – Removal of the first wrapper div for Button, PayPal and Stripe widgets to simplify the markup and reduce the overall DOM. Currently in Alpha status and should not be activated on production sites.
- Twenty Fifteen Theme – Removal of a CSS compatibility which removes the theme’s background color on pages using the “Elementor Canvas” template.

## How to Install the Beta Version

If you still haven’t enabled beta testing in Elementor, please follow these steps:

- Go to Elementor > Tools > Versions
- Enable the beta tester feature
- Go to Dashboard > Updates and update to the latest beta version.
- This will get you set up to test the new Elementor 3.25 Beta.

## Notes

As we make changes to our GitHub in an effort to keep it organized, improve the way we deliver information to you, and our ability to review your feedback, please follow the instructions below when reporting bugs, or making feature requests:

- To report a bug related to this beta version – open a new [Bug report](https://github.com/elementor/elementor/issues/new?assignees=&labels=status%2Fawaiting_triage&template=bug.yml)
- For feature requests – open a new [Feature request issue](https://github.com/elementor/elementor/discussions/new?category=feature-request)
- For other comments specifically about this beta version – [comment here](https://github.com/orgs/elementor/discussions/28960)

Designated time for release: October 28th (Estimated)

Many thanks for your support and help!

Cheers,

The Elementor Team

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Aviv Umflat](https://secure.gravatar.com/avatar/81d3a3df7ba3b7ee3872ef5e732efdcc6ff146ee1eab9065413057125c779db5?s=300&d=mm&r=g)

Aviv Umflat

Aviv is a Product Manager at Elementor with over 12 years of web design experience. He loves to sleep, make sarcastic remarks and eat falafel.

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