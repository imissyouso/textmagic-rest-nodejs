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
    root.TextmagicClient.CreateContactInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateContactInputObject model module.
   * @module model/CreateContactInputObject
   * @version 2.0.428
   */

  /**
   * Constructs a new <code>CreateContactInputObject</code>.
   * @alias module:model/CreateContactInputObject
   * @class
   * @param phone {String} Contact phone number in E.164 (international) format without leading + or zeroes
   * @param lists {String} Array of list resources id contact will be assigned to
   */
  var exports = function(phone, lists) {
    var _this = this;



    _this['phone'] = phone;


    _this['lists'] = lists;






  };

  /**
   * Constructs a <code>CreateContactInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateContactInputObject} obj Optional instance to populate.
   * @return {module:model/CreateContactInputObject} The populated <code>CreateContactInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('lists')) {
        obj['lists'] = ApiClient.convertToType(data['lists'], 'String');
      }
      if (data.hasOwnProperty('favorited')) {
        obj['favorited'] = ApiClient.convertToType(data['favorited'], 'Boolean');
      }
      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Number');
      }
      if (data.hasOwnProperty('customFieldValues')) {
        obj['customFieldValues'] = ApiClient.convertToType(data['customFieldValues'], Object);
      }
      if (data.hasOwnProperty('local')) {
        obj['local'] = ApiClient.convertToType(data['local'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contact first name
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Contact last name
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Contact phone number in E.164 (international) format without leading + or zeroes
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Contact email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Contact company name
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Array of list resources id contact will be assigned to
   * @member {String} lists
   */
  exports.prototype['lists'] = undefined;
  /**
   * Is contact favorited
   * @member {Boolean} favorited
   */
  exports.prototype['favorited'] = undefined;
  /**
   * Is contact blocked for outgoing and incoming messaging
   * @member {Boolean} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * Force type of phone. Possible values: 0 - landline, 1 - mobile. Default is -1 (auto detection)
   * @member {Number} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Object} customFieldValues
   */
  exports.prototype['customFieldValues'] = undefined;
  /**
   * Treat phone number passed in request body as local
   * @member {Number} local
   */
  exports.prototype['local'] = undefined;
  /**
   * 2-letter ISO country code for local phone numbers, used when local is  set to true. Default is account country
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


