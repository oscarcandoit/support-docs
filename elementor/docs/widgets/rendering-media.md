---
url: https://developers.elementor.com/docs/widgets/rendering-media/
scraped_at: 2025-10-20T00:43:20.826Z
---

# [\#](https://developers.elementor.com/docs/widgets/rendering-media/\#rendering-media) Rendering Media

Elementor CoreIntermediate

Elementor lets you select an image using the media control defined in the `\Elementor\Control_Media` class. There are two ways to render media files.

## [\#](https://developers.elementor.com/docs/widgets/rendering-media/\#simple-image-rendering) Simple Image Rendering

The simplest media rendering method is to print the image URL in a custom `<img>` tag. You can also use the [wp\_get\_attachment\_image()(opens new window)](https://developer.wordpress.org/reference/functions/wp_get_attachment_image/) function to generate the image markup.

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
			'image',
			[\
				'label' => esc_html__( 'Choose Image', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::MEDIA,\
				'default' => [\
					'url' => \Elementor\Utils::get_placeholder_image_src(),\
				],\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		// Get image url
		echo '<img src="' . esc_url( $settings['image']['url'] ) . '" alt="">';

		// Get image by id
		echo wp_get_attachment_image( $settings['image']['id'], 'thumbnail' );
	}

	protected function content_template(): void {
		?>
		<img src="{{{ settings.image.url }}}">
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

## [\#](https://developers.elementor.com/docs/widgets/rendering-media/\#advanced-image-rendering) Advanced Image Rendering

The more advanced way to handle images is to combine the `\Elementor\Control_Media` with `\Elementor\Group_Control_Image_Size`:

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
			'image',
			[\
				'label' => esc_html__( 'Choose Image', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::MEDIA,\
				'default' => [\
					'url' => \Elementor\Utils::get_placeholder_image_src(),\
				],\
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[\
				'name' => 'image',\
				'default' => 'large',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings );
	}

	protected function content_template(): void {
		?>
		<#
		const image = {
			id: settings.image.id,
			url: settings.image.url,
			size: settings.image_size,
			dimension: settings.image_custom_dimension,
			model: view.getEditModel()
		};

		const image_url = elementor.imagesManager.getImageUrl( image );

		if ( '' === image_url ) {
			return;
		}
		#>
		<img src="{{{ image_url }}}">
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

←
[Rendering Style](https://developers.elementor.com/docs/widgets/rendering-style/)[Rendering Repeaters](https://developers.elementor.com/docs/widgets/rendering-repeaters/)
→