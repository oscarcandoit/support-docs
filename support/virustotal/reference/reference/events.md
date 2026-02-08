---
title: "Retrieve historical events about your software collection"
source: "https://docs.virustotal.com/reference/events"
scraped_at: "2026-02-08T06:35:53.248Z"
---

This endpoint returns historical information about your stored files, including creation, deletion, detections, and clean-ups.

A dictionary with data, links, and meta properties is received.

Events will be listed in dictionary format with the following fields:

| Field Name | Description | Possible Values |
| --- | --- | --- |
| action | A keyword describing the action that the event is describing | CLEAN
COMMENT
DELETE
DETECTED
UPLOAD
RESOLVED |
| creator_id | Username. Who uploaded the file. | |
| details | A list of strings detailing current and previous engine verdicts. | Composed of four parts with a &#x27;:&#x27; separator:

engine
current | last
signature | update | version | malicious | visible

For example:
engine:current:update:20191016
engine:last:signature: |
| level | Severity level for the event. | 0 (lowest) to 4 (highest) |
| monitor_key | The key of the monitor item. | |
| owner_id | The group that owns the monitor item. | |
| plaintext_description | A space-separated collection of keywords containing sha256, detecting engines, and file names. | Not always present |
| source | The action originating or triggering this event. | ANALYSIS
FILE
QUOTA |
| subject | If applicable, the SHA256 of the file. | |
| timestamp | Timestamp in the format YYYYMMDDTHH:mm:ss | |

JSON
```
`{
 "data": [
 {
 action: "CLEAN",
 creator_id: "wcoyote",
 details: [
 {
 "v": "engine:current:clean"
 }
 ],
 level: "1",
 monitor_key: "abcdcdcedef928492384==",
 owner_id: "monitor_group_here",
 plaintext_description: "",
 source: "FILE",
 subject: "sha256_here",
 timestamp: "2019-12-31T23:58:58",
 },
 {
 action: "DETECTED",
 creator_id: "wcoyote",
 details: [
 {
 "v": "engine:current:malicious:ENGINE_ONE"
 },
 {
 "v": "engine:current:malicious:ENGINE_TWO"
 },
 ],
 level: "1",
 monitor_key: "abcdcdcedef928492384==",
 owner_id: "monitor_group_here",
 plaintext_description: "ENGINE_ONE <sha256> <filename>",
 source: "ANALYSIS",
 subject: "sha256_here",
 timestamp: "2019-12-31T23:58:58",
 }
 ],
 "links": {
 "next": "https://www.virustotal.com/api/v3/monitor/events?cursor=ABCDE123456%3D%3D",
 "self": "https://www.virustotal.com/api/v3/monitor/events"
 },
 "meta": {
 "cursor": "ABCDE123456==",
 "job_id": "foobar"
 }
}`
```

**ShellClick `Try It!` to start a request and see the response here!