const main = require('./lib');

(function immediatelyRunOnScriptLoad(windowObject) {
  main(windowObject);
})(window);
