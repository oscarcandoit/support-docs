---
url: https://developers.elementor.com/docs/widgets/add-new-widget/
scraped_at: 2025-10-20T00:42:15.871Z
---

# [\#](https://developers.elementor.com/docs/widgets/add-new-widget/\#add-new-widget) Add New Widget

Elementor CoreIntermediate

Elementor offers many built-in widgets out of the box, but it also allows external developers to register new widgets.

## [\#](https://developers.elementor.com/docs/widgets/add-new-widget/\#hooks) Hooks

To do that we simply hook to the `elementor/widgets/register` action which provides access to the widgets manager as a parameter. Developers can use the manager to add new widgets using the `register()` method with the widget instance.

## [\#](https://developers.elementor.com/docs/widgets/add-new-widget/\#registering-widgets) Registering Widgets

To register new widgets use the following code:

```
function register_new_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/widget-1.php' );
	require_once( __DIR__ . '/widgets/widget-2.php' );

	$widgets_manager->register( new \Elementor_Widget_1() );
	$widgets_manager->register( new \Elementor_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_new_widgets' );

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

The manager registers new widgets by accepting widget instances. For more information about the widget class, read about the [widget class structure](https://developers.elementor.com/docs/widgets/widget-structure/).

←
[Introduction](https://developers.elementor.com/docs/widgets/)[Remove Widgets](https://developers.elementor.com/docs/widgets/remove-widgets/)
→