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
    root.TextmagicClient.GetSenderSettingsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSenderSettingsResponse model module.
   * @module model/GetSenderSettingsResponse
   * @version 2.0.401
   */

  /**
   * Constructs a new <code>GetSenderSettingsResponse</code>.
   * @alias module:model/GetSenderSettingsResponse
   * @class
   * @param user {Object} 
   * @param special {Object} 
   * @param other {Object} 
   */
  var exports = function(user, special, other) {
    var _this = this;

    _this['user'] = user;
    _this['special'] = special;
    _this['other'] = other;
  };

  /**
   * Constructs a <code>GetSenderSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSenderSettingsResponse} obj Optional instance to populate.
   * @return {module:model/GetSenderSettingsResponse} The populated <code>GetSenderSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], Object);
      }
      if (data.hasOwnProperty('special')) {
        obj['special'] = ApiClient.convertToType(data['special'], Object);
      }
      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Object} special
   */
  exports.prototype['special'] = undefined;
  /**
   * @member {Object} other
   */
  exports.prototype['other'] = undefined;



  return exports;
}));


