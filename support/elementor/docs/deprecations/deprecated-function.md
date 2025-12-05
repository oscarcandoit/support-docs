---
url: https://developers.elementor.com/docs/deprecations/deprecated-function/
scraped_at: 2025-10-20T01:04:26.916Z
---

# [\#](https://developers.elementor.com/docs/deprecations/deprecated-function/\#deprecated-function) Deprecated Function

Elementor CoreIntermediate

Elementor offers the `Deprecation::deprecated_function()` method to handle the deprecation process for functions and methods inside Elementor code.

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-function/\#use-cases) Use Cases

Previously, Elementor protected methods by using the `_` prefix. However, this convention is outdated. For instance, `_register_controls()` would now just be `register_controls()`.

Unifying components is another example of this change. Elementor 3.5 renamed many methods in order to unify the registration process. This entailed using [managers](https://developers.elementor.com/docs/managers/), renaming `register_widget_type()`, `register_control()`, `register_tag()`, `add_category()`, and others to simply `register()`.

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-function/\#how-to-deprecate-functions) How To Deprecate Functions

In the following example we need to rename the `add_item()` method and replace it with `register()`.

For example, take the following code:

```
class Items {

	function add_item( $item_instance ): void {
		/* ... */
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

The new code, with the deprecation handler, will look like this:

```
use Elementor\Plugin;

class Items {

	function register( $item_instance ): void {
		/* ... */
	}

	function add_item( $item_instance ): void {
		// Deprecation handler
		Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function(
			'add_item()',
			'3.5.0',
			'register()'
		);

		// Backwards compatibility
		$this->register( $item_instance );
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

17

18

19

20

21

The original method was renamed to `register()`. But, we didn't remove the `add_item()` method, we simply added a deprecation handler to inform developers still using this method to replace it with the new name.

After eight major versions, the code will look like this:

```
class Items {

	function register( $item_instance ): void {
		/* ... */
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

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-function/\#updating-deprecated-functions) Updating Deprecated Functions

Addon developers who use the old `add_item()` method should simply rename the method to `register()`, as follows:

```
class MyItem extends Items {

-	protected function add_item(): void {
+	protected function register(): void {
		/* ... */
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

←
[Introduction](https://developers.elementor.com/docs/deprecations/)[Deprecated Arguments](https://developers.elementor.com/docs/deprecations/deprecated-argument/)
→