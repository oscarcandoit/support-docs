---
url: https://developers.elementor.com/elementors-roadmap-to-upgrade-php-versions
scraped_at: 2025-10-20T00:49:46.511Z
---

# Elementor’s Roadmap to Upgrade PHP Versions

- Rami Yushuvaev
- [June 21, 2023](https://developers.elementor.com/2023/06/21/)
- 10 Comments
- [Deprecations](https://developers.elementor.com/category/deprecations/), [Performance](https://developers.elementor.com/category/performance/)

![Elementor’s Roadmap to Upgrade PHP Versions](https://developers.elementor.com/wp-content/uploads/2023/06/elementor-php-upgrage-roadmap.png)

At Elementor, we’re constantly striving to enhance our products and provide you with the most secure and performant experiences. As part of this commitment, we are excited to share our roadmap for upgrading the minimum and recommended PHP versions for Elementor plugin in 2023-2024.

## Why Upgrade PHP Versions?

As PHP evolves and introduces new features and performance improvements in PHP 8.x and and above, it is crucial for us to adapt and ensure compatibility with the newest versions, which is not possible as long as Elementor’s minimum required version is PHP 7.0 (or higher).

![PHP 7.2 - 7.4 reached their end-of-life ; PHP 8.0 will read EOL by the end of 2023.](https://developers.elementor.com/wp-content/uploads/2023/06/supported-php-versions-2023.png)PHP 7.2 – 7.4 reached their end-of-life ; PHP 8.0 will reach EOL by the end of 2023.

It’s worth noting that [PHP 7.0 – 7.4 have reached their end-of-life](https://www.php.net/supported-versions.php), and PHP 8.0 will reach its end-of-life by the end of 2023. Despite this, we have observed that a significant portion of WordPress websites, including those using Elementor, continue to rely on unsupported PHP 7.x versions. In fact 3 of every 4 [WordPress websites continue using unsupported PHP versions](https://wordpress.org/about/stats/).

## PHP Usage Data

According to our usage data, we’ve seen a decline in the usage of older PHP 7.x versions and an increase in PHP 8.x adoption among Elementor users. However, a significant number of Elementor websites continue using older and unsupported PHP versions.

The broader WordPress community faces a similar challenge, as only 23.7% of WordPress users have migrated to PHP 8.x, with the majority (51.5%) still operating on PHP 7.4 and the rest (24.8%) using older PHP versions, [including PHP 5.x](https://displaywp.com/supported-php-versions/). There may be correlation between Elementor and WordPress PHP usage data due to the fact [Elementor being used on approximately 20% of WordPress websites](https://w3techs.com/technologies/details/cm-wordpress).

While WordPress supports the migration to newer PHP versions, the transition has been slow due to the continued support for older PHP versions by theme and plugin developers. This creates a “chicken or the egg” dilemma, where developers hesitate to drop support for older PHP versions as long as WordPress itself supports them.

## Elementor’s PHP Upgrade Roadmap

To address this issue, Elementor has devised a gradual upgrade process that distinguishes between the minimum required PHP version and the recommended PHP version.

Initially, Elementor will maintain the **minimum** required PHP version at 7.0 or higher, while upgrading the **recommended** version to PHP 7.3. We will update all our documentation and marketing materials to reflect this change.

By the end of the 3rd quarter, Elementor will raise the **minimum** required version to PHP 7.3, along with upgrading the **recommended** version to PHP 7.4. This modification ensures that websites using versions prior to PHP 7.3 won’t be able to upgrade to the new Elementor versions unless they upgrade their PHP version.

By the end of the year, our plan is to further increase the **minimum** required version to PHP 7.4, while upgrading the **recommended** version to PHP 8.0-8.3, depending on the usage data at the time of decision-making.

In 2024, Elementor will cease support for PHP 7.x versions entirely, elevating the minimum required version to PHP 8.0-8.3, based on the available usage data.

Please note that these plans are subject to change based on real usage data and WordPress’s support for older PHP versions.

## Effects and Required Actions

If your server continues to use older PHP versions when Elementor raises the minimum required PHP version, your website will remain functional. However, as mentioned above, you won’t be able to upgrade to newer Elementor and WordPress versions.

It’s important to highlight that the update mechanism is part of the WordPress core. It takes into account the PHP version of your website before displaying the list of available themes and plugins for update. If the new version requires a higher PHP version than the one your site uses, WordPress will not prompt you to upgrade. This ensures that users won’t unknowingly update to a version that may potentially break their websites.

## To Conclude

We strongly encourage upgrading from older and unsupported PHP versions. This will not only enhance the security and performance of your site but also ensure compatibility with the newest versions of Elementor and WordPress.

Thank you for being a part of the Elementor community as we strive to provide you with the best tools for building exceptional websites.

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Rami Yushuvaev](https://secure.gravatar.com/avatar/9f12cddfda58b05180515a94b92de2570f60f94c7d62e84bc6ea4f17fbc9c541?s=300&d=mm&r=g)

Rami Yushuvaev

Head of Elementor Developers Experience & Performance Lead. Fullstack developer and open source projects contributor.

[Hosted with](https://elementor.com/hosting/)

Text

Bigger text

Line height

Text align

Readable font

Visual

Contrast

Grayscale

Hide images

Pause animations

Orientation

Screen reader

Highlight links

Reading mask

Outline focus

Sitemap

Page structure