# TextAnalysis-FrontEnd
:love_letter: Front end for text analysis
## Get up and running

Installation guide for [React.js](https://facebook.github.io/react/) for TextAnalysis-FrontEnd
First we need a package manager, i prefer Node package manager([NPM](https://www.npmjs.com/)) over the newer [yarn](https://yarnpkg.com/) as it has wider documentation and support.

#### Install npm 
Open Terminal and type
```sh
brew install node
```

Check that it is installed correctly by typying
```sh
npm -v
```

Now Create our working Directory. I will create the directory structure here ;)
```sh
mkdir TextAnalyze
cd TextAnalyze

mkdir templates
mkdir build

cd templates
touch index.html

cd ..

cd build
touch Mine.js
touch main.jsx
touch Search.js
```
The templates folder is where we will store our html files. To be served up with [Flask](flask.pocoo.org/)
main.jsx is where we will write our code

Now run
```sh
npm init
```
This will create a node package.json file to keep track of all our dependecies

We will use [Webpack](https://webpack.github.io/) to bundle up all our JS and JSX files into a single beautiful JS script

```sh
npm install -S webpack webpack-dev-server
```

Next we need a config file for webpack
```sh
touch webpack.config.js
```

Open the config file with your fav editor and copy the lines below
```sh

var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'templates');

var config = {
  entry: BUILD_DIR + '/main.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'analyze.min.js'
  },

  module : {
  loaders : [
   {
    test : /\.js?/,
    exclude: /(node_modules)/,
    include : BUILD_DIR,
    loader : 'babel-loader'
  }]
  }
};

module.exports = config;


```
Notice we use [babel-loader](https://babeljs.io/), install it and other core components by typing
```sh
npm install -S babel babel-loader babel-core babel-preset-es2015 babel-preset-react
```

Create the file .babelrc and add the lines
```sh
touch .babelrc

{
  "presets" : ["es2015", "react"]
}
```

Now we install [React.js](https://facebook.github.io/react/)
```sh
npm install -S react react-dom material-ui
```

I'll use [Material-Ui](www.material-ui.com/) is for the Styling


### How it works
Ensure the [Flask-Backend]() is running.

Use 
```sh
npm run build
```

Open the file in your browser
```sh
templates/index.html 
```

Type in any Text you want analyzed and the Flask API will handle the rest