---
url: https://developers.elementor.com/docs/widgets/widget-optimization/
scraped_at: 2025-10-20T00:43:39.975Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-optimization/\#widget-optimization) Widget Optimization

Elementor CoreIntermediate

Elementor provides various methods to optimize widgets and enhance performance. To maintain backward compatibility, not all optimizations are applied to every widget. Additionally, each widget has unique characteristics, so certain optimizations may not be applicable in all cases.

## [\#](https://developers.elementor.com/docs/widgets/widget-optimization/\#performance-optimization-methods) Performance Optimization Methods

Widget developers can implement the following two optional methods in their widget classes to help Elementor handle widgets more efficiently:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function has_widget_inner_wrapper(): bool {}

	protected function is_dynamic_content(): bool {}

}

```

1

2

3

4

5

6

7

- **DOM Optimization** \- The `has_widget_inner_wrapper()` method lets you determine whether the widget uses optimized DOM structure or not.

- **Element Output Caching** \- The `is_dynamic_content()` method lets you determine whether the widget returns dynamic content, to cache the element HTML output or not.


←
[Rendering Inline Editing](https://developers.elementor.com/docs/widgets/rendering-inline-editing/)[Widget DOM Optimization](https://developers.elementor.com/docs/widgets/widget-inner-wrapper/)
→