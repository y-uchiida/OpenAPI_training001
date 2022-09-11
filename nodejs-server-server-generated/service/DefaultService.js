'use strict';


/**
 * Sample API initial test
 * return string \"Hello world from Sample API!!\" 
 *
 * returns String
 **/
exports.hello_worldGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Hello world from Sample API!!";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

