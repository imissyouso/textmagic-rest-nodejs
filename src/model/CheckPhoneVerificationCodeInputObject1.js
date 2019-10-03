/**
 * TextMagic API Documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2
 * Contact: support@textmagi.biz
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
    root.TextmagicClient.CheckPhoneVerificationCodeInputObject1 = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CheckPhoneVerificationCodeInputObject1 model module.
   * @module model/CheckPhoneVerificationCodeInputObject1
   * @version 2.0.454
   */

  /**
   * Constructs a new <code>CheckPhoneVerificationCodeInputObject1</code>.
   * @alias module:model/CheckPhoneVerificationCodeInputObject1
   * @class
   * @param code {Number} Verification code that was received by the user and entered into the form field.
   * @param verifyId {String} VerifyId from Step 1 to match both requests together.
   */
  var exports = function(code, verifyId) {
    var _this = this;

    _this['code'] = code;
    _this['verifyId'] = verifyId;
  };

  /**
   * Constructs a <code>CheckPhoneVerificationCodeInputObject1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckPhoneVerificationCodeInputObject1} obj Optional instance to populate.
   * @return {module:model/CheckPhoneVerificationCodeInputObject1} The populated <code>CheckPhoneVerificationCodeInputObject1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('verifyId')) {
        obj['verifyId'] = ApiClient.convertToType(data['verifyId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Verification code that was received by the user and entered into the form field.
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * VerifyId from Step 1 to match both requests together.
   * @member {String} verifyId
   */
  exports.prototype['verifyId'] = undefined;



  return exports;
}));


