---
url: "https://help.gohighlevel.com/support/solutions/articles/48001219356"
title: " How to set up Google Ad Precautionary Tracking Script : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/48001219356#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
4. [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
5. [...](https://help.gohighlevel.com/support/solutions/articles/48001219356#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Reporting](https://help.gohighlevel.com/support/solutions/48000451278)
   - [Tracking & Attribution](https://help.gohighlevel.com/support/solutions/folders/48000672285)
6. How to set up Google Ad Precautionary Tracking Script

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

# How to set up Google Ad Precautionary Tracking Script

Modified on: Wed, 14 Sep, 2022 at 11:55 AM

**Covered in this article:**

[**How to set up Google Ad Precautionary Tracking Script**](https://help.gohighlevel.com/support/solutions/articles/48001219356#How-to-set-up-Google-Ad-Precautionary-Tracking-Script)

[**Step 1:** Visit your Google Ad account](https://help.gohighlevel.com/support/solutions/articles/48001219356#Step-1%3A%C2%A0Visit-your-Google-Ad-account)

[**Step 2:** Click on Tools and Settings > Bulk Actions > Scripts (See image below)](https://help.gohighlevel.com/support/solutions/articles/48001219356#Step-2%3A-Click-on-Tools-and-Settings-%3E-Bulk-Actions-%3E-Scripts-(See-image-below)%C2%A0)

[**Step 3:** Next, we need to remove the predefined code and add this script:](https://help.gohighlevel.com/support/solutions/articles/48001219356#Step-3%3A%C2%A0Next,-we-need-to-remove-the-predefined-code-and-add-this-script%3A)

[**Step 4:** After closing, we need to change the name of the script and change the frequency from the list to the Hourly view.](https://help.gohighlevel.com/support/solutions/articles/48001219356#Step-4%3A%C2%A0After-closing,-we-need-to-change-the-name-of-the-script-and-change-the-frequency-from-the-list-to-the-Hourly-view.)

[**Frequently Asked Questions**](https://help.gohighlevel.com/support/solutions/articles/48001219356#Frequently-Asked-Questions)

- [If I have another script, will it affect it?](https://help.gohighlevel.com/support/solutions/articles/48001219356#If-I-have-another-script,-will-it-affect-it?)
- [Why do I need to authorize it?](https://help.gohighlevel.com/support/solutions/articles/48001219356#Why-do-I-need-to-authorize-it?)

* * *

## **How to set up Google Ad Precautionary Tracking Script**

The script is a simple example of how you would set up the Google AdPrecautionary tracking code.

#### The script acts as a fail-safe if the UTM template fails in capturing the attribution data.

It will track all clicks on a particular link and send it to Google Analytics. The only thing that needs to be changed in this script is the URL for the tracking page, which should match the one used by your website.

* * *

## **Step 1:** Visit your Google Ad account

## **Step 2:** Click on Tools and Settings > Bulk Actions > Scripts **(See image below)**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48241977655/original/vEEGwa2QwMlESew_jEuLDUxkpD7wzoHZ3w.png?1659117941)

**Please Note:**

```
If you are not able to find it, be sure to move to advanced view to see the tools and setting option.
```

* * *

## **Step 3:** Next, we need to remove the predefined code and add this script:

```
function main() {
    var TrackingTemplate = "{lpurl}?utm_source=adwords&utm_medium={AdName}&utm_campaign={CampaignName}&utm_content={AdGroupName}&utm_keyword={keyword}&utm_matchtype={matchtype}&campaign_id={campaignid}&ad_group_id={adgroupid}&ad_id={creative}";

    var _CAMPAIGN_CONTAINS = "";
    var _ADGROUP_CONTAINS = "";
    var STATUS = "ENABLED";

    if (TrackingTemplate.search(/{AdGroupName}|{CampaignName}|{AdName}/g) == -1) {
        Logger.log("Enter at least one of the {CampaignName} or {AdGroupName} or {AdName} parameter in the tracking template");
        return
    }

    if (TrackingTemplate.search("{AdGroupName}") > 0) {
        var adgroupIterator = {
            hasNext: function() {
                return false
            }
        }
        if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS == "") {
            adgroupIterator = AdsApp.adGroups().withCondition("Status = " +  STATUS).get();
        } else if (_ADGROUP_CONTAINS == "" && _CAMPAIGN_CONTAINS !== "") {
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Status = " + STATUS).get();
        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS !== "") {
            adgroupIterator = AdsApp.adGroups().withCondition("CampaignName contains '" + _CAMPAIGN_CONTAINS + "'").withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();
        } else if (_ADGROUP_CONTAINS !== "" && _CAMPAIGN_CONTAINS == "") {
            adgroupIterator = AdsApp.adGroups().withCondition("Name contains '" + _ADGROUP_CONTAINS + "'").withCondition("Status = " + STATUS).get();
        }

        if (!adgroupIterator.hasNext()) {
            Logger.log("No Campaigns/Adgroups matched with this condition");
            return
        }
        while (adgroupIterator.hasNext()) {
            var adgroup = adgroupIterator.next();
            var adgrouptemplate = TrackingTemplate.replace(/{AdGroupName}/g, adgroup.getName().replace(/\s/g, '%20'))
            if (TrackingTemplate.search("{CampaignName}") > 0) {
                adgrouptemplate = adgrouptemplate.replace(/{CampaignName}/g, adgroup.getCampaign().getName().replace(/\s/g, '%20'))
            }

            if (TrackingTemplate.search("{AdName}") > 0) {
                var adsIterator = adgroup.ads().get();
                while (adsIterator.hasNext()) {
                  var ad = adsIterator.next();
                  var adType = ad.getType();
                  var headline = "";

                  if (ad.getHeadline()) {
                    headline = ad.getHeadline();
                  } else if(ad.isType().expandedTextAd()) {
                    headline = ad.asType().expandedTextAd().getHeadlinePart1();
                  } else if(ad.isType().gmailImageAd()) {
                    headline = ad.asType().gmailImageAd().getName();
                  } else if(ad.isType().gmailMultiProductAd()) {
                    headline = ad.asType().gmailMultiProductAd().getHeadline();
                  } else if(ad.isType().gmailSinglePromotionAd()) {
                    headline = ad.asType().gmailSinglePromotionAd().getHeadline();
                  } else if(ad.isType().html5Ad()) {
                    headline = ad.asType().html5Ad().getName();
                  } else if(ad.isType().imageAd()) {
                    headline = ad.asType().imageAd().getName();
                  } else if(ad.isType().responsiveDisplayAd()) {
                    headline = ad.asType().responsiveDisplayAd().getShortHeadline();
                  } else if(ad.isType().responsiveSearchAd()) {
                    var headlines = ad.asType().responsiveSearchAd().getHeadlines();
                    if (headlines && headlines[0].text) {
                      headline = headlines[0].text;
                    }
                  }

                  Logger.log("Headline text : " + headline);

                  if (headline) {
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, headline.replace(/\s/g, '%20'))
                  } else {
                    adgrouptemplate = adgrouptemplate.replace(/{AdName}/g, ad.getId())
                  }
                }
            }
            adgroup.urls().setTrackingTemplate(adgrouptemplate);
            Logger.log(adgroup.getCampaign().getName() + " => " + adgroup.getName() + " => " + adgrouptemplate)
        }
    }
}
```

## **Step 4:** After closing, we need to change the name of the script and change the **frequency** from the list to the **H** **ourly** view.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48248384457/original/eWel0Kfb1IBQoxSSLIJ2-oWLVw2oYZZ-_g.png?1661957147)

* * *

# **Frequently Asked Questions**

### **If I have another script, will it affect it?**

Yes, Scripts can override as it is affecting UTM parameters.

### **Why do I need to authorize it?**

Authorization is needed for the script as it gets implemented on Google Ad Account. It is necessary to check the preview before running it, it should show the majority of campaigns as successful with the landing page found.

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

- [Understanding Attribution Source (Ad Reporting)](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-source-ad-reporting-)
- [Understanding Google Ad Reporting Terminology](https://help.gohighlevel.com/support/solutions/articles/48001219241-understanding-google-ad-reporting-terminology)
- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [How to set up Google Ad Precautionary Tracking Script](https://help.gohighlevel.com/support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script)
- [Troubleshoot Guide For Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219996-troubleshoot-guide-for-google-ad-reporting)
- [How to record Pageviews into Google Analytics for Funnels/Websites (GA4)](https://help.gohighlevel.com/support/solutions/articles/48001219725-how-to-record-pageviews-into-google-analytics-for-funnels-websites-ga4-)

## Related Articles

- [How to set up Google Ad Reporting](https://help.gohighlevel.com/support/solutions/articles/48001219312-how-to-set-up-google-ad-reporting)
- [Reporting FAQs](https://help.gohighlevel.com/support/solutions/articles/155000002087-reporting-faqs)
- [Track Chat Widget Activity Using Google Analytics 4 (GA4)](https://help.gohighlevel.com/support/solutions/articles/155000002178-track-chat-widget-activity-using-google-analytics-4-ga4-)
- [Tracking External Forms with GoHighLevel](https://help.gohighlevel.com/support/solutions/articles/155000006092-tracking-external-forms-with-gohighlevel)
- [Workflow Action - Add To Google AdWords](https://help.gohighlevel.com/support/solutions/articles/155000003368-workflow-action-add-to-google-adwords)
- [How to set up Google Ad Conversion Actions](https://help.gohighlevel.com/support/solutions/articles/48001220947-how-to-set-up-google-ad-conversion-actions)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/48001219356)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/48001219356-how-to-set-up-google-ad-precautionary-tracking-script/hit)