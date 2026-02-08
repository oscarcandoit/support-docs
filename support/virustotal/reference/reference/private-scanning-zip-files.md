---
title: "Create a password-protected ZIP with VirusTotal private files"
source: "https://docs.virustotal.com/reference/private-scanning-zip-files"
scraped_at: "2026-02-08T06:35:41.006Z"
---

Creates a ZIP file containing the files specified in the request. Optionally you can provide a password for protecting the ZIP file. The request&#x27;s body must have the following structure:

Example request
`{
 "data": {
 "password": "mysecretpassword", 
 "hashes":[
 "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", 
 "275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f",
 "ed1707bf39a62b0efd40e76f55409ee99db0289dc5027d0a5e5337b4e7a61ccc"]
 }
}`
The response from this endpoint is the object corresponding to the newly created ZIP file. Notice however that your ZIP file won&#x27;t be ready to be downloaded right away, you must wait for the backend to create the ZIP file for you, that&#x27;s why the returned object has a `status` and `progress` attribute, which indicates the current status and current progress for the ZIP creation process.

Example response
`{
 "data": {
 "type": "zip_file",
 "id": "4939392292",
 "attributes": {
 "status": "starting",
 "progress": 0,
 "files_ok": 0,
 "files_error": 0
 } 
 }
}`
The [GET /private/zip_files/{id}](/reference/private-scanning-get-zip-file) endpoint should be used for retrieving the latest status of the ZIP file until it&#x27;s `finished`.

**Shell**Node**Ruby**PHP**PythonClick `Try It!` to start a request and see the response here!