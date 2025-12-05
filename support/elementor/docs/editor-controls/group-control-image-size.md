---
url: https://developers.elementor.com/docs/editor-controls/group-control-image-size/
scraped_at: 2025-10-20T01:00:59.103Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/group-control-image-size/\#image-size-group-control) Image Size Group Control

Elementor CoreBasic

Elementor image size group control displays input fields to define one of the default image sizes (thumbnail, medium, medium\_large, large) or custom image dimensions.

The control is defined in `Group_Control_Image_Size` class which extends `Group_Control_Base` class.

When using this group control, the `type` should be set to `Group_Control_Image_Size::get_type()` method.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-image-size/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | image-size | The type of the control. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `include` | `array` |  | Image sizes to include. |
| `exclude` | `array` |  | Image sizes to exclude. |
| `default` | `string` |  | The default image size. |

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-image-size/\#return-value) Return Value

```
[\
	'{name}_size' => '',\
	'{name}_custom_dimension' => '',\
]

```

1

2

3

4

( _`array`_) An array containing the image size values.

- **${name}\_size** ( _`string`_) Image size.
- **${name}\_custom\_dimension** ( _`string`_) Image dimension.

## [\#](https://developers.elementor.com/docs/editor-controls/group-control-image-size/\#usage) Usage

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
				'name' => 'thumbnail', // Usage: `{name}_size` and `{name}_custom_dimension`, in this case `thumbnail_size` and `thumbnail_custom_dimension`.\
				'exclude' => [ 'custom' ],\
				'include' => [],\
				'default' => 'large',\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		echo \Elementor\Group_Control_Image_Size::get_attachment_image_html( $settings, 'thumbnail', 'image' );
	}

	protected function content_template(): void {
		?>
		<#
		const image = {
			id: settings.image.id,
			url: settings.image.url,
			size: settings.thumbnail_size,
			dimension: settings.thumbnail_custom_dimension,
			model: view.getEditModel()
		};
		const image_url = elementor.imagesManager.getImageUrl( image );
		#>
		<img src="{{{ image_url }}}" />
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

←
[Background Group Control](https://developers.elementor.com/docs/editor-controls/group-control-background/)[CSS Filter Group Control](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/)
→