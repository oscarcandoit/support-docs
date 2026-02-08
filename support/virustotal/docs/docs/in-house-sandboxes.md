---
title: "In-house Sandboxes - behavioural analysis products"
source: "https://docs.virustotal.com/docs/in-house-sandboxes"
scraped_at: "2026-02-08T06:19:21.091Z"
---

VirusTotal detonates files in virtual controlled environments to trace their activities and communications, producing detailed reports including opened, created and written files, created mutexes, registry keys set, contacted domains, URL lookups, etc. This execution activity is indexed in a faceted fashion in order to allow for instantaneous lookups.

Dynamic analysis capabilities do not only focus on execution traces but also on running static+dynamic analysis plugins to decode RAT malware configs and extract network infrastructure that may have not been observed during real time execution.

VirusTotal integrates external behavioural engines sandboxes. The list of external partners can be found [here](/docs/contributors#behavioral-analysis--sandbox-products).

Find below a description about our in-house sandboxes:

# **Box Of Apples**[](#box-of-apples)

MacOS x86 sandbox hooking system calls.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MacOS | MachO, DMG, PKG,  ISO, shell scripts, apple script, Zipped APP | Yes | Yes | Yes | No | No | No |

# **OS X Sandbox**[](#os-x-sandbox)

MacOS x86 11.6 Sandbox.

**🚧
### Deprecated[](#deprecated)

No new behavior reports will be generated. Existing reports will remain available.

| Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MacOS 11.6 | MachO, DMG, PKG, ISO | Yes | Yes | Yes | No | Yes | No |

# **VirusTotal Droidy**[](#virustotal-droidy)

VirusTotal Android Sandbox. The API logging is inspired by droidmon.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Android 4.4 | Android application (APK) | No | Yes | Yes | No | No | No |

# **VirusTotal Jujubox**[](#virustotal-jujubox)

Windows dynamic analysis sandbox. Frida is used for hooking and tracking Windows API calls.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows 7 | EXE, DLL, MSI, CHM, BAT,  CRX, PDF,  VBS, MS Office Documents, Powershell | Yes | Yes | Yes | No | No | Yes |

# **VirusTotal Observer**[](#virustotal-observer)

Windows sysmon based sandbox.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows 7 | EXE, DLL, MSI, CHM, BAT, CRX, PDF, VBS, MS Office Documents, Powershell | No | No | No | No | No | No |

# **VirusTotal R2DBox**[](#virustotal-r2dbox)

R2DBox is an Android 8 sandbox which uses Frida to make the hooks. It  runs on GCE machines.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Android 8 | Android application (APK) | Yes | Yes | Yes | No | No | No |

# **Zenbox**[](#zenbox)

Windows 10 Sandbox. It provides MITRE matrix, signature detection and memory dumps. Runs on GC VmwareEngine.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows 10 | EXE, DLL, MSI, CHM, BAT,  CRX, PDF,  VBS, MS Office Documents, Powershell | Yes | Yes | Yes | Yes | Yes | Yes |

ZIP files without password will be processed executing the first binary found within the ZIP.

ZIP files with password will be processed only if  the password is "infected".

# **Zenbox Android**[](#zenbox-android)

Supports APKs up to Android 13 (SDK 33).

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Android 13 | Android application (APK) | Yes | Yes | Yes | No | Yes | No |

# **Zenbox Linux**[](#zenbox-linux)

Supports X86,  X86_64, ARM, MIPS.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs** (EVTX) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ubuntu 20.04 | ELF, Scripts, DEB | Yes | Yes | Yes | No | Yes | No |

ZIP files without password will be processed executing the first binary found within the ZIP.

ZIP files with password will be processed only if  the password is "infected".

# **Zenbox macOS**[](#zenbox-macos)

MacOS Sandbox. Supports X86,  X86_64, ARM.

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MacOS 13 | MachO, DMG, PKG | Yes | Yes | Yes | No | Yes | No |

# **CAPA**[](#capa)

Extraction of behaviour capabilities with [Mandiant CAPA](https://github.com/mandiant/capa)

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows/Linux | EXE, ELF, DLLS | No | Yes | No | No | Yes | No |

# **CAPE Sandbox**[](#cape-sandbox)

Windows Sandbox using [CAPEv2](https://github.com/kevoreilly/CAPEv2)

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows 10 | EXE, DLL, MSI, CHM, BAT,  CRX, PDF,  VBS, MS Office Documents, Powershell | Yes (with TLSdump) | Yes | Yes | Yes | Yes | Yes |

# **CAPE Linux**[](#cape-linux)

Linux Sandbox using [CAPEv2](https://github.com/kevoreilly/CAPEv2)

| **Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Sysmon Logs** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ubuntu 22.04 | ELF, Scripts | Yes | Yes | Yes | Yes | Yes | Yes |

# **Cuckoofork**[](#cuckoofork)

Windows XP Sandbox.

**🚧
### Deprecated[](#deprecated-1)

No new behavior reports will be generated. Existing reports will remain available.

| Operating System** | **Type of file** | **Pcap** | **HTML Report** | **Screenshots** | **Memory Dumps** | **MITRE Signatures** | **Event Logs (EVTX)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Windows XP | EXE, DLL, MSI, CHM, BAT,  CRX, PDF,  VBS, MS Office Documents, Powershell | Yes | No | No | No | No | No |

**Updated 18 days ago