---
title: "verdicts"
source: "https://docs.virustotal.com/reference/verdict-tag"
scraped_at: "2026-02-08T06:35:48.324Z"
---

**`verdicts` contains a list of maliciousness classifications** for the file under study **based on its behaviour.** It is a list of strings, that can contain any of the following:

- `CLEAN` clean, whitelisted or undetected.

- `MALWARE` should be detected as malware.

- `GREYWARE` PUA, PUP (possibly unwanted program).

- `RANSOM` Ransom or crypter.

- `PHISHING` Tries to phish the user or deceive him to steel his credentials.

- `BANKER` banking trojan malware.

- `ADWARE` displays unwanted advertisements.

- `EXPLOIT` contains or runs an exploit.

- `EVADER` contains logic to evade analysis.

- `RAT` remote access trojan, may listen for inbound connections.

- `TROJAN` trojan or bot.

- `SPREADER` spreads to USB, other drives, network, etc. Work-like functionality.

VerdictsExample
```
`{
 "data": {
 "attributes": {
 "verdicts": [
 "<string>"
 ]
 }
 }
}`
```

```
`{
 "data": {
 "attributes": {
 "verdicts": [
 "MALWARE"
 ]
 }
 }
}`
```