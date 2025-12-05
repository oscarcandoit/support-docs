---
url: https://developers.elementor.com/docs/editor-controls/control-date-time/
scraped_at: 2025-10-20T00:58:50.501Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-date-time/\#date-time-control) Date Time Control

Elementor CoreBasic![Date Time Control](https://developers.elementor.com/docs/assets/img/controls/control-date-time.png)

Elementor date time control displays a date/time picker field based on the [Flatpickr(opens new window)](https://flatpickr.js.org/) library.

The control is defined in `Control_Date_Time` class which extends `Base_Data_Control` class.

When using this control, the `type` should be set to `\Elementor\Controls_Manager::DATE_TIME` constant.

## [\#](https://developers.elementor.com/docs/editor-controls/control-date-time/\#arguments) Arguments

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `string` | date\_time | The type of the control. |
| `label` | `string` |  | The label that appears above of the field. |
| `description` | `string` |  | The description that appears below the field. |
| `show_label` | `bool` | true | Whether to display the label. |
| `label_block` | `bool` | true | Whether to display the label in a separate line. |
| `separator` | `string` | default | Set the position of the control separator. Available values are `default`, `before` and `after`. `default` will hide the separator, unless the control type has specific separator settings. `before` / `after` will position the separator before/after the control. |
| `picker_options` | `array` | enableTime:true,<br> minuteIncrement:1 | The picker [configurations](https://chmln.github.io/flatpickr/options/). |
| `default` | `string` |  | Default date/time in MySQL format ( `YYYY-mm-dd HH:ii`). |

## [\#](https://developers.elementor.com/docs/editor-controls/control-date-time/\#return-value) Return Value

( _`string`_) The chosen date/time in MySQL format ( `YYYY-mm-dd HH:ii`).

## [\#](https://developers.elementor.com/docs/editor-controls/control-date-time/\#usage) Usage

```
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		$this->add_control(
			'due_date',
			[\
				'label' => esc_html__( 'Due Date', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::DATE_TIME,\
			]
		);

		$this->end_controls_section();

	}

	protected function render(): void {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['due_date'] ) ) {
			return;
		}

		$due_date = strtotime( $settings['due_date'] );
		$due_date_in_days = $due_date / DAY_IN_SECONDS;
		?>
		<p><?php printf( esc_html__( 'Something will happen in %s days.', 'textdomain' ), $due_date_in_days ); ?></p>
		<?php
	}

	protected function content_template(): void {
		?>
		<#
		if ( '' === settings.due_date ) {
			return;
		}

		const due_date = new Date( settings.due_date );
		const now_date = new Date();
		const due_date_in_days = Math.floor( ( due_date - now_date ) / 86400000 ); // 86400000 milliseconds in one Day.
		#>
		<p> Something will happen in {{{ due_date_in_days }}} days. </p>
		<?php
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

32

33

34

35

36

37

38

39

40

41

42

43

44

45

46

47

48

49

50

51

52

53

54

55

←
[Font Control](https://developers.elementor.com/docs/editor-controls/control-font/)[Gallery Control](https://developers.elementor.com/docs/editor-controls/control-gallery/)
→