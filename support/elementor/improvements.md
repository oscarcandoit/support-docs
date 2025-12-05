---
url: https://developers.elementor.com/elementor-v3-2-additional-dom-improvements
scraped_at: 2025-10-20T01:12:36.329Z
---

# Elementor v3.2: Additional DOM Improvements

- Udi Dollberg
- [April 8, 2021](https://developers.elementor.com/2021/04/08/)
- 4 Comments
- [Features](https://developers.elementor.com/category/features/)
- Elementor 3.2

![Cover image](https://developers.elementor.com/wp-content/uploads/2021/12/cover-1-1024x538.png)

In Elementor v3.0, we made the first step in optimizing the HTML output of Elementor pages. One of the steps in v3.0 was [removing 3 wrapper elements](https://developers.elementor.com/dom-improvements-ahead-html-wrappers-removal-from-v3-0/) from the Editor’s DOM output: `.elementor-inner`, `.elementor-row`, and `.elementor-column-wrap.`

The Optimized DOM Output feature is **optional**, and is configured as an [Elementor Experiment](https://developers.elementor.com/elementor-experiments/). The two new wrappers being removed are also included within this experiment and will only be actually removed from a website’s markup if the experiment is active in that website.

In Elementor v3.2.0, we are continuing our optimization efforts and removing two more wrappers:

- `.elementor-image`
- `.elementor-text-editor`


### **\`.elementor-image\`**

The `.elementor-image` class was used in the Image Widget. It was added in `` `elementor/includes/widgets/image.php` `` on [line 673](https://github.com/elementor/elementor/blob/d810209e610ef1952e5fbe98c3c06ac0385e67ef/includes/widgets/image.php#L673), and the markup output for the Image widget (with no link or caption) looked like this:

```php rainbow rainbow-show
<div class="elementor-element elementor-element-0b97317 elementor-widget elementor-widget-image" data-id="0b97317" data-element_type="widget" data-widget_type="image.default">
	<div class="elementor-widget-container">
		<div class="elementor-image">
			<img width="572" height="555" src="{image_src}" class="attachment-full size-full" alt="" loading="lazy" srcset="{srcset}">
                </div>
        </div>
</div>

```

In Elementor v3.2.0, the markup now looks like this:

```php rainbow rainbow-show
<div class="elementor-element elementor-element-0b97317 elementor-widget elementor-widget-image" data-id="0b97317" data-element_type="widget" data-widget_type="image.default">
	<div class="elementor-widget-container">
		<img width="572" height="555" src="{image_src}" class="attachment-full size-full" alt="" loading="lazy" srcset="{srcset}">
       </div>
</div>

```

### **\`.elementor-text-editor\`**

The `.elementor-text-editor` class was used in the Text Editor Widget. It was added in \`elementor/includes/widgets/text-editor.php\` on [line 399](https://github.com/elementor/elementor/blob/d810209e610ef1952e5fbe98c3c06ac0385e67ef/includes/widgets/text-editor.php#L399), and the markup output for the Text Editor widget looked like this:

```php rainbow rainbow-show
<div class="elementor-element elementor-element-0b34b24 elementor-widget elementor-widget-text-editor" data-id="0b34b24" data-element_type="widget" data-widget_type="text-editor.default">
	<div class="elementor-widget-container">
		<div class="elementor-text-editor">
			<p>Hello World.</p>
		</div>
         </div>
</div>

```

In Elementor v3.2.0, the markup now looks like this:

```php rainbow rainbow-show
<div class="elementor-element elementor-element-0b34b24 elementor-widget elementor-widget-text-editor" data-id="0b34b24" data-element_type="widget" data-widget_type="text-editor.default">
	<div class="elementor-widget-container">
		<p>Hello World.</p>
        </div>
</div>

```

### **Future plans:**

We thrive to provide our users with the best performing website experience, therefore we are making these adjustments step-by-step to remove more DOM elements from the output of Elementor, and to adjust the functionality of the editor accordingly. As mentioned above, it needs to be done  with much care.

The next wrappers we are working on removing are ` .elementor-widget-wrap` and `.elementor-widget-container`.

We will release the relevant information about removal of additional DOM elements.

### **What to Do, How to Prepare**

#### **Website Builders, Add-on Developers**

We highly recommend you go over your code and look for any uses of the wrapper classes mentioned above. If you use them anywhere, refactor your code to use different wrapper classes that aren’t being removed.

If you have not registered as an Elementor Beta Tester in your Elementor sites, we recommend doing that for sites you want to test Elementor 3.2.0 on before it is released. You can register as an Elementor Beta Tester in any Elementor site by going to your admin dashboard, then going to _Admin Dashboard > Elementor > Tools > Version Control_. At the bottom of the version control tab, choose “Enable” in the Beta Tester select box, submit your e-mail address, then click on “Save Changes”.

If you are not yet subscribed to our developer newsletter, we highly recommend subscribing via the subscription form in the footer below. When Elementor 3.2.0 beta is released, our mailing list will be notified.

#### **Elementor Users**

If you are not interested in using the Optimized DOM Output feature, you can just leave the experiment as ‘disabled’ ( _Admin Dashboard > Elementor > Settings > Experiments_).

If you are an Elementor user, we highly recommend backing up your website’s files and database prior to upgrading to Elementor 3.2.0, and keeping them somewhere safe (we recommend downloading a copy of the backup to your computer, or saving a copy in a cloud drive service such as Dropbox, Google Drive, or Microsoft Onedrive).

It is also recommended that you test the upgrade process in a staging environment (test site) if you have one, and only upgrade your live site when you are sure you have taken all the steps to make sure that your website will look and function like it did before the upgrade.

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