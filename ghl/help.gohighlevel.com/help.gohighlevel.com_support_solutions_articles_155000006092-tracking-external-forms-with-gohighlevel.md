---
url: "https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel"
title: " External Tracking: Track External Forms & Page Views : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#fw-main-content)

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
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Forms](https://help.gohighlevel.com/support/solutions/folders/48000665899)
6. Tracking External Forms with GoHighLevel

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

# Tracking External Forms with GoHighLevel

Modified on: Fri, 7 Nov, 2025 at 9:55 AM

**External Tracking** lets you place one lightweight script into **external websites** (WordPress, Wix, Squarespace or custom built sites) to **capture form submissions and page views directly** into HighLevel. This article walks you through setting up external tracking, troubleshooting the installation and viewing submissions in HighLevel.

* * *

**TABLE OF CONTENTS**

- [What is External Tracking?](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#What-is-External-Tracking?)
  - [Key Benefits of External Tracking](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#Key-Benefits-of-External-Tracking)
  - [Contact & Attribution Details](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#Contact-&-Attribution-Details)
  - [How To Set Up External Tracking](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#How-To-Set-Up-External-Tracking)
  - [Advanced Troubleshooting & Diagnostics](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#Advanced-Troubleshooting-&-Diagnostics)
  - [Frequently Asked Questions](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#Frequently-Asked-Questions)
  - [Related Articles](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel#Related-Articles)

* * *

# **What is External Tracking?**

External Tracking collects activity from websites you don’t host in HighLevel. After you add a small script to those website pages, HighLevel records page views and captures supported form submissions. Each submission apprears in the forms submissions dashboard and syncs to a contact record with attribution details, making it easier than ever to understand where leads come from and take action with automation.

* * *

## **Key Benefits of External Tracking**

- **Keep your Current Forms:** Capture leads from existing third-party forms without rebuilding in HighLevel.

- **Automatic CRM Sync:** Submissions create or update Contacts so your team can follow up immediately.

- **Attribution Visibility:** UTMs and source details are attached to contacts for easy tracking.

- **Page Views + Forms Together:** Track both page visits and form submissions in one place for more complete context.

- **Combined Analytics:** Consolidate analytics for both HighLevel and non-HighLevel forms

* * *

## **Contact & Attribution Details**

HighLevel attaches events and attribution data to contact records so you can see what pages were visited, what form was submitted, and what drove the visit.

- **Timeline events:** You’ll see **Page Visited** and **Form Submitted** entries for tracked pages/forms.

- **Activity details:** Open a submission in the contact’s activity to view captured fields and page metadata (page title, URL, medium/source if available, etc.).

- **Tagging:** Contacts may be tagged with the external form name (e.g., `external form: {form_name}`)


![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057776345/original/oDk-MAUjv3jVS-sXNWCCV8bceUl1UYzWeQ.png?1762465323)

* * *

## **How To Set Up External Tracking**

Follow these steps end-to-end to install the script, confirm that page views and forms are being tracked, and see the data arrive in HighLevel.

#### **Step 1:** Open External Tracking

From within your sub-account:

- Navigate to **Settings** → **External** **Tracking**


- Under the Installation tab, click **Copy** **Script**

The script will look like this:

```html
<script
  src="https://link.gohighlevel.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
</script>
```

```
Important: The data-tracking-id is unique to your account. Do not edit it.
```

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057775810/original/opQGxLAmLBIT85SwAzzB96FN2l3u9K3gfg.png?1762463821)

#### **Step 2:** Add the Script to Your Website

Paste the script into the footer, just before the closing </body> tag.

Examples

**Custom HTML Site**

```html
...
<!-- Paste GoHighLevel tracking script here -->
<script
  src="https://link.gohighlevel.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
</script>
</body>
</html>
```

**WordPress**

- Go to Appearance → Theme Settings → Footer (if available), or

- Install a plugin like Insert Headers and Footers and paste into the Footer Scripts box

**Wix / Squarespace / Webflow**

Go to Site Settings → Custom Code → Footer Code Injection and paste the script.

#### **Step 3:** Make Sure Your Form is Compatible

Your form must:

- Use a <form> tag

- Include an email input field:





```html
<input type="email" name="email" />
```


- Include a submit button:





```html
<button type="submit">Submit</button>
```


- Not be inside an <iframe>

- Not block submission with custom JavaScript (unless it re-triggers a standard submit)

Example Minimal Form

```
<form action="#" method="post">
  <input type="email" name="email" placeholder="email@example.com" required />
  <button type="submit">Submit</button>
</form>
```

#### **Step 4:** View Submissions

Once the script is installed and your form is compatible:

- Go to **Sites** → **Forms** → **Submissions**

- Use the filter **External: “Form Name”**

- Review and export submissions as needed

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155057776130/original/2azuLykARgkrLc1ajvyfqgjJqvfP5EQiPw.png?1762464697)

* * *

## **Advanced Troubleshooting & Diagnostics**

If submissions are not showing or tracking isn’t working, use these checks.

**Enable Debug Mode**

Add data-debug="true" to your script:

```html
<script
  src="https://link.gohighlevel.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  data-debug="true">
</script>
```

Reload your page, open the console (Cmd/Ctrl + Option/Alt + J), and look for \[LC Tracking\] logs such as:

- Tracker initialized successfully

- SessionId stored in cookie

- Event sent successfully: external\_script\_page\_view

If logs do not appear:

- Confirm the script is on the page

- Verify the data-tracking-id value

- Check for ad blockers or CSP errors

**Network & API Checks**

In the browser Network tab, check:

- Page view requests succeed with 2xx status

- No CORS errors

- Response shows success acknowledgement

#### **Cookies & Session**

The script sets a cookie with a session ID.

- Look in **Application** → **Storage** → **Cookies**

- Confirm a session cookie is created

- If missing, check browser privacy settings or third-party iframe restrictions

#### **Common Issues**

- **No console logs** → Add data-debug="true", confirm script placement

- **CORS errors** → Verify endpoint and server CORS config

- **Form not tracked** → Ensure it uses <form>, has email input, and a submit button

- **Tracking ID errors** → Confirm data-tracking-id matches your account

- **Single Page Apps** → Initial load is tracked, but route changes may require manual hooks

#### **Quick Diagnostic Checklist**

- Script tag has a valid data-tracking-id

- Debug mode enabled for testing

- Console shows \[LC Tracking\] logs

- Network requests succeed (2xx)

- Session cookie is present

- Forms meet structure requirements

#### **Example Setup With Extra Fields**

```html
<form name="abc">
  <label for="first_name">First Name</label>
  <input type="text" name="first_name" id="first_name" />

  <label for="last_name">Last Name</label>
  <input type="text" name="last_name" id="last_name" />

  <label for="email">Email</label>
  <input type="email" name="email" id="email" />

  <label for="phone">Phone</label>
  <input type="tel" name="phone" id="phone" />

  <label for="company_name">Company Name</label>
  <input type="text" name="company_name" id="company_name" />

  <input type="submit" value="Submit">
</form>
```

* * *

## **Frequently Asked Questions**

**Q: Do I have to rebuild my forms in HighLevel?**

No. External Tracking captures information from compatible existing forms on your site. If you’d prefer, you can also embed a HighLevel form instead.

**Q: How do I automate follow‑up?**

Use the Form Submitted workflow trigger to send notifications, apply tags, and kick off campaigns once external submissions sync in.

**Q: Why don’t I see UTMs on some contacts?**

Attribution depends on cookies and URL parameters being present. Strict browser privacy settings or missing UTMs can limit available data.

**Q: What types of forms are compatible with external tracking?**

With external tracking, you can track activity from HTML forms and Formspree.

* * *

## **Related Articles**

- [Where Do Form Responses Show Up?](https://help.gohighlevel.com/en/support/solutions/articles/48000979916)

- [Workflow Trigger — Form Submitted](https://help.gohighlevel.com/en/support/solutions/articles/155000002550)

- [Embedding HighLevel Forms on Non‑HighLevel Websites](https://help.gohighlevel.com/en/support/solutions/articles/155000004524)

- [Analytics for Forms and Surveys](https://help.gohighlevel.com/en/support/solutions/articles/155000004181)

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

- [Sites Overview](https://help.gohighlevel.com/support/solutions/articles/155000001633-sites-overview)
- [Webinar Funnels](https://help.gohighlevel.com/support/solutions/articles/155000004125-webinar-funnels)
- [Create Forms & Surveys Inside the Site Builder](https://help.gohighlevel.com/support/solutions/articles/155000006719-create-forms-surveys-inside-the-site-builder)
- [Complete Guide to Creating Webinars!](https://help.gohighlevel.com/support/solutions/articles/155000006062-complete-guide-to-creating-webinars-)
- [Forms and Surveys: "Other" Option](https://help.gohighlevel.com/support/solutions/articles/155000004712-forms-and-surveys-other-option)
- [Bubble Style for Radio & Checkbox Elements](https://help.gohighlevel.com/support/solutions/articles/155000006440-bubble-style-for-radio-checkbox-elements)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel/hit)