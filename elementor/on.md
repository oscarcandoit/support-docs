---
url: https://developers.elementor.com/how-to-add-a-repeater-control-to-elementor-add-on
scraped_at: 2025-10-20T00:49:40.180Z
---

# How to (Properly) add a Repeater control to your Custom Elementor Add-On

- Udi Dollberg
- [September 15, 2020](https://developers.elementor.com/2020/09/15/)
- 11 Comments
- [Features](https://developers.elementor.com/category/features/)

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

![](https://developers.elementor.com/wp-content/uploads/2020/09/image-26.png)

Elementor has a special type of control called a Repeater, which can contain other controls.

Repeaters create sub-items that are usually duplicatable, deletable, and can be used for any element which includes repetitive functionality, such as list widgets (Price List, Icon List) and Carousels (Media Carousel, Reviews).

This blog post will explain and demonstrate how to create and use repeaters – the right way.

We will take a look at and analyze the Icon List widget, which is a very clear example of creating and using a repeater properly.

Repeaters are created in the `register_controls()` method, along with all of the other widget controls.

To create a repeater, initialize an instance of the Repeater class:

`$repeater = new \Elementor\Repeater();`

If you intend to use more than one repeater in your widget/extension, you should of course use different variable names for the additional repeaters.

Once a repeater is initialized, you can add controls to it, in the following manner:

```php rainbow rainbow-show
$repeater->add_control(
	'text',
	[\
		'label' => __( 'Text', 'elementor' ),\
		'type' => Controls_Manager::TEXT,\
		'label_block' => ,\
		'placeholder' => __( 'List Item', 'elementor' ),\
		'default' => __( 'List Item', 'elementor' ),\
		'dynamic' => [\
			'active' => ,\
		],\
	]
);

```

The Repeater’s add\_control() method is a slightly modified version of [the “regular” `add_control()` method](https://developers.elementor.com/add-controls-to-widgets/) used in all Elementor widgets, but it accepts the exact same parameters.

Please note that the instance you created of the repeater class **does NOT create the repeater control itself**. Once you’ve added all the controls you want to be included in each repeater item, you need to add the repeater itself as a control to the widget:

```php rainbow rainbow-show
$this->add_control(
	'icon_list',
	[\
		'label' => __( 'Items', 'elementor' ),\
		'type' => Controls_Manager::REPEATER,\
		'fields' => $repeater->get_controls(),\
		'default' => [\
			[\
				'text' => __( 'List Item #1', 'elementor' ),\
				'selected_icon' => [\
					'value' => 'fas fa-check',\
					'library' => 'fa-solid',\
				],\
			],\
			[\
				'text' => __( 'List Item #2', 'elementor' ),\
				'selected_icon' => [\
					'value' => 'fas fa-times',\
					'library' => 'fa-solid',\
				],\
			],\
			[\
				'text' => __( 'List Item #3', 'elementor' ),\
				'selected_icon' => [\
					'value' => 'fas fa-dot-circle',\
					'library' => 'fa-solid',\
				],\
			],\
		],\
		'title_field' => '{{{ elementor.helpers.renderIcon( this, selected_icon, {}, "i", "panel" ) || \'<i class="{{ icon }}" aria-hidden="true"></i>\' }}} {{{ text }}}',\
	]
);

```

Notice the control `'type'` – it has to have a value of `Controls_Manager::REPEATER.`

Another important control argument to notice in the example above is the `'fields'` argument. The `'fields'` argument contains the controls to be included in each repeater unit. Since you added each of the repeater’s nested controls using the `$repeater->add_control()` method, they are easily available to you via the Controls Stack `get_controls()` method.

![](https://developers.elementor.com/wp-content/uploads/2020/09/image-25.png)

Also worth talking about is the `'default'` argument. This argument enables creating default repeater items that will be included in the repeater items list automatically when the widget containing the repeater is added to a page/post. In this image to the right, you can see the three default items which are created based on the example above, when you first drag an Icon List widget into a page/post.

### Important Note on an Alternative Way of Adding Nested Controls to Repeaters

In Elementor Pro, in the Form Integration mechanism, we used a different method for adding repeater controls. Instead of using the `add_control` method for each nested control of the repeater, we added an array of controls directly into the `'fields'` arguments. **Starting from Elementor 3.1.0, we won’t use this method of adding controls to repeaters any more.** It will not be available for use, and any extension using it will probably stop functioning properly.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Udi Dollberg](https://secure.gravatar.com/avatar/266fe955548f0b4200fdd883c48e33d033b9e7b1d223c4e280f0718b9a765033?s=300&d=mm&r=g)

Udi Dollberg

Udi is a talented developer in Elementor’s Editor team and loves cars, woodworking and classic jazz.

[Hosted with](https://elementor.com/hosting/)

Text

Bigger text

Line height

Text align

Readable font

Visual

Contrast

Grayscale

Hide images

Pause animations

Orientation

Screen reader

Highlight links

Reading mask

Outline focus

Sitemap

Page structure