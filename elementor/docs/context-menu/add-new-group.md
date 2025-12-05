---
url: https://developers.elementor.com/docs/context-menu/add-new-group/
scraped_at: 2025-10-20T01:01:06.361Z
---

# [\#](https://developers.elementor.com/docs/context-menu/add-new-group/\#add-new-group) Add New Group

Elementor CoreBasic

To add a new group to the context menu, we need to define a new group object and insert it into the relevant menu type (i.e. widget, column or section).

## [\#](https://developers.elementor.com/docs/context-menu/add-new-group/\#add-new-widget-group) Add New Widget Group

In the example below, we'll add a new group to the `widgets` context menu. This group will add new actions only when right-clicking widgets in the preview.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-widget-actions',
		actions: [\
			{\
				name: 'widget-action-1',\
				icon: 'eicon-alert',\
				title: 'Widget Action 1',\
				isEnabled: () => true,\
				callback: () => console.log( 'Test 1' ),\
			},\
			{\
				name: 'widget-action-2',\
				icon: 'eicon-alert',\
				title: 'Widget Action 2',\
				isEnabled: () => true,\
				callback: () => console.log( 'Test 2' ),\
			}\
        ],
	}

	if ( 'widget' === elementType ) {
		customGroups.push( newGroup );
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

22

23

24

25

26

27

28

29

## [\#](https://developers.elementor.com/docs/context-menu/add-new-group/\#add-new-column-group) Add New Column Group

Now we'll add a new group to the `column` context menu.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-column-actions',
		actions: [\
			/* Actions */\
		],
	}

	if ( 'column' === elementType ) {
		customGroups.push( newGroup );
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

## [\#](https://developers.elementor.com/docs/context-menu/add-new-group/\#add-new-section-group) Add New Section Group

Next we'll add a new group to the `section` context menu.

```
elementor.hooks.addFilter( 'elements/context-menu/groups', ( customGroups, elementType ) => {

	const newGroup = {
		name: 'custom-section-actions',
		actions: [\
			/* Actions */\
		],
	}

	if ( 'section' === elementType ) {
		customGroups.push( newGroup );
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

←
[Context Menu Actions](https://developers.elementor.com/docs/context-menu/context-menu-actions/)[Remove Group](https://developers.elementor.com/docs/context-menu/remove-group/)
→