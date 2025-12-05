---
url: https://developers.elementor.com/docs/widgets/widget-rendering
scraped_at: 2025-10-20T00:54:40.352Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-rendering/\#widget-rendering) Widget Rendering

Elementor CoreIntermediate

The last step in widget development is to display the output. Each widget needs to render the data returned from the controls, and generate the final HTML displayed in the frontend and the preview area.

## [\#](https://developers.elementor.com/docs/widgets/widget-rendering/\#rendering-methods) Rendering Methods

Elementor has two rendering methods, both rely on the returned values from the control, but each method renders differently as one uses PHP and the other uses JS.

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function render(): void {}

	protected function content_template(): void {}

}

```

1

2

3

4

5

6

7

- `render()` – Written as a PHP template that generates the **frontend** output.

- `content_template()` – Written as a JS template that generates the [preview](https://developers.elementor.com/docs/editor/elementor-preview/) output in [the editor](https://developers.elementor.com/docs/editor/).


## [\#](https://developers.elementor.com/docs/widgets/widget-rendering/\#rendering-different-controls) Rendering Different Controls

Elementor offers a number of ways to use the returned value of a control. Widgets can simply print the value in the template, use the value to create a CSS rule in the stylesheet file, add a class to the element template wrapper, and more.

We're going to dive in and see how this is done using the different methods. We'll start with very simple methods and move on to more advanced ones.

- [Widget Settings](https://developers.elementor.com/docs/widgets/widget-settings/)
- [Rendering Text](https://developers.elementor.com/docs/widgets/rendering-text/)
- [Rendering Style](https://developers.elementor.com/docs/widgets/rendering-style/)
- [Rendering Media](https://developers.elementor.com/docs/widgets/rendering-media/)
- [Rendering Repeater](https://developers.elementor.com/docs/widgets/rendering-repeaters/)
- [Rendering HTML Attribute](https://developers.elementor.com/docs/widgets/rendering-html-attribute/)
- [Rendering Inline Editing](https://developers.elementor.com/docs/widgets/rendering-inline-editing/)
- [Widget Output Caching](https://developers.elementor.com/docs/widgets/widget-output-caching/)

←
[Widget Controls](https://developers.elementor.com/docs/widgets/widget-controls/)[Widget Settings](https://developers.elementor.com/docs/widgets/widget-settings/)
→