---
url: https://developers.elementor.com/docs/context-menu/context-menu-actions/
scraped_at: 2025-10-20T01:01:02.287Z
---

# [\#](https://developers.elementor.com/docs/context-menu/context-menu-actions/\#context-menu-actions) Context Menu Actions

Elementor CoreBasic

The context menu popup contains groups, and within these groups are items called actions. Actions are applied to a selected element (section, column, widget). Behind the scenes, these actions are JS callback functions.

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-actions/\#action-object) Action Object

An action is a JS object containing the following properties and methods:

```
const action = {
	name: 'action-id',
	icon: 'eicon-code',
	title: 'Action Label',
	shortcut: '',
	isEnabled: () => true,
	callback: () => {},
};

```

1

2

3

4

5

6

7

8

- **Action Name** \- Unique ID used in the code.
- **Action Icon** \- Action icon, found at either [Elementor Icons(opens new window)](https://elementor.github.io/elementor-icons/) or [FontAwesome Icons(opens new window)](https://fontawesome.com/).
- **Action Title** \- Label displayed to the user.
- **Action Shortcut** \- Keyboard shortcut that triggers the action.
- **Is Enabled** \- Defines whether the action enabled or disabled.
- **Action Callback** \- JS callback functions which apply to the selected element.

Please Note

Action keyboard shortcuts won't be covered in the documentation as it requires additional JS components configuration.

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-actions/\#manage-actions) Manage Actions

By hooking to the JS `elements/context-menu/groups` filter hook, you can add, modify, or delete action items.

- [Add New Action](https://developers.elementor.com/docs/context-menu/add-new-action/)
- [Remove Action](https://developers.elementor.com/docs/context-menu/remove-action/)
- [Update Action](https://developers.elementor.com/docs/context-menu/update-action/)

←
[Context Menu Groups](https://developers.elementor.com/docs/context-menu/context-menu-groups/)[Add New Group](https://developers.elementor.com/docs/context-menu/add-new-group/)
→