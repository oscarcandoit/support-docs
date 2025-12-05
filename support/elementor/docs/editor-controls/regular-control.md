---
url: https://developers.elementor.com/docs/editor-controls/regular-control/
scraped_at: 2025-10-20T00:57:25.510Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#regular-control) Regular Control

Elementor CoreBasic

Regular controls are the basic building blocks that allow users to set different values for different types of input fields (text, number, color, image, icon, etc.). Regular controls are added using the `add_control()` method.

## [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#regular-control-structure) Regular Control Structure

Use the following code to add a control:

```
$this->add_control(
	'control-name',
	[\
		'label' => esc_html__( 'Heading', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
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

## [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#control-parameters) Control Parameters

Each control has the following key parameters:

- **Control Name** `(string)` – Unique ID used in the code.
- **Control Setting** `(array)` – Extra control parameters. Each control has its own set of _custom settings_ in addition to the default settings based on the control type. For example, text control has a "placeholder" setting, slider has a "range" setting, color has a "default" setting, etc.

## [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#examples) Examples

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#text-control) Text Control

In the example below, we're going to add a simple text control defined at the `control_text` class, which will allow users to save a simple string. The control will have a placeholder set:

```
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
			'title',
			[\
				'type' => \Elementor\Controls_Manager::TEXT,\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),\
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

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#number-control) Number Control

In the example below, we're going to add a simple number control defined at the `Control_Number` class, which will allow users to save numbers:

```
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
			'size',
			[\
				'type' => \Elementor\Controls_Manager::NUMBER,\
				'label' => esc_html__( 'Size', 'textdomain' ),\
				'placeholder' => '0',\
				'min' => 0,\
				'max' => 100,\
				'step' => 1,\
				'default' => 50,\
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

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#select-control) Select Control

Another simple example is the `Control_Select` class, which will allow users to choose predefined fields:

```
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
			'open_lightbox',
			[\
				'type' => \Elementor\Controls_Manager::SELECT,\
				'label' => esc_html__( 'Lightbox', 'textdomain' ),\
				'options' => [\
					'default' => esc_html__( 'Default', 'textdomain' ),\
					'yes' => esc_html__( 'Yes', 'textdomain' ),\
					'no' => esc_html__( 'No', 'textdomain' ),\
				],\
				'default' => 'no',\
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

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#choose-control) Choose Control

Choose control is an improved version of select control. The `Control_Choose` class allows users to choose predefined fields, but the components are styled with an icon for each option.

```
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
			'alignment',
			[\
				'type' => \Elementor\Controls_Manager::CHOOSE,\
				'label' => esc_html__( 'Alignment', 'textdomain' ),\
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
				'default' => 'center',\
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

38

39

40

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#slider-control) Slider Control

Another useful control is the `Control_Slider`, which displays a draggable range slider:

```
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
			'font_size',
			[\
				'type' => \Elementor\Controls_Manager::SLIDER,\
				'label' => esc_html__( 'Size', 'textdomain' ),\
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],\
				'range' => [\
					'px' => [\
						'min' => 1,\
						'max' => 200,\
					],\
				],\
				'default' => [\
					'unit' => 'px',\
					'size' => 20,\
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

30

31

32

33

34

35

36

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#color-control) Color Control

One of the more more popular controls is `Control_Color`, which lets users choose a color:

```
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
			'text_color',
			[\
				'type' => \Elementor\Controls_Manager::COLOR,\
				'label' => esc_html__( 'Text Color', 'textdomain' ),\
				'default' => '#fefefe',\
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

### [\#](https://developers.elementor.com/docs/editor-controls/regular-control/\#media-control) Media Control

And finally, for advanced users, you can use `Control_Media` to select images from the WordPress media library:

```
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
			'image',
			[\
				'type' => \Elementor\Controls_Manager::MEDIA,\
				'label' => esc_html__( 'Choose Image', 'textdomain' ),\
				'default' => [\
					'url' => \Elementor\Utils::get_placeholder_image_src(),\
				]\
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

←
[Using Controls](https://developers.elementor.com/docs/editor-controls/using-controls/)[Responsive Control](https://developers.elementor.com/docs/editor-controls/responsive-control/)
→