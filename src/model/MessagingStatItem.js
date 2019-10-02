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
    root.TextmagicClient.MessagingStatItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessagingStatItem model module.
   * @module model/MessagingStatItem
   * @version 2.0.441
   */

  /**
   * Constructs a new <code>MessagingStatItem</code>.
   * @alias module:model/MessagingStatItem
   * @class
   * @param replyRate {Number} 
   * @param _date {Date} 
   * @param deliveryRate {Number} 
   * @param costs {Number} 
   * @param messagesReceived {Number} 
   * @param messagesSentDelivered {Number} 
   * @param messagesSentAccepted {Number} 
   * @param messagesSentBuffered {Number} 
   * @param messagesSentFailed {Number} 
   * @param messagesSentRejected {Number} 
   * @param messagesSentParts {Number} 
   */
  var exports = function(replyRate, _date, deliveryRate, costs, messagesReceived, messagesSentDelivered, messagesSentAccepted, messagesSentBuffered, messagesSentFailed, messagesSentRejected, messagesSentParts) {
    var _this = this;

    _this['replyRate'] = replyRate;
    _this['date'] = _date;
    _this['deliveryRate'] = deliveryRate;
    _this['costs'] = costs;
    _this['messagesReceived'] = messagesReceived;
    _this['messagesSentDelivered'] = messagesSentDelivered;
    _this['messagesSentAccepted'] = messagesSentAccepted;
    _this['messagesSentBuffered'] = messagesSentBuffered;
    _this['messagesSentFailed'] = messagesSentFailed;
    _this['messagesSentRejected'] = messagesSentRejected;
    _this['messagesSentParts'] = messagesSentParts;
  };

  /**
   * Constructs a <code>MessagingStatItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagingStatItem} obj Optional instance to populate.
   * @return {module:model/MessagingStatItem} The populated <code>MessagingStatItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('replyRate')) {
        obj['replyRate'] = ApiClient.convertToType(data['replyRate'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('deliveryRate')) {
        obj['deliveryRate'] = ApiClient.convertToType(data['deliveryRate'], 'Number');
      }
      if (data.hasOwnProperty('costs')) {
        obj['costs'] = ApiClient.convertToType(data['costs'], 'Number');
      }
      if (data.hasOwnProperty('messagesReceived')) {
        obj['messagesReceived'] = ApiClient.convertToType(data['messagesReceived'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentDelivered')) {
        obj['messagesSentDelivered'] = ApiClient.convertToType(data['messagesSentDelivered'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentAccepted')) {
        obj['messagesSentAccepted'] = ApiClient.convertToType(data['messagesSentAccepted'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentBuffered')) {
        obj['messagesSentBuffered'] = ApiClient.convertToType(data['messagesSentBuffered'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentFailed')) {
        obj['messagesSentFailed'] = ApiClient.convertToType(data['messagesSentFailed'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentRejected')) {
        obj['messagesSentRejected'] = ApiClient.convertToType(data['messagesSentRejected'], 'Number');
      }
      if (data.hasOwnProperty('messagesSentParts')) {
        obj['messagesSentParts'] = ApiClient.convertToType(data['messagesSentParts'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} replyRate
   */
  exports.prototype['replyRate'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} deliveryRate
   */
  exports.prototype['deliveryRate'] = undefined;
  /**
   * @member {Number} costs
   */
  exports.prototype['costs'] = undefined;
  /**
   * @member {Number} messagesReceived
   */
  exports.prototype['messagesReceived'] = undefined;
  /**
   * @member {Number} messagesSentDelivered
   */
  exports.prototype['messagesSentDelivered'] = undefined;
  /**
   * @member {Number} messagesSentAccepted
   */
  exports.prototype['messagesSentAccepted'] = undefined;
  /**
   * @member {Number} messagesSentBuffered
   */
  exports.prototype['messagesSentBuffered'] = undefined;
  /**
   * @member {Number} messagesSentFailed
   */
  exports.prototype['messagesSentFailed'] = undefined;
  /**
   * @member {Number} messagesSentRejected
   */
  exports.prototype['messagesSentRejected'] = undefined;
  /**
   * @member {Number} messagesSentParts
   */
  exports.prototype['messagesSentParts'] = undefined;



  return exports;
}));


