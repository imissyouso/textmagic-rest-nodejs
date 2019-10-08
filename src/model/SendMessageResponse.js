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
    root.TextmagicClient.SendMessageResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendMessageResponse model module.
   * @module model/SendMessageResponse
   * @version 2.0.544
   */

  /**
   * Constructs a new <code>SendMessageResponse</code>.
   * @alias module:model/SendMessageResponse
   * @class
   * @param id {Number} 
   * @param href {String} 
   * @param type {String} 
   * @param sessionId {Number} 
   * @param bulkId {Number} 
   * @param messageId {Number} 
   * @param scheduleId {Number} 
   * @param chatId {Number} 
   */
  var exports = function(id, href, type, sessionId, bulkId, messageId, scheduleId, chatId) {
    var _this = this;

    _this['id'] = id;
    _this['href'] = href;
    _this['type'] = type;
    _this['sessionId'] = sessionId;
    _this['bulkId'] = bulkId;
    _this['messageId'] = messageId;
    _this['scheduleId'] = scheduleId;
    _this['chatId'] = chatId;
  };

  /**
   * Constructs a <code>SendMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendMessageResponse} obj Optional instance to populate.
   * @return {module:model/SendMessageResponse} The populated <code>SendMessageResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
      }
      if (data.hasOwnProperty('bulkId')) {
        obj['bulkId'] = ApiClient.convertToType(data['bulkId'], 'Number');
      }
      if (data.hasOwnProperty('messageId')) {
        obj['messageId'] = ApiClient.convertToType(data['messageId'], 'Number');
      }
      if (data.hasOwnProperty('scheduleId')) {
        obj['scheduleId'] = ApiClient.convertToType(data['scheduleId'], 'Number');
      }
      if (data.hasOwnProperty('chatId')) {
        obj['chatId'] = ApiClient.convertToType(data['chatId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Number} sessionId
   */
  exports.prototype['sessionId'] = undefined;
  /**
   * @member {Number} bulkId
   */
  exports.prototype['bulkId'] = undefined;
  /**
   * @member {Number} messageId
   */
  exports.prototype['messageId'] = undefined;
  /**
   * @member {Number} scheduleId
   */
  exports.prototype['scheduleId'] = undefined;
  /**
   * @member {Number} chatId
   */
  exports.prototype['chatId'] = undefined;



  return exports;
}));


