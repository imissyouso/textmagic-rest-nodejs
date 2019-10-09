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
    root.TextmagicClient.RequestNewSubaccountTokenInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestNewSubaccountTokenInputObject model module.
   * @module model/RequestNewSubaccountTokenInputObject
   * @version 2.0.589
   */

  /**
   * Constructs a new <code>RequestNewSubaccountTokenInputObject</code>.
   * @alias module:model/RequestNewSubaccountTokenInputObject
   * @class
   * @param userId {Number} Subaccount ID
   * @param password {String} Your account password
   */
  var exports = function(userId, password) {
    var _this = this;

    _this['userId'] = userId;
    _this['password'] = password;

  };

  /**
   * Constructs a <code>RequestNewSubaccountTokenInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestNewSubaccountTokenInputObject} obj Optional instance to populate.
   * @return {module:model/RequestNewSubaccountTokenInputObject} The populated <code>RequestNewSubaccountTokenInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Subaccount ID
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Your account password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Application name
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;



  return exports;
}));


