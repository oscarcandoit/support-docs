---
url: https://developers.elementor.com/docs/editor-controls/labels-description/
scraped_at: 2025-10-20T01:01:06.907Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#labels-and-description) Labels and Description

Elementor CoreBasic

Controls are simply input fields where users fill the data. Each control can have a label that appears above the field and a short description appears below the field. The control mechanism in the editor has special arguments that help developers set those fields and style them.

## [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#basic-arguments) Basic Arguments

Each control in the editor accept the folowing arguments:

```
$this->add_control(
	'unique-control-name',
	[\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'description' => esc_html__( 'Short control description.', 'textdomain' ),\
		'show_label' => false,\
		'label_block' => false,\
		'separator' => 'after'\
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

10

11

| Name | Description |
| --- | --- |
| `type` | ( `string`) The type of the control. |
| `label` | ( `string`) The label that appears before/above of the field. |
| `description` | ( `string`) The description that appears below the field. |
| `show_label` | ( `bool`) Whether to display the label. Default is `true`. |
| `label_block` | ( `bool`) Whether to display the label in a separate line. Default is `false`. |
| `separator` | ( `string`) Set the position of the control separator. Available values are: <br>- `default` will position the separator depending on the control type.<br>- `before` / `after` will position the separator before/after the control.<br>- `none` will hide the separator.<br> Default is `default`. |

### [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#label) Label

![Elementor Control - Label View](https://developers.elementor.com/docs/assets/img/controls/control-field-label.png)

Control label represents the field caption in the editor. It's a string that helps user to understand what the control represents. It also aids people who use screen readers or other assistive technologies.

```
$this->add_control(
	'unique-control-name',
	[\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
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

### [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#label-block) Label Block

![Elementor Control - Label Block](https://developers.elementor.com/docs/assets/img/controls/control-field-label-block.png)

Control labels and input fields are placed side-by-side in the same row. Developers can choose to style controls differently, and stack them one on top of the other instead of the side-by-side.

```
$this->add_control(
	'unique-control-name',
	[\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'label_block' => true,\
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

### [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#show-label) Show Label

![Elementor Control - Hidden Label](https://developers.elementor.com/docs/assets/img/controls/control-field-label-hidden.png)

By default all control labels are displayed in the editor. Developers can choose to hide label, leaving only the input field. Please note, for accessibility reasons, the label is not removed, it's only visually hidden.

```
$this->add_control(
	'unique-control-name',
	[\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'show_label' => false,\
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

### [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#description) Description

![Elementor Control - Field Description](https://developers.elementor.com/docs/assets/img/controls/control-field-description.png)

Control description is a simple text that appears below the field, providing the user more information about the control. The description displayed on a seperate row, whether the label and the field are displayed in the same row, or stacked one on top of the other.

```
$this->add_control(
	'unique-control-name',
	[\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'description' => esc_html__( 'Short control description.', 'textdomain' ),\
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

### [\#](https://developers.elementor.com/docs/editor-controls/labels-description/\#separator) Separator

Set the position of the control separator. Available values are:

- `default` will position the separator depending on the control type.
- `before` / `after` will position the separator before/after the control.
- `none` will hide the separator.

This argument is usefull when seperating between two more controls.

←
[CSS Filter Group Control](https://developers.elementor.com/docs/editor-controls/group-control-css-filter/)[CSS Selectors](https://developers.elementor.com/docs/editor-controls/selectors/)
→