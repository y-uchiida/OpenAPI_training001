'use strict';

var utils = require('../utils/writer.js');
var Shops = require('../service/ShopsService');

module.exports.shopsShopIdReviewsGET = function shopsShopIdReviewsGET (req, res, next, shopId) {
  Shops.shopsShopIdReviewsGET(shopId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shopsShopIdReviewsPOST = function shopsShopIdReviewsPOST (req, res, next, body, shopId, xApiKey, token) {
  Shops.shopsShopIdReviewsPOST(body, shopId, xApiKey, token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
