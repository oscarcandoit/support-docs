<!-- Source: https://www.remotion.dev/docs -->

# Creating a new project

Copy page

On this page

## Prerequisites​

To use Remotion, you need at least [Node](https://nodejs.org/en/download/) 16 or [Bun](https://bun.sh) 1.0.3.

## Prompting a video with Claude Code​

If you plan on prompting videos with  **Claude Code** , see: [Prompting videos with Claude Code](/docs/ai/claude-code).

## Scaffolding a new project​

note

🐧 [Linux distros need at least version 2.35 of Libc.](https://github.com/remotion-dev/remotion/issues/2439)  
They also need to [install some additional packages](/docs/miscellaneous/linux-dependencies).  
Alpine Linux and nixOS are unsupported.

  * npm
  * bun
  * pnpm
  * yarn


    
    
    Use npm as the package manager
    
    bash
    
    npx create-video@latest
    
    
    Use pnpm as the package manager
    
    bash
    
    pnpm create video
    
    
    Use Yarn as the package manager
    
    bash
    
    yarn create video
    
    
    Use Bun as the package manager and runtime
    
    bash
    
    bun create video

note

Bun as a runtime is mostly supported. [Read more here](/docs/bun).

Choose the template that is most suitable for you.  
For your first project, we recommend the [Hello World](/templates/hello-world) template.

  * Regular templates
  * Next.js + React Router 7


After the project has been scaffolded, we recommend to open the project in your text editor and starting the [Remotion Studio](/docs/studio):
    
    
    bash
    
    npm run dev

After the project has been scaffolded, we recommend to open the project in your text editor and starting the app:
    
    
    bash
    
    npm run dev

To start the [Remotion Studio](/docs/studio):
    
    
    bash
    
    npm run remotion

## Installation in existing projects​

Want to install Remotion in an existing project? Go here instead: [Installation in existing projects](/docs/brownfield)