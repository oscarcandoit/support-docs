---
url: https://developers.elementor.com/docs/managers/
scraped_at: 2025-10-20T00:54:50.275Z
---

# [\#](https://developers.elementor.com/docs/managers/\#elementor-managers) Elementor Managers

Elementor CoreIntermediate

Elementor is an extendable framework. It offers an architecture which allows external developers to add new functionality with addons. To do that, you need to create a new class for your component, which extends the base class and inherits its methods. You then need to register the class using the component manager, informing Elementor of its existence.

## [\#](https://developers.elementor.com/docs/managers/\#registering-elements) Registering Elements

Each component has its own manager that holds all the references to all the registered elements. To register your own element, you need to access the registration method in the component manager.

To simplify the process, Elementor adopted a standard way to register new component elements. All you need to do is to hook to manager using a action hook, pass a callback function that imports your class and then registers the class using the component manager.

```
function register_something( $some_manager ) {

	require_once( __DIR__ . '/something/something-1.php' );
	require_once( __DIR__ . '/something/something-2.php' );

	$some_manager->register( new \Elementor_Something_1() );
	$some_manager->register( new \Elementor_Something_2() );

}
add_action( 'elementor/something/register', 'register_something' );

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

## [\#](https://developers.elementor.com/docs/managers/\#managers) Managers

Check out the different elements you can register, and how to register them properly:

- [Registering Widgets](https://developers.elementor.com/docs/managers/registering-widgets/)
- [Registering Controls](https://developers.elementor.com/docs/managers/registering-controls/)
- [Registering Dynamic Tags](https://developers.elementor.com/docs/managers/registering-dynamic-tags/)
- [Registering Finder Categories](https://developers.elementor.com/docs/managers/registering-finder-categories/)

[Registering Widgets](https://developers.elementor.com/docs/managers/registering-widgets/)
→