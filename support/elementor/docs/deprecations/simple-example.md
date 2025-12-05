---
url: https://developers.elementor.com/docs/deprecations/simple-example/
scraped_at: 2025-10-20T01:04:51.855Z
---

# [\#](https://developers.elementor.com/docs/deprecations/simple-example/\#simple-example) Simple Example

Elementor CoreIntermediate

One example of commonly used deprecated conventions is when addon developers create [widgets](https://developers.elementor.com/docs/widgets/widget-structure/) using methods with deprecated `_` prefix. Previously, Elementor protected methods prefixed with `_` but that naming convention was deprecated.

## [\#](https://developers.elementor.com/docs/deprecations/simple-example/\#widgets) Widgets

Addon developers should update their code, replacing deprecated methods. The fix is very simple, just remove the `_` prefixes:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {}

	public function get_title(): string {}

	public function get_icon(): string {}

	public function get_categories(): array {}

-	protected function _register_controls(): void {}
+	protected function register_controls(): void {}

-	protected function _render(): void {}
+	protected function render(): void {}

-	protected function _content_template(): void {}
+	protected function content_template(): void {}

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

←
[Deprecated Filter Hooks](https://developers.elementor.com/docs/deprecations/deprecated-filter-hook/)[Advanced Example](https://developers.elementor.com/docs/deprecations/advanced-example/)
→