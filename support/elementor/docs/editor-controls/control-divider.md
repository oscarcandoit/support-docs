---
url: https://developers.elementor.com/docs/editor-controls/control-divider/
scraped_at: 2025-10-20T01:00:04.415Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-divider/\#divider-control) Divider Control

Elementor CoreBasic

Elementor divider control displays a separator between controls.

The control is defined in `Control_Divider` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DIVIDER` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-divider/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | divider | The type of the control. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-divider/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-divider/\#usage) Usage

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
			'hr',
			[\
				'type' => \Elementor\Controls_Manager::DIVIDER,\
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

←
[Button Control](https://developers.elementor.com/docs/editor-controls/control-button/)[Alert Control](https://developers.elementor.com/docs/editor-controls/control-alert/)
→