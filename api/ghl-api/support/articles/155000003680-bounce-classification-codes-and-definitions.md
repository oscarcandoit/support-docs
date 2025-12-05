---
source: https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions
category: articles
type: article
scraped: 2025-10-28T16:13:32.947Z
title:  Bounce Classification Codes and Definitions : LeadConnector 
status_code: 200
---

#  Bounce Classification Codes and Definitions : LeadConnector 

Enter your search term here...

Search


[Solution home](https://help.leadconnectorhq.com/support/solutions) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/48000454677) [LeadConnector Email](https://help.leadconnectorhq.com/support/solutions/folders/48000687936)

## Bounce Classification Codes and Definitions  [Print](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions\# "Print this Article")

Modified on: Mon, 21 Oct, 2024 at 7:49 AM

* * *

This guide outlines the potential errors you may encounter when sending messages through our service. Each error corresponds to a specific SMTP response with a unique Category, Error Code and Status Code.

Below, you’ll find detailed explanations of these codes, including the causes of the issues and actionable tips to resolve them efficiently. Use this resource to quickly diagnose and address any delivery problems you might be facing.

**TABLE OF CONTENTS**

- [Blocked](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Blocked)
- [DMARC](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#DMARC)
- [Invalid address](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Invalid-address)
- [Mailbox](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Mailbox)
- [Mailbox Full](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Mailbox-Full)
- [Rate Limit](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Rate-Limit)
- [Recipient Error](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Recipient-Error)
- [Rejection](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Rejection)
- [Sender Reputation](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions#Sender-Reputation)

* * *

## **Blocked**

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Blocked | 554 | 5.2.3 | Your email was blocked because there's a policy or rule in place that's preventing the email from being delivered. This could be related to mailbox quotas, email size limits, or specific policies configured by the organization |

* * *

## **DMARC**

The message failed DMARC authentication because the "From" header doesn't align with the validated SPF/DKIM domains.

**Resolution Tips:**

- Ensure the "From" address matches the sending domain.
- Verify that both SPF and DKIM are correctly configured for your sending domain.

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| DMARC | 509 | 5.7.509 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.0.0 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.20 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.26 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.5 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.5 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.509 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.6 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.8 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | 5.7.9 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 550 | Missing | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 553 | - | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 554 | 5.0.0 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 554 | 5.7.5 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |
| DMARC | 555 | 5.7.5 | The message was rejected by recepients email provider because it did not pass the DMARC. Ensure that the "From" header domain matches or aligns with the SPF/DKIM-validated domains. |

* * *

## **Invalid address**

Indicates that you attempted to send a message to an address that does not exist. The contact could have provided a false address or made a typo in the address.

**Resolution Tips:**

Validate emails with [Email Validation](https://help.leadconnectorhq.com/en/support/solutions/articles/155000000623)

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Invalid address | 450 | 4.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 500 | 5.0.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 500 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 501 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 501 | 5.1.3 | The recipient's email address is invalid or does not exist. |
| Invalid address | 501 | 5.1.3 | The recipient's email address is invalid or does not exist. |
| Invalid address | 501 | 5.5.4 | The recipient's email address is invalid or does not exist. |
| Invalid address | 501 | 5.7.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 505 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 508 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 511 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 511 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 521 | 5.3.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 522 | 5.7.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 525 | 5.7.13 | The recipient's email address is invalid or does not exist. |
| Invalid address | 540 | 5.7.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 542 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.0.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.0.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.0.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.0.350 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.10 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.10 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.181 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.351 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.351 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.1.6 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.2.1 | The email account that you tried to reach is inactive. |
| Invalid address | 550 | 5.2.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.2.14 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.2.5 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.3.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.3.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.3.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.4.310 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.4.312 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.4.350 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.4.355 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.5.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.5.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.5.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.7.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.7.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.7.100 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.7.13 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | 5.8.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | - | The recipient's email address is either invalid or does not exist and is already on the bounce list. Please revalidate the email address and try again. |
| Invalid address | 550 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 550 | - | These errors are originating from the recipient's end due to a misconfiguration or an outage on their MX server. |
| Invalid address | 551 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 551 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 551 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 552 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.1.3 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.3.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.3.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.5.3 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.7.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 553 | 5.7.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.0.0 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.1.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.2.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.2.2 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.5.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.7.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | 5.7.7 | The recipient's email address is invalid or does not exist. |
| Invalid address | 554 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 556 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 572 | - | The recipient's email address is invalid or does not exist. |
| Invalid address | 577 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 585 | 5.1.1 | The recipient's email address is invalid or does not exist. |
| Invalid address | 605 | - | The recipient's email address is already on the bounce list. Please revalidate the email address and try again. |
| Invalid address | 612 | - | These errors are originating from the recipient's end due to a misconfiguration or an outage on their MX server. |

* * *

## **Mailbox**

Indicates that you attempted to send a message to an address that does not have a mailbox.

**Resolution Tips:**

Validate emails with [Email Validation](https://help.leadconnectorhq.com/en/support/solutions/articles/155000000623)

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Mailbox | 450 | 4.2.2 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 452 | - | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 498 | - | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 511 | - | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 516 | 5.1.6 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 522 | 5.2.2 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 4.2.2 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.0.350 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.2.0 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.2.2 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.4.6 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.5.0 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 550 | 5.5.1 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 552 | 5.1.1 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 552 | 5.2.1 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 552 | 5.5.2 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 552 | - | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 553 | 5.3.1 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |
| Mailbox | 554 | 5.1.1 | The recipient's domain has no mailbox and does not accept mail. Please send to valid email address. |

* * *

## **Mailbox Full**

A "Mailbox Full" bounce occurs when the recipient's inbox has reached its storage limit and cannot accept new messages. This is often a temporary issue, and once the recipient clears space or the mailbox size is increased, emails can be delivered.

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Mailbox Full | 452 | 4.1.1 | The recipient's mailbox is full and cannot accept new emails. |
| Mailbox Full | 452 | 4.2.2 | The recipient's mailbox is full and cannot accept new emails. |
| Mailbox Full | 550 | 5.2.2 | The recipient's mailbox is full and cannot accept new emails. |
| Mailbox Full | 552 | 5.2.2 | The recipient's mailbox is full and cannot accept new emails. |
| Mailbox Full | 552 | 5.2.2 | The recipient's mailbox is full and cannot accept new emails. |
| Mailbox Full | 552 | - | The recipient's mailbox is full and cannot accept new emails. |

* * *

## **Rate Limit**

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Rate Limit | 221 | - | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |
| Rate Limit | 550 | 4.2.1 | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |
| Rate Limit | 550 | 5.2.1 | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |
| Rate Limit | 550 | 5.2.122 | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |
| Rate Limit | 554 | 5.2.121 | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |
| Rate Limit | 554 | 5.2.122 | The recipient's server has denied your email. You’re sending mail to is getting too many emails too fast. Please contact the recipient using an alternative method. |

* * *

## **Recipient Error**

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Recipient Error | 450 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 502 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 503 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 510 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 521 | 5.3.0 | Cloudflare’s email routing service indicates that the message encountered an issue related to Cloudflare’s email routing or processing. |
| Recipient Error | 530 | 5.3.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 530 | 5.7.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 530 | 5.7.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 530 | 5.7.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 530 | 5.7.57 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 530 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 535 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 541 | 5.4.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 4.4.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 4.4.2 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 4.4.7 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.1.3 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.1.9 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.3.5 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.103 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.108 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.142 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.300 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.315 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.316 | The mail server was unable to deliver the message after repeated attempts. The message eventually "expired" after exceeding the time limit set for retries. This usually happens when the recipient’s server refuses the connection or is unreachable for an extended period. |
| Recipient Error | 550 | 5.4.317 | The mail server was unable to deliver the message after repeated attempts. The message eventually "expired" after exceeding the time limit set for retries. This usually happens when the recipient’s server refuses the connection or is unreachable for an extended period. |
| Recipient Error | 550 | 5.4.4 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.4.7 | The email server has been trying to deliver the message for an extended period but has not been able to do so within the allowable time limit. The email has now been permanently rejected. |
| Recipient Error | 550 | 5.5.5 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.105 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.124 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.128 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.129 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.133 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.134 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.136 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.193 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.230 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.367 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.51 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.520 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.54 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.64 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.703 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.705 | The recipient's tenant in Microsoft 365 (or Office 365) has exceeded a specific limit or threshold, leading to the rejection of further email deliveries. This threshold could relate to various factors, such as the number of messages sent, the volume of inbound messages, or security thresholds based on suspicious activity. |
| Recipient Error | 550 | 5.7.900 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.902 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.929 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.987 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.7.999 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 550 | 5.8.2 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 551 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 552 | 5.7.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 553 | 5.0.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 553 | 5.1.8 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 4.3.5 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.1.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.1.2 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.2.0 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.4.6 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.5.4 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.7.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 554 | 5.7.105 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 555 | 5.7.1 | The email platform you are trying to use is not supported for communication with Pixieset's systems. This error suggests that certain types of emails or configurations (e.g., unsupported email clients or formats) are not permitted by Pixieset's mail system. |
| Recipient Error | 556 | 5.7.1 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 556 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 571 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 577 | 5.7.7 | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 579 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |
| Recipient Error | 701 | - | The recipient's server has denied your email. Communication outside their domain has been restricted. Please contact the recipient using an alternative method. |

* * *

## **Rejection**

|     |     |     |     |
| --- | --- | --- | --- |
| Category | Code | Enhanced Code | Definition |
| Rejection | 450 | 4.1.8 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 501 | 5.1.0 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 501 | 5.1.7 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 501 | 5.1.8 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 501 | 5.2.0 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 501 | NA | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 533 | 5.7.1 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.1.0 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.1.0 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.1.7 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.1.8 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.2.3 | The email message is too large for the recipient, exceeding their size limit. |
| Rejection | 550 | 5.4.0 | The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers. |
| Rejection | 550 | 5.4.12 | The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers. |
| Rejection | 550 | 5.4.14 | The email has been bounced back due to the email message exceeding the maximum number of allowed hops (transfers between mail servers). This usually happens when there is a mail loop or when the message has passed through too many servers. |
| Rejection | 550 | 5.4.6 | Your email was blocked by recepients email provider because mail loop detected. |
| Rejection | 550 | 5.5.2 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.13 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.21 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.23 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.23 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.23 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.24 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.24 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.26 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.27 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.368 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 550 | 5.7.57 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 553 | 5.1.8 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 554 | 5.1.8 | These errors indicate that the sending domain does not have valid DNS records. To resolve these issues, please ensure that the sending domain is verified and that the necessary DNS records are added with your DNS provider. [Follow these instructions to resolve this issue.](https://help.leadconnectorhq.com/en/support/solutions/articles/155000002223) |
| Rejection | 554 | NA | Possible reasons: the right of the @ in the MAIL FROM does not appear to be valid or poor reputation of a sending domain. |

* * *

## **Sender Reputation**

### **How to Fix: Email Blocked for Potential Spam/Malicious Activity**

#### 1\. **Check IP and Domain Blacklists**

- Use tools like: Blacklist Check
- If listed, follow the **delisting procedure** provided by the blacklist service.

#### 2\. **Ensure Proper DNS Configuration**

- **SPF Record**:
- **DKIM (DomainKeys Identified Mail)**
- **DMARC (Domain-based Message Authentication, Reporting, and Conformance**

**Test DNS Records:**

- MXToolbox for SPF/DKIM/DMARC record validation.

#### 3\. **Monitor and Improve Email Reputation**

- **Microsoft SNDS**: View the reputation of your IPs with Microsoft (Outlook, Hotmail).
  - Check at [SNDS](https://help.leadconnectorhq.com/en/support/solutions/articles/155000003679)
- **Google Postmaster Tools**: Monitor how Gmail treats your emails.
  - Check at [Postmaster Tools](https://help.leadconnectorhq.com/en/support/solutions/articles/155000003820)

#### 4\. **Send Smaller Email Batches to Build Reputation**

- Avoid sending a large volume of emails from a new or cold IP/domain. Start with a **low volume** and gradually increase to build trust.

#### 5\. **Clean and Segment Email Lists**

- Remove inactive or invalid addresses to reduce bounces.
- Use **[Email Validation tools](https://help.leadconnectorhq.com/en/support/solutions/articles/155000000623)** to clean your lists before sending campaigns.
- Monitor complaints or spam reports to remove problematic recipients.

#### 7\. **Check Email Content and Follow Best Practices**

- Avoid **spammy subject lines** (e.g., "Congratulations!!!" or "Act Now!").
- Use a healthy **image-to-text ratio** (don't send only images).
- Ensure your **links are safe** and not blacklisted.
- Include an **unsubscribe link** in marketing emails to comply with anti-spam regulations.

* * *

Did you find it helpful?
Yes
No

Send feedback

Sorry we couldn't be helpful. Help us improve this article with your feedback.

![Article views count](https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions/hit)

---

*Scraped from GoHighLevel Support: https://help.leadconnectorhq.com/support/solutions/articles/155000003680-bounce-classification-codes-and-definitions*  
*Generated on: 2025-10-28T16:13:32.947Z*
