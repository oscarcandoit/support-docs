---
url: https://developers.elementor.com/docs/getting-started/best-practices/
scraped_at: 2025-10-20T00:55:56.866Z
---

# [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#best-practices) Best Practices

Elementor CoreBasic

This Best Practices guide is a living document for Elementor addon developers, meant to be revised as Elementor makes changes, introduces new features, and provides additional recommendations. We recommend following these best practices.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#supported-php-versions) Supported PHP Versions

Ensure your addon is compatible with the most used PHP version (v7.4) and the latest PHP versions and (v8.0 and above).

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#compatibility-tag) Compatibility Tag

Elementor has its own [header comments(opens new window)](https://developers.elementor.com/docs/addons/plugin-header/) where you can note the Elementor version that the addon was tested against. This is an optional header, but we recommend using it.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#compatibility-checks) Compatibility Checks

[Check which Elementor and PHP versions(opens new window)](https://developers.elementor.com/docs/addons/compatibility/) a website uses to make sure your addon supports it. Otherwise, notify the user that the website doesn’t meet the addon’s requirements.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#scripts-style-registration) Scripts & Style Registration

Elementor has its own way to [register scripts and styles(opens new window)](https://developers.elementor.com/docs/scripts-styles/). Using the recommended methods ensures your addon is optimized for performance.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#internationalization) Internationalization

Use WordPress functions to [internationalize(opens new window)](https://developer.wordpress.org/apis/internationalization/internationalization-functions/) your strings.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#remove-deprecated-code) Remove Deprecated Code

Already have an addon? Run it through the [Elementor Deprecated Code Detector(opens new window)](https://github.com/matipojo/elementor-deprecated-code-detector) to see if your addon contains any [deprecated code(opens new window)](https://developers.elementor.com/docs/deprecations). If so, we highly recommend removing it. You can see a list of [recent deprecations here(opens new window)](https://developers.elementor.com/recent-deprecations/)

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#adopt-latest-performance-features) Adopt Latest Performance Features

Implement [Element Caching(opens new window)](https://developers.elementor.com/elementor-3-22-developers-update/) to store element output in the cache for more performant websites.

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#elementor-pro-developer-license) Elementor Pro Developer License

Test with Elementor Pro by requesting a [Developer License(opens new window)](https://elementor.com/pages/addon-developers-corner/).

## [\#](https://developers.elementor.com/docs/getting-started/best-practices/\#security) Security

Participate in Patchstack’s free [mVDP Program(opens new window)](https://elemn.to/patchstack-for-plugins) to maintain the security hygiene of your product with a clear vulnerability reporting structure.

←
[Requirements](https://developers.elementor.com/docs/getting-started/requirements/)[Creating Your First Addon](https://developers.elementor.com/docs/getting-started/first-addon/)
→