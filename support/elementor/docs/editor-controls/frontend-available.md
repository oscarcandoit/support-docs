---
url: https://developers.elementor.com/docs/editor-controls/frontend-available/
scraped_at: 2025-10-20T01:01:36.182Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/frontend-available/\#frontend-available) Frontend Available

Elementor CoreAdvanced

In some cases, developers need to use the control value inside the widget JS loaded in the frontend. For example, an Elementor widget that uses an external slider library needs to get the amount of slides to display and pass the data to the library script in the frontend. Elementor lets developers expose control values to be used in the frontend.

## [\#](https://developers.elementor.com/docs/editor-controls/frontend-available/\#frontend-available-argument) Frontend Available Argument

The editor has hundreds of controls. Exposing all of them in the frontend can cause performance issues. This is why by default all control values are not available in the frontend. Developers can override this setting by explicitly choosing which control data will be availble in the frontend. This is done using the `frontend_available` argument.

```
$this->add_control(
	'unique-control-name',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::NUMBER,\
		'default' => 100,\
		'frontend_available' => true,\
	]
);

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

By default, `frontend_available` is set to `false`. Developers can override this by setting it to `true`.

## [\#](https://developers.elementor.com/docs/editor-controls/frontend-available/\#fetch-control-data) Fetch Control Data

Each widget can load [custom script handlers](https://developers.elementor.com/docs/widgets/widget-dependencies/) which are loaded dynamically if the widget is used in the page.

```
<?php
/**
 * Register Elementor test widget.
 *
 * Include widget file and register widget class.
 *
 * @since 1.0.0
 * @param \Elementor\Widgets_Manager $widgets_manager Elementor widgets manager.
 * @return void
 */
function elementor_test_widget_registration( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/test-widget.php' );

	$widgets_manager->register( new \Elementor_Test_Widget() );

}
add_action( 'elementor/widgets/register', 'elementor_test_widget_registration' );

/**
 * Register Elementor test widget dependencies.
 *
 * Registers all the scripts and styles to be enqueued later.
 *
 * @since 1.0.0
 * @return void
 */
function elementor_test_widget_dependencies() {

	wp_register_script(
		'test-widget-handler',
		plugins_url( 'js/test-widget.js', __FILE__ ),
		[ 'elementor-frontend' ] // Dependent on 'elementor-frontend' script.
	);

}
add_action( 'wp_enqueue_scripts', 'elementor_test_widget_dependencies' );

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

```
<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve test widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name(): string {
		return 'test_widget';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve test widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title(): string {
		return esc_html__( 'Test Widget', 'textdomain' );
	}

	/**
	 * Get script dependencies.
	 *
	 * Retrieve the list of script dependencies the element requires.
	 *
	 * @since 1.9.0
	 * @access public
	 * @return array Element scripts dependencies.
	 */
	public function get_script_depends(): array {
		return [ 'test-widget-handler' ];
	}

	/**
	 * Register widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls(): void {

		$this->start_controls_section(
			'content_section',
			[\
				'label' => esc_html__( 'Content', 'textdomain' ),\
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,\
			]
		);

		$this->add_control(
			'some_number',
			[\
				'label' => esc_html__( 'Some Number', 'textdomain' ),\
				'type' => \Elementor\Controls_Manager::NUMBER,\
				'default' => 100,\
				'frontend_available' => true,\
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render(): void {
		?>
		<div class="test-widget"></div>
		<?php
	}

	/**
	 * Render widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template(): void {
		?>
		<div class="test-widget"></div>
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

56

57

58

59

60

61

62

63

64

65

66

67

68

69

70

71

72

73

74

75

76

77

78

79

80

81

82

83

84

85

86

87

88

89

90

91

92

93

94

95

96

97

98

99

100

101

102

103

Please note that the widget's `render()` method does not display any output. We want to insert the data from the control using JS. To do that, we registered a JS script located in `js/test-widget.js`, using the `get_style_depends()` method.

Now, the widget JS handler class should extend the `elementorModules.frontend.handlers.Base` class. This base class acts as an "abstract" class, defining basic methods like `onInit()` and providing access to the exposed control data using `getElementSettings()`.

```
/**
 * Test Widget JS Handler Class
 */
class TestWidgetHandler extends elementorModules.frontend.handlers.Base {

	/**
	 * Update Test Widget Content
	 *
	 * Custom method used by test-widget that inserts the control value using JS.
	 */
	updateTestWidgetContent() {
		if ( ! this.contentWrapper ) {
			const widgetUniqueSelector = `div[data-id="${this.getID()}"] .test-widget`;
			this.contentWrapper = document.querySelector( widgetUniqueSelector );
		}

		this.contentWrapper.innerText = this.getElementSettings( 'some_number' );
	}

	/**
	 * On Init
	 *
	 * Runs when the widget is loaded and initialized in the frontend.
	 */
	onInit() {
		this.updateTestWidgetContent();
	}

	/**
	 * On Element Change
	 *
	 * Runs every time a control value is changed by the user in the editor.
	 *
	 * @param {string} propertyName - The ID of the control that was changed.
	 */
	onElementChange( propertyName ) {
		if ( 'some_number' === propertyName ) {
			this.updateTestWidgetContent();
		}
	}

}

/**
 * Register JS Handler for the Test Widget
 *
 * When Elementor frontend was initiated, and the widget is ready, register the widet
 * JS handler.
 */
window.addEventListener( 'elementor/frontend/init', () => {
	const addHandler = ( $element ) => {
		elementorFrontend.elementsHandler.addHandler( TestWidgetHandler, { $element } );
	};

	elementorFrontend.hooks.addAction( 'frontend/element_ready/test_widget.default', addHandler );
} );

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

56

←
[Dynamic Content](https://developers.elementor.com/docs/editor-controls/dynamic-content/)[AI](https://developers.elementor.com/docs/editor-controls/ai/)
→