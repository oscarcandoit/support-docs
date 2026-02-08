---
title: "Get a detailed HTML behaviour report"
source: "https://docs.virustotal.com/reference/get-file-behaviours-html"
scraped_at: "2026-02-08T06:35:35.659Z"
---

Returns a [File behaviour](/reference/file-behaviour-summary) object as an HTML report.

## Sandbox Report identifiers[](#sandbox-report-identifiers)

A Sandbox report ID has two main components: the **analysed file&#x27;s SHA256** and the **sandbox name**. These two components are joined by a `_` character. For example, ID `5353e23f3653402339c93a8565307c6308ff378e03fcf23a4378f31c434030b0_VirusTotal Jujubox` fetches the sandbox report for a file having a SHA256 `5353e23f3653402339c93a8565307c6308ff378e03fcf23a4378f31c434030b0` analysed in the `VirusTotal Jujubox` sandbox.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!