# Shortlink Generator

The following project provides a base for building a shortlink generating
application like https://bit.ly.

In this repository you will find:

- A backend server running [Express](https://expressjs.com/)
  - Start it with `yarn backend`
- A frontend React application (bootstrapped with Create React App)
  - Start it with `yarn start`

You will be responsible for building the backend API and frontend UI for creating,
and viewing shortlinks.

## Project Requirements

- Your shortlinks should persist between server restarts
- There should be an endpoint that redirects `http://{BACKEND_HOST}/{SHORTLINK}` to the associated URL
- The backend should serve a RESTful API.
  - An Express JS environment is bootstrapped for you, but you can use whatever you want if you prefer.
- The frontend should 
  - Be an HTML/CSS/JS app for modern browsers
  - Have views that a user can use to:
    - Create shortlinks
    - Displays all shortlinks created by user's browser session
  - A React 16.8 environment is bootstrapped to get you started, but feel free to build the UI with a different tool if you prefer. (Including upgrading React)
  - There should be minimal styles applied (you don't need a pixel perfect UI, just enough to see design considerations).
- You don't have to have the system ready for production deployment, but should have a plan for how you would do so.

## Project Un-requirements

- Do not worry about users + authentication
- Do not worry about click and view analytics
- Do not worry about expiring links or providing delete functionality
- Do not worry about creating a reproducible local environment (for example with Docker)

## Questions

- If you think a requirement in underspecified or ambiguous feel free to _make a reasonable assumption_, record your assumption in the readme, and build the app with this assumption in mind. (You should be able to make a defence for why your assumption is reasonable.)
- If you really need to ask a question (e.g., you think theres a mistake in this project) you can respond to the email from which you received this project link.

## Time Considerations

Everything does not have to be perfect. Time is limited and prioritization will be key.

Please do not spend a whole weekend on this project. We
hope you'll be able to have an MVP in a few hours.

## Working on and submitting your finished project

In order to submit your project:

- (You should've been given write access to this repo)
- Open a Pull Request to this repo, with appropriate comments, etc. to be a useful pull request
- Shoot us an email that you're done
- Our team will review the project and in a subsequent interview discuss the application with you.

## Review

When reviewing your pull request we will have a look at the following according to priority (top priority first):

- The back-end implementation
   1. Does the API work?
   1. Clean code, is your code easy to understand and does it handle edge-cases?
   1. Is your API following REST conventions?
   1. How did you implement the shortlink generation / data model?
   1. Are there any obvious bugs?
   1. Do you have any tests?
   
- The front-end implementation
   1. Does the UI work, and is it functionally complete?
   1. Clean code, is your code easy to understand and does it handle edge-cases?
   1. Is the UI implemented "conventionally" (e.g., In the case of React are you following the React conventions?)
   1. Are there any obvious bugs?
   1. UI Design


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the React SPA in development mode.<br>
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the React App for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run backend`

Runs the shortlinks backend server.<br/>
Open http://localhost:8181 to view it in the browser.
