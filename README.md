# Second Pass

A minimal anonymous blog built with Astro. It has no client framework, comments, analytics, cookies, web fonts, or third-party requests.

## Write a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: Your title
description: A one-sentence summary.
published: 2026-09-01
category: Development
tags:
  - learning
draft: false
---

Your post starts here.
```

Categories are intentionally limited to `Brain & Focus`, `Development`, and `Life`. Tags are flexible and reusable. Prefer consistent topic tags such as `focus`, `brain-fog`, `development`, `cpp`, `learning`, `career`, `exercise`, `projects`, and `life` when they fit; new tags are also allowed.

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
