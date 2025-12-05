---
url: https://developers.elementor.com/docs/editor-controls/control-types/
scraped_at: 2025-10-20T00:57:49.063Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#control-types) Control Types

Elementor CoreBasicElementor CoreBasic

Elementor includes a wide array of controls out-of-the-box. Each control has a custom template and optional default settings, default values, and other methods that affect the output of the control in the panel.

## [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#base-controls) Base Controls

Elementor has several base controls extending the abstract base class, each built to serve a different purpose:

- **Data Controls** – Controls that return a single value.
- **Multi Value Controls** – Controls that return multiple values.
- **Unit Controls** – Controls that return unit-based values.
- **UI Controls** – UI elements visible only in the panel that doesn't return values.
- **Group Controls** – Grouping together several controls.

## [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#inheritance) Inheritance

Behind the scenes, the abstract base classes above are created by extending the `\Elementor\Base_Control` abstract class and inherit its properties and methods. All other controls you see in the editor extend those base controls.

```
Base_Control
|
├─ Base_Data_Control
|  ├─ ...
|  └─ ...
|
├─ Control_Base_Multiple
|  ├─ ...
|  └─ ...
|
├─ Control_Base_Units
|  ├─ ...
|  └─ ...
|
├─ Base_UI_Control
|  ├─ ...
|  └─ ...
|
└─ Group_Control_Base
   ├─ ...
   └─ ...

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

## [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-controls) Extending Controls

### [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-data-controls) Extending Data Controls

To create your own data control, you need to extend the `\Elementor\Base_Data_Control` abstract class:

```
class Elementor_Test_Control extends \Elementor\Base_Data_Control {
}

```

1

2

### [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-multi-value-controls) Extending Multi Value Controls

To create your own multivalue control, you need to extend the `\Elementor\Control_Base_Multiple` abstract class:

```
class Elementor_Test_Control extends \Elementor\Control_Base_Multiple {
}

```

1

2

### [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-unit-controls) Extending Unit Controls

To create your own unit control, you need to extend the `\Elementor\Control_Base_Units` abstract class:

```
class Elementor_Test_Control extends \Elementor\Control_Base_Units {
}

```

1

2

### [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-ui-controls) Extending UI Controls

To create your own UI controls, you need to extend the `\Elementor\Base_UI_Control` abstract class:

```
class Elementor_Test_Control extends \Elementor\Base_UI_Control {
}

```

1

2

### [\#](https://developers.elementor.com/docs/editor-controls/control-types/\#extending-group-controls) Extending Group Controls

To create your own group control, you need to extend the `\Elementor\Group_Control_Base` abstract class:

```
class Elementor_Test_Control extends \Elementor\Group_Control_Base {
}

```

1

2

←
[Control Tabs](https://developers.elementor.com/docs/editor-controls/control-tabs/)[Text Control](https://developers.elementor.com/docs/editor-controls/control-text/)
→