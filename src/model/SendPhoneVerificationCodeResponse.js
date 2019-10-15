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
    root.TextmagicClient.SendPhoneVerificationCodeResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendPhoneVerificationCodeResponse model module.
   * @module model/SendPhoneVerificationCodeResponse
   * @version 2.0.626
   */

  /**
   * Constructs a new <code>SendPhoneVerificationCodeResponse</code>.
   * @alias module:model/SendPhoneVerificationCodeResponse
   * @class
   * @param verifyId {String} The ID of a verification request. This is required to finish the verification request in the next step.
   * @param price {Number} Amount of credit which will be deducted from your account balance when this verification is successfully completed.
   */
  var exports = function(verifyId, price) {
    var _this = this;

    _this['verifyId'] = verifyId;
    _this['price'] = price;
  };

  /**
   * Constructs a <code>SendPhoneVerificationCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendPhoneVerificationCodeResponse} obj Optional instance to populate.
   * @return {module:model/SendPhoneVerificationCodeResponse} The populated <code>SendPhoneVerificationCodeResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('verifyId')) {
        obj['verifyId'] = ApiClient.convertToType(data['verifyId'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ID of a verification request. This is required to finish the verification request in the next step.
   * @member {String} verifyId
   */
  exports.prototype['verifyId'] = undefined;
  /**
   * Amount of credit which will be deducted from your account balance when this verification is successfully completed.
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


