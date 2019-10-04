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
    root.TextmagicClient.DoAuthInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DoAuthInputObject model module.
   * @module model/DoAuthInputObject
   * @version 2.0.487
   */

  /**
   * Constructs a new <code>DoAuthInputObject</code>.
   * @alias module:model/DoAuthInputObject
   * @class
   * @param username {String} Account username or email
   * @param password {String} Account password
   */
  var exports = function(username, password) {
    var _this = this;

    _this['username'] = username;
    _this['password'] = password;






  };

  /**
   * Constructs a <code>DoAuthInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DoAuthInputObject} obj Optional instance to populate.
   * @return {module:model/DoAuthInputObject} The populated <code>DoAuthInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
      if (data.hasOwnProperty('appVersion')) {
        obj['appVersion'] = ApiClient.convertToType(data['appVersion'], 'String');
      }
      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('pushServiceType')) {
        obj['pushServiceType'] = ApiClient.convertToType(data['pushServiceType'], 'String');
      }
      if (data.hasOwnProperty('tfaCode')) {
        obj['tfaCode'] = ApiClient.convertToType(data['tfaCode'], 'String');
      }
      if (data.hasOwnProperty('tfaId')) {
        obj['tfaId'] = ApiClient.convertToType(data['tfaId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Account username or email
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * Account password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Application name
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;
  /**
   * Application version
   * @member {String} appVersion
   */
  exports.prototype['appVersion'] = undefined;
  /**
   * Device ID for push notification service
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * required when deviceId provided. Push notification service type: a for Apple Push Notifications, g for Google Cloud Messaging
   * @member {String} pushServiceType
   */
  exports.prototype['pushServiceType'] = undefined;
  /**
   * required when 2FA enabled on account. 2FA challenge response (SMS code or security question answer)
   * @member {String} tfaCode
   */
  exports.prototype['tfaCode'] = undefined;
  /**
   * required when 2FA enabled on account. 2FA challenge response (SMS code or security question answer)
   * @member {String} tfaId
   */
  exports.prototype['tfaId'] = undefined;



  return exports;
}));


