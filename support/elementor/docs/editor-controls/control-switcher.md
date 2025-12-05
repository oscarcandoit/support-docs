---
url: https://developers.elementor.com/docs/editor-controls/control-switcher/
scraped_at: 2025-10-20T00:58:19.359Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-switcher/\#switcher-control) Switcher Control

Elementor CoreBasic![Switcher Control](https://developers.elementor.com/docs/assets/img/controls/control-switcher.png)

Elementor switcher control displays an on/off switcher. It's basically a fancy representation of checkboxes.

![Checked Switcher Control](https://developers.elementor.com/docs/assets/img/controls/control-switcher-checked.png)

The control is defined in `Control_Switcher` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SWITCHER` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-switcher/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | switcher | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `label_on` | `string` | Yes | The label for the “unchecked” state. |
| `label_off` | `string` | No | The label for the “checked” state. |
| `return_value` | `string` | yes | The value returned when checked. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-switcher/\#return-value) Return Value

( _`string`_) The switcher field value, based on `return_value` argument.

## [\#](https://developers.elementor.com/docs/editor-controls/control-switcher/\#usage) Usage

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
			'show_title',
			[\
				'label' => esc_html__( 'Show Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::SWITCHER,\
				'label_on' => esc_html__( 'Show', 'textdomain' ),\
				'label_off' => esc_html__( 'Hide', 'textdomain' ),\
				'return_value' => 'yes',\
				'default' => 'yes',\
			]
		);

		$this->add_control(
			'title',
			[\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
				'default' => esc_html__( 'Default title', 'textdomain' ),\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		if ( 'yes' === $settings['show_title'] ) {
			echo '<h2>' . $settings['title'] . '</h2>';
		}
	}

	protected function content_template(): void {
		?>
		<# if ( 'yes' === settings.show_title ) { #>
			<h2>{{{ settings.title }}}</h2>
		<# } #>
		<?php
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

41

42

43

44

45

46

47

48

49

50

51

52

53

54

←
[Hidden Control](https://developers.elementor.com/docs/editor-controls/control-hidden/)[Popover Toggle Control](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/)
→