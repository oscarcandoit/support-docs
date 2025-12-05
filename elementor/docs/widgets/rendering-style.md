---
url: https://developers.elementor.com/docs/widgets/rendering-style/
scraped_at: 2025-10-20T00:43:16.429Z
---

# [\#](https://developers.elementor.com/docs/widgets/rendering-style/\#rendering-style) Rendering Style

Elementor CoreIntermediate

A common [widget rendering](https://developers.elementor.com/docs/widgets/widget-rendering/) use case is using the control value to style different HTML elements. Usually used by controls from the content tab.

## [\#](https://developers.elementor.com/docs/widgets/rendering-style/\#styling-elements) Styling Elements

Let's say you have a widget with two controls in which users can set a title, and control the element "color".

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

		$this->add_control(
			'title',
			[\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
				'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),\
\
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[\
				'label' => esc_html__( 'Style', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,\
			]
		);

		$this->add_control(
			'color',
			[\
				'label' => esc_html__( 'Color', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::COLOR,\
				'default' => '#f00',\
				'selectors' => [\
					'{{WRAPPER}} h3' => 'color: {{VALUE}}',\
				],\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['title'] ) ) {
			return;
		}
		?>
		<h3>
			<?php echo $settings['title']; ?>
		</h3>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.title ) {
			return;
		}
		#>
		<h3>
			{{{ settings.title }}}
		</h3>
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

Note that each element on the page includes a set of style settings that are printed as CSS rules under a unique element selector. The widget can easily use the returned control value as a design rule.

Our test widget will add custom CSS rules to the page's CSS file. Those rules will only affect this widget as the `{ { WRAPPER } }` prefix means that only this instance of the widget will use this color.

## [\#](https://developers.elementor.com/docs/widgets/rendering-style/\#selector-tokens) Selector Tokens

When you select which category to assign your widget to, you can select one of the default categories:

| Label | Description |
| --- | --- |
| **{ { WRAPPER } }** | Widget wrapper element |
| **{ { VALUE } }** | Control value |
| **{ { UNIT } }** | Unit control value of selected unit |
| **{ { URL } }** | The URL returned by the media control |
| **{ { SELECTOR } }** | Group control CSS selector |

←
[Rendering Text](https://developers.elementor.com/docs/widgets/rendering-text/)[Rendering Media](https://developers.elementor.com/docs/widgets/rendering-media/)
→