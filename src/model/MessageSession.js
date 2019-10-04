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
    root.TextmagicClient.MessageSession = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageSession model module.
   * @module model/MessageSession
   * @version 2.0.473
   */

  /**
   * Constructs a new <code>MessageSession</code>.
   * @alias module:model/MessageSession
   * @class
   * @param id {Number} Session ID.
   * @param startTime {String} Session creation time.
   * @param text {String} Session text. If a template was used for the session text (see [Messages: Send](#tag/Outbound-Messages) for details), it may contain template tags. 
   * @param source {String} *   **O** for TextMagic Online *   **A** for API *   **M** for TextMagic Messenger *   **E** for [Email to SMS](/docs/api/send-email-to-sms/) *   **X** for [Distribution lists](/docs/api/distribution-lists/) 
   * @param referenceId {String} Custom reference ID (see [Messages: Send](/docs/api/send-sms/) for details). 
   * @param price {Number} Session cost (in account currency).
   * @param numbersCount {Number} Session recipient count.
   * @param destination {String} 
   */
  var exports = function(id, startTime, text, source, referenceId, price, numbersCount, destination) {
    var _this = this;

    _this['id'] = id;
    _this['startTime'] = startTime;
    _this['text'] = text;
    _this['source'] = source;
    _this['referenceId'] = referenceId;
    _this['price'] = price;
    _this['numbersCount'] = numbersCount;
    _this['destination'] = destination;
  };

  /**
   * Constructs a <code>MessageSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageSession} obj Optional instance to populate.
   * @return {module:model/MessageSession} The populated <code>MessageSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('numbersCount')) {
        obj['numbersCount'] = ApiClient.convertToType(data['numbersCount'], 'Number');
      }
      if (data.hasOwnProperty('destination')) {
        obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
      }
    }
    return obj;
  }

  /**
   * Session ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Session creation time.
   * @member {String} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * Session text. If a template was used for the session text (see [Messages: Send](#tag/Outbound-Messages) for details), it may contain template tags. 
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * *   **O** for TextMagic Online *   **A** for API *   **M** for TextMagic Messenger *   **E** for [Email to SMS](/docs/api/send-email-to-sms/) *   **X** for [Distribution lists](/docs/api/distribution-lists/) 
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Custom reference ID (see [Messages: Send](/docs/api/send-sms/) for details). 
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * Session cost (in account currency).
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Session recipient count.
   * @member {Number} numbersCount
   */
  exports.prototype['numbersCount'] = undefined;
  /**
   * @member {String} destination
   */
  exports.prototype['destination'] = undefined;



  return exports;
}));


