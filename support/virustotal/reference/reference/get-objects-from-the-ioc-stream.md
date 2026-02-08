---
title: "Get objects from the IoC Stream"
source: "https://docs.virustotal.com/reference/get-objects-from-the-ioc-stream"
scraped_at: "2026-02-08T06:35:38.038Z"
---

The IoC stream endpoint returns different types of objects (files, URLs, domains, IP addresses) coming from multiple origins (you can restrict the returned types by using the filters explained below). In addition, depending on the origin of the notification there will be different context attributes added to these objects.

The possible context attributes in IoC Stream objects are:

- `notification_id`: <*string*> Always present. This string identifies the notification, and can be used to retrieve the notification individually (by using [GET /ioc_stream_notifications/{id}](/reference/get-an-ioc-stream-notification)) or to delete it ([DELETE /ioc_stream_notifications/{id}](/reference/delete-an-ioc-stream-notification)).

- `notification_date`: <*int*> Always present. Date when the notification was created (UTC timestamp).

- `origin`: <*string*> Always present. The notification&#x27;s origin. In the case of Livehunt or Retrohunt the origin is `hunting`.

- `sources`: <*list of dictionaries*> Always present. The different sources associated to the notification. In the case of Livehunt the only source is always the hunting ruleset that triggered the notification.

- `tags`: <*list of strings*> List of notification&#x27;s tags (if any). These tags can be used to filter the objects by using the `notification_tag:` filter.

- `hunting_info`: <*dictionary*> Only present for notifications of `hunting` origin. It contains additional contextual information from Livehunt. Its structure is the following:

`rule_name`: <*string*> matched rule name.

- `rule_tags`: <*list of strings*> matched rule tags.

- `snippet`: <*string*> matched contents inside the file as hexdump. Contains `begin_highlight` and `end_highlight` substrings to indicate the part of the file that produced the match and give additional context about surrounding bytes in the match.

- `source_country`: <*string*> country where the matched file was uploaded from.

- `source_key`: <*string*> unique identifier for the source in ciphered form.

Allowed filters with examples (they can be combined in the same filter string):

- `date:2023-02-07T10:00:00+`: Returns objects from notifications generated after 2023-02-07T10:00:00 (UTC)

- `date:2023-02-07-`: Returns objects from notifications generated before 2023-03-07T00:00:00 (UTC)

- `origin:hunting`: Returns objects from notifications coming from Livehunt. Allowed values: `hunting, subscriptions`.

- `entity_id:objectId`: Return objects whose ID is `objectId`

- `entity_type:file`: Return only file objects. Allowed values: `file, domain, url, ip_address`

- `source_type:hunting_ruleset`: The type of source object that triggered the notification. Allowed values: `hunting_ruleset, retrohunt_job, collection, threat_actor`.

- `source_id:objectId`: The ID of the source object that triggered the notification. In the case of hunting the notification&#x27;s source object ID corresponds to the hunting ruleset&#x27;s ID.

- `notification_tag:ruleName`: Notifications with `ruleName` in their tags. In the case of notifications coming from Livehunt there are several tags in each notification, like the rule name or the username of the ruleset&#x27;s owner.

Allowed orders:

- `date-` (default): Sorts by most recent notifications first.

- `date+`: Sorts by oldest notification first.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!