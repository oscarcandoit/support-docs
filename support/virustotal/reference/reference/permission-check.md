---
title: "permissions_checked"
source: "https://docs.virustotal.com/reference/permission-check"
scraped_at: "2026-02-08T06:35:49.173Z"
---

**`permissions_checked` contains a list of Android permissions that the app checks to see if they are granted.**

It is a list of dictionaries, every item in the list contains the following fields:

- `owner`: <*string*> name of the application that has been granted the checked permission.

- `permission`: <*string*> example: android.permission.INTERNET.

Checked permissionsExample
```
`{
 "data": {
 "attributes": {
 "permissions_checked": [
 {
 "owner": "<string>",
 "permission": "<string>"
 },...
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "permissions_checked": [
 {
 "owner": "blablabla",
 "permission": "android.permission.INTERNET"
 },
 {
 "owner": "blablabla",
 "permission": "android.permission.ACCESS_NETWORK_STATE"
 }
 ]
 }
 }
}`
```