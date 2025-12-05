---
url: https://developers.elementor.com/docs/editor-controls/group-control-css-filter/
scraped_at: 2025-10-20T01:01:03.006Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/\#css-filter-group-control) CSS Filter Group Control

Elementor CoreBasic

Elementor CSS filter group control displays sliders fields to define the values of different CSS filters including blur, brightens, contrast, saturation or hue.

The control is defined in `Group_Control_Css_Filter` class which extends `Group_Control_Base` class.

When using this group control, the `type` should be set to `Group_Control_Typography::get_type()` method.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | typography | The type of the control. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `exclude` | `array` |  | Exclude some controls from the group control. Example: `['saturate']` |

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/\#return-value) Return Value

( _`array`_) An array containing the CSS filter values.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/\#usage) Usage

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

		$this->add_group_control(
			\Elementor\Group_Control_Css_Filter::get_type(),
			[\
				'name' => 'custom_css_filters',\
				'selector' => '{{WRAPPER}} .your-class',\
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

←
[Image Size Group Control](https://developers.elementor.com/docs/editor-controls/group-control-image-size/)[Labels and Description](https://developers.elementor.com/docs/editor-controls/labels-description/)
→