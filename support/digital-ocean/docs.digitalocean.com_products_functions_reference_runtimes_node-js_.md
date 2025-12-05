---
url: "https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/"
title: "Functions Node.js JavaScript Runtime | DigitalOcean Documentation"
---

- [DigitalOcean \| Docs](https://docs.digitalocean.com/)

- [Platform](https://docs.digitalocean.com/platform/)
- [Products](https://docs.digitalocean.com/products/)
- [Reference](https://docs.digitalocean.com/reference/)
- [Support](https://docs.digitalocean.com/support/)
- [Sign Up](https://cloud.digitalocean.com/registrations/new)

- [![](https://docs.digitalocean.com/images/icons/functions.b0bb037d0e06c09d659cd32aeb2b48c4195d6e824680f25a98d7ed1c24010331.svg)Functions](https://docs.digitalocean.com/products/functions/)
- [Getting Started](https://docs.digitalocean.com/products/functions/getting-started/)
  - [Quickstart](https://docs.digitalocean.com/products/functions/getting-started/quickstart/)
  - [Sample Functions](https://docs.digitalocean.com/products/functions/getting-started/sample-functions/)
  - [Serverless Jamstack Site](https://docs.digitalocean.com/products/functions/getting-started/serverless-jamstack/)
- [How-Tos](https://docs.digitalocean.com/products/functions/how-to/)
  - [Create Functions](https://docs.digitalocean.com/products/functions/how-to/create-functions/)
  - [Develop Functions](https://docs.digitalocean.com/products/functions/how-to/develop-functions/)
  - [Configure Functions](https://docs.digitalocean.com/products/functions/how-to/configure-functions/)
  - [Schedule Functionsprivate](https://docs.digitalocean.com/products/functions/how-to/schedule-functions/)
  - [Call Async Functions](https://docs.digitalocean.com/products/functions/how-to/async-functions/)
  - [Destroy Functions](https://docs.digitalocean.com/products/functions/how-to/destroy/)
  - [Include Static Files](https://docs.digitalocean.com/products/functions/how-to/include-files/)
  - [Create Namespaces](https://docs.digitalocean.com/products/functions/how-to/create-namespaces/)
  - [Destroy Namespaces](https://docs.digitalocean.com/products/functions/how-to/destroy-namespaces/)
  - [Structure Projects](https://docs.digitalocean.com/products/functions/how-to/structure-projects/)
  - [Forward Logs](https://docs.digitalocean.com/products/functions/how-to/forward-logs/)
  - [Deploy to App Platform](https://docs.digitalocean.com/products/functions/how-to/deploy-to-app-platform/)
- [Reference](https://docs.digitalocean.com/products/functions/reference/)
  - [API Reference](https://docs.digitalocean.com/reference/api/digitalocean/#tag/Functions)
  - [CLI Reference](https://docs.digitalocean.com/reference/doctl/reference/serverless/)
  - [Activation Records](https://docs.digitalocean.com/products/functions/reference/activation-records/)
  - [HTTP Headers](https://docs.digitalocean.com/products/functions/reference/http-headers/)
  - [Parameters and Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/)
  - [Project Configuration](https://docs.digitalocean.com/products/functions/reference/project-configuration/)
  - [Supported Runtimes](https://docs.digitalocean.com/products/functions/reference/runtimes/)
    - [Go](https://docs.digitalocean.com/products/functions/reference/runtimes/go/)
    - [Node.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/)
    - [PHP](https://docs.digitalocean.com/products/functions/reference/runtimes/php/)
    - [Python](https://docs.digitalocean.com/products/functions/reference/runtimes/python/)
  - [Build Process](https://docs.digitalocean.com/products/functions/reference/build-process/)
- [Concepts](https://docs.digitalocean.com/products/functions/concepts/)
  - [Glossary](https://docs.digitalocean.com/glossary/functions/)
- [Details](https://docs.digitalocean.com/products/functions/details/)
  - [Features](https://docs.digitalocean.com/products/functions/details/features/)
  - [Pricing](https://docs.digitalocean.com/products/functions/details/pricing/)
  - [Availability](https://docs.digitalocean.com/products/functions/details/availability/)
  - [Limits](https://docs.digitalocean.com/products/functions/details/limits/)

- [Reference](https://docs.digitalocean.com/products/functions/reference/)
- [Supported Runtimes](https://docs.digitalocean.com/products/functions/reference/runtimes/)
- Node.js

[Give Feedback](https://ideas.digitalocean.com/documentation)

# Functions Node.js JavaScript Runtime

Validated on 31 Mar 2023 • Last edited on 17 Apr 2025

Functions are blocks of code that run on demand without the need to manage any infrastructure. Develop on your local machine, test your code from the command line (using `doctl`), then deploy to a production namespace or App Platform — no servers required.

Functions supports Node.js 14 (`nodejs:14`) and Node.js 18 (`nodejs:18`). Specify the desired runtime and version with the [`runtime` key in your `project.yml` file](https://docs.digitalocean.com/products/functions/reference/project-configuration/#runtime), or by using the **Runtime** drop-down when creating a function through the control panel.

The Functions Node.js runtime passes [two parameters](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#parameters) to your handler function, and expects either no return value or a [properly formatted response](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#returns) object.

## An Example JavaScript Function

Here is a JavaScript function that responds with “Hello world”:

```js
export function main() {
  return { body: 'Hello world' }
}
```

This `main()` function takes no parameters, and returns a response object with a `body` key:

```js
{ body: 'Hello world' }
```

The function is exported using the `export` keyword. By default, the runtime expects a function called `main` to be exported. This is the _entry point_ or the _handler_. This handler function is the only function where the runtime passes in data and receive responses.

Note

If your function uses any asynchronous, promise-based code, your handler function must return a promise to the runtime.

To do this, either `return` a promise explicitly, or use standard `async`/`await` syntax. See [Asynchronous Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#asynchronous-functions) for more details and examples.

You can set a different function name as the handler using the [`main` key in `project.yml`](https://docs.digitalocean.com/products/functions/reference/project-configuration/#main).

## Parameters

The handler function is always passed two parameters, `event` and `context`.

Note
Information about function parameters that is not language-specific can be found in the [Parameters and Responses](https://docs.digitalocean.com/products/functions/reference/parameters-responses/) reference documentation.

The first parameter, [`event`](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#event-parameter), is the input event that initiated the function. When this is an HTTP event it’s called a _web event_.

The second parameter, [`context`](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#context-parameter), is data about the function’s execution environment such as the timeout deadline and memory allocations.

Both parameters are optional and you may ignore them if your function doesn’t require the information they provide. The parameter list for your handler function should look like one of the following:

- `(event, context)`: Accesses both parameters.
- `(event)`: Accesses only the event parameter.
- `(_, context)`: Accesses only the context parameter (`_` is a common convention for unused parameters, though you may need to mark it as unused to satisfy your linter or compiler).
- `()`: Accesses neither.

Here is a function that uses both parameters to return a personalized `Hello world` and the function’s version number:

```js
export function main(event, context) {
  const name = event.name || 'stranger'
  const version = context.functionVersion

  return {
    body: `Hello ${name}! This is version ${version}.`
  }
}
```

You can call the function by pasting its URL in your browser and adding a `name` field in a query string at the end.

Note

You can get the URL for your function from the control panel interface, or by running the following command on the command line:

```shell
doctl serverless function get <function-name> --url
```

```
https://<your-function-url>?name=Sammy
```

Or use `curl` to send the input as form data in the body of the request:

```sh
curl -d 'name=Sammy' <your-function-url>
```

Either way, the response body is returned:

```
Hello Sammy! This is function version 0.0.2.
```

### Event Parameter

The `event` parameter is an object. It is structured like the following example:

```json
{
  "http": {
    "headers": {
      "accept": "*/*",
      "accept-encoding": "gzip",
      "user-agent": "curl/7.85.0",
      "x-forwarded-for": "203.0.113.11",
      "x-forwarded-proto": "https",
      "x-request-id": "5df6f6b0d00b58217439c8376fcae23a"
    },
    "method": "POST",
    "path": ""
  },
  "shark": "hammerhead"
}
```

This example event has had a `shark: hammerhead` input passed to it. This has been parsed and added as a top-level key to the object.

More details on the information contained in the `event` parameter is available under the [Event Parameter section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#event-parameter) of the Parameters and Responses reference documentation.

### Context Parameter

The `context` parameter is an object. It is structured like the following example:

```json
{
  "activationId": "5f56b7e9fbd84b2f96b7e9fbd83b2f2e",
  "apiHost": "https://faas-nyc1-2ef2e6cc.doserverless.co",
  "apiKey": "",
  "deadline": 1675959023728,
  "functionName": "/fn-52ad03a2-8660-4f7c-55a5-81aa8bbe73b1/example",
  "functionVersion": "0.0.10",
  "namespace": "fn-52ad03a2-8660-4f7c-55a5-81aa8bbe73b1",
  "requestId": "452164dfeced0a7ad91ee675609024e7"
}
```

Additionally, it has one method, `getRemainingTimeInMillis()`, which returns the number of milliseconds remaining before the function times out.

More details on the information contained in the `context` parameter is available under the [Context Parameter section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#context-parameter) of the Parameters and Responses reference documentation.

## Returns

To send a response, your function must return a properly formatted response object. If your function does not need to send a response, you may return an empty object, nothing at all, or omit the `return` statement entirely.

Here is a response object that returns a string as the response body:

```js
{ body: 'Hello world' }
```

If the `body` is a JavaScript object or list, it is automatically serialized as JSON and returned with a `Content-Type: application/json` header. This function returns the `event` and `context` parameters as JSON:

```js
export function main(event, context) {
  return {
    body: {event, context}
  }
}
```

You may also specify the response’s status code and headers. The status code can be a number or a string:

```js
export function main() {
  return  {
    body: 'Hello world',
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  }
}
```

More details on the response object can be found in the [Returns section](https://docs.digitalocean.com/products/functions/reference/parameters-responses/#returns) of the Parameters and Responses reference documentation.

## Example Functions

### Return JSON

If the `body` is a JavaScript object or list, it is automatically serialized as JSON and returned with a `Content-Type: application/json` header.

```js
export function main() {
  return {
    body: [{type: 'hammerhead'}, {type: 'mako'}]
  }
}
```

### Return an Image

To return an image or other media type, set the correct `Content-Type` header and return a base64-encoded `body`:

```js
export function main() {
  // example 1x1 GIF
  const gif = 'R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
  return {
    headers: { 'Content-Type': 'image/gif' },
    statusCode: 200,
    body: gif
  }
}
```

### Return an HTTP Redirect

A `302` status code and `location` header redirects an HTTP client to a new URL:

```js
export function main() {
  return {
    headers: { location: 'https://example.com' },
    statusCode: 302
  }
}
```

### Return HTML and Set a Cookie

Set cookies with the `Set-Cookie` header, and use the `Content-Type: 'text/html'` header to return HTML content:

```js
export function main() {
  return {
    headers: {
      'Set-Cookie': 'UserID=Sammy; Max-Age=3600; Version=',
      'Content-Type': 'text/html'
    },
    statusCode: 200,
    body: '<html><body><h3>hello</h3></body></html>'
  }
}
```

### More Example Functions

Some more complex example Node.js functions are available on GitHub:

![](https://docs.digitalocean.com/images/icons/default.svg)

Node.js QR Code Generator

github.com![](https://docs.digitalocean.com/images/icons/default.svg)

TypeScript Hello World

github.com![](https://docs.digitalocean.com/images/icons/default.svg)

Node.js Todo App

github.com

## Asynchronous Functions

If your handler function returns a promise, the runtime waits for it to resolve before responding and/or exiting. The `async function main()` handler below immediately returns a promise (as all `async` functions do), then waits for the `sleep()` function to resolve before returning the response body.

```js
export async function main(event) {
  const time = event.time || 1000
  await sleep(time)
  return {body: `We slept for ${time} milliseconds`}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

Call this function with a `time` parameter to adjust the sleep period, or use the default of 1000 milliseconds. The default timeout for functions is 3000 milliseconds, so either adjust your timeout or stick to `time` values under 3000.

You could write a similar function without using `async`/`await`:

```js
export function main(event) {
  const time = event.time || 1000
  return new Promise((resolve) => {
    setTimeout(
     () => resolve({body: `We slept for ${time} milliseconds`}),
     time
    )
  })
}
```

This returns a promise which calls `setTimeout` to run the `resolve` statement after the specified amount of time.

## Log to the Console

The full Node.js `console` object is available. See the [Node.js `console` documentation](https://nodejs.org/api/console.html) for a list of the methods available.

Any text output to `stdout` and `stderr` from `console.log()` (or other `console` methods) are logged and can be accessed through [the `doctl` command line tool](https://docs.digitalocean.com/reference/doctl/). Use `doctl serverless activations logs --follow` to follow logs for all functions in the current namespace, or specify a single function with `--function`.

See the [`doctl serverless activations logs` reference](https://docs.digitalocean.com/reference/doctl/reference/serverless/activations/logs/) for more information or add the `--help` flag to the command for help output.

## Use Modules and Dependencies

Functions that are made up of multiple `require`ed or `import`ed files – whether npm modules or your own code – need to be built and deployed from the command line using `doctl`.

The only requirement for `doctl` to detect, build, and deploy your Node.js function is a properly formatted `package.json` file. Here is a minimal `package.json`:

```json
{
  "main": "index.js",
  "dependencies" : {
    "slugify" : "1.6.5"
  }
}
```

The `main` key must point to the JavaScript file containing your handler function. The `dependencies` key lists all npm module dependencies.

For this example, `index.js` is the file containing our handler function. It looks like this:

```javascript
const slugify = require('slugify')

function main(event) {
  const input = event.input || 'Hello world';
  return { body: slugify(input) }
}

exports.main = main
```

This uses the CommonJS format ( `require` and `exports`). To use ES modules (`import` and `export`), either add `"type": "module"` to your `package.json` file _or_ change your JavaScript file extension to `.mjs` and update the `main` value in your `package.json` to the new filename.

Make sure the above files are in a [properly formatted project directory](https://docs.digitalocean.com/products/functions/how-to/structure-projects/) then deploy with `doctl serverless deploy <your-project-directory>`.

Note
You can scaffold a new project directory and example JavaScript function using the command `doctl serverless init --language js <project-name>`.

The `doctl serverless deploy` command detects the presence of `package.json` and runs `npm install --production` automatically. If you don’t have `npm` installed locally, the entire build can be performed remotely by adding `--remote-build` to the command.

If you require different build steps create a `build.sh` file in the function directory. Read the [Build Process reference](https://docs.digitalocean.com/products/functions/reference/build-process/) for more details on the build process and build scripts.

### Handle Native Dependencies

Node.js modules which compile and use native dependencies can be deployed to Functions using the `--remote-build` feature. Because native dependencies need to be compiled for the correct platform architecture used by Functions, local builds are not supported for native dependencies.

The full command to deploy with remote builds is:

```shell
doctl serverless deploy <your-project-path> --remote-build
```

You may also add the flag to the `watch` command:

```shell
doctl serverless watch <your-project-path> --remote-build
```

## Use Bundlers to Package Source Files

JavaScript bundlers can transform a complex set of source files into a single compressed JavaScript file. This can lead to faster deployments and shorter cold starts, and may allow you to deploy larger applications where the un-optimized source files are larger than the function size limit.

Here are the instructions for how to use three popular module bundlers with the Node.js runtime. The previous `slugify` example is used as the source file for bundling along with the external library.

### Rollup.js

[Rollup](https://rollupjs.org/) is a popular module bundler with tree-shaking and many plugins. To use it, first re-write your `index.js` file to use ES Modules, rather than CommonJS module:

```js
import slugify from 'slugify'

function handler(event) {
  const input = event.input || 'Hello world';
  return { body: slugify(input) }
}

export const main = handler
```

Note
Make sure you export the function using the `const main =` pattern. Using `export {handler as main}` does not work due to tree-shaking. See this [blog post](https://boneskull.com/rollup-for-javascript-actions-on-openwhisk/) for details on why this is necessary.

Add `"type": "module"` to your `package.json` file.

Create a Rollup configuration file in `rollup.config.js`:

```js
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [\
    resolve(),\
    commonjs()\
  ]
}
```

Install the Rollup package and plugins as `devDependencies` using npm:

```shell
npm install rollup rollup-plugin-commonjs rollup-plugin-node-resolve --save-dev
```

Run Rollup now to test it:

```shell
npx rollup --config
```

Rollup outputs a `created bundle.js in 78ms` message and exit. Now add Rollup as a `build` script in your `package.json`:

```js
  "scripts": {
    "build": "rollup --config"
  },
```

The Functions platform detects this `build` script automatically and runs `npm install` to pull in both `dependencies` and `devDependencies`, then runs `npm run build` to do the bundling.

Add a `.include` file to the function directory with the following line:

```
bundle.js
```

Functions only deploys the `bundle.js` file now. If you need to include other assets in the built function, add their filenames on subsequent lines in his file.

Deploy the function using `doctl serverless deploy <your-project-path>`. You may use the `--remote-build` flag to run the build remotely.

### Webpack

[Webpack](https://webpack.js.org/) is a powerful and modular JavaScript bundler. To use it, first change your `index.js` to export the handler function as a global reference:

```js
const slugify = require('slugify')

function handler(event) {
  const input = event.input || 'Hello world';
  return { body: slugify(input) }
}

global.main = handler
```

This allows the bundle source to “break out” of the closures Webpack uses when defining the modules.

Next, create the Webpack configuration file in `webpack.config.js`:

```js
module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    filename: 'bundle.js'
  }
}
```

This configures `index.js` as the entrypoint, and outputs the bundle at `dist/bundle.js`.

Install Webpack into `devDependencies` using npm:

```shell
npm install webpack-cli --save-dev
```

Do a test run of Webpack:

```shell
npx webpack --config webpack.config.js
```

The output is similar to the following:

```
webpack 5.75.0 compiled with 1 warning in 242 ms
```

The warning can be ignored and is due to our example configuration being as minimal as possible. Now add Webpack as a `build` script in your `package.json`:

```js
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
```

The Functions platform detects this `build` script automatically and runs `npm install` to pull in both `dependencies` and `devDependencies`, then runs `npm run build` to do the bundling.

Add a `.include` file to the function directory with the following line:

```
dist/bundle.js
```

Functions only deploys the `bundle.js` file now. If you need to include other assets in the built function, add their filenames on subsequent lines in his file.

Deploy the function using `doctl serverless deploy <your-project-path>`. You may use the `--remote-build` flag to run the build remotely.

### Parcel

[Parcel](https://parceljs.org/) aims to be a zero-configuration build tool for JavaScript and TypeScript libraries and websites. The following instructions install and configure Parcel 2 to bundle your code into `bundle.js`.

Change `index.js` to export the handler using as a global reference:

```js
const slugify = require('slugify')

function handler(event) {
  const input = event.input || 'Hello world';
  return { body: slugify(input) }
}

global.main = handler
```

Note `global.main = handler`. This allows the bundle source to “break out” of the closures Parcel uses when defining the modules.

Install Parcel into `devDependencies` using npm:

```sh
npm install parcel --save-dev
```

Update `package.json` so that the `main` key points to the build target `bundle.js`, and add a new `source` key that points to your existing `index.js`:

```js
  "main": "bundle.js",
  "source": "index.js",
```

Add a `build` script to `package.json` to run Parcel:

```js
  "scripts": {
    "build": "parcel build"
  },
```

Finally, add a `targets` key to `package.json`, where we configure Parcel to bundle all modules up into a single file:

```js
  "targets": {
    "main": {
      "includeNodeModules": true
    }
  },
```

Try out Parcel now:

```sh
npm run build
```

It prints out a successful build result:

```
✨ Built in 1.02s

bundle.js    9.59 KB    45ms
```

Add a `.include` file to the function directory with the following line:

```
bundle.js
```

Functions only deploys the `bundle.js` file now. If you need to include other assets in the built function, add their filenames on subsequent lines in his file.

Deploy the function using `doctl serverless deploy <your-project-path>`. You may use the `--remote-build` flag to run the build remotely.

## Include Files in Built Function

To include arbitrary files with your deployed function (for example, config files and templates), place the files in your function directory. By default, all files in the function directory are included in the deployed function. You can customize this by using `.ignore` and `.include` files. See the [build process reference](https://docs.digitalocean.com/products/functions/reference/build-process/) for details.

Here is an example function that reads text content from a file:

Directory structure:

```
.
├── packages
│   └── <package-name>
│       └── <function-name>
│           ├── index.mjs
│           └── to_be_included.txt
└── project.yml
```

`index.mjs`

```javascript
import fs from 'fs/promises';

export async function main() {
  const fileContents = await fs.readFile('to_be_included.txt');
  return {
    body: `File contents: "${fileContents}"`,
  };
}
```

`to_be_included.txt`

```text
Hello, World!
```

When invoked, the response is:

```
File contents: "Hello, World!"
```

In this article...

- [An Example JavaScript Function](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#an-example-javascript-function)
- [Parameters](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#parameters)
  - [Event Parameter](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#event-parameter)
  - [Context Parameter](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#context-parameter)
- [Returns](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#returns)
- [Example Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#example-functions)
  - [Return JSON](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#return-json)
  - [Return an Image](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#return-an-image)
  - [Return an HTTP Redirect](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#return-an-http-redirect)
  - [Return HTML and Set a Cookie](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#return-html-and-set-a-cookie)
  - [More Example Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#more-example-functions)
- [Asynchronous Functions](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#asynchronous-functions)
- [Log to the Console](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#log-to-the-console)
- [Use Modules and Dependencies](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#use-modules-and-dependencies)
  - [Handle Native Dependencies](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#handle-native-dependencies)
- [Use Bundlers to Package Source Files](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#use-bundlers-to-package-source-files)
  - [Rollup.js](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#rollupjs)
  - [Webpack](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#webpack)
  - [Parcel](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#parcel)
- [Include Files in Built Function](https://docs.digitalocean.com/products/functions/reference/runtimes/node-js/#include-files-in-built-function)

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

GenAI Agent - DigitalOcean

![DigitalOcean Docs Agent](https://product-docs.nyc3.cdn.digitaloceanspaces.com/ai-agent-icon.svg)

This site uses cookies and related technologies, as described in our [privacy policy](https://www.digitalocean.com/legal/privacy-policy/), for purposes that may include site operation, analytics, enhanced user experience, or advertising. You may choose to consent to our use of these technologies, or manage your own preferences. Please visit our [cookie policy](https://www.digitalocean.com/legal/cookie-policy) for more information.

Agree & ProceedDecline AllManage Choices