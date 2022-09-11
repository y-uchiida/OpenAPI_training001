'use strict';


/**
 * Get specified shop reviews
 * (description): Get specified shop reviews
 *
 * shopId String Shop identifier
 * returns List
 **/
exports.shopsShopIdReviewsGET = function(shopId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 3,
  "comment" : "おいしかった"
}, {
  "score" : 3,
  "comment" : "おいしかった"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create review
 * Create review
 *
 * body Review Contents of review
 * shopId String Shop identifier
 * xApiKey String Request user's identifier (optional)
 * token String One time token (optional)
 * no response value expected for this operation
 **/
exports.shopsShopIdReviewsPOST = function(body,shopId,xApiKey,token) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

