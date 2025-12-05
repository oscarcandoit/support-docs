---
url: https://developers.elementor.com/js-api/js-api-commands
scraped_at: 2025-10-20T00:33:00.496Z
---

# JS API – Commands

- Udi Dollberg
- October 22, 2023

The new Commands API (since 2.7.0), provides a simple and convenient way to run something the the editor, create a widget, as well as show a notice or undo changes, using JS commands.

The full list of commands, including custom & 3rd commands, is available via:

```php rainbow rainbow-show
$e.commands.getAll();

```

### Modals

Modals may have inner tabs that can be navigate via the route API, the full list is available on [JS API – Route](https://developers.elementor.com/js-api/js-api-routes/#Modals) page.

#### Template Library

Open the Template Library to the default tab (Pages, Blocks, etc.)

```php rainbow rainbow-show
$e.run( 'library/open' );

```

Close the Template Library

```php rainbow rainbow-show
$e.run( 'library/close' );

```

Toggle the Template Library

```php rainbow rainbow-show
$e.run( 'library/toggle' );

```

#### Finder

Open the finder

```php rainbow rainbow-show
$e.run( 'finder/open' );

```

Close the finder

```php rainbow rainbow-show
$e.run( 'finder/close' );

```

Toggle the finder

```php rainbow rainbow-show
$e.run( 'finder/toggle' );

```

#### Navigator

Open the Navigator

```php rainbow rainbow-show
$e.run( 'navigator/open' );

```

Close the Navigator

```php rainbow rainbow-show
$e.run( 'navigator/close' );

```

Toggle the Navigator

```php rainbow rainbow-show
$e.run( 'navigator/toggle' );

```

#### Shortcuts List

Open the Shortcuts List

```php rainbow rainbow-show
$e.run( 'shortcuts/open' );

```

Close the Shortcuts List

```php rainbow rainbow-show
$e.run( 'shortcuts/close' )

```

Toggle the Shortcuts List

```php rainbow rainbow-show
$e.run( 'shortcuts/toggle' );

```

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