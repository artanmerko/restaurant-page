# JavaScript PROJECT: Restaurant-page
## A simple restaurant page using HTML, CSS,JavaScript and Webpack.
## Assignment
1. Run `npm init` in your project directory to generate a package.json file.
2. Run `npm install webpack webpack-cli --save-dev` to install webpack to the node_modules directory of your project.
3. Create a `src` and `dist` directory with the following contents: <br>
  a. an `index.js` file in src<br>
  b. an `index.html` file in dist. Go ahead and link the main.js file in a script tag. `main.js` is the file that will be generated by webpack.<br>
  c. create a webpack.config.js file that looks just like our file from the [tutorial](https://webpack.js.org/guides/getting-started/#using-a-configuration)<br>
4. Set up an HTML skeleton inside of `dist/index.html` with single `<div id="content">`.
5. Inside of `src/index.js` write a simple console.log or alert statement and then run `npx webpack`. Load up dist/index.html in a browser to make sure everything is working correctly.
6. Run `npx webpack --watch` ,so you will not have to rerun webpack every time you make a change.
7. Create a bare-bones homepage for a restaurant. Include an image, headline, and some copy about how wonderful the restaurant is. It’s okay to hard-code these into the HTML for now just to see how they look on the page.
8. Now remove those elements from the HTML (so leave only the <html>, <body>, and <div id="content"> tags) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.

  ### Built With
- HTML <br>
- CSS (Flexbox) <br>
- JavaScript<br>
- Webpack <br>

  ## [Live](https://artanmerko.github.io/restaurant-page/)
