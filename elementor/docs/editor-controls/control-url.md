---
url: https://developers.elementor.com/docs/editor-controls/control-url/
scraped_at: 2025-10-20T00:59:17.612Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-url/\#url-control) URL Control

Elementor CoreBasic![URL Control](https://developers.elementor.com/docs/assets/img/controls/control-url.png)

Elementor URL control displays a URL input field. The control also has the ability to display more controls, such as the ability to open the link in new window, to add `nofollow` attribute and to define additional attributes (a comma-separated list of key-value pairs).

![URL Control Options](https://developers.elementor.com/docs/assets/img/controls/control-url-options2.png)

The control is defined in `Control_URL` class which extends `Control_Base_Multiple` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::URL` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-url/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | url | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `placeholder` | `string` | Paste URL or type | The field placeholder that appears when the field has no values. |
| `autocomplete` | `bool` | true | Whether to allow search functionality. |
| `options` | `array` \| `false` | \[<br>'url',<br>'is\_external',<br>'nofollow',<br>'custom\_attributes'<br>\] | An array of URL options to show. By default it shows all the options. But you can select which URL elements to show. Setting the options to `false` we disable all the options. |
| `default` | `array` |  | The field default values.<br> <br>- **$url** ( `string`) The URL.<br>- **$is\_external** ( `bool`) Whether to open the url in the same tab or in a new one.<br>- **$nofollow** ( `bool`) Whether to add nofollow attribute.<br>- **$custom\_attributes** ( `string`) Custom attributes string that come as a string of comma-delimited key\|value pairs. |

## [\#](https://developers.elementor.com/docs/editor-controls/control-url/\#return-value) Return Value

```
[\
	'url' => 'https://your-link.com',\
	'is_external' => true,\
	'nofollow' => true,\
	'custom_attributes' => '',\
]

```

1

2

3

4

5

6

( _`array`_) An array containing the link data:

- **$url** ( _`string`_) The URL.
- **$is\_external** ( _`bool`_) Whether to open the url in the same tab or in a new one.
- **$nofollow** ( _`bool`_) Whether to add nofollow attribute.
- **$custom\_attributes** ( _`string`_) Custom attributes string that come as a string of comma-delimited `key|value` pairs.

## [\#](https://developers.elementor.com/docs/editor-controls/control-url/\#usage) Usage

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
			'website_link',
			[\
				'label' => esc_html__( 'Link', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::URL,\
				'options' => [ 'url', 'is_external', 'nofollow' ],\
				'default' => [\
					'url' => '',\
					'is_external' => true,\
					'nofollow' => true,\
					// 'custom_attributes' => '',\
				],\
				'label_block' => true,\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();
		if ( ! empty( $settings['website_link']['url'] ) ) {
			$this->add_link_attributes( 'website_link', $settings['website_link'] );
		}
		?>
		<a <?php $this->print_render_attribute_string( 'website_link' ); ?>>
			...
		</a>
		<?php
	}

	protected function content_template(): void {
		?>
		<a href="{{ settings.website_link.url }}">
			...
		</a>
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

←
[Hover Animation Control](https://developers.elementor.com/docs/editor-controls/control-hover-animation/)[Media Control](https://developers.elementor.com/docs/editor-controls/control-media/)
→