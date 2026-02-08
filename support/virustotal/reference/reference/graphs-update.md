---
title: "Update a graph object"
source: "https://docs.virustotal.com/reference/graphs-update"
scraped_at: "2026-02-08T06:35:39.730Z"
---

JSON
```
`{
 "data":{
 "attributes": {
 "private": true
 },
 "type":"graph"
 }
}`
```

JSON
```
`{
 "data": {
 "attributes": {
 "private": false,
 "nodes": [
 {
 "type":"domain",
 "entity_id":"www.hooli.com",
 "x":-18,
 "y":65,
 "text":"Root Node",
 "index":0
 },
 {
 "type":"relationship",
 "entity_id":"relationships_resolutions_wwwhoolicom",
 "x":-56,
 "y":42,
 "index":1
 },
 {
 "type":"ip_address",
 "entity_id":"8.8.8.8",
 "x":-64,
 "y":0,
 "index":2,
 "fx":3.3,
 "fy":4.4
 },
 {
 "type":"file",
 "entity_id":"131f95c51cc819465fa1797f6ccacf9d494aaaff46fa3eac73ae63ffbdfd8267",
 "x":-64,
 "y":0,
 "index":2,
 "fx":3.3,
 "fy":4.4
 },
 {
 "type":"url",
 "entity_id":"1a0556926f7e76419d12e4c6ad52f10388af11f2689f6c0fb6111a2b85f131de",
 "x":-64,
 "y":0,
 "index":2,
 "fx":3.3,
 "fy":4.4
 }
 ],
 "links":[
 {
 "source":"www.hooli.com",
 "target":"relationships_resolutions_wwwhoolicom",
 "connection_type":"resolutions"
 },
 {
 "source":"relationships_resolutions_wwwhoolicom",
 "target":"8.8.8.8",
 "connection_type":"resolutions"
 }
 ],
 "position": {
 "x":897,
 "y":388,
 "scale":"1"
 },
 "graph_data": {
 "description": "Hooli.com graph"
 }
 },
 "type": "graph"
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!