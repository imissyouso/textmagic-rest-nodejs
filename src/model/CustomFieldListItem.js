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
    root.TextmagicClient.CustomFieldListItem = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CustomFieldListItem model module.
   * @module model/CustomFieldListItem
   * @version 2.0.640
   */

  /**
   * Constructs a new <code>CustomFieldListItem</code>.
   * @alias module:model/CustomFieldListItem
   * @class
   * @param id {Number} Custom Field ID.
   * @param value {String} Custom Field value.
   */
  var exports = function(id, value) {
    var _this = this;

    _this['id'] = id;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>CustomFieldListItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomFieldListItem} obj Optional instance to populate.
   * @return {module:model/CustomFieldListItem} The populated <code>CustomFieldListItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Custom Field ID.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Custom Field value.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


