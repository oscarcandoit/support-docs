---
url: https://developers.elementor.com/docs/editor-controls/control-dimensions/
scraped_at: 2025-10-20T00:59:47.027Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-dimensions/\#dimensions-control) Dimensions Control

Elementor CoreBasic![Dimensions Control](https://developers.elementor.com/docs/assets/img/controls/control-dimensions.png)

Elementor dimensions control displays a input fields for top, right, bottom, left and the option to link them together. The dimensions control can optionally have a number of unit types ( `size_units`) for the user to choose from. The control also accepts a `range` argument that allows you to set the `min`, `max` and `step` values per unit type.

![Dimensions Control](https://developers.elementor.com/docs/assets/img/controls/control-dimensions2.png)

The control is defined in `Control_Dimensions` class which extends `Control_Base_Units` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DIMENSIONS` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-dimensions/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | dimensions | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `size_units` | `array` | \[ 'px' \] | An array of available CSS units like `px`, `em`, `rem`, `%`, `deg`, `vh` or `custom`. |
| `default` | `array` |  | Default slider value.<br> <br>- **$top** ( `int`) Initial size of the top dimension.<br>- **$right** ( `int`) Initial size of the right dimension.<br>- **$bottom** ( `int`) Initial size of the bottom dimension.<br>- **$left** ( `int`) Initial size of the left dimension.<br>- **$unit** ( `string`) Initial size of the CSS unit type.<br>- **$isLinked** ( `bool`) Whether to link all the values together or not. |
| `placeholder` | `array` |  | The field placeholder that appears when the field has no values.<br> <br>- **$top** ( `int`) placeholder of the top dimension.<br>- **$right** ( `int`) placeholder of the right dimension.<br>- **$bottom** ( `int`) placeholder of the bottom dimension.<br>- **$left** ( `int`) placeholder of the left dimension. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-dimensions/\#return-value) Return Value

```
[\
	'top' => '',\
	'right' => '',\
	'bottom' => '',\
	'left' => '',\
	'unit' => '',\
	'isLinked' => '',\
]

```

1

2

3

4

5

6

7

8

( _`array`_) An array containing the dimension values:

- **$top** ( _`int`_) Top dimension.
- **$right** ( _`int`_) Right dimension.
- **$bottom** ( _`int`_) Bottom dimension.
- **$left** ( _`int`_) Left dimension.
- **$unit** ( _`string`_) The CSS unit type.
- **$isLinked** ( _`bool`_) Whether to link all the values together or not.

## [\#](https://developers.elementor.com/docs/editor-controls/control-dimensions/\#usage) Usage

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
			'margin',
			[\
				'label' => esc_html__( 'Margin', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::DIMENSIONS,\
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],\
				'default' => [\
					'top' => 2,\
					'right' => 0,\
					'bottom' => 2,\
					'left' => 0,\
					'unit' => 'em',\
					'isLinked' => false,\
				],\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',\
				],\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		?>
		<div class="your-class">
			...
		</div>
		<?php
	}

	protected function content_template(): void {
		?>
		<div class="your-class">
			...
		</div>
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

←
[Slider Control](https://developers.elementor.com/docs/editor-controls/control-slider/)[Heading Control](https://developers.elementor.com/docs/editor-controls/control-heading/)
→