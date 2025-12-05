---
url: https://developers.elementor.com/docs/widgets/widget-settings/
scraped_at: 2025-10-20T00:43:07.459Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-settings/\#widget-settings) Widget Settings

Elementor CoreIntermediate

Before the [widget rendering](https://developers.elementor.com/docs/widgets/widget-rendering/) function starts generating the final HTML output, it needs to retrieve data from the controls.

In Elementor terminology, " _widget settings_" are the " _user data_" retrieved from the widget controls.

## [\#](https://developers.elementor.com/docs/widgets/widget-settings/\#retrieving-js-settings) Retrieving JS Settings

With JS templates we don’t need to retrieve the data using a special function, it's done by Elementor for us. Data from the controls is stored in the `settings` variable and can be retrieved like this:

```
<?php
protected function content_template(): void {
	?>
	<h3 class="{{ settings.class }}">{{{ settings.title }}}</h3>
	<?php
}

```

1

2

3

4

5

6

Use double curly brackets `{{` for escaped results and triple curly brackets `{{{` for un-escaped results. The best practice is to use double curly brackets everywhere, unless you need to to use un-scaped values.

## [\#](https://developers.elementor.com/docs/widgets/widget-settings/\#retrieving-php-settings) Retrieving PHP Settings

When retrieving data saved by the user, we can either retrieve all the data from all the controls or specific data from a specific control. Data retrieval is done using `get_settings_for_display()` method.

Use the following to retrieve data from a single control:

```
<?php
protected function render(): void {
	?>
	<h3>
		<?php echo $this->get_settings_for_display( 'title' ); ?>
	</h3>
	<?php
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

When retrieving data from multiple controls, we can retrieve all the data from all the controls into a single parameter:

```
<?php
protected function render(): void {
	$settings = $this->get_settings_for_display();
	?>
	<h3 class="<?php echo esc_attr( $settings['class'] ); ?>">
		<?php echo $settings['title']; ?>
	</h3>
	<?php
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

Either way achieves the same result, however, in some cases the second method has performance benefits.

←
[Widget Rendering](https://developers.elementor.com/docs/widgets/widget-rendering/)[Rendering Text](https://developers.elementor.com/docs/widgets/rendering-text/)
→