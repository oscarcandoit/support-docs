---
title: "Votes"
source: "https://docs.virustotal.com/reference/vote-object"
scraped_at: "2026-02-08T06:35:52.675Z"
---

- `attributes`: data about a specific vote.

`date`: when the vote was done.

- `value`: weight given by this vote (positive or negative) for Community Score.

- `verdict`: note if vote was for making it "malicious" or "harmless".

`id`: resource identifier of the vote.
`links`: contains "self", with a link to the vote itself.
`type`: value is "vote", that is the object type.

JSON
```
`{
 "attributes": {"date": <int:timestamp>,
 "value": <int>,
 "verdict": "<string>"},
 "id": "<string>",
 "links": {"self": "<string>"},
 "type": "vote"
}`
```