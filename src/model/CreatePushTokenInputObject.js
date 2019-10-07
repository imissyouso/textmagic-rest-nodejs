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
    root.TextmagicClient.CreatePushTokenInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreatePushTokenInputObject model module.
   * @module model/CreatePushTokenInputObject
   * @version 2.0.496
   */

  /**
   * Constructs a new <code>CreatePushTokenInputObject</code>.
   * @alias module:model/CreatePushTokenInputObject
   * @class
   * @param deviceId {String} Device ID for push notification service
   * @param pushServiceType {String} Push notification service type: a for Apple Push Notifications, g for Google Cloud Messaging
   */
  var exports = function(deviceId, pushServiceType) {
    var _this = this;

    _this['deviceId'] = deviceId;
    _this['pushServiceType'] = pushServiceType;
  };

  /**
   * Constructs a <code>CreatePushTokenInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatePushTokenInputObject} obj Optional instance to populate.
   * @return {module:model/CreatePushTokenInputObject} The populated <code>CreatePushTokenInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
      }
      if (data.hasOwnProperty('pushServiceType')) {
        obj['pushServiceType'] = ApiClient.convertToType(data['pushServiceType'], 'String');
      }
    }
    return obj;
  }

  /**
   * Device ID for push notification service
   * @member {String} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * Push notification service type: a for Apple Push Notifications, g for Google Cloud Messaging
   * @member {String} pushServiceType
   */
  exports.prototype['pushServiceType'] = undefined;



  return exports;
}));


