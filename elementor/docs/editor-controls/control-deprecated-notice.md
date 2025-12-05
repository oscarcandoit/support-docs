---
url: https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/
scraped_at: 2025-10-20T01:00:23.182Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#deprecated-notice-control) Deprecated Notice Control

Elementor CoreBasic

Elementor Deprecated Notice control displays a pre-formatted notice in the panel, warning that the widget is deprecated and should be replaced.

The control is defined in `Control_Deprecated_Notice` class which extends `Base_UI_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DEPRECATED_NOTICE` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | raw\_html | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `widget` | `string` |  | The widget name. |
| `since` | `string` |  | Plugin version in which the widget was deprecated. |
| `last` | `string` |  | Plugin version in which the widget will be removed. |
| `plugin` | `string` |  | Plugin’s title. |
| `replacement` | `string` |  | Widget replacement. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#return-value) Return Value

This control does not return any value.

## [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#usage) Usage

There are two ways to add deprecation notice to widgets:

### [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#using-the-regular-add-control) Using the Regular Add Control

Add a notice warning that the widget is deprecated using the regular `add_control()` method.

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
			'deprecated_notice',
			[\
				'type' => \Elementor\Controls_Manager::DEPRECATED_NOTICE,\
				'widget' => 'your-old-widget',\
				'since' => '3.10.0',\
				'last' => '3.20.0',\
				'plugin' => 'Your Great Plugin',\
				'replacement' => 'your-new-widget',\
				'content_classes' => 'your-class',\
			]
		);

		// Register the rest of the controls as usual.

		$this->end_controls_section();

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

### [\#](https://developers.elementor.com/docs/editor-controls/control-deprecated-notice/\#using-a-deprecated-notice-method) Using a Deprecated Notice Method

Add a notice warning that the widget is deprecated using the `deprecated_notice()` method.

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

		$this->deprecated_notice(
			'Your Great Plugin',
			'3.10.0',
			'3.20.0',
			'your-new-widget'
		);

		// Register the rest of the controls as usual.

		$this->end_controls_section();

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

←
[Notice Control](https://developers.elementor.com/docs/editor-controls/control-notice/)[Typography Group Control](https://developers.elementor.com/docs/editor-controls/group-control-typography/)
→