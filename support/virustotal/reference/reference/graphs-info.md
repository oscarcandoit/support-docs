---
title: "Get a graph object"
source: "https://docs.virustotal.com/reference/graphs-info"
scraped_at: "2026-02-08T06:35:39.203Z"
---

Returns a [Graph](/reference/graph-object) object.

Response example
```
`{
 "data": {
 "attributes": {
 "graph_data": {
 "description": "Hooli.com investigation"
 },
 "links": [
 {
 "connection_type": "resolutions",
 "source": "www.hooli.com",
 "target": "relationships_resolutions_wwwhoolicom"
 },
 {
 "connection_type": "resolutions",
 "source": "relationships_resolutions_wwwhoolicom",
 "target": "8.8.8.8"
 }
 ],
 "private": false,
 "creation_date": 1530006951,
 "position": {
 "y": 388,
 "x": 897,
 "scale": "1"
 },
 "nodes": [
 {
 "index": 0,
 "entity_id": "www.hooli.com",
 "text": "Root Node",
 "y": 65,
 "x": -18,
 "type": "domain"
 },
 {
 "y": 42,
 "index": 1,
 "entity_id": "relationships_resolutions_wwwhoolicom",
 "type": "relationship",
 "x": -56
 },
 {
 "index": 2,
 "entity_id": "8.8.8.8",
 "fx": 3.3,
 "fy": 4.4,
 "y": 0,
 "x": -64,
 "type": "ip_address"
 },
 {
 "index": 2,
 "entity_id": "131f95c51cc819465fa1797f6ccacf9d494aaaff46fa3eac73ae63ffbdfd8267",
 "fx": 3.3,
 "fy": 4.4,
 "y": 0,
 "x": -64,
 "type": "file"
 },
 {
 "index": 2,
 "entity_id": "1a0556926f7e76419d12e4c6ad52f10388af11f2689f6c0fb6111a2b85f131de",
 "fx": 3.3,
 "fy": 4.4,
 "y": 0,
 "x": -64,
 "type": "url"
 }
 ]
 },
 "type": "graph",
 "id": "g3ad78ce6c21ae675e81ac376a6fc016c37befa6dc87484b95a2b069f8d04ef44",
 "links": {
 "self": "https://www.virustotal.com/api/v3/graphs/g3ad78ce6c21ae675e81ac376a6fc016c37befa6dc87484b95a2b069f8d04ef44"
 }
 }
}`
```

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!