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
    define(['ApiClient', 'model/MessageSession'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageSession'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetAllMessageSessionsPaginatedResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession);
  }
}(this, function(ApiClient, MessageSession) {
  'use strict';




  /**
   * The GetAllMessageSessionsPaginatedResponse model module.
   * @module model/GetAllMessageSessionsPaginatedResponse
   * @version 2.0.545
   */

  /**
   * Constructs a new <code>GetAllMessageSessionsPaginatedResponse</code>.
   * @alias module:model/GetAllMessageSessionsPaginatedResponse
   * @class
   * @param page {Number} 
   * @param pageCount {Number} The total number of pages.
   * @param limit {Number} The number of results per page.
   * @param resources {Array.<module:model/MessageSession>} 
   */
  var exports = function(page, pageCount, limit, resources) {
    var _this = this;

    _this['page'] = page;
    _this['pageCount'] = pageCount;
    _this['limit'] = limit;
    _this['resources'] = resources;
  };

  /**
   * Constructs a <code>GetAllMessageSessionsPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllMessageSessionsPaginatedResponse} obj Optional instance to populate.
   * @return {module:model/GetAllMessageSessionsPaginatedResponse} The populated <code>GetAllMessageSessionsPaginatedResponse</code> instance.
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
        obj['resources'] = ApiClient.convertToType(data['resources'], [MessageSession]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} page
   */
  exports.prototype['page'] = undefined;
  /**
   * The total number of pages.
   * @member {Number} pageCount
   */
  exports.prototype['pageCount'] = undefined;
  /**
   * The number of results per page.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/MessageSession>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


