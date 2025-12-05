---
url: https://developers.elementor.com/docs/controls/control-enqueue/
scraped_at: 2025-10-20T00:56:51.548Z
---

# [\#](https://developers.elementor.com/docs/controls/control-enqueue/\#control-enqueue) Control Enqueue

Elementor CoreAdvanced

Controls can register and enqueue scripts & styles used by the control.

## [\#](https://developers.elementor.com/docs/controls/control-enqueue/\#enqueue-method) Enqueue Method

If you need to use an external library or some custom JS/CSS, you can do that by registering scripts using the `enqueue()` method:

```
class Elementor_Test_Control extends \Elementor\Base_Control {

	protected function enqueue(): void {

		// Styles
		wp_register_style( 'control-style', plugins_url( 'assets/css/control-style.css', __FILE__ ) );
		wp_enqueue_style( 'control-style' );

		// Scripts
		wp_register_script( 'control-script', plugins_url( 'assets/js/control-script.js', __FILE__ ) );
		wp_enqueue_script( 'control-script' );

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

←
[Control Template](https://developers.elementor.com/docs/controls/control-template/)[Simple Example](https://developers.elementor.com/docs/controls/simple-example/)
→