---
url: https://developers.elementor.com/docs/editor-controls/control-font/
scraped_at: 2025-10-20T00:58:42.814Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-font/\#font-control) Font Control

Elementor CoreBasic![Font Control](https://developers.elementor.com/docs/assets/img/controls/control-font.png)

Elementor font control displays a font select box field based on [Google Fonts(opens new window)](https://fonts.google.com/) library. The control allows you to set a list of fonts.

The control is defined in `Control_Font` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::FONT` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-font/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | font | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `options` | `array` |  | An associative array of available fonts. `[ 'Font Name' => 'family-name', ... ]` |
| `groups` | `array` |  | An associative array of available font groups. |
| `default` | `string` |  | Default font name. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-font/\#return-value) Return Value

( _`string`_) The selected font-family name.

## [\#](https://developers.elementor.com/docs/editor-controls/control-font/\#usage) Usage

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
			'font_family',
			[\
				'label' => esc_html__( 'Font Family', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::FONT,\
				'default' => "'Open Sans', sans-serif",\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'font-family: {{VALUE}}',\
				],\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		?>
		<h2 class="your-class">
			...
		</h2>
		<?php

	}

	protected function content_template(): void {
		?>
		<h2 class="your-class">
			...
		</h2>
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

←
[Color Control](https://developers.elementor.com/docs/editor-controls/control-color/)[Date Time Control](https://developers.elementor.com/docs/editor-controls/control-date-time/)
→