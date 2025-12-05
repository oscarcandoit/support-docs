---
url: https://developers.elementor.com/docs/theme-conditions/condition-check/
scraped_at: 2025-10-20T00:59:50.577Z
---

# [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#condition-check) Condition Check

Elementor ProAdvanced

Elementor runs a series of checks to ensure that conditions comply with a certain set of rules. The `check()` method sets these checks.

## [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#check-method) Check Method

The method that triggers this condition process is called `check()`. In your condition class, use the method as follows:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return true;
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

If the condition check is valid, the template will be applied.

## [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#checking-conditions) Checking Conditions

Developers can add any type of condition checking. Let's see some examples.

### [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#front-page) Front Page

In the example below, we'll check to see if it's a front page:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_front_page();
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

### [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#_404-page) 404 Page

In the following example we'll check to see if it's a 404 page:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_404();
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

## [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#embed-page) Embed Page

In this example we'll check to see if it's an embed page:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return is_embed();
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

## [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#ssl-page) SSL Page

We can use server variables to check and see if the page was accessed with SSL:

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		return empty( $_SERVER['HTTPS'] );
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

## [\#](https://developers.elementor.com/docs/theme-conditions/condition-check/\#user-browser) User Browser

We can apply different templates for different browsers by checking the [user's browser(opens new window)](https://www.php.net/manual/en/function.get-browser.php):

```
class Elementor_Test_Condition extends \ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base {

	public function check( $args ): bool {
		$browser = get_browser(null, true);
		$is_firefox = ( $browser['browser'] === 'Firefox' );
		return $is_firefox;
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

←
[Condition Data](https://developers.elementor.com/docs/theme-conditions/condition-data/)[Sub-Conditions](https://developers.elementor.com/docs/theme-conditions/sub-conditions/)
→