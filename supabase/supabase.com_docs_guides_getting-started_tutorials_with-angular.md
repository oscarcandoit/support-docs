---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-angular"
title: "Build a User Management App with Angular | Supabase Docs"
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

Main menu

[Start with Supabase](https://supabase.com/docs/guides/getting-started)

[Features](https://supabase.com/docs/guides/getting-started/features)

[Architecture](https://supabase.com/docs/guides/getting-started/architecture)

Framework Quickstarts[Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
[React](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
[Nuxt](https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs)
[Vue](https://supabase.com/docs/guides/getting-started/quickstarts/vue)
[Hono](https://supabase.com/docs/guides/getting-started/quickstarts/hono)
[Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)
[iOS SwiftUI](https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/quickstarts/kotlin)
[SvelteKit](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit)
[Laravel PHP](https://supabase.com/docs/guides/getting-started/quickstarts/laravel)
[Ruby on Rails](https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails)
[SolidJS](https://supabase.com/docs/guides/getting-started/quickstarts/solidjs)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs)
[Refine](https://supabase.com/docs/guides/getting-started/quickstarts/refine)

Web app demos[Next.js](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
[React](https://supabase.com/docs/guides/getting-started/tutorials/with-react)
[Vue 3](https://supabase.com/docs/guides/getting-started/tutorials/with-vue-3)
[Nuxt 3](https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3)
[Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-angular)
[RedwoodJS](https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs)
[SolidJS](https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs)
[Svelte](https://supabase.com/docs/guides/getting-started/tutorials/with-svelte)
[SvelteKit](https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit)
[Refine](https://supabase.com/docs/guides/getting-started/tutorials/with-refine)

Mobile tutorials[Flutter](https://supabase.com/docs/guides/getting-started/tutorials/with-flutter)
[Expo React Native](https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native)
[Android Kotlin](https://supabase.com/docs/guides/getting-started/tutorials/with-kotlin)
[Ionic React](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react)
[Ionic Vue](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue)
[Ionic Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular)
[Swift](https://supabase.com/docs/guides/getting-started/tutorials/with-swift)

AI Tools

Prompts

[Model context protocol (MCP)](https://supabase.com/docs/guides/getting-started/mcp)

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

Getting Started

1. [Start with Supabase](https://supabase.com/docs/guides/getting-started)
3. Web app demos
5. [Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-angular)

# Build a User Management App with Angular

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/user-management-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/angular-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#set-up-the-database-schema)

Now set up the database schema. You can use the "User Management Starter" quickstart in the SQL Editor, or you can copy/paste the SQL from below and run it.

DashboardSQL

1. Go to the [SQL Editor](https://supabase.com/dashboard/project/_/sql) page in the Dashboard.
2. Click **User Management Starter** under the **Community > Quickstarts** tab.
3. Click **Run**.

You can pull the database schema down to your local project by running the `db pull` command. Read the [local development docs](https://supabase.com/docs/guides/cli/local-development#link-your-project) for detailed instructions.

```
1
2
3

supabase link --project-ref <project-id># You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>supabase db pull
```

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#building-the-app)

Start with building the Angular app from scratch.

### Initialize an Angular app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#initialize-an-angular-app)

You can use the [Angular CLI](https://angular.io/cli) to initialize
an app called `supabase-angular`. The command sets some defaults, that you change to suit your needs:

```
1
2

npx ng new supabase-angular --routing false --style css --standalone false --zoneless true --ssr falsecd supabase-angular
```

Then, install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

Finally, save the environment variables in the `src/environments/environment.ts` file.
All you need are the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#get-api-details).
The application exposes these variables in the browser, and that's fine as you have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on the Database.

src/environments/environment.ts

```
1
2
3
4
5

export const environment = {  production: false,  supabaseUrl: 'YOUR_SUPABASE_URL',  supabaseKey: 'YOUR_SUPABASE_KEY',}
```

Now you have the API credentials in place, create a `SupabaseService` with `ng g s supabase` and add the following code to initialize the Supabase client and implement functions to communicate with the Supabase API.

src/app/supabase.service.ts

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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73

import { Injectable } from '@angular/core'import {  AuthChangeEvent,  AuthSession,  createClient,  Session,  SupabaseClient,  User,} from '@supabase/supabase-js'import { environment } from '../environments/environment'export interface Profile {  id?: string  username: string  website: string  avatar_url: string}@Injectable({  providedIn: 'root',})export class SupabaseService {  private supabase: SupabaseClient  _session: AuthSession | null = null  constructor() {    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)  }  get session() {    this.supabase.auth.getSession().then(({ data }) => {      this._session = data.session    })    return this._session  }  profile(user: User) {    return this.supabase      .from('profiles')      .select(`username, website, avatar_url`)      .eq('id', user.id)      .single()  }  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {    return this.supabase.auth.onAuthStateChange(callback)  }  signIn(email: string) {    return this.supabase.auth.signInWithOtp({ email })  }  signOut() {    return this.supabase.auth.signOut()  }  updateProfile(profile: Profile) {    const update = {      ...profile,      updated_at: new Date(),    }    return this.supabase.from('profiles').upsert(update)  }  downLoadImage(path: string) {    return this.supabase.storage.from('avatars').download(path)  }  uploadAvatar(filePath: string, file: File) {    return this.supabase.storage.from('avatars').upload(filePath, file)  }}
```

Optionally, update `src/styles.css` [with the following styles](https://raw.githubusercontent.com/supabase/supabase/master/examples/user-management/angular-user-management/src/styles.css) to style the app.

### Set up a login component [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#set-up-a-login-component)

Next, set up an Angular component to manage logins and sign ups. The component uses [Magic Links](https://supabase.com/docs/guides/auth/auth-email-passwordless#with-magic-link), so users can sign in with their email without using passwords.

Create an `AuthComponent` with the `ng g c auth` Angular CLI command and add the following code.

src/app/auth/auth.tssrc/app/auth/auth.html

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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41

import { Component } from '@angular/core'import { FormBuilder, FormGroup } from '@angular/forms'import { SupabaseService } from '../supabase.service'@Component({  selector: 'app-auth',  templateUrl: './auth.html',  styleUrls: ['./auth.css'],  standalone: false,})export class AuthComponent {  signInForm!: FormGroup  constructor(    private readonly supabase: SupabaseService,    private readonly formBuilder: FormBuilder  ) {}  loading = false  ngOnInit() {    this.signInForm = this.formBuilder.group({      email: '',    })  }  async onSubmit(): Promise<void> {    try {      this.loading = true      const email = this.signInForm.value.email as string      const { error } = await this.supabase.signIn(email)      if (error) throw error      alert('Check your email for the login link!')    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      this.signInForm.reset()      this.loading = false    }  }}
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#account-page)

Users also need a way to edit their profile details and manage their accounts after signing in.
Create an `AccountComponent` with the `ng g c account` Angular CLI command and add the following code.

src/app/account/account.tssrc/app/account/account.html

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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102

import { Component, Input, OnInit } from '@angular/core'import { FormBuilder, FormGroup } from '@angular/forms'import { AuthSession } from '@supabase/supabase-js'import { Profile, SupabaseService } from '../supabase.service'@Component({  selector: 'app-account',  templateUrl: './account.html',  styleUrls: ['./account.css'],  standalone: false,})export class AccountComponent implements OnInit {  loading = false  profile!: Profile  updateProfileForm!: FormGroup  get avatarUrl() {    return this.updateProfileForm.value.avatar_url as string  }  async updateAvatar(event: string): Promise<void> {    this.updateProfileForm.patchValue({      avatar_url: event,    })    await this.updateProfile()  }  @Input()  session!: AuthSession  constructor(    private readonly supabase: SupabaseService,    private formBuilder: FormBuilder  ) {    this.updateProfileForm = this.formBuilder.group({      username: '',      website: '',      avatar_url: '',    })  }  async ngOnInit(): Promise<void> {    await this.getProfile()    const { username, website, avatar_url } = this.profile    this.updateProfileForm.patchValue({      username,      website,      avatar_url,    })  }  async getProfile() {    try {      this.loading = true      const { user } = this.session      const { data: profile, error, status } = await this.supabase.profile(user)      if (error && status !== 406) {        throw error      }      if (profile) {        this.profile = profile      }    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      this.loading = false    }  }  async updateProfile(): Promise<void> {    try {      this.loading = true      const { user } = this.session      const username = this.updateProfileForm.value.username as string      const website = this.updateProfileForm.value.website as string      const avatar_url = this.updateProfileForm.value.avatar_url as string      const { error } = await this.supabase.updateProfile({        id: user.id,        username,        website,        avatar_url,      })      if (error) throw error    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      this.loading = false    }  }  async signOut() {    await this.supabase.signOut()  }}
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#launch)

Now you have all the components in place, update `AppComponent`:

src/app/app.tssrc/app/app.html

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
12
13
14
15
16
17
18
19
20

import { Component, OnInit } from '@angular/core'import { SupabaseService } from './supabase.service'@Component({  selector: 'app-root',  templateUrl: './app.html',  styleUrls: ['./app.css'],  standalone: false,})export class AppComponent implements OnInit {  constructor(private readonly supabase: SupabaseService) {}  title = 'angular-user-management'  session: any  ngOnInit() {    this.session = this.supabase.session    this.supabase.authChanges((_, session) => (this.session = session))  }}
```

You also need to change `app.module.ts` to include the `ReactiveFormsModule` from the `@angular/forms` package.

src/app/app.module.ts

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
12
13
14
15
16
17

import { NgModule } from '@angular/core'import { BrowserModule } from '@angular/platform-browser'import { AppComponent } from './app'import { AuthComponent } from './auth/auth'import { AccountComponent } from './account/account'import { ReactiveFormsModule } from '@angular/forms'import { AvatarComponent } from './avatar/avatar'@NgModule({  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],  imports: [BrowserModule, ReactiveFormsModule],  providers: [],  bootstrap: [AppComponent],  exports: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],})export class AppModule {}
```

Once that's done, run the application in a terminal:

```
1

npm run start
```

Open the browser to [localhost:4200](http://localhost:4200/) and you should see the completed app.

![Screenshot of the Supabase Angular application running in a browser](https://supabase.com/docs/img/supabase-angular-demo.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#create-an-upload-widget)

Create an avatar for the user so that they can upload a profile photo.
Create an `AvatarComponent` with `ng g c avatar` Angular CLI command and add the following code.

src/app/avatar/avatar.tssrc/app/avatar/avatar.html

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
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63

import { Component, EventEmitter, Input, Output } from '@angular/core'import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'import { SupabaseService } from '../supabase.service'@Component({  selector: 'app-avatar',  templateUrl: './avatar.html',  styleUrls: ['./avatar.css'],  standalone: false,})export class AvatarComponent {  _avatarUrl: SafeResourceUrl | undefined  uploading = false  @Input()  set avatarUrl(url: string | null) {    if (url) {      this.downloadImage(url)    }  }  @Output() upload = new EventEmitter<string>()  constructor(    private readonly supabase: SupabaseService,    private readonly dom: DomSanitizer  ) {}  async downloadImage(path: string) {    try {      const { data } = await this.supabase.downLoadImage(path)      if (data instanceof Blob) {        this._avatarUrl = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(data))      }    } catch (error) {      if (error instanceof Error) {        console.error('Error downloading image: ', error.message)      }    }  }  async uploadAvatar(event: any) {    try {      this.uploading = true      if (!event.target.files || event.target.files.length === 0) {        throw new Error('You must select an image to upload.')      }      const file = event.target.files[0]      const fileExt = file.name.split('.').pop()      const filePath = `${Math.random()}.${fileExt}`      await this.supabase.uploadAvatar(filePath, file)      this.upload.emit(filePath)    } catch (error) {      if (error instanceof Error) {        alert(error.message)      }    } finally {      this.uploading = false    }  }}
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-angular\#add-the-new-widget)

And then we can add the widget on top of the `AccountComponent` HTML template:

src/app/account.html

```
1
2
3
4

<form [formGroup]="updateProfileForm" (ngSubmit)="updateProfile()" class="form-widget">  <app-avatar [avatarUrl]="this.avatarUrl" (upload)="updateAvatar($event)"></app-avatar>  <!-- input fields --></form>
```

And add an `updateAvatar` function along with an `avatarUrl` getter to the `AccountComponent` typescript file:

src/app/account.ts

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
12
13
14
15
16
17
18
19

@Component({  selector: 'app-account',  templateUrl: './account.html',  styleUrls: ['./account.css'],})export class AccountComponent implements OnInit {  // ...  get avatarUrl() {    return this.updateProfileForm.value.avatar_url as string  }  async updateAvatar(event: string): Promise<void> {    this.updateProfileForm.patchValue({      avatar_url: event,    })    await this.updateProfile()  }  // ...}
```

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-angular.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#building-the-app) [Initialize an Angular app](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#initialize-an-angular-app) [Set up a login component](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#set-up-a-login-component) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-angular#add-the-new-widget)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)