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
    define(['ApiClient', 'model/BadRequestResponseErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BadRequestResponseErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.BadRequestResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.BadRequestResponseErrors);
  }
}(this, function(ApiClient, BadRequestResponseErrors) {
  'use strict';




  /**
   * The BadRequestResponse model module.
   * @module model/BadRequestResponse
   * @version 2.0.431
   */

  /**
   * Constructs a new <code>BadRequestResponse</code>.
   * Returned when the form has errors
   * @alias module:model/BadRequestResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>BadRequestResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequestResponse} obj Optional instance to populate.
   * @return {module:model/BadRequestResponse} The populated <code>BadRequestResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('errors')) {
        obj['errors'] = BadRequestResponseErrors.constructFromObject(data['errors']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/BadRequestResponseErrors} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));


