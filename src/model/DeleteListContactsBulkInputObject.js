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
    root.TextmagicClient.DeleteListContactsBulkInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteListContactsBulkInputObject model module.
   * @module model/DeleteListContactsBulkInputObject
   * @version 2.0.543
   */

  /**
   * Constructs a new <code>DeleteListContactsBulkInputObject</code>.
   * @alias module:model/DeleteListContactsBulkInputObject
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DeleteListContactsBulkInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteListContactsBulkInputObject} obj Optional instance to populate.
   * @return {module:model/DeleteListContactsBulkInputObject} The populated <code>DeleteListContactsBulkInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ids')) {
        obj['ids'] = ApiClient.convertToType(data['ids'], 'String');
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Entity ID(s), separated by comma
   * @member {String} ids
   */
  exports.prototype['ids'] = undefined;
  /**
   * Default is 0 (false). If set to 1 all the entities will be removed.
   * @member {Number} all
   */
  exports.prototype['all'] = undefined;



  return exports;
}));


