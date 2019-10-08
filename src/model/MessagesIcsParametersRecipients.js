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
    root.TextmagicClient.MessagesIcsParametersRecipients = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessagesIcsParametersRecipients model module.
   * @module model/MessagesIcsParametersRecipients
   * @version 2.0.545
   */

  /**
   * Constructs a new <code>MessagesIcsParametersRecipients</code>.
   * @alias module:model/MessagesIcsParametersRecipients
   * @class
   * @param contacts {Array.<Number>} 
   * @param groups {Array.<Number>} 
   * @param numbers {Array.<String>} 
   */
  var exports = function(contacts, groups, numbers) {
    var _this = this;

    _this['contacts'] = contacts;
    _this['groups'] = groups;
    _this['numbers'] = numbers;
  };

  /**
   * Constructs a <code>MessagesIcsParametersRecipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessagesIcsParametersRecipients} obj Optional instance to populate.
   * @return {module:model/MessagesIcsParametersRecipients} The populated <code>MessagesIcsParametersRecipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], ['Number']);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], ['Number']);
      }
      if (data.hasOwnProperty('numbers')) {
        obj['numbers'] = ApiClient.convertToType(data['numbers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {Array.<Number>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Array.<String>} numbers
   */
  exports.prototype['numbers'] = undefined;



  return exports;
}));


