---
title: "ip_traffic"
source: "https://docs.virustotal.com/reference/ip-traffic"
scraped_at: "2026-02-08T06:35:49.097Z"
---

**`ip_traffic` contains a list of outgoing connections seen during the execution** of a given file. It is a list, every item on the list containing the following fields:

- `destination_ip`: <*string*> IP address.

- `destination_port`: <*integer*> Port number.

- `transport_layer_protocol`: <*string*> One of:

`ICMP`

- `IGMP`

- `TCP`

- `UDP`

- `ESP`

- `AH`

- `L2TP`

- `SCTP`

IP trafficExample
```
`{
 "data": {
 "attributes": {
 "dns_lookups": [
 {
 "destination_ip": "<string>",
 "destination_port": <int>,
 "transport_layer_protocol": "<string>"
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
 "dns_lookups": [
 {
 "destination_ip": "66.66.66.66",
 "destination_port": 80,
 "transport_layer_protocol": "TCP"
 }
 ]
 }
 }
}`
```