---
url: https://developers.elementor.com/docs/editor-controls/selectors-dictionary/
scraped_at: 2025-10-20T01:01:17.545Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#selectors-dictionary) Selectors Dictionary

Elementor CoreAdvanced

In some cases, you may need to update the values of a specific control. But, doing this might break existing sites which store the old values in the database. For these cases, Elementor offers a dictionary that helps developers transform old values into new values before using them in the code.

## [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#selectors-dictionary-argument) Selectors Dictionary Argument

Use the `selectors_dictionary` argument to replace old values with the new ones.

```
$this->add_control(
	'text-align',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SELECT,\
		'selectors_dictionary' => [\
			'old-value-1' => 'new-value-1',\
			'old-value-2' => 'new-value-2',\
		],\
	]
);

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

## [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#selectors-dictionary-examples) Selectors Dictionary Examples

### [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#dictionary-with-choose-control) Dictionary with Choose Control

Let's see how we can update control values and migrate the control from " **Physical CSS Properties**" to " [Logical CSS Properties(opens new window)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)". We want to replace `text-align: right|center|left;` with `text-align: start|center|end;`.

The original control saved one of three values in the database - `right`, `center` or `left`:

```
$this->add_control(
	'text-align',
	[\
		'label' => esc_html__( 'Alignment', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::CHOOSE,\
		'default' => 'center',\
		'options' => [\
			'left' => [\
				'title' => esc_html__( 'Left', 'textdomain' ),\
				'icon' => 'eicon-text-align-left',\
			],\
			'center' => [\
				'title' => esc_html__( 'Center', 'textdomain' ),\
				'icon' => 'eicon-text-align-center',\
			],\
			'right' => [\
				'title' => esc_html__( 'Right', 'textdomain' ),\
				'icon' => 'eicon-text-align-right',\
			],\
		],\
		'selectors' => [\
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}};',\
		],\
	]
);

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

Now we want to swap out these values for the values - `start`, `center` or `end`. But, for backward compatibility, we have to offer a solution taking into account the old values saved in the database.

We can use `selectors_dictionary` to solve this issue:

```
$this->add_control(
	'text-align',
	[\
		'label' => esc_html__( 'Alignment', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::CHOOSE,\
		'default' => 'center',\
		'options' => [\
			'end' => [\
				'title' => esc_html__( 'End', 'textdomain' ),\
				'icon' => 'eicon-text-align-' . ( is_rtl() ? 'right' : 'left' ),\
			],\
			'center' => [\
				'title' => esc_html__( 'Center', 'textdomain' ),\
				'icon' => 'eicon-text-align-center',\
			],\
			'start' => [\
				'title' => esc_html__( 'Start', 'textdomain' ),\
				'icon' => 'eicon-text-align-' . ( is_rtl() ? 'left' : 'right' ),\
			],\
		],\
		'selectors_dictionary' => [\
			'left' => is_rtl() ? 'end' : 'start',\
			'right' => is_rtl() ? 'start' : 'end',\
		],\
		'selectors' => [\
			'{{WRAPPER}} .some-class' => 'text-align: {{VALUE}};',\
		],\
	]
);

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

### [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#dictionary-with-select-control) Dictionary with Select Control

Let's see how we can use `selectors_dictionary` with a select control. In this case, a popular addon used to save `border-style` values using prefix classes. The addon had 5 CSS classes for each border-style type:

```
$this->add_control(
	'border_style',
	[\
		'label' => esc_html__( 'Border Style', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SELECT,\
		'options' => [\
			'' => esc_html__( 'Default', 'textdomain' ),\
			'1' => esc_html__( 'None', 'textdomain' ),\
			'2' => esc_html__( 'Solid', 'textdomain' ),\
			'3' => esc_html__( 'Double', 'textdomain' ),\
			'4' => esc_html__( 'Dotted', 'textdomain' ),\
			'5' => esc_html__( 'Dashed', 'textdomain' ),\
		],\
		'prefix_class' => 'border-style-',\
	]
);

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

To fix this, and remove all the unnecessary CSS classes, we can use `selectors_dictionary` as follows:

```
$this->add_control(
	'border_style',
	[\
		'label' => esc_html__( 'Border Style', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SELECT,\
		'options' => [\
			'' => esc_html__( 'Default', 'textdomain' ),\
			'1' => esc_html__( 'None', 'textdomain' ),\
			'2' => esc_html__( 'Solid', 'textdomain' ),\
			'3' => esc_html__( 'Double', 'textdomain' ),\
			'4' => esc_html__( 'Dotted', 'textdomain' ),\
			'5' => esc_html__( 'Dashed', 'textdomain' ),\
		],\
		'selectors_dictionary' => [\
			'1' => 'none',\
			'2' => 'solid',\
			'3' => 'double',\
			'4' => 'dotted',\
			'5' => 'dashed',\
		],\
		'selectors' => [\
			'{{WRAPPER}}' => 'border-style: {{VALUE}};',\
		],\
	]
);

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

In this case, replacing `prefix_class` with `selectors` is much more efficient. In addition, we don't break backwards compatibility. The `selectors_dictionary` helps convert the old values to new values.

## [\#](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/\#notes) Notes

It's very important to remember that the `selectors_dictionary` argument works only with controls that return simple `string` values. It doesn't work on multi-value controls, unit controls, group controls or repeaters which all return `array` values.

←
[CSS Selectors](https://developers.elementor.com/docs/editor-controls/selectors/)[Conditional Display](https://developers.elementor.com/docs/editor-controls/conditional-display/)
→