# FakeInstagram - CHANGELOG.md

## 1.0.1 (2023-03-21)

Features:

- Added CHANGELOG for each version from project start
- Updated project README
- Created tests for Post component
- Added 2 tests for UserContextProvider
- Added jest configuration to support toBeInTheDocument method from @testing-library/jest-dom
- Implemented PostContext tests
- Added tests for PhotoInfo and LoginContext components
- Updated project dependencies after 4 months

Fix:

- Fixed UserService in other components after refactor UserService
- Refactor UserService and UserContext to write test for UserContextProvider
- Refactored PostService and CommentService API calls
- Refactored implementation of PostContext to provide tests, pretend something like service dependency injection

## 1.0 (2022-11-19)

Features:

- Add handling to edit information about logged user
- Add InputUserInto component to edit information about user in myProfile view
- Add README with description about project
- Added handling to add more photos, pretend lazy loading
- Added footer with information about author
- Change sizing of container in which we can switch tabs with view
- Add tab switching in Home view, to handle display all photos from API and filter photos by username
- Added AllPhotos component to ensure view with all photos in Home page
- Add UserPhotos component to ensure view with only photos filtered by username in Home page
- Add photos splitted by albums in MyProfile view

Fix:

- Change height between main layout components
- Change API address because GitHub pages cannot fetch data using http and BrowseRouter to HashRouter
- Change basename for fix routing on Github Pages

Bugfixes:

- Fix bug in which content aren't justified

## 0.9.1 (2022-11-18)

Features:

- Add photos and albums to myProfile
- Updated myProfile view, added posts and about me section
- added gh-pages build
- added handling for errorPage

Bugfixes:

- corrected path to home
- Corrected API ts files and imports to there files
- Fix bug in component when user isn't logged

Security:

- app repo cleanup, removed unneccessary files, fragments of code

## 0.9 (2022-11-18)

Features:

- add reusable SearchInput
- add UserInfo component and also SearchUsers component, search users by id
- add PhotoInfo component and also SearchPhotos component finish, search photos by id completed task
- add AlbumInfo and SearchAlbum component finish, all search components implementation done

Fix:

- fix duplicate key in photos from album
- move Search components styling to mixin in global variables

## 0.8 (2022-11-18)

Features:

- added helper function to check if entered value is number,
- added implementation of searching photos by id
- added searchUsers implementation to component, to search user by id and add required validation, error message
- added tab view in Search component
- added SearchAlbums component
- added Tabs to change views between 3 components to search users by id, search photos by id and search photos by album id
- fixed randomColor implementation of calculating hex value
- Changed location of generic field validator
- added handling for add new post with title and body

Fix:

- Fix UserResponse interface API response
- moved styles from tabs component to single TabItem
- Fix search view position,

## 0.7 (2022-11-17)

Performance:

- Changed invoke method to fetch data from external API, all methods now works asynchronously

Features:

- Added implementation of adding new post and fixed filtering comments
- Added new container for new posts when user exists, are logged to your account
- Added handling to remove your comments
- Added new component to input PostComment and to input Post and also new generic component Button
- Changed submit forms button to generic button

Fix:

- Changed implementation of fetching information about myProfile
- changed location of method randomColor border Post
- fixed cancel sign into post which logged user isn't an owner
- Modified comment style, separated user email of post comment

## 0.6 (2022-11-16)

Feature:

- added handling for add comment to post
- added styling to delete sign on posts and on comments,

Bugfixes:

- added authorization for prevent that only logged user can add comment
- removed add comment after click button and now you can add comment on event keydown enter

Fix:

- changed display style on post and comment components
- modified Post front and backend side, in backend refactoring code
- added PostComment component and moved to this comments implementation to view each comment separatelly
- Fix remove login userContext after logout
- Moved all color definitions from app to variables
- fixed overflow post components

## 0.5 (2022-11-15)

Features:

- added handling to add comments to post in Post component temporary after click button
- added Post and Comments Context to store information about user Posts and comments longer, to time when page are refreshed.
- added Post and UserServices with predefined methods to invoke http request to API
- added close (delete) sign to posts
- add additional exports to interface API response,
- added CommentService and AlbumService and also Photo and TodoService with predefined methods to invoke request to API
- added two methods to AlbumService request data from / to api

Bugfixes:

- Shuffle removed from Posts because it caused fails when loading posts

Fix:

- changed handling add new Post and Comment, moved this responsible to PostContextProvider and there here are request / fetch from API
- changed store Posts state from Posts component to PostContext
- fixed TodoService export module
- changed location where are defined interfaces for response routes from API
- fix randomColor function to color Posts border
- change handler to fetching data from api in 2 components

## 0.4.3 (2022-11-15)

Features:

- Added function shuffle Posts after fetch from API
- added validation and validate message to login form input fields
- added footer context and react icons package dependency
- added sections in My profile route, you can look here at logged in user info, posts, albums and his photos

Fix:

- fixed API response interfaces are moved to appropriate place
- changed login form size
- changed TitleHeader font size
- fixed view Post component, added styles and displayed properties
- fixed Title in my profile route, now here is user email who actually is logged

## 0.4.2 (2022-11-14)

Features:

- added UserContext and his Provider component
- added api instance using axios with baseURL to jsonplaceholder url
- changed fetching posts from API to above mentioned aproach
- trying to add validate login form in typescript
- added custom button to submit login form

Fix:

- fixed handling login to user account only if exists in current UserContext
- fixed, clear login information in context's after logout

## 0.4.1 (2022-11-14)

Features:

- implemented handling logout action

Fix:

- fixed app behaviors depends on if user is logged or not
- LoginContext data has been moved to LoginContextProvider component, application has all context to login using LCProvider rather than declaring function to change context in App layout
- fixed problem with useEffect callback dependency

## 0.4 (2022-11-14)

Features:

- added function to randomize posts border color in Post component
- defined new mixin in global variables for TitleHeader
- added new element in base layout (Title view) between Header and Main sections
- created new global color variables which definition of textGradient and logoGradient colors

Fix:

- refactoring Post component, sizing added new effects on hover
- added flex to main view to fill complete layout
- modified Input component font-size and font-weight

## 0.3.2 (2022-11-13)

Fix:

- fixed center content in Main view,
- changed place where are defined postBackground color, variable moved to global variable file

Features:

- created styles to login page
- added Input field generic component, it can be used in each of this types (text / pass / checkbox)
- created LoginContextProvider to handle default LoginContext implementation to whole app rather write context implementation in each component when it will be used
- added form to loginPage, and login user information stored in session

## 0.3.1 (2022-11-12)

Fix:

- changed layout max-height, implemented RWD
- changed height size of Header

## 0.3 (2022-11-12)

Features:

- added content to Header like Logo and Menu with styles
- added routes to menu component
- added login page, myProfile condition displayed after login and new search view
- added axios package, refactored fetch data from api by axios instead fetchApi
- added redirect to error page when route is invalid
- added loginContext using React Context to save data about logged user
- changed storing information about logged user from internal setState to global useContext implementation

Fix:

- fixed positioning elements in menu

## 0.2.1 (2022-11-11)

Features:

- added css global variables with defined colors, mixins hideScroll and default styles to all base views
- changed Header, Main and Footer base styles to one mixin from layout scss
- implemented react router to switch between pages

Fix:

- fixed minimal height in layout, because while scrolling background is static
- changed project files structure, grouped components with styles to separated folders

## 0.2 (2022-11-10)

Features:

- added basic structure layout, views for footer, header and main sections
- created logo and application menu in header
- added scss styles for whole layout
- created main section for front page with users list and their posts on feed
- created input fields for search user by name and search posts by title and description
- implemented invoke request to api jsonplaceholder for fetch posts

## 0.1 (2022-11-08)

Features:

- initialized application using Create React App template typescript
- redefined tsconfig.json
- added neccessary dependencies
- added css reset template styles
