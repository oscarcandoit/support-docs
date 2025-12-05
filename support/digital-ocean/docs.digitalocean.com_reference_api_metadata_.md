---
url: "https://docs.digitalocean.com/reference/api/metadata/"
title: "DigitalOcean Metadata API Reference | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/doctl.8752eb00eab1370da259c7536b272e156687733b207709b145ac9725f986eda0.svg)doctl CLI](https://docs.digitalocean.com/reference/doctl/)
- [![](https://docs.digitalocean.com/images/icons/api.47c17d0d57a6ef27c2bdc744b3a7b71edc80838dfbe8431e12f5c3e81f371510.svg)APIs](https://docs.digitalocean.com/reference/api/)
  - [DigitalOcean API](https://docs.digitalocean.com/reference/api/#digitalocean)
    - [Reference](https://docs.digitalocean.com/reference/api/digitalocean/)
    - [Create an Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/)
  - [Spaces API](https://docs.digitalocean.com/reference/api/#spaces)
    - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
    - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
    - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
  - [OAuth API](https://docs.digitalocean.com/reference/api/oauth/)
  - [Metadata API](https://docs.digitalocean.com/reference/api/#metadata)
    - [Reference](https://docs.digitalocean.com/reference/api/metadata/)
    - [Access Metadata](https://docs.digitalocean.com/products/droplets/how-to/access-metadata/)
  - [Token Scopes](https://docs.digitalocean.com/reference/api/scopes/)
- [![](https://docs.digitalocean.com/images/icons/ml.8fa526f2000be550be4cf13328efa900204aadddf78ca969ef95c31dee1c9c94.svg)Paperspace](https://docs.digitalocean.com/reference/paperspace/)
- [![](https://docs.digitalocean.com/images/icons/ansible.e7aa45274ed1f6e2568e7246a3176c23f381abf51095a7ed3248431c6dfb75e1.svg)Ansible](https://docs.digitalocean.com/reference/ansible/)
- [![](https://docs.digitalocean.com/images/icons/terraform.1c898126c7e49861340a2005886eb496e4755c9b2b737b14ea0d3a949a7ec619.svg)Terraform](https://docs.digitalocean.com/reference/terraform/)
- [![](https://docs.digitalocean.com/images/icons/python.ccad6ea84a17bb64de581eba7a7efe96ff4b80b41bdf53a90a4819ba20e0dcaa.svg)PyDo](https://docs.digitalocean.com/reference/pydo/)
- [![](https://docs.digitalocean.com/images/icons/libraries.f718f930c4f806c3d2f8548b78661d1b4e835959e441cd3499fb93dac044b021.svg)Libraries](https://docs.digitalocean.com/reference/libraries/)
- [![](https://docs.digitalocean.com/images/icons/opensource.e3aaf41478fe88f6808cf399b9357d9d23fe3f04f3a9ed58f6cc7b261f2e04c3.svg)Open Source](https://docs.digitalocean.com/reference/opensource/)

Validated on 16 Feb 2021 • Last edited on 24 Jan 2025

- Droplet Properties
  - getGet Droplet's Metadata
  - getGet Metadata Index
  - getGet Droplet ID
  - getGet Hostname
  - getGet User Data
  - getGet Vendor Data
  - getGet Public Keys
  - getGet Region
- Network Interfaces
  - getGet Network Interface Index
  - getGet Public Interface Index
  - getGet Public Interface Attributes Index
  - getGet Public Interface's MAC Address
  - getGet Network Interface's Type
  - getGet Public Interface's IPv4 Attributes
  - getGet Public Interface IPv4 Address
  - getGet Public Interface IPv4 Netmask
  - getGet Public Interface Gateway Address
  - getGet IPv6 Network Interfaces Index
  - getGet Public Interface IPv6 Address
  - getGet Public Interface's IPv6 CIDR
  - getGet Public Interface's IPv6 Gateway Address
  - getGet IPv4 Anchor Attributes Index
  - getGet Anchor IPv4 Address
  - getGet Anchor IPv4 Netmask
- Floating IPs
  - getGet Floating IP Index
  - getGet Floating IPv4 Attributes Index
  - getGet Floating IPv4 Status
  - getGet Floating IPv4 Address
- Reserved IPs
  - getGet Reserved IP Index
  - getGet Reserved IPv4 Attributes Index
  - getGet Reserved IPv6 Attributes Index
  - getGet Reserved IPv4 Status
  - getGet Reserved IPv6 Status
  - getGet Reserved IPv4 Address
  - getGet Reserved IPv6 Address
- DNS
  - getGet DNS Attributes Index
  - getGet DNS Nameservers
- Tags
  - getGet Associated Tags
- Features
  - getGet Available Features
  - getGet DHCP Status
  - getGet Scheduled Migrations

[API docs by Redocly](https://redocly.com/redoc/)

# DigitalOcean Droplet Metadata API (0.1.9)

Download OpenAPI specification: [Download](https://docs.digitalocean.com/reference/api/metadata/spec.yaml)

DigitalOcean API Team: [api-engineering@digitalocean.com](mailto:api-engineering@digitalocean.com)License: [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)[Terms of Service](https://www.digitalocean.com/legal/terms-of-service-agreement/)

The DigitalOcean Droplet Metadata API allows Droplets to access its metadata. Examples of available Droplet metadata include user-provided data (`user-data`), Droplet ID, data center region, IP addresses, and tags. Aside from allowing an easy way for a user to look-up data about a Droplet, metadata can be used to configure a Droplet and its applications.

## [tag/Droplet-Properties](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties) Droplet Properties

Returns general information about the Droplet, including the Droplet's region, hostname, and ID.

## [tag/Droplet-Properties/operation/getMetadata](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getMetadata) Get Droplet's Metadata

Returns the entire contents of Droplet's matadata, in JSON. This endpoint is unique because it returns all of the metadata at once, instead of individual metadata items.

### Responses

**200**

A JSON array of Droplet metadata.

**301**

If you access an index endpoint but forget to add the trailing slash, you will receive a `301 Moved Permanently` response.

**404**

If you access an endpoint that does not exist, you will receive a `404 Not Found` response. Resolve this by using an existing endpoint.

get/metadata/v1.json

production

http://169.254.169.254/metadata/v1.json

### Response samples

- 200
- 301
- 404

Content type

application/json

Copy
Expand all  Collapse all

`[{"droplet_id": 2756294,\
\
"hostname": "sample-droplet",\
\
"vendor_data": "#cloud-config\ndisable_root: false\nmanage_etc_hosts: true\n\ncloud_config_modules:\n - ssh\n - set_hostname\n - [ update_etc_hosts, once-per-instance ]\n\ncloud_final_modules:\n - scripts-vendor\n - scripts-per-once\n - scripts-per-boot\n - scripts-per-instance\n - scripts-user\n",\
\
"public_keys": ["ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCcbi6cygCUmuNlB0KqzBpHXf7CFYb3VE4pDOf/RLJ8OFDjOM+fjF83a24QktSVIpQnHYpJJT2pQMBxD+ZmnhTbKv+OjwHSHwAfkBullAojgZKzz+oN35P4Ea4J78AvMrHw0zp5MknS+WKEDCA2c6iDRCq6/hZ13Mn64f6c372JK99X29lj/B4VQpKCQyG8PUSTFkb5DXTETGbzuiVft+vM6SF+0XZH9J6dQ7b4yD3sOder+M0Q7I7CJD4VpdVD/JFa2ycOS4A4dZhjKXzabLQXdkWHvYGgNPGA5lI73TcLUAueUYqdq3RrDRfaQ5Z0PEw0mDllCzhk5dQpkmmqNi0F sammy@digitalocean.com"\
\
],\
\
"region": "nyc3",\
\
"interfaces": {"private": [{"ipv4": {"ip_address": "104.131.20.105",\
\
"netmask": "255.255.192.0",\
\
"gateway": "104.131.0.1"\
\
},\
\
"mac": "04:01:2a:0f:2a:01",\
\
"Type": "private"\
\
}\
\
],\
\
"public": [{"ipv4": {"ip_address": "104.131.20.105",\
\
"netmask": "255.255.192.0",\
\
"gateway": "104.131.0.1"\
\
},\
\
"ipv6": {"ip_address": "2604:A880:0800:0010:0000:0000:017D:2001",\
\
"cidr": 64,\
\
"gateway": "2604:A880:0800:0010:0000:0000:0000:0001"\
\
},\
\
"mac": "04:01:2a:0f:2a:01",\
\
"Type": "public"\
\
}\
\
]\
\
},\
\
"floating_ip": {"ipv4": {"active": false\
\
}\
\
},\
\
"reserved_ip": {"ipv4": {"active": false\
\
}\
\
},\
\
"dns": {"nameservers": ["2001:4860:4860::8844",\
\
"2001:4860:4860::8888",\
\
"8.8.8.8"\
\
]\
\
},\
\
"features": {"dhcp_enabled": true\
\
}\
\
}\
\
]`

## [tag/Droplet-Properties/operation/getMetadataIndex](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getMetadataIndex) Get Metadata Index

The top-level metadata index. This index can be navigated to find all available Metadata endpoints.

### Responses

**200**

A list of metadata endpoints.

get/metadata/v1

production

http://169.254.169.254/metadata/v1

### Response samples

- 200

Content type

text/plain

Copy

```
id
hostname
user-data
vendor-data
public-keys
region
interfaces/
dns/
floating_ip/
reserved_ip/
tags/
features/
```

## [tag/Droplet-Properties/operation/getDropletId](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getDropletId) Get Droplet ID

The Droplet's unique identifier. This is automatically generated upon Droplet creation.

### Responses

**200**

The Droplet's ID as an integer.

get/metadata/v1/id

production

http://169.254.169.254/metadata/v1/id

### Response samples

- 200

Content type

text/plain

Copy

```
2756294
```

## [tag/Droplet-Properties/operation/getHostname](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getHostname) Get Hostname

The Droplet's hostname, as specified by the user during Droplet creation.

### Responses

**200**

The Droplet's hostname as plain text.

get/metadata/v1/hostname

production

http://169.254.169.254/metadata/v1/hostname

### Response samples

- 200

Content type

text/plain

Copy

```
sample-droplet
```

## [tag/Droplet-Properties/operation/getUserData](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getUserData) Get User Data

The user data that was provided by the user during Droplet creation. User data can contain arbitrary data for miscellaneous use or, with certain Linux distributions, an arbitrary shell script or cloud-config file that will be consumed by a variation of cloud-init upon boot. At this time, cloud-config support is included with Ubuntu 14.04, and CentOS 7 images on DigitalOcean.

### Responses

**200**

The user data provided as plain text.

get/metadata/v1/user-data

production

http://169.254.169.254/metadata/v1/user-data

### Response samples

- 200

Content type

text/plain

Copy

```
#! /bin/bash
echo "Data from user"
```

## [tag/Droplet-Properties/operation/getVendorData](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getVendorData) Get Vendor Data

Vendor-provided data that can be used to configure Droplets upon their creation. This is similar to user data, but it is provided by DigitalOcean instead of the user.

### Responses

**200**

The vendor data provided as plain text.

get/metadata/v1/vendor-data

production

http://169.254.169.254/metadata/v1/vendor-data

### Response samples

- 200

Content type

text/plain

Copy

```
#cloud-config
disable_root: false
manage_etc_hosts: true
cloud_config_modules:
 - ssh
 - set_hostname
 - [ update_etc_hosts, once-per-instance ]
cloud_final_modules:
 - scripts-vendor
 - scripts-per-once
 - scripts-per-boot
 - scripts-per-instance
 - scripts-user
```

## [tag/Droplet-Properties/operation/getPublicKeys](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getPublicKeys) Get Public Keys

Public SSH key(s) that were added to the Droplet's root user's `authorized_keys` file during Droplet creation.

### Responses

**200**

The Droplet's public key in plain text.

get/metadata/v1/public-keys

production

http://169.254.169.254/metadata/v1/public-keys

### Response samples

- 200

Content type

text/plain

Copy

```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCcbi6cygCUmuNlB0KqzBpHXf7CFYb3VE4pDOf/RLJ8OFDjOM+fjF83a24QktSVIpQnHYpJJT2pQMBxD+ZmnhTbKv+OjwHSHwAfkBullAojgZKzz+oN35P4Ea4J78AvMrHw0zp5MknS+WKEDCA2c6iDRCq6/hZ13Mn64f6c372JK99X29lj/B4VQpKCQyG8PUSTFkb5DXTETGbzuiVft+vM6SF+0XZH9J6dQ7b4yD3sOder+M0Q7I7CJD4VpdVD/JFa2ycOS4A4dZhjKXzabLQXdkWHvYGgNPGA5lI73TcLUAueUYqdq3RrDRfaQ5Z0PEw0mDllCzhk5dQpkmmqNi0F sammy@digitalocean.com
```

## [tag/Droplet-Properties/operation/getRegion](https://docs.digitalocean.com/reference/api/metadata/\#tag/Droplet-Properties/operation/getRegion) Get Region

The region code of where the Droplet resides.

### Responses

**200**

The Droplet's region as plain text.

get/metadata/v1/region

production

http://169.254.169.254/metadata/v1/region

### Response samples

- 200

Content type

text/plain

Copy

```
nyc3
```

## [tag/Network-Interfaces](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces) Network Interfaces

Droplets use public and [private network](https://www.digitalocean.com/docs/networking/vpc/) interfaces to connect to the internet and other DigitalOcean resources. Each interface contains various properties, including the Droplet's IP address, gateway IP, and netmask.

## [tag/Network-Interfaces/operation/getInterfaces](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfaces) Get Network Interface Index

An index of all network interfaces by type, e.g. "public" and "private".

### Responses

**200**

The available interfaces as plain text.

get/metadata/v1/interfaces

production

http://169.254.169.254/metadata/v1/interfaces

### Response samples

- 200

Content type

text/plain

Copy

```
public/
private/
```

## [tag/Network-Interfaces/operation/getInterfacesPublic](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublic) Get Public Interface Index

An enumerated index of all public network interfaces that are of the specified interface type.

### Responses

**200**

An enumerated list of public interfaces as plain text.

get/metadata/v1/interfaces/public

production

http://169.254.169.254/metadata/v1/interfaces/public

### Response samples

- 200

Content type

text/plain

Copy

```
0/
```

## [tag/Network-Interfaces/operation/getInterfacesPublicIndex](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicIndex) Get Public Interface Attributes Index

An index of the attributes of the specified network interface.

### Responses

**200**

An index of the Droplet's public interfaces as a plain-text list.

get/metadata/v1/interfaces/public/0

production

http://169.254.169.254/metadata/v1/interfaces/public/0

### Response samples

- 200

Content type

text/plain

Copy

```
mac
type
ipv4/
ipv6/
```

## [tag/Network-Interfaces/operation/getInterfacesPublicMac](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicMac) Get Public Interface's MAC Address

The MAC address of the specified network interface.

### Responses

**200**

The Droplet's MAC address as plain text.

get/metadata/v1/interfaces/public/0/mac

production

http://169.254.169.254/metadata/v1/interfaces/public/0/mac

### Response samples

- 200

Content type

text/plain

Copy

```
04:01:2a:0f:2a:03
```

## [tag/Network-Interfaces/operation/getInterfacesPublicType](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicType) Get Network Interface's Type

The type of the specified network interface.

### Responses

**200**

The network interface type as plain text.

get/metadata/v1/interfaces/public/0/type

production

http://169.254.169.254/metadata/v1/interfaces/public/0/type

### Response samples

- 200

Content type

text/plain

Copy

```
public
```

## [tag/Network-Interfaces/operation/getInterfacesPublicIpv4](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicIpv4) Get Public Interface's IPv4 Attributes

An index of the specified network interface's IPv4 attributes.

### Responses

**200**

The index of available IPv4 attributes as a plain-text list.

get/metadata/v1/interfaces/public/0/ipv4

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4

### Response samples

- 200

Content type

text/plain

Copy

```
address
netmask
gateway
```

## [tag/Network-Interfaces/operation/getInterfacesPublicIpv4Address](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicIpv4Address) Get Public Interface IPv4 Address

The IPv4 address of the specified network interface, as plain text.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv4/address

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address

### Response samples

- 200

Content type

text/plain

Copy

```
104.131.20.105
```

## [tag/Network-Interfaces/operation/getInterfacesPublicIpv4Netmask](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicIpv4Netmask) Get Public Interface IPv4 Netmask

The netmask of the specified network interface.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv4/netmask

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/netmask

### Response samples

- 200

Content type

text/plain

Copy

```
255.255.192.0
```

## [tag/Network-Interfaces/operation/getInterfacesPublicIpv4Gateway](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesPublicIpv4Gateway) Get Public Interface Gateway Address

The gateway of the specified network interface.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv4/gateway

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/gateway

### Response samples

- 200

Content type

text/plain

Copy

```
104.131.0.1
```

## [tag/Network-Interfaces/operation/getInterfacesIpv6](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv6) Get IPv6 Network Interfaces Index

An index of the specified network interface's IPv6 attributes.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv6

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv6

### Response samples

- 200

Content type

text/plain

Copy

```
address
cidr
gateway
```

## [tag/Network-Interfaces/operation/getInterfacesIpv6Address](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv6Address) Get Public Interface IPv6 Address

The IPv6 address of the specified network interface.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv6/address

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv6/address

### Response samples

- 200

Content type

text/plain

Copy

```
2604:A880:0800:0010:0000:0000:017D:2001
```

## [tag/Network-Interfaces/operation/getInterfacesIpv6Cidr](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv6Cidr) Get Public Interface's IPv6 CIDR

The IPv6 CIDR of the specified network interface.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv6/cidr

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv6/cidr

### Response samples

- 200

Content type

text/plain

Copy

```
64
```

## [tag/Network-Interfaces/operation/getInterfacesIpv6Gateway](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv6Gateway) Get Public Interface's IPv6 Gateway Address

The IPv6 gateway address of the specified network interface.

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/ipv6/gateway

production

http://169.254.169.254/metadata/v1/interfaces/public/0/ipv6/gateway

### Response samples

- 200

Content type

text/plain

Copy

```
2604:A880:0800:0010:0000:0000:0000:0001
```

## [tag/Network-Interfaces/operation/getInterfacesIpv4AnchorIndex](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv4AnchorIndex) Get IPv4 Anchor Attributes Index

An index of the specified "Anchor" network interface's IPv4 attributes. **Note:** An "Anchor" interface is an implementation detail of [DigitalOcean Reserved IPs](https://www.digitalocean.com/community/tutorials/how-to-use-floating-ips-on-digitalocean).

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/anchor\_ipv4

production

http://169.254.169.254/metadata/v1/interfaces/public/0/anchor\_ipv4

### Response samples

- 200

Content type

text/plain

Copy

```
address
netmask
gateway
```

## [tag/Network-Interfaces/operation/getInterfacesIpv4AnchorAddress](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv4AnchorAddress) Get Anchor IPv4 Address

The IPv4 address of the specified "Anchor" network interface. **Note:** An "Anchor" interface is an implementation detail of [DigitalOcean Reserved IPs](https://www.digitalocean.com/community/tutorials/how-to-use-floating-ips-on-digitalocean).

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/anchor\_ipv4/address

production

http://169.254.169.254/metadata/v1/interfaces/public/0/anchor\_ipv4/address

### Response samples

- 200

Content type

text/plain

Copy

```
10.17.0.160
```

## [tag/Network-Interfaces/operation/getInterfacesIpv4AnchorNetmask](https://docs.digitalocean.com/reference/api/metadata/\#tag/Network-Interfaces/operation/getInterfacesIpv4AnchorNetmask) Get Anchor IPv4 Netmask

The netmask of the specified "Anchor" network interface. **Note:** An "Anchor" interface is an implementation detail of [DigitalOcean Reserved IPs](https://www.digitalocean.com/community/tutorials/how-to-use-floating-ips-on-digitalocean).

### Responses

**200**

Success

get/metadata/v1/interfaces/public/0/anchor\_ipv4/netmask

production

http://169.254.169.254/metadata/v1/interfaces/public/0/anchor\_ipv4/netmask

### Response samples

- 200

Content type

text/plain

Copy

```
255.255.0.0
```

## [tag/Floating-IPs](https://docs.digitalocean.com/reference/api/metadata/\#tag/Floating-IPs) Floating IPs

DigitalOcean [Reserved IP addresses](https://www.digitalocean.com/docs/networking/floating-ips/) are publicly-accessible static IP addresses that you can assign to Droplets and instantly remap between other Droplets in the same datacenter.

## [tag/Floating-IPs/operation/getFloatingIp](https://docs.digitalocean.com/reference/api/metadata/\#tag/Floating-IPs/operation/getFloatingIp) Get Floating IP Index

An index of IPv4 Floating IPs.

### Responses

**200**

Success

get/metadata/v1/floating\_ip

production

http://169.254.169.254/metadata/v1/floating\_ip

### Response samples

- 200

Content type

text/plain

Copy

```
ipv4/
```

## [tag/Floating-IPs/operation/getFloatingIpIpv4](https://docs.digitalocean.com/reference/api/metadata/\#tag/Floating-IPs/operation/getFloatingIpIpv4) Get Floating IPv4 Attributes Index

An index of IPv4 Floating IP attributes.

### Responses

**200**

Success

get/metadata/v1/floating\_ip/ipv4

production

http://169.254.169.254/metadata/v1/floating\_ip/ipv4

### Response samples

- 200

Content type

text/plain

Copy

```
active
ip_address
```

## [tag/Floating-IPs/operation/getFloatingIpIpv4Active](https://docs.digitalocean.com/reference/api/metadata/\#tag/Floating-IPs/operation/getFloatingIpIpv4Active) Get Floating IPv4 Status

Displays true if a Floating IP is currently assigned to the Droplet and false if it is not.

### Responses

**200**

Success

get/metadata/v1/floating\_ip/ipv4/active

production

http://169.254.169.254/metadata/v1/floating\_ip/ipv4/active

### Response samples

- 200

Content type

text/plain

Copy

```
true
```

## [tag/Floating-IPs/operation/getFloatingIpIpv4Address](https://docs.digitalocean.com/reference/api/metadata/\#tag/Floating-IPs/operation/getFloatingIpIpv4Address) Get Floating IPv4 Address

The IP address of the Floating IP that is currently assigned to the Droplet.

### Responses

**200**

Success

get/metadata/v1/floating\_ip/ipv4/ip\_address

production

http://169.254.169.254/metadata/v1/floating\_ip/ipv4/ip\_address

### Response samples

- 200

Content type

text/plain

Copy

```
45.55.96.17
```

## [tag/Reserved-IPs](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs) Reserved IPs

DigitalOcean [Reserved IP addresses](https://www.digitalocean.com/docs/networking/floating-ips/) are publicly-accessible static IP addresses that you can assign to Droplets and instantly remap between other Droplets in the same datacenter.

## [tag/Reserved-IPs/operation/getReservedIp](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIp) Get Reserved IP Index

An index of IPv4/IPv6 Reserved IPs.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip

production

http://169.254.169.254/metadata/v1/reserved\_ip

### Response samples

- 200

Content type

text/plain

Copy

```
ipv4/
ipv6/
```

## [tag/Reserved-IPs/operation/getReservedIpIpv4](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv4) Get Reserved IPv4 Attributes Index

An index of IPv4 Reserved IP attributes.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv4

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv4

### Response samples

- 200

Content type

text/plain

Copy

```
active
ip_address
```

## [tag/Reserved-IPs/operation/getReservedIpIpv6](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv6) Get Reserved IPv6 Attributes Index

An index of IPv6 Reserved IP attributes.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv6

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv6

### Response samples

- 200

Content type

text/plain

Copy

```
active
ip_address
```

## [tag/Reserved-IPs/operation/getReservedIpIpv4Active](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv4Active) Get Reserved IPv4 Status

Displays true if a Reserved IP is currently assigned to the Droplet and false if it is not.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv4/active

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv4/active

### Response samples

- 200

Content type

text/plain

Copy

```
true
```

## [tag/Reserved-IPs/operation/getReservedIpIpv6Active](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv6Active) Get Reserved IPv6 Status

Displays true if a Reserved IPv6 is currently assigned to the Droplet and false if it is not.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv6/active

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv6/active

### Response samples

- 200

Content type

text/plain

Copy

```
true
```

## [tag/Reserved-IPs/operation/getReservedIpIpv4Address](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv4Address) Get Reserved IPv4 Address

The IP address of the Reserved IP that is currently assigned to the Droplet.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv4/ip\_address

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv4/ip\_address

### Response samples

- 200

Content type

text/plain

Copy

```
45.55.96.17
```

## [tag/Reserved-IPs/operation/getReservedIpIpv6Address](https://docs.digitalocean.com/reference/api/metadata/\#tag/Reserved-IPs/operation/getReservedIpIpv6Address) Get Reserved IPv6 Address

The IP address of the Reserved IPv6 that is currently assigned to the Droplet.

### Responses

**200**

Success

get/metadata/v1/reserved\_ip/ipv6/ip\_address

production

http://169.254.169.254/metadata/v1/reserved\_ip/ipv6/ip\_address

### Response samples

- 200

Content type

text/plain

Copy

```
2604:A880:0800:0010:0000:0000:017D:2001
```

## [tag/DNS](https://docs.digitalocean.com/reference/api/metadata/\#tag/DNS) DNS

Each Droplet's network configuration contains the IP addresses of DNS resolvers that the Droplet uses to locate and connect to hostnames on the internet.

## [tag/DNS/operation/getDns](https://docs.digitalocean.com/reference/api/metadata/\#tag/DNS/operation/getDns) Get DNS Attributes Index

An index of DNS attributes.

### Responses

**200**

Success

get/metadata/v1/dns

production

http://169.254.169.254/metadata/v1/dns

### Response samples

- 200

Content type

text/plain

Copy

```
nameservers
```

## [tag/DNS/operation/getDnsNameservers](https://docs.digitalocean.com/reference/api/metadata/\#tag/DNS/operation/getDnsNameservers) Get DNS Nameservers

The nameserver entries that are added to a Droplet's `/etc/resolv.conf` file during creation.

### Responses

**200**

Success

get/metadata/v1/dns/nameservers

production

http://169.254.169.254/metadata/v1/dns/nameservers

### Response samples

- 200

Content type

text/plain

Copy

```
2001:4860:4860::8844
2001:4860:4860::8888
8.8.8.8
```

## [tag/Tags](https://docs.digitalocean.com/reference/api/metadata/\#tag/Tags) Tags

[Tags are custom labels](https://www.digitalocean.com/docs/droplets/how-to/tag/) you can apply to Droplets and other DigitalOcean resources.

## [tag/Tags/operation/getTags](https://docs.digitalocean.com/reference/api/metadata/\#tag/Tags/operation/getTags) Get Associated Tags

An index of tags associated with the Droplet.

### Responses

**200**

Success

get/metadata/v1/tags

production

http://169.254.169.254/metadata/v1/tags

### Response samples

- 200

Content type

text/plain

Copy

```
production
application
v1
```

## [tag/Features](https://docs.digitalocean.com/reference/api/metadata/\#tag/Features) Features

Droplets have features that can be enabled depending on the Droplet's configuration.

## [tag/Features/operation/getFeatures](https://docs.digitalocean.com/reference/api/metadata/\#tag/Features/operation/getFeatures) Get Available Features

An index of DigitalOcean features available to the Droplet.

### Responses

**200**

Success

get/metadata/v1/features

production

http://169.254.169.254/metadata/v1/features

### Response samples

- 200

Content type

text/plain

Copy

```
dhcp_enabled
```

## [tag/Features/operation/getFeaturesDhcp](https://docs.digitalocean.com/reference/api/metadata/\#tag/Features/operation/getFeaturesDhcp) Get DHCP Status

Whether or not DHCPv4 and DHCPv6 are available to the Droplet.

### Responses

**200**

Success

get/metadata/v1/features/dhcp\_enabled

production

http://169.254.169.254/metadata/v1/features/dhcp\_enabled

### Response samples

- 200

Content type

text/plain

Copy

```
true
```

## [tag/Features/operation/getScheduledMigrations](https://docs.digitalocean.com/reference/api/metadata/\#tag/Features/operation/getScheduledMigrations) Get Scheduled Migrations

Returns the string `live_migrate` at least 10 minutes before a scheduled migration. If the request returns a blank string, we have not scheduled the Droplet for a migration.

### Responses

**200**

Success

get/v1/maintenance\_event

production

http://169.254.169.254/v1/maintenance\_event

### Response samples

- 200

Content type

text/plain

Copy

```
live_migrate
```

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