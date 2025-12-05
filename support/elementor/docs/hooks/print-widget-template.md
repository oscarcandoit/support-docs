---
url: https://developers.elementor.com/docs/hooks/print-widget-template/
scraped_at: 2025-10-20T01:03:06.157Z
---

# [\#](https://developers.elementor.com/docs/hooks/print-widget-template/\#print-widget-template) Print Widget Template

Elementor CoreIntermediate

Elementor has a hook that lets developers change a widget's JavaScript template in the [preview](https://developers.elementor.com/docs/editor/elementor-preview/) area.

## [\#](https://developers.elementor.com/docs/hooks/print-widget-template/\#hook-details) Hook Details

- **Hook Type:** Filter Hook
- **Hook Name:** `elementor/{$element_type}/print_template`
- **Notes:** The dynamic portion of the hook name, `$element_type`, refers to `widget`.
- **Affects:** Preview

## [\#](https://developers.elementor.com/docs/hooks/print-widget-template/\#hook-arguments) Hook Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `template` | _`string`_ | The JavaScript template output |
| `widget` | _`\Elementor\Widget_Base`_ | The widget instance |

## [\#](https://developers.elementor.com/docs/hooks/print-widget-template/\#example) Example

```
/**
 * Update the heading widget JS template in Elementor preview.
 *
 * Adds an icon to all the external links.
 *
 * @since 1.0.0
 * @param string                 $template The JavaScript template output.
 * @param \Elementor\Widget_Base $widget   The widget instance.
 */
function change_heading_js_template( $template, $widget ) {

	if ( 'heading' === $widget->get_name() ) {
		$old_template = '<a href="\' + settings.link.url + \'">\' + title_html + \'</a>';
		$new_template = '<a href="\' + settings.link.url + \'">\' + title_html + ( settings.link.is_external ? \'<i class="fa fa-external-link" aria-hidden="true"></i>\' : \'\' ) + \'</a>';
		$template = str_replace( $old_template, $new_template, $template );
	}

	return $template;

}
add_filter( 'elementor/widget/print_template', 'change_heading_js_template', 10, 2 );

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

The code above is only an example. We do not recommend using `str_replace` on templates, because the template may be changed and the `str_replace` will fail. Instead, edit the entire original template for your needs.

## [\#](https://developers.elementor.com/docs/hooks/print-widget-template/\#notes) Notes

To change the widget [content in the frontend](https://developers.elementor.com/docs/hooks/render-widget-content/) see `elementor/widget/render_content`.

←
[Render Widget Content](https://developers.elementor.com/docs/hooks/render-widget-content/)[Print Google Fonts](https://developers.elementor.com/docs/hooks/print-google-fonts/)
→