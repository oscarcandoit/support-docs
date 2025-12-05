---
url: https://developers.elementor.com/docs/editor-controls/control-choose/
scraped_at: 2025-10-20T00:58:30.430Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-choose/\#choose-control) Choose Control

Elementor CoreBasic![Choose Control](https://developers.elementor.com/docs/assets/img/controls/control-choose.png)

Elementor choose control displays radio buttons styled as groups of buttons with icons for each option.

The control is defined in `Control_Choose` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::CHOOSE` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-choose/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | choose | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `options` | `array` | \[\] | A multi dimensional array containing a `title` and an `icon` for each radio button. |
| `toggle` | `bool` | true | Whether to allow toggle / unset the selection. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-choose/\#return-value) Return Value

( _`string`_) The selected option value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-choose/\#usage) Usage

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
			'text_align',
			[\
				'label' => esc_html__( 'Alignment', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::CHOOSE,\
				'options' => [\
					'left' => [\
						'title' => esc_html__( 'Left', 'textdomain' ),\
						'icon' => 'eicon-text-align-left',\
					],\
					'center' => [\
						'title' => esc_html__( 'Center', 'textdomain' ),\
						'icon' => 'eicon-text-align-center',\
					],\
					'right' => [\
						'title' => esc_html__( 'Right', 'textdomain' ),\
						'icon' => 'eicon-text-align-right',\
					],\
				],\
				'default' => 'center',\
				'toggle' => true,\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'text-align: {{VALUE}};',\
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
[Select2 Control](https://developers.elementor.com/docs/editor-controls/control-select2/)[Visual Choice Control](https://developers.elementor.com/docs/editor-controls/control-visual-choice/)
→