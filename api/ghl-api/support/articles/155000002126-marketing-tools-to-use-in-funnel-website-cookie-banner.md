---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner
category: articles
type: article
scraped: 2025-10-28T16:08:01.303Z
title:  Marketing Tools to use in Funnel/Website - Cookie Banner : LeadConnector 
status_code: 200
---

#  Marketing Tools to use in Funnel/Website - Cookie Banner : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Funnels & Websites Category](https://help.leadconnectorhq.com/support/solutions/48000454554) [Funnels & Websites Builder](https://help.leadconnectorhq.com/support/solutions/folders/155000000290)

## Marketing Tools to use in Funnel/Website - Cookie Banner  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner\# "Print this Article")

Modified on: Wed, 5 Mar, 2025 at 8:40 AM

* * *

If you plan to use any of the following analytics tools, please refer to the codes provided in the document for proper setup.

**TABLE OF CONTENTS**

- [Important Note](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner#Important-Note)

- [Facebook pixel](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner#Facebook-pixel)
- [Google Analytics](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner#Google-Analytics)
- [Google Tag Manager](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner#Google-Tag-Manager)

⚠️

### **Important Note**

The `<noscript>` tags **must be removed** because the LeadConnector cookie banner is a JavaScript-based solution. `<noscript>` is designed for browsers that do not support JavaScript, and including it may unintentionally set cookies without user consent.

### **Integrating Marketing Tools with Cookie Consent**

When integrating marketing tools with the cookie consent banner, you can check which cookie categories users have consented to. Follow the provided implementation guide for popular marketing tools.

#### **Implementation Note:**

The code below should replace your existing **Meta Pixel, Google Tag Manager (GTM), or Google Analytics (GA)** tracking codes. Insert it in the **page header code** or **head tracking code** settings for funnels, websites, or webinars. This template ensures proper integration with the cookie consent banner.

## **Facebook pixel**

```  javascript
<script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('consent', 'revoke');
    fbq('init', '{your-pixel-id-goes-here}');
    fbq('track', 'PageView');
    window.addEventListener('LCCookieConsentDoneFB',function(cookieConsent){
    fbq('consent', cookieConsent.detail.fb)},!1)
</script>
```

JavaScript

## **Google Analytics**

```  javascript
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.addEventListener(
    "LCCookieConsentDoneGTag",
    function (cookieConsent) {
      if (cookieConsent.detail.gtag === 'grant'){
        gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
      }
    },
    !1
  );
</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
<script>
  gtag("js", new Date());
  gtag("config", "TAG_ID");
</script>
```

JavaScript

## **Google Tag Manager**

```  javascript
<!-- Google Tag Manager -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  window.addEventListener(
    "LCCookieConsentDoneGTM",
    function (cookieConsent) {
      if (cookieConsent.detail.gtm === 'grant'){
        gtag("consent", "update", {
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
        });
      }
    },
    !1
  );
</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

JavaScript

### Reading Cookie Categories    The below code is optional if you wish to read consent or categories user has accepted for other custom code or third party javascript

```  javascript
// Helper function to get consented categories
function getConsentedCategories() {
  const categoriesCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookie-categories='));

  if (categoriesCookie) {
    // Convert cookie value to array
    return categoriesCookie.split('=')[1].split(',');
  }
  return [];
}

// Helper function to check if category is allowed
function isCategoryAllowed(category) {
  const categories = getConsentedCategories();
  return categories.includes(category);
}

// Helper function to get cookie config
function getCookieConfig() {
  const cookieConfig = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookie-config='));

  if (cookieConfig) {
    return cookieConfig.split('=')[1]; // Returns: all, essential, or custom
  }
  return undefined; // Return undefined if user hasn't made a choice yet
}
```

JavaScript

### Important Notes:

1. The cookie categories are stored in the cookie-categories cookie

2. Categories are comma-separated (e.g., "essential,advertising,analytics")

3. Always check for initial consent when loading your marketing tools

4. Listen for consent change events to update tool settings

5. Remove any <noscript> tags as they may bypass consent checks


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000002126-marketing-tools-to-use-in-funnel-website-cookie-banner*  
*Generated on: 2025-10-28T16:08:01.303Z*
