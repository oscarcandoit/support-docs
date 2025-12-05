---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-"
title: " How to Apply Custom CSS to Forms, Surveys, and Quizzes : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Forms](https://help.gohighlevel.com/support/solutions/folders/48000665899)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Forms](https://help.gohighlevel.com/support/solutions/folders/48000665899)
6. How to Add Custom CSS to Forms, Surveys, and Quizzes!

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

# How to Add Custom CSS to Forms, Surveys, and Quizzes!

Modified on: Thu, 16 Oct, 2025 at 6:46 AM

You can easily change how your forms, surveys, and quizzes look using **Custom CSS**. Follow these simple steps.

* * *

## 1\. Where to Add Custom CSS

### Option 1: Inside the Form, Survey, or Quiz (recommended)

1. Go to **Sites → Form Builder** (or **Survey Builder / Quiz Builder**).

2. Open your form.

3. Click on the **Styles** tab **→ Advanced Section →** **Custom CSS** section.

4. Paste your CSS code.

5. Click **Save**, then **Publish**.


This method updates how the form looks **inside** the form or survey itself.

### Option 2: On the Funnel or Website Page

If your form is embedded on a page:

1. Open your **Funnel or Website** in the Builder.

2. Go to **Settings → Custom CSS**.

3. Add CSS here to style the **container around** the form (like margins, padding, or background color).


⚠ You cannot style fields or buttons here because the form is loaded inside an iframe.

### Option 3: On External Sites (like WordPress)

You can still style the **iframe container**, but not the form fields inside.

* * *

## 2\. Basic CSS Examples

### A. Input Fields

```css
input, textarea, select {  border: 1px solid #ccc;  border-radius: 8px;  padding: 10px;  font-size: 16px; }
input:focus, textarea:focus {  border-color: #7C3AED;  box-shadow: 0 0 4px rgba(124, 58, 237, 0.3); }
```

### B. Submit Button

```css
button[type="submit"] {  background-color: #7C3AED;  color: white;  padding: 12px 20px;  border: none;  border-radius: 8px;  font-size: 16px;  cursor: pointer; }
button[type="submit"]:hover {  background-color: #6931d4; }
```

### C. Labels and Errors

```css
label {  font-weight: 600;  color: #111827; }
.hl-error, .error-message {  color: #DC2626;  font-size: 14px; }
```

### D. Survey/Quiz Progress Bar

```css
.hl-progress .fill {  background-color: #7C3AED;  transition: width 0.3s ease; }
```

### E. Mobile-Friendly Styling

```css
@media (max-width: 480px) {  form {    padding: 0 10px;  }  button[type="submit"] {    width: 100%;  } }
```

* * *

## 3\. Styling Survey Navigation Buttons

You can also style the **Previous**, **Next**, and **Submit** buttons in surveys using these CSS snippets.

```css
.ghl-footer-preview .ghl-submit-btn {  background-color: #28A745 !important;  color: #FFFFFF !important; }
 .ghl-footer-preview .ghl-footer-next {  background-color: #28A745 !important;  color: #FFFFFF !important; }
 .ghl-footer-preview .ghl-footer-back {  background-color: #28A745 !important;  color: #FFFFFF !important; }
```

? You can change `#28A745` to your brand color to match your theme.

* * *

## 4\. Troubleshooting

**CSS not working?**

- Make sure it’s added in the **Custom CSS** area inside the Form/Survey/Quiz.

- Click **Publish**, then refresh your browser or open in **Incognito**.

- If embedded, remember: page CSS won’t affect the inside of the form (because of the iframe).


* * *

## 5\. Quick Tips

- Always **Save and Publish** after edits.

- Use **Inspect (right-click → Inspect)** to find element class names.

- Avoid overusing `!important`.

- Check how it looks on **desktop and mobile**.


* * *

## 6\. Example Template (Copy & Paste)

Paste this into your Form’s **Custom CSS** box:

```css
input, textarea, select {  width: 100%;  border: 1px solid #D0D5DD;  border-radius: 8px;  padding: 10px; }
label { font-weight: 600; color: #111827; } button[type="submit"] {  background: #7C3AED;  color: #fff;  padding: 12px 18px;  border: none;  border-radius: 8px;  cursor: pointer; }
button[type="submit"]:hover {  background: #6931d4; }
```

* * *

**You’re done!** Your form, survey, or quiz will now have your custom styles applied, including buttons styled to match your brand.

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

- [Where Do Form Responses Show Up?](https://help.gohighlevel.com/support/solutions/articles/48000979916-where-do-form-responses-show-up-)
- [Exporting Form answers to Google Sheets](https://help.gohighlevel.com/support/solutions/articles/48000979918-exporting-form-answers-to-google-sheets)
- [Sticky Contact in Forms, Surveys, and Calendars](https://help.gohighlevel.com/support/solutions/articles/48000979919-sticky-contact-in-forms-surveys-and-calendars)
- [No Slide Button in Survey](https://help.gohighlevel.com/support/solutions/articles/48001175185-no-slide-button-in-survey)
- [Gain Consent With Custom Checkboxes In Forms (GDPR Compliance)](https://help.gohighlevel.com/support/solutions/articles/48001185523-gain-consent-with-custom-checkboxes-in-forms-gdpr-compliance-)
- [Conditional Logic V2 in Forms and Surveys!](https://help.gohighlevel.com/support/solutions/articles/155000001314-conditional-logic-v2-in-forms-and-surveys-)

## Related Articles

- [Right Sidebar in Form and Survey Builder](https://help.gohighlevel.com/support/solutions/articles/155000004090-right-sidebar-in-form-and-survey-builder)
- [Bubble Style for Radio & Checkbox Elements](https://help.gohighlevel.com/support/solutions/articles/155000006440-bubble-style-for-radio-checkbox-elements)
- [Element & Slide Cloning in Quizzes, Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000006541-element-slide-cloning-in-quizzes-forms-and-surveys)
- [Rating Element for Forms, Surveys & Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000005509-rating-element-for-forms-surveys-quizzes)
- [How to Quickly Add and Edit Custom Fields in Forms and Surveys](https://help.gohighlevel.com/support/solutions/articles/155000003223-how-to-quickly-add-and-edit-custom-fields-in-forms-and-surveys)
- [Progress Bar for Surveys & Quizzes on Mobile](https://help.gohighlevel.com/support/solutions/articles/155000005707-progress-bar-for-surveys-quizzes-on-mobile)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006727-how-to-add-custom-css-to-forms-surveys-and-quizzes-/hit)