---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-
category: articles
type: article
scraped: 2025-10-28T16:25:44.706Z
title:  VoIP Deskphones (SIP endpoints) : LeadConnector 
status_code: 200
---

#  VoIP Deskphones (SIP endpoints) : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [Phone Category](https://help.leadconnectorhq.com/support/solutions/48000454678) [LeadConnector Phone](https://help.leadconnectorhq.com/support/solutions/folders/48000689487)

## VoIP Deskphones (SIP endpoints)  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-\# "Print this Article")

Modified on: Wed, 22 Oct, 2025 at 10:05 AM

* * *

**TABLE OF CONTENTS**

- [What is the VoIP Deskphone integration?](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#What-is-the-VoIP-Deskphone-integration?)
- [Who can set it up?](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#Who-can-set-it-up?)
- [Requirements & recommended deskphones](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#Requirements-&-recommended-deskphones)
- [Step-by-step setup](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#Step-by-step-setup)
- [Managing deskphones](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#Managing-deskphones)
- [FAQs](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#FAQs)
- [Troubleshooting](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-#Troubleshooting)

* * *

## **What is the VoIP Deskphone integration?**

The **VoIP Deskphone** feature lets you register any SIP-compatible hard-phone (deskphone) to your LeadConnector (LC) sub-account. All calls placed or received on the handset flow through LC, so you keep call tracking, recordings and automations in one place.

* * *

## **Who can set it up?**

- **Admins** – provisioning inside their own location

- **Other users** – read-only view; see a tooltip that says “Ask an admin to configure this.”


* * *

## **Requirements & recommended deskphones**

**Network & protocol**

- SIP over UDP, TCP or TLS

- Outbound ports 5060/5061 open for SIP

- UDP 10000-20000 open for RTP audio

- PoE or external power


**When buying new hardware**

- Look for the terms “SIP”, “PoE” and at least two programmable line keys

- Avoid phones locked to a single carrier or that require proprietary provisioning codes


**Popular models**

- Yealink T54W / T58W

- Poly VVX 450

- Grandstream GXP 2170

- Snom D785

- Cisco 7841


(Any open-SIP handset should work, these are just proven examples.)

* * *

## **Step-by-step setup**

1. Go to **Settings → Phone System → Advances Settings → VoIP Deskphone (SIP) → Get Started**.





[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965497/original/KCSUz248vMG-OQxLfpFKz9bBqqSCaLCcBg.png?1754407206)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965497/original/KCSUz248vMG-OQxLfpFKz9bBqqSCaLCcBg.png?1754407206)

2. Confirm or edit your SIP Domain.

   - A default suggestion appears as <LocationName>.sip.ashburn.twilio.com.

   - You can change it once before saving.





     [![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965599/original/Q5KrtxMJ5ID222yyhbGhPL9YdAq0T18QjQ.png?1754407291)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965599/original/Q5KrtxMJ5ID222yyhbGhPL9YdAq0T18QjQ.png?1754407291)
3. Setup an Extension or a Username (number or text) and a **password.** Keep these handy, you'll need it when setting up your phone.

4. Link a LC user (one deskphone per LC user). If needed, create the user first.

5. Click **Save**.

6. On your deskphone, paste those three values into the matching fields (often named _Registrar_, _Server_ or _Proxy_, plus _Username_ and _Password_). In case of issues with setup on the deskphone, Hard Reset of the hardware phone may help.

7. (Optional) **Outbound Test Call** – Dial the on-screen number; you’ll hear “This is a test call” three times if successful.





[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965694/original/t0shULddlPVX-g_KSf6KuIlg8R590IhKfQ.png?1754407351)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155050965694/original/t0shULddlPVX-g_KSf6KuIlg8R590IhKfQ.png?1754407351)

8. (Optional) **Inbound Test Call** – Click the button; your phone should ring. Answer and hang up to confirm audio.


If either test fails, click **Details** for error codes or choose **Contact Support**.

* * *

## **Managing Deskphones**

- **Reset a password:** Settings → Phone System → Advanced Settings → VoIP Deskphone → Manage Devices → _Edit icon_





_[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048565089/original/AlI46jtk_b_PFae__wQ8JvMwo2rKT1208w.jpeg?1750348014)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048565089/original/AlI46jtk_b_PFae__wQ8JvMwo2rKT1208w.jpeg?1750348014)_

- **Delete a deskphone:** Same menu → _Delete_ (immediately unregisters the handset)





[![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048565088/original/7U1kb_HqaKBtEbwZ2ezkjSuRwOAb48ELEQ.jpeg?1750348013)](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155048565088/original/7U1kb_HqaKBtEbwZ2ezkjSuRwOAb48ELEQ.jpeg?1750348013)

- **Add another phone:** Repeat the wizard (must be linked to a different LC user)

- **View call logs & recordings:** Conversations → All Calls


> When a linked LC user is deleted or transferred, the SIP credentials are automatically disabled. Outbound calls return “403 Forbidden”; inbound calls play an intercept message.

* * *

## **FAQs**

**Can I have multiple SIP domains?**

Not right now. Most businesses only need one.

**Will my existing Yealink / Poly / Cisco phone work?**

Yes, if it supports generic SIP registration. Factory-reset first, then follow the steps above.

**What happened to “Ring All”?**

The maximum members is now 6 (was 7). If you previously had 7, the 7th entry was removed automatically after enabling this feature.

**Can two deskphones point at the same LC user?**

No. Create an additional (hidden) user for each handset.

**Is there an extra charge?**

No. Calls made from a deskphone are billed the same as calls from the web or mobile app. Call Transfers from Deskphones do cost an extra $0.10 per transfer (SIP Refer)

**Why am I not receiving calls on my Deskphone when I receive a call on my assigned phone number?**

It may be because Deskphone device type is not enabled under your staff settings. Enable it under **Settings > My Staff > Edit Staff > Call & Voicemail Settings**

![](https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/155056606871/original/8-6LxE7A9PI_kfJOKH0l1NVqPs2OP2YKiA.png?1761145509)

**Why am I not receiving IVR calls on my Deskphone?**

IVR calls are currently not supported on Deskphones but we are working on supporting it.

* * *

## **Troubleshooting**

1. **401/403 Unauthorized** – verify username and password (case-sensitive).

2. **No audio** – make sure UDP 10000-20000 is open on your firewall.

3. **Phone rings but can’t answer** – check that RTP ports aren’t blocked by NAT or SIP ALG.

4. **Can’t save SIP domain** – the name is already taken; edit it or accept the suggested increment.

5. **Still stuck?** Click **Contact Support** with your SIP domain and handset model.


* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000005561-voip-deskphones-sip-endpoints-*  
*Generated on: 2025-10-28T16:25:44.706Z*
