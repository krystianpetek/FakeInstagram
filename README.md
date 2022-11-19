# FakeInstagram

- Author: Krystian Petek
- Preview hosted by GithubPages - [**`FakeInstagram`**](https://krystianpetek.github.io/FakeInstagram/)

A project is a simple SPA an app that pretends to be instagram, which are fetching data from mock [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) API and display results. 

This is my first project in JavaScript / TypeScript and immediately in the frontend framework. 
## Table of contents

- [FakeInstagram](#fakeinstagram)
  - [Table of contents](#table-of-contents)
  - [Description](#description)
  - [Developing](#developing)
    - [Built with](#built-with)
    - [Prerequires](#prerequires)
    - [Setup / Install](#setup--install)

## Description

The application was implemented based on the React framework using TypeScript. All data are fetched from [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) API.

The application contains a lot of information from an external API, such as in `Home page`, you can browse all photos posted on instagram on `Main feed` tab, initially only 50 photos are loaded and after pressing the button you can top up another 50, it's a simple, fake way to paginate data.

Staying on the Home view, go to the `User photos` tab, we can filter photos based on username, all photos whose username contains letters entered in the search engine will be displayed.

Moving forward, on the `Posts` view you can see all the posts added by instagram users. If you are logged in, you can add new posts and write comments under posts, as well as delete comments and posts.

In the `Search view`, you can:
- search for `users` by user `ID` with all information about them
- search for `photos` by photo `ID` with all information and photo preview
- search for `albums` (preview of all photos in the album) based on the album `ID`

The last view is a `Login page`, there are 10 users on the site, logging in is done using `username and email`, because passwords are not available in the mock API.
To check user details, you can do so here: [USERS !](https://jsonplaceholder.typicode.com/users)

`When you log in` to the system, on the `Posts` tab you can add and delete posts and comments, but only for the logged in user.

The next tab available after logging in is `My profile`, where you can check information about the logged in user, edit basic data and view your posts, comments and albums with photos.

## Developing

### Built with
- **[React](https://reactjs.org/)** 18.2.0
- **[TypeScript](https://www.typescriptlang.org/)** 4.8.4
- **[SASS](https://sass-lang.com/) (SCSS)** 1.56.1
- **[Create React App](https://create-react-app.dev/docs/adding-typescript)** with TypeScript template
- **[axios](https://axios-http.com/docs/intro)** 1.1.3 - fetching data from external API
- **[gh-pages](https://pages.github.com/)** - deploy to Github Pages
- **[{JSON} Placeholder](https://jsonplaceholder.typicode.com/)** - Mock API

### Prerequires
To run application are required:
- node.js
- npm

### Setup / Install

`To run application, in PowerShell use this commands:`

```powershell
cd .\fake-instagram-react-ts
npm install
npm start
```