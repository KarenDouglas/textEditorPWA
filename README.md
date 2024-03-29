# 19 Progressive Web Applications (PWA): Text Editor

## Live Site and Video Demo

### Live Site
[View the Live Site](https://jate-text-editor-pwapp-f14a1469c3bd.herokuapp.com/)


### Video Sample
[![Watch the video](./assets/JATE-PWAChallenge%20-%20Made%20with%20Clipchamp.gif)](https://www.youtube.com/watch?v=Hizvao8PlOA)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Built With
- JavaScript
- Node.js
- Webpack
- Express
- Heroku
- IDB
- Babel
- Mini CSS Plugin
- WorkBox Plugin

 ## Instructions
 
 To download node packages in root directory:
```bash
npm i
```
 To download node packages in client and server directory:
```bash
npm run install
```
To start JATE App:
```bash
npm run start
```
## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Author

- LinkedIn: [@KarenDouglas](https://www.linkedin.com/in/karen-douglas-344974246/)
- Frontend Mentor: [@KarenDouglas](https://www.frontendmentor.io/profile/KarenDouglas)
- Twitter: [@CodeNoob4Life](https://twitter.com/CodeNoob4Life)
