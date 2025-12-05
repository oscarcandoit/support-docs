---
url: "https://supabase.com/docs/guides/troubleshooting/upload-file-size-restrictions-Y4wQLT"
title: "Supabase Docs | Troubleshooting | Upload file size restrictions"
---

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

- [Start](https://supabase.com/docs/guides/getting-started)
- Products
- Build
- Manage
- Reference
- Resources

[![Supabase wordmark](https://supabase.com/docs/supabase-dark.svg)![Supabase wordmark](https://supabase.com/docs/supabase-light.svg)DOCS](https://supabase.com/docs)

Search docs...

K

[Sign up](https://supabase.com/dashboard)

1. [Troubleshooting](https://supabase.com/docs/guides/troubleshooting)

# Upload file size restrictions

Last edited: 9/9/2025

* * *

You can view the maximum file upload size from the [docs](https://supabase.com/docs/guides/storage/uploads/file-limits). It differs based on your plan and on any bucket or global limits you might have already set.

## Edit the maximum file upload size [\#](https://supabase.com/docs/guides/troubleshooting/upload-file-size-restrictions-Y4wQLT\#edit-the-maximum-file-upload-size)

There are two ways to edit the maximum file upload size:

- Global file upload size limit
- Bucket-level file upload size limit

### Global file upload size limit [\#](https://supabase.com/docs/guides/troubleshooting/upload-file-size-restrictions-Y4wQLT\#global-file-upload-size-limit)

To edit the global file upload size limit, change the value of _Global file size limit_ in the top section of [Storage Settings](https://supabase.com/dashboard/project/_/storage/settings).

If they are set higher than your new global limit, you’ll be asked to edit or remove any existing bucket-level limits first. The global limit takes precedence.

### Bucket-level file upload size limit [\#](https://supabase.com/docs/guides/troubleshooting/upload-file-size-restrictions-Y4wQLT\#bucket-level-file-upload-size-limit)

Follow these steps to edit the maximum file upload size at the bucket level:

1. Open a bucket in the [Storage Buckets](https://supabase.com/dashboard/project/_/storage/buckets/) page.
2. Select the overflow menu (three vertical dots icon), and then select _Edit bucket_.
3. Enable _Restrict file size_ and then set the file size limit for that bucket.

You won’t be able to set a limit that is greater than the global file upload size limit, as that takes precedence.

## File size restrictions [\#](https://supabase.com/docs/guides/troubleshooting/upload-file-size-restrictions-Y4wQLT\#file-size-restrictions)

Upload methods impose differing file size restrictions:

- [Standard uploads can only transfer up to 5 GBs](https://supabase.com/docs/guides/storage/uploads/standard-uploads?queryGroups=language&language=js). However, for files above 6MB, the below methods are more performant and reliable.
- [Resumable](https://supabase.com/docs/guides/storage/uploads/resumable-uploads) and [S3](https://supabase.com/docs/guides/storage/uploads/resumable-uploads) uploads can support transfers up to 50GB in size.

## Metadata

* * *

### Products

[Storage](https://supabase.com/docs/guides/troubleshooting?products=storage)

* * *

### Keywords

[upload](https://supabase.com/docs/guides/troubleshooting?tags=upload) [file](https://supabase.com/docs/guides/troubleshooting?tags=file) [size](https://supabase.com/docs/guides/troubleshooting?tags=size) [restriction](https://supabase.com/docs/guides/troubleshooting?tags=restriction)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/27431)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)