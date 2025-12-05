---
url: "https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/"
title: "How to Use DigitalOcean Spaces with AWS S3 SDKs | DigitalOcean Documentation"
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

- [How-Tos](https://docs.digitalocean.com/products/spaces/how-to/)
- Use AWS S3 SDKs

[Give Feedback](https://ideas.digitalocean.com/documentation)

# How to Use DigitalOcean Spaces with AWS S3 SDKs

Validated on 22 Jan 2020 • Last edited on 23 Oct 2025

Spaces Object Storage is an S3-compatible service for storing and serving large amounts of data. The built-in Spaces CDN minimizes page load times, improves performance, and reduces bandwidth and infrastructure costs.

The Spaces API is interoperable with the AWS S3 API, meaning you can use existing S3 tools and libraries with Spaces. A common use case is managing Spaces buckets programmatically with AWS’ S3 Software Development Kits (SDKs). The S3 SDKs are available in a [variety of languages](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#usage-examples) and most are compatible with the Spaces API.

When using S3-focused tools, an S3 “key” is the name of a file in a bucket.

## Setup and Configuration

### Install the SDK

Install the AWS SDK using the package manager for your language of choice.

JavaScript (ES6+)

```
npm install @aws-sdk/client-s3
```

Go

```
go get -u github.com/aws/aws-sdk-go
```

PHP

```
php composer.phar require aws/aws-sdk-php
```

Python 3

```
pip install boto3
```

Ruby

```
gem install aws-sdk-s3
```

C#

```
dotnet add package AWSSDK.S3
```

### Create Access Keys

To use the Spaces API, you need to [create an access key and secret key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/#access-keys) for your bucket from the [Spaces Access Keys Page](https://cloud.digitalocean.com/spaces/access_keys).

The examples below rely on environment variables to access these keys. Export `SPACES_KEY` and `SPACES_SECRET` to your environment (for example, `export SPACES_KEY=EXAMPLE7UQOTHDTF3GK4`) to make them available to your code.

### Configure a Client

To use Spaces with tools or libraries designed for the S3 API, you must configure the “endpoint” setting to point to buckets. The value should be `${REGION}.digitaloceanspaces.com` where `${REGION}` is the DigitalOcean datacenter region (for example, `nyc3`) where your bucket is located.

Using presigned URLs does not allow transferred files to be cached when using the Spaces CDN. Attempting to do so may result in double the bandwidth charge without the CDN’s performance benefit.

JavaScript (ES6+)

Note
To successfully create a new bucket, this SDK requires the `region` to be `us-east-1`, an AWS region name. The DigitalOcean datacenter region is based on the `endpoint` value, which is `nyc3` in the example below.

```javascript
import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: "https://nyc3.digitaloceanspaces.com",
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET
    }
});

export { s3Client };
```

Go

Note
To successfully create a new bucket, this SDK requires the `region` to be `us-east-1`, an AWS region name. The DigitalOcean datacenter region is based on the `endpoint` value, which is `nyc3` in the example below.

```go
package main

import (
    "os"
    // Additional imports needed for examples below
    "fmt"
    "io"
    "strings"
    "time"

    "github.com/aws/aws-sdk-go/aws"
    "github.com/aws/aws-sdk-go/aws/credentials"
    "github.com/aws/aws-sdk-go/aws/session"
    "github.com/aws/aws-sdk-go/service/s3"
)

func main() {
    key := os.Getenv("SPACES_KEY")
    secret := os.Getenv("SPACES_SECRET")

    s3Config := &aws.Config{
        Credentials: credentials.NewStaticCredentials(key, secret, ""),
        Endpoint:    aws.String("https://nyc3.digitaloceanspaces.com"),
        Region:      aws.String("us-east-1"),
        S3ForcePathStyle: aws.Bool(false), // // Configures to use subdomain/virtual calling format. Depending on your version, alternatively use o.UsePathStyle = false
    }

    newSession := session.New(s3Config)
    s3Client := s3.New(newSession)

    // ...
```

PHP

Note
To successfully create a new bucket, this SDK requires the `region` to be `us-east-1`, an AWS region name. The DigitalOcean datacenter region is based on the `endpoint` value, which is `nyc3` in the example below.

```php
<?php

// Included aws/aws-sdk-php via Composer's autoloader
require 'vendor/autoload.php';
use Aws\S3\S3Client;

$client = new Aws\S3\S3Client([\
        'version' => 'latest',\
        'region'  => 'us-east-1',\
        'endpoint' => 'https://nyc3.digitaloceanspaces.com',\
        'use_path_style_endpoint' => false, // Configures to use subdomain/virtual calling format.\
        'credentials' => [\
                'key'    => getenv('SPACES_KEY'),\
                'secret' => getenv('SPACES_SECRET'),\
            ],\
]);
```

Python 3

```python
import os
import boto3

session = boto3.session.Session()
client = session.client('s3',
                        region_name='nyc3',
                        endpoint_url='https://nyc3.digitaloceanspaces.com',
                        aws_access_key_id=os.getenv('SPACES_KEY'),
                        aws_secret_access_key=os.getenv('SPACES_SECRET'))
```

Ruby

Note
To successfully create a new bucket, this SDK requires the `region` to be `us-east-1`, an AWS region name. The DigitalOcean datacenter region is based on the `endpoint` value, which is `nyc3` in the example below.

```ruby
require 'aws-sdk-s3'

client = Aws::S3::Client.new(
  access_key_id: ENV['SPACES_KEY'],
  secret_access_key: ENV['SPACES_SECRET'],
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  force_path_style: false, // Configures to use subdomain/virtual calling format.
  region: 'us-east-1'
)
```

C#

```c#
using System;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;

string accessKey = Environment.GetEnvironmentVariable("SPACES_KEY");
string secretKey = Environment.GetEnvironmentVariable("SPACES_SECRET");

AmazonS3Config config = new AmazonS3Config();
config.ServiceURL = "https://nyc3.digitaloceanspaces.com";

AmazonS3Client s3Client = new AmazonS3Client(
        accessKey,
        secretKey,
        config
        );
```

Warning

Due to an AWS-specific behavior in all versions of the SDK except Python 3, to successfully create a new bucket, you must specify an AWS region, such as `us-east-1`, in your configuration. This is because, when creating a bucket, the SDK sends an entirely different payload if a custom region is specified, which results in an error.

Specifying `us-east-1` does not result in slower performance, regardless of your bucket’s location. The SDK checks the region for verification purposes but never sends the payload there. Instead, it sends the payload to the specified custom endpoint.

## Calling S3 API Commands

After your client is configured, you can call any supported S3 command against Spaces. Here are examples that create a new bucket, and then list all buckets in your account.

JavaScript (ES6+)

```javascript
import { S3Client, CreateBucketCommand, ListBucketsCommand } from '@aws-sdk/client-s3';

async function main() {
  const client = new S3Client({
    endpoint: 'https://nyc3.digitaloceanspaces.com',
    region: 'us-east-1',
    forcePathStyle: false,
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET
    }
  });

  await client.send(new CreateBucketCommand({ Bucket: 'my-new-space' }));
  const { Buckets } = await client.send(new ListBucketsCommand({}));
  console.log(Buckets?.map(b => b.Name));
}
main().catch(console.error);
```

Go

```go
package main

import (
    "fmt"
    "log"
    "os"

    "github.com/minio/minio-go"
)

func main() {
    accessKey := os.Getenv("SPACES_KEY")
    secKey := os.Getenv("SPACES_SECRET")
    endpoint := "nyc3.digitaloceanspaces.com"
    spaceName := "my-new-space"
    ssl := true

    client, err := minio.New(endpoint, accessKey, secKey, ssl)
    if err != nil { log.Fatal(err) }

    if err := client.MakeBucket(spaceName, "us-east-1"); err != nil {
        log.Fatal(err)
    }

    spaces, err := client.ListBuckets()
    if err != nil { log.Fatal(err) }
    for _, space := range spaces {
        fmt.Println(space.Name)
    }
}
```

Python 3

```python
import boto3, os
from botocore.client import Config

session = boto3.session.Session()
client = session.client(
    's3',
    region_name='nyc3',
    endpoint_url='https://nyc3.digitaloceanspaces.com',
    aws_access_key_id=os.getenv('SPACES_KEY'),
    aws_secret_access_key=os.getenv('SPACES_SECRET'),
    config=Config(s3={'addressing_style': 'virtual'})
)

client.create_bucket(Bucket='my-new-space')
print([b['Name'] for b in client.list_buckets()['Buckets']])
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

client.create_bucket(bucket: 'my-new-space')
client.list_buckets.buckets.each { |b| puts b.name }
```

PHP

```php
<?php
require 'vendor/autoload.php';
use Aws\S3\S3Client;

$client = new S3Client([\
  'version' => 'latest',\
  'region' => 'us-east-1',\
  'endpoint' => 'https://nyc3.digitaloceanspaces.com',\
  'use_path_style_endpoint' => false,\
  'credentials' => [\
    'key'    => getenv('SPACES_KEY'),\
    'secret' => getenv('SPACES_SECRET'),\
  ],\
]);

$client->createBucket(['Bucket' => 'my-new-space']);
$result = $client->listBuckets();
foreach ($result['Buckets'] as $b) { echo $b['Name'], PHP_EOL; }
```

## Additional Resources

For more details on compatibility with the S3 API, see the [Spaces API documentation](https://docs.digitalocean.com/reference/api/spaces/).

The full reference documentation for the SDKs used above can be found at:

- [AWS SDK for JavaScript Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
- [AWS SDK for Go Reference](https://docs.aws.amazon.com/sdk-for-go/api/service/s3/)
- [AWS SDK for PHP Reference](https://docs.aws.amazon.com/aws-sdk-php/v3/api/api-s3-2006-03-01.html)
- [Boto 3 Documentation (Python 3)](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html)
- [AWS SDK for Ruby Reference](https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/S3.html)
- [AWS SDK for .NET Reference](https://docs.aws.amazon.com/sdk-for-net/v3/developer-guide/s3-apis-intro.html)

In this article...

- [Setup and Configuration](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#setup-and-configuration)
  - [Install the SDK](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#install-the-sdk)
  - [Create Access Keys](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#create-access-keys)
  - [Configure a Client](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#configure-a-client)
- [Calling S3 API Commands](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#calling-s3-api-commands)
- [Additional Resources](https://docs.digitalocean.com/products/spaces/how-to/use-aws-sdks/#additional-resources)

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