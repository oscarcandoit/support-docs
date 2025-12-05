---
url: https://developers.elementor.com/docs/widgets/widget-information/
scraped_at: 2025-10-20T00:42:37.352Z
---

# [\#](https://developers.elementor.com/docs/widgets/widget-information/\#widget-information) Widget Information

Elementor CoreIntermediate

Elementor widget need to have a unique ID used in the code, and an addition basic information used in the Elementor editor.

## [\#](https://developers.elementor.com/docs/widgets/widget-information/\#widget-name-id) Widget Name/ID

To set a unique ID for the widget, use the `get_name()` method. This string is used in code and in the database. The name should include only lowercase letters and it should not contain spaces (use `_` instead).

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name(): string {
		return 'widget_name';
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

## [\#](https://developers.elementor.com/docs/widgets/widget-information/\#widget-title) Widget Title

Widget title is the label used in the Elementor editor. The end user will see this text when interacting with different panels. The title should use internalization functions to make the string translatable to other languages.

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_title(): string {
		return esc_html__( 'My Widget Name', 'textdomain' );
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

## [\#](https://developers.elementor.com/docs/widgets/widget-information/\#widget-icon) Widget Icon

Each widget has not only a label but also an icon. This icons is displayed in different location in the Editor, like the elements panel and the navigator panel. It's not a required field, but very recommended.

Widgets can use any [Elementor icons(opens new window)](https://elementor.github.io/elementor-icons/) or [FontAwesome icons(opens new window)](https://fontawesome.com/), returning the icon CSS class. Custom icons can also be used.

```
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_icon(): string {
		return 'eicon-code';
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

←
[Widget Data](https://developers.elementor.com/docs/widgets/widget-data/)[Widget Promotions](https://developers.elementor.com/docs/widgets/widget-promotions/)
→