---
title: "Get a file behavior report from a sandbox"
source: "https://docs.virustotal.com/reference/get-file-behaviour-id"
scraped_at: "2026-02-08T06:35:35.590Z"
---

Fetches a [File behaviour](/reference/file-behaviour-summary) object by ID.

**📘

This API call only fetches the behaviour report for a single behavioural analysis you can fetch all of them with [https://developers.virustotal.com/reference/file-all-behaviours-summary](https://developers.virustotal.com/reference/file-all-behaviours-summary)

## Sandbox Report identifiers[](#sandbox-report-identifiers)

A Sandbox report ID has two main components: the analysed file&#x27;s SHA256** and the **sandbox name**. These two components are joined by a `_` character. For example, ID `5353e23f3653402339c93a8565307c6308ff378e03fcf23a4378f31c434030b0_VirusTotal Jujubox` fetches the sandbox report for a file having a SHA256 `5353e23f3653402339c93a8565307c6308ff378e03fcf23a4378f31c434030b0` analysed in the `VirusTotal Jujubox` sandbox.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!