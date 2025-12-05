---
url: https://developers.elementor.com/docs/themes/registering-locations/
scraped_at: 2025-10-20T01:00:12.318Z
---

# [\#](https://developers.elementor.com/docs/themes/registering-locations/\#registering-locations) Registering Locations

Elementor ProIntermediate

To support Elementor locations, the theme needs to register supported locations in the `functions.php` file. Theme developers can support all core locations, some locations or create new locations.

To register new locations, we need to hook to the `elementor/theme/register_locations` action and use either the `register_all_core_location()` method to register all the locations, or the `register_location()` method to register new locations.

## [\#](https://developers.elementor.com/docs/themes/registering-locations/\#registering-all-locations) Registering All Locations

Registering all core locations is done using the following code:

```
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_all_core_location();

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

```

1

2

3

4

5

6

## [\#](https://developers.elementor.com/docs/themes/registering-locations/\#registering-some-locations) Registering Some Locations

Registering some of the core locations is done using the following code:

```
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_location( 'header' );
	$elementor_theme_manager->register_location( 'footer' );
	// $elementor_theme_manager->register_location( 'single' );
	// $elementor_theme_manager->register_location( 'archive' );

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

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

## [\#](https://developers.elementor.com/docs/themes/registering-locations/\#registering-new-locations) Registering New Locations

Registering new locations is done using the following code:

```
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_location(
		'main-sidebar',
		[\
			'label' => esc_html__( 'Main Sidebar', 'theme-name' ),\
			'multiple' => true,\
			'edit_in_content' => false,\
		]
	);

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

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

Let’s see what each argument does:

- **label** ( _`string`_) – The location label in Elementor.
- **multiple** ( _`bool`_) – Determines whether or not to display multiple locations. If set to `true`, it will display the entire template belonging to this location. If set to `false` it will display only the best match. The default is `false`.
- **edit\_in\_content** ( _`bool`_) – Determines whether or not to edit the template in the content area. If set to `true` the template can be edited in the content area. If set to `false` it cannot. The default is `true`.

←
[Introduction](https://developers.elementor.com/docs/themes/)[Displaying Locations](https://developers.elementor.com/docs/themes/displaying-locations/)
→