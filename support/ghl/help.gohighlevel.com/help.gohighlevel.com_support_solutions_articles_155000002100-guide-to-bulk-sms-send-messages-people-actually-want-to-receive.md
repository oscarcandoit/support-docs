---
url: "https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive"
title: " Guide To Bulk SMS: Send Messages People Actually Want To Receive : HighLevel Support Portal "
---

[Skip to main content](https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive#fw-main-content)

[![Freshworks Logo](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308683/logo/s7aCRjbTgZ5t0wA0EwvURVFjWacwx1uM_A.png)\\
HighLevel Support Portal](https://help.gohighlevel.com/)

- [Home](https://help.gohighlevel.com/support/home)
- [Knowledge base](https://help.gohighlevel.com/support/solutions)

- [Login](https://help.gohighlevel.com/support/login)
- [Sign up](https://help.gohighlevel.com/support/signup)

1. [Home](https://help.gohighlevel.com/support/home)
2. [Knowledge base](https://help.gohighlevel.com/support/solutions)
3. [University](https://help.gohighlevel.com/support/solutions/48000452413)
4. [Prospecting & Sales](https://help.gohighlevel.com/support/solutions/folders/155000000160)
5. [...](https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive#)   - [Knowledge base](https://help.gohighlevel.com/support/solutions)
   - [University](https://help.gohighlevel.com/support/solutions/48000452413)
   - [Prospecting & Sales](https://help.gohighlevel.com/support/solutions/folders/155000000160)
6. Guide To Bulk SMS: Send Messages People Actually Want To ...

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

# Guide To Bulk SMS: Send Messages People Actually Want To Receive

Modified on: Fri, 15 Mar, 2024 at 11:06 AM

## This guide will:

- Help you understand some of the rules that apply to SMS marketing (US and Canada).

- Maximize the impact of SMS for:

  - Client responses

  - Marketing ppt Ins

  - Appointment conversions

  - Closing sales

## Composing Your Message

### Compliance in your SMS body

- Seek consent from your text recipient before including them in your SMS campaign

- Always identify yourself and your business by name.

- If it’s the first time you’re messaging a contact, OR if it’s been 90 days or more since you last messaged them, be sure to add an unsubscribe clause at the very end of your message.

  - “Reply STOP to opt out.”

  - “If you’d like us to stop texting you, just reply STOP.”

  - If someone opts out of receiving future texts, be sure to remove them from your future SMS campaigns!

### Strategic Best Practices

- Greet each contact by using the first name custom value → {{contact.first\_name}}

- Use sparingly, no more than once per month

  - Respect people’s time and attention by only sending in specific time windows that are least likely to disturb personal time
- For measurable results, use a strong offer

  - Make your message clear and concise to avoid turning people off and increasing unsubscribes.

  - Consider offering something for free to maximize interest or responses

    - Minimal commitment now = maximum number of conversations that will build trust and belief throughout the sales process
- Keep messages short and exciting

  - Think about how your message will make the average contact feel

  - Avoid needless punctuation, specifically overuse of exclamation points, to increase reading speed

  - Avoid formal writing styles and match the casual tone of a typical text message conversation
- Spark conversations

  - Creating live conversations = a direct connection with a potential customer

    - It builds trust

    - Which leads to increased sales momentum

    - Which builds your reputation
  - Ask a direct question to prompt responses

  - Do not ask more than one question, as this can cause confusion

  - Do not overuse emojis

  - Avoid sending links

    - This can cause deliverability issues

    - It also neglects all the great benefits of chat conversations
- Only send out messages when you know you can respond in a timely manner

  - Contacts who respond right away and then never hear back will think your message was sent in bulk or spam

  - As such, contacts who get responses right away will be more likely to convert
- Be prepared for unsubscribes

  - You will always get some people responding STOP

  - You will always get some people to ask not to be texted anymore

  - Respect their wishes, mark them DND, and move on

### Bad Example

“Hello, this is Ashley from Bob’s Fitness ?? We’re the best gym in town! All our members are models! It’s ? $175/month ? to join and there’s an extra $150 new member fee ?… We have a lot of spots to fill so we hope you can afford it! We also have personal training, group classes, a 6 week challenge, nutrition plans, sauna, ice baths, an inner circle club, work-trade spots available, and many other add-ons!”

### Good Example

“Hi {{contact.first\_name}}, this is Ashley from Bob’s Fitness, we’re giving out a few 10-day passes and I wondered if you’d like one? If you’d like for us to stop texting you, reply STOP”

### Technical Setup and Execution

- Select the contacts you’d like to message. Need help filtering a list? Check out " [Getting Started with Smart Lists](https://help.gohighlevel.com/en/support/solutions/articles/48001062094)"

- Click the “Send SMS” button (picture of icon)

- Click “Ok, Proceed”

- Type your message

- Title the action for internal reference

- If you want to send the message to everyone at the same time immediately, leave the toggle on “Send all at once.”

  - This is good for 1-way announcements you do not expect to turn into conversations and want to send right away.
- If you want to send the message to everyone at the same time later, select “Send all at schedule time” and then set the send time in the “Start On” field.

  - This is good for 1-way announcements you do not expect to turn into conversations and want to send automatically at a later time
- If you want to slowly deliver the message to the list of contacts over time, select “Send in drip mode”

  - This is good for messages you expect to generate responses and conversations

  - Start On

    - The day and time when messages should start sending
  - Batch Quantity

    - The number of messages that sends each time the Repeat After condition is met
  - Repeat After

    - The amount of time to wait until sending out the next Batch Quantity
  - Send On

    - The days of the week the system will allow messages to send
  - Process Between Hours (optional)

    - The window, or timeframe within each day in which the system will send messages..
- Example of a Drip sending 100 messages per day spread out between 10:30am-11:00am each day.

  - Action: “Database Reactivation: Black Friday Weekend Promo”

  - Start On: November 29th

  - Batch Quantity: 10

  - Repeat After: 3 minutes

  - Send On: Mon, Tue, Wed, Thr, Fri, Sat, Sun

  - Process Between

    - Start From:

      - 10:30AM
    - End At

      - 11:00AM

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

- [How To Generate Leads From Local Chamber & BNI Meetups](https://help.gohighlevel.com/support/solutions/articles/155000001054-how-to-generate-leads-from-local-chamber-bni-meetups)
- [Guide To Bulk SMS: Send Messages People Actually Want To Receive](https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive)

## Related Articles

- [Getting Started - Launch an SMS Campaign](https://help.gohighlevel.com/support/solutions/articles/155000005065-getting-started-launch-an-sms-campaign)
- [WhatsApp Bulk Action](https://help.gohighlevel.com/support/solutions/articles/155000001790-whatsapp-bulk-action)
- [Getting Started - Setup Email, Phone, and SMS](https://help.gohighlevel.com/support/solutions/articles/155000005058-getting-started-setup-email-phone-and-sms)
- [Conversations Glitching? Here's What’s Going On?](https://help.gohighlevel.com/support/solutions/articles/48001184861-conversations-glitching-here-s-what-s-going-on-)
- [How to send Review Request via Whatsapp](https://help.gohighlevel.com/support/solutions/articles/155000004326-how-to-send-review-request-via-whatsapp)
- [LC - Phone Messaging Policy](https://help.gohighlevel.com/support/solutions/articles/48001213941-lc-phone-messaging-policy)

**X**

0 of 0 [Download image](https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive)

[Home](https://help.gohighlevel.com/support/home) [Knowledge base](https://help.gohighlevel.com/support/solutions)![Article views count](https://help.gohighlevel.com/support/solutions/articles/155000002100-guide-to-bulk-sms-send-messages-people-actually-want-to-receive/hit)