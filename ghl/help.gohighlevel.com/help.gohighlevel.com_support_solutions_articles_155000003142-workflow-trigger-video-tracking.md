---
url: "https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking"
title: " Workflow Trigger - Video Tracking : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
4. [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [Workflows](https://help.gohighlevel.com/support/solutions/48000455132)
   - [Developer Resources](https://help.gohighlevel.com/support/solutions/folders/48000685391)
6. Workflow Trigger - Video Tracking

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

# Workflow Trigger - Video Tracking

Modified on: Tue, 8 Apr, 2025 at 4:20 PM

**TABLE OF CONTENTS**

- [Overview](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#Overview)
- [Trigger Name](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#Trigger-Name)
- [Trigger Description](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#Trigger-Description)
- [How to Configure](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#How-to-Configure)
- [Example](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking#Example)

## **Overview**

This trigger initiates workflows when a viewer reaches a specified percentage of a video. It enables marketers to respond dynamically to viewer engagement levels, allowing for personalized follow-ups and targeted messaging based on how much of the video has been watched.

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420580/original/sXpACIXtpvOcK4StzPtPvJD4jvfsndNrMQ.png?1724242480)

## **Trigger Name**

Video Tracking

## **Trigger Description**

Runs when a lead watches upto a specified percentage of the video

**Please note:**

The person watching the video should already be part of the CRM as contact for this trigger to work.

## **How to Configure**

Before you jump in to configure your trigger, we encourage you to go through this article - [Tracking Viewer Progress on a Funnel Hosted Video](https://help.gohighlevel.com/support/solutions/articles/48001227304-tracking-viewer-progress-on-a-funnel-hosted-video).

1. **Prepare Your Video**:

- Ensure the video is properly encoded for tracking.

- Disable the progress bar in the video settings to ensure accurate tracking.

- Set Up a Redirect for Unregistered Visitors: Create a blank page with a form that captures visitor information before they can watch the video. This is crucial for tracking new users who may not be in your system yet.


2. **Create a New Workflow**:

1. Navigate to the workflow builder.


3. **Add the Video Tracking Trigger**:

1. Select the Video Event Tracking Trigger from the list of available triggers.

2. Set the specific percentage (e.g., 25%, 50%, 75%, or 100%) that will trigger the workflow.


4. **Define Actions**:

1. Add actions to the workflow, such as sending follow-up emails or SMS messages to viewers based on their engagement level.


**The video tracking trigger has 3 primary filters.**

|     |     |     |
| --- | --- | --- |
| **Filter name** | **Description** | **Mandatory** |
| Funnel | The funnel in which the video is embedded | No |
| Video | The video for which you want to track the view percentage | No |
| Video Duration (%) | Set the specific percentage (e.g., 25%, 50%, 75%, or 100%) that will trigger the workflow. | No |

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155031420924/original/uj1zHUqJwq32Dk81JaEjx2FlcGfKQX0Qbg.png?1724242714)

## Example

Here are some examples of how you can use the Video Event Tracking Workflow Trigger in:

## Example 1: Webinar Follow-ups

You host a webinar that includes a pre-recorded video presentation. Set up the following workflow:

- **Trigger**: Activate when a viewer watches 50% of the video.
- **Action**: Send a personalized email thanking them for watching and offering additional resources related to the content they viewed.
- **Trigger**: Activate when a viewer watches 100% of the video.
- **Action**: Send a different follow-up email inviting them to schedule a consultation or offering a special discount.

This workflow allows you to nurture leads based on their engagement level, providing relevant content and offers to increase the likelihood of conversion.

## Example 2: Lead Scoring

Assign points to viewers based on the percentage of the video they watch. Use these points for lead scoring and prioritization:

- **Trigger**: Activate when a viewer watches 25% of the video.
- **Action**: Add 10 points to their lead score.
- **Trigger**: Activate when a viewer watches 50% of the video.
- **Action**: Add an additional 20 points to their lead score.
- **Trigger**: Activate when a viewer watches 75% of the video.
- **Action**: Add 30 more points to their lead score.

By assigning higher points to viewers who watch more of the video, you can identify and prioritize the most engaged leads for targeted follow-ups and sales outreach.

## Example 3: Abandoned Video Tracking

Set up a workflow to track viewers who abandon the video before completion:

- **Trigger**: Activate when a viewer watches less than 50% of the video.
- **Action**: Add them to a segment for "Abandoned Video Viewers."
- **Action**: Send a follow-up email with a link to the video, encouraging them to complete it.

This workflow allows you to identify and re-engage viewers who may have been interested in your content but didn't complete the video for some reason. By sending a targeted follow-up, you can increase the chances of them finishing the video and taking further action.These examples demonstrate the versatility of the Video Event Tracking Workflow Trigger. By setting up targeted workflows based on viewer engagement, you can enhance lead generation, nurturing, and overall marketing effectiveness.

**FAQs**

- The trigger in workflows will when a user closes or completes the video.
- If no Video tracking % is added then the trigger will fire when the contact closes the window or completes the video (irrespective of the % watched)
- If you want to fire the trigger when user has watched at least 20% of the video change the operator to "Greater than or Equal to" instead of "Equals to
- The workflows will get the data every time the user closes the video, so if the user revisits the page and fulfils all the requirements mentioned in the filter it will re-enter if Allow Re-entry is turned on

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

- [Workflow Trigger - Video Tracking](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking)
- [Workflow Trigger - Inbound Webhook](https://help.gohighlevel.com/support/solutions/articles/155000003147-workflow-trigger-inbound-webhook)
- [Workflow Trigger - Number Validation](https://help.gohighlevel.com/support/solutions/articles/155000003163-workflow-trigger-number-validation)
- [Interactive Voice Response (IVR) Guide - Triggers & Actions](https://help.gohighlevel.com/support/solutions/articles/155000001200-interactive-voice-response-ivr-guide-triggers-actions)

## Related Articles

- [Trigger Links - Overview](https://help.gohighlevel.com/support/solutions/articles/48000981404-trigger-links-overview)
- [Guide to Facebook & Instagram Comment Automation & AI](https://help.gohighlevel.com/support/solutions/articles/155000002055-guide-to-facebook-instagram-comment-automation-ai)
- [Webinar Video Analytics](https://help.gohighlevel.com/support/solutions/articles/155000006582-webinar-video-analytics)
- [Complete Guide to Creating Webinars!](https://help.gohighlevel.com/support/solutions/articles/155000006062-complete-guide-to-creating-webinars-)
- [Webinar Funnels](https://help.gohighlevel.com/support/solutions/articles/155000004125-webinar-funnels)
- [Tracking Viewer Progress on a Funnel Hosted Video](https://help.gohighlevel.com/support/solutions/articles/48001227304-tracking-viewer-progress-on-a-funnel-hosted-video)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000003142-workflow-trigger-video-tracking/hit)