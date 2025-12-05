---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular"
title: "Build a User Management App with Ionic Angular | Supabase Docs"
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
3. Mobile tutorials
5. [Ionic Angular](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular)

# Build a User Management App with Ionic Angular

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/ionic-demos/ionic-angular-account.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/mhartington/supabase-ionic-angular).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#building-the-app)

Let's start building the Angular app from scratch.

### Initialize an Ionic Angular app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#initialize-an-ionic-angular-app)

We can use the [Ionic CLI](https://ionicframework.com/docs/cli) to initialize
an app called `supabase-ionic-angular`:

```
1
2
3

npm install -g @ionic/cliionic start supabase-ionic-angular blank --type angularcd supabase-ionic-angular
```

Then let's install the only additional dependency: [supabase-js](https://github.com/supabase/supabase-js)

```
1

npm install @supabase/supabase-js
```

And finally, we want to save the environment variables in the `src/environments/environment.ts` file.
All we need are the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#get-api-details).
These variables will be exposed on the browser, and that's completely fine since we have [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on our Database.

environment.ts

```
1
2
3
4
5

export const environment = {  production: false,  supabaseUrl: 'YOUR_SUPABASE_URL',  supabaseKey: 'YOUR_SUPABASE_KEY',}
```

Now that we have the API credentials in place, let's create a `SupabaseService` with `ionic g s supabase` to initialize the Supabase client and implement functions to communicate with the Supabase API.

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
74
75
76
77
78
79
80

import { Injectable } from '@angular/core'import { LoadingController, ToastController } from '@ionic/angular'import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js'import { environment } from '../environments/environment'export interface Profile {  username: string  website: string  avatar_url: string}@Injectable({  providedIn: 'root',})export class SupabaseService {  private supabase: SupabaseClient  constructor(    private loadingCtrl: LoadingController,    private toastCtrl: ToastController  ) {    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)  }  get user() {    return this.supabase.auth.getUser().then(({ data }) => data?.user)  }  get session() {    return this.supabase.auth.getSession().then(({ data }) => data?.session)  }  get profile() {    return this.user      .then((user) => user?.id)      .then((id) =>        this.supabase.from('profiles').select(`username, website, avatar_url`).eq('id', id).single()      )  }  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {    return this.supabase.auth.onAuthStateChange(callback)  }  signIn(email: string) {    return this.supabase.auth.signInWithOtp({ email })  }  signOut() {    return this.supabase.auth.signOut()  }  async updateProfile(profile: Profile) {    const user = await this.user    const update = {      ...profile,      id: user?.id,      updated_at: new Date(),    }    return this.supabase.from('profiles').upsert(update)  }  downLoadImage(path: string) {    return this.supabase.storage.from('avatars').download(path)  }  uploadAvatar(filePath: string, file: File) {    return this.supabase.storage.from('avatars').upload(filePath, file)  }  async createNotice(message: string) {    const toast = await this.toastCtrl.create({ message, duration: 5000 })    await toast.present()  }  createLoader() {    return this.loadingCtrl.create()  }}
```

### Set up a login route [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#set-up-a-login-route)

Let's set up a route to manage logins and signups. We'll use Magic Links so users can sign in with their email without using passwords.
Create a `LoginPage` with the `ionic g page login` Ionic CLI command.

This guide will show the template inline, but the example app will have `templateUrl`s

src/app/login/login.page.ts

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

import { Component, OnInit } from '@angular/core'import { SupabaseService } from '../supabase.service'@Component({  selector: 'app-login',  template: `    <ion-header>      <ion-toolbar>        <ion-title>Login</ion-title>      </ion-toolbar>    </ion-header>    <ion-content>      <div class="ion-padding">        <h1>Supabase + Ionic Angular</h1>        <p>Sign in via magic link with your email below</p>      </div>      <ion-list inset="true">        <form (ngSubmit)="handleLogin($event)">          <ion-item>            <ion-label position="stacked">Email</ion-label>            <ion-input [(ngModel)]="email" name="email" autocomplete type="email"></ion-input>          </ion-item>          <div class="ion-text-center">            <ion-button type="submit" fill="clear">Login</ion-button>          </div>        </form>      </ion-list>    </ion-content>  `,  styleUrls: ['./login.page.scss'],})export class LoginPage {  email = ''  constructor(private readonly supabase: SupabaseService) {}  async handleLogin(event: any) {    event.preventDefault()    const loader = await this.supabase.createLoader()    await loader.present()    try {      const { error } = await this.supabase.signIn(this.email)      if (error) {        throw error      }      await loader.dismiss()      await this.supabase.createNotice('Check your email for the login link!')    } catch (error: any) {      await loader.dismiss()      await this.supabase.createNotice(error.error_description || error.message)    }  }}
```

### Account page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#account-page)

After a user is signed in, we can allow them to edit their profile details and manage their account.
Create an `AccountComponent` with `ionic g page account` Ionic CLI command.

src/app/account.page.ts

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

import { Component, OnInit } from '@angular/core'import { Router } from '@angular/router'import { Profile, SupabaseService } from '../supabase.service'@Component({  selector: 'app-account',  template: `    <ion-header>      <ion-toolbar>        <ion-title>Account</ion-title>      </ion-toolbar>    </ion-header>    <ion-content>      <form>        <ion-item>          <ion-label position="stacked">Email</ion-label>          <ion-input type="email" name="email" [(ngModel)]="email" readonly></ion-input>        </ion-item>        <ion-item>          <ion-label position="stacked">Name</ion-label>          <ion-input type="text" name="username" [(ngModel)]="profile.username"></ion-input>        </ion-item>        <ion-item>          <ion-label position="stacked">Website</ion-label>          <ion-input type="url" name="website" [(ngModel)]="profile.website"></ion-input>        </ion-item>        <div class="ion-text-center">          <ion-button fill="clear" (click)="updateProfile()">Update Profile</ion-button>        </div>      </form>      <div class="ion-text-center">        <ion-button fill="clear" (click)="signOut()">Log Out</ion-button>      </div>    </ion-content>  `,  styleUrls: ['./account.page.scss'],})export class AccountPage implements OnInit {  profile: Profile = {    username: '',    avatar_url: '',    website: '',  }  email = ''  constructor(    private readonly supabase: SupabaseService,    private router: Router  ) {}  ngOnInit() {    this.getEmail()    this.getProfile()  }  async getEmail() {    this.email = await this.supabase.user.then((user) => user?.email || '')  }  async getProfile() {    try {      const { data: profile, error, status } = await this.supabase.profile      if (error && status !== 406) {        throw error      }      if (profile) {        this.profile = profile      }    } catch (error: any) {      alert(error.message)    }  }  async updateProfile(avatar_url: string = '') {    const loader = await this.supabase.createLoader()    await loader.present()    try {      const { error } = await this.supabase.updateProfile({ ...this.profile, avatar_url })      if (error) {        throw error      }      await loader.dismiss()      await this.supabase.createNotice('Profile updated!')    } catch (error: any) {      await loader.dismiss()      await this.supabase.createNotice(error.message)    }  }  async signOut() {    console.log('testing?')    await this.supabase.signOut()    this.router.navigate(['/'], { replaceUrl: true })  }}
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#launch)

Now that we have all the components in place, let's update `AppComponent`:

src/app/app.component.ts

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

import { Component } from '@angular/core'import { Router } from '@angular/router'import { SupabaseService } from './supabase.service'@Component({  selector: 'app-root',  template: `    <ion-app>      <ion-router-outlet></ion-router-outlet>    </ion-app>  `,  styleUrls: ['app.component.scss'],})export class AppComponent {  constructor(    private supabase: SupabaseService,    private router: Router  ) {    this.supabase.authChanges((_, session) => {      console.log(session)      if (session?.user) {        this.router.navigate(['/account'])      }    })  }}
```

Then update the `AppRoutingModule`

src/app/app-routing.module.ts"

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

import { NgModule } from '@angular/core'import { PreloadAllModules, RouterModule, Routes } from '@angular/router'const routes: Routes = [  {    path: '',    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),  },  {    path: 'account',    loadChildren: () => import('./account/account.module').then((m) => m.AccountPageModule),  },]@NgModule({  imports: [    RouterModule.forRoot(routes, {      preloadingStrategy: PreloadAllModules,    }),  ],  exports: [RouterModule],})export class AppRoutingModule {}
```

Once that's done, run this in a terminal window:

```
1

ionic serve
```

And the browser will automatically open to show the app.

![Supabase Angular](https://supabase.com/docs/img/ionic-demos/ionic-angular.png)

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like photos and videos.

### Create an upload widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#create-an-upload-widget)

Let's create an avatar for the user so that they can upload a profile photo.

First, install two packages in order to interact with the user's camera.

```
1

npm install @ionic/pwa-elements @capacitor/camera
```

[Capacitor](https://capacitorjs.com/) is a cross-platform native runtime from Ionic that enables web apps to be deployed through the app store and provides access to native device API.

Ionic PWA elements is a companion package that will polyfill certain browser APIs that provide no user interface with custom Ionic UI.

With those packages installed, we can update our `main.ts` to include an additional bootstrapping call for the Ionic PWA Elements.

src/main.ts

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

import { enableProdMode } from '@angular/core'import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'import { AppModule } from './app/app.module'import { environment } from './environments/environment'import { defineCustomElements } from '@ionic/pwa-elements/loader'defineCustomElements(window)if (environment.production) {  enableProdMode()}platformBrowserDynamic()  .bootstrapModule(AppModule)  .catch((err) => console.log(err))
```

Then create an `AvatarComponent` with this Ionic CLI command:

```
1

ionic g component avatar --module=/src/app/account/account.module.ts --create-module
```

src/app/avatar.component.ts

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
103
104
105
106
107
108

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'import { SupabaseService } from '../supabase.service'import { Camera, CameraResultType } from '@capacitor/camera'import { addIcons } from 'ionicons'import { person } from 'ionicons/icons'@Component({  selector: 'app-avatar',  template: `    <div class="avatar_wrapper" (click)="uploadAvatar()">      <img *ngIf="_avatarUrl; else noAvatar" [src]="_avatarUrl" />      <ng-template #noAvatar>        <ion-icon name="person" class="no-avatar"></ion-icon>      </ng-template>    </div>  `,  style: [    `    :host {       display: block;       margin: auto;       min-height: 150px;    }     :host .avatar_wrapper {       margin: 16px auto 16px;       border-radius: 50%;       overflow: hidden;       height: 150px;       aspect-ratio: 1;       background: var(--ion-color-step-50);       border: thick solid var(--ion-color-step-200);    }     :host .avatar_wrapper:hover {       cursor: pointer;    }     :host .avatar_wrapper ion-icon.no-avatar {       width: 100%;       height: 115%;    }     :host img {       display: block;       object-fit: cover;       width: 100%;       height: 100%;    }  `,  ],})export class AvatarComponent {  _avatarUrl: SafeResourceUrl | undefined  uploading = false  @Input()  set avatarUrl(url: string | undefined) {    if (url) {      this.downloadImage(url)    }  }  @Output() upload = new EventEmitter<string>()  constructor(    private readonly supabase: SupabaseService,    private readonly dom: DomSanitizer  ) {    addIcons({ person })  }  async downloadImage(path: string) {    try {      const { data, error } = await this.supabase.downLoadImage(path)      if (error) {        throw error      }      this._avatarUrl = this.dom.bypassSecurityTrustResourceUrl(URL.createObjectURL(data!))    } catch (error: any) {      console.error('Error downloading image: ', error.message)    }  }  async uploadAvatar() {    const loader = await this.supabase.createLoader()    try {      const photo = await Camera.getPhoto({        resultType: CameraResultType.DataUrl,      })      const file = await fetch(photo.dataUrl!)        .then((res) => res.blob())        .then((blob) => new File([blob], 'my-file', { type: `image/${photo.format}` }))      const fileName = `${Math.random()}-${new Date().getTime()}.${photo.format}`      await loader.present()      const { error } = await this.supabase.uploadAvatar(fileName, file)      if (error) {        throw error      }      this.upload.emit(fileName)    } catch (error: any) {      this.supabase.createNotice(error.message)    } finally {      loader.dismiss()    }  }}
```

### Add the new widget [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#add-the-new-widget)

And then, we can add the widget on top of the `AccountComponent` HTML template:

src/app/account.component.ts

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

template: `<ion-header>  <ion-toolbar>    <ion-title>Account</ion-title>  </ion-toolbar></ion-header><ion-content>  <app-avatar    [avatarUrl]="this.profile?.avatar_url"    (upload)="updateProfile($event)"  ></app-avatar><!-- input fields -->`
```

At this stage, you have a fully functional application!

## See also [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular\#see-also)

- [Authentication in Ionic Angular with Supabase](https://supabase.com/blog/authentication-in-ionic-angular)

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-ionic-angular.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#building-the-app) [Initialize an Ionic Angular app](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#initialize-an-ionic-angular-app) [Set up a login route](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#set-up-a-login-route) [Account page](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#account-page) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#bonus-profile-photos) [Create an upload widget](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#create-an-upload-widget) [Add the new widget](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#add-the-new-widget) [See also](https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular#see-also)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)