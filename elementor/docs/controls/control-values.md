---
url: https://developers.elementor.com/docs/controls/control-values/
scraped_at: 2025-10-20T00:56:41.582Z
---

# [\#](https://developers.elementor.com/docs/controls/control-values/\#control-values) Control Values

Elementor CoreAdvanced

You can set custom default values for your control. For example, if you add a new field, you can define its default value.

## [\#](https://developers.elementor.com/docs/controls/control-values/\#control-default-value) Control Default Value

Set the default values to display when initializing the control. Note that some controls return a single value (strings, numbers, bool etc.), while other controls return arrays. Make sure you set a default value with the same data type.

The following will set a default value for a [data control](https://developers.elementor.com/docs/editor-controls/data-controls/), which will return a single value:

```
class Elementor_Test_Control extends \Elementor\Base_Data_Control {

	public function get_type(): string {
		return 'continents-control';
	}

	protected function get_default_settings(): array {
		return [\
			'continents' => [ 'Asia', 'Africa', 'Europe', 'North America', 'South America', 'Australia/Oceania', 'Antarctica', ]\
		];
	}

	public function get_default_value(): string {
		return 'Europe';
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

## [\#](https://developers.elementor.com/docs/controls/control-values/\#overriding-default-values) Overriding Default Values

When controls are used in widgets, you can either use the default value set by the control or override it and set your own default values:

```
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'section_content',
			[\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		// Control default value will be used, i.e. 'Europe'
		$this->add_control(
			'continent_1',
			[\
				'label' => esc_html__( 'Continent 1', 'textdomain' ),\
				'type' => 'continents-control',\
			]
		);

		// Custom default value will be used, i.e. 'North America'
		$this->add_control(
			'continent_2',
			[\
				'label' => esc_html__( 'Continent 2', 'textdomain' ),\
				'type' => 'continents-control',\
				'default' => 'North America',\
			]
		);

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

←
[Control Settings](https://developers.elementor.com/docs/controls/control-settings/)[Control Template](https://developers.elementor.com/docs/controls/control-template/)
→