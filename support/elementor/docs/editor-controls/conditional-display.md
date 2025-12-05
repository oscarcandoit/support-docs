---
url: https://developers.elementor.com/docs/editor-controls/conditional-display/
scraped_at: 2025-10-20T01:01:22.359Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#conditional-display) Conditional Display

Elementor CoreAdvanced

In some cases, you may need to display controls based on a user’s selection in a dependent control. For example, turning a switcher control on may trigger the display of other controls. The controls mechanism in the editor has a special conditional display functionality. Let's see how it is used.

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#condition-argument) Condition Argument

To set a conditional display for Elementor controls, use the `condition` argument in any control.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#single-value-condition) Single-Value Condition

The display condition may depend on an exact value:

```
$this->add_control(
	'unique-control-name',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'condition' => [\
			'dependent-control-name' => 'exact-value',\
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

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#multi-value-condition) Multi-Value Condition

The display condition may depend on a set of values:

```
$this->add_control(
	'unique-control-name',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'condition' => [\
			'dependent-control-name' => [ 'value-1', 'value-2' ],\
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

Elementor uses a logical `OR` ( `||`) operator when passing an array of values.

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#multiple-conditions) Multiple Conditions

Display conditions may depend on the number of controls. This is why the `condition` argument accepts an `array`. It uses the logical `AND` ( `&&`) operator, checking to see if _all_ the conditions are met in order to decide whether or not to display the control.

To set multiple conditions, pass several values:

```
$this->add_control(
	'unique-control-name',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'condition' => [\
			'dependent-control-1-name' => 'dependent-control-1-value',\
			'dependent-control-2-name' => 'dependent-control-2-value',\
			'dependent-control-3-name' => 'dependent-control-3-value',\
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

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#equality-operators) Equality Operators

A condition has two equality operators, it can check whether the control value is _equal_ OR _not equal_ to a value.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#equality-check) Equality Check

Display controls only if the dependent control equals a certain value:

```
'condition' => [\
	'control-name' => 'control-value',\
],

```

1

2

3

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#inequality-check) Inequality Check

Display controls only if the dependent control does not equal a certain value:

```
'condition' => [\
	'control-name!' => 'control-value',\
],

```

1

2

3

We simply add a `!` suffix to the control name.

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#condition-example) Condition Example

Let's start with an example in which we want to allow users to set borders and style them. To simplify the user experience, we initially hide all the border controls and leave only a [switcher](https://developers.elementor.com/docs/editor-controls/control-switcher/). If a user turns on the switcher, they will see all the border controls.

```
$this->add_control(
	'border',
	[\
		'label' => esc_html__( 'Border', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SWITCHER,\
	]
);

$this->add_control(
	'border_style',
	[\
		'label' => esc_html__( 'Border Style', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SELECT,\
		'options' => [\
			'' => esc_html__( 'None', 'textdomain' ),\
			'solid' => esc_html__( 'Solid', 'textdomain' ),\
			'double' => esc_html__( 'Double', 'textdomain' ),\
			'dotted' => esc_html__( 'Dotted', 'textdomain' ),\
			'dashed' => esc_html__( 'Dashed', 'textdomain' ),\
			'groove' => esc_html__( 'Groove', 'textdomain' ),\
		],\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-style: {{VALUE}}',\
		],\
		'condition' => [\
			'border' => 'yes',\
		],\
\
	]
);

$this->add_control(
	'border_color',
	[\
		'label' => esc_html__( 'Border Color', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::COLOR,\
		'default' => '',\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-color: {{VALUE}}',\
		],\
		'condition' => [\
			'border' => 'yes',\
		],\
	]
);

$this->add_responsive_control(
	'border_width',
	[\
		'label' => esc_html__( 'Border Width', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::DIMENSIONS,\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',\
		],\
		'condition' => [\
			'border' => 'yes',\
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

56

57

58

59

In the example above all the border controls are dependent on a single border control. To set multiple dependent controls, we can set more conditions allowing the user to add more inputs.

In the example below, the user needs to first turn on the switcher and set a border style. Only then, will the color and width controls appear. To do this we will need to set multiple conditions using both equality and inequality checks.

```
$this->add_control(
	'border',
	[\
		'label' => esc_html__( 'Border', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SWITCHER,\
	]
);

$this->add_control(
	'border_style',
	[\
		'label' => esc_html__( 'Border Style', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SELECT,\
		'options' => [\
			'' => esc_html__( 'None', 'textdomain' ),\
			'solid' => esc_html__( 'Solid', 'textdomain' ),\
			'double' => esc_html__( 'Double', 'textdomain' ),\
			'dotted' => esc_html__( 'Dotted', 'textdomain' ),\
			'dashed' => esc_html__( 'Dashed', 'textdomain' ),\
			'groove' => esc_html__( 'Groove', 'textdomain' ),\
		],\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-style: {{VALUE}}',\
		],\
		'condition' => [\
			'border' => 'yes',\
		],\
\
	]
);

$this->add_control(
	'border_color',
	[\
		'label' => esc_html__( 'Border Color', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::COLOR,\
		'default' => '',\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-color: {{VALUE}}',\
		],\
		'condition' => [\
			'border' => 'yes',\
			'border_style!' => '',\
		],\
	]
);

$this->add_responsive_control(
	'border_width',
	[\
		'label' => esc_html__( 'Border Width', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::DIMENSIONS,\
		'selectors' => [\
			'{{WRAPPER}} .inner_class' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',\
		],\
		'condition' => [\
			'border' => 'yes',\
			'border_style!' => '',\
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

56

57

58

59

60

61

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#advanced-conditions) Advanced Conditions

Elementor has an advanced conditional display functionality for controls in the editor. Instead of using the `condition` argument, use the `conditions` argument (with an **s**).

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#available-values) Available Values

The `conditions` argument accepts an array with the following values:

| Name | Description |
| --- | --- |
| `relation` | ( `string`) Relation check with either `and` / `or` logical operators.<br> Default is `and`. |
| `terms` | ( `array`) An array of arrays containing the rules.<br> <br>- `name` \- The dependent control name.<br>- `value` \- The dependent control value.<br>- `operator` \- The equality operator, `==`, `!=`, `!==`, `in`, `!in`, `contains`, `!contains`, `<`, `<=`, `>`, `>=`, `===`. Default is `===`. |

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#more-operators) More Operators

Before implementing the 'conditions' argument, you could only use equality and inequality checks. Now you have many more operators at your disposal: `==`, `!=`, `!==`, `in`, `!in`, `contains`, `!contains`, `<`, `<=`, `>`, `>=` and `===`.

We can replace the simple `condition` argument:

```
'condition' => [\
	'control-name!' => 'control-value',\
],

```

1

2

3

with the advanced `conditions` argument, and include the `operator` rule inside the `term` array:

```
'conditions' => [\
	'terms' => [\
		[\
			'name' => 'control-name',\
			'operator' => '!==',\
			'value' => 'control-value',\
		],\
	],\
],

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

This also makes it easier to use equality operators for numeric values ( `<`, `<=`, `>`, `>=`, `==`, `===`, `!=` and `!==`):

```
'conditions' => [\
	'terms' => [\
		[\
			'name' => 'spacing',\
			'operator' => '>=',\
			'value' => 0,\
		],\
	],\
],

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

Below is an example of checking against multiple values:

```
'conditions' => [\
	'terms' => [\
		[\
			'name' => 'background_type',\
			'operator' => 'in',\
			'value' => [ 'classic', 'gradient', 'video', 'slideshow' ],\
		],\
	],\
],

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

Below is an example of checking if the term contains a value:

```
'conditions' => [\
	'terms' => [\
		[\
			'name' => 'heading',\
			'operator' => 'contains',\
			'value' => 'elementor',\
		],\
	],\
],

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

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#multiple-conditions-2) Multiple Conditions

As mentioned above, the simple `condition` argument allows developers to combine several conditions:

```
'condition' => [\
	'border' => 'yes',\
	'border_style!' => '',\
],

```

1

2

3

4

The advanced `conditions` argument has the same ability:

```
'conditions' => [\
    'terms' => [\
        [\
            'name' => 'border',\
            'operator' => '===',\
            'value' => 'yes',\
        ],\
        [\
            'name' => 'border_style',\
            'operator' => '!==',\
            'value' => '',\
        ],\
    ],\
],

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

However, with the `condition` argument all the terms must be met in order to display the control, while the advanced `conditions` argument allows you to add more logical operators using the new `relation` value.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#term-relations) Term Relations

Now we can use not only the `and` logical operator but also the `or` operator to check the relationship between terms:

```
'conditions' => [\
	'relation' => 'or',\
	'terms' => [\
		[\
			'name' => 'background',\
			'operator' => '!==',\
			'value' => '',\
		],\
		[\
			'name' => 'border',\
			'operator' => '!==',\
			'value' => '',\
		],\
	],\
],

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

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#nested-conditions) Nested Conditions

We can also nest conditions:

```
'conditions' => [\
	'relation' => 'or',\
	'terms' => [\
		[\
			'name' => 'video_type',\
			'operator' => '===',\
			'value' => 'youtube',\
		],\
		[\
			'relation' => 'and',\
			'terms' => [\
				[\
					'name' => 'show_image_overlay',\
					'operator' => '===',\
					'value' => 'yes',\
				],\
				[\
					'name' => 'video_type',\
					'operator' => '!==',\
					'value' => 'hosted',\
				],\
			],\
		],\
	],\
],

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

All this gives developers the ability to create very strict rules with many nested levels for conditional control display.

## [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#repeaters-conditional-display) Repeaters & Conditional Display

Conditional control display and [repeaters](https://developers.elementor.com/docs/editor-controls/control-repeater/) are special case. There are some things you can do, and some thinkg you can't. Let's cover three use cases.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#entire-repeater-control) Entire Repeater Control

You can conditionaly hide/display the entire repeater:

```
$this->add_control(
	'display_list',
	[\
		'label' => esc_html__( 'Display List', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SWITCHER,\
		'label_on' => esc_html__( 'Yes', 'textdomain' ),\
		'label_off' => esc_html__( 'No', 'textdomain' ),\
		'return_value' => 'yes',\
		'default' => 'yes',\
	]
);

$this->add_control(
	'list',
	[\
		'label' => esc_html__( 'Repeater List', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::REPEATER,\
		'fields' => [\
			[\
				'name' => 'list_title',\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
			],\
			[\
				'name' => 'list_content',\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::WYSIWYG,\
			],\
		],\
		'condition' => [\
			'display_list' => 'yes',\
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

30

31

32

33

34

In this case there are two controls, the value of the first control affects the display of the second control.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#repeater-inner-fields) Repeater Inner Fields

You can conditionaly hide/display fields inside the repeater:

```
$this->add_control(
	'list',
	[\
		'label' => esc_html__( 'Repeater List', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::REPEATER,\
		'fields' => [\
			[\
				'name' => 'display_content',\
				'label' => esc_html__( 'Display Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::SWITCHER,\
				'label_on' => esc_html__( 'Yes', 'textdomain' ),\
				'label_off' => esc_html__( 'No', 'textdomain' ),\
				'return_value' => 'yes',\
				'default' => 'yes',\
			],\
			[\
				'name' => 'list_title',\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
			],\
			[\
				'name' => 'list_content',\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::WYSIWYG,\
				'condition' => [\
					'display_content' => 'yes',\
				],\
			],\
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

30

31

In this case we have a repeater with three inner controls, the value of one inner-control affects the display of an other inner-control.

### [\#](https://developers.elementor.com/docs/editor-controls/conditional-display/\#dependents-from-different-levels) Dependents From Different Levels

But you can't mix different levels. Inner controls can't be dependent on the value of a main control.

```
$this->add_control(
	'display_content',
	[\
		'label' => esc_html__( 'Display Content', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::SWITCHER,\
		'label_on' => esc_html__( 'Yes', 'textdomain' ),\
		'label_off' => esc_html__( 'No', 'textdomain' ),\
		'return_value' => 'yes',\
		'default' => 'yes',\
	]
);

$this->add_control(
	'list',
	[\
		'label' => esc_html__( 'Repeater List', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::REPEATER,\
		'fields' => [\
			[\
				'name' => 'list_title',\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
			],\
			[\
				'name' => 'list_content',\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::WYSIWYG,\
				'condition' => [\
					'display_content' => 'yes',\
				],\
			],\
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

30

31

32

33

34

This is not allowed. It won't work.

←
[Selectors Dictionary](https://developers.elementor.com/docs/editor-controls/selectors-dictionary/)[Global Style](https://developers.elementor.com/docs/editor-controls/global-style/)
→