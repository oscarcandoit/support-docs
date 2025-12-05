---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-"
title: " ? How to Increase PHP Upload Limits on Your WordPress Site (Post Max Size, Upload Max Filesize) : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Wordpress](https://help.gohighlevel.com/support/solutions/folders/155000000883)
6. ? How to Increase PHP Upload Limits on Your WordPress Sit...

All

Articles


Recent Searches

Clear all

No recent searches

Popular Articles

* * *

Articles

[View all](https://help.gohighlevel.com/support/search/solutions)

* * *

Topics

[View all](https://help.gohighlevel.com/support/search/topics)

* * *

Tickets

[View all](https://help.gohighlevel.com/support/search/tickets)

![no results](https://help.gohighlevel.com/assets/cdn/portal/images/no-results.png)

Sorry! nothing found for

# ? How to Increase PHP Upload Limits on Your WordPress Site (Post Max Size, Upload Max Filesize)

Modified on: Tue, 16 Sep, 2025 at 7:24 AM

If you have your WordPress site hosted with us and are experiencing issues uploading large files or themes due to PHP size restrictions, follow these steps to increase the limits via your WordPress dashboard.

> **⚠️ Note:** The maximum upload limit that can be set using `.htaccess` is **300MB**. If you set values above that, it may show in the media library but the upload will **not work**.

* * *

## PHP max input variables: 10000 or higher  PHP post max size: 300M or higher  PHP memory limit: 2GB or higher  PHP time limit: 600 or higher  ? Steps to Increase PHP Memory Limits

### ✅ Step 1: Install a File Manager Plugin

1. Log into your **WordPress dashboard**.

2. Navigate to **Plugins > Add New**.

3. Search for **"WP File Manager"** or any similar file manager plugin.

4. Click **Install** and then **Activate** the plugin.


* * *

### ✅ Step 2: Locate the `.htaccess` File

1. In your WordPress dashboard, go to **WP File Manager** from the sidebar.

2. Open the folder named **`public_html`** (or the root directory where WordPress is installed).

3. Look for the file named `.htaccess`.

   - If it is not visible, enable the **"Show Hidden Files"** setting in the file manager plugin.

* * *

### ✅ Step 3: Edit the `.htaccess` File

1. Right-click on the `.htaccess` file.

2. Select **"Code Editor"** or **"Edit"** (depending on your plugin).

3. Scroll to the bottom of the file and **add the following lines** based on your required limits:


```apache
apache
CopyEdit


php_value upload_max_filesize 128M
php_value post_max_size 128M
```

4. Click **Save** or **Update File**.


* * *

## ? How to Verify the Change?

1. Go to **Media > Add New** in your WordPress dashboard.

2. Check the upload size mentioned at the bottom of the file upload area.

3. If it shows the new limit (e.g., 128MB), the update was successful.


* * *

## ? Troubleshooting

- **Still seeing old limits?** Clear your browser and site cache and recheck.

- **Uploads still fail?** Ensure the limit is under 300MB. Anything higher needs to be configured via server-level settings.

- **Need help?** Reach out to our support team.


* * *

Was this article helpful?

No
Yes


That’s Great!

Thank you for your feedback

Sorry! We couldn't be helpful

Thank you for your feedback

Your e-mail address

\*

Let us know how can we improve this article!\*

Need more information




Difficult to understand




Inaccurate/irrelevant content




Missing/broken link




Select at least one of the reasons


Please give your comments




reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

[Privacy](https://www.google.com/intl/en/policies/privacy/) \- [Terms](https://www.google.com/intl/en/policies/terms/)

reCAPTCHA

CAPTCHA verification is required.


Cancel


Send


Feedback sent

We appreciate your effort and will try to fix the article

Print

## Articles in this Folder

- [WordPress: Single Sign On Admin](https://help.gohighlevel.com/support/solutions/articles/155000004154-wordpress-single-sign-on-admin)
- [WordPress: Domain Connect Integration](https://help.gohighlevel.com/support/solutions/articles/155000004155-wordpress-domain-connect-integration)
- [Cloning Wordpress Websites in HighLevel](https://help.gohighlevel.com/support/solutions/articles/155000004189-cloning-wordpress-websites-in-highlevel)
- [How to Disable SEO Indexing for WordPress Sites](https://help.gohighlevel.com/support/solutions/articles/155000005158-how-to-disable-seo-indexing-for-wordpress-sites)
- [How to Select Country Server Location for WordPress Hosting](https://help.gohighlevel.com/support/solutions/articles/155000005816-how-to-select-country-server-location-for-wordpress-hosting)
- [Payment Failure Notifications on WordPress Admin via LC Plugin](https://help.gohighlevel.com/support/solutions/articles/155000005792-payment-failure-notifications-on-wordpress-admin-via-lc-plugin)

## Related Articles

- [WordPress Hosting: Specs, Market Comparison, and New Pricing Plans](https://help.gohighlevel.com/support/solutions/articles/48001231366-wordpress-hosting-specs-market-comparison-and-new-pricing-plans)
- [WordPress Hosting: Step-by-Step Migration Guide](https://help.gohighlevel.com/support/solutions/articles/155000005010-wordpress-hosting-step-by-step-migration-guide)
- [How to Use FTP to Access Your WordPress Website](https://help.gohighlevel.com/support/solutions/articles/155000006783-how-to-use-ftp-to-access-your-wordpress-website)
- [WordPress - Custom HTML Pages](https://help.gohighlevel.com/support/solutions/articles/155000006571-wordpress-custom-html-pages)
- [Getting Started - Migrate a Wordpress Site](https://help.gohighlevel.com/support/solutions/articles/155000005070-getting-started-migrate-a-wordpress-site)
- [WordPress - Disk Space Add-on](https://help.gohighlevel.com/support/solutions/articles/155000006787-wordpress-disk-space-add-on)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005108--how-to-increase-php-upload-limits-on-your-wordpress-site-post-max-size-upload-max-filesize-/hit)