---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script
category: articles
type: article
scraped: 2025-10-28T16:27:49.121Z
title:  Track External Form Submissions with a Tracking Script : LeadConnector 
status_code: 200
---

#  Track External Form Submissions with a Tracking Script : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [External Tracking](https://help.leadconnectorhq.com/support/solutions/155000000250) [Tracking for Forms](https://help.leadconnectorhq.com/support/solutions/folders/155000001320)

## Track External Forms with the Tracking Script  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script\# "Print this Article")

Modified on: Wed, 22 Oct, 2025 at 6:58 AM

* * *

The **External Tracking Script** allows you to capture activity and form submissions from external websites such as WordPress, Wix, Squarespace, Shopify, or custom HTML sites.

It helps you track visitor interactions, sync form submissions into your CRM, and trigger workflows based on page views or form submissions.

* * *

### **Important Note**

The External Tracking Script is used to capture specific events from external websites:

- Page view events

- Form submission events

- Workflow triggers based on those events


It does not perform full behavioral or session-level tracking (such as clicks, scrolls, or detailed contact activity) on third-party websites.

* * *

### **Important for WordPress users**

Many WordPress page builders and plugins use non-form elements (such as `<div>` containers or JavaScript-based widgets) instead of real `<form>` tags.

Those forms are not compatible with the tracking script for submission tracking.

If your forms do not use real `<form>` tags:

- Page view tracking will still work, but

- Form submissions will not sync to your CRM.


To ensure compatibility:

- Use plugins that output valid HTML forms (for example, WPForms, Gravity Forms, or Contact Form 7).

- Confirm that the form includes `<form>` and `<input type="email">` elements.

- Avoid forms inside iframes or popups.


* * *

**TABLE OF CONTENTS**

- [Quick Start (for beginners)](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Quick-Start-(for-beginners))
- [Step 1: Get Your Tracking Script](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Step-1%3A-Get-Your-Tracking-Script)
- [Step 2: Add the Script to Your Website](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Step-2%3A-Add-the-Script-to-Your-Website)
- [Step 3: Make Sure Your Form is Compatible](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Step-3%3A-Make-Sure-Your-Form-is-Compatible)
- [Step 4: View Submissions](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Step-4%3A-View-Submissions)
- [Workflow Triggers](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Workflow-Triggers)
- [Advanced Troubleshooting & Diagnostics](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Advanced-Troubleshooting-&-Diagnostics)
- [Additional Platform-Specific Installation Guides](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#Additional-Platform-Specific-Installation-Guides)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script#FAQs)

* * *

## Quick Start (for beginners)

1. Copy your tracking script from **Settings → External Tracking** in your account.

2. Paste it into your website’s **footer**, just before the closing `</body>` tag.

3. Make sure your form:

   - Uses a `<form>` tag

   - Has an email input: `<input type="email" name="email">`

   - Has a submit button: `<button type="submit">`

   - Is not inside an `<iframe>`
4. Test your form. Submissions will appear in **Forms → Submissions** in your app.


* * *

## Step 1: Get Your Tracking Script

In your account:

- Go to **Settings → External Tracking**

- Click **Copy Script**


Your script looks like this:

```whitespace-pre!  html
<script
  src="https://link.yourdomain.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
</script>

```

The `data-tracking-id` is unique to your account. Do not edit it.

* * *

## Step 2: Add the Script to Your Website

Paste the script into the **footer**, just before the closing `</body>` tag.

### Examples

**Custom HTML Site**

```whitespace-pre!  html
...
<!-- Paste tracking script here -->
<script
  src="https://link.yourdomain.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx">
</script>
</body>
</html>

```

**WordPress**

- Go to _Appearance → Theme Settings → Footer_ (if available), or

- Install a plugin like _Insert Headers and Footers_ and paste into the **Footer Scripts** box


**Wix / Squarespace / Webflow**

Go to _Site Settings → Custom Code → Footer Code Injection_ and paste the script.

* * *

## Step 3: Make Sure Your Form is Compatible

Your form must:

- Use a `<form>` tag

- Include an email input field:


```whitespace-pre!  html


```

- Include a submit button:


```whitespace-pre!  html


```

- Not be inside an `<iframe>`

- Not block submission with custom JavaScript (unless it re-triggers a standard submit)


### Example Minimal Form

```whitespace-pre!  html
<form action="#" method="post">
  <input type="email" name="email" placeholder="email@example.com" required />
  <button type="submit">Submit</button>
</form>

```

### Supported Form Types

- Standard HTML forms

- **Elementor forms** (when built using the native Elementor Form widget that outputs a real `<form>` tag)

- Formspree submissions


Once your tracking script is installed, compatible external form submissions will appear automatically under **Sites → Forms → Submissions** in your CRM. Each synced contact record includes the tag `external form: {form_name}` for identification and filtering.

### WordPress Compatibility Notes

> **Reminder:** The tracking script only captures external form submissions. It does _not_ record full contact activity or page analytics.

**Works with:**

- Plugins that output real `<form>` elements (e.g. WPForms, Contact Form 7, Gravity Forms)

- Standard form submits on HTML-based pages


**Does not work with:**

- Page builders or widgets that use `<div>` elements instead of `<form>`

- Forms embedded inside iframes or popups

- JavaScript-only submissions without a real form submit event


**How to check if your form is compatible:**

1. Right-click → **Inspect** your form.

2. Confirm there’s a `<form>` tag and an `<input type="email" name="email">`.

3. Ensure it’s not inside an `<iframe>`.


If not, the script will **not capture submissions**.

* * *

## Step 4: View Submissions

Once the script is installed and your form is compatible:

- Go to **Sites → Forms → Submissions**

- Use the filter **External: “Form Name”**

- Review and export submissions as needed


* * *

## Workflow Triggers

The External Tracking Script supports automation through workflow triggers.

**Available triggers**

- **Page View Trigger:** fires when a visitor views any page where the script is installed.

- **Form Submission Trigger:** fires when a supported external form is submitted.


**Filters and conditions**

Workflow triggers can be refined by:

- Domain

- Page Path

- External Form Name

- UTM parameters (Campaign, Source, Medium, Term, Content)


This allows precise targeting and automation based on visitor actions.

* * *

## Advanced Troubleshooting & Diagnostics

If submissions are not showing or tracking isn’t working, use these checks.

### 1\. Enable Debug Mode

Add `data-debug="true"` to your script:

```whitespace-pre!  html
<script
  src="https://link.yourdomain.com/js/external-tracking.js"
  data-tracking-id="tk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  data-debug="true">
</script>

```

HTML

Reload your page, open the console ( `Cmd/Ctrl + Option/Alt + J`), and look for `[LC Tracking]` logs such as:

- Tracker initialized successfully

- SessionId stored in cookie

- Event sent successfully: external\_script\_page\_view


If logs do not appear:

- Confirm the script is on the page

- Verify the `data-tracking-id` value

- Check for ad blockers or CSP errors


* * *

### 2\. Network & API Checks

In the browser **Network tab**, check:

- Page view requests succeed with `2xx` status

- No CORS errors

- Response shows success acknowledgement


* * *

### 3\. Cookies & Session

The script sets a cookie with a session ID.

- Look in **Application → Storage → Cookies**

- Confirm a session cookie is created

- If missing, check browser privacy settings or third-party iframe restrictions


* * *

### 4\. Common Issues

- **No console logs** → Add `data-debug="true"`, confirm script placement

- **CORS errors** → Verify endpoint and server CORS config

- **Form not tracked** → Ensure it uses `<form>`, has `email` input, and a submit button

- **Tracking ID errors** → Confirm `data-tracking-id` matches your account

- **Single Page Apps** → Initial load is tracked, but route changes may require manual hooks


* * *

### 5\. Quick Diagnostic Checklist

- Script tag has a valid `data-tracking-id`

- Debug mode enabled for testing

- Console shows `[LC Tracking]` logs

- Network requests succeed (2xx)

- Session cookie is present

- Forms meet structure requirements


* * *

### 6\. Example Setup With Extra Fields

```whitespace-pre!  html
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

HTML

## **Additional Platform-Specific Installation Guides**

### **Install the tracking code on a WordPress website**

- Copy the tracking code from your account.

- Log in to WordPress.

- Navigate to **Appearance → Editor**.

- Select your **Footer**.

- Paste the tracking code and select **Update File**.


* * *

### **Install the tracking code on a HubSpot site**

1. **Copy your tracking code** from your account.

2. **Log in to HubSpot.**

3. In the main navigation, go to **Settings → Website → Pages**.

4. Select the domain where you want to add the script.

5. Open the **Templates or Site Header/Body HTML** section.

6. Paste your tracking code **just before the closing `</body>` tag**.

7. Click **Save** and then **Publish Changes**.

8. Verify installation by loading a page and checking if page views are recorded in your CRM.


**Alternative method for HubSpot CMS (drag-and-drop pages):**

- Go to **Settings → Website → Pages → Templates**.

- Edit your **global template**.

- Paste the script into the **Footer HTML** section.

- Save and publish.


* * *

### **Install the tracking code on a Shopify site**

- Log in to Shopify admin.

- Go to **Online Store → Themes → Actions → Edit code**.

- Open `theme.liquid`.

- Paste the tracking code before `</body>`.

- Click **Save**.


* * *

### **Install the tracking code on a Drupal site**

1. Copy the tracking code.

2. Log in to Drupal admin.

3. Navigate to **Structure → Blocks → + Add Block**.

4. Paste the tracking code into **Block body**.

5. Click **Save block**.


* * *

### **Install the tracking code on a Magento site**

- Copy your tracking code.

- Follow Magento’s **Design User Guide** to install third-party JavaScript in the **Header HTML**.


* * *

### **Install the tracking code on a Wix site**

1. Copy the tracking code.

2. Go to **Settings → Advanced → Custom Code → + Add Custom Code**.

3. Paste the tracking code.

4. Set Name: _My Tracking Code_.

5. Choose **All Pages → Load code on each new page**.

6. Place in **Body - end**.

7. Click **Apply**.


For live chat or bots:

- Apply code to all pages, or

- Use **Chat widget SDK** to specify different chatflows per page with `.widget-refresh`.


* * *

### **Install the tracking code on a Joomla site**

- Option 1: Use a Joomla extension from the **Extension Directory**.

- Option 2:

  - Log in to Joomla as admin.

  - Go to **Extensions → Templates → Templates**.

  - Open `index.php`.

  - Paste tracking code before `</body>`.

  - Click **Save**.

* * *

### **Install the tracking code on a Squarespace site**

1. Copy your tracking code.

2. Log in to Squarespace.

3. Go to **Settings → Advanced → Code Injection**.

4. Paste into the **Header field**.

5. Click **Save**.


* * *

### **Install the tracking code using Google Tag Manager**

1. Copy your tracking code.

2. Log in to Google Tag Manager.

3. Go to **Tags → New → Tag Configuration → Custom HTML**.

4. Paste the tracking code.

5. Add a Trigger → **All Pages**.

6. Click **Save** and **Publish**.


* * *

## FAQs

**Q: Can this script track page views or user clicks?** A: The External Tracking Script tracks page views and form submissions on external websites.

It does not track clicks, scrolls, or other behavioral events.

**Q: Why aren’t my WordPress form submissions showing?**

A: Your WordPress plugin may not use a real `<form>` element. Only true HTML forms can be captured.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000006093-track-external-forms-with-the-tracking-script*  
*Generated on: 2025-10-28T16:27:49.121Z*
