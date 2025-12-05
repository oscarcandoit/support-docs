---
url: https://developers.elementor.com/docs/editor-controls/control-button/
scraped_at: 2025-10-20T00:59:59.210Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-button/\#button-control) Button Control

Elementor CoreBasic

Elementor button control displays a button in the panel that can trigger an event.

The control is defined in `Control_Button` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::BUTTON` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-button/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | button | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `text` | `string` |  | The button text. |
| `button_type` | `string` | default | The button type. Available values are `default`, `info`, `success`, `warning` and `danger`. |
| `event` | `string` |  | The event the button will trigger. The event will be triggered via `elementor.channels.editor.on( event )`. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-button/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-button/\#usage) Usage

```
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'style_section',
			[\
				'label' => esc_html__( 'Style', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,\
			]
		);

		$this->add_control(
			'delete_content',
			[\
				'label' => esc_html__( 'Delete Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::BUTTON,\
				'separator' => 'before',\
				'button_type' => 'success',\
				'text' => esc_html__( 'Delete', 'textdomain' ),\
				'event' => 'namespace:editor:delete',\
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

29

30

←
[Raw HTML Control](https://developers.elementor.com/docs/editor-controls/control-raw-html/)[Divider Control](https://developers.elementor.com/docs/editor-controls/control-divider/)
→