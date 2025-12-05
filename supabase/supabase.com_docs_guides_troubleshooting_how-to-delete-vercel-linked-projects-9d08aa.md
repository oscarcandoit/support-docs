---
url: "https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa"
title: "Supabase Docs | Troubleshooting | How to delete Vercel linked projects"
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

# How to delete Vercel linked projects

Last edited: 11/26/2025

* * *

When you create Supabase projects through the Vercel Marketplace, complete deletion requires action on both platforms.

## Deleting projects [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#deleting-projects)

### Method 1: Delete from Supabase first, then clean up in Vercel [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#method-1-delete-from-supabase-first-then-clean-up-in-vercel)

This method requires two steps - first delete in Supabase, then clean up in Vercel.

1. **Delete from Supabase Dashboard**

Go to your [project settings](https://supabase.com/dashboard/project/_/settings/general) and click **"Delete project"**. This permanently removes your database and marks it as "uninstalled" in Vercel.

![Delete project button in Supabase project settings](https://supabase.com/docs/img/troubleshooting/54428354-a1f4-4c44-bd03-d87f4b925d94.png)

2. **Clean up in Vercel**

After deleting from Supabase, clean up in Vercel:


   - Navigate to your [Vercel dashboard](https://vercel.com/dashboard)
   - Go to the **Storage** tab
   - Click on the Supabase project (it will show as "uninstalled")

![Uninstalled Supabase project in Vercel Storage](https://supabase.com/docs/img/troubleshooting/cf450bca-aad3-4783-ae3b-5cc83e0afa54.png)

   - Scroll down and find the **Settings** tab in the sidebar

![Vercel project settings navigation](https://supabase.com/docs/img/troubleshooting/da70bc33-f123-4567-8901-abcdef123456.png)

   - Click **Delete Database** to completely remove it

![Delete Database button in Vercel settings](https://supabase.com/docs/img/troubleshooting/c4e7b193-4567-8901-abcd-ef1234567890.png)

### Method 2: Delete directly from Vercel (removes from both platforms) [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#method-2-delete-directly-from-vercel-removes-from-both-platforms)

This method deletes the project from both Vercel and Supabase in one action.

1. **Open Vercel dashboard**

Navigate to your [Vercel dashboard](https://vercel.com/dashboard) and go to the **Storage** tab.

2. **Select your project**

Click on your Supabase project to open it.

3. **Navigate to Settings**

Find and click the **Settings** tab in the sidebar.

![Vercel project settings navigation](https://supabase.com/docs/img/troubleshooting/da70bc33-f123-4567-8901-abcdef123456.png)

4. **Delete the project**

Scroll down and click **Delete Database**. This removes the project from both Vercel and Supabase simultaneously.

![Delete Database button in Vercel settings](https://supabase.com/docs/img/troubleshooting/c4e7b193-4567-8901-abcd-ef1234567890.png)


## Transferring projects from Vercel organizations [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#transferring-projects-from-vercel-organizations)

**Important:** You cannot directly "unlink" a project from a Vercel organization. Instead, you need to transfer the project to another organization.

If you want to move a Vercel-linked project to a different organization:

1. **Transfer the project**

Go to your [project settings](https://supabase.com/dashboard/project/_/settings/general) and look for **"Transfer Project"**. Transfer your project to a different organization.

![Transfer project option in Supabase project settings](https://supabase.com/docs/img/troubleshooting/627c1a3e-153e-40b5-9a91-a4f7bd7673a4.png)

Note: The owner must be a member of both the source and target organizations. Transferring a Vercel-managed project will remove its linked Vercel storage from your team.

2. **Clean up in Vercel**

After transferring, the project will show as "uninstalled" in Vercel but still appear under Storage. You need to manually delete it:
   - Navigate to your [Vercel dashboard](https://vercel.com/dashboard)
   - Go to the **Storage** tab
   - Click on the Supabase project (it will show as "uninstalled")
   - Go to **Settings** and click **Delete Database**
3. **Reconnect if needed**

To reconnect the transferred project after the transfer, use the standard Vercel integration.


## Deleting the organization [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#deleting-the-organization)

Delete all associated projects before deleting the organization.

1. **Navigate to organization settings and delete**

Go to your [organization settings](https://supabase.com/dashboard/org/_/general) and click **"Delete organization in Vercel Marketplace"**. This opens the Vercel settings page.

![Delete organization in Vercel Marketplace button](https://supabase.com/docs/img/troubleshooting/ff01bba8-abcd-ef12-3456-7890abcdef12.png)

2. **Uninstall integration**

Scroll down and click **Uninstall Integration** to fully remove the organization and disconnect it from Vercel.

![Uninstall Integration button in Vercel settings](https://supabase.com/docs/img/troubleshooting/f294a4d6-ef12-3456-7890-abcdef123456.png)


## Important notes [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#important-notes)

- Projects created through Vercel Marketplace can be deleted from either platform (Supabase or Vercel), with cleanup required on Vercel if deleting from Supabase first.
- Deletion permanently removes all project data.
- After uninstalling the integration, non-Vercel users invited to the organization retain their access.

## Troubleshooting [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#troubleshooting)

If you encounter issues:

1. Verify you have necessary permissions in both platforms
2. Refresh your browser and retry
3. Ensure all projects are deleted before deleting the organization
4. [Contact support](https://supabase.com/dashboard/support/new) if problems persist

## Related resources [\#](https://supabase.com/docs/guides/troubleshooting/how-to-delete-vercel-linked-projects-9d08aa\#related-resources)

- [Vercel Marketplace integration guide](https://supabase.com/docs/guides/integrations/vercel-marketplace)
- [Managing Supabase organizations](https://supabase.com/docs/guides/platform/access-control)

## Metadata

* * *

### Products

[Platform](https://supabase.com/docs/guides/troubleshooting?products=platform)

* * *

### Keywords

[vercel](https://supabase.com/docs/guides/troubleshooting?tags=vercel) [delete](https://supabase.com/docs/guides/troubleshooting?tags=delete) [marketplace](https://supabase.com/docs/guides/troubleshooting?tags=marketplace) [projects](https://supabase.com/docs/guides/troubleshooting?tags=projects) [organization](https://supabase.com/docs/guides/troubleshooting?tags=organization)

* * *

### Is this helpful?

NoYes

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)