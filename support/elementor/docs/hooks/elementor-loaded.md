---
url: https://developers.elementor.com/docs/hooks/elementor-loaded/
scraped_at: 2025-10-20T01:03:15.283Z
---

# [\#](https://developers.elementor.com/docs/hooks/elementor-loaded/\#elementor-loaded) Elementor Loaded

Elementor CoreBasic

Elementor has a hook that fires when a plugin is loaded, before loading all the components.

## [\#](https://developers.elementor.com/docs/hooks/elementor-loaded/\#hook-details) Hook Details

- **Hook Type:** Action Hook
- **Hook Name:** `elementor/loaded`
- **Affects:** Init Process

## [\#](https://developers.elementor.com/docs/hooks/elementor-loaded/\#example) Example

```
function my_plugin() {

	// ...

}
add_action( 'elementor/loaded', 'my_plugin' );

```

1

2

3

4

5

6

←
[Print Google Fonts](https://developers.elementor.com/docs/hooks/print-google-fonts/)[Elementor Init](https://developers.elementor.com/docs/hooks/elementor-init/)
→