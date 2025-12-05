---
url: https://developers.elementor.com/docs/context-menu/add-new-action/
scraped_at: 2025-10-20T01:01:25.065Z
---

# [\#](https://developers.elementor.com/docs/context-menu/add-new-action/\#add-new-action) Add New Action

Elementor CoreBasic

To add a new action to the context menu, we need to define a new action object and insert the object into the relevant context menu group.

## [\#](https://developers.elementor.com/docs/context-menu/add-new-action/\#add-new-widget-action) Add New Widget Action

In the example below, we'll add a new action to an existing `custom-widget-actions` group. This action will add an external link to Elementor website.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'elementor-link',
		icon: 'eicon-alert',
		title: 'Elementor Link',
		isEnabled: () => true,
		callback: () => window.open( 'https://elementor.com/', '_blank' ).focus(),
	};

	if ( 'widget' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-widget-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

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

## [\#](https://developers.elementor.com/docs/context-menu/add-new-action/\#add-new-column-action) Add New Column Action

Now we'll add a new action to an existing `custom-column-actions` group. This action will log some text in the browser console.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'log',
		icon: 'eicon-code',
		title: 'Some Console Log',
		isEnabled: () => true,
		callback: () => console.log( 'some text...' ),
	};

	if ( 'column' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-column-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

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

## [\#](https://developers.elementor.com/docs/context-menu/add-new-action/\#add-new-section-action) Add New Section Action

Next we'll add a new action to an existing `custom-section-actions` group. This action will open the page settings panel.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newAction = {
		name: 'page-settings',
		icon: 'eicon-cog',
		title: 'Page Settings',
		isEnabled: () => true,
		callback: () => $e.run( 'panel/page-settings/settings' ),
	};

	if ( 'section' === elementType ) {
		customGroups.forEach( ( group ) => {
			if ( 'custom-section-actions' === group.name ) {
				group.actions.push( newAction );
			}
		} );
	}

	return customGroups;

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

←
[Update Group](https://developers.elementor.com/docs/context-menu/update-group/)[Remove Action](https://developers.elementor.com/docs/context-menu/remove-action/)
→