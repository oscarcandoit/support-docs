---
url: https://developers.elementor.com/docs/editor-controls/control-popover-toggle/
scraped_at: 2025-10-20T00:58:22.441Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/\#popover-toggle-control) Popover Toggle Control

Elementor CoreBasic![Popover Toggle Control](https://developers.elementor.com/docs/assets/img/controls/control-popover-toggle.png)

Elementor popover toggle control displays a toggle button to open and close a popover. The control allow you to open a popover with custom controls.

![Acvite Popover Toggle Control](https://developers.elementor.com/docs/assets/img/controls/control-popover-toggle-active.png)

The control is defined in `Control_Popover_Toggle` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::POPOVER_TOGGLE` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | popover\_toggle | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `label_on` | `string` | Custom | The label for the “unchecked” state. |
| `label_off` | `string` | Default | The label for the “checked” state. |
| `return_value` | `string` | yes | The value returned when checked. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/\#return-value) Return Value

( _`string`_) The popover toggle field value, based on `return_value` argument.

## [\#](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/\#usage) Usage

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
			'border_popover_toggle',
			[\
				'label' => esc_html__( 'Border', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,\
				'label_off' => esc_html__( 'Default', 'textdomain' ),\
				'label_on' => esc_html__( 'Custom', 'textdomain' ),\
				'return_value' => 'yes',\
				'default' => 'yes',\
			]
		);

		$this->start_popover();

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_popover();

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

31

32

33

34

35

36

37

38

39

40

←
[Switcher Control](https://developers.elementor.com/docs/editor-controls/control-switcher/)[Select Control](https://developers.elementor.com/docs/editor-controls/control-select/)
→