---
title: "sms_sent"
source: "https://docs.virustotal.com/reference/sms"
scraped_at: "2026-02-08T06:35:48.337Z"
---

**`sms_sent` contains a list of sent SMSs during the execution of a given file.**

It is a list, every item on the list containing the following fields:

- `body`<*string*> message text itself.

- `destination` <*string*> telephone number to which the SMS is sent.

Sent SMSsExample
```
`{
 "data": {
 "attributes": {
 "sms_sent": [
 {
 "body": "<string>",
 "destination": "<string>"
 }
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "sms_sent": [
 {
 "body": "40659+3079+123636+x+a",
 "destination": "3865"
 },
 {
 "body": "40659+3079+123636+x+a",
 "destination": "2865"
 },
 {
 "body": "40659+3079+123636+x+a",
 "destination": "4865"
 },
 ]
 }
 }
}`
```