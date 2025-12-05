---
url: "https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/"
title: "How to Configure Microsoft Windows 7 to Use TLS Version 1.2 | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Security](https://docs.cpanel.net/knowledge-base/security/)
4. How to Configure Microsoft Windows 7 to Use TLS Version 1.2


[security](https://docs.cpanel.net/tags/security/) [email](https://docs.cpanel.net/tags/email/) [support](https://docs.cpanel.net/tags/support/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#overview)

* * *

[Create registry keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#create-registry-keys)

* * *

[Install Windows update](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#install-windows-update)

* * *

[Add a registry key for Windows HTTP services](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#add-a-registry-key-for-windows-http-services)

* * *

[Add a registry key for the TLS directories](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#add-a-registry-key-for-the-tls-directories)

* * *

[Apply the settings.](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#apply-the-settings)

* * *

[Installation scripts](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#installation-scripts)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#overview)

* * *

[Create registry keys](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#create-registry-keys)

* * *

[Install Windows update](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#install-windows-update)

* * *

[Add a registry key for Windows HTTP services](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#add-a-registry-key-for-windows-http-services)

* * *

[Add a registry key for the TLS directories](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#add-a-registry-key-for-the-tls-directories)

* * *

[Apply the settings.](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#apply-the-settings)

* * *

[Installation scripts](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#installation-scripts)

* * *

## How to Configure Microsoft Windows 7 to Use TLS Version 1.2

Last modified: _2022 December 2_

* * *

## Overview

This document explains how to configure your Microsoft Windows® 7 workstation and Microsoft Outlook® 2010 mail clients to use [Transport Layer Security (TLS) protocol version 1.2](https://tools.ietf.org/html/rfc5246).

Important:

- We support [TLS version 1.2](https://tools.ietf.org/html/rfc5246).

  - We strongly recommend that you enable TLSv1.2 on your server.
- The instructions in this document **only** pertain to servers that run the Windows 7 operating system.
- We **strongly** recommend that you do **not** adjust the cipher and protocol settings for the Exim and Dovecot services on Windows 7. Servers on this operating system fail PCI compliance scans because of unpatched security vulnerabilities that exist in the following mail clients:

  - Outlook 2007.
  - Outlook 2010.

## Create registry keys

### Install Windows update

You **must** download and install the `KB3140245` Windows update from the [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/search.aspx?q=kb3140245). This update will create the registry key paths in which you will create new registry keys. These registry keys will allow you to enable TLSv1.2 on your server.

After you download and install the update, you **must** restart your workstation for the changes to take effect.

### Add a registry key for Windows HTTP services

To add a registry key for Windows HTTP services, perform the following steps:

1. From the Windows _Start_ menu, enter `regedit.exe` in the _Search_ text box.
2. Click _regedit.exe_ to open the _Registry Editor_.
3. Navigate to the following registry path:



```perl
     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings
```

4. Select the `WinHttp` key.
5. From the Menu bar, click _Edit_, select _New_, and click _DWORD (32-bit)_ Value.






Note:





On 64-bit systems, click _QWORD (64-bit) Value_.

6. Enter `DefaultSecureProtocols` as the _DWORD_ value’s name.
7. Right-click the file and select _Modify_ from the _Context_ menu.
8. Enter `A00` in the _Value Data_ text box and click _OK_.






Important:





If your workstation runs on a 64-bit system, you must also perform steps 5-8 for the following key:
`HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp`


### Add a registry key for the TLS directories

To add registry keys for TLS versions 1.1 and 1.2, perform the following steps:

1. Navigate to the following registry path:



```perl
     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.1
```

2. Select the `Client` key.
3. From the Menu bar, click _Edit_, select _New_, and click _DWORD (32-bit) Value_.




Remember:





On 64-bit systems, click _QWORD (64-bit) Value_.

4. Enter `DisabledByDefault` as the DWORD value’s name.
5. Right-click the file and select _Modify_ from the _Context_ menu.
6. Enter `0` in the _Value Data_ text box and click _OK_.
7. Navigate to the TLS1.2 registry path and open the _Client_ key.
8. Repeat steps 2-6 and click _OK_.

### Apply the settings.

After you modify your registry keys, you **must** restart your workstation to apply the registry settings. When your workstation restarts, create a test email account in Microsoft Outlook and configure the following settings in the _Advanced_ section of Microsoft Outlook’s _Internet E-Mail Settings_ interface:

- Enter `993` in the Incoming Server (IMAP) text box or 995 in the Incoming Server (POP3) text box.
- Enter `465` in the Outgoing Server (SMTP) text box.
After you finish, click _OK_. Your Microsoft Outlook account will now successfully connect to your cPanel server’s mail services.

### Installation scripts

We created two scripts that will automatically perform the actions that this document describes. To use these scripts, perform the following steps:

1. Open the Windows _PowerShell_ application.

2. Navigate to the directory of you choice.

3. Create the `install-kb.ps1` and `tls-reg-edit.ps1` files.

4. Open the `install-kb.ps1` file with a text editor and add the following information:








[Click to view...](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#click-to-view---1764175698215850494)







Note:




This script downloads and installs the KB3140245 Windows update.










|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>``` | ```go<br>Import-Module BitsTransfer<br>$arch=(Get-WmiObject -Class Win32_operatingsystem).Osarchitecture<br>If ($arch -eq "32-bit") {<br>    $kbUrl32 = "http://download.windowsupdate.com/c/msdownload/update/software/updt/2016/04/windows6.1-kb3140245-x86_cdafb409afbe28db07e2254f40047774a0654f18.msu"<br>    $kb32 = "windows6.1-kb3140245-x86_cdafb409afbe28db07e2254f40047774a0654f18.msu"<br>    Start-BitsTransfer -source $kbUrl32<br>    wusa $kb32 /log:install.log<br>}<br>Else {<br>    $kbUrl64 = "http://download.windowsupdate.com/c/msdownload/update/software/updt/2016/04/windows6.1-kb3140245-x64_5b067ffb69a94a6e5f9da89ce88c658e52a0dec0.msu"<br>    $kb64 = "windows6.1-kb3140245-x64_5b067ffb69a94a6e5f9da89ce88c658e52a0dec0.msu"<br>    Start-BitsTransfer -source $kbUrl64<br>    wusa $kb64 /log:install.log<br>}<br>``` |

5. Open the `tls-reg-edit.ps1` file with a text editor and add the following information:








[Click to view...](https://docs.cpanel.net/knowledge-base/security/how-to-configure-microsoft-windows-7-to-use-tls-version-1.2/#click-to-view---1764175698223587818)







Note:





This script creates registry keys in the following files:











|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp<br>HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp<br>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.1<br>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2<br>``` |















|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>45<br>46<br>47<br>48<br>49<br>50<br>51<br>52<br>53<br>54<br>``` | ```go<br>$arch=(Get-WmiObject -Class Win32_operatingsystem).Osarchitecture<br>$reg32bWinHttp = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp"<br>$reg64bWinHttp = "HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp"<br>$regWinHttpDefault = "DefaultSecureProtocols"<br>$regWinHttpValue = "0x00000a00"<br>$regTLS11 = "HKLM:\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.1\Client"<br>$regTLS12 = "HKLM:SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client"<br>$regTLSDefault = "DisabledByDefault"<br>$regTLSValue = "0x00000000"<br>Clear-Host<br>Write-Output "Creating Registry Keys...`n"<br>Write-Output "Creating registry key $reg32bWinHttp\$regWinHttpDefault with value $regWinHttpValue"<br>IF(!(Test-Path $reg32bWinHttp)) {<br>    New-Item -Path $reg32bWinHttp -Force | Out-Null<br>    New-ItemProperty -Path $reg32bWinHttp -Name $regWinHttpDefault -Value $regWinHttpValue -PropertyType DWORD -Force | Out-Null<br>}<br>ELSE {<br>    New-ItemProperty -Path $reg32bWinHttp -Name $regWinHttpDefault -Value $regWinHttpValue -PropertyType DWORD -Force | Out-Null<br>}<br>IF($arch -eq "64-bit") {<br>    Write-Output "Creating registry key $reg64bWinHttp\$regWinHttpDefault with value $regWinHttpValue"<br>    IF(!(Test-Path $reg64bWinHttp)) {<br>        New-Item -Path $reg64bWinHttp -Force | Out-Null<br>        New-ItemProperty -Path $reg64bWinHttp -Name $regWinHttpDefault -Value $regWinHttpValue -PropertyType DWORD -Force | Out-Null<br>    }<br>    ELSE {<br>        New-ItemProperty -Path $reg64bWinHttp -Name $regWinHttpDefault -Value $regWinHttpValue -PropertyType DWORD -Force | Out-Null<br>    }<br>}<br>Write-Output "Creating registry key $regTLS11\$regTLSDefault with value $regTLSValue"<br>IF(!(Test-Path $regTLS11)) {<br>    New-Item -Path $regTLS11 -Force | Out-Null<br>    New-ItemProperty -Path $regTLS11 -Name $regTLSDefault -Value $regTLSValue -PropertyType DWORD -Force | Out-Null<br>    }<br>ELSE {<br>    New-ItemProperty -Path $regTLS11 -Name $regTLSDefault -Value $regTLSValue -PropertyType DWORD -Force | Out-Null<br>}<br>Write-Output "Creating registry key $regTLS12\$regTLSDefault with value $regTLSValue"<br>IF(!(Test-Path $regTLS12)) {<br>    New-Item -Path $regTLS12 -Force | Out-Null<br>    New-ItemProperty -Path $regTLS12 -Name $regTLSDefault -Value $regTLSValue -PropertyType DWORD -Force | Out-Null<br>    }<br>ELSE {<br>    New-ItemProperty -Path $regTLS12 -Name $regTLSDefault -Value $regTLSValue -PropertyType DWORD -Force | Out-Null<br>}<br>Write-Output "`nComplete!"<br>``` |

6. Run the scripts from the directory in which you saved the files, for example:






|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>Set-ExecutionPolicy Bypass -Scope Process ; .\install-kb.ps1<br>Set-ExecutionPolicy Bypass -Scope Process ; .\tls-reg-edit.ps1<br>``` |

7. Restart your workstation for the changes to take effect.


#### Additional Documentation

* * *

- [How to Update Ciphers and TLS Protocols](https://docs.cpanel.net/knowledge-base/security/how-to-update-ciphers-and-tls-protocols/)
- [ModSecurity®](https://docs.cpanel.net/cpanel/security/modsecurity/)
- [SSH Access](https://docs.cpanel.net/cpanel/security/ssh-access/)
- [SSL/TLS](https://docs.cpanel.net/cpanel/security/ssl-tls/)
- [SSL/TLS Wizard](https://docs.cpanel.net/cpanel/security/ssl-tls-wizard/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×