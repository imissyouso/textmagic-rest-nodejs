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
    root.TextmagicClient.DeleteChatMessagesBulkInputObject = factory(root.TextmagicClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeleteChatMessagesBulkInputObject model module.
   * @module model/DeleteChatMessagesBulkInputObject
   * @version 2.0.611
   */

  /**
   * Constructs a new <code>DeleteChatMessagesBulkInputObject</code>.
   * @alias module:model/DeleteChatMessagesBulkInputObject
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DeleteChatMessagesBulkInputObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteChatMessagesBulkInputObject} obj Optional instance to populate.
   * @return {module:model/DeleteChatMessagesBulkInputObject} The populated <code>DeleteChatMessagesBulkInputObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('inbound_ids')) {
        obj['inbound_ids'] = ApiClient.convertToType(data['inbound_ids'], 'String');
      }
      if (data.hasOwnProperty('sent_ids')) {
        obj['sent_ids'] = ApiClient.convertToType(data['sent_ids'], 'String');
      }
      if (data.hasOwnProperty('calls_ids')) {
        obj['calls_ids'] = ApiClient.convertToType(data['calls_ids'], 'String');
      }
      if (data.hasOwnProperty('all')) {
        obj['all'] = ApiClient.convertToType(data['all'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Inbound messages ID(s) to delete. Require when \"all\" equal to 0 (false).
   * @member {String} inbound_ids
   */
  exports.prototype['inbound_ids'] = undefined;
  /**
   * Sent messages ID(s) to delete. Require when \"all\" equal to 0 (false).
   * @member {String} sent_ids
   */
  exports.prototype['sent_ids'] = undefined;
  /**
   * Calls ID(s) to delete. Require when \"all\" equal to 0 (false).
   * @member {String} calls_ids
   */
  exports.prototype['calls_ids'] = undefined;
  /**
   * Default is 0 (false). If set to 1 all the entities will be removed.
   * @member {Boolean} all
   */
  exports.prototype['all'] = undefined;



  return exports;
}));


