---
url: https://developers.elementor.com/docs/scripts-styles/editor-styles/
scraped_at: 2025-10-20T01:02:26.387Z
---

# [\#](https://developers.elementor.com/docs/scripts-styles/editor-styles/\#editor-styles) Editor Styles

Elementor CoreIntermediate

When you develop addons that extend [Elementor Editor](https://developers.elementor.com/docs/editor/) and you have custom stylesheets, use `elementor/editor/before_enqueue_styles` or `elementor/editor/after_enqueue_scripts` action hooks, which are fired when editor styles are registered and enqueued.

## [\#](https://developers.elementor.com/docs/scripts-styles/editor-styles/\#registering-editor-styles) Registering Editor Styles

In the example below, we'll register and enqueue custom stylesheets **before** Elementor styles are registered and enqueued:

```
function my_plugin_register_editor_styles() {
	wp_register_style( 'editor-style-1', plugins_url( 'assets/css/editor-style-1.css', __FILE__ ) );
	wp_register_style( 'editor-style-2', plugins_url( 'assets/css/editor-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'elementor/editor/before_register_styles', 'my_plugin_register_editor_styles' );

function my_plugin_enqueue_editor_styles() {
	wp_enqueue_style( 'editor-style-1' );
	wp_enqueue_style( 'editor-style-2' );
}
add_action( 'elementor/editor/before_enqueue_styles', 'my_plugin_enqueue_editor_styles' );

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

Now we'll register and enqueue custom stylesheets **after** Elementor styles are registered and enqueued:

```
function my_plugin_register_editor_styles() {
	wp_register_style( 'editor-style-1', plugins_url( 'assets/css/editor-style-1.css', __FILE__ ) );
	wp_register_style( 'editor-style-2', plugins_url( 'assets/css/editor-style-2.css', __FILE__ ), [ 'external-framework' ] );
	wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );
}
add_action( 'elementor/editor/after_register_styles', 'my_plugin_register_editor_styles' );

function my_plugin_enqueue_editor_styles() {
	wp_enqueue_style( 'editor-style-1' );
	wp_enqueue_style( 'editor-style-2' );
}
add_action( 'elementor/editor/after_enqueue_styles', 'my_plugin_enqueue_editor_styles' );

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

←
[Editor Scripts](https://developers.elementor.com/docs/scripts-styles/editor-scripts/)[Preview Scripts](https://developers.elementor.com/docs/scripts-styles/preview-scripts/)
→