---
url: "https://supabase.com/docs/guides/getting-started/quickstarts/flutter"
title: "Use Supabase with Flutter | Supabase Docs"
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
3. Framework Quickstarts
5. [Flutter](https://supabase.com/docs/guides/getting-started/quickstarts/flutter)

# Use Supabase with Flutter

## Learn how to create a Supabase project, add some sample data to your database, and query the data from a Flutter app.

* * *

1

### Create a Supabase project

Go to [database.new](https://database.new/) and create a new Supabase project.

Alternatively, you can create a project using the Management API:

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

# First, get your access token from https://supabase.com/dashboard/account/tokensexport SUPABASE_ACCESS_TOKEN="your-access-token"# List your organizations to get the organization IDcurl -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \  https://api.supabase.com/v1/organizations# Create a new project (replace <org-id> with your organization ID)curl -X POST https://api.supabase.com/v1/projects \  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \  -H "Content-Type: application/json" \  -d '{    "organization_id": "<org-id>",    "name": "My Project",    "region": "us-east-1",    "db_pass": "<your-secure-password>"  }'
```

When your project is up and running, go to the [Table Editor](https://supabase.com/dashboard/project/_/editor), create a new table and insert some data.

Alternatively, you can run the following snippet in your project's [SQL Editor](https://supabase.com/dashboard/project/_/sql/new). This will create a `instruments` table with some sample data.

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

-- Create the tablecreate table instruments (  id bigint primary key generated always as identity,  name text not null);-- Insert some sample data into the tableinsert into instruments (name)values  ('violin'),  ('viola'),  ('cello');alter table instruments enable row level security;
```

Make the data in your table publicly readable by adding an RLS policy:

```
1
2
3
4

create policy "public can read instruments"on public.instrumentsfor select to anonusing (true);
```

2

### Create a Flutter app

Create a Flutter app using the `flutter create` command. You can skip this step if you already have a working app.

###### Terminal

```
1

flutter create my_app
```

3

### Install the Supabase client library

The fastest way to get started is to use the [`supabase_flutter`](https://pub.dev/packages/supabase_flutter) client library which provides a convenient interface for working with Supabase from a Flutter app.

Open the `pubspec.yaml` file inside your Flutter app and add `supabase_flutter` as a dependency.

###### pubspec.yaml

```
1

supabase_flutter: ^2.0.0
```

4

### Initialize the Supabase client

Open `lib/main.dart` and edit the main function to initialize Supabase using your project URL and public API (anon) key:

###### Project URL

No project found

To get your Project URL, [log in](https://supabase.com/dashboard).

###### Publishable key

No project found

To get your Publishable key, [log in](https://supabase.com/dashboard).

###### Anon key

No project found

To get your Anon key, [log in](https://supabase.com/dashboard).

###### lib/main.dart

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

import 'package:supabase_flutter/supabase_flutter.dart';Future<void> main() async {  WidgetsFlutterBinding.ensureInitialized();  await Supabase.initialize(    url: 'YOUR_SUPABASE_URL',    anonKey: 'YOUR_SUPABASE_PUBLISHABLE_KEY',  );  runApp(MyApp());}
```

5

### Query data from the app

Use a `FutureBuilder` to fetch the data when the home page loads and display the query result in a `ListView`.

Replace the default `MyApp` and `MyHomePage` classes with the following code.

###### lib/main.dart

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

class MyApp extends StatelessWidget {  const MyApp({super.key});  @override  Widget build(BuildContext context) {    return const MaterialApp(      title: 'Instruments',      home: HomePage(),    );  }}class HomePage extends StatefulWidget {  const HomePage({super.key});  @override  State<HomePage> createState() => _HomePageState();}class _HomePageState extends State<HomePage> {  final _future = Supabase.instance.client      .from('instruments')      .select();  @override  Widget build(BuildContext context) {    return Scaffold(      body: FutureBuilder(        future: _future,        builder: (context, snapshot) {          if (!snapshot.hasData) {            return const Center(child: CircularProgressIndicator());          }          final instruments = snapshot.data!;          return ListView.builder(            itemCount: instruments.length,            itemBuilder: ((context, index) {              final instrument = instruments[index];              return ListTile(                title: Text(instrument['name']),              );            }),          );        },      ),    );  }}
```

6

### Start the app

Run your app on a platform of your choosing! By default an app should launch in your web browser.

Note that `supabase_flutter` is compatible with web, iOS, Android, macOS, and Windows apps.
Running the app on macOS requires additional configuration to [set the entitlements](https://docs.flutter.dev/development/platform-integration/macos/building#setting-up-entitlements).

###### Terminal

```
1

flutter run
```

## Setup deep links [\#](https://supabase.com/docs/guides/getting-started/quickstarts/flutter\#setup-deep-links)

Many sign in methods require deep links to redirect the user back to your app after authentication. Read more about setting deep links up for all platforms (including web) in the [Flutter Mobile Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-flutter#setup-deep-links).

## Going to production [\#](https://supabase.com/docs/guides/getting-started/quickstarts/flutter\#going-to-production)

### Android [\#](https://supabase.com/docs/guides/getting-started/quickstarts/flutter\#android)

In production, your Android app needs explicit permission to use the internet connection on the user's device which is required to communicate with Supabase APIs.
To do this, add the following line to the `android/app/src/main/AndroidManifest.xml` file.

```
1
2
3
4
5

<manifest xmlns:android="http://schemas.android.com/apk/res/android">  <!-- Required to fetch data from the internet. -->  <uses-permission android:name="android.permission.INTERNET" />  <!-- ... --></manifest>
```

[Edit this page on GitHub](https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/flutter.mdx)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)