---
title: "Objects"
source: "https://docs.virustotal.com/reference/objects"
scraped_at: "2026-02-08T06:35:32.935Z"
---

Objects are a key concept in the VirusTotal API. Each object has an identifier and a type. Identifiers are unique among objects of the same type, which means that a (type, identifier) pair uniquely identifies any object across the API. In this documentation, those (type, identifier) pairs are referred as **object descriptors**.

Each object has an associated URL with the following structure:

**`https://www.virustotal.com/api/v3/{collection name}/{object id}`
Usually `{collection name}` is the plural form of the object type, for example, `files` is the collection containing all the objects of type `file`, and `analyses` is the collection containing all the `analysis` objects. The format for `{object id}` varies from one object type to another.

A `GET` request to the object&#x27;s URL returns information about the object in the following format:

JSON
`{
 "data": {
 "type": "{object type}",
 "id": "{object id}",
 "links": {
 "self": "https://www.virustotal.com/api/v3/{collection name}/{object id}"
 },
 "attributes" : {
 "integer_attribute": 1234,
 "string_attribute": "this is a string",
 "dictionary_attribute": { "one": 1, "two": 2 },
 "list_attribute": [ "foo", "bar", "baz" ]
 },
 "relationships" : {
 ..
 }
 } 
}`
Besides an ID and a type, the object has a set of attributes** and **relationships**. Attributes can be of any type supported by JSON, including lists and dictionaries. The `attributes` field is always present in all objects, but `relationships` is optional, depending on whether or not you asked for relationships to be included while making your request. This will discussed in depth in the [Relationships](/reference/relationships) section.

Each object type has its own pre-defined set of attributes, you won&#x27;t be able to add nor remove attributes, you can only modify existing ones (as long as they are writable). To modify an object&#x27;s attributes you must send a `PATCH` request to the object&#x27;s URL. If you try to modify a read-only attribute you will get an error. The `PATCH` request&#x27;s body must contain the attributes you want to modify in a structure like the one shown in the example below. Any attribute not included in the request will remain unchanged.

JSON
`{
 "data": {
 "type": "{object type}",
 "id": "{object id}",
 "attributes" : {
 "integer_attribute": 1234,
 "string_attribute": "this is a new string",
 }
 } 
}`
Notice that both the object&#x27;s ID and type are included in the `PATCH` request&#x27;s body, and they must match those specified in the URL.

Some object types can be also deleted by sending a `DELETE` request to the object&#x27;s URL.