---
url: https://developers.elementor.com/docs/managers/registering-dynamic-tags/
scraped_at: 2025-10-20T01:01:55.074Z
---

# [\#](https://developers.elementor.com/docs/managers/registering-dynamic-tags/\#registering-dynamic-tags) Registering Dynamic Tags

Elementor CoreIntermediate

When you create new [dynamic tags](https://developers.elementor.com/docs/dynamic-tags/), you must register them. This is done by hooking to the registration hook in the dynamic tags manager and passing a new dynamic tag instance.

## [\#](https://developers.elementor.com/docs/managers/registering-dynamic-tags/\#registering-new-dynamic-tags) Registering New Dynamic Tags

Developers should use the following code to register new dynamic tags:

```
/**
 * Register new Elementor dynamic tags.
 *
 * @param \Elementor\Core\DynamicTags\Manager $dynamic_tags_manager Elementor dynamic tags manager.
 * @return void
 */
function register_new_dynamic_tags( $dynamic_tags_manager ) {

	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-1.php' );
	require_once( __DIR__ . '/dynamic-tags/dynamic-tag-2.php' );

	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_1() );
	$dynamic_tags_manager->register( new \Elementor_Dynamic_Tag_2() );

}
add_action( 'elementor/dynamic_tags/register', 'register_new_dynamic_tags' );

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

This code hooks to the `elementor/dynamic_tags/register` action hook which holds the dynamic tags manager. The manager registers new dynamic tags by passing the dynamic tag instance.

←
[Registering Controls](https://developers.elementor.com/docs/managers/registering-controls/)[Registering Finder Categories](https://developers.elementor.com/docs/managers/registering-finder-categories/)
→