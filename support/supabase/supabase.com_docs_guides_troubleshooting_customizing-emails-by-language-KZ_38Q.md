---
url: "https://supabase.com/docs/guides/troubleshooting/customizing-emails-by-language-KZ_38Q"
title: "Supabase Docs | Troubleshooting | Customizing Emails by Language"
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

# Customizing Emails by Language

Last edited: 9/9/2025

* * *

When you register a user, you can create meta-data about them.

Creating meta-data with the JS-Client's [signUp function](https://supabase.com/docs/reference/javascript/auth-signup?example=sign-up-with-additional-user-metadata)

```
1
2
3
4
5
6
7
8
9
10
11

const { data, error } = await supabase.auth.signUp({  email: 'email@some_[email.com](http://email.com/)',  password: 'example-password',  options: {    data: {      first_name: 'John',      last_name: 'Doe',      age: 27,    },  },})
```

The above example creates a user entry that includes information about their name and age. The data is stored in the auth.users table in the `auth.raw_user_meta_data` column. You can view it in the auth schema with the [SQL Editor](https://supabase.com/dashboard/project/_/editor).

It can be accessed in a project's [Email Templates](https://supabase.com/dashboard/project/_/auth/templates). Below is an example:

![image](https://supabase.com/docs/img/troubleshooting/3eeb2435-dd1c-41bc-9557-44cabff38f59.png)

If you need to update a user's meta-data, you can do so with the [`updateUser`](https://supabase.com/docs/reference/javascript/auth-updateuser?example=update-the-users-metadata) function.

The meta-data can be used to store a users language preferences. You could then use "if statements" in the email template to set the response for a specific language:

```
1
2
3
4
5
6
7

{{if eq .Data.langauge "en" }}<h1>Welcome!</h1>{{ else if eq .Data.langauge "pl" }}<h1>Witamy!</h1>{{ else }}<h1>chuS'ugh, tera' je (Klingon)</h1>{{end}}
```

Supabase uses the [Go Templating Language](https://pkg.go.dev/text/template) to render emails. It has advanced features for conditions that you may want to [explore](https://gohugo.io/templates/introduction/). For more examples, there is a [GitHub discussion](https://github.com/supabase/gotrue/issues/80#issuecomment-1552264148) that discusses advanced language templates.

## Metadata

* * *

### Products

[Auth](https://supabase.com/docs/guides/troubleshooting?products=auth)

* * *

### Keywords

[emails](https://supabase.com/docs/guides/troubleshooting?tags=emails)

* * *

### Is this helpful?

NoYes

* * *

[View discussion on GitHub](https://github.com/orgs/supabase/discussions/21227)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)