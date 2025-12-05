---
url: https://developers.elementor.com/docs/dynamic-tags/add-new-dynamic-tag/
scraped_at: 2025-10-20T00:57:06.113Z
---

# [\#](https://developers.elementor.com/docs/dynamic-tags/add-new-dynamic-tag/\#add-new-dynamic-tag) Add New Dynamic Tag

Elementor CoreAdvanced

Elementor offers many built-in dynamic tags out of the box, but it also allows external developers to register new tags.

## [\#](https://developers.elementor.com/docs/dynamic-tags/add-new-dynamic-tag/\#hooks) Hooks

To do that we simply hook to the `elementor/dynamic_tags/register` action which provides access to the dynamic tags manager as a parameter. Developers can use the manager to add new tags using the `register()` method with the dynamic tag instance.

## [\#](https://developers.elementor.com/docs/dynamic-tags/add-new-dynamic-tag/\#registering-dynamic-tags) Registering Dynamic Tags

To register new dynamic tags use the following code:

```
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

The manager registers the new tag by accepting the dynamic tags instances. For more information about the dynamic tag class, read about the [dynamic tag class structure](https://developers.elementor.com/docs/dynamic-tags/dynamic-tags-structure/).

←
[Introduction](https://developers.elementor.com/docs/dynamic-tags/)[Remove Dynamic Tags](https://developers.elementor.com/docs/dynamic-tags/remove-dynamic-tags/)
→