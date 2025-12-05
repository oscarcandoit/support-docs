---
url: https://developers.elementor.com/docs/theme-conditions/add-new-condition/
scraped_at: 2025-10-20T00:59:33.885Z
---

# [\#](https://developers.elementor.com/docs/theme-conditions/add-new-condition/\#add-new-condition) Add New Condition

Elementor ProAdvanced

Elementor's template display mechanism has several built-in conditions, but external developers can create and register their own conditions.

## [\#](https://developers.elementor.com/docs/theme-conditions/add-new-condition/\#registering-conditions) Registering Conditions

To register new conditions, you just need to initiate the condition class:

```
function register_new_theme_conditions( $conditions_manager  ) {

	require_once( __DIR__ . '/theme-conditions/condition-1.php' );
	require_once( __DIR__ . '/theme-conditions/condition-2.php' );

	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Condition_1() );
	$conditions_manager->get_condition( 'general' )->register_sub_condition( new \Condition_2() );

}
add_action( 'elementor/theme/register_conditions', 'register_new_theme_conditions' );

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

This code snippet hooks to the `elementor/theme/register_conditions` action hook which holds the conditions manager. The manager then registers the condition by initiating new condition instances.

## [\#](https://developers.elementor.com/docs/theme-conditions/add-new-condition/\#registering-sub-conditions) Registering Sub-Conditions

There are two ways to register sub-conditions, either from the conditions manager or from the condition class itself.

To register sub-conditions from the manager, use the following code:

```
function register_new_theme_conditions( $conditions_manager  ) {

	require_once( __DIR__ . '/theme-conditions/main-condition.php' );
	require_once( __DIR__ . '/theme-conditions/sub-condition-1.php' );
	require_once( __DIR__ . '/theme-conditions/sub-condition-2.php' );

	$conditions_manager
		->get_condition( 'general' )
		->register_sub_condition( new \Main_Condition() );

	$conditions_manager
		->get_condition( 'main_condition_name' )
		->register_sub_condition( new \Sub_Condition_1() );

	$conditions_manager
		->get_condition( 'main_condition_name' )
		->register_sub_condition( new \Sub_Condition_2() );

}
add_action( 'elementor/theme/register_conditions', 'register_new_theme_conditions' );

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

To register sub-conditions from the main condition class, see the [sub-conditions](https://developers.elementor.com/docs/theme-conditions/sub-conditions/) section.

←
[Introduction](https://developers.elementor.com/docs/theme-conditions/)[Condition Structure](https://developers.elementor.com/docs/theme-conditions/condition-structure/)
→