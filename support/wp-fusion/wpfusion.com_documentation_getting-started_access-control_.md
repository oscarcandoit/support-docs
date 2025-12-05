---
url: "https://wpfusion.com/documentation/getting-started/access-control/"
title: "Restricting Access to Content | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/access-control/#content)

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

# Restricting Access to Content

- Published onFebruary 12, 2016
- Last updated on February 7, 2025

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Restricting Access to Content

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#overview) Overview

WP Fusion adds many methods for restricting access to content based on a user’s tags (or “lists” or “segments”) in your [connected CRM](https://wpfusion.com/documentation/faq/crm-compatibility-table/).

These features can be used to create members-only content, drip-feed access to content, and create personalized listings of posts, pages, courses, and more.

**Not using WP Fusion for access control?** You can completely disable the access control system by un-checking **Restrict Content** in the [General Settings](https://wpfusion.com/documentation/getting-started/general-settings/#content-restriction).

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#meta-box) Meta box

WP Fusion adds a meta box to every post, page, and other piece of content on your site, where you can control the visibility of that content and set up redirects if a user doesn’t have access.

You can also apply and remove tags when a page or post is viewed.

[![](https://wpfusion.com/wp-content/uploads/2023/03/wpf-meta-box-access-2023-1024x832.jpg)](https://wpfusion.com/wp-content/uploads/2023/03/wpf-meta-box-access-2023.jpg)

There are a few options in WP Fusion’s content restriction meta box:

- **Users must be logged in to view this page:** Check this box to require a user to be logged in to view the content.
- **Required tags (any):** Here you can specify tags that are required to view the content. If the user has at least one of the tags they’ll be able to access it.
- **Required tags (all):** With this setting the user must have _all_ of the tags in order to access the content. For example “Active Membership” _and_ “Gold Member”.
- **Required tags (not):** With this setting, if the user is logged in and _has_ any of the specified tags, they will be denied access.
- **Redirect if access is denied:** Here you can specify a page on your site to redirect to if access is denied, or type in an external URL. Leave blank to show the restricted content message (see below).
- **Refresh tags if access is denied:** Check this box to force-refresh a user’s tags from your CRM when a logged-in user is denied access to this content.
- **Apply tags on view:** You can specify any number of tags to be applied when the content is viewed.
- **Remove tags on view:** You can specify any number of tags to be removed when the content is viewed.
- **Delay:** Here you can set a delay in ms before the tags are applied. For example enter 5000 for 5 seconds.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#restricted-content-message) Restricted content message

The restricted content message will be shown if a page is protected and no redirect is specified. You can edit this from the general WP Fusion settings page.

[![](https://wpfusion.com/wp-content/uploads/2016/02/restricted-content-message-1-1024x575.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/restricted-content-message-1.jpg)

If you enable the setting for **Per Post Messages** you’ll be able to set a custom message for every restricted post. This setting will appear at the bottom of the post edit screen.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#rss-feed-content) RSS feed content

The restricted content message is automatically applied to the content of all WP Fusion-protected posts in your site’s RSS feeds. However this does not apply to excerpts in RSS feeds, since WP Fusion doesn’t protect excerpts by default.

If you wish to protect RSS feed excerpts as well, you can do so with the following code snippet:

```php
add_filter( 'the_excerpt_rss', array( wp_fusion()->access, 'restrict_rss_feed_content' ) );
```

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#restricted-content-excerpts) Restricted content excerpts

If you use the [more tag](https://wordpress.com/support/wordpress-editor/blocks/more-block/2/) in your posts (or the [more block](https://wordpress.com/support/wordpress-editor/blocks/more-block/)), WP Fusion will automatically include your custom excerpt above the restricted content message. This can be used to offer teasers of restricted content.

Another way to display excerpts of restricted content is to add the `[the_excerpt]`shortcode to the restricted content message. This will output an excerpt of the protected post.

You can optionally specify an excerpt length using the `length=` parameter, for example `[the_excerpt length="90"]` to display the first 90 characters of the post.

**Note:** If a post has a _more tag_ or _more block_, this will take priority over any excerpt added via the \[the\_excerpt\] shortcode.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#restricted-content-message-vs-redirect) Restricted content message vs redirect

When protecting a piece of content with WP Fusion you can either set a redirect if access is denied, or leave the redirect blank to show a restricted content message.

This works by replacing the “content” area of the page, which works well with normal posts and pages that have a single content area.

[![](https://wpfusion.com/wp-content/uploads/2016/01/restricted-content-message-post-1024x604.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/restricted-content-message-post.jpg) The restricted content message on a blog post.

It does not work as well on pages that have multiple content areas or customized templates, for example a product or course page.

[![](https://wpfusion.com/wp-content/uploads/2016/01/restricted-content-message-product-1024x708.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/restricted-content-message-product.jpg) The Restricted Content Message isn’t as effective on a product page since the content area is only a small part of the layout.

In cases like that it’s preferable to set a redirect when access is denied.

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#filter-queries) Filter Queries

On the General tab of the WP Fusion settings is an option to **Filter Queries**. When this is enabled WP Fusion will modify any database queries so that posts a user doesn’t have access to are removed from the results.

[![](https://wpfusion.com/wp-content/uploads/2016/02/filter-queries-1-1024x433.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/filter-queries-1.jpg)

This can be used to create post grids or course listings of only items a user has access to. It works with all plugins and theme builders.

There are three options:

- **Off:** No filtering (default).
- **Standard:** Restricted posts will be removed from the query results _after_ the query is run.
- **Advanced:** Restricted posts will be excluded from query results _before_ a query is run. This method is slower but works better when using pagination and limits on the number of results.

Generally **Standard** mode is sufficient. You would only want to use Advanced mode if your restricted items are split across multiple pages (with pagination), or if you’re doing filtering on the items.

For example hiding lessons a user doesn’t have access to in the LearnDash course navigation would work great with Standard mode, but hiding restricted items in the WooCommerce shop catalog or in FacetWP search results would work best with Advanced mode.

**Note:** Filter Queries is _slow_. If you have a lot of posts on your site and you haven’t enabled the _Filter Queries Post Types_ setting, it can easily add several seconds to each page load, or even crash your site.

Filter Queries should be used minimally and only when no other method of protecting content will work.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#filter-queries-post-types) Filter Queries Post Types

For best performance, it’s recommended to select the post types you want to use query filtering on from the **Post Types** dropdown.

If this is left blank then query filtering will be run on every piece of content on your site, which may negatively affect performance.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#filter-queries-arguments) Filter Queries Arguments

When using Filter Queries in “Advanced” mode, by default it will process at most 200 posts in a single query. This is to protect the stability of your site, since each post requires several database queries to calculate the access rules for the current user.

If more than 200 posts are found with WP Fusion access rules, a notice will be logged to [the activity logs](https://wpfusion.com/documentation/getting-started/activity-logs/).

[![](https://wpfusion.com/wp-content/uploads/2016/02/filter-queries-too-many-notice-1024x282.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/filter-queries-too-many-notice.jpg) WP Fusion will log a notice if you attempt to process more than 200 posts at a time with Filter Queries in Advanced mode.

Any posts beyond the first 200 will be ignored by Filter Queries, which may result in content being displayed that should be hidden.

You can override this limit using the [wpf\_query\_filter\_get\_posts\_args filter](https://wpfusion.com/documentation/filters/wpf_query_filter_get_posts_args/).

However, the higher the limit, the longer the page will take to load, due to the increased number of database queries. This may also result in out of memory errors or timeout errors depending on the available resources of your server.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#filter-queries-caching) Filter Queries caching

The results of the restricted posts for the current user and post type are cached for one minute to improve performance. This works best with object caching like Redis or Memcached. On our sites we use the [Redis Object Cache plugin](https://wordpress.org/plugins/redis-cache/) and it works quite well.

The cache time can be extended using the [wpf\_query\_filter\_cache\_time](https://wpfusion.com/documentation/filters/wpf_query_filter_cache_time/) filter.

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#apply-settings-in-bulk) Apply settings in bulk

You can also apply settings in bulk by selecting multiple posts, pages, or custom post types from the list table in the admin.

Select the items you want to edit, and choose “Edit”, from the Bulk Actions menu.

[![](https://wpfusion.com/wp-content/uploads/2016/02/bulk-edit-1024x527.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/bulk-edit.jpg) Access the bulk edit panel from the Bulk Actions dropdown

Inside the panel will be a section where you can bulk-configure the WP Fusion settings for the selected posts.

![](https://wpfusion.com/wp-content/uploads/2016/02/bulk-edit-tool-1-244x300.jpg)

If you check the box for Merge Changes, your new settings will be merged into the existing settings for each post.

If Merge Changes is unchecked, each post’s content restriction settings will be overwritten by the settings specified in the bulk edit tool.

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#restricting-access-to-archives-and-categories) Restricting access to archives and categories

You may wish to restrict access to a category or taxonomy archive page. Click “Edit” next to the category or taxonomy term and scroll down to the **WP Fusion – Access Settings** section.

[![](https://wpfusion.com/wp-content/uploads/2016/02/category-restrictions-1-1024x660.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/category-restrictions-1.jpg)

You can enable **Restrict access to archives** and select a required tag to protect the archive page for that post type.The access restrictions work the same way they do for pages. Keep in mind that this won’t restrict all content that has the category, tag, or term specified— it will just restrict access to the archive pages for that content.

If you want to restrict access to _all_ content that has the given category or term, check the box next to **Restrict access to all**. These restrictions will take priority over an individual post’s access rules.

If you want to completely hide the taxonomy term when a user doesn’t have access, check the box for **Hide term**. This will remove the category / term from all term listings, index pages, search results, and navigation.

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#restricting-access-to-post-types) Restricting access to post types

You can restrict access to entire post types in three ways: either visually via the [CPT-UI plugin](https://wordpress.org/plugins/custom-post-type-ui/), the [WP Fusion Post Types Addon](https://github.com/verygoodplugins/wpf-post-types), or in PHP using the [`wpf_post_type_rules` filter](https://wpfusion.com/documentation/filters/wpf_post_type_rules/).

**Note:** When protecting entire post types or categories / terms, redirect URLs configured on single posts will still take priority over the redirect set on the post type or term.

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#protecting-content-via-css) Protecting content via CSS

For advanced users, WP Fusion includes an option that lets you write CSS rules to style your site based on the current user’s CRM tags.

This can be enabled by checking the box for **Tags as CSS Classes** on the Advanced tab in the WP Fusion settings.

The current user’s tags will be added as classes to the HTML `<body>` element.

[![](https://wpfusion.com/wp-content/uploads/2016/02/tags-as-css-classes-1024x310.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/tags-as-css-classes.jpg)

Each tag will be prefixed by `tag-` and the tag name will be sanitized into a valid CSS class. For example the tag “Gold Member” would become `tag-gold-member`.

You can then style elements on your site based on the user’s tags. For example to hide a sales banner from paying members:

```css
body.tag-gold-member #sales-banner { display: none; }
```

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#testing-content-protection) Testing content protection

There are a few ways to review and test your content protection with WP Fusion.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#review-in-the-admin) Review in the admin

When viewing any table of posts, pages, courses, or other content in the admin, you’ll see a lock icon indicating that an item is protected by WP Fusion.

[![](https://wpfusion.com/wp-content/uploads/2016/02/access-control-admin-1024x420.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/access-control-admin.jpg)

You can hover over the lock icon to display a tooltip showing the access rules for that piece of content.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#preview-with-tag) Preview with tag

The simplest method for testing access rules is to use the **Preview With Tag** feature in the admin toolbar.

[![](https://wpfusion.com/wp-content/uploads/2016/02/preview-with-tag-1024x469.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/preview-with-tag-scaled.jpg)

This will let you preview any page on your site as if your user currently had the selected tag. You can also select _Lock All_ or _Unlock All_ from the menu for additional preview options.

#### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#testing-as-a-user) Testing as a user

The most reliable way to test your site experience is to use an actual user account.

By default your admin user account is excluded from WP Fusion’s content protection rules, but you can disable this by un-checking the box for **Exclude Administrators** in the WP Fusion settings. Or you can use a test (non administrator) use account.

When testing with a user account, you can see and modify the user’s tags via their admin user profile.

[![](https://wpfusion.com/wp-content/uploads/2016/02/admin-profile-tags-1024x393.jpg)](https://wpfusion.com/wp-content/uploads/2016/02/admin-profile-tags-scaled.jpg)

If you’ve just applied a new tag in your CRM, you may need to click Resync Tags to load the updated data into WordPress. To automate this process consider [setting up a webhook](https://wpfusion.com/documentation/webhooks/).

### [\#](https://wpfusion.com/documentation/getting-started/access-control/\#developers) Developers

There are several methods for using WP Fusion’s access logic in your custom templates and plugins.

For more information, see the documentation pages on [wpf\_has\_tag()](https://wpfusion.com/documentation/functions/wpf_has_tag/), [wpf\_user\_can\_access()](https://wpfusion.com/documentation/functions/wpf_user_can_access/), [wpf\_get\_tag\_id()](https://wpfusion.com/documentation/functions/wpf_get_tag_id/), and the additional resources in the [Developer Guides](https://wpfusion.com/documentation/#developer-guides).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/getting-started/access-control/#overview)
- [Meta box](https://wpfusion.com/documentation/getting-started/access-control/#meta-box)
- [Restricted content message](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message)
- [RSS feed content](https://wpfusion.com/documentation/getting-started/access-control/#rss-feed-content)
- [Restricted content excerpts](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-excerpts)
- [Restricted content message vs redirect](https://wpfusion.com/documentation/getting-started/access-control/#restricted-content-message-vs-redirect)
- [Filter Queries](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries)
- [Filter Queries Post Types](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries-post-types)
- [Filter Queries Arguments](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries-arguments)
- [Filter Queries caching](https://wpfusion.com/documentation/getting-started/access-control/#filter-queries-caching)
- [Apply settings in bulk](https://wpfusion.com/documentation/getting-started/access-control/#apply-settings-in-bulk)
- [Restricting access to archives and categories](https://wpfusion.com/documentation/getting-started/access-control/#restricting-access-to-archives-and-categories)
- [Restricting access to post types](https://wpfusion.com/documentation/getting-started/access-control/#restricting-access-to-post-types)
- [Protecting content via CSS](https://wpfusion.com/documentation/getting-started/access-control/#protecting-content-via-css)
- [Testing content protection](https://wpfusion.com/documentation/getting-started/access-control/#testing-content-protection)
- [Review in the admin](https://wpfusion.com/documentation/getting-started/access-control/#review-in-the-admin)
- [Preview with tag](https://wpfusion.com/documentation/getting-started/access-control/#preview-with-tag)
- [Testing as a user](https://wpfusion.com/documentation/getting-started/access-control/#testing-as-a-user)
- [Developers](https://wpfusion.com/documentation/getting-started/access-control/#developers)

### You may also like

[![2516825 freemium account blog image v2 121724](https://wpfusion.com/wp-content/uploads/2024/12/2516825_Freemium-Account-Blog-Image_v2_121724-300x158.jpg)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Offer Freemium or Paywall Content/Courses in WordPress (Complete Guide)](https://wpfusion.com/tutorials/offering-freemium-paywall-content-wp-fusion/)

In this tutorial, we look at ways WP Fusion can be used to offer a mix of free and premium blog content or courses, by restricting access based on tags in your CRM to create a secure and personalized user experience.

[![2474322 howtocreateafreemembershipsite 1 100224](https://wpfusion.com/wp-content/uploads/2024/09/2474322_HowtoCreateaFreeMembershipSite_1_100224-300x158.jpg)](https://wpfusion.com/tutorials/how-to-create-a-free-membership-site/)

Tutorials

![Sufia Banu](https://secure.gravatar.com/avatar/af5ebcfaf10e901d9ce4cc1618bd1872d659863634a2dca9964dbf3c0405c756?s=128&d=mm&r=g)

#### [How to Create a Free Membership Site With Integrated Email Marketing in WordPress](https://wpfusion.com/tutorials/how-to-create-a-free-membership-site/)

Building a membership site can seem daunting and expensive but with the right tools and guidance, you can create a powerful membership site without making holes in the pocket.

[![a person with long, curly hair is pointing to a tablet displaying the text members only! with the wpfusion logo visible in the corner. the rooms decor hints at exclusivity, much like paywall content often seen on wordpress sites.](https://wpfusion.com/wp-content/uploads/2025/02/Screenshot-2025-02-04-at-15.04.42-300x167.png)](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Freemium or Paywall Content in WordPress](https://wpfusion.com/videos/tutorials/freemium-or-paywall-content-in-wordpress/)

Create a Freemium Blog with paywall content! Emily uses Elementor to set up a template and shows us how to create an archive of paid content with WP Fusion. 🧡

[![a person smiling, holding a key, stands beside a tablet showing restrict content, proudly featuring the wpfusion logo at the top. perfect for seamlessly managing wordpress content and enhancing seo keywords with ease.](https://wpfusion.com/wp-content/uploads/2025/02/maxresdefault-6-300x169.jpg)](https://wpfusion.com/videos/tutorials/restrict-content-in-wordpress/)

![Emily Middleton](https://wpfusion.com/wp-content/uploads/2025/01/emily-middleton_avatar-128x128.png)

#### [Restrict Content in WordPress](https://wpfusion.com/videos/tutorials/restrict-content-in-wordpress/)

Do you want to restrict certain content on your WordPress to subscribers, members, etc? WP Fusion can help you use Fluent CRM, Active Campaign, Keep, Zoho or any other WP Fusion-supported CRMs. WP Fusion ensures the viewer is directed towards the content you want them to see! Let us know

### In this chapter

- [Activity Logs](https://wpfusion.com/documentation/getting-started/activity-logs/ "Activity Logs")
- [Displaying CRM Data in WordPress](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/ "Displaying CRM Data in WordPress")
- [General Settings and Basic Setup](https://wpfusion.com/documentation/getting-started/general-settings/ "General Settings and Basic Setup")
- [Installation Guide](https://wpfusion.com/documentation/getting-started/installation-guide/ "Installation Guide")
- [Restricting Access to Content](https://wpfusion.com/documentation/getting-started/access-control/ "Restricting Access to Content")
- [Shortcodes](https://wpfusion.com/documentation/getting-started/shortcodes/ "Shortcodes")
- [Showing and Hiding Widgets](https://wpfusion.com/documentation/getting-started/showing-and-hiding-widgets/ "Showing and Hiding Widgets")
- [Syncing Contact Fields](https://wpfusion.com/documentation/getting-started/syncing-contact-fields/ "Syncing Contact Fields")
- [Tracking User Activity](https://wpfusion.com/documentation/getting-started/tracking-user-activity/ "Tracking User Activity")
- [Working with Tags](https://wpfusion.com/documentation/getting-started/working-with-tags/ "Working with Tags")

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