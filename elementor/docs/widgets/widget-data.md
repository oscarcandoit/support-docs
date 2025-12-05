---
url: https://developers.elementor.com/docs/widgets/widget-data/
scraped_at: 2025-10-20T00:42:32.453Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-data/\#widget-data) Widget Data

Elementor CoreIntermediate

Every widget requires basic information such as the widget ID, label and icon. In addition, a widget can have optional data providing extra information like an external link describing how to use the widget or promotion to promote premium version of the widget.

## [\#](https://developers.elementor.com/docs/widgets/widget-data/\#data-methods) Data Methods

Widget data needs to be "returned" by certain methods. Those methods are simple:

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {
		return 'widget_name';
	}

	public function get_title(): string {
		return esc_html__( 'My Widget Name', 'textdomain' );
	}

	public function get_icon(): string {
		return 'eicon-code';
	}

	public function get_categories(): array {
		return [ 'general' ];
	}

	public function get_keywords(): array {
		return [ 'keyword', 'keyword' ];
	}

	public function get_custom_help_url(): string {
		return 'https://example.com/widget-name';
	}

	protected function get_upsale_data(): array {
		return [];
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

- **Widget Name** – The `get_name()` method returns the widget name as it will be used in the code.

- **Widget Title** – The `get_title()` method returns the widget label as it will be displayed to the user.

- **Widget Icon** – The `get_icon()` method is an optional, but recommended, method. It lets you set the widget icon. You can use any [Elementor icons(opens new window)](https://elementor.github.io/elementor-icons/) or [FontAwesome icons(opens new window)](https://fontawesome.com/), to simply return the CSS class name.

- **Widget Categories** – The `get_categories()` method lets you set [the category of the widget](https://developers.elementor.com/docs/widgets/widget-categories/).

- **Widget Keywords** – The `get_keywords()` method lets you set widget keywords and is used to filter the widget list.

- **Widget Help URL** – The `get_custom_help_url()` method is an optional method that sets a custom URL, where the user can get more information about the widget, below the controls.

- **Widget Promotion** – The `get_upsale_data()` method is an optional method that is used to [display promotions](https://developers.elementor.com/docs/widgets/widget-promotions/) at the bottom of the widget panel.


←
[Widget Structure](https://developers.elementor.com/docs/widgets/widget-structure/)[Widget Information](https://developers.elementor.com/docs/widgets/widget-information/)
→