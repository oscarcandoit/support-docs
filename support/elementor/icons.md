---
url: https://developers.elementor.com/new-control-icons
scraped_at: 2025-10-20T00:37:39.865Z
---

# New Control: Icons

- Ohad Raz
- [June 26, 2019](https://developers.elementor.com/2019/06/26/)
- 2 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.6

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

Elementor 2.6.0 is just around the corner and with it, we are introducing a new Icons control which loads the new Elementor’s homemade Icon Library.

This new control allows easier upgrading of Font Awesome versions while supporting older versions for backward compatibility. On top of that, it introduces support for SVG icons and in the near future, will support custom icon font libraries.

### Usage:

Start by adding the control to your widget in the widget’s class `_register_controls()` method, just like any other control in Elementor.

```php rainbow rainbow-show
protected function _register_controls() {
	//...
	$this->add_control(
		'icon',
		[\
			'label' => __( 'Icon', 'text-domain' ),\
			'type' => Controls_Manager::ICONS,\
			'default' => [\
				'value' => 'fas fa-star',\
				'library' => 'solid',\
			],\
		]
	);
	//...
}

```

Notice: The default value is set as an array of:

- `value` – The default icon CSS class including the display prefix.
- `library` – The corresponding library of font icons to load.

The new Icons control uses Font Awesome 5, which loads only the relevant and required CSS and font files per use basis. In other words, if you don’t use it, it is never loaded (this is a performance gain).

Due to the fact that the awesome people at Font Awesome managed to split the icons across 3 subset styles: Regular, Solid and Brands (Font Awesome Pro version also includes a Light style). This allows our new Icons control to loads only the CSS and Fonts of the specific style subset in use (yet another performance gain).

So as seen in the example above, “fas fa-star” is set as the `value` and “solid” is set as the `library`.

### Rendering Icons

Another improvement that comes with the new Icons control is the `render_icon()` method of the `Icons_Manager` class which takes care of the rendering of the icon for you in the `render()` method of your widget class:

```php rainbow rainbow-show
protected function render() {
	$settings = $this->get_settings_for_display();
	Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] );
}

```

`Icons_Manager::render_icon` method accepts 3 variables:

- `$icon` – (array) required – Icons control value, an array that contains both `value` and `library`.
- `$attributes` – (array) optional – An array of attributes as `attribute name => attribute value`, to add to the rendered icon HTML tag.
- `$tag` – (string) optional – HTML tag to render the icon as, defaults to `<i>` tag.

`Icons_Manager::render_icon` return true if it rendered an icon successfully or false if not, this is very useful when migrating your widgets from old Icon control.

Here is an example widget complete with `_content_template()` implementing:

```php rainbow rainbow-show
add_action( 'elementor/widgets/widgets_registered', function( $widget_manager ) {
	class Icons_Control_Test_Widget extends \Elementor\Widget_Base {
		public function get_name() {
			return 'icons_test_widget';
		}

		public function get_title() {
			return __( 'Icons Test Widget', 'text-domain' );
		}

		protected function _register_controls() {
			$this->start_controls_section(
				'section_icon',
				[\
					'label' => __( 'Icon', 'text-domain' ),\
				]
			);

			$this->add_control(
				'icon',
				[\
					'label' => __( 'Icon', 'text-domain' ),\
					'type' => \Elementor\Controls_Manager::ICONS,\
					'default' => [\
						'value' => 'fas fa-star',\
						'library' => 'solid',\
					],\
				]
			);

			$this->end_controls_section();
		}

		protected function render() {
			$settings = $this->get_settings_for_display();

			<div class="my-icon-wrapper">
				 \Elementor\Icons_Manager::render_icon( $settings['icon'], [ 'aria-hidden' => 'true' ] );
			</div>

		}

		protected function _content_template() {


			<div class="my-icon-wrapper">
				{{{ iconHTML.value }}}
			</div>

		}
	}
	// register widget
	$widget_manager->register_widget_type( new Icons_Control_Test_Widget() );
} );

```

### Backwards Compatibility

We made the new Icons Control with backwards compatibility in mind to allow easy migration from our old Icon control which uses Font Awesome 4.

The migration from Font Awesome 4 to 5 is done automatically for you in the front-end using Font Awesome Shim, which makes sure all you previously selected icons are display correctly.

Once you open Elementor to edit a widget with a previously selected icon, the Icons control migrates the old Font Awesome 4 icon to the new corresponding Font Awesome 5 icon for you.

### Upgrading From Icon Control

If you want to upgrade your widgets that use the old Icon control (which you should want, because this control will be deprecated eventually), you must change the control ID and set a `fa4compatibility` parameter to the old control ID, for example, if your widget uses the old Icon control, something like this:

```php rainbow rainbow-show
$this->add_control(
	'old_icon_id',
	[\
		'label' => __( 'Icon', 'text-domain' ),\
		'type' => \Elementor\Controls_Manager::ICON,\
		'default' => 'fa fa-star',\
	]
);

```

The migration to the Icons control should be done, something like this:

```php rainbow rainbow-show
$this->add_control(
	'new_icon_id',
	[\
		'label' => __( 'Icon', 'text-domain' ),\
		'type' => \Elementor\Controls_Manager::ICONS,\
		'fa4compatibility' => 'old_icon_id',\
		'default' => [\
			'value' => 'fas fa-star',\
			'library' => 'solid',\
		],\
	]
);

```

And to complete the migration to the new control your widget’s `render()` method should wrap your old render code with the `Icons_Manager::render_icon` discussed above, For example, if your widget’s `render()` had something like this:

```php rainbow rainbow-show
protected function render() {
	$settings = $this->get_settings_for_display();

	<i class="<?php echo $settings['old_icon_id']; ?>" aria-hidden="true"></i>

}

```

Then to use the new Icons control you would do something like this:

```php rainbow rainbow-show
protected function render() {
	$settings = $this->get_settings_for_display();
	// Check if its already migrated
	$migrated = isset( $settings['__fa4_migrated']['new_icon_id'] );
	// Check if its a new widget without previously selected icon using the old Icon control
	$is_new = empty( $settings['old_icon_id'] );
	if ( $is_new || $migrated ) {
		Icons_Manager::render_icon( $settings['selected_icon'], [ 'aria-hidden' => 'true' ] );
	} else {

		<i class="<?php echo $settings['old_icon_id']; ?>" aria-hidden="true"></i>

	}
}

```

As you can see in the example above, once an icon value gets migrated from an old Icon control (Font Awesome 4) to the new Icons control value (Font Awesome 5), a new property is added to our `$settings` array, called “\_\_fa4\_migrated” which is an array of all controls that already had their value migrated. This helps identify if you need to use the new `render_icon()` method or not.

Here is an example widget complete with `_content_template()` migration implementing:

```php rainbow rainbow-show
add_action( 'elementor/widgets/widgets_registered', function( $widget_manager ) {
	class Icons_Control_Migration_Test_Widget extends \Elementor\Widget_Base {
		public function get_name() {
			return 'icons_test_widget';
		}

		public function get_title() {
			return __( 'Icons Test Widget', 'text-domain' );
		}

		protected function _register_controls() {
			$this->start_controls_section(
				'section_icon',
				[\
					'label' => __( 'Icon', 'text-domain' ),\
				]
			);

			// This was the old control
			//$this->add_control(
			//	'old_icon_id',
			//	[\
			//		'label' => __( 'Icon', 'text-domain' ),\
			//		'type' => \Elementor\Controls_Manager::ICON,\
			//		'default' => 'fa fa-star',\
			//	]
			//);

			// New control must have a new ID
			$this->add_control(
				'new_icon_id',
				[\
					'label' => __( 'Icon', 'text-domain' ),\
					'type' => \Elementor\Controls_Manager::ICONS,\
					// this must be set to the old control id which tell the control\
					//where to migrate the value from\
					'fa4compatibility' => 'old_icon',\
					'default' => [\
						'value' => 'fas fa-star',\
						'library' => 'solid',\
					],\
				]
			);

			$this->end_controls_section();
		}

		protected function render() {
			$settings = $this->get_settings_for_display();
			// Check if its already migrated
			$migrated = isset( $settings['__fa4_migrated']['new_icon_id'] );
			// Check if its a new widget without previously selected icon using the old Icon control
			$is_new = empty( $settings['old_icon_id'] );

			<div class="my-icon-wrapper">
				 if ( $is_new || $migrated ) :
					\Elementor\Icons_Manager::render_icon( $settings['new_icon_id'], [ 'aria-hidden' => 'true' ] );
				else :
					<i class="<?php echo $settings['old_icon_id']; ?>" aria-hidden="true"></i>
				 endif;
			</div>

		}

		protected function _content_template() {

			<# var iconHTML = elementor.helpers.renderIcon( view, settings.new_icon_id, { 'aria-hidden':  }, 'i' , 'object' ); #>
			<div class="my-icon-wrapper">
				<# if ( iconHTML.rendered && ! settings.old_icon_id ) { #>
					{{{ iconHTML.value }}}
				<# } else { #>
					<i class="{{ settings.old_icon_id }}" aria-hidden="true"></i>
				<# } #>
			</div>

		}
	}
	// register widget
	$widget_manager->register_widget_type( new Icons_Control_Migration_Test_Widget() );
} );

```

There could be some quirks if your old control had a default value, however, there are ways to support that as well with backward compatibility, as you can see we have implemented in Elementor’s own widgets.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Ohad Raz](https://secure.gravatar.com/avatar/4457665d392755ad51548d0bb0b6e22a5c4fcefaf7b10d581189314ce6b0ea89?s=300&d=mm&r=g)

Ohad Raz

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