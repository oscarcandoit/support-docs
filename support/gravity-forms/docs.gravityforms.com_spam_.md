---
url: "https://docs.gravityforms.com/spam/"
title: "Fighting Spam - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

```

```

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)  - [Standard Fields](https://docs.gravityforms.com/category/user-guides/standard-fields/)
  - [Advanced Fields](https://docs.gravityforms.com/category/user-guides/advanced-fields/)
  - [Pricing Fields](https://docs.gravityforms.com/category/user-guides/pricing-fields/)
  - [Post Fields](https://docs.gravityforms.com/category/user-guides/post-fields/)
  - [Field Settings](https://docs.gravityforms.com/category/user-guides/field-settings-guide/)
  - [Entries](https://docs.gravityforms.com/category/user-guides/form-entries/)    - [Entry List Page](https://docs.gravityforms.com/entries/ "Entry List Page")
    - [Reviewing Spam Submissions](https://docs.gravityforms.com/reviewing-spam-submissions/ "Reviewing Spam Submissions")
    - [Fighting Spam](https://docs.gravityforms.com/spam/ "Fighting Spam")
    - [Entry Detail](https://docs.gravityforms.com/entry-detail/ "Entry Detail")
    - [Reviewing Entries (Form Submissions)](https://docs.gravityforms.com/reviewing-form-submissions/ "Reviewing Entries (Form Submissions)")
    - [Importing Form Entries](https://docs.gravityforms.com/importing-form-entries/ "Importing Form Entries")
    - [Exporting Form Entries](https://docs.gravityforms.com/exporting-form-entries/ "Exporting Form Entries")
    - [Entry Trash](https://docs.gravityforms.com/trash/ "Entry Trash")
    - [Printing an Entry](https://docs.gravityforms.com/print/ "Printing an Entry")
    - [Bulk Print Multiple Entries](https://docs.gravityforms.com/bulk-print/ "Bulk Print Multiple Entries")
    - [Moderating Entries](https://docs.gravityforms.com/moderating-entries/ "Moderating Entries")
    - [Akismet Anti-Spam](https://docs.gravityforms.com/akismet-anti-spam/ "Akismet Anti-Spam")
  - [Conditional Logic](https://docs.gravityforms.com/category/user-guides/conditional-logic/)
  - [Merge Tags](https://docs.gravityforms.com/category/user-guides/merge-tags-getting-started/)
  - [Confirmations](https://docs.gravityforms.com/category/user-guides/confirmations/)
  - [Notifications](https://docs.gravityforms.com/category/user-guides/notifications/)
  - [Design and Layout](https://docs.gravityforms.com/category/user-guides/design-and-layout/)
  - [Settings Reference](https://docs.gravityforms.com/category/user-guides/settings-reference/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Fighting Spam

- [Introduction](https://docs.gravityforms.com/spam/#introduction)
- [Solutions](https://docs.gravityforms.com/spam/#solutions)
- [Honeypot](https://docs.gravityforms.com/spam/#honeypot)
- [State Validation](https://docs.gravityforms.com/spam/#h-state-validation)
- [Submit Button Conditional Logic](https://docs.gravityforms.com/spam/#submit-button-conditional-logic)
- [Multi-Page Forms](https://docs.gravityforms.com/spam/#multi-page-forms)
- [Block Search Indexing](https://docs.gravityforms.com/spam/#block-search-indexing)
- [Cloudflare](https://docs.gravityforms.com/spam/#cloudflare)
- [Integrations & Plugins](https://docs.gravityforms.com/spam/#integrations-plugins)
- [Akismet Add-On](https://docs.gravityforms.com/spam/#akismet-add-on)
- [Cloudflare Turnstile Add-On](https://docs.gravityforms.com/spam/#cloudflare-turnstile-add-on)
- [reCAPTCHA Add-On](https://docs.gravityforms.com/spam/#recaptcha-add-on)
- [Captcha Field (legacy)](https://docs.gravityforms.com/spam/#captcha-field)
- [Certified Developer Add-Ons](https://docs.gravityforms.com/spam/#certified-developer-add-ons)
- [Third-party Plugins](https://docs.gravityforms.com/spam/#third-party-plugins)
- [Code Snippets](https://docs.gravityforms.com/spam/#code-snippets)
- [Field Validation](https://docs.gravityforms.com/spam/#snippets-field-validation)
- [Spam Filter](https://docs.gravityforms.com/spam/#snippets-spam-filter)
- [Related Articles From The Blog](https://docs.gravityforms.com/spam/#related-articles-from-the-blog)
- [Related Tutorials From The Video Library](https://docs.gravityforms.com/spam/#related-tutorials-from-the-video-library)

## Introduction

Publicly accessible forms are vulnerable to spam, and combating it is difficult due to the ever-evolving tactics of spammers and bots. However, there are various solutions available to minimize the submission of spam or to mark entries as spam. It’s important to note that no single method can catch 100% of spam, and as a result, there are numerous anti-spam techniques and services. For optimal results, it’s recommended to **use multiple solutions simultaneously**.

Configured notifications, confirmations, and add-on feeds will not be processed for spam submissions.

Submissions that are saved and marked as spam can be found in the Entries section of the form via the spam filter. When viewing a specific entry via the spam filter, you can often find a note indicating which solution marked it as spam. For more information, refer to [Reviewing Spam Submissions](https://docs.gravityforms.com/reviewing-spam-submissions/).

See also: [Moderating Entries](https://docs.gravityforms.com/moderating-entries/)

## Solutions

### Honeypot

Gravity Forms includes a built-in honeypot feature available in the Spam Detection section of each form’s [Form Settings](https://docs.gravityforms.com/form-settings/#h-spam-detection).

When enabled, the honeypot detects spam using multiple techniques:

- A hidden honeypot field. The submission is spam if the field contains a value.
- A JavaScript-inserted version hash. The submission is spam if the value is missing or fails validation. Since version 2.7.
- An optional [Submission Speed Check](https://docs.gravityforms.com/form-settings/#h-spam-detection) that measures the time between page load and user actions such as clicking submit, next, or previous. The submission is considered spam if the timing data is missing, invalid, or below the configured threshold. Since version 2.9.21.

Depending on your form settings, detected spam will either be blocked (not saved, no entry is created) or saved as an entry marked as spam.

If [logging is enabled](https://docs.gravityforms.com/logging-and-debugging/), the result of the honeypot checks will be recorded in the Gravity Forms core log. Here are the possible logging statements, not all of them will be recorded for every submission.

|     |
| --- |
| `[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::validate_honeypot(): Is honeypot input (name: [input name]) empty? [Yes or No].`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::validate_honeypot(): Submission initiated by GFAPI. version_hash validation and speed check bypassed.`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::validate_honeypot(): Is submission valid? No; version_hash input is empty.`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::validate_honeypot(): Is version_hash input valid? [Yes or No].`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::is_valid_submission_speed(): Submission speed check is disabled.`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::is_valid_submission_speed(): Is speed check valid? No; gform_submission_speeds input is empty or invalid.`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::is_valid_submission_speed(): Is speed check valid? [Yes or No]; [count] of [total] submissions met the threshold ([threshold] ms). Min required: [number]. All speeds: [JSON containing all the recorded timings]`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::validate_honeypot(): Is submission valid? [Yes or No].`<br>`[date and time] - DEBUG --> Gravity_Forms\Gravity_Forms\Honeypot\GF_Honeypot_Handler::handle_abort_submission(): Result from Honeypot: [true or false]`<br>`[date and time] - DEBUG --> GFFormDisplay::process_form(): Aborting early via gform_abort_submission_with_confirmation filter.` |

The [gform\_honeypot\_labels\_pre\_render](https://docs.gravityforms.com/gform_honeypot_labels_pre_render/) filter can be used to change the labels used by the honeypot field.

If you think a bot has discovered the name attribute of your form’s hidden honeypot field, the [gform\_honeypot\_input\_name](https://docs.gravityforms.com/gform_honeypot_input_name/) filter can be used to customize it.

### State Validation

Out of the box, Gravity Forms automatically blocks spam submissions that send random or unexpected values to supported form fields as part of its built-in form validation feature. Refer to [this](https://docs.gravityforms.com/state-validation/) article for more information about State Validation.

### Submit Button Conditional Logic

Add a [single-line text](https://docs.gravityforms.com/single-line-text/), [number](https://docs.gravityforms.com/number/), or [multiple choice](https://docs.gravityforms.com/multiple-choice-field/) field to your form which asks a simple question. A real person should be able to answer the question correctly, whereas most bots won’t.

Here are some examples:

- A panda is black and \_\_\_\_\_
- 4 + 7 = \_\_\_\_\_
- What goes up, must come \_\_\_\_\_
- A cow has how many legs? \_\_\_\_\_
- The sky is typically what colour? \_\_\_\_\_
- What sound does a cat make? \_\_\_\_\_
- What do you call water when it is frozen? \_\_\_\_\_
- What is 10 minus 4? \_\_\_\_\_

In the settings panel of the [Submit Button field](https://docs.gravityforms.com/submit-button/), in the [Form Editor](https://docs.gravityforms.com/form-editor/), you would [enable button conditional logic](https://docs.gravityforms.com/submit-button/#h-conditional-logic) based on this question field. If the submitter doesn’t input the correct answer, the form can’t submit. If they manage to force the submission, it will not be processed.

### Multi-Page Forms

If you will be accepting payments using a card or payment add-on field, position it on the last page of the form.

Enabling the required setting on earlier fields can limit the use of the card/payment add-on field to those who have completed the previous form pages, reducing the risk of fraudulent carding activity.

### Block Search Indexing

Preventing search engines from indexing the page containing the form can help prevent your form being targeted by bots and spammers.

Google recommends using the [noindex directive](https://support.google.com/webmasters/answer/93710), but if the page is already indexed, you’ll also need to remove it via [webmaster tools](https://www.google.com/webmasters/tools/url-removal).

### Cloudflare

Cloudflare provides various services, including [IP Access Rules](https://support.cloudflare.com/hc/en-us/articles/217074967-Configuring-IP-Access-Rules), [DDoS Protection](https://www.cloudflare.com/ddos/), [WAF](https://www.cloudflare.com/waf/), [Bot Management](https://www.cloudflare.com/products/bot-management/), [Rate Limiting](https://www.cloudflare.com/rate-limiting/), [SSL/TLS](https://www.cloudflare.com/ssl/), and [DNSSEC](https://www.cloudflare.com/dns/dnssec/), that can safeguard your site and forms. With IP Access Rules, you can easily block entire countries.

Our [Cloudflare Turnstile Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/cloudflare-turnstile-add-on/) enables integration with the [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) service.

**Note**: If you decide to use Cloudflare services, please make sure to keep **[Rocket Loader](https://developers.cloudflare.com/speed/optimization/content/rocket-loader/enable/) disabled**, and **exclude form pages from [Cloudflare’s caching](https://developers.cloudflare.com/cache/how-to/cache-rules/create-dashboard/)** to prevent potential issues.

### Integrations & Plugins

#### Akismet Add-On

The [Akismet Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/akismet-add-on/) sends form submissions to the [Akismet](https://akismet.com/) service for analysis. As of version 1.1, the [Akismet plugin by Automattic](https://wordpress.org/plugins/akismet/) no longer needs to be active. Submissions identified as spam are saved, with the entry marked as spam.

#### Cloudflare Turnstile Add-On

The [Cloudflare Turnstile Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/cloudflare-turnstile-add-on/) offers a captcha with a focus on privacy and user experience. It automatically chooses from a rotating suite of non-intrusive browser challenges based on telemetry and client behavior exhibited during a session, without the use of cookies. Submissions are blocked or fail validation.

#### reCAPTCHA Add-On

The [reCAPTCHA Add-On](https://docs.gravityforms.com/category/add-ons-gravity-forms/recaptcha-add-on/) adds support for the score-based Google reCAPTCHA v3 or Enterprise functionality, without using a form field. If the reCAPTCHA script doesn’t run or the response is invalid, the form will fail validation without any-field specific errors. Entries are marked as spam when their score from the reCAPTCHA response is less than or equal to the configured threshold.

#### Captcha Field (legacy)

The built-in [Captcha field](https://docs.gravityforms.com/captcha/) can reduce spam from bots, but it’s no longer recommended because it can [introduce accessibility issues](https://docs.gravityforms.com/accessibility-for-content-providers/#h-recaptchas). It integrates with Google’s legacy reCAPTCHA version 2 (checkbox or invisible) or the third party [Really Simple CAPTCHA](https://wordpress.org/plugins/really-simple-captcha/) plugin, which is image-based. Submissions are blocked or fail validation.

#### Certified Developer Add-Ons

The following add-ons are from [certified developers](https://www.gravityforms.com/certified-developers-and-add-ons/):

- [Advanced Phone Field](https://gravitywiz.com/documentation/gravity-forms-advanced-phone-field/) by Gravity Wiz enhances the Phone field with automatic phone number validation.
- [Block Email Domains](https://wordpress.org/plugins/gf-block-email-domains/) by GravityKit (previously by Road Warrior Creative) allows you to define a comma separated list of email domains to block on each email field.
- [Blocklist](https://gravitywiz.com/documentation/gravity-forms-blocklist/) by Gravity Wiz can be used to validate submissions against the WordPress Disallowed Comment Keys. Disallowed Comment Keys was formerly known as Comment Blocklist (WordPress 5.4) and Comment Blacklist (WordPress 5.3 and earlier).
- [Email Validator](https://gravitywiz.com/documentation/gravity-forms-email-validator/) by Gravity Wiz enhances the Email field with automatic email and email domain validation.
- [GC OpenAI](https://gravitywiz.com/documentation/gravity-connect-openai/) by Gravity Wiz can be used to check if content from the form submission complies with [OpenAI’s usage policies](https://beta.openai.com/docs/usage-policies/content-policy). See [How to Use AI to Boost Gravity Forms Moderation (with GC OpenAI)](https://gravitywiz.com/gravity-forms-moderation-gc-openai/) for more details.
- [Limit Submissions](https://gravitywiz.com/documentation/gravity-forms-limit-submissions/) by Gravity Wiz can be used to limit the number of entries that can be submitted by almost anything (user, role, IP, URL, field value) for almost any time period.
- [One-Time Password](https://cosmicgiant.com/plugins/one-time-password/) by CosmicGiant protects forms by adding a simple verification field. Before a user can submit the form, they’ll click a button to send a verification code via email or SMS. Once verified, the form can be submitted.
- [Zero Spam](https://wordpress.org/plugins/gravity-forms-zero-spam/) by GravityKit uses JavaScript to inject an input containing a key into the form submission. If that input is missing or its value doesn’t match the expected key, the entry is marked as spam. Deactivating and then reactivating the plugin will generate a new key.

#### Third-party Plugins

The following solutions are from third-party developers:

##### Blocklist

- [Blacklist Manager](https://wordpress.org/plugins/wc-blacklist-manager/)
- [Block IPs for Gravity Forms](https://wordpress.org/plugins/gf-block-ips/)
- [BSK Forms Blacklist](https://wordpress.org/plugins/bsk-gravityforms-blacklist/)
- [Disposable Email Blocker](https://wordpress.org/plugins/disposable-email-blocker-gravityforms/)
- [Gravity Forms Email Blacklist](https://wordpress.org/plugins/gravity-forms-email-blacklist/)

##### Captchas

- [ALTCHA](https://wordpress.org/plugins/altcha-spam-protection/)
- [Captcha.eu](https://wordpress.org/plugins/captcha-eu/)
- [Captcha 4WP](https://captcha4wp.com/)
- [CaptchaFox](https://wordpress.org/plugins/captchafox-for-forms/)
- [Friendly Captcha for WordPress](https://wordpress.org/plugins/friendly-captcha/)
- [hCaptcha for WP](https://wordpress.org/plugins/hcaptcha-for-forms-and-more/)
- [TrustCaptcha](https://wordpress.org/plugins/trustcaptcha/)
- [WordPress Captcha Plugin Pro](https://bestwebsoft.com/products/wordpress/plugins/captcha/)
- [WP Image CAPTCHA Pro](https://wpimagecaptcha.com/downloads/pro-plugin/)

##### Field Validation

- [Byteplant Email Validator](https://wordpress.org/plugins/email-validator-by-byteplant/)
- [Byteplant Phone Validator](https://wordpress.org/plugins/byteplant-phone-validator/)
- [Clearout Email Validator](https://wordpress.org/plugins/clearout-email-validator/)
- [DeBounce Email Validator](https://wordpress.org/plugins/debounce-io-email-validator/)
- [Dilli Email Validator](https://wordpress.org/plugins/dilli-email-validator/)
- [GF No Duplicates](https://wordpress.org/plugins/gf-no-duplicates/)
- [Regex Textfield](https://wordpress.org/plugins/regex-textfield-gravityforms-add-on/)

##### Opt-In/OTP

- [Double Opt In for Gravity Forms](https://albertbrueckmann.de/produkte/addon-double-opt-in-for-gravity-forms-en/)
- [Gravity Forms – OTP Verification (SMS/EMAIL)](https://wordpress.org/plugins/gravity-otp-verification/)
- [miniorange OTP Verification Addon](https://plugins.miniorange.com/otp-verification-addon-for-gravity-forms)

##### Spam Detection

- [CleanTalk](https://wordpress.org/plugins/cleantalk-spam-protect/)
- [Fullworks](https://fullworksplugins.com/products/anti-spam/)
- [HighPots Spam Protection](https://wordpress.org/plugins/highpots-spam-protection/)
- [Maspik](https://wordpress.org/plugins/contact-forms-anti-spam/)
- [No Spam AI](https://wordpress.org/plugins/no-spam-ai/)
- [OOPSpam](https://wordpress.org/plugins/oopspam-anti-spam/)
- [ShieldPro](https://getshieldsecurity.com/)
- [SilentShield](https://wordpress.org/plugins/captcha-for-contact-form-7/)
- [WP Armour](https://wordpress.org/plugins/honeypot/)

### Code Snippets

Code snippets can be used in the theme functions.php file or custom functionality plugins.

#### Field Validation

Since version 2.9.15, the Email field has a dedicated filter, [gform\_email\_field\_rejectable\_values](https://docs.gravityforms.com/gform_email_field_rejectable_values/), which can be used to reject partial (e.g. domains) or complete email addresses. When a rejectable value is found, the field fails validation and the form is re-displayed with a validation error. See [Automatically Block Unwanted Emails Using Code](https://docs.gravityforms.com/automatically-block-unwanted-emails-using-code/) for a complete code snippet.

The [gform\_field\_validation](https://docs.gravityforms.com/gform_field_validation) and/or [gform\_validation](https://docs.gravityforms.com/gform_validation) filters can be used to perform custom validation of field values.

- [Integrate with QuickEmailVerification API](https://docs.gravityforms.com/gform_field_validation/#h-email-validation-by-third-party-api)
- [Prevent submission based on a word list](https://docs.gravityforms.com/gform_field_validation/#h-prevent-submission-based-on-a-word-list)
- [Prevent submission if a URL is entered into Text or Paragraph fields](https://docs.gravityforms.com/gform_field_validation/#h-prevent-submission-if-a-url-is-entered-into-text-or-paragraph-fields)
- [Prevent submission of Cyrillic characters](https://docs.gravityforms.com/gform_field_validation/#h-prevent-submission-of-cyrillic-characters)

#### Spam Filter

The [gform\_entry\_is\_spam](https://docs.gravityforms.com/gform_entry_is_spam) filter can be used to mark submissions as spam.

- [Integrate with the ZeroBounce Email Validation API](https://docs.gravityforms.com/gform_entry_is_spam/#h-integrate-with-zerobounce)
- [Check field values for URLs](https://docs.gravityforms.com/gform_entry_is_spam/#h-check-field-values-for-urls)
- [Rate limit submissions based on the IP address](https://docs.gravityforms.com/gform_entry_is_spam/#h-ip-rate-limit)
- [Check that first and last name inputs contain different values](https://docs.gravityforms.com/gform_entry_is_spam/#h-check-name-field-values)
- [Use ipapi.co to check country code for IP address](https://docs.gravityforms.com/gform_entry_is_spam/#h-integrate-with-ipapi-co)
- [Gravity Forms and Disallowed Keys by Ipstenu (Mika Epstein)](https://halfelf.org/2021/gravity-forms-and-disallowed-keys/)
- [Stopping Jerks in Gravity Forms by Ipstenu (Mika Epstein)](https://halfelf.org/2023/stoping-jerks-in-gravity-forms/)

## Related Articles From The Blog

- [Brand new release: reCAPTCHA Add-On 2.1](https://www.gravityforms.com/blog/recaptcha-add-on-2-1/)

- [Brand new release: reCAPTCHA Add-On 2.0](https://www.gravityforms.com/blog/recaptcha-add-on-2-0/)

- [How to Filter Spam Form Entries with Akismet](https://www.gravityforms.com/blog/filter-spam-with-akismet/)

- [Brand new release: Akismet Add-On 1.1](https://www.gravityforms.com/blog/akismet-add-on-1-1/)

- [An Ultimate Guide: Gravity Forms Anti-Spam Protection for WordPress in 2025](https://www.gravityforms.com/blog/gravity-forms-anti-spam-wordpress/)

- [How to Enable Anti-Spam Honeypot for WordPress Forms](https://www.gravityforms.com/blog/how-to-enable-anti-spam-honeypot-for-wordpress-forms/)

- [How to Add Google reCAPTCHA v2 and v3 to Your Forms](https://www.gravityforms.com/blog/add-recaptcha-to-your-forms/)

- [How to… Prevent Spam Form Entries](https://www.gravityforms.com/blog/how-to-prevent-spam-form-entries/)

- [6 Tips to Reduce Spam Form Entries](https://www.gravityforms.com/blog/6-tips-to-reduce-spam-form-entries/)


## Related Tutorials From The Video Library

- [Using the Akismet Add-On](https://www.gravityforms.com/video/using-the-akismet-add-on/)
- [How to Invisibly Block Spam on Your Site with Google reCAPTCHA v3](https://www.gravityforms.com/video/recaptcha/)
- [Fighting Spam with Honeypot](https://www.gravityforms.com/video/fighting-spam-with-honeypot/)
- [Five Tools to Fight Spam](https://www.gravityforms.com/video/five-tools-to-fight-spam/)

_​ **Disclaimer**: Third-party se_ rvices, _plugins, or code snippets that are referenced by our Support documentation or in Support Team communications are provided as suggestions only. We do not evaluate, test or officially support third-party solutions. You are wholly responsible for determining if any suggestion given is sufficient to meet the functional, security, legal, ongoing cost and support needs of your project._

_Feedback, feature and integration requests, and other functionality ideas can be submitted on our [Gravity Forms](https://roadmap.forms.gravity.com/tabs/1-under-consideration/submit-idea), [Gravity Flow](https://roadmap.flow.gravity.com/tabs/1-under-consideration/submit-idea), or [Gravity SMTP](https://roadmap.smtp.gravity.com/tabs/15-under-consideration/submit-idea) product roadmap pages._

- Instagram


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: November 22, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)

Notifications

[Algolia](https://docs.gravityforms.com/spam/# "Algolia")

![](https://docs.gravityforms.com/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/1.png)