# A practical callback 

As HTML pages grow in size and complexity, creating efficient React code becomes more important than ever. Re-rendering large components is costly, and providing a significant amount of work for the browser through a single-page application (SPA) increases processing time and can potentially drive away users. React offers inbuilt API features to improve app performance by avoiding unnecessary re-renders, caching repetitive costly operations, lazy-loading components, etc.

This tutorial examines two different React Hooks, useMemo and useCallback. These Hooks help developers improve the rendering performance of components, preserve objects between React component renderings, and help improve application performance.

## React performance optimizations for functions

React already provides React.memo() to avoid recreating DOM elements when props are not changed. This method is a higher-order component (HOC) that memoizes the last result. But, it doesn’t memoize typical JavaScript functions. Therefore, despite being a first-class citizen in JavaScript, functions may potentially be recreated with every use.

The useMemo and useCallback methods help to avoid recreating or rerunning functions in certain situations. Although not always useful, useMemo or useCallback may create a noticeable difference when dealing with large amounts of data or many components that share behavior. For example, this would be especially useful when you’re creating a stock or digital currency trading platform.

## What is useCallback?

When React re-renders a component, function references inside the component get re-created. If you pass a callback function to a memoized (with React.memo) child component via props, it may get re-rendered even if the parent component doesn’t apparently change the child component’s props. Each parent component re-rendering phase creates new function references for callbacks, so inequal callback props can trigger an unwanted child component re-render silently even visible props don’t get changed.

The useCallback React Hook returns a memoized function reference based on a function and dependencies array. So, we can use it to create optimized callbacks that don’t cause unwanted re-renders. This Hook returns a cached (memoized) function reference if dependencies aren’t changed.


[Source](https://blog.logrocket.com/react-usememo-vs-usecallback/#react-performance-optimizations-functions)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
