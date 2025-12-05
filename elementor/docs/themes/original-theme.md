---
url: https://developers.elementor.com/docs/themes/original-theme/
scraped_at: 2025-10-20T01:00:33.070Z
---

# [\#](https://developers.elementor.com/docs/themes/original-theme/\#original-theme) Original Theme

Elementor ProIntermediate

To simplify the theme migration process, we stripped all custom code from the original theme (including the WordPress loop), and moved it to the `/template-parts/` folder. This way the code snippets will be much shorter and simpler to understand.

## [\#](https://developers.elementor.com/docs/themes/original-theme/\#original-files) Original Files

Original `header.php` file:

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

<?php get_template_part( 'template-parts/header' ); ?>

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

Original `footer.php` file:

```
<?php get_template_part( 'template-parts/footer' ); ?>

</body>
</html>

```

1

2

3

4

Original `index.php` file:

```
<?php
get_header();

if ( is_archive() || is_home() || is_search() ) {
	get_template_part( 'template-parts/archive' );
} elseif ( is_singular() ) {
	get_template_part( 'template-parts/single' );
} else {
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

10

11

12

Original `archive.php` file:

```
<?php
get_header();

get_template_part( 'template-parts/archive' );

get_footer();

```

1

2

3

4

5

6

Original `single.php` file:

```
<?php
get_header();

get_template_part( 'template-parts/single' );

get_footer();

```

1

2

3

4

5

6

Original `404.php` file:

```
<?php
get_header();

get_template_part( 'template-parts/404' );

get_footer();

```

1

2

3

4

5

6

←
[Migrating Themes](https://developers.elementor.com/docs/themes/migrating-themes/)[Migrating Themes with Functions](https://developers.elementor.com/docs/themes/migrating-themes-with-functions/)
→