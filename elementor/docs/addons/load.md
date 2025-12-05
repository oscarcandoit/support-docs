---
url: https://developers.elementor.com/docs/addons/load/
scraped_at: 2025-10-20T00:56:05.277Z
---

# [\#](https://developers.elementor.com/docs/addons/load/\#loading-process) Loading Process

Elementor CoreBasic

Now that we have a WordPress plugin with all the header comments containing the basic information, we need to load the actual functionality. We should tell WordPress to load our functionality once activated plugins have been loaded. This is important as we need to make sure Elementor is loaded.

## [\#](https://developers.elementor.com/docs/addons/load/\#wordpress-lifecycle-hooks) WordPress Lifecycle Hooks

To load our functionality we will wrap our code into a separate function. This code will be loaded when the WordPress `plugins_loaded` action hook is fired.

The following code can be used to run our functionality:

```
function elementor_test_addon() {

	// your code here

}
add_action( 'plugins_loaded', 'elementor_test_addon' );

```

1

2

3

4

5

6

Please note that this hook fires before WordPress themes are setup, before the `init` and `wp_loaded` action hooks.

## [\#](https://developers.elementor.com/docs/addons/load/\#example) Example

Let's say our addon has the following folder structure:

```
elementor-test-addon/
|
├─ includes/
|  |
|  ├─ controls/
|  ├─ widgets/
|  |
|  ├─ controls-manager.php
|  └─ widgets-manager.php
|
└─ elementor-test-addon.php

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

Our `/includes/` folder contains the different components, and each component has a [manager](https://developers.elementor.com/docs/managers/) that registers the different items.

The main `elementor-test-addon.php` file loads the functionality:

```
<?php
/**
 * Plugin Name: Elementor Test Addon
 * Description: Custom Elementor addon.
 * Plugin URI:  https://elementor.com/
 * Version:     1.0.0
 * Author:      Elementor Developer
 * Author URI:  https://developers.elementor.com/
 * Text Domain: elementor-test-addon
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.25.0
 * Elementor Pro tested up to: 3.25.0
 */

function elementor_test_addon() {

	// Load plugin file
	require_once( __DIR__ . '/includes/widgets-manager.php' );
	require_once( __DIR__ . '/includes/controls-manager.php' );

}
add_action( 'plugins_loaded', 'elementor_test_addon' );

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

Until now, we have yet to start on Elementor functionality, it was all WordPress related setup.

←
[Header Comments](https://developers.elementor.com/docs/addons/plugin-header/)[Main Class](https://developers.elementor.com/docs/addons/main-class/)
→