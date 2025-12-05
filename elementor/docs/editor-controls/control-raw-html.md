---
url: https://developers.elementor.com/docs/editor-controls/control-raw-html/
scraped_at: 2025-10-20T00:59:55.713Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-raw-html/\#raw-html-control) Raw HTML Control

Elementor CoreBasic

Elementor raw HTML control displays an HTML content in the panel.

The control is defined in `Control_Raw_Html` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::RAW_HTML` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-raw-html/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | raw\_html | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `raw` | `string` |  | The HTML markup. |
| `content_classes` | `string` |  | CSS classes to add to the control wrapper. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-raw-html/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-raw-html/\#usage) Usage

```
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		$this->add_control(
			'important_note',
			[\
				'label' => esc_html__( 'Important Note', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::RAW_HTML,\
				'raw' => esc_html__( 'A very important message to show in the panel.', 'textdomain' ),\
				'content_classes' => 'your-class',\
			]
		);

		$this->end_controls_section();

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

←
[Heading Control](https://developers.elementor.com/docs/editor-controls/control-heading/)[Button Control](https://developers.elementor.com/docs/editor-controls/control-button/)
→