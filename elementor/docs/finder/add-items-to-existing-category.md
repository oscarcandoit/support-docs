---
url: https://developers.elementor.com/docs/finder/add-items-to-existing-category/
scraped_at: 2025-10-20T01:02:05.898Z
---

# [\#](https://developers.elementor.com/docs/finder/add-items-to-existing-category/\#add-items-to-an-existing-category) Add Items to an Existing Category

Elementor CoreBasic

In some cases, developers would like to add new items to existing finder categories. You can do that using the `elementor/finder/categories` filter hook.

## [\#](https://developers.elementor.com/docs/finder/add-items-to-existing-category/\#add-items) Add Items

In the example below, the developer is adding the `theme-template` item to the `create` category. This will allow users to easily add new theme templates:

```
public function add_new_finder_items( array $categories ) {

	$categories['create']['items']['theme-template'] = [\
		'title' => esc_html__( 'Add New Theme Template', 'textdomain' ),\
		'icon' => 'plus-circle-o',\
		'url' => $this->get_admin_templates_url() . '#add_new',\
		'keywords' => [ 'template', 'theme', 'new', 'create' ],\
	];
	return $categories;

}
add_filter( 'elementor/finder/categories', 'add_new_finder_items' );

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

The filter hook accepts the `$categories` parameter, which is basically an array of finder categories. We can filter categories from this array and return an updated array.

←
[Add New Finder Items](https://developers.elementor.com/docs/finder/add-new-finder-items/)[Remove Finder Categories](https://developers.elementor.com/docs/finder/remove-finder-categories/)
→