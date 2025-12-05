---
url: https://developers.elementor.com/add-javascript-to-elementor-widgets
scraped_at: 2025-10-20T00:32:49.023Z
---

# Add JavaScript to Widgets

- Ohad Raz
- March 6, 2023

The JavaScript handlers used in Elementor’s core widgets are written in the form of ES6 classes. All core widget classes extend a JS Widget Handler base class: `elementorModules.frontend.handlers.Base`.

The base class acts as a kind of “abstract” class, defining several basic methods that are used to enable targeting and manipulation of the UI instance of the widget.

### Enqueuing Scripts & Styles

Like in the case of any other WordPress plugin, the JavaScript has to be enqueued in the plugin’s PHP. In order to make sure the script is only loaded if the widget is used, the script should be registered within the widget’s (PHP) class.

A best practice is to register the script in the class constructor function, then return it in the class’ `get_script_depends()` method, which handles enqueuing:

```php rainbow rainbow-show
class Widget_Class_Name extends \Elementor\Widget_Base {

   public function __construct($data = [], $args = ) {
      parent::__construct($data, $args);

      wp_register_script( 'script-handle', 'path/to/file.js', [ 'elementor-frontend' ], '1.0.0',  );
   }

   public function get_script_depends() {
       return [ 'script-handle' ];
   }

}

```

Let’s break it down:

- `__construct()`: The class’ constructor function. It runs when the class is instantiated.
- `wp_register_script()`: A native WordPress function used to register scripts prior to enqueuing. This function has several parameters:
  - The first parameter is a custom name, or “handle”, for the script.
  - The second parameter should be a Full URL of the script or path of the script relative to the WordPress root directory.
  - The third parameter is previous dependencies that must be loaded before the script being registered – **this is important**. Any widget’s JS handler must be loaded only after the **‘elementor-frontend’** script is loaded.
  - The fourth parameter is the script’s version. If you don’t intend to manage versions for your JS handler, this parameter can be null, though it is recommended to populate it (for example, with **‘1.0.0’**).
  - The fifth parameter determines whether the script is loaded in the footer. This parameter must be set to true.
- `get_script_depends()`: A method that returns a list, in array form, containing all of the custom scripts required for the plugin to work properly. Elementor makes sure the scripts returned by this method are enqueued in the proper time and only when it’s necessary. The script handle has to be a unique string, and it is determined when registering the scripts. In this case, the handle is just **‘script-handle’**. When you write your own plugin, make sure you choose a unique name for your script handle.

If your plugin has custom CSS files, you can enqueue them in the exact same manner, register the style in the widget’s constructor and use the `get_style_depends()` method to tell elementor to enqueue it for you. For example:

```php rainbow rainbow-show

class Widget_Class_Name extends \Elementor\Widget_Base {

   public function __construct($data = [], $args = ) {
       parent::__construct($data, $args);
       wp_register_style( 'style-handle', 'path/to/file.css');
   }

   public function get_style_depends() {
       return [ 'style-handle' ];
   }

}

```

You can read more on [wp\_register\_style](https://developer.wordpress.org/reference/functions/wp_register_style/) & [wp\_register\_script](https://developer.wordpress.org/reference/functions/wp_register_script/) for better understanding how they work.

### Handler JS Class Structure

A basic JS widget handler class skeleton looks like this:

```javascript rainbow rainbow-show
class WidgetHandlerClass extends elementorModules.frontend.handlers.Base {
   getDefaultSettings() {}
   getDefaultElements() {}
   bindEvents() {}
}

```

Let’s break it down:

#### Get Default Settings

The `getDefaultSettings()` method is used to add any custom settings to be used in the widget’s JS handler. A common use of this method is wiring up jQuery selectors to target the widget’s HTML. For example:

```javascript rainbow rainbow-show
getDefaultSettings() {
    return {
        selectors: {
            button: '.buttonClassName',
            content: '.contentClassName',
        },
    };
}

```

The settings objects returned by `getDefaultSettings` can be accessed by calling `this.getSettings( string )`, and passing in a string with the object’s key (in this example, to access the selectors object above, you would call `this.getSettings( 'selectors' )`.

#### **Get Default** Elements

![](https://lh3.googleusercontent.com/ZL5MRSRrRuzHfMyZ_OdyZOGBUSZXDYpTc89BT7xm2O1V9-fJwR0Z1w22tTMIyOHUdUMklD4dpwFfIs8vkNcA-5sJ-LZcXdrdLf86l5ie00hpL9RxcYLX15_Te99OAbM8FjfjsAXi)

The `getDefaultElements()` method is used to create jQuery objects of the HTML elements targeted by the JS handler. These jQuery objects are then appended to the class instance object as properties of its `elements` property.

This screenshot from the Chrome Developer Console shows an instance of a widget handler class called ‘ContentToggleButton’ (represented inside the class by `this` keyword), with two targeted elements labeled $button and `$content`.

Example:

```javascript rainbow rainbow-show
getDefaultElements() {
    const selectors = .getSettings( 'selectors' );
    return {
        $button: .$element.find( selectors.button ),
        $content: .$element.find( selectors.content ),
    };
}

```

`this.$element` refers to the current widget instance being handled by the handler. By looking for our selectors under `$element`, we make sure our Javascript code will only affect the specific widget instance the user is interacting with (in case there are more than one instance of the widget on our page).

#### Bind Events

The `bindEvents()` method is used to add event listeners for widget-related events. For example, if you want to make an element in your widget clickable, you would add a ‘click’ event listener to the element. For example:

```javascript rainbow rainbow-show
bindEvents() {
    .elements.$button.on( 'click', callback );
}

```

The callback function you include in the event listener will be invoked when the element represented by the property `$button` is clicked. It is considered a best practice to write the callback function as a class method, then call the function in the event listener, like so:

```javascript rainbow rainbow-show
bindEvents() {
    .elements.$firstSelector.on( 'click', () => .onFirstSelectorClick() );
}

onFirstSelectorClick( event ) {
    event.preventDefault();

    // DO STUFF HERE

}

```

### Register Widget Handler with Elementor

In order to wire your JS handler to your widget and make sure the script runs at the proper time in Elementor’s loading sequence, it is necessary to register the handler with Elementor.

The registering action must be done once the main frontend instance has been initiated. This is done by listening to the `elementor/frontend/init` event, and adding the registration action within the listener’s callback.

Registering our `WidgetHandlerClass` from the example above would look like this:

```javascript rainbow rainbow-show
jQuery( window ).on( 'elementor/frontend/init', () => {
   const addHandler = ( $element ) => {
       elementorFrontend.elementsHandler.addHandler( WidgetHandlerClass, {
           $element,
       } );
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/your-widget-name.default', addHandler );
} );

```

Let’s break this example down:

- The event listener `jQuery( window ).on( 'elementor/frontend/init', callback )` makes sure the handler is only registered once Elementor’s main JS functions have run.
- The `elementorFrontend.elementsHandler.addHandler` method adds our handler WidgetHandlerClass to Elementor’s central mechanism for managing widget handlers.
- The `elementorFrontend.hooks.addAction` method has a first parameter `frontend/element_ready/your-widget-name.default`. This parameter determines that the callback function (the addHandler function) runs only once the corresponding widget is loaded. The substring `your-widget-name` in the hook should be replaced with the name returned in the `get_name()` method in your [widget’s PHP class](https://developers.elementor.com/creating-a-new-widget/#Widget_Structure).

### Example JS Handler File

The following example assumes it’s corresponding widget has two HTML elements with different class names ( `.firstSelectorClass`, `.secondSelectorClass`).

This example handler makes the element with class `firstSelectorClass` clickable, and makes the element with class `secondSelectorClass` hidden when the first one is clicked.

```javascript rainbow rainbow-show
class WidgetHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                firstSelector: '.firstSelectorClass',
                secondSelector: '.secondSelectorClass',
            },
        };
    }

    getDefaultElements() {
        const selectors = .getSettings( 'selectors' );
        return {
            $firstSelector: .$element.find( selectors.firstSelector ),
            $secondSelector: .$element.find( selectors.secondSelector ),
        };
    }

    bindEvents() {
        .elements.$firstSelector.on( 'click', .onFirstSelectorClick.bind(  ) );
    }

    onFirstSelectorClick( event ) {
        event.preventDefault();

        .elements.$secondSelector.show();
   }
}

jQuery( window ).on( 'elementor/frontend/init', () => {
   const addHandler = ( $element ) => {
       elementorFrontend.elementsHandler.addHandler( WidgetHandlerClass, {
           $element,
       } );
   };

   elementorFrontend.hooks.addAction( 'frontend/element_ready/your-widget-name.default', addHandler );
} );

```

For wider browser support, it is recommended to transpile your class into ES5 syntax (using a tool such as Babel.js) before deploying it in production.

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