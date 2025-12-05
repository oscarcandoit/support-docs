---
url: https://developers.elementor.com/docs/editor-controls/control-slider/
scraped_at: 2025-10-20T00:59:43.063Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-slider/\#slider-control) Slider Control

Elementor CoreBasic![Slider Control](https://developers.elementor.com/docs/assets/img/controls/control-slider.png)

Elementor slider control displays a draggable range slider. The slider control can optionally have a number of unit types ( `size_units`) for the user to choose from. The control also accepts a `range` argument that allows you to set the `min`, `max` and `step` values per unit type.

![Slider Control](https://developers.elementor.com/docs/assets/img/controls/control-slider2.png)

The control is defined in `Control_Slider` class which extends `Control_Base_Units` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SLIDER` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-slider/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | slider | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `size_units` | `array` | \[ 'px' \] | An array of available CSS units like `px`, `em`, `rem`, `%`, `deg`, `vh` or `custom`. |
| `range` | `array` |  | An array of ranges for each register size.<br> <br>- **$min** ( `int`) The minimum value of range.<br>- **$max** ( `int`) The maximum value of range.<br>- **$step** ( `int`) The intervals value that will be incremented or decremented when using the controls’ spinners. |
| `default` | `array` |  | Default slider value.<br> <br>- **$unit** ( `string`) Initial unit of the slider.<br>- **$size** ( `int`) Initial size of the slider. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-slider/\#return-value) Return Value

```
[\
	'unit' => '',\
	'size' => '',\
]

```

1

2

3

4

( _`array`_) An array containing the dimension values:

- **$unit** ( _`string`_) Selected unit.
- **$size** ( _`int`_) Selected size.

## [\#](https://developers.elementor.com/docs/editor-controls/control-slider/\#usage) Usage

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
			'width',
			[\
				'label' => esc_html__( 'Width', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::SLIDER,\
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],\
				'range' => [\
					'px' => [\
						'min' => 0,\
						'max' => 1000,\
						'step' => 5,\
					],\
					'%' => [\
						'min' => 0,\
						'max' => 100,\
					],\
				],\
				'default' => [\
					'unit' => '%',\
					'size' => 50,\
				],\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'width: {{SIZE}}{{UNIT}};',\
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

56

57

58

59

60

61

62

←
[Box Shadow Control](https://developers.elementor.com/docs/editor-controls/control-box-shadow/)[Dimensions Control](https://developers.elementor.com/docs/editor-controls/control-dimensions/)
→