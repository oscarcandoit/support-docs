---
url: "https://supabase.com/docs/guides/graphql/with-apollo"
title: "With Apollo | Supabase Docs"
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

[GraphQL](https://supabase.com/docs/guides/graphql)

[Overview](https://supabase.com/docs/guides/graphql)

[API](https://supabase.com/docs/guides/graphql/api)

[Views](https://supabase.com/docs/guides/graphql/views)

[Functions](https://supabase.com/docs/guides/graphql/functions)

[Configuration & Customization](https://supabase.com/docs/guides/graphql/configuration)

[Security](https://supabase.com/docs/guides/graphql/security)

Integrations[With Apollo](https://supabase.com/docs/guides/graphql/with-apollo)
[With Relay](https://supabase.com/docs/guides/graphql/with-relay)

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

GraphQL

1. [GraphQL](https://supabase.com/docs/guides/graphql)
3. Integrations
5. [With Apollo](https://supabase.com/docs/guides/graphql/with-apollo)

# With Apollo

## Using pg\_grapqhl with Apollo.

* * *

This guide will show you how to use pg\_graphql with [Apollo](https://www.apollographql.com/docs/react/) and [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) for type-safe GraphQL queries in your React application.

## Apollo Setup [\#](https://supabase.com/docs/guides/graphql/with-apollo\#apollo-setup)

### Pre-requisites [\#](https://supabase.com/docs/guides/graphql/with-apollo\#pre-requisites)

1. Follow the [Apollo Getting Started Guide](https://www.apollographql.com/docs/react/get-started).
2. Follow the [GraphQL Code Generator Installation Guide](https://the-guild.dev/graphql/codegen/docs/getting-started/installation).

### Configuring GraphQL Code Generator [\#](https://supabase.com/docs/guides/graphql/with-apollo\#configuring-graphql-code-generator)

Modify your `codegen.ts` file to reflect the following:

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

import type { CodegenConfig } from '@graphql-codegen/cli'import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'const config: CodegenConfig = {  schema: 'http://localhost:54321/graphql/v1', // Using the local endpoint, update if needed  documents: 'src/**/*.tsx',  overwrite: true,  ignoreNoDocuments: true,  generates: {    'src/gql/': {      preset: 'client',      documentTransforms: [addTypenameSelectionDocumentTransform],      plugins: [],      config: {        scalars: {          UUID: 'string',          Date: 'string',          Time: 'string',          Datetime: 'string',          JSON: 'string',          BigInt: 'string',          BigFloat: 'string',          Opaque: 'any',        },      },    },  },  hooks: {    afterAllFileWrite: ['npm run prettier'], // optional  },}export default config
```

### Configuring Apollo Client [\#](https://supabase.com/docs/guides/graphql/with-apollo\#configuring-apollo-client)

This example uses [Supabase](https://supabase.com/) for the GraphQL server, but pg\_graphql can be used independently.

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

import {  ApolloClient,  InMemoryCache,  createHttpLink,  defaultDataIdFromObject} from '@apollo/client'import { setContext } from '@apollo/client/link/context'import { relayStylePagination } from '@apollo/client/utilities'import supabase, { SUPABASE_ANON_KEY } from './supabase'const cache = new InMemoryCache({  dataIdFromObject(responseObject) {    if ('nodeId' in responseObject) {      return `${responseObject.nodeId}`    }    return defaultDataIdFromObject(responseObject)  },  possibleTypes: { Node: ['Todos'] }, // optional, but useful to specify supertype-subtype relationships  typePolicies: {    Query: {      fields: {        todosCollection: relayStylePagination(), // example of paginating a collection        node: {          read(_, { args, toReference }) {            const ref = toReference({              nodeId: args?.nodeId,            })            return ref          },        },      },    },  },})const httpLink = createHttpLink({  uri: 'http://localhost:54321/graphql/v1',})const authLink = setContext(async (_, { headers }) => {  const token = (await supabase.auth.getSession()).data.session?.access_token  return {    headers: {      ...headers,      Authorization: token ? `Bearer ${token}` : '',      apikey: SUPABASE_ANON_KEY,    },  }})const apolloClient = new ApolloClient({  link: authLink.concat(httpLink),  cache,})export default apolloClient
```

- `typePolicies.Query.fields.node` is also optional, but useful for reducing cache misses. Learn more about [Redirecting to cached data](https://www.apollographql.com/docs/react/performance/performance#redirecting-to-cached-data).

## Example Query [\#](https://supabase.com/docs/guides/graphql/with-apollo\#example-query)

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

import { useQuery } from '@apollo/client'import { graphql } from './gql'const allTodosQueryDocument = graphql(/* GraphQL */ `  query AllTodos($cursor: Cursor) {    todosCollection(first: 10, after: $cursor) {      edges {        node {          nodeId          title        }      }      pageInfo {        endCursor        hasNextPage      }    }  }`)const TodoList = () => {  const { data, fetchMore } = useQuery(allTodosQueryDocument)  return (    <>      {data?.thingsCollection?.edges.map(({ node }) => (        <Todo key={node.nodeId} title={node.title} />      ))}      {data?.thingsCollection?.pageInfo.hasNextPage && (        <Button          onClick={() => {            fetchMore({              variables: {                cursor: data?.thingsCollection?.pageInfo.endCursor,              },            })          }}        >          Load More        </Button>      )}    </>  )}export default TodoList
```

[Edit this page on GitHub](https://github.com/supabase/pg_graphql/blob/master/docs/usage_with_apollo.md)

### Is this helpful?

NoYes

### On this page

[Apollo Setup](https://supabase.com/docs/guides/graphql/with-apollo#apollo-setup) [Pre-requisites](https://supabase.com/docs/guides/graphql/with-apollo#pre-requisites) [Configuring GraphQL Code Generator](https://supabase.com/docs/guides/graphql/with-apollo#configuring-graphql-code-generator) [Configuring Apollo Client](https://supabase.com/docs/guides/graphql/with-apollo#configuring-apollo-client) [Example Query](https://supabase.com/docs/guides/graphql/with-apollo#example-query)

- Need some help?
[Contact support](https://supabase.com/support)
- Latest product updates?
[See Changelog](https://supabase.com/changelog)
- Something's not right?
[Check system status](https://status.supabase.com/)

* * *

[© Supabase Inc](https://supabase.com/)— [Contributing](https://github.com/supabase/supabase/blob/master/apps/docs/DEVELOPERS.md) [Author Styleguide](https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md) [Open Source](https://supabase.com/open-source) [SupaSquad](https://supabase.com/supasquad) Privacy Settings

[Twitter](https://twitter.com/supabase) [GitHub](https://github.com/supabase) [Discord](https://discord.supabase.com/) [Youtube](https://youtube.com/c/supabase)