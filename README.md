# Second Pass

A minimal anonymous blog built with Astro. It has no client framework, comments, analytics, cookies, web fonts, or third-party requests.

## Write a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: Your title
description: A one-sentence summary.
published: 2026-09-01
tags:
  - notes
draft: false
---

Your post starts here.
```

Commit and push to `main`; the included workflow builds and publishes it.

## Local preview

```sh
pnpm install
pnpm dev
```

## GitHub Pages setup

Create a GitHub repository, push this project, then choose **Settings → Pages → Source → GitHub Actions**. The workflow handles the repository subpath automatically. For a user or organization site named `<account>.github.io`, set the workflow's `BASE_PATH` to `/`.

Before making commits, verify the repository-local pseudonymous identity with:

```sh
git config --local user.name
git config --local user.email
```
