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
    define(['ApiClient', 'model/MessageOut'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageOut'));
  } else {
    // Browser globals (root is window)
    if (!root.TextmagicClient) {
      root.TextmagicClient = {};
    }
    root.TextmagicClient.GetOutboundMessagesHistoryPaginatedResponse = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageOut);
  }
}(this, function(ApiClient, MessageOut) {
  'use strict';




  /**
   * The GetOutboundMessagesHistoryPaginatedResponse model module.
   * @module model/GetOutboundMessagesHistoryPaginatedResponse
   * @version 2.0.544
   */

  /**
   * Constructs a new <code>GetOutboundMessagesHistoryPaginatedResponse</code>.
   * @alias module:model/GetOutboundMessagesHistoryPaginatedResponse
   * @class
   * @param lastId {Number} 
   * @param nextLastId {Number} 
   * @param limit {Number} The number of results per page.
   * @param resources {Array.<module:model/MessageOut>} 
   */
  var exports = function(lastId, nextLastId, limit, resources) {
    var _this = this;

    _this['lastId'] = lastId;
    _this['nextLastId'] = nextLastId;
    _this['limit'] = limit;
    _this['resources'] = resources;
  };

  /**
   * Constructs a <code>GetOutboundMessagesHistoryPaginatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetOutboundMessagesHistoryPaginatedResponse} obj Optional instance to populate.
   * @return {module:model/GetOutboundMessagesHistoryPaginatedResponse} The populated <code>GetOutboundMessagesHistoryPaginatedResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastId')) {
        obj['lastId'] = ApiClient.convertToType(data['lastId'], 'Number');
      }
      if (data.hasOwnProperty('nextLastId')) {
        obj['nextLastId'] = ApiClient.convertToType(data['nextLastId'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], [MessageOut]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} lastId
   */
  exports.prototype['lastId'] = undefined;
  /**
   * @member {Number} nextLastId
   */
  exports.prototype['nextLastId'] = undefined;
  /**
   * The number of results per page.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/MessageOut>} resources
   */
  exports.prototype['resources'] = undefined;



  return exports;
}));


