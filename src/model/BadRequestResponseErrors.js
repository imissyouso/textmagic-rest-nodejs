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
    root.TextmagicClient.BadRequestResponseErrors = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BadRequestResponseErrors model module.
   * @module model/BadRequestResponseErrors
   * @version 2.0.444
   */

  /**
   * Constructs a new <code>BadRequestResponseErrors</code>.
   * @alias module:model/BadRequestResponseErrors
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BadRequestResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequestResponseErrors} obj Optional instance to populate.
   * @return {module:model/BadRequestResponseErrors} The populated <code>BadRequestResponseErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('common')) {
        obj['common'] = ApiClient.convertToType(data['common'], ['String']);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} common
   */
  exports.prototype['common'] = undefined;
  /**
   * @member {Object} fields
   */
  exports.prototype['fields'] = undefined;



  return exports;
}));


