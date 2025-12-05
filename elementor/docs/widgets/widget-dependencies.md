---
url: https://developers.elementor.com/docs/widgets/widget-dependencies
scraped_at: 2025-10-20T00:54:49.588Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#widget-dependencies) Widget Dependencies

Elementor CoreIntermediate

Some widgets are dependent on custom scripts for functionality and custom styles for look and feel. Widgets can use external JS libraries, CSS frameworks, or custom JS handlers. Let's see how to use them.

## [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#defining-dependencies) Defining Dependencies

Inside the widget class we can define the required JS and CSS dependencies the following way:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'script-handle' ];
	}

	public function get_style_depends(): array {
		return [ 'style-handle' ];
	}

}

```

1

2

3

4

5

6

7

8

9

10

11

- **Script Dependencies** – The `get_script_depends()` method lets you define the JS files required to run the widget.

- **Style Dependencies** – The `get_style_depends()` method lets you define the CSS files required to run the widget.


Please note that these dependencies should already be registered. The widget class only informs Elementor what dependencies it needs to enqueue.

## [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#registering-scripts-styles-in-wordpress) Registering Scripts & Styles in WordPress

Like any other WordPress plugin, scripts and styles have to be registered using the [wp\_register\_script()(opens new window)](https://developer.wordpress.org/reference/functions/wp_register_script/) and [wp\_register\_style()(opens new window)](https://developer.wordpress.org/reference/functions/wp_register_style/) functions in the plugin’s PHP.

WordPress offers several hooks to register script/styles, depending on where they will be used:

- [wp\_enqueue\_scripts(opens new window)](https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/) \- Hook for scripts and styles on front-end pages
- [login\_enqueue\_scripts(opens new window)](https://developer.wordpress.org/reference/hooks/login_enqueue_scripts/) \- Hook for scripts and styles on login pages.
- [admin\_enqueue\_scripts(opens new window)](https://developer.wordpress.org/reference/hooks/admin_enqueue_scripts/) \- Hook for scripts and styles on admin pages.

## [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#registering-scripts-styles-in-elementor) Registering Scripts & Styles in Elementor

Elementor addon developers should register JS and CSS dependencies in the main file, usually where [widgets are registered](https://developers.elementor.com/docs/widgets/add-new-widget/):

```
/**
 * Register Elementor test widgets.
 */
function elementor_test_widgets_registration( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/test-widget-1.php' );
	require_once( __DIR__ . '/widgets/test-widget-2.php' );

	$widgets_manager->register( new \Elementor_Test_Widget_1() );
	$widgets_manager->register( new \Elementor_Test_Widget_2() );

}
add_action( 'elementor/widgets/register', 'elementor_test_widgets_registration' );

/**
 * Register scripts and styles for Elementor test widgets.
 */
function elementor_test_widgets_dependencies() {

	/* Scripts */
	wp_register_script( 'widget-script-1', plugins_url( 'assets/js/widget-script-1.js', __FILE__ ) );
	wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
	wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	/* Styles */
	wp_register_style( 'widget-style-1', plugins_url( 'assets/css/widget-style-1.css', __FILE__ ) );
	wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

}
add_action( 'wp_enqueue_scripts', 'elementor_test_widgets_dependencies' );

```

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

Then, each widgets should set its dependencies as follows:

```
class Elementor_Test_Widget_1 extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'external-library' ];
	}

	public function get_style_depends(): array {
		return [ 'external-framework' ];
	}

}

```

1

2

3

4

5

6

7

8

9

10

11

```
class Elementor_Test_Widget_2 extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'widget-script-1', 'widget-script-2' ];
	}

	public function get_style_depends(): array {
		return [ 'widget-style-1', 'widget-style-2' ];
	}

}

```

1

2

3

4

5

6

7

8

9

10

11

This way, Elementor can build the dependency tree and enqueue only dependencies for widgets used in the page.

### [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#using-elementor-assets) Using Elementor Assets

Third-party developers can use assets registered by Elementor, for instance using [Swiper(opens new window)](https://swiperjs.com/) to create carousel-based widgets.

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_style_depends(): array {
		return [ 'swiper', 'widget-custom-style' ];
	}

	public function get_script_depends(): array {
		return [ 'swiper', 'widget-custom-script' ];
	}

}

```

1

2

3

4

5

6

7

8

9

10

11

Elementor registers swiper for its carousel widgets, and Elementor Pro and many other Elementor Addons use it instead of registering its own versiosn of the library.

### [\#](https://developers.elementor.com/docs/widgets/widget-dependencies/\#using-elementor-scripts) Using Elementor Scripts

To use different Elementor JS methods, widgets needs to declare `elementor-frontend` as a dependency:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_script_depends(): array {
		return [ 'elementor-frontend', 'widget-custom-script' ];
	}

}

```

1

2

3

4

5

6

7

This can be handy when 3rd party widgets register their own frontend handlers. Read more about it on [controls `frontend_available` argument](https://developers.elementor.com/docs/editor-controls/frontend-available/).

←
[Widget Categories](https://developers.elementor.com/docs/widgets/widget-categories/)[Widget Controls](https://developers.elementor.com/docs/widgets/widget-controls/)
→