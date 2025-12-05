---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour
category: articles
type: article
scraped: 2025-10-28T16:25:20.811Z
title:  Limitations of Recurring Timer Wait Time Behaviour : LeadConnector 
status_code: 200
---

#  Limitations of Recurring Timer Wait Time Behaviour : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Marketing Category](https://help.leadconnectorhq.com/support/solutions/48000454679) [Countdown Timer](https://help.leadconnectorhq.com/support/solutions/folders/155000001241)

## Limitations of Recurring Timer Wait Time Behaviour  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour\# "Print this Article")

Modified on: Tue, 1 Jul, 2025 at 11:51 AM

* * *

This guide explains how recurring countdown timers behave in both **email** campaigns and **funnels**, especially in relation to their **wait**, **active**, and **expired** states.

**TABLE OF CONTENTS**

- [What is a Recurring Timer?](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#What-is-a-Recurring-Timer?)
  - [When Should You Use a Recurring Timer?](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#When-Should-You-Use-a-Recurring-Timer?)
- [Email Behaviour](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Email-Behaviour)
  - [Timer States:](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Timer-States%3A)
  - [Behaviour Based on Timer State:](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Behaviour-Based-on-Timer-State%3A)
- [Funnel Behaviour](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Funnel-Behaviour)
  - [Case 1: Timer Becomes Expired While on Active Page](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Case-1%3A-Timer-Becomes-Expired-While-on-Active-Page)
  - [Case 2: Timer Enters Wait While User is on Active Page](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Case-2%3A-Timer-Enters-Wait-While-User-is-on-Active-Page)
- [Recap: Key Limitations](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Recap%3A-Key-Limitations)
- [Additional Tips](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour#Additional-Tips)

## What is a Recurring Timer?

A **Recurring Timer** is a countdown mechanism that resets based on a fixed recurring schedule (e.g., daily, weekly). Unlike one-time timers that expire permanently, recurring timers cycle through three states:

- **Wait** – Before the active countdown starts.

- **Active** – The countdown is visible and running.

- **Expired** – The countdown ends and redirects or hides content.


### When Should You Use a Recurring Timer?

Use a **recurring timer** when:

- You want to create **urgency on a regular basis** (e.g., “Offer ends in 2 hours every day”).

- You have **time-sensitive promotions** that reset daily, weekly, or monthly.

- You’re running **automated campaigns** that require consistent, predictable behavior (e.g., flash sales, countdown to daily webinars, or course availability).


> ? **Ideal for:** Evergreen funnels, automated sales sequences, limited-time daily offers, or recurring event promotions.

## Email Behaviour

### Timer States:

- **Wait:** The countdown has not yet begun.

- **Active:** The timer is counting down.

- **Expired:** The countdown has completed.


### Behaviour Based on Timer State:

| **Timer State** | **User Clicks on Email Link →** | **Redirected To** |
| --- | --- | --- |
| Wait | Dynamic Link Clicked | Expiry Page |
| Active | Dynamic Link Clicked | Active Page |
| Expired | Dynamic Link Clicked | Expiry Page |

> ⚠️ **Note:** In emails, users cannot access the Active Page if the timer is in Wait or Expired state. Only during the Active period will the user be redirected properly.

## Funnel Behaviour

Currently funnels have slightly different behaviour

### Case 1: Timer Becomes Expired While on Active Page

- **Behaviour:** The user will be **redirected automatically** to the **Expiry Page** once the timer expires.


### Case 2: Timer Enters Wait While User is on Active Page

- **Behaviour:** The user **remains on the Active Page**.

- **Optional:** Timer visibility during the wait state can be **disabled** using the “ **Hide Timer While in Wait State**” checkbox when setting up the timer.


> ✅ **Best Practice:** Enable the “Hide Timer in Wait State” option to avoid confusing users with a non-functional timer before activation.

## Recap: Key Limitations

- **Email:** Redirection strictly follows the timer state at the time of the click.

- **Funnels:** Users already on the page are affected by timer transitions in real-time, with controlled behavior during the wait period.


## Additional Tips

- Plan your timer start and expiration carefully to align with campaign timings.

- Always test funnel behaviour during all three timer states to ensure an expected behaviour with current limitations in funnels


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005477-limitations-of-recurring-timer-wait-time-behaviour*  
*Generated on: 2025-10-28T16:25:20.811Z*
