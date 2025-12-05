---
url: https://developers.elementor.com/a-new-method-for-attaching-a-js-handler-to-an-element
scraped_at: 2025-10-20T00:50:50.253Z
---

# A New Method for Attaching a JS Handler to an Element

- [December 21, 2020](https://developers.elementor.com/2020/12/21/)
- 1 Comment
- [Features](https://developers.elementor.com/category/features/)
- Elementor 3.1

![](https://developers.elementor.com/wp-content/uploads/2021/11/attachements-1024x538.jpg)

In Elementor 3.1.0 version, we created a new method for attaching a JS handler to an element.

Up to Elementor 3.1.0, in order to [attach a JS handler](https://developers.elementor.com/creating-a-new-widget/adding-javascript-to-elementor-widgets/#Registering_the_Widget_Handler_with_Elementor), we used a hook called `addAction`, and passed a function to it ( `addHandler`):

```php rainbow rainbow-show
const addHandler = ( $element ) => {
	elementorFrontend.elementsHandler.addHandler( ElementHandlerClass, {
		$element,
	} );
};

elementorFrontend.hooks.addAction( 'frontend/element_ready/your-element-name.default', addHandler );

```

For more details, [see here](https://developers.elementor.com/creating-a-new-widget/adding-javascript-to-elementor-widgets/#Registering_the_Widget_Handler_with_Elementor).

In the example above, the hook event: `'frontend/element_ready/your-element-name.default'` triggers the callback function ‘addHandler’ and the handler becomes attached to the element.

**Starting from Elementor 3.1.0, the ‘ `addHandler`‘ function should not be used directly anymore**, Instead, we created a new method for handling the attachment in a more efficient way:

```php rainbow rainbow-show
attachHandler( elementName, Handlers, skin );

```

Function arguments:

- `elementName `– { string } example: ‘your-element-name’ (the name returned in the get\_name() method in your elementt’s PHP class).
- `Handlers` – { class / array of classes } – The element handler.
- `skin` – { string } _(optional)_ default value: `‘default’` – Defines the element skin type (in order to disable the skin type, use: `null`).

### How to use the “attachHandler” function?

```php rainbow rainbow-show
elementorFrontend.elementsHandler.attachHandler( 'your-element-name', ElementHandlerClass );

```

The new method handles the handler attachment in a short and simple way. The result of running this example is equivalent to the result received by the old way of attaching a handler to an element.

Note:

- The second argument of the function, ‘Handlers’, can also get an array of handlers and when the event will be triggered, all handlers will be added to the element.
- When a different ‘skin’ type is needed, use the third argument of the function as follows:

```php rainbow rainbow-show
elementorFrontend.elementsHandler.attachHandler( 'your-element-name', ElementHandlerClass, 'custom' );

```

In this case,  the hook name will change to : `'frontend/element_ready/your-element-name.custom'`.

The handler will be added automatically when the event will be triggered.

### Conditional handlers attachment

In some cases, adding a handler to an element is dependent on a certain condition. For these cases, a new method was created called `isActive()`.

By default, the method returns true. When a conditional attachment is needed, the `isActive` method should be inherited in the handler class and should return the condition evaluation.

Here is a detailed example of using the `isActive` function in an element handler class:

```php rainbow rainbow-show
class ElementHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                firstSelector: '.firstSelectorClass',
                secondSelector: '.secondSelectorClass',
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $firstSelector: this.$element.find( selectors.firstSelector ),
            $secondSelector: this.$element.find( selectors.secondSelector ),
        };
    }

    bindEvents() {
        this.elements.$firstSelector.on( 'click', this.onFirstSelectorClick.bind( this ) );
    }

    onFirstSelectorClick( event ) {
        event.preventDefault();

        this.elements.$secondSelector.show();
   }

   isActive( settings ) {
        return settings.$element.hasClass( 'elementor-section-stretched' );
   }
}

jQuery( window ).on( 'elementor/frontend/init', () => {
   elementorFrontend.elementsHandler.attachHandler( 'your-element-name', ElementHandlerClass );
} );

```

### Why did we make this change?

- In order to supply a short and easy way for attaching handlers while ensuring a uniform structure for adding handlers to elements.
- Separating the handler attachment logic to a dedicated method ensures a more organized, testable and structured code.

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