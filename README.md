# duo-sass

Compile Sass to CSS with Duo

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

**Licensed under MIT**
