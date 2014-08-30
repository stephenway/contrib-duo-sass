![duo-sass](https://i.cloudup.com/nNMvpUip5c-2000x2000.png)

[![build status][travis-image]][travis-url]

[travis-image]: https://img.shields.io/travis/stephenway/duo-sass.svg?style=flat
[travis-url]: https://travis-ci.org/stephenway/duo-sass

> Compile [Sass](http://sass-lang.com/) to [CSS](http://www.w3.org/Style/CSS/Overview.en.html) with [Duo.js](http://duojs.org/)

## Installation

`npm install -g git+https://git@github.com/stephenway/duo-sass.git` 

*Note: This package is not yet published, please check back later or watch the project.*

## Usage

``` shell
duo --use duo-sass input.scss > output.css
```

## API Usage

``` js
var co = require('co');
var Duo = require('duo');
var sass = require('duo-sass');

co(function *(){
  var duo = Duo(__dirname);
  duo.entry('index.scss');
  duo.use(sass());
  var css = yield duo.run();
  // ...
})();
```

## Options

Please refer to [node-sass options](https://github.com/sass/node-sass#usage).

## Contributors

This project wouldn't be possible without the help of [@kevva](https://github.com/kevva).<br>
Also check out our [contributors](https://github.com/stephenway/duo-sass/graphs/contributors) page.

## License

MIT
