---
url: https://developers.elementor.com/docs/editor-controls/control-gallery/
scraped_at: 2025-10-20T00:58:54.702Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-gallery/\#gallery-control) Gallery Control

Elementor CoreBasic![Gallery Control](https://developers.elementor.com/docs/assets/img/controls/control-gallery.png)

Elementor gallery control displays a media select area based on WordPress Galleries. The control allows to select multiple images from the WordPress Media Library.

The control is defined in `Control_Gallery` class which extends `Base_Data_Control` class.

![Gallery Control](https://developers.elementor.com/docs/assets/img/controls/control-gallery2.png)

When using this control, the `type` should be set to `\Elementor\Controls_Manager::GALLERY` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-gallery/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | gallery | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `default` | `array` |  | Default gallery images. An array of images containing the image ID and URL. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-gallery/\#return-value) Return Value

```
[\
	[\
		'id' => 0,\
		'url' => ''\
	],\
	[\
		'id' => 0,\
		'url' => ''\
	],\
]

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

( _`array`_) An array of single image arrays, containing the ID and URL of each image:

- **$id** ( _`int`_) Media id.
- **$url** ( _`string`_) Media url.

## [\#](https://developers.elementor.com/docs/editor-controls/control-gallery/\#usage) Usage

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
			'gallery',
			[\
				'label' => esc_html__( 'Add Images', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::GALLERY,\
				'show_label' => false,\
				'default' => [],\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		foreach ( $settings['gallery'] as $image ) {
			echo '<img src="' . esc_attr( $image['url'] ) . '">';
		}
	}

	protected function content_template(): void {
		?>
		<# _.each( settings.gallery, function( image ) { #>
			<img src="{{ image.url }}">
		<# }); #>
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

←
[Date Time Control](https://developers.elementor.com/docs/editor-controls/control-date-time/)[Repeater Control](https://developers.elementor.com/docs/editor-controls/control-repeater/)
→