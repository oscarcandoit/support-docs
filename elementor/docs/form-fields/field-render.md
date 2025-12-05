---
url: https://developers.elementor.com/docs/form-fields/field-render/
scraped_at: 2025-10-20T00:58:59.822Z
---

# [\#](https://developers.elementor.com/docs/form-fields/field-render/\#field-render) Field Render

Elementor ProAdvanced

A field used in a form needs to have an output in the frontend. The render method sets the field's code when the field is displayed to the user on the site.

## [\#](https://developers.elementor.com/docs/form-fields/field-render/\#render-method) Render Method

The method that actually generates the field output is called `render()`. In your field class, use the method as follows:

```
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ): void {

		echo '<input type="text" class="elementor-test-field" title="Some text...">';

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

- **Field Render** – The `render()` method renders the data and displays the field output.

## [\#](https://developers.elementor.com/docs/form-fields/field-render/\#render-attribute) Render Attribute

To add attributes "the Elementor way", you should not hardcode the HTML elements with your attributes. You should use the `add_render_attribute()` method. This method is responsible for defining attributes and their values programmatically.

```
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ): void {
		$form->add_render_attribute(
			'input' . $item_index,
			[\
				'type'        => 'text',\
				'class'       => 'elementor-test-field',\
				'placeholder' => esc_html__( 'Some placeholder', 'textdomain' ),\
			]
		);

		echo '<input ' . $form->get_render_attribute_string( 'input' . $item_index ) . '>';
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

## [\#](https://developers.elementor.com/docs/form-fields/field-render/\#retrieve-data-from-field-controls) Retrieve Data From Field Controls

Some fields have [custom controls](https://developers.elementor.com/docs/form-fields/field-controls/) that allow the user to customize the field. Displaying user data in the form widget is done as follows:

```
class Elementor_Test_Field extends \ElementorPro\Modules\Forms\Fields\Field_Base {

	public function render( $item, $item_index, $form ): void {
		$form->add_render_attribute(
			'textarea' . $item_index,
			[\
				'class' => 'elementor-test-field',\
				'rows'  => $item['textarea-rows'],\
				'cols'  => $item['textarea-cols'],\
			]
		);

		echo '<textarea ' . $form->get_render_attribute_string( 'textarea' . $item_index ) . '></textarea>';
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

←
[Field Data](https://developers.elementor.com/docs/form-fields/field-data/)[Field Validation](https://developers.elementor.com/docs/form-fields/field-validation/)
→