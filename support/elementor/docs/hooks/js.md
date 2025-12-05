---
url: https://developers.elementor.com/docs/hooks/js/
scraped_at: 2025-10-20T01:03:52.304Z
---

# [\#](https://developers.elementor.com/docs/hooks/js/\#js-hooks) JS Hooks

Elementor CoreIntermediate

Elementor has a number of JS hooks that allow developers to change default behavior and even add new functionality.

## [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-filters) Frontend Filters

### [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-handlers-menu-anchor-scroll-top-distance) `frontend/handlers/menu_anchor/scroll_top_distance`

Applied to the menu anchor widget, sets a custom top distance

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `scrollTop` | _`integer`_ | The default scrollTop. It only takes the WordPress admin bar into account |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example) Example

```
jQuery( function( $ ) {
	// Add space for Elementor Menu Anchor link
	if ( window.elementorFrontend ) {
		elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
			return scrollTop - 30;
		} );
	}
} );

add_action( 'wp_footer', function() {
 if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
 return;
 }
	?>
	<script>
 jQuery( function( $ ) {
 // Add space for Elementor Menu Anchor link
 if ( window.elementorFrontend ) {
 elementorFrontend.hooks.addFilter( 'frontend/handlers/menu_anchor/scroll_top_distance', function( scrollTop ) {
 return scrollTop - 30;
 } );
 }
 } );
	</script>
	<?php
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

## [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-actions) Frontend Actions

### [\#](https://developers.elementor.com/docs/hooks/js/\#elementor-frontend-init) `elementor/frontend/init`

Loads the Elementor frontend.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-2) Arguments

None

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-2) Example

```
elementorFrontend.hooks.addAction( 'elementor/frontend/init', function() {
 // Do something that is based on the elementorFrontend object.
} );

```

1

2

3

### [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-element-ready-global) `frontend/element_ready/global`

Runs on every element (includes sections and columns) when it’s ready.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-3) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `$scope` | _`The current element wrapped with jQuery`_ |  |
| `$` | _`The jQuery instance`_ |  |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-3) Example

```
elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
	if ( $scope.data( 'shake' ) ){
		$scope.shake();
	}
} );

```

1

2

3

4

5

### [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-element-ready-widget) `frontend/element_ready/widget`

Runs on every widget when it’s ready.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-4) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `$scope` | _`The current element wrapped with jQuery`_ |  |
| `$` | _`The jQuery instance`_ |  |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-4) Example

```
elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
	if ( $scope.data( 'shake' ) ){
		$scope.shake();
	}
} );

```

1

2

3

4

5

### [\#](https://developers.elementor.com/docs/hooks/js/\#frontend-element-ready-elementtype-skinname) `frontend/element_ready/{elementType.skinName}`

Runs on a specific element type and its skin when it’s ready.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-5) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `$scope` | _`The current element wrapped with jQuery`_ |  |
| `$` | _`The jQuery instance`_ |  |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-5) Example

```
// For a widget without a skin (skin = default)
elementorFrontend.hooks.addAction( 'frontend/element_ready/image.default', function( $scope ) {
	if ( $scope.find( 'a' ) ){
		$scope.find( 'a' ).lightbox();
	}
} );

// For a widget with a skin named `satellite`
elementorFrontend.hooks.addAction( 'frontend/element_ready/google-maps.satellite', function( $scope ) {
	var $iframe = $scope.find( 'iframe' );
	var $iframeUrl = $iframe.attr( 'src' );
	$iframe.attr( 'src', $iframeUrl + '&maptype=satellite' );
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

## [\#](https://developers.elementor.com/docs/hooks/js/\#editor-hooks) Editor Hooks

### [\#](https://developers.elementor.com/docs/hooks/js/\#panel-open-editor-elementtype) `panel/open_editor/{elementType}`

Applied when the settings panel is opened to edit an element.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-6) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `panel` | _`object`_ | The panel object |
| `model` | _`object`_ | The backbone model instance |
| `view` | _`object`_ | The backbone view instance |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-6) Example

```
elementor.hooks.addAction( 'panel/open_editor/widget', function( panel, model, view ) {
	if ( 'section' !== model.elType && 'column' !== model.elType ) {
		return;
	}
   var $element = view.$el.find( '.elementor-selector' );

   if ( $element.length ) {
   	$element.click( function() {
   	  alert( 'Some Message' );
   	} );
   }
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

### [\#](https://developers.elementor.com/docs/hooks/js/\#panel-open-editor-elementtype-elementname) `panel/open_editor/{elementType}/{elementName}`

Applied when the settings panel is opened to edit a specific element name.

#### [\#](https://developers.elementor.com/docs/hooks/js/\#arguments-7) Arguments

| Argument | Type | Description |
| --- | --- | --- |
| `panel` | _`object`_ | The panel object |
| `model` | _`object`_ | The backbone model instance |
| `view` | _`object`_ | The backbone view instance |

#### [\#](https://developers.elementor.com/docs/hooks/js/\#example-7) Example

```
elementor.hooks.addAction( 'panel/open_editor/widget/slider', function( panel, model, view ) {
   var $element = view.$el.find( '.elementor-selector' );

   if ( $element.length ) {
   	$element.click( function() {
   	  alert( 'Some Message' );
   	} );
   }
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

←
[Elementor Forms](https://developers.elementor.com/docs/hooks/forms/)