---
url: https://developers.elementor.com/docs/editor-controls/dynamic-content/
scraped_at: 2025-10-20T01:01:31.470Z
---

# [\#](https://developers.elementor.com/docs/editor-controls/dynamic-content/\#dynamic-content) Dynamic Content

Elementor ProAdvanced

Elementor can replace control outputs using [dynamic tags](https://developers.elementor.com/docs/dynamic-tags/) to generate content programmatically. Dynamic capabilities turn static controls into smart components. This helps users add customized data from various sources to their site. Let's see how to set this up.

## [\#](https://developers.elementor.com/docs/editor-controls/dynamic-content/\#dynamic-argument) Dynamic Argument

Use the `dynamic` argument to set dynamic tags using Elementor controls:

```
$this->add_control(
	'unique-control-name',
	[\
		'label' => esc_html__( 'Control Label', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'dynamic' => [\
			'active' => true,\
		],\
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

![Elementor Dynamic Tag Indicator](https://developers.elementor.com/docs/assets/img/elementor-dynamic-tag-indicator.png)

When a control has dynamic tags support, an additional icon is added to indicate to the user that they can replace the content with any dynamic tag.

## [\#](https://developers.elementor.com/docs/editor-controls/dynamic-content/\#dynamic-example) Dynamic Example

Let's see how a simple control can become dynamic:

```
$this->add_control(
	'heading',
	[\
		'label' => esc_html__( 'Heading', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXT,\
		'placeholder' => esc_html__( 'Enter your heading', 'textdomain' ),\
		'label_block' => true,\
		'dynamic' => [\
			'active' => true,\
		],\
	]
);

$this->add_control(
	'content',
	[\
		'label' => esc_html__( 'Content', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::TEXTAREA,\
		'placeholder' => esc_html__( 'Enter your content', 'textdomain' ),\
		'dynamic' => [\
			'active' => true,\
		],\
	]
);

$this->add_control(
	'count',
	[\
		'label' => esc_html__( 'Count', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::NUMBER,\
		'default' => 0,\
		'min' => 0,\
		'max' => 100,\
		'step' => 1,\
		'dynamic' => [\
			'active' => true,\
		],\
	]
);

$this->add_control(
	'url',
	[\
		'label' => esc_html__( 'Link', 'textdomain' ),\
		'type' => \Elementor\Controls_Manager::URL,\
		'placeholder' => esc_html__( 'https://your-link.com', 'textdomain' ),\
		'dynamic' => [\
			'active' => true,\
		],\
	]
);

$this->add_control(
	'image',
	[\
		'label' => esc_html__( 'Choose Image', 'elementor' ),\
		'type' => \Elementor\Controls_Manager::MEDIA,\
		'default' => [\
			'url' => \Elementor\Utils::get_placeholder_image_src(),\
		],\
		'dynamic' => [\
			'active' => true,\
		],\
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

←
[Global Style](https://developers.elementor.com/docs/editor-controls/global-style/)[Frontend Available](https://developers.elementor.com/docs/editor-controls/frontend-available/)
→