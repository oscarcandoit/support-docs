---
url: https://developers.elementor.com/docs/getting-started/internals/
scraped_at: 2025-10-20T00:55:44.418Z
---

# [\#](https://developers.elementor.com/docs/getting-started/internals/\#elementor-internals) Elementor Internals

Elementor CoreBasic

Elementor has underlying technology, which we call the internals. In this section we’ll introduce you to the concepts you should understand when developing your Elementor addons.

## [\#](https://developers.elementor.com/docs/getting-started/internals/\#available-internals) Available Internals

Below is a list of Elementor internals along with a short description and links to more in-depth information:

- [The Editor](https://developers.elementor.com/docs/editor/)

The editor is where users create pages and control their settings. It is divided into preview and panel areas. The panel hosts the list of widgets and is where users control the settings. The preview screen is where they see how the page will look.

- [Managers](https://developers.elementor.com/docs/managers/)

Elementor's architecture registers and unregisters elements using special managers. External developers need to use these managers to register their own elements. This will let Elementor know about them, enabling their use.

- [Scripts & Styles](https://developers.elementor.com/docs/scripts-styles/)

Developers need to know how different Elementor components load custom JS and CSS files. Since these files can severely impact performance, it’s important to learn the proper methods to load them for each component.

- [Hooks](https://developers.elementor.com/docs/hooks/)

There are a wide range of hooks that can be used with Elementor. This documentation contains a complete listing of the entire range of available hooks Elementor has to offer - filter hooks, action hooks, PHP hooks, JS hooks, frontend hooks and editor hooks.

- [Deprecations](https://developers.elementor.com/docs/deprecations/)

Over time, code is removed or replaced. The deprecation process is gradual and Elementor deprecation process consists of the several steps. Developers need to know how Elementor deprecates code and how they need to debug and update deprecated code.

- [CLI](https://developers.elementor.com/docs/cli/)

Elementor integrates with WP-CLI, enabling developers to run certain Elementor tasks via the command line interface, without using a web browser. All the available commands with their arguments and usage examples are listed here.

- [Building Addons](https://developers.elementor.com/docs/addons/)

This section contains information for those unfamiliar with WordPress. It discusses basic WordPress plugin development, as well as Elementor addons and advanced topics, including background information on plugins and object oriented programming.


←
[The Docs Website](https://developers.elementor.com/docs/getting-started/usage/)[Elementor Components](https://developers.elementor.com/docs/getting-started/components/)
→