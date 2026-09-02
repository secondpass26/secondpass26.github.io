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

Create the GitHub repository as `secondpass26.github.io`, push this project, then choose **Settings → Pages → Source → GitHub Actions**. The site will publish at `https://secondpass26.github.io/`.

Before making commits, verify the repository-local pseudonymous identity with:

```sh
git config --local user.name
git config --local user.email
```
