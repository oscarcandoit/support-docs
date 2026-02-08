---
title: "🔀 related_comments"
source: "https://docs.virustotal.com/reference/url-object-related-comments"
scraped_at: "2026-02-08T06:35:52.199Z"
---

The *related_comments* relationship lists all comments posted by the VirusTotal community in a URL&#x27;s related objects (that is, the domains referencing that URL, URLs in the same domain and the URL&#x27;s own comments).

This relationship can be retrieved using the [relationships API endpoint](/reference/urls-relationships). The response contains a list of [Comments](/reference/comments) objects. If the comment belongs to an object different than the URL itself, an additional context_attribute is added:

- `posted_in`: <*dictionary*> specifies the object where the comment was posted.

`id`: <*string*> object ID.

- `type`: <*string*> object type.

/urls/{url_id}/related_commentsExample
```
`{
 "data": [
 {
 "attributes": <MDXishSnakeCase0>,
 "context_attributes": {
 "posted_in": {
 "id": "<string>",
 "type": "<string>"
 }
 }
 },
 ],
 "links": {
 "next": "<string>",
 "self": "<string>"
 },
 "meta": {
 "count": <int>,
 "cursor": "<string>"
 }
}`
```

```
`{
 "data": [
 {
 "attributes": {
 "date": 1591887755,
 "html": "#safe",
 "tags": [
 "_:web",
 "_:public",
 "safe"
 ],
 "text": "#safe",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "id": "u-6f0e3fea9cb7f6a83fa91ff38a94f64c8fc6e84fbb94b590fb05f2300f8d64f1-99b20106",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/u-6f0e3fea9cb7f6a83fa91ff38a94f64c8fc6e84fbb94b590fb05f2300f8d64f1-99b20106"
 },
 "type": "comment"
 },
 {
 "attributes": {
 "date": 1591887361,
 "html": "#safe",
 "tags": [
 "_:web",
 "_:public",
 "safe"
 ],
 "text": "#safe",
 "votes": {
 "abuse": 0,
 "negative": 0,
 "positive": 0
 }
 },
 "context_attributes": {
 "posted_in": {
 "id": "3f47d9b5ed9164e2g9a741gf8bbg42aa711gc251ga3aag0540g6ae1a4gc30g16",
 "type": "url"
 }
 },
 "id": "u-3f47d9b5ed9164e2g9a741gf8bbg42aa711gc251ga3aag0540g6ae1a4gc30g16-f98e7b29",
 "links": {
 "self": "https://www.virustotal.com/api/v3/comments/u-3f47d9b5ed9164e2g9a741gf8bbg42aa711gc251ga3aag0540g6ae1a4gc30g16-f98e7b29"
 },
 "type": "comment"
 }
 ],
 "links": {
 "self": "https://www.virustotal.com/api/v3/urls/6f0e3fea9cb7f6a83fa91ff38a94f64c8fc6e84fbb94b590fb05f2300f8d64f1/related_comments?limit=10"
 },
 "meta": {
 "count": 2
 }
}`
```