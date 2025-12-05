---
url: https://developers.elementor.com/docs/editor-controls/control-code/
scraped_at: 2025-10-20T00:58:07.080Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-code/\#code-control) Code Control

Elementor CoreBasic![Code Control](https://developers.elementor.com/docs/assets/img/controls/control-code.png)

Elementor code control displays a code editor textarea based on [Ace editor(opens new window)](https://ace.c9.io/). It accepts a language argument to define the programming `language` and includes a syntax highlighter for highlighting the code.

The control is defined in `Control_Code` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::CODE` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-code/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | code | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `language` | `string` | html | Any [language supported by Ace editor](https://ace.c9.io/build/kitchen-sink.html). |
| `rows` | `int` | 10 | Number of rows. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-code/\#return-value) Return Value

( _`string`_) The code field value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-code/\#usage) Usage

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
			'custom_html',
			[\
				'label' => esc_html__( 'Custom HTML', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::CODE,\
				'language' => 'html',\
				'rows' => 20,\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['custom_html'] ) ) {
			return;
		}
		?>
		<div class="your-class">
			<?php echo $settings['custom_html']; ?>
		</div>
		<?php

	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.custom_html ) {
			return;
		}
		#>
		<div class="your-class">
			{{{ settings.custom_html }}}
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
[WYSIWYG Control](https://developers.elementor.com/docs/editor-controls/control-wysiwyg/)[Hidden Control](https://developers.elementor.com/docs/editor-controls/control-hidden/)
→