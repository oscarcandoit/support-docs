---
url: https://developers.elementor.com/elementor-pro-2-7-popup-events
scraped_at: 2025-10-20T00:42:14.184Z
---

# Elementor Pro 2.7: Popup Events

- Ohad Raz
- [August 29, 2019](https://developers.elementor.com/2019/08/29/)
- 30 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor Pro 2.7

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

In Elementor Pro 2.7 we are adding two event triggers to our Popups:

- `elementor/popup/show` – when a Popup is opened/shown
- `elementor/popup/hide` – when a Popup is closed/hidden

One thing we get a lot of requests for is a way to track Popups and a way to initialize JavaScript-based elements when a popup is shown. To allow that we added these to events mentioned above so now every time a Popup is shown we trigger the `elementor/popup/show` event and when a popup is closed we trigger the `elementor/popup/hide` event.

#### Usage:

The usage is very simple, you just add an event listener to the desired event with your callback, for example tracking popup opened events:

```javascript rainbow rainbow-show
jQuery( document ).on( 'elementor/popup/show', () => {
	// do your tracking here
} );

```

The event callback is called with 3 variables:

- `Event` – the dom event object.
- `popupId` – the id of the popup which triggered the event
- `popupDocument` – The elementor popup document object instance

This allows you to have even more control, for example, if I want to run my tracking code only when a specific popup is closed:

```javascript rainbow rainbow-show
jQuery( document ).on( 'elementor/popup/hide', ( event, id, instance ) => {
	if ( id === 123 ) {
		// do your tracking here
	}
} );

```

As always, your feedback is welcome.

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