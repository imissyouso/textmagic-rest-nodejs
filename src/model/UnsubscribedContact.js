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
    root.TextmagicClient.UnsubscribedContact = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UnsubscribedContact model module.
   * @module model/UnsubscribedContact
   * @version 2.0.473
   */

  /**
   * Constructs a new <code>UnsubscribedContact</code>.
   * @alias module:model/UnsubscribedContact
   * @class
   * @param id {Number} 
   * @param phone {String} 
   * @param unsubscribeTime {Date} 
   * @param firstName {String} 
   * @param lastName {String} 
   */
  var exports = function(id, phone, unsubscribeTime, firstName, lastName) {
    var _this = this;

    _this['id'] = id;
    _this['phone'] = phone;
    _this['unsubscribeTime'] = unsubscribeTime;
    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
  };

  /**
   * Constructs a <code>UnsubscribedContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscribedContact} obj Optional instance to populate.
   * @return {module:model/UnsubscribedContact} The populated <code>UnsubscribedContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('unsubscribeTime')) {
        obj['unsubscribeTime'] = ApiClient.convertToType(data['unsubscribeTime'], 'Date');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Date} unsubscribeTime
   */
  exports.prototype['unsubscribeTime'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;



  return exports;
}));


