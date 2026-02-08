---
title: "Saved Searches"
source: "https://docs.virustotal.com/reference/saved-search-object"
scraped_at: "2026-02-08T06:35:52.615Z"
---

Saved Searches are designed to store complex or frequently executed threat intelligence searches for reuse against our database of Indicators of Compromise (IoCs).

## Object Attributes[](#object-attributes)

A saved search object contains the following attributes:

- `creation_date`: <*int:timestamp*> saved search object creation date (UTC timestamp).

- `last_modification_date`: <*int:timestamp*> last time when the saved search&#x27;s information was updated (UTC timestamp).

- `last_execution_date`: <*int:timestamp*> last time the saved search was run (UTC timestamp or 0).

- `name`: <*string*> saved search&#x27;s name.

- `description`: <*string*> saved search&#x27;s description.

- `search_query`: <*string*> saved search&#x27;s query/logic.

- `private`: <*boolean*> whether the saved search is private or not.

- `origin`: <*string*> saved search&#x27;s origin. Available options are: Crowdsourced and Partner.

- `tags`: <*list of strings*> saved search&#x27;s associated tags.

The `context_attributes` define the specific relationship between the user who requested the object and the object itself.

Saved Search object
`{
 "attributes": {
 "creation_date": <_int:timestamp_>,
 "description": "<_string_>",
 "last_execution_date": \<_int:timestamp_>,
 "last_modification_date": \<_int:timestamp_>,
 "name": "<_string_>",
 "origin": "<_string_>",
 "private": <_boolean_>,
 "search_query": "<_string_>",
 "tags": <_list of strings_>
 },
 "context_attributes": {
 "role": "<_string_>",
 "shared_with_me": <_boolean_>
 },
 "id": "<_string_>",
 "links": {
 "self": "https://www.virustotal.com/api/v3/saved_searches/<_string_>"
 },
 "type": "saved_search"
}`

# Relationships[](#relationships)

In addition to the previously described attributes, Saved Searches objects contain relationships with other objects in our dataset that can be retrieved as explained in the [Relationships](/reference/introduction-relationships) section.

The following table shows a summary of available relationships.

| Relationship | Return object type | Allowed Methods |
| --- | --- | --- |
| owner | [User](/reference/user-object) who created the object. | GET |
| editors | List of [users](/reference/user-object) that can edit the object (only available to the owner or editor of the object). | GET, POST |
| viewers | List of [users](/reference/user-object) that can view the object (only available to the owner or editor of the object). | GET, POST |