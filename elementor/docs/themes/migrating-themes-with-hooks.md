---
url: https://developers.elementor.com/docs/themes/migrating-themes-with-hooks/
scraped_at: 2025-10-20T01:00:49.283Z
---

# [\#](https://developers.elementor.com/docs/themes/migrating-themes-with-hooks/\#migrating-themes-with-hooks) Migrating Themes with Hooks

Elementor ProIntermediate

In this example, we'll add theme locations to the [original theme](https://developers.elementor.com/docs/themes/original-theme/) using **hooks**. After migration, the theme will look as follows:

## [\#](https://developers.elementor.com/docs/themes/migrating-themes-with-hooks/\#themes-files) Themes Files

The new `function.php` file:

```
<?php
// Register Elementor locations
function theme_prefix_register_elementor_locations( $elementor_theme_manager ) {
	$elementor_theme_manager->register_location(
		'header',
		[\
			'hook' => 'theme_prefix_header',\
			'remove_hooks' => [ 'theme_prefix_print_elementor_header' ],\
		]
	);
	$elementor_theme_manager->register_location(
		'footer',
		[\
			'hook' => 'theme_prefix_footer',\
			'remove_hooks' => [ 'theme_prefix_print_elementor_footer' ],\
		]
	);
	$elementor_theme_manager->register_location(
		'single',
		[\
			'hook' => 'theme_prefix_single',\
			'remove_hooks' => [ 'theme_prefix_print_elementor_single' ],\
		]
	);
	$elementor_theme_manager->register_location(
		'archive',
		[\
			'hook' => 'theme_prefix_archive',\
			'remove_hooks' => [ 'theme_prefix_print_elementor_archive' ],\
		]
	);
}
add_action( 'elementor/theme/register_locations', 'theme_prefix_register_elementor_locations' );

// Theme header
function theme_prefix_print_elementor_header() {
	get_template_part( 'templates-parts/header' );
}
add_action( 'theme_prefix_header', 'theme_prefix_print_elementor_header' );

// Theme footer
function theme_prefix_print_elementor_footer() {
	get_template_part( 'templates-parts/footer' );
}
add_action( 'theme_prefix_footer', 'theme_prefix_print_elementor_footer' );

// Single page
function theme_prefix_print_elementor_single() {
	get_template_part( 'templates-parts/single' );
}
add_action( 'theme_prefix_single', 'theme_prefix_print_elementor_single' );

// Archive page
function theme_prefix_print_elementor_archive() {
	get_template_part( 'templates-parts/archive' );
}
add_action( 'theme_prefix_archive', 'theme_prefix_print_elementor_archive' );

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

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

56

57

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

<?php do_action( 'theme_prefix_header' ); ?>

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

The new `footer.php` file:

```
<?php do_action( 'theme_prefix_footer' ); ?>

<?php wp_footer(); ?>

</body>
</html>

```

1

2

3

4

5

6

The new `archive.php` file:

```
<?php
get_header();

do_action( 'theme_prefix_archive' );

get_footer();

```

1

2

3

4

5

6

The new `single.php` file:

```
<?php
get_header();

do_action( 'theme_prefix_single' );

get_footer();

```

1

2

3

4

5

6

←
[Migrating Themes with Functions](https://developers.elementor.com/docs/themes/migrating-themes-with-functions/)