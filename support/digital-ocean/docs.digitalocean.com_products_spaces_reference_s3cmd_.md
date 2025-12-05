---
url: "https://docs.digitalocean.com/products/spaces/reference/s3cmd/"
title: "Setting Up s3cmd 2.x with DigitalOcean Spaces | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/spaces.77fdb5bd2197bad96040b9d1e46f6a66a0cb7b3c03213c5f52b42f43e268affa.svg)Spaces Object Storage](https://docs.digitalocean.com/products/spaces/)
- [Getting Started](https://docs.digitalocean.com/products/spaces/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/spaces/getting-started/quickstart/)
- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
  - [Create Spaces Bucket](https://docs.digitalocean.com/products/spaces/how-to/create/)
  - [Add and Remove Files](https://docs.digitalocean.com/products/spaces/how-to/add-and-remove-files/)
  - [Organize Files with Folders](https://docs.digitalocean.com/products/spaces/how-to/use-folders/)
  - [Destroy Spaces](https://docs.digitalocean.com/products/spaces/how-to/destroy/)
  - [Migrate with Flexify.IO](https://docs.digitalocean.com/products/spaces/how-to/migrate/)
  - [Transfer Buckets between Regions](https://docs.digitalocean.com/products/spaces/how-to/transfer-between-regions/)
  - [Share Links to Files](https://docs.digitalocean.com/products/spaces/how-to/set-file-permissions/)
  - [Set File Listing Permissions](https://docs.digitalocean.com/products/spaces/how-to/set-file-listing-permissions/)
  - [Manage Access](https://docs.digitalocean.com/products/spaces/how-to/manage-access/)
  - [Configure Access Logs](https://docs.digitalocean.com/products/spaces/how-to/access-logs/)
  - [Enable the CDN](https://docs.digitalocean.com/products/spaces/how-to/enable-cdn/)
  - [Manage the CDN Cache](https://docs.digitalocean.com/products/spaces/how-to/manage-cdn-cache/)
  - [Customize the CDN Endpoint](https://docs.digitalocean.com/products/spaces/how-to/customize-cdn-endpoint/)
  - [Configure Bucket Policies](https://docs.digitalocean.com/products/spaces/how-to/configure-bucket-policies/)
  - [Configure Lifecycle Rules](https://docs.digitalocean.com/products/spaces/how-to/configure-lifecycle-rules/)
  - [Enable Versioning](https://docs.digitalocean.com/products/spaces/how-to/enable-versioning/)
  - [Set File Metadata](https://docs.digitalocean.com/products/spaces/how-to/set-file-metadata/)
  - [Configure CORS](https://docs.digitalocean.com/products/spaces/how-to/configure-cors/)
  - [Use AWS S3 SDKs](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/)
- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
  - [Reference](https://docs.digitalocean.com/reference/api/spaces/)
  - [S3 Compatibility](https://docs.digitalocean.com/products/spaces/reference/s3-compatibility/)
  - [s3cmd 2.x Setup](https://docs.digitalocean.com/products/spaces/reference/s3cmd/)
  - [s3cmd 2.x Usage](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/)
  - [Transmit 4](https://docs.digitalocean.com/products/spaces/reference/transmit4/)
  - [Transmit 5](https://docs.digitalocean.com/products/spaces/reference/transmit5/)
  - [Cyberduck 6.2.x](https://docs.digitalocean.com/products/spaces/reference/cyberduck/)
  - [Terraform Backend](https://docs.digitalocean.com/products/spaces/reference/terraform-backend/)
- [Concepts](https://docs.digitalocean.com/products/spaces/concepts/)
  - [Best Practices](https://docs.digitalocean.com/products/spaces/concepts/best-practices/)
- [Details](https://docs.digitalocean.com/products/spaces/details/)
  - [Features](https://docs.digitalocean.com/products/spaces/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/spaces/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/spaces/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/spaces/details/limits/)

- [Reference](https://docs.digitalocean.com/products/spaces/reference/)
- s3cmd 2.x Setup

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Setting Up s3cmd 2.x with DigitalOcean Spaces

Validated on 19 Apr 2019 • Last edited on 23 Oct 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

s3cmd is a popular cross-platform command-line tool for managing S3 and S3-compatible object stores.

To use s3cmd with DigitalOcean Spaces, you need:

- **s3cmd version 2.0.0+ or higher.** You can check your version with `s3cmd --version`. Versions from package managers may be out of date, so we recommend using the [s3cmd download page](https://s3tools.org/download). [Homebrew](https://brew.sh/) users can install the latest version with the command `brew install s3cmd`.

- **An [access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) pair for your Spaces buckets.** To generate these, visit the [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys) in the DigitalOcean Control Panel.


## Initialize the Configuration File

By default, s3cmd stores its configuration file, `.s3cfg`, in the home directory of the user that ran the configuration command. `.s3cfg` is a plain text file of key/value pairs which can be edited directly once it has been created.

s3cmd uses the options set in its default configuration file when you run commands. You can specify a different configuration by appending `-c ~/path/to/config/file` to each command you run.

If DigitalOcean is the main or only provider you’ll connect to with `s3cmd` and you don’t want to specify its configuration file every time you use s3cmd, configure the default `~/.s3cfg` file with the following command:

```
s3cmd --configure
```

If you’re already using s3cmd with another service, you can create an alternate configuration file by adding the `-c` flag and supplying a filename. The configuration file will be created in the directory where you issue the command, so specify the path if you want it created elsewhere.

## Enter Access Keys

The script begins by asking for an Access Key and Secret Key. If you don’t already have keys, you can generate a set for s3cmd by visiting the control panel’s [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys).

Enter your keys, then accept `US` for the **Default Region** because the region information isn’t relevant to DigitalOcean. If you prefer, you can use the environment variables `AWS_ACCESS_KEY_ID``AWS_SECRET_ACCESS_KEY` to store a set of keys.

```text
Enter new values or accept defaults in brackets with Enter.
Refer to user manual for detailed description of all options.
Access key and Secret key are your identifiers for Amazon S3. Leave them empty for using the env variables.
Access Key []: EXAMPLE7UQOTHDTF3GK4
Secret Key []: exampleb8e1ec97b97bff326955375c5
Default Region [US]:
```

## Enter the DigitalOcean Endpoint

Next, enter the DigitalOcean Spaces endpoint. The Spaces endpoint naming pattern is `<region>.digitaloceanspaces.com`, like `nyc3.digitaloceanspaces.com`. Use the endpoint for the region your buckets are in.

```text
Use "s3.amazonaws.com" for S3 Endpoint and not modify it to the target Amazon S3.
S3 Endpoint [s3.amazonaws.com]: nyc3.digitaloceanspaces.com
```

The next prompt asks for a URL template to access your bucket. Because Spaces supports [DNS-based endpoint URLs](https://docs.digitalocean.com/products/spaces/#features). Enter the following template format exactly as written: `nyc3.digitaloceanspaces.com`. Again, you will change this if your bucket is in a different region.

```text
Use "%(bucket)s.s3.amazonaws.com" to the target Amazon S3. "%(bucket)s" and "%(location)s" vars c
an be used if the target S3 system supports dns based buckets.
DNS-style bucket+hostname:port template for accessing a bucket []: nyc3.digitaloceanspaces.com
```

## Optional: Set an Encryption Password

The next prompt is for an optional encryption password. Unlike HTTPS, which protects files only while in transit, GPG encryption prevents others from reading files both in transit and while they are stored on DigitalOcean. Setting a password now won’t cause objects to be automatically encrypted; it only makes encryption available later.

```text
Encryption password is used to protect your files from reading
by unauthorized persons while in transfer to S3
Encryption password:
```

The next prompt asks for the path to the GPG program. On Linux, you can accept the default by pressing `ENTER`. If you’re following these instructions on macOS, you may have to install GPG with a tool like [Homebrew](https://brew.sh/) (`brew install gpg`). You can then find GPG’s path with `which gpg`.

```text
Path to GPG program [/usr/bin/gpg]:
```

## Connect via HTTPS

The next prompt asks to use the HTTPS protocol. HTTPS protects data from being read while it’s in transit.

DigitalOcean Spaces doesn’t support unencrypted transfer, so you must use HTTPS. Press `ENTER` to accept the default.

```text
When using secure HTTPS protocol all communication with Amazon S3
servers is protected from 3rd party eavesdropping. This method is
slower than plain HTTP, and can only be proxied with Python 2.7 or newer
Use HTTPS protocol [Yes]: Yes
```

## Optional: Set a Proxy Server

The final prompt is for an HTTP proxy server. If your network requires one, enter its IP address or domain name without the protocol, for example, `203.0.113.1` or `proxy.example.com`. If you aren’t using one, press `ENTER` to leave it blank.

```text
On some networks all internet access must go through a HTTP proxy.
Try setting it here if you can't connect to S3 directly
HTTP Proxy server name:
```

## Confirm, Test, and Save Settings

After the prompt for the HTTP Proxy server name, the configuration script presents a summary of the values it will use, followed by the opportunity to test them:

```text
New settings:
 Access Key: EXAMPLES7UQOTHDTF3GK4
 Secret Key: b8e1ec97b97bff326955375c5example
 Default Region: US
 S3 Endpoint: nyc3.digitaloceanspaces.com
 DNS-style bucket+hostname:port template for accessing a bucket: %(bucket)s.n
yc3.digitaloceanspaces.com
 Encryption password: secure_password
 Path to GPG program: /usr/bin/gpg
 Use HTTPS protocol: True
 HTTP Proxy server name:
 HTTP Proxy server port: 0

Test access with supplied credentials? [Y/n] Y
```

When the test completes successfully, enter `Y` to save the settings:

```text
Please wait, attempting to list all buckets...
Success. Your access key and secret key worked fine :-)

Now verifying that encryption works...
Success. Encryption and decryption worked fine :-)

Save settings? [y/N] Y
```

If the test fails or you choose `N` you’ll have the opportunity to retry the configuration. Once you save the configuration, you’ll receive confirmation of its location:

```
Configuration saved to '/home/sammy/nyc3'
```

## Verify with a “Hello, World!” Upload

After saving your configuration, confirm that your setup works by uploading a test file. For example, with s3cmd, you can verify your setup by creating a file and uploading it to your Spaces bucket:

```shell
echo "Hello, World!" > hello-world.txt
s3cmd put hello-world.txt s3://example-space/hello-world.txt
```

Replace `example-space` with the name of your Space. If the upload succeeds, your configuration is correct.

### Using AWS SDK

You can also test the same credentials with the AWS SDK. The following examples show how to upload a `hello-world.txt` object in multiple programming languages:

JavaScript (ES6+)

```javascript
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  endpoint: "https://nyc3.digitaloceanspaces.com",
  forcePathStyle: false,
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.SPACES_KEY,
    secretAccessKey: process.env.SPACES_SECRET
  }
});

const params = {
  Bucket: "example-space",
  Key: "hello-world.txt",
  Body: "Hello, World!",
  ACL: "private"
};

const uploadObject = async () => {
  try {
    await s3Client.send(new PutObjectCommand(params));
    console.log("Upload successful");
  } catch (err) {
    console.error("Error", err);
  }
};

uploadObject();
```

Go

```go
package main

import (
    "fmt"
    "strings"
    "os"

    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/credentials"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/s3"
)

func main() {
    key := os.Getenv("SPACES_KEY")
    secret := os.Getenv("SPACES_SECRET")

    s3Config := &aws.Config{
        Credentials:      credentials.NewStaticCredentials(key, secret, ""),
        Endpoint:         aws.String("https://nyc3.digitaloceanspaces.com"),
        S3ForcePathStyle: aws.Bool(false),
        Region:           aws.String("us-east-1"),
    }

    newSession := session.New(s3Config)
    s3Client := s3.New(newSession)

    object := &s3.PutObjectInput{
        Bucket: aws.String("example-space"),
        Key:    aws.String("hello-world.txt"),
        Body:   strings.NewReader("Hello, World!"),
        ACL:    aws.String("private"),
    }

    if _, err := s3Client.PutObject(object); err != nil {
        fmt.Println(err.Error())
    } else {
        fmt.Println("Upload successful")
    }
}
```

Python 3

```python
import os
import boto3
import botocore.config

session = boto3.session.Session()
client = session.client(
    's3',
    endpoint_url='https://nyc3.digitaloceanspaces.com',
    config=botocore.config.Config(s3={'addressing_style': 'virtual'}),
    region_name='nyc3',
    aws_access_key_id=os.getenv('SPACES_KEY'),
    aws_secret_access_key=os.getenv('SPACES_SECRET')
)

client.put_object(
    Bucket='example-space',
    Key='hello-world.txt',
    Body=b'Hello, World!',
    ACL='private'
)

print("Upload successful")
```

Ruby

```ruby
require 'aws-sdk-s3'

client = Aws::S3::Client.new(
  access_key_id: ENV['SPACES_KEY'],
  secret_access_key: ENV['SPACES_SECRET'],
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  force_path_style: false,
  region: 'us-east-1'
)

client.put_object(
  bucket: "example-space",
  key: "hello-world.txt",
  body: "Hello, World!",
  acl: "private"
)

puts "Upload successful"
```

cURL

```shell
SPACE="example-space"
REGION="nyc3"
KEY="$SPACES_KEY"
SECRET="$SPACES_SECRET"
FILE="hello-world.txt"

echo "Hello, World!" > $FILE

DATE=$(date -R)
CONTENT_TYPE="text/plain"
ACL="x-amz-acl:private"
STRING="PUT\n\n$CONTENT_TYPE\n$DATE\n$ACL\n/$SPACE/$FILE"
SIGNATURE=$(echo -en "${STRING}" | openssl sha1 -hmac "${SECRET}" -binary | base64)

curl -X PUT -T "$FILE" \
  -H "Host: $SPACE.$REGION.digitaloceanspaces.com" \
  -H "Date: $DATE" \
  -H "Content-Type: $CONTENT_TYPE" \
  -H "$ACL" \
  -H "Authorization: AWS $KEY:$SIGNATURE" \
  "https://$SPACE.$REGION.digitaloceanspaces.com/$FILE"
```

If you can upload and retrieve this file successfully, your Spaces configuration with s3cmd and your chosen SDK is working correctly.

## More Information

You can use our [quick reference on s3cmd usage](https://docs.digitalocean.com/products/spaces/reference/s3cmd-usage/) to get started. For a comprehensive guide to s3cmd, see the [s3cmd usage guide](https://s3tools.org/usage) or access the help file from the command line with `s3cmd --help`.

In this article...

- [Initialize the Configuration File](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#initialize-the-configuration-file)
- [Enter Access Keys](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#enter-access-keys)
- [Enter the DigitalOcean Endpoint](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#enter-the-digitalocean-endpoint)
- [Optional: Set an Encryption Password](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#optional-set-an-encryption-password)
- [Connect via HTTPS](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#connect-via-https)
- [Optional: Set a Proxy Server](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#optional-set-a-proxy-server)
- [Confirm, Test, and Save Settings](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#confirm-test-and-save-settings)
- [Verify with a “Hello, World!” Upload](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#verify-with-a-hello-world-upload)
  - [Using AWS SDK](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#using-aws-sdk)
- [More Information](https://docs.digitalocean.com/products/spaces/reference/s3cmd/#more-information)

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

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)