---
url: https://developers.elementor.com/native-js-events-in-elementor
scraped_at: 2025-10-20T00:44:02.297Z
---

# Native JS Events in Elementor

- Rami Yushuvaev
- [June 2, 2022](https://developers.elementor.com/2022/06/02/)
- 3 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 3.5, Elementor Pro 3.7

![](https://developers.elementor.com/wp-content/uploads/2021/11/assets-1024x538.jpg)

Elementor was originally developed using jQuery. This means the editor, and many components that trigger events, had to use jQuery events. The issue with jQuery events is that they are not native JS events wrapped in a jQuery method, they utilize a completely separate mechanism. This led to frustration within the external developers community as developers couldn’t listen to events using the `addEventListener()` method – they were forced to use jQuery `.on()` method.

## Dual Support

To address the issue, we mapped all the events Elementor triggers, in the frontend. **Elementor 3.5** introduced an event dispatch method that triggers both jQuery events and native JS events. In **Elementor Pro 3.7** we brought the same capabilities to Pro.

Instead of the following:

```php rainbow rainbow-show
jQuery( window ).on( 'elementor/event/name', () => { /* … */ });

```

Developers can now use vanilla JS events, like so:

```php rainbow rainbow-show
window.addEventListener( 'elementor/event/name', () => { /* … */ });

```

Both versions are currently supported. Saying that, we do encourage addon developers to adopt vanilla JS to prepare your code for the moment Elementor abandons jQuery.

## Issue Origins

When triggering JS events, Elementor had inconsistent naming conventions. Some events use **colons** between namespace elements, and others use **slashes**. Using colons is a jQuery convention, but vanilla JS events do not support the use of colons in the event name (e.g `elementor:init` v.s `elementor/init`).

Essentially, by relying on events with colons, Elementor forced addon developers to use jQuery. This is no longer true –  all events have been renamed to use slashes. The old event names with colons still work, but you can only catch them with jQuery. The new event names can be listened to using jQuery and vanilla JS.

Please note that events with colons in their names will be eventually deprecated.

## Backward Compatibility

If you plan to adopt JS events, and your addon has [compatibility checks](https://developers.elementor.com/docs/addons/compatibility/), make sure to update the minimum required Elementor version to 3.5 and minimum required Elementor Pro version to 3.7.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Rami Yushuvaev](https://secure.gravatar.com/avatar/9f12cddfda58b05180515a94b92de2570f60f94c7d62e84bc6ea4f17fbc9c541?s=300&d=mm&r=g)

Rami Yushuvaev

Head of Elementor Developers Experience & Performance Lead. Fullstack developer and open source projects contributor.

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