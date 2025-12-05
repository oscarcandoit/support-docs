---
url: https://developers.elementor.com/docs/hooks/widget-skins/
scraped_at: 2025-10-20T01:03:24.859Z
---

# [\#](https://developers.elementor.com/docs/hooks/widget-skins/\#widget-skins) Widget Skins

Elementor CoreAdvanced

Elementor has a hook that lets developers apply custom skins to widgets. It runs after the widget constructor and registers custom skins for a specific widget types that support skins.

## [\#](https://developers.elementor.com/docs/hooks/widget-skins/\#hook-details) Hook Details

- **Hook Type:** Action Hook
- **Hook Name:** `elementor/widget/{$widget_name}/skins_init`
- **Notes:** The dynamic portion of the hook name, `$widget_name`, refers to the widget name.
- **Affects:** Init

## [\#](https://developers.elementor.com/docs/hooks/widget-skins/\#hook-arguments) Hook Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `widget` | _`\Elementor\Widget_Base`_ | The widget instance |

#### [\#](https://developers.elementor.com/docs/hooks/widget-skins/\#example) Example

Let's add a custom skin to the Google Maps widget:

```
/**
 * Add dark skin for "Google Maps" widget.
 *
 * @since 1.0.0
 * @param \Elementor\Widget_Base $widget The widget instance.
 */
function dark_skin_for_google_maps_widget( $widget ) {

	$widget->add_skin( new \MySkins\Skin_Dark_Map( $widget ) );

}
add_action( 'elementor/widget/google_maps/skins_init', 'dark_skin_for_google_maps_widget' );

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
[Elementor Init](https://developers.elementor.com/docs/hooks/elementor-init/)[Save Editor Data](https://developers.elementor.com/docs/hooks/save-editor-data/)
→