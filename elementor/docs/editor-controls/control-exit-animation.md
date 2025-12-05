---
url: https://developers.elementor.com/docs/editor-controls/control-exit-animation/
scraped_at: 2025-10-20T00:59:07.855Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-exit-animation/\#exit-animation-control) Exit Animation Control

Elementor CoreBasic![Exit Animation Control](https://developers.elementor.com/docs/assets/img/controls/control-exit-animation.png)

Elementor exit animation control displays a select box field based on the [Animate.css(opens new window)](https://animate.style/) library. The control allows to set an exit animation effect for an item.

The control is defined in `Control_Exit_Animation` class which extends `Control_Animation` class, which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::EXIT_ANIMATION` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-exit-animation/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | exit\_animation | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `default` | `string` |  | The field default value. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-exit-animation/\#return-value) Return Value

( _`string`_) The selected exit animation class.

## [\#](https://developers.elementor.com/docs/editor-controls/control-exit-animation/\#usage) Usage

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
			'exit_animation',
			[\
				'label' => esc_html__( 'Exit Animation', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::EXIT_ANIMATION,\
				'prefix_class' => 'animated ',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		?>
		<div class="<?php echo esc_attr( $settings['exit_animation'] ); ?>">
			...
		</div>
		<?php
	}

	protected function content_template(): void {
		?>
		<div class="{{ settings.exit_animation }}">
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

←
[Entrance Animation Control](https://developers.elementor.com/docs/editor-controls/control-animation/)[Hover Animation Control](https://developers.elementor.com/docs/editor-controls/control-hover-animation/)
→