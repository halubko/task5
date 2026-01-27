# Task 5

## [Task](https://innowise-group.atlassian.net/jira/software/c/projects/JST/boards/390?selectedIssue=JST-2419) | [Deploy]

## Installation instructions:
1) Clone repository:
```bash
  git clone https://github.com/halubko/task4.git
```
2) Install dependencies:
```bash
  npm install
```

## Running the app locally:
1) Create .env.local file:
```bash
  cp .env.example .env.local
```
2) Run dev server:
```bash
  npm run dev
```

## Running tests:
```bash
  npm run test
```

## Build instructions:
Build script includes creating .env, generating routerTree.gen.ts and building
```bash
  npm run build
```

## Project description:
Created online store web-app with using NextJS, Zustand.
### Realized:
- ✅ Infinity scroll;
- ✅ Filters and search;
- ✅ Products list;
- ✅ Adding products to cart and quantity changing;
- ✅ Login/Registration with saving access/refresh tokens;
- ✅ AutoLogin by access/refresh tokens;
- ✅ Cart with the possibility of removing, changing quantity of product;
- ✅ Single product page;
- ✅ Logout;

## Technology stack:
- TypeScript (no any)
- NextJS (app router)
- Zustand
- Shadcn UI + Tailwind
- React-intersection-observer
- Toastify
- Vitest

## Lighthouse deploy test screenshot:
