# Robo Friends App

[![issues](https://img.shields.io/github/issues/KenTandrian/ztm-robofriends)](https://github.com/KenTandrian/ztm-robofriends/issues)
[![language](https://img.shields.io/github/languages/count/KenTandrian/ztm-robofriends)](https://github.com/KenTandrian/ztm-robofriends/search?l=javascript)
[![top-language](https://img.shields.io/github/languages/top/KenTandrian/ztm-robofriends)](https://github.com/KenTandrian/ztm-robofriends/search?l=javascript)
[![commit](https://img.shields.io/github/commit-activity/m/KenTandrian/ztm-robofriends)](https://github.com/KenTandrian/ztm-robofriends/commits/main)
[![last-commit](https://img.shields.io/github/last-commit/KenTandrian/ztm-robofriends)](https://github.com/KenTandrian/ztm-robofriends/commits/main)
[![pages-build-deployment](https://github.com/KenTandrian/ztm-robofriends/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/KenTandrian/ztm-robofriends/actions/workflows/pages/pages-build-deployment)

## Introduction
A project made with React JS for displaying and filtering robot profiles. This web application project is created to complete the Zero To Mastery course on Udemy.

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/ztm-robofriends/](http://localhost:5173/ztm-robofriends/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [building for production](https://vitejs.dev/guide/build.html) for more information.

### `npm run serve`

Preview the built application locally.

See the section about [deployment](https://vitejs.dev/guide/static-deploy.html) for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Structure
```
.
├── public
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├──  src
│   ├── components
|   │   ├── Card.tsx
|   │   ├── CardList.tsx
|   │   ├── ErrorBoundary.tsx
|   │   ├── Scroll.tsx
│   |   └── SearchBox.tsx
│   ├── containers
|   │   ├── App.css
|   │   ├── App.tsx
│   |   └── SEGA.woff
│   ├── types
|   │   ├── redux.d.ts
│   |   └── robot.d.ts
│   ├── actions.ts
│   ├── constants.ts
│   ├── index.css
│   ├── index.tsx
│   ├── reducers.ts
│   ├── reportWebVitals.ts
│   ├── robots.ts
│   └── setupTests.ts
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```