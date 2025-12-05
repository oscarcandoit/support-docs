---
url: https://developers.elementor.com/docs/editor-controls/control-repeater/
scraped_at: 2025-10-20T00:58:58.898Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-repeater/\#repeater-control) Repeater Control

Elementor CoreAdvanced![Repeater Control](https://developers.elementor.com/docs/assets/img/controls/control-repeater.png)

Elementor repeater control allows you to build repeatable blocks of fields. You can create, for example, a set of fields that will contain a title and a WYSIWYG text – the user will then be able to add "rows", and each row will contain a title and a text. The data can be wrapped in custom HTML tags, designed using CSS, and interact using JS or external libraries.

The control is defined in `Control_Repeater` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::REPEATER` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-repeater/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | repeater | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | false | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `fields` | `array` |  | A multi dimensional array containing the repeater fields. |
| `title_field` | `string` |  | Field that will be used as the repeater title in the fields list when the item is minimized. |
| `prevent_empty` | `bool` | true | Whether to prevent deleting the first repeater field. To keep at least one repeater field. |
| `default` | `array` |  | Default repeater values. A multi dimensional array containing fields as keys and default values for each key as values: `[ [ 'title' => '', 'content' => '' ], [ 'title' => '', 'content' => '' ], ... ]` |

## [\#](https://developers.elementor.com/docs/editor-controls/control-repeater/\#return-value) Return Value

( _`array`_) A multi dimensional array containing inner fields values.

## [\#](https://developers.elementor.com/docs/editor-controls/control-repeater/\#usage) Usage

Usage example with `fields` array:

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
			'list',
			[\
				'label' => esc_html__( 'Repeater List', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::REPEATER,\
				'fields' => [\
					[\
						'name' => 'list_title',\
						'label' => esc_html__( 'Title', 'textdomain' ),\
						'type' => \Elementor\Controls_Manager::TEXT,\
						'default' => esc_html__( 'List Title' , 'textdomain' ),\
						'label_block' => true,\
					],\
					[\
						'name' => 'list_content',\
						'label' => esc_html__( 'Content', 'textdomain' ),\
						'type' => \Elementor\Controls_Manager::WYSIWYG,\
						'default' => esc_html__( 'List Content' , 'textdomain' ),\
						'show_label' => false,\
					],\
					[\
						'name' => 'list_color',\
						'label' => esc_html__( 'Color', 'textdomain' ),\
						'type' => \Elementor\Controls_Manager::COLOR,\
						'selectors' => [\
							'{{WRAPPER}} {{CURRENT_ITEM}}' => 'color: {{VALUE}}'\
						],\
					]\
				],\
				'default' => [\
					[\
						'list_title' => esc_html__( 'Title #1', 'textdomain' ),\
						'list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'textdomain' ),\
					],\
					[\
						'list_title' => esc_html__( 'Title #2', 'textdomain' ),\
						'list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'textdomain' ),\
					],\
				],\
				'title_field' => '{{{ list_title }}}',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( $settings['list'] ) {
			echo '<dl>';
			foreach (  $settings['list'] as $item ) {
				echo '<dt class="elementor-repeater-item-' . esc_attr( $item['_id'] ) . '">' . $item['list_title'] . '</dt>';
				echo '<dd>' . $item['list_content'] . '</dd>';
			}
			echo '</dl>';
		}
	}

	protected function content_template(): void {
		?>
		<# if ( settings.list.length ) { #>
			<dl>
			<# _.each( settings.list, function( item ) { #>
				<dt class="elementor-repeater-item-{{ item._id }}">{{{ item.list_title }}}</dt>
				<dd>{{{ item.list_content }}}</dd>
			<# }); #>
			</dl>
		<# } #>
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

Usage example with `Repeater()` class:

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

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'list_title',
			[\
				'label' => esc_html__( 'Title', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::TEXT,\
				'default' => esc_html__( 'List Title' , 'textdomain' ),\
				'label_block' => true,\
			]
		);

		$repeater->add_control(
			'list_content',
			[\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::WYSIWYG,\
				'default' => esc_html__( 'List Content' , 'textdomain' ),\
				'show_label' => false,\
			]
		);

		$repeater->add_control(
			'list_color',
			[\
				'label' => esc_html__( 'Color', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::COLOR,\
				'selectors' => [\
					'{{WRAPPER}} {{CURRENT_ITEM}}' => 'color: {{VALUE}}'\
				],\
			]
		);

		$this->add_control(
			'list',
			[\
				'label' => esc_html__( 'Repeater List', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::REPEATER,\
				'fields' => $repeater->get_controls(),\
				'default' => [\
					[\
						'list_title' => esc_html__( 'Title #1', 'textdomain' ),\
						'list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'textdomain' ),\
					],\
					[\
						'list_title' => esc_html__( 'Title #2', 'textdomain' ),\
						'list_content' => esc_html__( 'Item content. Click the edit button to change this text.', 'textdomain' ),\
					],\
				],\
				'title_field' => '{{{ list_title }}}',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( $settings['list'] ) {
			echo '<dl>';
			foreach (  $settings['list'] as $item ) {
				echo '<dt class="elementor-repeater-item-' . esc_attr( $item['_id'] ) . '">' . $item['list_title'] . '</dt>';
				echo '<dd>' . $item['list_content'] . '</dd>';
			}
			echo '</dl>';
		}
	}

	protected function content_template(): void {
		?>
		<# if ( settings.list.length ) { #>
			<dl>
			<# _.each( settings.list, function( item ) { #>
				<dt class="elementor-repeater-item-{{ item._id }}">{{{ item.list_title }}}</dt>
				<dd>{{{ item.list_content }}}</dd>
			<# }); #>
			</dl>
		<# } #>
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

97

## [\#](https://developers.elementor.com/docs/editor-controls/control-repeater/\#notes) Notes

Repeaters can be [conditionally displayed](https://developers.elementor.com/docs/editor-controls/conditional-display/#repeaters-conditional-display). However, it's important to understand exactly what you can and cannot do when conditionally displaying repeater fields.

←
[Gallery Control](https://developers.elementor.com/docs/editor-controls/control-gallery/)[Entrance Animation Control](https://developers.elementor.com/docs/editor-controls/control-animation/)
→