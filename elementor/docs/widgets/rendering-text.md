---
url: https://developers.elementor.com/docs/widgets/rendering-text/
scraped_at: 2025-10-20T00:43:12.428Z
---

# [\#](https://developers.elementor.com/docs/widgets/rendering-text/\#rendering-text) Rendering Text

Elementor CoreIntermediate

The most common [widget rendering](https://developers.elementor.com/docs/widgets/widget-rendering/) use case is to print the value of a simple text control. These controls are usually found in the content tab.

## [\#](https://developers.elementor.com/docs/widgets/rendering-text/\#printing-text-values) Printing Text Values

Let's say you have a widget with a single control in which the users can set a "title". To print the title entered by the user, we simply echo the control value:

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

←
[Widget Settings](https://developers.elementor.com/docs/widgets/widget-settings/)[Rendering Style](https://developers.elementor.com/docs/widgets/rendering-style/)
→