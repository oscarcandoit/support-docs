---
url: https://developers.elementor.com/docs/widgets/widget-structure/
scraped_at: 2025-10-20T00:42:27.169Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-structure/\#widget-structure) Widget Structure

Elementor CoreIntermediate

Creating a custom Elementor Widget is not very different from creating a native WordPress widget. Start by creating a class that extends the `\Elementor\Widget_Base` class and fill in all the required methods.

Each widget needs to have a few basic settings - a unique name that will identify the widget in the code, a title that will be used as the widget label, and an icon. There are also advanced settings such as widget controls which are the fields where users select their custom data, and a render script that generates the final output based on user data from the widget controls.

## [\#](https://developers.elementor.com/docs/widgets/widget-structure/\#widget-class) Widget Class

First, we need to create a class that extends the `\Elementor\Widget_Base` class:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {
}

```

1

2

## [\#](https://developers.elementor.com/docs/widgets/widget-structure/\#widget-methods) Widget Methods

A simple widget skeleton class will look as follows:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {}

	public function get_title(): string {}

	public function get_icon(): string {}

	public function get_categories(): array {}

	public function get_keywords(): array {}

	public function get_custom_help_url(): string {}

	protected function get_upsale_data(): array {}

	public function get_script_depends(): array {}

	public function get_style_depends(): array {}

	public function has_widget_inner_wrapper(): bool {}

	protected function is_dynamic_content(): bool {}

	protected function register_controls(): void {}

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

The `\Elementor\Widget_Base` class has many more methods, but the vast majority of your needs are covered by the methods mentioned above.

These methods can be divided into five groups:

- [Data](https://developers.elementor.com/docs/widgets/widget-data/)
- [Dependencies](https://developers.elementor.com/docs/widgets/widget-dependencies/)
- [Controls](https://developers.elementor.com/docs/widgets/widget-controls/)
- [Rendering](https://developers.elementor.com/docs/widgets/widget-rendering/)

←
[Remove Widgets](https://developers.elementor.com/docs/widgets/remove-widgets/)[Widget Data](https://developers.elementor.com/docs/widgets/widget-data/)
→