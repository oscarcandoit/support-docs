---
url: https://developers.elementor.com/docs/widgets/widget-controls/
scraped_at: 2025-10-20T00:42:58.094Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-controls/\#widget-controls) Widget Controls

Elementor CoreIntermediate

Each widget needs to have some [controls](https://developers.elementor.com/docs/editor-controls/) (setting fields), where users can select their data. This data is saved in the database and later used to [generate custom output](https://developers.elementor.com/docs/widgets/widget-rendering/) based on the user's selection.

## [\#](https://developers.elementor.com/docs/widgets/widget-controls/\#registering-controls) Registering Controls

In your widget class, you can add controls inside the `register_controls()` method as follows:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section();

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

- **Widget Controls** – The `register_controls()` method lets you define which controls (setting fields) your widget will contain.

## [\#](https://developers.elementor.com/docs/widgets/widget-controls/\#available-controls) Available Controls

Elementor offers a [wide variety of controls](https://developers.elementor.com/docs/editor-controls/control-types/) out-of-the-box. All the controls have to be wrapped in [sections](https://developers.elementor.com/docs/editor-controls/control-section/). You can add [regular controls](https://developers.elementor.com/docs/editor-controls/regular-control/), [responsive controls](https://developers.elementor.com/docs/editor-controls/responsive-control/) and [group controls](https://developers.elementor.com/docs/editor-controls/group-control/). Developers can even [create new controls](https://developers.elementor.com/docs/controls/)

## [\#](https://developers.elementor.com/docs/widgets/widget-controls/\#add-controls-to-your-widget) Add Controls to your Widget

In the example below, we're going to add a few controls to a widget to allow users save data:

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

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

←
[Widget Dependencies](https://developers.elementor.com/docs/widgets/widget-dependencies/)[Widget Rendering](https://developers.elementor.com/docs/widgets/widget-rendering/)
→