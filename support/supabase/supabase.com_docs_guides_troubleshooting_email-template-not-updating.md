---
url: "https://supabase.com/docs/guides/troubleshooting/email-template-not-updating"
title: "Supabase Docs | Troubleshooting | Email template not updating"
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

# Email template not updating

Last edited: 11/26/2025

* * *

If your email templates are not updated, check [Auth Logs](https://supabase.com/dashboard/project/_/logs/auth-logs) for any errors when the email is sent. When there are errors, we will use a fallback template with valid syntax so it will not show any of your customizations.

Typical errors relate to invalid syntax involving variables. Refer to [the Email Templates docs](https://supabase.com/docs/guides/auth/auth-email-templates#terminology) for the supported variables and syntax.

**Example error message**

```
1
2

"event": "templatemailer_template_body_parse_error","msg": "templatemailer: template type \"recovery\": template: https://api.supabase.com/platform/auth/PROJECT_ID/templates/recovery:2: function \"default\" not defined",
```

The error shows an issue with `default` which is used in the invalid syntax below.

```
1

{{ .Data.display_name | default: "test" }}
```

The final correct syntax after removing invalid syntax.

```
1

{{ .Data.display_name }}
```

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth) [Studio](https://supabase.com/docs/guides/troubleshooting?products=studio)

* * *

### Related error codes

[templatemailer\_template\_body\_parse\_error](https://supabase.com/docs/guides/troubleshooting?errorCodes=templatemailer_template_body_parse_error)

* * *

### Keywords

[email](https://supabase.com/docs/guides/troubleshooting?tags=email) [template](https://supabase.com/docs/guides/troubleshooting?tags=template)

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