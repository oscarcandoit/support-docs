---
url: https://developers.elementor.com/docs/context-menu/context-menu-groups/
scraped_at: 2025-10-20T01:00:58.090Z
---

# [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#context-menu-groups) Context Menu Groups

Elementor CoreBasic

Context menu popups contain several groups divided by a separator. Each group contains a number of actions - groups are only displayed if they have at least one action.

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#group-object) Group Object

An Elementor context menu is basically a JS array of group objects. Each group object has two properties:

```
const group = {
	name: '',
	actions: [],
}

```

1

2

3

4

- **Group Name** \- A unique ID used in the code.
- **Group Actions** \- An array of action objects.

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#available-groups) Available Groups

The built-in context menu groups for elements (section, column and widget) include:

- **General** ( _`general`_) \- actions to edit the elements (e.g. duplicate).
- **Add** ( _`addNew`_) \- actions to add new items to the element.
- **Clipboard** ( _`clipboard`_) \- actions to copy, paste, paste style etc.
- **Save** ( _`save`_) \- actions to save as a global widget or save as a template.
- **Tools** ( _`tools`_) \- actions to open tools (e.g. navigator).
- **{Custom}** \- actions added by external developers.
- **Delete** ( _`delete`_) \- actions to delete elements.

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#groups-by-element-type) Groups By Element Type

Below are the default groups displayed in each element:

### [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#section) Section

![Section Context Menu](https://developers.elementor.com/docs/assets/img/context-menu-section.png)

- General
- Clipboard
- Save
- Tools
- Delete

### [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#column) Column

![Column Context Menu](https://developers.elementor.com/docs/assets/img/context-menu-column.png)

- General
- Add
- Clipboard
- Tools
- Delete

![Widget Context Menu](https://developers.elementor.com/docs/assets/img/context-menu-widget.png)

- General
- Clipboard
- Save
- Tools
- Delete

## [\#](https://developers.elementor.com/docs/context-menu/context-menu-groups/\#manage-groups) Manage Groups

To add, update or delete custom groups, you need to use the JavaScript `elements/context-menu/groups` filter hook. Please keep in mind that this hook doesn't change any built-in groups added by Elementor, it only allows external developers to add and modify new groups.

- [Add New Group](https://developers.elementor.com/docs/context-menu/add-new-group/)
- [Remove Group](https://developers.elementor.com/docs/context-menu/remove-group/)
- [Update Group](https://developers.elementor.com/docs/context-menu/update-group/)

←
[Context Menu Types](https://developers.elementor.com/docs/context-menu/context-menu-types/)[Context Menu Actions](https://developers.elementor.com/docs/context-menu/context-menu-actions/)
→