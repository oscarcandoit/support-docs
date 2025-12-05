---
url: https://developers.elementor.com/docs/editor-controls/control-select/
scraped_at: 2025-10-20T00:58:26.336Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-select/\#select-control) Select Control

Elementor CoreBasic![Select Control](https://developers.elementor.com/docs/assets/img/controls/control-select.png)

Elementor select control displays a simple select box field. It accepts an array in which the `key` is the option `value` and the value is the option name.

The control is defined in `Control_Select` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::SELECT` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-select/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | select | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `options` | `array` |  | An array of `key => value` pairs: `[ 'key' => 'value', ... ]` |
| `groups` | `array` |  | An array of grouped options. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-select/\#return-value) Return Value

( _`string`_) The selected option value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-select/\#usage) Usage

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
			'border_style',
			[\
				'label' => esc_html__( 'Border Style', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::SELECT,\
				'default' => 'solid',\
				'options' => [\
					'' => esc_html__( 'Default', 'textdomain' ),\
					'none' => esc_html__( 'None', 'textdomain' ),\
					'solid'  => esc_html__( 'Solid', 'textdomain' ),\
					'dashed' => esc_html__( 'Dashed', 'textdomain' ),\
					'dotted' => esc_html__( 'Dotted', 'textdomain' ),\
					'double' => esc_html__( 'Double', 'textdomain' ),\
				],\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'border-style: {{VALUE}};',\
				],\
			]
		);

		$this->add_control(
			'custom_animation',
			[\
				'label' => esc_html__( 'Animation', 'textdomain' ),\
				'type' => Controls_Manager::SELECT,\
				'groups' => [\
					[\
						'label' => esc_html__( 'None', 'textdomain' ),\
						'options' => [\
							'' => esc_html__( 'None', 'textdomain' ),\
						],\
					],\
					[\
						'label' => esc_html__( 'Slide', 'textdomain' ),\
						'options' => [\
							'slide-from-right' => esc_html__( 'Slide In Right', 'textdomain' ),\
							'slide-from-left' => esc_html__( 'Slide In Left', 'textdomain' ),\
							'slide-from-top' => esc_html__( 'Slide In Up', 'textdomain' ),\
							'slide-from-bottom' => esc_html__( 'Slide In Down', 'textdomain' ),\
						],\
					],\
					[\
						'label' => esc_html__( 'Zoom', 'textdomain' ),\
						'options' => [\
							'grow' => esc_html__( 'Grow', 'textdomain' ),\
							'shrink' => esc_html__( 'Shrink', 'textdomain' ),\
							'zoom-in' => esc_html__( 'Zoom In', 'textdomain' ),\
							'zoom-out' => esc_html__( 'Zoom Out', 'textdomain' ),\
						],\
					],\
				],\
				'prefix_class' => 'custom-animation-',\
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

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

←
[Popover Toggle Control](https://developers.elementor.com/docs/editor-controls/control-popover-toggle/)[Select2 Control](https://developers.elementor.com/docs/editor-controls/control-select2/)
→