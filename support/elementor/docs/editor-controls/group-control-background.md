---
url: https://developers.elementor.com/docs/editor-controls/group-control-background/
scraped_at: 2025-10-20T01:00:54.060Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/group-control-background/\#background-group-control) Background Group Control

Elementor CoreBasic

Elementor background group control displays input fields to define the background including the background color, background image, background gradient or background video.

The control is defined in `Group_Control_Background` class which extends `Group_Control_Base` class.

When using this group control, the `type` should be set to `Group_Control_Background::get_type()` method.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-background/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | background | The type of the control. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `types` | `array` |  | The specific background types to use. Available types are `classic`, `gradient`, `video` and `slideshow`. Default is an empty array, including all the types. |
| `include` | `array` |  | Include specific controls from the group control. Example: `['image']` |
| `exclude` | `array` |  | Exclude some controls from the group control. Example: `['image']` |
| `fields_options` | `array` |  | A multi dimensional array containing data that overrides control settings. |

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-background/\#return-value) Return Value

( _`array`_) An array containing the background values.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-background/\#usage) Usage

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
			\Elementor\Group_Control_Background::get_type(),
			[\
				'name' => 'background',\
				'types' => [ 'classic', 'gradient', 'video' ],\
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

44

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-background/\#notes) Notes

Video and slideshow types are supported only at section/container level, not widget level.

←
[Border Group Control](https://developers.elementor.com/docs/editor-controls/group-control-border/)[Image Size Group Control](https://developers.elementor.com/docs/editor-controls/group-control-image-size/)
→