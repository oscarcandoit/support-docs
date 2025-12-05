---
url: https://developers.elementor.com/docs/widgets/rendering-repeaters/
scraped_at: 2025-10-20T00:43:24.817Z
---

# [\#](https://developers.elementor.com/docs/widgets/rendering-repeaters/\#rendering-repeaters) Rendering Repeaters

Elementor CoreIntermediate

One advanced use case is to render multiple elements using the repeater control. Here, users set multiple fields in the repeater control and we need to print them on screen.

## [\#](https://developers.elementor.com/docs/widgets/rendering-repeaters/\#render-multiple-fields) Render Multiple Fields

Use the following to render multiple fields:

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
			'list',
			[\
				'label' => esc_html__( 'List', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::REPEATER,\
				'fields' => [\
					[\
						'name' => 'text',\
						'label' => esc_html__( 'Text', 'textdomain' ),\
						'type' => \Elementor\Controls_Manager::TEXT,\
						'placeholder' => esc_html__( 'List Item', 'textdomain' ),\
						'default' => esc_html__( 'List Item', 'textdomain' ),\
					],\
					[\
						'name' => 'link',\
						'label' => esc_html__( 'Link', 'textdomain' ),\
						'type' => \Elementor\Controls_Manager::URL,\
						'placeholder' => esc_html__( 'https://your-link.com', 'textdomain' ),\
					],\
				],\
				'default' => [\
					[\
						'text' => esc_html__( 'List Item #1', 'textdomain' ),\
						'link' => 'https://elementor.com/',\
					],\
					[\
						'text' => esc_html__( 'List Item #2', 'textdomain' ),\
						'link' => 'https://elementor.com/',\
					],\
				],\
				'title_field' => '{{{ text }}}',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( ! $settings['list'] ) {
			return;
		}
		?>
		<ul>
		<?php foreach ( $settings['list'] as $index => $item ) : ?>
			<li>
			<?php
			if ( $item['link']['url'] ) {
				?><a href="<?php echo esc_url( $item['link']['url'] ); ?>"><?php echo $item['text']; ?></a><?php
			} else {
				echo $item['text'];
			}
			?>
			</li>
		<?php endforeach; ?>
		</ul>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( ! settings.list.length ) {
			return;
		}
		#>
		<ul>
		<# _.each( settings.list, function( item, index ) { #>
			<li>
			<# if ( item.link && item.link.url ) { #>
				<a href="{{{ item.link.url }}}">{{{ item.text }}}</a>
			<# } else { #>
				{{{ item.text }}}
			<# } #>
			</li>
		<# } ); #>
		</ul>
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

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

←
[Rendering Media](https://developers.elementor.com/docs/widgets/rendering-media/)[Rendering HTML Attributes](https://developers.elementor.com/docs/widgets/rendering-html-attribute/)
→