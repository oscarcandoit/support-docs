---
url: "https://help.gohighlevel.com/support/solutions/articles/155000005722"
title: " URL Parameters in Websites and Funnels : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000005722#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
4. [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000005722#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Sites](https://help.gohighlevel.com/support/solutions/48000449581)
   - [Funnels and Websites](https://help.gohighlevel.com/support/solutions/folders/48000666011)
6. URL Parameters in Websites and Funnels

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

# URL Parameters in Websites and Funnels

Modified on: Thu, 10 Jul, 2025 at 2:20 PM

HighLevel Websites and Funnel pages allow you to use {{keywords}} in the page which get replaced with custom content when the page is loaded. That way each individual viewer can see unique content relevant to them personally, like their name.

* * *

**TABLE OF CONTENTS**

- [What Are URL Parameters?](https://help.gohighlevel.com/support/solutions/articles/155000005722#What-Are-URL-Parameters?)
  - [Merge Fields in Pages](https://help.gohighlevel.com/support/solutions/articles/155000005722#Merge-Fields-in-Pages)
  - [URL Parameters In Pages](https://help.gohighlevel.com/support/solutions/articles/155000005722#URL-Parameters-In-Pages)
  - [URL Parameters in Links](https://help.gohighlevel.com/support/solutions/articles/155000005722#URL-Parameters-in-Links)

* * *

# **What Are URL Parameters?**

The URL is the address of a webpage like https://google.com or https://help.gohighlevel.com

Parameters are key=value pairs added to the end of the URL like https://google.com **?key=value&key2=value2**

The address is used to find the webpage and the parameters can then be passed into the webpage for it to do something with.

```
Let's explain URL parameters, UTM parameters, and merge fields.

URL parameters can be anything like lorem=ipsum. They are often used to navigate to a part of the page or display custom content.

UTM parameters are a type of URL parameter that use industry-standard marketing keywords like utm_source=google or utm_medium=email. These provide valuable tracking information and are used to optimize SEO and marketing campaigns. They are not displayed on the page.

Merge fields are used throughout HighLevel to pull in dynamic data. The format inserted into an email or a website, for example, is {{contact.email}}. These are static tags that HighLevel searches for and replaces with the most current value of that tag. So the final version of the email, website, etc has the dynamic content instead of the static tag.

Merge fields and URL parameters are used the same way. In your website or funnel you use the format {{keyword}} and HighLevel finds the best match. If it matches a merge field, HighLevel will pull data from the database. If it matches a URL parameter, then the string in the URL will be pulled in.
```

* * *

## **Merge Fields in Pages**

Many templates already include merge fields like the below example:

- {{location.full\_address}} will be replaced by the subaccount's business full address from the database (1234 Place St, State 56789).

- {{location.phone}} will be replaced by the subaccount's business phone from the database (987-654-3210).

- {{location.name}} will be replaced by the subaccount's business name from the database (YoYoYoga).

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681440/original/41J7kP-cAy9uhKU2R7w4AhClYR-FIUNcrA.png?1752172549)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681565/original/a9C-HyCBgPdmQjc18gXGtD52-iwHtrcFTA.png?1752172841)

* * *

## **URL Parameters In Pages**

You can manually create URL parameters and use them the same way merge fields are used. It's easy to test URL parameters by loading the page preview and inserting them into the URL manually.

In this example we changed "Welcome to {{location.name}}" to "Hi {{first\_name}}, Welcome to {{location.name}}"

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049681975/original/glc0GU7NRCZbO3LUAg4h2491fuvcLcjMIA.png?1752173728)

When we load the page preview (make sure to save the page) we see the "Hi ," part but not a name. That's because we haven't inserted the URL parameter into the URL yet.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682058/original/YgL0hkZGOywUk1fFTT9FtebP4YhJa-t4lA.png?1752173912)

After we manually edit the URL in the URL bar at the top of the browser by adding "?first\_name=Yolonda" and hit enter we see the page pick up that parameter and display it.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682135/original/Q4NxkQP1-e8_nibhHi6HlPiMllOILh3Nhg.png?1752174041)

* * *

## **URL Parameters in Links**

After your page has URL parameters in it, you want to make sure to include URL parameters in the links to that page. For example, in an email, you can include the same URL you just edited manually and it will work the same way.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682248/original/5x8enCoIplmaIJXoisn3fXZBn-tq_uw4QQ.png?1752174324)

However, you don't want to hard code a value that is supposed to be dynamic. In the URL you can insert a merge field so that each contact's name is merged into the URL when the email is created.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682397/original/bJ7N1AtP_UjSTkYwapHo5TTTEf5SPH4HSg.png?1752174563)

If you want to use this same pattern in several different places you can make the URL itself dynamic by putting it into a custom value and then pulling the custom value into the email (or wherever).

When you nest dynamic content the details vary depending on where you put each piece of information.

- If you put "https://app.gohighlevel.com/v2/preview/Gqzf1j5aVuAsZbEQEo79" into a custom value like "yoga\_page" then you need to build the URL in the email editor like this: {{ custom\_values.yoga\_page }} **?first\_name=**{{contact.first\_name}}

- If you put the entire URL with the parameter and the merge field into the custom value like this: "https://app.gohighlevel.com/v2/preview/Gqzf1j5aVuAsZbEQEo79?first\_name={{contact.first\_name}}" then you don't need to build the URL, just insert the name of that merge field like {{yoga\_page\_with\_params}}.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682472/original/Z235jPgWz9S4fxC1Sk18w7zce7FE0a6NRg.png?1752174749)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682499/original/LPLbRAJQTuod9wGJuYba4_G76tx9IyqRzQ.png?1752174843)

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155049682543/original/zYX0Ip_W3--ciCbDxbDNH9FHTjEcSe7k1g.png?1752174949)

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

- [Two-Step Order Form (Step 2: Adding An Up-Sell Product)](https://help.gohighlevel.com/support/solutions/articles/48000980306-two-step-order-form-step-2-adding-an-up-sell-product-)
- [Two-Step Order Form (Step 1)](https://help.gohighlevel.com/support/solutions/articles/48000980307-two-step-order-form-step-1-)
- [Style the Funnel](https://help.gohighlevel.com/support/solutions/articles/48000980309-style-the-funnel)
- [Desktop View VS Mobile View (Funnels)](https://help.gohighlevel.com/support/solutions/articles/48000980310-desktop-view-vs-mobile-view-funnels-)
- [Tracking Scripts/Pixel Code](https://help.gohighlevel.com/support/solutions/articles/48000980311-tracking-scripts-pixel-code)
- [SEO Meta Data](https://help.gohighlevel.com/support/solutions/articles/48000980312-seo-meta-data)

## Related Articles

- [Dynamic Keyword Insertion Using URL Parameters (Guest Tutorial)](https://help.gohighlevel.com/support/solutions/articles/48001172004-dynamic-keyword-insertion-using-url-parameters-guest-tutorial-)
- [Custom Values not working on landing page? \| Using URL Parameters in Funnels](https://help.gohighlevel.com/support/solutions/articles/48001158436-custom-values-not-working-on-landing-page-using-url-parameters-in-funnels)
- [Page View Triggers for Funnels and Websites](https://help.gohighlevel.com/support/solutions/articles/155000002027-page-view-triggers-for-funnels-and-websites)
- [How to Create a Blog?](https://help.gohighlevel.com/support/solutions/articles/155000002448-how-to-create-a-blog-)
- [How to move from Old Blog to New Blog?](https://help.gohighlevel.com/support/solutions/articles/155000002447-how-to-move-from-old-blog-to-new-blog-)
- [Template Library Public Access](https://help.gohighlevel.com/support/solutions/articles/155000006678-template-library-public-access)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000005722)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000005722-url-parameters-in-websites-and-funnels/hit)