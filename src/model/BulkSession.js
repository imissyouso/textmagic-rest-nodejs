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
    root.TextmagicClient.BulkSession = factory(root.TextmagicClient.ApiClient, root.TextmagicClient.MessageSession);
  }
}(this, function(ApiClient, MessageSession) {
  'use strict';




  /**
   * The BulkSession model module.
   * @module model/BulkSession
   * @version 2.0.604
   */

  /**
   * Constructs a new <code>BulkSession</code>.
   * @alias module:model/BulkSession
   * @class
   * @param id {Number} 
   * @param status {String} 
   * @param itemsProcessed {Number} 
   * @param itemsTotal {Number} 
   * @param createdAt {Date} 
   * @param session {module:model/MessageSession} 
   * @param text {String} 
   */
  var exports = function(id, status, itemsProcessed, itemsTotal, createdAt, session, text) {
    var _this = this;

    _this['id'] = id;
    _this['status'] = status;
    _this['itemsProcessed'] = itemsProcessed;
    _this['itemsTotal'] = itemsTotal;
    _this['createdAt'] = createdAt;
    _this['session'] = session;
    _this['text'] = text;
  };

  /**
   * Constructs a <code>BulkSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkSession} obj Optional instance to populate.
   * @return {module:model/BulkSession} The populated <code>BulkSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('itemsProcessed')) {
        obj['itemsProcessed'] = ApiClient.convertToType(data['itemsProcessed'], 'Number');
      }
      if (data.hasOwnProperty('itemsTotal')) {
        obj['itemsTotal'] = ApiClient.convertToType(data['itemsTotal'], 'Number');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('session')) {
        obj['session'] = MessageSession.constructFromObject(data['session']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Number} itemsProcessed
   */
  exports.prototype['itemsProcessed'] = undefined;
  /**
   * @member {Number} itemsTotal
   */
  exports.prototype['itemsTotal'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {module:model/MessageSession} session
   */
  exports.prototype['session'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


