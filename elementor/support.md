---
url: https://developers.elementor.com/elementor-pro-2-7-custom-fonts-font-display-support
scraped_at: 2025-10-20T01:12:47.243Z
---

# Elementor Pro 2.7: Custom Fonts \`font-display\` support

- Ohad Raz
- [August 19, 2019](https://developers.elementor.com/2019/08/19/)
- 31 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.7

![Fonts](https://developers.elementor.com/wp-content/uploads/2021/12/fonts-1024x535.png)

Elementor Pro 2.7 will add support for the `font-display` property which defines how font files are loaded and displayed by the browser.

This feature was widely requested ( [#5993](https://github.com/elementor/elementor/issues/5993) ) so it is implemented with a default value of `auto` which is the equivalent to not having it at all.

You can now modify the value to `block,swap,fallback,optional` via a filter we added, ex:

```php rainbow rainbow-show
add_filter( 'elementor_pro/custom_fonts/font_display', function( $current_value, $font_family, $data ) {
	return 'swap';
}, 10, 3 );

```

After adding the code above, you will need to regenerate the CSS via Elementor > Tools > Regenerate CSS on your WordPress Dashboard.

This will set all Elementor Pro Custom Fonts `font-display` to `swap`.

As can be seen, the filters’ callback accepts 3 arguments:

- `$current_value` – (string) defaults ‘ `auto`‘ the value filtered.
- `$font_family` – (string) the current font family.
- `$data` – (array) the current font data config.

You can use that to set different values based on your needs, ex, change only font family named ‘Lobster’ `font-display` to `block`:

```php rainbow rainbow-show
add_filter( 'elementor_pro/custom_fonts/font_display', function( $current_value, $font_family, $data ) {
	if ( 'Lobster' === $font_family ) {
		$current_value = 'block';
	}
	return $current_value;
}, 10, 3 );

```

#### Trouble shooting:

If you add your custom filter to alter the `font-display` property after you have uploaded you custom fonts, you need to regenerate the `font-face` CSS, which can be easily done by:

1. Head over to the Custom fonts screen at Elementor > Custom Fonts.
2. Edit the custom font you want to regenerate (simple **edit** and **update**, no changes are needed).
3. Repeat step 2 for each font you want to regenerate.
4. Head over to **Elementor** > **Tools** \> click on the **Regenerate Files**.

This needs to be done every time you change the value of `font-display` via this hook.

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