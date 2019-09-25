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
    define(['ApiClient', 'model/ForwardedCall'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ForwardedCall'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetForwardedCallsResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.ForwardedCall);
  }
}(this, function(ApiClient, ForwardedCall) {
  'use strict';




  /**
   * The GetForwardedCallsResponse model module.
   * @module model/GetForwardedCallsResponse
   * @version 2.0.401
   */

  /**
   * Constructs a new <code>GetForwardedCallsResponse</code>.
   * @alias module:model/GetForwardedCallsResponse
   * @class
   * @param page {Number} 
   * @param pageCount {Number} 
   * @param limit {Number} 
   * @param resources {Array.<module:model/ForwardedCall>} 
   */
  var exports = function(page, pageCount, limit, resources) {
    var _this = this;

    _this['page'] = page;
    _this['pageCount'] = pageCount;
    _this['limit'] = limit;
    _this['resources'] = resources;
  };

  /**
   * Constructs a <code>GetForwardedCallsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetForwardedCallsResponse} obj Optional instance to populate.
   * @return {module:model/GetForwardedCallsResponse} The populated <code>GetForwardedCallsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Number');
      }
      if (data.hasOwnProperty('pageCount')) {
        obj['pageCount'] = ApiClient.convertToType(data['pageCount'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [ForwardedCall]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/ForwardedCall>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


