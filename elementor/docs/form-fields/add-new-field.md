---
url: https://developers.elementor.com/docs/form-fields/add-new-field/
scraped_at: 2025-10-20T00:58:47.387Z
---

# [\#](https://developers.elementor.com/docs/form-fields/add-new-field/\#add-new-field) Add New Field

Elementor ProAdvanced

The Form widget has built-in field types, but it also accepts new fields registered by external developers.

## [\#](https://developers.elementor.com/docs/form-fields/add-new-field/\#registering-fields) Registering Fields

To register new fields just initiate the field class:

```
function register_new_form_fields( $form_fields_registrar ) {

	require_once( __DIR__ . '/forms/fields/field-1.php' );
	require_once( __DIR__ . '/forms/fields/field-2.php' );

	$form_fields_registrar->register( new \Field_1() );
	$form_fields_registrar->register( new \Field_2() );

}
add_action( 'elementor_pro/forms/fields/register', 'register_new_form_fields' );

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

This hooks to the `elementor_pro/forms/fields/register` action hook which holds the form registrar manager. The manager then registers the new fields by passing the field instances.

←
[Remove Fields](https://developers.elementor.com/docs/form-fields/remove-fields/)[Field Structure](https://developers.elementor.com/docs/form-fields/field-structure/)
→