---
url: https://developers.elementor.com/docs/hooks/parse-element-css/
scraped_at: 2025-10-20T01:03:34.214Z
---

# [\#](https://developers.elementor.com/docs/hooks/parse-element-css/\#parse-element-css) Parse Element CSS

Elementor CoreAdvanced

Elementor has a hook that lets developers add new CSS rules to the element before the CSS file is generated.

## [\#](https://developers.elementor.com/docs/hooks/parse-element-css/\#hook-details) Hook Details

- **Hook Type:** Action Hook
- **Hook Name:** `elementor/element/parse_css`
- **Affects:** Frontend

## [\#](https://developers.elementor.com/docs/hooks/parse-element-css/\#hook-arguments) Hook Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `post_css` | _`\Elementor\Core\Files\CSS\Post`_ | The post CSS file instance |
| `element` | _`\Elementor\Element_Base`_ | The element instance |

## [\#](https://developers.elementor.com/docs/hooks/parse-element-css/\#example) Example

Let's add a simple CSS rule to the generated CSS files:

```
/**
 * Add custom CSS rule.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Files\CSS\Post $post_css_file The post CSS file instance.
 * @param \Elementor\Element_Base        $element       The element instance.
 */
function add_custom_css_rule_to_the_css_file( $post_css_file, $element ) {

	$post_css_file->get_stylesheet()->add_rules(
		'.my-selector',
		[\
			'width' => '50px',\
			'height' => '50px',\
		]
	);

}
add_action(	'elementor/element/parse_css', 'add_custom_css_rule_to_the_css_file', 10, 2 );

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

Now let's add a CSS rule with a unique elementor selector:

```
/**
 * parse element CSS.
 *
 * @since 1.0.0
 * @param \Elementor\Core\Files\CSS\Post $post_css_file The post CSS file instance.
 * @param \Elementor\Element_Base        $element       The element instance.
 */
function add_custom_rules_to_css_file( $post_css_file, $element ) {

	$item_width = some_get_theme_config_function( 'item_width' );
	$item_height = some_get_theme_config_function( 'item_height' );

	$post_css_file->get_stylesheet()->add_rules(
		$element->get_unique_selector(),
		[\
			'width' => $item_width . 'px',\
			'height' => $item_height . 'px',\
		]
	);

}
add_action(	'elementor/element/parse_css', 'add_custom_rules_to_css_file', 10, 2 );

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

←
[Save Editor Data](https://developers.elementor.com/docs/hooks/save-editor-data/)[Custom Query Filter](https://developers.elementor.com/docs/hooks/custom-query-filter/)
→