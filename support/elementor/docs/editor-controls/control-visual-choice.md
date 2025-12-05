---
url: https://developers.elementor.com/docs/editor-controls/control-visual-choice/
scraped_at: 2025-10-20T00:58:34.422Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-visual-choice/\#visual-choice-control) Visual Choice Control

Elementor CoreBasic![Visual Choice Control](https://developers.elementor.com/docs/assets/img/controls/control-visual-choice.png)

Elementor visual choice control displays radio buttons styled as groups of buttons with an image for each option.

The control is defined in `Control_Visual_Choice` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::VISUAL_CHOICE` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-visual-choice/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | visual\_choice | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `options` | `array` | \[\] | A multi dimensional array containing a `title` and an `image` for each radio button. |
| `columns` | `number` | 1 | The number of columns in a grid layout. |
| `toggle` | `bool` | true | Whether to allow toggle / unset the selection. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-visual-choice/\#return-value) Return Value

( _`string`_) The selected option value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-visual-choice/\#usage) Usage

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
			'structure',
			[\
				'label' => esc_html__( 'Structure', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::VISUAL_CHOICE,\
				'label_block' => true,\
				'options' => [\
					'grid-3' => [\
						'title' => esc_attr__( 'Grid: 3 columns.', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/grid-3.svg', __FILE__ ),\
					],\
					'masonry' => [\
						'title' => esc_attr__( 'Masonry: arbitrary order', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/masonry.svg', __FILE__ ),\
					],\
					'stacked' => [\
						'title' => esc_attr__( 'Stacked: Single column.', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/stacked.svg', __FILE__ ),\
					],\
					'focus' => [\
						'title' => esc_attr__( 'Focus: Text only.', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/focus.svg', __FILE__ ),\
					],\
					'grid-2' => [\
						'title' => esc_attr__( 'Grid: 2 columns.', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/grid2.svg', __FILE__ ),\
					],\
					'stretch' => [\
						'title' => esc_attr__( 'Stretch: fit available width.', 'textdomain' ),\
						'image' => plugins_url( 'assets/img/stretch.svg', __FILE__ ),\
					]\
				],\
				'default' => 'masonry',\
				'columns' => 2,\
				'prefix_class' => 'some-layout-',\
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

←
[Choose Control](https://developers.elementor.com/docs/editor-controls/control-choose/)[Color Control](https://developers.elementor.com/docs/editor-controls/control-color/)
→