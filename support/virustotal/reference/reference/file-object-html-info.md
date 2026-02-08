---
title: "html_info"
source: "https://docs.virustotal.com/reference/file-object-html-info"
scraped_at: "2026-02-08T06:35:45.413Z"
---

`html_info` provides information extracted from HTML files:

- `hrefs`: <*list of strings*> all `href` attributes found in all tags.

- `iframes`: <*list of dictionaries*> list containing all `iframe` tags. Every item contains:

`attributes`: <*dictionary*> the tag&#x27;s attributes.

`meta`: <*list of dictionaries`> contains all `meta` tags. Every item contains:

- `content`: <*list of strings*> content of all `meta` tags having that name.

- `name`: <*string*> name of that `meta` tag.

`scripts`: <*list of dictionaries*> list containing all `script` tags. Every item contains:

- `attributes`: <*dictionary*> the tag&#x27;s attributes.

- `sha256`: <*string*> in case the script is embedded within the script, this attribute contains its sha256 checksum.

`title`: <*string*> website&#x27;s title.
`trackers`: <*list of dictionaries*> found trackers in the document. Every item contains:

- `name`: <*string*> tracker name.

- `trackers`: <*list of dictionaries*> found trackers. Every item contains:

`tracker_id`: <*string*> tracker campaign/client ID.

- `url`: <*string*> script URL.

html_infoExample
```
`{
 "data": {
 "attributes": {
 "html_info": {
 "hrefs": [
 "<strings>"
 ],
 "meta": [
 {
 "content": [
 "<strings>"
 ],
 "name": "<string>"
 }
 ],
 "scripts": [
 {
 "attributes": {
 "<string>": "<string>"
 }
 "sha256": "<string>"
 }
 ],
 "title": "<string>",
 "trackers": [
 {
 "name": "<string>",
 "trackers": [
 {
 "tracker_id": "<string>",
 "url": "<string>"
 }
 ]
 }
 ]
 }
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "html_info": {
 "hrefs": [
 "/images/favicon.ico",
 "https://fonts.googleapis.com/icon?family=Material+Icons",
 "http://example.com/css/style1.css"
 ],
 "meta": [
 {
 "content": [
 "ID"
 ],
 "name": "geo.region"
 },
 {
 "content": [
 "Indonesia"
 ],
 "name": "geo.placename"
 },
 {
 "content": [
 "Coolest webpage ever done before"
 ],
 "name": "description"
 }
 ],
 "scripts": [
 {
 "attributes": {
 "src": "http://example.com/js/jquery-latest.js"
 }
 },
 {
 "attributes": {
 "src": "http://example.com/js/my_js.js",
 "type": "text/javascript"
 }
 },
 {
 "attributes": {
 "type": "text/javascript"
 },
 "sha256": "0df532883768378d35b30e7e32eb35b7231d333bec8c063a2d396c53305d3d96"
 }
 ],
 "title": "A very cool website",
 "trackers": [
 {
 "name": "Google Tag Manager",
 "trackers": [
 {
 "tracker_id": "UA-123331334-11",
 "url": "https://www.googletagmanager.com/gtag/js?id=UA-123331334-11"
 }
 ]
 }
 ]
 }
 }
 }
}`
```