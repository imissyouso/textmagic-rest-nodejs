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
    root.TextmagicClient.CheckPhoneVerificationCodeInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CheckPhoneVerificationCodeInputObject model module.
   * @module model/CheckPhoneVerificationCodeInputObject
   * @version 2.0.500
   */

  /**
   * Constructs a new <code>CheckPhoneVerificationCodeInputObject</code>.
   * Confirmation code to check
   * @alias module:model/CheckPhoneVerificationCodeInputObject
   * @class
   * @param code {Number} 
   */
  var exports = function(code) {
    var _this = this;

    _this['code'] = code;
  };

  /**
   * Constructs a <code>CheckPhoneVerificationCodeInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckPhoneVerificationCodeInputObject} obj Optional instance to populate.
   * @return {module:model/CheckPhoneVerificationCodeInputObject} The populated <code>CheckPhoneVerificationCodeInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;



  return exports;
}));


