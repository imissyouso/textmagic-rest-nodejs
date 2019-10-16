/**
 * TextMagic API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetAvailableDedicatedNumbersResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAvailableDedicatedNumbersResponse model module.
   * @module model/GetAvailableDedicatedNumbersResponse
   * @version 2.0.639
   */

  /**
   * Constructs a new <code>GetAvailableDedicatedNumbersResponse</code>.
   * @alias module:model/GetAvailableDedicatedNumbersResponse
   * @class
   * @param numbers {Array.<String>} Array of phone numbers.
   * @param price {Number} Dedicated number monthly fee for this country. Returned in current [account](http://docs.textmagictesting.com/#tag/User) currency.
   */
  var exports = function(numbers, price) {
    var _this = this;

    _this['numbers'] = numbers;
    _this['price'] = price;
  };

  /**
   * Constructs a <code>GetAvailableDedicatedNumbersResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAvailableDedicatedNumbersResponse} obj Optional instance to populate.
   * @return {module:model/GetAvailableDedicatedNumbersResponse} The populated <code>GetAvailableDedicatedNumbersResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('numbers')) {
        obj['numbers'] = ApiClient.convertToType(data['numbers'], ['String']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Array of phone numbers.
   * @member {Array.<String>} numbers
   */
  exports.prototype['numbers'] = undefined;
  /**
   * Dedicated number monthly fee for this country. Returned in current [account](http://docs.textmagictesting.com/#tag/User) currency.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


