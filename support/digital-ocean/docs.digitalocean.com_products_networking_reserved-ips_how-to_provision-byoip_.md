---
url: "https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/"
title: "How to Provision a BYOIP Prefix | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/reserved-ips.c9c9b721d99d9592de022671f4dd4b27147dea7162dbfa52ee239edccf9d612f.svg)Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/)
- [Getting Started](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/networking/reserved-ips/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
  - [Create Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/create/)
  - [Delete Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/delete/)
  - [Reassign Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/)
  - [Manually Enable Reserved IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/manually-enable/)
  - [Find Droplet Anchor IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/find-anchor-ips/)
  - [Send Outbound Traffic](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/outbound-traffic/)
  - [Provision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/)
  - [Deprovision BYOIP](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/)
  - [Manage BYOIP Advertisement](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/)
  - [Assign BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/assign-byoip-ip/)
  - [Modify BYOIP IPs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify-byoip-ip/)
- [Reference](https://docs.digitalocean.com/products/networking/reserved-ips/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Floating-IPs)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/compute/reserved-ip/)
- [Concepts](https://docs.digitalocean.com/products/networking/reserved-ips/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/reserved-ips/)
- [Details](https://docs.digitalocean.com/products/networking/reserved-ips/details/)
  - [Features](https://docs.digitalocean.com/products/networking/reserved-ips/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/networking/reserved-ips/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/networking/reserved-ips/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/networking/reserved-ips/details/limits/)
- [Support](https://docs.digitalocean.com/products/networking/reserved-ips/support/)

- [How-Tos](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/)
- Provision BYOIP

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Provision a BYOIP Prefix

Validated on 15 Sep 2025 • Last edited on 14 Nov 2025

DigitalOcean Reserved IPs are publicly-accessible static IPv4 and IPv6 addresses. Assign and reassign reserved IP addresses to Droplets as needed, or implement an automated failover mechanism with reserved IPs to build a high availability infrastructure.

Bring your own network prefix of IPv4 addresses to DigitalOcean by creating a signed certificate, updating your Regional Internet Registry (RIR) records, and submitting a signed provisioning request via the DigitalOcean API.

The full process is:

1. Create a private ECC (or RSA) key and use it to sign an X.509 certificate
2. Add the X.509 certificate to your RIR’s public records
3. Create a specially formatted message containing your DigitalOcean account UUID and your IPv4 prefix information
4. Sign the message using the private key you generated
5. Submit a provisioning request via the API with the following information:

- Your IPv4 prefix in CIDR format
- The signature hash you generated in step 4
- The datacenter region (for example: `nyc3`) to place the IPs in

6. Your provisioning request is reviewed. Expect a response within seven days. Once the prefix status shows as **Active**, enable advertisement by setting `advertise: true` to make your prefix accessible from the internet.

Follow the detailed instructions below to bring your IPs to DigitalOcean.

## Prerequisites

- You must request access to BYOIP by clicking the **Request access** link at the bottom of [the Reserved IPs page](https://cloud.digitalocean.com/networking/reserved_ips) in the control panel.

- You must possess direct control and update authority over a block of IPv4 addresses within your RIR. You acknowledge and agree that you have all the necessary rights to use the BYOIP IP address you are provisioning. DigitalOcean is not responsible for any third-party claims related to your use of BYOIP IP addresses on our services.

- The prefix must be registered with one of the following Regional Internet Registries:
  - American Registry for Internet Numbers (ARIN)
  - Réseaux IP Européens Network Coordination Centre (RIPE NCC)
  - Asia Pacific Network Information Centre (APNIC)
  - African Network Information Centre (AFRINIC)
  - Latin America and Caribbean Network Information Centre (LACNIC)
- You must be able to log in to your RIR and update your IPv4 prefix’s public records.

- You must set up an RPKI Route Origin Authorization (ROA) for your prefix, allowing the prefix to originate from DigitalOcean’s `393406` ASN. All RIRs can generate and host this authorization record. Refer to your registry’s RPKI ROA documentation for more information:
  - [ARIN](https://www.arin.net/resources/manage/rpki/roa_request/)
  - [RIPE NCC](https://www.ripe.net/manage-ips-and-asns/resource-management/rpki/resource-certification-roa-management/)
  - [APNIC](https://blog.apnic.net/2019/09/11/how-to-creating-rpki-roas-in-myapnic/)
  - [AFRINIC](https://afrinic.net/support/rpki/create-add-rpki-roa)
  - [LACNIC](https://lacnic.zendesk.com/hc/en-us/articles/231828447-Creating-ROAs)
- You need access to UNIX command line tools including [`doctl`](https://docs.digitalocean.com/reference/doctl/), `openssl`, and `rdap`.


## Generate the X.509 Certificate

First generate an ECC private key using `openssl`.

```shell
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-384 -out private_key.pem
```

Note

To use RSA instead of ECC for your private key, run the following command instead:

```shell
openssl genpkey -quiet -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -out private_key.pem
```

The private key is saved as `private_key.pem`.

Use the private key to create a new X.509 certificate. Filling out the certificate fields is optional.

```shell
openssl req -new -x509 -key private_key.pem -days 365 -out x509_certificate.pem
```

The certificate is saved as `x509_certificate.pem`. Use the `tr` utility to remove all newline characters from the X.509 certificate.

```shell
cat x509_certificate.pem | tr -d "\n" > encoded_x509_certificate.pem
```

The final certificate file is `encoded_x509_certificate.pem`.

## Add the X.509 Certificate to Your RIR

Add the X.509 certificate to your IPv4 prefix’s public records so that it shows up under **IP Network** → **Remarks** → **Description** when queried with the `rdap` command. Find your RIR below for detailed instructions.

APNIC

Go to the [APNIC website](https://www.apnic.net/) and log in to your account.

When logged in, find the **Resource Manager** menu item at the top of the page and navigate to **Resource Manager**, **Internet Resources**, **IPv4**.

This lists all of your IPv4 resources. Select the prefix you would like to use for BYOIP, then select the subnet.

Scroll down to the bottom of the subnet’s page and add a **descr** field.

![Screenshot of the APNIC website showing a dropdown menu with 'descr' selected](https://docs.digitalocean.com/screenshots/reserved-ips/byoip-apnic-descr.b5c4f60d23d9da3f881597e8dd70d336492dd68173da12afc86a19c6946f9fbc.png)

Once you’ve added the **descr** field, paste the contents of `encoded_x509_certificate.pem` into the **descr** text box, then scroll down and click the **Update** button.

Continue to the [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify) section to check that the update is successful.

ARIN

Go to the [ARIN website](https://www.arin.net/) and log in to your account.

Once logged in to the ARIN account manager, navigate to the **Dashboard** using the user menu in the upper-right.

In the Dashboard drop-down, go to **IP Addresses**, then **Manage Networks**

![Screenshot of the ARIN website showing a 'Dashboard' menu with multiple options. The 'IP Addresses' menu item is highlighted, along with its submenu item 'Manage Networks'](https://docs.digitalocean.com/screenshots/reserved-ips/byoip-arin-dashboard.c2cd105c75fe131e11c6268b5297754a429574f4723d89de8b72813259ef5531.png)

Click the **Net Handle** of the subnet you would like to use for BYOIP. This brings you to details about the subnet. Click the **Actions** drop-down menu and select **Modify** to edit the subnet.

In the **Public Comments** text box, paste the contents of the `encoded_x509_certificate.pem` file, then click **Submit**.

Continue to the [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify) section to check that the update is successful.

RIPE NCC

Go to the [RIPE website](https://www.ripe.net/) and log in to your account.

Once logged in, click on **LIR Portal**.

In the LIR Portal, click **Resources** in the left menu.

In **My Resources**, click on the **IPv4** tab.

Find the prefix that you would like to use for BYOIP and click it. This brings you to details about the prefix. Click the **Update object** button to edit.

Scroll down and find the **descr** text box. Paste the contents of `encoded_x509_certificate.pem` into the box, then click **Submit**.

Continue to the [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify) section to check that the update is successful.

AFRINIC

Log in to your [African Network Information Centre account](https://my.afrinic.net/login) and add your X.509 certificate to the prefix’s RDAP records so that it shows up under **IP Network** → **Remarks** → **Description** when queried with the `rdap` command.

Continue to the [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify) section to check that the update is successful.

LACNIC

Log in to your [Latin America and Caribbean Network Information Centre account](https://milacnic.lacnic.net/lacnic/login) and add your X.509 certificate to the prefix’s RDAP records so that it shows up under **IP Network** → **Remarks** → **Description** when queried with the `rdap` command.

Continue to the [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify) section to check that the update is successful.

## Verify the Certificate Records

Once you’ve added the certificate to your RIR, use the `rdap` command followed by your IP prefix to verify the RIR setup is complete.

```shell
rdap <your_prefix_in_CIDR_notation>
```

Replace `<your_prefix_in_CIDR_notation>` with your own prefix in CIDR notation.

This command prints all of your prefix’s RDAP information to the console. You should find your certificate under **IP Network** → **Remarks** → **Description**.

## Generate the Signature Hash

In this step, you create a signed message hash that verifies you control both your DigitalOcean account and your prefix.

First use `doctl` to list all of your DigitalOcean teams and their UUIDs.

```shell
doctl account get -o json
```

This outputs JSON with your account information:

```json
{
  "droplet_limit": 500,
  "floating_ip_limit": 250,
  "reserved_ip_limit": 250,
  "volume_limit": 5000,
  "email": "sammy@example.com",
  "name": "Sammy",
  "uuid": "412c39ba-****-****-*****-a7f9776ed4e4",
  "email_verified": true,
  "status": "active",
  "team": {
    "name": "Sammy Engineering",
    "uuid": "2dba95607b7fcee***************ad0643f357"
  }
}
```

Find the `uuid` of the team you wish to use. Use the `uuid` and your prefix to create a message for signing in this specific format:

```
DO|<team_uuid>|<your_prefix_in_CIDR_notation>
```

Substitute the following information:

- `<team_uuid>`: the team UUID found in the previous step
- `<your_prefix_in_CIDR_notation>`: your IP prefix in CIDR notation

Use `echo` to pipe your message to `openssl` for signing:

```shell
echo -n "DO|<team_uuid>|<your_prefix_in_CIDR_notation>" | openssl dgst -sign private_key.pem -keyform pem -sha256 -out signature_file.txt
```

Remember to replace `<team_uuid>` and `<your_prefix_in_CIDR_notation>` with your information. The signed message is written to the file `signature_file.txt`.

Finally, base64 encode the signature file:

```shell
cat signature_file.txt | openssl base64 | tr -- '+=/' '-_~' | tr -d "\n" > encoded_signature_file.txt
```

The encoded signature is written to `encoded_signature_file.txt`.

The next step explains how to submit `encoded_signature_file.txt` to complete your provisioning request.

## Submit Your Provisioning Request

During the public preview, BYOIP provisioning requests must be submitted using [`doctl`](https://docs.digitalocean.com/reference/doctl/) or [the DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean).

### Submit Your Provisioning Request Using the CLI

Use the `doctl compute byoip-prefix create` command to send the provisioning request:

```shell
doctl compute byoip-prefix create \
  --prefix <your_prefix_in_CIDR_notation> \
  --region <your_region> \
  --signature "$(cat encoded_signature_file.txt)"
```

This example uses `cat` to pull the `signature` value from `encoded_signature_file.txt`. Update `<your_prefix_in_CIDR_notation>` and `<your_region>` to match the details of your prefix and your desired region.

The command responds with an `id` for your BYOIP prefix. Use this ID to [query the status of your provisioning request](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#get-the-status-of-a-provisioning-request-status), or to [deprovision the prefix](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/).

### Submit Your Provisioning Request Using the API

The BYOIP provisioning API call is a `POST` request to `https://api.digitalocean.com/v2/byoip_prefixes` with a JSON payload similar to the following:

```json
{
  "prefix": "<your_prefix_in_CIDR_notation>",
  "region": "<your_region>",
  "signature": "<your_signature_from_encoded_signature_file>"
}
```

The following `curl` command calls the provisioning endpoint:

```shell
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  -d '{"prefix":"<your_prefix_in_CIDR_notation>","region":"<your_region>","signature":"<your_signature_from_encoded_signature_file>"}' \
  "https://api.digitalocean.com/v2/byoip_prefixes"
```

Update `<your_prefix_in_CIDR_notation>`, `<your_region>`, and `<your_signature_from_encoded_signature_file>` to match the details of your prefix, desired region, and signature.

The API responds with an `id` for your `byoip_prefix`:

```json
{ "byoip_prefix": { "id": "95ad6673-a359-400d-8095-9f6589746d78" } }
```

Use this ID to [query the status of your provisioning request](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#get-the-status-of-a-provisioning-request-status), or to [deprovision the prefix](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/). Provisioning requests are reviewed within seven days.

## Get the Status of a Provisioning Request

After submitting your BYOIP provisioning request, your prefix is listed in the **Networking** section of the control panel under the [**Reserved IPs** tab](https://cloud.digitalocean.com/networking/reserved_ips). BYOIP prefixes have a status of **Provisioning** while still provisioning, and **Active** when they are ready to be used. Provisioning requests are reviewed within seven days.

Note **By default, newly provisioned BYOIP prefixes are not advertised to the internet.** After you submit your provisioning request and DigitalOcean provisions the prefix, the prefix status changes to **Active**. At this point, you must [resume advertisement](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/pause-byoip/#resume) by setting `advertise: true` via the control panel, CLI, or API to make your prefix fully usable and accessible from the internet.

You can also use the `doctl` CLI or DigitalOcean API to get the status of your prefix.

### Get the Status of a Provisioning Request Using the CLI

Use `doctl network byoip-prefix get` and the ID of your prefix to get its current status:

```shell
doctl network byoip-prefix get <your_prefix_id>
```

Update `<your_prefix_id>` with the ID returned when you created the provisioning request. The command returns a table with information about the provisioning request, including a `Status` column which is `in_progress` until the process is complete.

### Get the Status of a Provisioning Request Using the API

Send a `GET` request to the `/v2/byoip_prefixes/<your_prefix_id>` endpoint:

```shell
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/byoip_prefixes/<your_prefix_id>"
```

Update `<your_prefix_id>` with the ID returned when you created the provisioning request. The API returns a JSON object with information about the provisioning request, including a `status` key which is `in_progress` until the process is complete.

## How To Use BYOIP Addresses

BYOIP addresses are assigned, reassigned, and unassigned using the existing reserved IP interface and APIs. Read the [reserved IP docs](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/modify/) on reassigning and unassigning to get started.

You cannot delete BYOIP addresses, but you can [deprovision the entire prefix](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/deprovision-byoip/).

### Network Operations Communication Expectations

DigitalOcean will contact you should our network operations team detect any anomaly regarding the announcement of your BYOIP prefixes to the internet.

Failure to remediate the issue within one business day from its start – irrespective of your responsiveness – will result in termination of BYOIP service for the prefix in question. Termination of BYOIP service means a complete withdrawal of the BYOIP prefix from DigitalOcean’s advertisements to the internet.

In this article...

- [Prerequisites](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#prerequisites)
- [Generate the X.509 Certificate](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#generate-the-x509-certificate)
- [Add the X.509 Certificate to Your RIR](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#add-the-x509-certificate-to-your-rir)
- [Verify the Certificate Records](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#verify)
- [Generate the Signature Hash](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#generate-the-signature-hash)
- [Submit Your Provisioning Request](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#submit-your-provisioning-request)
  - [Submit Your Provisioning Request Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#submit-your-provisioning-request-using-the-cli)
  - [Submit Your Provisioning Request Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#submit-your-provisioning-request-using-the-api)
- [Get the Status of a Provisioning Request](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#get-the-status-of-a-provisioning-request)
  - [Get the Status of a Provisioning Request Using the CLI](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#get-the-status-of-a-provisioning-request-using-the-cli)
  - [Get the Status of a Provisioning Request Using the API](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#get-the-status-of-a-provisioning-request-using-the-api)
- [How To Use BYOIP Addresses](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#how-to-use-byoip-addresses)
  - [Network Operations Communication Expectations](https://docs.digitalocean.com/products/networking/reserved-ips/how-to/provision-byoip/#network-operations-communication-expectations)

##### Company

- [About](https://www.digitalocean.com/about)
- [Careers](https://www.digitalocean.com/careers)
- [Blog](https://www.digitalocean.com/blog)

##### Docs

- [Docs Home](https://docs.digitalocean.com/)
- [API Reference](https://docs.digitalocean.com/reference/api)
- [CLI Reference](https://docs.digitalocean.com/reference/doctl)
- [Release Notes](https://docs.digitalocean.com/release-notes)
- [Trust Platform](https://www.digitalocean.com/trust)

##### Community

- [Tutorials](https://www.digitalocean.com/community/tutorials)
- [Q&A](https://www.digitalocean.com/community/questions)
- [Write for DOnations](https://www.digitalocean.com/community/pages/write-for-digitalocean)
- [Currents Research](https://www.digitalocean.com/currents)
- [Legal](https://www.digitalocean.com/legal)
- [Code of Conduct](https://www.digitalocean.com/community/pages/code-of-conduct)

##### Support

- [Support Center](https://docs.digitalocean.com/support)
- [Report Abuse](https://www.digitalocean.com/company/contact/abuse)

* * *

Cookie Preferences

© 2025 DigitalOcean, LLC. All rights reserved

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

Loading...

## Product Docs

### We can't find any results for your search.

Try using different keywords or simplifying your search terms.

## Marketplace

## DigitalOcean Blog

## Community

navigategoexit

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices