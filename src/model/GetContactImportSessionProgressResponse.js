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
    root.TextmagicClient.GetContactImportSessionProgressResponse = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetContactImportSessionProgressResponse model module.
   * @module model/GetContactImportSessionProgressResponse
   * @version 2.0.613
   */

  /**
   * Constructs a new <code>GetContactImportSessionProgressResponse</code>.
   * @alias module:model/GetContactImportSessionProgressResponse
   * @class
   * @param status {Number} 
   * @param processed {Number} How many contacts have been imported.
   */
  var exports = function(status, processed) {
    var _this = this;

    _this['status'] = status;
    _this['processed'] = processed;
  };

  /**
   * Constructs a <code>GetContactImportSessionProgressResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetContactImportSessionProgressResponse} obj Optional instance to populate.
   * @return {module:model/GetContactImportSessionProgressResponse} The populated <code>GetContactImportSessionProgressResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('processed')) {
        obj['processed'] = ApiClient.convertToType(data['processed'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * How many contacts have been imported.
   * @member {Number} processed
   */
  exports.prototype['processed'] = undefined;



  return exports;
}));


