# Getting Started with Appi React

Start the Appi Community Server

### `docker run -p 8099:8099 agardnerut/appi_community`

Clone this repo and then:

### `npm install` 

### `npm run start` 

This will get the example project up and running.

Additionally you can follow along with a step by step of how this project was created.

# Step by Step

Follow along here for the step by step walk through of each example that got us to the current repo.

Use [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to make a new boilerplate react app.

### `npx create-react-app appi-app`
### `cd appi-app`

Install the appi_react package.

### `npm install appi_react`
### `npm install appi_react_components`
### `npm install grid-variable-template`

... TODO

## Multithreading

Appi utilizes web features that required a higher level of security. This is done by enabling both these headers from your web server. When using Multithreaded mode, you must change your <Basic></Basic> components to <Appi></Appi>

### `Cross-Origin-Embedder-Policy: require-corp`
### `Cross-Origin-Opener-Policy: same-origin`

We can do this in our dev environment by creating `src/setupProxy.js` and placing this inside:

```js
module.exports = function(app) {
    app.use(function (req, res, next) {
        res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
        res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        next();
    });
};
```

Restart the dev sever for changes to take effect.

You now should be able to use loadAppi() instead of loadBasic(). Note: besides enabling multithreading, these functions are otherwise interchangeable.