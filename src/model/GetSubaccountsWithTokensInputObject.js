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
    root.TextmagicClient.GetSubaccountsWithTokensInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetSubaccountsWithTokensInputObject model module.
   * @module model/GetSubaccountsWithTokensInputObject
   * @version 2.0.420
   */

  /**
   * Constructs a new <code>GetSubaccountsWithTokensInputObject</code>.
   * @alias module:model/GetSubaccountsWithTokensInputObject
   * @class
   * @param appName {String} Application name
   * @param password {String} Your account password
   */
  var exports = function(appName, password) {
    var _this = this;

    _this['appName'] = appName;
    _this['password'] = password;
  };

  /**
   * Constructs a <code>GetSubaccountsWithTokensInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSubaccountsWithTokensInputObject} obj Optional instance to populate.
   * @return {module:model/GetSubaccountsWithTokensInputObject} The populated <code>GetSubaccountsWithTokensInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }

  /**
   * Application name
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;
  /**
   * Your account password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;



  return exports;
}));


