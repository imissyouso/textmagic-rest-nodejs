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
    root.TextmagicClient.Conversation = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Conversation model module.
   * @module model/Conversation
   * @version 2.0.431
   */

  /**
   * Constructs a new <code>Conversation</code>.
   * @alias module:model/Conversation
   * @class
   * @param id {Number} 
   * @param direction {String} 
   * @param sender {String} 
   * @param messageTime {Date} 
   * @param text {String} 
   * @param receiver {String} 
   * @param status {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param sessionId {Number} 
   */
  var exports = function(id, direction, sender, messageTime, text, receiver, status, firstName, lastName, sessionId) {
    var _this = this;

    _this['id'] = id;
    _this['direction'] = direction;
    _this['sender'] = sender;
    _this['messageTime'] = messageTime;
    _this['text'] = text;
    _this['receiver'] = receiver;
    _this['status'] = status;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['sessionId'] = sessionId;
  };

  /**
   * Constructs a <code>Conversation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Conversation} obj Optional instance to populate.
   * @return {module:model/Conversation} The populated <code>Conversation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('messageTime')) {
        obj['messageTime'] = ApiClient.convertToType(data['messageTime'], 'Date');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('sessionId')) {
        obj['sessionId'] = ApiClient.convertToType(data['sessionId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * @member {Date} messageTime
   */
  exports.prototype['messageTime'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {String} receiver
   */
  exports.prototype['receiver'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {Number} sessionId
   */
  exports.prototype['sessionId'] = undefined;



  return exports;
}));


