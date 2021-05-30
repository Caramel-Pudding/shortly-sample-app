### Overview

You can see it running [HERE](https://shortly-sample-app.vercel.app/)!

# Getting Started

Here are some useful CLI commands you can use:

```bash
yarn dev
# Run the dev server on http://localhost:3000
yarn dev:vitals
# Run the dev server on http://localhost:3000 with additional runtime info on Web Vitals in console
yarn build
# Create a production build
yarn start
# Run the dev server with production build on http://localhost:3000
yarn analyze
# Analyze size and module composition of a production build
yarn test
# Run tests
yarn test:watch
# Run tests in watch mode
yarntest:coverage
# Run tests with coverage info
yarn eslint
# Run eslint without erros fixing
yarn eslint:fix
# Run eslint with errors fixing
yarn stylelint
# Run stylelint without erros fixing
yarn stylelint:fix
# Run stylelint with errors fixing
yarn simple-git-hooks:update
# Update git hooks to the new config
```

After running dev or build & start, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Objective

Using TypeScript and NextJS, your challenge is to build out a URL shortening web app, integrate with the [shrtcode API](https://app.shrtco.de/docs), and get it looking as close to the design as possible.

### Brief

URL shortening is a technique on the Web in which a Uniform Resource Locator (URL) may be made substantially shorter and still direct to the required page. This is achieved by using a redirect that links to the web page that has a long URL. For example, the URL "https://example.com/assets/category_B/subcategory_C/Foo/" can be shortened to "https://example.com/Foo", and the URL "http://example.com/about/index.html" can be shortened to "https://goo.gl/aO3Ssc ".

Your challenge is to build out this landing page, integrate with the [shrtcode API](https://app.shrtco.de/docs) and get it looking as close to the design as possible.

Your users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   Shorten any valid URL
-   See a list of their shortened links, even after refreshing the browser
-   Copy the shortened link to their clipboard in a single click
-   Receive an error message when the `form` is submitted if:
    -   The `input` field is empty

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design to work to along with active states.

You will find all the required assets in the `/images` folder. The assets are already optimized. The designs are in JPG static format. This will mean that you'll need to use your best judgment for styles such as `font-size`, `padding`, and `margin`.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### Evaluation Criteria

-   **TypeScript** best practices
-   Show us your work through your commit history
-   We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program
-   Completeness: did you complete the features?
-   Correctness: does the functionality act in sensible, thought-out ways?
-   Maintainability: is it written in a clean, maintainable way?
-   Testing: is the system adequately tested?

### Stack

First of all, I should say that I have different experiences with techs mentioned here - more with ones, less with others. So there might be some novice approaches, obvious to those more seasoned with these tools.

Nevertheless, I enjoyed the freedom of choice and tried to select the most appropriate and most interesting tools for me at the moment. 

When I write it, I feel like these instruments combined could create an excellent toolset to create simple, scalable, performant, and maintainable modern frontends.

## [Typescript](https://github.com/microsoft/TypeScript)

Switching from JS to TS some time ago was a real step forward for me. Full & strict type coverage solves so many troubles even before you run your code. No more undefined is not a function. Not even once. It also eases your reading of code by providing de-facto documentation and allows you to conduct refactoring without any doubt or fear.
## [Next.js](https://github.com/vercel/next.js/) (& [React](https://github.com/facebook/react), of course)

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

Currently Next is my framework of choice for fast & scalable frontends. It takes all the best things React has and improves them by giving you SSR, SSG, Client routing, API routes and so much more out of the box.

## [PostCSS](https://github.com/postcss/postcss) & [CSS Modules](https://github.com/css-modules/css-modules)

Post CSS & CSS Modules seem to be the de-facto standard for modern frontends at the moment. Post CSS plugin system which allows you to process your CSS the way you want. You get such things as CSS Modules isolation, auto prefixing for different browsers, linting and more.
## [ESLint](https://github.com/eslint/eslint) & [Prettier](https://github.com/prettier/prettier) & [stylelint](https://github.com/stylelint/stylelint)

These tools (then again, packed with different plugins of your choice) provide you with an automated way to maintain code quality. To be honest, configuring them is the first thing I do on any project. It allows your code to stay consistent, clean, and devoid of the most usual code smells throughout the whole codebase.

## [Jest](https://github.com/facebook/jest) & [React Testing Library](https://github.com/testing-library/react-testing-library)

Then again, probably the de-facto standard for frontend testing. These allow you to cover any part of your application with a whole bunch of different tests, keeping in mind various test- and use-cases. All of it with a lean and obvious API.
