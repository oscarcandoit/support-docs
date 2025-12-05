---
url: https://developers.elementor.com/js-api/js-api-routes
scraped_at: 2025-10-20T00:32:42.366Z
---

# JS API – Routes

- Udi Dollberg
- November 19, 2019

##### Under Development

**Please note that this feature is in development process, and this documentation is being updated frequently. Be sure you are updated.**

The new Routes API (since 2.7.0), provides a simple and convenient way to interact and manipulate Elementor’s panel UI, navigate the editor, as well as open & close many parts of the editor, using JS routes.

The full list of routes, including custom & 3rd routes, is available via:

```php rainbow rainbow-show
$e.routes.getAll();

```

### Panel

#### Elements

Change the panel to the main widgets panel:

```php rainbow rainbow-show
$e.route( 'panel/elements/categories' );

```

Pro – Change the panel to the global widgets panel:

```php rainbow rainbow-show
$e.route( 'panel/elements/global' );

```

#### Element Settings

_Works only if an element is in focus/active._

Change panel to the **Content** tab:

```php rainbow rainbow-show
$e.route( 'panel/editor/content' );

```

Change panel to the **Style** tab:

```php rainbow rainbow-show
$e.route( 'panel/editor/style' );

```

Change panel to the **Advanced** tab:

```php rainbow rainbow-show
$e.route( 'panel/editor/advanced' );

```

_For sections only_: change panel to the **Layout** tab:

```php rainbow rainbow-show
$e.route( 'panel/editor/layout' );

```

_PRO – Global widget only:_ change panel to the **Global** screen (edit/unlink buttons):

```php rainbow rainbow-show
$e.route( 'panel/editor/global' );

```

#### Menu

Open the panel side menu:

```php rainbow rainbow-show
$e.route( 'panel/menu' );

```

Go to the **Color Picker** settings:

```php rainbow rainbow-show
$e.route( 'panel/color-picker' );

```

Go to the **Global Colors** settings:

```php rainbow rainbow-show
$e.route( 'panel/global-colors' );

```

Go to the **Global Style** tab:

```php rainbow rainbow-show
$e.route( 'panel/general-settings/style' );

```

Go to the **Global Lightbox** tab:

```php rainbow rainbow-show
$e.route( 'panel/general-settings/lightbox' );

```

#### History

Open the **History Actions** tab:

```php rainbow rainbow-show
$e.route( 'panel/history/actions' );

```

Open the **History Revisions** tab:

```php rainbow rainbow-show
$e.route( 'panel/history/revisions ' );

```

#### Page settings

Open the **Page Settings**:

```php rainbow rainbow-show
$e.route( 'panel/page-settings/settings' );

```

Open the **Page Settings Style** tab:

```php rainbow rainbow-show
$e.route( 'panel/page-settings/style' );

```

Open the **Page Settings Advanced** tab:

```php rainbow rainbow-show
$e.route( 'panel/page-settings/advanced' );

```

### Modals

The following routes will open the modal if it’s closed. The open and close commands are available in the [JS API – Commands](https://developers.elementor.com/?page_id=10023) page.

#### Library

Show the pre-designed **Pages** tab:

```php rainbow rainbow-show
$e.route( 'library/templates/pages' );

```

Show the pre-designed **Blocks** tab:

```php rainbow rainbow-show
$e.route( 'library/templates/blocks' );

```

Show the **My Templates** tab:

```php rainbow rainbow-show
$e.route( 'library/templates/my-templates' );

```

Show the **Import Template** dialog:

```php rainbow rainbow-show
$e.route( 'library/import' );

```

Show the **Save Template** dialog:

```php rainbow rainbow-show
$e.route( 'library/save-template' );

```

#### Additional Modals

(For detailed documentation regarding the open/close/toggle commands see the [Commands API](https://developers.elementor.com/?page_id=10023))

#### Finder

```php rainbow rainbow-show
$e.route( 'finder' );

```

#### Navigator

```php rainbow rainbow-show
$e.route( 'navigator' );

```

#### Shortcuts List

```php rainbow rainbow-show
$e.route( 'shortcuts' );

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