---
url: https://developers.elementor.com/uri-protocols-handling-update
scraped_at: 2025-10-20T00:43:35.959Z
---

# URI Protocols Handling Update

- Shilo Eish Yemini
- [June 2, 2020](https://developers.elementor.com/2020/06/02/)
- 1 Comment
- [Features](https://developers.elementor.com/category/features/)
- Elementor 2.9

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

Elementor has now updated the way it handles URLs in the URL control.

From v2.9.11 and on, Elementor will use the [use wp\_allowed\_protocols()](https://developer.wordpress.org/reference/functions/wp_allowed_protocols/) function to handle allowed URI protocols in links. These protocols are often used to create a deep-link (i.e. a direct link to an app via unique protocol) to a 3rd party application (such as `mailto:` or `tel:`)

This means that from this version, only protocols allowed by this WordPress function will be available.

Examples of allowed URI protocols: `mailto:`, `tel:`, `sms:`, etc…

If you wish to add another protocol to your website, you will need to alter the function that retrieves the list of allowed protocols, and add your own protocol.

```php rainbow rainbow-show
function allow_additional_protocol( $protocols ){
     $protocols[] = 'my-protocol';
     return $protocols;
}
add_filter( 'kses_allowed_protocols' , 'allow_additional_protocol' );

```

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Shilo Eish Yemini](https://secure.gravatar.com/avatar/ace896621cb53f807f296aa06adc1784196ad4e1b06ae2489fc17d41d1fbe0e4?s=300&d=mm&r=g)

Shilo Eish Yemini

Shilo is Elementor’s Editor Product Lead. He loves innovative products, pays attention to the small details, and is passionate about solving puzzles.

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