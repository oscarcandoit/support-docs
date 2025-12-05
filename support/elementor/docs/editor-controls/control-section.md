---
url: https://developers.elementor.com/docs/editor-controls/control-section/
scraped_at: 2025-10-20T00:57:40.069Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#control-section) Control Section

Elementor CoreBasic![Controls Section](https://developers.elementor.com/docs/assets/img/controls/control-sections.png)

Control sections are UI wrappers used to arrange controls under the tabs in the panel. These controls are divided into sections and each control must be part of a section. These sections are created using two methods: `start_controls_section()` creates a new section while `end_controls_section()` closes the section.

## [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#control-section-structure) Control Section Structure

Following these steps to add a new control section:

```
$this->start_controls_section(
	'my_section',
	[\
		'label' => esc_html__( 'My Section', 'textdomain' ),\
		'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
	]
);

$this->end_controls_section();

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

## [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#control-parameters) Control Parameters

Every control has the following key parameters:

- **Section Name** `(string)` – Unique id used in the code.
- **Section Setting** `(array)` – Extra section parameters.

  - **Label** `(string)` – Label displayed to the user in the panel.
  - **Tab** `(string)` – Tab where the section is located. Default is `content`.
  - **Conditions** `(array)` – Control display conditions.

## [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#examples) Examples

### [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#single-section) Single Section

The example below creates a single section which will be part of the " **Content**" tab. We need to provide the section name and extra parameters like the section label:

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

		$this->add_control();

		$this->add_control();

		$this->add_control();

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

This will create a new " **Content**" section under the " **Content**" tab.

![Elementor Single Section](https://developers.elementor.com/docs/assets/img/elementor-single-section.png)

### [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#multiple-sections) Multiple Sections

Now let's create multiple control sections for the " **Content**" tab:

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

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'info_section',
			[\
				'label' => esc_html__( 'Info', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

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

This will create two sections for our controls under the " **Content**" tab.

![Elementor Multiple Sections](https://developers.elementor.com/docs/assets/img/elementor-multiple-sections.png)

### [\#](https://developers.elementor.com/docs/editor-controls/control-section/\#sections-in-multiple-tabs) Sections in Multiple Tabs

The next step is to create new sections under the " **Content**" tab and under the " **Style**" tab. This is done be specifying the tab name under the extra parameters array.

Elementor has a predefined list of tabs that you can use, but with widgets the convention is to only use the " **Content**" tab and the " **Style**" tab.

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

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'info_section',
			[\
				'label' => esc_html__( 'Info', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

		$this->end_controls_section();

		$this->start_controls_section(
			'style_section',
			[\
				'label' => esc_html__( 'Style', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,\
			]
		);

		$this->add_control();

		$this->add_control();

		$this->add_control();

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

In this example, we created two sections under the " **Content**" tab and another section under the " **Style**" tab.

![Elementor Section in a Tab](https://developers.elementor.com/docs/assets/img/elementor-section-in-a-tab.png)

As you can see from the code, unless we define the "tab", the section will be added to the " **Content**" tab by default.

←
[Group Control](https://developers.elementor.com/docs/editor-controls/group-control/)[Control Popovers](https://developers.elementor.com/docs/editor-controls/control-popovers/)
→