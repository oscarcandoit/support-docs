---
url: https://developers.elementor.com/docs/hooks/elementor-init/
scraped_at: 2025-10-20T01:03:19.639Z
---

# [\#](https://developers.elementor.com/docs/hooks/elementor-init/\#elementor-init) Elementor Init

Elementor CoreBasic

Elementor has a hook that fires when a plugin is fully loaded.

## [\#](https://developers.elementor.com/docs/hooks/elementor-init/\#hook-details) Hook Details

- **Hook Type:** Action Hook
- **Hook Name:** `elementor/init`
- **Affects:** Init Process

## [\#](https://developers.elementor.com/docs/hooks/elementor-init/\#example) Example

```
function my_plugin() {

	// ...

}
add_action( 'elementor/init', 'my_plugin' );

```

1

2

3

4

5

6

←
[Elementor Loaded](https://developers.elementor.com/docs/hooks/elementor-loaded/)[Widget Skins](https://developers.elementor.com/docs/hooks/widget-skins/)
→