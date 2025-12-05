---
url: https://developers.elementor.com/docs/form-actions/action-run/
scraped_at: 2025-10-20T00:58:19.494Z
---

# [\#](https://developers.elementor.com/docs/form-actions/action-run/\#action-run) Action Run

Elementor ProAdvanced

The actual method that executes the action when a form is submitted. This is the main method the action triggers. It can use optional data from custom controls, but that is not required.

## [\#](https://developers.elementor.com/docs/form-actions/action-run/\#run-method) Run Method

The method that triggers the action is called `run()`. The method is executed only when the form is submitted. In your action class, use the method as follows:

```
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		// ...

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

- **Run Action** \- The `run()` method triggers the actual action when a form is submitted. The `$record` parameter is a form record instance and the `$ajax_handler` is an instance of the form ajax handler.

## [\#](https://developers.elementor.com/docs/form-actions/action-run/\#execute-action) Execute Action

Developers can execute any code on form submission, the possibilities are endless. Let's see some examples.

### [\#](https://developers.elementor.com/docs/form-actions/action-run/\#send-an-email) Send an Email

In the example below, we'll send an email each time a form is submitted:

```
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_mail( /* ... */ );

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

### [\#](https://developers.elementor.com/docs/form-actions/action-run/\#send-http-request) Send HTTP Request

In the following example we'll send an HTTP request every time a form is submitted:

```
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_remote_post( /* ... */ )

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

### [\#](https://developers.elementor.com/docs/form-actions/action-run/\#create-wordpress-post-page-cpt) Create WordPress Post/Page/CPT

Another use case is to create WordPress CPTs after every form submission:

```
class Elementor_Test_Action extends \ElementorPro\Modules\Forms\Classes\Action_Base {

	public function run( $record, $ajax_handler ): void {

		wp_insert_post( /* ... */ );

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
[Action Controls](https://developers.elementor.com/docs/form-actions/action-controls/)[Action On Export](https://developers.elementor.com/docs/form-actions/action-on-export/)
→