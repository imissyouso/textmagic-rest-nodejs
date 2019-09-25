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
    root.TextmagicClient.GetInboundMessagesNotificationSettingsResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetInboundMessagesNotificationSettingsResponse model module.
   * @module model/GetInboundMessagesNotificationSettingsResponse
   * @version 2.0.401
   */

  /**
   * Constructs a new <code>GetInboundMessagesNotificationSettingsResponse</code>.
   * @alias module:model/GetInboundMessagesNotificationSettingsResponse
   * @class
   * @param inboundMessageNotification {Boolean} Should user receive notification about new incoming messages
   * @param forwardedCallNotification {Boolean} Should user receive notification about new forwarded calls
   * @param includeSmsHistory {Boolean} Include SMS history into notification Email
   * @param sendInHtmlFormat {Boolean} Send Email notification in HTML format
   * @param alertEmail1 {String} New message notification email 2
   * @param alertEmail2 {String} New message notification email 2
   * @param alertEmail3 {String} New message notification email 3
   */
  var exports = function(inboundMessageNotification, forwardedCallNotification, includeSmsHistory, sendInHtmlFormat, alertEmail1, alertEmail2, alertEmail3) {
    var _this = this;

    _this['inboundMessageNotification'] = inboundMessageNotification;
    _this['forwardedCallNotification'] = forwardedCallNotification;
    _this['includeSmsHistory'] = includeSmsHistory;
    _this['sendInHtmlFormat'] = sendInHtmlFormat;
    _this['alertEmail1'] = alertEmail1;
    _this['alertEmail2'] = alertEmail2;
    _this['alertEmail3'] = alertEmail3;
  };

  /**
   * Constructs a <code>GetInboundMessagesNotificationSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetInboundMessagesNotificationSettingsResponse} obj Optional instance to populate.
   * @return {module:model/GetInboundMessagesNotificationSettingsResponse} The populated <code>GetInboundMessagesNotificationSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('inboundMessageNotification')) {
        obj['inboundMessageNotification'] = ApiClient.convertToType(data['inboundMessageNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('forwardedCallNotification')) {
        obj['forwardedCallNotification'] = ApiClient.convertToType(data['forwardedCallNotification'], 'Boolean');
      }
      if (data.hasOwnProperty('includeSmsHistory')) {
        obj['includeSmsHistory'] = ApiClient.convertToType(data['includeSmsHistory'], 'Boolean');
      }
      if (data.hasOwnProperty('sendInHtmlFormat')) {
        obj['sendInHtmlFormat'] = ApiClient.convertToType(data['sendInHtmlFormat'], 'Boolean');
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
   * Should user receive notification about new incoming messages
   * @member {Boolean} inboundMessageNotification
   */
  exports.prototype['inboundMessageNotification'] = undefined;
  /**
   * Should user receive notification about new forwarded calls
   * @member {Boolean} forwardedCallNotification
   */
  exports.prototype['forwardedCallNotification'] = undefined;
  /**
   * Include SMS history into notification Email
   * @member {Boolean} includeSmsHistory
   */
  exports.prototype['includeSmsHistory'] = undefined;
  /**
   * Send Email notification in HTML format
   * @member {Boolean} sendInHtmlFormat
   */
  exports.prototype['sendInHtmlFormat'] = undefined;
  /**
   * New message notification email 2
   * @member {String} alertEmail1
   */
  exports.prototype['alertEmail1'] = undefined;
  /**
   * New message notification email 2
   * @member {String} alertEmail2
   */
  exports.prototype['alertEmail2'] = undefined;
  /**
   * New message notification email 3
   * @member {String} alertEmail3
   */
  exports.prototype['alertEmail3'] = undefined;



  return exports;
}));


