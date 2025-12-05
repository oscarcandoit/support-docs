---
url: https://developers.elementor.com/experiment-optimized-asset-loading
scraped_at: 2025-10-20T01:13:02.803Z
---

# New Experiment: Optimized Asset Loading Mode

- [December 29, 2020](https://developers.elementor.com/2020/12/29/)
- 21 Comments
- [Performance](https://developers.elementor.com/category/performance/)
- Elementor 3.1

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

In the upcoming Elementor v3.1.0, we created a new “Improved Asset Loading” mode, which reduces the amount of JS code loaded on the page by default. When activated, parts of the infrastructure code will be loaded asynchronously, only when needed.

### Which Functionalities Already Support the New Improved Asset Loading Mode?

#### 1\. Widget JS Handlers

Up to Elementor v3.1.0, all [widget handlers](https://developers.elementor.com/creating-a-new-widget/adding-javascript-to-elementor-widgets/) were loaded to every page by default, regardless of whether they are actually used on the page.

Starting in Elementor v3.1.0, when the “Improved Asset Loading” mode is active, each widget will dynamically load its handler, only when being used on the page.

##### How Does It Affect Usage of Widget Handlers?

Up to Elementor v3.1.0, when you wanted to extend a certain widget’s JS functionality, you were able to get the widget’s handler by calling the following method:

```php rainbow rainbow-show
elementorFrontend.elementsHandler.getHandlers( 'accordion.default' );

```

It was also possible to get the JS handlers for all JS-enhanced widgets at once, as one object, by not passing any value to the function.

```php rainbow rainbow-show
elementorFrontend.elementsHandler.getHandlers();

```

Starting Elementor v3.1.0, The method name was changed to `getHandler()`, and when the “Improved Asset Loading” mode is active, calling the method will return a “ [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)” (instead of the handler itself); once the “Promise” is fulfilled, the widget handler will be available as the function argument:

```php rainbow rainbow-show
elementorFrontend.elementsHandler.getHandler( 'accordion.default' )
	.then( ( handler ) => {
		console.log( 'The Requested Handler: ', handler )
	} );

```

\\* **IMPORTANT NOTE**: The old method name and its behavior are now deprecated. Within the next few releases, the old method will be removed entirely, and there will be no option to get all handlers at once as one object. Therefore, you will have to use the new method when calling a widget’s JS handler.

#### 2\. Swiper JS Library

Starting in Elementor v3.1.0, when the “Improved Asset Loading” mode is active, the Swiper JS library will only be loaded when the page includes at least one element utilizing the Swiper library.

For example: Section/Column Background Slideshow, or one of the Carousel Widgets (Image Carousel, Testimonial Carousel, etc.).

Starting v3.1.0, we’ve changed the implementation of creating a new swiper instance by changing the ‘swiper’ utility (available in the global scope at `elementorFrontend.utils.swiper`). Initializing Swiper this way now returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) instead of the ‘Swiper’ global variable provided by the library.

Therefore, starting in v3.1.0, in order to support the new dynamic assets loading feature, the creation of new Swiper instances has to be done using the `elementorFrontend.utils.swiper` utility, when it returns the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

For Example:

```php rainbow rainbow-show
const asyncSwiper = elementorFrontend.utils.swiper;

new asyncSwiper( swiperElement, swiperConfig ).then( ( newSwiperInstance ) => {
  console.log( 'New Swiper instance is ready: ', newSwiperInstance );

  mySwiper = newSwiperInstance;
} );

```

### Backward Compatibility For External Plugins Developers

In case that your plugin is dependent on the Swiper JS library, you will now have to make sure that the library is available before using it since it will not be loaded by default.

It also needs to be considered that there might still be users who hadn’t made the upgrade to v3.1.0 yet, in which the Swiper utility does not return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Therefore we need to consider both scenarios:

1. The user uses an older version prior to v3.1.0, and the `elementorFrontend.utils.swiper` utility does not return a Promise.
2. The user uses v3.1.0 and up, in which the `elementorFrontend.utils.swiper` utility returns a Promise.

Once the Swiper library is available, a global variable called ‘Swiper’ will exist in the window scope. It is necessary to check if this variable exists; if it does, use it.

If the Swiper global object does not exist, we’ll use a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which will create the new Swiper instance automatically once it’s fulfilled.

**Code snippet for creating a new swiper instance in a widget handler that supports v3.1.0 and up with backward compatibility:**

```php rainbow rainbow-show
if ( 'undefined' === typeof Swiper ) {
  const asyncSwiper = elementorFrontend.utils.swiper;

  new asyncSwiper( swiperElement, swiperConfig ).then( ( newSwiperInstance ) => {
    console.log( 'New Swiper instance is ready: ', newSwiperInstance );

    mySwiper = newSwiperInstance;
  } );
} else {
  console.log( 'Swiper global variable is ready, create a new instance: ', Swiper );

  mySwiper = new Swiper( swiperElement, swiperConfig );
}

```

### Page Assets Reduction

|     |     |
| --- | --- |
| v3.1.0 Optimized Mode **Disabled** | v3.1.0 Optimized Mode **Enabled** |
| Assets File Size Reduced by **up to 6KB** | Assets File Size Reduced by **up to 177KB** |

Starting Elementor v3.1.0, the “Improved Asset Loading” mode will be available, although it will not be active by default. Still, a minor improvement will occur even when this new setting is disabled, and the page assets size will be slightly reduced (up to 6KB). Once the “Improved Asset Loading” mode is enabled, the total size of Javascript assets loaded on each Elementor page can be reduced by up to 177KB compared to the same assets being loaded on a version prior to 3.1.0.

### Why did we make this change?

- Elementor views performance improvements as one of our top priorities, and we continuously work hard on ways to make Elementor sites faster and more performant.
- We are now providing our users with the option to load less code by default, which translates to significantly faster page-load times.
- This change, in addition to providing a performance improvement in itself, also includes infrastructure to be used towards more code reduction in the future.

This is another substantial step in our roadmap of performance improvements. Many more improvements are currently under development and will be gradually released.

### How to Enable The Improved Asset Loading JS Mode

In the admin panel, go to Elementor → Tools → Experiments → Improved Asset Loading.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Author picture](https://secure.gravatar.com/avatar/?s=300&d=mm&r=g)

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