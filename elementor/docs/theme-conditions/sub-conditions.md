---
url: https://developers.elementor.com/docs/theme-conditions/sub-conditions/
scraped_at: 2025-10-20T00:59:54.705Z
---

# [\#](https://developers.elementor.com/docs/theme-conditions/sub-conditions/\#sub-conditions) Sub-Conditions

Elementor ProAdvanced

Conditions can have sub-conditions in order to narrow the conditions. For example, instead of applying a condition to all `Singular` pages, applying it only to `Posts`, or a specific post. Sub-conditions help the user focus the main condition.

## [\#](https://developers.elementor.com/docs/theme-conditions/sub-conditions/\#sub-condition-methods) Sub-Condition Methods

When conditions have sub-conditions, the condition class needs to use the following two methods:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function get_all_label(): string {
		return esc_html__( 'All Items', 'textdomain' );
	}

	public function register_sub_conditions(): void {
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_1(); );
		$this->register_sub_condition( new Elementor_Test_Sub_Condition_2(); );
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

- **Condition All Label** – The `get_all_label()` method returns the all/any label that will be displayed to the user, if the condition has sub-conditions.

![All Sub-Conditions](https://developers.elementor.com/docs/assets/img/elementor-theme-all-sub-conditions.png)

- **Sub-Conditions** – The `register_sub_conditions()` method registers sub-conditions.

![Sub-Conditions](https://developers.elementor.com/docs/assets/img/elementor-theme-sub-condition.png)

←
[Condition Check](https://developers.elementor.com/docs/theme-conditions/condition-check/)[Simple Example](https://developers.elementor.com/docs/theme-conditions/simple-example/)
→