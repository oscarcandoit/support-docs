---
title: "Create a new Retrohunt job"
source: "https://docs.virustotal.com/reference/create-retrohunt-job"
scraped_at: "2026-02-08T06:35:39.239Z"
---

This endpoint creates a new Retrohunt job. The request&#x27;s body must have the following structure:

JSON
`{
 "data": {
 "type": "retrohunt_job",
 "attributes": {
 "rules": "rule foobar { strings: $ = \"foobar\" condition: all of them }",
 "notification_email": "[[email&#160;protected]](/cdn-cgi/l/email-protection)",
 "corpus": "main",
 "time_range": {
 "start": 1545145761,
 "end": 1547737720
 }
 }
 }
}`
The `rules` attribute is required, but `notification_email`, `corpus` and `time_range` are optional. You should provide `notification_email` if you want to receive an email notification when the job is finished, while `corpus` allows you to select which dataset you want to scan with your job. There are two different corpuses: "main" and "goodware". The "main" corpus is the default one, composed of files sent to VirusTotal during the last few months. The "goodware" corpus is a random selection of ~1.000.000 files from the [NSRL](https://www.nist.gov/software-quality-group/national-software-reference-library-nsrl) that are not detected by any antivirus engine. This corpus contains multiple file types, and is useful for testing your YARA rules for false positives. If the `corpus` attribute is not specified the "main" corpus will be used.

> 🚧
> ### Retrohunt limits[](#retrohunt-limits)
> 
> 
> Each user can run up to 10 Retrohunt jobs at the same time, when you reach that limit you must wait for one of the running jobs to finish before launching a new one. Additionally, each job can contain up to 300 YARA rules.
> 
> 

If you want your job to scan files sent to VirusTotal within a certain time range you can use the `time_range` attribute to specify the desired range. Both the `start` and `end` fields in `time_range` should be the UNIX timestamp for the minimum and upper bound of the time range in UTC, and they should be within the maximum range allowed by your Retrohunt privileges. All users can scan up to 90 days back, and this can go up to 180 or 365 days for more privileged users. If `start` is not specified your Retrohunt job will scan back to the limit allowed by your privileges, and if `end` is not specified it will scan up to the most recent files.

Returns the newly created [Retrohunt Job](/reference/retrohunt-job-object) object.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!