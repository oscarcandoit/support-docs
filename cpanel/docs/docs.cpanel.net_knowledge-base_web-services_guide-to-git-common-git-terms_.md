---
url: "https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/"
title: "Guide to Git™ — Common Git Terms | cPanel & WHM Documentation"
---

[Skip to main content](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#main-content)

[![cPanel logo](https://docs.cpanel.net/img/docs-logo.min.svg)](https://docs.cpanel.net/)

- [Release Notes](https://docs.cpanel.net/release-notes/)
- [Change Logs](https://docs.cpanel.net/changelogs/)
- [Forums](https://forums.cpanel.net/)
- [Support Ticket](https://tickets.cpanel.net/review/login.cgi)
- [Try Demo](https://cpanel.net/products/trial/)

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

AllcPanelWHMEA4Knowledge BaseManage2WebmailAPI

1. [cPanel & WHM Documentation](https://docs.cpanel.net/)
2. [cPanel Knowledge Base](https://docs.cpanel.net/knowledge-base/)
3. [Web Services](https://docs.cpanel.net/knowledge-base/web-services/)
4. Guide to Git™ — Common Git Terms


[versioncontrol](https://docs.cpanel.net/tags/versioncontrol/) [whmadvanced](https://docs.cpanel.net/tags/whmadvanced/)

#### Table of Contents

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#overview) [Common Git terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#common-git-terms) [Archive](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#archive) [Branch](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#branch) [Check out](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#check-out) [Cherry-pick](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#cherry-pick) [Clone](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#clone) [Commit](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit) [Commit Object](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit-object) [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#deployment) [Fetch](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#fetch) [Fork](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#fork) [HEAD](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) [Head](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) [Hook](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#hook) [Index (Staging Area, Cache)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#index-staging-area-cache) [Log](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#log) [Master or main](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#master-or-main) [Merge](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#merge) [Origin](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#origin) [Pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull) [Push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) [Rebase](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#rebase) [Remote (Remote Repository)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) [Repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#repository) [SHA-1 (SHA-1 sum, Hash)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) [Stash](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#stash) [Version Control](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#version-control) [Working Tree](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#working-tree) - [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

Was this helpful?

[**Table of Contents**](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#installation-toggle)

- [Common Git Terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/)
[Overview](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#overview) [Common Git terms](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#common-git-terms) [Archive](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#archive) [Branch](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#branch) [Check out](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#check-out) [Cherry-pick](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#cherry-pick) [Clone](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#clone) [Commit](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit) [Commit Object](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit-object) [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#deployment) [Fetch](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#fetch) [Fork](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#fork) [HEAD](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) [Head](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) [Hook](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#hook) [Index (Staging Area, Cache)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#index-staging-area-cache) [Log](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#log) [Master or main](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#master-or-main) [Merge](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#merge) [Origin](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#origin) [Pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull) [Push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) [Rebase](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#rebase) [Remote (Remote Repository)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) [Repository](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#repository) [SHA-1 (SHA-1 sum, Hash)](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) [Stash](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#stash) [Version Control](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#version-control) [Working Tree](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#working-tree) - [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/)
- [Host Git Repositories on a cPanel Account](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-host-git-repositories-on-a-cpanel-account/)
- [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories/)
- [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment/)
- [Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-deployment/)
- [Set Up Deployment Cron Jobs](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment-cron-jobs/)
- [Advanced Configuration and Troubleshooting](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-advanced-configuration-and-troubleshooting/)

## Guide to Git™ — Common Git Terms

Last modified: _2024 November 13_

* * *

## Overview

[Git™](http://git-scm.com/) is a version-control system that tracks and manages changes to files. Whenever content changes, Git records it and stores the content’s history. Because of Git’s complex functionality, it uses many terms that novice users may not immediately understand.

To learn about how these terms work in context, read our [Common Git Commands](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-commands/) documentation.

## Common Git terms

### Archive

[Archives](https://git-scm.com/docs/git-archive) store the contents of the current working [tree](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects), but not the `.git` directory or uncommitted changes, in a `.zip` or `.tar` file. You may wish to create an archive to provide a source download file.

### Branch

Each [branch](https://git-scm.com/docs/gitglossary#def_branch) in a repository represents a separate line of development, and all branches retain their own project history, working directory, and staging area. Each repository can contain as many branches as you wish to create, but you can only work in one branch at any given time. Generally, branches diverge from the original line of development with the intent to merge the branch’s changes at a later time.

### Check out

Git uses this [term](https://git-scm.com/docs/git-checkout) in two contexts:

- Git uses `git checkout` to switch between multiple branches from the command line. When you check out a branch or commit via the `git checkout` command, Git points [`HEAD`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) to the specified branch or commit.
- When you check out files via the `git checkout` command, Git copies the version of that file from the specified commit or from the index. This allows you to revert committed or uncommitted changes. For example, if you wanted to **delete** your local changes to `example.js` in your `test` branch, you would run the following commands:

1. `git checkout test` — This use of `git checkout` switches you from your current Git branch to the `test` branch, where you will copy the `example.js` file.
2. `git checkout -- example.js` — This use of `git checkout` switches you from your local `test` branch’s version of `example.js` to the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository)`test` branch’s version of `example.js`. This deletes your local changes.

### Cherry-pick

When you [cherry-pick](https://git-scm.com/docs/git-cherry-pick) changes via the `git cherry-pick` command, Git applies the specified changes from a commit and branch to a different branch’s [`HEAD`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head).

### Clone

When you [clone](https://git-scm.com/docs/git-clone) a public repository via the `git clone` command, Git performs the following actions:

1. Git creates a new local repository in the directory in which you ran the command.






Note:





When you clone a repository in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_), the system creates the repository in the _Repository Path_ directory that you specify.

2. Git sets the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) repository that you wish to clone as the `origin` remote repository.
3. Git fetches all of the commits and branches from the remote repository.
4. Git checks out the default branch. Generally, this branch is named `master` or `main`.

You can then make changes to the local repository and [push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) them to the remote repository, as well as [pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull) changes.

To clone private repositories, you must perform additional steps. For more information, read our [Set Up Access to Private Repositories](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-access-to-private-repositories) documentation.

### Commit

[Commits](https://git-scm.com/docs/git-commit) represent a point in Git’s history. Git’s entire history for a repository exists as a timeline of individual commits. When you commit changes, you create a new point in the history that represents the current state of the index. [`HEAD`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) then points to the new commit.

### Commit Object

[Commit objects](https://git-scm.com/docs/git-commit) represent your committed revisions to a branch. Each commit object contains the commit’s files (the tree object), parent commits, commit metadata (for example, the author and date), and a [SHA-1](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) value that identifies the object.

### Deployment

[Deployment](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) sends finished code into production. You can use different configurations to automatically or manually deploy changes.

For example, you can configure cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) to automatically deploy changes that a cPanel-managed repository receives.

For more information, read our [Set Up Deployment](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-set-up-deployment) documentation.

### Fetch

When you [fetch](https://git-scm.com/docs/git-fetch) changes via the `git fetch` command, Git automatically downloads new changes from the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) repository. However, it does **not** [merge](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#merge) these changes into the [working tree](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#working-tree) for any local branch.

### Fork

When you [fork](https://git-scm.com/search/results?search=fork) a repository, you create a new server-side copy of that repository. You can then experiment with changes to that repository without any impact on the original repository.

### HEAD

[The `HEAD` value](https://git-scm.com/docs/gitglossary#def_HEAD) represents the [SHA-1](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) identifier for the most-recent commit or active branch. Whenever you commit changes to the active branch, Git automatically updates `HEAD` to that commit’s [SHA-1](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) identifier. If you use the `git checkout` command to check out a specific commit instead of a branch, Git enters the `detached HEAD` state.

### Head

[Heads](https://git-scm.com/docs/gitglossary#def_head) are the [SHA-1](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) identifiers for the most-recent commits to each branch. While only one `HEAD` commit exists, a repository generally contains many heads for each branch.

### Hook

[Hooks](https://git-scm.com/docs/githooks) are scripts or other code that you can configure to trigger before or after specific Git actions. You can store these hooks in the `/hooks` directory within the repository directory.

Note:

cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) automatically adds a `post-receive` hook to cPanel-managed repositories.

### Index (Staging Area, Cache)

[Indexes](https://git-scm.com/docs/git-show-index) contain the files from your working tree that you add to a commit to the Git repository. Git also uses the index to store data during failed [merges](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#merge).

### Log

[The log](https://git-scm.com/docs/git-log) contains the commit [hash](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) and metadata, such as the commit message, for every commit on the current branch. You can access this data via the `git log` command on the command line or via [Gitweb](https://docs.cpanel.net/cpanel/files/gitweb) in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_).

### Master or main

Generally, the default branch for a repository is the [`master` or `main` branch.](https://git-scm.com/docs/git-branch) When you commit changes to it, Git moves the default branch’s `HEAD` to the most recent commit’s [SHA-1](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#sha-1-sha-1-sum-hash) identifier.

### Merge

When you [merge](https://git-scm.com/docs/git-merge) one or more commits, Git adds changes to the current branch. To perform a merge of this type, run the `git push` command.

You may also need to manually merge specific revisions if they conflict with changes that have already merged into the repository.

- This type of merge uses the `git merge` command.
- The term “merge” may also refer to the commit that this type of merge creates.

### Origin

[Origin](https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches) is Git’s default name for the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) repository from which you [cloned](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#clone) a local repository. Most repositories include at least one origin repository. Software development often refers to origin as “upstream”.

### Pull

When you [pull](https://git-scm.com/docs/git-pull) changes from the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) repository via the `git pull` command, Git fetches remote changes and then [merges](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#merge) them into the current branch.

Note:

You can use the _Pull from Remote_ feature in cPanel’s [_Git Version Control_](https://docs.cpanel.net/cpanel/files/git-version-control) interface ( _cPanel » Home » Files » Git Version Control_) to automatically pull changes for a repository’s active branch.

### Push

When you [push](https://git-scm.com/docs/git-push) changes via the `git push` command, Git sends commits from your local branch to the [remote](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#remote-remote-repository) repository.

### Rebase

[Rebases](https://git-scm.com/docs/git-rebase) reapply changes to the history of the active branch via the `git rebase` command. To do this, rebases **eliminate** merge commits and create a new commit for each commit in the original branch.

### Remote (Remote Repository)

The [remote](https://git-scm.com/docs/git-remote) repository exists on a remote filesystem. When you [fetch](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#fetch), [pull](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#pull), or [push](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#push) code, Git sends changes to or receives changes from the remote repository.

### Repository

[Repositories](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) store all of the data that Git manages for a specific project. It contains [commit objects](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit-objects) and [heads](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) as well as the [working tree](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#working-tree).

### SHA-1 (SHA-1 sum, Hash)

[The algorithm](https://git-scm.com/docs/git-log) that generates the names for all Git objects, from [commit objects](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#commit-objects) to [stash objects](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#stash-objects). In Git’s vernacular, this term also refers to the 40-character hexidecimal string that the algorithm generates.

### Stash

[An object](https://git-scm.com/docs/git-stash) that stores changes to the working tree and index for future reuse. The stash allows you to set aside changes to a branch and return to the [`HEAD`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) state. You can then reapply the stashed changes or apply them to a different branch.

### Version Control

[Version control](https://git-scm.com/) systems track changes in files and allow multiple users to coordinate those changes and view and manipulate the project’s history. Git is a version control system.

### Working Tree

[The working tree](https://git-scm.com/docs/git-ls-tree) contains the checked-out file system for a repository. The working tree includes the files for the [`HEAD`](https://docs.cpanel.net/knowledge-base/web-services/guide-to-git-common-git-terms/#head) commit and any local changes to those files.

[![](https://docs.cpanel.net/img/cpanel-logo.min.svg)](https://cpanel.com/ "WebPros International, LLC")

© 2025 All Rights Reserved / [Legal Notices](https://cpanel.com/legal-notices.html "Legal Notices") / [Privacy Policy](https://cpanel.com/privacy-policy.html "Privacy Policy") / [Transparency Report](https://cpanel.com/transparency-report.html "Transparency Report")

cPanel, WebHost Manager, and WHM are registered trademarks of WebPros International, LLC for providing its computer software that facilitates the management and configuration of internet web servers.

×