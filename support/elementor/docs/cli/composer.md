---
url: https://developers.elementor.com/docs/cli/composer/
scraped_at: 2025-10-20T01:06:09.826Z
---

# [\#](https://developers.elementor.com/docs/cli/composer/\#composer) Composer

Elementor ProAdvanced

Developers can install Elementor and Elementor Pro via [Composer(opens new window)](https://getcomposer.org/) instead of using a web browser. It can be done using a few simple CLI commands.

## [\#](https://developers.elementor.com/docs/cli/composer/\#what-is-composer) What is Composer?

Composer is a PHP dependency management tool. It simplifies the process of installing dependent libraries in PHP projects.

However, Composer doesn't contain WordPress plugins and themes. For that developers use [wpackagist.org(opens new window)](https://wpackagist.org/) which is an open source service that mirrors WordPress plugins and themes as Composer repositories.

## [\#](https://developers.elementor.com/docs/cli/composer/\#install-elementor) Install Elementor

Register WordPress Packagist repository on your `composer.json` file:

```
{
	"repositories": [\
		{\
			"type": "composer",\
			"url": "https://wpackagist.org",\
			"only": [\
				"wpackagist-plugin/*",\
				"wpackagist-theme/*"\
			]\
		}\
	]
}

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

Install the latest Elementor version:

```
composer require wpackagist-plugin/elementor

```

1

Or choose a specific version:

```
composer require wpackagist-plugin/elementor:3.25.0

```

1

## [\#](https://developers.elementor.com/docs/cli/composer/\#install-elementor-pro) Install Elementor Pro

Register Elementor repository on your `composer.json` file:

```
{
	"repositories": [\
		{\
			"type": "composer",\
			"url": "https://composer.elementor.com",\
			"only": [\
				"elementor/elementor-pro"\
			]\
		}\
	]
}

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

Configure composer to use a Elementor Pro license key:

```
composer config --global --auth http-basic.composer.elementor.com token <license-key>

```

1

To install Elementor Pro on `wp-content/plugins` folder instead of `vendor` folder, use composer custom installers:

```
composer config --no-plugins allow-plugins.composer/installers true
composer require composer/installers

```

1

2

Install the latest Elementor Pro version:

```
composer require elementor/elementor-pro

```

1

Or choose a specific version:

```
composer require elementor/elementor-pro:3.25.0

```

1

## [\#](https://developers.elementor.com/docs/cli/composer/\#activation) Activation

To activate Elementor & Elementor Pro, use the folowing WP-CLI and [Elementor CLI](https://developers.elementor.com/docs/cli/) commands.

Activate Elementor plugin:

```
wp plugin activate elementor

```

1

Activate Elementor Pro plugin:

```
wp plugin activate elementor-pro

```

1

Activate Elementor Pro license:

```
wp elementor-pro license activate <license-key>

```

1

Optionaly, you can activate Elementor & Elementor Pro on multisite network:

```
wp plugin activate elementor --network
wp plugin activate elementor-pro --network
wp site list --field=url | xargs -n1 -I % wp --url=% elementor-pro license activate <license-key>

```

1

2

3

←
[License Deactivation](https://developers.elementor.com/docs/cli/license-deactivate/)