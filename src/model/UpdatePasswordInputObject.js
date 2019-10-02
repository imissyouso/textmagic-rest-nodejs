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
    root.TextmagicClient.UpdatePasswordInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdatePasswordInputObject model module.
   * @module model/UpdatePasswordInputObject
   * @version 2.0.444
   */

  /**
   * Constructs a new <code>UpdatePasswordInputObject</code>.
   * @alias module:model/UpdatePasswordInputObject
   * @class
   * @param oldPassword {String} Current password
   * @param newPassword {String} New password
   */
  var exports = function(oldPassword, newPassword) {
    var _this = this;

    _this['oldPassword'] = oldPassword;
    _this['newPassword'] = newPassword;
  };

  /**
   * Constructs a <code>UpdatePasswordInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatePasswordInputObject} obj Optional instance to populate.
   * @return {module:model/UpdatePasswordInputObject} The populated <code>UpdatePasswordInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * Current password
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;
  /**
   * New password
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;



  return exports;
}));


