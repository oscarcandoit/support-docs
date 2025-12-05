---
url: "https://supabase.com/docs/guides/getting-started/tutorials/with-swift"
title: "Build a User Management App with Swift and SwiftUI | Supabase Docs"
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
5. [Swift](https://supabase.com/docs/guides/getting-started/tutorials/with-swift)

# Build a User Management App with Swift and SwiftUI

* * *

This tutorial demonstrates how to build a basic user management app. The app authenticates and identifies the user, stores their profile information in the database, and allows the user to log in, update their profile details, and upload a profile photo. The app uses:

- [Supabase Database](https://supabase.com/docs/guides/database) \- a Postgres database for storing your user data and [Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) so data is protected and users can only access their own information.
- [Supabase Auth](https://supabase.com/docs/guides/auth) \- allow users to sign up and log in.
- [Supabase Storage](https://supabase.com/docs/guides/storage) \- allow users to upload a profile photo.

![Supabase User Management example](https://supabase.com/docs/img/supabase-swift-demo.png)

If you get stuck while working through this guide, refer to the [full example on GitHub](https://github.com/supabase/supabase/tree/master/examples/user-management/swift-user-management).

## Project setup [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#project-setup)

Before you start building you need to set up the Database and API. You can do this by starting a new Project in Supabase and then creating a "schema" inside the database.

### Create a project [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#create-a-project)

1. [Create a new project](https://supabase.com/dashboard) in the Supabase Dashboard.
2. Enter your project details.
3. Wait for the new database to launch.

### Set up the database schema [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#set-up-the-database-schema)

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

### Get API details [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#get-api-details)

Now that you've created some database tables, you are ready to insert data using the auto-generated API.

To do this, you need to get the Project URL and key. Get the URL from [the API settings section](https://supabase.com/dashboard/project/_/settings/api) of a project and the key from the [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/).

##### Changes to API keys

Supabase is changing the way keys work to improve project security and developer experience. You can [read the full announcement](https://github.com/orgs/supabase/discussions/29260), but in the transition period, you can use both the current `anon` and `service_role` keys and the new publishable key with the form `sb_publishable_xxx` which will replace the older keys.

To get the key values, open [the API Keys section of a project's Settings page](https://supabase.com/dashboard/project/_/settings/api-keys/) and do the following:

- **For legacy keys**, copy the `anon` key for client-side operations and the `service_role` key for server-side operations from the **Legacy API Keys** tab.
- **For new keys**, open the **API Keys** tab, if you don't have a publishable key already, click **Create new API Keys**, and copy the value from the **Publishable key** section.

## Building the app [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#building-the-app)

Let's start building the SwiftUI app from scratch.

### Create a SwiftUI app in Xcode [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#create-a-swiftui-app-in-xcode)

Open Xcode and create a new SwiftUI project.

Add the [supabase-swift](https://github.com/supabase/supabase-swift) dependency.

Add the `https://github.com/supabase/supabase-swift` package to your app. For instructions, see the [Apple tutorial on adding package dependencies](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app).

Create a helper file to initialize the Supabase client.
You need the API URL and the key that you copied [earlier](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#get-api-details).
These variables will be exposed on the application, and that's completely fine since you have
[Row Level Security](https://supabase.com/docs/guides/auth#row-level-security) enabled on your database.

Supabase.swift

```
1
2
3
4
5
6
7

import Foundationimport Supabaselet supabase = SupabaseClient(  supabaseURL: URL(string: "YOUR_SUPABASE_URL")!,  supabaseKey: "YOUR_SUPABASE_PUBLISHABLE_KEY")
```

### Set up a login view [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#set-up-a-login-view)

Set up a SwiftUI view to manage logins and sign ups.
Users should be able to sign in using a magic link.

AuthView.swift

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

import SwiftUIimport Supabasestruct AuthView: View {  @State var email = ""  @State var isLoading = false  @State var result: Result<Void, Error>?  var body: some View {    Form {      Section {        TextField("Email", text: $email)          .textContentType(.emailAddress)          .textInputAutocapitalization(.never)          .autocorrectionDisabled()      }      Section {        Button("Sign in") {          signInButtonTapped()        }        if isLoading {          ProgressView()        }      }      if let result {        Section {          switch result {          case .success:            Text("Check your inbox.")          case .failure(let error):            Text(error.localizedDescription).foregroundStyle(.red)          }        }      }    }    .onOpenURL(perform: { url in      Task {        do {          try await supabase.auth.session(from: url)        } catch {          self.result = .failure(error)        }      }    })  }  func signInButtonTapped() {    Task {      isLoading = true      defer { isLoading = false }      do {        try await supabase.auth.signInWithOTP(            email: email,            redirectTo: URL(string: "io.supabase.user-management://login-callback")        )        result = .success(())      } catch {        result = .failure(error)      }    }  }}
```

The example uses a custom `redirectTo` URL. For this to work, add a custom redirect URL to Supabase and a custom URL scheme to your SwiftUI application. Follow the guide on [implementing deep link handling](https://supabase.com/docs/guides/auth/native-mobile-deep-linking?platform=swift).

### Account view [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#account-view)

After a user is signed in, you can allow them to edit their profile details and manage their account.

Create a new view for that called `ProfileView.swift`.

ProfileView.swift

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

import SwiftUIstruct ProfileView: View {  @State var username = ""  @State var fullName = ""  @State var website = ""  @State var isLoading = false  var body: some View {    NavigationStack {      Form {        Section {          TextField("Username", text: $username)            .textContentType(.username)            .textInputAutocapitalization(.never)          TextField("Full name", text: $fullName)            .textContentType(.name)          TextField("Website", text: $website)            .textContentType(.URL)            .textInputAutocapitalization(.never)        }        Section {          Button("Update profile") {            updateProfileButtonTapped()          }          .bold()          if isLoading {            ProgressView()          }        }      }      .navigationTitle("Profile")      .toolbar(content: {        ToolbarItem(placement: .topBarLeading){          Button("Sign out", role: .destructive) {            Task {              try? await supabase.auth.signOut()            }          }        }      })    }    .task {      await getInitialProfile()    }  }  func getInitialProfile() async {    do {      let currentUser = try await supabase.auth.session.user      let profile: Profile =      try await supabase        .from("profiles")        .select()        .eq("id", value: currentUser.id)        .single()        .execute()        .value      self.username = profile.username ?? ""      self.fullName = profile.fullName ?? ""      self.website = profile.website ?? ""    } catch {      debugPrint(error)    }  }  func updateProfileButtonTapped() {    Task {      isLoading = true      defer { isLoading = false }      do {        let currentUser = try await supabase.auth.session.user        try await supabase          .from("profiles")          .update(            UpdateProfileParams(              username: username,              fullName: fullName,              website: website            )          )          .eq("id", value: currentUser.id)          .execute()      } catch {        debugPrint(error)      }    }  }}
```

### Models [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#models)

In `ProfileView.swift`, you used 2 model types for deserializing the response and serializing the request to Supabase. Add those in a new `Models.swift` file.

Models.swift

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

struct Profile: Decodable {  let username: String?  let fullName: String?  let website: String?  enum CodingKeys: String, CodingKey {    case username    case fullName = "full_name"    case website  }}struct UpdateProfileParams: Encodable {  let username: String  let fullName: String  let website: String  enum CodingKeys: String, CodingKey {    case username    case fullName = "full_name"    case website  }}
```

### Launch! [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#launch)

Now that you've created all the views, add an entry point for the application. This will verify if the user has a valid session and route them to the authenticated or non-authenticated state.

Add a new `AppView.swift` file.

AppView.swift

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

import SwiftUIstruct AppView: View {  @State var isAuthenticated = false  var body: some View {    Group {      if isAuthenticated {        ProfileView()      } else {        AuthView()      }    }    .task {      for await state in supabase.auth.authStateChanges {        if [.initialSession, .signedIn, .signedOut].contains(state.event) {          isAuthenticated = state.session != nil        }      }    }  }}
```

Update the entry point to the newly created `AppView`. Run in Xcode to launch your application in the simulator.

## Bonus: Profile photos [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#bonus-profile-photos)

Every Supabase project is configured with [Storage](https://supabase.com/docs/guides/storage) for managing large files like
photos and videos.

### Add `PhotosPicker` [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#add-photospicker)

Let's add support for the user to pick an image from the library and upload it.
Start by creating a new type to hold the picked avatar image:

AvatarImage.swift

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

import SwiftUIstruct AvatarImage: Transferable, Equatable {  let image: Image  let data: Data  static var transferRepresentation: some TransferRepresentation {    DataRepresentation(importedContentType: .image) { data in      guard let image = AvatarImage(data: data) else {        throw TransferError.importFailed      }      return image    }  }}extension AvatarImage {  init?(data: Data) {    guard let uiImage = UIImage(data: data) else {      return nil    }    let image = Image(uiImage: uiImage)    self.init(image: image, data: data)  }}enum TransferError: Error {  case importFailed}
```

#### Add `PhotosPicker` to profile page [\#](https://supabase.com/docs/guides/getting-started/tutorials/with-swift\#add-photospicker-to-profile-page)

ProfileView.swift

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
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167

import PhotosUIimport Storageimport Supabaseimport SwiftUIstruct ProfileView: View {  @State var username = ""  @State var fullName = ""  @State var website = ""  @State var isLoading = false @State var imageSelection: PhotosPickerItem? @State var avatarImage: AvatarImage?  var body: some View {    NavigationStack {      Form {        Section {          HStack {            Group {              if let avatarImage {                avatarImage.image.resizable()              } else {                Color.clear              }            }            .scaledToFit()            .frame(width: 80, height: 80)            Spacer()            PhotosPicker(selection: $imageSelection, matching: .images) {              Image(systemName: "pencil.circle.fill")                .symbolRenderingMode(.multicolor)                .font(.system(size: 30))                .foregroundColor(.accentColor)            }          }        }        Section {          TextField("Username", text: $username)            .textContentType(.username)            .textInputAutocapitalization(.never)          TextField("Full name", text: $fullName)            .textContentType(.name)          TextField("Website", text: $website)            .textContentType(.URL)            .textInputAutocapitalization(.never)        }        Section {          Button("Update profile") {            updateProfileButtonTapped()          }          .bold()          if isLoading {            ProgressView()          }        }      }      .navigationTitle("Profile")      .toolbar(content: {        ToolbarItem {          Button("Sign out", role: .destructive) {            Task {              try? await supabase.auth.signOut()            }          }        }      })      .onChange(of: imageSelection) { _, newValue in        guard let newValue else { return }        loadTransferable(from: newValue)      }    }    .task {      await getInitialProfile()    }  }  func getInitialProfile() async {    do {      let currentUser = try await supabase.auth.session.user      let profile: Profile =      try await supabase        .from("profiles")        .select()        .eq("id", value: currentUser.id)        .single()        .execute()        .value      username = profile.username ?? ""      fullName = profile.fullName ?? ""      website = profile.website ?? ""      if let avatarURL = profile.avatarURL, !avatarURL.isEmpty {        try await downloadImage(path: avatarURL)      }    } catch {      debugPrint(error)    }  }  func updateProfileButtonTapped() {    Task {      isLoading = true      defer { isLoading = false }      do {        let imageURL = try await uploadImage()        let currentUser = try await supabase.auth.session.user        let updatedProfile = Profile(          username: username,          fullName: fullName,          website: website,          avatarURL: imageURL        )        try await supabase          .from("profiles")          .update(updatedProfile)          .eq("id", value: currentUser.id)          .execute()      } catch {        debugPrint(error)      }    }  }  private func loadTransferable(from imageSelection: PhotosPickerItem) {    Task {      do {        avatarImage = try await imageSelection.loadTransferable(type: AvatarImage.self)      } catch {        debugPrint(error)      }    }  }  private func downloadImage(path: String) async throws {    let data = try await supabase.storage.from("avatars").download(path: path)    avatarImage = AvatarImage(data: data)  }  private func uploadImage() async throws -> String? {    guard let data = avatarImage?.data else { return nil }    let filePath = "\(UUID().uuidString).jpeg"    try await supabase.storage      .from("avatars")      .upload(        filePath,        data: data,        options: FileOptions(contentType: "image/jpeg")      )    return filePath  }}
```

Finally, update your Models.

Models.swift

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

struct Profile: Codable {  let username: String?  let fullName: String?  let website: String?  let avatarURL: String?  enum CodingKeys: String, CodingKey {    case username    case fullName = "full_name"    case website    case avatarURL = "avatar_url"  }}
```

You no longer need the `UpdateProfileParams` struct, as you can now reuse the `Profile` struct for both request and response calls.

At this stage you have a fully functional application!

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-swift.mdx)

### Is this helpful?

NoYes

### On this page

[Project setup](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#project-setup) [Create a project](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#create-a-project) [Set up the database schema](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#set-up-the-database-schema) [Get API details](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#get-api-details) [Building the app](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#building-the-app) [Create a SwiftUI app in Xcode](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#create-a-swiftui-app-in-xcode) [Set up a login view](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#set-up-a-login-view) [Account view](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#account-view) [Models](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#models) [Launch!](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#launch) [Bonus: Profile photos](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#bonus-profile-photos) [Add PhotosPicker](https://supabase.com/docs/guides/getting-started/tutorials/with-swift#add-photospicker)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)