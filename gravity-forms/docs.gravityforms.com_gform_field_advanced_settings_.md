---
url: "https://docs.gravityforms.com/gform_field_advanced_settings/"
title: "gform_field_advanced_settings - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)    - [Actions](https://docs.gravityforms.com/category/developers/hooks/actions/)      - [Add-On Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/addon-framework-actions/)
      - [Confirmations Actions](https://docs.gravityforms.com/category/developers/hooks/actions/confirmations-actions/)
      - [Editor Actions](https://docs.gravityforms.com/category/developers/hooks/actions/editor-actions/)
      - [Email Actions](https://docs.gravityforms.com/category/developers/hooks/actions/email-actions/)
      - [Entry Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-actions/)
      - [Entry Change Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-change-actions/)
      - [Entry Detail Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-detail-actions/)
      - [Entry List Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-list-actions/)
      - [Entry Printing Actions](https://docs.gravityforms.com/category/developers/hooks/actions/entry-printing-actions/)
      - [Field Framework Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-framework-actions/)        - [gform\_field\_advanced\_settings](https://docs.gravityforms.com/gform_field_advanced_settings/ "gform_field_advanced_settings")
        - [gform\_field\_appearance\_settings](https://docs.gravityforms.com/gform_field_appearance_settings/ "gform_field_appearance_settings")
        - [gform\_field\_standard\_settings](https://docs.gravityforms.com/gform_field_standard_settings/ "gform_field_standard_settings")
      - [Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/field-actions/)
      - [Gravity Forms Core Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-core-actions/)
      - [Gravity Forms Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/gravity-forms-settings-actions/)
      - [Form Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-actions/)
      - [Form Activity Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-activity-actions/)
      - [Form Settings Actions](https://docs.gravityforms.com/category/developers/hooks/actions/form-settings-actions/)
      - [Import/Export Actions](https://docs.gravityforms.com/category/developers/hooks/actions/importexport-actions/)
      - [Notifications Actions](https://docs.gravityforms.com/category/developers/hooks/actions/notifications-actions/)
      - [Payment Actions](https://docs.gravityforms.com/category/developers/hooks/actions/payment-actions/)
      - [Post Field Actions](https://docs.gravityforms.com/category/developers/hooks/actions/post-fields-actions/)
      - [Script/Style Actions](https://docs.gravityforms.com/category/developers/hooks/actions/scriptstyle-actions/)
      - [Submission Actions](https://docs.gravityforms.com/category/developers/hooks/actions/submission-actions/)
      - [System Status Actions](https://docs.gravityforms.com/category/developers/hooks/actions/system-status-actions/)
    - [Filters](https://docs.gravityforms.com/category/developers/hooks/filters/)
    - [JavaScript](https://docs.gravityforms.com/category/developers/hooks/javascript/)
    - [Deprecated](https://docs.gravityforms.com/category/developers/hooks/deprecated/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# gform\_field\_advanced\_settings

- [Introduction](https://docs.gravityforms.com/gform_field_advanced_settings/#h-introduction)
- [Usage](https://docs.gravityforms.com/gform_field_advanced_settings/#h-usage)
- [Examples](https://docs.gravityforms.com/gform_field_advanced_settings/#h-examples)
- [Placement](https://docs.gravityforms.com/gform_field_advanced_settings/#h-placement)
- [Source Code](https://docs.gravityforms.com/gform_field_advanced_settings/#h-source-code)

## Introduction

Use this action hook to create a new field setting under the Advanced tab. Useful when implementing a new custom field type that requires custom settings.

## Usage

```
add_action( 'gform_field_advanced_settings', 'my_advanced_settings', 10, 2 );
```

## Parameters

- **$position** [integer](https://docs.gravityforms.com/integer)
Specifies the position that the settings will be displayed. For a list of all available positions, search form\_detail.php for “gform\_field\_advanced\_settings” or review the [Advanced Field Settings](https://docs.gravityforms.com/advanced-field-settings) article.

- **$form\_id** [integer](https://docs.gravityforms.com/integer)

The ID of the form from which the entry value was submitted.


## Examples

This example creates a new Advanced setting on position 50 (right after the Admin Label setting), that specifies if the field data should be encrypted. This code sample works in Gravity Forms 2.4, 2.5 and later.

```
add_action( 'gform_field_advanced_settings', 'my_advanced_settings', 10, 2 );
function my_advanced_settings( $position, $form_id ) {
	//create settings on position 50 (right after Admin Label)
	if ( $position == 50 ) {
		?>
		<li class="encrypt_setting field_setting">
			<input type="checkbox" id="field_encrypt_value" onclick="SetFieldProperty('encryptField', this.checked);" />
			<label for="field_encrypt_value" style="display:inline;">
				<?php _e("Encrypt Field Value", "your_text_domain"); ?>
				<?php gform_tooltip("form_field_encrypt_value") ?>
			</label>
		</li>
		<?php
	}
}
//Action to inject supporting script to the form editor page
add_action( 'gform_editor_js', 'editor_script' );
function editor_script(){
	?>
	<script type='text/javascript'>
		//adding setting to fields of type "text"
		fieldSettings.text += ", .encrypt_setting";
		//binding to the load field settings event to initialize the checkbox
		jQuery(document).on("gform_load_field_settings", function(event, field, form){
			jQuery( '#field_encrypt_value' ).prop( 'checked', Boolean( rgar( field, 'encryptField' ) ) );
		});
	</script>
	<?php
}
//Filter to add a new tooltip
add_filter( 'gform_tooltips', 'add_encryption_tooltips' );
function add_encryption_tooltips( $tooltips ) {
	$tooltips['form_field_encrypt_value'] = "<strong>Encryption</strong>Check this box to encrypt this field's data";
	return $tooltips;
}
```

## Placement

This code can be used in the [functions.php](https://developer.wordpress.org/themes/basics/theme-functions/) file of the active theme, a custom functions plugin, a custom add-on, or with a code snippets plugin.

See also the PHP section in this article: [Where Do I Put This Code?](https://docs.gravityforms.com/where-do-i-put-this-code/)

## Source Code

This hook is located in _form\_detail.php_.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: April 17, 2023

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)