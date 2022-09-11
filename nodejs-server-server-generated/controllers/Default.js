'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.hello_worldGET = function hello_worldGET (req, res, next) {
  Default.hello_worldGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
