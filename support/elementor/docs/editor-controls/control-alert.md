---
url: https://developers.elementor.com/docs/editor-controls/control-alert/
scraped_at: 2025-10-20T01:00:13.979Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-alert/\#alert-control) Alert Control

Elementor CoreBasic![Alert Control](https://developers.elementor.com/docs/assets/img/controls/control-alert.png)

Elementor alert control displays a four types of alerts in the panel based on the severity of the message: info, success, warning and danger.

The control is defined in `Control_Alert` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::ALERT` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-alert/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | alert | The type of the control. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `alert_type` | `string` | info | The type of the alert. Available values are `info`, `success`, `warning` and `danger`. |
| `heading` | `string` |  | The heading that appears above of the alert. |
| `content` | `string` |  | The content of the alert. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-alert/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-alert/\#usage) Usage

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
			'custom_panel_alert',
			[\
				'type' => \Elementor\Controls_Manager::ALERT,\
				'alert_type' => 'warning',\
				'heading' => esc_html__( 'Custom Alert', 'textdomain' ),\
				'content' => esc_html__( 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'textdomain' ) . ' <a href="">' . esc_html__( 'Learn more', 'textdomain' ) . '</a>',\
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
[Divider Control](https://developers.elementor.com/docs/editor-controls/control-divider/)[Notice Control](https://developers.elementor.com/docs/editor-controls/control-notice/)
→