---
url: https://developers.elementor.com/docs/editor-controls/control-heading/
scraped_at: 2025-10-20T00:59:50.200Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-heading/\#heading-control) Heading Control

Elementor CoreBasic

Elementor heading control displays a text heading between controls in the panel.

The control is defined in `Control_Heading` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::HEADING` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-heading/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | heading | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-heading/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-heading/\#usage) Usage

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
			'more_options',
			[\
				'label' => esc_html__( 'Additional Options', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::HEADING,\
				'separator' => 'before',\
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

←
[Dimensions Control](https://developers.elementor.com/docs/editor-controls/control-dimensions/)[Raw HTML Control](https://developers.elementor.com/docs/editor-controls/control-raw-html/)
→