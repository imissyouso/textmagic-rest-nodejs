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
    root.TextmagicClient.UserStatement = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserStatement model module.
   * @module model/UserStatement
   * @version 2.0.577
   */

  /**
   * Constructs a new <code>UserStatement</code>.
   * @alias module:model/UserStatement
   * @class
   * @param id {Number} 
   * @param userId {Number} User statement ID.
   * @param _date {Date} User statement date.
   * @param balance {Number} 
   * @param delta {Number} Balance change amount.
   * @param type {String} Type of statement (what you have been charged for): *   **sms** for sending SMS *   **number** for renewing a dedicated number *   **schedule** for scheduling text messages *   **topup** for adding credits to your account 
   * @param value {String} Value differs by **type**: *   for **sms**, it is the sent messages amount *   for **number**, it is a dedicated phone number *   for **schedule**, it is a scheduled messages amount *   for **top-up**, it is an invoice ID 
   * @param comment {String} Optional comment.
   */
  var exports = function(id, userId, _date, balance, delta, type, value, comment) {
    var _this = this;

    _this['id'] = id;
    _this['userId'] = userId;
    _this['date'] = _date;
    _this['balance'] = balance;
    _this['delta'] = delta;
    _this['type'] = type;
    _this['value'] = value;
    _this['comment'] = comment;
  };

  /**
   * Constructs a <code>UserStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserStatement} obj Optional instance to populate.
   * @return {module:model/UserStatement} The populated <code>UserStatement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
      }
      if (data.hasOwnProperty('delta')) {
        obj['delta'] = ApiClient.convertToType(data['delta'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * User statement ID.
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * User statement date.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * Balance change amount.
   * @member {Number} delta
   */
  exports.prototype['delta'] = undefined;
  /**
   * Type of statement (what you have been charged for): *   **sms** for sending SMS *   **number** for renewing a dedicated number *   **schedule** for scheduling text messages *   **topup** for adding credits to your account 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Value differs by **type**: *   for **sms**, it is the sent messages amount *   for **number**, it is a dedicated phone number *   for **schedule**, it is a scheduled messages amount *   for **top-up**, it is an invoice ID 
   * @member {String} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Optional comment.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;



  return exports;
}));


