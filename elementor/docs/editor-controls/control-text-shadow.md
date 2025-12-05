---
url: https://developers.elementor.com/docs/editor-controls/control-text-shadow/
scraped_at: 2025-10-20T00:59:33.966Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-text-shadow/\#text-shadow-control) Text Shadow Control

Elementor CoreBasic

Elementor Text Shadow control displays an input fields for horizontal shadow, vertical shadow, shadow blur and shadow color.

The control is defined in `Control_Text_Shadow` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::TEXT_SHADOW` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-text-shadow/\#arguments) Arguments

## [\#](https://developers.elementor.com/docs/editor-controls/control-text-shadow/\#return-value) Return Value

```
[\
	'horizontal' => 0,\
	'vertical' => 0,\
	'blur' => 10,\
	'color' => 'rgba(0,0,0,0.3)',\
];

```

1

2

3

4

5

6

( _`array`_) An array containing text shadow data:

- **$horizontal** ( _`int`_) Text shadow horizontal size.
- **$vertical** ( _`int`_) Text shadow vertical size.
- **$blur** ( _`int`_) Text shadow blur.
- **$color** ( _`string`_) Text shadow color.

## [\#](https://developers.elementor.com/docs/editor-controls/control-text-shadow/\#usage) Usage

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
			'custom_text_shadow',
			[\
				'label' => esc_html__( 'Text Shadow', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT_SHADOW,\
				'selectors' => [\
					'{{SELECTOR}}' => 'text-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{COLOR}};',\
				],\
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

## [\#](https://developers.elementor.com/docs/editor-controls/control-text-shadow/\#notes) Notes

Please not that developers should not use this control rather the [Text Shadow Group Control](https://developers.elementor.com/docs/editor-controls/group-control-text-shadow/).

←
[Icons Control](https://developers.elementor.com/docs/editor-controls/control-icons/)[Box Shadow Control](https://developers.elementor.com/docs/editor-controls/control-box-shadow/)
→