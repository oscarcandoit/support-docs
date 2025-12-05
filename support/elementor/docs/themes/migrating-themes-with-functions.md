---
url: https://developers.elementor.com/docs/themes/migrating-themes-with-functions/
scraped_at: 2025-10-20T01:00:40.578Z
---

# [\#](https://developers.elementor.com/docs/themes/migrating-themes-with-functions/\#migrating-themes-with-functions) Migrating Themes with Functions

Elementor ProIntermediate

In this example, we'll add theme locations to the [original theme](https://developers.elementor.com/docs/themes/original-theme/) using simple **functions**. After migration, the theme will look as follows:

## [\#](https://developers.elementor.com/docs/themes/migrating-themes-with-functions/\#themes-files) Themes Files

The new `function.php` file:

```
<?php
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_all_core_location();

}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

```

1

2

3

4

5

6

7

The new `header.php` file:

```
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php
// Elementor `header` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'header' ) ) {
	get_template_part( 'template-parts/header' );
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

The new `footer.php` file:

```
<?php
// Elementor `footer` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
	get_template_part( 'template-parts/footer' );
}

wp_footer();
?>

</body>
</html>

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

The new `index.php` file:

```
<?php
get_header();

if ( is_archive() || is_home() || is_search() ) {
	// Elementor `archive` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
		get_template_part( 'template-parts/archive' );
	}
} elseif ( is_singular() ) {
	// Elementor `single` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
		get_template_part( 'template-parts/single' );
	}
} else {
	// Elementor `404` location
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
		get_template_part( 'template-parts/404' );
	}
}

get_footer();

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

The new `archive.php` file:

```
<?php
get_header();

// Elementor `archive` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
	get_template_part( 'template-parts/archive' );
}

get_footer();

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

The new `single.php` file:

```
<?php
get_header();

// Elementor `single` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
	get_template_part( 'template-parts/single' );
}

get_footer();

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

The new `404.php` file:

```
<?php
get_header();

// Elementor `single` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'single' ) ) {
	get_template_part( 'template-parts/404' );
}

get_footer();

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

The new `search.php` file:

```
<?php
get_header();

// Elementor `archive` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'archive' ) ) {
	get_template_part( 'template-parts/search' );
}

get_footer();

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

←
[Original Theme](https://developers.elementor.com/docs/themes/original-theme/)[Migrating Themes with Hooks](https://developers.elementor.com/docs/themes/migrating-themes-with-hooks/)
→