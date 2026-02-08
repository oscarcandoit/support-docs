---
title: "File search modifiers"
source: "https://docs.virustotal.com/docs/file-search-modifiers"
scraped_at: "2026-02-08T06:19:21.207Z"
---

There are a set of special terms that you can use to refine your search results. For example, you can take advantage of the term [positives:5+](https://www.virustotal.com/gui/search/positives%253A5%252B/files) to get files detected by five antivirus solutions or more. If you want to get those detected by ten engines or less you can use [positives:11-](https://www.virustotal.com/gui/search/positives%253A11-/files) . Specifying the number without any trailing plus or minus sign you will retrieve those detected exactly by the given number of engines, i.e. [positives:7](https://www.virustotal.com/gui/search/positives%253A7/files). These terms can be used more than once in the same query, for example [positives:20+ positives:31-](https://www.virustotal.com/gui/search/positives%253A20%252B%2520positives%253A31-/files) will return any file detected by a number of engines in the range 20-30.

You can directly type these modifiers on the search box:

*

Or click on the sliders icon:

![File Search Modifiers sliders icon](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/file_search_modifiers_sliders.png)

To get a form where you can use some of these modifiers:

![File Search Modifiers Form](https://storage.googleapis.com/vtdocresources/guides/vt-intelligence/file_search_modifiers_form.png)

1. 

2. 

3. 

4. 

5. 

6. 

7. 

8. 

9. 

10. 

11. 

12. 

13. 

14. 

15. 

The following table details the full list of available search modifiers along with the type of file on which the modifier can act. **Please note that all these modifiers can be combined together and used in conjunction with the search modalities described above**.

The following modifiers admits wildcards: **attack_technique** , **attack_tactic** , **behaviour_network: / behavior_network:** , **capability_tab** , **name: / filename:** , **name: / filename:**.

| Modifier | Scope | Description |
| --- | --- | --- |
| **size** | Any file type | Filters the files to be returned according to size. The size can be specified in bytes (default), kilobytes or megabytes. Trailing plus or minus sign will retrieve those files with a size, respectively, larger than or smaller than the one provided. The modifier can be used more than once in the same query.
Examples: [size:200](https://www.virustotal.com/gui/search/size%253A200), [size:500+](https://www.virustotal.com/gui/search/size%253A500%252B/files), [size:120KB+](https://www.virustotal.com/gui/search/size%253A120KB%252B/files), [size:15MB-](https://www.virustotal.com/gui/search/size%253A15MB-/files),[size:1MB+](https://www.virustotal.com/gui/search/size%253A1MB%252B) |
| **type** | Any file type | Filters the type of file to be returned (i.e. magic signature). Example: [type:pdf](https://www.virustotal.com/gui/search/type%253Apdf/files). This is the full list of available file type literals:- **Executables:** executable, peexe, pedll, ne,  neexe, nedll, mz, msi, com, coff, elf, krnl, rpm, linux, macho, dmg, windows, win16, win32, pe, installer, dos, deb.
- **Internet:** html, xml, flash, swf, fla, iecookie, bittorrent, email, outlook, cap, pcap, crx, chrome, extension, browser, xpi, firefox, js, truetype, internet.
- **Phones&tablets:** mobile, symbian, palmos, wince, android, apk, iphone, ios.
- **Images:** image, jpeg, jpg, draw, emf, tiff, gif, png, bmp, gimp, indesign, photoshop, psd, targa, xws, dib, jng, ico, fpx, eps, svg, webp, xwd.
- **Video&audio:** audio, animation, ogg, flc, fli, mp3, flac, wav, midi, avi, mpeg, quicktime, qt, asf, divx, flv, wma, wmv, realmedia, rm, mov, mp4, 3gp, video, mkv, webm.
- **Documents:** document, text, pdf, msoffice, presentation, postscript, ps, doc, docx, rtf, powerpoint, ppt, pptx, ppsx, slideshow, excel, xls, xlsx, odp, ods, odt, odf, odg, hangul, hwp, gul, ebook, latex, word, samsungdoc, gul, epub, one, onenote, spreadsheet, openoffice, json, sgml.
- **Bundles:** compressed, isoimage, zip, gzip, bzip, rzip, dzip, 7zip, cab, jar, rar, mscompress, ace, arc, arj, asd, blackhole, kgb, squashfs, zlib, tar, pkg, lzfse, zst.
- **Code:** source, script, php, python, perl, ruby, c, cpp, java, jmod, shell, pascal, awk, dyalog, fortran, java-bytecode, class, javascript, ps, ps1, vba, vbs, powershell, json, m4, makefile, objectivec, pyc.
- **Apple:** apple, apple-gen, macintosh, macintosh-gen, mac, applesingle, appledouble, machfs, appleplist, applescript, scpt, maclib.
- **Miscellaneous:** lnk, ttf, rom, bios, firmware, multimedia, chm, eot, woff, font, openfont, opentype, help, math, crt, csv, ini, pem, pgp, sql, vhd. |
| **fs** | Any file type | Filters the files to be returned according to the first submission datetime to VirusTotal. It allows you to specify larger than or smaller than values.
Examples: [fs:2009-01-01T19:59:22-](https://www.virustotal.com/gui/search/fs%253A2009-01-01T19%253A59%253A22-), [fs:2012-08-21T16:59:22+](https://www.virustotal.com/gui/search/fs%253A2012-08-21T16%253A59%253A22%252B), [fs:2012-08-2116:00:00+ fs:2012-08-2116:59:22-,](https://www.virustotal.com/gui/search/fs%253A2012-08-2116%253A00%253A00%252B%2520fs%253A2012-08-2116%253A59%253A22-/files) [fs:3d+](https://www.virustotal.com/gui/search/fs%253A3d%252B/files) |
| **ls** | Any file type | Filters the files to be returned according to the last submission datetime to VirusTotal. It allows you to specify larger than or smaller than values.
Examples: [ls:2012-08-22T06:40:59](https://www.virustotal.com/gui/search/ls%253A2012-08-22T06%253A40%253A59), [ls:2009-01-01T19:59:22-](https://www.virustotal.com/gui/search/ls%253A2009-01-01T19%253A59%253A22-), [ls:2012-08-21T16:59:22+](https://www.virustotal.com/gui/search/ls%253A2012-08-21T16%253A59%253A22%252B/files), [ls:2012-08-2116:00:00+ ls:2012-08-2116:59:22-,](https://www.virustotal.com/gui/search/ls%253A2012-08-2116%253A00%253A00%252B%2520ls%253A2012-08-2116%253A59%253A22-/files) [ls:3d+](https://www.virustotal.com/gui/search/ls%253A3d%252B/files) |
| **la** | Any file type | Filters the files to be returned according to the last analysis datetime by VirusTotal. Normally the last analysis datetime will be the same as the last submission datetime, however, sometimes users will submit a file for scanning and will then decide to view the latest report on the file rather than rescanning it, in those cases both dates may differ. It allows you to specify larger than or smaller than values.
Examples: [la:2012-08-21T16:00:00](https://www.virustotal.com/gui/search/la%253A2012-08-21T16%253A00%253A00), [la:2009-01-01T19:59:22-](https://www.virustotal.com/gui/search/la%253A2009-01-01T19%253A59%253A22-/files), [la:2012-08-21T16:59:22+](https://www.virustotal.com/gui/search/la%253A2012-08-21T16%253A59%253A22%252B), [la:2011-08-21T16:00:00+ la:2012-08-21T16:59:22-](https://www.virustotal.com/gui/search/la%253A2011-08-21T16%253A00%253A00%252B%2520la%253A2012-08-21T16%253A59%253A22-/files) |
| **positives**
**p** | Any file type | Filters the files to be returned according to the number of antivirus vendors that detected it upon scanning with VirusTotal. It allows you to specify larger than or smaller than values.
Examples: [positives:1](https://www.virustotal.com/gui/search/positives%253A1/files), [positives:10+](https://www.virustotal.com/gui/search/positives%253A10%252B), [positives:5-](https://www.virustotal.com/gui/search/positives%253A5-/files), [positives:10+ positives:20-](https://www.virustotal.com/gui/search/positives%253A10%252B%2520positives%253A20-/files) |
| **children_positives**
**cp** | Any file type | Filters the files to be returned according to the maximum number of detections of children files for a given sample. Samples with children files include compressed bundles, ROMs, etc.
Examples: [children_positives:10+](https://www.virustotal.com/gui/search/children_positives%253A10%252B), [children_positives:5-](https://www.virustotal.com/gui/search/children_positives%253A5-/files) |
| **name** | Any file type | Returns the files submitted to VirusTotal with a file name that contains the literal provided.
Examples: [name:"winshell.ocx"](https://www.virustotal.com/gui/search/name%253A%2522winshell.ocx%2522/files), [name:"postal"](https://www.virustotal.com/gui/search/name%253A%2522postal%2522/files) |
| **tag** | Any file type | Return all those files tagged by VirusTotal with the literal provided.
Examples: [tag:honeypot](https://www.virustotal.com/gui/search/tag%253Ahoneypot/files), [tag:armadillo](https://www.virustotal.com/gui/search/tag%253Aarmadillo), [tag:nsrl](https://www.virustotal.com/gui/search/tag%253Ansrl). These are some of the tags, the full list can be found at [Full list of VirusTotal Intelligence tag modifier](/docs/intelligence-tag-list):
- via-tor: The file was submitted via a TOR node at least one time.
- zero-filled: The file is zero filled, i.e. the full file is zero padding.
- file_type: All samples are tagged at least with their file type, exactly the same as the type* search modifier. Android related files can be tagged according to their specific file format, this is: *apk*, *dex*, *odex*, *axml*, *arsc* or *faulty* (if the file is corrupted in some way).
- corrupt: Flags the sample as a corrupted file, if it is a portable executable it is more than likely that it will not be loaded by the Windows Loader.
- 64bits: The sample targets 64bit architectures.
- cve: The Common Vulnerability and Exposures identifier of the exploit that the file under consideration makes use of.
- trusted: The file belongs to the software catalogue of a trusted developer, e.g. Microsoft.
- signed: The file is signed (Windows Authenticode Portable Executable Signature/Apple signed/etc.).
- nsrl: The file can be found in [NIST&#x27;s National Software Reference Library](http://www.nsrl.nist.gov/).
- software-collection: The file is present in an online software collection like [Softpedia](http://www.softpedia.com/), [Softonic](http://www.softonic.com/) or similar.
- honeypot: The file was catched in the wild by a network honeypot setup, e.g. [Dionaea honeypot](http://dionaea.carnivore.it/).
- email-spam: The file was seen as an attachment or download link in spam emails.
- attachment: The file was seen as an attachment in some email, however, there is no certainty regarding whether such email was spam.
- exploit: The file is or makes use of an exploit.
- smtp: The sample performs smtp communications when executed, this may be helpful in identifying spambots.
- ftp: The sample performs ftp communications when executed.
- ssh: The sample performs ssh communications when executed.
- telnet: The sample performs telnet communications when executed.
- mysql: The sample performs MySQL communications when executed.
- irc: The sample performs IRC communications when executed.
- suspicious-dns: The sample performs an unusual amount of DNS lookups for non-existing domains, could be an indication of a domain generation algorithm.
- suspicious-udp: The sample performs an unusual amount of UDP connections, could be an indication of P2P botnet communication.
- hosts-modifier: When executed, the given file modifies the system&#x27;s hosts file.
- nxdomain: File whose contacted domain cannot be resolved to an IP Address.

- **Portable Executable specific**
- assembly: Identifies Portable Executable files that are .Net assembly.
- native: Identifies Portable Executable linked using the Native subsystem, there is a high probability of these files being drivers.
- *packer*: Whenever some of the packer detectors in VirusTotal identify the file as packed the file is tagged with the name of the packer (upx, asprox, themida, etc.).
- efi: Extensible Firmware Interface portable executable.
- overlay: The file contains an overlay, appended data at the end of the file, may be some additional malicious payload.
- contains-rom: The executable seems to contain a ROM BIOS image.

- **Mac OS X Executable specific**
- lib: The file is some kind of Mac OS X library, intended for linking, will not execute on its own.
- arm: The executable is intended for ARM architectures.
- ios: The executable is intended for iOS (iPhones, iPads, etc.).
- suspicious-eip: The EIP register reloc for the executable&#x27;s entry point is suspicious.
- dropper: This executable seems to drop other Mach-Os.

- **DMG specific**
- license: The DMG seems to contain some sort of user license agreement, often only found in legitimate applications.

- **Linux ELF Executable specific**
- relocatable: ELFs that are input to the linker, rather than the final product.
- shared-lib: Linux dynamic libraries, intended for linking, will not execute on their own.
- coredump: Memory dump for a Linux executable.

- **File bundles specific**
- contains-pe: The file bundle contains a portable executable.
- contains-rom: The file bundle seems to contain a ROM BIOS image.
- contains-macho: The file bundle contains a Mac OS X executable.
- mac-app: The file bundle contains a full Mac OS X Bundle Application.
- contains-elf: The file bundle contains a Linux ELF executable.
- contains-dmg: The file bundle contains a DMG.
- contains-deb: The file bundle contains a deb package.
- blob: A compressed file that seems to contain some sort of version control blob inside it.
- encrypted: An encrypted compressed file, needs a password to open it.
- tar-bundle: A compressed file that contains a tar bundle inside, e.g. tar.gz files will be of type gzip and will be tagged as *tar-bundle*.

- **DEB package specific**
- iphone: The deb package is intended for iPhones.
- mobile-substrate: Makes use of saurik&#x27;s platform that makes it easier to develop third-party addons for iOS.
- cydia: The deb package is intended for Cydia, a software application for iOS that enables a user to find and install software packages on jailbroken iOS Apple devices.

- **PDF specific**
- invalid-xref: PDF with an invalid xref table.
- js-embedded: PDF that contains JavaScript.
- flash-embedded: PDF that contains Flash.
- autoaction: PDF that contains an automatic action to be performed when the document is viewed.
- acroform: PDF that contains an AcroForm, which in turn may contain JavaScript that is executed when a document is opened.
- launch-action: PDF that contains a launch action, which could launch a given JavaScript snippet.
- file-embedded: PDF that contains an embedded file, could be executable code to launch via a launch action.

- **Document specific**
- macros: Microsoft Office documents containing macros.
- dos-stub: RTF file containing at least one MS-DOS stub string, may indicate that the file embeds a portable executable.
- ole-embedded: RTF file containing at least one OLE embedded object.
- ole-link: RTF file containing at least one OLE link object.
- ole-autolink: RTF file containing at least one OLE autolink object.
- mac-subscriber: RTF file containing at least one Macintosh Edition Manager subscriber object.
- mac-publisher: RTF file containing at least one Macintosh Edition Manager publisher object.
- mac-cmd-embedder: RTF file containing at least one Macintosh Installable Command (IC) Embedder object.
- html-control: RTF file containing at least one Hypertext Markup Language (HTML) control object.
- ole-control: RTF file containing at least one OLE control object.
- auto-open: Open XML/Office documents that automatically run commands or instructions when the file is opened.
- auto-close: Open XML/Office documents that automatically run commands or instructions when the file is closed.
- auto-modify: Open XML/Office documents that automatically run commands or instructions when the file is modified.
- auto-create: Open XML/Office documents that automatically run commands or instructions when a new document is created.
- environ: Open XML/Office documents that may read system environment variables.
- open-file: Open XML/Office documents that may open other files.
- write-file: Open XML/Office documents that may write to other files.
- handle-file: Open XML/Office documents that may perform operations with other files.
- copy-file: Open XML/Office documents that may copy other files.
- create-file: Open XML/Office documents that may create additional files.
- run-file: Open XML/Office documents that may try to run other files, shell commands or applications.
- hide-app: Open XML/Office documents that may try to hide the viewer or other applications.
- powershell: Open XML/Office documents that may execute powershell commands.
- create-dir: Open XML/Office documents that may try to create folders.
- save-workbook: Open XML/Office spreadsheet files that may try to inadvertently save the existing workbook.
- startup-folder: Open XML/Office documents that may try to set the name of the alternate startup folder.
- create-ole: Open XML/Office documents that may create OLE objects.
- enum-windows: Open XML/Office documents that may enumerate open windows.
- run-dll: Open XML/Office documents that may execute code from DLLs.
- download: Open XML/Office documents that may try to download additional files from the Internet.
- send-keys: Open XML/Office documents that may try to interact with other applications.
- obfuscated: Open XML/Office documents that seem to contain deobfuscation code.
- registry: Open XML/Office documents that interact with the Windows Registry.
- anti-analysis: Open XML/Office documents that seem to contain tricks to deceive researchers and analysis systems.
- exe-pattern: Open XML/Office documents whose VBA code seems to manipulate an executable.
- url-pattern: Open XML/Office documents whose VBA code references some URL.
- domain-pattern: Open XML/Office documents whose VBA code references some domain.
- email-pattern: Open XML/Office documents whose VBA code references some email.
- ipv4-pattern: Open XML/Office documents whose VBA code references an IP address.

- **Flash specific**
- as3: Makes use of ActionScript3.
- as2: Makes use of ActionScript2.
- os-checking: The SWF file fingerprints the OS executing it.
- oadbytes: The SWF file makes use of the *loadBytes* ActionScript3 functionality.
- navigate: Opens or replaces a window in the application that contains the Flash Player container with the contents of a given URL using the *navigateToURL* ActionScript function.
- get-url: Contains ActionScript code to request and retrieve content from Internet URLs.
- obfuscated: The SWF file has been processed with a common flash file obfuscator.
- long-hex: The SWF file contains noticeably long strings of hex characters, this commonly reveals encoding of malicious code in hex format, which will then be transformed into binary via the *hexToBin* function.
- long-base64: Sames as above but with base64 strings.
- heap-spray: The SWF file seems to be performing heap spraying.
- capabilities: The SWF file performs environment identification.
- ext-interface: The flash ﬁle uses methods of the ExternalInterface class to communicate with the external host of the Flash plugin, such as the web browser.
- javascript: The flash ﬁle seems to embed javascript code.
- iframe: The flash ﬁle seems to be performing some sort of HTML iframe injection or makes use of iframes.
- fscommand: The flash ﬁle uses ActionScript *fscommand* to save or execute other files.
- exe-embedded: The flash file seems to embed a Portable Executable in its body.
- rar-embedded: The flash file seems to embed a RAR file in its body.
- zip-embedded: The flash file seems to embed a ZIP file in its body.

- **Java JAR specific**
- pack200: JAR file that has been transformed into a compressed pack200 file.

- **PCAP specific**
- malware: PCAP that exhibits generic malware-related network flows.
- trojan: PCAP that exhibits trojan-related network flows.
- worm: PCAP that exhibits worm-related network flows.
- shellcode: PCAP that contains shellcode used for exploitation purposes.
- exploit-kit: PCAP that contains network flows related to some exploit kit, e.g. Blackhole.

- **Android specific**
- sends-sms: Android applications that send SMS messages when executed.
- checks-gps: Android applications that check GPS locations when executed.
- ext-prg: Android applications that launch external programs/commands when executed.
- dyn-class: Android applications that dynamically load one or more classes when executed.
- dyn-method: Android applications that dynamically call one or more methods.

- **ROM BIOS specific**
- flash: flash BIOS firmware volume.
- efi: EFI firmware capsule.
- uefi: UEFI firmware capsule.
- intel-me: Intel ME firmware module.
- dell-fps: Dell FPS firmware.
- apple: Apple-related firmware.
- contains-pe: ROM BIOS images that contain a Windows executable, not just a ROM PE, but rather a fully-fledged windows executable.
- contains-drv: ROM BIOS images that contain a Windows driver. |
| **submissions**
**s** | Any file type | Filter the files returned according to the number of times they were submitted to VirusTotal.
Examples: [submissions:2](https://www.virustotal.com/gui/search/submissions%253A2/files), [submissions:10+](https://www.virustotal.com/gui/search/submissions%253A10%252B/files), [submissions:20-](https://www.virustotal.com/gui/search/submissions%253A20-/files), [submissions:10+ submissions:20-](https://www.virustotal.com/gui/search/submissions%253A10%252B%2520submissions%253A20-/files) |
| **sources** | Any file type | Filter the files returned according to the number of distinct sources that submitted the file to VirusTotal, independently of whether any given source submitted the file more than once.
Examples: [sources:2](https://www.virustotal.com/gui/search/sources%253A2), [sources:10+](https://www.virustotal.com/gui/search/sources%253A10%252B), [sources:20-](https://www.virustotal.com/gui/search/sources%253A20-), [sources:10+ sources:20-](https://www.virustotal.com/gui/search/sources%253A10%252B%2520sources%253A20-/files) |
| **submitter** | Any file type | Filters the files to be returned according to region of its submitter. [ISO 3166-1-alpha-2 codes are used](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). You can also filter by the submission interface (web/api).
Examples: [submitter:CN ,](https://www.virustotal.com/gui/search/submitter%253ACN/files) [submitter:web submitter:BR](https://www.virustotal.com/gui/search/submitter%253Aweb%2520submitter%253ABR/files) |
| **first_submitter** | Any file type | Filters the files to be returned according to region of the first submitter. [ISO 3166-1-alpha-2 codes are used](http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm). 
Examples: [first_submitter:ua](https://www.virustotal.com/gui/search/first_submitter%253Aua/files) |
| **itw** | Any file type | Return all those files that have been downloaded from a URL containing the literal provided.
Examples: [itw:"www.google.com"](https://www.virustotal.com/gui/search/itw%253A%2522www.google.com%2522/files), [itw:"&product_title="](https://www.virustotal.com/gui/search/itw%253A%2522%2526product_title%253D%2522/files), [itw:"https://sites.google.com/site/llgcyber/WKWK.zip?attredirects=0&d=1"](https://www.virustotal.com/gui/search/itw%253A%2522https%253A%252F%252Fsites.google.com%252Fsite%252Fllgcyber%252FWKWK.zip%253Fattredirects%253D0%2526d%253D1%2522) |
| **metadata** | Any | Filter the files returned according to metadata properties (if applicable). Finds all those files that have some (indexed) field containing the literal(s) provided, including data from:- Exiftool.
- Headers of elf files.
- The Path and GUID of the Portable Executable files.
- Control metadata information of debian packages.
- iTunes File Information, Property List Configuration Information and Mobile Provisioning profile of Iphone Application files.
- File System Property List of dmg files.
- Content metadata of bundled files.
- Taggant packer information.
- Office metadata.

Examples: [metadata:"microsoft inc"](https://www.virustotal.com/gui/search/metadata%3A%22microsoft+inc%22), [metadata:uscourts](https://www.virustotal.com/gui/search/metadata%3A%22uscourts%22),[metadata:"ScanSoft PDF Create"](https://www.virustotal.com/gui/search/metadata%3A%22ScanSoft+PDF+Create%22) , [metadata:"3.2.5 (v119), Copyright © 2003-2015"](https://www.virustotal.com/gui/search/metadata%253A%25223.2.5%2520(v119)%252C%2520Copyright%2520%25C2%25A9%25202003-2015%2522) , [metadata:"Ubuntu Developers <ubuntu-devel-discuss@lists. ubuntu.com>"](https://www.virustotal.com/gui/search/metadata%253A%2522Ubuntu%2520Developers%2520%253Cubuntu-devel-discuss%2540lists.ubuntu.com%253E%2522) |
| **androguard** | Android files: APKs, ODEX, DEX, AXML. | Return all Android files whose Androguard output contains the literal provided.
Examples: [androguard:"com.ON32233.Q2.GgActivity"](https://www.virustotal.com/gui/search/androguard%3A%22com.ON32233.Q2.GgActivity%22), [androguard:"Time Out Bistro"](https://www.virustotal.com/gui/search/androguard%3A%22Time+Out+Bistro%22) |
| **lang** | Portable Executable (PE) and Documents (DOC, DOCX, PPT, ODT, etc.) | In the case of Portable Executables it will return all those files that have at least one resource of the specified language. In the case of documents, it will find all those files whose Exif language property matches the language provided.
Examples:[lang:farsi](https://www.virustotal.com/gui/search/lang%3Afarsi), [lang:"portuguese brazilian"](https://www.virustotal.com/gui/search/lang%3A%22portuguese+brazilian%22), [type:pdf lang:"es-ar"](https://www.virustotal.com/gui/search/type%3Apdf+lang%3A%22es-ar%22)
For PEs these are the available languages: *neutral, invariant, afrikaans, albanian, arabic, armenian, assamese, azeri, basque, belarusian, bengali, bulgarian, catalan, chinese, croatian, czech, danish, divehi, dutch, english, estonian, faeroese, farsi, finnish, french, galician, georgian, german, greek, gujarati, hebrew, hindi, hungarian, icelandic, indonesian, italian, japanese, kannada, kashmiri, kazak, konkani, korean, kyrgyz, latvian, lithuanian, macedonian, malay, malayalam, manipuri, marathi, mongolian, nepali, norwegian, oriya, polish, portuguese, punjabi, romanian, russian, sanskrit, serbian, sindhi, slovak, slovenian, spanish, swahili, swedish, syriac, tamil, tatar, telugu, thai, turkish, ukrainian, urdu, uzbek, vietnamese, gaelic, maltese, maori, rhaeto_romance, saami, sorbian, sutu, tsonga, tswana, venda, xhosa, zulu, esperanto, walon, cornish, welsh, breton, neutral, default, sys default, arabic saudi arabia, arabic iraq, arabic egypt, arabic libya, arabic algeria, arabic morocco, arabic tunisia, arabic oman, arabic yemen, arabic syria, arabic jordan, arabic lebanon, arabic kuwait, arabic uae, arabic bahrain, arabic qatar, azeri latin, azeri cyrillic, chinese traditional, chinese simplified, chinese hongkong, chinese singapore, chinese macau, dutch, dutch belgian, english us, english uk, english aus, english can, english nz, english eire, english south africa, english jamaica, english caribbean, english belize, english trinidad, english zimbabwe, english philippines, french, french belgian, french canadian, french swiss, french luxembourg, french monaco, german, german swiss, german austrian, german luxembourg, german liechtenstein, italian, italian swiss, kashmiri sasia, kashmiri india, korean, lithuanian, malay malaysia, malay brunei darussalam, nepali india, norwegian bokmal, norwegian nynorsk, portuguese, portuguese brazilian, serbian latin, serbian cyrillic, spanish, spanish mexican, spanish modern, spanish guatemala, spanish costa rica, spanish panama, spanish dominican republic, spanish venezuela, spanish colombia, spanish peru, spanish argentina, spanish ecuador, spanish chile, spanish uruguay, spanish paraguay, spanish bolivia, spanish el salvador, spanish honduras, spanish nicaragua, spanish puerto rico, swedish, swedish finland, urdu pakistan, urdu india, uzbek latin, uzbek cyrillic, dutch surinam, romanian, romanian moldavia, russian, russian moldavia, croatian, lithuanian classic, gaelic, gaelic scottish, gaelic manx.
In the case of documents, it is really up to the tool generating the corresponding Exif metadata property what the language can be, hence, you may try searching using the full language name (e.g. Spanish) or its ISO code (e.g. es-ar). |
| **signature** | Portable Executables (PE), Mach-O | Filter the files returned according to sigcheck fields. Finds all those files that have some sigcheck/codesign (PE signature, Apple code signing) field containing the literal(s) provided.
Example: [sigcheck:"google inc"](https://www.virustotal.com/gui/search/sigcheck%3A%22google+inc%22), [sigcheck:"Google Update Setup"](https://www.virustotal.com/gui/search/sigcheck%3A%22Google+Update+Setup%22), [sigcheck:"Thawte Premium Server CA"](https://www.virustotal.com/gui/search/sigcheck%3A%22Thawte+Premium+Server+CA%22) |
| **creation_date**
**generated**
**gen**
**pets**
**petimestamp** | | Filter according to their compilation timestamp.
Example: [creation_date:2018-08-21T18:18:38](https://www.virustotal.com/gui/search/creation_date%253A2018-08-21T18%253A18%253A38) |
| **subspan** | Any file types | Filter Portable Executables according to the difference (in seconds) between the first submission time and the compilation timestamp (submission span). Can be used for attack attribution purposes.
Example: [subspan:100-](https://www.virustotal.com/gui/search/subspan%3A100-) |
| **segment** | Mach-Os | Return executables having a segment with the name provided.
Example: [segment:"__LINKEDIT"](https://www.virustotal.com/gui/search/segment%3A%22__LINKEDIT%22). |
| **section** | Portable Executables (PE), ELFs, Mach-Os | Return executables having a section with the name or md5 hash provided.
Example: [section:".xxx"](https://www.virustotal.com/gui/search/section%3A%22.xxx%22), [sectionmd5:d41d8cd98f00b204e9800998ecf8427e](https://www.virustotal.com/gui/search/sectionmd5%3Ad41d8cd98f00b204e9800998ecf8427e) |
| **imports** | Portable Executables (PE), ELFs, Mach-Os, IPAs, JARs, Java bytecode | Return all those executables importing the given library.
Examples: [imports:"crypt32.dll"](https://www.virustotal.com/gui/search/imports%3A%22crypt32.dll%22) |
| **exports** | Portable Executables (PE), ELFs, Java bytecode | Return all those executables exporting the function with the name provided.
Examples: [exports:"_FormMain"](https://www.virustotal.com/gui/search/exports%3A%22_FormMain%22) |
| **behaviour**
**behavior** | Any file type with behavioral report | Return all those Portable Executables, MacOS or Android APKs whose dynamic behavioral report contains the literal provided.
Examples: [behaviour:"explorer.exe"](https://www.virustotal.com/gui/search/behaviour%3A%22explorer.exe%22), [behaviour:"HKEY_CURRENT_CONFIG\Software\Microsoft\windows\CurrentVersion\Internet Settings\ProxyEnable"](https://www.virustotal.com/gui/search/behaviour%3A%22HKEY_CURRENT_CONFIG%5CSoftware%5CMicrosoft%5Cwindows%5CCurrentVersion%5CInternet+Settings%5CProxyEnable%22), [behaviour:"www.go2000.cn"](https://www.virustotal.com/gui/search/behaviour%3A%22www.go2000.cn%22), [behaviour:"CTF.LBES.MutexDefaultS-1-5-21-1275210071-920026266-1060284298-1003"](https://www.virustotal.com/gui/search/behaviour%3A%22CTF.LBES.MutexDefaultS-1-5-21-1275210071-920026266-1060284298-1003%22) |
| **behavior_files**
**behaviour_files** | Any file type with behavioral report | Changes related to the filesystem.
Example: [behaviour_files:Crack](https://www.virustotal.com/gui/search/behaviour_files%253ACrack/files) |
| **behavior_processes*
**behaviour_processes** | Any file type with behavioral report | *Related to any process fields such as processes_killed, processes_terminated, command_executions, injected_processes*
Example: [*behavior_processes:"calc.exe"*](https://www.virustotal.com/gui/search/behavior_processes%253A%2522calc.exe%2522/files) |
| **behavior_injected_processes**
**behaviour_injected_processes** | Any file type with behavioral report | *Related to injected processes.*
Example:*[behaviour_injected_processes:calc.exe](https://www.virustotal.com/gui/search/behaviour_injected_processes%253Acalc.exe/files)* |
| **behavior_created_processes**
**behaviour_created_processes** | Any file type with behavioral report | *Related to created processes.*
Example:*[behaviour_created_processes:cmd.exe](https://www.virustotal.com/gui/search/behaviour_created_processes%253Acmd.exe/files)* |
| **behavior_registry**
**behaviour_registry** | Any file type with behavioral report | *Modifications related to the Windows registry.*
Example:*[behavior_registry:dc971ee5-44eb-4fe4-ae2e-b91490411bfc](https://www.virustotal.com/gui/search/behavior_registry%253Adc971ee5-44eb-4fe4-ae2e-b91490411bfc/files)* |
| **behavior_services**
**behaviour_services** | Any file type with behavioral report | *Observations related to services and daemons.*
Example:[behavior_services:TheService](https://www.virustotal.com/gui/search/behavior_services%253ATheService/files) |
| **behavior_tags**
**behaviour_tags** | Any file type with behavioral report | *Tags generated by sandboxes ([Full list of behaviours_tags](/docs/list-behaviour-tag-modifiers)).*
Example:[behavior_tags:tag](https://www.virustotal.com/gui/search/behaviour_tags%253Adetect_debug_environment/files) |
| **behavior_network**
**behaviour_network** | Any file type with behavioral report | *Related to networks.*
Examples:*[behaviour_network:www.goooo*](https://www.virustotal.com/gui/search/%253Awww.goooo*/files) [behaviour_network:update.iobit.com/dl/](https://www.virustotal.com/gui/search/%253Aupdate.iobit.com%252Fdl%252F/files)* |
| **behash** | Any file type with behavioral report | *Behavior Similarity Hashes.*
Examples:*[behash:d4e0fb08ee8b4e9e12641a14d5dc04ae](https://www.virustotal.com/gui/search/behash%253Ad4e0fb08ee8b4e9e12641a14d5dc04ae/files)* |
| **sandbox_name** | | *search for specific sandbox name:*
Example:[*sandbox_name:VirusTotal*](https://www.virustotal.com/gui/search/sandbox_name%253AVirusTotal/files)
List of sandboxes:
- bitdam_atp
- c2ae
- cyber_adapt
- das_security_orcas
- dr.web_vxcube
- elf_digest
- f_secure_sandbox
- lastline
- malwation
- microsoft_sysinternals
- nsfocus_poma
- os_x_sandbox
- qianxin_reddrip
- reaqta_hive
- rising_moves
- sangfor_zsand
- secneurx
- secondwrite
- sndbox
- tencent_habo
- venuseye_sandbox
- virustotal_androbox
- virustotal_box_of_apples
- virustotal_cuckoofork
- virustotal_droidy
- virustotal_jsbox
- virustotal_jujubox
- virustotal_observer
- virustotal_r2dbox
- vmray
- yomi_hunter
- zenbox
- zenbox_android
- zenbox_linux |
| **traffic** | Packet Captures (PCAPs) | Searches within a limited subset of URLs, host names and IP addresses observed in the capture file, such that you may filter, for example, network traces containing a given domain.
Example: [traffic:"google.com"](https://www.virustotal.com/gui/search/traffic%3A%22google.com%22) |
| **similar-to** | Portable Executables (PE), PDFs, MS Office documents, Flash SWFs, RTFs. | Return all those Portable Executables that are structurally similar to the one provided.
Examples: [similar-to:7f71a98e67c61d7a0786fcfcb2c884b8acd26f5378dab5a786ae8a38d6b7b87e](https://www.virustotal.com/gui/search/similar-to%3A7f71a98e67c61d7a0786fcfcb2c884b8acd26f5378dab5a786ae8a38d6b7b87e), [similar-to:df9772a80d3da048b928623c3819dec5defb7840](https://www.virustotal.com/gui/search/similar-to%3Adf9772a80d3da048b928623c3819dec5defb7840), [similar-to:19b86fe81df05de2b4207e8eb0c3aa40](https://www.virustotal.com/gui/search/similar-to%3A19b86fe81df05de2b4207e8eb0c3aa40) |
| **ssdeep** | Any file type | Return all those files that are similar to the one having the ssdeep hash provided.
Example: [ssdeep:"24576:KrKqlGCPcJKwybUDwEZZODYmR9G+gnbkk6XRJfe3DqYO/KpLwFfngWX4VmJPakl:KrKo4ZwCOnYjVmJPaO"](https://www.virustotal.com/gui/search/ssdeep%253A%252224576%253AKrKqlGCPcJKwybUDwEZZODYmR9G%2520gnbkk6XRJfe3DqYO%252FKpLwFfngWX4VmJPakl%253AKrKo4ZwCOnYjVmJPaO%252040%2522) |
| **imphash** | Portable Executables (PE) | Return all those Portable Executables with the given [import hash](https://www.mandiant.com/blog/tracking-malware-import-hashing/), can be used to identify samples belonging to the same family.
Example: [imphash:7fa974366048f9c551ef45714595665e](https://www.virustotal.com/gui/search/imphash%3A7fa974366048f9c551ef45714595665e) |
| **vhash** | Portable Executables (PE) | Return all those files with the given vhash provided.
Example: [vhash:01603e0f7d501013z11z39z15z1011z1011z19z](https://www.virustotal.com/gui/search/vhash%253A01603e0f7d501013z11z39z15z1011z1011z19z/files) |
| **telfhash** | Portable Executables (PE) | Return all those files with the given [telfhash](https://github.com/trendmicro/telfhash) provided.
Example:[telfhash:"t12ab138722e7558f8b7f08402425a7620ce39e027259439b71ef2b454f7f2c429b6ad7a 50"](https://www.virustotal.com/gui/search/telfhash%253A%2522t12ab138722e7558f8b7f08402425a7620ce39e027259439b71ef2b454f7f2c429b6ad7a%252050%2522/files) |
| **content** | Any file type | Search for string or binary content within a file. The syntax is similar to YARA content strings.
**One caveat is that content search queries cannot be sorted.**
Examples:[content:"Hello World!"](https://www.virustotal.com/gui/search/content%3A%22Hello%20World!%22/files), [content:{CAFEBABE}](https://www.virustotal.com/gui/search/content%253A%257Bcafebabe%257D/files) |
| **contacted_ip** | Any file type | Return all those files that have contacted with the IP/Subnet provided.
Examples:[contacted_ip:162.158.0.0/15](https://www.virustotal.com/gui/search/contacted_ip%253A162.158.0.0%252F15) |
| **have** | Any file type | Filter the resources which report contains information from the selected fields.
Examples: [have:embedded_domains](https://www.virustotal.com/gui/search/have%253A%2520embedded_domains/files) [have:embedded_urls](https://www.virustotal.com/gui/search/have%253A%2520embedded_domains/files) [have:behaviour](https://www.virustotal.com/gui/search/have%253A%2520embedded_urls/files)
Available fields: *androguard, authentihash, behavior, behavior_files, behavior_network, behavior_processes, behavior_registry, behavior_services, behaviour, behaviour_files, behaviour_network, behaviour_processes, behaviour_created_processes  , behaviour_injected_processes, behaviour_registry, behaviour_services, bundled_file, bundled_files, capability_tag, capability_tags, carbonblack_parents, ciphered_parents, comment, comments, compressed_parents, contacted_domain, contacted_domains, contacted_ip, contacted_ips, contacted_url, contacted_urls, creation_date, crowdsourced_ids, crowdsourced_yara_rule, dropped_file, dropped_files, email_attachment, email_attachments, email_parents, embedded_domains, embedded_ips, embedded_urls, entry_point, ep, evtx, execution_parents, exports, gen, generated, imphash, imports, in_the_wild, itw, itw_domain, itw_domains, itw_url, itw_urls, ja3_digest, ja3_digests, lang, language, main_icon_dhash, main_icon_md5, malware_config, memdump, metadata, netguid, overlay_children, overlay_parents, packer, packers, parent, parents, pcap, pcap_children, pcap_parents, peresource, pe_resource_children, pe_resource_parents, permhash, petimestamp, pets, sandbox_name, scan_timeout, screenshot, screenshots, section, sectionmd5, sections, segment, segments, sigcheck, sigma_rule, sigma_rules, signature, signatures, tag, tags, tlsh, traffic, urls_for_embedded_js* |
| **comment** | Any file type | Search for string in the comments section:
Example:[comment:"#math_entropy_close_8"](https://www.virustotal.com/gui/search/comment%253A%2522%2523math_entropy_close_8%2522/files) |
| **comment_author** | Any file type | Search for resources that have any comment from the specific user.
Example:[comment_author:javilinux](https://www.virustotal.com/gui/search/comment_author%253Ajavilinux/files) |
| **crowdsourced_yara_rule** | Any file type | Filters the files that match a crowdsourced YARA rule. You can search either using a rule’s name or using both ruleset’s ID and rule’s name. 
Examples: [crowdsourced_yara_rule:Imphash_Malware_2_TA17_293A](https://www.virustotal.com/gui/search/crowdsourced_yara_rule%253AImphash_Malware_2_TA17_293A) [crowdsourced_yara_rule:Nanocore](https://www.virustotal.com/gui/search/crowdsourced_yara_rule%253ANanocore) [crowdsourced_yara_rule:000554a6bb|SUSP_XORed_URL_in_EXE](https://www.virustotal.com/gui/search/crowdsourced_yara_rule%253A000554a6bb%257CSUSP_XORed_URL_in_EXE/files) [crowdsourced_yara_rule:0024b0b651|WinLock](https://www.virustotal.com/gui/search/crowdsourced_yara_rule%253A0024b0b651%257CWinLock/files) |
| **crowdsourced_ids** | Any file type | Filters the files that match a crowdsourced IDS rule. You can search either using a rule&#x27;s name or ruleset&#x27;s ID
Examples: [crowdsourced_ids:"MALWARE-CNC Win.Trojan.Occamy variant outbound connection"](https://www.virustotal.com/gui/search/crowdsourced_ids:%22MALWARE-CNC%2520Win.Trojan.Occamy%2520variant%2520outbound%2520connection%22/files) [crowdsourced_ids:48084](https://www.virustotal.com/gui/search/crowdsourced_ids%253A48084/files) |
| **sigma_critical**
**sigma_high**
**sigma_medium**
**sigma_low** | Any file type | Number of matched sigma rules of the different levels (critical/high/medium/low).
Examples: [sigma_critical:1+](https://www.virustotal.com/gui/search/sigma_critical%253A1%252B/files) [sigma_high:1+](https://www.virustotal.com/gui/search/sigma_high%253A1%252B/files) [sigma_medium:1+](https://www.virustotal.com/gui/search/sigma_medium%253A1%252B/files) [sigma_low:1+](https://www.virustotal.com/gui/search/sigma_low%253A1%252B/files) |
| **sigma_rule** | Any file type | Filters the files that match a Sigma rule. 
Examples: [sigma_rule:30fcf3924a898a9d1747e89068ab2990c77ca3914a94aa78466d28a9d9da32bb](https://www.virustotal.com/gui/search/sigma_rule%253A30fcf3924a898a9d1747e89068ab2990c77ca3914a94aa78466d28a9d9da32bb/filesv) |
| **engines** | Any file type | Filters the files according to Malware family name on the antivirus results (no matter which particular engine produced the output).
Example: ["Trojan.Isbar"](https://www.virustotal.com/gui/search/engines%253A%2522Trojan.Isbar%2522/files) 
You can also filter files according to specific engines detections, check the details at: [Identifying files according to antivirus detections](/docs/list-file-engines) |
| **min_engines_{verdict}** | Any file type | Filters files based on the number of engines providing an specific verdict.
Example: [min_engines_banker:5](https://www.virustotal.com/gui/search/min_engines_banker%253A5/files) [min_engines_emotet:10](https://www.virustotal.com/gui/search/min_engines_emotet%253A10) |
| **peresource** | Portable Executables (PE) | Filters the files according to the hash associated with the contained resource.
Example: [peresource:3de7cf1214054541d9b57cc2ab8d5e85516a0ac274b9d9213a07cd6e8e70a138](https://www.virustotal.com/gui/search/peresource%253A3de7cf1214054541d9b57cc2ab8d5e85516a0ac274b9d9213a07cd6e8e70a138/files) |
| **attack_technique** | Any file type | Filters the files according to the Mitre Att&ck technique.
Example: [attack_technique:T1055](https://www.virustotal.com/gui/search/attack_technique%253AT1055/files) |
| *attack_tactic** | Any file type | Filters the files according to the Mitre Att&ck tactic.
Example: [attack_tactic:TA0003](https://www.virustotal.com/gui/search/attack_tactic%253ATA0003/files) |
| **trid** | Any file type | [TrID](http://mark0.net/soft-trid-e.html)is a utility designed to identify file types from their binary signatures. It may give several detections, ordered by higher to lower probability of file format identification (given as percentage).
Example: [trid:"InstallShield setup"](https://www.virustotal.com/gui/search/trid%253A%2522InstallShield%2520setup%2522/files) |
| **tlsh** | Any file type | It is a hash used by[Trend Micro](https://github.com/trendmicro/tlsh) which can be used for similarity comparisons.
Example: [tlsh:T1F0B12349F49722D219B3707D3BBF920476A6454F0D48CD44742D7984AF1CF2BB8BA2CA](https://www.virustotal.com/gui/search/tlsh%253AT1F0B12349F49722D219B3707D3BBF920476A6454F0D48CD44742D7984AF1CF2BB8BA2CA/files) |
| **permhash** | APKs, CRXs and their manifests | Filter APKs, CRXs and their manifests based on their permhash.
Example: [permhash:9126f12ce5d0e610bb74da304b6bd0cd648428e59e74326fbd5affaa70d2257e](https://www.virustotal.com/gui/search/permhash%253A9126f12ce5d0e610bb74da304b6bd0cd648428e59e74326fbd5affaa70d2257e/files) |
| **detectiteasy** | MSDOS, PE, ELF, MACH and Binary | It is a program for determining types of files.
Example: [detectiteasy:"Compiler: Microsoft Visual C/C++ (2015 v.14.0)"](https://www.virustotal.com/gui/search/detectiteasy%253A%2522Compiler%253A%2520Microsoft%2520Visual%2520C%252FC%252B%252B%2520(2015%2520v.14.0)%2522/files) |
| **malware_config** | Any file type | Filter files according to the malware configuration.
Example:[malware_config:dcscmin\imdcsc.exe](https://www.virustotal.com/gui/search/malware_config%253Adcscmin%255C%255Cimdcsc.exe) |
| **codeinsight** | Any file type | Searches among all the Sec-*PaLM* AI analyses of the file.
Example: [codeinsight:keylogger](https://www.virustotal.com/gui/search/codeinsight%253Akeylogger/files) |
| **crowdsourced_ai_analysis** | Any file type | Searches among all the AI analyses of the file.
Example: [crowdsourced_ai_analysis:"is malicious"](https://www.virustotal.com/gui/search/crowdsourced_ai_analysis%253A%2522is%2520malicious%2522/files) |
| **crowdsourced_ai_verdict** | Any file type | Searches among all the AI verdicts of the file.
Example: [crowdsourced_ai_verdict:benign](https://www.virustotal.com/gui/search/crowdsourced_ai_verdict%253Abenign/files) |
| **xxx_ai_analysis** | Any file type | Searches a specific source&#x27;s AI analysis.
 Right now **`xxx` can be `hispasec` and `nics`. 
Example: [nics_ai_analysis:"is malicious"](https://www.virustotal.com/gui/search/nics_ai_analysis%253A%2522is%2520malicious%2522/files) |
| xxx_ai_verdict** | Any file type | Searches a specific source&#x27;s AI verdict.
Example: [hispasec_ai_verdict:benign](https://www.virustotal.com/gui/search/hispasec_ai_verdict%253Abenign/files) |
| **threat_actor**
**related_actor** | Any file type | Searches for IoCs which have that related threat actor. 
Example: [threat_actor:"Lazarus Group"](https://www.virustotal.com/gui/search/threat_actor%253A%2522Lazarus%2520Group%2522/files) |
| **behaviour_signature**
**behavior_signature** | Any file type | Search for behavior signature matches on rule names and descriptions.. 
Example: [behaviour_signature:"linking/runtime-linking"](https://www.virustotal.com/gui/search/behaviour_signature%253A%2522linking%252Fruntime-linking%2522/files) [behaviour_signature:"create process on Windows"](https://www.virustotal.com/gui/search/behaviour_signature%253A%2522create%2520process%2520on%2520Windows%2522) |
| **mbc** | Any file type | Search by MBC ID. 
Example: [mbc:C0002](https://www.virustotal.com/gui/search/mbc%253AC0002/files) |
| **magika** | Any file type | Search by magika file type. 
Example: [magika:pebin](https://www.virustotal.com/gui/search/magika%253Apebin/files) |

**Updated about 2 months ago