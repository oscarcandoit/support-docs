---
url: https://developers.elementor.com/additional-custom-breakpoints-technical-details-and-gotchas
scraped_at: 2025-10-20T00:34:21.278Z
---

# Additional Custom Breakpoints – Technical Details and Gotchas

- Udi Dollberg
- [July 27, 2021](https://developers.elementor.com/2021/07/27/)
- 33 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 3.4

![](https://developers.elementor.com/wp-content/uploads/2021/11/breakpoints-1024x538.jpg)

As you may recall, at the end of 2020 we released a blog post detailing [The Road to Additional Custom Breakpoints](https://developers.elementor.com/the-road-to-additional-custom-breakpoints/). Last April, we published [another blog post](https://developers.elementor.com/breakpoint-system-changes-in-elementor-v3-2-0/) discussing advancements made in Elementor v3.2.0 in order to reach the additional breakpoints goal.

The last step in the roadmap as stated in the blog post linked above, was:

> _Change the way responsive controls are registered, created and utilized, into a more efficient structure._

We are happy to announce that this phase has been completed in Elementor 3.4.0, and in this upcoming version, we will be introducing the long-awaited “Additional Custom Breakpoints” feature!

## Disclaimer and Activation Instructions

This feature actively affects large portions of Elementor’s code for both the Frontend and the Editor environments. Because of this, to prevent active sites from being affected when upgrading to Elementor v3.4.0, **we have decided to make it optional** by introducing it as an experiment, which will be **inactive** by default on existing sites, and active by default in new sites.

We highly recommend testing the Additional Custom Breakpoint feature on a staging site before activating it on a production environment. We also recommend backing up your database and site files before updating to Elementor 3.4.0.

To activate the Additional Custom Breakpoints feature, Go to your WordPress site’s Admin Dashboard, and in the sidebar menu, click on _Elementor > Settings > Experiments_. Look for the “Additional Custom Breakpoints” experiment, choose “Active” in the status dropdown, and save your new settings. There you go, the Additional Custom Breakpoints experiment should now be activated.

![](https://developers.elementor.com/wp-content/uploads/2021/07/image2-3-1024x111.png)

## The New Custom Breakpoints

The experiment provides the option to add 4 new breakpoints on top of the default mobile and tablet breakpoints:

![](https://developers.elementor.com/wp-content/uploads/2021/07/image1.png)

- Mobile Extra (in the range between Mobile and Tablet)
- Tablet Extra (above Tablet, below laptop and widescreen)
- Laptop (above Tablet and if added, also above Tablet Extra)
- Widescreen (a `min-width` breakpoint for extra-large screens)

All new (and existing) breakpoints except for the widescreen breakpoints are `max-width` breakpoints – any responsive controls settings for these breakpoints will be applied **up to** the breakpoint’s selected (or default) value (in pixels). For the widescreen breakpoint, any setting will be applied from the breakpoint value **and up**.

### **Widescreen – The New Min-Width Breakpoint**

Up to the release of this feature, the Desktop “breakpoint”, which acted as the default value of responsive controls, was treated by Elementor as a `min-width` breakpoint, since it had no “ceiling” – there was no other breakpoint above it to act as an upper limit.

Now, to adapt to newer technologies such as 8K screens and extra-wide displays, we decided to add a new `min-width` breakpoint called **Widescreen**.

If the Widescreen breakpoint is activated, the Desktop breakpoint – which up to this point, did not have a `max-width` limit – will have, if widescreen values are utilized, a `max-width` limit – the widescreen breakpoint **minus `1px`**.

## A New Programmatic Breakpoints System

Up to Elementor 3.4.0, all breakpoint-related data used to be retrieved from the `Responsive` class located in `elementor/core/responsive/responsive.php`. That class is becoming deprecated, and the breakpoint information is moving to the new Breakpoints Manager class located in `elementor/core/breakpoints/manager.php`. The breakpoints manager instance is available on the Elementor plugin instance – `\Elementor\Plugin::$instance->breakpoints`.

For example: to check if the system has any custom breakpoints active, instead of calling `Responsive::has_custom_breakpoints()`, you should now call `\Elementor\Plugin::$instance->breakpoints->has_custom_breakpoints()`.

## Potentially Breaking Changes

### **Dropping Support for Programmatic Access to Responsive Control Values**

When the “Additional Custom Breakpoints” experiment is active, there is going to be a change to the element settings array normally accessed in widgets’ `render()` method. Elementor is no longer going to support accessing responsive control values programmatically this way.

**Let’s break it down:**

When the “Additional Custom Breakpoints” experiment is off, the system works exactly as it did before. When rendering a widget, you can fetch all of its available control settings by calling `$this->get_settings_for_display()` in your widget’s `render()` method.

Let’s say you add a responsive control, like this one:

```php rainbow rainbow-show
$this->add_responsive_control(
	'my_responsive_control',
	[\
		'type' => Controls_Manager::TYPE,\
		'label' => __( 'Control Label', 'textdomain' ),\
	]
);

```

Before the “Additional Custom Breakpoints” experiment, this method returned the values of any and all available controls, including responsive controls for all devices. For example, for an element with the control above, the `$this->get_settings_for_display()` method would return an array that includes the values of the `'my_responsive_control_tablet'`, and `'my_responsive_control_mobile'` controls.

While the “Additional Custom Breakpoints” experiment is active, **these control settings will no longer be available in the `render()` method**.

### **Dropping Support for Conditioning Controls on Responsive Control Values**

To illustrate the headline above, let’s look at the following example of an added control:

```php rainbow rainbow-show
$this->add_control(
	'control_id',
	[\
		'type' => Controls_Manager::TYPE,\
		'label' => __( 'Control Label', 'textdomain' ),\
		'condition' => [\
			'my_responsive_control_tablet' => 'yes',\
		],\
	]
);

```

In the `add_control()` function call above – the condition in the control arguments tells the `Controls_Stack` class to activate the control with ID `'control_id'`, only if the responsive control `'my_responsive_control'` has a value of `'yes'` saved for its auto-generated Tablet control (with an auto-generated ID of `'my_responsive_control_tablet'`).

While the “Additional Custom Breakpoints” experiment is active, **these conditions will no longer filter controls** when fetched via `get_active_settings()`, or `get_settings_for_display()`.

**The result:** The control will always appear in the settings when they are fetched programmatically – the condition is disregarded.

Again, when the experiment is inactive, the system works exactly as it did before.

#### **Important Note**

Elementor, despite having used it ourselves in a couple of places, also does not consider conditioning on a responsive control’s value to be a best practice, and **we encourage any Elementor add-on developers to make the necessary adjustments to their plugins so they would not be affected by this change.**

### **Where Did This Limitation Come From**

This change comes as a result of several optimizations made to Elementor’s responsive control-generation code.

With the experiment active, it is now possible to generate up to 7 different controls for each responsive control added to an element. The duplicated Control generation process is “expensive”, both memory-wise as well as processing time, so optimizations were necessary.

A major part of our optimizations are that when the “Additional Custom Breakpoints” experiment is active, we avoid control duplication unless absolutely necessary. This is the cause for the potentially breaking change detailed above: Since responsive controls are not duplicated in some cases, their setting value would not be available at times, such as during conditions testing.

## Big Performance Improvements

The huge plus included within these optimizations detailed above, is that it provides an overall significant performance boost in both the Editor and the Frontend. The performance boost is noticeable in lower memory usage, faster execution times, and overall faster page load times.

### **Front End**

Removing the need for control duplication in regular front-end page-loads, brings with it an improvement of **up to 23%(!)** in page load times (according to benchmark tests we ran here at Elementor) with the “Additional Custom Breakpoints” experiment active as opposed to inactive. This is with the default Mobile and Tablet breakpoints active only.

Adding all 4 new breakpoints barely changes the effectiveness of the optimizations made: even with all new breakpoints active, our tests showed page load times to be 22% faster compared to page loads with the experiment inactive.

### **Editor**

In the editor, all control instances must exist, including the responsive ones, so we couldn’t avoid responsive control duplication. Instead, since the control system in the Editor is managed in JS, we moved the responsive control duplication process from the PHP side to the JS side. This optimization reduced the size of widgets and controls data loaded by the Editor via Ajax **by about a third**, from about 900KB to about 600KB.

## In Conclusion

Elementor 3.4.0 allows you to add up to 6 breakpoints to your website: _mobile_, _mobile extra_, _tablet_, _tablet extra_, _laptop_, and _widescreen_. Together with **_desktop_**, which acts as the default setting in responsive controls, that is a total of 7 devices for which you can configure responsive control values.

Not only does adding more breakpoints not harm performance, but optimizations that are added with the experiment provide **substantially faster** loading times in the Front End and the Editor.

The optimizations do have implications, as detailed above.

If you are a plugin developer, check your plugin for the caveats mentioned above to see that it is compatible with the limitations introduced by the experiment.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Udi Dollberg](https://secure.gravatar.com/avatar/266fe955548f0b4200fdd883c48e33d033b9e7b1d223c4e280f0718b9a765033?s=300&d=mm&r=g)

Udi Dollberg

Udi is a talented developer in Elementor’s Editor team and loves cars, woodworking and classic jazz.

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