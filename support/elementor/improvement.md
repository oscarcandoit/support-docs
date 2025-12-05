---
url: https://developers.elementor.com/css-rendering-performance-improvement
scraped_at: 2025-10-20T00:49:24.185Z
---

# CSS Rendering Performance Improvement in Elementor 3.0

- Udi Dollberg
- [August 25, 2020](https://developers.elementor.com/2020/08/25/)
- 3 Comments
- [Performance](https://developers.elementor.com/category/performance/)
- Elementor 3.0

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

Elementor has two ways for rendering website CSS:

1. Printing it in a `<style>` tag in the DOM
2. Writing it to a CSS file that will be loaded with the page

The CSS written to files, for example, is completely static. It is printed once into a file, and that file is only updated when a change is made to the page’s content.

But what about dynamic content? Some dynamic content includes its own CSS, such as colors and images (when used as background-image values). Dynamic content, such as custom fields, is disconnected from the page’s content, and can be changed outside of editing the post or page in Elementor Editor. So what happens when dynamic values include CSS that needs to be printed every single time a page is loaded?

Up until Elementor 3.0, whenever a page was loaded, Elementor’s Dynamic Tags module scanned the entire page for any elements that include dynamic content. If dynamic content was found, the module fetched that element’s dynamic values, wrote the relevant CSS into a `<style>` tag, and injected it into the DOM. This, as described in the [elementor.com blog post](https://developers.elementor.com/blog/elementor-3-new-professional-features/), is an expensive process, costing precious loading time.

In [Elementor 3.0](https://developers.elementor.com/tag/elementor-v3-0/), we changed the way we manage the rendering process of dynamic CSS. On the first time a page is loaded, when the page’s static CSS is rendered, we create a cache which includes a list of the page’s elements which have dynamic CSS values. Then, whenever that page is visited, we fetch the list of dynamic elements from the cache, and render them immediately. Instead of having to iterate over all the elements of the page every single time the page loads – we get those elements from the already-available list of dynamic elements. This saves a lot of run time and makes page load noticeably faster.

Here are some results from tests we ran on [Blackfire](http://blackfire.io/) to examine the difference before and after our optimization:

#### **Page with no dynamic content at all:**

![](https://developers.elementor.com/wp-content/uploads/2020/08/image.png)

#### **Page with dynamic elements:**

![](https://developers.elementor.com/wp-content/uploads/2020/08/image-1.png)

[Sign Up](https://elementor.com/pages/addon-developers-corner/)

#### Developer Newsletter

Stay up to date on the latest developer news, product updates, and best practices.

## Author

![Picture of Udi Dollberg](https://secure.gravatar.com/avatar/266fe955548f0b4200fdd883c48e33d033b9e7b1d223c4e280f0718b9a765033?s=300&d=mm&r=g)

Udi Dollberg

Udi is a talented developer in Elementor’s Editor team and loves cars, woodworking and classic jazz.

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