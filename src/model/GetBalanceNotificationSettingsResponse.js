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
    root.TextmagicClient.GetBalanceNotificationSettingsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetBalanceNotificationSettingsResponse model module.
   * @module model/GetBalanceNotificationSettingsResponse
   * @version 2.0.430
   */

  /**
   * Constructs a new <code>GetBalanceNotificationSettingsResponse</code>.
   * @alias module:model/GetBalanceNotificationSettingsResponse
   * @class
   * @param lowBalanceNotification {Boolean} Should user receive low balance notification
   * @param alertBalance {String} If balance is below this value, user receive low balance notification
   * @param alertPhone {String} Low balance notification phone number
   * @param alertEmail1 {String} Low balance notification email 1
   * @param alertEmail2 {String} Low balance notification email 2
   * @param alertEmail3 {String} Low balance notification email 3
   */
  var exports = function(lowBalanceNotification, alertBalance, alertPhone, alertEmail1, alertEmail2, alertEmail3) {
    var _this = this;

    _this['lowBalanceNotification'] = lowBalanceNotification;
    _this['alertBalance'] = alertBalance;
    _this['alertPhone'] = alertPhone;
    _this['alertEmail1'] = alertEmail1;
    _this['alertEmail2'] = alertEmail2;
    _this['alertEmail3'] = alertEmail3;
  };

  /**
   * Constructs a <code>GetBalanceNotificationSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBalanceNotificationSettingsResponse} obj Optional instance to populate.
   * @return {module:model/GetBalanceNotificationSettingsResponse} The populated <code>GetBalanceNotificationSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lowBalanceNotification')) {
        obj['lowBalanceNotification'] = ApiClient.convertToType(data['lowBalanceNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('alertBalance')) {
        obj['alertBalance'] = ApiClient.convertToType(data['alertBalance'], 'String');
      }
      if (data.hasOwnProperty('alertPhone')) {
        obj['alertPhone'] = ApiClient.convertToType(data['alertPhone'], 'String');
      }
      if (data.hasOwnProperty('alertEmail1')) {
        obj['alertEmail1'] = ApiClient.convertToType(data['alertEmail1'], 'String');
      }
      if (data.hasOwnProperty('alertEmail2')) {
        obj['alertEmail2'] = ApiClient.convertToType(data['alertEmail2'], 'String');
      }
      if (data.hasOwnProperty('alertEmail3')) {
        obj['alertEmail3'] = ApiClient.convertToType(data['alertEmail3'], 'String');
      }
    }
    return obj;
  }

  /**
   * Should user receive low balance notification
   * @member {Boolean} lowBalanceNotification
   */
  exports.prototype['lowBalanceNotification'] = undefined;
  /**
   * If balance is below this value, user receive low balance notification
   * @member {String} alertBalance
   */
  exports.prototype['alertBalance'] = undefined;
  /**
   * Low balance notification phone number
   * @member {String} alertPhone
   */
  exports.prototype['alertPhone'] = undefined;
  /**
   * Low balance notification email 1
   * @member {String} alertEmail1
   */
  exports.prototype['alertEmail1'] = undefined;
  /**
   * Low balance notification email 2
   * @member {String} alertEmail2
   */
  exports.prototype['alertEmail2'] = undefined;
  /**
   * Low balance notification email 3
   * @member {String} alertEmail3
   */
  exports.prototype['alertEmail3'] = undefined;



  return exports;
}));


