---
url: "https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/"
title: "How to Set Up a Third-Party Package Repository with GPG Signatures | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#main-content)

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
3. [Third Party](https://docs.cpanel.net/knowledge-base/third-party/)
4. How to Set Up a Third-Party Package Repository with GPG Signatures


[rpms](https://docs.cpanel.net/tags/rpms/) [gnupg](https://docs.cpanel.net/tags/gnupg/)

#### Table of Contents

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#overview)

* * *

[Set up a third-party repository with GPG signatures](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#set-up-a-third-party-repository-with-gpg-signatures)

* * *

[Generate sha512 digest files](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#generate-sha512-digest-files)

* * *

[Generate a GPG key pair](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#generate-a-gpg-key-pair)

* * *

[Sign the sha512 digest file](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#sign-the-sha512-digest-file)

* * *

[Add your key to the vendor keystore](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#add-your-key-to-the-vendor-keystore)

* * *

[Add the repository to the local versions file](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#add-the-repository-to-the-local-versions-file)

* * *

[Repositories without GPG signatures](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#repositories-without-gpg-signatures)

* * *

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#table-of-contents-toggle)

[Overview](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#overview)

* * *

[Set up a third-party repository with GPG signatures](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#set-up-a-third-party-repository-with-gpg-signatures)

* * *

[Generate sha512 digest files](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#generate-sha512-digest-files)

* * *

[Generate a GPG key pair](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#generate-a-gpg-key-pair)

* * *

[Sign the sha512 digest file](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#sign-the-sha512-digest-file)

* * *

[Add your key to the vendor keystore](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#add-your-key-to-the-vendor-keystore)

* * *

[Add the repository to the local versions file](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#add-the-repository-to-the-local-versions-file)

* * *

[Repositories without GPG signatures](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#repositories-without-gpg-signatures)

* * *

## How to Set Up a Third-Party Package Repository with GPG Signatures

Last modified: _2024 February 22_

* * *

## Overview

Important:

Third-party customers who want to create their own repositories **must** create digest files and GnuPG (GPG) signatures as well as [the necessary package files](https://docs.cpanel.net/knowledge-base/rpm-versions/target-settings/).

Most of cPanel’s software dependencies ship as package archives. These packages download from the WebPros International, LLC repository during installations and updates. The repository is a collection of packages that exist on an accessible HTTP server. The `url_templates` field in [the `rpm.versions` file](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/) determines the location of the packages on this server.

Each package directory contains a `sha512` digest file. This file lists the appropriate digest values for each of the directory’s packages. The WebPros International, LLC update system uses the digest file to ensure the integrity of the downloaded files.

The system also creates a GPG signature with WebPros International, LLC’s private keys. It sends the signature with each of the digest files to make sure the files are legitimate. The signature also prevents any compromises on the download mirrors.

## Set up a third-party repository with GPG signatures

### Generate sha512 digest files

In each directory in the repository that contains package files, you **must** create a `sha512` digest file.

For example, consider the following directory, which contains these two package files:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>3<br>4<br>``` | ```go<br>root@httpupdate1:/home/www/thirdparty_pkg/11.92/centos/7/x86_64# ls -l<br>total 6876<br>-rw-r--r-- 1 tux tux 6191460 Aug 12 18:57 cpanel-angularjs-1.4.3-1.cp1154.noarch.rpm<br>-rw-r--r-- 1 tux tux 843872 Sep 11 17:33 cpanel-angularjs-1.4.4-1.cp1154.noarch.rpm<br>``` |

To create the digest file for this directory, run the following command:

```perl
/home/www/thirdparty_pkg/11.92/centos/7/x86_64# sha512sum *.rpm > sha512
```

This file will contain a list of the package file digests:

|     |     |
| --- | --- |
| ```<br>1<br>2<br>``` | ```go<br>01fe3fefade91693d2e03cd2f2a2cde7613e54586e994f3477658eefbe24c6ba0347129286789ad9fc8f1aa3f32859896aed16d39055031808eea057557691d2 cpanel-angularjs-1.4.3-1.cp1154.noarch.rpm<br>f91a02c9fd3ef6551809ebb23e726cbe460fa8c334f592f53c773cbccc1b0cede9d139386b7e60b91bf25cd640ce9ecfd948c077bac12d2d8e069ca08a257da2 cpanel-angularjs-1.4.4-1.cp1154.noarch.rpm<br>``` |

Note:

On servers running the Ubuntu® operating system, replace the `.rpm` filenames with `.deb` package names.

### Generate a GPG key pair

After you create the digest file, create a GPG key pair in order to sign it. We recommend that you use the GPG command line utilities to generate the GPG key pair.

- We **strongly** recommend that you generate this key on a non-public system to protect the private key’s security.

- For more information, read the [GnuPG documentation](https://www.gnupg.org/documentation/index.html).


For example, to create a GPG key pair, you might run the following commands:

[Click to view...](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#click-to-view---1764175698521546938)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31<br>32<br>33<br>34<br>35<br>36<br>37<br>38<br>39<br>40<br>41<br>42<br>43<br>44<br>``` | ```go<br>root@httpupdate1:~# gpg --gen-key<br>gpg (GnuPG) 1.4.12; Copyright (C) 2012 Free Software Foundation, Inc.<br>This is free software: you are free to change and redistribute it.<br>There is NO WARRANTY, to the extent permitted by law.<br>Please select what kind of key you want:<br>   (1) RSA and RSA (default)<br>   (2) DSA and Elgamal<br>   (3) DSA (sign only)<br>   (4) RSA (sign only)<br>Your selection? 4<br>RSA keys may be between 1024 and 4096 bits long.<br>What keysize do you want? (2048) 2048<br>Requested keysize is 2048 bits<br>Please specify how long the key should be valid.<br>         0 = key does not expire<br>      <n>  = key expires in n days<br>      <n>w = key expires in n weeks<br>      <n>m = key expires in n months<br>      <n>y = key expires in n years<br>Key is valid for? (0) 1y<br>Key expires at Fri 11 Nov 2016 06:59:43 PM UTC<br>Is this correct? (y/N) y<br>You need a user ID to identify your key; the software constructs the user ID<br>from the Real Name, Comment and Email Address in this form:<br>    "Heinrich Heine (Der Dichter) <heinrichh@duesseldorf.de>"<br>Real name: Example Package Repo<br>Email address: example_pkg_repo@example.net<br>Comment: This is demonstrating the creation of a third-party cPanel repository.<br>You selected this USER-ID:<br>    "Example Package Repo (This is demonstrating the creation of a third-party cPanel repository.) <example_pkg_repo@example.net>"<br>Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o<br>You need a Passphrase to protect your secret key.<br>...<br>gpg: key 2A8507D6 marked as ultimately trusted<br>public and secret key created and signed.<br>gpg: checking the trustdb<br>gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model<br>gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u<br>gpg: next trustdb check due at 2016-11-11<br>pub   2048R/2A8507D6 2015-11-12 [expires: 2016-11-11]<br>      Key fingerprint = A554 73AE 728E CBA9 8283  C6B3 4FE9 C226 2A85 07D6<br>uid                  Example Package Repo (This is demonstrating the creation of a third-party cPanel repository.) <example_pkg_repo@example.net><br>Note that this key cannot be used for encryption.  You may want to use<br>the command "--edit-key" to generate a subkey for this purpose.<br>``` |

### Sign the sha512 digest file

In order to prevent rollback, old version, or file-copy attacks, WebPros International, LLC uses a specific GPG signature notation that specifies the filename on the remote server.

- You **must** set this notation to use the public HTTP path for the file.

- For example, for a `sha512` file that exists at `http://example.com/pkg_repo/11.92/centos/7/x86_64/sha512`, set the filename notation to `/pkg_repo/11.92/centos/7/x86_64/sha512`.


To sign the file in the previous examples, you would run the following command:

```perl
gpg –output sha512.asc -u "example_pkg_repo@example.net" –armor –sig-notation "filename@gpg.notations.cpanel.net=/thirdparty_pkg/11.92/centos/7/x86_64/sha512" –armor –detach-sign sha512
```

### Add your key to the vendor keystore

In order to set up your cPanel & WHM servers to use the repository, you **must** add a copy of the public key that signed the packages to each cPanel & WHM server. This allows each cPanel & WHM server to verify the signed package digests.

To export the public key, run the following command:

```perl
gpg –output example_pkg_repo.pub.asc –armor –export
```

For the examples in this document, you could store this key as the `https://example.com/pkg_repo/example_pkg_repo.pub.asc` file.

Note:

- You **must** store this key in a publicly web-accessible location.
- We **strongly** recommend that you store the key in a location that uses HTTPS/SSL verification and encryption.

To add this key to the local system, run the following command, where `thirdparty` represents the vendor name and `release` represents the category:

```perl
/scripts/updatesigningkey –vendor thirdparty –category release –url https://example.com/pkg_repo/example_pkg_repo.pub.asc
```

### Add the repository to the local versions file

To configure the system to use the repository’s public key, update the `/var/cpanel/rpm.versions.d/local.versions` file.

- For more information about this file, read our [The `rpm.versions` File](https://docs.cpanel.net/knowledge-base/rpm-versions/the-rpm-versions-file/) documentation.

- For more information about the `/scripts/update_local_rpm_versions` script, which we **strongly** recommend for updates to the `local.versions` file, read our [The `update_local_rpm_versions` Script](https://docs.cpanel.net/knowledge-base/rpm-versions/the-update_local_rpm_versions-script/) documentation.


Each package’s entry in the `local.versions` file includes a corresponding `rpm_location` entry. Each `rpm_location` entry includes entries for `url_templates` and `location_keys` values.

- The `url_templates` entry contains the location of each package, which includes the operating system version, architecture, package name, package version, and package revision.
- The `location_keys` entry contains the vendor and category that you specified when you ran the `/scripts/updatesigningkey` script.

For the examples in this document, the `local.versions` file might appear similar to the following example:

[Click to view...](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#click-to-view---1764175698525228374)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>``` | ```go<br>---<br>file_format:<br>  version: 2<br>install_targets: {}<br>location_keys:<br>  thirdparty_rpm:<br>    categories:<br>      - release<br>    vendor: thirdparty<br>rpm_groups: {}<br>rpm_locations:<br>  cpanel-angularjs: thirdparty_rpm<br>srpm_sub_packages: {}<br>srpm_versions:<br>  cpanel-angularjs: 1.4.4-1.cp1154<br>target_settings: {}<br>url_templates:<br>  thirdparty_rpm: 'http://example.com/pkg_repo/11.92/centos/[% rpm_dist_ver %]/[% rpm_arch %]/[% package %]-[% package_version %]-[% package_revision %].noarch.rpm'<br>``` |

### Repositories without GPG signatures

Warning:

We **strongly** discourage the creation of repositories without GPG signatures. You **cannot** ensure the legitimacy of downloaded files without a signature.


If you do **not** need or want to verify the signature on your packages, you can disable signature verification. To do this, add a `disabled` entry for the desired package to the `location_keys` section, as in the following example:

[Click to view...](https://docs.cpanel.net/knowledge-base/third-party/how-to-set-up-a-third-party-package-repository-with-gpg-signatures/#click-to-view---1764175698526320903)

|     |     |
| --- | --- |
| ```<br> 1<br> 2<br> 3<br> 4<br> 5<br> 6<br> 7<br> 8<br> 9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>``` | ```go<br>---<br>file_format:<br>  version: 2<br>install_targets: {}<br>location_keys:<br>  thirdparty_rpm:<br>    disabled: 1<br>rpm_groups: {}<br>rpm_locations:<br>  cpanel-angularjs: thirdparty_rpm<br>srpm_sub_packages: {}<br>srpm_versions:<br>  cpanel-angularjs: 1.4.4-1.cp1154<br>target_settings: {}<br>url_templates:<br>  thirdparty_rpm: 'http://example.com/pkg_repo/11.92/centos/[% rpm_dist_ver %]/[% rpm_arch %]/[% package %]-[% package_version %]-[% package_revision %].noarch.rpm'<br>``` |

#### Additional Documentation

* * *

- [Encryption](https://docs.cpanel.net/cpanel/email/encryption/)
- [How to Build and Install Custom RPMs on Red-Hat Systems](https://docs.cpanel.net/knowledge-base/package-management/how-to-build-and-install-custom-rpms-on-red-hat-systems/)
- [How to Install ImunifyAV](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-imunifyav/)
- [How to Install WordPress® With cPanel](https://docs.cpanel.net/knowledge-base/third-party/how-to-install-wordpress-with-cpanel/)
- [Install Distro Packages](https://docs.cpanel.net/whm/software/install-distro-packages/)
- [The cPanel Glossary](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-glossary/)

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×