---
title: "Search graphs"
source: "https://docs.virustotal.com/reference/graphs"
scraped_at: "2026-02-08T06:35:39.246Z"
---

Endpoint used to search graphs.

There are a set of multiple modifiers that you can use to refine your search results. You can combine all of them together and use them in conjunction with AND, OR and NOT operators.

Date and numeric fields support the suffix plus or minus to match values greater or less than the passed value. If not sign has been added to the modifier, you will get exact matches. You can use more than once the same modifier in the same query to define ranges: **`creation_date:2018-11-1+` `creation_date:2018-11-12-` will match graphs created between 2018-11-1 and 2018-11-22.

Graph-related modifiers**

| Modifier | Description | Example |
| --- | --- | --- |
| id: | Filters by graph identifier. | id:g675a2fd4c8834e288afd71bbbe88f78884e7d21a8c9348b5ab45cc9281cffc3c |
| name: | Filters by graph name. | name:Wannacry |
| owner: | Filters by graphs owned by user. | owner:richard_hendricks |
| group: | Filters by graphs owned by group. | group:piedpiper |
| visible_to_user: | Filters by graphs visible to user. | visible_to_user:richard_hendricks |
| visible_to_group: | Filters by graphs visible to group. | visible_to_group:piedpiper |
| private: | Filters by private graphs. | private:true, private:false |
| creation_date: | Filters by the graph creation date. | creation_date:2018-11-1 |
| last_modified_date: | Filters by the last date the graph was modified. | last_modified_date:2018-11-12 |
| total_nodes: | Filters by graphs containing some amount of nodes. | total_nodes:100 |
| comments_count: | Filter by the number of comments of the graph. | comments_count:10+ |
| views_count: | Filter by the number of graph views. | views_count:1000+ |

**Node-related modifiers**

| Modifier | Description | Example |
| --- | --- | --- |
| label: | Filters by graphs containing nodes with a specific label | label:Kill switch |
| file: | Filters by graphs containing the file. | file:131f95c51cc819465fa1797f6ccacf9d494aaaff46fa3eac73ae63ffbdfd8267 |
| domain: | Filters by graphs containing the domain. | domain:piedpiper.com |
| ip_address: | Filters by graphs containing the ip address. | ip_address:1.1.1.1 |
| url: | Filters by graphs containing the url. | url:[https://piedpiper.com/the-box/](https://piedpiper.com/the-box/) |
| actor: | Filters by graphs containing the actor. | actor:funny bear |
| victim: | Filters by graphs containing the victim. | victim:richard_hendricks |
| email: | Filters by graphs containing the email. | email:[[email&#160;protected]](/cdn-cgi/l/email-protection#6e1c070d060f1c0a2e1e070b0a1e071e0b1c400d0103) |
| department: | Filters by graphs containing the department. | department:engineers |

In addition to these modifiers, you can do a free search query. The search engine will return graphs that match the query with the content of any field in the graph.

All graphsFIlter by userAttributes selectionFilter by domain
`curl --request POST \
 --url https://www.virustotal.com/api/v3/graphs \
 --header &#x27;x-apikey: <your API key>&#x27;`
```
`curl --request POST \
 --url https://www.virustotal.com/api/v3/graphs?filter=owner:bbunny \
 --header &#x27;x-apikey: <your API key>&#x27;`
```

```
`curl --request POST \
 --url https://www.virustotal.com/api/v3/graphs?filter=owner:bbunny&attributes=private,graph_data \
 --header &#x27;x-apikey: <your API key>&#x27;`
```

```
`curl --request POST \
 --url https://www.virustotal.com/api/v3/graphs?filter=domain:hooli.com \
 --header &#x27;x-apikey: <your API key>&#x27;`
```

Supported `order` fields are: `name`, `owner`, `creation_date`, `last_modified_date`, `views_count` and `comments_count`.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!