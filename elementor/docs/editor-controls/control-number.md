---
url: https://developers.elementor.com/docs/editor-controls/control-number/
scraped_at: 2025-10-20T00:57:57.457Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-number/\#number-control) Number Control

Elementor CoreBasic![Number Control](https://developers.elementor.com/docs/assets/img/controls/control-number.png)

Elementor number control displays a simple number input field with the option to limit the min and max values and define the step when changing the value.

The control is defined in `Control_Number` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::NUMBER` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-number/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | number | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `min` | `string` |  | The minimum number (only affects the spinners, the user can still type a lower value). |
| `max` | `string` |  | The maximum number (only affects the spinners, the user can still type a higher value). |
| `step` | `string` |  | The intervals value that will be incremented or decremented when using the controls’ spinners. Default is empty, the value will be incremented by 1. |
| `placeholder` | `string` |  | The field placeholder that appears when the field has no values. |
| `title` | `string` |  | The field title that appears on mouse hover. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-number/\#return-value) Return Value

( _`string`_) The number field value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-number/\#usage) Usage

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
			'price',
			[\
				'label' => esc_html__( 'Price', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::NUMBER,\
				'min' => 5,\
				'max' => 100,\
				'step' => 5,\
				'default' => 10,\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['price'] ) ) {
			return;
		}
		?>
		<span class="price">
			<?php echo $settings['price']; ?>
		</span>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.price ) {
			return;
		}
		#>
		<span class="price">
			{{{ settings.price }}}
		</span>
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

55

56

←
[Text Control](https://developers.elementor.com/docs/editor-controls/control-text/)[Textarea Control](https://developers.elementor.com/docs/editor-controls/control-textarea/)
→