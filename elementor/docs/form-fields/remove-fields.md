---
url: https://developers.elementor.com/docs/form-fields/remove-fields/
scraped_at: 2025-10-20T00:58:43.577Z
---

# [\#](https://developers.elementor.com/docs/form-fields/remove-fields/\#remove-fields) Remove Fields

Elementor ProAdvanced

To remove an existing field from the form widget we simply need to delete it from the list of available fields.

## [\#](https://developers.elementor.com/docs/form-fields/remove-fields/\#hooks) Hooks

To do that, we simply hook to the `elementor_pro/forms/field_types` filter. This filter holds the list of available fields as a parameter. Developers can change this list to match their needs.

## [\#](https://developers.elementor.com/docs/form-fields/remove-fields/\#remove-fields-2) Remove Fields

A good example is when you don't allow your users to create forms with "File Upload" fields, for security reasons. You can remove the `upload` field from the Elementor form widget with the following code:

```
/**
 * Remove `upload` field from Elementor Form Widget.
 *
 * @param array $fields Elementor form fields.
 * @return array Updated fields list.
 */
function remove_elementor_form_field( $fields ) {

	unset( $fields['upload'] );

	return $fields;

}
add_filter( 'elementor_pro/forms/field_types', 'remove_elementor_form_field' );

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

←
[Introduction](https://developers.elementor.com/docs/form-fields/)[Add New Field](https://developers.elementor.com/docs/form-fields/add-new-field/)
→