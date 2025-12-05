---
url: "https://wpfusion.com/documentation/getting-started/shortcodes/"
title: "Shortcodes | WP Fusion"
---

[Skip to content](https://wpfusion.com/documentation/getting-started/shortcodes/#content)

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

# Shortcodes

- Published onJanuary 3, 2016
- Last updated on August 26, 2024

- [Documentation](https://wpfusion.com/documentation/)
- /
- [Getting Started](https://wpfusion.com/documentation/#getting-started)
- /
- Shortcodes

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#overview) Overview

WP Fusion includes a few shortcodes that let you display user meta, and show / hide content based on a user’s tags in your CRM. These can be used to personalize the site content based on a user’s custom fields or tags.

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#displaying-user-meta) Displaying user meta

You can use shortcodes to display meta data for logged in users. The syntax is pretty simple. For example, to show a user’s first name:

```
[user_meta field="first_name"]
```

Any field listed in the Contact Field tab of WP Fusion’s settings can be accessed in this way. For more information, see the documentation on [Displaying CRM Data in WordPress](https://wpfusion.com/documentation/getting-started/displaying-crm-data-in-wordpress/).

You can also display different information for users who haven’t registered yet, or aren’t logged in, like so:

```
Welcome, [user_meta field="first_name"]Guest[/user_meta]!
```

Logged in users will see their first name, while visitors will see “ **Welcome, Guest!**”

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#sync-if-empty) Sync if empty

The `[user_meta]` shortcode will display the data stored in the specified field in the database for the current logged in user.

If you are syncing that field with your CRM, and know there is supposed to be a value in your CRM for all users, you can force an update in cases where the value is empty, using the `sync_if_empty` parameter. As an example:

```
Your instructor is [user_meta field="assigned_instructor" sync_if_empty="true"].
```

This shortcode will display the user’s assigned instructor. If the value is empty, it will connect to your CRM one time to load the updated data for that field.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#user-meta-formatting) User meta formatting

WP Fusion supports formatting date and time fields using [PHP’s date function](http://php.net/manual/en/function.date.php). For example:

```
[user_meta field="next_bill_date" date-format="Y-m-d"]
```

This will output the date like **2019-03-10**.

For escaping text in the date format, use a double backslash. For example:

```
[user_meta field="next_bill_date" date-format="l \\t\\h\\e jS \\o\\f F, Y"]
```

This will output the date like **Friday the 22nd of March, 2019.** For more information on the syntax see [PHP’s date documentation](http://php.net/manual/en/function.date.php).

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#user-meta-formatting-timezone-offset) User meta formatting – timezone offset

WP Fusion syncs dates with most CRMs in UTC. To correct for this, the `user_meta` shortcode will adjust the date to local time (based on the site’s timezone) before displaying it.

Sometimes this can result in the time being displayed incorrectly, especially if you are entering dates via another plugin and they are already in local time. To manually correct the timezeone conversion, you can use the `timezone-offset` parameter, for example

```
[user_meta field="date_time" date-format="Y-m-d H:i:sa" timezone-offset="-2"]
```

This will display the date and time, corrected backwards two hours. The `timezone-offset` parameter accepts any positive or negative number.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#video-displaying-user-meta) Video – Displaying user meta

Shortcodes Displaying User Meta from Very Good Plugins on Vimeo

![video thumbnail](https://i.vimeocdn.com/video/927570205-97c2a1d3cf36a190bd9c5311d377ee04bc066e65576fb81911098cc14e7488de-d?mw=80&q=85)

Playing in picture-in-picture

[![Link to video owner's profile](https://i.vimeocdn.com/portrait/41604818_60x60?sig=ace69b6b1138b8ce1b943b533c22a573a68660be0cb4d8b06fa1d5d796d9e271&v=1&region=us)](https://vimeo.com/verygoodplugins?fl=pl&fe=po)

Play

00:00

01:46

Settings

QualityAuto

Picture-in-PictureFullscreen

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#displaying-a-contact-id) Displaying a contact ID

You can display the current user’s contact ID as well. The format is `[user_meta field="{crm_slug}_contact_id"]`. For example with Infusionsoft the shortcode would be:

```
[user_meta field="infusionsoft_contact_id"]
```

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#displaying-content-based-on-tags) Displaying content based on tags

You can use these shortcodes to show and hide content based on a user’s logged in status and CRM tags.

Note that WP Fusion also includes support for [Elementor](https://wpfusion.com/documentation/page-builders/elementor/), [Beaver Builder](https://wpfusion.com/documentation/page-builders/beaver-builder/), [Divi](https://wpfusion.com/documentation/page-builders/divi/), [Oxygen](https://wpfusion.com/documentation/page-builders/oxygen/), and the [Gutenberg Editor](https://wpfusion.com/documentation/page-builders/gutenberg/). If you’re using a page builder it may be easier to configure access rules using WP Fusion’s visual interfaces rather than a shortcode.

Note that while you can put _other_ shortcodes inside the \[wpf\] shortcode, you cannot put a \[wpf\] shortcode inside another \[wpf\] shortcode.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#restricting-content-based-on-logged-in-status) Restricting content based on logged in status

You can use the following two shortcodes to show content based on whether or not a user is logged in, regardless of their tags. This works like:

```
[wpf_loggedin]Only visible to logged in users[/wpf_loggedin]
```

```
[wpf_loggedout]Only visible to logged out visitors[/wpf_loggedout]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#restricting-content-based-on-tags) Restricting content based on tags

To restrict content based on a user’s CRM tags, wrap the desired content in the WP Fusion shortcode, using the examples below.

This content will only show if the user is logged in and has the tag “New Customer”:

```
[wpf tag="New Customer"]Restricted Content[/wpf]
```

This content will only show if the user is logged in and has both the tags “New Customer” and “Purchased Course”:

```
[wpf tag="New Customer,Purchased Course"]Restricted Content[/wpf]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#show-the-content-if-a-user-does-not-have-a-tag) Show the content if a user does not have a tag

To show content only if a user **doesn’t have a certain tag**, use the following syntax:

```
[wpf not="New Customer"]Restricted Content[/wpf]
```

You can also combine multiple tags for the `not` parameter, like

```
[wpf not="New Customer, Active Member"]Restricted Content[/wpf]
```

In that case the content will be hidden if the user has any of the tags. So if the user is tagged _either_ New Customer or Active Member, the content will be hidden.

You can also combine parameters for more advanced locking, like so:

```
[wpf tag="New Customer" not="Payment Failed"]Restricted Content[/wpf]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#requiring-any-tag-instead-of-all) Requiring any tag, instead of all

By default, WP Fusion will only unlock the content if the user has _all_ of the tags in the list. To make it so that the content will unlock when _any_ of the tags are found, include `method="any"` in the shortcode, like:

```
[wpf tag="New Customer,Purchased Course" method="any"]Restricted Content[/wpf]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#else-conditions) Else conditions

The `[wpf]` shortcode also supports an “else” condition. The usage works like:

```
[wpf tag="New Customer"]
Shows only to users with the "New Customer" tag
[else]
Shows to all logged in users who don't have the "New Customer" tag
[/wpf]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#logged-out-parameters) Logged out parameters

By default, content in the shortcode will always be hidden from users who aren’t logged in. You can change this by adding `logged_out` to the shortcode. For example:

```
[wpf not="New Customer" logged_out]
This will show to everyone who doesn't have the "New Customer" tag, including logged out visitors.
[/wpf]
```

or:

```
[wpf tag="New Customer" logged_out]
Shows only to users with the "New Customer" tag
[else]
Shows to all users who don't have the "New Customer" tag, as well as logged-out visitors.
[/wpf]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#square-brackets-in-tag-names) Square brackets in tag names

WordPress does not allow square brackets in shortcode parameters. If your tag names have square brackets in them, you can use parentheses instead and they will be treated as equivalent by WP Fusion.

For example if your tag name is _\[Customer\] Paid Course_, your shortcode will work with `[wpf tag="(Customer) Paid Course"]`.

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#displaying-content-based-on-page-rules) Displaying content based on page rules

Using the `[wpf_user_can_access]` shortcode, you can show and hide content based on the access rules configured in [the WP Fusion meta box](https://wpfusion.com/documentation/getting-started/access-control/#meta-box) on another post.

For example, this shortcode shows a message only if the current user has permission to access a course with post ID 456.

```
[wpf_user_can_access id="456"]
Thanks for signing up for Awesome Course!
[/wpf_user_can_access]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#else-conditions) Else conditions

This shortcode also accepts an `[else]` condition:

```
[wpf_user_can_access id="456"]
Thanks for signing up for Awesome Course!
[else]
You might be interested in our Awesome Course
[/wpf_user_can_access]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#within-a-loop) Within a loop

If the `id=` parameter is omitted, the shortcode will use the current post ID. This can be used in a loop or custom template to personalize the results.

For example to alternate the Elementor template displayed based on a user’s permissions:

```
[wpf_user_can_access]

[elementor_template id="14331"] // Enrolled template

[else]

[elementor_template id="53371"] // Unenrolled template

[/wpf_user_can_access]
```

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#displaying-content-based-on-user-meta-values) Displaying content based on user meta values

The `[user_meta_if]` shortcode can be used to conditionally display content based on user meta values of the current user, similar to [Liquid Tags](https://shopify.github.io/liquid/basics/introduction/) with Shopify or Drip.

**Note:** By their nature, shortcodes are difficult to work with. We recommend making use of these shortcodes sparingly, if at all. One typo in the attributes will make the whole shortcode not work. WP Fusion includes [many PHP filters](https://wpfusion.com/documentation/#filters) to control the visibility of content and these are generally easier to work with.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#available-attributes) Available attributes

The `[user_meta_if]` shortcode accepts 5 parameters:

- `field=` The meta field on the current user to check (any value from the wp\_users or wp\_usermeta table)
- `value=` The value to compare the user meta field against
- `field_format=` The formatting for the user meta field. The allowed functions are:

  - `strtotime`
  - `strtolower`
  - `strotoupper`
  - `strval`
  - `abs`
  - `ceil`
  - `floor`
  - `round`
- `value_format=` The formatting for the field to check against. Can be any PHP function.
- `compare=` The comparison. Default is `=`, can also be `!=`, `greater`, `less`, `IN` / `NOT IN`, or `ALL` (see below)

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#simple-example) Simple example

The simplest example is comparing a user meta value to a text value. For example to check a user’s role:

```
[user_meta_if field="role" value="customer"] Welcome back, Customer! [/user_meta_if]
```

Or to check someone’s BuddyPress account status:

```
[user_meta_if field="account_status" value="approved"]Thanks for verifying your email address![/user_meta_if]
```

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#numeric-comparisons) Numeric comparisons

As another example, you can compare numeric values using the `compare=` attribute, for example with lifetime value:

```
[user_meta_if field="lifetime_value" value="100" compare="greater"] Hey hey, big spender! [/user_meta_if]
```

In that example the content will only be displayed if the user’s `lifetime_value` field is greater than 100.

Note that you must have a field called `lifetime_value` for the user in your database. WP Fusion does not track lifetime values.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#date-comparisons) Date comparisons

You can get a little more fancy by making use of the `field_format=` and `value_format=` attributes, along with the `strtotime()` function.

For more info on valid inputs to `strtotime()` [see the PHP manual](https://www.php.net/manual/en/function.strtotime.php).

```
[user_meta_if field="next_exam_date" field_format="strtotime" value="-5 days" value_format="strtotime" compare="greater"]
Your exam is coming up soon, take the checklist to make sure you're ready on the big day!
[/user_meta_if]
```

This one is a bit complicated. Let’s break it down:

- **field=”next\_exam\_date”** This says we should use the field `next_exam_date` from the wp\_usermeta table. It can be in any date string. For example `2021-01-25 8:15am`
- **field\_format=”strtotime”** This converts the exam date into a timestamp for comparison, i.e. `1611558900`
- **value=”-5 days”** This is the value to compare against, “five days ago” relative to now
- **value\_format=”strtotime”** This runs the value through `strtotime()` which gives us a timestamp for five days ago
- `compare="greater"`The greater than comparison. The condition will only be met if the student’s next exam date is greater than or equal to 5 days ago.

The end result is that the message will be hidden until five days before the student’s next exam date, at which point it will be shown.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#in-and-not-in) IN and NOT IN

WP Fusion can also evaluate against partial matches in a meta value. For this, use either `compare="IN"` to search for the value inside the user meta field, or `compare="NOT IN"` to invert the logic.

This works with either strings, or data stored as an array.

For example, let’s say you have a usermeta field called `favorite_animals`. For the current user, it is set to `"Dogs, Horses, Cats"`. The following would display the content:

```
[user_meta_if field="favorite_animals" value="Cats" compare="IN"] Meow! 😸 [/user_meta_if]
```

The result is the same if `favorite_animals` is an array, like `array( "Dogs", "Horses", "Cats" )`.

`IN` and `NOT IN` can also evaluate multiple keywords in a string or array separated by commas.

For example, let’s say you have the same usermeta field called `favorite_animals`. For the current user, it is set to `"Dogs, Horses, Cats"`. The following would also display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Turtles" compare="IN"] Meow! 😸 [/user_meta_if]
```

`IN` displays the content when one keyword matches the user’s metadata, while `NOT IN` does the inverse.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#all) ALL

WP Fusion can also evaluate against full matches in a meta value. For this, use `compare="ALL"` to search for the value(s) inside the user meta field.

This works with either strings, or data stored as an array.

For example, let’s say you have a usermeta field called `favorite_animals`. For the current user, it is set to `"Dogs, Horses, Cats"`. The following would display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Dogs, Horses" compare="ALL"] You like so many animals!🐶 [/user_meta_if]
```

In another example using the usermeta field called `favorite_animals` and `"Dogs, Horses, Cats"` is set for the user, this would not display the content:

```
[user_meta_if field="favorite_animals" value="Cats, Dogs" compare="ALL"] You like so many animals!🐶 [/user_meta_if]
```

Because the keywords stored in `value` do not fully match the user metadata, the content is not displayed.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#empty-and-not-empty) EMPTY and NOT EMPTY

You can also check to see if a field exists at all. For this, use either `compare="EMPTY"` to display the content if the field is empty, or `compare="NOT EMPTY"` to display the content if the field has a value in it.

```
[user_meta_if field="webinar_link" compare="NOT EMPTY"] Your webinar link is [user_meta field="webinar_link"] [/user_meta_if]
```

### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#updating-data) Updating data

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#via-shortcode) Via shortcode

You can insert a shortcode into your pages to force an update of a users tags and/or meta data before the rest of the page is displayed.

This can be used to force a refresh of data from your CRM before displaying content using the `[wpf]` or `[user_meta]` shortcodes.

To force an update of the current user’s tags, use:

```
[wpf_update_tags]
```

To force an update of the current user’s meta data, use:

```
[wpf_update_meta]
```

Note that these shortcodes will trigger an API call to your CRM and slow down your page load by several seconds. They should be used sparingly, if at all.

#### [\#](https://wpfusion.com/documentation/getting-started/shortcodes/\#via-url) Via URL

It’s also possible to trigger an update of a user’s tags and/or metadata using a special query parameter in a URL. The parameter is `wpf-refresh`, it can be used like:

- `https://mysite.com/page/?wpf-refresh=all`: The user’s tags and metadata will be loaded from your CRM.
- `https://mysite.com/page/?wpf-refresh=tags`: The user’s tags will be loaded from your CRM.
- `https://mysite.com/page/?wpf-refresh=meta`: The user’s metadata and custom fields will be loaded from your CRM.

You can add a link to refresh the same page (i.e. the page the user is currently on) by simply using the query string as the destination for the URL. For example

```
<a href="?wpf-refresh=all">Refresh</a>
```

or in a visual editor, like so

[![](https://wpfusion.com/wp-content/uploads/2016/01/refresh-tags-url-1024x644.jpg)](https://wpfusion.com/wp-content/uploads/2016/01/refresh-tags-url.jpg)

Note that the user’s updated tags will be loaded from your CRM _before_ their access to the destination page is checked. This means that the user can unlock previously-locked content by clicking the link (as long as they have the correct access tags in your CRM).

### Was this helpful?

Let us know if you liked the post. That’s the only way we can improve.

Yes

No

* * *

### On this page

- [Overview](https://wpfusion.com/documentation/getting-started/shortcodes/#overview)
- [Displaying user meta](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-user-meta)
- [Sync if empty](https://wpfusion.com/documentation/getting-started/shortcodes/#sync-if-empty)
- [User meta formatting](https://wpfusion.com/documentation/getting-started/shortcodes/#user-meta-formatting)
- [User meta formatting - timezone offset](https://wpfusion.com/documentation/getting-started/shortcodes/#user-meta-formatting-timezone-offset)
- [Video - Displaying user meta](https://wpfusion.com/documentation/getting-started/shortcodes/#video-displaying-user-meta)
- [Displaying a contact ID](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-a-contact-id)
- [Displaying content based on tags](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-tags)
- [Restricting content based on logged in status](https://wpfusion.com/documentation/getting-started/shortcodes/#restricting-content-based-on-logged-in-status)
- [Restricting content based on tags](https://wpfusion.com/documentation/getting-started/shortcodes/#restricting-content-based-on-tags)
- [Show the content if a user does not have a tag](https://wpfusion.com/documentation/getting-started/shortcodes/#show-the-content-if-a-user-does-not-have-a-tag)
- [Requiring any tag, instead of all](https://wpfusion.com/documentation/getting-started/shortcodes/#requiring-any-tag-instead-of-all)
- [Else conditions](https://wpfusion.com/documentation/getting-started/shortcodes/#else-conditions)
- [Logged out parameters](https://wpfusion.com/documentation/getting-started/shortcodes/#logged-out-parameters)
- [Square brackets in tag names](https://wpfusion.com/documentation/getting-started/shortcodes/#square-brackets-in-tag-names)
- [Displaying content based on page rules](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-page-rules)
- [Else conditions](https://wpfusion.com/documentation/getting-started/shortcodes/#else-conditions)
- [Within a loop](https://wpfusion.com/documentation/getting-started/shortcodes/#within-a-loop)
- [Displaying content based on user meta values](https://wpfusion.com/documentation/getting-started/shortcodes/#displaying-content-based-on-user-meta-values)
- [Available attributes](https://wpfusion.com/documentation/getting-started/shortcodes/#available-attributes)
- [Simple example](https://wpfusion.com/documentation/getting-started/shortcodes/#simple-example)
- [Numeric comparisons](https://wpfusion.com/documentation/getting-started/shortcodes/#numeric-comparisons)
- [Date comparisons](https://wpfusion.com/documentation/getting-started/shortcodes/#date-comparisons)
- [IN and NOT IN](https://wpfusion.com/documentation/getting-started/shortcodes/#in-and-not-in)
- [ALL](https://wpfusion.com/documentation/getting-started/shortcodes/#all)
- [EMPTY and NOT EMPTY](https://wpfusion.com/documentation/getting-started/shortcodes/#empty-and-not-empty)
- [Updating data](https://wpfusion.com/documentation/getting-started/shortcodes/#updating-data)
- [Via shortcode](https://wpfusion.com/documentation/getting-started/shortcodes/#via-shortcode)
- [Via URL](https://wpfusion.com/documentation/getting-started/shortcodes/#via-url)

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