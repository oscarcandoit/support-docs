---
url: https://developers.elementor.com/docs/editor-controls/control-color/
scraped_at: 2025-10-20T00:58:38.623Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-color/\#color-control) Color Control

Elementor CoreBasic![Color Control](https://developers.elementor.com/docs/assets/img/controls/control-color.png)

Elementor color control displays a color picker field with an alpha slider. It includes a customizable color palette that can be preset by the user.

The control is defined in `Control_Color` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::COLOR` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-color/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | color | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `alpha` | `bool` | true | Whether to allow alpha channel. |
| `default` | `string` |  | Default color in RGB, RGBA, or HEX format. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-color/\#return-value) Return Value

( _`string`_) The color value in RGB, RGBA, or HEX format.

## [\#](https://developers.elementor.com/docs/editor-controls/control-color/\#usage) Usage

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
			'text_color',
			[\
				'label' => esc_html__( 'Text Color', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::COLOR,\
				'selectors' => [\
					'{{WRAPPER}} .your-class' => 'color: {{VALUE}}',\
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

## [\#](https://developers.elementor.com/docs/editor-controls/control-color/\#notes) Notes

Learn how to use [Global Colors](https://developers.elementor.com/docs/editor-controls/global-style/), set in the [Site Settings](https://developers.elementor.com/docs/editor/site-settings-panel/) panel, on your color controls.

←
[Visual Choice Control](https://developers.elementor.com/docs/editor-controls/control-visual-choice/)[Font Control](https://developers.elementor.com/docs/editor-controls/control-font/)
→