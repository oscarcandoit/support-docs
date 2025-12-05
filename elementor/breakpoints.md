---
url: https://developers.elementor.com/the-road-to-additional-custom-breakpoints
scraped_at: 2025-10-20T00:36:11.667Z
---

# The Road to Additional Custom Breakpoints

- Ariel Klikstein
- [December 17, 2020](https://developers.elementor.com/2020/12/17/)
- 27 Comments
- [Features](https://developers.elementor.com/category/features/)

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

At Elementor, we pride ourselves on listening to user requests. In fact, roughly 80% of all features have been developed based on such requests. Additional custom breakpoints have been at the top of the list for quite some time.

We are determined to  ship this feature, but we want to do it right. This post shares some of the constraints that we are currently dealing with to make Additional Custom Breakpoints ready.

Before we delve into the challenges, we want you to know that Additional Custom Breakpoints are coming! We are continuing our efforts towards a robust and reliable Additional Custom Breakpoints solution, and plan to ship it as soon as it’s ready.

### **Challenge \#1: Finding a Solution That Doesn’t Jeopardize the Code**

Elementor was originally built around two breakpoints only. In order to offer additional breakpoints, we need to make fundamental changes in a wide range of places in the codebase.

The breakpoints system has many touchpoints in Elementor’s most sensitive core classes and methods. Any change being made in the plugin’s core infrastructure has to be done extremely carefully, in order to make sure we do not break any existing sites.

Today, when `add_responsive_control()` is called, behind the scenes Elementor creates three separate controls with three separate IDs: `control_id`, `control_id_mobile`, and `control_id_tablet`. Settings with these three keys are saved to the database. Then, whenever Elementor is loaded (including in the Front End), for each “responsive control”, three controls are being registered and loaded.

### **Challenge \#2: Finding a Solution That Doesn’t Jeopardize Performance**

The “easiest” way to offer Additional Custom Breakpoints without breaking any existing sites is by adding more ‘device controls’ to our existing control-duplication mechanism. This approach is commonly used by 3rd party plugins, and is actually extremely inefficient and can **harm performance significantly**.

Benchmarking tests performed using Blackfire Profiler showed that using the existing system of control duplication to add three more breakpoints can slow page load times (Frontend) by up to 47% and increase peak memory usage by up to 15%.

![](https://developers.elementor.com/wp-content/uploads/2020/12/performance-additional-three.png)

As part of the process that will enable Additional Custom Breakpoints, we are overhauling the entire controls system and how it handles responsive values. The duplicated controls system will be gradually phased out, and will be replaced with a significantly faster, more efficient system. This change will improve overall performance, even for sites that do not add any Additional Custom Breakpoints beyond the existing ‘Mobile’ and ‘Tablet’ breakpoints.

Here are the performance results once loading the same page with only one control (just desktop).

We want to achieve this performance upgrade:

![](https://developers.elementor.com/wp-content/uploads/2020/12/performance-reduction-to-one.png)

### **The Expected Solution**

At Elementor, we have been working on a solution that will allow for more breakpoints, without jeopardizing the aforementioned challenges.

The development of this feature is taking longer than expected, since we are looking for:

1. A dynamic solution, one which will make Additional Custom Breakpoints an optional feature for users.
2. A solution which doesn’t have a negative impact on performance.
3. A solution which is backwards-compatible (doesn’t cause issues with existing sites).

## The Roadmap Towards Additional Custom Breakpoints

In our upcoming releases, we will be gradually including infrastructure and performance improvements relating to the breakpoints system, eventually enabling additional breakpoints.

**The roadmap:**

1. Convert hard-coded usage of breakpoints (tablet, mobile, default) to a dynamic system that will utilize registered breakpoints (the two existing ones + future Additional Custom Breakpoints).
2. Implement UI and UX Improvements for responsive editing and infrastructure for adding, managing, and utilizing new Additional Custom Breakpoints.
3. Change the way responsive controls are registered, created and utilized, into a more efficient structure.

We hope that by sharing this roadmap, you’ll have a clearer idea of the direction we are taking towards enabling additional breakpoints.

I’d like to add an important sidenote: Custom Breakpoints is a feature that has been in ongoing development since the early days of Elementor. In 2018, we released [Custom Breakpoints](https://developers.elementor.com/blog/2-1-new-features/), giving users the ability to customize the default values of the custom breakpoints in the Elementor Editor. Later on, we changed the responsive layout, making it vertically extendable, which allows for more responsive options. Now, the challenge is to develop the capability to add additional breakpoints in a way that will be optimal for all Elementor users.

## What to Expect In the Near Future

It’s clear from the roadmap laid out above that there is a lot to expect for Custom Breakpoints in our upcoming releases. Additional Custom Breakpoints may take a bit longer than expected, since first and foremost, we are committed to ensuring that every feature we release provides our users with a fast, reliable and performant editor. We do not want to compromise quality for speed in our development process.

Thank you for your patience and trust in Elementor. If you have any questions, please share them in the comments below.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Ariel Klikstein](https://secure.gravatar.com/avatar/71ca0cc3ce2ad08534725bc29f9a2186f0e651bc518befb8ead459d00c9ccb35?s=300&d=mm&r=g)

Ariel Klikstein

CTO & Co-Founder of Elementor. Junkie of music, wakes up in the middle of the night with a good product idea often and dreams about a better world.

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