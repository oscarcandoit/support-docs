---
url: "https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey"
title: " Setting Up ActiveProspect Consent Tracking On A HighLevel Form & Survey : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
4. [Other Integrations](https://help.gohighlevel.com/support/solutions/folders/48000677303)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Integrations](https://help.gohighlevel.com/support/solutions/48000449584)
   - [Other Integrations](https://help.gohighlevel.com/support/solutions/folders/48000677303)
6. Setting Up ActiveProspect Consent Tracking On A HighLevel...

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

# Setting Up ActiveProspect Consent Tracking On A HighLevel Form & Survey

Modified on: Tue, 24 Sep, 2024 at 3:38 AM

ActiveProspect - YouTube

[Photo image of HighLevel](https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g?embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

HighLevel

82.2K subscribers

[ActiveProspect](https://www.youtube.com/watch?v=lNEB3Calxl0)

HighLevel

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=lNEB3Calxl0&embeds_referring_euri=https%3A%2F%2Fhelp.gohighlevel.com%2F)

0:00

0:00 / 3:16
•Live

•

To set up ActiveProspect consent tracking on a HighLevel form:

1. Build your form as you normally would
2. Create a Custom Short Text Field called 'xxTrustedFormCertUrl' > drag the field into your form above the submit button
3. Save the form > Click 'Integrate Form' button > Click 'Link' tab > Copy form url and open in another Google Chrome tab (you will come back to this tab after step 4)
4. Drag an HTML field into the form below the button > select the HTML field > click 'Edit Script' button > copy/paste the Custom Script below (don't save yet)
5. Go back to the tab you opened in Step 3 > right-click the page and select 'Inspect' > choose the mouse pointer > click the xxTrustedFormCertUrl field > copy its ID
6. Go back to the form/Edit Script modal and replace FORMID in both instances with the ID you copied > Save
7. Copy the Custom CSS below > Open the Styles Tab > paste into the Custom CSS field > change the number in parenthesis to correspond with the position of the xxTrustedFormCertUrl field in your form.
8. Save form

**Custom CSS For Forms:**

```
.form-field-wrapper:nth-child(n) {
  display: none;
}
```

**Custom CSS For Surveys:**

```
.slide-no-SlideNumber .form-field-wrapper:nth-child(n) {
  display: none;
}
```

Note:

1. SlideNumber is a placeholder. It should be replaced with actual survey slide number.
2. n is a placeholder for field which customer wants to hide.
3. Please place xxTrustedFormCertUrl above all the hidden field in a slide/form.

**Example**:

If xxTrustedFormCertUrl field is on 2nd slide and 4th element

```
.slide-no-2 .form-field-wrapper:nth-child(4) {
  display: none;
}
```

**Custom Script:**

```html

```

HTML

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

- [Setting Up ActiveProspect Consent Tracking On A HighLevel Form & Survey](https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey)
- [Zoom Integration for Users' Calendar Bookings](https://help.gohighlevel.com/support/solutions/articles/48001179593-zoom-integration-for-users-calendar-bookings)
- [Google Integration going to This site can't be reached page "Check if there is a typo in highlevel-backend.appspot.com"](https://help.gohighlevel.com/support/solutions/articles/48001181602-google-integration-going-to-this-site-can-t-be-reached-page-check-if-there-is-a-typo-in-highlevel-ba)
- [How to set up appointment reminder workflow with Zoom location](https://help.gohighlevel.com/support/solutions/articles/48001207666-how-to-set-up-appointment-reminder-workflow-with-zoom-location)
- [Reserve With Google Webinar - Generate Bookings For Clients Right From Google!](https://help.gohighlevel.com/support/solutions/articles/48001215784-reserve-with-google-webinar-generate-bookings-for-clients-right-from-google-)
- [How to use WebinarKit's HighLevel Integration (Guest Tutorial)](https://help.gohighlevel.com/support/solutions/articles/48001225332-how-to-use-webinarkit-s-highlevel-integration-guest-tutorial-)

## Related Articles

- [Rating Element for Forms, Surveys & Quizzes](https://help.gohighlevel.com/support/solutions/articles/155000005509-rating-element-for-forms-surveys-quizzes)
- [Tracking External Forms with GoHighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel)
- [How to create a LinkedIn lead form in Ad Manager](https://help.gohighlevel.com/support/solutions/articles/155000006453-how-to-create-a-linkedin-lead-form-in-ad-manager)
- [How to Get Customer Consent or Track Legal Basis to Process Your Lead's or Customer's Personal Data](https://help.gohighlevel.com/support/solutions/articles/155000006325-how-to-get-customer-consent-or-track-legal-basis-to-process-your-lead-s-or-customer-s-personal-data)
- [Create Forms & Surveys Inside the Site Builder](https://help.gohighlevel.com/support/solutions/articles/155000006719-create-forms-surveys-inside-the-site-builder)
- [Forms and Surveys: "Other" Option](https://help.gohighlevel.com/support/solutions/articles/155000004712-forms-and-surveys-other-option)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001175529-setting-up-activeprospect-consent-tracking-on-a-highlevel-form-survey/hit)