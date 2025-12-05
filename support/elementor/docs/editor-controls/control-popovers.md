---
url: https://developers.elementor.com/docs/editor-controls/control-popovers/
scraped_at: 2025-10-20T00:57:45.194Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-popovers/\#control-popovers) Control Popovers

Elementor CoreBasicElementor CoreBasic

Control popovers are UI wrappers used to group controls and display them in popups, which will appear over the panel. Using popovers can help you can declutter the panel by moving controls to popovers and displaying them only when the user chooses to see them. An excellent example of this is the typography control. It contains a toggle, and only if the user chooses to change the default typography settings will the extra controls appear in a popover. Popovers are created using two methods: `start_popover()` creates a new popover and `end_popover()` closes the popover.

## [\#](https://developers.elementor.com/docs/editor-controls/control-popovers/\#control-popovers-structure) Control Popovers Structure

Use the following code to add a new control popover:

```
$this->add_control(
	'popover-toggle',
	[\
		'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,\
		'label' => esc_html__( 'Box', 'textdomain' ),\
		'label_off' => esc_html__( 'Default', 'textdomain' ),\
		'label_on' => esc_html__( 'Custom', 'textdomain' ),\
		'return_value' => 'yes',\
	]
);

$this->start_popover();

$this->end_popover();

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

## [\#](https://developers.elementor.com/docs/editor-controls/control-popovers/\#control-parameters) Control Parameters

Each control has the following key parameters:

- **Popover Name** `(string)` – Unique id used in the code.
- **Popover Setting** `(array)` – Extra popover parameters.

  - **Label** `(string)` – Label displayed to the user in the panel.
  - **Type** `(string)` – The control type.
  - **Label Off** `(string)` – Label displayed when default settings are set.
  - **Label On** `(string)` – Label displayed when custom settings are set.
  - **Return Value** `(string)` – String returned when custom settings are set.
  - **Conditions** `(array)` – Control display conditions.

## [\#](https://developers.elementor.com/docs/editor-controls/control-popovers/\#examples) Examples

### [\#](https://developers.elementor.com/docs/editor-controls/control-popovers/\#control-popovers-2) Control Popovers

In the example below, we'll group controls into two popovers - "Normal" tab and "Hover" tab:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'style_section',
			[\
				'label' => esc_html__( 'Style Section', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,\
			]
		);

		$this->add_control(
			'popover-toggle',
			[\
				'label' => esc_html__( 'Box', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::POPOVER_TOGGLE,\
				'label_off' => esc_html__( 'Default', 'textdomain' ),\
				'label_on' => esc_html__( 'Custom', 'textdomain' ),\
				'return_value' => 'yes',\
			]
		);

		$this->start_popover();

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_popover();

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

34

35

36

37

38

←
[Control Section](https://developers.elementor.com/docs/editor-controls/control-section/)[Control Tabs](https://developers.elementor.com/docs/editor-controls/control-tabs/)
→