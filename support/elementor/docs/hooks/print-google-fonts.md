---
url: https://developers.elementor.com/docs/hooks/print-google-fonts/
scraped_at: 2025-10-20T01:03:10.630Z
---

# [\#](https://developers.elementor.com/docs/hooks/print-google-fonts/\#print-google-fonts) Print Google Fonts

Elementor CoreBasic

Elementor offers a special filter hook that lets developers prevent Google fonts from loading. In other words, not all frontend Google fonts will be enqueued.

## [\#](https://developers.elementor.com/docs/hooks/print-google-fonts/\#hook-details) Hook Details

- **Hook Type:** Filter Hook
- **Hook Name:** `elementor/frontend/print_google_fonts`
- **Affects:** Frontend

## [\#](https://developers.elementor.com/docs/hooks/print-google-fonts/\#control-google-fonts-enqueue) Control Google Fonts Enqueue

To prevent Elementor from loading Google fonts in the frontend:

```
/**
 * Prevent Elementor from loading Google Fonts in the frontend.
 *
 * @since 1.0.0
 */
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );

```

1

2

3

4

5

6

←
[Print Widget Template](https://developers.elementor.com/docs/hooks/print-widget-template/)[Elementor Loaded](https://developers.elementor.com/docs/hooks/elementor-loaded/)
→