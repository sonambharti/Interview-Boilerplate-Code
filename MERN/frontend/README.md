# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Command to create react app
```npx create-react-app@5 <app-name>```

## Steps to setup tailwindcss in react
1. Install tailwindcss, postcss, @tailwindcss/postcss, postcss-loader, prettier, prettier-plugin-tailwindcss, autoprefixer, css-loader
2. Run command `npx tailwindcss init` to create `tailwind.config.js` file.
3. Add `@tailwind base; @tailwind components; @tailwind utilities;` to `index.js` file.
4. Add following changes to `tailwind.config.js` file:
    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ``` 
5. Add following changes to `postcss.config.js` file:
    ```
    module.exports = {
        plugins: [
        require('@tailwindcss/postcss')({
            config: './tailwind.config.js', // optional, if not in root or custom path
        }),
        require('autoprefixer'),
        ],
    };
    ```

##  Steps to enable read env variable in React
1. Install `dotenv` package.
2. Create a `.env` file in the root of the project.
3. Add your environment variables in the `.env` file.
4. Install `dotenv-webpack` package.
5. Add `dotenv-webpack` to `webpack.config.js` file.
6. Add `process.env` to `index.js` file.
7. Use `process.env` to access environment variables in your React components.
8. Run `npm start` to start the development server.


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

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
