---
title: "Comments"
source: "https://docs.virustotal.com/reference/comment-object"
scraped_at: "2026-02-08T06:35:42.768Z"
---

Comments

## Object Attributes[](#object-attributes)

- `attributes`: data about a specific comment.

`date`: <*integer*> when the comment was done.

- `text`: <*string*> comment in text.

- `html`: <*string*> comment in html format.

- `votes`: <*dictionary*> unweighted number of total votes from the community, divided in "harmless" and "malicious".

`positive`: <*integer*> number of positive votes.

- `negative`: <*integer*> number of negative votes.

- `abuse`: <*integer*> number of negative votes.

`tags`: <*list of strings*> identificative attributes.

`id`: <*string*> resource identifier of the comment.
`links`: contains "self", with a link to the comment itself.
`type`: <*string*> value is "comment", that is the object type.

"vote" object
`{
 "attributes": {"date": <int:timestamp>,
 "text": <string>,
 "html": "<string>",
 "votes": {
 "positive": <int>,
 "negative": <int>,
 "abuse": <int>
 },
 "tags": ["<string>"],
 },
 "id": "<string>",
 "links": {"self": "<string>"},
 "type": "vote"
}`

## Relationships[](#relationships)

In addition to the previously described attributes, Comment objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/relationships) section. The available relationships are described in the following table:

| Relationship | Description | Accessibility | Return object type |
| --- | --- | --- | --- |
| author | Author of the comment. | Everyone. | Details of the comment&#x27;s author. |