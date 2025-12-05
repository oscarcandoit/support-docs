---
url: https://developers.elementor.com/docs/editor-controls/control-hidden/
scraped_at: 2025-10-20T00:58:15.490Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-hidden/\#hidden-control) Hidden Control

Elementor CoreBasic

Elementor hidden control adds a hidden input field to the panel. It can be used to add data without a visual presentation in the panel. This means that Elementor users do not have access to this control.

The control is defined in `Control_Hidden` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::HIDDEN` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-hidden/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | hidden | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. But in this case it won't be displayed. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-hidden/\#return-value) Return Value

( _`string`_) The hidden field value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-hidden/\#usage) Usage

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
			'view',
			[\
				'label' => esc_html__( 'View', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::HIDDEN,\
				'default' => 'traditional',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		?>
		<!-- <?php echo $settings['view']; ?> -->
		<?php
	}

	protected function content_template(): void {
		?>
		<!-- {{{ settings.view }}} -->
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

←
[Code Control](https://developers.elementor.com/docs/editor-controls/control-code/)[Switcher Control](https://developers.elementor.com/docs/editor-controls/control-switcher/)
→