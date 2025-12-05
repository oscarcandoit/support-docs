---
url: https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/
scraped_at: 2025-10-20T01:04:47.701Z
---

# [\#](https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/\#deprecated-filter-hooks) Deprecated Filter Hooks

Elementor CoreIntermediate

Elementor offers the `Deprecation::apply_deprecated_filter()` method to handle the deprecation process for filter hooks inside Elementor code.

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/\#use-cases) Use Cases

When considering naming conventions, the old naming conventions should work alongside the new ones.

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/\#how-to-deprecate-filter-hooks) How To Deprecate Filter Hooks

We have a filter hook called `elementor/old/filter`, and we want to rename it to `elementor/new/filter`.

For example, take the following code:

```
class Name {

	function init( $args ): void {
		$value = apply_filters( 'elementor/old/filter', $value, $args );
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

class Name {

	function init( $args ): void {
		// Deprecation handler
		Plugin::$instance->modules_manager->get_modules( 'dev-tools' )->deprecation->apply_deprecated_filter(
			'elementor/old/filter',
			[ $args ],
			'3.5.0',
			'elementor/new/filter'
		);

		// Run the new filter
		$value = apply_filters( 'elementor/new/filter', $value, $args );
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

The new `elementor/new/filter` hook will run as expected. In addition, the deprecation handler will run the old hook (for backwards compatibility) while sending some notifications to developers.

After eight major versions, the code will look like this:

```
class Name {

	function init( $args ): void {
		$value = apply_filters( 'elementor/new/filter', $value, $args );
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

## [\#](https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/\#updating-deprecated-filter-hooks) Updating Deprecated Filter Hooks

Addon developers who use the old hook should simply rename it, as follows:

```
function hook_callback() {
	/* ... */
}
- add_filter( 'elementor/old/filter', 'hook_callback' );
+ add_filter( 'elementor/new/filter', 'hook_callback' );

```

1

2

3

4

5

←
[Deprecated Action Hooks](https://developers.elementor.com/docs/deprecations/deprecated-action-hook/)[Simple Example](https://developers.elementor.com/docs/deprecations/simple-example/)
→