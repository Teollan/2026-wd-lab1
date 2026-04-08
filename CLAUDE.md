# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run format` — format with Prettier (includes Tailwind class sorting)
- `npm run deploy` — build + deploy to GitHub Pages

No test runner is configured.

## Architecture

**BlogSpace** — a multi-page blog app built with vanilla TypeScript + Tailwind CSS v4, using localStorage for persistence. No backend; deployed to GitHub Pages at base path `/2026-wd-lab1/`.

### Custom Framework (`src/modules/core/`)

A hand-rolled reactive framework inspired by Flux/Zustand:

- **Store\<T\>** extends **Publisher\<T\>** — holds state, notifies subscribers on change
- **ReactiveComponent** — base class that subscribes to stores via `useStore(store)` and re-renders on state changes
- **Dispatcher** — central event bus; components trigger actions via `data-action` / `data-submit-action` HTML attributes
- **Action** — `{ type: string, payload?: any }` dispatched through the dispatcher
- **createScreen()** — mounts a screen component and wires up event delegation on the document

### Module Organization

Each feature module follows: `data/` (store + repository), `model/` (types), `view/` (screens + components).

- **auth** — sign in/up forms, auth state, session via `AUTH_USER_ID` in localStorage
- **posts** — feed, my posts, create/edit post; separate stores per screen (`feedStore`, `newPostStore`, `editPostStore`, `myPostsStore`)
- **comments** — comment creation and display on posts
- **user** — profile display
- **UI** — shared components (Header, NavBar, Avatar, icons)
- **about** — landing page

### Component Types

- **Reactive components** (classes extending `ReactiveComponent`) — subscribe to stores, auto re-render
- **Pure components** (plain functions) — accept props, return HTML template strings, no side effects

### Routing

Static multi-page app with 8 HTML entry points in `src/` (not SPA). Route constants live in `src/utility/routes.ts` with a shared `BASE` path prefix.

### Data Layer

Repositories (`auth.repository.ts`, `posts.repository.ts`, `comments.repository.ts`, `user.repository.ts`) abstract localStorage CRUD. `src/utility/Storage.ts` wraps `localStorage` with typed `getObject<T>()`/`setObject<T>()` helpers.

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig and vite).
