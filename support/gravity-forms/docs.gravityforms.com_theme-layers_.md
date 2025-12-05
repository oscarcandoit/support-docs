---
url: "https://docs.gravityforms.com/theme-layers/"
title: "Theme Layers - Gravity Forms Documentation"
---

[![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2023/09/logo.svg)](https://docs.gravityforms.com/) [![Gravity Forms Documentation](https://docs.gravityforms.com/wp-content/uploads/2024/08/gf-print_logo.svg)](https://docs.gravityforms.com/)

- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Developer](https://docs.gravityforms.com/category/developers/)
- [Blog](https://www.gravityforms.com/blog/)
- [Changelog](https://docs.gravityforms.com/gravityforms-change-log/)

Toggle Menu

- [Getting Started](https://docs.gravityforms.com/category/getting-started/)
- [Your Gravity Forms Account](https://docs.gravityforms.com/category/your-gravity-forms-account/)
- [User Guides](https://docs.gravityforms.com/category/user-guides/)
- [Gravity Forms 2.9](https://docs.gravityforms.com/category/gravity-forms-2-9/)
- [Gravity Forms 2.8](https://docs.gravityforms.com/category/gravity-forms-2-8/)
- [Add-Ons](https://docs.gravityforms.com/category/add-ons-gravity-forms/)
- [Developers](https://docs.gravityforms.com/category/developers/)  - [Theme Framework](https://docs.gravityforms.com/category/developers/theme-framework/)    - [Theme Layers APIs](https://docs.gravityforms.com/category/developers/theme-framework/theme-layers-apis/)
    - [Theme Framework Introduction](https://docs.gravityforms.com/theme-framework-introduction/ "Theme Framework Introduction")
    - [Quick Start Guide](https://docs.gravityforms.com/quick-start-guide/ "Quick Start Guide")
    - [Core Concepts](https://docs.gravityforms.com/theme-framework/ "Core Concepts")
    - [CSS API](https://docs.gravityforms.com/css-api/ "CSS API")
    - [Theme Layers](https://docs.gravityforms.com/theme-layers/ "Theme Layers")
    - [Theme Framework Frequently Asked Questions](https://docs.gravityforms.com/theme-framework-faq/ "Theme Framework Frequently Asked Questions")
  - [Hooks](https://docs.gravityforms.com/category/developers/hooks/)
  - [Data Objects](https://docs.gravityforms.com/category/developers/data-objects/)
  - [PHP API](https://docs.gravityforms.com/category/developers/php-api/)
  - [Database](https://docs.gravityforms.com/category/developers/database/)
  - [Developer Snippets](https://docs.gravityforms.com/category/developers/tutorials/)
  - [REST API](https://docs.gravityforms.com/category/developers/rest-api/)
- [Knowledge Base](https://docs.gravityforms.com/category/knowledge-base/)

# Theme Layers

- [Introduction](https://docs.gravityforms.com/theme-layers/#h-introduction)
- [Theme Layers](https://docs.gravityforms.com/theme-layers/#h-theme-layers)
- [Theme Layer Architecture](https://docs.gravityforms.com/theme-layers/#h-theme-layer-architecture)
- [Theme Layer framework](https://docs.gravityforms.com/theme-layers/#h-theme-layer-framework)
- [Architectural Diagram](https://docs.gravityforms.com/theme-layers/#h-architectural-diagram)
- [Engines](https://docs.gravityforms.com/theme-layers/#h-engines)
- [Traits](https://docs.gravityforms.com/theme-layers/#h-traits)
- [GF\_Theme\_Layer](https://docs.gravityforms.com/theme-layers/#h-gf-theme-layer)
- [Theme Layers APIs](https://docs.gravityforms.com/theme-layers/#h-theme-layers-apis)
- [Fluent API](https://docs.gravityforms.com/theme-layers/#h-fluent-api)
- [JSON API](https://docs.gravityforms.com/theme-layers/#h-json-api)
- [View Classes](https://docs.gravityforms.com/theme-layers/#h-view-classes)
- [Usage Examples](https://docs.gravityforms.com/theme-layers/#h-usage-examples)

## Introduction

This article covers Theme Layers in Gravity Forms, which control form display in WordPress Full Site Editing and Gutenberg blocks. You’ll learn about their structure and the APIs for implementation to customize your forms.

## Theme Layers

**Theme layers** accommodate all of the different ways that forms and their styles can be displayed on a page, including WordPress site editing, Gutenberg blocks, site builders, shortcodes, and PHP partials.

A Theme Layer is a collection of everything that dictates how a form is displayed.

A more in-depth definition would be that a Theme Layer is a distinct piece of code that facilitates defining settings fields, block settings, custom CSS output (including CSS generated from settings fields and block settings), queued assets (CSS and JS files), and direct modification of the underlying form markup. A Theme Layer can define any or all of these things in any combination the developer needs to accomplish their goals.

## Theme Layer Architecture

A Theme Layer can do a lot of complex things.  To make the developer experience of actually creating one as painless as possible, we split up the architecture into two distinct pieces of PHP:

1. A framework that handles all of the advanced logic and operations
2. An API that provides streamlined access to this underlying framework.

### Theme Layer framework

#### Architectural Diagram

[![](https://docs.gravityforms.com/wp-content/uploads/2023/12/theme-layer-architecture.jpeg)](https://docs.gravityforms.com/wp-content/uploads/2023/12/theme-layer-architecture.jpeg)

#### Engines

Every individual thing a Theme Layer can “do” is defined as a distinct class called an Engine. These are split into two parts: Definition Engines and Output Engines. When registered, the Engines utilize various hooks and filters in the WP ecosystem to handle their logic.

##### Definition Engines

Definition Engines are used to, as you might guess, to **define** things. In their current state, these can be either Form Settings Fields or Block Settings Fields. The Definition Engine classes for each ensure that the fields they define are output in the correct location (either a Form Settings screen for Settings fields or within the Block Settings for our Gravity Forms form block).

Settings fields are handled by hijacking how add-ons register settings fields. A Settings Definition Engine takes the fields and presents them on a Form Settings tab for the Theme Layer. Each Theme Layer will have its own Settings Page.

Block Settings are handled by passing the field definitions to either the Basic or Advanced sections of our block settings, which React then renders as fields.

##### Output Engines

Output Engines, by contrast, are responsible for anything that gets **output** as part of the rendered form. This currently includes style blocks with CSS Properties, enqueuing any JS or CSS to output when a form is displayed, and modifying the underlying PHP/markup of the entire form or individual fields, as needed.

#### Traits

A traditional Class Hierarchy presents some difficult roadblocks for end-users hoping to implement these various engines. Since a given Theme Layer can implement any combination of these Engines, a traditional class hierarchy would require us to generate a unique class for every combination of engines. As you can imagine, as our number of Engines grows, this would become increasingly cumbersome to maintain. Plus, `Theme_Layer_With_Settings_And_Block_Settings_And_CSS_Props` is just a cumbersome class name.

That is why Theme Layers use Traits.  Traits, much like Javascript `imports`, allows the end-user to simply “opt in” to various capabilities in any combination they need. Simply use the various Traits you need, and boom: your Theme Layer has access to the things it needs, all without needing to understand how the pieces connect under the hood.

#### GF\_Theme\_Layer

This all comes together by extending our base class of `GF_Theme_Layer`. A Theme Layer developer simply needs to extend this class, add in `use` statements for any Traits necessary, and define the various fields, enqueues, etc., for usage within the Theme Layer.

## Theme Layers APIs

Gravity Forms provides two APIs for implementing Theme Layers. These APIs allow developers to define form styling without creating PHP classes, offering a flexible way to customize form appearance within WordPress.

### Fluent API

A Fluent API is a design pattern that simplifies complex operations by chaining method calls in a readable, step-by-step sequence. It allows developers to build and configure objects or execute commands in a more natural, procedural flow. At its core, a Fluent API looks like this:

```
$my_widget = new Fluent_Widget();
$my_widget->add_a_thing( $thing )
          ->add_another_thing( $another_thing )
          ->do_something_else( $something_else );
```

Refer to [this](https://docs.gravityforms.com/?p=42525) article for more information about the Fluent API.

### JSON API

The JSON API allows developers to define Gravity Forms styles using **theme.json**. By adding a **gravityforms** section to the file, you can easily configure various styling options for forms directly in JSON.

Refer to [this](https://docs.gravityforms.com/?p=42528) article for more information about the JSON API.

### View Classes

View classes modify markup and require a specific structure to handle various elements properly. To create a View class, it must extend the base Gravity\_Forms\\Gravity\_Forms\\Theme\_Layers\\API\\View and define a single method: get\_markup().

Refer to [this](https://docs.gravityforms.com/?p=42532) article for more information about View Classes.

## Usage Examples

Gravity Forms [Conversational Forms Add-On](https://docs.gravityforms.com/using-the-conversational-forms-add-on/) uses a similar approach by defining a set of configurations that control how forms are rendered and styled.

- Comments


This field is for validation purposes and should be left unchanged.

- Was this article helpful?

- How we can improve it?

- Please [open a support ticket](https://www.gravityforms.com/open-support-ticket/) if you need technical support or want to report a bug. Product feedback, feature and integration requests, and other functionality ideas can be submitted on our [Product Roadmap page](https://www.gravityforms.com/gravity-forms-roadmap/?c=submit-idea).


Δ

Last modified: February 6, 2025

© Copyright 2008 - 2025 Rocketgenius, Inc

[Return to Gravity Forms](https://www.gravityforms.com/)