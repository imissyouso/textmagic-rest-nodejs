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
    root.TextmagicClient.ClearAndAssignContactsToListInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClearAndAssignContactsToListInputObject model module.
   * @module model/ClearAndAssignContactsToListInputObject
   * @version 2.0.640
   */

  /**
   * Constructs a new <code>ClearAndAssignContactsToListInputObject</code>.
   * @alias module:model/ClearAndAssignContactsToListInputObject
   * @class
   * @param contacts {String} Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user
   */
  var exports = function(contacts) {
    var _this = this;

    _this['contacts'] = contacts;
  };

  /**
   * Constructs a <code>ClearAndAssignContactsToListInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClearAndAssignContactsToListInputObject} obj Optional instance to populate.
   * @return {module:model/ClearAndAssignContactsToListInputObject} The populated <code>ClearAndAssignContactsToListInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contact ID(s), separated by comma or 'all' to add all contacts belonging to the current user
   * @member {String} contacts
   */
  exports.prototype['contacts'] = undefined;



  return exports;
}));


